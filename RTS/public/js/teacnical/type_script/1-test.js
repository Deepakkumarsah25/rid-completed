const questions = [
    {
        "num": 1,
        "question_en": "What is TypeScript?",
        "question_hi": "TypeScript क्या है?",
        "options_en": ["A superset of JavaScript", "A subset of JavaScript", "A completely different language", "A database language"],
        "options_hi": ["JavaScript का सुपरसेट", "JavaScript का सबसेट", "एक पूरी तरह अलग भाषा", "एक डेटाबेस भाषा"],
        "answer_en": "A superset of JavaScript",
        "answer_hi": "JavaScript का सुपरसेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who developed TypeScript?",
        "question_hi": "TypeScript को किसने विकसित किया?",
        "options_en": ["Microsoft", "Google", "Facebook", "Apple"],
        "options_hi": ["माइक्रोसॉफ्ट", "गूगल", "फेसबुक", "एप्पल"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which year was TypeScript first released?",
        "question_hi": "TypeScript पहली बार किस वर्ष रिलीज़ हुआ?",
        "options_en": ["2012", "2010", "2014", "2016"],
        "options_hi": ["2012", "2010", "2014", "2016"],
        "answer_en": "2012",
        "answer_hi": "2012",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main feature of TypeScript?",
        "question_hi": "TypeScript की मुख्य विशेषता क्या है?",
        "options_en": ["Static typing", "Dynamic typing", "No typing", "Weak typing"],
        "options_hi": ["स्टैटिक टाइपिंग", "डायनामिक टाइपिंग", "कोई टाइपिंग नहीं", "वीक टाइपिंग"],
        "answer_en": "Static typing",
        "answer_hi": "स्टैटिक टाइपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which file extension is used for TypeScript files?",
        "question_hi": "TypeScript फाइलों के लिए किस फाइल एक्सटेंशन का उपयोग किया जाता है?",
        "options_en": [".ts", ".js", ".typescript", ".tsc"],
        "options_hi": [".ts", ".js", ".typescript", ".tsc"],
        "answer_en": ".ts",
        "answer_hi": ".ts",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you compile TypeScript to JavaScript?",
        "question_hi": "TypeScript को JavaScript में कैसे कंपाइल करते हैं?",
        "options_en": ["tsc command", "node command", "npm command", "typescript command"],
        "options_hi": ["tsc कमांड", "node कमांड", "npm कमांड", "typescript कमांड"],
        "answer_en": "tsc command",
        "answer_hi": "tsc कमांड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does TSC stand for?",
        "question_hi": "TSC का क्या अर्थ है?",
        "options_en": ["TypeScript Compiler", "TypeScript Code", "TypeScript Converter", "TypeScript Controller"],
        "options_hi": ["TypeScript कंपाइलर", "TypeScript कोड", "TypeScript कनवर्टर", "TypeScript कंट्रोलर"],
        "answer_en": "TypeScript Compiler",
        "answer_hi": "TypeScript कंपाइलर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which of the following is a basic TypeScript type?",
        "question_hi": "निम्नलिखित में से कौन सा एक बेसिक TypeScript टाइप है?",
        "options_en": ["string", "array", "object", "all of the above"],
        "options_hi": ["string", "array", "object", "उपरोक्त सभी"],
        "answer_en": "all of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you define a variable with type in TypeScript?",
        "question_hi": "TypeScript में टाइप के साथ वेरिएबल कैसे परिभाषित करते हैं?",
        "options_en": ["let name: string;", "string let name;", "let name string;", "string: let name;"],
        "options_hi": ["let name: string;", "string let name;", "let name string;", "string: let name;"],
        "answer_en": "let name: string;",
        "answer_hi": "let name: string;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the 'any' type used for?",
        "question_hi": "'any' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["When the type is unknown or dynamic", "Only for numbers", "Only for strings", "Only for objects"],
        "options_hi": ["जब टाइप अज्ञात या डायनामिक हो", "केवल नंबर के लिए", "केवल स्ट्रिंग के लिए", "केवल ऑब्जेक्ट के लिए"],
        "answer_en": "When the type is unknown or dynamic",
        "answer_hi": "जब टाइप अज्ञात या डायनामिक हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you define an array of numbers in TypeScript?",
        "question_hi": "TypeScript में नंबर की ऐरे कैसे परिभाषित करते हैं?",
        "options_en": ["number[]", "Array<number>", "Both A and B", "NumberArray"],
        "options_hi": ["number[]", "Array<number>", "A और B दोनों", "NumberArray"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is a tuple in TypeScript?",
        "question_hi": "TypeScript में tuple क्या है?",
        "options_en": ["Array with fixed types and length", "Array with same types", "Object with key-value pairs", "Function type"],
        "options_hi": ["फिक्स्ड टाइप और लंबाई वाली ऐरे", "समान टाइप वाली ऐरे", "की-वैल्यू पेयर वाला ऑब्जेक्ट", "फंक्शन टाइप"],
        "answer_en": "Array with fixed types and length",
        "answer_hi": "फिक्स्ड टाइप और लंबाई वाली ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you define a tuple type?",
        "question_hi": "tuple टाइप कैसे परिभाषित करते हैं?",
        "options_en": ["[string, number]", "tuple(string, number)", "Array<string, number>", "(string, number)"],
        "options_hi": ["[string, number]", "tuple(string, number)", "Array<string, number>", "(string, number)"],
        "answer_en": "[string, number]",
        "answer_hi": "[string, number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is an enum in TypeScript?",
        "question_hi": "TypeScript में enum क्या है?",
        "options_en": ["A way to define named constants", "A type of array", "A function type", "A class type"],
        "options_hi": ["नामित कॉन्स्टेंट को परिभाषित करने का तरीका", "एक प्रकार की ऐरे", "एक फंक्शन टाइप", "एक क्लास टाइप"],
        "answer_en": "A way to define named constants",
        "answer_hi": "नामित कॉन्स्टेंट को परिभाषित करने का तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How do you define an enum?",
        "question_hi": "enum कैसे परिभाषित करते हैं?",
        "options_en": ["enum Color { Red, Green, Blue }", "enum = { Red, Green, Blue }", "define enum Color { Red, Green, Blue }", "Color enum { Red, Green, Blue }"],
        "options_hi": ["enum Color { Red, Green, Blue }", "enum = { Red, Green, Blue }", "define enum Color { Red, Green, Blue }", "Color enum { Red, Green, Blue }"],
        "answer_en": "enum Color { Red, Green, Blue }",
        "answer_hi": "enum Color { Red, Green, Blue }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the 'void' type used for?",
        "question_hi": "'void' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Functions that don't return a value", "Empty objects", "Null values", "Undefined values"],
        "options_hi": ["ऐसे फंक्शन जो कोई मान वापस नहीं करते", "खाली ऑब्जेक्ट", "null मान", "undefined मान"],
        "answer_en": "Functions that don't return a value",
        "answer_hi": "ऐसे फंक्शन जो कोई मान वापस नहीं करते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the 'never' type used for?",
        "question_hi": "'never' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Functions that never return", "Null values", "Undefined values", "All values"],
        "options_hi": ["ऐसे फंक्शन जो कभी वापस नहीं आते", "null मान", "undefined मान", "सभी मान"],
        "answer_en": "Functions that never return",
        "answer_hi": "ऐसे फंक्शन जो कभी वापस नहीं आते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you define a function type?",
        "question_hi": "फंक्शन टाइप कैसे परिभाषित करते हैं?",
        "options_en": ["(param: string) => number", "function(param: string): number", "Both A and B", "None of the above"],
        "options_hi": ["(param: string) => number", "function(param: string): number", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is type inference in TypeScript?",
        "question_hi": "TypeScript में टाइप इन्फरेंस क्या है?",
        "options_en": ["Automatic type detection", "Manual type declaration", "Type checking", "Type conversion"],
        "options_hi": ["ऑटोमैटिक टाइप डिटेक्शन", "मैनुअल टाइप डिक्लेरेशन", "टाइप चेकिंग", "टाइप कन्वर्जन"],
        "answer_en": "Automatic type detection",
        "answer_hi": "ऑटोमैटिक टाइप डिटेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you define an interface?",
        "question_hi": "इंटरफेस कैसे परिभाषित करते हैं?",
        "options_en": ["interface Person { name: string }", "interface = { name: string }", "define interface Person { name: string }", "Person interface { name: string }"],
        "options_hi": ["interface Person { name: string }", "interface = { name: string }", "define interface Person { name: string }", "Person interface { name: string }"],
        "answer_en": "interface Person { name: string }",
        "answer_hi": "interface Person { name: string }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the difference between interface and type?",
        "question_hi": "interface और type में क्या अंतर है?",
        "options_en": ["interface can be extended, type can use unions", "No difference", "type can be extended, interface can use unions", "Both are same"],
        "options_hi": ["interface को एक्सटेंड किया जा सकता है, type यूनियन का उपयोग कर सकता है", "कोई अंतर नहीं", "type को एक्सटेंड किया जा सकता है, interface यूनियन का उपयोग कर सकता है", "दोनों समान हैं"],
        "answer_en": "interface can be extended, type can use unions",
        "answer_hi": "interface को एक्सटेंड किया जा सकता है, type यूनियन का उपयोग कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you make a property optional in an interface?",
        "question_hi": "इंटरफेस में प्रॉपर्टी को ऑप्शनल कैसे बनाते हैं?",
        "options_en": ["name?: string", "name: string?", "optional name: string", "name: optional string"],
        "options_hi": ["name?: string", "name: string?", "optional name: string", "name: optional string"],
        "answer_en": "name?: string",
        "answer_hi": "name?: string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is a union type?",
        "question_hi": "यूनियन टाइप क्या है?",
        "options_en": ["A type that can be one of several types", "A type that combines multiple types", "A type for arrays", "A type for objects"],
        "options_hi": ["एक टाइप जो कई टाइप में से एक हो सकता है", "एक टाइप जो एकाधिक टाइप को संयोजित करता है", "ऐरे के लिए एक टाइप", "ऑब्जेक्ट के लिए एक टाइप"],
        "answer_en": "A type that can be one of several types",
        "answer_hi": "एक टाइप जो कई टाइप में से एक हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you define a union type?",
        "question_hi": "यूनियन टाइप कैसे परिभाषित करते हैं?",
        "options_en": ["string | number", "string & number", "string or number", "string, number"],
        "options_hi": ["string | number", "string & number", "string or number", "string, number"],
        "answer_en": "string | number",
        "answer_hi": "string | number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is an intersection type?",
        "question_hi": "इंटरसेक्शन टाइप क्या है?",
        "options_en": ["A type that combines multiple types", "A type that can be one of several types", "A type for arrays", "A type for functions"],
        "options_hi": ["एक टाइप जो एकाधिक टाइप को संयोजित करता है", "एक टाइप जो कई टाइप में से एक हो सकता है", "ऐरे के लिए एक टाइप", "फंक्शन के लिए एक टाइप"],
        "answer_en": "A type that combines multiple types",
        "answer_hi": "एक टाइप जो एकाधिक टाइप को संयोजित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you define an intersection type?",
        "question_hi": "इंटरसेक्शन टाइप कैसे परिभाषित करते हैं?",
        "options_en": ["TypeA & TypeB", "TypeA | TypeB", "TypeA + TypeB", "TypeA and TypeB"],
        "options_hi": ["TypeA & TypeB", "TypeA | TypeB", "TypeA + TypeB", "TypeA and TypeB"],
        "answer_en": "TypeA & TypeB",
        "answer_hi": "TypeA & TypeB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is type assertion?",
        "question_hi": "टाइप असर्शन क्या है?",
        "options_en": ["Telling the compiler about the type", "Runtime type checking", "Type conversion", "Type declaration"],
        "options_hi": ["कंपाइलर को टाइप के बारे में बताना", "रनटाइम टाइप चेकिंग", "टाइप कन्वर्जन", "टाइप डिक्लेरेशन"],
        "answer_en": "Telling the compiler about the type",
        "answer_hi": "कंपाइलर को टाइप के बारे में बताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you perform type assertion?",
        "question_hi": "टाइप असर्शन कैसे करते हैं?",
        "options_en": ["value as string", "<string>value", "Both A and B", "assert value is string"],
        "options_hi": ["value as string", "<string>value", "A और B दोनों", "assert value is string"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What are generics in TypeScript?",
        "question_hi": "TypeScript में जेनेरिक क्या हैं?",
        "options_en": ["Creating reusable components", "Specific types", "Fixed types", "Basic types"],
        "options_hi": ["पुन: प्रयोज्य घटक बनाना", "विशिष्ट प्रकार", "फिक्स्ड टाइप", "बेसिक टाइप"],
        "answer_en": "Creating reusable components",
        "answer_hi": "पुन: प्रयोज्य घटक बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you define a generic function?",
        "question_hi": "जेनेरिक फंक्शन कैसे परिभाषित करते हैं?",
        "options_en": ["function identity<T>(arg: T): T", "function identity<T>(arg): T", "function identity(arg: T): T", "function<T> identity(arg: T): T"],
        "options_hi": ["function identity<T>(arg: T): T", "function identity<T>(arg): T", "function identity(arg: T): T", "function<T> identity(arg: T): T"],
        "answer_en": "function identity<T>(arg: T): T",
        "answer_hi": "function identity<T>(arg: T): T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is a generic constraint?",
        "question_hi": "जेनेरिक कंस्ट्रेंट क्या है?",
        "options_en": ["Restricting generic type parameters", "Making generics required", "Generic type checking", "All of the above"],
        "options_hi": ["जेनेरिक टाइप पैरामीटर को रिस्ट्रिक्ट करना", "जेनेरिक को आवश्यक बनाना", "जेनेरिक टाइप चेकिंग", "उपरोक्त सभी"],
        "answer_en": "Restricting generic type parameters",
        "answer_hi": "जेनेरिक टाइप पैरामीटर को रिस्ट्रिक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you add a constraint to a generic?",
        "question_hi": "जेनेरिक में कंस्ट्रेंट कैसे जोड़ते हैं?",
        "options_en": ["<T extends constraint>", "<T: constraint>", "<T implements constraint>", "<T with constraint>"],
        "options_hi": ["<T extends constraint>", "<T: constraint>", "<T implements constraint>", "<T with constraint>"],
        "answer_en": "<T extends constraint>",
        "answer_hi": "<T extends constraint>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What are classes in TypeScript?",
        "question_hi": "TypeScript में क्लास क्या हैं?",
        "options_en": ["Blueprints for creating objects", "Functions", "Interfaces", "Types"],
        "options_hi": ["ऑब्जेक्ट बनाने के लिए ब्लूप्रिंट", "फंक्शन", "इंटरफेस", "टाइप"],
        "answer_en": "Blueprints for creating objects",
        "answer_hi": "ऑब्जेक्ट बनाने के लिए ब्लूप्रिंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you define a class?",
        "question_hi": "क्लास कैसे परिभाषित करते हैं?",
        "options_en": ["class Person { }", "class = Person { }", "define class Person { }", "Person class { }"],
        "options_hi": ["class Person { }", "class = Person { }", "define class Person { }", "Person class { }"],
        "answer_en": "class Person { }",
        "answer_hi": "class Person { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What are access modifiers?",
        "question_hi": "एक्सेस मॉडिफायर क्या हैं?",
        "options_en": ["public, private, protected", "static, readonly", "abstract, sealed", "All of the above"],
        "options_hi": ["public, private, protected", "static, readonly", "abstract, sealed", "उपरोक्त सभी"],
        "answer_en": "public, private, protected",
        "answer_hi": "public, private, protected",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does 'public' mean?",
        "question_hi": "'public' का क्या अर्थ है?",
        "options_en": ["Accessible from anywhere", "Only within class", "Only within class and subclasses", "Not accessible"],
        "options_hi": ["कहीं से भी एक्सेसिबल", "केवल क्लास के भीतर", "केवल क्लास और सबक्लास के भीतर", "एक्सेसिबल नहीं"],
        "answer_en": "Accessible from anywhere",
        "answer_hi": "कहीं से भी एक्सेसिबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What does 'private' mean?",
        "question_hi": "'private' का क्या अर्थ है?",
        "options_en": ["Only within class", "Accessible from anywhere", "Only within class and subclasses", "Not accessible"],
        "options_hi": ["केवल क्लास के भीतर", "कहीं से भी एक्सेसिबल", "केवल क्लास और सबक्लास के भीतर", "एक्सेसिबल नहीं"],
        "answer_en": "Only within class",
        "answer_hi": "केवल क्लास के भीतर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does 'protected' mean?",
        "question_hi": "'protected' का क्या अर्थ है?",
        "options_en": ["Only within class and subclasses", "Only within class", "Accessible from anywhere", "Not accessible"],
        "options_hi": ["केवल क्लास और सबक्लास के भीतर", "केवल क्लास के भीतर", "कहीं से भी एक्सेसिबल", "एक्सेसिबल नहीं"],
        "answer_en": "Only within class and subclasses",
        "answer_hi": "केवल क्लास और सबक्लास के भीतर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is 'readonly' modifier?",
        "question_hi": "'readonly' मॉडिफायर क्या है?",
        "options_en": ["Makes property immutable", "Makes property private", "Makes property optional", "Makes property public"],
        "options_hi": ["प्रॉपर्टी को अपरिवर्तनीय बनाता है", "प्रॉपर्टी को प्राइवेट बनाता है", "प्रॉपर्टी को ऑप्शनल बनाता है", "प्रॉपर्टी को पब्लिक बनाता है"],
        "answer_en": "Makes property immutable",
        "answer_hi": "प्रॉपर्टी को अपरिवर्तनीय बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is a static property?",
        "question_hi": "स्टैटिक प्रॉपर्टी क्या है?",
        "options_en": ["Property on class itself, not instances", "Property on instances", "Immutable property", "Private property"],
        "options_hi": ["क्लास पर प्रॉपर्टी, इंस्टेंस पर नहीं", "इंस्टेंस पर प्रॉपर्टी", "अपरिवर्तनीय प्रॉपर्टी", "प्राइवेट प्रॉपर्टी"],
        "answer_en": "Property on class itself, not instances",
        "answer_hi": "क्लास पर प्रॉपर्टी, इंस्टेंस पर नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you define a static property?",
        "question_hi": "स्टैटिक प्रॉपर्टी कैसे परिभाषित करते हैं?",
        "options_en": ["static count: number;", "count static: number;", "static: count number;", "count: static number;"],
        "options_hi": ["static count: number;", "count static: number;", "static: count number;", "count: static number;"],
        "answer_en": "static count: number;",
        "answer_hi": "static count: number;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is an abstract class?",
        "question_hi": "एब्स्ट्रैक्ट क्लास क्या है?",
        "options_en": ["Class that cannot be instantiated", "Class with no methods", "Class with only properties", "Class that is final"],
        "options_hi": ["ऐसी क्लास जो इंस्टेंटिएट नहीं की जा सकती", "बिना मेथड वाली क्लास", "केवल प्रॉपर्टी वाली क्लास", "फाइनल क्लास"],
        "answer_en": "Class that cannot be instantiated",
        "answer_hi": "ऐसी क्लास जो इंस्टेंटिएट नहीं की जा सकती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you define an abstract class?",
        "question_hi": "एब्स्ट्रैक्ट क्लास कैसे परिभाषित करते हैं?",
        "options_en": ["abstract class Animal { }", "class abstract Animal { }", "abstract: class Animal { }", "class Animal abstract { }"],
        "options_hi": ["abstract class Animal { }", "class abstract Animal { }", "abstract: class Animal { }", "class Animal abstract { }"],
        "answer_en": "abstract class Animal { }",
        "answer_hi": "abstract class Animal { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is an abstract method?",
        "question_hi": "एब्स्ट्रैक्ट मेथड क्या है?",
        "options_en": ["Method without implementation", "Method that must be implemented", "Both A and B", "Concrete method"],
        "options_hi": ["बिना इम्प्लीमेंटेशन के मेथड", "मेथड जिसे इम्प्लीमेंट करना होगा", "A और B दोनों", "कंक्रीट मेथड"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you define an abstract method?",
        "question_hi": "एब्स्ट्रैक्ट मेथड कैसे परिभाषित करते हैं?",
        "options_en": ["abstract makeSound(): void;", "makeSound abstract(): void;", "abstract: makeSound(): void;", "makeSound(): abstract void;"],
        "options_hi": ["abstract makeSound(): void;", "makeSound abstract(): void;", "abstract: makeSound(): void;", "makeSound(): abstract void;"],
        "answer_en": "abstract makeSound(): void;",
        "answer_hi": "abstract makeSound(): void;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is inheritance?",
        "question_hi": "इनहेरिटेंस क्या है?",
        "options_en": ["Creating new classes from existing ones", "Creating interfaces", "Creating types", "Creating functions"],
        "options_hi": ["मौजूदा क्लास से नई क्लास बनाना", "इंटरफेस बनाना", "टाइप बनाना", "फंक्शन बनाना"],
        "answer_en": "Creating new classes from existing ones",
        "answer_hi": "मौजूदा क्लास से नई क्लास बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you implement inheritance?",
        "question_hi": "इनहेरिटेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["class Dog extends Animal { }", "class Dog : Animal { }", "class Dog implements Animal { }", "class Dog -> Animal { }"],
        "options_hi": ["class Dog extends Animal { }", "class Dog : Animal { }", "class Dog implements Animal { }", "class Dog -> Animal { }"],
        "answer_en": "class Dog extends Animal { }",
        "answer_hi": "class Dog extends Animal { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is method overriding?",
        "question_hi": "मेथड ओवरराइडिंग क्या है?",
        "options_en": ["Redefining method in subclass", "Creating new method", "Hiding method", "Deleting method"],
        "options_hi": ["सबक्लास में मेथड को पुन: परिभाषित करना", "नई मेथड बनाना", "मेथड को छिपाना", "मेथड को डिलीट करना"],
        "answer_en": "Redefining method in subclass",
        "answer_hi": "सबक्लास में मेथड को पुन: परिभाषित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the 'super' keyword?",
        "question_hi": "'super' कीवर्ड क्या है?",
        "options_en": ["Refers to parent class", "Refers to current class", "Refers to subclass", "Refers to interface"],
        "options_hi": ["पैरेंट क्लास को रेफर करता है", "करंट क्लास को रेफर करता है", "सबक्लास को रेफर करता है", "इंटरफेस को रेफर करता है"],
        "answer_en": "Refers to parent class",
        "answer_hi": "पैरेंट क्लास को रेफर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What are modules in TypeScript?",
        "question_hi": "TypeScript में मॉड्यूल क्या हैं?",
        "options_en": ["Way to organize code", "Classes", "Functions", "Types"],
        "options_hi": ["कोड को व्यवस्थित करने का तरीका", "क्लास", "फंक्शन", "टाइप"],
        "answer_en": "Way to organize code",
        "answer_hi": "कोड को व्यवस्थित करने का तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you export a function?",
        "question_hi": "फंक्शन को कैसे एक्सपोर्ट करते हैं?",
        "options_en": ["export function name() { }", "function export name() { }", "export: function name() { }", "function name() export { }"],
        "options_hi": ["export function name() { }", "function export name() { }", "export: function name() { }", "function name() export { }"],
        "answer_en": "export function name() { }",
        "answer_hi": "export function name() { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you import a function?",
        "question_hi": "फंक्शन को कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import { name } from './module'", "import name from './module'", "from './module' import name", "import './module' as name"],
        "options_hi": ["import { name } from './module'", "import name from './module'", "from './module' import name", "import './module' as name"],
        "answer_en": "import { name } from './module'",
        "answer_hi": "import { name } from './module'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is default export?",
        "question_hi": "डिफॉल्ट एक्सपोर्ट क्या है?",
        "options_en": ["Main export of a module", "Optional export", "Hidden export", "Private export"],
        "options_hi": ["मॉड्यूल का मुख्य एक्सपोर्ट", "ऑप्शनल एक्सपोर्ट", "हिडन एक्सपोर्ट", "प्राइवेट एक्सपोर्ट"],
        "answer_en": "Main export of a module",
        "answer_hi": "मॉड्यूल का मुख्य एक्सपोर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you do default export?",
        "question_hi": "डिफॉल्ट एक्सपोर्ट कैसे करते हैं?",
        "options_en": ["export default function() { }", "default export function() { }", "export function default() { }", "function export default() { }"],
        "options_hi": ["export default function() { }", "default export function() { }", "export function default() { }", "function export default() { }"],
        "answer_en": "export default function() { }",
        "answer_hi": "export default function() { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you import default export?",
        "question_hi": "डिफॉल्ट एक्सपोर्ट को कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import name from './module'", "import { name } from './module'", "import default name from './module'", "from './module' import default name"],
        "options_hi": ["import name from './module'", "import { name } from './module'", "import default name from './module'", "from './module' import default name"],
        "answer_en": "import name from './module'",
        "answer_hi": "import name from './module'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What are namespaces?",
        "question_hi": "नेमस्पेस क्या हैं?",
        "options_en": ["Logical grouping of code", "Physical file grouping", "Modules", "Classes"],
        "options_hi": ["कोड का लॉजिकल ग्रुपिंग", "फिजिकल फाइल ग्रुपिंग", "मॉड्यूल", "क्लास"],
        "answer_en": "Logical grouping of code",
        "answer_hi": "कोड का लॉजिकल ग्रुपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you define a namespace?",
        "question_hi": "नेमस्पेस कैसे परिभाषित करते हैं?",
        "options_en": ["namespace MyNamespace { }", "namespace = MyNamespace { }", "define namespace MyNamespace { }", "MyNamespace namespace { }"],
        "options_hi": ["namespace MyNamespace { }", "namespace = MyNamespace { }", "define namespace MyNamespace { }", "MyNamespace namespace { }"],
        "answer_en": "namespace MyNamespace { }",
        "answer_hi": "namespace MyNamespace { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What are decorators?",
        "question_hi": "डेकोरेटर क्या हैं?",
        "options_en": ["Special kind of declarations", "Functions", "Classes", "Interfaces"],
        "options_hi": ["विशेष प्रकार की डिक्लेरेशन", "फंक्शन", "क्लास", "इंटरफेस"],
        "answer_en": "Special kind of declarations",
        "answer_hi": "विशेष प्रकार की डिक्लेरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the syntax for decorators?",
        "question_hi": "डेकोरेटर के लिए सिंटैक्स क्या है?",
        "options_en": ["@decorator", "#decorator", "$decorator", "&decorator"],
        "options_hi": ["@decorator", "#decorator", "$decorator", "&decorator"],
        "answer_en": "@decorator",
        "answer_hi": "@decorator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What are type guards?",
        "question_hi": "टाइप गार्ड क्या हैं?",
        "options_en": ["Runtime checks that narrow types", "Compile time checks", "Type declarations", "Type conversions"],
        "options_hi": ["रनटाइम चेक जो टाइप को नैरो करते हैं", "कंपाइल टाइम चेक", "टाइप डिक्लेरेशन", "टाइप कन्वर्जन"],
        "answer_en": "Runtime checks that narrow types",
        "answer_hi": "रनटाइम चेक जो टाइप को नैरो करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is 'typeof' type guard?",
        "question_hi": "'typeof' टाइप गार्ड क्या है?",
        "options_en": ["Checks type using typeof operator", "Checks instance using instanceof", "Checks custom type", "All of the above"],
        "options_hi": ["typeof ऑपरेटर का उपयोग करके टाइप चेक करता है", "instanceof का उपयोग करके इंस्टेंस चेक करता है", "कस्टम टाइप चेक करता है", "उपरोक्त सभी"],
        "answer_en": "Checks type using typeof operator",
        "answer_hi": "typeof ऑपरेटर का उपयोग करके टाइप चेक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is 'instanceof' type guard?",
        "question_hi": "'instanceof' टाइप गार्ड क्या है?",
        "options_en": ["Checks instance using instanceof operator", "Checks type using typeof", "Checks custom type", "All of the above"],
        "options_hi": ["instanceof ऑपरेटर का उपयोग करके इंस्टेंस चेक करता है", "typeof का उपयोग करके टाइप चेक करता है", "कस्टम टाइप चेक करता है", "उपरोक्त सभी"],
        "answer_en": "Checks instance using instanceof operator",
        "answer_hi": "instanceof ऑपरेटर का उपयोग करके इंस्टेंस चेक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What are utility types?",
        "question_hi": "यूटिलिटी टाइप क्या हैं?",
        "options_en": ["Built-in generic types for transformation", "Basic types", "Function types", "Class types"],
        "options_hi": ["ट्रांसफॉर्मेशन के लिए बिल्ट-इन जेनेरिक टाइप", "बेसिक टाइप", "फंक्शन टाइप", "क्लास टाइप"],
        "answer_en": "Built-in generic types for transformation",
        "answer_hi": "ट्रांसफॉर्मेशन के लिए बिल्ट-इन जेनेरिक टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is Partial<T>?",
        "question_hi": "Partial<T> क्या है?",
        "options_en": ["Makes all properties optional", "Makes all properties required", "Makes properties readonly", "Picks specific properties"],
        "options_hi": ["सभी प्रॉपर्टी को ऑप्शनल बनाता है", "सभी प्रॉपर्टी को आवश्यक बनाता है", "प्रॉपर्टी को रीडओनली बनाता है", "विशिष्ट प्रॉपर्टी को चुनता है"],
        "answer_en": "Makes all properties optional",
        "answer_hi": "सभी प्रॉपर्टी को ऑप्शनल बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is Required<T>?",
        "question_hi": "Required<T> क्या है?",
        "options_en": ["Makes all properties required", "Makes all properties optional", "Makes properties readonly", "Picks specific properties"],
        "options_hi": ["सभी प्रॉपर्टी को आवश्यक बनाता है", "सभी प्रॉपर्टी को ऑप्शनल बनाता है", "प्रॉपर्टी को रीडओनली बनाता है", "विशिष्ट प्रॉपर्टी को चुनता है"],
        "answer_en": "Makes all properties required",
        "answer_hi": "सभी प्रॉपर्टी को आवश्यक बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is Readonly<T>?",
        "question_hi": "Readonly<T> क्या है?",
        "options_en": ["Makes all properties readonly", "Makes all properties optional", "Makes all properties required", "Picks specific properties"],
        "options_hi": ["सभी प्रॉपर्टी को रीडओनली बनाता है", "सभी प्रॉपर्टी को ऑप्शनल बनाता है", "सभी प्रॉपर्टी को आवश्यक बनाता है", "विशिष्ट प्रॉपर्टी को चुनता है"],
        "answer_en": "Makes all properties readonly",
        "answer_hi": "सभी प्रॉपर्टी को रीडओनली बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is Record<K, T>?",
        "question_hi": "Record<K, T> क्या है?",
        "options_en": ["Creates object type with given keys and type", "Creates array type", "Creates function type", "Creates tuple type"],
        "options_hi": ["दी गई कुंजी और टाइप के साथ ऑब्जेक्ट टाइप बनाता है", "ऐरे टाइप बनाता है", "फंक्शन टाइप बनाता है", "टुपल टाइप बनाता है"],
        "answer_en": "Creates object type with given keys and type",
        "answer_hi": "दी गई कुंजी और टाइप के साथ ऑब्जेक्ट टाइप बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is Pick<T, K>?",
        "question_hi": "Pick<T, K> क्या है?",
        "options_en": ["Picks specific properties from T", "Makes properties optional", "Makes properties required", "Makes properties readonly"],
        "options_hi": ["T से विशिष्ट प्रॉपर्टी को चुनता है", "प्रॉपर्टी को ऑप्शनल बनाता है", "प्रॉपर्टी को आवश्यक बनाता है", "प्रॉपर्टी को रीडओनली बनाता है"],
        "answer_en": "Picks specific properties from T",
        "answer_hi": "T से विशिष्ट प्रॉपर्टी को चुनता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is Omit<T, K>?",
        "question_hi": "Omit<T, K> क्या है?",
        "options_en": ["Omits specific properties from T", "Picks specific properties", "Makes properties optional", "Makes properties required"],
        "options_hi": ["T से विशिष्ट प्रॉपर्टी को छोड़ता है", "विशिष्ट प्रॉपर्टी को चुनता है", "प्रॉपर्टी को ऑप्शनल बनाता है", "प्रॉपर्टी को आवश्यक बनाता है"],
        "answer_en": "Omits specific properties from T",
        "answer_hi": "T से विशिष्ट प्रॉपर्टी को छोड़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is Exclude<T, U>?",
        "question_hi": "Exclude<T, U> क्या है?",
        "options_en": ["Excludes types from T that are assignable to U", "Includes types from T", "Picks properties", "Omits properties"],
        "options_hi": ["T से उन टाइप को बाहर करता है जो U को असाइन करने योग्य हैं", "T से टाइप को शामिल करता है", "प्रॉपर्टी को चुनता है", "प्रॉपर्टी को छोड़ता है"],
        "answer_en": "Excludes types from T that are assignable to U",
        "answer_hi": "T से उन टाइप को बाहर करता है जो U को असाइन करने योग्य हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is Extract<T, U>?",
        "question_hi": "Extract<T, U> क्या है?",
        "options_en": ["Extracts types from T that are assignable to U", "Excludes types from T", "Picks properties", "Omits properties"],
        "options_hi": ["T से उन टाइप को निकालता है जो U को असाइन करने योग्य हैं", "T से टाइप को बाहर करता है", "प्रॉपर्टी को चुनता है", "प्रॉपर्टी को छोड़ता है"],
        "answer_en": "Extracts types from T that are assignable to U",
        "answer_hi": "T से उन टाइप को निकालता है जो U को असाइन करने योग्य हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is NonNullable<T>?",
        "question_hi": "NonNullable<T> क्या है?",
        "options_en": ["Excludes null and undefined from T", "Includes null and undefined", "Makes properties optional", "Makes properties required"],
        "options_hi": ["T से null और undefined को बाहर करता है", "null और undefined को शामिल करता है", "प्रॉपर्टी को ऑप्शनल बनाता है", "प्रॉपर्टी को आवश्यक बनाता है"],
        "answer_en": "Excludes null and undefined from T",
        "answer_hi": "T से null और undefined को बाहर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is ReturnType<T>?",
        "question_hi": "ReturnType<T> क्या है?",
        "options_en": ["Gets return type of function type T", "Gets parameter types", "Gets instance type", "Gets constructor type"],
        "options_hi": ["फंक्शन टाइप T के रिटर्न टाइप को प्राप्त करता है", "पैरामीटर टाइप प्राप्त करता है", "इंस्टेंस टाइप प्राप्त करता है", "कंस्ट्रक्टर टाइप प्राप्त करता है"],
        "answer_en": "Gets return type of function type T",
        "answer_hi": "फंक्शन टाइप T के रिटर्न टाइप को प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is Parameters<T>?",
        "question_hi": "Parameters<T> क्या है?",
        "options_en": ["Gets parameter types of function type T", "Gets return type", "Gets instance type", "Gets constructor type"],
        "options_hi": ["फंक्शन टाइप T के पैरामीटर टाइप को प्राप्त करता है", "रिटर्न टाइप प्राप्त करता है", "इंस्टेंस टाइप प्राप्त करता है", "कंस्ट्रक्टर टाइप प्राप्त करता है"],
        "answer_en": "Gets parameter types of function type T",
        "answer_hi": "फंक्शन टाइप T के पैरामीटर टाइप को प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is ConstructorParameters<T>?",
        "question_hi": "ConstructorParameters<T> क्या है?",
        "options_en": ["Gets constructor parameter types", "Gets method parameter types", "Gets return type", "Gets instance type"],
        "options_hi": ["कंस्ट्रक्टर पैरामीटर टाइप प्राप्त करता है", "मेथड पैरामीटर टाइप प्राप्त करता है", "रिटर्न टाइप प्राप्त करता है", "इंस्टेंस टाइप प्राप्त करता है"],
        "answer_en": "Gets constructor parameter types",
        "answer_hi": "कंस्ट्रक्टर पैरामीटर टाइप प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is InstanceType<T>?",
        "question_hi": "InstanceType<T> क्या है?",
        "options_en": ["Gets instance type of constructor", "Gets return type", "Gets parameter types", "Gets constructor type"],
        "options_hi": ["कंस्ट्रक्टर का इंस्टेंस टाइप प्राप्त करता है", "रिटर्न टाइप प्राप्त करता है", "पैरामीटर टाइप प्राप्त करता है", "कंस्ट्रक्टर टाइप प्राप्त करता है"],
        "answer_en": "Gets instance type of constructor",
        "answer_hi": "कंस्ट्रक्टर का इंस्टेंस टाइप प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is ThisParameterType<T>?",
        "question_hi": "ThisParameterType<T> क्या है?",
        "options_en": ["Gets type of 'this' parameter", "Gets return type", "Gets parameter types", "Gets instance type"],
        "options_hi": ["'this' पैरामीटर का टाइप प्राप्त करता है", "रिटर्न टाइप प्राप्त करता है", "पैरामीटर टाइप प्राप्त करता है", "इंस्टेंस टाइप प्राप्त करता है"],
        "answer_en": "Gets type of 'this' parameter",
        "answer_hi": "'this' पैरामीटर का टाइप प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is OmitThisParameter<T>?",
        "question_hi": "OmitThisParameter<T> क्या है?",
        "options_en": ["Removes 'this' parameter from function type", "Adds 'this' parameter", "Gets 'this' parameter", "Changes 'this' parameter"],
        "options_hi": ["फंक्शन टाइप से 'this' पैरामीटर को हटाता है", "'this' पैरामीटर जोड़ता है", "'this' पैरामीटर प्राप्त करता है", "'this' पैरामीटर बदलता है"],
        "answer_en": "Removes 'this' parameter from function type",
        "answer_hi": "फंक्शन टाइप से 'this' पैरामीटर को हटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What are conditional types?",
        "question_hi": "कंडीशनल टाइप क्या हैं?",
        "options_en": ["Types that depend on conditions", "Basic types", "Function types", "Class types"],
        "options_hi": ["ऐसे टाइप जो शर्तों पर निर्भर करते हैं", "बेसिक टाइप", "फंक्शन टाइप", "क्लास टाइप"],
        "answer_en": "Types that depend on conditions",
        "answer_hi": "ऐसे टाइप जो शर्तों पर निर्भर करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the syntax for conditional types?",
        "question_hi": "कंडीशनल टाइप के लिए सिंटैक्स क्या है?",
        "options_en": ["T extends U ? X : Y", "T extends U : X else Y", "if T extends U then X else Y", "T extends U -> X : Y"],
        "options_hi": ["T extends U ? X : Y", "T extends U : X else Y", "if T extends U then X else Y", "T extends U -> X : Y"],
        "answer_en": "T extends U ? X : Y",
        "answer_hi": "T extends U ? X : Y",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is 'infer' keyword in conditional types?",
        "question_hi": "कंडीशनल टाइप में 'infer' कीवर्ड क्या है?",
        "options_en": ["Infers types within conditional types", "Checks conditions", "Defines types", "Creates types"],
        "options_hi": ["कंडीशनल टाइप के भीतर टाइप को इन्फर करता है", "शर्तों की जाँच करता है", "टाइप को परिभाषित करता है", "टाइप बनाता है"],
        "answer_en": "Infers types within conditional types",
        "answer_hi": "कंडीशनल टाइप के भीतर टाइप को इन्फर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What are mapped types?",
        "question_hi": "मैप्ड टाइप क्या हैं?",
        "options_en": ["Types that transform properties", "Basic types", "Function types", "Class types"],
        "options_hi": ["ऐसे टाइप जो प्रॉपर्टी को ट्रांसफॉर्म करते हैं", "बेसिक टाइप", "फंक्शन टाइप", "क्लास टाइप"],
        "answer_en": "Types that transform properties",
        "answer_hi": "ऐसे टाइप जो प्रॉपर्टी को ट्रांसफॉर्म करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the syntax for mapped types?",
        "question_hi": "मैप्ड टाइप के लिए सिंटैक्स क्या है?",
        "options_en": ["{ [K in keyof T]: U }", "{ K in keyof T: U }", "{ [K: keyof T]: U }", "{ for K in keyof T: U }"],
        "options_hi": ["{ [K in keyof T]: U }", "{ K in keyof T: U }", "{ [K: keyof T]: U }", "{ for K in keyof T: U }"],
        "answer_en": "{ [K in keyof T]: U }",
        "answer_hi": "{ [K in keyof T]: U }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What are template literal types?",
        "question_hi": "टेम्पलेट लिटरल टाइप क्या हैं?",
        "options_en": ["String types with patterns", "Number types", "Boolean types", "Object types"],
        "options_hi": ["पैटर्न वाले स्ट्रिंग टाइप", "नंबर टाइप", "बूलियन टाइप", "ऑब्जेक्ट टाइप"],
        "answer_en": "String types with patterns",
        "answer_hi": "पैटर्न वाले स्ट्रिंग टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the syntax for template literal types?",
        "question_hi": "टेम्पलेट लिटरल टाइप के लिए सिंटैक्स क्या है?",
        "options_en": ["`Hello ${World}`", "template `Hello ${World}`", "`Hello ${string}`", "All of the above"],
        "options_hi": ["`Hello ${World}`", "template `Hello ${World}`", "`Hello ${string}`", "उपरोक्त सभी"],
        "answer_en": "`Hello ${string}`",
        "answer_hi": "`Hello ${string}`",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is 'keyof' operator?",
        "question_hi": "'keyof' ऑपरेटर क्या है?",
        "options_en": ["Gets keys of object type", "Gets values of object", "Checks key existence", "Creates new keys"],
        "options_hi": ["ऑब्जेक्ट टाइप की कुंजियाँ प्राप्त करता है", "ऑब्जेक्ट के मान प्राप्त करता है", "कुंजी के अस्तित्व की जाँच करता है", "नई कुंजियाँ बनाता है"],
        "answer_en": "Gets keys of object type",
        "answer_hi": "ऑब्जेक्ट टाइप की कुंजियाँ प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is 'typeof' operator in types?",
        "question_hi": "टाइप में 'typeof' ऑपरेटर क्या है?",
        "options_en": ["Gets type of value", "Gets value of type", "Checks type", "Creates type"],
        "options_hi": ["मान का टाइप प्राप्त करता है", "टाइप का मान प्राप्त करता है", "टाइप की जाँच करता है", "टाइप बनाता है"],
        "answer_en": "Gets type of value",
        "answer_hi": "मान का टाइप प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is index access type?",
        "question_hi": "इंडेक्स एक्सेस टाइप क्या है?",
        "options_en": ["Accessing type using index", "Accessing value using index", "Creating index", "Deleting index"],
        "options_hi": ["इंडेक्स का उपयोग करके टाइप एक्सेस करना", "इंडेक्स का उपयोग करके मान एक्सेस करना", "इंडेक्स बनाना", "इंडेक्स डिलीट करना"],
        "answer_en": "Accessing type using index",
        "answer_hi": "इंडेक्स का उपयोग करके टाइप एक्सेस करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the syntax for index access type?",
        "question_hi": "इंडेक्स एक्सेस टाइप के लिए सिंटैक्स क्या है?",
        "options_en": ["T[K]", "T.K", "T->K", "T(K)"],
        "options_hi": ["T[K]", "T.K", "T->K", "T(K)"],
        "answer_en": "T[K]",
        "answer_hi": "T[K]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What are recursive types?",
        "question_hi": "रिकर्सिव टाइप क्या हैं?",
        "options_en": ["Types that reference themselves", "Basic types", "Function types", "Class types"],
        "options_hi": ["ऐसे टाइप जो स्वयं को रेफरेंस करते हैं", "बेसिक टाइप", "फंक्शन टाइप", "क्लास टाइप"],
        "answer_en": "Types that reference themselves",
        "answer_hi": "ऐसे टाइप जो स्वयं को रेफरेंस करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you define a recursive type?",
        "question_hi": "रिकर्सिव टाइप कैसे परिभाषित करते हैं?",
        "options_en": ["type Tree = { value: number; children: Tree[] }", "type Tree = { value: number; children: Array<Tree> }", "Both A and B", "None of the above"],
        "options_hi": ["type Tree = { value: number; children: Tree[] }", "type Tree = { value: number; children: Array<Tree> }", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is 'asserts' keyword?",
        "question_hi": "'asserts' कीवर्ड क्या है?",
        "options_en": ["Assertion functions", "Type assertions", "Value assertions", "All of the above"],
        "options_hi": ["असर्शन फंक्शन", "टाइप असर्शन", "वैल्यू असर्शन", "उपरोक्त सभी"],
        "answer_en": "Assertion functions",
        "answer_hi": "असर्शन फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is 'satisfies' operator?",
        "question_hi": "'satisfies' ऑपरेटर क्या है?",
        "options_en": ["Checks if value satisfies type", "Checks if type satisfies value", "Creates type", "Deletes type"],
        "options_hi": ["जाँच करता है कि मान टाइप को संतुष्ट करता है", "जाँच करता है कि टाइप मान को संतुष्ट करता है", "टाइप बनाता है", "टाइप डिलीट करता है"],
        "answer_en": "Checks if value satisfies type",
        "answer_hi": "जाँच करता है कि मान टाइप को संतुष्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is 'const' assertion?",
        "question_hi": "'const' असर्शन क्या है?",
        "options_en": ["Makes values readonly literals", "Makes variables constant", "Both A and B", "None of the above"],
        "options_hi": ["मानों को रीडओनली लिटरल बनाता है", "वेरिएबल को कॉन्स्टेंट बनाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Makes values readonly literals",
        "answer_hi": "मानों को रीडओनली लिटरल बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is 'as const' used for?",
        "question_hi": "'as const' का उपयोग किसके लिए किया जाता है?",
        "options_en": ["To make values readonly literals", "To make variables constant", "To assert types", "To check types"],
        "options_hi": ["मानों को रीडओनली लिटरल बनाने के लिए", "वेरिएबल को कॉन्स्टेंट बनाने के लिए", "टाइप को असर्ट करने के लिए", "टाइप की जाँच करने के लिए"],
        "answer_en": "To make values readonly literals",
        "answer_hi": "मानों को रीडओनली लिटरल बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What are declaration files?",
        "question_hi": "डिक्लेरेशन फाइल क्या हैं?",
        "options_en": ["Files with type declarations", "Files with implementation", "Files with tests", "Files with configuration"],
        "options_hi": ["टाइप डिक्लेरेशन वाली फाइल", "इम्प्लीमेंटेशन वाली फाइल", "टेस्ट वाली फाइल", "कॉन्फिगरेशन वाली फाइल"],
        "answer_en": "Files with type declarations",
        "answer_hi": "टाइप डिक्लेरेशन वाली फाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the extension for declaration files?",
        "question_hi": "डिक्लेरेशन फाइल के लिए एक्सटेंशन क्या है?",
        "options_en": [".d.ts", ".declaration", ".types", ".d"],
        "options_hi": [".d.ts", ".declaration", ".types", ".d"],
        "answer_en": ".d.ts",
        "answer_hi": ".d.ts",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 'declare' keyword?",
        "question_hi": "'declare' कीवर्ड क्या है?",
        "options_en": ["Declares types without implementation", "Implements types", "Defines values", "Creates values"],
        "options_hi": ["बिना इम्प्लीमेंटेशन के टाइप घोषित करता है", "टाइप को इम्प्लीमेंट करता है", "मान को परिभाषित करता है", "मान बनाता है"],
        "answer_en": "Declares types without implementation",
        "answer_hi": "बिना इम्प्लीमेंटेशन के टाइप घोषित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is global declaration?",
        "question_hi": "ग्लोबल डिक्लेरेशन क्या है?",
        "options_en": ["Declaration in global scope", "Declaration in local scope", "Declaration in module", "Declaration in function"],
        "options_hi": ["ग्लोबल स्कोप में डिक्लेरेशन", "लोकल स्कोप में डिक्लेरेशन", "मॉड्यूल में डिक्लेरेशन", "फंक्शन में डिक्लेरेशन"],
        "answer_en": "Declaration in global scope",
        "answer_hi": "ग्लोबल स्कोप में डिक्लेरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is module declaration?",
        "question_hi": "मॉड्यूल डिक्लेरेशन क्या है?",
        "options_en": ["Declaration for external modules", "Declaration for internal modules", "Declaration for classes", "Declaration for functions"],
        "options_hi": ["एक्सटर्नल मॉड्यूल के लिए डिक्लेरेशन", "इंटर्नल मॉड्यूल के लिए डिक्लेरेशन", "क्लास के लिए डिक्लेरेशन", "फंक्शन के लिए डिक्लेरेशन"],
        "answer_en": "Declaration for external modules",
        "answer_hi": "एक्सटर्नल मॉड्यूल के लिए डिक्लेरेशन",
        "attempted": false,
        "selected": ""
    }
];

let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix
   questions[index].visited = true;
    document.getElementById("question").textContent =
       `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
       ` Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

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

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray"; // default: not visited

        if (i === currentQuestion) {
            color = "blue"; // current question
        } 
        else if (q.attempted) {
            color = "green"; // answered
        } 
        else if (q.visited) {
            color = "white"; // visited but not answered
        }

        nav.innerHTML += `
            <div class="circle" style="background:${color}; border:1px solid black;"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};