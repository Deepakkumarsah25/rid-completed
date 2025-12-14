const questions = [


    {
        "num": 1,
        "question_en": "The roots of the quadratic equation \(x^2 - 3x - 10 = 0\) are:",
        "question_hi": "द्विघात समीकरण \(x^2 - 3x - 10 = 0\) के मूल हैं:",
        "options_en": ["2, 5", "-2, 5", "2, -5", "-2, -5"],
        "options_hi": ["2, 5", "-2, 5", "2, -5", "-2, -5"],
        "answer": "-2, 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The HCF of 96 and 404 is:",
        "question_hi": "96 और 404 का महत्तम समापवर्तक (HCF) है:",
        "options_en": ["4", "8", "12", "16"],
        "options_hi": ["4", "8", "12", "16"],
        "answer": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The sum of the angles of a quadrilateral is:",
        "question_hi": "एक चतुर्भुज के कोणों का योग है:",
        "options_en": ["180°", "270°", "360°", "450°"],
        "options_hi": ["180°", "270°", "360°", "450°"],
        "answer": "360°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The value of \(\sin 60° \cdot \cos 30° + \cos 60° \cdot \sin 30°\) is:",
        "question_hi": "\(\sin 60° \cdot \cos 30° + \cos 60° \cdot \sin 30°\) का मान है:",
        "options_en": ["0", "1", "\(\frac{\sqrt{3}}{2}\)", "\(\frac{1}{2}\)"],
        "options_hi": ["0", "1", "\(\frac{\sqrt{3}}{2}\)", "\(\frac{1}{2}\)"],
        "answer": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The area of a circle with radius 7 cm is: (Take \(\pi = \frac{22}{7}\))",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल है: (\(\pi = \frac{22}{7}\) लीजिए)",
        "options_en": ["154 cm²", "44 cm²", "22 cm²", "77 cm²"],
        "options_hi": ["154 cm²", "44 cm²", "22 cm²", "77 cm²"],
        "answer": "154 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The probability of getting an even number when a die is rolled is:",
        "question_hi": "एक पासा फेंकने पर सम संख्या आने की प्रायिकता है:",
        "options_en": ["\(\frac{1}{6}\)", "\(\frac{1}{3}\)", "\(\frac{1}{2}\)", "\(\frac{2}{3}\)"],
        "options_hi": ["\(\frac{1}{6}\)", "\(\frac{1}{3}\)", "\(\frac{1}{2}\)", "\(\frac{2}{3}\)"],
        "answer": "\(\frac{1}{2}\)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The pair of linear equations \(2x + 3y = 5\) and \(4x + 6y = 10\) has:",
        "question_hi": "रैखिक समीकरणों के युग्म \(2x + 3y = 5\) और \(4x + 6y = 10\) के हैं:",
        "options_en": ["Unique solution", "No solution", "Infinitely many solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer": "Infinitely many solutions",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The common difference of the AP: 10, 7, 4, 1, ... is:",
        "question_hi": "समांतर श्रेणी 10, 7, 4, 1, ... का सार्व अंतर है:",
        "options_en": ["3", "-3", "4", "-4"],
        "options_hi": ["3", "-3", "4", "-4"],
        "answer": "-3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The length of the tangent from a point P to a circle of radius 5 cm is 12 cm. The distance of P from the center is:",
        "question_hi": "5 सेमी त्रिज्या वाले वृत्त पर बिंदु P से स्पर्श रेखा की लंबाई 12 सेमी है। केंद्र से P की दूरी है:",
        "options_en": ["7 cm", "13 cm", "17 cm", "20 cm"],
        "options_hi": ["7 सेमी", "13 सेमी", "17 सेमी", "20 सेमी"],
        "answer": "13 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The volume of a cone with radius 3 cm and height 4 cm is: (Take \(\pi = \frac{22}{7}\))",
        "question_hi": "3 सेमी त्रिज्या और 4 सेमी ऊँचाई वाले शंकु का आयतन है: (\(\pi = \frac{22}{7}\) लीजिए)",
        "options_en": ["12 cm³", "24 cm³", "36 cm³", "48 cm³"],
        "options_hi": ["12 सेमी³", "24 सेमी³", "36 सेमी³", "48 सेमी³"],
        "answer": "12 cm³",
        "attempted": false,
        "selected": ""
    },


    {
        "num": 11,
        "question_en": "The decimal expansion of the rational number \(\frac{13}{125}\) will terminate after how many places?",
        "question_hi": "परिमेय संख्या \(\frac{13}{125}\) का दशमलव प्रसार कितने स्थानों के बाद समाप्त होगा?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "If the zeroes of the quadratic polynomial \(x^2 + (a+1)x + b\) are 2 and -3, then:",
        "question_hi": "यदि द्विघात बहुपद \(x^2 + (a+1)x + b\) के शून्यक 2 और -3 हैं, तो:",
        "options_en": ["a = -7, b = -1", "a = 5, b = -1", "a = 2, b = -6", "a = 0, b = -6"],
        "options_hi": ["a = -7, b = -1", "a = 5, b = -1", "a = 2, b = -6", "a = 0, b = -6"],
        "answer": "a = 0, b = -6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The pair of equations \(x + 2y - 5 = 0\) and \(-3x - 6y + 15 = 0\) has:",
        "question_hi": "समीकरणों के युग्म \(x + 2y - 5 = 0\) और \(-3x - 6y + 15 = 0\) के हैं:",
        "options_en": ["A unique solution", "No solution", "Infinitely many solutions", "Exactly two solutions"],
        "options_hi": ["एक अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "ठीक दो हल"],
        "answer": "Infinitely many solutions",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The distance between the points \(A(2, -3)\) and \(B(2, 2)\) is:",
        "question_hi": "बिंदुओं \(A(2, -3)\) और \(B(2, 2)\) के बीच की दूरी है:",
        "options_en": ["3 units", "4 units", "5 units", "6 units"],
        "options_hi": ["3 इकाई", "4 इकाई", "5 इकाई", "6 इकाई"],
        "answer": "5 units",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "If \(\tan \theta = \frac{12}{5}\), then \(\sin \theta\) is:",
        "question_hi": "यदि \(\tan \theta = \frac{12}{5}\), तो \(\sin \theta\) है:",
        "options_en": ["\(\frac{5}{13}\)", "\(\frac{12}{13}\)", "\(\frac{13}{5}\)", "\(\frac{13}{12}\)"],
        "options_hi": ["\(\frac{5}{13}\)", "\(\frac{12}{13}\)", "\(\frac{13}{5}\)", "\(\frac{13}{12}\)"],
        "answer": "\(\frac{12}{13}\)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The area of a sector of angle \(60°\) of a circle with radius 6 cm is:",
        "question_hi": "6 सेमी त्रिज्या वाले वृत्त के \(60°\) कोण वाले त्रिज्यखंड का क्षेत्रफल है:",
        "options_en": ["\(\frac{132}{7}\) cm²", "\(\frac{66}{7}\) cm²", "\(\frac{44}{7}\) cm²", "\(\frac{22}{7}\) cm²"],
        "options_hi": ["\(\frac{132}{7}\) सेमी²", "\(\frac{66}{7}\) सेमी²", "\(\frac{44}{7}\) सेमी²", "\(\frac{22}{7}\) सेमी²"],
        "answer": "\(\frac{132}{7}\) cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The probability of getting a prime number when a die is rolled is:",
        "question_hi": "एक पासा फेंकने पर अभाज्य संख्या आने की प्रायिकता है:",
        "options_en": ["\(\frac{1}{6}\)", "\(\frac{1}{3}\)", "\(\frac{1}{2}\)", "\(\frac{2}{3}\)"],
        "options_hi": ["\(\frac{1}{6}\)", "\(\frac{1}{3}\)", "\(\frac{1}{2}\)", "\(\frac{2}{3}\)"],
        "answer": "\(\frac{1}{2}\)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The sum of the first 10 natural numbers is:",
        "question_hi": "प्रथम 10 प्राकृत संख्याओं का योग है:",
        "options_en": ["45", "50", "55", "60"],
        "options_hi": ["45", "50", "55", "60"],
        "answer": "55",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The length of the tangent from a point 10 cm away from the center of a circle of radius 6 cm is:",
        "question_hi": "6 सेमी त्रिज्या वाले वृत्त के केंद्र से 10 सेमी दूर स्थित एक बिंदु से स्पर्श रेखा की लंबाई है:",
        "options_en": ["4 cm", "6 cm", "8 cm", "10 cm"],
        "options_hi": ["4 सेमी", "6 सेमी", "8 सेमी", "10 सेमी"],
        "answer": "8 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The volume of a sphere of radius 3 cm is: (\(\pi = \frac{22}{7}\))",
        "question_hi": "3 सेमी त्रिज्या वाले गोले का आयतन है: (\(\pi = \frac{22}{7}\))",
        "options_en": ["88 cm³", "113.14 cm³", "132 cm³", "198 cm³"],
        "options_hi": ["88 सेमी³", "113.14 सेमी³", "132 सेमी³", "198 सेमी³"],
        "answer": "113.14 cm³",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 20,
        "question_en": "The value of tan 45° + cos 45° is:",
        "question_hi": "tan 45° + cos 45° का मान है:",
        "options_en": ["1", "1 + 1/√2", "2", "√2"],
        "options_hi": ["1", "1 + 1/√2", "2", "√2"],
        "answer": "1 + 1/√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "A tangent to a circle is perpendicular to the radius at the point of:",
        "question_hi": "वृत्त की स्पर्श रेखा, स्पर्श बिंदु पर त्रिज्या के लंबवत होती है:",
        "options_en": ["Contact", "Intersection", "Origin", "Center"],
        "options_hi": ["संपर्क", "प्रतिच्छेद", "मूल", "केंद्र"],
        "answer": "Contact",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The area of a sector of angle 60° of a circle with radius 6 cm is:",
        "question_hi": "6 सेमी त्रिज्या वाले वृत्त के 60° कोण वाले त्रिज्यखंड का क्षेत्रफल है:",
        "options_en": ["6π cm²", "12π cm²", "18π cm²", "36π cm²"],
        "options_hi": ["6π सेमी²", "12π सेमी²", "18π सेमी²", "36π सेमी²"],
        "answer": "6π cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The probability of getting a prime number when a die is rolled is:",
        "question_hi": "एक पासा फेंकने पर अभाज्य संख्या आने की प्रायिकता है:",
        "options_en": ["1/2", "1/3", "1/6", "2/3"],
        "options_hi": ["1/2", "1/3", "1/6", "2/3"],
        "answer": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The 10th term of the AP: 5, 8, 11, 14,... is:",
        "question_hi": "समांतर श्रेणी 5, 8, 11, 14,... का 10वाँ पद है:",
        "options_en": ["32", "35", "38", "41"],
        "options_hi": ["32", "35", "38", "41"],
        "answer": "32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The volume of a sphere of radius 3 cm is: (π = 22/7)",
        "question_hi": "3 सेमी त्रिज्या वाले गोले का आयतन है: (π = 22/7)",
        "options_en": ["36π cm³", "72π cm³", "108π cm³", "144π cm³"],
        "options_hi": ["36π सेमी³", "72π सेमी³", "108π सेमी³", "144π सेमी³"],
        "answer": "36π cm³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The LCM of two numbers is 1200. Which of the following cannot be their HCF?",
        "question_hi": "दो संख्याओं का LCM 1200 है। निम्नलिखित में से कौन सा उनका HCF नहीं हो सकता?",
        "options_en": ["600", "500", "400", "200"],
        "options_hi": ["600", "500", "400", "200"],
        "answer": "500",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The quadratic polynomial whose zeroes are 3 and -2 is:",
        "question_hi": "वह द्विघात बहुपद जिसके शून्यक 3 और -2 हैं, वह है:",
        "options_en": ["x²-x-6", "x²+x-6", "x²-5x+6", "x²+5x-6"],
        "options_hi": ["x²-x-6", "x²+x-6", "x²-5x+6", "x²+5x-6"],
        "answer": "x²-x-6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The pair of equations y=0 and y=-7 has:",
        "question_hi": "समीकरणों के युग्म y=0 और y=-7 के हैं:",
        "options_en": ["One solution", "Two solutions", "No solution", "Infinitely many solutions"],
        "options_hi": ["एक हल", "दो हल", "कोई हल नहीं", "अनंत हल"],
        "answer": "No solution",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The point which divides the line segment joining (1,2) and (3,4) internally in the ratio 1:1 is:",
        "question_hi": "वह बिंदु जो (1,2) और (3,4) को जोड़ने वाले रेखाखंड को 1:1 के अनुपात में आंतरिक रूप से विभाजित करता है:",
        "options_en": ["(1,2)", "(2,3)", "(3,4)", "(4,5)"],
        "options_hi": ["(1,2)", "(2,3)", "(3,4)", "(4,5)"],
        "answer": "(2,3)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "If sin A = 3/4, then cos A is:",
        "question_hi": "यदि sin A = 3/4, तो cos A है:",
        "options_en": ["√7/4", "1/4", "5/4", "4/3"],
        "options_hi": ["√7/4", "1/4", "5/4", "4/3"],
        "answer": "√7/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The number of tangents that can be drawn to a circle from a point outside it is:",
        "question_hi": "किसी वृत्त के बाहर एक बिंदु से खींची जा सकने वाली स्पर्श रेखाओं की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The area of a quadrant of a circle whose circumference is 44 cm is:",
        "question_hi": "एक वृत्त के चतुर्थांश का क्षेत्रफल जिसकी परिधि 44 सेमी है:",
        "options_en": ["38.5 cm²", "77 cm²", "154 cm²", "308 cm²"],
        "options_hi": ["38.5 सेमी²", "77 सेमी²", "154 सेमी²", "308 सेमी²"],
        "answer": "38.5 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "A bag contains 5 red and 3 blue balls. The probability of drawing a blue ball is:",
        "question_hi": "एक थैले में 5 लाल और 3 नीली गेंदें हैं। एक नीली गेंद निकालने की प्रायिकता है:",
        "options_en": ["3/8", "5/8", "1/2", "1"],
        "options_hi": ["3/8", "5/8", "1/2", "1"],
        "answer": "3/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The sum of first 20 odd natural numbers is:",
        "question_hi": "प्रथम 20 विषम प्राकृतिक संख्याओं का योग है:",
        "options_en": ["100", "200", "300", "400"],
        "options_hi": ["100", "200", "300", "400"],
        "answer": "400",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The surface area of a sphere of radius 7 cm is:",
        "question_hi": "7 सेमी त्रिज्या वाले गोले का पृष्ठीय क्षेत्रफल है:",
        "options_en": ["154 cm²", "308 cm²", "616 cm²", "1232 cm²"],
        "options_hi": ["154 सेमी²", "308 सेमी²", "616 सेमी²", "1232 सेमी²"],
        "answer": "616 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The decimal expansion of 17/8 will terminate after how many places?",
        "question_hi": "17/8 का दशमलव प्रसार कितने स्थानों के बाद समाप्त होगा?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "If α and β are zeroes of x²-5x+6, then value of α+β is:",
        "question_hi": "यदि α और β, x²-5x+6 के शून्यक हैं, तो α+β का मान है:",
        "options_en": ["5", "-5", "6", "-6"],
        "options_hi": ["5", "-5", "6", "-6"],
        "answer": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The pair of equations x=4 and y=3 graphically represents lines which are:",
        "question_hi": "समीकरणों के युग्म x=4 और y=3 आलेखीय रूप से रेखाओं को निरूपित करते हैं जो हैं:",
        "options_en": ["Parallel", "Intersecting at (4,3)", "Coincident", "Perpendicular"],
        "options_hi": ["समांतर", "(4,3) पर प्रतिच्छेद", "संपाती", "लंबवत"],
        "answer": "Intersecting at (4,3)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The distance between (a+b, b+c) and (a-b, c-b) is:",
        "question_hi": "बिंदुओं (a+b, b+c) और (a-b, c-b) के बीच की दूरी है:",
        "options_en": ["2√(a²+b²)", "2√(b²+c²)", "√(4b²+a²)", "√(4a²+b²)"],
        "options_hi": ["2√(a²+b²)", "2√(b²+c²)", "√(4b²+a²)", "√(4a²+b²)"],
        "answer": "2√(a²+b²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "If cot θ = 7/8, then (1+sinθ)(1-sinθ)/(1+cosθ)(1-cosθ) =",
        "question_hi": "यदि cot θ = 7/8, तो (1+sinθ)(1-sinθ)/(1+cosθ)(1-cosθ) =",
        "options_en": ["49/64", "8/7", "7/8", "64/49"],
        "options_hi": ["49/64", "8/7", "7/8", "64/49"],
        "answer": "49/64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The length of tangent from a point 10 cm away from center of circle of radius 6 cm is:",
        "question_hi": "6 सेमी त्रिज्या वाले वृत्त के केंद्र से 10 सेमी दूर स्थित बिंदु से स्पर्श रेखा की लंबाई है:",
        "options_en": ["4 cm", "6 cm", "8 cm", "10 cm"],
        "options_hi": ["4 सेमी", "6 सेमी", "8 सेमी", "10 सेमी"],
        "answer": "8 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The perimeter of a semicircle of radius 7 cm is:",
        "question_hi": "7 सेमी त्रिज्या वाले अर्धवृत्त का परिमाप है:",
        "options_en": ["36 cm", "22 cm", "44 cm", "58 cm"],
        "options_hi": ["36 सेमी", "22 सेमी", "44 सेमी", "58 सेमी"],
        "answer": "36 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Two coins are tossed simultaneously. The probability of getting at least one head is:",
        "question_hi": "दो सिक्कों को एक साथ उछाला जाता है। कम से कम एक चित आने की प्रायिकता है:",
        "options_en": ["1/4", "1/2", "3/4", "1"],
        "options_hi": ["1/4", "1/2", "3/4", "1"],
        "answer": "3/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The sum of first 15 multiples of 8 is:",
        "question_hi": "8 के प्रथम 15 गुणजों का योग है:",
        "options_en": ["480", "600", "960", "1200"],
        "options_hi": ["480", "600", "960", "1200"],
        "answer": "960",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The ratio of volumes of two spheres is 64:27. The ratio of their surface areas is:",
        "question_hi": "दो गोलों के आयतनों का अनुपात 64:27 है। उनके पृष्ठीय क्षेत्रफलों का अनुपात है:",
        "options_en": ["4:3", "16:9", "8:9", "9:16"],
        "options_hi": ["4:3", "16:9", "8:9", "9:16"],
        "answer": "16:9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The product of two numbers is 2286. If their HCF is 9, then their LCM is:",
        "question_hi": "दो संख्याओं का गुणनफल 2286 है। यदि उनका HCF 9 है, तो उनका LCM है:",
        "options_en": ["254", "260", "266", "272"],
        "options_hi": ["254", "260", "266", "272"],
        "answer": "254",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "If one zero of 3x²-8x+2k+1 is seven times the other, then k is:",
        "question_hi": "यदि 3x²-8x+2k+1 का एक शून्यक दूसरे का सात गुना है, तो k है:",
        "options_en": ["2", "3", "5", "7"],
        "options_hi": ["2", "3", "5", "7"],
        "answer": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The pair of equations 2x+3y=5 and 4x+6y=15 has:",
        "question_hi": "समीकरणों के युग्म 2x+3y=5 और 4x+6y=15 के हैं:",
        "options_en": ["Unique solution", "No solution", "Infinitely many solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer": "No solution",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The point on x-axis equidistant from (2,-5) and (-2,9) is:",
        "question_hi": "x-अक्ष पर स्थित वह बिंदु जो (2,-5) और (-2,9) से समदूरस्थ है:",
        "options_en": ["(-7,0)", "(7,0)", "(0,-7)", "(0,7)"],
        "options_hi": ["(-7,0)", "(7,0)", "(0,-7)", "(0,7)"],
        "answer": "(-7,0)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "If tan A = 4/3, then (sin A + cos A) =",
        "question_hi": "यदि tan A = 4/3, तो (sin A + cos A) =",
        "options_en": ["7/5", "5/7", "1", "None"],
        "options_hi": ["7/5", "5/7", "1", "कोई नहीं"],
        "answer": "7/5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The number of common tangents to two circles touching externally is:",
        "question_hi": "दो वृत्तों जो बाह्य रूप से स्पर्श करते हैं, की उभयनिष्ठ स्पर्श रेखाओं की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The area of a circle that can be inscribed in a square of side 14 cm is:",
        "question_hi": "14 सेमी भुजा वाले वर्ग में अंकित किए जा सकने वाले वृत्त का क्षेत्रफल है:",
        "options_en": ["154 cm²", "196 cm²", "308 cm²", "616 cm²"],
        "options_hi": ["154 सेमी²", "196 सेमी²", "308 सेमी²", "616 सेमी²"],
        "answer": "154 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "A card is drawn from a deck of 52 cards. The probability of getting a red face card is:",
        "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। एक लाल मुख वाले पत्ते के आने की प्रायिकता है:",
        "options_en": ["3/26", "1/13", "1/4", "1/2"],
        "options_hi": ["3/26", "1/13", "1/4", "1/2"],
        "answer": "3/26",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The sum of first 40 positive integers divisible by 6 is:",
        "question_hi": "6 से विभाज्य प्रथम 40 धनात्मक पूर्णांकों का योग है:",
        "options_en": ["4920", "4980", "5040", "5100"],
        "options_hi": ["4920", "4980", "5040", "5100"],
        "answer": "4920",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The total surface area of a cube is 96 cm². Its volume is:",
        "question_hi": "एक घन का कुल पृष्ठीय क्षेत्रफल 96 सेमी² है। इसका आयतन है:",
        "options_en": ["64 cm³", "216 cm³", "256 cm³", "512 cm³"],
        "options_hi": ["64 सेमी³", "216 सेमी³", "256 सेमी³", "512 सेमी³"],
        "answer": "64 cm³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The decimal expansion of 11/2³×5 will terminate after how many places?",
        "question_hi": "11/2³×5 का दशमलव प्रसार कितने स्थानों के बाद समाप्त होगा?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "If α and β are zeroes of x²+5x+8, then the value of (α+β) is:",
        "question_hi": "यदि α और β, x²+5x+8 के शून्यक हैं, तो (α+β) का मान है:",
        "options_en": ["5", "-5", "8", "-8"],
        "options_hi": ["5", "-5", "8", "-8"],
        "answer": "-5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The pair of equations x=4 and y=3 graphically represents lines which are:",
        "question_hi": "समीकरणों के युग्म x=4 और y=3 आलेखीय रूप से रेखाओं को निरूपित करते हैं जो हैं:",
        "options_en": ["Parallel", "Intersecting at (4,3)", "Coincident", "Perpendicular"],
        "options_hi": ["समांतर", "(4,3) पर प्रतिच्छेद", "संपाती", "लंबवत"],
        "answer": "Intersecting at (4,3)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The distance between (0,5) and (-5,0) is:",
        "question_hi": "बिंदुओं (0,5) और (-5,0) के बीच की दूरी है:",
        "options_en": ["5", "5√2", "10", "2√5"],
        "options_hi": ["5", "5√2", "10", "2√5"],
        "answer": "5√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "If tan θ = 1, then the value of (sin θ + cos θ) is:",
        "question_hi": "यदि tan θ = 1, तो (sin θ + cos θ) का मान है:",
        "options_en": ["1/√2", "√2", "1", "2"],
        "options_hi": ["1/√2", "√2", "1", "2"],
        "answer": "√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The length of tangent from a point 10 cm away from center of circle of radius 6 cm is:",
        "question_hi": "6 सेमी त्रिज्या वाले वृत्त के केंद्र से 10 सेमी दूर स्थित बिंदु से स्पर्श रेखा की लंबाई है:",
        "options_en": ["4 cm", "6 cm", "8 cm", "10 cm"],
        "options_hi": ["4 सेमी", "6 सेमी", "8 सेमी", "10 सेमी"],
        "answer": "8 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The perimeter of a semicircle of radius 7 cm is:",
        "question_hi": "7 सेमी त्रिज्या वाले अर्धवृत्त का परिमाप है:",
        "options_en": ["36 cm", "22 cm", "44 cm", "58 cm"],
        "options_hi": ["36 सेमी", "22 सेमी", "44 सेमी", "58 सेमी"],
        "answer": "36 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Two coins are tossed simultaneously. The probability of getting at least one head is:",
        "question_hi": "दो सिक्कों को एक साथ उछाला जाता है। कम से कम एक चित आने की प्रायिकता है:",
        "options_en": ["1/4", "1/2", "3/4", "1"],
        "options_hi": ["1/4", "1/2", "3/4", "1"],
        "answer": "3/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The sum of first 15 multiples of 8 is:",
        "question_hi": "8 के प्रथम 15 गुणजों का योग है:",
        "options_en": ["480", "600", "960", "1200"],
        "options_hi": ["480", "600", "960", "1200"],
        "answer": "960",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The ratio of volumes of two spheres is 64:27. The ratio of their surface areas is:",
        "question_hi": "दो गोलों के आयतनों का अनुपात 64:27 है। उनके पृष्ठीय क्षेत्रफलों का अनुपात है:",
        "options_en": ["4:3", "16:9", "8:9", "9:16"],
        "options_hi": ["4:3", "16:9", "8:9", "9:16"],
        "answer": "16:9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The product of two numbers is 2286. If their HCF is 9, then their LCM is:",
        "question_hi": "दो संख्याओं का गुणनफल 2286 है। यदि उनका HCF 9 है, तो उनका LCM है:",
        "options_en": ["254", "260", "266", "272"],
        "options_hi": ["254", "260", "266", "272"],
        "answer": "254",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "If one zero of 3x²-8x+2k+1 is seven times the other, then k is:",
        "question_hi": "यदि 3x²-8x+2k+1 का एक शून्यक दूसरे का सात गुना है, तो k है:",
        "options_en": ["2", "3", "5", "7"],
        "options_hi": ["2", "3", "5", "7"],
        "answer": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The pair of equations 2x+3y=5 and 4x+6y=15 has:",
        "question_hi": "समीकरणों के युग्म 2x+3y=5 और 4x+6y=15 के हैं:",
        "options_en": ["Unique solution", "No solution", "Infinitely many solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer": "No solution",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The point on x-axis equidistant from (2,-5) and (-2,9) is:",
        "question_hi": "x-अक्ष पर स्थित वह बिंदु जो (2,-5) और (-2,9) से समदूरस्थ है:",
        "options_en": ["(-7,0)", "(7,0)", "(0,-7)", "(0,7)"],
        "options_hi": ["(-7,0)", "(7,0)", "(0,-7)", "(0,7)"],
        "answer": "(-7,0)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "If tan A = 4/3, then (sin A + cos A) =",
        "question_hi": "यदि tan A = 4/3, तो (sin A + cos A) =",
        "options_en": ["7/5", "5/7", "1", "None"],
        "options_hi": ["7/5", "5/7", "1", "कोई नहीं"],
        "answer": "7/5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The number of common tangents to two circles touching externally is:",
        "question_hi": "दो वृत्तों जो बाह्य रूप से स्पर्श करते हैं, की उभयनिष्ठ स्पर्श रेखाओं की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The area of a circle that can be inscribed in a square of side 14 cm is:",
        "question_hi": "14 सेमी भुजा वाले वर्ग में अंकित किए जा सकने वाले वृत्त का क्षेत्रफल है:",
        "options_en": ["154 cm²", "196 cm²", "308 cm²", "616 cm²"],
        "options_hi": ["154 सेमी²", "196 सेमी²", "308 सेमी²", "616 सेमी²"],
        "answer": "154 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "A card is drawn from a deck of 52 cards. The probability of getting a red face card is:",
        "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। एक लाल मुख वाले पत्ते के आने की प्रायिकता है:",
        "options_en": ["3/26", "1/13", "1/4", "1/2"],
        "options_hi": ["3/26", "1/13", "1/4", "1/2"],
        "answer": "3/26",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The sum of first 40 positive integers divisible by 6 is:",
        "question_hi": "6 से विभाज्य प्रथम 40 धनात्मक पूर्णांकों का योग है:",
        "options_en": ["4920", "4980", "5040", "5100"],
        "options_hi": ["4920", "4980", "5040", "5100"],
        "answer": "4920",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The total surface area of a cube is 96 cm². Its volume is:",
        "question_hi": "एक घन का कुल पृष्ठीय क्षेत्रफल 96 सेमी² है। इसका आयतन है:",
        "options_en": ["64 cm³", "216 cm³", "256 cm³", "512 cm³"],
        "options_hi": ["64 सेमी³", "216 सेमी³", "256 सेमी³", "512 सेमी³"],
        "answer": "64 cm³",
        "attempted": false,
        "selected": ""
    },








    // Continue adding more questions up to 30
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    optionsArray.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
    });

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
}

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

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};