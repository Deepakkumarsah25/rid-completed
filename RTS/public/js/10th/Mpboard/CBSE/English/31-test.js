const questions=[
    {
        "num": 1,
        "question_en": "What is the default value of a boolean variable in Go?",
        "question_hi": "Go में बूलियन वेरिएबल का डिफॉल्ट वैल्यू क्या है?",
        "options_en": ["false", "true", "0", "nil"],
        "options_hi": ["false", "true", "0", "nil"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you declare a variable without initializing it in Go?",
        "question_hi": "Go में वेरिएबल को इनिशियलाइज़ किए बिना कैसे डिक्लेयर करते हैं?",
        "options_en": ["var name type", "name := type", "variable name type", "let name type"],
        "options_hi": ["var name type", "name := type", "variable name type", "let name type"],
        "answer_en": "var name type",
        "answer_hi": "var name type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which function is used to print to standard error in Go?",
        "question_hi": "Go में स्टैंडर्ड एरर में प्रिंट करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["fmt.Fprintln(os.Stderr, ...)", "log.Print()", "fmt.Print()", "error.Print()"],
        "options_hi": ["fmt.Fprintln(os.Stderr, ...)", "log.Print()", "fmt.Print()", "error.Print()"],
        "answer_en": "fmt.Fprintln(os.Stderr, ...)",
        "answer_hi": "fmt.Fprintln(os.Stderr, ...)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of the 'defer' keyword in Go?",
        "question_hi": "Go में 'defer' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Schedule function execution before return", "Delay execution", "Async execution", "Error handling"],
        "options_hi": ["रिटर्न से पहले फंक्शन एक्जिक्यूशन शेड्यूल करना", "एक्जिक्यूशन डिले करना", "एसिंक एक्जिक्यूशन", "एरर हैंडलिंग"],
        "answer_en": "Schedule function execution before return",
        "answer_hi": "रिटर्न से पहले फंक्शन एक्जिक्यूशन शेड्यूल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How do you create a goroutine in Go?",
        "question_hi": "Go में गोरूटीन कैसे बनाते हैं?",
        "options_en": ["go functionCall()", "goroutine functionCall()", "async functionCall()", "spawn functionCall()"],
        "options_hi": ["go functionCall()", "goroutine functionCall()", "async functionCall()", "spawn functionCall()"],
        "answer_en": "go functionCall()",
        "answer_hi": "go functionCall()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the zero value of a pointer in Go?",
        "question_hi": "Go में पॉइंटर का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "undefined", "null"],
        "options_hi": ["nil", "0", "अनडिफाइंड", "null"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which keyword is used to define a constant in Go?",
        "question_hi": "Go में कॉन्स्टेंट डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["const", "constant", "final", "var"],
        "options_hi": ["const", "constant", "final", "var"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the purpose of the 'select' statement in Go?",
        "question_hi": "Go में 'select' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Wait on multiple channel operations", "Choose between cases", "Switch on channels", "Channel selection"],
        "options_hi": ["मल्टीपल चैनल ऑपरेशन पर वेट करना", "केस के बीच चुनना", "चैनल पर स्विच करना", "चैनल सिलेक्शन"],
        "answer_en": "Wait on multiple channel operations",
        "answer_hi": "मल्टीपल चैनल ऑपरेशन पर वेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which package is used for formatted I/O in Go?",
        "question_hi": "Go में फॉर्मेटेड I/O के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["fmt", "io", "os", "format"],
        "options_hi": ["fmt", "io", "os", "format"],
        "answer_en": "fmt",
        "answer_hi": "fmt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you check if a key exists in a map?",
        "question_hi": "मैप में की एक्सिस्ट करती है या नहीं, यह कैसे चेक करते हैं?",
        "options_en": ["value, ok := map[key]", "map.hasKey(key)", "map.contains(key)", "exists(key, map)"],
        "options_hi": ["value, ok := map[key]", "map.hasKey(key)", "map.contains(key)", "exists(key, map)"],
        "answer_en": "value, ok := map[key]",
        "answer_hi": "value, ok := map[key]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'range' keyword in Go?",
        "question_hi": "Go में 'range' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Iterate over arrays, slices, maps, or channels", "Define value ranges", "Create number sequences", "Set boundaries"],
        "options_hi": ["ऐरे, स्लाइस, मैप या चैनल पर इटरेट करना", "वैल्यू रेंज डिफाइन करना", "नंबर सीक्वेंस बनाना", "बाउंड्री सेट करना"],
        "answer_en": "Iterate over arrays, slices, maps, or channels",
        "answer_hi": "ऐरे, स्लाइस, मैप या चैनल पर इटरेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you declare a slice in Go?",
        "question_hi": "Go में स्लाइस कैसे डिक्लेयर करते हैं?",
        "options_en": ["var s []int", "s := []int{}", "s := make([]int)", "Both var s []int and s := []int{}"],
        "options_hi": ["var s []int", "s := []int{}", "s := make([]int)", "var s []int और s := []int{} दोनों"],
        "answer_en": "Both var s []int and s := []int{}",
        "answer_hi": "var s []int और s := []int{} दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the zero value of a slice?",
        "question_hi": "स्लाइस का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "[]", "empty slice", "undefined"],
        "options_hi": ["nil", "[]", "एम्प्टी स्लाइस", "अनडिफाइंड"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you get the capacity of a slice?",
        "question_hi": "स्लाइस की कैपेसिटी कैसे प्राप्त करते हैं?",
        "options_en": ["cap(slice)", "slice.cap()", "len(slice)", "capacity(slice)"],
        "options_hi": ["cap(slice)", "slice.cap()", "len(slice)", "capacity(slice)"],
        "answer_en": "cap(slice)",
        "answer_hi": "cap(slice)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'append' function?",
        "question_hi": "'append' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Add elements to a slice", "Concatenate strings", "Add to arrays", "Extend collections"],
        "options_hi": ["स्लाइस में एलिमेंट ऐड करना", "स्ट्रिंग कॉन्कैटनेट करना", "ऐरे में ऐड करना", "कलेक्शन एक्सटेंड करना"],
        "answer_en": "Add elements to a slice",
        "answer_hi": "स्लाइस में एलिमेंट ऐड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you copy elements between slices?",
        "question_hi": "स्लाइस के बीच एलिमेंट कैसे कॉपी करते हैं?",
        "options_en": ["copy(dest, src)", "dest = src[:]", "slice.Copy(dest, src)", "memcpy(dest, src)"],
        "options_hi": ["copy(dest, src)", "dest = src[:]", "slice.Copy(dest, src)", "memcpy(dest, src)"],
        "answer_en": "copy(dest, src)",
        "answer_hi": "copy(dest, src)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the difference between arrays and slices in Go?",
        "question_hi": "Go में ऐरे और स्लाइस में क्या अंतर है?",
        "options_en": ["Arrays have fixed size, slices are dynamic", "Slices are faster", "Arrays are reference types", "No difference"],
        "options_hi": ["ऐरे का साइज फिक्स्ड होता है, स्लाइस डायनामिक होते हैं", "स्लाइस फास्टर होते हैं", "ऐरे रेफरेंस टाइप होते हैं", "कोई अंतर नहीं"],
        "answer_en": "Arrays have fixed size, slices are dynamic",
        "answer_hi": "ऐरे का साइज फिक्स्ड होता है, स्लाइस डायनामिक होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you declare a struct in Go?",
        "question_hi": "Go में स्ट्रक्चर कैसे डिक्लेयर करते हैं?",
        "options_en": ["type Name struct { field type }", "struct Name { field type }", "type struct Name { field type }", "Name := struct { field type }"],
        "options_hi": ["type Name struct { field type }", "struct Name { field type }", "type struct Name { field type }", "Name := struct { field type }"],
        "answer_en": "type Name struct { field type }",
        "answer_hi": "type Name struct { field type }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is method embedding in Go?",
        "question_hi": "Go में मेथड एम्बेडिंग क्या है?",
        "options_en": ["Inheriting methods from embedded types", "Hiding methods", "Method overriding", "Interface implementation"],
        "options_hi": ["एम्बेडेड टाइप से मेथड इनहेरिट करना", "मेथड हाइड करना", "मेथड ओवरराइडिंग", "इंटरफेस इम्प्लीमेंटेशन"],
        "answer_en": "Inheriting methods from embedded types",
        "answer_hi": "एम्बेडेड टाइप से मेथड इनहेरिट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you implement an interface in Go?",
        "question_hi": "Go में इंटरफेस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implicitly by implementing all methods", "Using 'implements' keyword", "Explicit declaration", "Interface inheritance"],
        "options_hi": ["सभी मेथड इम्प्लीमेंट करके इम्प्लिसिटली", "'implements' कीवर्ड का उपयोग करके", "एक्सप्लिसिट डिक्लेरेशन", "इंटरफेस इनहेरिटेंस"],
        "answer_en": "Implicitly by implementing all methods",
        "answer_hi": "सभी मेथड इम्प्लीमेंट करके इम्प्लिसिटली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the empty interface in Go?",
        "question_hi": "Go में एम्प्टी इंटरफेस क्या है?",
        "options_en": ["interface{}", "any", "empty", "interface"],
        "options_hi": ["interface{}", "any", "empty", "interface"],
        "answer_en": "interface{}",
        "answer_hi": "interface{}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you perform type assertion in Go?",
        "question_hi": "Go में टाइप असर्शन कैसे करते हैं?",
        "options_en": ["value.(Type)", "assert(value, Type)", "Type(value)", "value.as(Type)"],
        "options_hi": ["value.(Type)", "assert(value, Type)", "Type(value)", "value.as(Type)"],
        "answer_en": "value.(Type)",
        "answer_hi": "value.(Type)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the 'panic' function?",
        "question_hi": "'panic' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Stop normal execution and begin panicking", "Throw exception", "Log error", "Exit program"],
        "options_hi": ["नॉर्मल एक्जिक्यूशन रोकना और पैनिकिंग शुरू करना", "एक्सेप्शन थ्रो करना", "एरर लॉग करना", "प्रोग्राम एक्जिट करना"],
        "answer_en": "Stop normal execution and begin panicking",
        "answer_hi": "नॉर्मल एक्जिक्यूशन रोकना और पैनिकिंग शुरू करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you handle errors in Go?",
        "question_hi": "Go में एरर कैसे हैंडल करते हैं?",
        "options_en": ["Return error values from functions", "Try-catch blocks", "Error events", "Global error handler"],
        "options_hi": ["फंक्शन से एरर वैल्यू रिटर्न करना", "ट्राई-कैच ब्लॉक", "एरर इवेंट", "ग्लोबल एरर हैंडलर"],
        "answer_en": "Return error values from functions",
        "answer_hi": "फंक्शन से एरर वैल्यू रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the 'errors.Is' function?",
        "question_hi": "'errors.Is' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Check if error matches target", "Compare errors", "Error equality", "Error type checking"],
        "options_hi": ["चेक करना कि एरर टार्गेट से मैच करता है या नहीं", "एरर कम्पेयर करना", "एरर इक्वलिटी", "एरर टाइप चेकिंग"],
        "answer_en": "Check if error matches target",
        "answer_hi": "चेक करना कि एरर टार्गेट से मैच करता है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you create a buffered channel?",
        "question_hi": "बफर्ड चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan type, size)", "chan type(size)", "make(chan type, buffer)", "buffered chan type"],
        "options_hi": ["make(chan type, size)", "chan type(size)", "make(chan type, buffer)", "buffered chan type"],
        "answer_en": "make(chan type, size)",
        "answer_hi": "make(chan type, size)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What happens when you close a channel?",
        "question_hi": "जब आप चैनल क्लोज करते हैं तो क्या होता है?",
        "options_en": ["Receives will succeed until channel is empty", "Channel is destroyed", "All goroutines blocked on it panic", "Immediate deadlock"],
        "options_hi": ["रिसीव तब तक सक्सेसफुल होंगे जब तक चैनल एम्प्टी नहीं हो जाता", "चैनल डिस्ट्रॉय हो जाता है", "इस पर ब्लॉक्ड सभी गोरूटीन पैनिक करेंगी", "इमीडिएट डेडलॉक"],
        "answer_en": "Receives will succeed until channel is empty",
        "answer_hi": "रिसीव तब तक सक्सेसफुल होंगे जब तक चैनल एम्प्टी नहीं हो जाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you check if a channel is closed?",
        "question_hi": "चैनल क्लोज है या नहीं, यह कैसे चेक करते हैं?",
        "options_en": ["value, ok := <-ch", "ch.closed()", "isClosed(ch)", "closed(ch)"],
        "options_hi": ["value, ok := <-ch", "ch.closed()", "isClosed(ch)", "closed(ch)"],
        "answer_en": "value, ok := <-ch",
        "answer_hi": "value, ok := <-ch",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'sync.WaitGroup'?",
        "question_hi": "'sync.WaitGroup' का उद्देश्य क्या है?",
        "options_en": ["Wait for goroutines to finish", "Synchronize goroutines", "Group goroutines", "Manage goroutine pools"],
        "options_hi": ["गोरूटीन के खत्म होने का इंतज़ार करना", "गोरूटीन सिंक्रोनाइज़ करना", "गोरूटीन ग्रुप करना", "गोरूटीन पूल मैनेज करना"],
        "answer_en": "Wait for goroutines to finish",
        "answer_hi": "गोरूटीन के खत्म होने का इंतज़ार करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you use a WaitGroup?",
        "question_hi": "WaitGroup का उपयोग कैसे करते हैं?",
        "options_en": ["wg.Add(1), defer wg.Done(), wg.Wait()", "wg.Start(), wg.Finish(), wg.Wait()", "wg.Begin(), wg.End(), wg.Wait()", "wg.New(), wg.Complete(), wg.Wait()"],
        "options_hi": ["wg.Add(1), defer wg.Done(), wg.Wait()", "wg.Start(), wg.Finish(), wg.Wait()", "wg.Begin(), wg.End(), wg.Wait()", "wg.New(), wg.Complete(), wg.Wait()"],
        "answer_en": "wg.Add(1), defer wg.Done(), wg.Wait()",
        "answer_hi": "wg.Add(1), defer wg.Done(), wg.Wait()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'sync.Mutex'?",
        "question_hi": "'sync.Mutex' का उद्देश्य क्या है?",
        "options_en": ["Provide mutual exclusion", "Synchronize access", "Lock resources", "Prevent race conditions"],
        "options_hi": ["म्यूचुअल एक्सक्लूजन प्रदान करना", "एक्सेस सिंक्रोनाइज़ करना", "रिसोर्स लॉक करना", "रेस कंडीशन रोकना"],
        "answer_en": "Provide mutual exclusion",
        "answer_hi": "म्यूचुअल एक्सक्लूजन प्रदान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you use a Mutex?",
        "question_hi": "Mutex का उपयोग कैसे करते हैं?",
        "options_en": ["mu.Lock() and defer mu.Unlock()", "mu.Acquire() and mu.Release()", "mu.Begin() and mu.End()", "mu.Start() and mu.Stop()"],
        "options_hi": ["mu.Lock() और defer mu.Unlock()", "mu.Acquire() और mu.Release()", "mu.Begin() और mu.End()", "mu.Start() और mu.Stop()"],
        "answer_en": "mu.Lock() and defer mu.Unlock()",
        "answer_hi": "mu.Lock() और defer mu.Unlock()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is a race condition in Go?",
        "question_hi": "Go में रेस कंडीशन क्या है?",
        "options_en": ["When multiple goroutines access shared data concurrently", "Goroutine competition", "Channel deadlock", "Memory corruption"],
        "options_hi": ["जब मल्टीपल गोरूटीन शेयर्ड डेटा को कंकरंटली एक्सेस करती हैं", "गोरूटीन कॉम्पिटिशन", "चैनल डेडलॉक", "मेमोरी करप्शन"],
        "answer_en": "When multiple goroutines access shared data concurrently",
        "answer_hi": "जब मल्टीपल गोरूटीन शेयर्ड डेटा को कंकरंटली एक्सेस करती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you detect race conditions in Go?",
        "question_hi": "Go में रेस कंडीशन कैसे डिटेक्ट करते हैं?",
        "options_en": ["go run -race", "go test -race", "go build -race", "All of the above"],
        "options_hi": ["go run -race", "go test -race", "go build -race", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'context.WithTimeout'?",
        "question_hi": "'context.WithTimeout' का उद्देश्य क्या है?",
        "options_en": ["Create context with timeout", "Set execution deadline", "Timeout operations", "Cancel after duration"],
        "options_hi": ["टाइमआउट के साथ कॉन्टेक्स्ट बनाना", "एक्जिक्यूशन डेडलाइन सेट करना", "टाइमआउट ऑपरेशन", "ड्यूरेशन के बाद कैंसल करना"],
        "answer_en": "Create context with timeout",
        "answer_hi": "टाइमआउट के साथ कॉन्टेक्स्ट बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you create an HTTP server in Go?",
        "question_hi": "Go में HTTP सर्वर कैसे बनाते हैं?",
        "options_en": ["http.ListenAndServe()", "server.New()", "http.Server{}", "net.ListenHTTP()"],
        "options_hi": ["http.ListenAndServe()", "server.New()", "http.Server{}", "net.ListenHTTP()"],
        "answer_en": "http.ListenAndServe()",
        "answer_hi": "http.ListenAndServe()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'http.HandlerFunc'?",
        "question_hi": "'http.HandlerFunc' का उद्देश्य क्या है?",
        "options_en": ["Convert function to HTTP handler", "Define HTTP handlers", "Function handler type", "Route handlers"],
        "options_hi": ["फंक्शन को HTTP हैंडलर में कन्वर्ट करना", "HTTP हैंडलर डिफाइन करना", "फंक्शन हैंडलर टाइप", "रूट हैंडलर"],
        "answer_en": "Convert function to HTTP handler",
        "answer_hi": "फंक्शन को HTTP हैंडलर में कन्वर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you read the request body in an HTTP handler?",
        "question_hi": "HTTP हैंडलर में रिक्वेस्ट बॉडी कैसे पढ़ते हैं?",
        "options_en": ["io.ReadAll(r.Body)", "r.Body.Read()", "ioutil.ReadAll(r.Body)", "Both io.ReadAll(r.Body) and ioutil.ReadAll(r.Body)"],
        "options_hi": ["io.ReadAll(r.Body)", "r.Body.Read()", "ioutil.ReadAll(r.Body)", "io.ReadAll(r.Body) और ioutil.ReadAll(r.Body) दोनों"],
        "answer_en": "Both io.ReadAll(r.Body) and ioutil.ReadAll(r.Body)",
        "answer_hi": "io.ReadAll(r.Body) और ioutil.ReadAll(r.Body) दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of JSON tags in struct fields?",
        "question_hi": "स्ट्रक्चर फील्ड में JSON टैग का उद्देश्य क्या है?",
        "options_en": ["Control JSON marshaling/unmarshaling", "Add metadata", "Validation", "Documentation"],
        "options_hi": ["JSON मार्शलिंग/अनमार्शलिंग कंट्रोल करना", "मेटाडेटा ऐड करना", "वैलिडेशन", "डॉक्युमेंटेशन"],
        "answer_en": "Control JSON marshaling/unmarshaling",
        "answer_hi": "JSON मार्शलिंग/अनमार्शलिंग कंट्रोल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you ignore a field in JSON marshaling?",
        "question_hi": "JSON मार्शलिंग में फील्ड को कैसे इग्नोर करते हैं?",
        "options_en": ["Use `json:\"-\"` tag", "Make field private", "Use omitempty", "Skip during marshaling"],
        "options_hi": ["`json:\"-\"` टैग का उपयोग करें", "फील्ड को प्राइवेट बनाएं", "omitempty का उपयोग करें", "मार्शलिंग के दौरान स्किप करें"],
        "answer_en": "Use `json:\"-\"` tag",
        "answer_hi": "`json:\"-\"` टैग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'time.Ticker'?",
        "question_hi": "'time.Ticker' का उद्देश्य क्या है?",
        "options_en": ["Send time at regular intervals", "Timer for one-time events", "Schedule tasks", "Time measurement"],
        "options_hi": ["नियमित अंतराल पर टाइम भेजना", "वन-टाइम इवेंट के लिए टाइमर", "टास्क शेड्यूल करना", "टाइम माप"],
        "answer_en": "Send time at regular intervals",
        "answer_hi": "नियमित अंतराल पर टाइम भेजना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you parse a time string in Go?",
        "question_hi": "Go में टाइम स्ट्रिंग कैसे पार्स करते हैं?",
        "options_en": ["time.Parse(layout, value)", "time.ParseTime(value)", "time.FromString(value)", "ParseTime(value)"],
        "options_hi": ["time.Parse(layout, value)", "time.ParseTime(value)", "time.FromString(value)", "ParseTime(value)"],
        "answer_en": "time.Parse(layout, value)",
        "answer_hi": "time.Parse(layout, value)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'os/exec' package?",
        "question_hi": "'os/exec' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Execute external commands", "Process management", "System commands", "Command execution"],
        "options_hi": ["एक्सटर्नल कमांड एक्जिक्यूट करना", "प्रोसेस मैनेजमेंट", "सिस्टम कमांड", "कमांड एक्जिक्यूशन"],
        "answer_en": "Execute external commands",
        "answer_hi": "एक्सटर्नल कमांड एक्जिक्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you execute a system command in Go?",
        "question_hi": "Go में सिस्टम कमांड कैसे एक्जिक्यूट करते हैं?",
        "options_en": ["exec.Command(name, args...)", "os.Exec(command)", "system.Exec(command)", "Command.Run()"],
        "options_hi": ["exec.Command(name, args...)", "os.Exec(command)", "system.Exec(command)", "Command.Run()"],
        "answer_en": "exec.Command(name, args...)",
        "answer_hi": "exec.Command(name, args...)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'path/filepath' package?",
        "question_hi": "'path/filepath' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Manipulate filename paths", "File operations", "Path utilities", "Cross-platform path handling"],
        "options_hi": ["फाइलनेम पाथ मैनिपुलेट करना", "फाइल ऑपरेशन", "पाथ यूटिलिटी", "क्रॉस-प्लेटफॉर्म पाथ हैंडलिंग"],
        "answer_en": "Manipulate filename paths",
        "answer_hi": "फाइलनेम पाथ मैनिपुलेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you get the current working directory?",
        "question_hi": "करंट वर्किंग डायरेक्टरी कैसे प्राप्त करते हैं?",
        "options_en": ["os.Getwd()", "os.Cwd()", "filepath.Cwd()", "GetCurrentDirectory()"],
        "options_hi": ["os.Getwd()", "os.Cwd()", "filepath.Cwd()", "GetCurrentDirectory()"],
        "answer_en": "os.Getwd()",
        "answer_hi": "os.Getwd()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'io/ioutil' package?",
        "question_hi": "'io/ioutil' पैकेज का उद्देश्य क्या है?",
        "options_en": ["I/O utility functions", "File operations", "Input/output helpers", "All of the above"],
        "options_hi": ["I/O यूटिलिटी फंक्शन", "फाइल ऑपरेशन", "इनपुट/आउटपुट हेल्पर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you read a file line by line?",
        "question_hi": "फाइल को लाइन बाय लाइन कैसे पढ़ते हैं?",
        "options_en": ["bufio.Scanner", "ioutil.ReadFile()", "os.ReadFile()", "file.ReadLine()"],
        "options_hi": ["bufio.Scanner", "ioutil.ReadFile()", "os.ReadFile()", "file.ReadLine()"],
        "answer_en": "bufio.Scanner",
        "answer_hi": "bufio.Scanner",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'crypto/rand' package?",
        "question_hi": "'crypto/rand' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Cryptographically secure random numbers", "Random number generation", "Secure randomness", "All of the above"],
        "options_hi": ["क्रिप्टोग्राफिकली सिक्योर रैंडम नंबर", "रैंडम नंबर जनरेशन", "सिक्योर रैंडमनेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you generate a random number in Go?",
        "question_hi": "Go में रैंडम नंबर कैसे जनरेट करते हैं?",
        "options_en": ["rand.Intn(n)", "math/rand package", "crypto/rand package", "All of the above"],
        "options_hi": ["rand.Intn(n)", "math/rand पैकेज", "crypto/rand पैकेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'go mod init' command?",
        "question_hi": "'go mod init' कमांड का उद्देश्य क्या है?",
        "options_en": ["Initialize new module", "Create go.mod file", "Start new project", "All of the above"],
        "options_hi": ["नया मॉड्यूल इनिशियलाइज़ करना", "go.mod फाइल बनाना", "नया प्रोजेक्ट शुरू करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you add a dependency in Go modules?",
        "question_hi": "Go मॉड्यूल में डिपेंडेंसी कैसे ऐड करते हैं?",
        "options_en": ["go get package", "go mod require", "Edit go.mod directly", "All of the above"],
        "options_hi": ["go get package", "go mod require", "go.mod डायरेक्टली एडिट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'testing.T' type?",
        "question_hi": "'testing.T' टाइप का उद्देश्य क्या है?",
        "options_en": ["Test state and operations", "Test context", "Test runner", "Test management"],
        "options_hi": ["टेस्ट स्टेट और ऑपरेशन", "टेस्ट कॉन्टेक्स्ट", "टेस्ट रनर", "टेस्ट मैनेजमेंट"],
        "answer_en": "Test state and operations",
        "answer_hi": "टेस्ट स्टेट और ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you write a unit test in Go?",
        "question_hi": "Go में यूनिट टेस्ट कैसे लिखते हैं?",
        "options_en": ["func TestXxx(*testing.T)", "func test_xxx()", "func Test()", "func UnitTest()"],
        "options_hi": ["func TestXxx(*testing.T)", "func test_xxx()", "func Test()", "func UnitTest()"],
        "answer_en": "func TestXxx(*testing.T)",
        "answer_hi": "func TestXxx(*testing.T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'reflect.TypeOf' function?",
        "question_hi": "'reflect.TypeOf' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get type of value at runtime", "Type reflection", "Dynamic typing", "Type information"],
        "options_hi": ["रनटाइम पर वैल्यू का टाइप प्राप्त करना", "टाइप रिफ्लेक्शन", "डायनामिक टाइपिंग", "टाइप इनफार्मेशन"],
        "answer_en": "Get type of value at runtime",
        "answer_hi": "रनटाइम पर वैल्यू का टाइप प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you get the underlying type of an interface?",
        "question_hi": "इंटरफेस के अंडरलाइंग टाइप कैसे प्राप्त करते हैं?",
        "options_en": ["reflect.TypeOf(value).Elem()", "value.Type()", "reflect.UnderlyingType()", "TypeOf(value).Underlying()"],
        "options_hi": ["reflect.TypeOf(value).Elem()", "value.Type()", "reflect.UnderlyingType()", "TypeOf(value).Underlying()"],
        "answer_en": "reflect.TypeOf(value).Elem()",
        "answer_hi": "reflect.TypeOf(value).Elem()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'unsafe.Pointer'?",
        "question_hi": "'unsafe.Pointer' का उद्देश्य क्या है?",
        "options_en": ["Convert between pointer types", "Low-level pointer operations", "Memory manipulation", "All of the above"],
        "options_hi": ["पॉइंटर टाइप के बीच कन्वर्ट करना", "लो-लेवल पॉइंटर ऑपरेशन", "मेमोरी मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you convert a string to a byte slice?",
        "question_hi": "स्ट्रिंग को बाइट स्लाइस में कैसे कन्वर्ट करते हैं?",
        "options_en": ["[]byte(string)", "byte[](string)", "string.Bytes()", "Bytes(string)"],
        "options_hi": ["[]byte(string)", "byte[](string)", "string.Bytes()", "Bytes(string)"],
        "answer_en": "[]byte(string)",
        "answer_hi": "[]byte(string)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'strings.Builder'?",
        "question_hi": "'strings.Builder' का उद्देश्य क्या है?",
        "options_en": ["Efficient string building", "String concatenation", "Mutable string operations", "All of the above"],
        "options_hi": ["एफिशिएंट स्ट्रिंग बिल्डिंग", "स्ट्रिंग कॉन्कैटनेशन", "म्यूटेबल स्ट्रिंग ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you efficiently build a string from multiple parts?",
        "question_hi": "मल्टीपल पार्ट से एफिशिएंटली स्ट्रिंग कैसे बनाते हैं?",
        "options_en": ["strings.Builder", "bytes.Buffer", "fmt.Sprintf", "All of the above"],
        "options_hi": ["strings.Builder", "bytes.Buffer", "fmt.Sprintf", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'sort.Slice' function?",
        "question_hi": "'sort.Slice' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Sort slices with custom less function", "Generic slice sorting", "Inline slice sorting", "All of the above"],
        "options_hi": ["कस्टम लेस फंक्शन के साथ स्लाइस सॉर्ट करना", "जेनरिक स्लाइस सॉर्टिंग", "इनलाइन स्लाइस सॉर्टिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you sort a custom struct slice?",
        "question_hi": "कस्टम स्ट्रक्चर स्लाइस कैसे सॉर्ट करते हैं?",
        "options_en": ["sort.Slice with less function", "Implement sort.Interface", "Both A and B", "Use sort.Struct"],
        "options_hi": ["लेस फंक्शन के साथ sort.Slice", "sort.Interface इम्प्लीमेंट करें", "A और B दोनों", "sort.Struct का उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'encoding/csv' package?",
        "question_hi": "'encoding/csv' पैकेज का उद्देश्य क्या है?",
        "options_en": ["CSV reading and writing", "Comma-separated values", "Tabular data handling", "All of the above"],
        "options_hi": ["CSV रीडिंग और राइटिंग", "कॉमा-सेपरेटेड वैल्यू", "टेबुलर डेटा हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you read CSV data in Go?",
        "question_hi": "Go में CSV डेटा कैसे पढ़ते हैं?",
        "options_en": ["csv.NewReader()", "encoding/csv package", "ReadCSV function", "Both A and B"],
        "options_hi": ["csv.NewReader()", "encoding/csv पैकेज", "ReadCSV फंक्शन", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'compress/flate' package?",
        "question_hi": "'compress/flate' पैकेज का उद्देश्य क्या है?",
        "options_en": ["DEFLATE compression", "ZIP compression algorithm", "Data compression", "All of the above"],
        "options_hi": ["DEFLATE कम्प्रेशन", "ZIP कम्प्रेशन अल्गोरिदम", "डेटा कम्प्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you compress data in Go?",
        "question_hi": "Go में डेटा कैसे कम्प्रेस करते हैं?",
        "options_en": ["compress/gzip", "compress/flate", "compress/zlib", "All of the above"],
        "options_hi": ["compress/gzip", "compress/flate", "compress/zlib", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'image' package?",
        "question_hi": "'image' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Image manipulation", "Image decoding/encoding", "Image processing", "All of the above"],
        "options_hi": ["इमेज मैनिपुलेशन", "इमेज डिकोडिंग/एन्कोडिंग", "इमेज प्रोसेसिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you decode an image in Go?",
        "question_hi": "Go में इमेज कैसे डिकोड करते हैं?",
        "options_en": ["image.Decode()", "Specific format decoders", "Both A and B", "image.Parse()"],
        "options_hi": ["image.Decode()", "स्पेसिफिक फॉर्मेट डिकोडर", "A और B दोनों", "image.Parse()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'html/template' package?",
        "question_hi": "'html/template' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Safe HTML template execution", "HTML generation", "Web template rendering", "All of the above"],
        "options_hi": ["सेफ HTML टेम्पलेट एक्जिक्यूशन", "HTML जनरेशन", "वेब टेम्पलेट रेंडरिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you prevent XSS in Go templates?",
        "question_hi": "Go टेम्पलेट में XSS कैसे प्रिवेंट करते हैं?",
        "options_en": ["Use html/template instead of text/template", "Auto-escaping", "Context-aware escaping", "All of the above"],
        "options_hi": ["text/template के बजाय html/template का उपयोग करें", "ऑटो-एस्केपिंग", "कॉन्टेक्स्ट-अवेयर एस्केपिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'database/sql' package?",
        "question_hi": "'database/sql' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Generic SQL database interface", "Database operations", "SQL query execution", "All of the above"],
        "options_hi": ["जेनरिक SQL डेटाबेस इंटरफेस", "डेटाबेस ऑपरेशन", "SQL क्वेरी एक्जिक्यूशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you query a database in Go?",
        "question_hi": "Go में डेटाबेस क्वेरी कैसे करते हैं?",
        "options_en": ["db.Query()", "db.QueryRow()", "db.Exec()", "All of the above"],
        "options_hi": ["db.Query()", "db.QueryRow()", "db.Exec()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'context' in database operations?",
        "question_hi": "डेटाबेस ऑपरेशन में 'context' का उद्देश्य क्या है?",
        "options_en": ["Cancellation and timeout", "Request-scoped values", "Both A and B", "Connection management"],
        "options_hi": ["कैंसलेशन और टाइमआउट", "रिक्वेस्ट-स्कोप्ड वैल्यू", "A और B दोनों", "कनेक्शन मैनेजमेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you handle transactions in Go?",
        "question_hi": "Go में ट्रांजैक्शन कैसे हैंडल करते हैं?",
        "options_en": ["db.Begin()", "Transaction block", "With context support", "All of the above"],
        "options_hi": ["db.Begin()", "ट्रांजैक्शन ब्लॉक", "कॉन्टेक्स्ट सपोर्ट के साथ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'log' package?",
        "question_hi": "'log' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Logging utilities", "Message logging", "Log output control", "All of the above"],
        "options_hi": ["लॉगिंग यूटिलिटी", "मैसेज लॉगिंग", "लॉग आउटपुट कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you create a custom logger in Go?",
        "question_hi": "Go में कस्टम लॉगर कैसे बनाते हैं?",
        "options_en": ["log.New()", "Custom log.Logger", "Set output and flags", "All of the above"],
        "options_hi": ["log.New()", "कस्टम log.Logger", "आउटपुट और फ्लैग सेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'runtime' package?",
        "question_hi": "'runtime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Go runtime interaction", "GC control", "Goroutine management", "All of the above"],
        "options_hi": ["Go रनटाइम इंटरैक्शन", "GC कंट्रोल", "गोरूटीन मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you get the number of CPUs in Go?",
        "question_hi": "Go में CPU की संख्या कैसे प्राप्त करते हैं?",
        "options_en": ["runtime.NumCPU()", "os.CpuCount()", "runtime.CPUs()", "GetCPUCount()"],
        "options_hi": ["runtime.NumCPU()", "os.CpuCount()", "runtime.CPUs()", "GetCPUCount()"],
        "answer_en": "runtime.NumCPU()",
        "answer_hi": "runtime.NumCPU()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'go/ast' package?",
        "question_hi": "'go/ast' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Abstract syntax tree for Go", "Code analysis", "Source code parsing", "All of the above"],
        "options_hi": ["Go के लिए एब्स्ट्रैक्ट सिंटैक्स ट्री", "कोड एनालिसिस", "सोर्स कोड पार्सिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you parse Go source code into AST?",
        "question_hi": "Go सोर्स कोड को AST में कैसे पार्स करते हैं?",
        "options_en": ["go/parser package", "parser.ParseFile()", "ast.Parse()", "Both A and B"],
        "options_hi": ["go/parser पैकेज", "parser.ParseFile()", "ast.Parse()", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'net/http/httptest' package?",
        "question_hi": "'net/http/httptest' पैकेज का उद्देश्य क्या है?",
        "options_en": ["HTTP testing utilities", "Mock HTTP server", "Test HTTP handlers", "All of the above"],
        "options_hi": ["HTTP टेस्टिंग यूटिलिटी", "मॉक HTTP सर्वर", "टेस्ट HTTP हैंडलर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you test HTTP handlers in Go?",
        "question_hi": "Go में HTTP हैंडलर कैसे टेस्ट करते हैं?",
        "options_en": ["httptest.NewRecorder()", "httptest.NewServer()", "Both A and B", "http.TestHandler()"],
        "options_hi": ["httptest.NewRecorder()", "httptest.NewServer()", "A और B दोनों", "http.TestHandler()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'io' package?",
        "question_hi": "'io' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Basic I/O interfaces", "Reader/Writer interfaces", "I/O utilities", "All of the above"],
        "options_hi": ["बेसिक I/O इंटरफेस", "रीडर/राइटर इंटरफेस", "I/O यूटिलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the io.Reader interface?",
        "question_hi": "io.Reader इंटरफेस क्या है?",
        "options_en": ["Interface for reading data", "Read method", "Input stream", "All of the above"],
        "options_hi": ["डेटा रीडिंग के लिए इंटरफेस", "रीड मेथड", "इनपुट स्ट्रीम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'bytes' package?",
        "question_hi": "'bytes' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Byte slice manipulation", "Byte operations", "Buffer implementation", "All of the above"],
        "options_hi": ["बाइट स्लाइस मैनिपुलेशन", "बाइट ऑपरेशन", "बफर इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you convert a byte slice to string?",
        "question_hi": "बाइट स्लाइस को स्ट्रिंग में कैसे कन्वर्ट करते हैं?",
        "options_en": ["string(byteSlice)", "bytes.ToString()", "fmt.Sprintf(\"%s\", byteSlice)", "All of the above"],
        "options_hi": ["string(byteSlice)", "bytes.ToString()", "fmt.Sprintf(\"%s\", byteSlice)", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'unicode' package?",
        "question_hi": "'unicode' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Unicode character utilities", "Character classification", "Unicode properties", "All of the above"],
        "options_hi": ["यूनिकोड कैरेक्टर यूटिलिटी", "कैरेक्टर क्लासिफिकेशन", "यूनिकोड प्रॉपर्टी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you check if a rune is a letter?",
        "question_hi": "रून लेटर है या नहीं, यह कैसे चेक करते हैं?",
        "options_en": ["unicode.IsLetter(r)", "r.IsLetter()", "IsLetter(r)", "Letter(r)"],
        "options_hi": ["unicode.IsLetter(r)", "r.IsLetter()", "IsLetter(r)", "Letter(r)"],
        "answer_en": "unicode.IsLetter(r)",
        "answer_hi": "unicode.IsLetter(r)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'flag' package?",
        "question_hi": "'flag' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Command-line flag parsing", "Argument handling", "Option parsing", "All of the above"],
        "options_hi": ["कमांड-लाइन फ्लैग पार्सिंग", "आर्गुमेंट हैंडलिंग", "ऑप्शन पार्सिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you define a string flag in Go?",
        "question_hi": "Go में स्ट्रिंग फ्लैग कैसे डिफाइन करते हैं?",
        "options_en": ["flag.String()", "flag.StringVar()", "Both A and B", "flag.Str()"],
        "options_hi": ["flag.String()", "flag.StringVar()", "A और B दोनों", "flag.Str()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'expvar' package?",
        "question_hi": "'expvar' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Expose public variables via HTTP", "Metrics export", "Runtime variables", "All of the above"],
        "options_hi": ["HTTP के माध्यम से पब्लिक वेरिएबल एक्सपोज करना", "मेट्रिक्स एक्सपोर्ट", "रनटाइम वेरिएबल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you expose metrics via HTTP in Go?",
        "question_hi": "Go में HTTP के माध्यम से मेट्रिक्स कैसे एक्सपोज करते हैं?",
        "options_en": ["expvar package", "Custom HTTP handler", "Metrics endpoint", "All of the above"],
        "options_hi": ["expvar पैकेज", "कस्टम HTTP हैंडलर", "मेट्रिक्स एंडपॉइंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'runtime/pprof' package?",
        "question_hi": "'runtime/pprof' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Profiling support", "CPU and memory profiling", "Performance analysis", "All of the above"],
        "options_hi": ["प्रोफाइलिंग सपोर्ट", "CPU और मेमोरी प्रोफाइलिंग", "परफॉर्मेंस एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you profile a Go application?",
        "question_hi": "Go एप्लिकेशन की प्रोफाइलिंग कैसे करते हैं?",
        "options_en": ["go test -cpuprofile", "runtime/pprof package", "net/http/pprof package", "All of the above"],
        "options_hi": ["go test -cpuprofile", "runtime/pprof पैकेज", "net/http/pprof पैकेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'sync/atomic' package?",
        "question_hi": "'sync/atomic' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Atomic operations", "Low-level synchronization", "Thread-safe operations", "All of the above"],
        "options_hi": ["एटॉमिक ऑपरेशन", "लो-लेवल सिंक्रोनाइज़ेशन", "थ्रेड-सेफ ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you perform atomic operations in Go?",
        "question_hi": "Go में एटॉमिक ऑपरेशन कैसे करते हैं?",
        "options_en": ["atomic.AddInt32()", "atomic.CompareAndSwap()", "atomic.Load()", "All of the above"],
        "options_hi": ["atomic.AddInt32()", "atomic.CompareAndSwap()", "atomic.Load()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'go/token' package?",
        "question_hi": "'go/token' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Represent Go source tokens", "Lexical analysis", "Token constants", "All of the above"],
        "options_hi": ["Go सोर्स टोकन रिप्रेजेंट करना", "लेक्सिकल एनालिसिस", "टोकन कॉन्स्टेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the purpose of the 'text/template' package?",
        "question_hi": "'text/template' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Text template execution", "Template-based text generation", "Data-driven templates", "All of the above"],
        "options_hi": ["टेक्स्ट टेम्पलेट एक्जिक्यूशन", "टेम्पलेट-बेस्ड टेक्स्ट जनरेशन", "डेटा-ड्रिवन टेम्पलेट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you execute a text template in Go?",
        "question_hi": "Go में टेक्स्ट टेम्पलेट कैसे एक्जिक्यूट करते हैं?",
        "options_en": ["template.Execute()", "template.ExecuteTemplate()", "Both A and B", "template.Render()"],
        "options_hi": ["template.Execute()", "template.ExecuteTemplate()", "A और B दोनों", "template.Render()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of the 'container' package?",
        "question_hi": "'container' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Container data structures", "List, heap, ring implementations", "Data containers", "All of the above"],
        "options_hi": ["कंटेनर डेटा स्ट्रक्चर", "लिस्ट, हीप, रिंग इम्प्लीमेंटेशन", "डेटा कंटेनर", "उपरोक्त सभी"],
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