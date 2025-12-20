const questions = [
  {
    "num": 1,
    "question_en": "What is the TypeScript type for textual data?",
    "question_hi": "टेक्स्चुअल डेटा के लिए TypeScript का टाइप क्या है?",
    "options_en": ["string", "text", "char", "varchar"],
    "options_hi": ["string", "text", "char", "varchar"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which type handles both integers and floating-point numbers in TypeScript?",
    "question_hi": "TypeScript में पूर्णांक और फ्लोटिंग-पॉइंट दोनों संख्याओं को कौन-सा टाइप हैंडल करता है?",
    "options_en": ["number", "int", "float", "numeric"],
    "options_hi": ["number", "int", "float", "numeric"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What type represents true/false values in TypeScript?",
    "question_hi": "TypeScript में true/false मानों को कौन-सा टाइप दर्शाता है?",
    "options_en": ["boolean", "bool", "logic", "binary"],
    "options_hi": ["boolean", "bool", "logic", "binary"],
    "answer_en": "boolean",
    "answer_hi": "boolean",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which type explicitly means 'no value' for functions that don't return anything?",
    "question_hi": "कौन-सा टाइप उन फंक्शन्स के लिए 'कोई मान नहीं' दर्शाता है जो कुछ भी रिटर्न नहीं करते?",
    "options_en": ["void", "null", "undefined", "never"],
    "options_hi": ["void", "null", "undefined", "never"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which TypeScript type represents values that never occur?",
    "question_hi": "TypeScript में कौन-सा टाइप ऐसे मानों को दर्शाता है जो कभी नहीं होते?",
    "options_en": ["never", "unknown", "any", "undefined"],
    "options_hi": ["never", "unknown", "any", "undefined"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the type of the value 'null' in TypeScript?",
    "question_hi": "TypeScript में 'null' वैल्यू का टाइप क्या है?",
    "options_en": ["null", "object", "undefined", "any"],
    "options_hi": ["null", "object", "undefined", "any"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which type is a type-safe counterpart of 'any'?",
    "question_hi": "'any' का टाइप-सेफ समकक्ष कौन-सा टाइप है?",
    "options_en": ["unknown", "object", "void", "never"],
    "options_hi": ["unknown", "object", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which primitive type is used for arbitrarily large integers?",
    "question_hi": "मनमाने ढंग से बड़े पूर्णांकों के लिए कौन-सा प्रिमिटिव टाइप प्रयोग किया जाता है?",
    "options_en": ["bigint", "number", "long", "int64"],
    "options_hi": ["bigint", "number", "long", "int64"],
    "answer_en": "bigint",
    "answer_hi": "bigint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What type is inferred when a variable is declared without a type annotation?",
    "question_hi": "बिना टाइप एनोटेशन के वेरिएबल डिक्लेयर करने पर कौन-सा टाइप इंफर किया जाता है?",
    "options_en": ["Type of initial value", "any", "unknown", "undefined"],
    "options_hi": ["प्रारंभिक मान का टाइप", "any", "unknown", "undefined"],
    "answer_en": "Type of initial value",
    "answer_hi": "प्रारंभिक मान का टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which type represents non-primitive types in TypeScript?",
    "question_hi": "TypeScript में गैर-प्रिमिटिव टाइप्स को कौन-सा टाइप दर्शाता है?",
    "options_en": ["object", "any", "class", "interface"],
    "options_hi": ["object", "any", "class", "interface"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is a literal type in TypeScript?",
    "question_hi": "TypeScript में लिटरल टाइप क्या है?",
    "options_en": ["A type that represents a specific value", "A type for strings only", "A type for numbers only", "A type for constants"],
    "options_hi": ["एक विशिष्ट मान को दर्शाने वाला टाइप", "केवल स्ट्रिंग्स के लिए टाइप", "केवल नंबर्स के लिए टाइप", "कॉन्स्टेंट्स के लिए टाइप"],
    "answer_en": "A type that represents a specific value",
    "answer_hi": "एक विशिष्ट मान को दर्शाने वाला टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does 'string literal type' mean in TypeScript?",
    "question_hi": "TypeScript में 'स्ट्रिंग लिटरल टाइप' का क्या अर्थ है?",
    "options_en": ["A type that can only be a specific string", "Any string type", "A type for string constants", "A type that extends string"],
    "options_hi": ["एक टाइप जो केवल एक विशिष्ट स्ट्रिंग हो सकता है", "कोई भी स्ट्रिंग टाइप", "स्ट्रिंग कॉन्स्टेंट्स के लिए टाइप", "एक टाइप जो स्ट्रिंग को एक्सटेंड करता है"],
    "answer_en": "A type that can only be a specific string",
    "answer_hi": "एक टाइप जो केवल एक विशिष्ट स्ट्रिंग हो सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is a union type in TypeScript?",
    "question_hi": "TypeScript में यूनियन टाइप क्या है?",
    "options_en": ["A type that can be one of several types", "A type that combines multiple types", "A type for arrays", "A type for OR operations"],
    "options_hi": ["एक टाइप जो कई टाइप्स में से एक हो सकता है", "एक टाइप जो कई टाइप्स को कॉम्बाइन करता है", "ऐरेज़ के लिए टाइप", "OR ऑपरेशन्स के लिए टाइप"],
    "answer_en": "A type that can be one of several types",
    "answer_hi": "एक टाइप जो कई टाइप्स में से एक हो सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which operator is used for union types in TypeScript?",
    "question_hi": "TypeScript में यूनियन टाइप्स के लिए कौन-सा ऑपरेटर प्रयोग किया जाता है?",
    "options_en": ["|", "&", "||", "or"],
    "options_hi": ["|", "&", "||", "or"],
    "answer_en": "|",
    "answer_hi": "|",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is an intersection type in TypeScript?",
    "question_hi": "TypeScript में इंटरसेक्शन टाइप क्या है?",
    "options_en": ["A type that combines multiple types into one", "A type that finds common types", "A type for AND operations", "A type that intersects arrays"],
    "options_hi": ["एक टाइप जो कई टाइप्स को एक में कॉम्बाइन करता है", "एक टाइप जो कॉमन टाइप्स ढूँढता है", "AND ऑपरेशन्स के लिए टाइप", "एक टाइप जो ऐरेज़ को इंटरसेक्ट करता है"],
    "answer_en": "A type that combines multiple types into one",
    "answer_hi": "एक टाइप जो कई टाइप्स को एक में कॉम्बाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which operator is used for intersection types in TypeScript?",
    "question_hi": "TypeScript में इंटरसेक्शन टाइप्स के लिए कौन-सा ऑपरेटर प्रयोग किया जाता है?",
    "options_en": ["&", "|", "&&", "and"],
    "options_hi": ["&", "|", "&&", "and"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What keyword is used to create a type alias in TypeScript?",
    "question_hi": "TypeScript में टाइप अलियास बनाने के लिए कौन-सा कीवर्ड प्रयोग किया जाता है?",
    "options_en": ["type", "alias", "typedef", "interface"],
    "options_hi": ["type", "alias", "typedef", "interface"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "How do you define an array of numbers in TypeScript?",
    "question_hi": "TypeScript में नंबर्स की ऐरे कैसे डिफाइन करते हैं?",
    "options_en": ["number[]", "Array<number>", "Both A and B", "num[]"],
    "options_hi": ["number[]", "Array<number>", "A और B दोनों", "num[]"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is a tuple in TypeScript?",
    "question_hi": "TypeScript में ट्यूपल क्या है?",
    "options_en": ["An array with fixed number of elements and known types", "A key-value pair", "A special array type", "A collection of different types"],
    "options_hi": ["एक ऐरे जिसमें एलिमेंट्स की फिक्स्ड संख्या और ज्ञात टाइप्स होते हैं", "एक की-वैल्यू पेयर", "एक विशेष ऐरे टाइप", "विभिन्न टाइप्स का कलेक्शन"],
    "answer_en": "An array with fixed number of elements and known types",
    "answer_hi": "एक ऐरे जिसमें एलिमेंट्स की फिक्स्ड संख्या और ज्ञात टाइप्स होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "How do you define a tuple type for a pair of string and number?",
    "question_hi": "स्ट्रिंग और नंबर की एक जोड़ी के लिए ट्यूपल टाइप कैसे डिफाइन करते हैं?",
    "options_en": ["[string, number]", "tuple(string, number)", "Array<string, number>", "(string, number)"],
    "options_hi": ["[string, number]", "tuple(string, number)", "Array<string, number>", "(string, number)"],
    "answer_en": "[string, number]",
    "answer_hi": "[string, number]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the purpose of the 'enum' keyword in TypeScript?",
    "question_hi": "TypeScript में 'enum' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["To define a set of named constants", "To create enumerations", "To define a collection of values", "All of the above"],
    "options_hi": ["नामित कॉन्स्टेंट्स के एक सेट को डिफाइन करने के लिए", "एन्युमरेशन बनाने के लिए", "मानों के कलेक्शन को डिफाइन करने के लिए", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What are the two main types of enums in TypeScript?",
    "question_hi": "TypeScript में एनम्स के दो मुख्य प्रकार कौन-से हैं?",
    "options_en": ["Numeric and String", "Number and Text", "Integer and String", "Value and Label"],
    "options_hi": ["न्यूमेरिक और स्ट्रिंग", "नंबर और टेक्स्ट", "इंटीजर और स्ट्रिंग", "वैल्यू और लेबल"],
    "answer_en": "Numeric and String",
    "answer_hi": "न्यूमेरिक और स्ट्रिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is type assertion in TypeScript?",
    "question_hi": "TypeScript में टाइप एसर्शन क्या है?",
    "options_en": ["Telling the compiler about the type of a value", "Checking the type at runtime", "Converting one type to another", "Asserting a condition"],
    "options_hi": ["कंपाइलर को एक मान के टाइप के बारे में बताना", "रनटाइम पर टाइप चेक करना", "एक टाइप को दूसरे में बदलना", "एक कंडीशन को एसर्ट करना"],
    "answer_en": "Telling the compiler about the type of a value",
    "answer_hi": "कंपाइलर को एक मान के टाइप के बारे में बताना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What are the two syntaxes for type assertion in TypeScript?",
    "question_hi": "TypeScript में टाइप एसर्शन के लिए दो सिंटैक्स कौन-से हैं?",
    "options_en": ["as syntax and angle-bracket syntax", "assert and cast", "type and as", "<> and as"],
    "options_hi": ["as सिंटैक्स और एंगल-ब्रैकेट सिंटैक्स", "assert और cast", "type और as", "<> और as"],
    "answer_en": "as syntax and angle-bracket syntax",
    "answer_hi": "as सिंटैक्स और एंगल-ब्रैकेट सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is type inference in TypeScript?",
    "question_hi": "TypeScript में टाइप इंफरेंस क्या है?",
    "options_en": ["TypeScript's ability to determine types automatically", "Manually specifying types", "Checking types at runtime", "Converting types"],
    "options_hi": ["टाइप्स को स्वचालित रूप से निर्धारित करने की TypeScript की क्षमता", "मैन्युअल रूप से टाइप्स निर्दिष्ट करना", "रनटाइम पर टाइप्स चेक करना", "टाइप्स को बदलना"],
    "answer_en": "TypeScript's ability to determine types automatically",
    "answer_hi": "टाइप्स को स्वचालित रूप से निर्धारित करने की TypeScript की क्षमता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is contextual typing in TypeScript?",
    "question_hi": "TypeScript में कॉन्टेक्स्चुअल टाइपिंग क्या है?",
    "options_en": ["Type inference based on context", "Typing based on variable names", "Dynamic typing", "Type checking in specific contexts"],
    "options_hi": ["कॉन्टेक्स्ट के आधार पर टाइप इंफरेंस", "वेरिएबल नामों के आधार पर टाइपिंग", "डायनेमिक टाइपिंग", "विशिष्ट संदर्भों में टाइप चेकिंग"],
    "answer_en": "Type inference based on context",
    "answer_hi": "कॉन्टेक्स्ट के आधार पर टाइप इंफरेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is structural typing in TypeScript?",
    "question_hi": "TypeScript में स्ट्रक्चरल टाइपिंग क्या है?",
    "options_en": ["Type compatibility based on structure, not names", "Typing based on class hierarchy", "Static typing structure", "Type structure definition"],
    "options_hi": ["नामों के बजाय संरचना के आधार पर टाइप संगतता", "क्लास हायरार्की के आधार पर टाइपिंग", "स्टेटिक टाइपिंग संरचना", "टाइप संरचना परिभाषा"],
    "answer_en": "Type compatibility based on structure, not names",
    "answer_hi": "नामों के बजाय संरचना के आधार पर टाइप संगतता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What are excess property checks in TypeScript?",
    "question_hi": "TypeScript में एक्सेस प्रॉपर्टी चेक्स क्या हैं?",
    "options_en": ["Checking for extra properties in object literals", "Checking property types", "Validating property existence", "Checking property access"],
    "options_hi": ["ऑब्जेक्ट लिटरल्स में अतिरिक्त प्रॉपर्टीज़ की जाँच", "प्रॉपर्टी टाइप्स की जाँच", "प्रॉपर्टी अस्तित्व की वैलिडेशन", "प्रॉपर्टी एक्सेस की जाँच"],
    "answer_en": "Checking for extra properties in object literals",
    "answer_hi": "ऑब्जेक्ट लिटरल्स में अतिरिक्त प्रॉपर्टीज़ की जाँच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is a conditional type in TypeScript?",
    "question_hi": "TypeScript में कंडीशनल टाइप क्या है?",
    "options_en": ["A type that depends on a condition", "A type with conditions", "A type that checks conditions", "A conditional statement for types"],
    "options_hi": ["एक टाइप जो एक कंडीशन पर निर्भर करता है", "कंडीशन्स वाला एक टाइप", "कंडीशन्स चेक करने वाला टाइप", "टाइप्स के लिए कंडीशनल स्टेटमेंट"],
    "answer_en": "A type that depends on a condition",
    "answer_hi": "एक टाइप जो एक कंडीशन पर निर्भर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is a mapped type in TypeScript?",
    "question_hi": "TypeScript में मैप्ड टाइप क्या है?",
    "options_en": ["A type that transforms properties of another type", "A type for mapping values", "A type that maps keys to values", "A collection type"],
    "options_hi": ["एक टाइप जो किसी अन्य टाइप की प्रॉपर्टीज़ को ट्रांसफॉर्म करता है", "मानों को मैप करने के लिए टाइप", "एक टाइप जो कीज़ को वैल्यूज़ में मैप करता है", "एक कलेक्शन टाइप"],
    "answer_en": "A type that transforms properties of another type",
    "answer_hi": "एक टाइप जो किसी अन्य टाइप की प्रॉपर्टीज़ को ट्रांसफॉर्म करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is a template literal type in TypeScript?",
    "question_hi": "TypeScript में टेम्पलेट लिटरल टाइप क्या है?",
    "options_en": ["A type based on template literal strings", "A string template type", "A type for string templates", "A literal template"],
    "options_hi": ["टेम्पलेट लिटरल स्ट्रिंग्स पर आधारित एक टाइप", "एक स्ट्रिंग टेम्पलेट टाइप", "स्ट्रिंग टेम्पलेट्स के लिए टाइप", "एक लिटरल टेम्पलेट"],
    "answer_en": "A type based on template literal strings",
    "answer_hi": "टेम्पलेट लिटरल स्ट्रिंग्स पर आधारित एक टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does the 'Partial' utility type do in TypeScript?",
    "question_hi": "TypeScript में 'Partial' यूटिलिटी टाइप क्या करता है?",
    "options_en": ["Makes all properties optional", "Makes all properties required", "Selects some properties", "Omits some properties"],
    "options_hi": ["सभी प्रॉपर्टीज़ को ऑप्शनल बनाता है", "सभी प्रॉपर्टीज़ को रिक्वायर्ड बनाता है", "कुछ प्रॉपर्टीज़ को सेलेक्ट करता है", "कुछ प्रॉपर्टीज़ को ओमिट करता है"],
    "answer_en": "Makes all properties optional",
    "answer_hi": "सभी प्रॉपर्टीज़ को ऑप्शनल बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does the 'Required' utility type do in TypeScript?",
    "question_hi": "TypeScript में 'Required' यूटिलिटी टाइप क्या करता है?",
    "options_en": ["Makes all properties required", "Makes all properties optional", "Checks required properties", "Validates required fields"],
    "options_hi": ["सभी प्रॉपर्टीज़ को रिक्वायर्ड बनाता है", "सभी प्रॉपर्टीज़ को ऑप्शनल बनाता है", "रिक्वायर्ड प्रॉपर्टीज़ चेक करता है", "रिक्वायर्ड फील्ड्स वैलिडेट करता है"],
    "answer_en": "Makes all properties required",
    "answer_hi": "सभी प्रॉपर्टीज़ को रिक्वायर्ड बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'Readonly' utility type do in TypeScript?",
    "question_hi": "TypeScript में 'Readonly' यूटिलिटी टाइप क्या करता है?",
    "options_en": ["Makes all properties readonly", "Makes properties readable only", "Creates read-only objects", "Prevents property modification"],
    "options_hi": ["सभी प्रॉपर्टीज़ को रीडओनली बनाता है", "प्रॉपर्टीज़ को केवल पढ़ने योग्य बनाता है", "रीड-ओनली ऑब्जेक्ट्स बनाता है", "प्रॉपर्टी मॉडिफिकेशन को रोकता है"],
    "answer_en": "Makes all properties readonly",
    "answer_hi": "सभी प्रॉपर्टीज़ को रीडओनली बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does the 'Pick' utility type do in TypeScript?",
    "question_hi": "TypeScript में 'Pick' यूटिलिटी टाइप क्या करता है?",
    "options_en": ["Selects a subset of properties", "Picks random properties", "Chooses properties by value", "Selects all properties"],
    "options_hi": ["प्रॉपर्टीज़ का एक सबसेट सेलेक्ट करता है", "रैंडम प्रॉपर्टीज़ पिक करता है", "वैल्यू के द्वारा प्रॉपर्टीज़ चूज़ करता है", "सभी प्रॉपर्टीज़ सेलेक्ट करता है"],
    "answer_en": "Selects a subset of properties",
    "answer_hi": "प्रॉपर्टीज़ का एक सबसेट सेलेक्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does the 'Omit' utility type do in TypeScript?",
    "question_hi": "TypeScript में 'Omit' यूटिलिटी टाइप क्या करता है?",
    "options_en": ["Excludes specified properties", "Omits all properties", "Skips property checks", "Ignores properties"],
    "options_hi": ["निर्दिष्ट प्रॉपर्टीज़ को एक्सक्लूड करता है", "सभी प्रॉपर्टीज़ को ओमिट करता है", "प्रॉपर्टी चेक्स स्किप करता है", "प्रॉपर्टीज़ को इग्नोर करता है"],
    "answer_en": "Excludes specified properties",
    "answer_hi": "निर्दिष्ट प्रॉपर्टीज़ को एक्सक्लूड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the main difference between 'never' and 'void'?",
    "question_hi": "'never' और 'void' में मुख्य अंतर क्या है?",
    "options_en": ["void can have undefined/null, never can't have any value", "never is for errors, void is for no return", "Both are same", "void is stricter than never"],
    "options_hi": ["void में undefined/null हो सकता है, never में कोई मान नहीं हो सकता", "never एरर्स के लिए है, void नो रिटर्न के लिए है", "दोनों समान हैं", "void never से स्ट्रिक्टर है"],
    "answer_en": "void can have undefined/null, never can't have any value",
    "answer_hi": "void में undefined/null हो सकता है, never में कोई मान नहीं हो सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the difference between 'unknown' and 'any'?",
    "question_hi": "'unknown' और 'any' में क्या अंतर है?",
    "options_en": ["unknown is type-safe, any is not", "any is newer than unknown", "unknown allows any operation", "Both are identical"],
    "options_hi": ["unknown टाइप-सेफ है, any नहीं है", "any unknown से नया है", "unknown कोई भी ऑपरेशन अनुमति देता है", "दोनों समान हैं"],
    "answer_en": "unknown is type-safe, any is not",
    "answer_hi": "unknown टाइप-सेफ है, any नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "How are 'null' and 'undefined' different in TypeScript?",
    "question_hi": "TypeScript में 'null' और 'undefined' कैसे अलग हैं?",
    "options_en": ["They are distinct types with different meanings", "They are the same", "undefined is a subtype of null", "null is newer than undefined"],
    "options_hi": ["वे अलग-अलग अर्थों वाले विशिष्ट टाइप हैं", "वे समान हैं", "undefined, null का एक सबटाइप है", "null undefined से नया है"],
    "answer_en": "They are distinct types with different meanings",
    "answer_hi": "वे अलग-अलग अर्थों वाले विशिष्ट टाइप हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is a type guard in TypeScript?",
    "question_hi": "TypeScript में टाइप गार्ड क्या है?",
    "options_en": ["An expression that narrows down a type", "A function that protects types", "A type safety mechanism", "A runtime type check"],
    "options_hi": ["एक एक्सप्रेशन जो एक टाइप को संकीर्ण करता है", "एक फंक्शन जो टाइप्स की सुरक्षा करता है", "एक टाइप सेफ्टी मैकेनिज्म", "एक रनटाइम टाइप चेक"],
    "answer_en": "An expression that narrows down a type",
    "answer_hi": "एक एक्सप्रेशन जो एक टाइप को संकीर्ण करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the 'typeof' type guard used for?",
    "question_hi": "'typeof' टाइप गार्ड किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Checking primitive types at runtime", "Getting type of variable", "Type inference", "Type checking"],
    "options_hi": ["रनटाइम पर प्रिमिटिव टाइप्स की जाँच", "वेरिएबल का टाइप प्राप्त करना", "टाइप इंफरेंस", "टाइप चेकिंग"],
    "answer_en": "Checking primitive types at runtime",
    "answer_hi": "रनटाइम पर प्रिमिटिव टाइप्स की जाँच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the 'instanceof' type guard used for?",
    "question_hi": "'instanceof' टाइप गार्ड किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Checking class instances", "Checking instance types", "Validating objects", "All of the above"],
    "options_hi": ["क्लास इंस्टेंसेज की जाँच", "इंस्टेंस टाइप्स की जाँच", "ऑब्जेक्ट्स वैलिडेट करना", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does the 'keyof' operator do in TypeScript?",
    "question_hi": "TypeScript में 'keyof' ऑपरेटर क्या करता है?",
    "options_en": ["Gets keys of a type", "Checks if key exists", "Validates object keys", "Creates key types"],
    "options_hi": ["एक टाइप की कीज़ प्राप्त करता है", "चेक करता है कि की मौजूद है या नहीं", "ऑब्जेक्ट कीज़ वैलिडेट करता है", "की टाइप्स बनाता है"],
    "answer_en": "Gets keys of a type",
    "answer_hi": "एक टाइप की कीज़ प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'typeof' used for in TypeScript (as a type operator)?",
    "question_hi": "TypeScript में 'typeof' का प्रयोग किसके लिए किया जाता है (टाइप ऑपरेटर के रूप में)?",
    "options_en": ["To get the type of a value", "To check type at runtime", "To create type aliases", "To define types"],
    "options_hi": ["एक मान का टाइप प्राप्त करने के लिए", "रनटाइम पर टाइप चेक करने के लिए", "टाइप अलियासेस बनाने के लिए", "टाइप्स डिफाइन करने के लिए"],
    "answer_en": "To get the type of a value",
    "answer_hi": "एक मान का टाइप प्राप्त करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the 'as const' assertion used for?",
    "question_hi": "'as const' एसर्शन किसके लिए प्रयोग किया जाता है?",
    "options_en": ["To make values readonly and infer literal types", "To create constants", "To assert constant values", "To define const variables"],
    "options_hi": ["मानों को रीडओनली बनाने और लिटरल टाइप्स इंफर करने के लिए", "कॉन्स्टेंट्स बनाने के लिए", "कॉन्स्टेंट वैल्यूज़ एसर्ट करने के लिए", "कॉन्स्ट वेरिएबल्स डिफाइन करने के लिए"],
    "answer_en": "To make values readonly and infer literal types",
    "answer_hi": "मानों को रीडओनली बनाने और लिटरल टाइप्स इंफर करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is an indexed access type in TypeScript?",
    "question_hi": "TypeScript में इंडेक्स्ड एक्सेस टाइप क्या है?",
    "options_en": ["Accessing a type using an index", "Getting type of property by key", "Array-like type access", "All of the above"],
    "options_hi": ["इंडेक्स का उपयोग करके टाइप एक्सेस करना", "की द्वारा प्रॉपर्टी का टाइप प्राप्त करना", "ऐरे-जैसा टाइप एक्सेस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "How do you make a property optional in a type?",
    "question_hi": "एक टाइप में प्रॉपर्टी को ऑप्शनल कैसे बनाते हैं?",
    "options_en": ["Add ? after property name", "Use optional keyword", "Make it undefined", "Use Partial type"],
    "options_hi": ["प्रॉपर्टी नाम के बाद ? जोड़ें", "optional कीवर्ड प्रयोग करें", "इसे undefined बनाएँ", "Partial टाइप प्रयोग करें"],
    "answer_en": "Add ? after property name",
    "answer_hi": "प्रॉपर्टी नाम के बाद ? जोड़ें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How do you make a property readonly in a type?",
    "question_hi": "एक टाइप में प्रॉपर्टी को रीडओनली कैसे बनाते हैं?",
    "options_en": ["Add readonly keyword before property", "Use const keyword", "Make it immutable", "Use Readonly type"],
    "options_hi": ["प्रॉपर्टी से पहले readonly कीवर्ड जोड़ें", "const कीवर्ड प्रयोग करें", "इसे इम्यूटेबल बनाएँ", "Readonly टाइप प्रयोग करें"],
    "answer_en": "Add readonly keyword before property",
    "answer_hi": "प्रॉपर्टी से पहले readonly कीवर्ड जोड़ें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is a recursive type in TypeScript?",
    "question_hi": "TypeScript में रिकर्सिव टाइप क्या है?",
    "options_en": ["A type that references itself", "A type that repeats", "A looping type", "A type with recursion"],
    "options_hi": ["एक टाइप जो स्वयं को रेफरेंस करता है", "एक टाइप जो दोहराता है", "एक लूपिंग टाइप", "रिकर्सन वाला एक टाइप"],
    "answer_en": "A type that references itself",
    "answer_hi": "एक टाइप जो स्वयं को रेफरेंस करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is type widening in TypeScript?",
    "question_hi": "TypeScript में टाइप विडेनिंग क्या है?",
    "options_en": ["Inferring a broader type from a literal", "Making types wider", "Expanding type definitions", "Type generalization"],
    "options_hi": ["लिटरल से एक व्यापक टाइप इंफर करना", "टाइप्स को विस्तृत बनाना", "टाइप डेफिनिशन्स का विस्तार", "टाइप जनरलाइज़ेशन"],
    "answer_en": "Inferring a broader type from a literal",
    "answer_hi": "लिटरल से एक व्यापक टाइप इंफर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is type narrowing in TypeScript?",
    "question_hi": "TypeScript में टाइप नैरोइंग क्या है?",
    "options_en": ["Reducing a type to a more specific type", "Making types narrower", "Type specialization", "All of the above"],
    "options_hi": ["एक टाइप को अधिक विशिष्ट टाइप में कम करना", "टाइप्स को संकीर्ण बनाना", "टाइप स्पेशलाइज़ेशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is a branded type in TypeScript?",
    "question_hi": "TypeScript में ब्रांडेड टाइप क्या है?",
    "options_en": ["A type with a unique brand property", "A branded primitive type", "A type with metadata", "A custom type brand"],
    "options_hi": ["एक अद्वितीय ब्रांड प्रॉपर्टी वाला टाइप", "एक ब्रांडेड प्रिमिटिव टाइप", "मेटाडेटा वाला एक टाइप", "एक कस्टम टाइप ब्रांड"],
    "answer_en": "A type with a unique brand property",
    "answer_hi": "एक अद्वितीय ब्रांड प्रॉपर्टी वाला टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the 'Record' utility type used for?",
    "question_hi": "'Record' यूटिलिटी टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Creating object types with specific keys and value types", "Recording types", "Creating type records", "Documenting types"],
    "options_hi": ["विशिष्ट कीज़ और वैल्यू टाइप्स वाले ऑब्जेक्ट टाइप्स बनाने के लिए", "टाइप्स रिकॉर्ड करने के लिए", "टाइप रिकॉर्ड्स बनाने के लिए", "टाइप्स डॉक्यूमेंट करने के लिए"],
    "answer_en": "Creating object types with specific keys and value types",
    "answer_hi": "विशिष्ट कीज़ और वैल्यू टाइप्स वाले ऑब्जेक्ट टाइप्स बनाने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the 'Exclude' utility type used for?",
    "question_hi": "'Exclude' यूटिलिटी टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Excluding types from a union", "Removing types", "Filtering type unions", "All of the above"],
    "options_hi": ["यूनियन से टाइप्स को एक्सक्लूड करने के लिए", "टाइप्स हटाने के लिए", "टाइप यूनियन्स फ़िल्टर करने के लिए", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the 'Extract' utility type used for?",
    "question_hi": "'Extract' यूटिलिटी टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Extracting types from a union", "Getting specific types", "Selecting union members", "All of the above"],
    "options_hi": ["यूनियन से टाइप्स एक्सट्रैक्ट करने के लिए", "विशिष्ट टाइप्स प्राप्त करने के लिए", "यूनियन मेंबर्स सेलेक्ट करने के लिए", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the 'NonNullable' utility type used for?",
    "question_hi": "'NonNullable' यूटिलिटी टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Removing null and undefined from a type", "Making types non-nullable", "Ensuring non-null values", "All of the above"],
    "options_hi": ["एक टाइप से null और undefined हटाने के लिए", "टाइप्स को नॉन-नलबल बनाने के लिए", "नॉन-नल वैल्यूज़ सुनिश्चित करने के लिए", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the 'Parameters' utility type used for?",
    "question_hi": "'Parameters' यूटिलिटी टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Extracting parameter types from a function type", "Getting function parameters", "Parameter type inference", "All of the above"],
    "options_hi": ["फंक्शन टाइप से पैरामीटर टाइप्स एक्सट्रैक्ट करने के लिए", "फंक्शन पैरामीटर्स प्राप्त करने के लिए", "पैरामीटर टाइप इंफरेंस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the 'ReturnType' utility type used for?",
    "question_hi": "'ReturnType' यूटिलिटी टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Extracting return type from a function type", "Getting function return type", "Return type inference", "All of the above"],
    "options_hi": ["फंक्शन टाइप से रिटर्न टाइप एक्सट्रैक्ट करने के लिए", "फंक्शन रिटर्न टाइप प्राप्त करने के लिए", "रिटर्न टाइप इंफरेंस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the 'ConstructorParameters' utility type used for?",
    "question_hi": "'ConstructorParameters' यूटिलिटी टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Extracting constructor parameter types", "Getting class constructor parameters", "Constructor type parameters", "All of the above"],
    "options_hi": ["कंस्ट्रक्टर पैरामीटर टाइप्स एक्सट्रैक्ट करने के लिए", "क्लास कंस्ट्रक्टर पैरामीटर्स प्राप्त करने के लिए", "कंस्ट्रक्टर टाइप पैरामीटर्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is the 'InstanceType' utility type used for?",
    "question_hi": "'InstanceType' यूटिलिटी टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Extracting instance type from a constructor", "Getting class instance type", "Instance type of constructor", "All of the above"],
    "options_hi": ["कंस्ट्रक्टर से इंस्टेंस टाइप एक्सट्रैक्ट करने के लिए", "क्लास इंस्टेंस टाइप प्राप्त करने के लिए", "कंस्ट्रक्टर का इंस्टेंस टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is a 'this' type in TypeScript?",
    "question_hi": "TypeScript में 'this' टाइप क्या है?",
    "options_en": ["A type representing the current instance", "The this keyword type", "Current object type", "Self-referencing type"],
    "options_hi": ["वर्तमान इंस्टेंस को दर्शाने वाला एक टाइप", "this कीवर्ड टाइप", "वर्तमान ऑब्जेक्ट टाइप", "स्व-संदर्भित टाइप"],
    "answer_en": "A type representing the current instance",
    "answer_hi": "वर्तमान इंस्टेंस को दर्शाने वाला एक टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is a function type in TypeScript?",
    "question_hi": "TypeScript में फंक्शन टाइप क्या है?",
    "options_en": ["A type describing a function's parameters and return type", "Function definition type", "Type for functions", "All of the above"],
    "options_hi": ["फंक्शन के पैरामीटर्स और रिटर्न टाइप का वर्णन करने वाला टाइप", "फंक्शन डेफिनिशन टाइप", "फंक्शन्स के लिए टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is a call signature in TypeScript?",
    "question_hi": "TypeScript में कॉल सिग्नेचर क्या है?",
    "options_en": ["A way to describe a callable type", "Function call type signature", "Signature for calling", "All of the above"],
    "options_hi": ["कॉलेबल टाइप का वर्णन करने का एक तरीका", "फंक्शन कॉल टाइप सिग्नेचर", "कॉलिंग के लिए सिग्नेचर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is a construct signature in TypeScript?",
    "question_hi": "TypeScript में कंस्ट्रक्ट सिग्नेचर क्या है?",
    "options_en": ["A way to describe a constructor type", "Constructor type signature", "Signature for new keyword", "All of the above"],
    "options_hi": ["कंस्ट्रक्टर टाइप का वर्णन करने का एक तरीका", "कंस्ट्रक्टर टाइप सिग्नेचर", "new कीवर्ड के लिए सिग्नेचर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is an index signature in TypeScript?",
    "question_hi": "TypeScript में इंडेक्स सिग्नेचर क्या है?",
    "options_en": ["A way to describe types for dynamic property access", "Dynamic property type signature", "Signature for indexed access", "All of the above"],
    "options_hi": ["डायनेमिक प्रॉपर्टी एक्सेस के लिए टाइप्स का वर्णन करने का एक तरीका", "डायनेमिक प्रॉपर्टी टाइप सिग्नेचर", "इंडेक्स्ड एक्सेस के लिए सिग्नेचर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is method signature syntax in TypeScript?",
    "question_hi": "TypeScript में मेथड सिग्नेचर सिंटैक्स क्या है?",
    "options_en": ["methodName(): returnType", "function methodName(): returnType", "methodName: () => returnType", "All are valid"],
    "options_hi": ["methodName(): returnType", "function methodName(): returnType", "methodName: () => returnType", "सभी वैध हैं"],
    "answer_en": "All are valid",
    "answer_hi": "सभी वैध हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What are rest parameters in TypeScript function types?",
    "question_hi": "TypeScript फंक्शन टाइप्स में रेस्ट पैरामीटर्स क्या हैं?",
    "options_en": ["Parameters that collect remaining arguments into an array", "Extra parameters", "Optional parameters", "Array parameters"],
    "options_hi": ["पैरामीटर्स जो शेष आर्गुमेंट्स को एक ऐरे में एकत्र करते हैं", "अतिरिक्त पैरामीटर्स", "ऑप्शनल पैरामीटर्स", "ऐरे पैरामीटर्स"],
    "answer_en": "Parameters that collect remaining arguments into an array",
    "answer_hi": "पैरामीटर्स जो शेष आर्गुमेंट्स को एक ऐरे में एकत्र करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What are optional parameters in TypeScript function types?",
    "question_hi": "TypeScript फंक्शन टाइप्स में ऑप्शनल पैरामीटर्स क्या हैं?",
    "options_en": ["Parameters marked with ? that may be omitted", "Parameters with default values", "Nullable parameters", "Parameters that can be undefined"],
    "options_hi": ["? से चिह्नित पैरामीटर्स जिन्हें छोड़ा जा सकता है", "डिफ़ॉल्ट मानों वाले पैरामीटर्स", "नलबल पैरामीटर्स", "पैरामीटर्स जो undefined हो सकते हैं"],
    "answer_en": "Parameters marked with ? that may be omitted",
    "answer_hi": "? से चिह्नित पैरामीटर्स जिन्हें छोड़ा जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What are default parameters in TypeScript function types?",
    "question_hi": "TypeScript फंक्शन टाइप्स में डिफ़ॉल्ट पैरामीटर्स क्या हैं?",
    "options_en": ["Parameters with default values that are used when not provided", "Optional parameters", "Parameters with initial values", "Predefined parameters"],
    "options_hi": ["डिफ़ॉल्ट मान वाले पैरामीटर्स जो प्रदान नहीं किए जाने पर प्रयोग किए जाते हैं", "ऑप्शनल पैरामीटर्स", "प्रारंभिक मानों वाले पैरामीटर्स", "पूर्वनिर्धारित पैरामीटर्स"],
    "answer_en": "Parameters with default values that are used when not provided",
    "answer_hi": "डिफ़ॉल्ट मान वाले पैरामीटर्स जो प्रदान नहीं किए जाने पर प्रयोग किए जाते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What are generic types in TypeScript?",
    "question_hi": "TypeScript में जेनेरिक टाइप्स क्या हैं?",
    "options_en": ["Types that work with multiple types through parameters", "General types", "Any type", "Dynamic types"],
    "options_hi": ["पैरामीटर्स के माध्यम से कई टाइप्स के साथ काम करने वाले टाइप्स", "सामान्य टाइप्स", "कोई भी टाइप", "डायनेमिक टाइप्स"],
    "answer_en": "Types that work with multiple types through parameters",
    "answer_hi": "पैरामीटर्स के माध्यम से कई टाइप्स के साथ काम करने वाले टाइप्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What syntax is used to define generic types?",
    "question_hi": "जेनेरिक टाइप्स डिफाइन करने के लिए कौन-सा सिंटैक्स प्रयोग किया जाता है?",
    "options_en": ["<T>", "[T]", "{T}", "(T)"],
    "options_hi": ["<T>", "[T]", "{T}", "(T)"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What are generic constraints in TypeScript?",
    "question_hi": "TypeScript में जेनेरिक कंस्ट्रेंट्स क्या हैं?",
    "options_en": ["Restrictions on what types can be used with generics", "Limits for generics", "Type constraints", "All of the above"],
    "options_hi": ["जेनेरिक्स के साथ किस प्रकार के टाइप्स प्रयोग किए जा सकते हैं पर प्रतिबंध", "जेनेरिक्स के लिए सीमाएँ", "टाइप कंस्ट्रेंट्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "How do you specify that a generic type must have a certain property?",
    "question_hi": "कैसे निर्दिष्ट करें कि एक जेनेरिक टाइप में एक निश्चित प्रॉपर्टी होनी चाहिए?",
    "options_en": ["T extends { property: type }", "T has property", "T with property", "T property type"],
    "options_hi": ["T extends { property: type }", "T has property", "T with property", "T property type"],
    "answer_en": "T extends { property: type }",
    "answer_hi": "T extends { property: type }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is default type parameters in generics?",
    "question_hi": "जेनेरिक्स में डिफ़ॉल्ट टाइप पैरामीटर्स क्या हैं?",
    "options_en": ["Default types for generic parameters when not specified", "Optional type parameters", "Generic defaults", "Type defaults"],
    "options_hi": ["निर्दिष्ट नहीं किए जाने पर जेनेरिक पैरामीटर्स के लिए डिफ़ॉल्ट टाइप्स", "ऑप्शनल टाइप पैरामीटर्स", "जेनेरिक डिफ़ॉल्ट्स", "टाइप डिफ़ॉल्ट्स"],
    "answer_en": "Default types for generic parameters when not specified",
    "answer_hi": "निर्दिष्ट नहीं किए जाने पर जेनेरिक पैरामीटर्स के लिए डिफ़ॉल्ट टाइप्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What are generic classes in TypeScript?",
    "question_hi": "TypeScript में जेनेरिक क्लासेस क्या हैं?",
    "options_en": ["Classes that can work with multiple types", "General classes", "Type-parameterized classes", "Both A and C"],
    "options_hi": ["क्लासेस जो कई टाइप्स के साथ काम कर सकती हैं", "सामान्य क्लासेस", "टाइप-पैरामीटराइज्ड क्लासेस", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What are generic interfaces in TypeScript?",
    "question_hi": "TypeScript में जेनेरिक इंटरफेस क्या हैं?",
    "options_en": ["Interfaces that can work with multiple types", "General interfaces", "Type-parameterized interfaces", "All of the above"],
    "options_hi": ["इंटरफेस जो कई टाइप्स के साथ काम कर सकते हैं", "सामान्य इंटरफेस", "टाइप-पैरामीटराइज्ड इंटरफेस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What are conditional types in TypeScript?",
    "question_hi": "TypeScript में कंडीशनल टाइप्स क्या हैं?",
    "options_en": ["Types that depend on conditions expressed as type relationships", "Types with if-else logic", "Conditional type expressions", "Type conditions"],
    "options_hi": ["टाइप रिलेशनशिप के रूप में व्यक्त की गई शर्तों पर निर्भर टाइप्स", "if-else लॉजिक वाले टाइप्स", "कंडीशनल टाइप एक्सप्रेशन्स", "टाइप कंडीशन्स"],
    "answer_en": "Types that depend on conditions expressed as type relationships",
    "answer_hi": "टाइप रिलेशनशिप के रूप में व्यक्त की गई शर्तों पर निर्भर टाइप्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is the syntax for conditional types?",
    "question_hi": "कंडीशनल टाइप्स के लिए सिंटैक्स क्या है?",
    "options_en": ["T extends U ? X : Y", "if T extends U then X else Y", "T -> U ? X : Y", "T extends U => X : Y"],
    "options_hi": ["T extends U ? X : Y", "if T extends U then X else Y", "T -> U ? X : Y", "T extends U => X : Y"],
    "answer_en": "T extends U ? X : Y",
    "answer_hi": "T extends U ? X : Y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What are infer types in conditional types?",
    "question_hi": "कंडीशनल टाइप्स में इंफर टाइप्स क्या हैं?",
    "options_en": ["Types that are inferred within conditional types", "Inferred type variables", "Type inference in conditions", "All of the above"],
    "options_hi": ["कंडीशनल टाइप्स के भीतर इंफर किए गए टाइप्स", "इंफर्ड टाइप वेरिएबल्स", "कंडीशन्स में टाइप इंफरेंस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the 'infer' keyword used for in conditional types?",
    "question_hi": "कंडीशनल टाइप्स में 'infer' कीवर्ड किसके लिए प्रयोग किया जाता है?",
    "options_en": ["To infer types within conditional types", "For type inference", "To extract types", "All of the above"],
    "options_hi": ["कंडीशनल टाइप्स के भीतर टाइप्स इंफर करने के लिए", "टाइप इंफरेंस के लिए", "टाइप्स एक्सट्रैक्ट करने के लिए", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What are mapped types with 'as' clauses?",
    "question_hi": "'as' क्लॉजेस वाले मैप्ड टाइप्स क्या हैं?",
    "options_en": ["Mapped types that can transform key names", "Key remapping in mapped types", "Renaming keys in mapped types", "All of the above"],
    "options_hi": ["मैप्ड टाइप्स जो की नामों को ट्रांसफॉर्म कर सकते हैं", "मैप्ड टाइप्स में की रीमैपिंग", "मैप्ड टाइप्स में कीज़ का नाम बदलना", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What are template literal types with inference?",
    "question_hi": "इंफरेंस वाले टेम्पलेट लिटरल टाइप्स क्या हैं?",
    "options_en": ["Template literal types that can infer patterns", "Pattern matching with template literals", "Inference in string templates", "All of the above"],
    "options_hi": ["टेम्पलेट लिटरल टाइप्स जो पैटर्न्स इंफर कर सकते हैं", "टेम्पलेट लिटरल्स के साथ पैटर्न मिलान", "स्ट्रिंग टेम्पलेट्स में इंफरेंस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'satisfies' operator in TypeScript?",
    "question_hi": "TypeScript में 'satisfies' ऑपरेटर क्या है?",
    "options_en": ["Checks that expression satisfies a type without changing type inference", "Validates type satisfaction", "Type constraint operator", "All of the above"],
    "options_hi": ["चेक करता है कि एक्सप्रेशन टाइप इंफरेंस बदले बिना एक टाइप को संतुष्ट करता है", "टाइप सैटिस्फैक्शन वैलिडेट करता है", "टाइप कंस्ट्रेंट ऑपरेटर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What are const assertions for literal types?",
    "question_hi": "लिटरल टाइप्स के लिए कॉन्स्ट एसर्शन्स क्या हैं?",
    "options_en": ["Assertions that make values readonly and infer narrowest types", "Making constants", "Literal type assertions", "Narrowing assertions"],
    "options_hi": ["ऐसर्शन्स जो मानों को रीडओनली बनाती हैं और संकीर्णतम टाइप्स इंफर करती हैं", "कॉन्स्टेंट्स बनाना", "लिटरल टाइप एसर्शन्स", "नैरोइंग एसर्शन्स"],
    "answer_en": "Assertions that make values readonly and infer narrowest types",
    "answer_hi": "ऐसर्शन्स जो मानों को रीडओनली बनाती हैं और संकीर्णतम टाइप्स इंफर करती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the 'unique symbol' type in TypeScript?",
    "question_hi": "TypeScript में 'unique symbol' टाइप क्या है?",
    "options_en": ["A type for unique symbol values", "Unique symbol literal type", "Type for unique symbols", "All of the above"],
    "options_hi": ["अद्वितीय सिंबल मानों के लिए एक टाइप", "अद्वितीय सिंबल लिटरल टाइप", "अद्वितीय सिंबल्स के लिए टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What are nominal typing techniques in TypeScript?",
    "question_hi": "TypeScript में नॉमिनल टाइपिंग टेक्नीक्स क्या हैं?",
    "options_en": ["Techniques to simulate nominal typing in structural type system", "Branded types", "Type branding", "All of the above"],
    "options_hi": ["स्ट्रक्चरल टाइप सिस्टम में नॉमिनल टाइपिंग सिम्युलेट करने की तकनीकें", "ब्रांडेड टाइप्स", "टाइप ब्रांडिंग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is type erasure in TypeScript?",
    "question_hi": "TypeScript में टाइप इरेज़र क्या है?",
    "options_en": ["Removal of type annotations during compilation to JavaScript", "Type deletion", "Erasing type information", "Compilation type removal"],
    "options_hi": ["JavaScript में कंपाइलेशन के दौरान टाइप एनोटेशन्स का हटाया जाना", "टाइप डिलीशन", "टाइप इंफॉर्मेशन मिटाना", "कंपाइलेशन टाइप रिमूवल"],
    "answer_en": "Removal of type annotations during compilation to JavaScript",
    "answer_hi": "JavaScript में कंपाइलेशन के दौरान टाइप एनोटेशन्स का हटाया जाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What are declaration files (.d.ts) in TypeScript?",
    "question_hi": "TypeScript में डिक्लेरेशन फाइल्स (.d.ts) क्या हैं?",
    "options_en": ["Files containing type declarations without implementations", "Type declaration files", "Definition files", "All of the above"],
    "options_hi": ["इम्प्लीमेंटेशन के बिना टाइप डिक्लेरेशन्स वाली फाइलें", "टाइप डिक्लेरेशन फाइल्स", "डेफिनिशन फाइल्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'declare' keyword used for in TypeScript?",
    "question_hi": "TypeScript में 'declare' कीवर्ड किसके लिए प्रयोग किया जाता है?",
    "options_en": ["To declare types without implementations", "Ambient declarations", "External type declarations", "All of the above"],
    "options_hi": ["इम्प्लीमेंटेशन के बिना टाइप्स डिक्लेयर करने के लिए", "एम्बिएंट डिक्लेरेशन्स", "एक्सटर्नल टाइप डिक्लेरेशन्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What are ambient modules in TypeScript?",
    "question_hi": "TypeScript में एम्बिएंट मॉड्यूल्स क्या हैं?",
    "options_en": ["Modules declared without implementations", "External module declarations", "Module type declarations", "All of the above"],
    "options_hi": ["इम्प्लीमेंटेशन के बिना डिक्लेयर किए गए मॉड्यूल्स", "एक्सटर्नल मॉड्यूल डिक्लेरेशन्स", "मॉड्यूल टाइप डिक्लेरेशन्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is module augmentation in TypeScript?",
    "question_hi": "TypeScript में मॉड्यूल ऑग्मेंटेशन क्या है?",
    "options_en": ["Adding to existing module declarations", "Extending module types", "Augmenting module definitions", "All of the above"],
    "options_hi": ["मौजूदा मॉड्यूल डिक्लेरेशन्स में जोड़ना", "मॉड्यूल टाइप्स का विस्तार", "मॉड्यूल डेफिनिशन्स का विस्तार", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What are global augmentations in TypeScript?",
    "question_hi": "TypeScript में ग्लोबल ऑग्मेंटेशन्स क्या हैं?",
    "options_en": ["Adding to global scope declarations", "Extending global types", "Global type augmentations", "All of the above"],
    "options_hi": ["ग्लोबल स्कोप डिक्लेरेशन्स में जोड़ना", "ग्लोबल टाइप्स का विस्तार", "ग्लोबल टाइप ऑग्मेंटेशन्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'override' modifier in TypeScript?",
    "question_hi": "TypeScript में 'override' मॉडिफायर क्या है?",
    "options_en": ["Indicates that a method overrides a parent class method", "Override keyword", "Method override indicator", "All of the above"],
    "options_hi": ["इंगित करता है कि एक मेथड पैरेंट क्लास मेथड को ओवरराइड करती है", "ओवरराइड कीवर्ड", "मेथड ओवरराइड इंडिकेटर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What are 'abstract' classes and methods in TypeScript?",
    "question_hi": "TypeScript में 'abstract' क्लासेस और मेथड्स क्या हैं?",
    "options_en": ["Classes and methods that must be implemented by subclasses", "Abstract type definitions", "Incomplete implementations", "All of the above"],
    "options_hi": ["क्लासेस और मेथड्स जिन्हें सबक्लासेस द्वारा इम्प्लीमेंट किया जाना चाहिए", "अब्सट्रैक्ट टाइप डेफिनिशन्स", "अपूर्ण इम्प्लीमेंटेशन्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What are private fields in TypeScript classes?",
    "question_hi": "TypeScript क्लासेस में प्राइवेट फील्ड्स क्या हैं?",
    "options_en": ["Fields accessible only within the class", "Private class members", "# prefixed fields", "All of the above"],
    "options_hi": ["फील्ड्स जो केवल क्लास के भीतर एक्सेसिबल हैं", "प्राइवेट क्लास मेंबर्स", "# प्रीफिक्स्ड फील्ड्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'implements' clause in TypeScript?",
    "question_hi": "TypeScript में 'implements' क्लॉज क्या है?",
    "options_en": ["Clause that ensures class implements an interface", "Interface implementation check", "Class implementation requirement", "All of the above"],
    "options_hi": ["क्लॉज जो सुनिश्चित करता है कि क्लास एक इंटरफेस इम्प्लीमेंट करती है", "इंटरफेस इम्प्लीमेंटेशन चेक", "क्लास इम्प्लीमेंटेशन रिक्वायरमेंट", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'extends' clause in TypeScript?",
    "question_hi": "TypeScript में 'extends' क्लॉज क्या है?",
    "options_en": ["Clause for class inheritance", "Extending classes or interfaces", "Inheritance mechanism", "All of the above"],
    "options_hi": ["क्लास इनहेरिटेंस के लिए क्लॉज", "क्लासेस या इंटरफेस का विस्तार", "इनहेरिटेंस मैकेनिज्म", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What are decorators in TypeScript?",
    "question_hi": "TypeScript में डेकोरेटर्स क्या हैं?",
    "options_en": ["Special declarations that can modify classes/methods/properties", "Metadata annotations", "Class decorators", "All of the above"],
    "options_hi": ["विशेष डिक्लेरेशन्स जो क्लासेस/मेथड्स/प्रॉपर्टीज़ को मॉडिफाई कर सकते हैं", "मेटाडेटा एनोटेशन्स", "क्लास डेकोरेटर्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What are mixins in TypeScript?",
    "question_hi": "TypeScript में मिक्सिन्स क्या हैं?",
    "options_en": ["Pattern for combining multiple classes", "Class composition technique", "Reusable class components", "All of the above"],
    "options_hi": ["कई क्लासेस को कॉम्बाइन करने के लिए पैटर्न", "क्लास कंपोजिशन टेक्नीक", "रीयूजेबल क्लास कंपोनेंट्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is namespace in TypeScript?",
    "question_hi": "TypeScript में नेमस्पेस क्या है?",
    "options_en": ["Organizational unit for grouping related code", "Code grouping mechanism", "Logical container", "All of the above"],
    "options_hi": ["संबंधित कोड को ग्रुप करने के लिए संगठनात्मक इकाई", "कोड ग्रुपिंग मैकेनिज्म", "लॉजिकल कंटेनर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
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