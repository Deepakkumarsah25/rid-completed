const questions = [
  {
    "num": 1,
    "question_en": "What is the purpose of Partial<T> utility type?",
    "question_hi": "Partial<T> यूटिलिटी टाइप का उद्देश्य क्या है?",
    "options_en": ["Makes all properties optional", "Selects partial properties", "Creates partial types", "Makes some properties optional"],
    "options_hi": ["सभी गुणों को वैकल्पिक बनाता है", "आंशिक गुणों का चयन करता है", "आंशिक प्रकार बनाता है", "कुछ गुणों को वैकल्पिक बनाता है"],
    "answer_en": "Makes all properties optional",
    "answer_hi": "सभी गुणों को वैकल्पिक बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which utility type makes all properties required?",
    "question_hi": "कौन सा यूटिलिटी टाइप सभी गुणों को आवश्यक बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does Readonly<T> utility type do?",
    "question_hi": "Readonly<T> यूटिलिटी टाइप क्या करता है?",
    "options_en": ["Makes all properties readonly", "Creates immutable types", "Prevents property modification", "All of the above"],
    "options_hi": ["सभी गुणों को केवल पढ़ने योग्य बनाता है", "अपरिवर्तनीय प्रकार बनाता है", "गुण संशोधन को रोकता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which utility type selects specific properties from a type?",
    "question_hi": "कौन सा यूटिलिटी टाइप एक प्रकार से विशिष्ट गुणों का चयन करता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Record<K, T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Record<K, T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What does Omit<T, K> utility type do?",
    "question_hi": "Omit<T, K> यूटिलिटी टाइप क्या करता है?",
    "options_en": ["Excludes specified properties", "Creates type without properties", "Removes properties from type", "All of the above"],
    "options_hi": ["निर्दिष्ट गुणों को बाहर करता है", "गुणों के बिना प्रकार बनाता है", "प्रकार से गुण हटाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which utility type creates an object type with specified keys and value type?",
    "question_hi": "कौन सा यूटिलिटी टाइप निर्दिष्ट कुंजियों और मान प्रकार के साथ एक वस्तु प्रकार बनाता है?",
    "options_en": ["Record<K, T>", "Partial<T>", "Pick<T, K>", "Required<T>"],
    "options_hi": ["Record<K, T>", "Partial<T>", "Pick<T, K>", "Required<T>"],
    "answer_en": "Record<K, T>",
    "answer_hi": "Record<K, T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does Exclude<T, U> utility type do?",
    "question_hi": "Exclude<T, U> यूटिलिटी टाइप क्या करता है?",
    "options_en": ["Excludes U from union T", "Removes types from union", "Filters union members", "All of the above"],
    "options_hi": ["संघ T से U को बाहर करता है", "संघ से प्रकारों को हटाता है", "संघ सदस्यों को फ़िल्टर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which utility type extracts types from a union?",
    "question_hi": "कौन सा यूटिलिटी टाइप एक संघ से प्रकार निकालता है?",
    "options_en": ["Extract<T, U>", "Exclude<T, U>", "Pick<T, K>", "Omit<T, K>"],
    "options_hi": ["Extract<T, U>", "Exclude<T, U>", "Pick<T, K>", "Omit<T, K>"],
    "answer_en": "Extract<T, U>",
    "answer_hi": "Extract<T, U>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does NonNullable<T> utility type do?",
    "question_hi": "NonNullable<T> यूटिलिटी टाइप क्या करता है?",
    "options_en": ["Removes null and undefined", "Creates non-nullable type", "Ensures value existence", "All of the above"],
    "options_hi": ["null और undefined को हटाता है", "गैर-शून्य प्रकार बनाता है", "मान अस्तित्व सुनिश्चित करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which utility type extracts parameter types from a function type?",
    "question_hi": "कौन सा यूटिलिटी टाइप एक फ़ंक्शन प्रकार से पैरामीटर प्रकार निकालता है?",
    "options_en": ["Parameters<T>", "ReturnType<T>", "ConstructorParameters<T>", "InstanceType<T>"],
    "options_hi": ["Parameters<T>", "ReturnType<T>", "ConstructorParameters<T>", "InstanceType<T>"],
    "answer_en": "Parameters<T>",
    "answer_hi": "Parameters<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does ReturnType<T> utility type extract?",
    "question_hi": "ReturnType<T> यूटिलिटी टाइप क्या निकालता है?",
    "options_en": ["Function return type", "Type of returned value", "Result type", "All of the above"],
    "options_hi": ["फ़ंक्शन रिटर्न प्रकार", "लौटाए गए मान का प्रकार", "परिणाम प्रकार", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which utility type extracts constructor parameter types?",
    "question_hi": "कौन सा यूटिलिटी टाइप कंस्ट्रक्टर पैरामीटर प्रकार निकालता है?",
    "options_en": ["ConstructorParameters<T>", "Parameters<T>", "InstanceType<T>", "ReturnType<T>"],
    "options_hi": ["ConstructorParameters<T>", "Parameters<T>", "InstanceType<T>", "ReturnType<T>"],
    "answer_en": "ConstructorParameters<T>",
    "answer_hi": "ConstructorParameters<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does InstanceType<T> utility type extract?",
    "question_hi": "InstanceType<T> यूटिलिटी टाइप क्या निकालता है?",
    "options_en": ["Instance type of constructor", "Class instance type", "Type of new expression", "All of the above"],
    "options_hi": ["कंस्ट्रक्टर का उदाहरण प्रकार", "कक्षा उदाहरण प्रकार", "नए अभिव्यक्ति का प्रकार", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does ThisParameterType<T> extract?",
    "question_hi": "ThisParameterType<T> क्या निकालता है?",
    "options_en": ["Type of 'this' parameter", "This context type", "Function's this type", "All of the above"],
    "options_hi": ["'this' पैरामीटर का प्रकार", "This संदर्भ प्रकार", "फ़ंक्शन का this प्रकार", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which utility type removes 'this' parameter from function type?",
    "question_hi": "कौन सा यूटिलिटी टाइप फ़ंक्शन प्रकार से 'this' पैरामीटर हटाता है?",
    "options_en": ["OmitThisParameter<T>", "ThisParameterType<T>", "Parameters<T>", "ReturnType<T>"],
    "options_hi": ["OmitThisParameter<T>", "ThisParameterType<T>", "Parameters<T>", "ReturnType<T>"],
    "answer_en": "OmitThisParameter<T>",
    "answer_hi": "OmitThisParameter<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does Uppercase<StringType> do?",
    "question_hi": "Uppercase<StringType> क्या करता है?",
    "options_en": ["Converts string literal to uppercase", "String transformation", "Uppercase type manipulation", "All of the above"],
    "options_hi": ["स्ट्रिंग लिटरल को अपरकेस में बदलता है", "स्ट्रिंग परिवर्तन", "अपरकेस टाइप मैनिपुलेशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which utility type converts string literal to lowercase?",
    "question_hi": "कौन सा यूटिलिटी टाइप स्ट्रिंग लिटरल को लोअरकेस में बदलता है?",
    "options_en": ["Lowercase<StringType>", "Uppercase<StringType>", "Capitalize<StringType>", "Uncapitalize<StringType>"],
    "options_hi": ["Lowercase<StringType>", "Uppercase<StringType>", "Capitalize<StringType>", "Uncapitalize<StringType>"],
    "answer_en": "Lowercase<StringType>",
    "answer_hi": "Lowercase<StringType>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does Capitalize<StringType> do?",
    "question_hi": "Capitalize<StringType> क्या करता है?",
    "options_en": ["Capitalizes first character", "Title case transformation", "First letter uppercase", "All of the above"],
    "options_hi": ["पहले अक्षर को बड़ा करता है", "शीर्षक केस परिवर्तन", "पहला अक्षर अपरकेस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which utility type uncapitalizes first character of string literal?",
    "question_hi": "कौन सा यूटिलिटी टाइप स्ट्रिंग लिटरल के पहले अक्षर को अनकैपिटलाइज़ करता है?",
    "options_en": ["Uncapitalize<StringType>", "Capitalize<StringType>", "Lowercase<StringType>", "Uppercase<StringType>"],
    "options_hi": ["Uncapitalize<StringType>", "Capitalize<StringType>", "Lowercase<StringType>", "Uppercase<StringType>"],
    "answer_en": "Uncapitalize<StringType>",
    "answer_hi": "Uncapitalize<StringType>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is Awaited<T> utility type used for?",
    "question_hi": "Awaited<T> यूटिलिटी टाइप किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Unwraps Promise types", "Gets resolved type", "Handles async types", "All of the above"],
    "options_hi": ["Promise प्रकारों को अनरैप करता है", "हल किया गया प्रकार प्राप्त करता है", "एसिंक प्रकारों को संभालता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which utility type creates a type with all properties set to readonly?",
    "question_hi": "कौन सा यूटिलिटी टाइप सभी गुणों को केवल पढ़ने योग्य सेट करके एक प्रकार बनाता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Record<K, T>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Record<K, T>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "How does Partial<T> differ from Required<T>?",
    "question_hi": "Partial<T>, Required<T> से कैसे भिन्न है?",
    "options_en": ["Opposite transformations", "Optional vs Required", "Both modify property optionality", "All of the above"],
    "options_hi": ["विपरीत परिवर्तन", "वैकल्पिक बनाम आवश्यक", "दोनों संपत्ति वैकल्पिकता को संशोधित करते हैं", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the result of Pick<{a: number, b: string}, 'a'>?",
    "question_hi": "Pick<{a: number, b: string}, 'a'> का परिणाम क्या है?",
    "options_en": ["{a: number}", "{a: number, b?: string}", "{a: number} only", "{a: number} type"],
    "options_hi": ["{a: number}", "{a: number, b?: string}", "केवल {a: number}", "{a: number} प्रकार"],
    "answer_en": "{a: number}",
    "answer_hi": "{a: number}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does Omit<{a: number, b: string}, 'b'> produce?",
    "question_hi": "Omit<{a: number, b: string}, 'b'> क्या उत्पन्न करता है?",
    "options_en": ["{a: number}", "{b: string}", "{}", "{a?: number}"],
    "options_hi": ["{a: number}", "{b: string}", "{}", "{a?: number}"],
    "answer_en": "{a: number}",
    "answer_hi": "{a: number}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is Record<'id' | 'name', string> equivalent to?",
    "question_hi": "Record<'id' | 'name', string> किसके समतुल्य है?",
    "options_en": ["{id: string, name: string}", "{id?: string, name?: string}", "{id: string | name: string}", "{id: string} | {name: string}"],
    "options_hi": ["{id: string, name: string}", "{id?: string, name?: string}", "{id: string | name: string}", "{id: string} | {name: string}"],
    "answer_en": "{id: string, name: string}",
    "answer_hi": "{id: string, name: string}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does Exclude<'a' | 'b' | 'c', 'a'> produce?",
    "question_hi": "Exclude<'a' | 'b' | 'c', 'a'> क्या उत्पन्न करता है?",
    "options_en": ["'b' | 'c'", "'a' | 'b'", "'c' only", "never"],
    "options_hi": ["'b' | 'c'", "'a' | 'b'", "केवल 'c'", "never"],
    "answer_en": "'b' | 'c'",
    "answer_hi": "'b' | 'c'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does Extract<'a' | 'b' | 'c', 'a' | 'd'> produce?",
    "question_hi": "Extract<'a' | 'b' | 'c', 'a' | 'd'> क्या उत्पन्न करता है?",
    "options_en": ["'a'", "'a' | 'd'", "'b' | 'c'", "never"],
    "options_hi": ["'a'", "'a' | 'd'", "'b' | 'c'", "never"],
    "answer_en": "'a'",
    "answer_hi": "'a'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does NonNullable<string | null | undefined> produce?",
    "question_hi": "NonNullable<string | null | undefined> क्या उत्पन्न करता है?",
    "options_en": ["string", "string | undefined", "string | null", "never"],
    "options_hi": ["string", "string | undefined", "string | null", "never"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What does Parameters<(a: number, b: string) => void> produce?",
    "question_hi": "Parameters<(a: number, b: string) => void> क्या उत्पन्न करता है?",
    "options_en": ["[number, string]", "[a: number, b: string]", "tuple of parameters", "All of the above"],
    "options_hi": ["[number, string]", "[a: number, b: string]", "पैरामीटर्स का टपल", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does ReturnType<() => string> produce?",
    "question_hi": "ReturnType<() => string> क्या उत्पन्न करता है?",
    "options_en": ["string", "void", "any", "unknown"],
    "options_hi": ["string", "void", "any", "unknown"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which utility type would you use to make all properties of an interface optional?",
    "question_hi": "आप एक इंटरफ़ेस के सभी गुणों को वैकल्पिक बनाने के लिए किस यूटिलिटी टाइप का उपयोग करेंगे?",
    "options_en": ["Partial<T>", "Optional<T>", "Pick<T, K>", "Omit<T, K>"],
    "options_hi": ["Partial<T>", "Optional<T>", "Pick<T, K>", "Omit<T, K>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What utility type creates a type with specific keys all having the same value type?",
    "question_hi": "कौन सा यूटिलिटी टाइप विशिष्ट कुंजियों के साथ एक प्रकार बनाता है जिन सभी का समान मान प्रकार है?",
    "options_en": ["Record<K, T>", "Dictionary<K, T>", "MapType<K, T>", "KeyValue<K, T>"],
    "options_hi": ["Record<K, T>", "Dictionary<K, T>", "MapType<K, T>", "KeyValue<K, T>"],
    "answer_en": "Record<K, T>",
    "answer_hi": "Record<K, T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "How can you create a type that excludes certain properties from an existing type?",
    "question_hi": "आप कैसे एक प्रकार बना सकते हैं जो मौजूदा प्रकार से कुछ गुणों को बाहर करता है?",
    "options_en": ["Omit<T, K>", "Exclude<T, U>", "Without<T, K>", "Remove<T, K>"],
    "options_hi": ["Omit<T, K>", "Exclude<T, U>", "Without<T, K>", "Remove<T, K>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which utility type extracts the return type of a constructor function?",
    "question_hi": "कौन सा यूटिलिटी टाइप एक कंस्ट्रक्टर फ़ंक्शन के रिटर्न टाइप को निकालता है?",
    "options_en": ["InstanceType<T>", "ReturnType<T>", "ConstructorReturn<T>", "NewType<T>"],
    "options_hi": ["InstanceType<T>", "ReturnType<T>", "ConstructorReturn<T>", "NewType<T>"],
    "answer_en": "InstanceType<T>",
    "answer_hi": "InstanceType<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does ReadonlyArray<T> utility type create?",
    "question_hi": "ReadonlyArray<T> यूटिलिटी टाइप क्या बनाता है?",
    "options_en": ["Immutable array type", "Array that cannot be modified", "Readonly version of array", "All of the above"],
    "options_hi": ["अपरिवर्तनीय सरणी प्रकार", "सरणी जिसे संशोधित नहीं किया जा सकता", "सरणी का केवल पढ़ने योग्य संस्करण", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which utility type would transform 'hello' to 'HELLO' at type level?",
    "question_hi": "कौन सा यूटिलिटी टाइप 'hello' को 'HELLO' में टाइप स्तर पर बदल देगा?",
    "options_en": ["Uppercase<'hello'>", "Capitalize<'hello'>", "ToUpperCase<'hello'>", "UpperCase<'hello'>"],
    "options_hi": ["Uppercase<'hello'>", "Capitalize<'hello'>", "ToUpperCase<'hello'>", "UpperCase<'hello'>"],
    "answer_en": "Uppercase<'hello'>",
    "answer_hi": "Uppercase<'hello'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does Pick<T, K> require K to be?",
    "question_hi": "Pick<T, K> के लिए K को क्या होना आवश्यक है?",
    "options_en": ["Union of keys of T", "Single key of T", "String literal type", "All valid keys of T"],
    "options_hi": ["T की कुंजियों का संघ", "T की एकल कुंजी", "स्ट्रिंग लिटरल टाइप", "T की सभी मान्य कुंजियाँ"],
    "answer_en": "Union of keys of T",
    "answer_hi": "T की कुंजियों का संघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the difference between Exclude and Omit?",
    "question_hi": "Exclude और Omit में क्या अंतर है?",
    "options_en": ["Exclude works on unions, Omit on object types", "Exclude removes types, Omit removes properties", "Different use cases", "All of the above"],
    "options_hi": ["Exclude यूनियन पर काम करता है, Omit ऑब्जेक्ट टाइप्स पर", "Exclude प्रकार हटाता है, Omit गुण हटाता है", "विभिन्न उपयोग के मामले", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which utility type would you use to get all property names of a type as a union?",
    "question_hi": "आप किसी प्रकार के सभी संपत्ति नामों को एक संघ के रूप में प्राप्त करने के लिए किस यूटिलिटी टाइप का उपयोग करेंगे?",
    "options_en": ["keyof operator", "Keys<T> utility", "PropertyNames<T>", "GetKeys<T>"],
    "options_hi": ["keyof ऑपरेटर", "Keys<T> यूटिलिटी", "PropertyNames<T>", "GetKeys<T>"],
    "answer_en": "keyof operator",
    "answer_hi": "keyof ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does Partial<Readonly<T>> produce?",
    "question_hi": "Partial<Readonly<T>> क्या उत्पन्न करता है?",
    "options_en": ["Type with optional readonly properties", "Readonly properties that are optional", "Both A and B", "Error - cannot combine"],
    "options_hi": ["वैकल्पिक केवल पढ़ने योग्य गुणों वाला प्रकार", "वैकल्पिक केवल पढ़ने योग्य गुण", "A और B दोनों", "त्रुटि - संयोजन नहीं कर सकते"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which utility type would make a deep readonly type?",
    "question_hi": "कौन सा यूटिलिटी टाइप एक गहरा केवल पढ़ने योग्य प्रकार बनाएगा?",
    "options_en": ["Custom mapped type", "DeepReadonly<T> (not built-in)", "Readonly only does shallow", "Need custom implementation"],
    "options_hi": ["कस्टम मैप्ड टाइप", "DeepReadonly<T> (अंतर्निहित नहीं)", "Readonly केवल उथला करता है", "कस्टम कार्यान्वयन की आवश्यकता है"],
    "answer_en": "Need custom implementation",
    "answer_hi": "कस्टम कार्यान्वयन की आवश्यकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does Required<Partial<T>> produce?",
    "question_hi": "Required<Partial<T>> क्या उत्पन्न करता है?",
    "options_en": ["T", "Partial<T>", "Required<T>", "{}"],
    "options_hi": ["T", "Partial<T>", "Required<T>", "{}"],
    "answer_en": "T",
    "answer_hi": "T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "How can you create a type that makes only some properties readonly?",
    "question_hi": "आप कैसे एक प्रकार बना सकते हैं जो केवल कुछ गुणों को केवल पढ़ने योग्य बनाता है?",
    "options_en": ["Custom mapped type", "Pick + Readonly combination", "Partial solution", "All of the above"],
    "options_hi": ["कस्टम मैप्ड टाइप", "Pick + Readonly संयोजन", "आंशिक समाधान", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does Awaited<Promise<Promise<string>>> produce?",
    "question_hi": "Awaited<Promise<Promise<string>>> क्या उत्पन्न करता है?",
    "options_en": ["string", "Promise<string>", "Promise<Promise<string>>", "any"],
    "options_hi": ["string", "Promise<string>", "Promise<Promise<string>>", "any"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which utility type transforms 'helloWorld' to 'helloworld'?",
    "question_hi": "कौन सा यूटिलिटी टाइप 'helloWorld' को 'helloworld' में बदलता है?",
    "options_en": ["Uncapitalize<'helloWorld'>", "Lowercase<'helloWorld'>", "Uncapitalize only first letter", "Lowercase transforms all"],
    "options_hi": ["Uncapitalize<'helloWorld'>", "Lowercase<'helloWorld'>", "Uncapitalize केवल पहला अक्षर", "Lowercase सभी को बदलता है"],
    "answer_en": "Lowercase<'helloWorld'>",
    "answer_hi": "Lowercase<'helloWorld'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does Record<string, number> represent?",
    "question_hi": "Record<string, number> क्या दर्शाता है?",
    "options_en": ["Object with string keys and number values", "Dictionary of numbers", "Index signature type", "All of the above"],
    "options_hi": ["स्ट्रिंग कुंजियों और संख्या मानों वाली वस्तु", "संख्याओं का शब्दकोश", "इंडेक्स सिग्नेचर टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "How to extract the type of the first parameter of a function?",
    "question_hi": "फ़ंक्शन के पहले पैरामीटर का प्रकार कैसे निकालें?",
    "options_en": ["Parameters<T>[0]", "FirstParameter<T> utility", "ParameterAt<T, 0>", "Use indexed access"],
    "options_hi": ["Parameters<T>[0]", "FirstParameter<T> यूटिलिटी", "ParameterAt<T, 0>", "इंडेक्स्ड एक्सेस का उपयोग करें"],
    "answer_en": "Parameters<T>[0]",
    "answer_hi": "Parameters<T>[0]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does ConstructorParameters<typeof Date> produce?",
    "question_hi": "ConstructorParameters<typeof Date> क्या उत्पन्न करता है?",
    "options_en": ["Constructor parameters of Date", "Types Date constructor accepts", "Tuple of Date params", "All of the above"],
    "options_hi": ["Date के कंस्ट्रक्टर पैरामीटर्स", "Date कंस्ट्रक्टर द्वारा स्वीकृत प्रकार", "Date पैराम्स का टपल", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which utility type would remove null/undefined from array element type?",
    "question_hi": "कौन सा यूटिलिटी टाइप ऐरे एलिमेंट टाइप से null/undefined हटाएगा?",
    "options_en": ["Array<NonNullable<T>>", "NonNullable for array types", "Filter utility type", "Custom implementation needed"],
    "options_hi": ["Array<NonNullable<T>>", "ऐरे टाइप्स के लिए NonNullable", "फ़िल्टर यूटिलिटी टाइप", "कस्टम कार्यान्वयन आवश्यक"],
    "answer_en": "Array<NonNullable<T>>",
    "answer_hi": "Array<NonNullable<T>>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does Pick<T, keyof T> produce?",
    "question_hi": "Pick<T, keyof T> क्या उत्पन्न करता है?",
    "options_en": ["T", "Partial<T>", "Required<T>", "Record<keyof T, any>"],
    "options_hi": ["T", "Partial<T>", "Required<T>", "Record<keyof T, any>"],
    "answer_en": "T",
    "answer_hi": "T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which utility type creates a type with all properties mutable (not readonly)?",
    "question_hi": "कौन सा यूटिलिटी टाइप सभी गुणों को परिवर्तनशील (केवल पढ़ने योग्य नहीं) के साथ एक प्रकार बनाता है?",
    "options_en": ["Mutable<T> (not built-in)", "No built-in utility", "Need custom type", "All of the above"],
    "options_hi": ["Mutable<T> (अंतर्निहित नहीं)", "कोई अंतर्निहित उपयोगिता नहीं", "कस्टम टाइप की आवश्यकता", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does Exclude<any, any> produce?",
    "question_hi": "Exclude<any, any> क्या उत्पन्न करता है?",
    "options_en": ["never", "any", "unknown", "void"],
    "options_hi": ["never", "any", "unknown", "void"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does Extract<any, string> produce?",
    "question_hi": "Extract<any, string> क्या उत्पन्न करता है?",
    "options_en": ["string", "any", "string | any", "never"],
    "options_hi": ["string", "any", "string | any", "never"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "How to create a type that makes properties readonly only at top level?",
    "question_hi": "कैसे एक प्रकार बनाएं जो गुणों को केवल शीर्ष स्तर पर केवल पढ़ने योग्य बनाता है?",
    "options_en": ["Readonly<T>", "ShallowReadonly<T> (custom)", "Built-in Readonly is shallow", "All correct"],
    "options_hi": ["Readonly<T>", "ShallowReadonly<T> (कस्टम)", "अंतर्निहित Readonly उथला है", "सभी सही"],
    "answer_en": "All correct",
    "answer_hi": "सभी सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What utility type would you use for API response that may be error or data?",
    "question_hi": "आप एपीआई प्रतिक्रिया के लिए किस यूटिलिटी टाइप का उपयोग करेंगे जो त्रुटि या डेटा हो सकती है?",
    "options_en": ["Result<T, E> pattern", "Custom discriminated union", "No specific utility", "Built-in union types"],
    "options_hi": ["Result<T, E> पैटर्न", "कस्टम विभेदक संघ", "कोई विशिष्ट उपयोगिता नहीं", "अंतर्निहित संघ प्रकार"],
    "answer_en": "Built-in union types",
    "answer_hi": "अंतर्निहित संघ प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does Partial<Record<K, T>> produce?",
    "question_hi": "Partial<Record<K, T>> क्या उत्पन्न करता है?",
    "options_en": ["Partial object with K keys and T values", "Optional properties Record", "Record with optional values", "All describe it"],
    "options_hi": ["K कुंजियों और T मानों वाली आंशिक वस्तु", "वैकल्पिक गुण रिकॉर्ड", "वैकल्पिक मानों वाला रिकॉर्ड", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "How to get return type of async function?",
    "question_hi": "एसिंक फ़ंक्शन के रिटर्न टाइप को कैसे प्राप्त करें?",
    "options_en": ["ReturnType<typeof func>", "Awaited<ReturnType<typeof func>>", "Unwrap Promise manually", "All work"],
    "options_hi": ["ReturnType<typeof func>", "Awaited<ReturnType<typeof func>>", "Promise को मैन्युअल रूप से अनरैप करें", "सभी काम करते हैं"],
    "answer_en": "All work",
    "answer_hi": "सभी काम करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does Uppercase<Lowercase<'Hello'>> produce?",
    "question_hi": "Uppercase<Lowercase<'Hello'>> क्या उत्पन्न करता है?",
    "options_en": ["'HELLO'", "'hello'", "'Hello'", "'HELLo'"],
    "options_hi": ["'HELLO'", "'hello'", "'Hello'", "'HELLo'"],
    "answer_en": "'HELLO'",
    "answer_hi": "'HELLO'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which utility type transforms property names to uppercase in an object type?",
    "question_hi": "कौन सा यूटिलिटी टाइप किसी ऑब्जेक्ट टाइप में संपत्ति नामों को अपरकेस में बदलता है?",
    "options_en": ["Custom mapped type with Uppercase", "No built-in utility", "Record with transformed keys", "Need custom implementation"],
    "options_hi": ["Uppercase के साथ कस्टम मैप्ड टाइप", "कोई अंतर्निहित उपयोगिता नहीं", "रूपांतरित कुंजियों वाला रिकॉर्ड", "कस्टम कार्यान्वयन की आवश्यकता"],
    "answer_en": "Need custom implementation",
    "answer_hi": "कस्टम कार्यान्वयन की आवश्यकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does Omit<T, never> produce?",
    "question_hi": "Omit<T, never> क्या उत्पन्न करता है?",
    "options_en": ["T", "{}", "Partial<T>", "never"],
    "options_hi": ["T", "{}", "Partial<T>", "never"],
    "answer_en": "T",
    "answer_hi": "T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What does Pick<T, never> produce?",
    "question_hi": "Pick<T, never> क्या उत्पन्न करता है?",
    "options_en": ["{}", "T", "never", "Partial<T>"],
    "options_hi": ["{}", "T", "never", "Partial<T>"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "How to create a type with optional properties except some specific ones?",
    "question_hi": "कुछ विशिष्ट गुणों को छोड़कर वैकल्पिक गुणों वाला प्रकार कैसे बनाएं?",
    "options_en": ["Partial<T> & Required<Pick<T, K>>", "Custom utility type", "Combine Partial and Required", "All work"],
    "options_hi": ["Partial<T> & Required<Pick<T, K>>", "कस्टम यूटिलिटी टाइप", "Partial और Required संयोजित करें", "सभी काम करते हैं"],
    "answer_en": "All work",
    "answer_hi": "सभी काम करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does Awaited<number> produce?",
    "question_hi": "Awaited<number> क्या उत्पन्न करता है?",
    "options_en": ["number", "Promise<number>", "never", "any"],
    "options_hi": ["number", "Promise<number>", "never", "any"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which utility type would extract the resolved type from Promise or non-Promise?",
    "question_hi": "कौन सा यूटिलिटी टाइप Promise या गैर-Promise से हल किए गए प्रकार को निकालेगा?",
    "options_en": ["Awaited<T>", "Unwrap<T>", "Resolved<T>", "Flatten<T>"],
    "options_hi": ["Awaited<T>", "Unwrap<T>", "Resolved<T>", "Flatten<T>"],
    "answer_en": "Awaited<T>",
    "answer_hi": "Awaited<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does Record<PropertyKey, any> represent?",
    "question_hi": "Record<PropertyKey, any> क्या दर्शाता है?",
    "options_en": ["Any object", "Indexable object", "Loose dictionary", "All of the above"],
    "options_hi": ["कोई भी वस्तु", "अनुक्रमणीय वस्तु", "ढीला शब्दकोश", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "How to create a type with exactly the same properties but different value types?",
    "question_hi": "बिल्कुल समान गुणों लेकिन भिन्न मान प्रकारों वाला प्रकार कैसे बनाएं?",
    "options_en": ["Mapped type over keyof T", "Record<keyof T, NewType>", "Custom transformation", "All work"],
    "options_hi": ["keyof T पर मैप्ड टाइप", "Record<keyof T, NewType>", "कस्टम परिवर्तन", "सभी काम करते हैं"],
    "answer_en": "All work",
    "answer_hi": "सभी काम करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What does Partial<{a: number}> & {b: string} produce?",
    "question_hi": "Partial<{a: number}> & {b: string} क्या उत्पन्न करता है?",
    "options_en": ["{a?: number, b: string}", "{a: number, b: string}", "{a?: number} & {b: string}", "Both A and C"],
    "options_hi": ["{a?: number, b: string}", "{a: number, b: string}", "{a?: number} & {b: string}", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which utility type would make all properties nullable (T | null)?",
    "question_hi": "कौन सा यूटिलिटी टाइप सभी गुणों को नलबल (T | null) बनाएगा?",
    "options_en": ["Nullable<T> (custom)", "No built-in utility", "Mapped type needed", "All correct"],
    "options_hi": ["Nullable<T> (कस्टम)", "कोई अंतर्निहित उपयोगिता नहीं", "मैप्ड टाइप आवश्यक", "सभी सही"],
    "answer_en": "All correct",
    "answer_hi": "सभी सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does Extract<never, string> produce?",
    "question_hi": "Extract<never, string> क्या उत्पन्न करता है?",
    "options_en": ["never", "string", "never | string", "any"],
    "options_hi": ["never", "string", "never | string", "any"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What does Exclude<unknown, any> produce?",
    "question_hi": "Exclude<unknown, any> क्या उत्पन्न करता है?",
    "options_en": ["unknown", "never", "any", "void"],
    "options_hi": ["unknown", "never", "any", "void"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "How to create a type that makes all properties writable (not readonly)?",
    "question_hi": "कैसे एक प्रकार बनाएं जो सभी गुणों को लिखने योग्य (केवल पढ़ने योग्य नहीं) बनाता है?",
    "options_en": ["{-readonly [K in keyof T]: T[K]}", "Mutable mapped type", "Custom utility", "All describe solution"],
    "options_hi": ["{-readonly [K in keyof T]: T[K]}", "परिवर्तनशील मैप्ड टाइप", "कस्टम यूटिलिटी", "सभी समाधान का वर्णन करते हैं"],
    "answer_en": "All describe solution",
    "answer_hi": "सभी समाधान का वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does Required<Partial<T>> & Readonly<T> produce?",
    "question_hi": "Required<Partial<T>> & Readonly<T> क्या उत्पन्न करता है?",
    "options_en": ["Readonly<T>", "T", "Required<Readonly<T>>", "Partial<Readonly<T>>"],
    "options_hi": ["Readonly<T>", "T", "Required<Readonly<T>>", "Partial<Readonly<T>>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which utility type transforms 'firstName' to 'first_name' at type level?",
    "question_hi": "कौन सा यूटिलिटी टाइप 'firstName' को 'first_name' में टाइप स्तर पर बदलता है?",
    "options_en": ["Custom template literal type", "No built-in utility", "String manipulation types", "Need implementation"],
    "options_hi": ["कस्टम टेम्पलेट लिटरल टाइप", "कोई अंतर्निहित उपयोगिता नहीं", "स्ट्रिंग मैनिपुलेशन टाइप्स", "कार्यान्वयन की आवश्यकता"],
    "answer_en": "Need implementation",
    "answer_hi": "कार्यान्वयन की आवश्यकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What does Parameters<(x: number) => void> produce?",
    "question_hi": "Parameters<(x: number) => void> क्या उत्पन्न करता है?",
    "options_en": ["[number]", "[x: number]", "tuple with one number", "All correct"],
    "options_hi": ["[number]", "[x: number]", "एक संख्या के साथ टपल", "सभी सही"],
    "answer_en": "All correct",
    "answer_hi": "सभी सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "How to get the type of the second parameter of a function?",
    "question_hi": "फ़ंक्शन के दूसरे पैरामीटर का प्रकार कैसे प्राप्त करें?",
    "options_en": ["Parameters<T>[1]", "SecondParam<T> custom", "Indexed access type", "Parameters utility with index"],
    "options_hi": ["Parameters<T>[1]", "SecondParam<T> कस्टम", "इंडेक्स्ड एक्सेस टाइप", "इंडेक्स के साथ Parameters यूटिलिटी"],
    "answer_en": "Parameters<T>[1]",
    "answer_hi": "Parameters<T>[1]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What does Record<never, any> produce?",
    "question_hi": "Record<never, any> क्या उत्पन्न करता है?",
    "options_en": ["{}", "never", "any", "Record<never, any>"],
    "options_hi": ["{}", "never", "any", "Record<never, any>"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which utility type creates a type where all properties are possibly undefined?",
    "question_hi": "कौन सा यूटिलिटी टाइप एक ऐसा प्रकार बनाता है जहां सभी गुण संभवतः undefined हैं?",
    "options_en": ["Partial<T>", "Undefined<T> custom", "MakeUndefined<T>", "No direct built-in"],
    "options_hi": ["Partial<T>", "Undefined<T> कस्टम", "MakeUndefined<T>", "कोई प्रत्यक्ष अंतर्निहित नहीं"],
    "answer_en": "No direct built-in",
    "answer_hi": "कोई प्रत्यक्ष अंतर्निहित नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does Pick<T, Extract<keyof T, string>> produce?",
    "question_hi": "Pick<T, Extract<keyof T, string>> क्या उत्पन्न करता है?",
    "options_en": ["Properties with string keys", "String property subset", "Filters symbol keys", "All correct"],
    "options_hi": ["स्ट्रिंग कुंजियों वाले गुण", "स्ट्रिंग संपत्ति उपसमुच्चय", "प्रतीक कुंजियों को फ़िल्टर करता है", "सभी सही"],
    "answer_en": "All correct",
    "answer_hi": "सभी सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "How to create a type with only required properties from another type?",
    "question_hi": "किसी अन्य प्रकार से केवल आवश्यक गुणों वाला प्रकार कैसे बनाएं?",
    "options_en": ["Required<Pick<T, RequiredKeys<T>>>", "Custom utility needed", "Filter optional properties", "Complex type operation"],
    "options_hi": ["Required<Pick<T, RequiredKeys<T>>>", "कस्टम यूटिलिटी आवश्यक", "वैकल्पिक गुणों को फ़िल्टर करें", "जटिल प्रकार ऑपरेशन"],
    "answer_en": "Custom utility needed",
    "answer_hi": "कस्टम यूटिलिटी आवश्यक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does Awaited<PromiseLike<T>> produce?",
    "question_hi": "Awaited<PromiseLike<T>> क्या उत्पन्न करता है?",
    "options_en": ["T", "PromiseLike<T>", "Promise<T>", "any"],
    "options_hi": ["T", "PromiseLike<T>", "Promise<T>", "any"],
    "answer_en": "T",
    "answer_hi": "T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which utility type would extract enum values as a union type?",
    "question_hi": "कौन सा यूटिलिटी टाइप एनम मानों को संघ प्रकार के रूप में निकालेगा?",
    "options_en": ["typeof Enum", "keyof typeof Enum", "Enum[keyof Enum]", "Values<Enum> pattern"],
    "options_hi": ["typeof Enum", "keyof typeof Enum", "Enum[keyof Enum]", "Values<Enum> पैटर्न"],
    "answer_en": "Enum[keyof Enum]",
    "answer_hi": "Enum[keyof Enum]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does Readonly<Partial<T>> produce?",
    "question_hi": "Readonly<Partial<T>> क्या उत्पन्न करता है?",
    "options_en": ["Readonly type with optional properties", "Optional properties that are readonly", "Both describe it", "Partial<Readonly<T>>"],
    "options_hi": ["वैकल्पिक गुणों वाला Readonly प्रकार", "वैकल्पिक गुण जो केवल पढ़ने योग्य हैं", "दोनों इसका वर्णन करते हैं", "Partial<Readonly<T>>"],
    "answer_en": "Both describe it",
    "answer_hi": "दोनों इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "How to get the keys of an object type as a tuple type?",
    "question_hi": "किसी ऑब्जेक्ट टाइप की कुंजियों को टपल टाइप के रूप में कैसे प्राप्त करें?",
    "options_en": ["Custom utility type", "No built-in solution", "Template literal tricks", "Advanced type needed"],
    "options_hi": ["कस्टम यूटिलिटी टाइप", "कोई अंतर्निहित समाधान नहीं", "टेम्पलेट लिटरल ट्रिक्स", "उन्नत प्रकार आवश्यक"],
    "answer_en": "Advanced type needed",
    "answer_hi": "उन्नत प्रकार आवश्यक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does NonNullable<NonNullable<T>> produce?",
    "question_hi": "NonNullable<NonNullable<T>> क्या उत्पन्न करता है?",
    "options_en": ["NonNullable<T>", "T", "Removes null/undefined again", "Same as NonNullable<T>"],
    "options_hi": ["NonNullable<T>", "T", "फिर से null/undefined हटाता है", "NonNullable<T> के समान"],
    "answer_en": "Same as NonNullable<T>",
    "answer_hi": "NonNullable<T> के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which utility type creates a union of all possible property value types?",
    "question_hi": "कौन सा यूटिलिटी टाइप सभी संभावित संपत्ति मान प्रकारों का एक संघ बनाता है?",
    "options_en": ["T[keyof T]", "Values<T> pattern", "Indexed access with keyof", "All describe it"],
    "options_hi": ["T[keyof T]", "Values<T> पैटर्न", "keyof के साथ इंडेक्स्ड एक्सेस", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What does Record<string | number, T> represent?",
    "question_hi": "Record<string | number, T> क्या दर्शाता है?",
    "options_en": ["Object with string or number keys", "Mixed key dictionary", "Indexable by strings and numbers", "All correct"],
    "options_hi": ["स्ट्रिंग या संख्या कुंजियों वाली वस्तु", "मिश्रित कुंजी शब्दकोश", "स्ट्रिंग्स और संख्याओं द्वारा अनुक्रमणीय", "सभी सही"],
    "answer_en": "All correct",
    "answer_hi": "सभी सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "How to create a type with only methods (function properties) from another type?",
    "question_hi": "किसी अन्य प्रकार से केवल विधियों (फ़ंक्शन गुणों) वाला प्रकार कैसे बनाएं?",
    "options_en": ["Pick<T, Methods<T>> custom", "Filter by function types", "Complex type filtering", "No built-in utility"],
    "options_hi": ["Pick<T, Methods<T>> कस्टम", "फ़ंक्शन प्रकारों द्वारा फ़िल्टर करें", "जटिल प्रकार फ़िल्टरिंग", "कोई अंतर्निहित उपयोगिता नहीं"],
    "answer_en": "No built-in utility",
    "answer_hi": "कोई अंतर्निहित उपयोगिता नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does Capitalize<Uncapitalize<'Hello'>> produce?",
    "question_hi": "Capitalize<Uncapitalize<'Hello'>> क्या उत्पन्न करता है?",
    "options_en": ["'Hello'", "'hello'", "'HELLO'", "'hELLO'"],
    "options_hi": ["'Hello'", "'hello'", "'HELLO'", "'hELLO'"],
    "answer_en": "'Hello'",
    "answer_hi": "'Hello'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which utility type would make all properties required and readonly?",
    "question_hi": "कौन सा यूटिलिटी टाइप सभी गुणों को आवश्यक और केवल पढ़ने योग्य बनाएगा?",
    "options_en": ["Readonly<Required<T>>", "Required<Readonly<T>>", "Both work", "Same result"],
    "options_hi": ["Readonly<Required<T>>", "Required<Readonly<T>>", "दोनों काम करते हैं", "समान परिणाम"],
    "answer_en": "Both work",
    "answer_hi": "दोनों काम करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does Omit<T, keyof T> produce?",
    "question_hi": "Omit<T, keyof T> क्या उत्पन्न करता है?",
    "options_en": ["{}", "T", "never", "Partial<T>"],
    "options_hi": ["{}", "T", "never", "Partial<T>"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "How to create a type with properties that are either all readonly or all mutable?",
    "question_hi": "ऐसे गुणों वाला प्रकार कैसे बनाएं जो या तो सभी केवल पढ़ने योग्य हैं या सभी परिवर्तनशील हैं?",
    "options_en": ["Readonly<T> | T", "Union of readonly and mutable", "Conditional type", "All possible"],
    "options_hi": ["Readonly<T> | T", "केवल पढ़ने योग्य और परिवर्तनशील का संघ", "सशर्त प्रकार", "सभी संभव"],
    "answer_en": "All possible",
    "answer_hi": "सभी संभव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does Extract<keyof T, string> produce?",
    "question_hi": "Extract<keyof T, string> क्या उत्पन्न करता है?",
    "options_en": ["String keys of T", "Filter symbol keys", "String literal union", "All describe it"],
    "options_hi": ["T की स्ट्रिंग कुंजियाँ", "प्रतीक कुंजियों को फ़िल्टर करें", "स्ट्रिंग लिटरल संघ", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which utility type creates a type with all string properties from another type?",
    "question_hi": "कौन सा यूटिलिटी टाइप किसी अन्य प्रकार से सभी स्ट्रिंग गुणों वाला एक प्रकार बनाता है?",
    "options_en": ["Pick<T, Extract<keyof T, string>>", "StringProperties<T> custom", "Filter by string keys", "All possible"],
    "options_hi": ["Pick<T, Extract<keyof T, string>>", "StringProperties<T> कस्टम", "स्ट्रिंग कुंजियों द्वारा फ़िल्टर करें", "सभी संभव"],
    "answer_en": "All possible",
    "answer_hi": "सभी संभव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does Awaited<Awaited<Promise<T>>> produce?",
    "question_hi": "Awaited<Awaited<Promise<T>>> क्या उत्पन्न करता है?",
    "options_en": ["T", "Promise<T>", "Awaited<Promise<T>>", "Same as Awaited<Promise<T>>"],
    "options_hi": ["T", "Promise<T>", "Awaited<Promise<T>>", "Awaited<Promise<T>> के समान"],
    "answer_en": "Same as Awaited<Promise<T>>",
    "answer_hi": "Awaited<Promise<T>> के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "How to create a type that makes all properties nullable optional (T | null | undefined)?",
    "question_hi": "ऐसा प्रकार कैसे बनाएं जो सभी गुणों को नलबल वैकल्पिक (T | null | undefined) बनाता है?",
    "options_en": ["Partial<Nullable<T>> custom", "Complex utility needed", "No built-in solution", "Custom mapped type"],
    "options_hi": ["Partial<Nullable<T>> कस्टम", "जटिल उपयोगिता आवश्यक", "कोई अंतर्निहित समाधान नहीं", "कस्टम मैप्ड टाइप"],
    "answer_en": "Custom mapped type",
    "answer_hi": "कस्टम मैप्ड टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What does Pick<Readonly<T>, K> produce?",
    "question_hi": "Pick<Readonly<T>, K> क्या उत्पन्न करता है?",
    "options_en": ["Readonly subset of T", "Readonly<Pick<T, K>>", "Both same", "All correct"],
    "options_hi": ["T का Readonly उपसमुच्चय", "Readonly<Pick<T, K>>", "दोनों समान", "सभी सही"],
    "answer_en": "All correct",
    "answer_hi": "सभी सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which utility type would create a type with all properties except methods?",
    "question_hi": "कौन सा यूटिलिटी टाइप विधियों को छोड़कर सभी गुणों वाला एक प्रकार बनाएगा?",
    "options_en": ["Omit<T, MethodKeys<T>> custom", "Filter out function properties", "No built-in", "Complex type operation"],
    "options_hi": ["Omit<T, MethodKeys<T>> कस्टम", "फ़ंक्शन गुणों को बाहर फ़िल्टर करें", "कोई अंतर्निहित नहीं", "जटिल प्रकार ऑपरेशन"],
    "answer_en": "No built-in",
    "answer_hi": "कोई अंतर्निहित नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does Record<'a' | 'b', number> & {c: string} produce?",
    "question_hi": "Record<'a' | 'b', number> & {c: string} क्या उत्पन्न करता है?",
    "options_en": ["{a: number, b: number, c: string}", "Intersection type", "Combined object type", "All describe it"],
    "options_hi": ["{a: number, b: number, c: string}", "इंटरसेक्शन टाइप", "संयुक्त वस्तु प्रकार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "How to get the length of a tuple type as a number literal type?",
    "question_hi": "टपल टाइप की लंबाई को संख्या लिटरल टाइप के रूप में कैसे प्राप्त करें?",
    "options_en": ["T['length']", "Tuple length property", "Indexed access", "All work"],
    "options_hi": ["T['length']", "टपल लंबाई गुण", "इंडेक्स्ड एक्सेस", "सभी काम करते हैं"],
    "answer_en": "All work",
    "answer_hi": "सभी काम करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which utility type creates the opposite of Partial (makes all properties required)?",
    "question_hi": "कौन सा यूटिलिटी टाइप Partial का विपरीत बनाता है (सभी गुणों को आवश्यक बनाता है)?",
    "options_en": ["Required<T>", "NonNullable<T>", "Complete<T>", "Full<T>"],
    "options_hi": ["Required<T>", "NonNullable<T>", "Complete<T>", "Full<T>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
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