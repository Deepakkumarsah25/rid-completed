 const questions=[
  {
    "num": 1,
    "question_en": "Which company developed JavaScript?",
    "question_hi": "JavaScript किस कंपनी ने विकसित किया?",
    "options": ["Google", "Netscape", "Microsoft", "IBM"],
    "answer": "Netscape"
  },
  {
    "num": 2,
    "question_en": "Which statement is used to execute a block of code multiple times?",
    "question_hi": "कौन सा statement एक कोड ब्लॉक को बार-बार चलाने के लिए उपयोग होता है?",
    "options": ["if", "loop", "for", "switch"],
    "answer": "for"
  },
  {
    "num": 3,
    "question_en": "Which method returns the index of the first occurrence of a substring?",
    "question_hi": "Substring की पहली occurrence का index लौटाने के लिए कौन सा method उपयोग होता है?",
    "options": ["search()", "indexOf()", "findIndex()", "locate()"],
    "answer": "indexOf()"
  },
  {
    "num": 4,
    "question_en": "Which operator checks both value and type?",
    "question_hi": "कौन सा operator value और type दोनों को check करता है?",
    "options": ["==", "===", "!=", "<>"],
    "answer": "==="
  },
  {
    "num": 5,
    "question_en": "Which function displays an alert box?",
    "question_hi": "Alert box दिखाने के लिए कौन सा function उपयोग होता है?",
    "options": ["alert()", "show()", "popup()", "message()"],
    "answer": "alert()"
  },

  {
    "num": 6,
    "question_en": "Which method returns the character at a specified index in a string?",
    "question_hi": "String में दिए गए index का character लौटाने के लिए कौन सा method उपयोग होता है?",
    "options": ["charAt()", "at()", "getChar()", "indexChar()"],
    "answer": "charAt()"
  },
  {
    "num": 7,
    "question_en": "Which data type represents a group of key-value pairs?",
    "question_hi": "Key-value pairs के समूह को कौन सा data type दर्शाता है?",
    "options": ["Array", "Object", "String", "Map"],
    "answer": "Object"
  },
  {
    "num": 8,
    "question_en": "Which function returns the current date and time?",
    "question_hi": "वर्तमान तारीख और समय प्राप्त करने के लिए कौन सा function उपयोग होता है?",
    "options": ["Date.now()", "new Date()", "getDate()", "time()"],
    "answer": "new Date()"
  },
  {
    "num": 9,
    "question_en": "Which operator is used to assign values?",
    "question_hi": "Value assign करने के लिए कौन सा operator उपयोग होता है?",
    "options": ["=", "==", "===", "->"],
    "answer": "="
  },
  {
    "num": 10,
    "question_en": "Which method removes elements from an array at a specific index?",
    "question_hi": "Array में एक specific index से elements हटाने के लिए कौन सा method उपयोग होता है?",
    "options": ["slice()", "splice()", "cut()", "trim()"],
    "answer": "splice()"
  },

  {
    "num": 11,
    "question_en": "Which statement handles multiple possible values?",
    "question_hi": "Multiple possible values को संभालने के लिए कौन सा statement उपयोग होता है?",
    "options": ["if", "switch", "for", "try"],
    "answer": "switch"
  },
  {
    "num": 12,
    "question_en": "Which method returns a substring from a string?",
    "question_hi": "String से substring लौटाने के लिए कौन सा method उपयोग होता है?",
    "options": ["slice()", "sub()", "piece()", "part()"],
    "answer": "slice()"
  },
  {
    "num": 13,
    "question_en": "JavaScript arrays are:",
    "question_hi": "JavaScript arrays कैसे होते हैं?",
    "options": ["Homogeneous", "Heterogeneous", "Typed", "Fixed"],
    "answer": "Heterogeneous"
  },
  {
    "num": 14,
    "question_en": "Which operator increments a value by 1?",
    "question_hi": "कौन सा operator value को 1 से बढ़ाता है?",
    "options": ["+", "++", "--", "#"],
    "answer": "++"
  },
  {
    "num": 15,
    "question_en": "Which built-in method checks if a number is Not-a-Number?",
    "question_hi": "कौन सा built-in method यह जांचता है कि कोई संख्या NaN है या नहीं?",
    "options": ["isNaN()", "notNumber()", "NaN()", "numCheck()"],
    "answer": "isNaN()"
  },

  {
    "num": 16,
    "question_en": "Which object is the root of the browser window?",
    "question_hi": "Browser window का root object कौन सा है?",
    "options": ["document", "window", "screen", "body"],
    "answer": "window"
  },
  {
    "num": 17,
    "question_en": "Which event fires when a key is pressed?",
    "question_hi": "Key दबाने पर कौन सा event fire होता है?",
    "options": ["onpress", "keydown", "keyenter", "keypush"],
    "answer": "keydown"
  },
  {
    "num": 18,
    "question_en": "Which method is used to convert a number to a fixed decimal?",
    "question_hi": "Number को fixed decimal में convert करने के लिए कौन सा method उपयोग होता है?",
    "options": ["toDecimal()", "fix()", "toFixed()", "round()"],
    "answer": "toFixed()"
  },
  {
    "num": 19,
    "question_en": "Which method returns the last index of an element in an array?",
    "question_hi": "Array में किसी element का अंतिम index देने के लिए कौन सा method उपयोग होता है?",
    "options": ["lastIndex()", "lastIndexOf()", "endIndex()", "reverseIndex()"],
    "answer": "lastIndexOf()"
  },
  {
    "num": 20,
    "question_en": "Which function converts a number to a string?",
    "question_hi": "Number को string में convert करने के लिए कौन सा function उपयोग होता है?",
    "options": ["string()", "toString()", "convert()", "str()"],
    "answer": "toString()"
  },

  {
    "num": 21,
    "question_en": "Which loop is preferred when the number of iterations is known?",
    "question_hi": "Iterations की संख्या पता होने पर कौन सा loop उपयोग होता है?",
    "options": ["while", "for", "do-while", "foreach"],
    "answer": "for"
  },
  {
    "num": 22,
    "question_en": "Which method converts a string into an array?",
    "question_hi": "String को array में convert करने के लिए कौन सा method उपयोग होता है?",
    "options": ["cut()", "split()", "divide()", "break()"],
    "answer": "split()"
  },
  {
    "num": 23,
    "question_en": "What is used to handle asynchronous operations?",
    "question_hi": "Asynchronous operations को संभालने के लिए क्या उपयोग होता है?",
    "options": ["Loops", "Promises", "Conditions", "Classes"],
    "answer": "Promises"
  },
  {
    "num": 24,
    "question_en": "Which symbol represents the logical NOT operator?",
    "question_hi": "Logical NOT operator कौन सा symbol दर्शाता है?",
    "options": ["^", "!", "~", "@"],
    "answer": "!"
  },
  {
    "num": 25,
    "question_en": "Which method is used to sort numbers correctly?",
    "question_hi": "Numbers को सही तरीके से sort करने के लिए कौन सा method उपयोग होता है?",
    "options": ["sort()", "sort((a,b)=>a-b)", "sortNumeric()", "numSort()"],
    "answer": "sort((a,b)=>a-b)"
  },

  {
    "num": 26,
    "question_en": "Which operator is used for exponentiation?",
    "question_hi": "Exponentiation के लिए कौन सा operator उपयोग होता है?",
    "options": ["^", "**", "^^", "pow"],
    "answer": "**"
  },
  {
    "num": 27,
    "question_en": "Which method is used to merge two or more objects?",
    "question_hi": "दो या अधिक objects को merge करने के लिए कौन सा method उपयोग होता है?",
    "options": ["Object.merge()", "Object.assign()", "merge()", "assignObject()"],
    "answer": "Object.assign()"
  },
  {
    "num": 28,
    "question_en": "Which keyword creates a private class field?",
    "question_hi": "Private class field बनाने के लिए कौन सा symbol उपयोग होता है?",
    "options": ["private", "#", "@", "$"],
    "answer": "#"
  },
  {
    "num": 29,
    "question_en": "Which method is used to loop over object keys?",
    "question_hi": "Object keys पर loop लगाने के लिए कौन सा method उपयोग होता है?",
    "options": ["Object.keys()", "Object.loop()", "keys()", "getKeys()"],
    "answer": "Object.keys()"
  },
  {
    "num": 30,
    "question_en": "Which feature allows functions to be passed as arguments?",
    "question_hi": "Functions को arguments के रूप में पास करने की सुविधा को क्या कहा जाता है?",
    "options": ["CallBack", "Functional Passing", "Callback Function", "Pass-Func"],
    "answer": "Callback Function"
  },

  {
    "num": 31,
    "question_en": "Which method returns a boolean if a string starts with specific text?",
    "question_hi": "String किसी विशेष text से शुरू होता है या नहीं, यह पता करने के लिए कौन सा method उपयोग होता है?",
    "options": ["start()", "begins()", "startsWith()", "hasStart()"],
    "answer": "startsWith()"
  },
  {
    "num": 32,
    "question_en": "Which method appends HTML content to an element?",
    "question_hi": "HTML content को किसी element में जोड़ने के लिए कौन सा method उपयोग होता है?",
    "options": ["innerText", "innerHTML", "appendHTML()", "addHTML()"],
    "answer": "innerHTML"
  },
  {
    "num": 33,
    "question_en": "Which JavaScript method returns a random number?",
    "question_hi": "Random number प्राप्त करने के लिए कौन सा method उपयोग होता है?",
    "options": ["Math.random()", "random()", "rand()", "number.random()"],
    "answer": "Math.random()"
  },
  {
    "num": 34,
    "question_en": "Which loop iterates over iterable objects?",
    "question_hi": "Iterable objects पर iterate करने के लिए कौन सा loop उपयोग होता है?",
    "options": ["for", "for-in", "for-of", "while"],
    "answer": "for-of"
  },
  {
    "num": 35,
    "question_en": "Which function executes after the previous promise completes?",
    "question_hi": "पहले promise के पूरा होने के बाद कौन सा function execute होता है?",
    "options": ["done()", "then()", "after()", "next()"],
    "answer": "then()"
  },

  {
    "num": 36,
    "question_en": "Which method removes the event listener?",
    "question_hi": "कौन सा method event listener को हटाता है?",
    "options": ["removeEvent()", "removeListener()", "removeEventListener()", "stopEvent()"],
    "answer": "removeEventListener()"
  },
  {
    "num": 37,
    "question_en": "Which operator is used for nullish coalescing?",
    "question_hi": "Nullish coalescing के लिए कौन सा operator उपयोग होता है?",
    "options": ["??", "||", "&&", "--"],
    "answer": "??"
  },
  {
    "num": 38,
    "question_en": "Which method returns only the keys of an object?",
    "question_hi": "Object के केवल keys लौटाने के लिए कौन सा method उपयोग होता है?",
    "options": ["keys()", "Object.keys()", "getKeys()", "listKeys()"],
    "answer": "Object.keys()"
  },
  {
    "num": 39,
    "question_en": "Which statement is used to export a function in ES6?",
    "question_hi": "ES6 में function export करने के लिए कौन सा statement उपयोग होता है?",
    "options": ["share", "export", "give", "expose"],
    "answer": "export"
  },
  {
    "num": 40,
    "question_en": "Which function loads a script asynchronously?",
    "question_hi": "कौन सा attribute script को asynchronously load करता है?",
    "options": ["async", "load", "defer", "delay"],
    "answer": "async"
  },

  {
    "num": 41,
    "question_en": "Which method reverses an array?",
    "question_hi": "Array को उल्टा करने के लिए कौन सा method उपयोग होता है?",
    "options": ["reverse()", "invert()", "flip()", "rotate()"],
    "answer": "reverse()"
  },
  {
    "num": 42,
    "question_en": "Which operator creates a new object using another object as a prototype?",
    "question_hi": "कौन सा operator एक नए object को दूसरे object के prototype पर बनाता है?",
    "options": ["proto", "__proto__", "Object.create()", "new"],
    "answer": "Object.create()"
  },
  {
    "num": 43,
    "question_en": "Which method converts object entries into an array?",
    "question_hi": "Object entries को array में convert करने के लिए कौन सा method उपयोग होता है?",
    "options": ["Object.toArray()", "Object.entries()", "Object.convert()", "entries()"],
    "answer": "Object.entries()"
  },
  {
    "num": 44,
    "question_en": "Which function runs code immediately after definition?",
    "question_hi": "Definition के तुरंत बाद code चलाने के लिए कौन सा function उपयोग होता है?",
    "options": ["IIFE", "Callback", "Async", "Generator"],
    "answer": "IIFE"
  },
  {
    "num": 45,
    "question_en": "Which feature allows functions to remember their outer scope?",
    "question_hi": "Functions अपने outer scope को कैसे याद रखते हैं?",
    "options": ["ScopeLink", "Closure", "Bind", "MemoryFunc"],
    "answer": "Closure"
  },

  {
    "num": 46,
    "question_en": "Which method returns all values of an object?",
    "question_hi": "Object के सभी values लौटाने के लिए कौन सा method उपयोग होता है?",
    "options": ["Object.values()", "values()", "getValues()", "listValues()"],
    "answer": "Object.values()"
  },
  {
    "num": 47,
    "question_en": "Which JavaScript method freezes an object?",
    "question_hi": "कौन सा method object को freeze कर देता है?",
    "options": ["Object.freeze()", "Object.lock()", "lock()", "freezeObj()"],
    "answer": "Object.freeze()"
  },
  {
    "num": 48,
    "question_en": "Which operator spreads array elements?",
    "question_hi": "Array elements को फैलाने के लिए कौन सा operator उपयोग होता है?",
    "options": ["...", "++", "--", "**"],
    "answer": "..."
  },
  {
    "num": 49,
    "question_en": "Which method executes reducer function on each array element?",
    "question_hi": "Array के प्रत्येक element पर reducer function चलाने वाला method कौन सा है?",
    "options": ["reduce()", "map()", "filter()", "collect()"],
    "answer": "reduce()"
  },
  {
    "num": 50,
    "question_en": "Which method checks if at least one element satisfies a condition?",
    "question_hi": "कम से कम एक element condition satisfy करता है या नहीं, यह जांचने के लिए कौन सा method उपयोग होता है?",
    "options": ["some()", "every()", "check()", "validate()"],
    "answer": "some()"
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
