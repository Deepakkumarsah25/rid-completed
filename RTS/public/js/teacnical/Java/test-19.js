 
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
    "num": 301,
    "question_en": "What is the purpose of 'Java Chain of Responsibility' pattern?",
    "question_hi": "'Java Chain of Responsibility' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Request handling chain", "Responsibility chain", "Java chain", "Pattern chain"],
    "options_hi": ["रिक्वेस्ट हैंडलिंग चेन", "रिस्पॉन्सिबिलिटी चेन", "Java चेन", "पैटर्न चेन"],
    "answer_en": "Request handling chain",
    "answer_hi": "रिक्वेस्ट हैंडलिंग चेन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 301
  },
  {
    "num": 302,
    "question_en": "Which of these is used for 'Java Command Pattern'?",
    "question_hi": "'Java Command Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Request encapsulation pattern", "Command pattern", "Java command", "Pattern command"],
    "options_hi": ["रिक्वेस्ट एनकैप्सुलेशन पैटर्न", "कमांड पैटर्न", "Java कमांड", "पैटर्न कमांड"],
    "answer_en": "Request encapsulation pattern",
    "answer_hi": "रिक्वेस्ट एनकैप्सुलेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 302
  },
  {
    "num": 303,
    "question_en": "What is the purpose of 'Java Interpreter Pattern'?",
    "question_hi": "'Java Interpreter Pattern' का उद्देश्य क्या है?",
    "options_en": ["Language interpretation pattern", "Interpreter pattern", "Java interpreter", "Pattern interpreter"],
    "options_hi": ["लैंग्वेज इंटरप्रिटेशन पैटर्न", "इंटरप्रेटर पैटर्न", "Java इंटरप्रेटर", "पैटर्न इंटरप्रेटर"],
    "answer_en": "Language interpretation pattern",
    "answer_hi": "लैंग्वेज इंटरप्रिटेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 303
  },
  {
    "num": 304,
    "question_en": "Which of these is used for 'Java Iterator Pattern'?",
    "question_hi": "'Java Iterator Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Collection traversal pattern", "Iterator pattern", "Java iterator", "Pattern iterator"],
    "options_hi": ["कलेक्शन ट्रैवर्सल पैटर्न", "इटरेटर पैटर्न", "Java इटरेटर", "पैटर्न इटरेटर"],
    "answer_en": "Collection traversal pattern",
    "answer_hi": "कलेक्शन ट्रैवर्सल पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 304
  },
  {
    "num": 305,
    "question_en": "What is the purpose of 'Java Mediator Pattern'?",
    "question_hi": "'Java Mediator Pattern' का उद्देश्य क्या है?",
    "options_en": ["Object communication pattern", "Mediator pattern", "Java mediator", "Pattern mediator"],
    "options_hi": ["ऑब्जेक्ट कम्युनिकेशन पैटर्न", "मीडिएटर पैटर्न", "Java मीडिएटर", "पैटर्न मीडिएटर"],
    "answer_en": "Object communication pattern",
    "answer_hi": "ऑब्जेक्ट कम्युनिकेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 305
  },
  {
    "num": 306,
    "question_en": "Which of these is used for 'Java Memento Pattern'?",
    "question_hi": "'Java Memento Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Object state restoration pattern", "Memento pattern", "Java memento", "Pattern memento"],
    "options_hi": ["ऑब्जेक्ट स्टेट रिस्टोरेशन पैटर्न", "मेमेंटो पैटर्न", "Java मेमेंटो", "पैटर्न मेमेंटो"],
    "answer_en": "Object state restoration pattern",
    "answer_hi": "ऑब्जेक्ट स्टेट रिस्टोरेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 306
  },
  {
    "num": 307,
    "question_en": "What is the purpose of 'Java Observer Pattern'?",
    "question_hi": "'Java Observer Pattern' का उद्देश्य क्या है?",
    "options_en": ["Publish-subscribe pattern", "Observer pattern", "Java observer", "Pattern observer"],
    "options_hi": ["पब्लिश-सब्सक्राइब पैटर्न", "ऑब्जर्वर पैटर्न", "Java ऑब्जर्वर", "पैटर्न ऑब्जर्वर"],
    "answer_en": "Publish-subscribe pattern",
    "answer_hi": "पब्लिश-सब्सक्राइब पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 307
  },
  {
    "num": 308,
    "question_en": "Which of these is used for 'Java State Pattern'?",
    "question_hi": "'Java State Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Object state behavior pattern", "State pattern", "Java state", "Pattern state"],
    "options_hi": ["ऑब्जेक्ट स्टेट बिहेवियर पैटर्न", "स्टेट पैटर्न", "Java स्टेट", "पैटर्न स्टेट"],
    "answer_en": "Object state behavior pattern",
    "answer_hi": "ऑब्जेक्ट स्टेट बिहेवियर पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 308
  },
  {
    "num": 309,
    "question_en": "What is the purpose of 'Java Strategy Pattern'?",
    "question_hi": "'Java Strategy Pattern' का उद्देश्य क्या है?",
    "options_en": ["Algorithm selection pattern", "Strategy pattern", "Java strategy", "Pattern strategy"],
    "options_hi": ["एल्गोरिदम सिलेक्शन पैटर्न", "स्ट्रैटेजी पैटर्न", "Java स्ट्रैटेजी", "पैटर्न स्ट्रैटेजी"],
    "answer_en": "Algorithm selection pattern",
    "answer_hi": "एल्गोरिदम सिलेक्शन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 309
  },
  {
    "num": 310,
    "question_en": "Which of these is used for 'Java Template Method Pattern'?",
    "question_hi": "'Java Template Method Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Algorithm skeleton pattern", "Template pattern", "Java template", "Pattern template"],
    "options_hi": ["एल्गोरिदम स्केलेटन पैटर्न", "टेम्पलेट पैटर्न", "Java टेम्पलेट", "पैटर्न टेम्पलेट"],
    "answer_en": "Algorithm skeleton pattern",
    "answer_hi": "एल्गोरिदम स्केलेटन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 310
  },
  {
    "num": 311,
    "question_en": "What is the purpose of 'Java Visitor Pattern'?",
    "question_hi": "'Java Visitor Pattern' का उद्देश्य क्या है?",
    "options_en": ["Operation separation pattern", "Visitor pattern", "Java visitor", "Pattern visitor"],
    "options_hi": ["ऑपरेशन सेपरेशन पैटर्न", "विजिटर पैटर्न", "Java विजिटर", "पैटर्न विजिटर"],
    "answer_en": "Operation separation pattern",
    "answer_hi": "ऑपरेशन सेपरेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 311
  },
  {
    "num": 312,
    "question_en": "Which of these is used for 'Java Null Object Pattern'?",
    "question_hi": "'Java Null Object Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Null reference alternative pattern", "Null object pattern", "Java null", "Pattern null"],
    "options_hi": ["नल रेफरेंस अल्टरनेटिव पैटर्न", "नल ऑब्जेक्ट पैटर्न", "Java नल", "पैटर्न नल"],
    "answer_en": "Null reference alternative pattern",
    "answer_hi": "नल रेफरेंस अल्टरनेटिव पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 312
  },
  {
    "num": 313,
    "question_en": "What is the purpose of 'Java Specification Pattern'?",
    "question_hi": "'Java Specification Pattern' का उद्देश्य क्या है?",
    "options_en": ["Business rule encapsulation pattern", "Specification pattern", "Java specification", "Pattern specification"],
    "options_hi": ["बिजनेस रूल एनकैप्सुलेशन पैटर्न", "स्पेसिफिकेशन पैटर्न", "Java स्पेसिफिकेशन", "पैटर्न स्पेसिफिकेशन"],
    "answer_en": "Business rule encapsulation pattern",
    "answer_hi": "बिजनेस रूल एनकैप्सुलेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 313
  },
  {
    "num": 314,
    "question_en": "Which of these is used for 'Java Unit of Work Pattern'?",
    "question_hi": "'Java Unit of Work Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Transaction management pattern", "Unit of work pattern", "Java unit", "Pattern unit"],
    "options_hi": ["ट्रांजैक्शन मैनेजमेंट पैटर्न", "यूनिट ऑफ वर्क पैटर्न", "Java यूनिट", "पैटर्न यूनिट"],
    "answer_en": "Transaction management pattern",
    "answer_hi": "ट्रांजैक्शन मैनेजमेंट पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 314
  },
  {
    "num": 315,
    "question_en": "What is the purpose of 'Java Lazy Loading Pattern'?",
    "question_hi": "'Java Lazy Loading Pattern' का उद्देश्य क्या है?",
    "options_en": ["Deferred initialization pattern", "Lazy loading pattern", "Java lazy", "Pattern lazy"],
    "options_hi": ["डिफर्ड इनिशियलाइज़ेशन पैटर्न", "लेज़ी लोडिंग पैटर्न", "Java लेज़ी", "पैटर्न लेज़ी"],
    "answer_en": "Deferred initialization pattern",
    "answer_hi": "डिफर्ड इनिशियलाइज़ेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 315
  },
  {
    "num": 316,
    "question_en": "Which of these is used for 'Java Object Pool Pattern'?",
    "question_hi": "'Java Object Pool Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Object reuse pattern", "Object pool pattern", "Java pool", "Pattern pool"],
    "options_hi": ["ऑब्जेक्ट रियूज़ पैटर्न", "ऑब्जेक्ट पूल पैटर्न", "Java पूल", "पैटर्न पूल"],
    "answer_en": "Object reuse pattern",
    "answer_hi": "ऑब्जेक्ट रियूज़ पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 316
  },
  {
    "num": 317,
    "question_en": "What is the purpose of 'Java Registry Pattern'?",
    "question_hi": "'Java Registry Pattern' का उद्देश्य क्या है?",
    "options_en": ["Object lookup pattern", "Registry pattern", "Java registry", "Pattern registry"],
    "options_hi": ["ऑब्जेक्ट लुकअप पैटर्न", "रजिस्ट्री पैटर्न", "Java रजिस्ट्री", "पैटर्न रजिस्ट्री"],
    "answer_en": "Object lookup pattern",
    "answer_hi": "ऑब्जेक्ट लुकअप पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 317
  },
  {
    "num": 318,
    "question_en": "Which of these is used for 'Java Service Locator Pattern'?",
    "question_hi": "'Java Service Locator Pattern' के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Service lookup pattern", "Service locator pattern", "Java service", "Pattern locator"],
    "options_hi": ["सर्विस लुकअप पैटर्न", "सर्विस लोकेटर पैटर्न", "Java सर्विस", "पैटर्न लोकेटर"],
    "answer_en": "Service lookup pattern",
    "answer_hi": "सर्विस लुकअप पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 318
  },
  {
    "num": 319,
    "question_en": "What is the purpose of 'Java Data Access Object' (DAO) pattern?",
    "question_hi": "'Java Data Access Object' (DAO) पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Data access abstraction pattern", "DAO pattern", "Java DAO", "Pattern DAO"],
    "options_hi": ["डेटा एक्सेस एब्सट्रैक्शन पैटर्न", "DAO पैटर्न", "Java DAO", "पैटर्न DAO"],
    "answer_en": "Data access abstraction pattern",
    "answer_hi": "डेटा एक्सेस एब्सट्रैक्शन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 319
  },
  {
    "num": 320,
    "question_en": "Which of these is used for 'Java Data Transfer Object' (DTO) pattern?",
    "question_hi": "'Java Data Transfer Object' (DTO) पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Data transfer pattern", "DTO pattern", "Java DTO", "Pattern DTO"],
    "options_hi": ["डेटा ट्रांसफर पैटर्न", "DTO पैटर्न", "Java DTO", "पैटर्न DTO"],
    "answer_en": "Data transfer pattern",
    "answer_hi": "डेटा ट्रांसफर पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 320
  },
  {
    "num": 321,
    "question_en": "What is the purpose of 'Java Model-View-Controller' (MVC) pattern?",
    "question_hi": "'Java Model-View-Controller' (MVC) पैटर्न का उद्देश्य क्या है?",
    "options_en": ["UI separation pattern", "MVC pattern", "Java MVC", "Pattern MVC"],
    "options_hi": ["UI सेपरेशन पैटर्न", "MVC पैटर्न", "Java MVC", "पैटर्न MVC"],
    "answer_en": "UI separation pattern",
    "answer_hi": "UI सेपरेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 321
  },
  {
    "num": 322,
    "question_en": "Which of these is used for 'Java Model-View-Presenter' (MVP) pattern?",
    "question_hi": "'Java Model-View-Presenter' (MVP) पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["UI separation with presenter pattern", "MVP pattern", "Java MVP", "Pattern MVP"],
    "options_hi": ["प्रेजेंटर के साथ UI सेपरेशन पैटर्न", "MVP पैटर्न", "Java MVP", "पैटर्न MVP"],
    "answer_en": "UI separation with presenter pattern",
    "answer_hi": "प्रेजेंटर के साथ UI सेपरेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 322
  },
  {
    "num": 323,
    "question_en": "What is the purpose of 'Java Model-View-ViewModel' (MVVM) pattern?",
    "question_hi": "'Java Model-View-ViewModel' (MVVM) पैटर्न का उद्देश्य क्या है?",
    "options_en": ["UI separation with viewmodel pattern", "MVVM pattern", "Java MVVM", "Pattern MVVM"],
    "options_hi": ["व्यूमॉडल के साथ UI सेपरेशन पैटर्न", "MVVM पैटर्न", "Java MVVM", "पैटर्न MVVM"],
    "answer_en": "UI separation with viewmodel pattern",
    "answer_hi": "व्यूमॉडल के साथ UI सेपरेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 323
  },
  {
    "num": 324,
    "question_en": "Which of these is used for 'Java Presentation Model' pattern?",
    "question_hi": "'Java Presentation Model' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["UI logic separation pattern", "Presentation model pattern", "Java presentation", "Pattern presentation"],
    "options_hi": ["UI लॉजिक सेपरेशन पैटर्न", "प्रेजेंटेशन मॉडल पैटर्न", "Java प्रेजेंटेशन", "पैटर्न प्रेजेंटेशन"],
    "answer_en": "UI logic separation pattern",
    "answer_hi": "UI लॉजिक सेपरेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 324
  },
  {
    "num": 325,
    "question_en": "What is the purpose of 'Java Front Controller' pattern?",
    "question_hi": "'Java Front Controller' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Single entry point pattern", "Front controller pattern", "Java front", "Pattern front"],
    "options_hi": ["सिंगल एंट्री पॉइंट पैटर्न", "फ्रंट कंट्रोलर पैटर्न", "Java फ्रंट", "पैटर्न फ्रंट"],
    "answer_en": "Single entry point pattern",
    "answer_hi": "सिंगल एंट्री पॉइंट पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 325
  },
  {
    "num": 326,
    "question_en": "Which of these is used for 'Java Application Controller' pattern?",
    "question_hi": "'Java Application Controller' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Request routing pattern", "Application controller pattern", "Java application", "Pattern controller"],
    "options_hi": ["रिक्वेस्ट रूटिंग पैटर्न", "एप्लिकेशन कंट्रोलर पैटर्न", "Java एप्लिकेशन", "पैटर्न कंट्रोलर"],
    "answer_en": "Request routing pattern",
    "answer_hi": "रिक्वेस्ट रूटिंग पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 326
  },
  {
    "num": 327,
    "question_en": "What is the purpose of 'Java Page Controller' pattern?",
    "question_hi": "'Java Page Controller' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Page-specific controller pattern", "Page controller pattern", "Java page", "Pattern page"],
    "options_hi": ["पेज-स्पेसिफिक कंट्रोलर पैटर्न", "पेज कंट्रोलर पैटर्न", "Java पेज", "पैटर्न पेज"],
    "answer_en": "Page-specific controller pattern",
    "answer_hi": "पेज-स्पेसिफिक कंट्रोलर पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 327
  },
  {
    "num": 328,
    "question_en": "Which of these is used for 'Java Intercepting Filter' pattern?",
    "question_hi": "'Java Intercepting Filter' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Request/response filtering pattern", "Intercepting filter pattern", "Java intercepting", "Pattern filter"],
    "options_hi": ["रिक्वेस्ट/रिस्पॉन्स फिल्टरिंग पैटर्न", "इंटरसेप्टिंग फिल्टर पैटर्न", "Java इंटरसेप्टिंग", "पैटर्न फिल्टर"],
    "answer_en": "Request/response filtering pattern",
    "answer_hi": "रिक्वेस्ट/रिस्पॉन्स फिल्टरिंग पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 328
  },
  {
    "num": 329,
    "question_en": "What is the purpose of 'Java Context Object' pattern?",
    "question_hi": "'Java Context Object' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Context data encapsulation pattern", "Context object pattern", "Java context", "Pattern context"],
    "options_hi": ["कॉन्टेक्स्ट डेटा एनकैप्सुलेशन पैटर्न", "कॉन्टेक्स्ट ऑब्जेक्ट पैटर्न", "Java कॉन्टेक्स्ट", "पैटर्न कॉन्टेक्स्ट"],
    "answer_en": "Context data encapsulation pattern",
    "answer_hi": "कॉन्टेक्स्ट डेटा एनकैप्सुलेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 329
  },
  {
    "num": 330,
    "question_en": "Which of these is used for 'Java Application Service' pattern?",
    "question_hi": "'Java Application Service' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Business logic coordination pattern", "Application service pattern", "Java service", "Pattern service"],
    "options_hi": ["बिजनेस लॉजिक कोऑर्डिनेशन पैटर्न", "एप्लिकेशन सर्विस पैटर्न", "Java सर्विस", "पैटर्न सर्विस"],
    "answer_en": "Business logic coordination pattern",
    "answer_hi": "बिजनेस लॉजिक कोऑर्डिनेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 330
  },
  {
    "num": 331,
    "question_en": "What is the purpose of 'Java Domain Service' pattern?",
    "question_hi": "'Java Domain Service' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Domain logic encapsulation pattern", "Domain service pattern", "Java domain", "Pattern domain"],
    "options_hi": ["डोमेन लॉजिक एनकैप्सुलेशन पैटर्न", "डोमेन सर्विस पैटर्न", "Java डोमेन", "पैटर्न डोमेन"],
    "answer_en": "Domain logic encapsulation pattern",
    "answer_hi": "डोमेन लॉजिक एनकैप्सुलेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 331
  },
  {
    "num": 332,
    "question_en": "Which of these is used for 'Java Repository' pattern?",
    "question_hi": "'Java Repository' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Data access abstraction pattern", "Repository pattern", "Java repository", "Pattern repository"],
    "options_hi": ["डेटा एक्सेस एब्सट्रैक्शन पैटर्न", "रिपॉजिटरी पैटर्न", "Java रिपॉजिटरी", "पैटर्न रिपॉजिटरी"],
    "answer_en": "Data access abstraction pattern",
    "answer_hi": "डेटा एक्सेस एब्सट्रैक्शन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 332
  },
  {
    "num": 333,
    "question_en": "What is the purpose of 'Java Specification' pattern in DDD?",
    "question_hi": "DDD में 'Java Specification' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Business rule encapsulation pattern", "Specification pattern", "Java specification", "Pattern specification"],
    "options_hi": ["बिजनेस रूल एनकैप्सुलेशन पैटर्न", "स्पेसिफिकेशन पैटर्न", "Java स्पेसिफिकेशन", "पैटर्न स्पेसिफिकेशन"],
    "answer_en": "Business rule encapsulation pattern",
    "answer_hi": "बिजनेस रूल एनकैप्सुलेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 333
  },
  {
    "num": 334,
    "question_en": "Which of these is used for 'Java Aggregate' pattern in DDD?",
    "question_hi": "DDD में 'Java Aggregate' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Transaction boundary pattern", "Aggregate pattern", "Java aggregate", "Pattern aggregate"],
    "options_hi": ["ट्रांजैक्शन बाउंडरी पैटर्न", "एग्रीगेट पैटर्न", "Java एग्रीगेट", "पैटर्न एग्रीगेट"],
    "answer_en": "Transaction boundary pattern",
    "answer_hi": "ट्रांजैक्शन बाउंडरी पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 334
  },
  {
    "num": 335,
    "question_en": "What is the purpose of 'Java Value Object' pattern in DDD?",
    "question_hi": "DDD में 'Java Value Object' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Immutable value pattern", "Value object pattern", "Java value", "Pattern value"],
    "options_hi": ["इम्यूटेबल वैल्यू पैटर्न", "वैल्यू ऑब्जेक्ट पैटर्न", "Java वैल्यू", "पैटर्न वैल्यू"],
    "answer_en": "Immutable value pattern",
    "answer_hi": "इम्यूटेबल वैल्यू पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 335
  },
  {
    "num": 336,
    "question_en": "Which of these is used for 'Java Entity' pattern in DDD?",
    "question_hi": "DDD में 'Java Entity' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Identity-based object pattern", "Entity pattern", "Java entity", "Pattern entity"],
    "options_hi": ["आइडेंटिटी-बेस्ड ऑब्जेक्ट पैटर्न", "एंटिटी पैटर्न", "Java एंटिटी", "पैटर्न एंटिटी"],
    "answer_en": "Identity-based object pattern",
    "answer_hi": "आइडेंटिटी-बेस्ड ऑब्जेक्ट पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 336
  },
  {
    "num": 337,
    "question_en": "What is the purpose of 'Java Domain Event' pattern in DDD?",
    "question_hi": "DDD में 'Java Domain Event' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Domain state change notification pattern", "Domain event pattern", "Java event", "Pattern event"],
    "options_hi": ["डोमेन स्टेट चेंज नोटिफिकेशन पैटर्न", "डोमेन इवेंट पैटर्न", "Java इवेंट", "पैटर्न इवेंट"],
    "answer_en": "Domain state change notification pattern",
    "answer_hi": "डोमेन स्टेट चेंज नोटिफिकेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 337
  },
  {
    "num": 338,
    "question_en": "Which of these is used for 'Java Bounded Context' pattern in DDD?",
    "question_hi": "DDD में 'Java Bounded Context' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Domain boundary definition pattern", "Bounded context pattern", "Java bounded", "Pattern context"],
    "options_hi": ["डोमेन बाउंडरी डेफिनिशन पैटर्न", "बाउंडेड कॉन्टेक्स्ट पैटर्न", "Java बाउंडेड", "पैटर्न कॉन्टेक्स्ट"],
    "answer_en": "Domain boundary definition pattern",
    "answer_hi": "डोमेन बाउंडरी डेफिनिशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 338
  },
  {
    "num": 339,
    "question_en": "What is the purpose of 'Java Anti-Corruption Layer' pattern in DDD?",
    "question_hi": "DDD में 'Java Anti-Corruption Layer' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Legacy system integration pattern", "Anti-corruption layer pattern", "Java anti-corruption", "Pattern layer"],
    "options_hi": ["लेगेसी सिस्टम इंटीग्रेशन पैटर्न", "एंटी-करप्शन लेयर पैटर्न", "Java एंटी-करप्शन", "पैटर्न लेयर"],
    "answer_en": "Legacy system integration pattern",
    "answer_hi": "लेगेसी सिस्टम इंटीग्रेशन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 339
  },
  {
    "num": 340,
    "question_en": "Which of these is used for 'Java Shared Kernel' pattern in DDD?",
    "question_hi": "DDD में 'Java Shared Kernel' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Common domain sharing pattern", "Shared kernel pattern", "Java shared", "Pattern kernel"],
    "options_hi": ["कॉमन डोमेन शेयरिंग पैटर्न", "शेयर्ड कर्नल पैटर्न", "Java शेयर्ड", "पैटर्न कर्नल"],
    "answer_en": "Common domain sharing pattern",
    "answer_hi": "कॉमन डोमेन शेयरिंग पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 340
  },
  {
    "num": 341,
    "question_en": "What is the purpose of 'Java Customer-Supplier' pattern in DDD?",
    "question_hi": "DDD में 'Java Customer-Supplier' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Team relationship pattern", "Customer-supplier pattern", "Java customer", "Pattern supplier"],
    "options_hi": ["टीम रिलेशनशिप पैटर्न", "कस्टमर-सप्लायर पैटर्न", "Java कस्टमर", "पैटर्न सप्लायर"],
    "answer_en": "Team relationship pattern",
    "answer_hi": "टीम रिलेशनशिप पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 341
  },
  {
    "num": 342,
    "question_en": "Which of these is used for 'Java Conformist' pattern in DDD?",
    "question_hi": "DDD में 'Java Conformist' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Upstream model adoption pattern", "Conformist pattern", "Java conformist", "Pattern conformist"],
    "options_hi": ["अपस्ट्रीम मॉडल एडॉप्शन पैटर्न", "कॉन्फॉर्मिस्ट पैटर्न", "Java कॉन्फॉर्मिस्ट", "पैटर्न कॉन्फॉर्मिस्ट"],
    "answer_en": "Upstream model adoption pattern",
    "answer_hi": "अपस्ट्रीम मॉडल एडॉप्शन पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 342
  },
  {
    "num": 343,
    "question_en": "What is the purpose of 'Java Separate Ways' pattern in DDD?",
    "question_hi": "DDD में 'Java Separate Ways' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Independent development pattern", "Separate ways pattern", "Java separate", "Pattern ways"],
    "options_hi": ["इंडिपेंडेंट डेवलपमेंट पैटर्न", "सेपरेट वेज पैटर्न", "Java सेपरेट", "पैटर्न वेज"],
    "answer_en": "Independent development pattern",
    "answer_hi": "इंडिपेंडेंट डेवलपमेंट पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 343
  },
  {
    "num": 344,
    "question_en": "Which of these is used for 'Java Published Language' pattern in DDD?",
    "question_hi": "DDD में 'Java Published Language' पैटर्न के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Integration language pattern", "Published language pattern", "Java published", "Pattern language"],
    "options_hi": ["इंटीग्रेशन लैंग्वेज पैटर्न", "पब्लिश्ड लैंग्वेज पैटर्न", "Java पब्लिश्ड", "पैटर्न लैंग्वेज"],
    "answer_en": "Integration language pattern",
    "answer_hi": "इंटीग्रेशन लैंग्वेज पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 344
  },
  {
    "num": 345,
    "question_en": "What is the purpose of 'Java Open Host Service' pattern in DDD?",
    "question_hi": "DDD में 'Java Open Host Service' पैटर्न का उद्देश्य क्या है?",
    "options_en": ["Integration service pattern", "Open host service pattern", "Java open", "Pattern service"],
    "options_hi": ["इंटीग्रेशन सर्विस पैटर्न", "ओपन होस्ट सर्विस पैटर्न", "Java ओपन", "पैटर्न सर्विस"],
    "answer_en": "Integration service pattern",
    "answer_hi": "इंटीग्रेशन सर्विस पैटर्न",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 345
  },
  {
    "num": 346,
    "question_en": "Which of these is used for 'Java Event Storming' technique?",
    "question_hi": "'Java Event Storming' तकनीक के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Domain discovery workshop technique", "Event storming technique", "Java event", "Technique storming"],
    "options_hi": ["डोमेन डिस्कवरी वर्कशॉप तकनीक", "इवेंट स्टॉर्मिंग तकनीक", "Java इवेंट", "तकनीक स्टॉर्मिंग"],
    "answer_en": "Domain discovery workshop technique",
    "answer_hi": "डोमेन डिस्कवरी वर्कशॉप तकनीक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 346
  },
  {
    "num": 347,
    "question_en": "What is the purpose of 'Java Example Mapping' technique?",
    "question_hi": "'Java Example Mapping' तकनीक का उद्देश्य क्या है?",
    "options_en": ["Requirement clarification technique", "Example mapping technique", "Java example", "Technique mapping"],
    "options_hi": ["रिक्वायरमेंट क्लैरिफिकेशन तकनीक", "एग्ज़ाम्पल मैपिंग तकनीक", "Java एग्ज़ाम्पल", "तकनीक मैपिंग"],
    "answer_en": "Requirement clarification technique",
    "answer_hi": "रिक्वायरमेंट क्लैरिफिकेशन तकनीक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 347
  },
  {
    "num": 348,
    "question_en": "Which of these is used for 'Java Impact Mapping' technique?",
    "question_hi": "'Java Impact Mapping' तकनीक के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Goal-oriented planning technique", "Impact mapping technique", "Java impact", "Technique mapping"],
    "options_hi": ["गोल-ओरिएंटेड प्लानिंग तकनीक", "इम्पैक्ट मैपिंग तकनीक", "Java इम्पैक्ट", "तकनीक मैपिंग"],
    "answer_en": "Goal-oriented planning technique",
    "answer_hi": "गोल-ओरिएंटेड प्लानिंग तकनीक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 348
  },
  {
    "num": 349,
    "question_en": "What is the purpose of 'Java Story Mapping' technique?",
    "question_hi": "'Java Story Mapping' तकनीक का उद्देश्य क्या है?",
    "options_en": ["User journey visualization technique", "Story mapping technique", "Java story", "Technique mapping"],
    "options_hi": ["यूजर जर्नी विज़ुअलाइजेशन तकनीक", "स्टोरी मैपिंग तकनीक", "Java स्टोरी", "तकनीक मैपिंग"],
    "answer_en": "User journey visualization technique",
    "answer_hi": "यूजर जर्नी विज़ुअलाइजेशन तकनीक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 349
  },
  {
    "num": 350,
    "question_en": "Which of these is used for 'Java Event Modeling' technique?",
    "question_hi": "'Java Event Modeling' तकनीक के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["Event-driven design technique", "Event modeling technique", "Java event", "Technique modeling"],
    "options_hi": ["इवेंट-ड्रिवेन डिज़ाइन तकनीक", "इवेंट मॉडलिंग तकनीक", "Java इवेंट", "तकनीक मॉडलिंग"],
    "answer_en": "Event-driven design technique",
    "answer_hi": "इवेंट-ड्रिवेन डिज़ाइन तकनीक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 350
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