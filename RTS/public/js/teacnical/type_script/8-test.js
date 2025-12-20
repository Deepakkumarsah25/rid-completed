const questions =[
    {
        "num": 1,
        "question_en": "What is the fundamental concept behind union types in TypeScript?",
        "question_hi": "TypeScript में union types के पीछे मौलिक अवधारणा क्या है?",
        "options_en": ["A value can be one of several different types", "Multiple types merged into one", "Types that can be combined at runtime", "A way to create new primitive types"],
        "options_hi": ["एक मान कई अलग-अलग प्रकारों में से एक हो सकता है", "एक में विलय किए गए कई प्रकार", "ऐसे प्रकार जिन्हें रनटाइम पर संयोजित किया जा सकता है", "नए आदिम प्रकार बनाने का एक तरीका"],
        "answer_en": "A value can be one of several different types",
        "answer_hi": "एक मान कई अलग-अलग प्रकारों में से एक हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which symbol is used to create union types in TypeScript?",
        "question_hi": "TypeScript में union types बनाने के लिए किस प्रतीक का उपयोग किया जाता है?",
        "options_en": ["| (vertical bar)", "& (ampersand)", "|| (double pipe)", ", (comma)"],
        "options_hi": ["| (वर्टिकल बार)", "& (एम्परसेंड)", "|| (डबल पाइप)", ", (कॉमा)"],
        "answer_en": "| (vertical bar)",
        "answer_hi": "| (वर्टिकल बार)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How does TypeScript handle operations on union types?",
        "question_hi": "TypeScript union types पर संचालन को कैसे संभालता है?",
        "options_en": ["Only allows operations valid for all union members", "Allows any operation", "Automatically converts types", "Throws runtime errors"],
        "options_hi": ["केवल उन संचालनों की अनुमति देता है जो सभी union सदस्यों के लिए मान्य हैं", "किसी भी संचालन की अनुमति देता है", "स्वचालित रूप से प्रकारों को परिवर्तित करता है", "रनटाइम त्रुटियाँ फेंकता है"],
        "answer_en": "Only allows operations valid for all union members",
        "answer_hi": "केवल उन संचालनों की अनुमति देता है जो सभी union सदस्यों के लिए मान्य हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is type narrowing in the context of union types?",
        "question_hi": "Union types के संदर्भ में type narrowing क्या है?",
        "options_en": ["The process of determining a more specific type from a union", "Making types smaller in memory", "Reducing the number of union members", "Compressing type information"],
        "options_hi": ["एक union से अधिक विशिष्ट प्रकार निर्धारित करने की प्रक्रिया", "मेमोरी में प्रकारों को छोटा बनाना", "Union सदस्यों की संख्या कम करना", "टाइप सूचना को संपीड़ित करना"],
        "answer_en": "The process of determining a more specific type from a union",
        "answer_hi": "एक union से अधिक विशिष्ट प्रकार निर्धारित करने की प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which of these is a valid example of union type usage?",
        "question_hi": "इनमें से कौन union type उपयोग का एक वैध उदाहरण है?",
        "options_en": ["function printId(id: string | number) { ... }", "function printId(id: string & number) { ... }", "function printId(id: string, number) { ... }", "function printId(id: string || number) { ... }"],
        "options_hi": ["function printId(id: string | number) { ... }", "function printId(id: string & number) { ... }", "function printId(id: string, number) { ... }", "function printId(id: string || number) { ... }"],
        "answer_en": "function printId(id: string | number) { ... }",
        "answer_hi": "function printId(id: string | number) { ... }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of discriminated unions?",
        "question_hi": "Discriminated unions का उद्देश्य क्या है?",
        "options_en": ["To enable type-safe pattern matching with a common discriminant property", "To discriminate between different types", "To create exclusive unions", "To label union members"],
        "options_hi": ["एक सामान्य discriminant property के साथ टाइप-सेफ पैटर्न मिलान सक्षम करने के लिए", "विभिन्न प्रकारों के बीच भेदभाव करने के लिए", "एक्सक्लूसिव unions बनाने के लिए", "Union सदस्यों को लेबल करने के लिए"],
        "answer_en": "To enable type-safe pattern matching with a common discriminant property",
        "answer_hi": "एक सामान्य discriminant property के साथ टाइप-सेफ पैटर्न मिलान सक्षम करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How can you create a union of string literal types?",
        "question_hi": "String literal types का union कैसे बना सकते हैं?",
        "options_en": ["type Status = 'active' | 'inactive' | 'pending';", "type Status = ['active', 'inactive', 'pending'];", "type Status = 'active' || 'inactive' || 'pending';", "type Status = 'active' & 'inactive' & 'pending';"],
        "options_hi": ["type Status = 'active' | 'inactive' | 'pending';", "type Status = ['active', 'inactive', 'pending'];", "type Status = 'active' || 'inactive' || 'pending';", "type Status = 'active' & 'inactive' & 'pending';"],
        "answer_en": "type Status = 'active' | 'inactive' | 'pending';",
        "answer_hi": "type Status = 'active' | 'inactive' | 'pending';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the relationship between union types and optional parameters?",
        "question_hi": "Union types और optional parameters के बीच क्या संबंध है?",
        "options_en": ["Optional parameters can be represented as union with undefined", "They are completely unrelated", "Union types replace optional parameters", "Optional parameters are unions by default"],
        "options_hi": ["वैकल्पिक मापदंडों को undefined के साथ union के रूप में दर्शाया जा सकता है", "वे पूरी तरह से असंबंधित हैं", "Union types वैकल्पिक मापदंडों को प्रतिस्थापित करते हैं", "वैकल्पिक मापदंड डिफ़ॉल्ट रूप से unions हैं"],
        "answer_en": "Optional parameters can be represented as union with undefined",
        "answer_hi": "वैकल्पिक मापदंडों को undefined के साथ union के रूप में दर्शाया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How does the 'typeof' operator help with union types?",
        "question_hi": "'typeof' ऑपरेटर union types में कैसे मदद करता है?",
        "options_en": ["It allows runtime type checking to narrow union types", "It creates new union types", "It converts union types to strings", "It eliminates union types"],
        "options_hi": ["यह रनटाइम टाइप चेकिंग की अनुमति देता है ताकि union types को संकीर्ण किया जा सके", "यह नए union types बनाता है", "यह union types को स्ट्रिंग में बदलता है", "यह union types को समाप्त करता है"],
        "answer_en": "It allows runtime type checking to narrow union types",
        "answer_hi": "यह रनटाइम टाइप चेकिंग की अनुमति देता है ताकि union types को संकीर्ण किया जा सके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is a common use case for union types in function return values?",
        "question_hi": "फ़ंक्शन रिटर्न मानों में union types का एक सामान्य उपयोग मामला क्या है?",
        "options_en": ["Returning either a result or an error object", "Returning multiple values", "Returning any type", "Returning void or a value"],
        "options_hi": ["या तो परिणाम या त्रुटि वस्तु लौटाना", "कई मान लौटाना", "कोई भी प्रकार लौटाना", "void या मान लौटाना"],
        "answer_en": "Returning either a result or an error object",
        "answer_hi": "या तो परिणाम या त्रुटि वस्तु लौटाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How can you create a type that represents a value that can be any primitive type except null and undefined?",
        "question_hi": "एक ऐसा प्रकार कैसे बना सकते हैं जो एक ऐसे मान का प्रतिनिधित्व करता है जो null और undefined के अलावा कोई भी आदिम प्रकार हो सकता है?",
        "options_en": ["type Primitive = string | number | boolean | symbol | bigint;", "type Primitive = any;", "type Primitive = unknown;", "type Primitive = NonNullable<primitive>;"],
        "options_hi": ["type Primitive = string | number | boolean | symbol | bigint;", "type Primitive = any;", "type Primitive = unknown;", "type Primitive = NonNullable<primitive>;"],
        "answer_en": "type Primitive = string | number | boolean | symbol | bigint;",
        "answer_hi": "type Primitive = string | number | boolean | symbol | bigint;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the difference between 'any' and a union of all types?",
        "question_hi": "'any' और सभी प्रकारों के union में क्या अंतर है?",
        "options_en": ["'any' bypasses type checking, union maintains type safety", "They are identical", "Union is more permissive", "'any' is more restrictive"],
        "options_hi": ["'any' टाइप चेकिंग को बायपास करता है, union टाइप सुरक्षा बनाए रखता है", "वे समान हैं", "Union अधिक अनुमेय है", "'any' अधिक प्रतिबंधक है"],
        "answer_en": "'any' bypasses type checking, union maintains type safety",
        "answer_hi": "'any' टाइप चेकिंग को बायपास करता है, union टाइप सुरक्षा बनाए रखता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How can you extract a union type from an array of values?",
        "question_hi": "मानों की एक सरणी से union type कैसे निकाल सकते हैं?",
        "options_en": ["type UnionFromArray = typeof array[number];", "type UnionFromArray = array[union];", "type UnionFromArray = unionof array;", "type UnionFromArray = Array.toUnion<array>;"],
        "options_hi": ["type UnionFromArray = typeof array[number];", "type UnionFromArray = array[union];", "type UnionFromArray = unionof array;", "type UnionFromArray = Array.toUnion<array>;"],
        "answer_en": "type UnionFromArray = typeof array[number];",
        "answer_hi": "type UnionFromArray = typeof array[number];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of the 'in' operator in type narrowing?",
        "question_hi": "टाइप नैरोइंग में 'in' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["To check if a property exists on an object", "To check if a value is in an array", "To create type guards", "To iterate over union members"],
        "options_hi": ["यह जांचने के लिए कि कोई संपत्ति किसी ऑब्जेक्ट पर मौजूद है या नहीं", "यह जांचने के लिए कि कोई मान किसी सरणी में है या नहीं", "टाइप गार्ड बनाने के लिए", "यूनियन सदस्यों पर पुनरावृति करने के लिए"],
        "answer_en": "To check if a property exists on an object",
        "answer_hi": "यह जांचने के लिए कि कोई संपत्ति किसी ऑब्जेक्ट पर मौजूद है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How can you create a type that represents all possible values of an enum?",
        "question_hi": "एक ऐसा प्रकार कैसे बना सकते हैं जो किसी enum के सभी संभावित मानों का प्रतिनिधित्व करता है?",
        "options_en": ["type EnumValues = `${MyEnum}`;", "type EnumValues = MyEnum;", "type EnumValues = keyof typeof MyEnum;", "type EnumValues = (typeof MyEnum)[keyof typeof MyEnum];"],
        "options_hi": ["type EnumValues = `${MyEnum}`;", "type EnumValues = MyEnum;", "type EnumValues = keyof typeof MyEnum;", "type EnumValues = (typeof MyEnum)[keyof typeof MyEnum];"],
        "answer_en": "type EnumValues = (typeof MyEnum)[keyof typeof MyEnum];",
        "answer_hi": "type EnumValues = (typeof MyEnum)[keyof typeof MyEnum];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the role of 'never' type in union type operations?",
        "question_hi": "यूनियन टाइप संचालन में 'never' टाइप की क्या भूमिका है?",
        "options_en": ["never | T always equals T", "never | T equals never", "never | T creates new types", "never | T is invalid"],
        "options_hi": ["never | T हमेशा T के बराबर होता है", "never | T never के बराबर होता है", "never | T नए प्रकार बनाता है", "never | T अमान्य है"],
        "answer_en": "never | T always equals T",
        "answer_hi": "never | T हमेशा T के बराबर होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How can you create a type-safe Redux action creator with union types?",
        "question_hi": "यूनियन टाइप के साथ टाइप-सेफ Redux action creator कैसे बना सकते हैं?",
        "options_en": ["Using discriminated union pattern with type property", "Using any type for actions", "Creating separate creators for each action", "Using function overloads"],
        "options_hi": ["टाइप प्रॉपर्टी के साथ विभेदित यूनियन पैटर्न का उपयोग करना", "क्रियाओं के लिए किसी भी प्रकार का उपयोग करना", "प्रत्येक क्रिया के लिए अलग-अलग निर्माता बनाना", "फ़ंक्शन ओवरलोड का उपयोग करना"],
        "answer_en": "Using discriminated union pattern with type property",
        "answer_hi": "टाइप प्रॉपर्टी के साथ विभेदित यूनियन पैटर्न का उपयोग करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the benefit of using union types over type assertions?",
        "question_hi": "टाइप assertions पर union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Union types provide compile-time safety, assertions can hide errors", "Assertions are always better", "Union types are faster", "Assertions provide more flexibility"],
        "options_hi": ["यूनियन टाइप कंपाइल-टाइम सुरक्षा प्रदान करते हैं, assertions त्रुटियों को छिपा सकते हैं", "Assertions हमेशा बेहतर होते हैं", "यूनियन टाइप तेज़ होते हैं", "Assertions अधिक लचीलापन प्रदान करते हैं"],
        "answer_en": "Union types provide compile-time safety, assertions can hide errors",
        "answer_hi": "यूनियन टाइप कंपाइल-टाइम सुरक्षा प्रदान करते हैं, assertions त्रुटियों को छिपा सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How can you create a union type for CSS measurement units?",
        "question_hi": "CSS माप इकाइयों के लिए union type कैसे बना सकते हैं?",
        "options_en": ["type CSSUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw' | 'vmin' | 'vmax';", "type CSSUnit = string;", "type CSSUnit = number;", "type CSSUnit = any;"],
        "options_hi": ["type CSSUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw' | 'vmin' | 'vmax';", "type CSSUnit = string;", "type CSSUnit = number;", "type CSSUnit = any;"],
        "answer_en": "type CSSUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw' | 'vmin' | 'vmax';",
        "answer_hi": "type CSSUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw' | 'vmin' | 'vmax';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the difference between union types and overloaded functions?",
        "question_hi": "Union types और overloaded functions में क्या अंतर है?",
        "options_en": ["Union types handle multiple types in one signature, overloads have multiple signatures", "They are the same thing", "Overloads are simpler", "Union types are deprecated"],
        "options_hi": ["यूनियन टाइप एक ही हस्ताक्षर में कई प्रकारों को संभालते हैं, ओवरलोड में कई हस्ताक्षर होते हैं", "वे एक ही चीज़ हैं", "ओवरलोड सरल हैं", "यूनियन टाइप deprecated हैं"],
        "answer_en": "Union types handle multiple types in one signature, overloads have multiple signatures",
        "answer_hi": "यूनियन टाइप एक ही हस्ताक्षर में कई प्रकारों को संभालते हैं, ओवरलोड में कई हस्ताक्षर होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How can you create a type for a React component that accepts children of specific types?",
        "question_hi": "एक React component के लिए टाइप कैसे बना सकते हैं जो विशिष्ट प्रकार के children स्वीकार करता है?",
        "options_en": ["type Children = ReactElement | ReactElement[] | string | number;", "type Children = any;", "type Children = ReactNode;", "type Children = ReactChild;"],
        "options_hi": ["type Children = ReactElement | ReactElement[] | string | number;", "type Children = any;", "type Children = ReactNode;", "type Children = ReactChild;"],
        "answer_en": "type Children = ReactElement | ReactElement[] | string | number;",
        "answer_hi": "type Children = ReactElement | ReactElement[] | string | number;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of exhaustive checking with union types?",
        "question_hi": "यूनियन टाइप के साथ exhaustive checking का उद्देश्य क्या है?",
        "options_en": ["To ensure all possible union members are handled", "To check if unions are exhaustive", "To eliminate unused union members", "To optimize union performance"],
        "options_hi": ["यह सुनिश्चित करने के लिए कि सभी संभावित यूनियन सदस्यों को संभाला जाता है", "यह जांचने के लिए कि क्या यूनियन exhaustive हैं", "अनुपयोगी यूनियन सदस्यों को समाप्त करने के लिए", "यूनियन प्रदर्शन को अनुकूलित करने के लिए"],
        "answer_en": "To ensure all possible union members are handled",
        "answer_hi": "यह सुनिश्चित करने के लिए कि सभी संभावित यूनियन सदस्यों को संभाला जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How can you create a type for HTTP status codes using union types?",
        "question_hi": "यूनियन टाइप का उपयोग करके HTTP स्थिति कोड के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type HttpStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500;", "type HttpStatus = number;", "type HttpStatus = string;", "type HttpStatus = any;"],
        "options_hi": ["type HttpStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500;", "type HttpStatus = number;", "type HttpStatus = string;", "type HttpStatus = any;"],
        "answer_en": "type HttpStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500;",
        "answer_hi": "type HttpStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the relationship between union types and intersection types?",
        "question_hi": "यूनियन टाइप और इंटरसेक्शन टाइप के बीच क्या संबंध है?",
        "options_en": ["Union: A OR B, Intersection: A AND B", "They are opposites", "Union is for classes, intersection for interfaces", "No relationship"],
        "options_hi": ["यूनियन: A या B, इंटरसेक्शन: A और B", "वे विपरीत हैं", "यूनियन कक्षाओं के लिए है, इंटरफेस के लिए इंटरसेक्शन", "कोई संबंध नहीं"],
        "answer_en": "Union: A OR B, Intersection: A AND B",
        "answer_hi": "यूनियन: A या B, इंटरसेक्शन: A और B",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How can you create a type for a function that accepts either a string or a function returning string?",
        "question_hi": "एक ऐसे फ़ंक्शन के लिए टाइप कैसे बना सकते हैं जो या तो स्ट्रिंग या स्ट्रिंग लौटाने वाला फ़ंक्शन स्वीकार करता है?",
        "options_en": ["type StringOrGetter = string | (() => string);", "type StringOrGetter = string & () => string;", "type StringOrGetter = string, () => string;", "type StringOrGetter = string || () => string;"],
        "options_hi": ["type StringOrGetter = string | (() => string);", "type StringOrGetter = string & () => string;", "type StringOrGetter = string, () => string;", "type StringOrGetter = string || () => string;"],
        "answer_en": "type StringOrGetter = string | (() => string);",
        "answer_hi": "type StringOrGetter = string | (() => string);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the advantage of using union types for API response typing?",
        "question_hi": "API प्रतिक्रिया टाइपिंग के लिए union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type both success and error responses in one type", "Makes code shorter", "Improves performance", "Simplifies API calls"],
        "options_hi": ["एक प्रकार में सफलता और त्रुटि प्रतिक्रियाओं दोनों को टाइप कर सकता है", "कोड छोटा बनाता है", "प्रदर्शन में सुधार करता है", "API कॉल को सरल बनाता है"],
        "answer_en": "Can type both success and error responses in one type",
        "answer_hi": "एक प्रकार में सफलता और त्रुटि प्रतिक्रियाओं दोनों को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How can you create a type for a configuration object with optional properties?",
        "question_hi": "वैकल्पिक गुणों वाले configuration object के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type Config = { required: string } & { optional?: number };", "type Config = { required: string } | { optional: number };", "type Config = { required: string, optional?: number };", "type Config = any;"],
        "options_hi": ["type Config = { required: string } & { optional?: number };", "type Config = { required: string } | { optional: number };", "type Config = { required: string, optional?: number };", "type Config = any;"],
        "answer_en": "type Config = { required: string, optional?: number };",
        "answer_hi": "type Config = { required: string, optional?: number };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the role of type guards with union types?",
        "question_hi": "यूनियन टाइप के साथ टाइप गार्ड की क्या भूमिका है?",
        "options_en": ["To narrow union types at runtime", "To protect types", "To create new unions", "To eliminate union types"],
        "options_hi": ["रनटाइम पर यूनियन टाइप को संकीर्ण करने के लिए", "प्रकारों की सुरक्षा के लिए", "नए यूनियन बनाने के लिए", "यूनियन टाइप को समाप्त करने के लिए"],
        "answer_en": "To narrow union types at runtime",
        "answer_hi": "रनटाइम पर यूनियन टाइप को संकीर्ण करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How can you create a type for a function that returns different types based on a flag?",
        "question_hi": "एक ऐसे फ़ंक्शन के लिए टाइप कैसे बना सकते हैं जो एक ध्वज के आधार पर अलग-अलग प्रकार लौटाता है?",
        "options_en": ["Using function overloads or conditional types", "Using union return type", "Using any type", "Using type assertions"],
        "options_hi": ["फ़ंक्शन ओवरलोड या सशर्त प्रकारों का उपयोग करना", "यूनियन रिटर्न टाइप का उपयोग करना", "किसी भी प्रकार का उपयोग करना", "टाइप assertions का उपयोग करना"],
        "answer_en": "Using function overloads or conditional types",
        "answer_hi": "फ़ंक्शन ओवरलोड या सशर्त प्रकारों का उपयोग करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the benefit of using union types with literal types?",
        "question_hi": "शाब्दिक प्रकारों के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Creates type-safe enums with auto-completion", "Makes code faster", "Reduces memory usage", "Simplifies type checking"],
        "options_hi": ["ऑटो-पूर्णता के साथ टाइप-सेफ enums बनाता है", "कोड को तेज़ बनाता है", "मेमोरी उपयोग कम करता है", "टाइप चेकिंग को सरल बनाता है"],
        "answer_en": "Creates type-safe enums with auto-completion",
        "answer_hi": "ऑटो-पूर्णता के साथ टाइप-सेफ enums बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How can you create a type for a button variant in a UI library?",
        "question_hi": "UI लाइब्रेरी में बटन वेरिएंट के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';", "type ButtonVariant = string;", "type ButtonVariant = any;", "type ButtonVariant = 1 | 2 | 3 | 4 | 5;"],
        "options_hi": ["type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';", "type ButtonVariant = string;", "type ButtonVariant = any;", "type ButtonVariant = 1 | 2 | 3 | 4 | 5;"],
        "answer_en": "type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';",
        "answer_hi": "type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the difference between union types and generic constraints?",
        "question_hi": "यूनियन टाइप और सामान्य बाधाओं में क्या अंतर है?",
        "options_en": ["Union: specific alternatives, Generics: type parameters with constraints", "They are the same", "Generics are more flexible", "Union types are more powerful"],
        "options_hi": ["यूनियन: विशिष्ट विकल्प, जेनरिक: बाधाओं के साथ टाइप पैरामीटर", "वे समान हैं", "जेनरिक अधिक लचीले हैं", "यूनियन टाइप अधिक शक्तिशाली हैं"],
        "answer_en": "Union: specific alternatives, Generics: type parameters with constraints",
        "answer_hi": "यूनियन: विशिष्ट विकल्प, जेनरिक: बाधाओं के साथ टाइप पैरामीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How can you create a type for a validation result?",
        "question_hi": "एक validation result के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type ValidationResult = { valid: true; value: T } | { valid: false; error: string };", "type ValidationResult = any;", "type ValidationResult = boolean;", "type ValidationResult = string;"],
        "options_hi": ["type ValidationResult = { valid: true; value: T } | { valid: false; error: string };", "type ValidationResult = any;", "type ValidationResult = boolean;", "type ValidationResult = string;"],
        "answer_en": "type ValidationResult = { valid: true; value: T } | { valid: false; error: string };",
        "answer_hi": "type ValidationResult = { valid: true; value: T } | { valid: false; error: string };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of the 'as const' assertion with union types?",
        "question_hi": "यूनियन टाइप के साथ 'as const' assertion का उद्देश्य क्या है?",
        "options_en": ["To preserve literal types for union extraction", "To make unions constant", "To improve performance", "To simplify syntax"],
        "options_hi": ["यूनियन निष्कर्षण के लिए शाब्दिक प्रकारों को संरक्षित करने के लिए", "यूनियन को स्थिर बनाने के लिए", "प्रदर्शन में सुधार करने के लिए", "वाक्यविन्यास को सरल बनाने के लिए"],
        "answer_en": "To preserve literal types for union extraction",
        "answer_hi": "यूनियन निष्कर्षण के लिए शाब्दिक प्रकारों को संरक्षित करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How can you create a type for a tree node with children?",
        "question_hi": "बच्चों वाले tree node के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type TreeNode<T> = { value: T; children: TreeNode<T>[]; };", "type TreeNode<T> = T | TreeNode<T>[];", "type TreeNode<T> = { value: T; children: any[]; };", "type TreeNode<T> = any;"],
        "options_hi": ["type TreeNode<T> = { value: T; children: TreeNode<T>[]; };", "type TreeNode<T> = T | TreeNode<T>[];", "type TreeNode<T> = { value: T; children: any[]; };", "type TreeNode<T> = any;"],
        "answer_en": "type TreeNode<T> = { value: T; children: TreeNode<T>[]; };",
        "answer_hi": "type TreeNode<T> = { value: T; children: TreeNode<T>[]; };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the advantage of using union types in state management?",
        "question_hi": "state management में union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can represent different states (loading, success, error) type-safely", "Reduces code size", "Improves performance", "Simplifies state updates"],
        "options_hi": ["विभिन्न अवस्थाओं (लोडिंग, सफलता, त्रुटि) को टाइप-सेफ तरीके से प्रस्तुत कर सकता है", "कोड आकार कम करता है", "प्रदर्शन में सुधार करता है", "राज्य अद्यतनों को सरल बनाता है"],
        "answer_en": "Can represent different states (loading, success, error) type-safely",
        "answer_hi": "विभिन्न अवस्थाओं (लोडिंग, सफलता, त्रुटि) को टाइप-सेफ तरीके से प्रस्तुत कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How can you create a type for optional configuration with defaults?",
        "question_hi": "डिफ़ॉल्ट के साथ वैकल्पिक configuration के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type Config = Partial<BaseConfig> & { required: string };", "type Config = BaseConfig | { required: string };", "type Config = any;", "type Config = BaseConfig & { required: string };"],
        "options_hi": ["type Config = Partial<BaseConfig> & { required: string };", "type Config = BaseConfig | { required: string };", "type Config = any;", "type Config = BaseConfig & { required: string };"],
        "answer_en": "type Config = Partial<BaseConfig> & { required: string };",
        "answer_hi": "type Config = Partial<BaseConfig> & { required: string };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the benefit of using union types with template literal types?",
        "question_hi": "टेम्पलेट शाब्दिक प्रकारों के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can create complex string literal unions dynamically", "Makes strings type-safe", "Improves string performance", "Simplifies template literals"],
        "options_hi": ["जटिल स्ट्रिंग शाब्दिक यूनियन गतिशील रूप से बना सकता है", "स्ट्रिंग्स को टाइप-सेफ बनाता है", "स्ट्रिंग प्रदर्शन में सुधार करता है", "टेम्पलेट शाब्दिक को सरल बनाता है"],
        "answer_en": "Can create complex string literal unions dynamically",
        "answer_hi": "जटिल स्ट्रिंग शाब्दिक यूनियन गतिशील रूप से बना सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How can you create a type for a component that accepts either controlled or uncontrolled props?",
        "question_hi": "एक ऐसे component के लिए टाइप कैसे बना सकते हैं जो या तो controlled या uncontrolled props स्वीकार करता है?",
        "options_en": ["Using discriminated union with value/onChange or defaultValue", "Using any type", "Creating separate components", "Using type assertions"],
        "options_hi": ["मूल्य/onChange या defaultValue के साथ विभेदित यूनियन का उपयोग करना", "किसी भी प्रकार का उपयोग करना", "अलग-अलग components बनाना", "टाइप assertions का उपयोग करना"],
        "answer_en": "Using discriminated union with value/onChange or defaultValue",
        "answer_hi": "मूल्य/onChange या defaultValue के साथ विभेदित यूनियन का उपयोग करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the role of conditional types with union types?",
        "question_hi": "यूनियन टाइप के साथ सशर्त प्रकारों की क्या भूमिका है?",
        "options_en": ["Can transform or filter union members based on conditions", "Creates conditional unions", "Makes unions conditional", "Eliminates union types"],
        "options_hi": ["शर्तों के आधार पर यूनियन सदस्यों को रूपांतरित या फ़िल्टर कर सकता है", "सशर्त यूनियन बनाता है", "यूनियन को सशर्त बनाता है", "यूनियन टाइप को समाप्त करता है"],
        "answer_en": "Can transform or filter union members based on conditions",
        "answer_hi": "शर्तों के आधार पर यूनियन सदस्यों को रूपांतरित या फ़िल्टर कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How can you create a type for a fetch result with loading states?",
        "question_hi": "लोडिंग अवस्थाओं के साथ fetch result के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type FetchResult<T> = { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: string };", "type FetchResult<T> = any;", "type FetchResult<T> = T | string;", "type FetchResult<T> = Promise<T>;"],
        "options_hi": ["type FetchResult<T> = { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: string };", "type FetchResult<T> = any;", "type FetchResult<T> = T | string;", "type FetchResult<T> = Promise<T>;"],
        "answer_en": "type FetchResult<T> = { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: string };",
        "answer_hi": "type FetchResult<T> = { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: string };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the benefit of using union types in pattern matching?",
        "question_hi": "पैटर्न मिलान में union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Enables exhaustive, type-safe pattern matching", "Makes patterns simpler", "Improves pattern performance", "Reduces code duplication"],
        "options_hi": ["विस्तृत, टाइप-सेफ पैटर्न मिलान सक्षम करता है", "पैटर्न को सरल बनाता है", "पैटर्न प्रदर्शन में सुधार करता है", "कोड दोहराव कम करता है"],
        "answer_en": "Enables exhaustive, type-safe pattern matching",
        "answer_hi": "विस्तृत, टाइप-सेफ पैटर्न मिलान सक्षम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How can you create a type for a CSS flex direction?",
        "question_hi": "CSS फ्लेक्स दिशा के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';", "type FlexDirection = string;", "type FlexDirection = any;", "type FlexDirection = 1 | 2 | 3 | 4;"],
        "options_hi": ["type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';", "type FlexDirection = string;", "type FlexDirection = any;", "type FlexDirection = 1 | 2 | 3 | 4;"],
        "answer_en": "type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';",
        "answer_hi": "type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the advantage of using union types with readonly arrays?",
        "question_hi": "readonly arrays के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can represent arrays that shouldn't be modified", "Improves array performance", "Makes arrays type-safe", "Simplifies array operations"],
        "options_hi": ["उन arrays का प्रतिनिधित्व कर सकता है जिन्हें संशोधित नहीं किया जाना चाहिए", "array प्रदर्शन में सुधार करता है", "arrays को टाइप-सेफ बनाता है", "array संचालन को सरल बनाता है"],
        "answer_en": "Can represent arrays that shouldn't be modified",
        "answer_hi": "उन arrays का प्रतिनिधित्व कर सकता है जिन्हें संशोधित नहीं किया जाना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How can you create a type for a database query result?",
        "question_hi": "डेटाबेस क्वेरी परिणाम के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type QueryResult<T> = { success: true; data: T[] } | { success: false; error: string };", "type QueryResult<T> = T[];", "type QueryResult<T> = any;", "type QueryResult<T> = Promise<T[]>;"],
        "options_hi": ["type QueryResult<T> = { success: true; data: T[] } | { success: false; error: string };", "type QueryResult<T> = T[];", "type QueryResult<T> = any;", "type QueryResult<T> = Promise<T[]>;"],
        "answer_en": "type QueryResult<T> = { success: true; data: T[] } | { success: false; error: string };",
        "answer_hi": "type QueryResult<T> = { success: true; data: T[] } | { success: false; error: string };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the benefit of using union types with React hooks?",
        "question_hi": "React hooks के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type useState with multiple possible states", "Makes hooks faster", "Reduces hook complexity", "Simplifies hook usage"],
        "options_hi": ["useState को कई संभावित अवस्थाओं के साथ टाइप कर सकता है", "hooks को तेज़ बनाता है", "hook जटिलता कम करता है", "hook उपयोग को सरल बनाता है"],
        "answer_en": "Can type useState with multiple possible states",
        "answer_hi": "useState को कई संभावित अवस्थाओं के साथ टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How can you create a type for a form field validation?",
        "question_hi": "फ़ॉर्म फ़ील्ड validation के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type FieldValidation = { valid: true } | { valid: false; message: string };", "type FieldValidation = boolean;", "type FieldValidation = string;", "type FieldValidation = any;"],
        "options_hi": ["type FieldValidation = { valid: true } | { valid: false; message: string };", "type FieldValidation = boolean;", "type FieldValidation = string;", "type FieldValidation = any;"],
        "answer_en": "type FieldValidation = { valid: true } | { valid: false; message: string };",
        "answer_hi": "type FieldValidation = { valid: true } | { valid: false; message: string };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the advantage of using union types with async/await?",
        "question_hi": "async/await के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type promises that resolve to different types", "Makes async code faster", "Reduces async complexity", "Simplifies promise chains"],
        "options_hi": ["उन प्रॉमिसों को टाइप कर सकता है जो विभिन्न प्रकारों में हल होते हैं", "async कोड को तेज़ बनाता है", "async जटिलता कम करता है", "promise श्रृंखलाओं को सरल बनाता है"],
        "answer_en": "Can type promises that resolve to different types",
        "answer_hi": "उन प्रॉमिसों को टाइप कर सकता है जो विभिन्न प्रकारों में हल होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How can you create a type for a modal state in a UI library?",
        "question_hi": "UI लाइब्रेरी में मोडल state के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type ModalState = { isOpen: true; content: ReactNode } | { isOpen: false };", "type ModalState = boolean;", "type ModalState = any;", "type ModalState = { isOpen: boolean; content?: ReactNode };"],
        "options_hi": ["type ModalState = { isOpen: true; content: ReactNode } | { isOpen: false };", "type ModalState = boolean;", "type ModalState = any;", "type ModalState = { isOpen: boolean; content?: ReactNode };"],
        "answer_en": "type ModalState = { isOpen: true; content: ReactNode } | { isOpen: false };",
        "answer_hi": "type ModalState = { isOpen: true; content: ReactNode } | { isOpen: false };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the benefit of using union types with event handlers?",
        "question_hi": "ईवेंट हैंडलर के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type handlers for different event types", "Makes events faster", "Reduces event complexity", "Simplifies event handling"],
        "options_hi": ["विभिन्न घटना प्रकारों के लिए हैंडलर टाइप कर सकता है", "घटनाओं को तेज़ बनाता है", "घटना जटिलता कम करता है", "घटना संचालन को सरल बनाता है"],
        "answer_en": "Can type handlers for different event types",
        "answer_hi": "विभिन्न घटना प्रकारों के लिए हैंडलर टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How can you create a type for a sorting direction?",
        "question_hi": "sorting direction के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type SortDirection = 'asc' | 'desc';", "type SortDirection = string;", "type SortDirection = boolean;", "type SortDirection = 1 | -1;"],
        "options_hi": ["type SortDirection = 'asc' | 'desc';", "type SortDirection = string;", "type SortDirection = boolean;", "type SortDirection = 1 | -1;"],
        "answer_en": "type SortDirection = 'asc' | 'desc';",
        "answer_hi": "type SortDirection = 'asc' | 'desc';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the advantage of using union types with discriminated unions in Redux?",
        "question_hi": "Redux में discriminated unions के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Type-safe action creators and reducers", "Makes Redux faster", "Reduces Redux boilerplate", "Simplifies Redux setup"],
        "options_hi": ["टाइप-सेफ action creators और reducers", "Redux को तेज़ बनाता है", "Redux boilerplate कम करता है", "Redux सेटअप को सरल बनाता है"],
        "answer_en": "Type-safe action creators and reducers",
        "answer_hi": "टाइप-सेफ action creators और reducers",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How can you create a type for a pagination state?",
        "question_hi": "पेजिनेशन state के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type Pagination = { page: number; perPage: number; total: number };", "type Pagination = number;", "type Pagination = any;", "type Pagination = [number, number, number];"],
        "options_hi": ["type Pagination = { page: number; perPage: number; total: number };", "type Pagination = number;", "type Pagination = any;", "type Pagination = [number, number, number];"],
        "answer_en": "type Pagination = { page: number; perPage: number; total: number };",
        "answer_hi": "type Pagination = { page: number; perPage: number; total: number };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the benefit of using union types with TypeScript's utility types?",
        "question_hi": "TypeScript के utility types के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can transform unions in powerful ways", "Makes utility types faster", "Reduces type complexity", "Simplifies type definitions"],
        "options_hi": ["यूनियन को शक्तिशाली तरीकों से रूपांतरित कर सकता है", "utility types को तेज़ बनाता है", "टाइप जटिलता कम करता है", "टाइप परिभाषाओं को सरल बनाता है"],
        "answer_en": "Can transform unions in powerful ways",
        "answer_hi": "यूनियन को शक्तिशाली तरीकों से रूपांतरित कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How can you create a type for a user role in an application?",
        "question_hi": "एक एप्लिकेशन में user role के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type UserRole = 'admin' | 'editor' | 'viewer' | 'guest';", "type UserRole = string;", "type UserRole = number;", "type UserRole = any;"],
        "options_hi": ["type UserRole = 'admin' | 'editor' | 'viewer' | 'guest';", "type UserRole = string;", "type UserRole = number;", "type UserRole = any;"],
        "answer_en": "type UserRole = 'admin' | 'editor' | 'viewer' | 'guest';",
        "answer_hi": "type UserRole = 'admin' | 'editor' | 'viewer' | 'guest';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the advantage of using union types with React context?",
        "question_hi": "React context के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type context values that change over time", "Makes context faster", "Reduces context complexity", "Simplifies context providers"],
        "options_hi": ["उन context मानों को टाइप कर सकता है जो समय के साथ बदलते हैं", "context को तेज़ बनाता है", "context जटिलता कम करता है", "context providers को सरल बनाता है"],
        "answer_en": "Can type context values that change over time",
        "answer_hi": "उन context मानों को टाइप कर सकता है जो समय के साथ बदलते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How can you create a type for a file upload state?",
        "question_hi": "फ़ाइल अपलोड state के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type UploadState = { status: 'idle' } | { status: 'uploading'; progress: number } | { status: 'success'; url: string } | { status: 'error'; message: string };", "type UploadState = any;", "type UploadState = string;", "type UploadState = number;"],
        "options_hi": ["type UploadState = { status: 'idle' } | { status: 'uploading'; progress: number } | { status: 'success'; url: string } | { status: 'error'; message: string };", "type UploadState = any;", "type UploadState = string;", "type UploadState = number;"],
        "answer_en": "type UploadState = { status: 'idle' } | { status: 'uploading'; progress: number } | { status: 'success'; url: string } | { status: 'error'; message: string };",
        "answer_hi": "type UploadState = { status: 'idle' } | { status: 'uploading'; progress: number } | { status: 'success'; url: string } | { status: 'error'; message: string };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the benefit of using union types with GraphQL queries?",
        "question_hi": "GraphQL queries के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type query results with multiple possible shapes", "Makes GraphQL faster", "Reduces query complexity", "Simplifies GraphQL schemas"],
        "options_hi": ["कई संभावित आकारों वाले क्वेरी परिणामों को टाइप कर सकता है", "GraphQL को तेज़ बनाता है", "क्वेरी जटिलता कम करता है", "GraphQL schemas को सरल बनाता है"],
        "answer_en": "Can type query results with multiple possible shapes",
        "answer_hi": "कई संभावित आकारों वाले क्वेरी परिणामों को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How can you create a type for a dropdown option?",
        "question_hi": "ड्रॉपडाउन विकल्प के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type DropdownOption = { label: string; value: string | number };", "type DropdownOption = any;", "type DropdownOption = string;", "type DropdownOption = [string, string | number];"],
        "options_hi": ["type DropdownOption = { label: string; value: string | number };", "type DropdownOption = any;", "type DropdownOption = string;", "type DropdownOption = [string, string | number];"],
        "answer_en": "type DropdownOption = { label: string; value: string | number };",
        "answer_hi": "type DropdownOption = { label: string; value: string | number };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the advantage of using union types with database models?",
        "question_hi": "डेटाबेस मॉडल के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type entities with different states (active, deleted, archived)", "Makes database operations faster", "Reduces model complexity", "Simplifies database schemas"],
        "options_hi": ["विभिन्न अवस्थाओं (सक्रिय, हटाया गया, संग्रहीत) वाली इकाइयों को टाइप कर सकता है", "डेटाबेस संचालन को तेज़ बनाता है", "मॉडल जटिलता कम करता है", "डेटाबेस schemas को सरल बनाता है"],
        "answer_en": "Can type entities with different states (active, deleted, archived)",
        "answer_hi": "विभिन्न अवस्थाओं (सक्रिय, हटाया गया, संग्रहीत) वाली इकाइयों को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How can you create a type for a notification severity level?",
        "question_hi": "सूचना गंभीरता स्तर के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type Severity = 'info' | 'success' | 'warning' | 'error';", "type Severity = string;", "type Severity = number;", "type Severity = any;"],
        "options_hi": ["type Severity = 'info' | 'success' | 'warning' | 'error';", "type Severity = string;", "type Severity = number;", "type Severity = any;"],
        "answer_en": "type Severity = 'info' | 'success' | 'warning' | 'error';",
        "answer_hi": "type Severity = 'info' | 'success' | 'warning' | 'error';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the benefit of using union types with form validation?",
        "question_hi": "फ़ॉर्म validation के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type validation results with detailed error information", "Makes validation faster", "Reduces validation complexity", "Simplifies form handling"],
        "options_hi": ["विस्तृत त्रुटि जानकारी के साथ validation परिणामों को टाइप कर सकता है", "validation को तेज़ बनाता है", "validation जटिलता कम करता है", "फ़ॉर्म हैंडलिंग को सरल बनाता है"],
        "answer_en": "Can type validation results with detailed error information",
        "answer_hi": "विस्तृत त्रुटि जानकारी के साथ validation परिणामों को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How can you create a type for a theme mode (light/dark)?",
        "question_hi": "थीम मोड (light/dark) के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type ThemeMode = 'light' | 'dark' | 'auto';", "type ThemeMode = string;", "type ThemeMode = boolean;", "type ThemeMode = any;"],
        "options_hi": ["type ThemeMode = 'light' | 'dark' | 'auto';", "type ThemeMode = string;", "type ThemeMode = boolean;", "type ThemeMode = any;"],
        "answer_en": "type ThemeMode = 'light' | 'dark' | 'auto';",
        "answer_hi": "type ThemeMode = 'light' | 'dark' | 'auto';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the advantage of using union types with localization?",
        "question_hi": "स्थानीयकरण के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type supported languages as string literals", "Makes localization faster", "Reduces locale complexity", "Simplifies translation files"],
        "options_hi": ["समर्थित भाषाओं को स्ट्रिंग शाब्दिक के रूप में टाइप कर सकता है", "स्थानीयकरण को तेज़ बनाता है", "लोकेल जटिलता कम करता है", "अनुवाद फ़ाइलों को सरल बनाता है"],
        "answer_en": "Can type supported languages as string literals",
        "answer_hi": "समर्थित भाषाओं को स्ट्रिंग शाब्दिक के रूप में टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How can you create a type for a payment method?",
        "question_hi": "भुगतान विधि के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type PaymentMethod = 'credit_card' | 'paypal' | 'bank_transfer' | 'crypto';", "type PaymentMethod = string;", "type PaymentMethod = number;", "type PaymentMethod = any;"],
        "options_hi": ["type PaymentMethod = 'credit_card' | 'paypal' | 'bank_transfer' | 'crypto';", "type PaymentMethod = string;", "type PaymentMethod = number;", "type PaymentMethod = any;"],
        "answer_en": "type PaymentMethod = 'credit_card' | 'paypal' | 'bank_transfer' | 'crypto';",
        "answer_hi": "type PaymentMethod = 'credit_card' | 'paypal' | 'bank_transfer' | 'crypto';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the benefit of using union types with API versioning?",
        "question_hi": "API संस्करण के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different API versions and their responses", "Makes APIs faster", "Reduces version complexity", "Simplifies API documentation"],
        "options_hi": ["विभिन्न API संस्करणों और उनकी प्रतिक्रियाओं को टाइप कर सकता है", "API को तेज़ बनाता है", "संस्करण जटिलता कम करता है", "API प्रलेखन को सरल बनाता है"],
        "answer_en": "Can type different API versions and their responses",
        "answer_hi": "विभिन्न API संस्करणों और उनकी प्रतिक्रियाओं को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How can you create a type for a media query breakpoint?",
        "question_hi": "मीडिया क्वेरी ब्रेकपॉइंट के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';", "type Breakpoint = string;", "type Breakpoint = number;", "type Breakpoint = any;"],
        "options_hi": ["type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';", "type Breakpoint = string;", "type Breakpoint = number;", "type Breakpoint = any;"],
        "answer_en": "type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';",
        "answer_hi": "type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the advantage of using union types with authentication states?",
        "question_hi": "प्रमाणीकरण अवस्थाओं के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different auth states (logged in, logged out, loading)", "Makes auth faster", "Reduces auth complexity", "Simplifies auth flows"],
        "options_hi": ["विभिन्न auth अवस्थाओं (लॉग इन, लॉग आउट, लोडिंग) को टाइप कर सकता है", "auth को तेज़ बनाता है", "auth जटिलता कम करता है", "auth प्रवाह को सरल बनाता है"],
        "answer_en": "Can type different auth states (logged in, logged out, loading)",
        "answer_hi": "विभिन्न auth अवस्थाओं (लॉग इन, लॉग आउट, लोडिंग) को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How can you create a type for a calendar event type?",
        "question_hi": "कैलेंडर इवेंट प्रकार के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type EventType = 'meeting' | 'appointment' | 'birthday' | 'holiday' | 'reminder';", "type EventType = string;", "type EventType = number;", "type EventType = any;"],
        "options_hi": ["type EventType = 'meeting' | 'appointment' | 'birthday' | 'holiday' | 'reminder';", "type EventType = string;", "type EventType = number;", "type EventType = any;"],
        "answer_en": "type EventType = 'meeting' | 'appointment' | 'birthday' | 'holiday' | 'reminder';",
        "answer_hi": "type EventType = 'meeting' | 'appointment' | 'birthday' | 'holiday' | 'reminder';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the benefit of using union types with search filters?",
        "question_hi": "खोज फ़िल्टर के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different filter combinations type-safely", "Makes search faster", "Reduces filter complexity", "Simplifies search implementation"],
        "options_hi": ["विभिन्न फ़िल्टर संयोजनों को टाइप-सेफ तरीके से टाइप कर सकता है", "खोज को तेज़ बनाता है", "फ़िल्टर जटिलता कम करता है", "खोज कार्यान्वयन को सरल बनाता है"],
        "answer_en": "Can type different filter combinations type-safely",
        "answer_hi": "विभिन्न फ़िल्टर संयोजनों को टाइप-सेफ तरीके से टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How can you create a type for a data table sorting state?",
        "question_hi": "डेटा तालिका sorting state के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type SortState = { field: string; direction: 'asc' | 'desc' } | null;", "type SortState = any;", "type SortState = string;", "type SortState = [string, string];"],
        "options_hi": ["type SortState = { field: string; direction: 'asc' | 'desc' } | null;", "type SortState = any;", "type SortState = string;", "type SortState = [string, string];"],
        "answer_en": "type SortState = { field: string; direction: 'asc' | 'desc' } | null;",
        "answer_hi": "type SortState = { field: string; direction: 'asc' | 'desc' } | null;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the advantage of using union types with form steps/wizards?",
        "question_hi": "फ़ॉर्म चरण/विज़ार्ड के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different form steps and their data", "Makes forms faster", "Reduces form complexity", "Simplifies form navigation"],
        "options_hi": ["विभिन्न फ़ॉर्म चरणों और उनके डेटा को टाइप कर सकता है", "फ़ॉर्म को तेज़ बनाता है", "फ़ॉर्म जटिलता कम करता है", "फ़ॉर्म नेविगेशन को सरल बनाता है"],
        "answer_en": "Can type different form steps and their data",
        "answer_hi": "विभिन्न फ़ॉर्म चरणों और उनके डेटा को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How can you create a type for a subscription plan?",
        "question_hi": "सदस्यता योजना के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type Plan = 'free' | 'basic' | 'premium' | 'enterprise';", "type Plan = string;", "type Plan = number;", "type Plan = any;"],
        "options_hi": ["type Plan = 'free' | 'basic' | 'premium' | 'enterprise';", "type Plan = string;", "type Plan = number;", "type Plan = any;"],
        "answer_en": "type Plan = 'free' | 'basic' | 'premium' | 'enterprise';",
        "answer_hi": "type Plan = 'free' | 'basic' | 'premium' | 'enterprise';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the benefit of using union types with caching strategies?",
        "question_hi": "कैशिंग रणनीतियों के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different cache states (fresh, stale, expired)", "Makes caching faster", "Reduces cache complexity", "Simplifies cache implementation"],
        "options_hi": ["विभिन्न कैश अवस्थाओं (ताजा, बासी, समाप्त) को टाइप कर सकता है", "कैशिंग को तेज़ बनाता है", "कैश जटिलता कम करता है", "कैश कार्यान्वयन को सरल बनाता है"],
        "answer_en": "Can type different cache states (fresh, stale, expired)",
        "answer_hi": "विभिन्न कैश अवस्थाओं (ताजा, बासी, समाप्त) को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How can you create a type for a network request method?",
        "question_hi": "नेटवर्क अनुरोध विधि के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';", "type HttpMethod = string;", "type HttpMethod = any;", "type HttpMethod = ['GET', 'POST', 'PUT', 'DELETE'];"],
        "options_hi": ["type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';", "type HttpMethod = string;", "type HttpMethod = any;", "type HttpMethod = ['GET', 'POST', 'PUT', 'DELETE'];"],
        "answer_en": "type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';",
        "answer_hi": "type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the advantage of using union types with feature flags?",
        "question_hi": "फ़ीचर फ़्लैग के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type available features and their states", "Makes feature flags faster", "Reduces flag complexity", "Simplifies feature management"],
        "options_hi": ["उपलब्ध सुविधाओं और उनकी अवस्थाओं को टाइप कर सकता है", "फ़ीचर फ़्लैग को तेज़ बनाता है", "फ़्लैग जटिलता कम करता है", "फ़ीचर प्रबंधन को सरल बनाता है"],
        "answer_en": "Can type available features and their states",
        "answer_hi": "उपलब्ध सुविधाओं और उनकी अवस्थाओं को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How can you create a type for a toast notification position?",
        "question_hi": "टोस्ट सूचना स्थिति के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';", "type ToastPosition = string;", "type ToastPosition = any;", "type ToastPosition = [string, string];"],
        "options_hi": ["type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';", "type ToastPosition = string;", "type ToastPosition = any;", "type ToastPosition = [string, string];"],
        "answer_en": "type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';",
        "answer_hi": "type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the benefit of using union types with permission systems?",
        "question_hi": "अनुमति प्रणालियों के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different permission levels and roles", "Makes permission checks faster", "Reduces permission complexity", "Simplifies access control"],
        "options_hi": ["विभिन्न अनुमति स्तरों और भूमिकाओं को टाइप कर सकता है", "अनुमति जांच को तेज़ बनाता है", "अनुमति जटिलता कम करता है", "एक्सेस नियंत्रण को सरल बनाता है"],
        "answer_en": "Can type different permission levels and roles",
        "answer_hi": "विभिन्न अनुमति स्तरों और भूमिकाओं को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How can you create a type for a date range filter?",
        "question_hi": "दिनांक सीमा फ़िल्टर के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type DateRange = { from: Date; to: Date } | 'today' | 'yesterday' | 'last7days' | 'last30days';", "type DateRange = any;", "type DateRange = string;", "type DateRange = [Date, Date];"],
        "options_hi": ["type DateRange = { from: Date; to: Date } | 'today' | 'yesterday' | 'last7days' | 'last30days';", "type DateRange = any;", "type DateRange = string;", "type DateRange = [Date, Date];"],
        "answer_en": "type DateRange = { from: Date; to: Date } | 'today' | 'yesterday' | 'last7days' | 'last30days';",
        "answer_hi": "type DateRange = { from: Date; to: Date } | 'today' | 'yesterday' | 'last7days' | 'last30days';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the advantage of using union types with data export formats?",
        "question_hi": "डेटा निर्यात प्रारूपों के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type supported export formats (CSV, JSON, Excel, PDF)", "Makes exports faster", "Reduces format complexity", "Simplifies export implementation"],
        "options_hi": ["समर्थित निर्यात प्रारूपों (CSV, JSON, Excel, PDF) को टाइप कर सकता है", "निर्यात को तेज़ बनाता है", "प्रारूप जटिलता कम करता है", "निर्यात कार्यान्वयन को सरल बनाता है"],
        "answer_en": "Can type supported export formats (CSV, JSON, Excel, PDF)",
        "answer_hi": "समर्थित निर्यात प्रारूपों (CSV, JSON, Excel, PDF) को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How can you create a type for a chart type in a dashboard?",
        "question_hi": "डैशबोर्ड में चार्ट प्रकार के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type ChartType = 'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'radar';", "type ChartType = string;", "type ChartType = any;", "type ChartType = ['line', 'bar', 'pie'];"],
        "options_hi": ["type ChartType = 'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'radar';", "type ChartType = string;", "type ChartType = any;", "type ChartType = ['line', 'bar', 'pie'];"],
        "answer_en": "type ChartType = 'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'radar';",
        "answer_hi": "type ChartType = 'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'radar';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the benefit of using union types with animation states?",
        "question_hi": "एनीमेशन अवस्थाओं के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different animation states (entering, exiting, idle)", "Makes animations faster", "Reduces animation complexity", "Simplifies animation logic"],
        "options_hi": ["विभिन्न एनीमेशन अवस्थाओं (प्रवेश करना, निकलना, निष्क्रिय) को टाइप कर सकता है", "एनीमेशन को तेज़ बनाता है", "एनीमेशन जटिलता कम करता है", "एनीमेशन तर्क को सरल बनाता है"],
        "answer_en": "Can type different animation states (entering, exiting, idle)",
        "answer_hi": "विभिन्न एनीमेशन अवस्थाओं (प्रवेश करना, निकलना, निष्क्रिय) को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How can you create a type for a data validation rule?",
        "question_hi": "डेटा validation नियम के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type ValidationRule = { type: 'required' } | { type: 'min'; value: number } | { type: 'max'; value: number } | { type: 'pattern'; regex: RegExp };", "type ValidationRule = any;", "type ValidationRule = string;", "type ValidationRule = Function;"],
        "options_hi": ["type ValidationRule = { type: 'required' } | { type: 'min'; value: number } | { type: 'max'; value: number } | { type: 'pattern'; regex: RegExp };", "type ValidationRule = any;", "type ValidationRule = string;", "type ValidationRule = Function;"],
        "answer_en": "type ValidationRule = { type: 'required' } | { type: 'min'; value: number } | { type: 'max'; value: number } | { type: 'pattern'; regex: RegExp };",
        "answer_hi": "type ValidationRule = { type: 'required' } | { type: 'min'; value: number } | { type: 'max'; value: number } | { type: 'pattern'; regex: RegExp };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the advantage of using union types with drag and drop operations?",
        "question_hi": "ड्रैग और ड्रॉप संचालन के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different drag states (dragging, over, dropped)", "Makes drag and drop faster", "Reduces DnD complexity", "Simplifies DnD implementation"],
        "options_hi": ["विभिन्न ड्रैग अवस्थाओं (खींचना, ऊपर, गिराया गया) को टाइप कर सकता है", "ड्रैग और ड्रॉप को तेज़ बनाता है", "DnD जटिलता कम करता है", "DnD कार्यान्वयन को सरल बनाता है"],
        "answer_en": "Can type different drag states (dragging, over, dropped)",
        "answer_hi": "विभिन्न ड्रैग अवस्थाओं (खींचना, ऊपर, गिराया गया) को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How can you create a type for a tab navigation state?",
        "question_hi": "टैब नेविगेशन state के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type TabState = { activeTab: string; tabs: Array<{ id: string; label: string }> };", "type TabState = string;", "type TabState = any;", "type TabState = Array<string>;"],
        "options_hi": ["type TabState = { activeTab: string; tabs: Array<{ id: string; label: string }> };", "type TabState = string;", "type TabState = any;", "type TabState = Array<string>;"],
        "answer_en": "type TabState = { activeTab: string; tabs: Array<{ id: string; label: string }> };",
        "answer_hi": "type TabState = { activeTab: string; tabs: Array<{ id: string; label: string }> };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the benefit of using union types with real-time updates?",
        "question_hi": "रियल-टाइम अद्यतनों के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different update types (create, update, delete)", "Makes real-time updates faster", "Reduces update complexity", "Simplifies real-time logic"],
        "options_hi": ["विभिन्न अद्यतन प्रकारों (बनाएँ, अद्यतन करें, हटाएँ) को टाइप कर सकता है", "रियल-टाइम अद्यतनों को तेज़ बनाता है", "अद्यतन जटिलता कम करता है", "रियल-टाइम तर्क को सरल बनाता है"],
        "answer_en": "Can type different update types (create, update, delete)",
        "answer_hi": "विभिन्न अद्यतन प्रकारों (बनाएँ, अद्यतन करें, हटाएँ) को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How can you create a type for a color theme in a design system?",
        "question_hi": "एक डिज़ाइन सिस्टम में रंग थीम के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type ColorTheme = 'light' | 'dark' | 'high-contrast' | 'colorblind-friendly';", "type ColorTheme = string;", "type ColorTheme = any;", "type ColorTheme = ['light', 'dark'];"],
        "options_hi": ["type ColorTheme = 'light' | 'dark' | 'high-contrast' | 'colorblind-friendly';", "type ColorTheme = string;", "type ColorTheme = any;", "type ColorTheme = ['light', 'dark'];"],
        "answer_en": "type ColorTheme = 'light' | 'dark' | 'high-contrast' | 'colorblind-friendly';",
        "answer_hi": "type ColorTheme = 'light' | 'dark' | 'high-contrast' | 'colorblind-friendly';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the advantage of using union types with file operations?",
        "question_hi": "फ़ाइल संचालन के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different file operations (read, write, delete) and their results", "Makes file operations faster", "Reduces file operation complexity", "Simplifies file handling"],
        "options_hi": ["विभिन्न फ़ाइल संचालन (पढ़ें, लिखें, हटाएँ) और उनके परिणामों को टाइप कर सकता है", "फ़ाइल संचालन को तेज़ बनाता है", "फ़ाइल संचालन जटिलता कम करता है", "फ़ाइल हैंडलिंग को सरल बनाता है"],
        "answer_en": "Can type different file operations (read, write, delete) and their results",
        "answer_hi": "विभिन्न फ़ाइल संचालन (पढ़ें, लिखें, हटाएँ) और उनके परिणामों को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How can you create a type for a shopping cart item?",
        "question_hi": "शॉपिंग कार्ट आइटम के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type CartItem = { productId: string; quantity: number; price: number };", "type CartItem = any;", "type CartItem = string;", "type CartItem = [string, number, number];"],
        "options_hi": ["type CartItem = { productId: string; quantity: number; price: number };", "type CartItem = any;", "type CartItem = string;", "type CartItem = [string, number, number];"],
        "answer_en": "type CartItem = { productId: string; quantity: number; price: number };",
        "answer_hi": "type CartItem = { productId: string; quantity: number; price: number };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the benefit of using union types with API pagination?",
        "question_hi": "API पेजिनेशन के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type paginated responses with cursor-based or offset-based pagination", "Makes pagination faster", "Reduces pagination complexity", "Simplifies page navigation"],
        "options_hi": ["कर्सर-आधारित या ऑफसेट-आधारित पेजिनेशन के साथ पेजिनेटेड प्रतिक्रियाओं को टाइप कर सकता है", "पेजिनेशन को तेज़ बनाता है", "पेजिनेशन जटिलता कम करता है", "पृष्ठ नेविगेशन को सरल बनाता है"],
        "answer_en": "Can type paginated responses with cursor-based or offset-based pagination",
        "answer_hi": "कर्सर-आधारित या ऑफसेट-आधारित पेजिनेशन के साथ पेजिनेटेड प्रतिक्रियाओं को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How can you create a type for a notification preference?",
        "question_hi": "सूचना प्राथमिकता के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type NotificationPref = 'email' | 'push' | 'sms' | 'none' | 'all';", "type NotificationPref = string;", "type NotificationPref = any;", "type NotificationPref = boolean;"],
        "options_hi": ["type NotificationPref = 'email' | 'push' | 'sms' | 'none' | 'all';", "type NotificationPref = string;", "type NotificationPref = any;", "type NotificationPref = boolean;"],
        "answer_en": "type NotificationPref = 'email' | 'push' | 'sms' | 'none' | 'all';",
        "answer_hi": "type NotificationPref = 'email' | 'push' | 'sms' | 'none' | 'all';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the advantage of using union types with data import formats?",
        "question_hi": "डेटा आयात प्रारूपों के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type supported import formats (CSV, JSON, XML, Excel)", "Makes imports faster", "Reduces import complexity", "Simplifies import handling"],
        "options_hi": ["समर्थित आयात प्रारूपों (CSV, JSON, XML, Excel) को टाइप कर सकता है", "आयात को तेज़ बनाता है", "आयात जटिलता कम करता है", "आयात हैंडलिंग को सरल बनाता है"],
        "answer_en": "Can type supported import formats (CSV, JSON, XML, Excel)",
        "answer_hi": "समर्थित आयात प्रारूपों (CSV, JSON, XML, Excel) को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How can you create a type for a user preference setting?",
        "question_hi": "उपयोगकर्ता प्राथमिकता सेटिंग के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type UserPreference = { theme: 'light' | 'dark'; language: 'en' | 'es' | 'fr'; notifications: boolean };", "type UserPreference = any;", "type UserPreference = string;", "type UserPreference = Object;"],
        "options_hi": ["type UserPreference = { theme: 'light' | 'dark'; language: 'en' | 'es' | 'fr'; notifications: boolean };", "type UserPreference = any;", "type UserPreference = string;", "type UserPreference = Object;"],
        "answer_en": "type UserPreference = { theme: 'light' | 'dark'; language: 'en' | 'es' | 'fr'; notifications: boolean };",
        "answer_hi": "type UserPreference = { theme: 'light' | 'dark'; language: 'en' | 'es' | 'fr'; notifications: boolean };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the benefit of using union types with data transformation pipelines?",
        "question_hi": "डेटा परिवर्तन पाइपलाइनों के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different transformation steps and their outputs", "Makes transformations faster", "Reduces pipeline complexity", "Simplifies data flow"],
        "options_hi": ["विभिन्न परिवर्तन चरणों और उनके आउटपुट को टाइप कर सकता है", "परिवर्तनों को तेज़ बनाता है", "पाइपलाइन जटिलता कम करता है", "डेटा प्रवाह को सरल बनाता है"],
        "answer_en": "Can type different transformation steps and their outputs",
        "answer_hi": "विभिन्न परिवर्तन चरणों और उनके आउटपुट को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How can you create a type for a data synchronization state?",
        "question_hi": "डेटा सिंक्रनाइज़ेशन state के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type SyncState = { status: 'idle' } | { status: 'syncing'; progress: number } | { status: 'success' } | { status: 'error'; message: string };", "type SyncState = any;", "type SyncState = string;", "type SyncState = number;"],
        "options_hi": ["type SyncState = { status: 'idle' } | { status: 'syncing'; progress: number } | { status: 'success' } | { status: 'error'; message: string };", "type SyncState = any;", "type SyncState = string;", "type SyncState = number;"],
        "answer_en": "type SyncState = { status: 'idle' } | { status: 'syncing'; progress: number } | { status: 'success' } | { status: 'error'; message: string };",
        "answer_hi": "type SyncState = { status: 'idle' } | { status: 'syncing'; progress: number } | { status: 'success' } | { status: 'error'; message: string };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the advantage of using union types with A/B testing?",
        "question_hi": "ए/बी परीक्षण के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different test variants and their configurations", "Makes A/B testing faster", "Reduces test complexity", "Simplifies variant management"],
        "options_hi": ["विभिन्न परीक्षण वेरिएंट और उनके विन्यासों को टाइप कर सकता है", "ए/बी परीक्षण को तेज़ बनाता है", "परीक्षण जटिलता कम करता है", "वेरिएंट प्रबंधन को सरल बनाता है"],
        "answer_en": "Can type different test variants and their configurations",
        "answer_hi": "विभिन्न परीक्षण वेरिएंट और उनके विन्यासों को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How can you create a type for a data backup schedule?",
        "question_hi": "डेटा बैकअप शेड्यूल के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type BackupSchedule = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';", "type BackupSchedule = string;", "type BackupSchedule = any;", "type BackupSchedule = number;"],
        "options_hi": ["type BackupSchedule = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';", "type BackupSchedule = string;", "type BackupSchedule = any;", "type BackupSchedule = number;"],
        "answer_en": "type BackupSchedule = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';",
        "answer_hi": "type BackupSchedule = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the benefit of using union types with data migration states?",
        "question_hi": "डेटा माइग्रेशन अवस्थाओं के साथ union types का उपयोग करने का क्या लाभ है?",
        "options_en": ["Can type different migration steps and their progress", "Makes migrations faster", "Reduces migration complexity", "Simplifies migration tracking"],
        "options_hi": ["विभिन्न माइग्रेशन चरणों और उनकी प्रगति को टाइप कर सकता है", "माइग्रेशन को तेज़ बनाता है", "माइग्रेशन जटिलता कम करता है", "माइग्रेशन ट्रैकिंग को सरल बनाता है"],
        "answer_en": "Can type different migration steps and their progress",
        "answer_hi": "विभिन्न माइग्रेशन चरणों और उनकी प्रगति को टाइप कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How can you create a type for a data retention policy?",
        "question_hi": "डेटा प्रतिधारण नीति के लिए टाइप कैसे बना सकते हैं?",
        "options_en": ["type RetentionPolicy = 'forever' | '30days' | '90days' | '1year' | 'custom';", "type RetentionPolicy = string;", "type RetentionPolicy = any;", "type RetentionPolicy = number;"],
        "options_hi": ["type RetentionPolicy = 'forever' | '30days' | '90days' | '1year' | 'custom';", "type RetentionPolicy = string;", "type RetentionPolicy = any;", "type RetentionPolicy = number;"],
        "answer_en": "type RetentionPolicy = 'forever' | '30days' | '90days' | '1year' | 'custom';",
        "answer_hi": "type RetentionPolicy = 'forever' | '30days' | '90days' | '1year' | 'custom';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the ultimate benefit of mastering union types in TypeScript?",
        "question_hi": "TypeScript में union types में महारत हासिल करने का अंतिम लाभ क्या है?",
        "options_en": ["Enables writing more expressive, type-safe, and maintainable code", "Makes code run faster", "Reduces code size", "Simplifies debugging"],
        "options_hi": ["अधिक अभिव्यंजक, टाइप-सेफ और रखरखाव योग्य कोड लिखना सक्षम करता है", "कोड को तेज़ी से चलाता है", "कोड का आकार कम करता है", "डिबगिंग को सरल बनाता है"],
        "answer_en": "Enables writing more expressive, type-safe, and maintainable code",
        "answer_hi": "अधिक अभिव्यंजक, टाइप-सेफ और रखरखाव योग्य कोड लिखना सक्षम करता है",
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