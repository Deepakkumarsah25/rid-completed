 
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
    "question_en": "What is an array in Java?",
    "question_hi": "जावा में एरे क्या है?",
    "options_en": ["Collection of similar type elements", "Collection of different type elements", "Single element", "Method"],
    "options_hi": ["समान टाइप एलिमेंट्स का कलेक्शन", "अलग-अलग टाइप एलिमेंट्स का कलेक्शन", "सिंगल एलिमेंट", "मेथड"],
    "answer_en": "Collection of similar type elements",
    "answer_hi": "समान टाइप एलिमेंट्स का कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "How to declare an array in Java?",
    "question_hi": "जावा में एरे कैसे डिक्लेयर करें?",
    "options_en": ["int[] arr;", "int arr[];", "Both A and B", "int arr()"],
    "options_hi": ["int[] arr;", "int arr[];", "A और B दोनों", "int arr()"],
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
    "question_en": "How to instantiate an array in Java?",
    "question_hi": "जावा में एरे कैसे इंस्टेंशिएट करें?",
    "options_en": ["new int[5];", "int[5];", "int new[5];", "create int[5];"],
    "options_hi": ["new int[5];", "int[5];", "int new[5];", "create int[5];"],
    "answer_en": "new int[5];",
    "answer_hi": "new int[5];",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "How to declare and instantiate array in one line?",
    "question_hi": "एक लाइन में एरे कैसे डिक्लेयर और इंस्टेंशिएट करें?",
    "options_en": ["int[] arr = new int[5];", "int arr[] = new int[5];", "Both A and B", "int arr = new int[5];"],
    "options_hi": ["int[] arr = new int[5];", "int arr[] = new int[5];", "A और B दोनों", "int arr = new int[5];"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "How to initialize array with values?",
    "question_hi": "वैल्यूज के साथ एरे कैसे इनिशियलाइज करें?",
    "options_en": ["int[] arr = {1,2,3,4,5};", "int[] arr = new int[]{1,2,3,4,5};", "Both A and B", "int arr = {1,2,3,4,5};"],
    "options_hi": ["int[] arr = {1,2,3,4,5};", "int[] arr = new int[]{1,2,3,4,5};", "A और B दोनों", "int arr = {1,2,3,4,5};"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "What is array index?",
    "question_hi": "एरे इंडेक्स क्या है?",
    "options_en": ["Position of element in array", "Value of element", "Size of array", "Type of array"],
    "options_hi": ["एरे में एलिमेंट की पोजीशन", "एलिमेंट की वैल्यू", "एरे का साइज", "एरे का टाइप"],
    "answer_en": "Position of element in array",
    "answer_hi": "एरे में एलिमेंट की पोजीशन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "What is the index of first element in array?",
    "question_hi": "एरे में पहले एलिमेंट का इंडेक्स क्या है?",
    "options_en": ["0", "1", "-1", "10"],
    "options_hi": ["0", "1", "-1", "10"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "How to access array element?",
    "question_hi": "एरे एलिमेंट कैसे एक्सेस करें?",
    "options_en": ["arr[index]", "arr.index", "arr(index)", "arr->index"],
    "options_hi": ["arr[index]", "arr.index", "arr(index)", "arr->index"],
    "answer_en": "arr[index]",
    "answer_hi": "arr[index]",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "What is array length?",
    "question_hi": "एरे लेंथ क्या है?",
    "options_en": ["Number of elements in array", "Size in bytes", "Index of last element", "Capacity of array"],
    "options_hi": ["एरे में एलिमेंट्स की संख्या", "बाइट्स में साइज", "लास्ट एलिमेंट का इंडेक्स", "एरे की कैपेसिटी"],
    "answer_en": "Number of elements in array",
    "answer_hi": "एरे में एलिमेंट्स की संख्या",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "How to get array length?",
    "question_hi": "एरे लेंथ कैसे पाएं?",
    "options_en": ["arr.length", "arr.length()", "arr.size", "arr.size()"],
    "options_hi": ["arr.length", "arr.length()", "arr.size", "arr.size()"],
    "answer_en": "arr.length",
    "answer_hi": "arr.length",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What is multidimensional array?",
    "question_hi": "मल्टीडायमेंशनल एरे क्या है?",
    "options_en": ["Array of arrays", "Large array", "Complex array", "Dynamic array"],
    "options_hi": ["एरे का एरे", "बड़ा एरे", "कॉम्प्लेक्स एरे", "डायनामिक एरे"],
    "answer_en": "Array of arrays",
    "answer_hi": "एरे का एरे",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "How to declare 2D array?",
    "question_hi": "2D एरे कैसे डिक्लेयर करें?",
    "options_en": ["int[][] matrix;", "int matrix[][];", "Both A and B", "int[2D] matrix;"],
    "options_hi": ["int[][] matrix;", "int matrix[][];", "A और B दोनों", "int[2D] matrix;"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "How to create 2D array?",
    "question_hi": "2D एरे कैसे बनाएं?",
    "options_en": ["new int[3][4];", "int[3,4];", "new int(3,4);", "create int[3][4];"],
    "options_hi": ["new int[3][4];", "int[3,4];", "new int(3,4);", "create int[3][4];"],
    "answer_en": "new int[3][4];",
    "answer_hi": "new int[3][4];",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "How to access 2D array element?",
    "question_hi": "2D एरे एलिमेंट कैसे एक्सेस करें?",
    "options_en": ["matrix[row][col]", "matrix(row,col)", "matrix[row,col]", "matrix->row->col"],
    "options_hi": ["matrix[row][col]", "matrix(row,col)", "matrix[row,col]", "matrix->row->col"],
    "answer_en": "matrix[row][col]",
    "answer_hi": "matrix[row][col]",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "What is jagged array?",
    "question_hi": "जैग्ड एरे क्या है?",
    "options_en": ["2D array with different row lengths", "3D array", "Irregular array", "Broken array"],
    "options_hi": ["अलग-अलग रो लेंथ वाला 2D एरे", "3D एरे", "इरेगुलर एरे", "ब्रोकन एरे"],
    "answer_en": "2D array with different row lengths",
    "answer_hi": "अलग-अलग रो लेंथ वाला 2D एरे",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "How to create jagged array?",
    "question_hi": "जैग्ड एरे कैसे बनाएं?",
    "options_en": ["int[][] arr = new int[3][];", "int[3][] arr = new int[][];", "int[][] arr = new int[][3];", "int[][] arr = new int[3][3];"],
    "options_hi": ["int[][] arr = new int[3][];", "int[3][] arr = new int[][];", "int[][] arr = new int[][3];", "int[][] arr = new int[3][3];"],
    "answer_en": "int[][] arr = new int[3][];",
    "answer_hi": "int[][] arr = new int[3][];",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "What is array copy?",
    "question_hi": "एरे कॉपी क्या है?",
    "options_en": ["Copying array elements", "Moving array", "Deleting array", "Creating array"],
    "options_hi": ["एरे एलिमेंट्स कॉपी करना", "एरे मूव करना", "एरे डिलीट करना", "एरे बनाना"],
    "answer_en": "Copying array elements",
    "answer_hi": "एरे एलिमेंट्स कॉपी करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "How to copy array using System.arraycopy()?",
    "question_hi": "System.arraycopy() का उपयोग करके एरे कैसे कॉपी करें?",
    "options_en": ["System.arraycopy(src, srcPos, dest, destPos, length)", "arraycopy(src, dest)", "System.copy(src, dest)", "array.copy(src, dest)"],
    "options_hi": ["System.arraycopy(src, srcPos, dest, destPos, length)", "arraycopy(src, dest)", "System.copy(src, dest)", "array.copy(src, dest)"],
    "answer_en": "System.arraycopy(src, srcPos, dest, destPos, length)",
    "answer_hi": "System.arraycopy(src, srcPos, dest, destPos, length)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "How to copy array using Arrays.copyOf()?",
    "question_hi": "Arrays.copyOf() का उपयोग करके एरे कैसे कॉपी करें?",
    "options_en": ["Arrays.copyOf(original, newLength)", "copyOf(original, length)", "Arrays.copy(original, length)", "copy(original, length)"],
    "options_hi": ["Arrays.copyOf(original, newLength)", "copyOf(original, length)", "Arrays.copy(original, length)", "copy(original, length)"],
    "answer_en": "Arrays.copyOf(original, newLength)",
    "answer_hi": "Arrays.copyOf(original, newLength)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is array sorting?",
    "question_hi": "एरे सॉर्टिंग क्या है?",
    "options_en": ["Arranging elements in order", "Randomizing elements", "Grouping elements", "Filtering elements"],
    "options_hi": ["एलिमेंट्स को ऑर्डर में अरेंज करना", "एलिमेंट्स रैंडमाइज करना", "एलिमेंट्स ग्रुप करना", "एलिमेंट्स फिल्टर करना"],
    "answer_en": "Arranging elements in order",
    "answer_hi": "एलिमेंट्स को ऑर्डर में अरेंज करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "How to sort array using Arrays.sort()?",
    "question_hi": "Arrays.sort() का उपयोग करके एरे कैसे सॉर्ट करें?",
    "options_en": ["Arrays.sort(arr)", "sort(arr)", "arr.sort()", "Array.sort(arr)"],
    "options_hi": ["Arrays.sort(arr)", "sort(arr)", "arr.sort()", "Array.sort(arr)"],
    "answer_en": "Arrays.sort(arr)",
    "answer_hi": "Arrays.sort(arr)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "What is binary search in array?",
    "question_hi": "एरे में बाइनरी सर्च क्या है?",
    "options_en": ["Search algorithm for sorted arrays", "Linear search", "Random search", "Sequential search"],
    "options_hi": ["सॉर्टेड एरे के लिए सर्च एल्गोरिदम", "लीनियर सर्च", "रैंडम सर्च", "सीक्वेंशियल सर्च"],
    "answer_en": "Search algorithm for sorted arrays",
    "answer_hi": "सॉर्टेड एरे के लिए सर्च एल्गोरिदम",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "How to use Arrays.binarySearch()?",
    "question_hi": "Arrays.binarySearch() कैसे उपयोग करें?",
    "options_en": ["Arrays.binarySearch(arr, key)", "binarySearch(arr, key)", "arr.binarySearch(key)", "Array.binarySearch(arr, key)"],
    "options_hi": ["Arrays.binarySearch(arr, key)", "binarySearch(arr, key)", "arr.binarySearch(key)", "Array.binarySearch(arr, key)"],
    "answer_en": "Arrays.binarySearch(arr, key)",
    "answer_hi": "Arrays.binarySearch(arr, key)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "What is array equality check?",
    "question_hi": "एरे इक्वेलिटी चेक क्या है?",
    "options_en": ["Checking if two arrays are equal", "Checking array size", "Checking array type", "Checking array reference"],
    "options_hi": ["चेक करना कि दो एरे इक्वल हैं या नहीं", "एरे साइज चेक करना", "एरे टाइप चेक करना", "एरे रेफरेंस चेक करना"],
    "answer_en": "Checking if two arrays are equal",
    "answer_hi": "चेक करना कि दो एरे इक्वल हैं या नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "How to check array equality using Arrays.equals()?",
    "question_hi": "Arrays.equals() का उपयोग करके एरे इक्वेलिटी कैसे चेक करें?",
    "options_en": ["Arrays.equals(arr1, arr2)", "equals(arr1, arr2)", "arr1.equals(arr2)", "Array.equals(arr1, arr2)"],
    "options_hi": ["Arrays.equals(arr1, arr2)", "equals(arr1, arr2)", "arr1.equals(arr2)", "Array.equals(arr1, arr2)"],
    "answer_en": "Arrays.equals(arr1, arr2)",
    "answer_hi": "Arrays.equals(arr1, arr2)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "What is array fill?",
    "question_hi": "एरे फिल क्या है?",
    "options_en": ["Filling array with value", "Emptying array", "Creating array", "Deleting array"],
    "options_hi": ["एरे को वैल्यू से फिल करना", "एरे खाली करना", "एरे बनाना", "एरे डिलीट करना"],
    "answer_en": "Filling array with value",
    "answer_hi": "एरे को वैल्यू से फिल करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "How to fill array using Arrays.fill()?",
    "question_hi": "Arrays.fill() का उपयोग करके एरे कैसे फिल करें?",
    "options_en": ["Arrays.fill(arr, value)", "fill(arr, value)", "arr.fill(value)", "Array.fill(arr, value)"],
    "options_hi": ["Arrays.fill(arr, value)", "fill(arr, value)", "arr.fill(value)", "Array.fill(arr, value)"],
    "answer_en": "Arrays.fill(arr, value)",
    "answer_hi": "Arrays.fill(arr, value)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What is array to string conversion?",
    "question_hi": "एरे टू स्ट्रिंग कन्वर्जन क्या है?",
    "options_en": ["Converting array to readable string", "Converting string to array", "Parsing array", "Formatting array"],
    "options_hi": ["एरे को रीडेबल स्ट्रिंग में कन्वर्ट करना", "स्ट्रिंग को एरे में कन्वर्ट करना", "एरे पार्स करना", "एरे फॉर्मेट करना"],
    "answer_en": "Converting array to readable string",
    "answer_hi": "एरे को रीडेबल स्ट्रिंग में कन्वर्ट करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "How to convert array to string using Arrays.toString()?",
    "question_hi": "Arrays.toString() का उपयोग करके एरे को स्ट्रिंग में कैसे कन्वर्ट करें?",
    "options_en": ["Arrays.toString(arr)", "toString(arr)", "arr.toString()", "Array.toString(arr)"],
    "options_hi": ["Arrays.toString(arr)", "toString(arr)", "arr.toString()", "Array.toString(arr)"],
    "answer_en": "Arrays.toString(arr)",
    "answer_hi": "Arrays.toString(arr)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is deepToString() method?",
    "question_hi": "deepToString() मेथड क्या है?",
    "options_en": ["Converts multidimensional array to string", "Converts single array to string", "Deep copies array", "Deep compares arrays"],
    "options_hi": ["मल्टीडायमेंशनल एरे को स्ट्रिंग में कन्वर्ट करता है", "सिंगल एरे को स्ट्रिंग में कन्वर्ट करता है", "एरे की डीप कॉपी बनाता है", "एरे की डीप कंपेरिजन करता है"],
    "answer_en": "Converts multidimensional array to string",
    "answer_hi": "मल्टीडायमेंशनल एरे को स्ट्रिंग में कन्वर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "What is array iteration?",
    "question_hi": "एरे इटरेशन क्या है?",
    "options_en": ["Traversing through array elements", "Creating array", "Deleting array", "Sorting array"],
    "options_hi": ["एरे एलिमेंट्स के माध्यम से ट्रैवर्स करना", "एरे बनाना", "एरे डिलीट करना", "एरे सॉर्ट करना"],
    "answer_en": "Traversing through array elements",
    "answer_hi": "एरे एलिमेंट्स के माध्यम से ट्रैवर्स करना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "How to iterate array using for loop?",
    "question_hi": "for लूप का उपयोग करके एरे कैसे इटरेट करें?",
    "options_en": ["for(int i=0; i<arr.length; i++)", "for(int i : arr)", "Both A and B", "while loop only"],
    "options_hi": ["for(int i=0; i<arr.length; i++)", "for(int i : arr)", "A और B दोनों", "सिर्फ while लूप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is enhanced for loop for arrays?",
    "question_hi": "एरे के लिए एन्हांस्ड for लूप क्या है?",
    "options_en": ["for(dataType variable : array)", "for(int i=0; i<array.length; i++)", "while loop", "do-while loop"],
    "options_hi": ["for(dataType variable : array)", "for(int i=0; i<array.length; i++)", "while लूप", "do-while लूप"],
    "answer_en": "for(dataType variable : array)",
    "answer_hi": "for(dataType variable : array)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "What is array resizing?",
    "question_hi": "एरे रीसाइजिंग क्या है?",
    "options_en": ["Changing array size", "Sorting array", "Copying array", "Filling array"],
    "options_hi": ["एरे साइज बदलना", "एरे सॉर्ट करना", "एरे कॉपी करना", "एरे फिल करना"],
    "answer_en": "Changing array size",
    "answer_hi": "एरे साइज बदलना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "How to resize array in Java?",
    "question_hi": "जावा में एरे कैसे रीसाइज करें?",
    "options_en": ["Create new array and copy elements", "Use resize() method", "Change length property", "Cannot resize"],
    "options_hi": ["नया एरे बनाएं और एलिमेंट्स कॉपी करें", "resize() मेथड उपयोग करें", "length प्रॉपर्टी बदलें", "रीसाइज नहीं कर सकते"],
    "answer_en": "Create new array and copy elements",
    "answer_hi": "नया एरे बनाएं और एलिमेंट्स कॉपी करें",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "What is array of objects?",
    "question_hi": "ऑब्जेक्ट्स का एरे क्या है?",
    "options_en": ["Array that stores objects", "Array of primitives", "Object that contains array", "Array of arrays"],
    "options_hi": ["ऑब्जेक्ट्स स्टोर करने वाला एरे", "प्रिमिटिव्स का एरे", "एरे कंटेन करने वाला ऑब्जेक्ट", "एरे का एरे"],
    "answer_en": "Array that stores objects",
    "answer_hi": "ऑब्जेक्ट्स स्टोर करने वाला एरे",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "How to create array of objects?",
    "question_hi": "ऑब्जेक्ट्स का एरे कैसे बनाएं?",
    "options_en": ["ClassName[] arr = new ClassName[size];", "new Object[size]", "Object[] arr = new Object[size]", "All of these"],
    "options_hi": ["ClassName[] arr = new ClassName[size];", "new Object[size]", "Object[] arr = new Object[size]", "ये सभी"],
    "answer_en": "ClassName[] arr = new ClassName[size];",
    "answer_hi": "ClassName[] arr = new ClassName[size];",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is anonymous array?",
    "question_hi": "एनोनिमस एरे क्या है?",
    "options_en": ["Array without name", "Array with name", "Empty array", "Null array"],
    "options_hi": ["बिना नाम का एरे", "नाम वाला एरे", "खाली एरे", "null एरे"],
    "answer_en": "Array without name",
    "answer_hi": "बिना नाम का एरे",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "Example of anonymous array?",
    "question_hi": "एनोनिमस एरे का उदाहरण?",
    "options_en": ["new int[]{1,2,3,4,5}", "int[] arr = {1,2,3}", "int arr[]", "int[] arr = new int[5]"],
    "options_hi": ["new int[]{1,2,3,4,5}", "int[] arr = {1,2,3}", "int arr[]", "int[] arr = new int[5]"],
    "answer_en": "new int[]{1,2,3,4,5}",
    "answer_hi": "new int[]{1,2,3,4,5}",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is array type at runtime?",
    "question_hi": "रनटाइम पर एरे टाइप क्या है?",
    "options_en": ["[L (for object arrays)", "I (for int arrays)", "Both A and B", "No specific type"],
    "options_hi": ["[L (ऑब्जेक्ट एरे के लिए)", "I (int एरे के लिए)", "A और B दोनों", "कोई स्पेसिफिक टाइप नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "What is ArrayIndexOutOfBoundsException?",
    "question_hi": "ArrayIndexOutOfBoundsException क्या है?",
    "options_en": ["When accessing invalid array index", "When array is null", "When array is full", "When array is empty"],
    "options_hi": ["जब इनवैलिड एरे इंडेक्स एक्सेस करते हैं", "जब एरे null होता है", "जब एरे फुल होता है", "जब एरे एम्प्टी होता है"],
    "answer_en": "When accessing invalid array index",
    "answer_hi": "जब इनवैलिड एरे इंडेक्स एक्सेस करते हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is NullPointerException for arrays?",
    "question_hi": "एरे के लिए NullPointerException क्या है?",
    "options_en": ["When array reference is null", "When index is out of bounds", "When array is empty", "When array is full"],
    "options_hi": ["जब एरे रेफरेंस null होता है", "जब इंडेक्स आउट ऑफ बाउंड होता है", "जब एरे एम्प्टी होता है", "जब एरे फुल होता है"],
    "answer_en": "When array reference is null",
    "answer_hi": "जब एरे रेफरेंस null होता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is array cloning?",
    "question_hi": "एरे क्लोनिंग क्या है?",
    "options_en": ["Creating shallow copy of array", "Creating deep copy", "Deleting array", "Sorting array"],
    "options_hi": ["एरे की शैलो कॉपी बनाना", "डीप कॉपी बनाना", "एरे डिलीट करना", "एरे सॉर्ट करना"],
    "answer_en": "Creating shallow copy of array",
    "answer_hi": "एरे की शैलो कॉपी बनाना",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "How to clone array in Java?",
    "question_hi": "जावा में एरे कैसे क्लोन करें?",
    "options_en": ["arr.clone()", "clone(arr)", "Arrays.clone(arr)", "System.clone(arr)"],
    "options_hi": ["arr.clone()", "clone(arr)", "Arrays.clone(arr)", "System.clone(arr)"],
    "answer_en": "arr.clone()",
    "answer_hi": "arr.clone()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is Arrays class in Java?",
    "question_hi": "जावा में Arrays क्लास क्या है?",
    "options_en": ["Utility class for array operations", "Array data structure", "Array type", "Array interface"],
    "options_hi": ["एरे ऑपरेशन्स के लिए यूटिलिटी क्लास", "एरे डेटा स्ट्रक्चर", "एरे टाइप", "एरे इंटरफेस"],
    "answer_en": "Utility class for array operations",
    "answer_hi": "एरे ऑपरेशन्स के लिए यूटिलिटी क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is Arrays.asList() method?",
    "question_hi": "Arrays.asList() मेथड क्या है?",
    "options_en": ["Converts array to list", "Converts list to array", "Sorts array", "Searches array"],
    "options_hi": ["एरे को लिस्ट में कन्वर्ट करता है", "लिस्ट को एरे में कन्वर्ट करता है", "एरे सॉर्ट करता है", "एरे सर्च करता है"],
    "answer_en": "Converts array to list",
    "answer_hi": "एरे को लिस्ट में कन्वर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is Arrays.stream() method?",
    "question_hi": "Arrays.stream() मेथड क्या है?",
    "options_en": ["Converts array to stream", "Converts stream to array", "Filters array", "Maps array"],
    "options_hi": ["एरे को स्ट्रीम में कन्वर्ट करता है", "स्ट्रीम को एरे में कन्वर्ट करता है", "एरे फिल्टर करता है", "एरे मैप करता है"],
    "answer_en": "Converts array to stream",
    "answer_hi": "एरे को स्ट्रीम में कन्वर्ट करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is varargs parameter?",
    "question_hi": "varargs पैरामीटर क्या है?",
    "options_en": ["Variable number of arguments", "Fixed arguments", "Optional arguments", "Required arguments"],
    "options_hi": ["वेरिएबल नंबर ऑफ आर्गुमेंट्स", "फिक्स्ड आर्गुमेंट्स", "ऑप्शनल आर्गुमेंट्स", "रिक्वायर्ड आर्गुमेंट्स"],
    "answer_en": "Variable number of arguments",
    "answer_hi": "वेरिएबल नंबर ऑफ आर्गुमेंट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "How to use varargs in method?",
    "question_hi": "मेथड में varargs कैसे उपयोग करें?",
    "options_en": ["methodName(Type... variableName)", "methodName(Type[] variableName)", "Both A and B", "methodName(Type variableName...)"],
    "options_hi": ["methodName(Type... variableName)", "methodName(Type[] variableName)", "A और B दोनों", "methodName(Type variableName...)"],
    "answer_en": "methodName(Type... variableName)",
    "answer_hi": "methodName(Type... variableName)",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "What is main method parameter String[] args?",
    "question_hi": "main मेथड पैरामीटर String[] args क्या है?",
    "options_en": ["Command line arguments array", "Method arguments", "Class arguments", "Program arguments"],
    "options_hi": ["कमांड लाइन आर्गुमेंट्स एरे", "मेथड आर्गुमेंट्स", "क्लास आर्गुमेंट्स", "प्रोग्राम आर्गुमेंट्स"],
    "answer_en": "Command line arguments array",
    "answer_hi": "कमांड लाइन आर्गुमेंट्स एरे",
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