const questions = [
    {
        "num": 1,
        "question_en": "What is the primary purpose of Rust's 'std::iter::Peekable' iterator adapter?",
        "question_hi": "Rust के 'std::iter::Peekable' इटरेटर एडाप्टर का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Look ahead at next element without consuming it", "Filter elements based on condition", "Transform iterator elements", "Combine multiple iterators"],
        "options_hi": ["अगले तत्व को उपभोग किए बिना देखना", "स्थिति के आधार पर तत्वों को फ़िल्टर करना", "इटरेटर तत्वों को रूपांतरित करना", "एकाधिक इटरेटरों को संयोजित करना"],
        "answer_en": "Look ahead at next element without consuming it",
        "answer_hi": "अगले तत्व को उपभोग किए बिना देखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "In Rust, what does 'std::collections::BTreeSet' guarantee about element ordering?",
        "question_hi": "Rust में, 'std::collections::BTreeSet' तत्व क्रमबद्धता के बारे में क्या गारंटी देता है?",
        "options_en": ["Elements are always sorted", "Insertion order is preserved", "Random access ordering", "No ordering guarantees"],
        "options_hi": ["तत्व हमेशा क्रमबद्ध होते हैं", "सम्मिलन क्रम संरक्षित रहता है", "यादृच्छिक पहुंच क्रमबद्धता", "कोई क्रमबद्धता गारंटी नहीं"],
        "answer_en": "Elements are always sorted",
        "answer_hi": "तत्व हमेशा क्रमबद्ध होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the role of 'std::ops::RangeBounds' trait in Rust?",
        "question_hi": "Rust में 'std::ops::RangeBounds' ट्रेट की क्या भूमिका है?",
        "options_en": ["Define range boundaries for indexing", "Implement mathematical ranges", "Create bounded iterators", "All of the above"],
        "options_hi": ["अनुक्रमण के लिए रेंज सीमाएँ परिभाषित करना", "गणितीय रेंज लागू करना", "बाउंडेड इटरेटर बनाना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How does 'std::str::from_utf8_unchecked' differ from 'std::str::from_utf8'?",
        "question_hi": "'std::str::from_utf8_unchecked' 'std::str::from_utf8' से कैसे भिन्न है?",
        "options_en": ["Unchecked version doesn't validate UTF-8", "Unchecked is faster but unsafe", "Checked version returns Result", "All of the above"],
        "options_hi": ["अनचेक्ड वर्जन UTF-8 मान्य नहीं करता", "अनचेक्ड तेज लेकिन असुरक्षित है", "चेक्ड वर्जन Result लौटाता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of 'std::io::BufWriter' in Rust I/O operations?",
        "question_hi": "Rust I/O ऑपरेशन में 'std::io::BufWriter' का उद्देश्य क्या है?",
        "options_en": ["Buffer writes to reduce system calls", "Automatic error handling", "Asynchronous writing", "Memory mapping"],
        "options_hi": ["सिस्टम कॉल कम करने के लिए राइट्स को बफर करना", "स्वचालित त्रुटि हैंडलिंग", "अतुल्यकालिक लेखन", "मेमोरी मैपिंग"],
        "answer_en": "Buffer writes to reduce system calls",
        "answer_hi": "सिस्टम कॉल कम करने के लिए राइट्स को बफर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In Rust, what does 'std::collections::VecDeque' provide over 'Vec'?",
        "question_hi": "Rust में, 'std::collections::VecDeque' 'Vec' पर क्या प्रदान करता है?",
        "options_en": ["Efficient insertion/removal at both ends", "Better memory locality", "Faster random access", "Smaller memory footprint"],
        "options_hi": ["दोनों सिरों पर कुशल सम्मिलन/हटाना", "बेहतर मेमोरी लोकैलिटी", "तेज यादृच्छिक पहुंच", "छोटा मेमोरी फुटप्रिंट"],
        "answer_en": "Efficient insertion/removal at both ends",
        "answer_hi": "दोनों सिरों पर कुशल सम्मिलन/हटाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the primary use case for 'std::sync::LazyLock' in Rust?",
        "question_hi": "Rust में 'std::sync::LazyLock' का प्राथमिक उपयोग मामला क्या है?",
        "options_en": ["Thread-safe lazy initialization", "Deadlock prevention", "Memory optimization", "Lock-free programming"],
        "options_hi": ["थ्रेड-सुरक्षित आलसी आरंभीकरण", "डेडलॉक रोकथाम", "मेमोरी अनुकूलन", "लॉक-मुक्त प्रोग्रामिंग"],
        "answer_en": "Thread-safe lazy initialization",
        "answer_hi": "थ्रेड-सुरक्षित आलसी आरंभीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How does 'std::iter::FlatMap' differ from 'std::iter::Map'?",
        "question_hi": "'std::iter::FlatMap' 'std::iter::Map' से कैसे भिन्न है?",
        "options_en": ["FlatMap flattens nested iterators", "Map only transforms elements", "FlatMap handles Options and Results", "All of the above"],
        "options_hi": ["FlatMap नेस्टेड इटरेटरों को समतल करता है", "Map केवल तत्वों को रूपांतरित करता है", "FlatMap Options और Results को संभालता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of 'std::num::NonZeroU32' in Rust?",
        "question_hi": "Rust में 'std::num::NonZeroU32' का उद्देश्य क्या है?",
        "options_en": ["Represent non-zero integers for optimization", "Prevent division by zero", "Enable niche optimization", "All of the above"],
        "options_hi": ["अनुकूलन के लिए गैर-शून्य पूर्णांकों का प्रतिनिधित्व", "शून्य से विभाजन रोकना", "निच ऑप्टिमाइज़ेशन सक्षम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In Rust, what does 'std::path::PathBuf' provide over 'std::path::Path'?",
        "question_hi": "Rust में, 'std::path::PathBuf' 'std::path::Path' पर क्या प्रदान करता है?",
        "options_en": ["Owned, mutable path manipulation", "Faster path operations", "Cross-platform compatibility", "Automatic path normalization"],
        "options_hi": ["स्वामित्व वाला, परिवर्तनशील पथ हेरफेर", "तेज पथ संचालन", "क्रॉस-प्लेटफ़ॉर्म संगतता", "स्वचालित पथ सामान्यीकरण"],
        "answer_en": "Owned, mutable path manipulation",
        "answer_hi": "स्वामित्व वाला, परिवर्तनशील पथ हेरफेर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the role of 'std::error::Error::source' method in Rust error handling?",
        "question_hi": "Rust त्रुटि हैंडलिंग में 'std::error::Error::source' विधि की क्या भूमिका है?",
        "options_en": ["Provide underlying cause of error", "Display error message", "Convert error types", "Log error information"],
        "options_hi": ["त्रुटि के अंतर्निहित कारण प्रदान करना", "त्रुटि संदेश प्रदर्शित करना", "त्रुटि प्रकारों में बदलना", "त्रुटि जानकारी लॉग करना"],
        "answer_en": "Provide underlying cause of error",
        "answer_hi": "त्रुटि के अंतर्निहित कारण प्रदान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How does 'std::collections::BinaryHeap' order its elements by default?",
        "question_hi": "'std::collections::BinaryHeap' डिफ़ॉल्ट रूप से अपने तत्वों को कैसे क्रमबद्ध करता है?",
        "options_en": ["Max-heap (largest element at root)", "Min-heap (smallest element at root)", "Insertion order", "Random order"],
        "options_hi": ["मैक्स-हीप (सबसे बड़ा तत्व रूट पर)", "मिन-हीप (सबसे छोटा तत्व रूट पर)", "सम्मिलन क्रम", "यादृच्छिक क्रम"],
        "answer_en": "Max-heap (largest element at root)",
        "answer_hi": "मैक्स-हीप (सबसे बड़ा तत्व रूट पर)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of 'std::io::SeekFrom' enum in Rust?",
        "question_hi": "Rust में 'std::io::SeekFrom' enum का उद्देश्य क्या है?",
        "options_en": ["Define reference points for seeking", "Specify file opening modes", "Handle seek errors", "All of the above"],
        "options_hi": ["सीकिंग के लिए संदर्भ बिंदु परिभाषित करना", "फ़ाइल खोलने के तरीके निर्दिष्ट करना", "सीक त्रुटियों को संभालना", "उपरोक्त सभी"],
        "answer_en": "Define reference points for seeking",
        "answer_hi": "सीकिंग के लिए संदर्भ बिंदु परिभाषित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "In Rust, what does 'std::iter::successors' function create?",
        "question_hi": "Rust में, 'std::iter::successors' फ़ंक्शन क्या बनाता है?",
        "options_en": ["Iterator from initial value and successor function", "Infinite sequence generator", "Mathematical succession", "All of the above"],
        "options_hi": ["प्रारंभिक मान और उत्तराधिकारी फ़ंक्शन से इटरेटर", "अनंत अनुक्रम जनरेटर", "गणितीय उत्तराधिकार", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the primary advantage of 'std::collections::HashSet' over 'Vec' for membership testing?",
        "question_hi": "सदस्यता परीक्षण के लिए 'std::collections::HashSet' का 'Vec' पर प्राथमिक लाभ क्या है?",
        "options_en": ["O(1) average case lookup", "Memory efficiency", "Preserved insertion order", "Faster iteration"],
        "options_hi": ["O(1) औसत केस लुकअप", "मेमोरी दक्षता", "संरक्षित सम्मिलन क्रम", "तेज पुनरावृत्ति"],
        "answer_en": "O(1) average case lookup",
        "answer_hi": "O(1) औसत केस लुकअप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How does 'std::fs::read_dir' differ from 'std::fs::read_to_string'?",
        "question_hi": "'std::fs::read_dir' 'std::fs::read_to_string' से कैसे भिन्न है?",
        "options_en": ["read_dir reads directory entries, read_to_string reads file content", "Both read files but return different types", "read_dir is async, read_to_string is sync", "No significant difference"],
        "options_hi": ["read_dir निर्देशिका प्रविष्टियाँ पढ़ता है, read_to_string फ़ाइल सामग्री पढ़ता है", "दोनों फ़ाइलें पढ़ते हैं लेकिन अलग-अलग प्रकार लौटाते हैं", "read_dir async है, read_to_string sync है", "कोई महत्वपूर्ण अंतर नहीं"],
        "answer_en": "read_dir reads directory entries, read_to_string reads file content",
        "answer_hi": "read_dir निर्देशिका प्रविष्टियाँ पढ़ता है, read_to_string फ़ाइल सामग्री पढ़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of 'std::process::Stdio' in Rust process management?",
        "question_hi": "Rust प्रक्रिया प्रबंधन में 'std::process::Stdio' का उद्देश्य क्या है?",
        "options_en": ["Configure standard I/O for child processes", "Handle process termination", "Manage process groups", "All of the above"],
        "options_hi": ["चाइल्ड प्रक्रियाओं के लिए मानक I/O कॉन्फ़िगर करना", "प्रक्रिया समाप्ति संभालना", "प्रक्रिया समूह प्रबंधित करना", "उपरोक्त सभी"],
        "answer_en": "Configure standard I/O for child processes",
        "answer_hi": "चाइल्ड प्रक्रियाओं के लिए मानक I/O कॉन्फ़िगर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "In Rust, what does 'std::iter::Iterator::collect' require to determine the collection type?",
        "question_hi": "Rust में, 'std::iter::Iterator::collect' को संग्रह प्रकार निर्धारित करने के लिए क्या आवश्यक है?",
        "options_en": ["Type annotation or turbofish syntax", "Runtime type checking", "Only works with Vec", "Automatic type inference"],
        "options_hi": ["टाइप एनोटेशन या टर्बोफिश सिंटैक्स", "रनटाइम टाइप चेकिंग", "केवल Vec के साथ काम करता है", "स्वचालित टाइप इंफरेंस"],
        "answer_en": "Type annotation or turbofish syntax",
        "answer_hi": "टाइप एनोटेशन या टर्बोफिश सिंटैक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the role of 'std::sync::mpsc::TryIter' in Rust channel operations?",
        "question_hi": "Rust चैनल ऑपरेशन में 'std::sync::mpsc::TryIter' की क्या भूमिका है?",
        "options_en": ["Non-blocking iterator over received messages", "Error handling for channel operations", "Synchronous message processing", "All of the above"],
        "options_hi": ["प्राप्त संदेशों पर गैर-अवरुद्ध पुनरावर्तक", "चैनल ऑपरेशन के लिए त्रुटि हैंडलिंग", "सिंक्रोनस मैसेज प्रोसेसिंग", "उपरोक्त सभी"],
        "answer_en": "Non-blocking iterator over received messages",
        "answer_hi": "प्राप्त संदेशों पर गैर-अवरुद्ध पुनरावर्तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How does 'std::collections::BTreeMap' differ from 'std::collections::HashMap'?",
        "question_hi": "'std::collections::BTreeMap' 'std::collections::HashMap' से कैसे भिन्न है?",
        "options_en": ["BTreeMap maintains sorted order, HashMap does not", "HashMap is generally faster for lookups", "BTreeMap uses less memory", "All of the above"],
        "options_hi": ["BTreeMap क्रमबद्ध क्रम बनाए रखता है, HashMap नहीं", "लुकअप के लिए HashMap आम तौर पर तेज है", "BTreeMap कम मेमोरी का उपयोग करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of 'std::io::Lines' iterator in Rust?",
        "question_hi": "Rust में 'std::io::Lines' इटरेटर का उद्देश्य क्या है?",
        "options_en": ["Iterate over lines of text from a BufRead", "Read files line by line", "Handle different line endings", "All of the above"],
        "options_hi": ["BufRead से टेक्स्ट की पंक्तियों पर पुनरावृति", "फ़ाइलों को पंक्ति दर पंक्ति पढ़ना", "विभिन्न लाइन अंत को संभालना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "In Rust, what does 'std::net::ToSocketAddrs' trait enable?",
        "question_hi": "Rust में, 'std::net::ToSocketAddrs' ट्रेट क्या सक्षम करता है?",
        "options_en": ["Flexible socket address resolution", "Automatic DNS lookup", "Multiple address formats", "All of the above"],
        "options_hi": ["लचीला सॉकेट पता रिज़ॉल्यूशन", "स्वचालित DNS लुकअप", "एकाधिक पता प्रारूप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the primary use case for 'std::sync::Barrier' in concurrent programming?",
        "question_hi": "समवर्ती प्रोग्रामिंग में 'std::sync::Barrier' का प्राथमिक उपयोग मामला क्या है?",
        "options_en": ["Synchronize multiple threads at a point", "Prevent data races", "Manage thread pools", "All of the above"],
        "options_hi": ["एक बिंदु पर कई थ्रेड्स को सिंक्रनाइज़ करना", "डेटा रेस रोकना", "थ्रेड पूल प्रबंधित करना", "उपरोक्त सभी"],
        "answer_en": "Synchronize multiple threads at a point",
        "answer_hi": "एक बिंदु पर कई थ्रेड्स को सिंक्रनाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How does 'std::iter::Filter' adapter work in Rust?",
        "question_hi": "Rust में 'std::iter::Filter' एडाप्टर कैसे काम करता है?",
        "options_en": ["Only yields elements satisfying predicate", "Transforms elements then filters", "Combines multiple filters", "All of the above"],
        "options_hi": ["केवल उन तत्वों को उत्पन्न करता है जो प्रिडिकेट को संतुष्ट करते हैं", "तत्वों को रूपांतरित करता है फिर फ़िल्टर करता है", "एकाधिक फ़िल्टरों को संयोजित करता है", "उपरोक्त सभी"],
        "answer_en": "Only yields elements satisfying predicate",
        "answer_hi": "केवल उन तत्वों को उत्पन्न करता है जो प्रिडिकेट को संतुष्ट करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of 'std::ffi::CString' in Rust FFI?",
        "question_hi": "Rust FFI में 'std::ffi::CString' का उद्देश्य क्या है?",
        "options_en": ["Create null-terminated C-compatible strings", "Convert Rust strings to C strings", "Handle string encoding differences", "All of the above"],
        "options_hi": ["नल-टर्मिनेटेड C-संगत स्ट्रिंग्स बनाना", "Rust स्ट्रिंग्स को C स्ट्रिंग्स में बदलना", "स्ट्रिंग एन्कोडिंग अंतर संभालना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "In Rust, what does 'std::collections::LinkedList' excel at compared to 'Vec'?",
        "question_hi": "Rust में, 'std::collections::LinkedList' 'Vec' की तुलना में किसमें उत्कृष्ट है?",
        "options_en": ["O(1) insertion/removal at both ends", "Better cache performance", "Faster random access", "Smaller memory overhead"],
        "options_hi": ["दोनों सिरों पर O(1) सम्मिलन/हटाना", "बेहतर कैश प्रदर्शन", "तेज यादृच्छिक पहुंच", "छोटा मेमोरी ओवरहेड"],
        "answer_en": "O(1) insertion/removal at both ends",
        "answer_hi": "दोनों सिरों पर O(1) सम्मिलन/हटाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the role of 'std::io::ErrorKind' in Rust error handling?",
        "question_hi": "Rust त्रुटि हैंडलिंग में 'std::io::ErrorKind' की क्या भूमिका है?",
        "options_en": ["Categorize I/O error types", "Provide detailed error messages", "Enable error recovery strategies", "All of the above"],
        "options_hi": ["I/O त्रुटि प्रकारों को वर्गीकृत करना", "विस्तृत त्रुटि संदेश प्रदान करना", "त्रुटि पुनर्प्राप्ति रणनीतियाँ सक्षम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How does 'std::iter::Enumerate' adapter enhance Rust iterators?",
        "question_hi": "'std::iter::Enumerate' एडाप्टर Rust इटरेटरों को कैसे बढ़ाता है?",
        "options_en": ["Adds counting index to elements", "Filters elements by index", "Transforms index and value", "All of the above"],
        "options_hi": ["तत्वों में गिनती सूचकांक जोड़ता है", "सूचकांक द्वारा तत्वों को फ़िल्टर करता है", "सूचकांक और मान को रूपांतरित करता है", "उपरोक्त सभी"],
        "answer_en": "Adds counting index to elements",
        "answer_hi": "तत्वों में गिनती सूचकांक जोड़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of 'std::sync::Condvar::wait_timeout' in Rust?",
        "question_hi": "Rust में 'std::sync::Condvar::wait_timeout' का उद्देश्य क्या है?",
        "options_en": ["Wait for condition with timeout", "Prevent indefinite blocking", "Handle spurious wakeups", "All of the above"],
        "options_hi": ["टाइमआउट के साथ स्थिति की प्रतीक्षा", "अनिश्चितकालीन अवरुद्धता रोकना", "झूठी जागरण संभालना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "In Rust, what does 'std::iter::FromIterator' trait enable?",
        "question_hi": "Rust में, 'std::iter::FromIterator' ट्रेट क्या सक्षम करता है?",
        "options_en": ["Convert iterators to collections", "Custom collection creation", "Generic collection APIs", "All of the above"],
        "options_hi": ["इटरेटरों को संग्रहों में बदलना", "कस्टम संग्रह निर्माण", "सामान्य संग्रह API", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the primary advantage of 'std::collections::BinaryHeap' for priority queues?",
        "question_hi": "प्राथमिकता कतारों के लिए 'std::collections::BinaryHeap' का प्राथमिक लाभ क्या है?",
        "options_en": ["Efficient access to highest priority element", "Memory efficiency", "Fast insertion and removal", "All of the above"],
        "options_hi": ["उच्चतम प्राथमिकता वाले तत्व तक कुशल पहुंच", "मेमोरी दक्षता", "तेज सम्मिलन और हटाना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How does 'std::io::Chain' adapter work in Rust I/O?",
        "question_hi": "Rust I/O में 'std::io::Chain' एडाप्टर कैसे काम करता है?",
        "options_en": ["Concatenates multiple readers sequentially", "Reads from multiple sources simultaneously", "Combines readers and writers", "All of the above"],
        "options_hi": ["एकाधिक रीडरों को क्रमिक रूप से संयोजित करता है", "एक साथ कई स्रोतों से पढ़ता है", "रीडर और राइटर को संयोजित करता है", "उपरोक्त सभी"],
        "answer_en": "Concatenates multiple readers sequentially",
        "answer_hi": "एकाधिक रीडरों को क्रमिक रूप से संयोजित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of 'std::num::Saturating' wrapper type in Rust?",
        "question_hi": "Rust में 'std::num::Saturating' रैपर प्रकार का उद्देश्य क्या है?",
        "options_en": ["Prevent overflow with saturation arithmetic", "Enable checked operations", "Provide wrapping behavior", "All of the above"],
        "options_hi": ["सैचुरेशन अंकगणित के साथ ओवरफ्लो रोकना", "चेक किए गए ऑपरेशन सक्षम करना", "रैपिंग व्यवहार प्रदान करना", "उपरोक्त सभी"],
        "answer_en": "Prevent overflow with saturation arithmetic",
        "answer_hi": "सैचुरेशन अंकगणित के साथ ओवरफ्लो रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "In Rust, what does 'std::iter::Iterator::fold' enable?",
        "question_hi": "Rust में, 'std::iter::Iterator::fold' क्या सक्षम करता है?",
        "options_en": ["Accumulate values with initial accumulator", "Combine elements into single value", "Implement complex reductions", "All of the above"],
        "options_hi": ["प्रारंभिक संचायक के साथ मान जमा करना", "तत्वों को एकल मान में संयोजित करना", "जटिल कमी लागू करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the role of 'std::sync::mpsc::sync_channel' in bounded communication?",
        "question_hi": "बाउंडेड कम्युनिकेशन में 'std::sync::mpsc::sync_channel' की क्या भूमिका है?",
        "options_en": ["Provide backpressure with fixed capacity", "Prevent unbounded memory growth", "Synchronize producer and consumer", "All of the above"],
        "options_hi": ["फिक्स्ड क्षमता के साथ बैकप्रेशर प्रदान करना", "अनबाउंडेड मेमोरी ग्रोथ रोकना", "उत्पादक और उपभोक्ता को सिंक्रनाइज़ करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How does 'std::collections::HashSet' ensure element uniqueness?",
        "question_hi": "'std::collections::HashSet' तत्व विशिष्टता कैसे सुनिश्चित करता है?",
        "options_en": ["Uses hash and equality comparisons", "Requires elements to implement Hash and Eq", "Automatically deduplicates", "All of the above"],
        "options_hi": ["हैश और समानता तुलना का उपयोग करता है", "तत्वों को Hash और Eq लागू करने की आवश्यकता", "स्वचालित रूप से डीडुप्लिकेट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of 'std::iter::TakeWhile' adapter in Rust?",
        "question_hi": "Rust में 'std::iter::TakeWhile' एडाप्टर का उद्देश्य क्या है?",
        "options_en": ["Take elements while predicate is true", "Stop at first false predicate", "Early termination of iteration", "All of the above"],
        "options_hi": ["तत्व लें जब तक प्रिडिकेट सत्य है", "पहली गलत प्रिडिकेट पर रुकें", "पुनरावृत्ति का प्रारंभिक समापन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "In Rust, what does 'std::io::BufRead::fill_buf' provide?",
        "question_hi": "Rust में, 'std::io::BufRead::fill_buf' क्या प्रदान करता है?",
        "options_en": ["Direct access to internal buffer", "Efficient buffered reading", "Low-level buffer management", "All of the above"],
        "options_hi": ["आंतरिक बफर तक सीधी पहुंच", "कुशल बफर किया गया पढ़ना", "निम्न-स्तरीय बफर प्रबंधन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the primary use case for 'std::collections::VecDeque' over 'Vec'?",
        "question_hi": "'Vec' पर 'std::collections::VecDeque' का प्राथमिक उपयोग मामला क्या है?",
        "options_en": ["FIFO queue implementation", "Efficient pop from front", "Double-ended queue operations", "All of the above"],
        "options_hi": ["FIFO कतार कार्यान्वयन", "सामने से कुशल पॉप", "डबल-एंडेड कतार संचालन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How does 'std::iter::Zip' adapter combine iterators in Rust?",
        "question_hi": "Rust में 'std::iter::Zip' एडाप्टर इटरेटरों को कैसे संयोजित करता है?",
        "options_en": ["Pairs elements from multiple iterators", "Stops at shortest iterator", "Creates tuple pairs", "All of the above"],
        "options_hi": ["एकाधिक इटरेटरों से तत्वों को जोड़े", "सबसे छोटे इटरेटर पर रुकता है", "टपल जोड़े बनाता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of 'std::sync::mpsc::Receiver::iter' in Rust?",
        "question_hi": "Rust में 'std::sync::mpsc::Receiver::iter' का उद्देश्य क्या है?",
        "options_en": ["Blocking iterator over incoming messages", "Process messages until channel disconnect", "Simple message consumption", "All of the above"],
        "options_hi": ["आने वाले संदेशों पर अवरुद्ध पुनरावर्तक", "चैनल डिस्कनेक्ट तक संदेशों को संसाधित करना", "सरल संदेश उपभोग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "In Rust, what does 'std::collections::BTreeMap::range' provide?",
        "question_hi": "Rust में, 'std::collections::BTreeMap::range' क्या प्रदान करता है?",
        "options_en": ["View of map entries within key range", "Efficient range-based queries", "Sorted subset of entries", "All of the above"],
        "options_hi": ["कुंजी रेंज के भीतर मैप प्रविष्टियों का दृश्य", "कुशल रेंज-आधारित क्वेरी", "प्रविष्टियों का क्रमबद्ध उपसमुच्चय", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the role of 'std::iter::StepBy' adapter in Rust?",
        "question_hi": "Rust में 'std::iter::StepBy' एडाप्टर की क्या भूमिका है?",
        "options_en": ["Iterate with fixed step size", "Skip elements periodically", "Create strided iteration", "All of the above"],
        "options_hi": ["फिक्स्ड स्टेप साइज के साथ पुनरावृति", "समय-समय पर तत्वों को छोड़ें", "स्ट्राइडेड पुनरावृत्ति बनाएं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How does 'std::io::Read::read_to_end' differ from 'std::fs::read'?",
        "question_hi": "'std::io::Read::read_to_end' 'std::fs::read' से कैसे भिन्न है?",
        "options_en": ["read_to_end works with any Read, read is for files", "Both read entire content but from different sources", "read is more convenient for files", "All of the above"],
        "options_hi": ["read_to_end किसी भी Read के साथ काम करता है, read फ़ाइलों के लिए है", "दोनों पूरी सामग्री पढ़ते हैं लेकिन अलग-अलग स्रोतों से", "फ़ाइलों के लिए read अधिक सुविधाजनक है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of 'std::sync::mpsc::Sender::send' in async contexts?",
        "question_hi": "Async संदर्भों में 'std::sync::mpsc::Sender::send' का उद्देश्य क्या है?",
        "options_en": ["Blocking send operation", "Not suitable for async without spawning", "May block async runtime", "All of the above"],
        "options_hi": ["अवरुद्ध भेजने का संचालन", "स्पॉनिंग के बिना async के लिए उपयुक्त नहीं", "async रनटाइम को ब्लॉक कर सकता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "In Rust, what does 'std::iter::Iterator::partition' enable?",
        "question_hi": "Rust में, 'std::iter::Iterator::partition' क्या सक्षम करता है?",
        "options_en": ["Split iterator into two collections based on predicate", "Create separate collections for true/false elements", "Efficient filtering into multiple outputs", "All of the above"],
        "options_hi": ["प्रिडिकेट के आधार पर इटरेटर को दो संग्रहों में विभाजित करें", "सही/गलत तत्वों के लिए अलग-अलग संग्रह बनाएं", "एकाधिक आउटपुट में कुशल फ़िल्टरिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the primary advantage of 'std::collections::BTreeSet' for range queries?",
        "question_hi": "रेंज क्वेरी के लिए 'std::collections::BTreeSet' का प्राथमिक लाभ क्या है?",
        "options_en": ["Efficient range-based operations", "Sorted iteration", "Fast min/max access", "All of the above"],
        "options_hi": ["कुशल रेंज-आधारित संचालन", "क्रमबद्ध पुनरावृत्ति", "तेज न्यूनतम/अधिकतम पहुंच", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How does 'std::iter::Cycle' adapter work in Rust?",
        "question_hi": "Rust में 'std::iter::Cycle' एडाप्टर कैसे काम करता है?",
        "options_en": ["Repeats iterator endlessly", "Creates infinite sequence from finite", "Restarts iterator when exhausted", "All of the above"],
        "options_hi": ["इटरेटर को अंतहीन रूप से दोहराता है", "सीमित से अनंत अनुक्रम बनाता है", "समाप्त होने पर इटरेटर को पुनरारंभ करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of 'std::io::Write::flush' in Rust I/O?",
        "question_hi": "Rust I/O में 'std::io::Write::flush' का उद्देश्य क्या है?",
        "options_en": ["Ensure buffered data is written", "Force write completion", "Synchronize with underlying storage", "All of the above"],
        "options_hi": ["सुनिश्चित करें कि बफर किया गया डेटा लिखा गया है", "लेखन पूर्णता बलपूर्वक", "अंतर्निहित संग्रह के साथ सिंक्रनाइज़", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "In Rust, what does 'std::collections::HashMap::entry' API provide?",
        "question_hi": "Rust में, 'std::collections::HashMap::entry' API क्या प्रदान करता है?",
        "options_en": ["Efficient conditional insertion", "Atomic get-or-insert operations", "Avoid multiple lookups", "All of the above"],
        "options_hi": ["कुशल सशर्त सम्मिलन", "परमाणु प्राप्त-या-सम्मिलन संचालन", "एकाधिक लुकअप से बचें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the role of 'std::iter::Inspect' adapter in Rust?",
        "question_hi": "Rust में 'std::iter::Inspect' एडाप्टर की क्या भूमिका है?",
        "options_en": ["Side effects without consuming iterator", "Debugging iterator pipelines", "Monitoring element flow", "All of the above"],
        "options_hi": ["इटरेटर का उपभोग किए बिना साइड इफेक्ट", "इटरेटर पाइपलाइन डीबगिंग", "तत्व प्रवाह की निगरानी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How does 'std::collections::BinaryHeap::pop' maintain heap property?",
        "question_hi": "'std::collections::BinaryHeap::pop' हीप गुण कैसे बनाए रखता है?",
        "options_en": ["Reorganizes heap after removal", "Maintains binary heap invariant", "Ensures largest element at root", "All of the above"],
        "options_hi": ["हटाने के बाद हीप को पुनर्गठित करता है", "बाइनरी हीप इनवेरिएंट बनाए रखता है", "रूट पर सबसे बड़ा तत्व सुनिश्चित करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of 'std::iter::Iterator::min_by' in Rust?",
        "question_hi": "Rust में 'std::iter::Iterator::min_by' का उद्देश्य क्या है?",
        "options_en": ["Find minimum element using custom comparator", "Flexible min element selection", "Custom ordering for min", "All of the above"],
        "options_hi": ["कस्टम तुलनित्र का उपयोग करके न्यूनतम तत्व खोजें", "लचीला न्यूनतम तत्व चयन", "न्यूनतम के लिए कस्टम ऑर्डरिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "In Rust, what does 'std::sync::mpsc::channel' return?",
        "question_hi": "Rust में, 'std::sync::mpsc::channel' क्या लौटाता है?",
        "options_en": ["(Sender, Receiver) tuple", "Unbounded channel endpoints", "Thread communication primitives", "All of the above"],
        "options_hi": ["(Sender, Receiver) टपल", "अनबाउंडेड चैनल एंडपॉइंट", "थ्रेड कम्युनिकेशन प्रिमिटिव", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the primary use case for 'std::iter::Rev' adapter?",
        "question_hi": "'std::iter::Rev' एडाप्टर का प्राथमिक उपयोग मामला क्या है?",
        "options_en": ["Reverse iteration direction", "Backwards element access", "Reverse order processing", "All of the above"],
        "options_hi": ["उलटी पुनरावृत्ति दिशा", "पिछड़े तत्व पहुंच", "उल्टे क्रम प्रसंस्करण", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How does 'std::collections::BTreeMap::iter' provide elements?",
        "question_hi": "'std::collections::BTreeMap::iter' तत्व कैसे प्रदान करता है?",
        "options_en": ["In sorted key order", "As key-value pairs", "Efficient ordered iteration", "All of the above"],
        "options_hi": ["क्रमबद्ध कुंजी क्रम में", "कुंजी-मान जोड़े के रूप में", "कुशल क्रमबद्ध पुनरावृत्ति", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of 'std::iter::Iterator::try_fold' in Rust?",
        "question_hi": "Rust में 'std::iter::Iterator::try_fold' का उद्देश्य क्या है?",
        "options_en": ["Fallible folding operation", "Early termination on error", "Result-based accumulation", "All of the above"],
        "options_hi": ["त्रुटिपूर्ण फोल्डिंग ऑपरेशन", "त्रुटि पर प्रारंभिक समापन", "परिणाम-आधारित संचय", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "In Rust, what does 'std::io::Error::last_os_error' provide?",
        "question_hi": "Rust में, 'std::io::Error::last_os_error' क्या प्रदान करता है?",
        "options_en": ["Most recent OS-level error", "Platform-specific error information", "Raw error code from system", "All of the above"],
        "options_hi": ["सबसे recent OS-स्तरीय त्रुटि", "प्लेटफ़ॉर्म-विशिष्ट त्रुटि जानकारी", "सिस्टम से कच्चा त्रुटि कोड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the role of 'std::iter::Fuse' adapter in Rust?",
        "question_hi": "Rust में 'std::iter::Fuse' एडाप्टर की क्या भूमिका है?",
        "options_en": ["Prevent further iteration after first None", "Make iterator fuse after termination", "Handle once-iterators safely", "All of the above"],
        "options_hi": ["पहले None के बाद आगे की पुनरावृत्ति रोकें", "समाप्ति के बाद इटरेटर फ्यूज बनाएं", "वन-इटरेटरों को सुरक्षित रूप से संभालें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How does 'std::collections::HashSet::drain' differ from 'clear'?",
        "question_hi": "'std::collections::HashSet::drain' 'clear' से कैसे भिन्न है?",
        "options_en": ["drain returns iterator over removed elements", "clear simply removes all elements", "drain allows element reuse", "All of the above"],
        "options_hi": ["drain हटाए गए तत्वों पर इटरेटर लौटाता है", "clear बस सभी तत्वों को हटा देता है", "drain तत्व पुन: उपयोग की अनुमति देता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of 'std::iter::Iterator::copied' adapter?",
        "question_hi": "Rust में 'std::iter::Iterator::copied' एडाप्टर का उद्देश्य क्या है?",
        "options_en": ["Copy elements instead of borrowing", "Convert references to owned values", "Require Copy trait on elements", "All of the above"],
        "options_hi": ["उधार लेने के बजाय तत्वों की प्रतिलिपि बनाएँ", "संदर्भों को स्वामित्व वाले मानों में बदलें", "तत्वों पर Copy ट्रेट की आवश्यकता", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "In Rust, what does 'std::sync::mpsc::TrySendError::Full' indicate?",
        "question_hi": "Rust में, 'std::sync::mpsc::TrySendError::Full' क्या इंगित करता है?",
        "options_en": ["Sync channel is at capacity", "Non-blocking send would block", "Backpressure situation", "All of the above"],
        "options_hi": ["सिंक चैनल क्षमता पर है", "गैर-अवरुद्ध भेजना अवरुद्ध होगा", "बैकप्रेशर स्थिति", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the primary advantage of 'std::collections::LinkedList' for certain algorithms?",
        "question_hi": "कुछ एल्गोरिदम के लिए 'std::collections::LinkedList' का प्राथमिक लाभ क्या है?",
        "options_en": ["O(1) insertion/removal anywhere with cursor", "No reallocation on growth", "Stable references to elements", "All of the above"],
        "options_hi": ["कर्सर के साथ कहीं भी O(1) सम्मिलन/हटाना", "विकास पर कोई पुन: आवंटन नहीं", "तत्वों के लिए स्थिर संदर्भ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How does 'std::iter::Iterator::find' differ from 'filter().next()'?",
        "question_hi": "'std::iter::Iterator::find' 'filter().next()' से कैसे भिन्न है?",
        "options_en": ["find stops at first match, filter processes all", "find is more efficient for single match", "find returns Option, filter returns iterator", "All of the above"],
        "options_hi": ["find पहले मैच पर रुकता है, filter सभी को संसाधित करता है", "सिंगल मैच के लिए find अधिक कुशल है", "find Option लौटाता है, filter इटरेटर लौटाता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of 'std::io::Cursor' in Rust?",
        "question_hi": "Rust में 'std::io::Cursor' का उद्देश्य क्या है?",
        "options_en": ["Add seeking to in-memory buffers", "Treat slices as seekable streams", "Mock I/O for testing", "All of the above"],
        "options_hi": ["इन-मेमोरी बफर में सीकिंग जोड़ना", "स्लाइस को सीक करने योग्य स्ट्रीम के रूप में व्यवहार करना", "परीक्षण के लिए नकली I/O", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "In Rust, what does 'std::collections::BinaryHeap::into_sorted_vec' provide?",
        "question_hi": "Rust में, 'std::collections::BinaryHeap::into_sorted_vec' क्या प्रदान करता है?",
        "options_en": ["Consume heap and return sorted vector", "Efficient conversion to sorted order", "Destroy heap for sorted result", "All of the above"],
        "options_hi": ["हीप का उपभोग करें और क्रमबद्ध वेक्टर लौटाएं", "क्रमबद्ध क्रम में कुशल रूपांतरण", "क्रमबद्ध परिणाम के लिए हीप नष्ट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the role of 'std::iter::Iterator::unzip' in Rust?",
        "question_hi": "Rust में 'std::iter::Iterator::unzip' की क्या भूमिका है?",
        "options_en": ["Split tuple iterator into separate collections", "Convert (A, B) pairs to (Vec<A>, Vec<B>)", "Reverse of zip operation", "All of the above"],
        "options_hi": ["टपल इटरेटर को अलग-अलग संग्रहों में विभाजित करें", "(A, B) जोड़े को (Vec<A>, Vec<B>) में बदलें", "zip ऑपरेशन का उलटा", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How does 'std::sync::mpsc::Receiver::recv_timeout' handle timeouts?",
        "question_hi": "'std::sync::mpsc::Receiver::recv_timeout' टाइमआउट को कैसे संभालता है?",
        "options_en": ["Returns Err(RecvTimeoutError::Timeout) on timeout", "Non-blocking with time limit", "Doesn't block indefinitely", "All of the above"],
        "options_hi": ["टाइमआउट पर Err(RecvTimeoutError::Timeout) लौटाता है", "समय सीमा के साथ गैर-अवरुद्ध", "अनिश्चित काल तक अवरुद्ध नहीं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of 'std::iter::Iterator::chain' in Rust?",
        "question_hi": "Rust में 'std::iter::Iterator::chain' का उद्देश्य क्या है?",
        "options_en": ["Concatenate multiple iterators", "Sequence iteration from multiple sources", "Create longer iterator sequence", "All of the above"],
        "options_hi": ["एकाधिक इटरेटरों को संयोजित करना", "एकाधिक स्रोतों से अनुक्रम पुनरावृत्ति", "लंबी इटरेटर अनुक्रम बनाएं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "In Rust, what does 'std::collections::HashMap::retain' enable?",
        "question_hi": "Rust में, 'std::collections::HashMap::retain' क्या सक्षम करता है?",
        "options_en": ["Filter elements in-place", "Remove elements based on predicate", "Efficient bulk removal", "All of the above"],
        "options_hi": ["जगह-जगह तत्वों को फ़िल्टर करें", "प्रिडिकेट के आधार पर तत्वों को हटाएं", "कुशल बल्क हटाना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the primary use case for 'std::iter::Empty' iterator?",
        "question_hi": "'std::iter::Empty' इटरेटर का प्राथमिक उपयोग मामला क्या है?",
        "options_en": ["Represent no elements", "Placeholder for empty sequences", "Generic algorithm boundaries", "All of the above"],
        "options_hi": ["कोई तत्व प्रतिनिधित्व नहीं", "खाली अनुक्रमों के लिए प्लेसहोल्डर", "सामान्य एल्गोरिदम सीमाएँ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
   {
        "num": 72,
        "question_en": "How does 'std::mem::size_of_val' handle DSTs?",
        "question_hi": "'std::mem::size_of_val' DSTs को कैसे संभालता है?",
        "options_en": ["Returns runtime size", "Only works with sized types", "Panics with DSTs", "Returns 0 for DSTs"],
        "options_hi": ["रनटाइम आकार लौटाता है", "केवल आकार वाले प्रकारों के साथ काम करता है", "DSTs के साथ पैनिक", "DSTs के लिए 0 लौटाता है"],
        "answer_en": "Returns runtime size",
        "answer_hi": "रनटाइम आकार लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'std::sync::mpsc::TryRecvError'?",
        "question_hi": "'std::sync::mpsc::TryRecvError' का उद्देश्य क्या है?",
        "options_en": ["Handle non-blocking receive errors", "Indicate empty channel or disconnect", "Error type for try_recv", "All of the above"],
        "options_hi": ["गैर-अवरुद्ध रिसीव त्रुटियों को संभालें", "खाली चैनल या डिस्कनेक्ट इंगित करें", "try_recv के लिए त्रुटि प्रकार", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "In Rust, what does 'std::ptr::write_volatile' guarantee?",
        "question_hi": "Rust में, 'std::ptr::write_volatile' क्या गारंटी देता है?",
        "options_en": ["No compiler optimization on write", "Atomic write operation", "Memory barrier", "Cache flush"],
        "options_hi": ["राइट पर कोई कंपाइलर ऑप्टिमाइज़ेशन नहीं", "एटॉमिक राइट ऑपरेशन", "मेमोरी बैरियर", "कैश फ्लश"],
        "answer_en": "No compiler optimization on write",
        "answer_hi": "राइट पर कोई कंपाइलर ऑप्टिमाइज़ेशन नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the role of 'std::sync::atomic::Ordering::Relaxed'?",
        "question_hi": "'std::sync::atomic::Ordering::Relaxed' की क्या भूमिका है?",
        "options_en": ["No ordering guarantees", "Only atomicity guarantee", "Fastest but weakest ordering", "All of the above"],
        "options_hi": ["कोई ऑर्डरिंग गारंटी नहीं", "केवल परमाणुता गारंटी", "सबसे तेज़ लेकिन सबसे कमजोर ऑर्डरिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How does 'std::mem::forget' affect resource cleanup?",
        "question_hi": "'std::mem::forget' संसाधन सफाई को कैसे प्रभावित करता है?",
        "options_en": ["Prevents destructors from running", "Causes memory leaks", "Useful for FFI", "All of the above"],
        "options_hi": ["डिस्ट्रक्टर्स को चलने से रोकता है", "मेमोरी लीक का कारण बनता है", "FFI के लिए उपयोगी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of 'std::sync::mpsc::sync_channel'?",
        "question_hi": "'std::sync::mpsc::sync_channel' का उद्देश्य क्या है?",
        "options_en": ["Create bounded message channel", "Backpressure mechanism", "Prevent unbounded memory growth", "All of the above"],
        "options_hi": ["बाउंडेड मैसेज चैनल बनाएं", "बैकप्रेशर मैकेनिज्म", "अनबाउंडेड मेमोरी ग्रोथ रोकें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "In Rust, what does 'std::mem::align_of_val' require?",
        "question_hi": "Rust में, 'std::mem::align_of_val' की क्या आवश्यकता है?",
        "options_en": ["Reference to value", "Ownership of value", "Mutable reference", "Only Sized types"],
        "options_hi": ["मान का संदर्भ", "मान का स्वामित्व", "परिवर्तनशील संदर्भ", "केवल Sized प्रकार"],
        "answer_en": "Reference to value",
        "answer_hi": "मान का संदर्भ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the effect of '#[repr(u8)]' on an enum?",
        "question_hi": "Enum पर '#[repr(u8)]' का क्या प्रभाव होता है?",
        "options_en": ["Use u8 for discriminant", "Limit to 256 variants", "C-compatible enum", "All of the above"],
        "options_hi": ["डिस्क्रिमिनेंट के लिए u8 का उपयोग करें", "256 वेरिएंट तक सीमित", "C-संगत enum", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How does 'std::sync::atomic::AtomicBool::swap' work?",
        "question_hi": "'std::sync::atomic::AtomicBool::swap' कैसे काम करता है?",
        "options_en": ["Atomically swap and return previous value", "Swap without returning", "Only toggles value", "May have data races"],
        "options_hi": ["परमाणु रूप से स्वैप और पिछला मान लौटाएं", "वापसी के बिना स्वैप", "केवल मान टॉगल", "डेटा रेस हो सकती है"],
        "answer_en": "Atomically swap and return previous value",
        "answer_hi": "परमाणु रूप से स्वैप और पिछला मान लौटाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of 'std::mem::MaybeUninit::assume_init'?",
        "question_hi": "'std::mem::MaybeUninit::assume_init' का उद्देश्य क्या है?",
        "options_en": ["Convert to initialized value", "Mark memory as initialized", "Unsafe operation", "All of the above"],
        "options_hi": ["इनिशियलाइज्ड वैल्यू में कन्वर्ट", "मेमोरी को इनिशियलाइज्ड मार्क", "असुरक्षित ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "In Rust, what does 'std::sync::mpsc::Sender::try_send' return?",
        "question_hi": "Rust में, 'std::sync::mpsc::Sender::try_send' क्या लौटाता है?",
        "options_en": ["Result indicating success or full/disconnected", "Always returns unit", "Blocks if full", "Panics on failure"],
        "options_hi": ["सफलता या भरा/डिस्कनेक्ट इंगित करने वाला परिणाम", "हमेशा यूनिट लौटाता है", "यदि भरा है तो ब्लॉक", "विफलता पर पैनिक"],
        "answer_en": "Result indicating success or full/disconnected",
        "answer_hi": "सफलता या भरा/डिस्कनेक्ट इंगित करने वाला परिणाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the role of 'std::sync::atomic::compiler_fence'?",
        "question_hi": "'std::sync::atomic::compiler_fence' की क्या भूमिका है?",
        "options_en": ["Prevent compiler reordering only", "No hardware memory barrier", "Optimization barrier", "All of the above"],
        "options_hi": ["केवल कंपाइलर पुन: क्रमबद्धता रोकें", "कोई हार्डवेयर मेमोरी बैरियर नहीं", "ऑप्टिमाइज़ेशन बैरियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How does 'std::mem::replace' handle drop?",
        "question_hi": "'std::mem::replace' ड्रॉप को कैसे संभालता है?",
        "options_en": ["Drops old value after replacement", "Never drops values", "Only drops if types differ", "May leak memory"],
        "options_hi": ["प्रतिस्थापन के बाद पुराने मान को ड्रॉप", "कभी मान ड्रॉप नहीं", "केवल तभी ड्रॉप करता है जब प्रकार भिन्न हों", "मेमोरी लीक हो सकती है"],
        "answer_en": "Drops old value after replacement",
        "answer_hi": "प्रतिस्थापन के बाद पुराने मान को ड्रॉप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'std::sync::mpsc::RecvTimeoutError'?",
        "question_hi": "'std::sync::mpsc::RecvTimeoutError' का उद्देश्य क्या है?",
        "options_en": ["Handle timed receive errors", "Indicate timeout or disconnect", "Error type for recv_timeout", "All of the above"],
        "options_hi": ["टाइम्ड रिसीव एरर संभालें", "टाइमआउट या डिस्कनेक्ट इंगित करें", "recv_timeout के लिए त्रुटि प्रकार", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "In Rust, what does 'std::ptr::read' do?",
        "question_hi": "Rust में, 'std::ptr::read' क्या करता है?",
        "options_en": ["Reads value without moving", "Copies bits from memory", "Leaves source valid", "All of the above"],
        "options_hi": ["मूव किए बिना मान पढ़ता है", "मेमोरी से बिट्स कॉपी", "स्रोत को वैध छोड़ता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the effect of '#[repr(align(1))]'?",
        "question_hi": "'#[repr(align(1))]' का क्या प्रभाव होता है?",
        "options_en": ["Minimum alignment of 1 byte", "No padding between fields", "May cause unaligned access", "All of the above"],
        "options_hi": ["1 बाइट की न्यूनतम अलाइनमेंट", "फ़ील्ड्स के बीच कोई पैडिंग नहीं", "असंरेखित एक्सेस का कारण बन सकता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How does 'std::sync::atomic::AtomicUsize::compare_exchange' work?",
        "question_hi": "'std::sync::atomic::AtomicUsize::compare_exchange' कैसे काम करता है?",
        "options_en": ["Atomically compare and swap", "CAS operation", "Returns Result with previous value", "All of the above"],
        "options_hi": ["परमाणु रूप से तुलना और स्वैप", "CAS ऑपरेशन", "पिछले मान के साथ परिणाम लौटाता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'std::mem::MaybeUninit::write'?",
        "question_hi": "'std::mem::MaybeUninit::write' का उद्देश्य क्या है?",
        "options_en": ["Initialize MaybeUninit with value", "Safe initialization method", "Avoids undefined behavior", "All of the above"],
        "options_hi": ["MaybeUninit को मान के साथ इनिशियलाइज़", "सुरक्षित आरंभीकरण विधि", "अपरिभाषित व्यवहार से बचता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "In Rust, what does 'std::sync::mpsc::SyncSender::send_timeout' do?",
        "question_hi": "Rust में, 'std::sync::mpsc::SyncSender::send_timeout' क्या करता है?",
        "options_en": ["Send with timeout", "Returns Result with success or timeout", "Non-blocking with time limit", "All of the above"],
        "options_hi": ["टाइमआउट के साथ भेजें", "सफलता या टाइमआउट के साथ परिणाम लौटाता है", "समय सीमा के साथ गैर-अवरुद्ध", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the role of 'std::sync::atomic::Ordering::Release'?",
        "question_hi": "'std::sync::atomic::Ordering::Release' की क्या भूमिका है?",
        "options_en": ["Ensure previous writes are visible to acquires", "Memory barrier for stores", "Synchronize-with acquire loads", "All of the above"],
        "options_hi": ["सुनिश्चित करें कि पिछले राइट एक्वायर को दिखाई दे", "स्टोर के लिए मेमोरी बैरियर", "अधिग्रहण लोड के साथ सिंक्रनाइज़", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How does 'std::mem::transmute' handle lifetimes?",
        "question_hi": "'std::mem::transmute' लाइफटाइम को कैसे संभालता है?",
        "options_en": ["Does not change lifetime relationships", "May extend or shorten lifetimes", "Always invalidates lifetimes", "Requires explicit lifetime annotations"],
        "options_hi": ["लाइफटाइम रिलेशनशिप नहीं बदलता", "लाइफटाइम बढ़ा या छोटा कर सकता है", "हमेशा लाइफटाइम अमान्य", "स्पष्ट लाइफटाइम एनोटेशन की आवश्यकता"],
        "answer_en": "Does not change lifetime relationships",
        "answer_hi": "लाइफटाइम रिलेशनशिप नहीं बदलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'std::sync::mpsc::TrySendError'?",
        "question_hi": "'std::sync::mpsc::TrySendError' का उद्देश्य क्या है?",
        "options_en": ["Handle non-blocking send errors", "Indicate full channel or disconnect", "Error type for try_send", "All of the above"],
        "options_hi": ["गैर-अवरुद्ध भेजने की त्रुटियों को संभालें", "भरा चैनल या डिस्कनेक्ट इंगित करें", "try_send के लिए त्रुटि प्रकार", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "In Rust, what does 'std::ptr::null_mut' create?",
        "question_hi": "Rust में, 'std::ptr::null_mut' क्या बनाता है?",
        "options_en": ["Null mutable raw pointer", "Null immutable pointer", "Empty mutable reference", "Zero mutable value"],
        "options_hi": ["नल म्यूटेबल रॉ पॉइंटर", "नल इम्यूटेबल पॉइंटर", "खाली परिवर्तनशील संदर्भ", "शून्य परिवर्तनशील मान"],
        "answer_en": "Null mutable raw pointer",
        "answer_hi": "नल म्यूटेबल रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the effect of '#[repr(transparent)]' on single-field structs?",
        "question_hi": "सिंगल-फ़ील्ड स्ट्रक्चर पर '#[repr(transparent)]' का क्या प्रभाव होता है?",
        "options_en": ["Same representation as single field", "No additional memory overhead", "ABI compatibility with field type", "All of the above"],
        "options_hi": ["सिंगल फ़ील्ड के समान प्रतिनिधित्व", "कोई अतिरिक्त मेमोरी ओवरहेड नहीं", "फ़ील्ड प्रकार के साथ ABI संगतता", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How does 'std::sync::atomic::AtomicIsize::fetch_sub' work?",
        "question_hi": "'std::sync::atomic::AtomicIsize::fetch_sub' कैसे काम करता है?",
        "options_en": ["Atomically subtract and return previous value", "Subtract without returning", "Only atomic decrement", "May have data races"],
        "options_hi": ["परमाणु रूप से घटाएं और पिछला मान लौटाएं", "वापसी के बिना घटाएं", "केवल परमाणु कमी", "डेटा रेस हो सकती है"],
        "answer_en": "Atomically subtract and return previous value",
        "answer_hi": "परमाणु रूप से घटाएं और पिछला मान लौटाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'std::mem::MaybeUninit::uninit'?",
        "question_hi": "'std::mem::MaybeUninit::uninit' का उद्देश्य क्या है?",
        "options_en": ["Create uninitialized MaybeUninit", "Safe uninitialized memory", "Avoid undefined behavior", "All of the above"],
        "options_hi": ["अप्रारंभिक MaybeUninit बनाएं", "सुरक्षित अप्रारंभिक मेमोरी", "अपरिभाषित व्यवहार से बचें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "In Rust, what does 'std::sync::mpsc::Receiver::recv_timeout' return?",
        "question_hi": "Rust में, 'std::sync::mpsc::Receiver::recv_timeout' क्या लौटाता है?",
        "options_en": ["Result with message or timeout/disconnect", "Always returns message", "Blocks forever on timeout", "Panics on timeout"],
        "options_hi": ["संदेश या टाइमआउट/डिस्कनेक्ट के साथ परिणाम", "हमेशा संदेश लौटाता है", "टाइमआउट पर हमेशा के लिए ब्लॉक", "टाइमआउट पर पैनिक"],
        "answer_en": "Result with message or timeout/disconnect",
        "answer_hi": "संदेश या टाइमआउट/डिस्कनेक्ट के साथ परिणाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the role of 'std::sync::atomic::Ordering::AcqRel'?",
        "question_hi": "'std::sync::atomic::Ordering::AcqRel' की क्या भूमिका है?",
        "options_en": ["Combines Acquire and Release", "Both load-acquire and store-release", "Stronger than Relaxed, weaker than SeqCst", "All of the above"],
        "options_hi": ["Acquire और Release को जोड़ता है", "दोनों लोड-अधिग्रहण और स्टोर-रिलीज", "Relaxed से मजबूत, SeqCst से कमजोर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How does 'std::mem::size_of' handle generic types?",
        "question_hi": "'std::mem::size_of' जेनेरिक प्रकारों को कैसे संभालता है?",
        "options_en": ["Returns size for concrete type", "Monomorphized at compile time", "Depends on type parameters", "All of the above"],
        "options_hi": ["कंक्रीट टाइप के लिए साइज लौटाता है", "कंपाइल टाइम पर मोनोमोर्फाइज्ड", "टाइप पैरामीटर पर निर्भर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
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