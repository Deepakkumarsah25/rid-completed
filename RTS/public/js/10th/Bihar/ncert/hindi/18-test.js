const questions = [
    {
        "num": 1,
        "question_en": "What is the purpose of the 'any' type alias in Go generics?",
        "question_hi": "Go जेनरिक्स में 'any' टाइप एलियास का उद्देश्य क्या है?",
        "options_en": ["It's an alias for interface{} for better readability", "It's a new generic type", "It replaces all interfaces", "It's for any data type"],
        "options_hi": ["यह बेहतर रीडेबिलिटी के लिए interface{} का एलियास है", "यह एक नया जेनरिक टाइप है", "यह सभी इंटरफेस को रिप्लेस करता है", "यह किसी भी डेटा टाइप के लिए है"],
        "answer_en": "It's an alias for interface{} for better readability",
        "answer_hi": "यह बेहतर रीडेबिलिटी के लिए interface{} का एलियास है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How does Go's scheduler implement work-stealing?",
        "question_hi": "Go का शेड्यूलर वर्क-स्टीलिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Idle processors steal goroutines from busy processors", "All processors share a common queue", "Goroutines are randomly distributed", "Using a central dispatcher"],
        "options_hi": ["आइडल प्रोसेसर बिजी प्रोसेसर से गोरूटीन चुराते हैं", "सभी प्रोसेसर एक कॉमन क्यू शेयर करते हैं", "गोरूटीन रैंडमली डिस्ट्रीब्यूट की जाती हैं", "सेंट्रल डिस्पैचर का उपयोग करके"],
        "answer_en": "Idle processors steal goroutines from busy processors",
        "answer_hi": "आइडल प्रोसेसर बिजी प्रोसेसर से गोरूटीन चुराते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the difference between type parameters and type arguments in generics?",
        "question_hi": "जेनरिक्स में टाइप पैरामीटर और टाइप आर्गुमेंट में क्या अंतर है?",
        "options_en": ["Parameters are in declaration, arguments are in instantiation", "No difference", "Arguments are for functions only", "Parameters are deprecated"],
        "options_hi": ["पैरामीटर डिक्लेरेशन में होते हैं, आर्गुमेंट इंस्टेंटिएशन में होते हैं", "कोई अंतर नहीं", "आर्गुमेंट केवल फंक्शन के लिए हैं", "पैरामीटर डिप्रिकेटेड हैं"],
        "answer_en": "Parameters are in declaration, arguments are in instantiation",
        "answer_hi": "पैरामीटर डिक्लेरेशन में होते हैं, आर्गुमेंट इंस्टेंटिएशन में होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How to implement a lock-free ring buffer using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री रिंग बफर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.AddUint64 for head/tail pointers with modulo arithmetic", "Use channels", "Use mutexes", "Use sync.Map"],
        "options_hi": ["मॉड्यूलो अर्थमेटिक के साथ head/tail पॉइंटर के लिए atomic.AddUint64 का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "sync.Map का उपयोग करें"],
        "answer_en": "Use atomic.AddUint64 for head/tail pointers with modulo arithmetic",
        "answer_hi": "मॉड्यूलो अर्थमेटिक के साथ head/tail पॉइंटर के लिए atomic.AddUint64 का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of runtime.memprofile rate in memory profiling?",
        "question_hi": "मेमोरी प्रोफाइलिंग में runtime.memprofile rate का उद्देश्य क्या है?",
        "options_en": ["Controls fraction of memory allocations that are recorded", "Sets total memory limit", "Controls GC frequency", "Sets heap size"],
        "options_hi": ["रिकॉर्ड की जाने वाली मेमोरी अलोकेशन के फ्रैक्शन को कंट्रोल करता है", "टोटल मेमोरी लिमिट सेट करता है", "GC फ्रीक्वेंसी कंट्रोल करता है", "हीप साइज सेट करता है"],
        "answer_en": "Controls fraction of memory allocations that are recorded",
        "answer_hi": "रिकॉर्ड की जाने वाली मेमोरी अलोकेशन के फ्रैक्शन को कंट्रोल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How to implement type-safe heterogeneous collections using generics?",
        "question_hi": "जेनरिक्स का उपयोग करके टाइप-सेफ हेटरोजीनियस कलेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use interface constraints with type switches", "Use interface{} with reflection", "Use map[string]interface{}", "Use arrays only"],
        "options_hi": ["टाइप स्विच के साथ इंटरफेस कंस्ट्रेंट का उपयोग करें", "रिफ्लेक्शन के साथ interface{} का उपयोग करें", "map[string]interface{} का उपयोग करें", "केवल ऐरे का उपयोग करें"],
        "answer_en": "Use interface constraints with type switches",
        "answer_hi": "टाइप स्विच के साथ इंटरफेस कंस्ट्रेंट का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the difference between structural typing and nominal typing in Go interfaces?",
        "question_hi": "Go इंटरफेस में स्ट्रक्चरल टाइपिंग और नॉमिनल टाइपिंग में क्या अंतर है?",
        "options_en": ["Go uses structural typing (duck typing), not nominal", "No difference", "Go uses nominal typing", "Both are supported"],
        "options_hi": ["Go स्ट्रक्चरल टाइपिंग (डक टाइपिंग) का उपयोग करता है, नॉमिनल नहीं", "कोई अंतर नहीं", "Go नॉमिनल टाइपिंग का उपयोग करता है", "दोनों सपोर्टेड हैं"],
        "answer_en": "Go uses structural typing (duck typing), not nominal",
        "answer_hi": "Go स्ट्रक्चरल टाइपिंग (डक टाइपिंग) का उपयोग करता है, नॉमिनल नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How to implement a distributed rate limiter using Redis in Go?",
        "question_hi": "Go में Redis का उपयोग करके डिस्ट्रीब्यूटेड रेट लिमिटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use Redis INCR with EXPIRE for sliding window", "Use local counters only", "Use database transactions", "Use file system"],
        "options_hi": ["स्लाइडिंग विंडो के लिए EXPIRE के साथ Redis INCR का उपयोग करें", "केवल लोकल काउंटर का उपयोग करें", "डेटाबेस ट्रांजैक्शन का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use Redis INCR with EXPIRE for sliding window",
        "answer_hi": "स्लाइडिंग विंडो के लिए EXPIRE के साथ Redis INCR का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'comparable' built-in constraint in Go generics?",
        "question_hi": "Go जेनरिक्स में 'comparable' बिल्ट-इन कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Allows types that support == and != operations", "Allows any type comparison", "For numeric comparisons only", "For string comparisons only"],
        "options_hi": ["== और != ऑपरेशन सपोर्ट करने वाले टाइप की अनुमति देता है", "किसी भी टाइप कम्पेरिजन की अनुमति देता है", "केवल न्यूमेरिक कम्पेरिजन के लिए", "केवल स्ट्रिंग कम्पेरिजन के लिए"],
        "answer_en": "Allows types that support == and != operations",
        "answer_hi": "== और != ऑपरेशन सपोर्ट करने वाले टाइप की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How to implement a circuit breaker with exponential backoff in Go?",
        "question_hi": "Go में एक्सपोनेंशियल बैकऑफ के साथ सर्किट ब्रेकर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use state machine with time.Duration and sync.Once", "Use channels only", "Use context cancellation", "Use mutex locks"],
        "options_hi": ["time.Duration और sync.Once के साथ स्टेट मशीन का उपयोग करें", "केवल चैनल का उपयोग करें", "कॉन्टेक्स्ट कैंसलेशन का उपयोग करें", "म्यूटेक्स लॉक का उपयोग करें"],
        "answer_en": "Use state machine with time.Duration and sync.Once",
        "answer_hi": "time.Duration और sync.Once के साथ स्टेट मशीन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the difference between shallow and deep copy for maps in Go?",
        "question_hi": "Go में मैप के लिए शैलो और डीप कॉपी में क्या अंतर है?",
        "options_en": ["Shallow copy shares references, deep copy duplicates all nested data", "No difference", "Shallow copy is faster", "Deep copy is deprecated"],
        "options_hi": ["शैलो कॉपी रिफरेन्स शेयर करती है, डीप कॉपी सभी नेस्टेड डेटा को डुप्लिकेट करती है", "कोई अंतर नहीं", "शैलो कॉपी तेज है", "डीप कॉपी डिप्रिकेटेड है"],
        "answer_en": "Shallow copy shares references, deep copy duplicates all nested data",
        "answer_hi": "शैलो कॉपी रिफरेन्स शेयर करती है, डीप कॉपी सभी नेस्टेड डेटा को डुप्लिकेट करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How to implement a custom garbage collector observer in Go?",
        "question_hi": "Go में कस्टम गार्बेज कलेक्टर ऑब्जर्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use debug.SetGCPercent and runtime.ReadMemStats", "Use finalizers only", "Use memory profiling", "Use CPU profiling"],
        "options_hi": ["debug.SetGCPercent और runtime.ReadMemStats का उपयोग करें", "केवल फाइनलाइज़र का उपयोग करें", "मेमोरी प्रोफाइलिंग का उपयोग करें", "CPU प्रोफाइलिंग का उपयोग करें"],
        "answer_en": "Use debug.SetGCPercent and runtime.ReadMemStats",
        "answer_hi": "debug.SetGCPercent और runtime.ReadMemStats का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the '~' token in Go generic constraints?",
        "question_hi": "Go जेनरिक कंस्ट्रेंट में '~' टोकन का उद्देश्य क्या है?",
        "options_en": ["Includes types with underlying type matching the constraint", "Excludes types", "For pointer types only", "For interface types only"],
        "options_hi": ["अंडरलाइंग टाइप मैच करने वाले टाइप को इन्क्लूड करता है", "टाइप को एक्सक्लूड करता है", "केवल पॉइंटर टाइप के लिए", "केवल इंटरफेस टाइप के लिए"],
        "answer_en": "Includes types with underlying type matching the constraint",
        "answer_hi": "अंडरलाइंग टाइप मैच करने वाले टाइप को इन्क्लूड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How to implement a lock-free linked list using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री लिंक्ड लिस्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.CompareAndSwapPointer for node insertion/deletion", "Use channels", "Use mutexes", "Use sync.Map"],
        "options_hi": ["नोड इंसर्शन/डिलीशन के लिए atomic.CompareAndSwapPointer का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "sync.Map का उपयोग करें"],
        "answer_en": "Use atomic.CompareAndSwapPointer for node insertion/deletion",
        "answer_hi": "नोड इंसर्शन/डिलीशन के लिए atomic.CompareAndSwapPointer का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the difference between sync.Cond and channel-based signaling?",
        "question_hi": "sync.Cond और चैनल-बेस्ड सिग्नलिंग में क्या अंतर है?",
        "options_en": ["sync.Cond is for multiple goroutines, channels are for point-to-point", "No difference", "Channels are faster", "sync.Cond is deprecated"],
        "options_hi": ["sync.Cond मल्टीपल गोरूटीन के लिए है, चैनल पॉइंट-टू-पॉइंट के लिए हैं", "कोई अंतर नहीं", "चैनल तेज हैं", "sync.Cond डिप्रिकेटेड है"],
        "answer_en": "sync.Cond is for multiple goroutines, channels are for point-to-point",
        "answer_hi": "sync.Cond मल्टीपल गोरूटीन के लिए है, चैनल पॉइंट-टू-पॉइंट के लिए हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How to implement a custom HTTP/2 server with push promises in Go?",
        "question_hi": "Go में पुश प्रोमिस के साथ कस्टम HTTP/2 सर्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use http.Pusher interface in HTTP handler", "Use http.Server directly", "Use net/http package only", "Use third-party libraries"],
        "options_hi": ["HTTP हैंडलर में http.Pusher इंटरफेस का उपयोग करें", "सीधे http.Server का उपयोग करें", "केवल net/http पैकेज का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Use http.Pusher interface in HTTP handler",
        "answer_hi": "HTTP हैंडलर में http.Pusher इंटरफेस का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of runtime.LockOSThread in GUI applications?",
        "question_hi": "GUI एप्लिकेशन में runtime.LockOSThread का उद्देश्य क्या है?",
        "options_en": ["Ensures GUI operations run on main thread", "Locks memory", "Stops thread scheduling", "Increases performance"],
        "options_hi": ["यह सुनिश्चित करता है कि GUI ऑपरेशन मेन थ्रेड पर रन करें", "मेमोरी लॉक करता है", "थ्रेड शेड्यूलिंग रोकता है", "परफॉर्मेंस बढ़ाता है"],
        "answer_en": "Ensures GUI operations run on main thread",
        "answer_hi": "यह सुनिश्चित करता है कि GUI ऑपरेशन मेन थ्रेड पर रन करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How to implement a distributed lock using etcd in Go?",
        "question_hi": "Go में etcd का उपयोग करके डिस्ट्रीब्यूटेड लॉक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use etcd lease API with compare-and-swap operations", "Use database locks", "Use file locks", "Use Redis only"],
        "options_hi": ["कम्पेयर-एंड-स्वैप ऑपरेशन के साथ etcd लीज API का उपयोग करें", "डेटाबेस लॉक का उपयोग करें", "फाइल लॉक का उपयोग करें", "केवल Redis का उपयोग करें"],
        "answer_en": "Use etcd lease API with compare-and-swap operations",
        "answer_hi": "कम्पेयर-एंड-स्वैप ऑपरेशन के साथ etcd लीज API का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the difference between type erasure and reification in Go generics?",
        "question_hi": "Go जेनरिक्स में टाइप इरेज़र और रिफिकेशन में क्या अंतर है?",
        "options_en": ["Go uses monomorphization (reification), not type erasure", "No difference", "Go uses type erasure", "Both are supported"],
        "options_hi": ["Go मोनोमोर्फाइज़ेशन (रिफिकेशन) का उपयोग करता है, टाइप इरेज़र नहीं", "कोई अंतर नहीं", "Go टाइप इरेज़र का उपयोग करता है", "दोनों सपोर्टेड हैं"],
        "answer_en": "Go uses monomorphization (reification), not type erasure",
        "answer_hi": "Go मोनोमोर्फाइज़ेशन (रिफिकेशन) का उपयोग करता है, टाइप इरेज़र नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How to implement a custom DNS load balancer in Go?",
        "question_hi": "Go में कस्टम DNS लोड बैलेंसर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement net.Resolver with health checks and round-robin", "Use net.LookupHost only", "Use external DNS only", "Use database queries"],
        "options_hi": ["हेल्थ चेक और राउंड-रॉबिन के साथ net.Resolver इम्प्लीमेंट करें", "केवल net.LookupHost का उपयोग करें", "केवल एक्सटर्नल DNS का उपयोग करें", "डेटाबेस क्वेरी का उपयोग करें"],
        "answer_en": "Implement net.Resolver with health checks and round-robin",
        "answer_hi": "हेल्थ चेक और राउंड-रॉबिन के साथ net.Resolver इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'go:noescape' compiler directive?",
        "question_hi": "'go:noescape' कम्पाइलर डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Prevents pointer parameters from escaping to heap", "Prevents function escaping", "Prevents variable escaping", "Prevents memory allocation"],
        "options_hi": ["पॉइंटर पैरामीटर को हीप पर एस्केप होने से रोकता है", "फंक्शन एस्केपिंग को रोकता है", "वेरिएबल एस्केपिंग को रोकता है", "मेमोरी अलोकेशन को रोकता है"],
        "answer_en": "Prevents pointer parameters from escaping to heap",
        "answer_hi": "पॉइंटर पैरामीटर को हीप पर एस्केप होने से रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How to implement a lock-free stack using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री स्टैक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.CompareAndSwapPointer for push/pop operations", "Use channels", "Use mutexes", "Use sync.Map"],
        "options_hi": ["पुश/पॉप ऑपरेशन के लिए atomic.CompareAndSwapPointer का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "sync.Map का उपयोग करें"],
        "answer_en": "Use atomic.CompareAndSwapPointer for push/pop operations",
        "answer_hi": "पुश/पॉप ऑपरेशन के लिए atomic.CompareAndSwapPointer का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the difference between batching and streaming in Go HTTP handlers?",
        "question_hi": "Go HTTP हैंडलर में बैचिंग और स्ट्रीमिंग में क्या अंतर है?",
        "options_en": ["Batching processes data in chunks, streaming processes continuously", "No difference", "Streaming is faster", "Batching is deprecated"],
        "options_hi": ["बैचिंग डेटा को चंक में प्रोसेस करती है, स्ट्रीमिंग लगातार प्रोसेस करती है", "कोई अंतर नहीं", "स्ट्रीमिंग तेज है", "बैचिंग डिप्रिकेटेड है"],
        "answer_en": "Batching processes data in chunks, streaming processes continuously",
        "answer_hi": "बैचिंग डेटा को चंक में प्रोसेस करती है, स्ट्रीमिंग लगातार प्रोसेस करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How to implement a custom JSON encoder with field filtering?",
        "question_hi": "फील्ड फिल्टरिंग के साथ कस्टम JSON एनकोडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement json.Marshaler with custom field selection logic", "Use struct tags only", "Use reflection only", "Use third-party libraries"],
        "options_hi": ["कस्टम फील्ड सिलेक्शन लॉजिक के साथ json.Marshaler इम्प्लीमेंट करें", "केवल स्ट्रक्चर टैग का उपयोग करें", "केवल रिफ्लेक्शन का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Implement json.Marshaler with custom field selection logic",
        "answer_hi": "कस्टम फील्ड सिलेक्शन लॉजिक के साथ json.Marshaler इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the 'unsafe.Alignof' function?",
        "question_hi": "'unsafe.Alignof' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Returns the alignment requirement of a type", "Returns memory address", "Returns type size", "Returns pointer value"],
        "options_hi": ["टाइप की अलाइनमेंट रिक्वायरमेंट रिटर्न करता है", "मेमोरी एड्रेस रिटर्न करता है", "टाइप साइज रिटर्न करता है", "पॉइंटर वैल्यू रिटर्न करता है"],
        "answer_en": "Returns the alignment requirement of a type",
        "answer_hi": "टाइप की अलाइनमेंट रिक्वायरमेंट रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How to implement a distributed transaction coordinator in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड ट्रांजैक्शन कोऑर्डिनेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use two-phase commit protocol with saga pattern", "Use database transactions only", "Use message queues only", "Use file system"],
        "options_hi": ["सागा पैटर्न के साथ टू-फेज कमिट प्रोटोकॉल का उपयोग करें", "केवल डेटाबेस ट्रांजैक्शन का उपयोग करें", "केवल मैसेज क्यू का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use two-phase commit protocol with saga pattern",
        "answer_hi": "सागा पैटर्न के साथ टू-फेज कमिट प्रोटोकॉल का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the difference between sync.Pool and manual object pooling?",
        "question_hi": "sync.Pool और मैनुअल ऑब्जेक्ट पूलिंग में क्या अंतर है?",
        "options_en": ["sync.Pool is GC-aware and automatically managed", "No difference", "Manual pooling is faster", "sync.Pool is deprecated"],
        "options_hi": ["sync.Pool GC-अवेयर है और ऑटोमैटिकली मैनेज्ड है", "कोई अंतर नहीं", "मैनुअल पूलिंग तेज है", "sync.Pool डिप्रिकेटेड है"],
        "answer_en": "sync.Pool is GC-aware and automatically managed",
        "answer_hi": "sync.Pool GC-अवेयर है और ऑटोमैटिकली मैनेज्ड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How to implement a custom protocol buffer codec in Go?",
        "question_hi": "Go में कस्टम प्रोटोकॉल बफर कोडेक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement encoding.BinaryMarshaler and BinaryUnmarshaler", "Use protobuf package only", "Use JSON only", "Use XML only"],
        "options_hi": ["encoding.BinaryMarshaler और BinaryUnmarshaler इम्प्लीमेंट करें", "केवल protobuf पैकेज का उपयोग करें", "केवल JSON का उपयोग करें", "केवल XML का उपयोग करें"],
        "answer_en": "Implement encoding.BinaryMarshaler and BinaryUnmarshaler",
        "answer_hi": "encoding.BinaryMarshaler और BinaryUnmarshaler इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'go:uintptrescapes' directive?",
        "question_hi": "'go:uintptrescapes' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Marks uintptr parameters as escaping for cgo safety", "Prevents uintptr escaping", "Converts uintptr to pointer", "Allocates uintptr memory"],
        "options_hi": ["cgo सेफ्टी के लिए uintptr पैरामीटर को एस्केपिंग के रूप में मार्क करता है", "uintptr एस्केपिंग को रोकता है", "uintptr को पॉइंटर में कन्वर्ट करता है", "uintptr मेमोरी अलोकेट करता है"],
        "answer_en": "Marks uintptr parameters as escaping for cgo safety",
        "answer_hi": "cgo सेफ्टी के लिए uintptr पैरामीटर को एस्केपिंग के रूप में मार्क करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How to implement a lock-free hash map using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री हैश मैप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.CompareAndSwapPointer for bucket operations", "Use channels", "Use mutexes", "Use sync.Map only"],
        "options_hi": ["बकेट ऑपरेशन के लिए atomic.CompareAndSwapPointer का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "केवल sync.Map का उपयोग करें"],
        "answer_en": "Use atomic.CompareAndSwapPointer for bucket operations",
        "answer_hi": "बकेट ऑपरेशन के लिए atomic.CompareAndSwapPointer का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the difference between monomorphization and boxing in generics?",
        "question_hi": "जेनरिक्स में मोनोमोर्फाइज़ेशन और बॉक्सिंग में क्या अंतर है?",
        "options_en": ["Monomorphization creates specialized code, boxing uses wrappers", "No difference", "Boxing is faster", "Monomorphization is deprecated"],
        "options_hi": ["मोनोमोर्फाइज़ेशन स्पेशलाइज्ड कोड बनाता है, बॉक्सिंग रैपर का उपयोग करती है", "कोई अंतर नहीं", "बॉक्सिंग तेज है", "मोनोमोर्फाइज़ेशन डिप्रिकेटेड है"],
        "answer_en": "Monomorphization creates specialized code, boxing uses wrappers",
        "answer_hi": "मोनोमोर्फाइज़ेशन स्पेशलाइज्ड कोड बनाता है, बॉक्सिंग रैपर का उपयोग करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How to implement a custom gRPC interceptor for authentication?",
        "question_hi": "ऑथेंटिकेशन के लिए कस्टम gRPC इंटरसेप्टर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement grpc.UnaryServerInterceptor and grpc.StreamServerInterceptor", "Use gRPC package only", "Use HTTP middleware", "Use database queries"],
        "options_hi": ["grpc.UnaryServerInterceptor और grpc.StreamServerInterceptor इम्प्लीमेंट करें", "केवल gRPC पैकेज का उपयोग करें", "HTTP मिडलवेयर का उपयोग करें", "डेटाबेस क्वेरी का उपयोग करें"],
        "answer_en": "Implement grpc.UnaryServerInterceptor and grpc.StreamServerInterceptor",
        "answer_hi": "grpc.UnaryServerInterceptor और grpc.StreamServerInterceptor इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'runtime.SetMutexProfileFraction' function?",
        "question_hi": "'runtime.SetMutexProfileFraction' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Controls fraction of mutex contention events that are profiled", "Sets mutex count", "Controls mutex allocation", "Sets mutex size"],
        "options_hi": ["प्रोफाइल किए जाने वाले म्यूटेक्स कॉन्टेंशन इवेंट के फ्रैक्शन को कंट्रोल करता है", "म्यूटेक्स काउंट सेट करता है", "म्यूटेक्स अलोकेशन कंट्रोल करता है", "म्यूटेक्स साइज सेट करता है"],
        "answer_en": "Controls fraction of mutex contention events that are profiled",
        "answer_hi": "प्रोफाइल किए जाने वाले म्यूटेक्स कॉन्टेंशन इवेंट के फ्रैक्शन को कंट्रोल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How to implement a distributed cache with consistency guarantees in Go?",
        "question_hi": "Go में कंसिस्टेंसी गारंटी के साथ डिस्ट्रीब्यूटेड कैश कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use consensus algorithm like Raft with cache replication", "Use local cache only", "Use database only", "Use file system"],
        "options_hi": ["कैश रेप्लिकेशन के साथ Raft जैसे कंसेंसस एल्गोरिदम का उपयोग करें", "केवल लोकल कैश का उपयोग करें", "केवल डेटाबेस का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use consensus algorithm like Raft with cache replication",
        "answer_hi": "कैश रेप्लिकेशन के साथ Raft जैसे कंसेंसस एल्गोरिदम का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the difference between interface conversion and type assertion performance?",
        "question_hi": "इंटरफेस कन्वर्जन और टाइप असर्शन परफॉर्मेंस में क्या अंतर है?",
        "options_en": ["Type assertion is faster, conversion may allocate", "No difference", "Conversion is faster", "Both are same speed"],
        "options_hi": ["टाइप असर्शन तेज है, कन्वर्जन अलोकेट कर सकता है", "कोई अंतर नहीं", "कन्वर्जन तेज है", "दोनों समान स्पीड के हैं"],
        "answer_en": "Type assertion is faster, conversion may allocate",
        "answer_hi": "टाइप असर्शन तेज है, कन्वर्जन अलोकेट कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How to implement a custom WebSocket protocol handler in Go?",
        "question_hi": "Go में कस्टम WebSocket प्रोटोकॉल हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement net.Listener and net.Conn for custom protocol", "Use gorilla/websocket only", "Use net/http only", "Use third-party libraries"],
        "options_hi": ["कस्टम प्रोटोकॉल के लिए net.Listener और net.Conn इम्प्लीमेंट करें", "केवल gorilla/websocket का उपयोग करें", "केवल net/http का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Implement net.Listener and net.Conn for custom protocol",
        "answer_hi": "कस्टम प्रोटोकॉल के लिए net.Listener और net.Conn इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'go:systemstack' directive?",
        "question_hi": "'go:systemstack' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Runs function on system stack instead of goroutine stack", "Runs function on OS stack", "Allocates system memory", "Runs system calls"],
        "options_hi": ["फंक्शन को गोरूटीन स्टैक के बजाय सिस्टम स्टैक पर रन करता है", "फंक्शन को OS स्टैक पर रन करता है", "सिस्टम मेमोरी अलोकेट करता है", "सिस्टम कॉल रन करता है"],
        "answer_en": "Runs function on system stack instead of goroutine stack",
        "answer_hi": "फंक्शन को गोरूटीन स्टैक के बजाय सिस्टम स्टैक पर रन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How to implement a lock-free queue using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.CompareAndSwapPointer for enqueue/dequeue", "Use channels", "Use mutexes", "Use sync.Map"],
        "options_hi": ["एनक्यू/डिक्यू के लिए atomic.CompareAndSwapPointer का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "sync.Map का उपयोग करें"],
        "answer_en": "Use atomic.CompareAndSwapPointer for enqueue/dequeue",
        "answer_hi": "एनक्यू/डिक्यू के लिए atomic.CompareAndSwapPointer का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the difference between compile-time and runtime generic specialization?",
        "question_hi": "कम्पाइल-टाइम और रनटाइम जेनरिक स्पेशलाइज़ेशन में क्या अंतर है?",
        "options_en": ["Go uses compile-time specialization through monomorphization", "No difference", "Go uses runtime specialization", "Both are supported"],
        "options_hi": ["Go मोनोमोर्फाइज़ेशन के through कम्पाइल-टाइम स्पेशलाइज़ेशन का उपयोग करता है", "कोई अंतर नहीं", "Go रनटाइम स्पेशलाइज़ेशन का उपयोग करता है", "दोनों सपोर्टेड हैं"],
        "answer_en": "Go uses compile-time specialization through monomorphization",
        "answer_hi": "Go मोनोमोर्फाइज़ेशन के through कम्पाइल-टाइम स्पेशलाइज़ेशन का उपयोग करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How to implement a custom HTTP/3 server in Go?",
        "question_hi": "Go में कस्टम HTTP/3 सर्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use quic-go library with http.Server", "Use net/http only", "Use net package only", "Use third-party HTTP servers"],
        "options_hi": ["http.Server के साथ quic-go लाइब्रेरी का उपयोग करें", "केवल net/http का उपयोग करें", "केवल net पैकेज का उपयोग करें", "थर्ड-पार्टी HTTP सर्वर का उपयोग करें"],
        "answer_en": "Use quic-go library with http.Server",
        "answer_hi": "http.Server के साथ quic-go लाइब्रेरी का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'runtime.FuncForPC' function in debugging?",
        "question_hi": "डिबगिंग में 'runtime.FuncForPC' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Gets function information from program counter for stack traces", "Gets CPU information", "Gets memory information", "Gets GC information"],
        "options_hi": ["स्टैक ट्रेस के लिए प्रोग्राम काउंटर से फंक्शन इनफार्मेशन प्राप्त करता है", "CPU इनफार्मेशन प्राप्त करता है", "मेमोरी इनफार्मेशन प्राप्त करता है", "GC इनफार्मेशन प्राप्त करता है"],
        "answer_en": "Gets function information from program counter for stack traces",
        "answer_hi": "स्टैक ट्रेस के लिए प्रोग्राम काउंटर से फंक्शन इनफार्मेशन प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How to implement a distributed message queue with exactly-once delivery?",
        "question_hi": "एग्जैक्टली-वन्स डिलीवरी के साथ डिस्ट्रीब्यूटेड मैसेज क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use idempotent consumers with deduplication and transactions", "Use local queues only", "Use database tables", "Use file system"],
        "options_hi": ["डीडुप्लिकेशन और ट्रांजैक्शन के साथ इडेम्पोटेंट कंज्यूमर का उपयोग करें", "केवल लोकल क्यू का उपयोग करें", "डेटाबेस टेबल का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use idempotent consumers with deduplication and transactions",
        "answer_hi": "डीडुप्लिकेशन और ट्रांजैक्शन के साथ इडेम्पोटेंट कंज्यूमर का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the difference between sync.RWMutex and atomic.Value for read-mostly data?",
        "question_hi": "रीड-मोस्टली डेटा के लिए sync.RWMutex और atomic.Value में क्या अंतर है?",
        "options_en": ["atomic.Value is lock-free for reads, RWMutex has reader locks", "No difference", "RWMutex is faster", "atomic.Value is deprecated"],
        "options_hi": ["atomic.Value रीड के लिए लॉक-फ्री है, RWMutex में रीडर लॉक हैं", "कोई अंतर नहीं", "RWMutex तेज है", "atomic.Value डिप्रिकेटेड है"],
        "answer_en": "atomic.Value is lock-free for reads, RWMutex has reader locks",
        "answer_hi": "atomic.Value रीड के लिए लॉक-फ्री है, RWMutex में रीडर लॉक हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How to implement a custom TLS handshake handler in Go?",
        "question_hi": "Go में कस्टम TLS हैंडशेक हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement crypto/tls.Config with GetConfigForClient", "Use tls package only", "Use net package only", "Use third-party libraries"],
        "options_hi": ["GetConfigForClient के साथ crypto/tls.Config इम्प्लीमेंट करें", "केवल tls पैकेज का उपयोग करें", "केवल net पैकेज का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Implement crypto/tls.Config with GetConfigForClient",
        "answer_hi": "GetConfigForClient के साथ crypto/tls.Config इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'go:nowritebarrierrec' directive?",
        "question_hi": "'go:nowritebarrierrec' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Prevents write barriers in recursive functions", "Enables write barriers", "Disables GC", "Enables memory allocation"],
        "options_hi": ["रिकर्सिव फंक्शन में राइट बैरियर को रोकता है", "राइट बैरियर एनेबल करता है", "GC डिसेबल करता है", "मेमोरी अलोकेशन एनेबल करता है"],
        "answer_en": "Prevents write barriers in recursive functions",
        "answer_hi": "रिकर्सिव फंक्शन में राइट बैरियर को रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How to implement a lock-free skip list using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री स्किप लिस्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.CompareAndSwapPointer for node level updates", "Use channels", "Use mutexes", "Use sync.Map"],
        "options_hi": ["नोड लेवल अपडेट के लिए atomic.CompareAndSwapPointer का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "sync.Map का उपयोग करें"],
        "answer_en": "Use atomic.CompareAndSwapPointer for node level updates",
        "answer_hi": "नोड लेवल अपडेट के लिए atomic.CompareAndSwapPointer का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the difference between interface method sets and generic type sets?",
        "question_hi": "इंटरफेस मेथड सेट और जेनरिक टाइप सेट में क्या अंतर है?",
        "options_en": ["Method sets define behavior, type sets define allowable types", "No difference", "Method sets are for generics only", "Type sets are deprecated"],
        "options_hi": ["मेथड सेट बिहेवियर डिफाइन करते हैं, टाइप सेट अलाउएबल टाइप डिफाइन करते हैं", "कोई अंतर नहीं", "मेथड सेट केवल जेनरिक्स के लिए हैं", "टाइप सेट डिप्रिकेटेड हैं"],
        "answer_en": "Method sets define behavior, type sets define allowable types",
        "answer_hi": "मेथड सेट बिहेवियर डिफाइन करते हैं, टाइप सेट अलाउएबल टाइप डिफाइन करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How to implement a custom gRPC balancer in Go?",
        "question_hi": "Go में कस्टम gRPC बैलेंसर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement grpc.Balancer and grpc.Picker interfaces", "Use gRPC package only", "Use HTTP load balancer", "Use database queries"],
        "options_hi": ["grpc.Balancer और grpc.Picker इंटरफेस इम्प्लीमेंट करें", "केवल gRPC पैकेज का उपयोग करें", "HTTP लोड बैलेंसर का उपयोग करें", "डेटाबेस क्वेरी का उपयोग करें"],
        "answer_en": "Implement grpc.Balancer and grpc.Picker interfaces",
        "answer_hi": "grpc.Balancer और grpc.Picker इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'runtime.ReadMemStats' function in monitoring?",
        "question_hi": "मॉनिटरिंग में 'runtime.ReadMemStats' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Provides detailed memory allocation and GC statistics", "Provides CPU statistics", "Provides goroutine statistics", "Provides network statistics"],
        "options_hi": ["डिटेल्ड मेमोरी अलोकेशन और GC स्टैटिस्टिक्स प्रदान करता है", "CPU स्टैटिस्टिक्स प्रदान करता है", "गोरूटीन स्टैटिस्टिक्स प्रदान करता है", "नेटवर्क स्टैटिस्टिक्स प्रदान करता है"],
        "answer_en": "Provides detailed memory allocation and GC statistics",
        "answer_hi": "डिटेल्ड मेमोरी अलोकेशन और GC स्टैटिस्टिक्स प्रदान करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How to implement a distributed key-value store with sharding in Go?",
        "question_hi": "Go में शार्डिंग के साथ डिस्ट्रीब्यूटेड की-वैल्यू स्टोर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use consistent hashing with replication and failure detection", "Use local maps only", "Use database only", "Use file system"],
        "options_hi": ["रेप्लिकेशन और फेल्योर डिटेक्शन के साथ कंसिस्टेंट हैशिंग का उपयोग करें", "केवल लोकल मैप का उपयोग करें", "केवल डेटाबेस का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use consistent hashing with replication and failure detection",
        "answer_hi": "रेप्लिकेशन और फेल्योर डिटेक्शन के साथ कंसिस्टेंट हैशिंग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the difference between escape analysis and stack allocation optimization?",
        "question_hi": "एस्केप एनालिसिस और स्टैक अलोकेशन ऑप्टिमाइज़ेशन में क्या अंतर है?",
        "options_en": ["Escape analysis determines heap allocation, stack allocation avoids it", "No difference", "Stack allocation is faster", "Escape analysis is deprecated"],
        "options_hi": ["एस्केप एनालिसिस हीप अलोकेशन निर्धारित करता है, स्टैक अलोकेशन उसे एवॉइड करता है", "कोई अंतर नहीं", "स्टैक अलोकेशन तेज है", "एस्केप एनालिसिस डिप्रिकेटेड है"],
        "answer_en": "Escape analysis determines heap allocation, stack allocation avoids it",
        "answer_hi": "एस्केप एनालिसिस हीप अलोकेशन निर्धारित करता है, स्टैक अलोकेशन उसे एवॉइड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How to implement a custom HTTP request multiplexer in Go?",
        "question_hi": "Go में कस्टम HTTP रिक्वेस्ट मल्टीप्लेक्सर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement http.Handler with custom routing logic", "Use http.ServeMux only", "Use net/http only", "Use third-party routers"],
        "options_hi": ["कस्टम रूटिंग लॉजिक के साथ http.Handler इम्प्लीमेंट करें", "केवल http.ServeMux का उपयोग करें", "केवल net/http का उपयोग करें", "थर्ड-पार्टी राउटर का उपयोग करें"],
        "answer_en": "Implement http.Handler with custom routing logic",
        "answer_hi": "कस्टम रूटिंग लॉजिक के साथ http.Handler इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'go:yeswritebarrierrec' directive?",
        "question_hi": "'go:yeswritebarrierrec' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Allows write barriers in recursive functions", "Prevents write barriers", "Disables GC", "Enables memory allocation"],
        "options_hi": ["रिकर्सिव फंक्शन में राइट बैरियर की अनुमति देता है", "राइट बैरियर को रोकता है", "GC डिसेबल करता है", "मेमोरी अलोकेशन एनेबल करता है"],
        "answer_en": "Allows write barriers in recursive functions",
        "answer_hi": "रिकर्सिव फंक्शन में राइट बैरियर की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How to implement a lock-free binary search tree using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री बाइनरी सर्च ट्री कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.CompareAndSwapPointer for tree rotations and updates", "Use channels", "Use mutexes", "Use sync.Map"],
        "options_hi": ["ट्री रोटेशन और अपडेट के लिए atomic.CompareAndSwapPointer का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "sync.Map का उपयोग करें"],
        "answer_en": "Use atomic.CompareAndSwapPointer for tree rotations and updates",
        "answer_hi": "ट्री रोटेशन और अपडेट के लिए atomic.CompareAndSwapPointer का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the difference between covariance and contravariance in Go generics?",
        "question_hi": "Go जेनरिक्स में कोवेरिएंस और कॉन्ट्रावेरिएंस में क्या अंतर है?",
        "options_en": ["Go doesn't support variance, types are invariant", "No difference", "Go supports covariance", "Go supports contravariance"],
        "options_hi": ["Go वेरिएंस सपोर्ट नहीं करता, टाइप इनवेरिएंट हैं", "कोई अंतर नहीं", "Go कोवेरिएंस सपोर्ट करता है", "Go कॉन्ट्रावेरिएंस सपोर्ट करता है"],
        "answer_en": "Go doesn't support variance, types are invariant",
        "answer_hi": "Go वेरिएंस सपोर्ट नहीं करता, टाइप इनवेरिएंट हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How to implement a custom gRPC resolver in Go?",
        "question_hi": "Go में कस्टम gRPC रिजॉल्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement grpc.Resolver and grpc.ResolverBuilder interfaces", "Use gRPC package only", "Use DNS resolver only", "Use database queries"],
        "options_hi": ["grpc.Resolver और grpc.ResolverBuilder इंटरफेस इम्प्लीमेंट करें", "केवल gRPC पैकेज का उपयोग करें", "केवल DNS रिजॉल्वर का उपयोग करें", "डेटाबेस क्वेरी का उपयोग करें"],
        "answer_en": "Implement grpc.Resolver and grpc.ResolverBuilder interfaces",
        "answer_hi": "grpc.Resolver और grpc.ResolverBuilder इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'runtime.SetFinalizer' function in resource management?",
        "question_hi": "रिसोर्स मैनेजमेंट में 'runtime.SetFinalizer' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Runs cleanup function when object is garbage collected", "Runs immediately", "Runs on program exit", "Runs on memory allocation"],
        "options_hi": ["ऑब्जेक्ट के गार्बेज कलेक्ट होने पर क्लीनअप फंक्शन रन करता है", "तुरंत रन करता है", "प्रोग्राम एक्जिट पर रन करता है", "मेमोरी अलोकेशन पर रन करता है"],
        "answer_en": "Runs cleanup function when object is garbage collected",
        "answer_hi": "ऑब्जेक्ट के गार्बेज कलेक्ट होने पर क्लीनअप फंक्शन रन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How to implement a distributed consensus algorithm like Paxos in Go?",
        "question_hi": "Go में Paxos जैसे डिस्ट्रीब्यूटेड कंसेंसस एल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement proposer, acceptor, and learner roles with RPC", "Use local consensus only", "Use database transactions", "Use file system"],
        "options_hi": ["RPC के साथ प्रपोजर, एक्सेप्टर और लर्नर रोल इम्प्लीमेंट करें", "केवल लोकल कंसेंसस का उपयोग करें", "डेटाबेस ट्रांजैक्शन का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Implement proposer, acceptor, and learner roles with RPC",
        "answer_hi": "RPC के साथ प्रपोजर, एक्सेप्टर और लर्नर रोल इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the difference between interface method calls and direct method calls?",
        "question_hi": "इंटरफेस मेथड कॉल और डायरेक्ट मेथड कॉल में क्या अंतर है?",
        "options_en": ["Interface calls have indirection overhead, direct calls are faster", "No difference", "Interface calls are faster", "Direct calls are deprecated"],
        "options_hi": ["इंटरफेस कॉल में इंडायरेक्शन ओवरहेड होता है, डायरेक्ट कॉल तेज होते हैं", "कोई अंतर नहीं", "इंटरफेस कॉल तेज होते हैं", "डायरेक्ट कॉल डिप्रिकेटेड हैं"],
        "answer_en": "Interface calls have indirection overhead, direct calls are faster",
        "answer_hi": "इंटरफेस कॉल में इंडायरेक्शन ओवरहेड होता है, डायरेक्ट कॉल तेज होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How to implement a custom HTTP response writer with buffering?",
        "question_hi": "बफरिंग के साथ कस्टम HTTP रिस्पॉन्स राइटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Embed http.ResponseWriter and add buffer with Flush method", "Use http.ResponseWriter directly", "Use net/http only", "Use third-party libraries"],
        "options_hi": ["http.ResponseWriter एम्बेड करें और Flush मेथड के साथ बफर ऐड करें", "सीधे http.ResponseWriter का उपयोग करें", "केवल net/http का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Embed http.ResponseWriter and add buffer with Flush method",
        "answer_hi": "http.ResponseWriter एम्बेड करें और Flush मेथड के साथ बफर ऐड करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'go:norace' directive?",
        "question_hi": "'go:norace' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Disables race detection for specific functions", "Enables race detection", "Disables GC", "Enables memory allocation"],
        "options_hi": ["स्पेसिफिक फंक्शन के लिए रेस डिटेक्शन डिसेबल करता है", "रेस डिटेक्शन एनेबल करता है", "GC डिसेबल करता है", "मेमोरी अलोकेशन एनेबल करता है"],
        "answer_en": "Disables race detection for specific functions",
        "answer_hi": "स्पेसिफिक फंक्शन के लिए रेस डिटेक्शन डिसेबल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How to implement a lock-free memory allocator in Go?",
        "question_hi": "Go में लॉक-फ्री मेमोरी अलोकेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic operations for free list management with sync.Pool", "Use malloc only", "Use GC only", "Use system allocator"],
        "options_hi": ["sync.Pool के साथ फ्री लिस्ट मैनेजमेंट के लिए एटॉमिक ऑपरेशन का उपयोग करें", "केवल malloc का उपयोग करें", "केवल GC का उपयोग करें", "सिस्टम अलोकेटर का उपयोग करें"],
        "answer_en": "Use atomic operations for free list management with sync.Pool",
        "answer_hi": "sync.Pool के साथ फ्री लिस्ट मैनेजमेंट के लिए एटॉमिक ऑपरेशन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the difference between generic function instantiation and specialization?",
        "question_hi": "जेनरिक फंक्शन इंस्टेंटिएशन और स्पेशलाइज़ेशन में क्या अंतर है?",
        "options_en": ["Instantiation creates concrete functions, specialization optimizes them", "No difference", "Specialization is for interfaces only", "Instantiation is deprecated"],
        "options_hi": ["इंस्टेंटिएशन कंक्रीट फंक्शन बनाता है, स्पेशलाइज़ेशन उन्हें ऑप्टिमाइज़ करता है", "कोई अंतर नहीं", "स्पेशलाइज़ेशन केवल इंटरफेस के लिए है", "इंस्टेंटिएशन डिप्रिकेटेड है"],
        "answer_en": "Instantiation creates concrete functions, specialization optimizes them",
        "answer_hi": "इंस्टेंटिएशन कंक्रीट फंक्शन बनाता है, स्पेशलाइज़ेशन उन्हें ऑप्टिमाइज़ करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How to implement a custom HTTP/2 frame handler in Go?",
        "question_hi": "Go में कस्टम HTTP/2 फ्रेम हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement http2.FrameHandler interface with custom frame processing", "Use http2 package only", "Use net/http only", "Use third-party libraries"],
        "options_hi": ["कस्टम फ्रेम प्रोसेसिंग के साथ http2.FrameHandler इंटरफेस इम्प्लीमेंट करें", "केवल http2 पैकेज का उपयोग करें", "केवल net/http का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Implement http2.FrameHandler interface with custom frame processing",
        "answer_hi": "कस्टम फ्रेम प्रोसेसिंग के साथ http2.FrameHandler इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'runtime.CallersFrames' function in stack trace analysis?",
        "question_hi": "स्टैक ट्रेस एनालिसिस में 'runtime.CallersFrames' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Converts program counters to readable frame information", "Gets CPU information", "Gets memory information", "Gets GC information"],
        "options_hi": ["प्रोग्राम काउंटर को रीडेबल फ्रेम इनफार्मेशन में कन्वर्ट करता है", "CPU इनफार्मेशन प्राप्त करता है", "मेमोरी इनफार्मेशन प्राप्त करता है", "GC इनफार्मेशन प्राप्त करता है"],
        "answer_en": "Converts program counters to readable frame information",
        "answer_hi": "प्रोग्राम काउंटर को रीडेबल फ्रेम इनफार्मेशन में कन्वर्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How to implement a distributed stream processing system in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड स्ट्रीम प्रोसेसिंग सिस्टम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use message queues with consumer groups and checkpointing", "Use local processing only", "Use database streams", "Use file system"],
        "options_hi": ["कंज्यूमर ग्रुप और चेकपॉइंटिंग के साथ मैसेज क्यू का उपयोग करें", "केवल लोकल प्रोसेसिंग का उपयोग करें", "डेटाबेस स्ट्रीम का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use message queues with consumer groups and checkpointing",
        "answer_hi": "कंज्यूमर ग्रुप और चेकपॉइंटिंग के साथ मैसेज क्यू का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the difference between sync.Map and concurrent map with sharding?",
        "question_hi": "sync.Map और शार्डिंग के साथ कंकरंट मैप में क्या अंतर है?",
        "options_en": ["Sharded map reduces lock contention, sync.Map uses type-safe interfaces", "No difference", "sync.Map is faster", "Sharded map is deprecated"],
        "options_hi": ["शार्डेड मैप लॉक कॉन्टेंशन कम करता है, sync.Map टाइप-सेफ इंटरफेस का उपयोग करता है", "कोई अंतर नहीं", "sync.Map तेज है", "शार्डेड मैप डिप्रिकेटेड है"],
        "answer_en": "Sharded map reduces lock contention, sync.Map uses type-safe interfaces",
        "answer_hi": "शार्डेड मैप लॉक कॉन्टेंशन कम करता है, sync.Map टाइप-सेफ इंटरफेस का उपयोग करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How to implement a custom TLS certificate manager in Go?",
        "question_hi": "Go में कस्टम TLS सर्टिफिकेट मैनेजर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement crypto/tls.Config with GetCertificate and GetClientCertificate", "Use tls package only", "Use net package only", "Use third-party libraries"],
        "options_hi": ["GetCertificate और GetClientCertificate के साथ crypto/tls.Config इम्प्लीमेंट करें", "केवल tls पैकेज का उपयोग करें", "केवल net पैकेज का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Implement crypto/tls.Config with GetCertificate and GetClientCertificate",
        "answer_hi": "GetCertificate और GetClientCertificate के साथ crypto/tls.Config इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'go:notinheap' directive?",
        "question_hi": "'go:notinheap' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Prevents type from being allocated on heap", "Forces heap allocation", "Disables GC", "Enables memory allocation"],
        "options_hi": ["टाइप को हीप पर अलोकेट होने से रोकता है", "हीप अलोकेशन फोर्स करता है", "GC डिसेबल करता है", "मेमोरी अलोकेशन एनेबल करता है"],
        "answer_en": "Prevents type from being allocated on heap",
        "answer_hi": "टाइप को हीप पर अलोकेट होने से रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How to implement a lock-free object pool using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री ऑब्जेक्ट पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.CompareAndSwapPointer for pool management", "Use sync.Pool only", "Use channels", "Use mutexes"],
        "options_hi": ["पूल मैनेजमेंट के लिए atomic.CompareAndSwapPointer का उपयोग करें", "केवल sync.Pool का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें"],
        "answer_en": "Use atomic.CompareAndSwapPointer for pool management",
        "answer_hi": "पूल मैनेजमेंट के लिए atomic.CompareAndSwapPointer का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the difference between generic type inference and explicit instantiation?",
        "question_hi": "जेनरिक टाइप इनफरेंस और एक्सप्लिसिट इंस्टेंटिएशन में क्या अंतर है?",
        "options_en": ["Inference deduces types, explicit instantiation specifies them", "No difference", "Inference is faster", "Explicit instantiation is deprecated"],
        "options_hi": ["इनफरेंस टाइप डिड्यूस करता है, एक्सप्लिसिट इंस्टेंटिएशन उन्हें स्पेसिफाई करता है", "कोई अंतर नहीं", "इनफरेंस तेज है", "एक्सप्लिसिट इंस्टेंटिएशन डिप्रिकेटेड है"],
        "answer_en": "Inference deduces types, explicit instantiation specifies them",
        "answer_hi": "इनफरेंस टाइप डिड्यूस करता है, एक्सप्लिसिट इंस्टेंटिएशन उन्हें स्पेसिफाई करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How to implement a custom gRPC codec in Go?",
        "question_hi": "Go में कस्टम gRPC कोडेक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement grpc.Codec interface with Marshal and Unmarshal methods", "Use gRPC package only", "Use protobuf only", "Use JSON only"],
        "options_hi": ["Marshal और Unmarshal मेथड के साथ grpc.Codec इंटरफेस इम्प्लीमेंट करें", "केवल gRPC पैकेज का उपयोग करें", "केवल protobuf का उपयोग करें", "केवल JSON का उपयोग करें"],
        "answer_en": "Implement grpc.Codec interface with Marshal and Unmarshal methods",
        "answer_hi": "Marshal और Unmarshal मेथड के साथ grpc.Codec इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'runtime.GOMAXPROCS' function in performance tuning?",
        "question_hi": "परफॉर्मेंस ट्यूनिंग में 'runtime.GOMAXPROCS' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Sets maximum number of CPUs that can execute simultaneously", "Sets goroutine limit", "Sets memory limit", "Sets GC frequency"],
        "options_hi": ["एक साथ execute हो सकने वाले CPU की अधिकतम संख्या सेट करता है", "गोरूटीन लिमिट सेट करता है", "मेमोरी लिमिट सेट करता है", "GC फ्रीक्वेंसी सेट करता है"],
        "answer_en": "Sets maximum number of CPUs that can execute simultaneously",
        "answer_hi": "एक साथ execute हो सकने वाले CPU की अधिकतम संख्या सेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How to implement a distributed task scheduler with fault tolerance in Go?",
        "question_hi": "Go में फॉल्ट टॉलरेंस के साथ डिस्ट्रीब्यूटेड टास्क शेड्यूलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use leader election with task queue and health checks", "Use local scheduler only", "Use database jobs", "Use file system"],
        "options_hi": ["टास्क क्यू और हेल्थ चेक के साथ लीडर इलेक्शन का उपयोग करें", "केवल लोकल शेड्यूलर का उपयोग करें", "डेटाबेस जॉब का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use leader election with task queue and health checks",
        "answer_hi": "टास्क क्यू और हेल्थ चेक के साथ लीडर इलेक्शन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the difference between interface method dispatch and generic function call?",
        "question_hi": "इंटरफेस मेथड डिस्पैच और जेनरिक फंक्शन कॉल में क्या अंतर है?",
        "options_en": ["Interface dispatch is runtime, generic calls are compile-time resolved", "No difference", "Generic calls are slower", "Interface dispatch is deprecated"],
        "options_hi": ["इंटरफेस डिस्पैच रनटाइम है, जेनरिक कॉल कम्पाइल-टाइम रिजॉल्व्ड हैं", "कोई अंतर नहीं", "जेनरिक कॉल स्लो हैं", "इंटरफेस डिस्पैच डिप्रिकेटेड है"],
        "answer_en": "Interface dispatch is runtime, generic calls are compile-time resolved",
        "answer_hi": "इंटरफेस डिस्पैच रनटाइम है, जेनरिक कॉल कम्पाइल-टाइम रिजॉल्व्ड हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How to implement a custom HTTP request context with deadlines?",
        "question_hi": "डेडलाइन के साथ कस्टम HTTP रिक्वेस्ट कॉन्टेक्स्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Wrap http.Request with context.WithTimeout and custom values", "Use http.Request directly", "Use net/http only", "Use third-party libraries"],
        "options_hi": ["context.WithTimeout और कस्टम वैल्यू के साथ http.Request रैप करें", "सीधे http.Request का उपयोग करें", "केवल net/http का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Wrap http.Request with context.WithTimeout and custom values",
        "answer_hi": "context.WithTimeout और कस्टम वैल्यू के साथ http.Request रैप करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'go:yesescape' directive?",
        "question_hi": "'go:yesescape' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Forces heap allocation for specific variables", "Prevents heap allocation", "Disables GC", "Enables memory allocation"],
        "options_hi": ["स्पेसिफिक वेरिएबल के लिए हीप अलोकेशन फोर्स करता है", "हीप अलोकेशन को रोकता है", "GC डिसेबल करता है", "मेमोरी अलोकेशन एनेबल करता है"],
        "answer_en": "Forces heap allocation for specific variables",
        "answer_hi": "स्पेसिफिक वेरिएबल के लिए हीप अलोकेशन फोर्स करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How to implement a lock-free reference counting system using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री रिफरेन्स काउंटिंग सिस्टम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.AddInt32/Int64 for reference count with CAS for cleanup", "Use channels", "Use mutexes", "Use sync.Map"],
        "options_hi": ["क्लीनअप के लिए CAS के साथ रिफरेन्स काउंट के लिए atomic.AddInt32/Int64 का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "sync.Map का उपयोग करें"],
        "answer_en": "Use atomic.AddInt32/Int64 for reference count with CAS for cleanup",
        "answer_hi": "क्लीनअप के लिए CAS के साथ रिफरेन्स काउंट के लिए atomic.AddInt32/Int64 का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the difference between generic type constraints and interface constraints?",
        "question_hi": "जेनरिक टाइप कंस्ट्रेंट और इंटरफेस कंस्ट्रेंट में क्या अंतर है?",
        "options_en": ["Type constraints specify allowable types, interface constraints specify behavior", "No difference", "Interface constraints are for generics only", "Type constraints are deprecated"],
        "options_hi": ["टाइप कंस्ट्रेंट अलाउएबल टाइप स्पेसिफाई करते हैं, इंटरफेस कंस्ट्रेंट बिहेवियर स्पेसिफाई करते हैं", "कोई अंतर नहीं", "इंटरफेस कंस्ट्रेंट केवल जेनरिक्स के लिए हैं", "टाइप कंस्ट्रेंट डिप्रिकेटेड हैं"],
        "answer_en": "Type constraints specify allowable types, interface constraints specify behavior",
        "answer_hi": "टाइप कंस्ट्रेंट अलाउएबल टाइप स्पेसिफाई करते हैं, इंटरफेस कंस्ट्रेंट बिहेवियर स्पेसिफाई करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How to implement a custom gRPC transport in Go?",
        "question_hi": "Go में कस्टम gRPC ट्रांसपोर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement grpc.Transport interface with custom connection handling", "Use gRPC package only", "Use HTTP transport only", "Use third-party libraries"],
        "options_hi": ["कस्टम कनेक्शन हैंडलिंग के साथ grpc.Transport इंटरफेस इम्प्लीमेंट करें", "केवल gRPC पैकेज का उपयोग करें", "केवल HTTP ट्रांसपोर्ट का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Implement grpc.Transport interface with custom connection handling",
        "answer_hi": "कस्टम कनेक्शन हैंडलिंग के साथ grpc.Transport इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'runtime.NumCPU' function in concurrency optimization?",
        "question_hi": "कंकरंसी ऑप्टिमाइज़ेशन में 'runtime.NumCPU' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Returns number of logical CPUs for workload distribution", "Returns goroutine count", "Returns memory usage", "Returns GC statistics"],
        "options_hi": ["वर्कलोड डिस्ट्रीब्यूशन के लिए लॉजिकल CPU की संख्या रिटर्न करता है", "गोरूटीन काउंट रिटर्न करता है", "मेमोरी यूसेज रिटर्न करता है", "GC स्टैटिस्टिक्स रिटर्न करता है"],
        "answer_en": "Returns number of logical CPUs for workload distribution",
        "answer_hi": "वर्कलोड डिस्ट्रीब्यूशन के लिए लॉजिकल CPU की संख्या रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How to implement a distributed configuration management system in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड कॉन्फिगरेशन मैनेजमेंट सिस्टम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use consensus algorithm with versioned configuration and watches", "Use local config only", "Use database config", "Use file system"],
        "options_hi": ["वर्जन कॉन्फिगरेशन और वॉच के साथ कंसेंसस एल्गोरिदम का उपयोग करें", "केवल लोकल कॉन्फिग का उपयोग करें", "डेटाबेस कॉन्फिग का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use consensus algorithm with versioned configuration and watches",
        "answer_hi": "वर्जन कॉन्फिगरेशन और वॉच के साथ कंसेंसस एल्गोरिदम का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the difference between sync.Once and init() function for initialization?",
        "question_hi": "इनिशियलाइज़ेशन के लिए sync.Once और init() फंक्शन में क्या अंतर है?",
        "options_en": ["sync.Once is for runtime initialization, init() is for package initialization", "No difference", "init() is faster", "sync.Once is deprecated"],
        "options_hi": ["sync.Once रनटाइम इनिशियलाइज़ेशन के लिए है, init() पैकेज इनिशियलाइज़ेशन के लिए है", "कोई अंतर नहीं", "init() तेज है", "sync.Once डिप्रिकेटेड है"],
        "answer_en": "sync.Once is for runtime initialization, init() is for package initialization",
        "answer_hi": "sync.Once रनटाइम इनिशियलाइज़ेशन के लिए है, init() पैकेज इनिशियलाइज़ेशन के लिए है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How to implement a custom HTTP cookie serializer in Go?",
        "question_hi": "Go में कस्टम HTTP कुकी सीरियलाइज़र कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement http.CookieJar with custom serialization logic", "Use http.Cookie only", "Use net/http only", "Use third-party libraries"],
        "options_hi": ["कस्टम सीरियलाइज़ेशन लॉजिक के साथ http.CookieJar इम्प्लीमेंट करें", "केवल http.Cookie का उपयोग करें", "केवल net/http का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Implement http.CookieJar with custom serialization logic",
        "answer_hi": "कस्टम सीरियलाइज़ेशन लॉजिक के साथ http.CookieJar इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'go:uintptrkeepalive' directive?",
        "question_hi": "'go:uintptrkeepalive' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Prevents garbage collection of uintptr-referenced objects", "Enables GC", "Disables memory allocation", "Forces heap allocation"],
        "options_hi": ["uintptr-रिफरेन्स्ड ऑब्जेक्ट के गार्बेज कलेक्शन को रोकता है", "GC एनेबल करता है", "मेमोरी अलोकेशन डिसेबल करता है", "हीप अलोकेशन फोर्स करता है"],
        "answer_en": "Prevents garbage collection of uintptr-referenced objects",
        "answer_hi": "uintptr-रिफरेन्स्ड ऑब्जेक्ट के गार्बेज कलेक्शन को रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How to implement a lock-free work stealing deque using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री वर्क स्टीलिंग डेक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic operations for circular buffer with work stealing protocol", "Use channels", "Use mutexes", "Use sync.Map"],
        "options_hi": ["वर्क स्टीलिंग प्रोटोकॉल के साथ सर्कुलर बफर के लिए एटॉमिक ऑपरेशन का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "sync.Map का उपयोग करें"],
        "answer_en": "Use atomic operations for circular buffer with work stealing protocol",
        "answer_hi": "वर्क स्टीलिंग प्रोटोकॉल के साथ सर्कुलर बफर के लिए एटॉमिक ऑपरेशन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the difference between generic function reuse and monomorphization?",
        "question_hi": "जेनरिक फंक्शन रीयूज और मोनोमोर्फाइज़ेशन में क्या अंतर है?",
        "options_en": ["Reuse shares code, monomorphization creates specialized copies", "No difference", "Monomorphization is faster", "Reuse is deprecated"],
        "options_hi": ["रीयूज कोड शेयर करता है, मोनोमोर्फाइज़ेशन स्पेशलाइज्ड कॉपी बनाता है", "कोई अंतर नहीं", "मोनोमोर्फाइज़ेशन तेज है", "रीयूज डिप्रिकेटेड है"],
        "answer_en": "Reuse shares code, monomorphization creates specialized copies",
        "answer_hi": "रीयूज कोड शेयर करता है, मोनोमोर्फाइज़ेशन स्पेशलाइज्ड कॉपी बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How to implement a custom gRPC service registrar in Go?",
        "question_hi": "Go में कस्टम gRPC सर्विस रजिस्ट्रार कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement grpc.ServiceRegistrar interface with custom service registration", "Use gRPC package only", "Use HTTP services only", "Use third-party libraries"],
        "options_hi": ["कस्टम सर्विस रजिस्ट्रेशन के साथ grpc.ServiceRegistrar इंटरफेस इम्प्लीमेंट करें", "केवल gRPC पैकेज का उपयोग करें", "केवल HTTP सर्विस का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Implement grpc.ServiceRegistrar interface with custom service registration",
        "answer_hi": "कस्टम सर्विस रजिस्ट्रेशन के साथ grpc.ServiceRegistrar इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'runtime.SetBlockProfileRate' function in profiling?",
        "question_hi": "प्रोफाइलिंग में 'runtime.SetBlockProfileRate' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Controls fraction of blocking events that are profiled", "Sets block count", "Controls block allocation", "Sets block size"],
        "options_hi": ["प्रोफाइल किए जाने वाले ब्लॉकिंग इवेंट के फ्रैक्शन को कंट्रोल करता है", "ब्लॉक काउंट सेट करता है", "ब्लॉक अलोकेशन कंट्रोल करता है", "ब्लॉक साइज सेट करता है"],
        "answer_en": "Controls fraction of blocking events that are profiled",
        "answer_hi": "प्रोफाइल किए जाने वाले ब्लॉकिंग इवेंट के फ्रैक्शन को कंट्रोल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How to implement a distributed service mesh with sidecar proxies in Go?",
        "question_hi": "Go में साइडकार प्रॉक्सी के साथ डिस्ट्रीब्यूटेड सर्विस मेश कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use envoy-like sidecars with service discovery and traffic management", "Use local services only", "Use database services", "Use file system"],
        "options_hi": ["सर्विस डिस्कवरी और ट्रैफिक मैनेजमेंट के साथ envoy-like साइडकार का उपयोग करें", "केवल लोकल सर्विस का उपयोग करें", "डेटाबेस सर्विस का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use envoy-like sidecars with service discovery and traffic management",
        "answer_hi": "सर्विस डिस्कवरी और ट्रैफिक मैनेजमेंट के साथ envoy-like साइडकार का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the difference between sync.Mutex and spinlock implementation?",
        "question_hi": "sync.Mutex और स्पिनलॉक इम्प्लीमेंटेशन में क्या अंतर है?",
        "options_en": ["sync.Mutex uses OS primitives, spinlock uses busy waiting", "No difference", "Spinlock is faster", "sync.Mutex is deprecated"],
        "options_hi": ["sync.Mutex OS प्रिमिटिव का उपयोग करता है, स्पिनलॉक बिजी वेटिंग का उपयोग करता है", "कोई अंतर नहीं", "स्पिनलॉक तेज है", "sync.Mutex डिप्रिकेटेड है"],
        "answer_en": "sync.Mutex uses OS primitives, spinlock uses busy waiting",
        "answer_hi": "sync.Mutex OS प्रिमिटिव का उपयोग करता है, स्पिनलॉक बिजी वेटिंग का उपयोग करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How to implement a custom HTTP request rate limiter with sliding window?",
        "question_hi": "स्लाइडिंग विंडो के साथ कस्टम HTTP रिक्वेस्ट रेट लिमिटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use time-based buckets with atomic counters and cleanup", "Use simple counters only", "Use database counters", "Use file system"],
        "options_hi": ["एटॉमिक काउंटर और क्लीनअप के साथ टाइम-बेस्ड बकेट का उपयोग करें", "केवल सिंपल काउंटर का उपयोग करें", "डेटाबेस काउंटर का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use time-based buckets with atomic counters and cleanup",
        "answer_hi": "एटॉमिक काउंटर और क्लीनअप के साथ टाइम-बेस्ड बकेट का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'go:linkname' directive for runtime access?",
        "question_hi": "रनटाइम एक्सेस के लिए 'go:linkname' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["Accesses unexported runtime functions for low-level operations", "Exports functions", "Imports packages", "Creates links"],
        "options_hi": ["लो-लेवल ऑपरेशन के लिए अनएक्सपोर्टेड रनटाइम फंक्शन को एक्सेस करता है", "फंक्शन एक्सपोर्ट करता है", "पैकेज इम्पोर्ट करता है", "लिंक बनाता है"],
        "answer_en": "Accesses unexported runtime functions for low-level operations",
        "answer_hi": "लो-लेवल ऑपरेशन के लिए अनएक्सपोर्टेड रनटाइम फंक्शन को एक्सेस करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How to implement a lock-free memory barrier using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री मेमोरी बैरियर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use atomic.Store and atomic.Load with appropriate memory order", "Use channels", "Use mutexes", "Use sync.Once"],
        "options_hi": ["अपरोप्रिएट मेमोरी ऑर्डर के साथ atomic.Store और atomic.Load का उपयोग करें", "चैनल का उपयोग करें", "म्यूटेक्स का उपयोग करें", "sync.Once का उपयोग करें"],
        "answer_en": "Use atomic.Store and atomic.Load with appropriate memory order",
        "answer_hi": "अपरोप्रिएट मेमोरी ऑर्डर के साथ atomic.Store और atomic.Load का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the difference between generic type parameters and type lists?",
        "question_hi": "जेनरिक टाइप पैरामीटर और टाइप लिस्ट में क्या अंतर है?",
        "options_en": ["Type parameters are variables, type lists are constraint elements", "No difference", "Type lists are faster", "Type parameters are deprecated"],
        "options_hi": ["टाइप पैरामीटर वेरिएबल हैं, टाइप लिस्ट कंस्ट्रेंट एलिमेंट हैं", "कोई अंतर नहीं", "टाइप लिस्ट तेज हैं", "टाइप पैरामीटर डिप्रिकेटेड हैं"],
        "answer_en": "Type parameters are variables, type lists are constraint elements",
        "answer_hi": "टाइप पैरामीटर वेरिएबल हैं, टाइप लिस्ट कंस्ट्रेंट एलिमेंट हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How to implement a custom gRPC metadata handler in Go?",
        "question_hi": "Go में कस्टम gRPC मेटाडेटा हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement grpc.UnaryServerInterceptor with metadata processing", "Use gRPC package only", "Use HTTP headers only", "Use third-party libraries"],
        "options_hi": ["मेटाडेटा प्रोसेसिंग के साथ grpc.UnaryServerInterceptor इम्प्लीमेंट करें", "केवल gRPC पैकेज का उपयोग करें", "केवल HTTP हेडर का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Implement grpc.UnaryServerInterceptor with metadata processing",
        "answer_hi": "मेटाडेटा प्रोसेसिंग के साथ grpc.UnaryServerInterceptor इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'runtime.GC' function in memory management?",
        "question_hi": "मेमोरी मैनेजमेंट में 'runtime.GC' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Triggers garbage collection cycle manually", "Gets GC statistics", "Sets GC parameters", "Disables GC"],
        "options_hi": ["गार्बेज कलेक्शन साइकिल को मैन्युअली ट्रिगर करता है", "GC स्टैटिस्टिक्स प्राप्त करता है", "GC पैरामीटर सेट करता है", "GC डिसेबल करता है"],
        "answer_en": "Triggers garbage collection cycle manually",
        "answer_hi": "गार्बेज कलेक्शन साइकिल को मैन्युअली ट्रिगर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How to implement a distributed log aggregation system in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड लॉग अग्रीगेशन सिस्टम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use centralized log storage with log shippers and parsers", "Use local logs only", "Use database logs", "Use file system"],
        "options_hi": ["लॉग शिपर और पार्सर के साथ सेंट्रलाइज्ड लॉग स्टोरेज का उपयोग करें", "केवल लोकल लॉग का उपयोग करें", "डेटाबेस लॉग का उपयोग करें", "फाइल सिस्टम का उपयोग करें"],
        "answer_en": "Use centralized log storage with log shippers and parsers",
        "answer_hi": "लॉग शिपर और पार्सर के साथ सेंट्रलाइज्ड लॉग स्टोरेज का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the difference between sync.Cond.Wait and channel receive?",
        "question_hi": "sync.Cond.Wait और चैनल रिसीव में क्या अंतर है?",
        "options_en": ["Cond.Wait requires holding mutex, channel receive doesn't", "No difference", "Channel receive is faster", "Cond.Wait is deprecated"],
        "options_hi": ["Cond.Wait के लिए म्यूटेक्स होल्ड करना आवश्यक है, चैनल रिसीव के लिए नहीं", "कोई अंतर नहीं", "चैनल रिसीव तेज है", "Cond.Wait डिप्रिकेटेड है"],
        "answer_en": "Cond.Wait requires holding mutex, channel receive doesn't",
        "answer_hi": "Cond.Wait के लिए म्यूटेक्स होल्ड करना आवश्यक है, चैनल रिसीव के लिए नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How to implement a custom HTTP request ID generator with context propagation?",
        "question_hi": "कॉन्टेक्स्ट प्रोपगेशन के साथ कस्टम HTTP रिक्वेस्ट ID जनरेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use middleware to generate IDs and store in request context", "Use http.Request directly", "Use net/http only", "Use third-party libraries"],
        "options_hi": ["मिडलवेयर का उपयोग करके ID जनरेट करें और रिक्वेस्ट कॉन्टेक्स्ट में स्टोर करें", "सीधे http.Request का उपयोग करें", "केवल net/http का उपयोग करें", "थर्ड-पार्टी लाइब्रेरी का उपयोग करें"],
        "answer_en": "Use middleware to generate IDs and store in request context",
        "answer_hi": "मिडलवेयर का उपयोग करके ID जनरेट करें और रिक्वेस्ट कॉन्टेक्स्ट में स्टोर करें",
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