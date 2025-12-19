const questions = [
  {
    "num": 1,
    "question_en": "Which HTML element is used to group block-level and inline elements together?",
    "question_hi": "कौन सा HTML एलिमेंट block-level और inline elements को एक साथ समूहित करता है?",
    "options_en": ["div", "span", "group", "section"],
    "options_hi": ["div", "span", "group", "section"],
    "answer_en": "div",
    "answer_hi": "div",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag represents small print or side comments?",
    "question_hi": "कौन सा HTML टैग छोटे प्रिंट या साइड टिप्पणी को दर्शाता है?",
    "options_en": ["small", "comment", "aside", "note"],
    "options_hi": ["small", "comment", "aside", "note"],
    "answer_en": "small",
    "answer_hi": "small",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML attribute is used to open a link in a new tab?",
    "question_hi": "लिंक को नई टैब में खोलने के लिए कौन सा HTML attribute उपयोग होता है?",
    "options_en": ["target=\"_blank\"", "open", "tab", "new"],
    "options_hi": ["target=\"_blank\"", "open", "tab", "new"],
    "answer_en": "target=\"_blank\"",
    "answer_hi": "target=\"_blank\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which element is used to mark emphasized text?",
    "question_hi": "कौन सा एलिमेंट emphasized टेक्स्ट को दर्शाता है?",
    "options_en": ["em", "i", "mark", "strong"],
    "options_hi": ["em", "i", "mark", "strong"],
    "answer_en": "em",
    "answer_hi": "em",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which tag defines a self-contained composition like a blog or article?",
    "question_hi": "कौन सा टैग blog या article जैसी self-contained सामग्री को परिभाषित करता है?",
    "options_en": ["article", "section", "div", "content"],
    "options_hi": ["article", "section", "div", "content"],
    "answer_en": "article",
    "answer_hi": "article",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which HTML element is used to define a label for an input?",
    "question_hi": "इनपुट के लिए लेबल परिभाषित करने हेतु कौन सा HTML एलिमेंट उपयोग होता है?",
    "options_en": ["label", "caption", "name", "tag"],
    "options_hi": ["label", "caption", "name", "tag"],
    "answer_en": "label",
    "answer_hi": "label",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 7,
    "question_en": "Which HTML tag creates an ordered list?",
    "question_hi": "कौन सा HTML टैग क्रमबद्ध सूची बनाता है?",
    "options_en": ["ol", "ul", "li", "list"],
    "options_hi": ["ol", "ul", "li", "list"],
    "answer_en": "ol",
    "answer_hi": "ol",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 8,
    "question_en": "Which HTML element is used to define keyboard input?",
    "question_hi": "कीबोर्ड इनपुट दर्शाने के लिए कौन सा HTML एलिमेंट उपयोग होता है?",
    "options_en": ["kbd", "code", "input", "pre"],
    "options_hi": ["kbd", "code", "input", "pre"],
    "answer_en": "kbd",
    "answer_hi": "kbd",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 9,
    "question_en": "Which tag is used to display scalar measurements like disk usage?",
    "question_hi": "कौन सा टैग scalar measurements (जैसे disk usage) दिखाने के लिए उपयोग होता है?",
    "options_en": ["meter", "progress", "range", "scale"],
    "options_hi": ["meter", "progress", "range", "scale"],
    "answer_en": "meter",
    "answer_hi": "meter",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 10,
    "question_en": "Which element defines a command button in a form?",
    "question_hi": "फॉर्म में command बटन परिभाषित करने वाला एलिमेंट कौन सा है?",
    "options_en": ["button", "input-button", "submit", "command"],
    "options_hi": ["button", "input-button", "submit", "command"],
    "answer_en": "button",
    "answer_hi": "button",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which element is used to highlight text?",
    "question_hi": "टेक्स्ट को highlight करने के लिए कौन सा एलिमेंट उपयोग होता है?",
    "options_en": ["mark", "highlight", "yellow", "light"],
    "options_hi": ["mark", "highlight", "yellow", "light"],
    "answer_en": "mark",
    "answer_hi": "mark",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 12,
    "question_en": "Which HTML tag represents a line break?",
    "question_hi": "लाइन ब्रेक दर्शाने वाला HTML टैग कौन सा है?",
    "options_en": ["br", "lb", "break", "ln"],
    "options_hi": ["br", "lb", "break", "ln"],
    "answer_en": "br",
    "answer_hi": "br",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 13,
    "question_en": "Which HTML tag is used for abbreviation?",
    "question_hi": "संक्षेप (abbreviation) दर्शाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["abbr", "short", "small", "note"],
    "options_hi": ["abbr", "short", "small", "note"],
    "answer_en": "abbr",
    "answer_hi": "abbr",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 14,
    "question_en": "Which HTML attribute makes form input mandatory?",
    "question_hi": "फॉर्म इनपुट को अनिवार्य बनाने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["required", "must", "mandatory", "need"],
    "options_hi": ["required", "must", "mandatory", "need"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 15,
    "question_en": "Which element defines the footer of a document?",
    "question_hi": "डॉक्यूमेंट का footer परिभाषित करने वाला एलिमेंट कौन सा है?",
    "options_en": ["footer", "bottom", "foot", "end"],
    "options_hi": ["footer", "bottom", "foot", "end"],
    "answer_en": "footer",
    "answer_hi": "footer",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which element represents a progress bar?",
    "question_hi": "कौन सा एलिमेंट progress bar दर्शाता है?",
    "options_en": ["progress", "meter", "bar", "load"],
    "options_hi": ["progress", "meter", "bar", "load"],
    "answer_en": "progress",
    "answer_hi": "progress",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 17,
    "question_en": "Which HTML tag is used to define table headings?",
    "question_hi": "टेबल में headings परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["th", "td", "thead", "hd"],
    "options_hi": ["th", "td", "thead", "hd"],
    "answer_en": "th",
    "answer_hi": "th",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 18,
    "question_en": "Which HTML element embeds external content like ads?",
    "question_hi": "कौन सा HTML एलिमेंट external content (जैसे ads) embed करता है?",
    "options_en": ["iframe", "embed", "object", "link"],
    "options_hi": ["iframe", "embed", "object", "link"],
    "answer_en": "iframe",
    "answer_hi": "iframe",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 19,
    "question_en": "Which element is used to define navigation menus?",
    "question_hi": "नेविगेशन मेनू परिभाषित करने के लिए कौन सा तत्व उपयोग होता है?",
    "options_en": ["nav", "menu", "links", "route"],
    "options_hi": ["nav", "menu", "links", "route"],
    "answer_en": "nav",
    "answer_hi": "nav",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 20,
    "question_en": "Which HTML attribute is used to specify alternative text for images?",
    "question_hi": "छवियों के लिए alternative text निर्धारित करने हेतु कौन सा attribute उपयोग होता है?",
    "options_en": ["alt", "text", "comment", "desc"],
    "options_hi": ["alt", "text", "comment", "desc"],
    "answer_en": "alt",
    "answer_hi": "alt",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which HTML tag indicates the document language?",
    "question_hi": "डॉक्यूमेंट की भाषा दर्शाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["html lang", "meta", "header", "doc"],
    "options_hi": ["html lang", "meta", "header", "doc"],
    "answer_en": "html lang",
    "answer_hi": "html lang",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 22,
    "question_en": "Which HTML tag is used for italic text?",
    "question_hi": "italic टेक्स्ट के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["i", "em", "italic", "style"],
    "options_hi": ["i", "em", "italic", "style"],
    "answer_en": "i",
    "answer_hi": "i",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 23,
    "question_en": "Which HTML element displays preformatted text?",
    "question_hi": "कौन सा HTML एलिमेंट preformatted टेक्स्ट प्रदर्शित करता है?",
    "options_en": ["pre", "code", "format", "text"],
    "options_hi": ["pre", "code", "format", "text"],
    "answer_en": "pre",
    "answer_hi": "pre",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 24,
    "question_en": "Which tag defines a dropdown list?",
    "question_hi": "ड्रॉपडाउन सूची परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["select", "option", "dropdown", "list"],
    "options_hi": ["select", "option", "dropdown", "list"],
    "answer_en": "select",
    "answer_hi": "select",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 25,
    "question_en": "Which element is used to define a description list?",
    "question_hi": "description list परिभाषित करने वाला एलिमेंट कौन सा है?",
    "options_en": ["dl", "dt", "dd", "list"],
    "options_hi": ["dl", "dt", "dd", "list"],
    "answer_en": "dl",
    "answer_hi": "dl",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which tag defines the title of a table?",
    "question_hi": "टेबल का शीर्षक (title) परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["caption", "title", "thead", "label"],
    "options_hi": ["caption", "title", "thead", "label"],
    "answer_en": "caption",
    "answer_hi": "caption",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 27,
    "question_en": "Which attribute specifies the URL of a hyperlink?",
    "question_hi": "हाइपरलिंक का URL निर्धारित करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["href", "src", "link", "url"],
    "options_hi": ["href", "src", "link", "url"],
    "answer_en": "href",
    "answer_hi": "href",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 28,
    "question_en": "Which HTML tag is used to define inline styling?",
    "question_hi": "inline styling के लिए कौन सा HTML attribute उपयोग होता है?",
    "options_en": ["style", "css", "design", "format"],
    "options_hi": ["style", "css", "design", "format"],
    "answer_en": "style",
    "answer_hi": "style",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 29,
    "question_en": "Which tag represents time or date?",
    "question_hi": "कौन सा टैग समय या तारीख दर्शाता है?",
    "options_en": ["time", "date", "clock", "moment"],
    "options_hi": ["time", "date", "clock", "moment"],
    "answer_en": "time",
    "answer_hi": "time",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 30,
    "question_en": "Which HTML tag defines a list item?",
    "question_hi": "सूची आइटम परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["li", "ul", "ol", "item"],
    "options_hi": ["li", "ul", "ol", "item"],
    "answer_en": "li",
    "answer_hi": "li",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which HTML tag defines bold text?",
    "question_hi": "bold टेक्स्ट परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["b", "strong", "bold", "bl"],
    "options_hi": ["b", "strong", "bold", "bl"],
    "answer_en": "b",
    "answer_hi": "b",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 32,
    "question_en": "Which HTML element is used to embed JavaScript?",
    "question_hi": "JavaScript embed करने के लिए कौन सा HTML एलिमेंट उपयोग होता है?",
    "options_en": ["script", "js", "code", "program"],
    "options_hi": ["script", "js", "code", "program"],
    "answer_en": "script",
    "answer_hi": "script",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 33,
    "question_en": "Which HTML element defines the website’s header?",
    "question_hi": "वेबसाइट का header परिभाषित करने वाला एलिमेंट कौन सा है?",
    "options_en": ["header", "top", "head", "nav"],
    "options_hi": ["header", "top", "head", "nav"],
    "answer_en": "header",
    "answer_hi": "header",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 34,
    "question_en": "Which HTML tag is used to insert a horizontal line?",
    "question_hi": "क्षैतिज रेखा (horizontal line) डालने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["hr", "line", "break", "hl"],
    "options_hi": ["hr", "line", "break", "hl"],
    "answer_en": "hr",
    "answer_hi": "hr",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 35,
    "question_en": "Which tag displays content in quotation marks?",
    "question_hi": "कौन सा टैग सामग्री को उद्धरण चिह्नों में दर्शाता है?",
    "options_en": ["q", "blockquote", "quote", "c"],
    "options_hi": ["q", "blockquote", "quote", "c"],
    "answer_en": "q",
    "answer_hi": "q",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which element defines a long quotation?",
    "question_hi": "लंबे उद्धरण को दर्शाने वाला एलिमेंट कौन सा है?",
    "options_en": ["blockquote", "q", "quote", "text"],
    "options_hi": ["blockquote", "q", "quote", "text"],
    "answer_en": "blockquote",
    "answer_hi": "blockquote",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 37,
    "question_en": "Which tag is used to display an image?",
    "question_hi": "इमेज प्रदर्शित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["img", "image", "src", "pic"],
    "options_hi": ["img", "image", "src", "pic"],
    "answer_en": "img",
    "answer_hi": "img",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 38,
    "question_en": "Which HTML attribute is used to set the size of a text area?",
    "question_hi": "text area का आकार निर्धारित करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["rows & cols", "size", "area", "space"],
    "options_hi": ["rows & cols", "size", "area", "space"],
    "answer_en": "rows & cols",
    "answer_hi": "rows & cols",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 39,
    "question_en": "Which HTML element is used to define a form?",
    "question_hi": "फॉर्म परिभाषित करने के लिए कौन सा HTML एलिमेंट उपयोग होता है?",
    "options_en": ["form", "input", "label", "submit"],
    "options_hi": ["form", "input", "label", "submit"],
    "answer_en": "form",
    "answer_hi": "form",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 40,
    "question_en": "Which HTML tag is used to create a table?",
    "question_hi": "टेबल बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["table", "tab", "grid", "data"],
    "options_hi": ["table", "tab", "grid", "data"],
    "answer_en": "table",
    "answer_hi": "table",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which HTML tag defines a row in a table?",
    "question_hi": "टेबल में row परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["tr", "td", "th", "row"],
    "options_hi": ["tr", "td", "th", "row"],
    "answer_en": "tr",
    "answer_hi": "tr",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 42,
    "question_en": "Which tag defines a cell in a table?",
    "question_hi": "टेबल में cell परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["td", "tr", "th", "cell"],
    "options_hi": ["td", "tr", "th", "cell"],
    "answer_en": "td",
    "answer_hi": "td",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 43,
    "question_en": "Which HTML element represents machine-readable data?",
    "question_hi": "कौन सा HTML एलिमेंट machine-readable data दर्शाता है?",
    "options_en": ["data", "meta", "input", "value"],
    "options_hi": ["data", "meta", "input", "value"],
    "answer_en": "data",
    "answer_hi": "data",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 44,
    "question_en": "Which HTML tag embeds external files like PDFs?",
    "question_hi": "कौन सा HTML टैग PDF जैसे external files embed करता है?",
    "options_en": ["embed", "object", "iframe", "file"],
    "options_hi": ["embed", "object", "iframe", "file"],
    "answer_en": "embed",
    "answer_hi": "embed",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 45,
    "question_en": "Which tag defines a clickable button?",
    "question_hi": "क्लिक करने योग्य बटन परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["button", "btn", "click", "submit"],
    "options_hi": ["button", "btn", "click", "submit"],
    "answer_en": "button",
    "answer_hi": "button",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which HTML tag is used for comments?",
    "question_hi": "कमेंट लिखने के लिए कौन सा HTML सिंटैक्स उपयोग होता है?",
    "options_en": ["<!-- -->", "//", "/* */", "comment"],
    "options_hi": ["<!-- -->", "//", "/* */", "comment"],
    "answer_en": "<!-- -->",
    "answer_hi": "<!-- -->",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 47,
    "question_en": "Which HTML tag is used to play audio files?",
    "question_hi": "ऑडियो फाइल चलाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["audio", "sound", "mp3", "play"],
    "options_hi": ["audio", "sound", "mp3", "play"],
    "answer_en": "audio",
    "answer_hi": "audio",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 48,
    "question_en": "Which HTML tag is used to play video files?",
    "question_hi": "वीडियो फाइल चलाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["video", "mp4", "movie", "play"],
    "options_hi": ["video", "mp4", "movie", "play"],
    "answer_en": "video",
    "answer_hi": "video",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 49,
    "question_en": "Which tag specifies metadata for the document?",
    "question_hi": "कौन सा टैग डॉक्यूमेंट के metadata को परिभाषित करता है?",
    "options_en": ["meta", "head", "data", "info"],
    "options_hi": ["meta", "head", "data", "info"],
    "answer_en": "meta",
    "answer_hi": "meta",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 50,
    "question_en": "Which HTML element defines the title shown in browser tab?",
    "question_hi": "ब्राउज़र टैब में दिखने वाला शीर्षक किस HTML एलिमेंट द्वारा परिभाषित होता है?",
    "options_en": ["title", "head", "header", "meta"],
    "options_hi": ["title", "head", "header", "meta"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
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
