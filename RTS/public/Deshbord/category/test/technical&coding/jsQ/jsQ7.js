 const questions=[
  {
    "num": 1,
    "question_en": "Which keyword is used to declare a variable in JavaScript introduced in ES6?",
    "question_hi": "JavaScript में ES6 में पेश किया गया कौन सा कीवर्ड वेरिएबल घोषित करने के लिए उपयोग होता है?",
    "options_en": ["var", "let", "const", "static"],
    "options_hi": ["var", "let", "const", "static"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which function is used to parse JSON string into JavaScript object?",
    "question_hi": "JSON string को JavaScript object में बदलने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["JSON.write()", "JSON.parse()", "JSON.convert()", "JSON.stringify()"],
    "options_hi": ["JSON.write()", "JSON.parse()", "JSON.convert()", "JSON.stringify()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which operator is used to compare both value and type?",
    "question_hi": "कौन सा ऑपरेटर value और type दोनों की तुलना करता है?",
    "options_en": ["==", "=", "===", "!="],
    "options_hi": ["==", "=", "===", "!="],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method removes the last element from an array?",
    "question_hi": "Array से अंतिम तत्व हटाने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["shift()", "pop()", "remove()", "delete()"],
    "options_hi": ["shift()", "pop()", "remove()", "delete()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method adds one or more elements to the end of an array?",
    "question_hi": "Array के अंत में elements जोड़ने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["push()", "append()", "concat()", "insert()"],
    "options_hi": ["push()", "append()", "concat()", "insert()"],
    "answer_en": "push()",
    "answer_hi": "push()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method combines two arrays?",
    "question_hi": "कौन सा method दो arrays को जोड़ता है?",
    "options_en": ["concat()", "push()", "append()", "merge()"],
    "options_hi": ["concat()", "push()", "append()", "merge()"],
    "answer_en": "concat()",
    "answer_hi": "concat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of: typeof null?",
    "question_hi": "typeof null का output क्या होगा?",
    "options_en": ["null", "undefined", "object", "string"],
    "options_hi": ["null", "undefined", "object", "string"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which loop is guaranteed to run at least once?",
    "question_hi": "कौन सा loop कम से कम एक बार चलता है?",
    "options_en": ["for loop", "while loop", "do while loop", "foreach loop"],
    "options_hi": ["for loop", "while loop", "do while loop", "foreach loop"],
    "answer_en": "do while loop",
    "answer_hi": "do while loop",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which built-in method sorts elements of an array?",
    "question_hi": "कौन सा built-in method array को sort करता है?",
    "options_en": ["order()", "sort()", "arrange()", "filter()"],
    "options_hi": ["order()", "sort()", "arrange()", "filter()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which method converts a JavaScript object into JSON string?",
    "question_hi": "JavaScript object को JSON string में बदलने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["JSON.parse()", "JSON.object()", "JSON.stringify()", "JSON.toString()"],
    "options_hi": ["JSON.parse()", "JSON.object()", "JSON.stringify()", "JSON.toString()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which JavaScript feature supports async programming?",
    "question_hi": "JavaScript की कौन सी विशेषता asynchronous programming का समर्थन करती है?",
    "options_en": ["Promises", "Loops", "Switch Case", "CSS"],
    "options_hi": ["Promises", "Loops", "Switch Case", "CSS"],
    "answer_en": "Promises",
    "answer_hi": "Promises",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What will be the output: console.log(2 + '2')?",
    "question_hi": "console.log(2 + '2') का output क्या होगा?",
    "options_en": ["22", "4", "Error", "undefined"],
    "options_hi": ["22", "4", "Error", "undefined"],
    "answer_en": "22",
    "answer_hi": "22",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which operator is known as the ternary operator?",
    "question_hi": "कौन सा ऑपरेटर ternary operator कहलाता है?",
    "options_en": ["?:", "??", "&&", "||"],
    "options_hi": ["?:", "??", "&&", "||"],
    "answer_en": "?:",
    "answer_hi": "?:",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which statement is used to stop execution inside a loop?",
    "question_hi": "Loop के अंदर execution रोकने के लिए कौन सा statement उपयोग होता है?",
    "options_en": ["return", "stop", "end", "break"],
    "options_hi": ["return", "stop", "end", "break"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to delay code execution?",
    "question_hi": "Code execution को delay करने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["setTimeout()", "delay()", "pause()", "wait()"],
    "options_hi": ["setTimeout()", "delay()", "pause()", "wait()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method filters array elements based on condition?",
    "question_hi": "कौन सा method condition के आधार पर array elements को filter करता है?",
    "options_en": ["map()", "sort()", "filter()", "push()"],
    "options_hi": ["map()", "sort()", "filter()", "push()"],
    "answer_en": "filter()",
    "answer_hi": "filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which built-in function returns the length of a string?",
    "question_hi": "कौन सा built-in function string की length देता है?",
    "options_en": ["len()", "length()", "count()", "size()"],
    "options_hi": ["len()", "length()", "count()", "size()"],
    "answer_en": "length",
    "answer_hi": "length",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method is used to convert string to number?",
    "question_hi": "String को number में बदलने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["parseInt()", "parse()", "convert()", "split()"],
    "options_hi": ["parseInt()", "parse()", "convert()", "split()"],
    "answer_en": "parseInt()",
    "answer_hi": "parseInt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to repeat a string?",
    "question_hi": "String को repeat करने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["repeat()", "copy()", "duplicate()", "loop()"],
    "options_hi": ["repeat()", "copy()", "duplicate()", "loop()"],
    "answer_en": "repeat()",
    "answer_hi": "repeat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which JavaScript type represents true or false?",
    "question_hi": "JavaScript में कौन सा data type true या false को दर्शाता है?",
    "options_en": ["Number", "Boolean", "String", "Null"],
    "options_hi": ["Number", "Boolean", "String", "Null"],
    "answer_en": "Boolean",
    "answer_hi": "Boolean",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which operator checks for null or undefined values?",
    "question_hi": "कौन सा ऑपरेटर null या undefined values को check करता है?",
    "options_en": ["==", "??", "&&", "?:"] ,
    "options_hi": ["==", "??", "&&", "?:"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which JavaScript function displays output in browser alert box?",
    "question_hi": "Browser alert box में output दिखाने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["print()", "msg()", "alert()", "popup()"],
    "options_hi": ["print()", "msg()", "alert()", "popup()"],
    "answer_en": "alert()",
    "answer_hi": "alert()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword is used to define a constant variable?",
    "question_hi": "Constant variable घोषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["let", "var", "const", "static"],
    "options_hi": ["let", "var", "const", "static"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which function converts a number to a string?",
    "question_hi": "Number को string में convert करने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["toString()", "toChar()", "stringify()", "convert()"],
    "options_hi": ["toString()", "toChar()", "stringify()", "convert()"],
    "answer_en": "toString()",
    "answer_hi": "toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which JavaScript function logs data to the console?",
    "question_hi": "Console में डेटा दिखाने के लिए कौन सा function उपयोग किया जाता है?",
    "options_en": ["console.log()", "log.console()", "print()", "alert()"],
    "options_hi": ["console.log()", "log.console()", "print()", "alert()"],
    "answer_en": "console.log()",
    "answer_hi": "console.log()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which operator returns the remainder of a division?",
    "question_hi": "कौन सा ऑपरेटर division का remainder देता है?",
    "options_en": ["%", "/", "*", "&"],
    "options_hi": ["%", "/", "*", "&"],
    "answer_en": "%",
    "answer_hi": "%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which loop is used to iterate over object properties?",
    "question_hi": "कौन सा loop object properties को iterate करने के लिए उपयोग होता है?",
    "options_en": ["for-of", "for-in", "while", "foreach"],
    "options_hi": ["for-of", "for-in", "while", "foreach"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which character is used to write single-line comments?",
    "question_hi": "कौन सा character single-line comments के लिए उपयोग होता है?",
    "options_en": ["//", "#", "/* */", "<!--"],
    "options_hi": ["//", "#", "/* */", "<!--"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method returns the index of an element in an array?",
    "question_hi": "कौन सा method array में element का index देता है?",
    "options_en": ["find()", "indexOf()", "includes()", "position()"],
    "options_hi": ["find()", "indexOf()", "includes()", "position()"],
    "answer_en": "indexOf()",
    "answer_hi": "indexOf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which array method removes the first element?",
    "question_hi": "कौन सा array method पहले element को हटाता है?",
    "options_en": ["pop()", "shift()", "splice()", "delete()"],
    "options_hi": ["pop()", "shift()", "splice()", "delete()"],
    "answer_en": "shift()",
    "answer_hi": "shift()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which method checks whether a value exists in an array?",
    "question_hi": "कौन सा method यह जांचता है कि value array में मौजूद है या नहीं?",
    "options_en": ["find()", "includes()", "contains()", "filter()"],
    "options_hi": ["find()", "includes()", "contains()", "filter()"],
    "answer_en": "includes()",
    "answer_hi": "includes()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword is used to handle exceptions?",
    "question_hi": "Exceptions को handle करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["error", "debug", "try-catch", "stop"],
    "options_hi": ["error", "debug", "try-catch", "stop"],
    "answer_en": "try-catch",
    "answer_hi": "try-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method converts a string to lowercase?",
    "question_hi": "String को lowercase बनाने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["lower()", "toLowerCase()", "small()", "caseDown()"],
    "options_hi": ["lower()", "toLowerCase()", "small()", "caseDown()"],
    "answer_en": "toLowerCase()",
    "answer_hi": "toLowerCase()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which JavaScript method is used to join array elements with a separator?",
    "question_hi": "कौन सा JavaScript method array elements को separator के साथ जोड़ता है?",
    "options_en": ["join()", "glue()", "append()", "merge()"],
    "options_hi": ["join()", "glue()", "append()", "merge()"],
    "answer_en": "join()",
    "answer_hi": "join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method converts a string into an array?",
    "question_hi": "String को array में convert करने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["convert()", "split()", "stringToArray()", "array()"],
    "options_hi": ["convert()", "split()", "stringToArray()", "array()"],
    "answer_en": "split()",
    "answer_hi": "split()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which function is used for debugging output?",
    "question_hi": "Debugging output के लिए कौन सा function उपयोग होता है?",
    "options_en": ["console.log()", "alert()", "warn()", "error()"],
    "options_hi": ["console.log()", "alert()", "warn()", "error()"],
    "answer_en": "console.log()",
    "answer_hi": "console.log()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which built-in method returns true for arrays?",
    "question_hi": "कौन सा built-in method यह जांचता है कि value array है या नहीं?",
    "options_en": ["Array.isArray()", "isArray()", "arrayCheck()", "instanceOf()"],
    "options_hi": ["Array.isArray()", "isArray()", "arrayCheck()", "instanceOf()"],
    "answer_en": "Array.isArray()",
    "answer_hi": "Array.isArray()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What will typeof NaN return?",
    "question_hi": "typeof NaN क्या return करेगा?",
    "options_en": ["number", "NaN", "object", "undefined"],
    "options_hi": ["number", "NaN", "object", "undefined"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which JavaScript method is used to round numbers?",
    "question_hi": "Numbers को round करने के लिए कौन सा JavaScript method उपयोग होता है?",
    "options_en": ["Math.round()", "Math.floor()", "Math.ceil()", "round()"],
    "options_hi": ["Math.round()", "Math.floor()", "Math.ceil()", "round()"],
    "answer_en": "Math.round()",
    "answer_hi": "Math.round()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function executes repeatedly after a fixed time?",
    "question_hi": "कौन सा function fixed time बाद बार-बार execute होता है?",
    "options_en": ["setInterval()", "setTimeout()", "loopDelay()", "repeatAction()"],
    "options_hi": ["setInterval()", "setTimeout()", "loopDelay()", "repeatAction()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which symbol represents the arrow function?",
    "question_hi": "Arrow function को दर्शाने के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["=>", "-->", "<-", "<=>"],
    "options_hi": ["=>", "-->", "<-", "<=>"],
    "answer_en": "=>",
    "answer_hi": "=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword is used to create class in JavaScript?",
    "question_hi": "JavaScript में class बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class", "object", "constructor", "struct"],
    "options_hi": ["class", "object", "constructor", "struct"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword refers to the current object?",
    "question_hi": "कौन सा keyword वर्तमान object को refer करता है?",
    "options_en": ["self", "object", "this", "me"],
    "options_hi": ["self", "object", "this", "me"],
    "answer_en": "this",
    "answer_hi": "this",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method removes whitespace from both sides of a string?",
    "question_hi": "कौन सा method string के दोनों साइड से whitespace हटाता है?",
    "options_en": ["clean()", "strip()", "trim()", "cut()"],
    "options_hi": ["clean()", "strip()", "trim()", "cut()"],
    "answer_en": "trim()",
    "answer_hi": "trim()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which operator spreads elements of an array?",
    "question_hi": "कौन सा operator array elements को spread करता है?",
    "options_en": ["...", "++", "--", "=>"],
    "options_hi": ["...", "++", "--", "=>"],
    "answer_en": "...",
    "answer_hi": "...",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which built-in object handles date and time?",
    "question_hi": "कौन सा built-in object date और time को handle करता है?",
    "options_en": ["Time", "Clock", "Date", "Calendar"],
    "options_hi": ["Time", "Clock", "Date", "Calendar"],
    "answer_en": "Date",
    "answer_hi": "Date",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method reverses an array?",
    "question_hi": "कौन सा method array को reverse करता है?",
    "options_en": ["flip()", "reverse()", "swap()", "invert()"],
    "options_hi": ["flip()", "reverse()", "swap()", "invert()"],
    "answer_en": "reverse()",
    "answer_hi": "reverse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What will be output: Boolean('')?",
    "question_hi": "Boolean('') का output क्या होगा?",
    "options_en": ["true", "false", "undefined", "error"],
    "options_hi": ["true", "false", "undefined", "error"],
    "answer_en": "false",
    "answer_hi": "false",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method returns keys of an object?",
    "question_hi": "कौन सा method object के keys देता है?",
    "options_en": ["Object.keys()", "Object.values()", "Object.list()", "keys()"],
    "options_hi": ["Object.keys()", "Object.values()", "Object.list()", "keys()"],
    "answer_en": "Object.keys()",
    "answer_hi": "Object.keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method returns values of an object?",
    "question_hi": "कौन सा method object के values देता है?",
    "options_en": ["Object.keys()", "Object.values()", "Object.entries()", "values()"],
    "options_hi": ["Object.keys()", "Object.values()", "Object.entries()", "values()"],
    "answer_en": "Object.values()",
    "answer_hi": "Object.values()",
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
