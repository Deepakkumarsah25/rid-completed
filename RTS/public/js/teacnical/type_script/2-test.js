const questions = [
    {
        "num": 1,
        "question_en": "What is TypeScript primarily known for?",
        "question_hi": "TypeScript मुख्य रूप से किसके लिए जाना जाता है?",
        "options_en": ["Static typing", "Dynamic typing", "No typing", "Weak typing"],
        "options_hi": ["स्टैटिक टाइपिंग", "डायनामिक टाइपिंग", "कोई टाइपिंग नहीं", "वीक टाइपिंग"],
        "answer_en": "Static typing",
        "answer_hi": "स्टैटिक टाइपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which command compiles TypeScript to JavaScript?",
        "question_hi": "कौन सा कमांड TypeScript को JavaScript में कंपाइल करता है?",
        "options_en": ["tsc", "node", "npm", "typescript"],
        "options_hi": ["tsc", "node", "npm", "typescript"],
        "answer_en": "tsc",
        "answer_hi": "tsc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the file extension for TypeScript files?",
        "question_hi": "TypeScript फाइलों के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".ts", ".js", ".type", ".tsc"],
        "options_hi": [".ts", ".js", ".type", ".tsc"],
        "answer_en": ".ts",
        "answer_hi": ".ts",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which keyword is used to define a type in TypeScript?",
        "question_hi": "TypeScript में टाइप को परिभाषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["type", "interface", "Both type and interface", "class"],
        "options_hi": ["type", "interface", "type और interface दोनों", "class"],
        "answer_en": "Both type and interface",
        "answer_hi": "type और interface दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does the 'any' type represent in TypeScript?",
        "question_hi": "TypeScript में 'any' टाइप क्या दर्शाता है?",
        "options_en": ["Any JavaScript value", "Only numbers", "Only strings", "Only objects"],
        "options_hi": ["कोई भी JavaScript मान", "केवल संख्याएँ", "केवल स्ट्रिंग", "केवल ऑब्जेक्ट"],
        "answer_en": "Any JavaScript value",
        "answer_hi": "कोई भी JavaScript मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you define an optional property in an interface?",
        "question_hi": "इंटरफेस में ऑप्शनल प्रॉपर्टी को कैसे परिभाषित करते हैं?",
        "options_en": ["property?: type", "property: type?", "optional property: type", "property: optional type"],
        "options_hi": ["property?: type", "property: type?", "optional property: type", "property: optional type"],
        "answer_en": "property?: type",
        "answer_hi": "property?: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of 'unknown' type in TypeScript?",
        "question_hi": "TypeScript में 'unknown' टाइप का उद्देश्य क्या है?",
        "options_en": ["Type-safe counterpart of any", "To represent numbers", "To represent strings", "To represent null values"],
        "options_hi": ["any का टाइप-सेफ समकक्ष", "संख्याओं को दर्शाने के लिए", "स्ट्रिंग को दर्शाने के लिए", "null मानों को दर्शाने के लिए"],
        "answer_en": "Type-safe counterpart of any",
        "answer_hi": "any का टाइप-सेफ समकक्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which symbol is used for type assertions in TypeScript?",
        "question_hi": "TypeScript में टाइप असर्शन के लिए किस प्रतीक का उपयोग किया जाता है?",
        "options_en": ["as or <>", "::", "->", "=>"],
        "options_hi": ["as या <>", "::", "->", "=>"],
        "answer_en": "as or <>",
        "answer_hi": "as या <>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is a tuple in TypeScript?",
        "question_hi": "TypeScript में tuple क्या है?",
        "options_en": ["Array with fixed number of elements", "Array with same type elements", "Object with key-value pairs", "Function with multiple parameters"],
        "options_hi": ["निश्चित संख्या में एलिमेंट वाली ऐरे", "समान टाइप के एलिमेंट वाली ऐरे", "की-वैल्यू पेयर वाला ऑब्जेक्ट", "एकाधिक पैरामीटर वाला फंक्शन"],
        "answer_en": "Array with fixed number of elements",
        "answer_hi": "निश्चित संख्या में एलिमेंट वाली ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you define an enum in TypeScript?",
        "question_hi": "TypeScript में enum को कैसे परिभाषित करते हैं?",
        "options_en": ["enum Name { }", "enum = { }", "define enum { }", "enum: { }"],
        "options_hi": ["enum Name { }", "enum = { }", "define enum { }", "enum: { }"],
        "answer_en": "enum Name { }",
        "answer_hi": "enum Name { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the 'void' type used for?",
        "question_hi": "'void' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Functions that don't return value", "Empty objects", "Null values", "Undefined values"],
        "options_hi": ["ऐसे फंक्शन जो मान वापस नहीं करते", "खाली ऑब्जेक्ट", "null मान", "undefined मान"],
        "answer_en": "Functions that don't return value",
        "answer_hi": "ऐसे फंक्शन जो मान वापस नहीं करते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which operator is used for type guards in TypeScript?",
        "question_hi": "TypeScript में टाइप गार्ड के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["typeof", "instanceof", "Both typeof and instanceof", "typeguard"],
        "options_hi": ["typeof", "instanceof", "typeof और instanceof दोनों", "typeguard"],
        "answer_en": "Both typeof and instanceof",
        "answer_hi": "typeof और instanceof दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does 'readonly' modifier do?",
        "question_hi": "'readonly' मॉडिफायर क्या करता है?",
        "options_en": ["Makes property immutable", "Makes property private", "Makes property optional", "Makes property public"],
        "options_hi": ["प्रॉपर्टी को अपरिवर्तनीय बनाता है", "प्रॉपर्टी को प्राइवेट बनाता है", "प्रॉपर्टी को ऑप्शनल बनाता है", "प्रॉपर्टी को पब्लिक बनाता है"],
        "answer_en": "Makes property immutable",
        "answer_hi": "प्रॉपर्टी को अपरिवर्तनीय बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you define a generic function in TypeScript?",
        "question_hi": "TypeScript में जेनेरिक फंक्शन को कैसे परिभाषित करते हैं?",
        "options_en": ["function name<T>()", "function name<generic>()", "function name(type T)", "generic function name()"],
        "options_hi": ["function name<T>()", "function name<generic>()", "function name(type T)", "generic function name()"],
        "answer_en": "function name<T>()",
        "answer_hi": "function name<T>()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the 'keyof' operator used for?",
        "question_hi": "'keyof' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Get keys of an object type", "Get values of an object", "Check if key exists", "Create new keys"],
        "options_hi": ["ऑब्जेक्ट टाइप की कुंजियाँ प्राप्त करना", "ऑब्जेक्ट के मान प्राप्त करना", "जाँच करना कि कुंजी मौजूद है", "नई कुंजियाँ बनाना"],
        "answer_en": "Get keys of an object type",
        "answer_hi": "ऑब्जेक्ट टाइप की कुंजियाँ प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which decorator is used for class properties in TypeScript?",
        "question_hi": "TypeScript में क्लास प्रॉपर्टी के लिए किस डेकोरेटर का उपयोग किया जाता है?",
        "options_en": ["@Decorator", "@Property", "@Component", "All of the above"],
        "options_hi": ["@Decorator", "@Property", "@Component", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the 'never' type used for?",
        "question_hi": "'never' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Values that never occur", "Null values", "Undefined values", "All values"],
        "options_hi": ["ऐसे मान जो कभी नहीं आते", "null मान", "undefined मान", "सभी मान"],
        "answer_en": "Values that never occur",
        "answer_hi": "ऐसे मान जो कभी नहीं आते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you make all properties optional in a type?",
        "question_hi": "किसी टाइप में सभी प्रॉपर्टी को ऑप्शनल कैसे बनाते हैं?",
        "options_en": ["Partial<T>", "Optional<T>", "Maybe<T>", "AllOptional<T>"],
        "options_hi": ["Partial<T>", "Optional<T>", "Maybe<T>", "AllOptional<T>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What does 'as const' do in TypeScript?",
        "question_hi": "TypeScript में 'as const' क्या करता है?",
        "options_en": ["Makes values readonly literals", "Converts to constant", "Makes variable constant", "All of the above"],
        "options_hi": ["मानों को रीडओनली लिटरल बनाता है", "कॉन्स्टेंट में बदलता है", "वेरिएबल को कॉन्स्टेंट बनाता है", "उपरोक्त सभी"],
        "answer_en": "Makes values readonly literals",
        "answer_hi": "मानों को रीडओनली लिटरल बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which utility type makes all properties required?",
        "question_hi": "कौन सा यूटिलिटी टाइप सभी प्रॉपर्टी को आवश्यक बनाता है?",
        "options_en": ["Required<T>", "AllRequired<T>", "Mandatory<T>", "Must<T>"],
        "options_hi": ["Required<T>", "AllRequired<T>", "Mandatory<T>", "Must<T>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the difference between 'interface' and 'type'?",
        "question_hi": "'interface' और 'type' में क्या अंतर है?",
        "options_en": ["interface can be extended, type can use unions", "No difference", "type can be extended, interface can use unions", "Both are same"],
        "options_hi": ["interface को एक्सटेंड किया जा सकता है, type यूनियन का उपयोग कर सकता है", "कोई अंतर नहीं", "type को एक्सटेंड किया जा सकता है, interface यूनियन का उपयोग कर सकता है", "दोनों समान हैं"],
        "answer_en": "interface can be extended, type can use unions",
        "answer_hi": "interface को एक्सटेंड किया जा सकता है, type यूनियन का उपयोग कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you define function overloading in TypeScript?",
        "question_hi": "TypeScript में फंक्शन ओवरलोडिंग को कैसे परिभाषित करते हैं?",
        "options_en": ["Multiple function signatures", "Using overload keyword", "Using function* syntax", "Cannot be done"],
        "options_hi": ["एकाधिक फंक्शन सिग्नेचर", "overload कीवर्ड का उपयोग करके", "function* सिंटैक्स का उपयोग करके", "नहीं किया जा सकता"],
        "answer_en": "Multiple function signatures",
        "answer_hi": "एकाधिक फंक्शन सिग्नेचर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is 'namespace' in TypeScript?",
        "question_hi": "TypeScript में 'namespace' क्या है?",
        "options_en": ["Logical grouping of code", "Physical file grouping", "Module system", "Package manager"],
        "options_hi": ["कोड का लॉजिकल ग्रुपिंग", "फिजिकल फाइल ग्रुपिंग", "मॉड्यूल सिस्टम", "पैकेज मैनेजर"],
        "answer_en": "Logical grouping of code",
        "answer_hi": "कोड का लॉजिकल ग्रुपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which compiler option enables strict type checking?",
        "question_hi": "कौन सा कंपाइलर ऑप्शन स्ट्रिक्ट टाइप चेकिंग को सक्षम करता है?",
        "options_en": ["strict", "strictType", "typeCheck", "enableStrict"],
        "options_hi": ["strict", "strictType", "typeCheck", "enableStrict"],
        "answer_en": "strict",
        "answer_hi": "strict",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does 'declare' keyword do?",
        "question_hi": "'declare' कीवर्ड क्या करता है?",
        "options_en": ["Declares types without implementation", "Implements interface", "Defines variable", "Exports module"],
        "options_hi": ["बिना इम्प्लीमेंटेशन के टाइप घोषित करता है", "इंटरफेस को इम्प्लीमेंट करता है", "वेरिएबल को परिभाषित करता है", "मॉड्यूल को एक्सपोर्ट करता है"],
        "answer_en": "Declares types without implementation",
        "answer_hi": "बिना इम्प्लीमेंटेशन के टाइप घोषित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you import type definitions in TypeScript?",
        "question_hi": "TypeScript में टाइप डेफिनिशन को कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import type { }", "import { type }", "type import { }", "All of the above"],
        "options_hi": ["import type { }", "import { type }", "type import { }", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the 'satisfies' operator used for?",
        "question_hi": "'satisfies' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Check if value satisfies type", "Implement interface", "Extend class", "Create new type"],
        "options_hi": ["जाँच करना कि मान टाइप को संतुष्ट करता है", "इंटरफेस को इम्प्लीमेंट करना", "क्लास को एक्सटेंड करना", "नया टाइप बनाना"],
        "answer_en": "Check if value satisfies type",
        "answer_hi": "जाँच करना कि मान टाइप को संतुष्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which utility type excludes properties from a type?",
        "question_hi": "कौन सा यूटिलिटी टाइप किसी टाइप से प्रॉपर्टी को बाहर करता है?",
        "options_en": ["Omit<T, K>", "Exclude<T, U>", "Both Omit and Exclude", "Remove<T>"],
        "options_hi": ["Omit<T, K>", "Exclude<T, U>", "Omit और Exclude दोनों", "Remove<T>"],
        "answer_en": "Both Omit and Exclude",
        "answer_hi": "Omit और Exclude दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is 'mixin' in TypeScript?",
        "question_hi": "TypeScript में 'mixin' क्या है?",
        "options_en": ["Composing classes from multiple sources", "Mixing types", "Combining interfaces", "Merging namespaces"],
        "options_hi": ["एकाधिक स्रोतों से क्लास बनाना", "टाइप को मिलाना", "इंटरफेस को संयोजित करना", "नेमस्पेस को मर्ज करना"],
        "answer_en": "Composing classes from multiple sources",
        "answer_hi": "एकाधिक स्रोतों से क्लास बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you create indexed types in TypeScript?",
        "question_hi": "TypeScript में इंडेक्स्ड टाइप कैसे बनाते हैं?",
        "options_en": ["[key: string]: type", "{key: type}", "index: type", "string: type"],
        "options_hi": ["[key: string]: type", "{key: type}", "index: type", "string: type"],
        "answer_en": "[key: string]: type",
        "answer_hi": "[key: string]: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is 'conditional types' in TypeScript?",
        "question_hi": "TypeScript में 'कंडीशनल टाइप' क्या है?",
        "options_en": ["Types that depend on conditions", "If-else for types", "Both A and B", "Switch statements for types"],
        "options_hi": ["ऐसे टाइप जो शर्तों पर निर्भर करते हैं", "टाइप के लिए if-else", "A और B दोनों", "टाइप के लिए switch स्टेटमेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which utility type extracts return type of a function?",
        "question_hi": "कौन सा यूटिलिटी टाइप फंक्शन के रिटर्न टाइप को निकालता है?",
        "options_en": ["ReturnType<T>", "FunctionReturn<T>", "GetReturn<T>", "ExtractReturn<T>"],
        "options_hi": ["ReturnType<T>", "FunctionReturn<T>", "GetReturn<T>", "ExtractReturn<T>"],
        "answer_en": "ReturnType<T>",
        "answer_hi": "ReturnType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is 'mapped types' in TypeScript?",
        "question_hi": "TypeScript में 'मैप्ड टाइप' क्या है?",
        "options_en": ["Creating new types by transforming properties", "Mapping objects to arrays", "Converting types to maps", "All of the above"],
        "options_hi": ["प्रॉपर्टी को ट्रांसफॉर्म करके नए टाइप बनाना", "ऑब्जेक्ट को ऐरे में मैप करना", "टाइप को मैप में बदलना", "उपरोक्त सभी"],
        "answer_en": "Creating new types by transforming properties",
        "answer_hi": "प्रॉपर्टी को ट्रांसफॉर्म करके नए टाइप बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you define async functions in TypeScript?",
        "question_hi": "TypeScript में async फंक्शन को कैसे परिभाषित करते हैं?",
        "options_en": ["async function name()", "function async name()", "function name(): async", "async: function name()"],
        "options_hi": ["async function name()", "function async name()", "function name(): async", "async: function name()"],
        "answer_en": "async function name()",
        "answer_hi": "async function name()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the 'infer' keyword used for?",
        "question_hi": "'infer' कीवर्ड का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Infer types in conditional types", "Infer function parameters", "Infer class properties", "All of the above"],
        "options_hi": ["कंडीशनल टाइप में टाइप को इन्फर करना", "फंक्शन पैरामीटर को इन्फर करना", "क्लास प्रॉपर्टी को इन्फर करना", "उपरोक्त सभी"],
        "answer_en": "Infer types in conditional types",
        "answer_hi": "कंडीशनल टाइप में टाइप को इन्फर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which utility type makes all properties readonly?",
        "question_hi": "कौन सा यूटिलिटी टाइप सभी प्रॉपर्टी को रीडओनली बनाता है?",
        "options_en": ["Readonly<T>", "Immutable<T>", "Fixed<T>", "Const<T>"],
        "options_hi": ["Readonly<T>", "Immutable<T>", "Fixed<T>", "Const<T>"],
        "answer_en": "Readonly<T>",
        "answer_hi": "Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is 'template literal types' in TypeScript?",
        "question_hi": "TypeScript में 'टेम्पलेट लिटरल टाइप' क्या है?",
        "options_en": ["String types with patterns", "HTML templates", "Function templates", "Class templates"],
        "options_hi": ["पैटर्न वाले स्ट्रिंग टाइप", "HTML टेम्पलेट", "फंक्शन टेम्पलेट", "क्लास टेम्पलेट"],
        "answer_en": "String types with patterns",
        "answer_hi": "पैटर्न वाले स्ट्रिंग टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you handle errors in TypeScript?",
        "question_hi": "TypeScript में एरर को कैसे हैंडल करते हैं?",
        "options_en": ["try-catch blocks", "Error boundaries", "Both A and B", "None of the above"],
        "options_hi": ["try-catch ब्लॉक", "एरर बाउंडरी", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is 'branded types' in TypeScript?",
        "question_hi": "TypeScript में 'ब्रांडेड टाइप' क्या है?",
        "options_en": ["Types with unique brands for nominal typing", "Types with logos", "Commercial types", "All of the above"],
        "options_hi": ["नॉमिनल टाइपिंग के लिए यूनिक ब्रांड वाले टाइप", "लोगो वाले टाइप", "कमर्शियल टाइप", "उपरोक्त सभी"],
        "answer_en": "Types with unique brands for nominal typing",
        "answer_hi": "नॉमिनल टाइपिंग के लिए यूनिक ब्रांड वाले टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which utility type picks specific properties from a type?",
        "question_hi": "कौन सा यूटिलिटी टाइप किसी टाइप से विशिष्ट प्रॉपर्टी को चुनता है?",
        "options_en": ["Pick<T, K>", "Select<T, K>", "Choose<T, K>", "Extract<T, K>"],
        "options_hi": ["Pick<T, K>", "Select<T, K>", "Choose<T, K>", "Extract<T, K>"],
        "answer_en": "Pick<T, K>",
        "answer_hi": "Pick<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is 'declaration merging' in TypeScript?",
        "question_hi": "TypeScript में 'डिक्लेरेशन मर्जिंग' क्या है?",
        "options_en": ["Merging multiple declarations of same name", "Combining files", "Merging interfaces", "All of the above"],
        "options_hi": ["एक ही नाम के एकाधिक डिक्लेरेशन को मर्ज करना", "फाइलों को संयोजित करना", "इंटरफेस को मर्ज करना", "उपरोक्त सभी"],
        "answer_en": "Merging multiple declarations of same name",
        "answer_hi": "एक ही नाम के एकाधिक डिक्लेरेशन को मर्ज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you define recursive types in TypeScript?",
        "question_hi": "TypeScript में रिकर्सिव टाइप को कैसे परिभाषित करते हैं?",
        "options_en": ["type T = { next: T }", "type T = T[]", "Both A and B", "Cannot define recursive types"],
        "options_hi": ["type T = { next: T }", "type T = T[]", "A और B दोनों", "रिकर्सिव टाइप परिभाषित नहीं कर सकते"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is 'type widening' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप विडेनिंग' क्या है?",
        "options_en": ["Automatic broadening of types", "Manual type expansion", "Type narrowing", "None of the above"],
        "options_hi": ["टाइप का ऑटोमैटिक ब्रॉडनिंग", "मैनुअल टाइप एक्सपेंशन", "टाइप नैरोइंग", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Automatic broadening of types",
        "answer_hi": "टाइप का ऑटोमैटिक ब्रॉडनिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which utility type extracts instance type of a class?",
        "question_hi": "कौन सा यूटिलिटी टाइप क्लास के इंस्टेंस टाइप को निकालता है?",
        "options_en": ["InstanceType<T>", "ClassInstance<T>", "GetInstance<T>", "ExtractInstance<T>"],
        "options_hi": ["InstanceType<T>", "ClassInstance<T>", "GetInstance<T>", "ExtractInstance<T>"],
        "answer_en": "InstanceType<T>",
        "answer_hi": "InstanceType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is 'type narrowing' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप नैरोइंग' क्या है?",
        "options_en": ["Reducing type to more specific type", "Making type wider", "Changing type completely", "None of the above"],
        "options_hi": ["टाइप को अधिक विशिष्ट टाइप में कम करना", "टाइप को व्यापक बनाना", "टाइप को पूरी तरह बदलना", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Reducing type to more specific type",
        "answer_hi": "टाइप को अधिक विशिष्ट टाइप में कम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you define const assertions in TypeScript?",
        "question_hi": "TypeScript में कॉन्स्ट असर्शन को कैसे परिभाषित करते हैं?",
        "options_en": ["as const", "const assertion", "readonly const", "All of the above"],
        "options_hi": ["as const", "const assertion", "readonly const", "उपरोक्त सभी"],
        "answer_en": "as const",
        "answer_hi": "as const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is 'type predicate' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप प्रेडिकेट' क्या है?",
        "options_en": ["Function that returns type predicate", "Boolean expression", "Type guard", "All of the above"],
        "options_hi": ["ऐसा फंक्शन जो टाइप प्रेडिकेट रिटर्न करता है", "बूलियन एक्सप्रेशन", "टाइप गार्ड", "उपरोक्त सभी"],
        "answer_en": "Function that returns type predicate",
        "answer_hi": "ऐसा फंक्शन जो टाइप प्रेडिकेट रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which utility type constructs type with all properties of T except K?",
        "question_hi": "कौन सा यूटिलिटी टाइप T की सभी प्रॉपर्टी के साथ टाइप बनाता है K को छोड़कर?",
        "options_en": ["Omit<T, K>", "Exclude<T, K>", "Except<T, K>", "Without<T, K>"],
        "options_hi": ["Omit<T, K>", "Exclude<T, K>", "Except<T, K>", "Without<T, K>"],
        "answer_en": "Omit<T, K>",
        "answer_hi": "Omit<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'type compatibility' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप कंपैटिबिलिटी' क्या है?",
        "options_en": ["Structural typing system", "Nominal typing system", "Both A and B", "None of the above"],
        "options_hi": ["स्ट्रक्चरल टाइपिंग सिस्टम", "नॉमिनल टाइपिंग सिस्टम", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Structural typing system",
        "answer_hi": "स्ट्रक्चरल टाइपिंग सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you define intersection types in TypeScript?",
        "question_hi": "TypeScript में इंटरसेक्शन टाइप को कैसे परिभाषित करते हैं?",
        "options_en": ["TypeA & TypeB", "TypeA | TypeB", "TypeA + TypeB", "TypeA and TypeB"],
        "options_hi": ["TypeA & TypeB", "TypeA | TypeB", "TypeA + TypeB", "TypeA and TypeB"],
        "answer_en": "TypeA & TypeB",
        "answer_hi": "TypeA & TypeB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What does the 'non-null assertion operator' do in TypeScript?",
        "question_hi": "TypeScript में 'नॉन-नल असर्शन ऑपरेटर' क्या करता है?",
        "options_en": ["Asserts value is non-null/non-undefined", "Converts null to undefined", "Checks for null values", "Removes null values"],
        "options_hi": ["दावा करता है कि मान नॉन-नल/नॉन-अनडिफाइंड है", "नल को अनडिफाइंड में बदलता है", "नल मानों की जाँच करता है", "नल मानों को हटाता है"],
        "answer_en": "Asserts value is non-null/non-undefined",
        "answer_hi": "दावा करता है कि मान नॉन-नल/नॉन-अनडिफाइंड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which symbol is used as non-null assertion operator?",
        "question_hi": "नॉन-नल असर्शन ऑपरेटर के रूप में किस प्रतीक का उपयोग किया जाता है?",
        "options_en": ["!", "?", "!!", "??"],
        "options_hi": ["!", "?", "!!", "??"],
        "answer_en": "!",
        "answer_hi": "!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is 'type inference' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप इनफेरेंस' क्या है?",
        "options_en": ["Automatic type detection by compiler", "Manual type annotation", "Type checking at runtime", "Type casting"],
        "options_hi": ["कंपाइलर द्वारा ऑटोमैटिक टाइप डिटेक्शन", "मैनुअल टाइप एनोटेशन", "रनटाइम पर टाइप चेकिंग", "टाइप कास्टिंग"],
        "answer_en": "Automatic type detection by compiler",
        "answer_hi": "कंपाइलर द्वारा ऑटोमैटिक टाइप डिटेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you define union types in TypeScript?",
        "question_hi": "TypeScript में यूनियन टाइप को कैसे परिभाषित करते हैं?",
        "options_en": ["TypeA | TypeB", "TypeA & TypeB", "TypeA || TypeB", "TypeA or TypeB"],
        "options_hi": ["TypeA | TypeB", "TypeA & TypeB", "TypeA || TypeB", "TypeA or TypeB"],
        "answer_en": "TypeA | TypeB",
        "answer_hi": "TypeA | TypeB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'strictNullChecks' compiler option?",
        "question_hi": "'strictNullChecks' कंपाइलर ऑप्शन का उद्देश्य क्या है?",
        "options_en": ["Prevent accidental null/undefined usage", "Allow null everywhere", "Disable null checking", "Convert null to undefined"],
        "options_hi": ["आकस्मिक null/undefined उपयोग को रोकना", "हर जगह null की अनुमति देना", "null चेकिंग को अक्षम करना", "null को undefined में बदलना"],
        "answer_en": "Prevent accidental null/undefined usage",
        "answer_hi": "आकस्मिक null/undefined उपयोग को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does 'keyof typeof' expression return?",
        "question_hi": "'keyof typeof' एक्सप्रेशन क्या रिटर्न करता है?",
        "options_en": ["Keys of an object's type", "Type of keys", "Both A and B", "None of the above"],
        "options_hi": ["ऑब्जेक्ट टाइप की कुंजियाँ", "कुंजियों का टाइप", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Keys of an object's type",
        "answer_hi": "ऑब्जेक्ट टाइप की कुंजियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you create type aliases in TypeScript?",
        "question_hi": "TypeScript में टाइप एलियास कैसे बनाते हैं?",
        "options_en": ["type AliasName = Type", "alias AliasName = Type", "typedef AliasName = Type", "Type AliasName = Type"],
        "options_hi": ["type AliasName = Type", "alias AliasName = Type", "typedef AliasName = Type", "Type AliasName = Type"],
        "answer_en": "type AliasName = Type",
        "answer_hi": "type AliasName = Type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the 'as' keyword used for in TypeScript?",
        "question_hi": "TypeScript में 'as' कीवर्ड का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Type assertions", "Type casting", "Both A and B", "None of the above"],
        "options_hi": ["टाइप असर्शन", "टाइप कास्टिंग", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Type assertions",
        "answer_hi": "टाइप असर्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which utility type creates new type with properties from T that are assignable to U?",
        "question_hi": "कौन सा यूटिलिटी टाइप T से उन प्रॉपर्टी के साथ नया टाइप बनाता है जो U को असाइन करने योग्य हैं?",
        "options_en": ["Extract<T, U>", "Filter<T, U>", "Select<T, U>", "PickByType<T, U>"],
        "options_hi": ["Extract<T, U>", "Filter<T, U>", "Select<T, U>", "PickByType<T, U>"],
        "answer_en": "Extract<T, U>",
        "answer_hi": "Extract<T, U>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is 'discriminated union' in TypeScript?",
        "question_hi": "TypeScript में 'डिस्क्रिमिनेटेड यूनियन' क्या है?",
        "options_en": ["Union type with common discriminant property", "Union of discriminated values", "Both A and B", "None of the above"],
        "options_hi": ["कॉमन डिस्क्रिमिनेंट प्रॉपर्टी वाला यूनियन टाइप", "डिस्क्रिमिनेटेड मानों का यूनियन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Union type with common discriminant property",
        "answer_hi": "कॉमन डिस्क्रिमिनेंट प्रॉपर्टी वाला यूनियन टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you define default generic parameters in TypeScript?",
        "question_hi": "TypeScript में डिफ़ॉल्ट जेनेरिक पैरामीटर कैसे परिभाषित करते हैं?",
        "options_en": ["<T = DefaultType>", "<T: DefaultType>", "<T extends DefaultType>", "<T as DefaultType>"],
        "options_hi": ["<T = DefaultType>", "<T: DefaultType>", "<T extends DefaultType>", "<T as DefaultType>"],
        "answer_en": "<T = DefaultType>",
        "answer_hi": "<T = DefaultType>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is 'const enum' in TypeScript?",
        "question_hi": "TypeScript में 'const enum' क्या है?",
        "options_en": ["Enum that gets inlined at compile time", "Constant enumeration", "Both A and B", "None of the above"],
        "options_hi": ["कंपाइल टाइम पर इनलाइन होने वाला enum", "कॉन्स्टेंट एन्यूमरेशन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Enum that gets inlined at compile time",
        "answer_hi": "कंपाइल टाइम पर इनलाइन होने वाला enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which utility type creates type with all properties of T set to required?",
        "question_hi": "कौन सा यूटिलिटी टाइप T की सभी प्रॉपर्टी को आवश्यक सेट करके टाइप बनाता है?",
        "options_en": ["Required<T>", "NonPartial<T>", "Mandatory<T>", "AllRequired<T>"],
        "options_hi": ["Required<T>", "NonPartial<T>", "Mandatory<T>", "AllRequired<T>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 'type only import/export' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप ओनली इम्पोर्ट/एक्सपोर्ट' क्या है?",
        "options_en": ["Import/export only type information", "Import types without values", "Both A and B", "None of the above"],
        "options_hi": ["केवल टाइप इनफॉर्मेशन इम्पोर्ट/एक्सपोर्ट करना", "मानों के बिना टाइप इम्पोर्ट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you define rest parameters in TypeScript?",
        "question_hi": "TypeScript में रेस्ट पैरामीटर कैसे परिभाषित करते हैं?",
        "options_en": ["...args: Type[]", "args...: Type[]", "rest args: Type[]", "...rest: Type[]"],
        "options_hi": ["...args: Type[]", "args...: Type[]", "rest args: Type[]", "...rest: Type[]"],
        "answer_en": "...args: Type[]",
        "answer_hi": "...args: Type[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is 'parameter properties' in TypeScript?",
        "question_hi": "TypeScript में 'पैरामीटर प्रॉपर्टी' क्या है?",
        "options_en": ["Shorthand for declaring and initializing class members", "Properties of parameters", "Parameter types", "None of the above"],
        "options_hi": ["क्लास मेंबर डिक्लेयर और इनिशियलाइज़ करने का शॉर्टहैंड", "पैरामीटर की प्रॉपर्टी", "पैरामीटर टाइप", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Shorthand for declaring and initializing class members",
        "answer_hi": "क्लास मेंबर डिक्लेयर और इनिशियलाइज़ करने का शॉर्टहैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which utility type creates type with properties K from T?",
        "question_hi": "कौन सा यूटिलिटी टाइप T से प्रॉपर्टी K के साथ टाइप बनाता है?",
        "options_en": ["Pick<T, K>", "Select<T, K>", "Choose<T, K>", "ExtractProperties<T, K>"],
        "options_hi": ["Pick<T, K>", "Select<T, K>", "Choose<T, K>", "ExtractProperties<T, K>"],
        "answer_en": "Pick<T, K>",
        "answer_hi": "Pick<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is 'global augmentation' in TypeScript?",
        "question_hi": "TypeScript में 'ग्लोबल ऑग्मेंटेशन' क्या है?",
        "options_en": ["Adding to global scope from modules", "Global variable declaration", "Both A and B", "None of the above"],
        "options_hi": ["मॉड्यूल से ग्लोबल स्कोप में जोड़ना", "ग्लोबल वेरिएबल डिक्लेरेशन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Adding to global scope from modules",
        "answer_hi": "मॉड्यूल से ग्लोबल स्कोप में जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you use 'this' parameter in TypeScript?",
        "question_hi": "TypeScript में 'this' पैरामीटर का उपयोग कैसे करते हैं?",
        "options_en": ["function(this: Type)", "function(this Type)", "function(this:Type)", "All of the above"],
        "options_hi": ["function(this: Type)", "function(this Type)", "function(this:Type)", "उपरोक्त सभी"],
        "answer_en": "function(this: Type)",
        "answer_hi": "function(this: Type)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is 'type guard' function signature in TypeScript?",
        "question_hi": "TypeScript में 'टाइप गार्ड' फंक्शन सिग्नेचर क्या है?",
        "options_en": ["(param): param is Type", "(param) => param is Type", "Both A and B", "None of the above"],
        "options_hi": ["(param): param is Type", "(param) => param is Type", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "(param): param is Type",
        "answer_hi": "(param): param is Type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which utility type excludes from T those types that are assignable to U?",
        "question_hi": "कौन सा यूटिलिटी टाइप T से उन टाइप को बाहर करता है जो U को असाइन करने योग्य हैं?",
        "options_en": ["Exclude<T, U>", "Omit<T, U>", "Remove<T, U>", "FilterOut<T, U>"],
        "options_hi": ["Exclude<T, U>", "Omit<T, U>", "Remove<T, U>", "FilterOut<T, U>"],
        "answer_en": "Exclude<T, U>",
        "answer_hi": "Exclude<T, U>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is 'abstract class' in TypeScript?",
        "question_hi": "TypeScript में 'एब्स्ट्रैक्ट क्लास' क्या है?",
        "options_en": ["Class that cannot be instantiated directly", "Base class for inheritance", "Both A and B", "None of the above"],
        "options_hi": ["ऐसी क्लास जिसे सीधे इंस्टेंटिएट नहीं किया जा सकता", "इनहेरिटेंस के लिए बेस क्लास", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you define getters and setters in TypeScript classes?",
        "question_hi": "TypeScript क्लास में गेटर्स और सेटर्स कैसे परिभाषित करते हैं?",
        "options_en": ["get property() and set property()", "property get() and property set()", "getter property() and setter property()", "All of the above"],
        "options_hi": ["get property() और set property()", "property get() और property set()", "getter property() और setter property()", "उपरोक्त सभी"],
        "answer_en": "get property() and set property()",
        "answer_hi": "get property() और set property()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 'method overriding' in TypeScript?",
        "question_hi": "TypeScript में 'मेथड ओवरराइडिंग' क्या है?",
        "options_en": ["Subclass providing specific implementation", "Changing method signature", "Both A and B", "None of the above"],
        "options_hi": ["सबक्लास द्वारा विशिष्ट इम्प्लीमेंटेशन प्रदान करना", "मेथड सिग्नेचर बदलना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Subclass providing specific implementation",
        "answer_hi": "सबक्लास द्वारा विशिष्ट इम्प्लीमेंटेशन प्रदान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which utility type creates type with all properties of T set to optional?",
        "question_hi": "कौन सा यूटिलिटी टाइप T की सभी प्रॉपर्टी को ऑप्शनल सेट करके टाइप बनाता है?",
        "options_en": ["Partial<T>", "Optional<T>", "Maybe<T>", "AllOptional<T>"],
        "options_hi": ["Partial<T>", "Optional<T>", "Maybe<T>", "AllOptional<T>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is 'type query' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप क्वेरी' क्या है?",
        "options_en": ["typeof operator for types", "Querying type information", "Both A and B", "None of the above"],
        "options_hi": ["टाइप के लिए typeof ऑपरेटर", "टाइप इनफॉर्मेशन क्वेरी करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "typeof operator for types",
        "answer_hi": "टाइप के लिए typeof ऑपरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you define static members in TypeScript classes?",
        "question_hi": "TypeScript क्लास में स्टैटिक मेंबर कैसे परिभाषित करते हैं?",
        "options_en": ["static member", "static member()", "Both A and B", "None of the above"],
        "options_hi": ["static member", "static member()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is 'constructor overloading' in TypeScript?",
        "question_hi": "TypeScript में 'कंस्ट्रक्टर ओवरलोडिंग' क्या है?",
        "options_en": ["Multiple constructor signatures", "Overriding constructor", "Both A and B", "None of the above"],
        "options_hi": ["एकाधिक कंस्ट्रक्टर सिग्नेचर", "कंस्ट्रक्टर को ओवरराइड करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Multiple constructor signatures",
        "answer_hi": "एकाधिक कंस्ट्रक्टर सिग्नेचर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which utility type creates type with all properties of T set to readonly?",
        "question_hi": "कौन सा यूटिलिटी टाइप T की सभी प्रॉपर्टी को रीडओनली सेट करके टाइप बनाता है?",
        "options_en": ["Readonly<T>", "Immutable<T>", "Fixed<T>", "Const<T>"],
        "options_hi": ["Readonly<T>", "Immutable<T>", "Fixed<T>", "Const<T>"],
        "answer_en": "Readonly<T>",
        "answer_hi": "Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is 'type parameter constraint' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप पैरामीटर कंस्ट्रेंट' क्या है?",
        "options_en": ["Restricting generic types with extends", "Limiting type parameters", "Both A and B", "None of the above"],
        "options_hi": ["extends के साथ जेनेरिक टाइप को रिस्ट्रिक्ट करना", "टाइप पैरामीटर को सीमित करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Restricting generic types with extends",
        "answer_hi": "extends के साथ जेनेरिक टाइप को रिस्ट्रिक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you define private fields in TypeScript classes?",
        "question_hi": "TypeScript क्लास में प्राइवेट फील्ड कैसे परिभाषित करते हैं?",
        "options_en": ["#field", "private field", "Both A and B", "None of the above"],
        "options_hi": ["#field", "private field", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is 'index signature' in TypeScript?",
        "question_hi": "TypeScript में 'इंडेक्स सिग्नेचर' क्या है?",
        "options_en": ["Defining types for dynamic property names", "Signature for array indexing", "Both A and B", "None of the above"],
        "options_hi": ["डायनामिक प्रॉपर्टी नामों के लिए टाइप परिभाषित करना", "ऐरे इंडेक्सिंग के लिए सिग्नेचर", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Defining types for dynamic property names",
        "answer_hi": "डायनामिक प्रॉपर्टी नामों के लिए टाइप परिभाषित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which utility type extracts parameter types from function type?",
        "question_hi": "कौन सा यूटिलिटी टाइप फंक्शन टाइप से पैरामीटर टाइप निकालता है?",
        "options_en": ["Parameters<T>", "FunctionParams<T>", "GetParams<T>", "ExtractParams<T>"],
        "options_hi": ["Parameters<T>", "FunctionParams<T>", "GetParams<T>", "ExtractParams<T>"],
        "answer_en": "Parameters<T>",
        "answer_hi": "Parameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is 'type predicate narrowing' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप प्रेडिकेट नैरोइंग' क्या है?",
        "options_en": ["Narrowing types using type guard functions", "Predicate-based type checking", "Both A and B", "None of the above"],
        "options_hi": ["टाइप गार्ड फंक्शन का उपयोग करके टाइप नैरोइंग", "प्रेडिकेट-आधारित टाइप चेकिंग", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Narrowing types using type guard functions",
        "answer_hi": "टाइप गार्ड फंक्शन का उपयोग करके टाइप नैरोइंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you define literal types in TypeScript?",
        "question_hi": "TypeScript में लिटरल टाइप कैसे परिभाषित करते हैं?",
        "options_en": ["type Status = 'success' | 'error'", "literal type = 'value'", "type: 'literal'", "All of the above"],
        "options_hi": ["type Status = 'success' | 'error'", "literal type = 'value'", "type: 'literal'", "उपरोक्त सभी"],
        "answer_en": "type Status = 'success' | 'error'",
        "answer_hi": "type Status = 'success' | 'error'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is 'type assertion vs type casting' difference?",
        "question_hi": "'टाइप असर्शन vs टाइप कास्टिंग' में क्या अंतर है?",
        "options_en": ["Assertion tells compiler, casting performs conversion", "No difference", "Casting tells compiler, assertion performs conversion", "Both are same"],
        "options_hi": ["असर्शन कंपाइलर को बताता है, कास्टिंग कन्वर्जन करता है", "कोई अंतर नहीं", "कास्टिंग कंपाइलर को बताता है, असर्शन कन्वर्जन करता है", "दोनों समान हैं"],
        "answer_en": "Assertion tells compiler, casting performs conversion",
        "answer_hi": "असर्शन कंपाइलर को बताता है, कास्टिंग कन्वर्जन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which utility type creates type by excluding null and undefined from T?",
        "question_hi": "कौन सा यूटिलिटी टाइप T से null और undefined को बाहर करके टाइप बनाता है?",
        "options_en": ["NonNullable<T>", "NotNull<T>", "NoNull<T>", "Defined<T>"],
        "options_hi": ["NonNullable<T>", "NotNull<T>", "NoNull<T>", "Defined<T>"],
        "answer_en": "NonNullable<T>",
        "answer_hi": "NonNullable<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is 'module augmentation' in TypeScript?",
        "question_hi": "TypeScript में 'मॉड्यूल ऑग्मेंटेशन' क्या है?",
        "options_en": ["Adding to existing module declarations", "Extending modules", "Both A and B", "None of the above"],
        "options_hi": ["मौजूदा मॉड्यूल डिक्लेरेशन में जोड़ना", "मॉड्यूल को एक्सटेंड करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Adding to existing module declarations",
        "answer_hi": "मौजूदा मॉड्यूल डिक्लेरेशन में जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you define optional parameters in TypeScript functions?",
        "question_hi": "TypeScript फंक्शन में ऑप्शनल पैरामीटर कैसे परिभाषित करते हैं?",
        "options_en": ["param?: Type", "optional param: Type", "param: Type?", "?param: Type"],
        "options_hi": ["param?: Type", "optional param: Type", "param: Type?", "?param: Type"],
        "answer_en": "param?: Type",
        "answer_hi": "param?: Type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is 'excess property checking' in TypeScript?",
        "question_hi": "TypeScript में 'एक्सेस प्रॉपर्टी चेकिंग' क्या है?",
        "options_en": ["Checking for extra properties in object literals", "Property validation", "Both A and B", "None of the above"],
        "options_hi": ["ऑब्जेक्ट लिटरल में अतिरिक्त प्रॉपर्टी की जाँच", "प्रॉपर्टी वैलिडेशन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Checking for extra properties in object literals",
        "answer_hi": "ऑब्जेक्ट लिटरल में अतिरिक्त प्रॉपर्टी की जाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which utility type creates type with all properties of T that are not in K?",
        "question_hi": "कौन सा यूटिलिटी टाइप T की सभी प्रॉपर्टी के साथ टाइप बनाता है जो K में नहीं हैं?",
        "options_en": ["Omit<T, K>", "Exclude<T, K>", "Without<T, K>", "Remove<T, K>"],
        "options_hi": ["Omit<T, K>", "Exclude<T, K>", "Without<T, K>", "Remove<T, K>"],
        "answer_en": "Omit<T, K>",
        "answer_hi": "Omit<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is 'type parameter default' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप पैरामीटर डिफ़ॉल्ट' क्या है?",
        "options_en": ["Default type for generic parameter", "Parameter with default value", "Both A and B", "None of the above"],
        "options_hi": ["जेनेरिक पैरामीटर के लिए डिफ़ॉल्ट टाइप", "डिफ़ॉल्ट मान वाला पैरामीटर", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Default type for generic parameter",
        "answer_hi": "जेनेरिक पैरामीटर के लिए डिफ़ॉल्ट टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you define arrow functions in TypeScript?",
        "question_hi": "TypeScript में एरो फंक्शन कैसे परिभाषित करते हैं?",
        "options_en": ["(param: Type) => ReturnType", "param: Type => ReturnType", "arrow(param: Type): ReturnType", "All of the above"],
        "options_hi": ["(param: Type) => ReturnType", "param: Type => ReturnType", "arrow(param: Type): ReturnType", "उपरोक्त सभी"],
        "answer_en": "(param: Type) => ReturnType",
        "answer_hi": "(param: Type) => ReturnType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is 'conditional type inference' in TypeScript?",
        "question_hi": "TypeScript में 'कंडीशनल टाइप इनफेरेंस' क्या है?",
        "options_en": ["Inferring types within conditional types", "Conditional type checking", "Both A and B", "None of the above"],
        "options_hi": ["कंडीशनल टाइप के भीतर टाइप इनफेर करना", "कंडीशनल टाइप चेकिंग", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Inferring types within conditional types",
        "answer_hi": "कंडीशनल टाइप के भीतर टाइप इनफेर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which utility type creates type with constructor parameters of T?",
        "question_hi": "कौन सा यूटिलिटी टाइप T के कंस्ट्रक्टर पैरामीटर के साथ टाइप बनाता है?",
        "options_en": ["ConstructorParameters<T>", "ClassParams<T>", "GetConstructorParams<T>", "ExtractConstructorParams<T>"],
        "options_hi": ["ConstructorParameters<T>", "ClassParams<T>", "GetConstructorParams<T>", "ExtractConstructorParams<T>"],
        "answer_en": "ConstructorParameters<T>",
        "answer_hi": "ConstructorParameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is 'type only export' syntax in TypeScript?",
        "question_hi": "TypeScript में 'टाइप ओनली एक्सपोर्ट' सिंटैक्स क्या है?",
        "options_en": ["export type { Type }", "type export { Type }", "export { type Type }", "All of the above"],
        "options_hi": ["export type { Type }", "type export { Type }", "export { type Type }", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you define default parameters in TypeScript functions?",
        "question_hi": "TypeScript फंक्शन में डिफ़ॉल्ट पैरामीटर कैसे परिभाषित करते हैं?",
        "options_en": ["param: Type = defaultValue", "param = defaultValue: Type", "default param: Type = value", "All of the above"],
        "options_hi": ["param: Type = defaultValue", "param = defaultValue: Type", "default param: Type = value", "उपरोक्त सभी"],
        "answer_en": "param: Type = defaultValue",
        "answer_hi": "param: Type = defaultValue",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 'mapped type modifiers' in TypeScript?",
        "question_hi": "TypeScript में 'मैप्ड टाइप मॉडिफायर' क्या है?",
        "options_en": ["+ and - modifiers for readonly and optional", "Type transformation modifiers", "Both A and B", "None of the above"],
        "options_hi": ["रीडओनली और ऑप्शनल के लिए + और - मॉडिफायर", "टाइप ट्रांसफॉर्मेशन मॉडिफायर", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "+ and - modifiers for readonly and optional",
        "answer_hi": "रीडओनली और ऑप्शनल के लिए + और - मॉडिफायर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which utility type creates type with properties of T that are strings?",
        "question_hi": "कौन सा यूटिलिटी टाइप T की उन प्रॉपर्टी के साथ टाइप बनाता है जो स्ट्रिंग हैं?",
        "options_en": ["Extract<T, string>", "StringKeys<T>", "PickString<T>", "All of the above"],
        "options_hi": ["Extract<T, string>", "StringKeys<T>", "PickString<T>", "उपरोक्त सभी"],
        "answer_en": "Extract<T, string>",
        "answer_hi": "Extract<T, string>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is 'type parameter variance' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप पैरामीटर वेरिएंस' क्या है?",
        "options_en": ["in, out, and inout modifiers for generics", "Variance annotations", "Both A and B", "None of the above"],
        "options_hi": ["जेनेरिक के लिए in, out, और inout मॉडिफायर", "वेरिएंस एनोटेशन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "in, out, and inout modifiers for generics",
        "answer_hi": "जेनेरिक के लिए in, out, और inout मॉडिफायर",
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