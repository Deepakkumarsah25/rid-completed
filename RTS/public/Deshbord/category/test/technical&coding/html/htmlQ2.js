
const questions = [
    {
      "num": 1,
      "question_en": "Who is the inventor of HTML?",
      "question_hi": "HTML के आविष्कारक कौन हैं?",
      "options_en": ["Tim Berners-Lee", "Bill Gates", "Dennis Ritchie", "James Gosling"],
      "options_hi": ["Tim Berners-Lee", "Bill Gates", "Dennis Ritchie", "James Gosling"],
      "answer_en": "Tim Berners-Lee",
      "answer_hi": "Tim Berners-Lee"
    },
    {
      "num": 2,
      "question_en": "HTML files are saved with which extension?",
      "question_hi": "HTML फाइल किस एक्सटेंशन में सेव होती है?",
      "options_en": [".html", ".htm", "Both A and B", ".web"],
      "options_hi": [".html", ".htm", "Both A and B", ".web"],
      "answer_en": "Both A and B",
      "answer_hi": "Both A and B"
    },
    {
      "num": 3,
      "question_en": "Which tag is used to make text bold?",
      "question_hi": "टेक्स्ट को bold करने के लिए कौन सा टैग है?",
      "options_en": ["<b>", "<strong>", "<bold>", "Both <b> and <strong>"],
      "options_hi": ["<b>", "<strong>", "<bold>", "Both <b> and <strong>"],
      "answer_en": "Both <b> and <strong>",
      "answer_hi": "Both <b> and <strong>"
    },
    {
      "num": 4,
      "question_en": "Which tag is used to make text italic?",
      "question_hi": "टेक्स्ट को italic बनाने के लिए कौन सा टैग है?",
      "options_en": ["<i>", "<em>", "Both <i> and <em>", "<italic>"],
      "options_hi": ["<i>", "<em>", "Both <i> and <em>", "<italic>"],
      "answer_en": "Both <i> and <em>",
      "answer_hi": "Both <i> and <em>"
    },
    {
      "num": 5,
      "question_en": "Which tag is used to underline text?",
      "question_hi": "टेक्स्ट को underline करने के लिए कौन सा टैग है?",
      "options_en": ["<u>", "<underline>", "<line>", "<ins>"],
      "options_hi": ["<u>", "<underline>", "<line>", "<ins>"],
      "answer_en": "<u>",
      "answer_hi": "<u>"
    },

    {
      "num": 6,
      "question_en": "Which tag is used to display preformatted text?",
      "question_hi": "Preformatted टेक्स्ट के लिए कौन सा टैग है?",
      "options_en": ["<pre>", "<code>", "<text>", "<format>"],
      "options_hi": ["<pre>", "<code>", "<text>", "<format>"],
      "answer_en": "<pre>",
      "answer_hi": "<pre>"
    },
    {
      "num": 7,
      "question_en": "Which tag is used to display computer code?",
      "question_hi": "Computer code दिखाने के लिए कौन सा टैग है?",
      "options_en": ["<code>", "<pre>", "<kbd>", "<samp>"],
      "options_hi": ["<code>", "<pre>", "<kbd>", "<samp>"],
      "answer_en": "<code>",
      "answer_hi": "<code>"
    },
    {
      "num": 8,
      "question_en": "Which tag defines keyboard input?",
      "question_hi": "Keyboard input दिखाने वाला टैग कौन सा है?",
      "options_en": ["<kbd>", "<code>", "<input>", "<key>"],
      "options_hi": ["<kbd>", "<code>", "<input>", "<key>"],
      "answer_en": "<kbd>",
      "answer_hi": "<kbd>"
    },
    {
      "num": 9,
      "question_en": "Which tag shows sample output?",
      "question_hi": "Sample output दिखाने के लिए कौन सा टैग है?",
      "options_en": ["<samp>", "<code>", "<pre>", "<out>"],
      "options_hi": ["<samp>", "<code>", "<pre>", "<out>"],
      "answer_en": "<samp>",
      "answer_hi": "<samp>"
    },
    {
      "num": 10,
      "question_en": "Which tag highlights important text semantically?",
      "question_hi": "Semantic रूप से महत्वपूर्ण टेक्स्ट कौन सा टैग दिखाता है?",
      "options_en": ["<strong>", "<b>", "<mark>", "<em>"],
      "options_hi": ["<strong>", "<b>", "<mark>", "<em>"],
      "answer_en": "<strong>",
      "answer_hi": "<strong>"
    },

    {
      "num": 11,
      "question_en": "Which tag highlights text visually?",
      "question_hi": "टेक्स्ट को highlight करने वाला टैग कौन सा है?",
      "options_en": ["<mark>", "<highlight>", "<b>", "<bg>"],
      "options_hi": ["<mark>", "<highlight>", "<b>", "<bg>"],
      "answer_en": "<mark>",
      "answer_hi": "<mark>"
    },
    {
      "num": 12,
      "question_en": "Which tag is used to define abbreviation?",
      "question_hi": "Abbreviation के लिए कौन सा टैग है?",
      "options_en": ["<abbr>", "<short>", "<acronym>", "<abbrv>"],
      "options_hi": ["<abbr>", "<short>", "<acronym>", "<abbrv>"],
      "answer_en": "<abbr>",
      "answer_hi": "<abbr>"
    },
    {
      "num": 13,
      "question_en": "Which tag shows deleted text?",
      "question_hi": "Deleted text दिखाने वाला टैग कौन सा है?",
      "options_en": ["<del>", "<remove>", "<strike>", "<cut>"],
      "options_hi": ["<del>", "<remove>", "<strike>", "<cut>"],
      "answer_en": "<del>",
      "answer_hi": "<del>"
    },
    {
      "num": 14,
      "question_en": "Which tag shows inserted text?",
      "question_hi": "Inserted text दिखाने वाला टैग कौन सा है?",
      "options_en": ["<ins>", "<add>", "<new>", "<u>"],
      "options_hi": ["<ins>", "<add>", "<new>", "<u>"],
      "answer_en": "<ins>",
      "answer_hi": "<ins>"
    },
    {
      "num": 15,
      "question_en": "Which tag is used for short quotation?",
      "question_hi": "Short quotation के लिए कौन सा टैग है?",
      "options_en": ["<q>", "<blockquote>", "<quote>", "<abbr>"],
      "options_hi": ["<q>", "<blockquote>", "<quote>", "<abbr>"],
      "answer_en": "<q>",
      "answer_hi": "<q>"
    },

    {
      "num": 16,
      "question_en": "Which tag is used for long quotation?",
      "question_hi": "Long quotation के लिए कौन सा टैग है?",
      "options_en": ["<blockquote>", "<q>", "<quote>", "<long>"],
      "options_hi": ["<blockquote>", "<q>", "<quote>", "<long>"],
      "answer_en": "<blockquote>",
      "answer_hi": "<blockquote>"
    },
    {
      "num": 17,
      "question_en": "Which tag defines address information?",
      "question_hi": "Address जानकारी किस टैग से दी जाती है?",
      "options_en": ["<address>", "<location>", "<contact>", "<info>"],
      "options_hi": ["<address>", "<location>", "<contact>", "<info>"],
      "answer_en": "<address>",
      "answer_hi": "<address>"
    },
    {
      "num": 18,
      "question_en": "Which tag is used to define citation?",
      "question_hi": "Citation (संदर्भ) के लिए कौन सा टैग है?",
      "options_en": ["<cite>", "<ref>", "<quote>", "<src>"],
      "options_hi": ["<cite>", "<ref>", "<quote>", "<src>"],
      "answer_en": "<cite>",
      "answer_hi": "<cite>"
    },
    {
      "num": 19,
      "question_en": "Which tag is used to create dropdown list?",
      "question_hi": "Dropdown list बनाने वाला टैग कौन सा है?",
      "options_en": ["<select>", "<option>", "<list>", "<dropdown>"],
      "options_hi": ["<select>", "<option>", "<list>", "<dropdown>"],
      "answer_en": "<select>",
      "answer_hi": "<select>"
    },
    {
      "num": 20,
      "question_en": "Which tag defines dropdown options?",
      "question_hi": "Dropdown के विकल्प किस टैग से बनते हैं?",
      "options_en": ["<option>", "<select>", "<list>", "<value>"],
      "options_hi": ["<option>", "<select>", "<list>", "<value>"],
      "answer_en": "<option>",
      "answer_hi": "<option>"
    },

    {
      "num": 21,
      "question_en": "Which tag groups related options?",
      "question_hi": "Related options को group करने वाला टैग कौन सा है?",
      "options_en": ["<optgroup>", "<group>", "<option>", "<select>"],
      "options_hi": ["<optgroup>", "<group>", "<option>", "<select>"],
      "answer_en": "<optgroup>",
      "answer_hi": "<optgroup>"
    },
    {
      "num": 22,
      "question_en": "Which input type creates radio button?",
      "question_hi": "Radio button के लिए कौन सा input type है?",
      "options_en": ["radio", "checkbox", "button", "select"],
      "options_hi": ["radio", "checkbox", "button", "select"],
      "answer_en": "radio",
      "answer_hi": "radio"
    },
    {
      "num": 23,
      "question_en": "Which input type creates checkbox?",
      "question_hi": "Checkbox बनाने वाला input type कौन सा है?",
      "options_en": ["checkbox", "radio", "tick", "select"],
      "options_hi": ["checkbox", "radio", "tick", "select"],
      "answer_en": "checkbox",
      "answer_hi": "checkbox"
    },
    {
      "num": 24,
      "question_en": "Which tag is used to submit form?",
      "question_hi": "Form submit करने के लिए कौन सा टैग है?",
      "options_en": ["<input type='submit'>", "<button>", "Both A and B", "<submit>"],
      "options_hi": ["<input type='submit'>", "<button>", "Both A and B", "<submit>"],
      "answer_en": "Both A and B",
      "answer_hi": "Both A and B"
    },
    {
      "num": 25,
      "question_en": "Which attribute is used to make input mandatory?",
      "question_hi": "इनपुट को अनिवार्य बनाने वाला attribute कौन सा है?",
      "options_en": ["required", "validate", "must", "compulsory"],
      "options_hi": ["required", "validate", "must", "compulsory"],
      "answer_en": "required",
      "answer_hi": "required"
    },

    {
      "num": 26,
      "question_en": "Which attribute gives placeholder text?",
      "question_hi": "Placeholder टेक्स्ट कौन सा attribute देता है?",
      "options_en": ["placeholder", "value", "hint", "text"],
      "options_hi": ["placeholder", "value", "hint", "text"],
      "answer_en": "placeholder",
      "answer_hi": "placeholder"
    },
    {
      "num": 27,
      "question_en": "Which tag is deprecated in HTML5?",
      "question_hi": "HTML5 में कौन सा टैग deprecated है?",
      "options_en": ["<font>", "<section>", "<article>", "<nav>"],
      "options_hi": ["<font>", "<section>", "<article>", "<nav>"],
      "answer_en": "<font>",
      "answer_hi": "<font>"
    },
    {
      "num": 28,
      "question_en": "Which tag defines progress bar?",
      "question_hi": "Progress bar के लिए कौन सा टैग है?",
      "options_en": ["<progress>", "<meter>", "<range>", "<bar>"],
      "options_hi": ["<progress>", "<meter>", "<range>", "<bar>"],
      "answer_en": "<progress>",
      "answer_hi": "<progress>"
    },
    {
      "num": 29,
      "question_en": "Which tag defines measurement value?",
      "question_hi": "Measurement value दिखाने वाला टैग कौन सा है?",
      "options_en": ["<meter>", "<progress>", "<scale>", "<value>"],
      "options_hi": ["<meter>", "<progress>", "<scale>", "<value>"],
      "answer_en": "<meter>",
      "answer_hi": "<meter>"
    },
    {
      "num": 30,
      "question_en": "Which tag defines time/date?",
      "question_hi": "Date और time दिखाने वाला टैग कौन सा है?",
      "options_en": ["<time>", "<date>", "<clock>", "<datetime>"],
      "options_hi": ["<time>", "<date>", "<clock>", "<datetime>"],
      "answer_en": "<time>",
      "answer_hi": "<time>"
    },

    {
      "num": 31,
      "question_en": "Which tag loads external JavaScript file?",
      "question_hi": "External JavaScript फाइल कौन सा टैग लोड करता है?",
      "options_en": ["<script>", "<js>", "<link>", "<code>"],
      "options_hi": ["<script>", "<js>", "<link>", "<code>"],
      "answer_en": "<script>",
      "answer_hi": "<script>"
    },
    {
      "num": 32,
      "question_en": "Which attribute specifies JS file path?",
      "question_hi": "JS फाइल का path कौन सा attribute बताता है?",
      "options_en": ["src", "href", "path", "file"],
      "options_hi": ["src", "href", "path", "file"],
      "answer_en": "src",
      "answer_hi": "src"
    },
    {
      "num": 33,
      "question_en": "Which attribute specifies CSS relationship?",
      "question_hi": "CSS relationship बताने वाला attribute कौन सा है?",
      "options_en": ["rel", "href", "type", "media"],
      "options_hi": ["rel", "href", "type", "media"],
      "answer_en": "rel",
      "answer_hi": "rel"
    },
    {
      "num": 34,
      "question_en": "Which tag is used to display page footer?",
      "question_hi": "पेज का footer किस टैग से बनता है?",
      "options_en": ["<footer>", "<bottom>", "<end>", "<section>"],
      "options_hi": ["<footer>", "<bottom>", "<end>", "<section>"],
      "answer_en": "<footer>",
      "answer_hi": "<footer>"
    },
    {
      "num": 35,
      "question_en": "Which tag represents independent content?",
      "question_hi": "Independent content के लिए कौन सा टैग है?",
      "options_en": ["<article>", "<section>", "<div>", "<main>"],
      "options_hi": ["<article>", "<section>", "<div>", "<main>"],
      "answer_en": "<article>",
      "answer_hi": "<article>"
    },

    {
      "num": 36,
      "question_en": "Which tag defines sidebar content?",
      "question_hi": "Sidebar content के लिए कौन सा टैग है?",
      "options_en": ["<aside>", "<nav>", "<section>", "<footer>"],
      "options_hi": ["<aside>", "<nav>", "<section>", "<footer>"],
      "answer_en": "<aside>",
      "answer_hi": "<aside>"
    },
    {
      "num": 37,
      "question_en": "Which tag defines navigation links?",
      "question_hi": "Navigation links किस टैग से बनते हैं?",
      "options_en": ["<nav>", "<menu>", "<ul>", "<header>"],
      "options_hi": ["<nav>", "<menu>", "<ul>", "<header>"],
      "answer_en": "<nav>",
      "answer_hi": "<nav>"
    },
    {
      "num": 38,
      "question_en": "Which tag defines document header?",
      "question_hi": "डॉक्यूमेंट का header कौन सा टैग बताता है?",
      "options_en": ["<header>", "<head>", "<top>", "<nav>"],
      "options_hi": ["<header>", "<head>", "<top>", "<nav>"],
      "answer_en": "<header>",
      "answer_hi": "<header>"
    },
    {
      "num": 39,
      "question_en": "Which tag defines main content area?",
      "question_hi": "मुख्य कंटेंट एरिया कौन सा टैग दिखाता है?",
      "options_en": ["<main>", "<section>", "<article>", "<body>"],
      "options_hi": ["<main>", "<section>", "<article>", "<body>"],
      "answer_en": "<main>",
      "answer_hi": "<main>"
    },
    {
      "num": 40,
      "question_en": "Which tag embeds another webpage?",
      "question_hi": "दूसरा वेबपेज एम्बेड करने का टैग कौन सा है?",
      "options_en": ["<iframe>", "<frame>", "<object>", "<embed>"],
      "options_hi": ["<iframe>", "<frame>", "<object>", "<embed>"],
      "answer_en": "<iframe>",
      "answer_hi": "<iframe>"
    },

    {
      "num": 41,
      "question_en": "Which tag defines image caption?",
      "question_hi": "Image caption के लिए कौन सा टैग है?",
      "options_en": ["<figcaption>", "<caption>", "<title>", "<alt>"],
      "options_hi": ["<figcaption>", "<caption>", "<title>", "<alt>"],
      "answer_en": "<figcaption>",
      "answer_hi": "<figcaption>"
    },
    {
      "num": 42,
      "question_en": "Which tag groups image with caption?",
      "question_hi": "Image और caption को group करने वाला टैग कौन सा है?",
      "options_en": ["<figure>", "<img>", "<div>", "<picture>"],
      "options_hi": ["<figure>", "<img>", "<div>", "<picture>"],
      "answer_en": "<figure>",
      "answer_hi": "<figure>"
    },
    {
      "num": 43,
      "question_en": "Which tag defines responsive images?",
      "question_hi": "Responsive images के लिए कौन सा टैग है?",
      "options_en": ["<picture>", "<img>", "<srcset>", "<media>"],
      "options_hi": ["<picture>", "<img>", "<srcset>", "<media>"],
      "answer_en": "<picture>",
      "answer_hi": "<picture>"
    },
    {
      "num": 44,
      "question_en": "Which attribute supports responsive images?",
      "question_hi": "Responsive images के लिए कौन सा attribute होता है?",
      "options_en": ["srcset", "sizes", "Both A and B", "media"],
      "options_hi": ["srcset", "sizes", "Both A and B", "media"],
      "answer_en": "Both A and B",
      "answer_hi": "Both A and B"
    },
    {
      "num": 45,
      "question_en": "Which tag is used for drawing graphics?",
      "question_hi": "Graphics draw करने वाला टैग कौन सा है?",
      "options_en": ["<canvas>", "<svg>", "<img>", "<draw>"],
      "options_hi": ["<canvas>", "<svg>", "<img>", "<draw>"],
      "answer_en": "<canvas>",
      "answer_hi": "<canvas>"
    },

    {
      "num": 46,
      "question_en": "Which HTML tag is used for vector graphics?",
      "question_hi": "Vector graphics के लिए कौन सा टैग है?",
      "options_en": ["<svg>", "<canvas>", "<img>", "<graphic>"],
      "options_hi": ["<svg>", "<canvas>", "<img>", "<graphic>"],
      "answer_en": "<svg>",
      "answer_hi": "<svg>"
    },
    {
      "num": 47,
      "question_en": "Which attribute opens link in a new tab?",
      "question_hi": "लिंक को नई tab में खोलने वाला attribute कौन सा है?",
      "options_en": ["target=\"_blank\"", "newtab", "open", "href"],
      "options_hi": ["target=\"_blank\"", "newtab", "open", "href"],
      "answer_en": "target=\"_blank\"",
      "answer_hi": "target=\"_blank\""
    },
    {
      "num": 48,
      "question_en": "Which tag is used to add favicon?",
      "question_hi": "Favicon जोड़ने वाला टैग कौन सा है?",
      "options_en": ["<link>", "<meta>", "<icon>", "<style>"],
      "options_hi": ["<link>", "<meta>", "<icon>", "<style>"],
      "answer_en": "<link>",
      "answer_hi": "<link>"
    },
    {
      "num": 49,
      "question_en": "Which attribute improves form accessibility?",
      "question_hi": "Form accessibility बढ़ाने वाला attribute कौन सा है?",
      "options_en": ["aria-label", "access", "role", "alt"],
      "options_hi": ["aria-label", "access", "role", "alt"],
      "answer_en": "aria-label",
      "answer_hi": "aria-label"
    },
    {
      "num": 50,
      "question_en": "HTML tags are case-insensitive?",
      "question_hi": "क्या HTML tags case-insensitive होते हैं?",
      "options_en": ["Yes", "No", "Sometimes", "Browser dependent"],
      "options_hi": ["Yes", "No", "Sometimes", "Browser dependent"],
      "answer_en": "Yes",
      "answer_hi": "Yes"
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
