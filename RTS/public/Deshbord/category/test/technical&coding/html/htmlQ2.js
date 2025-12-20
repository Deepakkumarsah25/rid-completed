
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
    "options_en": ["&lt;b&gt;", "&lt;strong&gt;", "&lt;bold&gt;", "Both &lt;b&gt; and &lt;strong&gt;"],
    "options_hi": ["&lt;b&gt;", "&lt;strong&gt;", "&lt;bold&gt;", "Both &lt;b&gt; and &lt;strong&gt;"],
    "answer_en": "Both &lt;b&gt; and &lt;strong&gt;",
    "answer_hi": "Both &lt;b&gt; and &lt;strong&gt;"
  },
  {
    "num": 4,
    "question_en": "Which tag is used to make text italic?",
    "question_hi": "टेक्स्ट को italic बनाने के लिए कौन सा टैग है?",
    "options_en": ["&lt;i&gt;", "&lt;em&gt;", "Both &lt;i&gt; and &lt;em&gt;", "&lt;italic&gt;"],
    "options_hi": ["&lt;i&gt;", "&lt;em&gt;", "Both &lt;i&gt; and &lt;em&gt;", "&lt;italic&gt;"],
    "answer_en": "Both &lt;i&gt; and &lt;em&gt;",
    "answer_hi": "Both &lt;i&gt; and &lt;em&gt;"
  },
  {
    "num": 5,
    "question_en": "Which tag is used to underline text?",
    "question_hi": "टेक्स्ट को underline करने के लिए कौन सा टैग है?",
    "options_en": ["&lt;u&gt;", "&lt;underline&gt;", "&lt;line&gt;", "&lt;ins&gt;"],
    "options_hi": ["&lt;u&gt;", "&lt;underline&gt;", "&lt;line&gt;", "&lt;ins&gt;"],
    "answer_en": "&lt;u&gt;",
    "answer_hi": "&lt;u&gt;"
  },
  {
    "num": 6,
    "question_en": "Which tag is used to display preformatted text?",
    "question_hi": "Preformatted टेक्स्ट के लिए कौन सा टैग है?",
    "options_en": ["&lt;pre&gt;", "&lt;code&gt;", "&lt;text&gt;", "&lt;format&gt;"],
    "options_hi": ["&lt;pre&gt;", "&lt;code&gt;", "&lt;text&gt;", "&lt;format&gt;"],
    "answer_en": "&lt;pre&gt;",
    "answer_hi": "&lt;pre&gt;"
  },
  {
    "num": 7,
    "question_en": "Which tag is used to display computer code?",
    "question_hi": "Computer code दिखाने के लिए कौन सा टैग है?",
    "options_en": ["&lt;code&gt;", "&lt;pre&gt;", "&lt;kbd&gt;", "&lt;samp&gt;"],
    "options_hi": ["&lt;code&gt;", "&lt;pre&gt;", "&lt;kbd&gt;", "&lt;samp&gt;"],
    "answer_en": "&lt;code&gt;",
    "answer_hi": "&lt;code&gt;"
  },
  {
    "num": 8,
    "question_en": "Which tag defines keyboard input?",
    "question_hi": "Keyboard input दिखाने वाला टैग कौन सा है?",
    "options_en": ["&lt;kbd&gt;", "&lt;code&gt;", "&lt;input&gt;", "&lt;key&gt;"],
    "options_hi": ["&lt;kbd&gt;", "&lt;code&gt;", "&lt;input&gt;", "&lt;key&gt;"],
    "answer_en": "&lt;kbd&gt;",
    "answer_hi": "&lt;kbd&gt;"
  },
  {
    "num": 9,
    "question_en": "Which tag shows sample output?",
    "question_hi": "Sample output दिखाने के लिए कौन सा टैग है?",
    "options_en": ["&lt;samp&gt;", "&lt;code&gt;", "&lt;pre&gt;", "&lt;out&gt;"],
    "options_hi": ["&lt;samp&gt;", "&lt;code&gt;", "&lt;pre&gt;", "&lt;out&gt;"],
    "answer_en": "&lt;samp&gt;",
    "answer_hi": "&lt;samp&gt;"
  },
  {
    "num": 10,
    "question_en": "Which tag highlights important text semantically?",
    "question_hi": "Semantic रूप से महत्वपूर्ण टेक्स्ट कौन सा टैग दिखाता है?",
    "options_en": ["&lt;strong&gt;", "&lt;b&gt;", "&lt;mark&gt;", "&lt;em&gt;"],
    "options_hi": ["&lt;strong&gt;", "&lt;b&gt;", "&lt;mark&gt;", "&lt;em&gt;"],
    "answer_en": "&lt;strong&gt;",
    "answer_hi": "&lt;strong&gt;"
  },

  {
    "num": 11,
    "question_en": "Which tag highlights text visually?",
    "question_hi": "टेक्स्ट को highlight करने वाला टैग कौन सा है?",
    "options_en": ["&lt;mark&gt;", "&lt;highlight&gt;", "&lt;b&gt;", "&lt;bg&gt;"],
    "options_hi": ["&lt;mark&gt;", "&lt;highlight&gt;", "&lt;b&gt;", "&lt;bg&gt;"],
    "answer_en": "&lt;mark&gt;",
    "answer_hi": "&lt;mark&gt;"
  },
  {
    "num": 12,
    "question_en": "Which tag is used to define abbreviation?",
    "question_hi": "Abbreviation के लिए कौन सा टैग है?",
    "options_en": ["&lt;abbr&gt;", "&lt;short&gt;", "&lt;acronym&gt;", "&lt;abbrv&gt;"],
    "options_hi": ["&lt;abbr&gt;", "&lt;short&gt;", "&lt;acronym&gt;", "&lt;abbrv&gt;"],
    "answer_en": "&lt;abbr&gt;",
    "answer_hi": "&lt;abbr&gt;"
  },
  {
    "num": 13,
    "question_en": "Which tag shows deleted text?",
    "question_hi": "Deleted text दिखाने वाला टैग कौन सा है?",
    "options_en": ["&lt;del&gt;", "&lt;remove&gt;", "&lt;strike&gt;", "&lt;cut&gt;"],
    "options_hi": ["&lt;del&gt;", "&lt;remove&gt;", "&lt;strike&gt;", "&lt;cut&gt;"],
    "answer_en": "&lt;del&gt;",
    "answer_hi": "&lt;del&gt;"
  },
  {
    "num": 14,
    "question_en": "Which tag shows inserted text?",
    "question_hi": "Inserted text दिखाने वाला टैग कौन सा है?",
    "options_en": ["&lt;ins&gt;", "&lt;add&gt;", "&lt;new&gt;", "&lt;u&gt;"],
    "options_hi": ["&lt;ins&gt;", "&lt;add&gt;", "&lt;new&gt;", "&lt;u&gt;"],
    "answer_en": "&lt;ins&gt;",
    "answer_hi": "&lt;ins&gt;"
  },
  {
    "num": 15,
    "question_en": "Which tag is used for short quotation?",
    "question_hi": "Short quotation के लिए कौन सा टैग है?",
    "options_en": ["&lt;q&gt;", "&lt;blockquote&gt;", "&lt;quote&gt;", "&lt;abbr&gt;"],
    "options_hi": ["&lt;q&gt;", "&lt;blockquote&gt;", "&lt;quote&gt;", "&lt;abbr&gt;"],
    "answer_en": "&lt;q&gt;",
    "answer_hi": "&lt;q&gt;"
  },

  {
    "num": 16,
    "question_en": "Which tag is used for long quotation?",
    "question_hi": "Long quotation के लिए कौन सा टैग है?",
    "options_en": ["&lt;blockquote&gt;", "&lt;q&gt;", "&lt;quote&gt;", "&lt;long&gt;"],
    "options_hi": ["&lt;blockquote&gt;", "&lt;q&gt;", "&lt;quote&gt;", "&lt;long&gt;"],
    "answer_en": "&lt;blockquote&gt;",
    "answer_hi": "&lt;blockquote&gt;"
  },
  {
    "num": 17,
    "question_en": "Which tag defines address information?",
    "question_hi": "Address जानकारी किस टैग से दी जाती है?",
    "options_en": ["&lt;address&gt;", "&lt;location&gt;", "&lt;contact&gt;", "&lt;info&gt;"],
    "options_hi": ["&lt;address&gt;", "&lt;location&gt;", "&lt;contact&gt;", "&lt;info&gt;"],
    "answer_en": "&lt;address&gt;",
    "answer_hi": "&lt;address&gt;"
  },
  {
    "num": 18,
    "question_en": "Which tag is used to define citation?",
    "question_hi": "Citation (संदर्भ) के लिए कौन सा टैग है?",
    "options_en": ["&lt;cite&gt;", "&lt;ref&gt;", "&lt;quote&gt;", "&lt;src&gt;"],
    "options_hi": ["&lt;cite&gt;", "&lt;ref&gt;", "&lt;quote&gt;", "&lt;src&gt;"],
    "answer_en": "&lt;cite&gt;",
    "answer_hi": "&lt;cite&gt;"
  },
  {
    "num": 19,
    "question_en": "Which tag is used to create dropdown list?",
    "question_hi": "Dropdown list बनाने वाला टैग कौन सा है?",
    "options_en": ["&lt;select&gt;", "&lt;option&gt;", "&lt;list&gt;", "&lt;dropdown&gt;"],
    "options_hi": ["&lt;select&gt;", "&lt;option&gt;", "&lt;list&gt;", "&lt;dropdown&gt;"],
    "answer_en": "&lt;select&gt;",
    "answer_hi": "&lt;select&gt;"
  },
  {
    "num": 20,
    "question_en": "Which tag defines dropdown options?",
    "question_hi": "Dropdown के विकल्प किस टैग से बनते हैं?",
    "options_en": ["&lt;option&gt;", "&lt;select&gt;", "&lt;list&gt;", "&lt;value&gt;"],
    "options_hi": ["&lt;option&gt;", "&lt;select&gt;", "&lt;list&gt;", "&lt;value&gt;"],
    "answer_en": "&lt;option&gt;",
    "answer_hi": "&lt;option&gt;"
  },

   {
    "num": 21,
    "question_en": "Which tag groups related options?",
    "question_hi": "Related options को group करने वाला टैग कौन सा है?",
    "options_en": ["&lt;optgroup&gt;", "&lt;group&gt;", "&lt;option&gt;", "&lt;select&gt;"],
    "options_hi": ["&lt;optgroup&gt;", "&lt;group&gt;", "&lt;option&gt;", "&lt;select&gt;"],
    "answer_en": "&lt;optgroup&gt;",
    "answer_hi": "&lt;optgroup&gt;"
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
    "options_en": ["&lt;input type='submit'&gt;", "&lt;button&gt;", "Both A and B", "&lt;submit&gt;"],
    "options_hi": ["&lt;input type='submit'&gt;", "&lt;button&gt;", "Both A and B", "&lt;submit&gt;"],
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
    "options_en": ["&lt;font&gt;", "&lt;section&gt;", "&lt;article&gt;", "&lt;nav&gt;"],
    "options_hi": ["&lt;font&gt;", "&lt;section&gt;", "&lt;article&gt;", "&lt;nav&gt;"],
    "answer_en": "&lt;font&gt;",
    "answer_hi": "&lt;font&gt;"
  },
  {
    "num": 28,
    "question_en": "Which tag defines progress bar?",
    "question_hi": "Progress bar के लिए कौन सा टैग है?",
    "options_en": ["&lt;progress&gt;", "&lt;meter&gt;", "&lt;range&gt;", "&lt;bar&gt;"],
    "options_hi": ["&lt;progress&gt;", "&lt;meter&gt;", "&lt;range&gt;", "&lt;bar&gt;"],
    "answer_en": "&lt;progress&gt;",
    "answer_hi": "&lt;progress&gt;"
  },
  {
    "num": 29,
    "question_en": "Which tag defines measurement value?",
    "question_hi": "Measurement value दिखाने वाला टैग कौन सा है?",
    "options_en": ["&lt;meter&gt;", "&lt;progress&gt;", "&lt;scale&gt;", "&lt;value&gt;"],
    "options_hi": ["&lt;meter&gt;", "&lt;progress&gt;", "&lt;scale&gt;", "&lt;value&gt;"],
    "answer_en": "&lt;meter&gt;",
    "answer_hi": "&lt;meter&gt;"
  },
  {
    "num": 30,
    "question_en": "Which tag defines time/date?",
    "question_hi": "Date और time दिखाने वाला टैग कौन सा है?",
    "options_en": ["&lt;time&gt;", "&lt;date&gt;", "&lt;clock&gt;", "&lt;datetime&gt;"],
    "options_hi": ["&lt;time&gt;", "&lt;date&gt;", "&lt;clock&gt;", "&lt;datetime&gt;"],
    "answer_en": "&lt;time&gt;",
    "answer_hi": "&lt;time&gt;"
  },
  {
    "num": 31,
    "question_en": "Which tag loads external JavaScript file?",
    "question_hi": "External JavaScript फाइल कौन सा टैग लोड करता है?",
    "options_en": ["&lt;script&gt;", "&lt;js&gt;", "&lt;link&gt;", "&lt;code&gt;"],
    "options_hi": ["&lt;script&gt;", "&lt;js&gt;", "&lt;link&gt;", "&lt;code&gt;"],
    "answer_en": "&lt;script&gt;",
    "answer_hi": "&lt;script&gt;"
  },
  {
    "num": 34,
    "question_en": "Which tag is used to display page footer?",
    "question_hi": "पेज का footer किस टैग से बनता है?",
    "options_en": ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;end&gt;", "&lt;section&gt;"],
    "options_hi": ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;end&gt;", "&lt;section&gt;"],
    "answer_en": "&lt;footer&gt;",
    "answer_hi": "&lt;footer&gt;"
  },
  {
    "num": 35,
    "question_en": "Which tag represents independent content?",
    "question_hi": "Independent content के लिए कौन सा टैग है?",
    "options_en": ["&lt;article&gt;", "&lt;section&gt;", "&lt;div&gt;", "&lt;main&gt;"],
    "options_hi": ["&lt;article&gt;", "&lt;section&gt;", "&lt;div&gt;", "&lt;main&gt;"],
    "answer_en": "&lt;article&gt;",
    "answer_hi": "&lt;article&gt;"
  },
  {
    "num": 36,
    "question_en": "Which tag defines sidebar content?",
    "question_hi": "Sidebar content के लिए कौन सा टैग है?",
    "options_en": ["&lt;aside&gt;", "&lt;nav&gt;", "&lt;section&gt;", "&lt;footer&gt;"],
    "options_hi": ["&lt;aside&gt;", "&lt;nav&gt;", "&lt;section&gt;", "&lt;footer&gt;"],
    "answer_en": "&lt;aside&gt;",
    "answer_hi": "&lt;aside&gt;"
  },
  {
    "num": 37,
    "question_en": "Which tag defines navigation links?",
    "question_hi": "Navigation links किस टैग से बनते हैं?",
    "options_en": ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;ul&gt;", "&lt;header&gt;"],
    "options_hi": ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;ul&gt;", "&lt;header&gt;"],
    "answer_en": "&lt;nav&gt;",
    "answer_hi": "&lt;nav&gt;"
  },
  {
    "num": 38,
    "question_en": "Which tag defines document header?",
    "question_hi": "डॉक्यूमेंट का header कौन सा टैग बताता है?",
    "options_en": ["&lt;header&gt;", "&lt;head&gt;", "&lt;top&gt;", "&lt;nav&gt;"],
    "options_hi": ["&lt;header&gt;", "&lt;head&gt;", "&lt;top&gt;", "&lt;nav&gt;"],
    "answer_en": "&lt;header&gt;",
    "answer_hi": "&lt;header&gt;"
  },
  {
    "num": 39,
    "question_en": "Which tag defines main content area?",
    "question_hi": "मुख्य कंटेंट एरिया कौन सा टैग दिखाता है?",
    "options_en": ["&lt;main&gt;", "&lt;section&gt;", "&lt;article&gt;", "&lt;body&gt;"],
    "options_hi": ["&lt;main&gt;", "&lt;section&gt;", "&lt;article&gt;", "&lt;body&gt;"],
    "answer_en": "&lt;main&gt;",
    "answer_hi": "&lt;main&gt;"
  },
  {
    "num": 40,
    "question_en": "Which tag embeds another webpage?",
    "question_hi": "दूसरा वेबपेज एम्बेड करने का टैग कौन सा है?",
    "options_en": ["&lt;iframe&gt;", "&lt;frame&gt;", "&lt;object&gt;", "&lt;embed&gt;"],
    "options_hi": ["&lt;iframe&gt;", "&lt;frame&gt;", "&lt;object&gt;", "&lt;embed&gt;"],
    "answer_en": "&lt;iframe&gt;",
    "answer_hi": "&lt;iframe&gt;"
  },
  {
    "num": 41,
    "question_en": "Which tag defines image caption?",
    "question_hi": "Image caption के लिए कौन सा टैग है?",
    "options_en": ["&lt;figcaption&gt;", "&lt;caption&gt;", "&lt;title&gt;", "&lt;alt&gt;"],
    "options_hi": ["&lt;figcaption&gt;", "&lt;caption&gt;", "&lt;title&gt;", "&lt;alt&gt;"],
    "answer_en": "&lt;figcaption&gt;",
    "answer_hi": "&lt;figcaption&gt;"
  },
  {
    "num": 42,
    "question_en": "Which tag groups image with caption?",
    "question_hi": "Image और caption को group करने वाला टैग कौन सा है?",
    "options_en": ["&lt;figure&gt;", "&lt;img&gt;", "&lt;div&gt;", "&lt;picture&gt;"],
    "options_hi": ["&lt;figure&gt;", "&lt;img&gt;", "&lt;div&gt;", "&lt;picture&gt;"],
    "answer_en": "&lt;figure&gt;",
    "answer_hi": "&lt;figure&gt;"
  },
  {
    "num": 43,
    "question_en": "Which tag defines responsive images?",
    "question_hi": "Responsive images के लिए कौन सा टैग है?",
    "options_en": ["&lt;picture&gt;", "&lt;img&gt;", "&lt;srcset&gt;", "&lt;media&gt;"],
    "options_hi": ["&lt;picture&gt;", "&lt;img&gt;", "&lt;srcset&gt;", "&lt;media&gt;"],
    "answer_en": "&lt;picture&gt;",
    "answer_hi": "&lt;picture&gt;"
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
    "options_en": ["&lt;canvas&gt;", "&lt;svg&gt;", "&lt;img&gt;", "&lt;draw&gt;"],
    "options_hi": ["&lt;canvas&gt;", "&lt;svg&gt;", "&lt;img&gt;", "&lt;draw&gt;"],
    "answer_en": "&lt;canvas&gt;",
    "answer_hi": "&lt;canvas&gt;"
  },
  {
    "num": 46,
    "question_en": "Which HTML tag is used for vector graphics?",
    "question_hi": "Vector graphics के लिए कौन सा टैग है?",
    "options_en": ["&lt;svg&gt;", "&lt;canvas&gt;", "&lt;img&gt;", "&lt;graphic&gt;"],
    "options_hi": ["&lt;svg&gt;", "&lt;canvas&gt;", "&lt;img&gt;", "&lt;graphic&gt;"],
    "answer_en": "&lt;svg&gt;",
    "answer_hi": "&lt;svg&gt;"
  },
  {
    "num": 48,
    "question_en": "Which tag is used to add favicon?",
    "question_hi": "Favicon जोड़ने वाला टैग कौन सा है?",
    "options_en": ["&lt;link&gt;", "&lt;meta&gt;", "&lt;icon&gt;", "&lt;style&gt;"],
    "options_hi": ["&lt;link&gt;", "&lt;meta&gt;", "&lt;icon&gt;", "&lt;style&gt;"],
    "answer_en": "&lt;link&gt;",
    "answer_hi": "&lt;link&gt;"
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
