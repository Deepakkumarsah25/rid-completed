const questions = [
    {
        "num": 1,
        "question_en": "What is TypeScript primarily known for?",
        "question_hi": "TypeScript मुख्य रूप से किसके लिए जाना जाता है?",
        "options_en": ["Static typing", "Dynamic typing", "No typing", "Weak typing"],
        "options_hi": ["स्टैटिक टाइपिंग", "डायनामिक टाइपिंग", "कोई टाइपिंग नहीं", "कमज़ोर टाइपिंग"],
        "answer_en": "Static typing",
        "answer_hi": "स्टैटिक टाइपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of the following is a TypeScript data type?",
        "question_hi": "निम्न में से कौन सा TypeScript डेटा प्रकार है?",
        "options_en": ["number", "integer", "character", "stringify"],
        "options_hi": ["number", "integer", "character", "stringify"],
        "answer_en": "number",
        "answer_hi": "number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which keyword is used to declare a variable in TypeScript?",
        "question_hi": "TypeScript में variable declare करने के लिए कौन सा keyword इस्तेमाल होता है?",
        "options_en": ["let", "var", "const", "All of the above"],
        "options_hi": ["let", "var", "const", "ऊपर सभी"],
        "answer_en": "All of the above",
        "answer_hi": "ऊपर सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which type is used to represent a value that may or may not be present?",
        "question_hi": "ऐसा value जिसे मौजूद भी हो सकता है और नहीं भी हो सकता, उसे किस type से दर्शाया जाता है?",
        "options_en": ["undefined", "null", "any", "unknown"],
        "options_hi": ["undefined", "null", "any", "unknown"],
        "answer_en": "undefined",
        "answer_hi": "undefined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which TypeScript type can hold any value without type checking?",
        "question_hi": "TypeScript में कौन सा type किसी भी value को hold कर सकता है बिना type check के?",
        "options_en": ["any", "unknown", "void", "never"],
        "options_hi": ["any", "unknown", "void", "never"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What type is used for a function that returns nothing?",
        "question_hi": "ऐसी function जो कुछ return नहीं करती, उसके लिए किस type का उपयोग होता है?",
        "options_en": ["void", "never", "any", "undefined"],
        "options_hi": ["void", "never", "any", "undefined"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which keyword is used to create a constant variable?",
        "question_hi": "TypeScript में constant variable create करने के लिए कौन सा keyword इस्तेमाल होता है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which operator is used for optional chaining?",
        "question_hi": "Optional chaining के लिए कौन सा operator इस्तेमाल होता है?",
        "options_en": ["?.", "??", "|", "&"],
        "options_hi": ["?.", "??", "|", "&"],
        "answer_en": "?.",
        "answer_hi": "?.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which utility type makes all properties optional?",
        "question_hi": "कौन सा utility type सभी properties को optional बनाता है?",
        "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which TypeScript feature allows creating a new type from existing type?",
        "question_hi": "TypeScript में existing type से नया type बनाने की सुविधा कौन देती है?",
        "options_en": ["type alias", "interface", "class", "enum"],
        "options_hi": ["type alias", "interface", "class", "enum"],
        "answer_en": "type alias",
        "answer_hi": "type alias",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which TypeScript keyword is used for inheritance?",
        "question_hi": "TypeScript में inheritance के लिए कौन सा keyword इस्तेमाल होता है?",
        "options_en": ["extends", "implements", "super", "interface"],
        "options_hi": ["extends", "implements", "super", "interface"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which type represents values that never occur?",
        "question_hi": "ऐसे values जो कभी occur नहीं करते, उन्हें किस type से दर्शाया जाता है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which keyword implements an interface in a class?",
        "question_hi": "TypeScript में class में interface implement करने के लिए कौन सा keyword है?",
        "options_en": ["implements", "extends", "interface", "abstract"],
        "options_hi": ["implements", "extends", "interface", "abstract"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which keyword defines an abstract class?",
        "question_hi": "TypeScript में abstract class define करने के लिए कौन सा keyword है?",
        "options_en": ["abstract", "readonly", "const", "final"],
        "options_hi": ["abstract", "readonly", "const", "final"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which TypeScript type represents a sequence of elements of the same type?",
        "question_hi": "एक ही type के elements की sequence को TypeScript में किस type से दर्शाया जाता है?",
        "options_en": ["array", "tuple", "enum", "any"],
        "options_hi": ["array", "tuple", "enum", "any"],
        "answer_en": "array",
        "answer_hi": "array",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which TypeScript type allows representing fixed length arrays with multiple types?",
        "question_hi": "TypeScript में multiple types के साथ fixed length arrays represent करने वाला type कौन सा है?",
        "options_en": ["tuple", "array", "any", "enum"],
        "options_hi": ["tuple", "array", "any", "enum"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which TypeScript keyword checks type at runtime?",
        "question_hi": "TypeScript में runtime पर type check करने के लिए कौन सा keyword है?",
        "options_en": ["typeof", "keyof", "instanceof", "readonly"],
        "options_hi": ["typeof", "keyof", "instanceof", "readonly"],
        "answer_en": "typeof",
        "answer_hi": "typeof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which operator provides default value for null or undefined?",
        "question_hi": "TypeScript में null या undefined के लिए default value देने वाला operator कौन सा है?",
        "options_en": ["??", "?.", "|", "&"],
        "options_hi": ["??", "?.", "|", "&"],
        "answer_en": "??",
        "answer_hi": "??",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which utility type constructs a type with all required properties?",
        "question_hi": "TypeScript में कौन सा utility type सभी properties को required बनाता है?",
        "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which TypeScript feature allows creating a type-safe enum alternative?",
        "question_hi": "TypeScript में type-safe enum alternative बनाने की सुविधा कौन देती है?",
        "options_en": ["literal types", "tuple", "array", "any"],
        "options_hi": ["literal types", "tuple", "array", "any"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which TypeScript keyword is used to define a new interface?",
        "question_hi": "TypeScript में नया interface define करने के लिए कौन सा keyword है?",
        "options_en": ["interface", "type", "class", "enum"],
        "options_hi": ["interface", "type", "class", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which TypeScript type represents an object with any number of properties of any type?",
        "question_hi": "TypeScript में ऐसा object जिसमें किसी भी type की कितनी भी properties हो सकती हैं, उसे कौन सा type represent करता है?",
        "options_en": ["Record<string, any>", "any", "unknown", "object"],
        "options_hi": ["Record<string, any>", "any", "unknown", "object"],
        "answer_en": "Record<string, any>",
        "answer_hi": "Record<string, any>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which TypeScript feature allows creating a type by picking some properties of another type?",
        "question_hi": "TypeScript में किसी type की कुछ properties pick करके नया type बनाने की सुविधा कौन देती है?",
        "options_en": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
        "answer_en": "Pick<T,K>",
        "answer_hi": "Pick<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which TypeScript utility type removes some properties from a type?",
        "question_hi": "TypeScript में किसी type से कुछ properties remove करने वाला utility type कौन सा है?",
        "options_en": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
        "answer_en": "Omit<T,K>",
        "answer_hi": "Omit<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which TypeScript feature allows defining multiple types in a single variable?",
        "question_hi": "TypeScript में एक variable में multiple types define करने की सुविधा कौन देती है?",
        "options_en": ["union types", "intersection types", "tuple", "enum"],
        "options_hi": ["union types", "intersection types", "tuple", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which TypeScript feature allows combining multiple types into one?",
        "question_hi": "TypeScript में multiple types को combine करके एक type बनाने की सुविधा कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which TypeScript feature ensures type safety when accessing object properties with unknown type?",
        "question_hi": "TypeScript में unknown type के object properties access करते समय type safety कैसे सुनिश्चित होती है?",
        "options_en": ["type guards", "any", "void", "never"],
        "options_hi": ["type guards", "any", "void", "never"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which TypeScript feature allows narrowing a union type using 'typeof'?",
        "question_hi": "TypeScript में 'typeof' का उपयोग करके union type narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "type inference", "literal types", "interface"],
        "options_hi": ["type guards", "type inference", "literal types", "interface"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which TypeScript keyword allows accessing a parent class constructor?",
        "question_hi": "TypeScript में parent class constructor access करने के लिए कौन सा keyword है?",
        "options_en": ["super", "extends", "implements", "base"],
        "options_hi": ["super", "extends", "implements", "base"],
        "answer_en": "super",
        "answer_hi": "super",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which TypeScript feature allows defining a read-only property?",
        "question_hi": "TypeScript में read-only property define करने की सुविधा कौन देती है?",
        "options_en": ["readonly", "const", "let", "final"],
        "options_hi": ["readonly", "const", "let", "final"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which TypeScript feature allows a function to return different types depending on conditions?",
        "question_hi": "TypeScript में function condition के अनुसार अलग-अलग types return कर सकती है, इसे क्या कहते हैं?",
        "options_en": ["function overloading", "function overriding", "generic functions", "any"],
        "options_hi": ["function overloading", "function overriding", "generic functions", "any"],
        "answer_en": "function overloading",
        "answer_hi": "function overloading",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which TypeScript feature allows creating a generic function?",
        "question_hi": "TypeScript में generic function बनाने की सुविधा कौन देती है?",
        "options_en": ["generics", "any", "union types", "tuple"],
        "options_hi": ["generics", "any", "union types", "tuple"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which TypeScript type represents any function that never returns a value?",
        "question_hi": "TypeScript में ऐसा function जो कभी value return नहीं करता, उसे कौन सा type represent करता है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which TypeScript feature allows creating a type that combines multiple existing types using '&'?",
        "question_hi": "TypeScript में '&' का उपयोग करके multiple existing types combine करने वाला type कौन सा है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which TypeScript type represents a set of string constants?",
        "question_hi": "TypeScript में string constants का set represent करने वाला type कौन सा है?",
        "options_en": ["string literal types", "enum", "any", "tuple"],
        "options_hi": ["string literal types", "enum", "any", "tuple"],
        "answer_en": "string literal types",
        "answer_hi": "string literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which TypeScript keyword is used to declare a class?",
        "question_hi": "TypeScript में class declare करने के लिए कौन सा keyword है?",
        "options_en": ["class", "interface", "type", "enum"],
        "options_hi": ["class", "interface", "type", "enum"],
        "answer_en": "class",
        "answer_hi": "class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which TypeScript feature allows creating a union of multiple string literals?",
        "question_hi": "TypeScript में multiple string literals का union create करने की सुविधा कौन देती है?",
        "options_en": ["literal types", "enum", "tuple", "any"],
        "options_hi": ["literal types", "enum", "tuple", "any"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which TypeScript feature allows safely accessing nested properties?",
        "question_hi": "TypeScript में nested properties को safely access करने की सुविधा कौन देती है?",
        "options_en": ["optional chaining (?.)", "nullish coalescing (??)", "type guards", "any"],
        "options_hi": ["optional chaining (?.)", "nullish coalescing (??)", "type guards", "any"],
        "answer_en": "optional chaining (?.)",
        "answer_hi": "optional chaining (?.)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which TypeScript utility type allows constructing a type with all properties readonly?",
        "question_hi": "TypeScript में सभी properties readonly बनाने वाला utility type कौन सा है?",
        "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
        "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
        "answer_en": "Readonly<T>",
        "answer_hi": "Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which TypeScript type represents a variable that can have multiple types?",
        "question_hi": "TypeScript में ऐसा variable जो multiple types ले सकता है, उसे कौन सा type represent करता है?",
        "options_en": ["union types", "intersection types", "any", "never"],
        "options_hi": ["union types", "intersection types", "any", "never"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which TypeScript feature allows creating a type alias for union types?",
        "question_hi": "TypeScript में union types के लिए type alias create करने की सुविधा कौन देती है?",
        "options_en": ["type alias", "interface", "enum", "tuple"],
        "options_hi": ["type alias", "interface", "enum", "tuple"],
        "answer_en": "type alias",
        "answer_hi": "type alias",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which TypeScript feature allows creating type-safe variants of objects using tags?",
        "question_hi": "TypeScript में tags का उपयोग करके objects के type-safe variants बनाने की सुविधा कौन देती है?",
        "options_en": ["tagged unions", "intersection types", "tuple", "literal types"],
        "options_hi": ["tagged unions", "intersection types", "tuple", "literal types"],
        "answer_en": "tagged unions",
        "answer_hi": "tagged unions",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which TypeScript feature allows narrowing types with 'instanceof'?",
        "question_hi": "TypeScript में 'instanceof' का उपयोग करके types narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "type inference", "union types", "intersection types"],
        "options_hi": ["type guards", "type inference", "union types", "intersection types"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which TypeScript feature allows creating mapped types to transform existing types?",
        "question_hi": "TypeScript में existing types को transform करने के लिए mapped types create करने की सुविधा कौन देती है?",
        "options_en": ["mapped types", "utility types", "generics", "interfaces"],
        "options_hi": ["mapped types", "utility types", "generics", "interfaces"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which TypeScript feature allows creating type aliases for tuple types?",
        "question_hi": "TypeScript में tuple types के लिए type alias create करने की सुविधा कौन देती है?",
        "options_en": ["type alias", "interface", "enum", "any"],
        "options_hi": ["type alias", "interface", "enum", "any"],
        "answer_en": "type alias",
        "answer_hi": "type alias",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which TypeScript feature allows a function parameter to accept multiple types?",
        "question_hi": "TypeScript में function parameter multiple types accept कर सकता है, इसे क्या कहते हैं?",
        "options_en": ["union types", "intersection types", "tuple", "any"],
        "options_hi": ["union types", "intersection types", "tuple", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which TypeScript keyword allows defining a new enum?",
        "question_hi": "TypeScript में नया enum define करने के लिए कौन सा keyword है?",
        "options_en": ["enum", "type", "interface", "class"],
        "options_hi": ["enum", "type", "interface", "class"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which TypeScript keyword is used to check if an object is an instance of a class?",
        "question_hi": "TypeScript में किसी object को class का instance check करने के लिए कौन सा keyword है?",
        "options_en": ["instanceof", "typeof", "keyof", "extends"],
        "options_hi": ["instanceof", "typeof", "keyof", "extends"],
        "answer_en": "instanceof",
        "answer_hi": "instanceof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which TypeScript feature allows creating a generic interface?",
        "question_hi": "TypeScript में generic interface create करने की सुविधा कौन देती है?",
        "options_en": ["generics", "any", "tuple", "enum"],
        "options_hi": ["generics", "any", "tuple", "enum"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which TypeScript feature allows defining optional properties in a type?",
        "question_hi": "TypeScript में type में optional properties define करने की सुविधा कौन देती है?",
        "options_en": ["optional properties using '?'", "readonly properties", "default properties", "any"],
        "options_hi": ["optional properties using '?'", "readonly properties", "default properties", "any"],
        "answer_en": "optional properties using '?'",
        "answer_hi": "optional properties using '?'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which TypeScript feature allows creating a generic class?",
        "question_hi": "TypeScript में generic class create करने की सुविधा कौन देती है?",
        "options_en": ["generics", "interface", "enum", "tuple"],
        "options_hi": ["generics", "interface", "enum", "tuple"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which TypeScript feature ensures type safety for object keys?",
        "question_hi": "TypeScript में object keys के लिए type safety सुनिश्चित करने वाली सुविधा कौन देती है?",
        "options_en": ["keyof", "typeof", "extends", "implements"],
        "options_hi": ["keyof", "typeof", "extends", "implements"],
        "answer_en": "keyof",
        "answer_hi": "keyof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which TypeScript feature allows constraining generic types to a specific type?",
        "question_hi": "TypeScript में generic types को specific type तक सीमित करने की सुविधा कौन देती है?",
        "options_en": ["extends", "implements", "keyof", "readonly"],
        "options_hi": ["extends", "implements", "keyof", "readonly"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which TypeScript feature allows enforcing a type to be a subset of another type?",
        "question_hi": "TypeScript में किसी type को दूसरे type का subset enforce करने की सुविधा कौन देती है?",
        "options_en": ["extends", "implements", "keyof", "any"],
        "options_hi": ["extends", "implements", "keyof", "any"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which TypeScript feature allows defining multiple types for an array element?",
        "question_hi": "TypeScript में array element के लिए multiple types define करने की सुविधा कौन देती है?",
        "options_en": ["union types", "tuple", "any", "intersection types"],
        "options_hi": ["union types", "tuple", "any", "intersection types"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which TypeScript type represents a fixed-length array with multiple types?",
        "question_hi": "TypeScript में multiple types के साथ fixed-length array को कौन सा type represent करता है?",
        "options_en": ["tuple", "array", "any", "union types"],
        "options_hi": ["tuple", "array", "any", "union types"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which TypeScript feature allows default values for function parameters?",
        "question_hi": "TypeScript में function parameters के लिए default values देने की सुविधा कौन देती है?",
        "options_en": ["default parameters", "optional parameters", "any", "tuple"],
        "options_hi": ["default parameters", "optional parameters", "any", "tuple"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which TypeScript feature allows defining optional parameters in a function?",
        "question_hi": "TypeScript में function में optional parameters define करने की सुविधा कौन देती है?",
        "options_en": ["optional parameters using '?'", "default parameters", "readonly", "any"],
        "options_hi": ["optional parameters using '?'", "default parameters", "readonly", "any"],
        "answer_en": "optional parameters using '?'",
        "answer_hi": "optional parameters using '?'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which TypeScript feature allows inferring the type of a variable automatically?",
        "question_hi": "TypeScript में variable का type automatically infer करने की सुविधा कौन देती है?",
        "options_en": ["type inference", "type guards", "any", "unknown"],
        "options_hi": ["type inference", "type guards", "any", "unknown"],
        "answer_en": "type inference",
        "answer_hi": "type inference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which TypeScript feature allows defining a constant object with immutable properties?",
        "question_hi": "TypeScript में immutable properties वाले constant object define करने की सुविधा कौन देती है?",
        "options_en": ["readonly object", "const object", "tuple", "any"],
        "options_hi": ["readonly object", "const object", "tuple", "any"],
        "answer_en": "readonly object",
        "answer_hi": "readonly object",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which TypeScript feature allows safely handling null or undefined values?",
        "question_hi": "TypeScript में null या undefined values को safely handle करने की सुविधा कौन देती है?",
        "options_en": ["nullish coalescing (??)", "optional chaining (?.)", "any", "union types"],
        "options_hi": ["nullish coalescing (??)", "optional chaining (?.)", "any", "union types"],
        "answer_en": "nullish coalescing (??)",
        "answer_hi": "nullish coalescing (??)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which TypeScript feature allows defining the type of 'this' inside a function?",
        "question_hi": "TypeScript में function के अंदर 'this' का type define करने की सुविधा कौन देती है?",
        "options_en": ["this parameter", "type alias", "interface", "any"],
        "options_hi": ["this parameter", "type alias", "interface", "any"],
        "answer_en": "this parameter",
        "answer_hi": "this parameter",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which TypeScript feature allows enforcing immutability for arrays?",
        "question_hi": "TypeScript में arrays के लिए immutability enforce करने की सुविधा कौन देती है?",
        "options_en": ["readonly array", "const array", "tuple", "any"],
        "options_hi": ["readonly array", "const array", "tuple", "any"],
        "answer_en": "readonly array",
        "answer_hi": "readonly array",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which TypeScript feature allows defining a generic type alias?",
        "question_hi": "TypeScript में generic type alias define करने की सुविधा कौन देती है?",
        "options_en": ["generics", "type alias", "interface", "any"],
        "options_hi": ["generics", "type alias", "interface", "any"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which TypeScript feature allows defining a type that cannot be instantiated?",
        "question_hi": "TypeScript में ऐसा type define करने की सुविधा जो instantiate न किया जा सके, कौन देती है?",
        "options_en": ["abstract class", "interface", "enum", "type alias"],
        "options_hi": ["abstract class", "interface", "enum", "type alias"],
        "answer_en": "abstract class",
        "answer_hi": "abstract class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which TypeScript feature allows defining a function type signature?",
        "question_hi": "TypeScript में function type signature define करने की सुविधा कौन देती है?",
        "options_en": ["type alias", "interface", "tuple", "any"],
        "options_hi": ["type alias", "interface", "tuple", "any"],
        "answer_en": "type alias",
        "answer_hi": "type alias",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which TypeScript feature allows defining a type-safe object with keys of a certain type?",
        "question_hi": "TypeScript में specific type की keys वाले type-safe object define करने की सुविधा कौन देती है?",
        "options_en": ["Record<K,T>", "any", "tuple", "enum"],
        "options_hi": ["Record<K,T>", "any", "tuple", "enum"],
        "answer_en": "Record<K,T>",
        "answer_hi": "Record<K,T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which TypeScript feature allows creating a type that removes certain properties from another type?",
        "question_hi": "TypeScript में किसी type से कुछ properties remove करके नया type बनाने की सुविधा कौन देती है?",
        "options_en": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
        "answer_en": "Omit<T,K>",
        "answer_hi": "Omit<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which TypeScript feature allows creating a type that only includes some properties of another type?",
        "question_hi": "TypeScript में किसी type की कुछ properties शामिल करके नया type बनाने की सुविधा कौन देती है?",
        "options_en": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
        "answer_en": "Pick<T,K>",
        "answer_hi": "Pick<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which TypeScript feature allows defining a function parameter that accepts any number of arguments?",
        "question_hi": "TypeScript में function parameter जो किसी भी number of arguments accept कर सकता है, उसे क्या कहते हैं?",
        "options_en": ["rest parameters", "optional parameters", "default parameters", "tuple"],
        "options_hi": ["rest parameters", "optional parameters", "default parameters", "tuple"],
        "answer_en": "rest parameters",
        "answer_hi": "rest parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which TypeScript feature allows a function to have multiple signatures?",
        "question_hi": "TypeScript में function multiple signatures ले सकता है, इसे क्या कहते हैं?",
        "options_en": ["function overloading", "function overriding", "generic function", "any"],
        "options_hi": ["function overloading", "function overriding", "generic function", "any"],
        "answer_en": "function overloading",
        "answer_hi": "function overloading",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which TypeScript feature allows defining a tuple type with optional elements?",
        "question_hi": "TypeScript में optional elements वाले tuple type define करने की सुविधा कौन देती है?",
        "options_en": ["optional tuple elements", "union types", "any", "intersection types"],
        "options_hi": ["optional tuple elements", "union types", "any", "intersection types"],
        "answer_en": "optional tuple elements",
        "answer_hi": "optional tuple elements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which TypeScript feature allows combining multiple interfaces into one?",
        "question_hi": "TypeScript में multiple interfaces को combine करके एक interface बनाने की सुविधा कौन देती है?",
        "options_en": ["interface extends", "type alias", "intersection types", "union types"],
        "options_hi": ["interface extends", "type alias", "intersection types", "union types"],
        "answer_en": "interface extends",
        "answer_hi": "interface extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which TypeScript feature allows defining generic constraints using interfaces?",
        "question_hi": "TypeScript में generic constraints interface का उपयोग करके define करने की सुविधा कौन देती है?",
        "options_en": ["extends", "implements", "keyof", "readonly"],
        "options_hi": ["extends", "implements", "keyof", "readonly"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which TypeScript feature allows creating a type from existing type by removing 'readonly' modifiers?",
        "question_hi": "TypeScript में existing type से 'readonly' modifiers remove करके नया type बनाने की सुविधा कौन देती है?",
        "options_en": ["-Readonly mapped type", "Partial<T>", "Pick<T,K>", "Omit<T,K>"],
        "options_hi": ["-Readonly mapped type", "Partial<T>", "Pick<T,K>", "Omit<T,K>"],
        "answer_en": "-Readonly mapped type",
        "answer_hi": "-Readonly mapped type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which TypeScript feature allows defining types for class properties and methods?",
        "question_hi": "TypeScript में class properties और methods के लिए types define करने की सुविधा कौन देती है?",
        "options_en": ["type annotations", "type inference", "any", "unknown"],
        "options_hi": ["type annotations", "type inference", "any", "unknown"],
        "answer_en": "type annotations",
        "answer_hi": "type annotations",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which TypeScript feature allows defining a type that excludes some types from a union?",
        "question_hi": "TypeScript में union से कुछ types exclude करने वाला type कौन सा है?",
        "options_en": ["Exclude<T,U>", "Pick<T,K>", "Omit<T,K>", "Partial<T>"],
        "options_hi": ["Exclude<T,U>", "Pick<T,K>", "Omit<T,K>", "Partial<T>"],
        "answer_en": "Exclude<T,U>",
        "answer_hi": "Exclude<T,U>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which TypeScript feature allows defining a type that extracts only certain types from a union?",
        "question_hi": "TypeScript में union से केवल कुछ types extract करने वाला type कौन सा है?",
        "options_en": ["Extract<T,U>", "Exclude<T,U>", "Pick<T,K>", "Omit<T,K>"],
        "options_hi": ["Extract<T,U>", "Exclude<T,U>", "Pick<T,K>", "Omit<T,K>"],
        "answer_en": "Extract<T,U>",
        "answer_hi": "Extract<T,U>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which TypeScript feature allows inferring the return type of a function?",
        "question_hi": "TypeScript में function का return type infer करने की सुविधा कौन देती है?",
        "options_en": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Pick<T,K>"],
        "answer_en": "ReturnType<T>",
        "answer_hi": "ReturnType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which TypeScript feature allows inferring the types of function parameters?",
        "question_hi": "TypeScript में function parameters के types infer करने की सुविधा कौन देती है?",
        "options_en": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Pick<T,K>"],
        "answer_en": "Parameters<T>",
        "answer_hi": "Parameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which TypeScript utility type constructs a type with all properties required?",
        "question_hi": "TypeScript में सभी properties को required बनाने वाला utility type कौन सा है?",
        "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which TypeScript feature allows creating a type by mapping over another type's properties?",
        "question_hi": "TypeScript में किसी type की properties पर map करके नया type बनाने की सुविधा कौन देती है?",
        "options_en": ["mapped types", "utility types", "generics", "interface"],
        "options_hi": ["mapped types", "utility types", "generics", "interface"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which TypeScript feature allows defining a type for a function that never returns?",
        "question_hi": "TypeScript में ऐसा function जिसका return कभी न हो, उसका type define करने की सुविधा कौन देती है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which TypeScript keyword allows defining an abstract method in a class?",
        "question_hi": "TypeScript में class में abstract method define करने के लिए कौन सा keyword है?",
        "options_en": ["abstract", "interface", "type", "readonly"],
        "options_hi": ["abstract", "interface", "type", "readonly"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which TypeScript feature allows creating a readonly tuple?",
        "question_hi": "TypeScript में readonly tuple create करने की सुविधा कौन देती है?",
        "options_en": ["readonly tuple", "const tuple", "tuple", "any"],
        "options_hi": ["readonly tuple", "const tuple", "tuple", "any"],
        "answer_en": "readonly tuple",
        "answer_hi": "readonly tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which TypeScript feature allows defining a type that can be one of several literal values?",
        "question_hi": "TypeScript में ऐसा type define करने की सुविधा जो कई literal values में से एक हो सकता है, कौन देती है?",
        "options_en": ["literal types", "union types", "enum", "tuple"],
        "options_hi": ["literal types", "union types", "enum", "tuple"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which TypeScript feature allows defining type-safe event handlers in React?",
        "question_hi": "TypeScript में React में type-safe event handlers define करने की सुविधा कौन देती है?",
        "options_en": ["React.FC<Props>", "any", "interface", "tuple"],
        "options_hi": ["React.FC<Props>", "any", "interface", "tuple"],
        "answer_en": "React.FC<Props>",
        "answer_hi": "React.FC<Props>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which TypeScript feature allows enforcing a property to have a fixed set of values?",
        "question_hi": "TypeScript में property को fixed set of values देने की सुविधा कौन देती है?",
        "options_en": ["enum", "literal types", "union types", "any"],
        "options_hi": ["enum", "literal types", "union types", "any"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which TypeScript utility type constructs a type by making all properties optional?",
        "question_hi": "TypeScript में सभी properties optional बनाने वाला utility type कौन सा है?",
        "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which TypeScript feature allows safely accessing deep object properties that may be undefined?",
        "question_hi": "TypeScript में ऐसे deep object properties को safely access करने की सुविधा जो undefined हो सकती हैं, कौन देती है?",
        "options_en": ["optional chaining (?.)", "nullish coalescing (??)", "any", "unknown"],
        "options_hi": ["optional chaining (?.)", "nullish coalescing (??)", "any", "unknown"],
        "answer_en": "optional chaining (?.)",
        "answer_hi": "optional chaining (?.)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which TypeScript feature allows narrowing a type using literal values?",
        "question_hi": "TypeScript में literal values का उपयोग करके type narrow करने की सुविधा कौन देती है?",
        "options_en": ["literal types", "union types", "intersection types", "any"],
        "options_hi": ["literal types", "union types", "intersection types", "any"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which TypeScript feature allows creating a type-safe enum-like structure using union types?",
        "question_hi": "TypeScript में union types का उपयोग करके enum-like type-safe structure बनाने की सुविधा कौन देती है?",
        "options_en": ["union literal types", "enum", "tuple", "any"],
        "options_hi": ["union literal types", "enum", "tuple", "any"],
        "answer_en": "union literal types",
        "answer_hi": "union literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which TypeScript feature allows extracting the type of elements in an array?",
        "question_hi": "TypeScript में array elements का type extract करने की सुविधा कौन देती है?",
        "options_en": ["typeof array[number]", "keyof array", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["typeof array[number]", "keyof array", "Partial<T>", "Pick<T,K>"],
        "answer_en": "typeof array[number]",
        "answer_hi": "typeof array[number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which TypeScript feature allows extracting the type of a property from an object type?",
        "question_hi": "TypeScript में object type की किसी property का type extract करने की सुविधा कौन देती है?",
        "options_en": ["T[K]", "keyof T", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["T[K]", "keyof T", "Partial<T>", "Pick<T,K>"],
        "answer_en": "T[K]",
        "answer_hi": "T[K]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which TypeScript feature allows mapping over union types to create new types?",
        "question_hi": "TypeScript में union types पर map करके नए types बनाने की सुविधा कौन देती है?",
        "options_en": ["mapped types", "utility types", "generics", "interface"],
        "options_hi": ["mapped types", "utility types", "generics", "interface"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which TypeScript utility type constructs a type with all properties mutable?",
        "question_hi": "TypeScript में सभी properties को mutable बनाने वाला utility type कौन सा है?",
        "options_en": ["-Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
        "options_hi": ["-Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
        "answer_en": "-Readonly<T>",
        "answer_hi": "-Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which TypeScript feature allows defining a type-safe API response structure?",
        "question_hi": "TypeScript में type-safe API response structure define करने की सुविधा कौन देती है?",
        "options_en": ["interfaces", "any", "tuple", "enum"],
        "options_hi": ["interfaces", "any", "tuple", "enum"],
        "answer_en": "interfaces",
        "answer_hi": "interfaces",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which TypeScript feature allows extracting the types of function parameters as a tuple?",
        "question_hi": "TypeScript में function parameters के types को tuple के रूप में extract करने की सुविधा कौन देती है?",
        "options_en": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Pick<T,K>"],
        "answer_en": "Parameters<T>",
        "answer_hi": "Parameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which TypeScript feature allows defining type-safe higher-order functions?",
        "question_hi": "TypeScript में type-safe higher-order functions define करने की सुविधा कौन देती है?",
        "options_en": ["generics", "any", "tuple", "union types"],
        "options_hi": ["generics", "any", "tuple", "union types"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which TypeScript feature allows combining multiple type transformations in a single type?",
        "question_hi": "TypeScript में एक single type में multiple type transformations combine करने की सुविधा कौन देती है?",
        "options_en": ["mapped types with utility types", "generics", "tuple", "union types"],
        "options_hi": ["mapped types with utility types", "generics", "tuple", "union types"],
        "answer_en": "mapped types with utility types",
        "answer_hi": "mapped types with utility types",
        "attempted": false,
        "selected": ""
    }
]



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