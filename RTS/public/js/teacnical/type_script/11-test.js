const questions = [
    {
        "num": 1,
        "question_en": "What is TypeScript primarily used for?",
        "question_hi": "TypeScript मुख्य रूप से किसके लिए उपयोग किया जाता है?",
        "options_en": ["Adding static typing to JavaScript", "Replacing JavaScript", "Creating databases", "Styling web pages"],
        "options_hi": ["JavaScript में static typing जोड़ने के लिए", "JavaScript को replace करने के लिए", "Databases बनाने के लिए", "Web pages styling के लिए"],
        "answer_en": "Adding static typing to JavaScript",
        "answer_hi": "JavaScript में static typing जोड़ने के लिए",
        "attempted": false,
        "selected": ""
    },
   {
        "num": 2,
        "question_en": "What is type aliasing?",
        "question_hi": "Type aliasing क्या है?",
        "options_en": ["Creating a new name for a type", "Creating a new type", "Importing types", "Exporting types"],
        "options_hi": ["Type के लिए new name create करना", "New type create करना", "Types import करना", "Types export करना"],
        "answer_en": "Creating a new name for a type",
        "answer_hi": "Type के लिए new name create करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you create a type alias?",
        "question_hi": "Type alias कैसे create करते हैं?",
        "options_en": ["type Point = { x: number; y: number };", "alias Point = { x: number; y: number };", "interface Point = { x: number; y: number };", "class Point = { x: number; y: number };"],
        "options_hi": ["type Point = { x: number; y: number };", "alias Point = { x: number; y: number };", "interface Point = { x: number; y: number };", "class Point = { x: number; y: number };"],
        "answer_en": "type Point = { x: number; y: number };",
        "answer_hi": "type Point = { x: number; y: number };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which command compiles TypeScript to JavaScript?",
        "question_hi": "कौन सा command TypeScript को JavaScript में compile करता है?",
        "options_en": ["tsc", "typescript", "compile-ts", "ts-compile"],
        "options_hi": ["tsc", "typescript", "compile-ts", "ts-compile"],
        "answer_en": "tsc",
        "answer_hi": "tsc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does 'tsc' stand for?",
        "question_hi": "'tsc' का full form क्या है?",
        "options_en": ["TypeScript Compiler", "TypeScript Code", "Type Scripting Compiler", "Type System Compiler"],
        "options_hi": ["TypeScript Compiler", "TypeScript Code", "Type Scripting Compiler", "Type System Compiler"],
        "answer_en": "TypeScript Compiler",
        "answer_hi": "TypeScript Compiler",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of these is a primitive type in TypeScript?",
        "question_hi": "निम्न में से कौन TypeScript में primitive type है?",
        "options_en": ["string", "array", "object", "function"],
        "options_hi": ["string", "array", "object", "function"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How do you declare a string variable in TypeScript?",
        "question_hi": "TypeScript में string variable कैसे declare करते हैं?",
        "options_en": ["let name: string;", "string let name;", "let string name;", "name: string let;"],
        "options_hi": ["let name: string;", "string let name;", "let string name;", "name: string let;"],
        "answer_en": "let name: string;",
        "answer_hi": "let name: string;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the correct syntax for a number array?",
        "question_hi": "Number array के लिए correct syntax क्या है?",
        "options_en": ["number[]", "array<number>", "Number[]", "Both A and B"],
        "options_hi": ["number[]", "array<number>", "Number[]", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does the 'any' type allow?",
        "question_hi": "'any' type क्या allow करता है?",
        "options_en": ["Any JavaScript value", "Only numbers", "Only strings", "Only booleans"],
        "options_hi": ["कोई भी JavaScript value", "केवल numbers", "केवल strings", "केवल booleans"],
        "answer_en": "Any JavaScript value",
        "answer_hi": "कोई भी JavaScript value",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of the 'void' type?",
        "question_hi": "'void' type का purpose क्या है?",
        "options_en": ["No type", "Any type", "Null values", "Undefined values"],
        "options_hi": ["कोई type नहीं", "कोई भी type", "Null values", "Undefined values"],
        "answer_en": "No type",
        "answer_hi": "कोई type नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which type represents a true/false value?",
        "question_hi": "कौन सा type true/false value represent करता है?",
        "options_en": ["boolean", "string", "number", "any"],
        "options_hi": ["boolean", "string", "number", "any"],
        "answer_en": "boolean",
        "answer_hi": "boolean",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you declare a boolean variable?",
        "question_hi": "Boolean variable कैसे declare करते हैं?",
        "options_en": ["let isDone: boolean = false;", "boolean isDone = false;", "let boolean isDone = false;", "isDone: boolean = false let;"],
        "options_hi": ["let isDone: boolean = false;", "boolean isDone = false;", "let boolean isDone = false;", "isDone: boolean = false let;"],
        "answer_en": "let isDone: boolean = false;",
        "answer_hi": "let isDone: boolean = false;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the type of 'null' in TypeScript?",
        "question_hi": "TypeScript में 'null' का type क्या है?",
        "options_en": ["null", "undefined", "any", "void"],
        "options_hi": ["null", "undefined", "any", "void"],
        "answer_en": "null",
        "answer_hi": "null",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the type of 'undefined' in TypeScript?",
        "question_hi": "TypeScript में 'undefined' का type क्या है?",
        "options_en": ["undefined", "null", "any", "void"],
        "options_hi": ["undefined", "null", "any", "void"],
        "answer_en": "undefined",
        "answer_hi": "undefined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which symbol is used for type assertions?",
        "question_hi": "Type assertions के लिए कौन सा symbol use होता है?",
        "options_en": ["as", "assert", ":", "::"],
        "options_hi": ["as", "assert", ":", "::"],
        "answer_en": "as",
        "answer_hi": "as",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the correct way to use type assertion?",
        "question_hi": "Type assertion use करने का correct तरीका क्या है?",
        "options_en": ["let length = (stringValue as string).length;", "let length = stringValue as string.length;", "let length = stringValue.length as string;", "let length = as string stringValue.length;"],
        "options_hi": ["let length = (stringValue as string).length;", "let length = stringValue as string.length;", "let length = stringValue.length as string;", "let length = as string stringValue.length;"],
        "answer_en": "let length = (stringValue as string).length;",
        "answer_hi": "let length = (stringValue as string).length;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does 'let' provide that 'var' doesn't?",
        "question_hi": "'let' क्या provide करता है जो 'var' नहीं करता?",
        "options_en": ["Block scope", "Function scope", "Global scope", "No difference"],
        "options_hi": ["Block scope", "Function scope", "Global scope", "कोई difference नहीं"],
        "answer_en": "Block scope",
        "answer_hi": "Block scope",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is a tuple in TypeScript?",
        "question_hi": "TypeScript में tuple क्या है?",
        "options_en": ["Array with fixed number of elements", "Key-value pair", "Function type", "Class type"],
        "options_hi": ["Fixed number of elements वाला array", "Key-value pair", "Function type", "Class type"],
        "answer_en": "Array with fixed number of elements",
        "answer_hi": "Fixed number of elements वाला array",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How do you declare a tuple?",
        "question_hi": "Tuple कैसे declare करते हैं?",
        "options_en": ["let x: [string, number];", "let x: tuple(string, number);", "let x: array<string, number>;", "let x: (string, number);"],
        "options_hi": ["let x: [string, number];", "let x: tuple(string, number);", "let x: array<string, number>;", "let x: (string, number);"],
        "answer_en": "let x: [string, number];",
        "answer_hi": "let x: [string, number];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is an enum in TypeScript?",
        "question_hi": "TypeScript में enum क्या है?",
        "options_en": ["Set of named constants", "Array type", "Object type", "Function type"],
        "options_hi": ["Named constants का set", "Array type", "Object type", "Function type"],
        "answer_en": "Set of named constants",
        "answer_hi": "Named constants का set",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you declare an enum?",
        "question_hi": "Enum कैसे declare करते हैं?",
        "options_en": ["enum Color {Red, Green, Blue}", "const enum Color {Red, Green, Blue}", "type Color = {Red, Green, Blue}", "interface Color {Red, Green, Blue}"],
        "options_hi": ["enum Color {Red, Green, Blue}", "const enum Color {Red, Green, Blue}", "type Color = {Red, Green, Blue}", "interface Color {Red, Green, Blue}"],
        "answer_en": "enum Color {Red, Green, Blue}",
        "answer_hi": "enum Color {Red, Green, Blue}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the default value of first enum member?",
        "question_hi": "पहले enum member की default value क्या होती है?",
        "options_en": ["0", "1", "null", "undefined"],
        "options_hi": ["0", "1", "null", "undefined"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What does 'readonly' modifier do?",
        "question_hi": "'readonly' modifier क्या करता है?",
        "options_en": ["Makes property read-only", "Makes property write-only", "Makes property optional", "Makes property required"],
        "options_hi": ["Property को read-only बनाता है", "Property को write-only बनाता है", "Property को optional बनाता है", "Property को required बनाता है"],
        "answer_en": "Makes property read-only",
        "answer_hi": "Property को read-only बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is type inference in TypeScript?",
        "question_hi": "TypeScript में type inference क्या है?",
        "options_en": ["Automatic type detection", "Manual type declaration", "Type checking", "Type conversion"],
        "options_hi": ["Automatic type detection", "Manual type declaration", "Type checking", "Type conversion"],
        "answer_en": "Automatic type detection",
        "answer_hi": "Automatic type detection",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What will TypeScript infer for: let x = 10;",
        "question_hi": "let x = 10; के लिए TypeScript क्या infer करेगा?",
        "options_en": ["number", "string", "any", "undefined"],
        "options_hi": ["number", "string", "any", "undefined"],
        "answer_en": "number",
        "answer_hi": "number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the 'never' type used for?",
        "question_hi": "'never' type किसके लिए use होता है?",
        "options_en": ["Values that never occur", "Null values", "Undefined values", "Any values"],
        "options_hi": ["Values जो कभी occur नहीं होतीं", "Null values", "Undefined values", "Any values"],
        "answer_en": "Values that never occur",
        "answer_hi": "Values जो कभी occur नहीं होतीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which operator is used for union types?",
        "question_hi": "Union types के लिए कौन सा operator use होता है?",
        "options_en": ["|", "&", "||", "&&"],
        "options_hi": ["|", "&", "||", "&&"],
        "answer_en": "|",
        "answer_hi": "|",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is a union type?",
        "question_hi": "Union type क्या है?",
        "options_en": ["Value that can be one of several types", "Value that must be all types", "Value that is no type", "Value that is any type"],
        "options_hi": ["Value जो several types में से एक हो सकती है", "Value जो सभी types की होनी चाहिए", "Value जो no type की है", "Value जो any type की है"],
        "answer_en": "Value that can be one of several types",
        "answer_hi": "Value जो several types में से एक हो सकती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you declare a union type?",
        "question_hi": "Union type कैसे declare करते हैं?",
        "options_en": ["let value: string | number;", "let value: string || number;", "let value: string & number;", "let value: string && number;"],
        "options_hi": ["let value: string | number;", "let value: string || number;", "let value: string & number;", "let value: string && number;"],
        "answer_en": "let value: string | number;",
        "answer_hi": "let value: string | number;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is an intersection type?",
        "question_hi": "Intersection type क्या है?",
        "options_en": ["Combines multiple types into one", "Separates types", "Converts types", "Checks types"],
        "options_hi": ["Multiple types को एक में combine करता है", "Types को separate करता है", "Types को convert करता है", "Types को check करता है"],
        "answer_en": "Combines multiple types into one",
        "answer_hi": "Multiple types को एक में combine करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which operator is used for intersection types?",
        "question_hi": "Intersection types के लिए कौन सा operator use होता है?",
        "options_en": ["&", "|", "&&", "||"],
        "options_hi": ["&", "|", "&&", "||"],
        "answer_en": "&",
        "answer_hi": "&",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which company developed TypeScript?",
        "question_hi": "TypeScript को किस कंपनी ने develop किया?",
        "options_en": ["Microsoft", "Google", "Facebook", "Apple"],
        "options_hi": ["Microsoft", "Google", "Facebook", "Apple"],
        "answer_en": "Microsoft",
        "answer_hi": "Microsoft",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the file extension for TypeScript files?",
        "question_hi": "TypeScript files का file extension क्या है?",
        "options_en": [".ts", ".js", ".typescript", ".tsx"],
        "options_hi": [".ts", ".js", ".typescript", ".tsx"],
        "answer_en": ".ts",
        "answer_hi": ".ts",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is string literal type?",
        "question_hi": "String literal type क्या है?",
        "options_en": ["Type that matches specific string", "Type that matches any string", "Type for numbers", "Type for booleans"],
        "options_hi": ["Type जो specific string से match करता है", "Type जो any string से match करता है", "Numbers के लिए type", "Booleans के लिए type"],
        "answer_en": "Type that matches specific string",
        "answer_hi": "Type जो specific string से match करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you declare string literal types?",
        "question_hi": "String literal types कैसे declare करते हैं?",
        "options_en": ["type Direction = 'left' | 'right';", "type Direction = left | right;", "type Direction = 'left' || 'right';", "type Direction = left || right;"],
        "options_hi": ["type Direction = 'left' | 'right';", "type Direction = left | right;", "type Direction = 'left' || 'right';", "type Direction = left || right;"],
        "answer_en": "type Direction = 'left' | 'right';",
        "answer_hi": "type Direction = 'left' | 'right';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is numeric literal type?",
        "question_hi": "Numeric literal type क्या है?",
        "options_en": ["Type that matches specific number", "Type that matches any number", "Type for strings", "Type for booleans"],
        "options_hi": ["Type जो specific number से match करता है", "Type जो any number से match करता है", "Strings के लिए type", "Booleans के लिए type"],
        "answer_en": "Type that matches specific number",
        "answer_hi": "Type जो specific number से match करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is boolean literal type?",
        "question_hi": "Boolean literal type क्या है?",
        "options_en": ["Type that matches true or false", "Type that matches any boolean", "Type for strings", "Type for numbers"],
        "options_hi": ["Type जो true या false से match करता है", "Type जो any boolean से match करता है", "Strings के लिए type", "Numbers के लिए type"],
        "answer_en": "Type that matches true or false",
        "answer_hi": "Type जो true या false से match करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the 'unknown' type?",
        "question_hi": "'unknown' type क्या है?",
        "options_en": ["Type-safe counterpart of any", "Same as any", "Same as void", "Same as never"],
        "options_hi": ["any का type-safe counterpart", "any के समान", "void के समान", "never के समान"],
        "answer_en": "Type-safe counterpart of any",
        "answer_hi": "any का type-safe counterpart",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How is 'unknown' different from 'any'?",
        "question_hi": "'unknown' 'any' से कैसे different है?",
        "options_en": ["Unknown requires type checking", "Any requires type checking", "No difference", "Unknown is less restrictive"],
        "options_hi": ["Unknown को type checking की जरूरत होती है", "Any को type checking की जरूरत होती है", "कोई difference नहीं", "Unknown less restrictive है"],
        "answer_en": "Unknown requires type checking",
        "answer_hi": "Unknown को type checking की जरूरत होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is type casting?",
        "question_hi": "Type casting क्या है?",
        "options_en": ["Converting one type to another", "Creating new types", "Deleting types", "Checking types"],
        "options_hi": ["एक type को दूसरे में convert करना", "New types create करना", "Types delete करना", "Types check करना"],
        "answer_en": "Converting one type to another",
        "answer_hi": "एक type को दूसरे में convert करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What are the two syntaxes for type assertions?",
        "question_hi": "Type assertions के two syntaxes क्या हैं?",
        "options_en": ["as syntax and angle-bracket syntax", "only as syntax", "only angle-bracket syntax", "no syntax"],
        "options_hi": ["as syntax और angle-bracket syntax", "केवल as syntax", "केवल angle-bracket syntax", "कोई syntax नहीं"],
        "answer_en": "as syntax and angle-bracket syntax",
        "answer_hi": "as syntax और angle-bracket syntax",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the angle-bracket syntax for type assertion?",
        "question_hi": "Type assertion के लिए angle-bracket syntax क्या है?",
        "options_en": ["<string>someValue", "<string someValue>", "string<someValue>", "someValue<string>"],
        "options_hi": ["<string>someValue", "<string someValue>", "string<someValue>", "someValue<string>"],
        "answer_en": "<string>someValue",
        "answer_hi": "<string>someValue",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which syntax is recommended for type assertions in JSX?",
        "question_hi": "JSX में type assertions के लिए कौन सा syntax recommended है?",
        "options_en": ["as syntax", "angle-bracket syntax", "both", "neither"],
        "options_hi": ["as syntax", "angle-bracket syntax", "दोनों", "कोई नहीं"],
        "answer_en": "as syntax",
        "answer_hi": "as syntax",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is const assertion?",
        "question_hi": "Const assertion क्या है?",
        "options_en": ["Makes values readonly", "Makes values writable", "Makes values deletable", "Makes values optional"],
        "options_hi": ["Values को readonly बनाता है", "Values को writable बनाता है", "Values को deletable बनाता है", "Values को optional बनाता है"],
        "answer_en": "Makes values readonly",
        "answer_hi": "Values को readonly बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you write const assertion?",
        "question_hi": "Const assertion कैसे लिखते हैं?",
        "options_en": ["as const", "const as", "assert const", "const assert"],
        "options_hi": ["as const", "const as", "assert const", "const assert"],
        "answer_en": "as const",
        "answer_hi": "as const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does 'as const' do to array literals?",
        "question_hi": "'as const' array literals के साथ क्या करता है?",
        "options_en": ["Makes them readonly tuples", "Makes them mutable arrays", "Converts to objects", "Converts to strings"],
        "options_hi": ["उन्हें readonly tuples बनाता है", "उन्हें mutable arrays बनाता है", "Objects में convert करता है", "Strings में convert करता है"],
        "answer_en": "Makes them readonly tuples",
        "answer_hi": "उन्हें readonly tuples बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is type guard?",
        "question_hi": "Type guard क्या है?",
        "options_en": ["Expression that performs runtime type check", "Compiler option", "Type definition", "Function"],
        "options_hi": ["Expression जो runtime type check perform करता है", "Compiler option", "Type definition", "Function"],
        "answer_en": "Expression that performs runtime type check",
        "answer_hi": "Expression जो runtime type check perform करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is 'typeof' type guard?",
        "question_hi": "'typeof' type guard क्या है?",
        "options_en": ["Checks primitive types", "Checks object types", "Checks function types", "Checks array types"],
        "options_hi": ["Primitive types check करता है", "Object types check करता है", "Function types check करता है", "Array types check करता है"],
        "answer_en": "Checks primitive types",
        "answer_hi": "Primitive types check करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'instanceof' type guard?",
        "question_hi": "'instanceof' type guard क्या है?",
        "options_en": ["Checks class instances", "Checks primitive types", "Checks function types", "Checks array types"],
        "options_hi": ["Class instances check करता है", "Primitive types check करता है", "Function types check करता है", "Array types check करता है"],
        "answer_en": "Checks class instances",
        "answer_hi": "Class instances check करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What are user-defined type guards?",
        "question_hi": "User-defined type guards क्या हैं?",
        "options_en": ["Functions that return type predicates", "Built-in type guards", "Compiler type guards", "Runtime type guards"],
        "options_hi": ["Functions जो type predicates return करते हैं", "Built-in type guards", "Compiler type guards", "Runtime type guards"],
        "answer_en": "Functions that return type predicates",
        "answer_hi": "Functions जो type predicates return करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is a type predicate?",
        "question_hi": "Type predicate क्या है?",
        "options_en": ["Function that returns boolean", "Function that returns string", "Function that returns number", "Function that returns array"],
        "options_hi": ["Function जो boolean return करता है", "Function जो string return करता है", "Function जो number return करता है", "Function जो array return करता है"],
        "answer_en": "Function that returns boolean",
        "answer_hi": "Function जो boolean return करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you write a type predicate?",
        "question_hi": "Type predicate कैसे लिखते हैं?",
        "options_en": ["parameterName is Type", "parameterName: Type", "is Type parameterName", "Type is parameterName"],
        "options_hi": ["parameterName is Type", "parameterName: Type", "is Type parameterName", "Type is parameterName"],
        "answer_en": "parameterName is Type",
        "answer_hi": "parameterName is Type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is discriminated union?",
        "question_hi": "Discriminated union क्या है?",
        "options_en": ["Union type with common property", "Union type without common property", "Single type", "Any type"],
        "options_hi": ["Common property वाला union type", "Common property के बिना union type", "Single type", "Any type"],
        "answer_en": "Union type with common property",
        "answer_hi": "Common property वाला union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the common property in discriminated union called?",
        "question_hi": "Discriminated union में common property को क्या कहते हैं?",
        "options_en": ["Discriminant", "Union", "Intersection", "Type"],
        "options_hi": ["Discriminant", "Union", "Intersection", "Type"],
        "answer_en": "Discriminant",
        "answer_hi": "Discriminant",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is exhaustiveness checking?",
        "question_hi": "Exhaustiveness checking क्या है?",
        "options_en": ["Checking all cases are handled", "Checking some cases", "Checking no cases", "Random checking"],
        "options_hi": ["सभी cases handled हैं यह check करना", "कुछ cases check करना", "कोई cases check नहीं करना", "Random checking"],
        "answer_en": "Checking all cases are handled",
        "answer_hi": "सभी cases handled हैं यह check करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you achieve exhaustiveness checking?",
        "question_hi": "Exhaustiveness checking कैसे achieve करते हैं?",
        "options_en": ["Using never type in default case", "Using any type", "Using void type", "Using unknown type"],
        "options_hi": ["Default case में never type use करके", "Any type use करके", "Void type use करके", "Unknown type use करके"],
        "answer_en": "Using never type in default case",
        "answer_hi": "Default case में never type use करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is non-null assertion operator?",
        "question_hi": "Non-null assertion operator क्या है?",
        "options_en": ["!", "?", "!!", "??"],
        "options_hi": ["!", "?", "!!", "??"],
        "answer_en": "!",
        "answer_hi": "!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does non-null assertion operator do?",
        "question_hi": "Non-null assertion operator क्या करता है?",
        "options_en": ["Asserts value is non-null and non-undefined", "Asserts value is null", "Asserts value is undefined", "Asserts value is any"],
        "options_hi": ["Value non-null और non-undefined है यह assert करता है", "Value null है यह assert करता है", "Value undefined है यह assert करता है", "Value any है यह assert करता है"],
        "answer_en": "Asserts value is non-null and non-undefined",
        "answer_hi": "Value non-null और non-undefined है यह assert करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is optional chaining?",
        "question_hi": "Optional chaining क्या है?",
        "options_en": ["Safe property access", "Unsafe property access", "Safe function call", "Unsafe function call"],
        "options_hi": ["Safe property access", "Unsafe property access", "Safe function call", "Unsafe function call"],
        "answer_en": "Safe property access",
        "answer_hi": "Safe property access",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which operator is used for optional chaining?",
        "question_hi": "Optional chaining के लिए कौन सा operator use होता है?",
        "options_en": ["?.", "??", "!", "?:"],
        "options_hi": ["?.", "??", "!", "?:"],
        "answer_en": "?.",
        "answer_hi": "?.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is nullish coalescing?",
        "question_hi": "Nullish coalescing क्या है?",
        "options_en": ["Provides default for null/undefined", "Provides default for any value", "Provides no default", "Provides random default"],
        "options_hi": ["Null/undefined के लिए default provide करता है", "किसी भी value के लिए default provide करता है", "कोई default provide नहीं करता", "Random default provide करता है"],
        "answer_en": "Provides default for null/undefined",
        "answer_hi": "Null/undefined के लिए default provide करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which operator is used for nullish coalescing?",
        "question_hi": "Nullish coalescing के लिए कौन सा operator use होता है?",
        "options_en": ["??", "?.", "!", "?:"],
        "options_hi": ["??", "?.", "!", "?:"],
        "answer_en": "??",
        "answer_hi": "??",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is definite assignment assertion?",
        "question_hi": "Definite assignment assertion क्या है?",
        "options_en": ["Asserts variable is assigned", "Asserts variable is not assigned", "Asserts variable is null", "Asserts variable is undefined"],
        "options_hi": ["Variable assigned है यह assert करता है", "Variable assigned नहीं है यह assert करता है", "Variable null है यह assert करता है", "Variable undefined है यह assert करता है"],
        "answer_en": "Asserts variable is assigned",
        "answer_hi": "Variable assigned है यह assert करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which symbol is used for definite assignment assertion?",
        "question_hi": "Definite assignment assertion के लिए कौन सा symbol use होता है?",
        "options_en": ["!", "?", "!!", "??"],
        "options_hi": ["!", "?", "!!", "??"],
        "answer_en": "!",
        "answer_hi": "!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is readonly array?",
        "question_hi": "Readonly array क्या है?",
        "options_en": ["Array that cannot be modified", "Array that can be modified", "Array that can be deleted", "Array that can be extended"],
        "options_hi": ["Array जो modify नहीं किया जा सकता", "Array जो modify किया जा सकता है", "Array जो delete किया जा सकता है", "Array जो extend किया जा सकता है"],
        "answer_en": "Array that cannot be modified",
        "answer_hi": "Array जो modify नहीं किया जा सकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you define readonly array?",
        "question_hi": "Readonly array कैसे define करते हैं?",
        "options_en": ["readonly number[]", "number[] readonly", "readonly Array<number>", "Array<number> readonly"],
        "options_hi": ["readonly number[]", "number[] readonly", "readonly Array<number>", "Array<number> readonly"],
        "answer_en": "readonly number[]",
        "answer_hi": "readonly number[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is const enum?",
        "question_hi": "Const enum क्या है?",
        "options_en": ["Enum that is inlined", "Enum that is not inlined", "Enum that is dynamic", "Enum that is static"],
        "options_hi": ["Enum जो inlined होता है", "Enum जो inlined नहीं होता", "Enum जो dynamic होता है", "Enum जो static होता है"],
        "answer_en": "Enum that is inlined",
        "answer_hi": "Enum जो inlined होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is ambient enum?",
        "question_hi": "Ambient enum क्या है?",
        "options_en": ["Enum declared in ambient context", "Enum declared in non-ambient context", "Enum that is dynamic", "Enum that is static"],
        "options_hi": ["Ambient context में declared enum", "Non-ambient context में declared enum", "Enum जो dynamic होता है", "Enum जो static होता है"],
        "answer_en": "Enum declared in ambient context",
        "answer_hi": "Ambient context में declared enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is string enum?",
        "question_hi": "String enum क्या है?",
        "options_en": ["Enum with string values", "Enum with number values", "Enum with boolean values", "Enum with any values"],
        "options_hi": ["String values वाला enum", "Number values वाला enum", "Boolean values वाला enum", "Any values वाला enum"],
        "answer_en": "Enum with string values",
        "answer_hi": "String values वाला enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is heterogeneous enum?",
        "question_hi": "Heterogeneous enum क्या है?",
        "options_en": ["Enum with mixed value types", "Enum with same value types", "Enum with no values", "Enum with random values"],
        "options_hi": ["Mixed value types वाला enum", "Same value types वाला enum", "No values वाला enum", "Random values वाला enum"],
        "answer_en": "Enum with mixed value types",
        "answer_hi": "Mixed value types वाला enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is type query?",
        "question_hi": "Type query क्या है?",
        "options_en": ["typeof operator for types", "instanceof operator", "new operator", "delete operator"],
        "options_hi": ["Types के लिए typeof operator", "instanceof operator", "new operator", "delete operator"],
        "answer_en": "typeof operator for types",
        "answer_hi": "Types के लिए typeof operator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does 'keyof' operator do?",
        "question_hi": "'keyof' operator क्या करता है?",
        "options_en": ["Gets keys of object type", "Gets values of object", "Creates keys", "Deletes keys"],
        "options_hi": ["Object type की keys प्राप्त करता है", "Object की values प्राप्त करता है", "Keys create करता है", "Keys delete करता है"],
        "answer_en": "Gets keys of object type",
        "answer_hi": "Object type की keys प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is indexed access type?",
        "question_hi": "Indexed access type क्या है?",
        "options_en": ["Accessing type using index", "Accessing value using index", "Creating index", "Deleting index"],
        "options_hi": ["Index use करके type access करना", "Index use करके value access करना", "Index create करना", "Index delete करना"],
        "answer_en": "Accessing type using index",
        "answer_hi": "Index use करके type access करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is conditional type?",
        "question_hi": "Conditional type क्या है?",
        "options_en": ["Type that depends on condition", "Type that is always true", "Type that is always false", "Type without condition"],
        "options_hi": ["Condition पर depend करने वाला type", "हमेशा true रहने वाला type", "हमेशा false रहने वाला type", "Condition के बिना type"],
        "answer_en": "Type that depends on condition",
        "answer_hi": "Condition पर depend करने वाला type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is mapped type?",
        "question_hi": "Mapped type क्या है?",
        "options_en": ["Creating new types from old ones", "Mapping values", "Creating arrays", "Creating objects"],
        "options_hi": ["पुराने types से नए types create करना", "Values map करना", "Arrays create करना", "Objects create करना"],
        "answer_en": "Creating new types from old ones",
        "answer_hi": "पुराने types से नए types create करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is template literal type?",
        "question_hi": "Template literal type क्या है?",
        "options_en": ["String types with patterns", "Number types", "Boolean types", "Array types"],
        "options_hi": ["Patterns वाले string types", "Number types", "Boolean types", "Array types"],
        "answer_en": "String types with patterns",
        "answer_hi": "Patterns वाले string types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is satisfies operator?",
        "question_hi": "Satisfies operator क्या है?",
        "options_en": ["Checks if expression matches type", "Creates new types", "Deletes types", "Ignores types"],
        "options_hi": ["Expression type से match करता है यह check करता है", "New types create करता है", "Types delete करता है", "Types ignore करता है"],
        "answer_en": "Checks if expression matches type",
        "answer_hi": "Expression type से match करता है यह check करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the 'in' operator used for?",
        "question_hi": "'in' operator किसके लिए use होता है?",
        "options_en": ["Check if property exists in object", "Check if value exists in array", "Iterate over objects", "Create new objects"],
        "options_hi": ["Object में property exists है यह check करने के लिए", "Array में value exists है यह check करने के लिए", "Objects पर iterate करने के लिए", "New objects create करने के लिए"],
        "answer_en": "Check if property exists in object",
        "answer_hi": "Object में property exists है यह check करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What does 'keyof typeof' do?",
        "question_hi": "'keyof typeof' क्या करता है?",
        "options_en": ["Gets keys of object's type", "Gets values of object", "Creates new keys", "Deletes keys"],
        "options_hi": ["Object के type की keys प्राप्त करता है", "Object की values प्राप्त करता है", "New keys create करता है", "Keys delete करता है"],
        "answer_en": "Gets keys of object's type",
        "answer_hi": "Object के type की keys प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is type widening?",
        "question_hi": "Type widening क्या है?",
        "options_en": ["Automatic broadening of types", "Automatic narrowing of types", "Manual type conversion", "Type checking"],
        "options_hi": ["Types का automatic broadening", "Types का automatic narrowing", "Manual type conversion", "Type checking"],
        "answer_en": "Automatic broadening of types",
        "answer_hi": "Types का automatic broadening",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is type narrowing?",
        "question_hi": "Type narrowing क्या है?",
        "options_en": ["Automatic narrowing of types", "Automatic widening of types", "Manual type conversion", "Type checking"],
        "options_hi": ["Types का automatic narrowing", "Types का automatic widening", "Manual type conversion", "Type checking"],
        "answer_en": "Automatic narrowing of types",
        "answer_hi": "Types का automatic narrowing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is control flow analysis?",
        "question_hi": "Control flow analysis क्या है?",
        "options_en": ["TypeScript's analysis of code paths", "JavaScript's analysis", "CSS analysis", "HTML analysis"],
        "options_hi": ["Code paths का TypeScript analysis", "JavaScript analysis", "CSS analysis", "HTML analysis"],
        "answer_en": "TypeScript's analysis of code paths",
        "answer_hi": "Code paths का TypeScript analysis",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is brand checking?",
        "question_hi": "Brand checking क्या है?",
        "options_en": ["Checking unique brand of type", "Checking no brand", "Checking random brand", "Checking multiple brands"],
        "options_hi": ["Type के unique brand को check करना", "No brand check करना", "Random brand check करना", "Multiple brands check करना"],
        "answer_en": "Checking unique brand of type",
        "answer_hi": "Type के unique brand को check करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is opaque type?",
        "question_hi": "Opaque type क्या है?",
        "options_en": ["Type that hides implementation", "Type that shows implementation", "Type that has no implementation", "Type that has random implementation"],
        "options_hi": ["Type जो implementation hide करता है", "Type जो implementation show करता है", "Type जिसकी कोई implementation नहीं है", "Type जिसकी random implementation है"],
        "answer_en": "Type that hides implementation",
        "answer_hi": "Type जो implementation hide करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is assertion function?",
        "question_hi": "Assertion function क्या है?",
        "options_en": ["Function that asserts condition", "Function that returns value", "Function that creates value", "Function that deletes value"],
        "options_hi": ["Function जो condition assert करता है", "Function जो value return करता है", "Function जो value create करता है", "Function जो value delete करता है"],
        "answer_en": "Function that asserts condition",
        "answer_hi": "Function जो condition assert करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the 'this' parameter in functions?",
        "question_hi": "Functions में 'this' parameter क्या है?",
        "options_en": ["Specifies type of 'this'", "Creates 'this'", "Deletes 'this'", "Ignores 'this'"],
        "options_hi": ["'this' का type specify करता है", "'this' create करता है", "'this' delete करता है", "'this' ignore करता है"],
        "answer_en": "Specifies type of 'this'",
        "answer_hi": "'this' का type specify करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is function overload?",
        "question_hi": "Function overload क्या है?",
        "options_en": ["Multiple function signatures", "Single function signature", "No function signature", "Random function signature"],
        "options_hi": ["Multiple function signatures", "Single function signature", "No function signature", "Random function signature"],
        "answer_en": "Multiple function signatures",
        "answer_hi": "Multiple function signatures",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is rest parameter?",
        "question_hi": "Rest parameter क्या है?",
        "options_en": ["Represents multiple arguments as array", "Represents single argument", "Represents no arguments", "Represents random arguments"],
        "options_hi": ["Multiple arguments को array के रूप में represent करता है", "Single argument represent करता है", "No arguments represent करता है", "Random arguments represent करता है"],
        "answer_en": "Represents multiple arguments as array",
        "answer_hi": "Multiple arguments को array के रूप में represent करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is parameter destructuring?",
        "question_hi": "Parameter destructuring क्या है?",
        "options_en": ["Unpacking object properties into parameters", "Packing parameters into object", "Deleting parameters", "Ignoring parameters"],
        "options_hi": ["Object properties को parameters में unpack करना", "Parameters को object में pack करना", "Parameters delete करना", "Parameters ignore करना"],
        "answer_en": "Unpacking object properties into parameters",
        "answer_hi": "Object properties को parameters में unpack करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is call signature?",
        "question_hi": "Call signature क्या है?",
        "options_en": ["Describes function call", "Describes property access", "Describes method call", "Describes array access"],
        "options_hi": ["Function call describe करता है", "Property access describe करता है", "Method call describe करता है", "Array access describe करता है"],
        "answer_en": "Describes function call",
        "answer_hi": "Function call describe करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is construct signature?",
        "question_hi": "Construct signature क्या है?",
        "options_en": ["Describes object construction", "Describes function call", "Describes property access", "Describes method call"],
        "options_hi": ["Object construction describe करता है", "Function call describe करता है", "Property access describe करता है", "Method call describe करता है"],
        "answer_en": "Describes object construction",
        "answer_hi": "Object construction describe करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is index signature?",
        "question_hi": "Index signature क्या है?",
        "options_en": ["Describes types of properties", "Describes types of methods", "Describes types of functions", "Describes types of arrays"],
        "options_hi": ["Properties के types describe करता है", "Methods के types describe करता है", "Functions के types describe करता है", "Arrays के types describe करता है"],
        "answer_en": "Describes types of properties",
        "answer_hi": "Properties के types describe करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is method signature?",
        "question_hi": "Method signature क्या है?",
        "options_en": ["Describes method of object type", "Describes property", "Describes function", "Describes array"],
        "options_hi": ["Object type के method describe करता है", "Property describe करता है", "Function describe करता है", "Array describe करता है"],
        "answer_en": "Describes method of object type",
        "answer_hi": "Object type के method describe करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is property signature?",
        "question_hi": "Property signature क्या है?",
        "options_en": ["Describes property of object type", "Describes method", "Describes function", "Describes array"],
        "options_hi": ["Object type की property describe करता है", "Method describe करता है", "Function describe करता है", "Array describe करता है"],
        "answer_en": "Describes property of object type",
        "answer_hi": "Object type की property describe करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is readonly index signature?",
        "question_hi": "Readonly index signature क्या है?",
        "options_en": ["Prevents assignment to indexed properties", "Allows assignment", "Deletes properties", "Ignores properties"],
        "options_hi": ["Indexed properties को assignment prevent करता है", "Assignment allow करता है", "Properties delete करता है", "Properties ignore करता है"],
        "answer_en": "Prevents assignment to indexed properties",
        "answer_hi": "Indexed properties को assignment prevent करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is string index signature?",
        "question_hi": "String index signature क्या है?",
        "options_en": ["Index signature with string keys", "Index signature with number keys", "Index signature with boolean keys", "Index signature with any keys"],
        "options_hi": ["String keys वाला index signature", "Number keys वाला index signature", "Boolean keys वाला index signature", "Any keys वाला index signature"],
        "answer_en": "Index signature with string keys",
        "answer_hi": "String keys वाला index signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is number index signature?",
        "question_hi": "Number index signature क्या है?",
        "options_en": ["Index signature with number keys", "Index signature with string keys", "Index signature with boolean keys", "Index signature with any keys"],
        "options_hi": ["Number keys वाला index signature", "String keys वाला index signature", "Boolean keys वाला index signature", "Any keys वाला index signature"],
        "answer_en": "Index signature with number keys",
        "answer_hi": "Number keys वाला index signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is symbol index signature?",
        "question_hi": "Symbol index signature क्या है?",
        "options_en": ["Index signature with symbol keys", "Index signature with string keys", "Index signature with number keys", "Index signature with any keys"],
        "options_hi": ["Symbol keys वाला index signature", "String keys वाला index signature", "Number keys वाला index signature", "Any keys वाला index signature"],
        "answer_en": "Index signature with symbol keys",
        "answer_hi": "Symbol keys वाला index signature",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is hybrid type?",
        "question_hi": "Hybrid type क्या है?",
        "options_en": ["Type that combines multiple types", "Type that is single type", "Type that is no type", "Type that is any type"],
        "options_hi": ["Multiple types combine करने वाला type", "Single type", "No type", "Any type"],
        "answer_en": "Type that combines multiple types",
        "answer_hi": "Multiple types combine करने वाला type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is generic constraint?",
        "question_hi": "Generic constraint क्या है?",
        "options_en": ["Restricts generic types", "Allows any generic types", "Ignores generic types", "Creates generic types"],
        "options_hi": ["Generic types restrict करता है", "किसी भी generic types allow करता है", "Generic types ignore करता है", "Generic types create करता है"],
        "answer_en": "Restricts generic types",
        "answer_hi": "Generic types restrict करता है",
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