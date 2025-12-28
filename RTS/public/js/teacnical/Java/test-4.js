 
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
    "question_en": "What is the default value of a boolean variable in Java?",
    "question_hi": "जावा में बूलियन वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["true", "false", "0", "null"],
    "options_hi": ["true", "false", "0", "null"],
    "answer_en": "false",
    "answer_hi": "false",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "Which of these is not a primitive data type in Java?",
    "question_hi": "इनमें से कौन जावा में प्रिमिटिव डेटा टाइप नहीं है?",
    "options_en": ["int", "String", "boolean", "char"],
    "options_hi": ["int", "String", "boolean", "char"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to create an object in Java?",
    "question_hi": "जावा में ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["create", "new", "object", "allocate"],
    "options_hi": ["create", "new", "object", "allocate"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "Which method must be implemented by all threads in Java?",
    "question_hi": "जावा में सभी थ्रेड्स को कौन सी मेथड इम्प्लीमेंट करनी होती है?",
    "options_en": ["start()", "run()", "execute()", "begin()"],
    "options_hi": ["start()", "run()", "execute()", "begin()"],
    "answer_en": "run()",
    "answer_hi": "run()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "What is the size of int data type in Java?",
    "question_hi": "जावा में int डेटा टाइप का साइज कितना होता है?",
    "options_en": ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
    "options_hi": ["2 बाइट्स", "4 बाइट्स", "8 बाइट्स", "OS पर निर्भर"],
    "answer_en": "4 bytes",
    "answer_hi": "4 बाइट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "Which package is automatically imported in every Java program?",
    "question_hi": "कौन सा पैकेज हर जावा प्रोग्राम में ऑटोमेटिकली इम्पोर्ट होता है?",
    "options_en": ["java.util", "java.lang", "java.io", "java.awt"],
    "options_hi": ["java.util", "java.lang", "java.io", "java.awt"],
    "answer_en": "java.lang",
    "answer_hi": "java.lang",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "Which of these is a marker interface in Java?",
    "question_hi": "इनमें से कौन जावा में मार्कर इंटरफेस है?",
    "options_en": ["Runnable", "Serializable", "Comparator", "Comparable"],
    "options_hi": ["Runnable", "Serializable", "Comparator", "Comparable"],
    "answer_en": "Serializable",
    "answer_hi": "Serializable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to prevent method overriding?",
    "question_hi": "मेथड ओवरराइडिंग को रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["static", "final", "private", "protected"],
    "options_hi": ["static", "final", "private", "protected"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What is the parent class of all Java classes?",
    "question_hi": "सभी जावा क्लासेस की पेरेंट क्लास कौन सी है?",
    "options_en": ["Object", "Class", "Main", "Super"],
    "options_hi": ["Object", "Class", "Main", "Super"],
    "answer_en": "Object",
    "answer_hi": "Object",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "Which collection class allows duplicate elements?",
    "question_hi": "कौन सा कलेक्शन क्लास डुप्लिकेट एलिमेंट्स को अनुमति देता है?",
    "options_en": ["Set", "List", "Map", "Queue"],
    "options_hi": ["Set", "List", "Map", "Queue"],
    "answer_en": "List",
    "answer_hi": "List",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What does JVM stand for?",
    "question_hi": "JVM का पूरा नाम क्या है?",
    "options_en": ["Java Virtual Machine", "Java Variable Method", "Java Visual Machine", "Java Virtual Memory"],
    "options_hi": ["Java Virtual Machine", "Java Variable Method", "Java Visual Machine", "Java Virtual Memory"],
    "answer_en": "Java Virtual Machine",
    "answer_hi": "Java Virtual Machine",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "Which keyword is used for exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "attempt", "error", "catch"],
    "options_hi": ["try", "attempt", "error", "catch"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is the return type of a constructor?",
    "question_hi": "कंस्ट्रक्टर का रिटर्न टाइप क्या होता है?",
    "options_en": ["int", "void", "No return type", "Object"],
    "options_hi": ["int", "void", "कोई रिटर्न टाइप नहीं", "Object"],
    "answer_en": "No return type",
    "answer_hi": "कोई रिटर्न टाइप नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "Which of these is a synchronized collection?",
    "question_hi": "इनमें से कौन सिंक्रोनाइज्ड कलेक्शन है?",
    "options_en": ["ArrayList", "HashMap", "Vector", "HashSet"],
    "options_hi": ["ArrayList", "HashMap", "Vector", "HashSet"],
    "answer_en": "Vector",
    "answer_hi": "Vector",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is the default value of a local variable?",
    "question_hi": "लोकल वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0", "null", "No default value", "false"],
    "options_hi": ["0", "null", "कोई डिफॉल्ट वैल्यू नहीं", "false"],
    "answer_en": "No default value",
    "answer_hi": "कोई डिफॉल्ट वैल्यू नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "Which method is used to compare two strings in Java?",
    "question_hi": "जावा में दो स्ट्रिंग्स की तुलना करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["equals()", "compare()", "==", "check()"],
    "options_hi": ["equals()", "compare()", "==", "check()"],
    "answer_en": "equals()",
    "answer_hi": "equals()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "Which keyword is used to define an interface?",
    "question_hi": "इंटरफेस डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["interface", "abstract", "class", "implements"],
    "options_hi": ["interface", "abstract", "class", "implements"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is the superclass of all exception classes?",
    "question_hi": "सभी एक्सेप्शन क्लासेस की सुपरक्लास कौन सी है?",
    "options_en": ["Error", "RuntimeException", "Throwable", "Exception"],
    "options_hi": ["Error", "RuntimeException", "Throwable", "Exception"],
    "answer_en": "Throwable",
    "answer_hi": "Throwable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "Which of these is not a valid keyword in Java?",
    "question_hi": "इनमें से कौन जावा में वैलिड कीवर्ड नहीं है?",
    "options_en": ["goto", "const", "synchronized", "Both goto and const"],
    "options_hi": ["goto", "const", "synchronized", "दोनों goto और const"],
    "answer_en": "Both goto and const",
    "answer_hi": "दोनों goto और const",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is the purpose of finally block?",
    "question_hi": "finally ब्लॉक का उद्देश्य क्या है?",
    "options_en": ["To handle exceptions", "To define final variables", "To execute code always", "To terminate program"],
    "options_hi": ["एक्सेप्शन हैंडल करने के लिए", "फाइनल वेरिएबल्स डिफाइन करने के लिए", "कोड हमेशा एक्जीक्यूट करने के लिए", "प्रोग्राम टर्मिनेट करने के लिए"],
    "answer_en": "To execute code always",
    "answer_hi": "कोड हमेशा एक्जीक्यूट करने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "What is the size of double data type in Java?",
    "question_hi": "जावा में double डेटा टाइप का साइज कितना होता है?",
    "options_en": ["4 bytes", "8 bytes", "16 bytes", "32 bytes"],
    "options_hi": ["4 बाइट्स", "8 बाइट्स", "16 बाइट्स", "32 बाइट्स"],
    "answer_en": "8 bytes",
    "answer_hi": "8 बाइट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "Which of these is used to create an abstract class?",
    "question_hi": "अब्सट्रैक्ट क्लास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["abstract", "interface", "class", "final"],
    "options_hi": ["abstract", "interface", "class", "final"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "What is method overriding in Java?",
    "question_hi": "जावा में मेथड ओवरराइडिंग क्या है?",
    "options_en": ["Same method in parent and child class", "Different methods with same name", "Method with different parameters", "None of these"],
    "options_hi": ["पेरेंट और चाइल्ड क्लास में समान मेथड", "समान नाम की अलग-अलग मेथड्स", "अलग पैरामीटर्स वाली मेथड", "इनमें से कोई नहीं"],
    "answer_en": "Same method in parent and child class",
    "answer_hi": "पेरेंट और चाइल्ड क्लास में समान मेथड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is the default value of float variable?",
    "question_hi": "float वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0.0f", "0.0", "0", "null"],
    "options_hi": ["0.0f", "0.0", "0", "null"],
    "answer_en": "0.0f",
    "answer_hi": "0.0f",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "Which operator is used for logical AND in Java?",
    "question_hi": "जावा में लॉजिकल AND के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["&&", "||", "!", "&"],
    "options_hi": ["&&", "||", "!", "&"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What is the use of instanceof operator?",
    "question_hi": "instanceof ऑपरेटर का उपयोग क्या है?",
    "options_en": ["To check object type", "To create instance", "To compare objects", "To allocate memory"],
    "options_hi": ["ऑब्जेक्ट टाइप चेक करने के लिए", "इंस्टेंस बनाने के लिए", "ऑब्जेक्ट्स की तुलना करने के लिए", "मेमोरी allocate करने के लिए"],
    "answer_en": "To check object type",
    "answer_hi": "ऑब्जेक्ट टाइप चेक करने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "Which keyword is used to skip current iteration in loop?",
    "question_hi": "लूप में करंट इटरेशन skip करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["break", "continue", "skip", "next"],
    "options_hi": ["break", "continue", "skip", "next"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What is autoboxing in Java?",
    "question_hi": "जावा में ऑटोबॉक्सिंग क्या है?",
    "options_en": ["Converting primitive to object", "Converting object to primitive", "Boxing objects", "Unboxing objects"],
    "options_hi": ["प्रिमिटिव को ऑब्जेक्ट में कन्वर्ट करना", "ऑब्जेक्ट को प्रिमिटिव में कन्वर्ट करना", "ऑब्जेक्ट्स बॉक्सिंग", "ऑब्जेक्ट्स अनबॉक्सिंग"],
    "answer_en": "Converting primitive to object",
    "answer_hi": "प्रिमिटिव को ऑब्जेक्ट में कन्वर्ट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "Which collection maintains insertion order?",
    "question_hi": "कौन सा कलेक्शन इन्सर्शन ऑर्डर मेंटेन करता है?",
    "options_en": ["HashSet", "TreeSet", "LinkedHashSet", "HashMap"],
    "options_hi": ["HashSet", "TreeSet", "LinkedHashSet", "HashMap"],
    "answer_en": "LinkedHashSet",
    "answer_hi": "LinkedHashSet",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is the purpose of transient keyword?",
    "question_hi": "transient कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["To prevent serialization", "To make variable temporary", "To skip variable", "To mark variable"],
    "options_hi": ["सीरियलाइजेशन रोकने के लिए", "वेरिएबल को टेम्पररी बनाने के लिए", "वेरिएबल skip करने के लिए", "वेरिएबल मार्क करने के लिए"],
    "answer_en": "To prevent serialization",
    "answer_hi": "सीरियलाइजेशन रोकने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "Which method is used to get class of an object?",
    "question_hi": "ऑब्जेक्ट की क्लास पाने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["getClass()", "getClassName()", "class()", "getName()"],
    "options_hi": ["getClass()", "getClassName()", "class()", "getName()"],
    "answer_en": "getClass()",
    "answer_hi": "getClass()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "What is Java bytecode?",
    "question_hi": "जावा बाइटकोड क्या है?",
    "options_en": ["Intermediate code", "Machine code", "Source code", "Binary code"],
    "options_hi": ["इंटरमीडिएट कोड", "मशीन कोड", "सोर्स कोड", "बाइनरी कोड"],
    "answer_en": "Intermediate code",
    "answer_hi": "इंटरमीडिएट कोड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "Which is faster: StringBuffer or StringBuilder?",
    "question_hi": "कौन सा फास्टर है: StringBuffer या StringBuilder?",
    "options_en": ["StringBuffer", "StringBuilder", "Both are same", "Depends on situation"],
    "options_hi": ["StringBuffer", "StringBuilder", "दोनों समान हैं", "स्थिति पर निर्भर"],
    "answer_en": "StringBuilder",
    "answer_hi": "StringBuilder",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "What is a wrapper class in Java?",
    "question_hi": "जावा में रैपर क्लास क्या है?",
    "options_en": ["Class that wraps primitive", "Class that wraps objects", "Parent class", "Child class"],
    "options_hi": ["प्रिमिटिव wrap करने वाली क्लास", "ऑब्जेक्ट wrap करने वाली क्लास", "पेरेंट क्लास", "चाइल्ड क्लास"],
    "answer_en": "Class that wraps primitive",
    "answer_hi": "प्रिमिटिव wrap करने वाली क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "What is the use of volatile keyword?",
    "question_hi": "volatile कीवर्ड का उपयोग क्या है?",
    "options_en": ["For thread safety", "For memory visibility", "For synchronization", "All of these"],
    "options_hi": ["थ्रेड सेफ्टी के लिए", "मेमोरी विजिबिलिटी के लिए", "सिंक्रोनाइजेशन के लिए", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "Which of these is a thread-safe collection?",
    "question_hi": "इनमें से कौन थ्रेड-सेफ कलेक्शन है?",
    "options_en": ["ArrayList", "HashMap", "HashTable", "HashSet"],
    "options_hi": ["ArrayList", "HashMap", "HashTable", "HashSet"],
    "answer_en": "HashTable",
    "answer_hi": "HashTable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "What is the use of default method in interface?",
    "question_hi": "इंटरफेस में डिफॉल्ट मेथड का उपयोग क्या है?",
    "options_en": ["To provide default implementation", "To make method optional", "To force implementation", "None of these"],
    "options_hi": ["डिफॉल्ट इम्प्लीमेंटेशन प्रदान करने के लिए", "मेथड ऑप्शनल बनाने के लिए", "इम्प्लीमेंटेशन फोर्स करने के लिए", "इनमें से कोई नहीं"],
    "answer_en": "To provide default implementation",
    "answer_hi": "डिफॉल्ट इम्प्लीमेंटेशन प्रदान करने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is covariant return type in Java?",
    "question_hi": "जावा में कोवेरिएंट रिटर्न टाइप क्या है?",
    "options_en": ["Return subtype in overriding", "Return supertype in overriding", "Same return type", "Different return type"],
    "options_hi": ["ओवरराइडिंग में सबटाइप रिटर्न करना", "ओवरराइडिंग में सुपरटाइप रिटर्न करना", "समान रिटर्न टाइप", "अलग रिटर्न टाइप"],
    "answer_en": "Return subtype in overriding",
    "answer_hi": "ओवरराइडिंग में सबटाइप रिटर्न करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "Which annotation is used to override method?",
    "question_hi": "मेथड ओवरराइड करने के लिए कौन सा एनोटेशन उपयोग होता है?",
    "options_en": ["@Override", "@Overwrite", "@Overload", "@Implement"],
    "options_hi": ["@Override", "@Overwrite", "@Overload", "@Implement"],
    "answer_en": "@Override",
    "answer_hi": "@Override",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is the purpose of assert keyword?",
    "question_hi": "assert कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["For debugging", "For testing", "For validation", "All of these"],
    "options_hi": ["डीबगिंग के लिए", "टेस्टिंग के लिए", "वैलिडेशन के लिए", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "Which method is called first when Java program starts?",
    "question_hi": "जब जावा प्रोग्राम स्टार्ट होता है तो पहले कौन सी मेथड कॉल होती है?",
    "options_en": ["init()", "start()", "main()", "begin()"],
    "options_hi": ["init()", "start()", "main()", "begin()"],
    "answer_en": "main()",
    "answer_hi": "main()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is anonymous class in Java?",
    "question_hi": "जावा में एनोनिमस क्लास क्या है?",
    "options_en": ["Class without name", "Class with random name", "Hidden class", "Secret class"],
    "options_hi": ["बिना नाम की क्लास", "रैंडम नाम वाली क्लास", "छिपी हुई क्लास", "सीक्रेट क्लास"],
    "answer_en": "Class without name",
    "answer_hi": "बिना नाम की क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is lambda expression in Java?",
    "question_hi": "जावा में लैम्बडा एक्सप्रेशन क्या है?",
    "options_en": ["Anonymous function", "Named function", "Method reference", "Function object"],
    "options_hi": ["एनोनिमस फंक्शन", "नामित फंक्शन", "मेथड रेफरेंस", "फंक्शन ऑब्जेक्ट"],
    "answer_en": "Anonymous function",
    "answer_hi": "एनोनिमस फंक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "Which of these is a functional interface?",
    "question_hi": "इनमें से कौन फंक्शनल इंटरफेस है?",
    "options_en": ["Runnable", "Comparator", "Callable", "All of these"],
    "options_hi": ["Runnable", "Comparator", "Callable", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is stream API in Java?",
    "question_hi": "जावा में स्ट्रीम API क्या है?",
    "options_en": ["For processing collections", "For I/O operations", "For networking", "For GUI"],
    "options_hi": ["कलेक्शन्स प्रोसेसिंग के लिए", "I/O ऑपरेशन्स के लिए", "नेटवर्किंग के लिए", "GUI के लिए"],
    "answer_en": "For processing collections",
    "answer_hi": "कलेक्शन्स प्रोसेसिंग के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "Which of these is a terminal operation in streams?",
    "question_hi": "इनमें से कौन स्ट्रीम्स में टर्मिनल ऑपरेशन है?",
    "options_en": ["filter()", "map()", "collect()", "sorted()"],
    "options_hi": ["filter()", "map()", "collect()", "sorted()"],
    "answer_en": "collect()",
    "answer_hi": "collect()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is Optional class in Java?",
    "question_hi": "जावा में Optional क्लास क्या है?",
    "options_en": ["To avoid null checks", "To handle null values", "To wrap optional values", "All of these"],
    "options_hi": ["null चेक्स से बचने के लिए", "null वैल्यूज हैंडल करने के लिए", "ऑप्शनल वैल्यूज wrap करने के लिए", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is diamond problem in Java?",
    "question_hi": "जावा में डायमंड प्रॉब्लम क्या है?",
    "options_en": ["Multiple inheritance issue", "Diamond operator issue", "Interface conflict", "Method conflict"],
    "options_hi": ["मल्टीपल इनहेरिटेंस समस्या", "डायमंड ऑपरेटर समस्या", "इंटरफेस कन्फ्लिक्ट", "मेथड कन्फ्लिक्ट"],
    "answer_en": "Multiple inheritance issue",
    "answer_hi": "मल्टीपल इनहेरिटेंस समस्या",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "What is the use of var keyword in Java?",
    "question_hi": "जावा में var कीवर्ड का उपयोग क्या है?",
    "options_en": ["For type inference", "For variable declaration", "For dynamic typing", "For generic types"],
    "options_hi": ["टाइप इन्फेरेंस के लिए", "वेरिएबल डिक्लेरेशन के लिए", "डायनामिक टाइपिंग के लिए", "जेनेरिक टाइप्स के लिए"],
    "answer_en": "For type inference",
    "answer_hi": "टाइप इन्फेरेंस के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "What is module system in Java?",
    "question_hi": "जावा में मॉड्यूल सिस्टम क्या है?",
    "options_en": ["For modular programming", "For packaging", "For dependency management", "All of these"],
    "options_hi": ["मॉड्यूलर प्रोग्रामिंग के लिए", "पैकेजिंग के लिए", "डिपेंडेंसी मैनेजमेंट के लिए", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 50
  }
];

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