 
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
    "num": 1,
    "question_en": "What is a thread in Java?",
    "question_hi": "जावा में थ्रेड क्या है?",
    "options_en": ["Lightweight sub-process", "Heavyweight process", "Method in program", "Class in program"],
    "options_hi": ["लाइटवेट सब-प्रोसेस", "हेवीवेट प्रोसेस", "प्रोग्राम में मेथड", "प्रोग्राम में क्लास"],
    "answer_en": "Lightweight sub-process",
    "answer_hi": "लाइटवेट सब-प्रोसेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "What is multithreading in Java?",
    "question_hi": "जावा में मल्टीथ्रेडिंग क्या है?",
    "options_en": ["Executing multiple threads simultaneously", "Executing single thread", "Multiple processes", "Multiple programs"],
    "options_hi": ["एक साथ कई थ्रेड्स एक्जीक्यूट करना", "सिंगल थ्रेड एक्जीक्यूट करना", "कई प्रोसेसेस", "कई प्रोग्राम"],
    "answer_en": "Executing multiple threads simultaneously",
    "answer_hi": "एक साथ कई थ्रेड्स एक्जीक्यूट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "What are the ways to create thread in Java?",
    "question_hi": "जावा में थ्रेड बनाने के तरीके क्या हैं?",
    "options_en": ["Extending Thread class, Implementing Runnable", "Using Process class", "Using Executor class", "Using Timer class"],
    "options_hi": ["Thread क्लास extend करना, Runnable implement करना", "Process क्लास उपयोग करना", "Executor क्लास उपयोग करना", "Timer क्लास उपयोग करना"],
    "answer_en": "Extending Thread class, Implementing Runnable",
    "answer_hi": "Thread क्लास extend करना, Runnable implement करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "What is Thread class?",
    "question_hi": "Thread क्लास क्या है?",
    "options_en": ["Class to create and manage threads", "Interface for threads", "Abstract class", "Utility class"],
    "options_hi": ["थ्रेड्स बनाने और मैनेज करने की क्लास", "थ्रेड्स के लिए इंटरफेस", "अब्सट्रैक्ट क्लास", "यूटिलिटी क्लास"],
    "answer_en": "Class to create and manage threads",
    "answer_hi": "थ्रेड्स बनाने और मैनेज करने की क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "What is Runnable interface?",
    "question_hi": "Runnable इंटरफेस क्या है?",
    "options_en": ["Interface with run() method for threads", "Class with run() method", "Abstract class", "Thread class"],
    "options_hi": ["थ्रेड्स के लिए run() मेथड वाला इंटरफेस", "run() मेथड वाली क्लास", "अब्सट्रैक्ट क्लास", "Thread क्लास"],
    "answer_en": "Interface with run() method for threads",
    "answer_hi": "थ्रेड्स के लिए run() मेथड वाला इंटरफेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "What is run() method?",
    "question_hi": "run() मेथड क्या है?",
    "options_en": ["Entry point for thread execution", "Method to start thread", "Method to stop thread", "Method to pause thread"],
    "options_hi": ["थ्रेड एक्जीक्यूशन के लिए एंट्री पॉइंट", "थ्रेड स्टार्ट करने की मेथड", "थ्रेड स्टॉप करने की मेथड", "थ्रेड पॉज करने की मेथड"],
    "answer_en": "Entry point for thread execution",
    "answer_hi": "थ्रेड एक्जीक्यूशन के लिए एंट्री पॉइंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "What is start() method?",
    "question_hi": "start() मेथड क्या है?",
    "options_en": ["Starts thread execution", "Executes run() method directly", "Stops thread", "Pauses thread"],
    "options_hi": ["थ्रेड एक्जीक्यूशन स्टार्ट करता है", "run() मेथड डायरेक्टली एक्जीक्यूट करता है", "थ्रेड स्टॉप करता है", "थ्रेड पॉज करता है"],
    "answer_en": "Starts thread execution",
    "answer_hi": "थ्रेड एक्जीक्यूशन स्टार्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "Difference between start() and run()?",
    "question_hi": "start() और run() में अंतर?",
    "options_en": ["start() creates new thread, run() executes in current thread", "Both create new thread", "Both execute in current thread", "No difference"],
    "options_hi": ["start() नया थ्रेड बनाता है, run() करंट थ्रेड में एक्जीक्यूट होता है", "दोनों नया थ्रेड बनाते हैं", "दोनों करंट थ्रेड में एक्जीक्यूट होते हैं", "कोई अंतर नहीं"],
    "answer_en": "start() creates new thread, run() executes in current thread",
    "answer_hi": "start() नया थ्रेड बनाता है, run() करंट थ्रेड में एक्जीक्यूट होता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What is thread lifecycle?",
    "question_hi": "थ्रेड लाइफसाइकल क्या है?",
    "options_en": ["States: New, Runnable, Running, Blocked, Dead", "States: Start, Stop, Pause", "States: Born, Alive, Dead", "States: Init, Exec, Term"],
    "options_hi": ["स्टेट्स: New, Runnable, Running, Blocked, Dead", "स्टेट्स: Start, Stop, Pause", "स्टेट्स: Born, Alive, Dead", "स्टेट्स: Init, Exec, Term"],
    "answer_en": "States: New, Runnable, Running, Blocked, Dead",
    "answer_hi": "स्टेट्स: New, Runnable, Running, Blocked, Dead",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "What is New state of thread?",
    "question_hi": "थ्रेड की New स्टेट क्या है?",
    "options_en": ["Thread created but not started", "Thread running", "Thread blocked", "Thread dead"],
    "options_hi": ["थ्रेड बन गया लेकिन स्टार्ट नहीं हुआ", "थ्रेड रनिंग है", "थ्रेड ब्लॉक्ड है", "थ्रेड डेड है"],
    "answer_en": "Thread created but not started",
    "answer_hi": "थ्रेड बन गया लेकिन स्टार्ट नहीं हुआ",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What is Runnable state?",
    "question_hi": "Runnable स्टेट क्या है?",
    "options_en": ["Thread ready to run, waiting for CPU", "Thread running", "Thread blocked", "Thread dead"],
    "options_hi": ["थ्रेड रन के लिए तैयार, CPU का इंतज़ार", "थ्रेड रनिंग है", "थ्रेड ब्लॉक्ड है", "थ्रेड डेड है"],
    "answer_en": "Thread ready to run, waiting for CPU",
    "answer_hi": "थ्रेड रन के लिए तैयार, CPU का इंतज़ार",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "What is Running state?",
    "question_hi": "Running स्टेट क्या है?",
    "options_en": ["Thread executing on CPU", "Thread ready to run", "Thread blocked", "Thread dead"],
    "options_hi": ["थ्रेड CPU पर एक्जीक्यूट कर रहा है", "थ्रेड रन के लिए तैयार", "थ्रेड ब्लॉक्ड है", "थ्रेड डेड है"],
    "answer_en": "Thread executing on CPU",
    "answer_hi": "थ्रेड CPU पर एक्जीक्यूट कर रहा है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is Blocked state?",
    "question_hi": "Blocked स्टेट क्या है?",
    "options_en": ["Thread waiting for monitor lock", "Thread running", "Thread ready", "Thread dead"],
    "options_hi": ["थ्रेड मॉनिटर लॉक का इंतज़ार कर रहा है", "थ्रेड रनिंग है", "थ्रेड रेडी है", "थ्रेड डेड है"],
    "answer_en": "Thread waiting for monitor lock",
    "answer_hi": "थ्रेड मॉनिटर लॉक का इंतज़ार कर रहा है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "What is Dead/Terminated state?",
    "question_hi": "Dead/Terminated स्टेट क्या है?",
    "options_en": ["Thread completed execution", "Thread running", "Thread ready", "Thread blocked"],
    "options_hi": ["थ्रेड का एक्जीक्यूशन कंप्लीट हो गया", "थ्रेड रनिंग है", "थ्रेड रेडी है", "थ्रेड ब्लॉक्ड है"],
    "answer_en": "Thread completed execution",
    "answer_hi": "थ्रेड का एक्जीक्यूशन कंप्लीट हो गया",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is thread priority?",
    "question_hi": "थ्रेड प्रायोरिटी क्या है?",
    "options_en": ["Importance of thread for scheduler", "Speed of thread", "Memory of thread", "Size of thread"],
    "options_hi": ["स्केड्यूलर के लिए थ्रेड की इम्पोर्टेंस", "थ्रेड की स्पीड", "थ्रेड की मेमोरी", "थ्रेड का साइज"],
    "answer_en": "Importance of thread for scheduler",
    "answer_hi": "स्केड्यूलर के लिए थ्रेड की इम्पोर्टेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "What are thread priority values?",
    "question_hi": "थ्रेड प्रायोरिटी वैल्यूज क्या हैं?",
    "options_en": ["MIN=1, NORM=5, MAX=10", "MIN=0, NORM=5, MAX=10", "MIN=1, NORM=6, MAX=12", "MIN=0, NORM=10, MAX=20"],
    "options_hi": ["MIN=1, NORM=5, MAX=10", "MIN=0, NORM=5, MAX=10", "MIN=1, NORM=6, MAX=12", "MIN=0, NORM=10, MAX=20"],
    "answer_en": "MIN=1, NORM=5, MAX=10",
    "answer_hi": "MIN=1, NORM=5, MAX=10",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "What is thread scheduler?",
    "question_hi": "थ्रेड स्केड्यूलर क्या है?",
    "options_en": ["Part of JVM that decides thread execution order", "Part of OS", "Part of CPU", "Part of memory"],
    "options_hi": ["JVM का हिस्सा जो थ्रेड एक्जीक्यूशन ऑर्डर डिसाइड करता है", "OS का हिस्सा", "CPU का हिस्सा", "मेमोरी का हिस्सा"],
    "answer_en": "Part of JVM that decides thread execution order",
    "answer_hi": "JVM का हिस्सा जो थ्रेड एक्जीक्यूशन ऑर्डर डिसाइड करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is time slicing?",
    "question_hi": "टाइम स्लाइसिंग क्या है?",
    "options_en": ["Allocating CPU time to each thread", "Slicing memory", "Dividing tasks", "Splitting processes"],
    "options_hi": ["हर थ्रेड को CPU टाइम allocate करना", "मेमोरी स्लाइस करना", "टास्क्स डिवाइड करना", "प्रोसेसेस स्प्लिट करना"],
    "answer_en": "Allocating CPU time to each thread",
    "answer_hi": "हर थ्रेड को CPU टाइम allocate करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "What is sleep() method?",
    "question_hi": "sleep() मेथड क्या है?",
    "options_en": ["Pauses thread execution for specified time", "Stops thread permanently", "Resumes thread", "Starts thread"],
    "options_hi": ["थ्रेड एक्जीक्यूशन को निर्दिष्ट समय के लिए पॉज करता है", "थ्रेड को परमानेंटली स्टॉप करता है", "थ्रेड रिज्यूम करता है", "थ्रेड स्टार्ट करता है"],
    "answer_en": "Pauses thread execution for specified time",
    "answer_hi": "थ्रेड एक्जीक्यूशन को निर्दिष्ट समय के लिए पॉज करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is yield() method?",
    "question_hi": "yield() मेथड क्या है?",
    "options_en": ["Hint to scheduler to give CPU to other threads", "Stops thread", "Pauses thread", "Resumes thread"],
    "options_hi": ["स्केड्यूलर को हिंट देता है कि CPU अन्य थ्रेड्स को दे", "थ्रेड स्टॉप करता है", "थ्रेड पॉज करता है", "थ्रेड रिज्यूम करता है"],
    "answer_en": "Hint to scheduler to give CPU to other threads",
    "answer_hi": "स्केड्यूलर को हिंट देता है कि CPU अन्य थ्रेड्स को दे",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "What is join() method?",
    "question_hi": "join() मेथड क्या है?",
    "options_en": ["Waits for thread to die", "Kills thread", "Starts thread", "Pauses thread"],
    "options_hi": ["थ्रेड के डाय होने का इंतज़ार करता है", "थ्रेड किल करता है", "थ्रेड स्टार्ट करता है", "थ्रेड पॉज करता है"],
    "answer_en": "Waits for thread to die",
    "answer_hi": "थ्रेड के डाय होने का इंतज़ार करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "What is synchronization?",
    "question_hi": "सिंक्रोनाइजेशन क्या है?",
    "options_en": ["Controlling access to shared resources", "Making threads faster", "Making threads slower", "Stopping threads"],
    "options_hi": ["शेयर्ड रिसोर्सेस तक एक्सेस कंट्रोल करना", "थ्रेड्स को फास्टर बनाना", "थ्रेड्स को स्लोअर बनाना", "थ्रेड्स स्टॉप करना"],
    "answer_en": "Controlling access to shared resources",
    "answer_hi": "शेयर्ड रिसोर्सेस तक एक्सेस कंट्रोल करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "What is synchronized method?",
    "question_hi": "सिंक्रोनाइज्ड मेथड क्या है?",
    "options_en": ["Method that can be accessed by only one thread at a time", "Fast method", "Slow method", "Static method"],
    "options_hi": ["वह मेथड जिसे एक समय में सिर्फ एक थ्रेड एक्सेस कर सकता है", "फास्ट मेथड", "स्लो मेथड", "स्टेटिक मेथड"],
    "answer_en": "Method that can be accessed by only one thread at a time",
    "answer_hi": "वह मेथड जिसे एक समय में सिर्फ एक थ्रेड एक्सेस कर सकता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is synchronized block?",
    "question_hi": "सिंक्रोनाइज्ड ब्लॉक क्या है?",
    "options_en": ["Block of code synchronized on object", "Whole method synchronized", "Class synchronized", "Package synchronized"],
    "options_hi": ["ऑब्जेक्ट पर सिंक्रोनाइज्ड कोड का ब्लॉक", "पूरी मेथड सिंक्रोनाइज्ड", "क्लास सिंक्रोनाइज्ड", "पैकेज सिंक्रोनाइज्ड"],
    "answer_en": "Block of code synchronized on object",
    "answer_hi": "ऑब्जेक्ट पर सिंक्रोनाइज्ड कोड का ब्लॉक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "What is static synchronization?",
    "question_hi": "स्टेटिक सिंक्रोनाइजेशन क्या है?",
    "options_en": ["Synchronization on class level", "Synchronization on object level", "No synchronization", "Partial synchronization"],
    "options_hi": ["क्लास लेवल पर सिंक्रोनाइजेशन", "ऑब्जेक्ट लेवल पर सिंक्रोनाइजेशन", "कोई सिंक्रोनाइजेशन नहीं", "पार्शियल सिंक्रोनाइजेशन"],
    "answer_en": "Synchronization on class level",
    "answer_hi": "क्लास लेवल पर सिंक्रोनाइजेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What is deadlock?",
    "question_hi": "डेडलॉक क्या है?",
    "options_en": ["When two or more threads waiting forever for each other", "When thread finishes quickly", "When thread sleeps", "When thread yields"],
    "options_hi": ["जब दो या अधिक थ्रेड्स एक-दूसरे का अनंत काल तक इंतज़ार करते हैं", "जब थ्रेड जल्दी खत्म हो जाता है", "जब थ्रेड स्लीप करता है", "जब थ्रेड यील्ड करता है"],
    "answer_en": "When two or more threads waiting forever for each other",
    "answer_hi": "जब दो या अधिक थ्रेड्स एक-दूसरे का अनंत काल तक इंतज़ार करते हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "What is inter-thread communication?",
    "question_hi": "इंटर-थ्रेड कम्युनिकेशन क्या है?",
    "options_en": ["Communication between threads using wait(), notify(), notifyAll()", "Communication via files", "Communication via network", "Communication via database"],
    "options_hi": ["wait(), notify(), notifyAll() उपयोग करके थ्रेड्स के बीच कम्युनिकेशन", "फाइल्स के माध्यम से कम्युनिकेशन", "नेटवर्क के माध्यम से कम्युनिकेशन", "डेटाबेस के माध्यम से कम्युनिकेशन"],
    "answer_en": "Communication between threads using wait(), notify(), notifyAll()",
    "answer_hi": "wait(), notify(), notifyAll() उपयोग करके थ्रेड्स के बीच कम्युनिकेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What is wait() method?",
    "question_hi": "wait() मेथड क्या है?",
    "options_en": ["Causes thread to wait until notified", "Causes thread to sleep", "Causes thread to stop", "Causes thread to yield"],
    "options_hi": ["थ्रेड को नोटिफाई होने तक इंतज़ार करने के लिए कारण बनता है", "थ्रेड को स्लीप करने के लिए कारण बनता है", "थ्रेड को स्टॉप करने के लिए कारण बनता है", "थ्रेड को यील्ड करने के लिए कारण बनता है"],
    "answer_en": "Causes thread to wait until notified",
    "answer_hi": "थ्रेड को नोटिफाई होने तक इंतज़ार करने के लिए कारण बनता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 9,
    "question_en": "What is notify() method?",
    "question_hi": "notify() मेथड क्या है?",
    "options_en": ["Wakes up single waiting thread", "Wakes up all waiting threads", "Puts thread to sleep", "Stops thread"],
    "options_hi": ["सिंगल वेटिंग थ्रेड को वेक अप करता है", "सभी वेटिंग थ्रेड्स को वेक अप करता है", "थ्रेड को स्लीप में डालता है", "थ्रेड स्टॉप करता है"],
    "answer_en": "Wakes up single waiting thread",
    "answer_hi": "सिंगल वेटिंग थ्रेड को वेक अप करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is notifyAll() method?",
    "question_hi": "notifyAll() मेथड क्या है?",
    "options_en": ["Wakes up all waiting threads", "Wakes up single thread", "Puts all threads to sleep", "Stops all threads"],
    "options_hi": ["सभी वेटिंग थ्रेड्स को वेक अप करता है", "सिंगल थ्रेड को वेक अप करता है", "सभी थ्रेड्स को स्लीप में डालता है", "सभी थ्रेड्स स्टॉप करता है"],
    "answer_en": "Wakes up all waiting threads",
    "answer_hi": "सभी वेटिंग थ्रेड्स को वेक अप करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "What is daemon thread?",
    "question_hi": "डेमन थ्रेड क्या है?",
    "options_en": ["Background thread that provides services to user threads", "Main thread", "User thread", "System thread"],
    "options_hi": ["बैकग्राउंड थ्रेड जो यूजर थ्रेड्स को सर्विसेस प्रोवाइड करता है", "मेन थ्रेड", "यूजर थ्रेड", "सिस्टम थ्रेड"],
    "answer_en": "Background thread that provides services to user threads",
    "answer_hi": "बैकग्राउंड थ्रेड जो यूजर थ्रेड्स को सर्विसेस प्रोवाइड करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "What is user thread?",
    "question_hi": "यूजर थ्रेड क्या है?",
    "options_en": ["Thread created by user/application", "System thread", "Daemon thread", "Background thread"],
    "options_hi": ["यूजर/एप्लिकेशन द्वारा बनाया गया थ्रेड", "सिस्टम थ्रेड", "डेमन थ्रेड", "बैकग्राउंड थ्रेड"],
    "answer_en": "Thread created by user/application",
    "answer_hi": "यूजर/एप्लिकेशन द्वारा बनाया गया थ्रेड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is thread pool?",
    "question_hi": "थ्रेड पूल क्या है?",
    "options_en": ["Collection of worker threads", "Single thread", "Main thread", "Daemon thread"],
    "options_hi": ["वर्कर थ्रेड्स का कलेक्शन", "सिंगल थ्रेड", "मेन थ्रेड", "डेमन थ्रेड"],
    "answer_en": "Collection of worker threads",
    "answer_hi": "वर्कर थ्रेड्स का कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "What is Executor framework?",
    "question_hi": "Executor फ्रेमवर्क क्या है?",
    "options_en": ["Framework for thread management", "Framework for file management", "Framework for network", "Framework for database"],
    "options_hi": ["थ्रेड मैनेजमेंट के लिए फ्रेमवर्क", "फाइल मैनेजमेंट के लिए फ्रेमवर्क", "नेटवर्क के लिए फ्रेमवर्क", "डेटाबेस के लिए फ्रेमवर्क"],
    "answer_en": "Framework for thread management",
    "answer_hi": "थ्रेड मैनेजमेंट के लिए फ्रेमवर्क",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "What is ExecutorService?",
    "question_hi": "ExecutorService क्या है?",
    "options_en": ["Interface for thread pool management", "Class for threads", "Interface for tasks", "Class for executors"],
    "options_hi": ["थ्रेड पूल मैनेजमेंट के लिए इंटरफेस", "थ्रेड्स के लिए क्लास", "टास्क्स के लिए इंटरफेस", "एक्जीक्यूटर्स के लिए क्लास"],
    "answer_en": "Interface for thread pool management",
    "answer_hi": "थ्रेड पूल मैनेजमेंट के लिए इंटरफेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "What is Callable interface?",
    "question_hi": "Callable इंटरफेस क्या है?",
    "options_en": ["Interface for tasks that return result", "Interface for Runnable", "Interface for Thread", "Interface for Executor"],
    "options_hi": ["रिजल्ट रिटर्न करने वाले टास्क्स के लिए इंटरफेस", "Runnable के लिए इंटरफेस", "Thread के लिए इंटरफेस", "Executor के लिए इंटरफेस"],
    "answer_en": "Interface for tasks that return result",
    "answer_hi": "रिजल्ट रिटर्न करने वाले टास्क्स के लिए इंटरफेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "What is Future interface?",
    "question_hi": "Future इंटरफेस क्या है?",
    "options_en": ["Represents result of asynchronous computation", "Represents current computation", "Represents past computation", "Represents thread"],
    "options_hi": ["एसिंक्रोनस कंप्यूटेशन के रिजल्ट को रिप्रेजेंट करता है", "करंट कंप्यूटेशन को रिप्रेजेंट करता है", "पास्ट कंप्यूटेशन को रिप्रेजेंट करता है", "थ्रेड को रिप्रेजेंट करता है"],
    "answer_en": "Represents result of asynchronous computation",
    "answer_hi": "एसिंक्रोनस कंप्यूटेशन के रिजल्ट को रिप्रेजेंट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is ThreadLocal?",
    "question_hi": "ThreadLocal क्या है?",
    "options_en": ["Provides thread-local variables", "Provides global variables", "Provides static variables", "Provides instance variables"],
    "options_hi": ["थ्रेड-लोकल वेरिएबल्स प्रोवाइड करता है", "ग्लोबल वेरिएबल्स प्रोवाइड करता है", "स्टेटिक वेरिएबल्स प्रोवाइड करता है", "इंस्टेंस वेरिएबल्स प्रोवाइड करता है"],
    "answer_en": "Provides thread-local variables",
    "answer_hi": "थ्रेड-लोकल वेरिएबल्स प्रोवाइड करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "What is volatile keyword?",
    "question_hi": "volatile कीवर्ड क्या है?",
    "options_en": ["Ensures variable visibility across threads", "Makes variable constant", "Makes variable static", "Makes variable final"],
    "options_hi": ["थ्रेड्स के बीच वेरिएबल विजिबिलिटी एनश्योर करता है", "वेरिएबल को कॉन्स्टेंट बनाता है", "वेरिएबल को स्टेटिक बनाता है", "वेरिएबल को फाइनल बनाता है"],
    "answer_en": "Ensures variable visibility across threads",
    "answer_hi": "थ्रेड्स के बीच वेरिएबल विजिबिलिटी एनश्योर करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is atomic variable?",
    "question_hi": "एटोमिक वेरिएबल क्या है?",
    "options_en": ["Variable that supports atomic operations", "Normal variable", "Static variable", "Final variable"],
    "options_hi": ["वह वेरिएबल जो एटोमिक ऑपरेशन्स सपोर्ट करता है", "नॉर्मल वेरिएबल", "स्टेटिक वेरिएबल", "फाइनल वेरिएबल"],
    "answer_en": "Variable that supports atomic operations",
    "answer_hi": "वह वेरिएबल जो एटोमिक ऑपरेशन्स सपोर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "What is CountDownLatch?",
    "question_hi": "CountDownLatch क्या है?",
    "options_en": ["Synchronization aid that allows threads to wait", "Thread class", "Lock class", "Barrier class"],
    "options_hi": ["सिंक्रोनाइजेशन एड जो थ्रेड्स को वेट करने की अनुमति देता है", "Thread क्लास", "Lock क्लास", "Barrier क्लास"],
    "answer_en": "Synchronization aid that allows threads to wait",
    "answer_hi": "सिंक्रोनाइजेशन एड जो थ्रेड्स को वेट करने की अनुमति देता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is CyclicBarrier?",
    "question_hi": "CyclicBarrier क्या है?",
    "options_en": ["Synchronization aid that allows threads to wait at barrier", "Countdown latch", "Lock", "Semaphore"],
    "options_hi": ["सिंक्रोनाइजेशन एड जो थ्रेड्स को बैरियर पर वेट करने की अनुमति देता है", "काउंटडाउन लैच", "लॉक", "सेमाफोर"],
    "answer_en": "Synchronization aid that allows threads to wait at barrier",
    "answer_hi": "सिंक्रोनाइजेशन एड जो थ्रेड्स को बैरियर पर वेट करने की अनुमति देता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is Semaphore?",
    "question_hi": "सेमाफोर क्या है?",
    "options_en": ["Controls access to shared resource using permits", "Lock", "Barrier", "Latch"],
    "options_hi": ["पर्मिट्स उपयोग करके शेयर्ड रिसोर्स तक एक्सेस कंट्रोल करता है", "लॉक", "बैरियर", "लैच"],
    "answer_en": "Controls access to shared resource using permits",
    "answer_hi": "पर्मिट्स उपयोग करके शेयर्ड रिसोर्स तक एक्सेस कंट्रोल करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "What is ReentrantLock?",
    "question_hi": "ReentrantLock क्या है?",
    "options_en": ["Implementation of Lock interface", "Implementation of synchronized", "Barrier", "Semaphore"],
    "options_hi": ["Lock इंटरफेस का इम्प्लीमेंटेशन", "सिंक्रोनाइज्ड का इम्प्लीमेंटेशन", "बैरियर", "सेमाफोर"],
    "answer_en": "Implementation of Lock interface",
    "answer_hi": "Lock इंटरफेस का इम्प्लीमेंटेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is thread group?",
    "question_hi": "थ्रेड ग्रुप क्या है?",
    "options_en": ["Group of threads for management", "Single thread", "Thread pool", "Executor service"],
    "options_hi": ["मैनेजमेंट के लिए थ्रेड्स का ग्रुप", "सिंगल थ्रेड", "थ्रेड पूल", "Executor सर्विस"],
    "answer_en": "Group of threads for management",
    "answer_hi": "मैनेजमेंट के लिए थ्रेड्स का ग्रुप",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is Thread.currentThread()?",
    "question_hi": "Thread.currentThread() क्या है?",
    "options_en": ["Returns reference to current thread", "Returns main thread", "Returns daemon thread", "Returns thread group"],
    "options_hi": ["करंट थ्रेड का रेफरेंस रिटर्न करता है", "मेन थ्रेड रिटर्न करता है", "डेमन थ्रेड रिटर्न करता है", "थ्रेड ग्रुप रिटर्न करता है"],
    "answer_en": "Returns reference to current thread",
    "answer_hi": "करंट थ्रेड का रेफरेंस रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is thread dump?",
    "question_hi": "थ्रेड डंप क्या है?",
    "options_en": ["Snapshot of all threads and their states", "Memory dump", "CPU dump", "Stack dump"],
    "options_hi": ["सभी थ्रेड्स और उनके स्टेट्स का स्नैपशॉट", "मेमोरी डंप", "CPU डंप", "स्टैक डंप"],
    "answer_en": "Snapshot of all threads and their states",
    "answer_hi": "सभी थ्रेड्स और उनके स्टेट्स का स्नैपशॉट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is thread safety?",
    "question_hi": "थ्रेड सेफ्टी क्या है?",
    "options_en": ["Code that works correctly in multithreaded environment", "Code that works in single thread", "Code that is fast", "Code that is slow"],
    "options_hi": ["वह कोड जो मल्टीथ्रेडेड एनवायरनमेंट में सही ढंग से काम करता है", "वह कोड जो सिंगल थ्रेड में काम करता है", "वह कोड जो फास्ट है", "वह कोड जो स्लो है"],
    "answer_en": "Code that works correctly in multithreaded environment",
    "answer_hi": "वह कोड जो मल्टीथ्रेडेड एनवायरनमेंट में सही ढंग से काम करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "What is race condition?",
    "question_hi": "रेस कंडीशन क्या है?",
    "options_en": ["When outcome depends on sequence of thread execution", "When threads run sequentially", "When threads are synchronized", "When threads are deadlocked"],
    "options_hi": ["जब आउटकम थ्रेड एक्जीक्यूशन के सीक्वेंस पर डिपेंड करता है", "जब थ्रेड्स सीक्वेंशियली रन करते हैं", "जब थ्रेड्स सिंक्रोनाइज्ड होते हैं", "जब थ्रेड्स डेडलॉक होते हैं"],
    "answer_en": "When outcome depends on sequence of thread execution",
    "answer_hi": "जब आउटकम थ्रेड एक्जीक्यूशन के सीक्वेंस पर डिपेंड करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "What is Thread.interrupt()?",
    "question_hi": "Thread.interrupt() क्या है?",
    "options_en": ["Interrupts thread", "Starts thread", "Stops thread", "Pauses thread"],
    "options_hi": ["थ्रेड को इंटरप्ट करता है", "थ्रेड स्टार्ट करता है", "थ्रेड स्टॉप करता है", "थ्रेड पॉज करता है"],
    "answer_en": "Interrupts thread",
    "answer_hi": "थ्रेड को इंटरप्ट करता है",
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