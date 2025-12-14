
const questions = [


  {
    "num": 1,
    "question_en": "The HCF of 96 and 404 using Euclid's division algorithm is:",
    "question_hi": "96 और 404 का HCF (यूक्लिड विभाजन एल्गोरिथ्म द्वारा) है:",
    "options_en": ["4", "6", "8", "12"],
    "options_hi": ["4", "6", "8", "12"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false
  },
  {
    "num": 2,
    "question_en": "Which of the following is an irrational number?",
    "question_hi": "निम्नलिखित में से कौन-सी अपरिमेय संख्या है?",
    "options_en": ["√9", "√16", "√2", "√25"],
    "options_hi": ["√9", "√16", "√2", "√25"],
    "answer_en": "√2",
    "answer_hi": "√2",
    "attempted": false
  },
  {
    "num": 3,
    "question_en": "The zeroes of the polynomial x² - 3x - 10 are:",
    "question_hi": "बहुपद x² - 3x - 10 के शून्यक हैं:",
    "options_en": ["2, -5", "-2, 5", "3, -10", "-3, 10"],
    "options_hi": ["2, -5", "-2, 5", "3, -10", "-3, 10"],
    "answer_en": "-2, 5",
    "answer_hi": "-2, 5",
    "attempted": false
  },
  {
    "num": 4,
    "question_en": "The pair of equations x + 2y = 5 and 3x + 6y = 15 represents:",
    "question_hi": "समीकरणों का युग्म x + 2y = 5 और 3x + 6y = 15 निरूपित करता है:",
    "options_en": ["Parallel lines", "Intersecting lines", "Coincident lines", "None"],
    "options_hi": ["समानांतर रेखाएँ", "प्रतिच्छेदी रेखाएँ", "संपाती रेखाएँ", "कोई नहीं"],
    "answer_en": "Coincident lines",
    "answer_hi": "संपाती रेखाएँ",
    "attempted": false
  },
  {
    "num": 5,
    "question_en": "The quadratic equation whose roots are 3 and 4 is:",
    "question_hi": "द्विघात समीकरण जिसके मूल 3 और 4 हैं, वह है:",
    "options_en": ["x² - 7x + 12 = 0", "x² + 7x + 12 = 0", "x² - 7x - 12 = 0", "x² + 7x - 12 = 0"],
    "options_hi": ["x² - 7x + 12 = 0", "x² + 7x + 12 = 0", "x² - 7x - 12 = 0", "x² + 7x - 12 = 0"],
    "answer_en": "x² - 7x + 12 = 0",
    "answer_hi": "x² - 7x + 12 = 0",
    "attempted": false
  },
  {
    "num": 6,
    "question_en": "The 10th term of the AP: 5, 8, 11, 14,... is:",
    "question_hi": "समांतर श्रेणी 5, 8, 11, 14,... का 10वाँ पद है:",
    "options_en": ["28", "30", "32", "34"],
    "options_hi": ["28", "30", "32", "34"],
    "answer_en": "32",
    "answer_hi": "32",
    "attempted": false
  },
  {
    "num": 7,
    "question_en": "In ΔABC, if DE || BC, AD = 3cm, DB = 5cm and AE = 6cm, then EC is:",
    "question_hi": "ΔABC में, यदि DE || BC, AD = 3cm, DB = 5cm और AE = 6cm, तो EC है:",
    "options_en": ["6 cm", "8 cm", "10 cm", "12 cm"],
    "options_hi": ["6 cm", "8 cm", "10 cm", "12 cm"],
    "answer_en": "10 cm",
    "answer_hi": "10 cm",
    "attempted": false
  },
  {
    "num": 8,
    "question_en": "The distance between points (2, 3) and (5, 7) is:",
    "question_hi": "बिंदुओं (2, 3) और (5, 7) के बीच की दूरी है:",
    "options_en": ["3 units", "4 units", "5 units", "6 units"],
    "options_hi": ["3 इकाई", "4 इकाई", "5 इकाई", "6 इकाई"],
    "answer_en": "5 units",
    "answer_hi": "5 इकाई",
    "attempted": false
  },
  {
    "num": 9,
    "question_en": "If sin θ = 3/5, then cos θ is:",
    "question_hi": "यदि sin θ = 3/5, तो cos θ है:",
    "options_en": ["3/5", "4/5", "5/4", "5/3"],
    "options_hi": ["3/5", "4/5", "5/4", "5/3"],
    "answer_en": "4/5",
    "answer_hi": "4/5",
    "attempted": false
  },
  {
    "num": 10,
    "question_en": "The angle of elevation of the sun when the shadow of a pole is √3 times its height is:",
    "question_hi": "सूर्य का उन्नयन कोण जब एक खंभे की छाया उसकी ऊँचाई की √3 गुना है:",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "30°",
    "answer_hi": "30°",
    "attempted": false
  },
  {
    "num": 11,
    "question_en": "The tangent at any point of a circle is perpendicular to:",
    "question_hi": "वृत्त के किसी बिंदु पर स्पर्श रेखा होती है:",
    "options_en": ["Chord", "Radius", "Diameter", "Secant"],
    "options_hi": ["जीवा", "त्रिज्या", "व्यास", "छेदक रेखा"],
    "answer_en": "Radius",
    "answer_hi": "त्रिज्या",
    "attempted": false
  },
  {
    "num": 12,
    "question_en": "The area of a sector of angle 60° of a circle with radius 6 cm is:",
    "question_hi": "6 cm त्रिज्या वाले वृत्त के 60° कोण वाले त्रिज्यखंड का क्षेत्रफल है:",
    "options_en": ["6π cm²", "12π cm²", "18π cm²", "36π cm²"],
    "options_hi": ["6π cm²", "12π cm²", "18π cm²", "36π cm²"],
    "answer_en": "6π cm²",
    "answer_hi": "6π cm²",
    "attempted": false
  },
  {
    "num": 13,
    "question_en": "The volume of a sphere of radius 3 cm is:",
    "question_hi": "3 cm त्रिज्या वाले गोले का आयतन है:",
    "options_en": ["12π cm³", "24π cm³", "36π cm³", "48π cm³"],
    "options_hi": ["12π cm³", "24π cm³", "36π cm³", "48π cm³"],
    "answer_en": "36π cm³",
    "answer_hi": "36π cm³",
    "attempted": false
  },
  {
    "num": 14,
    "question_en": "The median of the data 3, 5, 7, 9, 11 is:",
    "question_hi": "आँकड़ों 3, 5, 7, 9, 11 की माध्यिका है:",
    "options_en": ["5", "7", "9", "11"],
    "options_hi": ["5", "7", "9", "11"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false
  },
  {
    "num": 15,
    "question_en": "The probability of getting a prime number when a die is rolled is:",
    "question_hi": "एक पासा फेंकने पर अभाज्य संख्या आने की प्रायिकता है:",
    "options_en": ["1/6", "1/3", "1/2", "2/3"],
    "options_hi": ["1/6", "1/3", "1/2", "2/3"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 16,
    "question_en": "The decimal expansion of 13/6250 will terminate after how many decimal places?",
    "question_hi": "13/6250 का दशमलव प्रसार कितने दशमलव स्थानों के बाद समाप्त होगा?",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false
  },
  {
    "num": 17,
    "question_en": "If α and β are zeros of x² - 5x + 6, then α + β is equal to:",
    "question_hi": "यदि α और β, x² - 5x + 6 के शून्यक हैं, तो α + β बराबर है:",
    "options_en": ["5", "-5", "6", "-6"],
    "options_hi": ["5", "-5", "6", "-6"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false
  },
  {
    "num": 18,
    "question_en": "The pair of equations y = 0 and y = -7 has:",
    "question_hi": "समीकरणों का युग्म y = 0 और y = -7 का है:",
    "options_en": ["One solution", "Two solutions", "No solution", "Infinite solutions"],
    "options_hi": ["एक हल", "दो हल", "कोई हल नहीं", "अनंत हल"],
    "answer_en": "No solution",
    "answer_hi": "कोई हल नहीं",
    "attempted": false
  },
  {
    "num": 19,
    "question_en": "The discriminant of the quadratic equation 2x² - 4x + 3 = 0 is:",
    "question_hi": "द्विघात समीकरण 2x² - 4x + 3 = 0 का विविक्तकर है:",
    "options_en": ["-8", "8", "16", "-16"],
    "options_hi": ["-8", "8", "16", "-16"],
    "answer_en": "-8",
    "answer_hi": "-8",
    "attempted": false
  },
  {
    "num": 20,
    "question_en": "The sum of first 10 natural numbers is:",
    "question_hi": "प्रथम 10 प्राकृतिक संख्याओं का योग है:",
    "options_en": ["45", "50", "55", "60"],
    "options_hi": ["45", "50", "55", "60"],
    "answer_en": "55",
    "answer_hi": "55",
    "attempted": false
  },
  {
    "num": 21,
    "question_en": "The sum of exponents of prime factors in the prime factorization of 196 is:",
    "question_hi": "196 के अभाज्य गुणनखंडन में अभाज्य गुणनखंडों के घातांकों का योग है:",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false
  },
  {
    "num": 22,
    "question_en": "If the product of two numbers is 228 and their HCF is 12, what is their LCM?",
    "question_hi": "यदि दो संख्याओं का गुणनफल 228 है और उनका HCF 12 है, तो उनका LCM क्या है?",
    "options_en": ["12", "19", "24", "36"],
    "options_hi": ["12", "19", "24", "36"],
    "answer_en": "19",
    "answer_hi": "19",
    "attempted": false
  },
  {
    "num": 23,
    "question_en": "Which of these is not a polynomial?",
    "question_hi": "निम्न में से कौन-सा बहुपद नहीं है?",
    "options_en": ["x² + 3x + 2", "√x + 5", "3x³ - 2x + 1", "5"],
    "options_hi": ["x² + 3x + 2", "√x + 5", "3x³ - 2x + 1", "5"],
    "answer_en": "√x + 5",
    "answer_hi": "√x + 5",
    "attempted": false
  },
  {
    "num": 24,
    "question_en": "The zeroes of the polynomial x² - 3x - 10 are:",
    "question_hi": "बहुपद x² - 3x - 10 के शून्यक हैं:",
    "options_en": ["2, -5", "-2, 5", "3, -10", "-3, 10"],
    "options_hi": ["2, -5", "-2, 5", "3, -10", "-3, 10"],
    "answer_en": "-2, 5",
    "answer_hi": "-2, 5",
    "attempted": false
  },
  {
    "num": 25,
    "question_en": "The pair of equations 2x + 3y = 5 and 4x + 6y = 10 represents:",
    "question_hi": "समीकरणों का युग्म 2x + 3y = 5 और 4x + 6y = 10 निरूपित करता है:",
    "options_en": ["Parallel lines", "Intersecting lines", "Coincident lines", "None"],
    "options_hi": ["समानांतर रेखाएँ", "प्रतिच्छेदी रेखाएँ", "संपाती रेखाएँ", "कोई नहीं"],
    "answer_en": "Coincident lines",
    "answer_hi": "संपाती रेखाएँ",
    "attempted": false
  },
  {
    "num": 26,
    "question_en": "The quadratic equation whose roots are 3 and 4 is:",
    "question_hi": "द्विघात समीकरण जिसके मूल 3 और 4 हैं, वह है:",
    "options_en": ["x² - 7x + 12 = 0", "x² + 7x + 12 = 0", "x² - 7x - 12 = 0", "x² + 7x - 12 = 0"],
    "options_hi": ["x² - 7x + 12 = 0", "x² + 7x + 12 = 0", "x² - 7x - 12 = 0", "x² + 7x - 12 = 0"],
    "answer_en": "x² - 7x + 12 = 0",
    "answer_hi": "x² - 7x + 12 = 0",
    "attempted": false
  },
  {
    "num": 27,
    "question_en": "The 10th term of the AP: 5, 8, 11, 14,... is:",
    "question_hi": "समांतर श्रेणी 5, 8, 11, 14,... का 10वाँ पद है:",
    "options_en": ["28", "30", "32", "34"],
    "options_hi": ["28", "30", "32", "34"],
    "answer_en": "32",
    "answer_hi": "32",
    "attempted": false
  },
  {
    "num": 28,
    "question_en": "The sum of first 20 odd natural numbers is:",
    "question_hi": "प्रथम 20 विषम प्राकृतिक संख्याओं का योग है:",
    "options_en": ["100", "200", "300", "400"],
    "options_hi": ["100", "200", "300", "400"],
    "answer_en": "400",
    "answer_hi": "400",
    "attempted": false
  },
  {
    "num": 29,
    "question_en": "In ΔABC, if DE || BC, AD = 3cm, DB = 5cm and AE = 6cm, then EC is:",
    "question_hi": "ΔABC में, यदि DE || BC, AD = 3cm, DB = 5cm और AE = 6cm, तो EC है:",
    "options_en": ["6 cm", "8 cm", "10 cm", "12 cm"],
    "options_hi": ["6 cm", "8 cm", "10 cm", "12 cm"],
    "answer_en": "10 cm",
    "answer_hi": "10 cm",
    "attempted": false
  },
  {
    "num": 30,
    "question_en": "The ratio of the areas of two similar triangles is 9:16. The ratio of their corresponding sides is:",
    "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 9:16 है। उनकी संगत भुजाओं का अनुपात है:",
    "options_en": ["3:4", "4:3", "9:16", "16:9"],
    "options_hi": ["3:4", "4:3", "9:16", "16:9"],
    "answer_en": "3:4",
    "answer_hi": "3:4",
    "attempted": false
  },
  {
    "num": 31,
    "question_en": "The midpoint of the line segment joining (2,3) and (4,5) is:",
    "question_hi": "(2,3) और (4,5) को मिलाने वाले रेखाखंड का मध्यबिंदु है:",
    "options_en": ["(3,4)", "(4,3)", "(5,6)", "(6,5)"],
    "options_hi": ["(3,4)", "(4,3)", "(5,6)", "(6,5)"],
    "answer_en": "(3,4)",
    "answer_hi": "(3,4)",
    "attempted": false
  },
  {
    "num": 32,
    "question_en": "The value of tan 45° + cos 60° is:",
    "question_hi": "tan 45° + cos 60° का मान है:",
    "options_en": ["1", "1.5", "2", "2.5"],
    "options_hi": ["1", "1.5", "2", "2.5"],
    "answer_en": "1.5",
    "answer_hi": "1.5",
    "attempted": false
  },
  {
    "num": 33,
    "question_en": "If sec θ = 2, then tan θ is:",
    "question_hi": "यदि sec θ = 2, तो tan θ है:",
    "options_en": ["√3", "1/√3", "2/√3", "√3/2"],
    "options_hi": ["√3", "1/√3", "2/√3", "√3/2"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false
  },
  {
    "num": 34,
    "question_en": "The length of the shadow of a 15m high pole when the sun's elevation is 30° is:",
    "question_hi": "15m ऊँचे खंभे की छाया की लंबाई जब सूर्य का उन्नयन कोण 30° है, वह है:",
    "options_en": ["15√3 m", "15/√3 m", "30 m", "45 m"],
    "options_hi": ["15√3 m", "15/√3 m", "30 m", "45 m"],
    "answer_en": "15√3 m",
    "answer_hi": "15√3 m",
    "attempted": false
  },
  {
    "num": 35,
    "question_en": "The number of tangents that can be drawn to a circle from an external point is:",
    "question_hi": "एक बाह्य बिंदु से वृत्त पर खींची जा सकने वाली स्पर्श रेखाओं की संख्या है:",
    "options_en": ["0", "1", "2", "Infinite"],
    "options_hi": ["0", "1", "2", "अनंत"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false
  },
  {
    "num": 36,
    "question_en": "The angle between a tangent and the radius at the point of contact is:",
    "question_hi": "स्पर्श बिंदु पर स्पर्श रेखा और त्रिज्या के बीच का कोण है:",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "90°",
    "answer_hi": "90°",
    "attempted": false
  },
  {
    "num": 37,
    "question_en": "The area of a circle is 154 cm². Its radius is:",
    "question_hi": "एक वृत्त का क्षेत्रफल 154 cm² है। इसकी त्रिज्या है:",
    "options_en": ["7 cm", "14 cm", "21 cm", "28 cm"],
    "options_hi": ["7 cm", "14 cm", "21 cm", "28 cm"],
    "answer_en": "7 cm",
    "answer_hi": "7 cm",
    "attempted": false
  },
  {
    "num": 38,
    "question_en": "The volume of a cone with radius 6 cm and height 7 cm is:",
    "question_hi": "6 cm त्रिज्या और 7 cm ऊँचाई वाले शंकु का आयतन है:",
    "options_en": ["84π cm³", "126π cm³", "168π cm³", "252π cm³"],
    "options_hi": ["84π cm³", "126π cm³", "168π cm³", "252π cm³"],
    "answer_en": "84π cm³",
    "answer_hi": "84π cm³",
    "attempted": false
  },
  {
    "num": 39,
    "question_en": "The mean of first 10 natural numbers is:",
    "question_hi": "प्रथम 10 प्राकृतिक संख्याओं का माध्य है:",
    "options_en": ["4.5", "5", "5.5", "6"],
    "options_hi": ["4.5", "5", "5.5", "6"],
    "answer_en": "5.5",
    "answer_hi": "5.5",
    "attempted": false
  },
  {
    "num": 40,
    "question_en": "The probability of getting an even number when a die is rolled is:",
    "question_hi": "एक पासा फेंकने पर एक सम संख्या आने की प्रायिकता है:",
    "options_en": ["1/6", "1/3", "1/2", "2/3"],
    "options_hi": ["1/6", "1/3", "1/2", "2/3"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 41,
    "question_en": "The decimal representation of 11/8 is:",
    "question_hi": "11/8 का दशमलव निरूपण है:",
    "options_en": ["1.375", "1.5", "1.625", "1.75"],
    "options_hi": ["1.375", "1.5", "1.625", "1.75"],
    "answer_en": "1.375",
    "answer_hi": "1.375",
    "attempted": false
  },
  {
    "num": 42,
    "question_en": "If α and β are zeros of x² + 7x + 12, then αβ is equal to:",
    "question_hi": "यदि α और β, x² + 7x + 12 के शून्यक हैं, तो αβ बराबर है:",
    "options_en": ["-7", "7", "12", "-12"],
    "options_hi": ["-7", "7", "12", "-12"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false
  },
  {
    "num": 43,
    "question_en": "The pair of equations 3x + 2y = 5 and 6x + 4y = 8 represents:",
    "question_hi": "समीकरणों का युग्म 3x + 2y = 5 और 6x + 4y = 8 निरूपित करता है:",
    "options_en": ["Parallel lines", "Intersecting lines", "Coincident lines", "None"],
    "options_hi": ["समानांतर रेखाएँ", "प्रतिच्छेदी रेखाएँ", "संपाती रेखाएँ", "कोई नहीं"],
    "answer_en": "Parallel lines",
    "answer_hi": "समानांतर रेखाएँ",
    "attempted": false
  },
  {
    "num": 44,
    "question_en": "The quadratic equation whose roots are -2 and -3 is:",
    "question_hi": "द्विघात समीकरण जिसके मूल -2 और -3 हैं, वह है:",
    "options_en": ["x² + 5x + 6 = 0", "x² - 5x + 6 = 0", "x² + 5x - 6 = 0", "x² - 5x - 6 = 0"],
    "options_hi": ["x² + 5x + 6 = 0", "x² - 5x + 6 = 0", "x² + 5x - 6 = 0", "x² - 5x - 6 = 0"],
    "answer_en": "x² + 5x + 6 = 0",
    "answer_hi": "x² + 5x + 6 = 0",
    "attempted": false
  },
  {
    "num": 45,
    "question_en": "The 15th term of the AP: 10, 7, 4,... is:",
    "question_hi": "समांतर श्रेणी 10, 7, 4,... का 15वाँ पद है:",
    "options_en": ["-32", "-35", "-38", "-41"],
    "options_hi": ["-32", "-35", "-38", "-41"],
    "answer_en": "-32",
    "answer_hi": "-32",
    "attempted": false
  },
  {
    "num": 46,
    "question_en": "The sum of first 15 multiples of 8 is:",
    "question_hi": "8 के प्रथम 15 गुणजों का योग है:",
    "options_en": ["480", "600", "720", "960"],
    "options_hi": ["480", "600", "720", "960"],
    "answer_en": "960",
    "answer_hi": "960",
    "attempted": false
  },
  {
    "num": 47,
    "question_en": "In ΔPQR, if ST || QR and PS/SQ = 3/5, then PT/TR is:",
    "question_hi": "ΔPQR में, यदि ST || QR और PS/SQ = 3/5, तो PT/TR है:",
    "options_en": ["3/5", "5/3", "3/8", "5/8"],
    "options_hi": ["3/5", "5/3", "3/8", "5/8"],
    "answer_en": "3/5",
    "answer_hi": "3/5",
    "attempted": false
  },
  {
    "num": 48,
    "question_en": "In right ΔABC, if ∠B=90°, AB=5cm, BC=12cm, then AC is:",
    "question_hi": "समकोण ΔABC में, यदि ∠B=90°, AB=5cm, BC=12cm, तो AC है:",
    "options_en": ["13 cm", "15 cm", "17 cm", "19 cm"],
    "options_hi": ["13 cm", "15 cm", "17 cm", "19 cm"],
    "answer_en": "13 cm",
    "answer_hi": "13 cm",
    "attempted": false
  },
  {
    "num": 49,
    "question_en": "The point which divides the line segment joining (1,2) and (4,5) in the ratio 2:1 is:",
    "question_hi": "वह बिंदु जो (1,2) और (4,5) को मिलाने वाले रेखाखंड को 2:1 के अनुपात में विभाजित करता है, वह है:",
    "options_en": ["(2,3)", "(3,4)", "(4,5)", "(5,6)"],
    "options_hi": ["(2,3)", "(3,4)", "(4,5)", "(5,6)"],
    "answer_en": "(3,4)",
    "answer_hi": "(3,4)",
    "attempted": false
  },
  {
    "num": 50,
    "question_en": "The value of sin 30° + cos 60° is:",
    "question_hi": "sin 30° + cos 60° का मान है:",
    "options_en": ["0", "0.5", "1", "1.5"],
    "options_hi": ["0", "0.5", "1", "1.5"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  }
];



let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};
