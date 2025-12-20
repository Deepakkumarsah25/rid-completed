 const questions = [
 
{
      "num": 1,
      "question_en": "What does HTML stand for?",
      "question_hi": "HTML का पूरा नाम क्या है?",
      "options_en": ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "Home Text Markup Language"],
      "options_hi": ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "Home Text Markup Language"],
      "answer_en": "Hyper Text Markup Language",
      "answer_hi": "Hyper Text Markup Language",
      "attempted": false,
      "selected": ""
    },
   {
  "num": 2,
  "question_en": "Which tag defines the HTML document?",
  "question_hi": "HTML डॉक्यूमेंट को परिभाषित करने वाला टैग कौन सा है?",
  "options_en": ["&lt;html&gt;", "&lt;head&gt;", "&lt;body&gt;", "&lt;doc&gt;"],
  "options_hi": ["&lt;html&gt;", "&lt;head&gt;", "&lt;body&gt;", "&lt;doc&gt;"],
  "answer_en": "&lt;html&gt;",
  "answer_hi": "&lt;html&gt;",
  "attempted": false,
  "selected": ""
},
   {
  "num": 3,
  "question_en": "Which tag contains meta information?",
  "question_hi": "मेटा जानकारी किस टैग में होती है?",
  "options_en": ["&lt;head&gt;", "&lt;meta&gt;", "&lt;title&gt;", "&lt;body&gt;"],
  "options_hi": ["&lt;head&gt;", "&lt;meta&gt;", "&lt;title&gt;", "&lt;body&gt;"],
  "answer_en": "&lt;head&gt;",
  "answer_hi": "&lt;head&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 4,
  "question_en": "Which tag is used for page title?",
  "question_hi": "पेज का टाइटल किस टैग से लिखा जाता है?",
  "options_en": ["&lt;title&gt;", "&lt;head&gt;", "&lt;h1&gt;", "&lt;meta&gt;"],
  "options_hi": ["&lt;title&gt;", "&lt;head&gt;", "&lt;h1&gt;", "&lt;meta&gt;"],
  "answer_en": "&lt;title&gt;",
  "answer_hi": "&lt;title&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 5,
  "question_en": "Which tag displays page content?",
  "question_hi": "पेज का कंटेंट किस टैग में दिखता है?",
  "options_en": ["&lt;body&gt;", "&lt;head&gt;", "&lt;html&gt;", "&lt;main&gt;"],
  "options_hi": ["&lt;body&gt;", "&lt;head&gt;", "&lt;html&gt;", "&lt;main&gt;"],
  "answer_en": "&lt;body&gt;",
  "answer_hi": "&lt;body&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 6,
  "question_en": "Which tag creates a hyperlink?",
  "question_hi": "हाइपरलिंक बनाने वाला टैग कौन सा है?",
  "options_en": ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
  "options_hi": ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
  "answer_en": "&lt;a&gt;",
  "answer_hi": "&lt;a&gt;",
  "attempted": false,
  "selected": ""
}
,
    {
      "num": 7,
      "question_en": "Which attribute specifies link address?",
      "question_hi": "लिंक का एड्रेस कौन सा attribute देता है?",
      "options_en": ["href", "src", "link", "url"],
      "options_hi": ["href", "src", "link", "url"],
      "answer_en": "href",
      "answer_hi": "href",
      "attempted": false,
      "selected": ""
    },
   {
  "num": 8,
  "question_en": "Which tag inserts an image?",
  "question_hi": "इमेज डालने के लिए कौन सा टैग है?",
  "options_en": ["&lt;img&gt;", "&lt;image&gt;", "&lt;pic&gt;", "&lt;src&gt;"],
  "options_hi": ["&lt;img&gt;", "&lt;image&gt;", "&lt;pic&gt;", "&lt;src&gt;"],
  "answer_en": "&lt;img&gt;",
  "answer_hi": "&lt;img&gt;",
  "attempted": false,
  "selected": ""
}
,
    {
      "num": 9,
      "question_en": "Which attribute defines image source?",
      "question_hi": "इमेज का स्रोत कौन सा attribute बताता है?",
      "options_en": ["src", "alt", "title", "href"],
      "options_hi": ["src", "alt", "title", "href"],
      "answer_en": "src",
      "answer_hi": "src",
      "attempted": false,
      "selected": ""
    },
    {
  "num": 10,
  "question_en": "Which attribute provides alternate text?",
  "question_hi": "इमेज का वैकल्पिक टेक्स्ट कौन सा attribute देता है?",
  "options_en": ["alt", "title", "src", "desc"],
  "options_hi": ["alt", "title", "src", "desc"],
  "answer_en": "alt",
  "answer_hi": "alt",
  "attempted": false,
  "selected": ""
},
{
  "num": 11,
  "question_en": "Which tag creates a paragraph?",
  "question_hi": "पैराग्राफ बनाने वाला टैग कौन सा है?",
  "options_en": ["&lt;p&gt;", "&lt;para&gt;", "&lt;text&gt;", "&lt;span&gt;"],
  "options_hi": ["&lt;p&gt;", "&lt;para&gt;", "&lt;text&gt;", "&lt;span&gt;"],
  "answer_en": "&lt;p&gt;",
  "answer_hi": "&lt;p&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 12,
  "question_en": "Which tag gives line break?",
  "question_hi": "लाइन ब्रेक किस टैग से आता है?",
  "options_en": ["&lt;br&gt;", "&lt;hr&gt;", "&lt;lb&gt;", "&lt;break&gt;"],
  "options_hi": ["&lt;br&gt;", "&lt;hr&gt;", "&lt;lb&gt;", "&lt;break&gt;"],
  "answer_en": "&lt;br&gt;",
  "answer_hi": "&lt;br&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 13,
  "question_en": "Which tag draws horizontal line?",
  "question_hi": "हॉरिजॉन्टल लाइन किस टैग से बनती है?",
  "options_en": ["&lt;hr&gt;", "&lt;br&gt;", "&lt;line&gt;", "&lt;border&gt;"],
  "options_hi": ["&lt;hr&gt;", "&lt;br&gt;", "&lt;line&gt;", "&lt;border&gt;"],
  "answer_en": "&lt;hr&gt;",
  "answer_hi": "&lt;hr&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 14,
  "question_en": "Largest heading tag is?",
  "question_hi": "सबसे बड़ी हेडिंग का टैग कौन सा है?",
  "options_en": ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;head&gt;", "&lt;title&gt;"],
  "options_hi": ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;head&gt;", "&lt;title&gt;"],
  "answer_en": "&lt;h1&gt;",
  "answer_hi": "&lt;h1&gt;",
  "attempted": false,
  "selected": ""
}
,
    {
      "num": 15,
      "question_en": "HTML is?",
      "question_hi": "HTML क्या है?",
      "options_en": ["Markup Language", "Programming Language", "Database", "Framework"],
      "options_hi": ["Markup Language", "Programming Language", "Database", "Framework"],
      "answer_en": "Markup Language",
      "answer_hi": "Markup Language",
      "attempted": false,
      "selected": ""
    },

    {
  "num": 16,
  "question_en": "Which tag creates ordered list?",
  "question_hi": "Ordered list के लिए टैग?",
  "options_en": ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
  "options_hi": ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
  "answer_en": "&lt;ol&gt;",
  "answer_hi": "&lt;ol&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 17,
  "question_en": "Which tag creates unordered list?",
  "question_hi": "Unordered list का टैग?",
  "options_en": ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
  "options_hi": ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
  "answer_en": "&lt;ul&gt;",
  "answer_hi": "&lt;ul&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 18,
  "question_en": "Which tag defines list item?",
  "question_hi": "लिस्ट आइटम टैग?",
  "options_en": ["&lt;li&gt;", "&lt;ul&gt;", "&lt;ol&gt;", "&lt;item&gt;"],
  "options_hi": ["&lt;li&gt;", "&lt;ul&gt;", "&lt;ol&gt;", "&lt;item&gt;"],
  "answer_en": "&lt;li&gt;",
  "answer_hi": "&lt;li&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 19,
  "question_en": "Which tag creates a table?",
  "question_hi": "टेबल बनाने का टैग?",
  "options_en": ["&lt;table&gt;", "&lt;tr&gt;", "&lt;td&gt;", "&lt;th&gt;"],
  "options_hi": ["&lt;table&gt;", "&lt;tr&gt;", "&lt;td&gt;", "&lt;th&gt;"],
  "answer_en": "&lt;table&gt;",
  "answer_hi": "&lt;table&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 20,
  "question_en": "Which tag creates table row?",
  "question_hi": "टेबल रो टैग?",
  "options_en": ["&lt;tr&gt;", "&lt;td&gt;", "&lt;th&gt;", "&lt;table&gt;"],
  "options_hi": ["&lt;tr&gt;", "&lt;td&gt;", "&lt;th&gt;", "&lt;table&gt;"],
  "answer_en": "&lt;tr&gt;",
  "answer_hi": "&lt;tr&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 21,
  "question_en": "Which tag defines table data?",
  "question_hi": "टेबल डेटा टैग?",
  "options_en": ["&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;", "&lt;table&gt;"],
  "options_hi": ["&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;", "&lt;table&gt;"],
  "answer_en": "&lt;td&gt;",
  "answer_hi": "&lt;td&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 22,
  "question_en": "Which tag defines table heading?",
  "question_hi": "टेबल हेडिंग टैग?",
  "options_en": ["&lt;th&gt;", "&lt;td&gt;", "&lt;tr&gt;", "&lt;table&gt;"],
  "options_hi": ["&lt;th&gt;", "&lt;td&gt;", "&lt;tr&gt;", "&lt;table&gt;"],
  "answer_en": "&lt;th&gt;",
  "answer_hi": "&lt;th&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 23,
  "question_en": "Which tag creates a form?",
  "question_hi": "फॉर्म टैग?",
  "options_en": ["&lt;form&gt;", "&lt;input&gt;", "&lt;select&gt;", "&lt;button&gt;"],
  "options_hi": ["&lt;form&gt;", "&lt;input&gt;", "&lt;select&gt;", "&lt;button&gt;"],
  "answer_en": "&lt;form&gt;",
  "answer_hi": "&lt;form&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 24,
  "question_en": "Which tag is used for user input?",
  "question_hi": "यूज़र इनपुट टैग?",
  "options_en": ["&lt;input&gt;", "&lt;textarea&gt;", "&lt;form&gt;", "&lt;label&gt;"],
  "options_hi": ["&lt;input&gt;", "&lt;textarea&gt;", "&lt;form&gt;", "&lt;label&gt;"],
  "answer_en": "&lt;input&gt;",
  "answer_hi": "&lt;input&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 25,
  "question_en": "Password input type is?",
  "question_hi": "पासवर्ड इनपुट टाइप?",
  "options_en": ["password", "text", "email", "number"],
  "options_hi": ["password", "text", "email", "number"],
  "answer_en": "password",
  "answer_hi": "password",
  "attempted": false,
  "selected": ""
},
{
  "num": 26,
  "question_en": "Which tag creates a button?",
  "question_hi": "बटन टैग?",
  "options_en": ["&lt;button&gt;", "&lt;input&gt;", "&lt;form&gt;", "&lt;submit&gt;"],
  "options_hi": ["&lt;button&gt;", "&lt;input&gt;", "&lt;form&gt;", "&lt;submit&gt;"],
  "answer_en": "&lt;button&gt;",
  "answer_hi": "&lt;button&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 27,
  "question_en": "Which tag creates dropdown?",
  "question_hi": "ड्रॉपडाउन टैग?",
  "options_en": ["&lt;select&gt;", "&lt;option&gt;", "&lt;list&gt;", "&lt;input&gt;"],
  "options_hi": ["&lt;select&gt;", "&lt;option&gt;", "&lt;list&gt;", "&lt;input&gt;"],
  "answer_en": "&lt;select&gt;",
  "answer_hi": "&lt;select&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 28,
  "question_en": "Which tag defines dropdown option?",
  "question_hi": "ड्रॉपडाउन ऑप्शन टैग?",
  "options_en": ["&lt;option&gt;", "&lt;select&gt;", "&lt;li&gt;", "&lt;menu&gt;"],
  "options_hi": ["&lt;option&gt;", "&lt;select&gt;", "&lt;li&gt;", "&lt;menu&gt;"],
  "answer_en": "&lt;option&gt;",
  "answer_hi": "&lt;option&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 29,
  "question_en": "Checkbox input type?",
  "question_hi": "चेकबॉक्स इनपुट टाइप?",
  "options_en": ["checkbox", "radio", "text", "button"],
  "options_hi": ["checkbox", "radio", "text", "button"],
  "answer_en": "checkbox",
  "answer_hi": "checkbox",
  "attempted": false,
  "selected": ""
},
{
  "num": 30,
  "question_en": "Radio button input type?",
  "question_hi": "रेडियो बटन इनपुट टाइप?",
  "options_en": ["radio", "checkbox", "select", "button"],
  "options_hi": ["radio", "checkbox", "select", "button"],
  "answer_en": "radio",
  "answer_hi": "radio",
  "attempted": false,
  "selected": ""
},
{
  "num": 31,
  "question_en": "Which is a semantic tag?",
  "question_hi": "Semantic टैग कौन सा है?",
  "options_en": ["&lt;header&gt;", "&lt;div&gt;", "&lt;span&gt;", "&lt;b&gt;"],
  "options_hi": ["&lt;header&gt;", "&lt;div&gt;", "&lt;span&gt;", "&lt;b&gt;"],
  "answer_en": "&lt;header&gt;",
  "answer_hi": "&lt;header&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 32,
  "question_en": "Navigation tag is?",
  "question_hi": "नेविगेशन टैग?",
  "options_en": ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;ul&gt;", "&lt;div&gt;"],
  "options_hi": ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;ul&gt;", "&lt;div&gt;"],
  "answer_en": "&lt;nav&gt;",
  "answer_hi": "&lt;nav&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 33,
  "question_en": "Footer tag is?",
  "question_hi": "फूटर टैग?",
  "options_en": ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;section&gt;", "&lt;end&gt;"],
  "options_hi": ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;section&gt;", "&lt;end&gt;"],
  "answer_en": "&lt;footer&gt;",
  "answer_hi": "&lt;footer&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_en": "Main content tag?",
  "question_hi": "मुख्य कंटेंट टैग?",
  "options_en": ["&lt;main&gt;", "&lt;body&gt;", "&lt;section&gt;", "&lt;article&gt;"],
  "options_hi": ["&lt;main&gt;", "&lt;body&gt;", "&lt;section&gt;", "&lt;article&gt;"],
  "answer_en": "&lt;main&gt;",
  "answer_hi": "&lt;main&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_en": "Article tag is?",
  "question_hi": "आर्टिकल टैग?",
  "options_en": ["&lt;article&gt;", "&lt;section&gt;", "&lt;div&gt;", "&lt;main&gt;"],
  "options_hi": ["&lt;article&gt;", "&lt;section&gt;", "&lt;div&gt;", "&lt;main&gt;"],
  "answer_en": "&lt;article&gt;",
  "answer_hi": "&lt;article&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
  "question_en": "Which tag groups elements?",
  "question_hi": "एलिमेंट ग्रुप करने का टैग?",
  "options_en": ["&lt;div&gt;", "&lt;span&gt;", "&lt;group&gt;", "&lt;box&gt;"],
  "options_hi": ["&lt;div&gt;", "&lt;span&gt;", "&lt;group&gt;", "&lt;box&gt;"],
  "answer_en": "&lt;div&gt;",
  "answer_hi": "&lt;div&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 37,
  "question_en": "Which is an inline element?",
  "question_hi": "Inline एलिमेंट कौन सा है?",
  "options_en": ["&lt;span&gt;", "&lt;div&gt;", "&lt;p&gt;", "&lt;section&gt;"],
  "options_hi": ["&lt;span&gt;", "&lt;div&gt;", "&lt;p&gt;", "&lt;section&gt;"],
  "answer_en": "&lt;span&gt;",
  "answer_hi": "&lt;span&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 38,
  "question_en": "Bold tag?",
  "question_hi": "बोल्ड टैग?",
  "options_en": ["&lt;b&gt; &amp; &lt;strong&gt;", "&lt;b&gt;", "&lt;strong&gt;", "&lt;i&gt;"],
  "options_hi": ["&lt;b&gt; &amp; &lt;strong&gt;", "&lt;b&gt;", "&lt;strong&gt;", "&lt;i&gt;"],
  "answer_en": "&lt;b&gt; &amp; &lt;strong&gt;",
  "answer_hi": "&lt;b&gt; &amp; &lt;strong&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_en": "Italic tag?",
  "question_hi": "Italic टैग?",
  "options_en": ["&lt;i&gt; &amp; &lt;em&gt;", "&lt;i&gt;", "&lt;em&gt;", "&lt;b&gt;"],
  "options_hi": ["&lt;i&gt; &amp; &lt;em&gt;", "&lt;i&gt;", "&lt;em&gt;", "&lt;b&gt;"],
  "answer_en": "&lt;i&gt; &amp; &lt;em&gt;",
  "answer_hi": "&lt;i&gt; &amp; &lt;em&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_en": "HTML5 was released in?",
  "question_hi": "HTML5 कब रिलीज हुआ?",
  "options_en": ["2014", "2010", "2000", "2018"],
  "options_hi": ["2014", "2010", "2000", "2018"],
  "answer_en": "2014",
  "answer_hi": "2014",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_en": "Which tag is used for video?",
  "question_hi": "वीडियो टैग?",
  "options_en": ["&lt;video&gt;", "&lt;media&gt;", "&lt;movie&gt;", "&lt;embed&gt;"],
  "options_hi": ["&lt;video&gt;", "&lt;media&gt;", "&lt;movie&gt;", "&lt;embed&gt;"],
  "answer_en": "&lt;video&gt;",
  "answer_hi": "&lt;video&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
  "question_en": "Which tag is used for audio?",
  "question_hi": "ऑडियो टैग?",
  "options_en": ["&lt;audio&gt;", "&lt;sound&gt;", "&lt;music&gt;", "&lt;media&gt;"],
  "options_hi": ["&lt;audio&gt;", "&lt;sound&gt;", "&lt;music&gt;", "&lt;media&gt;"],
  "answer_en": "&lt;audio&gt;",
  "answer_hi": "&lt;audio&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 43,
  "question_en": "Canvas tag is?",
  "question_hi": "कैनवास टैग?",
  "options_en": ["&lt;canvas&gt;", "&lt;draw&gt;", "&lt;svg&gt;", "&lt;paint&gt;"],
  "options_hi": ["&lt;canvas&gt;", "&lt;draw&gt;", "&lt;svg&gt;", "&lt;paint&gt;"],
  "answer_en": "&lt;canvas&gt;",
  "answer_hi": "&lt;canvas&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_en": "SVG stands for?",
  "question_hi": "SVG का पूरा नाम?",
  "options_en": ["Scalable Vector Graphics", "Simple Vector Graphics", "Style Vector Graphics", "System Vector Graphics"],
  "options_hi": ["Scalable Vector Graphics", "Simple Vector Graphics", "Style Vector Graphics", "System Vector Graphics"],
  "answer_en": "Scalable Vector Graphics",
  "answer_hi": "Scalable Vector Graphics",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_en": "Which tag is self-closing?",
  "question_hi": "Self closing टैग कौन सा है?",
  "options_en": ["&lt;img&gt;", "&lt;p&gt;", "&lt;div&gt;", "&lt;section&gt;"],
  "options_hi": ["&lt;img&gt;", "&lt;p&gt;", "&lt;div&gt;", "&lt;section&gt;"],
  "answer_en": "&lt;img&gt;",
  "answer_hi": "&lt;img&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_en": "Which attribute makes field mandatory?",
  "question_hi": "फील्ड को अनिवार्य बनाने वाला attribute?",
  "options_en": ["required", "readonly", "disabled", "checked"],
  "options_hi": ["required", "readonly", "disabled", "checked"],
  "answer_en": "required",
  "answer_hi": "required",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_en": "Which attribute disables input?",
  "question_hi": "इनपुट को डिसेबल करने वाला attribute?",
  "options_en": ["disabled", "readonly", "stop", "lock"],
  "options_hi": ["disabled", "readonly", "stop", "lock"],
  "answer_en": "disabled",
  "answer_hi": "disabled",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
  "question_en": "Which tag defines metadata?",
  "question_hi": "मेटाडाटा टैग?",
  "options_en": ["&lt;meta&gt;", "&lt;head&gt;", "&lt;title&gt;", "&lt;info&gt;"],
  "options_hi": ["&lt;meta&gt;", "&lt;head&gt;", "&lt;title&gt;", "&lt;info&gt;"],
  "answer_en": "&lt;meta&gt;",
  "answer_hi": "&lt;meta&gt;",
  "attempted": false,
  "selected": ""
},
{
  "num": 49,
  "question_en": "Charset attribute is used for?",
  "question_hi": "Charset attribute किस लिए होता है?",
  "options_en": ["Character encoding", "Font size", "Language", "Color"],
  "options_hi": ["Character encoding", "Font size", "Language", "Color"],
  "answer_en": "Character encoding",
  "answer_hi": "Character encoding",
  "attempted": false,
  "selected": ""
},
{
  "num": 50,
  "question_en": "HTML is case sensitive?",
  "question_hi": "क्या HTML case sensitive है?",
  "options_en": ["No", "Yes", "Sometimes", "Only HTML5"],
  "options_hi": ["No", "Yes", "Sometimes", "Only HTML5"],
  "answer_en": "No",
  "answer_hi": "No",
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

