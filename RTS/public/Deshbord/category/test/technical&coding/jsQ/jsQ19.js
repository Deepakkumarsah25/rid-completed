 const questions=[
  {
    "num": 1,
    "question_en": "Which type of language is JavaScript?",
    "question_hi": "JavaScript किस प्रकार की भाषा है?",
    "options": ["Interpreted", "Compiled", "Both", "None"],
    "answer": "Interpreted"
  },
  {
    "num": 2,
    "question_en": "Which symbol is used for comments in JavaScript?",
    "question_hi": "JavaScript में comments के लिए कौन सा symbol उपयोग होता है?",
    "options": ["//", "/* */", "#", "<!--"],
    "answer": "//"
  },
  {
    "num": 3,
    "question_en": "Which method converts a number to an integer?",
    "question_hi": "Number को integer में बदलने के लिए कौन सा method उपयोग होता है?",
    "options": ["parseInt()", "parseFloat()", "Number()", "int()"],
    "answer": "parseInt()"
  },
  {
    "num": 4,
    "question_en": "Which operator returns the type of a variable?",
    "question_hi": "Variable का type जानने के लिए कौन सा operator उपयोग होता है?",
    "options": ["typeof", "type", "instanceof", "check"],
    "answer": "typeof"
  },
  {
    "num": 5,
    "question_en": "Which method removes whitespace from both sides of a string?",
    "question_hi": "String के दोनों तरफ से whitespace हटाने के लिए कौन सा method उपयोग होता है?",
    "options": ["trim()", "slice()", "clean()", "strip()"],
    "answer": "trim()"
  },
  {
    "num": 6,
    "question_en": "Which event is fired when a button is clicked?",
    "question_hi": "Button क्लिक होने पर कौन सा event चलता है?",
    "options": ["onclick", "onhover", "onpress", "onload"],
    "answer": "onclick"
  },
  {
    "num": 7,
    "question_en": "Which method finds the first element that matches a condition?",
    "question_hi": "Condition match करने वाला पहला element लौटाने के लिए कौन सा method उपयोग होता है?",
    "options": ["find()", "filter()", "map()", "search()"],
    "answer": "find()"
  },
  {
    "num": 8,
    "question_en": "Which loop runs at least once even if condition is false?",
    "question_hi": "कौन सा loop एक बार जरूर चलता है?",
    "options": ["do...while", "while", "for", "for...of"],
    "answer": "do...while"
  },
  {
    "num": 9,
    "question_en": "Which object is the root of the browser environment?",
    "question_hi": "Browser environment का root object कौन है?",
    "options": ["window", "document", "console", "screen"],
    "answer": "window"
  },
  {
    "num": 10,
    "question_en": "Which function displays a popup alert box?",
    "question_hi": "Popup alert दिखाने के लिए कौन सा function उपयोग होता है?",
    "options": ["alert()", "popup()", "msg()", "print()"],
    "answer": "alert()"
  },
  {
    "num": 11,
    "question_en": "Which operator is used for exponentiation?",
    "question_hi": "Exponentiation के लिए कौन सा operator उपयोग होता है?",
    "options": ["**", "^", "pow", "exp"],
    "answer": "**"
  },
  {
    "num": 12,
    "question_en": "Which keyword defines a default value in a function parameter?",
    "question_hi": "Function parameter में default value देने के लिए कौन सा keyword उपयोग होता है?",
    "options": ["=", "default", "set", ":"],
    "answer": "="
  },
  {
    "num": 13,
    "question_en": "Which method converts an array to a string?",
    "question_hi": "Array को string में बदलने के लिए कौन सा method उपयोग होता है?",
    "options": ["toString()", "join()", "string()", "convert()"],
    "answer": "toString()"
  },
  {
    "num": 14,
    "question_en": "Which function logs data to the console?",
    "question_hi": "Console में data दिखाने के लिए कौन सा function उपयोग होता है?",
    "options": ["console.log()", "print()", "write()", "log.print()"],
    "answer": "console.log()"
  },
  {
    "num": 15,
    "question_en": "Which method returns the length of a string?",
    "question_hi": "String की length जानने के लिए कौन सा property उपयोग होता है?",
    "options": ["length", "size()", "count()", "total()"],
    "answer": "length"
  },
  {
    "num": 16,
    "question_en": "Which operator is used for ternary operation?",
    "question_hi": "Ternary operation के लिए कौन सा operator उपयोग होता है?",
    "options": ["?:", "??", "&&", "||"],
    "answer": "?:"
  },
  {
    "num": 17,
    "question_en": "Which method delays execution of a function?",
    "question_hi": "Function execution delay करने के लिए कौन सा method उपयोग होता है?",
    "options": ["setTimeout()", "setInterval()", "wait()", "delay()"],
    "answer": "setTimeout()"
  },
  {
    "num": 18,
    "question_en": "Which operator gives remainder?",
    "question_hi": "Remainder निकालने के लिए कौन सा operator उपयोग होता है?",
    "options": ["%", "/", "*", "//"],
    "answer": "%"
  },
  {
    "num": 19,
    "question_en": "Which keyword is used to create an object?",
    "question_hi": "Object बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options": ["new", "create", "object", "this"],
    "answer": "new"
  },
  {
    "num": 20,
    "question_en": "Which function repeatedly executes code at fixed intervals?",
    "question_hi": "Regular interval पर code execute करने के लिए कौन सा function उपयोग होता है?",
    "options": ["setInterval()", "setTimeout()", "repeat()", "timer()"],
    "answer": "setInterval()"
  },
  {
    "num": 21,
    "question_en": "Which data type can hold multiple values?",
    "question_hi": "कौन सा data type कई values को hold कर सकता है?",
    "options": ["Array", "Number", "Boolean", "Null"],
    "answer": "Array"
  },
  {
    "num": 22,
    "question_en": "Which method returns current date & time?",
    "question_hi": "Current date और time प्राप्त करने के लिए कौन सा constructor उपयोग होता है?",
    "options": ["Date()", "Time()", "Clock()", "Now()"],
    "answer": "Date()"
  },
  {
    "num": 23,
    "question_en": "Which operator checks if a variable is not equal?",
    "question_hi": "Not equal check करने के लिए कौन सा operator है?",
    "options": ["!=", "!==", "=", "=="],
    "answer": "!="
  },
  {
    "num": 24,
    "question_en": "Which operator checks not-equal and type both?",
    "question_hi": "Type और value दोनों compare करने के लिए कौन सा operator उपयोग होता है?",
    "options": ["!==", "!=", "===", "=="],
    "answer": "!=="
  },
  {
    "num": 25,
    "question_en": "Which method merges two objects?",
    "question_hi": "दो objects को merge करने के लिए कौन सा method उपयोग होता है?",
    "options": ["Object.assign()", "merge()", "combine()", "Object.join()"],
    "answer": "Object.assign()"
  },
  {
    "num": 26,
    "question_en": "Which loop iterates over object keys?",
    "question_hi": "Object keys पर iterate करने के लिए कौन सा loop होता है?",
    "options": ["for...in", "for...of", "for", "while"],
    "answer": "for...in"
  },
  {
    "num": 27,
    "question_en": "Which loop iterates over array values?",
    "question_hi": "Array values पर iterate करने के लिए कौन सा loop होता है?",
    "options": ["for...of", "for...in", "while", "foreach"],
    "answer": "for...of"
  },
  {
    "num": 28,
    "question_en": "Which method returns keys of an object?",
    "question_hi": "Object की keys प्राप्त करने के लिए कौन सा method उपयोग होता है?",
    "options": ["Object.keys()", "Object.values()", "Object.list()", "Object.items()"],
    "answer": "Object.keys()"
  },
  {
    "num": 29,
    "question_en": "Which method returns values of an object?",
    "question_hi": "Object की values प्राप्त करने के लिए कौन सा method उपयोग होता है?",
    "options": ["Object.values()", "Object.keys()", "Object.data()", "values()"],
    "answer": "Object.values()"
  },
  {
    "num": 30,
    "question_en": "Which method returns key-value pairs of an object?",
    "question_hi": "Object के key-value pairs प्राप्त करने के लिए कौन सा method उपयोग होता है?",
    "options": ["Object.entries()", "Object.values()", "Object.keys()", "pairs()"],
    "answer": "Object.entries()"
  },
  {
    "num": 31,
    "question_en": "Which method creates an array from a string?",
    "question_hi": "String से array बनाने के लिए कौन सा method उपयोग होता है?",
    "options": ["split()", "join()", "slice()", "cut()"],
    "answer": "split()"
  },
  {
    "num": 32,
    "question_en": "Which method extracts a part of a string?",
    "question_hi": "String का हिस्सा निकालने के लिए कौन सा method उपयोग होता है?",
    "options": ["slice()", "trim()", "split()", "copy()"],
    "answer": "slice()"
  },
  {
    "num": 33,
    "question_en": "Which operator performs nullish coalescing?",
    "question_hi": "Nullish coalescing के लिए कौन सा operator है?",
    "options": ["??", "||", "&&", "??="],
    "answer": "??"
  },
  {
    "num": 34,
    "question_en": "Which operator assigns value only if variable is null or undefined?",
    "question_hi": "Variable null या undefined होने पर value assign करने के लिए कौन सा operator है?",
    "options": ["??=", "||=", "&&=", "="],
    "answer": "??="
  },
  {
    "num": 35,
    "question_en": "Which function converts a string to lowercase?",
    "question_hi": "String को lowercase में बदलने के लिए कौन सा method उपयोग होता है?",
    "options": ["toLowerCase()", "lower()", "small()", "down()"],
    "answer": "toLowerCase()"
  },
  {
    "num": 36,
    "question_en": "Which function converts a string to uppercase?",
    "question_hi": "String को uppercase में बदलने के लिए कौन सा method है?",
    "options": ["toUpperCase()", "upper()", "big()", "capitalize()"],
    "answer": "toUpperCase()"
  },
  {
    "num": 37,
    "question_en": "Which method checks array type?",
    "question_hi": "Array check करने के लिए कौन सा method उपयोग होता है?",
    "options": ["Array.isArray()", "isArray()", "typeof", "instanceof"],
    "answer": "Array.isArray()"
  },
  {
    "num": 38,
    "question_en": "Which method finds index using a condition?",
    "question_hi": "Condition match करने वाले element का index लौटाने के लिए कौन सा method है?",
    "options": ["findIndex()", "indexOf()", "search()", "filter()"],
    "answer": "findIndex()"
  },
  {
    "num": 39,
    "question_en": "Which method creates a promise?",
    "question_hi": "Promise बनाने के लिए कौन सा syntax सही है?",
    "options": ["new Promise()", "create Promise()", "promise()", "Promise.create()"],
    "answer": "new Promise()"
  },
  {
    "num": 40,
    "question_en": "Which method converts a JavaScript object to JSON?",
    "question_hi": "Object को JSON में बदलने के लिए कौन सा method है?",
    "options": ["JSON.stringify()", "JSON.parse()", "JSON.toText()", "Object.json()"],
    "answer": "JSON.stringify()"
  },
  {
    "num": 41,
    "question_en": "Which event runs when the webpage finishes loading?",
    "question_hi": "Page load होने के बाद कौन सा event चलता है?",
    "options": ["onload", "onclick", "onstart", "finish"],
    "answer": "onload"
  },
  {
    "num": 42,
    "question_en": "Which method checks if any element passes a condition?",
    "question_hi": "किसी एक element के condition pass करने की जांच के लिए कौन सा method है?",
    "options": ["some()", "every()", "filter()", "exists()"],
    "answer": "some()"
  },
  {
    "num": 43,
    "question_en": "Which method repeats a string?",
    "question_hi": "String को बार-बार दोहराने के लिए कौन सा method उपयोग होता है?",
    "options": ["repeat()", "copy()", "duplicate()", "loop()"],
    "answer": "repeat()"
  },
  {
    "num": 44,
    "question_en": "Which method returns substring using start and end index?",
    "question_hi": "Start और end index के बीच substring निकालने के लिए कौन सा method है?",
    "options": ["substring()", "slice()", "substr()", "split()"],
    "answer": "substring()"
  },
  {
    "num": 45,
    "question_en": "Which statement is used to stop function execution?",
    "question_hi": "Function execution रोकने के लिए कौन सा statement उपयोग होता है?",
    "options": ["return", "break", "stop", "exit"],
    "answer": "return"
  },
  {
    "num": 46,
    "question_en": "Which method converts a string to an array of characters?",
    "question_hi": "String को characters की array बनाने के लिए कौन सा method है?",
    "options": ["split('')", "slice()", "join()", "charArray()"],
    "answer": "split('')"
  },
  {
    "num": 47,
    "question_en": "Which operator is used to compare reference types?",
    "question_hi": "Reference types compare करने के लिए कौन सा operator उपयोग होता है?",
    "options": ["===", "==", "!=", "compare()"],
    "answer": "==="
  },
  {
    "num": 48,
    "question_en": "Which method returns the last index of an element in array?",
    "question_hi": "Array में element का आखिरी index लौटाने के लिए कौन सा method है?",
    "options": ["lastIndexOf()", "indexOf()", "findIndex()", "search()"],
    "answer": "lastIndexOf()"
  },
  {
    "num": 49,
    "question_en": "Which method creates a new array by concatenating arrays?",
    "question_hi": "Arrays को जोड़कर नया array बनाने के लिए कौन सा method है?",
    "options": ["concat()", "merge()", "add()", "push()"],
    "answer": "concat()"
  },
  {
    "num": 50,
    "question_en": "Which method checks if all elements in an array satisfy a condition?",
    "question_hi": "Array के सभी elements के condition satisfy करने की जांच के लिए कौन सा method है?",
    "options": ["every()", "some()", "filter()", "includes()"],
    "answer": "every()"
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
