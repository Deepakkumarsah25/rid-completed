const questions = [
  {
    num: 1,
    question_en: "Which keyword declares a block-scoped variable?",
    question_hi: "कौन सा कीवर्ड block-scoped variable घोषित करता है?",
    options_en: ["let", "var", "const", "define"],
    options_hi: ["let", "var", "const", "define"],
    answer_en: "let",
    answer_hi: "let",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method converts JSON string to object?",
    question_hi: "JSON string को object में बदलने के लिए कौन सा method उपयोग होता है?",
    options_en: ["JSON.parse()", "JSON.stringify()", "toObject()", "Object.assign()"],
    options_hi: ["JSON.parse()", "JSON.stringify()", "toObject()", "Object.assign()"],
    answer_en: "JSON.parse()",
    answer_hi: "JSON.parse()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which symbol is used in template literals?",
    question_hi: "Template literals में कौन सा symbol उपयोग होता है?",
    options_en: ["Backticks (`)", "Single quotes", "Double quotes", "None"],
    options_hi: ["Backticks (`)", "Single quotes", "Double quotes", "None"],
    answer_en: "Backticks (`)",
    answer_hi: "Backticks (`)",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which function prints output in console?",
    question_hi: "Console में output print करने के लिए कौन सा function उपयोग होता है?",
    options_en: ["console.log()", "print()", "alert()", "write()"],
    options_hi: ["console.log()", "print()", "alert()", "write()"],
    answer_en: "console.log()",
    answer_hi: "console.log()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which operator checks both value and type?",
    question_hi: "कौन सा operator value और type दोनों check करता है?",
    options_en: ["===", "==", "=", "!="],
    options_hi: ["===", "==", "=", "!="],
    answer_en: "===",
    answer_hi: "===",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which loop always runs at least once?",
    question_hi: "कौन सी loop कम से कम एक बार चलती है?",
    options_en: ["do...while", "while", "for", "foreach"],
    options_hi: ["do...while", "while", "for", "foreach"],
    answer_en: "do...while",
    answer_hi: "do...while",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method removes whitespace from both sides of a string?",
    question_hi: "String के दोनों ओर की whitespace हटाने के लिए कौन सा method उपयोग होता है?",
    options_en: ["trim()", "slice()", "replace()", "clean()"],
    options_hi: ["trim()", "slice()", "replace()", "clean()"],
    answer_en: "trim()",
    answer_hi: "trim()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which statement exits a loop?",
    question_hi: "Loop से बाहर निकलने के लिए कौन सा statement उपयोग होता है?",
    options_en: ["break", "return", "exit", "stop"],
    options_hi: ["break", "return", "exit", "stop"],
    answer_en: "break",
    answer_hi: "break",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Function without a name is called?",
    question_hi: "जिस function का नाम नहीं होता उसे क्या कहते हैं?",
    options_en: ["Anonymous function", "Named function", "Static function", "Constructor"],
    options_hi: ["Anonymous function", "Named function", "Static function", "Constructor"],
    answer_en: "Anonymous function",
    answer_hi: "Anonymous function",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "JavaScript is a ____ language.",
    question_hi: "JavaScript एक ____ भाषा है।",
    options_en: ["Scripting", "Markup", "Machine", "Database"],
    options_hi: ["Scripting", "Markup", "Machine", "Database"],
    answer_en: "Scripting",
    answer_hi: "Scripting",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which company developed JavaScript?",
    question_hi: "JavaScript किस कंपनी ने बनाया?",
    options_en: ["Netscape", "Google", "Microsoft", "Apple"],
    options_hi: ["Netscape", "Google", "Microsoft", "Apple"],
    answer_en: "Netscape",
    answer_hi: "Netscape",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method adds an element at the end of an array?",
    question_hi: "Array के अंत में element जोड़ने के लिए कौन सा method उपयोग होता है?",
    options_en: ["push()", "pop()", "shift()", "unshift()"],
    options_hi: ["push()", "pop()", "shift()", "unshift()"],
    answer_en: "push()",
    answer_hi: "push()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What does DOM stand for?",
    question_hi: "DOM का पूरा नाम क्या है?",
    options_en: ["Document Object Model", "Data Output Module", "Direct Object Mapping", "None"],
    options_hi: ["Document Object Model", "Data Output Module", "Direct Object Mapping", "None"],
    answer_en: "Document Object Model",
    answer_hi: "Document Object Model",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which keyword prevents reassignment?",
    question_hi: "कौन सा keyword value को दोबारा assign नहीं होने देता?",
    options_en: ["const", "let", "var", "static"],
    options_hi: ["const", "let", "var", "static"],
    answer_en: "const",
    answer_hi: "const",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which method converts array to string?",
    question_hi: "Array को string में convert करने के लिए कौन सा method उपयोग होता है?",
    options_en: ["join()", "split()", "string()", "convert()"],
    options_hi: ["join()", "split()", "string()", "convert()"],
    answer_en: "join()",
    answer_hi: "join()",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Undefined means?",
    question_hi: "Undefined का क्या अर्थ है?",
    options_en: ["Declared but not assigned", "Error", "Null", "Zero"],
    options_hi: ["Declare किया लेकिन value नहीं दी", "Error", "Null", "Zero"],
    answer_en: "Declared but not assigned",
    answer_hi: "Declare किया लेकिन value नहीं दी",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which method removes the last element of an array?",
    question_hi: "Array का आखिरी element हटाने के लिए कौन सा method उपयोग होता है?",
    options_en: ["pop()", "push()", "shift()", "delete"],
    options_hi: ["pop()", "push()", "shift()", "delete"],
    answer_en: "pop()",
    answer_hi: "pop()",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which function delays code execution?",
    question_hi: "Code execution को delay करने के लिए कौन सा function उपयोग होता है?",
    options_en: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    options_hi: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    answer_en: "setTimeout()",
    answer_hi: "setTimeout()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which operator is used for string concatenation?",
    question_hi: "String concatenation के लिए कौन सा operator उपयोग होता है?",
    options_en: ["+", "-", "*", "/"],
    options_hi: ["+", "-", "*", "/"],
    answer_en: "+",
    answer_hi: "+",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Arrow functions were introduced in?",
    question_hi: "Arrow functions किस version में introduce हुए?",
    options_en: ["ES6", "ES5", "ES4", "ES3"],
    options_hi: ["ES6", "ES5", "ES4", "ES3"],
    answer_en: "ES6",
    answer_hi: "ES6",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which keyword is used to create a class?",
    question_hi: "Class बनाने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["class", "object", "function", "prototype"],
    options_hi: ["class", "object", "function", "prototype"],
    answer_en: "class",
    answer_hi: "class",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "typeof null returns?",
    question_hi: "typeof null क्या return करता है?",
    options_en: ["object", "null", "undefined", "string"],
    options_hi: ["object", "null", "undefined", "string"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which feature allows nested functions?",
    question_hi: "Nested functions को allow करने वाली feature कौन सी है?",
    options_en: ["Closure", "Loop", "Inheritance", "Hoisting"],
    options_hi: ["Closure", "Loop", "Inheritance", "Hoisting"],
    answer_en: "Closure",
    answer_hi: "Closure",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which operator assigns a value?",
    question_hi: "Value assign करने के लिए कौन सा operator उपयोग होता है?",
    options_en: ["=", "==", "===", "=>"],
    options_hi: ["=", "==", "===", "=>"],
    answer_en: "=",
    answer_hi: "=",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Promise represents?",
    question_hi: "Promise क्या represent करता है?",
    options_en: ["Future value", "Past value", "Only number", "Only string"],
    options_hi: ["Future value", "Past value", "Only number", "Only string"],
    answer_en: "Future value",
    answer_hi: "Future value",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Async function always returns?",
    question_hi: "Async function हमेशा क्या return करता है?",
    options_en: ["Promise", "String", "Array", "Null"],
    options_hi: ["Promise", "String", "Array", "Null"],
    answer_en: "Promise",
    answer_hi: "Promise",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which method is used to fetch API?",
    question_hi: "API call करने के लिए कौन सा method उपयोग होता है?",
    options_en: ["fetch()", "get()", "call()", "request()"],
    options_hi: ["fetch()", "get()", "call()", "request()"],
    answer_en: "fetch()",
    answer_hi: "fetch()",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What does 'this' keyword refer to?",
    question_hi: "'this' keyword किसको refer करता है?",
    options_en: ["Current object", "Parent object", "Global only", "None"],
    options_hi: ["Current object", "Parent object", "Global only", "None"],
    answer_en: "Current object",
    answer_hi: "Current object",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which storage stores data permanently?",
    question_hi: "Data को permanently store करने वाला storage कौन सा है?",
    options_en: ["localStorage", "sessionStorage", "cookie", "RAM"],
    options_hi: ["localStorage", "sessionStorage", "cookie", "RAM"],
    answer_en: "localStorage",
    answer_hi: "localStorage",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which operator checks nullish values?",
    question_hi: "Nullish values check करने के लिए कौन सा operator उपयोग होता है?",
    options_en: ["??", "||", "&&", "!"],
    options_hi: ["??", "||", "&&", "!"],
    answer_en: "??",
    answer_hi: "??",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which method filters array values?",
    question_hi: "Array values को filter करने के लिए कौन सा method उपयोग होता है?",
    options_en: ["filter()", "map()", "reduce()", "join()"],
    options_hi: ["filter()", "map()", "reduce()", "join()"],
    answer_en: "filter()",
    answer_hi: "filter()",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method converts string to array?",
    question_hi: "String को array में convert करने के लिए कौन सा method उपयोग होता है?",
    options_en: ["split()", "join()", "map()", "trim()"],
    options_hi: ["split()", "join()", "map()", "trim()"],
    answer_en: "split()",
    answer_hi: "split()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Event bubbling represents?",
    question_hi: "Event bubbling क्या दर्शाता है?",
    options_en: ["Inner to outer flow", "Outer to inner", "Stop event", "None"],
    options_hi: ["Inner to outer flow", "Outer to inner", "Stop event", "None"],
    answer_en: "Inner to outer flow",
    answer_hi: "Inner to outer flow",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which block handles errors?",
    question_hi: "Errors handle करने के लिए कौन सा block उपयोग होता है?",
    options_en: ["try-catch", "if-else", "switch", "loop"],
    options_hi: ["try-catch", "if-else", "switch", "loop"],
    answer_en: "try-catch",
    answer_hi: "try-catch",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which event occurs on button click?",
    question_hi: "Button click पर कौन सा event trigger होता है?",
    options_en: ["click", "press", "touch", "run"],
    options_hi: ["click", "press", "touch", "run"],
    answer_en: "click",
    answer_hi: "click",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which method sorts an array?",
    question_hi: "Array को sort करने के लिए कौन सा method उपयोग होता है?",
    options_en: ["sort()", "order()", "arrange()", "set()"],
    options_hi: ["sort()", "order()", "arrange()", "set()"],
    answer_en: "sort()",
    answer_hi: "sort()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which variables cannot be redeclared?",
    question_hi: "कौन से variables दोबारा declare नहीं किए जा सकते?",
    options_en: ["let & const", "var", "only let", "only var"],
    options_hi: ["let & const", "var", "only let", "only var"],
    answer_en: "let & const",
    answer_hi: "let & const",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Callback function means?",
    question_hi: "Callback function का क्या अर्थ है?",
    options_en: ["Function passed as argument", "Function with return", "Named function", "Static function"],
    options_hi: ["Function passed as argument", "Function with return", "Named function", "Static function"],
    answer_en: "Function passed as argument",
    answer_hi: "Function passed as argument",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which feature avoids callback hell?",
    question_hi: "Callback hell को avoid करने के लिए क्या उपयोग होता है?",
    options_en: ["Promise", "Loop", "Prototype", "Hoisting"],
    options_hi: ["Promise", "Loop", "Prototype", "Hoisting"],
    answer_en: "Promise",
    answer_hi: "Promise",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "typeof [] returns?",
    question_hi: "typeof [] क्या return करता है?",
    options_en: ["object", "array", "list", "string"],
    options_hi: ["object", "array", "list", "string"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which engine executes JavaScript?",
    question_hi: "JavaScript को execute करने वाला engine कौन सा है?",
    options_en: ["JS Engine", "Compiler", "Browser UI", "CSS Engine"],
    options_hi: ["JS Engine", "Compiler", "Browser UI", "CSS Engine"],
    answer_en: "JS Engine",
    answer_hi: "JS Engine",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Hoisting means?",
    question_hi: "Hoisting का क्या अर्थ है?",
    options_en: ["Declarations moved to top", "Sorting values", "Deleting variables", "Stopping execution"],
    options_hi: ["Declarations moved to top", "Sorting values", "Deleting variables", "Stopping execution"],
    answer_en: "Declarations moved to top",
    answer_hi: "Declarations moved to top",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which method repeats a string?",
    question_hi: "String को repeat करने के लिए कौन सा method उपयोग होता है?",
    options_en: ["repeat()", "copy()", "again()", "loop()"],
    options_hi: ["repeat()", "copy()", "again()", "loop()"],
    answer_en: "repeat()",
    answer_hi: "repeat()",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which operator is used for exponentiation?",
    question_hi: "Exponent के लिए कौन सा operator उपयोग होता है?",
    options_en: ["**", "*", "//", "^"],
    options_hi: ["**", "*", "//", "^"],
    answer_en: "**",
    answer_hi: "**",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which method finds the first matching element?",
    question_hi: "पहला matching element खोजने के लिए कौन सा method उपयोग होता है?",
    options_en: ["find()", "filter()", "concat()", "scan()"],
    options_hi: ["find()", "filter()", "concat()", "scan()"],
    answer_en: "find()",
    answer_hi: "find()",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which method checks if array contains a value?",
    question_hi: "Array में value मौजूद है या नहीं यह check करने के लिए कौन सा method उपयोग होता है?",
    options_en: ["includes()", "splice()", "slice()", "exist()"],
    options_hi: ["includes()", "splice()", "slice()", "exist()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which keyword stops function execution?",
    question_hi: "Function execution को रोकने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["return", "break", "stop", "exit"],
    options_hi: ["return", "break", "stop", "exit"],
    answer_en: "return",
    answer_hi: "return",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "typeof NaN returns?",
    question_hi: "typeof NaN क्या return करता है?",
    options_en: ["number", "NaN", "undefined", "string"],
    options_hi: ["number", "NaN", "undefined", "string"],
    answer_en: "number",
    answer_hi: "number",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which method executes code repeatedly?",
    question_hi: "Code को बार-बार execute करने के लिए कौन सा method उपयोग होता है?",
    options_en: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    options_hi: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    answer_en: "setInterval()",
    answer_hi: "setInterval()",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which JavaScript feature supports asynchronous code?",
    question_hi: "Asynchronous code को support करने वाली JavaScript feature कौन सी है?",
    options_en: ["Promise", "Loop", "Array", "Object"],
    options_hi: ["Promise", "Loop", "Array", "Object"],
    answer_en: "Promise",
    answer_hi: "Promise",
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
