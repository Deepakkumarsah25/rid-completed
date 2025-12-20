const questions = [
    {
        "num": 1,
        "question_en": "Which TypeScript type represents no value returned from a function?",
        "question_hi": "TypeScript में function से कोई value return न होने पर कौन सा type उपयोग होता है?",
        "options_en": ["void", "never", "any", "unknown"],
        "options_hi": ["void", "never", "any", "unknown"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which type is used in TypeScript when a variable can hold any value?",
        "question_hi": "TypeScript में किस type का उपयोग उस variable के लिए होता है जो किसी भी value रख सकता है?",
        "options_en": ["any", "string", "number", "boolean"],
        "options_hi": ["any", "string", "number", "boolean"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you declare a variable in TypeScript?",
        "question_hi": "TypeScript में variable कैसे declare करते हैं?",
        "options_en": ["let x: number;", "x = number;", "var number x;", "num x;"],
        "options_hi": ["let x: number;", "x = number;", "var number x;", "num x;"],
        "answer_en": "let x: number;",
        "answer_hi": "let x: number;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which TypeScript keyword defines a constant?",
        "question_hi": "TypeScript में constant define करने के लिए कौन सा keyword है?",
        "options_en": ["const", "let", "var", "static"],
        "options_hi": ["const", "let", "var", "static"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which type is used for true/false values in TypeScript?",
        "question_hi": "TypeScript में true/false values के लिए कौन सा type उपयोग किया जाता है?",
        "options_en": ["boolean", "string", "number", "any"],
        "options_hi": ["boolean", "string", "number", "any"],
        "answer_en": "boolean",
        "answer_hi": "boolean",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which type is used for whole numbers in TypeScript?",
        "question_hi": "TypeScript में whole numbers के लिए कौन सा type उपयोग किया जाता है?",
        "options_en": ["number", "string", "boolean", "any"],
        "options_hi": ["number", "string", "boolean", "any"],
        "answer_en": "number",
        "answer_hi": "number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which type is used for text values in TypeScript?",
        "question_hi": "TypeScript में text values के लिए कौन सा type उपयोग किया जाता है?",
        "options_en": ["string", "number", "boolean", "any"],
        "options_hi": ["string", "number", "boolean", "any"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which TypeScript feature allows defining multiple types for a variable?",
        "question_hi": "TypeScript में variable के लिए multiple types define करने की सुविधा कौन देती है?",
        "options_en": ["union types", "tuple", "interface", "enum"],
        "options_hi": ["union types", "tuple", "interface", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which TypeScript type allows storing multiple values of different types in an array?",
        "question_hi": "TypeScript में विभिन्न types की values को array में store करने के लिए कौन सा type उपयोग किया जाता है?",
        "options_en": ["tuple", "array", "object", "any"],
        "options_hi": ["tuple", "array", "object", "any"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which keyword is used to define a TypeScript class?",
        "question_hi": "TypeScript में class define करने के लिए कौन सा keyword है?",
        "options_en": ["class", "function", "interface", "object"],
        "options_hi": ["class", "function", "interface", "object"],
        "answer_en": "class",
        "answer_hi": "class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which TypeScript keyword defines a function?",
        "question_hi": "TypeScript में function define करने के लिए कौन सा keyword है?",
        "options_en": ["function", "func", "method", "def"],
        "options_hi": ["function", "func", "method", "def"],
        "answer_en": "function",
        "answer_hi": "function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which keyword is used to extend a class in TypeScript?",
        "question_hi": "TypeScript में class को extend करने के लिए कौन सा keyword उपयोग होता है?",
        "options_en": ["extends", "implements", "super", "inherit"],
        "options_hi": ["extends", "implements", "super", "inherit"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which keyword is used to implement an interface in a class?",
        "question_hi": "TypeScript में class में interface implement करने के लिए कौन सा keyword है?",
        "options_en": ["implements", "extends", "super", "interface"],
        "options_hi": ["implements", "extends", "super", "interface"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which TypeScript type allows defining a variable that never occurs?",
        "question_hi": "TypeScript में ऐसा variable declare करने के लिए कौन सा type उपयोग होता है जो कभी occur न करे?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which TypeScript type allows safe assignment of unknown type?",
        "question_hi": "TypeScript में unknown type को safe assign करने के लिए कौन सा type उपयोग होता है?",
        "options_en": ["unknown", "any", "never", "void"],
        "options_hi": ["unknown", "any", "never", "void"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which TypeScript keyword allows importing modules?",
        "question_hi": "TypeScript में modules import करने के लिए कौन सा keyword है?",
        "options_en": ["import", "export", "require", "module"],
        "options_hi": ["import", "export", "require", "module"],
        "answer_en": "import",
        "answer_hi": "import",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which TypeScript keyword allows exporting modules?",
        "question_hi": "TypeScript में modules export करने के लिए कौन सा keyword है?",
        "options_en": ["export", "import", "require", "module"],
        "options_hi": ["export", "import", "require", "module"],
        "answer_en": "export",
        "answer_hi": "export",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which TypeScript keyword allows optional properties in an interface?",
        "question_hi": "TypeScript में interface में optional properties define करने के लिए कौन सा keyword है?",
        "options_en": ["?", "optional", "readonly", "*"],
        "options_hi": ["?", "optional", "readonly", "*"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which TypeScript feature allows readonly properties?",
        "question_hi": "TypeScript में readonly properties define करने की सुविधा कौन सी देती है?",
        "options_en": ["readonly", "const", "final", "immutable"],
        "options_hi": ["readonly", "const", "final", "immutable"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which TypeScript keyword allows creating type aliases?",
        "question_hi": "TypeScript में type aliases बनाने के लिए कौन सा keyword है?",
        "options_en": ["type", "interface", "class", "enum"],
        "options_hi": ["type", "interface", "class", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which TypeScript keyword allows defining a numeric enumeration?",
        "question_hi": "TypeScript में numeric enumeration define करने के लिए कौन सा keyword है?",
        "options_en": ["enum", "type", "interface", "class"],
        "options_hi": ["enum", "type", "interface", "class"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which TypeScript feature allows optional function parameters?",
        "question_hi": "TypeScript में optional function parameters define करने की सुविधा कौन सी देती है?",
        "options_en": ["?", "optional", "readonly", "*"],
        "options_hi": ["?", "optional", "readonly", "*"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which TypeScript feature allows default values for function parameters?",
        "question_hi": "TypeScript में function parameters के लिए default values define करने की सुविधा कौन सी देती है?",
        "options_en": ["default parameters", "optional parameters", "readonly", "const"],
        "options_hi": ["default parameters", "optional parameters", "readonly", "const"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which TypeScript feature allows accessing nested object properties safely?",
        "question_hi": "TypeScript में nested object properties को safely access करने की सुविधा कौन सी देती है?",
        "options_en": ["optional chaining", "nullish coalescing", "union types", "intersection types"],
        "options_hi": ["optional chaining", "nullish coalescing", "union types", "intersection types"],
        "answer_en": "optional chaining",
        "answer_hi": "optional chaining",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which TypeScript feature allows using ?? to provide a default value for null/undefined?",
        "question_hi": "TypeScript में ?? का उपयोग करके null/undefined के लिए default value provide करने की सुविधा कौन सी देती है?",
        "options_en": ["nullish coalescing", "optional chaining", "union types", "tuple"],
        "options_hi": ["nullish coalescing", "optional chaining", "union types", "tuple"],
        "answer_en": "nullish coalescing",
        "answer_hi": "nullish coalescing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which TypeScript feature allows defining arrays with multiple types?",
        "question_hi": "TypeScript में multiple types वाले arrays define करने की सुविधा कौन देती है?",
        "options_en": ["tuple", "array", "object", "any"],
        "options_hi": ["tuple", "array", "object", "any"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which TypeScript feature allows defining read-only arrays?",
        "question_hi": "TypeScript में read-only arrays define करने की सुविधा कौन देती है?",
        "options_en": ["readonly", "const", "immutable", "final"],
        "options_hi": ["readonly", "const", "immutable", "final"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which keyword is used to define an interface in TypeScript?",
        "question_hi": "TypeScript में interface define करने के लिए कौन सा keyword है?",
        "options_en": ["interface", "type", "class", "enum"],
        "options_hi": ["interface", "type", "class", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which TypeScript feature allows defining function types?",
        "question_hi": "TypeScript में function types define करने की सुविधा कौन देती है?",
        "options_en": ["type aliases", "interface", "class", "enum"],
        "options_hi": ["type aliases", "interface", "class", "enum"],
        "answer_en": "type aliases",
        "answer_hi": "type aliases",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which TypeScript keyword allows defining optional generic types?",
        "question_hi": "TypeScript में optional generic types define करने के लिए कौन सा keyword है?",
        "options_en": ["extends", "implements", "super", "default"],
        "options_hi": ["extends", "implements", "super", "default"],
        "answer_en": "default",
        "answer_hi": "default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which TypeScript feature allows defining a variable whose type can vary?",
        "question_hi": "TypeScript में ऐसा variable define करने की सुविधा जो type में बदल सकता है, कौन देती है?",
        "options_en": ["union types", "tuple", "interface", "enum"],
        "options_hi": ["union types", "tuple", "interface", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which TypeScript feature ensures a variable has only one type?",
        "question_hi": "TypeScript में variable के लिए केवल एक type सुनिश्चित करने की सुविधा कौन देती है?",
        "options_en": ["static typing", "dynamic typing", "any", "unknown"],
        "options_hi": ["static typing", "dynamic typing", "any", "unknown"],
        "answer_en": "static typing",
        "answer_hi": "static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which keyword is used to define a class property that cannot be changed?",
        "question_hi": "TypeScript में class property को बदलने से रोकने के लिए कौन सा keyword है?",
        "options_en": ["readonly", "const", "final", "immutable"],
        "options_hi": ["readonly", "const", "final", "immutable"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which TypeScript feature allows defining multiple types for function arguments?",
        "question_hi": "TypeScript में function arguments के लिए multiple types define करने की सुविधा कौन देती है?",
        "options_en": ["union types", "tuple", "interface", "enum"],
        "options_hi": ["union types", "tuple", "interface", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which TypeScript keyword is used to define a module?",
        "question_hi": "TypeScript में module define करने के लिए कौन सा keyword है?",
        "options_en": ["module", "export", "import", "namespace"],
        "options_hi": ["module", "export", "import", "namespace"],
        "answer_en": "module",
        "answer_hi": "module",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which TypeScript feature allows splitting code into reusable files?",
        "question_hi": "TypeScript में code को reusable files में split करने की सुविधा कौन देती है?",
        "options_en": ["modules", "classes", "interfaces", "tuples"],
        "options_hi": ["modules", "classes", "interfaces", "tuples"],
        "answer_en": "modules",
        "answer_hi": "modules",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which TypeScript feature ensures code will fail if types are mismatched?",
        "question_hi": "TypeScript में code fail होने की सुविधा जो types mismatch होने पर type safety देती है?",
        "options_en": ["type checking", "runtime checking", "any", "unknown"],
        "options_hi": ["type checking", "runtime checking", "any", "unknown"],
        "answer_en": "type checking",
        "answer_hi": "type checking",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is TypeScript primarily used for?",
        "question_hi": "TypeScript मुख्य रूप से किसके लिए उपयोग किया जाता है?",
        "options_en": ["Adding static types to JavaScript", "Creating HTML pages", "Styling web pages", "Database management"],
        "options_hi": ["JavaScript में static types जोड़ना", "HTML पेज बनाना", "वेब पेज स्टाइल करना", "डेटाबेस प्रबंधन"],
        "answer_en": "Adding static types to JavaScript",
        "answer_hi": "JavaScript में static types जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which TypeScript type represents a value that never occurs?",
        "question_hi": "TypeScript में ऐसा value जो कभी occur न हो, उसे कौन सा type दर्शाता है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which TypeScript keyword allows creating a class that cannot be instantiated?",
        "question_hi": "TypeScript में ऐसी class create करने के लिए जो instantiate न हो, कौन सा keyword उपयोग होता है?",
        "options_en": ["abstract", "readonly", "final", "const"],
        "options_hi": ["abstract", "readonly", "final", "const"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which keyword allows a derived class to call its parent constructor?",
        "question_hi": "TypeScript में derived class अपने parent constructor को call करने के लिए कौन सा keyword उपयोग करती है?",
        "options_en": ["super", "this", "extends", "constructor"],
        "options_hi": ["super", "this", "extends", "constructor"],
        "answer_en": "super",
        "answer_hi": "super",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which TypeScript feature ensures that a property is optional in an interface?",
        "question_hi": "TypeScript में interface में property optional बनाने की सुविधा कौन देती है?",
        "options_en": ["?", "readonly", "default", "any"],
        "options_hi": ["?", "readonly", "default", "any"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which TypeScript type allows grouping multiple types into one?",
        "question_hi": "TypeScript में multiple types को एक group में combine करने के लिए कौन सा type उपयोग होता है?",
        "options_en": ["union types", "tuple", "interface", "enum"],
        "options_hi": ["union types", "tuple", "interface", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which TypeScript feature allows creating an immutable object?",
        "question_hi": "TypeScript में immutable object create करने की सुविधा कौन देती है?",
        "options_en": ["readonly", "const", "final", "immutable"],
        "options_hi": ["readonly", "const", "final", "immutable"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which TypeScript keyword allows defining default values for function parameters?",
        "question_hi": "TypeScript में function parameters के लिए default values define करने के लिए कौन सा keyword है?",
        "options_en": ["default", "optional", "readonly", "any"],
        "options_hi": ["default", "optional", "readonly", "any"],
        "answer_en": "default",
        "answer_hi": "default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which TypeScript feature ensures type safety at compile time?",
        "question_hi": "TypeScript में compile time पर type safety सुनिश्चित करने वाली सुविधा कौन सी है?",
        "options_en": ["static typing", "dynamic typing", "any", "unknown"],
        "options_hi": ["static typing", "dynamic typing", "any", "unknown"],
        "answer_en": "static typing",
        "answer_hi": "static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which TypeScript keyword allows defining a function type alias?",
        "question_hi": "TypeScript में function type alias define करने के लिए कौन सा keyword है?",
        "options_en": ["type", "interface", "class", "enum"],
        "options_hi": ["type", "interface", "class", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which TypeScript type allows defining a fixed-length array with different types?",
        "question_hi": "TypeScript में fixed-length array जिसमें different types हों, define करने के लिए कौन सा type है?",
        "options_en": ["tuple", "array", "any", "union types"],
        "options_hi": ["tuple", "array", "any", "union types"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which TypeScript keyword is used to declare ambient modules or variables?",
        "question_hi": "TypeScript में ambient modules या variables declare करने के लिए कौन सा keyword है?",
        "options_en": ["declare", "module", "import", "export"],
        "options_hi": ["declare", "module", "import", "export"],
        "answer_en": "declare",
        "answer_hi": "declare",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which TypeScript feature allows combining multiple interfaces into one?",
        "question_hi": "TypeScript में multiple interfaces को एक में combine करने की सुविधा कौन देती है?",
        "options_en": ["interface extends", "type alias", "tuple", "enum"],
        "options_hi": ["interface extends", "type alias", "tuple", "enum"],
        "answer_en": "interface extends",
        "answer_hi": "interface extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which TypeScript keyword is used to define a constant variable inside a class?",
        "question_hi": "TypeScript में class के अंदर constant variable define करने के लिए कौन सा keyword है?",
        "options_en": ["readonly", "const", "final", "static"],
        "options_hi": ["readonly", "const", "final", "static"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which TypeScript keyword is used to make a class property static?",
        "question_hi": "TypeScript में class property को static बनाने के लिए कौन सा keyword है?",
        "options_en": ["static", "readonly", "const", "abstract"],
        "options_hi": ["static", "readonly", "const", "abstract"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which TypeScript type represents a value that could be null or undefined?",
        "question_hi": "TypeScript में ऐसा value जो null या undefined हो सकता है, किस type से दर्शाया जाता है?",
        "options_en": ["null | undefined", "any", "unknown", "void"],
        "options_hi": ["null | undefined", "any", "unknown", "void"],
        "answer_en": "null | undefined",
        "answer_hi": "null | undefined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which TypeScript feature allows defining indexable types?",
        "question_hi": "TypeScript में indexable types define करने की सुविधा कौन देती है?",
        "options_en": ["interface with index signature", "tuple", "enum", "union types"],
        "options_hi": ["interface with index signature", "tuple", "enum", "union types"],
        "answer_en": "interface with index signature",
        "answer_hi": "interface with index signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which TypeScript type is used when the type is unknown at compile time?",
        "question_hi": "TypeScript में compile time पर type unknown होने पर कौन सा type उपयोग होता है?",
        "options_en": ["unknown", "any", "never", "void"],
        "options_hi": ["unknown", "any", "never", "void"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which TypeScript keyword is used to indicate a function returns no value?",
        "question_hi": "TypeScript में function कोई value return नहीं करता, इसे दर्शाने के लिए कौन सा keyword है?",
        "options_en": ["void", "never", "any", "undefined"],
        "options_hi": ["void", "never", "any", "undefined"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which TypeScript feature allows safe navigation through nested objects?",
        "question_hi": "TypeScript में nested objects में safe navigation करने की सुविधा कौन देती है?",
        "options_en": ["optional chaining", "nullish coalescing", "union types", "interfaces"],
        "options_hi": ["optional chaining", "nullish coalescing", "union types", "interfaces"],
        "answer_en": "optional chaining",
        "answer_hi": "optional chaining",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which TypeScript feature allows combining multiple types into a single type?",
        "question_hi": "TypeScript में multiple types को एक single type में combine करने की सुविधा कौन देती है?",
        "options_en": ["union types", "tuple", "interface", "enum"],
        "options_hi": ["union types", "tuple", "interface", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which TypeScript feature ensures a variable can only hold one specific value from a set?",
        "question_hi": "TypeScript में variable केवल एक specific value hold कर सकता है, यह सुविधा कौन देती है?",
        "options_en": ["enum", "union types", "tuple", "interface"],
        "options_hi": ["enum", "union types", "tuple", "interface"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which TypeScript type allows grouping multiple values of different types in an array?",
        "question_hi": "TypeScript में विभिन्न types की values को array में group करने के लिए कौन सा type उपयोग होता है?",
        "options_en": ["tuple", "array", "interface", "enum"],
        "options_hi": ["tuple", "array", "interface", "enum"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which TypeScript keyword allows extending multiple interfaces?",
        "question_hi": "TypeScript में multiple interfaces extend करने के लिए कौन सा keyword है?",
        "options_en": ["extends", "implements", "super", "interface"],
        "options_hi": ["extends", "implements", "super", "interface"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which TypeScript feature allows defining a read-only property in an interface?",
        "question_hi": "TypeScript में interface में read-only property define करने की सुविधा कौन देती है?",
        "options_en": ["readonly", "const", "final", "immutable"],
        "options_hi": ["readonly", "const", "final", "immutable"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which TypeScript type is used when a variable can have any value and bypasses type checking?",
        "question_hi": "TypeScript में ऐसा variable जो किसी भी value ले सकता है और type checking bypass करता है, किस type से दर्शाया जाता है?",
        "options_en": ["any", "unknown", "never", "void"],
        "options_hi": ["any", "unknown", "never", "void"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which TypeScript keyword allows declaring a variable with block scope?",
        "question_hi": "TypeScript में block scope के साथ variable declare करने के लिए कौन सा keyword है?",
        "options_en": ["let", "var", "const", "readonly"],
        "options_hi": ["let", "var", "const", "readonly"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which TypeScript keyword allows defining an abstract class?",
        "question_hi": "TypeScript में abstract class define करने के लिए कौन सा keyword है?",
        "options_en": ["abstract", "class", "interface", "readonly"],
        "options_hi": ["abstract", "class", "interface", "readonly"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which TypeScript feature ensures type safety for object properties?",
        "question_hi": "TypeScript में object properties के लिए type safety सुनिश्चित करने की सुविधा कौन देती है?",
        "options_en": ["interfaces", "tuples", "enums", "union types"],
        "options_hi": ["interfaces", "tuples", "enums", "union types"],
        "answer_en": "interfaces",
        "answer_hi": "interfaces",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which TypeScript keyword is used to implement an interface in a class?",
        "question_hi": "TypeScript में class में interface implement करने के लिए कौन सा keyword है?",
        "options_en": ["implements", "extends", "interface", "super"],
        "options_hi": ["implements", "extends", "interface", "super"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which TypeScript type allows defining a function parameter with multiple possible types?",
        "question_hi": "TypeScript में function parameter के लिए multiple possible types define करने के लिए कौन सा type उपयोग होता है?",
        "options_en": ["union types", "tuple", "interface", "enum"],
        "options_hi": ["union types", "tuple", "interface", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which TypeScript feature allows providing a default value when a variable is null or undefined?",
        "question_hi": "TypeScript में variable null या undefined होने पर default value देने की सुविधा कौन देती है?",
        "options_en": ["nullish coalescing (??)", "optional chaining (?.)", "tuple", "union types"],
        "options_hi": ["nullish coalescing (??)", "optional chaining (?.)", "tuple", "union types"],
        "answer_en": "nullish coalescing (??)",
        "answer_hi": "nullish coalescing (??)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which TypeScript type allows defining a fixed set of string values?",
        "question_hi": "TypeScript में fixed set of string values define करने के लिए कौन सा type उपयोग होता है?",
        "options_en": ["literal types", "string", "any", "union types"],
        "options_hi": ["literal types", "string", "any", "union types"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which TypeScript feature allows grouping multiple related constants?",
        "question_hi": "TypeScript में multiple related constants group करने की सुविधा कौन देती है?",
        "options_en": ["enum", "tuple", "interface", "union types"],
        "options_hi": ["enum", "tuple", "interface", "union types"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which TypeScript feature allows checking types at compile time instead of runtime?",
        "question_hi": "TypeScript में runtime की बजाय compile time पर type check करने की सुविधा कौन देती है?",
        "options_en": ["static typing", "dynamic typing", "any", "unknown"],
        "options_hi": ["static typing", "dynamic typing", "any", "unknown"],
        "answer_en": "static typing",
        "answer_hi": "static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which TypeScript keyword allows creating a module namespace?",
        "question_hi": "TypeScript में module namespace create करने के लिए कौन सा keyword है?",
        "options_en": ["namespace", "module", "export", "import"],
        "options_hi": ["namespace", "module", "export", "import"],
        "answer_en": "namespace",
        "answer_hi": "namespace",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which TypeScript keyword allows importing all exports from a module?",
        "question_hi": "TypeScript में module से सभी exports import करने के लिए कौन सा keyword है?",
        "options_en": ["import * as", "export * from", "require", "module"],
        "options_hi": ["import * as", "export * from", "require", "module"],
        "answer_en": "import * as",
        "answer_hi": "import * as",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which TypeScript feature allows optional function parameters?",
        "question_hi": "TypeScript में optional function parameters define करने की सुविधा कौन देती है?",
        "options_en": ["?", "default", "readonly", "any"],
        "options_hi": ["?", "default", "readonly", "any"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which TypeScript feature allows defining a variable with multiple possible types?",
        "question_hi": "TypeScript में ऐसा variable define करने की सुविधा जो multiple possible types रख सके, कौन देती है?",
        "options_en": ["union types", "tuple", "enum", "any"],
        "options_hi": ["union types", "tuple", "enum", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which TypeScript type represents a function that never returns?",
        "question_hi": "TypeScript में ऐसा function जो कभी return नहीं करता, किस type से दर्शाया जाता है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which TypeScript feature allows specifying a generic type for a class or function?",
        "question_hi": "TypeScript में class या function के लिए generic type specify करने की सुविधा कौन देती है?",
        "options_en": ["generics", "interfaces", "tuples", "enums"],
        "options_hi": ["generics", "interfaces", "tuples", "enums"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which TypeScript keyword is used to create a type alias?",
        "question_hi": "TypeScript में type alias create करने के लिए कौन सा keyword है?",
        "options_en": ["type", "interface", "class", "enum"],
        "options_hi": ["type", "interface", "class", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which TypeScript feature allows providing type information for external libraries?",
        "question_hi": "TypeScript में external libraries के लिए type information प्रदान करने की सुविधा कौन देती है?",
        "options_en": ["type declaration files (.d.ts)", "interface", "enum", "tuple"],
        "options_hi": ["type declaration files (.d.ts)", "interface", "enum", "tuple"],
        "answer_en": "type declaration files (.d.ts)",
        "answer_hi": "type declaration files (.d.ts)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which TypeScript keyword is used to define a class that cannot be instantiated?",
        "question_hi": "TypeScript में ऐसी class define करने के लिए जो instantiate न हो सके, कौन सा keyword है?",
        "options_en": ["abstract", "readonly", "final", "const"],
        "options_hi": ["abstract", "readonly", "final", "const"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which TypeScript feature allows providing optional chaining for nested object properties?",
        "question_hi": "TypeScript में nested object properties के लिए optional chaining प्रदान करने की सुविधा कौन देती है?",
        "options_en": ["optional chaining (?.)", "nullish coalescing (??)", "union types", "tuple"],
        "options_hi": ["optional chaining (?.)", "nullish coalescing (??)", "union types", "tuple"],
        "answer_en": "optional chaining (?.)",
        "answer_hi": "optional chaining (?.)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which TypeScript feature allows defining default values for function parameters?",
        "question_hi": "TypeScript में function parameters के लिए default values define करने की सुविधा कौन देती है?",
        "options_en": ["default parameters", "optional parameters", "readonly", "any"],
        "options_hi": ["default parameters", "optional parameters", "readonly", "any"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which TypeScript keyword allows implementing multiple interfaces in a class?",
        "question_hi": "TypeScript में class में multiple interfaces implement करने के लिए कौन सा keyword है?",
        "options_en": ["implements", "extends", "interface", "super"],
        "options_hi": ["implements", "extends", "interface", "super"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which TypeScript feature allows a variable to accept either null or a defined type?",
        "question_hi": "TypeScript में ऐसा variable जो null या किसी defined type accept कर सके, कौन सी सुविधा देती है?",
        "options_en": ["union types", "tuple", "enum", "interface"],
        "options_hi": ["union types", "tuple", "enum", "interface"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which TypeScript feature allows combining multiple types into one with intersection?",
        "question_hi": "TypeScript में multiple types को intersection के साथ combine करने की सुविधा कौन देती है?",
        "options_en": ["intersection types (&)", "union types (|)", "tuple", "enum"],
        "options_hi": ["intersection types (&)", "union types (|)", "tuple", "enum"],
        "answer_en": "intersection types (&)",
        "answer_hi": "intersection types (&)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which TypeScript feature allows creating a type that represents one specific value?",
        "question_hi": "TypeScript में ऐसा type create करने की सुविधा जो केवल एक specific value represent करे, कौन देती है?",
        "options_en": ["literal types", "union types", "enum", "tuple"],
        "options_hi": ["literal types", "union types", "enum", "tuple"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which TypeScript keyword allows defining a variable that cannot be reassigned?",
        "question_hi": "TypeScript में ऐसा variable define करने के लिए जो reassigned न हो सके, कौन सा keyword है?",
        "options_en": ["const", "let", "readonly", "final"],
        "options_hi": ["const", "let", "readonly", "final"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which TypeScript type represents a collection of key-value pairs?",
        "question_hi": "TypeScript में key-value pairs का collection किस type से दर्शाया जाता है?",
        "options_en": ["object", "array", "tuple", "enum"],
        "options_hi": ["object", "array", "tuple", "enum"],
        "answer_en": "object",
        "answer_hi": "object",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which TypeScript feature allows defining optional properties in an interface?",
        "question_hi": "TypeScript में interface में optional properties define करने की सुविधा कौन देती है?",
        "options_en": ["?", "readonly", "default", "any"],
        "options_hi": ["?", "readonly", "default", "any"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which TypeScript keyword is used to inherit from a base class?",
        "question_hi": "TypeScript में base class से inherit करने के लिए कौन सा keyword है?",
        "options_en": ["extends", "implements", "super", "interface"],
        "options_hi": ["extends", "implements", "super", "interface"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which TypeScript feature allows defining a variable without specifying its type explicitly?",
        "question_hi": "TypeScript में बिना type specify किए variable define करने की सुविधा कौन देती है?",
        "options_en": ["type inference", "any", "unknown", "tuple"],
        "options_hi": ["type inference", "any", "unknown", "tuple"],
        "answer_en": "type inference",
        "answer_hi": "type inference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which TypeScript feature allows defining a type that includes multiple other types?",
        "question_hi": "TypeScript में ऐसा type define करने की सुविधा जो multiple other types include करे, कौन देती है?",
        "options_en": ["union types", "tuple", "enum", "interface"],
        "options_hi": ["union types", "tuple", "enum", "interface"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which TypeScript keyword allows accessing parent class methods in a subclass?",
        "question_hi": "TypeScript में subclass में parent class के methods access करने के लिए कौन सा keyword है?",
        "options_en": ["super", "this", "extends", "implements"],
        "options_hi": ["super", "this", "extends", "implements"],
        "answer_en": "super",
        "answer_hi": "super",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which TypeScript type allows defining a variable that can never hold any value?",
        "question_hi": "TypeScript में ऐसा variable define करने की सुविधा जो कभी कोई value hold न करे, कौन देता है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which TypeScript keyword allows exporting a module's content?",
        "question_hi": "TypeScript में module के content को export करने के लिए कौन सा keyword है?",
        "options_en": ["export", "import", "module", "namespace"],
        "options_hi": ["export", "import", "module", "namespace"],
        "answer_en": "export",
        "answer_hi": "export",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which TypeScript keyword allows importing specific members from a module?",
        "question_hi": "TypeScript में module से specific members import करने के लिए कौन सा keyword है?",
        "options_en": ["import { } from", "export", "require", "namespace"],
        "options_hi": ["import { } from", "export", "require", "namespace"],
        "answer_en": "import { } from",
        "answer_hi": "import { } from",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which TypeScript feature allows defining function overloads?",
        "question_hi": "TypeScript में function overloads define करने की सुविधा कौन देती है?",
        "options_en": ["function overload signatures", "interfaces", "tuples", "enums"],
        "options_hi": ["function overload signatures", "interfaces", "tuples", "enums"],
        "answer_en": "function overload signatures",
        "answer_hi": "function overload signatures",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which TypeScript keyword allows providing type safety for third-party libraries?",
        "question_hi": "TypeScript में third-party libraries के लिए type safety प्रदान करने के लिए कौन सा keyword है?",
        "options_en": ["declare", "interface", "module", "namespace"],
        "options_hi": ["declare", "interface", "module", "namespace"],
        "answer_en": "declare",
        "answer_hi": "declare",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which TypeScript feature allows automatically inferring types from assigned values?",
        "question_hi": "TypeScript में assigned values से types automatically infer करने की सुविधा कौन देती है?",
        "options_en": ["type inference", "any", "unknown", "tuple"],
        "options_hi": ["type inference", "any", "unknown", "tuple"],
        "answer_en": "type inference",
        "answer_hi": "type inference",
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