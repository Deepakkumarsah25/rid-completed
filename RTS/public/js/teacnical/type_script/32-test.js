const questions = [
    {
        "num": 1,
        "question_en": "Which TypeScript type is used to store a sequence of characters?",
        "question_hi": "TypeScript में character sequence store करने के लिए कौन सा type उपयोग किया जाता है?",
        "options_en": ["string", "number", "boolean", "any"],
        "options_hi": ["string", "number", "boolean", "any"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword is used to declare a variable that can be reassigned?",
        "question_hi": "ऐसा variable declare करने के लिए कौन सा keyword उपयोग किया जाता है जिसे फिर से assign किया जा सके?",
        "options_en": ["let", "const", "var", "readonly"],
        "options_hi": ["let", "const", "var", "readonly"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which TypeScript type is used for true/false values?",
        "question_hi": "true/false values के लिए TypeScript में कौन सा type उपयोग किया जाता है?",
        "options_en": ["boolean", "string", "number", "any"],
        "options_hi": ["boolean", "string", "number", "any"],
        "answer_en": "boolean",
        "answer_hi": "boolean",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which TypeScript type can store only integer or decimal numbers?",
        "question_hi": "केवल integer या decimal numbers store करने के लिए TypeScript में कौन सा type उपयोग किया जाता है?",
        "options_en": ["number", "string", "boolean", "any"],
        "options_hi": ["number", "string", "boolean", "any"],
        "answer_en": "number",
        "answer_hi": "number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which keyword is used to declare a constant variable?",
        "question_hi": "constant variable declare करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which TypeScript type can store multiple values in an ordered list?",
        "question_hi": "कई values को ordered list में store करने के लिए TypeScript में कौन सा type उपयोग किया जाता है?",
        "options_en": ["array", "tuple", "enum", "object"],
        "options_hi": ["array", "tuple", "enum", "object"],
        "answer_en": "array",
        "answer_hi": "array",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which TypeScript type allows storing multiple values of different types?",
        "question_hi": "विभिन्न types के multiple values store करने के लिए TypeScript में कौन सा type उपयोग किया जाता है?",
        "options_en": ["tuple", "array", "enum", "object"],
        "options_hi": ["tuple", "array", "enum", "object"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which TypeScript feature is used to define a reusable structure for objects?",
        "question_hi": "Objects के लिए reusable structure define करने के लिए TypeScript में कौन सा feature उपयोग किया जाता है?",
        "options_en": ["interface", "class", "enum", "type alias"],
        "options_hi": ["interface", "class", "enum", "type alias"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which TypeScript feature is used to create a blueprint for objects with implementation?",
        "question_hi": "Objects के लिए blueprint create करने के लिए implementation के साथ TypeScript में कौन सा feature उपयोग किया जाता है?",
        "options_en": ["class", "interface", "enum", "type alias"],
        "options_hi": ["class", "interface", "enum", "type alias"],
        "answer_en": "class",
        "answer_hi": "class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which TypeScript feature defines a fixed set of named constants?",
        "question_hi": "एक fixed set of named constants define करने के लिए TypeScript में कौन सा feature उपयोग किया जाता है?",
        "options_en": ["enum", "tuple", "array", "object"],
        "options_hi": ["enum", "tuple", "array", "object"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which TypeScript type allows representing no value?",
        "question_hi": "कोई value न होने का प्रतिनिधित्व करने के लिए TypeScript में कौन सा type उपयोग किया जाता है?",
        "options_en": ["void", "any", "unknown", "never"],
        "options_hi": ["void", "any", "unknown", "never"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which TypeScript type represents values that never occur?",
        "question_hi": "ऐसे values को represent करने के लिए TypeScript में कौन सा type उपयोग किया जाता है जो कभी occur नहीं होते?",
        "options_en": ["never", "any", "void", "unknown"],
        "options_hi": ["never", "any", "void", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which TypeScript keyword allows declaring a variable that cannot be reassigned?",
        "question_hi": "ऐसा variable declare करने के लिए कौन सा TypeScript keyword उपयोग किया जाता है जिसे reassigned नहीं किया जा सकता?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which TypeScript keyword is used for a block-scoped variable that can be reassigned?",
        "question_hi": "Block-scoped variable declare करने के लिए जो reassigned हो सकता है, कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["let", "const", "var", "readonly"],
        "options_hi": ["let", "const", "var", "readonly"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which TypeScript feature allows defining multiple types for a variable?",
        "question_hi": "एक variable के लिए multiple types define करने की सुविधा कौन देती है?",
        "options_en": ["union types", "tuple", "interface", "enum"],
        "options_hi": ["union types", "tuple", "interface", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which TypeScript type allows combining multiple types so all must be satisfied?",
        "question_hi": "कई types combine करने वाला type जिसमें सभी satisfy होने चाहिए, कौन सा है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which TypeScript keyword allows accessing the type of a variable?",
        "question_hi": "किस keyword से किसी variable का type access किया जा सकता है?",
        "options_en": ["typeof", "instanceof", "keyof", "in"],
        "options_hi": ["typeof", "instanceof", "keyof", "in"],
        "answer_en": "typeof",
        "answer_hi": "typeof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which TypeScript keyword checks if an object is an instance of a class?",
        "question_hi": "कौन सा keyword check करता है कि object किसी class का instance है?",
        "options_en": ["instanceof", "typeof", "keyof", "in"],
        "options_hi": ["instanceof", "typeof", "keyof", "in"],
        "answer_en": "instanceof",
        "answer_hi": "instanceof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which TypeScript feature allows defining a reusable generic type?",
        "question_hi": "Reusable generic type define करने की सुविधा कौन देती है?",
        "options_en": ["generics", "interfaces", "tuples", "enums"],
        "options_hi": ["generics", "interfaces", "tuples", "enums"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which TypeScript feature allows assigning default values to function parameters?",
        "question_hi": "Function parameters को default value assign करने की सुविधा कौन देती है?",
        "options_en": ["default parameters", "optional parameters", "rest parameters", "any"],
        "options_hi": ["default parameters", "optional parameters", "rest parameters", "any"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which TypeScript feature allows defining optional function parameters?",
        "question_hi": "Function parameters को optional बनाने की सुविधा कौन देती है?",
        "options_en": ["optional parameters", "default parameters", "rest parameters", "any"],
        "options_hi": ["optional parameters", "default parameters", "rest parameters", "any"],
        "answer_en": "optional parameters",
        "answer_hi": "optional parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which TypeScript feature allows a function to accept an arbitrary number of arguments?",
        "question_hi": "Function arbitrary number of arguments accept करने की सुविधा कौन देती है?",
        "options_en": ["rest parameters", "default parameters", "optional parameters", "any"],
        "options_hi": ["rest parameters", "default parameters", "optional parameters", "any"],
        "answer_en": "rest parameters",
        "answer_hi": "rest parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which TypeScript feature allows a type to be asserted without changing its runtime value?",
        "question_hi": "Runtime value को बदले बिना type assert करने की सुविधा कौन देती है?",
        "options_en": ["type assertion", "type checking", "type guard", "any"],
        "options_hi": ["type assertion", "type checking", "type guard", "any"],
        "answer_en": "type assertion",
        "answer_hi": "type assertion",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which TypeScript feature allows checking the type of a variable before use?",
        "question_hi": "Variable का type use से पहले check करने की सुविधा कौन देती है?",
        "options_en": ["type guard", "type assertion", "type checking", "any"],
        "options_hi": ["type guard", "type assertion", "type checking", "any"],
        "answer_en": "type guard",
        "answer_hi": "type guard",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which TypeScript feature allows defining an object with key-value pairs where keys are dynamic?",
        "question_hi": "ऐसा object define करने की सुविधा जो dynamic keys वाले key-value pairs रखे, कौन देती है?",
        "options_en": ["index signature", "tuple", "array", "enum"],
        "options_hi": ["index signature", "tuple", "array", "enum"],
        "answer_en": "index signature",
        "answer_hi": "index signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which TypeScript feature allows extending multiple interfaces in a single interface?",
        "question_hi": "एक interface में multiple interfaces extend करने की सुविधा कौन देती है?",
        "options_en": ["interface inheritance", "class inheritance", "type alias", "enum"],
        "options_hi": ["interface inheritance", "class inheritance", "type alias", "enum"],
        "answer_en": "interface inheritance",
        "answer_hi": "interface inheritance",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which TypeScript keyword defines a property accessible only within the class?",
        "question_hi": "कौन सा keyword property को केवल class के अंदर accessible बनाता है?",
        "options_en": ["private", "protected", "public", "readonly"],
        "options_hi": ["private", "protected", "public", "readonly"],
        "answer_en": "private",
        "answer_hi": "private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which TypeScript keyword defines a property accessible within the class and its subclasses?",
        "question_hi": "कौन सा keyword property को class और subclasses दोनों में accessible बनाता है?",
        "options_en": ["protected", "private", "public", "readonly"],
        "options_hi": ["protected", "private", "public", "readonly"],
        "answer_en": "protected",
        "answer_hi": "protected",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which TypeScript keyword defines a property accessible anywhere?",
        "question_hi": "कौन सा keyword property को कहीं भी accessible बनाता है?",
        "options_en": ["public", "private", "protected", "readonly"],
        "options_hi": ["public", "private", "protected", "readonly"],
        "answer_en": "public",
        "answer_hi": "public",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which TypeScript keyword defines a property that cannot be changed after initialization?",
        "question_hi": "कौन सा keyword property को initialization के बाद change होने से रोकता है?",
        "options_en": ["readonly", "const", "private", "public"],
        "options_hi": ["readonly", "const", "private", "public"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which TypeScript feature allows creating a class that cannot be instantiated directly?",
        "question_hi": "ऐसी class बनाने की सुविधा जो सीधे instantiate न हो सके, कौन देती है?",
        "options_en": ["abstract class", "interface", "enum", "type alias"],
        "options_hi": ["abstract class", "interface", "enum", "type alias"],
        "answer_en": "abstract class",
        "answer_hi": "abstract class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which TypeScript keyword allows a class to inherit another class?",
        "question_hi": "कौन सा keyword class को दूसरी class से inherit करने की अनुमति देता है?",
        "options_en": ["extends", "implements", "abstract", "interface"],
        "options_hi": ["extends", "implements", "abstract", "interface"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which TypeScript keyword allows a class to implement an interface?",
        "question_hi": "कौन सा keyword class को interface implement करने की अनुमति देता है?",
        "options_en": ["implements", "extends", "abstract", "interface"],
        "options_hi": ["implements", "extends", "abstract", "interface"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which TypeScript type represents any object type except null and undefined?",
        "question_hi": "कौन सा type किसी भी object type को represent करता है लेकिन null और undefined को नहीं?",
        "options_en": ["object", "any", "unknown", "never"],
        "options_hi": ["object", "any", "unknown", "never"],
        "answer_en": "object",
        "answer_hi": "object",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which TypeScript type allows storing values of any type with compile-time safety?",
        "question_hi": "ऐसा type जो किसी भी value को store करे लेकिन compile-time safety दे, कौन सा है?",
        "options_en": ["unknown", "any", "object", "never"],
        "options_hi": ["unknown", "any", "object", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which TypeScript feature allows creating a function type with defined parameters and return type?",
        "question_hi": "ऐसा function type बनाने की सुविधा जिसमें parameters और return type defined हों, कौन देती है?",
        "options_en": ["call signature", "type alias", "interface", "enum"],
        "options_hi": ["call signature", "type alias", "interface", "enum"],
        "answer_en": "call signature",
        "answer_hi": "call signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which TypeScript feature allows a variable to refer to multiple possible types?",
        "question_hi": "कौन सा feature variable को multiple possible types refer करने देता है?",
        "options_en": ["union type", "intersection type", "tuple", "any"],
        "options_hi": ["union type", "intersection type", "tuple", "any"],
        "answer_en": "union type",
        "answer_hi": "union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which TypeScript feature allows combining multiple types so all must be satisfied?",
        "question_hi": "कौन सा feature multiple types को combine करता है ताकि सभी satisfied हों?",
        "options_en": ["intersection type", "union type", "tuple", "any"],
        "options_hi": ["intersection type", "union type", "tuple", "any"],
        "answer_en": "intersection type",
        "answer_hi": "intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which TypeScript feature allows creating a read-only version of an object type?",
        "question_hi": "Object type का read-only version बनाने की सुविधा कौन देती है?",
        "options_en": ["readonly", "const", "private", "public"],
        "options_hi": ["readonly", "const", "private", "public"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which TypeScript keyword allows defining a type alias?",
        "question_hi": "Type alias define करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["type", "interface", "class", "enum"],
        "options_hi": ["type", "interface", "class", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which TypeScript feature allows combining types to create a new type?",
        "question_hi": "कौन सा feature types को combine करके नया type बनाता है?",
        "options_en": ["intersection type", "union type", "tuple", "any"],
        "options_hi": ["intersection type", "union type", "tuple", "any"],
        "answer_en": "intersection type",
        "answer_hi": "intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which TypeScript feature allows optional chaining to safely access nested object properties?",
        "question_hi": "Nested object properties को safely access करने के लिए कौन सा feature optional chaining देता है?",
        "options_en": ["optional chaining", "null coalescing", "type guard", "type assertion"],
        "options_hi": ["optional chaining", "null coalescing", "type guard", "type assertion"],
        "answer_en": "optional chaining",
        "answer_hi": "optional chaining",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which TypeScript feature allows providing a fallback value when a variable is null or undefined?",
        "question_hi": "Variable null या undefined होने पर fallback value provide करने की सुविधा कौन देती है?",
        "options_en": ["nullish coalescing operator", "optional chaining", "type assertion", "union type"],
        "options_hi": ["nullish coalescing operator", "optional chaining", "type assertion", "union type"],
        "answer_en": "nullish coalescing operator",
        "answer_hi": "nullish coalescing operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which TypeScript feature allows extracting keys from an object type as a union of string literals?",
        "question_hi": "Object type से keys extract करके string literals के union के रूप में प्राप्त करने की सुविधा कौन देती है?",
        "options_en": ["keyof operator", "typeof operator", "instanceof", "in operator"],
        "options_hi": ["keyof operator", "typeof operator", "instanceof", "in operator"],
        "answer_en": "keyof operator",
        "answer_hi": "keyof operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which TypeScript feature allows iterating over property names of an object type?",
        "question_hi": "Object type की property names पर iterate करने की सुविधा कौन देती है?",
        "options_en": ["in operator", "keyof operator", "typeof operator", "instanceof"],
        "options_hi": ["in operator", "keyof operator", "typeof operator", "instanceof"],
        "answer_en": "in operator",
        "answer_hi": "in operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which TypeScript utility type makes all properties of a type optional?",
        "question_hi": "कौन सा utility type type की सभी properties को optional बनाता है?",
        "options_en": ["Partial", "Required", "Readonly", "Pick"],
        "options_hi": ["Partial", "Required", "Readonly", "Pick"],
        "answer_en": "Partial",
        "answer_hi": "Partial",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which TypeScript utility type makes all properties of a type required?",
        "question_hi": "कौन सा utility type type की सभी properties को required बनाता है?",
        "options_en": ["Required", "Partial", "Readonly", "Pick"],
        "options_hi": ["Required", "Partial", "Readonly", "Pick"],
        "answer_en": "Required",
        "answer_hi": "Required",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which TypeScript utility type creates a type with all properties read-only?",
        "question_hi": "कौन सा utility type type की सभी properties को read-only बनाता है?",
        "options_en": ["Readonly", "Partial", "Required", "Pick"],
        "options_hi": ["Readonly", "Partial", "Required", "Pick"],
        "answer_en": "Readonly",
        "answer_hi": "Readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which TypeScript utility type constructs a type by picking a set of properties from another type?",
        "question_hi": "कौन सा utility type किसी अन्य type से properties का चयन करके नया type बनाता है?",
        "options_en": ["Pick", "Omit", "Partial", "Readonly"],
        "options_hi": ["Pick", "Omit", "Partial", "Readonly"],
        "answer_en": "Pick",
        "answer_hi": "Pick",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which TypeScript utility type constructs a type by omitting a set of properties from another type?",
        "question_hi": "कौन सा utility type किसी अन्य type से कुछ properties हटा कर नया type बनाता है?",
        "options_en": ["Omit", "Pick", "Partial", "Readonly"],
        "options_hi": ["Omit", "Pick", "Partial", "Readonly"],
        "answer_en": "Omit",
        "answer_hi": "Omit",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which TypeScript feature allows defining a generic function or class?",
        "question_hi": "Generic function या class define करने की सुविधा कौन देती है?",
        "options_en": ["generics", "interfaces", "tuples", "enums"],
        "options_hi": ["generics", "interfaces", "tuples", "enums"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which TypeScript feature allows a variable to be of any type without compile-time checks?",
        "question_hi": "कौन सा feature variable को किसी भी type का बनाने देता है बिना compile-time checks के?",
        "options_en": ["any", "unknown", "object", "never"],
        "options_hi": ["any", "unknown", "object", "never"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which TypeScript feature allows a variable to be type-safe but initially unknown?",
        "question_hi": "कौन सा feature variable को type-safe बनाता है लेकिन initial value unknown रहती है?",
        "options_en": ["unknown", "any", "object", "never"],
        "options_hi": ["unknown", "any", "object", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which TypeScript feature allows creating a function type with defined parameters and return type?",
        "question_hi": "ऐसा function type बनाने की सुविधा जिसमें parameters और return type defined हों, कौन देती है?",
        "options_en": ["call signature", "type alias", "interface", "enum"],
        "options_hi": ["call signature", "type alias", "interface", "enum"],
        "answer_en": "call signature",
        "answer_hi": "call signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which TypeScript feature allows destructuring arrays or objects into variables?",
        "question_hi": "Arrays या objects को variables में destructure करने की सुविधा कौन देती है?",
        "options_en": ["destructuring", "spread operator", "rest operator", "tuple"],
        "options_hi": ["destructuring", "spread operator", "rest operator", "tuple"],
        "answer_en": "destructuring",
        "answer_hi": "destructuring",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which TypeScript feature allows combining arrays or objects into a new one?",
        "question_hi": "Arrays या objects को combine करके नया array/object बनाने की सुविधा कौन देती है?",
        "options_en": ["spread operator", "destructuring", "rest operator", "tuple"],
        "options_hi": ["spread operator", "destructuring", "rest operator", "tuple"],
        "answer_en": "spread operator",
        "answer_hi": "spread operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which TypeScript feature allows passing remaining arguments as an array to a function?",
        "question_hi": "Function को remaining arguments array के रूप में pass करने की सुविधा कौन देती है?",
        "options_en": ["rest operator", "spread operator", "destructuring", "tuple"],
        "options_hi": ["rest operator", "spread operator", "destructuring", "tuple"],
        "answer_en": "rest operator",
        "answer_hi": "rest operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which TypeScript feature allows type-safe null checks with optional chaining?",
        "question_hi": "Type-safe null checks करने के लिए कौन सा feature optional chaining देता है?",
        "options_en": ["optional chaining", "nullish coalescing", "type assertion", "union type"],
        "options_hi": ["optional chaining", "nullish coalescing", "type assertion", "union type"],
        "answer_en": "optional chaining",
        "answer_hi": "optional chaining",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which TypeScript operator provides a default value if a variable is null or undefined?",
        "question_hi": "Variable null या undefined होने पर default value provide करने वाला operator कौन सा है?",
        "options_en": ["nullish coalescing operator", "optional chaining", "type assertion", "union type"],
        "options_hi": ["nullish coalescing operator", "optional chaining", "type assertion", "union type"],
        "answer_en": "nullish coalescing operator",
        "answer_hi": "nullish coalescing operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which TypeScript feature allows creating an array with elements of different types?",
        "question_hi": "कौन सा feature विभिन्न types के elements वाले array बनाने की अनुमति देता है?",
        "options_en": ["tuple", "array", "any", "object"],
        "options_hi": ["tuple", "array", "any", "object"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which TypeScript feature allows defining the type of a function's return value?",
        "question_hi": "कौन सा feature function के return value का type define करने की अनुमति देता है?",
        "options_en": ["function type", "any", "object", "tuple"],
        "options_hi": ["function type", "any", "object", "tuple"],
        "answer_en": "function type",
        "answer_hi": "function type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which TypeScript feature allows a variable to be one of several types?",
        "question_hi": "कौन सा feature variable को कई types में से एक बनने देता है?",
        "options_en": ["union type", "intersection type", "tuple", "any"],
        "options_hi": ["union type", "intersection type", "tuple", "any"],
        "answer_en": "union type",
        "answer_hi": "union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which TypeScript feature allows combining multiple types so all must be satisfied?",
        "question_hi": "कौन सा feature multiple types को combine करता है ताकि सभी satisfied हों?",
        "options_en": ["intersection type", "union type", "tuple", "any"],
        "options_hi": ["intersection type", "union type", "tuple", "any"],
        "answer_en": "intersection type",
        "answer_hi": "intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which TypeScript feature ensures a variable is never assigned a value?",
        "question_hi": "कौन सा feature सुनिश्चित करता है कि variable को कभी value assign न किया जाए?",
        "options_en": ["never", "any", "unknown", "void"],
        "options_hi": ["never", "any", "unknown", "void"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which TypeScript type represents no value?",
        "question_hi": "कौन सा type किसी value का प्रतिनिधित्व नहीं करता?",
        "options_en": ["void", "any", "never", "object"],
        "options_hi": ["void", "any", "never", "object"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which TypeScript keyword is used to define an enumeration?",
        "question_hi": "Enumeration define करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["enum", "const", "type", "interface"],
        "options_hi": ["enum", "const", "type", "interface"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which TypeScript feature allows defining constants that cannot be reassigned?",
        "question_hi": "ऐसे constants define करने की सुविधा जो reassigned न हो सकें, कौन देती है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which TypeScript keyword declares a variable with block scope?",
        "question_hi": "कौन सा keyword variable को block scope में declare करता है?",
        "options_en": ["let", "var", "const", "readonly"],
        "options_hi": ["let", "var", "const", "readonly"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which TypeScript feature allows checking the type of a variable at runtime?",
        "question_hi": "Runtime में variable का type check करने की सुविधा कौन देती है?",
        "options_en": ["typeof operator", "instanceof operator", "keyof operator", "in operator"],
        "options_hi": ["typeof operator", "instanceof operator", "keyof operator", "in operator"],
        "answer_en": "typeof operator",
        "answer_hi": "typeof operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which TypeScript feature allows checking if an object is an instance of a class?",
        "question_hi": "कौन सा feature जांचता है कि object किसी class का instance है या नहीं?",
        "options_en": ["instanceof operator", "typeof operator", "keyof operator", "in operator"],
        "options_hi": ["instanceof operator", "typeof operator", "keyof operator", "in operator"],
        "answer_en": "instanceof operator",
        "answer_hi": "instanceof operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which TypeScript feature allows defining a type for objects with unknown properties?",
        "question_hi": "कौन सा feature objects के unknown properties के लिए type define करने की अनुमति देता है?",
        "options_en": ["index signature", "tuple", "array", "enum"],
        "options_hi": ["index signature", "tuple", "array", "enum"],
        "answer_en": "index signature",
        "answer_hi": "index signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which TypeScript feature allows combining multiple interfaces in a single interface?",
        "question_hi": "कौन सा feature एक interface में multiple interfaces combine करने देता है?",
        "options_en": ["interface inheritance", "class inheritance", "type alias", "enum"],
        "options_hi": ["interface inheritance", "class inheritance", "type alias", "enum"],
        "answer_en": "interface inheritance",
        "answer_hi": "interface inheritance",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which TypeScript keyword defines a class that cannot be instantiated directly?",
        "question_hi": "कौन सा keyword class को directly instantiate होने से रोकता है?",
        "options_en": ["abstract", "interface", "extends", "implements"],
        "options_hi": ["abstract", "interface", "extends", "implements"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which TypeScript keyword is used to inherit a class?",
        "question_hi": "Class को inherit करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["extends", "implements", "abstract", "interface"],
        "options_hi": ["extends", "implements", "abstract", "interface"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which TypeScript keyword is used to implement an interface in a class?",
        "question_hi": "Class में interface implement करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["implements", "extends", "abstract", "interface"],
        "options_hi": ["implements", "extends", "abstract", "interface"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which TypeScript feature allows making a class property accessible only within the class?",
        "question_hi": "कौन सा feature class property को केवल class के अंदर accessible बनाता है?",
        "options_en": ["private", "protected", "public", "readonly"],
        "options_hi": ["private", "protected", "public", "readonly"],
        "answer_en": "private",
        "answer_hi": "private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which TypeScript feature allows a class property to be accessed within the class and subclasses?",
        "question_hi": "कौन सा feature class property को class और subclasses में accessible बनाता है?",
        "options_en": ["protected", "private", "public", "readonly"],
        "options_hi": ["protected", "private", "public", "readonly"],
        "answer_en": "protected",
        "answer_hi": "protected",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which TypeScript feature allows defining a property that cannot be modified after initialization?",
        "question_hi": "कौन सा feature property को initialization के बाद modify होने से रोकता है?",
        "options_en": ["readonly", "const", "private", "public"],
        "options_hi": ["readonly", "const", "private", "public"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which TypeScript keyword defines a type alias?",
        "question_hi": "Type alias define करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["type", "interface", "class", "enum"],
        "options_hi": ["type", "interface", "class", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which TypeScript feature allows checking types at compile time to prevent errors?",
        "question_hi": "Compile time पर errors prevent करने के लिए types check करने की सुविधा कौन देती है?",
        "options_en": ["static typing", "dynamic typing", "any", "unknown"],
        "options_hi": ["static typing", "dynamic typing", "any", "unknown"],
        "answer_en": "static typing",
        "answer_hi": "static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which TypeScript feature allows defining multiple possible types for a variable?",
        "question_hi": "कौन सा feature variable के लिए multiple possible types define करने देता है?",
        "options_en": ["union type", "intersection type", "tuple", "any"],
        "options_hi": ["union type", "intersection type", "tuple", "any"],
        "answer_en": "union type",
        "answer_hi": "union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which TypeScript feature combines multiple types and requires all conditions to be met?",
        "question_hi": "कौन सा feature multiple types combine करता है और सभी conditions satisfy होने चाहिए?",
        "options_en": ["intersection type", "union type", "tuple", "any"],
        "options_hi": ["intersection type", "union type", "tuple", "any"],
        "answer_en": "intersection type",
        "answer_hi": "intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which TypeScript type is used for functions that never return a value or throw an error?",
        "question_hi": "ऐसे functions के लिए कौन सा type उपयोग किया जाता है जो value return नहीं करते या error throw करते हैं?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which TypeScript type represents no value being returned?",
        "question_hi": "कौन सा type return न होने वाली value को represent करता है?",
        "options_en": ["void", "never", "any", "unknown"],
        "options_hi": ["void", "never", "any", "unknown"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which TypeScript feature allows creating immutable arrays?",
        "question_hi": "कौन सा feature immutable arrays बनाने की अनुमति देता है?",
        "options_en": ["ReadonlyArray", "tuple", "array", "any"],
        "options_hi": ["ReadonlyArray", "tuple", "array", "any"],
        "answer_en": "ReadonlyArray",
        "answer_hi": "ReadonlyArray",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which TypeScript feature allows creating read-only properties of an object?",
        "question_hi": "कौन सा feature object की properties को read-only बनाने की अनुमति देता है?",
        "options_en": ["Readonly", "Partial", "Pick", "Omit"],
        "options_hi": ["Readonly", "Partial", "Pick", "Omit"],
        "answer_en": "Readonly",
        "answer_hi": "Readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which TypeScript utility type makes all properties optional?",
        "question_hi": "कौन सा utility type सभी properties को optional बनाता है?",
        "options_en": ["Partial", "Required", "Readonly", "Pick"],
        "options_hi": ["Partial", "Required", "Readonly", "Pick"],
        "answer_en": "Partial",
        "answer_hi": "Partial",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which TypeScript utility type makes all properties required?",
        "question_hi": "कौन सा utility type सभी properties को required बनाता है?",
        "options_en": ["Required", "Partial", "Readonly", "Pick"],
        "options_hi": ["Required", "Partial", "Readonly", "Pick"],
        "answer_en": "Required",
        "answer_hi": "Required",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which TypeScript utility type creates a type by picking specific properties from another type?",
        "question_hi": "कौन सा utility type किसी अन्य type से specific properties pick करके नया type बनाता है?",
        "options_en": ["Pick", "Omit", "Partial", "Readonly"],
        "options_hi": ["Pick", "Omit", "Partial", "Readonly"],
        "answer_en": "Pick",
        "answer_hi": "Pick",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which TypeScript utility type creates a type by removing specific properties from another type?",
        "question_hi": "कौन सा utility type किसी अन्य type से specific properties remove करके नया type बनाता है?",
        "options_en": ["Omit", "Pick", "Partial", "Readonly"],
        "options_hi": ["Omit", "Pick", "Partial", "Readonly"],
        "answer_en": "Omit",
        "answer_hi": "Omit",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which TypeScript feature allows creating generic functions?",
        "question_hi": "कौन सा feature generic functions बनाने की अनुमति देता है?",
        "options_en": ["generics", "interfaces", "tuples", "enums"],
        "options_hi": ["generics", "interfaces", "tuples", "enums"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which TypeScript feature allows a variable to hold any type without compile-time errors?",
        "question_hi": "कौन सा feature variable को किसी भी type का value hold करने देता है बिना compile-time errors के?",
        "options_en": ["any", "unknown", "object", "never"],
        "options_hi": ["any", "unknown", "object", "never"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which TypeScript feature allows type-safe assignment for initially unknown values?",
        "question_hi": "कौन सा feature initially unknown values के लिए type-safe assignment अनुमति देता है?",
        "options_en": ["unknown", "any", "object", "never"],
        "options_hi": ["unknown", "any", "object", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which TypeScript feature allows creating object types with flexible property names?",
        "question_hi": "कौन सा feature flexible property names वाले object types बनाने देता है?",
        "options_en": ["index signature", "tuple", "array", "enum"],
        "options_hi": ["index signature", "tuple", "array", "enum"],
        "answer_en": "index signature",
        "answer_hi": "index signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which TypeScript feature allows extracting keys of a type as string literal union?",
        "question_hi": "कौन सा feature type के keys को string literal union के रूप में extract करने देता है?",
        "options_en": ["keyof operator", "typeof operator", "instanceof", "in operator"],
        "options_hi": ["keyof operator", "typeof operator", "instanceof", "in operator"],
        "answer_en": "keyof operator",
        "answer_hi": "keyof operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which TypeScript operator iterates over property names of an object?",
        "question_hi": "कौन सा operator object के property names पर iterate करने देता है?",
        "options_en": ["in operator", "keyof operator", "typeof operator", "instanceof"],
        "options_hi": ["in operator", "keyof operator", "typeof operator", "instanceof"],
        "answer_en": "in operator",
        "answer_hi": "in operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which TypeScript feature allows defining multiple types for function parameters?",
        "question_hi": "कौन सा feature function parameters के लिए multiple types define करने देता है?",
        "options_en": ["union type", "intersection type", "tuple", "any"],
        "options_hi": ["union type", "intersection type", "tuple", "any"],
        "answer_en": "union type",
        "answer_hi": "union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which TypeScript feature allows combining multiple types so all must be satisfied?",
        "question_hi": "कौन सा feature multiple types combine करता है ताकि सभी satisfied हों?",
        "options_en": ["intersection type", "union type", "tuple", "any"],
        "options_hi": ["intersection type", "union type", "tuple", "any"],
        "answer_en": "intersection type",
        "answer_hi": "intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which TypeScript feature helps prevent runtime errors by compile-time type checking?",
        "question_hi": "Compile-time type checking से runtime errors prevent करने में कौन मदद करता है?",
        "options_en": ["static typing", "dynamic typing", "any", "unknown"],
        "options_hi": ["static typing", "dynamic typing", "any", "unknown"],
        "answer_en": "static typing",
        "answer_hi": "static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which TypeScript keyword allows defining a class that cannot be instantiated directly?",
        "question_hi": "कौन सा keyword class को directly instantiate होने से रोकता है?",
        "options_en": ["abstract", "interface", "extends", "implements"],
        "options_hi": ["abstract", "interface", "extends", "implements"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
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