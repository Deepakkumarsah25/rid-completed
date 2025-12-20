const questions = [
    {
        "num": 1,
        "question_en": "What is the main purpose of TypeScript?",
        "question_hi": "TypeScript का मुख्य उद्देश्य क्या है?",
        "options_en": ["Add static typing to JavaScript", "Replace JavaScript", "Make JavaScript faster", "Add new syntax to JavaScript"],
        "options_hi": ["JavaScript में स्टैटिक टाइपिंग जोड़ना", "JavaScript को बदलना", "JavaScript को तेज़ बनाना", "JavaScript में नया सिंटैक्स जोड़ना"],
        "answer_en": "Add static typing to JavaScript",
        "answer_hi": "JavaScript में स्टैटिक टाइपिंग जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of the following is NOT a TypeScript basic type?",
        "question_hi": "निम्नलिखित में से कौन सा TypeScript बेसिक टाइप नहीं है?",
        "options_en": ["char", "string", "number", "boolean"],
        "options_hi": ["char", "string", "number", "boolean"],
        "answer_en": "char",
        "answer_hi": "char",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you specify that a function doesn't return anything?",
        "question_hi": "आप कैसे निर्दिष्ट करते हैं कि एक फ़ंक्शन कुछ भी वापस नहीं करता है?",
        "options_en": ["void", "null", "undefined", "never"],
        "options_hi": ["void", "null", "undefined", "never"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the type of 'null' in TypeScript?",
        "question_hi": "TypeScript में 'null' का प्रकार क्या है?",
        "options_en": ["null", "undefined", "any", "object"],
        "options_hi": ["null", "undefined", "any", "object"],
        "answer_en": "null",
        "answer_hi": "null",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which keyword is used for type aliases?",
        "question_hi": "टाइप एलियास के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["type", "interface", "alias", "typedef"],
        "options_hi": ["type", "interface", "alias", "typedef"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does the 'readonly' modifier do?",
        "question_hi": "'readonly' मॉडिफायर क्या करता है?",
        "options_en": ["Prevents reassignment", "Makes property private", "Makes property optional", "All of the above"],
        "options_hi": ["पुन: असाइनमेंट को रोकता है", "प्रॉपर्टी को प्राइवेट बनाता है", "प्रॉपर्टी को वैकल्पिक बनाता है", "उपरोक्त सभी"],
        "answer_en": "Prevents reassignment",
        "answer_hi": "पुन: असाइनमेंट को रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How do you define an optional parameter in a function?",
        "question_hi": "फ़ंक्शन में वैकल्पिक पैरामीटर कैसे परिभाषित करें?",
        "options_en": ["param?: type", "param: type?", "optional param: type", "param: optional type"],
        "options_hi": ["param?: type", "param: type?", "optional param: type", "param: optional type"],
        "answer_en": "param?: type",
        "answer_hi": "param?: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the correct way to define a function type?",
        "question_hi": "फ़ंक्शन प्रकार को परिभाषित करने का सही तरीका क्या है?",
        "options_en": ["(a: number, b: number) => number", "function(a: number, b: number): number", "Both A and B", "None of the above"],
        "options_hi": ["(a: number, b: number) => number", "function(a: number, b: number): number", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is method overloading in TypeScript?",
        "question_hi": "TypeScript में मेथड ओवरलोडिंग क्या है?",
        "options_en": ["Multiple function signatures", "Same method with different implementations", "Both A and B", "None of the above"],
        "options_hi": ["एकाधिक फ़ंक्शन सिग्नेचर", "अलग-अलग इम्प्लीमेंटेशन के साथ समान मेथड", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you make a property accessible only within the class?",
        "question_hi": "आप किसी प्रॉपर्टी को केवल क्लास के भीतर एक्सेसिबल कैसे बनाते हैं?",
        "options_en": ["private", "protected", "public", "internal"],
        "options_hi": ["private", "protected", "public", "internal"],
        "answer_en": "private",
        "answer_hi": "private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the difference between 'interface' and 'type'?",
        "question_hi": "'interface' और 'type' में क्या अंतर है?",
        "options_en": ["interface can be extended, type can use unions", "No difference", "type is for primitives only", "interface is for objects only"],
        "options_hi": ["interface को एक्सटेंड किया जा सकता है, type यूनियन का उपयोग कर सकता है", "कोई अंतर नहीं", "type केवल प्रिमिटिव के लिए है", "interface केवल ऑब्जेक्ट के लिए है"],
        "answer_en": "interface can be extended, type can use unions",
        "answer_hi": "interface को एक्सटेंड किया जा सकता है, type यूनियन का उपयोग कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is a generic in TypeScript?",
        "question_hi": "TypeScript में जेनेरिक क्या है?",
        "options_en": ["Reusable component that works with multiple types", "A specific type", "A function type", "A class type"],
        "options_hi": ["पुन: प्रयोज्य घटक जो एकाधिक प्रकारों के साथ काम करता है", "एक विशिष्ट प्रकार", "एक फ़ंक्शन प्रकार", "एक क्लास प्रकार"],
        "answer_en": "Reusable component that works with multiple types",
        "answer_hi": "पुन: प्रयोज्य घटक जो एकाधिक प्रकारों के साथ काम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you define a generic function?",
        "question_hi": "जेनेरिक फ़ंक्शन कैसे परिभाषित करें?",
        "options_en": ["function identity<T>(arg: T): T", "function identity(arg: T): T", "function<T> identity(arg: T): T", "generic function identity<T>(arg: T): T"],
        "options_hi": ["function identity<T>(arg: T): T", "function identity(arg: T): T", "function<T> identity(arg: T): T", "generic function identity<T>(arg: T): T"],
        "answer_en": "function identity<T>(arg: T): T",
        "answer_hi": "function identity<T>(arg: T): T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of 'extends' in generics?",
        "question_hi": "जेनेरिक में 'extends' का उद्देश्य क्या है?",
        "options_en": ["To constrain the generic type", "To extend a class", "To implement an interface", "All of the above"],
        "options_hi": ["जेनेरिक प्रकार को सीमित करने के लिए", "क्लास को एक्सटेंड करने के लिए", "इंटरफेस को इम्प्लीमेंट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "To constrain the generic type",
        "answer_hi": "जेनेरिक प्रकार को सीमित करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What are decorators in TypeScript?",
        "question_hi": "TypeScript में डेकोरेटर क्या हैं?",
        "options_en": ["Special declarations that can be attached to classes", "Functions that modify classes", "Both A and B", "None of the above"],
        "options_hi": ["विशेष घोषणाएँ जो कक्षाओं से जुड़ी हो सकती हैं", "फ़ंक्शन जो कक्षाओं को संशोधित करते हैं", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is namespace in TypeScript?",
        "question_hi": "TypeScript में नेमस्पेस क्या है?",
        "options_en": ["A way to organize code", "A container for related code", "Both A and B", "A type of module"],
        "options_hi": ["कोड को व्यवस्थित करने का एक तरीका", "संबंधित कोड के लिए एक कंटेनर", "A और B दोनों", "एक प्रकार का मॉड्यूल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you export a class from a module?",
        "question_hi": "मॉड्यूल से क्लास को कैसे एक्सपोर्ट करें?",
        "options_en": ["export class MyClass {}", "class export MyClass {}", "export: class MyClass {}", "class MyClass export {}"],
        "options_hi": ["export class MyClass {}", "class export MyClass {}", "export: class MyClass {}", "class MyClass export {}"],
        "answer_en": "export class MyClass {}",
        "answer_hi": "export class MyClass {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the 'never' type used for?",
        "question_hi": "'never' प्रकार का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Functions that never return", "Variables that can never have a value", "Both A and B", "None of the above"],
        "options_hi": ["फ़ंक्शन जो कभी वापस नहीं आते", "वेरिएबल जिनका कभी कोई मान नहीं हो सकता", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is type assertion?",
        "question_hi": "टाइप असर्शन क्या है?",
        "options_en": ["Telling TypeScript the type of a value", "Converting one type to another", "Checking the type at runtime", "All of the above"],
        "options_hi": ["TypeScript को किसी मान का प्रकार बताना", "एक प्रकार को दूसरे में बदलना", "रनटाइम पर प्रकार की जाँच करना", "उपरोक्त सभी"],
        "answer_en": "Telling TypeScript the type of a value",
        "answer_hi": "TypeScript को किसी मान का प्रकार बताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What are the two syntaxes for type assertion?",
        "question_hi": "टाइप असर्शन के लिए दो सिंटैक्स क्या हैं?",
        "options_en": ["value as Type and <Type>value", "value: Type and Type(value)", "assert value is Type and value instanceof Type", "None of the above"],
        "options_hi": ["value as Type और <Type>value", "value: Type और Type(value)", "assert value is Type और value instanceof Type", "उपरोक्त में से कोई नहीं"],
        "answer_en": "value as Type and <Type>value",
        "answer_hi": "value as Type और <Type>value",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is a tuple in TypeScript?",
        "question_hi": "TypeScript में टपल क्या है?",
        "options_en": ["An array with fixed number of elements and known types", "An array with same type elements", "An object with key-value pairs", "A function with multiple parameters"],
        "options_hi": ["एक ऐरे जिसमें तत्वों की निश्चित संख्या और ज्ञात प्रकार होते हैं", "समान प्रकार के तत्वों वाली एक ऐरे", "कुंजी-मान जोड़े वाली एक वस्तु", "एकाधिक पैरामीटर वाला एक फ़ंक्शन"],
        "answer_en": "An array with fixed number of elements and known types",
        "answer_hi": "एक ऐरे जिसमें तत्वों की निश्चित संख्या और ज्ञात प्रकार होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you define a tuple type?",
        "question_hi": "टपल प्रकार कैसे परिभाषित करें?",
        "options_en": ["[string, number]", "tuple(string, number)", "Array<string, number>", "(string, number)"],
        "options_hi": ["[string, number]", "tuple(string, number)", "Array<string, number>", "(string, number)"],
        "answer_en": "[string, number]",
        "answer_hi": "[string, number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is an enum in TypeScript?",
        "question_hi": "TypeScript में enum क्या है?",
        "options_en": ["A way to define named constants", "A type of array", "A function type", "A class type"],
        "options_hi": ["नामित स्थिरांक को परिभाषित करने का एक तरीका", "एक प्रकार की ऐरे", "एक फ़ंक्शन प्रकार", "एक क्लास प्रकार"],
        "answer_en": "A way to define named constants",
        "answer_hi": "नामित स्थिरांक को परिभाषित करने का एक तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you define an enum?",
        "question_hi": "enum कैसे परिभाषित करें?",
        "options_en": ["enum Color { Red, Green, Blue }", "enum = { Red, Green, Blue }", "define enum Color { Red, Green, Blue }", "Color enum { Red, Green, Blue }"],
        "options_hi": ["enum Color { Red, Green, Blue }", "enum = { Red, Green, Blue }", "define enum Color { Red, Green, Blue }", "Color enum { Red, Green, Blue }"],
        "answer_en": "enum Color { Red, Green, Blue }",
        "answer_hi": "enum Color { Red, Green, Blue }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the 'unknown' type?",
        "question_hi": "'unknown' प्रकार क्या है?",
        "options_en": ["Type-safe counterpart of any", "A type for unknown values", "Both A and B", "None of the above"],
        "options_hi": ["any का टाइप-सेफ समकक्ष", "अज्ञात मानों के लिए एक प्रकार", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the difference between 'any' and 'unknown'?",
        "question_hi": "'any' और 'unknown' में क्या अंतर है?",
        "options_en": ["unknown requires type checking before use", "any allows any operation", "Both A and B", "No difference"],
        "options_hi": ["unknown उपयोग से पहले टाइप चेकिंग की आवश्यकता होती है", "any किसी भी ऑपरेशन की अनुमति देता है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is a type guard?",
        "question_hi": "टाइप गार्ड क्या है?",
        "options_en": ["Runtime check that narrows type", "Compile-time type check", "A function that returns boolean", "All of the above"],
        "options_hi": ["रनटाइम चेक जो प्रकार को संकीर्ण करता है", "कंपाइल-टाइम टाइप चेक", "एक फ़ंक्शन जो बूलियन लौटाता है", "उपरोक्त सभी"],
        "answer_en": "Runtime check that narrows type",
        "answer_hi": "रनटाइम चेक जो प्रकार को संकीर्ण करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the 'in' operator type guard?",
        "question_hi": "'in' ऑपरेटर टाइप गार्ड क्या है?",
        "options_en": ["Checks if property exists in object", "Checks if value is in array", "Both A and B", "None of the above"],
        "options_hi": ["जाँचता है कि ऑब्जेक्ट में प्रॉपर्टी मौजूद है या नहीं", "जाँचता है कि मान ऐरे में है या नहीं", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Checks if property exists in object",
        "answer_hi": "जाँचता है कि ऑब्जेक्ट में प्रॉपर्टी मौजूद है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What are utility types?",
        "question_hi": "यूटिलिटी टाइप क्या हैं?",
        "options_en": ["Built-in types for common transformations", "Types for utility functions", "Both A and B", "None of the above"],
        "options_hi": ["सामान्य परिवर्तनों के लिए बिल्ट-इन प्रकार", "यूटिलिटी फ़ंक्शन के लिए प्रकार", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Built-in types for common transformations",
        "answer_hi": "सामान्य परिवर्तनों के लिए बिल्ट-इन प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does Partial<T> do?",
        "question_hi": "Partial<T> क्या करता है?",
        "options_en": ["Makes all properties optional", "Makes all properties required", "Makes properties readonly", "Picks specific properties"],
        "options_hi": ["सभी गुणों को वैकल्पिक बनाता है", "सभी गुणों को आवश्यक बनाता है", "गुणों को केवल-पढ़ने के लिए बनाता है", "विशिष्ट गुणों को चुनता है"],
        "answer_en": "Makes all properties optional",
        "answer_hi": "सभी गुणों को वैकल्पिक बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What does Required<T> do?",
        "question_hi": "Required<T> क्या करता है?",
        "options_en": ["Makes all properties required", "Makes all properties optional", "Makes properties readonly", "Picks specific properties"],
        "options_hi": ["सभी गुणों को आवश्यक बनाता है", "सभी गुणों को वैकल्पिक बनाता है", "गुणों को केवल-पढ़ने के लिए बनाता है", "विशिष्ट गुणों को चुनता है"],
        "answer_en": "Makes all properties required",
        "answer_hi": "सभी गुणों को आवश्यक बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does Readonly<T> do?",
        "question_hi": "Readonly<T> क्या करता है?",
        "options_en": ["Makes all properties readonly", "Makes all properties optional", "Makes all properties required", "Picks specific properties"],
        "options_hi": ["सभी गुणों को केवल-पढ़ने के लिए बनाता है", "सभी गुणों को वैकल्पिक बनाता है", "सभी गुणों को आवश्यक बनाता है", "विशिष्ट गुणों को चुनता है"],
        "answer_en": "Makes all properties readonly",
        "answer_hi": "सभी गुणों को केवल-पढ़ने के लिए बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What does Record<K, T> do?",
        "question_hi": "Record<K, T> क्या करता है?",
        "options_en": ["Creates an object type with property keys K and type T", "Creates a record type", "Creates a key-value pair", "All of the above"],
        "options_hi": ["K और प्रकार T वाली संपत्ति कुंजियों के साथ एक ऑब्जेक्ट प्रकार बनाता है", "एक रिकॉर्ड प्रकार बनाता है", "एक कुंजी-मान जोड़ी बनाता है", "उपरोक्त सभी"],
        "answer_en": "Creates an object type with property keys K and type T",
        "answer_hi": "K और प्रकार T वाली संपत्ति कुंजियों के साथ एक ऑब्जेक्ट प्रकार बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does Pick<T, K> do?",
        "question_hi": "Pick<T, K> क्या करता है?",
        "options_en": ["Picks set of properties K from T", "Picks specific properties", "Both A and B", "None of the above"],
        "options_hi": ["T से K गुणों का सेट चुनता है", "विशिष्ट गुणों को चुनता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does Omit<T, K> do?",
        "question_hi": "Omit<T, K> क्या करता है?",
        "options_en": ["Omits set of properties K from T", "Removes specific properties", "Both A and B", "None of the above"],
        "options_hi": ["T से K गुणों का सेट छोड़ता है", "विशिष्ट गुणों को हटाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is conditional types in TypeScript?",
        "question_hi": "TypeScript में सशर्त प्रकार क्या हैं?",
        "options_en": ["Types that depend on conditions", "Types with if-else logic", "Both A and B", "None of the above"],
        "options_hi": ["ऐसे प्रकार जो शर्तों पर निर्भर करते हैं", "if-else लॉजिक वाले प्रकार", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the syntax for conditional types?",
        "question_hi": "सशर्त प्रकारों के लिए वाक्य-विन्यास क्या है?",
        "options_en": ["T extends U ? X : Y", "if T extends U then X else Y", "T extends U -> X : Y", "T extends U : X else Y"],
        "options_hi": ["T extends U ? X : Y", "if T extends U then X else Y", "T extends U -> X : Y", "T extends U : X else Y"],
        "answer_en": "T extends U ? X : Y",
        "answer_hi": "T extends U ? X : Y",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What are mapped types?",
        "question_hi": "मैप्ड टाइप क्या हैं?",
        "options_en": ["Types that transform properties of existing types", "Types that map values", "Both A and B", "None of the above"],
        "options_hi": ["ऐसे प्रकार जो मौजूदा प्रकारों के गुणों को रूपांतरित करते हैं", "ऐसे प्रकार जो मानों को मैप करते हैं", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Types that transform properties of existing types",
        "answer_hi": "ऐसे प्रकार जो मौजूदा प्रकारों के गुणों को रूपांतरित करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the 'keyof' operator?",
        "question_hi": "'keyof' ऑपरेटर क्या है?",
        "options_en": ["Gets the keys of an object type", "Gets the values of an object", "Checks if key exists", "Creates new keys"],
        "options_hi": ["किसी ऑब्जेक्ट प्रकार की कुंजियाँ प्राप्त करता है", "किसी ऑब्जेक्ट के मान प्राप्त करता है", "जाँचता है कि कुंजी मौजूद है या नहीं", "नई कुंजियाँ बनाता है"],
        "answer_en": "Gets the keys of an object type",
        "answer_hi": "किसी ऑब्जेक्ट प्रकार की कुंजियाँ प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the 'typeof' operator in types?",
        "question_hi": "प्रकारों में 'typeof' ऑपरेटर क्या है?",
        "options_en": ["Gets the type of a value", "Gets the value of a type", "Checks the type", "Creates a type"],
        "options_hi": ["किसी मान का प्रकार प्राप्त करता है", "किसी प्रकार का मान प्राप्त करता है", "प्रकार की जाँच करता है", "एक प्रकार बनाता है"],
        "answer_en": "Gets the type of a value",
        "answer_hi": "किसी मान का प्रकार प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What are template literal types?",
        "question_hi": "टेम्पलेट लिटरल टाइप क्या हैं?",
        "options_en": ["String types with patterns", "Types for template strings", "Both A and B", "None of the above"],
        "options_hi": ["पैटर्न वाले स्ट्रिंग प्रकार", "टेम्पलेट स्ट्रिंग के लिए प्रकार", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the 'infer' keyword?",
        "question_hi": "'infer' कीवर्ड क्या है?",
        "options_en": ["Infers types in conditional types", "Infers function parameters", "Both A and B", "None of the above"],
        "options_hi": ["सशर्त प्रकारों में प्रकारों का अनुमान लगाता है", "फ़ंक्शन पैरामीटर का अनुमान लगाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What are recursive types?",
        "question_hi": "रिकर्सिव टाइप क्या हैं?",
        "options_en": ["Types that reference themselves", "Types with recursive structures", "Both A and B", "None of the above"],
        "options_hi": ["ऐसे प्रकार जो स्वयं को संदर्भित करते हैं", "पुनरावर्ती संरचनाओं वाले प्रकार", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the 'satisfies' operator?",
        "question_hi": "'satisfies' ऑपरेटर क्या है?",
        "options_en": ["Checks if value satisfies a type", "Validates type constraints", "Both A and B", "None of the above"],
        "options_hi": ["जाँचता है कि मान किसी प्रकार को संतुष्ट करता है या नहीं", "प्रकार बाधाओं को मान्य करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is 'as const' assertion?",
        "question_hi": "'as const' असर्शन क्या है?",
        "options_en": ["Makes values readonly literals", "Prevents widening of literal types", "Both A and B", "None of the above"],
        "options_hi": ["मानों को केवल-पढ़ने के लिए साहित्यिक बनाता है", "शाब्दिक प्रकारों के विस्तार को रोकता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What are declaration files?",
        "question_hi": "डिक्लेरेशन फाइल क्या हैं?",
        "options_en": ["Files with type declarations for JavaScript", "Files with .d.ts extension", "Both A and B", "None of the above"],
        "options_hi": ["JavaScript के लिए टाइप डिक्लेरेशन वाली फाइलें", ".d.ts एक्सटेंशन वाली फाइलें", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the 'declare' keyword?",
        "question_hi": "'declare' कीवर्ड क्या है?",
        "options_en": ["Declares types without implementation", "Used in declaration files", "Both A and B", "None of the above"],
        "options_hi": ["बिना कार्यान्वयन के प्रकारों की घोषणा करता है", "घोषणा फाइलों में उपयोग किया जाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is global declaration?",
        "question_hi": "ग्लोबल डिक्लेरेशन क्या है?",
        "options_en": ["Declaration available throughout the project", "Declaration in global scope", "Both A and B", "None of the above"],
        "options_hi": ["पूरी परियोजना में उपलब्ध घोषणा", "वैश्विक दायरे में घोषणा", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is module declaration?",
        "question_hi": "मॉड्यूल डिक्लेरेशन क्या है?",
        "options_en": ["Declaration for external modules", "Describes shape of modules", "Both A and B", "None of the above"],
        "options_hi": ["बाहरी मॉड्यूल के लिए घोषणा", "मॉड्यूल के आकार का वर्णन करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is namespace declaration?",
        "question_hi": "नेमस्पेस डिक्लेरेशन क्या है?",
        "options_en": ["Declaration for namespaces", "Groups related declarations", "Both A and B", "None of the above"],
        "options_hi": ["नेमस्पेस के लिए घोषणा", "संबंधित घोषणाओं को समूहित करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the 'strict' compiler option?",
        "question_hi": "'strict' कंपाइलर विकल्प क्या है?",
        "options_en": ["Enables all strict type checking options", "Enables strict mode", "Both A and B", "None of the above"],
        "options_hi": ["सभी सख्त प्रकार जाँच विकल्पों को सक्षम करता है", "सख्त मोड को सक्षम करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Enables all strict type checking options",
        "answer_hi": "सभी सख्त प्रकार जाँच विकल्पों को सक्षम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does 'noImplicitAny' do?",
        "question_hi": "'noImplicitAny' क्या करता है?",
        "options_en": ["Disallows implicit 'any' types", "Requires explicit type annotations", "Both A and B", "None of the above"],
        "options_hi": ["अंतर्निहित 'any' प्रकारों को अस्वीकार करता है", "स्पष्ट प्रकार एनोटेशन की आवश्यकता होती है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What does 'strictNullChecks' do?",
        "question_hi": "'strictNullChecks' क्या करता है?",
        "options_en": ["Enforces null and undefined checks", "Requires handling of null/undefined", "Both A and B", "None of the above"],
        "options_hi": ["null और undefined जाँच को लागू करता है", "null/undefined के हैंडलिंग की आवश्यकता होती है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does 'noUnusedParameters' do?",
        "question_hi": "'noUnusedParameters' क्या करता है?",
        "options_en": ["Flags unused function parameters", "Requires all parameters to be used", "Both A and B", "None of the above"],
        "options_hi": ["अनउपयोगी फ़ंक्शन पैरामीटर को फ्लैग करता है", "सभी पैरामीटर के उपयोग की आवश्यकता होती है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What does 'noImplicitReturns' do?",
        "question_hi": "'noImplicitReturns' क्या करता है?",
        "options_en": ["Requires explicit return types", "Flags functions that don't always return", "Both A and B", "None of the above"],
        "options_hi": ["स्पष्ट रिटर्न प्रकारों की आवश्यकता होती है", "ऐसे फ़ंक्शन को फ्लैग करता है जो हमेशा वापस नहीं आते", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the 'target' compiler option?",
        "question_hi": "'target' कंपाइलर विकल्प क्या है?",
        "options_en": ["Specifies ECMAScript target version", "Sets JavaScript version for output", "Both A and B", "None of the above"],
        "options_hi": ["ECMAScript लक्ष्य संस्करण निर्दिष्ट करता है", "आउटपुट के लिए JavaScript संस्करण सेट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the 'module' compiler option?",
        "question_hi": "'module' कंपाइलर विकल्प क्या है?",
        "options_en": ["Specifies module system", "Sets module code generation", "Both A and B", "None of the above"],
        "options_hi": ["मॉड्यूल सिस्टम निर्दिष्ट करता है", "मॉड्यूल कोड जनरेशन सेट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the 'outDir' compiler option?",
        "question_hi": "'outDir' कंपाइलर विकल्प क्या है?",
        "options_en": ["Specifies output directory", "Sets where compiled files go", "Both A and B", "None of the above"],
        "options_hi": ["आउटपुट डायरेक्टरी निर्दिष्ट करता है", "सेट करता है कि संकलित फाइलें कहाँ जाएँ", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the 'rootDir' compiler option?",
        "question_hi": "'rootDir' कंपाइलर विकल्प क्या है?",
        "options_en": ["Specifies root directory of source files", "Sets where to find source files", "Both A and B", "None of the above"],
        "options_hi": ["स्रोत फाइलों की रूट डायरेक्टरी निर्दिष्ट करता है", "सेट करता है कि स्रोत फाइलें कहाँ खोजें", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the 'baseUrl' compiler option?",
        "question_hi": "'baseUrl' कंपाइलर विकल्प क्या है?",
        "options_en": ["Base directory to resolve non-absolute module names", "Sets base path for module resolution", "Both A and B", "None of the above"],
        "options_hi": ["गैर-निरपेक्ष मॉड्यूल नामों को हल करने के लिए आधार निर्देशिका", "मॉड्यूल रेजोल्यूशन के लिए आधार पथ सेट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What are path mappings?",
        "question_hi": "पाथ मैपिंग क्या हैं?",
        "options_en": ["Map module names to locations", "Alias for module paths", "Both A and B", "None of the above"],
        "options_hi": ["मॉड्यूल नामों को स्थानों पर मैप करें", "मॉड्यूल पथ के लिए उपनाम", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the 'paths' compiler option?",
        "question_hi": "'paths' कंपाइलर विकल्प क्या है?",
        "options_en": ["Specifies path mapping", "Sets module aliases", "Both A and B", "None of the above"],
        "options_hi": ["पथ मैपिंग निर्दिष्ट करता है", "मॉड्यूल उपनाम सेट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the 'types' compiler option?",
        "question_hi": "'types' कंपाइलर विकल्प क्या है?",
        "options_en": ["Specifies type packages to include", "Lists type declaration packages", "Both A and B", "None of the above"],
        "options_hi": ["शामिल करने के लिए टाइप पैकेज निर्दिष्ट करता है", "टाइप डिक्लेरेशन पैकेज की सूची बनाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the 'typeRoots' compiler option?",
        "question_hi": "'typeRoots' कंपाइलर विकल्प क्या है?",
        "options_en": ["Specifies directories for type definitions", "Sets where to find type declarations", "Both A and B", "None of the above"],
        "options_hi": ["टाइप डेफिनिशन के लिए डायरेक्टरी निर्दिष्ट करता है", "सेट करता है कि टाइप डिक्लेरेशन कहाँ खोजें", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the 'esModuleInterop' compiler option?",
        "question_hi": "'esModuleInterop' कंपाइलर विकल्प क्या है?",
        "options_en": ["Enables better interoperability with CommonJS", "Allows default imports from CommonJS", "Both A and B", "None of the above"],
        "options_hi": ["CommonJS के साथ बेहतर इंटरऑपरेबिलिटी सक्षम करता है", "CommonJS से डिफॉल्ट आयात की अनुमति देता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the 'forceConsistentCasingInFileNames' option?",
        "question_hi": "'forceConsistentCasingInFileNames' विकल्प क्या है?",
        "options_en": ["Enforces consistent file name casing", "Requires consistent case in imports", "Both A and B", "None of the above"],
        "options_hi": ["संगत फाइल नाम केसिंग लागू करता है", "आयात में संगत केस की आवश्यकता होती है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the 'skipLibCheck' compiler option?",
        "question_hi": "'skipLibCheck' कंपाइलर विकल्प क्या है?",
        "options_en": ["Skips type checking of declaration files", "Speeds up compilation", "Both A and B", "None of the above"],
        "options_hi": ["घोषणा फाइलों की प्रकार जाँच छोड़ता है", "संकलन को गति देता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the 'strictPropertyInitialization' option?",
        "question_hi": "'strictPropertyInitialization' विकल्प क्या है?",
        "options_en": ["Requires class properties to be initialized", "Checks property initialization in constructors", "Both A and B", "None of the above"],
        "options_hi": ["क्लास प्रॉपर्टी को इनिशियलाइज़ करने की आवश्यकता होती है", "कंस्ट्रक्टर में प्रॉपर्टी इनिशियलाइज़ेशन की जाँच करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the 'noEmitOnError' compiler option?",
        "question_hi": "'noEmitOnError' कंपाइलर विकल्प क्या है?",
        "options_en": ["Prevents emitting files if there are errors", "Stops compilation on errors", "Both A and B", "None of the above"],
        "options_hi": ["यदि त्रुटियाँ हैं तो फाइलों को उत्सर्जित करने से रोकता है", "त्रुटियों पर संकलन रोकता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the 'declaration' compiler option?",
        "question_hi": "'declaration' कंपाइलर विकल्प क्या है?",
        "options_en": ["Generates .d.ts files", "Creates type declaration files", "Both A and B", "None of the above"],
        "options_hi": [".d.ts फाइलें उत्पन्न करता है", "टाइप डिक्लेरेशन फाइलें बनाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the 'sourceMap' compiler option?",
        "question_hi": "'sourceMap' कंपाइलर विकल्प क्या है?",
        "options_en": ["Generates source map files", "Enables debugging TypeScript", "Both A and B", "None of the above"],
        "options_hi": ["सोर्स मैप फाइलें उत्पन्न करता है", "TypeScript डिबगिंग सक्षम करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the 'removeComments' compiler option?",
        "question_hi": "'removeComments' कंपाइलर विकल्प क्या है?",
        "options_en": ["Removes comments from output", "Strips comments from generated code", "Both A and B", "None of the above"],
        "options_hi": ["आउटपुट से टिप्पणियाँ हटाता है", "जनरेट किए गए कोड से टिप्पणियाँ हटाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the 'noEmit' compiler option?",
        "question_hi": "'noEmit' कंपाइलर विकल्प क्या है?",
        "options_en": ["Prevents emitting output", "Only type checks, no output", "Both A and B", "None of the above"],
        "options_hi": ["आउटपुट उत्सर्जित करने से रोकता है", "केवल टाइप चेक करता है, कोई आउटपुट नहीं", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the 'incremental' compiler option?",
        "question_hi": "'incremental' कंपाइलर विकल्प क्या है?",
        "options_en": ["Enables incremental compilation", "Speeds up subsequent builds", "Both A and B", "None of the above"],
        "options_hi": ["वृद्धिशील संकलन सक्षम करता है", "बाद के बिल्ड को गति देता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the 'tsconfig.json' file?",
        "question_hi": "'tsconfig.json' फाइल क्या है?",
        "options_en": ["TypeScript configuration file", "Contains compiler options", "Both A and B", "None of the above"],
        "options_hi": ["TypeScript कॉन्फ़िगरेशन फाइल", "कंपाइलर विकल्प शामिल हैं", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the 'include' property in tsconfig.json?",
        "question_hi": "tsconfig.json में 'include' प्रॉपर्टी क्या है?",
        "options_en": ["Specifies files to include", "Lists files for compilation", "Both A and B", "None of the above"],
        "options_hi": ["शामिल करने के लिए फाइलें निर्दिष्ट करता है", "संकलन के लिए फाइलों की सूची बनाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the 'exclude' property in tsconfig.json?",
        "question_hi": "tsconfig.json में 'exclude' प्रॉपर्टी क्या है?",
        "options_en": ["Specifies files to exclude", "Lists files to skip in compilation", "Both A and B", "None of the above"],
        "options_hi": ["बाहर करने के लिए फाइलें निर्दिष्ट करता है", "संकलन में छोड़ने के लिए फाइलों की सूची बनाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the 'files' property in tsconfig.json?",
        "question_hi": "tsconfig.json में 'files' प्रॉपर्टी क्या है?",
        "options_en": ["Explicitly lists files to include", "Specifies individual files", "Both A and B", "None of the above"],
        "options_hi": ["शामिल करने के लिए फाइलों को स्पष्ट रूप से सूचीबद्ध करता है", "व्यक्तिगत फाइलें निर्दिष्ट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the 'extends' property in tsconfig.json?",
        "question_hi": "tsconfig.json में 'extends' प्रॉपर्टी क्या है?",
        "options_en": ["Extends another configuration file", "Inherits from another tsconfig", "Both A and B", "None of the above"],
        "options_hi": ["दूसरी कॉन्फ़िगरेशन फाइल का विस्तार करता है", "दूसरे tsconfig से इनहेरिट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the 'references' property in tsconfig.json?",
        "question_hi": "tsconfig.json में 'references' प्रॉपर्टी क्या है?",
        "options_en": ["Specifies project references", "Links to other TypeScript projects", "Both A and B", "None of the above"],
        "options_hi": ["प्रोजेक्ट संदर्भ निर्दिष्ट करता है", "अन्य TypeScript प्रोजेक्ट से लिंक करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is project references in TypeScript?",
        "question_hi": "TypeScript में प्रोजेक्ट रेफरेन्स क्या है?",
        "options_en": ["Linking multiple TypeScript projects", "Building dependencies between projects", "Both A and B", "None of the above"],
        "options_hi": ["एकाधिक TypeScript प्रोजेक्ट को लिंक करना", "प्रोजेक्ट के बीच निर्भरता बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the 'composite' compiler option?",
        "question_hi": "'composite' कंपाइलर विकल्प क्या है?",
        "options_en": ["Enables project references", "Marks project as composite", "Both A and B", "None of the above"],
        "options_hi": ["प्रोजेक्ट रेफरेन्स सक्षम करता है", "प्रोजेक्ट को कम्पोजिट के रूप में चिह्नित करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the 'declarationMap' compiler option?",
        "question_hi": "'declarationMap' कंपाइलर विकल्प क्या है?",
        "options_en": ["Generates source maps for .d.ts files", "Enables navigation to source from declarations", "Both A and B", "None of the above"],
        "options_hi": [".d.ts फाइलों के लिए सोर्स मैप उत्पन्न करता है", "घोषणाओं से स्रोत पर नेविगेशन सक्षम करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the 'noUnusedLocals' compiler option?",
        "question_hi": "'noUnusedLocals' कंपाइलर विकल्प क्या है?",
        "options_en": ["Flags unused local variables", "Requires all locals to be used", "Both A and B", "None of the above"],
        "options_hi": ["अनउपयोगी स्थानीय वेरिएबल को फ्लैग करता है", "सभी स्थानीय के उपयोग की आवश्यकता होती है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the 'exactOptionalPropertyTypes' option?",
        "question_hi": "'exactOptionalPropertyTypes' विकल्प क्या है?",
        "options_en": ["Requires undefined for optional properties", "Strict checking of optional properties", "Both A and B", "None of the above"],
        "options_hi": ["वैकल्पिक गुणों के लिए undefined की आवश्यकता होती है", "वैकल्पिक गुणों की सख्त जाँच", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the 'noPropertyAccessFromIndexSignature' option?",
        "question_hi": "'noPropertyAccessFromIndexSignature' विकल्प क्या है?",
        "options_en": ["Requires index access for undefined properties", "Prevents dot notation for index signatures", "Both A and B", "None of the above"],
        "options_hi": ["अपरिभाषित गुणों के लिए इंडेक्स एक्सेस की आवश्यकता होती है", "इंडेक्स सिग्नेचर के लिए डॉट नोटेशन को रोकता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the 'noUncheckedIndexedAccess' option?",
        "question_hi": "'noUncheckedIndexedAccess' विकल्प क्या है?",
        "options_en": ["Adds undefined to index signature accesses", "Makes index access more strict", "Both A and B", "None of the above"],
        "options_hi": ["इंडेक्स सिग्नेचर एक्सेस में undefined जोड़ता है", "इंडेक्स एक्सेस को और सख्त बनाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the 'noImplicitOverride' option?",
        "question_hi": "'noImplicitOverride' विकल्प क्या है?",
        "options_en": ["Requires override keyword for overridden methods", "Prevents accidental overrides", "Both A and B", "None of the above"],
        "options_hi": ["ओवरराइड की गई मेथड के लिए override कीवर्ड की आवश्यकता होती है", "आकस्मिक ओवरराइड को रोकता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the 'useUnknownInCatchVariables' option?",
        "question_hi": "'useUnknownInCatchVariables' विकल्प क्या है?",
        "options_en": ["Makes catch variables unknown instead of any", "Improves type safety in catch blocks", "Both A and B", "None of the above"],
        "options_hi": ["कैच वेरिएबल को any के बजाय unknown बनाता है", "कैच ब्लॉक में टाइप सेफ्टी में सुधार करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the 'noFallthroughCasesInSwitch' option?",
        "question_hi": "'noFallthroughCasesInSwitch' विकल्प क्या है?",
        "options_en": ["Prevents fallthrough in switch cases", "Requires break or return in cases", "Both A and B", "None of the above"],
        "options_hi": ["स्विच केस में फॉलथ्रू को रोकता है", "केस में break या return की आवश्यकता होती है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the 'noImplicitAny' compiler option?",
        "question_hi": "'noImplicitAny' कंपाइलर विकल्प क्या है?",
        "options_en": ["Disallows implicit any types", "Requires explicit type annotations", "Both A and B", "None of the above"],
        "options_hi": ["अंतर्निहित any प्रकारों को अस्वीकार करता है", "स्पष्ट प्रकार एनोटेशन की आवश्यकता होती है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the 'strictBindCallApply' option?",
        "question_hi": "'strictBindCallApply' विकल्प क्या है?",
        "options_en": ["Strict checking of bind, call, and apply", "Ensures correct arguments for these methods", "Both A and B", "None of the above"],
        "options_hi": ["bind, call, और apply की सख्त जाँच", "इन मेथड के लिए सही आर्गुमेंट सुनिश्चित करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the 'strictFunctionTypes' option?",
        "question_hi": "'strictFunctionTypes' विकल्प क्या है?",
        "options_en": ["Strict checking of function types", "Enables bivariant parameter checking", "Both A and B", "None of the above"],
        "options_hi": ["फ़ंक्शन प्रकारों की सख्त जाँच", "बाइवेरिएंट पैरामीटर जाँच सक्षम करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Strict checking of function types",
        "answer_hi": "फ़ंक्शन प्रकारों की सख्त जाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the 'strictNullChecks' option?",
        "question_hi": "'strictNullChecks' विकल्प क्या है?",
        "options_en": ["Enables strict null checking", "Requires handling of null and undefined", "Both A and B", "None of the above"],
        "options_hi": ["सख्त null जाँच सक्षम करता है", "null और undefined के हैंडलिंग की आवश्यकता होती है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the 'useDefineForClassFields' option?",
        "question_hi": "'useDefineForClassFields' विकल्प क्या है?",
        "options_en": ["Uses define for class fields (ECMAScript standard)", "Changes class field initialization", "Both A and B", "None of the above"],
        "options_hi": ["क्लास फील्ड के लिए define का उपयोग करता है (ECMAScript मानक)", "क्लास फील्ड इनिशियलाइज़ेशन बदलता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the 'lib' compiler option?",
        "question_hi": "'lib' कंपाइलर विकल्प क्या है?",
        "options_en": ["Specifies library files to include", "Sets which built-in APIs are available", "Both A and B", "None of the above"],
        "options_hi": ["शामिल करने के लिए लाइब्रेरी फाइलें निर्दिष्ट करता है", "सेट करता है कि कौन से बिल्ट-इन API उपलब्ध हैं", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the 'moduleResolution' option?",
        "question_hi": "'moduleResolution' विकल्प क्या है?",
        "options_en": ["Specifies how modules get resolved", "Sets module resolution strategy", "Both A and B", "None of the above"],
        "options_hi": ["निर्दिष्ट करता है कि मॉड्यूल कैसे हल होते हैं", "मॉड्यूल रेजोल्यूशन स्ट्रैटेजी सेट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What are the two main module resolution strategies?",
        "question_hi": "दो मुख्य मॉड्यूल रेजोल्यूशन रणनीतियाँ क्या हैं?",
        "options_en": ["node and classic", "commonjs and esnext", "amd and system", "umd and commonjs"],
        "options_hi": ["node और classic", "commonjs और esnext", "amd और system", "umd और commonjs"],
        "answer_en": "node and classic",
        "answer_hi": "node और classic",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the 'allowSyntheticDefaultImports' option?",
        "question_hi": "'allowSyntheticDefaultImports' विकल्प क्या है?",
        "options_en": ["Allows default imports from modules with no default export", "Enables synthetic default imports", "Both A and B", "None of the above"],
        "options_hi": ["बिना डिफॉल्ट एक्सपोर्ट वाले मॉड्यूल से डिफॉल्ट आयात की अनुमति देता है", "सिंथेटिक डिफॉल्ट आयात सक्षम करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the 'experimentalDecorators' option?",
        "question_hi": "'experimentalDecorators' विकल्प क्या है?",
        "options_en": ["Enables experimental decorator support", "Allows use of decorators", "Both A and B", "None of the above"],
        "options_hi": ["प्रायोगिक डेकोरेटर समर्थन सक्षम करता है", "डेकोरेटर के उपयोग की अनुमति देता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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