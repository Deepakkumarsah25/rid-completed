 const questions =[
  {
    "id": 1,
    "question_en": "What is JavaScript primarily used for?",
    "question_hi": "JavaScript का मुख्य उपयोग किस लिए होता है?",
    "options_en": ["Styling webpages", "Structuring webpages", "Adding interactivity", "Database management"],
    "options_hi": ["वेबसाइट को स्टाइल करने के लिए", "वेबपेज की संरचना बनाने के लिए", "इंटरैक्टिविटी जोड़ने के लिए", "डेटाबेस प्रबंधन के लिए"],
    "answer": 2
  },
  {
    "id": 2,
    "question_en": "Which keyword is used to declare a variable in JavaScript?",
    "question_hi": "JavaScript में variable घोषित करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["var", "dim", "string", "value"],
    "options_hi": ["var", "dim", "string", "value"],
    "answer": 0
  },
  {
    "id": 3,
    "question_en": "What is the correct extension for JavaScript files?",
    "question_hi": "JavaScript फ़ाइलों का सही एक्सटेंशन क्या है?",
    "options_en": [".js", ".java", ".jsc", ".script"],
    "options_hi": [".js", ".java", ".jsc", ".script"],
    "answer": 0
  },
  {
    "id": 4,
    "question_en": "Which data type is NOT supported in JavaScript?",
    "question_hi": "निम्न में से कौन सा डेटा प्रकार JavaScript में समर्थित नहीं है?",
    "options_en": ["Boolean", "Undefined", "Float", "String"],
    "options_hi": ["Boolean", "Undefined", "Float", "String"],
    "answer": 2
  },
  {
    "id": 5,
    "question_en": "Which function is used to print output in the browser console?",
    "question_hi": "Browser console में output दिखाने के लिए कौन सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["print()", "console.log()", "echo()", "display()"],
    "options_hi": ["print()", "console.log()", "echo()", "display()"],
    "answer": 1
  },

  {
    "id": 6,
    "question_en": "Which symbol is used for single-line comments?",
    "question_hi": "Single-line comment के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["//", "/* */", "#", "--"],
    "options_hi": ["//", "/* */", "#", "--"],
    "answer": 0
  },

  {
    "id": 7,
    "question_en": "What will `typeof null` return?",
    "question_hi": "`typeof null` क्या return करेगा?",
    "options_en": ["null", "object", "string", "undefined"],
    "options_hi": ["null", "object", "string", "undefined"],
    "answer": 1
  },

  {
    "id": 8,
    "question_en": "Which operator is used for concatenation?",
    "question_hi": "Concatenation के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["-", "/", "+", "*"],
    "options_hi": ["-", "/", "+", "*"],
    "answer": 2
  },

  {
    "id": 9,
    "question_en": "JavaScript is a ___ language.",
    "question_hi": "JavaScript एक ___ भाषा है।",
    "options_en": ["Programming", "Markup", "Styling", "None"],
    "options_hi": ["प्रोग्रामिंग", "मार्कअप", "स्टाइलिंग", "कोई नहीं"],
    "answer": 0
  },

  {
    "id": 10,
    "question_en": "Which method selects an element by ID?",
    "question_hi": "ID द्वारा element चुनने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["getElementByClass()", "querySelector()", "getElementById()", "select()"],
    "options_hi": ["getElementByClass()", "querySelector()", "getElementById()", "select()"],
    "answer": 2
  },

  {
    "id": 11,
    "question_en": "Which is a loop statement?",
    "question_hi": "निम्न में से कौन loop statement है?",
    "options_en": ["if", "for", "switch", "return"],
    "options_hi": ["if", "for", "switch", "return"],
    "answer": 1
  },

  {
    "id": 12,
    "question_en": "Which keyword stops execution inside loops?",
    "question_hi": "Loop में execution रोकने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["continue", "stop", "break", "halt"],
    "options_hi": ["continue", "stop", "break", "halt"],
    "answer": 2
  },

  {
    "id": 13,
    "question_en": "Which function converts a string to a number?",
    "question_hi": "String को number में convert करने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["Number()", "String()", "parse()", "Convert()"],
    "options_hi": ["Number()", "String()", "parse()", "Convert()"],
    "answer": 0
  },

  {
    "id": 14,
    "question_en": "Which method removes whitespace?",
    "question_hi": "Whitespace हटाने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["trim()", "strip()", "clean()", "remove()"],
    "options_hi": ["trim()", "strip()", "clean()", "remove()"],
    "answer": 0
  },

  {
    "id": 15,
    "question_en": "Which method adds an item to the end of the array?",
    "question_hi": "Array के अंत में item जोड़ने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["push()", "add()", "insert()", "append()"],
    "options_hi": ["push()", "add()", "insert()", "append()"],
    "answer": 0
  },

  {
    "id": 16,
    "question_en": "Which operator checks value AND type?",
    "question_hi": "Value और type दोनों compare करने वाला operator कौन है?",
    "options_en": ["==", "=", "===", "!="],
    "options_hi": ["==", "=", "===", "!="],
    "answer": 2
  },

  {
    "id": 17,
    "question_en": "Which function shows an alert popup?",
    "question_hi": "Alert popup दिखाने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["message()", "alert()", "popup()", "console()"],
    "options_hi": ["message()", "alert()", "popup()", "console()"],
    "answer": 1
  },

  {
    "id": 18,
    "question_en": "Which method converts JSON string to an object?",
    "question_hi": "JSON string को object में convert करने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "objectJSON()", "convert()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "objectJSON()", "convert()"],
    "answer": 0
  },

  {
    "id": 19,
    "question_en": "Which method converts an object to JSON string?",
    "question_hi": "Object को JSON string में convert करने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "objectText()", "stringify()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "objectText()", "stringify()"],
    "answer": 1
  },

  {
    "id": 20,
    "question_en": "Which company created JavaScript?",
    "question_hi": "JavaScript किस कंपनी ने बनाया?",
    "options_en": ["Google", "Microsoft", "Apple", "Netscape"],
    "options_hi": ["Google", "Microsoft", "Apple", "Netscape"],
    "answer": 3
  },

  {
    "id": 21,
    "question_en": "Which keyword is used to define a constant variable?",
    "question_hi": "Constant variable घोषित करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["let", "var", "const", "constant"],
    "options_hi": ["let", "var", "const", "constant"],
    "answer": 2
  },

  {
    "id": 22,
    "question_en": "JavaScript runs on ___?",
    "question_hi": "JavaScript ___ पर चलती है?",
    "options_en": ["Browser", "Compiler", "Server Only", "Operating System"],
    "options_hi": ["Browser", "Compiler", "सिर्फ Server", "Operating System"],
    "answer": 0
  },

  {
    "id": 23,
    "question_en": "Which built-in method sorts array elements?",
    "question_hi": "Array elements को sort करने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["sort()", "order()", "arrange()", "setSort()"],
    "options_hi": ["sort()", "order()", "arrange()", "setSort()"],
    "answer": 0
  },

  {
    "id": 24,
    "question_en": "What type of language is JavaScript?",
    "question_hi": "JavaScript किस प्रकार की भाषा है?",
    "options_en": ["Compiled", "Interpreted", "Machine Level", "Assembly"],
    "options_hi": ["Compiled", "Interpreted", "Machine Level", "Assembly"],
    "answer": 1
  },

  {
    "id": 25,
    "question_en": "Which method is used to convert text to uppercase?",
    "question_hi": "Text को uppercase में बदलने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["upper()", "uppercase()", "toUpperCase()", "makeUpper()"],
    "options_hi": ["upper()", "uppercase()", "toUpperCase()", "makeUpper()"],
    "answer": 2
  },

  {
    "id": 26,
    "question_en": "Which function returns the length of a string?",
    "question_hi": "String की length प्राप्त करने के लिए क्या उपयोग होता है?",
    "options_en": ["size()", "length", "len()", "count()"],
    "options_hi": ["size()", "length", "len()", "count()"],
    "answer": 1
  },

  {
    "id": 27,
    "question_en": "Which keyword is used in loops to skip an iteration?",
    "question_hi": "Loop के अंदर iteration skip करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["skip", "jump", "continue", "break"],
    "options_hi": ["skip", "jump", "continue", "break"],
    "answer": 2
  },

  {
    "id": 28,
    "question_en": "Arrays in JavaScript are written with?",
    "question_hi": "JavaScript में array किसमें लिखा जाता है?",
    "options_en": ["{}", "[]", "()", "<>"],
    "options_hi": ["{}", "[]", "()", "<>"],
    "answer": 1
  },

  {
    "id": 29,
    "question_en": "Which operator is logical AND?",
    "question_hi": "Logical AND के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["&&", "||", "&", "AND"],
    "options_hi": ["&&", "||", "&", "AND"],
    "answer": 0
  },

  {
    "id": 30,
    "question_en": "Which event fires when a button is clicked?",
    "question_hi": "जब button click होता है, तो कौन सा event fire होता है?",
    "options_en": ["onclick", "onpress", "clickEvent", "buttonClick"],
    "options_hi": ["onclick", "onpress", "clickEvent", "buttonClick"],
    "answer": 0
  },

  {
    "id": 31,
    "question_en": "Which is NOT a JavaScript framework?",
    "question_hi": "निम्न में से कौन JavaScript framework नहीं है?",
    "options_en": ["React", "Angular", "Bootstrap", "Vue"],
    "options_hi": ["React", "Angular", "Bootstrap", "Vue"],
    "answer": 2
  },

  {
    "id": 32,
    "question_en": "Which operator represents OR?",
    "question_hi": "Logical OR operator कौन सा है?",
    "options_en": ["||", "&&", "!=", "#"],
    "options_hi": ["||", "&&", "!=", "#"],
    "answer": 0
  },

  {
    "id": 33,
    "question_en": "NaN stands for?",
    "question_hi": "NaN का full form क्या है?",
    "options_en": ["Not a Number", "New and Null", "Not assigned", "None available"],
    "options_hi": ["Not a Number", "New and Null", "Not assigned", "None available"],
    "answer": 0
  },

  {
    "id": 34,
    "question_en": "Which converts a number to a string?",
    "question_hi": "Number को string में convert करने के लिए क्या उपयोग होता है?",
    "options_en": ["toString()", "Stringify()", "text()", "convert()"],
    "options_hi": ["toString()", "Stringify()", "text()", "convert()"],
    "answer": 0
  },

  {
    "id": 35,
    "question_en": "Which statement defines a block of code?",
    "question_hi": "Code के ब्लॉक को define करने के लिए क्या उपयोग होता है?",
    "options_en": ["()", "{}", "[]", "<>"],
    "options_hi": ["()", "{}", "[]", "<>"],
    "answer": 1
  },

  {
    "id": 36,
    "question_en": "Which symbol is used for strict equality?",
    "question_hi": "Strict equality के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["===", "==", "!=", "="],
    "options_hi": ["===", "==", "!=", "="],
    "answer": 0
  },

  {
    "id": 37,
    "question_en": "`Math.random()` generates?",
    "question_hi": "`Math.random()` क्या generate करता है?",
    "options_en": ["Random string", "Random boolean", "Random number", "Random array"],
    "options_hi": ["Random string", "Random boolean", "Random number", "Random array"],
    "answer": 2
  },

  {
    "id": 38,
    "question_en": "Which function rounds a number?",
    "question_hi": "Number को round करने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["round()", "Math.ceil()", "Math.floor()", "Math.round()"],
    "options_hi": ["round()", "Math.ceil()", "Math.floor()", "Math.round()"],
    "answer": 3
  },

  {
    "id": 39,
    "question_en": "Which function is used to delay execution?",
    "question_hi": "Execution delay करने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["delay()", "setTimeout()", "setInterval()", "wait()"],
    "options_hi": ["delay()", "setTimeout()", "setInterval()", "wait()"],
    "answer": 1
  },

  {
    "id": 40,
    "question_en": "Which loop executes at least once?",
    "question_hi": "कौन सा loop कम से कम एक बार execute होता है?",
    "options_en": ["for", "while", "do-while", "foreach"],
    "options_hi": ["for", "while", "do-while", "foreach"],
    "answer": 2
  },

  {
    "id": 41,
    "question_en": "Which method removes the last item of an array?",
    "question_hi": "Array के अंतिम item को हटाने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["pop()", "remove()", "shift()", "delete()"],
    "options_hi": ["pop()", "remove()", "shift()", "delete()"],
    "answer": 0
  },

  {
    "id": 42,
    "question_en": "Which method removes the first item of an array?",
    "question_hi": "Array के पहले item को हटाने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["pop()", "shift()", "splice()", "cut()"],
    "options_hi": ["pop()", "shift()", "splice()", "cut()"],
    "answer": 1
  },

  {
    "id": 43,
    "question_en": "Which function shows confirmation dialog?",
    "question_hi": "Confirmation dialog दिखाने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["alert()", "confirm()", "prompt()", "message()"],
    "options_hi": ["alert()", "confirm()", "prompt()", "message()"],
    "answer": 1
  },

  {
    "id": 44,
    "question_en": "Which function takes user input?",
    "question_hi": "User input लेने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["input()", "prompt()", "ask()", "console()"],
    "options_hi": ["input()", "prompt()", "ask()", "console()"],
    "answer": 1
  },

  {
    "id": 45,
    "question_en": "Which operator is used for exponent?",
    "question_hi": "Exponent (power) के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["^", "**", "pow", "exp"],
    "options_hi": ["^", "**", "pow", "exp"],
    "answer": 1
  },

  {
    "id": 46,
    "question_en": "Which storage stores data after refresh?",
    "question_hi": "कौन सा storage refresh के बाद भी data save रखता है?",
    "options_en": ["Session Storage", "Temporary memory", "LocalStorage", "RAM"],
    "options_hi": ["Session Storage", "Temporary memory", "LocalStorage", "RAM"],
    "answer": 2
  },

  {
    "id": 47,
    "question_en": "Which function repeats code at intervals?",
    "question_hi": "Interval पर code चलाने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["setTime()", "setInterval()", "loop()", "repeat()"],
    "options_hi": ["setTime()", "setInterval()", "loop()", "repeat()"],
    "answer": 1
  },

  {
    "id": 48,
    "question_en": "Objects in JavaScript are written with?",
    "question_hi": "JavaScript में objects किसमें लिखे जाते हैं?",
    "options_en": ["[]", "{}", "()", "<>"],
    "options_hi": ["[]", "{}", "()", "<>"],
    "answer": 1
  },

  {
    "id": 49,
    "question_en": "Which method checks array length?",
    "question_hi": "Array की length प्राप्त करने के लिए क्या उपयोग होता है?",
    "options_en": ["size()", "length", "count()", "getLength()"],
    "options_hi": ["size()", "length", "count()", "getLength()"],
    "answer": 1
  },

  {
    "id": 50,
    "question_en": "Which type of programming style JavaScript supports?",
    "question_hi": "JavaScript किस प्रकार की programming style को support करता है?",
    "options_en": ["OOP", "Functional", "Event-driven", "All of these"],
    "options_hi": ["OOP", "Functional", "Event-driven", "इन सभी"],
    "answer": 3
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
