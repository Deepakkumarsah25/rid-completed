const questions =  [
  {
    "num": 1,
    "question_en": "Which TypeScript type is used for storing whole numbers?",
    "question_hi": "TypeScript में पूर्ण संख्याओं को संग्रहीत करने के लिए कौन-सा टाइप प्रयोग किया जाता है?",
    "options_en": ["number", "integer", "int", "whole"],
    "options_hi": ["number", "integer", "int", "whole"],
    "answer_en": "number",
    "answer_hi": "number"
  },
  {
    "num": 2,
    "question_en": "What type would you use for a variable that can be either true or false?",
    "question_hi": "एक वेरिएबल के लिए आप कौन-सा टाइप प्रयोग करेंगे जो या तो true या false हो सकता है?",
    "options_en": ["boolean", "bool", "logical", "truthy"],
    "options_hi": ["boolean", "bool", "logical", "truthy"],
    "answer_en": "boolean",
    "answer_hi": "boolean"
  },
  {
    "num": 3,
    "question_en": "Which type is used for textual data in TypeScript?",
    "question_hi": "TypeScript में टेक्स्चुअल डेटा के लिए कौन-सा टाइप प्रयोग किया जाता है?",
    "options_en": ["string", "text", "char", "varchar"],
    "options_hi": ["string", "text", "char", "varchar"],
    "answer_en": "string",
    "answer_hi": "string"
  },
  {
    "num": 4,
    "question_en": "What is the TypeScript type for floating-point numbers?",
    "question_hi": "TypeScript में फ्लोटिंग-पॉइंट संख्याओं के लिए कौन-सा टाइप है?",
    "options_en": ["number", "float", "decimal", "double"],
    "options_hi": ["number", "float", "decimal", "double"],
    "answer_en": "number",
    "answer_hi": "number"
  },
  {
    "num": 5,
    "question_en": "Which TypeScript type represents the absence of a value?",
    "question_hi": "TypeScript में कौन-सा टाइप किसी मान की अनुपस्थिति को दर्शाता है?",
    "options_en": ["null", "undefined", "void", "none"],
    "options_hi": ["null", "undefined", "void", "none"],
    "answer_en": "undefined",
    "answer_hi": "undefined"
  },
  {
    "num": 6,
    "question_en": "What type is used for arrays of numbers in TypeScript?",
    "question_hi": "TypeScript में संख्याओं की arrays के लिए कौन-सा टाइप प्रयोग किया जाता है?",
    "options_en": ["number[]", "Array<number>", "Both A and B", "num[]"],
    "options_hi": ["number[]", "Array<number>", "A और B दोनों", "num[]"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों"
  },
  {
    "num": 7,
    "question_en": "Which type allows any value without type checking?",
    "question_hi": "कौन-सा टाइप बिना टाइप चेकिंग के किसी भी मान की अनुमति देता है?",
    "options_en": ["any", "unknown", "object", "dynamic"],
    "options_hi": ["any", "unknown", "object", "dynamic"],
    "answer_en": "any",
    "answer_hi": "any"
  },
  {
    "num": 8,
    "question_en": "What is the type of an object with key-value pairs in TypeScript?",
    "question_hi": "TypeScript में key-value pairs वाले ऑब्जेक्ट का टाइप क्या है?",
    "options_en": ["object", "Record", "Map", "Dictionary"],
    "options_hi": ["object", "Record", "Map", "Dictionary"],
    "answer_en": "object",
    "answer_hi": "object"
  },
  {
    "num": 9,
    "question_en": "Which type represents values that will never occur?",
    "question_hi": "कौन-सा टाइप ऐसे मानों को दर्शाता है जो कभी नहीं होंगे?",
    "options_en": ["never", "void", "null", "undefined"],
    "options_hi": ["never", "void", "null", "undefined"],
    "answer_en": "never",
    "answer_hi": "never"
  },
  {
    "num": 10,
    "question_en": "What type is used for functions that don't return a value?",
    "question_hi": "ऐसे फंक्शन्स के लिए कौन-सा टाइप प्रयोग किया जाता है जो कोई मान वापस नहीं करते?",
    "options_en": ["void", "null", "undefined", "empty"],
    "options_hi": ["void", "null", "undefined", "empty"],
    "answer_en": "void",
    "answer_hi": "void"
  },
  {
    "num": 11,
    "question_en": "Which type can hold both integers and floating-point numbers?",
    "question_hi": "कौन-सा टाइप पूर्णांक और फ्लोटिंग-पॉइंट दोनों प्रकार की संख्याएँ रख सकता है?",
    "options_en": ["number", "int", "float", "numeric"],
    "options_hi": ["number", "int", "float", "numeric"],
    "answer_en": "number",
    "answer_hi": "number"
  },
  {
    "num": 12,
    "question_en": "What is the type for representing a single character in TypeScript?",
    "question_hi": "TypeScript में एकल वर्ण को दर्शाने के लिए कौन-सा टाइप है?",
    "options_en": ["string", "char", "character", "text"],
    "options_hi": ["string", "char", "character", "text"],
    "answer_en": "string",
    "answer_hi": "string"
  },
  {
    "num": 13,
    "question_en": "Which type is the type-safe counterpart of 'any'?",
    "question_hi": "'any' का टाइप-सेफ समकक्ष कौन-सा टाइप है?",
    "options_en": ["unknown", "object", "void", "never"],
    "options_hi": ["unknown", "object", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown"
  },
  {
    "num": 14,
    "question_en": "What is the type of 'null' in TypeScript?",
    "question_hi": "TypeScript में 'null' का टाइप क्या है?",
    "options_en": ["null", "object", "undefined", "any"],
    "options_hi": ["null", "object", "undefined", "any"],
    "answer_en": "null",
    "answer_hi": "null"
  },
  {
    "num": 15,
    "question_en": "Which type is used for arbitrarily large integers?",
    "question_hi": "मनमाने ढंग से बड़े पूर्णांकों के लिए कौन-सा टाइप प्रयोग किया जाता है?",
    "options_en": ["bigint", "number", "long", "int64"],
    "options_hi": ["bigint", "number", "long", "int64"],
    "answer_en": "bigint",
    "answer_hi": "bigint"
  },
  {
    "num": 16,
    "question_en": "What type represents non-primitive types?",
    "question_hi": "गैर-प्रिमिटिव टाइप्स को कौन-सा टाइप दर्शाता है?",
    "options_en": ["object", "any", "class", "interface"],
    "options_hi": ["object", "any", "class", "interface"],
    "answer_en": "object",
    "answer_hi": "object"
  },
  {
    "num": 17,
    "question_en": "What is the difference between 'string' and 'String' in TypeScript?",
    "question_hi": "TypeScript में 'string' और 'String' में क्या अंतर है?",
    "options_en": ["string is primitive, String is object wrapper", "They are the same", "String is primitive", "string is object wrapper"],
    "options_hi": ["string प्रिमिटिव है, String ऑब्जेक्ट रैपर है", "वे समान हैं", "String प्रिमिटिव है", "string ऑब्जेक्ट रैपर है"],
    "answer_en": "string is primitive, String is object wrapper",
    "answer_hi": "string प्रिमिटिव है, String ऑब्जेक्ट रैपर है"
  },
  {
    "num": 18,
    "question_en": "Which type would you use for a variable that can be a string or number?",
    "question_hi": "एक वेरिएबल के लिए आप कौन-सा टाइप प्रयोग करेंगे जो स्ट्रिंग या नंबर हो सकता है?",
    "options_en": ["string | number", "string & number", "string or number", "string, number"],
    "options_hi": ["string | number", "string & number", "string or number", "string, number"],
    "answer_en": "string | number",
    "answer_hi": "string | number"
  },
  {
    "num": 19,
    "question_en": "What is a literal type in TypeScript?",
    "question_hi": "TypeScript में लिटरल टाइप क्या है?",
    "options_en": ["A type that represents a specific value", "A type for strings only", "A type for numbers only", "A type for constants"],
    "options_hi": ["एक विशिष्ट मान को दर्शाने वाला टाइप", "केवल स्ट्रिंग्स के लिए टाइप", "केवल नंबर्स के लिए टाइप", "कॉन्स्टेंट्स के लिए टाइप"],
    "answer_en": "A type that represents a specific value",
    "answer_hi": "एक विशिष्ट मान को दर्शाने वाला टाइप"
  },
  {
    "num": 20,
    "question_en": "How do you define a variable that can only be 'red', 'green', or 'blue'?",
    "question_hi": "आप एक वेरिएबल को कैसे डिफाइन करेंगे जो केवल 'red', 'green', या 'blue' हो सकता है?",
    "options_en": ["type Color = 'red' | 'green' | 'blue'", "let color: red|green|blue", "enum Color {red, green, blue}", "All of the above"],
    "options_hi": ["type Color = 'red' | 'green' | 'blue'", "let color: red|green|blue", "enum Color {red, green, blue}", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 21,
    "question_en": "What is the type of an empty array in TypeScript?",
    "question_hi": "TypeScript में खाली array का टाइप क्या है?",
    "options_en": ["any[]", "never[]", "unknown[]", "Depends on context"],
    "options_hi": ["any[]", "never[]", "unknown[]", "संदर्भ पर निर्भर करता है"],
    "answer_en": "any[]",
    "answer_hi": "any[]"
  },
  {
    "num": 22,
    "question_en": "Which type is inferred for: let x = 42;",
    "question_hi": "let x = 42; के लिए कौन-सा टाइप इंफर किया जाएगा?",
    "options_en": ["number", "any", "unknown", "42"],
    "options_hi": ["number", "any", "unknown", "42"],
    "answer_en": "number",
    "answer_hi": "number"
  },
  {
    "num": 23,
    "question_en": "What is the type of: const y = 'hello';",
    "question_hi": "const y = 'hello'; का टाइप क्या है?",
    "options_en": ["string", "'hello'", "any", "const"],
    "options_hi": ["string", "'hello'", "any", "const"],
    "answer_en": "'hello'",
    "answer_hi": "'hello'"
  },
  {
    "num": 24,
    "question_en": "How do you define a tuple type for coordinates (x, y)?",
    "question_hi": "कोऑर्डिनेट्स (x, y) के लिए ट्यूपल टाइप कैसे डिफाइन करते हैं?",
    "options_en": ["[number, number]", "tuple(number, number)", "Array<number, number>", "(number, number)"],
    "options_hi": ["[number, number]", "tuple(number, number)", "Array<number, number>", "(number, number)"],
    "answer_en": "[number, number]",
    "answer_hi": "[number, number]"
  },
  {
    "num": 25,
    "question_en": "What is the type of enum values in TypeScript?",
    "question_hi": "TypeScript में enum मानों का टाइप क्या है?",
    "options_en": ["number or string", "only number", "only string", "any"],
    "options_hi": ["number या string", "केवल number", "केवल string", "any"],
    "answer_en": "number or string",
    "answer_hi": "number या string"
  },
  {
    "num": 26,
    "question_en": "What type would you use for a function parameter that is optional?",
    "question_hi": "ऐसे फंक्शन पैरामीटर के लिए आप कौन-सा टाइप प्रयोग करेंगे जो वैकल्पिक है?",
    "options_en": ["param?: type", "param: type | undefined", "Both A and B", "param: optional type"],
    "options_hi": ["param?: type", "param: type | undefined", "A और B दोनों", "param: optional type"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों"
  },
  {
    "num": 27,
    "question_en": "What is the type of 'undefined' in TypeScript?",
    "question_hi": "TypeScript में 'undefined' का टाइप क्या है?",
    "options_en": ["undefined", "void", "null", "any"],
    "options_hi": ["undefined", "void", "null", "any"],
    "answer_en": "undefined",
    "answer_hi": "undefined"
  },
  {
    "num": 28,
    "question_en": "Which type represents a collection of key-value pairs?",
    "question_hi": "key-value pairs के संग्रह को कौन-सा टाइप दर्शाता है?",
    "options_en": ["object", "Record<string, any>", "{ [key: string]: any }", "All of the above"],
    "options_hi": ["object", "Record<string, any>", "{ [key: string]: any }", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 29,
    "question_en": "What is the difference between 'any' and 'unknown'?",
    "question_hi": "'any' और 'unknown' में क्या अंतर है?",
    "options_en": ["unknown is type-safe, any bypasses type checking", "They are identical", "any is newer", "unknown allows any operation"],
    "options_hi": ["unknown टाइप-सेफ है, any टाइप चेकिंग को बायपास करता है", "वे समान हैं", "any नया है", "unknown कोई भी ऑपरेशन अनुमति देता है"],
    "answer_en": "unknown is type-safe, any bypasses type checking",
    "answer_hi": "unknown टाइप-सेफ है, any टाइप चेकिंग को बायपास करता है"
  },
  {
    "num": 30,
    "question_en": "What type would you use for a variable that might be null?",
    "question_hi": "ऐसे वेरिएबल के लिए आप कौन-सा टाइप प्रयोग करेंगे जो null हो सकता है?",
    "options_en": ["type | null", "Nullable<type>", "Both A and B", "type?"],
    "options_hi": ["type | null", "Nullable<type>", "A और B दोनों", "type?"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों"
  },
  {
    "num": 31,
    "question_en": "What is the type of a function that takes no arguments and returns nothing?",
    "question_hi": "ऐसे फंक्शन का टाइप क्या है जो कोई आर्गुमेंट नहीं लेता और कुछ भी रिटर्न नहीं करता?",
    "options_en": ["() => void", "Function", "() => undefined", "empty"],
    "options_hi": ["() => void", "Function", "() => undefined", "empty"],
    "answer_en": "() => void",
    "answer_hi": "() => void"
  },
  {
    "num": 32,
    "question_en": "How do you define an array of mixed types?",
    "question_hi": "मिश्रित टाइप्स की array कैसे डिफाइन करते हैं?",
    "options_en": ["(string | number)[]", "Array<string | number>", "mixed[]", "Both A and B"],
    "options_hi": ["(string | number)[]", "Array<string | number>", "mixed[]", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों"
  },
  {
    "num": 33,
    "question_en": "What is the type of: let z = true;",
    "question_hi": "let z = true; का टाइप क्या है?",
    "options_en": ["boolean", "true", "false", "any"],
    "options_hi": ["boolean", "true", "false", "any"],
    "answer_en": "boolean",
    "answer_hi": "boolean"
  },
  {
    "num": 34,
    "question_en": "Which type is used for creating custom types?",
    "question_hi": "कस्टम टाइप्स बनाने के लिए कौन-सा टाइप प्रयोग किया जाता है?",
    "options_en": ["type", "interface", "class", "All of the above"],
    "options_hi": ["type", "interface", "class", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 35,
    "question_en": "What is the difference between 'type' and 'interface'?",
    "question_hi": "'type' और 'interface' में क्या अंतर है?",
    "options_en": ["interface can be extended, type can use unions", "They are the same", "type is newer", "interface is for classes only"],
    "options_hi": ["interface को एक्सटेंड किया जा सकता है, type यूनियन्स प्रयोग कर सकता है", "वे समान हैं", "type नया है", "interface केवल क्लासेस के लिए है"],
    "answer_en": "interface can be extended, type can use unions",
    "answer_hi": "interface को एक्सटेंड किया जा सकता है, type यूनियन्स प्रयोग कर सकता है"
  },
  {
    "num": 36,
    "question_en": "What type would you use for a dictionary with string keys and number values?",
    "question_hi": "स्ट्रिंग keys और नंबर values वाले डिक्शनरी के लिए आप कौन-सा टाइप प्रयोग करेंगे?",
    "options_en": ["Record<string, number>", "{ [key: string]: number }", "Map<string, number>", "Both A and B"],
    "options_hi": ["Record<string, number>", "{ [key: string]: number }", "Map<string, number>", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों"
  },
  {
    "num": 37,
    "question_en": "What is the type of a Promise that resolves to a string?",
    "question_hi": "ऐसे Promise का टाइप क्या है जो एक स्ट्रिंग में रिजॉल्व होता है?",
    "options_en": ["Promise<string>", "Promise<String>", "Async<string>", "Future<string>"],
    "options_hi": ["Promise<string>", "Promise<String>", "Async<string>", "Future<string>"],
    "answer_en": "Promise<string>",
    "answer_hi": "Promise<string>"
  },
  {
    "num": 38,
    "question_en": "How do you make all properties of a type optional?",
    "question_hi": "एक टाइप की सभी प्रॉपर्टीज़ को वैकल्पिक कैसे बनाते हैं?",
    "options_en": ["Partial<Type>", "Optional<Type>", "Type?", "MakeOptional<Type>"],
    "options_hi": ["Partial<Type>", "Optional<Type>", "Type?", "MakeOptional<Type>"],
    "answer_en": "Partial<Type>",
    "answer_hi": "Partial<Type>"
  },
  {
    "num": 39,
    "question_en": "What is the type of: const arr = [1, 2, 3];",
    "question_hi": "const arr = [1, 2, 3]; का टाइप क्या है?",
    "options_en": ["number[]", "[1, 2, 3]", "Array<number>", "Both A and C"],
    "options_hi": ["number[]", "[1, 2, 3]", "Array<number>", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों"
  },
  {
    "num": 40,
    "question_en": "Which type represents a value that can be one of several types?",
    "question_hi": "कौन-सा टाइप ऐसे मान को दर्शाता है जो कई टाइप्स में से एक हो सकता है?",
    "options_en": ["Union type", "Intersection type", "Either type", "Multiple type"],
    "options_hi": ["यूनियन टाइप", "इंटरसेक्शन टाइप", "Either टाइप", "मल्टीपल टाइप"],
    "answer_en": "Union type",
    "answer_hi": "यूनियन टाइप"
  },
  {
    "num": 41,
    "question_en": "What is the syntax for union types?",
    "question_hi": "यूनियन टाइप्स के लिए सिंटैक्स क्या है?",
    "options_en": ["Type1 | Type2", "Type1 & Type2", "Type1 || Type2", "Type1 or Type2"],
    "options_hi": ["Type1 | Type2", "Type1 & Type2", "Type1 || Type2", "Type1 or Type2"],
    "answer_en": "Type1 | Type2",
    "answer_hi": "Type1 | Type2"
  },
  {
    "num": 42,
    "question_en": "What is an intersection type?",
    "question_hi": "इंटरसेक्शन टाइप क्या है?",
    "options_en": ["Combines multiple types into one", "Finds common types", "Type for AND operations", "All of the above"],
    "options_hi": ["कई टाइप्स को एक में जोड़ता है", "सामान्य टाइप्स ढूँढता है", "AND ऑपरेशन्स के लिए टाइप", "उपरोक्त सभी"],
    "answer_en": "Combines multiple types into one",
    "answer_hi": "कई टाइप्स को एक में जोड़ता है"
  },
  {
    "num": 43,
    "question_en": "What is the syntax for intersection types?",
    "question_hi": "इंटरसेक्शन टाइप्स के लिए सिंटैक्स क्या है?",
    "options_en": ["Type1 & Type2", "Type1 | Type2", "Type1 && Type2", "Type1 and Type2"],
    "options_hi": ["Type1 & Type2", "Type1 | Type2", "Type1 && Type2", "Type1 and Type2"],
    "answer_en": "Type1 & Type2",
    "answer_hi": "Type1 & Type2"
  },
  {
    "num": 44,
    "question_en": "What is type inference?",
    "question_hi": "टाइप इंफरेंस क्या है?",
    "options_en": ["TypeScript automatically determines types", "Manual type declaration", "Runtime type checking", "Type conversion"],
    "options_hi": ["TypeScript स्वचालित रूप से टाइप्स निर्धारित करता है", "मैन्युअल टाइप डिक्लेरेशन", "रनटाइम टाइप चेकिंग", "टाइप कन्वर्जन"],
    "answer_en": "TypeScript automatically determines types",
    "answer_hi": "TypeScript स्वचालित रूप से टाइप्स निर्धारित करता है"
  },
  {
    "num": 45,
    "question_en": "What is type assertion?",
    "question_hi": "टाइप एसर्शन क्या है?",
    "options_en": ["Telling TypeScript the type of a value", "Type checking", "Type conversion", "Type validation"],
    "options_hi": ["TypeScript को एक मान का टाइप बताना", "टाइप चेकिंग", "टाइप कन्वर्जन", "टाइप वैलिडेशन"],
    "answer_en": "Telling TypeScript the type of a value",
    "answer_hi": "TypeScript को एक मान का टाइप बताना"
  },
  {
    "num": 46,
    "question_en": "What are the two syntaxes for type assertion?",
    "question_hi": "टाइप एसर्शन के लिए दो सिंटैक्स कौन-से हैं?",
    "options_en": ["value as Type and <Type>value", "assert(value, Type)", "cast(value, Type)", "Both A and B"],
    "options_hi": ["value as Type और <Type>value", "assert(value, Type)", "cast(value, Type)", "A और B दोनों"],
    "answer_en": "value as Type and <Type>value",
    "answer_hi": "value as Type और <Type>value"
  },
  {
    "num": 47,
    "question_en": "What is the 'never' type used for?",
    "question_hi": "'never' टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Functions that never return", "Unreachable code", "Infinite loops", "All of the above"],
    "options_hi": ["ऐसे फंक्शन्स जो कभी रिटर्न नहीं करते", "अप्राप्य कोड", "अनंत लूप्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 48,
    "question_en": "How do you define a readonly array?",
    "question_hi": "रीडओनली array कैसे डिफाइन करते हैं?",
    "options_en": ["readonly number[]", "ReadonlyArray<number>", "const number[]", "Both A and B"],
    "options_hi": ["readonly number[]", "ReadonlyArray<number>", "const number[]", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों"
  },
  {
    "num": 49,
    "question_en": "What is the type of a class constructor?",
    "question_hi": "क्लास कंस्ट्रक्टर का टाइप क्या है?",
    "options_en": ["new (...args: any[]) => any", "Function", "Constructor", "Class"],
    "options_hi": ["new (...args: any[]) => any", "Function", "Constructor", "Class"],
    "answer_en": "new (...args: any[]) => any",
    "answer_hi": "new (...args: any[]) => any"
  },
  {
    "num": 50,
    "question_en": "What is the 'keyof' operator?",
    "question_hi": "'keyof' ऑपरेटर क्या है?",
    "options_en": ["Gets keys of a type", "Checks if key exists", "Creates key types", "All of the above"],
    "options_hi": ["एक टाइप की keys प्राप्त करता है", "चेक करता है कि key मौजूद है या नहीं", "key टाइप्स बनाता है", "उपरोक्त सभी"],
    "answer_en": "Gets keys of a type",
    "answer_hi": "एक टाइप की keys प्राप्त करता है"
  },
  {
    "num": 51,
    "question_en": "What is the 'typeof' operator in types?",
    "question_hi": "टाइप्स में 'typeof' ऑपरेटर क्या है?",
    "options_en": ["Gets type of a value", "Runtime type checking", "Type declaration", "Type comparison"],
    "options_hi": ["एक मान का टाइप प्राप्त करता है", "रनटाइम टाइप चेकिंग", "टाइप डिक्लेरेशन", "टाइप तुलना"],
    "answer_en": "Gets type of a value",
    "answer_hi": "एक मान का टाइप प्राप्त करता है"
  },
  {
    "num": 52,
    "question_en": "What is a mapped type?",
    "question_hi": "मैप्ड टाइप क्या है?",
    "options_en": ["Creates new type by transforming properties", "Maps values to types", "Array mapping", "Object mapping"],
    "options_hi": ["प्रॉपर्टीज़ को ट्रांसफॉर्म करके नया टाइप बनाता है", "मानों को टाइप्स में मैप करता है", "ऐरे मैपिंग", "ऑब्जेक्ट मैपिंग"],
    "answer_en": "Creates new type by transforming properties",
    "answer_hi": "प्रॉपर्टीज़ को ट्रांसफॉर्म करके नया टाइप बनाता है"
  },
  {
    "num": 53,
    "question_en": "What is conditional type?",
    "question_hi": "कंडीशनल टाइप क्या है?",
    "options_en": ["Type that depends on condition", "If-else for types", "Type conditions", "All of the above"],
    "options_hi": ["टाइप जो कंडीशन पर निर्भर करता है", "टाइप्स के लिए If-else", "टाइप कंडीशन्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 54,
    "question_en": "What is template literal type?",
    "question_hi": "टेम्पलेट लिटरल टाइप क्या है?",
    "options_en": ["String template types", "Template strings in types", "Dynamic string types", "All of the above"],
    "options_hi": ["स्ट्रिंग टेम्पलेट टाइप्स", "टाइप्स में टेम्पलेट स्ट्रिंग्स", "डायनेमिक स्ट्रिंग टाइप्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 55,
    "question_en": "What is the 'in' operator in types?",
    "question_hi": "टाइप्स में 'in' ऑपरेटर क्या है?",
    "options_en": ["Checks if property exists in type", "Iterates over keys", "Property existence", "All of the above"],
    "options_hi": ["चेक करता है कि प्रॉपर्टी टाइप में मौजूद है या नहीं", "keys पर इटरेट करता है", "प्रॉपर्टी अस्तित्व", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 56,
    "question_en": "What is indexed access type?",
    "question_hi": "इंडेक्स्ड एक्सेस टाइप क्या है?",
    "options_en": ["Access type properties by index", "Array-like type access", "Type indexing", "All of the above"],
    "options_hi": ["इंडेक्स द्वारा टाइप प्रॉपर्टीज़ एक्सेस करना", "ऐरे-जैसा टाइप एक्सेस", "टाइप इंडेक्सिंग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 57,
    "question_en": "How do you extract property type from an object type?",
    "question_hi": "ऑब्जेक्ट टाइप से प्रॉपर्टी टाइप कैसे निकालते हैं?",
    "options_en": ["Type['property']", "Type.property", "propertyof Type", "extract<Type, 'property'>"],
    "options_hi": ["Type['property']", "Type.property", "propertyof Type", "extract<Type, 'property'>"],
    "answer_en": "Type['property']",
    "answer_hi": "Type['property']"
  },
  {
    "num": 58,
    "question_en": "What is the 'as const' assertion?",
    "question_hi": "'as const' एसर्शन क्या है?",
    "options_en": ["Makes values readonly and literal", "Creates constants", "Const type assertion", "All of the above"],
    "options_hi": ["मानों को रीडओनली और लिटरल बनाता है", "कॉन्स्टेंट्स बनाता है", "कॉन्स्ट टाइप एसर्शन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 59,
    "question_en": "What are utility types?",
    "question_hi": "यूटिलिटी टाइप्स क्या हैं?",
    "options_en": ["Built-in types for common transformations", "Utility functions for types", "Type helpers", "All of the above"],
    "options_hi": ["सामान्य ट्रांसफॉर्मेशन्स के लिए बिल्ट-इन टाइप्स", "टाइप्स के लिए यूटिलिटी फंक्शन्स", "टाइप हेल्पर्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 60,
    "question_en": "What does Pick<Type, Keys> do?",
    "question_hi": "Pick<Type, Keys> क्या करता है?",
    "options_en": ["Selects subset of properties", "Picks specified keys", "Creates new type with selected keys", "All of the above"],
    "options_hi": ["प्रॉपर्टीज़ का सबसेट सेलेक्ट करता है", "निर्दिष्ट keys पिक करता है", "चुनी हुई keys के साथ नया टाइप बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 61,
    "question_en": "What does Omit<Type, Keys> do?",
    "question_hi": "Omit<Type, Keys> क्या करता है?",
    "options_en": ["Removes specified keys", "Omits properties", "Creates type without specified keys", "All of the above"],
    "options_hi": ["निर्दिष्ट keys हटाता है", "प्रॉपर्टीज़ ओमिट करता है", "निर्दिष्ट keys के बिना टाइप बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 62,
    "question_en": "What is the 'satisfies' operator?",
    "question_hi": "'satisfies' ऑपरेटर क्या है?",
    "options_en": ["Checks type satisfies constraint", "Type validation operator", "Ensures type compatibility", "All of the above"],
    "options_hi": ["चेक करता है कि टाइप कंस्ट्रेंट को संतुष्ट करता है", "टाइप वैलिडेशन ऑपरेटर", "टाइप संगतता सुनिश्चित करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 63,
    "question_en": "What is structural typing?",
    "question_hi": "स्ट्रक्चरल टाइपिंग क्या है?",
    "options_en": ["Type compatibility based on structure", "Duck typing", "Shape-based typing", "All of the above"],
    "options_hi": ["संरचना के आधार पर टाइप संगतता", "डक टाइपिंग", "आकार-आधारित टाइपिंग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 64,
    "question_en": "What are excess property checks?",
    "question_hi": "एक्सेस प्रॉपर्टी चेक्स क्या हैं?",
    "options_en": ["Checks for extra properties in object literals", "Property validation", "Extra property warnings", "All of the above"],
    "options_hi": ["ऑब्जेक्ट लिटरल्स में अतिरिक्त प्रॉपर्टीज़ की जाँच", "प्रॉपर्टी वैलिडेशन", "अतिरिक्त प्रॉपर्टी चेतावनियाँ", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 65,
    "question_en": "What is type narrowing?",
    "question_hi": "टाइप नैरोइंग क्या है?",
    "options_en": ["Reducing type to more specific type", "Type refinement", "Conditional type checking", "All of the above"],
    "options_hi": ["टाइप को अधिक विशिष्ट टाइप में कम करना", "टाइप रिफाइनमेंट", "कंडीशनल टाइप चेकिंग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 66,
    "question_en": "What is discriminated union?",
    "question_hi": "डिस्क्रिमिनेटेड यूनियन क्या है?",
    "options_en": ["Union type with common discriminant property", "Tagged union", "Variant type", "All of the above"],
    "options_hi": ["सामान्य विभेदक प्रॉपर्टी वाला यूनियन टाइप", "टैग्ड यूनियन", "वेरिएंट टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 67,
    "question_en": "What are type guards?",
    "question_hi": "टाइप गार्ड्स क्या हैं?",
    "options_en": ["Expressions that narrow types", "Runtime type checks", "Type predicates", "All of the above"],
    "options_hi": ["एक्सप्रेशन्स जो टाइप्स को संकीर्ण करते हैं", "रनटाइम टाइप चेक्स", "टाइप प्रेडिकेट्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 68,
    "question_en": "What is the 'instanceof' type guard?",
    "question_hi": "'instanceof' टाइप गार्ड क्या है?",
    "options_en": ["Checks class instance", "Class type guard", "Constructor checking", "All of the above"],
    "options_hi": ["क्लास इंस्टेंस चेक करता है", "क्लास टाइप गार्ड", "कंस्ट्रक्टर चेकिंग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 69,
    "question_en": "What are user-defined type guards?",
    "question_hi": "यूजर-डिफाइंड टाइप गार्ड्स क्या हैं?",
    "options_en": ["Custom functions that act as type guards", "User type predicates", "Custom type narrowing", "All of the above"],
    "options_hi": ["कस्टम फंक्शन्स जो टाइप गार्ड्स के रूप में कार्य करते हैं", "यूजर टाइप प्रेडिकेट्स", "कस्टम टाइप नैरोइंग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 70,
    "question_en": "What is type predicate?",
    "question_hi": "टाइप प्रेडिकेट क्या है?",
    "options_en": ["Function that returns type predicate", "Type assertion function", "User-defined type guard", "All of the above"],
    "options_hi": ["फंक्शन जो टाइप प्रेडिकेट रिटर्न करता है", "टाइप एसर्शन फंक्शन", "यूजर-डिफाइंड टाइप गार्ड", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 71,
    "question_en": "What is 'this' type?",
    "question_hi": "'this' टाइप क्या है?",
    "options_en": ["Type representing current instance", "Polymorphic this type", "Self-referential type", "All of the above"],
    "options_hi": ["वर्तमान इंस्टेंस को दर्शाने वाला टाइप", "पॉलीमॉर्फिक this टाइप", "स्व-संदर्भित टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 72,
    "question_en": "What are generic type constraints?",
    "question_hi": "जेनेरिक टाइप कंस्ट्रेंट्स क्या हैं?",
    "options_en": ["Restrictions on generic type parameters", "Type bounds", "Constraint expressions", "All of the above"],
    "options_hi": ["जेनेरिक टाइप पैरामीटर्स पर प्रतिबंध", "टाइप बाउंड्स", "कंस्ट्रेंट एक्सप्रेशन्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 73,
    "question_en": "What is default type parameter?",
    "question_hi": "डिफ़ॉल्ट टाइप पैरामीटर क्या है?",
    "options_en": ["Default type for generic parameter", "Optional type parameter", "Type parameter with default", "All of the above"],
    "options_hi": ["जेनेरिक पैरामीटर के लिए डिफ़ॉल्ट टाइप", "ऑप्शनल टाइप पैरामीटर", "डिफ़ॉल्ट के साथ टाइप पैरामीटर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 74,
    "question_en": "What are conditional types with 'infer'?",
    "question_hi": "'infer' के साथ कंडीशनल टाइप्स क्या हैं?",
    "options_en": ["Conditional types that infer types", "Type inference in conditions", "Infer keyword usage", "All of the above"],
    "options_hi": ["कंडीशनल टाइप्स जो टाइप्स इंफर करते हैं", "कंडीशन्स में टाइप इंफरेंस", "Infer कीवर्ड उपयोग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 75,
    "question_en": "What is mapped type with 'as' clause?",
    "question_hi": "'as' क्लॉज के साथ मैप्ड टाइप क्या है?",
    "options_en": ["Mapped type that remaps keys", "Key transformation in mapped types", "Renaming properties", "All of the above"],
    "options_hi": ["मैप्ड टाइप जो keys को रीमैप करता है", "मैप्ड टाइप्स में key ट्रांसफॉर्मेशन", "प्रॉपर्टीज़ का नाम बदलना", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 76,
    "question_en": "What are recursive types?",
    "question_hi": "रिकर्सिव टाइप्स क्या हैं?",
    "options_en": ["Types that reference themselves", "Self-referential types", "Types with recursion", "All of the above"],
    "options_hi": ["टाइप्स जो स्वयं को रेफर करते हैं", "स्व-संदर्भित टाइप्स", "रिकर्सन वाले टाइप्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 77,
    "question_en": "What is type widening?",
    "question_hi": "टाइप विडेनिंग क्या है?",
    "options_en": ["Inferring broader type from literal", "Type generalization", "Literal to general type", "All of the above"],
    "options_hi": ["लिटरल से व्यापक टाइप इंफर करना", "टाइप जनरलाइज़ेशन", "लिटरल से सामान्य टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 78,
    "question_en": "What are branded types?",
    "question_hi": "ब्रांडेड टाइप्स क्या हैं?",
    "options_en": ["Types with unique brand property", "Nominal typing simulation", "Type branding pattern", "All of the above"],
    "options_hi": ["अद्वितीय ब्रांड प्रॉपर्टी वाले टाइप्स", "नॉमिनल टाइपिंग सिमुलेशन", "टाइप ब्रांडिंग पैटर्न", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 79,
    "question_en": "What is 'unique symbol' type?",
    "question_hi": "'unique symbol' टाइप क्या है?",
    "options_en": ["Type for unique symbol values", "Unique symbol literal", "Symbol with unique type", "All of the above"],
    "options_hi": ["अद्वितीय सिंबल मानों के लिए टाइप", "अद्वितीय सिंबल लिटरल", "अद्वितीय टाइप वाला सिंबल", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 80,
    "question_en": "What are declaration files (.d.ts)?",
    "question_hi": "डिक्लेरेशन फाइल्स (.d.ts) क्या हैं?",
    "options_en": ["Files with type declarations", "Type definition files", "Ambient declarations", "All of the above"],
    "options_hi": ["टाइप डिक्लेरेशन्स वाली फाइलें", "टाइप डेफिनिशन फाइल्स", "एम्बिएंट डिक्लेरेशन्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 81,
    "question_en": "What is module augmentation?",
    "question_hi": "मॉड्यूल ऑग्मेंटेशन क्या है?",
    "options_en": ["Extending module declarations", "Adding to existing modules", "Module type extension", "All of the above"],
    "options_hi": ["मॉड्यूल डिक्लेरेशन्स का विस्तार", "मौजूदा मॉड्यूल्स में जोड़ना", "मॉड्यूल टाइप एक्सटेंशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 82,
    "question_en": "What are ambient declarations?",
    "question_hi": "एम्बिएंट डिक्लेरेशन्स क्या हैं?",
    "options_en": ["Declarations without implementations", "External type declarations", "Declare keyword usage", "All of the above"],
    "options_hi": ["इम्प्लीमेंटेशन के बिना डिक्लेरेशन्स", "एक्सटर्नल टाइप डिक्लेरेशन्स", "Declare कीवर्ड उपयोग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 83,
    "question_en": "What are global augmentations?",
    "question_hi": "ग्लोबल ऑग्मेंटेशन्स क्या हैं?",
    "options_en": ["Extending global scope", "Adding to global types", "Global type extensions", "All of the above"],
    "options_hi": ["ग्लोबल स्कोप का विस्तार", "ग्लोबल टाइप्स में जोड़ना", "ग्लोबल टाइप एक्सटेंशन्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 84,
    "question_en": "What is 'override' modifier?",
    "question_hi": "'override' मॉडिफायर क्या है?",
    "options_en": ["Indicates method overrides parent", "Override keyword", "Method override", "All of the above"],
    "options_hi": ["इंगित करता है कि मेथड पैरेंट को ओवरराइड करती है", "ओवरराइड कीवर्ड", "मेथड ओवरराइड", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 85,
    "question_en": "What are abstract classes?",
    "question_hi": "अब्सट्रैक्ट क्लासेस क्या हैं?",
    "options_en": ["Classes that can't be instantiated", "Base classes", "Classes with abstract methods", "All of the above"],
    "options_hi": ["क्लासेस जिन्हें इंस्टेंटिएट नहीं किया जा सकता", "बेस क्लासेस", "अब्सट्रैक्ट मेथड्स वाली क्लासेस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 86,
    "question_en": "What are private fields?",
    "question_hi": "प्राइवेट फील्ड्स क्या हैं?",
    "options_en": ["Fields accessible only in class", "# prefixed fields", "Private class members", "All of the above"],
    "options_hi": ["फील्ड्स जो केवल क्लास में एक्सेसिबल हैं", "# प्रीफिक्स्ड फील्ड्स", "प्राइवेट क्लास मेंबर्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 87,
    "question_en": "What is 'implements' clause?",
    "question_hi": "'implements' क्लॉज क्या है?",
    "options_en": ["Ensures class implements interface", "Interface implementation", "Class contract", "All of the above"],
    "options_hi": ["सुनिश्चित करता है कि क्लास इंटरफेस इम्प्लीमेंट करती है", "इंटरफेस इम्प्लीमेंटेशन", "क्लास कॉन्ट्रैक्ट", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 88,
    "question_en": "What is 'extends' clause?",
    "question_hi": "'extends' क्लॉज क्या है?",
    "options_en": ["Class inheritance", "Extending classes/interfaces", "Inheritance mechanism", "All of the above"],
    "options_hi": ["क्लास इनहेरिटेंस", "क्लासेस/इंटरफेस का विस्तार", "इनहेरिटेंस मैकेनिज्म", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 89,
    "question_en": "What are decorators?",
    "question_hi": "डेकोरेटर्स क्या हैं?",
    "options_en": ["Special declarations that modify code", "Metadata annotations", "Class/method decorators", "All of the above"],
    "options_hi": ["विशेष डिक्लेरेशन्स जो कोड को मॉडिफाई करते हैं", "मेटाडेटा एनोटेशन्स", "क्लास/मेथड डेकोरेटर्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 90,
    "question_en": "What are mixins?",
    "question_hi": "मिक्सिन्स क्या हैं?",
    "options_en": ["Pattern for combining classes", "Class composition", "Reusable components", "All of the above"],
    "options_hi": ["क्लासेस को कॉम्बाइन करने का पैटर्न", "क्लास कंपोजिशन", "रीयूजेबल कंपोनेंट्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 91,
    "question_en": "What is namespace?",
    "question_hi": "नेमस्पेस क्या है?",
    "options_en": ["Organizational unit for code", "Code grouping", "Logical container", "All of the above"],
    "options_hi": ["कोड के लिए संगठनात्मक इकाई", "कोड ग्रुपिंग", "लॉजिकल कंटेनर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 92,
    "question_en": "What is type erasure?",
    "question_hi": "टाइप इरेज़र क्या है?",
    "options_en": ["Removal of type annotations at runtime", "Type information removal", "Compilation type removal", "All of the above"],
    "options_hi": ["रनटाइम पर टाइप एनोटेशन्स का हटाया जाना", "टाइप इंफॉर्मेशन रिमूवल", "कंपाइलेशन टाइप रिमूवल", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 93,
    "question_en": "What are generic functions?",
    "question_hi": "जेनेरिक फंक्शन्स क्या हैं?",
    "options_en": ["Functions with type parameters", "Generic typed functions", "Type-parameterized functions", "All of the above"],
    "options_hi": ["टाइप पैरामीटर्स वाले फंक्शन्स", "जेनेरिक टाइप्ड फंक्शन्स", "टाइप-पैरामीटराइज्ड फंक्शन्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 94,
    "question_en": "What are generic interfaces?",
    "question_hi": "जेनेरिक इंटरफेस क्या हैं?",
    "options_en": ["Interfaces with type parameters", "Generic typed interfaces", "Type-parameterized interfaces", "All of the above"],
    "options_hi": ["टाइप पैरामीटर्स वाले इंटरफेस", "जेनेरिक टाइप्ड इंटरफेस", "टाइप-पैरामीटराइज्ड इंटरफेस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 95,
    "question_en": "What are generic classes?",
    "question_hi": "जेनेरिक क्लासेस क्या हैं?",
    "options_en": ["Classes with type parameters", "Generic typed classes", "Type-parameterized classes", "All of the above"],
    "options_hi": ["टाइप पैरामीटर्स वाली क्लासेस", "जेनेरिक टाइप्ड क्लासेस", "टाइप-पैरामीटराइज्ड क्लासेस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 96,
    "question_en": "What is type compatibility?",
    "question_hi": "टाइप संगतता क्या है?",
    "options_en": ["When one type can be used in place of another", "Type substitution", "Assignment compatibility", "All of the above"],
    "options_hi": ["जब एक टाइप दूसरे के स्थान पर प्रयोग किया जा सकता है", "टाइप प्रतिस्थापन", "असाइनमेंट संगतता", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 97,
    "question_en": "What is covariance?",
    "question_hi": "कोवेरिएंस क्या है?",
    "options_en": ["Preserving subtype relationship", "Type relationship preservation", "Subtype compatibility", "All of the above"],
    "options_hi": ["सबटाइप रिलेशनशिप को संरक्षित करना", "टाइप रिलेशनशिप प्रिज़र्वेशन", "सबटाइप संगतता", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 98,
    "question_en": "What is contravariance?",
    "question_hi": "कॉन्ट्रावेरिएंस क्या है?",
    "options_en": ["Reversing subtype relationship", "Inverse type compatibility", "Function parameter compatibility", "All of the above"],
    "options_hi": ["सबटाइप रिलेशनशिप को उलटना", "उलटी टाइप संगतता", "फंक्शन पैरामीटर संगतता", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 99,
    "question_en": "What is bivariance?",
    "question_hi": "बाइवेरिएंस क्या है?",
    "options_en": ["Both covariance and contravariance", "Dual variance", "Two-way type compatibility", "All of the above"],
    "options_hi": ["दोनों कोवेरिएंस और कॉन्ट्रावेरिएंस", "दोहरी वेरिएंस", "दो-तरफ़ा टाइप संगतता", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 100,
    "question_en": "What is invariance?",
    "question_hi": "इनवेरिएंस क्या है?",
    "options_en": ["Exact type match required", "No variance", "Strict type compatibility", "All of the above"],
    "options_hi": ["सटीक टाइप मैच आवश्यक", "कोई वेरिएंस नहीं", "सख्त टाइप संगतता", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
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