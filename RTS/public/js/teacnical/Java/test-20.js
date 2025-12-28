 
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
    "num": 351,
    "question_en": "What is the purpose of 'Java Test Pyramid' concept?",
    "question_hi": "'Java Test Pyramid' कॉन्सेप्ट का उद्देश्य क्या है?",
    "options_en": ["Testing strategy structure", "Test pyramid structure", "Java test", "Pyramid test"],
    "options_hi": ["टेस्टिंग स्ट्रैटेजी स्ट्रक्चर", "टेस्ट पिरामिड स्ट्रक्चर", "Java टेस्ट", "पिरामिड टेस्ट"],
    "answer_en": "Testing strategy structure",
    "answer_hi": "टेस्टिंग स्ट्रैटेजी स्ट्रक्चर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 351
  },
  {
    "num": 352,
    "question_en": "Which of these is used for 'Java Test Doubles'?",
    "question_hi": "'Java Test Doubles' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Test helper objects", "Test doubles", "Java doubles", "Doubles test"],
    "options_hi": ["टेस्ट हेल्पर ऑब्जेक्ट्स", "टेस्ट डबल्स", "Java डबल्स", "डबल्स टेस्ट"],
    "answer_en": "Test helper objects",
    "answer_hi": "टेस्ट हेल्पर ऑब्जेक्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 352
  },
  {
    "num": 353,
    "question_en": "What is the purpose of 'Java Mock Objects'?",
    "question_hi": "'Java Mock Objects' का उद्देश्य क्या है?",
    "options_en": ["Behavior verification objects", "Mock objects", "Java mock", "Objects mock"],
    "options_hi": ["बिहेवियर वेरिफिकेशन ऑब्जेक्ट्स", "मॉक ऑब्जेक्ट्स", "Java मॉक", "ऑब्जेक्ट्स मॉक"],
    "answer_en": "Behavior verification objects",
    "answer_hi": "बिहेवियर वेरिफिकेशन ऑब्जेक्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 353
  },
  {
    "num": 354,
    "question_en": "Which of these is used for 'Java Stub Objects'?",
    "question_hi": "'Java Stub Objects' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Predefined response objects", "Stub objects", "Java stub", "Objects stub"],
    "options_hi": ["प्रीडिफाइंड रिस्पॉन्स ऑब्जेक्ट्स", "स्टब ऑब्जेक्ट्स", "Java स्टब", "ऑब्जेक्ट्स स्टब"],
    "answer_en": "Predefined response objects",
    "answer_hi": "प्रीडिफाइंड रिस्पॉन्स ऑब्जेक्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 354
  },
  {
    "num": 355,
    "question_en": "What is the purpose of 'Java Spy Objects'?",
    "question_hi": "'Java Spy Objects' का उद्देश्य क्या है?",
    "options_en": ["Partial mock objects", "Spy objects", "Java spy", "Objects spy"],
    "options_hi": ["पार्शियल मॉक ऑब्जेक्ट्स", "स्पाई ऑब्जेक्ट्स", "Java स्पाई", "ऑब्जेक्ट्स स्पाई"],
    "answer_en": "Partial mock objects",
    "answer_hi": "पार्शियल मॉक ऑब्जेक्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 355
  },
  {
    "num": 356,
    "question_en": "Which of these is used for 'Java Fake Objects'?",
    "question_hi": "'Java Fake Objects' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Simplified implementation objects", "Fake objects", "Java fake", "Objects fake"],
    "options_hi": ["सिंप्लिफाइड इम्प्लीमेंटेशन ऑब्जेक्ट्स", "फेक ऑब्जेक्ट्स", "Java फेक", "ऑब्जेक्ट्स फेक"],
    "answer_en": "Simplified implementation objects",
    "answer_hi": "सिंप्लिफाइड इम्प्लीमेंटेशन ऑब्जेक्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 356
  },
  {
    "num": 357,
    "question_en": "What is the purpose of 'Java Dummy Objects'?",
    "question_hi": "'Java Dummy Objects' का उद्देश्य क्या है?",
    "options_en": ["Placeholder objects", "Dummy objects", "Java dummy", "Objects dummy"],
    "options_hi": ["प्लेसहोल्डर ऑब्जेक्ट्स", "डमी ऑब्जेक्ट्स", "Java डमी", "ऑब्जेक्ट्स डमी"],
    "answer_en": "Placeholder objects",
    "answer_hi": "प्लेसहोल्डर ऑब्जेक्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 357
  },
  {
    "num": 358,
    "question_en": "Which of these is used for 'Java Test Data Builders'?",
    "question_hi": "'Java Test Data Builders' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Test object creation pattern", "Test data builders", "Java builders", "Builders test"],
    "options_hi": ["टेस्ट ऑब्जेक्ट क्रिएशन पैटर्न", "टेस्ट डेटा बिल्डर्स", "Java बिल्डर्स", "बिल्डर्स टेस्ट"],
    "answer_en": "Test object creation pattern",
    "answer_hi": "टेस्ट ऑब्जेक्ट क्रिएशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 358
  },
  {
    "num": 359,
    "question_en": "What is the purpose of 'Java Object Mother' pattern?",
    "question_hi": "'Java Object Mother' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Test object factory pattern", "Object mother pattern", "Java mother", "Pattern mother"],
    "options_hi": ["टेस्ट ऑब्जेक्ट फैक्टरी पैटर्न", "ऑब्जेक्ट मदर पैटर्न", "Java मदर", "पैटर्न मदर"],
    "answer_en": "Test object factory pattern",
    "answer_hi": "टेस्ट ऑब्जेक्ट फैक्टरी पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 359
  },
  {
    "num": 360,
    "question_en": "Which of these is used for 'Java Test Fixtures'?",
    "question_hi": "'Java Test Fixtures' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Test setup data", "Test fixtures", "Java fixtures", "Fixtures test"],
    "options_hi": ["टेस्ट सेटअप डेटा", "टेस्ट फिक्सचर्स", "Java फिक्सचर्स", "फिक्सचर्स टेस्ट"],
    "answer_en": "Test setup data",
    "answer_hi": "टेस्ट सेटअप डेटा",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 360
  },
  {
    "num": 361,
    "question_en": "What is the purpose of 'Java Parameterized Tests'?",
    "question_hi": "'Java Parameterized Tests' का उद्देश्य क्या है?",
    "options_en": ["Multiple input test execution", "Parameterized tests", "Java parameterized", "Tests parameterized"],
    "options_hi": ["मल्टीपल इनपुट टेस्ट एक्ज़ीक्यूशन", "पैरामीटराइज्ड टेस्ट्स", "Java पैरामीटराइज्ड", "टेस्ट्स पैरामीटराइज्ड"],
    "answer_en": "Multiple input test execution",
    "answer_hi": "मल्टीपल इनपुट टेस्ट एक्ज़ीक्यूशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 361
  },
  {
    "num": 362,
    "question_en": "Which of these is used for 'Java Dynamic Tests'?",
    "question_hi": "'Java Dynamic Tests' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Runtime-generated tests", "Dynamic tests", "Java dynamic", "Tests dynamic"],
    "options_hi": ["रनटाइम-जेनरेटेड टेस्ट्स", "डायनामिक टेस्ट्स", "Java डायनामिक", "टेस्ट्स डायनामिक"],
    "answer_en": "Runtime-generated tests",
    "answer_hi": "रनटाइम-जेनरेटेड टेस्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 362
  },
  {
    "num": 363,
    "question_en": "What is the purpose of 'Java Nested Tests'?",
    "question_hi": "'Java Nested Tests' का उद्देश्य क्या है?",
    "options_en": ["Hierarchical test organization", "Nested tests", "Java nested", "Tests nested"],
    "options_hi": ["हायरार्किकल टेस्ट ऑर्गनाइजेशन", "नेस्टेड टेस्ट्स", "Java नेस्टेड", "टेस्ट्स नेस्टेड"],
    "answer_en": "Hierarchical test organization",
    "answer_hi": "हायरार्किकल टेस्ट ऑर्गनाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 363
  },
  {
    "num": 364,
    "question_en": "Which of these is used for 'Java Repeated Tests'?",
    "question_hi": "'Java Repeated Tests' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Multiple execution tests", "Repeated tests", "Java repeated", "Tests repeated"],
    "options_hi": ["मल्टीपल एक्ज़ीक्यूशन टेस्ट्स", "रिपीटेड टेस्ट्स", "Java रिपीटेड", "टेस्ट्स रिपीटेड"],
    "answer_en": "Multiple execution tests",
    "answer_hi": "मल्टीपल एक्ज़ीक्यूशन टेस्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 364
  },
  {
    "num": 365,
    "question_en": "What is the purpose of 'Java Test Suites'?",
    "question_hi": "'Java Test Suites' का उद्देश्य क्या है?",
    "options_en": ["Test collection organization", "Test suites", "Java suites", "Suites test"],
    "options_hi": ["टेस्ट कलेक्शन ऑर्गनाइजेशन", "टेस्ट सूट्स", "Java सूट्स", "सूट्स टेस्ट"],
    "answer_en": "Test collection organization",
    "answer_hi": "टेस्ट कलेक्शन ऑर्गनाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 365
  },
  {
    "num": 366,
    "question_en": "Which of these is used for 'Java Test Execution Order'?",
    "question_hi": "'Java Test Execution Order' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Test sequence control", "Test execution order", "Java order", "Order test"],
    "options_hi": ["टेस्ट सीक्वेंस कंट्रोल", "टेस्ट एक्ज़ीक्यूशन ऑर्डर", "Java ऑर्डर", "ऑर्डर टेस्ट"],
    "answer_en": "Test sequence control",
    "answer_hi": "टेस्ट सीक्वेंस कंट्रोल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 366
  },
  {
    "num": 367,
    "question_en": "What is the purpose of 'Java Test Timeouts'?",
    "question_hi": "'Java Test Timeouts' का उद्देश्य क्या है?",
    "options_en": ["Test duration control", "Test timeouts", "Java timeouts", "Timeouts test"],
    "options_hi": ["टेस्ट ड्यूरेशन कंट्रोल", "टेस्ट टाइमआउट्स", "Java टाइमआउट्स", "टाइमआउट्स टेस्ट"],
    "answer_en": "Test duration control",
    "answer_hi": "टेस्ट ड्यूरेशन कंट्रोल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 367
  },
  {
    "num": 368,
    "question_en": "Which of these is used for 'Java Test Disabling'?",
    "question_hi": "'Java Test Disabling' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Test exclusion mechanism", "Test disabling", "Java disabling", "Disabling test"],
    "options_hi": ["टेस्ट एक्सक्लूजन मैकेनिज्म", "टेस्ट डिसेबलिंग", "Java डिसेबलिंग", "डिसेबलिंग टेस्ट"],
    "answer_en": "Test exclusion mechanism",
    "answer_hi": "टेस्ट एक्सक्लूजन मैकेनिज्म",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 368
  },
  {
    "num": 369,
    "question_en": "What is the purpose of 'Java Test Tags'?",
    "question_hi": "'Java Test Tags' का उद्देश्य क्या है?",
    "options_en": ["Test categorization", "Test tags", "Java tags", "Tags test"],
    "options_hi": ["टेस्ट कैटेगराइजेशन", "टेस्ट टैग्स", "Java टैग्स", "टैग्स टेस्ट"],
    "answer_en": "Test categorization",
    "answer_hi": "टेस्ट कैटेगराइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 369
  },
  {
    "num": 370,
    "question_en": "Which of these is used for 'Java Test Conditions'?",
    "question_hi": "'Java Test Conditions' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Conditional test execution", "Test conditions", "Java conditions", "Conditions test"],
    "options_hi": ["कंडीशनल टेस्ट एक्ज़ीक्यूशन", "टेस्ट कंडीशन्स", "Java कंडीशन्स", "कंडीशन्स टेस्ट"],
    "answer_en": "Conditional test execution",
    "answer_hi": "कंडीशनल टेस्ट एक्ज़ीक्यूशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 370
  },
  {
    "num": 371,
    "question_en": "What is the purpose of 'Java Test Assumptions'?",
    "question_hi": "'Java Test Assumptions' का उद्देश्य क्या है?",
    "options_en": ["Precondition checking", "Test assumptions", "Java assumptions", "Assumptions test"],
    "options_hi": ["प्रीकंडीशन चेकिंग", "टेस्ट असम्प्शन्स", "Java असम्प्शन्स", "असम्प्शन्स टेस्ट"],
    "answer_en": "Precondition checking",
    "answer_hi": "प्रीकंडीशन चेकिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 371
  },
  {
    "num": 372,
    "question_en": "Which of these is used for 'Java Test Extensions'?",
    "question_hi": "'Java Test Extensions' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Test framework extension", "Test extensions", "Java extensions", "Extensions test"],
    "options_hi": ["टेस्ट फ्रेमवर्क एक्सटेंशन", "टेस्ट एक्सटेंशन्स", "Java एक्सटेंशन्स", "एक्सटेंशन्स टेस्ट"],
    "answer_en": "Test framework extension",
    "answer_hi": "टेस्ट फ्रेमवर्क एक्सटेंशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 372
  },
  {
    "num": 373,
    "question_en": "What is the purpose of 'Java Test Templates'?",
    "question_hi": "'Java Test Templates' का उद्देश्य क्या है?",
    "options_en": ["Reusable test patterns", "Test templates", "Java templates", "Templates test"],
    "options_hi": ["रियूज़ेबल टेस्ट पैटर्न्स", "टेस्ट टेम्पलेट्स", "Java टेम्पलेट्स", "टेम्पलेट्स टेस्ट"],
    "answer_en": "Reusable test patterns",
    "answer_hi": "रियूज़ेबल टेस्ट पैटर्न्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 373
  },
  {
    "num": 374,
    "question_en": "Which of these is used for 'Java Test Reports'?",
    "question_hi": "'Java Test Reports' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Test result documentation", "Test reports", "Java reports", "Reports test"],
    "options_hi": ["टेस्ट रिजल्ट डॉक्यूमेंटेशन", "टेस्ट रिपोर्ट्स", "Java रिपोर्ट्स", "रिपोर्ट्स टेस्ट"],
    "answer_en": "Test result documentation",
    "answer_hi": "टेस्ट रिजल्ट डॉक्यूमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 374
  },
  {
    "num": 375,
    "question_en": "What is the purpose of 'Java Test Coverage' analysis?",
    "question_hi": "'Java Test Coverage' एनालिसिस का उद्देश्य क्या है?",
    "options_en": ["Code testing completeness", "Test coverage", "Java coverage", "Coverage test"],
    "options_hi": ["कोड टेस्टिंग कम्प्लीटनेस", "टेस्ट कवरेज", "Java कवरेज", "कवरेज टेस्ट"],
    "answer_en": "Code testing completeness",
    "answer_hi": "कोड टेस्टिंग कम्प्लीटनेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 375
  },
  {
    "num": 376,
    "question_en": "Which of these is used for 'Java Mutation Testing'?",
    "question_hi": "'Java Mutation Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Test quality assessment", "Mutation testing", "Java mutation", "Testing mutation"],
    "options_hi": ["टेस्ट क्वालिटी असेसमेंट", "म्यूटेशन टेस्टिंग", "Java म्यूटेशन", "टेस्टिंग म्यूटेशन"],
    "answer_en": "Test quality assessment",
    "answer_hi": "टेस्ट क्वालिटी असेसमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 376
  },
  {
    "num": 377,
    "question_en": "What is the purpose of 'Java Property-Based Testing'?",
    "question_hi": "'Java Property-Based Testing' का उद्देश्य क्या है?",
    "options_en": ["Property verification testing", "Property-based testing", "Java property", "Testing property"],
    "options_hi": ["प्रॉपर्टी वेरिफिकेशन टेस्टिंग", "प्रॉपर्टी-बेस्ड टेस्टिंग", "Java प्रॉपर्टी", "टेस्टिंग प्रॉपर्टी"],
    "answer_en": "Property verification testing",
    "answer_hi": "प्रॉपर्टी वेरिफिकेशन टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 377
  },
  {
    "num": 378,
    "question_en": "Which of these is used for 'Java Snapshot Testing'?",
    "question_hi": "'Java Snapshot Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Output comparison testing", "Snapshot testing", "Java snapshot", "Testing snapshot"],
    "options_hi": ["आउटपुट कम्पेरिजन टेस्टिंग", "स्नैपशॉट टेस्टिंग", "Java स्नैपशॉट", "टेस्टिंग स्नैपशॉट"],
    "answer_en": "Output comparison testing",
    "answer_hi": "आउटपुट कम्पेरिजन टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 378
  },
  {
    "num": 379,
    "question_en": "What is the purpose of 'Java Contract Testing'?",
    "question_hi": "'Java Contract Testing' का उद्देश्य क्या है?",
    "options_en": ["API contract verification", "Contract testing", "Java contract", "Testing contract"],
    "options_hi": ["API कॉन्ट्रैक्ट वेरिफिकेशन", "कॉन्ट्रैक्ट टेस्टिंग", "Java कॉन्ट्रैक्ट", "टेस्टिंग कॉन्ट्रैक्ट"],
    "answer_en": "API contract verification",
    "answer_hi": "API कॉन्ट्रैक्ट वेरिफिकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 379
  },
  {
    "num": 380,
    "question_en": "Which of these is used for 'Java Consumer-Driven Contracts'?",
    "question_hi": "'Java Consumer-Driven Contracts' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Consumer-defined API contracts", "Consumer-driven contracts", "Java consumer", "Contracts consumer"],
    "options_hi": ["कंज्यूमर-डिफाइंड API कॉन्ट्रैक्ट्स", "कंज्यूमर-ड्रिवेन कॉन्ट्रैक्ट्स", "Java कंज्यूमर", "कॉन्ट्रैक्ट्स कंज्यूमर"],
    "answer_en": "Consumer-defined API contracts",
    "answer_hi": "कंज्यूमर-डिफाइंड API कॉन्ट्रैक्ट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 380
  },
  {
    "num": 381,
    "question_en": "What is the purpose of 'Java Chaos Engineering'?",
    "question_hi": "'Java Chaos Engineering' का उद्देश्य क्या है?",
    "options_en": ["System resilience testing", "Chaos engineering", "Java chaos", "Engineering chaos"],
    "options_hi": ["सिस्टम रेजिलिएंस टेस्टिंग", "कैओस इंजीनियरिंग", "Java कैओस", "इंजीनियरिंग कैओस"],
    "answer_en": "System resilience testing",
    "answer_hi": "सिस्टम रेजिलिएंस टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 381
  },
  {
    "num": 382,
    "question_en": "Which of these is used for 'Java Performance Testing'?",
    "question_hi": "'Java Performance Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["System performance evaluation", "Performance testing", "Java performance", "Testing performance"],
    "options_hi": ["सिस्टम परफॉर्मेंस एवल्यूएशन", "परफॉर्मेंस टेस्टिंग", "Java परफॉर्मेंस", "टेस्टिंग परफॉर्मेंस"],
    "answer_en": "System performance evaluation",
    "answer_hi": "सिस्टम परफॉर्मेंस एवल्यूएशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 382
  },
  {
    "num": 383,
    "question_en": "What is the purpose of 'Java Load Testing'?",
    "question_hi": "'Java Load Testing' का उद्देश्य क्या है?",
    "options_en": ["Concurrent user simulation", "Load testing", "Java load", "Testing load"],
    "options_hi": ["कनकरेंट यूजर सिमुलेशन", "लोड टेस्टिंग", "Java लोड", "टेस्टिंग लोड"],
    "answer_en": "Concurrent user simulation",
    "answer_hi": "कनकरेंट यूजर सिमुलेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 383
  },
  {
    "num": 384,
    "question_en": "Which of these is used for 'Java Stress Testing'?",
    "question_hi": "'Java Stress Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["System limit testing", "Stress testing", "Java stress", "Testing stress"],
    "options_hi": ["सिस्टम लिमिट टेस्टिंग", "स्ट्रेस टेस्टिंग", "Java स्ट्रेस", "टेस्टिंग स्ट्रेस"],
    "answer_en": "System limit testing",
    "answer_hi": "सिस्टम लिमिट टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 384
  },
  {
    "num": 385,
    "question_en": "What is the purpose of 'Java Endurance Testing'?",
    "question_hi": "'Java Endurance Testing' का उद्देश्य क्या है?",
    "options_en": ["Long-duration testing", "Endurance testing", "Java endurance", "Testing endurance"],
    "options_hi": ["लॉन्ग-ड्यूरेशन टेस्टिंग", "एंड्योरेंस टेस्टिंग", "Java एंड्योरेंस", "टेस्टिंग एंड्योरेंस"],
    "answer_en": "Long-duration testing",
    "answer_hi": "लॉन्ग-ड्यूरेशन टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 385
  },
  {
    "num": 386,
    "question_en": "Which of these is used for 'Java Spike Testing'?",
    "question_hi": "'Java Spike Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Sudden load testing", "Spike testing", "Java spike", "Testing spike"],
    "options_hi": ["अचानक लोड टेस्टिंग", "स्पाइक टेस्टिंग", "Java स्पाइक", "टेस्टिंग स्पाइक"],
    "answer_en": "Sudden load testing",
    "answer_hi": "अचानक लोड टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 386
  },
  {
    "num": 387,
    "question_en": "What is the purpose of 'Java Scalability Testing'?",
    "question_hi": "'Java Scalability Testing' का उद्देश्य क्या है?",
    "options_en": ["Growth capacity testing", "Scalability testing", "Java scalability", "Testing scalability"],
    "options_hi": ["ग्रोथ कैपेसिटी टेस्टिंग", "स्केलेबिलिटी टेस्टिंग", "Java स्केलेबिलिटी", "टेस्टिंग स्केलेबिलिटी"],
    "answer_en": "Growth capacity testing",
    "answer_hi": "ग्रोथ कैपेसिटी टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 387
  },
  {
    "num": 388,
    "question_en": "Which of these is used for 'Java Volume Testing'?",
    "question_hi": "'Java Volume Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Data volume testing", "Volume testing", "Java volume", "Testing volume"],
    "options_hi": ["डेटा वॉल्यूम टेस्टिंग", "वॉल्यूम टेस्टिंग", "Java वॉल्यूम", "टेस्टिंग वॉल्यूम"],
    "answer_en": "Data volume testing",
    "answer_hi": "डेटा वॉल्यूम टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 388
  },
  {
    "num": 389,
    "question_en": "What is the purpose of 'Java Security Testing'?",
    "question_hi": "'Java Security Testing' का उद्देश्य क्या है?",
    "options_en": ["Security vulnerability testing", "Security testing", "Java security", "Testing security"],
    "options_hi": ["सिक्योरिटी वल्नरेबिलिटी टेस्टिंग", "सिक्योरिटी टेस्टिंग", "Java सिक्योरिटी", "टेस्टिंग सिक्योरिटी"],
    "answer_en": "Security vulnerability testing",
    "answer_hi": "सिक्योरिटी वल्नरेबिलिटी टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 389
  },
  {
    "num": 390,
    "question_en": "Which of these is used for 'Java Penetration Testing'?",
    "question_hi": "'Java Penetration Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Attack simulation testing", "Penetration testing", "Java penetration", "Testing penetration"],
    "options_hi": ["अटैक सिमुलेशन टेस्टिंग", "पैनेट्रेशन टेस्टिंग", "Java पैनेट्रेशन", "टेस्टिंग पैनेट्रेशन"],
    "answer_en": "Attack simulation testing",
    "answer_hi": "अटैक सिमुलेशन टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 390
  },
  {
    "num": 391,
    "question_en": "What is the purpose of 'Java Accessibility Testing'?",
    "question_hi": "'Java Accessibility Testing' का उद्देश्य क्या है?",
    "options_en": ["Disability compliance testing", "Accessibility testing", "Java accessibility", "Testing accessibility"],
    "options_hi": ["डिसेबिलिटी कम्प्लायंस टेस्टिंग", "एक्सेसिबिलिटी टेस्टिंग", "Java एक्सेसिबिलिटी", "टेस्टिंग एक्सेसिबिलिटी"],
    "answer_en": "Disability compliance testing",
    "answer_hi": "डिसेबिलिटी कम्प्लायंस टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 391
  },
  {
    "num": 392,
    "question_en": "Which of these is used for 'Java Usability Testing'?",
    "question_hi": "'Java Usability Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["User experience testing", "Usability testing", "Java usability", "Testing usability"],
    "options_hi": ["यूजर एक्सपीरियंस टेस्टिंग", "यूज़ेबिलिटी टेस्टिंग", "Java यूज़ेबिलिटी", "टेस्टिंग यूज़ेबिलिटी"],
    "answer_en": "User experience testing",
    "answer_hi": "यूजर एक्सपीरियंस टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 392
  },
  {
    "num": 393,
    "question_en": "What is the purpose of 'Java Compatibility Testing'?",
    "question_hi": "'Java Compatibility Testing' का उद्देश्य क्या है?",
    "options_en": ["Cross-platform testing", "Compatibility testing", "Java compatibility", "Testing compatibility"],
    "options_hi": ["क्रॉस-प्लेटफॉर्म टेस्टिंग", "कम्पेटिबिलिटी टेस्टिंग", "Java कम्पेटिबिलिटी", "टेस्टिंग कम्पेटिबिलिटी"],
    "answer_en": "Cross-platform testing",
    "answer_hi": "क्रॉस-प्लेटफॉर्म टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 393
  },
  {
    "num": 394,
    "question_en": "Which of these is used for 'Java Localization Testing'?",
    "question_hi": "'Java Localization Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Language/culture adaptation testing", "Localization testing", "Java localization", "Testing localization"],
    "options_hi": ["लैंग्वेज/कल्चर एडाप्टेशन टेस्टिंग", "लोकलाइज़ेशन टेस्टिंग", "Java लोकलाइज़ेशन", "टेस्टिंग लोकलाइज़ेशन"],
    "answer_en": "Language/culture adaptation testing",
    "answer_hi": "लैंग्वेज/कल्चर एडाप्टेशन टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 394
  },
  {
    "num": 395,
    "question_en": "What is the purpose of 'Java Globalization Testing'?",
    "question_hi": "'Java Globalization Testing' का उद्देश्य क्या है?",
    "options_en": ["International support testing", "Globalization testing", "Java globalization", "Testing globalization"],
    "options_hi": ["इंटरनेशनल सपोर्ट टेस्टिंग", "ग्लोबलाइज़ेशन टेस्टिंग", "Java ग्लोबलाइज़ेशन", "टेस्टिंग ग्लोबलाइज़ेशन"],
    "answer_en": "International support testing",
    "answer_hi": "इंटरनेशनल सपोर्ट टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 395
  },
  {
    "num": 396,
    "question_en": "Which of these is used for 'Java Recovery Testing'?",
    "question_hi": "'Java Recovery Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Failure recovery testing", "Recovery testing", "Java recovery", "Testing recovery"],
    "options_hi": ["फेल्योर रिकवरी टेस्टिंग", "रिकवरी टेस्टिंग", "Java रिकवरी", "टेस्टिंग रिकवरी"],
    "answer_en": "Failure recovery testing",
    "answer_hi": "फेल्योर रिकवरी टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 396
  },
  {
    "num": 397,
    "question_en": "What is the purpose of 'Java Disaster Recovery Testing'?",
    "question_hi": "'Java Disaster Recovery Testing' का उद्देश्य क्या है?",
    "options_en": ["Major failure recovery testing", "Disaster recovery testing", "Java disaster", "Testing disaster"],
    "options_hi": ["मेजर फेल्योर रिकवरी टेस्टिंग", "डिज़ास्टर रिकवरी टेस्टिंग", "Java डिज़ास्टर", "टेस्टिंग डिज़ास्टर"],
    "answer_en": "Major failure recovery testing",
    "answer_hi": "मेजर फेल्योर रिकवरी टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 397
  },
  {
    "num": 398,
    "question_en": "Which of these is used for 'Java Compliance Testing'?",
    "question_hi": "'Java Compliance Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Regulatory compliance testing", "Compliance testing", "Java compliance", "Testing compliance"],
    "options_hi": ["रेगुलेटरी कम्प्लायंस टेस्टिंग", "कम्प्लायंस टेस्टिंग", "Java कम्प्लायंस", "टेस्टिंग कम्प्लायंस"],
    "answer_en": "Regulatory compliance testing",
    "answer_hi": "रेगुलेटरी कम्प्लायंस टेस्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 398
  },
  {
    "num": 399,
    "question_en": "What is the purpose of 'Java Audit Testing'?",
    "question_hi": "'Java Audit Testing' का उद्देश्य क्या है?",
    "options_en": ["Process compliance verification", "Audit testing", "Java audit", "Testing audit"],
    "options_hi": ["प्रोसेस कम्प्लायंस वेरिफिकेशन", "ऑडिट टेस्टिंग", "Java ऑडिट", "टेस्टिंग ऑडिट"],
    "answer_en": "Process compliance verification",
    "answer_hi": "प्रोसेस कम्प्लायंस वेरिफिकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 399
  },
  {
    "num": 400,
    "question_en": "Which of these is used for 'Java Certification Testing'?",
    "question_hi": "'Java Certification Testing' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Standard compliance verification", "Certification testing", "Java certification", "Testing certification"],
    "options_hi": ["स्टैंडर्ड कम्प्लायंस वेरिफिकेशन", "सर्टिफिकेशन टेस्टिंग", "Java सर्टिफिकेशन", "टेस्टिंग सर्टिफिकेशन"],
    "answer_en": "Standard compliance verification",
    "answer_hi": "स्टैंडर्ड कम्प्लायंस वेरिफिकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 400
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