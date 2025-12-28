 
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
    "question_en": "What is an exception in Java?",
    "question_hi": "जावा में एक्सेप्शन क्या है?",
    "options_en": ["An event that disrupts normal program flow", "A normal program termination", "A compilation error", "A syntax error"],
    "options_hi": ["एक इवेंट जो नॉर्मल प्रोग्राम फ्लो को डिस्ट्रब करता है", "एक नॉर्मल प्रोग्राम टर्मिनेशन", "एक कंपाइलेशन एरर", "एक सिंटैक्स एरर"],
    "answer_en": "An event that disrupts normal program flow",
    "answer_hi": "एक इवेंट जो नॉर्मल प्रोग्राम फ्लो को डिस्ट्रब करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "What is exception handling in Java?",
    "question_hi": "जावा में एक्सेप्शन हैंडलिंग क्या है?",
    "options_en": ["Mechanism to handle runtime errors", "Mechanism to handle compile errors", "Mechanism to handle syntax errors", "Mechanism to handle logical errors"],
    "options_hi": ["रनटाइम एरर्स हैंडल करने का मैकेनिज्म", "कंपाइल एरर्स हैंडल करने का मैकेनिज्म", "सिंटैक्स एरर्स हैंडल करने का मैकेनिज्म", "लॉजिकल एरर्स हैंडल करने का मैकेनिज्म"],
    "answer_en": "Mechanism to handle runtime errors",
    "answer_hi": "रनटाइम एरर्स हैंडल करने का मैकेनिज्म",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "What is the hierarchy of exception classes?",
    "question_hi": "एक्सेप्शन क्लासेस की हाइरार्की क्या है?",
    "options_en": ["Throwable -> Exception/Error", "Exception -> Throwable/Error", "Error -> Throwable/Exception", "Object -> Throwable"],
    "options_hi": ["Throwable -> Exception/Error", "Exception -> Throwable/Error", "Error -> Throwable/Exception", "Object -> Throwable"],
    "answer_en": "Throwable -> Exception/Error",
    "answer_hi": "Throwable -> Exception/Error",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "What is Throwable class?",
    "question_hi": "Throwable क्लास क्या है?",
    "options_en": ["Superclass of all errors and exceptions", "Subclass of Exception", "Subclass of Error", "Interface for exceptions"],
    "options_hi": ["सभी एरर्स और एक्सेप्शंस की सुपरक्लास", "Exception की सबक्लास", "Error की सबक्लास", "एक्सेप्शंस के लिए इंटरफेस"],
    "answer_en": "Superclass of all errors and exceptions",
    "answer_hi": "सभी एरर्स और एक्सेप्शंस की सुपरक्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "What is Exception class?",
    "question_hi": "Exception क्लास क्या है?",
    "options_en": ["Superclass of all checked exceptions", "Superclass of all errors", "Superclass of runtime exceptions", "Interface for exceptions"],
    "options_hi": ["सभी चेक्ड एक्सेप्शंस की सुपरक्लास", "सभी एरर्स की सुपरक्लास", "रनटाइम एक्सेप्शंस की सुपरक्लास", "एक्सेप्शंस के लिए इंटरफेस"],
    "answer_en": "Superclass of all checked exceptions",
    "answer_hi": "सभी चेक्ड एक्सेप्शंस की सुपरक्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "What is Error class?",
    "question_hi": "Error क्लास क्या है?",
    "options_en": ["Superclass of serious system errors", "Superclass of exceptions", "Subclass of Exception", "Interface for errors"],
    "options_hi": ["सीरियस सिस्टम एरर्स की सुपरक्लास", "एक्सेप्शंस की सुपरक्लास", "Exception की सबक्लास", "एरर्स के लिए इंटरफेस"],
    "answer_en": "Superclass of serious system errors",
    "answer_hi": "सीरियस सिस्टम एरर्स की सुपरक्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "What is RuntimeException class?",
    "question_hi": "RuntimeException क्लास क्या है?",
    "options_en": ["Superclass of unchecked exceptions", "Superclass of checked exceptions", "Subclass of Error", "Interface for runtime"],
    "options_hi": ["अनचेक्ड एक्सेप्शंस की सुपरक्लास", "चेक्ड एक्सेप्शंस की सुपरक्लास", "Error की सबक्लास", "रनटाइम के लिए इंटरफेस"],
    "answer_en": "Superclass of unchecked exceptions",
    "answer_hi": "अनचेक्ड एक्सेप्शंस की सुपरक्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "What are checked exceptions?",
    "question_hi": "चेक्ड एक्सेप्शंस क्या हैं?",
    "options_en": ["Exceptions checked at compile time", "Exceptions checked at runtime", "Exceptions not checked", "System errors"],
    "options_hi": ["कंपाइल टाइम पर चेक किए जाने वाले एक्सेप्शंस", "रनटाइम पर चेक किए जाने वाले एक्सेप्शंस", "चेक न किए जाने वाले एक्सेप्शंस", "सिस्टम एरर्स"],
    "answer_en": "Exceptions checked at compile time",
    "answer_hi": "कंपाइल टाइम पर चेक किए जाने वाले एक्सेप्शंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What are unchecked exceptions?",
    "question_hi": "अनचेक्ड एक्सेप्शंस क्या हैं?",
    "options_en": ["Exceptions not checked at compile time", "Exceptions checked at compile time", "System errors", "Compilation errors"],
    "options_hi": ["कंपाइल टाइम पर चेक न किए जाने वाले एक्सेप्शंस", "कंपाइल टाइम पर चेक किए जाने वाले एक्सेप्शंस", "सिस्टम एरर्स", "कंपाइलेशन एरर्स"],
    "answer_en": "Exceptions not checked at compile time",
    "answer_hi": "कंपाइल टाइम पर चेक न किए जाने वाले एक्सेप्शंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "What is try block?",
    "question_hi": "try ब्लॉक क्या है?",
    "options_en": ["Block that contains exception-prone code", "Block that handles exceptions", "Block that always executes", "Block that throws exceptions"],
    "options_hi": ["एक्सेप्शन-प्रोन कोड कंटेन करने वाला ब्लॉक", "एक्सेप्शंस हैंडल करने वाला ब्लॉक", "हमेशा एक्जीक्यूट होने वाला ब्लॉक", "एक्सेप्शंस थ्रो करने वाला ब्लॉक"],
    "answer_en": "Block that contains exception-prone code",
    "answer_hi": "एक्सेप्शन-प्रोन कोड कंटेन करने वाला ब्लॉक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What is catch block?",
    "question_hi": "catch ब्लॉक क्या है?",
    "options_en": ["Block that handles exceptions", "Block that contains risky code", "Block that always executes", "Block that throws exceptions"],
    "options_hi": ["एक्सेप्शंस हैंडल करने वाला ब्लॉक", "रिस्की कोड कंटेन करने वाला ब्लॉक", "हमेशा एक्जीक्यूट होने वाला ब्लॉक", "एक्सेप्शंस थ्रो करने वाला ब्लॉक"],
    "answer_en": "Block that handles exceptions",
    "answer_hi": "एक्सेप्शंस हैंडल करने वाला ब्लॉक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "What is finally block?",
    "question_hi": "finally ब्लॉक क्या है?",
    "options_en": ["Block that always executes", "Block that handles exceptions", "Block with risky code", "Block that throws exceptions"],
    "options_hi": ["हमेशा एक्जीक्यूट होने वाला ब्लॉक", "एक्सेप्शंस हैंडल करने वाला ब्लॉक", "रिस्की कोड वाला ब्लॉक", "एक्सेप्शंस थ्रो करने वाला ब्लॉक"],
    "answer_en": "Block that always executes",
    "answer_hi": "हमेशा एक्जीक्यूट होने वाला ब्लॉक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is throw keyword?",
    "question_hi": "throw कीवर्ड क्या है?",
    "options_en": ["Used to explicitly throw exception", "Used to declare exception", "Used to catch exception", "Used to handle exception"],
    "options_hi": ["एक्सेप्शन एक्सप्लिसिटली थ्रो करने के लिए उपयोग", "एक्सेप्शन डिक्लेयर करने के लिए उपयोग", "एक्सेप्शन कैच करने के लिए उपयोग", "एक्सेप्शन हैंडल करने के लिए उपयोग"],
    "answer_en": "Used to explicitly throw exception",
    "answer_hi": "एक्सेप्शन एक्सप्लिसिटली थ्रो करने के लिए उपयोग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "What is throws keyword?",
    "question_hi": "throws कीवर्ड क्या है?",
    "options_en": ["Used to declare exceptions", "Used to throw exceptions", "Used to catch exceptions", "Used to handle exceptions"],
    "options_hi": ["एक्सेप्शंस डिक्लेयर करने के लिए उपयोग", "एक्सेप्शंस थ्रो करने के लिए उपयोग", "एक्सेप्शंस कैच करने के लिए उपयोग", "एक्सेप्शंस हैंडल करने के लिए उपयोग"],
    "answer_en": "Used to declare exceptions",
    "answer_hi": "एक्सेप्शंस डिक्लेयर करने के लिए उपयोग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is try-with-resources?",
    "question_hi": "try-with-resources क्या है?",
    "options_en": ["Automatic resource management", "Manual resource management", "Exception handling only", "Error handling only"],
    "options_hi": ["ऑटोमेटिक रिसोर्स मैनेजमेंट", "मैनुअल रिसोर्स मैनेजमेंट", "सिर्फ एक्सेप्शन हैंडलिंग", "सिर्फ एरर हैंडलिंग"],
    "answer_en": "Automatic resource management",
    "answer_hi": "ऑटोमेटिक रिसोर्स मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "What is multiple catch blocks?",
    "question_hi": "मल्टीपल catch ब्लॉक्स क्या हैं?",
    "options_en": ["Multiple catch blocks for different exceptions", "Multiple try blocks", "Multiple finally blocks", "Multiple throw statements"],
    "options_hi": ["अलग-अलग एक्सेप्शंस के लिए मल्टीपल catch ब्लॉक्स", "मल्टीपल try ब्लॉक्स", "मल्टीपल finally ब्लॉक्स", "मल्टीपल throw स्टेटमेंट्स"],
    "answer_en": "Multiple catch blocks for different exceptions",
    "answer_hi": "अलग-अलग एक्सेप्शंस के लिए मल्टीपल catch ब्लॉक्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "What is nested try block?",
    "question_hi": "नेस्टेड try ब्लॉक क्या है?",
    "options_en": ["try block inside another try block", "catch block inside try block", "finally block inside try block", "throw inside try block"],
    "options_hi": ["एक try ब्लॉक के अंदर दूसरा try ब्लॉक", "try ब्लॉक के अंदर catch ब्लॉक", "try ब्लॉक के अंदर finally ब्लॉक", "try ब्लॉक के अंदर throw"],
    "answer_en": "try block inside another try block",
    "answer_hi": "एक try ब्लॉक के अंदर दूसरा try ब्लॉक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is NullPointerException?",
    "question_hi": "NullPointerException क्या है?",
    "options_en": ["When trying to use null reference", "When array index out of bounds", "When dividing by zero", "When file not found"],
    "options_hi": ["जब null रेफरेंस उपयोग करने की कोशिश करते हैं", "जब एरे इंडेक्स आउट ऑफ बाउंड होता है", "जब जीरो से डिवाइड करते हैं", "जब फाइल नहीं मिलती"],
    "answer_en": "When trying to use null reference",
    "answer_hi": "जब null रेफरेंस उपयोग करने की कोशिश करते हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "What is ArrayIndexOutOfBoundsException?",
    "question_hi": "ArrayIndexOutOfBoundsException क्या है?",
    "options_en": ["When accessing invalid array index", "When array is null", "When array is empty", "When array is full"],
    "options_hi": ["जब इनवैलिड एरे इंडेक्स एक्सेस करते हैं", "जब एरे null होता है", "जब एरे एम्प्टी होता है", "जब एरे फुल होता है"],
    "answer_en": "When accessing invalid array index",
    "answer_hi": "जब इनवैलिड एरे इंडेक्स एक्सेस करते हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is ArithmeticException?",
    "question_hi": "ArithmeticException क्या है?",
    "options_en": ["When arithmetic operation fails (e.g., divide by zero)", "When null pointer", "When array index out of bounds", "When file not found"],
    "options_hi": ["जब अरिथमेटिक ऑपरेशन फेल होता है (जैसे, जीरो से डिवाइड)", "जब null पॉइंटर", "जब एरे इंडेक्स आउट ऑफ बाउंड", "जब फाइल नहीं मिलती"],
    "answer_en": "When arithmetic operation fails (e.g., divide by zero)",
    "answer_hi": "जब अरिथमेटिक ऑपरेशन फेल होता है (जैसे, जीरो से डिवाइड)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "What is ClassCastException?",
    "question_hi": "ClassCastException क्या है?",
    "options_en": ["When invalid casting of objects", "When class not found", "When null pointer", "When arithmetic error"],
    "options_hi": ["जब ऑब्जेक्ट्स का इनवैलिड कास्टिंग", "जब क्लास नहीं मिलती", "जब null पॉइंटर", "जब अरिथमेटिक एरर"],
    "answer_en": "When invalid casting of objects",
    "answer_hi": "जब ऑब्जेक्ट्स का इनवैलिड कास्टिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "What is IllegalArgumentException?",
    "question_hi": "IllegalArgumentException क्या है?",
    "options_en": ["When illegal argument passed to method", "When illegal state", "When null pointer", "When arithmetic error"],
    "options_hi": ["जब मेथड को इलीगल आर्गुमेंट पास किया जाता है", "जब इलीगल स्टेट", "जब null पॉइंटर", "जब अरिथमेटिक एरर"],
    "answer_en": "When illegal argument passed to method",
    "answer_hi": "जब मेथड को इलीगल आर्गुमेंट पास किया जाता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "What is IllegalStateException?",
    "question_hi": "IllegalStateException क्या है?",
    "options_en": ["When object in illegal state for method call", "When illegal argument", "When null pointer", "When class not found"],
    "options_hi": ["जब ऑब्जेक्ट इलीगल स्टेट में होता है मेथड कॉल के लिए", "जब इलीगल आर्गुमेंट", "जब null पॉइंटर", "जब क्लास नहीं मिलती"],
    "answer_en": "When object in illegal state for method call",
    "answer_hi": "जब ऑब्जेक्ट इलीगल स्टेट में होता है मेथड कॉल के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is NumberFormatException?",
    "question_hi": "NumberFormatException क्या है?",
    "options_en": ["When converting string to number format", "When arithmetic error", "When null pointer", "When array index out of bounds"],
    "options_hi": ["जब स्ट्रिंग को नंबर फॉर्मेट में कन्वर्ट करते हैं", "जब अरिथमेटिक एरर", "जब null पॉइंटर", "जब एरे इंडेक्स आउट ऑफ बाउंड"],
    "answer_en": "When converting string to number format",
    "answer_hi": "जब स्ट्रिंग को नंबर फॉर्मेट में कन्वर्ट करते हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "What is IOException?",
    "question_hi": "IOException क्या है?",
    "options_en": ["Checked exception for I/O operations", "Unchecked exception", "Runtime exception", "Error"],
    "options_hi": ["I/O ऑपरेशन्स के लिए चेक्ड एक्सेप्शन", "अनचेक्ड एक्सेप्शन", "रनटाइम एक्सेप्शन", "एरर"],
    "answer_en": "Checked exception for I/O operations",
    "answer_hi": "I/O ऑपरेशन्स के लिए चेक्ड एक्सेप्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What is FileNotFoundException?",
    "question_hi": "FileNotFoundException क्या है?",
    "options_en": ["When file not found", "When file access denied", "When file too large", "When file corrupted"],
    "options_hi": ["जब फाइल नहीं मिलती", "जब फाइल एक्सेस डिनाइड", "जब फाइल बहुत बड़ी", "जब फाइल करप्टेड"],
    "answer_en": "When file not found",
    "answer_hi": "जब फाइल नहीं मिलती",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "What is SQLException?",
    "question_hi": "SQLException क्या है?",
    "options_en": ["Checked exception for database operations", "Unchecked exception", "Runtime exception", "Error"],
    "options_hi": ["डेटाबेस ऑपरेशन्स के लिए चेक्ड एक्सेप्शन", "अनचेक्ड एक्सेप्शन", "रनटाइम एक्सेप्शन", "एरर"],
    "answer_en": "Checked exception for database operations",
    "answer_hi": "डेटाबेस ऑपरेशन्स के लिए चेक्ड एक्सेप्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What is ClassNotFoundException?",
    "question_hi": "ClassNotFoundException क्या है?",
    "options_en": ["When class not found at runtime", "When class not compiled", "When class syntax error", "When class access denied"],
    "options_hi": ["जब रनटाइम पर क्लास नहीं मिलती", "जब क्लास कंपाइल नहीं हुई", "जब क्लास सिंटैक्स एरर", "जब क्लास एक्सेस डिनाइड"],
    "answer_en": "When class not found at runtime",
    "answer_hi": "जब रनटाइम पर क्लास नहीं मिलती",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "What is NoSuchMethodException?",
    "question_hi": "NoSuchMethodException क्या है?",
    "options_en": ["When method not found", "When class not found", "When field not found", "When constructor not found"],
    "options_hi": ["जब मेथड नहीं मिलती", "जब क्लास नहीं मिलती", "जब फील्ड नहीं मिलती", "जब कंस्ट्रक्टर नहीं मिलता"],
    "answer_en": "When method not found",
    "answer_hi": "जब मेथड नहीं मिलती",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is InterruptedException?",
    "question_hi": "InterruptedException क्या है?",
    "options_en": ["When thread interrupted", "When thread deadlocked", "When thread not started", "When thread terminated"],
    "options_hi": ["जब थ्रेड इंटरप्ट होता है", "जब थ्रेड डेडलॉक होता है", "जब थ्रेड स्टार्ट नहीं हुआ", "जब थ्रेड टर्मिनेट होता है"],
    "answer_en": "When thread interrupted",
    "answer_hi": "जब थ्रेड इंटरप्ट होता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "What is NoSuchFieldException?",
    "question_hi": "NoSuchFieldException क्या है?",
    "options_en": ["When field not found", "When method not found", "When class not found", "When constructor not found"],
    "options_hi": ["जब फील्ड नहीं मिलती", "जब मेथड नहीं मिलती", "जब क्लास नहीं मिलती", "जब कंस्ट्रक्टर नहीं मिलता"],
    "answer_en": "When field not found",
    "answer_hi": "जब फील्ड नहीं मिलती",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "What is InstantiationException?",
    "question_hi": "InstantiationException क्या है?",
    "options_en": ["When cannot instantiate class", "When class not found", "When method not found", "When field not found"],
    "options_hi": ["जब क्लास का इंस्टेंस नहीं बना सकते", "जब क्लास नहीं मिलती", "जब मेथड नहीं मिलती", "जब फील्ड नहीं मिलती"],
    "answer_en": "When cannot instantiate class",
    "answer_hi": "जब क्लास का इंस्टेंस नहीं बना सकते",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is IllegalAccessException?",
    "question_hi": "IllegalAccessException क्या है?",
    "options_en": ["When illegal access to class/method/field", "When class not found", "When instantiation error", "When method not found"],
    "options_hi": ["जब क्लास/मेथड/फील्ड का इलीगल एक्सेस", "जब क्लास नहीं मिलती", "जब इंस्टेंशिएशन एरर", "जब मेथड नहीं मिलती"],
    "answer_en": "When illegal access to class/method/field",
    "answer_hi": "जब क्लास/मेथड/फील्ड का इलीगल एक्सेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "What is CloneNotSupportedException?",
    "question_hi": "CloneNotSupportedException क्या है?",
    "options_en": ["When object cannot be cloned", "When object not found", "When class not found", "When method not found"],
    "options_hi": ["जब ऑब्जेक्ट क्लोन नहीं किया जा सकता", "जब ऑब्जेक्ट नहीं मिलता", "जब क्लास नहीं मिलती", "जब मेथड नहीं मिलती"],
    "answer_en": "When object cannot be cloned",
    "answer_hi": "जब ऑब्जेक्ट क्लोन नहीं किया जा सकता",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "What is StackOverflowError?",
    "question_hi": "StackOverflowError क्या है?",
    "options_en": ["When stack memory exhausted", "When heap memory exhausted", "When out of memory", "When null pointer"],
    "options_hi": ["जब स्टैक मेमोरी एक्सहॉस्ट हो जाती है", "जब हीप मेमोरी एक्सहॉस्ट हो जाती है", "जब मेमोरी खत्म हो जाती है", "जब null पॉइंटर"],
    "answer_en": "When stack memory exhausted",
    "answer_hi": "जब स्टैक मेमोरी एक्सहॉस्ट हो जाती है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "What is OutOfMemoryError?",
    "question_hi": "OutOfMemoryError क्या है?",
    "options_en": ["When heap memory exhausted", "When stack memory exhausted", "When disk space full", "When CPU overloaded"],
    "options_hi": ["जब हीप मेमोरी एक्सहॉस्ट हो जाती है", "जब स्टैक मेमोरी एक्सहॉस्ट हो जाती है", "जब डिस्क स्पेस फुल हो जाती है", "जब CPU ओवरलोडेड होता है"],
    "answer_en": "When heap memory exhausted",
    "answer_hi": "जब हीप मेमोरी एक्सहॉस्ट हो जाती है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "What is NoClassDefFoundError?",
    "question_hi": "NoClassDefFoundError क्या है?",
    "options_en": ["When class definition not found at runtime", "When class not compiled", "When class syntax error", "When class access denied"],
    "options_hi": ["जब रनटाइम पर क्लास डेफिनिशन नहीं मिलती", "जब क्लास कंपाइल नहीं हुई", "जब क्लास सिंटैक्स एरर", "जब क्लास एक्सेस डिनाइड"],
    "answer_en": "When class definition not found at runtime",
    "answer_hi": "जब रनटाइम पर क्लास डेफिनिशन नहीं मिलती",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is ExceptionInInitializerError?",
    "question_hi": "ExceptionInInitializerError क्या है?",
    "options_en": ["When exception in static initializer", "When exception in constructor", "When exception in method", "When exception in main"],
    "options_hi": ["जब स्टेटिक इनिशियलाइज़र में एक्सेप्शन", "जब कंस्ट्रक्टर में एक्सेप्शन", "जब मेथड में एक्सेप्शन", "जब main में एक्सेप्शन"],
    "answer_en": "When exception in static initializer",
    "answer_hi": "जब स्टेटिक इनिशियलाइज़र में एक्सेप्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "What is custom exception?",
    "question_hi": "कस्टम एक्सेप्शन क्या है?",
    "options_en": ["User-defined exception class", "Built-in exception", "System exception", "Runtime exception"],
    "options_hi": ["यूजर-डिफाइंड एक्सेप्शन क्लास", "बिल्ट-इन एक्सेप्शन", "सिस्टम एक्सेप्शन", "रनटाइम एक्सेप्शन"],
    "answer_en": "User-defined exception class",
    "answer_hi": "यूजर-डिफाइंड एक्सेप्शन क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "How to create custom checked exception?",
    "question_hi": "कस्टम चेक्ड एक्सेप्शन कैसे बनाएं?",
    "options_en": ["Extend Exception class", "Extend RuntimeException", "Extend Error", "Extend Throwable"],
    "options_hi": ["Exception क्लास extend करें", "RuntimeException extend करें", "Error extend करें", "Throwable extend करें"],
    "answer_en": "Extend Exception class",
    "answer_hi": "Exception क्लास extend करें",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "How to create custom unchecked exception?",
    "question_hi": "कस्टम अनचेक्ड एक्सेप्शन कैसे बनाएं?",
    "options_en": ["Extend RuntimeException", "Extend Exception", "Extend Error", "Extend Throwable"],
    "options_hi": ["RuntimeException extend करें", "Exception extend करें", "Error extend करें", "Throwable extend करें"],
    "answer_en": "Extend RuntimeException",
    "answer_hi": "RuntimeException extend करें",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is printStackTrace() method?",
    "question_hi": "printStackTrace() मेथड क्या है?",
    "options_en": ["Prints exception stack trace", "Prints exception message", "Prints exception cause", "Prints exception type"],
    "options_hi": ["एक्सेप्शन स्टैक ट्रेस प्रिंट करता है", "एक्सेप्शन मैसेज प्रिंट करता है", "एक्सेप्शन कॉज प्रिंट करता है", "एक्सेप्शन टाइप प्रिंट करता है"],
    "answer_en": "Prints exception stack trace",
    "answer_hi": "एक्सेप्शन स्टैक ट्रेस प्रिंट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is getMessage() method?",
    "question_hi": "getMessage() मेथड क्या है?",
    "options_en": ["Returns exception message", "Returns stack trace", "Returns exception cause", "Returns exception type"],
    "options_hi": ["एक्सेप्शन मैसेज रिटर्न करता है", "स्टैक ट्रेस रिटर्न करता है", "एक्सेप्शन कॉज रिटर्न करता है", "एक्सेप्शन टाइप रिटर्न करता है"],
    "answer_en": "Returns exception message",
    "answer_hi": "एक्सेप्शन मैसेज रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "What is getCause() method?",
    "question_hi": "getCause() मेथड क्या है?",
    "options_en": ["Returns cause of exception", "Returns message", "Returns stack trace", "Returns type"],
    "options_hi": ["एक्सेप्शन का कॉज रिटर्न करता है", "मैसेज रिटर्न करता है", "स्टैक ट्रेस रिटर्न करता है", "टाइप रिटर्न करता है"],
    "answer_en": "Returns cause of exception",
    "answer_hi": "एक्सेप्शन का कॉज रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is initCause() method?",
    "question_hi": "initCause() मेथड क्या है?",
    "options_en": ["Sets cause of exception", "Gets cause", "Gets message", "Prints stack trace"],
    "options_hi": ["एक्सेप्शन का कॉज सेट करता है", "कॉज गेट करता है", "मैसेज गेट करता है", "स्टैक ट्रेस प्रिंट करता है"],
    "answer_en": "Sets cause of exception",
    "answer_hi": "एक्सेप्शन का कॉज सेट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is suppressed exceptions?",
    "question_hi": "सप्रेस्ड एक्सेप्शंस क्या हैं?",
    "options_en": ["Exceptions suppressed in try-with-resources", "Exceptions caught in catch", "Exceptions thrown", "Exceptions ignored"],
    "options_hi": ["try-with-resources में सप्रेस्ड एक्सेप्शंस", "catch में कैच किए गए एक्सेप्शंस", "थ्रो किए गए एक्सेप्शंस", "इग्नोर किए गए एक्सेप्शंस"],
    "answer_en": "Exceptions suppressed in try-with-resources",
    "answer_hi": "try-with-resources में सप्रेस्ड एक्सेप्शंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is getSuppressed() method?",
    "question_hi": "getSuppressed() मेथड क्या है?",
    "options_en": ["Returns suppressed exceptions", "Returns caught exceptions", "Returns thrown exceptions", "Returns all exceptions"],
    "options_hi": ["सप्रेस्ड एक्सेप्शंस रिटर्न करता है", "कैच किए गए एक्सेप्शंस रिटर्न करता है", "थ्रो किए गए एक्सेप्शंस रिटर्न करता है", "सभी एक्सेप्शंस रिटर्न करता है"],
    "answer_en": "Returns suppressed exceptions",
    "answer_hi": "सप्रेस्ड एक्सेप्शंस रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is multi-catch block?",
    "question_hi": "मल्टी-कैच ब्लॉक क्या है?",
    "options_en": ["Single catch block for multiple exceptions", "Multiple catch blocks", "Nested catch blocks", "Finally with catch"],
    "options_hi": ["मल्टीपल एक्सेप्शंस के लिए सिंगल catch ब्लॉक", "मल्टीपल catch ब्लॉक्स", "नेस्टेड catch ब्लॉक्स", "catch के साथ finally"],
    "answer_en": "Single catch block for multiple exceptions",
    "answer_hi": "मल्टीपल एक्सेप्शंस के लिए सिंगल catch ब्लॉक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "Syntax for multi-catch block?",
    "question_hi": "मल्टी-कैच ब्लॉक का सिंटैक्स?",
    "options_en": ["catch (Exception1 | Exception2 e)", "catch (Exception1, Exception2)", "catch (Exception1 & Exception2)", "catch (Exception1; Exception2)"],
    "options_hi": ["catch (Exception1 | Exception2 e)", "catch (Exception1, Exception2)", "catch (Exception1 & Exception2)", "catch (Exception1; Exception2)"],
    "answer_en": "catch (Exception1 | Exception2 e)",
    "answer_hi": "catch (Exception1 | Exception2 e)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "What is try-finally without catch?",
    "question_hi": "catch के बिना try-finally क्या है?",
    "options_en": ["try block followed by finally only", "try with multiple finally", "try without any block", "finally without try"],
    "options_hi": ["सिर्फ finally के साथ try ब्लॉक", "मल्टीपल finally के साथ try", "बिना किसी ब्लॉक के try", "बिना try के finally"],
    "answer_en": "try block followed by finally only",
    "answer_hi": "सिर्फ finally के साथ try ब्लॉक",
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