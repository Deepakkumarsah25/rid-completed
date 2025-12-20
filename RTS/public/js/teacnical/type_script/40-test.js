const questions = [
    {
        "num": 1,
        "question_en": "Which TypeScript utility type would you use to create a configuration object where all settings are optional?",
        "question_hi": "आप एक कॉन्फ़िगरेशन ऑब्जेक्ट बनाने के लिए किस TypeScript utility type का उपयोग करेंगे जहाँ सभी सेटिंग्स वैकल्पिक हों?",
        "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
        "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How would you ensure that all properties in a user registration form are mandatory?",
        "question_hi": "आप कैसे सुनिश्चित करेंगे कि उपयोगकर्ता पंजीकरण फॉर्म में सभी गुण अनिवार्य हों?",
        "options_en": ["Required<UserForm>", "Partial<UserForm>", "Readonly<UserForm>", "Record<UserForm, true>"],
        "options_hi": ["Required<UserForm>", "Partial<UserForm>", "Readonly<UserForm>", "Record<UserForm, true>"],
        "answer_en": "Required<UserForm>",
        "answer_hi": "Required<UserForm>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which utility type prevents modification of object properties after initialization?",
        "question_hi": "कौन सा utility type आरंभीकरण के बाद ऑब्जेक्ट गुणों में संशोधन को रोकता है?",
        "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Immutable<T>"],
        "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Immutable<T>"],
        "answer_en": "Readonly<T>",
        "answer_hi": "Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "If you only need 'id' and 'name' from a User type, which utility type would you use?",
        "question_hi": "यदि आपको User प्रकार से केवल 'id' और 'name' की आवश्यकता है, तो आप किस utility type का उपयोग करेंगे?",
        "options_en": ["Pick<User, 'id' | 'name'>", "Omit<User, 'email' | 'age'>", "Partial<User>", "Record<'id' | 'name', any>"],
        "options_hi": ["Pick<User, 'id' | 'name'>", "Omit<User, 'email' | 'age'>", "Partial<User>", "Record<'id' | 'name', any>"],
        "answer_en": "Pick<User, 'id' | 'name'>",
        "answer_hi": "Pick<User, 'id' | 'name'>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How would you create a type from User that excludes 'password' and 'ssn' fields?",
        "question_hi": "आप User से एक ऐसा प्रकार कैसे बनाएंगे जो 'password' और 'ssn' फ़ील्ड्स को बाहर करता हो?",
        "options_en": ["Omit<User, 'password' | 'ssn'>", "Pick<User, Exclude<keyof User, 'password' | 'ssn'>>", "Partial<User> & { noSecrets: true }", "Both A and B"],
        "options_hi": ["Omit<User, 'password' | 'ssn'>", "Pick<User, Exclude<keyof User, 'password' | 'ssn'>>", "Partial<User> & { noSecrets: true }", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which utility type creates a dictionary with specific keys mapping to specific value types?",
        "question_hi": "कौन सा utility type विशिष्ट कुंजियों के साथ एक डिक्शनरी बनाता है जो विशिष्ट मान प्रकारों पर मैप होती हैं?",
        "options_en": ["Record<K, T>", "Dictionary<K, T>", "Map<K, T>", "Object<K, T>"],
        "options_hi": ["Record<K, T>", "Dictionary<K, T>", "Map<K, T>", "Object<K, T>"],
        "answer_en": "Record<K, T>",
        "answer_hi": "Record<K, T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How would you remove 'null' and 'undefined' from a type like string | null | undefined?",
        "question_hi": "आप string | null | undefined जैसे प्रकार से 'null' और 'undefined' को कैसे हटाएंगे?",
        "options_en": ["NonNullable<string | null | undefined>", "Exclude<string | null | undefined, null | undefined>", "string", "Both A and B"],
        "options_hi": ["NonNullable<string | null | undefined>", "Exclude<string | null | undefined, null | undefined>", "string", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "If you have type T = 'admin' | 'user' | 'guest', how would you extract just 'admin' and 'user'?",
        "question_hi": "यदि आपके पास प्रकार T = 'admin' | 'user' | 'guest' है, तो आप केवल 'admin' और 'user' को कैसे निकालेंगे?",
        "options_en": ["Extract<T, 'admin' | 'user'>", "Pick<T, 'admin' | 'user'>", "Omit<T, 'guest'>", "Record<'admin' | 'user', T>"],
        "options_hi": ["Extract<T, 'admin' | 'user'>", "Pick<T, 'admin' | 'user'>", "Omit<T, 'guest'>", "Record<'admin' | 'user', T>"],
        "answer_en": "Extract<T, 'admin' | 'user'>",
        "answer_hi": "Extract<T, 'admin' | 'user'>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How would you remove 'admin' from the union type 'admin' | 'user' | 'guest'?",
        "question_hi": "आप संघ प्रकार 'admin' | 'user' | 'guest' से 'admin' को कैसे हटाएंगे?",
        "options_en": ["Exclude<'admin' | 'user' | 'guest', 'admin'>", "Omit<'admin' | 'user' | 'guest', 'admin'>", "Pick<'admin' | 'user' | 'guest', 'user' | 'guest'>", "NonNullable<'admin'>"],
        "options_hi": ["Exclude<'admin' | 'user' | 'guest', 'admin'>", "Omit<'admin' | 'user' | 'guest', 'admin'>", "Pick<'admin' | 'user' | 'guest', 'user' | 'guest'>", "NonNullable<'admin'>"],
        "answer_en": "Exclude<'admin' | 'user' | 'guest', 'admin'>",
        "answer_hi": "Exclude<'admin' | 'user' | 'guest', 'admin'>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which utility type would you use to get the return type of a function without calling it?",
        "question_hi": "बिना कॉल किए फ़ंक्शन के रिटर्न प्रकार को प्राप्त करने के लिए आप किस utility type का उपयोग करेंगे?",
        "options_en": ["ReturnType<T>", "Parameters<T>", "InstanceType<T>", "FunctionReturn<T>"],
        "options_hi": ["ReturnType<T>", "Parameters<T>", "InstanceType<T>", "FunctionReturn<T>"],
        "answer_en": "ReturnType<T>",
        "answer_hi": "ReturnType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How would you extract parameter types from a function as a tuple?",
        "question_hi": "आप फ़ंक्शन से पैरामीटर प्रकारों को टपल के रूप में कैसे निकालेंगे?",
        "options_en": ["Parameters<T>", "ReturnType<T>", "Args<T>", "FunctionParams<T>"],
        "options_hi": ["Parameters<T>", "ReturnType<T>", "Args<T>", "FunctionParams<T>"],
        "answer_en": "Parameters<T>",
        "answer_hi": "Parameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which utility type gets the instance type from a class constructor?",
        "question_hi": "कौन सा utility type क्लास कंस्ट्रक्टर से इंस्टेंस प्रकार प्राप्त करता है?",
        "options_en": ["InstanceType<T>", "ConstructorParameters<T>", "ReturnType<T>", "ClassInstance<T>"],
        "options_hi": ["InstanceType<T>", "ConstructorParameters<T>", "ReturnType<T>", "ClassInstance<T>"],
        "answer_en": "InstanceType<T>",
        "answer_hi": "InstanceType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How would you get constructor parameter types from a class?",
        "question_hi": "आप क्लास से कंस्ट्रक्टर पैरामीटर प्रकार कैसे प्राप्त करेंगे?",
        "options_en": ["ConstructorParameters<T>", "Parameters<T>", "InstanceType<T>", "ClassParams<T>"],
        "options_hi": ["ConstructorParameters<T>", "Parameters<T>", "InstanceType<T>", "ClassParams<T>"],
        "answer_en": "ConstructorParameters<T>",
        "answer_hi": "ConstructorParameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which utility type is used for string literal type transformations to uppercase?",
        "question_hi": "स्ट्रिंग लिटरल प्रकार परिवर्तनों को अपरकेस में बदलने के लिए किस utility type का उपयोग किया जाता है?",
        "options_en": ["Uppercase<S>", "Capitalize<S>", "Lowercase<S>", "Uncapitalize<S>"],
        "options_hi": ["Uppercase<S>", "Capitalize<S>", "Lowercase<S>", "Uncapitalize<S>"],
        "answer_en": "Uppercase<S>",
        "answer_hi": "Uppercase<S>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How would you convert 'hello' to 'Hello' at the type level?",
        "question_hi": "आप प्रकार स्तर पर 'hello' को 'Hello' में कैसे बदलेंगे?",
        "options_en": ["Capitalize<'hello'>", "Uppercase<'hello'>", "Lowercase<'hello'>", "TitleCase<'hello'>"],
        "options_hi": ["Capitalize<'hello'>", "Uppercase<'hello'>", "Lowercase<'hello'>", "TitleCase<'hello'>"],
        "answer_en": "Capitalize<'hello'>",
        "answer_hi": "Capitalize<'hello'>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which utility type recursively unwraps Promise types?",
        "question_hi": "कौन सा utility type Promise प्रकारों को पुनरावर्ती रूप से अनव्रैप करता है?",
        "options_en": ["Awaited<T>", "PromiseType<T>", "UnwrapPromise<T>", "AsyncReturn<T>"],
        "options_hi": ["Awaited<T>", "PromiseType<T>", "UnwrapPromise<T>", "AsyncReturn<T>"],
        "answer_en": "Awaited<T>",
        "answer_hi": "Awaited<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What would Partial<{id: number, name: string}> produce?",
        "question_hi": "Partial<{id: number, name: string}> क्या उत्पन्न करेगा?",
        "options_en": ["{id?: number, name?: string}", "{id: number, name: string}", "{id: number | undefined, name: string | undefined}", "Error"],
        "options_hi": ["{id?: number, name?: string}", "{id: number, name: string}", "{id: number | undefined, name: string | undefined}", "त्रुटि"],
        "answer_en": "{id?: number, name?: string}",
        "answer_hi": "{id?: number, name?: string}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does Required<{id?: number, name?: string}> create?",
        "question_hi": "Required<{id?: number, name?: string}> क्या बनाता है?",
        "options_en": ["{id: number, name: string}", "{id?: number, name?: string}", "{id: number | undefined, name: string | undefined}", "{id: number, name?: string}"],
        "options_hi": ["{id: number, name: string}", "{id?: number, name?: string}", "{id: number | undefined, name: string | undefined}", "{id: number, name?: string}"],
        "answer_en": "{id: number, name: string}",
        "answer_hi": "{id: number, name: string}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How would Readonly<{x: number, y: number}> affect the properties?",
        "question_hi": "Readonly<{x: number, y: number}> गुणों को कैसे प्रभावित करेगा?",
        "options_en": ["Makes x and y readonly", "Makes x and y optional", "Removes x and y", "Converts to array"],
        "options_hi": ["x और y को readonly बनाता है", "x और y को वैकल्पिक बनाता है", "x और y को हटाता है", "सरणी में बदलता है"],
        "answer_en": "Makes x and y readonly",
        "answer_hi": "x और y को readonly बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the result of Pick<{id: number, name: string, age: number}, 'id' | 'name'>?",
        "question_hi": "Pick<{id: number, name: string, age: number}, 'id' | 'name'> का परिणाम क्या है?",
        "options_en": ["{id: number, name: string}", "{id: number, name: string, age: number}", "{id?: number, name?: string}", "Error"],
        "options_hi": ["{id: number, name: string}", "{id: number, name: string, age: number}", "{id?: number, name?: string}", "त्रुटि"],
        "answer_en": "{id: number, name: string}",
        "answer_hi": "{id: number, name: string}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does Omit<{id: number, name: string, age: number}, 'age'> produce?",
        "question_hi": "Omit<{id: number, name: string, age: number}, 'age'> क्या उत्पन्न करता है?",
        "options_en": ["{id: number, name: string}", "{id: number, name: string, age?: number}", "{name: string}", "{id: number}"],
        "options_hi": ["{id: number, name: string}", "{id: number, name: string, age?: number}", "{name: string}", "{id: number}"],
        "answer_en": "{id: number, name: string}",
        "answer_hi": "{id: number, name: string}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is Record<'id' | 'name', string> equivalent to?",
        "question_hi": "Record<'id' | 'name', string> किसके समतुल्य है?",
        "options_en": ["{id: string, name: string}", "{id: string} | {name: string}", "{id: string, name?: string}", "[id: string, name: string]"],
        "options_hi": ["{id: string, name: string}", "{id: string} | {name: string}", "{id: string, name?: string}", "[id: string, name: string]"],
        "answer_en": "{id: string, name: string}",
        "answer_hi": "{id: string, name: string}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What does Exclude<'a' | 'b' | 'c', 'a'> yield?",
        "question_hi": "Exclude<'a' | 'b' | 'c', 'a'> क्या देता है?",
        "options_en": ["'b' | 'c'", "'a' | 'b' | 'c'", "'a'", "never"],
        "options_hi": ["'b' | 'c'", "'a' | 'b' | 'c'", "'a'", "never"],
        "answer_en": "'b' | 'c'",
        "answer_hi": "'b' | 'c'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does Extract<'a' | 'b' | 'c', 'a' | 'd'> produce?",
        "question_hi": "Extract<'a' | 'b' | 'c', 'a' | 'd'> क्या उत्पन्न करता है?",
        "options_en": ["'a'", "'a' | 'd'", "'a' | 'b' | 'c'", "never"],
        "options_hi": ["'a'", "'a' | 'd'", "'a' | 'b' | 'c'", "never"],
        "answer_en": "'a'",
        "answer_hi": "'a'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is NonNullable<string | null | undefined>?",
        "question_hi": "NonNullable<string | null | undefined> क्या है?",
        "options_en": ["string", "string | null", "string | undefined", "null | undefined"],
        "options_hi": ["string", "string | null", "string | undefined", "null | undefined"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does Parameters<(x: number, y: string) => void> return?",
        "question_hi": "Parameters<(x: number, y: string) => void> क्या लौटाता है?",
        "options_en": ["[number, string]", "number | string", "[x: number, y: string]", "[number]"],
        "options_hi": ["[number, string]", "number | string", "[x: number, y: string]", "[number]"],
        "answer_en": "[number, string]",
        "answer_hi": "[number, string]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What would ReturnType<() => string> be?",
        "question_hi": "ReturnType<() => string> क्या होगा?",
        "options_en": ["string", "() => string", "unknown", "any"],
        "options_hi": ["string", "() => string", "unknown", "any"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "If class C { constructor(public x: number) {} }, what is InstanceType<typeof C>?",
        "question_hi": "यदि क्लास C { constructor(public x: number) {} }, तो InstanceType<typeof C> क्या है?",
        "options_en": ["C", "{x: number}", "number", "typeof C"],
        "options_hi": ["C", "{x: number}", "number", "typeof C"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "For the same class C, what is ConstructorParameters<typeof C>?",
        "question_hi": "उसी क्लास C के लिए, ConstructorParameters<typeof C> क्या है?",
        "options_en": ["[number]", "[x: number]", "number", "[]"],
        "options_hi": ["[number]", "[x: number]", "number", "[]"],
        "answer_en": "[number]",
        "answer_hi": "[number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does Uppercase<'typescript'> produce?",
        "question_hi": "Uppercase<'typescript'> क्या उत्पन्न करता है?",
        "options_en": ["'TYPESCRIPT'", "'Typescript'", "'typescript'", "Error"],
        "options_hi": ["'TYPESCRIPT'", "'Typescript'", "'typescript'", "त्रुटि"],
        "answer_en": "'TYPESCRIPT'",
        "answer_hi": "'TYPESCRIPT'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is Lowercase<'TypeScript'>?",
        "question_hi": "Lowercase<'TypeScript'> क्या है?",
        "options_en": ["'typescript'", "'TYPESCRIPT'", "'Typescript'", "'TypeScript'"],
        "options_hi": ["'typescript'", "'TYPESCRIPT'", "'Typescript'", "'TypeScript'"],
        "answer_en": "'typescript'",
        "answer_hi": "'typescript'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does Capitalize<'hello world'> yield?",
        "question_hi": "Capitalize<'hello world'> क्या देता है?",
        "options_en": ["'Hello world'", "'HELLO WORLD'", "'hello world'", "'Hello World'"],
        "options_hi": ["'Hello world'", "'HELLO WORLD'", "'hello world'", "'Hello World'"],
        "answer_en": "'Hello world'",
        "answer_hi": "'Hello world'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is Uncapitalize<'Hello World'>?",
        "question_hi": "Uncapitalize<'Hello World'> क्या है?",
        "options_en": ["'hello World'", "'HELLO WORLD'", "'Hello World'", "'hello world'"],
        "options_hi": ["'hello World'", "'HELLO WORLD'", "'Hello World'", "'hello world'"],
        "answer_en": "'hello World'",
        "answer_hi": "'hello World'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does Awaited<Promise<string>> produce?",
        "question_hi": "Awaited<Promise<string>> क्या उत्पन्न करता है?",
        "options_en": ["string", "Promise<string>", "Promise<Promise<string>>", "any"],
        "options_hi": ["string", "Promise<string>", "Promise<Promise<string>>", "any"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is Awaited<Promise<Promise<number>>>?",
        "question_hi": "Awaited<Promise<Promise<number>>> क्या है?",
        "options_en": ["number", "Promise<number>", "Promise<Promise<number>>", "unknown"],
        "options_hi": ["number", "Promise<number>", "Promise<Promise<number>>", "unknown"],
        "answer_en": "number",
        "answer_hi": "number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How would you create a type for API options where all fields are optional?",
        "question_hi": "आप API विकल्पों के लिए एक प्रकार कैसे बनाएंगे जहाँ सभी फ़ील्ड्स वैकल्पिक हों?",
        "options_en": ["Partial<ApiOptions>", "Required<ApiOptions>", "Readonly<ApiOptions>", "Pick<ApiOptions, keyof ApiOptions>"],
        "options_hi": ["Partial<ApiOptions>", "Required<ApiOptions>", "Readonly<ApiOptions>", "Pick<ApiOptions, keyof ApiOptions>"],
        "answer_en": "Partial<ApiOptions>",
        "answer_hi": "Partial<ApiOptions>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How would you ensure a configuration object has all required fields for validation?",
        "question_hi": "आप कैसे सुनिश्चित करेंगे कि वैलिडेशन के लिए एक कॉन्फ़िगरेशन ऑब्जेक्ट में सभी आवश्यक फ़ील्ड्स हों?",
        "options_en": ["Required<Config>", "Partial<Config>", "Readonly<Config>", "Record<keyof Config, any>"],
        "options_hi": ["Required<Config>", "Partial<Config>", "Readonly<Config>", "Record<keyof Config, any>"],
        "answer_en": "Required<Config>",
        "answer_hi": "Required<Config>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How would you create an immutable version of a state object in Redux?",
        "question_hi": "आप Redux में एक स्टेट ऑब्जेक्ट का अपरिवर्तनीय संस्करण कैसे बनाएंगे?",
        "options_en": ["Readonly<State>", "Partial<State>", "Required<State>", "Immutable<State>"],
        "options_hi": ["Readonly<State>", "Partial<State>", "Required<State>", "Immutable<State>"],
        "answer_en": "Readonly<State>",
        "answer_hi": "Readonly<State>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How would you create a public interface from a user type that excludes private fields?",
        "question_hi": "आप उपयोगकर्ता प्रकार से एक सार्वजनिक इंटरफ़ेस कैसे बनाएंगे जो निजी फ़ील्ड्स को बाहर करता हो?",
        "options_en": ["Omit<User, 'password' | 'token'>", "Pick<User, 'id' | 'name' | 'email'>", "Partial<User>", "Both A and B"],
        "options_hi": ["Omit<User, 'password' | 'token'>", "Pick<User, 'id' | 'name' | 'email'>", "Partial<User>", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How would you define a type for HTTP headers dictionary?",
        "question_hi": "आप HTTP हेडर डिक्शनरी के लिए एक प्रकार कैसे परिभाषित करेंगे?",
        "options_en": ["Record<string, string>", "{ [key: string]: string }", "Map<string, string>", "Both A and B"],
        "options_hi": ["Record<string, string>", "{ [key: string]: string }", "Map<string, string>", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How would you clean user input by removing null/undefined from string | null | undefined?",
        "question_hi": "आप string | null | undefined से null/undefined को हटाकर उपयोगकर्ता इनपुट को कैसे साफ़ करेंगे?",
        "options_en": ["NonNullable<string | null | undefined>", "Exclude<string | null | undefined, null | undefined>", "string", "All of the above"],
        "options_hi": ["NonNullable<string | null | undefined>", "Exclude<string | null | undefined, null | undefined>", "string", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How would you filter user roles to only get admin roles from a union?",
        "question_hi": "आप संघ से केवल एडमिन भूमिकाएँ प्राप्त करने के लिए उपयोगकर्ता भूमिकाओं को कैसे फ़िल्टर करेंगे?",
        "options_en": ["Extract<UserRole, 'admin'>", "Pick<UserRole, 'admin'>", "Exclude<UserRole, 'user' | 'guest'>", "Record<'admin', UserRole>"],
        "options_hi": ["Extract<UserRole, 'admin'>", "Pick<UserRole, 'admin'>", "Exclude<UserRole, 'user' | 'guest'>", "Record<'admin', UserRole>"],
        "answer_en": "Extract<UserRole, 'admin'>",
        "answer_hi": "Extract<UserRole, 'admin'>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How would you create a safe version of a type by removing dangerous values?",
        "question_hi": "आप खतरनाक मानों को हटाकर एक प्रकार का सुरक्षित संस्करण कैसे बनाएंगे?",
        "options_en": ["Exclude<Input, 'drop table' | ';--'>", "NonNullable<Input>", "Pick<Input, SafeValues>", "Omit<Input, 'dangerous'>"],
        "options_hi": ["Exclude<Input, 'drop table' | ';--'>", "NonNullable<Input>", "Pick<Input, SafeValues>", "Omit<Input, 'dangerous'>"],
        "answer_en": "Exclude<Input, 'drop table' | ';--'>",
        "answer_hi": "Exclude<Input, 'drop table' | ';--'>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How would you infer the return type of a fetch API call?",
        "question_hi": "आप एक fetch API कॉल के रिटर्न प्रकार का अनुमान कैसे लगाएंगे?",
        "options_en": ["ReturnType<typeof fetch>", "Promise<Response>", "Awaited<ReturnType<typeof fetch>>", "Parameters<typeof fetch>"],
        "options_hi": ["ReturnType<typeof fetch>", "Promise<Response>", "Awaited<ReturnType<typeof fetch>>", "Parameters<typeof fetch>"],
        "answer_en": "ReturnType<typeof fetch>",
        "answer_hi": "ReturnType<typeof fetch>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How would you get the parameter types of setTimeout?",
        "question_hi": "आप setTimeout के पैरामीटर प्रकार कैसे प्राप्त करेंगे?",
        "options_en": ["Parameters<typeof setTimeout>", "ReturnType<typeof setTimeout>", "InstanceType<typeof setTimeout>", "ConstructorParameters<typeof setTimeout>"],
        "options_hi": ["Parameters<typeof setTimeout>", "ReturnType<typeof setTimeout>", "InstanceType<typeof setTimeout>", "ConstructorParameters<typeof setTimeout>"],
        "answer_en": "Parameters<typeof setTimeout>",
        "answer_hi": "Parameters<typeof setTimeout>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How would you create a factory function for a class?",
        "question_hi": "आप एक क्लास के लिए फ़ैक्टरी फ़ंक्शन कैसे बनाएंगे?",
        "options_en": ["(...args: ConstructorParameters<typeof Class>) => InstanceType<typeof Class>", "() => Class", "new () => Class", "(args: any[]) => Class"],
        "options_hi": ["(...args: ConstructorParameters<typeof Class>) => InstanceType<typeof Class>", "() => Class", "new () => Class", "(args: any[]) => Class"],
        "answer_en": "(...args: ConstructorParameters<typeof Class>) => InstanceType<typeof Class>",
        "answer_hi": "(...args: ConstructorParameters<typeof Class>) => InstanceType<typeof Class>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How would you get constructor parameters for Error class?",
        "question_hi": "आप Error क्लास के लिए कंस्ट्रक्टर पैरामीटर्स कैसे प्राप्त करेंगे?",
        "options_en": ["ConstructorParameters<typeof Error>", "Parameters<typeof Error>", "InstanceType<typeof Error>", "ReturnType<typeof Error>"],
        "options_hi": ["ConstructorParameters<typeof Error>", "Parameters<typeof Error>", "InstanceType<typeof Error>", "ReturnType<typeof Error>"],
        "answer_en": "ConstructorParameters<typeof Error>",
        "answer_hi": "ConstructorParameters<typeof Error>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How would you create CSS constant names in uppercase from camelCase?",
        "question_hi": "आप camelCase से अपरकेस में CSS कॉन्स्टेंट नाम कैसे बनाएंगे?",
        "options_en": ["Uppercase<CamelCaseName>", "Capitalize<CamelCaseName>", "Lowercase<CamelCaseName>", "Record<Uppercase<CamelCaseName>, string>"],
        "options_hi": ["Uppercase<CamelCaseName>", "Capitalize<CamelCaseName>", "Lowercase<CamelCaseName>", "Record<Uppercase<CamelCaseName>, string>"],
        "answer_en": "Uppercase<CamelCaseName>",
        "answer_hi": "Uppercase<CamelCaseName>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How would you normalize enum values to lowercase for case-insensitive comparison?",
        "question_hi": "आप केस-इनसेंसिटिव तुलना के लिए enum मानों को लोअरकेस में कैसे सामान्य करेंगे?",
        "options_en": ["Lowercase<EnumValue>", "Uppercase<EnumValue>", "Capitalize<EnumValue>", "Uncapitalize<EnumValue>"],
        "options_hi": ["Lowercase<EnumValue>", "Uppercase<EnumValue>", "Capitalize<EnumValue>", "Uncapitalize<EnumValue>"],
        "answer_en": "Lowercase<EnumValue>",
        "answer_hi": "Lowercase<EnumValue>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How would you create proper method names from property names?",
        "question_hi": "आप संपत्ति नामों से उचित विधि नाम कैसे बनाएंगे?",
        "options_en": ["Capitalize<PropertyName>", "`get${Capitalize<PropertyName>}`", "Uppercase<PropertyName>", "Lowercase<PropertyName>"],
        "options_hi": ["Capitalize<PropertyName>", "`get${Capitalize<PropertyName>}`", "Uppercase<PropertyName>", "Lowercase<PropertyName>"],
        "answer_en": "`get${Capitalize<PropertyName>}`",
        "answer_hi": "`get${Capitalize<PropertyName>}`",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How would you convert method names to property names?",
        "question_hi": "आप विधि नामों को संपत्ति नामों में कैसे बदलेंगे?",
        "options_en": ["Uncapitalize<MethodName>", "Lowercase<MethodName>", "Uppercase<MethodName>", "Capitalize<MethodName>"],
        "options_hi": ["Uncapitalize<MethodName>", "Lowercase<MethodName>", "Uppercase<MethodName>", "Capitalize<MethodName>"],
        "answer_en": "Uncapitalize<MethodName>",
        "answer_hi": "Uncapitalize<MethodName>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How would you get the actual type from Promise<Response> in async code?",
        "question_hi": "आप async कोड में Promise<Response> से वास्तविक प्रकार कैसे प्राप्त करेंगे?",
        "options_en": ["Awaited<Promise<Response>>", "ReturnType<Promise<Response>>", "InstanceType<Promise<Response>>", "Parameters<Promise<Response>>"],
        "options_hi": ["Awaited<Promise<Response>>", "ReturnType<Promise<Response>>", "InstanceType<Promise<Response>>", "Parameters<Promise<Response>>"],
        "answer_en": "Awaited<Promise<Response>>",
        "answer_hi": "Awaited<Promise<Response>>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How would you handle deeply nested promises in TypeScript?",
        "question_hi": "आप TypeScript में गहराई से नेस्टेड प्रॉमिसेस को कैसे हैंडल करेंगे?",
        "options_en": ["Awaited<Promise<Promise<T>>>", "Promise<Awaited<T>>", "ReturnType<Promise<T>>", "InstanceType<Promise<T>>"],
        "options_hi": ["Awaited<Promise<Promise<T>>>", "Promise<Awaited<T>>", "ReturnType<Promise<T>>", "InstanceType<Promise<T>>"],
        "answer_en": "Awaited<Promise<Promise<T>>>",
        "answer_hi": "Awaited<Promise<Promise<T>>>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the practical use of Partial in form handling?",
        "question_hi": "फॉर्म हैंडलिंग में Partial का व्यावहारिक उपयोग क्या है?",
        "options_en": ["To represent form data that may be partially filled", "To make all fields required", "To make form immutable", "To pick specific form fields"],
        "options_hi": ["आंशिक रूप से भरे जा सकने वाले फॉर्म डेटा का प्रतिनिधित्व करने के लिए", "सभी फ़ील्ड्स को आवश्यक बनाने के लिए", "फॉर्म को अपरिवर्तनीय बनाने के लिए", "विशिष्ट फॉर्म फ़ील्ड्स को चुनने के लिए"],
        "answer_en": "To represent form data that may be partially filled",
        "answer_hi": "आंशिक रूप से भरे जा सकने वाले फॉर्म डेटा का प्रतिनिधित्व करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "When would you use Required in a TypeScript application?",
        "question_hi": "आप TypeScript एप्लिकेशन में Required का उपयोग कब करेंगे?",
        "options_en": ["When validating that all required fields are present", "When making API responses", "When creating partial updates", "When reading configuration"],
        "options_hi": ["जब यह सत्यापित करना कि सभी आवश्यक फ़ील्ड्स मौजूद हैं", "API प्रतिक्रियाएँ बनाते समय", "आंशिक अद्यतन बनाते समय", "कॉन्फ़िगरेशन पढ़ते समय"],
        "answer_en": "When validating that all required fields are present",
        "answer_hi": "जब यह सत्यापित करना कि सभी आवश्यक फ़ील्ड्स मौजूद हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is a real-world scenario for Readonly utility type?",
        "question_hi": "Readonly utility type के लिए एक वास्तविक दुनिया का परिदृश्य क्या है?",
        "options_en": ["Immutable state in Redux or React", "Optional configuration", "API request bodies", "Database models"],
        "options_hi": ["Redux या React में अपरिवर्तनीय स्थिति", "वैकल्पिक कॉन्फ़िगरेशन", "API अनुरोध बॉडी", "डेटाबेस मॉडल"],
        "answer_en": "Immutable state in Redux or React",
        "answer_hi": "Redux या React में अपरिवर्तनीय स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "When would Pick be useful in a React application?",
        "question_hi": "Pick React एप्लिकेशन में कब उपयोगी होगा?",
        "options_en": ["When a component only needs specific props from a larger type", "When all props are required", "When props are optional", "When creating context"],
        "options_hi": ["जब एक घटक को बड़े प्रकार से केवल विशिष्ट प्रॉप्स की आवश्यकता हो", "जब सभी प्रॉप्स आवश्यक हों", "जब प्रॉप्स वैकल्पिक हों", "संदर्भ बनाते समय"],
        "answer_en": "When a component only needs specific props from a larger type",
        "answer_hi": "जब एक घटक को बड़े प्रकार से केवल विशिष्ट प्रॉप्स की आवश्यकता हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is a common use case for Omit in TypeScript projects?",
        "question_hi": "TypeScript प्रोजेक्ट्स में Omit के लिए एक सामान्य उपयोग मामला क्या है?",
        "options_en": ["Creating public API types that exclude internal fields", "Making all fields optional", "Creating immutable types", "Extracting specific fields"],
        "options_hi": ["आंतरिक फ़ील्ड्स को बाहर करने वाले सार्वजनिक API प्रकार बनाना", "सभी फ़ील्ड्स को वैकल्पिक बनाना", "अपरिवर्तनीय प्रकार बनाना", "विशिष्ट फ़ील्ड्स निकालना"],
        "answer_en": "Creating public API types that exclude internal fields",
        "answer_hi": "आंतरिक फ़ील्ड्स को बाहर करने वाले सार्वजनिक API प्रकार बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Where would you use Record in a web application?",
        "question_hi": "आप वेब एप्लिकेशन में Record का उपयोग कहाँ करेंगे?",
        "options_en": ["Defining configuration objects with specific keys", "Creating arrays", "Defining function types", "Creating union types"],
        "options_hi": ["विशिष्ट कुंजियों के साथ कॉन्फ़िगरेशन वस्तुओं को परिभाषित करना", "सरणियाँ बनाना", "फ़ंक्शन प्रकार परिभाषित करना", "संघ प्रकार बनाना"],
        "answer_en": "Defining configuration objects with specific keys",
        "answer_hi": "विशिष्ट कुंजियों के साथ कॉन्फ़िगरेशन वस्तुओं को परिभाषित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is a practical example of using Exclude?",
        "question_hi": "Exclude का उपयोग करने का एक व्यावहारिक उदाहरण क्या है?",
        "options_en": ["Removing 'none' from status union type", "Making properties optional", "Creating readonly types", "Picking specific properties"],
        "options_hi": ["स्थिति संघ प्रकार से 'none' हटाना", "गुणों को वैकल्पिक बनाना", "केवल-पठनीय प्रकार बनाना", "विशिष्ट गुणों को चुनना"],
        "answer_en": "Removing 'none' from status union type",
        "answer_hi": "स्थिति संघ प्रकार से 'none' हटाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "When would Extract be useful in filtering types?",
        "question_hi": "प्रकारों को फ़िल्टर करने में Extract कब उपयोगी होगा?",
        "options_en": ["When you need only specific values from a union type", "When removing values", "When making all values optional", "When creating new unions"],
        "options_hi": ["जब आपको संघ प्रकार से केवल विशिष्ट मानों की आवश्यकता हो", "मान हटाते समय", "सभी मानों को वैकल्पिक बनाते समय", "नए संघ बनाते समय"],
        "answer_en": "When you need only specific values from a union type",
        "answer_hi": "जब आपको संघ प्रकार से केवल विशिष्ट मानों की आवश्यकता हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the benefit of NonNullable in type safety?",
        "question_hi": "टाइप सेफ्टी में NonNullable का क्या लाभ है?",
        "options_en": ["Ensures values are not null or undefined at compile time", "Makes values optional", "Converts to string", "Creates union types"],
        "options_hi": ["कंपाइल समय पर सुनिश्चित करता है कि मान null या undefined नहीं हैं", "मानों को वैकल्पिक बनाता है", "स्ट्रिंग में बदलता है", "संघ प्रकार बनाता है"],
        "answer_en": "Ensures values are not null or undefined at compile time",
        "answer_hi": "कंपाइल समय पर सुनिश्चित करता है कि मान null या undefined नहीं हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How does Parameters help in higher-order functions?",
        "question_hi": "Parameters उच्च-कोटि के कार्यों में कैसे मदद करता है?",
        "options_en": ["It allows creating type-safe function wrappers", "It makes functions optional", "It converts to async functions", "It removes parameters"],
        "options_hi": ["यह टाइप-सेफ फ़ंक्शन रैपर बनाने की अनुमति देता है", "यह फ़ंक्शन को वैकल्पिक बनाता है", "यह async फ़ंक्शन में बदलता है", "यह पैरामीटर्स हटाता है"],
        "answer_en": "It allows creating type-safe function wrappers",
        "answer_hi": "यह टाइप-सेफ फ़ंक्शन रैपर बनाने की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the advantage of ReturnType in functional programming?",
        "question_hi": "फ़ंक्शनल प्रोग्रामिंग में ReturnType का क्या लाभ है?",
        "options_en": ["It enables type-safe function composition", "It makes functions async", "It adds parameters", "It removes return values"],
        "options_hi": ["यह टाइप-सेफ फ़ंक्शन कंपोज़िशन सक्षम करता है", "यह फ़ंक्शन को async बनाता है", "यह पैरामीटर्स जोड़ता है", "यह रिटर्न मान हटाता है"],
        "answer_en": "It enables type-safe function composition",
        "answer_hi": "यह टाइप-सेफ फ़ंक्शन कंपोज़िशन सक्षम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How does InstanceType help with dependency injection?",
        "question_hi": "InstanceType निर्भरता इंजेक्शन में कैसे मदद करता है?",
        "options_en": ["It allows creating type-safe service containers", "It removes instances", "It creates new classes", "It makes classes abstract"],
        "options_hi": ["यह टाइप-सेफ सेवा कंटेनर बनाने की अनुमति देता है", "यह उदाहरण हटाता है", "यह नई कक्षाएँ बनाता है", "यह कक्षाओं को अमूर्त बनाता है"],
        "answer_en": "It allows creating type-safe service containers",
        "answer_hi": "यह टाइप-सेफ सेवा कंटेनर बनाने की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the use of ConstructorParameters in testing?",
        "question_hi": "टेस्टिंग में ConstructorParameters का उपयोग क्या है?",
        "options_en": ["Creating mock instances with proper constructor args", "Removing constructors", "Making classes abstract", "Converting to functions"],
        "options_hi": ["उचित कंस्ट्रक्टर args के साथ नकली उदाहरण बनाना", "कंस्ट्रक्टर्स हटाना", "कक्षाओं को अमूर्त बनाना", "फ़ंक्शन में बदलना"],
        "answer_en": "Creating mock instances with proper constructor args",
        "answer_hi": "उचित कंस्ट्रक्टर args के साथ नकली उदाहरण बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do string utility types help with internationalization?",
        "question_hi": "स्ट्रिंग utility types अंतर्राष्ट्रीयकरण में कैसे मदद करते हैं?",
        "options_en": ["They ensure consistent casing for locale keys", "They translate strings", "They remove strings", "They create new languages"],
        "options_hi": ["वे लोकेल कुंजियों के लिए सुसंगत केसिंग सुनिश्चित करते हैं", "वे स्ट्रिंग्स का अनुवाद करते हैं", "वे स्ट्रिंग्स हटाते हैं", "वे नई भाषाएँ बनाते हैं"],
        "answer_en": "They ensure consistent casing for locale keys",
        "answer_hi": "वे लोकेल कुंजियों के लिए सुसंगत केसिंग सुनिश्चित करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the benefit of Awaited in async/await patterns?",
        "question_hi": "async/await पैटर्न में Awaited का क्या लाभ है?",
        "options_en": ["It provides proper typing for awaited promise results", "It makes code synchronous", "It removes async keyword", "It creates new promises"],
        "options_hi": ["यह प्रतीक्षित promise परिणामों के लिए उचित टाइपिंग प्रदान करता है", "यह कोड को तुल्यकालिक बनाता है", "यह async कीवर्ड हटाता है", "यह नए promise बनाता है"],
        "answer_en": "It provides proper typing for awaited promise results",
        "answer_hi": "यह प्रतीक्षित promise परिणामों के लिए उचित टाइपिंग प्रदान करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Can utility types be composed together? Example?",
        "question_hi": "क्या utility types को एक साथ रचना की जा सकती है? उदाहरण?",
        "options_en": ["Yes, like Readonly<Partial<T>>", "No, they cannot be composed", "Only some can be composed", "They always cause errors when composed"],
        "options_hi": ["हाँ, जैसे Readonly<Partial<T>>", "नहीं, उनकी रचना नहीं की जा सकती", "केवल कुछ की रचना की जा सकती है", "रचना करने पर वे हमेशा त्रुटियाँ उत्पन्न करते हैं"],
        "answer_en": "Yes, like Readonly<Partial<T>>",
        "answer_hi": "हाँ, जैसे Readonly<Partial<T>>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does Readonly<Partial<T>> mean?",
        "question_hi": "Readonly<Partial<T>> का क्या अर्थ है?",
        "options_en": ["A type with all optional and readonly properties", "A type with all required properties", "A type with mutable properties", "An error"],
        "options_hi": ["सभी वैकल्पिक और केवल-पठनीय गुणों वाला एक प्रकार", "सभी आवश्यक गुणों वाला एक प्रकार", "परिवर्तनशील गुणों वाला एक प्रकार", "एक त्रुटि"],
        "answer_en": "A type with all optional and readonly properties",
        "answer_hi": "सभी वैकल्पिक और केवल-पठनीय गुणों वाला एक प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What would Pick<Omit<T, 'a'>, 'b' | 'c'> do?",
        "question_hi": "Pick<Omit<T, 'a'>, 'b' | 'c'> क्या करेगा?",
        "options_en": ["Pick properties 'b' and 'c' from T after removing 'a'", "Remove 'a' then pick 'b' and 'c'", "Create an error", "Do nothing"],
        "options_hi": ["'a' हटाने के बाद T से गुण 'b' और 'c' चुनें", "'a' हटाएं फिर 'b' और 'c' चुनें", "एक त्रुटि बनाएं", "कुछ न करें"],
        "answer_en": "Pick properties 'b' and 'c' from T after removing 'a'",
        "answer_hi": "'a' हटाने के बाद T से गुण 'b' और 'c' चुनें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is Partial<Pick<T, 'id' | 'name'>>?",
        "question_hi": "Partial<Pick<T, 'id' | 'name'>> क्या है?",
        "options_en": ["A type with optional 'id' and 'name' properties", "A type with required 'id' and 'name'", "All properties of T optional", "An error"],
        "options_hi": ["वैकल्पिक 'id' और 'name' गुणों वाला एक प्रकार", "आवश्यक 'id' और 'name' वाला एक प्रकार", "T के सभी गुण वैकल्पिक", "एक त्रुटि"],
        "answer_en": "A type with optional 'id' and 'name' properties",
        "answer_hi": "वैकल्पिक 'id' और 'name' गुणों वाला एक प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What does Record<keyof T, string> create?",
        "question_hi": "Record<keyof T, string> क्या बनाता है?",
        "options_en": ["An object with same keys as T but all string values", "Same as T", "An error", "A partial version of T"],
        "options_hi": ["T के समान कुंजियों वाली एक वस्तु लेकिन सभी स्ट्रिंग मान", "T के समान", "एक त्रुटि", "T का आंशिक संस्करण"],
        "answer_en": "An object with same keys as T but all string values",
        "answer_hi": "T के समान कुंजियों वाली एक वस्तु लेकिन सभी स्ट्रिंग मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is Exclude<Extract<T, U>, V>?",
        "question_hi": "Exclude<Extract<T, U>, V> क्या है?",
        "options_en": ["Extract T assignable to U, then exclude those assignable to V", "An error", "Same as T", "Same as Extract<T, U>"],
        "options_hi": ["U को निर्दिष्ट करने योग्य T निकालें, फिर V को निर्दिष्ट करने योग्य को बाहर करें", "एक त्रुटि", "T के समान", "Extract<T, U> के समान"],
        "answer_en": "Extract T assignable to U, then exclude those assignable to V",
        "answer_hi": "U को निर्दिष्ट करने योग्य T निकालें, फिर V को निर्दिष्ट करने योग्य को बाहर करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What does NonNullable<Parameters<T>[0]> do?",
        "question_hi": "NonNullable<Parameters<T>[0]> क्या करता है?",
        "options_en": ["Gets first parameter of T and removes null/undefined", "Gets all parameters", "Removes T", "Creates new parameters"],
        "options_hi": ["T का पहला पैरामीटर प्राप्त करता है और null/undefined हटाता है", "सभी पैरामीटर्स प्राप्त करता है", "T हटाता है", "नए पैरामीटर्स बनाता है"],
        "answer_en": "Gets first parameter of T and removes null/undefined",
        "answer_hi": "T का पहला पैरामीटर प्राप्त करता है और null/undefined हटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is ReturnType<typeof setTimeout>?",
        "question_hi": "ReturnType<typeof setTimeout> क्या है?",
        "options_en": ["NodeJS.Timeout | number", "void", "any", "unknown"],
        "options_hi": ["NodeJS.Timeout | number", "void", "any", "unknown"],
        "answer_en": "NodeJS.Timeout | number",
        "answer_hi": "NodeJS.Timeout | number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What would InstanceType<typeof Array> be?",
        "question_hi": "InstanceType<typeof Array> क्या होगा?",
        "options_en": ["any[]", "Array<any>", "Array", "unknown[]"],
        "options_hi": ["any[]", "Array<any>", "Array", "unknown[]"],
        "answer_en": "any[]",
        "answer_hi": "any[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does ConstructorParameters<typeof Date> return?",
        "question_hi": "ConstructorParameters<typeof Date> क्या लौटाता है?",
        "options_en": ["[(string | number | Date)?]", "[string | number | Date]", "[any]", "[]"],
        "options_hi": ["[(string | number | Date)?]", "[string | number | Date]", "[any]", "[]"],
        "answer_en": "[(string | number | Date)?]",
        "answer_hi": "[(string | number | Date)?]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is Uppercase<Lowercase<'HELLO'>>?",
        "question_hi": "Uppercase<Lowercase<'HELLO'>> क्या है?",
        "options_en": ["'HELLO'", "'hello'", "'Hello'", "'hELLO'"],
        "options_hi": ["'HELLO'", "'hello'", "'Hello'", "'hELLO'"],
        "answer_en": "'HELLO'",
        "answer_hi": "'HELLO'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does Capitalize<Uncapitalize<'TypeScript'>> produce?",
        "question_hi": "Capitalize<Uncapitalize<'TypeScript'>> क्या उत्पन्न करता है?",
        "options_en": ["'TypeScript'", "'typeScript'", "'TYPESCRIPT'", "'typescript'"],
        "options_hi": ["'TypeScript'", "'typeScript'", "'TYPESCRIPT'", "'typescript'"],
        "answer_en": "'TypeScript'",
        "answer_hi": "'TypeScript'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is Awaited<Promise<Awaited<Promise<string>>>>?",
        "question_hi": "Awaited<Promise<Awaited<Promise<string>>>> क्या है?",
        "options_en": ["string", "Promise<string>", "Promise<Promise<string>>", "any"],
        "options_hi": ["string", "Promise<string>", "Promise<Promise<string>>", "any"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which TypeScript version introduced most of the utility types?",
        "question_hi": "अधिकांश utility types किस TypeScript संस्करण में पेश किए गए थे?",
        "options_en": ["TypeScript 2.1", "TypeScript 3.0", "TypeScript 2.8", "TypeScript 4.0"],
        "options_hi": ["TypeScript 2.1", "TypeScript 3.0", "TypeScript 2.8", "TypeScript 4.0"],
        "answer_en": "TypeScript 2.8",
        "answer_hi": "TypeScript 2.8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the performance impact of utility types at runtime?",
        "question_hi": "रनटाइम पर utility types का प्रदर्शन प्रभाव क्या है?",
        "options_en": ["Zero impact - they are compile-time only", "Small overhead", "Significant slowdown", "Depends on the utility"],
        "options_hi": ["शून्य प्रभाव - वे केवल कंपाइल-टाइम हैं", "छोटा ओवरहेड", "महत्वपूर्ण धीमापन", "utility पर निर्भर करता है"],
        "answer_en": "Zero impact - they are compile-time only",
        "answer_hi": "शून्य प्रभाव - वे केवल कंपाइल-टाइम हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Can you create custom utility types in TypeScript?",
        "question_hi": "क्या आप TypeScript में कस्टम utility types बना सकते हैं?",
        "options_en": ["Yes, using conditional types and generics", "No, only built-in ones", "Sometimes", "Only in newer TypeScript versions"],
        "options_hi": ["हाँ, सशर्त प्रकारों और सामान्य प्रकारों का उपयोग करके", "नहीं, केवल अंतर्निहित", "कभी-कभी", "केवल नए TypeScript संस्करणों में"],
        "answer_en": "Yes, using conditional types and generics",
        "answer_hi": "हाँ, सशर्त प्रकारों और सामान्य प्रकारों का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the main purpose of utility types in TypeScript?",
        "question_hi": "TypeScript में utility types का मुख्य उद्देश्य क्या है?",
        "options_en": ["To reduce boilerplate and manipulate types easily", "To improve runtime performance", "To replace interfaces", "To make code shorter"],
        "options_hi": ["बॉयलरप्लेट कम करने और प्रकारों को आसानी से हेरफेर करने के लिए", "रनटाइम प्रदर्शन में सुधार करने के लिए", "इंटरफेस को बदलने के लिए", "कोड को छोटा बनाने के लिए"],
        "answer_en": "To reduce boilerplate and manipulate types easily",
        "answer_hi": "बॉयलरप्लेट कम करने और प्रकारों को आसानी से हेरफेर करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do utility types help with code maintenance?",
        "question_hi": "utility types कोड रखरखाव में कैसे मदद करते हैं?",
        "options_en": ["By creating type relationships that update automatically", "By making code faster", "By removing types", "By adding runtime checks"],
        "options_hi": ["स्वचालित रूप से अद्यतन होने वाले प्रकार संबंध बनाकर", "कोड को तेज़ बनाकर", "प्रकार हटाकर", "रनटाइम जांच जोड़कर"],
        "answer_en": "By creating type relationships that update automatically",
        "answer_hi": "स्वचालित रूप से अद्यतन होने वाले प्रकार संबंध बनाकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is a limitation of utility types?",
        "question_hi": "utility types की एक सीमा क्या है?",
        "options_en": ["They can't handle all edge cases with nested types", "They slow down compilation", "They don't work with classes", "They are runtime only"],
        "options_hi": ["वे नेस्टेड प्रकारों वाले सभी एज केस को हैंडल नहीं कर सकते", "वे कंपाइलेशन को धीमा कर देते हैं", "वे कक्षाओं के साथ काम नहीं करते", "वे केवल रनटाइम हैं"],
        "answer_en": "They can't handle all edge cases with nested types",
        "answer_hi": "वे नेस्टेड प्रकारों वाले सभी एज केस को हैंडल नहीं कर सकते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do utility types compare to type aliases?",
        "question_hi": "utility types टाइप एलियासेस की तुलना में कैसे हैं?",
        "options_en": ["Utility types transform types, aliases just name them", "They are the same", "Aliases are more powerful", "Utility types are deprecated"],
        "options_hi": ["Utility types प्रकारों को रूपांतरित करते हैं, एलियासेस केवल उनका नाम देते हैं", "वे समान हैं", "एलियासेस अधिक शक्तिशाली हैं", "Utility types deprecated हैं"],
        "answer_en": "Utility types transform types, aliases just name them",
        "answer_hi": "Utility types प्रकारों को रूपांतरित करते हैं, एलियासेस केवल उनका नाम देते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Can utility types be used with third-party library types?",
        "question_hi": "क्या utility types का उपयोग तृतीय-पक्ष लाइब्रेरी प्रकारों के साथ किया जा सकता है?",
        "options_en": ["Yes, if you have the type definitions", "No, only with built-in types", "Sometimes", "Only with specific libraries"],
        "options_hi": ["हाँ, यदि आपके पास प्रकार परिभाषाएँ हैं", "नहीं, केवल अंतर्निहित प्रकारों के साथ", "कभी-कभी", "केवल विशिष्ट लाइब्रेरी के साथ"],
        "answer_en": "Yes, if you have the type definitions",
        "answer_hi": "हाँ, यदि आपके पास प्रकार परिभाषाएँ हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What happens if you use Pick with non-existent keys?",
        "question_hi": "यदि आप Pick का उपयोग गैर-मौजूद कुंजियों के साथ करते हैं तो क्या होता है?",
        "options_en": ["TypeScript shows a compile error", "It ignores them", "It adds them", "It creates an any type"],
        "options_hi": ["TypeScript एक कंपाइल त्रुटि दिखाता है", "यह उन्हें अनदेखा करता है", "यह उन्हें जोड़ता है", "यह कोई प्रकार बनाता है"],
        "answer_en": "TypeScript shows a compile error",
        "answer_hi": "TypeScript एक कंपाइल त्रुटि दिखाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How does Record differ from an index signature?",
        "question_hi": "Record एक इंडेक्स सिग्नेचर से कैसे भिन्न है?",
        "options_en": ["Record is more specific about allowed keys", "They are identical", "Index signature is more flexible", "Record doesn't allow string keys"],
        "options_hi": ["Record अनुमत कुंजियों के बारे में अधिक विशिष्ट है", "वे समान हैं", "इंडेक्स सिग्नेचर अधिक लचीला है", "Record स्ट्रिंग कुंजियों की अनुमति नहीं देता"],
        "answer_en": "Record is more specific about allowed keys",
        "answer_hi": "Record अनुमत कुंजियों के बारे में अधिक विशिष्ट है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the benefit of using NonNullable over manual type guards?",
        "question_hi": "मैन्युअल टाइप गार्ड्स पर NonNullable का उपयोग करने का क्या लाभ है?",
        "options_en": ["Compile-time safety without runtime checks", "Better performance", "More readable code", "All of the above"],
        "options_hi": ["रनटाइम जांच के बिना कंपाइल-टाइम सुरक्षा", "बेहतर प्रदर्शन", "अधिक पठनीय कोड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Can Parameters extract default parameter values?",
        "question_hi": "क्या Parameters डिफ़ॉल्ट पैरामीटर मान निकाल सकते हैं?",
        "options_en": ["No, it only gets the declared types", "Yes, it includes default values", "Sometimes", "Only with specific configuration"],
        "options_hi": ["नहीं, यह केवल घोषित प्रकार प्राप्त करता है", "हाँ, इसमें डिफ़ॉल्ट मान शामिल हैं", "कभी-कभी", "केवल विशिष्ट कॉन्फ़िगरेशन के साथ"],
        "answer_en": "No, it only gets the declared types",
        "answer_hi": "नहीं, यह केवल घोषित प्रकार प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does ReturnType<() => Promise<string>> give you?",
        "question_hi": "ReturnType<() => Promise<string>> आपको क्या देता है?",
        "options_en": ["Promise<string>", "string", "Awaited<Promise<string>>", "any"],
        "options_hi": ["Promise<string>", "string", "Awaited<Promise<string>>", "any"],
        "answer_en": "Promise<string>",
        "answer_hi": "Promise<string>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How does InstanceType work with abstract classes?",
        "question_hi": "InstanceType अमूर्त कक्षाओं के साथ कैसे काम करता है?",
        "options_en": ["It works the same way", "It returns never", "It causes an error", "It returns the abstract class itself"],
        "options_hi": ["यह उसी तरह काम करता है", "यह never लौटाता है", "यह एक त्रुटि का कारण बनता है", "यह अमूर्त कक्षा को ही लौटाता है"],
        "answer_en": "It works the same way",
        "answer_hi": "यह उसी तरह काम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is a common mistake with string utility types?",
        "question_hi": "स्ट्रिंग utility types के साथ एक सामान्य गलती क्या है?",
        "options_en": ["Expecting them to work at runtime", "Using them with numbers", "Forgetting to import them", "Using them with any"],
        "options_hi": ["उम्मीद करना कि वे रनटाइम पर काम करेंगे", "उनका उपयोग संख्याओं के साथ करना", "उन्हें आयात करना भूल जाना", "उनका उपयोग any के साथ करना"],
        "answer_en": "Expecting them to work at runtime",
        "answer_hi": "उम्मीद करना कि वे रनटाइम पर काम करेंगे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What does Awaited give you that Promise<T> doesn't?",
        "question_hi": "Awaited आपको क्या देता है जो Promise<T> नहीं देता?",
        "options_en": ["The resolved type inside the promise", "Better performance", "Runtime unwrapping", "Error handling"],
        "options_hi": ["Promise के अंदर का हल किया गया प्रकार", "बेहतर प्रदर्शन", "रनटाइम अनव्रैपिंग", "त्रुटि हैंडलिंग"],
        "answer_en": "The resolved type inside the promise",
        "answer_hi": "Promise के अंदर का हल किया गया प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do utility types help with refactoring?",
        "question_hi": "utility types रीफैक्टरिंग में कैसे मदद करते हैं?",
        "options_en": ["They maintain type relationships automatically", "They make code faster to refactor", "They remove the need for tests", "They automate refactoring"],
        "options_hi": ["वे प्रकार संबंधों को स्वचालित रूप से बनाए रखते हैं", "वे कोड को रीफैक्टर करने के लिए तेज़ बनाते हैं", "वे परीक्षणों की आवश्यकता को हटा देते हैं", "वे रीफैक्टरिंग को स्वचालित करते हैं"],
        "answer_en": "They maintain type relationships automatically",
        "answer_hi": "वे प्रकार संबंधों को स्वचालित रूप से बनाए रखते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the learning curve for utility types?",
        "question_hi": "utility types के लिए सीखने की अवस्था क्या है?",
        "options_en": ["Moderate - need understanding of generics", "Very steep", "Easy for beginners", "Only for experts"],
        "options_hi": ["मध्यम - सामान्य प्रकारों की समझ की आवश्यकता", "बहुत खड़ी", "शुरुआती लोगों के लिए आसान", "केवल विशेषज्ञों के लिए"],
        "answer_en": "Moderate - need understanding of generics",
        "answer_hi": "मध्यम - सामान्य प्रकारों की समझ की आवश्यकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Why are utility types considered a powerful TypeScript feature?",
        "question_hi": "utility types को एक शक्तिशाली TypeScript सुविधा क्यों माना जाता है?",
        "options_en": ["They enable complex type transformations with minimal code", "They make JavaScript faster", "They replace interfaces", "They work at runtime"],
        "options_hi": ["वे न्यूनतम कोड के साथ जटिल प्रकार परिवर्तन सक्षम करते हैं", "वे JavaScript को तेज़ बनाते हैं", "वे इंटरफेस को बदलते हैं", "वे रनटाइम पर काम करते हैं"],
        "answer_en": "They enable complex type transformations with minimal code",
        "answer_hi": "वे न्यूनतम कोड के साथ जटिल प्रकार परिवर्तन सक्षम करते हैं",
        "attempted": false,
        "selected": ""
    }
]
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