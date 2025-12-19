const questions=[
  {
    "num": 1,
    "question_en": "What is JavaScript primarily used for?",
    "question_hi": "JavaScript का मुख्य उपयोग किसके लिए किया जाता है?",
    "options": { "a": "Styling Webpages", "b": "Adding Interactivity", "c": "Database Management", "d": "Operating System Development" },
    "answer": "b"
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to declare a variable in JavaScript?",
    "question_hi": "JavaScript में variable declare करने के लिए कौन सा keyword उपयोग होता है?",
    "options": { "a": "var", "b": "int", "c": "string", "d": "char" },
    "answer": "a"
  },
  {
    "num": 3,
    "question_en": "Which symbol is used for single-line comments in JavaScript?",
    "question_hi": "JavaScript में single-line comment के लिए कौन सा symbol उपयोग होता है?",
    "options": { "a": "//", "b": "/* */", "c": "#", "d": "<!-- -->" },
    "answer": "a"
  },
  {
    "num": 4,
    "question_en": "Which function displays an alert message on the screen?",
    "question_hi": "कौन सा function स्क्रीन पर alert message दिखाता है?",
    "options": { "a": "console.log()", "b": "prompt()", "c": "alert()", "d": "document.write()" },
    "answer": "c"
  },
  {
    "num": 5,
    "question_en": "Which operator is used to compare values and types in JavaScript?",
    "question_hi": "JavaScript में values और types compare करने के लिए कौन सा operator उपयोग होता है?",
    "options": { "a": "==", "b": "=", "c": "===", "d": "!=" },
    "answer": "c"
  },
  {
    "num": 6,
    "question_en": "Which method is used to print output in console?",
    "question_hi": "Console में output दिखाने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "print()", "b": "console.log()", "c": "document.log()", "d": "show()" },
    "answer": "b"
  },
  {
    "num": 7,
    "question_en": "Which built-in method joins array elements into a string?",
    "question_hi": "कौन सा method array elements को string में बदलता है?",
    "options": { "a": "join()", "b": "push()", "c": "split()", "d": "concat()" },
    "answer": "a"
  },
  {
    "num": 8,
    "question_en": "What is the correct file extension for JavaScript files?",
    "question_hi": "JavaScript files के लिए सही extension क्या है?",
    "options": { "a": ".html", "b": ".js", "c": ".css", "d": ".java" },
    "answer": "b"
  },
  {
    "num": 9,
    "question_en": "Which data type is NOT available in JavaScript?",
    "question_hi": "कौन सा data type JavaScript में नहीं होता?",
    "options": { "a": "Number", "b": "Boolean", "c": "Float", "d": "String" },
    "answer": "c"
  },
  {
    "num": 10,
    "question_en": "What will `typeof null` return?",
    "question_hi": "`typeof null` क्या return करेगा?",
    "options": { "a": "object", "b": "null", "c": "undefined", "d": "string" },
    "answer": "a"
  },

  {
    "num": 11,
    "question_en": "Which method removes the last element of an array?",
    "question_hi": "कौन सा method array का आखिरी element हटाता है?",
    "options": { "a": "push()", "b": "pop()", "c": "shift()", "d": "unshift()" },
    "answer": "b"
  },
  {
    "num": 12,
    "question_en": "JavaScript is _______ language.",
    "question_hi": "JavaScript _______ language है।",
    "options": { "a": "compiled", "b": "interpreted", "c": "binary", "d": "query" },
    "answer": "b"
  },
  {
    "num": 13,
    "question_en": "Which method converts JSON string to object?",
    "question_hi": "कौन सा method JSON string को object में बदलता है?",
    "options": { "a": "JSON.parse()", "b": "JSON.stringify()", "c": "parseInt()", "d": "Object.assign()" },
    "answer": "a"
  },
  {
    "num": 14,
    "question_en": "Which loop runs at least one time even if condition is false?",
    "question_hi": "कौन सा loop condition false होने पर भी कम से कम एक बार चलता है?",
    "options": { "a": "for loop", "b": "while loop", "c": "do-while loop", "d": "foreach loop" },
    "answer": "c"
  },
  {
    "num": 15,
    "question_en": "What is DOM in JavaScript?",
    "question_hi": "JavaScript में DOM क्या है?",
    "options": { "a": "Document Object Model", "b": "Desktop Operation Module", "c": "Development Object Manager", "d": "Domain Output Method" },
    "answer": "a"
  },
  {
    "num": 16,
    "question_en": "Which keyword stops JavaScript execution?",
    "question_hi": "कौन सा keyword JavaScript execution रोकता है?",
    "options": { "a": "stop", "b": "exit", "c": "return", "d": "break" },
    "answer": "d"
  },
  {
    "num": 17,
    "question_en": "Which operator is used for exponent in JavaScript?",
    "question_hi": "JavaScript में exponent के लिए कौन सा operator उपयोग होता है?",
    "options": { "a": "^", "b": "**", "c": "exp()", "d": "%" },
    "answer": "b"
  },
  {
    "num": 18,
    "question_en": "Which method adds a new element to the end of an array?",
    "question_hi": "कौन सा method array के अंत में नया element जोड़ता है?",
    "options": { "a": "push()", "b": "pop()", "c": "shift()", "d": "sort()" },
    "answer": "a"
  },
  {
    "num": 19,
    "question_en": "Which keyword defines a function?",
    "question_hi": "Function define करने के लिए कौन सा keyword उपयोग होता है?",
    "options": { "a": "fun", "b": "method", "c": "function", "d": "define" },
    "answer": "c"
  },
  {
    "num": 20,
    "question_en": "Which function takes input from user?",
    "question_hi": "कौन सा function user से input लेता है?",
    "options": { "a": "alert()", "b": "prompt()", "c": "console.log()", "d": "input()" },
    "answer": "b"
  },

  {
    "num": 21,
    "question_en": "Which keyword is used to create a block-scope variable?",
    "question_hi": "Block-scope variable बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options": { "a": "var", "b": "let", "c": "static", "d": "dim" },
    "answer": "b"
  },
  {
    "num": 22,
    "question_en": "Which function converts string to number?",
    "question_hi": "कौन सा function string को number में बदलता है?",
    "options": { "a": "toString()", "b": "parseInt()", "c": "Number()", "d": "both b and c" },
    "answer": "d"
  },
  {
    "num": 23,
    "question_en": "What does NaN mean?",
    "question_hi": "NaN का मतलब क्या है?",
    "options": { "a": "Not a Number", "b": "New Allocation Node", "c": "Null and Negative", "d": "None Available" },
    "answer": "a"
  },
  {
    "num": 24,
    "question_en": "Which function sorts array elements?",
    "question_hi": "कौन सा function array elements को sort करता है?",
    "options": { "a": "sort()", "b": "order()", "c": "arrange()", "d": "sequence()" },
    "answer": "a"
  },
  {
    "num": 25,
    "question_en": "Which of the following is a boolean value in JavaScript?",
    "question_hi": "इनमें से JavaScript में boolean value कौन है?",
    "options": { "a": "0", "b": "1", "c": "true", "d": "number" },
    "answer": "c"
  },
  {
    "num": 26,
    "question_en": "JavaScript runs on which side?",
    "question_hi": "JavaScript किस side पर चलती है?",
    "options": { "a": "Server", "b": "Client", "c": "Both", "d": "None" },
    "answer": "c"
  },
  {
    "num": 27,
    "question_en": "Which is used to embed JavaScript in HTML?",
    "question_hi": "HTML में JavaScript embed करने के लिए क्या उपयोग होता है?",
    "options": { "a": "<script>", "b": "<js>", "c": "<code>", "d": "<javascript>" },
    "answer": "a"
  },
  {
    "num": 28,
    "question_en": "Which event occurs when a user clicks a button?",
    "question_hi": "कौन सा इवेंट तब चलता है जब यूजर बटन क्लिक करता है?",
    "options": { "a": "onpress", "b": "onchange", "c": "onclick", "d": "onhover" },
    "answer": "c"
  },
  {
    "num": 29,
    "question_en": "Which method is used to convert array to string?",
    "question_hi": "Array को string में बदलने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "join()", "b": "toString()", "c": "stringify()", "d": "both a and b" },
    "answer": "d"
  },
  {
    "num": 30,
    "question_en": "What is the output of: console.log(2 + '2')?",
    "question_hi": "console.log(2 + '2') का output क्या होगा?",
    "options": { "a": "4", "b": "22", "c": "NaN", "d": "undefined" },
    "answer": "b"
  },

  {
    "num": 31,
    "question_en": "What is a function without a name called?",
    "question_hi": "बिना नाम वाले function को क्या कहते हैं?",
    "options": { "a": "ignored function", "b": "null function", "c": "anonymous function", "d": "empty function" },
    "answer": "c"
  },
  {
    "num": 32,
    "question_en": "Which method is used to remove whitespace from string?",
    "question_hi": "String से whitespace हटाने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "trim()", "b": "remove()", "c": "cut()", "d": "slice()" },
    "answer": "a"
  },
  {
    "num": 33,
    "question_en": "Which method returns the length of a string?",
    "question_hi": "String की लंबाई बताने के लिए कौन सी property होती है?",
    "options": { "a": "size()", "b": "count()", "c": "length", "d": "length()" },
    "answer": "c"
  },
  {
    "num": 34,
    "question_en": "JavaScript arrays are:",
    "question_hi": "JavaScript की arrays कैसी होती हैं?",
    "options": { "a": "Fixed", "b": "Resizable", "c": "Immutable", "d": "None" },
    "answer": "b"
  },
  {
    "num": 35,
    "question_en": "Which operator is used for logical AND?",
    "question_hi": "Logical AND के लिए कौन सा operator उपयोग होता है?",
    "options": { "a": "&&", "b": "||", "c": "!", "d": "&" },
    "answer": "a"
  },
  {
    "num": 36,
    "question_en": "Which keyword handles error in JavaScript?",
    "question_hi": "JavaScript में errors handle करने के लिए कौन सा keyword उपयोग होता है?",
    "options": { "a": "catch", "b": "error", "c": "throw", "d": "handle" },
    "answer": "a"
  },
  {
    "num": 37,
    "question_en": "JavaScript supports which type of programming?",
    "question_hi": "JavaScript किस प्रकार की programming support करती है?",
    "options": { "a": "Object-Oriented", "b": "Functional", "c": "Event-Driven", "d": "All of the above" },
    "answer": "d"
  },
  {
    "num": 38,
    "question_en": "Which method returns part of an array?",
    "question_hi": "Array का हिस्सा लौटाने वाला method कौन सा है?",
    "options": { "a": "slice()", "b": "splice()", "c": "split()", "d": "pick()" },
    "answer": "a"
  },
  {
    "num": 39,
    "question_en": "Which operator is used for string concatenation?",
    "question_hi": "String जोड़ने के लिए कौन सा operator उपयोग होता है?",
    "options": { "a": "+", "b": "*", "c": "/", "d": "%" },
    "answer": "a"
  },
  {
    "num": 40,
    "question_en": "What does `setTimeout()` do?",
    "question_hi": "`setTimeout()` क्या करता है?",
    "options": { "a": "Repeats task forever", "b": "Executes code immediately", "c": "Executes code after delay", "d": "Stops execution" },
    "answer": "c"
  },

  {
    "num": 41,
    "question_en": "Which function repeats execution at intervals?",
    "question_hi": "कौन सा function समय-समय पर code को repeat करता है?",
    "options": { "a": "setTimeout()", "b": "setInterval()", "c": "run()", "d": "loop()" },
    "answer": "b"
  },
  {
    "num": 42,
    "question_en": "Which keyword is used to return a value in function?",
    "question_hi": "Function में value return करने के लिए कौन सा keyword उपयोग होता है?",
    "options": { "a": "exit", "b": "return", "c": "break", "d": "stop" },
    "answer": "b"
  },
  {
    "num": 43,
    "question_en": "What is an array index starting value in JavaScript?",
    "question_hi": "JavaScript में array index किस संख्या से शुरू होता है?",
    "options": { "a": "1", "b": "2", "c": "0", "d": "-1" },
    "answer": "c"
  },
  {
    "num": 44,
    "question_en": "What is the purpose of `break` in loops?",
    "question_hi": "`break` keyword का उपयोग loops में क्यों किया जाता है?",
    "options": { "a": "To repeat loop", "b": "To stop loop", "c": "To pause loop", "d": "To restart loop" },
    "answer": "b"
  },
  {
    "num": 45,
    "question_en": "Which function converts a value into a JSON string?",
    "question_hi": "कौन सा function value को JSON string में convert करता है?",
    "options": { "a": "JSON.stringify()", "b": "JSON.parse()", "c": "toJSON()", "d": "stringifyJSON()" },
    "answer": "a"
  },
  {
    "num": 46,
    "question_en": "What will be output of: Boolean('')?",
    "question_hi": "Boolean('') का output क्या होगा?",
    "options": { "a": "true", "b": "false", "c": "NaN", "d": "undefined" },
    "answer": "b"
  },
  {
    "num": 47,
    "question_en": "What is the meaning of `===` operator?",
    "question_hi": "`===` operator का मतलब क्या है?",
    "options": { "a": "Assignment", "b": "Compare value only", "c": "Compare value and type", "d": "None" },
    "answer": "c"
  },
  {
    "num": 48,
    "question_en": "Which method is used to add an element at the beginning of an array?",
    "question_hi": "Array के शुरुआत में element जोड़ने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "push()", "b": "unshift()", "c": "shift()", "d": "prepend()" },
    "answer": "b"
  },
  {
    "num": 49,
    "question_en": "Which feature allows JavaScript to run asynchronous tasks?",
    "question_hi": "JavaScript को asynchronous task चलाने की क्षमता कौन देता है?",
    "options": { "a": "Callbacks", "b": "Promises", "c": "Async/Await", "d": "All of the above" },
    "answer": "d"
  },
  {
    "num": 50,
    "question_en": "Which operator is used to check if a value exists in an array?",
    "question_hi": "Array में value मौजूद है या नहीं, यह जांचने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "includes()", "b": "every()", "c": "search()", "d": "match()" },
    "answer": "a"
  }
]





let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

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
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};
