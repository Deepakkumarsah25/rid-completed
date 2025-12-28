 
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
    "question_en": "Which of these is not a Java feature?",
    "question_hi": "निम्नलिखित में से कौन सा Java की विशेषता नहीं है?",
    "options_en": ["Object-oriented", "Use of pointers", "Portable", "Dynamic"],
    "options_hi": ["ऑब्जेक्ट ओरिएंटेड", "पॉइंटर्स का उपयोग", "पोर्टेबल", "डायनामिक"],
    "answer_en": "Use of pointers",
    "answer_hi": "पॉइंटर्स का उपयोग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "What is the extension of compiled Java classes?",
    "question_hi": "कंपाइल्ड Java क्लासेज का एक्सटेंशन क्या है?",
    "options_en": [".txt", ".js", ".class", ".java"],
    "options_hi": [".txt", ".js", ".class", ".java"],
    "answer_en": ".class",
    "answer_hi": ".class",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "Which of these cannot be used for a variable name in Java?",
    "question_hi": "Java में निम्नलिखित में से किसका उपयोग वेरिएबल नाम के लिए नहीं किया जा सकता?",
    "options_en": ["identifier", "123identifier", "$identifier", "_identifier"],
    "options_hi": ["identifier", "123identifier", "$identifier", "_identifier"],
    "answer_en": "123identifier",
    "answer_hi": "123identifier",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "What is the default value of byte datatype in Java?",
    "question_hi": "Java में byte डेटाटाइप का डिफॉल्ट वैल्यू क्या है?",
    "options_en": ["0", "0.0", "null", "Not defined"],
    "options_hi": ["0", "0.0", "null", "परिभाषित नहीं"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "Which of these is not a primitive data type?",
    "question_hi": "निम्नलिखित में से कौन सा प्रिमिटिव डेटा टाइप नहीं है?",
    "options_en": ["int", "String", "boolean", "float"],
    "options_hi": ["int", "String", "boolean", "float"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "Which keyword is used for inheritance in Java?",
    "question_hi": "Java में इनहेरिटेंस के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["super", "this", "extends", "inherit"],
    "options_hi": ["super", "this", "extends", "inherit"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "Which of these is a valid long literal?",
    "question_hi": "निम्नलिखित में से कौन सा वैध long लिटरल है?",
    "options_en": ["ABH8097", "L990023", "904423", "0xnf029L"],
    "options_hi": ["ABH8097", "L990023", "904423", "0xnf029L"],
    "answer_en": "0xnf029L",
    "answer_hi": "0xnf029L",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "What is the size of int in Java?",
    "question_hi": "Java में int का साइज क्या है?",
    "options_en": ["8 bits", "16 bits", "32 bits", "64 bits"],
    "options_hi": ["8 बिट्स", "16 बिट्स", "32 बिट्स", "64 बिट्स"],
    "answer_en": "32 bits",
    "answer_hi": "32 बिट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "Which of these operators is used to allocate memory to array variable?",
    "question_hi": "एरे वेरिएबल को मेमोरी allocate करने के लिए निम्नलिखित में से किस ऑपरेटर का उपयोग किया जाता है?",
    "options_en": ["malloc", "alloc", "new", "new malloc"],
    "options_hi": ["malloc", "alloc", "new", "new malloc"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "What is File.length() method?",
    "question_hi": "File.length() मेथड क्या है?",
    "options_en": ["Returns file size in bytes", "Returns file name", "Returns file path", "Returns file count"],
    "options_hi": ["फाइल साइज बाइट्स में रिटर्न करता है", "फाइल नाम रिटर्न करता है", "फाइल पथ रिटर्न करता है", "फाइल काउंट रिटर्न करता है"],
    "answer_en": "Returns file size in bytes",
    "answer_hi": "फाइल साइज बाइट्स में रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "Which of these is a superclass of all exception classes?",
    "question_hi": "निम्नलिखित में से कौन सभी एक्सेप्शन क्लासेज का सुपरक्लास है?",
    "options_en": ["Throwable", "Error", "RuntimeException", "Exception"],
    "options_hi": ["Throwable", "Error", "RuntimeException", "Exception"],
    "answer_en": "Throwable",
    "answer_hi": "Throwable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "Which keyword is used to refer to current object in Java?",
    "question_hi": "Java में करंट ऑब्जेक्ट को रेफर करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["this", "super", "new", "current"],
    "options_hi": ["this", "super", "new", "current"],
    "answer_en": "this",
    "answer_hi": "this",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is JVM?",
    "question_hi": "JVM क्या है?",
    "options_en": ["Java Virtual Machine", "Java Visual Machine", "Java Variable Machine", "Java Verified Machine"],
    "options_hi": ["Java Virtual Machine", "Java Visual Machine", "Java Variable Machine", "Java Verified Machine"],
    "answer_en": "Java Virtual Machine",
    "answer_hi": "Java Virtual Machine",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "Which method must be implemented by all threads?",
    "question_hi": "सभी थ्रेड्स द्वारा कौन सी मेथड इम्प्लीमेंट की जानी चाहिए?",
    "options_en": ["wait()", "start()", "stop()", "run()"],
    "options_hi": ["wait()", "start()", "stop()", "run()"],
    "answer_en": "run()",
    "answer_hi": "run()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "Which of these classes is used for input operations?",
    "question_hi": "इनपुट ऑपरेशन्स के लिए निम्नलिखित में से किस क्लास का उपयोग किया जाता है?",
    "options_en": ["InputStream", "OutputStream", "Writer", "Reader"],
    "options_hi": ["InputStream", "OutputStream", "Writer", "Reader"],
    "answer_en": "InputStream",
    "answer_hi": "InputStream",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "What is the range of short data type in Java?",
    "question_hi": "Java में short डेटा टाइप की रेंज क्या है?",
    "options_en": ["-128 to 127", "-32768 to 32767", "-2147483648 to 2147483647", "None"],
    "options_hi": ["-128 से 127", "-32768 से 32767", "-2147483648 से 2147483647", "कोई नहीं"],
    "answer_en": "-32768 to 32767",
    "answer_hi": "-32768 से 32767",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "Which of these is used to access member of class before object creation?",
    "question_hi": "ऑब्जेक्ट क्रिएशन से पहले क्लास के मेंबर को एक्सेस करने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["final", "static", "protected", "private"],
    "options_hi": ["final", "static", "protected", "private"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "Which of these statements is correct?",
    "question_hi": "निम्नलिखित में से कौन सा स्टेटमेंट सही है?",
    "options_en": ["Every class must contain main() method", "Applets do not require main() method", "There can be only one main() method in a program", "main() method must be made public"],
    "options_hi": ["हर क्लास में main() मेथड होना चाहिए", "ऐप्लेट्स को main() मेथड की आवश्यकता नहीं होती", "एक प्रोग्राम में केवल एक main() मेथड हो सकता है", "main() मेथड को public बनाना चाहिए"],
    "answer_en": "Applets do not require main() method",
    "answer_hi": "ऐप्लेट्स को main() मेथड की आवश्यकता नहीं होती",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "Which of these is not a valid array declaration?",
    "question_hi": "निम्नलिखित में से कौन सा वैध एरे डिक्लेरेशन नहीं है?",
    "options_en": ["int arr[] = new int[5]", "int [] arr = new int[5]", "int arr[] = new int[5]", "int arr[] = int [5] new"],
    "options_hi": ["int arr[] = new int[5]", "int [] arr = new int[5]", "int arr[] = new int[5]", "int arr[] = int [5] new"],
    "answer_en": "int arr[] = int [5] new",
    "answer_hi": "int arr[] = int [5] new",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is the output of relational operators?",
    "question_hi": "रिलेशनल ऑपरेटर्स का आउटपुट क्या होता है?",
    "options_en": ["Integer", "Boolean", "Character", "Float"],
    "options_hi": ["Integer", "Boolean", "Character", "Float"],
    "answer_en": "Boolean",
    "answer_hi": "Boolean",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "Which of these is a valid method overloading?",
    "question_hi": "निम्नलिखित में से कौन सा वैध मेथड ओवरलोडिंग है?",
    "options_en": ["Different return type", "Different number of parameters", "Different access modifiers", "Same parameters"],
    "options_hi": ["अलग रिटर्न टाइप", "पैरामीटर्स की अलग संख्या", "अलग एक्सेस मॉडिफायर्स", "समान पैरामीटर्स"],
    "answer_en": "Different number of parameters",
    "answer_hi": "पैरामीटर्स की अलग संख्या",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "Which of these packages contain Scanner class?",
    "question_hi": "Scanner क्लास निम्नलिखित में से किस पैकेज में होती है?",
    "options_en": ["java.lang", "java.util", "java.io", "java.awt"],
    "options_hi": ["java.lang", "java.util", "java.io", "java.awt"],
    "answer_en": "java.util",
    "answer_hi": "java.util",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "Which of these is a marker interface?",
    "question_hi": "निम्नलिखित में से कौन सा मार्कर इंटरफेस है?",
    "options_en": ["Runnable", "Serializable", "Comparable", "Cloneable"],
    "options_hi": ["Runnable", "Serializable", "Comparable", "Cloneable"],
    "answer_en": "Serializable",
    "answer_hi": "Serializable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is the default value of boolean?",
    "question_hi": "boolean का डिफॉल्ट वैल्यू क्या है?",
    "options_en": ["true", "false", "0", "null"],
    "options_hi": ["true", "false", "0", "null"],
    "answer_en": "false",
    "answer_hi": "false",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "Which of these keywords is used to prevent method overriding?",
    "question_hi": "मेथड ओवरराइडिंग को रोकने के लिए निम्नलिखित में से किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["static", "final", "private", "protected"],
    "options_hi": ["static", "final", "private", "protected"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What does JIT stand for?",
    "question_hi": "JIT का पूरा नाम क्या है?",
    "options_en": ["Java In Time", "Just In Time", "Java Instant Time", "Just Instant Time"],
    "options_hi": ["Java In Time", "Just In Time", "Java Instant Time", "Just Instant Time"],
    "answer_en": "Just In Time",
    "answer_hi": "Just In Time",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "Which of these is a wrapper class?",
    "question_hi": "निम्नलिखित में से कौन सी रैपर क्लास है?",
    "options_en": ["String", "Integer", "Array", "List"],
    "options_hi": ["String", "Integer", "Array", "List"],
    "answer_en": "Integer",
    "answer_hi": "Integer",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "Which of these is used for reading binary data?",
    "question_hi": "बाइनरी डेटा पढ़ने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Reader", "InputStream", "Writer", "Scanner"],
    "options_hi": ["Reader", "InputStream", "Writer", "Scanner"],
    "answer_en": "InputStream",
    "answer_hi": "InputStream",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "Which of these is not a loop structure?",
    "question_hi": "निम्नलिखित में से कौन सा लूप स्ट्रक्चर नहीं है?",
    "options_en": ["for", "while", "do-while", "repeat"],
    "options_hi": ["for", "while", "do-while", "repeat"],
    "answer_en": "repeat",
    "answer_hi": "repeat",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is the parent class of all classes in Java?",
    "question_hi": "Java में सभी क्लासेज का पैरेंट क्लास कौन सा है?",
    "options_en": ["Object", "Class", "Main", "Super"],
    "options_hi": ["Object", "Class", "Main", "Super"],
    "answer_en": "Object",
    "answer_hi": "Object",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "Which of these is used for multi-way branching?",
    "question_hi": "मल्टी-वे ब्रांचिंग के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["if", "if-else", "switch", "for"],
    "options_hi": ["if", "if-else", "switch", "for"],
    "answer_en": "switch",
    "answer_hi": "switch",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "Which of these is not a valid variable name?",
    "question_hi": "निम्नलिखित में से कौन सा वैध वेरिएबल नाम नहीं है?",
    "options_en": ["_variable", "$variable", "2variable", "variable2"],
    "options_hi": ["_variable", "$variable", "2variable", "variable2"],
    "answer_en": "2variable",
    "answer_hi": "2variable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is the size of char in Java?",
    "question_hi": "Java में char का साइज क्या है?",
    "options_en": ["8 bits", "16 bits", "32 bits", "64 bits"],
    "options_hi": ["8 बिट्स", "16 बिट्स", "32 बिट्स", "64 बिट्स"],
    "answer_en": "16 bits",
    "answer_hi": "16 बिट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "Which method is used to convert String to int?",
    "question_hi": "String को int में कन्वर्ट करने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["parseInt()", "valueOf()", "intValue()", "toString()"],
    "options_hi": ["parseInt()", "valueOf()", "intValue()", "toString()"],
    "answer_en": "parseInt()",
    "answer_hi": "parseInt()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "Which of these is used to create an abstract class?",
    "question_hi": "एब्सट्रैक्ट क्लास बनाने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["abstract", "Abstract", "Interface", "Final"],
    "options_hi": ["abstract", "Abstract", "Interface", "Final"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "Which of these is not an OOP concept?",
    "question_hi": "निम्नलिखित में से कौन सा OOP कॉन्सेप्ट नहीं है?",
    "options_en": ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"],
    "options_hi": ["इनहेरिटेंस", "पॉलिमॉर्फिज्म", "एनकैप्सुलेशन", "कंपाइलेशन"],
    "answer_en": "Compilation",
    "answer_hi": "कंपाइलेशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "Which keyword is used for exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["try", "catch", "throw", "All of these"],
    "options_hi": ["try", "catch", "throw", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is the default value of Object reference?",
    "question_hi": "ऑब्जेक्ट रेफरेंस का डिफॉल्ट वैल्यू क्या है?",
    "options_en": ["0", "null", "undefined", "void"],
    "options_hi": ["0", "null", "undefined", "void"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "Which of these collections maintains insertion order?",
    "question_hi": "निम्नलिखित में से कौन सा कलेक्शन इंसर्शन ऑर्डर मेंटेन करता है?",
    "options_en": ["HashSet", "TreeSet", "LinkedHashSet", "All"],
    "options_hi": ["HashSet", "TreeSet", "LinkedHashSet", "सभी"],
    "answer_en": "LinkedHashSet",
    "answer_hi": "LinkedHashSet",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "Which package is imported by default?",
    "question_hi": "डिफॉल्ट रूप से कौन सा पैकेज इम्पोर्ट किया जाता है?",
    "options_en": ["java.lang", "java.util", "java.io", "None"],
    "options_hi": ["java.lang", "java.util", "java.io", "कोई नहीं"],
    "answer_en": "java.lang",
    "answer_hi": "java.lang",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "Which of these is not a Java keyword?",
    "question_hi": "निम्नलिखित में से कौन सा Java कीवर्ड नहीं है?",
    "options_en": ["sizeof", "extends", "implements", "interface"],
    "options_hi": ["sizeof", "extends", "implements", "interface"],
    "answer_en": "sizeof",
    "answer_hi": "sizeof",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "Which method is called during garbage collection?",
    "question_hi": "गार्बेज कलेक्शन के दौरान किस मेथड को कॉल किया जाता है?",
    "options_en": ["finalize()", "destroy()", "delete()", "clean()"],
    "options_hi": ["finalize()", "destroy()", "delete()", "clean()"],
    "answer_en": "finalize()",
    "answer_hi": "finalize()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is the use of super keyword?",
    "question_hi": "super कीवर्ड का उपयोग क्या है?",
    "options_en": ["To call parent class constructor", "To call parent class method", "To refer parent class instance", "All of these"],
    "options_hi": ["पैरेंट क्लास कंस्ट्रक्टर को कॉल करने के लिए", "पैरेंट क्लास मेथड को कॉल करने के लिए", "पैरेंट क्लास इंस्टेंस को रेफर करने के लिए", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "Which of these is synchronized?",
    "question_hi": "निम्नलिखित में से कौन सिंक्रोनाइज्ड है?",
    "options_en": ["StringBuilder", "StringBuffer", "Both", "None"],
    "options_hi": ["StringBuilder", "StringBuffer", "दोनों", "कोई नहीं"],
    "answer_en": "StringBuffer",
    "answer_hi": "StringBuffer",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "Which of these cannot be serialized?",
    "question_hi": "निम्नलिखित में से किसे सीरियलाइज नहीं किया जा सकता?",
    "options_en": ["Static variables", "Transient variables", "Both", "None"],
    "options_hi": ["स्टैटिक वेरिएबल्स", "ट्रांसिएंट वेरिएबल्स", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "Which of these is used to define a constant?",
    "question_hi": "कॉन्स्टेंट डिफाइन करने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["static", "final", "const", "define"],
    "options_hi": ["static", "final", "const", "define"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "Which of these is faster?",
    "question_hi": "निम्नलिखित में से कौन सा तेज़ है?",
    "options_en": ["ArrayList", "LinkedList", "Both are same", "Depends on usage"],
    "options_hi": ["ArrayList", "LinkedList", "दोनों समान हैं", "उपयोग पर निर्भर करता है"],
    "answer_en": "Depends on usage",
    "answer_hi": "उपयोग पर निर्भर करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "Which interface is used for sorting?",
    "question_hi": "सॉर्टिंग के लिए किस इंटरफेस का उपयोग किया जाता है?",
    "options_en": ["Runnable", "Comparable", "Serializable", "Cloneable"],
    "options_hi": ["Runnable", "Comparable", "Serializable", "Cloneable"],
    "answer_en": "Comparable",
    "answer_hi": "Comparable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "What is the purpose of constructor?",
    "question_hi": "कंस्ट्रक्टर का उद्देश्य क्या है?",
    "options_en": ["Initialize object", "Destroy object", "Create class", "Inherit class"],
    "options_hi": ["ऑब्जेक्ट इनिशियलाइज़ करना", "ऑब्जेक्ट डिस्ट्रॉय करना", "क्लास क्रिएट करना", "क्लास इनहेरिट करना"],
    "answer_en": "Initialize object",
    "answer_hi": "ऑब्जेक्ट इनिशियलाइज़ करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "Which of these is used to create thread?",
    "question_hi": "थ्रेड क्रिएट करने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Extending Thread class", "Implementing Runnable interface", "Both", "None"],
    "options_hi": ["Thread क्लास को एक्सटेंड करके", "Runnable इंटरफेस इम्प्लीमेंट करके", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
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