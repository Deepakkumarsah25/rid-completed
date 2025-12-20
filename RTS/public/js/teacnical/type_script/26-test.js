const questions =[
  {
    "num": 1,
    "question_en": "Which TypeScript feature allows extending interfaces?",
    "question_hi": "कौन सा TypeScript feature interfaces को extend करने देता है?",
    "options_en": ["extends", "implements", "inherits", "super"],
    "options_hi": ["extends", "implements", "inherits", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which TypeScript feature allows merging multiple interfaces with the same name?",
    "question_hi": "कौन सा TypeScript feature same name वाले multiple interfaces merge करने देता है?",
    "options_en": ["declaration merging", "interface merging", "type merging", "union merging"],
    "options_hi": ["declaration merging", "interface merging", "type merging", "union merging"],
    "answer_en": "declaration merging",
    "answer_hi": "declaration merging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which TypeScript keyword allows defining a type alias?",
    "question_hi": "कौन सा TypeScript keyword type alias define करने के लिए use होता है?",
    "options_en": ["type", "interface", "enum", "class"],
    "options_hi": ["type", "interface", "enum", "class"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which TypeScript feature allows mapping properties of one type to another?",
    "question_hi": "कौन सा TypeScript feature एक type की properties को दूसरे type में map करता है?",
    "options_en": ["mapped types", "conditional types", "union types", "intersection types"],
    "options_hi": ["mapped types", "conditional types", "union types", "intersection types"],
    "answer_en": "mapped types",
    "answer_hi": "mapped types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which TypeScript keyword is used to define an abstract method inside a class?",
    "question_hi": "कौन सा TypeScript keyword class के अंदर abstract method define करने के लिए use होता है?",
    "options_en": ["abstract", "override", "virtual", "interface"],
    "options_hi": ["abstract", "override", "virtual", "interface"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which TypeScript keyword pauses execution inside an async function?",
    "question_hi": "कौन सा keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which TypeScript keyword declares a function as asynchronous?",
    "question_hi": "कौन सा TypeScript keyword function को asynchronous declare करता है?",
    "options_en": ["async", "await", "defer", "async function"],
    "options_hi": ["async", "await", "defer", "async function"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which TypeScript type represents the type of a class constructor?",
    "question_hi": "कौन सा TypeScript type class constructor का type represent करता है?",
    "options_en": ["new()", "constructor", "class", "function"],
    "options_hi": ["new()", "constructor", "class", "function"],
    "answer_en": "new()",
    "answer_hi": "new()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which TypeScript feature allows narrowing types inside conditional blocks?",
    "question_hi": "कौन सा TypeScript feature conditional blocks के अंदर types narrow करता है?",
    "options_en": ["type guards", "type assertions", "union types", "intersection types"],
    "options_hi": ["type guards", "type assertions", "union types", "intersection types"],
    "answer_en": "type guards",
    "answer_hi": "type guards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which TypeScript keyword prevents a class from being instantiated directly?",
    "question_hi": "कौन सा TypeScript keyword class को directly instantiate होने से रोकता है?",
    "options_en": ["abstract", "readonly", "private", "final"],
    "options_hi": ["abstract", "readonly", "private", "final"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which TypeScript keyword allows a class to implement multiple interfaces?",
    "question_hi": "कौन सा TypeScript keyword class को multiple interfaces implement करने देता है?",
    "options_en": ["implements", "extends", "interface", "type"],
    "options_hi": ["implements", "extends", "interface", "type"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which TypeScript feature allows extracting a subset of properties from a type?",
    "question_hi": "कौन सा TypeScript feature type से कुछ selected properties extract करने देता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which TypeScript feature removes selected properties from a type?",
    "question_hi": "कौन सा TypeScript feature type से selected properties remove करता है?",
    "options_en": ["Omit", "Pick", "Partial", "Required"],
    "options_hi": ["Omit", "Pick", "Partial", "Required"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which TypeScript utility type makes all properties optional?",
    "question_hi": "कौन सा TypeScript utility type किसी type की सभी properties optional बनाता है?",
    "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T>"],
    "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
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
    "question_en": "Which TypeScript type represents a function that never returns?",
    "question_hi": "कौन सा TypeScript type ऐसे function को represent करता है जो कभी return नहीं करता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which TypeScript keyword declares a variable that can be reassigned?",
    "question_hi": "कौन सा TypeScript keyword variable declare करता है जिसे reassigned किया जा सकता है?",
    "options_en": ["let", "const", "var", "readonly"],
    "options_hi": ["let", "const", "var", "readonly"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which TypeScript type allows assigning either a number or a string?",
    "question_hi": "कौन सा TypeScript type number या string assign करने देता है?",
    "options_en": ["union type", "intersection type", "any", "unknown"],
    "options_hi": ["union type", "intersection type", "any", "unknown"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which TypeScript keyword declares a constant class property that cannot be changed?",
    "question_hi": "कौन सा TypeScript keyword class की property declare करता है जिसे बदला नहीं जा सकता?",
    "options_en": ["readonly", "const", "private", "protected"],
    "options_hi": ["readonly", "const", "private", "protected"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which TypeScript keyword allows pausing execution inside an async function?",
    "question_hi": "कौन सा keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which TypeScript utility type makes all properties required?",
    "question_hi": "कौन सा TypeScript utility type सभी properties required बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which TypeScript utility type makes all properties readonly?",
    "question_hi": "कौन सा TypeScript utility type सभी properties readonly बनाता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which TypeScript utility type picks specific properties from a type?",
    "question_hi": "कौन सा TypeScript utility type type से specific properties select करता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which TypeScript utility type removes specific properties from a type?",
    "question_hi": "कौन सा TypeScript utility type type से specific properties remove करता है?",
    "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which TypeScript type represents a function that does not return anything?",
    "question_hi": "कौन सा TypeScript type function को represent करता है जो कुछ return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which TypeScript keyword is used to define a generic type parameter?",
    "question_hi": "कौन सा TypeScript keyword generic type parameter define करने के लिए use होता है?",
    "options_en": ["<T>", "type", "interface", "class"],
    "options_hi": ["<T>", "type", "interface", "class"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which TypeScript feature allows combining multiple types into one variable?",
    "question_hi": "कौन सा TypeScript feature multiple types को एक variable में combine करता है?",
    "options_en": ["union type", "intersection type", "any", "unknown"],
    "options_hi": ["union type", "intersection type", "any", "unknown"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which TypeScript feature ensures a variable satisfies multiple type constraints simultaneously?",
    "question_hi": "कौन सा TypeScript feature variable को multiple type constraints satisfy करने देता है?",
    "options_en": ["intersection type", "union type", "any", "unknown"],
    "options_hi": ["intersection type", "union type", "any", "unknown"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which TypeScript keyword allows declaring an optional property in an interface?",
    "question_hi": "कौन सा TypeScript keyword interface में optional property declare करने के लिए use होता है?",
    "options_en": ["?", "readonly", "optional", "const"],
    "options_hi": ["?", "readonly", "optional", "const"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which TypeScript type represents a value that can never occur?",
    "question_hi": "कौन सा TypeScript type ऐसे value को represent करता है जो कभी occur नहीं हो सकता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which keyword is used to declare a class constructor parameter as a class property?",
    "question_hi": "कौन सा keyword class constructor parameter को class property के रूप में declare करने के लिए use होता है?",
    "options_en": ["public", "private", "protected", "readonly"],
    "options_hi": ["public", "private", "protected", "readonly"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which TypeScript feature allows defining default values for function parameters?",
    "question_hi": "कौन सा TypeScript feature function parameters के लिए default values define करने देता है?",
    "options_en": ["default parameters", "optional parameters", "rest parameters", "any"],
    "options_hi": ["default parameters", "optional parameters", "rest parameters", "any"],
    "answer_en": "default parameters",
    "answer_hi": "default parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which TypeScript feature allows passing an indefinite number of arguments as an array?",
    "question_hi": "कौन सा TypeScript feature arguments की indefinite संख्या को array के रूप में पास करने देता है?",
    "options_en": ["rest parameters", "spread operator", "optional parameters", "any"],
    "options_hi": ["rest parameters", "spread operator", "optional parameters", "any"],
    "answer_en": "rest parameters",
    "answer_hi": "rest parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which TypeScript feature allows spreading elements of an array into another array?",
    "question_hi": "कौन सा TypeScript feature array के elements को दूसरे array में spread करने देता है?",
    "options_en": ["spread operator", "rest parameters", "union type", "intersection type"],
    "options_hi": ["spread operator", "rest parameters", "union type", "intersection type"],
    "answer_en": "spread operator",
    "answer_hi": "spread operator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which TypeScript feature allows creating a new type based on existing type but with some modifications?",
    "question_hi": "कौन सा TypeScript feature existing type के आधार पर modifications के साथ नया type बनाता है?",
    "options_en": ["mapped types", "union types", "intersection types", "any"],
    "options_hi": ["mapped types", "union types", "intersection types", "any"],
    "answer_en": "mapped types",
    "answer_hi": "mapped types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which TypeScript feature ensures type safety when dealing with unknown values?",
    "question_hi": "कौन सा TypeScript feature unknown values के साथ deal करते समय type safety सुनिश्चित करता है?",
    "options_en": ["type guards", "any", "void", "never"],
    "options_hi": ["type guards", "any", "void", "never"],
    "answer_en": "type guards",
    "answer_hi": "type guards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which TypeScript type represents a value that may be null or undefined?",
    "question_hi": "कौन सा TypeScript type value को represent करता है जो null या undefined हो सकता है?",
    "options_en": ["nullable type", "any", "unknown", "never"],
    "options_hi": ["nullable type", "any", "unknown", "never"],
    "answer_en": "nullable type",
    "answer_hi": "nullable type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which TypeScript feature allows defining multiple call signatures for a function?",
    "question_hi": "कौन सा TypeScript feature function के लिए multiple call signatures define करने देता है?",
    "options_en": ["function overloading", "optional parameters", "rest parameters", "any"],
    "options_hi": ["function overloading", "optional parameters", "rest parameters", "any"],
    "answer_en": "function overloading",
    "answer_hi": "function overloading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which TypeScript keyword declares a static property in a class?",
    "question_hi": "कौन सा TypeScript keyword class में static property declare करता है?",
    "options_en": ["static", "readonly", "public", "private"],
    "options_hi": ["static", "readonly", "public", "private"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which TypeScript feature creates a type with all properties of T except the ones specified?",
    "question_hi": "कौन सा TypeScript feature T की सभी properties के साथ type बनाता है सिवाय उन properties के जिन्हें specify किया गया हो?",
    "options_en": ["Omit", "Pick", "Partial", "Record"],
    "options_hi": ["Omit", "Pick", "Partial", "Record"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which TypeScript feature creates a type with only the selected properties of T?",
    "question_hi": "कौन सा TypeScript feature T की केवल selected properties के साथ type बनाता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which TypeScript keyword is used to create a read-only array?",
    "question_hi": "कौन सा TypeScript keyword read-only array बनाने के लिए use होता है?",
    "options_en": ["readonly", "const", "immutable", "final"],
    "options_hi": ["readonly", "const", "immutable", "final"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which TypeScript type ensures the variable cannot be assigned null or undefined?",
    "question_hi": "कौन सा TypeScript type variable को null या undefined assign होने से रोकता है?",
    "options_en": ["non-null assertion", "any", "unknown", "never"],
    "options_hi": ["non-null assertion", "any", "unknown", "never"],
    "answer_en": "non-null assertion",
    "answer_hi": "non-null assertion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which TypeScript keyword declares a method that cannot be overridden in a subclass?",
    "question_hi": "कौन सा TypeScript keyword subclass में method override होने से रोकता है?",
    "options_en": ["final", "readonly", "private", "abstract"],
    "options_hi": ["final", "readonly", "private", "abstract"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which TypeScript keyword declares a private property or method?",
    "question_hi": "कौन सा TypeScript keyword private property या method declare करता है?",
    "options_en": ["private", "protected", "public", "readonly"],
    "options_hi": ["private", "protected", "public", "readonly"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which TypeScript keyword declares a property or method accessible only to the class and its subclasses?",
    "question_hi": "कौन सा TypeScript keyword property या method को केवल class और इसके subclasses के लिए accessible बनाता है?",
    "options_en": ["protected", "private", "public", "readonly"],
    "options_hi": ["protected", "private", "public", "readonly"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which TypeScript keyword allows a subclass to call a method of its parent class?",
    "question_hi": "कौन सा TypeScript keyword subclass को parent class की method call करने देता है?",
    "options_en": ["super", "this", "base", "parent"],
    "options_hi": ["super", "this", "base", "parent"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which TypeScript feature allows you to define a function that never returns normally?",
    "question_hi": "कौन सा TypeScript feature function को define करने देता है जो कभी normal return नहीं करता?",
    "options_en": ["never type", "void type", "any", "unknown"],
    "options_hi": ["never type", "void type", "any", "unknown"],
    "answer_en": "never type",
    "answer_hi": "never type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which TypeScript keyword is used to define an abstract class?",
    "question_hi": "कौन सा TypeScript keyword abstract class define करने के लिए use होता है?",
    "options_en": ["abstract", "interface", "class", "final"],
    "options_hi": ["abstract", "interface", "class", "final"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which TypeScript keyword defines a type-safe enum with string values?",
    "question_hi": "कौन सा TypeScript keyword string values के साथ type-safe enum define करता है?",
    "options_en": ["enum", "type", "interface", "const enum"],
    "options_hi": ["enum", "type", "interface", "const enum"],
    "answer_en": "const enum",
    "answer_hi": "const enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which TypeScript keyword allows declaring a tuple type?",
    "question_hi": "कौन सा TypeScript keyword tuple type declare करने के लिए use होता है?",
    "options_en": ["[ ]", "tuple", "array", "any"],
    "options_hi": ["[ ]", "tuple", "array", "any"],
    "answer_en": "[ ]",
    "answer_hi": "[ ]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which TypeScript feature allows you to define a type with dynamic keys?",
    "question_hi": "कौन सा TypeScript feature dynamic keys के साथ type define करने देता है?",
    "options_en": ["index signature", "mapped types", "union types", "intersection types"],
    "options_hi": ["index signature", "mapped types", "union types", "intersection types"],
    "answer_en": "index signature",
    "answer_hi": "index signature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which TypeScript feature allows enforcing immutability for objects?",
    "question_hi": "कौन सा TypeScript feature objects के लिए immutability enforce करता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which TypeScript type allows representing multiple types in a single variable?",
    "question_hi": "कौन सा TypeScript type single variable में multiple types represent करने देता है?",
    "options_en": ["union type", "intersection type", "any", "unknown"],
    "options_hi": ["union type", "intersection type", "any", "unknown"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which TypeScript feature allows creating a type by combining multiple types?",
    "question_hi": "कौन सा TypeScript feature multiple types को combine करके नया type बनाता है?",
    "options_en": ["intersection type", "union type", "any", "unknown"],
    "options_hi": ["intersection type", "union type", "any", "unknown"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which TypeScript keyword allows type assertion to override the inferred type?",
    "question_hi": "कौन सा TypeScript keyword type assertion के लिए use होता है जिससे inferred type override किया जा सके?",
    "options_en": ["as", "<type>", "typeof", "instanceof"],
    "options_hi": ["as", "<type>", "typeof", "instanceof"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which TypeScript feature allows declaring constants with specific literal types?",
    "question_hi": "कौन सा TypeScript feature constants को specific literal types के साथ declare करने देता है?",
    "options_en": ["literal types", "enum", "any", "unknown"],
    "options_hi": ["literal types", "enum", "any", "unknown"],
    "answer_en": "literal types",
    "answer_hi": "literal types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which TypeScript keyword is used to define a namespace?",
    "question_hi": "कौन सा TypeScript keyword namespace define करने के लिए use होता है?",
    "options_en": ["namespace", "module", "package", "interface"],
    "options_hi": ["namespace", "module", "package", "interface"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which TypeScript feature allows defining a type that depends on a condition?",
    "question_hi": "कौन सा TypeScript feature conditional type define करने देता है जो condition पर depend करता है?",
    "options_en": ["conditional types", "mapped types", "union types", "intersection types"],
    "options_hi": ["conditional types", "mapped types", "union types", "intersection types"],
    "answer_en": "conditional types",
    "answer_hi": "conditional types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which TypeScript keyword is used to declare an interface?",
    "question_hi": "कौन सा TypeScript keyword interface declare करने के लिए use होता है?",
    "options_en": ["interface", "type", "class", "enum"],
    "options_hi": ["interface", "type", "class", "enum"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is TypeScript primarily used for?",
    "question_hi": "TypeScript मुख्य रूप से किसके लिए उपयोग किया जाता है?",
    "options_en": ["Adding static types to JavaScript", "Styling HTML pages", "Managing databases", "Creating CSS animations"],
    "options_hi": ["JavaScript में static types जोड़ने के लिए", "HTML पेज स्टाइल करने के लिए", "Databases manage करने के लिए", "CSS animations बनाने के लिए"],
    "answer_en": "Adding static types to JavaScript",
    "answer_hi": "JavaScript में static types जोड़ने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which TypeScript keyword is used to define a variable whose value cannot change?",
    "question_hi": "कौन सा TypeScript keyword variable define करता है जिसकी value change नहीं हो सकती?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which TypeScript type is safer than 'any' because it forces type checking before usage?",
    "question_hi": "कौन सा TypeScript type 'any' से safer है क्योंकि यह usage से पहले type checking force करता है?",
    "options_en": ["unknown", "any", "void", "never"],
    "options_hi": ["unknown", "any", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which TypeScript feature allows creating a new type from an existing type with modifications?",
    "question_hi": "कौन सा TypeScript feature existing type से modifications के साथ नया type बनाने देता है?",
    "options_en": ["mapped types", "union types", "interfaces", "enums"],
    "options_hi": ["mapped types", "union types", "interfaces", "enums"],
    "answer_en": "mapped types",
    "answer_hi": "mapped types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which TypeScript keyword declares an interface?",
    "question_hi": "कौन सा TypeScript keyword interface declare करता है?",
    "options_en": ["interface", "type", "class", "enum"],
    "options_hi": ["interface", "type", "class", "enum"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which TypeScript keyword allows defining a type alias?",
    "question_hi": "कौन सा TypeScript keyword type alias define करने के लिए use होता है?",
    "options_en": ["type", "interface", "class", "enum"],
    "options_hi": ["type", "interface", "class", "enum"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which TypeScript feature allows defining multiple possible types for a variable?",
    "question_hi": "कौन सा TypeScript feature variable के लिए multiple possible types define करने देता है?",
    "options_en": ["union types", "intersection types", "generics", "any"],
    "options_hi": ["union types", "intersection types", "generics", "any"],
    "answer_en": "union types",
    "answer_hi": "union types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which TypeScript feature allows combining multiple types into one?",
    "question_hi": "कौन सा TypeScript feature multiple types को combine करके एक type बनाता है?",
    "options_en": ["intersection types", "union types", "any", "unknown"],
    "options_hi": ["intersection types", "union types", "any", "unknown"],
    "answer_en": "intersection types",
    "answer_hi": "intersection types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which TypeScript keyword is used to define an enumeration?",
    "question_hi": "कौन सा TypeScript keyword enumeration define करता है?",
    "options_en": ["enum", "type", "interface", "class"],
    "options_hi": ["enum", "type", "interface", "class"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which TypeScript type represents an object with unknown property keys and values?",
    "question_hi": "कौन सा TypeScript type ऐसे object को represent करता है जिसके property keys और values unknown हों?",
    "options_en": ["Record<string, any>", "object", "any", "unknown"],
    "options_hi": ["Record<string, any>", "object", "any", "unknown"],
    "answer_en": "Record<string, any>",
    "answer_hi": "Record<string, any>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which TypeScript keyword ensures a method must be implemented in subclasses?",
    "question_hi": "कौन सा TypeScript keyword subclasses में method implement करने को अनिवार्य बनाता है?",
    "options_en": ["abstract", "override", "final", "interface"],
    "options_hi": ["abstract", "override", "final", "interface"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which TypeScript keyword allows creating a singleton pattern for a class?",
    "question_hi": "कौन सा TypeScript keyword class के लिए singleton pattern बनाने देता है?",
    "options_en": ["private constructor", "static", "readonly", "protected"],
    "options_hi": ["private constructor", "static", "readonly", "protected"],
    "answer_en": "private constructor",
    "answer_hi": "private constructor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which TypeScript feature allows extracting return type of a function?",
    "question_hi": "कौन सा TypeScript feature function का return type extract करने देता है?",
    "options_en": ["ReturnType<T>", "Parameters<T>", "typeof", "instanceof"],
    "options_hi": ["ReturnType<T>", "Parameters<T>", "typeof", "instanceof"],
    "answer_en": "ReturnType<T>",
    "answer_hi": "ReturnType<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which TypeScript feature extracts parameter types of a function as a tuple?",
    "question_hi": "कौन सा TypeScript feature function के parameter types को tuple के रूप में extract करता है?",
    "options_en": ["Parameters<T>", "ReturnType<T>", "typeof", "instanceof"],
    "options_hi": ["Parameters<T>", "ReturnType<T>", "typeof", "instanceof"],
    "answer_en": "Parameters<T>",
    "answer_hi": "Parameters<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which TypeScript feature allows declaring multiple types for a single property?",
    "question_hi": "कौन सा TypeScript feature single property के लिए multiple types declare करने देता है?",
    "options_en": ["union type", "intersection type", "any", "unknown"],
    "options_hi": ["union type", "intersection type", "any", "unknown"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which TypeScript feature combines multiple types into one type?",
    "question_hi": "कौन सा TypeScript feature multiple types को combine करके एक type बनाता है?",
    "options_en": ["intersection type", "union type", "any", "unknown"],
    "options_hi": ["intersection type", "union type", "any", "unknown"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which TypeScript utility type constructs type with all properties of T set to optional?",
    "question_hi": "कौन सा TypeScript utility type T की सभी properties को optional बनाता है?",
    "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T>"],
    "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which TypeScript utility type constructs type with all properties of T set to required?",
    "question_hi": "कौन सा TypeScript utility type T की सभी properties को required बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which TypeScript feature ensures a value matches one of the specified literal types?",
    "question_hi": "कौन सा TypeScript feature value को specified literal types में से किसी एक से match करवाता है?",
    "options_en": ["literal types", "enum", "any", "unknown"],
    "options_hi": ["literal types", "enum", "any", "unknown"],
    "answer_en": "literal types",
    "answer_hi": "literal types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which TypeScript keyword allows extending a class?",
    "question_hi": "कौन सा TypeScript keyword class extend करने के लिए use होता है?",
    "options_en": ["extends", "implements", "super", "inherits"],
    "options_hi": ["extends", "implements", "super", "inherits"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which TypeScript keyword allows a class to implement an interface?",
    "question_hi": "कौन सा TypeScript keyword class को interface implement करने देता है?",
    "options_en": ["implements", "extends", "super", "inherits"],
    "options_hi": ["implements", "extends", "super", "inherits"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which TypeScript keyword allows defining a read-only property in a class?",
    "question_hi": "कौन सा TypeScript keyword class में read-only property define करता है?",
    "options_en": ["readonly", "private", "protected", "public"],
    "options_hi": ["readonly", "private", "protected", "public"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which TypeScript feature allows defining type-safe enums?",
    "question_hi": "कौन सा TypeScript feature type-safe enums define करने देता है?",
    "options_en": ["enum", "literal types", "union types", "intersection types"],
    "options_hi": ["enum", "literal types", "union types", "intersection types"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which TypeScript keyword declares a generic class or function?",
    "question_hi": "कौन सा TypeScript keyword generic class या function declare करने के लिए use होता है?",
    "options_en": ["<T>", "type", "interface", "class"],
    "options_hi": ["<T>", "type", "interface", "class"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which TypeScript keyword is used to check the type of a variable at runtime?",
    "question_hi": "कौन सा TypeScript keyword runtime में variable के type को check करने के लिए use होता है?",
    "options_en": ["typeof", "instanceof", "as", "is"],
    "options_hi": ["typeof", "instanceof", "as", "is"],
    "answer_en": "typeof",
    "answer_hi": "typeof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which TypeScript keyword is used to check if an object is an instance of a class?",
    "question_hi": "कौन सा TypeScript keyword object को class का instance check करने के लिए use होता है?",
    "options_en": ["instanceof", "typeof", "as", "is"],
    "options_hi": ["instanceof", "typeof", "as", "is"],
    "answer_en": "instanceof",
    "answer_hi": "instanceof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which TypeScript feature allows defining a type conditionally based on another type?",
    "question_hi": "कौन सा TypeScript feature type को दूसरे type के आधार पर conditionally define करता है?",
    "options_en": ["conditional types", "mapped types", "union types", "intersection types"],
    "options_hi": ["conditional types", "mapped types", "union types", "intersection types"],
    "answer_en": "conditional types",
    "answer_hi": "conditional types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which TypeScript feature allows defining a type by picking properties from another type?",
    "question_hi": "कौन सा TypeScript feature एक type से properties pick करके नया type define करता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which TypeScript feature allows defining a type by excluding certain properties from another type?",
    "question_hi": "कौन सा TypeScript feature कुछ properties को exclude करके नया type define करता है?",
    "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which TypeScript utility type makes all properties optional?",
    "question_hi": "कौन सा TypeScript utility type सभी properties को optional बनाता है?",
    "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T>"],
    "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which TypeScript utility type makes all properties required?",
    "question_hi": "कौन सा TypeScript utility type सभी properties को required बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which TypeScript utility type sets all properties of T to readonly?",
    "question_hi": "कौन सा TypeScript utility type T की सभी properties को readonly बनाता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which TypeScript utility type constructs type by excluding undefined and null from T?",
    "question_hi": "कौन सा TypeScript utility type T से undefined और null exclude करके type बनाता है?",
    "options_en": ["NonNullable<T>", "Partial<T>", "Required<T>", "Readonly<T>"],
    "options_hi": ["NonNullable<T>", "Partial<T>", "Required<T>", "Readonly<T>"],
    "answer_en": "NonNullable<T>",
    "answer_hi": "NonNullable<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which TypeScript utility type returns the type of all property names of T?",
    "question_hi": "कौन सा TypeScript utility type T की सभी property names का type return करता है?",
    "options_en": ["keyof T", "Partial<T>", "Required<T>", "Readonly<T>"],
    "options_hi": ["keyof T", "Partial<T>", "Required<T>", "Readonly<T>"],
    "answer_en": "keyof T",
    "answer_hi": "keyof T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which TypeScript feature allows conditional checks based on type using 'extends'?",
    "question_hi": "कौन सा TypeScript feature 'extends' के माध्यम से type पर conditional checks करने देता है?",
    "options_en": ["conditional types", "mapped types", "union types", "intersection types"],
    "options_hi": ["conditional types", "mapped types", "union types", "intersection types"],
    "answer_en": "conditional types",
    "answer_hi": "conditional types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which TypeScript feature extracts the return type of a function?",
    "question_hi": "कौन सा TypeScript feature function का return type extract करता है?",
    "options_en": ["ReturnType<T>", "Parameters<T>", "typeof", "instanceof"],
    "options_hi": ["ReturnType<T>", "Parameters<T>", "typeof", "instanceof"],
    "answer_en": "ReturnType<T>",
    "answer_hi": "ReturnType<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which TypeScript feature extracts the parameter types of a function as a tuple?",
    "question_hi": "कौन सा TypeScript feature function के parameter types को tuple में extract करता है?",
    "options_en": ["Parameters<T>", "ReturnType<T>", "typeof", "instanceof"],
    "options_hi": ["Parameters<T>", "ReturnType<T>", "typeof", "instanceof"],
    "answer_en": "Parameters<T>",
    "answer_hi": "Parameters<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which TypeScript type represents a value that never occurs?",
    "question_hi": "कौन सा TypeScript type ऐसे value को represent करता है जो कभी occur नहीं होता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which TypeScript type represents a function that does not return a value?",
    "question_hi": "कौन सा TypeScript type ऐसे function को represent करता है जो कोई value return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which TypeScript keyword pauses execution inside an async function?",
    "question_hi": "कौन सा keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
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