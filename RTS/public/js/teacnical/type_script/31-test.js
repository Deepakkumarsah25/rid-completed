const questions = [
    {
        "num": 1,
        "question_en": "What is TypeScript primarily used for?",
        "question_hi": "TypeScript मुख्य रूप से किसके लिए उपयोग किया जाता है?",
        "options_en": ["Adding static types to JavaScript", "Replacing JavaScript", "Creating web servers", "Database operations"],
        "options_hi": ["JavaScript में स्टैटिक टाइप जोड़ना", "JavaScript को बदलना", "वेब सर्वर बनाना", "डेटाबेस ऑपरेशन"],
        "answer_en": "Adding static types to JavaScript",
        "answer_hi": "JavaScript में स्टैटिक टाइप जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which company maintains TypeScript?",
        "question_hi": "TypeScript को कौन सी कंपनी मेंटेन करती है?",
        "options_en": ["Microsoft", "Google", "Facebook", "Mozilla"],
        "options_hi": ["माइक्रोसॉफ्ट", "गूगल", "फेसबुक", "मोज़िला"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What file extension is used for TypeScript files?",
        "question_hi": "TypeScript फाइलों के लिए किस फाइल एक्सटेंशन का उपयोग किया जाता है?",
        "options_en": [".ts", ".js", ".typescript", ".tsx"],
        "options_hi": [".ts", ".js", ".typescript", ".tsx"],
        "answer_en": ".ts",
        "answer_hi": ".ts",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you compile TypeScript to JavaScript?",
        "question_hi": "TypeScript को JavaScript में कैसे कंपाइल करते हैं?",
        "options_en": ["tsc command", "node command", "npm run build", "typescript compile"],
        "options_hi": ["tsc कमांड", "node कमांड", "npm run build", "typescript compile"],
        "answer_en": "tsc command",
        "answer_hi": "tsc कमांड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the TypeScript compiler called?",
        "question_hi": "TypeScript कंपाइलर को क्या कहा जाता है?",
        "options_en": ["tsc", "typescriptc", "ts-compiler", "type-compiler"],
        "options_hi": ["tsc", "typescriptc", "ts-compiler", "type-compiler"],
        "answer_en": "tsc",
        "answer_hi": "tsc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of the following is a basic TypeScript type?",
        "question_hi": "निम्नलिखित में से कौन सा एक बेसिक TypeScript टाइप है?",
        "options_en": ["string", "array", "list", "dictionary"],
        "options_hi": ["string", "array", "list", "dictionary"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How do you declare a variable with a type in TypeScript?",
        "question_hi": "TypeScript में टाइप के साथ वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["let name: string;", "string let name;", "let name string;", "var name: string;"],
        "options_hi": ["let name: string;", "string let name;", "let name string;", "var name: string;"],
        "answer_en": "let name: string;",
        "answer_hi": "let name: string;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the 'any' type used for?",
        "question_hi": "'any' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["When you don't know the type", "Only for numbers", "Only for strings", "For all types"],
        "options_hi": ["जब आप टाइप नहीं जानते", "केवल नंबर के लिए", "केवल स्ट्रिंग के लिए", "सभी टाइप के लिए"],
        "answer_en": "When you don't know the type",
        "answer_hi": "जब आप टाइप नहीं जानते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you define an array of numbers?",
        "question_hi": "नंबर की ऐरे कैसे डिफाइन करते हैं?",
        "options_en": ["number[]", "Array<number>", "Both A and B", "NumberArray"],
        "options_hi": ["number[]", "Array<number>", "A और B दोनों", "NumberArray"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is a tuple in TypeScript?",
        "question_hi": "TypeScript में टपल क्या है?",
        "options_en": ["Array with fixed types", "Array with same types", "Object with keys", "Function type"],
        "options_hi": ["फिक्स्ड टाइप वाली ऐरे", "समान टाइप वाली ऐरे", "कीज वाला ऑब्जेक्ट", "फंक्शन टाइप"],
        "answer_en": "Array with fixed types",
        "answer_hi": "फिक्स्ड टाइप वाली ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you define a tuple type?",
        "question_hi": "टपल टाइप कैसे डिफाइन करते हैं?",
        "options_en": ["[string, number]", "tuple(string, number)", "Array<string, number>", "(string, number)"],
        "options_hi": ["[string, number]", "tuple(string, number)", "Array<string, number>", "(string, number)"],
        "answer_en": "[string, number]",
        "answer_hi": "[string, number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is an enum?",
        "question_hi": "enum क्या है?",
        "options_en": ["Named constants", "Array type", "Function type", "Class type"],
        "options_hi": ["नामित कॉन्स्टेंट", "ऐरे टाइप", "फंक्शन टाइप", "क्लास टाइप"],
        "answer_en": "Named constants",
        "answer_hi": "नामित कॉन्स्टेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you define an enum?",
        "question_hi": "enum कैसे डिफाइन करते हैं?",
        "options_en": ["enum Color { Red, Green, Blue }", "enum = Color { Red, Green, Blue }", "define enum Color {}", "Color enum { Red }"],
        "options_hi": ["enum Color { Red, Green, Blue }", "enum = Color { Red, Green, Blue }", "define enum Color {}", "Color enum { Red }"],
        "answer_en": "enum Color { Red, Green, Blue }",
        "answer_hi": "enum Color { Red, Green, Blue }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the 'void' type?",
        "question_hi": "'void' टाइप क्या है?",
        "options_en": ["No return value", "Empty value", "Null value", "Undefined value"],
        "options_hi": ["कोई रिटर्न वैल्यू नहीं", "खाली वैल्यू", "null वैल्यू", "undefined वैल्यू"],
        "answer_en": "No return value",
        "answer_hi": "कोई रिटर्न वैल्यू नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the 'never' type?",
        "question_hi": "'never' टाइप क्या है?",
        "options_en": ["Value that never occurs", "Null value", "Undefined value", "Any value"],
        "options_hi": ["वैल्यू जो कभी नहीं आती", "null वैल्यू", "undefined वैल्यू", "कोई भी वैल्यू"],
        "answer_en": "Value that never occurs",
        "answer_hi": "वैल्यू जो कभी नहीं आती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you define a function type?",
        "question_hi": "फंक्शन टाइप कैसे डिफाइन करते हैं?",
        "options_en": ["(a: number) => number", "function(a: number): number", "Both A and B", "None"],
        "options_hi": ["(a: number) => number", "function(a: number): number", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is type inference?",
        "question_hi": "टाइप इन्फरेंस क्या है?",
        "options_en": ["Automatic type detection", "Manual type declaration", "Type checking", "Type conversion"],
        "options_hi": ["ऑटोमैटिक टाइप डिटेक्शन", "मैनुअल टाइप डिक्लेरेशन", "टाइप चेकिंग", "टाइप कन्वर्जन"],
        "answer_en": "Automatic type detection",
        "answer_hi": "ऑटोमैटिक टाइप डिटेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you define an interface?",
        "question_hi": "इंटरफेस कैसे डिफाइन करते हैं?",
        "options_en": ["interface Person { name: string }", "interface = Person { name: string }", "define interface Person {}", "Person interface { name: string }"],
        "options_hi": ["interface Person { name: string }", "interface = Person { name: string }", "define interface Person {}", "Person interface { name: string }"],
        "answer_en": "interface Person { name: string }",
        "answer_hi": "interface Person { name: string }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the difference between interface and type?",
        "question_hi": "इंटरफेस और टाइप में क्या अंतर है?",
        "options_en": ["interface can be extended", "type can use unions", "Both A and B", "No difference"],
        "options_hi": ["इंटरफेस को एक्सटेंड किया जा सकता है", "टाइप यूनियन का उपयोग कर सकता है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you make a property optional?",
        "question_hi": "प्रॉपर्टी को ऑप्शनल कैसे बनाते हैं?",
        "options_en": ["name?: string", "name: string?", "optional name: string", "name: optional string"],
        "options_hi": ["name?: string", "name: string?", "optional name: string", "name: optional string"],
        "answer_en": "name?: string",
        "answer_hi": "name?: string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is a union type?",
        "question_hi": "यूनियन टाइप क्या है?",
        "options_en": ["Type that can be one of several types", "Combination of types", "Array type", "Object type"],
        "options_hi": ["टाइप जो कई टाइप में से एक हो सकता है", "टाइप का कॉम्बिनेशन", "ऐरे टाइप", "ऑब्जेक्ट टाइप"],
        "answer_en": "Type that can be one of several types",
        "answer_hi": "टाइप जो कई टाइप में से एक हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you define a union type?",
        "question_hi": "यूनियन टाइप कैसे डिफाइन करते हैं?",
        "options_en": ["string | number", "string & number", "string or number", "string, number"],
        "options_hi": ["string | number", "string & number", "string or number", "string, number"],
        "answer_en": "string | number",
        "answer_hi": "string | number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is an intersection type?",
        "question_hi": "इंटरसेक्शन टाइप क्या है?",
        "options_en": ["Combination of multiple types", "Union of types", "Array type", "Function type"],
        "options_hi": ["एकाधिक टाइप का कॉम्बिनेशन", "टाइप का यूनियन", "ऐरे टाइप", "फंक्शन टाइप"],
        "answer_en": "Combination of multiple types",
        "answer_hi": "एकाधिक टाइप का कॉम्बिनेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you define an intersection type?",
        "question_hi": "इंटरसेक्शन टाइप कैसे डिफाइन करते हैं?",
        "options_en": ["TypeA & TypeB", "TypeA | TypeB", "TypeA + TypeB", "TypeA and TypeB"],
        "options_hi": ["TypeA & TypeB", "TypeA | TypeB", "TypeA + TypeB", "TypeA and TypeB"],
        "answer_en": "TypeA & TypeB",
        "answer_hi": "TypeA & TypeB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is type assertion?",
        "question_hi": "टाइप असर्शन क्या है?",
        "options_en": ["Telling compiler about type", "Type conversion", "Type checking", "Type declaration"],
        "options_hi": ["कंपाइलर को टाइप के बारे में बताना", "टाइप कन्वर्जन", "टाइप चेकिंग", "टाइप डिक्लेरेशन"],
        "answer_en": "Telling compiler about type",
        "answer_hi": "कंपाइलर को टाइप के बारे में बताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
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
        "num": 27,
        "question_en": "What are generics?",
        "question_hi": "जेनेरिक क्या हैं?",
        "options_en": ["Reusable components", "Specific types", "Fixed types", "Basic types"],
        "options_hi": ["पुन: प्रयोज्य कॉम्पोनेंट", "स्पेसिफिक टाइप", "फिक्स्ड टाइप", "बेसिक टाइप"],
        "answer_en": "Reusable components",
        "answer_hi": "पुन: प्रयोज्य कॉम्पोनेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you define a generic function?",
        "question_hi": "जेनेरिक फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["function identity<T>(arg: T): T", "function identity(arg: T): T", "function<T> identity(arg: T): T", "generic function identity<T>(arg: T): T"],
        "options_hi": ["function identity<T>(arg: T): T", "function identity(arg: T): T", "function<T> identity(arg: T): T", "generic function identity<T>(arg: T): T"],
        "answer_en": "function identity<T>(arg: T): T",
        "answer_hi": "function identity<T>(arg: T): T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is a generic constraint?",
        "question_hi": "जेनेरिक कंस्ट्रेंट क्या है?",
        "options_en": ["Restricting generic types", "Making generics required", "Generic type checking", "All of above"],
        "options_hi": ["जेनेरिक टाइप को रिस्ट्रिक्ट करना", "जेनेरिक को आवश्यक बनाना", "जेनेरिक टाइप चेकिंग", "उपरोक्त सभी"],
        "answer_en": "Restricting generic types",
        "answer_hi": "जेनेरिक टाइप को रिस्ट्रिक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you add a constraint?",
        "question_hi": "कंस्ट्रेंट कैसे जोड़ते हैं?",
        "options_en": ["<T extends constraint>", "<T: constraint>", "<T implements constraint>", "<T with constraint>"],
        "options_hi": ["<T extends constraint>", "<T: constraint>", "<T implements constraint>", "<T with constraint>"],
        "answer_en": "<T extends constraint>",
        "answer_hi": "<T extends constraint>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What are classes?",
        "question_hi": "क्लास क्या हैं?",
        "options_en": ["Blueprints for objects", "Functions", "Interfaces", "Types"],
        "options_hi": ["ऑब्जेक्ट के लिए ब्लूप्रिंट", "फंक्शन", "इंटरफेस", "टाइप"],
        "answer_en": "Blueprints for objects",
        "answer_hi": "ऑब्जेक्ट के लिए ब्लूप्रिंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you define a class?",
        "question_hi": "क्लास कैसे डिफाइन करते हैं?",
        "options_en": ["class Person { }", "class = Person { }", "define class Person { }", "Person class { }"],
        "options_hi": ["class Person { }", "class = Person { }", "define class Person { }", "Person class { }"],
        "answer_en": "class Person { }",
        "answer_hi": "class Person { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What are access modifiers?",
        "question_hi": "एक्सेस मॉडिफायर क्या हैं?",
        "options_en": ["public, private, protected", "static, readonly", "abstract, sealed", "All of above"],
        "options_hi": ["public, private, protected", "static, readonly", "abstract, sealed", "उपरोक्त सभी"],
        "answer_en": "public, private, protected",
        "answer_hi": "public, private, protected",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
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
        "num": 35,
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
        "num": 36,
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
        "num": 37,
        "question_en": "What is 'readonly'?",
        "question_hi": "'readonly' क्या है?",
        "options_en": ["Makes property immutable", "Makes property private", "Makes property optional", "Makes property public"],
        "options_hi": ["प्रॉपर्टी को इम्यूटेबल बनाता है", "प्रॉपर्टी को प्राइवेट बनाता है", "प्रॉपर्टी को ऑप्शनल बनाता है", "प्रॉपर्टी को पब्लिक बनाता है"],
        "answer_en": "Makes property immutable",
        "answer_hi": "प्रॉपर्टी को इम्यूटेबल बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is a static property?",
        "question_hi": "स्टैटिक प्रॉपर्टी क्या है?",
        "options_en": ["Property on class itself", "Property on instances", "Immutable property", "Private property"],
        "options_hi": ["क्लास पर प्रॉपर्टी", "इंस्टेंस पर प्रॉपर्टी", "इम्यूटेबल प्रॉपर्टी", "प्राइवेट प्रॉपर्टी"],
        "answer_en": "Property on class itself",
        "answer_hi": "क्लास पर प्रॉपर्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you define a static property?",
        "question_hi": "स्टैटिक प्रॉपर्टी कैसे डिफाइन करते हैं?",
        "options_en": ["static count: number;", "count static: number;", "static: count number;", "count: static number;"],
        "options_hi": ["static count: number;", "count static: number;", "static: count number;", "count: static number;"],
        "answer_en": "static count: number;",
        "answer_hi": "static count: number;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is an abstract class?",
        "question_hi": "एब्स्ट्रैक्ट क्लास क्या है?",
        "options_en": ["Cannot be instantiated", "No methods", "Only properties", "Final class"],
        "options_hi": ["इंस्टेंटिएट नहीं की जा सकती", "कोई मेथड नहीं", "केवल प्रॉपर्टी", "फाइनल क्लास"],
        "answer_en": "Cannot be instantiated",
        "answer_hi": "इंस्टेंटिएट नहीं की जा सकती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you define an abstract class?",
        "question_hi": "एब्स्ट्रैक्ट क्लास कैसे डिफाइन करते हैं?",
        "options_en": ["abstract class Animal { }", "class abstract Animal { }", "abstract: class Animal { }", "class Animal abstract { }"],
        "options_hi": ["abstract class Animal { }", "class abstract Animal { }", "abstract: class Animal { }", "class Animal abstract { }"],
        "answer_en": "abstract class Animal { }",
        "answer_hi": "abstract class Animal { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is an abstract method?",
        "question_hi": "एब्स्ट्रैक्ट मेथड क्या है?",
        "options_en": ["No implementation", "Must be implemented", "Both A and B", "Concrete method"],
        "options_hi": ["कोई इम्प्लीमेंटेशन नहीं", "इम्प्लीमेंट करना होगा", "A और B दोनों", "कंक्रीट मेथड"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you define an abstract method?",
        "question_hi": "एब्स्ट्रैक्ट मेथड कैसे डिफाइन करते हैं?",
        "options_en": ["abstract makeSound(): void;", "makeSound abstract(): void;", "abstract: makeSound(): void;", "makeSound(): abstract void;"],
        "options_hi": ["abstract makeSound(): void;", "makeSound abstract(): void;", "abstract: makeSound(): void;", "makeSound(): abstract void;"],
        "answer_en": "abstract makeSound(): void;",
        "answer_hi": "abstract makeSound(): void;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is inheritance?",
        "question_hi": "इनहेरिटेंस क्या है?",
        "options_en": ["Creating new classes from existing", "Creating interfaces", "Creating types", "Creating functions"],
        "options_hi": ["मौजूदा से नई क्लास बनाना", "इंटरफेस बनाना", "टाइप बनाना", "फंक्शन बनाना"],
        "answer_en": "Creating new classes from existing",
        "answer_hi": "मौजूदा से नई क्लास बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
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
        "num": 46,
        "question_en": "What is method overriding?",
        "question_hi": "मेथड ओवरराइडिंग क्या है?",
        "options_en": ["Redefining method in subclass", "Creating new method", "Hiding method", "Deleting method"],
        "options_hi": ["सबक्लास में मेथड को पुन: डिफाइन करना", "नई मेथड बनाना", "मेथड को छिपाना", "मेथड को डिलीट करना"],
        "answer_en": "Redefining method in subclass",
        "answer_hi": "सबक्लास में मेथड को पुन: डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
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
        "num": 48,
        "question_en": "What are modules?",
        "question_hi": "मॉड्यूल क्या हैं?",
        "options_en": ["Way to organize code", "Classes", "Functions", "Types"],
        "options_hi": ["कोड को ऑर्गनाइज़ करने का तरीका", "क्लास", "फंक्शन", "टाइप"],
        "answer_en": "Way to organize code",
        "answer_hi": "कोड को ऑर्गनाइज़ करने का तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
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
        "num": 50,
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
        "num": 51,
        "question_en": "What is default export?",
        "question_hi": "डिफॉल्ट एक्सपोर्ट क्या है?",
        "options_en": ["Main export of module", "Optional export", "Hidden export", "Private export"],
        "options_hi": ["मॉड्यूल का मुख्य एक्सपोर्ट", "ऑप्शनल एक्सपोर्ट", "हिडन एक्सपोर्ट", "प्राइवेट एक्सपोर्ट"],
        "answer_en": "Main export of module",
        "answer_hi": "मॉड्यूल का मुख्य एक्सपोर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
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
        "num": 54,
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
        "num": 55,
        "question_en": "How do you define a namespace?",
        "question_hi": "नेमस्पेस कैसे डिफाइन करते हैं?",
        "options_en": ["namespace MyNamespace { }", "namespace = MyNamespace { }", "define namespace MyNamespace { }", "MyNamespace namespace { }"],
        "options_hi": ["namespace MyNamespace { }", "namespace = MyNamespace { }", "define namespace MyNamespace { }", "MyNamespace namespace { }"],
        "answer_en": "namespace MyNamespace { }",
        "answer_hi": "namespace MyNamespace { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What are decorators?",
        "question_hi": "डेकोरेटर क्या हैं?",
        "options_en": ["Special declarations", "Functions", "Classes", "Interfaces"],
        "options_hi": ["स्पेशल डिक्लेरेशन", "फंक्शन", "क्लास", "इंटरफेस"],
        "answer_en": "Special declarations",
        "answer_hi": "स्पेशल डिक्लेरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
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
        "num": 58,
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
        "num": 59,
        "question_en": "What is 'typeof' type guard?",
        "question_hi": "'typeof' टाइप गार्ड क्या है?",
        "options_en": ["Checks type using typeof", "Checks instance using instanceof", "Checks custom type", "All of above"],
        "options_hi": ["typeof का उपयोग करके टाइप चेक करता है", "instanceof का उपयोग करके इंस्टेंस चेक करता है", "कस्टम टाइप चेक करता है", "उपरोक्त सभी"],
        "answer_en": "Checks type using typeof",
        "answer_hi": "typeof का उपयोग करके टाइप चेक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is 'instanceof' type guard?",
        "question_hi": "'instanceof' टाइप गार्ड क्या है?",
        "options_en": ["Checks instance using instanceof", "Checks type using typeof", "Checks custom type", "All of above"],
        "options_hi": ["instanceof का उपयोग करके इंस्टेंस चेक करता है", "typeof का उपयोग करके टाइप चेक करता है", "कस्टम टाइप चेक करता है", "उपरोक्त सभी"],
        "answer_en": "Checks instance using instanceof",
        "answer_hi": "instanceof का उपयोग करके इंस्टेंस चेक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What are utility types?",
        "question_hi": "यूटिलिटी टाइप क्या हैं?",
        "options_en": ["Built-in generic types", "Basic types", "Function types", "Class types"],
        "options_hi": ["बिल्ट-इन जेनेरिक टाइप", "बेसिक टाइप", "फंक्शन टाइप", "क्लास टाइप"],
        "answer_en": "Built-in generic types",
        "answer_hi": "बिल्ट-इन जेनेरिक टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does Partial<T> do?",
        "question_hi": "Partial<T> क्या करता है?",
        "options_en": ["Makes all properties optional", "Makes all properties required", "Makes properties readonly", "Picks specific properties"],
        "options_hi": ["सभी प्रॉपर्टी को ऑप्शनल बनाता है", "सभी प्रॉपर्टी को आवश्यक बनाता है", "प्रॉपर्टी को रीडओनली बनाता है", "स्पेसिफिक प्रॉपर्टी को पिक करता है"],
        "answer_en": "Makes all properties optional",
        "answer_hi": "सभी प्रॉपर्टी को ऑप्शनल बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What does Required<T> do?",
        "question_hi": "Required<T> क्या करता है?",
        "options_en": ["Makes all properties required", "Makes all properties optional", "Makes properties readonly", "Picks specific properties"],
        "options_hi": ["सभी प्रॉपर्टी को आवश्यक बनाता है", "सभी प्रॉपर्टी को ऑप्शनल बनाता है", "प्रॉपर्टी को रीडओनली बनाता है", "स्पेसिफिक प्रॉपर्टी को पिक करता है"],
        "answer_en": "Makes all properties required",
        "answer_hi": "सभी प्रॉपर्टी को आवश्यक बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does Readonly<T> do?",
        "question_hi": "Readonly<T> क्या करता है?",
        "options_en": ["Makes all properties readonly", "Makes all properties optional", "Makes all properties required", "Picks specific properties"],
        "options_hi": ["सभी प्रॉपर्टी को रीडओनली बनाता है", "सभी प्रॉपर्टी को ऑप्शनल बनाता है", "सभी प्रॉपर्टी को आवश्यक बनाता है", "स्पेसिफिक प्रॉपर्टी को पिक करता है"],
        "answer_en": "Makes all properties readonly",
        "answer_hi": "सभी प्रॉपर्टी को रीडओनली बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What does Record<K, T> do?",
        "question_hi": "Record<K, T> क्या करता है?",
        "options_en": ["Creates object type with keys K and type T", "Creates record type", "Creates key-value pair", "All of above"],
        "options_hi": ["K और टाइप T वाली कीज के साथ ऑब्जेक्ट टाइप बनाता है", "रिकॉर्ड टाइप बनाता है", "की-वैल्यू पेयर बनाता है", "उपरोक्त सभी"],
        "answer_en": "Creates object type with keys K and type T",
        "answer_hi": "K और टाइप T वाली कीज के साथ ऑब्जेक्ट टाइप बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does Pick<T, K> do?",
        "question_hi": "Pick<T, K> क्या करता है?",
        "options_en": ["Picks set of properties K from T", "Picks specific properties", "Both A and B", "None"],
        "options_hi": ["T से K प्रॉपर्टी का सेट पिक करता है", "स्पेसिफिक प्रॉपर्टी को पिक करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What does Omit<T, K> do?",
        "question_hi": "Omit<T, K> क्या करता है?",
        "options_en": ["Omits set of properties K from T", "Removes specific properties", "Both A and B", "None"],
        "options_hi": ["T से K प्रॉपर्टी का सेट ओमिट करता है", "स्पेसिफिक प्रॉपर्टी को रिमूव करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is conditional types?",
        "question_hi": "कंडीशनल टाइप क्या हैं?",
        "options_en": ["Types that depend on conditions", "Types with if-else logic", "Both A and B", "None"],
        "options_hi": ["ऐसे टाइप जो कंडीशन पर डिपेंड करते हैं", "if-else लॉजिक वाले टाइप", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the syntax for conditional types?",
        "question_hi": "कंडीशनल टाइप के लिए सिंटैक्स क्या है?",
        "options_en": ["T extends U ? X : Y", "if T extends U then X else Y", "T extends U -> X : Y", "T extends U : X else Y"],
        "options_hi": ["T extends U ? X : Y", "if T extends U then X else Y", "T extends U -> X : Y", "T extends U : X else Y"],
        "answer_en": "T extends U ? X : Y",
        "answer_hi": "T extends U ? X : Y",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What are mapped types?",
        "question_hi": "मैप्ड टाइप क्या हैं?",
        "options_en": ["Types that transform properties", "Types that map values", "Both A and B", "None"],
        "options_hi": ["ऐसे टाइप जो प्रॉपर्टी को ट्रांसफॉर्म करते हैं", "ऐसे टाइप जो वैल्यू को मैप करते हैं", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Types that transform properties",
        "answer_hi": "ऐसे टाइप जो प्रॉपर्टी को ट्रांसफॉर्म करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the 'keyof' operator?",
        "question_hi": "'keyof' ऑपरेटर क्या है?",
        "options_en": ["Gets keys of object type", "Gets values of object", "Checks if key exists", "Creates new keys"],
        "options_hi": ["ऑब्जेक्ट टाइप की कीज प्राप्त करता है", "ऑब्जेक्ट की वैल्यू प्राप्त करता है", "चेक करता है कि की मौजूद है", "नई कीज बनाता है"],
        "answer_en": "Gets keys of object type",
        "answer_hi": "ऑब्जेक्ट टाइप की कीज प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the 'typeof' operator in types?",
        "question_hi": "टाइप में 'typeof' ऑपरेटर क्या है?",
        "options_en": ["Gets type of value", "Gets value of type", "Checks type", "Creates type"],
        "options_hi": ["वैल्यू का टाइप प्राप्त करता है", "टाइप की वैल्यू प्राप्त करता है", "टाइप चेक करता है", "टाइप बनाता है"],
        "answer_en": "Gets type of value",
        "answer_hi": "वैल्यू का टाइप प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What are template literal types?",
        "question_hi": "टेम्पलेट लिटरल टाइप क्या हैं?",
        "options_en": ["String types with patterns", "Types for template strings", "Both A and B", "None"],
        "options_hi": ["पैटर्न वाले स्ट्रिंग टाइप", "टेम्पलेट स्ट्रिंग के लिए टाइप", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the 'infer' keyword?",
        "question_hi": "'infer' कीवर्ड क्या है?",
        "options_en": ["Infers types in conditional types", "Infers function parameters", "Both A and B", "None"],
        "options_hi": ["कंडीशनल टाइप में टाइप इन्फर करता है", "फंक्शन पैरामीटर इन्फर करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What are recursive types?",
        "question_hi": "रिकर्सिव टाइप क्या हैं?",
        "options_en": ["Types that reference themselves", "Types with recursive structures", "Both A and B", "None"],
        "options_hi": ["ऐसे टाइप जो खुद को रेफरेंस करते हैं", "रिकर्सिव स्ट्रक्चर वाले टाइप", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the 'satisfies' operator?",
        "question_hi": "'satisfies' ऑपरेटर क्या है?",
        "options_en": ["Checks if value satisfies type", "Validates type constraints", "Both A and B", "None"],
        "options_hi": ["चेक करता है कि वैल्यू टाइप को सैटिस्फाई करती है", "टाइप कंस्ट्रेंट को वैलिडेट करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is 'as const' assertion?",
        "question_hi": "'as const' असर्शन क्या है?",
        "options_en": ["Makes values readonly literals", "Prevents widening of literal types", "Both A and B", "None"],
        "options_hi": ["वैल्यू को रीडओनली लिटरल बनाता है", "लिटरल टाइप के विडेनिंग को रोकता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What are declaration files?",
        "question_hi": "डिक्लेरेशन फाइल क्या हैं?",
        "options_en": ["Files with type declarations", "Files with .d.ts extension", "Both A and B", "None"],
        "options_hi": ["टाइप डिक्लेरेशन वाली फाइल", ".d.ts एक्सटेंशन वाली फाइल", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the 'declare' keyword?",
        "question_hi": "'declare' कीवर्ड क्या है?",
        "options_en": ["Declares types without implementation", "Used in declaration files", "Both A and B", "None"],
        "options_hi": ["बिना इम्प्लीमेंटेशन के टाइप डिक्लेयर करता है", "डिक्लेरेशन फाइल में उपयोग होता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is global declaration?",
        "question_hi": "ग्लोबल डिक्लेरेशन क्या है?",
        "options_en": ["Declaration available throughout project", "Declaration in global scope", "Both A and B", "None"],
        "options_hi": ["पूरे प्रोजेक्ट में उपलब्ध डिक्लेरेशन", "ग्लोबल स्कोप में डिक्लेरेशन", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is module declaration?",
        "question_hi": "मॉड्यूल डिक्लेरेशन क्या है?",
        "options_en": ["Declaration for external modules", "Describes shape of modules", "Both A and B", "None"],
        "options_hi": ["एक्सटर्नल मॉड्यूल के लिए डिक्लेरेशन", "मॉड्यूल के शेप को डिस्क्राइब करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is namespace declaration?",
        "question_hi": "नेमस्पेस डिक्लेरेशन क्या है?",
        "options_en": ["Declaration for namespaces", "Groups related declarations", "Both A and B", "None"],
        "options_hi": ["नेमस्पेस के लिए डिक्लेरेशन", "रिलेटेड डिक्लेरेशन को ग्रुप करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the 'strict' compiler option?",
        "question_hi": "'strict' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Enables all strict type checking", "Enables strict mode", "Both A and B", "None"],
        "options_hi": ["सभी स्ट्रिक्ट टाइप चेकिंग को एनेबल करता है", "स्ट्रिक्ट मोड को एनेबल करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Enables all strict type checking",
        "answer_hi": "सभी स्ट्रिक्ट टाइप चेकिंग को एनेबल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does 'noImplicitAny' do?",
        "question_hi": "'noImplicitAny' क्या करता है?",
        "options_en": ["Disallows implicit 'any' types", "Requires explicit type annotations", "Both A and B", "None"],
        "options_hi": ["इम्प्लिसिट 'any' टाइप को डिसअलाउ करता है", "एक्सप्लिसिट टाइप एनोटेशन की आवश्यकता होती है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What does 'strictNullChecks' do?",
        "question_hi": "'strictNullChecks' क्या करता है?",
        "options_en": ["Enforces null and undefined checks", "Requires handling of null/undefined", "Both A and B", "None"],
        "options_hi": ["null और undefined चेक को एनफोर्स करता है", "null/undefined के हैंडलिंग की आवश्यकता होती है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does 'noUnusedParameters' do?",
        "question_hi": "'noUnusedParameters' क्या करता है?",
        "options_en": ["Flags unused function parameters", "Requires all parameters to be used", "Both A and B", "None"],
        "options_hi": ["अनउपयोगी फंक्शन पैरामीटर को फ्लैग करता है", "सभी पैरामीटर के उपयोग की आवश्यकता होती है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What does 'noImplicitReturns' do?",
        "question_hi": "'noImplicitReturns' क्या करता है?",
        "options_en": ["Requires explicit return types", "Flags functions that don't always return", "Both A and B", "None"],
        "options_hi": ["एक्सप्लिसिट रिटर्न टाइप की आवश्यकता होती है", "ऐसे फंक्शन को फ्लैग करता है जो हमेशा रिटर्न नहीं करते", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the 'target' compiler option?",
        "question_hi": "'target' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Specifies ECMAScript target version", "Sets JavaScript version for output", "Both A and B", "None"],
        "options_hi": ["ECMAScript टार्गेट वर्जन स्पेसिफाई करता है", "आउटपुट के लिए JavaScript वर्जन सेट करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the 'module' compiler option?",
        "question_hi": "'module' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Specifies module system", "Sets module code generation", "Both A and B", "None"],
        "options_hi": ["मॉड्यूल सिस्टम स्पेसिफाई करता है", "मॉड्यूल कोड जनरेशन सेट करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the 'outDir' compiler option?",
        "question_hi": "'outDir' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Specifies output directory", "Sets where compiled files go", "Both A and B", "None"],
        "options_hi": ["आउटपुट डायरेक्टरी स्पेसिफाई करता है", "सेट करता है कि कंपाइल्ड फाइल कहाँ जाए", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the 'rootDir' compiler option?",
        "question_hi": "'rootDir' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Specifies root directory of source files", "Sets where to find source files", "Both A and B", "None"],
        "options_hi": ["सोर्स फाइल की रूट डायरेक्टरी स्पेसिफाई करता है", "सेट करता है कि सोर्स फाइल कहाँ खोजें", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the 'baseUrl' compiler option?",
        "question_hi": "'baseUrl' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Base directory to resolve non-absolute module names", "Sets base path for module resolution", "Both A and B", "None"],
        "options_hi": ["नॉन-एब्सोल्यूट मॉड्यूल नेम रेजोल्व करने के लिए बेस डायरेक्टरी", "मॉड्यूल रेजोल्यूशन के लिए बेस पाथ सेट करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What are path mappings?",
        "question_hi": "पाथ मैपिंग क्या हैं?",
        "options_en": ["Map module names to locations", "Alias for module paths", "Both A and B", "None"],
        "options_hi": ["मॉड्यूल नेम को लोकेशन पर मैप करें", "मॉड्यूल पाथ के लिए अलियास", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the 'paths' compiler option?",
        "question_hi": "'paths' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Specifies path mapping", "Sets module aliases", "Both A and B", "None"],
        "options_hi": ["पाथ मैपिंग स्पेसिफाई करता है", "मॉड्यूल अलियास सेट करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the 'types' compiler option?",
        "question_hi": "'types' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Specifies type packages to include", "Lists type declaration packages", "Both A and B", "None"],
        "options_hi": ["इंक्लूड करने के लिए टाइप पैकेज स्पेसिफाई करता है", "टाइप डिक्लेरेशन पैकेज की लिस्ट बनाता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the 'typeRoots' compiler option?",
        "question_hi": "'typeRoots' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Specifies directories for type definitions", "Sets where to find type declarations", "Both A and B", "None"],
        "options_hi": ["टाइप डेफिनिशन के लिए डायरेक्टरी स्पेसिफाई करता है", "सेट करता है कि टाइप डिक्लेरेशन कहाँ खोजें", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the 'esModuleInterop' compiler option?",
        "question_hi": "'esModuleInterop' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Enables better interoperability with CommonJS", "Allows default imports from CommonJS", "Both A and B", "None"],
        "options_hi": ["CommonJS के साथ बेहतर इंटरऑपरेबिलिटी एनेबल करता है", "CommonJS से डिफॉल्ट इम्पोर्ट की अनुमति देता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the 'forceConsistentCasingInFileNames' option?",
        "question_hi": "'forceConsistentCasingInFileNames' ऑप्शन क्या है?",
        "options_en": ["Enforces consistent file name casing", "Requires consistent case in imports", "Both A and B", "None"],
        "options_hi": ["कंसिस्टेंट फाइल नेम केसिंग एनफोर्स करता है", "इम्पोर्ट में कंसिस्टेंट केस की आवश्यकता होती है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the 'skipLibCheck' compiler option?",
        "question_hi": "'skipLibCheck' कंपाइलर ऑप्शन क्या है?",
        "options_en": ["Skips type checking of declaration files", "Speeds up compilation", "Both A and B", "None"],
        "options_hi": ["डिक्लेरेशन फाइल की टाइप चेकिंग स्किप करता है", "कंपाइलेशन को स्पीड देता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the 'strictPropertyInitialization' option?",
        "question_hi": "'strictPropertyInitialization' ऑप्शन क्या है?",
        "options_en": ["Requires class properties to be initialized", "Checks property initialization in constructors", "Both A and B", "None"],
        "options_hi": ["क्लास प्रॉपर्टी को इनिशियलाइज़ करने की आवश्यकता होती है", "कंस्ट्रक्टर में प्रॉपर्टी इनिशियलाइज़ेशन चेक करता है", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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