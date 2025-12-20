const questions= [
    {
        "num": 1,
        "question_en": "Which TypeScript type is used to represent both null and undefined?",
        "question_hi": "TypeScript में कौन सा टाइप null और undefined दोनों का प्रतिनिधित्व करता है?",
        "options_en": ["null | undefined", "any", "void", "never"],
        "options_hi": ["null | undefined", "any", "void", "never"],
        "answer_en": "null | undefined",
        "answer_hi": "null | undefined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword declares a variable globally in TypeScript?",
        "question_hi": "TypeScript में global variable घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["var", "let", "const", "global"],
        "options_hi": ["var", "let", "const", "global"],
        "answer_en": "var",
        "answer_hi": "var",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which operator is used for optional chaining in TypeScript?",
        "question_hi": "TypeScript में optional chaining के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
        "options_en": ["?.", "??", "||", "&"],
        "options_hi": ["?.", "??", "||", "&"],
        "answer_en": "?.",
        "answer_hi": "?.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which TypeScript type represents a sequence of characters?",
        "question_hi": "TypeScript में characters के क्रम का प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["string", "number", "boolean", "any"],
        "options_hi": ["string", "number", "boolean", "any"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which TypeScript feature allows defining multiple types for a variable?",
        "question_hi": "TypeScript में variable के लिए कई प्रकार निर्दिष्ट करने की अनुमति कौन सी सुविधा देती है?",
        "options_en": ["Union types", "Intersection types", "Literal types", "Any type"],
        "options_hi": ["Union types", "Intersection types", "Literal types", "Any type"],
        "answer_en": "Union types",
        "answer_hi": "Union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which keyword defines a constant variable in TypeScript?",
        "question_hi": "TypeScript में constant variable परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which TypeScript type represents true/false values?",
        "question_hi": "TypeScript में true/false मानों को कौन सा टाइप दर्शाता है?",
        "options_en": ["boolean", "number", "string", "any"],
        "options_hi": ["boolean", "number", "string", "any"],
        "answer_en": "boolean",
        "answer_hi": "boolean",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which keyword is used to create a class in TypeScript?",
        "question_hi": "TypeScript में class बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["class", "interface", "type", "enum"],
        "options_hi": ["class", "interface", "type", "enum"],
        "answer_en": "class",
        "answer_hi": "class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which keyword is used to define an interface in TypeScript?",
        "question_hi": "TypeScript में interface को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["interface", "class", "type", "enum"],
        "options_hi": ["interface", "class", "type", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which keyword allows a subclass to access a parent class constructor?",
        "question_hi": "TypeScript में subclass को parent class के constructor तक पहुंचने की अनुमति कौन सा कीवर्ड देता है?",
        "options_en": ["super", "this", "extends", "implements"],
        "options_hi": ["super", "this", "extends", "implements"],
        "answer_en": "super",
        "answer_hi": "super",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which TypeScript type represents an array of numbers?",
        "question_hi": "TypeScript में numbers की array का प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["number[]", "any[]", "tuple", "object"],
        "options_hi": ["number[]", "any[]", "tuple", "object"],
        "answer_en": "number[]",
        "answer_hi": "number[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which operator is used for nullish coalescing in TypeScript?",
        "question_hi": "TypeScript में nullish coalescing के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
        "options_en": ["??", "||", "&&", "?."],
        "options_hi": ["??", "||", "&&", "?."],
        "answer_en": "??",
        "answer_hi": "??",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which TypeScript type is used for values that never occur?",
        "question_hi": "TypeScript में कौन सा टाइप ऐसे मानों के लिए उपयोग किया जाता है जो कभी नहीं होते?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which keyword is used to declare a read-only property in a class?",
        "question_hi": "TypeScript में class में readonly property घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["readonly", "const", "private", "public"],
        "options_hi": ["readonly", "const", "private", "public"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which feature allows a function to accept variable number of arguments?",
        "question_hi": "कौन सी सुविधा function को variable number of arguments स्वीकार करने की अनुमति देती है?",
        "options_en": ["Rest parameters", "Optional parameters", "Default parameters", "Tuple parameters"],
        "options_hi": ["Rest parameters", "Optional parameters", "Default parameters", "Tuple parameters"],
        "answer_en": "Rest parameters",
        "answer_hi": "Rest parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which TypeScript keyword is used to define a union of multiple types?",
        "question_hi": "TypeScript में कई प्रकारों का union परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["|", "&", "any", "type"],
        "options_hi": ["|", "&", "any", "type"],
        "answer_en": "|",
        "answer_hi": "|",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which keyword is used to extend a class in TypeScript?",
        "question_hi": "TypeScript में class को extend करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["extends", "implements", "super", "class"],
        "options_hi": ["extends", "implements", "super", "class"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which keyword is used to implement an interface in TypeScript?",
        "question_hi": "TypeScript में interface को implement करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["implements", "extends", "super", "interface"],
        "options_hi": ["implements", "extends", "super", "interface"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which type is used for any type of value without type checking?",
        "question_hi": "TypeScript में किस टाइप का उपयोग किसी भी प्रकार के मान के लिए किया जाता है बिना type checking के?",
        "options_en": ["any", "unknown", "void", "never"],
        "options_hi": ["any", "unknown", "void", "never"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which type in TypeScript represents an unknown type safely?",
        "question_hi": "TypeScript में unknown type को सुरक्षित रूप से कौन सा टाइप दर्शाता है?",
        "options_en": ["unknown", "any", "void", "never"],
        "options_hi": ["unknown", "any", "void", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which of the following is used to define a tuple type?",
        "question_hi": "TypeScript में tuple type परिभाषित करने के लिए कौन सा सिंटैक्स उपयोग किया जाता है?",
        "options_en": ["[string, number]", "[number, number]", "[any[]]", "[object]"],
        "options_hi": ["[string, number]", "[number, number]", "[any[]]", "[object]"],
        "answer_en": "[string, number]",
        "answer_hi": "[string, number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which keyword defines an optional property in TypeScript?",
        "question_hi": "TypeScript में optional property परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["?", "!", "*", "$"],
        "options_hi": ["?", "!", "*", "$"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which of the following is used for type assertion in TypeScript?",
        "question_hi": "TypeScript में type assertion के लिए कौन सा उपयोग किया जाता है?",
        "options_en": ["as", "<Type>", "both", "none"],
        "options_hi": ["as", "<Type>", "दोनों", "कोई नहीं"],
        "answer_en": "both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which type represents a function that never returns?",
        "question_hi": "कौन सा टाइप ऐसे function का प्रतिनिधित्व करता है जो कभी return नहीं करता?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which TypeScript type allows specifying default values for function parameters?",
        "question_hi": "TypeScript में function parameters के लिए default values निर्दिष्ट करने की अनुमति कौन सा टाइप देता है?",
        "options_en": ["Default parameters", "Optional parameters", "Rest parameters", "Tuple parameters"],
        "options_hi": ["Default parameters", "Optional parameters", "Rest parameters", "Tuple parameters"],
        "answer_en": "Default parameters",
        "answer_hi": "Default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which type is used for an object with fixed known properties?",
        "question_hi": "TypeScript में fixed और known properties वाले object के लिए कौन सा टाइप उपयोग किया जाता है?",
        "options_en": ["object", "any", "unknown", "never"],
        "options_hi": ["object", "any", "unknown", "never"],
        "answer_en": "object",
        "answer_hi": "object",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which type represents a literal value in TypeScript?",
        "question_hi": "TypeScript में literal value का प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["Literal type", "Union type", "Intersection type", "Any type"],
        "options_hi": ["Literal type", "Union type", "Intersection type", "Any type"],
        "answer_en": "Literal type",
        "answer_hi": "Literal type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which type represents multiple types combined in TypeScript?",
        "question_hi": "TypeScript में multiple types को combine करने के लिए कौन सा टाइप उपयोग किया जाता है?",
        "options_en": ["Intersection type", "Union type", "Literal type", "Any type"],
        "options_hi": ["Intersection type", "Union type", "Literal type", "Any type"],
        "answer_en": "Intersection type",
        "answer_hi": "Intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which TypeScript feature helps avoid runtime errors for null and undefined?",
        "question_hi": "TypeScript में null और undefined से runtime errors बचाने में कौन सी सुविधा मदद करती है?",
        "options_en": ["strictNullChecks", "any", "unknown", "void"],
        "options_hi": ["strictNullChecks", "any", "unknown", "void"],
        "answer_en": "strictNullChecks",
        "answer_hi": "strictNullChecks",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which TypeScript feature allows type inference automatically?",
        "question_hi": "TypeScript में type inference स्वचालित रूप से किस सुविधा के द्वारा होती है?",
        "options_en": ["Type inference", "Explicit type", "Interface", "Enum"],
        "options_hi": ["Type inference", "Explicit type", "Interface", "Enum"],
        "answer_en": "Type inference",
        "answer_hi": "Type inference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which TypeScript type represents a string array?",
        "question_hi": "TypeScript में string array का प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["string[]", "any[]", "number[]", "tuple"],
        "options_hi": ["string[]", "any[]", "number[]", "tuple"],
        "answer_en": "string[]",
        "answer_hi": "string[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which keyword defines a type alias in TypeScript?",
        "question_hi": "TypeScript में type alias परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["type", "interface", "class", "enum"],
        "options_hi": ["type", "interface", "class", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which keyword is used to define an enum in TypeScript?",
        "question_hi": "TypeScript में enum परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["enum", "type", "interface", "class"],
        "options_hi": ["enum", "type", "interface", "class"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which operator is used for type assertion in TypeScript?",
        "question_hi": "TypeScript में type assertion के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
        "options_en": ["as", "<Type>", "both", "none"],
        "options_hi": ["as", "<Type>", "दोनों", "कोई नहीं"],
        "answer_en": "both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which TypeScript type represents any type without restrictions?",
        "question_hi": "TypeScript में unrestricted किसी भी type का प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["any", "unknown", "void", "never"],
        "options_hi": ["any", "unknown", "void", "never"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which keyword allows a class property to be inherited but not accessible outside subclass?",
        "question_hi": "कौन सा कीवर्ड class property को inherit करने देता है लेकिन subclass के बाहर पहुंचने नहीं देता?",
        "options_en": ["protected", "private", "public", "readonly"],
        "options_hi": ["protected", "private", "public", "readonly"],
        "answer_en": "protected",
        "answer_hi": "protected",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which TypeScript feature helps catch type errors at compile time?",
        "question_hi": "TypeScript में compile समय पर type errors पकड़ने में कौन सी सुविधा मदद करती है?",
        "options_en": ["Static typing", "Dynamic typing", "Weak typing", "Any typing"],
        "options_hi": ["Static typing", "Dynamic typing", "Weak typing", "Any typing"],
        "answer_en": "Static typing",
        "answer_hi": "Static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which keyword defines a variable that cannot be reassigned?",
        "question_hi": "कौन सा keyword ऐसा variable परिभाषित करता है जिसे दोबारा assign नहीं किया जा सकता?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which keyword allows a function parameter to be optional?",
        "question_hi": "कौन सा keyword function parameter को optional बनाने की अनुमति देता है?",
        "options_en": ["?", "!", "*", "$"],
        "options_hi": ["?", "!", "*", "$"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which TypeScript type represents a function that returns nothing?",
        "question_hi": "TypeScript में function जो कुछ return नहीं करता उसका प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["void", "never", "any", "unknown"],
        "options_hi": ["void", "never", "any", "unknown"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which keyword declares a variable with block scope?",
        "question_hi": "TypeScript में block scope वाले variable को declare करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["let", "var", "const", "readonly"],
        "options_hi": ["let", "var", "const", "readonly"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which TypeScript feature allows creating strongly-typed classes and objects?",
        "question_hi": "TypeScript में strongly-typed classes और objects बनाने की कौन सी सुविधा मदद करती है?",
        "options_en": ["Classes and Interfaces", "Any type", "Union type", "Void"],
        "options_hi": ["Classes and Interfaces", "Any type", "Union type", "Void"],
        "answer_en": "Classes and Interfaces",
        "answer_hi": "Classes and Interfaces",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which keyword is used to declare a module in TypeScript?",
        "question_hi": "TypeScript में module घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["namespace", "module", "package", "export"],
        "options_hi": ["namespace", "module", "package", "export"],
        "answer_en": "namespace",
        "answer_hi": "namespace",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which keyword allows a subclass to call a parent class method?",
        "question_hi": "TypeScript में subclass को parent class method call करने की अनुमति कौन सा कीवर्ड देता है?",
        "options_en": ["super", "this", "extends", "implements"],
        "options_hi": ["super", "this", "extends", "implements"],
        "answer_en": "super",
        "answer_hi": "super",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which TypeScript type represents a read-only array?",
        "question_hi": "TypeScript में read-only array का प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["readonly number[]", "number[]", "any[]", "tuple"],
        "options_hi": ["readonly number[]", "number[]", "any[]", "tuple"],
        "answer_en": "readonly number[]",
        "answer_hi": "readonly number[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which type allows combining multiple types into one?",
        "question_hi": "कौन सा टाइप multiple types को एक में combine करने की अनुमति देता है?",
        "options_en": ["Intersection type", "Union type", "Literal type", "Any type"],
        "options_hi": ["Intersection type", "Union type", "Literal type", "Any type"],
        "answer_en": "Intersection type",
        "answer_hi": "Intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which TypeScript type represents a string literal 'hello' only?",
        "question_hi": "TypeScript में कौन सा टाइप केवल string literal 'hello' का प्रतिनिधित्व करता है?",
        "options_en": ["'hello'", "string", "any", "unknown"],
        "options_hi": ["'hello'", "string", "any", "unknown"],
        "answer_en": "'hello'",
        "answer_hi": "'hello'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which keyword is used for static members in a TypeScript class?",
        "question_hi": "TypeScript class में static members के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["static", "readonly", "private", "const"],
        "options_hi": ["static", "readonly", "private", "const"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which type represents the intersection of multiple types in TypeScript?",
        "question_hi": "TypeScript में multiple types का intersection कौन सा टाइप दर्शाता है?",
        "options_en": ["Intersection type", "Union type", "Literal type", "Any type"],
        "options_hi": ["Intersection type", "Union type", "Literal type", "Any type"],
        "answer_en": "Intersection type",
        "answer_hi": "Intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which TypeScript feature allows automatic type checking during development?",
        "question_hi": "TypeScript में development के दौरान automatic type checking कौन सी सुविधा प्रदान करती है?",
        "options_en": ["Static typing", "Dynamic typing", "Any typing", "Weak typing"],
        "options_hi": ["Static typing", "Dynamic typing", "Any typing", "Weak typing"],
        "answer_en": "Static typing",
        "answer_hi": "Static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which TypeScript keyword defines a private property in a class?",
        "question_hi": "TypeScript में class में private property परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["private", "protected", "public", "readonly"],
        "options_hi": ["private", "protected", "public", "readonly"],
        "answer_en": "private",
        "answer_hi": "private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which keyword is used to declare a public property in a TypeScript class?",
        "question_hi": "TypeScript class में public property घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["public", "private", "protected", "readonly"],
        "options_hi": ["public", "private", "protected", "readonly"],
        "answer_en": "public",
        "answer_hi": "public",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which TypeScript feature ensures type safety for function arguments and return types?",
        "question_hi": "TypeScript में function arguments और return types के लिए type safety कौन सी सुविधा सुनिश्चित करती है?",
        "options_en": ["Static typing", "Dynamic typing", "Any typing", "Weak typing"],
        "options_hi": ["Static typing", "Dynamic typing", "Any typing", "Weak typing"],
        "answer_en": "Static typing",
        "answer_hi": "Static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which TypeScript keyword is used to declare a class property that cannot be modified?",
        "question_hi": "TypeScript में class property को modify नहीं करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["readonly", "const", "private", "public"],
        "options_hi": ["readonly", "const", "private", "public"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which keyword allows importing modules in TypeScript?",
        "question_hi": "TypeScript में modules import करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["import", "export", "require", "module"],
        "options_hi": ["import", "export", "require", "module"],
        "answer_en": "import",
        "answer_hi": "import",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which keyword allows exporting modules in TypeScript?",
        "question_hi": "TypeScript में modules export करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["export", "import", "require", "module"],
        "options_hi": ["export", "import", "require", "module"],
        "answer_en": "export",
        "answer_hi": "export",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which TypeScript type represents an array of mixed types?",
        "question_hi": "TypeScript में mixed types की array का प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["tuple", "any[]", "object[]", "number[]"],
        "options_hi": ["tuple", "any[]", "object[]", "number[]"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which TypeScript keyword allows defining optional function parameters?",
        "question_hi": "TypeScript में function parameters को optional बनाने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["?", "!", "*", "$"],
        "options_hi": ["?", "!", "*", "$"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which TypeScript type allows a variable to hold any object type?",
        "question_hi": "TypeScript में variable किसी भी object type का मान रख सकता है, उसे कौन सा टाइप कहा जाता है?",
        "options_en": ["object", "any", "unknown", "never"],
        "options_hi": ["object", "any", "unknown", "never"],
        "answer_en": "object",
        "answer_hi": "object",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which TypeScript type represents a fixed-size array with known types?",
        "question_hi": "TypeScript में fixed-size array जिसमें known types हों, उसे कौन सा टाइप कहते हैं?",
        "options_en": ["tuple", "array", "any[]", "object"],
        "options_hi": ["tuple", "array", "any[]", "object"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which TypeScript type allows a variable to have multiple types?",
        "question_hi": "TypeScript में variable को multiple types देने के लिए कौन सा टाइप उपयोग किया जाता है?",
        "options_en": ["union type", "intersection type", "literal type", "any type"],
        "options_hi": ["union type", "intersection type", "literal type", "any type"],
        "answer_en": "union type",
        "answer_hi": "union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which TypeScript type represents the combination of multiple types?",
        "question_hi": "TypeScript में multiple types के combination को कौन सा टाइप दर्शाता है?",
        "options_en": ["intersection type", "union type", "literal type", "any type"],
        "options_hi": ["intersection type", "union type", "literal type", "any type"],
        "answer_en": "intersection type",
        "answer_hi": "intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which TypeScript type represents a literal value like 'success'?",
        "question_hi": "TypeScript में literal value जैसे 'success' को कौन सा टाइप दर्शाता है?",
        "options_en": ["literal type", "union type", "intersection type", "any type"],
        "options_hi": ["literal type", "union type", "intersection type", "any type"],
        "answer_en": "literal type",
        "answer_hi": "literal type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which TypeScript type represents values that never occur in code?",
        "question_hi": "TypeScript में ऐसे values जो code में कभी नहीं आते, उनका प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which TypeScript feature enforces strict type checks for null and undefined?",
        "question_hi": "TypeScript में null और undefined के लिए strict type checks लागू करने वाली सुविधा कौन सी है?",
        "options_en": ["strictNullChecks", "any", "unknown", "void"],
        "options_hi": ["strictNullChecks", "any", "unknown", "void"],
        "answer_en": "strictNullChecks",
        "answer_hi": "strictNullChecks",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which TypeScript keyword allows accessing the parent class constructor?",
        "question_hi": "TypeScript में parent class constructor को access करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["super", "this", "extends", "implements"],
        "options_hi": ["super", "this", "extends", "implements"],
        "answer_en": "super",
        "answer_hi": "super",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which TypeScript type allows any value without compile-time checks?",
        "question_hi": "TypeScript में कोई भी value बिना compile-time checks के रखने वाला type कौन सा है?",
        "options_en": ["any", "unknown", "void", "never"],
        "options_hi": ["any", "unknown", "void", "never"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which TypeScript type is safer than 'any' but allows unknown values?",
        "question_hi": "TypeScript में 'any' से सुरक्षित और unknown values को अनुमति देने वाला type कौन सा है?",
        "options_en": ["unknown", "any", "void", "never"],
        "options_hi": ["unknown", "any", "void", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which keyword is used for type casting in TypeScript?",
        "question_hi": "TypeScript में type casting के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["as", "<Type>", "both", "none"],
        "options_hi": ["as", "<Type>", "दोनों", "कोई नहीं"],
        "answer_en": "both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which TypeScript type represents a function that returns no value?",
        "question_hi": "TypeScript में function जो कोई value return नहीं करता उसका type कौन सा है?",
        "options_en": ["void", "never", "any", "unknown"],
        "options_hi": ["void", "never", "any", "unknown"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    
    {
        "num": 71,
        "question_en": "Which TypeScript keyword allows defining a class that cannot be extended?",
        "question_hi": "TypeScript में ऐसी class परिभाषित करने के लिए कौन सा keyword उपयोग किया जाता है जिसे extend नहीं किया जा सकता?",
        "options_en": ["final", "abstract", "readonly", "const"],
        "options_hi": ["final", "abstract", "readonly", "const"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which TypeScript type allows representing optional properties in an object?",
        "question_hi": "TypeScript में object में optional properties का प्रतिनिधित्व कौन सा type करता है?",
        "options_en": ["?", "!", "*", "$"],
        "options_hi": ["?", "!", "*", "$"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which TypeScript feature allows type-safe iteration over object keys?",
        "question_hi": "TypeScript में object keys पर type-safe iteration करने की सुविधा कौन सी है?",
        "options_en": ["keyof", "typeof", "instanceof", "extends"],
        "options_hi": ["keyof", "typeof", "instanceof", "extends"],
        "answer_en": "keyof",
        "answer_hi": "keyof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which keyword is used to define a generic type in TypeScript?",
        "question_hi": "TypeScript में generic type परिभाषित करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["<T>", "type", "interface", "class"],
        "options_hi": ["<T>", "type", "interface", "class"],
        "answer_en": "<T>",
        "answer_hi": "<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which TypeScript keyword prevents a variable from being reassigned?",
        "question_hi": "TypeScript में variable को reassigned होने से रोकने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["const", "let", "readonly", "var"],
        "options_hi": ["const", "let", "readonly", "var"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which keyword allows a class to implement an interface?",
        "question_hi": "TypeScript में class को interface implement करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["implements", "extends", "super", "interface"],
        "options_hi": ["implements", "extends", "super", "interface"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which TypeScript type allows a function parameter to accept multiple types?",
        "question_hi": "TypeScript में function parameter multiple types स्वीकार करने के लिए कौन सा type उपयोग करता है?",
        "options_en": ["union type", "intersection type", "literal type", "any type"],
        "options_hi": ["union type", "intersection type", "literal type", "any type"],
        "answer_en": "union type",
        "answer_hi": "union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which TypeScript type allows combining multiple types into a single type?",
        "question_hi": "TypeScript में multiple types को single type में combine करने के लिए कौन सा type उपयोग किया जाता है?",
        "options_en": ["intersection type", "union type", "literal type", "any type"],
        "options_hi": ["intersection type", "union type", "literal type", "any type"],
        "answer_en": "intersection type",
        "answer_hi": "intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which TypeScript keyword is used to define a read-only property in an interface?",
        "question_hi": "TypeScript में interface में read-only property परिभाषित करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["readonly", "const", "private", "public"],
        "options_hi": ["readonly", "const", "private", "public"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which TypeScript type allows defining a variable that never returns a value?",
        "question_hi": "TypeScript में ऐसा variable परिभाषित करने के लिए कौन सा type उपयोग किया जाता है जो कभी value return नहीं करता?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which TypeScript keyword allows defining a constant for object properties?",
        "question_hi": "TypeScript में object properties के लिए constant परिभाषित करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["readonly", "const", "private", "public"],
        "options_hi": ["readonly", "const", "private", "public"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which keyword is used to import all exports from a module?",
        "question_hi": "TypeScript में module से सभी exports import करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["import * as", "export *", "require", "module"],
        "options_hi": ["import * as", "export *", "require", "module"],
        "answer_en": "import * as",
        "answer_hi": "import * as",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which TypeScript keyword defines a class that cannot be instantiated directly?",
        "question_hi": "TypeScript में ऐसी class परिभाषित करने के लिए कौन सा keyword उपयोग किया जाता है जिसे सीधे instantiate नहीं किया जा सकता?",
        "options_en": ["abstract", "interface", "final", "readonly"],
        "options_hi": ["abstract", "interface", "final", "readonly"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which TypeScript type represents a dynamic set of string keys?",
        "question_hi": "TypeScript में string keys के dynamic set का प्रतिनिधित्व कौन सा type करता है?",
        "options_en": ["Record<string, any>", "object", "any", "unknown"],
        "options_hi": ["Record<string, any>", "object", "any", "unknown"],
        "answer_en": "Record<string, any>",
        "answer_hi": "Record<string, any>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which TypeScript type allows you to safely access object properties that may not exist?",
        "question_hi": "TypeScript में ऐसे object properties को safely access करने के लिए कौन सा type उपयोग किया जाता है जो exist न करें?",
        "options_en": ["optional chaining", "union type", "intersection type", "any type"],
        "options_hi": ["optional chaining", "union type", "intersection type", "any type"],
        "answer_en": "optional chaining",
        "answer_hi": "optional chaining",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which TypeScript type allows defining multiple function overloads?",
        "question_hi": "TypeScript में multiple function overloads परिभाषित करने के लिए कौन सा type उपयोग किया जाता है?",
        "options_en": ["function overloads", "any", "unknown", "void"],
        "options_hi": ["function overloads", "any", "unknown", "void"],
        "answer_en": "function overloads",
        "answer_hi": "function overloads",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which TypeScript keyword ensures a property cannot be modified after initialization?",
        "question_hi": "TypeScript में initialization के बाद property modify न हो, इसे सुनिश्चित करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["readonly", "const", "private", "public"],
        "options_hi": ["readonly", "const", "private", "public"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which TypeScript type allows functions to have rest parameters?",
        "question_hi": "TypeScript में functions के rest parameters के लिए कौन सा type उपयोग किया जाता है?",
        "options_en": ["...args", "any[]", "tuple", "unknown"],
        "options_hi": ["...args", "any[]", "tuple", "unknown"],
        "answer_en": "...args",
        "answer_hi": "...args",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which TypeScript feature allows conditional types based on input types?",
        "question_hi": "TypeScript में input types के आधार पर conditional types कौन सी सुविधा प्रदान करती है?",
        "options_en": ["conditional types", "union types", "literal types", "intersection types"],
        "options_hi": ["conditional types", "union types", "literal types", "intersection types"],
        "answer_en": "conditional types",
        "answer_hi": "conditional types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which TypeScript type can be used to create mapped types?",
        "question_hi": "TypeScript में mapped types बनाने के लिए कौन सा type उपयोग किया जाता है?",
        "options_en": ["mapped types", "union types", "intersection types", "literal types"],
        "options_hi": ["mapped types", "union types", "intersection types", "literal types"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which TypeScript type ensures a variable cannot be reassigned but allows mutable object properties?",
        "question_hi": "TypeScript में ऐसा variable जिसे reassigned नहीं किया जा सकता पर object properties mutable हों, किस type से किया जाता है?",
        "options_en": ["const object", "readonly object", "any", "unknown"],
        "options_hi": ["const object", "readonly object", "any", "unknown"],
        "answer_en": "const object",
        "answer_hi": "const object",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which TypeScript type represents a function that may throw an error?",
        "question_hi": "TypeScript में function जो error throw कर सकता है, उसका type कौन सा है?",
        "options_en": ["throwable function", "function", "any", "unknown"],
        "options_hi": ["throwable function", "function", "any", "unknown"],
        "answer_en": "throwable function",
        "answer_hi": "throwable function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which TypeScript feature allows a type to exclude certain properties from another type?",
        "question_hi": "TypeScript में एक type को दूसरे type की कुछ properties exclude करने की सुविधा कौन सी देती है?",
        "options_en": ["Omit", "Pick", "Partial", "Required"],
        "options_hi": ["Omit", "Pick", "Partial", "Required"],
        "answer_en": "Omit",
        "answer_hi": "Omit",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which TypeScript feature allows selecting certain properties from a type?",
        "question_hi": "TypeScript में किसी type की कुछ properties select करने की सुविधा कौन सी देती है?",
        "options_en": ["Pick", "Omit", "Partial", "Required"],
        "options_hi": ["Pick", "Omit", "Partial", "Required"],
        "answer_en": "Pick",
        "answer_hi": "Pick",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which TypeScript feature allows making all properties of a type optional?",
        "question_hi": "TypeScript में किसी type की सभी properties को optional बनाने की सुविधा कौन सी देती है?",
        "options_en": ["Partial", "Required", "Omit", "Pick"],
        "options_hi": ["Partial", "Required", "Omit", "Pick"],
        "answer_en": "Partial",
        "answer_hi": "Partial",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which TypeScript feature ensures all properties of a type are required?",
        "question_hi": "TypeScript में किसी type की सभी properties required बनाने की सुविधा कौन सी देती है?",
        "options_en": ["Required", "Partial", "Omit", "Pick"],
        "options_hi": ["Required", "Partial", "Omit", "Pick"],
        "answer_en": "Required",
        "answer_hi": "Required",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which TypeScript type utility constructs type by removing null and undefined?",
        "question_hi": "TypeScript में null और undefined हटाकर नया type बनाने वाली utility कौन सी है?",
        "options_en": ["NonNullable", "Nullable", "Partial", "Required"],
        "options_hi": ["NonNullable", "Nullable", "Partial", "Required"],
        "answer_en": "NonNullable",
        "answer_hi": "NonNullable",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which TypeScript type utility allows extracting types from a union?",
        "question_hi": "TypeScript में union से types निकालने वाली utility कौन सी है?",
        "options_en": ["Extract", "Exclude", "Omit", "Pick"],
        "options_hi": ["Extract", "Exclude", "Omit", "Pick"],
        "answer_en": "Extract",
        "answer_hi": "Extract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which TypeScript type utility allows excluding types from a union?",
        "question_hi": "TypeScript में union से types exclude करने वाली utility कौन सी है?",
        "options_en": ["Exclude", "Extract", "Omit", "Pick"],
        "options_hi": ["Exclude", "Extract", "Omit", "Pick"],
        "answer_en": "Exclude",
        "answer_hi": "Exclude",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which TypeScript type utility helps infer the return type of a function?",
        "question_hi": "TypeScript में function के return type को infer करने में कौन सी utility मदद करती है?",
        "options_en": ["ReturnType", "Parameters", "InstanceType", "ThisType"],
        "options_hi": ["ReturnType", "Parameters", "InstanceType", "ThisType"],
        "answer_en": "ReturnType",
        "answer_hi": "ReturnType",
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