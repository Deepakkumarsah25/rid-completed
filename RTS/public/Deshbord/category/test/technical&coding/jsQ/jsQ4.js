const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to declare a variable in JavaScript?",
    "question_hi": "JavaScript में variable declare करने का keyword कौन सा है?",
    "options_en": ["var", "int", "string", "declare"],
    "options_hi": ["var", "int", "string", "declare"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword creates a block scoped variable?",
    "question_hi": "Block scoped variable बनाने का keyword?",
    "options_en": ["let", "var", "global", "define"],
    "options_hi": ["let", "var", "global", "define"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword declares a constant?",
    "question_hi": "Constant declare करने का keyword?",
    "options_en": ["const", "var", "let", "static"],
    "options_hi": ["const", "var", "let", "static"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which operator checks value and type?",
    "question_hi": "Value और type check करने वाला operator?",
    "options_en": ["===", "==", "=", "!="],
    "options_hi": ["===", "==", "=", "!="],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method converts object to JSON?",
    "question_hi": "Object को JSON में convert करने का method?",
    "options_en": ["JSON.stringify()", "JSON.parse()", "toJSON()", "convert()"],
    "options_hi": ["JSON.stringify()", "JSON.parse()", "toJSON()", "convert()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which method converts JSON to object?",
    "question_hi": "JSON को object में convert करने का method?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "decode()", "parseObj()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "decode()", "parseObj()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method adds element at end of array?",
    "question_hi": "Array के end में element जोड़ने का method?",
    "options_en": ["push()", "pop()", "shift()", "unshift()"],
    "options_hi": ["push()", "pop()", "shift()", "unshift()"],
    "answer_en": "push()",
    "answer_hi": "push()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method removes last element from array?",
    "question_hi": "Array का last element remove करने का method?",
    "options_en": ["pop()", "push()", "shift()", "unshift()"],
    "options_hi": ["pop()", "push()", "shift()", "unshift()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which loop runs at least once?",
    "question_hi": "कौन सा loop कम से कम एक बार चलता है?",
    "options_en": ["do-while", "while", "for", "forEach"],
    "options_hi": ["do-while", "while", "for", "forEach"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator is logical AND?",
    "question_hi": "Logical AND operator कौन सा है?",
    "options_en": ["&&", "||", "!", "&"],
    "options_hi": ["&&", "||", "!", "&"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which operator is logical OR?",
    "question_hi": "Logical OR operator कौन सा है?",
    "options_en": ["||", "&&", "!", "|"],
    "options_hi": ["||", "&&", "!", "|"],
    "answer_en": "||",
    "answer_hi": "||",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword refers to current object?",
    "question_hi": "Current object को refer करने वाला keyword?",
    "options_en": ["this", "self", "current", "object"],
    "options_hi": ["this", "self", "current", "object"],
    "answer_en": "this",
    "answer_hi": "this",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method executes function for each array element?",
    "question_hi": "Array के हर element पर function चलाने का method?",
    "options_en": ["forEach()", "map()", "filter()", "reduce()"],
    "options_hi": ["forEach()", "map()", "filter()", "reduce()"],
    "answer_en": "forEach()",
    "answer_hi": "forEach()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method creates new array by condition?",
    "question_hi": "Condition के आधार पर नया array बनाने का method?",
    "options_en": ["filter()", "map()", "forEach()", "reduce()"],
    "options_hi": ["filter()", "map()", "forEach()", "reduce()"],
    "answer_en": "filter()",
    "answer_hi": "filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method transforms array elements?",
    "question_hi": "Array के elements transform करने का method?",
    "options_en": ["map()", "filter()", "forEach()", "sort()"],
    "options_hi": ["map()", "filter()", "forEach()", "sort()"],
    "answer_en": "map()",
    "answer_hi": "map()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which method sorts array?",
    "question_hi": "Array को sort करने का method?",
    "options_en": ["sort()", "reverse()", "slice()", "splice()"],
    "options_hi": ["sort()", "reverse()", "slice()", "splice()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method reverses array?",
    "question_hi": "Array को reverse करने का method?",
    "options_en": ["reverse()", "sort()", "map()", "filter()"],
    "options_hi": ["reverse()", "sort()", "map()", "filter()"],
    "answer_en": "reverse()",
    "answer_hi": "reverse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which function parses string to integer?",
    "question_hi": "String को integer में बदलने वाला function?",
    "options_en": ["parseInt()", "parseFloat()", "Number()", "String()"],
    "options_hi": ["parseInt()", "parseFloat()", "Number()", "String()"],
    "answer_en": "parseInt()",
    "answer_hi": "parseInt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword defines a function?",
    "question_hi": "Function define करने का keyword?",
    "options_en": ["function", "def", "method", "func"],
    "options_hi": ["function", "def", "method", "func"],
    "answer_en": "function",
    "answer_hi": "function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which statement handles errors?",
    "question_hi": "Error handle करने वाला statement?",
    "options_en": ["try...catch", "if", "switch", "loop"],
    "options_hi": ["try...catch", "if", "switch", "loop"],
    "answer_en": "try...catch",
    "answer_hi": "try...catch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword is used for async function?",
    "question_hi": "Async function का keyword?",
    "options_en": ["async", "await", "promise", "then"],
    "options_hi": ["async", "await", "promise", "then"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword waits for promise?",
    "question_hi": "Promise का wait करने वाला keyword?",
    "options_en": ["await", "async", "then", "resolve"],
    "options_hi": ["await", "async", "then", "resolve"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method handles fulfilled promise?",
    "question_hi": "Fulfilled promise handle करने का method?",
    "options_en": ["then()", "catch()", "finally()", "resolve()"],
    "options_hi": ["then()", "catch()", "finally()", "resolve()"],
    "answer_en": "then()",
    "answer_hi": "then()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method handles rejected promise?",
    "question_hi": "Rejected promise handle करने का method?",
    "options_en": ["catch()", "then()", "finally()", "all()"],
    "options_hi": ["catch()", "then()", "finally()", "all()"],
    "answer_en": "catch()",
    "answer_hi": "catch()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method runs always after promise?",
    "question_hi": "Promise के बाद हमेशा चलने वाला method?",
    "options_en": ["finally()", "then()", "catch()", "resolve()"],
    "options_hi": ["finally()", "then()", "catch()", "resolve()"],
    "answer_en": "finally()",
    "answer_hi": "finally()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which method merges arrays?",
    "question_hi": "Arrays merge करने का method?",
    "options_en": ["concat()", "join()", "merge()", "push()"],
    "options_hi": ["concat()", "join()", "merge()", "push()"],
    "answer_en": "concat()",
    "answer_hi": "concat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method copies array?",
    "question_hi": "Array copy करने का method?",
    "options_en": ["slice()", "splice()", "copy()", "shift()"],
    "options_hi": ["slice()", "splice()", "copy()", "shift()"],
    "answer_en": "slice()",
    "answer_hi": "slice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method modifies array?",
    "question_hi": "Array modify करने का method?",
    "options_en": ["splice()", "slice()", "map()", "filter()"],
    "options_hi": ["splice()", "slice()", "map()", "filter()"],
    "answer_en": "splice()",
    "answer_hi": "splice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method finds index of element?",
    "question_hi": "Element का index खोजने का method?",
    "options_en": ["indexOf()", "find()", "search()", "match()"],
    "options_hi": ["indexOf()", "find()", "search()", "match()"],
    "answer_en": "indexOf()",
    "answer_hi": "indexOf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method checks substring?",
    "question_hi": "Substring check करने का method?",
    "options_en": ["includes()", "search()", "match()", "index()"],
    "options_hi": ["includes()", "search()", "match()", "index()"],
    "answer_en": "includes()",
    "answer_hi": "includes()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which method checks start of string?",
    "question_hi": "String की starting check करने का method?",
    "options_en": ["startsWith()", "endsWith()", "includes()", "match()"],
    "options_hi": ["startsWith()", "endsWith()", "includes()", "match()"],
    "answer_en": "startsWith()",
    "answer_hi": "startsWith()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method checks end of string?",
    "question_hi": "String के end की check का method?",
    "options_en": ["endsWith()", "startsWith()", "slice()", "trim()"],
    "options_hi": ["endsWith()", "startsWith()", "slice()", "trim()"],
    "answer_en": "endsWith()",
    "answer_hi": "endsWith()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method removes spaces?",
    "question_hi": "String से spaces हटाने का method?",
    "options_en": ["trim()", "split()", "slice()", "cut()"],
    "options_hi": ["trim()", "split()", "slice()", "cut()"],
    "answer_en": "trim()",
    "answer_hi": "trim()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which function converts number to string?",
    "question_hi": "Number को string में बदलने का function?",
    "options_en": ["toString()", "Number()", "parseInt()", "valueOf()"],
    "options_hi": ["toString()", "Number()", "parseInt()", "valueOf()"],
    "answer_en": "toString()",
    "answer_hi": "toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function converts string to number?",
    "question_hi": "String को number में convert करने वाला function?",
    "options_en": ["Number()", "String()", "toString()", "join()"],
    "options_hi": ["Number()", "String()", "toString()", "join()"],
    "answer_en": "Number()",
    "answer_hi": "Number()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword creates class?",
    "question_hi": "Class बनाने का keyword?",
    "options_en": ["class", "object", "function", "new"],
    "options_hi": ["class", "object", "function", "new"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword creates object instance?",
    "question_hi": "Object का instance बनाने का keyword?",
    "options_en": ["new", "this", "class", "create"],
    "options_hi": ["new", "this", "class", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method checks array value?",
    "question_hi": "Array में value check करने का method?",
    "options_en": ["includes()", "find()", "search()", "has()"],
    "options_hi": ["includes()", "find()", "search()", "has()"],
    "answer_en": "includes()",
    "answer_hi": "includes()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method executes function once?",
    "question_hi": "एक बार function execute करने का तरीका?",
    "options_en": ["call()", "bind()", "apply()", "repeat()"],
    "options_hi": ["call()", "bind()", "apply()", "repeat()"],
    "answer_en": "call()",
    "answer_hi": "call()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function delays execution?",
    "question_hi": "Execution delay करने वाला function?",
    "options_en": ["setTimeout()", "setInterval()", "delay()", "wait()"],
    "options_hi": ["setTimeout()", "setInterval()", "delay()", "wait()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which function repeats execution?",
    "question_hi": "Repeated execution वाला function?",
    "options_en": ["setInterval()", "setTimeout()", "loop()", "repeat()"],
    "options_hi": ["setInterval()", "setTimeout()", "loop()", "repeat()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method stops interval?",
    "question_hi": "Interval stop करने का method?",
    "options_en": ["clearInterval()", "stop()", "remove()", "cancel()"],
    "options_hi": ["clearInterval()", "stop()", "remove()", "cancel()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method stops timeout?",
    "question_hi": "Timeout रोकने का method?",
    "options_en": ["clearTimeout()", "stop()", "end()", "remove()"],
    "options_hi": ["clearTimeout()", "stop()", "end()", "remove()"],
    "answer_en": "clearTimeout()",
    "answer_hi": "clearTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword exports module?",
    "question_hi": "Module export करने का keyword?",
    "options_en": ["export", "import", "module", "require"],
    "options_hi": ["export", "import", "module", "require"],
    "answer_en": "export",
    "answer_hi": "export",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword imports module?",
    "question_hi": "Module import करने का keyword?",
    "options_en": ["import", "export", "require", "include"],
    "options_hi": ["import", "export", "require", "include"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which method finds element in array?",
    "question_hi": "Array में element खोजने का method?",
    "options_en": ["find()", "filter()", "map()", "search()"],
    "options_hi": ["find()", "filter()", "map()", "search()"],
    "answer_en": "find()",
    "answer_hi": "find()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method finds index by condition?",
    "question_hi": "Condition से index खोजने का method?",
    "options_en": ["findIndex()", "indexOf()", "search()", "match()"],
    "options_hi": ["findIndex()", "indexOf()", "search()", "match()"],
    "answer_en": "findIndex()",
    "answer_hi": "findIndex()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which operator spreads array?",
    "question_hi": "Array spread करने वाला operator?",
    "options_en": ["...", "&&", "||", "::"],
    "options_hi": ["...", "&&", "||", "::"],
    "answer_en": "...",
    "answer_hi": "...",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword destructures object?",
    "question_hi": "Object destructuring का syntax किससे होता है?",
    "options_en": ["{}", "[]", "()", "<>"],
    "options_hi": ["{}", "[]", "()", "<>"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword creates arrow function?",
    "question_hi": "Arrow function बनाने का symbol?",
    "options_en": ["=>", "->", "::", "==>"],
    "options_hi": ["=>", "->", "::", "==>"],
    "answer_en": "=>",
    "answer_hi": "=>",
    "attempted": false,
    "selected": ""
  }
];



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
