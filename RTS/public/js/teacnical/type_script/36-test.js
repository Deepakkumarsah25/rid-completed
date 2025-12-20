const questions = [
  {
    "num": 1,
    "question_en": "Which is the correct TypeScript type for textual data?",
    "question_hi": "टेक्स्चुअल डेटा के लिए सही TypeScript टाइप कौन सा है?",
    "options_en": ["string", "text", "character", "varchar"],
    "options_hi": ["string", "text", "character", "varchar"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What TypeScript type handles both integers and decimals?",
    "question_hi": "कौन सा TypeScript टाइप पूर्णांक और दशमलव दोनों को हैंडल करता है?",
    "options_en": ["number", "int", "float", "numeric"],
    "options_hi": ["number", "int", "float", "numeric"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which type is used for true/false values in TypeScript?",
    "question_hi": "TypeScript में true/false मानों के लिए कौन सा टाइप प्रयोग किया जाता है?",
    "options_en": ["boolean", "bool", "logic", "binary"],
    "options_hi": ["boolean", "bool", "logic", "binary"],
    "answer_en": "boolean",
    "answer_hi": "boolean",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What type indicates a function doesn't return any value?",
    "question_hi": "कौन सा टाइप इंगित करता है कि एक फंक्शन कोई मान वापस नहीं करता?",
    "options_en": ["void", "null", "undefined", "never"],
    "options_hi": ["void", "null", "undefined", "never"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which type represents values that never occur in TypeScript?",
    "question_hi": "TypeScript में कौन सा टाइप ऐसे मानों को दर्शाता है जो कभी नहीं होते?",
    "options_en": ["never", "unknown", "any", "empty"],
    "options_hi": ["never", "unknown", "any", "empty"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the type of the primitive value 'null' in TypeScript?",
    "question_hi": "TypeScript में प्रिमिटिव वैल्यू 'null' का टाइप क्या है?",
    "options_en": ["null", "object", "undefined", "any"],
    "options_hi": ["null", "object", "undefined", "any"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which type-safe alternative to 'any' was introduced in TypeScript 3.0?",
    "question_hi": "'any' का कौन सा टाइप-सेफ विकल्प TypeScript 3.0 में पेश किया गया?",
    "options_en": ["unknown", "object", "void", "generic"],
    "options_hi": ["unknown", "object", "void", "generic"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What primitive type is used for very large integers in TypeScript?",
    "question_hi": "TypeScript में बहुत बड़े पूर्णांकों के लिए कौन सा प्रिमिटिव टाइप प्रयोग किया जाता है?",
    "options_en": ["bigint", "number", "long", "BigInteger"],
    "options_hi": ["bigint", "number", "long", "BigInteger"],
    "answer_en": "bigint",
    "answer_hi": "bigint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "When no type annotation is provided, what does TypeScript use?",
    "question_hi": "जब कोई टाइप एनोटेशन प्रदान नहीं किया जाता, तो TypeScript क्या प्रयोग करता है?",
    "options_en": ["Type inference", "any type", "unknown type", "object type"],
    "options_hi": ["टाइप इंफरेंस", "any टाइप", "unknown टाइप", "object टाइप"],
    "answer_en": "Type inference",
    "answer_hi": "टाइप इंफरेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which type represents all non-primitive values in TypeScript?",
    "question_hi": "TypeScript में सभी गैर-प्रिमिटिव मानों को कौन सा टाइप दर्शाता है?",
    "options_en": ["object", "any", "class", "reference"],
    "options_hi": ["object", "any", "class", "reference"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is a literal type that represents exact string values?",
    "question_hi": "एक लिटरल टाइप क्या है जो सटीक स्ट्रिंग मानों को दर्शाता है?",
    "options_en": ["String literal type", "Exact string type", "Fixed string", "Constant string"],
    "options_hi": ["स्ट्रिंग लिटरल टाइप", "सटीक स्ट्रिंग टाइप", "फिक्स्ड स्ट्रिंग", "कॉन्स्टेंट स्ट्रिंग"],
    "answer_en": "String literal type",
    "answer_hi": "स्ट्रिंग लिटरल टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does a numeric literal type represent?",
    "question_hi": "एक न्यूमेरिक लिटरल टाइप क्या दर्शाता है?",
    "options_en": ["A specific numeric value", "Any number", "Integer values", "Floating values"],
    "options_hi": ["एक विशिष्ट संख्यात्मक मान", "कोई भी संख्या", "पूर्णांक मान", "दशमलव मान"],
    "answer_en": "A specific numeric value",
    "answer_hi": "एक विशिष्ट संख्यात्मक मान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the purpose of union types in TypeScript?",
    "question_hi": "TypeScript में यूनियन टाइप्स का उद्देश्य क्या है?",
    "options_en": ["To allow multiple possible types", "To combine types", "To create type unions", "To merge interfaces"],
    "options_hi": ["कई संभावित टाइप्स की अनुमति देने के लिए", "टाइप्स को संयोजित करने के लिए", "टाइप यूनियन्स बनाने के लिए", "इंटरफेस मर्ज करने के लिए"],
    "answer_en": "To allow multiple possible types",
    "answer_hi": "कई संभावित टाइप्स की अनुमति देने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which symbol is used to create union types?",
    "question_hi": "यूनियन टाइप्स बनाने के लिए कौन सा प्रतीक प्रयोग किया जाता है?",
    "options_en": ["|", "&", "||", "or"],
    "options_hi": ["|", "&", "||", "or"],
    "answer_en": "|",
    "answer_hi": "|",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What do intersection types combine?",
    "question_hi": "इंटरसेक्शन टाइप्स क्या संयोजित करते हैं?",
    "options_en": ["Multiple types into one", "Only interfaces", "Classes and interfaces", "Primitive types"],
    "options_hi": ["कई टाइप्स को एक में", "केवल इंटरफेस", "क्लासेस और इंटरफेस", "प्रिमिटिव टाइप्स"],
    "answer_en": "Multiple types into one",
    "answer_hi": "कई टाइप्स को एक में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What symbol creates intersection types?",
    "question_hi": "कौन सा प्रतीक इंटरसेक्शन टाइप्स बनाता है?",
    "options_en": ["&", "|", "+", "and"],
    "options_hi": ["&", "|", "+", "and"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What keyword creates type aliases in TypeScript?",
    "question_hi": "TypeScript में टाइप अलियासेस बनाने के लिए कौन सा कीवर्ड प्रयोग किया जाता है?",
    "options_en": ["type", "alias", "typedef", "interface"],
    "options_hi": ["type", "alias", "typedef", "interface"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What are the two syntaxes for declaring arrays of numbers?",
    "question_hi": "नंबर्स की ऐरे डिक्लेयर करने के लिए दो सिंटैक्स कौन से हैं?",
    "options_en": ["number[] and Array<number>", "num[] and Array<num>", "[number] and List<number>", "Array<number> only"],
    "options_hi": ["number[] और Array<number>", "num[] और Array<num>", "[number] और List<number>", "केवल Array<number>"],
    "answer_en": "number[] and Array<number>",
    "answer_hi": "number[] और Array<number>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What distinguishes tuples from regular arrays?",
    "question_hi": "ट्यूपल्स को नियमित ऐरे से क्या अलग करता है?",
    "options_en": ["Fixed length and known element types", "Immutable nature", "Faster access", "Different methods"],
    "options_hi": ["फिक्स्ड लंबाई और ज्ञात एलिमेंट टाइप्स", "अपरिवर्तनीय प्रकृति", "तेज़ एक्सेस", "अलग-अलग मेथड्स"],
    "answer_en": "Fixed length and known element types",
    "answer_hi": "फिक्स्ड लंबाई और ज्ञात एलिमेंट टाइप्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "How is a tuple with string and number elements declared?",
    "question_hi": "स्ट्रिंग और नंबर एलिमेंट्स वाला ट्यूपल कैसे डिक्लेयर किया जाता है?",
    "options_en": ["[string, number]", "tuple<string, number>", "Array<string, number>", "(string, number)"],
    "options_hi": ["[string, number]", "tuple<string, number>", "Array<string, number>", "(string, number)"],
    "answer_en": "[string, number]",
    "answer_hi": "[string, number]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does the 'enum' keyword define?",
    "question_hi": "'enum' कीवर्ड क्या डिफाइन करता है?",
    "options_en": ["A collection of named constants", "An enumeration type", "A set of related values", "All of these"],
    "options_hi": ["नामित कॉन्स्टेंट्स का संग्रह", "एक एन्युमरेशन टाइप", "संबंधित मानों का समूह", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What are the primary enum types in TypeScript?",
    "question_hi": "TypeScript में प्राथमिक एनम टाइप्स कौन से हैं?",
    "options_en": ["Numeric and String enums", "Number and Text enums", "Value and Label enums", "Standard and Const enums"],
    "options_hi": ["न्यूमेरिक और स्ट्रिंग एनम्स", "नंबर और टेक्स्ट एनम्स", "वैल्यू और लेबल एनम्स", "स्टैंडर्ड और कॉन्स्ट एनम्स"],
    "answer_en": "Numeric and String enums",
    "answer_hi": "न्यूमेरिक और स्ट्रिंग एनम्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is type assertion's purpose?",
    "question_hi": "टाइप एसर्शन का उद्देश्य क्या है?",
    "options_en": ["To inform compiler about type", "To convert types", "To validate types", "To create new types"],
    "options_hi": ["कंपाइलर को टाइप के बारे में सूचित करने के लिए", "टाइप्स बदलने के लिए", "टाइप्स वैलिडेट करने के लिए", "नए टाइप्स बनाने के लिए"],
    "answer_en": "To inform compiler about type",
    "answer_hi": "कंपाइलर को टाइप के बारे में सूचित करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What are type assertion syntax options?",
    "question_hi": "टाइप एसर्शन सिंटैक्स विकल्प क्या हैं?",
    "options_en": ["as and angle-bracket", "assert and cast", "type and as", "convert and assert"],
    "options_hi": ["as और एंगल-ब्रैकेट", "assert और cast", "type और as", "convert और assert"],
    "answer_en": "as and angle-bracket",
    "answer_hi": "as और एंगल-ब्रैकेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does type inference mean?",
    "question_hi": "टाइप इंफरेंस का क्या अर्थ है?",
    "options_en": ["Automatic type determination", "Manual type specification", "Runtime type checking", "Type conversion"],
    "options_hi": ["स्वचालित टाइप निर्धारण", "मैनुअल टाइप विनिर्देश", "रनटाइम टाइप चेकिंग", "टाइप रूपांतरण"],
    "answer_en": "Automatic type determination",
    "answer_hi": "स्वचालित टाइप निर्धारण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is contextual typing?",
    "question_hi": "कॉन्टेक्स्चुअल टाइपिंग क्या है?",
    "options_en": ["Inference from surrounding context", "Based on variable name", "Dynamic typing approach", "Context-based validation"],
    "options_hi": ["आसपास के संदर्भ से अनुमान", "वेरिएबल नाम पर आधारित", "डायनेमिक टाइपिंग दृष्टिकोण", "संदर्भ-आधारित मान्यता"],
    "answer_en": "Inference from surrounding context",
    "answer_hi": "आसपास के संदर्भ से अनुमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What characterizes structural typing?",
    "question_hi": "स्ट्रक्चरल टाइपिंग की क्या विशेषता है?",
    "options_en": ["Compatibility based on structure", "Name-based compatibility", "Hierarchy-based typing", "Static structure checking"],
    "options_hi": ["संरचना पर आधारित संगतता", "नाम-आधारित संगतता", "पदानुक्रम-आधारित टाइपिंग", "स्थैतिक संरचना जाँच"],
    "answer_en": "Compatibility based on structure",
    "answer_hi": "संरचना पर आधारित संगतता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What do excess property checks prevent?",
    "question_hi": "एक्सेस प्रॉपर्टी चेक्स क्या रोकते हैं?",
    "options_en": ["Extra properties in object literals", "Missing properties", "Wrong property types", "Property name errors"],
    "options_hi": ["ऑब्जेक्ट लिटरल्स में अतिरिक्त गुण", "गुम गुण", "गलत गुण प्रकार", "गुण नाम त्रुटियाँ"],
    "answer_en": "Extra properties in object literals",
    "answer_hi": "ऑब्जेक्ट लिटरल्स में अतिरिक्त गुण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What defines a conditional type?",
    "question_hi": "कंडीशनल टाइप क्या परिभाषित करता है?",
    "options_en": ["Type dependent on condition", "Type with conditions", "Conditional type checking", "Type for conditions"],
    "options_hi": ["स्थिति पर निर्भर प्रकार", "शर्तों के साथ प्रकार", "सशर्त प्रकार जाँच", "शर्तों के लिए प्रकार"],
    "answer_en": "Type dependent on condition",
    "answer_hi": "स्थिति पर निर्भर प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is a mapped type's function?",
    "question_hi": "मैप्ड टाइप का कार्य क्या है?",
    "options_en": ["Transforms existing type properties", "Maps values to types", "Creates type mappings", "Generates type maps"],
    "options_hi": ["मौजूदा प्रकार गुणों को रूपांतरित करता है", "मानों को प्रकारों में मैप करता है", "प्रकार मैपिंग बनाता है", "प्रकार मैप उत्पन्न करता है"],
    "answer_en": "Transforms existing type properties",
    "answer_hi": "मौजूदा प्रकार गुणों को रूपांतरित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What are template literal types based on?",
    "question_hi": "टेम्पलेट लिटरल टाइप्स किस पर आधारित हैं?",
    "options_en": ["Template literal strings", "String templates", "Template patterns", "Literal templates"],
    "options_hi": ["टेम्पलेट लिटरल स्ट्रिंग्स", "स्ट्रिंग टेम्पलेट्स", "टेम्पलेट पैटर्न", "लिटरल टेम्पलेट्स"],
    "answer_en": "Template literal strings",
    "answer_hi": "टेम्पलेट लिटरल स्ट्रिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does the 'Partial<T>' type do?",
    "question_hi": "'Partial<T>' टाइप क्या करता है?",
    "options_en": ["Makes all T properties optional", "Selects partial properties", "Creates partial types", "Makes some properties optional"],
    "options_hi": ["सभी T गुणों को वैकल्पिक बनाता है", "आंशिक गुणों का चयन करता है", "आंशिक प्रकार बनाता है", "कुछ गुणों को वैकल्पिक बनाता है"],
    "answer_en": "Makes all T properties optional",
    "answer_hi": "सभी T गुणों को वैकल्पिक बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the effect of 'Required<T>'?",
    "question_hi": "'Required<T>' का क्या प्रभाव है?",
    "options_en": ["Makes all properties required", "Requires specific properties", "Validates required fields", "Checks property requirements"],
    "options_hi": ["सभी गुणों को आवश्यक बनाता है", "विशिष्ट गुणों की आवश्यकता है", "आवश्यक फ़ील्ड सत्यापित करता है", "गुण आवश्यकताओं की जाँच करता है"],
    "answer_en": "Makes all properties required",
    "answer_hi": "सभी गुणों को आवश्यक बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "How does 'Readonly<T>' modify properties?",
    "question_hi": "'Readonly<T>' गुणों को कैसे संशोधित करता है?",
    "options_en": ["Makes them immutable", "Makes them read-only", "Prevents modifications", "All of these"],
    "options_hi": ["उन्हें अपरिवर्तनीय बनाता है", "उन्हें केवल-पढ़ने योग्य बनाता है", "संशोधनों को रोकता है", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does 'Pick<T, K>' accomplish?",
    "question_hi": "'Pick<T, K>' क्या हासिल करता है?",
    "options_en": ["Selects subset K from T", "Picks properties from T", "Chooses specific properties", "All of these"],
    "options_hi": ["T से उपसमुच्चय K का चयन करता है", "T से गुण चुनता है", "विशिष्ट गुणों का चयन करता है", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of 'Omit<T, K>'?",
    "question_hi": "'Omit<T, K>' का उद्देश्य क्या है?",
    "options_en": ["Excludes properties K from T", "Omits specified properties", "Removes properties from type", "All of these"],
    "options_hi": ["T से गुण K को बाहर करता है", "निर्दिष्ट गुणों को छोड़ता है", "प्रकार से गुण हटाता है", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What distinguishes 'never' from 'void'?",
    "question_hi": "'never' को 'void' से क्या अलग करता है?",
    "options_en": ["never has no possible values", "void can be undefined", "never indicates unreachable code", "All of these"],
    "options_hi": ["never का कोई संभावित मान नहीं है", "void undefined हो सकता है", "never अप्राप्य कोड को इंगित करता है", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "How is 'unknown' safer than 'any'?",
    "question_hi": "'unknown' 'any' से कैसे सुरक्षित है?",
    "options_en": ["Requires type checking before use", "Prevents arbitrary operations", "Enforces type safety", "All of these"],
    "options_hi": ["उपयोग से पहले प्रकार जाँच की आवश्यकता है", "मनमाना संचालन को रोकता है", "प्रकार सुरक्षा लागू करता है", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What's the relationship between null and undefined?",
    "question_hi": "null और undefined के बीच क्या संबंध है?",
    "options_en": ["Distinct types with different meanings", "Both represent absence", "undefined is default for uninitialized", "All are correct"],
    "options_hi": ["अलग-अलग अर्थ वाले विशिष्ट प्रकार", "दोनों अनुपस्थिति का प्रतिनिधित्व करते हैं", "अप्रारंभीकृत के लिए undefined डिफ़ॉल्ट है", "सभी सही हैं"],
    "answer_en": "All are correct",
    "answer_hi": "सभी सही हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is a type guard's function?",
    "question_hi": "टाइप गार्ड का कार्य क्या है?",
    "options_en": ["Narrows type within scope", "Protects type safety", "Validates type at runtime", "Guards against type errors"],
    "options_hi": ["स्कोप के भीतर प्रकार को संकीर्ण करता है", "प्रकार सुरक्षा की रक्षा करता है", "रनटाइम पर प्रकार सत्यापित करता है", "प्रकार त्रुटियों से बचाता है"],
    "answer_en": "Narrows type within scope",
    "answer_hi": "स्कोप के भीतर प्रकार को संकीर्ण करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does 'typeof' type guard check?",
    "question_hi": "'typeof' टाइप गार्ड क्या जाँचता है?",
    "options_en": ["Primitive types at runtime", "Type of any value", "Variable types", "All JavaScript types"],
    "options_hi": ["रनटाइम पर आदिम प्रकार", "किसी भी मान का प्रकार", "चर प्रकार", "सभी JavaScript प्रकार"],
    "answer_en": "Primitive types at runtime",
    "answer_hi": "रनटाइम पर आदिम प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "When is 'instanceof' type guard used?",
    "question_hi": "'instanceof' टाइप गार्ड कब प्रयोग किया जाता है?",
    "options_en": ["For class instance checking", "To check constructor prototypes", "For custom class types", "All of these"],
    "options_hi": ["कक्षा उदाहरण जाँच के लिए", "कंस्ट्रक्टर प्रोटोटाइप जाँचने के लिए", "कस्टम कक्षा प्रकारों के लिए", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does 'keyof' operator produce?",
    "question_hi": "'keyof' ऑपरेटर क्या उत्पन्न करता है?",
    "options_en": ["Union of property keys", "All property names", "Type of keys", "String or number union"],
    "options_hi": ["गुण कुंजियों का संघ", "सभी गुण नाम", "कुंजियों का प्रकार", "स्ट्रिंग या संख्या संघ"],
    "answer_en": "Union of property keys",
    "answer_hi": "गुण कुंजियों का संघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'typeof' type operator's purpose?",
    "question_hi": "'typeof' टाइप ऑपरेटर का उद्देश्य क्या है?",
    "options_en": ["Capture type of value", "Create type from value", "Infer type automatically", "All of these"],
    "options_hi": ["मान का प्रकार कैप्चर करना", "मान से प्रकार बनाना", "स्वचालित रूप से प्रकार अनुमान लगाना", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does 'as const' assertion achieve?",
    "question_hi": "'as const' अभिकथन क्या प्राप्त करता है?",
    "options_en": ["Deep readonly and literal types", "Constant value assertion", "Immutable type creation", "All of these"],
    "options_hi": ["गहरी केवल पढ़ने योग्य और शाब्दिक प्रकार", "स्थिर मान अभिकथन", "अपरिवर्तनीय प्रकार निर्माण", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is indexed access type?",
    "question_hi": "इंडेक्स्ड एक्सेस टाइप क्या है?",
    "options_en": ["Access type using key", "Type[Key] syntax", "Property type lookup", "All of these"],
    "options_hi": ["कुंजी का उपयोग करके प्रकार एक्सेस करें", "Type[Key] वाक्यविन्यास", "गुण प्रकार खोज", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "How to make property optional in type?",
    "question_hi": "प्रकार में गुण वैकल्पिक कैसे बनाएं?",
    "options_en": ["Add ? after name", "Use optional modifier", "Make it undefined union", "All work"],
    "options_hi": ["नाम के बाद ? जोड़ें", "वैकल्पिक संशोधक का उपयोग करें", "इसे undefined संघ बनाएं", "सभी काम करते हैं"],
    "answer_en": "All work",
    "answer_hi": "सभी काम करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How to make property readonly?",
    "question_hi": "गुण को केवल पढ़ने योग्य कैसे बनाएं?",
    "options_en": ["Add readonly modifier", "Use Readonly utility", "Both methods work", "Only readonly keyword"],
    "options_hi": ["readonly संशोधक जोड़ें", "Readonly उपयोगिता का उपयोग करें", "दोनों विधियाँ काम करती हैं", "केवल readonly कीवर्ड"],
    "answer_en": "Both methods work",
    "answer_hi": "दोनों विधियाँ काम करती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What defines recursive type?",
    "question_hi": "पुनरावर्ती प्रकार क्या परिभाषित करता है?",
    "options_en": ["Type referencing itself", "Self-referential type", "Circular type definition", "All describe it"],
    "options_hi": ["स्वयं को संदर्भित करने वाला प्रकार", "स्व-संदर्भित प्रकार", "परिपत्र प्रकार परिभाषा", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is type widening?",
    "question_hi": "टाइप विडेनिंग क्या है?",
    "options_en": ["Literal to broader type inference", "Type generalization process", "Automatic type expansion", "All describe it"],
    "options_hi": ["शाब्दिक से व्यापक प्रकार अनुमान", "प्रकार सामान्यीकरण प्रक्रिया", "स्वचालित प्रकार विस्तार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is type narrowing?",
    "question_hi": "टाइप नैरोइंग क्या है?",
    "options_en": ["Reducing to more specific type", "Type specialization", "Conditional type refinement", "All describe it"],
    "options_hi": ["अधिक विशिष्ट प्रकार में कमी", "प्रकार विशेषज्ञता", "सशर्त प्रकार शोधन", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is a branded type?",
    "question_hi": "ब्रांडेड टाइप क्या है?",
    "options_en": ["Type with unique brand property", "Nominal typing technique", "Type distinction method", "All describe it"],
    "options_hi": ["अद्वितीय ब्रांड गुण वाला प्रकार", "नाममात्र टाइपिंग तकनीक", "प्रकार भेद विधि", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does Record<K, T> create?",
    "question_hi": "Record<K, T> क्या बनाता है?",
    "options_en": ["Object type with keys K and values T", "Mapping type", "Dictionary type", "All describe it"],
    "options_hi": ["कुंजी K और मान T वाला वस्तु प्रकार", "मैपिंग प्रकार", "शब्दकोश प्रकार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does Exclude<T, U> do?",
    "question_hi": "Exclude<T, U> क्या करता है?",
    "options_en": ["Removes U from union T", "Excludes types", "Filters union members", "All describe it"],
    "options_hi": ["संघ T से U को हटाता है", "प्रकारों को बाहर करता है", "संघ सदस्यों को फ़िल्टर करता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does Extract<T, U> do?",
    "question_hi": "Extract<T, U> क्या करता है?",
    "options_en": ["Extracts U from union T", "Selects matching types", "Filters union for U", "All describe it"],
    "options_hi": ["संघ T से U निकालता है", "मिलान प्रकारों का चयन करता है", "U के लिए संघ को फ़िल्टर करता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does NonNullable<T> do?",
    "question_hi": "NonNullable<T> क्या करता है?",
    "options_en": ["Removes null and undefined", "Creates non-nullable type", "Ensures value existence", "All describe it"],
    "options_hi": ["null और undefined को हटाता है", "गैर-शून्य प्रकार बनाता है", "मान अस्तित्व सुनिश्चित करता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What does Parameters<T> extract?",
    "question_hi": "Parameters<T> क्या निकालता है?",
    "options_en": ["Function parameter types", "Parameters as tuple", "Argument types", "All describe it"],
    "options_hi": ["फ़ंक्शन पैरामीटर प्रकार", "टपल के रूप में पैरामीटर", "तर्क प्रकार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does ReturnType<T> extract?",
    "question_hi": "ReturnType<T> क्या निकालता है?",
    "options_en": ["Function return type", "Type of returned value", "Result type", "All describe it"],
    "options_hi": ["फ़ंक्शन रिटर्न प्रकार", "लौटाए गए मान का प्रकार", "परिणाम प्रकार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does ConstructorParameters<T> extract?",
    "question_hi": "ConstructorParameters<T> क्या निकालता है?",
    "options_en": ["Constructor parameter types", "Newable function params", "Class constructor args", "All describe it"],
    "options_hi": ["कंस्ट्रक्टर पैरामीटर प्रकार", "न्यूएबल फ़ंक्शन पैराम", "कक्षा कंस्ट्रक्टर तर्क", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does InstanceType<T> extract?",
    "question_hi": "InstanceType<T> क्या निकालता है?",
    "options_en": ["Instance type of constructor", "Class instance type", "Type of new expression", "All describe it"],
    "options_hi": ["कंस्ट्रक्टर का उदाहरण प्रकार", "कक्षा उदाहरण प्रकार", "नए अभिव्यक्ति का प्रकार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What does 'this' type represent?",
    "question_hi": "'this' प्रकार क्या दर्शाता है?",
    "options_en": ["Current instance context", "Polymorphic this type", "Dynamic context type", "All describe it"],
    "options_hi": ["वर्तमान उदाहरण संदर्भ", "बहुरूपी this प्रकार", "गतिशील संदर्भ प्रकार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is function type syntax?",
    "question_hi": "फ़ंक्शन टाइप सिंटैक्स क्या है?",
    "options_en": ["(params) => returnType", "Function type literal", "Arrow function type", "All are valid"],
    "options_hi": ["(params) => returnType", "फ़ंक्शन टाइप लिटरल", "ऐरो फ़ंक्शन टाइप", "सभी मान्य हैं"],
    "answer_en": "All are valid",
    "answer_hi": "सभी मान्य हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is a callable interface?",
    "question_hi": "कॉलेबल इंटरफ़ेस क्या है?",
    "options_en": ["Interface with call signature", "Function-like interface", "Can be called like function", "All describe it"],
    "options_hi": ["कॉल सिग्नेचर वाला इंटरफ़ेस", "फ़ंक्शन-जैसा इंटरफ़ेस", "फ़ंक्शन की तरह कॉल किया जा सकता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is a construct signature?",
    "question_hi": "कंस्ट्रक्ट सिग्नेचर क्या है?",
    "options_en": ["Defines constructor type", "Used with new keyword", "Creates constructible types", "All describe it"],
    "options_hi": ["कंस्ट्रक्टर प्रकार को परिभाषित करता है", "नए कीवर्ड के साथ प्रयुक्त", "निर्माण योग्य प्रकार बनाता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is index signature syntax?",
    "question_hi": "इंडेक्स सिग्नेचर सिंटैक्स क्या है?",
    "options_en": ["[key: KeyType]: ValueType", "Index signature pattern", "Dynamic property type", "All describe it"],
    "options_hi": ["[key: KeyType]: ValueType", "इंडेक्स सिग्नेचर पैटर्न", "गतिशील गुण प्रकार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What are method signatures?",
    "question_hi": "मेथड सिग्नेचर्स क्या हैं?",
    "options_en": ["Function signatures in interfaces", "Method type definitions", "Object method types", "All describe it"],
    "options_hi": ["इंटरफेस में फ़ंक्शन सिग्नेचर", "मेथड टाइप डेफिनिशन", "ऑब्जेक्ट मेथड टाइप्स", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What are rest parameters in types?",
    "question_hi": "प्रकारों में रेस्ट पैरामीटर्स क्या हैं?",
    "options_en": ["...args: Type[] syntax", "Variable number of arguments", "Collects remaining params", "All describe it"],
    "options_hi": ["...args: Type[] सिंटैक्स", "तर्कों की परिवर्तनीय संख्या", "शेष पैरामीटर एकत्र करता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "How are optional parameters marked?",
    "question_hi": "वैकल्पिक पैरामीटर्स कैसे चिह्नित होते हैं?",
    "options_en": ["With ? after name", "Optional modifier", "Can be omitted", "All describe it"],
    "options_hi": ["नाम के बाद ? के साथ", "वैकल्पिक संशोधक", "छोड़ा जा सकता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What are default parameters?",
    "question_hi": "डिफ़ॉल्ट पैरामीटर्स क्या हैं?",
    "options_en": ["Parameters with default values", "Optional with default", "Fallback values", "All describe it"],
    "options_hi": ["डिफ़ॉल्ट मान वाले पैरामीटर", "डिफ़ॉल्ट के साथ वैकल्पिक", "फॉलबैक मान", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is function overload syntax?",
    "question_hi": "फ़ंक्शन ओवरलोड सिंटैक्स क्या है?",
    "options_en": ["Multiple call signatures", "Different parameter types", "Variants of function", "All describe it"],
    "options_hi": ["एकाधिक कॉल सिग्नेचर", "विभिन्न पैरामीटर प्रकार", "फ़ंक्शन के वेरिएंट", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What are generic constraints?",
    "question_hi": "जेनेरिक कंस्ट्रेंट्स क्या हैं?",
    "options_en": ["Limits on type parameters", "extends clause in generics", "Type parameter bounds", "All describe it"],
    "options_hi": ["टाइप पैरामीटर्स पर सीमाएँ", "जेनेरिक्स में extends क्लॉज", "टाइप पैरामीटर सीमाएँ", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What are default type parameters?",
    "question_hi": "डिफ़ॉल्ट टाइप पैरामीटर्स क्या हैं?",
    "options_en": ["Generic type defaults", "Fallback type parameters", "Optional type params", "All describe it"],
    "options_hi": ["जेनेरिक टाइप डिफ़ॉल्ट", "फॉलबैक टाइप पैरामीटर्स", "वैकल्पिक टाइप पैराम", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is conditional type syntax?",
    "question_hi": "कंडीशनल टाइप सिंटैक्स क्या है?",
    "options_en": ["T extends U ? X : Y", "Ternary for types", "Type-level condition", "All describe it"],
    "options_hi": ["T extends U ? X : Y", "प्रकारों के लिए त्रिगुण", "टाइप-स्तरीय स्थिति", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What are infer keyword uses?",
    "question_hi": "infer कीवर्ड के उपयोग क्या हैं?",
    "options_en": ["Infer types in conditionals", "Type inference in generics", "Capture type variables", "All describe it"],
    "options_hi": ["सशर्तों में प्रकार अनुमान", "जेनेरिक्स में प्रकार अनुमान", "टाइप वेरिएबल्स कैप्चर करें", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What are distributive conditional types?",
    "question_hi": "डिस्ट्रीब्यूटिव कंडीशनल टाइप्स क्या हैं?",
    "options_en": ["Distribute over union types", "Apply to each union member", "Union type conditionals", "All describe it"],
    "options_hi": ["यूनियन टाइप्स पर वितरित करें", "प्रत्येक संघ सदस्य पर लागू करें", "यूनियन टाइप सशर्त", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is mapped type syntax?",
    "question_hi": "मैप्ड टाइप सिंटैक्स क्या है?",
    "options_en": ["{ [K in keyof T]: U }", "Iterates over keys", "Transforms properties", "All describe it"],
    "options_hi": ["{ [K in keyof T]: U }", "कुंजियों पर पुनरावृत्ति करता है", "गुणों को रूपांतरित करता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What are key remapping features?",
    "question_hi": "कुंजी रीमैपिंग सुविधाएँ क्या हैं?",
    "options_en": ["as clause in mapped types", "Key transformation", "Rename properties", "All describe it"],
    "options_hi": ["मैप्ड टाइप्स में as क्लॉज", "कुंजी परिवर्तन", "गुणों का नाम बदलें", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What are template literal types syntax?",
    "question_hi": "टेम्पलेट लिटरल टाइप्स सिंटैक्स क्या है?",
    "options_en": ["`${Type} text`", "Template string types", "Interpolated types", "All describe it"],
    "options_hi": ["`${Type} text`", "टेम्पलेट स्ट्रिंग टाइप्स", "इंटरपोलेटेड टाइप्स", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What are intrinsic string manipulation types?",
    "question_hi": "इन्ट्रिन्सिक स्ट्रिंग मैनिपुलेशन टाइप्स क्या हैं?",
    "options_en": ["Uppercase, Lowercase, etc.", "Built-in string types", "String utility types", "All describe it"],
    "options_hi": ["Uppercase, Lowercase, आदि", "अंतर्निहित स्ट्रिंग टाइप्स", "स्ट्रिंग उपयोगिता प्रकार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is satisfies operator purpose?",
    "question_hi": "satisfies ऑपरेटर का उद्देश्य क्या है?",
    "options_en": ["Type validation without widening", "Checks type compatibility", "Preserves literal types", "All describe it"],
    "options_hi": ["विस्तार के बिना प्रकार मान्यता", "प्रकार संगतता की जाँच करता है", "शाब्दिक प्रकारों को संरक्षित करता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is const assertion effect?",
    "question_hi": "कॉन्स्ट अभिकथन प्रभाव क्या है?",
    "options_en": ["Narrowest possible inference", "Literal type preservation", "Readonly deep properties", "All describe it"],
    "options_hi": ["संभव संकीर्णतम अनुमान", "शाब्दिक प्रकार संरक्षण", "केवल पढ़ने योग्य गहरे गुण", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What are readonly arrays syntax?",
    "question_hi": "रीडओनली ऐरे सिंटैक्स क्या हैं?",
    "options_en": ["readonly T[]", "ReadonlyArray<T>", "Immutable arrays", "All describe it"],
    "options_hi": ["readonly T[]", "ReadonlyArray<T>", "अपरिवर्तनीय सरणियाँ", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What are tuple readonly modifiers?",
    "question_hi": "टपल रीडओनली मॉडिफायर्स क्या हैं?",
    "options_en": ["readonly modifier", "Immutable tuples", "Const assertions", "All describe it"],
    "options_hi": ["रीडओनली संशोधक", "अपरिवर्तनीय टपल", "कॉन्स्ट अभिकथन", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What are optional tuple elements?",
    "question_hi": "वैकल्पिक टपल एलिमेंट्स क्या हैं?",
    "options_en": ["Elements with ?", "Optional in tuples", "May be undefined", "All describe it"],
    "options_hi": ["? वाले तत्व", "टपल में वैकल्पिक", "undefined हो सकता है", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What are rest elements in tuples?",
    "question_hi": "टपल में रेस्ट एलिमेंट्स क्या हैं?",
    "options_en": ["...Type[] in tuples", "Variable-length tuples", "Rest parameter in tuples", "All describe it"],
    "options_hi": ["टपल में ...Type[]", "परिवर्तनीय-लंबाई टपल", "टपल में रेस्ट पैरामीटर", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What are labeled tuple elements?",
    "question_hi": "लेबल्ड टपल एलिमेंट्स क्या हैं?",
    "options_en": ["Named tuple members", "Elements with labels", "Documentation in tuples", "All describe it"],
    "options_hi": ["नामित टपल सदस्य", "लेबल वाले तत्व", "टपल में दस्तावेज़ीकरण", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is type predicate syntax?",
    "question_hi": "टाइप प्रिडिकेट सिंटैक्स क्या है?",
    "options_en": ["param is Type", "Type guard function", "User-defined type guard", "All describe it"],
    "options_hi": ["param is Type", "टाइप गार्ड फ़ंक्शन", "उपयोगकर्ता-परिभाषित टाइप गार्ड", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What are assertion functions?",
    "question_hi": "अभिकथन फ़ंक्शन क्या हैं?",
    "options_en": ["Functions with asserts", "Runtime type assertions", "Throw on failure", "All describe it"],
    "options_hi": ["asserts वाले फ़ंक्शन", "रनटाइम टाइप अभिकथन", "विफलता पर फेंकें", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What are namespace types?",
    "question_hi": "नेमस्पेस टाइप्स क्या हैं?",
    "options_en": ["Types in namespaces", "Organized type groups", "Module type containers", "All describe it"],
    "options_hi": ["नेमस्पेस में प्रकार", "व्यवस्थित प्रकार समूह", "मॉड्यूल टाइप कंटेनर", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What are module augmentation types?",
    "question_hi": "मॉड्यूल ऑगमेंटेशन टाइप्स क्या हैं?",
    "options_en": ["Extending existing types", "Module type additions", "Declaration merging", "All describe it"],
    "options_hi": ["मौजूदा प्रकारों का विस्तार", "मॉड्यूल टाइप जोड़", "घोषणा विलय", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What are global augmentation types?",
    "question_hi": "ग्लोबल ऑगमेंटेशन टाइप्स क्या हैं?",
    "options_en": ["Extending global scope", "Global type additions", "Window object extension", "All describe it"],
    "options_hi": ["वैश्विक स्कोप का विस्तार", "वैश्विक प्रकार जोड़", "विंडो ऑब्जेक्ट एक्सटेंशन", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What are declaration merging types?",
    "question_hi": "डिक्लेरेशन मर्जिंग टाइप्स क्या हैं?",
    "options_en": ["Multiple declarations merge", "Interface merging", "Namespace merging", "All describe it"],
    "options_hi": ["एकाधिक घोषणाएँ मर्ज", "इंटरफ़ेस मर्जिंग", "नेमस्पेस मर्जिंग", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What are ambient declarations?",
    "question_hi": "एम्बिएंट डिक्लेरेशन्स क्या हैं?",
    "options_en": ["declare keyword usage", "External type declarations", "Declaration files", "All describe it"],
    "options_hi": ["घोषणा कीवर्ड उपयोग", "बाहरी प्रकार घोषणाएँ", "घोषणा फ़ाइलें", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What are .d.ts files?",
    "question_hi": ".d.ts फ़ाइलें क्या हैं?",
    "options_en": ["Declaration files", "Type definition files", "TypeScript declaration files", "All describe it"],
    "options_hi": ["घोषणा फ़ाइलें", "प्रकार परिभाषा फ़ाइलें", "TypeScript घोषणा फ़ाइलें", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What are triple-slash directives?",
    "question_hi": "ट्रिपल-स्लैश डायरेक्टिव्स क्या हैं?",
    "options_en": ["/// reference directives", "Compiler directives", "File references", "All describe it"],
    "options_hi": ["/// संदर्भ निर्देश", "कंपाइलर निर्देश", "फ़ाइल संदर्भ", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What are lib compiler options?",
    "question_hi": "lib कंपाइलर विकल्प क्या हैं?",
    "options_en": ["Library type inclusions", "Built-in type definitions", "Standard library types", "All describe it"],
    "options_hi": ["लाइब्रेरी टाइप इंक्लूजन", "अंतर्निहित प्रकार परिभाषाएँ", "मानक लाइब्रेरी प्रकार", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What are type only imports?",
    "question_hi": "टाइप ओनली इंपोर्ट्स क्या हैं?",
    "options_en": ["import type syntax", "Type-only imports", "No runtime import", "All describe it"],
    "options_hi": ["आयात प्रकार वाक्यविन्यास", "केवल-प्रकार आयात", "कोई रनटाइम आयात नहीं", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What are satisfies vs extends differences?",
    "question_hi": "satisfies vs extends में क्या अंतर हैं?",
    "options_en": ["satisfies checks, extends constrains", "Different purposes", "Type vs generic usage", "All describe it"],
    "options_hi": ["satisfies जाँचता है, extends प्रतिबंधित करता है", "अलग-अलग उद्देश्य", "प्रकार बनाम जेनेरिक उपयोग", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What are variance annotations?",
    "question_hi": "वेरिएंस एनोटेशन क्या हैं?",
    "options_en": ["in, out annotations", "Type parameter variance", "Covariance, contravariance", "All describe it"],
    "options_hi": ["in, out एनोटेशन", "टाइप पैरामीटर भिन्नता", "सहप्रसरण, प्रतिसहप्रसरण", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is TypeScript's structural type system?",
    "question_hi": "TypeScript की स्ट्रक्चरल टाइप सिस्टम क्या है?",
    "options_en": ["Compatibility by structure", "Duck typing", "Shape-based typing", "All describe it"],
    "options_hi": ["संरचना द्वारा संगतता", "बत्तख टाइपिंग", "आकार-आधारित टाइपिंग", "सभी इसका वर्णन करते हैं"],
    "answer_en": "All describe it",
    "answer_hi": "सभी इसका वर्णन करते हैं",
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