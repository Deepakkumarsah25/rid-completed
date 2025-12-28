 
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
    "num": 151,
    "question_en": "Which of these is used for Bytecode manipulation?",
    "question_hi": "बाइटकोड मैनिपुलेशन के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["ASM", "Byte Buddy", "Javassist", "All of these"],
    "options_hi": ["ASM", "Byte Buddy", "Javassist", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 151
  },
  {
    "num": 152,
    "question_en": "What is the purpose of 'Java Agent'?",
    "question_hi": "'Java Agent' का उद्देश्य क्या है?",
    "options_en": ["Bytecode instrumentation at runtime", "Security agent", "Network agent", "Database agent"],
    "options_hi": ["रनटाइम पर बाइटकोड इंस्ट्रुमेंटेशन", "सिक्योरिटी एजेंट", "नेटवर्क एजेंट", "डेटाबेस एजेंट"],
    "answer_en": "Bytecode instrumentation at runtime",
    "answer_hi": "रनटाइम पर बाइटकोड इंस्ट्रुमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 152
  },
  {
    "num": 153,
    "question_en": "Which of these is used for Aspect-Oriented Programming?",
    "question_hi": "एस्पेक्ट-ओरिएंटेड प्रोग्रामिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["AspectJ", "Spring AOP", "Both", "None"],
    "options_hi": ["AspectJ", "Spring AOP", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 153
  },
  {
    "num": 154,
    "question_en": "What is the purpose of 'Bytecode Verification'?",
    "question_hi": "'Bytecode Verification' का उद्देश्य क्या है?",
    "options_en": ["Ensure bytecode safety and correctness", "Verify Java installation", "Check code compilation", "Validate source code"],
    "options_hi": ["बाइटकोड सेफ्टी और करेक्टनेस एनश्योर करना", "Java इंस्टॉलेशन वेरिफाई करना", "कोड कंपाइलेशन चेक करना", "सोर्स कोड वैलिडेट करना"],
    "answer_en": "Ensure bytecode safety and correctness",
    "answer_hi": "बाइटकोड सेफ्टी और करेक्टनेस एनश्योर करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 154
  },
  {
    "num": 155,
    "question_en": "Which of these is used for Dynamic Proxies?",
    "question_hi": "डायनामिक प्रॉक्सीज के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["java.lang.reflect.Proxy", "CGLIB", "Both", "None"],
    "options_hi": ["java.lang.reflect.Proxy", "CGLIB", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 155
  },
  {
    "num": 156,
    "question_en": "What is the purpose of 'ClassLoader' hierarchy?",
    "question_hi": "'ClassLoader' हायरार्की का उद्देश्य क्या है?",
    "options_en": ["Delegation model for class loading", "Class organization", "Memory management", "Garbage collection"],
    "options_hi": ["क्लास लोडिंग के लिए डेलिगेशन मॉडल", "क्लास ऑर्गनाइजेशन", "मेमोरी मैनेजमेंट", "गार्बेज कलेक्शन"],
    "answer_en": "Delegation model for class loading",
    "answer_hi": "क्लास लोडिंग के लिए डेलिगेशन मॉडल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 156
  },
  {
    "num": 157,
    "question_en": "Which of these is a custom ClassLoader?",
    "question_hi": "निम्नलिखित में से कौन सा कस्टम ClassLoader है?",
    "options_en": ["URLClassLoader", "SecureClassLoader", "Both", "None"],
    "options_hi": ["URLClassLoader", "SecureClassLoader", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 157
  },
  {
    "num": 158,
    "question_en": "What is the purpose of 'Reflection' API?",
    "question_hi": "'Reflection' API का उद्देश्य क्या है?",
    "options_en": ["Inspect and manipulate classes at runtime", "Mirror objects", "Reflect light", "Create reflections"],
    "options_hi": ["रनटाइम पर क्लासेज इंस्पेक्ट और मैनिपुलेट करना", "ऑब्जेक्ट्स मिरर करना", "लाइट रिफ्लेक्ट करना", "रिफ्लेक्शन्स क्रिएट करना"],
    "answer_en": "Inspect and manipulate classes at runtime",
    "answer_hi": "रनटाइम पर क्लासेज इंस्पेक्ट और मैनिपुलेट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 158
  },
  {
    "num": 159,
    "question_en": "Which of these is used for Annotation Processing?",
    "question_hi": "एनोटेशन प्रोसेसिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["APT (Annotation Processing Tool)", "javac -processor", "Both", "None"],
    "options_hi": ["APT (Annotation Processing Tool)", "javac -processor", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 159
  },
  {
    "num": 160,
    "question_en": "What is the purpose of 'Method Handles'?",
    "question_hi": "'Method Handles' का उद्देश्य क्या है?",
    "options_en": ["Type-safe method references", "Handle methods", "Method management", "Method storage"],
    "options_hi": ["टाइप-सेफ मेथड रेफरेंसेज", "मेथड्स हैंडल करना", "मेथड मैनेजमेंट", "मेथड स्टोरेज"],
    "answer_en": "Type-safe method references",
    "answer_hi": "टाइप-सेफ मेथड रेफरेंसेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 160
  },
  {
    "num": 161,
    "question_en": "Which of these is used for 'InvokeDynamic'?",
    "question_hi": "'InvokeDynamic' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Dynamic language support", "Static method invocation", "Direct method call", "Inline caching"],
    "options_hi": ["डायनामिक लैंग्वेज सपोर्ट", "स्टैटिक मेथड इनवोकेशन", "डायरेक्ट मेथड कॉल", "इनलाइन कैशिंग"],
    "answer_en": "Dynamic language support",
    "answer_hi": "डायनामिक लैंग्वेज सपोर्ट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 161
  },
  {
    "num": 162,
    "question_en": "What is the purpose of 'VarHandle'?",
    "question_hi": "'VarHandle' का उद्देश्य क्या है?",
    "options_en": ["Type-safe variable access", "Variable handling", "Memory variables", "Storage variables"],
    "options_hi": ["टाइप-सेफ वेरिएबल एक्सेस", "वेरिएबल हैंडलिंग", "मेमोरी वेरिएबल्स", "स्टोरेज वेरिएबल्स"],
    "answer_en": "Type-safe variable access",
    "answer_hi": "टाइप-सेफ वेरिएबल एक्सेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 162
  },
  {
    "num": 163,
    "question_en": "Which of these is used for 'Stack Walking'?",
    "question_hi": "'Stack Walking' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["StackWalker API", "Thread.getStackTrace()", "Both", "None"],
    "options_hi": ["StackWalker API", "Thread.getStackTrace()", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 163
  },
  {
    "num": 164,
    "question_en": "What is the purpose of 'Process API' improvements?",
    "question_hi": "'Process API' इम्प्रूवमेंट्स का उद्देश्य क्या है?",
    "options_en": ["Better native process control", "Process management", "Task scheduling", "Job control"],
    "options_hi": ["बेटर नेटिव प्रोसेस कंट्रोल", "प्रोसेस मैनेजमेंट", "टास्क शेड्यूलिंग", "जॉब कंट्रोल"],
    "answer_en": "Better native process control",
    "answer_hi": "बेटर नेटिव प्रोसेस कंट्रोल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 164
  },
  {
    "num": 165,
    "question_en": "Which of these is used for 'Compact Strings'?",
    "question_hi": "'Compact Strings' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Memory optimization for strings", "String compression", "String encoding", "String storage"],
    "options_hi": ["स्ट्रिंग्स के लिए मेमोरी ऑप्टिमाइजेशन", "स्ट्रिंग कम्प्रेशन", "स्ट्रिंग एन्कोडिंग", "स्ट्रिंग स्टोरेज"],
    "answer_en": "Memory optimization for strings",
    "answer_hi": "स्ट्रिंग्स के लिए मेमोरी ऑप्टिमाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 165
  },
  {
    "num": 166,
    "question_en": "What is the purpose of 'Indify String Concatenation'?",
    "question_hi": "'Indify String Concatenation' का उद्देश्य क्या है?",
    "options_en": ["Optimize string concatenation", "String indexing", "String formatting", "String parsing"],
    "options_hi": ["स्ट्रिंग कॉन्कैटनेशन ऑप्टिमाइज करना", "स्ट्रिंग इंडेक्सिंग", "स्ट्रिंग फॉर्मेटिंग", "स्ट्रिंग पार्सिंग"],
    "answer_en": "Optimize string concatenation",
    "answer_hi": "स्ट्रिंग कॉन्कैटनेशन ऑप्टिमाइज करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 166
  },
  {
    "num": 167,
    "question_en": "Which of these is used for 'Epsilon GC'?",
    "question_hi": "'Epsilon GC' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["No-op garbage collector", "Epsilon garbage collection", "Experimental GC", "Test GC"],
    "options_hi": ["No-op गार्बेज कलेक्टर", "एप्सिलॉन गार्बेज कलेक्शन", "एक्सपेरिमेंटल GC", "टेस्ट GC"],
    "answer_en": "No-op garbage collector",
    "answer_hi": "No-op गार्बेज कलेक्टर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 167
  },
  {
    "num": 168,
    "question_en": "What is the purpose of 'Shenandoah GC'?",
    "question_hi": "'Shenandoah GC' का उद्देश्य क्या है?",
    "options_en": ["Low-pause-time garbage collector", "High throughput GC", "Memory efficient GC", "Fast GC"],
    "options_hi": ["लो-पॉज़-टाइम गार्बेज कलेक्टर", "हाई थ्रूपुट GC", "मेमोरी एफिशिएंट GC", "फास्ट GC"],
    "answer_en": "Low-pause-time garbage collector",
    "answer_hi": "लो-पॉज़-टाइम गार्बेज कलेक्टर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 168
  },
  {
    "num": 169,
    "question_en": "Which of these is used for 'Project Loom'?",
    "question_hi": "'Project Loom' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Virtual threads and continuations", "Thread pooling", "Thread scheduling", "Thread management"],
    "options_hi": ["वर्चुअल थ्रेड्स और कंटिन्यूएशन्स", "थ्रेड पूलिंग", "थ्रेड शेड्यूलिंग", "थ्रेड मैनेजमेंट"],
    "answer_en": "Virtual threads and continuations",
    "answer_hi": "वर्चुअल थ्रेड्स और कंटिन्यूएशन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 169
  },
  {
    "num": 170,
    "question_en": "What is the purpose of 'Project Valhalla'?",
    "question_hi": "'Project Valhalla' का उद्देश्य क्या है?",
    "options_en": ["Value types and generic specialization", "Memory values", "Value storage", "Value processing"],
    "options_hi": ["वैल्यू टाइप्स और जेनेरिक स्पेशलाइजेशन", "मेमोरी वैल्यूज", "वैल्यू स्टोरेज", "वैल्यू प्रोसेसिंग"],
    "answer_en": "Value types and generic specialization",
    "answer_hi": "वैल्यू टाइप्स और जेनेरिक स्पेशलाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 170
  },
  {
    "num": 171,
    "question_en": "Which of these is used for 'Project Panama'?",
    "question_hi": "'Project Panama' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Native interop improvements", "Panama canal", "Network interop", "Database interop"],
    "options_hi": ["नेटिव इंटरऑप इम्प्रूवमेंट्स", "पनामा नहर", "नेटवर्क इंटरऑप", "डेटाबेस इंटरऑप"],
    "answer_en": "Native interop improvements",
    "answer_hi": "नेटिव इंटरऑप इम्प्रूवमेंट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 171
  },
  {
    "num": 172,
    "question_en": "What is the purpose of 'Project Amber'?",
    "question_hi": "'Project Amber' का उद्देश्य क्या है?",
    "options_en": ["Smaller Java language features", "Amber storage", "Amber processing", "Amber compilation"],
    "options_hi": ["स्मॉलर Java लैंग्वेज फीचर्स", "एम्बर स्टोरेज", "एम्बर प्रोसेसिंग", "एम्बर कंपाइलेशन"],
    "answer_en": "Smaller Java language features",
    "answer_hi": "स्मॉलर Java लैंग्वेज फीचर्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 172
  },
  {
    "num": 173,
    "question_en": "Which of these is used for 'Pattern Matching'?",
    "question_hi": "'Pattern Matching' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["instanceof pattern matching", "switch pattern matching", "Both", "None"],
    "options_hi": ["instanceof पैटर्न मैचिंग", "switch पैटर्न मैचिंग", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 173
  },
  {
    "num": 174,
    "question_en": "What is the purpose of 'Sealed Classes'?",
    "question_hi": "'Sealed Classes' का उद्देश्य क्या है?",
    "options_en": ["Control class inheritance", "Seal classes", "Class protection", "Class security"],
    "options_hi": ["क्लास इनहेरिटेंस कंट्रोल करना", "क्लासेज सील करना", "क्लास प्रोटेक्शन", "क्लास सिक्योरिटी"],
    "answer_en": "Control class inheritance",
    "answer_hi": "क्लास इनहेरिटेंस कंट्रोल करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 174
  },
  {
    "num": 175,
    "question_en": "Which of these is used for 'Records'?",
    "question_hi": "'Records' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Immutable data carriers", "Data records", "Record storage", "Record processing"],
    "options_hi": ["इम्यूटेबल डेटा कैरियर्स", "डेटा रिकॉर्ड्स", "रिकॉर्ड स्टोरेज", "रिकॉर्ड प्रोसेसिंग"],
    "answer_en": "Immutable data carriers",
    "answer_hi": "इम्यूटेबल डेटा कैरियर्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 175
  },
  {
    "num": 176,
    "question_en": "What is the purpose of 'Local Variable Type Inference'?",
    "question_hi": "'Local Variable Type Inference' का उद्देश्य क्या है?",
    "options_en": ["Type inference for local variables", "Variable inference", "Local inference", "Type detection"],
    "options_hi": ["लोकल वेरिएबल्स के लिए टाइप इनफेरेंस", "वेरिएबल इनफेरेंस", "लोकल इनफेरेंस", "टाइप डिटेक्शन"],
    "answer_en": "Type inference for local variables",
    "answer_hi": "लोकल वेरिएबल्स के लिए टाइप इनफेरेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 176
  },
  {
    "num": 177,
    "question_en": "Which of these is used for 'Text Blocks'?",
    "question_hi": "'Text Blocks' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Multi-line string literals", "Text blocks", "String blocks", "Literal blocks"],
    "options_hi": ["मल्टी-लाइन स्ट्रिंग लिटरल्स", "टेक्स्ट ब्लॉक्स", "स्ट्रिंग ब्लॉक्स", "लिटरल ब्लॉक्स"],
    "answer_en": "Multi-line string literals",
    "answer_hi": "मल्टी-लाइन स्ट्रिंग लिटरल्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 177
  },
  {
    "num": 178,
    "question_en": "What is the purpose of 'Switch Expressions'?",
    "question_hi": "'Switch Expressions' का उद्देश्य क्या है?",
    "options_en": ["Expression-based switch statements", "Switch expressions", "Expression switching", "Switch evaluation"],
    "options_hi": ["एक्सप्रेशन-बेस्ड switch स्टेटमेंट्स", "switch एक्सप्रेशन्स", "एक्सप्रेशन स्विचिंग", "switch एवल्यूएशन"],
    "answer_en": "Expression-based switch statements",
    "answer_hi": "एक्सप्रेशन-बेस्ड switch स्टेटमेंट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 178
  },
  {
    "num": 179,
    "question_en": "Which of these is used for 'Modules'?",
    "question_hi": "'Modules' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Java Platform Module System", "Jigsaw", "Both", "None"],
    "options_hi": ["Java Platform Module System", "Jigsaw", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 179
  },
  {
    "num": 180,
    "question_en": "What is the purpose of 'ServiceLoader'?",
    "question_hi": "'ServiceLoader' का उद्देश्य क्या है?",
    "options_en": ["Service provider loading", "Service loading", "Loader services", "Service management"],
    "options_hi": ["सर्विस प्रोवाइडर लोडिंग", "सर्विस लोडिंग", "लोडर सर्विसेज", "सर्विस मैनेजमेंट"],
    "answer_en": "Service provider loading",
    "answer_hi": "सर्विस प्रोवाइडर लोडिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 180
  },
  {
    "num": 181,
    "question_en": "Which of these is used for 'JNI' (Java Native Interface)?",
    "question_hi": "'JNI' (Java Native Interface) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Native method integration", "Java native integration", "Interface native", "Native java"],
    "options_hi": ["नेटिव मेथड इंटीग्रेशन", "Java नेटिव इंटीग्रेशन", "इंटरफेस नेटिव", "नेटिव java"],
    "answer_en": "Native method integration",
    "answer_hi": "नेटिव मेथड इंटीग्रेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 181
  },
  {
    "num": 182,
    "question_en": "What is the purpose of 'JNA' (Java Native Access)?",
    "question_hi": "'JNA' (Java Native Access) का उद्देश्य क्या है?",
    "options_en": ["Simplified native access", "Native access", "Java access", "Access native"],
    "options_hi": ["सिंप्लिफाइड नेटिव एक्सेस", "नेटिव एक्सेस", "Java एक्सेस", "एक्सेस नेटिव"],
    "answer_en": "Simplified native access",
    "answer_hi": "सिंप्लिफाइड नेटिव एक्सेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 182
  },
  {
    "num": 183,
    "question_en": "Which of these is used for 'GraalVM'?",
    "question_hi": "'GraalVM' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Polyglot runtime", "Graal virtual machine", "Both", "None"],
    "options_hi": ["पॉलीग्लॉट रनटाइम", "Graal वर्चुअल मशीन", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 183
  },
  {
    "num": 184,
    "question_en": "What is the purpose of 'SubstrateVM'?",
    "question_hi": "'SubstrateVM' का उद्देश्य क्या है?",
    "options_en": ["AOT (Ahead-of-Time) compilation", "Substrate virtual machine", "VM substrate", "Substrate compilation"],
    "options_hi": ["AOT (Ahead-of-Time) कंपाइलेशन", "Substrate वर्चुअल मशीन", "VM सबस्ट्रेट", "सबस्ट्रेट कंपाइलेशन"],
    "answer_en": "AOT (Ahead-of-Time) compilation",
    "answer_hi": "AOT (Ahead-of-Time) कंपाइलेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 184
  },
  {
    "num": 185,
    "question_en": "Which of these is used for 'Truffle Framework'?",
    "question_hi": "'Truffle Framework' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Language implementation framework", "Truffle language", "Framework truffle", "Language truffle"],
    "options_hi": ["लैंग्वेज इम्प्लीमेंटेशन फ्रेमवर्क", "Truffle लैंग्वेज", "फ्रेमवर्क truffle", "लैंग्वेज truffle"],
    "answer_en": "Language implementation framework",
    "answer_hi": "लैंग्वेज इम्प्लीमेंटेशन फ्रेमवर्क",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 185
  },
  {
    "num": 186,
    "question_en": "What is the purpose of 'JavaFX'?",
    "question_hi": "'JavaFX' का उद्देश्य क्या है?",
    "options_en": ["Rich client applications", "Java effects", "FX Java", "Java framework"],
    "options_hi": ["रिच क्लाइंट एप्लिकेशन्स", "Java इफेक्ट्स", "FX Java", "Java फ्रेमवर्क"],
    "answer_en": "Rich client applications",
    "answer_hi": "रिच क्लाइंट एप्लिकेशन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 186
  },
  {
    "num": 187,
    "question_en": "Which of these is used for 'Java 2D'?",
    "question_hi": "'Java 2D' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["2D graphics and imaging", "2D Java", "Java dimensions", "Dimensions Java"],
    "options_hi": ["2D ग्राफिक्स और इमेजिंग", "2D Java", "Java डायमेंशन्स", "डायमेंशन्स Java"],
    "answer_en": "2D graphics and imaging",
    "answer_hi": "2D ग्राफिक्स और इमेजिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 187
  },
  {
    "num": 188,
    "question_en": "What is the purpose of 'Java 3D'?",
    "question_hi": "'Java 3D' का उद्देश्य क्या है?",
    "options_en": ["3D graphics API", "3D Java", "Java three dimensions", "Three D Java"],
    "options_hi": ["3D ग्राफिक्स API", "3D Java", "Java थ्री डायमेंशन्स", "थ्री डी Java"],
    "answer_en": "3D graphics API",
    "answer_hi": "3D ग्राफिक्स API",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 188
  },
  {
    "num": 189,
    "question_en": "Which of these is used for 'Java Sound'?",
    "question_hi": "'Java Sound' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Audio API", "Sound Java", "Java audio", "Audio Java"],
    "options_hi": ["ऑडियो API", "साउंड Java", "Java ऑडियो", "ऑडियो Java"],
    "answer_en": "Audio API",
    "answer_hi": "ऑडियो API",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 189
  },
  {
    "num": 190,
    "question_en": "What is the purpose of 'Java Advanced Imaging'?",
    "question_hi": "'Java Advanced Imaging' का उद्देश्य क्या है?",
    "options_en": ["Advanced image processing", "Java imaging", "Imaging Java", "Advanced Java"],
    "options_hi": ["एडवांस्ड इमेज प्रोसेसिंग", "Java इमेजिंग", "इमेजिंग Java", "एडवांस्ड Java"],
    "answer_en": "Advanced image processing",
    "answer_hi": "एडवांस्ड इमेज प्रोसेसिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 190
  },
  {
    "num": 191,
    "question_en": "Which of these is used for 'Java Media Framework'?",
    "question_hi": "'Java Media Framework' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Media playback and capture", "Media Java", "Java media", "Framework media"],
    "options_hi": ["मीडिया प्लेबैक और कैप्चर", "मीडिया Java", "Java मीडिया", "फ्रेमवर्क मीडिया"],
    "answer_en": "Media playback and capture",
    "answer_hi": "मीडिया प्लेबैक और कैप्चर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 191
  },
  {
    "num": 192,
    "question_en": "What is the purpose of 'Java Web Start'?",
    "question_hi": "'Java Web Start' का उद्देश्य क्या है?",
    "options_en": ["Launch applications from web", "Web start", "Start web", "Java web"],
    "options_hi": ["वेब से एप्लिकेशन्स लॉन्च करना", "वेब स्टार्ट", "स्टार्ट वेब", "Java वेब"],
    "answer_en": "Launch applications from web",
    "answer_hi": "वेब से एप्लिकेशन्स लॉन्च करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 192
  },
  {
    "num": 193,
    "question_en": "Which of these is used for 'Java Applets'?",
    "question_hi": "'Java Applets' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Web browser applications", "Applets Java", "Java small apps", "Small Java"],
    "options_hi": ["वेब ब्राउज़र एप्लिकेशन्स", "ऐप्लेट्स Java", "Java स्मॉल ऐप्स", "स्मॉल Java"],
    "answer_en": "Web browser applications",
    "answer_hi": "वेब ब्राउज़र एप्लिकेशन्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 193
  },
  {
    "num": 194,
    "question_en": "What is the purpose of 'Java Servlets'?",
    "question_hi": "'Java Servlets' का उद्देश्य क्या है?",
    "options_en": ["Server-side web components", "Servlets Java", "Java server", "Server Java"],
    "options_hi": ["सर्वर-साइड वेब कंपोनेंट्स", "सर्वलेट्स Java", "Java सर्वर", "सर्वर Java"],
    "answer_en": "Server-side web components",
    "answer_hi": "सर्वर-साइड वेब कंपोनेंट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 194
  },
  {
    "num": 195,
    "question_en": "Which of these is used for 'JSP' (JavaServer Pages)?",
    "question_hi": "'JSP' (JavaServer Pages) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Dynamic web pages", "JSP Java", "Java pages", "Pages Java"],
    "options_hi": ["डायनामिक वेब पेजेज", "JSP Java", "Java पेजेज", "पेजेज Java"],
    "answer_en": "Dynamic web pages",
    "answer_hi": "डायनामिक वेब पेजेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 195
  },
  {
    "num": 196,
    "question_en": "What is the purpose of 'JSF' (JavaServer Faces)?",
    "question_hi": "'JSF' (JavaServer Faces) का उद्देश्य क्या है?",
    "options_en": ["Component-based web framework", "Faces Java", "Java faces", "Web faces"],
    "options_hi": ["कंपोनेंट-बेस्ड वेब फ्रेमवर्क", "फेसिज़ Java", "Java फेसिज़", "वेब फेसिज़"],
    "answer_en": "Component-based web framework",
    "answer_hi": "कंपोनेंट-बेस्ड वेब फ्रेमवर्क",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 196
  },
  {
    "num": 197,
    "question_en": "Which of these is used for 'CDI' (Contexts and Dependency Injection)?",
    "question_hi": "'CDI' (Contexts and Dependency Injection) के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Dependency injection for Java EE", "CDI Java", "Java CDI", "Injection Java"],
    "options_hi": ["Java EE के लिए डिपेंडेंसी इंजेक्शन", "CDI Java", "Java CDI", "इंजेक्शन Java"],
    "answer_en": "Dependency injection for Java EE",
    "answer_hi": "Java EE के लिए डिपेंडेंसी इंजेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 197
  },
  {
    "num": 198,
    "question_en": "What is the purpose of 'EJB' (Enterprise JavaBeans)?",
    "question_hi": "'EJB' (Enterprise JavaBeans) का उद्देश्य क्या है?",
    "options_en": ["Server-side component architecture", "EJB Java", "Java beans", "Enterprise beans"],
    "options_hi": ["सर्वर-साइड कंपोनेंट आर्किटेक्चर", "EJB Java", "Java बीन्स", "एंटरप्राइज बीन्स"],
    "answer_en": "Server-side component architecture",
    "answer_hi": "सर्वर-साइड कंपोनेंट आर्किटेक्चर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 198
  },
  {
    "num": 199,
    "question_en": "Which of these is used for 'JAX-RS'?",
    "question_hi": "'JAX-RS' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["RESTful web services API", "JAX Java", "Java REST", "REST Java"],
    "options_hi": ["RESTful वेब सर्विसेज API", "JAX Java", "Java REST", "REST Java"],
    "answer_en": "RESTful web services API",
    "answer_hi": "RESTful वेब सर्विसेज API",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 199
  },
  {
    "num": 200,
    "question_en": "What is the purpose of 'JAX-WS'?",
    "question_hi": "'JAX-WS' का उद्देश्य क्या है?",
    "options_en": ["SOAP web services API", "JAX web", "Java SOAP", "SOAP Java"],
    "options_hi": ["SOAP वेब सर्विसेज API", "JAX वेब", "Java SOAP", "SOAP Java"],
    "answer_en": "SOAP web services API",
    "answer_hi": "SOAP वेब सर्विसेज API",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 200
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