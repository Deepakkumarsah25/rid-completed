const questions=[
    {
        "num": 1,
        "question_en": "What is the Rust memory model based on?",
        "question_hi": "Rust मेमोरी मॉडल किस पर आधारित है?",
        "options_en": ["Ownership and borrowing", "Garbage collection", "Reference counting", "Manual memory management"],
        "options_hi": ["स्वामित्व और उधार", "गार्बेज कलेक्शन", "रिफरेन्स काउंटिंग", "मैनुअल मेमोरी मैनेजमेंट"],
        "answer_en": "Ownership and borrowing",
        "answer_hi": "स्वामित्व और उधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which company originally sponsored Rust development?",
        "question_hi": "किस कंपनी ने मूल रूप से Rust विकास को प्रायोजित किया?",
        "options_en": ["Mozilla", "Microsoft", "Google", "Apple"],
        "options_hi": ["मोज़िला", "माइक्रोसॉफ्ट", "गूगल", "एप्पल"],
        "answer_en": "Mozilla",
        "answer_hi": "मोज़िला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What year was Rust first announced?",
        "question_hi": "Rust पहली बार किस वर्ष घोषित किया गया था?",
        "options_en": ["2010", "2008", "2012", "2015"],
        "options_hi": ["2010", "2008", "2012", "2015"],
        "answer_en": "2010",
        "answer_hi": "2010",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is Cargo in Rust?",
        "question_hi": "Rust में Cargo क्या है?",
        "options_en": ["Package manager and build tool", "Compiler", "Text editor", "Debugger"],
        "options_hi": ["पैकेज मैनेजर और बिल्ड टूल", "कंपाइलर", "टेक्स्ट एडिटर", "डीबगर"],
        "answer_en": "Package manager and build tool",
        "answer_hi": "पैकेज मैनेजर और बिल्ड टूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What file extension do Rust source files use?",
        "question_hi": "Rust सोर्स फाइलें किस फाइल एक्सटेंशन का उपयोग करती हैं?",
        "options_en": [".rs", ".rust", ".rc", ".r"],
        "options_hi": [".rs", ".rust", ".rc", ".r"],
        "answer_en": ".rs",
        "answer_hi": ".rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What command creates a new Rust project?",
        "question_hi": "कौन सा कमांड नया Rust प्रोजेक्ट बनाता है?",
        "options_en": ["cargo new", "rust new", "cargo init", "rust create"],
        "options_hi": ["cargo new", "rust new", "cargo init", "rust create"],
        "answer_en": "cargo new",
        "answer_hi": "cargo new",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What command compiles and runs a Rust program?",
        "question_hi": "कौन सा कमांड Rust प्रोग्राम को कंपाइल और रन करता है?",
        "options_en": ["cargo run", "rust run", "cargo build && cargo execute", "rust execute"],
        "options_hi": ["cargo run", "rust run", "cargo build && cargo execute", "rust execute"],
        "answer_en": "cargo run",
        "answer_hi": "cargo run",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the Rust compiler called?",
        "question_hi": "Rust कंपाइलर को क्या कहा जाता है?",
        "options_en": ["rustc", "rc", "rust-compile", "rsc"],
        "options_hi": ["rustc", "rc", "rust-compile", "rsc"],
        "answer_en": "rustc",
        "answer_hi": "rustc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does RAII stand for in Rust context?",
        "question_hi": "Rust संदर्भ में RAII का क्या अर्थ है?",
        "options_en": ["Resource Acquisition Is Initialization", "Rust Allocation Interface Implementation", "Runtime Allocation and Initialization", "Resource Allocation Interface"],
        "options_hi": ["रिसोर्स एक्विजिशन इज इनिशियलाइज़ेशन", "Rust अलोकेशन इंटरफेस इम्प्लीमेंटेशन", "रनटाइम अलोकेशन एंड इनिशियलाइज़ेशन", "रिसोर्स अलोकेशन इंटरफेस"],
        "answer_en": "Resource Acquisition Is Initialization",
        "answer_hi": "रिसोर्स एक्विजिशन इज इनिशियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the Rust mascot?",
        "question_hi": "Rust का शुभंकर क्या है?",
        "options_en": ["Ferris the crab", "Rusty the robot", "Crabby the crustacean", "Ruster the crab"],
        "options_hi": ["फेरिस द क्रैब", "रस्टी द रोबोट", "क्रैबी द क्रस्टेशियन", "रस्टर द क्रैब"],
        "answer_en": "Ferris the crab",
        "answer_hi": "फेरिस द क्रैब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the default Rust edition as of 2024?",
        "question_hi": "2024 तक डिफॉल्ट Rust एडिशन क्या है?",
        "options_en": ["2021", "2018", "2015", "2024"],
        "options_hi": ["2021", "2018", "2015", "2024"],
        "answer_en": "2021",
        "answer_hi": "2021",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the Rust Foundation?",
        "question_hi": "Rust फाउंडेशन क्या है?",
        "options_en": ["Independent organization governing Rust", "Rust compiler team", "Rust package repository", "Rust documentation site"],
        "options_hi": ["Rust को संचालित करने वाला स्वतंत्र संगठन", "Rust कंपाइलर टीम", "Rust पैकेज रिपॉजिटरी", "Rust डॉक्यूमेंटेशन साइट"],
        "answer_en": "Independent organization governing Rust",
        "answer_hi": "Rust को संचालित करने वाला स्वतंत्र संगठन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What programming paradigm does Rust primarily follow?",
        "question_hi": "Rust मुख्य रूप से किस प्रोग्रामिंग पैराडाइम का पालन करता है?",
        "options_en": ["Multi-paradigm: imperative, functional, OOP", "Pure object-oriented", "Pure functional", "Procedural only"],
        "options_hi": ["मल्टी-पैराडाइम: इम्पेरेटिव, फंक्शनल, OOP", "प्योर ऑब्जेक्ट-ओरिएंटेड", "प्योर फंक्शनल", "केवल प्रोसीजरल"],
        "answer_en": "Multi-paradigm: imperative, functional, OOP",
        "answer_hi": "मल्टी-पैराडाइम: इम्पेरेटिव, फंक्शनल, OOP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the Rust package registry called?",
        "question_hi": "Rust पैकेज रजिस्ट्री को क्या कहा जाता है?",
        "options_en": ["crates.io", "rust-packages.org", "cargo.io", "packages.rs"],
        "options_hi": ["crates.io", "rust-packages.org", "cargo.io", "packages.rs"],
        "answer_en": "crates.io",
        "answer_hi": "crates.io",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is a 'crate' in Rust?",
        "question_hi": "Rust में 'crate' क्या है?",
        "options_en": ["A package of Rust code", "A compilation error", "A memory allocation", "A type of variable"],
        "options_hi": ["Rust कोड का एक पैकेज", "एक कंपाइलेशन एरर", "एक मेमोरी अलोकेशन", "एक प्रकार का वेरिएबल"],
        "answer_en": "A package of Rust code",
        "answer_hi": "Rust कोड का एक पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the Rustonomicon?",
        "question_hi": "Rustonomicon क्या है?",
        "options_en": ["The Dark Arts of Advanced and Unsafe Rust Programming", "Rust style guide", "Rust compiler documentation", "Rust package manager guide"],
        "options_hi": ["एडवांस्ड और अनसेफ Rust प्रोग्रामिंग की डार्क आर्ट्स", "Rust स्टाइल गाइड", "Rust कंपाइलर डॉक्यूमेंटेशन", "Rust पैकेज मैनेजर गाइड"],
        "answer_en": "The Dark Arts of Advanced and Unsafe Rust Programming",
        "answer_hi": "एडवांस्ड और अनसेफ Rust प्रोग्रामिंग की डार्क आर्ट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does MIR stand for in Rust compilation?",
        "question_hi": "Rust कंपाइलेशन में MIR का क्या अर्थ है?",
        "options_en": ["Mid-level Intermediate Representation", "Memory Intermediate Representation", "Main Intermediate Runtime", "Module Intermediate Representation"],
        "options_hi": ["मिड-लेवल इंटरमीडिएट रिप्रेजेंटेशन", "मेमोरी इंटरमीडिएट रिप्रेजेंटेशन", "मेन इंटरमीडिएट रनटाइम", "मॉड्यूल इंटरमीडिएट रिप्रेजेंटेशन"],
        "answer_en": "Mid-level Intermediate Representation",
        "answer_hi": "मिड-लेवल इंटरमीडिएट रिप्रेजेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the Rust performance compared to C++?",
        "question_hi": "C++ की तुलना में Rust का प्रदर्शन कैसा है?",
        "options_en": ["Comparable", "Much slower", "Much faster", "Incomparable"],
        "options_hi": ["तुलनीय", "बहुत धीमा", "बहुत तेज", "अतुलनीय"],
        "answer_en": "Comparable",
        "answer_hi": "तुलनीय",
        "attempted": false,
        "selected": ""
    },
   {
        "num": 19,
        "question_en": "What is Rust's primary design goal?",
        "question_hi": "Rust का प्राथमिक डिजाइन लक्ष्य क्या है?",
        "options_en": ["Memory safety without garbage collection", "Maximum performance", "Easy syntax", "Dynamic typing"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा", "अधिकतम प्रदर्शन", "आसान सिंटैक्स", "डायनामिक टाइपिंग"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा",
        "attempted": false,
        "selected": ""
    }, 
    {
        "num": 20,
        "question_en": "What is the Rust error handling philosophy?",
        "question_hi": "Rust एरर हैंडलिंग फिलॉसफी क्या है?",
        "options_en": ["Use Result and Option types", "Use exceptions", "Use error codes", "Use panic for all errors"],
        "options_hi": ["Result और Option टाइप्स का उपयोग करें", "एक्सेप्शन्स का उपयोग करें", "एरर कोड्स का उपयोग करें", "सभी एरर के लिए पैनिक का उपयोग करें"],
        "answer_en": "Use Result and Option types",
        "answer_hi": "Result और Option टाइप्स का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the Rust community's code of conduct called?",
        "question_hi": "Rust कम्युनिटी के कोड ऑफ कंडक्ट को क्या कहा जाता है?",
        "options_en": ["The Rust Code of Conduct", "Rust Community Guidelines", "Rust Behavior Rules", "The Rust Way"],
        "options_hi": ["द Rust कोड ऑफ कंडक्ट", "Rust कम्युनिटी गाइडलाइन्स", "Rust बिहेवियर रूल्स", "द Rust वे"],
        "answer_en": "The Rust Code of Conduct",
        "answer_hi": "द Rust कोड ऑफ कंडक्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the Rust standard library commonly called?",
        "question_hi": "Rust स्टैंडर्ड लाइब्रेरी को आमतौर पर क्या कहा जाता है?",
        "options_en": ["std", "core", "libstd", "rustlib"],
        "options_hi": ["std", "core", "libstd", "rustlib"],
        "answer_en": "std",
        "answer_hi": "std",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is no_std in Rust?",
        "question_hi": "Rust में no_std क्या है?",
        "options_en": ["Programming without the standard library", "A compiler flag for optimization", "A type of data structure", "A memory allocation strategy"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी के बिना प्रोग्रामिंग", "ऑप्टिमाइज़ेशन के लिए एक कंपाइलर फ्लैग", "एक प्रकार की डेटा स्ट्रक्चर", "एक मेमोरी अलोकेशन स्ट्रैटेजी"],
        "answer_en": "Programming without the standard library",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी के बिना प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the Rust testing framework called?",
        "question_hi": "Rust टेस्टिंग फ्रेमवर्क को क्या कहा जाता है?",
        "options_en": ["Built-in with #[test] attribute", "RustTest", "CargoTest", "RustUnit"],
        "options_hi": ["बिल्ट-इन विथ #[test] एट्रिब्यूट", "RustTest", "CargoTest", "RustUnit"],
        "answer_en": "Built-in with #[test] attribute",
        "answer_hi": "बिल्ट-इन विथ #[test] एट्रिब्यूट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the Rust formatter called?",
        "question_hi": "Rust फॉर्मेटर को क्या कहा जाता है?",
        "options_en": ["rustfmt", "cargo fmt", "rust-format", "fmt-rs"],
        "options_hi": ["rustfmt", "cargo fmt", "rust-format", "fmt-rs"],
        "answer_en": "rustfmt",
        "answer_hi": "rustfmt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the Rust linter called?",
        "question_hi": "Rust लिंटर को क्या कहा जाता है?",
        "options_en": ["clippy", "rust-lint", "cargo lint", "linter-rs"],
        "options_hi": ["clippy", "rust-lint", "cargo lint", "linter-rs"],
        "answer_en": "clippy",
        "answer_hi": "clippy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the Rust documentation generator called?",
        "question_hi": "Rust डॉक्यूमेंटेशन जनरेटर को क्या कहा जाता है?",
        "options_en": ["rustdoc", "cargo doc", "doc-rs", "rust-docs"],
        "options_hi": ["rustdoc", "cargo doc", "doc-rs", "rust-docs"],
        "answer_en": "rustdoc",
        "answer_hi": "rustdoc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the Rust package manifest file called?",
        "question_hi": "Rust पैकेज मैनिफेस्ट फाइल को क्या कहा जाता है?",
        "options_en": ["Cargo.toml", "package.json", "Cargo.json", "rust.toml"],
        "options_hi": ["Cargo.toml", "package.json", "Cargo.json", "rust.toml"],
        "answer_en": "Cargo.toml",
        "answer_hi": "Cargo.toml",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the main Rust documentation website?",
        "question_hi": "मुख्य Rust डॉक्यूमेंटेशन वेबसाइट क्या है?",
        "options_en": ["doc.rust-lang.org", "docs.rs", "rust-docs.org", "learnrust.org"],
        "options_hi": ["doc.rust-lang.org", "docs.rs", "rust-docs.org", "learnrust.org"],
        "answer_en": "doc.rust-lang.org",
        "answer_hi": "doc.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the Rust playground?",
        "question_hi": "Rust प्लेग्राउंड क्या है?",
        "options_en": ["Online Rust code editor", "Rust game development framework", "Rust testing environment", "Rust package repository"],
        "options_hi": ["ऑनलाइन Rust कोड एडिटर", "Rust गेम डेवलपमेंट फ्रेमवर्क", "Rust टेस्टिंग एनवायरनमेंट", "Rust पैकेज रिपॉजिटरी"],
        "answer_en": "Online Rust code editor",
        "answer_hi": "ऑनलाइन Rust कोड एडिटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the Rust version release schedule?",
        "question_hi": "Rust वर्जन रिलीज़ शेड्यूल क्या है?",
        "options_en": ["Every 6 weeks", "Monthly", "Quarterly", "Yearly"],
        "options_hi": ["हर 6 सप्ताह", "मासिक", "त्रैमासिक", "वार्षिक"],
        "answer_en": "Every 6 weeks",
        "answer_hi": "हर 6 सप्ताह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the Rust stability promise?",
        "question_hi": "Rust स्टेबिलिटी प्रॉमिस क्या है?",
        "options_en": ["Backward compatibility for stable releases", "No breaking changes ever", "Only security updates", "Complete API stability"],
        "options_hi": ["स्टेबल रिलीज़ के लिए बैकवर्ड कम्पेटिबिलिटी", "कोई ब्रेकिंग चेंज नहीं", "केवल सिक्योरिटी अपडेट्स", "कम्प्लीट API स्टेबिलिटी"],
        "answer_en": "Backward compatibility for stable releases",
        "answer_hi": "स्टेबल रिलीज़ के लिए बैकवर्ड कम्पेटिबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What are Rust's release channels?",
        "question_hi": "Rust के रिलीज़ चैनल क्या हैं?",
        "options_en": ["Stable, beta, nightly", "Production, development, testing", "Main, feature, patch", "Release, debug, profile"],
        "options_hi": ["स्टेबल, बीटा, नाइटली", "प्रोडक्शन, डेवलपमेंट, टेस्टिंग", "मेन, फीचर, पैच", "रिलीज़, डीबग, प्रोफाइल"],
        "answer_en": "Stable, beta, nightly",
        "answer_hi": "स्टेबल, बीटा, नाइटली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the Rust community discussion forum?",
        "question_hi": "Rust कम्युनिटी डिस्कशन फोरम क्या है?",
        "options_en": ["users.rust-lang.org", "discuss.rust-lang.org", "forum.rust-lang.org", "community.rust-lang.org"],
        "options_hi": ["users.rust-lang.org", "discuss.rust-lang.org", "forum.rust-lang.org", "community.rust-lang.org"],
        "answer_en": "users.rust-lang.org",
        "answer_hi": "users.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the Rust internship program called?",
        "question_hi": "Rust इंटर्नशिप प्रोग्राम को क्या कहा जाता है?",
        "options_en": ["Rust Summer of Code", "Rust Internship Program", "Google Summer of Code for Rust", "Rust Foundation Internships"],
        "options_hi": ["Rust समर ऑफ कोड", "Rust इंटर्नशिप प्रोग्राम", "गूगल समर ऑफ कोड फॉर Rust", "Rust फाउंडेशन इंटर्नशिप्स"],
        "answer_en": "Rust Summer of Code",
        "answer_hi": "Rust समर ऑफ कोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the Rust working groups system?",
        "question_hi": "Rust वर्किंग ग्रुप्स सिस्टम क्या है?",
        "options_en": ["Teams focusing on specific areas of Rust", "Rust study groups", "Rust programming teams", "Rust development companies"],
        "options_hi": ["Rust के विशिष्ट क्षेत्रों पर ध्यान केंद्रित करने वाली टीमें", "Rust स्टडी ग्रुप्स", "Rust प्रोग्रामिंग टीम्स", "Rust डेवलपमेंट कंपनियां"],
        "answer_en": "Teams focusing on specific areas of Rust",
        "answer_hi": "Rust के विशिष्ट क्षेत्रों पर ध्यान केंद्रित करने वाली टीमें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the Rust RFC process?",
        "question_hi": "Rust RFC प्रोसेस क्या है?",
        "options_en": ["Request for Comments for major changes", "Rust Feature Committee", "Rust Feedback Collection", "Rust Change Management"],
        "options_hi": ["मेजर चेंजेस के लिए रिक्वेस्ट फॉर कमेंट्स", "Rust फीचर कमेटी", "Rust फीडबैक कलेक्शन", "Rust चेंज मैनेजमेंट"],
        "answer_en": "Request for Comments for major changes",
        "answer_hi": "मेजर चेंजेस के लिए रिक्वेस्ट फॉर कमेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the Rust code coverage tool?",
        "question_hi": "Rust कोड कवरेज टूल क्या है?",
        "options_en": ["tarpaulin", "rust-cov", "cargo coverage", "coverage-rs"],
        "options_hi": ["tarpaulin", "rust-cov", "cargo coverage", "coverage-rs"],
        "answer_en": "tarpaulin",
        "answer_hi": "tarpaulin",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the Rust benchmarking framework?",
        "question_hi": "Rust बेंचमार्किंग फ्रेमवर्क क्या है?",
        "options_en": ["criterion", "bench-rs", "rust-bench", "cargo bench"],
        "options_hi": ["criterion", "bench-rs", "rust-bench", "cargo bench"],
        "answer_en": "criterion",
        "answer_hi": "criterion",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the Rust profiler?",
        "question_hi": "Rust प्रोफाइलर क्या है?",
        "options_en": ["perf and flamegraph", "rust-prof", "cargo profile", "profile-rs"],
        "options_hi": ["perf और flamegraph", "rust-prof", "cargo profile", "profile-rs"],
        "answer_en": "perf and flamegraph",
        "answer_hi": "perf और flamegraph",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the Rust memory leak detector?",
        "question_hi": "Rust मेमोरी लीक डिटेक्टर क्या है?",
        "options_en": ["Valgrind with Rust support", "rust-leak", "cargo leak", "leak-rs"],
        "options_hi": ["Valgrind विथ Rust सपोर्ट", "rust-leak", "cargo leak", "leak-rs"],
        "answer_en": "Valgrind with Rust support",
        "answer_hi": "Valgrind विथ Rust सपोर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the Rust sanitizer support?",
        "question_hi": "Rust सैनिटाइज़र सपोर्ट क्या है?",
        "options_en": ["AddressSanitizer, MemorySanitizer", "rust-sanitize", "cargo sanitize", "sanitizer-rs"],
        "options_hi": ["AddressSanitizer, MemorySanitizer", "rust-sanitize", "cargo sanitize", "sanitizer-rs"],
        "answer_en": "AddressSanitizer, MemorySanitizer",
        "answer_hi": "AddressSanitizer, MemorySanitizer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the Rust fuzzing framework?",
        "question_hi": "Rust फज़िंग फ्रेमवर्क क्या है?",
        "options_en": ["cargo fuzz", "rust-fuzz", "fuzz-rs", "afl-rs"],
        "options_hi": ["cargo fuzz", "rust-fuzz", "fuzz-rs", "afl-rs"],
        "answer_en": "cargo fuzz",
        "answer_hi": "cargo fuzz",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the Rust WebAssembly support tool?",
        "question_hi": "Rust WebAssembly सपोर्ट टूल क्या है?",
        "options_en": ["wasm-pack", "rust-wasm", "cargo wasm", "wasm-rs"],
        "options_hi": ["wasm-pack", "rust-wasm", "cargo wasm", "wasm-rs"],
        "answer_en": "wasm-pack",
        "answer_hi": "wasm-pack",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the Rust embedded working group?",
        "question_hi": "Rust एम्बेडेड वर्किंग ग्रुप क्या है?",
        "options_en": ["Team focusing on embedded systems", "Rust hardware team", "Rust IoT development", "Embedded Rust Foundation"],
        "options_hi": ["एम्बेडेड सिस्टम्स पर फोकस करने वाली टीम", "Rust हार्डवेयर टीम", "Rust IoT डेवलपमेंट", "एम्बेडेड Rust फाउंडेशन"],
        "answer_en": "Team focusing on embedded systems",
        "answer_hi": "एम्बेडेड सिस्टम्स पर फोकस करने वाली टीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the Rust game development working group?",
        "question_hi": "Rust गेम डेवलपमेंट वर्किंग ग्रुप क्या है?",
        "options_en": ["Team focusing on game development", "Rust Gaming Foundation", "Rust Game Engine Team", "Game Rust Developers"],
        "options_hi": ["गेम डेवलपमेंट पर फोकस करने वाली टीम", "Rust गेमिंग फाउंडेशन", "Rust गेम इंजन टीम", "गेम Rust डेवलपर्स"],
        "answer_en": "Team focusing on game development",
        "answer_hi": "गेम डेवलपमेंट पर फोकस करने वाली टीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the Rust web development framework ecosystem?",
        "question_hi": "Rust वेब डेवलपमेंट फ्रेमवर्क इकोसिस्टम क्या है?",
        "options_en": ["Actix, Rocket, Warp", "RustWeb, WebRS, HttpRS", "Cargo Web, Rust Server", "Web Framework Rust"],
        "options_hi": ["Actix, Rocket, Warp", "RustWeb, WebRS, HttpRS", "Cargo Web, Rust Server", "Web Framework Rust"],
        "answer_en": "Actix, Rocket, Warp",
        "answer_hi": "Actix, Rocket, Warp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the Rust GUI framework ecosystem?",
        "question_hi": "Rust GUI फ्रेमवर्क इकोसिस्टम क्या है?",
        "options_en": ["Iced, Druid, Slint", "RustGUI, GuiRS, WindowRS", "Cargo GUI, Rust UI", "GUI Framework Rust"],
        "options_hi": ["Iced, Druid, Slint", "RustGUI, GuiRS, WindowRS", "Cargo GUI, Rust UI", "GUI Framework Rust"],
        "answer_en": "Iced, Druid, Slint",
        "answer_hi": "Iced, Druid, Slint",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the Rust machine learning ecosystem?",
        "question_hi": "Rust मशीन लर्निंग इकोसिस्टम क्या है?",
        "options_en": ["Linfa, Burn, Candle", "RustML, MLRS, LearnRS", "Cargo ML, Rust AI", "Machine Learning Rust"],
        "options_hi": ["Linfa, Burn, Candle", "RustML, MLRS, LearnRS", "Cargo ML, Rust AI", "मशीन लर्निंग Rust"],
        "answer_en": "Linfa, Burn, Candle",
        "answer_hi": "Linfa, Burn, Candle",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the Rust blockchain development ecosystem?",
        "question_hi": "Rust ब्लॉकचेन डेवलपमेंट इकोसिस्टम क्या है?",
        "options_en": ["Substrate, Solana, Near", "RustChain, BlockRS, CryptoRS", "Cargo Blockchain, Rust Crypto", "Blockchain Rust"],
        "options_hi": ["Substrate, Solana, Near", "RustChain, BlockRS, CryptoRS", "Cargo Blockchain, Rust Crypto", "ब्लॉकचेन Rust"],
        "answer_en": "Substrate, Solana, Near",
        "answer_hi": "Substrate, Solana, Near",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the Rust operating system development?",
        "question_hi": "Rust ऑपरेटिंग सिस्टम डेवलपमेंट क्या है?",
        "options_en": ["Redox OS", "RustOS", "KernelRS", "OS-RS"],
        "options_hi": ["Redox OS", "RustOS", "KernelRS", "OS-RS"],
        "answer_en": "Redox OS",
        "answer_hi": "Redox OS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the Rust database ecosystem?",
        "question_hi": "Rust डेटाबेस इकोसिस्टम क्या है?",
        "options_en": ["Diesel, SQLx, SeaORM", "RustDB, DatabaseRS, QueryRS", "Cargo DB, Rust SQL", "Database Rust"],
        "options_hi": ["Diesel, SQLx, SeaORM", "RustDB, DatabaseRS, QueryRS", "Cargo DB, Rust SQL", "डेटाबेस Rust"],
        "answer_en": "Diesel, SQLx, SeaORM",
        "answer_hi": "Diesel, SQLx, SeaORM",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the Rust serialization ecosystem?",
        "question_hi": "Rust सीरियलाइज़ेशन इकोसिस्टम क्या है?",
        "options_en": ["Serde", "SerializeRS", "RustSerialize", "Cargo Serialize"],
        "options_hi": ["Serde", "SerializeRS", "RustSerialize", "Cargo Serialize"],
        "answer_en": "Serde",
        "answer_hi": "Serde",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the Rust async runtime ecosystem?",
        "question_hi": "Rust async रनटाइम इकोसिस्टम क्या है?",
        "options_en": ["Tokio, async-std, smol", "RustAsync, AsyncRS, FutureRS", "Cargo Async, Rust Future", "Async Runtime Rust"],
        "options_hi": ["Tokio, async-std, smol", "RustAsync, AsyncRS, FutureRS", "Cargo Async, Rust Future", "Async रनटाइम Rust"],
        "answer_en": "Tokio, async-std, smol",
        "answer_hi": "Tokio, async-std, smol",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the Rust command line interface ecosystem?",
        "question_hi": "Rust कमांड लाइन इंटरफेस इकोसिस्टम क्या है?",
        "options_en": ["Clap", "ArgRS", "RustCLI", "Cargo CLI"],
        "options_hi": ["Clap", "ArgRS", "RustCLI", "Cargo CLI"],
        "answer_en": "Clap",
        "answer_hi": "Clap",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the Rust configuration management ecosystem?",
        "question_hi": "Rust कॉन्फ़िगरेशन मैनेजमेंट इकोसिस्टम क्या है?",
        "options_en": ["Config", "Confy", "Figment", "All of the above"],
        "options_hi": ["Config", "Confy", "Figment", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the Rust logging ecosystem?",
        "question_hi": "Rust लॉगिंग इकोसिस्टम क्या है?",
        "options_en": ["log, tracing, slog", "LogRS, TraceRS, LoggerRS", "Cargo Log, Rust Log", "Logging Rust"],
        "options_hi": ["log, tracing, slog", "LogRS, TraceRS, LoggerRS", "Cargo Log, Rust Log", "लॉगिंग Rust"],
        "answer_en": "log, tracing, slog",
        "answer_hi": "log, tracing, slog",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the Rust testing ecosystem beyond unit tests?",
        "question_hi": "यूनिट टेस्ट्स से परे Rust टेस्टिंग इकोसिस्टम क्या है?",
        "options_en": ["proptest, quickcheck, mockall", "TestRS, CheckRS, MockRS", "Cargo Test Extended, Rust Testing", "Testing Rust"],
        "options_hi": ["proptest, quickcheck, mockall", "TestRS, CheckRS, MockRS", "Cargo Test Extended, Rust Testing", "टेस्टिंग Rust"],
        "answer_en": "proptest, quickcheck, mockall",
        "answer_hi": "proptest, quickcheck, mockall",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the Rust FFI (Foreign Function Interface) ecosystem?",
        "question_hi": "Rust FFI (फॉरेन फंक्शन इंटरफेस) इकोसिस्टम क्या है?",
        "options_en": ["bindgen, cbindgen", "FFI-RS, BindRS", "Cargo FFI, Rust Bindings", "FFI Rust"],
        "options_hi": ["bindgen, cbindgen", "FFI-RS, BindRS", "Cargo FFI, Rust Bindings", "FFI Rust"],
        "answer_en": "bindgen, cbindgen",
        "answer_hi": "bindgen, cbindgen",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the Rust cryptography ecosystem?",
        "question_hi": "Rust क्रिप्टोग्राफी इकोसिस्टम क्या है?",
        "options_en": ["ring, rustls, openssl", "CryptoRS, SecureRS, EncryptRS", "Cargo Crypto, Rust Security", "Cryptography Rust"],
        "options_hi": ["ring, rustls, openssl", "CryptoRS, SecureRS, EncryptRS", "Cargo Crypto, Rust Security", "क्रिप्टोग्राफी Rust"],
        "answer_en": "ring, rustls, openssl",
        "answer_hi": "ring, rustls, openssl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the Rust image processing ecosystem?",
        "question_hi": "Rust इमेज प्रोसेसिंग इकोसिस्टम क्या है?",
        "options_en": ["image", "ImageRS", "RustImage", "Cargo Image"],
        "options_hi": ["image", "ImageRS", "RustImage", "Cargo Image"],
        "answer_en": "image",
        "answer_hi": "image",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the Rust scientific computing ecosystem?",
        "question_hi": "Rust साइंटिफिक कंप्यूटिंग इकोसिस्टम क्या है?",
        "options_en": ["ndarray", "ArrayRS", "RustArray", "Cargo Scientific"],
        "options_hi": ["ndarray", "ArrayRS", "RustArray", "Cargo Scientific"],
        "answer_en": "ndarray",
        "answer_hi": "ndarray",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the Rust game engine ecosystem?",
        "question_hi": "Rust गेम इंजन इकोसिस्टम क्या है?",
        "options_en": ["Bevy", "GameRS", "RustGame", "Cargo Game"],
        "options_hi": ["Bevy", "GameRS", "RustGame", "Cargo Game"],
        "answer_en": "Bevy",
        "answer_hi": "Bevy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the Rust web frontend framework?",
        "question_hi": "Rust वेब फ्रंटएंड फ्रेमवर्क क्या है?",
        "options_en": ["Yew, Leptos, Dioxus", "WebFrontRS, FrontendRS", "Cargo Web Frontend", "Web Frontend Rust"],
        "options_hi": ["Yew, Leptos, Dioxus", "WebFrontRS, FrontendRS", "Cargo Web Frontend", "वेब फ्रंटएंड Rust"],
        "answer_en": "Yew, Leptos, Dioxus",
        "answer_hi": "Yew, Leptos, Dioxus",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the Rust build system beyond Cargo?",
        "question_hi": "Cargo से परे Rust बिल्ड सिस्टम क्या है?",
        "options_en": ["Bazel with rules_rust", "BuildRS", "RustBuild", "Cargo Advanced"],
        "options_hi": ["Bazel with rules_rust", "BuildRS", "RustBuild", "Cargo Advanced"],
        "answer_en": "Bazel with rules_rust",
        "answer_hi": "Bazel with rules_rust",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the Rust IDE support ecosystem?",
        "question_hi": "Rust IDE सपोर्ट इकोसिस्टम क्या है?",
        "options_en": ["rust-analyzer", "RustIDE", "IDERS", "Cargo IDE"],
        "options_hi": ["rust-analyzer", "RustIDE", "IDERS", "Cargo IDE"],
        "answer_en": "rust-analyzer",
        "answer_hi": "rust-analyzer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the Rust debugger support?",
        "question_hi": "Rust डीबगर सपोर्ट क्या है?",
        "options_en": ["gdb and lldb with Rust support", "DebugRS", "RustDebug", "Cargo Debug"],
        "options_hi": ["gdb और lldb विथ Rust सपोर्ट", "DebugRS", "RustDebug", "Cargo Debug"],
        "answer_en": "gdb and lldb with Rust support",
        "answer_hi": "gdb और lldb विथ Rust सपोर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the Rust package for error handling?",
        "question_hi": "एरर हैंडलिंग के लिए Rust पैकेज क्या है?",
        "options_en": ["anyhow, thiserror", "ErrorRS, HandleRS", "Cargo Error, Rust Error", "Error Handling Rust"],
        "options_hi": ["anyhow, thiserror", "ErrorRS, HandleRS", "Cargo Error, Rust Error", "एरर हैंडलिंग Rust"],
        "answer_en": "anyhow, thiserror",
        "answer_hi": "anyhow, thiserror",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the Rust package for command line argument parsing?",
        "question_hi": "कमांड लाइन आर्ग्युमेंट पार्सिंग के लिए Rust पैकेज क्या है?",
        "options_en": ["clap", "ArgParseRS", "RustArgs", "Cargo Args"],
        "options_hi": ["clap", "ArgParseRS", "RustArgs", "Cargo Args"],
        "answer_en": "clap",
        "answer_hi": "clap",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the Rust package for HTTP client functionality?",
        "question_hi": "HTTP क्लाइंट फंक्शनैलिटी के लिए Rust पैकेज क्या है?",
        "options_en": ["reqwest", "HttpClientRS", "RustHTTP", "Cargo HTTP"],
        "options_hi": ["reqwest", "HttpClientRS", "RustHTTP", "Cargo HTTP"],
        "answer_en": "reqwest",
        "answer_hi": "reqwest",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the Rust package for JSON serialization?",
        "question_hi": "JSON सीरियलाइज़ेशन के लिए Rust पैकेज क्या है?",
        "options_en": ["serde_json", "JsonRS", "RustJSON", "Cargo JSON"],
        "options_hi": ["serde_json", "JsonRS", "RustJSON", "Cargo JSON"],
        "answer_en": "serde_json",
        "answer_hi": "serde_json",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the Rust package for date and time handling?",
        "question_hi": "डेट और टाइम हैंडलिंग के लिए Rust पैकेज क्या है?",
        "options_en": ["chrono", "TimeRS", "RustTime", "Cargo Time"],
        "options_hi": ["chrono", "TimeRS", "RustTime", "Cargo Time"],
        "answer_en": "chrono",
        "answer_hi": "chrono",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the Rust package for random number generation?",
        "question_hi": "रैंडम नंबर जनरेशन के लिए Rust पैकेज क्या है?",
        "options_en": ["rand", "RandomRS", "RustRandom", "Cargo Random"],
        "options_hi": ["rand", "RandomRS", "RustRandom", "Cargo Random"],
        "answer_en": "rand",
        "answer_hi": "rand",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the Rust package for regular expressions?",
        "question_hi": "रेगुलर एक्सप्रेशन्स के लिए Rust पैकेज क्या है?",
        "options_en": ["regex", "RegexRS", "RustRegex", "Cargo Regex"],
        "options_hi": ["regex", "RegexRS", "RustRegex", "Cargo Regex"],
        "answer_en": "regex",
        "answer_hi": "regex",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the Rust package for working with files and directories?",
        "question_hi": "फाइल्स और डायरेक्टरीज के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::fs", "FileRS", "RustFS", "Cargo FS"],
        "options_hi": ["std::fs", "FileRS", "RustFS", "Cargo FS"],
        "answer_en": "std::fs",
        "answer_hi": "std::fs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the Rust package for working with environment variables?",
        "question_hi": "एनवायरनमेंट वेरिएबल्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::env", "EnvRS", "RustEnv", "Cargo Env"],
        "options_hi": ["std::env", "EnvRS", "RustEnv", "Cargo Env"],
        "answer_en": "std::env",
        "answer_hi": "std::env",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the Rust package for working with processes?",
        "question_hi": "प्रोसेसेस के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::process", "ProcessRS", "RustProcess", "Cargo Process"],
        "options_hi": ["std::process", "ProcessRS", "RustProcess", "Cargo Process"],
        "answer_en": "std::process",
        "answer_hi": "std::process",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the Rust package for working with threads?",
        "question_hi": "थ्रेड्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::thread", "ThreadRS", "RustThread", "Cargo Thread"],
        "options_hi": ["std::thread", "ThreadRS", "RustThread", "Cargo Thread"],
        "answer_en": "std::thread",
        "answer_hi": "std::thread",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the Rust package for working with channels?",
        "question_hi": "चैनल्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::sync::mpsc", "ChannelRS", "RustChannel", "Cargo Channel"],
        "options_hi": ["std::sync::mpsc", "ChannelRS", "RustChannel", "Cargo Channel"],
        "answer_en": "std::sync::mpsc",
        "answer_hi": "std::sync::mpsc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the Rust package for working with mutexes?",
        "question_hi": "म्यूटेक्सेस के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::sync::Mutex", "MutexRS", "RustMutex", "Cargo Mutex"],
        "options_hi": ["std::sync::Mutex", "MutexRS", "RustMutex", "Cargo Mutex"],
        "answer_en": "std::sync::Mutex",
        "answer_hi": "std::sync::Mutex",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the Rust package for working with atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::sync::atomic", "AtomicRS", "RustAtomic", "Cargo Atomic"],
        "options_hi": ["std::sync::atomic", "AtomicRS", "RustAtomic", "Cargo Atomic"],
        "answer_en": "std::sync::atomic",
        "answer_hi": "std::sync::atomic",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the Rust package for working with arcs?",
        "question_hi": "आर्क्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::sync::Arc", "ArcRS", "RustArc", "Cargo Arc"],
        "options_hi": ["std::sync::Arc", "ArcRS", "RustArc", "Cargo Arc"],
        "answer_en": "std::sync::Arc",
        "answer_hi": "std::sync::Arc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the Rust package for working with boxes?",
        "question_hi": "बॉक्सेस के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::boxed::Box", "BoxRS", "RustBox", "Cargo Box"],
        "options_hi": ["std::boxed::Box", "BoxRS", "RustBox", "Cargo Box"],
        "answer_en": "std::boxed::Box",
        "answer_hi": "std::boxed::Box",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the Rust package for working with cells?",
        "question_hi": "सेल्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::cell", "CellRS", "RustCell", "Cargo Cell"],
        "options_hi": ["std::cell", "CellRS", "RustCell", "Cargo Cell"],
        "answer_en": "std::cell",
        "answer_hi": "std::cell",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the Rust package for working with refcells?",
        "question_hi": "रिफसेल्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::cell::RefCell", "RefCellRS", "RustRefCell", "Cargo RefCell"],
        "options_hi": ["std::cell::RefCell", "RefCellRS", "RustRefCell", "Cargo RefCell"],
        "answer_en": "std::cell::RefCell",
        "answer_hi": "std::cell::RefCell",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the Rust package for working with options?",
        "question_hi": "ऑप्शन्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::option::Option", "OptionRS", "RustOption", "Cargo Option"],
        "options_hi": ["std::option::Option", "OptionRS", "RustOption", "Cargo Option"],
        "answer_en": "std::option::Option",
        "answer_hi": "std::option::Option",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the Rust package for working with results?",
        "question_hi": "रिजल्ट्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::result::Result", "ResultRS", "RustResult", "Cargo Result"],
        "options_hi": ["std::result::Result", "ResultRS", "RustResult", "Cargo Result"],
        "answer_en": "std::result::Result",
        "answer_hi": "std::result::Result",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the Rust package for working with vectors?",
        "question_hi": "वेक्टर्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::vec::Vec", "VecRS", "RustVec", "Cargo Vec"],
        "options_hi": ["std::vec::Vec", "VecRS", "RustVec", "Cargo Vec"],
        "answer_en": "std::vec::Vec",
        "answer_hi": "std::vec::Vec",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the Rust package for working with strings?",
        "question_hi": "स्ट्रिंग्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::string::String", "StringRS", "RustString", "Cargo String"],
        "options_hi": ["std::string::String", "StringRS", "RustString", "Cargo String"],
        "answer_en": "std::string::String",
        "answer_hi": "std::string::String",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the Rust package for working with hashmaps?",
        "question_hi": "हैशमैप्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::collections::HashMap", "HashMapRS", "RustHashMap", "Cargo HashMap"],
        "options_hi": ["std::collections::HashMap", "HashMapRS", "RustHashMap", "Cargo HashMap"],
        "answer_en": "std::collections::HashMap",
        "answer_hi": "std::collections::HashMap",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the Rust package for working with hashsets?",
        "question_hi": "हैशसेट्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::collections::HashSet", "HashSetRS", "RustHashSet", "Cargo HashSet"],
        "options_hi": ["std::collections::HashSet", "HashSetRS", "RustHashSet", "Cargo HashSet"],
        "answer_en": "std::collections::HashSet",
        "answer_hi": "std::collections::HashSet",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the Rust package for working with btrees?",
        "question_hi": "बीट्रीज़ के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::collections::BTreeMap", "BTreeRS", "RustBTree", "Cargo BTree"],
        "options_hi": ["std::collections::BTreeMap", "BTreeRS", "RustBTree", "Cargo BTree"],
        "answer_en": "std::collections::BTreeMap",
        "answer_hi": "std::collections::BTreeMap",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the Rust package for working with linked lists?",
        "question_hi": "लिंक्ड लिस्ट्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::collections::LinkedList", "LinkedListRS", "RustLinkedList", "Cargo LinkedList"],
        "options_hi": ["std::collections::LinkedList", "LinkedListRS", "RustLinkedList", "Cargo LinkedList"],
        "answer_en": "std::collections::LinkedList",
        "answer_hi": "std::collections::LinkedList",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the Rust package for working with binary heaps?",
        "question_hi": "बाइनरी हीप्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::collections::BinaryHeap", "BinaryHeapRS", "RustBinaryHeap", "Cargo BinaryHeap"],
        "options_hi": ["std::collections::BinaryHeap", "BinaryHeapRS", "RustBinaryHeap", "Cargo BinaryHeap"],
        "answer_en": "std::collections::BinaryHeap",
        "answer_hi": "std::collections::BinaryHeap",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the Rust package for working with vecdeques?",
        "question_hi": "वेकडीक्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::collections::VecDeque", "VecDequeRS", "RustVecDeque", "Cargo VecDeque"],
        "options_hi": ["std::collections::VecDeque", "VecDequeRS", "RustVecDeque", "Cargo VecDeque"],
        "answer_en": "std::collections::VecDeque",
        "answer_hi": "std::collections::VecDeque",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the Rust package for working with ranges?",
        "question_hi": "रेंजेस के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::ops::Range", "RangeRS", "RustRange", "Cargo Range"],
        "options_hi": ["std::ops::Range", "RangeRS", "RustRange", "Cargo Range"],
        "answer_en": "std::ops::Range",
        "answer_hi": "std::ops::Range",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the Rust package for working with iterators?",
        "question_hi": "इटरेटर्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::iter::Iterator", "IteratorRS", "RustIterator", "Cargo Iterator"],
        "options_hi": ["std::iter::Iterator", "IteratorRS", "RustIterator", "Cargo Iterator"],
        "answer_en": "std::iter::Iterator",
        "answer_hi": "std::iter::Iterator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the Rust package for working with futures?",
        "question_hi": "फ्यूचर्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::future::Future", "FutureRS", "RustFuture", "Cargo Future"],
        "options_hi": ["std::future::Future", "FutureRS", "RustFuture", "Cargo Future"],
        "answer_en": "std::future::Future",
        "answer_hi": "std::future::Future",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the Rust package for working with pins?",
        "question_hi": "पिन्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::pin::Pin", "PinRS", "RustPin", "Cargo Pin"],
        "options_hi": ["std::pin::Pin", "PinRS", "RustPin", "Cargo Pin"],
        "answer_en": "std::pin::Pin",
        "answer_hi": "std::pin::Pin",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the Rust package for working with paths?",
        "question_hi": "पाथ्स के साथ काम करने के लिए Rust पैकेज क्या है?",
        "options_en": ["std::path::Path", "PathRS", "RustPath", "Cargo Path"],
        "options_hi": ["std::path::Path", "PathRS", "RustPath", "Cargo Path"],
        "answer_en": "std::path::Path",
        "answer_hi": "std::path::Path",
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