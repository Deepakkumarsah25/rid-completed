 
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
    "question_en": "What is Java?",
    "question_hi": "जावा क्या है?",
    "options_en": ["Programming Language", "Coffee", "Operating System", "Database"],
    "options_hi": ["प्रोग्रामिंग भाषा", "कॉफी", "ऑपरेटिंग सिस्टम", "डेटाबेस"],
    "answer_en": "Programming Language",
    "answer_hi": "प्रोग्रामिंग भाषा",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "Who developed Java?",
    "question_hi": "जावा को किसने विकसित किया?",
    "options_en": ["Microsoft", "Sun Microsystems", "Google", "Oracle"],
    "options_hi": ["माइक्रोसॉफ्ट", "सन माइक्रोसिस्टम्स", "गूगल", "ओरेकल"],
    "answer_en": "Sun Microsystems",
    "answer_hi": "सन माइक्रोसिस्टम्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "What year was Java released?",
    "question_hi": "जावा किस वर्ष रिलीज हुआ?",
    "options_en": ["1991", "1995", "2000", "2005"],
    "options_hi": ["1991", "1995", "2000", "2005"],
    "answer_en": "1995",
    "answer_hi": "1995",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "What is JRE?",
    "question_hi": "JRE क्या है?",
    "options_en": ["Java Runtime Environment", "Java Running Engine", "Java Resource Environment", "Java Runtime Engine"],
    "options_hi": ["जावा रनटाइम एनवायरनमेंट", "जावा रनिंग इंजन", "जावा रिसोर्स एनवायरनमेंट", "जावा रनटाइम इंजन"],
    "answer_en": "Java Runtime Environment",
    "answer_hi": "जावा रनटाइम एनवायरनमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "What is JDK?",
    "question_hi": "JDK क्या है?",
    "options_en": ["Java Development Kit", "Java Deployment Kit", "Java Design Kit", "Java Debugging Kit"],
    "options_hi": ["जावा डेवलपमेंट किट", "जावा डिप्लॉयमेंट किट", "जावा डिजाइन किट", "जावा डीबगिंग किट"],
    "answer_en": "Java Development Kit",
    "answer_hi": "जावा डेवलपमेंट किट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "What does WORA stand for in Java?",
    "question_hi": "जावा में WORA का क्या अर्थ है?",
    "options_en": ["Write Once Read Anywhere", "Write Once Run Anywhere", "Write One Run All", "Write Only Run Always"],
    "options_hi": ["Write Once Read Anywhere", "Write Once Run Anywhere", "Write One Run All", "Write Only Run Always"],
    "answer_en": "Write Once Run Anywhere",
    "answer_hi": "Write Once Run Anywhere",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "What is a class in Java?",
    "question_hi": "जावा में क्लास क्या है?",
    "options_en": ["Blueprint for objects", "Collection of methods", "Set of variables", "Type of data"],
    "options_hi": ["ऑब्जेक्ट्स का ब्लूप्रिंट", "मेथड्स का कलेक्शन", "वेरिएबल्स का सेट", "डेटा का प्रकार"],
    "answer_en": "Blueprint for objects",
    "answer_hi": "ऑब्जेक्ट्स का ब्लूप्रिंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "What is an object in Java?",
    "question_hi": "जावा में ऑब्जेक्ट क्या है?",
    "options_en": ["Instance of class", "Type of variable", "Kind of method", "Form of data"],
    "options_hi": ["क्लास का इंस्टेंस", "वेरिएबल का प्रकार", "मेथड का प्रकार", "डेटा का रूप"],
    "answer_en": "Instance of class",
    "answer_hi": "क्लास का इंस्टेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What is a method in Java?",
    "question_hi": "जावा में मेथड क्या है?",
    "options_en": ["Function inside class", "Type of variable", "Kind of object", "Form of data"],
    "options_hi": ["क्लास के अंदर फंक्शन", "वेरिएबल का प्रकार", "ऑब्जेक्ट का प्रकार", "डेटा का रूप"],
    "answer_en": "Function inside class",
    "answer_hi": "क्लास के अंदर फंक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "What is a variable in Java?",
    "question_hi": "जावा में वेरिएबल क्या है?",
    "options_en": ["Container for data", "Type of method", "Kind of object", "Form of class"],
    "options_hi": ["डेटा का कंटेनर", "मेथड का प्रकार", "ऑब्जेक्ट का प्रकार", "क्लास का रूप"],
    "answer_en": "Container for data",
    "answer_hi": "डेटा का कंटेनर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What are the types of variables in Java?",
    "question_hi": "जावा में वेरिएबल्स के प्रकार क्या हैं?",
    "options_en": ["Local, Instance, Static", "Public, Private, Protected", "Int, Float, String", "Primitive, Non-primitive"],
    "options_hi": ["लोकल, इंस्टेंस, स्टेटिक", "पब्लिक, प्राइवेट, प्रोटेक्टेड", "Int, Float, String", "प्रिमिटिव, नॉन-प्रिमिटिव"],
    "answer_en": "Local, Instance, Static",
    "answer_hi": "लोकल, इंस्टेंस, स्टेटिक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "What is a constructor?",
    "question_hi": "कंस्ट्रक्टर क्या है?",
    "options_en": ["Special method to initialize objects", "Type of variable", "Kind of class", "Form of interface"],
    "options_hi": ["ऑब्जेक्ट्स इनिशियलाइज करने की विशेष मेथड", "वेरिएबल का प्रकार", "क्लास का प्रकार", "इंटरफेस का रूप"],
    "answer_en": "Special method to initialize objects",
    "answer_hi": "ऑब्जेक्ट्स इनिशियलाइज करने की विशेष मेथड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is inheritance?",
    "question_hi": "इनहेरिटेंस क्या है?",
    "options_en": ["Acquiring properties of parent class", "Creating new class", "Destroying objects", "Hiding data"],
    "options_hi": ["पेरेंट क्लास के प्रॉपर्टीज प्राप्त करना", "नई क्लास बनाना", "ऑब्जेक्ट्स डिस्ट्रॉय करना", "डेटा छिपाना"],
    "answer_en": "Acquiring properties of parent class",
    "answer_hi": "पेरेंट क्लास के प्रॉपर्टीज प्राप्त करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "What is polymorphism?",
    "question_hi": "पॉलीमॉर्फिज्म क्या है?",
    "options_en": ["One task performed in different ways", "Hiding data", "Wrapping data", "Inheriting properties"],
    "options_hi": ["एक कार्य को अलग-अलग तरीकों से करना", "डेटा छिपाना", "डेटा रैप करना", "प्रॉपर्टीज इनहेरिट करना"],
    "answer_en": "One task performed in different ways",
    "answer_hi": "एक कार्य को अलग-अलग तरीकों से करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is abstraction?",
    "question_hi": "एब्स्ट्रक्शन क्या है?",
    "options_en": ["Hiding implementation details", "Showing all details", "Inheriting properties", "Overriding methods"],
    "options_hi": ["इम्प्लीमेंटेशन डिटेल्स छिपाना", "सभी डिटेल्स दिखाना", "प्रॉपर्टीज इनहेरिट करना", "मेथड्स ओवरराइड करना"],
    "answer_en": "Hiding implementation details",
    "answer_hi": "इम्प्लीमेंटेशन डिटेल्स छिपाना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "What is encapsulation?",
    "question_hi": "एनकैप्सुलेशन क्या है?",
    "options_en": ["Wrapping data and methods together", "Inheriting properties", "Overriding methods", "Hiding class"],
    "options_hi": ["डेटा और मेथड्स को एक साथ रैप करना", "प्रॉपर्टीज इनहेरिट करना", "मेथड्स ओवरराइड करना", "क्लास छिपाना"],
    "answer_en": "Wrapping data and methods together",
    "answer_hi": "डेटा और मेथड्स को एक साथ रैप करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "What is an interface?",
    "question_hi": "इंटरफेस क्या है?",
    "options_en": ["Blueprint of class", "Type of object", "Kind of method", "Form of variable"],
    "options_hi": ["क्लास का ब्लूप्रिंट", "ऑब्जेक्ट का प्रकार", "मेथड का प्रकार", "वेरिएबल का रूप"],
    "answer_en": "Blueprint of class",
    "answer_hi": "क्लास का ब्लूप्रिंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is an abstract class?",
    "question_hi": "अब्सट्रैक्ट क्लास क्या है?",
    "options_en": ["Class that cannot be instantiated", "Class with all methods", "Class without variables", "Class that is final"],
    "options_hi": ["वह क्लास जिसका इंस्टेंस नहीं बनाया जा सकता", "सभी मेथड्स वाली क्लास", "बिना वेरिएबल्स की क्लास", "फाइनल क्लास"],
    "answer_en": "Class that cannot be instantiated",
    "answer_hi": "वह क्लास जिसका इंस्टेंस नहीं बनाया जा सकता",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "What is a package?",
    "question_hi": "पैकेज क्या है?",
    "options_en": ["Collection of related classes", "Type of method", "Kind of object", "Form of interface"],
    "options_hi": ["संबंधित क्लासेस का कलेक्शन", "मेथड का प्रकार", "ऑब्जेक्ट का प्रकार", "इंटरफेस का रूप"],
    "answer_en": "Collection of related classes",
    "answer_hi": "संबंधित क्लासेस का कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग क्या है?",
    "options_en": ["Handling runtime errors", "Compile time errors", "Logical errors", "Syntax errors"],
    "options_hi": ["रनटाइम एरर्स हैंडल करना", "कंपाइल टाइम एरर्स", "लॉजिकल एरर्स", "सिंटैक्स एरर्स"],
    "answer_en": "Handling runtime errors",
    "answer_hi": "रनटाइम एरर्स हैंडल करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "What are the types of exceptions?",
    "question_hi": "एक्सेप्शन्स के प्रकार क्या हैं?",
    "options_en": ["Checked and Unchecked", "Runtime and Compile", "Error and Exception", "All of these"],
    "options_hi": ["चेक्ड और अनचेक्ड", "रनटाइम और कंपाइल", "एरर और एक्सेप्शन", "ये सभी"],
    "answer_en": "Checked and Unchecked",
    "answer_hi": "चेक्ड और अनचेक्ड",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "What is multithreading?",
    "question_hi": "मल्टीथ्रेडिंग क्या है?",
    "options_en": ["Executing multiple threads simultaneously", "Multiple processes", "Multiple programs", "Multiple computers"],
    "options_hi": ["एक साथ कई थ्रेड्स एक्जीक्यूट करना", "कई प्रोसेसेस", "कई प्रोग्राम", "कई कंप्यूटर"],
    "answer_en": "Executing multiple threads simultaneously",
    "answer_hi": "एक साथ कई थ्रेड्स एक्जीक्यूट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "What is synchronization?",
    "question_hi": "सिंक्रोनाइजेशन क्या है?",
    "options_en": ["Controlling access to shared resources", "Speeding up threads", "Slowing down threads", "Stopping threads"],
    "options_hi": ["शेयर्ड रिसोर्सेस तक एक्सेस कंट्रोल करना", "थ्रेड्स को स्पीड अप करना", "थ्रेड्स को स्लो डाउन करना", "थ्रेड्स रोकना"],
    "answer_en": "Controlling access to shared resources",
    "answer_hi": "शेयर्ड रिसोर्सेस तक एक्सेस कंट्रोल करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is garbage collection?",
    "question_hi": "गार्बेज कलेक्शन क्या है?",
    "options_en": ["Automatic memory management", "Manual memory management", "File management", "Process management"],
    "options_hi": ["ऑटोमेटिक मेमोरी मैनेजमेंट", "मैनुअल मेमोरी मैनेजमेंट", "फाइल मैनेजमेंट", "प्रोसेस मैनेजमेंट"],
    "answer_en": "Automatic memory management",
    "answer_hi": "ऑटोमेटिक मेमोरी मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "What is serialization?",
    "question_hi": "सीरियलाइजेशन क्या है?",
    "options_en": ["Converting object to byte stream", "Converting byte to object", "Compressing object", "Encrypting object"],
    "options_hi": ["ऑब्जेक्ट को बाइट स्ट्रीम में बदलना", "बाइट को ऑब्जेक्ट में बदलना", "ऑब्जेक्ट कंप्रेस करना", "ऑब्जेक्ट एन्क्रिप्ट करना"],
    "answer_en": "Converting object to byte stream",
    "answer_hi": "ऑब्जेक्ट को बाइट स्ट्रीम में बदलना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What is deserialization?",
    "question_hi": "डीसीरियलाइजेशन क्या है?",
    "options_en": ["Converting byte stream to object", "Converting object to byte", "Decompressing object", "Decrypting object"],
    "options_hi": ["बाइट स्ट्रीम को ऑब्जेक्ट में बदलना", "ऑब्जेक्ट को बाइट में बदलना", "ऑब्जेक्ट डिकंप्रेस करना", "ऑब्जेक्ट डिक्रिप्ट करना"],
    "answer_en": "Converting byte stream to object",
    "answer_hi": "बाइट स्ट्रीम को ऑब्जेक्ट में बदलना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "What is reflection?",
    "question_hi": "रिफ्लेक्शन क्या है?",
    "options_en": ["Inspecting class at runtime", "Compile time checking", "Object creation", "Memory allocation"],
    "options_hi": ["रनटाइम पर क्लास इंस्पेक्ट करना", "कंपाइल टाइम चेकिंग", "ऑब्जेक्ट क्रिएशन", "मेमोरी एलोकेशन"],
    "answer_en": "Inspecting class at runtime",
    "answer_hi": "रनटाइम पर क्लास इंस्पेक्ट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What is annotation?",
    "question_hi": "एनोटेशन क्या है?",
    "options_en": ["Metadata about code", "Comment in code", "Error in code", "Warning in code"],
    "options_hi": ["कोड के बारे में मेटाडेटा", "कोड में कमेंट", "कोड में एरर", "कोड में वार्निंग"],
    "answer_en": "Metadata about code",
    "answer_hi": "कोड के बारे में मेटाडेटा",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "What is generics?",
    "question_hi": "जेनेरिक्स क्या है?",
    "options_en": ["Type safety feature", "Memory feature", "Speed feature", "Security feature"],
    "options_hi": ["टाइप सेफ्टी फीचर", "मेमोरी फीचर", "स्पीड फीचर", "सिक्योरिटी फीचर"],
    "answer_en": "Type safety feature",
    "answer_hi": "टाइप सेफ्टी फीचर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is enum?",
    "question_hi": "enum क्या है?",
    "options_en": ["Collection of constants", "Collection of variables", "Collection of methods", "Collection of classes"],
    "options_hi": ["कॉन्स्टेंट्स का कलेक्शन", "वेरिएबल्स का कलेक्शन", "मेथड्स का कलेक्शन", "क्लासेस का कलेक्शन"],
    "answer_en": "Collection of constants",
    "answer_hi": "कॉन्स्टेंट्स का कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "What is autoboxing?",
    "question_hi": "ऑटोबॉक्सिंग क्या है?",
    "options_en": ["Primitive to wrapper conversion", "Wrapper to primitive conversion", "Object to primitive", "Primitive to object"],
    "options_hi": ["प्रिमिटिव से रैपर कन्वर्जन", "रैपर से प्रिमिटिव कन्वर्जन", "ऑब्जेक्ट से प्रिमिटिव", "प्रिमिटिव से ऑब्जेक्ट"],
    "answer_en": "Primitive to wrapper conversion",
    "answer_hi": "प्रिमिटिव से रैपर कन्वर्जन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "What is unboxing?",
    "question_hi": "अनबॉक्सिंग क्या है?",
    "options_en": ["Wrapper to primitive conversion", "Primitive to wrapper", "Object to wrapper", "Wrapper to object"],
    "options_hi": ["रैपर से प्रिमिटिव कन्वर्जन", "प्रिमिटिव से रैपर", "ऑब्जेक्ट से रैपर", "रैपर से ऑब्जेक्ट"],
    "answer_en": "Wrapper to primitive conversion",
    "answer_hi": "रैपर से प्रिमिटिव कन्वर्जन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is varargs?",
    "question_hi": "वैरार्ग्स क्या है?",
    "options_en": ["Variable arguments", "Fixed arguments", "Optional arguments", "Required arguments"],
    "options_hi": ["वेरिएबल आर्गुमेंट्स", "फिक्स्ड आर्गुमेंट्स", "ऑप्शनल आर्गुमेंट्स", "रिक्वायर्ड आर्गुमेंट्स"],
    "answer_en": "Variable arguments",
    "answer_hi": "वेरिएबल आर्गुमेंट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "What is static import?",
    "question_hi": "स्टेटिक इम्पोर्ट क्या है?",
    "options_en": ["Importing static members", "Importing classes", "Importing packages", "Importing methods"],
    "options_hi": ["स्टेटिक मेंबर्स इम्पोर्ट करना", "क्लासेस इम्पोर्ट करना", "पैकेजेस इम्पोर्ट करना", "मेथड्स इम्पोर्ट करना"],
    "answer_en": "Importing static members",
    "answer_hi": "स्टेटिक मेंबर्स इम्पोर्ट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "What is try-with-resources?",
    "question_hi": "ट्राई-विथ-रिसोर्सेस क्या है?",
    "options_en": ["Automatic resource management", "Manual resource management", "File management", "Memory management"],
    "options_hi": ["ऑटोमेटिक रिसोर्स मैनेजमेंट", "मैनुअल रिसोर्स मैनेजमेंट", "फाइल मैनेजमेंट", "मेमोरी मैनेजमेंट"],
    "answer_en": "Automatic resource management",
    "answer_hi": "ऑटोमेटिक रिसोर्स मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "What is lambda expression?",
    "question_hi": "लैम्बडा एक्सप्रेशन क्या है?",
    "options_en": ["Anonymous function", "Named function", "Static function", "Final function"],
    "options_hi": ["एनोनिमस फंक्शन", "नामित फंक्शन", "स्टेटिक फंक्शन", "फाइनल फंक्शन"],
    "answer_en": "Anonymous function",
    "answer_hi": "एनोनिमस फंक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "What is method reference?",
    "question_hi": "मेथड रेफरेंस क्या है?",
    "options_en": ["Referencing method by name", "Creating new method", "Overriding method", "Hiding method"],
    "options_hi": ["नाम से मेथड रेफर करना", "नई मेथड बनाना", "मेथड ओवरराइड करना", "मेथड छिपाना"],
    "answer_en": "Referencing method by name",
    "answer_hi": "नाम से मेथड रेफर करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is functional interface?",
    "question_hi": "फंक्शनल इंटरफेस क्या है?",
    "options_en": ["Interface with one abstract method", "Interface with many methods", "Abstract class", "Normal class"],
    "options_hi": ["एक अब्सट्रैक्ट मेथड वाला इंटरफेस", "कई मेथड्स वाला इंटरफेस", "अब्सट्रैक्ट क्लास", "नॉर्मल क्लास"],
    "answer_en": "Interface with one abstract method",
    "answer_hi": "एक अब्सट्रैक्ट मेथड वाला इंटरफेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "What is stream API?",
    "question_hi": "स्ट्रीम API क्या है?",
    "options_en": ["Processing collections", "File processing", "Network processing", "Database processing"],
    "options_hi": ["कलेक्शन्स प्रोसेसिंग", "फाइल प्रोसेसिंग", "नेटवर्क प्रोसेसिंग", "डेटाबेस प्रोसेसिंग"],
    "answer_en": "Processing collections",
    "answer_hi": "कलेक्शन्स प्रोसेसिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is Optional class?",
    "question_hi": "ऑप्शनल क्लास क्या है?",
    "options_en": ["Container for null values", "Container for objects", "Container for primitives", "Container for arrays"],
    "options_hi": ["null वैल्यूज के लिए कंटेनर", "ऑब्जेक्ट्स के लिए कंटेनर", "प्रिमिटिव्स के लिए कंटेनर", "अरे के लिए कंटेनर"],
    "answer_en": "Container for null values",
    "answer_hi": "null वैल्यूज के लिए कंटेनर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "What is module system?",
    "question_hi": "मॉड्यूल सिस्टम क्या है?",
    "options_en": ["Java Platform Module System", "Memory module system", "File module system", "Network module system"],
    "options_hi": ["जावा प्लेटफॉर्म मॉड्यूल सिस्टम", "मेमोरी मॉड्यूल सिस्टम", "फाइल मॉड्यूल सिस्टम", "नेटवर्क मॉड्यूल सिस्टम"],
    "answer_en": "Java Platform Module System",
    "answer_hi": "जावा प्लेटफॉर्म मॉड्यूल सिस्टम",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is record?",
    "question_hi": "रिकॉर्ड क्या है?",
    "options_en": ["Immutable data class", "Mutable data class", "Abstract class", "Interface"],
    "options_hi": ["इम्यूटेबल डेटा क्लास", "म्यूटेबल डेटा क्लास", "अब्सट्रैक्ट क्लास", "इंटरफेस"],
    "answer_en": "Immutable data class",
    "answer_hi": "इम्यूटेबल डेटा क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is sealed class?",
    "question_hi": "सील्ड क्लास क्या है?",
    "options_en": ["Restricts which classes can extend it", "Allows all classes to extend", "Cannot be extended", "Must be extended"],
    "options_hi": ["यह रिस्ट्रिक्ट करता है कि कौन सी क्लासेस इसे extend कर सकती हैं", "सभी क्लासेस को extend करने की अनुमति देता है", "extend नहीं किया जा सकता", "extend किया जाना चाहिए"],
    "answer_en": "Restricts which classes can extend it",
    "answer_hi": "यह रिस्ट्रिक्ट करता है कि कौन सी क्लासेस इसे extend कर सकती हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "What is pattern matching?",
    "question_hi": "पैटर्न मैचिंग क्या है?",
    "options_en": ["Testing and extracting components", "Matching strings", "Comparing patterns", "Finding patterns"],
    "options_hi": ["कंपोनेंट्स टेस्ट और एक्सट्रैक्ट करना", "स्ट्रिंग्स मैच करना", "पैटर्न्स कंपेयर करना", "पैटर्न्स ढूंढना"],
    "answer_en": "Testing and extracting components",
    "answer_hi": "कंपोनेंट्स टेस्ट और एक्सट्रैक्ट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is switch expression?",
    "question_hi": "स्विच एक्सप्रेशन क्या है?",
    "options_en": ["Switch that returns value", "Switch statement", "If-else statement", "Loop statement"],
    "options_hi": ["वैल्यू रिटर्न करने वाला स्विच", "स्विच स्टेटमेंट", "If-else स्टेटमेंट", "लूप स्टेटमेंट"],
    "answer_en": "Switch that returns value",
    "answer_hi": "वैल्यू रिटर्न करने वाला स्विच",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is text blocks?",
    "question_hi": "टेक्स्ट ब्लॉक्स क्या है?",
    "options_en": ["Multi-line strings", "Single line strings", "Character blocks", "Byte blocks"],
    "options_hi": ["मल्टी-लाइन स्ट्रिंग्स", "सिंगल लाइन स्ट्रिंग्स", "कैरेक्टर ब्लॉक्स", "बाइट ब्लॉक्स"],
    "answer_en": "Multi-line strings",
    "answer_hi": "मल्टी-लाइन स्ट्रिंग्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is foreign function interface?",
    "question_hi": "फॉरेन फंक्शन इंटरफेस क्या है?",
    "options_en": ["Calling native code", "Calling Java code", "Calling web services", "Calling databases"],
    "options_hi": ["नेटिव कोड कॉल करना", "जावा कोड कॉल करना", "वेब सर्विसेस कॉल करना", "डेटाबेसेस कॉल करना"],
    "answer_en": "Calling native code",
    "answer_hi": "नेटिव कोड कॉल करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is virtual threads?",
    "question_hi": "वर्चुअल थ्रेड्स क्या है?",
    "options_en": ["Lightweight threads", "Heavyweight threads", "Platform threads", "System threads"],
    "options_hi": ["लाइटवेट थ्रेड्स", "हेवीवेट थ्रेड्स", "प्लेटफॉर्म थ्रेड्स", "सिस्टम थ्रेड्स"],
    "answer_en": "Lightweight threads",
    "answer_hi": "लाइटवेट थ्रेड्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "What is structured concurrency?",
    "question_hi": "स्ट्रक्चर्ड कनकरेंसी क्या है?",
    "options_en": ["Managing multiple tasks as unit", "Running single task", "Sequential execution", "Parallel execution"],
    "options_hi": ["कई टास्क्स को यूनिट के रूप में मैनेज करना", "सिंगल टास्क रन करना", "सीक्वेंशियल एक्जीक्यूशन", "पैरेलल एक्जीक्यूशन"],
    "answer_en": "Managing multiple tasks as unit",
    "answer_hi": "कई टास्क्स को यूनिट के रूप में मैनेज करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "What is ZGC?",
    "question_hi": "ZGC क्या है?",
    "options_en": ["Z Garbage Collector", "Zero Garbage Collector", "Zonal Garbage Collector", "Zone Garbage Collector"],
    "options_hi": ["Z गार्बेज कलेक्टर", "जीरो गार्बेज कलेक्टर", "ज़ोनल गार्बेज कलेक्टर", "ज़ोन गार्बेज कलेक्टर"],
    "answer_en": "Z Garbage Collector",
    "answer_hi": "Z गार्बेज कलेक्टर",
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