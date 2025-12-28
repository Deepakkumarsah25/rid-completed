 
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
    "question_en": "What is a String in Java?",
    "question_hi": "जावा में String क्या है?",
    "options_en": ["Sequence of characters", "Array of integers", "Collection of objects", "Type of number"],
    "options_hi": ["कैरेक्टर्स का सीक्वेंस", "इंटीजर्स का एरे", "ऑब्जेक्ट्स का कलेक्शन", "नंबर का टाइप"],
    "answer_en": "Sequence of characters",
    "answer_hi": "कैरेक्टर्स का सीक्वेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "How to create a String in Java?",
    "question_hi": "जावा में String कैसे बनाएं?",
    "options_en": ["String s = \"Hello\";", "String s = new String(\"Hello\");", "Both A and B", "None of these"],
    "options_hi": ["String s = \"Hello\";", "String s = new String(\"Hello\");", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "Is String mutable in Java?",
    "question_hi": "क्या जावा में String mutable है?",
    "options_en": ["No", "Yes", "Sometimes", "Depends on situation"],
    "options_hi": ["नहीं", "हाँ", "कभी-कभी", "स्थिति पर निर्भर"],
    "answer_en": "No",
    "answer_hi": "नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "What is String Pool in Java?",
    "question_hi": "जावा में String Pool क्या है?",
    "options_en": ["Memory area for Strings", "Collection of Strings", "Array of Strings", "List of Strings"],
    "options_hi": ["स्ट्रिंग्स के लिए मेमोरी एरिया", "स्ट्रिंग्स का कलेक्शन", "स्ट्रिंग्स का एरे", "स्ट्रिंग्स की लिस्ट"],
    "answer_en": "Memory area for Strings",
    "answer_hi": "स्ट्रिंग्स के लिए मेमोरी एरिया",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "What is StringBuffer?",
    "question_hi": "StringBuffer क्या है?",
    "options_en": ["Mutable sequence of characters", "Immutable sequence", "Array of characters", "List of characters"],
    "options_hi": ["म्यूटेबल कैरेक्टर्स सीक्वेंस", "इम्यूटेबल सीक्वेंस", "कैरेक्टर्स का एरे", "कैरेक्टर्स की लिस्ट"],
    "answer_en": "Mutable sequence of characters",
    "answer_hi": "म्यूटेबल कैरेक्टर्स सीक्वेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "What is StringBuilder?",
    "question_hi": "StringBuilder क्या है?",
    "options_en": ["Mutable sequence of characters", "Immutable sequence", "Thread-safe buffer", "Synchronized buffer"],
    "options_hi": ["म्यूटेबल कैरेक्टर्स सीक्वेंस", "इम्यूटेबल सीक्वेंस", "थ्रेड-सेफ बफर", "सिंक्रोनाइज्ड बफर"],
    "answer_en": "Mutable sequence of characters",
    "answer_hi": "म्यूटेबल कैरेक्टर्स सीक्वेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "Difference between StringBuffer and StringBuilder?",
    "question_hi": "StringBuffer और StringBuilder में क्या अंतर है?",
    "options_en": ["StringBuffer is synchronized", "StringBuilder is faster", "Both A and B", "No difference"],
    "options_hi": ["StringBuffer सिंक्रोनाइज्ड है", "StringBuilder फास्टर है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "What is length() method in String?",
    "question_hi": "String में length() मेथड क्या है?",
    "options_en": ["Returns number of characters", "Returns size in bytes", "Returns capacity", "Returns index"],
    "options_hi": ["कैरेक्टर्स की संख्या रिटर्न करता है", "बाइट्स में साइज रिटर्न करता है", "कैपेसिटी रिटर्न करता है", "इंडेक्स रिटर्न करता है"],
    "answer_en": "Returns number of characters",
    "answer_hi": "कैरेक्टर्स की संख्या रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What is charAt() method in String?",
    "question_hi": "String में charAt() मेथड क्या है?",
    "options_en": ["Returns character at index", "Returns index of character", "Checks if character exists", "Removes character"],
    "options_hi": ["इंडेक्स पर कैरेक्टर रिटर्न करता है", "कैरेक्टर का इंडेक्स रिटर्न करता है", "चेक करता है कि कैरेक्टर है या नहीं", "कैरेक्टर रिमूव करता है"],
    "answer_en": "Returns character at index",
    "answer_hi": "इंडेक्स पर कैरेक्टर रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "What is substring() method in String?",
    "question_hi": "String में substring() मेथड क्या है?",
    "options_en": ["Returns part of string", "Divides string", "Splits string", "Joins strings"],
    "options_hi": ["स्ट्रिंग का हिस्सा रिटर्न करता है", "स्ट्रिंग डिवाइड करता है", "स्ट्रिंग स्प्लिट करता है", "स्ट्रिंग्स जॉइन करता है"],
    "answer_en": "Returns part of string",
    "answer_hi": "स्ट्रिंग का हिस्सा रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What is concat() method in String?",
    "question_hi": "String में concat() मेथड क्या है?",
    "options_en": ["Joins two strings", "Splits string", "Compares strings", "Reverses string"],
    "options_hi": ["दो स्ट्रिंग्स जॉइन करता है", "स्ट्रिंग स्प्लिट करता है", "स्ट्रिंग्स कंपेयर करता है", "स्ट्रिंग रिवर्स करता है"],
    "answer_en": "Joins two strings",
    "answer_hi": "दो स्ट्रिंग्स जॉइन करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "What is equals() method in String?",
    "question_hi": "String में equals() मेथड क्या है?",
    "options_en": ["Compares string contents", "Compares references", "Checks length", "Checks case"],
    "options_hi": ["स्ट्रिंग कंटेंट कंपेयर करता है", "रेफरेंस कंपेयर करता है", "लेंथ चेक करता है", "केस चेक करता है"],
    "answer_en": "Compares string contents",
    "answer_hi": "स्ट्रिंग कंटेंट कंपेयर करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is equalsIgnoreCase() method?",
    "question_hi": "equalsIgnoreCase() मेथड क्या है?",
    "options_en": ["Compares ignoring case", "Compares with case", "Checks length only", "Checks reference"],
    "options_hi": ["केस इग्नोर करके कंपेयर करता है", "केस के साथ कंपेयर करता है", "सिर्फ लेंथ चेक करता है", "रेफरेंस चेक करता है"],
    "answer_en": "Compares ignoring case",
    "answer_hi": "केस इग्नोर करके कंपेयर करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "What is compareTo() method in String?",
    "question_hi": "String में compareTo() मेथड क्या है?",
    "options_en": ["Compares lexicographically", "Compares length", "Compares references", "Checks equality"],
    "options_hi": ["लेक्सिकोग्राफिकली कंपेयर करता है", "लेंथ कंपेयर करता है", "रेफरेंस कंपेयर करता है", "इक्वेलिटी चेक करता है"],
    "answer_en": "Compares lexicographically",
    "answer_hi": "लेक्सिकोग्राफिकली कंपेयर करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is toUpperCase() method?",
    "question_hi": "toUpperCase() मेथड क्या है?",
    "options_en": ["Converts to uppercase", "Converts to lowercase", "Checks case", "Compares case"],
    "options_hi": ["अप्परकेस में कन्वर्ट करता है", "लोअरकेस में कन्वर्ट करता है", "केस चेक करता है", "केस कंपेयर करता है"],
    "answer_en": "Converts to uppercase",
    "answer_hi": "अप्परकेस में कन्वर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "What is toLowerCase() method?",
    "question_hi": "toLowerCase() मेथड क्या है?",
    "options_en": ["Converts to lowercase", "Converts to uppercase", "Checks case", "Compares case"],
    "options_hi": ["लोअरकेस में कन्वर्ट करता है", "अप्परकेस में कन्वर्ट करता है", "केस चेक करता है", "केस कंपेयर करता है"],
    "answer_en": "Converts to lowercase",
    "answer_hi": "लोअरकेस में कन्वर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "What is trim() method in String?",
    "question_hi": "String में trim() मेथड क्या है?",
    "options_en": ["Removes whitespace", "Adds whitespace", "Trims middle", "Trims characters"],
    "options_hi": ["व्हाइटस्पेस रिमूव करता है", "व्हाइटस्पेस ऐड करता है", "मिडिल ट्रिम करता है", "कैरेक्टर्स ट्रिम करता है"],
    "answer_en": "Removes whitespace",
    "answer_hi": "व्हाइटस्पेस रिमूव करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is replace() method in String?",
    "question_hi": "String में replace() मेथड क्या है?",
    "options_en": ["Replaces characters", "Removes characters", "Adds characters", "Finds characters"],
    "options_hi": ["कैरेक्टर्स रिप्लेस करता है", "कैरेक्टर्स रिमूव करता है", "कैरेक्टर्स ऐड करता है", "कैरेक्टर्स ढूंढता है"],
    "answer_en": "Replaces characters",
    "answer_hi": "कैरेक्टर्स रिप्लेस करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "What is contains() method in String?",
    "question_hi": "String में contains() मेथड क्या है?",
    "options_en": ["Checks if contains sequence", "Removes sequence", "Adds sequence", "Replaces sequence"],
    "options_hi": ["चेक करता है कि सीक्वेंस है या नहीं", "सीक्वेंस रिमूव करता है", "सीक्वेंस ऐड करता है", "सीक्वेंस रिप्लेस करता है"],
    "answer_en": "Checks if contains sequence",
    "answer_hi": "चेक करता है कि सीक्वेंस है या नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is startsWith() method?",
    "question_hi": "startsWith() मेथड क्या है?",
    "options_en": ["Checks if starts with prefix", "Checks if ends with suffix", "Finds prefix", "Removes prefix"],
    "options_hi": ["चेक करता है कि प्रीफिक्स से शुरू होता है या नहीं", "चेक करता है कि सफिक्स से खत्म होता है या नहीं", "प्रीफिक्स ढूंढता है", "प्रीफिक्स रिमूव करता है"],
    "answer_en": "Checks if starts with prefix",
    "answer_hi": "चेक करता है कि प्रीफिक्स से शुरू होता है या नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "What is endsWith() method?",
    "question_hi": "endsWith() मेथड क्या है?",
    "options_en": ["Checks if ends with suffix", "Checks if starts with prefix", "Finds suffix", "Removes suffix"],
    "options_hi": ["चेक करता है कि सफिक्स से खत्म होता है या नहीं", "चेक करता है कि प्रीफिक्स से शुरू होता है या नहीं", "सफिक्स ढूंढता है", "सफिक्स रिमूव करता है"],
    "answer_en": "Checks if ends with suffix",
    "answer_hi": "चेक करता है कि सफिक्स से खत्म होता है या नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "What is indexOf() method in String?",
    "question_hi": "String में indexOf() मेथड क्या है?",
    "options_en": ["Returns index of character", "Returns character at index", "Finds last index", "Checks if contains"],
    "options_hi": ["कैरेक्टर का इंडेक्स रिटर्न करता है", "इंडेक्स पर कैरेक्टर रिटर्न करता है", "लास्ट इंडेक्स ढूंढता है", "चेक करता है कि है या नहीं"],
    "answer_en": "Returns index of character",
    "answer_hi": "कैरेक्टर का इंडेक्स रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "What is lastIndexOf() method?",
    "question_hi": "lastIndexOf() मेथड क्या है?",
    "options_en": ["Returns last index of character", "Returns first index", "Returns character", "Checks existence"],
    "options_hi": ["कैरेक्टर का लास्ट इंडेक्स रिटर्न करता है", "फर्स्ट इंडेक्स रिटर्न करता है", "कैरेक्टर रिटर्न करता है", "एक्सिस्टेंस चेक करता है"],
    "answer_en": "Returns last index of character",
    "answer_hi": "कैरेक्टर का लास्ट इंडेक्स रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is split() method in String?",
    "question_hi": "String में split() मेथड क्या है?",
    "options_en": ["Splits string into array", "Joins array into string", "Divides string", "Merges strings"],
    "options_hi": ["स्ट्रिंग को एरे में स्प्लिट करता है", "एरे को स्ट्रिंग में जॉइन करता है", "स्ट्रिंग डिवाइड करता है", "स्ट्रिंग्स मर्ज करता है"],
    "answer_en": "Splits string into array",
    "answer_hi": "स्ट्रिंग को एरे में स्प्लिट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "What is join() method in String?",
    "question_hi": "String में join() मेथड क्या है?",
    "options_en": ["Joins strings with delimiter", "Splits string", "Merges arrays", "Combines characters"],
    "options_hi": ["डिलीमीटर से स्ट्रिंग्स जॉइन करता है", "स्ट्रिंग स्प्लिट करता है", "एरे मर्ज करता है", "कैरेक्टर्स कंबाइन करता है"],
    "answer_en": "Joins strings with delimiter",
    "answer_hi": "डिलीमीटर से स्ट्रिंग्स जॉइन करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What is valueOf() method in String?",
    "question_hi": "String में valueOf() मेथड क्या है?",
    "options_en": ["Converts different types to String", "Converts String to other types", "Gets value", "Sets value"],
    "options_hi": ["अलग-अलग टाइप्स को String में कन्वर्ट करता है", "String को अन्य टाइप्स में कन्वर्ट करता है", "वैल्यू गेट करता है", "वैल्यू सेट करता है"],
    "answer_en": "Converts different types to String",
    "answer_hi": "अलग-अलग टाइप्स को String में कन्वर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "What is format() method in String?",
    "question_hi": "String में format() मेथड क्या है?",
    "options_en": ["Formats string", "Parses string", "Compares string", "Splits string"],
    "options_hi": ["स्ट्रिंग फॉर्मेट करता है", "स्ट्रिंग पार्स करता है", "स्ट्रिंग कंपेयर करता है", "स्ट्रिंग स्प्लिट करता है"],
    "answer_en": "Formats string",
    "answer_hi": "स्ट्रिंग फॉर्मेट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What is intern() method in String?",
    "question_hi": "String में intern() मेथड क्या है?",
    "options_en": ["Returns canonical representation", "Internationalizes string", "Internalizes string", "Interprets string"],
    "options_hi": ["कैनोनिकल रिप्रेजेंटेशन रिटर्न करता है", "स्ट्रिंग को इंटरनेशनलाइज करता है", "स्ट्रिंग को इंटरनलाइज करता है", "स्ट्रिंग इंटरप्रेट करता है"],
    "answer_en": "Returns canonical representation",
    "answer_hi": "कैनोनिकल रिप्रेजेंटेशन रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "What is isEmpty() method in String?",
    "question_hi": "String में isEmpty() मेथड क्या है?",
    "options_en": ["Checks if string is empty", "Checks if null", "Makes string empty", "Fills string"],
    "options_hi": ["चेक करता है कि स्ट्रिंग एम्प्टी है या नहीं", "चेक करता है कि null है या नहीं", "स्ट्रिंग को एम्प्टी बनाता है", "स्ट्रिंग फिल करता है"],
    "answer_en": "Checks if string is empty",
    "answer_hi": "चेक करता है कि स्ट्रिंग एम्प्टी है या नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is toCharArray() method?",
    "question_hi": "toCharArray() मेथड क्या है?",
    "options_en": ["Converts string to char array", "Converts array to string", "Gets character", "Sets character"],
    "options_hi": ["स्ट्रिंग को char एरे में कन्वर्ट करता है", "एरे को स्ट्रिंग में कन्वर्ट करता है", "कैरेक्टर गेट करता है", "कैरेक्टर सेट करता है"],
    "answer_en": "Converts string to char array",
    "answer_hi": "स्ट्रिंग को char एरे में कन्वर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "What is codePointAt() method?",
    "question_hi": "codePointAt() मेथड क्या है?",
    "options_en": ["Returns Unicode code point", "Returns ASCII value", "Returns character", "Returns index"],
    "options_hi": ["यूनिकोड कोड पॉइंट रिटर्न करता है", "ASCII वैल्यू रिटर्न करता है", "कैरेक्टर रिटर्न करता है", "इंडेक्स रिटर्न करता है"],
    "answer_en": "Returns Unicode code point",
    "answer_hi": "यूनिकोड कोड पॉइंट रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "What is matches() method in String?",
    "question_hi": "String में matches() मेथड क्या है?",
    "options_en": ["Checks if matches regex", "Finds matches", "Replaces matches", "Removes matches"],
    "options_hi": ["चेक करता है कि regex से मैच होता है या नहीं", "मैचेस ढूंढता है", "मैचेस रिप्लेस करता है", "मैचेस रिमूव करता है"],
    "answer_en": "Checks if matches regex",
    "answer_hi": "चेक करता है कि regex से मैच होता है या नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is regionMatches() method?",
    "question_hi": "regionMatches() मेथड क्या है?",
    "options_en": ["Compares regions of strings", "Matches entire string", "Finds region", "Replaces region"],
    "options_hi": ["स्ट्रिंग्स के रीजन्स कंपेयर करता है", "पूरी स्ट्रिंग मैच करता है", "रीजन ढूंढता है", "रीजन रिप्लेस करता है"],
    "answer_en": "Compares regions of strings",
    "answer_hi": "स्ट्रिंग्स के रीजन्स कंपेयर करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "What is getBytes() method in String?",
    "question_hi": "String में getBytes() मेथड क्या है?",
    "options_en": ["Converts string to bytes", "Converts bytes to string", "Gets byte array", "Sets byte array"],
    "options_hi": ["स्ट्रिंग को बाइट्स में कन्वर्ट करता है", "बाइट्स को स्ट्रिंग में कन्वर्ट करता है", "बाइट एरे गेट करता है", "बाइट एरे सेट करता है"],
    "answer_en": "Converts string to bytes",
    "answer_hi": "स्ट्रिंग को बाइट्स में कन्वर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "What is getChars() method in String?",
    "question_hi": "String में getChars() मेथड क्या है?",
    "options_en": ["Copies characters to array", "Gets character array", "Sets characters", "Copies array to string"],
    "options_hi": ["कैरेक्टर्स को एरे में कॉपी करता है", "कैरेक्टर एरे गेट करता है", "कैरेक्टर्स सेट करता है", "एरे को स्ट्रिंग में कॉपी करता है"],
    "answer_en": "Copies characters to array",
    "answer_hi": "कैरेक्टर्स को एरे में कॉपी करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "What is contentEquals() method?",
    "question_hi": "contentEquals() मेथड क्या है?",
    "options_en": ["Compares content with CharSequence", "Compares references", "Checks length", "Checks type"],
    "options_hi": ["कंटेंट CharSequence से कंपेयर करता है", "रेफरेंस कंपेयर करता है", "लेंथ चेक करता है", "टाइप चेक करता है"],
    "answer_en": "Compares content with CharSequence",
    "answer_hi": "कंटेंट CharSequence से कंपेयर करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "What is copyValueOf() method?",
    "question_hi": "copyValueOf() मेथड क्या है?",
    "options_en": ["Creates string from char array", "Creates array from string", "Copies value", "Copies string"],
    "options_hi": ["char एरे से स्ट्रिंग बनाता है", "स्ट्रिंग से एरे बनाता है", "वैल्यू कॉपी करता है", "स्ट्रिंग कॉपी करता है"],
    "answer_en": "Creates string from char array",
    "answer_hi": "char एरे से स्ट्रिंग बनाता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is StringJoiner class?",
    "question_hi": "StringJoiner क्लास क्या है?",
    "options_en": ["Joins strings with delimiter", "Splits strings", "Formats strings", "Parses strings"],
    "options_hi": ["डिलीमीटर से स्ट्रिंग्स जॉइन करता है", "स्ट्रिंग्स स्प्लिट करता है", "स्ट्रिंग्स फॉर्मेट करता है", "स्ट्रिंग्स पार्स करता है"],
    "answer_en": "Joins strings with delimiter",
    "answer_hi": "डिलीमीटर से स्ट्रिंग्स जॉइन करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "What is String.format() used for?",
    "question_hi": "String.format() किस लिए उपयोग होता है?",
    "options_en": ["Formatted string output", "Parsing input", "Comparing strings", "Splitting strings"],
    "options_hi": ["फॉर्मेटेड स्ट्रिंग आउटपुट", "इनपुट पार्सिंग", "स्ट्रिंग्स कंपेयरिंग", "स्ट्रिंग्स स्प्लिटिंग"],
    "answer_en": "Formatted string output",
    "answer_hi": "फॉर्मेटेड स्ट्रिंग आउटपुट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is Pattern class in Java?",
    "question_hi": "जावा में Pattern क्लास क्या है?",
    "options_en": ["Regular expression pattern", "String pattern", "Character pattern", "Byte pattern"],
    "options_hi": ["रेगुलर एक्सप्रेशन पैटर्न", "स्ट्रिंग पैटर्न", "कैरेक्टर पैटर्न", "बाइट पैटर्न"],
    "answer_en": "Regular expression pattern",
    "answer_hi": "रेगुलर एक्सप्रेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "What is Matcher class in Java?",
    "question_hi": "जावा में Matcher क्लास क्या है?",
    "options_en": ["Engine for regex matching", "String matcher", "Character matcher", "Pattern matcher"],
    "options_hi": ["regex मैचिंग के लिए इंजन", "स्ट्रिंग मैचर", "कैरेक्टर मैचर", "पैटर्न मैचर"],
    "answer_en": "Engine for regex matching",
    "answer_hi": "regex मैचिंग के लिए इंजन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is StringTokenizer class?",
    "question_hi": "StringTokenizer क्लास क्या है?",
    "options_en": ["Tokenizes strings", "Joins strings", "Formats strings", "Parses strings"],
    "options_hi": ["स्ट्रिंग्स को टोकनाइज करता है", "स्ट्रिंग्स जॉइन करता है", "स्ट्रिंग्स फॉर्मेट करता है", "स्ट्रिंग्स पार्स करता है"],
    "answer_en": "Tokenizes strings",
    "answer_hi": "स्ट्रिंग्स को टोकनाइज करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is Character class in Java?",
    "question_hi": "जावा में Character क्लास क्या है?",
    "options_en": ["Wrapper for char", "Wrapper for String", "Character array", "String class"],
    "options_hi": ["char के लिए रैपर", "String के लिए रैपर", "कैरेक्टर एरे", "स्ट्रिंग क्लास"],
    "answer_en": "Wrapper for char",
    "answer_hi": "char के लिए रैपर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "What is StringBuilder append() method?",
    "question_hi": "StringBuilder append() मेथड क्या है?",
    "options_en": ["Appends to string builder", "Prepends to string builder", "Inserts in middle", "Replaces in builder"],
    "options_hi": ["स्ट्रिंग बिल्डर में ऐपेंड करता है", "स्ट्रिंग बिल्डर में प्रीपेंड करता है", "मिडल में इंसर्ट करता है", "बिल्डर में रिप्लेस करता है"],
    "answer_en": "Appends to string builder",
    "answer_hi": "स्ट्रिंग बिल्डर में ऐपेंड करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is StringBuilder insert() method?",
    "question_hi": "StringBuilder insert() मेथड क्या है?",
    "options_en": ["Inserts at specified position", "Appends at end", "Prepends at beginning", "Replaces all"],
    "options_hi": ["स्पेसिफाइड पोजीशन पर इंसर्ट करता है", "एंड पर ऐपेंड करता है", "बिगिनिंग पर प्रीपेंड करता है", "सब रिप्लेस करता है"],
    "answer_en": "Inserts at specified position",
    "answer_hi": "स्पेसिफाइड पोजीशन पर इंसर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is StringBuilder reverse() method?",
    "question_hi": "StringBuilder reverse() मेथड क्या है?",
    "options_en": ["Reverses the string", "Sorts the string", "Shuffles the string", "Rotates the string"],
    "options_hi": ["स्ट्रिंग रिवर्स करता है", "स्ट्रिंग सॉर्ट करता है", "स्ट्रिंग शफल करता है", "स्ट्रिंग रोटेट करता है"],
    "answer_en": "Reverses the string",
    "answer_hi": "स्ट्रिंग रिवर्स करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is StringBuilder delete() method?",
    "question_hi": "StringBuilder delete() मेथड क्या है?",
    "options_en": ["Deletes characters", "Adds characters", "Replaces characters", "Finds characters"],
    "options_hi": ["कैरेक्टर्स डिलीट करता है", "कैरेक्टर्स ऐड करता है", "कैरेक्टर्स रिप्लेस करता है", "कैरेक्टर्स ढूंढता है"],
    "answer_en": "Deletes characters",
    "answer_hi": "कैरेक्टर्स डिलीट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is StringBuilder capacity() method?",
    "question_hi": "StringBuilder capacity() मेथड क्या है?",
    "options_en": ["Returns current capacity", "Returns length", "Returns size", "Returns limit"],
    "options_hi": ["करंट कैपेसिटी रिटर्न करता है", "लेंथ रिटर्न करता है", "साइज रिटर्न करता है", "लिमिट रिटर्न करता है"],
    "answer_en": "Returns current capacity",
    "answer_hi": "करंट कैपेसिटी रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "What is StringBuilder ensureCapacity() method?",
    "question_hi": "StringBuilder ensureCapacity() मेथड क्या है?",
    "options_en": ["Ensures minimum capacity", "Ensures maximum capacity", "Sets capacity", "Gets capacity"],
    "options_hi": ["मिनिमम कैपेसिटी एनश्योर करता है", "मैक्सिमम कैपेसिटी एनश्योर करता है", "कैपेसिटी सेट करता है", "कैपेसिटी गेट करता है"],
    "answer_en": "Ensures minimum capacity",
    "answer_hi": "मिनिमम कैपेसिटी एनश्योर करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "What is StringBuilder setLength() method?",
    "question_hi": "StringBuilder setLength() मेथड क्या है?",
    "options_en": ["Sets length of string", "Sets capacity", "Sets characters", "Sets buffer"],
    "options_hi": ["स्ट्रिंग की लेंथ सेट करता है", "कैपेसिटी सेट करता है", "कैरेक्टर्स सेट करता है", "बफर सेट करता है"],
    "answer_en": "Sets length of string",
    "answer_hi": "स्ट्रिंग की लेंथ सेट करता है",
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