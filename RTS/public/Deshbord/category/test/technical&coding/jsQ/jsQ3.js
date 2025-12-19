
  const questions= [
    {
      "num": 1,
      "question_en": "JavaScript is a ____ language.",
      "question_hi": "JavaScript एक ____ भाषा है।",
      "options_en": ["Interpreted", "Compiled", "Assembly", "Machine"],
      "options_hi": ["Interpreted", "Compiled", "Assembly", "Machine"],
      "answer_en": "Interpreted",
      "answer_hi": "Interpreted",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which symbol is used for OR operator?",
      "question_hi": "OR ऑपरेटर के लिए कौन सा symbol है?",
      "options_en": ["||", "&&", "|", "!"],
      "options_hi": ["||", "&&", "|", "!"],
      "answer_en": "||",
      "answer_hi": "||",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Which keyword is used to stop function execution?",
      "question_hi": "Function execution रोकने के लिए कौन सा keyword है?",
      "options_en": ["return", "break", "stop", "exit"],
      "options_hi": ["return", "break", "stop", "exit"],
      "answer_en": "return",
      "answer_hi": "return",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which method converts array to string?",
      "question_hi": "Array को string में बदलने का method?",
      "options_en": ["toString()", "join()", "Both A and B", "convert()"],
      "options_hi": ["toString()", "join()", "Both A and B", "convert()"],
      "answer_en": "Both A and B",
      "answer_hi": "Both A and B",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "NaN stands for?",
      "question_hi": "NaN का मतलब क्या है?",
      "options_en": ["Not a Number", "Negative Number", "New a Number", "None"],
      "options_hi": ["Not a Number", "Negative Number", "New a Number", "None"],
      "answer_en": "Not a Number",
      "answer_hi": "Not a Number",
      "attempted": false,
      "selected": ""
    },

    {
      "num": 6,
      "question_en": "Which function checks NaN?",
      "question_hi": "NaN check करने का function?",
      "options_en": ["isNaN()", "Number()", "checkNaN()", "typeof"],
      "options_hi": ["isNaN()", "Number()", "checkNaN()", "typeof"],
      "answer_en": "isNaN()",
      "answer_hi": "isNaN()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "typeof null returns?",
      "question_hi": "typeof null क्या return करता है?",
      "options_en": ["object", "null", "undefined", "number"],
      "options_hi": ["object", "null", "undefined", "number"],
      "answer_en": "object",
      "answer_hi": "object",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which array method finds element?",
      "question_hi": "Element खोजने का array method?",
      "options_en": ["find()", "filter()", "map()", "reduce()"],
      "options_hi": ["find()", "filter()", "map()", "reduce()"],
      "answer_en": "find()",
      "answer_hi": "find()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Which method returns index by condition?",
      "question_hi": "Condition से index लौटाने वाला method?",
      "options_en": ["findIndex()", "indexOf()", "search()", "locate()"],
      "options_hi": ["findIndex()", "indexOf()", "search()", "locate()"],
      "answer_en": "findIndex()",
      "answer_hi": "findIndex()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which statement selects multiple conditions?",
      "question_hi": "Multiple condition select करने का statement?",
      "options_en": ["switch", "if", "loop", "break"],
      "options_hi": ["switch", "if", "loop", "break"],
      "answer_en": "switch",
      "answer_hi": "switch",
      "attempted": false,
      "selected": ""
    },

    {
      "num": 11,
      "question_en": "Which operator is NOT comparison?",
      "question_hi": "कौन सा comparison operator नहीं है?",
      "options_en": ["=", "==", "!=", "==="],
      "options_hi": ["=", "==", "!=", "==="],
      "answer_en": "=",
      "answer_hi": "=",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Which method copies object?",
      "question_hi": "Object copy करने का modern तरीका?",
      "options_en": ["Object.assign()", "copy()", "clone()", "assign()"],
      "options_hi": ["Object.assign()", "copy()", "clone()", "assign()"],
      "answer_en": "Object.assign()",
      "answer_hi": "Object.assign()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Spread operator symbol?",
      "question_hi": "Spread operator का symbol?",
      "options_en": ["...", "..", "***", "&&"],
      "options_hi": ["...", "..", "***", "&&"],
      "answer_en": "...",
      "answer_hi": "...",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Rest operator is used in?",
      "question_hi": "Rest operator कहां उपयोग होता है?",
      "options_en": ["Function parameters", "Loop", "Condition", "Class"],
      "options_hi": ["Function parameters", "Loop", "Condition", "Class"],
      "answer_en": "Function parameters",
      "answer_hi": "Function parameters",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Which method freezes object?",
      "question_hi": "Object को freeze करने का method?",
      "options_en": ["Object.freeze()", "Object.lock()", "Object.stop()", "Object.seal()"],
      "options_hi": ["Object.freeze()", "Object.lock()", "Object.stop()", "Object.seal()"],
      "answer_en": "Object.freeze()",
      "answer_hi": "Object.freeze()",
      "attempted": false,
      "selected": ""
    },

    {
      "num": 16,
      "question_en": "Which method allows modification but no new property?",
      "question_hi": "Modification allow लेकिन new property नहीं?",
      "options_en": ["Object.seal()", "Object.freeze()", "Object.assign()", "Object.copy()"],
      "options_hi": ["Object.seal()", "Object.freeze()", "Object.assign()", "Object.copy()"],
      "answer_en": "Object.seal()",
      "answer_hi": "Object.seal()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "Which operator handles optional chaining?",
      "question_hi": "Optional chaining operator कौन सा है?",
      "options_en": ["?.", "??", "&&", "::"],
      "options_hi": ["?.", "??", "&&", "::"],
      "answer_en": "?.",
      "answer_hi": "?.",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Nullish coalescing operator?",
      "question_hi": "Nullish coalescing operator?",
      "options_en": ["??", "||", "&&", "!="],
      "options_hi": ["??", "||", "&&", "!="],
      "answer_en": "??",
      "answer_hi": "??",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Which creates new Promise?",
      "question_hi": "नया Promise बनाने के लिए?",
      "options_en": ["new Promise()", "Promise.create()", "Promise()", "makePromise()"],
      "options_hi": ["new Promise()", "Promise.create()", "Promise()", "makePromise()"],
      "answer_en": "new Promise()",
      "answer_hi": "new Promise()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "Which promise runs parallel?",
      "question_hi": "Parallel promise execution?",
      "options_en": ["Promise.all()", "Promise.then()", "Promise.catch()", "Promise.resolve()"],
      "options_hi": ["Promise.all()", "Promise.then()", "Promise.catch()", "Promise.resolve()"],
      "answer_en": "Promise.all()",
      "answer_hi": "Promise.all()",
      "attempted": false,
      "selected": ""
    },

    {
      "num": 21,
      "question_en": "Which method delays execution?",
      "question_hi": "Execution delay करने का method?",
      "options_en": ["setTimeout()", "setInterval()", "delay()", "wait()"],
      "options_hi": ["setTimeout()", "setInterval()", "delay()", "wait()"],
      "answer_en": "setTimeout()",
      "answer_hi": "setTimeout()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "Which runs repeatedly?",
      "question_hi": "बार-बार execute होने वाला?",
      "options_en": ["setInterval()", "setTimeout()", "loop()", "repeat()"],
      "options_hi": ["setInterval()", "setTimeout()", "loop()", "repeat()"],
      "answer_en": "setInterval()",
      "answer_hi": "setInterval()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "Clear timeout method?",
      "question_hi": "Timeout clear करने का method?",
      "options_en": ["clearTimeout()", "stopTimeout()", "removeTimeout()", "endTimeout()"],
      "options_hi": ["clearTimeout()", "stopTimeout()", "removeTimeout()", "endTimeout()"],
      "answer_en": "clearTimeout()",
      "answer_hi": "clearTimeout()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "Which event handles keyboard input?",
      "question_hi": "Keyboard input event?",
      "options_en": ["keydown", "mouseover", "click", "load"],
      "options_hi": ["keydown", "mouseover", "click", "load"],
      "answer_en": "keydown",
      "answer_hi": "keydown",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "Which prevents default behaviour?",
      "question_hi": "Default behaviour रोकने का method?",
      "options_en": ["preventDefault()", "stop()", "block()", "disable()"],
      "options_hi": ["preventDefault()", "stop()", "block()", "disable()"],
      "answer_en": "preventDefault()",
      "answer_hi": "preventDefault()",
      "attempted": false,
      "selected": ""
    },

    {
      "num": 26,
      "question_en": "Which stops event bubbling?",
      "question_hi": "Event bubbling रोकने का?",
      "options_en": ["stopPropagation()", "preventDefault()", "halt()", "break()"],
      "options_hi": ["stopPropagation()", "preventDefault()", "halt()", "break()"],
      "answer_en": "stopPropagation()",
      "answer_hi": "stopPropagation()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "Which keyword accesses current object?",
      "question_hi": "Current object access keyword?",
      "options_en": ["this", "self", "that", "object"],
      "options_hi": ["this", "self", "that", "object"],
      "answer_en": "this",
      "answer_hi": "this",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "Which creates deep copy (simple)?",
      "question_hi": "Simple deep copy तरीका?",
      "options_en": ["JSON.parse(JSON.stringify())", "Object.assign()", "spread", "copy()"],
      "options_hi": ["JSON.parse(JSON.stringify())", "Object.assign()", "spread", "copy()"],
      "answer_en": "JSON.parse(JSON.stringify())",
      "answer_hi": "JSON.parse(JSON.stringify())",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "Which checks property existence?",
      "question_hi": "Property मौजूद है या नहीं?",
      "options_en": ["in", "has()", "exists()", "check()"],
      "options_hi": ["in", "has()", "exists()", "check()"],
      "answer_en": "in",
      "answer_hi": "in",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "Which deletes object property?",
      "question_hi": "Object property delete करने का keyword?",
      "options_en": ["delete", "remove", "clear", "unset"],
      "options_hi": ["delete", "remove", "clear", "unset"],
      "answer_en": "delete",
      "answer_hi": "delete",
      "attempted": false,
      "selected": ""
    },

    {
      "num": 31,
      "question_en": "Which type is function?",
      "question_hi": "Function किस type का होता है?",
      "options_en": ["Object", "Number", "String", "Boolean"],
      "options_hi": ["Object", "Number", "String", "Boolean"],
      "answer_en": "Object",
      "answer_hi": "Object",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_en": "JavaScript is case-sensitive?",
      "question_hi": "JavaScript case-sensitive है?",
      "options_en": ["Yes", "No", "Sometimes", "Depends"],
      "options_hi": ["Yes", "No", "Sometimes", "Depends"],
      "answer_en": "Yes",
      "answer_hi": "Yes",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_en": "Which operator gives power?",
      "question_hi": "Power के लिए operator?",
      "options_en": ["**", "^", "//", "pow"],
      "options_hi": ["**", "^", "//", "pow"],
      "answer_en": "**",
      "answer_hi": "**",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_en": "Which keyword exits loop only?",
      "question_hi": "सिर्फ loop से बाहर निकलने का?",
      "options_en": ["break", "return", "exit", "stop"],
      "options_hi": ["break", "return", "exit", "stop"],
      "answer_en": "break",
      "answer_hi": "break",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_en": "Which object controls browser window?",
      "question_hi": "Browser window control करने वाला?",
      "options_en": ["window", "document", "navigator", "screen"],
      "options_hi": ["window", "document", "navigator", "screen"],
      "answer_en": "window",
      "answer_hi": "window",
      "attempted": false,
      "selected": ""
    },

    {
      "num": 36,
      "question_en": "Which gives screen resolution?",
      "question_hi": "Screen resolution कौन देता है?",
      "options_en": ["screen", "window", "navigator", "document"],
      "options_hi": ["screen", "window", "navigator", "document"],
      "answer_en": "screen",
      "answer_hi": "screen",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_en": "Which method reloads page?",
      "question_hi": "Page reload करने का method?",
      "options_en": ["location.reload()", "window.refresh()", "page.reload()", "reload()"],
      "options_hi": ["location.reload()", "window.refresh()", "page.reload()", "reload()"],
      "answer_en": "location.reload()",
      "answer_hi": "location.reload()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_en": "Which function converts value to integer?",
      "question_hi": "Integer में बदलने वाला function?",
      "options_en": ["parseInt()", "Number()", "parseFloat()", "int()"],
      "options_hi": ["parseInt()", "Number()", "parseFloat()", "int()"],
      "answer_en": "parseInt()",
      "answer_hi": "parseInt()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_en": "Which compares value only?",
      "question_hi": "केवल value compare करता है?",
      "options_en": ["==", "===", "=", "!=="],
      "options_hi": ["==", "===", "=", "!=="],
      "answer_en": "==",
      "answer_hi": "==",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_en": "Which operator negates condition?",
      "question_hi": "Condition negate करने वाला operator?",
      "options_en": ["!", "&&", "||", "~"],
      "options_hi": ["!", "&&", "||", "~"],
      "answer_en": "!",
      "answer_hi": "!",
      "attempted": false,
      "selected": ""
    },

    {
      "num": 41,
      "question_en": "Which array method loops without return?",
      "question_hi": "Return के बिना loop करने वाला?",
      "options_en": ["forEach()", "map()", "filter()", "reduce()"],
      "options_hi": ["forEach()", "map()", "filter()", "reduce()"],
      "answer_en": "forEach()",
      "answer_hi": "forEach()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_en": "Which array method returns new array?",
      "question_hi": "नया array लौटाने वाला?",
      "options_en": ["map()", "forEach()", "push()", "pop()"],
      "options_hi": ["map()", "forEach()", "push()", "pop()"],
      "answer_en": "map()",
      "answer_hi": "map()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_en": "Which event works on input change?",
      "question_hi": "Input change पर कौन सा event?",
      "options_en": ["onchange", "onclick", "oninput", "Both A and B"],
      "options_hi": ["onchange", "onclick", "oninput", "Both A and B"],
      "answer_en": "oninput",
      "answer_hi": "oninput",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_en": "Which keyword creates inheritance?",
      "question_hi": "Inheritance का keyword?",
      "options_en": ["extends", "super", "this", "inherit"],
      "options_hi": ["extends", "super", "this", "inherit"],
      "answer_en": "extends",
      "answer_hi": "extends",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_en": "Which keyword refers parent class?",
      "question_hi": "Parent class refer करने वाला keyword?",
      "options_en": ["super", "this", "parent", "base"],
      "options_hi": ["super", "this", "parent", "base"],
      "answer_en": "super",
      "answer_hi": "super",
      "attempted": false,
      "selected": ""
    },

    {
      "num": 46,
      "question_en": "Which handles async errors?",
      "question_hi": "Async error handle करने का?",
      "options_en": ["try-catch", "throw", "if", "switch"],
      "options_hi": ["try-catch", "throw", "if", "switch"],
      "answer_en": "try-catch",
      "answer_hi": "try-catch",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_en": "Which keyword pauses async execution?",
      "question_hi": "Async execution pause करने वाला?",
      "options_en": ["await", "async", "wait", "then"],
      "options_hi": ["await", "async", "wait", "then"],
      "answer_en": "await",
      "answer_hi": "await",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_en": "Which checks string contains?",
      "question_hi": "String में word check करने का?",
      "options_en": ["includes()", "index()", "has()", "contains()"],
      "options_hi": ["includes()", "index()", "has()", "contains()"],
      "answer_en": "includes()",
      "answer_hi": "includes()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_en": "Which removes whitespace?",
      "question_hi": "Whitespace हटाने का method?",
      "options_en": ["trim()", "slice()", "cut()", "clean()"],
      "options_hi": ["trim()", "slice()", "cut()", "clean()"],
      "answer_en": "trim()",
      "answer_hi": "trim()",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_en": "JavaScript supports OOP?",
      "question_hi": "JavaScript OOP support करता है?",
      "options_en": ["Yes", "No", "Only ES6", "Only classes"],
      "options_hi": ["Yes", "No", "Only ES6", "Only classes"],
      "answer_en": "Yes",
      "answer_hi": "Yes",
      "attempted": false,
      "selected": ""
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
