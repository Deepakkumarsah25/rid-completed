const questions = [
    {
        "num": 1,
        "question_en": "What is the primary benefit of Rust's zero-cost abstractions?",
        "question_hi": "Rust के जीरो-कॉस्ट एब्स्ट्रक्शन का प्राथमिक लाभ क्या है?",
        "options_en": ["No runtime overhead for high-level features", "Faster compilation", "Smaller binary size", "Easier syntax"],
        "options_hi": ["हाई-लेवल फीचर्स के लिए कोई रनटाइम ओवरहेड नहीं", "तेज कंपाइलेशन", "छोटा बाइनरी साइज", "आसान सिंटैक्स"],
        "answer_en": "No runtime overhead for high-level features",
        "answer_hi": "हाई-लेवल फीचर्स के लिए कोई रनटाइम ओवरहेड नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the 'move' keyword do in a closure?",
        "question_hi": "क्लोजर में 'move' कीवर्ड क्या करता है?",
        "options_en": ["Takes ownership of captured variables", "Moves the closure itself", "Copies variables", "References variables"],
        "options_hi": ["कैप्चर किए गए वेरिएबल्स का स्वामित्व लेता है", "क्लोजर को ही मूव करता है", "वेरिएबल्स को कॉपी करता है", "वेरिएबल्स को रेफरेंस करता है"],
        "answer_en": "Takes ownership of captured variables",
        "answer_hi": "कैप्चर किए गए वेरिएबल्स का स्वामित्व लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'turbofish' syntax (::<>) in Rust?",
        "question_hi": "Rust में 'टर्बोफिश' सिंटैक्स (::<>) का उद्देश्य क्या है?",
        "options_en": ["Explicitly specify generic type parameters", "Create fish operators", "Import modules", "Define traits"],
        "options_hi": ["जेनेरिक टाइप पैरामीटर्स को स्पष्ट रूप से निर्दिष्ट करना", "फिश ऑपरेटर्स बनाना", "मॉड्यूल आयात करना", "ट्रेट्स परिभाषित करना"],
        "answer_en": "Explicitly specify generic type parameters",
        "answer_hi": "जेनेरिक टाइप पैरामीटर्स को स्पष्ट रूप से निर्दिष्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the difference between 'associated functions' and 'methods' in Rust?",
        "question_hi": "Rust में 'एसोसिएटेड फंक्शन' और 'मेथड्स' में क्या अंतर है?",
        "options_en": ["Methods take self parameter, associated functions don't", "Methods are faster", "Associated functions are static", "No difference"],
        "options_hi": ["मेथड्स self पैरामीटर लेते हैं, एसोसिएटेड फंक्शन नहीं", "मेथड्स तेज हैं", "एसोसिएटेड फंक्शन स्टैटिक हैं", "कोई अंतर नहीं"],
        "answer_en": "Methods take self parameter, associated functions don't",
        "answer_hi": "मेथड्स self पैरामीटर लेते हैं, एसोसिएटेड फंक्शन नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does the 'unsafe' keyword allow in Rust?",
        "question_hi": "Rust में 'unsafe' कीवर्ड क्या अनुमति देता है?",
        "options_en": ["Bypass certain compiler checks", "Ignore all errors", "Make code faster", "Disable borrow checker"],
        "options_hi": ["कुछ कंपाइलर चेक्स को बायपास करना", "सभी एरर्स को इग्नोर करना", "कोड को तेज बनाना", "बोरो चेकर को डिसेबल करना"],
        "answer_en": "Bypass certain compiler checks",
        "answer_hi": "कुछ कंपाइलर चेक्स को बायपास करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of the 'PhantomData' marker struct?",
        "question_hi": "'PhantomData' मार्कर स्ट्रक्चर का उद्देश्य क्या है?",
        "options_en": ["Mark unused type parameters for safety", "Optimize memory layout", "Create ghost data", "Enable zero-sized types"],
        "options_hi": ["सुरक्षा के लिए अनउपयोगी टाइप पैरामीटर्स को मार्क करना", "मेमोरी लेआउट ऑप्टिमाइज़ करना", "घोस्ट डेटा बनाना", "जीरो-साइज्ड टाइप्स को एनेबल करना"],
        "answer_en": "Mark unused type parameters for safety",
        "answer_hi": "सुरक्षा के लिए अनउपयोगी टाइप पैरामीटर्स को मार्क करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the difference between 'const' and 'static' in Rust?",
        "question_hi": "Rust में 'const' और 'static' में क्या अंतर है?",
        "options_en": ["const is inlined, static has fixed memory location", "const is mutable", "static is faster", "No difference"],
        "options_hi": ["const इनलाइन होता है, static का फिक्स्ड मेमोरी लोकेशन होता है", "const म्यूटेबल है", "static तेज है", "कोई अंतर नहीं"],
        "answer_en": "const is inlined, static has fixed memory location",
        "answer_hi": "const इनलाइन होता है, static का फिक्स्ड मेमोरी लोकेशन होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the 'repr' attribute control in Rust?",
        "question_hi": "Rust में 'repr' एट्रिब्यूट क्या कंट्रोल करता है?",
        "options_en": ["Type representation in memory", "Function representation", "Trait representation", "Module representation"],
        "options_hi": ["मेमोरी में टाइप रिप्रेजेंटेशन", "फंक्शन रिप्रेजेंटेशन", "ट्रेट रिप्रेजेंटेशन", "मॉड्यूल रिप्रेजेंटेशन"],
        "answer_en": "Type representation in memory",
        "answer_hi": "मेमोरी में टाइप रिप्रेजेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'must_use' attribute?",
        "question_hi": "'must_use' एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Warn if return value is ignored", "Force function usage", "Optimize performance", "Check syntax"],
        "options_hi": ["चेतावनी दें यदि रिटर्न वैल्यू इग्नोर की गई है", "फंक्शन यूसेज फोर्स करना", "परफॉर्मेंस ऑप्टिमाइज़ करना", "सिंटैक्स चेक करना"],
        "answer_en": "Warn if return value is ignored",
        "answer_hi": "चेतावनी दें यदि रिटर्न वैल्यू इग्नोर की गई है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is a 'diverging function' in Rust?",
        "question_hi": "Rust में 'डाइवर्जिंग फंक्शन' क्या है?",
        "options_en": ["Function that never returns", "Function that diverges code", "Async function", "Generic function"],
        "options_hi": ["ऐसा फंक्शन जो कभी रिटर्न नहीं करता", "ऐसा फंक्शन जो कोड को डाइवर्ज करता है", "एसिंक फंक्शन", "जेनेरिक फंक्शन"],
        "answer_en": "Function that never returns",
        "answer_hi": "ऐसा फंक्शन जो कभी रिटर्न नहीं करता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does the 'cfg' attribute do?",
        "question_hi": "'cfg' एट्रिब्यूट क्या करता है?",
        "options_en": ["Conditional compilation", "Configure functions", "Check grammar", "Format code"],
        "options_hi": ["कंडीशनल कंपाइलेशन", "फंक्शन्स कॉन्फ़िगर करना", "ग्रामर चेक करना", "कोड फॉर्मेट करना"],
        "answer_en": "Conditional compilation",
        "answer_hi": "कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of the 'async' keyword in Rust?",
        "question_hi": "Rust में 'async' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Create asynchronous functions", "Make functions faster", "Enable parallelism", "Simplify syntax"],
        "options_hi": ["एसिंक्रोनस फंक्शन्स बनाना", "फंक्शन्स को तेज बनाना", "पैरेललिज्म एनेबल करना", "सिंटैक्स सरल बनाना"],
        "answer_en": "Create asynchronous functions",
        "answer_hi": "एसिंक्रोनस फंक्शन्स बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does the 'await' keyword do?",
        "question_hi": "'await' कीवर्ड क्या करता है?",
        "options_en": ["Pause async function until future completes", "Wait for thread", "Block execution", "Stop function"],
        "options_hi": ["फ्यूचर कंप्लीट होने तक एसिंक फंक्शन को पॉज करना", "थ्रेड की प्रतीक्षा", "एक्जिक्यूशन ब्लॉक करना", "फंक्शन रोकना"],
        "answer_en": "Pause async function until future completes",
        "answer_hi": "फ्यूचर कंप्लीट होने तक एसिंक फंक्शन को पॉज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is a 'future' in Rust's async system?",
        "question_hi": "Rust के एसिंक सिस्टम में 'फ्यूचर' क्या है?",
        "options_en": ["Value that may not be ready yet", "Thread result", "Function result", "Promise object"],
        "options_hi": ["ऐसा वैल्यू जो अभी तैयार नहीं हो सकता", "थ्रेड रिजल्ट", "फंक्शन रिजल्ट", "प्रॉमिस ऑब्जेक्ट"],
        "answer_en": "Value that may not be ready yet",
        "answer_hi": "ऐसा वैल्यू जो अभी तैयार नहीं हो सकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'Pin' type?",
        "question_hi": "'Pin' टाइप का उद्देश्य क्या है?",
        "options_en": ["Prevent moving of self-referential types", "Pin data to memory", "Fix variable locations", "Lock memory"],
        "options_hi": ["सेल्फ-रेफरेंशियल टाइप्स के मूव होने से रोकना", "डेटा को मेमोरी में पिन करना", "वेरिएबल लोकेशन्स फिक्स करना", "मेमोरी लॉक करना"],
        "answer_en": "Prevent moving of self-referential types",
        "answer_hi": "सेल्फ-रेफरेंशियल टाइप्स के मूव होने से रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does the 'Unpin' trait indicate?",
        "question_hi": "'Unpin' ट्रेट क्या दर्शाता है?",
        "options_en": ["Type is safe to move after pinning", "Type cannot be pinned", "Type is always pinned", "Type is unsafe"],
        "options_hi": ["टाइप पिनिंग के बाद मूव करने के लिए सुरक्षित है", "टाइप को पिन नहीं किया जा सकता", "टाइप हमेशा पिन रहता है", "टाइप अनसेफ है"],
        "answer_en": "Type is safe to move after pinning",
        "answer_hi": "टाइप पिनिंग के बाद मूव करने के लिए सुरक्षित है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'tokio' crate?",
        "question_hi": "'tokio' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Async runtime for Rust", "Testing framework", "Web framework", "Database ORM"],
        "options_hi": ["Rust के लिए एसिंक रनटाइम", "टेस्टिंग फ्रेमवर्क", "वेब फ्रेमवर्क", "डेटाबेस ORM"],
        "answer_en": "Async runtime for Rust",
        "answer_hi": "Rust के लिए एसिंक रनटाइम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the 'serde' crate provide?",
        "question_hi": "'serde' क्रेट क्या प्रदान करता है?",
        "options_en": ["Serialization and deserialization", "Server functionality", "Database access", "File I/O"],
        "options_hi": ["सीरियलाइज़ेशन और डी-सीरियलाइज़ेशन", "सर्वर फंक्शनैलिटी", "डेटाबेस एक्सेस", "फाइल I/O"],
        "answer_en": "Serialization and deserialization",
        "answer_hi": "सीरियलाइज़ेशन और डी-सीरियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'rayon' crate?",
        "question_hi": "'rayon' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Data parallelism", "Ray tracing", "Network operations", "GUI development"],
        "options_hi": ["डेटा पैरेललिज्म", "रे ट्रेसिंग", "नेटवर्क ऑपरेशन्स", "GUI डेवलपमेंट"],
        "answer_en": "Data parallelism",
        "answer_hi": "डेटा पैरेललिज्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does the 'actix-web' framework provide?",
        "question_hi": "'actix-web' फ्रेमवर्क क्या प्रदान करता है?",
        "options_en": ["Web application framework", "Actix runtime", "Web browser", "HTTP client"],
        "options_hi": ["वेब एप्लिकेशन फ्रेमवर्क", "Actix रनटाइम", "वेब ब्राउज़र", "HTTP क्लाइंट"],
        "answer_en": "Web application framework",
        "answer_hi": "वेब एप्लिकेशन फ्रेमवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'clap' crate?",
        "question_hi": "'clap' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Command line argument parsing", "GUI development", "File parsing", "Network parsing"],
        "options_hi": ["कमांड लाइन आर्ग्युमेंट पार्सिंग", "GUI डेवलपमेंट", "फाइल पार्सिंग", "नेटवर्क पार्सिंग"],
        "answer_en": "Command line argument parsing",
        "answer_hi": "कमांड लाइन आर्ग्युमेंट पार्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does the 'regex' crate provide?",
        "question_hi": "'regex' क्रेट क्या प्रदान करता है?",
        "options_en": ["Regular expression operations", "Region operations", "Register manipulation", "File operations"],
        "options_hi": ["रेगुलर एक्सप्रेशन ऑपरेशन्स", "रीजन ऑपरेशन्स", "रजिस्टर मैनिपुलेशन", "फाइल ऑपरेशन्स"],
        "answer_en": "Regular expression operations",
        "answer_hi": "रेगुलर एक्सप्रेशन ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the 'anyhow' crate?",
        "question_hi": "'anyhow' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Simplified error handling", "Any type operations", "How-to guides", "Debugging tools"],
        "options_hi": ["सरलीकृत एरर हैंडलिंग", "एनी टाइप ऑपरेशन्स", "हाउ-टू गाइड्स", "डिबगिंग टूल्स"],
        "answer_en": "Simplified error handling",
        "answer_hi": "सरलीकृत एरर हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does the 'thiserror' crate provide?",
        "question_hi": "'thiserror' क्रेट क्या प्रदान करता है?",
        "options_en": ["Procedural macros for error types", "This pointer functionality", "Error tracking", "This context"],
        "options_hi": ["एरर टाइप्स के लिए प्रोसीजरल मैक्रोस", "दिस पॉइंटर फंक्शनैलिटी", "एरर ट्रैकिंग", "दिस कॉन्टेक्स्ट"],
        "answer_en": "Procedural macros for error types",
        "answer_hi": "एरर टाइप्स के लिए प्रोसीजरल मैक्रोस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the 'log' crate?",
        "question_hi": "'log' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Logging facade", "Logarithm calculations", "Logic operations", "Login functionality"],
        "options_hi": ["लॉगिंग फेसड", "लॉगरिदम कैलकुलेशन", "लॉजिक ऑपरेशन्स", "लॉगिन फंक्शनैलिटी"],
        "answer_en": "Logging facade",
        "answer_hi": "लॉगिंग फेसड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does the 'tracing' crate provide?",
        "question_hi": "'tracing' क्रेट क्या प्रदान करता है?",
        "options_en": ["Structured diagnostic system", "Code tracing", "Execution tracing", "Variable tracing"],
        "options_hi": ["स्ट्रक्चर्ड डायग्नोस्टिक सिस्टम", "कोड ट्रेसिंग", "एक्जिक्यूशन ट्रेसिंग", "वेरिएबल ट्रेसिंग"],
        "answer_en": "Structured diagnostic system",
        "answer_hi": "स्ट्रक्चर्ड डायग्नोस्टिक सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the 'rand' crate?",
        "question_hi": "'rand' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Random number generation", "Range operations", "Random access", "Rank operations"],
        "options_hi": ["रैंडम नंबर जनरेशन", "रेंज ऑपरेशन्स", "रैंडम एक्सेस", "रैंक ऑपरेशन्स"],
        "answer_en": "Random number generation",
        "answer_hi": "रैंडम नंबर जनरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does the 'chrono' crate provide?",
        "question_hi": "'chrono' क्रेट क्या प्रदान करता है?",
        "options_en": ["Date and time handling", "Chronological sorting", "Time tracking", "Clock operations"],
        "options_hi": ["डेट और टाइम हैंडलिंग", "क्रोनोलॉजिकल सॉर्टिंग", "टाइम ट्रैकिंग", "क्लॉक ऑपरेशन्स"],
        "answer_en": "Date and time handling",
        "answer_hi": "डेट और टाइम हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'reqwest' crate?",
        "question_hi": "'reqwest' क्रेट का उद्देश्य क्या है?",
        "options_en": ["HTTP client functionality", "Request processing", "Web server", "Response handling"],
        "options_hi": ["HTTP क्लाइंट फंक्शनैलिटी", "रिक्वेस्ट प्रोसेसिंग", "वेब सर्वर", "रिस्पांस हैंडलिंग"],
        "answer_en": "HTTP client functionality",
        "answer_hi": "HTTP क्लाइंट फंक्शनैलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does the 'hyper' crate provide?",
        "question_hi": "'hyper' क्रेट क्या प्रदान करता है?",
        "options_en": ["HTTP implementation", "Hyper operations", "High performance", "Hyper text"],
        "options_hi": ["HTTP इम्प्लीमेंटेशन", "हाइपर ऑपरेशन्स", "हाई परफॉर्मेंस", "हाइपर टेक्स्ट"],
        "answer_en": "HTTP implementation",
        "answer_hi": "HTTP इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'sqlx' crate?",
        "question_hi": "'sqlx' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Async database access", "SQL execution", "Query execution", "Database management"],
        "options_hi": ["एसिंक डेटाबेस एक्सेस", "SQL एक्जिक्यूशन", "क्वेरी एक्जिक्यूशन", "डेटाबेस मैनेजमेंट"],
        "answer_en": "Async database access",
        "answer_hi": "एसिंक डेटाबेस एक्सेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does the 'diesel' crate provide?",
        "question_hi": "'diesel' क्रेट क्या प्रदान करता है?",
        "options_en": ["ORM and query builder", "Fuel calculations", "Engine operations", "Power management"],
        "options_hi": ["ORM और क्वेरी बिल्डर", "फ्यूल कैलकुलेशन", "इंजन ऑपरेशन्स", "पावर मैनेजमेंट"],
        "answer_en": "ORM and query builder",
        "answer_hi": "ORM और क्वेरी बिल्डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'rusqlite' crate?",
        "question_hi": "'rusqlite' क्रेट का उद्देश्य क्या है?",
        "options_en": ["SQLite database bindings", "Russian language support", "SQL operations", "Database migrations"],
        "options_hi": ["SQLite डेटाबेस बाइंडिंग्स", "रशियन लैंग्वेज सपोर्ट", "SQL ऑपरेशन्स", "डेटाबेस माइग्रेशन्स"],
        "answer_en": "SQLite database bindings",
        "answer_hi": "SQLite डेटाबेस बाइंडिंग्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does the 'postgres' crate provide?",
        "question_hi": "'postgres' क्रेट क्या प्रदान करता है?",
        "options_en": ["PostgreSQL database access", "Post operations", "Message posting", "Database posting"],
        "options_hi": ["PostgreSQL डेटाबेस एक्सेस", "पोस्ट ऑपरेशन्स", "मैसेज पोस्टिंग", "डेटाबेस पोस्टिंग"],
        "answer_en": "PostgreSQL database access",
        "answer_hi": "PostgreSQL डेटाबेस एक्सेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'mongodb' crate?",
        "question_hi": "'mongodb' क्रेट का उद्देश्य क्या है?",
        "options_en": ["MongoDB database driver", "Mongo operations", "Database management", "NoSQL access"],
        "options_hi": ["MongoDB डेटाबेस ड्राइवर", "मोंगो ऑपरेशन्स", "डेटाबेस मैनेजमेंट", "NoSQL एक्सेस"],
        "answer_en": "MongoDB database driver",
        "answer_hi": "MongoDB डेटाबेस ड्राइवर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does the 'redis' crate provide?",
        "question_hi": "'redis' क्रेट क्या प्रदान करता है?",
        "options_en": ["Redis database access", "Red operations", "Cache operations", "Key-value storage"],
        "options_hi": ["Redis डेटाबेस एक्सेस", "रेड ऑपरेशन्स", "कैश ऑपरेशन्स", "की-वैल्यू स्टोरेज"],
        "answer_en": "Redis database access",
        "answer_hi": "Redis डेटाबेस एक्सेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'lazy_static' crate?",
        "question_hi": "'lazy_static' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Lazy initialized statics", "Static analysis", "Lazy evaluation", "Static variables"],
        "options_hi": ["लेजी इनिशियलाइज्ड स्टैटिक्स", "स्टैटिक एनालिसिस", "लेजी एवलुएशन", "स्टैटिक वेरिएबल्स"],
        "answer_en": "Lazy initialized statics",
        "answer_hi": "लेजी इनिशियलाइज्ड स्टैटिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does the 'once_cell' crate provide?",
        "question_hi": "'once_cell' क्रेट क्या प्रदान करता है?",
        "options_en": ["Single assignment cells", "One-time cells", "Cell operations", "Single use cells"],
        "options_hi": ["सिंगल असाइनमेंट सेल्स", "वन-टाइम सेल्स", "सेल ऑपरेशन्स", "सिंगल यूज सेल्स"],
        "answer_en": "Single assignment cells",
        "answer_hi": "सिंगल असाइनमेंट सेल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'crossbeam' crate?",
        "question_hi": "'crossbeam' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Concurrency utilities", "Cross-platform beams", "Beam operations", "Cross operations"],
        "options_hi": ["कनकरेंसी यूटिलिटीज", "क्रॉस-प्लेटफॉर्म बीम्स", "बीम ऑपरेशन्स", "क्रॉस ऑपरेशन्स"],
        "answer_en": "Concurrency utilities",
        "answer_hi": "कनकरेंसी यूटिलिटीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does the 'parking_lot' crate provide?",
        "question_hi": "'parking_lot' क्रेट क्या प्रदान करता है?",
        "options_en": ["Synchronization primitives", "Parking operations", "Lot management", "Vehicle parking"],
        "options_hi": ["सिंक्रोनाइज़ेशन प्रिमिटिव्स", "पार्किंग ऑपरेशन्स", "लॉट मैनेजमेंट", "व्हीकल पार्किंग"],
        "answer_en": "Synchronization primitives",
        "answer_hi": "सिंक्रोनाइज़ेशन प्रिमिटिव्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'bytes' crate?",
        "question_hi": "'bytes' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Byte manipulation utilities", "Byte operations", "Memory bytes", "File bytes"],
        "options_hi": ["बाइट मैनिपुलेशन यूटिलिटीज", "बाइट ऑपरेशन्स", "मेमोरी बाइट्स", "फाइल बाइट्स"],
        "answer_en": "Byte manipulation utilities",
        "answer_hi": "बाइट मैनिपुलेशन यूटिलिटीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does the 'mio' crate provide?",
        "question_hi": "'mio' क्रेट क्या प्रदान करता है?",
        "options_en": ["Metal I/O library", "My I/O operations", "Memory I/O", "Minimum I/O"],
        "options_hi": ["मेटल I/O लाइब्रेरी", "माय I/O ऑपरेशन्स", "मेमोरी I/O", "मिनिमम I/O"],
        "answer_en": "Metal I/O library",
        "answer_hi": "मेटल I/O लाइब्रेरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'nom' crate?",
        "question_hi": "'nom' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Parser combinators", "Name parsing", "Nominal operations", "Number parsing"],
        "options_hi": ["पार्सर कॉम्बिनेटर्स", "नेम पार्सिंग", "नॉमिनल ऑपरेशन्स", "नंबर पार्सिंग"],
        "answer_en": "Parser combinators",
        "answer_hi": "पार्सर कॉम्बिनेटर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does the 'pest' crate provide?",
        "question_hi": "'pest' क्रेट क्या प्रदान करता है?",
        "options_en": ["PEG parser generator", "Pest control", "Parsing pests", "Error pests"],
        "options_hi": ["PEG पार्सर जनरेटर", "पेस्ट कंट्रोल", "पार्सिंग पेस्ट्स", "एरर पेस्ट्स"],
        "answer_en": "PEG parser generator",
        "answer_hi": "PEG पार्सर जनरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'walkdir' crate?",
        "question_hi": "'walkdir' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Directory walking", "Walk operations", "Directory operations", "File walking"],
        "options_hi": ["डायरेक्टरी वॉकिंग", "वॉक ऑपरेशन्स", "डायरेक्टरी ऑपरेशन्स", "फाइल वॉकिंग"],
        "answer_en": "Directory walking",
        "answer_hi": "डायरेक्टरी वॉकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does the 'tempfile' crate provide?",
        "question_hi": "'tempfile' क्रेट क्या प्रदान करता है?",
        "options_en": ["Temporary file handling", "Temperature files", "Template files", "Temporal files"],
        "options_hi": ["टेम्पररी फाइल हैंडलिंग", "टेम्परेचर फाइल्स", "टेम्पलेट फाइल्स", "टेम्पोरल फाइल्स"],
        "answer_en": "Temporary file handling",
        "answer_hi": "टेम्पररी फाइल हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'ignore' crate?",
        "question_hi": "'ignore' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Gitignore-style file walking", "Ignore operations", "File ignoring", "Pattern ignoring"],
        "options_hi": ["Gitignore-स्टाइल फाइल वॉकिंग", "इग्नोर ऑपरेशन्स", "फाइल इग्नोरिंग", "पैटर्न इग्नोरिंग"],
        "answer_en": "Gitignore-style file walking",
        "answer_hi": "Gitignore-स्टाइल फाइल वॉकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does the 'glob' crate provide?",
        "question_hi": "'glob' क्रेट क्या प्रदान करता है?",
        "options_en": ["Glob pattern matching", "Global operations", "Globe operations", "Pattern globbing"],
        "options_hi": ["ग्लोब पैटर्न मैचिंग", "ग्लोबल ऑपरेशन्स", "ग्लोब ऑपरेशन्स", "पैटर्न ग्लोबिंग"],
        "answer_en": "Glob pattern matching",
        "answer_hi": "ग्लोब पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'semver' crate?",
        "question_hi": "'semver' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Semantic version parsing", "Version operations", "Semantic operations", "Version semantics"],
        "options_hi": ["सिमेंटिक वर्जन पार्सिंग", "वर्जन ऑपरेशन्स", "सिमेंटिक ऑपरेशन्स", "वर्जन सिमेंटिक्स"],
        "answer_en": "Semantic version parsing",
        "answer_hi": "सिमेंटिक वर्जन पार्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does the 'toml' crate provide?",
        "question_hi": "'toml' क्रेट क्या प्रदान करता है?",
        "options_en": ["TOML file parsing", "Tom operations", "Toml language", "Toml syntax"],
        "options_hi": ["TOML फाइल पार्सिंग", "टॉम ऑपरेशन्स", "टॉमल लैंग्वेज", "टॉमल सिंटैक्स"],
        "answer_en": "TOML file parsing",
        "answer_hi": "TOML फाइल पार्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'yaml' crate?",
        "question_hi": "'yaml' क्रेट का उद्देश्य क्या है?",
        "options_en": ["YAML file parsing", "Yaml operations", "Yaml language", "Yaml syntax"],
        "options_hi": ["YAML फाइल पार्सिंग", "यामल ऑपरेशन्स", "यामल लैंग्वेज", "यामल सिंटैक्स"],
        "answer_en": "YAML file parsing",
        "answer_hi": "YAML फाइल पार्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does the 'json' crate provide?",
        "question_hi": "'json' क्रेट क्या प्रदान करता है?",
        "options_en": ["JSON parsing and serialization", "Json operations", "Json language", "Json syntax"],
        "options_hi": ["JSON पार्सिंग और सीरियलाइज़ेशन", "जेसन ऑपरेशन्स", "जेसन लैंग्वेज", "जेसन सिंटैक्स"],
        "answer_en": "JSON parsing and serialization",
        "answer_hi": "JSON पार्सिंग और सीरियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'csv' crate?",
        "question_hi": "'csv' क्रेट का उद्देश्य क्या है?",
        "options_en": ["CSV file reading and writing", "Csv operations", "Csv format", "Csv syntax"],
        "options_hi": ["CSV फाइल रीडिंग और राइटिंग", "सीएसवी ऑपरेशन्स", "सीएसवी फॉर्मेट", "सीएसवी सिंटैक्स"],
        "answer_en": "CSV file reading and writing",
        "answer_hi": "CSV फाइल रीडिंग और राइटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does the 'flate2' crate provide?",
        "question_hi": "'flate2' क्रेट क्या प्रदान करता है?",
        "options_en": ["GZIP and DEFLATE compression", "Flate operations", "Compression algorithms", "File compression"],
        "options_hi": ["GZIP और DEFLATE कम्प्रेशन", "फ्लेट ऑपरेशन्स", "कम्प्रेशन एल्गोरिदम", "फाइल कम्प्रेशन"],
        "answer_en": "GZIP and DEFLATE compression",
        "answer_hi": "GZIP और DEFLATE कम्प्रेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'tar' crate?",
        "question_hi": "'tar' क्रेट का उद्देश्य क्या है?",
        "options_en": ["TAR archive handling", "Tar operations", "Archive operations", "File archiving"],
        "options_hi": ["TAR आर्काइव हैंडलिंग", "टार ऑपरेशन्स", "आर्काइव ऑपरेशन्स", "फाइल आर्काइविंग"],
        "answer_en": "TAR archive handling",
        "answer_hi": "TAR आर्काइव हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does the 'zip' crate provide?",
        "question_hi": "'zip' क्रेट क्या प्रदान करता है?",
        "options_en": ["ZIP archive handling", "Zip operations", "Compression operations", "File zipping"],
        "options_hi": ["ZIP आर्काइव हैंडलिंग", "ज़िप ऑपरेशन्स", "कम्प्रेशन ऑपरेशन्स", "फाइल ज़िपिंग"],
        "answer_en": "ZIP archive handling",
        "answer_hi": "ZIP आर्काइव हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'libc' crate?",
        "question_hi": "'libc' क्रेट का उद्देश्य क्या है?",
        "options_en": ["C library bindings", "Library operations", "C operations", "System calls"],
        "options_hi": ["C लाइब्रेरी बाइंडिंग्स", "लाइब्रेरी ऑपरेशन्स", "C ऑपरेशन्स", "सिस्टम कॉल्स"],
        "answer_en": "C library bindings",
        "answer_hi": "C लाइब्रेरी बाइंडिंग्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does the 'nix' crate provide?",
        "question_hi": "'nix' क्रेट क्या प्रदान करता है?",
        "options_en": ["Unix API bindings", "Nix operations", "Unix operations", "System APIs"],
        "options_hi": ["Unix API बाइंडिंग्स", "निक्स ऑपरेशन्स", "यूनिक्स ऑपरेशन्स", "सिस्टम APIs"],
        "answer_en": "Unix API bindings",
        "answer_hi": "Unix API बाइंडिंग्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'winapi' crate?",
        "question_hi": "'winapi' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Windows API bindings", "Win operations", "Windows operations", "API bindings"],
        "options_hi": ["विंडोज API बाइंडिंग्स", "विन ऑपरेशन्स", "विंडोज ऑपरेशन्स", "API बाइंडिंग्स"],
        "answer_en": "Windows API bindings",
        "answer_hi": "विंडोज API बाइंडिंग्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does the 'mach' crate provide?",
        "question_hi": "'mach' क्रेट क्या प्रदान करता है?",
        "options_en": ["macOS kernel interfaces", "Machine operations", "Mach operations", "Kernel interfaces"],
        "options_hi": ["macOS करनेल इंटरफेस", "मशीन ऑपरेशन्स", "मैक ऑपरेशन्स", "करनेल इंटरफेस"],
        "answer_en": "macOS kernel interfaces",
        "answer_hi": "macOS करनेल इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'cc' crate?",
        "question_hi": "'cc' क्रेट का उद्देश्य क्या है?",
        "options_en": ["C/C++ compiler integration", "C compiler", "C++ compiler", "Code compilation"],
        "options_hi": ["C/C++ कंपाइलर इंटीग्रेशन", "C कंपाइलर", "C++ कंपाइलर", "कोड कंपाइलेशन"],
        "answer_en": "C/C++ compiler integration",
        "answer_hi": "C/C++ कंपाइलर इंटीग्रेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does the 'pkg-config' crate provide?",
        "question_hi": "'pkg-config' क्रेट क्या प्रदान करता है?",
        "options_en": ["System library detection", "Package configuration", "Package management", "System configuration"],
        "options_hi": ["सिस्टम लाइब्रेरी डिटेक्शन", "पैकेज कॉन्फ़िगरेशन", "पैकेज मैनेजमेंट", "सिस्टम कॉन्फ़िगरेशन"],
        "answer_en": "System library detection",
        "answer_hi": "सिस्टम लाइब्रेरी डिटेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'cmake' crate?",
        "question_hi": "'cmake' क्रेट का उद्देश्य क्या है?",
        "options_en": ["CMake build system integration", "Cmake operations", "Build system", "System building"],
        "options_hi": ["CMake बिल्ड सिस्टम इंटीग्रेशन", "सीमेक ऑपरेशन्स", "बिल्ड सिस्टम", "सिस्टम बिल्डिंग"],
        "answer_en": "CMake build system integration",
        "answer_hi": "CMake बिल्ड सिस्टम इंटीग्रेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does the 'bindgen' crate provide?",
        "question_hi": "'bindgen' क्रेट क्या प्रदान करता है?",
        "options_en": ["C binding generation", "Binding generation", "C++ bindings", "Foreign bindings"],
        "options_hi": ["C बाइंडिंग जनरेशन", "बाइंडिंग जनरेशन", "C++ बाइंडिंग्स", "फॉरेन बाइंडिंग्स"],
        "answer_en": "C binding generation",
        "answer_hi": "C बाइंडिंग जनरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'criterion' crate?",
        "question_hi": "'criterion' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Benchmarking library", "Criteria checking", "Performance criteria", "Benchmark criteria"],
        "options_hi": ["बेंचमार्किंग लाइब्रेरी", "क्राइटेरिया चेकिंग", "परफॉर्मेंस क्राइटेरिया", "बेंचमार्क क्राइटेरिया"],
        "answer_en": "Benchmarking library",
        "answer_hi": "बेंचमार्किंग लाइब्रेरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does the 'benchmark' crate provide?",
        "question_hi": "'benchmark' क्रेट क्या प्रदान करता है?",
        "options_en": ["Benchmarking utilities", "Bench operations", "Performance bench", "Testing bench"],
        "options_hi": ["बेंचमार्किंग यूटिलिटीज", "बेंच ऑपरेशन्स", "परफॉर्मेंस बेंच", "टेस्टिंग बेंच"],
        "answer_en": "Benchmarking utilities",
        "answer_hi": "बेंचमार्किंग यूटिलिटीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'proptest' crate?",
        "question_hi": "'proptest' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Property-based testing", "Property testing", "Test properties", "Property checks"],
        "options_hi": ["प्रॉपर्टी-बेस्ड टेस्टिंग", "प्रॉपर्टी टेस्टिंग", "टेस्ट प्रॉपर्टीज", "प्रॉपर्टी चेक्स"],
        "answer_en": "Property-based testing",
        "answer_hi": "प्रॉपर्टी-बेस्ड टेस्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does the 'quickcheck' crate provide?",
        "question_hi": "'quickcheck' क्रेट क्या प्रदान करता है?",
        "options_en": ["Property-based testing with random data", "Quick checking", "Fast testing", "Random testing"],
        "options_hi": ["रैंडम डेटा के साथ प्रॉपर्टी-बेस्ड टेस्टिंग", "क्विक चेकिंग", "फास्ट टेस्टिंग", "रैंडम टेस्टिंग"],
        "answer_en": "Property-based testing with random data",
        "answer_hi": "रैंडम डेटा के साथ प्रॉपर्टी-बेस्ड टेस्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'mockall' crate?",
        "question_hi": "'mockall' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Mocking framework for tests", "Mock all objects", "Testing mocks", "Object mocking"],
        "options_hi": ["टेस्ट्स के लिए मॉकिंग फ्रेमवर्क", "सभी ऑब्जेक्ट्स मॉक करें", "टेस्टिंग मॉक्स", "ऑब्जेक्ट मॉकिंग"],
        "answer_en": "Mocking framework for tests",
        "answer_hi": "टेस्ट्स के लिए मॉकिंग फ्रेमवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does the 'test-case' crate provide?",
        "question_hi": "'test-case' क्रेट क्या प्रदान करता है?",
        "options_en": ["Parameterized test cases", "Test case generation", "Case testing", "Parameter testing"],
        "options_hi": ["पैरामीटराइज्ड टेस्ट केस", "टेस्ट केस जनरेशन", "केस टेस्टिंग", "पैरामीटर टेस्टिंग"],
        "answer_en": "Parameterized test cases",
        "answer_hi": "पैरामीटराइज्ड टेस्ट केस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'coveralls' crate?",
        "question_hi": "'coveralls' क्रेट का उद्देश्य क्या है?",
        "options_en": ["Code coverage reporting", "Coverage analysis", "Test coverage", "Code coverage"],
        "options_hi": ["कोड कवरेज रिपोर्टिंग", "कवरेज एनालिसिस", "टेस्ट कवरेज", "कोड कवरेज"],
        "answer_en": "Code coverage reporting",
        "answer_hi": "कोड कवरेज रिपोर्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does the 'tarpaulin' crate provide?",
        "question_hi": "'tarpaulin' क्रेट क्या प्रदान करता है?",
        "options_en": ["Code coverage tool", "Tarpaulin operations", "Coverage tool", "Test coverage"],
        "options_hi": ["कोड कवरेज टूल", "टारपॉलिन ऑपरेशन्स", "कवरेज टूल", "टेस्ट कवरेज"],
        "answer_en": "Code coverage tool",
        "answer_hi": "कोड कवरेज टूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'cargo-fuzz' tool?",
        "question_hi": "'cargo-fuzz' टूल का उद्देश्य क्या है?",
        "options_en": ["Fuzz testing for Rust", "Fuzz operations", "Testing fuzz", "Random fuzzing"],
        "options_hi": ["Rust के लिए फज टेस्टिंग", "फज ऑपरेशन्स", "टेस्टिंग फज", "रैंडम फजिंग"],
        "answer_en": "Fuzz testing for Rust",
        "answer_hi": "Rust के लिए फज टेस्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does the 'cargo-audit' tool provide?",
        "question_hi": "'cargo-audit' टूल क्या प्रदान करता है?",
        "options_en": ["Security vulnerability checking", "Code auditing", "Security audit", "Vulnerability audit"],
        "options_hi": ["सिक्योरिटी वल्नरेबिलिटी चेकिंग", "कोड ऑडिटिंग", "सिक्योरिटी ऑडिट", "वल्नरेबिलिटी ऑडिट"],
        "answer_en": "Security vulnerability checking",
        "answer_hi": "सिक्योरिटी वल्नरेबिलिटी चेकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'cargo-outdated' tool?",
        "question_hi": "'cargo-outdated' टूल का उद्देश्य क्या है?",
        "options_en": ["Check for outdated dependencies", "Outdated code", "Dependency checking", "Version checking"],
        "options_hi": ["आउटडेटेड डिपेंडेंसीज की जांच", "आउटडेटेड कोड", "डिपेंडेंसी चेकिंग", "वर्जन चेकिंग"],
        "answer_en": "Check for outdated dependencies",
        "answer_hi": "आउटडेटेड डिपेंडेंसीज की जांच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does the 'cargo-tree' tool provide?",
        "question_hi": "'cargo-tree' टूल क्या प्रदान करता है?",
        "options_en": ["Dependency tree visualization", "Tree operations", "Dependency tree", "Package tree"],
        "options_hi": ["डिपेंडेंसी ट्री विज़ुअलाइज़ेशन", "ट्री ऑपरेशन्स", "डिपेंडेंसी ट्री", "पैकेज ट्री"],
        "answer_en": "Dependency tree visualization",
        "answer_hi": "डिपेंडेंसी ट्री विज़ुअलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'cargo-bloat' tool?",
        "question_hi": "'cargo-bloat' टूल का उद्देश्य क्या है?",
        "options_en": ["Analyze binary size bloat", "Bloat analysis", "Size analysis", "Binary analysis"],
        "options_hi": ["बाइनरी साइज ब्लोट का एनालिसिस", "ब्लोट एनालिसिस", "साइज एनालिसिस", "बाइनरी एनालिसिस"],
        "answer_en": "Analyze binary size bloat",
        "answer_hi": "बाइनरी साइज ब्लोट का एनालिसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does the 'cargo-expand' tool provide?",
        "question_hi": "'cargo-expand' टूल क्या प्रदान करता है?",
        "options_en": ["Expand macro code", "Code expansion", "Macro expansion", "Syntax expansion"],
        "options_hi": ["मैक्रो कोड एक्सपैंड", "कोड एक्सपेंशन", "मैक्रो एक्सपेंशन", "सिंटैक्स एक्सपेंशन"],
        "answer_en": "Expand macro code",
        "answer_hi": "मैक्रो कोड एक्सपैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'cargo-watch' tool?",
        "question_hi": "'cargo-watch' टूल का उद्देश्य क्या है?",
        "options_en": ["Rerun commands on file changes", "File watching", "Change detection", "Command rerunning"],
        "options_hi": ["फाइल चेंजेज पर कमांड्स को दोबारा रन करना", "फाइल वॉचिंग", "चेंज डिटेक्शन", "कमांड रीरनिंग"],
        "answer_en": "Rerun commands on file changes",
        "answer_hi": "फाइल चेंजेज पर कमांड्स को दोबारा रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does the 'cargo-make' tool provide?",
        "question_hi": "'cargo-make' टूल क्या प्रदान करता है?",
        "options_en": ["Task runner and build tool", "Make operations", "Task running", "Build tasks"],
        "options_hi": ["टास्क रनर और बिल्ड टूल", "मेक ऑपरेशन्स", "टास्क रनिंग", "बिल्ड टास्क्स"],
        "answer_en": "Task runner and build tool",
        "answer_hi": "टास्क रनर और बिल्ड टूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'cargo-edit' tool?",
        "question_hi": "'cargo-edit' टूल का उद्देश्य क्या है?",
        "options_en": ["Add/remove dependencies from command line", "Dependency editing", "Cargo editing", "Package editing"],
        "options_hi": ["कमांड लाइन से डिपेंडेंसीज एड/रिमूव करना", "डिपेंडेंसी एडिटिंग", "कार्गो एडिटिंग", "पैकेज एडिटिंग"],
        "answer_en": "Add/remove dependencies from command line",
        "answer_hi": "कमांड लाइन से डिपेंडेंसीज एड/रिमूव करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does the 'cargo-release' tool provide?",
        "question_hi": "'cargo-release' टूल क्या प्रदान करता है?",
        "options_en": ["Release automation", "Release operations", "Version releasing", "Package releasing"],
        "options_hi": ["रिलीज ऑटोमेशन", "रिलीज ऑपरेशन्स", "वर्जन रिलीजिंग", "पैकेज रिलीजिंग"],
        "answer_en": "Release automation",
        "answer_hi": "रिलीज ऑटोमेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'cargo-deny' tool?",
        "question_hi": "'cargo-deny' टूल का उद्देश्य क्या है?",
        "options_en": ["Dependency linting and checking", "Dependency denial", "Package denial", "License checking"],
        "options_hi": ["डिपेंडेंसी लिंटिंग और चेकिंग", "डिपेंडेंसी डिनायल", "पैकेज डिनायल", "लाइसेंस चेकिंग"],
        "answer_en": "Dependency linting and checking",
        "answer_hi": "डिपेंडेंसी लिंटिंग और चेकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does the 'cargo-crev' tool provide?",
        "question_hi": "'cargo-crev' टूल क्या प्रदान करता है?",
        "options_en": ["Code review and verification", "Code review", "Verification system", "Security review"],
        "options_hi": ["कोड रिव्यू और वेरिफिकेशन", "कोड रिव्यू", "वेरिफिकेशन सिस्टम", "सिक्योरिटी रिव्यू"],
        "answer_en": "Code review and verification",
        "answer_hi": "कोड रिव्यू और वेरिफिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'cargo-vendor' tool?",
        "question_hi": "'cargo-vendor' टूल का उद्देश्य क्या है?",
        "options_en": ["Vendor dependencies locally", "Vendor operations", "Local dependencies", "Package vending"],
        "options_hi": ["डिपेंडेंसीज को लोकली वेंडर करना", "वेंडर ऑपरेशन्स", "लोकल डिपेंडेंसीज", "पैकेज वेंडिंग"],
        "answer_en": "Vendor dependencies locally",
        "answer_hi": "डिपेंडेंसीज को लोकली वेंडर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does the 'cargo-bundle' tool provide?",
        "question_hi": "'cargo-bundle' टूल क्या प्रदान करता है?",
        "options_en": ["Bundle applications for distribution", "Bundle operations", "Application bundling", "Package bundling"],
        "options_hi": ["डिस्ट्रीब्यूशन के लिए एप्लिकेशन बंडल करना", "बंडल ऑपरेशन्स", "एप्लिकेशन बंडलिंग", "पैकेज बंडलिंग"],
        "answer_en": "Bundle applications for distribution",
        "answer_hi": "डिस्ट्रीब्यूशन के लिए एप्लिकेशन बंडल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'cargo-deb' tool?",
        "question_hi": "'cargo-deb' टूल का उद्देश्य क्या है?",
        "options_en": ["Create Debian packages", "Deb operations", "Package creation", "Debian packaging"],
        "options_hi": ["डेबियन पैकेजेस बनाना", "डेब ऑपरेशन्स", "पैकेज क्रिएशन", "डेबियन पैकेजिंग"],
        "answer_en": "Create Debian packages",
        "answer_hi": "डेबियन पैकेजेस बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does the 'cargo-rpm' tool provide?",
        "question_hi": "'cargo-rpm' टूल क्या प्रदान करता है?",
        "options_en": ["Create RPM packages", "Rpm operations", "RPM packaging", "Package building"],
        "options_hi": ["RPM पैकेजेस बनाना", "RPM ऑपरेशन्स", "RPM पैकेजिंग", "पैकेज बिल्डिंग"],
        "answer_en": "Create RPM packages",
        "answer_hi": "RPM पैकेजेस बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'cargo-msi' tool?",
        "question_hi": "'cargo-msi' टूल का उद्देश्य क्या है?",
        "options_en": ["Create Windows MSI installers", "Msi operations", "Windows packaging", "Installer creation"],
        "options_hi": ["विंडोज MSI इंस्टॉलर्स बनाना", "MSI ऑपरेशन्स", "विंडोज पैकेजिंग", "इंस्टॉलर क्रिएशन"],
        "answer_en": "Create Windows MSI installers",
        "answer_hi": "विंडोज MSI इंस्टॉलर्स बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does the 'cargo-appimage' tool provide?",
        "question_hi": "'cargo-appimage' टूल क्या प्रदान करता है?",
        "options_en": ["Create AppImage packages", "Appimage operations", "Linux packaging", "Application images"],
        "options_hi": ["AppImage पैकेजेस बनाना", "AppImage ऑपरेशन्स", "लिनक्स पैकेजिंग", "एप्लिकेशन इमेजेस"],
        "answer_en": "Create AppImage packages",
        "answer_hi": "AppImage पैकेजेस बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'cargo-web' tool?",
        "question_hi": "'cargo-web' टूल का उद्देश्य क्या है?",
        "options_en": ["WebAssembly compilation and deployment", "Web operations", "Wasm compilation", "Web deployment"],
        "options_hi": ["वेबएसेंबली कंपाइलेशन और डिप्लॉयमेंट", "वेब ऑपरेशन्स", "Wasm कंपाइलेशन", "वेब डिप्लॉयमेंट"],
        "answer_en": "WebAssembly compilation and deployment",
        "answer_hi": "वेबएसेंबली कंपाइलेशन और डिप्लॉयमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does the 'wasm-bindgen' tool provide?",
        "question_hi": "'wasm-bindgen' टूल क्या प्रदान करता है?",
        "options_en": ["JavaScript-WASM interoperability", "Wasm binding", "JavaScript binding", "Interoperability"],
        "options_hi": ["JavaScript-WASM इंटरऑपरेबिलिटी", "Wasm बाइंडिंग", "JavaScript बाइंडिंग", "इंटरऑपरेबिलिटी"],
        "answer_en": "JavaScript-WASM interoperability",
        "answer_hi": "JavaScript-WASM इंटरऑपरेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'wasm-pack' tool?",
        "question_hi": "'wasm-pack' टूल का उद्देश्य क्या है?",
        "options_en": ["Build and publish WASM packages", "Wasm packaging", "Package building", "Wasm publishing"],
        "options_hi": ["Wasm पैकेजेस बिल्ड और पब्लिश करना", "Wasm पैकेजिंग", "पैकेज बिल्डिंग", "Wasm पब्लिशिंग"],
        "answer_en": "Build and publish WASM packages",
        "answer_hi": "Wasm पैकेजेस बिल्ड और पब्लिश करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does the 'cargo-asm' tool provide?",
        "question_hi": "'cargo-asm' टूल क्या प्रदान करता है?",
        "options_en": ["View assembly code of Rust functions", "Asm operations", "Assembly viewing", "Code assembly"],
        "options_hi": ["Rust फंक्शन्स का असेंबली कोड देखना", "Asm ऑपरेशन्स", "असेंबली व्यूइंग", "कोड असेंबली"],
        "answer_en": "View assembly code of Rust functions",
        "answer_hi": "Rust फंक्शन्स का असेंबली कोड देखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'cargo-llvm-lines' tool?",
        "question_hi": "'cargo-llvm-lines' टूल का उद्देश्य क्या है?",
        "options_en": ["Count LLVM IR lines per function", "Llvm lines", "IR counting", "Function analysis"],
        "options_hi": ["प्रति फंक्शन LLVM IR लाइन्स काउंट करना", "Llvm लाइन्स", "IR काउंटिंग", "फंक्शन एनालिसिस"],
        "answer_en": "Count LLVM IR lines per function",
        "answer_hi": "प्रति फंक्शन LLVM IR लाइन्स काउंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does the 'cargo-geiger' tool provide?",
        "question_hi": "'cargo-geiger' टूल क्या प्रदान करता है?",
        "options_en": ["Detect usage of unsafe code", "Geiger operations", "Unsafe detection", "Security detection"],
        "options_hi": ["अनसेफ कोड के यूसेज का डिटेक्शन", "गाइगर ऑपरेशन्स", "अनसेफ डिटेक्शन", "सिक्योरिटी डिटेक्शन"],
        "answer_en": "Detect usage of unsafe code",
        "answer_hi": "अनसेफ कोड के यूसेज का डिटेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'cargo-sweep' tool?",
        "question_hi": "'cargo-sweep' टूल का उद्देश्य क्या है?",
        "options_en": ["Clean unused build artifacts", "Sweep operations", "Build cleaning", "Artifact cleaning"],
        "options_hi": ["अनउपयोगी बिल्ड आर्टिफैक्ट्स को क्लीन करना", "स्वीप ऑपरेशन्स", "बिल्ड क्लीनिंग", "आर्टिफैक्ट क्लीनिंग"],
        "answer_en": "Clean unused build artifacts",
        "answer_hi": "अनउपयोगी बिल्ड आर्टिफैक्ट्स को क्लीन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does the 'cargo-udeps' tool provide?",
        "question_hi": "'cargo-udeps' टूल क्या प्रदान करता है?",
        "options_en": ["Find unused dependencies", "Udeps operations", "Dependency analysis", "Unused detection"],
        "options_hi": ["अनउपयोगी डिपेंडेंसीज ढूंढना", "Udeps ऑपरेशन्स", "डिपेंडेंसी एनालिसिस", "अनउपयोगी डिटेक्शन"],
        "answer_en": "Find unused dependencies",
        "answer_hi": "अनउपयोगी डिपेंडेंसीज ढूंढना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'cargo-bisect-rustc' tool?",
        "question_hi": "'cargo-bisect-rustc' टूल का उद्देश्य क्या है?",
        "options_en": ["Find regression in rustc versions", "Bisect operations", "Regression finding", "Compiler bisecting"],
        "options_hi": ["rustc वर्जन्स में रिग्रेशन ढूंढना", "बाइसेक्ट ऑपरेशन्स", "रिग्रेशन फाइंडिंग", "कंपाइलर बाइसेक्टिंग"],
        "answer_en": "Find regression in rustc versions",
        "answer_hi": "rustc वर्जन्स में रिग्रेशन ढूंढना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does the 'cargo-criterion' tool provide?",
        "question_hi": "'cargo-criterion' टूल क्या प्रदान करता है?",
        "options_en": ["Criterion benchmarking integration", "Criterion operations", "Benchmark integration", "Performance benchmarking"],
        "options_hi": ["क्राइटेरियन बेंचमार्किंग इंटीग्रेशन", "क्राइटेरियन ऑपरेशन्स", "बेंचमार्क इंटीग्रेशन", "परफॉर्मेंस बेंचमार्किंग"],
        "answer_en": "Criterion benchmarking integration",
        "answer_hi": "क्राइटेरियन बेंचमार्किंग इंटीग्रेशन",
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