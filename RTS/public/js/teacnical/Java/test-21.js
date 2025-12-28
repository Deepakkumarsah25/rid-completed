 
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
    "num": 401,
    "question_en": "What is the purpose of 'Java Memory Model' (JMM)?",
    "question_hi": "'Java Memory Model' (JMM) का उद्देश्य क्या है?",
    "options_en": ["Defines how threads interact through memory", "Memory management model", "Java memory", "Model memory"],
    "options_hi": ["थ्रेड्स मेमोरी के माध्यम से कैसे इंटरैक्ट करते हैं डिफाइन करता है", "मेमोरी मैनेजमेंट मॉडल", "Java मेमोरी", "मॉडल मेमोरी"],
    "answer_en": "Defines how threads interact through memory",
    "answer_hi": "थ्रेड्स मेमोरी के माध्यम से कैसे इंटरैक्ट करते हैं डिफाइन करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 401
  },
  {
    "num": 402,
    "question_en": "Which of these is used for 'Java Happens-Before' relationship?",
    "question_hi": "'Java Happens-Before' रिलेशनशिप के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Memory visibility guarantees", "Happens-before relationship", "Java happens", "Relationship happens"],
    "options_hi": ["मेमोरी विजिबिलिटी गारंटीज", "हैपेंस-बिफोर रिलेशनशिप", "Java हैपेंस", "रिलेशनशिप हैपेंस"],
    "answer_en": "Memory visibility guarantees",
    "answer_hi": "मेमोरी विजिबिलिटी गारंटीज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 402
  },
  {
    "num": 403,
    "question_en": "What is the purpose of 'Java Volatile Variable' semantics?",
    "question_hi": "'Java Volatile Variable' सेमेन्टिक्स का उद्देश्य क्या है?",
    "options_en": ["Memory visibility guarantees", "Volatile semantics", "Java volatile", "Semantics volatile"],
    "options_hi": ["मेमोरी विजिबिलिटी गारंटीज", "वोलेटाइल सेमेन्टिक्स", "Java वोलेटाइल", "सेमेन्टिक्स वोलेटाइल"],
    "answer_en": "Memory visibility guarantees",
    "answer_hi": "मेमोरी विजिबिलिटी गारंटीज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 403
  },
  {
    "num": 404,
    "question_en": "Which of these is used for 'Java Synchronized' semantics?",
    "question_hi": "'Java Synchronized' सेमेन्टिक्स के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Mutual exclusion and visibility", "Synchronized semantics", "Java synchronized", "Semantics synchronized"],
    "options_hi": ["म्यूचुअल एक्सक्लूज़न और विजिबिलिटी", "सिंक्रोनाइज्ड सेमेन्टिक्स", "Java सिंक्रोनाइज्ड", "सेमेन्टिक्स सिंक्रोनाइज्ड"],
    "answer_en": "Mutual exclusion and visibility",
    "answer_hi": "म्यूचुअल एक्सक्लूज़न और विजिबिलिटी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 404
  },
  {
    "num": 405,
    "question_en": "What is the purpose of 'Java Final Field' semantics?",
    "question_hi": "'Java Final Field' सेमेन्टिक्स का उद्देश्य क्या है?",
    "options_en": ["Immutable field guarantees", "Final field semantics", "Java final", "Semantics final"],
    "options_hi": ["इम्यूटेबल फील्ड गारंटीज", "फाइनल फील्ड सेमेन्टिक्स", "Java फाइनल", "सेमेन्टिक्स फाइनल"],
    "answer_en": "Immutable field guarantees",
    "answer_hi": "इम्यूटेबल फील्ड गारंटीज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 405
  },
  {
    "num": 406,
    "question_en": "Which of these is used for 'Java Thread-Safe Publication'?",
    "question_hi": "'Java Thread-Safe Publication' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Safe object sharing patterns", "Thread-safe publication", "Java publication", "Publication safe"],
    "options_hi": ["सेफ ऑब्जेक्ट शेयरिंग पैटर्न्स", "थ्रेड-सेफ पब्लिकेशन", "Java पब्लिकेशन", "पब्लिकेशन सेफ"],
    "answer_en": "Safe object sharing patterns",
    "answer_hi": "सेफ ऑब्जेक्ट शेयरिंग पैटर्न्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 406
  },
  {
    "num": 407,
    "question_en": "What is the purpose of 'Java Safe Construction'?",
    "question_hi": "'Java Safe Construction' का उद्देश्य क्या है?",
    "options_en": ["Thread-safe object initialization", "Safe construction", "Java construction", "Construction safe"],
    "options_hi": ["थ्रेड-सेफ ऑब्जेक्ट इनिशियलाइज़ेशन", "सेफ कंस्ट्रक्शन", "Java कंस्ट्रक्शन", "कंस्ट्रक्शन सेफ"],
    "answer_en": "Thread-safe object initialization",
    "answer_hi": "थ्रेड-सेफ ऑब्जेक्ट इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 407
  },
  {
    "num": 408,
    "question_en": "Which of these is used for 'Java Immutable Objects'?",
    "question_hi": "'Java Immutable Objects' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Thread-safe by design objects", "Immutable objects", "Java immutable", "Objects immutable"],
    "options_hi": ["थ्रेड-सेफ बाय डिज़ाइन ऑब्जेक्ट्स", "इम्यूटेबल ऑब्जेक्ट्स", "Java इम्यूटेबल", "ऑब्जेक्ट्स इम्यूटेबल"],
    "answer_en": "Thread-safe by design objects",
    "answer_hi": "थ्रेड-सेफ बाय डिज़ाइन ऑब्जेक्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 408
  },
  {
    "num": 409,
    "question_en": "What is the purpose of 'Java Thread Confinement'?",
    "question_hi": "'Java Thread Confinement' का उद्देश्य क्या है?",
    "options_en": ["Object access restriction to single thread", "Thread confinement", "Java confinement", "Confinement thread"],
    "options_hi": ["सिंगल थ्रेड के लिए ऑब्जेक्ट एक्सेस रिस्ट्रिक्शन", "थ्रेड कनफाइनमेंट", "Java कनफाइनमेंट", "कनफाइनमेंट थ्रेड"],
    "answer_en": "Object access restriction to single thread",
    "answer_hi": "सिंगल थ्रेड के लिए ऑब्जेक्ट एक्सेस रिस्ट्रिक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 409
  },
  {
    "num": 410,
    "question_en": "Which of these is used for 'Java Stack Confinement'?",
    "question_hi": "'Java Stack Confinement' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Local variable thread safety", "Stack confinement", "Java stack", "Confinement stack"],
    "options_hi": ["लोकल वेरिएबल थ्रेड सेफ्टी", "स्टैक कनफाइनमेंट", "Java स्टैक", "कनफाइनमेंट स्टैक"],
    "answer_en": "Local variable thread safety",
    "answer_hi": "लोकल वेरिएबल थ्रेड सेफ्टी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 410
  },
  {
    "num": 411,
    "question_en": "What is the purpose of 'Java ThreadLocal' variables?",
    "question_hi": "'Java ThreadLocal' वेरिएबल्स का उद्देश्य क्या है?",
    "options_en": ["Thread-specific storage", "ThreadLocal variables", "Java threadlocal", "Variables threadlocal"],
    "options_hi": ["थ्रेड-स्पेसिफिक स्टोरेज", "ThreadLocal वेरिएबल्स", "Java threadlocal", "वेरिएबल्स threadlocal"],
    "answer_en": "Thread-specific storage",
    "answer_hi": "थ्रेड-स्पेसिफिक स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 411
  },
  {
    "num": 412,
    "question_en": "Which of these is used for 'Java Ad-Hoc Thread Confinement'?",
    "question_hi": "'Java Ad-Hoc Thread Confinement' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Programmer-managed thread safety", "Ad-hoc confinement", "Java ad-hoc", "Confinement ad-hoc"],
    "options_hi": ["प्रोग्रामर-मैनेज्ड थ्रेड सेफ्टी", "एड-हॉक कनफाइनमेंट", "Java एड-हॉक", "कनफाइनमेंट एड-हॉक"],
    "answer_en": "Programmer-managed thread safety",
    "answer_hi": "प्रोग्रामर-मैनेज्ड थ्रेड सेफ्टी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 412
  },
  {
    "num": 413,
    "question_en": "What is the purpose of 'Java Synchronized Collections'?",
    "question_hi": "'Java Synchronized Collections' का उद्देश्य क्या है?",
    "options_en": ["Thread-safe collection wrappers", "Synchronized collections", "Java synchronized", "Collections synchronized"],
    "options_hi": ["थ्रेड-सेफ कलेक्शन रैपर्स", "सिंक्रोनाइज्ड कलेक्शन्स", "Java सिंक्रोनाइज्ड", "कलेक्शन्स सिंक्रोनाइज्ड"],
    "answer_en": "Thread-safe collection wrappers",
    "answer_hi": "थ्रेड-सेफ कलेक्शन रैपर्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 413
  },
  {
    "num": 414,
    "question_en": "Which of these is used for 'Java Concurrent Collections'?",
    "question_hi": "'Java Concurrent Collections' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Lock-free thread-safe collections", "Concurrent collections", "Java concurrent", "Collections concurrent"],
    "options_hi": ["लॉक-फ्री थ्रेड-सेफ कलेक्शन्स", "कनकरेंट कलेक्शन्स", "Java कनकरेंट", "कलेक्शन्स कनकरेंट"],
    "answer_en": "Lock-free thread-safe collections",
    "answer_hi": "लॉक-फ्री थ्रेड-सेफ कलेक्शन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 414
  },
  {
    "num": 415,
    "question_en": "What is the purpose of 'Java Copy-On-Write Collections'?",
    "question_hi": "'Java Copy-On-Write Collections' का उद्देश्य क्या है?",
    "options_en": ["Immutable snapshot collections", "Copy-on-write collections", "Java copy", "Collections copy"],
    "options_hi": ["इम्यूटेबल स्नैपशॉट कलेक्शन्स", "कॉपी-ऑन-राइट कलेक्शन्स", "Java कॉपी", "कलेक्शन्स कॉपी"],
    "answer_en": "Immutable snapshot collections",
    "answer_hi": "इम्यूटेबल स्नैपशॉट कलेक्शन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 415
  },
  {
    "num": 416,
    "question_en": "Which of these is used for 'Java Blocking Queues'?",
    "question_hi": "'Java Blocking Queues' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Thread coordination queues", "Blocking queues", "Java blocking", "Queues blocking"],
    "options_hi": ["थ्रेड कोऑर्डिनेशन क्यूज़", "ब्लॉकिंग क्यूज़", "Java ब्लॉकिंग", "क्यूज़ ब्लॉकिंग"],
    "answer_en": "Thread coordination queues",
    "answer_hi": "थ्रेड कोऑर्डिनेशन क्यूज़",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 416
  },
  {
    "num": 417,
    "question_en": "What is the purpose of 'Java Non-Blocking Algorithms'?",
    "question_hi": "'Java Non-Blocking Algorithms' का उद्देश्य क्या है?",
    "options_en": ["Lock-free concurrent algorithms", "Non-blocking algorithms", "Java non-blocking", "Algorithms non-blocking"],
    "options_hi": ["लॉक-फ्री कनकरेंट एल्गोरिदम्स", "नॉन-ब्लॉकिंग एल्गोरिदम्स", "Java नॉन-ब्लॉकिंग", "एल्गोरिदम्स नॉन-ब्लॉकिंग"],
    "answer_en": "Lock-free concurrent algorithms",
    "answer_hi": "लॉक-फ्री कनकरेंट एल्गोरिदम्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 417
  },
  {
    "num": 418,
    "question_en": "Which of these is used for 'Java Compare-And-Swap' (CAS)?",
    "question_hi": "'Java Compare-And-Swap' (CAS) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Atomic operation primitive", "Compare-and-swap", "Java CAS", "CAS operation"],
    "options_hi": ["एटॉमिक ऑपरेशन प्रिमिटिव", "कम्पेयर-एंड-स्वैप", "Java CAS", "CAS ऑपरेशन"],
    "answer_en": "Atomic operation primitive",
    "answer_hi": "एटॉमिक ऑपरेशन प्रिमिटिव",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 418
  },
  {
    "num": 419,
    "question_en": "What is the purpose of 'Java Atomic Variables'?",
    "question_hi": "'Java Atomic Variables' का उद्देश्य क्या है?",
    "options_en": ["Lock-free thread-safe variables", "Atomic variables", "Java atomic", "Variables atomic"],
    "options_hi": ["लॉक-फ्री थ्रेड-सेफ वेरिएबल्स", "एटॉमिक वेरिएबल्स", "Java एटॉमिक", "वेरिएबल्स एटॉमिक"],
    "answer_en": "Lock-free thread-safe variables",
    "answer_hi": "लॉक-फ्री थ्रेड-सेफ वेरिएबल्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 419
  },
  {
    "num": 420,
    "question_en": "Which of these is used for 'Java Memory Barriers'?",
    "question_hi": "'Java Memory Barriers' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Memory ordering guarantees", "Memory barriers", "Java barriers", "Barriers memory"],
    "options_hi": ["मेमोरी ऑर्डरिंग गारंटीज", "मेमोरी बैरियर्स", "Java बैरियर्स", "बैरियर्स मेमोरी"],
    "answer_en": "Memory ordering guarantees",
    "answer_hi": "मेमोरी ऑर्डरिंग गारंटीज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 420
  },
  {
    "num": 421,
    "question_en": "What is the purpose of 'Java Class Initialization' safety?",
    "question_hi": "'Java Class Initialization' सेफ्टी का उद्देश्य क्या है?",
    "options_en": ["Thread-safe class loading", "Class initialization safety", "Java initialization", "Safety initialization"],
    "options_hi": ["थ्रेड-सेफ क्लास लोडिंग", "क्लास इनिशियलाइज़ेशन सेफ्टी", "Java इनिशियलाइज़ेशन", "सेफ्टी इनिशियलाइज़ेशन"],
    "answer_en": "Thread-safe class loading",
    "answer_hi": "थ्रेड-सेफ क्लास लोडिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 421
  },
  {
    "num": 422,
    "question_en": "Which of these is used for 'Java Double-Checked Locking'?",
    "question_hi": "'Java Double-Checked Locking' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Lazy initialization pattern", "Double-checked locking", "Java double", "Locking double"],
    "options_hi": ["लेज़ी इनिशियलाइज़ेशन पैटर्न", "डबल-चेक्ड लॉकिंग", "Java डबल", "लॉकिंग डबल"],
    "answer_en": "Lazy initialization pattern",
    "answer_hi": "लेज़ी इनिशियलाइज़ेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 422
  },
  {
    "num": 423,
    "question_en": "What is the purpose of 'Java Initialization-On-Demand Holder'?",
    "question_hi": "'Java Initialization-On-Demand Holder' का उद्देश्य क्या है?",
    "options_en": ["Thread-safe lazy initialization", "Initialization-on-demand holder", "Java holder", "Holder initialization"],
    "options_hi": ["थ्रेड-सेफ लेज़ी इनिशियलाइज़ेशन", "इनिशियलाइज़ेशन-ऑन-डिमांड होल्डर", "Java होल्डर", "होल्डर इनिशियलाइज़ेशन"],
    "answer_en": "Thread-safe lazy initialization",
    "answer_hi": "थ्रेड-सेफ लेज़ी इनिशियलाइज़ेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 423
  },
  {
    "num": 424,
    "question_en": "Which of these is used for 'Java Enum Singleton'?",
    "question_hi": "'Java Enum Singleton' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Thread-safe singleton pattern", "Enum singleton", "Java enum", "Singleton enum"],
    "options_hi": ["थ्रेड-सेफ सिंगलटन पैटर्न", "एनम सिंगलटन", "Java एनम", "सिंगलटन एनम"],
    "answer_en": "Thread-safe singleton pattern",
    "answer_hi": "थ्रेड-सेफ सिंगलटन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 424
  },
  {
    "num": 425,
    "question_en": "What is the purpose of 'Java Thread Pools'?",
    "question_hi": "'Java Thread Pools' का उद्देश्य क्या है?",
    "options_en": ["Thread reuse and management", "Thread pools", "Java pools", "Pools thread"],
    "options_hi": ["थ्रेड रियूज़ और मैनेजमेंट", "थ्रेड पूल्स", "Java पूल्स", "पूल्स थ्रेड"],
    "answer_en": "Thread reuse and management",
    "answer_hi": "थ्रेड रियूज़ और मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 425
  },
  {
    "num": 426,
    "question_en": "Which of these is used for 'Java Work Stealing Pools'?",
    "question_hi": "'Java Work Stealing Pools' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["ForkJoinPool implementation", "Work stealing pools", "Java stealing", "Pools stealing"],
    "options_hi": ["ForkJoinPool इम्प्लीमेंटेशन", "वर्क स्टीलिंग पूल्स", "Java स्टीलिंग", "पूल्स स्टीलिंग"],
    "answer_en": "ForkJoinPool implementation",
    "answer_hi": "ForkJoinPool इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 426
  },
  {
    "num": 427,
    "question_en": "What is the purpose of 'Java Scheduled Executors'?",
    "question_hi": "'Java Scheduled Executors' का उद्देश्य क्या है?",
    "options_en": ["Timed task execution", "Scheduled executors", "Java scheduled", "Executors scheduled"],
    "options_hi": ["टाइम्ड टास्क एक्ज़ीक्यूशन", "शेड्यूल्ड एक्ज़ीक्यूटर्स", "Java शेड्यूल्ड", "एक्ज़ीक्यूटर्स शेड्यूल्ड"],
    "answer_en": "Timed task execution",
    "answer_hi": "टाइम्ड टास्क एक्ज़ीक्यूशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 427
  },
  {
    "num": 428,
    "question_en": "Which of these is used for 'Java Future and Callable'?",
    "question_hi": "'Java Future and Callable' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Asynchronous result computation", "Future and callable", "Java future", "Callable future"],
    "options_hi": ["एसिंक्रोनस रिजल्ट कम्प्यूटेशन", "फ्यूचर और कॉलएबल", "Java फ्यूचर", "कॉलएबल फ्यूचर"],
    "answer_en": "Asynchronous result computation",
    "answer_hi": "एसिंक्रोनस रिजल्ट कम्प्यूटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 428
  },
  {
    "num": 429,
    "question_en": "What is the purpose of 'Java CompletableFuture'?",
    "question_hi": "'Java CompletableFuture' का उद्देश्य क्या है?",
    "options_en": ["Composable asynchronous programming", "CompletableFuture", "Java completable", "Future completable"],
    "options_hi": ["कम्पोज़ेबल एसिंक्रोनस प्रोग्रामिंग", "CompletableFuture", "Java कम्प्लीटेबल", "फ्यूचर कम्प्लीटेबल"],
    "answer_en": "Composable asynchronous programming",
    "answer_hi": "कम्पोज़ेबल एसिंक्रोनस प्रोग्रामिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 429
  },
  {
    "num": 430,
    "question_en": "Which of these is used for 'Java Fork/Join Framework'?",
    "question_hi": "'Java Fork/Join Framework' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Divide-and-conquer parallelism", "Fork/join framework", "Java fork", "Framework fork"],
    "options_hi": ["डिवाइड-एंड-कॉन्कर पैरललिज्म", "फोर्क/जॉइन फ्रेमवर्क", "Java फोर्क", "फ्रेमवर्क फोर्क"],
    "answer_en": "Divide-and-conquer parallelism",
    "answer_hi": "डिवाइड-एंड-कॉन्कर पैरललिज्म",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 430
  },
  {
    "num": 431,
    "question_en": "What is the purpose of 'Java Parallel Streams'?",
    "question_hi": "'Java Parallel Streams' का उद्देश्य क्या है?",
    "options_en": ["Automatic parallel processing", "Parallel streams", "Java parallel", "Streams parallel"],
    "options_hi": ["ऑटोमैटिक पैरेलल प्रोसेसिंग", "पैरेलल स्ट्रीम्स", "Java पैरेलल", "स्ट्रीम्स पैरेलल"],
    "answer_en": "Automatic parallel processing",
    "answer_hi": "ऑटोमैटिक पैरेलल प्रोसेसिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 431
  },
  {
    "num": 432,
    "question_en": "Which of these is used for 'Java Concurrent Modifications' detection?",
    "question_hi": "'Java Concurrent Modifications' डिटेक्शन के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Fail-fast iterator detection", "Concurrent modifications", "Java concurrent", "Modifications concurrent"],
    "options_hi": ["फेल-फास्ट इटरेटर डिटेक्शन", "कनकरेंट मॉडिफिकेशन्स", "Java कनकरेंट", "मॉडिफिकेशन्स कनकरेंट"],
    "answer_en": "Fail-fast iterator detection",
    "answer_hi": "फेल-फास्ट इटरेटर डिटेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 432
  },
  {
    "num": 433,
    "question_en": "What is the purpose of 'Java Thread Dump' analysis?",
    "question_hi": "'Java Thread Dump' एनालिसिस का उद्देश्य क्या है?",
    "options_en": ["Thread state analysis", "Thread dump analysis", "Java dump", "Analysis dump"],
    "options_hi": ["थ्रेड स्टेट एनालिसिस", "थ्रेड डंप एनालिसिस", "Java डंप", "एनालिसिस डंप"],
    "answer_en": "Thread state analysis",
    "answer_hi": "थ्रेड स्टेट एनालिसिस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 433
  },
  {
    "num": 434,
    "question_en": "Which of these is used for 'Java Heap Dump' analysis?",
    "question_hi": "'Java Heap Dump' एनालिसिस के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Memory usage analysis", "Heap dump analysis", "Java heap", "Analysis heap"],
    "options_hi": ["मेमोरी यूसेज एनालिसिस", "हीप डंप एनालिसिस", "Java हीप", "एनालिसिस हीप"],
    "answer_en": "Memory usage analysis",
    "answer_hi": "मेमोरी यूसेज एनालिसिस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 434
  },
  {
    "num": 435,
    "question_en": "What is the purpose of 'Java Garbage Collection Tuning'?",
    "question_hi": "'Java Garbage Collection Tuning' का उद्देश्य क्या है?",
    "options_en": ["GC performance optimization", "GC tuning", "Java GC", "Tuning GC"],
    "options_hi": ["GC परफॉर्मेंस ऑप्टिमाइजेशन", "GC ट्यूनिंग", "Java GC", "ट्यूनिंग GC"],
    "answer_en": "GC performance optimization",
    "answer_hi": "GC परफॉर्मेंस ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 435
  },
  {
    "num": 436,
    "question_en": "Which of these is used for 'Java Memory Leak Detection'?",
    "question_hi": "'Java Memory Leak Detection' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Unintended object retention detection", "Memory leak detection", "Java leak", "Detection leak"],
    "options_hi": ["अनइन्टेंडेड ऑब्जेक्ट रिटेंशन डिटेक्शन", "मेमोरी लीक डिटेक्शन", "Java लीक", "डिटेक्शन लीक"],
    "answer_en": "Unintended object retention detection",
    "answer_hi": "अनइन्टेंडेड ऑब्जेक्ट रिटेंशन डिटेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 436
  },
  {
    "num": 437,
    "question_en": "What is the purpose of 'Java Profiling Tools'?",
    "question_hi": "'Java Profiling Tools' का उद्देश्य क्या है?",
    "options_en": ["Performance analysis tools", "Profiling tools", "Java profiling", "Tools profiling"],
    "options_hi": ["परफॉर्मेंस एनालिसिस टूल्स", "प्रोफाइलिंग टूल्स", "Java प्रोफाइलिंग", "टूल्स प्रोफाइलिंग"],
    "answer_en": "Performance analysis tools",
    "answer_hi": "परफॉर्मेंस एनालिसिस टूल्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 437
  },
  {
    "num": 438,
    "question_en": "Which of these is used for 'Java Bytecode Instrumentation'?",
    "question_hi": "'Java Bytecode Instrumentation' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Runtime bytecode modification", "Bytecode instrumentation", "Java bytecode", "Instrumentation bytecode"],
    "options_hi": ["रनटाइम बाइटकोड मॉडिफिकेशन", "बाइटकोड इंस्ट्रुमेंटेशन", "Java बाइटकोड", "इंस्ट्रुमेंटेशन बाइटकोड"],
    "answer_en": "Runtime bytecode modification",
    "answer_hi": "रनटाइम बाइटकोड मॉडिफिकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 438
  },
  {
    "num": 439,
    "question_en": "What is the purpose of 'Java Class File Format'?",
    "question_hi": "'Java Class File Format' का उद्देश्य क्या है?",
    "options_en": ["Compiled Java class structure", "Class file format", "Java class", "Format class"],
    "options_hi": ["कंपाइल्ड Java क्लास स्ट्रक्चर", "क्लास फाइल फॉर्मेट", "Java क्लास", "फॉर्मेट क्लास"],
    "answer_en": "Compiled Java class structure",
    "answer_hi": "कंपाइल्ड Java क्लास स्ट्रक्चर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 439
  },
  {
    "num": 440,
    "question_en": "Which of these is used for 'Java Constant Pool'?",
    "question_hi": "'Java Constant Pool' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Class metadata storage", "Constant pool", "Java constant", "Pool constant"],
    "options_hi": ["क्लास मेटाडेटा स्टोरेज", "कॉन्स्टेंट पूल", "Java कॉन्स्टेंट", "पूल कॉन्स्टेंट"],
    "answer_en": "Class metadata storage",
    "answer_hi": "क्लास मेटाडेटा स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 440
  },
  {
    "num": 441,
    "question_en": "What is the purpose of 'Java Bytecode Instructions'?",
    "question_hi": "'Java Bytecode Instructions' का उद्देश्य क्या है?",
    "options_en": ["JVM executable operations", "Bytecode instructions", "Java instructions", "Instructions bytecode"],
    "options_hi": ["JVM एक्ज़ीक्यूटेबल ऑपरेशन्स", "बाइटकोड इंस्ट्रक्शन्स", "Java इंस्ट्रक्शन्स", "इंस्ट्रक्शन्स बाइटकोड"],
    "answer_en": "JVM executable operations",
    "answer_hi": "JVM एक्ज़ीक्यूटेबल ऑपरेशन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 441
  },
  {
    "num": 442,
    "question_en": "Which of these is used for 'Java Stack-Based Execution'?",
    "question_hi": "'Java Stack-Based Execution' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["JVM execution model", "Stack-based execution", "Java stack", "Execution stack"],
    "options_hi": ["JVM एक्ज़ीक्यूशन मॉडल", "स्टैक-बेस्ड एक्ज़ीक्यूशन", "Java स्टैक", "एक्ज़ीक्यूशन स्टैक"],
    "answer_en": "JVM execution model",
    "answer_hi": "JVM एक्ज़ीक्यूशन मॉडल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 442
  },
  {
    "num": 443,
    "question_en": "What is the purpose of 'Java Method Area' in JVM?",
    "question_hi": "JVM में 'Java Method Area' का उद्देश्य क्या है?",
    "options_en": ["Class metadata storage", "Method area", "Java method", "Area method"],
    "options_hi": ["क्लास मेटाडेटा स्टोरेज", "मेथड एरिया", "Java मेथड", "एरिया मेथड"],
    "answer_en": "Class metadata storage",
    "answer_hi": "क्लास मेटाडेटा स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 443
  },
  {
    "num": 444,
    "question_en": "Which of these is used for 'Java Runtime Constant Pool'?",
    "question_hi": "'Java Runtime Constant Pool' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Runtime symbolic references", "Runtime constant pool", "Java runtime", "Pool runtime"],
    "options_hi": ["रनटाइम सिम्बोलिक रेफरेंसेज", "रनटाइम कॉन्स्टेंट पूल", "Java रनटाइम", "पूल रनटाइम"],
    "answer_en": "Runtime symbolic references",
    "answer_hi": "रनटाइम सिम्बोलिक रेफरेंसेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 444
  },
  {
    "num": 445,
    "question_en": "What is the purpose of 'Java Native Method Stack'?",
    "question_hi": "'Java Native Method Stack' का उद्देश्य क्या है?",
    "options_en": ["Native method execution", "Native method stack", "Java native", "Stack native"],
    "options_hi": ["नेटिव मेथड एक्ज़ीक्यूशन", "नेटिव मेथड स्टैक", "Java नेटिव", "स्टैक नेटिव"],
    "answer_en": "Native method execution",
    "answer_hi": "नेटिव मेथड एक्ज़ीक्यूशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 445
  },
  {
    "num": 446,
    "question_en": "Which of these is used for 'Java Program Counter Register'?",
    "question_hi": "'Java Program Counter Register' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Current instruction pointer", "Program counter register", "Java program", "Register program"],
    "options_hi": ["करंट इंस्ट्रक्शन पॉइंटर", "प्रोग्राम काउंटर रजिस्टर", "Java प्रोग्राम", "रजिस्टर प्रोग्राम"],
    "answer_en": "Current instruction pointer",
    "answer_hi": "करंट इंस्ट्रक्शन पॉइंटर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 446
  },
  {
    "num": 447,
    "question_en": "What is the purpose of 'Java Frame' in stack?",
    "question_hi": "स्टैक में 'Java Frame' का उद्देश्य क्या है?",
    "options_en": ["Method invocation context", "Frame in stack", "Java frame", "Stack frame"],
    "options_hi": ["मेथड इनवोकेशन कॉन्टेक्स्ट", "स्टैक में फ्रेम", "Java फ्रेम", "स्टैक फ्रेम"],
    "answer_en": "Method invocation context",
    "answer_hi": "मेथड इनवोकेशन कॉन्टेक्स्ट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 447
  },
  {
    "num": 448,
    "question_en": "Which of these is used for 'Java Operand Stack'?",
    "question_hi": "'Java Operand Stack' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Bytecode operation storage", "Operand stack", "Java operand", "Stack operand"],
    "options_hi": ["बाइटकोड ऑपरेशन स्टोरेज", "ऑपरेंड स्टैक", "Java ऑपरेंड", "स्टैक ऑपरेंड"],
    "answer_en": "Bytecode operation storage",
    "answer_hi": "बाइटकोड ऑपरेशन स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 448
  },
  {
    "num": 449,
    "question_en": "What is the purpose of 'Java Local Variables Array'?",
    "question_hi": "'Java Local Variables Array' का उद्देश्य क्या है?",
    "options_en": ["Method local variable storage", "Local variables array", "Java local", "Array local"],
    "options_hi": ["मेथड लोकल वेरिएबल स्टोरेज", "लोकल वेरिएबल्स एरे", "Java लोकल", "एरे लोकल"],
    "answer_en": "Method local variable storage",
    "answer_hi": "मेथड लोकल वेरिएबल स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 449
  },
  {
    "num": 450,
    "question_en": "Which of these is used for 'Java Dynamic Linking'?",
    "question_hi": "'Java Dynamic Linking' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Runtime symbol resolution", "Dynamic linking", "Java dynamic", "Linking dynamic"],
    "options_hi": ["रनटाइम सिम्बल रेज़ोल्यूशन", "डायनामिक लिंकिंग", "Java डायनामिक", "लिंकिंग डायनामिक"],
    "answer_en": "Runtime symbol resolution",
    "answer_hi": "रनटाइम सिम्बल रेज़ोल्यूशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 450
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