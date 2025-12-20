const questions = [
  {
    "num": 1,
    "question_en": "Which TypeScript type represents whole numbers and decimals?",
    "question_hi": "TypeScript का कौन सा प्रकार पूर्ण संख्याओं और दशमलवों को दर्शाता है?",
    "options_en": ["number", "string", "boolean", "any"],
    "options_hi": ["number", "string", "boolean", "any"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What type is used for text in TypeScript?",
    "question_hi": "TypeScript में टेक्स्ट के लिए कौन सा प्रकार प्रयोग किया जाता है?",
    "options_en": ["string", "text", "char", "varchar"],
    "options_hi": ["string", "text", "char", "varchar"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which type represents true or false values?",
    "question_hi": "कौन सा प्रकार सही या गलत मानों को दर्शाता है?",
    "options_en": ["boolean", "bool", "truefalse", "binary"],
    "options_hi": ["boolean", "bool", "truefalse", "binary"],
    "answer_en": "boolean",
    "answer_hi": "boolean",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the type of null in TypeScript?",
    "question_hi": "TypeScript में null का प्रकार क्या है?",
    "options_en": ["null", "undefined", "void", "any"],
    "options_hi": ["null", "undefined", "void", "any"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which type indicates an uninitialized variable?",
    "question_hi": "कौन सा प्रकार एक अनइनिशियलाइज़्ड वेरिएबल को दर्शाता है?",
    "options_en": ["undefined", "null", "void", "never"],
    "options_hi": ["undefined", "null", "void", "never"],
    "answer_en": "undefined",
    "answer_hi": "undefined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What type is used for functions that don't return a value?",
    "question_hi": "उन फ़ंक्शनों के लिए कौन सा प्रकार प्रयोग किया जाता है जो कोई मान वापस नहीं करते?",
    "options_en": ["void", "null", "undefined", "never"],
    "options_hi": ["void", "null", "undefined", "never"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which type represents values that never occur?",
    "question_hi": "कौन सा प्रकार ऐसे मानों को दर्शाता है जो कभी नहीं होते?",
    "options_en": ["never", "void", "null", "undefined"],
    "options_hi": ["never", "void", "null", "undefined"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What type allows any JavaScript value?",
    "question_hi": "कौन सा प्रकार किसी भी JavaScript मान की अनुमति देता है?",
    "options_en": ["any", "unknown", "object", "mixed"],
    "options_hi": ["any", "unknown", "object", "mixed"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which type is a type-safe version of 'any'?",
    "question_hi": "कौन सा प्रकार 'any' का टाइप-सेफ वर्जन है?",
    "options_en": ["unknown", "never", "void", "object"],
    "options_hi": ["unknown", "never", "void", "object"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What type represents non-primitive values?",
    "question_hi": "कौन सा प्रकार गैर-प्रिमिटिव मानों को दर्शाता है?",
    "options_en": ["object", "any", "unknown", "record"],
    "options_hi": ["object", "any", "unknown", "record"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which TypeScript type is a primitive?",
    "question_hi": "TypeScript का कौन सा प्रकार प्रिमिटिव है?",
    "options_en": ["string", "array", "object", "function"],
    "options_hi": ["string", "array", "object", "function"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the type of 42 in TypeScript?",
    "question_hi": "TypeScript में 42 का प्रकार क्या है?",
    "options_en": ["number", "int", "integer", "numeric"],
    "options_hi": ["number", "int", "integer", "numeric"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which type represents a single character?",
    "question_hi": "कौन सा प्रकार एक एकल वर्ण को दर्शाता है?",
    "options_en": ["string", "char", "character", "text"],
    "options_hi": ["string", "char", "character", "text"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the type of false in TypeScript?",
    "question_hi": "TypeScript में false का प्रकार क्या है?",
    "options_en": ["boolean", "false", "bool", "truthy"],
    "options_hi": ["boolean", "false", "bool", "truthy"],
    "answer_en": "boolean",
    "answer_hi": "boolean",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which type is both null and undefined?",
    "question_hi": "कौन सा प्रकार null और undefined दोनों है?",
    "options_en": ["null", "undefined", "void", "never"],
    "options_hi": ["null", "undefined", "void", "never"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What type represents intentional absence of value?",
    "question_hi": "कौन सा प्रकार मान की इरादतन अनुपस्थिति को दर्शाता है?",
    "options_en": ["null", "undefined", "void", "never"],
    "options_hi": ["null", "undefined", "void", "never"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which type is for uninitialized variables?",
    "question_hi": "अनइनिशियलाइज़्ड वेरिएबल्स के लिए कौन सा प्रकार है?",
    "options_en": ["undefined", "null", "void", "never"],
    "options_hi": ["undefined", "null", "void", "never"],
    "answer_en": "undefined",
    "answer_hi": "undefined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What type is returned by functions with no return statement?",
    "question_hi": "बिना return स्टेटमेंट वाले फ़ंक्शन कौन सा प्रकार लौटाते हैं?",
    "options_en": ["void", "undefined", "null", "never"],
    "options_hi": ["void", "undefined", "null", "never"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which type is for infinite loops?",
    "question_hi": "अनंत लूप्स के लिए कौन सा प्रकार है?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What type bypasses TypeScript type checking?",
    "question_hi": "कौन सा प्रकार TypeScript टाइप चेकिंग को बायपास करता है?",
    "options_en": ["any", "unknown", "object", "mixed"],
    "options_hi": ["any", "unknown", "object", "mixed"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which type requires type checking before use?",
    "question_hi": "कौन से प्रकार को उपयोग से पहले टाइप चेकिंग की आवश्यकता होती है?",
    "options_en": ["unknown", "any", "object", "void"],
    "options_hi": ["unknown", "any", "object", "void"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What type is for arrays, functions, and objects?",
    "question_hi": "ऐरे, फ़ंक्शन और ऑब्जेक्ट के लिए कौन सा प्रकार है?",
    "options_en": ["object", "any", "unknown", "never"],
    "options_hi": ["object", "any", "unknown", "never"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which is NOT a TypeScript primitive type?",
    "question_hi": "TypeScript का कौन सा प्रिमिटिव प्रकार नहीं है?",
    "options_en": ["array", "string", "boolean", "number"],
    "options_hi": ["array", "string", "boolean", "number"],
    "answer_en": "array",
    "answer_hi": "array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What type is 3.14 in TypeScript?",
    "question_hi": "TypeScript में 3.14 का प्रकार क्या है?",
    "options_en": ["number", "float", "decimal", "double"],
    "options_hi": ["number", "float", "decimal", "double"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which type is 'hello world' in TypeScript?",
    "question_hi": "TypeScript में 'hello world' का प्रकार क्या है?",
    "options_en": ["string", "text", "varchar", "char"],
    "options_hi": ["string", "text", "varchar", "char"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What type is true in TypeScript?",
    "question_hi": "TypeScript में true का प्रकार क्या है?",
    "options_en": ["boolean", "true", "bool", "truthy"],
    "options_hi": ["boolean", "true", "bool", "truthy"],
    "answer_en": "boolean",
    "answer_hi": "boolean",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which type represents no type?",
    "question_hi": "कौन सा प्रकार कोई प्रकार नहीं दर्शाता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What type is for error throwing functions?",
    "question_hi": "एरर थ्रो करने वाले फ़ंक्शन के लिए कौन सा प्रकार है?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which type is the opposite of never?",
    "question_hi": "कौन सा प्रकार never का विपरीत है?",
    "options_en": ["any", "unknown", "void", "object"],
    "options_hi": ["any", "unknown", "void", "object"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What type is 0 in TypeScript?",
    "question_hi": "TypeScript में 0 का प्रकार क्या है?",
    "options_en": ["number", "zero", "integer", "int"],
    "options_hi": ["number", "zero", "integer", "int"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which type is '' (empty string) in TypeScript?",
    "question_hi": "TypeScript में '' (खाली स्ट्रिंग) का प्रकार क्या है?",
    "options_en": ["string", "empty", "void", "null"],
    "options_hi": ["string", "empty", "void", "null"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What type is for functions that always throw?",
    "question_hi": "हमेशा थ्रो करने वाले फ़ंक्शन के लिए कौन सा प्रकार है?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which type is least safe?",
    "question_hi": "कौन सा प्रकार सबसे कम सुरक्षित है?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What type is most restrictive?",
    "question_hi": "कौन सा प्रकार सबसे अधिक प्रतिबंधक है?",
    "options_en": ["never", "any", "unknown", "void"],
    "options_hi": ["never", "any", "unknown", "void"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which type can be assigned to any type?",
    "question_hi": "कौन सा प्रकार किसी भी प्रकार को असाइन किया जा सकता है?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What type can't be assigned to any other type?",
    "question_hi": "कौन सा प्रकार किसी अन्य प्रकार को असाइन नहीं किया जा सकता?",
    "options_en": ["never", "any", "unknown", "void"],
    "options_hi": ["never", "any", "unknown", "void"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which type is a supertype of all types?",
    "question_hi": "कौन सा प्रकार सभी प्रकारों का सुपरटाइप है?",
    "options_en": ["any", "unknown", "object", "never"],
    "options_hi": ["any", "unknown", "object", "never"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What type is a subtype of all types?",
    "question_hi": "कौन सा प्रकार सभी प्रकारों का सबटाइप है?",
    "options_en": ["never", "any", "unknown", "void"],
    "options_hi": ["never", "any", "unknown", "void"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which type is for JSON.parse() return value?",
    "question_hi": "JSON.parse() के रिटर्न वैल्यू के लिए कौन सा प्रकार है?",
    "options_en": ["any", "unknown", "object", "json"],
    "options_hi": ["any", "unknown", "object", "json"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What type is for user input validation?",
    "question_hi": "यूज़र इनपुट वैलिडेशन के लिए कौन सा प्रकार है?",
    "options_en": ["unknown", "any", "string", "object"],
    "options_hi": ["unknown", "any", "string", "object"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which type represents Infinity?",
    "question_hi": "कौन सा प्रकार Infinity को दर्शाता है?",
    "options_en": ["number", "infinity", "never", "any"],
    "options_hi": ["number", "infinity", "never", "any"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What type is -1 in TypeScript?",
    "question_hi": "TypeScript में -1 का प्रकार क्या है?",
    "options_en": ["number", "negative", "integer", "int"],
    "options_hi": ["number", "negative", "integer", "int"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which type is for mathematical calculations?",
    "question_hi": "गणितीय गणनाओं के लिए कौन सा प्रकार है?",
    "options_en": ["number", "math", "calc", "numeric"],
    "options_hi": ["number", "math", "calc", "numeric"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What type is for text concatenation?",
    "question_hi": "टेक्स्ट कॉन्कैटनेशन के लिए कौन सा प्रकार है?",
    "options_en": ["string", "text", "concat", "join"],
    "options_hi": ["string", "text", "concat", "join"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which type is for conditional logic?",
    "question_hi": "कंडीशनल लॉजिक के लिए कौन सा प्रकार है?",
    "options_en": ["boolean", "condition", "logic", "if"],
    "options_hi": ["boolean", "condition", "logic", "if"],
    "answer_en": "boolean",
    "answer_hi": "boolean",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What type is for optional values?",
    "question_hi": "ऑप्शनल वैल्यूज के लिए कौन सा प्रकार है?",
    "options_en": ["null", "undefined", "optional", "maybe"],
    "options_hi": ["null", "undefined", "optional", "maybe"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which type is for missing properties?",
    "question_hi": "गुम प्रॉपर्टीज के लिए कौन सा प्रकार है?",
    "options_en": ["undefined", "null", "missing", "void"],
    "options_hi": ["undefined", "null", "missing", "void"],
    "answer_en": "undefined",
    "answer_hi": "undefined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What type is for event handlers?",
    "question_hi": "इवेंट हैंडलर्स के लिए कौन सा प्रकार है?",
    "options_en": ["void", "event", "handler", "function"],
    "options_hi": ["void", "event", "handler", "function"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which type is for process.exit()?",
    "question_hi": "process.exit() के लिए कौन सा प्रकार है?",
    "options_en": ["never", "void", "exit", "stop"],
    "options_hi": ["never", "void", "exit", "stop"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What type is for dynamic content?",
    "question_hi": "डायनामिक कंटेंट के लिए कौन सा प्रकार है?",
    "options_en": ["any", "dynamic", "unknown", "object"],
    "options_hi": ["any", "dynamic", "unknown", "object"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which type is for API responses?",
    "question_hi": "API रिस्पॉन्सेज के लिए कौन सा प्रकार है?",
    "options_en": ["unknown", "any", "response", "object"],
    "options_hi": ["unknown", "any", "response", "object"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What type is for configuration objects?",
    "question_hi": "कॉन्फ़िगरेशन ऑब्जेक्ट्स के लिए कौन सा प्रकार है?",
    "options_en": ["object", "config", "any", "unknown"],
    "options_hi": ["object", "config", "any", "unknown"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which type is 100n (BigInt)?",
    "question_hi": "100n (BigInt) का प्रकार क्या है?",
    "options_en": ["bigint", "number", "int", "big"],
    "options_hi": ["bigint", "number", "int", "big"],
    "answer_en": "bigint",
    "answer_hi": "bigint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What type is Symbol('key')?",
    "question_hi": "Symbol('key') का प्रकार क्या है?",
    "options_en": ["symbol", "string", "key", "unique"],
    "options_hi": ["symbol", "string", "key", "unique"],
    "answer_en": "symbol",
    "answer_hi": "symbol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which type is for unique identifiers?",
    "question_hi": "यूनिक आइडेंटिफ़ायर के लिए कौन सा प्रकार है?",
    "options_en": ["symbol", "string", "number", "id"],
    "options_hi": ["symbol", "string", "number", "id"],
    "answer_en": "symbol",
    "answer_hi": "symbol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What type is for large integers?",
    "question_hi": "बड़े इंटीजर्स के लिए कौन सा प्रकार है?",
    "options_en": ["bigint", "number", "int", "long"],
    "options_hi": ["bigint", "number", "int", "long"],
    "answer_en": "bigint",
    "answer_hi": "bigint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which type is immutable and unique?",
    "question_hi": "कौन सा प्रकार इम्यूटेबल और यूनिक है?",
    "options_en": ["symbol", "string", "number", "boolean"],
    "options_hi": ["symbol", "string", "number", "boolean"],
    "answer_en": "symbol",
    "answer_hi": "symbol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What type is for object property keys?",
    "question_hi": "ऑब्जेक्ट प्रॉपर्टी कीज़ के लिए कौन सा प्रकार है?",
    "options_en": ["string | symbol", "key", "property", "any"],
    "options_hi": ["string | symbol", "key", "property", "any"],
    "answer_en": "string | symbol",
    "answer_hi": "string | symbol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which type is NaN (Not a Number)?",
    "question_hi": "NaN (नॉट ए नंबर) का प्रकार क्या है?",
    "options_en": ["number", "nan", "never", "any"],
    "options_hi": ["number", "nan", "never", "any"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What type is for TypeScript's type system?",
    "question_hi": "TypeScript के टाइप सिस्टम के लिए कौन सा प्रकार है?",
    "options_en": ["type", "any", "unknown", "never"],
    "options_hi": ["type", "any", "unknown", "never"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which type is the base of all types?",
    "question_hi": "कौन सा प्रकार सभी प्रकारों का आधार है?",
    "options_en": ["any", "unknown", "object", "never"],
    "options_hi": ["any", "unknown", "object", "never"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What type is for type assertions?",
    "question_hi": "टाइप असर्शन के लिए कौन सा प्रकार है?",
    "options_en": ["any", "unknown", "assert", "type"],
    "options_hi": ["any", "unknown", "assert", "type"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which type is for third-party libraries?",
    "question_hi": "थर्ड-पार्टी लाइब्रेरीज के लिए कौन सा प्रकार है?",
    "options_en": ["any", "unknown", "library", "external"],
    "options_hi": ["any", "unknown", "library", "external"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What type is for migration from JavaScript?",
    "question_hi": "JavaScript से माइग्रेशन के लिए कौन सा प्रकार है?",
    "options_en": ["any", "unknown", "migration", "js"],
    "options_hi": ["any", "unknown", "migration", "js"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which type is for safe any?",
    "question_hi": "सेफ any के लिए कौन सा प्रकार है?",
    "options_en": ["unknown", "any", "safe", "secure"],
    "options_hi": ["unknown", "any", "safe", "secure"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What type is for user-defined type guards?",
    "question_hi": "यूज़र-डिफाइंड टाइप गार्ड्स के लिए कौन सा प्रकार है?",
    "options_en": ["unknown", "any", "guard", "boolean"],
    "options_hi": ["unknown", "any", "guard", "boolean"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which type is for JSON objects?",
    "question_hi": "JSON ऑब्जेक्ट्स के लिए कौन सा प्रकार है?",
    "options_en": ["object", "json", "any", "unknown"],
    "options_hi": ["object", "json", "any", "unknown"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What type is for class instances?",
    "question_hi": "क्लास इंस्टेंसेज के लिए कौन सा प्रकार है?",
    "options_en": ["object", "class", "instance", "any"],
    "options_hi": ["object", "class", "instance", "any"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which type is for arrays?",
    "question_hi": "ऐरे के लिए कौन सा प्रकार है?",
    "options_en": ["object", "array", "list", "any[]"],
    "options_hi": ["object", "array", "list", "any[]"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What type is for functions?",
    "question_hi": "फ़ंक्शन के लिए कौन सा प्रकार है?",
    "options_en": ["object", "function", "func", "() => any"],
    "options_hi": ["object", "function", "func", "() => any"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which type is Date?",
    "question_hi": "Date का प्रकार क्या है?",
    "options_en": ["object", "date", "Date", "any"],
    "options_hi": ["object", "date", "Date", "any"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What type is RegExp?",
    "question_hi": "RegExp का प्रकार क्या है?",
    "options_en": ["object", "regexp", "RegExp", "any"],
    "options_hi": ["object", "regexp", "RegExp", "any"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which type is Map?",
    "question_hi": "Map का प्रकार क्या है?",
    "options_en": ["object", "map", "Map", "any"],
    "options_hi": ["object", "map", "Map", "any"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What type is Set?",
    "question_hi": "Set का प्रकार क्या है?",
    "options_en": ["object", "set", "Set", "any"],
    "options_hi": ["object", "set", "Set", "any"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which type is Promise?",
    "question_hi": "Promise का प्रकार क्या है?",
    "options_en": ["object", "promise", "Promise", "any"],
    "options_hi": ["object", "promise", "Promise", "any"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What type is for type of null?",
    "question_hi": "null के टाइप के लिए कौन सा प्रकार है?",
    "options_en": ["null", "object", "any", "undefined"],
    "options_hi": ["null", "object", "any", "undefined"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which type is for type of undefined?",
    "question_hi": "undefined के टाइप के लिए कौन सा प्रकार है?",
    "options_en": ["undefined", "void", "any", "never"],
    "options_hi": ["undefined", "void", "any", "never"],
    "answer_en": "undefined",
    "answer_hi": "undefined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What type is for type of void?",
    "question_hi": "void के टाइप के लिए कौन सा प्रकार है?",
    "options_en": ["void", "undefined", "null", "never"],
    "options_hi": ["void", "undefined", "null", "never"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which type is for type of never?",
    "question_hi": "never के टाइप के लिए कौन सा प्रकार है?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What type is for type of any?",
    "question_hi": "any के टाइप के लिए कौन सा प्रकार है?",
    "options_en": ["any", "unknown", "object", "never"],
    "options_hi": ["any", "unknown", "object", "never"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which type is for type of unknown?",
    "question_hi": "unknown के टाइप के लिए कौन सा प्रकार है?",
    "options_en": ["unknown", "any", "object", "never"],
    "options_hi": ["unknown", "any", "object", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What type is for type of object?",
    "question_hi": "object के टाइप के लिए कौन सा प्रकार है?",
    "options_en": ["object", "any", "unknown", "never"],
    "options_hi": ["object", "any", "unknown", "never"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which type is literal true?",
    "question_hi": "लिटरल true का प्रकार क्या है?",
    "options_en": ["true", "boolean", "literal", "any"],
    "options_hi": ["true", "boolean", "literal", "any"],
    "answer_en": "true",
    "answer_hi": "true",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What type is literal false?",
    "question_hi": "लिटरल false का प्रकार क्या है?",
    "options_en": ["false", "boolean", "literal", "any"],
    "options_hi": ["false", "boolean", "literal", "any"],
    "answer_en": "false",
    "answer_hi": "false",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which type is literal 42?",
    "question_hi": "लिटरल 42 का प्रकार क्या है?",
    "options_en": ["42", "number", "literal", "any"],
    "options_hi": ["42", "number", "literal", "any"],
    "answer_en": "42",
    "answer_hi": "42",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What type is literal 'hello'?",
    "question_hi": "लिटरल 'hello' का प्रकार क्या है?",
    "options_en": ["'hello'", "string", "literal", "any"],
    "options_hi": ["'hello'", "string", "literal", "any"],
    "answer_en": "'hello'",
    "answer_hi": "'hello'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which type is union string | number?",
    "question_hi": "यूनियन string | number का प्रकार क्या है?",
    "options_en": ["string | number", "union", "any", "mixed"],
    "options_hi": ["string | number", "union", "any", "mixed"],
    "answer_en": "string | number",
    "answer_hi": "string | number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What type is intersection {x: number} & {y: string}?",
    "question_hi": "इंटरसेक्शन {x: number} & {y: string} का प्रकार क्या है?",
    "options_en": ["{x: number} & {y: string}", "intersection", "object", "any"],
    "options_hi": ["{x: number} & {y: string}", "intersection", "object", "any"],
    "answer_en": "{x: number} & {y: string}",
    "answer_hi": "{x: number} & {y: string}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which type is tuple [string, number]?",
    "question_hi": "टुपल [string, number] का प्रकार क्या है?",
    "options_en": ["[string, number]", "tuple", "array", "any[]"],
    "options_hi": ["[string, number]", "tuple", "array", "any[]"],
    "answer_en": "[string, number]",
    "answer_hi": "[string, number]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What type is array string[]?",
    "question_hi": "ऐरे string[] का प्रकार क्या है?",
    "options_en": ["string[]", "array", "list", "any[]"],
    "options_hi": ["string[]", "array", "list", "any[]"],
    "answer_en": "string[]",
    "answer_hi": "string[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which type is readonly array?",
    "question_hi": "रीडओनली ऐरे का प्रकार क्या है?",
    "options_en": ["readonly string[]", "string[]", "array", "any[]"],
    "options_hi": ["readonly string[]", "string[]", "array", "any[]"],
    "answer_en": "readonly string[]",
    "answer_hi": "readonly string[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What type is type alias?",
    "question_hi": "टाइप एलियास का प्रकार क्या है?",
    "options_en": ["type", "alias", "any", "unknown"],
    "options_hi": ["type", "alias", "any", "unknown"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which type is enum?",
    "question_hi": "enum का प्रकार क्या है?",
    "options_en": ["enum", "union", "literal", "any"],
    "options_hi": ["enum", "union", "literal", "any"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What type is generic T?",
    "question_hi": "जेनेरिक T का प्रकार क्या है?",
    "options_en": ["T", "generic", "type", "any"],
    "options_hi": ["T", "generic", "type", "any"],
    "answer_en": "T",
    "answer_hi": "T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which type is conditional?",
    "question_hi": "कंडीशनल का प्रकार क्या है?",
    "options_en": ["T extends U ? X : Y", "conditional", "if", "ternary"],
    "options_hi": ["T extends U ? X : Y", "conditional", "if", "ternary"],
    "answer_en": "T extends U ? X : Y",
    "answer_hi": "T extends U ? X : Y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What type is mapped?",
    "question_hi": "मैप्ड का प्रकार क्या है?",
    "options_en": ["{[K in keyof T]: U}", "mapped", "object", "any"],
    "options_hi": ["{[K in keyof T]: U}", "mapped", "object", "any"],
    "answer_en": "{[K in keyof T]: U}",
    "answer_hi": "{[K in keyof T]: U}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which type is template literal?",
    "question_hi": "टेम्पलेट लिटरल का प्रकार क्या है?",
    "options_en": ["`${string}`", "template", "string", "literal"],
    "options_hi": ["`${string}`", "template", "string", "literal"],
    "answer_en": "`${string}`",
    "answer_hi": "`${string}`",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What type is indexed access?",
    "question_hi": "इंडेक्स्ड एक्सेस का प्रकार क्या है?",
    "options_en": ["T[K]", "indexed", "access", "keyof"],
    "options_hi": ["T[K]", "indexed", "access", "keyof"],
    "answer_en": "T[K]",
    "answer_hi": "T[K]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which type is keyof?",
    "question_hi": "keyof का प्रकार क्या है?",
    "options_en": ["keyof T", "keys", "properties", "string"],
    "options_hi": ["keyof T", "keys", "properties", "string"],
    "answer_en": "keyof T",
    "answer_hi": "keyof T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What type is typeof?",
    "question_hi": "typeof का प्रकार क्या है?",
    "options_en": ["typeof T", "type", "instanceof", "any"],
    "options_hi": ["typeof T", "type", "instanceof", "any"],
    "answer_en": "typeof T",
    "answer_hi": "typeof T",
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