 const questions = [
  {
    "num": 1,
    "question_en": "Which property aligns text to the center?",
    "question_hi": "कौन-सी प्रॉपर्टी टेक्स्ट को केंद्र में संरेखित करती है?",
    "options_en": ["text-align", "vertical-align", "align-items", "justify-content"],
    "options_hi": ["text-align", "vertical-align", "align-items", "justify-content"],
    "answer_en": "text-align",
    "answer_hi": "text-align",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to create a hyperlink?",
    "question_hi": "हाइपरलिंक बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["a", "link", "href", "hyper"],
    "options_hi": ["a", "link", "href", "hyper"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the default display value of a <div> element?",
    "question_hi": "<div> एलिमेंट का डिफ़ॉल्ट डिस्प्ले मान क्या है?",
    "options_en": ["block", "inline", "inline-block", "none"],
    "options_hi": ["block", "inline", "inline-block", "none"],
    "answer_en": "block",
    "answer_hi": "block",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which tag is used to define a table row?",
    "question_hi": "टेबल रो को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["tr", "td", "table", "row"],
    "options_hi": ["tr", "td", "table", "row"],
    "answer_en": "tr",
    "answer_hi": "tr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which attribute specifies an alternate text for an image?",
    "question_hi": "इमेज के लिए वैकल्पिक टेक्स्ट निर्दिष्ट करने वाला attribute कौन सा है?",
    "options_en": ["alt", "title", "src", "caption"],
    "options_hi": ["alt", "title", "src", "caption"],
    "answer_en": "alt",
    "answer_hi": "alt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which tag defines a paragraph in HTML?",
    "question_hi": "HTML में पैराग्राफ को परिभाषित करने वाला टैग कौन सा है?",
    "options_en": ["p", "div", "span", "para"],
    "options_hi": ["p", "div", "span", "para"],
    "answer_en": "p",
    "answer_hi": "p",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which tag is used to create an ordered list?",
    "question_hi": "आदेशित सूची बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["ol", "ul", "li", "list"],
    "options_hi": ["ol", "ul", "li", "list"],
    "answer_en": "ol",
    "answer_hi": "ol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which tag is used to create an unordered list?",
    "question_hi": "अनऑर्डर्ड सूची बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["ul", "ol", "li", "list"],
    "options_hi": ["ul", "ol", "li", "list"],
    "answer_en": "ul",
    "answer_hi": "ul",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which attribute is used to provide a tooltip for an element?",
    "question_hi": "किस attribute का उपयोग किसी एलिमेंट के लिए टूलटिप देने के लिए किया जाता है?",
    "options_en": ["title", "alt", "tooltip", "hint"],
    "options_hi": ["title", "alt", "tooltip", "hint"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which tag is used to define a table header?",
    "question_hi": "टेबल हेडर को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["th", "tr", "td", "table"],
    "options_hi": ["th", "tr", "td", "table"],
    "answer_en": "th",
    "answer_hi": "th",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
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
    "num": 12,
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
    "num": 13,
    "question_en": "Which tag is used to add a line break?",
    "question_hi": "लाइन ब्रेक जोड़ने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["br", "hr", "break", "lb"],
    "options_hi": ["br", "hr", "break", "lb"],
    "answer_en": "br",
    "answer_hi": "br",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which tag is used to define a heading?",
    "question_hi": "हेडिंग को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["h1", "h2", "h3", "h4"],
    "options_hi": ["h1", "h2", "h3", "h4"],
    "answer_en": "h1",
    "answer_hi": "h1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which tag is used to define bold text?",
    "question_hi": "बोल्ड टेक्स्ट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["b", "strong", "bold", "em"],
    "options_hi": ["b", "strong", "bold", "em"],
    "answer_en": "b",
    "answer_hi": "b",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which tag is used to define italic text?",
    "question_hi": "इटैलिक टेक्स्ट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["i", "em", "italic", "it"],
    "options_hi": ["i", "em", "italic", "it"],
    "answer_en": "i",
    "answer_hi": "i",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which tag is used to define a horizontal line?",
    "question_hi": "हॉरिज़ॉन्टल लाइन को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["hr", "line", "br", "hl"],
    "options_hi": ["hr", "line", "br", "hl"],
    "answer_en": "hr",
    "answer_hi": "hr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which attribute specifies the URL of a link?",
    "question_hi": "लिंक का URL निर्दिष्ट करने वाला attribute कौन सा है?",
    "options_en": ["href", "src", "link", "url"],
    "options_hi": ["href", "src", "link", "url"],
    "answer_en": "href",
    "answer_hi": "href",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which tag is used to display a picture on a webpage?",
    "question_hi": "वेबपेज पर चित्र दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["img", "image", "picture", "src"],
    "options_hi": ["img", "image", "picture", "src"],
    "answer_en": "img",
    "answer_hi": "img",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which attribute provides alternative text for images?",
    "question_hi": "इमेज के लिए वैकल्पिक टेक्स्ट कौन सा attribute देता है?",
    "options_en": ["alt", "title", "src", "caption"],
    "options_hi": ["alt", "title", "src", "caption"],
    "answer_en": "alt",
    "answer_hi": "alt",
    "attempted": false,
    "selected": ""
  },




  
  {
    "num": 21,
    "question_en": "Which tag is used to create a button?",
    "question_hi": "बटन बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["button", "input", "form", "b"],
    "options_hi": ["button", "input", "form", "b"],
    "answer_en": "button",
    "answer_hi": "button",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which attribute is used to disable an input field?",
    "question_hi": "इनपुट फ़ील्ड को डिसेबल करने के लिए कौन सा attribute उपयोग होता है?",
    "options_en": ["disabled", "readonly", "hidden", "inactive"],
    "options_hi": ["disabled", "readonly", "hidden", "inactive"],
    "answer_en": "disabled",
    "answer_hi": "disabled",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which input type is used for passwords?",
    "question_hi": "पासवर्ड के लिए कौन सा इनपुट टाइप उपयोग होता है?",
    "options_en": ["password", "text", "email", "hidden"],
    "options_hi": ["password", "text", "email", "hidden"],
    "answer_en": "password",
    "answer_hi": "password",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which tag is used to create a checkbox?",
    "question_hi": "चेकबॉक्स बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["input", "checkbox", "form", "select"],
    "options_hi": ["input", "checkbox", "form", "select"],
    "answer_en": "input",
    "answer_hi": "input",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
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
    "num": 26,
    "question_en": "Which tag is used to define a form?",
    "question_hi": "फॉर्म को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["form", "input", "fieldset", "div"],
    "options_hi": ["form", "input", "fieldset", "div"],
    "answer_en": "form",
    "answer_hi": "form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which tag is used to group related form elements?",
    "question_hi": "संबंधित फॉर्म एलिमेंट्स को समूहित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["fieldset", "form", "div", "section"],
    "options_hi": ["fieldset", "form", "div", "section"],
    "answer_en": "fieldset",
    "answer_hi": "fieldset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which tag is used to create a radio button?",
    "question_hi": "रेडियो बटन बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["input", "radio", "button", "select"],
    "options_hi": ["input", "radio", "button", "select"],
    "answer_en": "input",
    "answer_hi": "input",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which attribute specifies the action URL of a form?",
    "question_hi": "फॉर्म का action URL निर्दिष्ट करने वाला attribute कौन सा है?",
    "options_en": ["action", "method", "url", "href"],
    "options_hi": ["action", "method", "url", "href"],
    "answer_en": "action",
    "answer_hi": "action",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
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
    "num": 31,
    "question_en": "Which tag is used to create a hyperlink that opens in a new tab?",
    "question_hi": "नए टैब में लिंक खोलने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["a", "link", "href", "target"],
    "options_hi": ["a", "link", "href", "target"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which attribute specifies the text to display in a tooltip?",
    "question_hi": "टूलटिप में दिखाने के लिए टेक्स्ट निर्दिष्ट करने वाला attribute कौन सा है?",
    "options_en": ["title", "alt", "tooltip", "caption"],
    "options_hi": ["title", "alt", "tooltip", "caption"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which tag is used to display preformatted text?",
    "question_hi": "पूर्व-फॉर्मेटेड टेक्स्ट दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["pre", "code", "p", "span"],
    "options_hi": ["pre", "code", "p", "span"],
    "answer_en": "pre",
    "answer_hi": "pre",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which tag is used to create a horizontal rule?",
    "question_hi": "हॉरिज़ॉन्टल लाइन बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["hr", "line", "div", "rule"],
    "options_hi": ["hr", "line", "div", "rule"],
    "answer_en": "hr",
    "answer_hi": "hr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which tag is used to add comments in HTML?",
    "question_hi": "HTML में कमेंट जोड़ने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["<!-- comment -->", "// comment", "# comment", "<comment>"],
    "options_hi": ["<!-- comment -->", "// comment", "# comment", "<comment>"],
    "answer_en": "<!-- comment -->",
    "answer_hi": "<!-- comment -->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which tag is used to define bold text semantically?",
    "question_hi": "सामान्य अर्थ में बोल्ड टेक्स्ट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["strong", "b", "bold", "em"],
    "options_hi": ["strong", "b", "bold", "em"],
    "answer_en": "strong",
    "answer_hi": "strong",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which tag is used to define emphasized text?",
    "question_hi": "उत्कृष्टता (emphasis) वाला टेक्स्ट परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["em", "i", "italic", "strong"],
    "options_hi": ["em", "i", "italic", "strong"],
    "answer_en": "em",
    "answer_hi": "em",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which tag is used to define an abbreviation?",
    "question_hi": "संक्षेप (abbreviation) को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["abbr", "acronym", "short", "abbrv"],
    "options_hi": ["abbr", "acronym", "short", "abbrv"],
    "answer_en": "abbr",
    "answer_hi": "abbr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which tag is used to define a blockquote?",
    "question_hi": "ब्लॉककोट (blockquote) को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["blockquote", "q", "quote", "p"],
    "options_hi": ["blockquote", "q", "quote", "p"],
    "answer_en": "blockquote",
    "answer_hi": "blockquote",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which tag is used to define an inline quotation?",
    "question_hi": "इनलाइन कोटेशन (inline quotation) को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["q", "blockquote", "quote", "span"],
    "options_hi": ["q", "blockquote", "quote", "span"],
    "answer_en": "q",
    "answer_hi": "q",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which tag is used to define keyboard input?",
    "question_hi": "कीबोर्ड इनपुट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["kbd", "input", "code", "var"],
    "options_hi": ["kbd", "input", "code", "var"],
    "answer_en": "kbd",
    "answer_hi": "kbd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which tag is used to define sample output from a program?",
    "question_hi": "प्रोग्राम का सैम्पल आउटपुट दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["samp", "output", "code", "pre"],
    "options_hi": ["samp", "output", "code", "pre"],
    "answer_en": "samp",
    "answer_hi": "samp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which tag is used to define computer code?",
    "question_hi": "कंप्यूटर कोड दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["code", "pre", "kbd", "var"],
    "options_hi": ["code", "pre", "kbd", "var"],
    "answer_en": "code",
    "answer_hi": "code",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which tag is used to define a variable?",
    "question_hi": "वेरिएबल को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["var", "span", "code", "pre"],
    "options_hi": ["var", "span", "code", "pre"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which tag is used to define a description term in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में डिस्क्रिप्शन टर्म को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["dt", "dd", "dl", "list"],
    "options_hi": ["dt", "dd", "dl", "list"],
    "answer_en": "dt",
    "answer_hi": "dt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which tag is used to define a description definition in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में डिस्क्रिप्शन डिफिनिशन को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["dd", "dt", "dl", "list"],
    "options_hi": ["dd", "dt", "dl", "list"],
    "answer_en": "dd",
    "answer_hi": "dd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which tag is used to define a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["dl", "dt", "dd", "list"],
    "options_hi": ["dl", "dt", "dd", "list"],
    "answer_en": "dl",
    "answer_hi": "dl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which tag is used to define inserted text?",
    "question_hi": "इंसर्टेड टेक्स्ट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["ins", "del", "add", "text"],
    "options_hi": ["ins", "del", "add", "text"],
    "answer_en": "ins",
    "answer_hi": "ins",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which tag is used to define deleted text?",
    "question_hi": "डिलीट किया गया टेक्स्ट दिखाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["del", "ins", "remove", "text"],
    "options_hi": ["del", "ins", "remove", "text"],
    "answer_en": "del",
    "answer_hi": "del",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which tag is used to define a citation?",
    "question_hi": "साइटेशन को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["cite", "q", "blockquote", "ref"],
    "options_hi": ["cite", "q", "blockquote", "ref"],
    "answer_en": "cite",
    "answer_hi": "cite",
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
