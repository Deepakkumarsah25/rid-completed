 const questions=[
  {
    "num": 1,
    "question_en": "JavaScript was originally created to run in which environment?",
    "question_hi": "JavaScript मूल रूप से किस environment में चलाने के लिए बनाई गई थी?",
    "options": { "a": "Backend", "b": "Browser", "c": "Mobile", "d": "Database" },
    "answer": "b"
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to declare a variable with block scope?",
    "question_hi": "Block scope variable declare करने के लिए कौन सा keyword उपयोग होता है?",
    "options": { "a": "var", "b": "let", "c": "static", "d": "global" },
    "answer": "b"
  },
  {
    "num": 3,
    "question_en": "JavaScript supports which type of data structure by default?",
    "question_hi": "JavaScript डिफ़ॉल्ट रूप से किस प्रकार की data structure को सपोर्ट करता है?",
    "options": { "a": "Stack", "b": "Queue", "c": "Dynamic Array", "d": "Linked List" },
    "answer": "c"
  },
  {
    "num": 4,
    "question_en": "Which operator checks both value and type?",
    "question_hi": "कौन सा ऑपरेटर value और type दोनों को चेक करता है?",
    "options": { "a": "==", "b": "=", "c": "===", "d": "!==" },
    "answer": "c"
  },
  {
    "num": 5,
    "question_en": "Which function is used to display messages in console?",
    "question_hi": "Console में message दिखाने के लिए कौन सा function उपयोग किया जाता है?",
    "options": { "a": "alert()", "b": "console.log()", "c": "display()", "d": "message()" },
    "answer": "b"
  },
  {
    "num": 6,
    "question_en": "Which of the following is NOT a JavaScript data type?",
    "question_hi": "निम्न में से कौन JavaScript का data type नहीं है?",
    "options": { "a": "Number", "b": "Boolean", "c": "Character", "d": "Undefined" },
    "answer": "c"
  },
  {
    "num": 7,
    "question_en": "Which built-in object handles date and time in JavaScript?",
    "question_hi": "JavaScript में date और time संभालने के लिए कौन सा built-in object उपयोग होता है?",
    "options": { "a": "Clock", "b": "Time", "c": "Date", "d": "Moment" },
    "answer": "c"
  },
  {
    "num": 8,
    "question_en": "Which symbol is used for single-line comments?",
    "question_hi": "Single-line comment के लिए कौन सा symbol उपयोग होता है?",
    "options": { "a": "#", "b": "//", "c": "<!-- -->", "d": "/* */" },
    "answer": "b"
  },
  {
    "num": 9,
    "question_en": "Which method removes the last element of an array?",
    "question_hi": "कौन सा method array का आखिरी element हटाता है?",
    "options": { "a": "push()", "b": "pop()", "c": "shift()", "d": "unshift()" },
    "answer": "b"
  },
  {
    "num": 10,
    "question_en": "Which function converts JSON string to object?",
    "question_hi": "JSON string को object में बदलने के लिए कौन सा function उपयोग किया जाता है?",
    "options": { "a": "JSON.stringify()", "b": "JSON.parse()", "c": "Object.parse()", "d": "parseJSON()" },
    "answer": "b"
  },
  {
    "num": 11,
    "question_en": "Which event triggers when a user types inside an input field?",
    "question_hi": "जब यूजर input field में कुछ टाइप करता है तो कौन सा event trigger होता है?",
    "options": { "a": "onload", "b": "onclick", "c": "oninput", "d": "onscroll" },
    "answer": "c"
  },
  {
    "num": 12,
    "question_en": "Which value represents 'Not a Number' in JavaScript?",
    "question_hi": "JavaScript में 'Not a Number' को कौन value दर्शाती है?",
    "options": { "a": "null", "b": "NaN", "c": "undefined", "d": "false" },
    "answer": "b"
  },
  {
    "num": 13,
    "question_en": "Which loop executes at least once even if the condition is false?",
    "question_hi": "कौन सा loop condition false होने पर भी कम से कम एक बार execute होता है?",
    "options": { "a": "while", "b": "for", "c": "do-while", "d": "foreach" },
    "answer": "c"
  },
  {
    "num": 14,
    "question_en": "What does DOM stand for?",
    "question_hi": "DOM का पूरा नाम क्या है?",
    "options": { "a": "Data Object Manager", "b": "Document Object Model", "c": "Design Object Module", "d": "Dynamic Output Manager" },
    "answer": "b"
  },
  {
    "num": 15,
    "question_en": "Which keyword stops loop execution?",
    "question_hi": "Loop execution रोकने के लिए कौन सा keyword उपयोग होता है?",
    "options": { "a": "pause", "b": "stop", "c": "break", "d": "exit" },
    "answer": "c"
  },
  {
    "num": 16,
    "question_en": "Which operator performs exponentiation?",
    "question_hi": "Exponentiation करने के लिए कौन सा operator उपयोग होता है?",
    "options": { "a": "^", "b": "**", "c": "exp()", "d": "//" },
    "answer": "b"
  },
  {
    "num": 17,
    "question_en": "Which operator is used for logical AND?",
    "question_hi": "Logical AND के लिए कौन सा operator उपयोग होता है?",
    "options": { "a": "&&", "b": "||", "c": "??", "d": "!=" },
    "answer": "a"
  },
  {
    "num": 18,
    "question_en": "JavaScript variables are:",
    "question_hi": "JavaScript में variables कैसे होते हैं?",
    "options": { "a": "Strongly typed", "b": "Loosely typed", "c": "Static typed", "d": "Machine typed" },
    "answer": "b"
  },
  {
    "num": 19,
    "question_en": "Which method converts a string to uppercase?",
    "question_hi": "String को uppercase में बदलने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "upper()", "b": "toUpperCase()", "c": "uppercase()", "d": "stringUpper()" },
    "answer": "b"
  },
  {
    "num": 20,
    "question_en": "Which JavaScript method is used to delay function execution?",
    "question_hi": "Function execution delay करने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "delay()", "b": "wait()", "c": "setTimeout()", "d": "timeout()" },
    "answer": "c"
  },
  {
    "num": 21,
    "question_en": "Which method repeats execution continuously?",
    "question_hi": "कौन सा method repeatedly execution करता है?",
    "options": { "a": "setTimeout()", "b": "setInterval()", "c": "loop()", "d": "repeat()" },
    "answer": "b"
  },
  {
    "num": 22,
    "question_en": "What is the default starting index of an array in JavaScript?",
    "question_hi": "JavaScript में array की indexing किस संख्या से शुरू होती है?",
    "options": { "a": "1", "b": "2", "c": "0", "d": "-1" },
    "answer": "c"
  },
  {
    "num": 23,
    "question_en": "Which function converts a number to a string?",
    "question_hi": "Number को string में बदलने के लिए कौन सा function उपयोग होता है?",
    "options": { "a": "Number()", "b": "toString()", "c": "Stringify()", "d": "Convert()" },
    "answer": "b"
  },
  {
    "num": 24,
    "question_en": "Which method removes the first element of an array?",
    "question_hi": "Array का पहला element हटाने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "shift()", "b": "unshift()", "c": "pop()", "d": "remove()" },
    "answer": "a"
  },
  {
    "num": 25,
    "question_en": "Which value denotes absence of value?",
    "question_hi": "कौन सी value absence of value को दर्शाती है?",
    "options": { "a": "null", "b": "0", "c": "NaN", "d": "false" },
    "answer": "a"
  },
  {
    "num": 26,
    "question_en": "Which keyword defines a constant variable?",
    "question_hi": "Constant variable declare करने के लिए कौन सा keyword उपयोग होता है?",
    "options": { "a": "var", "b": "let", "c": "const", "d": "static" },
    "answer": "c"
  },
  {
    "num": 27,
    "question_en": "Which method sorts an array?",
    "question_hi": "Array को sort करने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "sort()", "b": "order()", "c": "arrange()", "d": "map()" },
    "answer": "a"
  },
  {
    "num": 28,
    "question_en": "JavaScript is a ___ programming language.",
    "question_hi": "JavaScript एक ___ programming language है।",
    "options": { "a": "Compiled", "b": "Interpreted", "c": "SQL Based", "d": "Machine" },
    "answer": "b"
  },
  {
    "num": 29,
    "question_en": "Which event occurs when a webpage finishes loading?",
    "question_hi": "जब webpage load होकर पूरा समाप्त हो जाता है तो कौन सा event trigger होता है?",
    "options": { "a": "onclick", "b": "onload", "c": "change", "d": "enter" },
    "answer": "b"
  },
  {
    "num": 30,
    "question_en": "Which method is used to add an element at the start of an array?",
    "question_hi": "Array की शुरुआत में element जोड़ने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "push()", "b": "unshift()", "c": "shift()", "d": "prepend()" },
    "answer": "b"
  },
  {
    "num": 31,
    "question_en": "Which method is used to find an item in array?",
    "question_hi": "Array में item खोजने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "includes()", "b": "push()", "c": "slice()", "d": "trim()" },
    "answer": "a"
  },
  {
    "num": 32,
    "question_en": "What will be the output of true + true?",
    "question_hi": "true + true का output क्या होगा?",
    "options": { "a": "2", "b": "true", "c": "NaN", "d": "undefined" },
    "answer": "a"
  },
  {
    "num": 33,
    "question_en": "Which method removes whitespace from both ends of a string?",
    "question_hi": "String के दोनों तरफ से whitespace हटाने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "trim()", "b": "slice()", "c": "removeSpace()", "d": "substring()" },
    "answer": "a"
  },
  {
    "num": 34,
    "question_en": "Which keyword is used to handle errors?",
    "question_hi": "Errors handle करने के लिए कौन सा keyword उपयोग होता है?",
    "options": { "a": "catch", "b": "hold", "c": "stop", "d": "wait" },
    "answer": "a"
  },
  {
    "num": 35,
    "question_en": "Which function takes user input?",
    "question_hi": "User input लेने के लिए कौन सा function उपयोग होता है?",
    "options": { "a": "prompt()", "b": "console()", "c": "display()", "d": "input()" },
    "answer": "a"
  },
  {
    "num": 36,
    "question_en": "Which operator is used for logical OR?",
    "question_hi": "Logical OR के लिए कौन सा operator उपयोग किया जाता है?",
    "options": { "a": "||", "b": "&&", "c": "==", "d": "===" },
    "answer": "a"
  },
  {
    "num": 37,
    "question_en": "Which method combines two or more arrays?",
    "question_hi": "दो या अधिक arrays को जोड़ने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "combine()", "b": "concat()", "c": "merge()", "d": "append()" },
    "answer": "b"
  },
  {
    "num": 38,
    "question_en": "Which method returns part of an array without modifying it?",
    "question_hi": "Array का हिस्सा बिना उसे modify किए कौन सा method return करता है?",
    "options": { "a": "splice()", "b": "slice()", "c": "trim()", "d": "reduce()" },
    "answer": "b"
  },
  {
    "num": 39,
    "question_en": "Which method executes a function for each array element?",
    "question_hi": "कौन सा method array के हर element पर function execute करता है?",
    "options": { "a": "forEach()", "b": "reduce()", "c": "sort()", "d": "slice()" },
    "answer": "a"
  },
  {
    "num": 40,
    "question_en": "`===` operator compares:",
    "question_hi": "`===` operator क्या compare करता है?",
    "options": { "a": "Only value", "b": "Only type", "c": "Value and type both", "d": "None" },
    "answer": "c"
  },
  {
    "num": 41,
    "question_en": "Which method converts an object into JSON string?",
    "question_hi": "Object को JSON string में बदलने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "JSON.parse()", "b": "JSON.stringify()", "c": "toJSON()", "d": "Object.toString()" },
    "answer": "b"
  },
  {
    "num": 42,
    "question_en": "What will be output of: typeof undefined?",
    "question_hi": "typeof undefined का output क्या होगा?",
    "options": { "a": "undefined", "b": "object", "c": "null", "d": "string" },
    "answer": "a"
  },
  {
    "num": 43,
    "question_en": "What will be output of: typeof null?",
    "question_hi": "typeof null का output क्या होगा?",
    "options": { "a": "null", "b": "object", "c": "number", "d": "undefined" },
    "answer": "b"
  },
  {
    "num": 44,
    "question_en": "Which symbol is used to create template literals?",
    "question_hi": "Template literals बनाने के लिए कौन सा symbol उपयोग होता है?",
    "options": { "a": "'", "b": "\"", "c": "`", "d": "~" },
    "answer": "c"
  },
  {
    "num": 45,
    "question_en": "Which method returns the length of an array?",
    "question_hi": "Array की length पता करने के लिए कौन सी property उपयोग होती है?",
    "options": { "a": "size()", "b": "length", "c": "count()", "d": "total()" },
    "answer": "b"
  },
  {
    "num": 46,
    "question_en": "Functions in JavaScript are:",
    "question_hi": "JavaScript में functions कैसे होते हैं?",
    "options": { "a": "Data type", "b": "Objects", "c": "Keywords", "d": "Events" },
    "answer": "b"
  },
  {
    "num": 47,
    "question_en": "Which method removes items from array?",
    "question_hi": "Array से items हटाने के लिए कौन सा method उपयोग होता है?",
    "options": { "a": "slice()", "b": "splice()", "c": "split()", "d": "trim()" },
    "answer": "b"
  },
  {
    "num": 48,
    "question_en": "Which feature allows asynchronous handling in JavaScript?",
    "question_hi": "JavaScript में asynchronous handling किसके द्वारा होती है?",
    "options": { "a": "Callbacks", "b": "Promises", "c": "Async/Await", "d": "All of the above" },
    "answer": "d"
  },
  {
    "num": 49,
    "question_en": "Arrow functions were introduced in which version?",
    "question_hi": "Arrow function JavaScript में किस version में introduce हुए?",
    "options": { "a": "ES3", "b": "ES5", "c": "ES6", "d": "ES2" },
    "answer": "c"
  },
  {
    "num": 50,
    "question_en": "Which feature allows default parameter values in functions?",
    "question_hi": "Function में default parameter values किस feature से दी जाती हैं?",
    "options": { "a": "ES5", "b": "ES6", "c": "Callbacks", "d": "Hoisting" },
    "answer": "b"
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
