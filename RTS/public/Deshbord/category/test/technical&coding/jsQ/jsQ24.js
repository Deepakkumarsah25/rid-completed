 const questions=[
  {
    "num": 1,
    "question_en": "Which method is used to convert JSON string into a JavaScript object?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "Object.parse()", "convertJSON()"],
    "answer": "JSON.parse()"
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to declare a block-scoped variable?",
    "options_en": ["var", "let", "const", "scope"],
    "answer": "let"
  },
  {
    "num": 3,
    "question_en": "Which symbol is used for strict equality comparison?",
    "options_en": ["==", "===", "!=", "="],
    "answer": "==="
  },
  {
    "num": 4,
    "question_en": "Which function is used to print output in the console?",
    "options_en": ["console.show()", "print()", "console.log()", "log.print()"],
    "answer": "console.log()"
  },
  {
    "num": 5,
    "question_en": "Which method adds an element at the end of an array?",
    "options_en": ["push()", "pop()", "shift()", "add()"],
    "answer": "push()"
  },
  {
    "num": 6,
    "question_en": "What is the default value of an uninitialized variable?",
    "options_en": ["null", "undefined", "0", "None"],
    "answer": "undefined"
  },
  {
    "num": 7,
    "question_en": "Which method removes the last item from an array?",
    "options_en": ["push()", "pop()", "remove()", "clear()"],
    "answer": "pop()"
  },
  {
    "num": 8,
    "question_en": "Which method converts an array into a string?",
    "options_en": ["toString()", "fromString()", "convert()", "joinString()"],
    "answer": "toString()"
  },
  {
    "num": 9,
    "question_en": "Which operator is used for exponentiation?",
    "options_en": ["^", "**", "%%", "//"],
    "answer": "**"
  },
  {
    "num": 10,
    "question_en": "Which loop runs at least once even if the condition is false?",
    "options_en": ["for", "while", "do...while", "foreach"],
    "answer": "do...while"
  },
  {
    "num": 11,
    "question_en": "Which keyword is used to create a constant?",
    "options_en": ["var", "let", "const", "constant"],
    "answer": "const"
  },
  {
    "num": 12,
    "question_en": "Which method is used to check array length?",
    "options_en": ["size()", "length", "count()", "total()"],
    "answer": "length"
  },
  {
    "num": 13,
    "question_en": "Which method is used to merge two arrays?",
    "options_en": ["join()", "concat()", "merge()", "pushAll()"],
    "answer": "concat()"
  },
  {
    "num": 14,
    "question_en": "What does DOM stand for?",
    "options_en": ["Document Object Model", "Data Object Model", "Direct Object Maker", "Document Operation Method"],
    "answer": "Document Object Model"
  },
  {
    "num": 15,
    "question_en": "Which method is used to select an element by id?",
    "options_en": ["getElementById()", "query()", "selectId()", "findId()"],
    "answer": "getElementById()"
  },
  {
    "num": 16,
    "question_en": "Which keyword stops further code execution?",
    "options_en": ["stop", "break", "halt", "exit"],
    "answer": "break"
  },
  {
    "num": 17,
    "question_en": "Which event runs when a button is clicked?",
    "options_en": ["onload", "onclick", "onchange", "onpress"],
    "answer": "onclick"
  },
  {
    "num": 18,
    "question_en": "Which symbol is used for logical AND?",
    "options_en": ["&", "&&", "and", "||"],
    "answer": "&&"
  },
  {
    "num": 19,
    "question_en": "Which symbol is used for logical OR?",
    "options_en": ["||", "or", "|", "%%"],
    "answer": "||"
  },
  {
    "num": 20,
    "question_en": "Which method converts a number to a string?",
    "options_en": ["stringify()", "toString()", "convert()", "change()"],
    "answer": "toString()"
  },
  {
    "num": 21,
    "question_en": "Which method removes the first element from an array?",
    "options_en": ["shift()", "pop()", "remove()", "start()"],
    "answer": "shift()"
  },
  {
    "num": 22,
    "question_en": "Which method adds element at beginning of array?",
    "options_en": ["push()", "unshift()", "addFirst()", "insert()"],
    "answer": "unshift()"
  },
  {
    "num": 23,
    "question_en": "Which function is used to delay execution?",
    "options_en": ["delay()", "timeout()", "setTimeout()", "wait()"],
    "answer": "setTimeout()"
  },
  {
    "num": 24,
    "question_en": "JavaScript is _______ language.",
    "options_en": ["compiled", "interpreted", "machine", "binary"],
    "answer": "interpreted"
  },
  {
    "num": 25,
    "question_en": "Which method is used to convert an object into JSON?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "toJSON()", "makeJSON()"],
    "answer": "JSON.stringify()"
  },
  {
    "num": 26,
    "question_en": "Which operator is used to assign value?",
    "options_en": ["==", ":=", "!=", "="],
    "answer": "="
  },
  {
    "num": 27,
    "question_en": "typeof null returns?",
    "options_en": ["object", "null", "undefined", "false"],
    "answer": "object"
  },
  {
    "num": 28,
    "question_en": "Which operator checks type + value?",
    "options_en": ["==", "===", "!=", "!=="],
    "answer": "==="
  },
  {
    "num": 29,
    "question_en": "Which loop iterates keys of an object?",
    "options_en": ["for-of", "for-in", "foreach", "loop"],
    "answer": "for-in"
  },
  {
    "num": 30,
    "question_en": "Which loop iterates values of an array?",
    "options_en": ["for-in", "for-of", "foreach", "iterate"],
    "answer": "for-of"
  },
  {
    "num": 31,
    "question_en": "setInterval() runs code…",
    "options_en": ["once", "repeatedly", "never", "after reload"],
    "answer": "repeatedly"
  },
  {
    "num": 32,
    "question_en": "Which symbol is used for template literals?",
    "options_en": ["'", "\"", "`", "~"],
    "answer": "`"
  },
  {
    "num": 33,
    "question_en": "Which operator spreads elements of an array?",
    "options_en": ["...", "===", "=>", "%%"],
    "answer": "..."
  },
  {
    "num": 34,
    "question_en": "Which method returns array of keys?",
    "options_en": ["Object.values()", "Object.entries()", "Object.keys()", "Object.list()"],
    "answer": "Object.keys()"
  },
  {
    "num": 35,
    "question_en": "Which method finds first matching element?",
    "options_en": ["filter()", "find()", "map()", "search()"],
    "answer": "find()"
  },
  {
    "num": 36,
    "question_en": "Which method creates a new transformed array?",
    "options_en": ["map()", "filter()", "reduce()", "copy()"],
    "answer": "map()"
  },
  {
    "num": 37,
    "question_en": "Which method filters elements based on condition?",
    "options_en": ["map()", "filter()", "find()", "some()"],
    "answer": "filter()"
  },
  {
    "num": 38,
    "question_en": "Which array method accumulates values?",
    "options_en": ["map()", "reduce()", "sum()", "add()"],
    "answer": "reduce()"
  },
  {
    "num": 39,
    "question_en": "Which function is used to generate random numbers?",
    "options_en": ["Math.random()", "random()", "generate()", "Rand()"],
    "answer": "Math.random()"
  },
  {
    "num": 40,
    "question_en": "NaN stands for?",
    "options_en": ["Not a Number", "New Array Number", "Negative Number", "Next Available Number"],
    "answer": "Not a Number"
  },
  {
    "num": 41,
    "question_en": "Which operator negates a boolean?",
    "options_en": ["!", "~", "not", "??"],
    "answer": "!"
  },
  {
    "num": 42,
    "question_en": "Which operator provides default value?",
    "options_en": ["||", "&&", "??", "="],
    "answer": "??"
  },
  {
    "num": 43,
    "question_en": "Which function rounds a number?",
    "options_en": ["Math.round()", "Math.floor()", "Math.ceil()", "Math.cut()"],
    "answer": "Math.round()"
  },
  {
    "num": 44,
    "question_en": "Which method sorts array elements?",
    "options_en": ["sort()", "order()", "arrange()", "filter()"],
    "answer": "sort()"
  },
  {
    "num": 45,
    "question_en": "Which method removes whitespace from string?",
    "options_en": ["trim()", "cut()", "clean()", "strip()"],
    "answer": "trim()"
  },
  {
    "num": 46,
    "question_en": "Which keyword handles errors?",
    "options_en": ["try", "catch", "throw", "error"],
    "answer": "catch"
  },
  {
    "num": 47,
    "question_en": "Which method returns current date?",
    "options_en": ["new Date()", "Date.now()", "today()", "date()"],
    "answer": "new Date()"
  },
  {
    "num": 48,
    "question_en": "Which keyword defines a function?",
    "options_en": ["fun", "function", "method", "def"],
    "answer": "function"
  },
  {
    "num": 49,
    "question_en": "Arrow functions use which symbol?",
    "options_en": ["->", "<-", "=>", "::"],
    "answer": "=>"
  },
  {
    "num": 50,
    "question_en": "Which method checks if array has a value?",
    "options_en": ["exists()", "includes()", "find()", "contains()"],
    "answer": "includes()"
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
