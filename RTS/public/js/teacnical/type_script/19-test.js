const questions =[
    {
    "num": 1,
    "question_en": "What feature allows a class to use an interface?",
    "question_hi": "कौन सा feature class को interface का उपयोग करने देता है?",
    "options_en": ["implements", "extends", "super", "readonly"],
    "options_hi": ["implements", "extends", "super", "readonly"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
},
{
    "num": 2,
    "question_en": "Which class member can be accessed without creating an object?",
    "question_hi": "कौन सा class member object बनाए बिना access किया जा सकता है?",
    "options_en": ["static", "private", "protected", "readonly"],
    "options_hi": ["static", "private", "protected", "readonly"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
},
{
    "num": 3,
    "question_en": "Which access modifier restricts access within the same class only?",
    "question_hi": "कौन सा access modifier केवल उसी class के अंदर access की अनुमति देता है?",
    "options_en": ["private", "protected", "public", "readonly"],
    "options_hi": ["private", "protected", "public", "readonly"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
},
{
    "num": 4,
    "question_en": "Which modifier allows class members to be accessible in subclasses but not outside?",
    "question_hi": "कौन सा modifier subclass में access की अनुमति देता है लेकिन बाहर नहीं?",
    "options_en": ["protected", "public", "private", "static"],
    "options_hi": ["protected", "public", "private", "static"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
},
{
    "num": 5,
    "question_en": "Which modifier allows access from anywhere?",
    "question_hi": "कौन सा modifier कहीं से भी access की अनुमति देता है?",
    "options_en": ["public", "private", "protected", "static"],
    "options_hi": ["public", "private", "protected", "static"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
},
{
    "num": 6,
    "question_en": "Which type restricts a variable to a set of predefined values?",
    "question_hi": "कौन सा type variable को predefined values तक सीमित करता है?",
    "options_en": ["enum", "tuple", "union", "literal"],
    "options_hi": ["enum", "tuple", "union", "literal"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
},
{
        "num": 7,
        "question_en": "Which TypeScript feature allows combining multiple types that must all be satisfied?",
        "question_hi": "कौन सा feature multiple types combine करता है और सभी conditions satisfy होना जरूरी है?",
        "options_en": ["intersection type", "union type", "tuple", "any"],
        "options_hi": ["intersection type", "union type", "tuple", "any"],
        "answer_en": "intersection type",
        "answer_hi": "intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which TypeScript keyword declares a variable that cannot be reassigned?",
        "question_hi": "कौन सा keyword variable को declare करता है जिसे reassigned नहीं किया जा सकता?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which TypeScript keyword declares a block-scoped variable?",
        "question_hi": "कौन सा keyword block-scoped variable declare करता है?",
        "options_en": ["let", "var", "const", "readonly"],
        "options_hi": ["let", "var", "const", "readonly"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which TypeScript keyword declares a class that cannot be instantiated directly?",
        "question_hi": "कौन सा keyword class को directly instantiate होने से रोकता है?",
        "options_en": ["abstract", "interface", "extends", "implements"],
        "options_hi": ["abstract", "interface", "extends", "implements"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which TypeScript keyword is used for class inheritance?",
        "question_hi": "Class inheritance के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["extends", "implements", "abstract", "interface"],
        "options_hi": ["extends", "implements", "abstract", "interface"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "Which TypeScript feature ensures a property can only be read but not modified?",
        "question_hi": "कौन सा feature property को सिर्फ read-only बनाता है, modify नहीं किया जा सकता?",
        "options_en": ["readonly", "private", "protected", "const"],
        "options_hi": ["readonly", "private", "protected", "const"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which TypeScript feature allows a class property to be accessed only inside the class?",
        "question_hi": "कौन सा feature class property को केवल class के अंदर accessible बनाता है?",
        "options_en": ["private", "protected", "public", "readonly"],
        "options_hi": ["private", "protected", "public", "readonly"],
        "answer_en": "private",
        "answer_hi": "private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which TypeScript feature allows a class property to be accessed in the class and subclasses?",
        "question_hi": "कौन सा feature class property को class और subclasses में access करने देता है?",
        "options_en": ["protected", "private", "public", "readonly"],
        "options_hi": ["protected", "private", "public", "readonly"],
        "answer_en": "protected",
        "answer_hi": "protected",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which TypeScript feature allows defining an object with unknown property names?",
        "question_hi": "कौन सा feature unknown property names वाले object को define करने देता है?",
        "options_en": ["index signature", "tuple", "array", "enum"],
        "options_hi": ["index signature", "tuple", "array", "enum"],
        "answer_en": "index signature",
        "answer_hi": "index signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which TypeScript operator checks the type of a variable at runtime?",
        "question_hi": "कौन सा operator runtime में variable का type check करता है?",
        "options_en": ["typeof", "instanceof", "keyof", "in"],
        "options_hi": ["typeof", "instanceof", "keyof", "in"],
        "answer_en": "typeof",
        "answer_hi": "typeof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which TypeScript operator checks if an object is an instance of a class?",
        "question_hi": "कौन सा operator जांचता है कि object किसी class का instance है या नहीं?",
        "options_en": ["instanceof", "typeof", "keyof", "in"],
        "options_hi": ["instanceof", "typeof", "keyof", "in"],
        "answer_en": "instanceof",
        "answer_hi": "instanceof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which TypeScript feature allows destructuring arrays or objects into variables?",
        "question_hi": "कौन सा feature arrays या objects को variables में destructure करने देता है?",
        "options_en": ["destructuring", "spread", "rest", "tuple"],
        "options_hi": ["destructuring", "spread", "rest", "tuple"],
        "answer_en": "destructuring",
        "answer_hi": "destructuring",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which TypeScript feature allows combining arrays or objects into a new one?",
        "question_hi": "कौन सा feature arrays या objects को combine करके नया array/object बनाता है?",
        "options_en": ["spread operator", "destructuring", "rest operator", "tuple"],
        "options_hi": ["spread operator", "destructuring", "rest operator", "tuple"],
        "answer_en": "spread operator",
        "answer_hi": "spread operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which TypeScript feature allows defining a tuple type?",
        "question_hi": "कौन सा feature tuple type define करने देता है?",
        "options_en": ["tuple", "array", "object", "any"],
        "options_hi": ["tuple", "array", "object", "any"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
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
        "num": 24,
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
        "num": 25,
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
        "num": 26,
        "question_en": "Which TypeScript keyword allows creating generic functions?",
        "question_hi": "कौन सा keyword generic functions बनाने की अनुमति देता है?",
        "options_en": ["generics", "interfaces", "tuples", "enums"],
        "options_hi": ["generics", "interfaces", "tuples", "enums"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which TypeScript keyword allows defining an enum?",
        "question_hi": "कौन सा keyword enum define करने के लिए उपयोग किया जाता है?",
        "options_en": ["enum", "const", "type", "interface"],
        "options_hi": ["enum", "const", "type", "interface"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which TypeScript feature allows defining an interface?",
        "question_hi": "कौन सा feature interface define करने देता है?",
        "options_en": ["interface", "class", "type", "enum"],
        "options_hi": ["interface", "class", "type", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which TypeScript feature allows defining the type of a function's return value?",
        "question_hi": "कौन सा feature function के return value का type define करने देता है?",
        "options_en": ["function type", "any", "object", "tuple"],
        "options_hi": ["function type", "any", "object", "tuple"],
        "answer_en": "function type",
        "answer_hi": "function type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
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
        "num": 31,
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
        "num": 32,
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
        "num": 33,
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
        "num": 34,
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
        "num": 35,
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
        "num": 36,
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
        "num": 37,
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
        "num": 38,
        "question_en": "Which TypeScript keyword is used to define a type alias?",
        "question_hi": "Type alias define करने के लिए कौन सा keyword उपयोग किया जाता है?",
        "options_en": ["type", "interface", "class", "enum"],
        "options_hi": ["type", "interface", "class", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
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
        "num": 40,
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
        "num": 41,
        "question_en": "Which TypeScript keyword allows creating a read-only array?",
        "question_hi": "कौन सा keyword read-only array बनाने की अनुमति देता है?",
        "options_en": ["ReadonlyArray", "Array", "Tuple", "const"],
        "options_hi": ["ReadonlyArray", "Array", "Tuple", "const"],
        "answer_en": "ReadonlyArray",
        "answer_hi": "ReadonlyArray",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which TypeScript feature allows optional chaining in objects?",
        "question_hi": "कौन सा feature objects में optional chaining की अनुमति देता है?",
        "options_en": ["?. operator", ". operator", "[] operator", "in operator"],
        "options_hi": ["?. operator", ". operator", "[] operator", "in operator"],
        "answer_en": "?. operator",
        "answer_hi": "?. operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which TypeScript feature allows setting default values for function parameters?",
        "question_hi": "कौन सा feature function parameters के लिए default values set करने देता है?",
        "options_en": ["default parameters", "optional parameters", "rest parameters", "any"],
        "options_hi": ["default parameters", "optional parameters", "rest parameters", "any"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which TypeScript feature allows capturing multiple parameters into a single array?",
        "question_hi": "कौन सा feature multiple parameters को single array में capture करने देता है?",
        "options_en": ["rest parameters", "default parameters", "optional parameters", "tuple"],
        "options_hi": ["rest parameters", "default parameters", "optional parameters", "tuple"],
        "answer_en": "rest parameters",
        "answer_hi": "rest parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which TypeScript feature allows creating a type from values of another type?",
        "question_hi": "कौन सा feature किसी अन्य type के values से नया type बनाता है?",
        "options_en": ["typeof operator", "keyof operator", "in operator", "instanceof operator"],
        "options_hi": ["typeof operator", "keyof operator", "in operator", "instanceof operator"],
        "answer_en": "typeof operator",
        "answer_hi": "typeof operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which TypeScript feature allows defining string literal types?",
        "question_hi": "कौन सा feature string literal types define करने देता है?",
        "options_en": ["string literal type", "any", "unknown", "enum"],
        "options_hi": ["string literal type", "any", "unknown", "enum"],
        "answer_en": "string literal type",
        "answer_hi": "string literal type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which TypeScript feature allows creating a type that represents the return type of a function?",
        "question_hi": "कौन सा feature function के return type का type बनाने देता है?",
        "options_en": ["ReturnType utility", "Parameters utility", "typeof operator", "keyof operator"],
        "options_hi": ["ReturnType utility", "Parameters utility", "typeof operator", "keyof operator"],
        "answer_en": "ReturnType utility",
        "answer_hi": "ReturnType utility",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which TypeScript feature allows creating a type that represents the parameters of a function?",
        "question_hi": "कौन सा feature function के parameters का type बनाने देता है?",
        "options_en": ["Parameters utility", "ReturnType utility", "typeof operator", "keyof operator"],
        "options_hi": ["Parameters utility", "ReturnType utility", "typeof operator", "keyof operator"],
        "answer_en": "Parameters utility",
        "answer_hi": "Parameters utility",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which TypeScript feature allows filtering out null and undefined types from a union type?",
        "question_hi": "कौन सा feature union type से null और undefined को remove करता है?",
        "options_en": ["NonNullable utility", "Partial utility", "Required utility", "Readonly utility"],
        "options_hi": ["NonNullable utility", "Partial utility", "Required utility", "Readonly utility"],
        "answer_en": "NonNullable utility",
        "answer_hi": "NonNullable utility",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which TypeScript feature allows extracting specific types from a union type?",
        "question_hi": "कौन सा feature union type से specific types extract करने देता है?",
        "options_en": ["Extract utility", "Exclude utility", "Pick utility", "Omit utility"],
        "options_hi": ["Extract utility", "Exclude utility", "Pick utility", "Omit utility"],
        "answer_en": "Extract utility",
        "answer_hi": "Extract utility",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which TypeScript feature allows removing specific types from a union type?",
        "question_hi": "कौन सा feature union type से specific types remove करने देता है?",
        "options_en": ["Exclude utility", "Extract utility", "Pick utility", "Omit utility"],
        "options_hi": ["Exclude utility", "Extract utility", "Pick utility", "Omit utility"],
        "answer_en": "Exclude utility",
        "answer_hi": "Exclude utility",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which TypeScript keyword allows creating conditional types?",
        "question_hi": "कौन सा keyword conditional types बनाने की अनुमति देता है?",
        "options_en": ["extends in type", "interface", "class", "enum"],
        "options_hi": ["extends in type", "interface", "class", "enum"],
        "answer_en": "extends in type",
        "answer_hi": "extends in type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which TypeScript feature allows mapping types over existing types?",
        "question_hi": "कौन सा feature existing types पर mapping करने देता है?",
        "options_en": ["Mapped types", "Union types", "Intersection types", "Tuple types"],
        "options_hi": ["Mapped types", "Union types", "Intersection types", "Tuple types"],
        "answer_en": "Mapped types",
        "answer_hi": "Mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which TypeScript feature allows defining types for JSON objects?",
        "question_hi": "कौन सा feature JSON objects के लिए types define करने देता है?",
        "options_en": ["interface", "tuple", "enum", "any"],
        "options_hi": ["interface", "tuple", "enum", "any"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which TypeScript feature allows aliasing a union of literal types?",
        "question_hi": "कौन सा feature literal types के union को alias करने देता है?",
        "options_en": ["type alias", "interface", "enum", "class"],
        "options_hi": ["type alias", "interface", "enum", "class"],
        "answer_en": "type alias",
        "answer_hi": "type alias",
        "attempted": false,
        "selected": ""
    },
    {
    "num": 56,
    "question_en": "Which keyword is used to create a constant in TypeScript?",
    "question_hi": "TypeScript में constant बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["const", "let", "var", "static"],
    "options_hi": ["const", "let", "var", "static"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
},
{
    "num": 57,
    "question_en": "Which type represents values that may or may not exist?",
    "question_hi": "कौन सा type उन values को दर्शाता है जो हो भी सकती हैं और नहीं भी?",
    "options_en": ["optional type", "tuple", "enum", "readonly"],
    "options_hi": ["optional type", "tuple", "enum", "readonly"],
    "answer_en": "optional type",
    "answer_hi": "optional type",
    "attempted": false,
    "selected": ""
},
{
    "num": 58,
    "question_en": "Which operator is used for non-null assertion?",
    "question_hi": "Non-null assertion के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["!", "??", "?.", ":"],
    "options_hi": ["!", "??", "?.", ":"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
},
{
    "num": 59,
    "question_en": "Which TypeScript type allows storing any value?",
    "question_hi": "कौन सा TypeScript type किसी भी value को store कर सकता है?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
},
{
    "num": 60,
    "question_en": "The 'never' type represents:",
    "question_hi": "'never' type क्या दर्शाता है?",
    "options_en": ["No value", "Unknown value", "Any value", "Optional value"],
    "options_hi": ["कोई value नहीं", "अज्ञात value", "कोई भी value", "optional value"],
    "answer_en": "No value",
    "answer_hi": "कोई value नहीं",
    "attempted": false,
    "selected": ""
},
{
    "num": 61,
    "question_en": "Which TypeScript feature allows combining object types?",
    "question_hi": "कौन सा feature object types को combine करने देता है?",
    "options_en": ["intersection types", "union types", "tuple", "enum"],
    "options_hi": ["intersection types", "union types", "tuple", "enum"],
    "answer_en": "intersection types",
    "answer_hi": "intersection types",
    "attempted": false,
    "selected": ""
},
{
    "num": 62,
    "question_en": "Which utility type makes all properties in an object optional?",
    "question_hi": "कौन सा utility type object की सभी properties को optional बना देता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
},
{
    "num": 63,
    "question_en": "Which TypeScript utility makes all properties required?",
    "question_hi": "कौन सा utility सभी properties को required बना देता है?",
    "options_en": ["Required", "Partial", "Pick", "Record"],
    "options_hi": ["Required", "Partial", "Pick", "Record"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
},
{
    "num": 64,
    "question_en": "Which TypeScript utility creates a new type by selecting specific properties?",
    "question_hi": "कौन सा utility type कुछ properties को चुनकर नया type बनाता है?",
    "options_en": ["Pick", "Omit", "Partial", "Exclude"],
    "options_hi": ["Pick", "Omit", "Partial", "Exclude"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
},
{
    "num": 65,
    "question_en": "Which utility removes selected keys from a type?",
    "question_hi": "कौन सा utility type से चुनी गई keys को हटा देता है?",
    "options_en": ["Omit", "Pick", "Partial", "Exclude"],
    "options_hi": ["Omit", "Pick", "Partial", "Exclude"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
},
{
    "num": 66,
    "question_en": "Which utility creates a type with all properties immutable?",
    "question_hi": "कौन सा utility सभी properties को immutable बना देता है?",
    "options_en": ["Readonly", "Record", "Required", "Partial"],
    "options_hi": ["Readonly", "Record", "Required", "Partial"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
},
{
    "num": 67,
    "question_en": "Which TypeScript type is used for functions returning nothing?",
    "question_hi": "कौन सा TypeScript type उन functions के लिए होता है जो कुछ return नहीं करते?",
    "options_en": ["void", "never", "undefined", "null"],
    "options_hi": ["void", "never", "undefined", "null"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
},
{
    "num": 68,
    "question_en": "Which operator provides a default value when null or undefined is found?",
    "question_hi": "कौन सा operator null या undefined होने पर default value देता है?",
    "options_en": ["??", "||", "&&", "?:",],
    "options_hi": ["??", "||", "&&", "?:",],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
},
{
    "num": 69,
    "question_en": "Which feature helps prevent undefined errors while accessing nested properties?",
    "question_hi": "कौन सा feature nested properties access करते समय undefined errors रोकता है?",
    "options_en": ["optional chaining", "null assertion", "union types", "tuple"],
    "options_hi": ["optional chaining", "null assertion", "union types", "tuple"],
    "answer_en": "optional chaining",
    "answer_hi": "optional chaining",
    "attempted": false,
    "selected": ""
},
{
    "num": 70,
    "question_en": "Which feature allows declaring variables with unknown type safely?",
    "question_hi": "कौन सा feature unknown type के variables को सुरक्षित रूप से handle करने देता है?",
    "options_en": ["unknown", "any", "never", "void"],
    "options_hi": ["unknown", "any", "never", "void"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
},
{
    "num": 71,
    "question_en": "Which operator checks if a property exists in an object?",
    "question_hi": "कौन सा operator object में property के मौजूद होने की जाँच करता है?",
    "options_en": ["in", "typeof", "instanceof", "keyof"],
    "options_hi": ["in", "typeof", "instanceof", "keyof"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
},
{
    "num": 72,
    "question_en": "Which feature allows getting keys of a type as a union?",
    "question_hi": "कौन सा feature type के keys को union के रूप में देता है?",
    "options_en": ["keyof", "typeof", "instanceof", "in"],
    "options_hi": ["keyof", "typeof", "instanceof", "in"],
    "answer_en": "keyof",
    "answer_hi": "keyof",
    "attempted": false,
    "selected": ""
},
{
    "num": 73,
    "question_en": "Which TypeScript type is used for representing lists of mixed types?",
    "question_hi": "कौन सा TypeScript type mixed types वाली list को दर्शाता है?",
    "options_en": ["tuple", "enum", "array", "union"],
    "options_hi": ["tuple", "enum", "array", "union"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
},
{
    "num": 74,
    "question_en": "Which feature allows extracting function parameter types?",
    "question_hi": "कौन सा feature function के parameter types निकालने देता है?",
    "options_en": ["Parameters utility", "ReturnType utility", "Pick", "Omit"],
    "options_hi": ["Parameters utility", "ReturnType utility", "Pick", "Omit"],
    "answer_en": "Parameters utility",
    "answer_hi": "Parameters utility",
    "attempted": false,
    "selected": ""
},
{
    "num": 75,
    "question_en": "Which TypeScript utility extracts the return type of a function?",
    "question_hi": "कौन सा TypeScript utility function के return type को extract करता है?",
    "options_en": ["ReturnType", "Parameters", "Pick", "Omit"],
    "options_hi": ["ReturnType", "Parameters", "Pick", "Omit"],
    "answer_en": "ReturnType",
    "answer_hi": "ReturnType",
    "attempted": false,
    "selected": ""
},
{
    "num": 76,
    "question_en": "Which TypeScript feature ensures a variable will never be reassigned?",
    "question_hi": "कौन सा feature variable को दुबारा assign होने से रोकता है?",
    "options_en": ["const", "let", "readonly", "static"],
    "options_hi": ["const", "let", "readonly", "static"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
},
{
    "num": 77,
    "question_en": "Which feature ensures object properties cannot be modified?",
    "question_hi": "कौन सा feature object की properties को modify होने से रोकता है?",
    "options_en": ["readonly", "static", "sealed", "optional"],
    "options_hi": ["readonly", "static", "sealed", "optional"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
},
{
    "num": 78,
    "question_en": "Which type represents a value that must never occur?",
    "question_hi": "कौन सा type उस value को दर्शाता है जो कभी नहीं होनी चाहिए?",
    "options_en": ["never", "void", "unknown", "any"],
    "options_hi": ["never", "void", "unknown", "any"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
},
{
    "num": 79,
    "question_en": "Which keyword provides class inheritance in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में class inheritance प्रदान करता है?",
    "options_en": ["extends", "implements", "class", "super"],
    "options_hi": ["extends", "implements", "class", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
},
{
    "num": 80,
    "question_en": "Which keyword is used inside a subclass to call the parent class?",
    "question_hi": "Subclass के अंदर parent class को call करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["super", "parent", "base", "extends"],
    "options_hi": ["super", "parent", "base", "extends"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
},
 {
        "num": 81,
        "question_en": "What is TypeScript primarily used for?",
        "question_hi": "TypeScript मुख्य रूप से किसके लिए उपयोग किया जाता है?",
        "options_en": ["Adding static types to JavaScript", "Running JavaScript faster", "Replacing HTML", "Managing databases"],
        "options_hi": ["JavaScript में static types जोड़ना", "JavaScript को तेज़ चलाना", "HTML को बदलना", "Databases manage करना"],
        "answer_en": "Adding static types to JavaScript",
        "answer_hi": "JavaScript में static types जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which TypeScript type is used to represent any value without type checking?",
        "question_hi": "कौन सा TypeScript type किसी भी value का प्रतिनिधित्व करता है बिना type checking के?",
        "options_en": ["any", "unknown", "void", "never"],
        "options_hi": ["any", "unknown", "void", "never"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which TypeScript type represents a variable whose type is unknown but type-safe?",
        "question_hi": "कौन सा type variable के लिए होता है जिसका type unknown लेकिन type-safe है?",
        "options_en": ["unknown", "any", "object", "never"],
        "options_hi": ["unknown", "any", "object", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which TypeScript type represents a function that never returns?",
        "question_hi": "कौन सा type function के लिए होता है जो कभी return नहीं करता?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which TypeScript type represents no return value?",
        "question_hi": "कौन सा type return न होने वाली value को दर्शाता है?",
        "options_en": ["void", "never", "any", "unknown"],
        "options_hi": ["void", "never", "any", "unknown"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
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
    "num": 87,
    "question_en": "Which keyword is used to define generics?",
    "question_hi": "Generics को define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["<T>", "<G>", "generic", "template"],
    "options_hi": ["<T>", "<G>", "generic", "template"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
},
{
    "num": 88,
    "question_en": "Which feature allows using different types with the same function?",
    "question_hi": "कौन सा feature एक ही function के साथ विभिन्न types उपयोग करने देता है?",
    "options_en": ["Generics", "Union", "Tuple", "Readonly"],
    "options_hi": ["Generics", "Union", "Tuple", "Readonly"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
},
{
    "num": 89,
    "question_en": "Which operator checks the runtime type of a value?",
    "question_hi": "कौन सा operator runtime पर value का type चेक करता है?",
    "options_en": ["typeof", "instanceof", "keyof", "in"],
    "options_hi": ["typeof", "instanceof", "keyof", "in"],
    "answer_en": "typeof",
    "answer_hi": "typeof",
    "attempted": false,
    "selected": ""
},
{
    "num": 90,
    "question_en": "Which operator checks if an object belongs to a particular class?",
    "question_hi": "कौन सा operator चेक करता है कि object किसी विशेष class का है या नहीं?",
    "options_en": ["instanceof", "typeof", "keyof", "in"],
    "options_hi": ["instanceof", "typeof", "keyof", "in"],
    "answer_en": "instanceof",
    "answer_hi": "instanceof",
    "attempted": false,
    "selected": ""
},
{
    "num": 91,
    "question_en": "Which feature converts all properties of a type to another type?",
    "question_hi": "कौन सा feature किसी type की सभी properties को दूसरे type में बदलता है?",
    "options_en": ["Mapped Types", "Union Types", "Tuple Types", "Enum"],
    "options_hi": ["Mapped Types", "Union Types", "Tuple Types", "Enum"],
    "answer_en": "Mapped Types",
    "answer_hi": "Mapped Types",
    "attempted": false,
    "selected": ""
},
{
    "num": 92,
    "question_en": "Which TypeScript type is used for asynchronous function results?",
    "question_hi": "Asynchronous function के result के लिए कौन सा TypeScript type होता है?",
    "options_en": ["Promise", "Tuple", "Enum", "Record"],
    "options_hi": ["Promise", "Tuple", "Enum", "Record"],
    "answer_en": "Promise",
    "answer_hi": "Promise",
    "attempted": false,
    "selected": ""
},
{
    "num": 93,
    "question_en": "Which method handles errors in Promises?",
    "question_hi": "Promises में errors को कौन handle करता है?",
    "options_en": ["catch()", "finally()", "resolve()", "reject()"],
    "options_hi": ["catch()", "finally()", "resolve()", "reject()"],
    "answer_en": "catch()",
    "answer_hi": "catch()",
    "attempted": false,
    "selected": ""
},
{
    "num": 94,
    "question_en": "Which function runs after a Promise completes regardless of success or failure?",
    "question_hi": "कौन सा function Promise complete होने के बाद हमेशा चलता है?",
    "options_en": ["finally()", "then()", "catch()", "await"],
    "options_hi": ["finally()", "then()", "catch()", "await"],
    "answer_en": "finally()",
    "answer_hi": "finally()",
    "attempted": false,
    "selected": ""
},
{
    "num": 95,
    "question_en": "Which keyword pauses execution until a Promise resolves?",
    "question_hi": "कौन सा keyword execution को तब तक रोकता है जब तक Promise resolve न हो?",
    "options_en": ["await", "async", "then", "yield"],
    "options_hi": ["await", "async", "then", "yield"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
},
{
    "num": 96,
    "question_en": "Which keyword marks a function as asynchronous?",
    "question_hi": "कौन सा keyword function को asynchronous बताता है?",
    "options_en": ["async", "await", "promise", "setTimeout"],
    "options_hi": ["async", "await", "promise", "setTimeout"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
},
{
    "num": 97,
    "question_en": "Which feature converts a union type into an intersection type?",
    "question_hi": "कौन सा feature union type को intersection में बदलता है?",
    "options_en": ["never", "unknown", "type inference", "generics"],
    "options_hi": ["never", "unknown", "type inference", "generics"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
},
{
    "num": 98,
    "question_en": "Which feature helps catch type errors before running the program?",
    "question_hi": "कौन सा feature program चलने से पहले type errors पकड़ने में मदद करता है?",
    "options_en": ["static typing", "dynamic typing", "runtime checks", "optional chaining"],
    "options_hi": ["static typing", "dynamic typing", "runtime checks", "optional chaining"],
    "answer_en": "static typing",
    "answer_hi": "static typing",
    "attempted": false,
    "selected": ""
},
{
    "num": 99,
    "question_en": "Which TypeScript feature ensures safer type checking than 'any'?",
    "question_hi": "'any' की तुलना में कौन सा feature safer type checking देता है?",
    "options_en": ["unknown", "never", "enum", "tuple"],
    "options_hi": ["unknown", "never", "enum", "tuple"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
},
{
    "num": 100,
    "question_en": "Which keyword prevents a class from being instantiated directly?",
    "question_hi": "कौन सा keyword class को सीधे instantiate होने से रोकता है?",
    "options_en": ["abstract", "private", "static", "protected"],
    "options_hi": ["abstract", "private", "static", "protected"],
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