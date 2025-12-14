const questions=[
    {
        "num": 1,
        "question_en": "What is the purpose of the 'init' function in Go?",
        "question_hi": "Go में 'init' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Package initialization", "Program startup", "Variable declaration", "Function initialization"],
        "options_hi": ["पैकेज इनिशियलाइज़ेशन", "प्रोग्राम स्टार्टअप", "वेरिएबल डिक्लेरेशन", "फंक्शन इनिशियलाइज़ेशन"],
        "answer_en": "Package initialization",
        "answer_hi": "पैकेज इनिशियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which data type is used for dynamic arrays in Go?",
        "question_hi": "Go में डायनामिक ऐरे के लिए किस डेटा टाइप का उपयोग किया जाता है?",
        "options_en": ["Slice", "Array", "Vector", "List"],
        "options_hi": ["स्लाइस", "ऐरे", "वेक्टर", "लिस्ट"],
        "answer_en": "Slice",
        "answer_hi": "स्लाइस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the zero value for an interface in Go?",
        "question_hi": "Go में इंटरफेस का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "null", "undefined", "zero"],
        "options_hi": ["nil", "null", "अनडिफाइंड", "जीरो"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you create a slice from an array?",
        "question_hi": "ऐरे से स्लाइस कैसे बनाते हैं?",
        "options_en": ["array[start:end]", "slice(array)", "array.slice()", "make(slice, array)"],
        "options_hi": ["array[start:end]", "slice(array)", "array.slice()", "make(slice, array)"],
        "answer_en": "array[start:end]",
        "answer_hi": "array[start:end]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the 'cap' function?",
        "question_hi": "'cap' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Returns capacity of slice", "Returns capital letter", "Captures value", "Capacity planning"],
        "options_hi": ["स्लाइस की कैपेसिटी रिटर्न करता है", "कैपिटल लेटर रिटर्न करता है", "वैल्यू कैप्चर करता है", "कैपेसिटी प्लानिंग"],
        "answer_en": "Returns capacity of slice",
        "answer_hi": "स्लाइस की कैपेसिटी रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which package is used for string manipulation?",
        "question_hi": "स्ट्रिंग मैनिपुलेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["strings", "string", "str", "text"],
        "options_hi": ["strings", "string", "str", "text"],
        "answer_en": "strings",
        "answer_hi": "strings",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How do you convert a string to uppercase?",
        "question_hi": "स्ट्रिंग को अप्परकेस में कैसे कन्वर्ट करते हैं?",
        "options_en": ["strings.ToUpper()", "string.upper()", "str.ToUpper()", "toUpper(string)"],
        "options_hi": ["strings.ToUpper()", "string.upper()", "str.ToUpper()", "toUpper(string)"],
        "answer_en": "strings.ToUpper()",
        "answer_hi": "strings.ToUpper()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the purpose of the 'range' keyword in for loops?",
        "question_hi": "for लूप में 'range' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Iterates over elements", "Defines range", "Sets limits", "Creates sequences"],
        "options_hi": ["एलिमेंट पर इटरेट करता है", "रेंज डिफाइन करता है", "लिमिट सेट करता है", "सीक्वेंस बनाता है"],
        "answer_en": "Iterates over elements",
        "answer_hi": "एलिमेंट पर इटरेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you check if a string contains a substring?",
        "question_hi": "स्ट्रिंग में सबस्ट्रिंग है या नहीं कैसे चेक करते हैं?",
        "options_en": ["strings.Contains()", "string.contains()", "str.Contains()", "contains(string, substring)"],
        "options_hi": ["strings.Contains()", "string.contains()", "str.Contains()", "contains(string, substring)"],
        "answer_en": "strings.Contains()",
        "answer_hi": "strings.Contains()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the difference between '==' and '=' in Go?",
        "question_hi": "Go में '==' और '=' में क्या अंतर है?",
        "options_en": ["== compares, = assigns", "No difference", "= compares, == assigns", "Both are comparison operators"],
        "options_hi": ["== तुलना करता है, = असाइन करता है", "कोई अंतर नहीं", "= तुलना करता है, == असाइन करता है", "दोनों कम्पेरिजन ऑपरेटर हैं"],
        "answer_en": "== compares, = assigns",
        "answer_hi": "== तुलना करता है, = असाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you declare a constant with a specific type?",
        "question_hi": "स्पेसिफिक टाइप के साथ कॉन्स्टेंट कैसे डिक्लेयर करते हैं?",
        "options_en": ["const Name type = value", "const Name = value(type)", "constant Name type = value", "const Name: type = value"],
        "options_hi": ["const Name type = value", "const Name = value(type)", "constant Name type = value", "const Name: type = value"],
        "answer_en": "const Name type = value",
        "answer_hi": "const Name type = value",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of the 'fallthrough' keyword in switch?",
        "question_hi": "switch में 'fallthrough' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Continues to next case", "Falls to default", "Breaks switch", "Returns value"],
        "options_hi": ["अगले केस में कंटिन्यू करता है", "डिफॉल्ट में जाता है", "स्विच ब्रेक करता है", "वैल्यू रिटर्न करता है"],
        "answer_en": "Continues to next case",
        "answer_hi": "अगले केस में कंटिन्यू करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you create a map with string keys and integer values?",
        "question_hi": "स्ट्रिंग की और इंटीजर वैल्यू वाला मैप कैसे बनाते हैं?",
        "options_en": ["map[string]int", "map{string:int}", "Map[string, int]", "string-int map"],
        "options_hi": ["map[string]int", "map{string:int}", "Map[string, int]", "string-int map"],
        "answer_en": "map[string]int",
        "answer_hi": "map[string]int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the zero value for a channel?",
        "question_hi": "चैनल का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "closed channel", "open channel", "empty channel"],
        "options_hi": ["nil", "क्लोज्ड चैनल", "ओपन चैनल", "एम्प्टी चैनल"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How do you send a value to a channel?",
        "question_hi": "चैनल में वैल्यू कैसे भेजते हैं?",
        "options_en": ["channel <- value", "channel.send(value)", "send(channel, value)", "channel -> value"],
        "options_hi": ["channel <- value", "channel.send(value)", "send(channel, value)", "channel -> value"],
        "answer_en": "channel <- value",
        "answer_hi": "channel <- value",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the purpose of the 'select' statement with default case?",
        "question_hi": "डिफॉल्ट केस के साथ 'select' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Non-blocking channel operations", "Default channel", "Select default channel", "Fallback option"],
        "options_hi": ["नॉन-ब्लॉकिंग चैनल ऑपरेशन", "डिफॉल्ट चैनल", "डिफॉल्ट चैनल सेलेक्ट करना", "फॉलबैक ऑप्शन"],
        "answer_en": "Non-blocking channel operations",
        "answer_hi": "नॉन-ब्लॉकिंग चैनल ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you implement inheritance in Go?",
        "question_hi": "Go में इनहेरिटेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using composition and embedding", "Using extends keyword", "Using inheritance keyword", "Using class hierarchy"],
        "options_hi": ["कम्पोजिशन और एम्बेडिंग का उपयोग करके", "extends कीवर्ड का उपयोग करके", "inheritance कीवर्ड का उपयोग करके", "क्लास हायरार्की का उपयोग करके"],
        "answer_en": "Using composition and embedding",
        "answer_hi": "कम्पोजिशन और एम्बेडिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of the 'sync.Once' type?",
        "question_hi": "'sync.Once' टाइप का उद्देश्य क्या है?",
        "options_en": ["Execute function exactly once", "Synchronize once", "Run once per program", "One-time execution"],
        "options_hi": ["फंक्शन को एक्सैक्टली एक बार एक्जिक्यूट करना", "एक बार सिंक्रोनाइज़ करना", "प्रोग्राम में एक बार रन करना", "वन-टाइम एक्जिक्यूशन"],
        "answer_en": "Execute function exactly once",
        "answer_hi": "फंक्शन को एक्सैक्टली एक बार एक्जिक्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How do you create a time ticker in Go?",
        "question_hi": "Go में टाइम टिकर कैसे बनाते हैं?",
        "options_en": ["time.NewTicker()", "ticker.New()", "time.Ticker()", "new time.Ticker()"],
        "options_hi": ["time.NewTicker()", "ticker.New()", "time.Ticker()", "new time.Ticker()"],
        "answer_en": "time.NewTicker()",
        "answer_hi": "time.NewTicker()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the purpose of the 'context.WithValue' function?",
        "question_hi": "'context.WithValue' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Store request-scoped values", "Set context value", "Create value context", "Initialize context with data"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यू स्टोर करना", "कॉन्टेक्स्ट वैल्यू सेट करना", "वैल्यू कॉन्टेक्स्ट बनाना", "डेटा के साथ कॉन्टेक्स्ट इनिशियलाइज़ करना"],
        "answer_en": "Store request-scoped values",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यू स्टोर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you parse JSON data in Go?",
        "question_hi": "Go में JSON डेटा कैसे पार्स करते हैं?",
        "options_en": ["json.Unmarshal()", "json.Parse()", "json.Decode()", "parse.JSON()"],
        "options_hi": ["json.Unmarshal()", "json.Parse()", "json.Decode()", "parse.JSON()"],
        "answer_en": "json.Unmarshal()",
        "answer_hi": "json.Unmarshal()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of struct field tags in JSON?",
        "question_hi": "JSON में स्ट्रक्चर फील्ड टैग का उद्देश्य क्या है?",
        "options_en": ["Control JSON field names", "Add comments", "Validate data", "Format output"],
        "options_hi": ["JSON फील्ड नेम कंट्रोल करना", "कमेंट ऐड करना", "डेटा वैलिडेट करना", "आउटपुट फॉर्मेट करना"],
        "answer_en": "Control JSON field names",
        "answer_hi": "JSON फील्ड नेम कंट्रोल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you handle file operations in Go?",
        "question_hi": "Go में फाइल ऑपरेशन कैसे हैंडल करते हैं?",
        "options_en": ["Using os package", "Using file package", "Using io package", "Using fs package"],
        "options_hi": ["os पैकेज का उपयोग करके", "file पैकेज का उपयोग करके", "io पैकेज का उपयोग करके", "fs पैकेज का उपयोग करके"],
        "answer_en": "Using os package",
        "answer_hi": "os पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of the 'io.Reader' interface?",
        "question_hi": "'io.Reader' इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["Read data from source", "Read files", "Input operations", "Stream reading"],
        "options_hi": ["सोर्स से डेटा पढ़ना", "फाइल पढ़ना", "इनपुट ऑपरेशन", "स्ट्रीम रीडिंग"],
        "answer_en": "Read data from source",
        "answer_hi": "सोर्स से डेटा पढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you write to multiple writers in Go?",
        "question_hi": "Go में मल्टीपल राइटर में कैसे लिखते हैं?",
        "options_en": ["io.MultiWriter()", "multi.Writer()", "io.MultipleWriter()", "writer.Multi()"],
        "options_hi": ["io.MultiWriter()", "multi.Writer()", "io.MultipleWriter()", "writer.Multi()"],
        "answer_en": "io.MultiWriter()",
        "answer_hi": "io.MultiWriter()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of the 'bufio.Scanner' type?",
        "question_hi": "'bufio.Scanner' टाइप का उद्देश्य क्या है?",
        "options_en": ["Read input line by line", "Scan files", "Buffer operations", "Text scanning"],
        "options_hi": ["इनपुट को लाइन बाय लाइन पढ़ना", "फाइल स्कैन करना", "बफर ऑपरेशन", "टेक्स्ट स्कैनिंग"],
        "answer_en": "Read input line by line",
        "answer_hi": "इनपुट को लाइन बाय लाइन पढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you create a custom HTTP handler?",
        "question_hi": "कस्टम HTTP हैंडलर कैसे बनाते हैं?",
        "options_en": ["Implement http.Handler interface", "Create handler function", "Use http.HandleFunc", "Implement Handler struct"],
        "options_hi": ["http.Handler इंटरफेस इम्प्लीमेंट करें", "हैंडलर फंक्शन बनाएं", "http.HandleFunc का उपयोग करें", "Handler स्ट्रक्चर इम्प्लीमेंट करें"],
        "answer_en": "Implement http.Handler interface",
        "answer_hi": "http.Handler इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is middleware in Go HTTP handlers?",
        "question_hi": "Go HTTP हैंडलर में मिडलवेयर क्या है?",
        "options_en": ["Chain of handlers", "Intermediate software", "Request processor", "Handler wrapper"],
        "options_hi": ["हैंडलर की चेन", "इंटरमीडिएट सॉफ्टवेयर", "रिक्वेस्ट प्रोसेसर", "हैंडलर रैपर"],
        "answer_en": "Chain of handlers",
        "answer_hi": "हैंडलर की चेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you set HTTP response headers?",
        "question_hi": "HTTP रिस्पॉन्स हेडर कैसे सेट करते हैं?",
        "options_en": ["w.Header().Set()", "w.SetHeader()", "response.SetHeader()", "header.Set()"],
        "options_hi": ["w.Header().Set()", "w.SetHeader()", "response.SetHeader()", "header.Set()"],
        "answer_en": "w.Header().Set()",
        "answer_hi": "w.Header().Set()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of the 'database/sql' package?",
        "question_hi": "'database/sql' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Database operations interface", "SQL queries", "Database driver", "SQL parser"],
        "options_hi": ["डेटाबेस ऑपरेशन इंटरफेस", "SQL क्वेरी", "डेटाबेस ड्राइवर", "SQL पार्सर"],
        "answer_en": "Database operations interface",
        "answer_hi": "डेटाबेस ऑपरेशन इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you prevent SQL injection in Go?",
        "question_hi": "Go में SQL इंजेक्शन कैसे प्रिवेंट करते हैं?",
        "options_en": ["Use parameterized queries", "Validate input", "Escape strings", "Use prepared statements"],
        "options_hi": ["पैरामीटराइज्ड क्वेरी का उपयोग करें", "इनपुट वैलिडेट करें", "स्ट्रिंग एस्केप करें", "प्रिपेयर्ड स्टेटमेंट का उपयोग करें"],
        "answer_en": "Use parameterized queries",
        "answer_hi": "पैरामीटराइज्ड क्वेरी का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of the 'regexp' package?",
        "question_hi": "'regexp' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Regular expressions", "String matching", "Pattern matching", "Text processing"],
        "options_hi": ["रेगुलर एक्सप्रेशन", "स्ट्रिंग मैचिंग", "पैटर्न मैचिंग", "टेक्स्ट प्रोसेसिंग"],
        "answer_en": "Regular expressions",
        "answer_hi": "रेगुलर एक्सप्रेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you compile a regular expression in Go?",
        "question_hi": "Go में रेगुलर एक्सप्रेशन कैसे कम्पाइल करते हैं?",
        "options_en": ["regexp.Compile()", "regexp.New()", "regexp.Create()", "compile.Regexp()"],
        "options_hi": ["regexp.Compile()", "regexp.New()", "regexp.Create()", "compile.Regexp()"],
        "answer_en": "regexp.Compile()",
        "answer_hi": "regexp.Compile()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of the 'flag' package?",
        "question_hi": "'flag' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Command-line flag parsing", "Boolean flags", "Program flags", "Configuration flags"],
        "options_hi": ["कमांड-लाइन फ्लैग पार्सिंग", "बूलियन फ्लैग", "प्रोग्राम फ्लैग", "कॉन्फिगरेशन फ्लैग"],
        "answer_en": "Command-line flag parsing",
        "answer_hi": "कमांड-लाइन फ्लैग पार्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you define a command-line string flag?",
        "question_hi": "कमांड-लाइन स्ट्रिंग फ्लैग कैसे डिफाइन करते हैं?",
        "options_en": ["flag.String()", "flag.Str()", "flag.StringVar()", "string.Flag()"],
        "options_hi": ["flag.String()", "flag.Str()", "flag.StringVar()", "string.Flag()"],
        "answer_en": "flag.String()",
        "answer_hi": "flag.String()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of the 'log' package?",
        "question_hi": "'log' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Logging utilities", "Logical operations", "Login functionality", "Algorithm logging"],
        "options_hi": ["लॉगिंग यूटिलिटी", "लॉजिकल ऑपरेशन", "लॉगिन फंक्शनैलिटी", "अल्गोरिदम लॉगिंग"],
        "answer_en": "Logging utilities",
        "answer_hi": "लॉगिंग यूटिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you create a custom logger in Go?",
        "question_hi": "Go में कस्टम लॉगर कैसे बनाते हैं?",
        "options_en": ["log.New()", "new log.Logger()", "logger.New()", "custom.Logger()"],
        "options_hi": ["log.New()", "new log.Logger()", "logger.New()", "custom.Logger()"],
        "answer_en": "log.New()",
        "answer_hi": "log.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of the 'testing.T' type?",
        "question_hi": "'testing.T' टाइप का उद्देश्य क्या है?",
        "options_en": ["Test state and operations", "Test timing", "Test type", "Test template"],
        "options_hi": ["टेस्ट स्टेट और ऑपरेशन", "टेस्ट टाइमिंग", "टेस्ट टाइप", "टेस्ट टेम्पलेट"],
        "answer_en": "Test state and operations",
        "answer_hi": "टेस्ट स्टेट और ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you skip a test in Go?",
        "question_hi": "Go में टेस्ट कैसे स्किप करते हैं?",
        "options_en": ["t.Skip()", "t.SkipNow()", "skip.Test()", "testing.Skip()"],
        "options_hi": ["t.Skip()", "t.SkipNow()", "skip.Test()", "testing.Skip()"],
        "answer_en": "t.Skip()",
        "answer_hi": "t.Skip()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is table-driven testing in Go?",
        "question_hi": "Go में टेबल-ड्रिवन टेस्टिंग क्या है?",
        "options_en": ["Tests with multiple input-output pairs", "Database testing", "Table testing", "Data-driven testing"],
        "options_hi": ["मल्टीपल इनपुट-आउटपुट पेयर वाले टेस्ट", "डेटाबेस टेस्टिंग", "टेबल टेस्टिंग", "डेटा-ड्रिवन टेस्टिंग"],
        "answer_en": "Tests with multiple input-output pairs",
        "answer_hi": "मल्टीपल इनपुट-आउटपुट पेयर वाले टेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you run benchmarks in Go?",
        "question_hi": "Go में बेंचमार्क कैसे रन करते हैं?",
        "options_en": ["go test -bench", "go benchmark", "go test --bench", "go run -bench"],
        "options_hi": ["go test -bench", "go benchmark", "go test --bench", "go run -bench"],
        "answer_en": "go test -bench",
        "answer_hi": "go test -bench",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of the 'reflect' package?",
        "question_hi": "'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Runtime reflection", "Code inspection", "Type examination", "Program analysis"],
        "options_hi": ["रनटाइम रिफ्लेक्शन", "कोड इंस्पेक्शन", "टाइप एग्जामिनेशन", "प्रोग्राम एनालिसिस"],
        "answer_en": "Runtime reflection",
        "answer_hi": "रनटाइम रिफ्लेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you check if a value implements an interface?",
        "question_hi": "वैल्यू इंटरफेस इम्प्लीमेंट करती है या नहीं कैसे चेक करते हैं?",
        "options_en": ["Use type assertion", "reflect.TypeOf().Implements()", "Check interface implementation", "Use implements keyword"],
        "options_hi": ["टाइप असर्शन का उपयोग करें", "reflect.TypeOf().Implements()", "इंटरफेस इम्प्लीमेंटेशन चेक करें", "implements कीवर्ड का उपयोग करें"],
        "answer_en": "reflect.TypeOf().Implements()",
        "answer_hi": "reflect.TypeOf().Implements()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of the 'unsafe.Pointer' type?",
        "question_hi": "'unsafe.Pointer' टाइप का उद्देश्य क्या है?",
        "options_en": ["Convert between pointer types", "Unsafe operations", "Pointer arithmetic", "Memory manipulation"],
        "options_hi": ["पॉइंटर टाइप के बीच कन्वर्ट करना", "अनसेफ ऑपरेशन", "पॉइंटर अर्थमेटिक", "मेमोरी मैनिपुलेशन"],
        "answer_en": "Convert between pointer types",
        "answer_hi": "पॉइंटर टाइप के बीच कन्वर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you use CGO in Go?",
        "question_hi": "Go में CGO कैसे उपयोग करते हैं?",
        "options_en": ["Import C package", "Use cgo directive", "Include C code", "Link C libraries"],
        "options_hi": ["C पैकेज इम्पोर्ट करें", "cgo डायरेक्टिव का उपयोग करें", "C कोड इन्क्लूड करें", "C लाइब्रेरी लिंक करें"],
        "answer_en": "Import C package",
        "answer_hi": "C पैकेज इम्पोर्ट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of the 'go/build' package?",
        "question_hi": "'go/build' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Build information", "Package building", "Compilation details", "Build process"],
        "options_hi": ["बिल्ड इनफार्मेशन", "पैकेज बिल्डिंग", "कम्पाइलेशन डिटेल", "बिल्ड प्रोसेस"],
        "answer_en": "Build information",
        "answer_hi": "बिल्ड इनफार्मेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you get build constraints in Go?",
        "question_hi": "Go में बिल्ड कंस्ट्रेंट कैसे प्राप्त करते हैं?",
        "options_en": ["Use build tags", "Build constraints file", "go build -tags", "Constraint directives"],
        "options_hi": ["बिल्ड टैग का उपयोग करें", "बिल्ड कंस्ट्रेंट फाइल", "go build -tags", "कंस्ट्रेंट डायरेक्टिव"],
        "answer_en": "Use build tags",
        "answer_hi": "बिल्ड टैग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of the 'go/ast' package?",
        "question_hi": "'go/ast' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Abstract syntax tree", "Code analysis", "Syntax parsing", "Program structure"],
        "options_hi": ["अब्स्ट्रैक्ट सिंटैक्स ट्री", "कोड एनालिसिस", "सिंटैक्स पार्सिंग", "प्रोग्राम स्ट्रक्चर"],
        "answer_en": "Abstract syntax tree",
        "answer_hi": "अब्स्ट्रैक्ट सिंटैक्स ट्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you format Go source code?",
        "question_hi": "Go सोर्स कोड कैसे फॉर्मेट करते हैं?",
        "options_en": ["gofmt", "go fmt", "go format", "format go"],
        "options_hi": ["gofmt", "go fmt", "go format", "format go"],
        "answer_en": "gofmt",
        "answer_hi": "gofmt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of the 'go/doc' package?",
        "question_hi": "'go/doc' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Documentation extraction", "Doc comments", "Package documentation", "Code documentation"],
        "options_hi": ["डॉक्युमेंटेशन एक्सट्रैक्शन", "डॉक कमेंट", "पैकेज डॉक्युमेंटेशन", "कोड डॉक्युमेंटेशन"],
        "answer_en": "Documentation extraction",
        "answer_hi": "डॉक्युमेंटेशन एक्सट्रैक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you generate documentation for Go code?",
        "question_hi": "Go कोड के लिए डॉक्युमेंटेशन कैसे जनरेट करते हैं?",
        "options_en": ["godoc", "go doc", "go generate doc", "docgen"],
        "options_hi": ["godoc", "go doc", "go generate doc", "docgen"],
        "answer_en": "godoc",
        "answer_hi": "godoc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the purpose of the 'go/token' package?",
        "question_hi": "'go/token' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Token constants", "Lexical analysis", "Source tokens", "Code tokens"],
        "options_hi": ["टोकन कॉन्स्टेंट", "लेक्सिकल एनालिसिस", "सोर्स टोकन", "कोड टोकन"],
        "answer_en": "Token constants",
        "answer_hi": "टोकन कॉन्स्टेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you implement custom sorting in Go?",
        "question_hi": "Go में कस्टम सॉर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement sort.Interface", "Use sort.Sort", "Create comparator", "Define sort function"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करें", "sort.Sort का उपयोग करें", "कम्पेरेटर बनाएं", "सॉर्ट फंक्शन डिफाइन करें"],
        "answer_en": "Implement sort.Interface",
        "answer_hi": "sort.Interface इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the purpose of the 'crypto' package?",
        "question_hi": "'crypto' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Cryptographic operations", "Encryption", "Security", "Hashing"],
        "options_hi": ["क्रिप्टोग्राफिक ऑपरेशन", "एन्क्रिप्शन", "सिक्योरिटी", "हैशिंग"],
        "answer_en": "Cryptographic operations",
        "answer_hi": "क्रिप्टोग्राफिक ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you generate random numbers in Go?",
        "question_hi": "Go में रैंडम नंबर कैसे जनरेट करते हैं?",
        "options_en": ["Use math/rand", "rand.Int()", "random.Number()", "Generate random"],
        "options_hi": ["math/rand का उपयोग करें", "rand.Int()", "random.Number()", "रैंडम जनरेट करें"],
        "answer_en": "Use math/rand",
        "answer_hi": "math/rand का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of the 'time' package?",
        "question_hi": "'time' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Time and date operations", "Timing functions", "Clock operations", "Date calculations"],
        "options_hi": ["टाइम और डेट ऑपरेशन", "टाइमिंग फंक्शन", "क्लॉक ऑपरेशन", "डेट कैलकुलेशन"],
        "answer_en": "Time and date operations",
        "answer_hi": "टाइम और डेट ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you measure execution time in Go?",
        "question_hi": "Go में एक्जिक्यूशन टाइम कैसे मापते हैं?",
        "options_en": ["time.Since()", "time.Now() difference", "execution.Time()", "measure.Time()"],
        "options_hi": ["time.Since()", "time.Now() डिफरेंस", "execution.Time()", "measure.Time()"],
        "answer_en": "time.Since()",
        "answer_hi": "time.Since()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of the 'runtime' package?",
        "question_hi": "'runtime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Runtime operations", "Program runtime", "System interaction", "Go runtime control"],
        "options_hi": ["रनटाइम ऑपरेशन", "प्रोग्राम रनटाइम", "सिस्टम इंटरेक्शन", "Go रनटाइम कंट्रोल"],
        "answer_en": "Runtime operations",
        "answer_hi": "रनटाइम ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you get the number of CPU cores in Go?",
        "question_hi": "Go में CPU कोर की संख्या कैसे प्राप्त करते हैं?",
        "options_en": ["runtime.NumCPU()", "cpu.Count()", "system.CPUs()", "hardware.CPUCount()"],
        "options_hi": ["runtime.NumCPU()", "cpu.Count()", "system.CPUs()", "hardware.CPUCount()"],
        "answer_en": "runtime.NumCPU()",
        "answer_hi": "runtime.NumCPU()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the purpose of the 'os/exec' package?",
        "question_hi": "'os/exec' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Execute external commands", "Command execution", "System commands", "External processes"],
        "options_hi": ["एक्सटर्नल कमांड एक्जिक्यूट करना", "कमांड एक्जिक्यूशन", "सिस्टम कमांड", "एक्सटर्नल प्रोसेस"],
        "answer_en": "Execute external commands",
        "answer_hi": "एक्सटर्नल कमांड एक्जिक्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you run an external command in Go?",
        "question_hi": "Go में एक्सटर्नल कमांड कैसे रन करते हैं?",
        "options_en": ["exec.Command()", "command.Run()", "os.Exec()", "system.Command()"],
        "options_hi": ["exec.Command()", "command.Run()", "os.Exec()", "system.Command()"],
        "answer_en": "exec.Command()",
        "answer_hi": "exec.Command()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the purpose of the 'path/filepath' package?",
        "question_hi": "'path/filepath' पैकेज का उद्देश्य क्या है?",
        "options_en": ["File path manipulation", "Path operations", "File system paths", "Cross-platform paths"],
        "options_hi": ["फाइल पाथ मैनिपुलेशन", "पाथ ऑपरेशन", "फाइल सिस्टम पाथ", "क्रॉस-प्लेटफॉर्म पाथ"],
        "answer_en": "File path manipulation",
        "answer_hi": "फाइल पाथ मैनिपुलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you get the current working directory?",
        "question_hi": "करंट वर्किंग डायरेक्टरी कैसे प्राप्त करते हैं?",
        "options_en": ["os.Getwd()", "os.Cwd()", "filepath.Cwd()", "system.Getcwd()"],
        "options_hi": ["os.Getwd()", "os.Cwd()", "filepath.Cwd()", "system.Getcwd()"],
        "answer_en": "os.Getwd()",
        "answer_hi": "os.Getwd()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the purpose of the 'encoding' package?",
        "question_hi": "'encoding' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Data encoding", "Format conversion", "Data serialization", "Encoding interfaces"],
        "options_hi": ["डेटा एन्कोडिंग", "फॉर्मेट कन्वर्जन", "डेटा सीरियलाइज़ेशन", "एन्कोडिंग इंटरफेस"],
        "answer_en": "Data encoding",
        "answer_hi": "डेटा एन्कोडिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you encode data to JSON in Go?",
        "question_hi": "Go में डेटा को JSON में कैसे एनकोड करते हैं?",
        "options_en": ["json.Marshal()", "json.Encode()", "json.Serialize()", "encode.JSON()"],
        "options_hi": ["json.Marshal()", "json.Encode()", "json.Serialize()", "encode.JSON()"],
        "answer_en": "json.Marshal()",
        "answer_hi": "json.Marshal()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the purpose of the 'compress' package?",
        "question_hi": "'compress' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Data compression", "File compression", "Compression algorithms", "Data size reduction"],
        "options_hi": ["डेटा कम्प्रेशन", "फाइल कम्प्रेशन", "कम्प्रेशन अल्गोरिदम", "डेटा साइज रिडक्शन"],
        "answer_en": "Data compression",
        "answer_hi": "डेटा कम्प्रेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you create a gzip writer in Go?",
        "question_hi": "Go में gzip राइटर कैसे बनाते हैं?",
        "options_en": ["gzip.NewWriter()", "compress/gzip.Writer", "gzip.Writer()", "new gzip.Writer()"],
        "options_hi": ["gzip.NewWriter()", "compress/gzip.Writer", "gzip.Writer()", "new gzip.Writer()"],
        "answer_en": "gzip.NewWriter()",
        "answer_hi": "gzip.NewWriter()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the purpose of the 'archive' package?",
        "question_hi": "'archive' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Archive file formats", "File archiving", "Compressed archives", "Archive manipulation"],
        "options_hi": ["आर्काइव फाइल फॉर्मेट", "फाइल आर्काइविंग", "कम्प्रेस्ड आर्काइव", "आर्काइव मैनिपुलेशन"],
        "answer_en": "Archive file formats",
        "answer_hi": "आर्काइव फाइल फॉर्मेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you create a ZIP archive in Go?",
        "question_hi": "Go में ZIP आर्काइव कैसे बनाते हैं?",
        "options_en": ["archive/zip package", "zip.NewWriter()", "create zip archive", "zip.Archive()"],
        "options_hi": ["archive/zip पैकेज", "zip.NewWriter()", "zip आर्काइव बनाएं", "zip.Archive()"],
        "answer_en": "archive/zip package",
        "answer_hi": "archive/zip पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the purpose of the 'image' package?",
        "question_hi": "'image' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Image processing", "Image manipulation", "Graphics operations", "Image formats"],
        "options_hi": ["इमेज प्रोसेसिंग", "इमेज मैनिपुलेशन", "ग्राफिक्स ऑपरेशन", "इमेज फॉर्मेट"],
        "answer_en": "Image processing",
        "answer_hi": "इमेज प्रोसेसिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you decode a PNG image in Go?",
        "question_hi": "Go में PNG इमेज कैसे डिकोड करते हैं?",
        "options_en": ["image/png package", "png.Decode()", "image.Decode(png)", "decode.PNG()"],
        "options_hi": ["image/png पैकेज", "png.Decode()", "image.Decode(png)", "decode.PNG()"],
        "answer_en": "image/png package",
        "answer_hi": "image/png पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the purpose of the 'html' package?",
        "question_hi": "'html' पैकेज का उद्देश्य क्या है?",
        "options_en": ["HTML escaping", "HTML parsing", "Web content", "HTML generation"],
        "options_hi": ["HTML एस्केपिंग", "HTML पार्सिंग", "वेब कंटेंट", "HTML जनरेशन"],
        "answer_en": "HTML escaping",
        "answer_hi": "HTML एस्केपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you escape HTML in Go?",
        "question_hi": "Go में HTML कैसे एस्केप करते हैं?",
        "options_en": ["html.EscapeString()", "html.Escape()", "escape.HTML()", "html.Safe()"],
        "options_hi": ["html.EscapeString()", "html.Escape()", "escape.HTML()", "html.Safe()"],
        "answer_en": "html.EscapeString()",
        "answer_hi": "html.EscapeString()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the purpose of the 'template' package?",
        "question_hi": "'template' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Text templating", "Template processing", "String templates", "Document generation"],
        "options_hi": ["टेक्स्ट टेम्पलेटिंग", "टेम्पलेट प्रोसेसिंग", "स्ट्रिंग टेम्पलेट", "डॉक्युमेंट जनरेशन"],
        "answer_en": "Text templating",
        "answer_hi": "टेक्स्ट टेम्पलेटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you create an HTML template in Go?",
        "question_hi": "Go में HTML टेम्पलेट कैसे बनाते हैं?",
        "options_en": ["template.New()", "html/template package", "template.HTML()", "html.NewTemplate()"],
        "options_hi": ["template.New()", "html/template पैकेज", "template.HTML()", "html.NewTemplate()"],
        "answer_en": "html/template package",
        "answer_hi": "html/template पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of the 'bytes' package?",
        "question_hi": "'bytes' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Byte slice manipulation", "Byte operations", "Binary data", "Byte buffers"],
        "options_hi": ["बाइट स्लाइस मैनिपुलेशन", "बाइट ऑपरेशन", "बाइनरी डेटा", "बाइट बफर"],
        "answer_en": "Byte slice manipulation",
        "answer_hi": "बाइट स्लाइस मैनिपुलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you create a bytes buffer in Go?",
        "question_hi": "Go में बाइट बफर कैसे बनाते हैं?",
        "options_en": ["bytes.Buffer{}", "bytes.NewBuffer()", "new bytes.Buffer", "buffer.Bytes()"],
        "options_hi": ["bytes.Buffer{}", "bytes.NewBuffer()", "new bytes.Buffer", "buffer.Bytes()"],
        "answer_en": "bytes.Buffer{}",
        "answer_hi": "bytes.Buffer{}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the purpose of the 'strconv' package?",
        "question_hi": "'strconv' पैकेज का उद्देश्य क्या है?",
        "options_en": ["String conversion", "String to number", "Number to string", "String parsing"],
        "options_hi": ["स्ट्रिंग कन्वर्जन", "स्ट्रिंग से नंबर", "नंबर से स्ट्रिंग", "स्ट्रिंग पार्सिंग"],
        "answer_en": "String conversion",
        "answer_hi": "स्ट्रिंग कन्वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you convert a float to string in Go?",
        "question_hi": "Go में फ्लोट को स्ट्रिंग में कैसे कन्वर्ट करते हैं?",
        "options_en": ["strconv.FormatFloat()", "fmt.Sprint()", "string(float)", "float.String()"],
        "options_hi": ["strconv.FormatFloat()", "fmt.Sprint()", "string(float)", "float.String()"],
        "answer_en": "strconv.FormatFloat()",
        "answer_hi": "strconv.FormatFloat()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the purpose of the 'unicode' package?",
        "question_hi": "'unicode' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Unicode utilities", "Character properties", "Unicode operations", "Text processing"],
        "options_hi": ["यूनिकोड यूटिलिटी", "करैक्टर प्रॉपर्टी", "यूनिकोड ऑपरेशन", "टेक्स्ट प्रोसेसिंग"],
        "answer_en": "Unicode utilities",
        "answer_hi": "यूनिकोड यूटिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you check if a rune is a letter?",
        "question_hi": "रून लेटर है या नहीं कैसे चेक करते हैं?",
        "options_en": ["unicode.IsLetter()", "rune.IsLetter()", "is.Letter(rune)", "check.Letter(rune)"],
        "options_hi": ["unicode.IsLetter()", "rune.IsLetter()", "is.Letter(rune)", "check.Letter(rune)"],
        "answer_en": "unicode.IsLetter()",
        "answer_hi": "unicode.IsLetter()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the purpose of the 'sort' package?",
        "question_hi": "'sort' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Sorting algorithms", "Data sorting", "Collection ordering", "Sort utilities"],
        "options_hi": ["सॉर्टिंग अल्गोरिदम", "डेटा सॉर्टिंग", "कलेक्शन ऑर्डरिंग", "सॉर्ट यूटिलिटी"],
        "answer_en": "Sorting algorithms",
        "answer_hi": "सॉर्टिंग अल्गोरिदम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you sort a slice of integers?",
        "question_hi": "इंटीजर की स्लाइस कैसे सॉर्ट करते हैं?",
        "options_en": ["sort.Ints()", "sort.Sort(ints)", "ints.Sort()", "sort.IntSlice()"],
        "options_hi": ["sort.Ints()", "sort.Sort(ints)", "ints.Sort()", "sort.IntSlice()"],
        "answer_en": "sort.Ints()",
        "answer_hi": "sort.Ints()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the purpose of the 'container' package?",
        "question_hi": "'container' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Container data structures", "Data containers", "Collection types", "Container utilities"],
        "options_hi": ["कंटेनर डेटा स्ट्रक्चर", "डेटा कंटेनर", "कलेक्शन टाइप", "कंटेनर यूटिलिटी"],
        "answer_en": "Container data structures",
        "answer_hi": "कंटेनर डेटा स्ट्रक्चर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you use a heap in Go?",
        "question_hi": "Go में हीप कैसे उपयोग करते हैं?",
        "options_en": ["container/heap package", "heap.Init()", "Use heap interface", "Create heap structure"],
        "options_hi": ["container/heap पैकेज", "heap.Init()", "हीप इंटरफेस का उपयोग करें", "हीप स्ट्रक्चर बनाएं"],
        "answer_en": "container/heap package",
        "answer_hi": "container/heap पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the purpose of the 'index/suffixarray' package?",
        "question_hi": "'index/suffixarray' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Text indexing", "String search", "Suffix arrays", "Text analysis"],
        "options_hi": ["टेक्स्ट इंडेक्सिंग", "स्ट्रिंग सर्च", "सफिक्स ऐरे", "टेक्स्ट एनालिसिस"],
        "answer_en": "Text indexing",
        "answer_hi": "टेक्स्ट इंडेक्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you create a suffix array in Go?",
        "question_hi": "Go में सफिक्स ऐरे कैसे बनाते हैं?",
        "options_en": ["suffixarray.New()", "index/suffixarray package", "Create suffix array", "suffixarray.Create()"],
        "options_hi": ["suffixarray.New()", "index/suffixarray पैकेज", "सफिक्स ऐरे बनाएं", "suffixarray.Create()"],
        "answer_en": "suffixarray.New()",
        "answer_hi": "suffixarray.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of the 'go/parser' package?",
        "question_hi": "'go/parser' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Go source parsing", "Code parsing", "Source analysis", "Program parsing"],
        "options_hi": ["Go सोर्स पार्सिंग", "कोड पार्सिंग", "सोर्स एनालिसिस", "प्रोग्राम पार्सिंग"],
        "answer_en": "Go source parsing",
        "answer_hi": "Go सोर्स पार्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you parse Go source code?",
        "question_hi": "Go सोर्स कोड कैसे पार्स करते हैं?",
        "options_en": ["parser.ParseFile()", "go/parser package", "Parse source code", "parser.Go()"],
        "options_hi": ["parser.ParseFile()", "go/parser पैकेज", "सोर्स कोड पार्स करें", "parser.Go()"],
        "answer_en": "parser.ParseFile()",
        "answer_hi": "parser.ParseFile()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the purpose of the 'go/types' package?",
        "question_hi": "'go/types' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Go type checking", "Type information", "Program types", "Type analysis"],
        "options_hi": ["Go टाइप चेकिंग", "टाइप इनफार्मेशन", "प्रोग्राम टाइप", "टाइप एनालिसिस"],
        "answer_en": "Go type checking",
        "answer_hi": "Go टाइप चेकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you perform type checking in Go?",
        "question_hi": "Go में टाइप चेकिंग कैसे करते हैं?",
        "options_en": ["go/types package", "types.Check()", "Type checking functions", "Check types"],
        "options_hi": ["go/types पैकेज", "types.Check()", "टाइप चेकिंग फंक्शन", "टाइप चेक करें"],
        "answer_en": "go/types package",
        "answer_hi": "go/types पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the purpose of the 'net' package?",
        "question_hi": "'net' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Network I/O", "Network operations", "Socket programming", "Internet protocols"],
        "options_hi": ["नेटवर्क I/O", "नेटवर्क ऑपरेशन", "सॉकेट प्रोग्रामिंग", "इंटरनेट प्रोटोकॉल"],
        "answer_en": "Network I/O",
        "answer_hi": "नेटवर्क I/O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you create a TCP server in Go?",
        "question_hi": "Go में TCP सर्वर कैसे बनाते हैं?",
        "options_en": ["net.Listen()", "tcp.Listen()", "net.TCPListen()", "server.TCP()"],
        "options_hi": ["net.Listen()", "tcp.Listen()", "net.TCPListen()", "server.TCP()"],
        "answer_en": "net.Listen()",
        "answer_hi": "net.Listen()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of the 'crypto/tls' package?",
        "question_hi": "'crypto/tls' पैकेज का उद्देश्य क्या है?",
        "options_en": ["TLS encryption", "Secure connections", "SSL/TLS protocols", "Encrypted communication"],
        "options_hi": ["TLS एन्क्रिप्शन", "सिक्योर कनेक्शन", "SSL/TLS प्रोटोकॉल", "एन्क्रिप्टेड कम्युनिकेशन"],
        "answer_en": "TLS encryption",
        "answer_hi": "TLS एन्क्रिप्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you create a TLS configuration in Go?",
        "question_hi": "Go में TLS कॉन्फिगरेशन कैसे बनाते हैं?",
        "options_en": ["&tls.Config{}", "tls.NewConfig()", "tls.Configuration()", "config.TLS()"],
        "options_hi": ["&tls.Config{}", "tls.NewConfig()", "tls.Configuration()", "config.TLS()"],
        "answer_en": "&tls.Config{}",
        "answer_hi": "&tls.Config{}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the purpose of the 'go/constant' package?",
        "question_hi": "'go/constant' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Constant values", "Mathematical constants", "Program constants", "Constant operations"],
        "options_hi": ["कॉन्स्टेंट वैल्यू", "मैथमेटिकल कॉन्स्टेंट", "प्रोग्राम कॉन्स्टेंट", "कॉन्स्टेंट ऑपरेशन"],
        "answer_en": "Constant values",
        "answer_hi": "कॉन्स्टेंट वैल्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you represent mathematical constants in Go?",
        "question_hi": "Go में मैथमेटिकल कॉन्स्टेंट कैसे रिप्रेजेंट करते हैं?",
        "options_en": ["go/constant package", "constant.Make()", "math constants", "constant values"],
        "options_hi": ["go/constant पैकेज", "constant.Make()", "math कॉन्स्टेंट", "कॉन्स्टेंट वैल्यू"],
        "answer_en": "go/constant package",
        "answer_hi": "go/constant पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the purpose of the 'go/importer' package?",
        "question_hi": "'go/importer' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Package importing", "Import resolution", "Package loading", "Import utilities"],
        "options_hi": ["पैकेज इम्पोर्टिंग", "इम्पोर्ट रेजोल्यूशन", "पैकेज लोडिंग", "इम्पोर्ट यूटिलिटी"],
        "answer_en": "Package importing",
        "answer_hi": "पैकेज इम्पोर्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you import packages programmatically in Go?",
        "question_hi": "Go में प्रोग्रामेटिकली पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["importer package", "importer.Import()", "Programmatic imports", "Import packages dynamically"],
        "options_hi": ["importer पैकेज", "importer.Import()", "प्रोग्रामेटिक इम्पोर्ट", "डायनामिकली पैकेज इम्पोर्ट करें"],
        "answer_en": "importer package",
        "answer_hi": "importer पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of the 'plugin' package?",
        "question_hi": "'plugin' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Dynamic loading", "Plugins system", "External modules", "Runtime extensions"],
        "options_hi": ["डायनामिक लोडिंग", "प्लगइन सिस्टम", "एक्सटर्नल मॉड्यूल", "रनटाइम एक्सटेंशन"],
        "answer_en": "Dynamic loading",
        "answer_hi": "डायनामिक लोडिंग",
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