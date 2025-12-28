 
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
    "num": 201,
    "question_en": "Which of these is used for 'Java Management Extensions' (JMX) monitoring?",
    "question_hi": "'Java Management Extensions' (JMX) मॉनिटरिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["MBeans", "MXBeans", "Both", "None"],
    "options_hi": ["MBeans", "MXBeans", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 201
  },
  {
    "num": 202,
    "question_en": "What is the purpose of 'Java Compiler API'?",
    "question_hi": "'Java Compiler API' का उद्देश्य क्या है?",
    "options_en": ["Programmatic compilation of Java code", "Compiler access", "API compilation", "Code compilation"],
    "options_hi": ["Java कोड की प्रोग्रामेटिक कंपाइलेशन", "कंपाइलर एक्सेस", "API कंपाइलेशन", "कोड कंपाइलेशन"],
    "answer_en": "Programmatic compilation of Java code",
    "answer_hi": "Java कोड की प्रोग्रामेटिक कंपाइलेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 202
  },
  {
    "num": 203,
    "question_en": "Which of these is used for 'Java Tree API'?",
    "question_hi": "'Java Tree API' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Abstract Syntax Tree manipulation", "Tree structures", "API trees", "Syntax trees"],
    "options_hi": ["एब्सट्रैक्ट सिंटैक्स ट्री मैनिपुलेशन", "ट्री स्ट्रक्चर्स", "API ट्रीज", "सिंटैक्स ट्रीज"],
    "answer_en": "Abstract Syntax Tree manipulation",
    "answer_hi": "एब्सट्रैक्ट सिंटैक्स ट्री मैनिपुलेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 203
  },
  {
    "num": 204,
    "question_en": "What is the purpose of 'Java Architecture for XML Binding' (JAXB)?",
    "question_hi": "'Java Architecture for XML Binding' (JAXB) का उद्देश्य क्या है?",
    "options_en": ["XML-Java object mapping", "XML binding", "Java XML", "Binding XML"],
    "options_hi": ["XML-Java ऑब्जेक्ट मैपिंग", "XML बाइंडिंग", "Java XML", "बाइंडिंग XML"],
    "answer_en": "XML-Java object mapping",
    "answer_hi": "XML-Java ऑब्जेक्ट मैपिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 204
  },
  {
    "num": 205,
    "question_en": "Which of these is used for 'Java API for XML Processing' (JAXP)?",
    "question_hi": "'Java API for XML Processing' (JAXP) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["XML parsing and transformation", "XML processing", "Java XML", "Processing XML"],
    "options_hi": ["XML पार्सिंग और ट्रांसफॉर्मेशन", "XML प्रोसेसिंग", "Java XML", "प्रोसेसिंग XML"],
    "answer_en": "XML parsing and transformation",
    "answer_hi": "XML पार्सिंग और ट्रांसफॉर्मेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 205
  },
  {
    "num": 206,
    "question_en": "What is the purpose of 'Java API for JSON Processing' (JSON-P)?",
    "question_hi": "'Java API for JSON Processing' (JSON-P) का उद्देश्य क्या है?",
    "options_en": ["JSON parsing and generation", "JSON processing", "Java JSON", "Processing JSON"],
    "options_hi": ["JSON पार्सिंग और जेनरेशन", "JSON प्रोसेसिंग", "Java JSON", "प्रोसेसिंग JSON"],
    "answer_en": "JSON parsing and generation",
    "answer_hi": "JSON पार्सिंग और जेनरेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 206
  },
  {
    "num": 207,
    "question_en": "Which of these is used for 'Java API for WebSocket'?",
    "question_hi": "'Java API for WebSocket' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["WebSocket communication", "WebSocket API", "Java WebSocket", "Communication WebSocket"],
    "options_hi": ["WebSocket कम्युनिकेशन", "WebSocket API", "Java WebSocket", "कम्युनिकेशन WebSocket"],
    "answer_en": "WebSocket communication",
    "answer_hi": "WebSocket कम्युनिकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 207
  },
  {
    "num": 208,
    "question_en": "What is the purpose of 'Java API for RESTful Services' (JAX-RS)?",
    "question_hi": "'Java API for RESTful Services' (JAX-RS) का उद्देश्य क्या है?",
    "options_en": ["RESTful web services development", "REST API", "Java REST", "Services REST"],
    "options_hi": ["RESTful वेब सर्विसेज डेवलपमेंट", "REST API", "Java REST", "सर्विसेज REST"],
    "answer_en": "RESTful web services development",
    "answer_hi": "RESTful वेब सर्विसेज डेवलपमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 208
  },
  {
    "num": 209,
    "question_en": "Which of these is used for 'Java Transaction API' (JTA)?",
    "question_hi": "'Java Transaction API' (JTA) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Distributed transaction management", "Transaction API", "Java transaction", "Management transaction"],
    "options_hi": ["डिस्ट्रीब्यूटेड ट्रांजैक्शन मैनेजमेंट", "ट्रांजैक्शन API", "Java ट्रांजैक्शन", "मैनेजमेंट ट्रांजैक्शन"],
    "answer_en": "Distributed transaction management",
    "answer_hi": "डिस्ट्रीब्यूटेड ट्रांजैक्शन मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 209
  },
  {
    "num": 210,
    "question_en": "What is the purpose of 'Java Persistence API' (JPA)?",
    "question_hi": "'Java Persistence API' (JPA) का उद्देश्य क्या है?",
    "options_en": ["Object-relational mapping standard", "Persistence API", "Java persistence", "Mapping persistence"],
    "options_hi": ["ऑब्जेक्ट-रिलेशनल मैपिंग स्टैंडर्ड", "पर्सिस्टेंस API", "Java पर्सिस्टेंस", "मैपिंग पर्सिस्टेंस"],
    "answer_en": "Object-relational mapping standard",
    "answer_hi": "ऑब्जेक्ट-रिलेशनल मैपिंग स्टैंडर्ड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 210
  },
  {
    "num": 211,
    "question_en": "Which of these is used for 'Java Message Service' (JMS)?",
    "question_hi": "'Java Message Service' (JMS) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Messaging between applications", "Message service", "Java messaging", "Service messaging"],
    "options_hi": ["एप्लिकेशन्स के बीच मैसेजिंग", "मैसेज सर्विस", "Java मैसेजिंग", "सर्विस मैसेजिंग"],
    "answer_en": "Messaging between applications",
    "answer_hi": "एप्लिकेशन्स के बीच मैसेजिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 211
  },
  {
    "num": 212,
    "question_en": "What is the purpose of 'Java Authentication and Authorization Service' (JAAS)?",
    "question_hi": "'Java Authentication and Authorization Service' (JAAS) का उद्देश्य क्या है?",
    "options_en": ["Security authentication and authorization", "Authentication service", "Java security", "Authorization service"],
    "options_hi": ["सिक्योरिटी ऑथेंटिकेशन और ऑथोराइजेशन", "ऑथेंटिकेशन सर्विस", "Java सिक्योरिटी", "ऑथोराइजेशन सर्विस"],
    "answer_en": "Security authentication and authorization",
    "answer_hi": "सिक्योरिटी ऑथेंटिकेशन और ऑथोराइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 212
  },
  {
    "num": 213,
    "question_en": "Which of these is used for 'Java Cryptography Extension' (JCE)?",
    "question_hi": "'Java Cryptography Extension' (JCE) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Cryptography framework", "Cryptography extension", "Java crypto", "Extension crypto"],
    "options_hi": ["क्रिप्टोग्राफी फ्रेमवर्क", "क्रिप्टोग्राफी एक्सटेंशन", "Java क्रिप्टो", "एक्सटेंशन क्रिप्टो"],
    "answer_en": "Cryptography framework",
    "answer_hi": "क्रिप्टोग्राफी फ्रेमवर्क",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 213
  },
  {
    "num": 214,
    "question_en": "What is the purpose of 'Java Secure Socket Extension' (JSSE)?",
    "question_hi": "'Java Secure Socket Extension' (JSSE) का उद्देश्य क्या है?",
    "options_en": ["SSL/TLS implementation", "Secure sockets", "Java security", "Socket security"],
    "options_hi": ["SSL/TLS इम्प्लीमेंटेशन", "सिक्योर सॉकेट्स", "Java सिक्योरिटी", "सॉकेट सिक्योरिटी"],
    "answer_en": "SSL/TLS implementation",
    "answer_hi": "SSL/TLS इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 214
  },
  {
    "num": 215,
    "question_en": "Which of these is used for 'Java Naming and Directory Interface' (JNDI)?",
    "question_hi": "'Java Naming and Directory Interface' (JNDI) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Naming and directory services", "Naming interface", "Java naming", "Directory interface"],
    "options_hi": ["नेमिंग और डायरेक्टरी सर्विसेज", "नेमिंग इंटरफेस", "Java नेमिंग", "डायरेक्टरी इंटरफेस"],
    "answer_en": "Naming and directory services",
    "answer_hi": "नेमिंग और डायरेक्टरी सर्विसेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 215
  },
  {
    "num": 216,
    "question_en": "What is the purpose of 'Java Database Connectivity' (JDBC)?",
    "question_hi": "'Java Database Connectivity' (JDBC) का उद्देश्य क्या है?",
    "options_en": ["Database connectivity API", "Database connection", "Java database", "Connectivity database"],
    "options_hi": ["डेटाबेस कनेक्टिविटी API", "डेटाबेस कनेक्शन", "Java डेटाबेस", "कनेक्टिविटी डेटाबेस"],
    "answer_en": "Database connectivity API",
    "answer_hi": "डेटाबेस कनेक्टिविटी API",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 216
  },
  {
    "num": 217,
    "question_en": "Which of these is used for 'Java Remote Method Invocation' (RMI)?",
    "question_hi": "'Java Remote Method Invocation' (RMI) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Distributed object communication", "Remote invocation", "Java remote", "Method remote"],
    "options_hi": ["डिस्ट्रीब्यूटेड ऑब्जेक्ट कम्युनिकेशन", "रिमोट इनवोकेशन", "Java रिमोट", "मेथड रिमोट"],
    "answer_en": "Distributed object communication",
    "answer_hi": "डिस्ट्रीब्यूटेड ऑब्जेक्ट कम्युनिकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 217
  },
  {
    "num": 218,
    "question_en": "What is the purpose of 'Java Native Interface' (JNI)?",
    "question_hi": "'Java Native Interface' (JNI) का उद्देश्य क्या है?",
    "options_en": ["Native method integration", "Native interface", "Java native", "Interface native"],
    "options_hi": ["नेटिव मेथड इंटीग्रेशन", "नेटिव इंटरफेस", "Java नेटिव", "इंटरफेस नेटिव"],
    "answer_en": "Native method integration",
    "answer_hi": "नेटिव मेथड इंटीग्रेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 218
  },
  {
    "num": 219,
    "question_en": "Which of these is used for 'Java Virtual Machine Tool Interface' (JVMTI)?",
    "question_hi": "'Java Virtual Machine Tool Interface' (JVMTI) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["JVM tool interface for profiling/debugging", "VM tool interface", "Java tool interface", "Tool interface"],
    "options_hi": ["प्रोफाइलिंग/डिबगिंग के लिए JVM टूल इंटरफेस", "VM टूल इंटरफेस", "Java टूल इंटरफेस", "टूल इंटरफेस"],
    "answer_en": "JVM tool interface for profiling/debugging",
    "answer_hi": "प्रोफाइलिंग/डिबगिंग के लिए JVM टूल इंटरफेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 219
  },
  {
    "num": 220,
    "question_en": "What is the purpose of 'Java Platform Debugger Architecture' (JPDA)?",
    "question_hi": "'Java Platform Debugger Architecture' (JPDA) का उद्देश्य क्या है?",
    "options_en": ["Debugging infrastructure", "Debugger architecture", "Java debugger", "Platform debugger"],
    "options_hi": ["डिबगिंग इंफ्रास्ट्रक्चर", "डिबगर आर्किटेक्चर", "Java डिबगर", "प्लेटफॉर्म डिबगर"],
    "answer_en": "Debugging infrastructure",
    "answer_hi": "डिबगिंग इंफ्रास्ट्रक्चर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 220
  },
  {
    "num": 221,
    "question_en": "Which of these is used for 'Java Flight Recorder' (JFR)?",
    "question_hi": "'Java Flight Recorder' (JFR) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Low-overhead event collection", "Flight recording", "Java recording", "Event recording"],
    "options_hi": ["लो-ओवरहेड इवेंट कलेक्शन", "फ्लाइट रिकॉर्डिंग", "Java रिकॉर्डिंग", "इवेंट रिकॉर्डिंग"],
    "answer_en": "Low-overhead event collection",
    "answer_hi": "लो-ओवरहेड इवेंट कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 221
  },
  {
    "num": 222,
    "question_en": "What is the purpose of 'Java Mission Control' (JMC)?",
    "question_hi": "'Java Mission Control' (JMC) का उद्देश्य क्या है?",
    "options_en": ["Monitoring and management tool", "Mission control", "Java monitoring", "Control monitoring"],
    "options_hi": ["मॉनिटरिंग और मैनेजमेंट टूल", "मिशन कंट्रोल", "Java मॉनिटरिंग", "कंट्रोल मॉनिटरिंग"],
    "answer_en": "Monitoring and management tool",
    "answer_hi": "मॉनिटरिंग और मैनेजमेंट टूल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 222
  },
  {
    "num": 223,
    "question_en": "Which of these is used for 'Java VisualVM'?",
    "question_hi": "'Java VisualVM' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Visual monitoring tool", "Visual VM", "Java visual", "VM visual"],
    "options_hi": ["विजुअल मॉनिटरिंग टूल", "विजुअल VM", "Java विजुअल", "VM विजुअल"],
    "answer_en": "Visual monitoring tool",
    "answer_hi": "विजुअल मॉनिटरिंग टूल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 223
  },
  {
    "num": 224,
    "question_en": "What is the purpose of 'Java Console'?",
    "question_hi": "'Java Console' का उद्देश्य क्या है?",
    "options_en": ["Monitoring and management console", "Java console", "Console monitoring", "Management console"],
    "options_hi": ["मॉनिटरिंग और मैनेजमेंट कंसोल", "Java कंसोल", "कंसोल मॉनिटरिंग", "मैनेजमेंट कंसोल"],
    "answer_en": "Monitoring and management console",
    "answer_hi": "मॉनिटरिंग और मैनेजमेंट कंसोल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 224
  },
  {
    "num": 225,
    "question_en": "Which of these is used for 'Java Profiler'?",
    "question_hi": "'Java Profiler' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Performance profiling tool", "Java profiling", "Profiler tool", "Performance tool"],
    "options_hi": ["परफॉर्मेंस प्रोफाइलिंग टूल", "Java प्रोफाइलिंग", "प्रोफाइलर टूल", "परफॉर्मेंस टूल"],
    "answer_en": "Performance profiling tool",
    "answer_hi": "परफॉर्मेंस प्रोफाइलिंग टूल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 225
  },
  {
    "num": 226,
    "question_en": "What is the purpose of 'Java Heap Analyzer'?",
    "question_hi": "'Java Heap Analyzer' का उद्देश्य क्या है?",
    "options_en": ["Heap memory analysis", "Heap analyzer", "Java heap", "Memory analyzer"],
    "options_hi": ["हीप मेमोरी एनालिसिस", "हीप एनालाइज़र", "Java हीप", "मेमोरी एनालाइज़र"],
    "answer_en": "Heap memory analysis",
    "answer_hi": "हीप मेमोरी एनालिसिस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 226
  },
  {
    "num": 227,
    "question_en": "Which of these is used for 'Java Thread Dump Analyzer'?",
    "question_hi": "'Java Thread Dump Analyzer' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Thread dump analysis", "Thread analyzer", "Java thread", "Dump analyzer"],
    "options_hi": ["थ्रेड डंप एनालिसिस", "थ्रेड एनालाइज़र", "Java थ्रेड", "डंप एनालाइज़र"],
    "answer_en": "Thread dump analysis",
    "answer_hi": "थ्रेड डंप एनालिसिस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 227
  },
  {
    "num": 228,
    "question_en": "What is the purpose of 'Java Garbage Collection Log Analyzer'?",
    "question_hi": "'Java Garbage Collection Log Analyzer' का उद्देश्य क्या है?",
    "options_en": ["GC log analysis", "GC analyzer", "Java GC", "Log analyzer"],
    "options_hi": ["GC लॉग एनालिसिस", "GC एनालाइज़र", "Java GC", "लॉग एनालाइज़र"],
    "answer_en": "GC log analysis",
    "answer_hi": "GC लॉग एनालिसिस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 228
  },
  {
    "num": 229,
    "question_en": "Which of these is used for 'Java Performance Monitoring'?",
    "question_hi": "'Java Performance Monitoring' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Performance metrics collection", "Performance monitoring", "Java performance", "Monitoring performance"],
    "options_hi": ["परफॉर्मेंस मेट्रिक्स कलेक्शन", "परफॉर्मेंस मॉनिटरिंग", "Java परफॉर्मेंस", "मॉनिटरिंग परफॉर्मेंस"],
    "answer_en": "Performance metrics collection",
    "answer_hi": "परफॉर्मेंस मेट्रिक्स कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 229
  },
  {
    "num": 230,
    "question_en": "What is the purpose of 'Java Application Performance Management' (APM)?",
    "question_hi": "'Java Application Performance Management' (APM) का उद्देश्य क्या है?",
    "options_en": ["End-to-end performance monitoring", "Application performance", "Java APM", "Performance management"],
    "options_hi": ["एंड-टू-एंड परफॉर्मेंस मॉनिटरिंग", "एप्लिकेशन परफॉर्मेंस", "Java APM", "परफॉर्मेंस मैनेजमेंट"],
    "answer_en": "End-to-end performance monitoring",
    "answer_hi": "एंड-टू-एंड परफॉर्मेंस मॉनिटरिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 230
  },
  {
    "num": 231,
    "question_en": "Which of these is used for 'Java Distributed Tracing'?",
    "question_hi": "'Java Distributed Tracing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Request tracing across services", "Distributed tracing", "Java tracing", "Tracing distributed"],
    "options_hi": ["सर्विसेज के बीच रिक्वेस्ट ट्रेसिंग", "डिस्ट्रीब्यूटेड ट्रेसिंग", "Java ट्रेसिंग", "ट्रेसिंग डिस्ट्रीब्यूटेड"],
    "answer_en": "Request tracing across services",
    "answer_hi": "सर्विसेज के बीच रिक्वेस्ट ट्रेसिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 231
  },
  {
    "num": 232,
    "question_en": "What is the purpose of 'Java Logging Frameworks'?",
    "question_hi": "'Java Logging Frameworks' का उद्देश्य क्या है?",
    "options_en": ["Application logging", "Logging frameworks", "Java logging", "Frameworks logging"],
    "options_hi": ["एप्लिकेशन लॉगिंग", "लॉगिंग फ्रेमवर्क्स", "Java लॉगिंग", "फ्रेमवर्क्स लॉगिंग"],
    "answer_en": "Application logging",
    "answer_hi": "एप्लिकेशन लॉगिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 232
  },
  {
    "num": 233,
    "question_en": "Which of these is used for 'Java Configuration Management'?",
    "question_hi": "'Java Configuration Management' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Externalized configuration", "Configuration management", "Java configuration", "Management configuration"],
    "options_hi": ["एक्सटर्नलाइज्ड कॉन्फिगरेशन", "कॉन्फिगरेशन मैनेजमेंट", "Java कॉन्फिगरेशन", "मैनेजमेंट कॉन्फिगरेशन"],
    "answer_en": "Externalized configuration",
    "answer_hi": "एक्सटर्नलाइज्ड कॉन्फिगरेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 233
  },
  {
    "num": 234,
    "question_en": "What is the purpose of 'Java Feature Flags'?",
    "question_hi": "'Java Feature Flags' का उद्देश्य क्या है?",
    "options_en": ["Feature toggles for releases", "Feature flags", "Java features", "Flags features"],
    "options_hi": ["रिलीजेज के लिए फीचर टॉगल्स", "फीचर फ्लैग्स", "Java फीचर्स", "फ्लैग्स फीचर्स"],
    "answer_en": "Feature toggles for releases",
    "answer_hi": "रिलीजेज के लिए फीचर टॉगल्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 234
  },
  {
    "num": 235,
    "question_en": "Which of these is used for 'Java A/B Testing'?",
    "question_hi": "'Java A/B Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Experiment framework", "A/B testing", "Java testing", "Experiment testing"],
    "options_hi": ["एक्सपेरिमेंट फ्रेमवर्क", "A/B टेस्टिंग", "Java टेस्टिंग", "एक्सपेरिमेंट टेस्टिंग"],
    "answer_en": "Experiment framework",
    "answer_hi": "एक्सपेरिमेंट फ्रेमवर्क",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 235
  },
  {
    "num": 236,
    "question_en": "What is the purpose of 'Java Feature Management'?",
    "question_hi": "'Java Feature Management' का उद्देश्य क्या है?",
    "options_en": ["Dynamic feature control", "Feature management", "Java features", "Management features"],
    "options_hi": ["डायनामिक फीचर कंट्रोल", "फीचर मैनेजमेंट", "Java फीचर्स", "मैनेजमेंट फीचर्स"],
    "answer_en": "Dynamic feature control",
    "answer_hi": "डायनामिक फीचर कंट्रोल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 236
  },
  {
    "num": 237,
    "question_en": "Which of these is used for 'Java Rate Limiting'?",
    "question_hi": "'Java Rate Limiting' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Request throttling", "Rate limiting", "Java rate", "Limiting rate"],
    "options_hi": ["रिक्वेस्ट थ्रॉटलिंग", "रेट लिमिटिंग", "Java रेट", "लिमिटिंग रेट"],
    "answer_en": "Request throttling",
    "answer_hi": "रिक्वेस्ट थ्रॉटलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 237
  },
  {
    "num": 238,
    "question_en": "What is the purpose of 'Java Circuit Breaker' implementation?",
    "question_hi": "'Java Circuit Breaker' इम्प्लीमेंटेशन का उद्देश्य क्या है?",
    "options_en": ["Failure protection pattern", "Circuit breaker", "Java circuit", "Breaker circuit"],
    "options_hi": ["फेल्योर प्रोटेक्शन पैटर्न", "सर्किट ब्रेकर", "Java सर्किट", "ब्रेकर सर्किट"],
    "answer_en": "Failure protection pattern",
    "answer_hi": "फेल्योर प्रोटेक्शन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 238
  },
  {
    "num": 239,
    "question_en": "Which of these is used for 'Java Retry Pattern'?",
    "question_hi": "'Java Retry Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Automatic retry on failures", "Retry pattern", "Java retry", "Pattern retry"],
    "options_hi": ["फेल्योर्स पर ऑटोमैटिक रिट्राई", "रिट्राई पैटर्न", "Java रिट्राई", "पैटर्न रिट्राई"],
    "answer_en": "Automatic retry on failures",
    "answer_hi": "फेल्योर्स पर ऑटोमैटिक रिट्राई",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 239
  },
  {
    "num": 240,
    "question_en": "What is the purpose of 'Java Bulkhead Pattern'?",
    "question_hi": "'Java Bulkhead Pattern' का उद्देश्य क्या है?",
    "options_en": ["Resource isolation pattern", "Bulkhead pattern", "Java bulkhead", "Pattern bulkhead"],
    "options_hi": ["रिसोर्स आइसोलेशन पैटर्न", "बल्कहेड पैटर्न", "Java बल्कहेड", "पैटर्न बल्कहेड"],
    "answer_en": "Resource isolation pattern",
    "answer_hi": "रिसोर्स आइसोलेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 240
  },
  {
    "num": 241,
    "question_en": "Which of these is used for 'Java Caching Patterns'?",
    "question_hi": "'Java Caching Patterns' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Cache-aside, read-through, write-through", "Caching patterns", "Java caching", "Patterns caching"],
    "options_hi": ["कैश-एसाइड, रीड-थ्रू, राइट-थ्रू", "कैशिंग पैटर्न्स", "Java कैशिंग", "पैटर्न्स कैशिंग"],
    "answer_en": "Cache-aside, read-through, write-through",
    "answer_hi": "कैश-एसाइड, रीड-थ्रू, राइट-थ्रू",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 241
  },
  {
    "num": 242,
    "question_en": "What is the purpose of 'Java API Gateway Pattern'?",
    "question_hi": "'Java API Gateway Pattern' का उद्देश्य क्या है?",
    "options_en": ["Single entry point for APIs", "API gateway", "Java API", "Gateway pattern"],
    "options_hi": ["APIs के लिए सिंगल एंट्री पॉइंट", "API गेटवे", "Java API", "गेटवे पैटर्न"],
    "answer_en": "Single entry point for APIs",
    "answer_hi": "APIs के लिए सिंगल एंट्री पॉइंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 242
  },
  {
    "num": 243,
    "question_en": "Which of these is used for 'Java Service Mesh'?",
    "question_hi": "'Java Service Mesh' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Istio, Linkerd", "Service mesh", "Java service", "Mesh service"],
    "options_hi": ["Istio, Linkerd", "सर्विस मेश", "Java सर्विस", "मेश सर्विस"],
    "answer_en": "Istio, Linkerd",
    "answer_hi": "Istio, Linkerd",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 243
  },
  {
    "num": 244,
    "question_en": "What is the purpose of 'Java Event Sourcing'?",
    "question_hi": "'Java Event Sourcing' का उद्देश्य क्या है?",
    "options_en": ["State changes as event sequence", "Event sourcing", "Java events", "Sourcing events"],
    "options_hi": ["इवेंट सीक्वेंस के रूप में स्टेट चेंजेस", "इवेंट सोर्सिंग", "Java इवेंट्स", "सोर्सिंग इवेंट्स"],
    "answer_en": "State changes as event sequence",
    "answer_hi": "इवेंट सीक्वेंस के रूप में स्टेट चेंजेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 244
  },
  {
    "num": 245,
    "question_en": "Which of these is used for 'Java CQRS' (Command Query Responsibility Segregation)?",
    "question_hi": "'Java CQRS' (Command Query Responsibility Segregation) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Separate read and write models", "CQRS pattern", "Java CQRS", "Segregation CQRS"],
    "options_hi": ["अलग रीड और राइट मॉडल्स", "CQRS पैटर्न", "Java CQRS", "सेग्रीगेशन CQRS"],
    "answer_en": "Separate read and write models",
    "answer_hi": "अलग रीड और राइट मॉडल्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 245
  },
  {
    "num": 246,
    "question_en": "What is the purpose of 'Java Saga Pattern'?",
    "question_hi": "'Java Saga Pattern' का उद्देश्य क्या है?",
    "options_en": ["Distributed transaction management", "Saga pattern", "Java saga", "Pattern saga"],
    "options_hi": ["डिस्ट्रीब्यूटेड ट्रांजैक्शन मैनेजमेंट", "सागा पैटर्न", "Java सागा", "पैटर्न सागा"],
    "answer_en": "Distributed transaction management",
    "answer_hi": "डिस्ट्रीब्यूटेड ट्रांजैक्शन मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 246
  },
  {
    "num": 247,
    "question_en": "Which of these is used for 'Java Outbox Pattern'?",
    "question_hi": "'Java Outbox Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Reliable event publishing", "Outbox pattern", "Java outbox", "Pattern outbox"],
    "options_hi": ["रिलायेबल इवेंट पब्लिशिंग", "आउटबॉक्स पैटर्न", "Java आउटबॉक्स", "पैटर्न आउटबॉक्स"],
    "answer_en": "Reliable event publishing",
    "answer_hi": "रिलायेबल इवेंट पब्लिशिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 247
  },
  {
    "num": 248,
    "question_en": "What is the purpose of 'Java Inbox Pattern'?",
    "question_hi": "'Java Inbox Pattern' का उद्देश्य क्या है?",
    "options_en": ["Reliable event consumption", "Inbox pattern", "Java inbox", "Pattern inbox"],
    "options_hi": ["रिलायेबल इवेंट कंजम्प्शन", "इनबॉक्स पैटर्न", "Java इनबॉक्स", "पैटर्न इनबॉक्स"],
    "answer_en": "Reliable event consumption",
    "answer_hi": "रिलायेबल इवेंट कंजम्प्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 248
  },
  {
    "num": 249,
    "question_en": "Which of these is used for 'Java Domain-Driven Design' (DDD)?",
    "question_hi": "'Java Domain-Driven Design' (DDD) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Domain-centric design approach", "DDD pattern", "Java DDD", "Design DDD"],
    "options_hi": ["डोमेन-सेंट्रिक डिज़ाइन एप्रोच", "DDD पैटर्न", "Java DDD", "डिज़ाइन DDD"],
    "answer_en": "Domain-centric design approach",
    "answer_hi": "डोमेन-सेंट्रिक डिज़ाइन एप्रोच",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 249
  },
  {
    "num": 250,
    "question_en": "What is the purpose of 'Java Test-Driven Development' (TDD)?",
    "question_hi": "'Java Test-Driven Development' (TDD) का उद्देश्य क्या है?",
    "options_en": ["Test-first development approach", "TDD methodology", "Java TDD", "Development TDD"],
    "options_hi": ["टेस्ट-फर्स्ट डेवलपमेंट एप्रोच", "TDD मेथोडोलॉजी", "Java TDD", "डेवलपमेंट TDD"],
    "answer_en": "Test-first development approach",
    "answer_hi": "टेस्ट-फर्स्ट डेवलपमेंट एप्रोच",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 250
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