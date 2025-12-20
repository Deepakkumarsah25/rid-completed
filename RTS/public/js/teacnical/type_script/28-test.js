const questions =[
  {
    "num": 1,
    "question_en": "Which TypeScript type is used for any value when type is not known?",
    "question_hi": "कौन सा TypeScript type किसी भी value के लिए उपयोग होता है जब type ज्ञात न हो?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which TypeScript type represents a value that never occurs?",
    "question_hi": "कौन सा TypeScript type किसी value के कभी ना होने को दर्शाता है?",
    "options_en": ["never", "any", "unknown", "void"],
    "options_hi": ["never", "any", "unknown", "void"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which TypeScript type is used to declare a function that does not return a value?",
    "question_hi": "कौन सा TypeScript type ऐसे function को declare करता है जो कोई value return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which TypeScript feature allows combining multiple types into one using | operator?",
    "question_hi": "कौन सा TypeScript feature | operator का उपयोग करके multiple types को combine करता है?",
    "options_en": ["Union Types", "Intersection Types", "Literal Types", "Enums"],
    "options_hi": ["Union Types", "Intersection Types", "Literal Types", "Enums"],
    "answer_en": "Union Types",
    "answer_hi": "Union Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which TypeScript feature allows creating a type with all properties required from another type?",
    "question_hi": "कौन सा TypeScript feature किसी type की सभी properties required बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Omit<T,K>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Omit<T,K>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which TypeScript feature allows creating a type with all properties optional?",
    "question_hi": "कौन सा TypeScript feature सभी properties को optional बनाता है?",
    "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
    "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which TypeScript feature allows defining a read-only property?",
    "question_hi": "कौन सा TypeScript feature read-only property define करता है?",
    "options_en": ["readonly", "private", "protected", "public"],
    "options_hi": ["readonly", "private", "protected", "public"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which TypeScript keyword is used to define a class inheritance?",
    "question_hi": "Class inheritance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["extends", "implements", "super", "inherits"],
    "options_hi": ["extends", "implements", "super", "inherits"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which TypeScript keyword is used to implement an interface?",
    "question_hi": "किस keyword का उपयोग interface implement करने के लिए होता है?",
    "options_en": ["implements", "extends", "super", "interface"],
    "options_hi": ["implements", "extends", "super", "interface"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which TypeScript feature allows aliasing a type or union of types?",
    "question_hi": "कौन सा feature type या union of types को alias करने देता है?",
    "options_en": ["type alias", "interface", "enum", "class"],
    "options_hi": ["type alias", "interface", "enum", "class"],
    "answer_en": "type alias",
    "answer_hi": "type alias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which TypeScript feature allows creating a type with only selected properties from another type?",
    "question_hi": "कौन सा TypeScript feature किसी type की केवल चुनी हुई properties को use करने देता है?",
    "options_en": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T,K>",
    "answer_hi": "Pick<T,K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which TypeScript feature allows creating a type by excluding specific properties?",
    "question_hi": "कौन सा TypeScript feature किसी type से specific properties exclude करने देता है?",
    "options_en": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T,K>",
    "answer_hi": "Omit<T,K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which TypeScript feature allows creating a union of string literal types?",
    "question_hi": "कौन सा TypeScript feature string literal types का union बनाने देता है?",
    "options_en": ["Literal Types", "Enums", "Union Types", "Intersection Types"],
    "options_hi": ["Literal Types", "Enums", "Union Types", "Intersection Types"],
    "answer_en": "Literal Types",
    "answer_hi": "Literal Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which TypeScript feature allows combining multiple types to create one type with all properties?",
    "question_hi": "कौन सा TypeScript feature multiple types combine करके एक type बनाता है जिसमें सभी properties शामिल हों?",
    "options_en": ["Intersection Types", "Union Types", "Literal Types", "Enums"],
    "options_hi": ["Intersection Types", "Union Types", "Literal Types", "Enums"],
    "answer_en": "Intersection Types",
    "answer_hi": "Intersection Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which TypeScript keyword allows a class to define abstract methods?",
    "question_hi": "कौन सा TypeScript keyword class को abstract methods define करने देता है?",
    "options_en": ["abstract", "implements", "extends", "readonly"],
    "options_hi": ["abstract", "implements", "extends", "readonly"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which TypeScript feature allows asserting the type of a variable to a more specific type?",
    "question_hi": "कौन सा TypeScript feature variable का type more specific type में assert करने देता है?",
    "options_en": ["Type Assertions", "Type Guards", "Generics", "Union Types"],
    "options_hi": ["Type Assertions", "Type Guards", "Generics", "Union Types"],
    "answer_en": "Type Assertions",
    "answer_hi": "Type Assertions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which TypeScript feature allows checking types at runtime for safety?",
    "question_hi": "कौन सा TypeScript feature runtime पर type check करके safety provide करता है?",
    "options_en": ["Type Guards", "Type Assertions", "Generics", "Union Types"],
    "options_hi": ["Type Guards", "Type Assertions", "Generics", "Union Types"],
    "answer_en": "Type Guards",
    "answer_hi": "Type Guards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which TypeScript feature allows defining indexable types for objects?",
    "question_hi": "कौन सा TypeScript feature objects के लिए indexable types define करने देता है?",
    "options_en": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "options_hi": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "answer_en": "Index Signatures",
    "answer_hi": "Index Signatures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which TypeScript feature allows defining tuples with fixed types and length?",
    "question_hi": "कौन सा TypeScript feature fixed types और length वाला tuple define करता है?",
    "options_en": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "options_hi": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "answer_en": "Tuples",
    "answer_hi": "Tuples",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which TypeScript feature allows creating generic functions or classes?",
    "question_hi": "कौन सा TypeScript feature generic functions या classes बनाने देता है?",
    "options_en": ["Generics", "Type Guards", "Type Assertions", "Literal Types"],
    "options_hi": ["Generics", "Type Guards", "Type Assertions", "Literal Types"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which TypeScript feature allows creating a mapped type from another type?",
    "question_hi": "कौन सा TypeScript feature किसी type से mapped type बनाने देता है?",
    "options_en": ["Mapped Types", "Union Types", "Intersection Types", "Literal Types"],
    "options_hi": ["Mapped Types", "Union Types", "Intersection Types", "Literal Types"],
    "answer_en": "Mapped Types",
    "answer_hi": "Mapped Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which TypeScript operator is used to get the type of a variable or property?",
    "question_hi": "कौन सा TypeScript operator variable या property का type पता करने के लिए use होता है?",
    "options_en": ["typeof", "keyof", "instanceof", "as"],
    "options_hi": ["typeof", "keyof", "instanceof", "as"],
    "answer_en": "typeof",
    "answer_hi": "typeof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which TypeScript operator is used to get the keys of a type?",
    "question_hi": "कौन सा TypeScript operator किसी type की keys निकालने के लिए use होता है?",
    "options_en": ["keyof", "typeof", "instanceof", "as"],
    "options_hi": ["keyof", "typeof", "instanceof", "as"],
    "answer_en": "keyof",
    "answer_hi": "keyof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which TypeScript feature allows extracting a subset type from another type?",
    "question_hi": "कौन सा TypeScript feature किसी type से subset type निकालने देता है?",
    "options_en": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T,K>",
    "answer_hi": "Pick<T,K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which TypeScript feature allows making a type optional for all its properties?",
    "question_hi": "कौन सा TypeScript feature type की सभी properties को optional बनाता है?",
    "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Omit<T,K>"],
    "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Omit<T,K>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which TypeScript feature allows making a type read-only?",
    "question_hi": "कौन सा TypeScript feature type को read-only बनाता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Omit<T,K>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Omit<T,K>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which TypeScript feature allows defining a type conditionally based on another type?",
    "question_hi": "कौन सा TypeScript feature एक type को condition के आधार पर define करता है?",
    "options_en": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "options_hi": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "answer_en": "Conditional Types",
    "answer_hi": "Conditional Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which TypeScript feature allows inferring types inside conditional types?",
    "question_hi": "कौन सा TypeScript feature conditional types के अंदर types infer करने देता है?",
    "options_en": ["infer", "keyof", "typeof", "as const"],
    "options_hi": ["infer", "keyof", "typeof", "as const"],
    "answer_en": "infer",
    "answer_hi": "infer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which TypeScript feature allows asserting a constant type literal for a variable?",
    "question_hi": "कौन सा TypeScript feature variable के लिए constant type literal assert करने देता है?",
    "options_en": ["as const", "type alias", "enum", "readonly"],
    "options_hi": ["as const", "type alias", "enum", "readonly"],
    "answer_en": "as const",
    "answer_hi": "as const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which TypeScript feature allows safely accessing nested object properties?",
    "question_hi": "कौन सा TypeScript feature nested object properties को safely access करने देता है?",
    "options_en": ["Optional Chaining", "Nullish Coalescing", "Type Assertion", "Type Guard"],
    "options_hi": ["Optional Chaining", "Nullish Coalescing", "Type Assertion", "Type Guard"],
    "answer_en": "Optional Chaining",
    "answer_hi": "Optional Chaining",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which TypeScript feature allows providing a default value when a property is null or undefined?",
    "question_hi": "कौन सा TypeScript feature default value provide करता है जब property null या undefined हो?",
    "options_en": ["Nullish Coalescing Operator (??)", "Optional Chaining", "Type Guard", "Type Assertion"],
    "options_hi": ["Nullish Coalescing Operator (??)", "Optional Chaining", "Type Guard", "Type Assertion"],
    "answer_en": "Nullish Coalescing Operator (??)",
    "answer_hi": "Nullish Coalescing Operator (??)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which TypeScript feature allows you to define a variable type from the type of another variable?",
    "question_hi": "कौन सा TypeScript feature किसी variable के type से नए variable का type define करने देता है?",
    "options_en": ["typeof", "keyof", "infer", "as const"],
    "options_hi": ["typeof", "keyof", "infer", "as const"],
    "answer_en": "typeof",
    "answer_hi": "typeof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which TypeScript feature allows creating type-safe enums?",
    "question_hi": "कौन सा TypeScript feature type-safe enums बनाता है?",
    "options_en": ["Enums", "Union Types", "Literal Types", "Intersection Types"],
    "options_hi": ["Enums", "Union Types", "Literal Types", "Intersection Types"],
    "answer_en": "Enums",
    "answer_hi": "Enums",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which TypeScript keyword allows a subclass to call a method from its parent class?",
    "question_hi": "कौन सा TypeScript keyword subclass को parent class का method call करने देता है?",
    "options_en": ["super", "this", "extends", "implements"],
    "options_hi": ["super", "this", "extends", "implements"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which TypeScript feature allows asserting a more specific type from a general type?",
    "question_hi": "कौन सा TypeScript feature general type से more specific type assert करने देता है?",
    "options_en": ["Type Assertions", "Type Guards", "Generics", "Union Types"],
    "options_hi": ["Type Assertions", "Type Guards", "Generics", "Union Types"],
    "answer_en": "Type Assertions",
    "answer_hi": "Type Assertions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which TypeScript feature allows defining a type alias for a function signature?",
    "question_hi": "कौन सा TypeScript feature function signature के लिए type alias define करता है?",
    "options_en": ["type alias", "interface", "class", "enum"],
    "options_hi": ["type alias", "interface", "class", "enum"],
    "answer_en": "type alias",
    "answer_hi": "type alias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which TypeScript feature allows extracting the type of elements from an array type?",
    "question_hi": "कौन सा TypeScript feature array type के elements का type extract करता है?",
    "options_en": ["infer", "keyof", "typeof", "as const"],
    "options_hi": ["infer", "keyof", "typeof", "as const"],
    "answer_en": "infer",
    "answer_hi": "infer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which TypeScript keyword allows creating an abstract class?",
    "question_hi": "कौन सा TypeScript keyword abstract class बनाने के लिए उपयोग होता है?",
    "options_en": ["abstract", "extends", "implements", "readonly"],
    "options_hi": ["abstract", "extends", "implements", "readonly"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which TypeScript feature allows combining multiple interfaces into one?",
    "question_hi": "कौन सा TypeScript feature multiple interfaces को एक में combine करता है?",
    "options_en": ["Interface Merging", "Union Types", "Intersection Types", "Literal Types"],
    "options_hi": ["Interface Merging", "Union Types", "Intersection Types", "Literal Types"],
    "answer_en": "Interface Merging",
    "answer_hi": "Interface Merging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which TypeScript feature allows you to extract a type from another type using keyof?",
    "question_hi": "कौन सा TypeScript feature keyof का उपयोग करके किसी type से type extract करता है?",
    "options_en": ["keyof", "typeof", "infer", "Partial<T>"],
    "options_hi": ["keyof", "typeof", "infer", "Partial<T>"],
    "answer_en": "keyof",
    "answer_hi": "keyof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which TypeScript feature allows a variable to hold either a type or null?",
    "question_hi": "कौन सा TypeScript feature variable को किसी type या null रखने देता है?",
    "options_en": ["Union Types with null", "Intersection Types", "Literal Types", "any"],
    "options_hi": ["Union Types with null", "Intersection Types", "Literal Types", "any"],
    "answer_en": "Union Types with null",
    "answer_hi": "Union Types with null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which TypeScript feature allows a function to return multiple types using | operator?",
    "question_hi": "कौन सा TypeScript feature function को multiple types return करने देता है | operator के साथ?",
    "options_en": ["Union Types", "Intersection Types", "Literal Types", "Generics"],
    "options_hi": ["Union Types", "Intersection Types", "Literal Types", "Generics"],
    "answer_en": "Union Types",
    "answer_hi": "Union Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which TypeScript feature allows defining readonly arrays?",
    "question_hi": "कौन सा TypeScript feature readonly arrays define करने देता है?",
    "options_en": ["ReadonlyArray<T>", "Tuple<T>", "Array<T>", "Readonly<T>"],
    "options_hi": ["ReadonlyArray<T>", "Tuple<T>", "Array<T>", "Readonly<T>"],
    "answer_en": "ReadonlyArray<T>",
    "answer_hi": "ReadonlyArray<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which TypeScript feature allows defining generic constraints for types?",
    "question_hi": "कौन सा TypeScript feature types के लिए generic constraints define करता है?",
    "options_en": ["extends in Generics", "implements", "Partial<T>", "Readonly<T>"],
    "options_hi": ["extends in Generics", "implements", "Partial<T>", "Readonly<T>"],
    "answer_en": "extends in Generics",
    "answer_hi": "extends in Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which TypeScript feature allows ensuring a property exists and is not null/undefined before accessing?",
    "question_hi": "कौन सा TypeScript feature property access करने से पहले सुनिश्चित करता है कि property exist करती है और null/undefined नहीं है?",
    "options_en": ["Non-null Assertion Operator (!)", "Optional Chaining", "Nullish Coalescing", "Type Guard"],
    "options_hi": ["Non-null Assertion Operator (!)", "Optional Chaining", "Nullish Coalescing", "Type Guard"],
    "answer_en": "Non-null Assertion Operator (!)",
    "answer_hi": "Non-null Assertion Operator (!)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which TypeScript feature allows defining an interface for function signatures?",
    "question_hi": "कौन सा TypeScript feature function signatures के लिए interface define करता है?",
    "options_en": ["Call Signatures in Interfaces", "Type Alias", "Enum", "Class"],
    "options_hi": ["Call Signatures in Interfaces", "Type Alias", "Enum", "Class"],
    "answer_en": "Call Signatures in Interfaces",
    "answer_hi": "Call Signatures in Interfaces",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which TypeScript feature allows overloading a function with multiple signatures?",
    "question_hi": "कौन सा TypeScript feature function को multiple signatures के साथ overload करने देता है?",
    "options_en": ["Function Overloads", "Union Types", "Generics", "Interface"],
    "options_hi": ["Function Overloads", "Union Types", "Generics", "Interface"],
    "answer_en": "Function Overloads",
    "answer_hi": "Function Overloads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which TypeScript feature allows defining an object type with dynamic keys?",
    "question_hi": "कौन सा TypeScript feature object type को dynamic keys के साथ define करता है?",
    "options_en": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "options_hi": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "answer_en": "Index Signatures",
    "answer_hi": "Index Signatures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which TypeScript feature allows defining a variable as the type of another variable's property?",
    "question_hi": "कौन सा TypeScript feature variable को किसी और variable की property के type के रूप में define करता है?",
    "options_en": ["typeof obj.property", "keyof", "infer", "as const"],
    "options_hi": ["typeof obj.property", "keyof", "infer", "as const"],
    "answer_en": "typeof obj.property",
    "answer_hi": "typeof obj.property",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which TypeScript feature allows defining a discriminated union for type-safe object handling?",
    "question_hi": "कौन सा TypeScript feature type-safe object handling के लिए discriminated union define करता है?",
    "options_en": ["Discriminated Unions", "Intersection Types", "Literal Types", "Union Types"],
    "options_hi": ["Discriminated Unions", "Intersection Types", "Literal Types", "Union Types"],
    "answer_en": "Discriminated Unions",
    "answer_hi": "Discriminated Unions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which TypeScript feature allows extracting a type from an array or tuple elements?",
    "question_hi": "कौन सा TypeScript feature array या tuple elements से type extract करता है?",
    "options_en": ["infer", "typeof", "keyof", "as const"],
    "options_hi": ["infer", "typeof", "keyof", "as const"],
    "answer_en": "infer",
    "answer_hi": "infer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which TypeScript feature allows defining a class property as private to restrict access?",
    "question_hi": "कौन सा TypeScript feature class property को private define करता है जिससे access restricted हो?",
    "options_en": ["private", "protected", "public", "readonly"],
    "options_hi": ["private", "protected", "public", "readonly"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which TypeScript feature allows defining a class property as protected for subclass access?",
    "question_hi": "कौन सा TypeScript feature class property को protected define करता है ताकि subclass access कर सके?",
    "options_en": ["protected", "private", "public", "readonly"],
    "options_hi": ["protected", "private", "public", "readonly"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which TypeScript feature allows defining an interface extending multiple interfaces?",
    "question_hi": "कौन सा TypeScript feature interface को multiple interfaces extend करने देता है?",
    "options_en": ["interface extends", "class extends", "type alias", "enum"],
    "options_hi": ["interface extends", "class extends", "type alias", "enum"],
    "answer_en": "interface extends",
    "answer_hi": "interface extends",
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
    "question_en": "Which TypeScript feature allows creating a type with all properties required?",
    "question_hi": "कौन सा TypeScript feature सभी properties को required बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Omit<T,K>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Omit<T,K>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which TypeScript feature allows combining multiple types into one with all properties?",
    "question_hi": "कौन सा TypeScript feature multiple types को एक में combine करता है जिसमें सभी properties हों?",
    "options_en": ["Intersection Types (&)", "Union Types (|)", "Literal Types", "Mapped Types"],
    "options_hi": ["Intersection Types (&)", "Union Types (|)", "Literal Types", "Mapped Types"],
    "answer_en": "Intersection Types (&)",
    "answer_hi": "Intersection Types (&)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which TypeScript feature allows creating a type based on a mapped transformation of another type?",
    "question_hi": "कौन सा TypeScript feature किसी type पर mapped transformation करके नया type बनाता है?",
    "options_en": ["Mapped Types", "Conditional Types", "Union Types", "Literal Types"],
    "options_hi": ["Mapped Types", "Conditional Types", "Union Types", "Literal Types"],
    "answer_en": "Mapped Types",
    "answer_hi": "Mapped Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which TypeScript feature allows creating type-safe discriminated unions?",
    "question_hi": "कौन सा TypeScript feature type-safe discriminated unions बनाता है?",
    "options_en": ["Discriminated Unions", "Intersection Types", "Literal Types", "Union Types"],
    "options_hi": ["Discriminated Unions", "Intersection Types", "Literal Types", "Union Types"],
    "answer_en": "Discriminated Unions",
    "answer_hi": "Discriminated Unions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which TypeScript feature allows inferring types from function return values?",
    "question_hi": "कौन सा TypeScript feature function return values से type infer करता है?",
    "options_en": ["ReturnType<T>", "Parameters<T>", "infer", "keyof"],
    "options_hi": ["ReturnType<T>", "Parameters<T>", "infer", "keyof"],
    "answer_en": "ReturnType<T>",
    "answer_hi": "ReturnType<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which TypeScript feature allows extracting types of function parameters?",
    "question_hi": "कौन सा TypeScript feature function parameters के types extract करता है?",
    "options_en": ["Parameters<T>", "ReturnType<T>", "infer", "keyof"],
    "options_hi": ["Parameters<T>", "ReturnType<T>", "infer", "keyof"],
    "answer_en": "Parameters<T>",
    "answer_hi": "Parameters<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which TypeScript feature allows defining a class property as readonly?",
    "question_hi": "कौन सा TypeScript feature class property को readonly define करता है?",
    "options_en": ["readonly", "private", "protected", "public"],
    "options_hi": ["readonly", "private", "protected", "public"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which TypeScript feature allows specifying optional parameters in a function?",
    "question_hi": "कौन सा TypeScript feature function में optional parameters specify करने देता है?",
    "options_en": ["Optional Parameters (?)", "Default Parameters", "Rest Parameters", "Union Types"],
    "options_hi": ["Optional Parameters (?)", "Default Parameters", "Rest Parameters", "Union Types"],
    "answer_en": "Optional Parameters (?)",
    "answer_hi": "Optional Parameters (?)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which TypeScript feature allows defining a rest parameter to accept multiple arguments?",
    "question_hi": "कौन सा TypeScript feature rest parameter define करता है जो multiple arguments accept करता है?",
    "options_en": ["Rest Parameters (...)", "Optional Parameters (?)", "Default Parameters", "Tuple Types"],
    "options_hi": ["Rest Parameters (...)", "Optional Parameters (?)", "Default Parameters", "Tuple Types"],
    "answer_en": "Rest Parameters (...)",
    "answer_hi": "Rest Parameters (...)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which TypeScript feature allows defining default values for function parameters?",
    "question_hi": "कौन सा TypeScript feature function parameters के लिए default values define करता है?",
    "options_en": ["Default Parameters", "Optional Parameters", "Rest Parameters", "Union Types"],
    "options_hi": ["Default Parameters", "Optional Parameters", "Rest Parameters", "Union Types"],
    "answer_en": "Default Parameters",
    "answer_hi": "Default Parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which TypeScript feature allows safely narrowing types using typeof or instanceof?",
    "question_hi": "कौन सा TypeScript feature types को safely narrow करता है typeof या instanceof के जरिए?",
    "options_en": ["Type Guards", "Type Assertions", "Generics", "Literal Types"],
    "options_hi": ["Type Guards", "Type Assertions", "Generics", "Literal Types"],
    "answer_en": "Type Guards",
    "answer_hi": "Type Guards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which TypeScript feature allows defining function overloads with multiple signatures?",
    "question_hi": "कौन सा TypeScript feature function overload करने के लिए multiple signatures define करता है?",
    "options_en": ["Function Overloads", "Generics", "Union Types", "Intersection Types"],
    "options_hi": ["Function Overloads", "Generics", "Union Types", "Intersection Types"],
    "answer_en": "Function Overloads",
    "answer_hi": "Function Overloads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which TypeScript feature allows defining a type that matches any string key in an object?",
    "question_hi": "कौन सा TypeScript feature किसी object की किसी भी string key को match करने वाला type define करता है?",
    "options_en": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "options_hi": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "answer_en": "Index Signatures",
    "answer_hi": "Index Signatures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which TypeScript feature allows defining a tuple with fixed length and types?",
    "question_hi": "कौन सा TypeScript feature fixed length और types वाला tuple define करता है?",
    "options_en": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "options_hi": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "answer_en": "Tuples",
    "answer_hi": "Tuples",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which TypeScript feature allows combining type checks with null or undefined checks?",
    "question_hi": "कौन सा TypeScript feature type checks को null या undefined checks के साथ combine करता है?",
    "options_en": ["Optional Chaining & Nullish Coalescing", "Type Guards", "Type Assertions", "Generics"],
    "options_hi": ["Optional Chaining & Nullish Coalescing", "Type Guards", "Type Assertions", "Generics"],
    "answer_en": "Optional Chaining & Nullish Coalescing",
    "answer_hi": "Optional Chaining & Nullish Coalescing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which TypeScript feature allows converting one type to another explicitly?",
    "question_hi": "कौन सा TypeScript feature explicitly एक type को दूसरे type में convert करने देता है?",
    "options_en": ["Type Assertions", "Type Guards", "Generics", "Union Types"],
    "options_hi": ["Type Assertions", "Type Guards", "Generics", "Union Types"],
    "answer_en": "Type Assertions",
    "answer_hi": "Type Assertions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which TypeScript feature allows defining a variable with a literal type?",
    "question_hi": "कौन सा TypeScript feature variable को literal type के रूप में define करता है?",
    "options_en": ["Literal Types", "Union Types", "Intersection Types", "Generics"],
    "options_hi": ["Literal Types", "Union Types", "Intersection Types", "Generics"],
    "answer_en": "Literal Types",
    "answer_hi": "Literal Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which TypeScript feature allows creating conditional types based on other types?",
    "question_hi": "कौन सा TypeScript feature अन्य types के आधार पर conditional types बनाता है?",
    "options_en": ["Conditional Types", "Mapped Types", "Literal Types", "Union Types"],
    "options_hi": ["Conditional Types", "Mapped Types", "Literal Types", "Union Types"],
    "answer_en": "Conditional Types",
    "answer_hi": "Conditional Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which TypeScript feature allows excluding certain types from a union type?",
    "question_hi": "कौन सा TypeScript feature union type से कुछ types को exclude करता है?",
    "options_en": ["Exclude<T, U>", "Pick<T, K>", "Omit<T, K>", "Partial<T>"],
    "options_hi": ["Exclude<T, U>", "Pick<T, K>", "Omit<T, K>", "Partial<T>"],
    "answer_en": "Exclude<T, U>",
    "answer_hi": "Exclude<T, U>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which TypeScript feature allows picking specific properties from a type?",
    "question_hi": "कौन सा TypeScript feature किसी type से specific properties pick करता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which TypeScript feature allows creating a type without specific properties?",
    "question_hi": "कौन सा TypeScript feature specific properties के बिना type बनाता है?",
    "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which TypeScript feature allows making all properties of a type optional?",
    "question_hi": "कौन सा TypeScript feature सभी properties को optional बनाता है?",
    "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
    "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which TypeScript feature allows making all properties of a type readonly?",
    "question_hi": "कौन सा TypeScript feature सभी properties को readonly बनाता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which TypeScript feature extracts all keys of a type as a union type?",
    "question_hi": "कौन सा TypeScript feature किसी type की सभी keys को union type के रूप में extract करता है?",
    "options_en": ["keyof T", "typeof T", "infer", "as const"],
    "options_hi": ["keyof T", "typeof T", "infer", "as const"],
    "answer_en": "keyof T",
    "answer_hi": "keyof T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which TypeScript feature infers types within conditional types?",
    "question_hi": "कौन सा TypeScript feature conditional types के अंदर types infer करता है?",
    "options_en": ["infer", "keyof", "typeof", "ReturnType<T>"],
    "options_hi": ["infer", "keyof", "typeof", "ReturnType<T>"],
    "answer_en": "infer",
    "answer_hi": "infer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which TypeScript feature allows creating constant assertions on literals?",
    "question_hi": "कौन सा TypeScript feature literals पर constant assertions बनाता है?",
    "options_en": ["as const", "Type Assertions", "Readonly<T>", "Literal Types"],
    "options_hi": ["as const", "Type Assertions", "Readonly<T>", "Literal Types"],
    "answer_en": "as const",
    "answer_hi": "as const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which TypeScript feature allows ensuring exhaustive checks in switch statements?",
    "question_hi": "कौन सा TypeScript feature switch statements में exhaustive checks सुनिश्चित करता है?",
    "options_en": ["never type", "any type", "unknown type", "void type"],
    "options_hi": ["never type", "any type", "unknown type", "void type"],
    "answer_en": "never type",
    "answer_hi": "never type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which TypeScript feature allows catching any value with unknown type?",
    "question_hi": "कौन सा TypeScript feature unknown type के किसी भी value को catch करता है?",
    "options_en": ["unknown type", "any type", "never type", "void type"],
    "options_hi": ["unknown type", "any type", "never type", "void type"],
    "answer_en": "unknown type",
    "answer_hi": "unknown type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
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
    "num": 85,
    "question_en": "Which TypeScript type allows representing absence of a value?",
    "question_hi": "कौन सा TypeScript type value की absence को represent करता है?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which TypeScript feature allows merging interfaces with the same name?",
    "question_hi": "कौन सा TypeScript feature same name वाले interfaces को merge करता है?",
    "options_en": ["Interface Merging", "Type Alias", "Class Extension", "Enum"],
    "options_hi": ["Interface Merging", "Type Alias", "Class Extension", "Enum"],
    "answer_en": "Interface Merging",
    "answer_hi": "Interface Merging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which TypeScript feature allows combining multiple types in conditional expressions?",
    "question_hi": "कौन सा TypeScript feature conditional expressions में multiple types combine करता है?",
    "options_en": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "options_hi": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "answer_en": "Conditional Types",
    "answer_hi": "Conditional Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which TypeScript feature allows defining a type that is the union of keys of another type?",
    "question_hi": "कौन सा TypeScript feature किसी type की keys का union define करता है?",
    "options_en": ["keyof T", "typeof T", "infer", "as const"],
    "options_hi": ["keyof T", "typeof T", "infer", "as const"],
    "answer_en": "keyof T",
    "answer_hi": "keyof T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which TypeScript feature allows checking the type at runtime to narrow the type?",
    "question_hi": "कौन सा TypeScript feature runtime पर type check करके type narrow करता है?",
    "options_en": ["Type Guards", "Type Assertions", "Generics", "Literal Types"],
    "options_hi": ["Type Guards", "Type Assertions", "Generics", "Literal Types"],
    "answer_en": "Type Guards",
    "answer_hi": "Type Guards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which TypeScript feature allows defining a type-safe array of specific types?",
    "question_hi": "कौन सा TypeScript feature specific types का type-safe array define करता है?",
    "options_en": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "options_hi": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "answer_en": "Tuples",
    "answer_hi": "Tuples",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which TypeScript feature allows creating types dynamically based on other types using keyof and mapped types?",
    "question_hi": "कौन सा TypeScript feature types को dynamically create करता है using keyof और mapped types?",
    "options_en": ["Mapped Types", "Conditional Types", "Literal Types", "Intersection Types"],
    "options_hi": ["Mapped Types", "Conditional Types", "Literal Types", "Intersection Types"],
    "answer_en": "Mapped Types",
    "answer_hi": "Mapped Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which TypeScript feature allows creating strongly typed events in classes?",
    "question_hi": "कौन सा TypeScript feature classes में strongly typed events create करता है?",
    "options_en": ["Generics", "Type Guards", "Union Types", "Intersection Types"],
    "options_hi": ["Generics", "Type Guards", "Union Types", "Intersection Types"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which TypeScript feature allows using a type as a key to another type?",
    "question_hi": "कौन सा TypeScript feature किसी type को दूसरे type की key के रूप में use करने देता है?",
    "options_en": ["Mapped Types", "Conditional Types", "Union Types", "Literal Types"],
    "options_hi": ["Mapped Types", "Conditional Types", "Union Types", "Literal Types"],
    "answer_en": "Mapped Types",
    "answer_hi": "Mapped Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which TypeScript feature allows narrowing unknown type after checking its type?",
    "question_hi": "कौन सा TypeScript feature unknown type को narrow करता है उसके type check करने के बाद?",
    "options_en": ["Type Guards", "Type Assertions", "Generics", "Literal Types"],
    "options_hi": ["Type Guards", "Type Assertions", "Generics", "Literal Types"],
    "answer_en": "Type Guards",
    "answer_hi": "Type Guards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which TypeScript feature allows defining async functions that return a Promise?",
    "question_hi": "कौन सा TypeScript feature async functions define करता है जो Promise return करते हैं?",
    "options_en": ["async/await", "Generators", "Promises", "Callbacks"],
    "options_hi": ["async/await", "Generators", "Promises", "Callbacks"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which TypeScript feature pauses execution inside an async function until a Promise resolves?",
    "question_hi": "कौन सा TypeScript feature async function के अंदर execution को रोकता है जब तक Promise resolve न हो?",
    "options_en": ["await", "async", "yield", "pause"],
    "options_hi": ["await", "async", "yield", "pause"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which TypeScript feature allows defining generator functions?",
    "question_hi": "कौन सा TypeScript feature generator functions define करता है?",
    "options_en": ["function*", "async function", "arrow function", "class method"],
    "options_hi": ["function*", "async function", "arrow function", "class method"],
    "answer_en": "function*",
    "answer_hi": "function*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which TypeScript feature allows yielding multiple values from a generator?",
    "question_hi": "कौन सा TypeScript feature generator से multiple values yield करने देता है?",
    "options_en": ["yield", "return", "await", "next"],
    "options_hi": ["yield", "return", "await", "next"],
    "answer_en": "yield",
    "answer_hi": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which TypeScript feature allows defining type-safe tuples with varying types?",
    "question_hi": "कौन सा TypeScript feature varying types के साथ type-safe tuples define करता है?",
    "options_en": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "options_hi": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "answer_en": "Tuples",
    "answer_hi": "Tuples",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which keyword pauses execution inside an async function?",
    "question_hi": "कौन सा keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
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