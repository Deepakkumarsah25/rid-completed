const questions = [
  {
    "num": 1,
    "question_en": "Which TypeScript feature ensures compile-time checking?",
    "question_hi": "कौन सा TypeScript फीचर compile-time checking सुनिश्चित करता है?",
    "options_en": ["static typing", "dynamic typing", "runtime typing", "void typing"],
    "options_hi": ["static typing", "dynamic typing", "runtime typing", "void typing"],
    "answer_en": "static typing",
    "answer_hi": "static typing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What defines fixed constant values in TypeScript?",
    "question_hi": "TypeScript में fixed constant values को क्या define करता है?",
    "options_en": ["enum", "interface", "class", "tuple"],
    "options_hi": ["enum", "interface", "class", "tuple"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which type prevents accidental type changes?",
    "question_hi": "कौन सा type accidental type changes को रोकता है?",
    "options_en": ["readonly", "optional", "static", "final"],
    "options_hi": ["readonly", "optional", "static", "final"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword initializes class properties?",
    "question_hi": "Class properties को initialize करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["constructor", "super", "init", "bind"],
    "options_hi": ["constructor", "super", "init", "bind"],
    "answer_en": "constructor",
    "answer_hi": "constructor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator provides a fallback value for null?",
    "question_hi": "Null के लिए fallback value देने वाला operator कौन सा है?",
    "options_en": ["??", "||", "&&", "?:"],
    "options_hi": ["??", "||", "&&", "?:"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which utility type creates types with all keys of another type?",
    "question_hi": "कौन सा utility type किसी type की सभी keys के साथ नया type बनाता है?",
    "options_en": ["Record<K, T>", "Pick<T, K>", "Partial<T>", "Omit<T, K>"],
    "options_hi": ["Record<K, T>", "Pick<T, K>", "Partial<T>", "Omit<T, K>"],
    "answer_en": "Record<K, T>",
    "answer_hi": "Record<K, T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which type is used for dynamic key-value objects?",
    "question_hi": "Dynamic key-value objects के लिए कौन सा type उपयोग होता है?",
    "options_en": ["Record<string, any>", "Array<any>", "Tuple", "Set"],
    "options_hi": ["Record<string, any>", "Array<any>", "Tuple", "Set"],
    "answer_en": "Record<string, any>",
    "answer_hi": "Record<string, any>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which operator checks value and type both?",
    "question_hi": "कौन सा ऑपरेटर value और type दोनों check करता है?",
    "options_en": ["===", "==", "=", "!=="],
    "options_hi": ["===", "==", "=", "!=="],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which type helps define reusable components?",
    "question_hi": "Reusable components define करने में कौन सा type सहायक है?",
    "options_en": ["Generics", "Enums", "Union", "Tuple"],
    "options_hi": ["Generics", "Enums", "Union", "Tuple"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which type allows any value without checking?",
    "question_hi": "कौन सा type बिना जांच के कुछ भी स्वीकार करता है?",
    "options_en": ["any", "unknown", "void", "never"],
    "options_hi": ["any", "unknown", "void", "never"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which type forces type checking at compile time?",
    "question_hi": "Compile time पर type checking कौन सुनिश्चित करता है?",
    "options_en": ["static typing", "dynamic typing", "any type", "loose typing"],
    "options_hi": ["स्टैटिक टाइपिंग", "डायनेमिक टाइपिंग", "any टाइप", "loose टाइपिंग"],
    "answer_en": "static typing",
    "answer_hi": "स्टैटिक टाइपिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which symbol defines a union type?",
    "question_hi": "Union type किस चिन्ह से दर्शाया जाता है?",
    "options_en": ["|", "&", ":", "="],
    "options_hi": ["|", "&", ":", "="],
    "answer_en": "|",
    "answer_hi": "|",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which operator creates intersection types?",
    "question_hi": "Intersection type बनाने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["&", "|", "=>", ":"],
    "options_hi": ["&", "|", "=>", ":"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which TypeScript structure is used to model objects?",
    "question_hi": "Objects को model करने के लिए कौन सी संरचना उपयोग होती है?",
    "options_en": ["interface", "enum", "tuple", "map"],
    "options_hi": ["interface", "enum", "tuple", "map"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword is used for class inheritance?",
    "question_hi": "Class inheritance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["extends", "implements", "inherits", "super"],
    "options_hi": ["extends", "implements", "inherits", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which utility type removes null and undefined from a type?",
    "question_hi": "कौन सा utility type किसी type से null और undefined को हटाता है?",
    "options_en": ["NonNullable<T>", "Required<T>", "Partial<T>", "Readonly<T>"],
    "options_hi": ["NonNullable<T>", "Required<T>", "Partial<T>", "Readonly<T>"],
    "answer_en": "NonNullable<T>",
    "answer_hi": "NonNullable<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword makes a property immutable?",
    "question_hi": "कौन सा keyword किसी property को immutable बनाता है?",
    "options_en": ["readonly", "static", "final", "sealed"],
    "options_hi": ["readonly", "static", "final", "sealed"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the default access modifier in TypeScript?",
    "question_hi": "TypeScript में default access modifier क्या है?",
    "options_en": ["public", "private", "protected", "readonly"],
    "options_hi": ["public", "private", "protected", "readonly"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which type allows defining a variable with fixed allowed values?",
    "question_hi": "कौन सा type किसी variable के लिए fixed values define करने देता है?",
    "options_en": ["Literal Types", "Tuple", "Any", "Void"],
    "options_hi": ["Literal Types", "Tuple", "Any", "Void"],
    "answer_en": "Literal Types",
    "answer_hi": "Literal Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which feature allows grouping related code together in TypeScript?",
    "question_hi": "कौन सा फीचर TypeScript में related code को group करने देता है?",
    "options_en": ["Namespace", "Class", "Module", "Interface"],
    "options_hi": ["Namespace", "Class", "Module", "Interface"],
    "answer_en": "Namespace",
    "answer_hi": "Namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which type is used for values that will never occur?",
    "question_hi": "कौन सा type ऐसे values के लिए उपयोग होता है जो कभी नहीं होंगे?",
    "options_en": ["never", "void", "unknown", "null"],
    "options_hi": ["never", "void", "unknown", "null"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword is used to define a blueprint for objects?",
    "question_hi": "कौन सा keyword objects के लिए blueprint define करता है?",
    "options_en": ["interface", "class", "type", "enum"],
    "options_hi": ["interface", "class", "type", "enum"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which TypeScript type can accept any value?",
    "question_hi": "कौन सा TypeScript type किसी भी value को स्वीकार कर सकता है?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which symbol is used for optional properties?",
    "question_hi": "Optional properties के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["?", "!", "*", "%"],
    "options_hi": ["?", "!", "*", "%"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which TypeScript feature helps catch errors before runtime?",
    "question_hi": "कौन सा TypeScript फीचर runtime से पहले errors पकड़ने में मदद करता है?",
    "options_en": ["Static typing", "Dynamic typing", "Modules", "Classes"],
    "options_hi": ["Static typing", "Dynamic typing", "Modules", "Classes"],
    "answer_en": "Static typing",
    "answer_hi": "Static typing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which type ensures that a variable must be assigned a value?",
    "question_hi": "कौन सा type सुनिश्चित करता है कि variable को value ज़रूर मिले?",
    "options_en": ["non-null assertion", "union", "tuple", "void"],
    "options_hi": ["non-null assertion", "union", "tuple", "void"],
    "answer_en": "non-null assertion",
    "answer_hi": "non-null assertion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which type is suitable for functions that return no value?",
    "question_hi": "कौन सा type उन functions के लिए उपयोग होता है जो कोई value return नहीं करते?",
    "options_en": ["void", "never", "null", "undefined"],
    "options_hi": ["void", "never", "null", "undefined"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which feature allows defining constants in TypeScript?",
    "question_hi": "कौन सा फीचर TypeScript में constants define करने देता है?",
    "options_en": ["enum", "type", "interface", "class"],
    "options_hi": ["enum", "type", "interface", "class"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which operator is used for type assertion?",
    "question_hi": "Type assertion के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["as", "=>", "::", "??"],
    "options_hi": ["as", "=>", "::", "??"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which type represents an array with fixed length and specific types?",
    "question_hi": "कौन सा type fixed length और specific types वाले array को दर्शाता है?",
    "options_en": ["Tuple", "Union", "Record", "any[]"],
    "options_hi": ["Tuple", "Union", "Record", "any[]"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function parameter type allows passing unlimited values?",
    "question_hi": "कौन सा parameter type unlimited values पास करने देता है?",
    "options_en": ["rest parameter", "optional parameter", "tuple", "generic"],
    "options_hi": ["rest parameter", "optional parameter", "tuple", "generic"],
    "answer_en": "rest parameter",
    "answer_hi": "rest parameter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which utility type makes all properties of a type optional?",
    "question_hi": "कौन सा utility type किसी भी type की सभी properties को optional बना देता है?",
    "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
    "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword is used to access parent class constructor?",
    "question_hi": "Parent class constructor को access करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["super", "this", "extends", "parent"],
    "options_hi": ["super", "this", "extends", "parent"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which of the following is a primitive type?",
    "question_hi": "निम्न में से कौन सा primitive type है?",
    "options_en": ["string", "object", "array", "function"],
    "options_hi": ["string", "object", "array", "function"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which compiler option enables strict null safety?",
    "question_hi": "कौन सा compiler option strict null safety enable करता है?",
    "options_en": ["strictNullChecks", "unknown", "never", "null"],
    "options_hi": ["strictNullChecks", "unknown", "never", "null"],
    "answer_en": "strictNullChecks",
    "answer_hi": "strictNullChecks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which TypeScript feature allows creating reusable code templates?",
    "question_hi": "कौन सा फीचर reusable code templates बनाने देता है?",
    "options_en": ["Generics", "Enums", "Modules", "Tuples"],
    "options_hi": ["Generics", "Enums", "Modules", "Tuples"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which type represents an unknown value but safer than any?",
    "question_hi": "कौन सा type unknown value को दर्शाता है लेकिन any से safer है?",
    "options_en": ["unknown", "never", "undefined", "void"],
    "options_hi": ["unknown", "never", "undefined", "void"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which utility type creates a type with readonly properties?",
    "question_hi": "कौन सा utility type readonly properties वाला type बनाता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Pick<T, K>", "Record<K, T>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Pick<T, K>", "Record<K, T>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which symbol is used for non-null assertion?",
    "question_hi": "Non-null assertion के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["!", "?", "#", "$"],
    "options_hi": ["!", "?", "#", "$"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which TypeScript feature groups related variables and functions?",
    "question_hi": "कौन सा TypeScript फीचर related variables और functions को group करता है?",
    "options_en": ["Module", "Alias", "Tuple", "Enum"],
    "options_hi": ["Module", "Alias", "Tuple", "Enum"],
    "answer_en": "Module",
    "answer_hi": "Module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which keyword is used to define a constant value?",
    "question_hi": "कौन सा keyword एक स्थायी मान परिभाषित करने के लिए उपयोग होता है?",
    "options_en": ["const", "let", "var", "static"],
    "options_hi": ["const", "let", "var", "static"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which TypeScript type is used for JSON objects?",
    "question_hi": "JSON objects के लिए कौन सा TypeScript type उपयोग होता है?",
    "options_en": ["object", "string", "Map", "Set"],
    "options_hi": ["object", "string", "Map", "Set"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which type represents a value that might be absent?",
    "question_hi": "कौन सा type उस value को दर्शाता है जो मौजूद न भी हो?",
    "options_en": ["null", "never", "void", "tuple"],
    "options_hi": ["null", "never", "void", "tuple"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does the 'as' keyword perform?",
    "question_hi": "'as' keyword क्या करता है?",
    "options_en": ["type assertion", "inheritance", "casting error", "compilation"],
    "options_hi": ["type assertion", "inheritance", "casting error", "compilation"],
    "answer_en": "type assertion",
    "answer_hi": "type assertion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which operator is used for optional chaining?",
    "question_hi": "Optional chaining के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["?.", "::", "??", "::?"],
    "options_hi": ["?.", "::", "??", "::?"],
    "answer_en": "?.",
    "answer_hi": "?.",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which feature allows grouping constants together?",
    "question_hi": "कौन सा फीचर constants को एक साथ समूहित करने देता है?",
    "options_en": ["enum", "tuple", "set", "module"],
    "options_hi": ["enum", "tuple", "set", "module"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which type allows multiple possible types for a value?",
    "question_hi": "कौन सा type किसी value के लिए कई possible types की अनुमति देता है?",
    "options_en": ["union", "tuple", "unknown", "any"],
    "options_hi": ["union", "tuple", "unknown", "any"],
    "answer_en": "union",
    "answer_hi": "union",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword is used to implement an interface?",
    "question_hi": "Interface को implement करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["implements", "extends", "uses", "run"],
    "options_hi": ["implements", "extends", "uses", "run"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which type defines data in key-value pairs?",
    "question_hi": "कौन सा type key-value pairs में data define करता है?",
    "options_en": ["Record<K, T>", "Tuple", "Union", "Enum"],
    "options_hi": ["Record<K, T>", "Tuple", "Union", "Enum"],
    "answer_en": "Record<K, T>",
    "answer_hi": "Record<K, T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which utility type makes all properties required?",
    "question_hi": "कौन सा utility type सभी properties को required बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which keyword is required to call the parent class method?",
    "question_hi": "Parent class method को call करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["super", "extends", "this", "parent"],
    "options_hi": ["super", "extends", "this", "parent"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which function modifier ensures method cannot be overridden?",
    "question_hi": "कौन सा modifier method को override होने से रोकता है?",
    "options_en": ["final", "readonly", "sealed", "static"],
    "options_hi": ["final", "readonly", "sealed", "static"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is used to handle unknown values safely?",
    "question_hi": "Unknown values को safely handle करने के लिए क्या उपयोग होता है?",
    "options_en": ["unknown", "any", "never", "null"],
    "options_hi": ["unknown", "any", "never", "null"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which syntax defines a readonly class property?",
    "question_hi": "Readonly class property define करने के लिए कौन सा syntax उपयोग होता है?",
    "options_en": ["readonly x: number", "final x: number", "const x: number", "static x: number"],
    "options_hi": ["readonly x: number", "final x: number", "const x: number", "static x: number"],
    "answer_en": "readonly x: number",
    "answer_hi": "readonly x: number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which keyword is used to export code from a module?",
    "question_hi": "Module से code export करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["export", "expose", "share", "public"],
    "options_hi": ["export", "expose", "share", "public"],
    "answer_en": "export",
    "answer_hi": "export",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which keyword is used to import a module?",
    "question_hi": "Module import करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["import", "require", "include", "use"],
    "options_hi": ["import", "require", "include", "use"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which type prevents assignment of different types?",
    "question_hi": "कौन सा type अलग types के assignment को रोकता है?",
    "options_en": ["strict typing", "loose typing", "void", "never"],
    "options_hi": ["strict typing", "loose typing", "void", "never"],
    "answer_en": "strict typing",
    "answer_hi": "strict typing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which feature supports code reusability in TypeScript?",
    "question_hi": "TypeScript में code reusability किस feature से संभव होती है?",
    "options_en": ["Generics", "Enums", "Loops", "Variables"],
    "options_hi": ["Generics", "Enums", "Loops", "Variables"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which type is assigned automatically when not declared?",
    "question_hi": "जब type declare नहीं किया जाता तो कौन सा type automatically assign होता है?",
    "options_en": ["any", "unknown", "never", "string"],
    "options_hi": ["any", "unknown", "never", "string"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which symbol is used for nullish coalescing?",
    "question_hi": "Nullish coalescing के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["??", "?.", "||", "::"],
    "options_hi": ["??", "?.", "||", "::"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which keyword prevents modification of a variable?",
    "question_hi": "कौन सा keyword variable में बदलाव होने से रोकता है?",
    "options_en": ["const", "var", "let", "static"],
    "options_hi": ["const", "var", "let", "static"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which type is used for a function that never returns?",
    "question_hi": "कौन सा type उस function के लिए उपयोग होता है जो कभी return नहीं करता?",
    "options_en": ["never", "void", "undefined", "null"],
    "options_hi": ["never", "void", "undefined", "null"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which feature allows defining blueprints for objects?",
    "question_hi": "Objects के लिए blueprint define करने का फीचर कौन सा है?",
    "options_en": ["interface", "class", "enum", "type"],
    "options_hi": ["interface", "class", "enum", "type"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which type represents multiple fixed elements?",
    "question_hi": "कौन सा type multiple fixed elements को दर्शाता है?",
    "options_en": ["tuple", "array", "union", "record"],
    "options_hi": ["tuple", "array", "union", "record"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which utility type extracts specific properties?",
    "question_hi": "कौन सा utility type specific properties को extract करता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Readonly<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Readonly<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which utility type removes specific properties?",
    "question_hi": "कौन सा utility type specific properties को remove करता है?",
    "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which keyword is used to create a class?",
    "question_hi": "Class बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class", "object", "new", "struct"],
    "options_hi": ["class", "object", "new", "struct"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which function keyword binds to the class instance?",
    "question_hi": "कौन सा function keyword class instance से bind रहता है?",
    "options_en": ["this", "super", "self", "bind"],
    "options_hi": ["this", "super", "self", "bind"],
    "answer_en": "this",
    "answer_hi": "this",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which feature supports asynchronous programming?",
    "question_hi": "कौन सा फीचर asynchronous programming को support करता है?",
    "options_en": ["async/await", "tuple", "enum", "map"],
    "options_hi": ["async/await", "tuple", "enum", "map"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which interface represents an array-like structure?",
    "question_hi": "कौन सा interface array-like structure को दर्शाता है?",
    "options_en": ["Array<T>", "Set<T>", "Map<K, V>", "Record<K, T>"],
    "options_hi": ["Array<T>", "Set<T>", "Map<K, V>", "Record<K, T>"],
    "answer_en": "Array<T>",
    "answer_hi": "Array<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What does TypeScript add to JavaScript?",
    "question_hi": "TypeScript JavaScript में क्या जोड़ता है?",
    "options_en": ["Static typing", "Faster runtime", "Better DOM", "No changes"],
    "options_hi": ["स्टैटिक टाइपिंग", "तेज़ रनटाइम", "बेहतर DOM", "कोई बदलाव नहीं"],
    "answer_en": "Static typing",
    "answer_hi": "स्टैटिक टाइपिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is the default file extension of TypeScript?",
    "question_hi": "TypeScript की फ़ाइल का डिफ़ॉल्ट एक्सटेंशन क्या है?",
    "options_en": [".ts", ".js", ".tsx", ".json"],
    "options_hi": [".ts", ".js", ".tsx", ".json"],
    "answer_en": ".ts",
    "answer_hi": ".ts",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which command compiles TypeScript?",
    "question_hi": "कौन सा कमांड TypeScript कंपाइल करता है?",
    "options_en": ["tsc", "node", "npm start", "ts-run"],
    "options_hi": ["tsc", "node", "npm start", "ts-run"],
    "answer_en": "tsc",
    "answer_hi": "tsc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which TypeScript type represents numbers?",
    "question_hi": "संख्या को दर्शाने वाला TypeScript प्रकार कौन सा है?",
    "options_en": ["number", "numeric", "int", "float"],
    "options_hi": ["number", "numeric", "int", "float"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which keyword defines a block-scoped variable?",
    "question_hi": "कौन सा keyword block-scoped वेरिएबल को define करता है?",
    "options_en": ["let", "var", "static", "define"],
    "options_hi": ["let", "var", "static", "define"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which type is safest for unknown data?",
    "question_hi": "Unknown data के लिए सबसे सुरक्षित type कौन सा है?",
    "options_en": ["unknown", "any", "void", "never"],
    "options_hi": ["unknown", "any", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which operator is used for type annotation?",
    "question_hi": "Type annotation किस ऑपरेटर से किया जाता है?",
    "options_en": [":", "::", "=>", "="],
    "options_hi": [":", "::", "=>", "="],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which type is used when a function returns nothing?",
    "question_hi": "Function कुछ भी return न करे तो कौन सा type उपयोग होता है?",
    "options_en": ["void", "never", "undefined", "null"],
    "options_hi": ["void", "never", "undefined", "null"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which type represents a value that never occurs?",
    "question_hi": "कौन सा type ऐसा मान दर्शाता है जो कभी घटित नहीं होता?",
    "options_en": ["never", "void", "unknown", "null"],
    "options_hi": ["never", "void", "unknown", "null"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which type restricts values to a limited set?",
    "question_hi": "कौन सा type values को सीमित सेट तक restrict करता है?",
    "options_en": ["Literal types", "Tuple", "Union", "Void"],
    "options_hi": ["Literal types", "Tuple", "Union", "Void"],
    "answer_en": "Literal types",
    "answer_hi": "Literal types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which method converts string to number?",
    "question_hi": "String को number में convert करने वाली method कौन सी है?",
    "options_en": ["Number()", "toString()", "parseStr()", "JSON.parse()"],
    "options_hi": ["Number()", "toString()", "parseStr()", "JSON.parse()"],
    "answer_en": "Number()",
    "answer_hi": "Number()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which type restricts access to class members?",
    "question_hi": "कौन सा type class members की access को restrict करता है?",
    "options_en": ["private", "public", "readonly", "static"],
    "options_hi": ["private", "public", "readonly", "static"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which modifier makes a class property accessible everywhere?",
    "question_hi": "कौन सा modifier class property को हर जगह accessible बनाता है?",
    "options_en": ["public", "private", "protected", "static"],
    "options_hi": ["public", "private", "protected", "static"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which modifier restricts access only to the class and its subclasses?",
    "question_hi": "कौन सा modifier access को केवल class और उसकी subclasses तक restrict करता है?",
    "options_en": ["protected", "public", "private", "static"],
    "options_hi": ["protected", "public", "private", "static"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which operator is used to spread array values?",
    "question_hi": "Array values को फैलाने के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["...", "??", "=>", "::"],
    "options_hi": ["...", "??", "=>", "::"],
    "answer_en": "...",
    "answer_hi": "...",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which operator merges object properties?",
    "question_hi": "Object properties को merge करने वाला operator कौन सा है?",
    "options_en": ["spread operator", "optional operator", "nullish operator", "union operator"],
    "options_hi": ["spread operator", "optional operator", "nullish operator", "union operator"],
    "answer_en": "spread operator",
    "answer_hi": "spread operator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which type creates arrays of specific type?",
    "question_hi": "कौन सा type specific type की arrays बनाता है?",
    "options_en": ["Array<T>", "Tuple", "Union", "Enum"],
    "options_hi": ["Array<T>", "Tuple", "Union", "Enum"],
    "answer_en": "Array<T>",
    "answer_hi": "Array<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which method returns the type of a variable?",
    "question_hi": "कौन सी method variable का type बताती है?",
    "options_en": ["typeof", "instanceof", "type", "classof"],
    "options_hi": ["typeof", "instanceof", "type", "classof"],
    "answer_en": "typeof",
    "answer_hi": "typeof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which structure contains key-value pairs?",
    "question_hi": "कौन सा structure key-value pairs रखता है?",
    "options_en": ["Map", "Set", "Array", "Tuple"],
    "options_hi": ["Map", "Set", "Array", "Tuple"],
    "answer_en": "Map",
    "answer_hi": "Map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which built-in object stores unique values?",
    "question_hi": "कौन सा built-in object unique values store करता है?",
    "options_en": ["Set", "Map", "Array", "Record"],
    "options_hi": ["Set", "Map", "Array", "Record"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which statement handles errors in TypeScript?",
    "question_hi": "TypeScript में errors को कौन सा statement handle करता है?",
    "options_en": ["try/catch", "throw/catch", "if/else", "loop"],
    "options_hi": ["try/catch", "throw/catch", "if/else", "loop"],
    "answer_en": "try/catch",
    "answer_hi": "try/catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which type is used when a value is not yet known?",
    "question_hi": "जब value ज्ञात न हो तब कौन सा type उपयोग होता है?",
    "options_en": ["unknown", "never", "null", "void"],
    "options_hi": ["unknown", "never", "null", "void"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which utility type creates a type with required keys only?",
    "question_hi": "कौन सा utility type केवल required keys वाला type बनाता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Readonly<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Readonly<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which class modifier makes a method accessible without creating an object?",
    "question_hi": "कौन सा modifier method को object बनाए बिना accessible बनाता है?",
    "options_en": ["static", "public", "private", "protected"],
    "options_hi": ["static", "public", "private", "protected"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which operator combines two conditions?",
    "question_hi": "कौन सा operator दो conditions को combine करता है?",
    "options_en": ["&&", "||", "??", "%"],
    "options_hi": ["&&", "||", "??", "%"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which operator gives default value if left side is undefined?",
    "question_hi": "अगर left side undefined हो तो कौन सा operator default value देता है?",
    "options_en": ["??", "||", "&&", "=="],
    "options_hi": ["??", "||", "&&", "=="],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which keyword is used to define a function inside class?",
    "question_hi": "Class के अंदर function define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["constructor", "function", "method", "call"],
    "options_hi": ["constructor", "function", "method", "call"],
    "answer_en": "constructor",
    "answer_hi": "constructor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which operator is used to check if property exists?",
    "question_hi": "कौन सा operator check करता है कि property मौजूद है?",
    "options_en": ["in", "has", "of", "on"],
    "options_hi": ["in", "has", "of", "on"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which type supports real-time error detection?",
    "question_hi": "कौन सा type real-time error detection support करता है?",
    "options_en": ["static typing", "dynamic typing", "runtime typing", "manual typing"],
    "options_hi": ["static typing", "dynamic typing", "runtime typing", "manual typing"],
    "answer_en": "static typing",
    "answer_hi": "static typing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which feature of TypeScript improves code readability?",
    "question_hi": "TypeScript की कौन सी विशेषता code readability बढ़ाती है?",
    "options_en": ["interfaces", "loops", "conditions", "events"],
    "options_hi": ["interfaces", "loops", "conditions", "events"],
    "answer_en": "interfaces",
    "answer_hi": "interfaces",
    "attempted": false,
    "selected": ""
  }
];
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};