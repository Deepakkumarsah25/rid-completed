const questions= [
    {
        "num": 1,
        "question_en": "What is the primary benefit of using union types in TypeScript?",
        "question_hi": "TypeScript में union types का प्राथमिक लाभ क्या है?",
        "options_en": ["Flexibility to work with multiple types while maintaining type safety", "Improved runtime performance", "Reduced code size", "Automatic type inference"],
        "options_hi": ["Type safety बनाए रखते हुए कई प्रकारों के साथ काम करने की लचीलापन", "बेहतर रनटाइम प्रदर्शन", "कम कोड आकार", "स्वचालित टाइप अनुमान"],
        "answer_en": "Flexibility to work with multiple types while maintaining type safety",
        "answer_hi": "Type safety बनाए रखते हुए कई प्रकारों के साथ काम करने की लचीलापन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which TypeScript version first introduced union types?",
        "question_hi": "किस TypeScript संस्करण ने पहली बार union types पेश किए?",
        "options_en": ["TypeScript 1.4", "TypeScript 2.0", "TypeScript 3.0", "TypeScript 4.0"],
        "options_hi": ["TypeScript 1.4", "TypeScript 2.0", "TypeScript 3.0", "TypeScript 4.0"],
        "answer_en": "TypeScript 1.4",
        "answer_hi": "TypeScript 1.4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the syntax for a union type that can be string, number, or boolean?",
        "question_hi": "एक union type जो string, number, या boolean हो सकता है, का सिंटैक्स क्या है?",
        "options_en": ["string | number | boolean", "string & number & boolean", "string, number, boolean", "string || number || boolean"],
        "options_hi": ["string | number | boolean", "string & number & boolean", "string, number, boolean", "string || number || boolean"],
        "answer_en": "string | number | boolean",
        "answer_hi": "string | number | boolean",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In Flow, which syntax is used for union types?",
        "question_hi": "Flow में, union types के लिए किस सिंटैक्स का उपयोग किया जाता है?",
        "options_en": ["string | number", "string or number", "string ∪ number", "string || number"],
        "options_hi": ["string | number", "string or number", "string ∪ number", "string || number"],
        "answer_en": "string | number",
        "answer_hi": "string | number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How does TypeScript handle union types at runtime?",
        "question_hi": "TypeScript रनटाइम पर union types को कैसे संभालता है?",
        "options_en": ["No runtime representation, purely compile-time construct", "Creates special union objects", "Converts to arrays", "Uses wrapper classes"],
        "options_hi": ["कोई रनटाइम प्रतिनिधित्व नहीं, विशुद्ध रूप से कंपाइल-टाइम संरचना", "विशेष union objects बनाता है", "Arrays में परिवर्तित करता है", "रैपर क्लासेस का उपयोग करता है"],
        "answer_en": "No runtime representation, purely compile-time construct",
        "answer_hi": "कोई रनटाइम प्रतिनिधित्व नहीं, विशुद्ध रूप से कंपाइल-टाइम संरचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of these is NOT a valid union type in TypeScript?",
        "question_hi": "TypeScript में इनमें से कौन सा वैध union type नहीं है?",
        "options_en": ["string && number", "string | number", "null | undefined", "'yes' | 'no'"],
        "options_hi": ["string && number", "string | number", "null | undefined", "'yes' | 'no'"],
        "answer_en": "string && number",
        "answer_hi": "string && number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the correct way to type a function parameter that can be either a string or an array of strings?",
        "question_hi": "एक फ़ंक्शन पैरामीटर जो या तो string या strings की array हो सकता है, उसे कैसे टाइप करें?",
        "options_en": ["param: string | string[]", "param: string & string[]", "param: string || string[]", "param: string, string[]"],
        "options_hi": ["param: string | string[]", "param: string & string[]", "param: string || string[]", "param: string, string[]"],
        "answer_en": "param: string | string[]",
        "answer_hi": "param: string | string[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How can you create a type alias for a union type in TypeScript?",
        "question_hi": "TypeScript में union type के लिए type alias कैसे बना सकते हैं?",
        "options_en": ["type ID = string | number;", "interface ID = string | number;", "union ID = string | number;", "alias ID = string | number;"],
        "options_hi": ["type ID = string | number;", "interface ID = string | number;", "union ID = string | number;", "alias ID = string | number;"],
        "answer_en": "type ID = string | number;",
        "answer_hi": "type ID = string | number;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does the union type 'readonly string[] | ReadonlyArray<string>' represent?",
        "question_hi": "Union type 'readonly string[] | ReadonlyArray<string>' क्या दर्शाता है?",
        "options_en": ["Two ways to represent readonly string arrays", "Either mutable or immutable arrays", "Two different array types", "An error in TypeScript"],
        "options_hi": ["Readonly string arrays का प्रतिनिधित्व करने के दो तरीके", "या तो mutable या immutable arrays", "दो अलग-अलग array types", "TypeScript में एक त्रुटि"],
        "answer_en": "Two ways to represent readonly string arrays",
        "answer_hi": "Readonly string arrays का प्रतिनिधित्व करने के दो तरीके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which JavaScript runtime check is most useful for narrowing 'string | number' union?",
        "question_hi": "'string | number' union को narrow करने के लिए कौन सी JavaScript runtime check सबसे उपयोगी है?",
        "options_en": ["typeof value === 'string'", "value instanceof String", "Array.isArray(value)", "value.constructor.name"],
        "options_hi": ["typeof value === 'string'", "value instanceof String", "Array.isArray(value)", "value.constructor.name"],
        "answer_en": "typeof value === 'string'",
        "answer_hi": "typeof value === 'string'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is a 'tagged union' or 'discriminated union'?",
        "question_hi": "'tagged union' या 'discriminated union' क्या है?",
        "options_en": ["Union where each member has a discriminant property", "Union with tags attached", "Union of string literals", "Union with metadata"],
        "options_hi": ["Union जहां प्रत्येक सदस्य के पास एक discriminant property होती है", "Tags attached वाला union", "String literals का union", "Metadata वाला union"],
        "answer_en": "Union where each member has a discriminant property",
        "answer_hi": "Union जहां प्रत्येक सदस्य के पास एक discriminant property होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which pattern is commonly used with discriminated unions?",
        "question_hi": "Discriminated unions के साथ आमतौर पर किस पैटर्न का उपयोग किया जाता है?",
        "options_en": ["Switch statements with exhaustive checking", "If-else chains", "Ternary operators", "Try-catch blocks"],
        "options_hi": ["Exhaustive checking वाले switch statements", "If-else chains", "Ternary operators", "Try-catch blocks"],
        "answer_en": "Switch statements with exhaustive checking",
        "answer_hi": "Exhaustive checking वाले switch statements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How can you extract the string literal types from a union of string literals?",
        "question_hi": "String literals के union से string literal types कैसे निकाल सकते हैं?",
        "options_en": ["They are already string literal types", "Using Extract utility type", "Using String constructor", "Cannot be extracted"],
        "options_hi": ["वे पहले से ही string literal types हैं", "Extract utility type का उपयोग करके", "String constructor का उपयोग करके", "निकाला नहीं जा सकता"],
        "answer_en": "They are already string literal types",
        "answer_hi": "वे पहले से ही string literal types हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the union type for a value that can be any primitive type?",
        "question_hi": "एक मान जो कोई भी primitive type हो सकता है, के लिए union type क्या है?",
        "options_en": ["string | number | boolean | symbol | bigint | null | undefined", "any", "unknown", "Primitive"],
        "options_hi": ["string | number | boolean | symbol | bigint | null | undefined", "any", "unknown", "Primitive"],
        "answer_en": "string | number | boolean | symbol | bigint | null | undefined",
        "answer_hi": "string | number | boolean | symbol | bigint | null | undefined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How does the 'never' type interact with union types?",
        "question_hi": "'never' type union types के साथ कैसे इंटरेक्ट करता है?",
        "options_en": ["never | T = T (never is identity element for union)", "never | T = never", "never | T = unknown", "never | T = any"],
        "options_hi": ["never | T = T (never union के लिए identity element है)", "never | T = never", "never | T = unknown", "never | T = any"],
        "answer_en": "never | T = T (never is identity element for union)",
        "answer_hi": "never | T = T (never union के लिए identity element है)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the 'unknown' type's relationship with union types?",
        "question_hi": "'unknown' type का union types के साथ क्या संबंध है?",
        "options_en": ["unknown | T = unknown (absorbs all types)", "unknown | T = T", "unknown | T = any", "unknown | T = never"],
        "options_hi": ["unknown | T = unknown (सभी types को absorb करता है)", "unknown | T = T", "unknown | T = any", "unknown | T = never"],
        "answer_en": "unknown | T = unknown (absorbs all types)",
        "answer_hi": "unknown | T = unknown (सभी types को absorb करता है)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which utility type can remove 'null' and 'undefined' from a union?",
        "question_hi": "कौन सा utility type union से 'null' और 'undefined' हटा सकता है?",
        "options_en": ["NonNullable<T>", "Required<T>", "Exclude<T, null | undefined>", "Both A and C"],
        "options_hi": ["NonNullable<T>", "Required<T>", "Exclude<T, null | undefined>", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the union type 'Promise<string> | Promise<number>' represent?",
        "question_hi": "Union type 'Promise<string> | Promise<number>' क्या दर्शाता है?",
        "options_en": ["A promise that resolves to either string or number", "Two different promise types", "An error - promises cannot be unioned", "Promise of union type"],
        "options_hi": ["एक promise जो या तो string या number में resolve होता है", "दो अलग-अलग promise types", "एक त्रुटि - promises को union नहीं किया जा सकता", "Union type का promise"],
        "answer_en": "A promise that resolves to either string or number",
        "answer_hi": "एक promise जो या तो string या number में resolve होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How can you create a union of all possible values from an enum?",
        "question_hi": "Enum से सभी संभावित मानों का union कैसे बना सकते हैं?",
        "options_en": ["type EnumValues = typeof MyEnum[keyof typeof MyEnum];", "type EnumValues = MyEnum;", "type EnumValues = keyof MyEnum;", "type EnumValues = valuesof MyEnum;"],
        "options_hi": ["type EnumValues = typeof MyEnum[keyof typeof MyEnum];", "type EnumValues = MyEnum;", "type EnumValues = keyof MyEnum;", "type EnumValues = valuesof MyEnum;"],
        "answer_en": "type EnumValues = typeof MyEnum[keyof typeof MyEnum];",
        "answer_hi": "type EnumValues = typeof MyEnum[keyof typeof MyEnum];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the difference between 'string | null' and 'string?'?",
        "question_hi": "'string | null' और 'string?' में क्या अंतर है?",
        "options_en": ["string? also includes undefined, not just null", "No difference", "string? is for optional parameters only", "string | null is more restrictive"],
        "options_hi": ["string? में undefined भी शामिल है, केवल null नहीं", "कोई अंतर नहीं", "string? केवल optional parameters के लिए है", "string | null अधिक प्रतिबंधक है"],
        "answer_en": "string? also includes undefined, not just null",
        "answer_hi": "string? में undefined भी शामिल है, केवल null नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which operator is used for intersection types in TypeScript?",
        "question_hi": "TypeScript में intersection types के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["&", "|", "&&", "||"],
        "options_hi": ["&", "|", "&&", "||"],
        "answer_en": "&",
        "answer_hi": "&",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What happens when you intersect two incompatible types?",
        "question_hi": "जब आप दो असंगत types का intersection करते हैं तो क्या होता है?",
        "options_en": ["You get 'never' type", "TypeScript throws an error", "You get 'unknown' type", "You get 'any' type"],
        "options_hi": ["आपको 'never' type मिलता है", "TypeScript एक error देता है", "आपको 'unknown' type मिलता है", "आपको 'any' type मिलता है"],
        "answer_en": "You get 'never' type",
        "answer_hi": "आपको 'never' type मिलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How can you create a type that is either type A or type B but not both?",
        "question_hi": "आप एक ऐसा type कैसे बना सकते हैं जो या तो type A हो या type B हो लेकिन दोनों नहीं?",
        "options_en": ["A | B", "A & B", "A xor B (not directly supported)", "ExclusiveUnion<A, B> using conditional types"],
        "options_hi": ["A | B", "A & B", "A xor B (सीधे समर्थित नहीं)", "ExclusiveUnion<A, B> conditional types का उपयोग करके"],
        "answer_en": "ExclusiveUnion<A, B> using conditional types",
        "answer_hi": "ExclusiveUnion<A, B> conditional types का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the 'in' operator used for in type narrowing?",
        "question_hi": "Type narrowing में 'in' ऑपरेटर का उपयोग किस लिए किया जाता है?",
        "options_en": ["To check if a property exists on an object", "To check if a value is in an array", "To iterate over union members", "To create type guards"],
        "options_hi": ["यह जांचने के लिए कि कोई property object पर मौजूद है या नहीं", "यह जांचने के लिए कि कोई मान array में है या नहीं", "Union members पर iterate करने के लिए", "Type guards बनाने के लिए"],
        "answer_en": "To check if a property exists on an object",
        "answer_hi": "यह जांचने के लिए कि कोई property object पर मौजूद है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is a common use case for union types in React props?",
        "question_hi": "React props में union types का एक सामान्य उपयोग मामला क्या है?",
        "options_en": ["Conditional rendering based on prop type", "Allowing multiple prop types", "Creating polymorphic components", "All of the above"],
        "options_hi": ["Prop type के आधार पर conditional rendering", "Multiple prop types की अनुमति देना", "Polymorphic components बनाना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How can you create a union of all possible CSS unit values?",
        "question_hi": "सभी संभावित CSS unit values का union कैसे बना सकते हैं?",
        "options_en": ["type CSSUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw';", "type CSSUnit = string;", "type CSSUnit = any;", "type CSSUnit = CSSProperties['unit'];"],
        "options_hi": ["type CSSUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw';", "type CSSUnit = string;", "type CSSUnit = any;", "type CSSUnit = CSSProperties['unit'];"],
        "answer_en": "type CSSUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw';",
        "answer_hi": "type CSSUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What does the union type 'Element | null' commonly represent in DOM APIs?",
        "question_hi": "DOM APIs में union type 'Element | null' आमतौर पर क्या दर्शाता है?",
        "options_en": ["A DOM element that might not exist", "An error state", "Either an element or nothing", "A nullable element reference"],
        "options_hi": ["एक DOM element जो मौजूद नहीं हो सकता", "एक error state", "या तो एक element या कुछ नहीं", "एक nullable element reference"],
        "answer_en": "A DOM element that might not exist",
        "answer_hi": "एक DOM element जो मौजूद नहीं हो सकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How can you create a type for HTTP methods using union types?",
        "question_hi": "Union types का उपयोग करके HTTP methods के लिए type कैसे बना सकते हैं?",
        "options_en": ["type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';", "type HttpMethod = string;", "type HttpMethod = Methods[];", "type HttpMethod = any;"],
        "options_hi": ["type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';", "type HttpMethod = string;", "type HttpMethod = Methods[];", "type HttpMethod = any;"],
        "answer_en": "type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';",
        "answer_hi": "type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'as const' assertion with unions?",
        "question_hi": "Unions के साथ 'as const' assertion का उद्देश्य क्या है?",
        "options_en": ["To preserve literal types in arrays/tuples for union extraction", "To make values constant", "To create readonly unions", "To assert type constness"],
        "options_hi": ["Arrays/tuples में union extraction के लिए literal types को preserve करना", "Values को constant बनाना", "Readonly unions बनाना", "Type constness assert करना"],
        "answer_en": "To preserve literal types in arrays/tuples for union extraction",
        "answer_hi": "Arrays/tuples में union extraction के लिए literal types को preserve करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How can you extract individual members from a union type?",
        "question_hi": "Union type से individual members कैसे निकाल सकते हैं?",
        "options_en": ["Using conditional types with infer", "Using indexed access types", "Using type guards", "All of the above"],
        "options_hi": ["infer के साथ conditional types का उपयोग करके", "Indexed access types का उपयोग करके", "Type guards का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the difference between union and tuple types?",
        "question_hi": "Union और tuple types में क्या अंतर है?",
        "options_en": ["Union: one of several types; Tuple: fixed-length array with specific types at each position", "Union: multiple types; Tuple: array of unions", "No difference", "Union is for single values, tuple for arrays"],
        "options_hi": ["Union: कई types में से एक; Tuple: fixed-length array जिसमें प्रत्येक position पर specific types होते हैं", "Union: multiple types; Tuple: unions की array", "कोई अंतर नहीं", "Union single values के लिए है, tuple arrays के लिए"],
        "answer_en": "Union: one of several types; Tuple: fixed-length array with specific types at each position",
        "answer_hi": "Union: कई types में से एक; Tuple: fixed-length array जिसमें प्रत्येक position पर specific types होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How can you create a union from an array of string literals?",
        "question_hi": "String literals की array से union कैसे बना सकते हैं?",
        "options_en": ["type UnionFromArray = typeof array[number];", "type UnionFromArray = array[any];", "type UnionFromArray = unionof array;", "type UnionFromArray = Array.toUnion<array>;"],
        "options_hi": ["type UnionFromArray = typeof array[number];", "type UnionFromArray = array[any];", "type UnionFromArray = unionof array;", "type UnionFromArray = Array.toUnion<array>;"],
        "answer_en": "type UnionFromArray = typeof array[number];",
        "answer_hi": "type UnionFromArray = typeof array[number];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the 'instanceof' operator used for in type narrowing?",
        "question_hi": "Type narrowing में 'instanceof' ऑपरेटर का उपयोग किस लिए किया जाता है?",
        "options_en": ["To check if an object is an instance of a class", "To check instance types", "For class-based type narrowing", "All of the above"],
        "options_hi": ["यह जांचने के लिए कि कोई object किसी class का instance है या नहीं", "Instance types की जांच के लिए", "Class-based type narrowing के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How can you create a type that represents all possible keys of an object union?",
        "question_hi": "एक type जो object union की सभी संभावित keys का प्रतिनिधित्व करता है, कैसे बना सकते हैं?",
        "options_en": ["type AllKeys = keyof (A | B);", "type AllKeys = keyof A | keyof B;", "type AllKeys = keysOf<A | B>;", "type AllKeys = A[keys] | B[keys];"],
        "options_hi": ["type AllKeys = keyof (A | B);", "type AllKeys = keyof A | keyof B;", "type AllKeys = keysOf<A | B>;", "type AllKeys = A[keys] | B[keys];"],
        "answer_en": "type AllKeys = keyof A | keyof B;",
        "answer_hi": "type AllKeys = keyof A | keyof B;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the result of 'keyof (A | B)' where A and B are object types?",
        "question_hi": "'keyof (A | B)' का परिणाम क्या है जहां A और B object types हैं?",
        "options_en": ["Union of keys that are in both A and B (intersection)", "Union of all keys from A and B", "Never type", "Any key"],
        "options_hi": ["उन keys का union जो A और B दोनों में हैं (intersection)", "A और B की सभी keys का union", "Never type", "कोई भी key"],
        "answer_en": "Union of keys that are in both A and B (intersection)",
        "answer_hi": "उन keys का union जो A और B दोनों में हैं (intersection)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How can you create a mapped type over a union?",
        "question_hi": "Union पर mapped type कैसे बना सकते हैं?",
        "options_en": ["Mapped types distribute over unions automatically", "Using conditional mapping", "Cannot create mapped types over unions", "Using UnionToIntersection first"],
        "options_hi": ["Mapped types unions पर automatically distribute होते हैं", "Conditional mapping का उपयोग करके", "Unions पर mapped types नहीं बना सकते", "पहले UnionToIntersection का उपयोग करके"],
        "answer_en": "Mapped types distribute over unions automatically",
        "answer_hi": "Mapped types unions पर automatically distribute होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is a common pattern for error handling with union types?",
        "question_hi": "Union types के साथ error handling का एक सामान्य पैटर्न क्या है?",
        "options_en": ["Result<T, E> = Success<T> | Failure<E> pattern", "Try-catch blocks", "Error union types", "All of the above"],
        "options_hi": ["Result<T, E> = Success<T> | Failure<E> pattern", "Try-catch blocks", "Error union types", "उपरोक्त सभी"],
        "answer_en": "Result<T, E> = Success<T> | Failure<E> pattern",
        "answer_hi": "Result<T, E> = Success<T> | Failure<E> pattern",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How can you create a type-safe Redux action with union types?",
        "question_hi": "Union types के साथ type-safe Redux action कैसे बना सकते हैं?",
        "options_en": ["Using discriminated union for different action types", "Action = { type: string; payload?: any }", "Multiple action interfaces", "Using any for actions"],
        "options_hi": ["Different action types के लिए discriminated union का उपयोग करके", "Action = { type: string; payload?: any }", "Multiple action interfaces", "Actions के लिए any का उपयोग करके"],
        "answer_en": "Using discriminated union for different action types",
        "answer_hi": "Different action types के लिए discriminated union का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the 'type narrowing' concept in TypeScript?",
        "question_hi": "TypeScript में 'type narrowing' अवधारणा क्या है?",
        "options_en": ["Process of refining a type to a more specific type", "Making types narrower", "Reducing union size", "Type compression"],
        "options_hi": ["किसी type को अधिक specific type में refine करने की प्रक्रिया", "Types को narrower बनाना", "Union size को कम करना", "Type compression"],
        "answer_en": "Process of refining a type to a more specific type",
        "answer_hi": "किसी type को अधिक specific type में refine करने की प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which TypeScript feature helps with exhaustive checking of union types?",
        "question_hi": "कौन सी TypeScript feature union types की exhaustive checking में मदद करती है?",
        "options_en": ["The 'never' type in default switch cases", "Type guards", "Assertion functions", "Conditional types"],
        "options_hi": ["Default switch cases में 'never' type", "Type guards", "Assertion functions", "Conditional types"],
        "answer_en": "The 'never' type in default switch cases",
        "answer_hi": "Default switch cases में 'never' type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How can you create a union of all property values from an object type?",
        "question_hi": "Object type से सभी property values का union कैसे बना सकते हैं?",
        "options_en": ["type ValueUnion = T[keyof T];", "type ValueUnion = values<T>;", "type ValueUnion = T[any];", "type ValueUnion = PropertyValues<T>;"],
        "options_hi": ["type ValueUnion = T[keyof T];", "type ValueUnion = values<T>;", "type ValueUnion = T[any];", "type ValueUnion = PropertyValues<T>;"],
        "answer_en": "type ValueUnion = T[keyof T];",
        "answer_hi": "type ValueUnion = T[keyof T];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the difference between 'any' and union types?",
        "question_hi": "'any' और union types में क्या अंतर है?",
        "options_en": ["Union types are type-safe, 'any' bypasses type checking", "No difference", "Union types are stricter", "'any' is a union of all types"],
        "options_hi": ["Union types type-safe हैं, 'any' type checking को bypass करता है", "कोई अंतर नहीं", "Union types अधिक strict हैं", "'any' सभी types का union है"],
        "answer_en": "Union types are type-safe, 'any' bypasses type checking",
        "answer_hi": "Union types type-safe हैं, 'any' type checking को bypass करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How can you create a type for a component that accepts multiple prop types?",
        "question_hi": "एक component जो multiple prop types स्वीकार करता है, के लिए type कैसे बना सकते हैं?",
        "options_en": ["Using union types for the prop", "Creating separate components", "Using any type", "Using overloaded functions"],
        "options_hi": ["Prop के लिए union types का उपयोग करके", "अलग-अलग components बनाकर", "any type का उपयोग करके", "Overloaded functions का उपयोग करके"],
        "answer_en": "Using union types for the prop",
        "answer_hi": "Prop के लिए union types का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is a 'type predicate' function?",
        "question_hi": "'type predicate' function क्या है?",
        "options_en": ["Function returning boolean with type assertion", "Function that predicts types", "Type guard function", "All of the above"],
        "options_hi": ["Type assertion के साथ boolean return करने वाली function", "Types predict करने वाली function", "Type guard function", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How can you create a type for a function that returns different types based on input?",
        "question_hi": "एक function जो input के आधार पर different types return करती है, के लिए type कैसे बना सकते हैं?",
        "options_en": ["Using function overloads", "Using union return types", "Using conditional types", "All of the above"],
        "options_hi": ["Function overloads का उपयोग करके", "Union return types का उपयोग करके", "Conditional types का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the 'infer' keyword used for in conditional types?",
        "question_hi": "Conditional types में 'infer' keyword का उपयोग किस लिए किया जाता है?",
        "options_en": ["To infer types within conditional branches", "To create type inference", "To extract types from unions", "All of the above"],
        "options_hi": ["Conditional branches के भीतर types infer करने के लिए", "Type inference बनाने के लिए", "Unions से types extract करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How can you create a type that excludes specific members from a union?",
        "question_hi": "एक type जो union से specific members को exclude करता है, कैसे बना सकते हैं?",
        "options_en": ["Using Exclude<T, U> utility type", "Using conditional types", "Using type filtering", "All of the above"],
        "options_hi": ["Exclude<T, U> utility type का उपयोग करके", "Conditional types का उपयोग करके", "Type filtering का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the 'distributive conditional types' feature?",
        "question_hi": "'distributive conditional types' feature क्या है?",
        "options_en": ["Conditional types that apply to each union member separately", "Types that distribute values", "Conditional distribution", "Union distribution"],
        "options_hi": ["Conditional types जो प्रत्येक union member पर अलग से लागू होते हैं", "Values distribute करने वाले types", "Conditional distribution", "Union distribution"],
        "answer_en": "Conditional types that apply to each union member separately",
        "answer_hi": "Conditional types जो प्रत्येक union member पर अलग से लागू होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How can you convert a union type to an intersection type?",
        "question_hi": "Union type को intersection type में कैसे convert कर सकते हैं?",
        "options_en": ["Using UnionToIntersection<T> with conditional types", "Using type casting", "Cannot be converted", "Using & operator"],
        "options_hi": ["Conditional types के साथ UnionToIntersection<T> का उपयोग करके", "Type casting का उपयोग करके", "Convert नहीं किया जा सकता", "& operator का उपयोग करके"],
        "answer_en": "Using UnionToIntersection<T> with conditional types",
        "answer_hi": "Conditional types के साथ UnionToIntersection<T> का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is a 'branded type' pattern?",
        "question_hi": "'branded type' pattern क्या है?",
        "options_en": ["Type with unique brand property to prevent mixing", "Type with brand name", "Branded union type", "Type branding"],
        "options_hi": ["Unique brand property वाला type जो mixing को रोकता है", "Brand name वाला type", "Branded union type", "Type branding"],
        "answer_en": "Type with unique brand property to prevent mixing",
        "answer_hi": "Unique brand property वाला type जो mixing को रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How can you create a type-safe dictionary with union keys?",
        "question_hi": "Union keys के साथ type-safe dictionary कैसे बना सकते हैं?",
        "options_en": ["Record<KeyUnion, ValueType>", "{ [key in KeyUnion]: ValueType }", "Both A and B", "Using Map with union keys"],
        "options_hi": ["Record<KeyUnion, ValueType>", "{ [key in KeyUnion]: ValueType }", "A और B दोनों", "Union keys के साथ Map का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the purpose of 'as const' with array literals?",
        "question_hi": "Array literals के साथ 'as const' का उद्देश्य क्या है?",
        "options_en": ["To create readonly tuple with literal types", "To make array constant", "To prevent array mutation", "To create const array"],
        "options_hi": ["Literal types के साथ readonly tuple बनाने के लिए", "Array को constant बनाने के लिए", "Array mutation को रोकने के लिए", "Const array बनाने के लिए"],
        "answer_en": "To create readonly tuple with literal types",
        "answer_hi": "Literal types के साथ readonly tuple बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How can you extract the type of array elements from a union of arrays?",
        "question_hi": "Arrays के union से array elements का type कैसे निकाल सकते हैं?",
        "options_en": ["ElementType = (ArrayUnion)[number]", "ElementType = ArrayUnion[0]", "ElementType = First<ArrayUnion>", "ElementType = ElementOf<ArrayUnion>"],
        "options_hi": ["ElementType = (ArrayUnion)[number]", "ElementType = ArrayUnion[0]", "ElementType = First<ArrayUnion>", "ElementType = ElementOf<ArrayUnion>"],
        "answer_en": "ElementType = (ArrayUnion)[number]",
        "answer_hi": "ElementType = (ArrayUnion)[number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is a 'recursive type alias' in TypeScript?",
        "question_hi": "TypeScript में 'recursive type alias' क्या है?",
        "options_en": ["Type alias that references itself", "Recursive union type", "Self-referential type", "All of the above"],
        "options_hi": ["Type alias जो स्वयं को refer करता है", "Recursive union type", "Self-referential type", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How can you create a type for a tree structure using union types?",
        "question_hi": "Union types का उपयोग करके tree structure के लिए type कैसे बना सकते हैं?",
        "options_en": ["type Tree = { value: T; children: Tree<T>[]; }", "type Tree = T | Tree<T>[]", "type Tree = { value: T; left?: Tree<T>; right?: Tree<T>; }", "All of the above"],
        "options_hi": ["type Tree = { value: T; children: Tree<T>[]; }", "type Tree = T | Tree<T>[]", "type Tree = { value: T; left?: Tree<T>; right?: Tree<T>; }", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the 'satisfies' operator in TypeScript?",
        "question_hi": "TypeScript में 'satisfies' operator क्या है?",
        "options_en": ["Checks type satisfies constraint while preserving literal types", "Type satisfaction operator", "Constraint checker", "Type validator"],
        "options_hi": ["जांचता है कि type constraint को satisfy करता है जबकि literal types preserve रहते हैं", "Type satisfaction operator", "Constraint checker", "Type validator"],
        "answer_en": "Checks type satisfies constraint while preserving literal types",
        "answer_hi": "जांचता है कि type constraint को satisfy करता है जबकि literal types preserve रहते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How can 'satisfies' help with union type inference?",
        "question_hi": "'satisfies' union type inference में कैसे मदद कर सकता है?",
        "options_en": ["Preserves specific literal types while checking union compatibility", "Improves inference", "Creates better unions", "All of the above"],
        "options_hi": ["Union compatibility की जांच करते समय specific literal types को preserve करता है", "Inference को improve करता है", "Better unions बनाता है", "उपरोक्त सभी"],
        "answer_en": "Preserves specific literal types while checking union compatibility",
        "answer_hi": "Union compatibility की जांच करते समय specific literal types को preserve करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the difference between 'extends' and union types?",
        "question_hi": "'extends' और union types में क्या अंतर है?",
        "options_en": ["'extends' for inheritance, union for type alternatives", "No difference", "'extends' creates union", "Union extends types"],
        "options_hi": ["'extends' inheritance के लिए, union type alternatives के लिए", "कोई अंतर नहीं", "'extends' union बनाता है", "Union types को extend करता है"],
        "answer_en": "'extends' for inheritance, union for type alternatives",
        "answer_hi": "'extends' inheritance के लिए, union type alternatives के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How can you create a type for a function that accepts multiple callback types?",
        "question_hi": "एक function जो multiple callback types स्वीकार करती है, के लिए type कैसे बना सकते हैं?",
        "options_en": ["Using union of function types", "Using overloaded signatures", "Using generic constraints", "All of the above"],
        "options_hi": ["Function types के union का उपयोग करके", "Overloaded signatures का उपयोग करके", "Generic constraints का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is 'type widening' in TypeScript?",
        "question_hi": "TypeScript में 'type widening' क्या है?",
        "options_en": ["Process where literal types are widened to their base types", "Making types wider", "Union type expansion", "Type generalization"],
        "options_hi": ["Process जहां literal types उनके base types में widened हो जाते हैं", "Types को wider बनाना", "Union type expansion", "Type generalization"],
        "answer_en": "Process where literal types are widened to their base types",
        "answer_hi": "Process जहां literal types उनके base types में widened हो जाते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How can you prevent type widening with union types?",
        "question_hi": "Union types के साथ type widening को कैसे रोक सकते हैं?",
        "options_en": ["Using 'as const' assertion", "Using explicit type annotations", "Using const variables", "All of the above"],
        "options_hi": ["'as const' assertion का उपयोग करके", "Explicit type annotations का उपयोग करके", "Const variables का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the 'control flow analysis' in TypeScript?",
        "question_hi": "TypeScript में 'control flow analysis' क्या है?",
        "options_en": ["TypeScript's ability to narrow types based on code flow", "Analyzing program flow", "Control flow typing", "Flow-based analysis"],
        "options_hi": ["Code flow के आधार पर types को narrow करने की TypeScript की क्षमता", "Program flow का विश्लेषण", "Control flow typing", "Flow-based analysis"],
        "answer_en": "TypeScript's ability to narrow types based on code flow",
        "answer_hi": "Code flow के आधार पर types को narrow करने की TypeScript की क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How does control flow analysis help with union types?",
        "question_hi": "Control flow analysis union types में कैसे मदद करता है?",
        "options_en": ["Automatically narrows union types based on conditions", "Analyzes union flow", "Controls union type flow", "All of the above"],
        "options_hi": ["Conditions के आधार पर automatically union types को narrow करता है", "Union flow का विश्लेषण करता है", "Union type flow को control करता है", "उपरोक्त सभी"],
        "answer_en": "Automatically narrows union types based on conditions",
        "answer_hi": "Conditions के आधार पर automatically union types को narrow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 'assertion signature' in TypeScript?",
        "question_hi": "TypeScript में 'assertion signature' क्या है?",
        "options_en": ["Function signature that asserts a condition", "Type assertion pattern", "Assertion function", "All of the above"],
        "options_hi": ["Function signature जो एक condition assert करती है", "Type assertion pattern", "Assertion function", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How can assertion functions help with union types?",
        "question_hi": "Assertion functions union types में कैसे मदद कर सकते हैं?",
        "options_en": ["Throw errors if union member check fails", "Assert union type conditions", "Narrow union types", "All of the above"],
        "options_hi": ["Errors throw करते हैं यदि union member check fail होता है", "Union type conditions assert करते हैं", "Union types को narrow करते हैं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the 'non-null assertion operator' (!)?",
        "question_hi": "'non-null assertion operator' (!) क्या है?",
        "options_en": ["Postfix operator asserting value is non-null/undefined", "NotNull operator", "Null assertion operator", "Type assertion operator"],
        "options_hi": ["Postfix operator जो assert करता है कि मान non-null/undefined है", "NotNull operator", "Null assertion operator", "Type assertion operator"],
        "answer_en": "Postfix operator asserting value is non-null/undefined",
        "answer_hi": "Postfix operator जो assert करता है कि मान non-null/undefined है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How can you remove null/undefined from a union type?",
        "question_hi": "Union type से null/undefined कैसे हटा सकते हैं?",
        "options_en": ["Using NonNullable<T> utility type", "Using Exclude<T, null | undefined>", "Using type guards", "All of the above"],
        "options_hi": ["NonNullable<T> utility type का उपयोग करके", "Exclude<T, null | undefined> का उपयोग करके", "Type guards का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is 'type-only import/export' syntax?",
        "question_hi": "'type-only import/export' syntax क्या है?",
        "options_en": ["import type { T } from 'module'", "import { type T } from 'module'", "Both A and B", "Only A is correct"],
        "options_hi": ["import type { T } from 'module'", "import { type T } from 'module'", "A और B दोनों", "केवल A सही है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do type-only imports affect union types?",
        "question_hi": "Type-only imports union types को कैसे प्रभावित करते हैं?",
        "options_en": ["No runtime impact, only type information", "Affects union type compilation", "Changes union behavior", "No effect"],
        "options_hi": ["कोई runtime impact नहीं, केवल type information", "Union type compilation को प्रभावित करता है", "Union behavior को बदलता है", "कोई प्रभाव नहीं"],
        "answer_en": "No runtime impact, only type information",
        "answer_hi": "कोई runtime impact नहीं, केवल type information",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is 'const assertion' with objects?",
        "question_hi": "Objects के साथ 'const assertion' क्या है?",
        "options_en": ["as const makes object properties readonly and preserves literal types", "Const object assertion", "Readonly object", "Constant object"],
        "options_hi": ["as const object properties को readonly बनाता है और literal types को preserve करता है", "Const object assertion", "Readonly object", "Constant object"],
        "answer_en": "as const makes object properties readonly and preserves literal types",
        "answer_hi": "as const object properties को readonly बनाता है और literal types को preserve करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How can const assertion help create union types?",
        "question_hi": "Const assertion union types बनाने में कैसे मदद कर सकता है?",
        "options_en": ["Preserves literal types for union extraction", "Creates const unions", "Makes unions constant", "All of the above"],
        "options_hi": ["Union extraction के लिए literal types को preserve करता है", "Const unions बनाता है", "Unions को constant बनाता है", "उपरोक्त सभी"],
        "answer_en": "Preserves literal types for union extraction",
        "answer_hi": "Union extraction के लिए literal types को preserve करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the 'unique symbol' type?",
        "question_hi": "'unique symbol' type क्या है?",
        "options_en": ["Symbol type guaranteed to be unique", "Unique union symbol", "Symbol uniqueness", "All of the above"],
        "options_hi": ["Symbol type जो unique होने की गारंटी है", "Unique union symbol", "Symbol uniqueness", "उपरोक्त सभी"],
        "answer_en": "Symbol type guaranteed to be unique",
        "answer_hi": "Symbol type जो unique होने की गारंटी है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How can unique symbols be used with union types?",
        "question_hi": "Unique symbols का उपयोग union types के साथ कैसे किया जा सकता है?",
        "options_en": ["For branded types to prevent accidental mixing", "Unique symbol unions", "Symbol type unions", "All of the above"],
        "options_hi": ["Accidental mixing को रोकने के लिए branded types के लिए", "Unique symbol unions", "Symbol type unions", "उपरोक्त सभी"],
        "answer_en": "For branded types to prevent accidental mixing",
        "answer_hi": "Accidental mixing को रोकने के लिए branded types के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 'template literal types' in TypeScript?",
        "question_hi": "TypeScript में 'template literal types' क्या है?",
        "options_en": ["String literal types constructed from template strings", "Template string types", "Literal template types", "All of the above"],
        "options_hi": ["Template strings से constructed string literal types", "Template string types", "Literal template types", "उपरोक्त सभी"],
        "answer_en": "String literal types constructed from template strings",
        "answer_hi": "Template strings से constructed string literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How can template literal types create union types?",
        "question_hi": "Template literal types union types कैसे बना सकते हैं?",
        "options_en": ["By combining unions in template strings", "Template union types", "Literal union templates", "All of the above"],
        "options_hi": ["Template strings में unions को combine करके", "Template union types", "Literal union templates", "उपरोक्त सभी"],
        "answer_en": "By combining unions in template strings",
        "answer_hi": "Template strings में unions को combine करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is 'mapped types' in TypeScript?",
        "question_hi": "TypeScript में 'mapped types' क्या है?",
        "options_en": ["Types that create new types by transforming properties", "Property mapping types", "Type mapping", "All of the above"],
        "options_hi": ["Types जो properties को transform करके नए types बनाते हैं", "Property mapping types", "Type mapping", "उपरोक्त सभी"],
        "answer_en": "Types that create new types by transforming properties",
        "answer_hi": "Types जो properties को transform करके नए types बनाते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How can mapped types work with union types?",
        "question_hi": "Mapped types union types के साथ कैसे काम कर सकते हैं?",
        "options_en": ["Distribute over union members automatically", "Map union properties", "Create union mappings", "All of the above"],
        "options_hi": ["Automatically union members पर distribute होते हैं", "Union properties को map करते हैं", "Union mappings बनाते हैं", "उपरोक्त सभी"],
        "answer_en": "Distribute over union members automatically",
        "answer_hi": "Automatically union members पर distribute होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is 'conditional types' in TypeScript?",
        "question_hi": "TypeScript में 'conditional types' क्या है?",
        "options_en": ["Types that depend on conditions", "Conditional type expressions", "Type conditions", "All of the above"],
        "options_hi": ["Types जो conditions पर निर्भर करते हैं", "Conditional type expressions", "Type conditions", "उपरोक्त सभी"],
        "answer_en": "Types that depend on conditions",
        "answer_hi": "Types जो conditions पर निर्भर करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How can conditional types create union types?",
        "question_hi": "Conditional types union types कैसे बना सकते हैं?",
        "options_en": ["Through distributive conditional types", "Conditional unions", "Type condition unions", "All of the above"],
        "options_hi": ["Distributive conditional types के माध्यम से", "Conditional unions", "Type condition unions", "उपरोक्त सभी"],
        "answer_en": "Through distributive conditional types",
        "answer_hi": "Distributive conditional types के माध्यम से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the 'infer' keyword's role with union types?",
        "question_hi": "Union types के साथ 'infer' keyword की क्या भूमिका है?",
        "options_en": ["Extracts types from union members in conditional types", "Infers union types", "Type inference for unions", "All of the above"],
        "options_hi": ["Conditional types में union members से types extract करता है", "Union types infer करता है", "Unions के लिए type inference", "उपरोक्त सभी"],
        "answer_en": "Extracts types from union members in conditional types",
        "answer_hi": "Conditional types में union members से types extract करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What are 'utility types' in TypeScript?",
        "question_hi": "TypeScript में 'utility types' क्या हैं?",
        "options_en": ["Built-in types for common type transformations", "Utility type helpers", "Type utilities", "All of the above"],
        "options_hi": ["Common type transformations के लिए built-in types", "Utility type helpers", "Type utilities", "उपरोक्त सभी"],
        "answer_en": "Built-in types for common type transformations",
        "answer_hi": "Common type transformations के लिए built-in types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which utility types are most useful with union types?",
        "question_hi": "कौन से utility types union types के साथ सबसे उपयोगी हैं?",
        "options_en": ["Extract, Exclude, NonNullable", "Partial, Required, Readonly", "Pick, Omit, Record", "All of the above"],
        "options_hi": ["Extract, Exclude, NonNullable", "Partial, Required, Readonly", "Pick, Omit, Record", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What does 'Extract<T, U>' do?",
        "question_hi": "'Extract<T, U>' क्या करता है?",
        "options_en": ["Extracts from T those types assignable to U", "Type extraction", "Union extraction", "All of the above"],
        "options_hi": ["T से उन types को extract करता है जो U को assignable हैं", "Type extraction", "Union extraction", "उपरोक्त सभी"],
        "answer_en": "Extracts from T those types assignable to U",
        "answer_hi": "T से उन types को extract करता है जो U को assignable हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does 'Exclude<T, U>' do?",
        "question_hi": "'Exclude<T, U>' क्या करता है?",
        "options_en": ["Excludes from T those types assignable to U", "Type exclusion", "Union exclusion", "All of the above"],
        "options_hi": ["T से उन types को exclude करता है जो U को assignable हैं", "Type exclusion", "Union exclusion", "उपरोक्त सभी"],
        "answer_en": "Excludes from T those types assignable to U",
        "answer_hi": "T से उन types को exclude करता है जो U को assignable हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is 'NonNullable<T>' utility type?",
        "question_hi": "'NonNullable<T>' utility type क्या है?",
        "options_en": ["Excludes null and undefined from T", "Non-nullable type", "Removes nullish types", "All of the above"],
        "options_hi": ["T से null और undefined को exclude करता है", "Non-nullable type", "Nullish types को remove करता है", "उपरोक्त सभी"],
        "answer_en": "Excludes null and undefined from T",
        "answer_hi": "T से null और undefined को exclude करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How does 'Partial<T>' work with union types?",
        "question_hi": "'Partial<T>' union types के साथ कैसे काम करता है?",
        "options_en": ["Applied distributively to each union member", "Partial union", "Union partial", "All of the above"],
        "options_hi": ["प्रत्येक union member पर distributively लागू होता है", "Partial union", "Union partial", "उपरोक्त सभी"],
        "answer_en": "Applied distributively to each union member",
        "answer_hi": "प्रत्येक union member पर distributively लागू होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How does 'Required<T>' work with union types?",
        "question_hi": "'Required<T>' union types के साथ कैसे काम करता है?",
        "options_en": ["Applied distributively to each union member", "Required union", "Union requirement", "All of the above"],
        "options_hi": ["प्रत्येक union member पर distributively लागू होता है", "Required union", "Union requirement", "उपरोक्त सभी"],
        "answer_en": "Applied distributively to each union member",
        "answer_hi": "प्रत्येक union member पर distributively लागू होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is 'Readonly<T>' utility type?",
        "question_hi": "'Readonly<T>' utility type क्या है?",
        "options_en": ["Makes all properties of T readonly", "Readonly type", "Immutable type", "All of the above"],
        "options_hi": ["T की सभी properties को readonly बनाता है", "Readonly type", "Immutable type", "उपरोक्त सभी"],
        "answer_en": "Makes all properties of T readonly",
        "answer_hi": "T की सभी properties को readonly बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How does 'Readonly<T>' work with union types?",
        "question_hi": "'Readonly<T>' union types के साथ कैसे काम करता है?",
        "options_en": ["Applied distributively to each union member", "Readonly union", "Union readonly", "All of the above"],
        "options_hi": ["प्रत्येक union member पर distributively लागू होता है", "Readonly union", "Union readonly", "उपरोक्त सभी"],
        "answer_en": "Applied distributively to each union member",
        "answer_hi": "प्रत्येक union member पर distributively लागू होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is 'Pick<T, K>' utility type?",
        "question_hi": "'Pick<T, K>' utility type क्या है?",
        "options_en": ["Selects subset of properties K from T", "Property picker", "Type selection", "All of the above"],
        "options_hi": ["T से properties K का subset select करता है", "Property picker", "Type selection", "उपरोक्त सभी"],
        "answer_en": "Selects subset of properties K from T",
        "answer_hi": "T से properties K का subset select करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How does 'Pick<T, K>' work with union types?",
        "question_hi": "'Pick<T, K>' union types के साथ कैसे काम करता है?",
        "options_en": ["Applied distributively to each union member", "Pick from union", "Union pick", "All of the above"],
        "options_hi": ["प्रत्येक union member पर distributively लागू होता है", "Union से pick करना", "Union pick", "उपरोक्त सभी"],
        "answer_en": "Applied distributively to each union member",
        "answer_hi": "प्रत्येक union member पर distributively लागू होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is 'Omit<T, K>' utility type?",
        "question_hi": "'Omit<T, K>' utility type क्या है?",
        "options_en": ["Constructs type by omitting properties K from T", "Property omission", "Type exclusion", "All of the above"],
        "options_hi": ["T से properties K को omit करके type बनाता है", "Property omission", "Type exclusion", "उपरोक्त सभी"],
        "answer_en": "Constructs type by omitting properties K from T",
        "answer_hi": "T से properties K को omit करके type बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How does 'Omit<T, K>' work with union types?",
        "question_hi": "'Omit<T, K>' union types के साथ कैसे काम करता है?",
        "options_en": ["Applied distributively to each union member", "Omit from union", "Union omission", "All of the above"],
        "options_hi": ["प्रत्येक union member पर distributively लागू होता है", "Union से omit करना", "Union omission", "उपरोक्त सभी"],
        "answer_en": "Applied distributively to each union member",
        "answer_hi": "प्रत्येक union member पर distributively लागू होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is 'Record<K, T>' utility type?",
        "question_hi": "'Record<K, T>' utility type क्या है?",
        "options_en": ["Constructs object type with keys K and values T", "Type record", "Object record", "All of the above"],
        "options_hi": ["Keys K और values T वाला object type बनाता है", "Type record", "Object record", "उपरोक्त सभी"],
        "answer_en": "Constructs object type with keys K and values T",
        "answer_hi": "Keys K और values T वाला object type बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How can 'Record' work with union keys?",
        "question_hi": "'Record' union keys के साथ कैसे काम कर सकता है?",
        "options_en": ["Creates object with union keys mapping to values", "Record union", "Union record", "All of the above"],
        "options_hi": ["Values पर mapping करने वाले union keys वाला object बनाता है", "Record union", "Union record", "उपरोक्त सभी"],
        "answer_en": "Creates object with union keys mapping to values",
        "answer_hi": "Values पर mapping करने वाले union keys वाला object बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is 'ReturnType<T>' utility type?",
        "question_hi": "'ReturnType<T>' utility type क्या है?",
        "options_en": ["Gets return type of function type T", "Function return type", "Return type extraction", "All of the above"],
        "options_hi": ["Function type T का return type प्राप्त करता है", "Function return type", "Return type extraction", "उपरोक्त सभी"],
        "answer_en": "Gets return type of function type T",
        "answer_hi": "Function type T का return type प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is 'Parameters<T>' utility type?",
        "question_hi": "'Parameters<T>' utility type क्या है?",
        "options_en": ["Gets parameters of function type T as tuple", "Function parameters", "Parameter extraction", "All of the above"],
        "options_hi": ["Function type T के parameters को tuple के रूप में प्राप्त करता है", "Function parameters", "Parameter extraction", "उपरोक्त सभी"],
        "answer_en": "Gets parameters of function type T as tuple",
        "answer_hi": "Function type T के parameters को tuple के रूप में प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 'Awaited<T>' utility type?",
        "question_hi": "'Awaited<T>' utility type क्या है?",
        "options_en": ["Recursively unwraps Promise types", "Promise unwrapping", "Async type extraction", "All of the above"],
        "options_hi": ["Recursively Promise types को unwrap करता है", "Promise unwrapping", "Async type extraction", "उपरोक्त सभी"],
        "answer_en": "Recursively unwraps Promise types",
        "answer_hi": "Recursively Promise types को unwrap करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How does 'Awaited' work with union of promises?",
        "question_hi": "'Awaited' promises के union के साथ कैसे काम करता है?",
        "options_en": ["Unwraps each promise type in union", "Awaits union", "Union awaiting", "All of the above"],
        "options_hi": ["Union में प्रत्येक promise type को unwrap करता है", "Union की await करता है", "Union awaiting", "उपरोक्त सभी"],
        "answer_en": "Unwraps each promise type in union",
        "answer_hi": "Union में प्रत्येक promise type को unwrap करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What future enhancements are expected for union types in TypeScript?",
        "question_hi": "TypeScript में union types के लिए कौन से भविष्य के enhancements अपेक्षित हैं?",
        "options_en": ["Better pattern matching, improved narrowing, performance optimizations", "Union elimination", "Simpler syntax", "No changes"],
        "options_hi": ["Better pattern matching, improved narrowing, performance optimizations", "Union elimination", "Simpler syntax", "कोई changes नहीं"],
        "answer_en": "Better pattern matching, improved narrowing, performance optimizations",
        "answer_hi": "Better pattern matching, improved narrowing, performance optimizations",
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