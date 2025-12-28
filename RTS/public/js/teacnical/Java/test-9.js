 
 /* ---------- STRICT FULLSCREEN ENFORCEMENT ---------- */
    let fullscreenExitAttempts = 0;
    let exitTimeout;

    function enterFullScreen() {
        const el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen().catch(e => {
                console.log("Fullscreen error:", e);
                forceFullscreen();
            });
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    }

    function forceFullscreen() {
        // Try alternative methods
        const el = document.documentElement;
        if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }

    // Auto fullscreen on load
    window.onload = () => {
        setTimeout(() => {
            enterFullScreen();
            // Start monitoring
            startFullscreenMonitoring();
        }, 500);
    };

    // Prevent all exit methods
    document.addEventListener("keydown", function (e) {
        // Block Escape, F11, Ctrl+W, Ctrl+T, Alt+Tab, etc.
        if (
            e.key === "Escape" ||
            e.key === "F11" ||
            (e.ctrlKey && e.key === "w") ||
            (e.ctrlKey && e.key === "t") ||
            (e.altKey && e.key === "Tab") ||
            (e.metaKey && e.key === "q") // Cmd+Q for Mac
        ) {
            e.preventDefault();
            e.stopPropagation();
            handleFullscreenExit();
            return false;
        }
    });

    // Block right click
    document.addEventListener("contextmenu", e => {
        e.preventDefault();
        handleFullscreenExit();
    });

    // Detect fullscreen exit
    function startFullscreenMonitoring() {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    }

    function handleFullscreenChange() {
        if (!document.fullscreenElement &&
            !document.webkitFullscreenElement &&
            !document.mozFullScreenElement &&
            !document.msFullscreenElement) {
            handleFullscreenExit();
        }
    }

    function handleFullscreenExit() {
        fullscreenExitAttempts++;
        
        // Show warning modal
        document.getElementById('exitWarning').style.display = 'block';
        
        let countdown = 5;
        document.getElementById('countdown').textContent = countdown;
        
        // Countdown timer
        exitTimeout = setInterval(() => {
            countdown--;
            document.getElementById('countdown').textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(exitTimeout);
                autoSubmitOnExit();
            }
        }, 1000);
        
        // Immediately try to go back to fullscreen
        enterFullScreen();
    }

    function autoSubmitOnExit() {
        alert("❌ TEST SUBMITTED!\nYou exited fullscreen mode. Test has been automatically submitted.");
        
        // Stop camera if active
        if (window.videoStream) {
            window.videoStream.getTracks().forEach(track => track.stop());
        }
        
        // Submit the test
        submitQuiz();
    }

    // Disable back button
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.pushState(null, null, location.href);
        handleFullscreenExit();
    };

    // Prevent window/tab close
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
        handleFullscreenExit();
    });

    // Monitor visibility change (tab switching)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            handleFullscreenExit();
        }
    });

    // Monitor resize (might indicate windowed mode)
    window.addEventListener('resize', function() {
        if (!document.fullscreenElement && 
            !document.webkitFullscreenElement && 
            !document.mozFullScreenElement && 
            !document.msFullscreenElement) {
            handleFullscreenExit();
        }
    });

    // Try to maintain fullscreen every 30 seconds
    setInterval(() => {
        if (!document.fullscreenElement && 
            !document.webkitFullscreenElement && 
            !document.mozFullScreenElement && 
            !document.msFullscreenElement) {
            enterFullScreen();
        }
    }, 30000);
 
 // Original questions array
        let questions = [
  {
    "num": 1,
    "question_en": "What is Java Collections Framework?",
    "question_hi": "जावा कलेक्शंस फ्रेमवर्क क्या है?",
    "options_en": ["Architecture to store and manipulate groups of objects", "Framework for database operations", "Network communication framework", "GUI framework"],
    "options_hi": ["ऑब्जेक्ट्स के ग्रुप्स स्टोर और मैनिपुलेट करने का आर्किटेक्चर", "डेटाबेस ऑपरेशन्स के लिए फ्रेमवर्क", "नेटवर्क कम्युनिकेशन फ्रेमवर्क", "GUI फ्रेमवर्क"],
    "answer_en": "Architecture to store and manipulate groups of objects",
    "answer_hi": "ऑब्जेक्ट्स के ग्रुप्स स्टोर और मैनिपुलेट करने का आर्किटेक्चर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "What are the main interfaces in Collections Framework?",
    "question_hi": "कलेक्शंस फ्रेमवर्क में मुख्य इंटरफेस क्या हैं?",
    "options_en": ["Collection, List, Set, Map, Queue", "Array, LinkedList, ArrayList", "Iterator, Comparator", "Serializable, Cloneable"],
    "options_hi": ["Collection, List, Set, Map, Queue", "Array, LinkedList, ArrayList", "Iterator, Comparator", "Serializable, Cloneable"],
    "answer_en": "Collection, List, Set, Map, Queue",
    "answer_hi": "Collection, List, Set, Map, Queue",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "What is Collection interface?",
    "question_hi": "Collection इंटरफेस क्या है?",
    "options_en": ["Root interface for collections (except Map)", "Interface for Map collections", "Interface for arrays", "Interface for primitives"],
    "options_hi": ["कलेक्शंस का रूट इंटरफेस (Map को छोड़कर)", "Map कलेक्शंस के लिए इंटरफेस", "एरे के लिए इंटरफेस", "प्रिमिटिव्स के लिए इंटरफेस"],
    "answer_en": "Root interface for collections (except Map)",
    "answer_hi": "कलेक्शंस का रूट इंटरफेस (Map को छोड़कर)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "What is List interface?",
    "question_hi": "List इंटरफेस क्या है?",
    "options_en": ["Ordered collection that allows duplicates", "Unordered collection, no duplicates", "Key-value pairs", "First-in-first-out collection"],
    "options_hi": ["ऑर्डर कलेक्शन जो डुप्लीकेट्स की अनुमति देता है", "अनऑर्डर कलेक्शन, कोई डुप्लीकेट्स नहीं", "की-वैल्यू पेयर्स", "फर्स्ट-इन-फर्स्ट-आउट कलेक्शन"],
    "answer_en": "Ordered collection that allows duplicates",
    "answer_hi": "ऑर्डर कलेक्शन जो डुप्लीकेट्स की अनुमति देता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "What is Set interface?",
    "question_hi": "Set इंटरफेस क्या है?",
    "options_en": ["Collection with no duplicates", "Ordered collection with duplicates", "Key-value collection", "Sequential collection"],
    "options_hi": ["कोई डुप्लीकेट्स नहीं वाला कलेक्शन", "डुप्लीकेट्स वाला ऑर्डर कलेक्शन", "की-वैल्यू कलेक्शन", "सीक्वेंशियल कलेक्शन"],
    "answer_en": "Collection with no duplicates",
    "answer_hi": "कोई डुप्लीकेट्स नहीं वाला कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "What is Map interface?",
    "question_hi": "Map इंटरफेस क्या है?",
    "options_en": ["Stores key-value pairs", "Stores only values", "Stores only keys", "Ordered collection"],
    "options_hi": ["की-वैल्यू पेयर्स स्टोर करता है", "सिर्फ वैल्यूज स्टोर करता है", "सिर्फ कीज स्टोर करता है", "ऑर्डर कलेक्शन"],
    "answer_en": "Stores key-value pairs",
    "answer_hi": "की-वैल्यू पेयर्स स्टोर करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "What is Queue interface?",
    "question_hi": "Queue इंटरफेस क्या है?",
    "options_en": ["FIFO (First-In-First-Out) collection", "LIFO (Last-In-First-Out) collection", "Random access collection", "Sorted collection"],
    "options_hi": ["FIFO (फर्स्ट-इन-फर्स्ट-आउट) कलेक्शन", "LIFO (लास्ट-इन-फर्स्ट-आउट) कलेक्शन", "रैंडम एक्सेस कलेक्शन", "सॉर्टेड कलेक्शन"],
    "answer_en": "FIFO (First-In-First-Out) collection",
    "answer_hi": "FIFO (फर्स्ट-इन-फर्स्ट-आउट) कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "What is Deque interface?",
    "question_hi": "Deque इंटरफेस क्या है?",
    "options_en": ["Double-ended queue", "Single-ended queue", "Circular queue", "Priority queue"],
    "options_hi": ["डबल-एंडेड क्यू", "सिंगल-एंडेड क्यू", "सर्कुलर क्यू", "प्रायोरिटी क्यू"],
    "answer_en": "Double-ended queue",
    "answer_hi": "डबल-एंडेड क्यू",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What is ArrayList?",
    "question_hi": "ArrayList क्या है?",
    "options_en": ["Resizable array implementation of List", "Linked list implementation", "Hash table implementation", "Tree implementation"],
    "options_hi": ["List का रीसाइजेबल एरे इम्प्लीमेंटेशन", "लिंक्ड लिस्ट इम्प्लीमेंटेशन", "हैश टेबल इम्प्लीमेंटेशन", "ट्री इम्प्लीमेंटेशन"],
    "answer_en": "Resizable array implementation of List",
    "answer_hi": "List का रीसाइजेबल एरे इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "What is LinkedList?",
    "question_hi": "LinkedList क्या है?",
    "options_en": ["Doubly linked list implementation", "Array implementation", "Tree implementation", "Hash implementation"],
    "options_hi": ["डबली लिंक्ड लिस्ट इम्प्लीमेंटेशन", "एरे इम्प्लीमेंटेशन", "ट्री इम्प्लीमेंटेशन", "हैश इम्प्लीमेंटेशन"],
    "answer_en": "Doubly linked list implementation",
    "answer_hi": "डबली लिंक्ड लिस्ट इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What is Vector?",
    "question_hi": "Vector क्या है?",
    "options_en": ["Synchronized resizable array", "Non-synchronized array", "Linked list", "Hash table"],
    "options_hi": ["सिंक्रोनाइज्ड रीसाइजेबल एरे", "नॉन-सिंक्रोनाइज्ड एरे", "लिंक्ड लिस्ट", "हैश टेबल"],
    "answer_en": "Synchronized resizable array",
    "answer_hi": "सिंक्रोनाइज्ड रीसाइजेबल एरे",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "What is Stack?",
    "question_hi": "Stack क्या है?",
    "options_en": ["LIFO (Last-In-First-Out) data structure", "FIFO data structure", "Random access structure", "Tree structure"],
    "options_hi": ["LIFO (लास्ट-इन-फर्स्ट-आउट) डेटा स्ट्रक्चर", "FIFO डेटा स्ट्रक्चर", "रैंडम एक्सेस स्ट्रक्चर", "ट्री स्ट्रक्चर"],
    "answer_en": "LIFO (Last-In-First-Out) data structure",
    "answer_hi": "LIFO (लास्ट-इन-फर्स्ट-आउट) डेटा स्ट्रक्चर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is HashSet?",
    "question_hi": "HashSet क्या है?",
    "options_en": ["Hash table implementation of Set", "Tree implementation of Set", "Array implementation", "Linked implementation"],
    "options_hi": ["Set का हैश टेबल इम्प्लीमेंटेशन", "Set का ट्री इम्प्लीमेंटेशन", "एरे इम्प्लीमेंटेशन", "लिंक्ड इम्प्लीमेंटेशन"],
    "answer_en": "Hash table implementation of Set",
    "answer_hi": "Set का हैश टेबल इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "What is LinkedHashSet?",
    "question_hi": "LinkedHashSet क्या है?",
    "options_en": ["Hash table + linked list, maintains insertion order", "Only hash table", "Only linked list", "Tree structure"],
    "options_hi": ["हैश टेबल + लिंक्ड लिस्ट, इन्सर्शन ऑर्डर मेंटेन करता है", "सिर्फ हैश टेबल", "सिर्फ लिंक्ड लिस्ट", "ट्री स्ट्रक्चर"],
    "answer_en": "Hash table + linked list, maintains insertion order",
    "answer_hi": "हैश टेबल + लिंक्ड लिस्ट, इन्सर्शन ऑर्डर मेंटेन करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is TreeSet?",
    "question_hi": "TreeSet क्या है?",
    "options_en": ["Red-Black tree implementation, sorted order", "Hash table implementation", "Array implementation", "Linked list implementation"],
    "options_hi": ["रेड-ब्लैक ट्री इम्प्लीमेंटेशन, सॉर्टेड ऑर्डर", "हैश टेबल इम्प्लीमेंटेशन", "एरे इम्प्लीमेंटेशन", "लिंक्ड लिस्ट इम्प्लीमेंटेशन"],
    "answer_en": "Red-Black tree implementation, sorted order",
    "answer_hi": "रेड-ब्लैक ट्री इम्प्लीमेंटेशन, सॉर्टेड ऑर्डर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "What is HashMap?",
    "question_hi": "HashMap क्या है?",
    "options_en": ["Hash table implementation of Map", "Tree implementation of Map", "Linked implementation", "Array implementation"],
    "options_hi": ["Map का हैश टेबल इम्प्लीमेंटेशन", "Map का ट्री इम्प्लीमेंटेशन", "लिंक्ड इम्प्लीमेंटेशन", "एरे इम्प्लीमेंटेशन"],
    "answer_en": "Hash table implementation of Map",
    "answer_hi": "Map का हैश टेबल इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "What is LinkedHashMap?",
    "question_hi": "LinkedHashMap क्या है?",
    "options_en": ["Hash table + linked list, maintains insertion order", "Only hash table", "Only linked list", "Tree structure"],
    "options_hi": ["हैश टेबल + लिंक्ड लिस्ट, इन्सर्शन ऑर्डर मेंटेन करता है", "सिर्फ हैश टेबल", "सिर्फ लिंक्ड लिस्ट", "ट्री स्ट्रक्चर"],
    "answer_en": "Hash table + linked list, maintains insertion order",
    "answer_hi": "हैश टेबल + लिंक्ड लिस्ट, इन्सर्शन ऑर्डर मेंटेन करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is TreeMap?",
    "question_hi": "TreeMap क्या है?",
    "options_en": ["Red-Black tree implementation, sorted by keys", "Hash table implementation", "Array implementation", "Linked list implementation"],
    "options_hi": ["रेड-ब्लैक ट्री इम्प्लीमेंटेशन, कीज द्वारा सॉर्टेड", "हैश टेबल इम्प्लीमेंटेशन", "एरे इम्प्लीमेंटेशन", "लिंक्ड लिस्ट इम्प्लीमेंटेशन"],
    "answer_en": "Red-Black tree implementation, sorted by keys",
    "answer_hi": "रेड-ब्लैक ट्री इम्प्लीमेंटेशन, कीज द्वारा सॉर्टेड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "What is Hashtable?",
    "question_hi": "Hashtable क्या है?",
    "options_en": ["Synchronized hash table implementation", "Non-synchronized hash table", "Tree implementation", "Linked implementation"],
    "options_hi": ["सिंक्रोनाइज्ड हैश टेबल इम्प्लीमेंटेशन", "नॉन-सिंक्रोनाइज्ड हैश टेबल", "ट्री इम्प्लीमेंटेशन", "लिंक्ड इम्प्लीमेंटेशन"],
    "answer_en": "Synchronized hash table implementation",
    "answer_hi": "सिंक्रोनाइज्ड हैश टेबल इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is PriorityQueue?",
    "question_hi": "PriorityQueue क्या है?",
    "options_en": ["Queue where elements are ordered by priority", "Simple FIFO queue", "LIFO queue", "Random access queue"],
    "options_hi": ["क्यू जहां एलिमेंट्स प्रायोरिटी द्वारा ऑर्डर होते हैं", "सिंपल FIFO क्यू", "LIFO क्यू", "रैंडम एक्सेस क्यू"],
    "answer_en": "Queue where elements are ordered by priority",
    "answer_hi": "क्यू जहां एलिमेंट्स प्रायोरिटी द्वारा ऑर्डर होते हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "What is ArrayDeque?",
    "question_hi": "ArrayDeque क्या है?",
    "options_en": ["Resizable array implementation of Deque", "Linked list implementation", "Tree implementation", "Hash implementation"],
    "options_hi": ["Deque का रीसाइजेबल एरे इम्प्लीमेंटेशन", "लिंक्ड लिस्ट इम्प्लीमेंटेशन", "ट्री इम्प्लीमेंटेशन", "हैश इम्प्लीमेंटेशन"],
    "answer_en": "Resizable array implementation of Deque",
    "answer_hi": "Deque का रीसाइजेबल एरे इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "What is Iterator interface?",
    "question_hi": "Iterator इंटरफेस क्या है?",
    "options_en": ["Used to traverse collections", "Used to sort collections", "Used to filter collections", "Used to map collections"],
    "options_hi": ["कलेक्शंस ट्रैवर्स करने के लिए उपयोग", "कलेक्शंस सॉर्ट करने के लिए उपयोग", "कलेक्शंस फिल्टर करने के लिए उपयोग", "कलेक्शंस मैप करने के लिए उपयोग"],
    "answer_en": "Used to traverse collections",
    "answer_hi": "कलेक्शंस ट्रैवर्स करने के लिए उपयोग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "What is ListIterator?",
    "question_hi": "ListIterator क्या है?",
    "options_en": ["Iterator for List that allows bidirectional traversal", "Iterator for Set", "Iterator for Map", "Iterator for Queue"],
    "options_hi": ["List के लिए इटरेटर जो बायडायरेक्शनल ट्रैवर्सल की अनुमति देता है", "Set के लिए इटरेटर", "Map के लिए इटरेटर", "Queue के लिए इटरेटर"],
    "answer_en": "Iterator for List that allows bidirectional traversal",
    "answer_hi": "List के लिए इटरेटर जो बायडायरेक्शनल ट्रैवर्सल की अनुमति देता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is Comparable interface?",
    "question_hi": "Comparable इंटरफेस क्या है?",
    "options_en": ["Provides natural ordering for objects", "Provides custom ordering", "Provides random ordering", "Provides reverse ordering"],
    "options_hi": ["ऑब्जेक्ट्स के लिए नेचुरल ऑर्डरिंग प्रदान करता है", "कस्टम ऑर्डरिंग प्रदान करता है", "रैंडम ऑर्डरिंग प्रदान करता है", "रिवर्स ऑर्डरिंग प्रदान करता है"],
    "answer_en": "Provides natural ordering for objects",
    "answer_hi": "ऑब्जेक्ट्स के लिए नेचुरल ऑर्डरिंग प्रदान करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "What is Comparator interface?",
    "question_hi": "Comparator इंटरफेस क्या है?",
    "options_en": ["Provides custom ordering for objects", "Provides natural ordering", "Provides default ordering", "Provides random ordering"],
    "options_hi": ["ऑब्जेक्ट्स के लिए कस्टम ऑर्डरिंग प्रदान करता है", "नेचुरल ऑर्डरिंग प्रदान करता है", "डिफॉल्ट ऑर्डरिंग प्रदान करता है", "रैंडम ऑर्डरिंग प्रदान करता है"],
    "answer_en": "Provides custom ordering for objects",
    "answer_hi": "ऑब्जेक्ट्स के लिए कस्टम ऑर्डरिंग प्रदान करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What is Collections class?",
    "question_hi": "Collections क्लास क्या है?",
    "options_en": ["Utility class with static methods for collections", "Collection interface", "Collection implementation", "Collection factory"],
    "options_hi": ["कलेक्शंस के लिए स्टेटिक मेथड्स वाली यूटिलिटी क्लास", "Collection इंटरफेस", "Collection इम्प्लीमेंटेशन", "Collection फैक्ट्री"],
    "answer_en": "Utility class with static methods for collections",
    "answer_hi": "कलेक्शंस के लिए स्टेटिक मेथड्स वाली यूटिलिटी क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "What is Arrays class?",
    "question_hi": "Arrays क्लास क्या है?",
    "options_en": ["Utility class for array operations", "Utility class for collections", "Array interface", "Array implementation"],
    "options_hi": ["एरे ऑपरेशन्स के लिए यूटिलिटी क्लास", "कलेक्शंस के लिए यूटिलिटी क्लास", "एरे इंटरफेस", "एरे इम्प्लीमेंटेशन"],
    "answer_en": "Utility class for array operations",
    "answer_hi": "एरे ऑपरेशन्स के लिए यूटिलिटी क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What is fail-fast iterator?",
    "question_hi": "फेल-फास्ट इटरेटर क्या है?",
    "options_en": ["Throws ConcurrentModificationException if collection modified during iteration", "Doesn't throw exception", "Continues silently", "Stops iteration"],
    "options_hi": ["ConcurrentModificationException थ्रो करता है अगर इटरेशन के दौरान कलेक्शन मॉडिफाइ हो", "एक्सेप्शन नहीं थ्रो करता", "चुपचाप जारी रखता है", "इटरेशन रोकता है"],
    "answer_en": "Throws ConcurrentModificationException if collection modified during iteration",
    "answer_hi": "ConcurrentModificationException थ्रो करता है अगर इटरेशन के दौरान कलेक्शन मॉडिफाइ हो",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "What is fail-safe iterator?",
    "question_hi": "फेल-सेफ इटरेटर क्या है?",
    "options_en": ["Doesn't throw exception if collection modified during iteration", "Throws exception", "Stops working", "Restarts iteration"],
    "options_hi": ["एक्सेप्शन नहीं थ्रो करता अगर इटरेशन के दौरान कलेक्शन मॉडिफाइ हो", "एक्सेप्शन थ्रो करता है", "काम करना बंद कर देता है", "इटरेशन रीस्टार्ट करता है"],
    "answer_en": "Doesn't throw exception if collection modified during iteration",
    "answer_hi": "एक्सेप्शन नहीं थ्रो करता अगर इटरेशन के दौरान कलेक्शन मॉडिफाइ हो",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is synchronized collection?",
    "question_hi": "सिंक्रोनाइज्ड कलेक्शन क्या है?",
    "options_en": ["Thread-safe collection", "Non-thread-safe collection", "Fast collection", "Slow collection"],
    "options_hi": ["थ्रेड-सेफ कलेक्शन", "नॉन-थ्रेड-सेफ कलेक्शन", "फास्ट कलेक्शन", "स्लो कलेक्शन"],
    "answer_en": "Thread-safe collection",
    "answer_hi": "थ्रेड-सेफ कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "How to create synchronized collection?",
    "question_hi": "सिंक्रोनाइज्ड कलेक्शन कैसे बनाएं?",
    "options_en": ["Collections.synchronizedCollection()", "Collection.synchronize()", "new SynchronizedCollection()", "Collection.threadSafe()"],
    "options_hi": ["Collections.synchronizedCollection()", "Collection.synchronize()", "new SynchronizedCollection()", "Collection.threadSafe()"],
    "answer_en": "Collections.synchronizedCollection()",
    "answer_hi": "Collections.synchronizedCollection()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "What is unmodifiable collection?",
    "question_hi": "अनमॉडिफायबल कलेक्शन क्या है?",
    "options_en": ["Read-only collection", "Write-only collection", "Mutable collection", "Thread-safe collection"],
    "options_hi": ["रीड-ओनली कलेक्शन", "राइट-ओनली कलेक्शन", "म्यूटेबल कलेक्शन", "थ्रेड-सेफ कलेक्शन"],
    "answer_en": "Read-only collection",
    "answer_hi": "रीड-ओनली कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "How to create unmodifiable collection?",
    "question_hi": "अनमॉडिफायबल कलेक्शन कैसे बनाएं?",
    "options_en": ["Collections.unmodifiableCollection()", "Collection.readOnly()", "new UnmodifiableCollection()", "Collection.immutable()"],
    "options_hi": ["Collections.unmodifiableCollection()", "Collection.readOnly()", "new UnmodifiableCollection()", "Collection.immutable()"],
    "answer_en": "Collections.unmodifiableCollection()",
    "answer_hi": "Collections.unmodifiableCollection()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "What is generic collection?",
    "question_hi": "जेनेरिक कलेक्शन क्या है?",
    "options_en": ["Type-safe collection", "Type-unsafe collection", "Raw collection", "Object collection"],
    "options_hi": ["टाइप-सेफ कलेक्शन", "टाइप-अनसेफ कलेक्शन", "रॉ कलेक्शन", "ऑब्जेक्ट कलेक्शन"],
    "answer_en": "Type-safe collection",
    "answer_hi": "टाइप-सेफ कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "How to create generic ArrayList?",
    "question_hi": "जेनेरिक ArrayList कैसे बनाएं?",
    "options_en": ["ArrayList<String> list = new ArrayList<>();", "ArrayList list = new ArrayList();", "new ArrayList<String>();", "ArrayList<> list = new ArrayList();"],
    "options_hi": ["ArrayList<String> list = new ArrayList<>();", "ArrayList list = new ArrayList();", "new ArrayList<String>();", "ArrayList<> list = new ArrayList();"],
    "answer_en": "ArrayList<String> list = new ArrayList<>();",
    "answer_hi": "ArrayList<String> list = new ArrayList<>();",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "What is diamond operator <>?",
    "question_hi": "डायमंड ऑपरेटर <> क्या है?",
    "options_en": ["Type inference in generics", "Comparison operator", "Mathematical operator", "Logical operator"],
    "options_hi": ["जेनेरिक्स में टाइप इन्फेरेंस", "कंपेरिजन ऑपरेटर", "मैथमेटिकल ऑपरेटर", "लॉजिकल ऑपरेटर"],
    "answer_en": "Type inference in generics",
    "answer_hi": "जेनेरिक्स में टाइप इन्फेरेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "What is wildcard in generics?",
    "question_hi": "जेनेरिक्स में वाइल्डकार्ड क्या है?",
    "options_en": ["? symbol for unknown type", "* symbol", "% symbol", "@ symbol"],
    "options_hi": ["अननोन टाइप के लिए ? सिंबल", "* सिंबल", "% सिंबल", "@ सिंबल"],
    "answer_en": "? symbol for unknown type",
    "answer_hi": "अननोन टाइप के लिए ? सिंबल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is upper bounded wildcard?",
    "question_hi": "अप्पर बाउंडेड वाइल्डकार्ड क्या है?",
    "options_en": ["? extends Type", "? super Type", "? Type", "Type ?"],
    "options_hi": ["? extends Type", "? super Type", "? Type", "Type ?"],
    "answer_en": "? extends Type",
    "answer_hi": "? extends Type",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "What is lower bounded wildcard?",
    "question_hi": "लोअर बाउंडेड वाइल्डकार्ड क्या है?",
    "options_en": ["? super Type", "? extends Type", "? Type", "Type ?"],
    "options_hi": ["? super Type", "? extends Type", "? Type", "Type ?"],
    "answer_en": "? super Type",
    "answer_hi": "? super Type",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is unbounded wildcard?",
    "question_hi": "अनबाउंडेड वाइल्डकार्ड क्या है?",
    "options_en": ["?", "? Object", "? any", "? all"],
    "options_hi": ["?", "? Object", "? any", "? all"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "What is type erasure?",
    "question_hi": "टाइप इरेज़र क्या है?",
    "options_en": ["Removing generic type information at runtime", "Adding type information", "Checking type information", "Validating type information"],
    "options_hi": ["रनटाइम पर जेनेरिक टाइप इन्फोर्मेशन रिमूव करना", "टाइप इन्फोर्मेशन ऐड करना", "टाइप इन्फोर्मेशन चेक करना", "टाइप इन्फोर्मेशन वैलिडेट करना"],
    "answer_en": "Removing generic type information at runtime",
    "answer_hi": "रनटाइम पर जेनेरिक टाइप इन्फोर्मेशन रिमूव करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is ConcurrentHashMap?",
    "question_hi": "ConcurrentHashMap क्या है?",
    "options_en": ["Thread-safe HashMap for concurrent access", "Non-thread-safe HashMap", "Synchronized HashMap", "Simple HashMap"],
    "options_hi": ["कनकरेंट एक्सेस के लिए थ्रेड-सेफ HashMap", "नॉन-थ्रेड-सेफ HashMap", "सिंक्रोनाइज्ड HashMap", "सिंपल HashMap"],
    "answer_en": "Thread-safe HashMap for concurrent access",
    "answer_hi": "कनकरेंट एक्सेस के लिए थ्रेड-सेफ HashMap",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is CopyOnWriteArrayList?",
    "question_hi": "CopyOnWriteArrayList क्या है?",
    "options_en": ["Thread-safe variant of ArrayList", "Non-thread-safe ArrayList", "Fast ArrayList", "Slow ArrayList"],
    "options_hi": ["ArrayList का थ्रेड-सेफ वेरिएंट", "नॉन-थ्रेड-सेफ ArrayList", "फास्ट ArrayList", "स्लो ArrayList"],
    "answer_en": "Thread-safe variant of ArrayList",
    "answer_hi": "ArrayList का थ्रेड-सेफ वेरिएंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "What is BlockingQueue?",
    "question_hi": "BlockingQueue क्या है?",
    "options_en": ["Queue that blocks when empty or full", "Non-blocking queue", "Fast queue", "Simple queue"],
    "options_hi": ["क्यू जो एम्प्टी या फुल होने पर ब्लॉक करता है", "नॉन-ब्लॉकिंग क्यू", "फास्ट क्यू", "सिंपल क्यू"],
    "answer_en": "Queue that blocks when empty or full",
    "answer_hi": "क्यू जो एम्प्टी या फुल होने पर ब्लॉक करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is ArrayBlockingQueue?",
    "question_hi": "ArrayBlockingQueue क्या है?",
    "options_en": ["Bounded blocking queue backed by array", "Unbounded blocking queue", "Non-blocking queue", "Linked blocking queue"],
    "options_hi": ["एरे द्वारा बैक्ड बाउंडेड ब्लॉकिंग क्यू", "अनबाउंडेड ब्लॉकिंग क्यू", "नॉन-ब्लॉकिंग क्यू", "लिंक्ड ब्लॉकिंग क्यू"],
    "answer_en": "Bounded blocking queue backed by array",
    "answer_hi": "एरे द्वारा बैक्ड बाउंडेड ब्लॉकिंग क्यू",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is LinkedBlockingQueue?",
    "question_hi": "LinkedBlockingQueue क्या है?",
    "options_en": ["Optionally bounded blocking queue backed by linked nodes", "Array-backed queue", "Unbounded queue", "Non-blocking queue"],
    "options_hi": ["लिंक्ड नोड्स द्वारा बैक्ड ऑप्शनली बाउंडेड ब्लॉकिंग क्यू", "एरे-बैक्ड क्यू", "अनबाउंडेड क्यू", "नॉन-ब्लॉकिंग क्यू"],
    "answer_en": "Optionally bounded blocking queue backed by linked nodes",
    "answer_hi": "लिंक्ड नोड्स द्वारा बैक्ड ऑप्शनली बाउंडेड ब्लॉकिंग क्यू",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is PriorityBlockingQueue?",
    "question_hi": "PriorityBlockingQueue क्या है?",
    "options_en": ["Unbounded blocking priority queue", "Bounded priority queue", "Non-blocking priority queue", "Simple priority queue"],
    "options_hi": ["अनबाउंडेड ब्लॉकिंग प्रायोरिटी क्यू", "बाउंडेड प्रायोरिटी क्यू", "नॉन-ब्लॉकिंग प्रायोरिटी क्यू", "सिंपल प्रायोरिटी क्यू"],
    "answer_en": "Unbounded blocking priority queue",
    "answer_hi": "अनबाउंडेड ब्लॉकिंग प्रायोरिटी क्यू",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is DelayQueue?",
    "question_hi": "DelayQueue क्या है?",
    "options_en": ["Blocking queue of Delayed elements", "Fast queue", "Simple queue", "Priority queue"],
    "options_hi": ["Delayed एलिमेंट्स की ब्लॉकिंग क्यू", "फास्ट क्यू", "सिंपल क्यू", "प्रायोरिटी क्यू"],
    "answer_en": "Blocking queue of Delayed elements",
    "answer_hi": "Delayed एलिमेंट्स की ब्लॉकिंग क्यू",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "What is SynchronousQueue?",
    "question_hi": "SynchronousQueue क्या है?",
    "options_en": ["Blocking queue with zero capacity", "Queue with large capacity", "Non-blocking queue", "Priority queue"],
    "options_hi": ["जीरो कैपेसिटी वाली ब्लॉकिंग क्यू", "बड़ी कैपेसिटी वाली क्यू", "नॉन-ब्लॉकिंग क्यू", "प्रायोरिटी क्यू"],
    "answer_en": "Blocking queue with zero capacity",
    "answer_hi": "जीरो कैपेसिटी वाली ब्लॉकिंग क्यू",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "What is TransferQueue?",
    "question_hi": "TransferQueue क्या है?",
    "options_en": ["Blocking queue where producers wait for consumers", "Simple blocking queue", "Non-blocking queue", "Priority queue"],
    "options_hi": ["ब्लॉकिंग क्यू जहां प्रोड्यूसर्स कंज्यूमर्स का इंतज़ार करते हैं", "सिंपल ब्लॉकिंग क्यू", "नॉन-ब्लॉकिंग क्यू", "प्रायोरिटी क्यू"],
    "answer_en": "Blocking queue where producers wait for consumers",
    "answer_hi": "ब्लॉकिंग क्यू जहां प्रोड्यूसर्स कंज्यूमर्स का इंतज़ार करते हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 50
  }
]

        // --------------------------- GLOBAL VARS -----------------------------
        let currentQuestion = 0;
        let language = "en";
        let timeLeft = 60 * 60;   // 60 minutes timer
        let timerInterval;
        let videoStream = null;

        // --------------------------- SHUFFLE QUESTIONS -------------------------
        function shuffleQuestions(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            shuffled.forEach((q, index) => {
                q.num = index + 1;
            });
            return shuffled;
        }

        // --------------------------- LOAD QUESTION ----------------------------
        function loadQuestion(index) {
            const q = questions[index];
            
            q.visited = true;
            
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

        // --------------------------- MARK FOR REVIEW -------------------------
        function markForReview(index) {
            questions[index].marked = !questions[index].marked;
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

            const savedTime = localStorage.getItem("quizTimeLeft");
            if (savedTime) {
                timeLeft = parseInt(savedTime);
            }

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

                if (timeLeft % 10 === 0) {
                    localStorage.setItem("quizTimeLeft", timeLeft);
                }

                timeLeft--;
            }, 1000);
        }

        // --------------------------- SUBMIT QUIZ ---------------------
        function submitQuiz() {
            // Clear any exit warnings
            if (exitTimeout) clearInterval(exitTimeout);
            document.getElementById('exitWarning').style.display = 'none';
            
            let confirmation = confirm("Are you sure you want to submit the test?");
            if (!confirmation) return;

            clearInterval(timerInterval);
            localStorage.removeItem("quizTimeLeft");

            const totalTimeSpent = (60 * 60) - timeLeft;
            const mins = Math.floor(totalTimeSpent / 60);
            const secs = totalTimeSpent % 60;

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
                    correct: language === "en" ? q.answer_en : q.answer_hi,
                    originalNum: q.originalNum
                });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));
            localStorage.setItem("totalQuestions", questions.length);

            if (videoStream) {
                videoStream.getTracks().forEach(track => track.stop());
            }

            window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
        }

        // --------------------------- NAVIGATION ------------------------------
        function updateNavigation() {
            const nav = document.getElementById("circleContainer");
            nav.innerHTML = "";

            questions.forEach((q, i) => {
                let color = "gray";
                
                if (i === currentQuestion) {
                    color = "blue";
                } else if (q.marked) {
                    color = "orange";
                } else if (q.attempted) {
                    color = "green";
                } else if (q.visited) {
                    color = "#f0f0f0";
                } else {
                    color = "gray";
                }

                const circle = document.createElement("div");
                circle.className = "circle";
                circle.style.background = color;
                circle.style.cursor = "pointer";
                circle.style.width = "30px";
                circle.style.height = "30px";
                circle.style.borderRadius = "50%";
                circle.style.display = "inline-flex";
                circle.style.alignItems = "center";
                circle.style.justifyContent = "center";
                circle.style.margin = "5px";
                circle.style.color = "black";
                circle.style.fontWeight = "bold";
                circle.textContent = i + 1;
                
                circle.ondblclick = () => {
                    q.marked = !q.marked;
                    updateNavigation();
                };
                
                circle.onclick = () => jumpToQuestion(i);
                nav.appendChild(circle);
            });
        }

        function jumpToQuestion(i) {
            currentQuestion = i;
            loadQuestion(i);
        }

        // --------------------------- CAMERA ----------------------
        function startCamera() {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                console.warn("Camera not supported");
                return;
            }

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

            navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: "user",
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                } 
            })
                .then(stream => {
                    video.srcObject = stream;
                    videoStream = stream;
                    window.videoStream = stream; // Make global for exit handling
                })
                .catch(err => {
                    console.error("Camera access error:", err);
                    container.remove();
                });
        }

        // --------------------------- PAGE LOAD --------------------------
        window.addEventListener('load', function () {
            // Shuffle questions
            questions = shuffleQuestions(questions);
            localStorage.setItem('shuffledQuestions', JSON.stringify(questions.map(q => q.originalNum)));
            
            // Load first question
            loadQuestion(currentQuestion);
            
            // Start timer
            startTimer();
            
            // Start camera with delay
            setTimeout(() => {
                startCamera();
            }, 1000);
        });

        // Clean up
        window.addEventListener('beforeunload', function() {
            if (videoStream) {
                videoStream.getTracks().forEach(track => track.stop());
            }
            if (exitTimeout) clearInterval(exitTimeout);
        });