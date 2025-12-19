const questions=[
  {
    "num": 1,
    "question_en": "Which tag defines the root element of an HTML document?",
    "question_hi": "HTML दस्तावेज़ के root element को कौन सा टैग परिभाषित करता है?",
    "options": ["<root>", "<base>", "<html>", "<main>"],
    "answer": "<html>"
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to define the main content of the page?",
    "question_hi": "पेज की मुख्य सामग्री को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<main>", "<body>", "<section>", "<content>"],
    "answer": "<main>"
  },
  {
    "num": 3,
    "question_en": "Which HTML attribute is used to specify an ID for an element?",
    "question_hi": "किस HTML attribute का उपयोग किसी element को ID देने के लिए किया जाता है?",
    "options": ["class", "id", "key", "name"],
    "answer": "id"
  },
  {
    "num": 4,
    "question_en": "Which tag is used for inserting a background music/audio?",
    "question_hi": "Background music/audio जोड़ने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<bg-audio>", "<sound>", "<audio>", "<music>"],
    "answer": "<audio>"
  },
  {
    "num": 5,
    "question_en": "Which HTML tag displays computer code?",
    "question_hi": "कंप्यूटर कोड दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<pre>", "<code>", "<text>", "<script>"],
    "answer": "<code>"
  },
  {
    "num": 6,
    "question_en": "Which attribute is used to disable an HTML input field?",
    "question_hi": "HTML input field को disable करने के लिए कौन सा attribute उपयोग होता है?",
    "options": ["readonly", "disabled", "off", "pause"],
    "answer": "disabled"
  },
  {
    "num": 7,
    "question_en": "Which HTML tag represents a caption for a table?",
    "question_hi": "Table का caption दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<title>", "<caption>", "<head>", "<comment>"],
    "answer": "<caption>"
  },
  {
    "num": 8,
    "question_en": "Which tag is used to define a semantic section in HTML?",
    "question_hi": "HTML में semantic section परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<div>", "<span>", "<section>", "<layout>"],
    "answer": "<section>"
  },
  {
    "num": 9,
    "question_en": "Which tag is used to display text with equal width characters?",
    "question_hi": "Equal width characters वाले text दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<mono>", "<equal>", "<tt>", "<pre>"],
    "answer": "<tt>"
  },
  {
    "num": 10,
    "question_en": "Which tag is used to define a group of navigation links?",
    "question_hi": "Navigation links के समूह को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<nav>", "<menu>", "<links>", "<header>"],
    "answer": "<nav>"
  },

  {
    "num": 11,
    "question_en": "Which HTML attribute specifies the tooltip of an element?",
    "question_hi": "कौन सा HTML attribute किसी element का tooltip दिखाता है?",
    "options": ["placeholder", "hover", "info", "title"],
    "answer": "title"
  },
  {
    "num": 12,
    "question_en": "Which HTML tag defines emphasized text?",
    "question_hi": "Emphasized text दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<i>", "<italic>", "<em>", "<mark>"],
    "answer": "<em>"
  },
  {
    "num": 13,
    "question_en": "Which tag is used to define metadata for a webpage?",
    "question_hi": "किस टैग का उपयोग वेबपेज के metadata को परिभाषित करने के लिए किया जाता है?",
    "options": ["<meta>", "<info>", "<details>", "<data>"],
    "answer": "<meta>"
  },
  {
    "num": 14,
    "question_en": "Which attribute is used to connect label and input?",
    "question_hi": "Label और input को जोड़ने के लिए कौन सा attribute उपयोग होता है?",
    "options": ["connect", "relation", "for", "id"],
    "answer": "for"
  },
  {
    "num": 15,
    "question_en": "Which tag is used to define a multiline text input?",
    "question_hi": "Multiline text input के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<input>", "<textarea>", "<text>", "<longtext>"],
    "answer": "<textarea>"
  },
  {
    "num": 16,
    "question_en": "Which HTML tag is used to render mathematical formulas?",
    "question_hi": "Mathematical formulas रेंडर करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<math>", "<formula>", "<eq>", "<calc>"],
    "answer": "<math>"
  },
  {
    "num": 17,
    "question_en": "Which element defines a description list?",
    "question_hi": "Description list को परिभाषित करने के लिए कौन सा तत्व उपयोग होता है?",
    "options": ["<dl>", "<dt>", "<dd>", "<list>"],
    "answer": "<dl>"
  },
  {
    "num": 18,
    "question_en": "Which HTML tag represents keyboard input text?",
    "question_hi": "Keyboard input text को दर्शाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<kbd>", "<key>", "<press>", "<btn>"],
    "answer": "<kbd>"
  },
  {
    "num": 19,
    "question_en": "Which tag is used to mark deleted text?",
    "question_hi": "Deleted text दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<cut>", "<del>", "<remove>", "<hide>"],
    "answer": "<del>"
  },
  {
    "num": 20,
    "question_en": "Which tag highlights inserted text?",
    "question_hi": "Inserted text दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<ins>", "<insert>", "<add>", "<mark>"],
    "answer": "<ins>"
  },

  {
    "num": 21,
    "question_en": "Which HTML attribute sets maximum input length?",
    "question_hi": "Maximum input length सेट करने के लिए कौन सा attribute उपयोग होता है?",
    "options": ["maxlength", "limit", "size", "max"],
    "answer": "maxlength"
  },
  {
    "num": 22,
    "question_en": "Which element defines an interactive disclosure widget?",
    "question_hi": "Interactive disclosure widget को परिभाषित करने के लिए कौन सा तत्व उपयोग होता है?",
    "options": ["<details>", "<summary>", "<info>", "<dialog>"],
    "answer": "<details>"
  },
  {
    "num": 23,
    "question_en": "Which tag defines the summary of a details element?",
    "question_hi": "Details element के सारांश को दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<sum>", "<brief>", "<summary>", "<short>"],
    "answer": "<summary>"
  },
  {
    "num": 24,
    "question_en": "Which tag defines contact information?",
    "question_hi": "Contact information दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<contact>", "<info>", "<address>", "<footer>"],
    "answer": "<address>"
  },
  {
    "num": 25,
    "question_en": "Which element defines scalar measurements like progress?",
    "question_hi": "Progress जैसी scalar measurements दिखाने के लिए कौन सा HTML तत्व उपयोग होता है?",
    "options": ["<progress>", "<meter>", "<range>", "<value>"],
    "answer": "<meter>"
  },
  {
    "num": 26,
    "question_en": "Which element shows a task completion progress bar?",
    "question_hi": "Task completion progress bar दिखाने के लिए कौन सा तत्व उपयोग होता है?",
    "options": ["<progress>", "<bar>", "<meter>", "<range>"],
    "answer": "<progress>"
  },
  {
    "num": 27,
    "question_en": "Which HTML element defines a popup dialog box?",
    "question_hi": "Popup dialog box दिखाने के लिए कौन सा HTML तत्व उपयोग होता है?",
    "options": ["<popup>", "<dialog>", "<msg>", "<alert>"],
    "answer": "<dialog>"
  },
  {
    "num": 28,
    "question_en": "Which tag is used to group related form elements?",
    "question_hi": "Related form elements को group करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<group>", "<fieldset>", "<legend>", "<form>"],
    "answer": "<fieldset>"
  },
  {
    "num": 29,
    "question_en": "Which tag provides a caption for a fieldset?",
    "question_hi": "Fieldset के लिए caption देने वाला टैग कौन सा है?",
    "options": ["<head>", "<label>", "<legend>", "<cap>"],
    "answer": "<legend>"
  },
  {
    "num": 30,
    "question_en": "Which tag represents a figure with a caption?",
    "question_hi": "Caption सहित figure दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<figure>", "<caption>", "<img>", "<photo>"],
    "answer": "<figure>"
  },

  {
    "num": 31,
    "question_en": "Which element adds a caption to a figure?",
    "question_hi": "Figure को caption देने के लिए कौन सा तत्व उपयोग होता है?",
    "options": ["<caption>", "<fc>", "<figcaption>", "<head>"],
    "answer": "<figcaption>"
  },
  {
    "num": 32,
    "question_en": "Which tag includes external style sheets?",
    "question_hi": "External style sheets को जोड़ने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<css>", "<style>", "<link>", "<head>"],
    "answer": "<link>"
  },
  {
    "num": 33,
    "question_en": "Which attribute specifies an image map?",
    "question_hi": "Image map निर्दिष्ट करने के लिए कौन सा attribute उपयोग होता है?",
    "options": ["map", "usemap", "imagemap", "coords"],
    "answer": "usemap"
  },
  {
    "num": 34,
    "question_en": "Which tag defines clickable areas in an image map?",
    "question_hi": "Image map में clickable areas परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<area>", "<spot>", "<click>", "<zone>"],
    "answer": "<area>"
  },
  {
    "num": 35,
    "question_en": "Which HTML element embeds external content like ads?",
    "question_hi": "Ads जैसे external content embed करने के लिए कौन सा HTML तत्व उपयोग होता है?",
    "options": ["<embed>", "<iframe>", "<frame>", "<window>"],
    "answer": "<iframe>"
  },
  {
    "num": 36,
    "question_en": "Which tag is used to embed external objects?",
    "question_hi": "External objects embed करने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<object>", "<embed>", "<iframe>", "<import>"],
    "answer": "<object>"
  },
  {
    "num": 37,
    "question_en": "Which attribute defines an object's fallback text?",
    "question_hi": "Object के fallback text को कौन सा attribute सेट करता है?",
    "options": ["fallback", "data", "title", "alt"],
    "answer": "data"
  },
  {
    "num": 38,
    "question_en": "Which tag represents bidirectional override?",
    "question_hi": "Bidirectional override के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<bdo>", "<dir>", "<rev>", "<flip>"],
    "answer": "<bdo>"
  },
  {
    "num": 39,
    "question_en": "Which attribute controls text direction?",
    "question_hi": "Text direction को नियंत्रित करने के लिए कौन सा attribute उपयोग होता है?",
    "options": ["dir", "text-direction", "flow", "align"],
    "answer": "dir"
  },
  {
    "num": 40,
    "question_en": "Which tag defines an abbreviation?",
    "question_hi": "Abbreviation के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<abbr>", "<short>", "<brief>", "<cut>"],
    "answer": "<abbr>"
  },

  {
    "num": 41,
    "question_en": "Which HTML tag is used for quotations?",
    "question_hi": "Quotations दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<quote>", "<q>", "<qt>", "<msg>"],
    "answer": "<q>"
  },
  {
    "num": 42,
    "question_en": "Which tag defines long quotations?",
    "question_hi": "Long quotations दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<blockquote>", "<longq>", "<quote>", "<q>"],
    "answer": "<blockquote>"
  },
  {
    "num": 43,
    "question_en": "Which tag is used to show sample output?",
    "question_hi": "Sample output दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<samp>", "<output>", "<result>", "<data>"],
    "answer": "<samp>"
  },
  {
    "num": 44,
    "question_en": "Which HTML tag defines a variable name?",
    "question_hi": "Variable नाम दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<var>", "<v>", "<value>", "<id>"],
    "answer": "<var>"
  },
  {
    "num": 45,
    "question_en": "Which tag is used to mark important text?",
    "question_hi": "Important text दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<important>", "<b>", "<strong>", "<em>"],
    "answer": "<strong>"
  },
  {
    "num": 46,
    "question_en": "Which HTML tag supports responsive images?",
    "question_hi": "Responsive images के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<srcset>", "<picture>", "<image>", "<figure>"],
    "answer": "<picture>"
  },
  {
    "num": 47,
    "question_en": "Which tag defines multiple image sources?",
    "question_hi": "Multiple image sources के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<source>", "<media>", "<img>", "<picture>"],
    "answer": "<source>"
  },
  {
    "num": 48,
    "question_en": "Which HTML tag is used to show output from JavaScript?",
    "question_hi": "JavaScript का output दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<output>", "<result>", "<display>", "<show>"],
    "answer": "<output>"
  },
  {
    "num": 49,
    "question_en": "Which tag defines a line break opportunity?",
    "question_hi": "Line break opportunity दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options": ["<wbr>", "<br>", "<break>", "<lb>"],
    "answer": "<wbr>"
  },
  {
    "num": 50,
    "question_en": "Which HTML tag defines an inline frame?",
    "question_hi": "Inline frame दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options": ["<frame>", "<iframe>", "<inline>", "<embed>"],
    "answer": "<iframe>"
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
