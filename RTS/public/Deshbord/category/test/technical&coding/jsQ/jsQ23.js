 const questions=[
  {
    "num": 1,
    "question_en": "Which statement is used to stop a loop immediately in JavaScript?",
    "question_hi": "JavaScript में किसी loop को तुरंत रोकने के लिए कौन सा statement उपयोग होता है?",
    "options_en": ["exit", "stop", "break", "quit"],
    "options_hi": ["exit", "stop", "break", "quit"],
    "answer": "break"
  },
  {
    "num": 2,
    "question_en": "Which function converts a string to an integer?",
    "question_hi": "कौन सा function string को integer में convert करता है?",
    "options_en": ["Number()", "parseInt()", "stringToInt()", "Int()"],
    "options_hi": ["Number()", "parseInt()", "stringToInt()", "Int()"],
    "answer": "parseInt()"
  },
  {
    "num": 3,
    "question_en": "Which method returns the character at a given index?",
    "question_hi": "कौन सा method दिए गए index का character return करता है?",
    "options_en": ["charAt()", "char()", "getChar()", "index()"],
    "options_hi": ["charAt()", "char()", "getChar()", "index()"],
    "answer": "charAt()"
  },
  {
    "num": 4,
    "question_en": "Which method removes specific elements from an array?",
    "question_hi": "Array से specific elements हटाने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["splice()", "slice()", "cut()", "remove()"],
    "options_hi": ["splice()", "slice()", "cut()", "remove()"],
    "answer": "splice()"
  },
  {
    "num": 5,
    "question_en": "Which keyword creates an immutable variable?",
    "question_hi": "कौन सा keyword एक immutable variable बनाता है?",
    "options_en": ["let", "var", "const", "static"],
    "options_hi": ["let", "var", "const", "static"],
    "answer": "const"
  },
  {
    "num": 6,
    "question_en": "What is the result of typeof NaN?",
    "question_hi": "typeof NaN का result क्या होता है?",
    "options_en": ["number", "NaN", "undefined", "object"],
    "options_hi": ["number", "NaN", "undefined", "object"],
    "answer": "number"
  },
  {
    "num": 7,
    "question_en": "What do we call a function defined inside another function?",
    "question_hi": "किसी function के अंदर परिभाषित function को क्या कहते हैं?",
    "options_en": ["Nested Function", "Multiple Function", "Linked Function", "Inner Function"],
    "options_hi": ["Nested Function", "Multiple Function", "Linked Function", "Inner Function"],
    "answer": "Nested Function"
  },
  {
    "num": 8,
    "question_en": "Which operator is used to join strings?",
    "question_hi": "दो strings को जोड़ने के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["+", "&", "++", "#"],
    "options_hi": ["+", "&", "++", "#"],
    "answer": "+"
  },
  {
    "num": 9,
    "question_en": "Which event occurs when web page finishes loading?",
    "question_hi": "जब webpage पूरी तरह load हो जाता है, तब कौन सा event होता है?",
    "options_en": ["window.start", "window.ready", "window.onload", "window.init"],
    "options_hi": ["window.start", "window.ready", "window.onload", "window.init"],
    "answer": "window.onload"
  },
  {
    "num": 10,
    "question_en": "Which method converts a string to lowercase?",
    "question_hi": "String को lowercase में बदलने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["small()", "lowercase()", "toLowerCase()", "downCase()"],
    "options_hi": ["small()", "lowercase()", "toLowerCase()", "downCase()"],
    "answer": "toLowerCase()"
  },

  {
    "num": 11,
    "question_en": "Which function checks if a value is finite?",
    "question_hi": "कौन सा function यह जाँचता है कि value finite है या नहीं?",
    "options_en": ["isFinite()", "isLimit()", "checkFinite()", "finite()"],
    "options_hi": ["isFinite()", "isLimit()", "checkFinite()", "finite()"],
    "answer": "isFinite()"
  },
  {
    "num": 12,
    "question_en": "Which method repeats a string?",
    "question_hi": "कौन सा method string को repeat करता है?",
    "options_en": ["repeat()", "copy()", "clone()", "multi()"],
    "options_hi": ["repeat()", "copy()", "clone()", "multi()"],
    "answer": "repeat()"
  },
  {
    "num": 13,
    "question_en": "Which operator is used for optional chaining?",
    "question_hi": "Optional chaining के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["??", "?.", "::", "//"],
    "options_hi": ["??", "?.", "::", "//"],
    "answer": "?."
  },
  {
    "num": 14,
    "question_en": "Which method removes spaces only from the start of a string?",
    "question_hi": "String की शुरुआत से spaces हटाने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["stripStart()", "trimStart()", "startTrim()", "cutStart()"],
    "options_hi": ["stripStart()", "trimStart()", "startTrim()", "cutStart()"],
    "answer": "trimStart()"
  },
  {
    "num": 15,
    "question_en": "Which method removes spaces only from the end of a string?",
    "question_hi": "String के अंत से spaces हटाने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["trimEnd()", "endTrim()", "cutEnd()", "stripEnd()"],
    "options_hi": ["trimEnd()", "endTrim()", "cutEnd()", "stripEnd()"],
    "answer": "trimEnd()"
  },

  {
    "num": 16,
    "question_en": "Which method returns true if all elements satisfy a condition?",
    "question_hi": "यदि array के सभी elements एक condition को satisfy करते हैं तो कौन सा method true return करता है?",
    "options_en": ["every()", "all()", "checkAll()", "validate()"],
    "options_hi": ["every()", "all()", "checkAll()", "validate()"],
    "answer": "every()"
  },
  {
    "num": 17,
    "question_en": "Which method returns true if at least one element satisfies a condition?",
    "question_hi": "यदि array का कम से कम एक element condition को satisfy करता है तो कौन सा method true return करता है?",
    "options_en": ["exists()", "some()", "any()", "one()"],
    "options_hi": ["exists()", "some()", "any()", "one()"],
    "answer": "some()"
  },

  {
    "num": 18,
    "question_en": "Which Math method returns the nearest lower integer?",
    "question_hi": "कौन सा Math method किसी संख्या का निकटतम छोटा पूर्णांक return करता है?",
    "options_en": ["Math.ceil()", "Math.floor()", "Math.round()", "Math.low()"],
    "options_hi": ["Math.ceil()", "Math.floor()", "Math.round()", "Math.low()"],
    "answer": "Math.floor()"
  },
  {
    "num": 19,
    "question_en": "Which Math method returns the nearest higher integer?",
    "question_hi": "कौन सा Math method किसी संख्या का निकटतम बड़ा पूर्णांक return करता है?",
    "options_en": ["Math.ceil()", "Math.up()", "Math.top()", "Math.high()"],
    "options_hi": ["Math.ceil()", "Math.up()", "Math.top()", "Math.high()"],
    "answer": "Math.ceil()"
  },

  {
    "num": 20,
    "question_en": "Which method converts array-like objects to arrays?",
    "question_hi": "कौन सा method array-like objects को array में convert करता है?",
    "options_en": ["Array.from()", "Array.convert()", "toArray()", "makeArray()"],
    "options_hi": ["Array.from()", "Array.convert()", "toArray()", "makeArray()"],
    "answer": "Array.from()"
  },

  {
    "num": 21,
    "question_en": "Which method checks if a value is an array?",
    "question_hi": "कौन सा method यह जाँचता है कि value array है या नहीं?",
    "options_en": ["isArray()", "Array.check()", "Array.isArray()", "checkArray()"],
    "options_hi": ["isArray()", "Array.check()", "Array.isArray()", "checkArray()"],
    "answer": "Array.isArray()"
  },

  {
    "num": 22,
    "question_en": "Which array method reverses the order of elements?",
    "question_hi": "कौन सा array method elements के क्रम को उल्टा कर देता है?",
    "options_en": ["reverse()", "flip()", "turn()", "invert()"],
    "options_hi": ["reverse()", "flip()", "turn()", "invert()"],
    "answer": "reverse()"
  },

  {
    "num": 23,
    "question_en": "Which Math method returns the absolute value?",
    "question_hi": "कौन सा Math method absolute value return करता है?",
    "options_en": ["Math.abs()", "Math.absolute()", "Math.value()", "Math.mod()"],
    "options_hi": ["Math.abs()", "Math.absolute()", "Math.value()", "Math.mod()"],
    "answer": "Math.abs()"
  },

  {
    "num": 24,
    "question_en": "Which property returns the current page URL?",
    "question_hi": "कौन सी property वर्तमान webpage का URL return करती है?",
    "options_en": ["window.url", "document.url", "location.href", "page.href"],
    "options_hi": ["window.url", "document.url", "location.href", "page.href"],
    "answer": "location.href"
  },

  {
    "num": 25,
    "question_en": "Which event occurs when input value changes?",
    "question_hi": "जब input की value बदलती है, तब कौन सा event होता है?",
    "options_en": ["oninput", "onchange", "onclick", "onmodify"],
    "options_hi": ["oninput", "onchange", "onclick", "onmodify"],
    "answer": "onchange"
  },

  {
    "num": 26,
    "question_en": "Which method checks if a string contains another string?",
    "question_hi": "कौन सा method जाँचता है कि string में दूसरी string शामिल है या नहीं?",
    "options_en": ["match()", "contains()", "includes()", "has()"],
    "options_hi": ["match()", "contains()", "includes()", "has()"],
    "answer": "includes()"
  },

  {
    "num": 27,
    "question_en": "Which loop is best for iterating over arrays?",
    "question_hi": "Arrays को iterate करने के लिए कौन सा loop सबसे उपयुक्त है?",
    "options_en": ["for", "for-in", "for-of", "while"],
    "options_hi": ["for", "for-in", "for-of", "while"],
    "answer": "for-of"
  },

  {
    "num": 28,
    "question_en": "Which method converts a Date object to readable string?",
    "question_hi": "Date object को readable string में बदलने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["toDate()", "toReadable()", "toString()", "toDateString()"],
    "options_hi": ["toDate()", "toReadable()", "toString()", "toDateString()"],
    "answer": "toDateString()"
  },

  {
    "num": 29,
    "question_en": "Which function displays a message box?",
    "question_hi": "कौन सा function message box दिखाता है?",
    "options_en": ["popup()", "notice()", "alert()", "show()"],
    "options_hi": ["popup()", "notice()", "alert()", "show()"],
    "answer": "alert()"
  },

  {
    "num": 30,
    "question_en": "Which method iterates through array elements?",
    "question_hi": "कौन सा method array elements को iterate करता है?",
    "options_en": ["forEach()", "repeat()", "loop()", "forAll()"],
    "options_hi": ["forEach()", "repeat()", "loop()", "forAll()"],
    "answer": "forEach()"
  },

  {
    "num": 31,
    "question_en": "Which operator checks value and type equality?",
    "question_hi": "कौन सा operator value और type दोनों को बराबर होने की जाँच करता है?",
    "options_en": ["!==", "!=", "===", "==!"],
    "options_hi": ["!==", "!=", "===", "==!"],
    "answer": "==="
  },

  {
    "num": 32,
    "question_en": "What does JSON.parse return?",
    "question_hi": "JSON.parse क्या return करता है?",
    "options_en": ["string", "number", "object", "array"],
    "options_hi": ["string", "number", "object", "array"],
    "answer": "object"
  },

  {
    "num": 33,
    "question_en": "Which method joins array elements with separator?",
    "question_hi": "कौन सा method array elements को जोड़कर एक string बनाता है?",
    "options_en": ["join()", "link()", "combine()", "merge()"],
    "options_hi": ["join()", "link()", "combine()", "merge()"],
    "answer": "join()"
  },

  {
    "num": 34,
    "question_en": "Which function repeats code continuously with interval?",
    "question_hi": "कौन सा function interval के साथ code को दोहराता है?",
    "options_en": ["setInterval()", "setTimeout()", "loop()", "repeat()"],
    "options_hi": ["setInterval()", "setTimeout()", "loop()", "repeat()"],
    "answer": "setInterval()"
  },

  {
    "num": 35,
    "question_en": "Which keyword declares a function-scoped variable?",
    "question_hi": "कौन सा keyword function-scoped variable घोषित करता है?",
    "options_en": ["let", "var", "const", "define"],
    "options_hi": ["let", "var", "const", "define"],
    "answer": "var"
  },

  {
    "num": 36,
    "question_en": "Which error represents incorrect syntax?",
    "question_hi": "कौन सी error गलत syntax को दर्शाती है?",
    "options_en": ["TypeError", "ReferenceError", "SyntaxError", "ValueError"],
    "options_hi": ["TypeError", "ReferenceError", "SyntaxError", "ValueError"],
    "answer": "SyntaxError"
  },

  {
    "num": 37,
    "question_en": "Which keyword manually throws an error?",
    "question_hi": "कौन सा keyword manually error फेंकता है?",
    "options_en": ["throw", "error", "raise", "fail"],
    "options_hi": ["throw", "error", "raise", "fail"],
    "answer": "throw"
  },

  {
    "num": 38,
    "question_en": "Which method returns current timestamp?",
    "question_hi": "कौन सा method current timestamp (milliseconds) return करता है?",
    "options_en": ["Date.milli()", "Date.time()", "Date.now()", "Date.ms()"],
    "options_hi": ["Date.milli()", "Date.time()", "Date.now()", "Date.ms()"],
    "answer": "Date.now()"
  },

  {
    "num": 39,
    "question_en": "Which operator spreads elements of arrays or objects?",
    "question_hi": "कौन सा operator arrays या objects के elements को spread करता है?",
    "options_en": ["...", "<<", "spread", "merge"],
    "options_hi": ["...", "<<", "spread", "merge"],
    "answer": "..."
  },

  {
    "num": 40,
    "question_en": "Which Math method returns the square root?",
    "question_hi": "कौन सा Math method square root return करता है?",
    "options_en": ["Math.root()", "Math.sqrt()", "Math.square()", "Math.pow()"],
    "options_hi": ["Math.root()", "Math.sqrt()", "Math.square()", "Math.pow()"],
    "answer": "Math.sqrt()"
  },

  {
    "num": 41,
    "question_en": "Which array method returns index of matched condition?",
    "question_hi": "कौन सा array method condition true होने वाले element का index return करता है?",
    "options_en": ["find()", "indexOf()", "findIndex()", "search()"],
    "options_hi": ["find()", "indexOf()", "findIndex()", "search()"],
    "answer": "findIndex()"
  },

  {
    "num": 42,
    "question_en": "What does a function return if no return statement is used?",
    "question_hi": "अगर function में return statement नहीं हो तो क्या return होता है?",
    "options_en": ["null", "0", "undefined", "false"],
    "options_hi": ["null", "0", "undefined", "false"],
    "answer": "undefined"
  },

  {
    "num": 43,
    "question_en": "Which operator is used for nullish coalescing?",
    "question_hi": "Nullish coalescing के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["||", "??", "&&", "::"],
    "options_hi": ["||", "??", "&&", "::"],
    "answer": "??"
  },

  {
    "num": 44,
    "question_en": "Which keyword is used to define a class?",
    "question_hi": "Class बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class", "struct", "object", "defineClass"],
    "options_hi": ["class", "struct", "object", "defineClass"],
    "answer": "class"
  },

  {
    "num": 45,
    "question_en": "Which function converts any value into a number?",
    "question_hi": "कौन सा function किसी भी value को number में convert करता है?",
    "options_en": ["toNumber()", "convert()", "Number()", "parse()"],
    "options_hi": ["toNumber()", "convert()", "Number()", "parse()"],
    "answer": "Number()"
  },

  {
    "num": 46,
    "question_en": "Which property returns number of characters in a string?",
    "question_hi": "कौन सी property string में characters की संख्या बताती है?",
    "options_en": ["count", "size", "length", "chars"],
    "options_hi": ["count", "size", "length", "chars"],
    "answer": "length"
  },

  {
    "num": 47,
    "question_en": "Which operator represents logical NOT?",
    "question_hi": "Logical NOT को दर्शाने वाला कौन सा operator है?",
    "options_en": ["!", "~", "not", "--"],
    "options_hi": ["!", "~", "not", "--"],
    "answer": "!"
  },

  {
    "num": 48,
    "question_en": "Which method returns substring between two indices?",
    "question_hi": "कौन सा method दो indices के बीच substring return करता है?",
    "options_en": ["cut()", "split()", "substring()", "slice()"],
    "options_hi": ["cut()", "split()", "substring()", "slice()"],
    "answer": "substring()"
  },

  {
    "num": 49,
    "question_en": "Which syntax defines an arrow function?",
    "question_hi": "Arrow function की सही syntax कौन सी है?",
    "options_en": ["function=>{}", "()=>{}", "arrow()", "{=>}"],
    "options_hi": ["function=>{}", "()=>{}", "arrow()", "{=>}"],
    "answer": "()=>{}"
  },

  {
    "num": 50,
    "question_en": "Which Math method returns the largest number?",
    "question_hi": "कौन सा Math method सबसे बड़ा number return करता है?",
    "options_en": ["Math.max()", "Math.big()", "Math.top()", "Math.large()"],
    "options_hi": ["Math.max()", "Math.big()", "Math.top()", "Math.large()"],
    "answer": "Math.max()"
  }
]





let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


// ///////////////////////////////////////