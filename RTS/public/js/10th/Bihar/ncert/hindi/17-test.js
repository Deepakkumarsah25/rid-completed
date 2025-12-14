const question=[
    {
        "num": 1,
        "question_en": "What is the purpose of the 'comparable' constraint in Go generics?",
        "question_hi": "Go जेनरिक्स में 'comparable' कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["To allow types that can be compared with == and !=", "To compare any types", "For numerical comparisons only", "For string comparisons only"],
        "options_hi": ["== और != से तुलना किए जा सकने वाले टाइप्स की अनुमति देने के लिए", "किसी भी टाइप की तुलना करने के लिए", "केवल संख्यात्मक तुलना के लिए", "केवल स्ट्रिंग तुलना के लिए"],
        "answer_en": "To allow types that can be compared with == and !=",
        "answer_hi": "== और != से तुलना किए जा सकने वाले टाइप्स की अनुमति देने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How does Go handle memory alignment in structs?",
        "question_hi": "Go स्ट्रक्चर में मेमोरी अलाइनमेंट को कैसे हैंडल करता है?",
        "options_en": ["Automatically pads fields for optimal alignment", "Requires manual padding", "No alignment consideration", "Uses word-size alignment only"],
        "options_hi": ["ऑप्टिमल अलाइनमेंट के लिए ऑटोमैटिकली फील्ड्स पैड करता है", "मैनुअल पैडिंग की आवश्यकता होती है", "कोई अलाइनमेंट विचार नहीं", "केवल वर्ड-साइज अलाइनमेंट का उपयोग करता है"],
        "answer_en": "Automatically pads fields for optimal alignment",
        "answer_hi": "ऑप्टिमल अलाइनमेंट के लिए ऑटोमैटिकली फील्ड्स पैड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the zero-value of a function type in Go?",
        "question_hi": "Go में फंक्शन टाइप का जीरो-वैल्यू क्या है?",
        "options_en": ["nil", "undefined function", "empty function", "zero function"],
        "options_hi": ["nil", "अपरिभाषित फंक्शन", "खाली फंक्शन", "जीरो फंक्शन"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How to implement type-safe enums in Go?",
        "question_hi": "Go में टाइप-सेफ एनम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using iota with custom type and constants", "Using string constants", "Using integer constants", "Using interface{}"],
        "options_hi": ["कस्टम टाइप और कॉन्स्टेंट के साथ iota का उपयोग करके", "स्ट्रिंग कॉन्स्टेंट का उपयोग करके", "इंटीजर कॉन्स्टेंट का उपयोग करके", "interface{} का उपयोग करके"],
        "answer_en": "Using iota with custom type and constants",
        "answer_hi": "कस्टम टाइप और कॉन्स्टेंट के साथ iota का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of runtime.KeepAlive?",
        "question_hi": "runtime.KeepAlive का उद्देश्य क्या है?",
        "options_en": ["To prevent garbage collection of an object", "To keep goroutine alive", "To prevent program exit", "To maintain memory"],
        "options_hi": ["किसी ऑब्जेक्ट के गार्बेज कलेक्शन को रोकने के लिए", "गोरूटीन को जीवित रखने के लिए", "प्रोग्राम एक्जिट को रोकने के लिए", "मेमोरी बनाए रखने के लिए"],
        "answer_en": "To prevent garbage collection of an object",
        "answer_hi": "किसी ऑब्जेक्ट के गार्बेज कलेक्शन को रोकने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How to implement cooperative goroutine scheduling?",
        "question_hi": "कोऑपरेटिव गोरूटीन शेड्यूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using runtime.Gosched() to yield control", "Using channels only", "Using mutexes", "Using context cancellation"],
        "options_hi": ["कंट्रोल यील्ड करने के लिए runtime.Gosched() का उपयोग करके", "केवल चैनल का उपयोग करके", "म्यूटेक्स का उपयोग करके", "कॉन्टेक्स्ट कैंसलेशन का उपयोग करके"],
        "answer_en": "Using runtime.Gosched() to yield control",
        "answer_hi": "कंट्रोल यील्ड करने के लिए runtime.Gosched() का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the difference between sync.Map and map with mutex?",
        "question_hi": "sync.Map और म्यूटेक्स वाले map में क्या अंतर है?",
        "options_en": ["sync.Map is optimized for read-heavy workloads", "No difference", "map with mutex is always faster", "sync.Map is deprecated"],
        "options_hi": ["sync.Map रीड-हैवी वर्कलोड के लिए ऑप्टिमाइज्ड है", "कोई अंतर नहीं", "म्यूटेक्स वाला map हमेशा तेज होता है", "sync.Map डिप्रिकेटेड है"],
        "answer_en": "sync.Map is optimized for read-heavy workloads",
        "answer_hi": "sync.Map रीड-हैवी वर्कलोड के लिए ऑप्टिमाइज्ड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How to implement a semaphore in Go?",
        "question_hi": "Go में सेमाफोर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using buffered channel with capacity", "Using unbuffered channel", "Using sync.Mutex", "Using atomic operations"],
        "options_hi": ["कैपेसिटी वाले बफर्ड चैनल का उपयोग करके", "अनबफर्ड चैनल का उपयोग करके", "sync.Mutex का उपयोग करके", "एटॉमिक ऑपरेशन का उपयोग करके"],
        "answer_en": "Using buffered channel with capacity",
        "answer_hi": "कैपेसिटी वाले बफर्ड चैनल का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'embed' package in Go?",
        "question_hi": "Go में 'embed' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To embed files and folders into the binary", "To embed images", "To embed code snippets", "To embed configurations"],
        "options_hi": ["फाइल और फोल्डर को बाइनरी में एम्बेड करने के लिए", "इमेज एम्बेड करने के लिए", "कोड स्निपेट एम्बेड करने के लिए", "कॉन्फिगरेशन एम्बेड करने के लिए"],
        "answer_en": "To embed files and folders into the binary",
        "answer_hi": "फाइल और फोल्डर को बाइनरी में एम्बेड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How to prevent memory leaks in goroutines?",
        "question_hi": "गोरूटीन में मेमोरी लीक को कैसे रोकते हैं?",
        "options_en": ["Use context with cancellation and select statements", "Use defer statements", "Use global variables", "Ignore them"],
        "options_hi": ["कैंसलेशन और select स्टेटमेंट के साथ कॉन्टेक्स्ट का उपयोग करें", "defer स्टेटमेंट का उपयोग करें", "ग्लोबल वेरिएबल का उपयोग करें", "उन्हें नजरअंदाज करें"],
        "answer_en": "Use context with cancellation and select statements",
        "answer_hi": "कैंसलेशन और select स्टेटमेंट के साथ कॉन्टेक्स्ट का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the difference between interface assertion and type switch?",
        "question_hi": "इंटरफेस असर्शन और टाइप स्विच में क्या अंतर है?",
        "options_en": ["Type switch handles multiple types, assertion checks one type", "No difference", "Assertion is faster", "Type switch is deprecated"],
        "options_hi": ["टाइप स्विच मल्टीपल टाइप हैंडल करता है, असर्शन एक टाइप चेक करता है", "कोई अंतर नहीं", "असर्शन तेज है", "टाइप स्विच डिप्रिकेटेड है"],
        "answer_en": "Type switch handles multiple types, assertion checks one type",
        "answer_hi": "टाइप स्विच मल्टीपल टाइप हैंडल करता है, असर्शन एक टाइप चेक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How to implement a lock-free data structure in Go?",
        "question_hi": "Go में लॉक-फ्री डेटा स्ट्रक्चर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using atomic operations from sync/atomic", "Using channels", "Using mutexes", "Using context"],
        "options_hi": ["sync/atomic से एटॉमिक ऑपरेशन का उपयोग करके", "चैनल का उपयोग करके", "म्यूटेक्स का उपयोग करके", "कॉन्टेक्स्ट का उपयोग करके"],
        "answer_en": "Using atomic operations from sync/atomic",
        "answer_hi": "sync/atomic से एटॉमिक ऑपरेशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of runtime.SetBlockProfileRate?",
        "question_hi": "runtime.SetBlockProfileRate का उद्देश्य क्या है?",
        "options_en": ["To enable blocking profiling", "To set CPU profile rate", "To set memory profile rate", "To set goroutine limit"],
        "options_hi": ["ब्लॉकिंग प्रोफाइलिंग एनेबल करने के लिए", "CPU प्रोफाइल रेट सेट करने के लिए", "मेमोरी प्रोफाइल रेट सेट करने के लिए", "गोरूटीन लिमिट सेट करने के लिए"],
        "answer_en": "To enable blocking profiling",
        "answer_hi": "ब्लॉकिंग प्रोफाइलिंग एनेबल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How to implement a trie data structure in Go?",
        "question_hi": "Go में ट्राई डेटा स्ट्रक्चर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using nested maps or struct with children", "Using arrays only", "Using slices only", "Using interfaces"],
        "options_hi": ["नेस्टेड मैप या चिल्ड्रेन वाले स्ट्रक्चर का उपयोग करके", "केवल ऐरे का उपयोग करके", "केवल स्लाइस का उपयोग करके", "इंटरफेस का उपयोग करके"],
        "answer_en": "Using nested maps or struct with children",
        "answer_hi": "नेस्टेड मैप या चिल्ड्रेन वाले स्ट्रक्चर का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the zero-value of an array in Go?",
        "question_hi": "Go में ऐरे का जीरो-वैल्यू क्या है?",
        "options_en": ["Array of zero values for element type", "nil", "empty array", "undefined"],
        "options_hi": ["एलिमेंट टाइप के जीरो वैल्यू का ऐरे", "nil", "खाली ऐरे", "अपरिभाषित"],
        "answer_en": "Array of zero values for element type",
        "answer_hi": "एलिमेंट टाइप के जीरो वैल्यू का ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How to implement a bloom filter in Go?",
        "question_hi": "Go में ब्लूम फिल्टर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using bit array with multiple hash functions", "Using map only", "Using slice only", "Using database"],
        "options_hi": ["मल्टीपल हैश फंक्शन के साथ बिट ऐरे का उपयोग करके", "केवल मैप का उपयोग करके", "केवल स्लाइस का उपयोग करके", "डेटाबेस का उपयोग करके"],
        "answer_en": "Using bit array with multiple hash functions",
        "answer_hi": "मल्टीपल हैश फंक्शन के साथ बिट ऐरे का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'slog' package in Go?",
        "question_hi": "Go में 'slog' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For structured logging", "For simple logging", "For file logging", "For network logging"],
        "options_hi": ["स्ट्रक्चर्ड लॉगिंग के लिए", "सिंपल लॉगिंग के लिए", "फाइल लॉगिंग के लिए", "नेटवर्क लॉगिंग के लिए"],
        "answer_en": "For structured logging",
        "answer_hi": "स्ट्रक्चर्ड लॉगिंग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How to implement a ring buffer in Go?",
        "question_hi": "Go में रिंग बफर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using slice with modulo arithmetic for indices", "Using linked list", "Using array only", "Using channel"],
        "options_hi": ["इंडिसेस के लिए मॉड्यूलो अर्थमेटिक के साथ स्लाइस का उपयोग करके", "लिंक्ड लिस्ट का उपयोग करके", "केवल ऐरे का उपयोग करके", "चैनल का उपयोग करके"],
        "answer_en": "Using slice with modulo arithmetic for indices",
        "answer_hi": "इंडिसेस के लिए मॉड्यूलो अर्थमेटिक के साथ स्लाइस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the difference between deep copy and shallow copy for slices?",
        "question_hi": "स्लाइस के लिए डीप कॉपी और शैलो कॉपी में क्या अंतर है?",
        "options_en": ["Deep copy duplicates underlying array, shallow copy shares it", "No difference", "Shallow copy is faster", "Deep copy is deprecated"],
        "options_hi": ["डीप कॉपी अंडरलाइंग ऐरे को डुप्लिकेट करती है, शैलो कॉपी उसे शेयर करती है", "कोई अंतर नहीं", "शैलो कॉपी तेज है", "डीप कॉपी डिप्रिकेटेड है"],
        "answer_en": "Deep copy duplicates underlying array, shallow copy shares it",
        "answer_hi": "डीप कॉपी अंडरलाइंग ऐरे को डुप्लिकेट करती है, शैलो कॉपी उसे शेयर करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How to implement a priority queue in Go?",
        "question_hi": "Go में प्रायोरिटी क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using container/heap package with custom interface", "Using slice with sorting", "Using map only", "Using channel"],
        "options_hi": ["कस्टम इंटरफेस के साथ container/heap पैकेज का उपयोग करके", "सॉर्टिंग के साथ स्लाइस का उपयोग करके", "केवल मैप का उपयोग करके", "चैनल का उपयोग करके"],
        "answer_en": "Using container/heap package with custom interface",
        "answer_hi": "कस्टम इंटरफेस के साथ container/heap पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'unsafe.Sizeof' function?",
        "question_hi": "'unsafe.Sizeof' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get the size of a variable in bytes", "To get memory address", "To get type information", "To get alignment"],
        "options_hi": ["वेरिएबल का साइज बाइट में प्राप्त करने के लिए", "मेमोरी एड्रेस प्राप्त करने के लिए", "टाइप इनफार्मेशन प्राप्त करने के लिए", "अलाइनमेंट प्राप्त करने के लिए"],
        "answer_en": "To get the size of a variable in bytes",
        "answer_hi": "वेरिएबल का साइज बाइट में प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How to implement a connection pool for HTTP requests?",
        "question_hi": "HTTP रिक्वेस्ट के लिए कनेक्शन पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Pool with http.Transport MaxIdleConns", "Using channels only", "Using global variables", "Using database connections"],
        "options_hi": ["http.Transport MaxIdleConns के साथ sync.Pool का उपयोग करके", "केवल चैनल का उपयोग करके", "ग्लोबल वेरिएबल का उपयोग करके", "डेटाबेस कनेक्शन का उपयोग करके"],
        "answer_en": "Using sync.Pool with http.Transport MaxIdleConns",
        "answer_hi": "http.Transport MaxIdleConns के साथ sync.Pool का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the difference between method values and method expressions?",
        "question_hi": "मेथड वैल्यू और मेथड एक्सप्रेशन में क्या अंतर है?",
        "options_en": ["Method values bind receiver, expressions need explicit receiver", "No difference", "Method values are faster", "Method expressions are deprecated"],
        "options_hi": ["मेथड वैल्यू रिसीवर को बाइंड करते हैं, एक्सप्रेशन को एक्सप्लिसिट रिसीवर चाहिए", "कोई अंतर नहीं", "मेथड वैल्यू तेज हैं", "मेथड एक्सप्रेशन डिप्रिकेटेड हैं"],
        "answer_en": "Method values bind receiver, expressions need explicit receiver",
        "answer_hi": "मेथड वैल्यू रिसीवर को बाइंड करते हैं, एक्सप्रेशन को एक्सप्लिसिट रिसीवर चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How to implement a custom flag type in Go?",
        "question_hi": "Go में कस्टम फ्लैग टाइप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement flag.Value interface", "Use string conversion", "Use integer conversion", "Use interface{}"],
        "options_hi": ["flag.Value इंटरफेस इम्प्लीमेंट करें", "स्ट्रिंग कन्वर्जन का उपयोग करें", "इंटीजर कन्वर्जन का उपयोग करें", "interface{} का उपयोग करें"],
        "answer_en": "Implement flag.Value interface",
        "answer_hi": "flag.Value इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the 'const' keyword with iota?",
        "question_hi": "iota के साथ 'const' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To create enumerated constants with auto-increment", "To create constant arrays", "To create constant maps", "To create constant functions"],
        "options_hi": ["ऑटो-इंक्रीमेंट के साथ एन्युमरेटेड कॉन्स्टेंट बनाने के लिए", "कॉन्स्टेंट ऐरे बनाने के लिए", "कॉन्स्टेंट मैप बनाने के लिए", "कॉन्स्टेंट फंक्शन बनाने के लिए"],
        "answer_en": "To create enumerated constants with auto-increment",
        "answer_hi": "ऑटो-इंक्रीमेंट के साथ एन्युमरेटेड कॉन्स्टेंट बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How to implement a thread-local storage pattern in Go?",
        "question_hi": "Go में थ्रेड-लोकल स्टोरेज पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutine-local storage with context", "Using global variables", "Using sync.Map", "Using channels"],
        "options_hi": ["कॉन्टेक्स्ट के साथ गोरूटीन-लोकल स्टोरेज का उपयोग करके", "ग्लोबल वेरिएबल का उपयोग करके", "sync.Map का उपयोग करके", "चैनल का उपयोग करके"],
        "answer_en": "Using goroutine-local storage with context",
        "answer_hi": "कॉन्टेक्स्ट के साथ गोरूटीन-लोकल स्टोरेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the difference between named and unnamed return values?",
        "question_hi": "नेम्ड और अननेम्ड रिटर्न वैल्यू में क्या अंतर है?",
        "options_en": ["Named values are initialized to zero values and can be used in naked returns", "No difference", "Unnamed values are faster", "Named values are deprecated"],
        "options_hi": ["नेम्ड वैल्यू जीरो वैल्यू से इनिशियलाइज़ होते हैं और नेक्ड रिटर्न में उपयोग किए जा सकते हैं", "कोई अंतर नहीं", "अननेम्ड वैल्यू तेज हैं", "नेम्ड वैल्यू डिप्रिकेटेड हैं"],
        "answer_en": "Named values are initialized to zero values and can be used in naked returns",
        "answer_hi": "नेम्ड वैल्यू जीरो वैल्यू से इनिशियलाइज़ होते हैं और नेक्ड रिटर्न में उपयोग किए जा सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How to implement a custom HTTP transport in Go?",
        "question_hi": "Go में कस्टम HTTP ट्रांसपोर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement http.RoundTripper interface", "Use default transport only", "Use http.Client directly", "Use net/http package only"],
        "options_hi": ["http.RoundTripper इंटरफेस इम्प्लीमेंट करें", "केवल डिफॉल्ट ट्रांसपोर्ट का उपयोग करें", "सीधे http.Client का उपयोग करें", "केवल net/http पैकेज का उपयोग करें"],
        "answer_en": "Implement http.RoundTripper interface",
        "answer_hi": "http.RoundTripper इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'go:noinline' directive?",
        "question_hi": "'go:noinline' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To prevent function inlining by compiler", "To enable inlining", "To disable optimization", "To enable optimization"],
        "options_hi": ["कम्पाइलर द्वारा फंक्शन इनलाइनिंग को रोकने के लिए", "इनलाइनिंग एनेबल करने के लिए", "ऑप्टिमाइज़ेशन डिसेबल करने के लिए", "ऑप्टिमाइज़ेशन एनेबल करने के लिए"],
        "answer_en": "To prevent function inlining by compiler",
        "answer_hi": "कम्पाइलर द्वारा फंक्शन इनलाइनिंग को रोकने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How to implement a custom error type with stack traces?",
        "question_hi": "स्टैक ट्रेस के साथ कस्टम एरर टाइप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Embed error and include runtime.Caller information", "Use errors.New only", "Use fmt.Errorf only", "Use panic/recover"],
        "options_hi": ["एरर को एम्बेड करें और runtime.Caller इनफार्मेशन शामिल करें", "केवल errors.New का उपयोग करें", "केवल fmt.Errorf का उपयोग करें", "panic/recover का उपयोग करें"],
        "answer_en": "Embed error and include runtime.Caller information",
        "answer_hi": "एरर को एम्बेड करें और runtime.Caller इनफार्मेशन शामिल करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the difference between compile-time and runtime constants?",
        "question_hi": "कम्पाइल-टाइम और रनटाइम कॉन्स्टेंट में क्या अंतर है?",
        "options_en": ["Compile-time constants are determined at compile time, runtime constants are variables", "No difference", "Runtime constants are faster", "Compile-time constants are deprecated"],
        "options_hi": ["कम्पाइल-टाइम कॉन्स्टेंट कम्पाइल टाइम पर निर्धारित होते हैं, रनटाइम कॉन्स्टेंट वेरिएबल होते हैं", "कोई अंतर नहीं", "रनटाइम कॉन्स्टेंट तेज हैं", "कम्पाइल-टाइम कॉन्स्टेंट डिप्रिकेटेड हैं"],
        "answer_en": "Compile-time constants are determined at compile time, runtime constants are variables",
        "answer_hi": "कम्पाइल-टाइम कॉन्स्टेंट कम्पाइल टाइम पर निर्धारित होते हैं, रनटाइम कॉन्स्टेंट वेरिएबल होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How to implement a custom JSON marshaler for time.Duration?",
        "question_hi": "time.Duration के लिए कस्टम JSON मार्शलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement json.Marshaler and json.Unmarshaler interfaces", "Use string conversion only", "Use integer conversion only", "Use default marshaling"],
        "options_hi": ["json.Marshaler और json.Unmarshaler इंटरफेस इम्प्लीमेंट करें", "केवल स्ट्रिंग कन्वर्जन का उपयोग करें", "केवल इंटीजर कन्वर्जन का उपयोग करें", "डिफॉल्ट मार्शलिंग का उपयोग करें"],
        "answer_en": "Implement json.Marshaler and json.Unmarshaler interfaces",
        "answer_hi": "json.Marshaler और json.Unmarshaler इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'go:generate' directive with stringer?",
        "question_hi": "स्ट्रिंगर के साथ 'go:generate' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To generate String() methods for constants", "To generate tests", "To generate documentation", "To generate code"],
        "options_hi": ["कॉन्स्टेंट के लिए String() मेथड जनरेट करने के लिए", "टेस्ट जनरेट करने के लिए", "डॉक्यूमेंटेशन जनरेट करने के लिए", "कोड जनरेट करने के लिए"],
        "answer_en": "To generate String() methods for constants",
        "answer_hi": "कॉन्स्टेंट के लिए String() मेथड जनरेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How to implement a custom sort for a slice of structs?",
        "question_hi": "स्ट्रक्चर की स्लाइस के लिए कस्टम सॉर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement sort.Interface with Len, Less, Swap methods", "Use sort.Slice with custom function", "Both A and B", "Use default sorting"],
        "options_hi": ["Len, Less, Swap मेथड के साथ sort.Interface इम्प्लीमेंट करें", "कस्टम फंक्शन के साथ sort.Slice का उपयोग करें", "A और B दोनों", "डिफॉल्ट सॉर्टिंग का उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the difference between method sets and interface satisfaction?",
        "question_hi": "मेथड सेट और इंटरफेस सैटिस्फैक्शन में क्या अंतर है?",
        "options_en": ["Method set determines which methods can be called, interface satisfaction checks if type implements interface", "No difference", "Method sets are for structs only", "Interface satisfaction is deprecated"],
        "options_hi": ["मेथड सेट निर्धारित करता है कि कौन सी मेथड कॉल की जा सकती हैं, इंटरफेस सैटिस्फैक्शन चेक करता है कि टाइप इंटरफेस इम्प्लीमेंट करता है या नहीं", "कोई अंतर नहीं", "मेथड सेट केवल स्ट्रक्चर के लिए हैं", "इंटरफेस सैटिस्फैक्शन डिप्रिकेटेड है"],
        "answer_en": "Method set determines which methods can be called, interface satisfaction checks if type implements interface",
        "answer_hi": "मेथड सेट निर्धारित करता है कि कौन सी मेथड कॉल की जा सकती हैं, इंटरफेस सैटिस्फैक्शन चेक करता है कि टाइप इंटरफेस इम्प्लीमेंट करता है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How to implement a custom reader that limits read size?",
        "question_hi": "रीड साइज लिमिट करने वाला कस्टम रीडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap io.LimitedReader around another reader", "Implement io.Reader with size check", "Use bufio.Reader only", "Use bytes.Reader only"],
        "options_hi": ["दूसरे रीडर के आसपास io.LimitedReader रैप करें", "साइज चेक के साथ io.Reader इम्प्लीमेंट करें", "केवल bufio.Reader का उपयोग करें", "केवल bytes.Reader का उपयोग करें"],
        "answer_en": "Wrap io.LimitedReader around another reader",
        "answer_hi": "दूसरे रीडर के आसपास io.LimitedReader रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'go:build' directive?",
        "question_hi": "'go:build' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To specify build constraints for files", "To build the project", "To run tests", "To generate code"],
        "options_hi": ["फाइल के लिए बिल्ड कंस्ट्रेंट्स स्पेसिफाई करने के लिए", "प्रोजेक्ट बिल्ड करने के लिए", "टेस्ट रन करने के लिए", "कोड जनरेट करने के लिए"],
        "answer_en": "To specify build constraints for files",
        "answer_hi": "फाइल के लिए बिल्ड कंस्ट्रेंट्स स्पेसिफाई करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How to implement a custom scanner for complex data formats?",
        "question_hi": "कॉम्प्लेक्स डेटा फॉर्मेट के लिए कस्टम स्कैनर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement bufio.SplitFunc for custom splitting", "Use bufio.Scanner only", "Use strings.Split only", "Use regexp only"],
        "options_hi": ["कस्टम स्प्लिटिंग के लिए bufio.SplitFunc इम्प्लीमेंट करें", "केवल bufio.Scanner का उपयोग करें", "केवल strings.Split का उपयोग करें", "केवल regexp का उपयोग करें"],
        "answer_en": "Implement bufio.SplitFunc for custom splitting",
        "answer_hi": "कस्टम स्प्लिटिंग के लिए bufio.SplitFunc इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the difference between type conversion and type assertion?",
        "question_hi": "टाइप कन्वर्जन और टाइप असर्शन में क्या अंतर है?",
        "options_en": ["Conversion changes type, assertion checks interface concrete type", "No difference", "Conversion is faster", "Assertion is deprecated"],
        "options_hi": ["कन्वर्जन टाइप बदलता है, असर्शन इंटरफेस कंक्रीट टाइप चेक करता है", "कोई अंतर नहीं", "कन्वर्जन तेज है", "असर्शन डिप्रिकेटेड है"],
        "answer_en": "Conversion changes type, assertion checks interface concrete type",
        "answer_hi": "कन्वर्जन टाइप बदलता है, असर्शन इंटरफेस कंक्रीट टाइप चेक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How to implement a custom HTTP handler with middleware support?",
        "question_hi": "मिडलवेयर सपोर्ट के साथ कस्टम HTTP हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use function composition with next handler pattern", "Use struct embedding", "Use interface composition", "Use goroutines"],
        "options_hi": ["नेक्स्ट हैंडलर पैटर्न के साथ फंक्शन कम्पोज़िशन का उपयोग करें", "स्ट्रक्चर एम्बेडिंग का उपयोग करें", "इंटरफेस कम्पोज़िशन का उपयोग करें", "गोरूटीन का उपयोग करें"],
        "answer_en": "Use function composition with next handler pattern",
        "answer_hi": "नेक्स्ट हैंडलर पैटर्न के साथ फंक्शन कम्पोज़िशन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'context.WithDeadline' function?",
        "question_hi": "'context.WithDeadline' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To set absolute deadline for context cancellation", "To set relative timeout", "To set values", "To set cancellation reason"],
        "options_hi": ["कॉन्टेक्स्ट कैंसलेशन के लिए एब्सोल्यूट डेडलाइन सेट करने के लिए", "रिलेटिव टाइमआउट सेट करने के लिए", "वैल्यू सेट करने के लिए", "कैंसलेशन रीजन सेट करने के लिए"],
        "answer_en": "To set absolute deadline for context cancellation",
        "answer_hi": "कॉन्टेक्स्ट कैंसलेशन के लिए एब्सोल्यूट डेडलाइन सेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How to implement a custom writer that buffers writes?",
        "question_hi": "राइट बफर करने वाला कस्टम राइटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Embed bufio.Writer or implement io.Writer with buffer", "Use bytes.Buffer only", "Use strings.Builder only", "Use os.File directly"],
        "options_hi": ["bufio.Writer एम्बेड करें या बफर के साथ io.Writer इम्प्लीमेंट करें", "केवल bytes.Buffer का उपयोग करें", "केवल strings.Builder का उपयोग करें", "सीधे os.File का उपयोग करें"],
        "answer_en": "Embed bufio.Writer or implement io.Writer with buffer",
        "answer_hi": "bufio.Writer एम्बेड करें या बफर के साथ io.Writer इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the difference between slice capacity and length?",
        "question_hi": "स्लाइस कैपेसिटी और लेंथ में क्या अंतर है?",
        "options_en": ["Length is number of elements, capacity is maximum elements without reallocation", "No difference", "Capacity is always larger", "Length is deprecated"],
        "options_hi": ["लेंथ एलिमेंट की संख्या है, कैपेसिटी रीअलोकेशन के बिना मैक्सिमम एलिमेंट है", "कोई अंतर नहीं", "कैपेसिटी हमेशा बड़ी होती है", "लेंथ डिप्रिकेटेड है"],
        "answer_en": "Length is number of elements, capacity is maximum elements without reallocation",
        "answer_hi": "लेंथ एलिमेंट की संख्या है, कैपेसिटी रीअलोकेशन के बिना मैक्सिमम एलिमेंट है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How to implement a custom flag that supports multiple values?",
        "question_hi": "मल्टीपल वैल्यू सपोर्ट करने वाला कस्टम फ्लैग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement flag.Value interface with slice type", "Use string flag only", "Use integer flag only", "Use bool flag only"],
        "options_hi": ["स्लाइस टाइप के साथ flag.Value इंटरफेस इम्प्लीमेंट करें", "केवल स्ट्रिंग फ्लैग का उपयोग करें", "केवल इंटीजर फ्लैग का उपयोग करें", "केवल बूल फ्लैग का उपयोग करें"],
        "answer_en": "Implement flag.Value interface with slice type",
        "answer_hi": "स्लाइस टाइप के साथ flag.Value इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'runtime.Callers' function?",
        "question_hi": "'runtime.Callers' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get call stack of current goroutine", "To get CPU information", "To get memory information", "To get GC information"],
        "options_hi": ["करंट गोरूटीन का कॉल स्टैक प्राप्त करने के लिए", "CPU इनफार्मेशन प्राप्त करने के लिए", "मेमोरी इनफार्मेशन प्राप्त करने के लिए", "GC इनफार्मेशन प्राप्त करने के लिए"],
        "answer_en": "To get call stack of current goroutine",
        "answer_hi": "करंट गोरूटीन का कॉल स्टैक प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How to implement a custom error that wraps multiple errors?",
        "question_hi": "मल्टीपल एरर रैप करने वाला कस्टम एरर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use errors.Join or implement custom error with slice of errors", "Use fmt.Errorf only", "Use errors.New only", "Use panic/recover"],
        "options_hi": ["errors.Join का उपयोग करें या एरर की स्लाइस के साथ कस्टम एरर इम्प्लीमेंट करें", "केवल fmt.Errorf का उपयोग करें", "केवल errors.New का उपयोग करें", "panic/recover का उपयोग करें"],
        "answer_en": "Use errors.Join or implement custom error with slice of errors",
        "answer_hi": "errors.Join का उपयोग करें या एरर की स्लाइस के साथ कस्टम एरर इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the difference between compile-time and runtime type checking?",
        "question_hi": "कम्पाइल-टाइम और रनटाइम टाइप चेकिंग में क्या अंतर है?",
        "options_en": ["Compile-time checks types at compile time, runtime checks with reflection", "No difference", "Runtime checking is faster", "Compile-time checking is deprecated"],
        "options_hi": ["कम्पाइल-टाइम कम्पाइल टाइम पर टाइप चेक करता है, रनटाइम रिफ्लेक्शन के साथ चेक करता है", "कोई अंतर नहीं", "रनटाइम चेकिंग तेज है", "कम्पाइल-टाइम चेकिंग डिप्रिकेटेड है"],
        "answer_en": "Compile-time checks types at compile time, runtime checks with reflection",
        "answer_hi": "कम्पाइल-टाइम कम्पाइल टाइम पर टाइप चेक करता है, रनटाइम रिफ्लेक्शन के साथ चेक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How to implement a custom DNS resolver in Go?",
        "question_hi": "Go में कस्टम DNS रिजॉल्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement net.Resolver with custom Dial function", "Use net.LookupHost only", "Use net.ResolveIPAddr only", "Use default resolver"],
        "options_hi": ["कस्टम Dial फंक्शन के साथ net.Resolver इम्प्लीमेंट करें", "केवल net.LookupHost का उपयोग करें", "केवल net.ResolveIPAddr का उपयोग करें", "डिफॉल्ट रिजॉल्वर का उपयोग करें"],
        "answer_en": "Implement net.Resolver with custom Dial function",
        "answer_hi": "कस्टम Dial फंक्शन के साथ net.Resolver इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'go:linkname' directive?",
        "question_hi": "'go:linkname' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To link to unexported functions in other packages", "To export functions", "To import packages", "To create links"],
        "options_hi": ["अनएक्सपोर्टेड फंक्शन को अन्य पैकेज में लिंक करने के लिए", "फंक्शन एक्सपोर्ट करने के लिए", "पैकेज इम्पोर्ट करने के लिए", "लिंक बनाने के लिए"],
        "answer_en": "To link to unexported functions in other packages",
        "answer_hi": "अनएक्सपोर्टेड फंक्शन को अन्य पैकेज में लिंक करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How to implement a custom context with additional values?",
        "question_hi": "एडिशनल वैल्यू के साथ कस्टम कॉन्टेक्स्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Embed context.Context and add custom methods", "Use context.WithValue only", "Use global variables", "Use sync.Map"],
        "options_hi": ["context.Context एम्बेड करें और कस्टम मेथड ऐड करें", "केवल context.WithValue का उपयोग करें", "ग्लोबल वेरिएबल का उपयोग करें", "sync.Map का उपयोग करें"],
        "answer_en": "Embed context.Context and add custom methods",
        "answer_hi": "context.Context एम्बेड करें और कस्टम मेथड ऐड करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the difference between method receivers and function parameters?",
        "question_hi": "मेथड रिसीवर और फंक्शन पैरामीटर में क्या अंतर है?",
        "options_en": ["Method receivers bind to types, parameters are passed to functions", "No difference", "Receivers are faster", "Parameters are deprecated"],
        "options_hi": ["मेथड रिसीवर टाइप से बाइंड होते हैं, पैरामीटर फंक्शन को पास किए जाते हैं", "कोई अंतर नहीं", "रिसीवर तेज हैं", "पैरामीटर डिप्रिकेटेड हैं"],
        "answer_en": "Method receivers bind to types, parameters are passed to functions",
        "answer_hi": "मेथड रिसीवर टाइप से बाइंड होते हैं, पैरामीटर फंक्शन को पास किए जाते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How to implement a custom HTTP cookie jar?",
        "question_hi": "कस्टम HTTP कुकी जार कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement http.CookieJar interface", "Use default cookie jar only", "Use map to store cookies", "Use database to store cookies"],
        "options_hi": ["http.CookieJar इंटरफेस इम्प्लीमेंट करें", "केवल डिफॉल्ट कुकी जार का उपयोग करें", "कुकी स्टोर करने के लिए मैप का उपयोग करें", "कुकी स्टोर करने के लिए डेटाबेस का उपयोग करें"],
        "answer_en": "Implement http.CookieJar interface",
        "answer_hi": "http.CookieJar इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'runtime.MemStats' struct?",
        "question_hi": "'runtime.MemStats' स्ट्रक्चर का उद्देश्य क्या है?",
        "options_en": ["To provide memory allocation statistics", "To provide CPU statistics", "To provide goroutine statistics", "To provide GC statistics"],
        "options_hi": ["मेमोरी अलोकेशन स्टैटिस्टिक्स प्रदान करने के लिए", "CPU स्टैटिस्टिक्स प्रदान करने के लिए", "गोरूटीन स्टैटिस्टिक्स प्रदान करने के लिए", "GC स्टैटिस्टिक्स प्रदान करने के लिए"],
        "answer_en": "To provide memory allocation statistics",
        "answer_hi": "मेमोरी अलोकेशन स्टैटिस्टिक्स प्रदान करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How to implement a custom reader that decrypts data on the fly?",
        "question_hi": "ऑन द फ्लाई डेटा डिक्रिप्ट करने वाला कस्टम रीडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap crypto stream reader around another reader", "Implement io.Reader with decryption", "Use bufio.Reader only", "Use bytes.Reader only"],
        "options_hi": ["दूसरे रीडर के आसपास क्रिप्टो स्ट्रीम रीडर रैप करें", "डिक्रिप्शन के साथ io.Reader इम्प्लीमेंट करें", "केवल bufio.Reader का उपयोग करें", "केवल bytes.Reader का उपयोग करें"],
        "answer_en": "Wrap crypto stream reader around another reader",
        "answer_hi": "दूसरे रीडर के आसपास क्रिप्टो स्ट्रीम रीडर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the difference between interface embedding and struct embedding?",
        "question_hi": "इंटरफेस एम्बेडिंग और स्ट्रक्चर एम्बेडिंग में क्या अंतर है?",
        "options_en": ["Interface embedding adds methods, struct embedding adds fields", "No difference", "Struct embedding is faster", "Interface embedding is deprecated"],
        "options_hi": ["इंटरफेस एम्बेडिंग मेथड ऐड करती है, स्ट्रक्चर एम्बेडिंग फील्ड ऐड करती है", "कोई अंतर नहीं", "स्ट्रक्चर एम्बेडिंग तेज है", "इंटरफेस एम्बेडिंग डिप्रिकेटेड है"],
        "answer_en": "Interface embedding adds methods, struct embedding adds fields",
        "answer_hi": "इंटरफेस एम्बेडिंग मेथड ऐड करती है, स्ट्रक्चर एम्बेडिंग फील्ड ऐड करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How to implement a custom writer that compresses data?",
        "question_hi": "डेटा कम्प्रेस करने वाला कस्टम राइटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap compress writer around another writer", "Implement io.Writer with compression", "Use bufio.Writer only", "Use bytes.Buffer only"],
        "options_hi": ["दूसरे राइटर के आसपास कम्प्रेस राइटर रैप करें", "कम्प्रेशन के साथ io.Writer इम्प्लीमेंट करें", "केवल bufio.Writer का उपयोग करें", "केवल bytes.Buffer का उपयोग करें"],
        "answer_en": "Wrap compress writer around another writer",
        "answer_hi": "दूसरे राइटर के आसपास कम्प्रेस राइटर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'runtime.FuncForPC' function?",
        "question_hi": "'runtime.FuncForPC' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get function information from program counter", "To get CPU information", "To get memory information", "To get GC information"],
        "options_hi": ["प्रोग्राम काउंटर से फंक्शन इनफार्मेशन प्राप्त करने के लिए", "CPU इनफार्मेशन प्राप्त करने के लिए", "मेमोरी इनफार्मेशन प्राप्त करने के लिए", "GC इनफार्मेशन प्राप्त करने के लिए"],
        "answer_en": "To get function information from program counter",
        "answer_hi": "प्रोग्राम काउंटर से फंक्शन इनफार्मेशन प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How to implement a custom sort for map keys?",
        "question_hi": "मैप की के लिए कस्टम सॉर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Extract keys to slice and sort the slice", "Sort map directly", "Use sorted map package", "Use database"],
        "options_hi": ["की को स्लाइस में एक्सट्रैक्ट करें और स्लाइस सॉर्ट करें", "मैप को सीधे सॉर्ट करें", "सॉर्टेड मैप पैकेज का उपयोग करें", "डेटाबेस का उपयोग करें"],
        "answer_en": "Extract keys to slice and sort the slice",
        "answer_hi": "की को स्लाइस में एक्सट्रैक्ट करें और स्लाइस सॉर्ट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the difference between value and pointer method receivers for interfaces?",
        "question_hi": "इंटरफेस के लिए वैल्यू और पॉइंटर मेथड रिसीवर में क्या अंतर है?",
        "options_en": ["Pointer receivers can implement interfaces for both value and pointer types", "No difference", "Value receivers are faster", "Pointer receivers are deprecated"],
        "options_hi": ["पॉइंटर रिसीवर वैल्यू और पॉइंटर दोनों टाइप के लिए इंटरफेस इम्प्लीमेंट कर सकते हैं", "कोई अंतर नहीं", "वैल्यू रिसीवर तेज हैं", "पॉइंटर रिसीवर डिप्रिकेटेड हैं"],
        "answer_en": "Pointer receivers can implement interfaces for both value and pointer types",
        "answer_hi": "पॉइंटर रिसीवर वैल्यू और पॉइंटर दोनों टाइप के लिए इंटरफेस इम्प्लीमेंट कर सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How to implement a custom flag that validates input?",
        "question_hi": "इनपुट वैलिडेट करने वाला कस्टम फ्लैग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement flag.Value interface with validation logic", "Use string flag only", "Use integer flag only", "Use bool flag only"],
        "options_hi": ["वैलिडेशन लॉजिक के साथ flag.Value इंटरफेस इम्प्लीमेंट करें", "केवल स्ट्रिंग फ्लैग का उपयोग करें", "केवल इंटीजर फ्लैग का उपयोग करें", "केवल बूल फ्लैग का उपयोग करें"],
        "answer_en": "Implement flag.Value interface with validation logic",
        "answer_hi": "वैलिडेशन लॉजिक के साथ flag.Value इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'runtime.SetCPUProfileRate' function?",
        "question_hi": "'runtime.SetCPUProfileRate' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To set CPU profiling rate", "To set memory profiling rate", "To set block profiling rate", "To set goroutine limit"],
        "options_hi": ["CPU प्रोफाइलिंग रेट सेट करने के लिए", "मेमोरी प्रोफाइलिंग रेट सेट करने के लिए", "ब्लॉक प्रोफाइलिंग रेट सेट करने के लिए", "गोरूटीन लिमिट सेट करने के लिए"],
        "answer_en": "To set CPU profiling rate",
        "answer_hi": "CPU प्रोफाइलिंग रेट सेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How to implement a custom reader that limits read rate?",
        "question_hi": "रीड रेट लिमिट करने वाला कस्टम रीडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use rate.Limiter with custom reader", "Implement io.Reader with rate limiting", "Use bufio.Reader only", "Use time.Sleep in reader"],
        "options_hi": ["कस्टम रीडर के साथ rate.Limiter का उपयोग करें", "रेट लिमिटिंग के साथ io.Reader इम्प्लीमेंट करें", "केवल bufio.Reader का उपयोग करें", "रीडर में time.Sleep का उपयोग करें"],
        "answer_en": "Use rate.Limiter with custom reader",
        "answer_hi": "कस्टम रीडर के साथ rate.Limiter का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the difference between type parameters and interface parameters?",
        "question_hi": "टाइप पैरामीटर और इंटरफेस पैरामीटर में क्या अंतर है?",
        "options_en": ["Type parameters are compile-time, interface parameters are runtime", "No difference", "Type parameters are faster", "Interface parameters are deprecated"],
        "options_hi": ["टाइप पैरामीटर कम्पाइल-टाइम हैं, इंटरफेस पैरामीटर रनटाइम हैं", "कोई अंतर नहीं", "टाइप पैरामीटर तेज हैं", "इंटरफेस पैरामीटर डिप्रिकेटेड हैं"],
        "answer_en": "Type parameters are compile-time, interface parameters are runtime",
        "answer_hi": "टाइप पैरामीटर कम्पाइल-टाइम हैं, इंटरफेस पैरामीटर रनटाइम हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How to implement a custom HTTP handler that handles CORS?",
        "question_hi": "CORS हैंडल करने वाला कस्टम HTTP हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Add CORS headers in handler or use middleware", "Use default handler only", "Use net/http package only", "Use database"],
        "options_hi": ["हैंडलर में CORS हेडर ऐड करें या मिडलवेयर का उपयोग करें", "केवल डिफॉल्ट हैंडलर का उपयोग करें", "केवल net/http पैकेज का उपयोग करें", "डेटाबेस का उपयोग करें"],
        "answer_en": "Add CORS headers in handler or use middleware",
        "answer_hi": "हैंडलर में CORS हेडर ऐड करें या मिडलवेयर का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'runtime.GOROOT' function?",
        "question_hi": "'runtime.GOROOT' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get Go root directory", "To get goroutine count", "To get CPU count", "To get memory usage"],
        "options_hi": ["Go रूट डायरेक्टरी प्राप्त करने के लिए", "गोरूटीन काउंट प्राप्त करने के लिए", "CPU काउंट प्राप्त करने के लिए", "मेमोरी यूसेज प्राप्त करने के लिए"],
        "answer_en": "To get Go root directory",
        "answer_hi": "Go रूट डायरेक्टरी प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How to implement a custom writer that hashes data?",
        "question_hi": "डेटा हैश करने वाला कस्टम राइटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap hash writer around another writer", "Implement io.Writer with hashing", "Use bufio.Writer only", "Use bytes.Buffer only"],
        "options_hi": ["दूसरे राइटर के आसपास हैश राइटर रैप करें", "हैशिंग के साथ io.Writer इम्प्लीमेंट करें", "केवल bufio.Writer का उपयोग करें", "केवल bytes.Buffer का उपयोग करें"],
        "answer_en": "Wrap hash writer around another writer",
        "answer_hi": "दूसरे राइटर के आसपास हैश राइटर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the difference between slice expressions and array indexing?",
        "question_hi": "स्लाइस एक्सप्रेशन और ऐरे इंडेक्सिंग में क्या अंतर है?",
        "options_en": ["Slice expressions create new slices, array indexing accesses elements", "No difference", "Array indexing is faster", "Slice expressions are deprecated"],
        "options_hi": ["स्लाइस एक्सप्रेशन नई स्लाइस बनाते हैं, ऐरे इंडेक्सिंग एलिमेंट एक्सेस करती है", "कोई अंतर नहीं", "ऐरे इंडेक्सिंग तेज है", "स्लाइस एक्सप्रेशन डिप्रिकेटेड हैं"],
        "answer_en": "Slice expressions create new slices, array indexing accesses elements",
        "answer_hi": "स्लाइस एक्सप्रेशन नई स्लाइस बनाते हैं, ऐरे इंडेक्सिंग एलिमेंट एक्सेस करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How to implement a custom context with timeout propagation?",
        "question_hi": "टाइमआउट प्रोपगेशन के साथ कस्टम कॉन्टेक्स्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Embed context.Context and propagate deadlines", "Use context.WithTimeout only", "Use global variables", "Use channels"],
        "options_hi": ["context.Context एम्बेड करें और डेडलाइन प्रोपगेट करें", "केवल context.WithTimeout का उपयोग करें", "ग्लोबल वेरिएबल का उपयोग करें", "चैनल का उपयोग करें"],
        "answer_en": "Embed context.Context and propagate deadlines",
        "answer_hi": "context.Context एम्बेड करें और डेडलाइन प्रोपगेट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'runtime.Stack' function?",
        "question_hi": "'runtime.Stack' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get stack trace of all goroutines", "To get CPU stack", "To get memory stack", "To get call stack"],
        "options_hi": ["सभी गोरूटीन का स्टैक ट्रेस प्राप्त करने के लिए", "CPU स्टैक प्राप्त करने के लिए", "मेमोरी स्टैक प्राप्त करने के लिए", "कॉल स्टैक प्राप्त करने के लिए"],
        "answer_en": "To get stack trace of all goroutines",
        "answer_hi": "सभी गोरूटीन का स्टैक ट्रेस प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How to implement a custom reader that decompresses data?",
        "question_hi": "डेटा डिकम्प्रेस करने वाला कस्टम रीडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap decompress reader around another reader", "Implement io.Reader with decompression", "Use bufio.Reader only", "Use bytes.Reader only"],
        "options_hi": ["दूसरे रीडर के आसपास डिकम्प्रेस रीडर रैप करें", "डिकम्प्रेशन के साथ io.Reader इम्प्लीमेंट करें", "केवल bufio.Reader का उपयोग करें", "केवल bytes.Reader का उपयोग करें"],
        "answer_en": "Wrap decompress reader around another reader",
        "answer_hi": "दूसरे रीडर के आसपास डिकम्प्रेस रीडर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the difference between method expressions and function values?",
        "question_hi": "मेथड एक्सप्रेशन और फंक्शन वैल्यू में क्या अंतर है?",
        "options_en": ["Method expressions are functions that take receiver as first argument", "No difference", "Function values are faster", "Method expressions are deprecated"],
        "options_hi": ["मेथड एक्सप्रेशन ऐसे फंक्शन हैं जो रिसीवर को पहले आर्गुमेंट के रूप में लेते हैं", "कोई अंतर नहीं", "फंक्शन वैल्यू तेज हैं", "मेथड एक्सप्रेशन डिप्रिकेटेड हैं"],
        "answer_en": "Method expressions are functions that take receiver as first argument",
        "answer_hi": "मेथड एक्सप्रेशन ऐसे फंक्शन हैं जो रिसीवर को पहले आर्गुमेंट के रूप में लेते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How to implement a custom flag with environment variable support?",
        "question_hi": "एनवायरनमेंट वेरिएबल सपोर्ट के साथ कस्टम फ्लैग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Check environment variables in flag parsing", "Use flag package only", "Use os.Getenv only", "Use configuration files only"],
        "options_hi": ["फ्लैग पार्सिंग में एनवायरनमेंट वेरिएबल चेक करें", "केवल फ्लैग पैकेज का उपयोग करें", "केवल os.Getenv का उपयोग करें", "केवल कॉन्फिगरेशन फाइल का उपयोग करें"],
        "answer_en": "Check environment variables in flag parsing",
        "answer_hi": "फ्लैग पार्सिंग में एनवायरनमेंट वेरिएबल चेक करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'runtime.ReadTrace' function?",
        "question_hi": "'runtime.ReadTrace' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To read execution trace data", "To read CPU trace", "To read memory trace", "To read GC trace"],
        "options_hi": ["एक्जिक्यूशन ट्रेस डेटा पढ़ने के लिए", "CPU ट्रेस पढ़ने के लिए", "मेमोरी ट्रेस पढ़ने के लिए", "GC ट्रेस पढ़ने के लिए"],
        "answer_en": "To read execution trace data",
        "answer_hi": "एक्जिक्यूशन ट्रेस डेटा पढ़ने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How to implement a custom sort that is stable?",
        "question_hi": "स्टेबल कस्टम सॉर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use sort.Stable with custom Less function", "Use sort.Slice only", "Use sort.Sort only", "Use database sorting"],
        "options_hi": ["कस्टम Less फंक्शन के साथ sort.Stable का उपयोग करें", "केवल sort.Slice का उपयोग करें", "केवल sort.Sort का उपयोग करें", "डेटाबेस सॉर्टिंग का उपयोग करें"],
        "answer_en": "Use sort.Stable with custom Less function",
        "answer_hi": "कस्टम Less फंक्शन के साथ sort.Stable का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the difference between compile-time and runtime errors?",
        "question_hi": "कम्पाइल-टाइम और रनटाइम एरर में क्या अंतर है?",
        "options_en": ["Compile-time errors prevent compilation, runtime errors occur during execution", "No difference", "Runtime errors are faster", "Compile-time errors are deprecated"],
        "options_hi": ["कम्पाइल-टाइम एरर कम्पाइलेशन को रोकते हैं, रनटाइम एरर एक्जिक्यूशन के दौरान होते हैं", "कोई अंतर नहीं", "रनटाइम एरर तेज हैं", "कम्पाइल-टाइम एरर डिप्रिकेटेड हैं"],
        "answer_en": "Compile-time errors prevent compilation, runtime errors occur during execution",
        "answer_hi": "कम्पाइल-टाइम एरर कम्पाइलेशन को रोकते हैं, रनटाइम एरर एक्जिक्यूशन के दौरान होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How to implement a custom HTTP transport with retry logic?",
        "question_hi": "रिट्री लॉजिक के साथ कस्टम HTTP ट्रांसपोर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement http.RoundTripper with retry mechanism", "Use default transport only", "Use http.Client directly", "Use net/http package only"],
        "options_hi": ["रिट्री मैकेनिज्म के साथ http.RoundTripper इम्प्लीमेंट करें", "केवल डिफॉल्ट ट्रांसपोर्ट का उपयोग करें", "सीधे http.Client का उपयोग करें", "केवल net/http पैकेज का उपयोग करें"],
        "answer_en": "Implement http.RoundTripper with retry mechanism",
        "answer_hi": "रिट्री मैकेनिज्म के साथ http.RoundTripper इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'runtime.NumCgoCall' function?",
        "question_hi": "'runtime.NumCgoCall' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get number of cgo calls made", "To get goroutine count", "To get CPU count", "To get memory usage"],
        "options_hi": ["किए गए cgo कॉल की संख्या प्राप्त करने के लिए", "गोरूटीन काउंट प्राप्त करने के लिए", "CPU काउंट प्राप्त करने के लिए", "मेमोरी यूसेज प्राप्त करने के लिए"],
        "answer_en": "To get number of cgo calls made",
        "answer_hi": "किए गए cgo कॉल की संख्या प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How to implement a custom reader that validates data format?",
        "question_hi": "डेटा फॉर्मेट वैलिडेट करने वाला कस्टम रीडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap validation reader around another reader", "Implement io.Reader with validation", "Use bufio.Reader only", "Use bytes.Reader only"],
        "options_hi": ["दूसरे रीडर के आसपास वैलिडेशन रीडर रैप करें", "वैलिडेशन के साथ io.Reader इम्प्लीमेंट करें", "केवल bufio.Reader का उपयोग करें", "केवल bytes.Reader का उपयोग करें"],
        "answer_en": "Wrap validation reader around another reader",
        "answer_hi": "दूसरे रीडर के आसपास वैलिडेशन रीडर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the difference between embedded fields and regular fields?",
        "question_hi": "एम्बेडेड फील्ड और रेगुलर फील्ड में क्या अंतर है?",
        "options_en": ["Embedded fields promote methods to outer struct", "No difference", "Regular fields are faster", "Embedded fields are deprecated"],
        "options_hi": ["एम्बेडेड फील्ड मेथड को आउटर स्ट्रक्चर में प्रोमोट करते हैं", "कोई अंतर नहीं", "रेगुलर फील्ड तेज हैं", "एम्बेडेड फील्ड डिप्रिकेटेड हैं"],
        "answer_en": "Embedded fields promote methods to outer struct",
        "answer_hi": "एम्बेडेड फील्ड मेथड को आउटर स्ट्रक्चर में प्रोमोट करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How to implement a custom flag with configuration file support?",
        "question_hi": "कॉन्फिगरेशन फाइल सपोर्ट के साथ कस्टम फ्लैग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Parse configuration file before flag parsing", "Use flag package only", "Use environment variables only", "Use command line only"],
        "options_hi": ["फ्लैग पार्सिंग से पहले कॉन्फिगरेशन फाइल पार्स करें", "केवल फ्लैग पैकेज का उपयोग करें", "केवल एनवायरनमेंट वेरिएबल का उपयोग करें", "केवल कमांड लाइन का उपयोग करें"],
        "answer_en": "Parse configuration file before flag parsing",
        "answer_hi": "फ्लैग पार्सिंग से पहले कॉन्फिगरेशन फाइल पार्स करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'runtime.GC' function?",
        "question_hi": "'runtime.GC' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To trigger garbage collection manually", "To get GC statistics", "To set GC parameters", "To disable GC"],
        "options_hi": ["गार्बेज कलेक्शन को मैन्युअली ट्रिगर करने के लिए", "GC स्टैटिस्टिक्स प्राप्त करने के लिए", "GC पैरामीटर सेट करने के लिए", "GC डिसेबल करने के लिए"],
        "answer_en": "To trigger garbage collection manually",
        "answer_hi": "गार्बेज कलेक्शन को मैन्युअली ट्रिगर करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How to implement a custom writer that encrypts data?",
        "question_hi": "डेटा एन्क्रिप्ट करने वाला कस्टम राइटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap crypto stream writer around another writer", "Implement io.Writer with encryption", "Use bufio.Writer only", "Use bytes.Buffer only"],
        "options_hi": ["दूसरे राइटर के आसपास क्रिप्टो स्ट्रीम राइटर रैप करें", "एन्क्रिप्शन के साथ io.Writer इम्प्लीमेंट करें", "केवल bufio.Writer का उपयोग करें", "केवल bytes.Buffer का उपयोग करें"],
        "answer_en": "Wrap crypto stream writer around another writer",
        "answer_hi": "दूसरे राइटर के आसपास क्रिप्टो स्ट्रीम राइटर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the difference between type aliases and type definitions?",
        "question_hi": "टाइप अलायस और टाइप डेफिनिशन में क्या अंतर है?",
        "options_en": ["Aliases create alternative name, definitions create new type", "No difference", "Aliases are faster", "Definitions are deprecated"],
        "options_hi": ["अलायस अल्टरनेटिव नेम बनाते हैं, डेफिनिशन नया टाइप बनाते हैं", "कोई अंतर नहीं", "अलायस तेज हैं", "डेफिनिशन डिप्रिकेटेड हैं"],
        "answer_en": "Aliases create alternative name, definitions create new type",
        "answer_hi": "अलायस अल्टरनेटिव नेम बनाते हैं, डेफिनिशन नया टाइप बनाते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How to implement a custom HTTP handler with request logging?",
        "question_hi": "रिक्वेस्ट लॉगिंग के साथ कस्टम HTTP हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap handler with logging middleware", "Add logging in handler directly", "Use default handler only", "Use net/http package only"],
        "options_hi": ["लॉगिंग मिडलवेयर के साथ हैंडलर रैप करें", "सीधे हैंडलर में लॉगिंग ऐड करें", "केवल डिफॉल्ट हैंडलर का उपयोग करें", "केवल net/http पैकेज का उपयोग करें"],
        "answer_en": "Wrap handler with logging middleware",
        "answer_hi": "लॉगिंग मिडलवेयर के साथ हैंडलर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'runtime.Version' function?",
        "question_hi": "'runtime.Version' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get Go version string", "To get runtime version", "To get compiler version", "To get platform version"],
        "options_hi": ["Go वर्जन स्ट्रिंग प्राप्त करने के लिए", "रनटाइम वर्जन प्राप्त करने के लिए", "कम्पाइलर वर्जन प्राप्त करने के लिए", "प्लेटफॉर्म वर्जन प्राप्त करने के लिए"],
        "answer_en": "To get Go version string",
        "answer_hi": "Go वर्जन स्ट्रिंग प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How to implement a custom reader that transforms data?",
        "question_hi": "डेटा ट्रांसफॉर्म करने वाला कस्टम रीडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap transform reader around another reader", "Implement io.Reader with transformation", "Use bufio.Reader only", "Use bytes.Reader only"],
        "options_hi": ["दूसरे रीडर के आसपास ट्रांसफॉर्म रीडर रैप करें", "ट्रांसफॉर्मेशन के साथ io.Reader इम्प्लीमेंट करें", "केवल bufio.Reader का उपयोग करें", "केवल bytes.Reader का उपयोग करें"],
        "answer_en": "Wrap transform reader around another reader",
        "answer_hi": "दूसरे रीडर के आसपास ट्रांसफॉर्म रीडर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the difference between variable declaration and assignment?",
        "question_hi": "वेरिएबल डिक्लेरेशन और असाइनमेंट में क्या अंतर है?",
        "options_en": ["Declaration creates variable, assignment sets value", "No difference", "Declaration is faster", "Assignment is deprecated"],
        "options_hi": ["डिक्लेरेशन वेरिएबल बनाता है, असाइनमेंट वैल्यू सेट करता है", "कोई अंतर नहीं", "डिक्लेरेशन तेज है", "असाइनमेंट डिप्रिकेटेड है"],
        "answer_en": "Declaration creates variable, assignment sets value",
        "answer_hi": "डिक्लेरेशन वेरिएबल बनाता है, असाइनमेंट वैल्यू सेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How to implement a custom flag with validation and default values?",
        "question_hi": "वैलिडेशन और डिफॉल्ट वैल्यू के साथ कस्टम फ्लैग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement flag.Value interface with validation and defaults", "Use string flag only", "Use integer flag only", "Use bool flag only"],
        "options_hi": ["वैलिडेशन और डिफॉल्ट के साथ flag.Value इंटरफेस इम्प्लीमेंट करें", "केवल स्ट्रिंग फ्लैग का उपयोग करें", "केवल इंटीजर फ्लैग का उपयोग करें", "केवल बूल फ्लैग का उपयोग करें"],
        "answer_en": "Implement flag.Value interface with validation and defaults",
        "answer_hi": "वैलिडेशन और डिफॉल्ट के साथ flag.Value इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'runtime.StartTrace' function?",
        "question_hi": "'runtime.StartTrace' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To start execution tracing", "To start CPU profiling", "To start memory profiling", "To start block profiling"],
        "options_hi": ["एक्जिक्यूशन ट्रेसिंग शुरू करने के लिए", "CPU प्रोफाइलिंग शुरू करने के लिए", "मेमोरी प्रोफाइलिंग शुरू करने के लिए", "ब्लॉक प्रोफाइलिंग शुरू करने के लिए"],
        "answer_en": "To start execution tracing",
        "answer_hi": "एक्जिक्यूशन ट्रेसिंग शुरू करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How to implement a custom writer that batches writes?",
        "question_hi": "राइट बैच करने वाला कस्टम राइटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement io.Writer with buffer and flush mechanism", "Use bufio.Writer only", "Use bytes.Buffer only", "Use os.File directly"],
        "options_hi": ["बफर और फ्लश मैकेनिज्म के साथ io.Writer इम्प्लीमेंट करें", "केवल bufio.Writer का उपयोग करें", "केवल bytes.Buffer का उपयोग करें", "सीधे os.File का उपयोग करें"],
        "answer_en": "Implement io.Writer with buffer and flush mechanism",
        "answer_hi": "बफर और फ्लश मैकेनिज्म के साथ io.Writer इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the difference between constants and variables?",
        "question_hi": "कॉन्स्टेंट और वेरिएबल में क्या अंतर है?",
        "options_en": ["Constants are immutable, variables can change", "No difference", "Constants are faster", "Variables are deprecated"],
        "options_hi": ["कॉन्स्टेंट इम्यूटेबल हैं, वेरिएबल बदल सकते हैं", "कोई अंतर नहीं", "कॉन्स्टेंट तेज हैं", "वेरिएबल डिप्रिकेटेड हैं"],
        "answer_en": "Constants are immutable, variables can change",
        "answer_hi": "कॉन्स्टेंट इम्यूटेबल हैं, वेरिएबल बदल सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How to implement a custom HTTP handler with authentication?",
        "question_hi": "ऑथेंटिकेशन के साथ कस्टम HTTP हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap handler with auth middleware", "Add auth in handler directly", "Use default handler only", "Use net/http package only"],
        "options_hi": ["ऑथ मिडलवेयर के साथ हैंडलर रैप करें", "सीधे हैंडलर में ऑथ ऐड करें", "केवल डिफॉल्ट हैंडलर का उपयोग करें", "केवल net/http पैकेज का उपयोग करें"],
        "answer_en": "Wrap handler with auth middleware",
        "answer_hi": "ऑथ मिडलवेयर के साथ हैंडलर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'runtime.Goexit' function?",
        "question_hi": "'runtime.Goexit' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To terminate the calling goroutine", "To exit the program", "To stop all goroutines", "To pause the goroutine"],
        "options_hi": ["कॉलिंग गोरूटीन को टर्मिनेट करने के लिए", "प्रोग्राम एक्जिट करने के लिए", "सभी गोरूटीन रोकने के लिए", "गोरूटीन को पॉज करने के लिए"],
        "answer_en": "To terminate the calling goroutine",
        "answer_hi": "कॉलिंग गोरूटीन को टर्मिनेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How to implement a custom reader that skips invalid data?",
        "question_hi": "इनवैलिड डेटा स्किप करने वाला कस्टम रीडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap filtering reader around another reader", "Implement io.Reader with filtering", "Use bufio.Reader only", "Use bytes.Reader only"],
        "options_hi": ["दूसरे रीडर के आसपास फिल्टरिंग रीडर रैप करें", "फिल्टरिंग के साथ io.Reader इम्प्लीमेंट करें", "केवल bufio.Reader का उपयोग करें", "केवल bytes.Reader का उपयोग करें"],
        "answer_en": "Wrap filtering reader around another reader",
        "answer_hi": "दूसरे रीडर के आसपास फिल्टरिंग रीडर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the difference between functions and methods?",
        "question_hi": "फंक्शन और मेथड में क्या अंतर है?",
        "options_en": ["Methods are functions with receivers", "No difference", "Functions are faster", "Methods are deprecated"],
        "options_hi": ["मेथड रिसीवर वाले फंक्शन हैं", "कोई अंतर नहीं", "फंक्शन तेज हैं", "मेथड डिप्रिकेटेड हैं"],
        "answer_en": "Methods are functions with receivers",
        "answer_hi": "मेथड रिसीवर वाले फंक्शन हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How to implement a custom flag with dependency injection?",
        "question_hi": "डिपेंडेंसी इंजेक्शन के साथ कस्टम फ्लैग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use flag.Value with struct that has dependencies", "Use string flag only", "Use integer flag only", "Use bool flag only"],
        "options_hi": ["डिपेंडेंसी वाले स्ट्रक्चर के साथ flag.Value का उपयोग करें", "केवल स्ट्रिंग फ्लैग का उपयोग करें", "केवल इंटीजर फ्लैग का उपयोग करें", "केवल बूल फ्लैग का उपयोग करें"],
        "answer_en": "Use flag.Value with struct that has dependencies",
        "answer_hi": "डिपेंडेंसी वाले स्ट्रक्चर के साथ flag.Value का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'runtime.StopTrace' function?",
        "question_hi": "'runtime.StopTrace' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To stop execution tracing", "To stop CPU profiling", "To stop memory profiling", "To stop block profiling"],
        "options_hi": ["एक्जिक्यूशन ट्रेसिंग रोकने के लिए", "CPU प्रोफाइलिंग रोकने के लिए", "मेमोरी प्रोफाइलिंग रोकने के लिए", "ब्लॉक प्रोफाइलिंग रोकने के लिए"],
        "answer_en": "To stop execution tracing",
        "answer_hi": "एक्जिक्यूशन ट्रेसिंग रोकने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How to implement a custom writer that formats data?",
        "question_hi": "डेटा फॉर्मेट करने वाला कस्टम राइटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap formatting writer around another writer", "Implement io.Writer with formatting", "Use bufio.Writer only", "Use bytes.Buffer only"],
        "options_hi": ["दूसरे राइटर के आसपास फॉर्मेटिंग राइटर रैप करें", "फॉर्मेटिंग के साथ io.Writer इम्प्लीमेंट करें", "केवल bufio.Writer का उपयोग करें", "केवल bytes.Buffer का उपयोग करें"],
        "answer_en": "Wrap formatting writer around another writer",
        "answer_hi": "दूसरे राइटर के आसपास फॉर्मेटिंग राइटर रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the difference between package-level and function-level variables?",
        "question_hi": "पैकेज-लेवल और फंक्शन-लेवल वेरिएबल में क्या अंतर है?",
        "options_en": ["Package-level variables have package scope, function-level have local scope", "No difference", "Package-level are faster", "Function-level are deprecated"],
        "options_hi": ["पैकेज-लेवल वेरिएबल का पैकेज स्कोप होता है, फंक्शन-लेवल का लोकल स्कोप होता है", "कोई अंतर नहीं", "पैकेज-लेवल तेज हैं", "फंक्शन-लेवल डिप्रिकेटेड हैं"],
        "answer_en": "Package-level variables have package scope, function-level have local scope",
        "answer_hi": "पैकेज-लेवल वेरिएबल का पैकेज स्कोप होता है, फंक्शन-लेवल का लोकल स्कोप होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How to implement a custom HTTP handler with rate limiting?",
        "question_hi": "रेट लिमिटिंग के साथ कस्टम HTTP हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap handler with rate limiting middleware", "Add rate limiting in handler directly", "Use default handler only", "Use net/http package only"],
        "options_hi": ["रेट लिमिटिंग मिडलवेयर के साथ हैंडलर रैप करें", "सीधे हैंडलर में रेट लिमिटिंग ऐड करें", "केवल डिफॉल्ट हैंडलर का उपयोग करें", "केवल net/http पैकेज का उपयोग करें"],
        "answer_en": "Wrap handler with rate limiting middleware",
        "answer_hi": "रेट लिमिटिंग मिडलवेयर के साथ हैंडलर रैप करें",
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