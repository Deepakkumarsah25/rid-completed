const questions=[
    {
        "num": 1,
        "question_en": "What are Utility Types in TypeScript?",
        "question_hi": "TypeScript में Utility Types क्या हैं?",
        "options_en": ["Built-in generic types for common type transformations", "Functions that perform type operations", "Types for utility functions", "External type libraries"],
        "options_hi": ["सामान्य प्रकार परिवर्तनों के लिए अंतर्निहित सामान्य प्रकार", "प्रकार संचालन करने वाले कार्य", "उपयोगिता कार्यों के लिए प्रकार", "बाहरी प्रकार पुस्तकालय"],
        "answer_en": "Built-in generic types for common type transformations",
        "answer_hi": "सामान्य प्रकार परिवर्तनों के लिए अंतर्निहित सामान्य प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which Utility Type makes all properties of a type optional?",
        "question_hi": "कौन सा Utility Type किसी प्रकार की सभी संपत्तियों को वैकल्पिक बनाता है?",
        "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
        "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does the Required<T> utility type do?",
        "question_hi": "Required<T> utility type क्या करता है?",
        "options_en": ["Makes all properties of T required", "Makes all properties optional", "Makes properties readonly", "Picks specific properties"],
        "options_hi": ["T की सभी संपत्तियों को आवश्यक बनाता है", "सभी संपत्तियों को वैकल्पिक बनाता है", "संपत्तियों को केवल-पठनीय बनाता है", "विशिष्ट संपत्तियों को चुनता है"],
        "answer_en": "Makes all properties of T required",
        "answer_hi": "T की सभी संपत्तियों को आवश्यक बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which Utility Type creates a new type with all properties of T set to readonly?",
        "question_hi": "कौन सा Utility Type T की सभी संपत्तियों को केवल-पठनीय सेट करके एक नया प्रकार बनाता है?",
        "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Record<K, T>"],
        "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Record<K, T>"],
        "answer_en": "Readonly<T>",
        "answer_hi": "Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the Pick<T, K> utility type?",
        "question_hi": "Pick<T, K> utility type का उद्देश्य क्या है?",
        "options_en": ["Selects a subset of properties K from type T", "Picks random properties", "Creates new properties", "Removes properties from T"],
        "options_hi": ["प्रकार T से संपत्तियों K का एक उपसमुच्चय चुनता है", "यादृच्छिक संपत्तियाँ चुनता है", "नई संपत्तियाँ बनाता है", "T से संपत्तियाँ हटाता है"],
        "answer_en": "Selects a subset of properties K from type T",
        "answer_hi": "प्रकार T से संपत्तियों K का एक उपसमुच्चय चुनता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does Omit<T, K> utility type do?",
        "question_hi": "Omit<T, K> utility type क्या करता है?",
        "options_en": ["Constructs a type by omitting properties K from T", "Omits all properties", "Creates optional properties", "Merges properties"],
        "options_hi": ["T से संपत्तियाँ K को छोड़कर एक प्रकार बनाता है", "सभी संपत्तियों को छोड़ देता है", "वैकल्पिक संपत्तियाँ बनाता है", "संपत्तियों को मिलाता है"],
        "answer_en": "Constructs a type by omitting properties K from T",
        "answer_hi": "T से संपत्तियाँ K को छोड़कर एक प्रकार बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which Utility Type constructs an object type with properties of type T?",
        "question_hi": "कौन सा Utility Type T प्रकार की संपत्तियों वाला एक वस्तु प्रकार बनाता है?",
        "options_en": ["Record<K, T>", "Partial<T>", "Required<T>", "Pick<T, K>"],
        "options_hi": ["Record<K, T>", "Partial<T>", "Required<T>", "Pick<T, K>"],
        "answer_en": "Record<K, T>",
        "answer_hi": "Record<K, T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does Exclude<T, U> utility type do?",
        "question_hi": "Exclude<T, U> utility type क्या करता है?",
        "options_en": ["Excludes from T those types that are assignable to U", "Includes types from U", "Creates union types", "Removes all types"],
        "options_hi": ["T से उन प्रकारों को बाहर करता है जो U को निर्दिष्ट किए जा सकते हैं", "U से प्रकारों को शामिल करता है", "संघ प्रकार बनाता है", "सभी प्रकारों को हटाता है"],
        "answer_en": "Excludes from T those types that are assignable to U",
        "answer_hi": "T से उन प्रकारों को बाहर करता है जो U को निर्दिष्ट किए जा सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of Extract<T, U> utility type?",
        "question_hi": "Extract<T, U> utility type का उद्देश्य क्या है?",
        "options_en": ["Extracts from T those types that are assignable to U", "Extracts all types", "Creates new types", "Removes types from U"],
        "options_hi": ["T से उन प्रकारों को निकालता है जो U को निर्दिष्ट किए जा सकते हैं", "सभी प्रकार निकालता है", "नए प्रकार बनाता है", "U से प्रकारों को हटाता है"],
        "answer_en": "Extracts from T those types that are assignable to U",
        "answer_hi": "T से उन प्रकारों को निकालता है जो U को निर्दिष्ट किए जा सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which Utility Type excludes null and undefined from a type?",
        "question_hi": "कौन सा Utility Type किसी प्रकार से null और undefined को बाहर करता है?",
        "options_en": ["NonNullable<T>", "Required<T>", "Partial<T>", "Exclude<T, null | undefined>"],
        "options_hi": ["NonNullable<T>", "Required<T>", "Partial<T>", "Exclude<T, null | undefined>"],
        "answer_en": "NonNullable<T>",
        "answer_hi": "NonNullable<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does Parameters<T> utility type return?",
        "question_hi": "Parameters<T> utility type क्या लौटाता है?",
        "options_en": ["A tuple of the parameters of a function type T", "The return type of T", "The first parameter of T", "All function properties"],
        "options_hi": ["एक फ़ंक्शन प्रकार T के मापदंडों का एक टपल", "T का रिटर्न प्रकार", "T का पहला पैरामीटर", "सभी फ़ंक्शन गुण"],
        "answer_en": "A tuple of the parameters of a function type T",
        "answer_hi": "एक फ़ंक्शन प्रकार T के मापदंडों का एक टपल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of ReturnType<T> utility type?",
        "question_hi": "ReturnType<T> utility type का उद्देश्य क्या है?",
        "options_en": ["Obtains the return type of a function type T", "Gets parameter types", "Extracts function name", "Creates return values"],
        "options_hi": ["एक फ़ंक्शन प्रकार T का रिटर्न प्रकार प्राप्त करता है", "पैरामीटर प्रकार प्राप्त करता है", "फ़ंक्शन नाम निकालता है", "रिटर्न मान बनाता है"],
        "answer_en": "Obtains the return type of a function type T",
        "answer_hi": "एक फ़ंक्शन प्रकार T का रिटर्न प्रकार प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which Utility Type gets the instance type of a constructor function?",
        "question_hi": "कौन सा Utility Type एक कंस्ट्रक्टर फ़ंक्शन का उदाहरण प्रकार प्राप्त करता है?",
        "options_en": ["InstanceType<T>", "ConstructorParameters<T>", "ReturnType<T>", "ThisType<T>"],
        "options_hi": ["InstanceType<T>", "ConstructorParameters<T>", "ReturnType<T>", "ThisType<T>"],
        "answer_en": "InstanceType<T>",
        "answer_hi": "InstanceType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does ConstructorParameters<T> utility type return?",
        "question_hi": "ConstructorParameters<T> utility type क्या लौटाता है?",
        "options_en": ["A tuple of the parameters of a constructor function type T", "Instance type", "Return type", "Property types"],
        "options_hi": ["एक कंस्ट्रक्टर फ़ंक्शन प्रकार T के मापदंडों का एक टपल", "उदाहरण प्रकार", "रिटर्न प्रकार", "गुण प्रकार"],
        "answer_en": "A tuple of the parameters of a constructor function type T",
        "answer_hi": "एक कंस्ट्रक्टर फ़ंक्शन प्रकार T के मापदंडों का एक टपल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of ThisParameterType<T> utility type?",
        "question_hi": "ThisParameterType<T> utility type का उद्देश्य क्या है?",
        "options_en": ["Extracts the type of the 'this' parameter of a function type", "Gets return type", "Extracts parameters", "Gets instance type"],
        "options_hi": ["एक फ़ंक्शन प्रकार के 'this' पैरामीटर का प्रकार निकालता है", "रिटर्न प्रकार प्राप्त करता है", "पैरामीटर्स निकालता है", "उदाहरण प्रकार प्राप्त करता है"],
        "answer_en": "Extracts the type of the 'this' parameter of a function type",
        "answer_hi": "एक फ़ंक्शन प्रकार के 'this' पैरामीटर का प्रकार निकालता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which Utility Type removes the 'this' parameter from a function type?",
        "question_hi": "कौन सा Utility Type एक फ़ंक्शन प्रकार से 'this' पैरामीटर को हटाता है?",
        "options_en": ["OmitThisParameter<T>", "ThisParameterType<T>", "Parameters<T>", "ReturnType<T>"],
        "options_hi": ["OmitThisParameter<T>", "ThisParameterType<T>", "Parameters<T>", "ReturnType<T>"],
        "answer_en": "OmitThisParameter<T>",
        "answer_hi": "OmitThisParameter<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does Uppercase<S> utility type do?",
        "question_hi": "Uppercase<S> utility type क्या करता है?",
        "options_en": ["Converts string literal type S to uppercase", "Converts to lowercase", "Capitalizes string", "Uncapitalizes string"],
        "options_hi": ["स्ट्रिंग शाब्दिक प्रकार S को अपरकेस में बदलता है", "लोअरकेस में बदलता है", "स्ट्रिंग को कैपिटलाइज़ करता है", "स्ट्रिंग को अनकैपिटलाइज़ करता है"],
        "answer_en": "Converts string literal type S to uppercase",
        "answer_hi": "स्ट्रिंग शाब्दिक प्रकार S को अपरकेस में बदलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of Lowercase<S> utility type?",
        "question_hi": "Lowercase<S> utility type का उद्देश्य क्या है?",
        "options_en": ["Converts string literal type S to lowercase", "Converts to uppercase", "Capitalizes string", "Uncapitalizes string"],
        "options_hi": ["स्ट्रिंग शाब्दिक प्रकार S को लोअरकेस में बदलता है", "अपरकेस में बदलता है", "स्ट्रिंग को कैपिटलाइज़ करता है", "स्ट्रिंग को अनकैपिटलाइज़ करता है"],
        "answer_en": "Converts string literal type S to lowercase",
        "answer_hi": "स्ट्रिंग शाब्दिक प्रकार S को लोअरकेस में बदलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which Utility Type capitalizes the first character of a string literal type?",
        "question_hi": "कौन सा Utility Type एक स्ट्रिंग शाब्दिक प्रकार के पहले अक्षर को कैपिटलाइज़ करता है?",
        "options_en": ["Capitalize<S>", "Uppercase<S>", "Lowercase<S>", "Uncapitalize<S>"],
        "options_hi": ["Capitalize<S>", "Uppercase<S>", "Lowercase<S>", "Uncapitalize<S>"],
        "answer_en": "Capitalize<S>",
        "answer_hi": "Capitalize<S>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does Uncapitalize<S> utility type do?",
        "question_hi": "Uncapitalize<S> utility type क्या करता है?",
        "options_en": ["Converts the first character of string literal type S to lowercase", "Converts to uppercase", "Capitalizes string", "Converts all to lowercase"],
        "options_hi": ["स्ट्रिंग शाब्दिक प्रकार S के पहले अक्षर को लोअरकेस में बदलता है", "अपरकेस में बदलता है", "स्ट्रिंग को कैपिटलाइज़ करता है", "सभी को लोअरकेस में बदलता है"],
        "answer_en": "Converts the first character of string literal type S to lowercase",
        "answer_hi": "स्ट्रिंग शाब्दिक प्रकार S के पहले अक्षर को लोअरकेस में बदलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is Awaited<T> utility type used for?",
        "question_hi": "Awaited<T> utility type का उपयोग किस लिए किया जाता है?",
        "options_en": ["Recursively unwraps Promise types to get the awaited type", "Creates promises", "Handles async functions", "Converts sync to async"],
        "options_hi": ["प्रतीक्षित प्रकार प्राप्त करने के लिए पुनरावर्ती रूप से Promise प्रकारों को खोलता है", "प्रॉमिसेज बनाता है", "एसिंक फ़ंक्शन्स को संभालता है", "सिंक को एसिंक में बदलता है"],
        "answer_en": "Recursively unwraps Promise types to get the awaited type",
        "answer_hi": "प्रतीक्षित प्रकार प्राप्त करने के लिए पुनरावर्ती रूप से Promise प्रकारों को खोलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How does Partial<T> affect optional properties that are already optional?",
        "question_hi": "Partial<T> उन वैकल्पिक गुणों को कैसे प्रभावित करता है जो पहले से ही वैकल्पिक हैं?",
        "options_en": ["They remain optional", "They become required", "They become readonly", "They are removed"],
        "options_hi": ["वे वैकल्पिक बने रहते हैं", "वे आवश्यक हो जाते हैं", "वे केवल-पठनीय हो जाते हैं", "वे हटा दिए जाते हैं"],
        "answer_en": "They remain optional",
        "answer_hi": "वे वैकल्पिक बने रहते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What happens when you apply Required<T> to a type with optional properties?",
        "question_hi": "जब आप वैकल्पिक गुणों वाले प्रकार पर Required<T> लागू करते हैं तो क्या होता है?",
        "options_en": ["All properties become required", "Optional properties remain optional", "Properties become readonly", "Properties are removed"],
        "options_hi": ["सभी गुण आवश्यक हो जाते हैं", "वैकल्पिक गुण वैकल्पिक बने रहते हैं", "गुण केवल-पठनीय हो जाते हैं", "गुण हटा दिए जाते हैं"],
        "answer_en": "All properties become required",
        "answer_hi": "सभी गुण आवश्यक हो जाते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Can Readonly<T> be applied to interface properties that are already readonly?",
        "question_hi": "क्या Readonly<T> उन इंटरफ़ेस गुणों पर लागू किया जा सकता है जो पहले से ही केवल-पठनीय हैं?",
        "options_en": ["Yes, they remain readonly", "No, it causes an error", "They become mutable", "They are removed"],
        "options_hi": ["हाँ, वे केवल-पठनीय बने रहते हैं", "नहीं, यह एक त्रुटि का कारण बनता है", "वे परिवर्तनशील हो जाते हैं", "वे हटा दिए जाते हैं"],
        "answer_en": "Yes, they remain readonly",
        "answer_hi": "हाँ, वे केवल-पठनीय बने रहते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the difference between Pick<T, K> and Omit<T, K>?",
        "question_hi": "Pick<T, K> और Omit<T, K> में क्या अंतर है?",
        "options_en": ["Pick selects specified properties, Omit excludes specified properties", "Both do the same thing", "Pick excludes properties, Omit selects properties", "Pick is for arrays, Omit is for objects"],
        "options_hi": ["Pick निर्दिष्ट गुणों का चयन करता है, Omit निर्दिष्ट गुणों को बाहर करता है", "दोनों एक ही काम करते हैं", "Pick गुणों को बाहर करता है, Omit गुणों का चयन करता है", "Pick सरणियों के लिए है, Omit वस्तुओं के लिए है"],
        "answer_en": "Pick selects specified properties, Omit excludes specified properties",
        "answer_hi": "Pick निर्दिष्ट गुणों का चयन करता है, Omit निर्दिष्ट गुणों को बाहर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How does Record<K, T> handle union types for keys?",
        "question_hi": "Record<K, T> कुंजियों के लिए संघ प्रकारों को कैसे संभालता है?",
        "options_en": ["Creates a type with all union members as possible keys", "Only accepts single key types", "Converts union to intersection", "Throws an error"],
        "options_hi": ["सभी संघ सदस्यों को संभावित कुंजियों के रूप में लेकर एक प्रकार बनाता है", "केवल एकल कुंजी प्रकारों को स्वीकार करता है", "संघ को प्रतिच्छेदन में बदलता है", "एक त्रुटि फेंकता है"],
        "answer_en": "Creates a type with all union members as possible keys",
        "answer_hi": "सभी संघ सदस्यों को संभावित कुंजियों के रूप में लेकर एक प्रकार बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is a common use case for Exclude<T, U> utility type?",
        "question_hi": "Exclude<T, U> utility type के लिए एक सामान्य उपयोग मामला क्या है?",
        "options_en": ["Removing specific string literals from a union type", "Adding types to union", "Creating new types", "Merging types"],
        "options_hi": ["एक संघ प्रकार से विशिष्ट स्ट्रिंग शाब्दिकों को हटाना", "संघ में प्रकार जोड़ना", "नए प्रकार बनाना", "प्रकारों को मर्ज करना"],
        "answer_en": "Removing specific string literals from a union type",
        "answer_hi": "एक संघ प्रकार से विशिष्ट स्ट्रिंग शाब्दिकों को हटाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "When would you use Extract<T, U> in practice?",
        "question_hi": "व्यवहार में आप Extract<T, U> का उपयोग कब करेंगे?",
        "options_en": ["To get common types from two union types", "To remove common types", "To create new unions", "To convert types"],
        "options_hi": ["दो संघ प्रकारों से सामान्य प्रकार प्राप्त करने के लिए", "सामान्य प्रकारों को हटाने के लिए", "नए संघ बनाने के लिए", "प्रकारों को बदलने के लिए"],
        "answer_en": "To get common types from two union types",
        "answer_hi": "दो संघ प्रकारों से सामान्य प्रकार प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How does NonNullable<T> handle nested null/undefined types?",
        "question_hi": "NonNullable<T> नेस्टेड null/undefined प्रकारों को कैसे संभालता है?",
        "options_en": ["Removes null/undefined from all levels of the type", "Only removes from top level", "Converts to optional", "Throws an error"],
        "options_hi": ["प्रकार के सभी स्तरों से null/undefined को हटाता है", "केवल शीर्ष स्तर से हटाता है", "वैकल्पिक में बदलता है", "एक त्रुटि फेंकता है"],
        "answer_en": "Removes null/undefined from all levels of the type",
        "answer_hi": "प्रकार के सभी स्तरों से null/undefined को हटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does Parameters<T> return for a function with no parameters?",
        "question_hi": "Parameters<T> बिना पैरामीटर वाले फ़ंक्शन के लिए क्या लौटाता है?",
        "options_en": ["An empty tuple []", "undefined", "never", "void"],
        "options_hi": ["एक खाली टपल []", "undefined", "never", "void"],
        "answer_en": "An empty tuple []",
        "answer_hi": "एक खाली टपल []",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Can ReturnType<T> be used with generic functions?",
        "question_hi": "क्या ReturnType<T> का उपयोग सामान्य कार्यों के साथ किया जा सकता है?",
        "options_en": ["Yes, it infers the return type based on generic constraints", "No, it only works with concrete types", "Sometimes, depending on usage", "Never works with generics"],
        "options_hi": ["हाँ, यह सामान्य बाधाओं के आधार पर रिटर्न प्रकार का अनुमान लगाता है", "नहीं, यह केवल ठोस प्रकारों के साथ काम करता है", "कभी-कभी, उपयोग के आधार पर", "सामान्य प्रकारों के साथ कभी काम नहीं करता"],
        "answer_en": "Yes, it infers the return type based on generic constraints",
        "answer_hi": "हाँ, यह सामान्य बाधाओं के आधार पर रिटर्न प्रकार का अनुमान लगाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is a practical use case for InstanceType<T>?",
        "question_hi": "InstanceType<T> के लिए एक व्यावहारिक उपयोग मामला क्या है?",
        "options_en": ["Creating type-safe factory functions", "Getting parameter types", "Extracting return types", "Creating instances directly"],
        "options_hi": ["टाइप-सेफ फ़ैक्टरी फ़ंक्शन बनाना", "पैरामीटर प्रकार प्राप्त करना", "रिटर्न प्रकार निकालना", "सीधे उदाहरण बनाना"],
        "answer_en": "Creating type-safe factory functions",
        "answer_hi": "टाइप-सेफ फ़ैक्टरी फ़ंक्शन बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How does ConstructorParameters<T> differ from Parameters<T>?",
        "question_hi": "ConstructorParameters<T> Parameters<T> से कैसे भिन्न है?",
        "options_en": ["ConstructorParameters works with class constructors, Parameters works with functions", "They are identical", "ConstructorParameters returns instance type", "Parameters doesn't work with constructors"],
        "options_hi": ["ConstructorParameters क्लास कंस्ट्रक्टर के साथ काम करता है, Parameters फ़ंक्शन के साथ काम करता है", "वे समान हैं", "ConstructorParameters उदाहरण प्रकार लौटाता है", "Parameters कंस्ट्रक्टर के साथ काम नहीं करता"],
        "answer_en": "ConstructorParameters works with class constructors, Parameters works with functions",
        "answer_hi": "ConstructorParameters क्लास कंस्ट्रक्टर के साथ काम करता है, Parameters फ़ंक्शन के साथ काम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "When would you use ThisParameterType<T> in real code?",
        "question_hi": "वास्तविक कोड में आप ThisParameterType<T> का उपयोग कब करेंगे?",
        "options_en": ["When working with functions that have explicit 'this' types", "Always with arrow functions", "Never in practice", "Only with class methods"],
        "options_hi": ["जब स्पष्ट 'this' प्रकार वाले कार्यों के साथ काम कर रहे हों", "हमेशा एरो फ़ंक्शन के साथ", "व्यवहार में कभी नहीं", "केवल क्लास मेथड के साथ"],
        "answer_en": "When working with functions that have explicit 'this' types",
        "answer_hi": "जब स्पष्ट 'this' प्रकार वाले कार्यों के साथ काम कर रहे हों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does OmitThisParameter<T> return for functions without 'this' parameter?",
        "question_hi": "OmitThisParameter<T> बिना 'this' पैरामीटर वाले फ़ंक्शन के लिए क्या लौटाता है?",
        "options_en": ["The original function type unchanged", "never", "undefined", "A different function type"],
        "options_hi": ["मूल फ़ंक्शन प्रकार अपरिवर्तित", "never", "undefined", "एक अलग फ़ंक्शन प्रकार"],
        "answer_en": "The original function type unchanged",
        "answer_hi": "मूल फ़ंक्शन प्रकार अपरिवर्तित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do string manipulation utility types (Uppercase, Lowercase, etc.) work at runtime?",
        "question_hi": "स्ट्रिंग मैनिपुलेशन utility types (Uppercase, Lowercase, आदि) रनटाइम पर कैसे काम करते हैं?",
        "options_en": ["They have no runtime effect, only compile-time type transformations", "They actually transform strings", "They throw runtime errors", "They create new string objects"],
        "options_hi": ["उनका कोई रनटाइम प्रभाव नहीं है, केवल कंपाइल-टाइम प्रकार परिवर्तन", "वे वास्तव में स्ट्रिंग्स को बदलते हैं", "वे रनटाइम त्रुटियाँ फेंकते हैं", "वे नई स्ट्रिंग वस्तुएँ बनाते हैं"],
        "answer_en": "They have no runtime effect, only compile-time type transformations",
        "answer_hi": "उनका कोई रनटाइम प्रभाव नहीं है, केवल कंपाइल-टाइम प्रकार परिवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is an example use case for Capitalize<S> utility type?",
        "question_hi": "Capitalize<S> utility type के लिए एक उदाहरण उपयोग मामला क्या है?",
        "options_en": ["Creating type-safe property names (e.g., 'getName' from 'name')", "Making all caps strings", "Converting to lowercase", "Removing capitalization"],
        "options_hi": ["टाइप-सेफ प्रॉपर्टी नाम बनाना (जैसे, 'name' से 'getName')", "सभी कैप्स स्ट्रिंग्स बनाना", "लोअरकेस में बदलना", "कैपिटलाइज़ेशन हटाना"],
        "answer_en": "Creating type-safe property names (e.g., 'getName' from 'name')",
        "answer_hi": "टाइप-सेफ प्रॉपर्टी नाम बनाना (जैसे, 'name' से 'getName')",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How does Awaited<T> handle nested promises (Promise<Promise<T>>)?",
        "question_hi": "Awaited<T> नेस्टेड प्रॉमिसेज (Promise<Promise<T>>) को कैसे संभालता है?",
        "options_en": ["Recursively unwraps all Promise layers", "Only unwraps one level", "Throws an error", "Returns Promise<Promise<T>> unchanged"],
        "options_hi": ["सभी Promise परतों को पुनरावर्ती रूप से खोलता है", "केवल एक स्तर खोलता है", "एक त्रुटि फेंकता है", "Promise<Promise<T>> को अपरिवर्तित लौटाता है"],
        "answer_en": "Recursively unwraps all Promise layers",
        "answer_hi": "सभी Promise परतों को पुनरावर्ती रूप से खोलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Can Partial<T> be used with union types?",
        "question_hi": "क्या Partial<T> का उपयोग संघ प्रकारों के साथ किया जा सकता है?",
        "options_en": ["Yes, it distributes over union members", "No, it only works with object types", "Sometimes, with limitations", "Never works with unions"],
        "options_hi": ["हाँ, यह संघ सदस्यों पर वितरित होता है", "नहीं, यह केवल वस्तु प्रकारों के साथ काम करता है", "कभी-कभी, सीमाओं के साथ", "संघों के साथ कभी काम नहीं करता"],
        "answer_en": "Yes, it distributes over union members",
        "answer_hi": "हाँ, यह संघ सदस्यों पर वितरित होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What happens when Required<T> is applied to a union of object types?",
        "question_hi": "जब Required<T> वस्तु प्रकारों के एक संघ पर लागू किया जाता है तो क्या होता है?",
        "options_en": ["It makes properties required in each union member", "It fails with an error", "It only affects the first member", "It removes optional properties from union"],
        "options_hi": ["यह प्रत्येक संघ सदस्य में गुणों को आवश्यक बनाता है", "यह एक त्रुटि के साथ विफल हो जाता है", "यह केवल पहले सदस्य को प्रभावित करता है", "यह संघ से वैकल्पिक गुणों को हटाता है"],
        "answer_en": "It makes properties required in each union member",
        "answer_hi": "यह प्रत्येक संघ सदस्य में गुणों को आवश्यक बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How does Pick<T, K> behave when K includes properties not in T?",
        "question_hi": "Pick<T, K> कैसा व्यवहार करता है जब K में T में नहीं होने वाले गुण शामिल होते हैं?",
        "options_en": ["TypeScript shows an error", "It ignores extra properties", "It adds them to the type", "It creates a union type"],
        "options_hi": ["TypeScript एक त्रुटि दिखाता है", "यह अतिरिक्त गुणों को अनदेखा करता है", "यह उन्हें प्रकार में जोड़ता है", "यह एक संघ प्रकार बनाता है"],
        "answer_en": "TypeScript shows an error",
        "answer_hi": "TypeScript एक त्रुटि दिखाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Can Omit<T, K> remove properties that don't exist in T?",
        "question_hi": "क्या Omit<T, K> उन गुणों को हटा सकता है जो T में मौजूद नहीं हैं?",
        "options_en": ["Yes, it's allowed but might be unintentional", "No, it causes an error", "It adds them instead", "It ignores them silently"],
        "options_hi": ["हाँ, यह अनुमत है लेकिन अनजाने में हो सकता है", "नहीं, यह एक त्रुटि का कारण बनता है", "यह इसके बजाय उन्हें जोड़ता है", "यह उन्हें चुपचाप अनदेखा करता है"],
        "answer_en": "Yes, it's allowed but might be unintentional",
        "answer_hi": "हाँ, यह अनुमत है लेकिन अनजाने में हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the result of Record<string, number>?",
        "question_hi": "Record<string, number> का परिणाम क्या है?",
        "options_en": ["An object with string keys and number values", "An array of numbers", "A tuple with string and number", "A mapped type"],
        "options_hi": ["स्ट्रिंग कुंजियों और संख्या मानों वाली एक वस्तु", "संख्याओं की एक सरणी", "स्ट्रिंग और संख्या वाला एक टपल", "एक मैप किया गया प्रकार"],
        "answer_en": "An object with string keys and number values",
        "answer_hi": "स्ट्रिंग कुंजियों और संख्या मानों वाली एक वस्तु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How does Exclude<T, U> work with literal types?",
        "question_hi": "Exclude<T, U> शाब्दिक प्रकारों के साथ कैसे काम करता है?",
        "options_en": ["Removes matching literal types from the union", "Converts them to strings", "Creates new literals", "Merges them together"],
        "options_hi": ["संघ से मिलान करने वाले शाब्दिक प्रकारों को हटाता है", "उन्हें स्ट्रिंग्स में बदलता है", "नए शाब्दिक बनाता है", "उन्हें एक साथ मिलाता है"],
        "answer_en": "Removes matching literal types from the union",
        "answer_hi": "संघ से मिलान करने वाले शाब्दिक प्रकारों को हटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is a common pattern using Extract with discriminated unions?",
        "question_hi": "विभेदित संघों के साथ Extract का उपयोग करने वाला एक सामान्य पैटर्न क्या है?",
        "options_en": ["Extracting union members with a specific discriminant value", "Creating new unions", "Removing discriminant properties", "Converting to intersection"],
        "options_hi": ["एक विशिष्ट विभेदक मूल्य वाले संघ सदस्यों को निकालना", "नए संघ बनाना", "विभेदक गुणों को हटाना", "प्रतिच्छेदन में बदलना"],
        "answer_en": "Extracting union members with a specific discriminant value",
        "answer_hi": "एक विशिष्ट विभेदक मूल्य वाले संघ सदस्यों को निकालना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How does NonNullable differ from using Exclude<T, null | undefined>?",
        "question_hi": "NonNullable Exclude<T, null | undefined> का उपयोग करने से कैसे भिन्न है?",
        "options_en": ["They are equivalent for most use cases", "NonNullable is more specific", "Exclude is more powerful", "They work differently"],
        "options_hi": ["वे अधिकांश उपयोग मामलों के लिए समतुल्य हैं", "NonNullable अधिक विशिष्ट है", "Exclude अधिक शक्तिशाली है", "वे अलग तरह से काम करते हैं"],
        "answer_en": "They are equivalent for most use cases",
        "answer_hi": "वे अधिकांश उपयोग मामलों के लिए समतुल्य हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Can Parameters<T> extract parameter names or only types?",
        "question_hi": "क्या Parameters<T> पैरामीटर नाम या केवल प्रकार निकाल सकता है?",
        "options_en": ["Only types, not names", "Both types and names", "Only names", "Neither, it returns the function"],
        "options_hi": ["केवल प्रकार, नाम नहीं", "प्रकार और नाम दोनों", "केवल नाम", "न तो, यह फ़ंक्शन लौटाता है"],
        "answer_en": "Only types, not names",
        "answer_hi": "केवल प्रकार, नाम नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does ReturnType<T> return for a function that returns void?",
        "question_hi": "ReturnType<T> उस फ़ंक्शन के लिए क्या लौटाता है जो void लौटाता है?",
        "options_en": ["void", "undefined", "never", "null"],
        "options_hi": ["void", "undefined", "never", "null"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How does InstanceType<T> work with abstract classes?",
        "question_hi": "InstanceType<T> अमूर्त कक्षाओं के साथ कैसे काम करता है?",
        "options_en": ["It works the same as with concrete classes", "It returns never", "It causes an error", "It returns the abstract class type"],
        "options_hi": ["यह ठोस कक्षाओं के साथ समान रूप से काम करता है", "यह never लौटाता है", "यह एक त्रुटि का कारण बनता है", "यह अमूर्त कक्षा प्रकार लौटाता है"],
        "answer_en": "It works the same as with concrete classes",
        "answer_hi": "यह ठोस कक्षाओं के साथ समान रूप से काम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of ThisType<T> utility type?",
        "question_hi": "ThisType<T> utility type का उद्देश्य क्या है?",
        "options_en": ["To mark the 'this' type in object literals for contextual typing", "To extract 'this' type", "To remove 'this' type", "To create 'this' type"],
        "options_hi": ["संदर्भिक टाइपिंग के लिए वस्तु शाब्दिक में 'this' प्रकार को चिह्नित करना", "'this' प्रकार निकालना", "'this' प्रकार हटाना", "'this' प्रकार बनाना"],
        "answer_en": "To mark the 'this' type in object literals for contextual typing",
        "answer_hi": "संदर्भिक टाइपिंग के लिए वस्तु शाब्दिक में 'this' प्रकार को चिह्नित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you create a type that makes all properties optional except one?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बनाते हैं जो एक को छोड़कर सभी गुणों को वैकल्पिक बनाता है?",
        "options_en": ["Partial<T> & Pick<T, K> where K is the required property", "Required<T> & Partial<T>", "Omit<T, K> & Partial<T>", "Pick<T, K> & Partial<Omit<T, K>>"],
        "options_hi": ["Partial<T> & Pick<T, K> जहाँ K आवश्यक गुण है", "Required<T> & Partial<T>", "Omit<T, K> & Partial<T>", "Pick<T, K> & Partial<Omit<T, K>>"],
        "answer_en": "Partial<T> & Pick<T, K> where K is the required property",
        "answer_hi": "Partial<T> & Pick<T, K> जहाँ K आवश्यक गुण है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What utility type combination creates a type with some properties readonly and others mutable?",
        "question_hi": "कौन सा utility type संयोजन कुछ गुणों को केवल-पठनीय और अन्य को परिवर्तनशील के साथ एक प्रकार बनाता है?",
        "options_en": ["Readonly<Pick<T, K>> & Omit<T, K>", "Partial<T> & Required<T>", "Record<K, T> & Partial<T>", "Pick<T, K> & Omit<T, K>"],
        "options_hi": ["Readonly<Pick<T, K>> & Omit<T, K>", "Partial<T> & Required<T>", "Record<K, T> & Partial<T>", "Pick<T, K> & Omit<T, K>"],
        "answer_en": "Readonly<Pick<T, K>> & Omit<T, K>",
        "answer_hi": "Readonly<Pick<T, K>> & Omit<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How can you create a type that requires at least one property from a set?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जिसके लिए एक सेट से कम से कम एक गुण की आवश्यकता हो?",
        "options_en": ["Using union of Pick<T, K> for each property", "Partial<T> & { [P in K]?: T[P] }", "Required<Pick<T, K>>", "Omit<T, K> & Partial<T>"],
        "options_hi": ["प्रत्येक गुण के लिए Pick<T, K> का संघ उपयोग करना", "Partial<T> & { [P in K]?: T[P] }", "Required<Pick<T, K>>", "Omit<T, K> & Partial<T>"],
        "answer_en": "Using union of Pick<T, K> for each property",
        "answer_hi": "प्रत्येक गुण के लिए Pick<T, K> का संघ उपयोग करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What utility type pattern is used for type-safe event emitters?",
        "question_hi": "टाइप-सेफ इवेंट एमिटर के लिए किस utility type पैटर्न का उपयोग किया जाता है?",
        "options_en": ["Record<EventName, EventHandler>", "Partial<EventMap>", "Required<EventMap>", "Pick<EventMap, K>"],
        "options_hi": ["Record<EventName, EventHandler>", "Partial<EventMap>", "Required<EventMap>", "Pick<EventMap, K>"],
        "answer_en": "Record<EventName, EventHandler>",
        "answer_hi": "Record<EventName, EventHandler>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How can you create a type that excludes methods from an interface?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो एक इंटरफ़ेस से विधियों को बाहर करता है?",
        "options_en": ["Pick<T, PropertiesOnly<T>> using conditional types", "Omit<T, Function>", "Exclude<T, Function>", "NonNullable<T>"],
        "options_hi": ["सशर्त प्रकारों का उपयोग करके Pick<T, PropertiesOnly<T>>", "Omit<T, Function>", "Exclude<T, Function>", "NonNullable<T>"],
        "answer_en": "Pick<T, PropertiesOnly<T>> using conditional types",
        "answer_hi": "सशर्त प्रकारों का उपयोग करके Pick<T, PropertiesOnly<T>>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the benefit of using Record over index signatures?",
        "question_hi": "इंडेक्स हस्ताक्षरों पर Record का उपयोग करने का क्या लाभ है?",
        "options_en": ["Record provides more specific key constraints", "Record is shorter syntax", "Index signatures are deprecated", "Record works with any type"],
        "options_hi": ["Record अधिक विशिष्ट कुंजी बाधाएँ प्रदान करता है", "Record छोटा वाक्यविन्यास है", "इंडेक्स हस्ताक्षर deprecated हैं", "Record किसी भी प्रकार के साथ काम करता है"],
        "answer_en": "Record provides more specific key constraints",
        "answer_hi": "Record अधिक विशिष्ट कुंजी बाधाएँ प्रदान करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How can you extract all string property names from a type?",
        "question_hi": "आप एक प्रकार से सभी स्ट्रिंग गुण नाम कैसे निकाल सकते हैं?",
        "options_en": ["Extract<keyof T, string>", "Pick<T, string>", "Record<string, T>", "Omit<T, number>"],
        "options_hi": ["Extract<keyof T, string>", "Pick<T, string>", "Record<string, T>", "Omit<T, number>"],
        "answer_en": "Extract<keyof T, string>",
        "answer_hi": "Extract<keyof T, string>",
        "attempted": false,
        "selected": ""
    },
    {
    "num": 58,
    "question_en": "What utility type combination creates a type with default values?",
    "question_hi": "कौन सा utility type संयोजन डिफ़ॉल्ट मानों के साथ एक प्रकार बनाता है?",
    "options_en": ["Partial<T> & Defaults<T> (where Defaults is a type with default values)", "Required<T> & Partial<T>", "Record<K, T> & Partial<T>", "Pick<T, K> & { [P in K]?: T[P] }"],
    "options_hi": ["Partial<T> & Defaults<T> (जहाँ Defaults डिफ़ॉल्ट मानों वाला एक प्रकार है)", "Required<T> & Partial<T>", "Record<K, T> & Partial<T>", "Pick<T, K> & { [P in K]?: T[P] }"],
    "answer_en": "Partial<T> & Defaults<T> (where Defaults is a type with default values)",
    "answer_hi": "Partial<T> & Defaults<T> (जहाँ Defaults डिफ़ॉल्ट मानों वाला एक प्रकार है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "How can you create a type that makes nested properties optional?",
    "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो नेस्टेड गुणों को वैकल्पिक बनाता है?",
    "options_en": ["Using recursive conditional types with Partial", "Partial<T> for each level", "DeepPartial<T> custom type", "Both A and C"],
    "options_hi": ["Partial के साथ पुनरावर्ती सशर्त प्रकारों का उपयोग करना", "प्रत्येक स्तर के लिए Partial<T>", "DeepPartial<T> कस्टम प्रकार", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is the result of Parameters<typeof setTimeout>?",
    "question_hi": "Parameters<typeof setTimeout> का परिणाम क्या है?",
    "options_en": ["[Function, number, ...any[]]", "[() => void, number]", "[(...args: any[]) => void, number, ...any[]]", "Function[]"],
    "options_hi": ["[Function, number, ...any[]]", "[() => void, number]", "[(...args: any[]) => void, number, ...any[]]", "Function[]"],
    "answer_en": "[(...args: any[]) => void, number, ...any[]]",
    "answer_hi": "[(...args: any[]) => void, number, ...any[]]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "How can you get the type of the first parameter of a function?",
    "question_hi": "आप किसी फ़ंक्शन के पहले पैरामीटर का प्रकार कैसे प्राप्त कर सकते हैं?",
    "options_en": ["Parameters<T>[0]", "FirstParam<T> using conditional types", "Pick<Parameters<T>, 0>", "All of the above"],
    "options_hi": ["Parameters<T>[0]", "सशर्त प्रकारों का उपयोग करके FirstParam<T>", "Pick<Parameters<T>, 0>", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does ReturnType<typeof JSON.parse> return?",
    "question_hi": "ReturnType<typeof JSON.parse> क्या लौटाता है?",
    "options_en": ["any", "unknown", "string | number | boolean | null | object | array", "JSONValue"],
    "options_hi": ["any", "unknown", "string | number | boolean | null | object | array", "JSONValue"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "How can you create a factory function type using InstanceType?",
    "question_hi": "आप InstanceType का उपयोग करके एक फ़ैक्टरी फ़ंक्शन प्रकार कैसे बना सकते हैं?",
    "options_en": ["(...args: ConstructorParameters<T>) => InstanceType<T>", "() => InstanceType<T>", "new () => InstanceType<T>", "(args: any[]) => InstanceType<T>"],
    "options_hi": ["(...args: ConstructorParameters<T>) => InstanceType<T>", "() => InstanceType<T>", "new () => InstanceType<T>", "(args: any[]) => InstanceType<T>"],
    "answer_en": "(...args: ConstructorParameters<T>) => InstanceType<T>",
    "answer_hi": "(...args: ConstructorParameters<T>) => InstanceType<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is a common use case for OmitThisParameter?",
    "question_hi": "OmitThisParameter के लिए एक सामान्य उपयोग मामला क्या है?",
    "options_en": ["Wrapping functions that have explicit 'this' types", "Removing 'this' from all functions", "Creating bound methods", "Converting methods to functions"],
    "options_hi": ["स्पष्ट 'this' प्रकार वाले कार्यों को लपेटना", "सभी कार्यों से 'this' हटाना", "बाउंड मेथड बनाना", "विधियों को कार्यों में बदलना"],
    "answer_en": "Wrapping functions that have explicit 'this' types",
    "answer_hi": "स्पष्ट 'this' प्रकार वाले कार्यों को लपेटना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "How can you create a type-safe dictionary with string keys and specific value types?",
    "question_hi": "आप स्ट्रिंग कुंजियों और विशिष्ट मान प्रकारों के साथ एक टाइप-सेफ शब्दकोश कैसे बना सकते हैं?",
    "options_en": ["Record<string, ValueType>", "{ [key: string]: ValueType }", "Both A and B", "Map<string, ValueType>"],
    "options_hi": ["Record<string, ValueType>", "{ [key: string]: ValueType }", "A और B दोनों", "Map<string, ValueType>"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is the TypeScript version when Utility Types were first introduced?",
    "question_hi": "TypeScript संस्करण क्या है जब Utility Types पहली बार पेश किए गए थे?",
    "options_en": ["TypeScript 2.1", "TypeScript 2.8", "TypeScript 3.0", "TypeScript 3.4"],
    "options_hi": ["TypeScript 2.1", "TypeScript 2.8", "TypeScript 3.0", "TypeScript 3.4"],
    "answer_en": "TypeScript 2.1",
    "answer_hi": "TypeScript 2.1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which Utility Type was added in TypeScript 2.8?",
    "question_hi": "TypeScript 2.8 में कौन सा Utility Type जोड़ा गया था?",
    "options_en": ["Exclude, Extract, NonNullable", "Partial, Required, Readonly", "Pick, Omit, Record", "Parameters, ReturnType"],
    "options_hi": ["Exclude, Extract, NonNullable", "Partial, Required, Readonly", "Pick, Omit, Record", "Parameters, ReturnType"],
    "answer_en": "Exclude, Extract, NonNullable",
    "answer_hi": "Exclude, Extract, NonNullable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What TypeScript version introduced Awaited<T>?",
    "question_hi": "किस TypeScript संस्करण ने Awaited<T> पेश किया?",
    "options_en": ["TypeScript 4.5", "TypeScript 4.0", "TypeScript 3.9", "TypeScript 4.8"],
    "options_hi": ["TypeScript 4.5", "TypeScript 4.0", "TypeScript 3.9", "TypeScript 4.8"],
    "answer_en": "TypeScript 4.5",
    "answer_hi": "TypeScript 4.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "How can you create a type that extracts all function properties from an interface?",
    "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो एक इंटरफ़ेस से सभी फ़ंक्शन गुणों को निकालता है?",
    "options_en": ["Pick<T, FunctionProperties<T>> using conditional types", "Record<keyof T, Function>", "Extract<T, Function>", "Omit<T, NonFunctionProperties<T>>"],
    "options_hi": ["सशर्त प्रकारों का उपयोग करके Pick<T, FunctionProperties<T>>", "Record<keyof T, Function>", "Extract<T, Function>", "Omit<T, NonFunctionProperties<T>>"],
    "answer_en": "Pick<T, FunctionProperties<T>> using conditional types",
    "answer_hi": "सशर्त प्रकारों का उपयोग करके Pick<T, FunctionProperties<T>>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the difference between 'keyof T' and 'keyof Partial<T>'?",
    "question_hi": "'keyof T' और 'keyof Partial<T>' में क्या अंतर है?",
    "options_en": ["They are the same set of keys", "Partial<T> has fewer keys", "keyof T includes optional keys", "Partial<T> adds new keys"],
    "options_hi": ["वे कुंजियों का एक ही सेट हैं", "Partial<T> में कम कुंजियाँ हैं", "keyof T में वैकल्पिक कुंजियाँ शामिल हैं", "Partial<T> नई कुंजियाँ जोड़ता है"],
    "answer_en": "They are the same set of keys",
    "answer_hi": "वे कुंजियों का एक ही सेट हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "How can you create a type that makes a specific property required and others optional?",
    "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो एक विशिष्ट गुण को आवश्यक और अन्य को वैकल्पिक बनाता है?",
    "options_en": ["Required<Pick<T, K>> & Partial<Omit<T, K>>", "Partial<T> & Required<Pick<T, K>>", "Both A and B", "Omit<T, K> & Required<Pick<T, K>>"],
    "options_hi": ["Required<Pick<T, K>> & Partial<Omit<T, K>>", "Partial<T> & Required<Pick<T, K>>", "A और B दोनों", "Omit<T, K> & Required<Pick<T, K>>"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does Pick<T, keyof T> return?",
    "question_hi": "Pick<T, keyof T> क्या लौटाता है?",
    "options_en": ["T (the original type)", "Partial<T>", "Required<T>", "never"],
    "options_hi": ["T (मूल प्रकार)", "Partial<T>", "Required<T>", "never"],
    "answer_en": "T (the original type)",
    "answer_hi": "T (मूल प्रकार)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What does Omit<T, keyof T> return?",
    "question_hi": "Omit<T, keyof T> क्या लौटाता है?",
    "options_en": ["{} (empty object type)", "never", "any", "unknown"],
    "options_hi": ["{} (खाली वस्तु प्रकार)", "never", "any", "unknown"],
    "answer_en": "{} (empty object type)",
    "answer_hi": "{} (खाली वस्तु प्रकार)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "How can you create a type that requires at least one property from an object?",
    "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जिसके लिए किसी वस्तु से कम से कम एक गुण की आवश्यकता हो?",
    "options_en": ["Using union of Pick<T, K> for each K in keyof T", "Partial<T> & { [P in keyof T]?: T[P] }", "AtLeastOne<T> custom type", "Both A and C"],
    "options_hi": ["keyof T में प्रत्येक K के लिए Pick<T, K> का संघ उपयोग करना", "Partial<T> & { [P in keyof T]?: T[P] }", "AtLeastOne<T> कस्टम प्रकार", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the result of Record<'id' | 'name', string>?",
    "question_hi": "Record<'id' | 'name', string> का परिणाम क्या है?",
    "options_en": ["{ id: string; name: string }", "Record<string, string>", "[id: string, name: string]", "{ id: string } | { name: string }"],
    "options_hi": ["{ id: string; name: string }", "Record<string, string>", "[id: string, name: string]", "{ id: string } | { name: string }"],
    "answer_en": "{ id: string; name: string }",
    "answer_hi": "{ id: string; name: string }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "How does Exclude work with never type?",
    "question_hi": "Exclude never प्रकार के साथ कैसे काम करता है?",
    "options_en": ["Exclude<T, never> returns T", "Exclude<never, T> returns never", "Both A and B", "Exclude with never always returns never"],
    "options_hi": ["Exclude<T, never> T लौटाता है", "Exclude<never, T> never लौटाता है", "A और B दोनों", "never के साथ Exclude हमेशा never लौटाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What does Extract<T, never> return?",
    "question_hi": "Extract<T, never> क्या लौटाता है?",
    "options_en": ["never", "T", "unknown", "any"],
    "options_hi": ["never", "T", "unknown", "any"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "How can you create a type that converts all properties to getter methods?",
    "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो सभी गुणों को गेटर विधियों में बदलता है?",
    "options_en": ["{ [P in keyof T as `get${Capitalize<P>}`]: () => T[P] }", "Record<`get${Capitalize<keyof T>}`, () => T[keyof T]>", "Pick<T, keyof T> & { getters: T }", "Partial<T> & { get: () => T }"],
    "options_hi": ["{ [P in keyof T as `get${Capitalize<P>}`]: () => T[P] }", "Record<`get${Capitalize<keyof T>}`, () => T[keyof T]>", "Pick<T, keyof T> & { getters: T }", "Partial<T> & { get: () => T }"],
    "answer_en": "{ [P in keyof T as `get${Capitalize<P>}`]: () => T[P] }",
    "answer_hi": "{ [P in keyof T as `get${Capitalize<P>}`]: () => T[P] }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the purpose of intrinsic string manipulation types?",
    "question_hi": "आंतरिक स्ट्रिंग मैनिपुलेशन प्रकारों का उद्देश्य क्या है?",
    "options_en": ["To perform string transformations at type level", "To manipulate strings at runtime", "To create string utilities", "To replace template literals"],
    "options_hi": ["प्रकार स्तर पर स्ट्रिंग परिवर्तन करने के लिए", "रनटाइम पर स्ट्रिंग्स में हेरफेर करने के लिए", "स्ट्रिंग उपयोगिताएँ बनाने के लिए", "टेम्पलेट शाब्दिक को बदलने के लिए"],
    "answer_en": "To perform string transformations at type level",
    "answer_hi": "प्रकार स्तर पर स्ट्रिंग परिवर्तन करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "How can you create a type that makes all properties nullable?",
    "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो सभी गुणों को nullable बनाता है?",
    "options_en": ["{ [P in keyof T]: T[P] | null }", "Partial<T> & { [P in keyof T]?: T[P] | null }", "Record<keyof T, T[keyof T] | null>", "All of the above"],
    "options_hi": ["{ [P in keyof T]: T[P] | null }", "Partial<T> & { [P in keyof T]?: T[P] | null }", "Record<keyof T, T[keyof T] | null>", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "How can you get the type of the first parameter of a function?",
    "question_hi": "आप किसी फ़ंक्शन के पहले पैरामीटर का प्रकार कैसे प्राप्त कर सकते हैं?",
    "options_en": ["Parameters<T>[0]", "FirstParam<T> using conditional types", "Pick<Parameters<T>, 0>", "All of the above"],
    "options_hi": ["Parameters<T>[0]", "सशर्त प्रकारों का उपयोग करके FirstParam<T>", "Pick<Parameters<T>, 0>", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "How can you extract the type of array elements from Array<T>?",
    "question_hi": "आप Array<T> से सरणी तत्वों का प्रकार कैसे निकाल सकते हैं?",
    "options_en": ["T extends Array<infer U> ? U : never", "Parameters<Array<T>[number]>", "ReturnType<Array<T>>", "InstanceType<Array<T>>"],
    "options_hi": ["T extends Array<infer U> ? U : never", "Parameters<Array<T>[number]>", "ReturnType<Array<T>>", "InstanceType<Array<T>>"],
    "answer_en": "T extends Array<infer U> ? U : never",
    "answer_hi": "T extends Array<infer U> ? U : never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the difference between Record<string, any> and object type?",
    "question_hi": "Record<string, any> और object प्रकार में क्या अंतर है?",
    "options_en": ["Record<string, any> allows indexed access, object doesn't", "They are identical", "object is more restrictive", "Record is for arrays only"],
    "options_hi": ["Record<string, any> अनुक्रमित पहुंच की अनुमति देता है, object नहीं देता", "वे समान हैं", "object अधिक प्रतिबंधक है", "Record केवल सरणियों के लिए है"],
    "answer_en": "Record<string, any> allows indexed access, object doesn't",
    "answer_hi": "Record<string, any> अनुक्रमित पहुंच की अनुमति देता है, object नहीं देता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "How can you create a type that requires exactly one property from a set?",
    "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जिसके लिए एक सेट से बिल्कुल एक गुण की आवश्यकता हो?",
    "options_en": ["Using XOR type pattern with union and intersection", "Pick<T, K> for each K", "Required<Pick<T, K>>", "Partial<T> & { [P in K]: T[P] }"],
    "options_hi": ["संघ और प्रतिच्छेदन के साथ XOR प्रकार पैटर्न का उपयोग करना", "प्रत्येक K के लिए Pick<T, K>", "Required<Pick<T, K>>", "Partial<T> & { [P in K]: T[P] }"],
    "answer_en": "Using XOR type pattern with union and intersection",
    "answer_hi": "संघ और प्रतिच्छेदन के साथ XOR प्रकार पैटर्न का उपयोग करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What does Readonly<Partial<T>> produce?",
    "question_hi": "Readonly<Partial<T>> क्या उत्पन्न करता है?",
    "options_en": ["Same as Partial<Readonly<T>>", "Different from Partial<Readonly<T>>", "An error", "Required<T>"],
    "options_hi": ["Partial<Readonly<T>> के समान", "Partial<Readonly<T>> से भिन्न", "एक त्रुटि", "Required<T>"],
    "answer_en": "Same as Partial<Readonly<T>>",
    "answer_hi": "Partial<Readonly<T>> के समान",
    "attempted": false,
    "selected": ""
  },
    {
        "num": 86,
        "question_en": "How can you create a type that makes all string properties uppercase?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो सभी स्ट्रिंग गुणों को अपरकेस बनाता है?",
        "options_en": ["{ [P in keyof T as Uppercase<P>]: T[P] }", "Record<Uppercase<keyof T>, T[keyof T]>", "Pick<T, Uppercase<keyof T>>", "Partial<T> & { [P in Uppercase<keyof T>]: T[P] }"],
        "options_hi": ["{ [P in keyof T as Uppercase<P>]: T[P] }", "Record<Uppercase<keyof T>, T[keyof T]>", "Pick<T, Uppercase<keyof T>>", "Partial<T> & { [P in Uppercase<keyof T>]: T[P] }"],
        "answer_en": "{ [P in keyof T as Uppercase<P>]: T[P] }",
        "answer_hi": "{ [P in keyof T as Uppercase<P>]: T[P] }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the performance impact of using utility types?",
        "question_hi": "utility types का उपयोग करने का प्रदर्शन प्रभाव क्या है?",
        "options_en": ["No runtime impact, only compile-time", "Small runtime overhead", "Significant runtime cost", "Depends on the utility type"],
        "options_hi": ["कोई रनटाइम प्रभाव नहीं, केवल कंपाइल-टाइम", "छोटा रनटाइम ओवरहेड", "महत्वपूर्ण रनटाइम लागत", "utility type पर निर्भर करता है"],
        "answer_en": "No runtime impact, only compile-time",
        "answer_hi": "कोई रनटाइम प्रभाव नहीं, केवल कंपाइल-टाइम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How can you create a type that excludes all optional properties?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो सभी वैकल्पिक गुणों को बाहर करता है?",
        "options_en": ["Pick<T, RequiredProperties<T>> using conditional types", "Required<T>", "Exclude<T, Partial<T>>", "Omit<T, OptionalProperties<T>>"],
        "options_hi": ["सशर्त प्रकारों का उपयोग करके Pick<T, RequiredProperties<T>>", "Required<T>", "Exclude<T, Partial<T>>", "Omit<T, OptionalProperties<T>>"],
        "answer_en": "Pick<T, RequiredProperties<T>> using conditional types",
        "answer_hi": "सशर्त प्रकारों का उपयोग करके Pick<T, RequiredProperties<T>>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What does Pick<T, never> return?",
        "question_hi": "Pick<T, never> क्या लौटाता है?",
        "options_en": ["{} (empty object)", "never", "T", "unknown"],
        "options_hi": ["{} (खाली वस्तु)", "never", "T", "unknown"],
        "answer_en": "{} (empty object)",
        "answer_hi": "{} (खाली वस्तु)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How can you create a type that includes only methods with specific parameters?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जिसमें केवल विशिष्ट पैरामीटर वाली विधियाँ शामिल हों?",
        "options_en": ["Using conditional types to filter methods", "Pick<T, Function> & { parameters: P }", "Record<MethodName, FunctionWithParams>", "Extract<T, (args: P) => any>"],
        "options_hi": ["विधियों को फ़िल्टर करने के लिए सशर्त प्रकारों का उपयोग करना", "Pick<T, Function> & { parameters: P }", "Record<MethodName, FunctionWithParams>", "Extract<T, (args: P) => any>"],
        "answer_en": "Using conditional types to filter methods",
        "answer_hi": "विधियों को फ़िल्टर करने के लिए सशर्त प्रकारों का उपयोग करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the result of Exclude<string | number, string>?",
        "question_hi": "Exclude<string | number, string> का परिणाम क्या है?",
        "options_en": ["number", "string", "never", "string | number"],
        "options_hi": ["number", "string", "never", "string | number"],
        "answer_en": "number",
        "answer_hi": "number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the result of Extract<string | number, string>?",
        "question_hi": "Extract<string | number, string> का परिणाम क्या है?",
        "options_en": ["string", "number", "never", "string | number"],
        "options_hi": ["string", "number", "never", "string | number"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How can you create a type that makes all properties of a union optional?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो एक संघ के सभी गुणों को वैकल्पिक बनाता है?",
        "options_en": ["Partial<T> where T is a union", "T extends any ? Partial<T> : never", "Both A and B", "UnionToIntersection<Partial<T>>"],
        "options_hi": ["Partial<T> जहाँ T एक संघ है", "T extends any ? Partial<T> : never", "A और B दोनों", "UnionToIntersection<Partial<T>>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does Awaited<Promise<Promise<string>>> return?",
        "question_hi": "Awaited<Promise<Promise<string>>> क्या लौटाता है?",
        "options_en": ["string", "Promise<string>", "Promise<Promise<string>>", "any"],
        "options_hi": ["string", "Promise<string>", "Promise<Promise<string>>", "any"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How can you create a type that extracts all numeric property names?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो सभी संख्यात्मक गुण नामों को निकालता है?",
        "options_en": ["Extract<keyof T, `${number}`>", "Pick<T, number>", "Record<number, T>", "Omit<T, string>"],
        "options_hi": ["Extract<keyof T, `${number}`>", "Pick<T, number>", "Record<number, T>", "Omit<T, string>"],
        "answer_en": "Extract<keyof T, `${number}`>",
        "answer_hi": "Extract<keyof T, `${number}`>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the difference between Parameters and ConstructorParameters?",
        "question_hi": "Parameters और ConstructorParameters में क्या अंतर है?",
        "options_en": ["ConstructorParameters extracts from constructors, Parameters from functions", "They are identical", "Parameters doesn't work with classes", "ConstructorParameters returns instance type"],
        "options_hi": ["ConstructorParameters कंस्ट्रक्टर से निकालता है, Parameters फ़ंक्शन से", "वे समान हैं", "Parameters कक्षाओं के साथ काम नहीं करता", "ConstructorParameters उदाहरण प्रकार लौटाता है"],
        "answer_en": "ConstructorParameters extracts from constructors, Parameters from functions",
        "answer_hi": "ConstructorParameters कंस्ट्रक्टर से निकालता है, Parameters फ़ंक्शन से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How can you create a type that converts union to intersection?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जो संघ को प्रतिच्छेदन में बदलता है?",
        "options_en": ["UnionToIntersection<T> using conditional types", "T & T", "Pick<T, keyof T>", "Record<keyof T, T>"],
        "options_hi": ["सशर्त प्रकारों का उपयोग करके UnionToIntersection<T>", "T & T", "Pick<T, keyof T>", "Record<keyof T, T>"],
        "answer_en": "UnionToIntersection<T> using conditional types",
        "answer_hi": "सशर्त प्रकारों का उपयोग करके UnionToIntersection<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does NonNullable<string | null | undefined> return?",
        "question_hi": "NonNullable<string | null | undefined> क्या लौटाता है?",
        "options_en": ["string", "string | null", "string | undefined", "never"],
        "options_hi": ["string", "string | null", "string | undefined", "never"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How can you create a type that requires all properties to be functions?",
        "question_hi": "आप एक ऐसा प्रकार कैसे बना सकते हैं जिसके लिए सभी गुणों को कार्य होने की आवश्यकता हो?",
        "options_en": ["{ [P in keyof T]: T[P] extends Function ? T[P] : never }", "Record<keyof T, Function>", "Pick<T, Function>", "Extract<T, Function>"],
        "options_hi": ["{ [P in keyof T]: T[P] extends Function ? T[P] : never }", "Record<keyof T, Function>", "Pick<T, Function>", "Extract<T, Function>"],
        "answer_en": "{ [P in keyof T]: T[P] extends Function ? T[P] : never }",
        "answer_hi": "{ [P in keyof T]: T[P] extends Function ? T[P] : never }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the main advantage of using TypeScript Utility Types?",
        "question_hi": "TypeScript Utility Types का उपयोग करने का मुख्य लाभ क्या है?",
        "options_en": ["Reduce boilerplate and create complex type transformations easily", "Improve runtime performance", "Make code shorter", "Replace JavaScript entirely"],
        "options_hi": ["बॉयलरप्लेट कम करें और जटिल प्रकार परिवर्तन आसानी से बनाएं", "रनटाइम प्रदर्शन में सुधार करें", "कोड को छोटा बनाएं", "JavaScript को पूरी तरह से बदलें"],
        "answer_en": "Reduce boilerplate and create complex type transformations easily",
        "answer_hi": "बॉयलरप्लेट कम करें और जटिल प्रकार परिवर्तन आसानी से बनाएं",
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