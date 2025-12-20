const questions= [
  {
    "num": 1,
    "question_en": "What is the purpose of TypeScript utility types?",
    "question_hi": "TypeScript यूटिलिटी टाइप्स का उद्देश्य क्या है?",
    "options_en": ["To transform existing types", "To create common type transformations", "To make type manipulation easier", "All of the above"],
    "options_hi": ["मौजूदा टाइप्स को ट्रांसफॉर्म करने के लिए", "सामान्य टाइप ट्रांसफॉर्मेशन बनाने के लिए", "टाइप मैनिपुलेशन आसान बनाने के लिए", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 2,
    "question_en": "What does Partial<T> do?",
    "question_hi": "Partial<T> क्या करता है?",
    "options_en": ["Makes all properties of T optional", "Creates a type with some properties optional", "Removes required properties", "Makes properties partial"],
    "options_hi": ["T की सभी प्रॉपर्टीज़ को वैकल्पिक बनाता है", "कुछ प्रॉपर्टीज़ वैकल्पिक वाला टाइप बनाता है", "आवश्यक प्रॉपर्टीज़ हटाता है", "प्रॉपर्टीज़ को आंशिक बनाता है"],
    "answer_en": "Makes all properties of T optional",
    "answer_hi": "T की सभी प्रॉपर्टीज़ को वैकल्पिक बनाता है"
  },
  {
    "num": 3,
    "question_en": "What is the result of Partial<{name: string, age: number}>?",
    "question_hi": "Partial<{name: string, age: number}> का परिणाम क्या है?",
    "options_en": ["{name?: string, age?: number}", "{name: string?, age: number?}", "{name: string | undefined, age: number | undefined}", "All properties become optional"],
    "options_hi": ["{name?: string, age?: number}", "{name: string?, age: number?}", "{name: string | undefined, age: number | undefined}", "सभी प्रॉपर्टीज़ वैकल्पिक बन जाती हैं"],
    "answer_en": "{name?: string, age?: number}",
    "answer_hi": "{name?: string, age?: number}"
  },
  {
    "num": 4,
    "question_en": "What does Required<T> do?",
    "question_hi": "Required<T> क्या करता है?",
    "options_en": ["Makes all properties of T required", "Removes optional properties", "Ensures all properties are mandatory", "All of the above"],
    "options_hi": ["T की सभी प्रॉपर्टीज़ को आवश्यक बनाता है", "वैकल्पिक प्रॉपर्टीज़ हटाता है", "सुनिश्चित करता है कि सभी प्रॉपर्टीज़ अनिवार्य हैं", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 5,
    "question_en": "What is the result of Required<{name?: string, age?: number}>?",
    "question_hi": "Required<{name?: string, age?: number}> का परिणाम क्या है?",
    "options_en": ["{name: string, age: number}", "{name: string, age: number} with no question marks", "Removes the ? from properties", "All of the above"],
    "options_hi": ["{name: string, age: number}", "{name: string, age: number} बिना प्रश्न चिह्न के", "प्रॉपर्टीज़ से ? हटाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 6,
    "question_en": "What does Readonly<T> do?",
    "question_hi": "Readonly<T> क्या करता है?",
    "options_en": ["Makes all properties of T readonly", "Prevents property reassignment", "Creates immutable type", "All of the above"],
    "options_hi": ["T की सभी प्रॉपर्टीज़ को रीडओनली बनाता है", "प्रॉपर्टी रीअसाइनमेंट रोकता है", "इम्यूटेबल टाइप बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 7,
    "question_en": "What is the difference between 'const' and Readonly<T>?",
    "question_hi": "'const' और Readonly<T> में क्या अंतर है?",
    "options_en": ["const is for variables, Readonly<T> is for types", "const prevents reassignment, Readonly prevents property modification", "They are completely different", "Both A and B"],
    "options_hi": ["const वेरिएबल्स के लिए है, Readonly<T> टाइप्स के लिए है", "const रीअसाइनमेंट रोकता है, Readonly प्रॉपर्टी मॉडिफिकेशन रोकता है", "वे पूरी तरह अलग हैं", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों"
  },
  {
    "num": 8,
    "question_en": "What does Record<K, T> do?",
    "question_hi": "Record<K, T> क्या करता है?",
    "options_en": ["Creates an object type with keys K and values T", "Maps keys to types", "Creates a dictionary type", "All of the above"],
    "options_hi": ["K keys और T values वाला ऑब्जेक्ट टाइप बनाता है", "keys को टाइप्स में मैप करता है", "डिक्शनरी टाइप बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 9,
    "question_en": "What is the result of Record<'name' | 'age', string>?",
    "question_hi": "Record<'name' | 'age', string> का परिणाम क्या है?",
    "options_en": ["{name: string, age: string}", "An object with name and age as string properties", "Both A and B", "A map from name/age to string"],
    "options_hi": ["{name: string, age: string}", "name और age स्ट्रिंग प्रॉपर्टीज़ वाला ऑब्जेक्ट", "A और B दोनों", "name/age से स्ट्रिंग का मैप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों"
  },
  {
    "num": 10,
    "question_en": "What does Pick<T, K> do?",
    "question_hi": "Pick<T, K> क्या करता है?",
    "options_en": ["Selects a subset of properties from T", "Picks properties specified by K", "Creates a new type with only selected properties", "All of the above"],
    "options_hi": ["T से प्रॉपर्टीज़ का एक सबसेट सेलेक्ट करता है", "K द्वारा निर्दिष्ट प्रॉपर्टीज़ पिक करता है", "केवल चुनी हुई प्रॉपर्टीज़ वाला नया टाइप बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 11,
    "question_en": "What is the result of Pick<{name: string, age: number, email: string}, 'name' | 'email'>?",
    "question_hi": "Pick<{name: string, age: number, email: string}, 'name' | 'email'> का परिणाम क्या है?",
    "options_en": ["{name: string, email: string}", "Only name and email properties", "A type with name and string, email and string", "All of the above"],
    "options_hi": ["{name: string, email: string}", "केवल name और email प्रॉपर्टीज़", "name और स्ट्रिंग, email और स्ट्रिंग वाला टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 12,
    "question_en": "What does Omit<T, K> do?",
    "question_hi": "Omit<T, K> क्या करता है?",
    "options_en": ["Removes properties specified by K from T", "Omits certain properties", "Creates a type without specified properties", "All of the above"],
    "options_hi": ["T से K द्वारा निर्दिष्ट प्रॉपर्टीज़ हटाता है", "कुछ प्रॉपर्टीज़ ओमिट करता है", "निर्दिष्ट प्रॉपर्टीज़ के बिना टाइप बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 13,
    "question_en": "What is the relationship between Pick and Omit?",
    "question_hi": "Pick और Omit के बीच क्या संबंध है?",
    "options_en": ["They are complementary", "Omit is opposite of Pick", "Pick selects, Omit excludes", "All of the above"],
    "options_hi": ["वे पूरक हैं", "Omit, Pick का विपरीत है", "Pick सेलेक्ट करता है, Omit एक्सक्लूड करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 14,
    "question_en": "What does Exclude<T, U> do?",
    "question_hi": "Exclude<T, U> क्या करता है?",
    "options_en": ["Excludes from T those types that are assignable to U", "Removes U from union T", "Filters out matching types", "All of the above"],
    "options_hi": ["T से उन टाइप्स को एक्सक्लूड करता है जो U को असाइन किए जा सकते हैं", "यूनियन T से U हटाता है", "मिलान करने वाले टाइप्स फ़िल्टर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 15,
    "question_en": "What is the result of Exclude<'a' | 'b' | 'c', 'a'>?",
    "question_hi": "Exclude<'a' | 'b' | 'c', 'a'> का परिणाम क्या है?",
    "options_en": ["'b' | 'c'", "Only b and c", "Removes 'a' from the union", "All of the above"],
    "options_hi": ["'b' | 'c'", "केवल b और c", "यूनियन से 'a' हटाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 16,
    "question_en": "What does Extract<T, U> do?",
    "question_hi": "Extract<T, U> क्या करता है?",
    "options_en": ["Extracts from T those types that are assignable to U", "Keeps only matching types", "Filters in matching types", "All of the above"],
    "options_hi": ["T से उन टाइप्स को एक्सट्रैक्ट करता है जो U को असाइन किए जा सकते हैं", "केवल मिलान करने वाले टाइप्स रखता है", "मिलान करने वाले टाइप्स फ़िल्टर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 17,
    "question_en": "What is the result of Extract<'a' | 'b' | 'c', 'a' | 'd'>?",
    "question_hi": "Extract<'a' | 'b' | 'c', 'a' | 'd'> का परिणाम क्या है?",
    "options_en": ["'a'", "Only 'a'", "Extracts 'a' from the union", "All of the above"],
    "options_hi": ["'a'", "केवल 'a'", "यूनियन से 'a' एक्सट्रैक्ट करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 18,
    "question_en": "What does NonNullable<T> do?",
    "question_hi": "NonNullable<T> क्या करता है?",
    "options_en": ["Removes null and undefined from T", "Excludes nullish types", "Creates a non-nullable type", "All of the above"],
    "options_hi": ["T से null और undefined हटाता है", "नलिश टाइप्स एक्सक्लूड करता है", "नॉन-नलबल टाइप बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 19,
    "question_en": "What is the result of NonNullable<string | null | undefined>?",
    "question_hi": "NonNullable<string | null | undefined> का परिणाम क्या है?",
    "options_en": ["string", "Only string remains", "Removes null and undefined", "All of the above"],
    "options_hi": ["string", "केवल string रहता है", "null और undefined हटाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 20,
    "question_en": "What does Parameters<T> do?",
    "question_hi": "Parameters<T> क्या करता है?",
    "options_en": ["Extracts parameter types from a function type", "Gets tuple of function parameters", "Captures function signature parameters", "All of the above"],
    "options_hi": ["फंक्शन टाइप से पैरामीटर टाइप्स एक्सट्रैक्ट करता है", "फंक्शन पैरामीटर्स का ट्यूपल प्राप्त करता है", "फंक्शन सिग्नेचर पैरामीटर्स कैप्चर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 21,
    "question_en": "What is the result of Parameters<(x: string, y: number) => void>?",
    "question_hi": "Parameters<(x: string, y: number) => void> का परिणाम क्या है?",
    "options_en": ["[string, number]", "Tuple of string and number", "Array with string and number types", "All of the above"],
    "options_hi": ["[string, number]", "string और number का ट्यूपल", "स्ट्रिंग और नंबर टाइप्स वाली ऐरे", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 22,
    "question_en": "What does ReturnType<T> do?",
    "question_hi": "ReturnType<T> क्या करता है?",
    "options_en": ["Extracts return type from a function type", "Gets the type that function returns", "Captures function return type", "All of the above"],
    "options_hi": ["फंक्शन टाइप से रिटर्न टाइप एक्सट्रैक्ट करता है", "वह टाइप प्राप्त करता है जो फंक्शन रिटर्न करता है", "फंक्शन रिटर्न टाइप कैप्चर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 23,
    "question_en": "What is the result of ReturnType<() => string>?",
    "question_hi": "ReturnType<() => string> का परिणाम क्या है?",
    "options_en": ["string", "The return type string", "Extracts string type", "All of the above"],
    "options_hi": ["string", "रिटर्न टाइप string", "स्ट्रिंग टाइप एक्सट्रैक्ट करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 24,
    "question_en": "What does ConstructorParameters<T> do?",
    "question_hi": "ConstructorParameters<T> क्या करता है?",
    "options_en": ["Extracts parameter types from a constructor type", "Gets constructor parameters", "Captures class constructor signature", "All of the above"],
    "options_hi": ["कंस्ट्रक्टर टाइप से पैरामीटर टाइप्स एक्सट्रैक्ट करता है", "कंस्ट्रक्टर पैरामीटर्स प्राप्त करता है", "क्लास कंस्ट्रक्टर सिग्नेचर कैप्चर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 25,
    "question_en": "What does InstanceType<T> do?",
    "question_hi": "InstanceType<T> क्या करता है?",
    "options_en": ["Extracts instance type from a constructor type", "Gets the type of class instances", "Captures class instance type", "All of the above"],
    "options_hi": ["कंस्ट्रक्टर टाइप से इंस्टेंस टाइप एक्सट्रैक्ट करता है", "क्लास इंस्टेंसेज का टाइप प्राप्त करता है", "क्लास इंस्टेंस टाइप कैप्चर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 26,
    "question_en": "What is the result of InstanceType<typeof Date>?",
    "question_hi": "InstanceType<typeof Date> का परिणाम क्या है?",
    "options_en": ["Date", "The Date instance type", "Type of Date objects", "All of the above"],
    "options_hi": ["Date", "Date इंस्टेंस टाइप", "Date ऑब्जेक्ट्स का टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 27,
    "question_en": "What does ThisParameterType<T> do?",
    "question_hi": "ThisParameterType<T> क्या करता है?",
    "options_en": ["Extracts the type of 'this' parameter", "Gets this parameter type from function", "Captures this context type", "All of the above"],
    "options_hi": ["'this' पैरामीटर का टाइप एक्सट्रैक्ट करता है", "फंक्शन से this पैरामीटर टाइप प्राप्त करता है", "this कॉन्टेक्स्ट टाइप कैप्चर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 28,
    "question_en": "What does OmitThisParameter<T> do?",
    "question_hi": "OmitThisParameter<T> क्या करता है?",
    "options_en": ["Removes 'this' parameter from function type", "Omits this context", "Creates function without this parameter", "All of the above"],
    "options_hi": ["फंक्शन टाइप से 'this' पैरामीटर हटाता है", "this कॉन्टेक्स्ट ओमिट करता है", "this पैरामीटर के बिना फंक्शन बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 29,
    "question_en": "What does ThisType<T> do?",
    "question_hi": "ThisType<T> क्या करता है?",
    "options_en": ["Marks this context type", "Specifies type of 'this' in object literal", "Provides this type hint", "All of the above"],
    "options_hi": ["this कॉन्टेक्स्ट टाइप मार्क करता है", "ऑब्जेक्ट लिटरल में 'this' का टाइप निर्दिष्ट करता है", "this टाइप हिंट प्रदान करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 30,
    "question_en": "What is Uppercase<StringType> used for?",
    "question_hi": "Uppercase<StringType> किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Transforms string literal to uppercase", "Converts string type to uppercase", "Creates uppercase string types", "All of the above"],
    "options_hi": ["स्ट्रिंग लिटरल को अपरकेस में बदलता है", "स्ट्रिंग टाइप को अपरकेस में कन्वर्ट करता है", "अपरकेस स्ट्रिंग टाइप्स बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 31,
    "question_en": "What is the result of Uppercase<'hello'>?",
    "question_hi": "Uppercase<'hello'> का परिणाम क्या है?",
    "options_en": ["'HELLO'", "Uppercase version", "Capitalized string type", "All of the above"],
    "options_hi": ["'HELLO'", "अपरकेस वर्जन", "कैपिटलाइज्ड स्ट्रिंग टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 32,
    "question_en": "What is Lowercase<StringType> used for?",
    "question_hi": "Lowercase<StringType> किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Transforms string literal to lowercase", "Converts string type to lowercase", "Creates lowercase string types", "All of the above"],
    "options_hi": ["स्ट्रिंग लिटरल को लोअरकेस में बदलता है", "स्ट्रिंग टाइप को लोअरकेस में कन्वर्ट करता है", "लोअरकेस स्ट्रिंग टाइप्स बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 33,
    "question_en": "What is Capitalize<StringType> used for?",
    "question_hi": "Capitalize<StringType> किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Capitalizes first letter of string literal", "Makes first character uppercase", "Transforms to capitalized form", "All of the above"],
    "options_hi": ["स्ट्रिंग लिटरल के पहले अक्षर को कैपिटलाइज़ करता है", "पहला कैरेक्टर अपरकेस बनाता है", "कैपिटलाइज्ड फॉर्म में ट्रांसफॉर्म करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 34,
    "question_en": "What is Uncapitalize<StringType> used for?",
    "question_hi": "Uncapitalize<StringType> किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Uncapitalizes first letter of string literal", "Makes first character lowercase", "Transforms to uncapitalized form", "All of the above"],
    "options_hi": ["स्ट्रिंग लिटरल के पहले अक्षर को अनकैपिटलाइज़ करता है", "पहला कैरेक्टर लोअरकेस बनाता है", "अनकैपिटलाइज्ड फॉर्म में ट्रांसफॉर्म करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 35,
    "question_en": "How can you create a type with all properties mutable from a readonly type?",
    "question_hi": "रीडओनली टाइप से सभी प्रॉपर्टीज़ म्यूटेबल वाला टाइप कैसे बना सकते हैं?",
    "options_en": ["Use mutable type mapping", "There's no direct utility, but you can create one", "-readonly modifier", "All of the above"],
    "options_hi": ["म्यूटेबल टाइप मैपिंग प्रयोग करें", "कोई सीधी यूटिलिटी नहीं है, लेकिन आप एक बना सकते हैं", "-readonly मॉडिफायर", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 36,
    "question_en": "What utility would you use to make all properties nullable?",
    "question_hi": "सभी प्रॉपर्टीज़ को नलबल बनाने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["There's no built-in utility", "Create custom type: { [K in keyof T]: T[K] | null }", "Use Partial and add null", "All of the above"],
    "options_hi": ["कोई बिल्ट-इन यूटिलिटी नहीं है", "कस्टम टाइप बनाएँ: { [K in keyof T]: T[K] | null }", "Partial प्रयोग करें और null जोड़ें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 37,
    "question_en": "How can you create a utility to make all properties readonly and optional?",
    "question_hi": "सभी प्रॉपर्टीज़ को रीडओनली और वैकल्पिक बनाने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Partial<Readonly<T>>", "Readonly<Partial<T>>", "Both work", "They are equivalent"],
    "options_hi": ["Partial<Readonly<T>>", "Readonly<Partial<T>>", "दोनों काम करते हैं", "वे समतुल्य हैं"],
    "answer_en": "Both work",
    "answer_hi": "दोनों काम करते हैं"
  },
  {
    "num": 38,
    "question_en": "What is the difference between Pick and Extract?",
    "question_hi": "Pick और Extract में क्या अंतर है?",
    "options_en": ["Pick works on object properties, Extract works on union types", "Different purposes", "Pick selects properties, Extract filters union", "All of the above"],
    "options_hi": ["Pick ऑब्जेक्ट प्रॉपर्टीज़ पर काम करता है, Extract यूनियन टाइप्स पर काम करता है", "अलग-अलग उद्देश्य", "Pick प्रॉपर्टीज़ सेलेक्ट करता है, Extract यूनियन फ़िल्टर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 39,
    "question_en": "What is the difference between Omit and Exclude?",
    "question_hi": "Omit और Exclude में क्या अंतर है?",
    "options_en": ["Omit works on object properties, Exclude works on union types", "Different domains", "Omit removes properties, Exclude removes union members", "All of the above"],
    "options_hi": ["Omit ऑब्जेक्ट प्रॉपर्टीज़ पर काम करता है, Exclude यूनियन टाइप्स पर काम करता है", "अलग-अलग डोमेन", "Omit प्रॉपर्टीज़ हटाता है, Exclude यूनियन मेंबर्स हटाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 40,
    "question_en": "Can you nest utility types?",
    "question_hi": "क्या आप यूटिलिटी टाइप्स को नेस्ट कर सकते हैं?",
    "options_en": ["Yes, utility types can be composed", "You can combine them", "e.g., Partial<Pick<T, K>>", "All of the above"],
    "options_hi": ["हाँ, यूटिलिटी टाइप्स कंपोज़ किए जा सकते हैं", "आप उन्हें कॉम्बाइन कर सकते हैं", "जैसे, Partial<Pick<T, K>>", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 41,
    "question_en": "What utility would you use to get all property keys that are optional?",
    "question_hi": "सभी वैकल्पिक प्रॉपर्टी keys प्राप्त करने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["There's no built-in utility", "Create custom type using conditional types", "Filter keys where property is optional", "All of the above"],
    "options_hi": ["कोई बिल्ट-इन यूटिलिटी नहीं है", "कंडीशनल टाइप्स प्रयोग करके कस्टम टाइप बनाएँ", "उन keys को फ़िल्टर करें जहाँ प्रॉपर्टी वैकल्पिक है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 42,
    "question_en": "What does Awaited<T> do?",
    "question_hi": "Awaited<T> क्या करता है?",
    "options_en": ["Unwraps Promise type", "Gets type that Promise resolves to", "Handles nested promises", "All of the above"],
    "options_hi": ["Promise टाइप को अनरैप करता है", "वह टाइप प्राप्त करता है जिसमें Promise रिजॉल्व होता है", "नेस्टेड प्रॉमिसेज़ हैंडल करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 43,
    "question_en": "What is the result of Awaited<Promise<string>>?",
    "question_hi": "Awaited<Promise<string>> का परिणाम क्या है?",
    "options_en": ["string", "Unwraps to string", "Gets the resolved type", "All of the above"],
    "options_hi": ["string", "string में अनरैप करता है", "रिजॉल्व्ड टाइप प्राप्त करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 44,
    "question_en": "What is the result of Awaited<Promise<Promise<string>>>?",
    "question_hi": "Awaited<Promise<Promise<string>>> का परिणाम क्या है?",
    "options_en": ["string", "Handles nested promises", "Unwraps recursively", "All of the above"],
    "options_hi": ["string", "नेस्टेड प्रॉमिसेज़ हैंडल करता है", "रिकर्सिवली अनरैप करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 45,
    "question_en": "How can you create a utility to make all properties required and readonly?",
    "question_hi": "सभी प्रॉपर्टीज़ को आवश्यक और रीडओनली बनाने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Readonly<Required<T>>", "Required<Readonly<T>>", "Both work", "They produce same result"],
    "options_hi": ["Readonly<Required<T>>", "Required<Readonly<T>>", "दोनों काम करते हैं", "वे समान परिणाम देते हैं"],
    "answer_en": "Both work",
    "answer_hi": "दोनों काम करते हैं"
  },
  {
    "num": 46,
    "question_en": "What utility would you use to get the keys of an object type as a union?",
    "question_hi": "ऑब्जेक्ट टाइप की keys को यूनियन के रूप में प्राप्त करने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["keyof operator", "This is built-in, not a utility type", "Gets keys as union", "All of the above"],
    "options_hi": ["keyof ऑपरेटर", "यह बिल्ट-इन है, यूटिलिटी टाइप नहीं", "keys को यूनियन के रूप में प्राप्त करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 47,
    "question_en": "How can you create a type that excludes certain properties by value type?",
    "question_hi": "वैल्यू टाइप द्वारा कुछ प्रॉपर्टीज़ को एक्सक्लूड करने वाला टाइप कैसे बना सकते हैं?",
    "options_en": ["Use conditional types with Exclude", "Filter properties by type", "Create custom utility", "All of the above"],
    "options_hi": ["Exclude के साथ कंडीशनल टाइप्स प्रयोग करें", "टाइप द्वारा प्रॉपर्टीज़ फ़िल्टर करें", "कस्टम यूटिलिटी बनाएँ", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 48,
    "question_en": "What does ReadonlyArray<T> do?",
    "question_hi": "ReadonlyArray<T> क्या करता है?",
    "options_en": ["Creates readonly array type", "Array that can't be modified", "Immutable array type", "All of the above"],
    "options_hi": ["रीडओनली ऐरे टाइप बनाता है", "ऐरे जिसे मॉडिफाई नहीं किया जा सकता", "इम्यूटेबल ऐरे टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 49,
    "question_en": "How is ReadonlyArray different from readonly T[]?",
    "question_hi": "ReadonlyArray, readonly T[] से कैसे अलग है?",
    "options_en": ["They are equivalent", "Same meaning, different syntax", "Both create readonly arrays", "All of the above"],
    "options_hi": ["वे समतुल्य हैं", "समान अर्थ, अलग सिंटैक्स", "दोनों रीडओनली ऐरे बनाते हैं", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 50,
    "question_en": "What utility would you use to create a type with specific property value types?",
    "question_hi": "विशिष्ट प्रॉपर्टी वैल्यू टाइप्स वाला टाइप बनाने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["Record<K, T>", "Maps keys to specific type", "Creates object type with uniform values", "All of the above"],
    "options_hi": ["Record<K, T>", "keys को विशिष्ट टाइप में मैप करता है", "यूनिफ़ॉर्म वैल्यूज़ वाला ऑब्जेक्ट टाइप बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 51,
    "question_en": "How can you make a single property optional in a type?",
    "question_hi": "एक टाइप में एकल प्रॉपर्टी को वैकल्पिक कैसे बना सकते हैं?",
    "options_en": ["Use intersection with Partial", "Omit then add optional", "Create custom type", "All of the above"],
    "options_hi": ["Partial के साथ इंटरसेक्शन प्रयोग करें", "ओमिट फिर वैकल्पिक जोड़ें", "कस्टम टाइप बनाएँ", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 52,
    "question_en": "How can you make a single property readonly in a type?",
    "question_hi": "एक टाइप में एकल प्रॉपर्टी को रीडओनली कैसे बना सकते हैं?",
    "options_en": ["Use intersection with Readonly", "Create mapped type", "Custom type transformation", "All of the above"],
    "options_hi": ["Readonly के साथ इंटरसेक्शन प्रयोग करें", "मैप्ड टाइप बनाएँ", "कस्टम टाइप ट्रांसफॉर्मेशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 53,
    "question_en": "What utility would you use to merge two object types?",
    "question_hi": "दो ऑब्जेक्ट टाइप्स को मर्ज करने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["Intersection type (&)", "Combine with &", "TypeA & TypeB", "All of the above"],
    "options_hi": ["इंटरसेक्शन टाइप (&)", "& के साथ कॉम्बाइन करें", "TypeA & TypeB", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 54,
    "question_en": "How can you override properties in an intersection type?",
    "question_hi": "इंटरसेक्शन टाइप में प्रॉपर्टीज़ को ओवरराइड कैसे कर सकते हैं?",
    "options_en": ["Later types override earlier ones", "Order matters in intersections", "Last definition wins", "All of the above"],
    "options_hi": ["बाद के टाइप्स पहले वाले को ओवरराइड करते हैं", "इंटरसेक्शन्स में ऑर्डर मायने रखता है", "अंतिम डेफिनिशन जीतती है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 55,
    "question_en": "What does the 'satisfies' operator have to do with utility types?",
    "question_hi": "'satisfies' ऑपरेटर का यूटिलिटी टाइप्स से क्या संबंध है?",
    "options_en": ["Helps validate types work with utilities", "Checks type satisfies constraints", "Useful with complex utility compositions", "All of the above"],
    "options_hi": ["यूटिलिटीज़ के साथ टाइप्स काम करते हैं यह वैलिडेट करने में मदद करता है", "चेक करता है कि टाइप कंस्ट्रेंट्स को संतुष्ट करता है", "कॉम्प्लेक्स यूटिलिटी कंपोज़िशन्स के साथ उपयोगी", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 56,
    "question_en": "Can you create recursive utility types?",
    "question_hi": "क्या आप रिकर्सिव यूटिलिटी टाइप्स बना सकते हैं?",
    "options_en": ["Yes, with care", "TypeScript supports recursive types", "Use with type aliases", "All of the above"],
    "options_hi": ["हाँ, सावधानी से", "TypeScript रिकर्सिव टाइप्स सपोर्ट करता है", "टाइप अलियासेस के साथ प्रयोग करें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 57,
    "question_en": "What utility would you use to get the type of array elements?",
    "question_hi": "ऐरे एलिमेंट्स का टाइप प्राप्त करने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["T[number] for array type T", "Indexed access type", "Gets element type", "All of the above"],
    "options_hi": ["ऐरे टाइप T के लिए T[number]", "इंडेक्स्ड एक्सेस टाइप", "एलिमेंट टाइप प्राप्त करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 58,
    "question_en": "How can you create a utility to make all properties writable from readonly?",
    "question_hi": "रीडओनली से सभी प्रॉपर्टीज़ राइटेबल बनाने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Create mapped type: { -readonly [K in keyof T]: T[K] }", "Remove readonly modifier", "Use -readonly mapping", "All of the above"],
    "options_hi": ["मैप्ड टाइप बनाएँ: { -readonly [K in keyof T]: T[K] }", "readonly मॉडिफायर हटाएँ", "-readonly मैपिंग प्रयोग करें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 59,
    "question_en": "What utility would you use to require only some properties?",
    "question_hi": "केवल कुछ प्रॉपर्टीज़ को आवश्यक बनाने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["Pick then Required", "Required<Pick<T, K>>", "Make selected properties required", "All of the above"],
    "options_hi": ["Pick फिर Required", "Required<Pick<T, K>>", "चुनी हुई प्रॉपर्टीज़ को आवश्यक बनाएँ", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 60,
    "question_en": "How can you create a utility to make all properties non-optional?",
    "question_hi": "सभी प्रॉपर्टीज़ को नॉन-ऑप्शनल बनाने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Required<T>", "Removes ? modifier", "Makes all properties mandatory", "All of the above"],
    "options_hi": ["Required<T>", "? मॉडिफायर हटाता है", "सभी प्रॉपर्टीज़ को अनिवार्य बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 61,
    "question_en": "What is the performance impact of complex utility types?",
    "question_hi": "कॉम्प्लेक्स यूटिलिटी टाइप्स का परफॉर्मेंस प्रभाव क्या है?",
    "options_en": ["Compile-time only", "No runtime impact", "May increase compile time", "All of the above"],
    "options_hi": ["कंपाइल-टाइम केवल", "कोई रनटाइम प्रभाव नहीं", "कंपाइल टाइम बढ़ा सकता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 62,
    "question_en": "Can utility types be used with conditional types?",
    "question_hi": "क्या यूटिलिटी टाइप्स को कंडीशनल टाइप्स के साथ प्रयोग किया जा सकता है?",
    "options_en": ["Yes, they compose well", "Utilities can be used in conditions", "Create powerful type transformations", "All of the above"],
    "options_hi": ["हाँ, वे अच्छी तरह कंपोज़ होते हैं", "यूटिलिटीज़ कंडीशन्स में प्रयोग की जा सकती हैं", "शक्तिशाली टाइप ट्रांसफॉर्मेशन बना सकते हैं", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 63,
    "question_en": "What utility would you use to extract promise type from async function?",
    "question_hi": "एसिंक फंक्शन से Promise टाइप एक्सट्रैक्ट करने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["ReturnType then Awaited", "Awaited<ReturnType<T>>", "Unwrap async return type", "All of the above"],
    "options_hi": ["ReturnType फिर Awaited", "Awaited<ReturnType<T>>", "एसिंक रिटर्न टाइप अनरैप करें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 64,
    "question_en": "How can you create a utility to add a property to a type?",
    "question_hi": "एक टाइप में प्रॉपर्टी जोड़ने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Use intersection: T & { newProp: Type }", "Extend with &", "Merge types", "All of the above"],
    "options_hi": ["इंटरसेक्शन प्रयोग करें: T & { newProp: Type }", "& के साथ एक्सटेंड करें", "टाइप्स मर्ज करें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 65,
    "question_en": "What utility would you use to remove null/undefined from all properties?",
    "question_hi": "सभी प्रॉपर्टीज़ से null/undefined हटाने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["Create mapped type with NonNullable", "{ [K in keyof T]: NonNullable<T[K]> }", "Custom utility", "All of the above"],
    "options_hi": ["NonNullable के साथ मैप्ड टाइप बनाएँ", "{ [K in keyof T]: NonNullable<T[K]> }", "कस्टम यूटिलिटी", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 66,
    "question_en": "How can you create a utility to make properties mutable from immutable?",
    "question_hi": "इम्यूटेबल से प्रॉपर्टीज़ म्यूटेबल बनाने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Mapped type with -readonly", "Remove readonly modifier", "{ -readonly [K in keyof T]: T[K] }", "All of the above"],
    "options_hi": ["-readonly के साथ मैप्ड टाइप", "readonly मॉडिफायर हटाएँ", "{ -readonly [K in keyof T]: T[K] }", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 67,
    "question_en": "What does the 'as' clause do in mapped types?",
    "question_hi": "मैप्ड टाइप्स में 'as' क्लॉज क्या करता है?",
    "options_en": ["Transforms key names", "Remaps keys", "Key transformation", "All of the above"],
    "options_hi": ["key नामों को ट्रांसफॉर्म करता है", "keys को रीमैप करता है", "key ट्रांसफॉर्मेशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 68,
    "question_en": "How can you create a utility to get all optional keys?",
    "question_hi": "सभी वैकल्पिक keys प्राप्त करने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Use conditional types", "Filter keys where property is optional", "Custom type: { [K in keyof T]: undefined extends T[K] ? K : never }[keyof T]", "All of the above"],
    "options_hi": ["कंडीशनल टाइप्स प्रयोग करें", "उन keys को फ़िल्टर करें जहाँ प्रॉपर्टी वैकल्पिक है", "कस्टम टाइप: { [K in keyof T]: undefined extends T[K] ? K : never }[keyof T]", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 69,
    "question_en": "How can you create a utility to get all required keys?",
    "question_hi": "सभी आवश्यक keys प्राप्त करने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Complement of optional keys", "Filter keys where property is not optional", "Custom type", "All of the above"],
    "options_hi": ["वैकल्पिक keys का पूरक", "उन keys को फ़िल्टर करें जहाँ प्रॉपर्टी वैकल्पिक नहीं है", "कस्टम टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 70,
    "question_en": "What utility would you use to create a type from object values?",
    "question_hi": "ऑब्जेक्ट वैल्यूज़ से टाइप बनाने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["T[keyof T]", "Indexed access", "Union of all value types", "All of the above"],
    "options_hi": ["T[keyof T]", "इंडेक्स्ड एक्सेस", "सभी वैल्यू टाइप्स का यूनियन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 71,
    "question_en": "How can you create a utility to make all properties nullable and optional?",
    "question_hi": "सभी प्रॉपर्टीज़ को नलबल और वैकल्पिक बनाने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Partial<{ [K in keyof T]: T[K] | null }>", "Make optional then add null", "Custom transformation", "All of the above"],
    "options_hi": ["Partial<{ [K in keyof T]: T[K] | null }>", "वैकल्पिक बनाएँ फिर null जोड़ें", "कस्टम ट्रांसफॉर्मेशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 72,
    "question_en": "What is template literal types with utility types?",
    "question_hi": "यूटिलिटी टाइप्स के साथ टेम्पलेट लिटरल टाइप्स क्या हैं?",
    "options_en": ["Can combine with string utilities", "Uppercase, Lowercase with templates", "Powerful string type transformations", "All of the above"],
    "options_hi": ["स्ट्रिंग यूटिलिटीज़ के साथ कॉम्बाइन किया जा सकता है", "टेम्पलेट्स के साथ Uppercase, Lowercase", "शक्तिशाली स्ट्रिंग टाइप ट्रांसफॉर्मेशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 73,
    "question_en": "How can you create a utility to deep readonly?",
    "question_hi": "डीप रीडओनली के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Recursive mapped type", "Handle nested objects", "Custom DeepReadonly type", "All of the above"],
    "options_hi": ["रिकर्सिव मैप्ड टाइप", "नेस्टेड ऑब्जेक्ट्स हैंडल करें", "कस्टम DeepReadonly टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 74,
    "question_en": "How can you create a utility to deep partial?",
    "question_hi": "डीप पार्शियल के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Recursive mapped type", "Make nested properties optional", "Custom DeepPartial type", "All of the above"],
    "options_hi": ["रिकर्सिव मैप्ड टाइप", "नेस्टेड प्रॉपर्टीज़ वैकल्पिक बनाएँ", "कस्टम DeepPartial टाइप", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 75,
    "question_en": "What utility would you use to get argument types of a constructor?",
    "question_hi": "कंस्ट्रक्टर के आर्गुमेंट टाइप्स प्राप्त करने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["ConstructorParameters<T>", "Extracts constructor args", "Gets tuple of constructor parameters", "All of the above"],
    "options_hi": ["ConstructorParameters<T>", "कंस्ट्रक्टर args एक्सट्रैक्ट करता है", "कंस्ट्रक्टर पैरामीटर्स का ट्यूपल प्राप्त करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 76,
    "question_en": "What utility would you use to get instance type of a class?",
    "question_hi": "क्लास का इंस्टेंस टाइप प्राप्त करने के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["InstanceType<T>", "Extracts instance type from constructor", "Gets type of class instances", "All of the above"],
    "options_hi": ["InstanceType<T>", "कंस्ट्रक्टर से इंस्टेंस टाइप एक्सट्रैक्ट करता है", "क्लास इंस्टेंसेज का टाइप प्राप्त करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 77,
    "question_en": "How can you create a utility to merge multiple types with property conflicts?",
    "question_hi": "प्रॉपर्टी कॉन्फ्लिक्ट्स के साथ एकाधिक टाइप्स मर्ज करने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Last property wins in intersection", "Handle conflicts explicitly", "Custom merge utility", "All of the above"],
    "options_hi": ["इंटरसेक्शन में अंतिम प्रॉपर्टी जीतती है", "कॉन्फ्लिक्ट्स को एक्सप्लिसिटली हैंडल करें", "कस्टम मर्ज यूटिलिटी", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 78,
    "question_en": "What does the 'infer' keyword do in utility types?",
    "question_hi": "यूटिलिटी टाइप्स में 'infer' कीवर्ड क्या करता है?",
    "options_en": ["Infers types in conditional types", "Used in ReturnType, Parameters, etc.", "Type inference in utilities", "All of the above"],
    "options_hi": ["कंडीशनल टाइप्स में टाइप्स इंफर करता है", "ReturnType, Parameters, आदि में प्रयोग किया जाता है", "यूटिलिटीज़ में टाइप इंफरेंस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 79,
    "question_en": "How can you create a utility to extract property types by value type?",
    "question_hi": "वैल्यू टाइप द्वारा प्रॉपर्टी टाइप्स एक्सट्रैक्ट करने के लिए यूटिलिटी कैसे बना सकते हैं?",
    "options_en": ["Conditional mapped types", "Filter properties", "{ [K in keyof T as T[K] extends Type ? K : never]: T[K] }", "All of the above"],
    "options_hi": ["कंडीशनल मैप्ड टाइप्स", "प्रॉपर्टीज़ फ़िल्टर करें", "{ [K in keyof T as T[K] extends Type ? K : never]: T[K] }", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 80,
    "question_en": "What is the most complex utility type you can create?",
    "question_hi": "आप कौन-सा सबसे कॉम्प्लेक्स यूटिलिटी टाइप बना सकते हैं?",
    "options_en": ["No limit, but complex types may impact compilation", "Depends on use case", "Recursive conditional mapped types", "All of the above"],
    "options_hi": ["कोई सीमा नहीं, लेकिन कॉम्प्लेक्स टाइप्स कंपाइलेशन प्रभावित कर सकते हैं", "यूज़ केस पर निर्भर करता है", "रिकर्सिव कंडीशनल मैप्ड टाइप्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 81,
    "question_en": "How can utility types help with API responses?",
    "question_hi": "API रिस्पॉन्सेस के साथ यूटिलिटी टाइप्स कैसे मदद कर सकते हैं?",
    "options_en": ["Transform response types", "Create partial types for updates", "Make certain fields optional", "All of the above"],
    "options_hi": ["रिस्पॉन्स टाइप्स ट्रांसफॉर्म करें", "अपडेट्स के लिए पार्शियल टाइप्स बनाएँ", "कुछ फील्ड्स वैकल्पिक बनाएँ", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 82,
    "question_en": "What utility would you use for form data types?",
    "question_hi": "फॉर्म डेटा टाइप्स के लिए आप कौन-सी यूटिलिटी प्रयोग करेंगे?",
    "options_en": ["Partial for incomplete forms", "Required for validation", "Pick for specific fields", "All of the above"],
    "options_hi": ["अपूर्ण फॉर्म्स के लिए Partial", "वैलिडेशन के लिए Required", "विशिष्ट फील्ड्स के लिए Pick", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 83,
    "question_en": "How can utility types improve code maintainability?",
    "question_hi": "यूटिलिटी टाइप्स कोड मेंटेनबिलिटी कैसे सुधार सकते हैं?",
    "options_en": ["Reduce duplication", "Create reusable type transformations", "Improve type safety", "All of the above"],
    "options_hi": ["डुप्लिकेशन कम करें", "रीयूजेबल टाइप ट्रांसफॉर्मेशन बनाएँ", "टाइप सेफ्टी सुधारें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 84,
    "question_en": "What are some common utility type patterns?",
    "question_hi": "कुछ सामान्य यूटिलिटी टाइप पैटर्न्स क्या हैं?",
    "options_en": ["CRUD operations", "API request/response", "Form validation", "All of the above"],
    "options_hi": ["CRUD ऑपरेशन्स", "API रिक्वेस्ट/रिस्पॉन्स", "फॉर्म वैलिडेशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 85,
    "question_en": "How can you test utility types?",
    "question_hi": "यूटिलिटी टाइप्स का टेस्ट कैसे कर सकते हैं?",
    "options_en": ["Type checking with assignments", "Expect errors", "Test type compatibility", "All of the above"],
    "options_hi": ["असाइनमेंट्स के साथ टाइप चेकिंग", "एरर्स की अपेक्षा करें", "टाइप संगतता टेस्ट करें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 86,
    "question_en": "What is the difference between utility types and type guards?",
    "question_hi": "यूटिलिटी टाइप्स और टाइप गार्ड्स में क्या अंतर है?",
    "options_en": ["Utility types transform types, type guards narrow types at runtime", "Different purposes", "Compile-time vs runtime", "All of the above"],
    "options_hi": ["यूटिलिटी टाइप्स टाइप्स ट्रांसफॉर्म करते हैं, टाइप गार्ड्स रनटाइम पर टाइप्स संकीर्ण करते हैं", "अलग-अलग उद्देश्य", "कंपाइल-टाइम बनाम रनटाइम", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 87,
    "question_en": "Can you create custom utility types?",
    "question_hi": "क्या आप कस्टम यूटिलिटी टाइप्स बना सकते हैं?",
    "options_en": ["Yes, using type aliases", "Create reusable type transformations", "Export from utility files", "All of the above"],
    "options_hi": ["हाँ, टाइप अलियासेस प्रयोग करके", "रीयूजेबल टाइप ट्रांसफॉर्मेशन बनाएँ", "यूटिलिटी फाइल्स से एक्सपोर्ट करें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 88,
    "question_en": "What are some advanced utility type examples?",
    "question_hi": "कुछ एडवांस्ड यूटिलिटी टाइप उदाहरण क्या हैं?",
    "options_en": ["DeepReadonly, DeepPartial", "Merge, Override", "OptionalByType, RequiredByType", "All of the above"],
    "options_hi": ["DeepReadonly, DeepPartial", "Merge, Override", "OptionalByType, RequiredByType", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 89,
    "question_en": "How do utility types relate to mapped types?",
    "question_hi": "यूटिलिटी टाइप्स का मैप्ड टाइप्स से क्या संबंध है?",
    "options_en": ["Many utilities are implemented using mapped types", "Mapped types are building blocks", "Utilities abstract common patterns", "All of the above"],
    "options_hi": ["कई यूटिलिटीज़ मैप्ड टाइप्स प्रयोग करके इम्प्लीमेंट की जाती हैं", "मैप्ड टाइप्स बिल्डिंग ब्लॉक्स हैं", "यूटिलिटीज़ सामान्य पैटर्न्स को एब्स्ट्रैक्ट करती हैं", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 90,
    "question_en": "What is the learning curve for utility types?",
    "question_hi": "यूटिलिटी टाइप्स के लिए लर्निंग कर्व क्या है?",
    "options_en": ["Start with basic utilities", "Learn mapped types for custom utilities", "Practice with real-world examples", "All of the above"],
    "options_hi": ["बेसिक यूटिलिटीज़ से शुरू करें", "कस्टम यूटिलिटीज़ के लिए मैप्ड टाइप्स सीखें", "रियल-वर्ल्ड उदाहरणों के साथ अभ्यास करें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 91,
    "question_en": "How can utility types prevent bugs?",
    "question_hi": "यूटिलिटी टाइप्स बग्स कैसे रोक सकते हैं?",
    "options_en": ["Catch type errors at compile time", "Ensure data shape consistency", "Prevent invalid operations", "All of the above"],
    "options_hi": ["कंपाइल टाइम पर टाइप एरर्स कैच करें", "डेटा शेप कंसिस्टेंसी सुनिश्चित करें", "अमान्य ऑपरेशन्स रोकें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 92,
    "question_en": "What is the most used utility type?",
    "question_hi": "सबसे अधिक प्रयोग किया जाने वाला यूटिलिटी टाइप कौन-सा है?",
    "options_en": ["Partial", "Pick", "Omit", "Depends on use case"],
    "options_hi": ["Partial", "Pick", "Omit", "यूज़ केस पर निर्भर करता है"],
    "answer_en": "Depends on use case",
    "answer_hi": "यूज़ केस पर निर्भर करता है"
  },
  {
    "num": 93,
    "question_en": "How can you share utility types across projects?",
    "question_hi": "प्रोजेक्ट्स के बीच यूटिलिटी टाइप्स कैसे शेयर कर सकते हैं?",
    "options_en": ["Create utility library", "Export from shared package", "Type declaration files", "All of the above"],
    "options_hi": ["यूटिलिटी लाइब्रेरी बनाएँ", "शेयर्ड पैकेज से एक्सपोर्ट करें", "टाइप डिक्लेरेशन फाइल्स", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 94,
    "question_en": "What is the TypeScript version requirement for utility types?",
    "question_hi": "यूटिलिटी टाइप्स के लिए TypeScript वर्जन आवश्यकता क्या है?",
    "options_en": ["Most work in TS 2.1+", "Some newer in TS 4.1+", "Check documentation", "All of the above"],
    "options_hi": ["अधिकांश TS 2.1+ में काम करते हैं", "कुछ नए TS 4.1+ में", "डॉक्यूमेंटेशन चेक करें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 95,
    "question_en": "How do utility types affect bundle size?",
    "question_hi": "यूटिलिटी टाइप्स बंडल साइज को कैसे प्रभावित करते हैं?",
    "options_en": ["No effect - types are stripped", "Compile-time only", "No runtime impact", "All of the above"],
    "options_hi": ["कोई प्रभाव नहीं - टाइप्स स्ट्रिप हो जाते हैं", "केवल कंपाइल-टाइम", "कोई रनटाइम प्रभाव नहीं", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 96,
    "question_en": "Can utility types be used with third-party libraries?",
    "question_hi": "क्या यूटिलिटी टाइप्स थर्ड-पार्टी लाइब्रेरीज़ के साथ प्रयोग किए जा सकते हैं?",
    "options_en": ["Yes, to transform library types", "Adapt external types", "Create better type definitions", "All of the above"],
    "options_hi": ["हाँ, लाइब्रेरी टाइप्स ट्रांसफॉर्म करने के लिए", "एक्सटर्नल टाइप्स एडाप्ट करें", "बेहतर टाइप डेफिनिशन्स बनाएँ", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 97,
    "question_en": "What is the relationship between utility types and generics?",
    "question_hi": "यूटिलिटी टाइप्स और जेनेरिक्स के बीच क्या संबंध है?",
    "options_en": ["Utilities use generics", "Type parameters in utilities", "Generic type transformations", "All of the above"],
    "options_hi": ["यूटिलिटीज़ जेनेरिक्स प्रयोग करती हैं", "यूटिलिटीज़ में टाइप पैरामीटर्स", "जेनेरिक टाइप ट्रांसफॉर्मेशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 98,
    "question_en": "How can you debug utility types?",
    "question_hi": "यूटिलिटी टाइप्स को डीबग कैसे कर सकते हैं?",
    "options_en": ["Hover over types in IDE", "Use type display", "Break down complex types", "All of the above"],
    "options_hi": ["IDE में टाइप्स पर होवर करें", "टाइप डिस्प्ले प्रयोग करें", "कॉम्प्लेक्स टाइप्स को तोड़ें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 99,
    "question_en": "What are the limitations of utility types?",
    "question_hi": "यूटिलिटी टाइप्स की सीमाएँ क्या हैं?",
    "options_en": ["Circular references", "Very deep recursion", "Performance with complex types", "All of the above"],
    "options_hi": ["सर्कुलर रेफरेंसेस", "बहुत गहरी रिकर्सन", "कॉम्प्लेक्स टाइप्स के साथ परफॉर्मेंस", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 100,
    "question_en": "What is the future of utility types in TypeScript?",
    "question_hi": "TypeScript में यूटिलिटी टाइप्स का भविष्य क्या है?",
    "options_en": ["More built-in utilities", "Better performance", "Enhanced type manipulation", "All of the above"],
    "options_hi": ["अधिक बिल्ट-इन यूटिलिटीज़", "बेहतर परफॉर्मेंस", "एन्हांस्ड टाइप मैनिपुलेशन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी"
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