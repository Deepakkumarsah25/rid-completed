 
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
    "num": 101,
    "question_en": "Which method is used to create a shallow copy of an object?",
    "question_hi": "ऑब्जेक्ट की शैलो कॉपी बनाने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["clone()", "copy()", "duplicate()", "replicate()"],
    "options_hi": ["clone()", "copy()", "duplicate()", "replicate()"],
    "answer_en": "clone()",
    "answer_hi": "clone()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 101
  },
  {
    "num": 102,
    "question_en": "What is the purpose of the 'strictfp' keyword in Java?",
    "question_hi": "Java में 'strictfp' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["For strict floating-point calculations", "For strict type checking", "For strict memory management", "For strict exception handling"],
    "options_hi": ["स्ट्रिक्ट फ्लोटिंग-पॉइंट कैलकुलेशन के लिए", "स्ट्रिक्ट टाइप चेकिंग के लिए", "स्ट्रिक्ट मेमोरी मैनेजमेंट के लिए", "स्ट्रिक्ट एक्सेप्शन हैंडलिंग के लिए"],
    "answer_en": "For strict floating-point calculations",
    "answer_hi": "स्ट्रिक्ट फ्लोटिंग-पॉइंट कैलकुलेशन के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 102
  },
  {
    "num": 103,
    "question_en": "Which of these is used to handle deadlock situations?",
    "question_hi": "डेडलॉक सिचुएशन्स हैंडल करने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Thread ordering", "Lock timeout", "Deadlock detection", "All of these"],
    "options_hi": ["थ्रेड ऑर्डरिंग", "लॉक टाइमआउट", "डेडलॉक डिटेक्शन", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 103
  },
  {
    "num": 104,
    "question_en": "What is the purpose of the 'native' keyword in Java?",
    "question_hi": "Java में 'native' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["To indicate methods implemented in other languages", "To create native threads", "For native memory allocation", "For native type variables"],
    "options_hi": ["अन्य भाषाओं में इम्प्लीमेंटेड मेथड्स इंडिकेट करने के लिए", "नेटिव थ्रेड्स बनाने के लिए", "नेटिव मेमोरी एलोकेशन के लिए", "नेटिव टाइप वेरिएबल्स के लिए"],
    "answer_en": "To indicate methods implemented in other languages",
    "answer_hi": "अन्य भाषाओं में इम्प्लीमेंटेड मेथड्स इंडिकेट करने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 104
  },
  {
    "num": 105,
    "question_en": "Which of these is used for lazy initialization?",
    "question_hi": "लेज़ी इनिशियलाइज़ेशन के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Singleton pattern", "Double-checked locking", "Initialization-on-demand holder", "All of these"],
    "options_hi": ["सिंगलटन पैटर्न", "डबल-चेक्ड लॉकिंग", "इनिशियलाइज़ेशन-ऑन-डिमांड होल्डर", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 105
  },
  {
    "num": 106,
    "question_en": "What is the purpose of the 'Bridge' design pattern?",
    "question_hi": "'Bridge' डिज़ाइन पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Decouple abstraction from implementation", "Create object families", "Add responsibilities dynamically", "Define algorithm skeleton"],
    "options_hi": ["एब्सट्रैक्शन को इम्प्लीमेंटेशन से डिकपल करना", "ऑब्जेक्ट फैमिलीज बनाना", "रिस्पॉन्सिबिलिटीज डायनामिकली ऐड करना", "एल्गोरिदम स्केलेटन डिफाइन करना"],
    "answer_en": "Decouple abstraction from implementation",
    "answer_hi": "एब्सट्रैक्शन को इम्प्लीमेंटेशन से डिकपल करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 106
  },
  {
    "num": 107,
    "question_en": "Which of these is a behavioral design pattern?",
    "question_hi": "निम्नलिखित में से कौन सा बिहेवियरल डिज़ाइन पैटर्न है?",
    "options_en": ["Observer", "Factory", "Singleton", "Adapter"],
    "options_hi": ["ऑब्जर्वर", "फैक्टरी", "सिंगलटन", "अडैप्टर"],
    "answer_en": "Observer",
    "answer_hi": "ऑब्जर्वर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 107
  },
  {
    "num": 108,
    "question_en": "What is the purpose of 'CountDownLatch' in concurrency?",
    "question_hi": "कनकरेंसी में 'CountDownLatch' का उद्देश्य क्या है?",
    "options_en": ["Allow threads to wait until set of operations complete", "Count active threads", "Limit thread creation", "Monitor thread execution"],
    "options_hi": ["थ्रेड्स को ऑपरेशन्स के सेट कम्पलीट होने तक वेट करने देना", "एक्टिव थ्रेड्स काउंट करना", "थ्रेड क्रिएशन लिमिट करना", "थ्रेड एक्ज़ीक्यूशन मॉनिटर करना"],
    "answer_en": "Allow threads to wait until set of operations complete",
    "answer_hi": "थ्रेड्स को ऑपरेशन्स के सेट कम्पलीट होने तक वेट करने देना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 108
  },
  {
    "num": 109,
    "question_en": "Which of these is used for inter-thread communication?",
    "question_hi": "इंटर-थ्रेड कम्युनिकेशन के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["wait() and notify()", "sleep() and yield()", "join() and interrupt()", "start() and run()"],
    "options_hi": ["wait() और notify()", "sleep() और yield()", "join() और interrupt()", "start() और run()"],
    "answer_en": "wait() and notify()",
    "answer_hi": "wait() और notify()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 109
  },
  {
    "num": 110,
    "question_en": "What is the purpose of 'ReentrantLock'?",
    "question_hi": "'ReentrantLock' का उद्देश्य क्या है?",
    "options_en": ["Advanced synchronization with additional features", "Basic thread locking", "Thread pooling", "Thread scheduling"],
    "options_hi": ["अतिरिक्त फीचर्स के साथ एडवांस्ड सिंक्रोनाइज़ेशन", "बेसिक थ्रेड लॉकिंग", "थ्रेड पूलिंग", "थ्रेड शेड्यूलिंग"],
    "answer_en": "Advanced synchronization with additional features",
    "answer_hi": "अतिरिक्त फीचर्स के साथ एडवांस्ड सिंक्रोनाइज़ेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 110
  },
  {
    "num": 111,
    "question_en": "Which of these is used for thread pooling?",
    "question_hi": "थ्रेड पूलिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["ExecutorService", "ThreadPoolExecutor", "ForkJoinPool", "All of these"],
    "options_hi": ["ExecutorService", "ThreadPoolExecutor", "ForkJoinPool", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 111
  },
  {
    "num": 112,
    "question_en": "What is the purpose of 'Atomic' classes?",
    "question_hi": "'Atomic' क्लासेज का उद्देश्य क्या है?",
    "options_en": ["Thread-safe operations without synchronization", "Atomic bomb simulation", "Memory atomic operations", "Database atomic transactions"],
    "options_hi": ["सिंक्रोनाइज़ेशन के बिना थ्रेड-सेफ ऑपरेशन्स", "एटॉमिक बॉम्ब सिमुलेशन", "मेमोरी एटॉमिक ऑपरेशन्स", "डेटाबेस एटॉमिक ट्रांजैक्शन्स"],
    "answer_en": "Thread-safe operations without synchronization",
    "answer_hi": "सिंक्रोनाइज़ेशन के बिना थ्रेड-सेफ ऑपरेशन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 112
  },
  {
    "num": 113,
    "question_en": "Which of these is used for non-blocking algorithms?",
    "question_hi": "नॉन-ब्लॉकिंग एल्गोरिदम्स के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["CAS (Compare-And-Swap)", "Locks", "Synchronized blocks", "Thread.sleep()"],
    "options_hi": ["CAS (Compare-And-Swap)", "लॉक्स", "सिंक्रोनाइज्ड ब्लॉक्स", "Thread.sleep()"],
    "answer_en": "CAS (Compare-And-Swap)",
    "answer_hi": "CAS (Compare-And-Swap)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 113
  },
  {
    "num": 114,
    "question_en": "What is the purpose of 'Phaser' in concurrency?",
    "question_hi": "कनकरेंसी में 'Phaser' का उद्देश्य क्या है?",
    "options_en": ["Reusable synchronization barrier", "Phase detection", "Frequency measurement", "Signal processing"],
    "options_hi": ["रियूज़ेबल सिंक्रोनाइज़ेशन बैरियर", "फेज़ डिटेक्शन", "फ्रीक्वेंसी मेजरमेंट", "सिग्नल प्रोसेसिंग"],
    "answer_en": "Reusable synchronization barrier",
    "answer_hi": "रियूज़ेबल सिंक्रोनाइज़ेशन बैरियर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 114
  },
  {
    "num": 115,
    "question_en": "Which of these is used for concurrent collections?",
    "question_hi": "कनकरेंट कलेक्शन्स के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["ConcurrentHashMap", "CopyOnWriteArrayList", "BlockingQueue", "All of these"],
    "options_hi": ["ConcurrentHashMap", "CopyOnWriteArrayList", "BlockingQueue", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 115
  },
  {
    "num": 116,
    "question_en": "What is the purpose of 'StampedLock'?",
    "question_hi": "'StampedLock' का उद्देश्य क्या है?",
    "options_en": ["Optimistic locking with version stamps", "Database record locking", "File locking", "Network locking"],
    "options_hi": ["वर्जन स्टैम्प्स के साथ ऑप्टिमिस्टिक लॉकिंग", "डेटाबेस रिकॉर्ड लॉकिंग", "फाइल लॉकिंग", "नेटवर्क लॉकिंग"],
    "answer_en": "Optimistic locking with version stamps",
    "answer_hi": "वर्जन स्टैम्प्स के साथ ऑप्टिमिस्टिक लॉकिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 116
  },
  {
    "num": 117,
    "question_en": "Which of these is used for dependency injection?",
    "question_hi": "डिपेंडेंसी इंजेक्शन के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Spring Framework", "Guice", "CDI", "All of these"],
    "options_hi": ["Spring Framework", "Guice", "CDI", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 117
  },
  {
    "num": 118,
    "question_en": "What is the purpose of AOP (Aspect-Oriented Programming)?",
    "question_hi": "AOP (एस्पेक्ट-ओरिएंटेड प्रोग्रामिंग) का उद्देश्य क्या है?",
    "options_en": ["Cross-cutting concerns separation", "Object-oriented enhancement", "Functional programming", "Procedural programming"],
    "options_hi": ["क्रॉस-कटिंग कन्सर्न्स सेपरेशन", "ऑब्जेक्ट-ओरिएंटेड एनहांसमेंट", "फंक्शनल प्रोग्रामिंग", "प्रोसीजरल प्रोग्रामिंग"],
    "answer_en": "Cross-cutting concerns separation",
    "answer_hi": "क्रॉस-कटिंग कन्सर्न्स सेपरेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 118
  },
  {
    "num": 119,
    "question_en": "Which of these is used for ORM (Object-Relational Mapping)?",
    "question_hi": "ORM (ऑब्जेक्ट-रिलेशनल मैपिंग) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Hibernate", "JPA", "MyBatis", "All of these"],
    "options_hi": ["Hibernate", "JPA", "MyBatis", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 119
  },
  {
    "num": 120,
    "question_en": "What is the purpose of JUnit?",
    "question_hi": "JUnit का उद्देश्य क्या है?",
    "options_en": ["Unit testing framework", "Integration testing", "Performance testing", "Security testing"],
    "options_hi": ["यूनिट टेस्टिंग फ्रेमवर्क", "इंटीग्रेशन टेस्टिंग", "परफॉर्मेंस टेस्टिंग", "सिक्योरिटी टेस्टिंग"],
    "answer_en": "Unit testing framework",
    "answer_hi": "यूनिट टेस्टिंग फ्रेमवर्क",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 120
  },
  {
    "num": 121,
    "question_en": "Which of these is used for mocking in testing?",
    "question_hi": "टेस्टिंग में मॉकिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Mockito", "EasyMock", "PowerMock", "All of these"],
    "options_hi": ["Mockito", "EasyMock", "PowerMock", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 121
  },
  {
    "num": 122,
    "question_en": "What is the purpose of 'Log4j'?",
    "question_hi": "'Log4j' का उद्देश्य क्या है?",
    "options_en": ["Logging framework", "Database framework", "Web framework", "Security framework"],
    "options_hi": ["लॉगिंग फ्रेमवर्क", "डेटाबेस फ्रेमवर्क", "वेब फ्रेमवर्क", "सिक्योरिटी फ्रेमवर्क"],
    "answer_en": "Logging framework",
    "answer_hi": "लॉगिंग फ्रेमवर्क",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 122
  },
  {
    "num": 123,
    "question_en": "Which of these is used for build automation?",
    "question_hi": "बिल्ड ऑटोमेशन के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Maven", "Gradle", "Ant", "All of these"],
    "options_hi": ["Maven", "Gradle", "Ant", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 123
  },
  {
    "num": 124,
    "question_en": "What is the purpose of 'Docker' in Java development?",
    "question_hi": "Java डेवलपमेंट में 'Docker' का उद्देश्य क्या है?",
    "options_en": ["Containerization", "Virtualization", "Cloud computing", "Networking"],
    "options_hi": ["कंटेनराइजेशन", "वर्चुअलाइजेशन", "क्लाउड कंप्यूटिंग", "नेटवर्किंग"],
    "answer_en": "Containerization",
    "answer_hi": "कंटेनराइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 124
  },
  {
    "num": 125,
    "question_en": "Which of these is used for API documentation?",
    "question_hi": "API डॉक्यूमेंटेशन के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Javadoc", "Swagger", "OpenAPI", "All of these"],
    "options_hi": ["Javadoc", "Swagger", "OpenAPI", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 125
  },
  {
    "num": 126,
    "question_en": "What is the purpose of 'JMX' (Java Management Extensions)?",
    "question_hi": "'JMX' (Java Management Extensions) का उद्देश्य क्या है?",
    "options_en": ["Application monitoring and management", "Memory management", "Thread management", "File management"],
    "options_hi": ["एप्लिकेशन मॉनिटरिंग और मैनेजमेंट", "मेमोरी मैनेजमेंट", "थ्रेड मैनेजमेंट", "फाइल मैनेजमेंट"],
    "answer_en": "Application monitoring and management",
    "answer_hi": "एप्लिकेशन मॉनिटरिंग और मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 126
  },
  {
    "num": 127,
    "question_en": "Which of these is used for distributed caching?",
    "question_hi": "डिस्ट्रीब्यूटेड कैशिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Ehcache", "Hazelcast", "Redis", "All of these"],
    "options_hi": ["Ehcache", "Hazelcast", "Redis", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 127
  },
  {
    "num": 128,
    "question_en": "What is the purpose of 'JMS' (Java Message Service)?",
    "question_hi": "'JMS' (Java Message Service) का उद्देश्य क्या है?",
    "options_en": ["Messaging between applications", "Database access", "File access", "Network access"],
    "options_hi": ["एप्लिकेशन्स के बीच मैसेजिंग", "डेटाबेस एक्सेस", "फाइल एक्सेस", "नेटवर्क एक्सेस"],
    "answer_en": "Messaging between applications",
    "answer_hi": "एप्लिकेशन्स के बीच मैसेजिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 128
  },
  {
    "num": 129,
    "question_en": "Which of these is used for web services?",
    "question_hi": "वेब सर्विसेज के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["SOAP", "REST", "Both", "None"],
    "options_hi": ["SOAP", "REST", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 129
  },
  {
    "num": 130,
    "question_en": "What is the purpose of 'JWT' (JSON Web Token)?",
    "question_hi": "'JWT' (JSON Web Token) का उद्देश्य क्या है?",
    "options_en": ["Authentication and authorization", "Data compression", "Encryption", "Serialization"],
    "options_hi": ["ऑथेंटिकेशन और ऑथोराइजेशन", "डेटा कम्प्रेशन", "एन्क्रिप्शन", "सीरियलाइजेशन"],
    "answer_en": "Authentication and authorization",
    "answer_hi": "ऑथेंटिकेशन और ऑथोराइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 130
  },
  {
    "num": 131,
    "question_en": "Which of these is used for microservices architecture?",
    "question_hi": "माइक्रोसर्विसेज आर्किटेक्चर के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Spring Boot", "Micronaut", "Quarkus", "All of these"],
    "options_hi": ["Spring Boot", "Micronaut", "Quarkus", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 131
  },
  {
    "num": 132,
    "question_en": "What is the purpose of 'Kubernetes'?",
    "question_hi": "'Kubernetes' का उद्देश्य क्या है?",
    "options_en": ["Container orchestration", "Container creation", "Container storage", "Container networking"],
    "options_hi": ["कंटेनर ऑर्केस्ट्रेशन", "कंटेनर क्रिएशन", "कंटेनर स्टोरेज", "कंटेनर नेटवर्किंग"],
    "answer_en": "Container orchestration",
    "answer_hi": "कंटेनर ऑर्केस्ट्रेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 132
  },
  {
    "num": 133,
    "question_en": "Which of these is used for reactive programming?",
    "question_hi": "रिएक्टिव प्रोग्रामिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Reactor", "RxJava", "Both", "None"],
    "options_hi": ["Reactor", "RxJava", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 133
  },
  {
    "num": 134,
    "question_en": "What is the purpose of 'GraphQL'?",
    "question_hi": "'GraphQL' का उद्देश्य क्या है?",
    "options_en": ["Flexible API query language", "Database query language", "File query language", "Network query language"],
    "options_hi": ["फ्लेक्सिबल API क्वेरी लैंग्वेज", "डेटाबेस क्वेरी लैंग्वेज", "फाइल क्वेरी लैंग्वेज", "नेटवर्क क्वेरी लैंग्वेज"],
    "answer_en": "Flexible API query language",
    "answer_hi": "फ्लेक्सिबल API क्वेरी लैंग्वेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 134
  },
  {
    "num": 135,
    "question_en": "Which of these is used for API gateway?",
    "question_hi": "API गेटवे के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Spring Cloud Gateway", "Zuul", "Kong", "All of these"],
    "options_hi": ["Spring Cloud Gateway", "Zuul", "Kong", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 135
  },
  {
    "num": 136,
    "question_en": "What is the purpose of 'Circuit Breaker' pattern?",
    "question_hi": "'Circuit Breaker' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Prevent cascading failures", "Break electrical circuits", "Stop application", "Restart system"],
    "options_hi": ["कैस्केडिंग फेल्योर्स प्रिवेंट करना", "इलेक्ट्रिकल सर्किट्स ब्रेक करना", "एप्लिकेशन स्टॉप करना", "सिस्टम रीस्टार्ट करना"],
    "answer_en": "Prevent cascading failures",
    "answer_hi": "कैस्केडिंग फेल्योर्स प्रिवेंट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 136
  },
  {
    "num": 137,
    "question_en": "Which of these is used for service discovery?",
    "question_hi": "सर्विस डिस्कवरी के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Eureka", "Consul", "Zookeeper", "All of these"],
    "options_hi": ["Eureka", "Consul", "Zookeeper", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 137
  },
  {
    "num": 138,
    "question_en": "What is the purpose of 'Elasticsearch'?",
    "question_hi": "'Elasticsearch' का उद्देश्य क्या है?",
    "options_en": ["Search and analytics engine", "Database engine", "Web server", "Application server"],
    "options_hi": ["सर्च और एनालिटिक्स इंजन", "डेटाबेस इंजन", "वेब सर्वर", "एप्लिकेशन सर्वर"],
    "answer_en": "Search and analytics engine",
    "answer_hi": "सर्च और एनालिटिक्स इंजन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 138
  },
  {
    "num": 139,
    "question_en": "Which of these is used for monitoring?",
    "question_hi": "मॉनिटरिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Prometheus", "Grafana", "Both", "None"],
    "options_hi": ["Prometheus", "Grafana", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 139
  },
  {
    "num": 140,
    "question_en": "What is the purpose of 'Jaeger'?",
    "question_hi": "'Jaeger' का उद्देश्य क्या है?",
    "options_en": ["Distributed tracing", "Log aggregation", "Metrics collection", "Alerting"],
    "options_hi": ["डिस्ट्रीब्यूटेड ट्रेसिंग", "लॉग एग्रीगेशन", "मेट्रिक्स कलेक्शन", "अलर्टिंग"],
    "answer_en": "Distributed tracing",
    "answer_hi": "डिस्ट्रीब्यूटेड ट्रेसिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 140
  },
  {
    "num": 141,
    "question_en": "Which of these is used for CI/CD?",
    "question_hi": "CI/CD के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Jenkins", "GitLab CI", "GitHub Actions", "All of these"],
    "options_hi": ["Jenkins", "GitLab CI", "GitHub Actions", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 141
  },
  {
    "num": 142,
    "question_en": "What is the purpose of 'SonarQube'?",
    "question_hi": "'SonarQube' का उद्देश्य क्या है?",
    "options_en": ["Code quality and security", "Code compilation", "Code execution", "Code storage"],
    "options_hi": ["कोड क्वालिटी और सिक्योरिटी", "कोड कंपाइलेशन", "कोड एक्ज़ीक्यूशन", "कोड स्टोरेज"],
    "answer_en": "Code quality and security",
    "answer_hi": "कोड क्वालिटी और सिक्योरिटी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 142
  },
  {
    "num": 143,
    "question_en": "Which of these is used for performance testing?",
    "question_hi": "परफॉर्मेंस टेस्टिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["JMeter", "Gatling", "Both", "None"],
    "options_hi": ["JMeter", "Gatling", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 143
  },
  {
    "num": 144,
    "question_en": "What is the purpose of 'OWASP'?",
    "question_hi": "'OWASP' का उद्देश्य क्या है?",
    "options_en": ["Web application security", "Web application development", "Web application testing", "Web application deployment"],
    "options_hi": ["वेब एप्लिकेशन सिक्योरिटी", "वेब एप्लिकेशन डेवलपमेंट", "वेब एप्लिकेशन टेस्टिंग", "वेब एप्लिकेशन डिप्लॉयमेंट"],
    "answer_en": "Web application security",
    "answer_hi": "वेब एप्लिकेशन सिक्योरिटी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 144
  },
  {
    "num": 145,
    "question_en": "Which of these is used for security scanning?",
    "question_hi": "सिक्योरिटी स्कैनिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Dependency check", "SAST tools", "DAST tools", "All of these"],
    "options_hi": ["डिपेंडेंसी चेक", "SAST टूल्स", "DAST टूल्स", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 145
  },
  {
    "num": 146,
    "question_en": "What is the purpose of 'JShell'?",
    "question_hi": "'JShell' का उद्देश्य क्या है?",
    "options_en": ["REPL (Read-Eval-Print Loop) for Java", "Shell scripting", "Command execution", "File management"],
    "options_hi": ["Java के लिए REPL (Read-Eval-Print Loop)", "शैल स्क्रिप्टिंग", "कमांड एक्ज़ीक्यूशन", "फाइल मैनेजमेंट"],
    "answer_en": "REPL (Read-Eval-Print Loop) for Java",
    "answer_hi": "Java के लिए REPL (Read-Eval-Print Loop)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 146
  },
  {
    "num": 147,
    "question_en": "Which of these is used for modularization (Java 9+)?",
    "question_hi": "मॉड्यूलराइजेशन (Java 9+) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["JPMS (Java Platform Module System)", "Jigsaw", "Both", "None"],
    "options_hi": ["JPMS (Java Platform Module System)", "Jigsaw", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 147
  },
  {
    "num": 148,
    "question_en": "What is the purpose of 'jlink' tool?",
    "question_hi": "'jlink' टूल का उद्देश्य क्या है?",
    "options_en": ["Create custom runtime images", "Link Java files", "Create JAR files", "Create WAR files"],
    "options_hi": ["कस्टम रनटाइम इमेजेस बनाना", "Java फाइल्स लिंक करना", "JAR फाइल्स बनाना", "WAR फाइल्स बनाना"],
    "answer_en": "Create custom runtime images",
    "answer_hi": "कस्टम रनटाइम इमेजेस बनाना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 148
  },
  {
    "num": 149,
    "question_en": "Which of these is used for HTTP/2 client (Java 11+)?",
    "question_hi": "HTTP/2 क्लाइंट (Java 11+) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["HttpClient API", "URLConnection", "HttpURLConnection", "Apache HttpClient"],
    "options_hi": ["HttpClient API", "URLConnection", "HttpURLConnection", "Apache HttpClient"],
    "answer_en": "HttpClient API",
    "answer_hi": "HttpClient API",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 149
  },
  {
    "num": 150,
    "question_en": "What is the purpose of 'Flight Recorder'?",
    "question_hi": "'Flight Recorder' का उद्देश्य क्या है?",
    "options_en": ["Low-overhead data collection for diagnostics", "Flight booking system", "Data recording for flights", "Air traffic control"],
    "options_hi": ["डायग्नोस्टिक्स के लिए लो-ओवरहेड डेटा कलेक्शन", "फ्लाइट बुकिंग सिस्टम", "फ्लाइट्स के लिए डेटा रिकॉर्डिंग", "एयर ट्रैफिक कंट्रोल"],
    "answer_en": "Low-overhead data collection for diagnostics",
    "answer_hi": "डायग्नोस्टिक्स के लिए लो-ओवरहेड डेटा कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 150
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