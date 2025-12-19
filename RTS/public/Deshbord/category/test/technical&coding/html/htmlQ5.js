const questions = [
  {
    "num": 1,
    "question_en": "Which tag is used to make text bold?",
    "question_hi": "कौन सा टैग टेक्स्ट को बोल्ड बनाने के लिए उपयोग होता है?",
    "options_en": ["b", "i", "strong", "em"],
    "options_hi": ["b", "i", "strong", "em"],
    "answer_en": "strong",
    "answer_hi": "strong",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which tag is used to insert a line break?",
    "question_hi": "लाइन ब्रेक डालने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["br", "hr", "p", "div"],
    "options_hi": ["br", "hr", "p", "div"],
    "answer_en": "br",
    "answer_hi": "br",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which attribute is used to open a link in a new tab?",
    "question_hi": "कौन सा attribute लिंक को नए टैब में खोलने के लिए उपयोग होता है?",
    "options_en": ["target", "href", "link", "rel"],
    "options_hi": ["target", "href", "link", "rel"],
    "answer_en": "target",
    "answer_hi": "target",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which tag is used to define a table header cell?",
    "question_hi": "टेबल हेडर सेल को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["th", "td", "tr", "table"],
    "options_hi": ["th", "td", "tr", "table"],
    "answer_en": "th",
    "answer_hi": "th",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which tag is used to create a numbered list?",
    "question_hi": "संख्याबद्ध सूची बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["ol", "ul", "li", "list"],
    "options_hi": ["ol", "ul", "li", "list"],
    "answer_en": "ol",
    "answer_hi": "ol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which tag is used to create a bulleted list?",
    "question_hi": "बुलेटेड सूची बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["ul", "ol", "li", "list"],
    "options_hi": ["ul", "ol", "li", "list"],
    "answer_en": "ul",
    "answer_hi": "ul",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which tag is used to insert an image?",
    "question_hi": "इमेज डालने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["img", "picture", "image", "src"],
    "options_hi": ["img", "picture", "image", "src"],
    "answer_en": "img",
    "answer_hi": "img",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which attribute specifies the image source?",
    "question_hi": "इमेज का स्रोत निर्दिष्ट करने वाला attribute कौन सा है?",
    "options_en": ["src", "href", "alt", "link"],
    "options_hi": ["src", "href", "alt", "link"],
    "answer_en": "src",
    "answer_hi": "src",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which attribute provides alternate text for images?",
    "question_hi": "इमेज के लिए वैकल्पिक टेक्स्ट कौन सा attribute देता है?",
    "options_en": ["alt", "title", "src", "caption"],
    "options_hi": ["alt", "title", "src", "caption"],
    "answer_en": "alt",
    "answer_hi": "alt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which tag is used to define a paragraph?",
    "question_hi": "पैराग्राफ को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["p", "div", "span", "para"],
    "options_hi": ["p", "div", "span", "para"],
    "answer_en": "p",
    "answer_hi": "p",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which tag is used to define a division or section?",
    "question_hi": "डिवीजन या सेक्शन को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["div", "section", "span", "p"],
    "options_hi": ["div", "section", "span", "p"],
    "answer_en": "div",
    "answer_hi": "div",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which tag is used to emphasize text?",
    "question_hi": "टेक्स्ट को जोर देने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["em", "i", "strong", "b"],
    "options_hi": ["em", "i", "strong", "b"],
    "answer_en": "em",
    "answer_hi": "em",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which tag is used for keyboard input?",
    "question_hi": "कीबोर्ड इनपुट को दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["kbd", "input", "code", "var"],
    "options_hi": ["kbd", "input", "code", "var"],
    "answer_en": "kbd",
    "answer_hi": "kbd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which tag is used to define a code snippet?",
    "question_hi": "कोड स्निपेट दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["code", "pre", "samp", "var"],
    "options_hi": ["code", "pre", "samp", "var"],
    "answer_en": "code",
    "answer_hi": "code",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which tag is used for preformatted text?",
    "question_hi": "पूर्व-फ़ॉर्मेटेड टेक्स्ट दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["pre", "code", "p", "span"],
    "options_hi": ["pre", "code", "p", "span"],
    "answer_en": "pre",
    "answer_hi": "pre",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which tag is used to create a form?",
    "question_hi": "फॉर्म बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["form", "input", "div", "fieldset"],
    "options_hi": ["form", "input", "div", "fieldset"],
    "answer_en": "form",
    "answer_hi": "form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which attribute specifies the method for form submission?",
    "question_hi": "फॉर्म सबमिशन के लिए method निर्दिष्ट करने वाला attribute कौन सा है?",
    "options_en": ["method", "action", "submit", "type"],
    "options_hi": ["method", "action", "submit", "type"],
    "answer_en": "method",
    "answer_hi": "method",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which attribute specifies the action URL for a form?",
    "question_hi": "फॉर्म के action URL को निर्दिष्ट करने वाला attribute कौन सा है?",
    "options_en": ["action", "method", "href", "url"],
    "options_hi": ["action", "method", "href", "url"],
    "answer_en": "action",
    "answer_hi": "action",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which input type is used for password fields?",
    "question_hi": "पासवर्ड फील्ड के लिए कौन सा इनपुट टाइप उपयोग होता है?",
    "options_en": ["password", "text", "email", "hidden"],
    "options_hi": ["password", "text", "email", "hidden"],
    "answer_en": "password",
    "answer_hi": "password",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which input type is used for email?",
    "question_hi": "ईमेल इनपुट के लिए कौन सा इनपुट टाइप उपयोग होता है?",
    "options_en": ["email", "text", "password", "url"],
    "options_hi": ["email", "text", "password", "url"],
    "answer_en": "email",
    "answer_hi": "email",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which tag is used to create a checkbox?",
    "question_hi": "चेकबॉक्स बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["input", "checkbox", "button", "select"],
    "options_hi": ["input", "checkbox", "button", "select"],
    "answer_en": "input",
    "answer_hi": "input",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which input type is used for radio buttons?",
    "question_hi": "रेडियो बटन बनाने के लिए कौन सा इनपुट टाइप उपयोग होता है?",
    "options_en": ["radio", "checkbox", "button", "input"],
    "options_hi": ["radio", "checkbox", "button", "input"],
    "answer_en": "radio",
    "answer_hi": "radio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which tag is used to create a submit button?",
    "question_hi": "सबमिट बटन बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["button", "input", "form", "submit"],
    "options_hi": ["button", "input", "form", "submit"],
    "answer_en": "button",
    "answer_hi": "button",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which tag is used to define a table row?",
    "question_hi": "टेबल रो को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["tr", "td", "th", "table"],
    "options_hi": ["tr", "td", "th", "table"],
    "answer_en": "tr",
    "answer_hi": "tr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which tag is used to define a table cell?",
    "question_hi": "टेबल सेल को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["td", "tr", "th", "table"],
    "options_hi": ["td", "tr", "th", "table"],
    "answer_en": "td",
    "answer_hi": "td",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which tag is used to define a table?",
    "question_hi": "टेबल को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["table", "tr", "td", "th"],
    "options_hi": ["table", "tr", "td", "th"],
    "answer_en": "table",
    "answer_hi": "table",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which tag is used to add a horizontal line?",
    "question_hi": "हॉरिज़ॉन्टल लाइन जोड़ने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["hr", "br", "line", "div"],
    "options_hi": ["hr", "br", "line", "div"],
    "answer_en": "hr",
    "answer_hi": "hr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which tag is used to create a hyperlink?",
    "question_hi": "हाइपरलिंक बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["a", "link", "href", "url"],
    "options_hi": ["a", "link", "href", "url"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which attribute specifies the URL for a hyperlink?",
    "question_hi": "हाइपरलिंक का URL निर्दिष्ट करने वाला attribute कौन सा है?",
    "options_en": ["href", "src", "link", "url"],
    "options_hi": ["href", "src", "link", "url"],
    "answer_en": "href",
    "answer_hi": "href",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which tag is used to create a dropdown list?",
    "question_hi": "ड्रॉपडाउन सूची बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["select", "option", "input", "list"],
    "options_hi": ["select", "option", "input", "list"],
    "answer_en": "select",
    "answer_hi": "select",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which tag is used to define options inside a dropdown list?",
    "question_hi": "ड्रॉपडाउन सूची में विकल्प दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["option", "select", "input", "list"],
    "options_hi": ["option", "select", "input", "list"],
    "answer_en": "option",
    "answer_hi": "option",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which tag is used to create a comment in HTML?",
    "question_hi": "HTML में कमेंट जोड़ने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["<!-- comment -->", "// comment", "# comment", "<comment>"],
    "options_hi": ["<!-- comment -->", "// comment", "# comment", "<comment>"],
    "answer_en": "<!-- comment -->",
    "answer_hi": "<!-- comment -->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which tag is used to define a heading level 1?",
    "question_hi": "हेडिंग लेवल 1 को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["h1", "h2", "h3", "h4"],
    "options_hi": ["h1", "h2", "h3", "h4"],
    "answer_en": "h1",
    "answer_hi": "h1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which tag is used to define a heading level 2?",
    "question_hi": "हेडिंग लेवल 2 को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["h2", "h1", "h3", "h4"],
    "options_hi": ["h2", "h1", "h3", "h4"],
    "answer_en": "h2",
    "answer_hi": "h2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which tag is used to define a heading level 3?",
    "question_hi": "हेडिंग लेवल 3 को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["h3", "h1", "h2", "h4"],
    "options_hi": ["h3", "h1", "h2", "h4"],
    "answer_en": "h3",
    "answer_hi": "h3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which tag is used to define a heading level 4?",
    "question_hi": "हेडिंग लेवल 4 को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["h4", "h1", "h2", "h3"],
    "options_hi": ["h4", "h1", "h2", "h3"],
    "answer_en": "h4",
    "answer_hi": "h4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which tag is used to embed a video?",
    "question_hi": "वीडियो एम्बेड करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["video", "media", "source", "iframe"],
    "options_hi": ["video", "media", "source", "iframe"],
    "answer_en": "video",
    "answer_hi": "video",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which tag is used to provide a fallback for video?",
    "question_hi": "वीडियो के लिए फ़ॉलबैक दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["source", "track", "fallback", "alt"],
    "options_hi": ["source", "track", "fallback", "alt"],
    "answer_en": "source",
    "answer_hi": "source",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which attribute is used to autoplay a video?",
    "question_hi": "वीडियो को ऑटोप्ले करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["autoplay", "play", "start", "loop"],
    "options_hi": ["autoplay", "play", "start", "loop"],
    "answer_en": "autoplay",
    "answer_hi": "autoplay",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which tag is used to add captions to videos?",
    "question_hi": "वीडियो में कैप्शन जोड़ने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["track", "caption", "video", "subtitle"],
    "options_hi": ["track", "caption", "video", "subtitle"],
    "answer_en": "track",
    "answer_hi": "track",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which tag is used to embed audio?",
    "question_hi": "ऑडियो एम्बेड करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["audio", "sound", "music", "track"],
    "options_hi": ["audio", "sound", "music", "track"],
    "answer_en": "audio",
    "answer_hi": "audio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which attribute is used to autoplay audio?",
    "question_hi": "ऑडियो को ऑटोप्ले करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["autoplay", "play", "start", "loop"],
    "options_hi": ["autoplay", "play", "start", "loop"],
    "answer_en": "autoplay",
    "answer_hi": "autoplay",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which tag is used to embed external content?",
    "question_hi": "बाहरी कंटेंट एम्बेड करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["iframe", "embed", "object", "div"],
    "options_hi": ["iframe", "embed", "object", "div"],
    "answer_en": "iframe",
    "answer_hi": "iframe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which tag is used to define a caption for a table?",
    "question_hi": "टेबल के लिए कैप्शन दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["caption", "title", "label", "thead"],
    "options_hi": ["caption", "title", "label", "thead"],
    "answer_en": "caption",
    "answer_hi": "caption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which tag is used to define the table footer?",
    "question_hi": "टेबल फुटर को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["tfoot", "tfootd", "tfootr", "tfooter"],
    "options_hi": ["tfoot", "tfootd", "tfootr", "tfooter"],
    "answer_en": "tfoot",
    "answer_hi": "tfoot",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which tag is used to define the table header section?",
    "question_hi": "टेबल हेडर सेक्शन को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["thead", "th", "tr", "table"],
    "options_hi": ["thead", "th", "tr", "table"],
    "answer_en": "thead",
    "answer_hi": "thead",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which tag is used to define the table body?",
    "question_hi": "टेबल बॉडी को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["tbody", "tr", "td", "table"],
    "options_hi": ["tbody", "tr", "td", "table"],
    "answer_en": "tbody",
    "answer_hi": "tbody",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which tag is used to define a term in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में टर्म दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["dt", "dd", "dl", "list"],
    "options_hi": ["dt", "dd", "dl", "list"],
    "answer_en": "dt",
    "answer_hi": "dt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which tag is used to define a description in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में डिस्क्रिप्शन दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["dd", "dt", "dl", "list"],
    "options_hi": ["dd", "dt", "dl", "list"],
    "answer_en": "dd",
    "answer_hi": "dd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which tag is used to define a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["dl", "dt", "dd", "list"],
    "options_hi": ["dl", "dt", "dd", "list"],
    "answer_en": "dl",
    "answer_hi": "dl",
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
