const questions = [
    {
        "num": 1,
        "question_en": "What is the zero value of a pointer in Go?",
        "question_hi": "Go में पॉइंटर का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "undefined", "null"],
        "options_hi": ["nil", "0", "अपरिभाषित", "null"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you declare a variable without initializing it in Go?",
        "question_hi": "Go में बिना इनिशियलाइज किए वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["var x int", "x := int", "let x int", "const x int"],
        "options_hi": ["var x int", "x := int", "let x int", "const x int"],
        "answer_en": "var x int",
        "answer_hi": "var x int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'range' keyword in for loops?",
        "question_hi": "for लूप्स में 'range' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Iterate over arrays/slices/maps", "Define number range", "Create sequences", "All of the above"],
        "options_hi": ["ऐरे/स्लाइस/मैप पर इटरेट करना", "नंबर रेंज डिफाइन करना", "सीक्वेंस बनाना", "उपरोक्त सभी"],
        "answer_en": "Iterate over arrays/slices/maps",
        "answer_hi": "ऐरे/स्लाइस/मैप पर इटरेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you create an anonymous function in Go?",
        "question_hi": "Go में अनाम फंक्शन कैसे बनाते हैं?",
        "options_en": ["func() { }", "function() { }", "anon func() { }", "lambda() { }"],
        "options_hi": ["func() { }", "function() { }", "anon func() { }", "lambda() { }"],
        "answer_en": "func() { }",
        "answer_hi": "func() { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the difference between == and = in Go?",
        "question_hi": "Go में == और = में क्या अंतर है?",
        "options_en": ["== compares, = assigns", "No difference", "= compares, == assigns", "Both are assignment"],
        "options_hi": ["== कम्पेयर करता है, = असाइन करता है", "कोई अंतर नहीं", "= कम्पेयर करता है, == असाइन करता है", "दोनों असाइनमेंट हैं"],
        "answer_en": "== compares, = assigns",
        "answer_hi": "== कम्पेयर करता है, = असाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you handle multiple return values in Go?",
        "question_hi": "Go में मल्टीपल रिटर्न वैल्यूज कैसे हैंडल करते हैं?",
        "options_en": ["a, b := func()", "return multiple values", "Both A and B", "Use arrays"],
        "options_hi": ["a, b := func()", "मल्टीपल वैल्यूज रिटर्न करें", "A और B दोनों", "ऐरे का उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is a rune in Go?",
        "question_hi": "Go में रून क्या है?",
        "options_en": ["Unicode code point", "Character type", "alias for int32", "All of the above"],
        "options_hi": ["यूनिकोड कोड पॉइंट", "करैक्टर टाइप", "int32 का alias", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you check if a key exists in a map?",
        "question_hi": "मैप में की एक्सिस्ट करती है या नहीं कैसे चेक करते हैं?",
        "options_en": ["value, ok := map[key]", "map.exists(key)", "key in map", "map.contains(key)"],
        "options_hi": ["value, ok := map[key]", "map.exists(key)", "key in map", "map.contains(key)"],
        "answer_en": "value, ok := map[key]",
        "answer_hi": "value, ok := map[key]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'select' statement?",
        "question_hi": "'select' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Wait on multiple channel operations", "Choose from cases", "Both A and B", "Switch between functions"],
        "options_hi": ["मल्टीपल चैनल ऑपरेशन्स पर इंतज़ार करना", "केस से चुनना", "A और B दोनों", "फंक्शन्स के बीच स्विच करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you create a new type in Go?",
        "question_hi": "Go में नया टाइप कैसे बनाते हैं?",
        "options_en": ["type NewType ExistingType", "newtype NewType ExistingType", "typedef NewType ExistingType", "NewType = ExistingType"],
        "options_hi": ["type NewType ExistingType", "newtype NewType ExistingType", "typedef NewType ExistingType", "NewType = ExistingType"],
        "answer_en": "type NewType ExistingType",
        "answer_hi": "type NewType ExistingType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the difference between panic and error in Go?",
        "question_hi": "Go में panic और error में क्या अंतर है?",
        "options_en": ["panic is unrecoverable, error is expected", "No difference", "error is unrecoverable", "Both are same"],
        "options_hi": ["panic अनरिकवरेबल है, error एक्सपेक्टेड है", "कोई अंतर नहीं", "error अनरिकवरेबल है", "दोनों समान हैं"],
        "answer_en": "panic is unrecoverable, error is expected",
        "answer_hi": "panic अनरिकवरेबल है, error एक्सपेक्टेड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you implement a method on a struct?",
        "question_hi": "स्ट्रक्ट पर मेथड कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["func (s Struct) Method()", "func Method(s Struct)", "s.Method() function", "struct.Method()"],
        "options_hi": ["func (s Struct) Method()", "func Method(s Struct)", "s.Method() function", "struct.Method()"],
        "answer_en": "func (s Struct) Method()",
        "answer_hi": "func (s Struct) Method()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the 'iota' identifier?",
        "question_hi": "'iota' आइडेंटिफायर का उद्देश्य क्या है?",
        "options_en": ["Auto-incrementing constant generator", "Iteration counter", "Both A and B", "Random number generator"],
        "options_hi": ["ऑटो-इंक्रीमेंटिंग कॉन्स्टेंट जेनरेटर", "इटरेशन काउंटर", "A और B दोनों", "रैंडम नंबर जेनरेटर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you convert a string to a byte slice?",
        "question_hi": "स्ट्रिंग को बाइट स्लाइस में कैसे कन्वर्ट करते हैं?",
        "options_en": ["[]byte(string)", "byte[](string)", "string.ToBytes()", "bytes.FromString(string)"],
        "options_hi": ["[]byte(string)", "byte[](string)", "string.ToBytes()", "bytes.FromString(string)"],
        "answer_en": "[]byte(string)",
        "answer_hi": "[]byte(string)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is a variadic parameter in Go?",
        "question_hi": "Go में वेरिएडिक पैरामीटर क्या है?",
        "options_en": ["Parameter that accepts variable number of arguments", "Function parameter", "Both A and B", "Constant parameter"],
        "options_hi": ["पैरामीटर जो वेरिएबल नंबर ऑफ आर्गुमेंट्स एक्सेप्ट करता है", "फंक्शन पैरामीटर", "A और B दोनों", "कॉन्स्टेंट पैरामीटर"],
        "answer_en": "Parameter that accepts variable number of arguments",
        "answer_hi": "पैरामीटर जो वेरिएबल नंबर ऑफ आर्गुमेंट्स एक्सेप्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement interface satisfaction implicitly?",
        "question_hi": "इंटरफेस सैटिस्फैक्शन इम्प्लीसिटली कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["By implementing all methods", "Using implements keyword", "Both A and B", "By extending interface"],
        "options_hi": ["सभी मेथड्स इम्प्लीमेंट करके", "implements कीवर्ड का उपयोग करके", "A और B दोनों", "इंटरफेस एक्सटेंड करके"],
        "answer_en": "By implementing all methods",
        "answer_hi": "सभी मेथड्स इम्प्लीमेंट करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'fallthrough' keyword?",
        "question_hi": "'fallthrough' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Continue to next case in switch", "Fall back to default", "Both A and B", "Break from switch"],
        "options_hi": ["स्विच में अगले केस में कंटिन्यू करना", "डिफॉल्ट पर फॉल बैक करना", "A और B दोनों", "स्विच से ब्रेक करना"],
        "answer_en": "Continue to next case in switch",
        "answer_hi": "स्विच में अगले केस में कंटिन्यू करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you create a slice from an array?",
        "question_hi": "ऐरे से स्लाइस कैसे बनाते हैं?",
        "options_en": ["arr[start:end]", "slice(arr)", "arr.ToSlice()", "Both A and B"],
        "options_hi": ["arr[start:end]", "slice(arr)", "arr.ToSlice()", "A और B दोनों"],
        "answer_en": "arr[start:end]",
        "answer_hi": "arr[start:end]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'copy' function?",
        "question_hi": "'copy' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Copy elements between slices", "Duplicate slices", "Both A and B", "Copy files"],
        "options_hi": ["स्लाइस के बीच एलिमेंट्स कॉपी करना", "स्लाइस डुप्लिकेट करना", "A और B दोनों", "फाइल्स कॉपी करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you implement function closures in Go?",
        "question_hi": "Go में फंक्शन क्लोजर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Functions that capture outer variables", "Nested functions", "Both A and B", "Anonymous functions only"],
        "options_hi": ["फंक्शन जो आउटर वेरिएबल्स कैप्चर करते हैं", "नेस्टेड फंक्शन", "A और B दोनों", "केवल अनाम फंक्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the difference between methods and functions?",
        "question_hi": "मेथड्स और फंक्शन्स में क्या अंतर है?",
        "options_en": ["Methods have receivers", "Functions are standalone", "Both A and B", "No difference"],
        "options_hi": ["मेथड्स में रिसीवर होते हैं", "फंक्शन स्टैंडअलोन होते हैं", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you implement string concatenation?",
        "question_hi": "स्ट्रिंग कॉन्कैटनेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["str1 + str2", "fmt.Sprintf", "strings.Builder", "All of the above"],
        "options_hi": ["str1 + str2", "fmt.Sprintf", "strings.Builder", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the 'len' function?",
        "question_hi": "'len' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get length of arrays/slices/strings", "Count elements", "Both A and B", "Measure memory"],
        "options_hi": ["ऐरे/स्लाइस/स्ट्रिंग की लंबाई प्राप्त करना", "एलिमेंट्स काउंट करना", "A और B दोनों", "मेमोरी मापना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you implement type assertions?",
        "question_hi": "टाइप असर्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["value.(Type)", "assert(value, Type)", "Type(value)", "value.ToType()"],
        "options_hi": ["value.(Type)", "assert(value, Type)", "Type(value)", "value.ToType()"],
        "answer_en": "value.(Type)",
        "answer_hi": "value.(Type)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the zero value for numeric types?",
        "question_hi": "न्यूमेरिक टाइप्स का जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "undefined", "null"],
        "options_hi": ["0", "nil", "अपरिभाषित", "null"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you implement custom sorting?",
        "question_hi": "कस्टम सॉर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement sort.Interface", "Using sort.Slice", "Both A and B", "Custom algorithms"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करके", "sort.Slice का उपयोग करके", "A और B दोनों", "कस्टम अल्गोरिदम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the 'cap' function?",
        "question_hi": "'cap' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get capacity of slices/arrays/channels", "Measure memory", "Both A and B", "Count elements"],
        "options_hi": ["स्लाइस/ऐरे/चैनल की कैपेसिटी प्राप्त करना", "मेमोरी मापना", "A और B दोनों", "एलिमेंट्स काउंट करना"],
        "answer_en": "Get capacity of slices/arrays/channels",
        "answer_hi": "स्लाइस/ऐरे/चैनल की कैपेसिटी प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you implement JSON marshaling?",
        "question_hi": "JSON मार्शलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["json.Marshal", "Implement json.Marshaler", "Both A and B", "Custom encoding"],
        "options_hi": ["json.Marshal", "json.Marshaler इम्प्लीमेंट करके", "A और B दोनों", "कस्टम एन्कोडिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the difference between make and new?",
        "question_hi": "make और new में क्या अंतर है?",
        "options_en": ["make initializes, new allocates", "No difference", "new initializes, make allocates", "Both are same"],
        "options_hi": ["make इनिशियलाइज करता है, new अलोकेट करता है", "कोई अंतर नहीं", "new इनिशियलाइज करता है, make अलोकेट करता है", "दोनों समान हैं"],
        "answer_en": "make initializes, new allocates",
        "answer_hi": "make इनिशियलाइज करता है, new अलोकेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you implement goroutine synchronization?",
        "question_hi": "गोरूटीन सिंक्रोनाइजेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["WaitGroup", "Channels", "Mutex", "All of the above"],
        "options_hi": ["WaitGroup", "चैनल", "Mutex", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'append' function?",
        "question_hi": "'append' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Add elements to slices", "Extend slice capacity", "Both A and B", "Create new slices"],
        "options_hi": ["स्लाइस में एलिमेंट्स ऐड करना", "स्लाइस कैपेसिटी एक्सटेंड करना", "A और B दोनों", "नई स्लाइस बनाना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you implement HTTP handlers?",
        "question_hi": "HTTP हैंडलर्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["http.HandlerFunc", "Implement http.Handler", "Both A and B", "Custom functions"],
        "options_hi": ["http.HandlerFunc", "http.Handler इम्प्लीमेंट करके", "A और B दोनों", "कस्टम फंक्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the zero value for boolean types?",
        "question_hi": "बूलियन टाइप्स का जीरो वैल्यू क्या है?",
        "options_en": ["false", "true", "nil", "undefined"],
        "options_hi": ["false", "true", "nil", "अपरिभाषित"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you implement file reading?",
        "question_hi": "फाइल रीडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["os.Open", "ioutil.ReadFile", "bufio.Scanner", "All of the above"],
        "options_hi": ["os.Open", "ioutil.ReadFile", "bufio.Scanner", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'close' function?",
        "question_hi": "'close' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Close channels", "Close files", "Both A and B", "Close connections"],
        "options_hi": ["चैनल बंद करना", "फाइल बंद करना", "A और B दोनों", "कनेक्शन बंद करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement error wrapping?",
        "question_hi": "एरर रैपिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["fmt.Errorf with %w", "errors.Wrap", "Both A and B", "Custom error types"],
        "options_hi": ["fmt.Errorf with %w", "errors.Wrap", "A और B दोनों", "कस्टम एरर टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'delete' function?",
        "question_hi": "'delete' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Remove key from map", "Delete slice elements", "Both A and B", "Remove variables"],
        "options_hi": ["मैप से की रिमूव करना", "स्लाइस एलिमेंट्स डिलीट करना", "A और B दोनों", "वेरिएबल्स रिमूव करना"],
        "answer_en": "Remove key from map",
        "answer_hi": "मैप से की रिमूव करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you implement benchmarking?",
        "question_hi": "बेंचमार्किंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Benchmark functions", "go test -bench", "Both A and B", "Time measurements"],
        "options_hi": ["बेंचमार्क फंक्शन", "go test -bench", "A और B दोनों", "टाइम मेजरमेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'recover' function?",
        "question_hi": "'recover' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Handle panics", "Catch exceptions", "Both A and B", "Error recovery"],
        "options_hi": ["पैनिक्स हैंडल करना", "एक्सेप्शन्स कैच करना", "A और B दोनों", "एरर रिकवरी"],
        "answer_en": "Handle panics",
        "answer_hi": "पैनिक्स हैंडल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement type switches?",
        "question_hi": "टाइप स्विच कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["switch v := x.(type)", "type switch x", "Both A and B", "Custom type checking"],
        "options_hi": ["switch v := x.(type)", "type switch x", "A और B दोनों", "कस्टम टाइप चेकिंग"],
        "answer_en": "switch v := x.(type)",
        "answer_hi": "switch v := x.(type)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'print' function?",
        "question_hi": "'print' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Debug output", "Built-in printing", "Both A and B", "Formatted output"],
        "options_hi": ["डीबग आउटपुट", "बिल्ट-इन प्रिंटिंग", "A और B दोनों", "फॉर्मेटेड आउटपुट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement concurrent map access?",
        "question_hi": "कंकरेंट मैप एक्सेस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["sync.Mutex", "sync.RWMutex", "sync.Map", "All of the above"],
        "options_hi": ["sync.Mutex", "sync.RWMutex", "sync.Map", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'complex' function?",
        "question_hi": "'complex' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create complex numbers", "Mathematical operations", "Both A and B", "Create arrays"],
        "options_hi": ["कॉम्प्लेक्स नंबर बनाना", "मैथमेटिकल ऑपरेशन", "A और B दोनों", "ऐरे बनाना"],
        "answer_en": "Create complex numbers",
        "answer_hi": "कॉम्प्लेक्स नंबर बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement custom flag parsing?",
        "question_hi": "कस्टम फ्लैग पार्सिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["flag package", "Custom types", "Both A and B", "Environment variables"],
        "options_hi": ["flag पैकेज", "कस्टम टाइप", "A और B दोनों", "एनवायरनमेंट वेरिएबल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'real' and 'imag' functions?",
        "question_hi": "'real' और 'imag' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Extract complex number parts", "Mathematical functions", "Both A and B", "Create numbers"],
        "options_hi": ["कॉम्प्लेक्स नंबर पार्ट्स एक्सट्रैक्ट करना", "मैथमेटिकल फंक्शन", "A और B दोनों", "नंबर बनाना"],
        "answer_en": "Extract complex number parts",
        "answer_hi": "कॉम्प्लेक्स नंबर पार्ट्स एक्सट्रैक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement template execution?",
        "question_hi": "टेम्प्लेट एक्जीक्यूशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["text/template", "html/template", "Both A and B", "Custom templates"],
        "options_hi": ["text/template", "html/template", "A और B दोनों", "कस्टम टेम्प्लेट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'panic' function?",
        "question_hi": "'panic' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Stop normal execution", "Signal critical errors", "Both A and B", "Handle errors"],
        "options_hi": ["नॉर्मल एक्जीक्यूशन रोकना", "क्रिटिकल एरर्स सिग्नल करना", "A और B दोनों", "एरर्स हैंडल करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement reflection?",
        "question_hi": "रिफ्लेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["reflect package", "Type inspection", "Both A and B", "Custom inspection"],
        "options_hi": ["reflect पैकेज", "टाइप इंस्पेक्शन", "A और B दोनों", "कस्टम इंस्पेक्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'unsafe' package?",
        "question_hi": "'unsafe' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Low-level programming", "Bypass type safety", "Both A and B", "Memory management"],
        "options_hi": ["लो-लेवल प्रोग्रामिंग", "टाइप सेफ्टी बायपास करना", "A और B दोनों", "मेमोरी मैनेजमेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement binary data handling?",
        "question_hi": "बाइनरी डेटा हैंडलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["encoding/binary", "bytes package", "Both A and B", "Custom encoding"],
        "options_hi": ["encoding/binary", "bytes पैकेज", "A और B दोनों", "कस्टम एन्कोडिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'go' keyword?",
        "question_hi": "'go' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Start goroutine", "Run function concurrently", "Both A and B", "Execute function"],
        "options_hi": ["गोरूटीन शुरू करना", "फंक्शन को कंकरेंटली रन करना", "A और B दोनों", "फंक्शन एक्जीक्यूट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement channel operations?",
        "question_hi": "चैनल ऑपरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["ch <- data (send)", "data := <-ch (receive)", "Both A and B", "Channel functions"],
        "options_hi": ["ch <- data (भेजना)", "data := <-ch (प्राप्त करना)", "A और B दोनों", "चैनल फंक्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'defer' statement?",
        "question_hi": "'defer' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Schedule function call", "Cleanup operations", "Both A and B", "Delay execution"],
        "options_hi": ["फंक्शन कॉल शेड्यूल करना", "क्लीनअप ऑपरेशन", "A और B दोनों", "एक्जीक्यूशन डिले करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement interface values?",
        "question_hi": "इंटरफेस वैल्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Store (value, type) pairs", "Dynamic typing", "Both A and B", "Static typing"],
        "options_hi": ["(वैल्यू, टाइप) पेयर स्टोर करना", "डायनामिक टाइपिंग", "A और B दोनों", "स्टेटिक टाइपिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the '...' operator?",
        "question_hi": "'...' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["Variadic functions", "Slice unpacking", "Both A and B", "Array expansion"],
        "options_hi": ["वेरिएडिक फंक्शन", "स्लाइस अनपैकिंग", "A और B दोनों", "ऐरे एक्सपेंशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement memory allocation?",
        "question_hi": "मेमोरी अलोकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["new function", "make function", "Both A and B", "malloc function"],
        "options_hi": ["new फंक्शन", "make फंक्शन", "A और B दोनों", "malloc फंक्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'interface{}' type?",
        "question_hi": "'interface{}' टाइप का उद्देश्य क्या है?",
        "options_en": ["Empty interface", "Accept any type", "Both A and B", "Generic programming"],
        "options_hi": ["खाली इंटरफेस", "कोई भी टाइप एक्सेप्ट करना", "A और B दोनों", "जेनेरिक प्रोग्रामिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement string formatting?",
        "question_hi": "स्ट्रिंग फॉर्मेटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["fmt.Sprintf", "strconv package", "Both A and B", "Custom formatting"],
        "options_hi": ["fmt.Sprintf", "strconv पैकेज", "A और B दोनों", "कस्टम फॉर्मेटिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'const' keyword?",
        "question_hi": "'const' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Declare constants", "Immutable values", "Both A and B", "Define variables"],
        "options_hi": ["कॉन्स्टेंट डिक्लेयर करना", "इम्यूटेबल वैल्यू", "A और B दोनों", "वेरिएबल डिफाइन करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement file writing?",
        "question_hi": "फाइल राइटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["os.Create", "ioutil.WriteFile", "bufio.Writer", "All of the above"],
        "options_hi": ["os.Create", "ioutil.WriteFile", "bufio.Writer", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'break' statement?",
        "question_hi": "'break' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Exit loops", "Exit switch cases", "Both A and B", "Continue execution"],
        "options_hi": ["लूप से बाहर निकलना", "स्विच केस से बाहर निकलना", "A और B दोनों", "एक्जीक्यूशन जारी रखना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement time operations?",
        "question_hi": "टाइम ऑपरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["time package", "Time measurements", "Both A and B", "Custom timing"],
        "options_hi": ["time पैकेज", "टाइम मेजरमेंट", "A और B दोनों", "कस्टम टाइमिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'continue' statement?",
        "question_hi": "'continue' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Skip to next iteration", "Continue loop", "Both A and B", "Break loop"],
        "options_hi": ["अगले इटरेशन पर स्किप करना", "लूप जारी रखना", "A और B दोनों", "लूप ब्रेक करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement random number generation?",
        "question_hi": "रैंडम नंबर जेनरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["math/rand package", "crypto/rand package", "Both A and B", "Custom algorithms"],
        "options_hi": ["math/rand पैकेज", "crypto/rand पैकेज", "A और B दोनों", "कस्टम अल्गोरिदम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'goto' statement?",
        "question_hi": "'goto' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Jump to label", "Control flow", "Both A and B", "Function call"],
        "options_hi": ["लेबल पर जंप करना", "कंट्रोल फ्लो", "A और B दोनों", "फंक्शन कॉल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement cryptographic operations?",
        "question_hi": "क्रिप्टोग्राफिक ऑपरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["crypto package", "Hashing functions", "Both A and B", "Custom encryption"],
        "options_hi": ["crypto पैकेज", "हैशिंग फंक्शन", "A और B दोनों", "कस्टम एन्क्रिप्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'import' statement?",
        "question_hi": "'import' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Include packages", "Access external code", "Both A and B", "Define dependencies"],
        "options_hi": ["पैकेज इनक्लूड करना", "एक्सटर्नल कोड एक्सेस करना", "A और B दोनों", "डिपेंडेंसी डिफाइन करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement compression?",
        "question_hi": "कम्प्रेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["compress package", "gzip/zlib", "Both A and B", "Custom compression"],
        "options_hi": ["compress पैकेज", "gzip/zlib", "A और B दोनों", "कस्टम कम्प्रेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'package' declaration?",
        "question_hi": "'package' डिक्लेरेशन का उद्देश्य क्या है?",
        "options_en": ["Define package name", "Organize code", "Both A and B", "Import packages"],
        "options_hi": ["पैकेज नाम डिफाइन करना", "कोड ऑर्गनाइज करना", "A और B दोनों", "पैकेज इम्पोर्ट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement network operations?",
        "question_hi": "नेटवर्क ऑपरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["net package", "TCP/UDP protocols", "Both A and B", "Custom protocols"],
        "options_hi": ["net पैकेज", "TCP/UDP प्रोटोकॉल", "A और B दोनों", "कस्टम प्रोटोकॉल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'return' statement?",
        "question_hi": "'return' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Exit function", "Return values", "Both A and B", "Continue function"],
        "options_hi": ["फंक्शन से बाहर निकलना", "वैल्यू रिटर्न करना", "A और B दोनों", "फंक्शन जारी रखना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement database operations?",
        "question_hi": "डेटाबेस ऑपरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["database/sql package", "ORM libraries", "Both A and B", "Custom drivers"],
        "options_hi": ["database/sql पैकेज", "ORM लाइब्रेरी", "A और B दोनों", "कस्टम ड्राइवर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'switch' statement?",
        "question_hi": "'switch' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Multi-way branching", "Conditional execution", "Both A and B", "Loop control"],
        "options_hi": ["मल्टी-वे ब्रांचिंग", "कंडीशनल एक्जीक्यूशन", "A और B दोनों", "लूप कंट्रोल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement testing?",
        "question_hi": "टेस्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["testing package", "Test functions", "Both A and B", "Custom testing"],
        "options_hi": ["testing पैकेज", "टेस्ट फंक्शन", "A और B दोनों", "कस्टम टेस्टिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'for' loop?",
        "question_hi": "'for' लूप का उद्देश्य क्या है?",
        "options_en": ["Iteration", "Looping construct", "Both A and B", "Condition checking"],
        "options_hi": ["इटरेशन", "लूपिंग कंस्ट्रक्ट", "A और B दोनों", "कंडीशन चेकिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement logging?",
        "question_hi": "लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["log package", "Third-party libraries", "Both A and B", "Custom logging"],
        "options_hi": ["log पैकेज", "थर्ड-पार्टी लाइब्रेरी", "A और B दोनों", "कस्टम लॉगिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'if' statement?",
        "question_hi": "'if' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Conditional execution", "Decision making", "Both A and B", "Loop control"],
        "options_hi": ["कंडीशनल एक्जीक्यूशन", "डिसीजन मेकिंग", "A और B दोनों", "लूप कंट्रोल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement configuration management?",
        "question_hi": "कॉन्फिगरेशन मैनेजमेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Environment variables", "Config files", "Both A and B", "Hardcoded values"],
        "options_hi": ["एनवायरनमेंट वेरिएबल", "कॉन्फिग फाइल", "A और B दोनों", "हार्डकोडेड वैल्यू"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'else' clause?",
        "question_hi": "'else' क्लॉज का उद्देश्य क्या है?",
        "options_en": ["Alternative execution", "Default case", "Both A and B", "Error handling"],
        "options_hi": ["अल्टरनेटिव एक्जीक्यूशन", "डिफॉल्ट केस", "A और B दोनों", "एरर हैंडलिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement error handling?",
        "question_hi": "एरर हैंडलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Return error values", "Check errors", "Both A and B", "Exceptions"],
        "options_hi": ["एरर वैल्यू रिटर्न करना", "एरर्स चेक करना", "A और B दोनों", "एक्सेप्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'struct' keyword?",
        "question_hi": "'struct' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Define structures", "Group data", "Both A and B", "Create classes"],
        "options_hi": ["स्ट्रक्चर डिफाइन करना", "डेटा ग्रुप करना", "A और B दोनों", "क्लास बनाना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement command-line arguments?",
        "question_hi": "कमांड-लाइन आर्गुमेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["os.Args", "flag package", "Both A and B", "Custom parsing"],
        "options_hi": ["os.Args", "flag पैकेज", "A और B दोनों", "कस्टम पार्सिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'map' type?",
        "question_hi": "'map' टाइप का उद्देश्य क्या है?",
        "options_en": ["Key-value storage", "Associative arrays", "Both A and B", "Arrays with keys"],
        "options_hi": ["की-वैल्यू स्टोरेज", "अस्सोसिएटिव ऐरे", "A और B दोनों", "की के साथ ऐरे"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement HTTP clients?",
        "question_hi": "HTTP क्लाइंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["http.Get", "http.Client", "Both A and B", "Custom clients"],
        "options_hi": ["http.Get", "http.Client", "A और B दोनों", "कस्टम क्लाइंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'chan' keyword?",
        "question_hi": "'chan' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Declare channels", "Communication mechanism", "Both A and B", "Function types"],
        "options_hi": ["चैनल डिक्लेयर करना", "कम्युनिकेशन मैकेनिज्म", "A और B दोनों", "फंक्शन टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement JSON unmarshaling?",
        "question_hi": "JSON अनमार्शलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["json.Unmarshal", "Struct tags", "Both A and B", "Custom parsing"],
        "options_hi": ["json.Unmarshal", "स्ट्रक्ट टैग", "A और B दोनों", "कस्टम पार्सिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'slice' type?",
        "question_hi": "'slice' टाइप का उद्देश्य क्या है?",
        "options_en": ["Dynamic arrays", "Flexible sequences", "Both A and B", "Fixed arrays"],
        "options_hi": ["डायनामिक ऐरे", "फ्लेक्सिबल सीक्वेंस", "A और B दोनों", "फिक्स्ड ऐरे"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement context propagation?",
        "question_hi": "कॉन्टेक्स्ट प्रोपेगेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["context package", "Request chains", "Both A and B", "Global variables"],
        "options_hi": ["context पैकेज", "रिक्वेस्ट चेन", "A और B दोनों", "ग्लोबल वेरिएबल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'array' type?",
        "question_hi": "'array' टाइप का उद्देश्य क्या है?",
        "options_en": ["Fixed-size sequences", "Memory efficiency", "Both A and B", "Dynamic storage"],
        "options_hi": ["फिक्स्ड-साइज सीक्वेंस", "मेमोरी एफिशिएंसी", "A और B दोनों", "डायनामिक स्टोरेज"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement worker pools?",
        "question_hi": "वर्कर पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Goroutines + channels", "Task distribution", "Both A and B", "Single goroutine"],
        "options_hi": ["गोरूटीन + चैनल", "टास्क डिस्ट्रीब्यूशन", "A और B दोनों", "सिंगल गोरूटीन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'string' type?",
        "question_hi": "'string' टाइप का उद्देश्य क्या है?",
        "options_en": ["Text data", "Immutable sequences", "Both A and B", "Mutable text"],
        "options_hi": ["टेक्स्ट डेटा", "इम्यूटेबल सीक्वेंस", "A और B दोनों", "म्यूटेबल टेक्स्ट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement dependency management?",
        "question_hi": "डिपेंडेंसी मैनेजमेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Go modules", "go.mod file", "Both A and B", "Manual management"],
        "options_hi": ["Go मॉड्यूल", "go.mod फाइल", "A और B दोनों", "मैनुअल मैनेजमेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'bool' type?",
        "question_hi": "'bool' टाइप का उद्देश्य क्या है?",
        "options_en": ["Boolean values", "True/false logic", "Both A and B", "Numeric values"],
        "options_hi": ["बूलियन वैल्यू", "ट्रू/फॉल्स लॉजिक", "A और B दोनों", "न्यूमेरिक वैल्यू"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement middleware chains?",
        "question_hi": "मिडलवेयर चेन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Handler wrappers", "Function composition", "Both A and B", "Single handler"],
        "options_hi": ["हैंडलर रैपर", "फंक्शन कम्पोजिशन", "A और B दोनों", "सिंगल हैंडलर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'int' type?",
        "question_hi": "'int' टाइप का उद्देश्य क्या है?",
        "options_en": ["Integer numbers", "Whole numbers", "Both A and B", "Floating point"],
        "options_hi": ["इंटीजर नंबर", "व्होल नंबर", "A और B दोनों", "फ्लोटिंग पॉइंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement graceful shutdown?",
        "question_hi": "ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Signal handling", "Context cancellation", "Both A and B", "Forceful exit"],
        "options_hi": ["सिग्नल हैंडलिंग", "कॉन्टेक्स्ट कैंसलेशन", "A और B दोनों", "फोर्सफुल एक्जिट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'float64' type?",
        "question_hi": "'float64' टाइप का उद्देश्य क्या है?",
        "options_en": ["Floating-point numbers", "Decimal values", "Both A and B", "Integer values"],
        "options_hi": ["फ्लोटिंग-पॉइंट नंबर", "डेसीमल वैल्यू", "A और B दोनों", "इंटीजर वैल्यू"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement rate limiting?",
        "question_hi": "रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Token bucket", "Time.Ticker", "Both A and B", "Unlimited access"],
        "options_hi": ["टोकन बकेट", "Time.Ticker", "A और B दोनों", "अनलिमिटेड एक्सेस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'byte' type?",
        "question_hi": "'byte' टाइप का उद्देश्य क्या है?",
        "options_en": ["8-bit unsigned integer", "alias for uint8", "Both A and B", "Character type"],
        "options_hi": ["8-बिट अनसाइन्ड इंटीजर", "uint8 का alias", "A और B दोनों", "करैक्टर टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement circuit breaker pattern?",
        "question_hi": "सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["State machine", "Error counting", "Both A and B", "Direct calls"],
        "options_hi": ["स्टेट मशीन", "एरर काउंटिंग", "A और B दोनों", "डायरेक्ट कॉल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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