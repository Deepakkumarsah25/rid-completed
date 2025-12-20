const questions = [
    {
        "num": 1,
        "question_en": "What is the main advantage of using TypeScript over JavaScript?",
        "question_hi": "JavaScript पर TypeScript का उपयोग करने का मुख्य लाभ क्या है?",
        "options_en": ["Static type checking", "Faster execution", "Smaller file size", "Better browser support"],
        "options_hi": ["स्टैटिक टाइप चेकिंग", "तेज एक्सीक्यूशन", "छोटा फाइल साइज", "बेहतर ब्राउज़र सपोर्ट"],
        "answer_en": "Static type checking",
        "answer_hi": "स्टैटिक टाइप चेकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of the following is NOT a valid TypeScript type?",
        "question_hi": "निम्नलिखित में से कौन सा वैध TypeScript प्रकार नहीं है?",
        "options_en": ["float", "string", "boolean", "symbol"],
        "options_hi": ["float", "string", "boolean", "symbol"],
        "answer_en": "float",
        "answer_hi": "float",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you define a variable that can be either string or number?",
        "question_hi": "आप एक वेरिएबल कैसे परिभाषित करते हैं जो स्ट्रिंग या नंबर हो सकता है?",
        "options_en": ["let value: string | number;", "let value: string or number;", "let value: string & number;", "let value: string, number;"],
        "options_hi": ["let value: string | number;", "let value: string or number;", "let value: string & number;", "let value: string, number;"],
        "answer_en": "let value: string | number;",
        "answer_hi": "let value: string | number;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of the 'unknown' type?",
        "question_hi": "'unknown' प्रकार का उद्देश्य क्या है?",
        "options_en": ["Type-safe alternative to 'any'", "For unknown values", "Both A and B", "None of the above"],
        "options_hi": ["'any' का टाइप-सेफ विकल्प", "अज्ञात मानों के लिए", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How do you make all properties in an interface optional?",
        "question_hi": "आप इंटरफेस में सभी गुणों को वैकल्पिक कैसे बनाते हैं?",
        "options_en": ["Use Partial utility type", "Add ? to each property", "Both A and B", "Use Optional utility type"],
        "options_hi": ["Partial यूटिलिटी प्रकार का उपयोग करें", "प्रत्येक गुण में ? जोड़ें", "A और B दोनों", "Optional यूटिलिटी प्रकार का उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the difference between 'interface' and 'type' for function definitions?",
        "question_hi": "फ़ंक्शन परिभाषाओं के लिए 'interface' और 'type' में क्या अंतर है?",
        "options_en": ["No significant difference", "interface cannot define functions", "type cannot define functions", "interface is preferred for functions"],
        "options_hi": ["कोई महत्वपूर्ण अंतर नहीं", "interface फ़ंक्शन परिभाषित नहीं कर सकता", "type फ़ंक्शन परिभाषित नहीं कर सकता", "फ़ंक्शन के लिए interface पसंद किया जाता है"],
        "answer_en": "No significant difference",
        "answer_hi": "कोई महत्वपूर्ण अंतर नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How do you define a read-only array in TypeScript?",
        "question_hi": "TypeScript में रीड-ओनली ऐरे कैसे परिभाषित करते हैं?",
        "options_en": ["readonly string[]", "ReadonlyArray<string>", "Both A and B", "const string[]"],
        "options_hi": ["readonly string[]", "ReadonlyArray<string>", "A और B दोनों", "const string[]"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the 'keyof' operator used for?",
        "question_hi": "'keyof' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Get union of object keys", "Check if key exists", "Get object values", "Create new keys"],
        "options_hi": ["ऑब्जेक्ट कुंजियों का यूनियन प्राप्त करें", "जांचें कि कुंजी मौजूद है या नहीं", "ऑब्जेक्ट मान प्राप्त करें", "नई कुंजियाँ बनाएं"],
        "answer_en": "Get union of object keys",
        "answer_hi": "ऑब्जेक्ट कुंजियों का यूनियन प्राप्त करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you create a type that excludes null and undefined from another type?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जो किसी अन्य प्रकार से null और undefined को बाहर करता है?",
        "options_en": ["NonNullable<T>", "T extends {}", "Both A and B", "NotNull<T>"],
        "options_hi": ["NonNullable<T>", "T extends {}", "A और B दोनों", "NotNull<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of 'as const' assertion?",
        "question_hi": "'as const' असर्शन का उद्देश्य क्या है?",
        "options_en": ["Make values readonly literals", "Prevent type widening", "Both A and B", "Make variables constant"],
        "options_hi": ["मानों को रीडओनली लिटरल बनाएं", "प्रकार विस्तार को रोकें", "A और B दोनों", "वेरिएबल को कॉन्स्टेंट बनाएं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you define a function that can be called with new?",
        "question_hi": "आप एक फ़ंक्शन कैसे परिभाषित करते हैं जिसे new के साथ कॉल किया जा सकता है?",
        "options_en": ["interface Constructor { new(): T }", "Use constructor signature", "Both A and B", "Use newable interface"],
        "options_hi": ["interface Constructor { new(): T }", "कंस्ट्रक्टर सिग्नेचर का उपयोग करें", "A और B दोनों", "newable इंटरफेस का उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the 'satisfies' operator used for?",
        "question_hi": "'satisfies' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Check if value satisfies type", "Validate type constraints", "Both A and B", "Replace type assertions"],
        "options_hi": ["जांचें कि मान प्रकार को संतुष्ट करता है", "प्रकार बाधाओं को मान्य करें", "A और B दोनों", "प्रकार असर्शन को बदलें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you create a type that makes all properties mutable?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जो सभी गुणों को परिवर्तनशील बनाता है?",
        "options_en": ["{ -readonly [K in keyof T]: T[K] }", "Mutable<T>", "Both A and B", "Writable<T>"],
        "options_hi": ["{ -readonly [K in keyof T]: T[K] }", "Mutable<T>", "A और B दोनों", "Writable<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the difference between 'interface extends' and 'type intersection'?",
        "question_hi": "'interface extends' और 'type intersection' में क्या अंतर है?",
        "options_en": ["interface can be extended, type can merge", "No difference", "type is more flexible", "interface is for objects only"],
        "options_hi": ["interface का विस्तार किया जा सकता है, type मर्ज हो सकता है", "कोई अंतर नहीं", "type अधिक लचीला है", "interface केवल ऑब्जेक्ट के लिए है"],
        "answer_en": "interface can be extended, type can merge",
        "answer_hi": "interface का विस्तार किया जा सकता है, type मर्ज हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How do you extract the return type of a function?",
        "question_hi": "आप किसी फ़ंक्शन के रिटर्न प्रकार को कैसे निकालते हैं?",
        "options_en": ["ReturnType<T>", "T extends (...args: any) => infer R ? R : never", "Both A and B", "FunctionReturn<T>"],
        "options_hi": ["ReturnType<T>", "T extends (...args: any) => infer R ? R : never", "A और B दोनों", "FunctionReturn<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the purpose of 'declare' keyword in .d.ts files?",
        "question_hi": ".d.ts फाइलों में 'declare' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Declare types without implementation", "Indicate external declarations", "Both A and B", "Define runtime code"],
        "options_hi": ["बिना कार्यान्वयन के प्रकार घोषित करें", "बाहरी घोषणाओं को इंगित करें", "A और B दोनों", "रनटाइम कोड परिभाषित करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you create a type that requires at least one property from a set?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जिसके लिए किसी सेट से कम से कम एक गुण आवश्यक है?",
        "options_en": ["Partial<T> & { [K in keyof T]: Required<Pick<T, K>> }[keyof T]", "AtLeastOne<T>", "Both A and B", "RequireOne<T>"],
        "options_hi": ["Partial<T> & { [K in keyof T]: Required<Pick<T, K>> }[keyof T]", "AtLeastOne<T>", "A और B दोनों", "RequireOne<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the difference between 'type' and 'interface' for recursive types?",
        "question_hi": "रिकर्सिव प्रकारों के लिए 'type' और 'interface' में क्या अंतर है?",
        "options_en": ["type can be recursive directly", "interface needs forward declaration", "Both A and B", "No difference"],
        "options_hi": ["type सीधे रिकर्सिव हो सकता है", "interface को फॉरवर्ड डिक्लेरेशन की आवश्यकता होती है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How do you create a deep readonly type?",
        "question_hi": "आप डीप रीडओनली प्रकार कैसे बनाते हैं?",
        "options_en": ["type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }", "Recursive Readonly", "Both A and B", "Immutable<T>"],
        "options_hi": ["type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }", "रिकर्सिव रीडओनली", "A और B दोनों", "Immutable<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the purpose of 'asserts' in function signatures?",
        "question_hi": "फ़ंक्शन सिग्नेचर में 'asserts' का उद्देश्य क्या है?",
        "options_en": ["Assert conditions are true", "Narrow types in control flow", "Both A and B", "Throw errors"],
        "options_hi": ["दावा करें कि शर्तें सत्य हैं", "कंट्रोल फ्लो में प्रकारों को संकीर्ण करें", "A और B दोनों", "त्रुटियाँ फेंकें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you extract the parameters of a function type?",
        "question_hi": "आप किसी फ़ंक्शन प्रकार के पैरामीटर कैसे निकालते हैं?",
        "options_en": ["Parameters<T>", "T extends (...args: infer P) => any ? P : never", "Both A and B", "FunctionParams<T>"],
        "options_hi": ["Parameters<T>", "T extends (...args: infer P) => any ? P : never", "A और B दोनों", "FunctionParams<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the difference between 'const' and 'readonly' for arrays?",
        "question_hi": "ऐरे के लिए 'const' और 'readonly' में क्या अंतर है?",
        "options_en": ["const prevents reassignment, readonly prevents mutation", "No difference", "const is for variables, readonly for properties", "Both A and C"],
        "options_hi": ["const पुन: असाइनमेंट को रोकता है, readonly म्यूटेशन को रोकता है", "कोई अंतर नहीं", "const वेरिएबल के लिए है, readonly प्रॉपर्टी के लिए", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you create a type that excludes methods from an object type?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जो ऑब्जेक्ट प्रकार से मेथड को बाहर करता है?",
        "options_en": ["{ [K in keyof T as T[K] extends Function ? never : K]: T[K] }", "PropertiesOnly<T>", "Both A and B", "WithoutMethods<T>"],
        "options_hi": ["{ [K in keyof T as T[K] extends Function ? never : K]: T[K] }", "PropertiesOnly<T>", "A और B दोनों", "WithoutMethods<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of 'template literal types'?",
        "question_hi": "'टेम्पलेट लिटरल टाइप' का उद्देश्य क्या है?",
        "options_en": ["Create string pattern types", "String manipulation at type level", "Both A and B", "Template string validation"],
        "options_hi": ["स्ट्रिंग पैटर्न प्रकार बनाएं", "टाइप लेवल पर स्ट्रिंग मैनिपुलेशन", "A और B दोनों", "टेम्पलेट स्ट्रिंग वैलिडेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you create a type that requires mutual exclusion between properties?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जिसके लिए गुणों के बीच पारस्परिक बहिष्करण आवश्यक है?",
        "options_en": ["type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U", "Mutually exclusive types", "Both A and B", "Exclusive<T, U>"],
        "options_hi": ["type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U", "पारस्परिक रूप से अनन्य प्रकार", "A और B दोनों", "Exclusive<T, U>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the difference between 'any' and 'unknown' in catch clauses?",
        "question_hi": "कैच क्लॉज में 'any' और 'unknown' में क्या अंतर है?",
        "options_en": ["unknown requires type checking", "any allows any operation", "Both A and B", "No difference in catch"],
        "options_hi": ["unknown को टाइप चेकिंग की आवश्यकता होती है", "any किसी भी ऑपरेशन की अनुमति देता है", "A और B दोनों", "कैच में कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you create a branded type for nominal typing?",
        "question_hi": "आप नॉमिनल टाइपिंग के लिए ब्रांडेड प्रकार कैसे बनाते हैं?",
        "options_en": ["type Branded<T, B> = T & { __brand: B }", "Type with unique brand", "Both A and B", "NamedType<T>"],
        "options_hi": ["type Branded<T, B> = T & { __brand: B }", "अद्वितीय ब्रांड वाला प्रकार", "A और B दोनों", "NamedType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of 'conditional types' with 'infer'?",
        "question_hi": "'infer' के साथ 'कंडीशनल टाइप' का उद्देश्य क्या है?",
        "options_en": ["Extract types from other types", "Pattern matching at type level", "Both A and B", "Type inference"],
        "options_hi": ["अन्य प्रकारों से प्रकार निकालें", "टाइप लेवल पर पैटर्न मिलान", "A और B दोनों", "प्रकार अनुमान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you create a type that deep partial?",
        "question_hi": "आप डीप पार्शियल प्रकार कैसे बनाते हैं?",
        "options_en": ["type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> }", "Recursive Partial", "Both A and B", "ShallowPartial<T>"],
        "options_hi": ["type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> }", "रिकर्सिव पार्शियल", "A और B दोनों", "ShallowPartial<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the difference between 'type' and 'interface' declaration merging?",
        "question_hi": "'type' और 'interface' डिक्लेरेशन मर्जिंग में क्या अंतर है?",
        "options_en": ["interface supports declaration merging", "type does not support merging", "Both A and B", "No difference"],
        "options_hi": ["interface डिक्लेरेशन मर्जिंग का समर्थन करता है", "type मर्जिंग का समर्थन नहीं करता", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you extract the instance type of a constructor?",
        "question_hi": "आप किसी कंस्ट्रक्टर का इंस्टेंस प्रकार कैसे निकालते हैं?",
        "options_en": ["InstanceType<T>", "T extends new (...args: any) => infer R ? R : never", "Both A and B", "ConstructorInstance<T>"],
        "options_hi": ["InstanceType<T>", "T extends new (...args: any) => infer R ? R : never", "A और B दोनों", "ConstructorInstance<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of 'mapped types' with 'as' clause?",
        "question_hi": "'as' क्लॉज के साथ 'मैप्ड टाइप' का उद्देश्य क्या है?",
        "options_en": ["Filter or transform keys", "Key remapping", "Both A and B", "Type mapping"],
        "options_hi": ["कुंजियाँ फ़िल्टर या रूपांतरित करें", "कुंजी रीमैपिंग", "A और B दोनों", "प्रकार मैपिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you create a type that requires exact properties?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जिसके लिए सटीक गुणों की आवश्यकता होती है?",
        "options_en": ["type Exact<T, U extends T> = T & Record<Exclude<keyof U, keyof T>, never>", "Strict type", "Both A and B", "ExactShape<T>"],
        "options_hi": ["type Exact<T, U extends T> = T & Record<Exclude<keyof U, keyof T>, never>", "सख्त प्रकार", "A और B दोनों", "ExactShape<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the difference between 'typeof' and 'instanceof' type guards?",
        "question_hi": "'typeof' और 'instanceof' टाइप गार्ड में क्या अंतर है?",
        "options_en": ["typeof checks primitive types", "instanceof checks class instances", "Both A and B", "No difference"],
        "options_hi": ["typeof प्रिमिटिव प्रकारों की जाँच करता है", "instanceof क्लास इंस्टेंस की जाँच करता है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you create a type that extracts promise type?",
        "question_hi": "आप प्रॉमिस प्रकार निकालने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["type Awaited<T> = T extends Promise<infer U> ? U : T", "UnwrapPromise<T>", "Both A and B", "PromiseValue<T>"],
        "options_hi": ["type Awaited<T> = T extends Promise<infer U> ? U : T", "UnwrapPromise<T>", "A और B दोनों", "PromiseValue<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of 'index signatures'?",
        "question_hi": "'इंडेक्स सिग्नेचर' का उद्देश्य क्या है?",
        "options_en": ["Define dynamic properties", "Allow arbitrary keys", "Both A and B", "Array-like access"],
        "options_hi": ["डायनामिक गुण परिभाषित करें", "मनमानी कुंजियाँ अनुमति दें", "A और B दोनों", "ऐरे जैसी पहुंच"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you create a type that requires specific keys?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जिसके लिए विशिष्ट कुंजियों की आवश्यकता होती है?",
        "options_en": ["type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>", "WithRequired<T, K>", "Both A and B", "RequireSpecific<T, K>"],
        "options_hi": ["type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>", "WithRequired<T, K>", "A और B दोनों", "RequireSpecific<T, K>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the difference between 'public' and 'protected' in inheritance?",
        "question_hi": "इनहेरिटेंस में 'public' और 'protected' में क्या अंतर है?",
        "options_en": ["public accessible everywhere", "protected accessible in class and subclasses", "Both A and B", "No difference in inheritance"],
        "options_hi": ["public हर जगह पहुंच योग्य", "protected क्लास और सबक्लास में पहुंच योग्य", "A और B दोनों", "इनहेरिटेंस में कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you create a type that requires all or none of properties?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जिसके लिए सभी या कोई भी गुण आवश्यक है?",
        "options_en": ["type AllOrNone<T> = T | { [K in keyof T]?: never }", "Mutually exclusive properties", "Both A and B", "CompleteOrEmpty<T>"],
        "options_hi": ["type AllOrNone<T> = T | { [K in keyof T]?: never }", "पारस्परिक रूप से अनन्य गुण", "A और B दोनों", "CompleteOrEmpty<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of 'readonly' for arrays and tuples?",
        "question_hi": "ऐरे और टपल के लिए 'readonly' का उद्देश्य क्या है?",
        "options_en": ["Prevent mutation", "Make immutable", "Both A and B", "Make constant"],
        "options_hi": ["म्यूटेशन को रोकें", "अपरिवर्तनीय बनाएं", "A और B दोनों", "कॉन्स्टेंट बनाएं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you create a type that extracts union from tuple?",
        "question_hi": "आप टपल से यूनियन निकालने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["T[number]", "TupleToUnion<T>", "Both A and B", "UnionFromTuple<T>"],
        "options_hi": ["T[number]", "TupleToUnion<T>", "A और B दोनों", "UnionFromTuple<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the difference between 'type' and 'interface' performance?",
        "question_hi": "'type' और 'interface' प्रदर्शन में क्या अंतर है?",
        "options_en": ["No significant difference", "interface might be faster in some cases", "type is more memory efficient", "Both A and B"],
        "options_hi": ["कोई महत्वपूर्ण अंतर नहीं", "कुछ मामलों में interface तेज हो सकता है", "type अधिक मेमोरी कुशल है", "A और B दोनों"],
        "answer_en": "No significant difference",
        "answer_hi": "कोई महत्वपूर्ण अंतर नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you create a type that requires at most one property?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जिसके लिए अधिकतम एक गुण आवश्यक है?",
        "options_en": ["type AtMostOne<T> = { [K in keyof T]: Pick<T, K> & Partial<Record<Exclude<keyof T, K>, never>> }[keyof T]", "Mutually exclusive optional", "Both A and B", "MaxOne<T>"],
        "options_hi": ["type AtMostOne<T> = { [K in keyof T]: Pick<T, K> & Partial<Record<Exclude<keyof T, K>, never>> }[keyof T]", "पारस्परिक रूप से अनन्य वैकल्पिक", "A और B दोनों", "MaxOne<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of 'abstract' methods in abstract classes?",
        "question_hi": "एब्स्ट्रैक्ट क्लास में 'एब्स्ट्रैक्ट' मेथड का उद्देश्य क्या है?",
        "options_en": ["Define contract for subclasses", "Force implementation in subclasses", "Both A and B", "Prevent instantiation"],
        "options_hi": ["सबक्लास के लिए अनुबंध परिभाषित करें", "सबक्लास में कार्यान्वयन के लिए बाध्य करें", "A और B दोनों", "इंस्टेंटिएशन को रोकें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you create a type that extracts constructor parameters?",
        "question_hi": "आप कंस्ट्रक्टर पैरामीटर निकालने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["ConstructorParameters<T>", "T extends new (...args: infer P) => any ? P : never", "Both A and B", "ConstructorArgs<T>"],
        "options_hi": ["ConstructorParameters<T>", "T extends new (...args: infer P) => any ? P : never", "A और B दोनों", "ConstructorArgs<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the difference between 'readonly' and 'const' for objects?",
        "question_hi": "ऑब्जेक्ट के लिए 'readonly' और 'const' में क्या अंतर है?",
        "options_en": ["const prevents reassignment", "readonly prevents property mutation", "Both A and B", "No difference for objects"],
        "options_hi": ["const पुन: असाइनमेंट को रोकता है", "readonly प्रॉपर्टी म्यूटेशन को रोकता है", "A और B दोनों", "ऑब्जेक्ट के लिए कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you create a type that requires specific pattern?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जिसके लिए विशिष्ट पैटर्न आवश्यक है?",
        "options_en": ["type Pattern<T extends string> = `prefix-${T}-suffix`", "Template literal pattern", "Both A and B", "StringPattern<T>"],
        "options_hi": ["type Pattern<T extends string> = `prefix-${T}-suffix`", "टेम्पलेट लिटरल पैटर्न", "A और B दोनों", "StringPattern<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of 'namespace' in modern TypeScript?",
        "question_hi": "आधुनिक TypeScript में 'namespace' का उद्देश्य क्या है?",
        "options_en": ["Legacy code organization", "Global declarations", "Both A and B", "Module replacement"],
        "options_hi": ["लेगेसी कोड संगठन", "वैश्विक घोषणाएं", "A और B दोनों", "मॉड्यूल प्रतिस्थापन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you create a type that requires exact string values?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जिसके लिए सटीक स्ट्रिंग मान आवश्यक हैं?",
        "options_en": ["type ExactString = 'value1' | 'value2'", "String literal union", "Both A and B", "StringEnum"],
        "options_hi": ["type ExactString = 'value1' | 'value2'", "स्ट्रिंग लिटरल यूनियन", "A और B दोनों", "StringEnum"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the difference between 'type' and 'interface' for function overloading?",
        "question_hi": "फ़ंक्शन ओवरलोडिंग के लिए 'type' और 'interface' में क्या अंतर है?",
        "options_en": ["interface supports overloading better", "type can also do overloading", "Both A and B", "No difference"],
        "options_hi": ["interface ओवरलोडिंग को बेहतर समर्थन करता है", "type भी ओवरलोडिंग कर सकता है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you create a type that extracts the 'this' parameter type?",
        "question_hi": "आप 'this' पैरामीटर प्रकार निकालने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["ThisParameterType<T>", "T extends (this: infer U, ...args: any) => any ? U : unknown", "Both A and B", "ThisType<T>"],
        "options_hi": ["ThisParameterType<T>", "T extends (this: infer U, ...args: any) => any ? U : unknown", "A और B दोनों", "ThisType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the purpose of 'decorators' in TypeScript?",
        "question_hi": "TypeScript में 'डेकोरेटर' का उद्देश्य क्या है?",
        "options_en": ["Modify classes and members", "Add metadata", "Both A and B", "Syntax sugar"],
        "options_hi": ["कक्षाओं और सदस्यों को संशोधित करें", "मेटाडेटा जोड़ें", "A और B दोनों", "सिंटैक्स शुगर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you create a type that requires index signature?",
        "question_hi": "आप एक प्रकार कैसे बनाते हैं जिसके लिए इंडेक्स सिग्नेचर आवश्यक है?",
        "options_en": ["{ [key: string]: any }", "Record<string, any>", "Both A and B", "StringIndexable"],
        "options_hi": ["{ [key: string]: any }", "Record<string, any>", "A और B दोनों", "StringIndexable"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the difference between 'private' and 'protected' in access?",
        "question_hi": "एक्सेस में 'private' और 'protected' में क्या अंतर है?",
        "options_en": ["private only in class", "protected in class and subclasses", "Both A and B", "No difference in access"],
        "options_hi": ["private केवल क्लास में", "protected क्लास और सबक्लास में", "A और B दोनों", "एक्सेस में कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you create a type that requires array element type?",
        "question_hi": "आप ऐरे एलिमेंट प्रकार आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["T[number]", "ArrayElement<T>", "Both A and B", "ElementType<T>"],
        "options_hi": ["T[number]", "ArrayElement<T>", "A और B दोनों", "ElementType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of 'mixins' in TypeScript?",
        "question_hi": "TypeScript में 'मिक्सिन' का उद्देश्य क्या है?",
        "options_en": ["Compose classes from multiple sources", "Reuse behavior", "Both A and B", "Multiple inheritance"],
        "options_hi": ["एकाधिक स्रोतों से कक्षाओं की रचना करें", "व्यवहार पुन: उपयोग", "A और B दोनों", "एकाधिक विरासत"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you create a type that requires function parameters as tuple?",
        "question_hi": "आप फ़ंक्शन पैरामीटर को टपल के रूप में आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["Parameters<T>", "T extends (...args: any) => any ? Parameters<T> : never", "Both A and B", "FunctionParams<T>"],
        "options_hi": ["Parameters<T>", "T extends (...args: any) => any ? Parameters<T> : never", "A और B दोनों", "FunctionParams<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the difference between 'enum' and 'union type'?",
        "question_hi": "'enum' और 'union type' में क्या अंतर है?",
        "options_en": ["enum has runtime values", "union is compile-time only", "Both A and B", "No difference"],
        "options_hi": ["enum के रनटाइम मान होते हैं", "union केवल कंपाइल-टाइम है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you create a type that requires specific constraints?",
        "question_hi": "आप विशिष्ट बाधाओं को आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["type Constrained<T extends constraint> = T", "Generic with constraints", "Both A and B", "BoundedType<T>"],
        "options_hi": ["type Constrained<T extends constraint> = T", "बाधाओं के साथ जेनेरिक", "A और B दोनों", "BoundedType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the purpose of 'module augmentation'?",
        "question_hi": "'मॉड्यूल ऑग्मेंटेशन' का उद्देश्य क्या है?",
        "options_en": ["Add to existing module declarations", "Extend third-party types", "Both A and B", "Module extension"],
        "options_hi": ["मौजूदा मॉड्यूल घोषणाओं में जोड़ें", "थर्ड-पार्टी प्रकारों का विस्तार करें", "A और B दोनों", "मॉड्यूल एक्सटेंशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you create a type that requires object entries?",
        "question_hi": "आप ऑब्जेक्ट एंट्री आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["[K in keyof T]: [K, T[K]]", "ObjectEntries<T>", "Both A and B", "EntryType<T>"],
        "options_hi": ["[K in keyof T]: [K, T[K]]", "ObjectEntries<T>", "A और B दोनों", "EntryType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the difference between 'type' and 'interface' for intersection?",
        "question_hi": "इंटरसेक्शन के लिए 'type' और 'interface' में क्या अंतर है?",
        "options_en": ["type uses &, interface uses extends", "Both can represent intersection", "Both A and B", "No difference"],
        "options_hi": ["type & का उपयोग करता है, interface extends का उपयोग करता है", "दोनों इंटरसेक्शन का प्रतिनिधित्व कर सकते हैं", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you create a type that requires function return type?",
        "question_hi": "आप फ़ंक्शन रिटर्न प्रकार आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["ReturnType<T>", "T extends (...args: any) => infer R ? R : never", "Both A and B", "FunctionReturn<T>"],
        "options_hi": ["ReturnType<T>", "T extends (...args: any) => infer R ? R : never", "A और B दोनों", "FunctionReturn<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the purpose of 'conditional types' in utility types?",
        "question_hi": "यूटिलिटी टाइप में 'कंडीशनल टाइप' का उद्देश्य क्या है?",
        "options_en": ["Create type transformations", "Handle different type cases", "Both A and B", "Type branching"],
        "options_hi": ["प्रकार परिवर्तन बनाएं", "विभिन्न प्रकार के मामलों को संभालें", "A और B दोनों", "प्रकार शाखाओं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you create a type that requires object keys?",
        "question_hi": "आप ऑब्जेक्ट कुंजियाँ आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["keyof T", "ObjectKeys<T>", "Both A and B", "KeysType<T>"],
        "options_hi": ["keyof T", "ObjectKeys<T>", "A और B दोनों", "KeysType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the difference between 'type' and 'interface' for implementation?",
        "question_hi": "कार्यान्वयन के लिए 'type' और 'interface' में क्या अंतर है?",
        "options_en": ["Both can be implemented", "No significant difference", "interface is preferred for implementation", "Both B and C"],
        "options_hi": ["दोनों कार्यान्वित किए जा सकते हैं", "कोई महत्वपूर्ण अंतर नहीं", "कार्यान्वयन के लिए interface पसंद किया जाता है", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you create a type that requires tuple length?",
        "question_hi": "आप टपल लंबाई आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["T['length']", "TupleLength<T>", "Both A and B", "LengthType<T>"],
        "options_hi": ["T['length']", "TupleLength<T>", "A और B दोनों", "LengthType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the purpose of 'readonly' for class properties?",
        "question_hi": "क्लास प्रॉपर्टी के लिए 'readonly' का उद्देश्य क्या है?",
        "options_en": ["Prevent reassignment after construction", "Make immutable", "Both A and B", "Make constant"],
        "options_hi": ["निर्माण के बाद पुन: असाइनमेंट को रोकें", "अपरिवर्तनीय बनाएं", "A और B दोनों", "कॉन्स्टेंट बनाएं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you create a type that requires function this type?",
        "question_hi": "आप फ़ंक्शन this प्रकार आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["ThisParameterType<T>", "T extends (this: infer U, ...args: any) => any ? U : unknown", "Both A and B", "ThisType<T>"],
        "options_hi": ["ThisParameterType<T>", "T extends (this: infer U, ...args: any) => any ? U : unknown", "A और B दोनों", "ThisType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the difference between 'type' and 'interface' for extension?",
        "question_hi": "एक्सटेंशन के लिए 'type' और 'interface' में क्या अंतर है?",
        "options_en": ["interface uses extends", "type uses intersection", "Both A and B", "No difference"],
        "options_hi": ["interface extends का उपयोग करता है", "type इंटरसेक्शन का उपयोग करता है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you create a type that requires object values?",
        "question_hi": "आप ऑब्जेक्ट मान आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["T[keyof T]", "ObjectValues<T>", "Both A and B", "ValuesType<T>"],
        "options_hi": ["T[keyof T]", "ObjectValues<T>", "A और B दोनों", "ValuesType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the purpose of 'abstract' classes?",
        "question_hi": "'एब्स्ट्रैक्ट' क्लास का उद्देश्य क्या है?",
        "options_en": ["Base classes for inheritance", "Cannot be instantiated", "Both A and B", "Template classes"],
        "options_hi": ["विरासत के लिए आधार कक्षाएं", "इंस्टेंटिएट नहीं किया जा सकता", "A और B दोनों", "टेम्पलेट कक्षाएं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you create a type that requires function type?",
        "question_hi": "आप फ़ंक्शन प्रकार आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["(...args: any) => any", "Function", "Both A and B", "Callable"],
        "options_hi": ["(...args: any) => any", "Function", "A और B दोनों", "Callable"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the difference between 'type' and 'interface' for declaration?",
        "question_hi": "घोषणा के लिए 'type' और 'interface' में क्या अंतर है?",
        "options_en": ["interface can be merged", "type cannot be merged", "Both A and B", "No difference"],
        "options_hi": ["interface मर्ज किया जा सकता है", "type मर्ज नहीं किया जा सकता", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you create a type that requires array type?",
        "question_hi": "आप ऐरे प्रकार आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["T[]", "Array<T>", "Both A and B", "List<T>"],
        "options_hi": ["T[]", "Array<T>", "A और B दोनों", "List<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of 'generic constraints'?",
        "question_hi": "'जेनेरिक कंस्ट्रेंट' का उद्देश्य क्या है?",
        "options_en": ["Restrict generic types", "Ensure type safety", "Both A and B", "Type validation"],
        "options_hi": ["जेनेरिक प्रकारों को प्रतिबंधित करें", "प्रकार सुरक्षा सुनिश्चित करें", "A और B दोनों", "प्रकार मान्यता"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you create a type that requires tuple type?",
        "question_hi": "आप टपल प्रकार आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["[T, U]", "Tuple<T, U>", "Both A and B", "Pair<T, U>"],
        "options_hi": ["[T, U]", "Tuple<T, U>", "A और B दोनों", "Pair<T, U>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the difference between 'type' and 'interface' for objects?",
        "question_hi": "ऑब्जेक्ट के लिए 'type' और 'interface' में क्या अंतर है?",
        "options_en": ["No significant difference", "Both can define objects", "Both A and B", "interface is preferred for objects"],
        "options_hi": ["कोई महत्वपूर्ण अंतर नहीं", "दोनों ऑब्जेक्ट परिभाषित कर सकते हैं", "A और B दोनों", "ऑब्जेक्ट के लिए interface पसंद किया जाता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you create a type that requires promise type?",
        "question_hi": "आप प्रॉमिस प्रकार आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["Promise<T>", "PromiseLike<T>", "Both A and B", "Async<T>"],
        "options_hi": ["Promise<T>", "PromiseLike<T>", "A और B दोनों", "Async<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the purpose of 'utility types'?",
        "question_hi": "'यूटिलिटी टाइप' का उद्देश्य क्या है?",
        "options_en": ["Common type transformations", "Type manipulation", "Both A and B", "Built-in types"],
        "options_hi": ["सामान्य प्रकार परिवर्तन", "प्रकार हेरफेर", "A और B दोनों", "बिल्ट-इन प्रकार"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you create a type that requires record type?",
        "question_hi": "आप रिकॉर्ड प्रकार आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["Record<K, T>", "{ [key in K]: T }", "Both A and B", "Dictionary<K, T>"],
        "options_hi": ["Record<K, T>", "{ [key in K]: T }", "A और B दोनों", "Dictionary<K, T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the difference between 'type' and 'interface' for unions?",
        "question_hi": "यूनियन के लिए 'type' और 'interface' में क्या अंतर है?",
        "options_en": ["type can represent unions", "interface cannot represent unions", "Both A and B", "No difference"],
        "options_hi": ["type यूनियन का प्रतिनिधित्व कर सकता है", "interface यूनियन का प्रतिनिधित्व नहीं कर सकता", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you create a type that requires conditional type?",
        "question_hi": "आप कंडीशनल प्रकार आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["T extends U ? X : Y", "Conditional<T, U, X, Y>", "Both A and B", "IfType<T, U, X, Y>"],
        "options_hi": ["T extends U ? X : Y", "Conditional<T, U, X, Y>", "A और B दोनों", "IfType<T, U, X, Y>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Who developed TypeScript?",
        "question_hi": "TypeScript को किसने विकसित किया?",
        "options_en": ["Microsoft", "Google", "Facebook", "Apple"],
        "options_hi": ["माइक्रोसॉफ्ट", "गूगल", "फेसबुक", "एप्पल"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 85,
        "question_en": "What is the purpose of 'never' type in TypeScript?",
        "question_hi": "TypeScript में 'never' प्रकार का उद्देश्य क्या है?",
        "options_en": ["Represent values that never occur", "Functions that never return", "Both A and B", "For infinite loops"],
        "options_hi": ["ऐसे मानों का प्रतिनिधित्व करना जो कभी नहीं होते", "फ़ंक्शन जो कभी वापस नहीं लौटते", "A और B दोनों", "अनंत लूप के लिए"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you create a type that extracts the first element of a tuple?",
        "question_hi": "आप टपल के पहले एलिमेंट को निकालने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["T[0]", "First<T>", "Both A and B", "Head<T>"],
        "options_hi": ["T[0]", "First<T>", "A और B दोनों", "Head<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the difference between 'any' and 'unknown' for type safety?",
        "question_hi": "टाइप सेफ्टी के लिए 'any' और 'unknown' में क्या अंतर है?",
        "options_en": ["unknown is type-safe, any is not", "unknown requires type checking", "Both A and B", "No difference"],
        "options_hi": ["unknown टाइप-सेफ है, any नहीं है", "unknown को टाइप चेकिंग की आवश्यकता होती है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you create a type that requires all properties to be required?",
        "question_hi": "आप सभी गुणों को आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["Required<T>", "{ [K in keyof T]-?: T[K] }", "Both A and B", "AllRequired<T>"],
        "options_hi": ["Required<T>", "{ [K in keyof T]-?: T[K] }", "A और B दोनों", "AllRequired<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'infer' keyword in conditional types?",
        "question_hi": "कंडीशनल टाइप में 'infer' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Infer types within conditionals", "Extract type information", "Both A and B", "Type inference"],
        "options_hi": ["कंडीशनल के भीतर प्रकारों का अनुमान लगाएं", "प्रकार जानकारी निकालें", "A और B दोनों", "प्रकार अनुमान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you create a type that excludes specific keys from an object?",
        "question_hi": "आप ऑब्जेक्ट से विशिष्ट कुंजियों को बाहर करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["Omit<T, K>", "{ [P in Exclude<keyof T, K>]: T[P] }", "Both A and B", "ExcludeKeys<T, K>"],
        "options_hi": ["Omit<T, K>", "{ [P in Exclude<keyof T, K>]: T[P] }", "A और B दोनों", "ExcludeKeys<T, K>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the difference between 'interface' and 'type' for extending?",
        "question_hi": "एक्सटेंड करने के लिए 'interface' और 'type' में क्या अंतर है?",
        "options_en": ["interface uses extends", "type uses intersection", "Both A and B", "No difference"],
        "options_hi": ["interface extends का उपयोग करता है", "type इंटरसेक्शन का उपयोग करता है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you create a type that picks specific properties from an object?",
        "question_hi": "आप ऑब्जेक्ट से विशिष्ट गुणों को चुनने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["Pick<T, K>", "{ [P in K]: T[P] }", "Both A and B", "SelectProperties<T, K>"],
        "options_hi": ["Pick<T, K>", "{ [P in K]: T[P] }", "A और B दोनों", "SelectProperties<T, K>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'readonly' modifier for arrays?",
        "question_hi": "ऐरे के लिए 'readonly' मॉडिफायर का उद्देश्य क्या है?",
        "options_en": ["Prevent array mutation", "Make array immutable", "Both A and B", "Make array constant"],
        "options_hi": ["ऐरे म्यूटेशन को रोकें", "ऐरे को अपरिवर्तनीय बनाएं", "A और B दोनों", "ऐरे को कॉन्स्टेंट बनाएं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you create a type that requires function overloading?",
        "question_hi": "आप फ़ंक्शन ओवरलोडिंग आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["interface with multiple call signatures", "type with union of functions", "Both A and B", "Overload<T>"],
        "options_hi": ["एकाधिक कॉल सिग्नेचर वाला interface", "फ़ंक्शन के यूनियन वाला type", "A और B दोनों", "Overload<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the difference between 'private' and '#' private fields?",
        "question_hi": "'private' और '#' प्राइवेट फील्ड में क्या अंतर है?",
        "options_en": ["# is runtime private", "private is compile-time only", "Both A and B", "No difference"],
        "options_hi": ["# रनटाइम प्राइवेट है", "private केवल कंपाइल-टाइम है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you create a type that requires async function return?",
        "question_hi": "आप async फ़ंक्शन रिटर्न आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["Promise<T>", "async () => T", "Both A and B", "AsyncFunction<T>"],
        "options_hi": ["Promise<T>", "async () => T", "A और B दोनों", "AsyncFunction<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'const assertions'?",
        "question_hi": "'const assertions' का उद्देश्य क्या है?",
        "options_en": ["Prevent type widening", "Make values readonly", "Both A and B", "Make variables constant"],
        "options_hi": ["प्रकार विस्तार को रोकें", "मानों को रीडओनली बनाएं", "A और B दोनों", "वेरिएबल को कॉन्स्टेंट बनाएं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you create a type that requires tuple to array conversion?",
        "question_hi": "आप टपल से ऐरे कन्वर्जन आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["T[number][]", "TupleToArray<T>", "Both A and B", "SpreadTuple<T>"],
        "options_hi": ["T[number][]", "TupleToArray<T>", "A और B दोनों", "SpreadTuple<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the difference between 'void' and 'undefined'?",
        "question_hi": "'void' और 'undefined' में क्या अंतर है?",
        "options_en": ["void means no value", "undefined is a value", "Both A and B", "No difference"],
        "options_hi": ["void का मतलब कोई मान नहीं", "undefined एक मान है", "A और B दोनों", "कोई अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you create a type that requires all possible combinations?",
        "question_hi": "आप सभी संभावित संयोजनों को आवश्यक करने वाला प्रकार कैसे बनाते हैं?",
        "options_en": ["T | U | (T & U)", "Union and intersection combinations", "Both A and B", "AllCombinations<T, U>"],
        "options_hi": ["T | U | (T & U)", "यूनियन और इंटरसेक्शन संयोजन", "A और B दोनों", "AllCombinations<T, U>"],
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