 
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
    "num": 451,
    "question_en": "What is the purpose of 'Java Runtime Data Areas'?",
    "question_hi": "'Java Runtime Data Areas' का उद्देश्य क्या है?",
    "options_en": ["JVM memory organization", "Runtime data areas", "Java runtime", "Areas runtime"],
    "options_hi": ["JVM मेमोरी ऑर्गनाइजेशन", "रनटाइम डेटा एरियाज़", "Java रनटाइम", "एरियाज़ रनटाइम"],
    "answer_en": "JVM memory organization",
    "answer_hi": "JVM मेमोरी ऑर्गनाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 451
  },
  {
    "num": 452,
    "question_en": "Which of these is used for 'Java Heap Memory'?",
    "question_hi": "'Java Heap Memory' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Object instance storage", "Heap memory", "Java heap", "Memory heap"],
    "options_hi": ["ऑब्जेक्ट इंस्टेंस स्टोरेज", "हीप मेमोरी", "Java हीप", "मेमोरी हीप"],
    "answer_en": "Object instance storage",
    "answer_hi": "ऑब्जेक्ट इंस्टेंस स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 452
  },
  {
    "num": 453,
    "question_en": "What is the purpose of 'Java Stack Memory'?",
    "question_hi": "'Java Stack Memory' का उद्देश्य क्या है?",
    "options_en": ["Thread execution storage", "Stack memory", "Java stack", "Memory stack"],
    "options_hi": ["थ्रेड एक्ज़ीक्यूशन स्टोरेज", "स्टैक मेमोरी", "Java स्टैक", "मेमोरी स्टैक"],
    "answer_en": "Thread execution storage",
    "answer_hi": "थ्रेड एक्ज़ीक्यूशन स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 453
  },
  {
    "num": 454,
    "question_en": "Which of these is used for 'Java Metaspace' (Java 8+)?",
    "question_hi": "'Java Metaspace' (Java 8+) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Class metadata storage", "Metaspace", "Java meta", "Space meta"],
    "options_hi": ["क्लास मेटाडेटा स्टोरेज", "मेटास्पेस", "Java मेटा", "स्पेस मेटा"],
    "answer_en": "Class metadata storage",
    "answer_hi": "क्लास मेटाडेटा स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 454
  },
  {
    "num": 455,
    "question_en": "What is the purpose of 'Java Code Cache'?",
    "question_hi": "'Java Code Cache' का उद्देश्य क्या है?",
    "options_en": ["Compiled code storage", "Code cache", "Java code", "Cache code"],
    "options_hi": ["कंपाइल्ड कोड स्टोरेज", "कोड कैश", "Java कोड", "कैश कोड"],
    "answer_en": "Compiled code storage",
    "answer_hi": "कंपाइल्ड कोड स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 455
  },
  {
    "num": 456,
    "question_en": "Which of these is used for 'Java Young Generation' in heap?",
    "question_hi": "हीप में 'Java Young Generation' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["New object allocation", "Young generation", "Java young", "Generation young"],
    "options_hi": ["न्यू ऑब्जेक्ट एलोकेशन", "यंग जेनरेशन", "Java यंग", "जेनरेशन यंग"],
    "answer_en": "New object allocation",
    "answer_hi": "न्यू ऑब्जेक्ट एलोकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 456
  },
  {
    "num": 457,
    "question_en": "What is the purpose of 'Java Old Generation' in heap?",
    "question_hi": "हीप में 'Java Old Generation' का उद्देश्य क्या है?",
    "options_en": ["Long-lived object storage", "Old generation", "Java old", "Generation old"],
    "options_hi": ["लॉन्ग-लिव्ड ऑब्जेक्ट स्टोरेज", "ओल्ड जेनरेशन", "Java ओल्ड", "जेनरेशन ओल्ड"],
    "answer_en": "Long-lived object storage",
    "answer_hi": "लॉन्ग-लिव्ड ऑब्जेक्ट स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 457
  },
  {
    "num": 458,
    "question_en": "Which of these is used for 'Java Eden Space'?",
    "question_hi": "'Java Eden Space' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Initial object allocation", "Eden space", "Java eden", "Space eden"],
    "options_hi": ["इनिशियल ऑब्जेक्ट एलोकेशन", "ईडन स्पेस", "Java ईडन", "स्पेस ईडन"],
    "answer_en": "Initial object allocation",
    "answer_hi": "इनिशियल ऑब्जेक्ट एलोकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 458
  },
  {
    "num": 459,
    "question_en": "What is the purpose of 'Java Survivor Spaces'?",
    "question_hi": "'Java Survivor Spaces' का उद्देश्य क्या है?",
    "options_en": ["Young object survivor storage", "Survivor spaces", "Java survivor", "Spaces survivor"],
    "options_hi": ["यंग ऑब्जेक्ट सर्वाइवर स्टोरेज", "सर्वाइवर स्पेसेज", "Java सर्वाइवर", "स्पेसेज सर्वाइवर"],
    "answer_en": "Young object survivor storage",
    "answer_hi": "यंग ऑब्जेक्ट सर्वाइवर स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 459
  },
  {
    "num": 460,
    "question_en": "Which of these is used for 'Java Permanent Generation' (pre-Java 8)?",
    "question_hi": "'Java Permanent Generation' (Java 8 से पहले) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Class metadata storage", "Permanent generation", "Java permanent", "Generation permanent"],
    "options_hi": ["क्लास मेटाडेटा स्टोरेज", "पर्मानेंट जेनरेशन", "Java पर्मानेंट", "जेनरेशन पर्मानेंट"],
    "answer_en": "Class metadata storage",
    "answer_hi": "क्लास मेटाडेटा स्टोरेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 460
  },
  {
    "num": 461,
    "question_en": "What is the purpose of 'Java Garbage Collection Roots'?",
    "question_hi": "'Java Garbage Collection Roots' का उद्देश्य क्या है?",
    "options_en": ["Live object references", "GC roots", "Java GC", "Roots GC"],
    "options_hi": ["लाइव ऑब्जेक्ट रेफरेंसेज", "GC रूट्स", "Java GC", "रूट्स GC"],
    "answer_en": "Live object references",
    "answer_hi": "लाइव ऑब्जेक्ट रेफरेंसेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 461
  },
  {
    "num": 462,
    "question_en": "Which of these is used for 'Java Mark and Sweep' algorithm?",
    "question_hi": "'Java Mark and Sweep' एल्गोरिदम के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Basic garbage collection", "Mark and sweep", "Java mark", "Sweep mark"],
    "options_hi": ["बेसिक गार्बेज कलेक्शन", "मार्क एंड स्वीप", "Java मार्क", "स्वीप मार्क"],
    "answer_en": "Basic garbage collection",
    "answer_hi": "बेसिक गार्बेज कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 462
  },
  {
    "num": 463,
    "question_en": "What is the purpose of 'Java Copying Collector'?",
    "question_hi": "'Java Copying Collector' का उद्देश्य क्या है?",
    "options_en": ["Young generation collection", "Copying collector", "Java copying", "Collector copying"],
    "options_hi": ["यंग जेनरेशन कलेक्शन", "कॉपीइंग कलेक्टर", "Java कॉपीइंग", "कलेक्टर कॉपीइंग"],
    "answer_en": "Young generation collection",
    "answer_hi": "यंग जेनरेशन कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 463
  },
  {
    "num": 464,
    "question_en": "Which of these is used for 'Java Mark-Compact Collector'?",
    "question_hi": "'Java Mark-Compact Collector' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Old generation collection", "Mark-compact collector", "Java compact", "Collector compact"],
    "options_hi": ["ओल्ड जेनरेशन कलेक्शन", "मार्क-कॉम्पैक्ट कलेक्टर", "Java कॉम्पैक्ट", "कलेक्टर कॉम्पैक्ट"],
    "answer_en": "Old generation collection",
    "answer_hi": "ओल्ड जेनरेशन कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 464
  },
  {
    "num": 465,
    "question_en": "What is the purpose of 'Java Generational Garbage Collection'?",
    "question_hi": "'Java Generational Garbage Collection' का उद्देश्य क्या है?",
    "options_en": ["Age-based collection strategy", "Generational GC", "Java generational", "GC generational"],
    "options_hi": ["एज-बेस्ड कलेक्शन स्ट्रैटेजी", "जेनरेशनल GC", "Java जेनरेशनल", "GC जेनरेशनल"],
    "answer_en": "Age-based collection strategy",
    "answer_hi": "एज-बेस्ड कलेक्शन स्ट्रैटेजी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 465
  },
  {
    "num": 466,
    "question_en": "Which of these is used for 'Java Incremental Garbage Collection'?",
    "question_hi": "'Java Incremental Garbage Collection' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Pause time reduction", "Incremental GC", "Java incremental", "GC incremental"],
    "options_hi": ["पॉज़ टाइम रिडक्शन", "इंक्रीमेंटल GC", "Java इंक्रीमेंटल", "GC इंक्रीमेंटल"],
    "answer_en": "Pause time reduction",
    "answer_hi": "पॉज़ टाइम रिडक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 466
  },
  {
    "num": 467,
    "question_en": "What is the purpose of 'Java Concurrent Mark Sweep' (CMS) collector?",
    "question_hi": "'Java Concurrent Mark Sweep' (CMS) कलेक्टर का उद्देश्य क्या है?",
    "options_en": ["Low pause time collection", "CMS collector", "Java CMS", "Collector CMS"],
    "options_hi": ["लो पॉज़ टाइम कलेक्शन", "CMS कलेक्टर", "Java CMS", "कलेक्टर CMS"],
    "answer_en": "Low pause time collection",
    "answer_hi": "लो पॉज़ टाइम कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 467
  },
  {
    "num": 468,
    "question_en": "Which of these is used for 'Java G1 Garbage Collector'?",
    "question_hi": "'Java G1 Garbage Collector' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Predictable pause times", "G1 collector", "Java G1", "Collector G1"],
    "options_hi": ["प्रिडिक्टेबल पॉज़ टाइम्स", "G1 कलेक्टर", "Java G1", "कलेक्टर G1"],
    "answer_en": "Predictable pause times",
    "answer_hi": "प्रिडिक्टेबल पॉज़ टाइम्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 468
  },
  {
    "num": 469,
    "question_en": "What is the purpose of 'Java Z Garbage Collector' (ZGC)?",
    "question_hi": "'Java Z Garbage Collector' (ZGC) का उद्देश्य क्या है?",
    "options_en": ["Very low pause times", "ZGC collector", "Java ZGC", "Collector ZGC"],
    "options_hi": ["वेरी लो पॉज़ टाइम्स", "ZGC कलेक्टर", "Java ZGC", "कलेक्टर ZGC"],
    "answer_en": "Very low pause times",
    "answer_hi": "वेरी लो पॉज़ टाइम्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 469
  },
  {
    "num": 470,
    "question_en": "Which of these is used for 'Java Shenandoah Garbage Collector'?",
    "question_hi": "'Java Shenandoah Garbage Collector' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Low pause concurrent GC", "Shenandoah collector", "Java shenandoah", "Collector shenandoah"],
    "options_hi": ["लो पॉज़ कनकरेंट GC", "शेनान्डोआ कलेक्टर", "Java शेनान्डोआ", "कलेक्टर शेनान्डोआ"],
    "answer_en": "Low pause concurrent GC",
    "answer_hi": "लो पॉज़ कनकरेंट GC",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 470
  },
  {
    "num": 471,
    "question_en": "What is the purpose of 'Java Epsilon Garbage Collector'?",
    "question_hi": "'Java Epsilon Garbage Collector' का उद्देश्य क्या है?",
    "options_en": ["No-op garbage collector", "Epsilon collector", "Java epsilon", "Collector epsilon"],
    "options_hi": ["नो-ऑप गार्बेज कलेक्टर", "एप्सिलॉन कलेक्टर", "Java एप्सिलॉन", "कलेक्टर एप्सिलॉन"],
    "answer_en": "No-op garbage collector",
    "answer_hi": "नो-ऑप गार्बेज कलेक्टर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 471
  },
  {
    "num": 472,
    "question_en": "Which of these is used for 'Java Serial Garbage Collector'?",
    "question_hi": "'Java Serial Garbage Collector' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Single-threaded collection", "Serial collector", "Java serial", "Collector serial"],
    "options_hi": ["सिंगल-थ्रेडेड कलेक्शन", "सीरियल कलेक्टर", "Java सीरियल", "कलेक्टर सीरियल"],
    "answer_en": "Single-threaded collection",
    "answer_hi": "सिंगल-थ्रेडेड कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 472
  },
  {
    "num": 473,
    "question_en": "What is the purpose of 'Java Parallel Garbage Collector'?",
    "question_hi": "'Java Parallel Garbage Collector' का उद्देश्य क्या है?",
    "options_en": ["Multi-threaded collection", "Parallel collector", "Java parallel", "Collector parallel"],
    "options_hi": ["मल्टी-थ्रेडेड कलेक्शन", "पैरेलल कलेक्टर", "Java पैरेलल", "कलेक्टर पैरेलल"],
    "answer_en": "Multi-threaded collection",
    "answer_hi": "मल्टी1-थ्रेडेड कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 473
  },
  {
    "num": 474,
    "question_en": "Which of these is used for 'Java Stop-The-World' (STW) pauses?",
    "question_hi": "'Java Stop-The-World' (STW) पॉज़ेज के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Application pause during GC", "STW pauses", "Java STW", "Pauses STW"],
    "options_hi": ["GC के दौरान एप्लिकेशन पॉज़", "STW पॉज़ेज", "Java STW", "पॉज़ेज STW"],
    "answer_en": "Application pause during GC",
    "answer_hi": "GC के दौरान एप्लिकेशन पॉज़",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 474
  },
  {
    "num": 475,
    "question_en": "What is the purpose of 'Java Safe Points'?",
    "question_hi": "'Java Safe Points' का उद्देश्य क्या है?",
    "options_en": ["GC-safe thread states", "Safe points", "Java safe", "Points safe"],
    "options_hi": ["GC-सेफ थ्रेड स्टेट्स", "सेफ पॉइंट्स", "Java सेफ", "पॉइंट्स सेफ"],
    "answer_en": "GC-safe thread states",
    "answer_hi": "GC-सेफ थ्रेड स्टेट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 475
  },
  {
    "num": 476,
    "question_en": "Which of these is used for 'Java Card Tables'?",
    "question_hi": "'Java Card Tables' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Young-old reference tracking", "Card tables", "Java card", "Tables card"],
    "options_hi": ["यंग-ओल्ड रेफरेंस ट्रैकिंग", "कार्ड टेबल्स", "Java कार्ड", "टेबल्स कार्ड"],
    "answer_en": "Young-old reference tracking",
    "answer_hi": "यंग-ओल्ड रेफरेंस ट्रैकिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 476
  },
  {
    "num": 477,
    "question_en": "What is the purpose of 'Java Remembered Sets'?",
    "question_hi": "'Java Remembered Sets' का उद्देश्य क्या है?",
    "options_en": ["Cross-region reference tracking", "Remembered sets", "Java remembered", "Sets remembered"],
    "options_hi": ["क्रॉस-रिजन रेफरेंस ट्रैकिंग", "रिमेम्बर्ड सेट्स", "Java रिमेम्बर्ड", "सेट्स रिमेम्बर्ड"],
    "answer_en": "Cross-region reference tracking",
    "answer_hi": "क्रॉस-रिजन रेफरेंस ट्रैकिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 477
  },
  {
    "num": 478,
    "question_en": "Which of these is used for 'Java Humongous Objects'?",
    "question_hi": "'Java Humongous Objects' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Large object allocation", "Humongous objects", "Java humongous", "Objects humongous"],
    "options_hi": ["लार्ज ऑब्जेक्ट एलोकेशन", "ह्यूमंगस ऑब्जेक्ट्स", "Java ह्यूमंगस", "ऑब्जेक्ट्स ह्यूमंगस"],
    "answer_en": "Large object allocation",
    "answer_hi": "लार्ज ऑब्जेक्ट एलोकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 478
  },
  {
    "num": 479,
    "question_en": "What is the purpose of 'Java TLAB' (Thread-Local Allocation Buffer)?",
    "question_hi": "'Java TLAB' (Thread-Local Allocation Buffer) का उद्देश्य क्या है?",
    "options_en": ["Thread-local object allocation", "TLAB allocation", "Java TLAB", "Allocation TLAB"],
    "options_hi": ["थ्रेड-लोकल ऑब्जेक्ट एलोकेशन", "TLAB एलोकेशन", "Java TLAB", "एलोकेशन TLAB"],
    "answer_en": "Thread-local object allocation",
    "answer_hi": "थ्रेड-लोकल ऑब्जेक्ट एलोकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 479
  },
  {
    "num": 480,
    "question_en": "Which of these is used for 'Java Biased Locking'?",
    "question_hi": "'Java Biased Locking' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Single-thread optimization", "Biased locking", "Java biased", "Locking biased"],
    "options_hi": ["सिंगल-थ्रेड ऑप्टिमाइजेशन", "बायस्ड लॉकिंग", "Java बायस्ड", "लॉकिंग बायस्ड"],
    "answer_en": "Single-thread optimization",
    "answer_hi": "सिंगल-थ्रेड ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 480
  },
  {
    "num": 481,
    "question_en": "What is the purpose of 'Java Escape Analysis'?",
    "question_hi": "'Java Escape Analysis' का उद्देश्य क्या है?",
    "options_en": ["Stack allocation optimization", "Escape analysis", "Java escape", "Analysis escape"],
    "options_hi": ["स्टैक एलोकेशन ऑप्टिमाइजेशन", "एस्केप एनालिसिस", "Java एस्केप", "एनालिसिस एस्केप"],
    "answer_en": "Stack allocation optimization",
    "answer_hi": "स्टैक एलोकेशन ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 481
  },
  {
    "num": 482,
    "question_en": "Which of these is used for 'Java Scalar Replacement'?",
    "question_hi": "'Java Scalar Replacement' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Object field optimization", "Scalar replacement", "Java scalar", "Replacement scalar"],
    "options_hi": ["ऑब्जेक्ट फील्ड ऑप्टिमाइजेशन", "स्केलर रिप्लेसमेंट", "Java स्केलर", "रिप्लेसमेंट स्केलर"],
    "answer_en": "Object field optimization",
    "answer_hi": "ऑब्जेक्ट फील्ड ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 482
  },
  {
    "num": 483,
    "question_en": "What is the purpose of 'Java Loop Unrolling' optimization?",
    "question_hi": "'Java Loop Unrolling' ऑप्टिमाइजेशन का उद्देश्य क्या है?",
    "options_en": ["Loop performance optimization", "Loop unrolling", "Java loop", "Unrolling loop"],
    "options_hi": ["लूप परफॉर्मेंस ऑप्टिमाइजेशन", "लूप अनरोलिंग", "Java लूप", "अनरोलिंग लूप"],
    "answer_en": "Loop performance optimization",
    "answer_hi": "लूप परफॉर्मेंस ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 483
  },
  {
    "num": 484,
    "question_en": "Which of these is used for 'Java Inlining' optimization?",
    "question_hi": "'Java Inlining' ऑप्टिमाइजेशन के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Method call optimization", "Inlining optimization", "Java inlining", "Optimization inlining"],
    "options_hi": ["मेथड कॉल ऑप्टिमाइजेशन", "इनलाइनिंग ऑप्टिमाइजेशन", "Java इनलाइनिंग", "ऑप्टिमाइजेशन इनलाइनिंग"],
    "answer_en": "Method call optimization",
    "answer_hi": "मेथड कॉल ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 484
  },
  {
    "num": 485,
    "question_en": "What is the purpose of 'Java Dead Code Elimination'?",
    "question_hi": "'Java Dead Code Elimination' का उद्देश्य क्या है?",
    "options_en": ["Unused code removal", "Dead code elimination", "Java dead", "Elimination dead"],
    "options_hi": ["अनयूज़्ड कोड रिमूवल", "डेड कोड एलिमिनेशन", "Java डेड", "एलिमिनेशन डेड"],
    "answer_en": "Unused code removal",
    "answer_hi": "अनयूज़्ड कोड रिमूवल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 485
  },
  {
    "num": 486,
    "question_en": "Which of these is used for 'Java Constant Folding'?",
    "question_hi": "'Java Constant Folding' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Compile-time constant evaluation", "Constant folding", "Java constant", "Folding constant"],
    "options_hi": ["कंपाइल-टाइम कॉन्स्टेंट एवल्यूएशन", "कॉन्स्टेंट फोल्डिंग", "Java कॉन्स्टेंट", "फोल्डिंग कॉन्स्टेंट"],
    "answer_en": "Compile-time constant evaluation",
    "answer_hi": "कंपाइल-टाइम कॉन्स्टेंट एवल्यूएशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 486
  },
  {
    "num": 487,
    "question_en": "What is the purpose of 'Java Common Subexpression Elimination'?",
    "question_hi": "'Java Common Subexpression Elimination' का उद्देश्य क्या है?",
    "options_en": ["Redundant computation elimination", "Common subexpression elimination", "Java common", "Elimination common"],
    "options_hi": ["रिडंडेंट कम्प्यूटेशन एलिमिनेशन", "कॉमन सबएक्सप्रेशन एलिमिनेशन", "Java कॉमन", "एलिमिनेशन कॉमन"],
    "answer_en": "Redundant computation elimination",
    "answer_hi": "रिडंडेंट कम्प्यूटेशन एलिमिनेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 487
  },
  {
    "num": 488,
    "question_en": "Which of these is used for 'Java Range Check Elimination'?",
    "question_hi": "'Java Range Check Elimination' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Array bounds check optimization", "Range check elimination", "Java range", "Elimination range"],
    "options_hi": ["एरे बाउंड्स चेक ऑप्टिमाइजेशन", "रेंज चेक एलिमिनेशन", "Java रेंज", "एलिमिनेशन रेंज"],
    "answer_en": "Array bounds check optimization",
    "answer_hi": "एरे बाउंड्स चेक ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 488
  },
  {
    "num": 489,
    "question_en": "What is the purpose of 'Java Intrinsics'?",
    "question_hi": "'Java Intrinsics' का उद्देश्य क्या है?",
    "options_en": ["Native method optimization", "Intrinsics", "Java intrinsic", "Optimization intrinsic"],
    "options_hi": ["नेटिव मेथड ऑप्टिमाइजेशन", "इन्ट्रिन्सिक्स", "Java इन्ट्रिन्सिक", "ऑप्टिमाइजेशन इन्ट्रिन्सिक"],
    "answer_en": "Native method optimization",
    "answer_hi": "नेटिव मेथड ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 489
  },
  {
    "num": 490,
    "question_en": "Which of these is used for 'Java Vectorization'?",
    "question_hi": "'Java Vectorization' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["SIMD instruction optimization", "Vectorization", "Java vector", "Optimization vector"],
    "options_hi": ["SIMD इंस्ट्रक्शन ऑप्टिमाइजेशन", "वेक्टराइजेशन", "Java वेक्टर", "ऑप्टिमाइजेशन वेक्टर"],
    "answer_en": "SIMD instruction optimization",
    "answer_hi": "SIMD इंस्ट्रक्शन ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 490
  },
  {
    "num": 491,
    "question_en": "What is the purpose of 'Java Tiered Compilation'?",
    "question_hi": "'Java Tiered Compilation' का उद्देश्य क्या है?",
    "options_en": ["Multi-level JIT compilation", "Tiered compilation", "Java tiered", "Compilation tiered"],
    "options_hi": ["मल्टी-लेवल JIT कंपाइलेशन", "टियर्ड कंपाइलेशन", "Java टियर्ड", "कंपाइलेशन टियर्ड"],
    "answer_en": "Multi-level JIT compilation",
    "answer_hi": "मल्टी-लेवल JIT कंपाइलेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 491
  },
  {
    "num": 492,
    "question_en": "Which of these is used for 'Java C1 Compiler'?",
    "question_hi": "'Java C1 Compiler' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Client compiler (fast startup)", "C1 compiler", "Java C1", "Compiler C1"],
    "options_hi": ["क्लाइंट कंपाइलर (फास्ट स्टार्टअप)", "C1 कंपाइलर", "Java C1", "कंपाइलर C1"],
    "answer_en": "Client compiler (fast startup)",
    "answer_hi": "क्लाइंट कंपाइलर (फास्ट स्टार्टअप)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 492
  },
  {
    "num": 493,
    "question_en": "What is the purpose of 'Java C2 Compiler'?",
    "question_hi": "'Java C2 Compiler' का उद्देश्य क्या है?",
    "options_en": ["Server compiler (high performance)", "C2 compiler", "Java C2", "Compiler C2"],
    "options_hi": ["सर्वर कंपाइलर (हाई परफॉर्मेंस)", "C2 कंपाइलर", "Java C2", "कंपाइलर C2"],
    "answer_en": "Server compiler (high performance)",
    "answer_hi": "सर्वर कंपाइलर (हाई परफॉर्मेंस)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 493
  },
  {
    "num": 494,
    "question_en": "Which of these is used for 'Java Graal Compiler'?",
    "question_hi": "'Java Graal Compiler' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Modern JIT compiler", "Graal compiler", "Java graal", "Compiler graal"],
    "options_hi": ["मॉडर्न JIT कंपाइलर", "Graal कंपाइलर", "Java graal", "कंपाइलर graal"],
    "answer_en": "Modern JIT compiler",
    "answer_hi": "मॉडर्न JIT कंपाइलर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 494
  },
  {
    "num": 495,
    "question_en": "What is the purpose of 'Java AOT Compilation' (Ahead-of-Time)?",
    "question_hi": "'Java AOT Compilation' (Ahead-of-Time) का उद्देश्य क्या है?",
    "options_en": ["Pre-runtime compilation", "AOT compilation", "Java AOT", "Compilation AOT"],
    "options_hi": ["प्री-रनटाइम कंपाइलेशन", "AOT कंपाइलेशन", "Java AOT", "कंपाइलेशन AOT"],
    "answer_en": "Pre-runtime compilation",
    "answer_hi": "प्री-रनटाइम कंपाइलेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 495
  },
  {
    "num": 496,
    "question_en": "Which of these is used for 'Java JIT Compilation' (Just-in-Time)?",
    "question_hi": "'Java JIT Compilation' (Just-in-Time) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Runtime compilation", "JIT compilation", "Java JIT", "Compilation JIT"],
    "options_hi": ["रनटाइम कंपाइलेशन", "JIT कंपाइलेशन", "Java JIT", "कंपाइलेशन JIT"],
    "answer_en": "Runtime compilation",
    "answer_hi": "रनटाइम कंपाइलेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 496
  },
  {
    "num": 497,
    "question_en": "What is the purpose of 'Java On-Stack Replacement' (OSR)?",
    "question_hi": "'Java On-Stack Replacement' (OSR) का उद्देश्य क्या है?",
    "options_en": ["Hot method optimization", "On-stack replacement", "Java OSR", "Replacement OSR"],
    "options_hi": ["हॉट मेथड ऑप्टिमाइजेशन", "ऑन-स्टैक रिप्लेसमेंट", "Java OSR", "रिप्लेसमेंट OSR"],
    "answer_en": "Hot method optimization",
    "answer_hi": "हॉट मेथड ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 497
  },
  {
    "num": 498,
    "question_en": "Which of these is used for 'Java Deoptimization'?",
    "question_hi": "'Java Deoptimization' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Optimization rollback", "Deoptimization", "Java deopt", "Optimization deopt"],
    "options_hi": ["ऑप्टिमाइजेशन रोलबैक", "डीऑप्टिमाइजेशन", "Java डीऑप्ट", "ऑप्टिमाइजेशन डीऑप्ट"],
    "answer_en": "Optimization rollback",
    "answer_hi": "ऑप्टिमाइजेशन रोलबैक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 498
  },
  {
    "num": 499,
    "question_en": "What is the purpose of 'Java Profiling Guided Optimization'?",
    "question_hi": "'Java Profiling Guided Optimization' का उद्देश्य क्या है?",
    "options_en": ["Runtime feedback optimization", "Profiling guided optimization", "Java profiling", "Optimization profiling"],
    "options_hi": ["रनटाइम फीडबैक ऑप्टिमाइजेशन", "प्रोफाइलिंग गाइडेड ऑप्टिमाइजेशन", "Java प्रोफाइलिंग", "ऑप्टिमाइजेशन प्रोफाइलिंग"],
    "answer_en": "Runtime feedback optimization",
    "answer_hi": "रनटाइम फीडबैक ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 499
  },
  {
    "num": 500,
    "question_en": "Which of these is used for 'Java HotSpot' JVM?",
    "question_hi": "'Java HotSpot' JVM के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Oracle's production JVM", "HotSpot JVM", "Java hotspot", "JVM hotspot"],
    "options_hi": ["ओरेकल का प्रोडक्शन JVM", "HotSpot JVM", "Java हॉटस्पॉट", "JVM हॉटस्पॉट"],
    "answer_en": "Oracle's production JVM",
    "answer_hi": "ओरेकल का प्रोडक्शन JVM",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 500
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