const questions = [
    {
        "num": 1,
        "question_en": "Solve for x and y: 2x + 3y = 8, 3x + 2y = 7",
        "question_hi": "x और y का हल ज्ञात कीजिए: 2x + 3y = 8, 3x + 2y = 7",
        "options_en": ["x=1, y=2", "x=2, y=1", "x=1, y=1", "x=2, y=2"],
        "options_hi": ["x=1, y=2", "x=2, y=1", "x=1, y=1", "x=2, y=2"],
        "answer_en": "x=1, y=2",
        "answer_hi": "x=1, y=2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The sum of two numbers is 35 and their difference is 13. Find the numbers.",
        "question_hi": "दो संख्याओं का योग 35 है और उनका अंतर 13 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["24, 11", "25, 10", "23, 12", "26, 9"],
        "options_hi": ["24, 11", "25, 10", "23, 12", "26, 9"],
        "answer_en": "24, 11",
        "answer_hi": "24, 11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "If 3x + 2y = 12 and 6x + 4y = 24, then the system of equations has:",
        "question_hi": "यदि 3x + 2y = 12 और 6x + 4y = 24, तो समीकरण निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "None of these"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "इनमें से कोई नहीं"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The cost of 2 pens and 3 pencils is ₹20, while 3 pens and 2 pencils cost ₹25. Find the cost of one pen.",
        "question_hi": "2 पेन और 3 पेंसिल की कीमत ₹20 है, जबकि 3 पेन और 2 पेंसिल की कीमत ₹25 है। एक पेन की कीमत ज्ञात कीजिए।",
        "options_en": ["₹5", "₹6", "₹7", "₹8"],
        "options_hi": ["₹5", "₹6", "₹7", "₹8"],
        "answer_en": "₹7",
        "answer_hi": "₹7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "For what value of k, the equations 4x + 6y = 10 and 2x + ky = 5 have infinite solutions?",
        "question_hi": "k के किस मान के लिए समीकरण 4x + 6y = 10 और 2x + ky = 5 के अनंत हल होंगे?",
        "options_en": ["k=3", "k=4", "k=5", "k=6"],
        "options_hi": ["k=3", "k=4", "k=5", "k=6"],
        "answer_en": "k=3",
        "answer_hi": "k=3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The ratio of two numbers is 3:4 and their sum is 84. Find the larger number.",
        "question_hi": "दो संख्याओं का अनुपात 3:4 है और उनका योग 84 है। बड़ी संख्या ज्ञात कीजिए।",
        "options_en": ["36", "48", "54", "60"],
        "options_hi": ["36", "48", "54", "60"],
        "answer_en": "48",
        "answer_hi": "48",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "If the equations 3x + y = 1 and (2k–1)x + (k–1)y = 2k+1 have no solution, then k = ?",
        "question_hi": "यदि समीकरण 3x + y = 1 और (2k–1)x + (k–1)y = 2k+1 का कोई हल नहीं है, तो k = ?",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Five years ago, A’s age was twice that of B. Ten years later, A’s age will be 5/4 times B’s age. Find B’s present age.",
        "question_hi": "पाँच वर्ष पहले, A की आयु B की आयु की दोगुनी थी। दस वर्ष बाद, A की आयु B की आयु की 5/4 गुना होगी। B की वर्तमान आयु ज्ञात कीजिए।",
        "options_en": ["15 years", "20 years", "25 years", "30 years"],
        "options_hi": ["15 वर्ष", "20 वर्ष", "25 वर्ष", "30 वर्ष"],
        "answer_en": "20 years",
        "answer_hi": "20 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The sum of the digits of a two-digit number is 9. If 27 is subtracted from the number, the digits interchange their places. Find the number.",
        "question_hi": "दो अंकों की एक संख्या के अंकों का योग 9 है। यदि संख्या में से 27 घटाया जाता है, तो अंक अपना स्थान बदल लेते हैं। संख्या ज्ञात कीजिए।",
        "options_en": ["63", "54", "72", "81"],
        "options_hi": ["63", "54", "72", "81"],
        "answer_en": "63",
        "answer_hi": "63",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "A fraction becomes 4/5 if 1 is added to both numerator and denominator. If 5 is subtracted from both, it becomes 1/2. Find the fraction.",
        "question_hi": "एक भिन्न 4/5 हो जाती है यदि अंश और हर दोनों में 1 जोड़ दिया जाए। यदि दोनों में से 5 घटा दिया जाए, तो यह 1/2 हो जाती है। भिन्न ज्ञात कीजिए।",
        "options_en": ["7/9", "5/7", "3/5", "11/13"],
        "options_hi": ["7/9", "5/7", "3/5", "11/13"],
        "answer_en": "7/9",
        "answer_hi": "7/9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "A two-digit number is 4 more than 6 times the sum of its digits. If 18 is subtracted from the number, the digits are reversed. Find the number.",
        "question_hi": "एक दो-अंकीय संख्या अपने अंकों के योग के 6 गुने से 4 अधिक है। यदि संख्या में से 18 घटाया जाता है, तो अंक उलट जाते हैं। संख्या ज्ञात कीजिए।",
        "options_en": ["64", "42", "53", "74"],
        "options_hi": ["64", "42", "53", "74"],
        "answer_en": "64",
        "answer_hi": "64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "If 2x + 3y = 17 and 3x + 5y = 27, then what is the value of x + y?",
        "question_hi": "यदि 2x + 3y = 17 और 3x + 5y = 27, तो x + y का मान क्या है?",
        "options_en": ["5", "7", "9", "11"],
        "options_hi": ["5", "7", "9", "11"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "For what value of p will the equations 3x + 4y = 7 and px + 8y = 14 have infinitely many solutions?",
        "question_hi": "p के किस मान के लिए समीकरण 3x + 4y = 7 और px + 8y = 14 के अपरिमित रूप से अनेक हल होंगे?",
        "options_en": ["6", "5", "4", "3"],
        "options_hi": ["6", "5", "4", "3"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The sum of the numerator and denominator of a fraction is 12. If 1 is added to both, the fraction becomes 3/4. Find the fraction.",
        "question_hi": "एक भिन्न के अंश और हर का योग 12 है। यदि दोनों में 1 जोड़ दिया जाए, तो भिन्न 3/4 हो जाती है। भिन्न ज्ञात कीजिए।",
        "options_en": ["5/7", "7/5", "3/9", "4/8"],
        "options_hi": ["5/7", "7/5", "3/9", "4/8"],
        "answer_en": "5/7",
        "answer_hi": "5/7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it goes 40 km upstream and 55 km downstream. Find the speed of the boat in still water.",
        "question_hi": "एक नाव धारा के विपरीत 30 किमी और धारा की दिशा में 44 किमी 10 घंटे में जाती है। 13 घंटे में, यह धारा के विपरीत 40 किमी और धारा की दिशा में 55 किमी जाती है। शांत जल में नाव की गति ज्ञात कीजिए।",
        "options_en": ["8 km/h", "10 km/h", "12 km/h", "15 km/h"],
        "options_hi": ["8 किमी/घं", "10 किमी/घं", "12 किमी/घं", "15 किमी/घं"],
        "answer_en": "8 km/h",
        "answer_hi": "8 किमी/घं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "If the system of equations 6x + 2y = 3 and kx + y = 2 has no solution, then k = ?",
        "question_hi": "यदि समीकरण निकाय 6x + 2y = 3 और kx + y = 2 का कोई हल नहीं है, तो k = ?",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "A man has ₹50 in ₹5 and ₹10 coins. If the total number of coins is 7, find the number of ₹5 coins.",
        "question_hi": "एक व्यक्ति के पास ₹5 और ₹10 के सिक्कों में ₹50 हैं। यदि कुल सिक्कों की संख्या 7 है, तो ₹5 के सिक्कों की संख्या ज्ञात कीजिए।",
        "options_en": ["4", "3", "5", "2"],
        "options_hi": ["4", "3", "5", "2"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The difference between two numbers is 26 and one number is three times the other. Find the numbers.",
        "question_hi": "दो संख्याओं का अंतर 26 है और एक संख्या दूसरी की तीन गुनी है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["39, 13", "36, 12", "42, 14", "45, 15"],
        "options_hi": ["39, 13", "36, 12", "42, 14", "45, 15"],
        "answer_en": "39, 13",
        "answer_hi": "39, 13",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "If 5x + 2y = 8 and 10x + 4y = 16, then the system has:",
        "question_hi": "यदि 5x + 2y = 8 और 10x + 4y = 16, तो निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "A father is three times as old as his son. After 12 years, he will be twice as old as his son. Find the present age of the father.",
        "question_hi": "एक पिता अपने पुत्र से तीन गुना बड़ा है। 12 वर्ष बाद, वह पुत्र से दोगुना बड़ा होगा। पिता की वर्तमान आयु ज्ञात कीजिए।",
        "options_en": ["36 years", "40 years", "42 years", "45 years"],
        "options_hi": ["36 वर्ष", "40 वर्ष", "42 वर्ष", "45 वर्ष"],
        "answer_en": "36 years",
        "answer_hi": "36 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "If the lines represented by 3x + 2y = 6 and kx + 4y = 12 are coincident, then k = ?",
        "question_hi": "यदि रेखाएँ 3x + 2y = 6 और kx + 4y = 12 संपाती हैं, तो k = ?",
        "options_en": ["6", "5", "4", "3"],
        "options_hi": ["6", "5", "4", "3"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The sum of two numbers is 50 and their product is 525. Find the numbers.",
        "question_hi": "दो संख्याओं का योग 50 है और उनका गुणनफल 525 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["25, 25", "20, 30", "15, 35", "10, 40"],
        "options_hi": ["25, 25", "20, 30", "15, 35", "10, 40"],
        "answer_en": "15, 35",
        "answer_hi": "15, 35",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "For what value of m does the system of equations x + 2y = 5 and 3x + my = 15 have infinitely many solutions?",
        "question_hi": "m के किस मान के लिए समीकरण निकाय x + 2y = 5 और 3x + my = 15 के अनंत हल होंगे?",
        "options_en": ["6", "5", "4", "3"],
        "options_hi": ["6", "5", "4", "3"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "A fraction becomes 1/3 when 1 is subtracted from numerator and 2 is added to denominator. It becomes 1/2 when 1 is added to numerator and 1 subtracted from denominator. Find the fraction.",
        "question_hi": "एक भिन्न 1/3 हो जाती है जब अंश में से 1 घटाया जाता है और हर में 2 जोड़ा जाता है। यह 1/2 हो जाती है जब अंश में 1 जोड़ा जाता है और हर में से 1 घटाया जाता है। भिन्न ज्ञात कीजिए।",
        "options_en": ["3/7", "5/11", "4/9", "2/5"],
        "options_hi": ["3/7", "5/11", "4/9", "2/5"],
        "answer_en": "3/7",
        "answer_hi": "3/7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The cost of 5 pencils and 3 erasers is ₹35, while 3 pencils and 2 erasers cost ₹22. Find the cost of 8 pencils and 5 erasers.",
        "question_hi": "5 पेंसिल और 3 रबड़ की कीमत ₹35 है, जबकि 3 पेंसिल और 2 रबड़ की कीमत ₹22 है। 8 पेंसिल और 5 रबड़ की कीमत ज्ञात कीजिए।",
        "options_en": ["₹55", "₹58", "₹60", "₹62"],
        "options_hi": ["₹55", "₹58", "₹60", "₹62"],
        "answer_en": "₹58",
        "answer_hi": "₹58",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "If the lines 2x + 3y = 7 and 4x + ky = 12 are parallel, then k = ?",
        "question_hi": "यदि रेखाएँ 2x + 3y = 7 और 4x + ky = 12 समानांतर हैं, तो k = ?",
        "options_en": ["6", "5", "4", "3"],
        "options_hi": ["6", "5", "4", "3"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The sum of ages of a father and his son is 45 years. Five years ago, the product of their ages was 124. Find the present age of the father.",
        "question_hi": "एक पिता और उसके पुत्र की आयु का योग 45 वर्ष है। पाँच वर्ष पहले, उनकी आयु का गुणनफल 124 था। पिता की वर्तमान आयु ज्ञात कीजिए।",
        "options_en": ["36 years", "40 years", "30 years", "28 years"],
        "options_hi": ["36 वर्ष", "40 वर्ष", "30 वर्ष", "28 वर्ष"],
        "answer_en": "36 years",
        "answer_hi": "36 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "If 3 chairs and 2 tables cost ₹4500, and 5 chairs and 3 tables cost ₹7000, then what is the cost of 2 chairs and 1 table?",
        "question_hi": "यदि 3 कुर्सियाँ और 2 मेजों की कीमत ₹4500 है, और 5 कुर्सियाँ और 3 मेजों की कीमत ₹7000 है, तो 2 कुर्सियों और 1 मेज की कीमत क्या है?",
        "options_en": ["₹2500", "₹2000", "₹2200", "₹2300"],
        "options_hi": ["₹2500", "₹2000", "₹2200", "₹2300"],
        "answer_en": "₹2000",
        "answer_hi": "₹2000",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The sum of two numbers is 15 and the sum of their reciprocals is 3/10. Find the numbers.",
        "question_hi": "दो संख्याओं का योग 15 है और उनके व्युत्क्रमों का योग 3/10 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["6, 9", "5, 10", "7, 8", "4, 11"],
        "options_hi": ["6, 9", "5, 10", "7, 8", "4, 11"],
        "answer_en": "5, 10",
        "answer_hi": "5, 10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "If (x + y) = 7 and (x – y) = 3, then find xy.",
        "question_hi": "यदि (x + y) = 7 और (x – y) = 3, तो xy ज्ञात कीजिए।",
        "options_en": ["10", "12", "15", "18"],
        "options_hi": ["10", "12", "15", "18"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "A number consists of two digits whose sum is 9. If 9 is subtracted from the number, the digits interchange. Find the number.",
        "question_hi": "एक संख्या में दो अंक हैं जिनका योग 9 है। यदि संख्या में से 9 घटाया जाता है, तो अंक बदल जाते हैं। संख्या ज्ञात कीजिए।",
        "options_en": ["54", "63", "72", "81"],
        "options_hi": ["54", "63", "72", "81"],
        "answer_en": "54",
        "answer_hi": "54",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Solve for x and y: x/2 + y/3 = 4, x + y/2 = 5.",
        "question_hi": "x और y का हल ज्ञात कीजिए: x/2 + y/3 = 4, x + y/2 = 5.",
        "options_en": ["x=2, y=6", "x=3, y=4", "x=4, y=2", "x=6, y=2"],
        "options_hi": ["x=2, y=6", "x=3, y=4", "x=4, y=2", "x=6, y=2"],
        "answer_en": "x=2, y=6",
        "answer_hi": "x=2, y=6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "For what value of k will the equations 2x + 3y = 5 and 4x + ky = 10 be inconsistent?",
        "question_hi": "k के किस मान के लिए समीकरण 2x + 3y = 5 और 4x + ky = 10 असंगत होंगे?",
        "options_en": ["6", "5", "4", "3"],
        "options_hi": ["6", "5", "4", "3"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The perimeter of a rectangle is 40 cm. If its length is increased by 2 cm and breadth decreased by 2 cm, the area decreases by 8 sq cm. Find the dimensions.",
        "question_hi": "एक आयत का परिमाप 40 सेमी है। यदि इसकी लंबाई 2 सेमी बढ़ा दी जाए और चौड़ाई 2 सेमी घटा दी जाए, तो क्षेत्रफल 8 वर्ग सेमी घट जाता है। विमाएँ ज्ञात कीजिए।",
        "options_en": ["12 cm, 8 cm", "10 cm, 10 cm", "14 cm, 6 cm", "15 cm, 5 cm"],
        "options_hi": ["12 सेमी, 8 सेमी", "10 सेमी, 10 सेमी", "14 सेमी, 6 सेमी", "15 सेमी, 5 सेमी"],
        "answer_en": "12 cm, 8 cm",
        "answer_hi": "12 सेमी, 8 सेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "If 2x + y = 23 and 4x – y = 19, find the value of y – x.",
        "question_hi": "यदि 2x + y = 23 और 4x – y = 19, तो y – x का मान ज्ञात कीजिए।",
        "options_en": ["-3", "-2", "2", "3"],
        "options_hi": ["-3", "-2", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The sum of two numbers is 8 and the sum of their squares is 34. Find the numbers.",
        "question_hi": "दो संख्याओं का योग 8 है और उनके वर्गों का योग 34 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["3, 5", "2, 6", "4, 4", "1, 7"],
        "options_hi": ["3, 5", "2, 6", "4, 4", "1, 7"],
        "answer_en": "3, 5",
        "answer_hi": "3, 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "If 7x + 8y = 22 and 8x + 7y = 23, find x + y.",
        "question_hi": "यदि 7x + 8y = 22 और 8x + 7y = 23, तो x + y ज्ञात कीजिए।",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "A train travels 300 km at a uniform speed. If speed had been 10 km/h more, it would have taken 1 hour less. Find the original speed.",
        "question_hi": "एक ट्रेन एक समान गति से 300 किमी की यात्रा करती है। यदि गति 10 किमी/घंटा अधिक होती, तो यात्रा में 1 घंटा कम लगता। वास्तविक गति ज्ञात कीजिए।",
        "options_en": ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
        "options_hi": ["40 किमी/घं", "50 किमी/घं", "60 किमी/घं", "70 किमी/घं"],
        "answer_en": "50 km/h",
        "answer_hi": "50 किमी/घं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "If the system of equations 2x + 3y = 7 and (k – 1)x + (k + 2)y = 3k has infinitely many solutions, then k = ?",
        "question_hi": "यदि समीकरण निकाय 2x + 3y = 7 और (k – 1)x + (k + 2)y = 3k के अनंत हल हैं, तो k = ?",
        "options_en": ["7", "6", "5", "4"],
        "options_hi": ["7", "6", "5", "4"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "A person can row 15 km downstream and 9 km upstream in 3 hours. He can also row 20 km downstream and 18 km upstream in 5 hours. Find speed of boat in still water.",
        "question_hi": "एक व्यक्ति धारा की दिशा में 15 किमी और धारा के विपरीत 9 किमी 3 घंटे में नाव चला सकता है। वह धारा की दिशा में 20 किमी और धारा के विपरीत 18 किमी 5 घंटे में चला सकता है। शांत जल में नाव की गति ज्ञात कीजिए।",
        "options_en": ["9 km/h", "10 km/h", "11 km/h", "12 km/h"],
        "options_hi": ["9 किमी/घं", "10 किमी/घं", "11 किमी/घं", "12 किमी/घं"],
        "answer_en": "9 km/h",
        "answer_hi": "9 किमी/घं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "If 3x + 4y = 10 and 6x + 8y = k have no solution, then k = ?",
        "question_hi": "यदि 3x + 4y = 10 और 6x + 8y = k का कोई हल नहीं है, तो k = ?",
        "options_en": ["20", "15", "10", "5"],
        "options_hi": ["20", "15", "10", "5"],
        "answer_en": "20",
        "answer_hi": "20",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "A man has ₹200 in ₹10 and ₹5 notes. If the total number of notes is 25, find the number of ₹10 notes.",
        "question_hi": "एक व्यक्ति के पास ₹10 और ₹5 के नोटों में ₹200 हैं। यदि कुल नोटों की संख्या 25 है, तो ₹10 के नोटों की संख्या ज्ञात कीजिए।",
        "options_en": ["15", "12", "10", "8"],
        "options_hi": ["15", "12", "10", "8"],
        "answer_en": "15",
        "answer_hi": "15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The difference between two numbers is 14 and their sum is 38. Find the smaller number.",
        "question_hi": "दो संख्याओं का अंतर 14 है और उनका योग 38 है। छोटी संख्या ज्ञात कीजिए।",
        "options_en": ["12", "14", "16", "18"],
        "options_hi": ["12", "14", "16", "18"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "If 5x – 3y = 1 and 15x – 9y = 3, then the system has:",
        "question_hi": "यदि 5x – 3y = 1 और 15x – 9y = 3, तो निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "None"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "कोई नहीं"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "A mother is 24 years older than her daughter. After 4 years, mother's age will be twice daughter's age. Find daughter's present age.",
        "question_hi": "एक माँ अपनी बेटी से 24 वर्ष बड़ी है। 4 वर्ष बाद, माँ की आयु बेटी की आयु की दोगुनी होगी। बेटी की वर्तमान आयु ज्ञात कीजिए।",
        "options_en": ["20 years", "18 years", "22 years", "24 years"],
        "options_hi": ["20 वर्ष", "18 वर्ष", "22 वर्ष", "24 वर्ष"],
        "answer_en": "20 years",
        "answer_hi": "20 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "If x + 2y = 5 and 3x + ky = 15 have infinite solutions, then k = ?",
        "question_hi": "यदि x + 2y = 5 और 3x + ky = 15 के अनंत हल हैं, तो k = ?",
        "options_en": ["6", "5", "4", "3"],
        "options_hi": ["6", "5", "4", "3"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "A two-digit number is such that the product of digits is 12. If 36 is added to the number, the digits interchange. Find the number.",
        "question_hi": "एक दो-अंकीय संख्या ऐसी है कि अंकों का गुणनफल 12 है। यदि संख्या में 36 जोड़ दिया जाए, तो अंक बदल जाते हैं। संख्या ज्ञात कीजिए।",
        "options_en": ["26", "34", "43", "62"],
        "options_hi": ["26", "34", "43", "62"],
        "answer_en": "26",
        "answer_hi": "26",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Solve: 3(x + y) = 7xy, 3(x – y) = xy.",
        "question_hi": "हल कीजिए: 3(x + y) = 7xy, 3(x – y) = xy.",
        "options_en": ["x=2, y=1", "x=3, y=2", "x=1, y=1/2", "x=4, y=3"],
        "options_hi": ["x=2, y=1", "x=3, y=2", "x=1, y=1/2", "x=4, y=3"],
        "answer_en": "x=1, y=1/2",
        "answer_hi": "x=1, y=1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "If 4x + 5y = 9 and 8x + 10y = k have infinitely many solutions, then k = ?",
        "question_hi": "यदि 4x + 5y = 9 और 8x + 10y = k के अनंत हल हैं, तो k = ?",
        "options_en": ["18", "16", "15", "12"],
        "options_hi": ["18", "16", "15", "12"],
        "answer_en": "18",
        "answer_hi": "18",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "A chemist has two solutions of acid. One is 40% acid, the other is 60% acid. How many liters of each should be mixed to get 100 liters of 55% acid solution?",
        "question_hi": "एक रसायनज्ञ के पास अम्ल के दो विलयन हैं। एक 40% अम्ल है, दूसरा 60% अम्ल है। 55% अम्ल का 100 लीटर विलयन प्राप्त करने के लिए प्रत्येक को कितने लीटर मिलाना चाहिए?",
        "options_en": ["25 L, 75 L", "40 L, 60 L", "50 L, 50 L", "30 L, 70 L"],
        "options_hi": ["25 ली, 75 ली", "40 ली, 60 ली", "50 ली, 50 ली", "30 ली, 70 ली"],
        "answer_en": "25 L, 75 L",
        "answer_hi": "25 ली, 75 ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "If the system of equations 2x + 3y = 7 and (k+2)x + 6y = 14 has infinitely many solutions, then k = ?",
        "question_hi": "यदि समीकरण निकाय 2x + 3y = 7 और (k+2)x + 6y = 14 के अनंत हल हैं, तो k = ?",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "A man gave ₹3800 to his three sons. The eldest got twice as the youngest and the middle got ₹200 more than the youngest. Find the share of youngest.",
        "question_hi": "एक व्यक्ति ने अपने तीन बेटों को ₹3800 दिए। सबसे बड़े को सबसे छोटे से दोगुना मिला और बीच वाले को सबसे छोटे से ₹200 अधिक मिले। सबसे छोटे का हिस्सा ज्ञात कीजिए।",
        "options_en": ["₹900", "₹800", "₹1000", "₹1200"],
        "options_hi": ["₹900", "₹800", "₹1000", "₹1200"],
        "answer_en": "₹900",
        "answer_hi": "₹900",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "If 2x – y = 5 and x + 3y = 10, then find the value of x² + y².",
        "question_hi": "यदि 2x – y = 5 और x + 3y = 10, तो x² + y² का मान ज्ञात कीजिए।",
        "options_en": ["25", "29", "34", "41"],
        "options_hi": ["25", "29", "34", "41"],
        "answer_en": "29",
        "answer_hi": "29",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The sum of ages of Ram and Shyam is 40 years. Five years ago, Ram was twice as old as Shyam. Find Ram's present age.",
        "question_hi": "राम और श्याम की आयु का योग 40 वर्ष है। पाँच वर्ष पहले, राम श्याम से दोगुना बड़ा था। राम की वर्तमान आयु ज्ञात कीजिए।",
        "options_en": ["25 years", "30 years", "28 years", "35 years"],
        "options_hi": ["25 वर्ष", "30 वर्ष", "28 वर्ष", "35 वर्ष"],
        "answer_en": "25 years",
        "answer_hi": "25 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "If 6x + 4y = 14 and 9x + 6y = k have infinite solutions, then k = ?",
        "question_hi": "यदि 6x + 4y = 14 और 9x + 6y = k के अनंत हल हैं, तो k = ?",
        "options_en": ["21", "18", "24", "15"],
        "options_hi": ["21", "18", "24", "15"],
        "answer_en": "21",
        "answer_hi": "21",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "A number is 3 less than another number. If their sum is 27, find the larger number.",
        "question_hi": "एक संख्या दूसरी संख्या से 3 कम है। यदि उनका योग 27 है, तो बड़ी संख्या ज्ञात कीजिए।",
        "options_en": ["15", "12", "18", "20"],
        "options_hi": ["15", "12", "18", "20"],
        "answer_en": "15",
        "answer_hi": "15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "If 3x + 4y = 11 and 6x + 8y = 22, then the system is:",
        "question_hi": "यदि 3x + 4y = 11 और 6x + 8y = 22, तो निकाय है:",
        "options_en": ["Consistent", "Inconsistent", "Dependent", "None"],
        "options_hi": ["संगत", "असंगत", "आश्रित", "कोई नहीं"],
        "answer_en": "Consistent",
        "answer_hi": "संगत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Five years hence, father's age will be three times his son's age. Five years ago, father was seven times his son's age. Find present age of son.",
        "question_hi": "पाँच वर्ष बाद, पिता की आयु पुत्र की आयु की तीन गुनी होगी। पाँच वर्ष पहले, पिता पुत्र की आयु का सात गुना था। पुत्र की वर्तमान आयु ज्ञात कीजिए।",
        "options_en": ["10 years", "12 years", "15 years", "18 years"],
        "options_hi": ["10 वर्ष", "12 वर्ष", "15 वर्ष", "18 वर्ष"],
        "answer_en": "10 years",
        "answer_hi": "10 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "If 2x + 5y = 12 and 4x + 10y = k have no solution, then k = ?",
        "question_hi": "यदि 2x + 5y = 12 और 4x + 10y = k का कोई हल नहीं है, तो k = ?",
        "options_en": ["24", "20", "18", "15"],
        "options_hi": ["24", "20", "18", "15"],
        "answer_en": "24",
        "answer_hi": "24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "A man buys 5 apples and 3 oranges for ₹85. If he buys 3 apples and 5 oranges, it costs ₹75. Find cost of one apple.",
        "question_hi": "एक आदमी 5 सेब और 3 संतरे ₹85 में खरीदता है। यदि वह 3 सेब और 5 संतरे खरीदता है, तो इसकी कीमत ₹75 है। एक सेब की कीमत ज्ञात कीजिए।",
        "options_en": ["₹10", "₹12", "₹15", "₹20"],
        "options_hi": ["₹10", "₹12", "₹15", "₹20"],
        "answer_en": "₹15",
        "answer_hi": "₹15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "If x + y = 5 and xy = 6, then find x – y (x > y).",
        "question_hi": "यदि x + y = 5 और xy = 6, तो x – y ज्ञात कीजिए (x > y)।",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The sum of two numbers is 25. Their difference is 7. Find the numbers.",
        "question_hi": "दो संख्याओं का योग 25 है। उनका अंतर 7 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["16, 9", "15, 10", "18, 7", "20, 5"],
        "options_hi": ["16, 9", "15, 10", "18, 7", "20, 5"],
        "answer_en": "16, 9",
        "answer_hi": "16, 9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "If the lines 3x + 2y = 8 and 6x + 4y = k are coincident, then k = ?",
        "question_hi": "यदि रेखाएँ 3x + 2y = 8 और 6x + 4y = k संपाती हैं, तो k = ?",
        "options_en": ["16", "12", "8", "4"],
        "options_hi": ["16", "12", "8", "4"],
        "answer_en": "16",
        "answer_hi": "16",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "A train covers a distance of 300 km at a certain speed. If the speed is increased by 5 km/h, time reduces by 2 hours. Find original speed.",
        "question_hi": "एक ट्रेन एक निश्चित गति से 300 किमी की दूरी तय करती है। यदि गति 5 किमी/घंटा बढ़ा दी जाए, तो समय 2 घंटे कम हो जाता है। वास्तविक गति ज्ञात कीजिए।",
        "options_en": ["25 km/h", "30 km/h", "20 km/h", "15 km/h"],
        "options_hi": ["25 किमी/घं", "30 किमी/घं", "20 किमी/घं", "15 किमी/घं"],
        "answer_en": "25 km/h",
        "answer_hi": "25 किमी/घं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "If 4x + 3y = 18 and 8x + 6y = 36, then the system has:",
        "question_hi": "यदि 4x + 3y = 18 और 8x + 6y = 36, तो निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "A fraction becomes 2/3 if 2 is added to both numerator and denominator. If 3 is subtracted from both, it becomes 1/2. Find the fraction.",
        "question_hi": "एक भिन्न 2/3 हो जाती है यदि अंश और हर दोनों में 2 जोड़ दिया जाए। यदि दोनों में से 3 घटा दिया जाए, तो यह 1/2 हो जाती है। भिन्न ज्ञात कीजिए।",
        "options_en": ["8/11", "7/10", "5/8", "4/7"],
        "options_hi": ["8/11", "7/10", "5/8", "4/7"],
        "answer_en": "8/11",
        "answer_hi": "8/11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "If 2x + 3y = 7 and 4x + 6y = k have no solution, then k = ?",
        "question_hi": "यदि 2x + 3y = 7 और 4x + 6y = k का कोई हल नहीं है, तो k = ?",
        "options_en": ["14", "12", "10", "8"],
        "options_hi": ["14", "12", "10", "8"],
        "answer_en": "14",
        "answer_hi": "14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The sum of digits of a two-digit number is 11. If 45 is subtracted from the number, the digits interchange. Find the number.",
        "question_hi": "दो-अंकीय संख्या के अंकों का योग 11 है। यदि संख्या में से 45 घटाया जाता है, तो अंक बदल जाते हैं। संख्या ज्ञात कीजिए।",
        "options_en": ["83", "74", "65", "56"],
        "options_hi": ["83", "74", "65", "56"],
        "answer_en": "83",
        "answer_hi": "83",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "If 3x – 4y = 7 and 6x – 8y = k have infinite solutions, then k = ?",
        "question_hi": "यदि 3x – 4y = 7 और 6x – 8y = k के अनंत हल हैं, तो k = ?",
        "options_en": ["14", "21", "28", "35"],
        "options_hi": ["14", "21", "28", "35"],
        "answer_en": "14",
        "answer_hi": "14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "A man has ₹150 in ₹1 and ₹2 coins. If total coins are 100, find number of ₹2 coins.",
        "question_hi": "एक आदमी के पास ₹1 और ₹2 के सिक्कों में ₹150 हैं। यदि कुल सिक्के 100 हैं, तो ₹2 के सिक्कों की संख्या ज्ञात कीजिए।",
        "options_en": ["50", "60", "70", "80"],
        "options_hi": ["50", "60", "70", "80"],
        "answer_en": "50",
        "answer_hi": "50",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "If x/2 + y/3 = 5 and x/3 + y/2 = 6, then x + y = ?",
        "question_hi": "यदि x/2 + y/3 = 5 और x/3 + y/2 = 6, तो x + y = ?",
        "options_en": ["12", "14", "16", "18"],
        "options_hi": ["12", "14", "16", "18"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The perimeter of a rectangular plot is 80 m. If length is increased by 3 m and breadth decreased by 1 m, area increases by 13 sq m. Find dimensions.",
        "question_hi": "एक आयताकार प्लॉट का परिमाप 80 मी है। यदि लंबाई 3 मी बढ़ा दी जाए और चौड़ाई 1 मी घटा दी जाए, तो क्षेत्रफल 13 वर्ग मी बढ़ जाता है। विमाएँ ज्ञात कीजिए।",
        "options_en": ["25 m, 15 m", "22 m, 18 m", "20 m, 20 m", "24 m, 16 m"],
        "options_hi": ["25 मी, 15 मी", "22 मी, 18 मी", "20 मी, 20 मी", "24 मी, 16 मी"],
        "answer_en": "25 m, 15 m",
        "answer_hi": "25 मी, 15 मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "If 5x + 2y = 9 and 10x + 4y = 18, then the system is:",
        "question_hi": "यदि 5x + 2y = 9 और 10x + 4y = 18, तो निकाय है:",
        "options_en": ["Consistent", "Inconsistent", "Dependent", "None"],
        "options_hi": ["संगत", "असंगत", "आश्रित", "कोई नहीं"],
        "answer_en": "Dependent",
        "answer_hi": "आश्रित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The sum of two numbers is 40 and their product is 375. Find the numbers.",
        "question_hi": "दो संख्याओं का योग 40 है और उनका गुणनफल 375 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["25, 15", "20, 20", "30, 10", "35, 5"],
        "options_hi": ["25, 15", "20, 20", "30, 10", "35, 5"],
        "answer_en": "25, 15",
        "answer_hi": "25, 15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "If 2x + 5y = 13 and 4x + 10y = 26, then the lines are:",
        "question_hi": "यदि 2x + 5y = 13 और 4x + 10y = 26, तो रेखाएँ हैं:",
        "options_en": ["Parallel", "Coincident", "Intersecting", "None"],
        "options_hi": ["समांतर", "संपाती", "प्रतिच्छेदी", "कोई नहीं"],
        "answer_en": "Coincident",
        "answer_hi": "संपाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "A boat can travel 16 km downstream and 8 km upstream in 2 hours. It can also travel 24 km downstream and 10 km upstream in 3 hours. Find speed of stream.",
        "question_hi": "एक नाव धारा की दिशा में 16 किमी और धारा के विपरीत 8 किमी 2 घंटे में जा सकती है। यह धारा की दिशा में 24 किमी और धारा के विपरीत 10 किमी 3 घंटे में जा सकती है। धारा की गति ज्ञात कीजिए।",
        "options_en": ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
        "options_hi": ["2 किमी/घं", "3 किमी/घं", "4 किमी/घं", "5 किमी/घं"],
        "answer_en": "2 km/h",
        "answer_hi": "2 किमी/घं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "If 3x + 2y = 10 and 6x + 4y = k have no solution, then k ≠ ?",
        "question_hi": "यदि 3x + 2y = 10 और 6x + 4y = k का कोई हल नहीं है, तो k ≠ ?",
        "options_en": ["20", "15", "10", "5"],
        "options_hi": ["20", "15", "10", "5"],
        "answer_en": "20",
        "answer_hi": "20",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "A man gave ₹190 to his two sons. The elder got ₹30 more than the younger. Find the share of younger.",
        "question_hi": "एक व्यक्ति ने अपने दो बेटों को ₹190 दिए। बड़े को छोटे से ₹30 अधिक मिले। छोटे का हिस्सा ज्ञात कीजिए।",
        "options_en": ["₹80", "₹90", "₹70", "₹100"],
        "options_hi": ["₹80", "₹90", "₹70", "₹100"],
        "answer_en": "₹80",
        "answer_hi": "₹80",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "If 7x + 3y = 20 and 14x + 6y = 40, then the system has:",
        "question_hi": "यदि 7x + 3y = 20 और 14x + 6y = 40, तो निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The difference between two numbers is 8 and their sum is 30. Find the numbers.",
        "question_hi": "दो संख्याओं का अंतर 8 है और उनका योग 30 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["19, 11", "20, 12", "18, 10", "21, 13"],
        "options_hi": ["19, 11", "20, 12", "18, 10", "21, 13"],
        "answer_en": "19, 11",
        "answer_hi": "19, 11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "If 2x + y = 6 and 4x + 2y = 12, then the lines are:",
        "question_hi": "यदि 2x + y = 6 और 4x + 2y = 12, तो रेखाएँ हैं:",
        "options_en": ["Parallel", "Coincident", "Intersecting", "None"],
        "options_hi": ["समांतर", "संपाती", "प्रतिच्छेदी", "कोई नहीं"],
        "answer_en": "Coincident",
        "answer_hi": "संपाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "A two-digit number is 4 times the sum of its digits. If 18 is added to the number, the digits are reversed. Find the number.",
        "question_hi": "एक दो-अंकीय संख्या अपने अंकों के योग का 4 गुना है। यदि संख्या में 18 जोड़ दिया जाए, तो अंक बदल जाते हैं। संख्या ज्ञात कीजिए।",
        "options_en": ["24", "36", "48", "12"],
        "options_hi": ["24", "36", "48", "12"],
        "answer_en": "24",
        "answer_hi": "24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "If 5x – 2y = 3 and 10x – 4y = 6, then the system has:",
        "question_hi": "यदि 5x – 2y = 3 और 10x – 4y = 6, तो निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The sum of ages of father and son is 50 years. Five years ago, father was 7 times as old as son. Find father's present age.",
        "question_hi": "पिता और पुत्र की आयु का योग 50 वर्ष है। पाँच वर्ष पहले, पिता पुत्र से 7 गुना बड़ा था। पिता की वर्तमान आयु ज्ञात कीजिए।",
        "options_en": ["40 years", "35 years", "45 years", "50 years"],
        "options_hi": ["40 वर्ष", "35 वर्ष", "45 वर्ष", "50 वर्ष"],
        "answer_en": "40 years",
        "answer_hi": "40 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "If 3x + 4y = 12 and 6x + 8y = k have infinitely many solutions, then k = ?",
        "question_hi": "यदि 3x + 4y = 12 और 6x + 8y = k के अनंत हल हैं, तो k = ?",
        "options_en": ["24", "20", "18", "12"],
        "options_hi": ["24", "20", "18", "12"],
        "answer_en": "24",
        "answer_hi": "24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "A number is 5 more than another number. Their sum is 35. Find the numbers.",
        "question_hi": "एक संख्या दूसरी संख्या से 5 अधिक है। उनका योग 35 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["20, 15", "25, 10", "18, 17", "22, 13"],
        "options_hi": ["20, 15", "25, 10", "18, 17", "22, 13"],
        "answer_en": "20, 15",
        "answer_hi": "20, 15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "If 2x + 7y = 11 and 4x + 14y = 22, then the system has:",
        "question_hi": "यदि 2x + 7y = 11 और 4x + 14y = 22, तो निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The cost of 3 pens and 5 pencils is ₹70, while 5 pens and 3 pencils cost ₹74. Find cost of 1 pen.",
        "question_hi": "3 पेन और 5 पेंसिल की कीमत ₹70 है, जबकि 5 पेन और 3 पेंसिल की कीमत ₹74 है। 1 पेन की कीमत ज्ञात कीजिए।",
        "options_en": ["₹12", "₹10", "₹15", "₹20"],
        "options_hi": ["₹12", "₹10", "₹15", "₹20"],
        "answer_en": "₹12",
        "answer_hi": "₹12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "If 4x + 5y = 14 and 8x + 10y = 28, then the system has:",
        "question_hi": "यदि 4x + 5y = 14 और 8x + 10y = 28, तो निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The sum of two numbers is 45 and their difference is 15. Find the numbers.",
        "question_hi": "दो संख्याओं का योग 45 है और उनका अंतर 15 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["30, 15", "35, 10", "25, 20", "40, 5"],
        "options_hi": ["30, 15", "35, 10", "25, 20", "40, 5"],
        "answer_en": "30, 15",
        "answer_hi": "30, 15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "If 6x + 9y = 15 and 12x + 18y = 30, then the lines are:",
        "question_hi": "यदि 6x + 9y = 15 और 12x + 18y = 30, तो रेखाएँ हैं:",
        "options_en": ["Parallel", "Coincident", "Intersecting", "None"],
        "options_hi": ["समांतर", "संपाती", "प्रतिच्छेदी", "कोई नहीं"],
        "answer_en": "Coincident",
        "answer_hi": "संपाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The sum of digits of a two-digit number is 13. If 27 is added to the number, the digits interchange. Find the number.",
        "question_hi": "दो-अंकीय संख्या के अंकों का योग 13 है। यदि संख्या में 27 जोड़ दिया जाए, तो अंक बदल जाते हैं। संख्या ज्ञात कीजिए।",
        "options_en": ["58", "76", "67", "85"],
        "options_hi": ["58", "76", "67", "85"],
        "answer_en": "58",
        "answer_hi": "58",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "If 8x + 3y = 7 and 16x + 6y = k have no solution, then k ≠ ?",
        "question_hi": "यदि 8x + 3y = 7 और 16x + 6y = k का कोई हल नहीं है, तो k ≠ ?",
        "options_en": ["14", "10", "7", "5"],
        "options_hi": ["14", "10", "7", "5"],
        "answer_en": "14",
        "answer_hi": "14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The perimeter of a rectangle is 60 cm. If length is doubled and breadth halved, perimeter becomes 80 cm. Find original length.",
        "question_hi": "एक आयत का परिमाप 60 सेमी है। यदि लंबाई दोगुनी और चौड़ाई आधी कर दी जाए, तो परिमाप 80 सेमी हो जाता है। वास्तविक लंबाई ज्ञात कीजिए।",
        "options_en": ["20 cm", "15 cm", "25 cm", "30 cm"],
        "options_hi": ["20 सेमी", "15 सेमी", "25 सेमी", "30 सेमी"],
        "answer_en": "20 cm",
        "answer_hi": "20 सेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "If 3x + 5y = 21 and 6x + 10y = 42, then the system has:",
        "question_hi": "यदि 3x + 5y = 21 और 6x + 10y = 42, तो निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "A man has ₹120 in ₹2 and ₹5 coins. If number of ₹2 coins is twice that of ₹5 coins, find number of ₹5 coins.",
        "question_hi": "एक व्यक्ति के पास ₹2 और ₹5 के सिक्कों में ₹120 हैं। यदि ₹2 के सिक्कों की संख्या ₹5 के सिक्कों से दोगुनी है, तो ₹5 के सिक्कों की संख्या ज्ञात कीजिए।",
        "options_en": ["10", "12", "15", "8"],
        "options_hi": ["10", "12", "15", "8"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "If x + 2y = 8 and 2x + 4y = 16, then the lines are:",
        "question_hi": "यदि x + 2y = 8 और 2x + 4y = 16, तो रेखाएँ हैं:",
        "options_en": ["Parallel", "Coincident", "Intersecting", "None"],
        "options_hi": ["समांतर", "संपाती", "प्रतिच्छेदी", "कोई नहीं"],
        "answer_en": "Coincident",
        "answer_hi": "संपाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The sum of two numbers is 28 and their difference is 10. Find the numbers.",
        "question_hi": "दो संख्याओं का योग 28 है और उनका अंतर 10 है। संख्याएँ ज्ञात कीजिए।",
        "options_en": ["19, 9", "20, 8", "18, 10", "22, 6"],
        "options_hi": ["19, 9", "20, 8", "18, 10", "22, 6"],
        "answer_en": "19, 9",
        "answer_hi": "19, 9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "If 5x + 3y = 11 and 10x + 6y = 22, then the system has:",
        "question_hi": "यदि 5x + 3y = 11 और 10x + 6y = 22, तो निकाय के होंगे:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "A two-digit number is such that it exceeds the sum of its digits by 18. If 27 is subtracted from the number, the digits interchange. Find the number.",
        "question_hi": "एक दो-अंकीय संख्या ऐसी है कि यह अपने अंकों के योग से 18 अधिक है। यदि संख्या में से 27 घटाया जाता है, तो अंक बदल जाते हैं। संख्या ज्ञात कीजिए।",
        "options_en": ["63", "54", "72", "81"],
        "options_hi": ["63", "54", "72", "81"],
        "answer_en": "63",
        "answer_hi": "63",
        "attempted": false,
        "selected": ""
    }
];
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};