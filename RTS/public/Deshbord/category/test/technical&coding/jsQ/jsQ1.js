const questions = [
  {
    num: 1,
    question_en: "Which method checks whether a value exists in an array?",
    question_hi: "कौन-सा method array में value मौजूद है या नहीं check करता है?",
    options_en: ["includes()", "exists()", "has()", "contains()"],
    options_hi: ["includes()", "exists()", "has()", "contains()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which keyword is used to handle errors?",
    question_hi: "Errors handle करने के लिए कौन-सा keyword उपयोग होता है?",
    options_en: ["try", "error", "catch", "handle"],
    options_hi: ["try", "error", "catch", "handle"],
    answer_en: "try",
    answer_hi: "try",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which block executes when an error occurs?",
    question_hi: "Error आने पर कौन-सा block execute होता है?",
    options_en: ["catch", "try", "throw", "finally"],
    options_hi: ["catch", "try", "throw", "finally"],
    answer_en: "catch",
    answer_hi: "catch",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which block always executes?",
    question_hi: "कौन-सा block हमेशा execute होता है?",
    options_en: ["finally", "try", "catch", "throw"],
    options_hi: ["finally", "try", "catch", "throw"],
    answer_en: "finally",
    answer_hi: "finally",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which keyword is used to create an object?",
    question_hi: "Object बनाने के लिए कौन-सा keyword उपयोग होता है?",
    options_en: ["new", "create", "object", "make"],
    options_hi: ["new", "create", "object", "make"],
    answer_en: "new",
    answer_hi: "new",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "Which method converts number to string?",
    question_hi: "Number को string में बदलने का method कौन-सा है?",
    options_en: ["toString()", "parseInt()", "String()", "Number()"],
    options_hi: ["toString()", "parseInt()", "String()", "Number()"],
    answer_en: "toString()",
    answer_hi: "toString()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method removes first element of an array?",
    question_hi: "Array का पहला element हटाने का method कौन-सा है?",
    options_en: ["shift()", "pop()", "splice()", "remove()"],
    options_hi: ["shift()", "pop()", "splice()", "remove()"],
    answer_en: "shift()",
    answer_hi: "shift()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method adds element at beginning of array?",
    question_hi: "Array की शुरुआत में element जोड़ने का method कौन-सा है?",
    options_en: ["unshift()", "push()", "shift()", "add()"],
    options_hi: ["unshift()", "push()", "shift()", "add()"],
    answer_en: "unshift()",
    answer_hi: "unshift()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which method copies part of an array?",
    question_hi: "Array के किसी हिस्से को copy करने का method कौन-सा है?",
    options_en: ["slice()", "splice()", "copy()", "cut()"],
    options_hi: ["slice()", "splice()", "copy()", "cut()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method modifies array elements?",
    question_hi: "Array के elements modify करने का method कौन-सा है?",
    options_en: ["splice()", "slice()", "map()", "filter()"],
    options_hi: ["splice()", "slice()", "map()", "filter()"],
    answer_en: "splice()",
    answer_hi: "splice()",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which method executes a function for each array element?",
    question_hi: "Array के हर element पर function चलाने का method कौन-सा है?",
    options_en: ["forEach()", "map()", "filter()", "loop()"],
    options_hi: ["forEach()", "map()", "filter()", "loop()"],
    answer_en: "forEach()",
    answer_hi: "forEach()",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method creates a new array based on condition?",
    question_hi: "Condition के आधार पर नया array बनाने का method कौन-सा है?",
    options_en: ["filter()", "map()", "reduce()", "forEach()"],
    options_hi: ["filter()", "map()", "reduce()", "forEach()"],
    answer_en: "filter()",
    answer_hi: "filter()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which method transforms each element and returns new array?",
    question_hi: "हर element को transform कर नया array लौटाने का method कौन-सा है?",
    options_en: ["map()", "filter()", "reduce()", "forEach()"],
    options_hi: ["map()", "filter()", "reduce()", "forEach()"],
    answer_en: "map()",
    answer_hi: "map()",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method reduces array to single value?",
    question_hi: "Array को single value में बदलने का method कौन-सा है?",
    options_en: ["reduce()", "map()", "filter()", "sum()"],
    options_hi: ["reduce()", "map()", "filter()", "sum()"],
    answer_en: "reduce()",
    answer_hi: "reduce()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which keyword is used to return value from function?",
    question_hi: "Function से value लौटाने के लिए कौन-सा keyword है?",
    options_en: ["return", "break", "continue", "yield"],
    options_hi: ["return", "break", "continue", "yield"],
    answer_en: "return",
    answer_hi: "return",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which operator is used for comparison?",
    question_hi: "Comparison के लिए कौन-सा operator उपयोग होता है?",
    options_en: ["==", "=", "+", "*"],
    options_hi: ["==", "=", "+", "*"],
    answer_en: "==",
    answer_hi: "==",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which symbol represents NOT operator?",
    question_hi: "NOT operator का symbol कौन-सा है?",
    options_en: ["!", "&&", "||", "~"],
    options_hi: ["!", "&&", "||", "~"],
    answer_en: "!",
    answer_hi: "!",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which keyword stops loop execution?",
    question_hi: "Loop को रोकने के लिए कौन-सा keyword है?",
    options_en: ["break", "stop", "exit", "return"],
    options_hi: ["break", "stop", "exit", "return"],
    answer_en: "break",
    answer_hi: "break",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which keyword skips current loop iteration?",
    question_hi: "Current iteration skip करने का keyword कौन-सा है?",
    options_en: ["continue", "break", "skip", "pass"],
    options_hi: ["continue", "break", "skip", "pass"],
    answer_en: "continue",
    answer_hi: "continue",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which statement selects one of many code blocks?",
    question_hi: "कई code blocks में से एक चुनने का statement कौन-सा है?",
    options_en: ["switch", "if", "for", "while"],
    options_hi: ["switch", "if", "for", "while"],
    answer_en: "switch",
    answer_hi: "switch",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which keyword defines an async function?",
    question_hi: "Async function define करने का keyword कौन-सा है?",
    options_en: ["async", "await", "promise", "delay"],
    options_hi: ["async", "await", "promise", "delay"],
    answer_en: "async",
    answer_hi: "async",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which keyword waits for promise result?",
    question_hi: "Promise के result का इंतजार करने का keyword कौन-सा है?",
    options_en: ["await", "async", "wait", "then"],
    options_hi: ["await", "async", "wait", "then"],
    answer_en: "await",
    answer_hi: "await",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which object represents a future value?",
    question_hi: "Future value को represent करने वाला object कौन-सा है?",
    options_en: ["Promise", "Future", "Async", "Callback"],
    options_hi: ["Promise", "Future", "Async", "Callback"],
    answer_en: "Promise",
    answer_hi: "Promise",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method handles fulfilled promise?",
    question_hi: "Fulfilled promise handle करने का method कौन-सा है?",
    options_en: ["then()", "catch()", "finally()", "resolve()"],
    options_hi: ["then()", "catch()", "finally()", "resolve()"],
    answer_en: "then()",
    answer_hi: "then()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which method handles rejected promise?",
    question_hi: "Rejected promise handle करने का method कौन-सा है?",
    options_en: ["catch()", "then()", "error()", "fail()"],
    options_hi: ["catch()", "then()", "error()", "fail()"],
    answer_en: "catch()",
    answer_hi: "catch()",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which method runs after promise completion?",
    question_hi: "Promise complete होने के बाद कौन-सा method चलता है?",
    options_en: ["finally()", "then()", "catch()", "done()"],
    options_hi: ["finally()", "then()", "catch()", "done()"],
    answer_en: "finally()",
    answer_hi: "finally()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which method combines arrays?",
    question_hi: "Arrays को जोड़ने का method कौन-सा है?",
    options_en: ["concat()", "merge()", "join()", "add()"],
    options_hi: ["concat()", "merge()", "join()", "add()"],
    answer_en: "concat()",
    answer_hi: "concat()",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which operator checks both value and type?",
    question_hi: "Value और type दोनों check करने वाला operator कौन-सा है?",
    options_en: ["===", "==", "!=", "="],
    options_hi: ["===", "==", "!=", "="],
    answer_en: "===",
    answer_hi: "===",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which operator checks not equal value and type?",
    question_hi: "Value और type दोनों not equal check करने वाला operator कौन-सा है?",
    options_en: ["!==", "!=", "==", "==="],
    options_hi: ["!==", "!=", "==", "==="],
    answer_en: "!==",
    answer_hi: "!==",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method finds index of element?",
    question_hi: "Element का index खोजने का method कौन-सा है?",
    options_en: ["indexOf()", "find()", "search()", "locate()"],
    options_hi: ["indexOf()", "find()", "search()", "locate()"],
    answer_en: "indexOf()",
    answer_hi: "indexOf()",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which method finds element based on condition?",
    question_hi: "Condition के आधार पर element खोजने का method कौन-सा है?",
    options_en: ["find()", "filter()", "search()", "indexOf()"],
    options_hi: ["find()", "filter()", "search()", "indexOf()"],
    answer_en: "find()",
    answer_hi: "find()",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method checks condition for all elements?",
    question_hi: "सभी elements के लिए condition check करने का method कौन-सा है?",
    options_en: ["every()", "some()", "all()", "check()"],
    options_hi: ["every()", "some()", "all()", "check()"],
    answer_en: "every()",
    answer_hi: "every()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which method checks condition for at least one element?",
    question_hi: "कम से कम एक element के लिए condition check करने का method कौन-सा है?",
    options_en: ["some()", "every()", "any()", "exists()"],
    options_hi: ["some()", "every()", "any()", "exists()"],
    answer_en: "some()",
    answer_hi: "some()",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method sorts array elements?",
    question_hi: "Array elements को sort करने का method कौन-सा है?",
    options_en: ["sort()", "order()", "arrange()", "sequence()"],
    options_hi: ["sort()", "order()", "arrange()", "sequence()"],
    answer_en: "sort()",
    answer_hi: "sort()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which method reverses array elements?",
    question_hi: "Array elements को reverse करने का method कौन-सा है?",
    options_en: ["reverse()", "flip()", "invert()", "swap()"],
    options_hi: ["reverse()", "flip()", "invert()", "swap()"],
    answer_en: "reverse()",
    answer_hi: "reverse()",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which keyword is used to export module?",
    question_hi: "Module export करने का keyword कौन-सा है?",
    options_en: ["export", "send", "share", "module"],
    options_hi: ["export", "send", "share", "module"],
    answer_en: "export",
    answer_hi: "export",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which keyword is used to import module?",
    question_hi: "Module import करने का keyword कौन-सा है?",
    options_en: ["import", "require", "include", "load"],
    options_hi: ["import", "require", "include", "load"],
    answer_en: "import",
    answer_hi: "import",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which function delays execution?",
    question_hi: "Execution को delay करने वाला function कौन-सा है?",
    options_en: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    options_hi: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    answer_en: "setTimeout()",
    answer_hi: "setTimeout()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which function repeats execution?",
    question_hi: "Execution को repeat करने वाला function कौन-सा है?",
    options_en: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    options_hi: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    answer_en: "setInterval()",
    answer_hi: "setInterval()",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which object is used to access browser console?",
    question_hi: "Browser console access करने का object कौन-सा है?",
    options_en: ["console", "window", "document", "browser"],
    options_hi: ["console", "window", "document", "browser"],
    answer_en: "console",
    answer_hi: "console",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which method logs message to console?",
    question_hi: "Console में message log करने का method कौन-सा है?",
    options_en: ["log()", "print()", "write()", "show()"],
    options_hi: ["log()", "print()", "write()", "show()"],
    answer_en: "log()",
    answer_hi: "log()",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which object represents the browser window?",
    question_hi: "Browser window को represent करने वाला object कौन-सा है?",
    options_en: ["window", "document", "screen", "navigator"],
    options_hi: ["window", "document", "screen", "navigator"],
    answer_en: "window",
    answer_hi: "window",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which object represents the HTML document?",
    question_hi: "HTML document को represent करने वाला object कौन-सा है?",
    options_en: ["document", "window", "html", "dom"],
    options_hi: ["document", "window", "html", "dom"],
    answer_en: "document",
    answer_hi: "document",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method selects element by id?",
    question_hi: "ID से element select करने का method कौन-सा है?",
    options_en: ["getElementById()", "querySelector()", "getById()", "selectId()"],
    options_hi: ["getElementById()", "querySelector()", "getById()", "selectId()"],
    answer_en: "getElementById()",
    answer_hi: "getElementById()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which method selects first matching CSS selector?",
    question_hi: "पहले matching CSS selector को select करने का method कौन-सा है?",
    options_en: ["querySelector()", "querySelectorAll()", "getElementsByClassName()", "select()"],
    options_hi: ["querySelector()", "querySelectorAll()", "getElementsByClassName()", "select()"],
    answer_en: "querySelector()",
    answer_hi: "querySelector()",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which method selects all matching CSS selectors?",
    question_hi: "सभी matching CSS selectors को select करने का method कौन-सा है?",
    options_en: ["querySelectorAll()", "querySelector()", "selectAll()", "getAll()"],
    options_hi: ["querySelectorAll()", "querySelector()", "selectAll()", "getAll()"],
    answer_en: "querySelectorAll()",
    answer_hi: "querySelectorAll()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which event occurs on mouse click?",
    question_hi: "Mouse click पर कौन-सा event होता है?",
    options_en: ["onclick", "onhover", "onpress", "onmouse"],
    options_hi: ["onclick", "onhover", "onpress", "onmouse"],
    answer_en: "onclick",
    answer_hi: "onclick",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which event occurs when page loads?",
    question_hi: "Page load होने पर कौन-सा event होता है?",
    options_en: ["onload", "onopen", "onstart", "onready"],
    options_hi: ["onload", "onopen", "onstart", "onready"],
    answer_en: "onload",
    answer_hi: "onload",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which event occurs when input value changes?",
    question_hi: "Input value change होने पर कौन-सा event होता है?",
    options_en: ["onchange", "oninput", "onupdate", "onedit"],
    options_hi: ["onchange", "oninput", "onupdate", "onedit"],
    answer_en: "onchange",
    answer_hi: "onchange",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which event occurs when key is pressed?",
    question_hi: "Key press होने पर कौन-सा event होता है?",
    options_en: ["onkeydown", "onkeypress", "onkeyup", "onkey"],
    options_hi: ["onkeydown", "onkeypress", "onkeyup", "onkey"],
    answer_en: "onkeydown",
    answer_hi: "onkeydown",
    attempted: false,
    selected: ""
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
