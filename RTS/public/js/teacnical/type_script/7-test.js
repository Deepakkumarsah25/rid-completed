const questions = [
    {
        "num": 1,
        "question_en": "In TypeScript, what is a union type?",
        "question_hi": "TypeScript में, union type क्या है?",
        "options_en": ["A type formed by combining two or more other types", "A type that only allows null values", "A type for merging interfaces", "A type that represents only arrays"],
        "options_hi": ["दो या अधिक अन्य प्रकारों को मिलाकर बना एक प्रकार", "एक प्रकार जो केवल null values को अनुमति देता है", "इंटरफेस को मर्ज करने के लिए एक प्रकार", "एक प्रकार जो केवल arrays को दर्शाता है"],
        "answer_en": "A type formed by combining two or more other types",
        "answer_hi": "दो या अधिक अन्य प्रकारों को मिलाकर बना एक प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How is a union type written in TypeScript?",
        "question_hi": "TypeScript में union type को कैसे लिखा जाता है?",
        "options_en": ["string | number", "string & number", "string || number", "string , number"],
        "options_hi": ["string | number", "string & number", "string || number", "string , number"],
        "answer_en": "string | number",
        "answer_hi": "string | number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the main purpose of union types?",
        "question_hi": "Union types का मुख्य उद्देश्य क्या है?",
        "options_en": ["To allow a value to be one of several types", "To enforce strict single-type variables", "To create new primitive types", "To replace interfaces"],
        "options_hi": ["एक value को कई प्रकारों में से एक होने की अनुमति देना", "सख्त एकल-प्रकार वेरिएबल को लागू करना", "नए primitive प्रकार बनाना", "इंटरफेस को बदलना"],
        "answer_en": "To allow a value to be one of several types",
        "answer_hi": "एक value को कई प्रकारों में से एक होने की अनुमति देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In TypeScript, which operator is used for union types?",
        "question_hi": "TypeScript में, union types के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["|", "&", "||", "&&"],
        "options_hi": ["|", "&", "||", "&&"],
        "answer_en": "|",
        "answer_hi": "|",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is 'type narrowing' in the context of union types?",
        "question_hi": "Union types के संदर्भ में 'type narrowing' क्या है?",
        "options_en": ["Process of refining a variable to a more specific type", "Process of widening a type to accept more values", "Process of merging two union types", "Process of creating generic types"],
        "options_hi": ["एक variable को अधिक विशिष्ट प्रकार में सीमित करने की प्रक्रिया", "अधिक values को स्वीकार करने के लिए एक प्रकार को विस्तृत करने की प्रक्रिया", "दो union types को मर्ज करने की प्रक्रिया", "generic प्रकार बनाने की प्रक्रिया"],
        "answer_en": "Process of refining a variable to a more specific type",
        "answer_hi": "एक variable को अधिक विशिष्ट प्रकार में सीमित करने की प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of these is a valid union type in TypeScript?",
        "question_hi": "TypeScript में इनमें से कौन सा एक वैध union type है?",
        "options_en": ["boolean | null", "boolean & null", "boolean || null", "boolean , null"],
        "options_hi": ["boolean | null", "boolean & null", "boolean || null", "boolean , null"],
        "answer_en": "boolean | null",
        "answer_hi": "boolean | null",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What will be the type of 'result' in: let result = Math.random() > 0.5 ? 'hello' : 123;",
        "question_hi": "'result' का प्रकार क्या होगा: let result = Math.random() > 0.5 ? 'hello' : 123;",
        "options_en": ["string | number", "any", "unknown", "string & number"],
        "options_hi": ["string | number", "any", "unknown", "string & number"],
        "answer_en": "string | number",
        "answer_hi": "string | number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which method is commonly used to narrow a union type of string or number?",
        "question_hi": "string या number के union type को narrow करने के लिए आमतौर पर किस विधि का उपयोग किया जाता है?",
        "options_en": ["typeof operator", "instanceof operator", "type casting", "as keyword"],
        "options_hi": ["typeof ऑपरेटर", "instanceof ऑपरेटर", "type casting", "as कीवर्ड"],
        "answer_en": "typeof operator",
        "answer_hi": "typeof ऑपरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does the union type 'string | undefined' mean?",
        "question_hi": "Union type 'string | undefined' का क्या अर्थ है?",
        "options_en": ["Value can be either a string or undefined", "Value must be both string and undefined", "Value is an optional string parameter", "Value is never undefined"],
        "options_hi": ["Value या तो string हो सकती है या undefined", "Value को string और undefined दोनों होना चाहिए", "Value एक वैकल्पिक string parameter है", "Value कभी undefined नहीं है"],
        "answer_en": "Value can be either a string or undefined",
        "answer_hi": "Value या तो string हो सकती है या undefined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In Flow (JavaScript type checker), how is a union type written?",
        "question_hi": "Flow (JavaScript type checker) में, union type कैसे लिखा जाता है?",
        "options_en": ["string | number", "string or number", "string || number", "string & number"],
        "options_hi": ["string | number", "string or number", "string || number", "string & number"],
        "answer_en": "string | number",
        "answer_hi": "string | number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is a 'discriminated union' in TypeScript?",
        "question_hi": "TypeScript में 'discriminated union' क्या है?",
        "options_en": ["A union type with a common property used for type narrowing", "A union that discriminates against certain types", "A union that only allows discriminated types", "A union type with generic constraints"],
        "options_hi": ["एक union type जिसमें type narrowing के लिए उपयोग की जाने वाली common property होती है", "एक union जो कुछ प्रकारों के खिलाफ भेदभाव करता है", "एक union जो केवल discriminated types की अनुमति देता है", "generic constraints वाला एक union type"],
        "answer_en": "A union type with a common property used for type narrowing",
        "answer_hi": "एक union type जिसमें type narrowing के लिए उपयोग की जाने वाली common property होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which keyword is used for type aliases of union types in TypeScript?",
        "question_hi": "TypeScript में union types के type aliases के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["type", "interface", "union", "alias"],
        "options_hi": ["type", "interface", "union", "alias"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between union type (|) and intersection type (&)?",
        "question_hi": "Union type (|) और intersection type (&) में क्या अंतर है?",
        "options_en": ["Union: one of several types; Intersection: combination of all types", "Union: combination of all types; Intersection: one of several types", "Both are same", "Union is for classes, Intersection is for interfaces"],
        "options_hi": ["Union: कई प्रकारों में से एक; Intersection: सभी प्रकारों का संयोजन", "Union: सभी प्रकारों का संयोजन; Intersection: कई प्रकारों में से एक", "दोनों समान हैं", "Union classes के लिए है, Intersection interfaces के लिए है"],
        "answer_en": "Union: one of several types; Intersection: combination of all types",
        "answer_hi": "Union: कई प्रकारों में से एक; Intersection: सभी प्रकारों का संयोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How can you handle all possible cases in a union type to avoid type errors?",
        "question_hi": "Type errors से बचने के लिए आप union type में सभी संभावित cases को कैसे हैंडल कर सकते हैं?",
        "options_en": ["Using exhaustive type checking (like switch with never type)", "Using type assertion everywhere", "Avoiding union types", "Using 'any' type"],
        "options_hi": ["Exhaustive type checking का उपयोग करना (जैसे never type के साथ switch)", "हर जगह type assertion का उपयोग करना", "Union types से बचना", "'any' प्रकार का उपयोग करना"],
        "answer_en": "Using exhaustive type checking (like switch with never type)",
        "answer_hi": "Exhaustive type checking का उपयोग करना (जैसे never type के साथ switch)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What will TypeScript infer for: let arr = [1, 'hello', true];",
        "question_hi": "TypeScript क्या infer करेगा: let arr = [1, 'hello', true];",
        "options_en": ["(string | number | boolean)[]", "any[]", "unknown[]", "number[]"],
        "options_hi": ["(string | number | boolean)[]", "any[]", "unknown[]", "number[]"],
        "answer_en": "(string | number | boolean)[]",
        "answer_hi": "(string | number | boolean)[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "In React with TypeScript, what is a common use case for union types?",
        "question_hi": "TypeScript के साथ React में, union types का एक सामान्य उपयोग मामला क्या है?",
        "options_en": ["useState hook with multiple possible types", "Component props as any", "Always using generic types", "Avoiding prop types"],
        "options_hi": ["कई संभावित प्रकारों के साथ useState हुक", "Component props को any के रूप में", "हमेशा generic types का उपयोग करना", "Prop types से बचना"],
        "answer_en": "useState hook with multiple possible types",
        "answer_hi": "कई संभावित प्रकारों के साथ useState हुक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does the union type 'never | string' evaluate to?",
        "question_hi": "Union type 'never | string' का मूल्यांकन क्या होगा?",
        "options_en": ["string", "never", "string | never", "unknown"],
        "options_hi": ["string", "never", "string | never", "unknown"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which TypeScript feature allows creating a union from array literal values?",
        "question_hi": "कौन सी TypeScript सुविधा array literal values से union बनाने की अनुमति देती है?",
        "options_en": ["const assertions (as const)", "type inference", "generic arrays", "mapped types"],
        "options_hi": ["const assertions (as const)", "type inference", "generic arrays", "mapped types"],
        "answer_en": "const assertions (as const)",
        "answer_hi": "const assertions (as const)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is a common pattern for API responses using union types?",
        "question_hi": "Union types का उपयोग करते हुए API responses के लिए एक सामान्य पैटर्न क्या है?",
        "options_en": ["success | error union types", "always using any type", "only success type", "multiple interfaces without union"],
        "options_hi": ["success | error union types", "हमेशा any प्रकार का उपयोग करना", "केवल success प्रकार", "union के बिना multiple interfaces"],
        "answer_en": "success | error union types",
        "answer_hi": "success | error union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you narrow a union type when dealing with custom objects?",
        "question_hi": "कस्टम objects के साथ काम करते समय आप union type को कैसे narrow करते हैं?",
        "options_en": ["Using type guards with 'kind' or 'type' property", "Always using type assertion", "Avoiding custom objects", "Using only primitive types"],
        "options_hi": ["'kind' या 'type' property के साथ type guards का उपयोग करना", "हमेशा type assertion का उपयोग करना", "कस्टम objects से बचना", "केवल primitive types का उपयोग करना"],
        "answer_en": "Using type guards with 'kind' or 'type' property",
        "answer_hi": "'kind' या 'type' property के साथ type guards का उपयोग करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is 'type assertion' in TypeScript?",
        "question_hi": "TypeScript में 'type assertion' क्या है?",
        "options_en": ["Telling compiler about a more specific type than inferred", "Asserting that a value is never null", "Creating new union types", "Narrowing types automatically"],
        "options_hi": ["Compiler को inferred से अधिक विशिष्ट प्रकार बताना", "यह दावा करना कि कोई मान कभी null नहीं है", "नए union types बनाना", "स्वचालित रूप से types को narrow करना"],
        "answer_en": "Telling compiler about a more specific type than inferred",
        "answer_hi": "Compiler को inferred से अधिक विशिष्ट प्रकार बताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which of these is NOT a valid way to narrow union types?",
        "question_hi": "इनमें से कौन सा union types को narrow करने का वैध तरीका नहीं है?",
        "options_en": ["Using random() function", "Using typeof operator", "Using instanceof operator", "Using in operator"],
        "options_hi": ["random() function का उपयोग करना", "typeof ऑपरेटर का उपयोग करना", "instanceof ऑपरेटर का उपयोग करना", "in ऑपरेटर का उपयोग करना"],
        "answer_en": "Using random() function",
        "answer_hi": "random() function का उपयोग करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What does the 'in' operator do in type narrowing?",
        "question_hi": "Type narrowing में 'in' ऑपरेटर क्या करता है?",
        "options_en": ["Checks if a property exists on an object", "Checks if a value is in an array", "Creates a new union type", "Merges two types"],
        "options_hi": ["जाँचता है कि किसी object पर property मौजूद है या नहीं", "जाँचता है कि कोई मान array में है या नहीं", "एक नया union type बनाता है", "दो प्रकारों को मर्ज करता है"],
        "answer_en": "Checks if a property exists on an object",
        "answer_hi": "जाँचता है कि किसी object पर property मौजूद है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How can you create a union of string literals in TypeScript?",
        "question_hi": "TypeScript में string literals का union कैसे बना सकते हैं?",
        "options_en": ["type Status = 'active' | 'inactive' | 'pending';", "type Status = 'active' || 'inactive' || 'pending';", "type Status = 'active' & 'inactive' & 'pending';", "type Status = ['active', 'inactive', 'pending'];"],
        "options_hi": ["type Status = 'active' | 'inactive' | 'pending';", "type Status = 'active' || 'inactive' || 'pending';", "type Status = 'active' & 'inactive' & 'pending';", "type Status = ['active', 'inactive', 'pending'];"],
        "answer_en": "type Status = 'active' | 'inactive' | 'pending';",
        "answer_hi": "type Status = 'active' | 'inactive' | 'pending';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the 'unknown' type in TypeScript?",
        "question_hi": "TypeScript में 'unknown' प्रकार क्या है?",
        "options_en": ["Type-safe counterpart of 'any' that requires type checking", "Same as 'any' type", "Union of all types", "Type that represents only null and undefined"],
        "options_hi": ["'any' का type-safe counterpart जिसे type checking की आवश्यकता होती है", "'any' प्रकार के समान", "सभी प्रकारों का union", "प्रकार जो केवल null और undefined का प्रतिनिधित्व करता है"],
        "answer_en": "Type-safe counterpart of 'any' that requires type checking",
        "answer_hi": "'any' का type-safe counterpart जिसे type checking की आवश्यकता होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How does union type work with function parameters?",
        "question_hi": "Function parameters के साथ union type कैसे काम करता है?",
        "options_en": ["Parameter can accept any of the union types", "Parameter must accept all union types simultaneously", "Parameter becomes optional", "Parameter type becomes 'any'"],
        "options_hi": ["Parameter union के किसी भी प्रकार को स्वीकार कर सकता है", "Parameter को सभी union types को एक साथ स्वीकार करना होगा", "Parameter वैकल्पिक हो जाता है", "Parameter प्रकार 'any' बन जाता है"],
        "answer_en": "Parameter can accept any of the union types",
        "answer_hi": "Parameter union के किसी भी प्रकार को स्वीकार कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is a 'type guard' function?",
        "question_hi": "'type guard' function क्या है?",
        "options_en": ["Function that returns a type predicate to narrow types", "Function that guards against type errors", "Function that creates new types", "Function that merges union types"],
        "options_hi": ["Function जो types को narrow करने के लिए type predicate return करती है", "Function जो type errors के खिलाफ सुरक्षा करती है", "Function जो नए types बनाती है", "Function जो union types को मर्ज करती है"],
        "answer_en": "Function that returns a type predicate to narrow types",
        "answer_hi": "Function जो types को narrow करने के लिए type predicate return करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which syntax is correct for a type guard function?",
        "question_hi": "Type guard function के लिए कौन सा syntax सही है?",
        "options_en": ["function isString(x: any): x is string { return typeof x === 'string'; }", "function isString(x: any): boolean { return typeof x === 'string'; }", "function isString(x: any): string { return x; }", "function isString(x: any): typeof string { return true; }"],
        "options_hi": ["function isString(x: any): x is string { return typeof x === 'string'; }", "function isString(x: any): boolean { return typeof x === 'string'; }", "function isString(x: any): string { return x; }", "function isString(x: any): typeof string { return true; }"],
        "answer_en": "function isString(x: any): x is string { return typeof x === 'string'; }",
        "answer_hi": "function isString(x: any): x is string { return typeof x === 'string'; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What does 'exhaustiveness checking' ensure with union types?",
        "question_hi": "Union types के साथ 'exhaustiveness checking' क्या सुनिश्चित करती है?",
        "options_en": ["All possible union members are handled", "Code runs faster", "No runtime errors occur", "Types are inferred automatically"],
        "options_hi": ["सभी संभावित union members को हैंडल किया जाता है", "कोड तेजी से चलता है", "कोई runtime error नहीं होती", "Types स्वचालित रूप से infer हो जाती हैं"],
        "answer_en": "All possible union members are handled",
        "answer_hi": "सभी संभावित union members को हैंडल किया जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How can you make a property optional in TypeScript interface?",
        "question_hi": "TypeScript interface में आप किसी property को वैकल्पिक कैसे बना सकते हैं?",
        "options_en": ["Using ? after property name", "Using | undefined", "Using optional keyword", "Both A and B"],
        "options_hi": ["Property नाम के बाद ? का उपयोग करना", "| undefined का उपयोग करना", "optional कीवर्ड का उपयोग करना", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the union type for a React useState hook that can be string or null?",
        "question_hi": "React useState hook के लिए union type क्या होगा जो string या null हो सकता है?",
        "options_en": ["const [value, setValue] = useState<string | null>(null);", "const [value, setValue] = useState<string & null>(null);", "const [value, setValue] = useState<string || null>(null);", "const [value, setValue] = useState<string, null>(null);"],
        "options_hi": ["const [value, setValue] = useState<string | null>(null);", "const [value, setValue] = useState<string & null>(null);", "const [value, setValue] = useState<string || null>(null);", "const [value, setValue] = useState<string, null>(null);"],
        "answer_en": "const [value, setValue] = useState<string | null>(null);",
        "answer_hi": "const [value, setValue] = useState<string | null>(null);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What happens when you use 'as const' with an array?",
        "question_hi": "जब आप array के साथ 'as const' का उपयोग करते हैं तो क्या होता है?",
        "options_en": ["Creates readonly tuple with literal types", "Makes array mutable", "Converts array to union type automatically", "Changes array to object"],
        "options_hi": ["Literal types के साथ readonly tuple बनाता है", "Array को mutable बनाता है", "Array को स्वचालित रूप से union type में बदलता है", "Array को object में बदलता है"],
        "answer_en": "Creates readonly tuple with literal types",
        "answer_hi": "Literal types के साथ readonly tuple बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you extract union type from tuple in TypeScript?",
        "question_hi": "TypeScript में tuple से union type कैसे निकालते हैं?",
        "options_en": ["Using indexed access: type TupleToUnion<T> = T[number];", "Using type casting", "Using spread operator", "Using Array.prototype.reduce"],
        "options_hi": ["Indexed access का उपयोग करना: type TupleToUnion<T> = T[number];", "Type casting का उपयोग करना", "Spread operator का उपयोग करना", "Array.prototype.reduce का उपयोग करना"],
        "answer_en": "Using indexed access: type TupleToUnion<T> = T[number];",
        "answer_hi": "Indexed access का उपयोग करना: type TupleToUnion<T> = T[number];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is 'conditional types' in TypeScript?",
        "question_hi": "TypeScript में 'conditional types' क्या है?",
        "options_en": ["Types that depend on conditions like ternary operator", "Types that are always conditional", "Union types with conditions", "Types that check runtime conditions"],
        "options_hi": ["प्रकार जो ternary operator जैसी conditions पर निर्भर करते हैं", "प्रकार जो हमेशा conditional होते हैं", "Conditions वाले union types", "प्रकार जो runtime conditions की जांच करते हैं"],
        "answer_en": "Types that depend on conditions like ternary operator",
        "answer_hi": "प्रकार जो ternary operator जैसी conditions पर निर्भर करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How can conditional types create union types?",
        "question_hi": "Conditional types union types कैसे बना सकते हैं?",
        "options_en": ["By distributing over union types", "By using type assertions", "By narrowing types", "By creating intersections"],
        "options_hi": ["Union types पर distribute करके", "Type assertions का उपयोग करके", "Types को narrow करके", "Intersections बनाकर"],
        "answer_en": "By distributing over union types",
        "answer_hi": "Union types पर distribute करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does 'distributive conditional types' mean?",
        "question_hi": "'distributive conditional types' का क्या अर्थ है?",
        "options_en": ["Conditional types applied to each member of a union", "Types that distribute values", "Types for mathematical distributions", "Conditional types that create unions"],
        "options_hi": ["Conditional types जो union के प्रत्येक member पर लागू होते हैं", "Values को distribute करने वाले types", "गणितीय distributions के लिए types", "Conditional types जो unions बनाते हैं"],
        "answer_en": "Conditional types applied to each member of a union",
        "answer_hi": "Conditional types जो union के प्रत्येक member पर लागू होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the 'infer' keyword used for in conditional types?",
        "question_hi": "Conditional types में 'infer' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["To infer types within conditional branches", "To create inference rules", "To replace type guards", "To narrow union types"],
        "options_hi": ["Conditional branches के भीतर types infer करने के लिए", "Inference rules बनाने के लिए", "Type guards को बदलने के लिए", "Union types को narrow करने के लिए"],
        "answer_en": "To infer types within conditional branches",
        "answer_hi": "Conditional branches के भीतर types infer करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is 'mapped types' in TypeScript?",
        "question_hi": "TypeScript में 'mapped types' क्या है?",
        "options_en": ["Types that create new types by transforming properties", "Types that map values to keys", "Types for array mapping", "Types that create unions automatically"],
        "options_hi": ["Properties को transform करके नए types बनाने वाले types", "Values को keys में मैप करने वाले types", "Array mapping के लिए types", "Types जो स्वचालित रूप से unions बनाते हैं"],
        "answer_en": "Types that create new types by transforming properties",
        "answer_hi": "Properties को transform करके नए types बनाने वाले types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How can mapped types work with union types?",
        "question_hi": "Mapped types union types के साथ कैसे काम कर सकते हैं?",
        "options_en": ["By creating unions of mapped properties", "By converting unions to intersections", "By narrowing union members", "By eliminating unions"],
        "options_hi": ["Mapped properties के unions बनाकर", "Unions को intersections में बदलकर", "Union members को narrow करके", "Unions को खत्म करके"],
        "answer_en": "By creating unions of mapped properties",
        "answer_hi": "Mapped properties के unions बनाकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is 'keyof' operator in TypeScript?",
        "question_hi": "TypeScript में 'keyof' ऑपरेटर क्या है?",
        "options_en": ["Gets union of keys from a type", "Gets keys as array", "Creates keys from union", "Checks if key exists"],
        "options_hi": ["किसी type से keys का union प्राप्त करता है", "Keys को array के रूप में प्राप्त करता है", "Union से keys बनाता है", "जाँचता है कि key मौजूद है या नहीं"],
        "answer_en": "Gets union of keys from a type",
        "answer_hi": "किसी type से keys का union प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What does 'keyof T' produce when T is a union type?",
        "question_hi": "'keyof T' क्या produce करता है जब T एक union type है?",
        "options_en": ["Union of keys from all union members", "Intersection of keys", "Only common keys", "All possible keys"],
        "options_hi": ["सभी union members से keys का union", "Keys का intersection", "केवल common keys", "सभी संभावित keys"],
        "answer_en": "Union of keys from all union members",
        "answer_hi": "सभी union members से keys का union",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is 'lookup types' in TypeScript?",
        "question_hi": "TypeScript में 'lookup types' क्या है?",
        "options_en": ["Accessing property types using bracket notation: T['key']", "Looking up types in documentation", "Finding types in unions", "Searching for type definitions"],
        "options_hi": ["Bracket notation का उपयोग करके property types तक पहुँचना: T['key']", "डॉक्यूमेंटेशन में types देखना", "Unions में types ढूँढना", "Type definitions खोजना"],
        "answer_en": "Accessing property types using bracket notation: T['key']",
        "answer_hi": "Bracket notation का उपयोग करके property types तक पहुँचना: T['key']",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How can you get union of all values from an object type?",
        "question_hi": "Object type से सभी values का union कैसे प्राप्त कर सकते हैं?",
        "options_en": ["type ValueUnion = MyObject[keyof MyObject];", "type ValueUnion = keyof MyObject;", "type ValueUnion = MyObject[number];", "type ValueUnion = valuesOf<MyObject>;"],
        "options_hi": ["type ValueUnion = MyObject[keyof MyObject];", "type ValueUnion = keyof MyObject;", "type ValueUnion = MyObject[number];", "type ValueUnion = valuesOf<MyObject>;"],
        "answer_en": "type ValueUnion = MyObject[keyof MyObject];",
        "answer_hi": "type ValueUnion = MyObject[keyof MyObject];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is 'template literal types' in TypeScript?",
        "question_hi": "TypeScript में 'template literal types' क्या है?",
        "options_en": ["String literal types that can combine unions", "Templates for creating types", "Types for string templates", "Literal union templates"],
        "options_hi": ["String literal types जो unions को combine कर सकते हैं", "Types बनाने के लिए templates", "String templates के लिए types", "Literal union templates"],
        "answer_en": "String literal types that can combine unions",
        "answer_hi": "String literal types जो unions को combine कर सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do template literal types create unions?",
        "question_hi": "Template literal types unions कैसे बनाते हैं?",
        "options_en": ["By combining union types in template strings", "By converting strings to unions", "By parsing template strings", "By creating literal unions"],
        "options_hi": ["Template strings में union types को combine करके", "Strings को unions में बदलकर", "Template strings को parse करके", "Literal unions बनाकर"],
        "answer_en": "By combining union types in template strings",
        "answer_hi": "Template strings में union types को combine करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is 'recursive types' in TypeScript?",
        "question_hi": "TypeScript में 'recursive types' क्या है?",
        "options_en": ["Types that refer to themselves", "Types that repeat", "Types for recursion", "Types with circular references"],
        "options_hi": ["Types जो स्वयं को refer करते हैं", "Types जो repeat होते हैं", "Recursion के लिए types", "Circular references वाले types"],
        "answer_en": "Types that refer to themselves",
        "answer_hi": "Types जो स्वयं को refer करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Can union types be recursive in TypeScript?",
        "question_hi": "क्या union types TypeScript में recursive हो सकते हैं?",
        "options_en": ["Yes, with type aliases", "No, never", "Only with interfaces", "Only with classes"],
        "options_hi": ["हाँ, type aliases के साथ", "नहीं, कभी नहीं", "केवल interfaces के साथ", "केवल classes के साथ"],
        "answer_en": "Yes, with type aliases",
        "answer_hi": "हाँ, type aliases के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is an example of recursive union type?",
        "question_hi": "Recursive union type का उदाहरण क्या है?",
        "options_en": ["type Tree = { value: number; children: Tree[]; }", "type Tree = { value: number; children: array; }", "type Tree = number | string", "type Tree = recursive<number>"],
        "options_hi": ["type Tree = { value: number; children: Tree[]; }", "type Tree = { value: number; children: array; }", "type Tree = number | string", "type Tree = recursive<number>"],
        "answer_en": "type Tree = { value: number; children: Tree[]; }",
        "answer_hi": "type Tree = { value: number; children: Tree[]; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'branded types' or 'opaque types'?",
        "question_hi": "'branded types' या 'opaque types' क्या है?",
        "options_en": ["Types with unique brand to prevent accidental mixing", "Types that are opaque", "Types with hidden properties", "Union types with brands"],
        "options_hi": ["Accidental mixing को रोकने के लिए unique brand वाले types", "Types जो opaque हैं", "Hidden properties वाले types", "Brands वाले union types"],
        "answer_en": "Types with unique brand to prevent accidental mixing",
        "answer_hi": "Accidental mixing को रोकने के लिए unique brand वाले types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How can union types help with branded types?",
        "question_hi": "Union types branded types में कैसे मदद कर सकते हैं?",
        "options_en": ["By creating union of branded types", "By eliminating brands", "By hiding type information", "By making types transparent"],
        "options_hi": ["Branded types के union बनाकर", "Brands को खत्म करके", "Type information को छिपाकर", "Types को transparent बनाकर"],
        "answer_en": "By creating union of branded types",
        "answer_hi": "Branded types के union बनाकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is 'control flow analysis' in TypeScript?",
        "question_hi": "TypeScript में 'control flow analysis' क्या है?",
        "options_en": ["TypeScript's ability to narrow types based on code flow", "Analyzing control flow in programs", "Controlling type flow", "Flow analysis for unions"],
        "options_hi": ["Code flow के आधार पर types को narrow करने की TypeScript की क्षमता", "Programs में control flow का विश्लेषण", "Type flow को नियंत्रित करना", "Unions के लिए flow analysis"],
        "answer_en": "TypeScript's ability to narrow types based on code flow",
        "answer_hi": "Code flow के आधार पर types को narrow करने की TypeScript की क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How does control flow analysis work with union types?",
        "question_hi": "Control flow analysis union types के साथ कैसे काम करता है?",
        "options_en": ["Narrows union types based on conditional checks", "Widens union types", "Creates new unions", "Eliminates unions"],
        "options_hi": ["Conditional checks के आधार पर union types को narrow करता है", "Union types को widen करता है", "नए unions बनाता है", "Unions को खत्म करता है"],
        "answer_en": "Narrows union types based on conditional checks",
        "answer_hi": "Conditional checks के आधार पर union types को narrow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is 'non-null assertion operator' in TypeScript?",
        "question_hi": "TypeScript में 'non-null assertion operator' क्या है?",
        "options_en": ["Postfix ! operator to assert value is non-nullable", "Prefix ! operator for negation", "Operator for non-null types", "Operator to remove null from union"],
        "options_hi": ["Postfix ! ऑपरेटर यह दावा करने के लिए कि मान non-nullable है", "Negation के लिए prefix ! ऑपरेटर", "Non-null types के लिए ऑपरेटर", "Union से null को हटाने के लिए ऑपरेटर"],
        "answer_en": "Postfix ! operator to assert value is non-nullable",
        "answer_hi": "Postfix ! ऑपरेटर यह दावा करने के लिए कि मान non-nullable है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How can you remove null/undefined from union type?",
        "question_hi": "Union type से null/undefined कैसे हटा सकते हैं?",
        "options_en": ["Using NonNullable<T> utility type", "Using type assertions", "Using filter types", "Using exclude operator"],
        "options_hi": ["NonNullable<T> utility type का उपयोग करना", "Type assertions का उपयोग करना", "Filter types का उपयोग करना", "Exclude operator का उपयोग करना"],
        "answer_en": "Using NonNullable<T> utility type",
        "answer_hi": "NonNullable<T> utility type का उपयोग करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is 'type predicates' in TypeScript?",
        "question_hi": "TypeScript में 'type predicates' क्या है?",
        "options_en": ["Functions that return boolean with type assertion", "Functions that predict types", "Types that are predicates", "Union types with predicates"],
        "options_hi": ["Functions जो type assertion के साथ boolean return करती हैं", "Functions जो types predict करती हैं", "Types जो predicates हैं", "Predicates वाले union types"],
        "answer_en": "Functions that return boolean with type assertion",
        "answer_hi": "Functions जो type assertion के साथ boolean return करती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is 'assertion functions' in TypeScript?",
        "question_hi": "TypeScript में 'assertion functions' क्या है?",
        "options_en": ["Functions that assert conditions and narrow types", "Functions that assert values", "Functions for type assertions", "Functions that create unions"],
        "options_hi": ["Functions जो conditions assert करती हैं और types narrow करती हैं", "Functions जो values assert करती हैं", "Type assertions के लिए functions", "Functions जो unions बनाती हैं"],
        "answer_en": "Functions that assert conditions and narrow types",
        "answer_hi": "Functions जो conditions assert करती हैं और types narrow करती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do assertion functions differ from type guards?",
        "question_hi": "Assertion functions type guards से कैसे भिन्न हैं?",
        "options_en": ["Assertion functions throw on failure, type guards return boolean", "Assertion functions return boolean, type guards throw", "Both are same", "Assertion functions are for runtime, type guards for compile time"],
        "options_hi": ["Assertion functions failure पर throw करती हैं, type guards boolean return करती हैं", "Assertion functions boolean return करती हैं, type guards throw करती हैं", "दोनों समान हैं", "Assertion functions runtime के लिए हैं, type guards compile time के लिए"],
        "answer_en": "Assertion functions throw on failure, type guards return boolean",
        "answer_hi": "Assertion functions failure पर throw करती हैं, type guards boolean return करती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is 'satisfies operator' in TypeScript?",
        "question_hi": "TypeScript में 'satisfies operator' क्या है?",
        "options_en": ["Operator to check type satisfies constraint while preserving literal types", "Operator for satisfaction checks", "Operator that creates unions", "Operator for type satisfaction"],
        "options_hi": ["Operator जो जाँचता है कि प्रकार constraint को satisfy करता है जबकि literal types preserve रहते हैं", "Satisfaction checks के लिए operator", "Operator जो unions बनाता है", "Type satisfaction के लिए operator"],
        "answer_en": "Operator to check type satisfies constraint while preserving literal types",
        "answer_hi": "Operator जो जाँचता है कि प्रकार constraint को satisfy करता है जबकि literal types preserve रहते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How can 'satisfies' help with union types?",
        "question_hi": "'satisfies' union types में कैसे मदद कर सकता है?",
        "options_en": ["By checking value satisfies union while keeping specific type", "By converting unions to intersections", "By narrowing unions", "By widening unions"],
        "options_hi": ["यह जाँचकर कि value union को satisfy करती है जबकि specific type बनी रहती है", "Unions को intersections में बदलकर", "Unions को narrow करके", "Unions को widen करके"],
        "answer_en": "By checking value satisfies union while keeping specific type",
        "answer_hi": "यह जाँचकर कि value union को satisfy करती है जबकि specific type बनी रहती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What are 'utility types' in TypeScript?",
        "question_hi": "TypeScript में 'utility types' क्या हैं?",
        "options_en": ["Built-in types for common type transformations", "Types for utility functions", "Utility functions as types", "Types that are useful"],
        "options_hi": ["Common type transformations के लिए built-in types", "Utility functions के लिए types", "Types के रूप में utility functions", "Types जो उपयोगी हैं"],
        "answer_en": "Built-in types for common type transformations",
        "answer_hi": "Common type transformations के लिए built-in types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which utility types work with union types?",
        "question_hi": "कौन से utility types union types के साथ काम करते हैं?",
        "options_en": ["Extract, Exclude, NonNullable", "Partial, Required, Readonly", "Pick, Omit, Record", "All of the above"],
        "options_hi": ["Extract, Exclude, NonNullable", "Partial, Required, Readonly", "Pick, Omit, Record", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does 'Exclude<T, U>' utility type do?",
        "question_hi": "'Exclude<T, U>' utility type क्या करता है?",
        "options_en": ["Excludes from T those types assignable to U", "Excludes U from T", "Removes types from union", "Creates exclusion types"],
        "options_hi": ["T से उन types को exclude करता है जो U को assignable हैं", "T से U को exclude करता है", "Union से types को हटाता है", "Exclusion types बनाता है"],
        "answer_en": "Excludes from T those types assignable to U",
        "answer_hi": "T से उन types को exclude करता है जो U को assignable हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What does 'Extract<T, U>' utility type do?",
        "question_hi": "'Extract<T, U>' utility type क्या करता है?",
        "options_en": ["Extracts from T those types assignable to U", "Extracts U from T", "Extracts common types", "Creates extracted unions"],
        "options_hi": ["T से उन types को extract करता है जो U को assignable हैं", "T से U को extract करता है", "Common types extract करता है", "Extracted unions बनाता है"],
        "answer_en": "Extracts from T those types assignable to U",
        "answer_hi": "T से उन types को extract करता है जो U को assignable हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 'Partial<T>' utility type?",
        "question_hi": "'Partial<T>' utility type क्या है?",
        "options_en": ["Makes all properties of T optional", "Makes partial union of T", "Creates partial types", "Makes T partially applicable"],
        "options_hi": ["T की सभी properties को optional बनाता है", "T का partial union बनाता है", "Partial types बनाता है", "T को partially applicable बनाता है"],
        "answer_en": "Makes all properties of T optional",
        "answer_hi": "T की सभी properties को optional बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How does 'Partial' work with union types?",
        "question_hi": "'Partial' union types के साथ कैसे काम करता है?",
        "options_en": ["Applied distributively to each union member", "Applied to union as whole", "Doesn't work with unions", "Creates partial unions"],
        "options_hi": ["प्रत्येक union member पर distributively लागू होता है", "Union पर समग्र रूप से लागू होता है", "Unions के साथ काम नहीं करता", "Partial unions बनाता है"],
        "answer_en": "Applied distributively to each union member",
        "answer_hi": "प्रत्येक union member पर distributively लागू होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is 'Required<T>' utility type?",
        "question_hi": "'Required<T>' utility type क्या है?",
        "options_en": ["Makes all properties of T required", "Requires union types", "Creates required types", "Makes T mandatory"],
        "options_hi": ["T की सभी properties को required बनाता है", "Union types की आवश्यकता है", "Required types बनाता है", "T को mandatory बनाता है"],
        "answer_en": "Makes all properties of T required",
        "answer_hi": "T की सभी properties को required बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is 'Readonly<T>' utility type?",
        "question_hi": "'Readonly<T>' utility type क्या है?",
        "options_en": ["Makes all properties of T readonly", "Creates readonly unions", "Makes T read-only", "Prevents mutation of T"],
        "options_hi": ["T की सभी properties को readonly बनाता है", "Readonly unions बनाता है", "T को read-only बनाता है", "T के mutation को रोकता है"],
        "answer_en": "Makes all properties of T readonly",
        "answer_hi": "T की सभी properties को readonly बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is 'Pick<T, K>' utility type?",
        "question_hi": "'Pick<T, K>' utility type क्या है?",
        "options_en": ["Selects subset of properties from T", "Picks types from union", "Chooses K from T", "Creates picked types"],
        "options_hi": ["T से properties का subset select करता है", "Union से types pick करता है", "T से K choose करता है", "Picked types बनाता है"],
        "answer_en": "Selects subset of properties from T",
        "answer_hi": "T से properties का subset select करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is 'Omit<T, K>' utility type?",
        "question_hi": "'Omit<T, K>' utility type क्या है?",
        "options_en": ["Constructs type by omitting properties K from T", "Omits types from union", "Removes K from T", "Creates omitted types"],
        "options_hi": ["T से properties K को omit करके type बनाता है", "Union से types omit करता है", "T से K को remove करता है", "Omitted types बनाता है"],
        "answer_en": "Constructs type by omitting properties K from T",
        "answer_hi": "T से properties K को omit करके type बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is 'Record<K, T>' utility type?",
        "question_hi": "'Record<K, T>' utility type क्या है?",
        "options_en": ["Constructs object type with keys K and values T", "Creates record of unions", "Records types K and T", "Creates type records"],
        "options_hi": ["Keys K और values T वाला object type बनाता है", "Unions का record बनाता है", "Types K और T को record करता है", "Type records बनाता है"],
        "answer_en": "Constructs object type with keys K and values T",
        "answer_hi": "Keys K और values T वाला object type बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How can Record work with union keys?",
        "question_hi": "Record union keys के साथ कैसे काम कर सकता है?",
        "options_en": ["Creates object with union keys mapping to values", "Creates union of records", "Records union keys", "Maps unions to records"],
        "options_hi": ["Values पर mapping करने वाले union keys वाला object बनाता है", "Records का union बनाता है", "Union keys को record करता है", "Unions को records में map करता है"],
        "answer_en": "Creates object with union keys mapping to values",
        "answer_hi": "Values पर mapping करने वाले union keys वाला object बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is 'ReturnType<T>' utility type?",
        "question_hi": "'ReturnType<T>' utility type क्या है?",
        "options_en": ["Gets return type of function type T", "Returns type of union", "Creates return types", "Extracts return from union"],
        "options_hi": ["Function type T का return type प्राप्त करता है", "Union का type return करता है", "Return types बनाता है", "Union से return extract करता है"],
        "answer_en": "Gets return type of function type T",
        "answer_hi": "Function type T का return type प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is 'Parameters<T>' utility type?",
        "question_hi": "'Parameters<T>' utility type क्या है?",
        "options_en": ["Gets parameters of function type T as tuple", "Gets parameters from union", "Creates parameter types", "Extracts parameters"],
        "options_hi": ["Function type T के parameters को tuple के रूप में प्राप्त करता है", "Union से parameters प्राप्त करता है", "Parameter types बनाता है", "Parameters extract करता है"],
        "answer_en": "Gets parameters of function type T as tuple",
        "answer_hi": "Function type T के parameters को tuple के रूप में प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 'ConstructorParameters<T>' utility type?",
        "question_hi": "'ConstructorParameters<T>' utility type क्या है?",
        "options_en": ["Gets constructor parameters of class type T", "Gets parameters from union constructor", "Creates constructor parameter types", "Extracts constructor parameters"],
        "options_hi": ["Class type T के constructor parameters प्राप्त करता है", "Union constructor से parameters प्राप्त करता है", "Constructor parameter types बनाता है", "Constructor parameters extract करता है"],
        "answer_en": "Gets constructor parameters of class type T",
        "answer_hi": "Class type T के constructor parameters प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is 'InstanceType<T>' utility type?",
        "question_hi": "'InstanceType<T>' utility type क्या है?",
        "options_en": ["Gets instance type of class type T", "Gets instance type from union", "Creates instance types", "Extracts instance type"],
        "options_hi": ["Class type T का instance type प्राप्त करता है", "Union से instance type प्राप्त करता है", "Instance types बनाता है", "Instance type extract करता है"],
        "answer_en": "Gets instance type of class type T",
        "answer_hi": "Class type T का instance type प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is 'ThisParameterType<T>' utility type?",
        "question_hi": "'ThisParameterType<T>' utility type क्या है?",
        "options_en": ["Extracts 'this' parameter type from function type T", "Gets 'this' type from union", "Creates 'this' parameter types", "Extracts this type"],
        "options_hi": ["Function type T से 'this' parameter type extract करता है", "Union से 'this' type प्राप्त करता है", "'this' parameter types बनाता है", "This type extract करता है"],
        "answer_en": "Extracts 'this' parameter type from function type T",
        "answer_hi": "Function type T से 'this' parameter type extract करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is 'OmitThisParameter<T>' utility type?",
        "question_hi": "'OmitThisParameter<T>' utility type क्या है?",
        "options_en": ["Removes 'this' parameter from function type T", "Omits 'this' from union", "Creates function without 'this'", "Removes this parameter"],
        "options_hi": ["Function type T से 'this' parameter remove करता है", "Union से 'this' omit करता है", "'this' के बिना function बनाता है", "This parameter remove करता है"],
        "answer_en": "Removes 'this' parameter from function type T",
        "answer_hi": "Function type T से 'this' parameter remove करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is 'ThisType<T>' utility type?",
        "question_hi": "'ThisType<T>' utility type क्या है?",
        "options_en": ["Marks 'this' type in object literal", "Creates this type for union", "Marks this in types", "Creates type for this"],
        "options_hi": ["Object literal में 'this' type को mark करता है", "Union के लिए this type बनाता है", "Types में this को mark करता है", "This के लिए type बनाता है"],
        "answer_en": "Marks 'this' type in object literal",
        "answer_hi": "Object literal में 'this' type को mark करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is 'Uppercase<S>' utility type?",
        "question_hi": "'Uppercase<S>' utility type क्या है?",
        "options_en": ["Transforms string literal type to uppercase", "Creates uppercase unions", "Makes string uppercase", "Transforms to uppercase"],
        "options_hi": ["String literal type को uppercase में transform करता है", "Uppercase unions बनाता है", "String को uppercase बनाता है", "Uppercase में transform करता है"],
        "answer_en": "Transforms string literal type to uppercase",
        "answer_hi": "String literal type को uppercase में transform करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is 'Lowercase<S>' utility type?",
        "question_hi": "'Lowercase<S>' utility type क्या है?",
        "options_en": ["Transforms string literal type to lowercase", "Creates lowercase unions", "Makes string lowercase", "Transforms to lowercase"],
        "options_hi": ["String literal type को lowercase में transform करता है", "Lowercase unions बनाता है", "String को lowercase बनाता है", "Lowercase में transform करता है"],
        "answer_en": "Transforms string literal type to lowercase",
        "answer_hi": "String literal type को lowercase में transform करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is 'Capitalize<S>' utility type?",
        "question_hi": "'Capitalize<S>' utility type क्या है?",
        "options_en": ["Transforms first character of string literal type to uppercase", "Capitalizes unions", "Makes string capitalized", "Transforms to capitalized case"],
        "options_hi": ["String literal type के पहले character को uppercase में transform करता है", "Unions को capitalize करता है", "String को capitalized बनाता है", "Capitalized case में transform करता है"],
        "answer_en": "Transforms first character of string literal type to uppercase",
        "answer_hi": "String literal type के पहले character को uppercase में transform करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is 'Uncapitalize<S>' utility type?",
        "question_hi": "'Uncapitalize<S>' utility type क्या है?",
        "options_en": ["Transforms first character of string literal type to lowercase", "Uncapitalizes unions", "Makes string uncapitalized", "Transforms to uncapitalized case"],
        "options_hi": ["String literal type के पहले character को lowercase में transform करता है", "Unions को uncapitalize करता है", "String को uncapitalized बनाता है", "Uncapitalized case में transform करता है"],
        "answer_en": "Transforms first character of string literal type to lowercase",
        "answer_hi": "String literal type के पहले character को lowercase में transform करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is 'Awaited<T>' utility type?",
        "question_hi": "'Awaited<T>' utility type क्या है?",
        "options_en": ["Recursively unwraps Promise types", "Awaits union types", "Creates awaited types", "Unwraps async types"],
        "options_hi": ["Recursively Promise types को unwrap करता है", "Union types की await करता है", "Awaited types बनाता है", "Async types को unwrap करता है"],
        "answer_en": "Recursively unwraps Promise types",
        "answer_hi": "Recursively Promise types को unwrap करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How does 'Awaited' work with union of promises?",
        "question_hi": "'Awaited' promises के union के साथ कैसे काम करता है?",
        "options_en": ["Unwraps each promise type in union", "Awaits the union", "Creates union of awaited", "Doesn't work with unions"],
        "options_hi": ["Union में प्रत्येक promise type को unwrap करता है", "Union की await करता है", "Awaited का union बनाता है", "Unions के साथ काम नहीं करता"],
        "answer_en": "Unwraps each promise type in union",
        "answer_hi": "Union में प्रत्येक promise type को unwrap करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is 'Intrinsic string manipulation types' in TypeScript?",
        "question_hi": "TypeScript में 'Intrinsic string manipulation types' क्या है?",
        "options_en": ["Uppercase, Lowercase, Capitalize, Uncapitalize", "String, number, boolean", "Union, intersection", "Template literal types"],
        "options_hi": ["Uppercase, Lowercase, Capitalize, Uncapitalize", "String, number, boolean", "Union, intersection", "Template literal types"],
        "answer_en": "Uppercase, Lowercase, Capitalize, Uncapitalize",
        "answer_hi": "Uppercase, Lowercase, Capitalize, Uncapitalize",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is 'module augmentation' in TypeScript?",
        "question_hi": "TypeScript में 'module augmentation' क्या है?",
        "options_en": ["Adding to existing module declarations", "Augmenting union types", "Enhancing modules", "Extending module types"],
        "options_hi": ["Existing module declarations में जोड़ना", "Union types को augment करना", "Modules को enhance करना", "Module types को extend करना"],
        "answer_en": "Adding to existing module declarations",
        "answer_hi": "Existing module declarations में जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is 'declaration merging' in TypeScript?",
        "question_hi": "TypeScript में 'declaration merging' क्या है?",
        "options_en": ["Merging multiple declarations of same name", "Merging union types", "Merging declarations", "Combining type declarations"],
        "options_hi": ["एक ही नाम के multiple declarations को merge करना", "Union types को merge करना", "Declarations को merge करना", "Type declarations को combine करना"],
        "answer_en": "Merging multiple declarations of same name",
        "answer_hi": "एक ही नाम के multiple declarations को merge करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How does declaration merging work with union types?",
        "question_hi": "Declaration merging union types के साथ कैसे काम करता है?",
        "options_en": ["Can create union types through merging", "Merges unions automatically", "Doesn't work with unions", "Creates merged unions"],
        "options_hi": ["Merging के माध्यम से union types बना सकता है", "Unions को स्वचालित रूप से merge करता है", "Unions के साथ काम नहीं करता", "Merged unions बनाता है"],
        "answer_en": "Can create union types through merging",
        "answer_hi": "Merging के माध्यम से union types बना सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is 'namespaces' in TypeScript?",
        "question_hi": "TypeScript में 'namespaces' क्या है?",
        "options_en": ["Organizational structure for code", "Namespaces for unions", "Space for names", "Organizing types"],
        "options_hi": ["कोड के लिए organizational structure", "Unions के लिए namespaces", "Names के लिए space", "Types को organize करना"],
        "answer_en": "Organizational structure for code",
        "answer_hi": "कोड के लिए organizational structure",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is 'mixins' pattern in TypeScript?",
        "question_hi": "TypeScript में 'mixins' pattern क्या है?",
        "options_en": ["Combining multiple classes into one", "Mixing union types", "Mixin types", "Combining types"],
        "options_hi": ["Multiple classes को एक में combine करना", "Union types को mix करना", "Mixin types", "Types को combine करना"],
        "answer_en": "Combining multiple classes into one",
        "answer_hi": "Multiple classes को एक में combine करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How can union types be used with mixins?",
        "question_hi": "Union types का उपयोग mixins के साथ कैसे किया जा सकता है?",
        "options_en": ["To represent mixed class types", "To mix unions", "To create union mixins", "To combine mixins"],
        "options_hi": ["Mixed class types का प्रतिनिधित्व करने के लिए", "Unions को mix करने के लिए", "Union mixins बनाने के लिए", "Mixins को combine करने के लिए"],
        "answer_en": "To represent mixed class types",
        "answer_hi": "Mixed class types का प्रतिनिधित्व करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is 'decorators' in TypeScript?",
        "question_hi": "TypeScript में 'decorators' क्या है?",
        "options_en": ["Special declarations that modify classes/methods", "Decorating union types", "Type decorators", "Modifying types"],
        "options_hi": ["Special declarations जो classes/methods को modify करती हैं", "Union types को decorate करना", "Type decorators", "Types को modify करना"],
        "answer_en": "Special declarations that modify classes/methods",
        "answer_hi": "Special declarations जो classes/methods को modify करती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is 'enum' in TypeScript?",
        "question_hi": "TypeScript में 'enum' क्या है?",
        "options_en": ["Set of named constants", "Enumeration of unions", "Enumerated types", "Constant unions"],
        "options_hi": ["Named constants का सेट", "Unions की enumeration", "Enumerated types", "Constant unions"],
        "answer_en": "Set of named constants",
        "answer_hi": "Named constants का सेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do enums relate to union types?",
        "question_hi": "Enums union types से कैसे संबंधित हैं?",
        "options_en": ["Enums can be used like union of literal strings", "Enums are unions", "Unions are enums", "No relation"],
        "options_hi": ["Enums का उपयोग literal strings के union की तरह किया जा सकता है", "Enums unions हैं", "Unions enums हैं", "कोई संबंध नहीं"],
        "answer_en": "Enums can be used like union of literal strings",
        "answer_hi": "Enums का उपयोग literal strings के union की तरह किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is 'const enum' in TypeScript?",
        "question_hi": "TypeScript में 'const enum' क्या है?",
        "options_en": ["Enum that gets completely removed during compilation", "Constant union enum", "Const union type", "Enum that is constant"],
        "options_hi": ["Enum जो compilation के दौरान पूरी तरह से हटा दिया जाता है", "Constant union enum", "Const union type", "Enum जो constant है"],
        "answer_en": "Enum that gets completely removed during compilation",
        "answer_hi": "Enum जो compilation के दौरान पूरी तरह से हटा दिया जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is 'namespace' vs 'module' in TypeScript?",
        "question_hi": "TypeScript में 'namespace' vs 'module' क्या है?",
        "options_en": ["Namespace: organizational; Module: file-based", "Both are same", "Namespace for unions, module for types", "No difference"],
        "options_hi": ["Namespace: organizational; Module: file-based", "दोनों समान हैं", "Unions के लिए namespace, types के लिए module", "कोई अंतर नहीं"],
        "answer_en": "Namespace: organizational; Module: file-based",
        "answer_hi": "Namespace: organizational; Module: file-based",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is 'triple-slash directives' in TypeScript?",
        "question_hi": "TypeScript में 'triple-slash directives' क्या है?",
        "options_en": ["Comments used as compiler directives", "Directives for unions", "Three slashes for types", "Compiler instructions"],
        "options_hi": ["Comments जिनका उपयोग compiler directives के रूप में किया जाता है", "Unions के लिए directives", "Types के लिए three slashes", "Compiler instructions"],
        "answer_en": "Comments used as compiler directives",
        "answer_hi": "Comments जिनका उपयोग compiler directives के रूप में किया जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 'type-only imports/exports' in TypeScript?",
        "question_hi": "TypeScript में 'type-only imports/exports' क्या है?",
        "options_en": ["Import/export only type information, not values", "Only importing union types", "Type imports", "Importing types only"],
        "options_hi": ["केवल type information import/export करना, values नहीं", "केवल union types import करना", "Type imports", "केवल types import करना"],
        "answer_en": "Import/export only type information, not values",
        "answer_hi": "केवल type information import/export करना, values नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the 'unique symbol' type in TypeScript?",
        "question_hi": "TypeScript में 'unique symbol' type क्या है?",
        "options_en": ["Symbol type that is guaranteed to be unique", "Unique union symbol", "Symbol for uniqueness", "Unique type symbol"],
        "options_hi": ["Symbol type जो unique होने की गारंटी है", "Unique union symbol", "Uniqueness के लिए symbol", "Unique type symbol"],
        "answer_en": "Symbol type that is guaranteed to be unique",
        "answer_hi": "Symbol type जो unique होने की गारंटी है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the future of union types in TypeScript?",
        "question_hi": "TypeScript में union types का भविष्य क्या है?",
        "options_en": ["More advanced pattern matching, better narrowing", "Elimination of union types", "Replacement by intersection types", "No changes planned"],
        "options_hi": ["अधिक उन्नत pattern matching, बेहतर narrowing", "Union types का elimination", "Intersection types द्वारा replacement", "कोई changes planned नहीं"],
        "answer_en": "More advanced pattern matching, better narrowing",
        "answer_hi": "अधिक उन्नत pattern matching, बेहतर narrowing",
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