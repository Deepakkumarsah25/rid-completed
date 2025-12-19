 const questions=[
  {
    "num": 1,
    "question_en": "What does JS stand for?",
    "question_hi": "JS का पूरा नाम क्या है?",
    "options": ["JavaScript", "JavaStyle", "JustScript", "JumboScript"],
    "answer": "JavaScript"
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to declare a variable in JavaScript?",
    "question_hi": "JavaScript में variable declare करने के लिए कौन सा keyword उपयोग होता है?",
    "options": ["var", "int", "let", "static"],
    "answer": "var"
  },
  {
    "num": 3,
    "question_en": "Which method displays data in the browser console?",
    "question_hi": "Browser console में data दिखाने के लिए कौन सा method उपयोग होता है?",
    "options": ["console.log()", "alert()", "print()", "show()"],
    "answer": "console.log()"
  },
  {
    "num": 4,
    "question_en": "Which data type is NOT primitive in JavaScript?",
    "question_hi": "JavaScript में कौन सा data type primitive नहीं है?",
    "options": ["String", "Number", "Object", "Boolean"],
    "answer": "Object"
  },
  {
    "num": 5,
    "question_en": "Which operator checks both value and type?",
    "question_hi": "कौन सा operator value और type दोनों compare करता है?",
    "options": ["===", "==", "!=", "="],
    "answer": "==="
  },
  {
    "num": 6,
    "question_en": "Which symbol is used for comments in JavaScript?",
    "question_hi": "JavaScript में comment के लिए कौन सा symbol उपयोग होता है?",
    "options": ["//", "##", "!!", "@@"],
    "answer": "//"
  },
  {
    "num": 7,
    "question_en": "Which loop runs at least once even if the condition is false?",
    "question_hi": "कौन सी loop condition false होने पर भी कम से कम एक बार चलती है?",
    "options": ["do...while", "while", "for", "forEach"],
    "answer": "do...while"
  },
  {
    "num": 8,
    "question_en": "Which method removes whitespace from both sides of a string?",
    "question_hi": "कौन सा method string के दोनों तरफ की space हटाता है?",
    "options": ["trim()", "slice()", "clean()", "strip()"],
    "answer": "trim()"
  },
  {
    "num": 9,
    "question_en": "Which of the following is used to define a constant?",
    "question_hi": "कौन सा keyword constant define करता है?",
    "options": ["var", "final", "const", "static"],
    "answer": "const"
  },
  {
    "num": 10,
    "question_en": "What type of language is JavaScript?",
    "question_hi": "JavaScript किस प्रकार की भाषा है?",
    "options": ["Scripting", "Machine", "Database", "Markup"],
    "answer": "Scripting"
  },
  {
    "num": 11,
    "question_en": "Which function converts a JSON string into an object?",
    "question_hi": "JSON string को object में बदलने के लिए कौन सा function उपयोग होता है?",
    "options": ["JSON.stringify()", "JSON.parse()", "parseInt()", "Object.assign()"],
    "answer": "JSON.parse()"
  },
  {
    "num": 12,
    "question_en": "What is the file extension of JavaScript?",
    "question_hi": "JavaScript file का extension क्या है?",
    "options": [".js", ".java", ".script", ".css"],
    "answer": ".js"
  },
  {
    "num": 13,
    "question_en": "Which operator is used for exponentiation?",
    "question_hi": "Exponentiation के लिए कौन सा operator उपयोग होता है?",
    "options": ["**", "//", "^^", "==="],
    "answer": "**"
  },
  {
    "num": 14,
    "question_en": "Which method is used to convert a number to a string?",
    "question_hi": "Number को string में convert करने के लिए कौन सा method उपयोग होता है?",
    "options": ["toString()", "parseInt()", "convert()", "stringify()"],
    "answer": "toString()"
  },
  {
    "num": 15,
    "question_en": "Which event triggers when a button is clicked?",
    "question_hi": "Button click होने पर कौन सा event trigger होता है?",
    "options": ["onclick", "onpress", "onstart", "onload"],
    "answer": "onclick"
  },
  {
    "num": 16,
    "question_en": "Which statement stops a loop?",
    "question_hi": "किस statement से loop रुक जाती है?",
    "options": ["break", "stop", "exit", "return"],
    "answer": "break"
  },
  {
    "num": 17,
    "question_en": "Which method adds an element to the end of an array?",
    "question_hi": "कौन सा method array के अंत में element जोड़ता है?",
    "options": ["push()", "pop()", "shift()", "insert()"],
    "answer": "push()"
  },
  {
    "num": 18,
    "question_en": "Which method removes the last element of an array?",
    "question_hi": "कौन सा method array से आखिरी element हटाता है?",
    "options": ["pop()", "shift()", "push()", "splice()"],
    "answer": "pop()"
  },
  {
    "num": 19,
    "question_en": "Which function is used to show popup alerts?",
    "question_hi": "Popup alert दिखाने के लिए कौन सा function उपयोग होता है?",
    "options": ["alert()", "log()", "popup()", "notify()"],
    "answer": "alert()"
  },
  {
    "num": 20,
    "question_en": "What will typeof null return?",
    "question_hi": "typeof null क्या return करेगा?",
    "options": ["object", "null", "undefined", "number"],
    "answer": "object"
  },
  {
    "num": 21,
    "question_en": "What is NaN in JavaScript?",
    "question_hi": "JavaScript में NaN क्या दर्शाता है?",
    "options": ["Not a Number", "New Array Number", "Null And Number", "Node and Network"],
    "answer": "Not a Number"
  },
  {
    "num": 22,
    "question_en": "Which feature allows writing functions without names?",
    "question_hi": "कौन सी feature functions को बिना नाम के लिखने देती है?",
    "options": ["Anonymous Functions", "Classes", "Modules", "Packages"],
    "answer": "Anonymous Functions"
  },
  {
    "num": 23,
    "question_en": "Which keyword refers to the current object?",
    "question_hi": "कौन सा keyword current object को refer करता है?",
    "options": ["this", "self", "object", "current"],
    "answer": "this"
  },
  {
    "num": 24,
    "question_en": "What is the default value of an unassigned variable?",
    "question_hi": "Unassigned variable का default value क्या होता है?",
    "options": ["undefined", "null", "0", "empty"],
    "answer": "undefined"
  },
  {
    "num": 25,
    "question_en": "Which method merges two arrays?",
    "question_hi": "कौन सा method दो arrays को merge करता है?",
    "options": ["concat()", "join()", "merge()", "pushAll()"],
    "answer": "concat()"
  },
  {
    "num": 26,
    "question_en": "Which loop is used to iterate through object properties?",
    "question_hi": "Object के properties iterate करने के लिए कौन सी loop उपयोग होती है?",
    "options": ["for...in", "for...of", "do...while", "while"],
    "answer": "for...in"
  },
  {
    "num": 27,
    "question_en": "Which method returns the first matching element in an array?",
    "question_hi": "कौन सा method array में पहला matching element return करता है?",
    "options": ["find()", "filter()", "search()", "match()"],
    "answer": "find()"
  },
  {
    "num": 28,
    "question_en": "Which syntax creates an arrow function?",
    "question_hi": "Arrow function लिखने का सही syntax कौन सा है?",
    "options": ["()=>{}", "function => {}", "=>function()", "arrow()"],
    "answer": "()=>{}"
  },
  {
    "num": 29,
    "question_en": "Which method converts an object to JSON?",
    "question_hi": "Object को JSON में convert करने के लिए कौन सा method उपयोग होता है?",
    "options": ["JSON.stringify()", "JSON.parse()", "toJSON()", "string()"],
    "answer": "JSON.stringify()"
  },
  {
    "num": 30,
    "question_en": "Which function runs after a specific delay?",
    "question_hi": "कौन सा function delay के बाद execute होता है?",
    "options": ["setTimeout()", "setDelay()", "wait()", "after()"],
    "answer": "setTimeout()"
  },
  {
    "num": 31,
    "question_en": "Which function repeats execution at intervals?",
    "question_hi": "कौन सा function बार-बार execute होता है?",
    "options": ["setInterval()", "setRepeat()", "loop()", "repeatInterval()"],
    "answer": "setInterval()"
  },
  {
    "num": 32,
    "question_en": "Which keyword handles errors in JavaScript?",
    "question_hi": "JavaScript में error handling के लिए कौन सा keyword उपयोग होता है?",
    "options": ["try", "catch", "handle", "except"],
    "answer": "try"
  },
  {
    "num": 33,
    "question_en": "Which statement runs when an error occurs?",
    "question_hi": "Error आने पर कौन सा block run होता है?",
    "options": ["catch", "try", "else", "finally"],
    "answer": "catch"
  },
  {
    "num": 34,
    "question_en": "Which keyword creates a class?",
    "question_hi": "Class बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options": ["class", "object", "function", "struct"],
    "answer": "class"
  },
  {
    "num": 35,
    "question_en": "Which method is used to access HTML elements by ID?",
    "question_hi": "HTML element को ID से access करने के लिए कौन सा method उपयोग होता है?",
    "options": ["getElementById()", "query()", "getId()", "selectId()"],
    "answer": "getElementById()"
  },
  {
    "num": 36,
    "question_en": "Which method selects multiple matching elements?",
    "question_hi": "Multiple matching HTML elements select करने के लिए कौन सा method उपयोग होता है?",
    "options": ["querySelectorAll()", "getMany()", "selectAll()", "findAll()"],
    "answer": "querySelectorAll()"
  },
  {
    "num": 37,
    "question_en": "Which keyword pauses execution of async function?",
    "question_hi": "Async function में execution रोकने के लिए कौन सा keyword उपयोग होता है?",
    "options": ["await", "stop", "pause", "delay"],
    "answer": "await"
  },
  {
    "num": 38,
    "question_en": "Which feature manages asynchronous operations?",
    "question_hi": "JavaScript में asynchronous operations संभालने के लिए क्या उपयोग होता है?",
    "options": ["Promises", "Variables", "Loops", "Strings"],
    "answer": "Promises"
  },
  {
    "num": 39,
    "question_en": "Which value indicates a missing object?",
    "question_hi": "कौन सा value एक missing object दिखाता है?",
    "options": ["null", "undefined", "0", "NaN"],
    "answer": "null"
  },
  {
    "num": 40,
    "question_en": "Which function removes the first element in array?",
    "question_hi": "Array का पहला element हटाने के लिए कौन सा method उपयोग होता है?",
    "options": ["shift()", "pop()", "removeFirst()", "delete()"],
    "answer": "shift()"
  },
  {
    "num": 41,
    "question_en": "What will 5 + '5' return?",
    "question_hi": "5 + '5' का output क्या होगा?",
    "options": ["55", "10", "NaN", "Error"],
    "answer": "55"
  },
  {
    "num": 42,
    "question_en": "What will 5 - '2' return?",
    "question_hi": "5 - '2' का output क्या होगा?",
    "options": ["3", "NaN", "52", "Error"],
    "answer": "3"
  },
  {
    "num": 43,
    "question_en": "Which event triggers when page is fully loaded?",
    "question_hi": "Page पूरी तरह load होने पर कौन सा event trigger होता है?",
    "options": ["onload", "onclick", "onsubmit", "onstart"],
    "answer": "onload"
  },
  {
    "num": 44,
    "question_en": "Which method converts a string to uppercase?",
    "question_hi": "String को uppercase में बदलने के लिए कौन सा method उपयोग होता है?",
    "options": ["toUpperCase()", "upper()", "uppercase()", "makeUpper()"],
    "answer": "toUpperCase()"
  },
  {
    "num": 45,
    "question_en": "Which operator is used for logical AND?",
    "question_hi": "Logical AND के लिए कौन सा operator उपयोग होता है?",
    "options": ["&&", "||", "==", "&"],
    "answer": "&&"
  },
  {
    "num": 46,
    "question_en": "Which operator is used for logical OR?",
    "question_hi": "Logical OR के लिए कौन सा operator उपयोग होता है?",
    "options": ["||", "&&", "|", "?"],
    "answer": "||"
  },
  {
    "num": 47,
    "question_en": "Which operator represents optional chaining?",
    "question_hi": "Optional chaining के लिए कौन सा operator उपयोग होता है?",
    "options": ["?.", "?=", "?:", "//"],
    "answer": "?."
  },
  {
    "num": 48,
    "question_en": "Which method sorts array elements?",
    "question_hi": "Array के elements sort करने के लिए कौन सा method उपयोग होता है?",
    "options": ["sort()", "order()", "arrange()", "sortArray()"],
    "answer": "sort()"
  },
  {
    "num": 49,
    "question_en": "Which keyword is used to export modules?",
    "question_hi": "Modules export करने के लिए कौन सा keyword उपयोग होता है?",
    "options": ["export", "module", "send", "return"],
    "answer": "export"
  },
  {
    "num": 50,
    "question_en": "Which method checks if an array contains a value?",
    "question_hi": "Array में value मौजूद है या नहीं, यह जांचने के लिए कौन सा method उपयोग होता है?",
    "options": ["includes()", "search()", "find()", "exists()"],
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
