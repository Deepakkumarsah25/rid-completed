const questions=[
    {
        "num": 1,
        "question_en": "What is the purpose of the 'make' function for channels?",
        "question_hi": "चैनल के लिए 'make' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Creates and initializes a channel", "Allocates memory for channel", "Makes channel ready", "Starts channel operation"],
        "options_hi": ["चैनल बनाता और इनिशियलाइज़ करता है", "चैनल के लिए मेमोरी अलोकेट करता है", "चैनल को रेडी करता है", "चैनल ऑपरेशन शुरू करता है"],
        "answer_en": "Creates and initializes a channel",
        "answer_hi": "चैनल बनाता और इनिशियलाइज़ करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which method is used to get the number of elements in a map?",
        "question_hi": "मैप में एलिमेंट की संख्या प्राप्त करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["len()", "count()", "size()", "length()"],
        "options_hi": ["len()", "count()", "size()", "length()"],
        "answer_en": "len()",
        "answer_hi": "len()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the default case sensitivity of Go identifiers?",
        "question_hi": "Go आइडेंटिफायर की डिफॉल्ट केस सेंसिटिविटी क्या है?",
        "options_en": ["Case sensitive", "Case insensitive", "Depends on platform", "Configurable"],
        "options_hi": ["केस सेंसिटिव", "केस इनसेंसिटिव", "प्लेटफॉर्म पर निर्भर", "कॉन्फिगरेबल"],
        "answer_en": "Case sensitive",
        "answer_hi": "केस सेंसिटिव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you declare a function that returns multiple values?",
        "question_hi": "मल्टीपल वैल्यू रिटर्न करने वाला फंक्शन कैसे डिक्लेयर करते हैं?",
        "options_en": ["func name() (type1, type2)", "func name() type1, type2", "func name(): (type1, type2)", "func name() -> (type1, type2)"],
        "options_hi": ["func name() (type1, type2)", "func name() type1, type2", "func name(): (type1, type2)", "func name() -> (type1, type2)"],
        "answer_en": "func name() (type1, type2)",
        "answer_hi": "func name() (type1, type2)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the zero value for a function type?",
        "question_hi": "फंक्शन टाइप का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "undefined", "zero", "null"],
        "options_hi": ["nil", "अनडिफाइंड", "जीरो", "null"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which keyword is used to define a method with a pointer receiver?",
        "question_hi": "पॉइंटर रिसीवर वाली मेथड डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["func (p *Type) method()", "method (p *Type) func()", "func method(p *Type)", "pointer func (p *Type) method()"],
        "options_hi": ["func (p *Type) method()", "method (p *Type) func()", "func method(p *Type)", "pointer func (p *Type) method()"],
        "answer_en": "func (p *Type) method()",
        "answer_hi": "func (p *Type) method()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the '...' operator in function calls?",
        "question_hi": "फंक्शन कॉल में '...' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["Unpack slice elements as arguments", "Variable arguments", "Spread operator", "Multiple arguments"],
        "options_hi": ["स्लाइस एलिमेंट को आर्गुमेंट के रूप में अनपैक करना", "वेरिएबल आर्गुमेंट", "स्प्रेड ऑपरेटर", "मल्टीपल आर्गुमेंट"],
        "answer_en": "Unpack slice elements as arguments",
        "answer_hi": "स्लाइस एलिमेंट को आर्गुमेंट के रूप में अनपैक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you create a new error with formatting?",
        "question_hi": "फॉर्मेटिंग के साथ नया एरर कैसे बनाते हैं?",
        "options_en": ["fmt.Errorf()", "errors.Newf()", "error.Format()", "fmt.NewError()"],
        "options_hi": ["fmt.Errorf()", "errors.Newf()", "error.Format()", "fmt.NewError()"],
        "answer_en": "fmt.Errorf()",
        "answer_hi": "fmt.Errorf()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'recover' function?",
        "question_hi": "'recover' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Regain control after panic", "Handle errors", "Restore program state", "Continue execution"],
        "options_hi": ["पैनिक के बाद कंट्रोल वापस पाना", "एरर हैंडल करना", "प्रोग्राम स्टेट रिस्टोर करना", "एक्जिक्यूशन जारी रखना"],
        "answer_en": "Regain control after panic",
        "answer_hi": "पैनिक के बाद कंट्रोल वापस पाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which package provides HTTP client functionality?",
        "question_hi": "HTTP क्लाइंट फंक्शनैलिटी कौन सा पैकेज प्रदान करता है?",
        "options_en": ["net/http", "http/client", "net/client", "http"],
        "options_hi": ["net/http", "http/client", "net/client", "http"],
        "answer_en": "net/http",
        "answer_hi": "net/http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you make an HTTP GET request in Go?",
        "question_hi": "Go में HTTP GET रिक्वेस्ट कैसे करते हैं?",
        "options_en": ["http.Get()", "http.Request(GET)", "client.Get()", "net.Get()"],
        "options_hi": ["http.Get()", "http.Request(GET)", "client.Get()", "net.Get()"],
        "answer_en": "http.Get()",
        "answer_hi": "http.Get()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of the 'io.Writer' interface?",
        "question_hi": "'io.Writer' इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["Write data to output", "Output operations", "Data writing", "Stream writing"],
        "options_hi": ["आउटपुट में डेटा लिखना", "आउटपुट ऑपरेशन", "डेटा राइटिंग", "स्ट्रीम राइटिंग"],
        "answer_en": "Write data to output",
        "answer_hi": "आउटपुट में डेटा लिखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you read the entire contents of a file?",
        "question_hi": "फाइल की पूरी कंटेंट कैसे पढ़ते हैं?",
        "options_en": ["os.ReadFile()", "ioutil.ReadFile()", "file.ReadAll()", "io.ReadAll(file)"],
        "options_hi": ["os.ReadFile()", "ioutil.ReadFile()", "file.ReadAll()", "io.ReadAll(file)"],
        "answer_en": "os.ReadFile()",
        "answer_hi": "os.ReadFile()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of the 'encoding/json' package?",
        "question_hi": "'encoding/json' पैकेज का उद्देश्य क्या है?",
        "options_en": ["JSON encoding and decoding", "JSON parsing", "JSON manipulation", "JSON utilities"],
        "options_hi": ["JSON एन्कोडिंग और डिकोडिंग", "JSON पार्सिंग", "JSON मैनिपुलेशन", "JSON यूटिलिटी"],
        "answer_en": "JSON encoding and decoding",
        "answer_hi": "JSON एन्कोडिंग और डिकोडिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How do you marshal a struct to JSON?",
        "question_hi": "स्ट्रक्चर को JSON में कैसे मार्शल करते हैं?",
        "options_en": ["json.Marshal()", "json.Encode()", "struct.ToJSON()", "json.Serialize()"],
        "options_hi": ["json.Marshal()", "json.Encode()", "struct.ToJSON()", "json.Serialize()"],
        "answer_en": "json.Marshal()",
        "answer_hi": "json.Marshal()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the purpose of the 'time' package's 'Duration' type?",
        "question_hi": "'time' पैकेज के 'Duration' टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent time intervals", "Measure duration", "Time periods", "Elapsed time"],
        "options_hi": ["टाइम इंटरवल रिप्रेजेंट करना", "ड्यूरेशन मापना", "टाइम पीरियड", "एलैप्स्ड टाइम"],
        "answer_en": "Represent time intervals",
        "answer_hi": "टाइम इंटरवल रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you get the current timestamp?",
        "question_hi": "करंट टाइमस्टैम्प कैसे प्राप्त करते हैं?",
        "options_en": ["time.Now()", "time.Current()", "time.Timestamp()", "timestamp.Now()"],
        "options_hi": ["time.Now()", "time.Current()", "time.Timestamp()", "timestamp.Now()"],
        "answer_en": "time.Now()",
        "answer_hi": "time.Now()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of the 'sync/atomic' package?",
        "question_hi": "'sync/atomic' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Atomic operations", "Thread-safe operations", "Low-level synchronization", "Concurrent access"],
        "options_hi": ["एटॉमिक ऑपरेशन", "थ्रेड-सेफ ऑपरेशन", "लो-लेवल सिंक्रोनाइज़ेशन", "कंकरंट एक्सेस"],
        "answer_en": "Atomic operations",
        "answer_hi": "एटॉमिक ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How do you perform atomic addition on integers?",
        "question_hi": "इंटीजर पर एटॉमिक ऐडिशन कैसे करते हैं?",
        "options_en": ["atomic.AddInt32()", "atomic.Add()", "sync.AddInt()", "atomic.Increment()"],
        "options_hi": ["atomic.AddInt32()", "atomic.Add()", "sync.AddInt()", "atomic.Increment()"],
        "answer_en": "atomic.AddInt32()",
        "answer_hi": "atomic.AddInt32()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the purpose of the 'context' package's 'Done' channel?",
        "question_hi": "'context' पैकेज के 'Done' चैनल का उद्देश्य क्या है?",
        "options_en": ["Signal cancellation", "Completion signal", "Done notification", "Finish indicator"],
        "options_hi": ["कैंसलेशन सिग्नल", "कम्पलीशन सिग्नल", "डन नोटिफिकेशन", "फिनिश इंडिकेटर"],
        "answer_en": "Signal cancellation",
        "answer_hi": "कैंसलेशन सिग्नल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you create a background context?",
        "question_hi": "बैकग्राउंड कॉन्टेक्स्ट कैसे बनाते हैं?",
        "options_en": ["context.Background()", "context.New()", "context.Empty()", "background.Context()"],
        "options_hi": ["context.Background()", "context.New()", "context.Empty()", "background.Context()"],
        "answer_en": "context.Background()",
        "answer_hi": "context.Background()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of the 'testing' package's 'B' type?",
        "question_hi": "'testing' पैकेज के 'B' टाइप का उद्देश्य क्या है?",
        "options_en": ["Benchmark state", "Benchmark operations", "Performance testing", "Benchmark context"],
        "options_hi": ["बेंचमार्क स्टेट", "बेंचमार्क ऑपरेशन", "परफॉर्मेंस टेस्टिंग", "बेंचमार्क कॉन्टेक्स्ट"],
        "answer_en": "Benchmark state",
        "answer_hi": "बेंचमार्क स्टेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you run benchmarks with specific count?",
        "question_hi": "स्पेसिफिक काउंट के साथ बेंचमार्क कैसे रन करते हैं?",
        "options_en": ["go test -bench -count", "go bench -count", "benchmark -count", "go test -count -bench"],
        "options_hi": ["go test -bench -count", "go bench -count", "benchmark -count", "go test -count -bench"],
        "answer_en": "go test -bench -count",
        "answer_hi": "go test -bench -count",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of the 'reflect' package's 'Value' type?",
        "question_hi": "'reflect' पैकेज के 'Value' टाइप का उद्देश्य क्या है?",
        "options_en": ["Runtime value representation", "Value reflection", "Dynamic value", "Reflected value"],
        "options_hi": ["रनटाइम वैल्यू रिप्रेजेंटेशन", "वैल्यू रिफ्लेक्शन", "डायनामिक वैल्यू", "रिफ्लेक्टेड वैल्यू"],
        "answer_en": "Runtime value representation",
        "answer_hi": "रनटाइम वैल्यू रिप्रेजेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you get the value of a struct field using reflection?",
        "question_hi": "रिफ्लेक्शन का उपयोग करके स्ट्रक्चर फील्ड की वैल्यू कैसे प्राप्त करते हैं?",
        "options_en": ["reflect.ValueOf().Field()", "reflect.FieldValue()", "value.Field()", "reflect.GetField()"],
        "options_hi": ["reflect.ValueOf().Field()", "reflect.FieldValue()", "value.Field()", "reflect.GetField()"],
        "answer_en": "reflect.ValueOf().Field()",
        "answer_hi": "reflect.ValueOf().Field()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of the 'unsafe' package's 'Pointer' type?",
        "question_hi": "'unsafe' पैकेज के 'Pointer' टाइप का उद्देश्य क्या है?",
        "options_en": ["Generic pointer type", "Unsafe pointer operations", "Pointer conversion", "Memory manipulation"],
        "options_hi": ["जेनरिक पॉइंटर टाइप", "अनसेफ पॉइंटर ऑपरेशन", "पॉइंटर कन्वर्जन", "मेमोरी मैनिपुलेशन"],
        "answer_en": "Generic pointer type",
        "answer_hi": "जेनरिक पॉइंटर टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you convert a pointer to unsafe.Pointer?",
        "question_hi": "पॉइंटर को unsafe.Pointer में कैसे कन्वर्ट करते हैं?",
        "options_en": ["unsafe.Pointer(ptr)", "ptr.ToUnsafe()", "unsafe.FromPointer(ptr)", "Pointer(ptr)"],
        "options_hi": ["unsafe.Pointer(ptr)", "ptr.ToUnsafe()", "unsafe.FromPointer(ptr)", "Pointer(ptr)"],
        "answer_en": "unsafe.Pointer(ptr)",
        "answer_hi": "unsafe.Pointer(ptr)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of the 'go mod tidy' command?",
        "question_hi": "'go mod tidy' कमांड का उद्देश्य क्या है?",
        "options_en": ["Clean up dependencies", "Remove unused modules", "Update go.mod", "Organize dependencies"],
        "options_hi": ["डिपेंडेंसी क्लीन अप करना", "अनयूज्ड मॉड्यूल रिमूव करना", "go.mod अपडेट करना", "डिपेंडेंसी ऑर्गनाइज़ करना"],
        "answer_en": "Clean up dependencies",
        "answer_hi": "डिपेंडेंसी क्लीन अप करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you vendor dependencies in Go modules?",
        "question_hi": "Go मॉड्यूल में डिपेंडेंसी वेंडर कैसे करते हैं?",
        "options_en": ["go mod vendor", "go vendor", "go mod -vendor", "vendor dependencies"],
        "options_hi": ["go mod vendor", "go vendor", "go mod -vendor", "डिपेंडेंसी वेंडर करें"],
        "answer_en": "go mod vendor",
        "answer_hi": "go mod vendor",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of the 'go generate' command?",
        "question_hi": "'go generate' कमांड का उद्देश्य क्या है?",
        "options_en": ["Run code generators", "Generate code", "Process directives", "Create source files"],
        "options_hi": ["कोड जनरेटर रन करना", "कोड जनरेट करना", "डायरेक्टिव प्रोसेस करना", "सोर्स फाइल बनाना"],
        "answer_en": "Run code generators",
        "answer_hi": "कोड जनरेटर रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you specify build constraints?",
        "question_hi": "बिल्ड कंस्ट्रेंट कैसे स्पेसिफाई करते हैं?",
        "options_en": ["//go:build comments", "Build tags in comments", "go:build directives", "Build constraints file"],
        "options_hi": ["//go:build कमेंट", "कमेंट में बिल्ड टैग", "go:build डायरेक्टिव", "बिल्ड कंस्ट्रेंट फाइल"],
        "answer_en": "//go:build comments",
        "answer_hi": "//go:build कमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of the 'crypto/sha256' package?",
        "question_hi": "'crypto/sha256' पैकेज का उद्देश्य क्या है?",
        "options_en": ["SHA-256 hashing", "Cryptographic hashing", "Secure hashing", "Hash algorithms"],
        "options_hi": ["SHA-256 हैशिंग", "क्रिप्टोग्राफिक हैशिंग", "सिक्योर हैशिंग", "हैश अल्गोरिदम"],
        "answer_en": "SHA-256 hashing",
        "answer_hi": "SHA-256 हैशिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you compute SHA-256 hash of data?",
        "question_hi": "डेटा का SHA-256 हैश कैसे कम्प्यूट करते हैं?",
        "options_en": ["sha256.Sum256()", "crypto.SHA256()", "hash.SHA256()", "sha256.Hash()"],
        "options_hi": ["sha256.Sum256()", "crypto.SHA256()", "hash.SHA256()", "sha256.Hash()"],
        "answer_en": "sha256.Sum256()",
        "answer_hi": "sha256.Sum256()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of the 'compress/gzip' package?",
        "question_hi": "'compress/gzip' पैकेज का उद्देश्य क्या है?",
        "options_en": ["GZIP compression", "File compression", "Data compression", "GZIP utilities"],
        "options_hi": ["GZIP कम्प्रेशन", "फाइल कम्प्रेशन", "डेटा कम्प्रेशन", "GZIP यूटिलिटी"],
        "answer_en": "GZIP compression",
        "answer_hi": "GZIP कम्प्रेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you create a gzip reader?",
        "question_hi": "gzip रीडर कैसे बनाते हैं?",
        "options_en": ["gzip.NewReader()", "gzip.Reader()", "compress/gzip.Reader", "NewGzipReader()"],
        "options_hi": ["gzip.NewReader()", "gzip.Reader()", "compress/gzip.Reader", "NewGzipReader()"],
        "answer_en": "gzip.NewReader()",
        "answer_hi": "gzip.NewReader()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of the 'archive/zip' package?",
        "question_hi": "'archive/zip' पैकेज का उद्देश्य क्या है?",
        "options_en": ["ZIP archive handling", "ZIP file operations", "Archive compression", "ZIP utilities"],
        "options_hi": ["ZIP आर्काइव हैंडलिंग", "ZIP फाइल ऑपरेशन", "आर्काइव कम्प्रेशन", "ZIP यूटिलिटी"],
        "answer_en": "ZIP archive handling",
        "answer_hi": "ZIP आर्काइव हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you create a new ZIP file?",
        "question_hi": "नई ZIP फाइल कैसे बनाते हैं?",
        "options_en": ["zip.NewWriter()", "zip.Create()", "archive/zip.New()", "NewZipFile()"],
        "options_hi": ["zip.NewWriter()", "zip.Create()", "archive/zip.New()", "NewZipFile()"],
        "answer_en": "zip.NewWriter()",
        "answer_hi": "zip.NewWriter()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of the 'image/draw' package?",
        "question_hi": "'image/draw' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Image composition", "Drawing operations", "Image manipulation", "Graphics drawing"],
        "options_hi": ["इमेज कम्पोजिशन", "ड्रॉइंग ऑपरेशन", "इमेज मैनिपुलेशन", "ग्राफिक्स ड्रॉइंग"],
        "answer_en": "Image composition",
        "answer_hi": "इमेज कम्पोजिशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you draw one image onto another?",
        "question_hi": "एक इमेज को दूसरी इमेज पर कैसे ड्रॉ करते हैं?",
        "options_en": ["draw.Draw()", "image.Draw()", "draw.Image()", "Image.DrawOn()"],
        "options_hi": ["draw.Draw()", "image.Draw()", "draw.Image()", "Image.DrawOn()"],
        "answer_en": "draw.Draw()",
        "answer_hi": "draw.Draw()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of the 'html/template' package?",
        "question_hi": "'html/template' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Safe HTML templates", "HTML generation", "Web templates", "Secure templating"],
        "options_hi": ["सेफ HTML टेम्पलेट", "HTML जनरेशन", "वेब टेम्पलेट", "सिक्योर टेम्पलेटिंग"],
        "answer_en": "Safe HTML templates",
        "answer_hi": "सेफ HTML टेम्पलेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you execute an HTML template?",
        "question_hi": "HTML टेम्पलेट कैसे एक्जिक्यूट करते हैं?",
        "options_en": ["template.Execute()", "template.Render()", "html.Execute()", "ExecuteTemplate()"],
        "options_hi": ["template.Execute()", "template.Render()", "html.Execute()", "ExecuteTemplate()"],
        "answer_en": "template.Execute()",
        "answer_hi": "template.Execute()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of the 'bytes' package's 'Buffer' type?",
        "question_hi": "'bytes' पैकेज के 'Buffer' टाइप का उद्देश्य क्या है?",
        "options_en": ["In-memory byte buffer", "Byte storage", "Memory buffer", "Data buffer"],
        "options_hi": ["इन-मेमोरी बाइट बफर", "बाइट स्टोरेज", "मेमोरी बफर", "डेटा बफर"],
        "answer_en": "In-memory byte buffer",
        "answer_hi": "इन-मेमोरी बाइट बफर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you write a string to a bytes buffer?",
        "question_hi": "बाइट बफर में स्ट्रिंग कैसे लिखते हैं?",
        "options_en": ["buffer.WriteString()", "bytes.WriteString()", "buffer.Write()", "WriteString(buffer)"],
        "options_hi": ["buffer.WriteString()", "bytes.WriteString()", "buffer.Write()", "WriteString(buffer)"],
        "answer_en": "buffer.WriteString()",
        "answer_hi": "buffer.WriteString()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of the 'strconv' package's 'Atoi' function?",
        "question_hi": "'strconv' पैकेज के 'Atoi' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["String to integer conversion", "ASCII to integer", "Parse integer", "Convert string to int"],
        "options_hi": ["स्ट्रिंग से इंटीजर कन्वर्जन", "ASCII से इंटीजर", "इंटीजर पार्स करना", "स्ट्रिंग को इंट में कन्वर्ट करना"],
        "answer_en": "String to integer conversion",
        "answer_hi": "स्ट्रिंग से इंटीजर कन्वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you convert an integer to string?",
        "question_hi": "इंटीजर को स्ट्रिंग में कैसे कन्वर्ट करते हैं?",
        "options_en": ["strconv.Itoa()", "string(i)", "fmt.Sprint(i)", "strconv.FormatInt()"],
        "options_hi": ["strconv.Itoa()", "string(i)", "fmt.Sprint(i)", "strconv.FormatInt()"],
        "answer_en": "strconv.Itoa()",
        "answer_hi": "strconv.Itoa()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of the 'unicode/utf8' package?",
        "question_hi": "'unicode/utf8' पैकेज का उद्देश्य क्या है?",
        "options_en": ["UTF-8 encoding", "Unicode utilities", "UTF-8 operations", "Text encoding"],
        "options_hi": ["UTF-8 एन्कोडिंग", "यूनिकोड यूटिलिटी", "UTF-8 ऑपरेशन", "टेक्स्ट एन्कोडिंग"],
        "answer_en": "UTF-8 encoding",
        "answer_hi": "UTF-8 एन्कोडिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you get the number of runes in a string?",
        "question_hi": "स्ट्रिंग में रून की संख्या कैसे प्राप्त करते हैं?",
        "options_en": ["utf8.RuneCountInString()", "len([]rune(s))", "rune.Count()", "unicode.RuneCount()"],
        "options_hi": ["utf8.RuneCountInString()", "len([]rune(s))", "rune.Count()", "unicode.RuneCount()"],
        "answer_en": "utf8.RuneCountInString()",
        "answer_hi": "utf8.RuneCountInString()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of the 'sort' package's 'Interface'?",
        "question_hi": "'sort' पैकेज के 'Interface' का उद्देश्य क्या है?",
        "options_en": ["Custom sorting", "Sort interface", "Sortable types", "Sort implementation"],
        "options_hi": ["कस्टम सॉर्टिंग", "सॉर्ट इंटरफेस", "सॉर्टेबल टाइप", "सॉर्ट इम्प्लीमेंटेशन"],
        "answer_en": "Custom sorting",
        "answer_hi": "कस्टम सॉर्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you sort a slice of strings?",
        "question_hi": "स्ट्रिंग की स्लाइस कैसे सॉर्ट करते हैं?",
        "options_en": ["sort.Strings()", "sort.SortStrings()", "strings.Sort()", "slice.Sort(strings)"],
        "options_hi": ["sort.Strings()", "sort.SortStrings()", "strings.Sort()", "slice.Sort(strings)"],
        "answer_en": "sort.Strings()",
        "answer_hi": "sort.Strings()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of the 'container/list' package?",
        "question_hi": "'container/list' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Doubly linked list", "List data structure", "Linked list implementation", "List operations"],
        "options_hi": ["डबली लिंक्ड लिस्ट", "लिस्ट डेटा स्ट्रक्चर", "लिंक्ड लिस्ट इम्प्लीमेंटेशन", "लिस्ट ऑपरेशन"],
        "answer_en": "Doubly linked list",
        "answer_hi": "डबली लिंक्ड लिस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you create a new list?",
        "question_hi": "नई लिस्ट कैसे बनाते हैं?",
        "options_en": ["list.New()", "new(list.List)", "list.Create()", "List.New()"],
        "options_hi": ["list.New()", "new(list.List)", "list.Create()", "List.New()"],
        "answer_en": "list.New()",
        "answer_hi": "list.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the purpose of the 'container/ring' package?",
        "question_hi": "'container/ring' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Circular list", "Ring buffer", "Circular data structure", "Ring operations"],
        "options_hi": ["सर्कुलर लिस्ट", "रिंग बफर", "सर्कुलर डेटा स्ट्रक्चर", "रिंग ऑपरेशन"],
        "answer_en": "Circular list",
        "answer_hi": "सर्कुलर लिस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you create a new ring?",
        "question_hi": "नया रिंग कैसे बनाते हैं?",
        "options_en": ["ring.New()", "new(ring.Ring)", "ring.Create()", "Ring.New()"],
        "options_hi": ["ring.New()", "new(ring.Ring)", "ring.Create()", "Ring.New()"],
        "answer_en": "ring.New()",
        "answer_hi": "ring.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the purpose of the 'index/suffixarray' package?",
        "question_hi": "'index/suffixarray' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Text indexing", "Substring search", "String indexing", "Text search"],
        "options_hi": ["टेक्स्ट इंडेक्सिंग", "सबस्ट्रिंग सर्च", "स्ट्रिंग इंडेक्सिंग", "टेक्स्ट सर्च"],
        "answer_en": "Text indexing",
        "answer_hi": "टेक्स्ट इंडेक्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you create a suffix array from a string?",
        "question_hi": "स्ट्रिंग से सफिक्स ऐरे कैसे बनाते हैं?",
        "options_en": ["suffixarray.New()", "index.NewSuffixArray()", "suffixarray.Create()", "NewSuffixArray()"],
        "options_hi": ["suffixarray.New()", "index.NewSuffixArray()", "suffixarray.Create()", "NewSuffixArray()"],
        "answer_en": "suffixarray.New()",
        "answer_hi": "suffixarray.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of the 'go/parser' package?",
        "question_hi": "'go/parser' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Parse Go source", "Source code parsing", "Go syntax parsing", "Code analysis"],
        "options_hi": ["Go सोर्स पार्स करना", "सोर्स कोड पार्सिंग", "Go सिंटैक्स पार्सिंग", "कोड एनालिसिस"],
        "answer_en": "Parse Go source",
        "answer_hi": "Go सोर्स पार्स करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you parse a Go file?",
        "question_hi": "Go फाइल कैसे पार्स करते हैं?",
        "options_en": ["parser.ParseFile()", "go/parser.Parse()", "parser.GoFile()", "ParseGoFile()"],
        "options_hi": ["parser.ParseFile()", "go/parser.Parse()", "parser.GoFile()", "ParseGoFile()"],
        "answer_en": "parser.ParseFile()",
        "answer_hi": "parser.ParseFile()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of the 'go/types' package?",
        "question_hi": "'go/types' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Go type system", "Type checking", "Type information", "Program types"],
        "options_hi": ["Go टाइप सिस्टम", "टाइप चेकिंग", "टाइप इनफार्मेशन", "प्रोग्राम टाइप"],
        "answer_en": "Go type system",
        "answer_hi": "Go टाइप सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you check types in Go code?",
        "question_hi": "Go कोड में टाइप कैसे चेक करते हैं?",
        "options_en": ["types.Check()", "go/types package", "Type checking functions", "Check types programmatically"],
        "options_hi": ["types.Check()", "go/types पैकेज", "टाइप चेकिंग फंक्शन", "प्रोग्रामेटिकली टाइप चेक करें"],
        "answer_en": "go/types package",
        "answer_hi": "go/types पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the purpose of the 'net' package's 'IP' type?",
        "question_hi": "'net' पैकेज के 'IP' टाइप का उद्देश्य क्या है?",
        "options_en": ["IP address representation", "Internet Protocol", "Network addresses", "IP operations"],
        "options_hi": ["IP एड्रेस रिप्रेजेंटेशन", "इंटरनेट प्रोटोकॉल", "नेटवर्क एड्रेस", "IP ऑपरेशन"],
        "answer_en": "IP address representation",
        "answer_hi": "IP एड्रेस रिप्रेजेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you parse an IP address from string?",
        "question_hi": "स्ट्रिंग से IP एड्रेस कैसे पार्स करते हैं?",
        "options_en": ["net.ParseIP()", "ip.Parse()", "net.IP.Parse()", "ParseIP()"],
        "options_hi": ["net.ParseIP()", "ip.Parse()", "net.IP.Parse()", "ParseIP()"],
        "answer_en": "net.ParseIP()",
        "answer_hi": "net.ParseIP()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the purpose of the 'crypto/tls' package?",
        "question_hi": "'crypto/tls' पैकेज का उद्देश्य क्या है?",
        "options_en": ["TLS/SSL implementation", "Secure connections", "Encrypted communication", "Transport security"],
        "options_hi": ["TLS/SSL इम्प्लीमेंटेशन", "सिक्योर कनेक्शन", "एन्क्रिप्टेड कम्युनिकेशन", "ट्रांसपोर्ट सिक्योरिटी"],
        "answer_en": "TLS/SSL implementation",
        "answer_hi": "TLS/SSL इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you create a TLS listener?",
        "question_hi": "TLS लिस्नर कैसे बनाते हैं?",
        "options_en": ["tls.Listen()", "net.ListenTLS()", "tls.NewListener()", "ListenTLS()"],
        "options_hi": ["tls.Listen()", "net.ListenTLS()", "tls.NewListener()", "ListenTLS()"],
        "answer_en": "tls.Listen()",
        "answer_hi": "tls.Listen()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the purpose of the 'go/constant' package?",
        "question_hi": "'go/constant' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Represent constants", "Constant values", "Mathematical constants", "Constant operations"],
        "options_hi": ["कॉन्स्टेंट रिप्रेजेंट करना", "कॉन्स्टेंट वैल्यू", "मैथमेटिकल कॉन्स्टेंट", "कॉन्स्टेंट ऑपरेशन"],
        "answer_en": "Represent constants",
        "answer_hi": "कॉन्स्टेंट रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you create a constant value?",
        "question_hi": "कॉन्स्टेंट वैल्यू कैसे बनाते हैं?",
        "options_en": ["constant.Make()", "go/constant.New()", "constant.Value()", "MakeConstant()"],
        "options_hi": ["constant.Make()", "go/constant.New()", "constant.Value()", "MakeConstant()"],
        "answer_en": "constant.Make()",
        "answer_hi": "constant.Make()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the purpose of the 'go/importer' package?",
        "question_hi": "'go/importer' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Package importation", "Import packages", "Package loading", "Import utilities"],
        "options_hi": ["पैकेज इम्पोर्टेशन", "पैकेज इम्पोर्ट करना", "पैकेज लोडिंग", "इम्पोर्ट यूटिलिटी"],
        "answer_en": "Package importation",
        "answer_hi": "पैकेज इम्पोर्टेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you import packages programmatically?",
        "question_hi": "प्रोग्रामेटिकली पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["importer.Default()", "go/importer package", "Import() function", "Programmatic import"],
        "options_hi": ["importer.Default()", "go/importer पैकेज", "Import() फंक्शन", "प्रोग्रामेटिक इम्पोर्ट"],
        "answer_en": "importer.Default()",
        "answer_hi": "importer.Default()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the purpose of the 'plugin' package?",
        "question_hi": "'plugin' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Dynamic loading", "Plugins system", "Runtime extensions", "External modules"],
        "options_hi": ["डायनामिक लोडिंग", "प्लगइन सिस्टम", "रनटाइम एक्सटेंशन", "एक्सटर्नल मॉड्यूल"],
        "answer_en": "Dynamic loading",
        "answer_hi": "डायनामिक लोडिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you open a plugin?",
        "question_hi": "प्लगइन कैसे ओपन करते हैं?",
        "options_en": ["plugin.Open()", "plugin.Load()", "OpenPlugin()", "plugin.Init()"],
        "options_hi": ["plugin.Open()", "plugin.Load()", "OpenPlugin()", "plugin.Init()"],
        "answer_en": "plugin.Open()",
        "answer_hi": "plugin.Open()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the purpose of the 'runtime/debug' package?",
        "question_hi": "'runtime/debug' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Debugging utilities", "Runtime debugging", "Debug information", "Program debugging"],
        "options_hi": ["डिबगिंग यूटिलिटी", "रनटाइम डिबगिंग", "डिबग इनफार्मेशन", "प्रोग्राम डिबगिंग"],
        "answer_en": "Debugging utilities",
        "answer_hi": "डिबगिंग यूटिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you get stack trace?",
        "question_hi": "स्टैक ट्रेस कैसे प्राप्त करते हैं?",
        "options_en": ["debug.Stack()", "runtime.Stack()", "stack.Trace()", "GetStackTrace()"],
        "options_hi": ["debug.Stack()", "runtime.Stack()", "stack.Trace()", "GetStackTrace()"],
        "answer_en": "debug.Stack()",
        "answer_hi": "debug.Stack()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the purpose of the 'expvar' package?",
        "question_hi": "'expvar' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Exported variables", "Public variables", "Runtime metrics", "Program variables"],
        "options_hi": ["एक्सपोर्टेड वेरिएबल", "पब्लिक वेरिएबल", "रनटाइम मेट्रिक्स", "प्रोग्राम वेरिएबल"],
        "answer_en": "Exported variables",
        "answer_hi": "एक्सपोर्टेड वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you publish a variable for monitoring?",
        "question_hi": "मॉनिटरिंग के लिए वेरिएबल कैसे पब्लिश करते हैं?",
        "options_en": ["expvar.Publish()", "expvar.New()", "PublishVariable()", "expvar.Export()"],
        "options_hi": ["expvar.Publish()", "expvar.New()", "PublishVariable()", "expvar.Export()"],
        "answer_en": "expvar.Publish()",
        "answer_hi": "expvar.Publish()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the purpose of the 'hash' package?",
        "question_hi": "'hash' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Hash functions", "Hashing algorithms", "Hash interfaces", "Data hashing"],
        "options_hi": ["हैश फंक्शन", "हैशिंग अल्गोरिदम", "हैश इंटरफेस", "डेटा हैशिंग"],
        "answer_en": "Hash functions",
        "answer_hi": "हैश फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you create a new hash?",
        "question_hi": "नया हैश कैसे बनाते हैं?",
        "options_en": ["hash.New()", "NewHash()", "hash.Create()", "CreateHash()"],
        "options_hi": ["hash.New()", "NewHash()", "hash.Create()", "CreateHash()"],
        "answer_en": "hash.New()",
        "answer_hi": "hash.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of the 'mime' package?",
        "question_hi": "'mime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["MIME type handling", "Media types", "Content types", "MIME utilities"],
        "options_hi": ["MIME टाइप हैंडलिंग", "मीडिया टाइप", "कंटेंट टाइप", "MIME यूटिलिटी"],
        "answer_en": "MIME type handling",
        "answer_hi": "MIME टाइप हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you get MIME type from extension?",
        "question_hi": "एक्सटेंशन से MIME टाइप कैसे प्राप्त करते हैं?",
        "options_en": ["mime.TypeByExtension()", "mime.GetType()", "GetMIMEType()", "mime.FromExtension()"],
        "options_hi": ["mime.TypeByExtension()", "mime.GetType()", "GetMIMEType()", "mime.FromExtension()"],
        "answer_en": "mime.TypeByExtension()",
        "answer_hi": "mime.TypeByExtension()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the purpose of the 'path' package?",
        "question_hi": "'path' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Path manipulation", "File paths", "Path operations", "Path utilities"],
        "options_hi": ["पाथ मैनिपुलेशन", "फाइल पाथ", "पाथ ऑपरेशन", "पाथ यूटिलिटी"],
        "answer_en": "Path manipulation",
        "answer_hi": "पाथ मैनिपुलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you get the base name of a path?",
        "question_hi": "पाथ का बेस नेम कैसे प्राप्त करते हैं?",
        "options_en": ["path.Base()", "filepath.Base()", "GetBaseName()", "path.GetBase()"],
        "options_hi": ["path.Base()", "filepath.Base()", "GetBaseName()", "path.GetBase()"],
        "answer_en": "path.Base()",
        "answer_hi": "path.Base()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the purpose of the 'reflect' package's 'SliceOf' function?",
        "question_hi": "'reflect' पैकेज के 'SliceOf' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create slice type", "Slice type reflection", "Dynamic slice type", "Reflect slice type"],
        "options_hi": ["स्लाइस टाइप बनाना", "स्लाइस टाइप रिफ्लेक्शन", "डायनामिक स्लाइस टाइप", "स्लाइस टाइप रिफ्लेक्ट करना"],
        "answer_en": "Create slice type",
        "answer_hi": "स्लाइस टाइप बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you create a new slice type using reflection?",
        "question_hi": "रिफ्लेक्शन का उपयोग करके नया स्लाइस टाइप कैसे बनाते हैं?",
        "options_en": ["reflect.SliceOf()", "reflect.NewSlice()", "SliceType()", "reflect.MakeSlice()"],
        "options_hi": ["reflect.SliceOf()", "reflect.NewSlice()", "SliceType()", "reflect.MakeSlice()"],
        "answer_en": "reflect.SliceOf()",
        "answer_hi": "reflect.SliceOf()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the purpose of the 'unsafe' package's 'Sizeof' function?",
        "question_hi": "'unsafe' पैकेज के 'Sizeof' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get size of type", "Type size in bytes", "Memory size", "Size calculation"],
        "options_hi": ["टाइप का साइज प्राप्त करना", "बाइट में टाइप साइज", "मेमोरी साइज", "साइज कैलकुलेशन"],
        "answer_en": "Get size of type",
        "answer_hi": "टाइप का साइज प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you get the size of a variable?",
        "question_hi": "वेरिएबल का साइज कैसे प्राप्त करते हैं?",
        "options_en": ["unsafe.Sizeof()", "sizeof()", "size.Get()", "GetSize()"],
        "options_hi": ["unsafe.Sizeof()", "sizeof()", "size.Get()", "GetSize()"],
        "answer_en": "unsafe.Sizeof()",
        "answer_hi": "unsafe.Sizeof()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the purpose of the 'go/build' package?",
        "question_hi": "'go/build' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Build information", "Package building", "Build context", "Build process"],
        "options_hi": ["बिल्ड इनफार्मेशन", "पैकेज बिल्डिंग", "बिल्ड कॉन्टेक्स्ट", "बिल्ड प्रोसेस"],
        "answer_en": "Build information",
        "answer_hi": "बिल्ड इनफार्मेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you get build context?",
        "question_hi": "बिल्ड कॉन्टेक्स्ट कैसे प्राप्त करते हैं?",
        "options_en": ["build.Default", "build.Context()", "GetBuildContext()", "build.NewContext()"],
        "options_hi": ["build.Default", "build.Context()", "GetBuildContext()", "build.NewContext()"],
        "answer_en": "build.Default",
        "answer_hi": "build.Default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the purpose of the 'go/doc' package?",
        "question_hi": "'go/doc' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Documentation extraction", "Code documentation", "Doc comments", "Package documentation"],
        "options_hi": ["डॉक्युमेंटेशन एक्सट्रैक्शन", "कोड डॉक्युमेंटेशन", "डॉक कमेंट", "पैकेज डॉक्युमेंटेशन"],
        "answer_en": "Documentation extraction",
        "answer_hi": "डॉक्युमेंटेशन एक्सट्रैक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you extract package documentation?",
        "question_hi": "पैकेज डॉक्युमेंटेशन कैसे एक्सट्रैक्ट करते हैं?",
        "options_en": ["doc.New()", "go/doc package", "ExtractDocumentation()", "doc.Parse()"],
        "options_hi": ["doc.New()", "go/doc पैकेज", "ExtractDocumentation()", "doc.Parse()"],
        "answer_en": "doc.New()",
        "answer_hi": "doc.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of the 'go/format' package?",
        "question_hi": "'go/format' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Code formatting", "Source formatting", "Go fmt utilities", "Format Go code"],
        "options_hi": ["कोड फॉर्मेटिंग", "सोर्स फॉर्मेटिंग", "Go fmt यूटिलिटी", "Go कोड फॉर्मेट करना"],
        "answer_en": "Code formatting",
        "answer_hi": "कोड फॉर्मेटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you format Go source code?",
        "question_hi": "Go सोर्स कोड कैसे फॉर्मेट करते हैं?",
        "options_en": ["format.Source()", "go/format package", "FormatCode()", "format.Go()"],
        "options_hi": ["format.Source()", "go/format पैकेज", "FormatCode()", "format.Go()"],
        "answer_en": "format.Source()",
        "answer_hi": "format.Source()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the purpose of the 'go/token' package?",
        "question_hi": "'go/token' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Token constants", "Lexical tokens", "Source tokens", "Token definitions"],
        "options_hi": ["टोकन कॉन्स्टेंट", "लेक्सिकल टोकन", "सोर्स टोकन", "टोकन डेफिनिशन"],
        "answer_en": "Token constants",
        "answer_hi": "टोकन कॉन्स्टेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you create a new token set?",
        "question_hi": "नया टोकन सेट कैसे बनाते हैं?",
        "options_en": ["token.NewFileSet()", "token.Set()", "NewTokenSet()", "token.CreateSet()"],
        "options_hi": ["token.NewFileSet()", "token.Set()", "NewTokenSet()", "token.CreateSet()"],
        "answer_en": "token.NewFileSet()",
        "answer_hi": "token.NewFileSet()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the purpose of the 'log/syslog' package?",
        "question_hi": "'log/syslog' पैकेज का उद्देश्य क्या है?",
        "options_en": ["System logging", "Syslog integration", "System logger", "Syslog utilities"],
        "options_hi": ["सिस्टम लॉगिंग", "Syslog इंटीग्रेशन", "सिस्टम लॉगर", "Syslog यूटिलिटी"],
        "answer_en": "System logging",
        "answer_hi": "सिस्टम लॉगिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you create a syslog writer?",
        "question_hi": "Syslog राइटर कैसे बनाते हैं?",
        "options_en": ["syslog.New()", "log/syslog.New()", "NewSyslog()", "syslog.Writer()"],
        "options_hi": ["syslog.New()", "log/syslog.New()", "NewSyslog()", "syslog.Writer()"],
        "answer_en": "syslog.New()",
        "answer_hi": "syslog.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of the 'flag' package's 'Visit' function?",
        "question_hi": "'flag' पैकेज के 'Visit' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Visit all flags", "Iterate over flags", "Flag iteration", "Process flags"],
        "options_hi": ["सभी फ्लैग विजिट करना", "फ्लैग पर इटरेट करना", "फ्लैग इटरेशन", "फ्लैग प्रोसेस करना"],
        "answer_en": "Visit all flags",
        "answer_hi": "सभी फ्लैग विजिट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you iterate over command-line flags?",
        "question_hi": "कमांड-लाइन फ्लैग पर कैसे इटरेट करते हैं?",
        "options_en": ["flag.Visit()", "flag.Range()", "IterateFlags()", "flag.Each()"],
        "options_hi": ["flag.Visit()", "flag.Range()", "IterateFlags()", "flag.Each()"],
        "answer_en": "flag.Visit()",
        "answer_hi": "flag.Visit()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the purpose of the 'testing' package's 'Cleanup' function?",
        "question_hi": "'testing' पैकेज के 'Cleanup' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Register cleanup functions", "Test cleanup", "Resource cleanup", "Cleanup operations"],
        "options_hi": ["क्लीनअप फंक्शन रजिस्टर करना", "टेस्ट क्लीनअप", "रिसोर्स क्लीनअप", "क्लीनअप ऑपरेशन"],
        "answer_en": "Register cleanup functions",
        "answer_hi": "क्लीनअप फंक्शन रजिस्टर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you register a cleanup function in tests?",
        "question_hi": "टेस्ट में क्लीनअप फंक्शन कैसे रजिस्टर करते हैं?",
        "options_en": ["t.Cleanup()", "testing.Cleanup()", "RegisterCleanup()", "t.AddCleanup()"],
        "options_hi": ["t.Cleanup()", "testing.Cleanup()", "RegisterCleanup()", "t.AddCleanup()"],
        "answer_en": "t.Cleanup()",
        "answer_hi": "t.Cleanup()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the purpose of the 'context' package's 'WithValue'?",
        "question_hi": "'context' पैकेज के 'WithValue' का उद्देश्य क्या है?",
        "options_en": ["Store values in context", "Context with data", "Value storage", "Data context"],
        "options_hi": ["कॉन्टेक्स्ट में वैल्यू स्टोर करना", "डेटा के साथ कॉन्टेक्स्ट", "वैल्यू स्टोरेज", "डेटा कॉन्टेक्स्ट"],
        "answer_en": "Store values in context",
        "answer_hi": "कॉन्टेक्स्ट में वैल्यू स्टोर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you store a value in context?",
        "question_hi": "कॉन्टेक्स्ट में वैल्यू कैसे स्टोर करते हैं?",
        "options_en": ["context.WithValue()", "context.Store()", "WithValue()", "context.Set()"],
        "options_hi": ["context.WithValue()", "context.Store()", "WithValue()", "context.Set()"],
        "answer_en": "context.WithValue()",
        "answer_hi": "context.WithValue()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of the 'sync' package's 'Pool' type?",
        "question_hi": "'sync' पैकेज के 'Pool' टाइप का उद्देश्य क्या है?",
        "options_en": ["Object pooling", "Resource pooling", "Reusable objects", "Pool management"],
        "options_hi": ["ऑब्जेक्ट पूलिंग", "रिसोर्स पूलिंग", "रीयूजेबल ऑब्जेक्ट", "पूल मैनेजमेंट"],
        "answer_en": "Object pooling",
        "answer_hi": "ऑब्जेक्ट पूलिंग",
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