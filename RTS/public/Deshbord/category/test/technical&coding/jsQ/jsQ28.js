const questions= [
  {
    num: 1,
    question_en: "What does `var` keyword do in JavaScript?",
    question_hi: "`var` कीवर्ड JavaScript में क्या करता है?",
    options_en: ["Declares a variable", "Creates a function", "Declares a constant", "Deletes a variable"],
    options_hi: ["एक वेरिएबल घोषित करता है", "एक फंक्शन बनाता है", "एक कॉन्स्टेंट घोषित करता है", "एक वेरिएबल हटाता है"],
    answer_en: "Declares a variable",
    answer_hi: "एक वेरिएबल घोषित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method converts an object to JSON?",
    question_hi: "कौन-सा मेथड ऑब्जेक्ट को JSON में बदलता है?",
    options_en: ["JSON.stringify()", "JSON.parse()", "Object.toJSON()", "Object.stringify()"],
    options_hi: ["JSON.stringify()", "JSON.parse()", "Object.toJSON()", "Object.stringify()"],
    answer_en: "JSON.stringify()",
    answer_hi: "JSON.stringify()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which operator is used for strict equality?",
    question_hi: "कड़ी समानता के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["===", "==", "!==", "="],
    options_hi: ["===", "==", "!==", "="],
    answer_en: "===",
    answer_hi: "===",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which keyword declares a constant variable?",
    question_hi: "कौन-सा कीवर्ड एक स्थायी वेरिएबल घोषित करता है?",
    options_en: ["const", "let", "var", "constant"],
    options_hi: ["const", "let", "var", "constant"],
    answer_en: "const",
    answer_hi: "const",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which function is used to parse a string to integer?",
    question_hi: "कौन-सा फंक्शन स्ट्रिंग को पूर्णांक में बदलता है?",
    options_en: ["parseInt()", "parseFloat()", "Number()", "String()"],
    options_hi: ["parseInt()", "parseFloat()", "Number()", "String()"],
    answer_en: "parseInt()",
    answer_hi: "parseInt()",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method adds an element at the end of an array?",
    question_hi: "कौन-सा मेथड ऐरे के अंत में एलिमेंट जोड़ता है?",
    options_en: ["push()", "pop()", "shift()", "unshift()"],
    options_hi: ["push()", "pop()", "shift()", "unshift()"],
    answer_en: "push()",
    answer_hi: "push()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method removes the last element of an array?",
    question_hi: "कौन-सा मेथड ऐरे का आखिरी एलिमेंट हटाता है?",
    options_en: ["pop()", "push()", "shift()", "unshift()"],
    options_hi: ["pop()", "push()", "shift()", "unshift()"],
    answer_en: "pop()",
    answer_hi: "pop()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which keyword is used to create a class in JavaScript?",
    question_hi: "JavaScript में क्लास बनाने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["class", "function", "object", "new"],
    options_hi: ["class", "function", "object", "new"],
    answer_en: "class",
    answer_hi: "class",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which method executes a function for each array element?",
    question_hi: "कौन-सा मेथड ऐरे के प्रत्येक एलिमेंट पर फंक्शन चलाता है?",
    options_en: ["forEach()", "map()", "filter()", "reduce()"],
    options_hi: ["forEach()", "map()", "filter()", "reduce()"],
    answer_en: "forEach()",
    answer_hi: "forEach()",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which operator is used to concatenate strings?",
    question_hi: "स्ट्रिंग जोड़ने के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["+", "-", "*", "&"],
    options_hi: ["+", "-", "*", "&"],
    answer_en: "+",
    answer_hi: "+",
    attempted: false,
    selected: ""
  },


  {
    num: 11,
    question_en: "Which method creates a new array with elements that pass a test?",
    question_hi: "कौन-सा मेथड एक नया ऐरे बनाता है जिसमें केवल टेस्ट पास करने वाले एलिमेंट होंगे?",
    options_en: ["filter()", "map()", "reduce()", "forEach()"],
    options_hi: ["filter()", "map()", "reduce()", "forEach()"],
    answer_en: "filter()",
    answer_hi: "filter()",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method creates a new array by transforming elements?",
    question_hi: "कौन-सा मेथड एलिमेंट्स को बदलकर नया ऐरे बनाता है?",
    options_en: ["map()", "filter()", "reduce()", "forEach()"],
    options_hi: ["map()", "filter()", "reduce()", "forEach()"],
    answer_en: "map()",
    answer_hi: "map()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which method reduces an array to a single value?",
    question_hi: "कौन-सा मेथड ऐरे को एक सिंगल वैल्यू में बदलता है?",
    options_en: ["reduce()", "map()", "filter()", "forEach()"],
    options_hi: ["reduce()", "map()", "filter()", "forEach()"],
    answer_en: "reduce()",
    answer_hi: "reduce()",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method splits a string into an array?",
    question_hi: "कौन-सा मेथड स्ट्रिंग को ऐरे में बदलता है?",
    options_en: ["split()", "join()", "slice()", "substring()"],
    options_hi: ["split()", "join()", "slice()", "substring()"],
    answer_en: "split()",
    answer_hi: "split()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which method joins array elements into a string?",
    question_hi: "कौन-सा मेथड ऐरे के एलिमेंट्स को स्ट्रिंग में जोड़ता है?",
    options_en: ["join()", "split()", "concat()", "push()"],
    options_hi: ["join()", "split()", "concat()", "push()"],
    answer_en: "join()",
    answer_hi: "join()",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which operator is used to check if a value exists in an array?",
    question_hi: "कौन-सा ऑपरेटर यह जांचने के लिए उपयोग होता है कि वैल्यू ऐरे में है या नहीं?",
    options_en: ["includes()", "indexOf()", "in", "contains()"],
    options_hi: ["includes()", "indexOf()", "in", "contains()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which keyword is used for asynchronous operations?",
    question_hi: "एसिंक्रोनस ऑपरेशन्स के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["async", "await", "then", "promise"],
    options_hi: ["async", "await", "then", "promise"],
    answer_en: "async",
    answer_hi: "async",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to parse a JSON string?",
    question_hi: "JSON स्ट्रिंग को पार्स करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "String.parse()"],
    options_hi: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "String.parse()"],
    answer_en: "JSON.parse()",
    answer_hi: "JSON.parse()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which operator is used to assign a value?",
    question_hi: "किस ऑपरेटर का उपयोग वैल्यू असाइन करने के लिए होता है?",
    options_en: ["=", "==", "===", "+="],
    options_hi: ["=", "==", "===", "+="],
    answer_en: "=",
    answer_hi: "=",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which statement is used for conditional execution?",
    question_hi: "शर्तीय निष्पादन के लिए कौन-सा स्टेटमेंट उपयोग होता है?",
    options_en: ["if", "for", "while", "switch"],
    options_hi: ["if", "for", "while", "switch"],
    answer_en: "if",
    answer_hi: "if",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which keyword creates a block-scoped variable?",
    question_hi: "कौन-सा कीवर्ड ब्लॉक स्कोप्ड वेरिएबल बनाता है?",
    options_en: ["let", "var", "const", "block"],
    options_hi: ["let", "var", "const", "block"],
    answer_en: "let",
    answer_hi: "let",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method adds elements to the beginning of an array?",
    question_hi: "कौन-सा मेथड ऐरे की शुरुआत में एलिमेंट जोड़ता है?",
    options_en: ["unshift()", "push()", "shift()", "concat()"],
    options_hi: ["unshift()", "push()", "shift()", "concat()"],
    answer_en: "unshift()",
    answer_hi: "unshift()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which method removes the first element of an array?",
    question_hi: "कौन-सा मेथड ऐरे का पहला एलिमेंट हटाता है?",
    options_en: ["shift()", "pop()", "push()", "unshift()"],
    options_hi: ["shift()", "pop()", "push()", "unshift()"],
    answer_en: "shift()",
    answer_hi: "shift()",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which function is used to call a function with a specific 'this' value?",
    question_hi: "कौन-सा फंक्शन एक विशेष 'this' वैल्यू के साथ फंक्शन कॉल करने के लिए उपयोग होता है?",
    options_en: ["call()", "apply()", "bind()", "execute()"],
    options_hi: ["call()", "apply()", "bind()", "execute()"],
    answer_en: "call()",
    answer_hi: "call()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which function allows passing arguments as an array?",
    question_hi: "कौन-सा फंक्शन आर्गुमेंट्स को ऐरे के रूप में पास करने की अनुमति देता है?",
    options_en: ["apply()", "call()", "bind()", "execute()"],
    options_hi: ["apply()", "call()", "bind()", "execute()"],
    answer_en: "apply()",
    answer_hi: "apply()",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method creates a shallow copy of an array?",
    question_hi: "कौन-सा मेथड ऐरे की शैलो कॉपी बनाता है?",
    options_en: ["slice()", "splice()", "concat()", "copy()"],
    options_hi: ["slice()", "splice()", "concat()", "copy()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which method changes the contents of an array?",
    question_hi: "कौन-सा मेथड ऐरे की सामग्री बदलता है?",
    options_en: ["splice()", "slice()", "concat()", "push()"],
    options_hi: ["splice()", "slice()", "concat()", "push()"],
    answer_en: "splice()",
    answer_hi: "splice()",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which statement is used to handle exceptions?",
    question_hi: "एक्सेप्शन को हैंडल करने के लिए कौन-सा स्टेटमेंट उपयोग होता है?",
    options_en: ["try...catch", "if...else", "switch", "for"],
    options_hi: ["try...catch", "if...else", "switch", "for"],
    answer_en: "try...catch",
    answer_hi: "try...catch",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which operator is used for logical AND?",
    question_hi: "लॉजिकल AND के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["&&", "||", "!", "&"],
    options_hi: ["&&", "||", "!", "&"],
    answer_en: "&&",
    answer_hi: "&&",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which operator is used for logical OR?",
    question_hi: "लॉजिकल OR के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["||", "&&", "!", "|"],
    options_hi: ["||", "&&", "!", "|"],
    answer_en: "||",
    answer_hi: "||",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which keyword is used to refer to the current object?",
    question_hi: "कौन-सा कीवर्ड वर्तमान ऑब्जेक्ट को संदर्भित करने के लिए उपयोग होता है?",
    options_en: ["this", "self", "current", "object"],
    options_hi: ["this", "self", "current", "object"],
    answer_en: "this",
    answer_hi: "this",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method sorts the elements of an array?",
    question_hi: "कौन-सा मेथड ऐरे के एलिमेंट्स को सॉर्ट करता है?",
    options_en: ["sort()", "reverse()", "map()", "filter()"],
    options_hi: ["sort()", "reverse()", "map()", "filter()"],
    answer_en: "sort()",
    answer_hi: "sort()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which method reverses the elements of an array?",
    question_hi: "कौन-सा मेथड ऐरे के एलिमेंट्स को रिवर्स करता है?",
    options_en: ["reverse()", "sort()", "map()", "filter()"],
    options_hi: ["reverse()", "sort()", "map()", "filter()"],
    answer_en: "reverse()",
    answer_hi: "reverse()",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which operator is used for comparison (less than)?",
    question_hi: "कौन-सा ऑपरेटर तुलना (छोटा) के लिए उपयोग होता है?",
    options_en: ["<", ">", "<=", ">="],
    options_hi: ["<", ">", "<=", ">="],
    answer_en: "<",
    answer_hi: "<",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which operator is used for comparison (greater than)?",
    question_hi: "कौन-सा ऑपरेटर तुलना (बड़ा) के लिए उपयोग होता है?",
    options_en: [">", "<", ">=", "<="],
    options_hi: [">", "<", ">=", "<="],
    answer_en: ">",
    answer_hi: ">",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method merges two or more arrays?",
    question_hi: "कौन-सा मेथड दो या अधिक ऐरे को मर्ज करता है?",
    options_en: ["concat()", "push()", "merge()", "join()"],
    options_hi: ["concat()", "push()", "merge()", "join()"],
    answer_en: "concat()",
    answer_hi: "concat()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which keyword is used to define a function?",
    question_hi: "कौन-सा कीवर्ड फंक्शन को डिफाइन करने के लिए उपयोग होता है?",
    options_en: ["function", "func", "def", "method"],
    options_hi: ["function", "func", "def", "method"],
    answer_en: "function",
    answer_hi: "function",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method checks if a string starts with specific characters?",
    question_hi: "कौन-सा मेथड जांचता है कि स्ट्रिंग किसी विशेष कैरेक्टर से शुरू होती है?",
    options_en: ["startsWith()", "endsWith()", "includes()", "match()"],
    options_hi: ["startsWith()", "endsWith()", "includes()", "match()"],
    answer_en: "startsWith()",
    answer_hi: "startsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which method checks if a string ends with specific characters?",
    question_hi: "कौन-सा मेथड जांचता है कि स्ट्रिंग किसी विशेष कैरेक्टर पर खत्म होती है?",
    options_en: ["endsWith()", "startsWith()", "includes()", "match()"],
    options_hi: ["endsWith()", "startsWith()", "includes()", "match()"],
    answer_en: "endsWith()",
    answer_hi: "endsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method checks if a string includes a substring?",
    question_hi: "कौन-सा मेथड जांचता है कि स्ट्रिंग में कोई सबस्ट्रिंग शामिल है?",
    options_en: ["includes()", "indexOf()", "search()", "match()"],
    options_hi: ["includes()", "indexOf()", "search()", "match()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which keyword defines a promise in JavaScript?",
    question_hi: "कौन-सा कीवर्ड JavaScript में प्रॉमिस को डिफाइन करता है?",
    options_en: ["Promise", "Async", "Await", "Defer"],
    options_hi: ["Promise", "Async", "Await", "Defer"],
    answer_en: "Promise",
    answer_hi: "Promise",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method attaches a handler for resolved promises?",
    question_hi: "कौन-सा मेथड हल किए गए प्रॉमिस के लिए हैंडलर अटैच करता है?",
    options_en: ["then()", "catch()", "finally()", "all()"],
    options_hi: ["then()", "catch()", "finally()", "all()"],
    answer_en: "then()",
    answer_hi: "then()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which method handles rejected promises?",
    question_hi: "कौन-सा मेथड रिजेक्टेड प्रॉमिस को हैंडल करता है?",
    options_en: ["catch()", "then()", "finally()", "all()"],
    options_hi: ["catch()", "then()", "finally()", "all()"],
    answer_en: "catch()",
    answer_hi: "catch()",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method executes code regardless of promise outcome?",
    question_hi: "कौन-सा मेथड प्रॉमिस के परिणाम की परवाह किए बिना कोड चलाता है?",
    options_en: ["finally()", "then()", "catch()", "all()"],
    options_hi: ["finally()", "then()", "catch()", "all()"],
    answer_en: "finally()",
    answer_hi: "finally()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which method returns a promise when all promises are resolved?",
    question_hi: "कौन-सा मेथड तब प्रॉमिस लौटाता है जब सभी प्रॉमिस हल हो जाएँ?",
    options_en: ["Promise.all()", "Promise.any()", "Promise.race()", "Promise.resolve()"],
    options_hi: ["Promise.all()", "Promise.any()", "Promise.race()", "Promise.resolve()"],
    answer_en: "Promise.all()",
    answer_hi: "Promise.all()",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method returns a promise when any promise is resolved?",
    question_hi: "कौन-सा मेथड तब प्रॉमिस लौटाता है जब कोई भी प्रॉमिस हल हो जाए?",
    options_en: ["Promise.any()", "Promise.all()", "Promise.race()", "Promise.resolve()"],
    options_hi: ["Promise.any()", "Promise.all()", "Promise.race()", "Promise.resolve()"],
    answer_en: "Promise.any()",
    answer_hi: "Promise.any()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which method returns a promise that resolves or rejects as soon as one promise settles?",
    question_hi: "कौन-सा मेथड वह प्रॉमिस लौटाता है जो तुरंत हल या रिजेक्ट होता है जब एक प्रॉमिस पूरा होता है?",
    options_en: ["Promise.race()", "Promise.all()", "Promise.any()", "Promise.resolve()"],
    options_hi: ["Promise.race()", "Promise.all()", "Promise.any()", "Promise.resolve()"],
    answer_en: "Promise.race()",
    answer_hi: "Promise.race()",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method converts a number to a string?",
    question_hi: "कौन-सा मेथड नंबर को स्ट्रिंग में बदलता है?",
    options_en: ["toString()", "String()", "Number()", "valueOf()"],
    options_hi: ["toString()", "String()", "Number()", "valueOf()"],
    answer_en: "toString()",
    answer_hi: "toString()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which method converts a string to a number?",
    question_hi: "कौन-सा मेथड स्ट्रिंग को नंबर में बदलता है?",
    options_en: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
    options_hi: ["Number()", "parseInt()", "parseFloat()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method returns the index of the first occurrence of a value in an array?",
    question_hi: "कौन-सा मेथड ऐरे में किसी वैल्यू के पहले occurrence का इंडेक्स लौटाता है?",
    options_en: ["indexOf()", "lastIndexOf()", "findIndex()", "search()"],
    options_hi: ["indexOf()", "lastIndexOf()", "findIndex()", "search()"],
    answer_en: "indexOf()",
    answer_hi: "indexOf()",
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
