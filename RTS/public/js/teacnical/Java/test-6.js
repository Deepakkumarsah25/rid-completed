 
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
    "question_en": "What is the entry point of a Java program?",
    "question_hi": "जावा प्रोग्राम का एंट्री पॉइंट क्या है?",
    "options_en": ["main() method", "init() method", "start() method", "run() method"],
    "options_hi": ["main() मेथड", "init() मेथड", "start() मेथड", "run() मेथड"],
    "answer_en": "main() method",
    "answer_hi": "main() मेथड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "What is the syntax of main method in Java?",
    "question_hi": "जावा में main मेथड का सिंटैक्स क्या है?",
    "options_en": ["public static void main(String[] args)", "public void main(String[] args)", "static void main(String[] args)", "void main(String[] args)"],
    "options_hi": ["public static void main(String[] args)", "public void main(String[] args)", "static void main(String[] args)", "void main(String[] args)"],
    "answer_en": "public static void main(String[] args)",
    "answer_hi": "public static void main(String[] args)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "Which data type is used for true/false values?",
    "question_hi": "true/false वैल्यूज के लिए कौन सा डेटा टाइप उपयोग होता है?",
    "options_en": ["boolean", "int", "char", "float"],
    "options_hi": ["boolean", "int", "char", "float"],
    "answer_en": "boolean",
    "answer_hi": "boolean",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "Which data type is used for single character?",
    "question_hi": "सिंगल कैरेक्टर के लिए कौन सा डेटा टाइप उपयोग होता है?",
    "options_en": ["char", "String", "int", "byte"],
    "options_hi": ["char", "String", "int", "byte"],
    "answer_en": "char",
    "answer_hi": "char",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "What is the range of byte data type?",
    "question_hi": "byte डेटा टाइप की रेंज क्या है?",
    "options_en": ["-128 to 127", "0 to 255", "-32768 to 32767", "-2147483648 to 2147483647"],
    "options_hi": ["-128 से 127", "0 से 255", "-32768 से 32767", "-2147483648 से 2147483647"],
    "answer_en": "-128 to 127",
    "answer_hi": "-128 से 127",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "What is the range of short data type?",
    "question_hi": "short डेटा टाइप की रेंज क्या है?",
    "options_en": ["-32768 to 32767", "-128 to 127", "-2147483648 to 2147483647", "0 to 65535"],
    "options_hi": ["-32768 से 32767", "-128 से 127", "-2147483648 से 2147483647", "0 से 65535"],
    "answer_en": "-32768 to 32767",
    "answer_hi": "-32768 से 32767",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "What is the range of int data type?",
    "question_hi": "int डेटा टाइप की रेंज क्या है?",
    "options_en": ["-2147483648 to 2147483647", "-32768 to 32767", "-128 to 127", "0 to 4294967295"],
    "options_hi": ["-2147483648 से 2147483647", "-32768 से 32767", "-128 से 127", "0 से 4294967295"],
    "answer_en": "-2147483648 to 2147483647",
    "answer_hi": "-2147483648 से 2147483647",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "What is the range of long data type?",
    "question_hi": "long डेटा टाइप की रेंज क्या है?",
    "options_en": ["-9.22e18 to 9.22e18", "-2.15e9 to 2.15e9", "-3.28e4 to 3.28e4", "-128 to 127"],
    "options_hi": ["-9.22e18 से 9.22e18", "-2.15e9 से 2.15e9", "-3.28e4 से 3.28e4", "-128 से 127"],
    "answer_en": "-9.22e18 to 9.22e18",
    "answer_hi": "-9.22e18 से 9.22e18",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What is the size of float data type?",
    "question_hi": "float डेटा टाइप का साइज कितना होता है?",
    "options_en": ["4 bytes", "8 bytes", "2 bytes", "16 bytes"],
    "options_hi": ["4 बाइट्स", "8 बाइट्स", "2 बाइट्स", "16 बाइट्स"],
    "answer_en": "4 bytes",
    "answer_hi": "4 बाइट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "What is the size of double data type?",
    "question_hi": "double डेटा टाइप का साइज कितना होता है?",
    "options_en": ["8 bytes", "4 bytes", "2 bytes", "16 bytes"],
    "options_hi": ["8 बाइट्स", "4 बाइट्स", "2 बाइट्स", "16 बाइट्स"],
    "answer_en": "8 bytes",
    "answer_hi": "8 बाइट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What is the default value of byte variable?",
    "question_hi": "byte वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0", "0.0", "false", "null"],
    "options_hi": ["0", "0.0", "false", "null"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "What is the default value of short variable?",
    "question_hi": "short वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0", "0.0", "false", "null"],
    "options_hi": ["0", "0.0", "false", "null"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is the default value of int variable?",
    "question_hi": "int वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0", "0.0", "false", "null"],
    "options_hi": ["0", "0.0", "false", "null"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "What is the default value of long variable?",
    "question_hi": "long वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0L", "0", "0.0", "null"],
    "options_hi": ["0L", "0", "0.0", "null"],
    "answer_en": "0L",
    "answer_hi": "0L",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is the default value of float variable?",
    "question_hi": "float वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0.0f", "0", "0.0", "null"],
    "options_hi": ["0.0f", "0", "0.0", "null"],
    "answer_en": "0.0f",
    "answer_hi": "0.0f",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "What is the default value of double variable?",
    "question_hi": "double वेरिएबल का डिफॉल्ट वैल्यू क्या होता है?",
    "options_en": ["0.0d", "0", "0.0", "null"],
    "options_hi": ["0.0d", "0", "0.0", "null"],
    "answer_en": "0.0d",
    "answer_hi": "0.0d",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "What is type casting in Java?",
    "question_hi": "जावा में टाइप कास्टिंग क्या है?",
    "options_en": ["Converting one data type to another", "Creating new type", "Deleting type", "Merging types"],
    "options_hi": ["एक डेटा टाइप को दूसरे में बदलना", "नया टाइप बनाना", "टाइप डिलीट करना", "टाइप्स मर्ज करना"],
    "answer_en": "Converting one data type to another",
    "answer_hi": "एक डेटा टाइप को दूसरे में बदलना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is widening type casting?",
    "question_hi": "वाइडनिंग टाइप कास्टिंग क्या है?",
    "options_en": ["Smaller to larger type", "Larger to smaller type", "Same size types", "Different types"],
    "options_hi": ["छोटे से बड़े टाइप में", "बड़े से छोटे टाइप में", "समान साइज टाइप्स", "अलग टाइप्स"],
    "answer_en": "Smaller to larger type",
    "answer_hi": "छोटे से बड़े टाइप में",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "What is narrowing type casting?",
    "question_hi": "नैरोइंग टाइप कास्टिंग क्या है?",
    "options_en": ["Larger to smaller type", "Smaller to larger type", "Same size types", "Different types"],
    "options_hi": ["बड़े से छोटे टाइप में", "छोटे से बड़े टाइप में", "समान साइज टाइप्स", "अलग टाइप्स"],
    "answer_en": "Larger to smaller type",
    "answer_hi": "बड़े से छोटे टाइप में",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What are operators in Java?",
    "question_hi": "जावा में ऑपरेटर्स क्या हैं?",
    "options_en": ["Symbols to perform operations", "Variables", "Methods", "Classes"],
    "options_hi": ["ऑपरेशन्स करने के लिए सिंबल्स", "वेरिएबल्स", "मेथड्स", "क्लासेस"],
    "answer_en": "Symbols to perform operations",
    "answer_hi": "ऑपरेशन्स करने के लिए सिंबल्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "Which operator is used for addition?",
    "question_hi": "एडिशन के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["+", "-", "*", "/"],
    "options_hi": ["+", "-", "*", "/"],
    "answer_en": "+",
    "answer_hi": "+",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "Which operator is used for subtraction?",
    "question_hi": "सबट्रैक्शन के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["-", "+", "*", "/"],
    "options_hi": ["-", "+", "*", "/"],
    "answer_en": "-",
    "answer_hi": "-",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "Which operator is used for multiplication?",
    "question_hi": "मल्टीप्लिकेशन के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["*", "+", "-", "/"],
    "options_hi": ["*", "+", "-", "/"],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "Which operator is used for division?",
    "question_hi": "डिवीजन के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["/", "+", "-", "*"],
    "options_hi": ["/", "+", "-", "*"],
    "answer_en": "/",
    "answer_hi": "/",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "Which operator is used for modulus?",
    "question_hi": "मॉड्यूलस के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["%", "/", "*", "+"],
    "options_hi": ["%", "/", "*", "+"],
    "answer_en": "%",
    "answer_hi": "%",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What are arithmetic operators?",
    "question_hi": "अरिथमेटिक ऑपरेटर्स क्या हैं?",
    "options_en": ["+ - * / %", "&& || !", "== != > <", "= += -= *= /="],
    "options_hi": ["+ - * / %", "&& || !", "== != > <", "= += -= *= /="],
    "answer_en": "+ - * / %",
    "answer_hi": "+ - * / %",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "What are assignment operators?",
    "question_hi": "असाइनमेंट ऑपरेटर्स क्या हैं?",
    "options_en": ["= += -= *= /=", "+ - * / %", "&& || !", "== != > <"],
    "options_hi": ["= += -= *= /=", "+ - * / %", "&& || !", "== != > <"],
    "answer_en": "= += -= *= /=",
    "answer_hi": "= += -= *= /=",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What are comparison operators?",
    "question_hi": "कंपेरिजन ऑपरेटर्स क्या हैं?",
    "options_en": ["== != > < >= <=", "&& || !", "+ - * / %", "= += -= *= /="],
    "options_hi": ["== != > < >= <=", "&& || !", "+ - * / %", "= += -= *= /="],
    "answer_en": "== != > < >= <=",
    "answer_hi": "== != > < >= <=",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "What are logical operators?",
    "question_hi": "लॉजिकल ऑपरेटर्स क्या हैं?",
    "options_en": ["&& || !", "== != > <", "+ - * / %", "= += -= *= /="],
    "options_hi": ["&& || !", "== != > <", "+ - * / %", "= += -= *= /="],
    "answer_en": "&& || !",
    "answer_hi": "&& || !",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is the ternary operator?",
    "question_hi": "टर्नरी ऑपरेटर क्या है?",
    "options_en": ["? :", "&&", "||", "!"],
    "options_hi": ["? :", "&&", "||", "!"],
    "answer_en": "? :",
    "answer_hi": "? :",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "What are bitwise operators?",
    "question_hi": "बिटवाइज ऑपरेटर्स क्या हैं?",
    "options_en": ["& | ^ ~ << >> >>>", "&& || !", "== != > <", "+ - * / %"],
    "options_hi": ["& | ^ ~ << >> >>>", "&& || !", "== != > <", "+ - * / %"],
    "answer_en": "& | ^ ~ << >> >>>",
    "answer_hi": "& | ^ ~ << >> >>>",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "What is string concatenation operator?",
    "question_hi": "स्ट्रिंग कंकैटनेशन ऑपरेटर क्या है?",
    "options_en": ["+", "&", "|", "^"],
    "options_hi": ["+", "&", "|", "^"],
    "answer_en": "+",
    "answer_hi": "+",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is instanceof operator?",
    "question_hi": "instanceof ऑपरेटर क्या है?",
    "options_en": ["Checks object type", "Creates instance", "Deletes instance", "Compares instances"],
    "options_hi": ["ऑब्जेक्ट टाइप चेक करता है", "इंस्टेंस बनाता है", "इंस्टेंस डिलीट करता है", "इंस्टेंस कंपेयर करता है"],
    "answer_en": "Checks object type",
    "answer_hi": "ऑब्जेक्ट टाइप चेक करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "What are unary operators?",
    "question_hi": "यूनरी ऑपरेटर्स क्या हैं?",
    "options_en": ["++ -- ! ~", "+ - * / %", "&& ||", "== !="],
    "options_hi": ["++ -- ! ~", "+ - * / %", "&& ||", "== !="],
    "answer_en": "++ -- ! ~",
    "answer_hi": "++ -- ! ~",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "What is pre-increment operator?",
    "question_hi": "प्री-इंक्रीमेंट ऑपरेटर क्या है?",
    "options_en": ["++variable", "variable++", "--variable", "variable--"],
    "options_hi": ["++variable", "variable++", "--variable", "variable--"],
    "answer_en": "++variable",
    "answer_hi": "++variable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "What is post-increment operator?",
    "question_hi": "पोस्ट-इंक्रीमेंट ऑपरेटर क्या है?",
    "options_en": ["variable++", "++variable", "variable--", "--variable"],
    "options_hi": ["variable++", "++variable", "variable--", "--variable"],
    "answer_en": "variable++",
    "answer_hi": "variable++",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "What is pre-decrement operator?",
    "question_hi": "प्री-डिक्रीमेंट ऑपरेटर क्या है?",
    "options_en": ["--variable", "variable--", "++variable", "variable++"],
    "options_hi": ["--variable", "variable--", "++variable", "variable++"],
    "answer_en": "--variable",
    "answer_hi": "--variable",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is post-decrement operator?",
    "question_hi": "पोस्ट-डिक्रीमेंट ऑपरेटर क्या है?",
    "options_en": ["variable--", "--variable", "variable++", "++variable"],
    "options_hi": ["variable--", "--variable", "variable++", "++variable"],
    "answer_en": "variable--",
    "answer_hi": "variable--",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "What is the NOT operator?",
    "question_hi": "NOT ऑपरेटर क्या है?",
    "options_en": ["!", "&&", "||", "&"],
    "options_hi": ["!", "&&", "||", "&"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is the AND operator?",
    "question_hi": "AND ऑपरेटर क्या है?",
    "options_en": ["&&", "||", "!", "&"],
    "options_hi": ["&&", "||", "!", "&"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "What is the OR operator?",
    "question_hi": "OR ऑपरेटर क्या है?",
    "options_en": ["||", "&&", "!", "|"],
    "options_hi": ["||", "&&", "!", "|"],
    "answer_en": "||",
    "answer_hi": "||",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is the bitwise AND operator?",
    "question_hi": "बिटवाइज AND ऑपरेटर क्या है?",
    "options_en": ["&", "&&", "|", "||"],
    "options_hi": ["&", "&&", "|", "||"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is the bitwise OR operator?",
    "question_hi": "बिटवाइज OR ऑपरेटर क्या है?",
    "options_en": ["|", "||", "&", "&&"],
    "options_hi": ["|", "||", "&", "&&"],
    "answer_en": "|",
    "answer_hi": "|",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "What is the bitwise XOR operator?",
    "question_hi": "बिटवाइज XOR ऑपरेटर क्या है?",
    "options_en": ["^", "&", "|", "~"],
    "options_hi": ["^", "&", "|", "~"],
    "answer_en": "^",
    "answer_hi": "^",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is the bitwise complement operator?",
    "question_hi": "बिटवाइज कॉम्प्लीमेंट ऑपरेटर क्या है?",
    "options_en": ["~", "!", "&", "|"],
    "options_hi": ["~", "!", "&", "|"],
    "answer_en": "~",
    "answer_hi": "~",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is left shift operator?",
    "question_hi": "लेफ्ट शिफ्ट ऑपरेटर क्या है?",
    "options_en": ["<<", ">>", ">>>", "~"],
    "options_hi": ["<<", ">>", ">>>", "~"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is right shift operator?",
    "question_hi": "राइट शिफ्ट ऑपरेटर क्या है?",
    "options_en": [">>", "<<", ">>>", "~"],
    "options_hi": [">>", "<<", ">>>", "~"],
    "answer_en": ">>",
    "answer_hi": ">>",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is unsigned right shift operator?",
    "question_hi": "अनसाइंड राइट शिफ्ट ऑपरेटर क्या है?",
    "options_en": [">>>", ">>", "<<", "~"],
    "options_hi": [">>>", ">>", "<<", "~"],
    "answer_en": ">>>",
    "answer_hi": ">>>",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "What is operator precedence?",
    "question_hi": "ऑपरेटर प्रीसीडेंस क्या है?",
    "options_en": ["Order of evaluation", "Speed of operation", "Type of operation", "Result of operation"],
    "options_hi": ["इवैल्यूएशन का ऑर्डर", "ऑपरेशन की स्पीड", "ऑपरेशन का टाइप", "ऑपरेशन का रिजल्ट"],
    "answer_en": "Order of evaluation",
    "answer_hi": "इवैल्यूएशन का ऑर्डर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "Which has highest precedence?",
    "question_hi": "किसकी प्रीसीडेंस सबसे ज्यादा है?",
    "options_en": ["Parentheses ()", "Multiplication *", "Addition +", "Assignment ="],
    "options_hi": ["पैरेंथेसिस ()", "मल्टीप्लिकेशन *", "एडिशन +", "असाइनमेंट ="],
    "answer_en": "Parentheses ()",
    "answer_hi": "पैरेंथेसिस ()",
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