const questions=[
     {
        "num": 1,
        "question_en": "What is race detector in Go?",
        "question_hi": "Go में रेस डिटेक्टर क्या है?",
        "options_en": ["Tool for detecting race conditions", "Speed measurement tool", "Competition detector", "Performance tool"],
        "options_hi": ["रेस कंडीशन डिटेक्ट करने का टूल", "स्पीड मेजरमेंट टूल", "कॉम्पिटिशन डिटेक्टर", "परफॉर्मेंस टूल"],
        "answer_en": "Tool for detecting race conditions",
        "answer_hi": "रेस कंडीशन डिटेक्ट करने का टूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword is used to import packages in Go?",
        "question_hi": "Go में पैकेज इम्पोर्ट करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["import", "include", "require", "package"],
        "options_hi": ["import", "include", "require", "package"],
        "answer_en": "import",
        "answer_hi": "import",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the zero value for a string in Go?",
        "question_hi": "Go में स्ट्रिंग का जीरो वैल्यू क्या है?",
        "options_en": ["Empty string", "nil", "null", "undefined"],
        "options_hi": ["खाली स्ट्रिंग", "nil", "null", "अनडिफाइंड"],
        "answer_en": "Empty string",
        "answer_hi": "खाली स्ट्रिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you declare a variable without initializing it?",
        "question_hi": "बिना इनिशियलाइज़ किए वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["var name type", "name := type", "variable name type", "let name type"],
        "options_hi": ["var name type", "name := type", "variable name type", "let name type"],
        "answer_en": "var name type",
        "answer_hi": "var name type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the short variable declaration operator?",
        "question_hi": "शॉर्ट वेरिएबल डिक्लेरेशन ऑपरेटर क्या है?",
        "options_en": [":=", "=", "=>", "::"],
        "options_hi": [":=", "=", "=>", "::"],
        "answer_en": ":=",
        "answer_hi": ":=",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which type is used to represent Unicode characters in Go?",
        "question_hi": "Go में यूनिकोड करैक्टर रिप्रेजेंट करने के लिए किस टाइप का उपयोग किया जाता है?",
        "options_en": ["rune", "char", "string", "byte"],
        "options_hi": ["rune", "char", "string", "byte"],
        "answer_en": "rune",
        "answer_hi": "rune",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the default value of a bool type?",
        "question_hi": "bool टाइप का डिफॉल्ट वैल्यू क्या है?",
        "options_en": ["false", "true", "0", "nil"],
        "options_hi": ["false", "true", "0", "nil"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you create a pointer in Go?",
        "question_hi": "Go में पॉइंटर कैसे बनाते हैं?",
        "options_en": ["& operator", "* operator", "new() function", "ptr keyword"],
        "options_hi": ["& ऑपरेटर", "* ऑपरेटर", "new() फंक्शन", "ptr कीवर्ड"],
        "answer_en": "& operator",
        "answer_hi": "& ऑपरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'new' function?",
        "question_hi": "'new' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Allocates memory and returns pointer", "Creates new variable", "Initializes values", "Creates objects"],
        "options_hi": ["मेमोरी अलोकेट करता है और पॉइंटर रिटर्न करता है", "नया वेरिएबल बनाता है", "वैल्यू इनिशियलाइज़ करता है", "ऑब्जेक्ट बनाता है"],
        "answer_en": "Allocates memory and returns pointer",
        "answer_hi": "मेमोरी अलोकेट करता है और पॉइंटर रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which loop structure does Go support?",
        "question_hi": "Go कौन सा लूप स्ट्रक्चर सपोर्ट करता है?",
        "options_en": ["Only for loop", "for and while", "for, while, do-while", "Only while loop"],
        "options_hi": ["केवल for लूप", "for और while", "for, while, do-while", "केवल while लूप"],
        "answer_en": "Only for loop",
        "answer_hi": "केवल for लूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you write an infinite loop in Go?",
        "question_hi": "Go में इनफिनाइट लूप कैसे लिखते हैं?",
        "options_en": ["for {}", "while true", "loop {}", "forever {}"],
        "options_hi": ["for {}", "while true", "loop {}", "forever {}"],
        "answer_en": "for {}",
        "answer_hi": "for {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of the 'break' statement?",
        "question_hi": "'break' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Exit current loop or switch", "Stop program", "Skip iteration", "Pause execution"],
        "options_hi": ["करंट लूप या स्विच से बाहर निकलें", "प्रोग्राम रोकें", "इटरेशन स्किप करें", "एक्जिक्यूशन पॉज करें"],
        "answer_en": "Exit current loop or switch",
        "answer_hi": "करंट लूप या स्विच से बाहर निकलें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you skip to the next iteration in a loop?",
        "question_hi": "लूप में अगले इटरेशन पर कैसे जाएं?",
        "options_en": ["continue", "skip", "next", "break"],
        "options_hi": ["continue", "skip", "next", "break"],
        "answer_en": "continue",
        "answer_hi": "continue",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the syntax of a switch statement in Go?",
        "question_hi": "Go में स्विच स्टेटमेंट का सिंटैक्स क्या है?",
        "options_en": ["switch expression { case ... }", "switch (expression) { case ... }", "match expression { case ... }", "case expression { when ... }"],
        "options_hi": ["switch expression { case ... }", "switch (expression) { case ... }", "match expression { case ... }", "case expression { when ... }"],
        "answer_en": "switch expression { case ... }",
        "answer_hi": "switch expression { case ... }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How do you define a function in Go?",
        "question_hi": "Go में फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["func name(parameters) returnType {}", "function name(parameters) {}", "def name(parameters):", "fn name(parameters) -> returnType {}"],
        "options_hi": ["func name(parameters) returnType {}", "function name(parameters) {}", "def name(parameters):", "fn name(parameters) -> returnType {}"],
        "answer_en": "func name(parameters) returnType {}",
        "answer_hi": "func name(parameters) returnType {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is a variadic function?",
        "question_hi": "वेरिएडिक फंक्शन क्या है?",
        "options_en": ["Function that takes variable number of arguments", "Function with varying return types", "Function that can change", "Dynamic function"],
        "options_hi": ["वेरिएबल नंबर ऑफ आर्गुमेंट लेने वाला फंक्शन", "वेरिंग रिटर्न टाइप वाला फंक्शन", "चेंज हो सकने वाला फंक्शन", "डायनामिक फंक्शन"],
        "answer_en": "Function that takes variable number of arguments",
        "answer_hi": "वेरिएबल नंबर ऑफ आर्गुमेंट लेने वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 17,
        "question_en": "What is race detector in Go?",
        "question_hi": "Go में रेस डिटेक्टर क्या है?",
        "options_en": ["Tool for detecting race conditions", "Speed measurement tool", "Competition detector", "Performance tool"],
        "options_hi": ["रेस कंडीशन डिटेक्ट करने का टूल", "स्पीड मेजरमेंट टूल", "कॉम्पिटिशन डिटेक्टर", "परफॉर्मेंस टूल"],
        "answer_en": "Tool for detecting race conditions",
        "answer_hi": "रेस कंडीशन डिटेक्ट करने का टूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is a closure in Go?",
        "question_hi": "Go में क्लोजर क्या है?",
        "options_en": ["Function that references variables from outside its body", "Closed function", "Private function", "Anonymous function"],
        "options_hi": ["अपने बॉडी के बाहर के वेरिएबल को रिफरेन्स करने वाला फंक्शन", "क्लोज्ड फंक्शन", "प्राइवेट फंक्शन", "अनाम फंक्शन"],
        "answer_en": "Function that references variables from outside its body",
        "answer_hi": "अपने बॉडी के बाहर के वेरिएबल को रिफरेन्स करने वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How do you define an anonymous function?",
        "question_hi": "अनाम फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["func() {}", "function() {}", "anon() {}", "lambda() {}"],
        "options_hi": ["func() {}", "function() {}", "anon() {}", "lambda() {}"],
        "answer_en": "func() {}",
        "answer_hi": "func() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is method receiver in Go?",
        "question_hi": "Go में मेथड रिसीवर क्या है?",
        "options_en": ["Parameter that binds method to type", "Function that receives data", "Method parameter", "Return value"],
        "options_hi": ["पैरामीटर जो मेथड को टाइप से बाइंड करता है", "डेटा रिसीव करने वाला फंक्शन", "मेथड पैरामीटर", "रिटर्न वैल्यू"],
        "answer_en": "Parameter that binds method to type",
        "answer_hi": "पैरामीटर जो मेथड को टाइप से बाइंड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What are the two types of method receivers?",
        "question_hi": "मेथड रिसीवर के दो प्रकार क्या हैं?",
        "options_en": ["Value receiver and pointer receiver", "Static and dynamic", "Public and private", "Direct and indirect"],
        "options_hi": ["वैल्यू रिसीवर और पॉइंटर रिसीवर", "स्टैटिक और डायनामिक", "पब्लिक और प्राइवेट", "डायरेक्ट और इनडायरेक्ट"],
        "answer_en": "Value receiver and pointer receiver",
        "answer_hi": "वैल्यू रिसीवर और पॉइंटर रिसीवर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you define an interface in Go?",
        "question_hi": "Go में इंटरफेस कैसे डिफाइन करते हैं?",
        "options_en": ["type Name interface { methods }", "interface Name { methods }", "struct Name interface { methods }", "def interface Name { methods }"],
        "options_hi": ["type Name interface { methods }", "interface Name { methods }", "struct Name interface { methods }", "def interface Name { methods }"],
        "answer_en": "type Name interface { methods }",
        "answer_hi": "type Name interface { methods }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is duck typing in Go?",
        "question_hi": "Go में डक टाइपिंग क्या है?",
        "options_en": ["Implicit interface implementation", "Explicit typing", "Dynamic typing", "Type inference"],
        "options_hi": ["इम्प्लिसिट इंटरफेस इम्प्लीमेंटेशन", "एक्सप्लिसिट टाइपिंग", "डायनामिक टाइपिंग", "टाइप इनफरेंस"],
        "answer_en": "Implicit interface implementation",
        "answer_hi": "इम्प्लिसिट इंटरफेस इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the empty interface?",
        "question_hi": "एम्प्टी इंटरफेस क्या है?",
        "options_en": ["interface{}", "empty{}", "any{}", "void{}"],
        "options_hi": ["interface{}", "empty{}", "any{}", "void{}"],
        "answer_en": "interface{}",
        "answer_hi": "interface{}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you perform type assertion?",
        "question_hi": "टाइप असर्शन कैसे करते हैं?",
        "options_en": ["value.(Type)", "(Type)value", "value as Type", "assert Type value"],
        "options_hi": ["value.(Type)", "(Type)value", "value as Type", "assert Type value"],
        "answer_en": "value.(Type)",
        "answer_hi": "value.(Type)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is type switch in Go?",
        "question_hi": "Go में टाइप स्विच क्या है?",
        "options_en": ["Switch that checks type of interface value", "Switch for different types", "Type conversion switch", "Dynamic type switch"],
        "options_hi": ["इंटरफेस वैल्यू के टाइप को चेक करने वाला स्विच", "अलग-अलग टाइप के लिए स्विच", "टाइप कन्वर्जन स्विच", "डायनामिक टाइप स्विच"],
        "answer_en": "Switch that checks type of interface value",
        "answer_hi": "इंटरफेस वैल्यू के टाइप को चेक करने वाला स्विच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you define a struct in Go?",
        "question_hi": "Go में स्ट्रक्चर कैसे डिफाइन करते हैं?",
        "options_en": ["type Name struct { fields }", "struct Name { fields }", "class Name { fields }", "def struct Name { fields }"],
        "options_hi": ["type Name struct { fields }", "struct Name { fields }", "class Name { fields }", "def struct Name { fields }"],
        "answer_en": "type Name struct { fields }",
        "answer_hi": "type Name struct { fields }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What are struct tags used for?",
        "question_hi": "स्ट्रक्चर टैग का उपयोग किस लिए किया जाता है?",
        "options_en": ["Metadata for struct fields", "Naming structs", "Tagging important structs", "Documentation"],
        "options_hi": ["स्ट्रक्चर फील्ड के लिए मेटाडेटा", "स्ट्रक्चर नेमिंग", "इम्पोर्टेंट स्ट्रक्चर टैगिंग", "डॉक्युमेंटेशन"],
        "answer_en": "Metadata for struct fields",
        "answer_hi": "स्ट्रक्चर फील्ड के लिए मेटाडेटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you create an instance of a struct?",
        "question_hi": "स्ट्रक्चर का इंस्टेंस कैसे बनाते हैं?",
        "options_en": ["Name{Field: value}", "new Name(Field: value)", "struct Name{Field: value}", "create Name{Field: value}"],
        "options_hi": ["Name{Field: value}", "new Name(Field: value)", "struct Name{Field: value}", "create Name{Field: value}"],
        "answer_en": "Name{Field: value}",
        "answer_hi": "Name{Field: value}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is embedding in Go structs?",
        "question_hi": "Go स्ट्रक्चर में एम्बेडिंग क्या है?",
        "options_en": ["Including one struct type in another", "Nesting structs", "Inheritance", "Composition"],
        "options_hi": ["एक स्ट्रक्चर टाइप को दूसरे में शामिल करना", "नेस्टिंग स्ट्रक्चर", "इनहेरिटेंस", "कम्पोजिशन"],
        "answer_en": "Including one struct type in another",
        "answer_hi": "एक स्ट्रक्चर टाइप को दूसरे में शामिल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you define a custom type?",
        "question_hi": "कस्टम टाइप कैसे डिफाइन करते हैं?",
        "options_en": ["type NewType ExistingType", "typedef ExistingType NewType", "custom type NewType ExistingType", "NewType = ExistingType"],
        "options_hi": ["type NewType ExistingType", "typedef ExistingType NewType", "custom type NewType ExistingType", "NewType = ExistingType"],
        "answer_en": "type NewType ExistingType",
        "answer_hi": "type NewType ExistingType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is a type alias?",
        "question_hi": "टाइप एलियास क्या है?",
        "options_en": ["type NewType = ExistingType", "type NewType ExistingType", "alias NewType ExistingType", "NewType := ExistingType"],
        "options_hi": ["type NewType = ExistingType", "type NewType ExistingType", "alias NewType ExistingType", "NewType := ExistingType"],
        "answer_en": "type NewType = ExistingType",
        "answer_hi": "type NewType = ExistingType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you define constants in Go?",
        "question_hi": "Go में कॉन्स्टेंट कैसे डिफाइन करते हैं?",
        "options_en": ["const Name = value", "constant Name = value", "final Name = value", "let Name = value"],
        "options_hi": ["const Name = value", "constant Name = value", "final Name = value", "let Name = value"],
        "answer_en": "const Name = value",
        "answer_hi": "const Name = value",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the iota identifier?",
        "question_hi": "iota आइडेंटिफायर क्या है?",
        "options_en": ["Predeclared identifier for incrementing constants", "Math constant", "Loop counter", "Iterator"],
        "options_hi": ["इंक्रीमेंटिंग कॉन्स्टेंट के लिए प्रीडिक्लेयर्ड आइडेंटिफायर", "मैथ कॉन्स्टेंट", "लूप काउंटर", "इटरेटर"],
        "answer_en": "Predeclared identifier for incrementing constants",
        "answer_hi": "इंक्रीमेंटिंग कॉन्स्टेंट के लिए प्रीडिक्लेयर्ड आइडेंटिफायर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you handle errors in Go?",
        "question_hi": "Go में एरर कैसे हैंडल करते हैं?",
        "options_en": ["Return error as last return value", "Try-catch blocks", "Exceptions", "Error events"],
        "options_hi": ["लास्ट रिटर्न वैल्यू के रूप में एरर रिटर्न करें", "ट्राई-कैच ब्लॉक", "एक्सेप्शन", "एरर इवेंट"],
        "answer_en": "Return error as last return value",
        "answer_hi": "लास्ट रिटर्न वैल्यू के रूप में एरर रिटर्न करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the error interface?",
        "question_hi": "एरर इंटरफेस क्या है?",
        "options_en": ["interface { Error() string }", "interface { String() string }", "interface { Message() string }", "interface { GetError() string }"],
        "options_hi": ["interface { Error() string }", "interface { String() string }", "interface { Message() string }", "interface { GetError() string }"],
        "answer_en": "interface { Error() string }",
        "answer_hi": "interface { Error() string }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you create a custom error?",
        "question_hi": "कस्टम एरर कैसे बनाते हैं?",
        "options_en": ["errors.New() or fmt.Errorf()", "error.Create()", "new error()", "Error{}"],
        "options_hi": ["errors.New() या fmt.Errorf()", "error.Create()", "new error()", "Error{}"],
        "answer_en": "errors.New() or fmt.Errorf()",
        "answer_hi": "errors.New() या fmt.Errorf()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is panic in Go?",
        "question_hi": "Go में पैनिक क्या है?",
        "options_en": ["Runtime error that stops execution", "Compile-time error", "Warning message", "Log entry"],
        "options_hi": ["रनटाइम एरर जो एक्जिक्यूशन रोकता है", "कम्पाइल-टाइम एरर", "वॉर्निंग मैसेज", "लॉग एंट्री"],
        "answer_en": "Runtime error that stops execution",
        "answer_hi": "रनटाइम एरर जो एक्जिक्यूशन रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you recover from panic?",
        "question_hi": "पैनिक से कैसे रिकवर करते हैं?",
        "options_en": ["recover() function in defer", "catch() function", "rescue() function", "handle() function"],
        "options_hi": ["defer में recover() फंक्शन", "catch() फंक्शन", "rescue() फंक्शन", "handle() फंक्शन"],
        "answer_en": "recover() function in defer",
        "answer_hi": "defer में recover() फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is defer in Go?",
        "question_hi": "Go में defer क्या है?",
        "options_en": ["Statement that schedules function call before return", "Delay statement", "Async call", "Callback"],
        "options_hi": ["स्टेटमेंट जो रिटर्न से पहले फंक्शन कॉल शेड्यूल करता है", "डिले स्टेटमेंट", "एसिंक कॉल", "कॉलबैक"],
        "answer_en": "Statement that schedules function call before return",
        "answer_hi": "स्टेटमेंट जो रिटर्न से पहले फंक्शन कॉल शेड्यूल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "In what order are deferred functions executed?",
        "question_hi": "डिफर्ड फंक्शन किस ऑर्डर में एक्जिक्यूट होते हैं?",
        "options_en": ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Random order", "As they are called"],
        "options_hi": ["LIFO (लास्ट इन फर्स्ट आउट)", "FIFO (फर्स्ट इन फर्स्ट आउट)", "रैंडम ऑर्डर", "जैसे वे कॉल किए जाते हैं"],
        "answer_en": "LIFO (Last In First Out)",
        "answer_hi": "LIFO (लास्ट इन फर्स्ट आउट)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is a goroutine?",
        "question_hi": "गोरूटीन क्या है?",
        "options_en": ["Lightweight thread managed by Go runtime", "Heavyweight thread", "Process", "Coroutine"],
        "options_hi": ["Go रनटाइम द्वारा मैनेज की जाने वाली लाइटवेट थ्रेड", "हेवीवेट थ्रेड", "प्रोसेस", "कोरूटीन"],
        "answer_en": "Lightweight thread managed by Go runtime",
        "answer_hi": "Go रनटाइम द्वारा मैनेज की जाने वाली लाइटवेट थ्रेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you start a goroutine?",
        "question_hi": "गोरूटीन कैसे स्टार्ट करते हैं?",
        "options_en": ["go functionCall()", "goroutine functionCall()", "async functionCall()", "spawn functionCall()"],
        "options_hi": ["go functionCall()", "goroutine functionCall()", "async functionCall()", "spawn functionCall()"],
        "answer_en": "go functionCall()",
        "answer_hi": "go functionCall()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is a channel in Go?",
        "question_hi": "Go में चैनल क्या है?",
        "options_en": ["Communication mechanism between goroutines", "Data pipe", "Message queue", "Event bus"],
        "options_hi": ["गोरूटीन के बीच कम्युनिकेशन मैकेनिज्म", "डेटा पाइप", "मैसेज क्यू", "इवेंट बस"],
        "answer_en": "Communication mechanism between goroutines",
        "answer_hi": "गोरूटीन के बीच कम्युनिकेशन मैकेनिज्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you create a channel?",
        "question_hi": "चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan Type)", "chan Type{}", "new(chan Type)", "channel(Type)"],
        "options_hi": ["make(chan Type)", "chan Type{}", "new(chan Type)", "channel(Type)"],
        "answer_en": "make(chan Type)",
        "answer_hi": "make(chan Type)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is a buffered channel?",
        "question_hi": "बफर्ड चैनल क्या है?",
        "options_en": ["Channel with capacity to hold multiple values", "Fast channel", "Large channel", "Async channel"],
        "options_hi": ["मल्टीपल वैल्यू होल्ड करने की कैपेसिटी वाला चैनल", "फास्ट चैनल", "लार्ज चैनल", "एसिंक चैनल"],
        "answer_en": "Channel with capacity to hold multiple values",
        "answer_hi": "मल्टीपल वैल्यू होल्ड करने की कैपेसिटी वाला चैनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you create a buffered channel?",
        "question_hi": "बफर्ड चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan Type, capacity)", "chan Type(capacity)", "buffered(chan Type, capacity)", "make(chan Type, buffered)"],
        "options_hi": ["make(chan Type, capacity)", "chan Type(capacity)", "buffered(chan Type, capacity)", "make(chan Type, buffered)"],
        "answer_en": "make(chan Type, capacity)",
        "answer_hi": "make(chan Type, capacity)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the select statement?",
        "question_hi": "select स्टेटमेंट क्या है?",
        "options_en": ["Waits on multiple channel operations", "Chooses between values", "Selects from array", "Conditional channel"],
        "options_hi": ["मल्टीपल चैनल ऑपरेशन पर वेट करता है", "वैल्यू के बीच चुनता है", "ऐरे से सेलेक्ट करता है", "कंडीशनल चैनल"],
        "answer_en": "Waits on multiple channel operations",
        "answer_hi": "मल्टीपल चैनल ऑपरेशन पर वेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you close a channel?",
        "question_hi": "चैनल कैसे क्लोज करते हैं?",
        "options_en": ["close(channel)", "channel.Close()", "stop(channel)", "channel.Stop()"],
        "options_hi": ["close(channel)", "channel.Close()", "stop(channel)", "channel.Stop()"],
        "answer_en": "close(channel)",
        "answer_hi": "close(channel)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What happens when you send to a closed channel?",
        "question_hi": "क्लोज्ड चैनल में सेंड करने पर क्या होता है?",
        "options_en": ["Panic", "Error return", "Silent failure", "Blocks forever"],
        "options_hi": ["पैनिक", "एरर रिटर्न", "साइलेंट फेल्योर", "हमेशा के लिए ब्लॉक"],
        "answer_en": "Panic",
        "answer_hi": "पैनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the sync package used for?",
        "question_hi": "sync पैकेज का उपयोग किस लिए किया जाता है?",
        "options_en": ["Synchronization primitives", "System calls", "File sync", "Data sync"],
        "options_hi": ["सिंक्रोनाइज़ेशन प्रिमिटिव", "सिस्टम कॉल", "फाइल सिंक", "डेटा सिंक"],
        "answer_en": "Synchronization primitives",
        "answer_hi": "सिंक्रोनाइज़ेशन प्रिमिटिव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is a WaitGroup?",
        "question_hi": "WaitGroup क्या है?",
        "options_en": ["Synchronizes goroutines by waiting for collection to finish", "Weight group", "Wait for groups", "Synchronization group"],
        "options_hi": ["कलेक्शन खत्म होने का इंतजार करके गोरूटीन सिंक्रोनाइज़ करता है", "वेट ग्रुप", "ग्रुप का इंतजार", "सिंक्रोनाइज़ेशन ग्रुप"],
        "answer_en": "Synchronizes goroutines by waiting for collection to finish",
        "answer_hi": "कलेक्शन खत्म होने का इंतजार करके गोरूटीन सिंक्रोनाइज़ करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you use a WaitGroup?",
        "question_hi": "WaitGroup का उपयोग कैसे करते हैं?",
        "options_en": ["Add() before goroutine, Done() inside, Wait() to block", "Wait() only", "Add() and Wait()", "Done() and Wait()"],
        "options_hi": ["गोरूटीन से पहले Add(), अंदर Done(), ब्लॉक करने के लिए Wait()", "केवल Wait()", "Add() और Wait()", "Done() और Wait()"],
        "answer_en": "Add() before goroutine, Done() inside, Wait() to block",
        "answer_hi": "गोरूटीन से पहले Add(), अंदर Done(), ब्लॉक करने के लिए Wait()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is a Mutex?",
        "question_hi": "Mutex क्या है?",
        "options_en": ["Mutual exclusion lock", "Multiple execution", "Mutual exchange", "Multi-thread execution"],
        "options_hi": ["म्यूचुअल एक्सक्लूजन लॉक", "मल्टीपल एक्जिक्यूशन", "म्यूचुअल एक्सचेंज", "मल्टी-थ्रेड एक्जिक्यूशन"],
        "answer_en": "Mutual exclusion lock",
        "answer_hi": "म्यूचुअल एक्सक्लूजन लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is RWMutex?",
        "question_hi": "RWMutex क्या है?",
        "options_en": ["Reader-writer mutual exclusion lock", "Read-write mutex", "Recursive mutex", "Random mutex"],
        "options_hi": ["रीडर-राइटर म्यूचुअल एक्सक्लूजन लॉक", "रीड-राइट म्यूटेक्स", "रिकर्सिव म्यूटेक्स", "रैंडम म्यूटेक्स"],
        "answer_en": "Reader-writer mutual exclusion lock",
        "answer_hi": "रीडर-राइटर म्यूचुअल एक्सक्लूजन लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the atomic package used for?",
        "question_hi": "atomic पैकेज का उपयोग किस लिए किया जाता है?",
        "options_en": ["Atomic operations on integers and pointers", "Atomic file operations", "Atomic database transactions", "Atomic memory operations"],
        "options_hi": ["इंटीजर और पॉइंटर पर एटॉमिक ऑपरेशन", "एटॉमिक फाइल ऑपरेशन", "एटॉमिक डेटाबेस ट्रांजैक्शन", "एटॉमिक मेमोरी ऑपरेशन"],
        "answer_en": "Atomic operations on integers and pointers",
        "answer_hi": "इंटीजर और पॉइंटर पर एटॉमिक ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is context package used for?",
        "question_hi": "context पैकेज का उपयोग किस लिए किया जाता है?",
        "options_en": ["Request-scoped values and cancellation", "Configuration context", "Content management", "Context switching"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यू और कैंसलेशन", "कॉन्फिगरेशन कॉन्टेक्स्ट", "कंटेंट मैनेजमेंट", "कॉन्टेक्स्ट स्विचिंग"],
        "answer_en": "Request-scoped values and cancellation",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यू और कैंसलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you create a context with timeout?",
        "question_hi": "टाइमआउट के साथ कॉन्टेक्स्ट कैसे बनाते हैं?",
        "options_en": ["context.WithTimeout(parent, duration)", "context.Timeout(parent, duration)", "context.WithDuration(parent, duration)", "context.NewTimeout(parent, duration)"],
        "options_hi": ["context.WithTimeout(parent, duration)", "context.Timeout(parent, duration)", "context.WithDuration(parent, duration)", "context.NewTimeout(parent, duration)"],
        "answer_en": "context.WithTimeout(parent, duration)",
        "answer_hi": "context.WithTimeout(parent, duration)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of testing package?",
        "question_hi": "testing पैकेज का उद्देश्य क्या है?",
        "options_en": ["Writing unit tests", "Performance testing", "System testing", "Integration testing"],
        "options_hi": ["यूनिट टेस्ट लिखना", "परफॉर्मेंस टेस्टिंग", "सिस्टम टेस्टिंग", "इंटीग्रेशन टेस्टिंग"],
        "answer_en": "Writing unit tests",
        "answer_hi": "यूनिट टेस्ट लिखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you write a unit test in Go?",
        "question_hi": "Go में यूनिट टेस्ट कैसे लिखते हैं?",
        "options_en": ["Function starting with Test", "Function starting with test", "test function", "unit_test function"],
        "options_hi": ["Test से शुरू होने वाला फंक्शन", "test से शुरू होने वाला फंक्शन", "test फंक्शन", "unit_test फंक्शन"],
        "answer_en": "Function starting with Test",
        "answer_hi": "Test से शुरू होने वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
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
        "num": 62,
        "question_en": "How do you run tests?",
        "question_hi": "टेस्ट कैसे रन करते हैं?",
        "options_en": ["go test", "go run test", "go testing", "go unit-test"],
        "options_hi": ["go test", "go run test", "go testing", "go unit-test"],
        "answer_en": "go test",
        "answer_hi": "go test",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is a benchmark test?",
        "question_hi": "बेंचमार्क टेस्ट क्या है?",
        "options_en": ["Measures performance of code", "Tests functionality", "Checks correctness", "Validates input"],
        "options_hi": ["कोड की परफॉर्मेंस मापता है", "फंक्शनैलिटी टेस्ट करता है", "करेक्टनेस चेक करता है", "इनपुट वैलिडेट करता है"],
        "answer_en": "Measures performance of code",
        "answer_hi": "कोड की परफॉर्मेंस मापता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you write a benchmark?",
        "question_hi": "बेंचमार्क कैसे लिखते हैं?",
        "options_en": ["Function starting with Benchmark", "Function starting with benchmark", "bench function", "performance function"],
        "options_hi": ["Benchmark से शुरू होने वाला फंक्शन", "benchmark से शुरू होने वाला फंक्शन", "bench फंक्शन", "performance फंक्शन"],
        "answer_en": "Function starting with Benchmark",
        "answer_hi": "Benchmark से शुरू होने वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of reflect package?",
        "question_hi": "reflect पैकेज का उद्देश्य क्या है?",
        "options_en": ["Runtime reflection", "Code reflection", "Light reflection", "Image reflection"],
        "options_hi": ["रनटाइम रिफ्लेक्शन", "कोड रिफ्लेक्शन", "लाइट रिफ्लेक्शन", "इमेज रिफ्लेक्शन"],
        "answer_en": "Runtime reflection",
        "answer_hi": "रनटाइम रिफ्लेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you get type of variable at runtime?",
        "question_hi": "रनटाइम पर वेरिएबल का टाइप कैसे प्राप्त करते हैं?",
        "options_en": ["reflect.TypeOf()", "typeof()", "type()", "getType()"],
        "options_hi": ["reflect.TypeOf()", "typeof()", "type()", "getType()"],
        "answer_en": "reflect.TypeOf()",
        "answer_hi": "reflect.TypeOf()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is unsafe package used for?",
        "question_hi": "unsafe पैकेज का उपयोग किस लिए किया जाता है?",
        "options_en": ["Operations that bypass type safety", "Dangerous operations", "System operations", "File operations"],
        "options_hi": ["टाइप सेफ्टी बायपास करने वाले ऑपरेशन", "खतरनाक ऑपरेशन", "सिस्टम ऑपरेशन", "फाइल ऑपरेशन"],
        "answer_en": "Operations that bypass type safety",
        "answer_hi": "टाइप सेफ्टी बायपास करने वाले ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is go mod command?",
        "question_hi": "go mod कमांड क्या है?",
        "options_en": ["Module management", "Code modification", "Model generation", "Mode setting"],
        "options_hi": ["मॉड्यूल मैनेजमेंट", "कोड मॉडिफिकेशन", "मॉडल जनरेशन", "मोड सेटिंग"],
        "answer_en": "Module management",
        "answer_hi": "मॉड्यूल मैनेजमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you initialize a module?",
        "question_hi": "मॉड्यूल कैसे इनिशियलाइज़ करते हैं?",
        "options_en": ["go mod init", "go init mod", "go module init", "go new mod"],
        "options_hi": ["go mod init", "go init mod", "go module init", "go new mod"],
        "answer_en": "go mod init",
        "answer_hi": "go mod init",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is go.sum file?",
        "question_hi": "go.sum फाइल क्या है?",
        "options_en": ["Cryptographic checksums of dependencies", "Summary of code", "Module summary", "Dependency list"],
        "options_hi": ["डिपेंडेंसी के क्रिप्टोग्राफिक चेकसम", "कोड का सारांश", "मॉड्यूल सारांश", "डिपेंडेंसी लिस्ट"],
        "answer_en": "Cryptographic checksums of dependencies",
        "answer_hi": "डिपेंडेंसी के क्रिप्टोग्राफिक चेकसम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you add a dependency?",
        "question_hi": "डिपेंडेंसी कैसे ऐड करते हैं?",
        "options_en": ["go get package", "go add package", "go import package", "go dependency package"],
        "options_hi": ["go get package", "go add package", "go import package", "go dependency package"],
        "answer_en": "go get package",
        "answer_hi": "go get package",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is go fmt command?",
        "question_hi": "go fmt कमांड क्या है?",
        "options_en": ["Formats Go code", "Formats files", "Formats text", "Formats data"],
        "options_hi": ["Go कोड फॉर्मेट करता है", "फाइल फॉर्मेट करता है", "टेक्स्ट फॉर्मेट करता है", "डेटा फॉर्मेट करता है"],
        "answer_en": "Formats Go code",
        "answer_hi": "Go कोड फॉर्मेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is go vet command?",
        "question_hi": "go vet कमांड क्या है?",
        "options_en": ["Reports suspicious constructs", "Checks animal health", "Validates code", "Checks version"],
        "options_hi": ["संदिग्ध कंस्ट्रक्ट रिपोर्ट करता है", "जानवरों की सेहत चेक करता है", "कोड वैलिडेट करता है", "वर्जन चेक करता है"],
        "answer_en": "Reports suspicious constructs",
        "answer_hi": "संदिग्ध कंस्ट्रक्ट रिपोर्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is go doc command?",
        "question_hi": "go doc कमांड क्या है?",
        "options_en": ["Shows documentation", "Creates documents", "Edits documentation", "Deletes docs"],
        "options_hi": ["डॉक्युमेंटेशन दिखाता है", "डॉक्युमेंट बनाता है", "डॉक्युमेंटेशन एडिट करता है", "डॉक्स डिलीट करता है"],
        "answer_en": "Shows documentation",
        "answer_hi": "डॉक्युमेंटेशन दिखाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you build a Go program?",
        "question_hi": "Go प्रोग्राम कैसे बिल्ड करते हैं?",
        "options_en": ["go build", "go compile", "go make", "go create"],
        "options_hi": ["go build", "go compile", "go make", "go create"],
        "answer_en": "go build",
        "answer_hi": "go build",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is go run command?",
        "question_hi": "go run कमांड क्या है?",
        "options_en": ["Compiles and runs", "Runs only", "Executes binaries", "Runs tests"],
        "options_hi": ["कम्पाइल और रन करता है", "केवल रन करता है", "बाइनरी एक्जिक्यूट करता है", "टेस्ट रन करता है"],
        "answer_en": "Compiles and runs",
        "answer_hi": "कम्पाइल और रन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you cross-compile Go code?",
        "question_hi": "Go कोड क्रॉस-कम्पाइल कैसे करते हैं?",
        "options_en": ["Set GOOS and GOARCH", "Use cross flag", "Use special compiler", "Cannot cross-compile"],
        "options_hi": ["GOOS और GOARCH सेट करें", "cross फ्लैग का उपयोग करें", "स्पेशल कम्पाइलर का उपयोग करें", "क्रॉस-कम्पाइल नहीं कर सकते"],
        "answer_en": "Set GOOS and GOARCH",
        "answer_hi": "GOOS और GOARCH सेट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is GOPATH?",
        "question_hi": "GOPATH क्या है?",
        "options_en": ["Workspace directory for Go code", "Go installation path", "Go binary path", "Go module path"],
        "options_hi": ["Go कोड के लिए वर्कस्पेस डायरेक्टरी", "Go इंस्टालेशन पाथ", "Go बाइनरी पाथ", "Go मॉड्यूल पाथ"],
        "answer_en": "Workspace directory for Go code",
        "answer_hi": "Go कोड के लिए वर्कस्पेस डायरेक्टरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is GOROOT?",
        "question_hi": "GOROOT क्या है?",
        "options_en": ["Go installation directory", "Go workspace", "Go source directory", "Go binary directory"],
        "options_hi": ["Go इंस्टालेशन डायरेक्टरी", "Go वर्कस्पेस", "Go सोर्स डायरेक्टरी", "Go बाइनरी डायरेक्टरी"],
        "answer_en": "Go installation directory",
        "answer_hi": "Go इंस्टालेशन डायरेक्टरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the difference between GOPATH and modules?",
        "question_hi": "GOPATH और मॉड्यूल में क्या अंतर है?",
        "options_en": ["Modules are newer dependency management system", "No difference", "GOPATH is for modules", "Modules replace GOPATH completely"],
        "options_hi": ["मॉड्यूल नया डिपेंडेंसी मैनेजमेंट सिस्टम है", "कोई अंतर नहीं", "GOPATH मॉड्यूल के लिए है", "मॉड्यूल GOPATH को पूरी तरह रिप्लेस करते हैं"],
        "answer_en": "Modules are newer dependency management system",
        "answer_hi": "मॉड्यूल नया डिपेंडेंसी मैनेजमेंट सिस्टम है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is a workspace in Go?",
        "question_hi": "Go में वर्कस्पेस क्या है?",
        "options_en": ["Directory containing Go code", "Working directory", "Code editor", "Development environment"],
        "options_hi": ["Go कोड वाली डायरेक्टरी", "वर्किंग डायरेक्टरी", "कोड एडिटर", "डेवलपमेंट एनवायरनमेंट"],
        "answer_en": "Directory containing Go code",
        "answer_hi": "Go कोड वाली डायरेक्टरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the purpose of go clean command?",
        "question_hi": "go clean कमांड का उद्देश्य क्या है?",
        "options_en": ["Removes object files", "Cleans code", "Deletes files", "Clears cache"],
        "options_hi": ["ऑब्जेक्ट फाइल रिमूव करता है", "कोड क्लीन करता है", "फाइल डिलीट करता है", "कैश क्लियर करता है"],
        "answer_en": "Removes object files",
        "answer_hi": "ऑब्जेक्ट फाइल रिमूव करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you install a Go program?",
        "question_hi": "Go प्रोग्राम कैसे इंस्टॉल करते हैं?",
        "options_en": ["go install", "go setup", "go deploy", "go build -install"],
        "options_hi": ["go install", "go setup", "go deploy", "go build -install"],
        "answer_en": "go install",
        "answer_hi": "go install",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is go generate command?",
        "question_hi": "go generate कमांड क्या है?",
        "options_en": ["Runs code generation tools", "Generates code", "Creates files", "Builds code"],
        "options_hi": ["कोड जनरेशन टूल रन करता है", "कोड जनरेट करता है", "फाइल क्रिएट करता है", "कोड बिल्ड करता है"],
        "answer_en": "Runs code generation tools",
        "answer_hi": "कोड जनरेशन टूल रन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is cgo?",
        "question_hi": "cgo क्या है?",
        "options_en": ["Tool for creating Go packages that call C code", "C to Go converter", "Go to C compiler", "C and Go integration"],
        "options_hi": ["C कोड कॉल करने वाले Go पैकेज बनाने का टूल", "C से Go कन्वर्टर", "Go से C कम्पाइलर", "C और Go इंटीग्रेशन"],
        "answer_en": "Tool for creating Go packages that call C code",
        "answer_hi": "C कोड कॉल करने वाले Go पैकेज बनाने का टूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you use C code in Go?",
        "question_hi": "Go में C कोड कैसे उपयोग करते हैं?",
        "options_en": ["Using import \"C\" and cgo directives", "Using #include", "Using C package", "Using foreign function interface"],
        "options_hi": ["import \"C\" और cgo डायरेक्टिव का उपयोग करके", "#include का उपयोग करके", "C पैकेज का उपयोग करके", "फॉरेन फंक्शन इंटरफेस का उपयोग करके"],
        "answer_en": "Using import \"C\" and cgo directives",
        "answer_hi": "import \"C\" और cgo डायरेक्टिव का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of go tool command?",
        "question_hi": "go tool कमांड का उद्देश्य क्या है?",
        "options_en": ["Runs specific Go tools", "Tool management", "Tool installation", "Tool creation"],
        "options_hi": ["स्पेसिफिक Go टूल रन करता है", "टूल मैनेजमेंट", "टूल इंस्टालेशन", "टूल क्रिएशन"],
        "answer_en": "Runs specific Go tools",
        "answer_hi": "स्पेसिफिक Go टूल रन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is go list command?",
        "question_hi": "go list कमांड क्या है?",
        "options_en": ["Lists packages or modules", "Lists files", "Lists functions", "Lists variables"],
        "options_hi": ["पैकेज या मॉड्यूल लिस्ट करता है", "फाइल लिस्ट करता है", "फंक्शन लिस्ट करता है", "वेरिएबल लिस्ट करता है"],
        "answer_en": "Lists packages or modules",
        "answer_hi": "पैकेज या मॉड्यूल लिस्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you check Go version?",
        "question_hi": "Go वर्जन कैसे चेक करते हैं?",
        "options_en": ["go version", "go --version", "go -v", "version go"],
        "options_hi": ["go version", "go --version", "go -v", "version go"],
        "answer_en": "go version",
        "answer_hi": "go version",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is go fix command?",
        "question_hi": "go fix कमांड क्या है?",
        "options_en": ["Updates code to use new APIs", "Fixes bugs", "Repairs code", "Corrects errors"],
        "options_hi": ["नए API उपयोग करने के लिए कोड अपडेट करता है", "बग फिक्स करता है", "कोड रिपेयर करता है", "एरर करेक्ट करता है"],
        "answer_en": "Updates code to use new APIs",
        "answer_hi": "नए API उपयोग करने के लिए कोड अपडेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is go env command?",
        "question_hi": "go env कमांड क्या है?",
        "options_en": ["Prints Go environment information", "Sets environment", "Environment variables", "System environment"],
        "options_hi": ["Go एनवायरनमेंट इनफार्मेशन प्रिंट करता है", "एनवायरनमेंट सेट करता है", "एनवायरनमेंट वेरिएबल", "सिस्टम एनवायरनमेंट"],
        "answer_en": "Prints Go environment information",
        "answer_hi": "Go एनवायरनमेंट इनफार्मेशन प्रिंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you update dependencies?",
        "question_hi": "डिपेंडेंसी कैसे अपडेट करते हैं?",
        "options_en": ["go get -u", "go update", "go upgrade", "go mod update"],
        "options_hi": ["go get -u", "go update", "go upgrade", "go mod update"],
        "answer_en": "go get -u",
        "answer_hi": "go get -u",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is go work command?",
        "question_hi": "go work कमांड क्या है?",
        "options_en": ["Workspace management", "Work directory", "Job management", "Task management"],
        "options_hi": ["वर्कस्पेस मैनेजमेंट", "वर्क डायरेक्टरी", "जॉब मैनेजमेंट", "टास्क मैनेजमेंट"],
        "answer_en": "Workspace management",
        "answer_hi": "वर्कस्पेस मैनेजमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you create a workspace?",
        "question_hi": "वर्कस्पेस कैसे बनाते हैं?",
        "options_en": ["go work init", "go init work", "go workspace init", "go create work"],
        "options_hi": ["go work init", "go init work", "go workspace init", "go create work"],
        "answer_en": "go work init",
        "answer_hi": "go work init",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of go.mod file?",
        "question_hi": "go.mod फाइल का उद्देश्य क्या है?",
        "options_en": ["Module definition and dependencies", "Code modification", "Model definition", "Mode definition"],
        "options_hi": ["मॉड्यूल डेफिनिशन और डिपेंडेंसी", "कोड मॉडिफिकेशन", "मॉडल डेफिनिशन", "मोड डेफिनिशन"],
        "answer_en": "Module definition and dependencies",
        "answer_hi": "मॉड्यूल डेफिनिशन और डिपेंडेंसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the difference between require and replace in go.mod?",
        "question_hi": "go.mod में require और replace में क्या अंतर है?",
        "options_en": ["require specifies dependencies, replace overrides them", "No difference", "require for modules, replace for packages", "require adds, replace removes"],
        "options_hi": ["require डिपेंडेंसी स्पेसिफाई करता है, replace उन्हें ओवरराइड करता है", "कोई अंतर नहीं", "require मॉड्यूल के लिए, replace पैकेज के लिए", "require ऐड करता है, replace रिमूव करता है"],
        "answer_en": "require specifies dependencies, replace overrides them",
        "answer_hi": "require डिपेंडेंसी स्पेसिफाई करता है, replace उन्हें ओवरराइड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is go tool pprof?",
        "question_hi": "go tool pprof क्या है?",
        "options_en": ["Performance profiling tool", "Code formatting tool", "Package management tool", "Testing tool"],
        "options_hi": ["परफॉर्मेंस प्रोफाइलिंग टूल", "कोड फॉर्मेटिंग टूल", "पैकेज मैनेजमेंट टूल", "टेस्टिंग टूल"],
        "answer_en": "Performance profiling tool",
        "answer_hi": "परफॉर्मेंस प्रोफाइलिंग टूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you profile a Go program?",
        "question_hi": "Go प्रोग्राम की प्रोफाइलिंग कैसे करते हैं?",
        "options_en": ["Using pprof package", "Using profile package", "Using benchmark", "Using test"],
        "options_hi": ["pprof पैकेज का उपयोग करके", "profile पैकेज का उपयोग करके", "बेंचमार्क का उपयोग करके", "टेस्ट का उपयोग करके"],
        "answer_en": "Using pprof package",
        "answer_hi": "pprof पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is race detector in Go?",
        "question_hi": "Go में रेस डिटेक्टर क्या है?",
        "options_en": ["Tool for detecting race conditions", "Speed measurement tool", "Competition detector", "Performance tool"],
        "options_hi": ["रेस कंडीशन डिटेक्ट करने का टूल", "स्पीड मेजरमेंट टूल", "कॉम्पिटिशन डिटेक्टर", "परफॉर्मेंस टूल"],
        "answer_en": "Tool for detecting race conditions",
        "answer_hi": "रेस कंडीशन डिटेक्ट करने का टूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you enable race detection?",
        "question_hi": "रेस डिटेक्शन कैसे एनेबल करते हैं?",
        "options_en": ["-race flag", "--race option", "race=true", "enable_race"],
        "options_hi": ["-race फ्लैग", "--race ऑप्शन", "race=true", "enable_race"],
        "answer_en": "-race flag",
        "answer_hi": "-race फ्लैग",
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