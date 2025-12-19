 const questions=[
  {
    "num": 1,
    "question_en": "What is the default value of an uninitialized variable in JavaScript?",
    "question_hi": "JavaScript में बिना initialize किए गए variable का default मान क्या होता है?",
    "options_en": ["null", "0", "undefined", "false"],
    "options_hi": ["null", "0", "undefined", "false"],
    "answer_en": "undefined",
    "answer_hi": "undefined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to convert a string into an integer?",
    "question_hi": "String को integer में बदलने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["String()", "parseInt()", "int()", "convert()"],
    "options_hi": ["String()", "parseInt()", "int()", "convert()"],
    "answer_en": "parseInt()",
    "answer_hi": "parseInt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which operator is used for exponentiation in JavaScript?",
    "question_hi": "JavaScript में exponentiation के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["^", "**", "exp()", "++"],
    "options_hi": ["^", "**", "exp()", "++"],
    "answer_en": "**",
    "answer_hi": "**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which array method returns the index of the first matched value?",
    "question_hi": "कौन सा array method पहली मैच की गई value का index देता है?",
    "options_en": ["find()", "indexOf()", "filter()", "search()"],
    "options_hi": ["find()", "indexOf()", "filter()", "search()"],
    "answer_en": "indexOf()",
    "answer_hi": "indexOf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to delay code execution in JavaScript?",
    "question_hi": "JavaScript में code execution delay करने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["wait()", "pause()", "setTimeout()", "sleep()"],
    "options_hi": ["wait()", "pause()", "setTimeout()", "sleep()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method converts an array to a string?",
    "question_hi": "कौन सा method array को string में बदलता है?",
    "options_en": ["join()", "concat()", "stringify()", "convert()"],
    "options_hi": ["join()", "concat()", "stringify()", "convert()"],
    "answer_en": "join()",
    "answer_hi": "join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which built-in method removes whitespace from both sides of a string?",
    "question_hi": "कौन सा built-in method string के दोनों तरफ़ के whitespace हटाता है?",
    "options_en": ["trim()", "clean()", "strip()", "slice()"],
    "options_hi": ["trim()", "clean()", "strip()", "slice()"],
    "answer_en": "trim()",
    "answer_hi": "trim()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What keyword is used to stop a loop in JavaScript?",
    "question_hi": "JavaScript में loop को रोकने के लिए कौन सा keyword प्रयोग किया जाता है?",
    "options_en": ["continue", "break", "exit", "stop"],
    "options_hi": ["continue", "break", "exit", "stop"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which symbol is used for single-line comments in JavaScript?",
    "question_hi": "JavaScript में single-line comment के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["/* */", "//", "#", "<!-- -->"],
    "options_hi": ["/* */", "//", "#", "<!-- -->"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which object is used to work with dates in JavaScript?",
    "question_hi": "JavaScript में date के साथ काम करने के लिए कौन सा object उपयोग होता है?",
    "options_en": ["Time", "Clock", "Date", "Calendar"],
    "options_hi": ["Time", "Clock", "Date", "Calendar"],
    "answer_en": "Date",
    "answer_hi": "Date",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method returns the length of a string?",
    "question_hi": "कौन सा method string की length लौटाता है?",
    "options_en": ["count()", "length", "size()", "measure()"],
    "options_hi": ["count()", "length", "size()", "measure()"],
    "answer_en": "length",
    "answer_hi": "length",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword defines a constant variable?",
    "question_hi": "कौन सा keyword एक constant variable को define करता है?",
    "options_en": ["static", "var", "let", "const"],
    "options_hi": ["static", "var", "let", "const"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which statement handles exceptions in JavaScript?",
    "question_hi": "JavaScript में exceptions को कौन संभालता है?",
    "options_en": ["catch", "throw", "try-catch", "error"],
    "options_hi": ["catch", "throw", "try-catch", "error"],
    "answer_en": "try-catch",
    "answer_hi": "try-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method stops interval execution?",
    "question_hi": "कौन सा method interval execution को रोकता है?",
    "options_en": ["stop()", "cancel()", "clearInterval()", "pause()"],
    "options_hi": ["stop()", "cancel()", "clearInterval()", "pause()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does NaN stand for?",
    "question_hi": "NaN का पूरा नाम क्या है?",
    "options_en": ["Not a Name", "Not a Number", "New and Null", "None and Null"],
    "options_hi": ["Not a Name", "Not a Number", "New and Null", "None and Null"],
    "answer_en": "Not a Number",
    "answer_hi": "Not a Number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method converts a value to JSON?",
    "question_hi": "कौन सा method value को JSON में बदलता है?",
    "options_en": ["JSON.parse()", "JSON.write()", "JSON.stringify()", "JSON.encode()"],
    "options_hi": ["JSON.parse()", "JSON.write()", "JSON.stringify()", "JSON.encode()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method filters elements based on a condition?",
    "question_hi": "कौन सा method condition के आधार पर elements को filter करता है?",
    "options_en": ["map()", "sort()", "filter()", "reduce()"],
    "options_hi": ["map()", "sort()", "filter()", "reduce()"],
    "answer_en": "filter()",
    "answer_hi": "filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used to call a function inside a class?",
    "question_hi": "Class के अंदर function को call करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["self", "this", "me", "call"],
    "options_hi": ["self", "this", "me", "call"],
    "answer_en": "this",
    "answer_hi": "this",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which type of language is JavaScript?",
    "question_hi": "JavaScript किस प्रकार की language है?",
    "options_en": ["Compiled", "Interpreted", "Assembly", "Machine"],
    "options_hi": ["Compiled", "Interpreted", "Assembly", "Machine"],
    "answer_en": "Interpreted",
    "answer_hi": "Interpreted",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method executes a function repeatedly with time delay?",
    "question_hi": "कौन सा method delay के साथ function को बार-बार चलाता है?",
    "options_en": ["setTimeout()", "loop()", "setInterval()", "repeat()"],
    "options_hi": ["setTimeout()", "loop()", "setInterval()", "repeat()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which operator checks if a value exists in an array?",
    "question_hi": "कौन सा ऑपरेटर array में value के मौजूद होने की जांच करता है?",
    "options_en": ["in", "contains", "has", "includes()"],
    "options_hi": ["in", "contains", "has", "includes()"],
    "answer_en": "includes()",
    "answer_hi": "includes()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 22,
    "question_en": "What is the output type of typeof operator?",
    "question_hi": "typeof ऑपरेटर का output किस प्रकार का होता है?",
    "options_en": ["boolean", "number", "string", "object"],
    "options_hi": ["boolean", "number", "string", "object"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 23,
    "question_en": "Which character is used to separate statements in JavaScript?",
    "question_hi": "JavaScript में statements को अलग करने के लिए कौन सा चिन्ह उपयोग होता है?",
    "options_en": [":", ".", ";", ","],
    "options_hi": [":", ".", ";", ","],
    "answer_en": ";",
    "answer_hi": ";",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 24,
    "question_en": "Which function returns a random number?",
    "question_hi": "कौन सा function एक random number लौटाता है?",
    "options_en": ["Math.random()", "random()", "generate()", "Math.rand()"],
    "options_hi": ["Math.random()", "random()", "generate()", "Math.rand()"],
    "answer_en": "Math.random()",
    "answer_hi": "Math.random()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 25,
    "question_en": "Arrays in JavaScript are?",
    "question_hi": "JavaScript में arrays क्या होते हैं?",
    "options_en": ["Primitive", "Non-primitive", "Static", "Fixed"],
    "options_hi": ["Primitive", "Non-primitive", "Static", "Fixed"],
    "answer_en": "Non-primitive",
    "answer_hi": "Non-primitive",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "JavaScript file extension is?",
    "question_hi": "JavaScript file का extension क्या होता है?",
    "options_en": [".js", ".java", ".script", ".jsx"],
    "options_hi": [".js", ".java", ".script", ".jsx"],
    "answer_en": ".js",
    "answer_hi": ".js",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 27,
    "question_en": "Which method merges two objects?",
    "question_hi": "कौन सा method दो objects को merge करता है?",
    "options_en": ["assign()", "merge()", "extend()", "push()"],
    "options_hi": ["assign()", "merge()", "extend()", "push()"],
    "answer_en": "assign()",
    "answer_hi": "assign()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 28,
    "question_en": "Which symbol is used for template literals?",
    "question_hi": "Template literals के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["'", "\"", "`", "~"],
    "options_hi": ["'", "\"", "`", "~"],
    "answer_en": "`",
    "answer_hi": "`",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 29,
    "question_en": "Which loop is used for arrays?",
    "question_hi": "Arrays के लिए किस loop का उपयोग किया जाता है?",
    "options_en": ["for-of", "while", "foreach", "do-while"],
    "options_hi": ["for-of", "while", "foreach", "do-while"],
    "answer_en": "for-of",
    "answer_hi": "for-of",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 30,
    "question_en": "Which method reduces array values to a single value?",
    "question_hi": "कौन सा method array values को एक single value में बदल देता है?",
    "options_en": ["map()", "reduce()", "combine()", "sum()"],
    "options_hi": ["map()", "reduce()", "combine()", "sum()"],
    "answer_en": "reduce()",
    "answer_hi": "reduce()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which operator is used for logical AND?",
    "question_hi": "Logical AND के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["&&", "||", "&", "and"],
    "options_hi": ["&&", "||", "&", "and"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 32,
    "question_en": "Which operator is used for logical OR?",
    "question_hi": "Logical OR के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["&&", "||", "|", "or"],
    "options_hi": ["&&", "||", "|", "or"],
    "answer_en": "||",
    "answer_hi": "||",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 33,
    "question_en": "What is the full form of DOM?",
    "question_hi": "DOM का पूरा नाम क्या है?",
    "options_en": ["Document Object Model", "Data Object Module", "Display Object Manager", "Digital Object Memory"],
    "options_hi": ["Document Object Model", "Data Object Module", "Display Object Manager", "Digital Object Memory"],
    "answer_en": "Document Object Model",
    "answer_hi": "Document Object Model",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 34,
    "question_en": "Which keyword is used to define a function?",
    "question_hi": "Function को define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["def", "function", "fun", "method"],
    "options_hi": ["def", "function", "fun", "method"],
    "answer_en": "function",
    "answer_hi": "function",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 35,
    "question_en": "Which method converts a string to lowercase?",
    "question_hi": "कौन सा method string को lowercase में बदलता है?",
    "options_en": ["lower()", "toLowerCase()", "small()", "convert()"],
    "options_hi": ["lower()", "toLowerCase()", "small()", "convert()"],
    "answer_en": "toLowerCase()",
    "answer_hi": "toLowerCase()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which of the following is a JavaScript framework?",
    "question_hi": "इनमें से कौन JavaScript framework है?",
    "options_en": ["Laravel", "React", "Django", "Flask"],
    "options_hi": ["Laravel", "React", "Django", "Flask"],
    "answer_en": "React",
    "answer_hi": "React",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 37,
    "question_en": "Which method executes a function for each array element?",
    "question_hi": "कौन सा method array के हर element को process करता है?",
    "options_en": ["map()", "foreach()", "loop()", "run()"],
    "options_hi": ["map()", "foreach()", "loop()", "run()"],
    "answer_en": "foreach()",
    "answer_hi": "foreach()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 38,
    "question_en": "Which method returns true if all elements pass the test?",
    "question_hi": "कौन सा method true लौटाता है अगर सभी elements test पास करते हैं?",
    "options_en": ["every()", "filter()", "some()", "includes()"],
    "options_hi": ["every()", "filter()", "some()", "includes()"],
    "answer_en": "every()",
    "answer_hi": "every()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 39,
    "question_en": "Which method returns true if at least one element passes the test?",
    "question_hi": "कौन सा method true लौटाता है अगर कम से कम एक element test पास करता है?",
    "options_en": ["every()", "filter()", "some()", "match()"],
    "options_hi": ["every()", "filter()", "some()", "match()"],
    "answer_en": "some()",
    "answer_hi": "some()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 40,
    "question_en": "Which type of variable exists only inside a block?",
    "question_hi": "किस प्रकार का variable केवल block के अंदर रहता है?",
    "options_en": ["global", "local", "block-scope", "static"],
    "options_hi": ["global", "local", "block-scope", "static"],
    "answer_en": "block-scope",
    "answer_hi": "block-scope",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which operator is used for string concatenation?",
    "question_hi": "String को जोड़ने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["+", "-", "*", "%"],
    "options_hi": ["+", "-", "*", "%"],
    "answer_en": "+",
    "answer_hi": "+",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 42,
    "question_en": "Which function displays a pop-up alert?",
    "question_hi": "कौन सा function pop-up alert दिखाता है?",
    "options_en": ["show()", "alert()", "popup()", "display()"],
    "options_hi": ["show()", "alert()", "popup()", "display()"],
    "answer_en": "alert()",
    "answer_hi": "alert()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 43,
    "question_en": "Which function writes content to the browser?",
    "question_hi": "Browser में content लिखने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["console.log()", "write()", "document.write()", "print()"],
    "options_hi": ["console.log()", "write()", "document.write()", "print()"],
    "answer_en": "document.write()",
    "answer_hi": "document.write()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 44,
    "question_en": "Which keyword is used to return a value from a function?",
    "question_hi": "Function से value लौटाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["give", "return", "send", "back"],
    "options_hi": ["give", "return", "send", "back"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 45,
    "question_en": "Which storage stores data permanently?",
    "question_hi": "कौन सा storage data को स्थायी रूप से रखता है?",
    "options_en": ["sessionStorage", "localStorage", "cookies", "memory"],
    "options_hi": ["sessionStorage", "localStorage", "cookies", "memory"],
    "answer_en": "localStorage",
    "answer_hi": "localStorage",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword creates a class?",
    "question_hi": "Class बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["make", "class", "object", "define"],
    "options_hi": ["make", "class", "object", "define"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 47,
    "question_en": "Which operator is used for comparisons?",
    "question_hi": "Comparison के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["+", "-", "==", "--"],
    "options_hi": ["+", "-", "==", "--"],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 48,
    "question_en": "Which method removes the first element of an array?",
    "question_hi": "कौन सा method array के पहले element को हटाता है?",
    "options_en": ["pop()", "shift()", "splice()", "slice()"],
    "options_hi": ["pop()", "shift()", "splice()", "slice()"],
    "answer_en": "shift()",
    "answer_hi": "shift()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 49,
    "question_en": "Which method adds elements at the beginning of an array?",
    "question_hi": "Array के शुरुआत में element जोड़ने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["push()", "add()", "unshift()", "insert()"],
    "options_hi": ["push()", "add()", "unshift()", "insert()"],
    "answer_en": "unshift()",
    "answer_hi": "unshift()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 50,
    "question_en": "JavaScript runs inside the ___?",
    "question_hi": "JavaScript किसके अंदर चलती है?",
    "options_en": ["CPU", "Browser", "Compiler", "Database"],
    "options_hi": ["CPU", "Browser", "Compiler", "Database"],
    "answer_en": "Browser",
    "answer_hi": "Browser",
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
