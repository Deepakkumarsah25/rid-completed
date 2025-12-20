const questions = [
    {
        "num": 1,
        "question_en": "What is the main purpose of TypeScript?",
        "question_hi": "TypeScript का मुख्य उद्देश्य क्या है?",
        "options_en": ["To add static typing to JavaScript", "To replace JavaScript", "To create web pages", "To build databases"],
        "options_hi": ["JavaScript में स्टैटिक टाइपिंग जोड़ना", "JavaScript को बदलना", "वेब पेज बनाना", "डेटाबेस बनाना"],
        "answer_en": "To add static typing to JavaScript",
        "answer_hi": "JavaScript में स्टैटिक टाइपिंग जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of these is NOT a TypeScript data type?",
        "question_hi": "इनमें से कौन TypeScript डेटा टाइप नहीं है?",
        "options_en": ["char", "number", "string", "boolean"],
        "options_hi": ["char", "number", "string", "boolean"],
        "answer_en": "char",
        "answer_hi": "char",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you install TypeScript globally?",
        "question_hi": "TypeScript को ग्लोबली कैसे इंस्टॉल करते हैं?",
        "options_en": ["npm install -g typescript", "npm install typescript", "install typescript", "npm typescript -g"],
        "options_hi": ["npm install -g typescript", "npm install typescript", "install typescript", "npm typescript -g"],
        "answer_en": "npm install -g typescript",
        "answer_hi": "npm install -g typescript",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does the 'tsconfig.json' file do?",
        "question_hi": "'tsconfig.json' फाइल क्या करती है?",
        "options_en": ["Configures TypeScript compiler options", "Defines TypeScript types", "Sets up npm packages", "Configures web server"],
        "options_hi": ["TypeScript कंपाइलर विकल्प कॉन्फ़िगर करती है", "TypeScript टाइप परिभाषित करती है", "npm पैकेज सेट अप करती है", "वेब सर्वर कॉन्फ़िगर करती है"],
        "answer_en": "Configures TypeScript compiler options",
        "answer_hi": "TypeScript कंपाइलर विकल्प कॉन्फ़िगर करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the type of 'null' in TypeScript?",
        "question_hi": "TypeScript में 'null' का टाइप क्या है?",
        "options_en": ["null", "undefined", "object", "any"],
        "options_hi": ["null", "undefined", "object", "any"],
        "answer_en": "null",
        "answer_hi": "null",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you define a function that returns a number?",
        "question_hi": "ऐसे फ़ंक्शन को कैसे परिभाषित करें जो number रिटर्न करे?",
        "options_en": ["function fn(): number {}", "function fn(): number {}", "function fn(): Number {}", "function fn() returns number {}"],
        "options_hi": ["function fn(): number {}", "function fn(): number {}", "function fn(): Number {}", "function fn() returns number {}"],
        "answer_en": "function fn(): number {}",
        "answer_hi": "function fn(): number {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is a 'type alias' in TypeScript?",
        "question_hi": "TypeScript में 'type alias' क्या है?",
        "options_en": ["A name for any type", "An alternative name for interface", "A function type", "A class type"],
        "options_hi": ["किसी भी टाइप का नाम", "इंटरफ़ेस का वैकल्पिक नाम", "फ़ंक्शन टाइप", "क्लास टाइप"],
        "answer_en": "A name for any type",
        "answer_hi": "किसी भी टाइप का नाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the correct way to define an array of strings?",
        "question_hi": "स्ट्रिंग्स की ऐरे को परिभाषित करने का सही तरीका क्या है?",
        "options_en": ["string[]", "Array<string>", "Both A and B", "StringArray"],
        "options_hi": ["string[]", "Array<string>", "A और B दोनों", "StringArray"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does 'strict' mode enable in TypeScript?",
        "question_hi": "TypeScript में 'strict' मोड क्या सक्षम करता है?",
        "options_en": ["All strict type-checking options", "Only null checking", "Only undefined checking", "Only any checking"],
        "options_hi": ["सभी स्ट्रिक्ट टाइप-चेकिंग विकल्प", "केवल null चेकिंग", "केवल undefined चेकिंग", "केवल any चेकिंग"],
        "answer_en": "All strict type-checking options",
        "answer_hi": "सभी स्ट्रिक्ट टाइप-चेकिंग विकल्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the 'never' type used for?",
        "question_hi": "'never' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["For functions that never return", "For null values", "For undefined values", "For empty objects"],
        "options_hi": ["ऐसे फ़ंक्शन्स के लिए जो कभी रिटर्न नहीं करते", "null वैल्यू के लिए", "undefined वैल्यू के लिए", "खाली ऑब्जेक्ट के लिए"],
        "answer_en": "For functions that never return",
        "answer_hi": "ऐसे फ़ंक्शन्स के लिए जो कभी रिटर्न नहीं करते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you define optional function parameters?",
        "question_hi": "ऑप्शनल फ़ंक्शन पैरामीटर कैसे परिभाषित करें?",
        "options_en": ["param?: type", "optional param: type", "param: type?", "?param: type"],
        "options_hi": ["param?: type", "optional param: type", "param: type?", "?param: type"],
        "answer_en": "param?: type",
        "answer_hi": "param?: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is type inference in TypeScript?",
        "question_hi": "TypeScript में टाइप इनफेरेंस क्या है?",
        "options_en": ["Automatic type detection without explicit annotation", "Manual type declaration", "Type checking at runtime", "Type conversion"],
        "options_hi": ["एक्सप्लिसिट एनोटेशन के बिना ऑटोमैटिक टाइप डिटेक्शन", "मैन्युअल टाइप डिक्लेरेशन", "रनटाइम पर टाइप चेकिंग", "टाइप कन्वर्जन"],
        "answer_en": "Automatic type detection without explicit annotation",
        "answer_hi": "एक्सप्लिसिट एनोटेशन के बिना ऑटोमैटिक टाइप डिटेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of 'interface'?",
        "question_hi": "'interface' का उद्देश्य क्या है?",
        "options_en": ["To define the shape of an object", "To create classes", "To define functions", "To import modules"],
        "options_hi": ["ऑब्जेक्ट की शेप को परिभाषित करना", "क्लासेस बनाना", "फ़ंक्शन परिभाषित करना", "मॉड्यूल इम्पोर्ट करना"],
        "answer_en": "To define the shape of an object",
        "answer_hi": "ऑब्जेक्ट की शेप को परिभाषित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you make a class property private?",
        "question_hi": "क्लास प्रॉपर्टी को प्राइवेट कैसे बनाएं?",
        "options_en": ["private property: type", "#property: type", "Both A and B", "protected property: type"],
        "options_hi": ["private property: type", "#property: type", "A और B दोनों", "protected property: type"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is a 'generic' in TypeScript?",
        "question_hi": "TypeScript में 'generic' क्या है?",
        "options_en": ["A type that works with multiple types", "A specific type", "A built-in type", "A function type"],
        "options_hi": ["एक ऐसा टाइप जो कई टाइप्स के साथ काम करता है", "एक विशिष्ट टाइप", "बिल्ट-इन टाइप", "फ़ंक्शन टाइप"],
        "answer_en": "A type that works with multiple types",
        "answer_hi": "एक ऐसा टाइप जो कई टाइप्स के साथ काम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does 'readonly' do?",
        "question_hi": "'readonly' क्या करता है?",
        "options_en": ["Makes property immutable after initialization", "Makes property private", "Hides property", "Deletes property"],
        "options_hi": ["इनिशियलाइज़ेशन के बाद प्रॉपर्टी को इम्यूटेबल बनाता है", "प्रॉपर्टी को प्राइवेट बनाता है", "प्रॉपर्टी को छुपाता है", "प्रॉपर्टी डिलीट करता है"],
        "answer_en": "Makes property immutable after initialization",
        "answer_hi": "इनिशियलाइज़ेशन के बाद प्रॉपर्टी को इम्यूटेबल बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is a 'tuple'?",
        "question_hi": "'tuple' क्या है?",
        "options_en": ["Array with fixed number of typed elements", "Any array", "Object with keys", "Function parameter"],
        "options_hi": ["फिक्स्ड नंबर के टाइप्ड एलिमेंट्स वाली ऐरे", "कोई भी ऐरे", "कीज़ वाला ऑब्जेक्ट", "फ़ंक्शन पैरामीटर"],
        "answer_en": "Array with fixed number of typed elements",
        "answer_hi": "फिक्स्ड नंबर के टाइप्ड एलिमेंट्स वाली ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you define an enum?",
        "question_hi": "enum कैसे परिभाषित करें?",
        "options_en": ["enum Name { Key = Value }", "const enum = {}", "define enum {}", "enum: {}"],
        "options_hi": ["enum Name { Key = Value }", "const enum = {}", "define enum {}", "enum: {}"],
        "answer_en": "enum Name { Key = Value }",
        "answer_hi": "enum Name { Key = Value }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is 'type assertion'?",
        "question_hi": "'type assertion' क्या है?",
        "options_en": ["Telling TypeScript the type of a value", "Converting types", "Checking types", "Declaring types"],
        "options_hi": ["TypeScript को वैल्यू का टाइप बताना", "टाइप कन्वर्ट करना", "टाइप चेक करना", "टाइप डिक्लेयर करना"],
        "answer_en": "Telling TypeScript the type of a value",
        "answer_hi": "TypeScript को वैल्यू का टाइप बताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the 'unknown' type?",
        "question_hi": "'unknown' टाइप क्या है?",
        "options_en": ["Type-safe version of 'any'", "Same as 'any'", "Worse than 'any'", "Opposite of 'any'"],
        "options_hi": ["'any' का टाइप-सेफ वर्जन", "'any' के समान", "'any' से बुरा", "'any' का उल्टा"],
        "answer_en": "Type-safe version of 'any'",
        "answer_hi": "'any' का टाइप-सेफ वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is 'keyof' operator?",
        "question_hi": "'keyof' ऑपरेटर क्या है?",
        "options_en": ["Gets keys of an object type", "Gets values of an object", "Creates keys", "Deletes keys"],
        "options_hi": ["ऑब्जेक्ट टाइप की कीज़ प्राप्त करता है", "ऑब्जेक्ट की वैल्यूज़ प्राप्त करता है", "कीज़ बनाता है", "कीज़ डिलीट करता है"],
        "answer_en": "Gets keys of an object type",
        "answer_hi": "ऑब्जेक्ट टाइप की कीज़ प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is 'typeof' operator used for in TypeScript?",
        "question_hi": "TypeScript में 'typeof' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["To get type of a value", "To check type", "To convert type", "To declare type"],
        "options_hi": ["वैल्यू का टाइप प्राप्त करने के लिए", "टाइप चेक करने के लिए", "टाइप कन्वर्ट करने के लिए", "टाइप डिक्लेयर करने के लिए"],
        "answer_en": "To get type of a value",
        "answer_hi": "वैल्यू का टाइप प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is 'namespace' in TypeScript?",
        "question_hi": "TypeScript में 'namespace' क्या है?",
        "options_en": ["Logical grouping of code", "Physical folder", "Module", "Package"],
        "options_hi": ["कोड का लॉजिकल ग्रुपिंग", "फिजिकल फोल्डर", "मॉड्यूल", "पैकेज"],
        "answer_en": "Logical grouping of code",
        "answer_hi": "कोड का लॉजिकल ग्रुपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is 'declare' keyword used for?",
        "question_hi": "'declare' कीवर्ड का उपयोग किसके लिए किया जाता है?",
        "options_en": ["To declare types without implementation", "To implement functions", "To export modules", "To import modules"],
        "options_hi": ["इम्प्लीमेंटेशन के बिना टाइप डिक्लेयर करने के लिए", "फ़ंक्शन इम्प्लीमेंट करने के लिए", "मॉड्यूल एक्सपोर्ट करने के लिए", "मॉड्यूल इम्पोर्ट करने के लिए"],
        "answer_en": "To declare types without implementation",
        "answer_hi": "इम्प्लीमेंटेशन के बिना टाइप डिक्लेयर करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is 'module' in TypeScript?",
        "question_hi": "TypeScript में 'module' क्या है?",
        "options_en": ["File containing import/export statements", "Any TypeScript file", "tsconfig.json file", "package.json file"],
        "options_hi": ["import/export स्टेटमेंट्स वाली फाइल", "कोई भी TypeScript फाइल", "tsconfig.json फाइल", "package.json फाइल"],
        "answer_en": "File containing import/export statements",
        "answer_hi": "import/export स्टेटमेंट्स वाली फाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is 'as const' used for?",
        "question_hi": "'as const' का उपयोग किसके लिए किया जाता है?",
        "options_en": ["To make values readonly literals", "To convert to constant", "To declare constants", "To make variables constant"],
        "options_hi": ["वैल्यूज़ को रीडओनली लिटरल बनाने के लिए", "कॉन्स्टेंट में कन्वर्ट करने के लिए", "कॉन्स्टेंट डिक्लेयर करने के लिए", "वेरिएबल को कॉन्स्टेंट बनाने के लिए"],
        "answer_en": "To make values readonly literals",
        "answer_hi": "वैल्यूज़ को रीडओनली लिटरल बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is 'Partial<T>' utility type?",
        "question_hi": "'Partial<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Makes all properties optional", "Makes all properties required", "Makes properties readonly", "Removes properties"],
        "options_hi": ["सभी प्रॉपर्टीज़ को ऑप्शनल बनाता है", "सभी प्रॉपर्टीज़ को रिक्वायर्ड बनाता है", "प्रॉपर्टीज़ को रीडओनली बनाता है", "प्रॉपर्टीज़ रिमूव करता है"],
        "answer_en": "Makes all properties optional",
        "answer_hi": "सभी प्रॉपर्टीज़ को ऑप्शनल बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is 'Required<T>' utility type?",
        "question_hi": "'Required<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Makes all properties required", "Makes all properties optional", "Makes properties readonly", "Removes properties"],
        "options_hi": ["सभी प्रॉपर्टीज़ को रिक्वायर्ड बनाता है", "सभी प्रॉपर्टीज़ को ऑप्शनल बनाता है", "प्रॉपर्टीज़ को रीडओनली बनाता है", "प्रॉपर्टीज़ रिमूव करता है"],
        "answer_en": "Makes all properties required",
        "answer_hi": "सभी प्रॉपर्टीज़ को रिक्वायर्ड बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is 'Pick<T, K>' utility type?",
        "question_hi": "'Pick<T, K>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Picks subset of properties", "Removes properties", "Makes properties optional", "Makes properties readonly"],
        "options_hi": ["प्रॉपर्टीज़ का सबसेट पिक करता है", "प्रॉपर्टीज़ रिमूव करता है", "प्रॉपर्टीज़ को ऑप्शनल बनाता है", "प्रॉपर्टीज़ को रीडओनली बनाता है"],
        "answer_en": "Picks subset of properties",
        "answer_hi": "प्रॉपर्टीज़ का सबसेट पिक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is 'Omit<T, K>' utility type?",
        "question_hi": "'Omit<T, K>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Omits specified properties", "Picks specified properties", "Makes properties optional", "Makes properties required"],
        "options_hi": ["स्पेसिफाइड प्रॉपर्टीज़ ओमिट करता है", "स्पेसिफाइड प्रॉपर्टीज़ पिक करता है", "प्रॉपर्टीज़ को ऑप्शनल बनाता है", "प्रॉपर्टीज़ को रिक्वायर्ड बनाता है"],
        "answer_en": "Omits specified properties",
        "answer_hi": "स्पेसिफाइड प्रॉपर्टीज़ ओमिट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is 'Record<K, T>' utility type?",
        "question_hi": "'Record<K, T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Constructs object type with specified keys and values", "Creates array type", "Creates tuple type", "Creates union type"],
        "options_hi": ["स्पेसिफाइड कीज़ और वैल्यूज़ वाला ऑब्जेक्ट टाइप बनाता है", "ऐरे टाइप बनाता है", "टुपल टाइप बनाता है", "यूनियन टाइप बनाता है"],
        "answer_en": "Constructs object type with specified keys and values",
        "answer_hi": "स्पेसिफाइड कीज़ और वैल्यूज़ वाला ऑब्जेक्ट टाइप बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is 'Exclude<T, U>' utility type?",
        "question_hi": "'Exclude<T, U>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Excludes types from union", "Includes types in union", "Creates intersection", "Creates union"],
        "options_hi": ["यूनियन से टाइप्स एक्सक्लूड करता है", "यूनियन में टाइप्स इन्क्लूड करता है", "इंटरसेक्शन बनाता है", "यूनियन बनाता है"],
        "answer_en": "Excludes types from union",
        "answer_hi": "यूनियन से टाइप्स एक्सक्लूड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is 'Extract<T, U>' utility type?",
        "question_hi": "'Extract<T, U>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Extracts types from union", "Excludes types from union", "Creates intersection", "Creates union"],
        "options_hi": ["यूनियन से टाइप्स एक्सट्रैक्ट करता है", "यूनियन से टाइप्स एक्सक्लूड करता है", "इंटरसेक्शन बनाता है", "यूनियन बनाता है"],
        "answer_en": "Extracts types from union",
        "answer_hi": "यूनियन से टाइप्स एक्सट्रैक्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is 'NonNullable<T>' utility type?",
        "question_hi": "'NonNullable<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Removes null and undefined from type", "Adds null to type", "Adds undefined to type", "Makes type nullable"],
        "options_hi": ["टाइप से null और undefined रिमूव करता है", "टाइप में null ऐड करता है", "टाइप में undefined ऐड करता है", "टाइप को nullable बनाता है"],
        "answer_en": "Removes null and undefined from type",
        "answer_hi": "टाइप से null और undefined रिमूव करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is 'ReturnType<T>' utility type?",
        "question_hi": "'ReturnType<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Gets return type of function", "Gets parameter types", "Gets this type", "Gets constructor type"],
        "options_hi": ["फ़ंक्शन का रिटर्न टाइप प्राप्त करता है", "पैरामीटर टाइप्स प्राप्त करता है", "this टाइप प्राप्त करता है", "कंस्ट्रक्टर टाइप प्राप्त करता है"],
        "answer_en": "Gets return type of function",
        "answer_hi": "फ़ंक्शन का रिटर्न टाइप प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is 'Parameters<T>' utility type?",
        "question_hi": "'Parameters<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Gets parameter types of function", "Gets return type", "Gets this type", "Gets constructor type"],
        "options_hi": ["फ़ंक्शन के पैरामीटर टाइप्स प्राप्त करता है", "रिटर्न टाइप प्राप्त करता है", "this टाइप प्राप्त करता है", "कंस्ट्रक्टर टाइप प्राप्त करता है"],
        "answer_en": "Gets parameter types of function",
        "answer_hi": "फ़ंक्शन के पैरामीटर टाइप्स प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is 'ConstructorParameters<T>' utility type?",
        "question_hi": "'ConstructorParameters<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Gets constructor parameter types", "Gets method parameters", "Gets property types", "Gets return type"],
        "options_hi": ["कंस्ट्रक्टर पैरामीटर टाइप्स प्राप्त करता है", "मेथड पैरामीटर्स प्राप्त करता है", "प्रॉपर्टी टाइप्स प्राप्त करता है", "रिटर्न टाइप प्राप्त करता है"],
        "answer_en": "Gets constructor parameter types",
        "answer_hi": "कंस्ट्रक्टर पैरामीटर टाइप्स प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is 'InstanceType<T>' utility type?",
        "question_hi": "'InstanceType<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Gets instance type of class", "Gets static type", "Gets constructor type", "Gets method type"],
        "options_hi": ["क्लास का इंस्टेंस टाइप प्राप्त करता है", "स्टैटिक टाइप प्राप्त करता है", "कंस्ट्रक्टर टाइप प्राप्त करता है", "मेथड टाइप प्राप्त करता है"],
        "answer_en": "Gets instance type of class",
        "answer_hi": "क्लास का इंस्टेंस टाइप प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is 'ThisParameterType<T>' utility type?",
        "question_hi": "'ThisParameterType<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Gets this parameter type", "Gets return type", "Gets parameter types", "Gets constructor type"],
        "options_hi": ["this पैरामीटर टाइप प्राप्त करता है", "रिटर्न टाइप प्राप्त करता है", "पैरामीटर टाइप्स प्राप्त करता है", "कंस्ट्रक्टर टाइप प्राप्त करता है"],
        "answer_en": "Gets this parameter type",
        "answer_hi": "this पैरामीटर टाइप प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is 'OmitThisParameter<T>' utility type?",
        "question_hi": "'OmitThisParameter<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Removes this parameter from function", "Adds this parameter", "Gets this parameter", "Changes this parameter"],
        "options_hi": ["फ़ंक्शन से this पैरामीटर रिमूव करता है", "this पैरामीटर ऐड करता है", "this पैरामीटर प्राप्त करता है", "this पैरामीटर बदलता है"],
        "answer_en": "Removes this parameter from function",
        "answer_hi": "फ़ंक्शन से this पैरामीटर रिमूव करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is 'ThisType<T>' utility type?",
        "question_hi": "'ThisType<T>' यूटिलिटी टाइप क्या है?",
        "options_en": ["Specifies this type in object", "Removes this type", "Gets this type", "Changes this type"],
        "options_hi": ["ऑब्जेक्ट में this टाइप स्पेसिफाई करता है", "this टाइप रिमूव करता है", "this टाइप प्राप्त करता है", "this टाइप बदलता है"],
        "answer_en": "Specifies this type in object",
        "answer_hi": "ऑब्जेक्ट में this टाइप स्पेसिफाई करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is 'awaited' utility type?",
        "question_hi": "'awaited' यूटिलिटी टाइप क्या है?",
        "options_en": ["Unwraps Promise type", "Creates Promise", "Removes async", "Adds async"],
        "options_hi": ["Promise टाइप अनरैप करता है", "Promise बनाता है", "async रिमूव करता है", "async ऐड करता है"],
        "answer_en": "Unwraps Promise type",
        "answer_hi": "Promise टाइप अनरैप करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is 'string literal type'?",
        "question_hi": "'string literal type' क्या है?",
        "options_en": ["Type that must be exact string", "Any string type", "Template string", "String object"],
        "options_hi": ["वह टाइप जो एक्सैक्ट स्ट्रिंग होना चाहिए", "कोई भी स्ट्रिंग टाइप", "टेम्पलेट स्ट्रिंग", "स्ट्रिंग ऑब्जेक्ट"],
        "answer_en": "Type that must be exact string",
        "answer_hi": "वह टाइप जो एक्सैक्ट स्ट्रिंग होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is 'numeric literal type'?",
        "question_hi": "'numeric literal type' क्या है?",
        "options_en": ["Type that must be exact number", "Any number type", "Integer type", "Float type"],
        "options_hi": ["वह टाइप जो एक्सैक्ट नंबर होना चाहिए", "कोई भी नंबर टाइप", "इंटीजर टाइप", "फ्लोट टाइप"],
        "answer_en": "Type that must be exact number",
        "answer_hi": "वह टाइप जो एक्सैक्ट नंबर होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is 'boolean literal type'?",
        "question_hi": "'boolean literal type' क्या है?",
        "options_en": ["Type that must be exact boolean", "Any boolean type", "True type", "False type"],
        "options_hi": ["वह टाइप जो एक्सैक्ट बूलियन होना चाहिए", "कोई भी बूलियन टाइप", "True टाइप", "False टाइप"],
        "answer_en": "Type that must be exact boolean",
        "answer_hi": "वह टाइप जो एक्सैक्ट बूलियन होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is 'template literal type'?",
        "question_hi": "'template literal type' क्या है?",
        "options_en": ["String type constructed from templates", "Template string", "String template", "Literal template"],
        "options_hi": ["टेम्पलेट्स से बना स्ट्रिंग टाइप", "टेम्पलेट स्ट्रिंग", "स्ट्रिंग टेम्पलेट", "लिटरल टेम्पलेट"],
        "answer_en": "String type constructed from templates",
        "answer_hi": "टेम्पलेट्स से बना स्ट्रिंग टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is 'conditional type'?",
        "question_hi": "'conditional type' क्या है?",
        "options_en": ["Type that depends on condition", "If-else type", "Switch type", "Case type"],
        "options_hi": ["वह टाइप जो कंडीशन पर डिपेंड करता है", "If-else टाइप", "Switch टाइप", "Case टाइप"],
        "answer_en": "Type that depends on condition",
        "answer_hi": "वह टाइप जो कंडीशन पर डिपेंड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is 'infer' keyword used for?",
        "question_hi": "'infer' कीवर्ड का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Infer types in conditional types", "Declare types", "Define types", "Check types"],
        "options_hi": ["कंडीशनल टाइप्स में टाइप्स इनफेर करने के लिए", "टाइप्स डिक्लेयर करने के लिए", "टाइप्स डिफाइन करने के लिए", "टाइप्स चेक करने के लिए"],
        "answer_en": "Infer types in conditional types",
        "answer_hi": "कंडीशनल टाइप्स में टाइप्स इनफेर करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'mapped type'?",
        "question_hi": "'mapped type' क्या है?",
        "options_en": ["Type that transforms properties", "Map data structure", "Object type", "Array type"],
        "options_hi": ["वह टाइप जो प्रॉपर्टीज़ ट्रांसफॉर्म करता है", "Map डेटा स्ट्रक्चर", "ऑब्जेक्ट टाइप", "ऐरे टाइप"],
        "answer_en": "Type that transforms properties",
        "answer_hi": "वह टाइप जो प्रॉपर्टीज़ ट्रांसफॉर्म करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is 'indexed access type'?",
        "question_hi": "'indexed access type' क्या है?",
        "options_en": ["Accessing type using index", "Array access", "Object access", "Map access"],
        "options_hi": ["इंडेक्स का उपयोग करके टाइप एक्सेस करना", "ऐरे एक्सेस", "ऑब्जेक्ट एक्सेस", "Map एक्सेस"],
        "answer_en": "Accessing type using index",
        "answer_hi": "इंडेक्स का उपयोग करके टाइप एक्सेस करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is 'type guard'?",
        "question_hi": "'type guard' क्या है?",
        "options_en": ["Runtime check that narrows type", "Compile-time check", "Type declaration", "Type conversion"],
        "options_hi": ["रनटाइम चेक जो टाइप नैरो करता है", "कंपाइल-टाइम चेक", "टाइप डिक्लेरेशन", "टाइप कन्वर्जन"],
        "answer_en": "Runtime check that narrows type",
        "answer_hi": "रनटाइम चेक जो टाइप नैरो करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is 'type predicate'?",
        "question_hi": "'type predicate' क्या है?",
        "options_en": ["Function that returns type predicate", "Boolean function", "Type checking function", "Type conversion function"],
        "options_hi": ["वह फ़ंक्शन जो टाइप प्रेडिकेट रिटर्न करता है", "बूलियन फ़ंक्शन", "टाइप चेकिंग फ़ंक्शन", "टाइप कन्वर्जन फ़ंक्शन"],
        "answer_en": "Function that returns type predicate",
        "answer_hi": "वह फ़ंक्शन जो टाइप प्रेडिकेट रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is 'discriminated union'?",
        "question_hi": "'discriminated union' क्या है?",
        "options_en": ["Union with common property to discriminate", "Simple union", "Intersection", "Generic type"],
        "options_hi": ["कॉमन प्रॉपर्टी वाला यूनियन जो डिस्क्रिमिनेट करता है", "सिंपल यूनियन", "इंटरसेक्शन", "जेनेरिक टाइप"],
        "answer_en": "Union with common property to discriminate",
        "answer_hi": "कॉमन प्रॉपर्टी वाला यूनियन जो डिस्क्रिमिनेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is 'branded type'?",
        "question_hi": "'branded type' क्या है?",
        "options_en": ["Type with unique brand for nominal typing", "Brand name type", "Commercial type", "Trademark type"],
        "options_hi": ["नॉमिनल टाइपिंग के लिए यूनिक ब्रांड वाला टाइप", "ब्रांड नेम टाइप", "कमर्शियल टाइप", "ट्रेडमार्क टाइप"],
        "answer_en": "Type with unique brand for nominal typing",
        "answer_hi": "नॉमिनल टाइपिंग के लिए यूनिक ब्रांड वाला टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is 'type narrowing'?",
        "question_hi": "'type narrowing' क्या है?",
        "options_en": ["Process of refining types to more specific", "Making types wider", "Changing types", "Converting types"],
        "options_hi": ["टाइप्स को अधिक स्पेसिफिक में रिफाइन करने की प्रक्रिया", "टाइप्स को विडर बनाना", "टाइप्स बदलना", "टाइप्स कन्वर्ट करना"],
        "answer_en": "Process of refining types to more specific",
        "answer_hi": "टाइप्स को अधिक स्पेसिफिक में रिफाइन करने की प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is 'type widening'?",
        "question_hi": "'type widening' क्या है?",
        "options_en": ["Process of making types more general", "Making types narrower", "Changing types", "Converting types"],
        "options_hi": ["टाइप्स को अधिक जनरल बनाने की प्रक्रिया", "टाइप्स को नैरोअर बनाना", "टाइप्स बदलना", "टाइप्स कन्वर्ट करना"],
        "answer_en": "Process of making types more general",
        "answer_hi": "टाइप्स को अधिक जनरल बनाने की प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is 'const assertion'?",
        "question_hi": "'const assertion' क्या है?",
        "options_en": ["Assertion that makes values readonly", "Constant declaration", "Variable declaration", "Type declaration"],
        "options_hi": ["वह असर्शन जो वैल्यूज़ को रीडओनली बनाता है", "कॉन्स्टेंट डिक्लेरेशन", "वेरिएबल डिक्लेरेशन", "टाइप डिक्लेरेशन"],
        "answer_en": "Assertion that makes values readonly",
        "answer_hi": "वह असर्शन जो वैल्यूज़ को रीडओनली बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is 'satisfies' operator?",
        "question_hi": "'satisfies' ऑपरेटर क्या है?",
        "options_en": ["Checks if value satisfies type", "Checks equality", "Checks assignment", "Checks type"],
        "options_hi": ["चेक करता है कि वैल्यू टाइप को सैटिस्फाई करती है", "इक्वलिटी चेक करता है", "असाइनमेंट चेक करता है", "टाइप चेक करता है"],
        "answer_en": "Checks if value satisfies type",
        "answer_hi": "चेक करता है कि वैल्यू टाइप को सैटिस्फाई करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is 'declaration merging'?",
        "question_hi": "'declaration merging' क्या है?",
        "options_en": ["Merging multiple declarations of same name", "Merging files", "Merging types", "Merging interfaces"],
        "options_hi": ["एक ही नाम के मल्टीपल डिक्लेरेशन मर्ज करना", "फाइल्स मर्ज करना", "टाइप्स मर्ज करना", "इंटरफेसेस मर्ज करना"],
        "answer_en": "Merging multiple declarations of same name",
        "answer_hi": "एक ही नाम के मल्टीपल डिक्लेरेशन मर्ज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is 'module augmentation'?",
        "question_hi": "'module augmentation' क्या है?",
        "options_en": ["Adding to existing module declarations", "Creating new modules", "Deleting modules", "Modifying modules"],
        "options_hi": ["एक्जिस्टिंग मॉड्यूल डिक्लेरेशन में ऐड करना", "नए मॉड्यूल क्रिएट करना", "मॉड्यूल डिलीट करना", "मॉड्यूल मॉडिफाई करना"],
        "answer_en": "Adding to existing module declarations",
        "answer_hi": "एक्जिस्टिंग मॉड्यूल डिक्लेरेशन में ऐड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is 'global augmentation'?",
        "question_hi": "'global augmentation' क्या है?",
        "options_en": ["Adding to global scope from module", "Creating global variables", "Deleting globals", "Modifying globals"],
        "options_hi": ["मॉड्यूल से ग्लोबल स्कोप में ऐड करना", "ग्लोबल वेरिएबल्स क्रिएट करना", "ग्लोबल्स डिलीट करना", "ग्लोबल्स मॉडिफाई करना"],
        "answer_en": "Adding to global scope from module",
        "answer_hi": "मॉड्यूल से ग्लोबल स्कोप में ऐड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is 'mixin' pattern?",
        "question_hi": "'mixin' पैटर्न क्या है?",
        "options_en": ["Composing classes from multiple sources", "Mixing types", "Merging interfaces", "Combining functions"],
        "options_hi": ["मल्टीपल सोर्सेस से क्लासेस कंपोज करना", "टाइप्स मिक्स करना", "इंटरफेसेस मर्ज करना", "फ़ंक्शन्स कंबाइन करना"],
        "answer_en": "Composing classes from multiple sources",
        "answer_hi": "मल्टीपल सोर्सेस से क्लासेस कंपोज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is 'decorator'?",
        "question_hi": "'decorator' क्या है?",
        "options_en": ["Special declaration that can modify classes", "Function decorator", "Object decorator", "Type decorator"],
        "options_hi": ["स्पेशल डिक्लेरेशन जो क्लासेस मॉडिफाई कर सकता है", "फ़ंक्शन डेकोरेटर", "ऑब्जेक्ट डेकोरेटर", "टाइप डेकोरेटर"],
        "answer_en": "Special declaration that can modify classes",
        "answer_hi": "स्पेशल डिक्लेरेशन जो क्लासेस मॉडिफाई कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 'parameter property'?",
        "question_hi": "'parameter property' क्या है?",
        "options_en": ["Shorthand for declaring class properties in constructor", "Function parameter", "Object property", "Class method"],
        "options_hi": ["कंस्ट्रक्टर में क्लास प्रॉपर्टीज़ डिक्लेयर करने का शॉर्टहैंड", "फ़ंक्शन पैरामीटर", "ऑब्जेक्ट प्रॉपर्टी", "क्लास मेथड"],
        "answer_en": "Shorthand for declaring class properties in constructor",
        "answer_hi": "कंस्ट्रक्टर में क्लास प्रॉपर्टीज़ डिक्लेयर करने का शॉर्टहैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is 'abstract method'?",
        "question_hi": "'abstract method' क्या है?",
        "options_en": ["Method without implementation in abstract class", "Concrete method", "Static method", "Private method"],
        "options_hi": ["ऐब्सट्रैक्ट क्लास में इम्प्लीमेंटेशन के बिना मेथड", "कंक्रीट मेथड", "स्टैटिक मेथड", "प्राइवेट मेथड"],
        "answer_en": "Method without implementation in abstract class",
        "answer_hi": "ऐब्सट्रैक्ट क्लास में इम्प्लीमेंटेशन के बिना मेथड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is 'static property'?",
        "question_hi": "'static property' क्या है?",
        "options_en": ["Property on class constructor, not instances", "Instance property", "Prototype property", "Object property"],
        "options_hi": ["क्लास कंस्ट्रक्टर पर प्रॉपर्टी, इंस्टेंस पर नहीं", "इंस्टेंस प्रॉपर्टी", "प्रोटोटाइप प्रॉपर्टी", "ऑब्जेक्ट प्रॉपर्टी"],
        "answer_en": "Property on class constructor, not instances",
        "answer_hi": "क्लास कंस्ट्रक्टर पर प्रॉपर्टी, इंस्टेंस पर नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is 'getter' method?",
        "question_hi": "'getter' मेथड क्या है?",
        "options_en": ["Method that gets property value", "Method that sets property", "Regular method", "Static method"],
        "options_hi": ["वह मेथड जो प्रॉपर्टी वैल्यू गेट करता है", "वह मेथड जो प्रॉपर्टी सेट करता है", "रेगुलर मेथड", "स्टैटिक मेथड"],
        "answer_en": "Method that gets property value",
        "answer_hi": "वह मेथड जो प्रॉपर्टी वैल्यू गेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is 'setter' method?",
        "question_hi": "'setter' मेथड क्या है?",
        "options_en": ["Method that sets property value", "Method that gets property", "Regular method", "Static method"],
        "options_hi": ["वह मेथड जो प्रॉपर्टी वैल्यू सेट करता है", "वह मेथड जो प्रॉपर्टी गेट करता है", "रेगुलर मेथड", "स्टैटिक मेथड"],
        "answer_en": "Method that sets property value",
        "answer_hi": "वह मेथड जो प्रॉपर्टी वैल्यू सेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is 'readonly index signature'?",
        "question_hi": "'readonly index signature' क्या है?",
        "options_en": ["Index signature that prevents writing", "Regular index signature", "Write-only index signature", "Mutable index signature"],
        "options_hi": ["वह इंडेक्स सिग्नेचर जो राइटिंग प्रिवेंट करता है", "रेगुलर इंडेक्स सिग्नेचर", "राइट-ओनली इंडेक्स सिग्नेचर", "म्यूटेबल इंडेक्स सिग्नेचर"],
        "answer_en": "Index signature that prevents writing",
        "answer_hi": "वह इंडेक्स सिग्नेचर जो राइटिंग प्रिवेंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is 'call signature'?",
        "question_hi": "'call signature' क्या है?",
        "options_en": ["Type that describes callable object", "Function type", "Method type", "Constructor type"],
        "options_hi": ["वह टाइप जो कॉलेबल ऑब्जेक्ट डिस्क्राइब करता है", "फ़ंक्शन टाइप", "मेथड टाइप", "कंस्ट्रक्टर टाइप"],
        "answer_en": "Type that describes callable object",
        "answer_hi": "वह टाइप जो कॉलेबल ऑब्जेक्ट डिस्क्राइब करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is 'construct signature'?",
        "question_hi": "'construct signature' क्या है?",
        "options_en": ["Type that describes constructible object", "Call signature", "Function signature", "Method signature"],
        "options_hi": ["वह टाइप जो कंस्ट्रक्टिबल ऑब्जेक्ट डिस्क्राइब करता है", "कॉल सिग्नेचर", "फ़ंक्शन सिग्नेचर", "मेथड सिग्नेचर"],
        "answer_en": "Type that describes constructible object",
        "answer_hi": "वह टाइप जो कंस्ट्रक्टिबल ऑब्जेक्ट डिस्क्राइब करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is 'index signature'?",
        "question_hi": "'index signature' क्या है?",
        "options_en": ["Type that describes indexable object", "Array type", "Object type", "Map type"],
        "options_hi": ["वह टाइप जो इंडेक्सेबल ऑब्जेक्ट डिस्क्राइब करता है", "ऐरे टाइप", "ऑब्जेक्ट टाइप", "मैप टाइप"],
        "answer_en": "Type that describes indexable object",
        "answer_hi": "वह टाइप जो इंडेक्सेबल ऑब्जेक्ट डिस्क्राइब करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is 'method signature'?",
        "question_hi": "'method signature' क्या है?",
        "options_en": ["Type that describes object method", "Function type", "Call signature", "Construct signature"],
        "options_hi": ["वह टाइप जो ऑब्जेक्ट मेथड डिस्क्राइब करता है", "फ़ंक्शन टाइप", "कॉल सिग्नेचर", "कंस्ट्रक्ट सिग्नेचर"],
        "answer_en": "Type that describes object method",
        "answer_hi": "वह टाइप जो ऑब्जेक्ट मेथड डिस्क्राइब करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 'property signature'?",
        "question_hi": "'property signature' क्या है?",
        "options_en": ["Type that describes object property", "Method signature", "Call signature", "Index signature"],
        "options_hi": ["वह टाइप जो ऑब्जेक्ट प्रॉपर्टी डिस्क्राइब करता है", "मेथड सिग्नेचर", "कॉल सिग्नेचर", "इंडेक्स सिग्नेचर"],
        "answer_en": "Type that describes object property",
        "answer_hi": "वह टाइप जो ऑब्जेक्ट प्रॉपर्टी डिस्क्राइब करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is 'function overload'?",
        "question_hi": "'function overload' क्या है?",
        "options_en": ["Multiple function signatures for same function", "Single function signature", "Generic function", "Arrow function"],
        "options_hi": ["एक ही फ़ंक्शन के लिए मल्टीपल फ़ंक्शन सिग्नेचर्स", "सिंगल फ़ंक्शन सिग्नेचर", "जेनेरिक फ़ंक्शन", "एरो फ़ंक्शन"],
        "answer_en": "Multiple function signatures for same function",
        "answer_hi": "एक ही फ़ंक्शन के लिए मल्टीपल फ़ंक्शन सिग्नेचर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is 'constructor overload'?",
        "question_hi": "'constructor overload' क्या है?",
        "options_en": ["Multiple constructor signatures", "Single constructor", "Default constructor", "Private constructor"],
        "options_hi": ["मल्टीपल कंस्ट्रक्टर सिग्नेचर्स", "सिंगल कंस्ट्रक्टर", "डिफ़ॉल्ट कंस्ट्रक्टर", "प्राइवेट कंस्ट्रक्टर"],
        "answer_en": "Multiple constructor signatures",
        "answer_hi": "मल्टीपल कंस्ट्रक्टर सिग्नेचर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is 'default type parameter'?",
        "question_hi": "'default type parameter' क्या है?",
        "options_en": ["Default type for generic parameter", "Required type parameter", "Optional type parameter", "Inferred type parameter"],
        "options_hi": ["जेनेरिक पैरामीटर के लिए डिफ़ॉल्ट टाइप", "रिक्वायर्ड टाइप पैरामीटर", "ऑप्शनल टाइप पैरामीटर", "इनफेर्ड टाइप पैरामीटर"],
        "answer_en": "Default type for generic parameter",
        "answer_hi": "जेनेरिक पैरामीटर के लिए डिफ़ॉल्ट टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is 'const type parameter'?",
        "question_hi": "'const type parameter' क्या है?",
        "options_en": ["Type parameter inferred as literal", "Mutable type parameter", "Generic type parameter", "Default type parameter"],
        "options_hi": ["वह टाइप पैरामीटर जो लिटरल के रूप में इनफेर्ड हो", "म्यूटेबल टाइप पैरामीटर", "जेनेरिक टाइप पैरामीटर", "डिफ़ॉल्ट टाइप पैरामीटर"],
        "answer_en": "Type parameter inferred as literal",
        "answer_hi": "वह टाइप पैरामीटर जो लिटरल के रूप में इनफेर्ड हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is 'variance annotation'?",
        "question_hi": "'variance annotation' क्या है?",
        "options_en": ["Annotation for generic type parameter variance", "Type annotation", "Function annotation", "Class annotation"],
        "options_hi": ["जेनेरिक टाइप पैरामीटर वेरिएंस के लिए एनोटेशन", "टाइप एनोटेशन", "फ़ंक्शन एनोटेशन", "क्लास एनोटेशन"],
        "answer_en": "Annotation for generic type parameter variance",
        "answer_hi": "जेनेरिक टाइप पैरामीटर वेरिएंस के लिए एनोटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is 'in' variance?",
        "question_hi": "'in' वेरिएंस क्या है?",
        "options_en": ["Contravariant type parameter", "Covariant type parameter", "Invariant type parameter", "Bivariant type parameter"],
        "options_hi": ["कॉन्ट्रावेरिएंट टाइप पैरामीटर", "कोवेरिएंट टाइप पैरामीटर", "इनवेरिएंट टाइप पैरामीटर", "बाइवेरिएंट टाइप पैरामीटर"],
        "answer_en": "Contravariant type parameter",
        "answer_hi": "कॉन्ट्रावेरिएंट टाइप पैरामीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is 'out' variance?",
        "question_hi": "'out' वेरिएंस क्या है?",
        "options_en": ["Covariant type parameter", "Contravariant type parameter", "Invariant type parameter", "Bivariant type parameter"],
        "options_hi": ["कोवेरिएंट टाइप पैरामीटर", "कॉन्ट्रावेरिएंट टाइप पैरामीटर", "इनवेरिएंट टाइप पैरामीटर", "बाइवेरिएंट टाइप पैरामीटर"],
        "answer_en": "Covariant type parameter",
        "answer_hi": "कोवेरिएंट टाइप पैरामीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is 'in out' variance?",
        "question_hi": "'in out' वेरिएंस क्या है?",
        "options_en": ["Invariant type parameter", "Covariant type parameter", "Contravariant type parameter", "Bivariant type parameter"],
        "options_hi": ["इनवेरिएंट टाइप पैरामीटर", "कोवेरिएंट टाइप पैरामीटर", "कॉन्ट्रावेरिएंट टाइप पैरामीटर", "बाइवेरिएंट टाइप पैरामीटर"],
        "answer_en": "Invariant type parameter",
        "answer_hi": "इनवेरिएंट टाइप पैरामीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is 'type-only import'?",
        "question_hi": "'type-only import' क्या है?",
        "options_en": ["Import only type information", "Import value", "Import both type and value", "Import everything"],
        "options_hi": ["केवल टाइप इनफॉर्मेशन इम्पोर्ट करना", "वैल्यू इम्पोर्ट करना", "टाइप और वैल्यू दोनों इम्पोर्ट करना", "सब कुछ इम्पोर्ट करना"],
        "answer_en": "Import only type information",
        "answer_hi": "केवल टाइप इनफॉर्मेशन इम्पोर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is 'type-only export'?",
        "question_hi": "'type-only export' क्या है?",
        "options_en": ["Export only type information", "Export value", "Export both type and value", "Export everything"],
        "options_hi": ["केवल टाइप इनफॉर्मेशन एक्सपोर्ट करना", "वैल्यू एक्सपोर्ट करना", "टाइप और वैल्यू दोनों एक्सपोर्ट करना", "सब कुछ एक्सपोर्ट करना"],
        "answer_en": "Export only type information",
        "answer_hi": "केवल टाइप इनफॉर्मेशन एक्सपोर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is 'import type' syntax?",
        "question_hi": "'import type' सिंटैक्स क्या है?",
        "options_en": ["import type { T } from 'module'", "import { type T } from 'module'", "Both A and B", "type import { T } from 'module'"],
        "options_hi": ["import type { T } from 'module'", "import { type T } from 'module'", "A और B दोनों", "type import { T } from 'module'"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is 'export type' syntax?",
        "question_hi": "'export type' सिंटैक्स क्या है?",
        "options_en": ["export type { T }", "export { type T }", "Both A and B", "type export { T }"],
        "options_hi": ["export type { T }", "export { type T }", "A और B दोनों", "type export { T }"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is 'ambient module'?",
        "question_hi": "'ambient module' क्या है?",
        "options_en": ["Module declared without implementation", "Regular module", "External module", "Internal module"],
        "options_hi": ["इम्प्लीमेंटेशन के बिना डिक्लेयर्ड मॉड्यूल", "रेगुलर मॉड्यूल", "एक्सटर्नल मॉड्यूल", "इंटर्नल मॉड्यूल"],
        "answer_en": "Module declared without implementation",
        "answer_hi": "इम्प्लीमेंटेशन के बिना डिक्लेयर्ड मॉड्यूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is '.d.ts' file?",
        "question_hi": "'.d.ts' फाइल क्या है?",
        "options_en": ["Declaration file with type definitions", "Implementation file", "Configuration file", "Test file"],
        "options_hi": ["टाइप डेफिनिशन वाली डिक्लेरेशन फाइल", "इम्प्लीमेंटेशन फाइल", "कॉन्फ़िगरेशन फाइल", "टेस्ट फाइल"],
        "answer_en": "Declaration file with type definitions",
        "answer_hi": "टाइप डेफिनिशन वाली डिक्लेरेशन फाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is 'triple-slash directive'?",
        "question_hi": "'triple-slash directive' क्या है?",
        "options_en": ["Comment directive starting with ///", "Double slash comment", "Single slash comment", "No comment"],
        "options_hi": ["/// से शुरू होने वाली कमेंट डायरेक्टिव", "डबल स्लैश कमेंट", "सिंगल स्लैश कमेंट", "कोई कमेंट नहीं"],
        "answer_en": "Comment directive starting with ///",
        "answer_hi": "/// से शुरू होने वाली कमेंट डायरेक्टिव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is '/// <reference />' directive?",
        "question_hi": "'/// <reference />' डायरेक्टिव क्या है?",
        "options_en": ["References declaration file", "Imports module", "Exports module", "Defines type"],
        "options_hi": ["डिक्लेरेशन फाइल को रेफर करता है", "मॉड्यूल इम्पोर्ट करता है", "मॉड्यूल एक्सपोर्ट करता है", "टाइप डिफाइन करता है"],
        "answer_en": "References declaration file",
        "answer_hi": "डिक्लेरेशन फाइल को रेफर करता है",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 91,
        "question_en": "What is '/// <reference types=\"\" />' directive?",
        "question_hi": "'/// <reference types=\"\" />' डायरेक्टिव क्या है?",
        "options_en": ["References type declaration package", "References file", "Imports module", "Exports module"],
        "options_hi": ["टाइप डिक्लेरेशन पैकेज को रेफर करता है", "फाइल को रेफर करता है", "मॉड्यूल इम्पोर्ट करता है", "मॉड्यूल एक्सपोर्ट करता है"],
        "answer_en": "References type declaration package",
        "answer_hi": "टाइप डिक्लेरेशन पैकेज को रेफर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is '/// <amd-module />' directive?",
        "question_hi": "'/// <amd-module />' डायरेक्टिव क्या है?",
        "options_en": ["Specifies AMD module name", "Specifies CommonJS module", "Specifies ES module", "Specifies module type"],
        "options_hi": ["AMD मॉड्यूल नेम स्पेसिफाई करता है", "CommonJS मॉड्यूल स्पेसिफाई करता है", "ES मॉड्यूल स्पेसिफाई करता है", "मॉड्यूल टाइप स्पेसिफाई करता है"],
        "answer_en": "Specifies AMD module name",
        "answer_hi": "AMD मॉड्यूल नेम स्पेसिफाई करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is '/// <amd-dependency />' directive?",
        "question_hi": "'/// <amd-dependency />' डायरेक्टिव क्या है?",
        "options_en": ["Specifies AMD dependency", "Specifies CommonJS dependency", "Specifies ES dependency", "Specifies dependency type"],
        "options_hi": ["AMD डिपेंडेंसी स्पेसिफाई करता है", "CommonJS डिपेंडेंसी स्पेसिफाई करता है", "ES डिपेंडेंसी स्पेसिफाई करता है", "डिपेंडेंसी टाइप स्पेसिफाई करता है"],
        "answer_en": "Specifies AMD dependency",
        "answer_hi": "AMD डिपेंडेंसी स्पेसिफाई करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is '/// <reference lib=\"\" />' directive?",
        "question_hi": "'/// <reference lib=\"\" />' डायरेक्टिव क्या है?",
        "options_en": ["References built-in lib file", "References external lib", "References module", "References file"],
        "options_hi": ["बिल्ट-इन लिब फाइल को रेफर करता है", "एक्सटर्नल लिब को रेफर करता है", "मॉड्यूल को रेफर करता है", "फाइल को रेफर करता है"],
        "answer_en": "References built-in lib file",
        "answer_hi": "बिल्ट-इन लिब फाइल को रेफर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is '/// <reference no-default-lib=\"\" />' directive?",
        "question_hi": "'/// <reference no-default-lib=\"\" />' डायरेक्टिव क्या है?",
        "options_en": ["Excludes default lib", "Includes default lib", "References lib", "Imports lib"],
        "options_hi": ["डिफ़ॉल्ट लिब एक्सक्लूड करता है", "डिफ़ॉल्ट लिब इन्क्लूड करता है", "लिब को रेफर करता है", "लिब इम्पोर्ट करता है"],
        "answer_en": "Excludes default lib",
        "answer_hi": "डिफ़ॉल्ट लिब एक्सक्लूड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is '/// <reference path=\"\" />' directive?",
        "question_hi": "'/// <reference path=\"\" />' डायरेक्टिव क्या है?",
        "options_en": ["References file by path", "References types", "References lib", "References module"],
        "options_hi": ["पाथ द्वारा फाइल को रेफर करता है", "टाइप्स को रेफर करता है", "लिब को रेफर करता है", "मॉड्यूल को रेफर करता है"],
        "answer_en": "References file by path",
        "answer_hi": "पाथ द्वारा फाइल को रेफर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is 'tsc --init' command?",
        "question_hi": "'tsc --init' कमांड क्या है?",
        "options_en": ["Creates tsconfig.json file", "Initializes TypeScript project", "Compiles TypeScript", "Checks types"],
        "options_hi": ["tsconfig.json फाइल क्रिएट करता है", "TypeScript प्रोजेक्ट इनिशियलाइज़ करता है", "TypeScript कंपाइल करता है", "टाइप्स चेक करता है"],
        "answer_en": "Creates tsconfig.json file",
        "answer_hi": "tsconfig.json फाइल क्रिएट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 'tsc --watch' command?",
        "question_hi": "'tsc --watch' कमांड क्या है?",
        "options_en": ["Watches files and recompiles on changes", "Compiles once", "Checks types", "Creates declaration files"],
        "options_hi": ["फाइल्स वॉच करता है और चेंजेस पर रीकंपाइल करता है", "एक बार कंपाइल करता है", "टाइप्स चेक करता है", "डिक्लेरेशन फाइल्स क्रिएट करता है"],
        "answer_en": "Watches files and recompiles on changes",
        "answer_hi": "फाइल्स वॉच करता है और चेंजेस पर रीकंपाइल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is 'tsc --noEmit' command?",
        "question_hi": "'tsc --noEmit' कमांड क्या है?",
        "options_en": ["Checks types without emitting files", "Emits files", "Compiles and emits", "Does nothing"],
        "options_hi": ["फाइल्स एमिट किए बिना टाइप्स चेक करता है", "फाइल्स एमिट करता है", "कंपाइल और एमिट करता है", "कुछ नहीं करता"],
        "answer_en": "Checks types without emitting files",
        "answer_hi": "फाइल्स एमिट किए बिना टाइप्स चेक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is 'tsc --target es2020' command?",
        "question_hi": "'tsc --target es2020' कमांड क्या है?",
        "options_en": ["Sets JavaScript target version to ES2020", "Sets TypeScript version", "Sets module system", "Sets output directory"],
        "options_hi": ["JavaScript टारगेट वर्जन को ES2020 सेट करता है", "TypeScript वर्जन सेट करता है", "मॉड्यूल सिस्टम सेट करता है", "आउटपुट डायरेक्टरी सेट करता है"],
        "answer_en": "Sets JavaScript target version to ES2020",
        "answer_hi": "JavaScript टारगेट वर्जन को ES2020 सेट करता है",
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