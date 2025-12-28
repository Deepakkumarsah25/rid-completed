 
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
    "num": 1,
    "question_en": "What is the default value of a boolean variable in Java?",
    "question_hi": "जावा में बूलियन वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["true", "false", "0", "null"],
    "options_hi": ["true", "false", "0", "null"],
    "answer_en": "false",
    "answer_hi": "false",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "Which of these is not a primitive data type in Java?",
    "question_hi": "इनमें से कौन जावा में प्रिमिटिव डेटा टाइप नहीं है?",
    "options_en": ["int", "String", "boolean", "char"],
    "options_hi": ["int", "String", "boolean", "char"],
    "answer_en": "String",
    "answer_hi": "String",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to create an object in Java?",
    "question_hi": "जावा में ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["create", "new", "object", "allocate"],
    "options_hi": ["create", "new", "object", "allocate"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "Which method must be implemented by all threads in Java?",
    "question_hi": "जावा में सभी थ्रेड्स को कौन सी मेथड इम्प्लीमेंट करनी होती है?",
    "options_en": ["start()", "run()", "execute()", "begin()"],
    "options_hi": ["start()", "run()", "execute()", "begin()"],
    "answer_en": "run()",
    "answer_hi": "run()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "What is the size of int data type in Java?",
    "question_hi": "जावा में int डेटा टाइप का साइज कितना होता है?",
    "options_en": ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
    "options_hi": ["2 बाइट्स", "4 बाइट्स", "8 बाइट्स", "OS पर निर्भर"],
    "answer_en": "4 bytes",
    "answer_hi": "4 बाइट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "Which package is automatically imported in every Java program?",
    "question_hi": "कौन सा पैकेज हर जावा प्रोग्राम में ऑटोमेटिकली इम्पोर्ट होता है?",
    "options_en": ["java.util", "java.lang", "java.io", "java.awt"],
    "options_hi": ["java.util", "java.lang", "java.io", "java.awt"],
    "answer_en": "java.lang",
    "answer_hi": "java.lang",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "Which of these is a marker interface in Java?",
    "question_hi": "इनमें से कौन जावा में मार्कर इंटरफेस है?",
    "options_en": ["Runnable", "Serializable", "Comparator", "Comparable"],
    "options_hi": ["Runnable", "Serializable", "Comparator", "Comparable"],
    "answer_en": "Serializable",
    "answer_hi": "Serializable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to prevent method overriding?",
    "question_hi": "मेथड ओवरराइडिंग को रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["static", "final", "private", "protected"],
    "options_hi": ["static", "final", "private", "protected"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What is the parent class of all Java classes?",
    "question_hi": "सभी जावा क्लासेस की पेरेंट क्लास कौन सी है?",
    "options_en": ["Object", "Class", "Main", "Super"],
    "options_hi": ["Object", "Class", "Main", "Super"],
    "answer_en": "Object",
    "answer_hi": "Object",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "Which collection class allows duplicate elements?",
    "question_hi": "कौन सा कलेक्शन क्लास डुप्लिकेट एलिमेंट्स को अनुमति देता है?",
    "options_en": ["Set", "List", "Map", "Queue"],
    "options_hi": ["Set", "List", "Map", "Queue"],
    "answer_en": "List",
    "answer_hi": "List",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What does JVM stand for?",
    "question_hi": "JVM का पूरा नाम क्या है?",
    "options_en": [
      "Java Virtual Machine",
      "Java Variable Method",
      "Java Visual Machine",
      "Java Virtual Memory"
    ],
    "options_hi": [
      "Java Virtual Machine",
      "Java Variable Method",
      "Java Visual Machine",
      "Java Virtual Memory"
    ],
    "answer_en": "Java Virtual Machine",
    "answer_hi": "Java Virtual Machine",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "Which keyword is used for exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "attempt", "error", "catch"],
    "options_hi": ["try", "attempt", "error", "catch"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is the return type of a constructor?",
    "question_hi": "कंस्ट्रक्टर का रिटर्न टाइप क्या होता है?",
    "options_en": ["int", "void", "No return type", "Object"],
    "options_hi": ["int", "void", "कोई रिटर्न टाइप नहीं", "Object"],
    "answer_en": "No return type",
    "answer_hi": "कोई रिटर्न टाइप नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "Which of these is a synchronized collection?",
    "question_hi": "इनमें से कौन सिंक्रोनाइज्ड कलेक्शन है?",
    "options_en": ["ArrayList", "HashMap", "Vector", "HashSet"],
    "options_hi": ["ArrayList", "HashMap", "Vector", "HashSet"],
    "answer_en": "Vector",
    "answer_hi": "Vector",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is the default value of a local variable?",
    "question_hi": "लोकल वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0", "null", "No default value", "false"],
    "options_hi": ["0", "null", "कोई डिफॉल्ट वैल्यू नहीं", "false"],
    "answer_en": "No default value",
    "answer_hi": "कोई डिफॉल्ट वैल्यू नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "Which method is used to compare two strings in Java?",
    "question_hi": "जावा में दो स्ट्रिंग्स की तुलना करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["equals()", "compare()", "==", "check()"],
    "options_hi": ["equals()", "compare()", "==", "check()"],
    "answer_en": "equals()",
    "answer_hi": "equals()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "Which keyword is used to define an interface?",
    "question_hi": "इंटरफेस डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["interface", "abstract", "class", "implements"],
    "options_hi": ["interface", "abstract", "class", "implements"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is the superclass of all exception classes?",
    "question_hi": "सभी एक्सेप्शन क्लासेस की सुपरक्लास कौन सी है?",
    "options_en": ["Error", "RuntimeException", "Throwable", "Exception"],
    "options_hi": ["Error", "RuntimeException", "Throwable", "Exception"],
    "answer_en": "Throwable",
    "answer_hi": "Throwable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "Which of these is not a valid keyword in Java?",
    "question_hi": "इनमें से कौन जावा में वैलिड कीवर्ड नहीं है?",
    "options_en": ["goto", "const", "synchronized", "Both goto and const"],
    "options_hi": ["goto", "const", "synchronized", "दोनों goto और const"],
    "answer_en": "Both goto and const",
    "answer_hi": "दोनों goto और const",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is the purpose of finally block?",
    "question_hi": "finally ब्लॉक का उद्देश्य क्या है?",
    "options_en": [
      "To handle exceptions",
      "To define final variables",
      "To execute code always",
      "To terminate program"
    ],
    "options_hi": [
      "एक्सेप्शन हैंडल करने के लिए",
      "फाइनल वेरिएबल्स डिफाइन करने के लिए",
      "कोड हमेशा एक्जीक्यूट करने के लिए",
      "प्रोग्राम टर्मिनेट करने के लिए"
    ],
    "answer_en": "To execute code always",
    "answer_hi": "कोड हमेशा एक्जीक्यूट करने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "Which method is called when an object is garbage collected?",
    "question_hi": "जब ऑब्जेक्ट गार्बेज कलेक्ट किया जाता है तो कौन सी मेथड कॉल होती है?",
    "options_en": ["finalize()", "destroy()", "delete()", "remove()"],
    "options_hi": ["finalize()", "destroy()", "delete()", "remove()"],
    "answer_en": "finalize()",
    "answer_hi": "finalize()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "What is polymorphism in Java?",
    "question_hi": "जावा में पॉलीमॉर्फिज्म क्या है?",
    "options_en": [
      "One name many forms",
      "Data hiding",
      "Inheritance",
      "Encapsulation"
    ],
    "options_hi": [
      "एक नाम कई रूप",
      "डेटा हाइडिंग",
      "इनहेरिटेंस",
      "एनकैप्सुलेशन"
    ],
    "answer_en": "One name many forms",
    "answer_hi": "एक नाम कई रूप",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "Which of these is a compile-time polymorphism?",
    "question_hi": "इनमें से कौन कंपाइल-टाइम पॉलीमॉर्फिज्म है?",
    "options_en": [
      "Method overriding",
      "Method overloading",
      "Constructor overloading",
      "Both B and C"
    ],
    "options_hi": [
      "मेथड ओवरराइडिंग",
      "मेथड ओवरलोडिंग",
      "कंस्ट्रक्टर ओवरलोडिंग",
      "B और C दोनों"
    ],
    "answer_en": "Both B and C",
    "answer_hi": "B और C दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is the access level of protected modifier?",
    "question_hi": "protected मॉडिफायर का एक्सेस लेवल क्या है?",
    "options_en": [
      "Same class only",
      "Same package only",
      "Same package and subclasses",
      "Anywhere"
    ],
    "options_hi": [
      "सिर्फ समान क्लास",
      "सिर्फ समान पैकेज",
      "समान पैकेज और सबक्लासेस",
      "कहीं भी"
    ],
    "answer_en": "Same package and subclasses",
    "answer_hi": "समान पैकेज और सबक्लासेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "Which of these is not a Java feature?",
    "question_hi": "इनमें से कौन जावा फीचर नहीं है?",
    "options_en": [
      "Object-oriented",
      "Use of pointers",
      "Platform independent",
      "Dynamic"
    ],
    "options_hi": [
      "ऑब्जेक्ट-ओरिएंटेड",
      "पॉइंटर्स का उपयोग",
      "प्लेटफॉर्म इंडिपेंडेंट",
      "डायनामिक"
    ],
    "answer_en": "Use of pointers",
    "answer_hi": "पॉइंटर्स का उपयोग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "Which class is used to read input from keyboard?",
    "question_hi": "कीबोर्ड से इनपुट पढ़ने के लिए कौन सी क्लास उपयोग होती है?",
    "options_en": ["Scanner", "BufferedReader", "System.in", "All of these"],
    "options_hi": ["Scanner", "BufferedReader", "System.in", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "What is the default value of a char variable?",
    "question_hi": "char वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["' '", "'\\u0000'", "null", "0"],
    "options_hi": ["' '", "'\\u0000'", "null", "0"],
    "answer_en": "'\\u0000'",
    "answer_hi": "'\\u0000'",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "Which keyword is used to refer to current object?",
    "question_hi": "करंट ऑब्जेक्ट को रेफर करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["this", "super", "self", "current"],
    "options_hi": ["this", "super", "self", "current"],
    "answer_en": "this",
    "answer_hi": "this",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "Which method is used to create a thread?",
    "question_hi": "थ्रेड बनाने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": [
      "By extending Thread class",
      "By implementing Runnable interface",
      "Both A and B",
      "None of these"
    ],
    "options_hi": [
      "Thread क्लास एक्सटेंड करके",
      "Runnable इंटरफेस इम्प्लीमेंट करके",
      "A और B दोनों",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is the size of long data type in Java?",
    "question_hi": "जावा में long डेटा टाइप का साइज कितना होता है?",
    "options_en": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
    "options_hi": ["2 बाइट्स", "4 बाइट्स", "8 बाइट्स", "16 बाइट्स"],
    "answer_en": "8 bytes",
    "answer_hi": "8 बाइट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "Which of these is a runtime polymorphism?",
    "question_hi": "इनमें से कौन रनटाइम पॉलीमॉर्फिज्म है?",
    "options_en": [
      "Method overloading",
      "Constructor overloading",
      "Method overriding",
      "None of these"
    ],
    "options_hi": [
      "मेथड ओवरलोडिंग",
      "कंस्ट्रक्टर ओवरलोडिंग",
      "मेथड ओवरराइडिंग",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Method overriding",
    "answer_hi": "मेथड ओवरराइडिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "Which keyword is used to create a constant variable?",
    "question_hi": "कॉन्स्टेंट वेरिएबल बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["const", "final", "static", "constant"],
    "options_hi": ["const", "final", "static", "constant"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is the purpose of static keyword?",
    "question_hi": "static कीवर्ड का उद्देश्य क्या है?",
    "options_en": [
      "Memory management",
      "Access control",
      "Inheritance",
      "Polymorphism"
    ],
    "options_hi": [
      "मेमोरी मैनेजमेंट",
      "एक्सेस कंट्रोल",
      "इनहेरिटेंस",
      "पॉलीमॉर्फिज्म"
    ],
    "answer_en": "Memory management",
    "answer_hi": "मेमोरी मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "Which of these is not a valid loop in Java?",
    "question_hi": "इनमें से कौन जावा में वैलिड लूप नहीं है?",
    "options_en": ["for", "while", "do-while", "repeat-until"],
    "options_hi": ["for", "while", "do-while", "repeat-until"],
    "answer_en": "repeat-until",
    "answer_hi": "repeat-until",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "What is encapsulation in Java?",
    "question_hi": "जावा में एनकैप्सुलेशन क्या है?",
    "options_en": [
      "Wrapping data and methods together",
      "Hiding implementation details",
      "Both A and B",
      "None of these"
    ],
    "options_hi": [
      "डेटा और मेथड्स को एक साथ रैप करना",
      "इम्प्लीमेंटेशन डिटेल्स छिपाना",
      "A और B दोनों",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "Which method is used to convert String to int?",
    "question_hi": "String को int में कन्वर्ट करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["parseInt()", "valueOf()", "intValue()", "Both A and B"],
    "options_hi": ["parseInt()", "valueOf()", "intValue()", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "Which of these is a checked exception?",
    "question_hi": "इनमें से कौन चेक्ड एक्सेप्शन है?",
    "options_en": ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
    "options_hi": ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
    "answer_en": "IOException",
    "answer_hi": "IOException",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is method overloading?",
    "question_hi": "मेथड ओवरलोडिंग क्या है?",
    "options_en": [
      "Same method name with different parameters",
      "Different method name with same parameters",
      "Same method name in parent and child class",
      "None of these"
    ],
    "options_hi": [
      "समान मेथड नाम अलग-अलग पैरामीटर्स के साथ",
      "अलग मेथड नाम समान पैरामीटर्स के साथ",
      "पेरेंट और चाइल्ड क्लास में समान मेथड नाम",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Same method name with different parameters",
    "answer_hi": "समान मेथड नाम अलग-अलग पैरामीटर्स के साथ",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "Which keyword is used to exit from a loop?",
    "question_hi": "लूप से बाहर निकलने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["break", "continue", "exit", "return"],
    "options_hi": ["break", "continue", "exit", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is the default value of an object reference?",
    "question_hi": "ऑब्जेक्ट रेफरेंस का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0", "null", "false", "undefined"],
    "options_hi": ["0", "null", "false", "undefined"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "Which collection does not allow duplicate elements?",
    "question_hi": "कौन सा कलेक्शन डुप्लिकेट एलिमेंट्स की अनुमति नहीं देता?",
    "options_en": ["List", "Set", "Map", "Queue"],
    "options_hi": ["List", "Set", "Map", "Queue"],
    "answer_en": "Set",
    "answer_hi": "Set",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is abstraction in Java?",
    "question_hi": "जावा में एब्स्ट्रक्शन क्या है?",
    "options_en": [
      "Hiding implementation details",
      "Showing only essential features",
      "Both A and B",
      "None of these"
    ],
    "options_hi": [
      "इम्प्लीमेंटेशन डिटेल्स छिपाना",
      "सिर्फ जरूरी फीचर्स दिखाना",
      "A और B दोनों",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "Which method is used to start a thread?",
    "question_hi": "थ्रेड स्टार्ट करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["run()", "start()", "execute()", "begin()"],
    "options_hi": ["run()", "start()", "execute()", "begin()"],
    "answer_en": "start()",
    "answer_hi": "start()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "What is the purpose of super keyword?",
    "question_hi": "super कीवर्ड का उद्देश्य क्या है?",
    "options_en": [
      "To refer parent class object",
      "To call parent class constructor",
      "To call parent class method",
      "All of these"
    ],
    "options_hi": [
      "पेरेंट क्लास ऑब्जेक्ट को रेफर करने के लिए",
      "पेरेंट क्लास कंस्ट्रक्टर को कॉल करने के लिए",
      "पेरेंट क्लास मेथड को कॉल करने के लिए",
      "ये सभी"
    ],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "Which of these is a valid declaration of a String array?",
    "question_hi": "इनमें से String array का वैलिड डिक्लेरेशन कौन सा है?",
    "options_en": [
      "String arr[] = new String[5];",
      "String[] arr = new String[5];",
      "String arr = new String[5];",
      "Both A and B"
    ],
    "options_hi": [
      "String arr[] = new String[5];",
      "String[] arr = new String[5];",
      "String arr = new String[5];",
      "A और B दोनों"
    ],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is the return type of main method?",
    "question_hi": "main मेथड का रिटर्न टाइप क्या होता है?",
    "options_en": ["int", "void", "String", "Object"],
    "options_hi": ["int", "void", "String", "Object"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "Which operator is used for object comparison?",
    "question_hi": "ऑब्जेक्ट कम्पेरिजन के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["==", "equals()", "compare()", "Both A and B"],
    "options_hi": ["==", "equals()", "compare()", "A और B दोनों"],
    "answer_en": "equals()",
    "answer_hi": "equals()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is the purpose of final keyword?",
    "question_hi": "final कीवर्ड का उद्देश्य क्या है?",
    "options_en": [
      "To prevent inheritance",
      "To prevent method overriding",
      "To create constants",
      "All of these"
    ],
    "options_hi": [
      "इनहेरिटेंस रोकने के लिए",
      "मेथड ओवरराइडिंग रोकने के लिए",
      "कॉन्स्टेंट्स बनाने के लिए",
      "ये सभी"
    ],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "Which of these is not a type of inheritance in Java?",
    "question_hi": "इनमें से कौन जावा में इनहेरिटेंस का प्रकार नहीं है?",
    "options_en": [
      "Single inheritance",
      "Multiple inheritance",
      "Multilevel inheritance",
      "Hierarchical inheritance"
    ],
    "options_hi": [
      "सिंगल इनहेरिटेंस",
      "मल्टीपल इनहेरिटेंस",
      "मल्टीलेवल इनहेरिटेंस",
      "हाइरार्किकल इनहेरिटेंस"
    ],
    "answer_en": "Multiple inheritance",
    "answer_hi": "मल्टीपल इनहेरिटेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "Which keyword is used to inherit a class in Java?",
    "question_hi": "जावा में क्लास को इनहेरिट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["extends", "implements", "inherit", "super"],
    "options_hi": ["extends", "implements", "inherit", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 50
  }

        ];

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