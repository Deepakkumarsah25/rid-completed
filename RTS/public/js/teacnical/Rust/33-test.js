const questions=[
    {
        "num": 1,
        "question_en": "What is Rust's primary design goal?",
        "question_hi": "Rust का प्राथमिक डिज़ाइन लक्ष्य क्या है?",
        "options_en": ["Memory safety without garbage collection", "Maximum performance", "Easiest syntax", "Web development focus"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा", "अधिकतम प्रदर्शन", "सबसे आसान सिंटैक्स", "वेब डेवलपमेंट फोकस"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which organization currently maintains Rust?",
        "question_hi": "कौन सा संगठन वर्तमान में Rust को बनाए रखता है?",
        "options_en": ["Rust Foundation", "Mozilla Foundation", "Google", "Microsoft"],
        "options_hi": ["Rust Foundation", "Mozilla Foundation", "Google", "Microsoft"],
        "answer_en": "Rust Foundation",
        "answer_hi": "Rust Foundation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the current stable Rust edition?",
        "question_hi": "वर्तमान स्थिर Rust edition कौन सी है?",
        "options_en": ["2021", "2018", "2015", "2024"],
        "options_hi": ["2021", "2018", "2015", "2024"],
        "answer_en": "2021",
        "answer_hi": "2021",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you check Rust version?",
        "question_hi": "Rust version कैसे चेक करते हैं?",
        "options_en": ["rustc --version", "rust --version", "cargo --version", "Both A and C"],
        "options_hi": ["rustc --version", "rust --version", "cargo --version", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the Rust formatter tool?",
        "question_hi": "Rust फॉर्मेटर टूल क्या है?",
        "options_en": ["rustfmt", "cargo fmt", "rust-format", "Both A and B"],
        "options_hi": ["rustfmt", "cargo fmt", "rust-format", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you format Rust code?",
        "question_hi": "Rust कोड को कैसे फॉर्मेट करते हैं?",
        "options_en": ["cargo fmt", "rustfmt main.rs", "cargo format", "Both A and B"],
        "options_hi": ["cargo fmt", "rustfmt main.rs", "cargo format", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the Rust linter called?",
        "question_hi": "Rust लिंटर को क्या कहते हैं?",
        "options_en": ["clippy", "rust-lint", "cargo lint", "rust-check"],
        "options_hi": ["clippy", "rust-lint", "cargo lint", "rust-check"],
        "answer_en": "clippy",
        "answer_hi": "clippy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you run Clippy?",
        "question_hi": "Clippy को कैसे चलाते हैं?",
        "options_en": ["cargo clippy", "rust-clippy", "cargo check --clippy", "clippy check"],
        "options_hi": ["cargo clippy", "rust-clippy", "cargo check --clippy", "clippy check"],
        "answer_en": "cargo clippy",
        "answer_hi": "cargo clippy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the Rust documentation generator?",
        "question_hi": "Rust डॉक्युमेंटेशन जेनरेटर क्या है?",
        "options_en": ["rustdoc", "cargo doc", "rust-docs", "Both A and B"],
        "options_hi": ["rustdoc", "cargo doc", "rust-docs", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you generate documentation?",
        "question_hi": "डॉक्युमेंटेशन कैसे जेनरेट करते हैं?",
        "options_en": ["cargo doc", "rustdoc src/lib.rs", "cargo docs", "Both A and B"],
        "options_hi": ["cargo doc", "rustdoc src/lib.rs", "cargo docs", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the Rust playground?",
        "question_hi": "Rust प्लेग्राउंड क्या है?",
        "options_en": ["Online Rust code editor", "Rust game engine", "Rust testing framework", "Rust IDE"],
        "options_hi": ["ऑनलाइन Rust कोड एडिटर", "Rust गेम इंजन", "Rust टेस्टिंग फ्रेमवर्क", "Rust IDE"],
        "answer_en": "Online Rust code editor",
        "answer_hi": "ऑनलाइन Rust कोड एडिटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Where is the official Rust playground hosted?",
        "question_hi": "ऑफिशियल Rust प्लेग्राउंड कहाँ होस्टेड है?",
        "options_en": ["play.rust-lang.org", "rust-playground.com", "play.rust.org", "rust-lang.org/play"],
        "options_hi": ["play.rust-lang.org", "rust-playground.com", "play.rust.org", "rust-lang.org/play"],
        "answer_en": "play.rust-lang.org",
        "answer_hi": "play.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is Cargo.toml used for?",
        "question_hi": "Cargo.toml का उपयोग किस लिए किया जाता है?",
        "options_en": ["Project configuration and dependencies", "Source code", "Build scripts", "Test files"],
        "options_hi": ["प्रोजेक्ट कॉन्फिगरेशन और डिपेंडेंसीज", "सोर्स कोड", "बिल्ड स्क्रिप्ट्स", "टेस्ट फाइल्स"],
        "answer_en": "Project configuration and dependencies",
        "answer_hi": "प्रोजेक्ट कॉन्फिगरेशन और डिपेंडेंसीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the main source file for binary crates?",
        "question_hi": "बाइनरी क्रेट्स के लिए मुख्य सोर्स फाइल क्या है?",
        "options_en": ["src/main.rs", "src/lib.rs", "main.rs", "lib.rs"],
        "options_hi": ["src/main.rs", "src/lib.rs", "main.rs", "lib.rs"],
        "answer_en": "src/main.rs",
        "answer_hi": "src/main.rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the main source file for library crates?",
        "question_hi": "लाइब्रेरी क्रेट्स के लिए मुख्य सोर्स फाइल क्या है?",
        "options_en": ["src/lib.rs", "src/main.rs", "lib.rs", "main.rs"],
        "options_hi": ["src/lib.rs", "src/main.rs", "lib.rs", "main.rs"],
        "answer_en": "src/lib.rs",
        "answer_hi": "src/lib.rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you add a dependency in Cargo.toml?",
        "question_hi": "Cargo.toml में डिपेंडेंसी कैसे ऐड करते हैं?",
        "options_en": ["Add to [dependencies] section", "Use cargo add command", "Both A and B", "Add to [package] section"],
        "options_hi": ["[dependencies] सेक्शन में ऐड करें", "cargo add कमांड यूज करें", "A और B दोनों", "[package] सेक्शन में ऐड करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What command adds a dependency?",
        "question_hi": "कौन सा कमांड डिपेंडेंसी ऐड करता है?",
        "options_en": ["cargo add", "cargo install", "cargo get", "cargo dependency"],
        "options_hi": ["cargo add", "cargo install", "cargo get", "cargo dependency"],
        "answer_en": "cargo add",
        "answer_hi": "cargo add",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you build in release mode?",
        "question_hi": "रिलीज़ मोड में कैसे बिल्ड करते हैं?",
        "options_en": ["cargo build --release", "cargo release", "cargo build -r", "Both A and C"],
        "options_hi": ["cargo build --release", "cargo release", "cargo build -r", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Where are release builds stored?",
        "question_hi": "रिलीज़ बिल्ड्स कहाँ स्टोर होते हैं?",
        "options_en": ["target/release/", "target/debug/", "build/release/", "release/"],
        "options_hi": ["target/release/", "target/debug/", "build/release/", "release/"],
        "answer_en": "target/release/",
        "answer_hi": "target/release/",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you clean build artifacts?",
        "question_hi": "बिल्ड आर्टिफैक्ट्स को कैसे क्लीन करते हैं?",
        "options_en": ["cargo clean", "cargo clear", "cargo remove", "cargo purge"],
        "options_hi": ["cargo clean", "cargo clear", "cargo remove", "cargo purge"],
        "answer_en": "cargo clean",
        "answer_hi": "cargo clean",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the Rust standard library called?",
        "question_hi": "Rust स्टैंडर्ड लाइब्रेरी को क्या कहते हैं?",
        "options_en": ["std", "core", "alloc", "rustlib"],
        "options_hi": ["std", "core", "alloc", "rustlib"],
        "answer_en": "std",
        "answer_hi": "std",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you import the standard library?",
        "question_hi": "स्टैंडर्ड लाइब्रेरी को कैसे इम्पोर्ट करते हैं?",
        "options_en": ["use std::...", "import std::...", "include std::...", "require std::..."],
        "options_hi": ["use std::...", "import std::...", "include std::...", "require std::..."],
        "answer_en": "use std::...",
        "answer_hi": "use std::...",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the prelude?",
        "question_hi": "प्रील्यूड क्या है?",
        "options_en": ["Automatically imported items", "A type of function", "Build script", "Test module"],
        "options_hi": ["ऑटोमैटिकली इम्पोर्टेड आइटम्स", "एक प्रकार का फ़ंक्शन", "बिल्ड स्क्रिप्ट", "टेस्ट मॉड्यूल"],
        "answer_en": "Automatically imported items",
        "answer_hi": "ऑटोमैटिकली इम्पोर्टेड आइटम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which items are in the prelude?",
        "question_hi": "प्रील्यूड में कौन से आइटम होते हैं?",
        "options_en": ["Common traits and types", "All standard library", "Only macros", "Only functions"],
        "options_hi": ["कॉमन ट्रेट्स और टाइप्स", "सारी स्टैंडर्ड लाइब्रेरी", "केवल मैक्रोज़", "केवल फ़ंक्शन्स"],
        "answer_en": "Common traits and types",
        "answer_hi": "कॉमन ट्रेट्स और टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the Rust community forum?",
        "question_hi": "Rust कम्युनिटी फोरम क्या है?",
        "options_en": ["users.rust-lang.org", "forum.rust-lang.org", "discuss.rust-lang.org", "community.rust-lang.org"],
        "options_hi": ["users.rust-lang.org", "forum.rust-lang.org", "discuss.rust-lang.org", "community.rust-lang.org"],
        "answer_en": "users.rust-lang.org",
        "answer_hi": "users.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Where is Rust documentation hosted?",
        "question_hi": "Rust डॉक्युमेंटेशन कहाँ होस्टेड है?",
        "options_en": ["doc.rust-lang.org", "docs.rust-lang.org", "rust-docs.org", "documentation.rust-lang.org"],
        "options_hi": ["doc.rust-lang.org", "docs.rust-lang.org", "rust-docs.org", "documentation.rust-lang.org"],
        "answer_en": "doc.rust-lang.org",
        "answer_hi": "doc.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is crates.io?",
        "question_hi": "crates.io क्या है?",
        "options_en": ["Rust package registry", "Rust code editor", "Rust testing service", "Rust documentation"],
        "options_hi": ["Rust पैकेज रजिस्ट्री", "Rust कोड एडिटर", "Rust टेस्टिंग सर्विस", "Rust डॉक्युमेंटेशन"],
        "answer_en": "Rust package registry",
        "answer_hi": "Rust पैकेज रजिस्ट्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you search for crates?",
        "question_hi": "क्रेट्स को कैसे सर्च करते हैं?",
        "options_en": ["cargo search", "cargo find", "cargo lookup", "cargo discover"],
        "options_hi": ["cargo search", "cargo find", "cargo lookup", "cargo discover"],
        "answer_en": "cargo search",
        "answer_hi": "cargo search",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the Rust error index?",
        "question_hi": "Rust एरर इंडेक्स क्या है?",
        "options_en": ["Collection of compiler error explanations", "List of all errors", "Error tracking tool", "Debugging guide"],
        "options_hi": ["कम्पाइलर एरर एक्सप्लेनेशन का कलेक्शन", "सभी एरर की लिस्ट", "एरर ट्रैकिंग टूल", "डीबगिंग गाइड"],
        "answer_en": "Collection of compiler error explanations",
        "answer_hi": "कम्पाइलर एरर एक्सप्लेनेशन का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Where is the error index located?",
        "question_hi": "एरर इंडेक्स कहाँ स्थित है?",
        "options_en": ["doc.rust-lang.org/error-index", "errors.rust-lang.org", "rust-errors.org", "index.rust-errors.org"],
        "options_hi": ["doc.rust-lang.org/error-index", "errors.rust-lang.org", "rust-errors.org", "index.rust-errors.org"],
        "answer_en": "doc.rust-lang.org/error-index",
        "answer_hi": "doc.rust-lang.org/error-index",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the Rust book?",
        "question_hi": "Rust बुक क्या है?",
        "options_en": ["Official Rust tutorial", "Rust reference", "Rust cookbook", "Rust examples"],
        "options_hi": ["ऑफिशियल Rust ट्यूटोरियल", "Rust रेफरेन्स", "Rust कुकबुक", "Rust उदाहरण"],
        "answer_en": "Official Rust tutorial",
        "answer_hi": "ऑफिशियल Rust ट्यूटोरियल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Where is the Rust book located?",
        "question_hi": "Rust बुक कहाँ स्थित है?",
        "options_en": ["doc.rust-lang.org/book", "book.rust-lang.org", "rust-book.org", "learn.rust-lang.org"],
        "options_hi": ["doc.rust-lang.org/book", "book.rust-lang.org", "rust-book.org", "learn.rust-lang.org"],
        "answer_en": "doc.rust-lang.org/book",
        "answer_hi": "doc.rust-lang.org/book",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the Rust by Example book?",
        "question_hi": "Rust by Example बुक क्या है?",
        "options_en": ["Collection of Rust examples", "Advanced Rust guide", "Rust reference", "Rust cookbook"],
        "options_hi": ["Rust उदाहरणों का संग्रह", "एडवांस्ड Rust गाइड", "Rust रेफरेन्स", "Rust कुकबुक"],
        "answer_en": "Collection of Rust examples",
        "answer_hi": "Rust उदाहरणों का संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Where is Rust by Example located?",
        "question_hi": "Rust by Example कहाँ स्थित है?",
        "options_en": ["doc.rust-lang.org/rust-by-example", "examples.rust-lang.org", "rust-by-example.org", "learn.rust-by-example.org"],
        "options_hi": ["doc.rust-lang.org/rust-by-example", "examples.rust-lang.org", "rust-by-example.org", "learn.rust-by-example.org"],
        "answer_en": "doc.rust-lang.org/rust-by-example",
        "answer_hi": "doc.rust-lang.org/rust-by-example",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the Rust reference?",
        "question_hi": "Rust रेफरेन्स क्या है?",
        "options_en": ["Detailed language specification", "Quick start guide", "API documentation", "Tutorial"],
        "options_hi": ["विस्तृत भाषा विशिष्टता", "क्विक स्टार्ट गाइड", "API डॉक्युमेंटेशन", "ट्यूटोरियल"],
        "answer_en": "Detailed language specification",
        "answer_hi": "विस्तृत भाषा विशिष्टता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Where is the Rust reference located?",
        "question_hi": "Rust रेफरेन्स कहाँ स्थित है?",
        "options_en": ["doc.rust-lang.org/reference", "reference.rust-lang.org", "rust-reference.org", "spec.rust-lang.org"],
        "options_hi": ["doc.rust-lang.org/reference", "reference.rust-lang.org", "rust-reference.org", "spec.rust-lang.org"],
        "answer_en": "doc.rust-lang.org/reference",
        "answer_hi": "doc.rust-lang.org/reference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the Rustonomicon?",
        "question_hi": "Rustonomicon क्या है?",
        "options_en": ["Guide to unsafe Rust", "Rust style guide", "Rust history", "Rust patterns"],
        "options_hi": ["अनसेफ Rust गाइड", "Rust स्टाइल गाइड", "Rust इतिहास", "Rust पैटर्न"],
        "answer_en": "Guide to unsafe Rust",
        "answer_hi": "अनसेफ Rust गाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Where is the Rustonomicon located?",
        "question_hi": "Rustonomicon कहाँ स्थित है?",
        "options_en": ["doc.rust-lang.org/nomicon", "nomicon.rust-lang.org", "rust-nomicon.org", "unsafe.rust-lang.org"],
        "options_hi": ["doc.rust-lang.org/nomicon", "nomicon.rust-lang.org", "rust-nomicon.org", "unsafe.rust-lang.org"],
        "answer_en": "doc.rust-lang.org/nomicon",
        "answer_hi": "doc.rust-lang.org/nomicon",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the Rust Cookbook?",
        "question_hi": "Rust कुकबुक क्या है?",
        "options_en": ["Collection of common tasks", "Recipe book", "Rust tutorials", "Rust examples"],
        "options_hi": ["सामान्य कार्यों का संग्रह", "रेसिपी बुक", "Rust ट्यूटोरियल", "Rust उदाहरण"],
        "answer_en": "Collection of common tasks",
        "answer_hi": "सामान्य कार्यों का संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Where is the Rust Cookbook located?",
        "question_hi": "Rust कुकबुक कहाँ स्थित है?",
        "options_en": ["rust-lang-nursery.github.io/rust-cookbook", "cookbook.rust-lang.org", "rust-cookbook.org", "recipes.rust-lang.org"],
        "options_hi": ["rust-lang-nursery.github.io/rust-cookbook", "cookbook.rust-lang.org", "rust-cookbook.org", "recipes.rust-lang.org"],
        "answer_en": "rust-lang-nursery.github.io/rust-cookbook",
        "answer_hi": "rust-lang-nursery.github.io/rust-cookbook",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the Rust performance book?",
        "question_hi": "Rust परफॉर्मेंस बुक क्या है?",
        "options_en": ["Guide to writing fast Rust code", "Benchmarking tools", "Performance tests", "Optimization guide"],
        "options_hi": ["फास्ट Rust कोड लिखने की गाइड", "बेंचमार्किंग टूल्स", "परफॉर्मेंस टेस्ट", "ऑप्टिमाइज़ेशन गाइड"],
        "answer_en": "Guide to writing fast Rust code",
        "answer_hi": "फास्ट Rust कोड लिखने की गाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Where is the performance book located?",
        "question_hi": "परफॉर्मेंस बुक कहाँ स्थित है?",
        "options_en": ["nnethercote.github.io/perf-book", "perf.rust-lang.org", "performance.rust-lang.org", "fast.rust-lang.org"],
        "options_hi": ["nnethercote.github.io/perf-book", "perf.rust-lang.org", "performance.rust-lang.org", "fast.rust-lang.org"],
        "answer_en": "nnethercote.github.io/perf-book",
        "answer_hi": "nnethercote.github.io/perf-book",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the Rust async book?",
        "question_hi": "Rust async बुक क्या है?",
        "options_en": ["Guide to asynchronous Rust", "Threading guide", "Concurrency patterns", "Parallel computing"],
        "options_hi": ["असिंक्रोनस Rust गाइड", "थ्रेडिंग गाइड", "कनकरेंसी पैटर्न", "पैरेलल कंप्यूटिंग"],
        "answer_en": "Guide to asynchronous Rust",
        "answer_hi": "असिंक्रोनस Rust गाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Where is the async book located?",
        "question_hi": "async बुक कहाँ स्थित है?",
        "options_en": ["rust-lang.github.io/async-book", "async.rust-lang.org", "rust-async.org", "book.async-rust.org"],
        "options_hi": ["rust-lang.github.io/async-book", "async.rust-lang.org", "rust-async.org", "book.async-rust.org"],
        "answer_en": "rust-lang.github.io/async-book",
        "answer_hi": "rust-lang.github.io/async-book",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the Rust embedded book?",
        "question_hi": "Rust एम्बेडेड बुक क्या है?",
        "options_en": ["Guide to embedded Rust development", "Hardware programming", "Device drivers", "Microcontroller guide"],
        "options_hi": ["एम्बेडेड Rust डेवलपमेंट गाइड", "हार्डवेयर प्रोग्रामिंग", "डिवाइस ड्राइवर", "माइक्रोकंट्रोलर गाइड"],
        "answer_en": "Guide to embedded Rust development",
        "answer_hi": "एम्बेडेड Rust डेवलपमेंट गाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Where is the embedded book located?",
        "question_hi": "एम्बेडेड बुक कहाँ स्थित है?",
        "options_en": ["docs.rust-embedded.org/book", "embedded.rust-lang.org", "rust-embedded.org/book", "book.rust-embedded.org"],
        "options_hi": ["docs.rust-embedded.org/book", "embedded.rust-lang.org", "rust-embedded.org/book", "book.rust-embedded.org"],
        "answer_en": "docs.rust-embedded.org/book",
        "answer_hi": "docs.rust-embedded.org/book",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the Rust wasm book?",
        "question_hi": "Rust wasm बुक क्या है?",
        "options_en": ["Guide to WebAssembly with Rust", "Web development", "Browser programming", "JavaScript integration"],
        "options_hi": ["WebAssembly के साथ Rust गाइड", "वेब डेवलपमेंट", "ब्राउज़र प्रोग्रामिंग", "JavaScript इंटीग्रेशन"],
        "answer_en": "Guide to WebAssembly with Rust",
        "answer_hi": "WebAssembly के साथ Rust गाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Where is the wasm book located?",
        "question_hi": "wasm बुक कहाँ स्थित है?",
        "options_en": ["rustwasm.github.io/docs/book", "wasm.rust-lang.org", "rust-wasm.org/book", "book.rust-wasm.org"],
        "options_hi": ["rustwasm.github.io/docs/book", "wasm.rust-lang.org", "rust-wasm.org/book", "book.rust-wasm.org"],
        "answer_en": "rustwasm.github.io/docs/book",
        "answer_hi": "rustwasm.github.io/docs/book",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the Rust Cargo book?",
        "question_hi": "Rust Cargo बुक क्या है?",
        "options_en": ["Guide to Cargo package manager", "Build system reference", "Dependency management", "All of the above"],
        "options_hi": ["Cargo पैकेज मैनेजर गाइड", "बिल्ड सिस्टम रेफरेन्स", "डिपेंडेंसी मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Where is the Cargo book located?",
        "question_hi": "Cargo बुक कहाँ स्थित है?",
        "options_en": ["doc.rust-lang.org/cargo", "cargo.rust-lang.org", "book.cargo-rs.org", "docs.cargo.rs"],
        "options_hi": ["doc.rust-lang.org/cargo", "cargo.rust-lang.org", "book.cargo-rs.org", "docs.cargo.rs"],
        "answer_en": "doc.rust-lang.org/cargo",
        "answer_hi": "doc.rust-lang.org/cargo",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the Rust compiler book?",
        "question_hi": "Rust कम्पाइलर बुक क्या है?",
        "options_en": ["Guide to Rust compiler development", "Compiler options", "Build process", "Optimization flags"],
        "options_hi": ["Rust कम्पाइलर डेवलपमेंट गाइड", "कम्पाइलर ऑप्शन्स", "बिल्ड प्रोसेस", "ऑप्टिमाइज़ेशन फ्लैग्स"],
        "answer_en": "Guide to Rust compiler development",
        "answer_hi": "Rust कम्पाइलर डेवलपमेंट गाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Where is the compiler book located?",
        "question_hi": "कम्पाइलर बुक कहाँ स्थित है?",
        "options_en": ["rustc-dev-guide.rust-lang.org", "compiler.rust-lang.org", "rust-compiler.org", "guide.rustc.org"],
        "options_hi": ["rustc-dev-guide.rust-lang.org", "compiler.rust-lang.org", "rust-compiler.org", "guide.rustc.org"],
        "answer_en": "rustc-dev-guide.rust-lang.org",
        "answer_hi": "rustc-dev-guide.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the Rust forge?",
        "question_hi": "Rust फोर्ज क्या है?",
        "options_en": ["Collection of Rust community resources", "Code repository", "Build server", "Testing platform"],
        "options_hi": ["Rust कम्युनिटी रिसोर्सेज का संग्रह", "कोड रिपॉजिटरी", "बिल्ड सर्वर", "टेस्टिंग प्लेटफॉर्म"],
        "answer_en": "Collection of Rust community resources",
        "answer_hi": "Rust कम्युनिटी रिसोर्सेज का संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Where is the Rust forge located?",
        "question_hi": "Rust फोर्ज कहाँ स्थित है?",
        "options_en": ["forge.rust-lang.org", "rust-forge.org", "community.rust-lang.org", "resources.rust-lang.org"],
        "options_hi": ["forge.rust-lang.org", "rust-forge.org", "community.rust-lang.org", "resources.rust-lang.org"],
        "answer_en": "forge.rust-lang.org",
        "answer_hi": "forge.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the Rust survey?",
        "question_hi": "Rust सर्वे क्या है?",
        "options_en": ["Annual community feedback collection", "User statistics", "Usage patterns", "All of the above"],
        "options_hi": ["वार्षिक कम्युनिटी फीडबैक संग्रह", "यूज़र स्टैटिस्टिक्स", "यूसेज पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Where are Rust survey results published?",
        "question_hi": "Rust सर्वे रिजल्ट्स कहाँ पब्लिश होते हैं?",
        "options_en": ["blog.rust-lang.org", "survey.rust-lang.org", "results.rust-lang.org", "stats.rust-lang.org"],
        "options_hi": ["blog.rust-lang.org", "survey.rust-lang.org", "results.rust-lang.org", "stats.rust-lang.org"],
        "answer_en": "blog.rust-lang.org",
        "answer_hi": "blog.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the Rust blog?",
        "question_hi": "Rust ब्लॉग क्या है?",
        "options_en": ["Official Rust announcements and news", "Community posts", "Technical articles", "Tutorials"],
        "options_hi": ["ऑफिशियल Rust एनाउंसमेंट्स और न्यूज़", "कम्युनिटी पोस्ट्स", "टेक्निकल आर्टिकल्स", "ट्यूटोरियल"],
        "answer_en": "Official Rust announcements and news",
        "answer_hi": "ऑफिशियल Rust एनाउंसमेंट्स और न्यूज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Where is the Rust blog located?",
        "question_hi": "Rust ब्लॉग कहाँ स्थित है?",
        "options_en": ["blog.rust-lang.org", "news.rust-lang.org", "rust-blog.org", "announce.rust-lang.org"],
        "options_hi": ["blog.rust-lang.org", "news.rust-lang.org", "rust-blog.org", "announce.rust-lang.org"],
        "answer_en": "blog.rust-lang.org",
        "answer_hi": "blog.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is Inside Rust?",
        "question_hi": "Inside Rust क्या है?",
        "options_en": ["Blog about Rust internals", "Compiler details", "Language design", "All of the above"],
        "options_hi": ["Rust इंटर्नल्स के बारे में ब्लॉग", "कम्पाइलर डिटेल्स", "लैंग्वेज डिज़ाइन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Where is Inside Rust located?",
        "question_hi": "Inside Rust कहाँ स्थित है?",
        "options_en": ["blog.rust-lang.org/inside-rust", "inside.rust-lang.org", "internals.rust-lang.org", "dev.rust-lang.org"],
        "options_hi": ["blog.rust-lang.org/inside-rust", "inside.rust-lang.org", "internals.rust-lang.org", "dev.rust-lang.org"],
        "answer_en": "blog.rust-lang.org/inside-rust",
        "answer_hi": "blog.rust-lang.org/inside-rust",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the Rust roadmap?",
        "question_hi": "Rust रोडमैप क्या है?",
        "options_en": ["Future development plans", "Release schedule", "Feature timeline", "All of the above"],
        "options_hi": ["भविष्य के डेवलपमेंट प्लान", "रिलीज़ शेड्यूल", "फीचर टाइमलाइन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Where is the Rust roadmap published?",
        "question_hi": "Rust रोडमैप कहाँ पब्लिश होता है?",
        "options_en": ["blog.rust-lang.org", "roadmap.rust-lang.org", "plan.rust-lang.org", "future.rust-lang.org"],
        "options_hi": ["blog.rust-lang.org", "roadmap.rust-lang.org", "plan.rust-lang.org", "future.rust-lang.org"],
        "answer_en": "blog.rust-lang.org",
        "answer_hi": "blog.rust-lang.org",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What are Rust working groups?",
        "question_hi": "Rust वर्किंग ग्रुप्स क्या हैं?",
        "options_en": ["Teams focused on specific areas", "Community organizations", "Development teams", "All of the above"],
        "options_hi": ["विशिष्ट क्षेत्रों पर केंद्रित टीमें", "कम्युनिटी ऑर्गनाइज़ेशन", "डेवलपमेंट टीम्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Where are working groups listed?",
        "question_hi": "वर्किंग ग्रुप्स कहाँ लिस्टेड हैं?",
        "options_en": ["www.rust-lang.org/governance", "teams.rust-lang.org", "wg.rust-lang.org", "groups.rust-lang.org"],
        "options_hi": ["www.rust-lang.org/governance", "teams.rust-lang.org", "wg.rust-lang.org", "groups.rust-lang.org"],
        "answer_en": "www.rust-lang.org/governance",
        "answer_hi": "www.rust-lang.org/governance",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the Rust code of conduct?",
        "question_hi": "Rust कोड ऑफ कंडक्ट क्या है?",
        "options_en": ["Community behavior guidelines", "Coding standards", "Development rules", "All of the above"],
        "options_hi": ["कम्युनिटी बिहेवियर गाइडलाइन्स", "कोडिंग स्टैंडर्ड्स", "डेवलपमेंट रूल्स", "उपरोक्त सभी"],
        "answer_en": "Community behavior guidelines",
        "answer_hi": "कम्युनिटी बिहेवियर गाइडलाइन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Where is the code of conduct located?",
        "question_hi": "कोड ऑफ कंडक्ट कहाँ स्थित है?",
        "options_en": ["www.rust-lang.org/conduct", "conduct.rust-lang.org", "coc.rust-lang.org", "rules.rust-lang.org"],
        "options_hi": ["www.rust-lang.org/conduct", "conduct.rust-lang.org", "coc.rust-lang.org", "rules.rust-lang.org"],
        "answer_en": "www.rust-lang.org/conduct",
        "answer_hi": "www.rust-lang.org/conduct",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the Rust security policy?",
        "question_hi": "Rust सिक्योरिटी पॉलिसी क्या है?",
        "options_en": ["Security vulnerability reporting process", "Secure coding guidelines", "Security best practices", "All of the above"],
        "options_hi": ["सिक्योरिटी वल्नरेबिलिटी रिपोर्टिंग प्रोसेस", "सिक्योर कोडिंग गाइडलाइन्स", "सिक्योरिटी बेस्ट प्रैक्टिसेज", "उपरोक्त सभी"],
        "answer_en": "Security vulnerability reporting process",
        "answer_hi": "सिक्योरिटी वल्नरेबिलिटी रिपोर्टिंग प्रोसेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Where is the security policy located?",
        "question_hi": "सिक्योरिटी पॉलिसी कहाँ स्थित है?",
        "options_en": ["www.rust-lang.org/security", "security.rust-lang.org", "vulnerabilities.rust-lang.org", "sec.rust-lang.org"],
        "options_hi": ["www.rust-lang.org/security", "security.rust-lang.org", "vulnerabilities.rust-lang.org", "sec.rust-lang.org"],
        "answer_en": "www.rust-lang.org/security",
        "answer_hi": "www.rust-lang.org/security",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the Rust trademark policy?",
        "question_hi": "Rust ट्रेडमार्क पॉलिसी क्या है?",
        "options_en": ["Rules for using Rust trademarks", "Logo usage guidelines", "Brand protection", "All of the above"],
        "options_hi": ["Rust ट्रेडमार्क यूज करने के नियम", "लोगो यूसेज गाइडलाइन्स", "ब्रांड प्रोटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Where is the trademark policy located?",
        "question_hi": "ट्रेडमार्क पॉलिसी कहाँ स्थित है?",
        "options_en": ["www.rust-lang.org/policies", "trademark.rust-lang.org", "brand.rust-lang.org", "logos.rust-lang.org"],
        "options_hi": ["www.rust-lang.org/policies", "trademark.rust-lang.org", "brand.rust-lang.org", "logos.rust-lang.org"],
        "answer_en": "www.rust-lang.org/policies",
        "answer_hi": "www.rust-lang.org/policies",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the Rust media guide?",
        "question_hi": "Rust मीडिया गाइड क्या है?",
        "options_en": ["Brand assets and usage guidelines", "Press releases", "Media contacts", "All of the above"],
        "options_hi": ["ब्रांड एसेट्स और यूसेज गाइडलाइन्स", "प्रेस रिलीज़", "मीडिया कॉन्टैक्ट्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Where is the media guide located?",
        "question_hi": "मीडिया गाइड कहाँ स्थित है?",
        "options_en": ["www.rust-lang.org/policies/media-guide", "media.rust-lang.org", "press.rust-lang.org", "brand.rust-lang.org"],
        "options_hi": ["www.rust-lang.org/policies/media-guide", "media.rust-lang.org", "press.rust-lang.org", "brand.rust-lang.org"],
        "answer_en": "www.rust-lang.org/policies/media-guide",
        "answer_hi": "www.rust-lang.org/policies/media-guide",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the Rust style guide?",
        "question_hi": "Rust स्टाइल गाइड क्या है?",
        "options_en": ["Code formatting standards", "Naming conventions", "Documentation guidelines", "All of the above"],
        "options_hi": ["कोड फॉर्मेटिंग स्टैंडर्ड्स", "नेमिंग कन्वेंशन", "डॉक्युमेंटेशन गाइडलाइन्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Where is the style guide located?",
        "question_hi": "स्टाइल गाइड कहाँ स्थित है?",
        "options_en": ["github.com/rust-lang/rfcs/blob/master/style-guide/README.md", "style.rust-lang.org", "guide.rust-lang.org", "format.rust-lang.org"],
        "options_hi": ["github.com/rust-lang/rfcs/blob/master/style-guide/README.md", "style.rust-lang.org", "guide.rust-lang.org", "format.rust-lang.org"],
        "answer_en": "github.com/rust-lang/rfcs/blob/master/style-guide/README.md",
        "answer_hi": "github.com/rust-lang/rfcs/blob/master/style-guide/README.md",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What are Rust RFCs?",
        "question_hi": "Rust RFCs क्या हैं?",
        "options_en": ["Requests for Comments - language change proposals", "Bug reports", "Feature requests", "Documentation"],
        "options_hi": ["कमेंट के लिए रिक्वेस्ट्स - लैंग्वेज चेंज प्रपोजल", "बग रिपोर्ट्स", "फीचर रिक्वेस्ट्स", "डॉक्युमेंटेशन"],
        "answer_en": "Requests for Comments - language change proposals",
        "answer_hi": "कमेंट के लिए रिक्वेस्ट्स - लैंग्वेज चेंज प्रपोजल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Where are RFCs located?",
        "question_hi": "RFCs कहाँ स्थित हैं?",
        "options_en": ["github.com/rust-lang/rfcs", "rfcs.rust-lang.org", "proposals.rust-lang.org", "changes.rust-lang.org"],
        "options_hi": ["github.com/rust-lang/rfcs", "rfcs.rust-lang.org", "proposals.rust-lang.org", "changes.rust-lang.org"],
        "answer_en": "github.com/rust-lang/rfcs",
        "answer_hi": "github.com/rust-lang/rfcs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the Rust issue tracker?",
        "question_hi": "Rust इश्यू ट्रैकर क्या है?",
        "options_en": ["Bug and feature request tracking", "Code repository", "Documentation system", "Build system"],
        "options_hi": ["बग और फीचर रिक्वेस्ट ट्रैकिंग", "कोड रिपॉजिटरी", "डॉक्युमेंटेशन सिस्टम", "बिल्ड सिस्टम"],
        "answer_en": "Bug and feature request tracking",
        "answer_hi": "बग और फीचर रिक्वेस्ट ट्रैकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Where is the issue tracker located?",
        "question_hi": "इश्यू ट्रैकर कहाँ स्थित है?",
        "options_en": ["github.com/rust-lang/rust/issues", "issues.rust-lang.org", "bugs.rust-lang.org", "tracker.rust-lang.org"],
        "options_hi": ["github.com/rust-lang/rust/issues", "issues.rust-lang.org", "bugs.rust-lang.org", "tracker.rust-lang.org"],
        "answer_en": "github.com/rust-lang/rust/issues",
        "answer_hi": "github.com/rust-lang/rust/issues",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the Rust release process?",
        "question_hi": "Rust रिलीज़ प्रोसेस क्या है?",
        "options_en": ["6-week release cycle", "Monthly releases", "Quarterly releases", "Annual releases"],
        "options_hi": ["6-सप्ताह रिलीज़ साइकिल", "मासिक रिलीज़", "त्रैमासिक रिलीज़", "वार्षिक रिलीज़"],
        "answer_en": "6-week release cycle",
        "answer_hi": "6-सप्ताह रिलीज़ साइकिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What are Rust release channels?",
        "question_hi": "Rust रिलीज़ चैनल्स क्या हैं?",
        "options_en": ["Stable, beta, nightly", "Production, testing, development", "Main, feature, experimental", "Release, debug, test"],
        "options_hi": ["स्टेबल, बीटा, नाइटली", "प्रोडक्शन, टेस्टिंग, डेवलपमेंट", "मेन, फीचर, एक्सपेरिमेंटल", "रिलीज़, डीबग, टेस्ट"],
        "answer_en": "Stable, beta, nightly",
        "answer_hi": "स्टेबल, बीटा, नाइटली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you install nightly Rust?",
        "question_hi": "नाइटली Rust कैसे इंस्टॉल करते हैं?",
        "options_en": ["rustup toolchain install nightly", "cargo install nightly", "rust install --nightly", "rustup install nightly"],
        "options_hi": ["rustup toolchain install nightly", "cargo install nightly", "rust install --nightly", "rustup install nightly"],
        "answer_en": "rustup toolchain install nightly",
        "answer_hi": "rustup toolchain install nightly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you use nightly Rust?",
        "question_hi": "नाइटली Rust कैसे यूज करते हैं?",
        "options_en": ["rustup override set nightly", "cargo +nightly", "rustc --nightly", "Both A and B"],
        "options_hi": ["rustup override set nightly", "cargo +nightly", "rustc --nightly", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is Rustup?",
        "question_hi": "Rustup क्या है?",
        "options_en": ["Rust toolchain installer", "Package manager", "Build tool", "Code formatter"],
        "options_hi": ["Rust टूलचेन इंस्टॉलर", "पैकेज मैनेजर", "बिल्ड टूल", "कोड फॉर्मेटर"],
        "answer_en": "Rust toolchain installer",
        "answer_hi": "Rust टूलचेन इंस्टॉलर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you update Rust?",
        "question_hi": "Rust को कैसे अपडेट करते हैं?",
        "options_en": ["rustup update", "cargo update", "rust update", "rustup upgrade"],
        "options_hi": ["rustup update", "cargo update", "rust update", "rustup upgrade"],
        "answer_en": "rustup update",
        "answer_hi": "rustup update",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the default Rust toolchain?",
        "question_hi": "डिफ़ॉल्ट Rust टूलचेन क्या है?",
        "options_en": ["Stable", "Beta", "Nightly", "Development"],
        "options_hi": ["स्टेबल", "बीटा", "नाइटली", "डेवलपमेंट"],
        "answer_en": "Stable",
        "answer_hi": "स्टेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you check default toolchain?",
        "question_hi": "डिफ़ॉल्ट टूलचेन कैसे चेक करते हैं?",
        "options_en": ["rustup show", "rustup default", "rustup current", "rustup status"],
        "options_hi": ["rustup show", "rustup default", "rustup current", "rustup status"],
        "answer_en": "rustup show",
        "answer_hi": "rustup show",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What are Rust components?",
        "question_hi": "Rust कंपोनेंट्स क्या हैं?",
        "options_en": ["Additional tools and targets", "Library packages", "Compiler parts", "Build artifacts"],
        "options_hi": ["अतिरिक्त टूल्स और टार्गेट्स", "लाइब्रेरी पैकेजेस", "कम्पाइलर पार्ट्स", "बिल्ड आर्टिफैक्ट्स"],
        "answer_en": "Additional tools and targets",
        "answer_hi": "अतिरिक्त टूल्स और टार्गेट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you list available components?",
        "question_hi": "उपलब्ध कंपोनेंट्स कैसे लिस्ट करते हैं?",
        "options_en": ["rustup component list", "rustup list components", "rustup --components", "rustup show components"],
        "options_hi": ["rustup component list", "rustup list components", "rustup --components", "rustup show components"],
        "answer_en": "rustup component list",
        "answer_hi": "rustup component list",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the Rust documentation component?",
        "question_hi": "Rust डॉक्युमेंटेशन कंपोनेंट क्या है?",
        "options_en": ["rust-docs", "docs", "rust-doc", "documentation"],
        "options_hi": ["rust-docs", "docs", "rust-doc", "documentation"],
        "answer_en": "rust-docs",
        "answer_hi": "rust-docs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you install rust-docs?",
        "question_hi": "rust-docs कैसे इंस्टॉल करते हैं?",
        "options_en": ["rustup component add rust-docs", "cargo install rust-docs", "rustup docs install", "rust install-docs"],
        "options_hi": ["rustup component add rust-docs", "cargo install rust-docs", "rustup docs install", "rust install-docs"],
        "answer_en": "rustup component add rust-docs",
        "answer_hi": "rustup component add rust-docs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What are Rust targets?",
        "question_hi": "Rust टार्गेट्स क्या हैं?",
        "options_en": ["Platforms to compile for", "Build goals", "Test targets", "Performance targets"],
        "options_hi": ["कम्पाइल करने के लिए प्लेटफॉर्म", "बिल्ड गोल्स", "टेस्ट टार्गेट्स", "परफॉर्मेंस टार्गेट्स"],
        "answer_en": "Platforms to compile for",
        "answer_hi": "कम्पाइल करने के लिए प्लेटफॉर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you list available targets?",
        "question_hi": "उपलब्ध टार्गेट्स कैसे लिस्ट करते हैं?",
        "options_en": ["rustup target list", "rustup list targets", "rustup --targets", "rustup show targets"],
        "options_hi": ["rustup target list", "rustup list targets", "rustup --targets", "rustup show targets"],
        "answer_en": "rustup target list",
        "answer_hi": "rustup target list",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the wasm32 target?",
        "question_hi": "wasm32 टार्गेट क्या है?",
        "options_en": ["WebAssembly target", "32-bit Windows", "Web target", "Browser target"],
        "options_hi": ["WebAssembly टार्गेट", "32-बिट विंडोज़", "वेब टार्गेट", "ब्राउज़र टार्गेट"],
        "answer_en": "WebAssembly target",
        "answer_hi": "WebAssembly टार्गेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you add wasm32 target?",
        "question_hi": "wasm32 टार्गेट कैसे ऐड करते हैं?",
        "options_en": ["rustup target add wasm32-unknown-unknown", "cargo add wasm32", "rustup add wasm", "rust target wasm32"],
        "options_hi": ["rustup target add wasm32-unknown-unknown", "cargo add wasm32", "rustup add wasm", "rust target wasm32"],
        "answer_en": "rustup target add wasm32-unknown-unknown",
        "answer_hi": "rustup target add wasm32-unknown-unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is cross-compilation?",
        "question_hi": "क्रॉस-कम्पाइलेशन क्या है?",
        "options_en": ["Compiling for different platform", "Multiple architectures", "Different OS compilation", "All of the above"],
        "options_hi": ["अलग प्लेटफॉर्म के लिए कम्पाइल करना", "मल्टीपल आर्किटेक्चर", "अलग OS कम्पाइलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you cross-compile?",
        "question_hi": "क्रॉस-कम्पाइल कैसे करते हैं?",
        "options_en": ["cargo build --target=...", "rustc --target ...", "rustup target add ... then build", "All of the above"],
        "options_hi": ["cargo build --target=...", "rustc --target ...", "rustup target add ... फिर build", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the Rust toolchain file?",
        "question_hi": "Rust टूलचेन फाइल क्या है?",
        "options_en": ["rust-toolchain.toml", "toolchain.toml", "rust-toolchain", "Both A and C"],
        "options_hi": ["rust-toolchain.toml", "toolchain.toml", "rust-toolchain", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does rust-toolchain.toml contain?",
        "question_hi": "rust-toolchain.toml में क्या होता है?",
        "options_en": ["Toolchain version and components", "Project dependencies", "Build configuration", "Test settings"],
        "options_hi": ["टूलचेन वर्जन और कंपोनेंट्स", "प्रोजेक्ट डिपेंडेंसीज", "बिल्ड कॉन्फिगरेशन", "टेस्ट सेटिंग्स"],
        "answer_en": "Toolchain version and components",
        "answer_hi": "टूलचेन वर्जन और कंपोनेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you set toolchain per project?",
        "question_hi": "प्रोजेक्ट के अनुसार टूलचेन कैसे सेट करते हैं?",
        "options_en": ["Create rust-toolchain.toml", "rustup override set", "cargo toolchain set", "Both A and B"],
        "options_hi": ["rust-toolchain.toml बनाएँ", "rustup override set", "cargo toolchain set", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the Rust installation directory?",
        "question_hi": "Rust इंस्टालेशन डायरेक्टरी क्या है?",
        "options_en": ["~/.rustup/", "/usr/local/rust/", "~/.cargo/", "Both A and C"],
        "options_hi": ["~/.rustup/", "/usr/local/rust/", "~/.cargo/", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
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