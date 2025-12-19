 const questions=[
  {
    "num": 1,
    "question_en": "What does the `var` keyword do in JavaScript?",
    "question_hi": "`var` keyword JavaScript में क्या करता है?",
    "options": {
      "a": "Declares a variable",
      "b": "Creates a function",
      "c": "Creates an array",
      "d": "Declares a constant"
    },
    "answer": "a"
  },
  {
    "num": 2,
    "question_en": "Which symbol is used for comments in JavaScript?",
    "question_hi": "JavaScript में comment के लिए कौन सा symbol use होता है?",
    "options": {
      "a": "//",
      "b": "##",
      "c": "**",
      "d": "\\\\"
    },
    "answer": "a"
  },
  {
    "num": 3,
    "question_en": "Which method is used to print data in the console?",
    "question_hi": "Console में data print करने के लिए कौन सी method use होती है?",
    "options": {
      "a": "console.log()",
      "b": "print()",
      "c": "display()",
      "d": "show()"
    },
    "answer": "a"
  },
  {
    "num": 4,
    "question_en": "Which keyword declares a block-scoped variable?",
    "question_hi": "Block-scoped variable declare करने के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "var",
      "b": "let",
      "c": "class",
      "d": "object"
    },
    "answer": "b"
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to define a constant variable?",
    "question_hi": "Constant variable define करने के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "let",
      "b": "const",
      "c": "var",
      "d": "static"
    },
    "answer": "b"
  },
  {
    "num": 6,
    "question_en": "Which data type is used for true/false values?",
    "question_hi": "True/False value के लिए कौन सा data type होता है?",
    "options": {
      "a": "String",
      "b": "Boolean",
      "c": "Number",
      "d": "Object"
    },
    "answer": "b"
  },
  {
    "num": 7,
    "question_en": "Which operator is used for addition?",
    "question_hi": "Addition के लिए कौन सा operator use होता है?",
    "options": {
      "a": "+",
      "b": "-",
      "c": "*",
      "d": "/"
    },
    "answer": "a"
  },
  {
    "num": 8,
    "question_en": "Which operator checks both value and type?",
    "question_hi": "कौन सा operator value और type दोनों compare करता है?",
    "options": {
      "a": "==",
      "b": "===",
      "c": "<=",
      "d": "!="
    },
    "answer": "b"
  },
  {
    "num": 9,
    "question_en": "Which function converts a string to a number?",
    "question_hi": "String को number में convert करने के लिए कौन सी function use होती है?",
    "options": {
      "a": "Number()",
      "b": "Text()",
      "c": "Convert()",
      "d": "Parse()"
    },
    "answer": "a"
  },
  {
    "num": 10,
    "question_en": "Which method removes the last element of an array?",
    "question_hi": "Array का last element हटाने के लिए कौन सी method use होती है?",
    "options": {
      "a": "push()",
      "b": "pop()",
      "c": "shift()",
      "d": "remove()"
    },
    "answer": "b"
  },
  
  {
    "num": 11,
    "question_en": "Which method adds an element at the end of an array?",
    "question_hi": "Array के end में element add करने के लिए कौन सी method use होती है?",
    "options": {
      "a": "push()",
      "b": "pop()",
      "c": "shift()",
      "d": "slice()"
    },
    "answer": "a"
  },
  {
    "num": 12,
    "question_en": "Which method removes the first element from an array?",
    "question_hi": "Array का first element हटाने के लिए कौन सी method use होती है?",
    "options": {
      "a": "shift()",
      "b": "pop()",
      "c": "push()",
      "d": "reverse()"
    },
    "answer": "a"
  },
  {
    "num": 13,
    "question_en": "What is the default value of an uninitialized variable?",
    "question_hi": "Uninitialized variable का default value क्या होता है?",
    "options": {
      "a": "null",
      "b": "undefined",
      "c": "0",
      "d": "false"
    },
    "answer": "b"
  },
  {
    "num": 14,
    "question_en": "Which built-in object represents dates and times?",
    "question_hi": "Dates और time को represent करने वाला built-in object कौन सा है?",
    "options": {
      "a": "Math",
      "b": "Date",
      "c": "Time",
      "d": "Calendar"
    },
    "answer": "b"
  },
  {
    "num": 15,
    "question_en": "Which loop runs at least once?",
    "question_hi": "कौन सा loop कम से कम एक बार execute होता है?",
    "options": {
      "a": "for",
      "b": "while",
      "c": "do...while",
      "d": "forEach"
    },
    "answer": "c"
  },
  {
    "num": 16,
    "question_en": "Which method is used to convert JSON data to JavaScript object?",
    "question_hi": "JSON data को JavaScript object में convert करने के लिए कौन सी method use होती है?",
    "options": {
      "a": "JSON.parse()",
      "b": "JSON.read()",
      "c": "JSON.convert()",
      "d": "JSON.object()"
    },
    "answer": "a"
  },
  {
    "num": 17,
    "question_en": "Which event is triggered when a button is clicked?",
    "question_hi": "Button click होने पर कौन सा event trigger होता है?",
    "options": {
      "a": "keypress",
      "b": "mouseover",
      "c": "click",
      "d": "input"
    },
    "answer": "c"
  },
  {
    "num": 18,
    "question_en": "What is the full form of DOM?",
    "question_hi": "DOM का पूरा नाम क्या है?",
    "options": {
      "a": "Document Object Model",
      "b": "Data Object Method",
      "c": "Document Order Model",
      "d": "Dynamic Object Module"
    },
    "answer": "a"
  },
  {
    "num": 19,
    "question_en": "Which method selects an element by ID?",
    "question_hi": "ID से element select करने के लिए कौन सी method use होती है?",
    "options": {
      "a": "querySelector()",
      "b": "getElementById()",
      "c": "getElementByClass()",
      "d": "findElement()"
    },
    "answer": "b"
  },
  {
    "num": 20,
    "question_en": "Which method is used to delay execution?",
    "question_hi": "Execution delay करने के लिए कौन सी method use होती है?",
    "options": {
      "a": "setInterval()",
      "b": "wait()",
      "c": "setTimeout()",
      "d": "pause()"
    },
    "answer": "c"
  },
  
  {
    "num": 21,
    "question_en": "Which keyword is used to write a function?",
    "question_hi": "Function declare करने के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "func",
      "b": "method",
      "c": "function",
      "d": "call"
    },
    "answer": "c"
  },
  {
    "num": 22,
    "question_en": "Which method joins array elements into a single string?",
    "question_hi": "Array elements को single string में convert करने के लिए कौन सी method use होती है?",
    "options": {
      "a": "concat()",
      "b": "join()",
      "c": "slice()",
      "d": "map()"
    },
    "answer": "b"
  },
  {
    "num": 23,
    "question_en": "Which loop is used to iterate over array elements?",
    "question_hi": "Array elements iterate करने के लिए कौन सा loop use होता है?",
    "options": {
      "a": "forEach()",
      "b": "do-while",
      "c": "switch-case",
      "d": "if-else"
    },
    "answer": "a"
  },
  {
    "num": 24,
    "question_en": "What does NaN stand for?",
    "question_hi": "NaN का मतलब क्या है?",
    "options": {
      "a": "Not a Number",
      "b": "New Allocation Node",
      "c": "Next Available Number",
      "d": "Not a Name"
    },
    "answer": "a"
  },
  {
    "num": 25,
    "question_en": "Which keyword handles exceptions?",
    "question_hi": "Exception handling के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "error",
      "b": "try",
      "c": "throw",
      "d": "catch"
    },
    "answer": "b"
  },
  {
    "num": 26,
    "question_en": "Which keyword is used to catch an error?",
    "question_hi": "Error catch करने के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "catch",
      "b": "handle",
      "c": "error",
      "d": "exception"
    },
    "answer": "a"
  },
  {
    "num": 27,
    "question_en": "Which keyword creates a class?",
    "question_hi": "JavaScript में class बनाने के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "class",
      "b": "object",
      "c": "new",
      "d": "method"
    },
    "answer": "a"
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'this' keyword?",
    "question_hi": "'this' keyword का use किस लिए होता है?",
    "options": {
      "a": "Current object refer करने के लिए",
      "b": "Loop बनाने के लिए",
      "c": "Variable declare करने के लिए",
      "d": "Array बनाने के लिए"
    },
    "answer": "a"
  },
  {
    "num": 29,
    "question_en": "Which method converts an object to JSON?",
    "question_hi": "Object को JSON में convert करने के लिए कौन सी method use होती है?",
    "options": {
      "a": "JSON.convert()",
      "b": "JSON.stringify()",
      "c": "JSON.object()",
      "d": "object.JSON()"
    },
    "answer": "b"
  },
  {
    "num": 30,
    "question_en": "Which operator is used for logical AND?",
    "question_hi": "Logical AND के लिए कौन सा operator use होता है?",
    "options": {
      "a": "||",
      "b": "&&",
      "c": "==",
      "d": "++"
    },
    "answer": "b"
  },

  {
    "num": 31,
    "question_en": "Which keyword is used to import a module in ES6?",
    "question_hi": "ES6 में module import करने के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "require",
      "b": "import",
      "c": "include",
      "d": "use"
    },
    "answer": "b"
  },
  {
    "num": 32,
    "question_en": "Which operator is used for string concatenation?",
    "question_hi": "String concatenate करने के लिए कौन सा operator use होता है?",
    "options": {
      "a": "*",
      "b": "&",
      "c": "+",
      "d": "%"
    },
    "answer": "c"
  },
  {
    "num": 33,
    "question_en": "Which method repeats a string?",
    "question_hi": "String को repeat करने के लिए कौन सी method use होती है?",
    "options": {
      "a": "repeat()",
      "b": "copy()",
      "c": "duplicate()",
      "d": "loop()"
    },
    "answer": "a"
  },
  {
    "num": 34,
    "question_en": "Which function returns the largest number?",
    "question_hi": "Maximum number find करने के लिए कौन सा function use होता है?",
    "options": {
      "a": "Math.max()",
      "b": "Math.high()",
      "c": "Math.top()",
      "d": "max()"
    },
    "answer": "a"
  },
  {
    "num": 35,
    "question_en": "Which type of programming does JavaScript support?",
    "question_hi": "JavaScript किस type की programming support करता है?",
    "options": {
      "a": "Object Oriented",
      "b": "Functional",
      "c": "Both A and B",
      "d": "None"
    },
    "answer": "c"
  },
  {
    "num": 36,
    "question_en": "Which function stops repeated execution of setInterval?",
    "question_hi": "setInterval को stop करने के लिए कौन सा function use होता है?",
    "options": {
      "a": "stop()",
      "b": "clearInterval()",
      "c": "pause()",
      "d": "reset()"
    },
    "answer": "b"
  },
  {
    "num": 37,
    "question_en": "Which keyword is used before a function that returns a promise?",
    "question_hi": "Promise return करने वाले function से पहले कौन सा keyword आता है?",
    "options": {
      "a": "await",
      "b": "sync",
      "c": "async",
      "d": "delay"
    },
    "answer": "c"
  },
  {
    "num": 38,
    "question_en": "Which keyword pauses execution until promise resolves?",
    "question_hi": "Promise resolve होने तक execution रोकने के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "wait",
      "b": "async",
      "c": "sleep",
      "d": "await"
    },
    "answer": "d"
  },
  {
    "num": 39,
    "question_en": "Which Web API is used to store data permanently?",
    "question_hi": "Browser में permanent data store करने के लिए कौन सा storage use होता है?",
    "options": {
      "a": "sessionStorage",
      "b": "localStorage",
      "c": "cookieStorage",
      "d": "tempStorage"
    },
    "answer": "b"
  },
  {
    "num": 40,
    "question_en": "Which keyword is used to create an object instance from a class?",
    "question_hi": "Class से object बनाने के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "create",
      "b": "object",
      "c": "new",
      "d": "class"
    },
    "answer": "c"
  },

  {
    "num": 41,
    "question_en": "Which method adds new properties to an object?",
    "question_hi": "Object में नई property add करने के लिए क्या use होता है?",
    "options": {
      "a": "dot notation",
      "b": "array notation",
      "c": "map notation",
      "d": "join()"
    },
    "answer": "a"
  },
  {
    "num": 42,
    "question_en": "Which method converts a number to a string?",
    "question_hi": "Number को string में convert करने के लिए कौन सी method use होती है?",
    "options": {
      "a": "toString()",
      "b": "stringify()",
      "c": "convert()",
      "d": "parse()"
    },
    "answer": "a"
  },
  {
    "num": 43,
    "question_en": "Which keyword prevents value modification?",
    "question_hi": "Value modify होने से रोकने के लिए कौन सा keyword use होता है?",
    "options": {
      "a": "constant",
      "b": "static",
      "c": "final",
      "d": "const"
    },
    "answer": "d"
  },
  {
    "num": 44,
    "question_en": "Which event occurs when a key is pressed?",
    "question_hi": "Key press होने पर कौन सा event trigger होता है?",
    "options": {
      "a": "keyup",
      "b": "keydown",
      "c": "keypress",
      "d": "input"
    },
    "answer": "c"
  },
  {
    "num": 45,
    "question_en": "Which operator is used for OR operation?",
    "question_hi": "OR operation के लिए कौन सा operator use होता है?",
    "options": {
      "a": "&&",
      "b": "||",
      "c": "**",
      "d": "--"
    },
    "answer": "b"
  },
  {
    "num": 46,
    "question_en": "Which operator increments a number?",
    "question_hi": "Number increment करने के लिए कौन सा operator use होता है?",
    "options": {
      "a": "--",
      "b": "++",
      "c": "//",
      "d": "**"
    },
    "answer": "b"
  },
  {
    "num": 47,
    "question_en": "Which statement exits a loop?",
    "question_hi": "Loop से बाहर निकलने के लिए कौन सा statement use होता है?",
    "options": {
      "a": "exit",
      "b": "break",
      "c": "stop",
      "d": "return"
    },
    "answer": "b"
  },
  {
    "num": 48,
    "question_en": "Which operator is used for exponent?",
    "question_hi": "Exponent के लिए कौन सा operator use होता है?",
    "options": {
      "a": "**",
      "b": "%%",
      "c": "//",
      "d": "++"
    },
    "answer": "a"
  },
  {
    "num": 49,
    "question_en": "Which built-in function alerts a message?",
    "question_hi": "Message show करने के लिए कौन सी function use होती है?",
    "options": {
      "a": "alert()",
      "b": "show()",
      "c": "dialog()",
      "d": "notify()"
    },
    "answer": "a"
  },
  {
    "num": 50,
    "question_en": "JavaScript runs on which engine in Chrome?",
    "question_hi": "Chrome browser में JavaScript कौन से engine पर चलता है?",
    "options": {
      "a": "V8 Engine",
      "b": "SpiderMonkey",
      "c": "Rhino",
      "d": "Quantum"
    },
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
