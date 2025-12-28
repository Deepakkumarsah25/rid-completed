 
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
    "num": 251,
    "question_en": "What is the purpose of 'Java Bean Validation' (JSR 380)?",
    "question_hi": "'Java Bean Validation' (JSR 380) का उद्देश्य क्या है?",
    "options_en": ["Declarative validation for Java beans", "Bean validation", "Java validation", "Validation beans"],
    "options_hi": ["Java बीन्स के लिए डिक्लेरेटिव वैलिडेशन", "बीन वैलिडेशन", "Java वैलिडेशन", "वैलिडेशन बीन्स"],
    "answer_en": "Declarative validation for Java beans",
    "answer_hi": "Java बीन्स के लिए डिक्लेरेटिव वैलिडेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 251
  },
  {
    "num": 252,
    "question_en": "Which of these is used for 'Java Money and Currency API' (JSR 354)?",
    "question_hi": "'Java Money and Currency API' (JSR 354) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Monetary values handling", "Money API", "Java money", "Currency API"],
    "options_hi": ["मॉनेटरी वैल्यूज हैंडलिंग", "मनी API", "Java मनी", "करेंसी API"],
    "answer_en": "Monetary values handling",
    "answer_hi": "मॉनेटरी वैल्यूज हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 252
  },
  {
    "num": 253,
    "question_en": "What is the purpose of 'Java Date and Time API' (JSR 310)?",
    "question_hi": "'Java Date and Time API' (JSR 310) का उद्देश्य क्या है?",
    "options_en": ["Modern date-time handling", "Date API", "Java date", "Time API"],
    "options_hi": ["मॉडर्न डेट-टाइम हैंडलिंग", "डेट API", "Java डेट", "टाइम API"],
    "answer_en": "Modern date-time handling",
    "answer_hi": "मॉडर्न डेट-टाइम हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 253
  },
  {
    "num": 254,
    "question_en": "Which of these is used for 'Java Batch Processing' (JSR 352)?",
    "question_hi": "'Java Batch Processing' (JSR 352) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Batch job processing", "Batch API", "Java batch", "Processing batch"],
    "options_hi": ["बैच जॉब प्रोसेसिंग", "बैच API", "Java बैच", "प्रोसेसिंग बैच"],
    "answer_en": "Batch job processing",
    "answer_hi": "बैच जॉब प्रोसेसिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 254
  },
  {
    "num": 255,
    "question_en": "What is the purpose of 'Java Concurrency Utilities' (JSR 166)?",
    "question_hi": "'Java Concurrency Utilities' (JSR 166) का उद्देश्य क्या है?",
    "options_en": ["Enhanced concurrency tools", "Concurrency utilities", "Java concurrency", "Utilities concurrency"],
    "options_hi": ["एनहांस्ड कनकरेंसी टूल्स", "कनकरेंसी यूटिलिटीज", "Java कनकरेंसी", "यूटिलिटीज कनकरेंसी"],
    "answer_en": "Enhanced concurrency tools",
    "answer_hi": "एनहांस्ड कनकरेंसी टूल्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 255
  },
  {
    "num": 256,
    "question_en": "Which of these is used for 'Java Servlet API' (JSR 340)?",
    "question_hi": "'Java Servlet API' (JSR 340) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Server-side web components", "Servlet API", "Java servlet", "API servlet"],
    "options_hi": ["सर्वर-साइड वेब कंपोनेंट्स", "सर्वलेट API", "Java सर्वलेट", "API सर्वलेट"],
    "answer_en": "Server-side web components",
    "answer_hi": "सर्वर-साइड वेब कंपोनेंट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 256
  },
  {
    "num": 257,
    "question_en": "What is the purpose of 'Java Expression Language' (JSR 341)?",
    "question_hi": "'Java Expression Language' (JSR 341) का उद्देश्य क्या है?",
    "options_en": ["Expression language for web apps", "Expression language", "Java expression", "Language expression"],
    "options_hi": ["वेब ऐप्स के लिए एक्सप्रेशन लैंग्वेज", "एक्सप्रेशन लैंग्वेज", "Java एक्सप्रेशन", "लैंग्वेज एक्सप्रेशन"],
    "answer_en": "Expression language for web apps",
    "answer_hi": "वेब ऐप्स के लिए एक्सप्रेशन लैंग्वेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 257
  },
  {
    "num": 258,
    "question_en": "Which of these is used for 'Java Managed Beans' (JSR 316)?",
    "question_hi": "'Java Managed Beans' (JSR 316) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Container-managed beans", "Managed beans", "Java beans", "Beans managed"],
    "options_hi": ["कंटेनर-मैनेज्ड बीन्स", "मैनेज्ड बीन्स", "Java बीन्स", "बीन्स मैनेज्ड"],
    "answer_en": "Container-managed beans",
    "answer_hi": "कंटेनर-मैनेज्ड बीन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 258
  },
  {
    "num": 259,
    "question_en": "What is the purpose of 'Java Interceptors' (JSR 318)?",
    "question_hi": "'Java Interceptors' (JSR 318) का उद्देश्य क्या है?",
    "options_en": ["AOP-like interception", "Interceptors", "Java interception", "Interception AOP"],
    "options_hi": ["AOP-जैसा इंटरसेप्शन", "इंटरसेप्टर्स", "Java इंटरसेप्शन", "इंटरसेप्शन AOP"],
    "answer_en": "AOP-like interception",
    "answer_hi": "AOP-जैसा इंटरसेप्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 259
  },
  {
    "num": 260,
    "question_en": "Which of these is used for 'Java Dependency Injection' (JSR 330)?",
    "question_hi": "'Java Dependency Injection' (JSR 330) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Standard DI annotations", "Dependency injection", "Java DI", "Injection dependency"],
    "options_hi": ["स्टैंडर्ड DI एनोटेशन्स", "डिपेंडेंसी इंजेक्शन", "Java DI", "इंजेक्शन डिपेंडेंसी"],
    "answer_en": "Standard DI annotations",
    "answer_hi": "स्टैंडर्ड DI एनोटेशन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 260
  },
  {
    "num": 261,
    "question_en": "What is the purpose of 'Java State Management'?",
    "question_hi": "'Java State Management' का उद्देश्य क्या है?",
    "options_en": ["Application state handling", "State management", "Java state", "Management state"],
    "options_hi": ["एप्लिकेशन स्टेट हैंडलिंग", "स्टेट मैनेजमेंट", "Java स्टेट", "मैनेजमेंट स्टेट"],
    "answer_en": "Application state handling",
    "answer_hi": "एप्लिकेशन स्टेट हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 261
  },
  {
    "num": 262,
    "question_en": "Which of these is used for 'Java Session Management'?",
    "question_hi": "'Java Session Management' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["HTTP session handling", "Session management", "Java session", "Management session"],
    "options_hi": ["HTTP सेशन हैंडलिंग", "सेशन मैनेजमेंट", "Java सेशन", "मैनेजमेंट सेशन"],
    "answer_en": "HTTP session handling",
    "answer_hi": "HTTP सेशन हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 262
  },
  {
    "num": 263,
    "question_en": "What is the purpose of 'Java Cookie Management'?",
    "question_hi": "'Java Cookie Management' का उद्देश्य क्या है?",
    "options_en": ["HTTP cookie handling", "Cookie management", "Java cookie", "Management cookie"],
    "options_hi": ["HTTP कुकी हैंडलिंग", "कुकी मैनेजमेंट", "Java कुकी", "मैनेजमेंट कुकी"],
    "answer_en": "HTTP cookie handling",
    "answer_hi": "HTTP कुकी हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 263
  },
  {
    "num": 264,
    "question_en": "Which of these is used for 'Java Header Management'?",
    "question_hi": "'Java Header Management' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["HTTP header handling", "Header management", "Java header", "Management header"],
    "options_hi": ["HTTP हैडर हैंडलिंग", "हैडर मैनेजमेंट", "Java हैडर", "मैनेजमेंट हैडर"],
    "answer_en": "HTTP header handling",
    "answer_hi": "HTTP हैडर हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 264
  },
  {
    "num": 265,
    "question_en": "What is the purpose of 'Java Parameter Management'?",
    "question_hi": "'Java Parameter Management' का उद्देश्य क्या है?",
    "options_en": ["Request parameter handling", "Parameter management", "Java parameter", "Management parameter"],
    "options_hi": ["रिक्वेस्ट पैरामीटर हैंडलिंग", "पैरामीटर मैनेजमेंट", "Java पैरामीटर", "मैनेजमेंट पैरामीटर"],
    "answer_en": "Request parameter handling",
    "answer_hi": "रिक्वेस्ट पैरामीटर हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 265
  },
  {
    "num": 266,
    "question_en": "Which of these is used for 'Java Path Management'?",
    "question_hi": "'Java Path Management' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["URL path handling", "Path management", "Java path", "Management path"],
    "options_hi": ["URL पाथ हैंडलिंग", "पाथ मैनेजमेंट", "Java पाथ", "मैनेजमेंट पाथ"],
    "answer_en": "URL path handling",
    "answer_hi": "URL पाथ हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 266
  },
  {
    "num": 267,
    "question_en": "What is the purpose of 'Java Query Parameter Management'?",
    "question_hi": "'Java Query Parameter Management' का उद्देश्य क्या है?",
    "options_en": ["URL query parameter handling", "Query management", "Java query", "Management query"],
    "options_hi": ["URL क्वेरी पैरामीटर हैंडलिंग", "क्वेरी मैनेजमेंट", "Java क्वेरी", "मैनेजमेंट क्वेरी"],
    "answer_en": "URL query parameter handling",
    "answer_hi": "URL क्वेरी पैरामीटर हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 267
  },
  {
    "num": 268,
    "question_en": "Which of these is used for 'Java Matrix Parameter Management'?",
    "question_hi": "'Java Matrix Parameter Management' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["URL matrix parameter handling", "Matrix management", "Java matrix", "Management matrix"],
    "options_hi": ["URL मैट्रिक्स पैरामीटर हैंडलिंग", "मैट्रिक्स मैनेजमेंट", "Java मैट्रिक्स", "मैनेजमेंट मैट्रिक्स"],
    "answer_en": "URL matrix parameter handling",
    "answer_hi": "URL मैट्रिक्स पैरामीटर हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 268
  },
  {
    "num": 269,
    "question_en": "What is the purpose of 'Java Form Parameter Management'?",
    "question_hi": "'Java Form Parameter Management' का उद्देश्य क्या है?",
    "options_en": ["Form data handling", "Form management", "Java form", "Management form"],
    "options_hi": ["फॉर्म डेटा हैंडलिंग", "फॉर्म मैनेजमेंट", "Java फॉर्म", "मैनेजमेंट फॉर्म"],
    "answer_en": "Form data handling",
    "answer_hi": "फॉर्म डेटा हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 269
  },
  {
    "num": 270,
    "question_en": "Which of these is used for 'Java Multipart Management'?",
    "question_hi": "'Java Multipart Management' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["File upload handling", "Multipart management", "Java multipart", "Management multipart"],
    "options_hi": ["फाइल अपलोड हैंडलिंग", "मल्टीपार्ट मैनेजमेंट", "Java मल्टीपार्ट", "मैनेजमेंट मल्टीपार्ट"],
    "answer_en": "File upload handling",
    "answer_hi": "फाइल अपलोड हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 270
  },
  {
    "num": 271,
    "question_en": "What is the purpose of 'Java Content Negotiation'?",
    "question_hi": "'Java Content Negotiation' का उद्देश्य क्या है?",
    "options_en": ["Response format negotiation", "Content negotiation", "Java content", "Negotiation content"],
    "options_hi": ["रिस्पॉन्स फॉर्मेट नेगोशिएशन", "कंटेंट नेगोशिएशन", "Java कंटेंट", "नेगोशिएशन कंटेंट"],
    "answer_en": "Response format negotiation",
    "answer_hi": "रिस्पॉन्स फॉर्मेट नेगोशिएशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 271
  },
  {
    "num": 272,
    "question_en": "Which of these is used for 'Java Error Handling'?",
    "question_hi": "'Java Error Handling' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Exception mapping and handling", "Error handling", "Java error", "Handling error"],
    "options_hi": ["एक्सेप्शन मैपिंग और हैंडलिंग", "एरर हैंडलिंग", "Java एरर", "हैंडलिंग एरर"],
    "answer_en": "Exception mapping and handling",
    "answer_hi": "एक्सेप्शन मैपिंग और हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 272
  },
  {
    "num": 273,
    "question_en": "What is the purpose of 'Java Response Handling'?",
    "question_hi": "'Java Response Handling' का उद्देश्य क्या है?",
    "options_en": ["HTTP response building", "Response handling", "Java response", "Handling response"],
    "options_hi": ["HTTP रिस्पॉन्स बिल्डिंग", "रिस्पॉन्स हैंडलिंग", "Java रिस्पॉन्स", "हैंडलिंग रिस्पॉन्स"],
    "answer_en": "HTTP response building",
    "answer_hi": "HTTP रिस्पॉन्स बिल्डिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 273
  },
  {
    "num": 274,
    "question_en": "Which of these is used for 'Java Request Handling'?",
    "question_hi": "'Java Request Handling' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["HTTP request processing", "Request handling", "Java request", "Handling request"],
    "options_hi": ["HTTP रिक्वेस्ट प्रोसेसिंग", "रिक्वेस्ट हैंडलिंग", "Java रिक्वेस्ट", "हैंडलिंग रिक्वेस्ट"],
    "answer_en": "HTTP request processing",
    "answer_hi": "HTTP रिक्वेस्ट प्रोसेसिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 274
  },
  {
    "num": 275,
    "question_en": "What is the purpose of 'Java Filter Chain'?",
    "question_hi": "'Java Filter Chain' का उद्देश्य क्या है?",
    "options_en": ["Request/response filtering", "Filter chain", "Java filter", "Chain filter"],
    "options_hi": ["रिक्वेस्ट/रिस्पॉन्स फिल्टरिंग", "फिल्टर चेन", "Java फिल्टर", "चेन फिल्टर"],
    "answer_en": "Request/response filtering",
    "answer_hi": "रिक्वेस्ट/रिस्पॉन्स फिल्टरिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 275
  },
  {
    "num": 276,
    "question_en": "Which of these is used for 'Java Interceptor Chain'?",
    "question_hi": "'Java Interceptor Chain' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Method interception chain", "Interceptor chain", "Java interceptor", "Chain interceptor"],
    "options_hi": ["मेथड इंटरसेप्शन चेन", "इंटरसेप्टर चेन", "Java इंटरसेप्टर", "चेन इंटरसेप्टर"],
    "answer_en": "Method interception chain",
    "answer_hi": "मेथड इंटरसेप्शन चेन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 276
  },
  {
    "num": 277,
    "question_en": "What is the purpose of 'Java Lifecycle Management'?",
    "question_hi": "'Java Lifecycle Management' का उद्देश्य क्या है?",
    "options_en": ["Component lifecycle handling", "Lifecycle management", "Java lifecycle", "Management lifecycle"],
    "options_hi": ["कंपोनेंट लाइफसाइकल हैंडलिंग", "लाइफसाइकल मैनेजमेंट", "Java लाइफसाइकल", "मैनेजमेंट लाइफसाइकल"],
    "answer_en": "Component lifecycle handling",
    "answer_hi": "कंपोनेंट लाइफसाइकल हैंडलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 277
  },
  {
    "num": 278,
    "question_en": "Which of these is used for 'Java Context and Dependency Injection' (CDI)?",
    "question_hi": "'Java Context and Dependency Injection' (CDI) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Contextual DI with scopes", "CDI framework", "Java CDI", "Injection CDI"],
    "options_hi": ["स्कोप्स के साथ कॉन्टेक्स्चुअल DI", "CDI फ्रेमवर्क", "Java CDI", "इंजेक्शन CDI"],
    "answer_en": "Contextual DI with scopes",
    "answer_hi": "स्कोप्स के साथ कॉन्टेक्स्चुअल DI",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 278
  },
  {
    "num": 279,
    "question_en": "What is the purpose of 'Java Events and Observers'?",
    "question_hi": "'Java Events and Observers' का उद्देश्य क्या है?",
    "options_en": ["Event-driven programming", "Events and observers", "Java events", "Observers events"],
    "options_hi": ["इवेंट-ड्रिवेन प्रोग्रामिंग", "इवेंट्स और ऑब्जर्वर्स", "Java इवेंट्स", "ऑब्जर्वर्स इवेंट्स"],
    "answer_en": "Event-driven programming",
    "answer_hi": "इवेंट-ड्रिवेन प्रोग्रामिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 279
  },
  {
    "num": 280,
    "question_en": "Which of these is used for 'Java Decorators'?",
    "question_hi": "'Java Decorators' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Behavior augmentation pattern", "Decorators pattern", "Java decorators", "Pattern decorators"],
    "options_hi": ["बिहेवियर ऑग्मेंटेशन पैटर्न", "डेकोरेटर्स पैटर्न", "Java डेकोरेटर्स", "पैटर्न डेकोरेटर्स"],
    "answer_en": "Behavior augmentation pattern",
    "answer_hi": "बिहेवियर ऑग्मेंटेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 280
  },
  {
    "num": 281,
    "question_en": "What is the purpose of 'Java Stereotypes'?",
    "question_hi": "'Java Stereotypes' का उद्देश्य क्या है?",
    "options_en": ["Meta-annotations for roles", "Stereotypes annotations", "Java stereotypes", "Roles stereotypes"],
    "options_hi": ["रोल्स के लिए मेटा-एनोटेशन्स", "स्टीरियोटाइप्स एनोटेशन्स", "Java स्टीरियोटाइप्स", "रोल्स स्टीरियोटाइप्स"],
    "answer_en": "Meta-annotations for roles",
    "answer_hi": "रोल्स के लिए मेटा-एनोटेशन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 281
  },
  {
    "num": 282,
    "question_en": "Which of these is used for 'Java Alternatives and Specialization'?",
    "question_hi": "'Java Alternatives and Specialization' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Bean selection and override", "Alternatives mechanism", "Java alternatives", "Specialization alternatives"],
    "options_hi": ["बीन सिलेक्शन और ओवरराइड", "अल्टरनेटिव्स मैकेनिज्म", "Java अल्टरनेटिव्स", "स्पेशलाइजेशन अल्टरनेटिव्स"],
    "answer_en": "Bean selection and override",
    "answer_hi": "बीन सिलेक्शन और ओवरराइड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 282
  },
  {
    "num": 283,
    "question_en": "What is the purpose of 'Java Producer Methods'?",
    "question_hi": "'Java Producer Methods' का उद्देश्य क्या है?",
    "options_en": ["Programmatic bean creation", "Producer methods", "Java producer", "Methods producer"],
    "options_hi": ["प्रोग्रामेटिक बीन क्रिएशन", "प्रोड्यूसर मेथड्स", "Java प्रोड्यूसर", "मेथड्स प्रोड्यूसर"],
    "answer_en": "Programmatic bean creation",
    "answer_hi": "प्रोग्रामेटिक बीन क्रिएशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 283
  },
  {
    "num": 284,
    "question_en": "Which of these is used for 'Java Disposer Methods'?",
    "question_hi": "'Java Disposer Methods' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Resource cleanup methods", "Disposer methods", "Java disposer", "Methods disposer"],
    "options_hi": ["रिसोर्स क्लीनअप मेथड्स", "डिस्पोजर मेथड्स", "Java डिस्पोजर", "मेथड्स डिस्पोजर"],
    "answer_en": "Resource cleanup methods",
    "answer_hi": "रिसोर्स क्लीनअप मेथड्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 284
  },
  {
    "num": 285,
    "question_en": "What is the purpose of 'Java Observer Methods'?",
    "question_hi": "'Java Observer Methods' का उद्देश्य क्या है?",
    "options_en": ["Event observer methods", "Observer methods", "Java observer", "Methods observer"],
    "options_hi": ["इवेंट ऑब्जर्वर मेथड्स", "ऑब्जर्वर मेथड्स", "Java ऑब्जर्वर", "मेथड्स ऑब्जर्वर"],
    "answer_en": "Event observer methods",
    "answer_hi": "इवेंट ऑब्जर्वर मेथड्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 285
  },
  {
    "num": 286,
    "question_en": "Which of these is used for 'Java Interceptor Methods'?",
    "question_hi": "'Java Interceptor Methods' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Method interception methods", "Interceptor methods", "Java interceptor", "Methods interceptor"],
    "options_hi": ["मेथड इंटरसेप्शन मेथड्स", "इंटरसेप्टर मेथड्स", "Java इंटरसेप्टर", "मेथड्स इंटरसेप्टर"],
    "answer_en": "Method interception methods",
    "answer_hi": "मेथड इंटरसेप्शन मेथड्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 286
  },
  {
    "num": 287,
    "question_en": "What is the purpose of 'Java Decorator Methods'?",
    "question_hi": "'Java Decorator Methods' का उद्देश्य क्या है?",
    "options_en": ["Behavior decoration methods", "Decorator methods", "Java decorator", "Methods decorator"],
    "options_hi": ["बिहेवियर डेकोरेशन मेथड्स", "डेकोरेटर मेथड्स", "Java डेकोरेटर", "मेथड्स डेकोरेटर"],
    "answer_en": "Behavior decoration methods",
    "answer_hi": "बिहेवियर डेकोरेशन मेथड्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 287
  },
  {
    "num": 288,
    "question_en": "Which of these is used for 'Java Extension Points'?",
    "question_hi": "'Java Extension Points' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["SPI (Service Provider Interface)", "Extension points", "Java extensions", "Points extensions"],
    "options_hi": ["SPI (सर्विस प्रोवाइडर इंटरफेस)", "एक्सटेंशन पॉइंट्स", "Java एक्सटेंशन्स", "पॉइंट्स एक्सटेंशन्स"],
    "answer_en": "SPI (Service Provider Interface)",
    "answer_hi": "SPI (सर्विस प्रोवाइडर इंटरफेस)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 288
  },
  {
    "num": 289,
    "question_en": "What is the purpose of 'Java Service Loader'?",
    "question_hi": "'Java Service Loader' का उद्देश्य क्या है?",
    "options_en": ["SPI implementation loading", "Service loader", "Java service", "Loader service"],
    "options_hi": ["SPI इम्प्लीमेंटेशन लोडिंग", "सर्विस लोडर", "Java सर्विस", "लोडर सर्विस"],
    "answer_en": "SPI implementation loading",
    "answer_hi": "SPI इम्प्लीमेंटेशन लोडिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 289
  },
  {
    "num": 290,
    "question_en": "Which of these is used for 'Java Factory Pattern'?",
    "question_hi": "'Java Factory Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Object creation abstraction", "Factory pattern", "Java factory", "Pattern factory"],
    "options_hi": ["ऑब्जेक्ट क्रिएशन एब्सट्रैक्शन", "फैक्टरी पैटर्न", "Java फैक्टरी", "पैटर्न फैक्टरी"],
    "answer_en": "Object creation abstraction",
    "answer_hi": "ऑब्जेक्ट क्रिएशन एब्सट्रैक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 290
  },
  {
    "num": 291,
    "question_en": "What is the purpose of 'Java Builder Pattern'?",
    "question_hi": "'Java Builder Pattern' का उद्देश्य क्या है?",
    "options_en": ["Stepwise object construction", "Builder pattern", "Java builder", "Pattern builder"],
    "options_hi": ["स्टेपवाइज़ ऑब्जेक्ट कंस्ट्रक्शन", "बिल्डर पैटर्न", "Java बिल्डर", "पैटर्न बिल्डर"],
    "answer_en": "Stepwise object construction",
    "answer_hi": "स्टेपवाइज़ ऑब्जेक्ट कंस्ट्रक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 291
  },
  {
    "num": 292,
    "question_en": "Which of these is used for 'Java Prototype Pattern'?",
    "question_hi": "'Java Prototype Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Object cloning pattern", "Prototype pattern", "Java prototype", "Pattern prototype"],
    "options_hi": ["ऑब्जेक्ट क्लोनिंग पैटर्न", "प्रोटोटाइप पैटर्न", "Java प्रोटोटाइप", "पैटर्न प्रोटोटाइप"],
    "answer_en": "Object cloning pattern",
    "answer_hi": "ऑब्जेक्ट क्लोनिंग पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 292
  },
  {
    "num": 293,
    "question_en": "What is the purpose of 'Java Singleton Pattern'?",
    "question_hi": "'Java Singleton Pattern' का उद्देश्य क्या है?",
    "options_en": ["Single instance pattern", "Singleton pattern", "Java singleton", "Pattern singleton"],
    "options_hi": ["सिंगल इंस्टेंस पैटर्न", "सिंगलटन पैटर्न", "Java सिंगलटन", "पैटर्न सिंगलटन"],
    "answer_en": "Single instance pattern",
    "answer_hi": "सिंगल इंस्टेंस पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 293
  },
  {
    "num": 294,
    "question_en": "Which of these is used for 'Java Adapter Pattern'?",
    "question_hi": "'Java Adapter Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Interface compatibility pattern", "Adapter pattern", "Java adapter", "Pattern adapter"],
    "options_hi": ["इंटरफेस कम्पेटिबिलिटी पैटर्न", "अडैप्टर पैटर्न", "Java अडैप्टर", "पैटर्न अडैप्टर"],
    "answer_en": "Interface compatibility pattern",
    "answer_hi": "इंटरफेस कम्पेटिबिलिटी पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 294
  },
  {
    "num": 295,
    "question_en": "What is the purpose of 'Java Bridge Pattern'?",
    "question_hi": "'Java Bridge Pattern' का उद्देश्य क्या है?",
    "options_en": ["Abstraction-implementation decoupling", "Bridge pattern", "Java bridge", "Pattern bridge"],
    "options_hi": ["एब्सट्रैक्शन-इम्प्लीमेंटेशन डिकपलिंग", "ब्रिज पैटर्न", "Java ब्रिज", "पैटर्न ब्रिज"],
    "answer_en": "Abstraction-implementation decoupling",
    "answer_hi": "एब्सट्रैक्शन-इम्प्लीमेंटेशन डिकपलिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 295
  },
  {
    "num": 296,
    "question_en": "Which of these is used for 'Java Composite Pattern'?",
    "question_hi": "'Java Composite Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Tree structure pattern", "Composite pattern", "Java composite", "Pattern composite"],
    "options_hi": ["ट्री स्ट्रक्चर पैटर्न", "कंपोजिट पैटर्न", "Java कंपोजिट", "पैटर्न कंपोजिट"],
    "answer_en": "Tree structure pattern",
    "answer_hi": "ट्री स्ट्रक्चर पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 296
  },
  {
    "num": 297,
    "question_en": "What is the purpose of 'Java Decorator Pattern'?",
    "question_hi": "'Java Decorator Pattern' का उद्देश्य क्या है?",
    "options_en": ["Dynamic behavior addition", "Decorator pattern", "Java decorator", "Pattern decorator"],
    "options_hi": ["डायनामिक बिहेवियर एडिशन", "डेकोरेटर पैटर्न", "Java डेकोरेटर", "पैटर्न डेकोरेटर"],
    "answer_en": "Dynamic behavior addition",
    "answer_hi": "डायनामिक बिहेवियर एडिशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 297
  },
  {
    "num": 298,
    "question_en": "Which of these is used for 'Java Facade Pattern'?",
    "question_hi": "'Java Facade Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Simplified interface pattern", "Facade pattern", "Java facade", "Pattern facade"],
    "options_hi": ["सिंप्लिफाइड इंटरफेस पैटर्न", "फसाद पैटर्न", "Java फसाद", "पैटर्न फसाद"],
    "answer_en": "Simplified interface pattern",
    "answer_hi": "सिंप्लिफाइड इंटरफेस पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 298
  },
  {
    "num": 299,
    "question_en": "What is the purpose of 'Java Flyweight Pattern'?",
    "question_hi": "'Java Flyweight Pattern' का उद्देश्य क्या है?",
    "options_en": ["Memory optimization pattern", "Flyweight pattern", "Java flyweight", "Pattern flyweight"],
    "options_hi": ["मेमोरी ऑप्टिमाइजेशन पैटर्न", "फ्लाईवेट पैटर्न", "Java फ्लाईवेट", "पैटर्न फ्लाईवेट"],
    "answer_en": "Memory optimization pattern",
    "answer_hi": "मेमोरी ऑप्टिमाइजेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 299
  },
  {
    "num": 300,
    "question_en": "Which of these is used for 'Java Proxy Pattern'?",
    "question_hi": "'Java Proxy Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Object access control pattern", "Proxy pattern", "Java proxy", "Pattern proxy"],
    "options_hi": ["ऑब्जेक्ट एक्सेस कंट्रोल पैटर्न", "प्रॉक्सी पैटर्न", "Java प्रॉक्सी", "पैटर्न प्रॉक्सी"],
    "answer_en": "Object access control pattern",
    "answer_hi": "ऑब्जेक्ट एक्सेस कंट्रोल पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 300
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