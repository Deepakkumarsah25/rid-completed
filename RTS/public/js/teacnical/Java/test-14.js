 
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
        let questions =[
  {
    "num": 51,
    "question_en": "Which of these methods is used to notify a waiting thread?",
    "question_hi": "वेटिंग थ्रेड को नोटिफाई करने के लिए निम्नलिखित में से किस मेथड का उपयोग किया जाता है?",
    "options_en": ["notify()", "sleep()", "terminate()", "suspend()"],
    "options_hi": ["notify()", "sleep()", "terminate()", "suspend()"],
    "answer_en": "notify()",
    "answer_hi": "notify()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 51
  },
  {
    "num": 52,
    "question_en": "What is the purpose of finally block?",
    "question_hi": "finally ब्लॉक का उद्देश्य क्या है?",
    "options_en": ["To handle exceptions", "To execute code regardless of exception", "To catch exceptions", "To throw exceptions"],
    "options_hi": ["एक्सेप्शन हैंडल करने के लिए", "एक्सेप्शन के बावजूद कोड एक्ज़ीक्यूट करने के लिए", "एक्सेप्शन कैच करने के लिए", "एक्सेप्शन थ्रो करने के लिए"],
    "answer_en": "To execute code regardless of exception",
    "answer_hi": "एक्सेप्शन के बावजूद कोड एक्ज़ीक्यूट करने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 52
  },
  {
    "num": 53,
    "question_en": "Which of these is used to skip current iteration of loop?",
    "question_hi": "लूप की करंट इटरेशन स्किप करने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["break", "continue", "skip", "jump"],
    "options_hi": ["break", "continue", "skip", "jump"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 53
  },
  {
    "num": 54,
    "question_en": "Which collection class allows duplicate elements?",
    "question_hi": "कौन सी कलेक्शन क्लास डुप्लीकेट एलिमेंट्स की अनुमति देती है?",
    "options_en": ["Set", "List", "Map", "Queue"],
    "options_hi": ["Set", "List", "Map", "Queue"],
    "answer_en": "List",
    "answer_hi": "List",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 54
  },
  {
    "num": 55,
    "question_en": "What does JRE stand for?",
    "question_hi": "JRE का पूरा नाम क्या है?",
    "options_en": ["Java Runtime Environment", "Java Runtime Engine", "Java Run Environment", "Java Runtime Extension"],
    "options_hi": ["Java Runtime Environment", "Java Runtime Engine", "Java Run Environment", "Java Runtime Extension"],
    "answer_en": "Java Runtime Environment",
    "answer_hi": "Java Runtime Environment",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 55
  },
  {
    "num": 56,
    "question_en": "Which of these is not a valid access modifier?",
    "question_hi": "निम्नलिखित में से कौन सा वैध एक्सेस मॉडिफायर नहीं है?",
    "options_en": ["public", "private", "protected", "internal"],
    "options_hi": ["public", "private", "protected", "internal"],
    "answer_en": "internal",
    "answer_hi": "internal",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 56
  },
  {
    "num": 57,
    "question_en": "Which method is used to compare two strings?",
    "question_hi": "दो स्ट्रिंग्स को कंपेयर करने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["equals()", "compare()", "==", "same()"],
    "options_hi": ["equals()", "compare()", "==", "same()"],
    "answer_en": "equals()",
    "answer_hi": "equals()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 57
  },
  {
    "num": 58,
    "question_en": "What is the purpose of volatile keyword?",
    "question_hi": "volatile कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["To make variable constant", "To indicate variable can be changed by multiple threads", "To prevent inheritance", "To make method static"],
    "options_hi": ["वेरिएबल को कॉन्स्टेंट बनाने के लिए", "इंगित करने के लिए कि वेरिएबल मल्टीपल थ्रेड्स द्वारा बदला जा सकता है", "इनहेरिटेंस रोकने के लिए", "मेथड को स्टैटिक बनाने के लिए"],
    "answer_en": "To indicate variable can be changed by multiple threads",
    "answer_hi": "इंगित करने के लिए कि वेरिएबल मल्टीपल थ्रेड्स द्वारा बदला जा सकता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 58
  },
  {
    "num": 59,
    "question_en": "Which of these is a checked exception?",
    "question_hi": "निम्नलिखित में से कौन सा चेक्ड एक्सेप्शन है?",
    "options_en": ["RuntimeException", "IOException", "NullPointerException", "ArrayIndexOutOfBoundsException"],
    "options_hi": ["RuntimeException", "IOException", "NullPointerException", "ArrayIndexOutOfBoundsException"],
    "answer_en": "IOException",
    "answer_hi": "IOException",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 59
  },
  {
    "num": 60,
    "question_en": "What is the default value of char?",
    "question_hi": "char का डिफॉल्ट वैल्यू क्या है?",
    "options_en": ["''", "'\\u0000'", "null", "0"],
    "options_hi": ["''", "'\\u0000'", "null", "0"],
    "answer_en": "'\\u0000'",
    "answer_hi": "'\\u0000'",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 60
  },
  {
    "num": 61,
    "question_en": "Which of these is used to iterate over a collection?",
    "question_hi": "कलेक्शन पर इटरेट करने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["for loop", "Iterator", "forEach", "All of these"],
    "options_hi": ["for लूप", "Iterator", "forEach", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 61
  },
  {
    "num": 62,
    "question_en": "What is method signature in Java?",
    "question_hi": "Java में मेथड सिग्नेचर क्या है?",
    "options_en": ["Method name only", "Method name and return type", "Method name and parameters", "Method name, parameters and return type"],
    "options_hi": ["केवल मेथड नाम", "मेथड नाम और रिटर्न टाइप", "मेथड नाम और पैरामीटर्स", "मेथड नाम, पैरामीटर्स और रिटर्न टाइप"],
    "answer_en": "Method name and parameters",
    "answer_hi": "मेथड नाम और पैरामीटर्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 62
  },
  {
    "num": 63,
    "question_en": "Which of these is used to create immutable class?",
    "question_hi": "इम्यूटेबल क्लास बनाने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Make class final", "Make all fields private and final", "Don't provide setter methods", "All of these"],
    "options_hi": ["क्लास को final बनाएं", "सभी फील्ड्स को private और final बनाएं", "सेटर मेथड्स प्रोवाइड न करें", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 63
  },
  {
    "num": 64,
    "question_en": "What is diamond problem in inheritance?",
    "question_hi": "इनहेरिटेंस में डायमंड प्रॉब्लम क्या है?",
    "options_en": ["Multiple inheritance ambiguity", "Single inheritance issue", "Constructor chaining problem", "Method overriding conflict"],
    "options_hi": ["मल्टीपल इनहेरिटेंस एम्बिगुइटी", "सिंगल इनहेरिटेंस इश्यू", "कंस्ट्रक्टर चेनिंग प्रॉब्लम", "मेथड ओवरराइडिंग कॉन्फ्लिक्ट"],
    "answer_en": "Multiple inheritance ambiguity",
    "answer_hi": "मल्टीपल इनहेरिटेंस एम्बिगुइटी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 64
  },
  {
    "num": 65,
    "question_en": "Which of these is a functional interface?",
    "question_hi": "निम्नलिखित में से कौन सा फंक्शनल इंटरफेस है?",
    "options_en": ["Runnable", "Comparator", "Callable", "All of these"],
    "options_hi": ["Runnable", "Comparator", "Callable", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 65
  },
  {
    "num": 66,
    "question_en": "What is autoboxing in Java?",
    "question_hi": "Java में ऑटोबॉक्सिंग क्या है?",
    "options_en": ["Automatic conversion of primitive to wrapper", "Automatic conversion of wrapper to primitive", "Automatic garbage collection", "Automatic memory allocation"],
    "options_hi": ["प्रिमिटिव से रैपर का ऑटोमैटिक कन्वर्जन", "रैपर से प्रिमिटिव का ऑटोमैटिक कन्वर्जन", "ऑटोमैटिक गार्बेज कलेक्शन", "ऑटोमैटिक मेमोरी एलोकेशन"],
    "answer_en": "Automatic conversion of primitive to wrapper",
    "answer_hi": "प्रिमिटिव से रैपर का ऑटोमैटिक कन्वर्जन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 66
  },
  {
    "num": 67,
    "question_en": "Which of these statements about abstract class is true?",
    "question_hi": "एब्सट्रैक्ट क्लास के बारे में निम्नलिखित में से कौन सा स्टेटमेंट सही है?",
    "options_en": ["Can be instantiated", "Can have constructor", "Can be final", "All methods must be abstract"],
    "options_hi": ["इंस्टेंटिएट किया जा सकता है", "कंस्ट्रक्टर हो सकता है", "final हो सकता है", "सभी मेथड्स एब्सट्रैक्ट होने चाहिए"],
    "answer_en": "Can have constructor",
    "answer_hi": "कंस्ट्रक्टर हो सकता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 67
  },
  {
    "num": 68,
    "question_en": "What is the purpose of System.gc() method?",
    "question_hi": "System.gc() मेथड का उद्देश्य क्या है?",
    "options_en": ["Force garbage collection", "Suggest garbage collection", "Disable garbage collection", "Monitor garbage collection"],
    "options_hi": ["गार्बेज कलेक्शन फोर्स करना", "गार्बेज कलेक्शन सजेस्ट करना", "गार्बेज कलेक्शन डिसेबल करना", "गार्बेज कलेक्शन मॉनिटर करना"],
    "answer_en": "Suggest garbage collection",
    "answer_hi": "गार्बेज कलेक्शन सजेस्ट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 68
  },
  {
    "num": 69,
    "question_en": "Which of these is used for type-safe collections?",
    "question_hi": "टाइप-सेफ कलेक्शन्स के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Arrays", "Generics", "Wildcards", "Varargs"],
    "options_hi": ["एरेज", "जेनेरिक्स", "वाइल्डकार्ड्स", "वेरार्ग्स"],
    "answer_en": "Generics",
    "answer_hi": "जेनेरिक्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 69
  },
  {
    "num": 70,
    "question_en": "What is covariant return type?",
    "question_hi": "कोवेरिएंट रिटर्न टाइप क्या है?",
    "options_en": ["Same return type in overriding", "Subclass return type in overriding", "Superclass return type in overriding", "No return type in overriding"],
    "options_hi": ["ओवरराइडिंग में समान रिटर्न टाइप", "ओवरराइडिंग में सबक्लास रिटर्न टाइप", "ओवरराइडिंग में सुपरक्लास रिटर्न टाइप", "ओवरराइडिंग में कोई रिटर्न टाइप नहीं"],
    "answer_en": "Subclass return type in overriding",
    "answer_hi": "ओवरराइडिंग में सबक्लास रिटर्न टाइप",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 70
  },
  {
    "num": 71,
    "question_en": "Which of these is used to create daemon thread?",
    "question_hi": "डेमन थ्रेड बनाने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["setDaemon(true)", "setDaemonThread()", "makeDaemon()", "daemonize()"],
    "options_hi": ["setDaemon(true)", "setDaemonThread()", "makeDaemon()", "daemonize()"],
    "answer_en": "setDaemon(true)",
    "answer_hi": "setDaemon(true)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 71
  },
  {
    "num": 72,
    "question_en": "What is the purpose of enum in Java?",
    "question_hi": "Java में enum का उद्देश्य क्या है?",
    "options_en": ["To define constants", "To create collections", "To handle exceptions", "To create threads"],
    "options_hi": ["कॉन्स्टेंट्स डिफाइन करने के लिए", "कलेक्शन्स बनाने के लिए", "एक्सेप्शन हैंडल करने के लिए", "थ्रेड्स बनाने के लिए"],
    "answer_en": "To define constants",
    "answer_hi": "कॉन्स्टेंट्स डिफाइन करने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 72
  },
  {
    "num": 73,
    "question_en": "Which of these is used for deep cloning?",
    "question_hi": "डीप क्लोनिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["clone() method", "Copy constructor", "Serialization", "All of these"],
    "options_hi": ["clone() मेथड", "कॉपी कंस्ट्रक्टर", "सीरियलाइजेशन", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 73
  },
  {
    "num": 74,
    "question_en": "What is composition in OOP?",
    "question_hi": "OOP में कंपोज़िशन क्या है?",
    "options_en": ["Has-a relationship", "Is-a relationship", "Uses-a relationship", "Contains-a relationship"],
    "options_hi": ["Has-a रिलेशनशिप", "Is-a रिलेशनशिप", "Uses-a रिलेशनशिप", "Contains-a रिलेशनशिप"],
    "answer_en": "Has-a relationship",
    "answer_hi": "Has-a रिलेशनशिप",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 74
  },
  {
    "num": 75,
    "question_en": "Which of these is used for method reference?",
    "question_hi": "मेथड रेफरेंस के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": [":: operator", "-> operator", "=> operator", "== operator"],
    "options_hi": [":: ऑपरेटर", "-> ऑपरेटर", "=> ऑपरेटर", "== ऑपरेटर"],
    "answer_en": ":: operator",
    "answer_hi": ":: ऑपरेटर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 75
  },
  {
    "num": 76,
    "question_en": "What is lambda expression?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन क्या है?",
    "options_en": ["Anonymous function", "Named function", "Class method", "Static method"],
    "options_hi": ["अनॉनिमस फंक्शन", "नेम्ड फंक्शन", "क्लास मेथड", "स्टैटिक मेथड"],
    "answer_en": "Anonymous function",
    "answer_hi": "अनॉनिमस फंक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 76
  },
  {
    "num": 77,
    "question_en": "Which of these is a memory area in JVM?",
    "question_hi": "JVM में निम्नलिखित में से कौन सा मेमोरी एरिया है?",
    "options_en": ["Heap", "Stack", "Method Area", "All of these"],
    "options_hi": ["हीप", "स्टैक", "मेथड एरिया", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 77
  },
  {
    "num": 78,
    "question_en": "What is the purpose of transient keyword?",
    "question_hi": "transient कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["To prevent serialization", "To enable serialization", "To make variable static", "To make variable volatile"],
    "options_hi": ["सीरियलाइजेशन रोकने के लिए", "सीरियलाइजेशन एनेबल करने के लिए", "वेरिएबल को स्टैटिक बनाने के लिए", "वेरिएबल को वोलेटाइल बनाने के लिए"],
    "answer_en": "To prevent serialization",
    "answer_hi": "सीरियलाइजेशन रोकने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 78
  },
  {
    "num": 79,
    "question_en": "Which of these is used for internationalization?",
    "question_hi": "इंटरनेशनलाइजेशन के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Locale", "ResourceBundle", "DateFormat", "All of these"],
    "options_hi": ["Locale", "ResourceBundle", "DateFormat", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 79
  },
  {
    "num": 80,
    "question_en": "What is the purpose of assert keyword?",
    "question_hi": "assert कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["For debugging", "For exception handling", "For logging", "For testing"],
    "options_hi": ["डिबगिंग के लिए", "एक्सेप्शन हैंडलिंग के लिए", "लॉगिंग के लिए", "टेस्टिंग के लिए"],
    "answer_en": "For debugging",
    "answer_hi": "डिबगिंग के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 80
  },
  {
    "num": 81,
    "question_en": "Which of these is used to handle null values?",
    "question_hi": "null वैल्यूज हैंडल करने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Optional class", "NullPointerException", "try-catch", "if-else"],
    "options_hi": ["Optional क्लास", "NullPointerException", "try-catch", "if-else"],
    "answer_en": "Optional class",
    "answer_hi": "Optional क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 81
  },
  {
    "num": 82,
    "question_en": "What is the purpose of @Override annotation?",
    "question_hi": "@Override एनोटेशन का उद्देश्य क्या है?",
    "options_en": ["To indicate method overriding", "To improve performance", "To handle exceptions", "To create abstract method"],
    "options_hi": ["मेथड ओवरराइडिंग इंडिकेट करने के लिए", "परफॉर्मेंस इंप्रूव करने के लिए", "एक्सेप्शन हैंडल करने के लिए", "एब्सट्रैक्ट मेथड बनाने के लिए"],
    "answer_en": "To indicate method overriding",
    "answer_hi": "मेथड ओवरराइडिंग इंडिकेट करने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 82
  },
  {
    "num": 83,
    "question_en": "Which of these is used to create stream from collection?",
    "question_hi": "कलेक्शन से स्ट्रीम बनाने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["stream()", "parallelStream()", "Both", "None"],
    "options_hi": ["stream()", "parallelStream()", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 83
  },
  {
    "num": 84,
    "question_en": "What is the purpose of filter() in streams?",
    "question_hi": "स्ट्रीम्स में filter() का उद्देश्य क्या है?",
    "options_en": ["To transform elements", "To filter elements based on condition", "To collect elements", "To sort elements"],
    "options_hi": ["एलिमेंट्स ट्रांसफॉर्म करने के लिए", "कंडीशन के आधार पर एलिमेंट्स फिल्टर करने के लिए", "एलिमेंट्स कलेक्ट करने के लिए", "एलिमेंट्स सॉर्ट करने के लिए"],
    "answer_en": "To filter elements based on condition",
    "answer_hi": "कंडीशन के आधार पर एलिमेंट्स फिल्टर करने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 84
  },
  {
    "num": 85,
    "question_en": "Which of these is a terminal operation in streams?",
    "question_hi": "स्ट्रीम्स में निम्नलिखित में से कौन सा टर्मिनल ऑपरेशन है?",
    "options_en": ["filter()", "map()", "collect()", "sorted()"],
    "options_hi": ["filter()", "map()", "collect()", "sorted()"],
    "answer_en": "collect()",
    "answer_hi": "collect()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 85
  },
  {
    "num": 86,
    "question_en": "What is the purpose of CompletableFuture?",
    "question_hi": "CompletableFuture का उद्देश्य क्या है?",
    "options_en": ["For asynchronous programming", "For file handling", "For database operations", "For GUI programming"],
    "options_hi": ["एसिंक्रोनस प्रोग्रामिंग के लिए", "फाइल हैंडलिंग के लिए", "डेटाबेस ऑपरेशन्स के लिए", "GUI प्रोग्रामिंग के लिए"],
    "answer_en": "For asynchronous programming",
    "answer_hi": "एसिंक्रोनस प्रोग्रामिंग के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 86
  },
  {
    "num": 87,
    "question_en": "Which of these is used to create immutable list?",
    "question_hi": "इम्यूटेबल लिस्ट बनाने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["List.of()", "Arrays.asList()", "new ArrayList()", "new LinkedList()"],
    "options_hi": ["List.of()", "Arrays.asList()", "new ArrayList()", "new LinkedList()"],
    "answer_en": "List.of()",
    "answer_hi": "List.of()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 87
  },
  {
    "num": 88,
    "question_en": "What is the purpose of try-with-resources?",
    "question_hi": "try-with-resources का उद्देश्य क्या है?",
    "options_en": ["Automatic resource management", "Better exception handling", "Faster execution", "Memory optimization"],
    "options_hi": ["ऑटोमैटिक रिसोर्स मैनेजमेंट", "बेहतर एक्सेप्शन हैंडलिंग", "तेज़ एक्ज़ीक्यूशन", "मेमोरी ऑप्टिमाइजेशन"],
    "answer_en": "Automatic resource management",
    "answer_hi": "ऑटोमैटिक रिसोर्स मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 88
  },
  {
    "num": 89,
    "question_en": "Which of these is used for pattern matching?",
    "question_hi": "पैटर्न मैचिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["String.matches()", "Pattern class", "Matcher class", "All of these"],
    "options_hi": ["String.matches()", "Pattern क्लास", "Matcher क्लास", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 89
  },
  {
    "num": 90,
    "question_en": "What is the purpose of var keyword (Java 10+)?",
    "question_hi": "var कीवर्ड (Java 10+) का उद्देश्य क्या है?",
    "options_en": ["Type inference", "Dynamic typing", "Weak typing", "No typing"],
    "options_hi": ["टाइप इनफेरेंस", "डायनामिक टाइपिंग", "वीक टाइपिंग", "नो टाइपिंग"],
    "answer_en": "Type inference",
    "answer_hi": "टाइप इनफेरेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 90
  },
  {
    "num": 91,
    "question_en": "Which of these is a sealed class feature (Java 17+)?",
    "question_hi": "निम्नलिखित में से कौन सील्ड क्लास फीचर (Java 17+) है?",
    "options_en": ["Restricts inheritance", "Allows multiple inheritance", "Prevents instantiation", "Enables dynamic loading"],
    "options_hi": ["इनहेरिटेंस रिस्ट्रिक्ट करता है", "मल्टीपल इनहेरिटेंस की अनुमति देता है", "इंस्टेंटिएशन रोकता है", "डायनामिक लोडिंग एनेबल करता है"],
    "answer_en": "Restricts inheritance",
    "answer_hi": "इनहेरिटेंस रिस्ट्रिक्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 91
  },
  {
    "num": 92,
    "question_en": "What is the purpose of record class (Java 16+)?",
    "question_hi": "record क्लास (Java 16+) का उद्देश्य क्या है?",
    "options_en": ["To create immutable data classes", "To create singleton classes", "To create abstract classes", "To create interface classes"],
    "options_hi": ["इम्यूटेबल डेटा क्लासेज बनाने के लिए", "सिंगलटन क्लासेज बनाने के लिए", "एब्सट्रैक्ट क्लासेज बनाने के लिए", "इंटरफेस क्लासेज बनाने के लिए"],
    "answer_en": "To create immutable data classes",
    "answer_hi": "इम्यूटेबल डेटा क्लासेज बनाने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 92
  },
  {
    "num": 93,
    "question_en": "Which of these is used for switch expression (Java 14+)?",
    "question_hi": "स्विच एक्सप्रेशन (Java 14+) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["yield keyword", "return keyword", "break keyword", "continue keyword"],
    "options_hi": ["yield कीवर्ड", "return कीवर्ड", "break कीवर्ड", "continue कीवर्ड"],
    "answer_en": "yield keyword",
    "answer_hi": "yield कीवर्ड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 93
  },
  {
    "num": 94,
    "question_en": "What is the purpose of text blocks (Java 15+)?",
    "question_hi": "टेक्स्ट ब्लॉक्स (Java 15+) का उद्देश्य क्या है?",
    "options_en": ["Multi-line strings", "Single-line strings", "Binary data", "Encrypted strings"],
    "options_hi": ["मल्टी-लाइन स्ट्रिंग्स", "सिंगल-लाइन स्ट्रिंग्स", "बाइनरी डेटा", "एन्क्रिप्टेड स्ट्रिंग्स"],
    "answer_en": "Multi-line strings",
    "answer_hi": "मल्टी-लाइन स्ट्रिंग्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 94
  },
  {
    "num": 95,
    "question_en": "Which of these is used for pattern matching in switch (Java 21+)?",
    "question_hi": "स्विच में पैटर्न मैचिंग (Java 21+) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["case null", "case String s", "Both", "None"],
    "options_hi": ["case null", "case String s", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 95
  },
  {
    "num": 96,
    "question_en": "What is the purpose of virtual threads (Java 21+)?",
    "question_hi": "वर्चुअल थ्रेड्स (Java 21+) का उद्देश्य क्या है?",
    "options_en": ["Lightweight threads", "Heavyweight threads", "Daemon threads", "System threads"],
    "options_hi": ["लाइटवेट थ्रेड्स", "हेवीवेट थ्रेड्स", "डेमन थ्रेड्स", "सिस्टम थ्रेड्स"],
    "answer_en": "Lightweight threads",
    "answer_hi": "लाइटवेट थ्रेड्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 96
  },
  {
    "num": 97,
    "question_en": "Which of these is used for structured concurrency (Java 21+)?",
    "question_hi": "स्ट्रक्चर्ड कनकरेंसी (Java 21+) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["StructuredTaskScope", "ThreadPool", "ExecutorService", "ForkJoinPool"],
    "options_hi": ["StructuredTaskScope", "ThreadPool", "ExecutorService", "ForkJoinPool"],
    "answer_en": "StructuredTaskScope",
    "answer_hi": "StructuredTaskScope",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 97
  },
  {
    "num": 98,
    "question_en": "What is the purpose of Foreign Function & Memory API (Java 22+)?",
    "question_hi": "फॉरेन फंक्शन & मेमोरी API (Java 22+) का उद्देश्य क्या है?",
    "options_en": ["Interoperability with native code", "Database connectivity", "Network programming", "File handling"],
    "options_hi": ["नेटिव कोड के साथ इंटरऑपरेबिलिटी", "डेटाबेस कनेक्टिविटी", "नेटवर्क प्रोग्रामिंग", "फाइल हैंडलिंग"],
    "answer_en": "Interoperability with native code",
    "answer_hi": "नेटिव कोड के साथ इंटरऑपरेबिलिटी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 98
  },
  {
    "num": 99,
    "question_en": "Which of these is used for vector computation (Java 16+)?",
    "question_hi": "वेक्टर कम्प्यूटेशन (Java 16+) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Vector API", "Stream API", "Parallel API", "Concurrent API"],
    "options_hi": ["Vector API", "Stream API", "Parallel API", "Concurrent API"],
    "answer_en": "Vector API",
    "answer_hi": "Vector API",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 99
  },
  {
    "num": 100,
    "question_en": "What is the purpose of ZGC (Z Garbage Collector)?",
    "question_hi": "ZGC (Z गार्बेज कलेक्टर) का उद्देश्य क्या है?",
    "options_en": ["Low latency garbage collection", "High throughput garbage collection", "Memory compression", "Disk caching"],
    "options_hi": ["लो लेटेंसी गार्बेज कलेक्शन", "हाई थ्रूपुट गार्बेज कलेक्शन", "मेमोरी कम्प्रेशन", "डिस्क कैशिंग"],
    "answer_en": "Low latency garbage collection",
    "answer_hi": "लो लेटेंसी गार्बेज कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 100
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