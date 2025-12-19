const questions = [
  {
    "num": 1,
    "question_en": "Which HTML tag is used to define a short quotation?",
    "question_hi": "संक्षिप्त उद्धरण को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["q", "quote", "blockquote", "small"],
    "options_hi": ["q", "quote", "blockquote", "small"],
    "answer_en": "q",
    "answer_hi": "q",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which attribute is used to disable an input field?",
    "question_hi": "इनपुट फ़ील्ड को निष्क्रिय करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["disabled", "readonly", "block", "inactive"],
    "options_hi": ["disabled", "readonly", "block", "inactive"],
    "answer_en": "disabled",
    "answer_hi": "disabled",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML tag represents the user’s keyboard input?",
    "question_hi": "कौन सा HTML टैग उपयोगकर्ता के कीबोर्ड इनपुट को दर्शाता है?",
    "options_en": ["kbd", "code", "input", "key"],
    "options_hi": ["kbd", "code", "input", "key"],
    "answer_en": "kbd",
    "answer_hi": "kbd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which tag is used to group related form elements?",
    "question_hi": "संबंधित फॉर्म तत्वों को समूहित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["fieldset", "group", "legend", "formset"],
    "options_hi": ["fieldset", "group", "legend", "formset"],
    "answer_en": "fieldset",
    "answer_hi": "fieldset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which tag defines a description list?",
    "question_hi": "कौन सा टैग विवरण सूची (description list) को परिभाषित करता है?",
    "options_en": ["dl", "dd", "dt", "list"],
    "options_hi": ["dl", "dd", "dt", "list"],
    "answer_en": "dl",
    "answer_hi": "dl",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which HTML attribute is used to link a label with a form input?",
    "question_hi": "फॉर्म इनपुट के साथ लेबल को लिंक करने के लिए कौन सा HTML attribute उपयोग होता है?",
    "options_en": ["for", "link", "id", "bind"],
    "options_hi": ["for", "link", "id", "bind"],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML tag is used to display preformatted text?",
    "question_hi": "पूर्व-स्वरूपित (preformatted) टेक्स्ट दिखाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["pre", "code", "format", "text"],
    "options_hi": ["pre", "code", "format", "text"],
    "answer_en": "pre",
    "answer_hi": "pre",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag marks text for highlighting?",
    "question_hi": "कौन सा HTML टैग टेक्स्ट को हाइलाइट करने के लिए उपयोग होता है?",
    "options_en": ["mark", "highlight", "span", "strong"],
    "options_hi": ["mark", "highlight", "span", "strong"],
    "answer_en": "mark",
    "answer_hi": "mark",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which tag defines a line break in HTML?",
    "question_hi": "HTML में लाइन ब्रेक को परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["br", "lb", "line", "break"],
    "options_hi": ["br", "lb", "line", "break"],
    "answer_en": "br",
    "answer_hi": "br",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML tag defines the footer of a page?",
    "question_hi": "पेज के फ़ूटर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["footer", "bottom", "end", "section"],
    "options_hi": ["footer", "bottom", "end", "section"],
    "answer_en": "footer",
    "answer_hi": "footer",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which HTML attribute is used to open a link in a new tab?",
    "question_hi": "लिंक को नए टैब में खोलने के लिए कौन सा HTML attribute उपयोग होता है?",
    "options_en": ["target", "open", "new", "blank"],
    "options_hi": ["target", "open", "new", "blank"],
    "answer_en": "target",
    "answer_hi": "target",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which value of target attribute opens a link in a new tab?",
    "question_hi": "target attribute का कौन सा मान लिंक को नए टैब में खोलता है?",
    "options_en": ["_blank", "_new", "_tab", "_open"],
    "options_hi": ["_blank", "_new", "_tab", "_open"],
    "answer_en": "_blank",
    "answer_hi": "_blank",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which tag defines emphasized text?",
    "question_hi": "कौन सा टैग जोर दिया गया टेक्स्ट (emphasized text) को परिभाषित करता है?",
    "options_en": ["em", "i", "strong", "b"],
    "options_hi": ["em", "i", "strong", "b"],
    "answer_en": "em",
    "answer_hi": "em",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which tag defines important text?",
    "question_hi": "कौन सा टैग महत्वपूर्ण टेक्स्ट को परिभाषित करता है?",
    "options_en": ["strong", "b", "mark", "em"],
    "options_hi": ["strong", "b", "mark", "em"],
    "answer_en": "strong",
    "answer_hi": "strong",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML tag embeds external content using a URL?",
    "question_hi": "URL का उपयोग करके बाहरी सामग्री एम्बेड करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["iframe", "embed", "object", "frame"],
    "options_hi": ["iframe", "embed", "object", "frame"],
    "answer_en": "iframe",
    "answer_hi": "iframe",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which HTML element is used to display progress of a task?",
    "question_hi": "किस HTML तत्व का उपयोग किसी कार्य की प्रगति दिखाने के लिए होता है?",
    "options_en": ["progress", "meter", "status", "bar"],
    "options_hi": ["progress", "meter", "status", "bar"],
    "answer_en": "progress",
    "answer_hi": "progress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which element displays a measurement value within a range?",
    "question_hi": "कौन सा तत्व किसी सीमा के भीतर माप मान दिखाता है?",
    "options_en": ["meter", "progress", "range", "value"],
    "options_hi": ["meter", "progress", "range", "value"],
    "answer_en": "meter",
    "answer_hi": "meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML element defines user contact information?",
    "question_hi": "कौन सा HTML तत्व उपयोगकर्ता की संपर्क जानकारी को परिभाषित करता है?",
    "options_en": ["address", "contact", "info", "details"],
    "options_hi": ["address", "contact", "info", "details"],
    "answer_en": "address",
    "answer_hi": "address",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which tag is used to create an ordered list?",
    "question_hi": "क्रमबद्ध सूची (ordered list) बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["ol", "ul", "li", "list"],
    "options_hi": ["ol", "ul", "li", "list"],
    "answer_en": "ol",
    "answer_hi": "ol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which tag is used to create an unordered list?",
    "question_hi": "अक्रमबद्ध सूची (unordered list) बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["ul", "ol", "li", "list"],
    "options_hi": ["ul", "ol", "li", "list"],
    "answer_en": "ul",
    "answer_hi": "ul",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which HTML tag defines a clickable button?",
    "question_hi": "कौन सा HTML टैग क्लिक करने योग्य बटन को परिभाषित करता है?",
    "options_en": ["button", "input", "submit", "click"],
    "options_hi": ["button", "input", "submit", "click"],
    "answer_en": "button",
    "answer_hi": "button",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which input type is used to select multiple options?",
    "question_hi": "एकाधिक विकल्प चुनने के लिए कौन सा इनपुट प्रकार उपयोग होता है?",
    "options_en": ["checkbox", "radio", "select", "toggle"],
    "options_hi": ["checkbox", "radio", "select", "toggle"],
    "answer_en": "checkbox",
    "answer_hi": "checkbox",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML tag is used for long quotations?",
    "question_hi": "लंबे उद्धरणों के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["blockquote", "quote", "q", "cite"],
    "options_hi": ["blockquote", "quote", "q", "cite"],
    "answer_en": "blockquote",
    "answer_hi": "blockquote",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which tag defines a table row?",
    "question_hi": "टेबल की एक पंक्ति को कौन सा टैग परिभाषित करता है?",
    "options_en": ["tr", "td", "th", "row"],
    "options_hi": ["tr", "td", "th", "row"],
    "answer_en": "tr",
    "answer_hi": "tr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which tag defines a table cell?",
    "question_hi": "टेबल सेल को कौन सा टैग परिभाषित करता है?",
    "options_en": ["td", "tr", "th", "cell"],
    "options_hi": ["td", "tr", "th", "cell"],
    "answer_en": "td",
    "answer_hi": "td",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which HTML tag defines a table header cell?",
    "question_hi": "टेबल हेडर सेल को कौन सा HTML टैग परिभाषित करता है?",
    "options_en": ["th", "td", "tr", "head"],
    "options_hi": ["th", "td", "tr", "head"],
    "answer_en": "th",
    "answer_hi": "th",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which attribute merges table cells horizontally?",
    "question_hi": "टेबल सेल को क्षैतिज रूप से मर्ज करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["colspan", "rowspan", "merge", "span"],
    "options_hi": ["colspan", "rowspan", "merge", "span"],
    "answer_en": "colspan",
    "answer_hi": "colspan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which attribute merges table cells vertically?",
    "question_hi": "टेबल सेल को लंबवत रूप से मर्ज करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["rowspan", "colspan", "merge", "height"],
    "options_hi": ["rowspan", "colspan", "merge", "height"],
    "answer_en": "rowspan",
    "answer_hi": "rowspan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which tag defines a list item?",
    "question_hi": "सूची आइटम को कौन सा टैग परिभाषित करता है?",
    "options_en": ["li", "item", "ul", "ol"],
    "options_hi": ["li", "item", "ul", "ol"],
    "answer_en": "li",
    "answer_hi": "li",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which tag is used to display an image?",
    "question_hi": "इमेज प्रदर्शित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["img", "image", "pic", "src"],
    "options_hi": ["img", "image", "pic", "src"],
    "answer_en": "img",
    "answer_hi": "img",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which HTML attribute specifies alternative text for an image?",
    "question_hi": "इमेज के लिए वैकल्पिक टेक्स्ट निर्दिष्ट करने वाला HTML attribute कौन सा है?",
    "options_en": ["alt", "title", "src", "text"],
    "options_hi": ["alt", "title", "src", "text"],
    "answer_en": "alt",
    "answer_hi": "alt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML tag embeds audio?",
    "question_hi": "ऑडियो एम्बेड करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["audio", "sound", "music", "mp3"],
    "options_hi": ["audio", "sound", "music", "mp3"],
    "answer_en": "audio",
    "answer_hi": "audio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML tag embeds a video?",
    "question_hi": "वीडियो एम्बेड करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["video", "movie", "media", "clip"],
    "options_hi": ["video", "movie", "media", "clip"],
    "answer_en": "video",
    "answer_hi": "video",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which tag represents the main heading of a webpage?",
    "question_hi": "वेबपेज की मुख्य हेडिंग को कौन सा टैग दर्शाता है?",
    "options_en": ["h1", "h2", "title", "head"],
    "options_hi": ["h1", "h2", "title", "head"],
    "answer_en": "h1",
    "answer_hi": "h1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which tag is used to define a subheading?",
    "question_hi": "उप-शीर्षक (subheading) के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["h2", "h1", "h3", "title"],
    "options_hi": ["h2", "h1", "h3", "title"],
    "answer_en": "h2",
    "answer_hi": "h2",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which attribute is used to provide a tooltip?",
    "question_hi": "टूलटिप प्रदान करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["title", "alt", "hover", "note"],
    "options_hi": ["title", "alt", "hover", "note"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML element shows a summary for a details section?",
    "question_hi": "कौन सा HTML तत्व details सेक्शन के लिए सारांश दिखाता है?",
    "options_en": ["summary", "details", "caption", "info"],
    "options_hi": ["summary", "details", "caption", "info"],
    "answer_en": "summary",
    "answer_hi": "summary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML element is used to show hidden expandable content?",
    "question_hi": "कौन सा HTML तत्व छुपी हुई विस्तार योग्य सामग्री दिखाने के लिए उपयोग होता है?",
    "options_en": ["details", "summary", "expand", "hide"],
    "options_hi": ["details", "summary", "expand", "hide"],
    "answer_en": "details",
    "answer_hi": "details",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which tag defines the document title seen in browser tab?",
    "question_hi": "ब्राउज़र टैब में दिखाई देने वाले दस्तावेज़ शीर्षक को कौन सा टैग परिभाषित करता है?",
    "options_en": ["title", "head", "h1", "meta"],
    "options_hi": ["title", "head", "h1", "meta"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML tag defines the document metadata?",
    "question_hi": "दस्तावेज़ के मेटाडेटा को कौन सा HTML टैग परिभाषित करता है?",
    "options_en": ["meta", "head", "info", "script"],
    "options_hi": ["meta", "head", "info", "script"],
    "answer_en": "meta",
    "answer_hi": "meta",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which tag defines a horizontal line?",
    "question_hi": "क्षैतिज रेखा (horizontal line) को कौन सा टैग परिभाषित करता है?",
    "options_en": ["hr", "line", "break", "border"],
    "options_hi": ["hr", "line", "break", "border"],
    "answer_en": "hr",
    "answer_hi": "hr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which tag defines a form?",
    "question_hi": "फॉर्म को परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["form", "input", "fieldset", "label"],
    "options_hi": ["form", "input", "fieldset", "label"],
    "answer_en": "form",
    "answer_hi": "form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML tag is used for inline frames?",
    "question_hi": "इनलाइन फ्रेम के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["iframe", "frame", "embed", "object"],
    "options_hi": ["iframe", "frame", "embed", "object"],
    "answer_en": "iframe",
    "answer_hi": "iframe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which attribute sets the width of an image?",
    "question_hi": "इमेज की चौड़ाई सेट करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["width", "size", "w", "length"],
    "options_hi": ["width", "size", "w", "length"],
    "answer_en": "width",
    "answer_hi": "width",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which tag contains visible page content?",
    "question_hi": "दृश्यमान पेज सामग्री किस टैग में होती है?",
    "options_en": ["body", "html", "main", "content"],
    "options_hi": ["body", "html", "main", "content"],
    "answer_en": "body",
    "answer_hi": "body",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which tag defines the structure of an HTML document?",
    "question_hi": "HTML दस्तावेज़ की संरचना कौन सा टैग परिभाषित करता है?",
    "options_en": ["html", "body", "head", "doc"],
    "options_hi": ["html", "body", "head", "doc"],
    "answer_en": "html",
    "answer_hi": "html",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which tag is used to insert JavaScript?",
    "question_hi": "JavaScript सम्मिलित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["script", "js", "code", "javascript"],
    "options_hi": ["script", "js", "code", "javascript"],
    "answer_en": "script",
    "answer_hi": "script",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which tag is used to include external CSS?",
    "question_hi": "बाहरी CSS शामिल करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["link", "style", "css", "import"],
    "options_hi": ["link", "style", "css", "import"],
    "answer_en": "link",
    "answer_hi": "link",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which attribute provides the URL for an anchor tag?",
    "question_hi": "एंकर टैग के लिए URL प्रदान करने वाला attribute कौन सा है?",
    "options_en": ["href", "src", "url", "link"],
    "options_hi": ["href", "src", "url", "link"],
    "answer_en": "href",
    "answer_hi": "href",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which tag is used to create a container for semantic grouping?",
    "question_hi": "सामान्य समूह (semantic grouping) बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["section", "div", "main", "group"],
    "options_hi": ["section", "div", "main", "group"],
    "answer_en": "section",
    "answer_hi": "section",
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
