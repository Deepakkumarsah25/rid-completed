 
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
    "question_en": "What is File I/O in Java?",
    "question_hi": "जावा में File I/O क्या है?",
    "options_en": ["Reading from and writing to files", "Reading from console only", "Writing to console only", "Network communication"],
    "options_hi": ["फाइल्स से पढ़ना और फाइल्स में लिखना", "सिर्फ कंसोल से पढ़ना", "सिर्फ कंसोल में लिखना", "नेटवर्क कम्युनिकेशन"],
    "answer_en": "Reading from and writing to files",
    "answer_hi": "फाइल्स से पढ़ना और फाइल्स में लिखना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "What is java.io package?",
    "question_hi": "java.io पैकेज क्या है?",
    "options_en": ["Package for input/output operations", "Package for networking", "Package for GUI", "Package for database"],
    "options_hi": ["इनपुट/आउटपुट ऑपरेशन्स के लिए पैकेज", "नेटवर्किंग के लिए पैकेज", "GUI के लिए पैकेज", "डेटाबेस के लिए पैकेज"],
    "answer_en": "Package for input/output operations",
    "answer_hi": "इनपुट/आउटपुट ऑपरेशन्स के लिए पैकेज",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "What is File class?",
    "question_hi": "File क्लास क्या है?",
    "options_en": ["Represents file and directory pathnames", "Reads file content", "Writes to file", "Deletes file"],
    "options_hi": ["फाइल और डायरेक्टरी पथनाम रिप्रेजेंट करता है", "फाइल कंटेंट पढ़ता है", "फाइल में लिखता है", "फाइल डिलीट करता है"],
    "answer_en": "Represents file and directory pathnames",
    "answer_hi": "फाइल और डायरेक्टरी पथनाम रिप्रेजेंट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "How to create File object?",
    "question_hi": "File ऑब्जेक्ट कैसे बनाएं?",
    "options_en": ["File file = new File(\"path.txt\");", "new File()", "File.create(\"path.txt\")", "File.new(\"path.txt\")"],
    "options_hi": ["File file = new File(\"path.txt\");", "new File()", "File.create(\"path.txt\")", "File.new(\"path.txt\")"],
    "answer_en": "File file = new File(\"path.txt\");",
    "answer_hi": "File file = new File(\"path.txt\");",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "What is File.exists() method?",
    "question_hi": "File.exists() मेथड क्या है?",
    "options_en": ["Checks if file exists", "Creates file", "Deletes file", "Renames file"],
    "options_hi": ["चेक करता है कि फाइल exists है या नहीं", "फाइल बनाता है", "फाइल डिलीट करता है", "फाइल रीनाम करता है"],
    "answer_en": "Checks if file exists",
    "answer_hi": "चेक करता है कि फाइल exists है या नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "What is File.createNewFile()?",
    "question_hi": "File.createNewFile() क्या है?",
    "options_en": ["Creates new empty file", "Creates directory", "Opens file", "Closes file"],
    "options_hi": ["नई खाली फाइल बनाता है", "डायरेक्टरी बनाता है", "फाइल ओपन करता है", "फाइल क्लोज करता है"],
    "answer_en": "Creates new empty file",
    "answer_hi": "नई खाली फाइल बनाता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "What is File.delete() method?",
    "question_hi": "File.delete() मेथड क्या है?",
    "options_en": ["Deletes file or directory", "Creates file", "Renames file", "Copies file"],
    "options_hi": ["फाइल या डायरेक्टरी डिलीट करता है", "फाइल बनाता है", "फाइल रीनाम करता है", "फाइल कॉपी करता है"],
    "answer_en": "Deletes file or directory",
    "answer_hi": "फाइल या डायरेक्टरी डिलीट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "What is File.mkdir() method?",
    "question_hi": "File.mkdir() मेथड क्या है?",
    "options_en": ["Creates directory", "Creates file", "Deletes directory", "Lists directory"],
    "options_hi": ["डायरेक्टरी बनाता है", "फाइल बनाता है", "डायरेक्टरी डिलीट करता है", "डायरेक्टरी लिस्ट करता है"],
    "answer_en": "Creates directory",
    "answer_hi": "डायरेक्टरी बनाता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What is File.list() method?",
    "question_hi": "File.list() मेथड क्या है?",
    "options_en": ["Returns array of files in directory", "Returns file size", "Returns file name", "Returns file path"],
    "options_hi": ["डायरेक्टरी में फाइल्स का एरे रिटर्न करता है", "फाइल साइज रिटर्न करता है", "फाइल नाम रिटर्न करता है", "फाइल पथ रिटर्न करता है"],
    "answer_en": "Returns array of files in directory",
    "answer_hi": "डायरेक्टरी में फाइल्स का एरे रिटर्न करता है",
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
    "question_en": "What are streams in Java?",
    "question_hi": "जावा में स्ट्रीम्स क्या हैं?",
    "options_en": ["Sequence of data", "Single data item", "File object", "Directory object"],
    "options_hi": ["डेटा का सीक्वेंस", "सिंगल डेटा आइटम", "फाइल ऑब्जेक्ट", "डायरेक्टरी ऑब्जेक्ट"],
    "answer_en": "Sequence of data",
    "answer_hi": "डेटा का सीक्वेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "What are byte streams?",
    "question_hi": "बाइट स्ट्रीम्स क्या हैं?",
    "options_en": ["Handle I/O of raw binary data", "Handle character data", "Handle object data", "Handle text data"],
    "options_hi": ["रॉ बाइनरी डेटा का I/O हैंडल करते हैं", "कैरेक्टर डेटा हैंडल करते हैं", "ऑब्जेक्ट डेटा हैंडल करते हैं", "टेक्स्ट डेटा हैंडल करते हैं"],
    "answer_en": "Handle I/O of raw binary data",
    "answer_hi": "रॉ बाइनरी डेटा का I/O हैंडल करते हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What are character streams?",
    "question_hi": "कैरेक्टर स्ट्रीम्स क्या हैं?",
    "options_en": ["Handle I/O of character data", "Handle binary data", "Handle object data", "Handle numeric data"],
    "options_hi": ["कैरेक्टर डेटा का I/O हैंडल करते हैं", "बाइनरी डेटा हैंडल करते हैं", "ऑब्जेक्ट डेटा हैंडल करते हैं", "न्यूमेरिक डेटा हैंडल करते हैं"],
    "answer_en": "Handle I/O of character data",
    "answer_hi": "कैरेक्टर डेटा का I/O हैंडल करते हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "What is InputStream?",
    "question_hi": "InputStream क्या है?",
    "options_en": ["Abstract class for reading byte streams", "Abstract class for writing bytes", "Class for reading characters", "Class for writing characters"],
    "options_hi": ["बाइट स्ट्रीम्स पढ़ने के लिए अब्सट्रैक्ट क्लास", "बाइट्स लिखने के लिए अब्सट्रैक्ट क्लास", "कैरेक्टर्स पढ़ने के लिए क्लास", "कैरेक्टर्स लिखने के लिए क्लास"],
    "answer_en": "Abstract class for reading byte streams",
    "answer_hi": "बाइट स्ट्रीम्स पढ़ने के लिए अब्सट्रैक्ट क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is OutputStream?",
    "question_hi": "OutputStream क्या है?",
    "options_en": ["Abstract class for writing byte streams", "Abstract class for reading bytes", "Class for reading characters", "Class for writing characters"],
    "options_hi": ["बाइट स्ट्रीम्स लिखने के लिए अब्सट्रैक्ट क्लास", "बाइट्स पढ़ने के लिए अब्सट्रैक्ट क्लास", "कैरेक्टर्स पढ़ने के लिए क्लास", "कैरेक्टर्स लिखने के लिए क्लास"],
    "answer_en": "Abstract class for writing byte streams",
    "answer_hi": "बाइट स्ट्रीम्स लिखने के लिए अब्सट्रैक्ट क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "What is Reader?",
    "question_hi": "Reader क्या है?",
    "options_en": ["Abstract class for reading character streams", "Abstract class for writing characters", "Class for reading bytes", "Class for writing bytes"],
    "options_hi": ["कैरेक्टर स्ट्रीम्स पढ़ने के लिए अब्सट्रैक्ट क्लास", "कैरेक्टर्स लिखने के लिए अब्सट्रैक्ट क्लास", "बाइट्स पढ़ने के लिए क्लास", "बाइट्स लिखने के लिए क्लास"],
    "answer_en": "Abstract class for reading character streams",
    "answer_hi": "कैरेक्टर स्ट्रीम्स पढ़ने के लिए अब्सट्रैक्ट क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "What is Writer?",
    "question_hi": "Writer क्या है?",
    "options_en": ["Abstract class for writing character streams", "Abstract class for reading characters", "Class for reading bytes", "Class for writing bytes"],
    "options_hi": ["कैरेक्टर स्ट्रीम्स लिखने के लिए अब्सट्रैक्ट क्लास", "कैरेक्टर्स पढ़ने के लिए अब्सट्रैक्ट क्लास", "बाइट्स पढ़ने के लिए क्लास", "बाइट्स लिखने के लिए क्लास"],
    "answer_en": "Abstract class for writing character streams",
    "answer_hi": "कैरेक्टर स्ट्रीम्स लिखने के लिए अब्सट्रैक्ट क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is FileInputStream?",
    "question_hi": "FileInputStream क्या है?",
    "options_en": ["Reads raw bytes from file", "Writes raw bytes to file", "Reads characters from file", "Writes characters to file"],
    "options_hi": ["फाइल से रॉ बाइट्स पढ़ता है", "फाइल में रॉ बाइट्स लिखता है", "फाइल से कैरेक्टर्स पढ़ता है", "फाइल में कैरेक्टर्स लिखता है"],
    "answer_en": "Reads raw bytes from file",
    "answer_hi": "फाइल से रॉ बाइट्स पढ़ता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "What is FileOutputStream?",
    "question_hi": "FileOutputStream क्या है?",
    "options_en": ["Writes raw bytes to file", "Reads raw bytes from file", "Writes characters to file", "Reads characters from file"],
    "options_hi": ["फाइल में रॉ बाइट्स लिखता है", "फाइल से रॉ बाइट्स पढ़ता है", "फाइल में कैरेक्टर्स लिखता है", "फाइल से कैरेक्टर्स पढ़ता है"],
    "answer_en": "Writes raw bytes to file",
    "answer_hi": "फाइल में रॉ बाइट्स लिखता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is FileReader?",
    "question_hi": "FileReader क्या है?",
    "options_en": ["Reads characters from file", "Writes characters to file", "Reads bytes from file", "Writes bytes to file"],
    "options_hi": ["फाइल से कैरेक्टर्स पढ़ता है", "फाइल में कैरेक्टर्स लिखता है", "फाइल से बाइट्स पढ़ता है", "फाइल में बाइट्स लिखता है"],
    "answer_en": "Reads characters from file",
    "answer_hi": "फाइल से कैरेक्टर्स पढ़ता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "What is FileWriter?",
    "question_hi": "FileWriter क्या है?",
    "options_en": ["Writes characters to file", "Reads characters from file", "Writes bytes to file", "Reads bytes from file"],
    "options_hi": ["फाइल में कैरेक्टर्स लिखता है", "फाइल से कैरेक्टर्स पढ़ता है", "फाइल में बाइट्स लिखता है", "फाइल से बाइट्स पढ़ता है"],
    "answer_en": "Writes characters to file",
    "answer_hi": "फाइल में कैरेक्टर्स लिखता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "What is BufferedReader?",
    "question_hi": "BufferedReader क्या है?",
    "options_en": ["Reads text efficiently using buffer", "Writes text efficiently", "Reads bytes efficiently", "Writes bytes efficiently"],
    "options_hi": ["बफर उपयोग करके टेक्स्ट एफिशिएंटली पढ़ता है", "टेक्स्ट एफिशिएंटली लिखता है", "बाइट्स एफिशिएंटली पढ़ता है", "बाइट्स एफिशिएंटली लिखता है"],
    "answer_en": "Reads text efficiently using buffer",
    "answer_hi": "बफर उपयोग करके टेक्स्ट एफिशिएंटली पढ़ता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "What is BufferedWriter?",
    "question_hi": "BufferedWriter क्या है?",
    "options_en": ["Writes text efficiently using buffer", "Reads text efficiently", "Writes bytes efficiently", "Reads bytes efficiently"],
    "options_hi": ["बफर उपयोग करके टेक्स्ट एफिशिएंटली लिखता है", "टेक्स्ट एफिशिएंटली पढ़ता है", "बाइट्स एफिशिएंटली लिखता है", "बाइट्स एफिशिएंटली पढ़ता है"],
    "answer_en": "Writes text efficiently using buffer",
    "answer_hi": "बफर उपयोग करके टेक्स्ट एफिशिएंटली लिखता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is readLine() method?",
    "question_hi": "readLine() मेथड क्या है?",
    "options_en": ["Reads line of text", "Reads character", "Reads byte", "Reads all text"],
    "options_hi": ["टेक्स्ट की लाइन पढ़ता है", "कैरेक्टर पढ़ता है", "बाइट पढ़ता है", "सारा टेक्स्ट पढ़ता है"],
    "answer_en": "Reads line of text",
    "answer_hi": "टेक्स्ट की लाइन पढ़ता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "What is PrintWriter?",
    "question_hi": "PrintWriter क्या है?",
    "options_en": ["Prints formatted representations to text-output stream", "Reads formatted text", "Reads raw bytes", "Writes raw bytes"],
    "options_hi": ["फॉर्मेटेड रिप्रेजेंटेशन्स टेक्स्ट-आउटपुट स्ट्रीम में प्रिंट करता है", "फॉर्मेटेड टेक्स्ट पढ़ता है", "रॉ बाइट्स पढ़ता है", "रॉ बाइट्स लिखता है"],
    "answer_en": "Prints formatted representations to text-output stream",
    "answer_hi": "फॉर्मेटेड रिप्रेजेंटेशन्स टेक्स्ट-आउटपुट स्ट्रीम में प्रिंट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What is Scanner class?",
    "question_hi": "Scanner क्लास क्या है?",
    "options_en": ["Parses primitive types and strings", "Only reads strings", "Only writes strings", "Only reads bytes"],
    "options_hi": ["प्रिमिटिव टाइप्स और स्ट्रिंग्स पार्स करता है", "सिर्फ स्ट्रिंग्स पढ़ता है", "सिर्फ स्ट्रिंग्स लिखता है", "सिर्फ बाइट्स पढ़ता है"],
    "answer_en": "Parses primitive types and strings",
    "answer_hi": "प्रिमिटिव टाइप्स और स्ट्रिंग्स पार्स करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "What is DataInputStream?",
    "question_hi": "DataInputStream क्या है?",
    "options_en": ["Reads primitive Java data types", "Reads only strings", "Writes primitive types", "Reads only bytes"],
    "options_hi": ["प्रिमिटिव जावा डेटा टाइप्स पढ़ता है", "सिर्फ स्ट्रिंग्स पढ़ता है", "प्रिमिटिव टाइप्स लिखता है", "सिर्फ बाइट्स पढ़ता है"],
    "answer_en": "Reads primitive Java data types",
    "answer_hi": "प्रिमिटिव जावा डेटा टाइप्स पढ़ता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What is DataOutputStream?",
    "question_hi": "DataOutputStream क्या है?",
    "options_en": ["Writes primitive Java data types", "Writes only strings", "Reads primitive types", "Writes only bytes"],
    "options_hi": ["प्रिमिटिव जावा डेटा टाइप्स लिखता है", "सिर्फ स्ट्रिंग्स लिखता है", "प्रिमिटिव टाइप्स पढ़ता है", "सिर्फ बाइट्स लिखता है"],
    "answer_en": "Writes primitive Java data types",
    "answer_hi": "प्रिमिटिव जावा डेटा टाइप्स लिखता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "What is ObjectInputStream?",
    "question_hi": "ObjectInputStream क्या है?",
    "options_en": ["Reads objects from stream", "Writes objects to stream", "Reads primitive types", "Writes primitive types"],
    "options_hi": ["स्ट्रीम से ऑब्जेक्ट्स पढ़ता है", "स्ट्रीम में ऑब्जेक्ट्स लिखता है", "प्रिमिटिव टाइप्स पढ़ता है", "प्रिमिटिव टाइप्स लिखता है"],
    "answer_en": "Reads objects from stream",
    "answer_hi": "स्ट्रीम से ऑब्जेक्ट्स पढ़ता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is ObjectOutputStream?",
    "question_hi": "ObjectOutputStream क्या है?",
    "options_en": ["Writes objects to stream", "Reads objects from stream", "Writes primitive types", "Reads primitive types"],
    "options_hi": ["स्ट्रीम में ऑब्जेक्ट्स लिखता है", "स्ट्रीम से ऑब्जेक्ट्स पढ़ता है", "प्रिमिटिव टाइप्स लिखता है", "प्रिमिटिव टाइप्स पढ़ता है"],
    "answer_en": "Writes objects to stream",
    "answer_hi": "स्ट्रीम में ऑब्जेक्ट्स लिखता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "What is serialization?",
    "question_hi": "सीरियलाइजेशन क्या है?",
    "options_en": ["Converting object to byte stream", "Converting byte stream to object", "Converting text to bytes", "Converting bytes to text"],
    "options_hi": ["ऑब्जेक्ट को बाइट स्ट्रीम में कन्वर्ट करना", "बाइट स्ट्रीम को ऑब्जेक्ट में कन्वर्ट करना", "टेक्स्ट को बाइट्स में कन्वर्ट करना", "बाइट्स को टेक्स्ट में कन्वर्ट करना"],
    "answer_en": "Converting object to byte stream",
    "answer_hi": "ऑब्जेक्ट को बाइट स्ट्रीम में कन्वर्ट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "What is deserialization?",
    "question_hi": "डीसीरियलाइजेशन क्या है?",
    "options_en": ["Converting byte stream to object", "Converting object to byte stream", "Converting text to object", "Converting object to text"],
    "options_hi": ["बाइट स्ट्रीम को ऑब्जेक्ट में कन्वर्ट करना", "ऑब्जेक्ट को बाइट स्ट्रीम में कन्वर्ट करना", "टेक्स्ट को ऑब्जेक्ट में कन्वर्ट करना", "ऑब्जेक्ट को टेक्स्ट में कन्वर्ट करना"],
    "answer_en": "Converting byte stream to object",
    "answer_hi": "बाइट स्ट्रीम को ऑब्जेक्ट में कन्वर्ट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is Serializable interface?",
    "question_hi": "Serializable इंटरफेस क्या है?",
    "options_en": ["Marker interface for serialization", "Interface for cloning", "Interface for comparing", "Interface for sorting"],
    "options_hi": ["सीरियलाइजेशन के लिए मार्कर इंटरफेस", "क्लोनिंग के लिए इंटरफेस", "कंपेयरिंग के लिए इंटरफेस", "सॉर्टिंग के लिए इंटरफेस"],
    "answer_en": "Marker interface for serialization",
    "answer_hi": "सीरियलाइजेशन के लिए मार्कर इंटरफेस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "What is transient keyword?",
    "question_hi": "transient कीवर्ड क्या है?",
    "options_en": ["Prevents field from being serialized", "Makes field serializable", "Makes field static", "Makes field final"],
    "options_hi": ["फील्ड को सीरियलाइज होने से रोकता है", "फील्ड को सीरियलाइजेबल बनाता है", "फील्ड को स्टेटिक बनाता है", "फील्ड को फाइनल बनाता है"],
    "answer_en": "Prevents field from being serialized",
    "answer_hi": "फील्ड को सीरियलाइज होने से रोकता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "What is RandomAccessFile?",
    "question_hi": "RandomAccessFile क्या है?",
    "options_en": ["Allows reading/writing at any position", "Only sequential access", "Only reading", "Only writing"],
    "options_hi": ["किसी भी पोजीशन पर रीडिंग/राइटिंग की अनुमति देता है", "सिर्फ सीक्वेंशियल एक्सेस", "सिर्फ रीडिंग", "सिर्फ राइटिंग"],
    "answer_en": "Allows reading/writing at any position",
    "answer_hi": "किसी भी पोजीशन पर रीडिंग/राइटिंग की अनुमति देता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "What is seek() method?",
    "question_hi": "seek() मेथड क्या है?",
    "options_en": ["Sets file pointer position", "Gets file pointer position", "Reads from file", "Writes to file"],
    "options_hi": ["फाइल पॉइंटर पोजीशन सेट करता है", "फाइल पॉइंटर पोजीशन गेट करता है", "फाइल से पढ़ता है", "फाइल में लिखता है"],
    "answer_en": "Sets file pointer position",
    "answer_hi": "फाइल पॉइंटर पोजीशन सेट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "What is NIO (New I/O)?",
    "question_hi": "NIO (New I/O) क्या है?",
    "options_en": ["Non-blocking I/O API", "Old I/O API", "Network I/O only", "File I/O only"],
    "options_hi": ["नॉन-ब्लॉकिंग I/O API", "ओल्ड I/O API", "सिर्फ नेटवर्क I/O", "सिर्फ फाइल I/O"],
    "answer_en": "Non-blocking I/O API",
    "answer_hi": "नॉन-ब्लॉकिंग I/O API",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is Path interface?",
    "question_hi": "Path इंटरफेस क्या है?",
    "options_en": ["Represents path in file system", "Represents file content", "Represents directory", "Represents stream"],
    "options_hi": ["फाइल सिस्टम में पथ रिप्रेजेंट करता है", "फाइल कंटेंट रिप्रेजेंट करता है", "डायरेक्टरी रिप्रेजेंट करता है", "स्ट्रीम रिप्रेजेंट करता है"],
    "answer_en": "Represents path in file system",
    "answer_hi": "फाइल सिस्टम में पथ रिप्रेजेंट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "What is Files class?",
    "question_hi": "Files क्लास क्या है?",
    "options_en": ["Utility class for file operations", "Class representing file", "Class representing directory", "Class representing path"],
    "options_hi": ["फाइल ऑपरेशन्स के लिए यूटिलिटी क्लास", "फाइल रिप्रेजेंट करने वाली क्लास", "डायरेक्टरी रिप्रेजेंट करने वाली क्लास", "पथ रिप्रेजेंट करने वाली क्लास"],
    "answer_en": "Utility class for file operations",
    "answer_hi": "फाइल ऑपरेशन्स के लिए यूटिलिटी क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is Channels in NIO?",
    "question_hi": "NIO में Channels क्या हैं?",
    "options_en": ["Represents open connection to I/O source", "Represents files", "Represents directories", "Represents streams"],
    "options_hi": ["I/O सोर्स से ओपन कनेक्शन रिप्रेजेंट करता है", "फाइल्स रिप्रेजेंट करता है", "डायरेक्टरीज रिप्रेजेंट करता है", "स्ट्रीम्स रिप्रेजेंट करता है"],
    "answer_en": "Represents open connection to I/O source",
    "answer_hi": "I/O सोर्स से ओपन कनेक्शन रिप्रेजेंट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "What is Buffer in NIO?",
    "question_hi": "NIO में Buffer क्या है?",
    "options_en": ["Container for data", "File object", "Directory object", "Stream object"],
    "options_hi": ["डेटा के लिए कंटेनर", "फाइल ऑब्जेक्ट", "डायरेक्टरी ऑब्जेक्ट", "स्ट्रीम ऑब्जेक्ट"],
    "answer_en": "Container for data",
    "answer_hi": "डेटा के लिए कंटेनर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is ByteBuffer?",
    "question_hi": "ByteBuffer क्या है?",
    "options_en": ["Buffer for bytes", "Buffer for characters", "Buffer for integers", "Buffer for strings"],
    "options_hi": ["बाइट्स के लिए बफर", "कैरेक्टर्स के लिए बफर", "इंटीजर्स के लिए बफर", "स्ट्रिंग्स के लिए बफर"],
    "answer_en": "Buffer for bytes",
    "answer_hi": "बाइट्स के लिए बफर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is CharBuffer?",
    "question_hi": "CharBuffer क्या है?",
    "options_en": ["Buffer for characters", "Buffer for bytes", "Buffer for integers", "Buffer for doubles"],
    "options_hi": ["कैरेक्टर्स के लिए बफर", "बाइट्स के लिए बफर", "इंटीजर्स के लिए बफर", "डबल्स के लिए बफर"],
    "answer_en": "Buffer for characters",
    "answer_hi": "कैरेक्टर्स के लिए बफर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "What is flush() method?",
    "question_hi": "flush() मेथड क्या है?",
    "options_en": ["Forces any buffered data to be written", "Clears buffer", "Reads from buffer", "Closes stream"],
    "options_hi": ["बफर्ड डेटा को लिखने के लिए फोर्स करता है", "बफर क्लियर करता है", "बफर से पढ़ता है", "स्ट्रीम क्लोज करता है"],
    "answer_en": "Forces any buffered data to be written",
    "answer_hi": "बफर्ड डेटा को लिखने के लिए फोर्स करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is close() method?",
    "question_hi": "close() मेथड क्या है?",
    "options_en": ["Closes stream and releases resources", "Opens stream", "Flushes stream", "Reads from stream"],
    "options_hi": ["स्ट्रीम क्लोज करता है और रिसोर्सेस रिलीज करता है", "स्ट्रीम ओपन करता है", "स्ट्रीम फ्लश करता है", "स्ट्रीम से पढ़ता है"],
    "answer_en": "Closes stream and releases resources",
    "answer_hi": "स्ट्रीम क्लोज करता है और रिसोर्सेस रिलीज करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is try-with-resources for I/O?",
    "question_hi": "I/O के लिए try-with-resources क्या है?",
    "options_en": ["Automatic resource management for streams", "Manual resource management", "Only for files", "Only for networks"],
    "options_hi": ["स्ट्रीम्स के लिए ऑटोमेटिक रिसोर्स मैनेजमेंट", "मैनुअल रिसोर्स मैनेजमेंट", "सिर्फ फाइल्स के लिए", "सिर्फ नेटवर्क्स के लिए"],
    "answer_en": "Automatic resource management for streams",
    "answer_hi": "स्ट्रीम्स के लिए ऑटोमेटिक रिसोर्स मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is file encoding?",
    "question_hi": "फाइल एन्कोडिंग क्या है?",
    "options_en": ["Character encoding for text files", "File compression", "File encryption", "File format"],
    "options_hi": ["टेक्स्ट फाइल्स के लिए कैरेक्टर एन्कोडिंग", "फाइल कम्प्रेशन", "फाइल एन्क्रिप्शन", "फाइल फॉर्मेट"],
    "answer_en": "Character encoding for text files",
    "answer_hi": "टेक्स्ट फाइल्स के लिए कैरेक्टर एन्कोडिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is UTF-8 encoding?",
    "question_hi": "UTF-8 एन्कोडिंग क्या है?",
    "options_en": ["Common Unicode encoding", "ASCII encoding", "Binary encoding", "Hex encoding"],
    "options_hi": ["कॉमन यूनिकोड एन्कोडिंग", "ASCII एन्कोडिंग", "बाइनरी एन्कोडिंग", "हेक्स एन्कोडिंग"],
    "answer_en": "Common Unicode encoding",
    "answer_hi": "कॉमन यूनिकोड एन्कोडिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "What is file permissions?",
    "question_hi": "फाइल परमिशन्स क्या हैं?",
    "options_en": ["Access rights for file", "File size", "File type", "File content"],
    "options_hi": ["फाइल के लिए एक्सेस राइट्स", "फाइल साइज", "फाइल टाइप", "फाइल कंटेंट"],
    "answer_en": "Access rights for file",
    "answer_hi": "फाइल के लिए एक्सेस राइट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "What is file locking?",
    "question_hi": "फाइल लॉकिंग क्या है?",
    "options_en": ["Preventing multiple access to file", "Encrypting file", "Compressing file", "Renaming file"],
    "options_hi": ["फाइल तक मल्टीपल एक्सेस रोकना", "फाइल एन्क्रिप्ट करना", "फाइल कंप्रेस करना", "फाइल रीनाम करना"],
    "answer_en": "Preventing multiple access to file",
    "answer_hi": "फाइल तक मल्टीपल एक्सेस रोकना",
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