const questions = [
  
    {
      "num": 1,
      "question_en": "What is the HCF of 12 and 18?",
      "question_hi": "12 और 18 का महत्तम समापवर्त्य (HCF) क्या होगा?",
      "options_en": ["6", "12", "3", "18"],
      "options_hi": ["6", "12", "3", "18"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false
    },
    {
      "num": 2,
      "question_en": "Which of the following is a prime number?",
      "question_hi": "निम्नलिखित में से कौन-सी एक अभाज्य संख्या है?",
      "options_en": ["15", "23", "28", "35"],
      "options_hi": ["15", "23", "28", "35"],
      "answer_en": "23",
      "answer_hi": "23",
      "attempted": false
    },
    {
      "num": 3,
      "question_en": "The decimal expansion of 13/8 terminates after how many decimal places?",
      "question_hi": "13/8 का दशमलव प्रसार कितने दशमलव स्थानों के बाद समाप्त होता है?",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false
    },
    {
      "num": 4,
      "question_en": "The sum of the exponents of prime factors in the prime factorization of 196 is:",
      "question_hi": "196 के अभाज्य गुणनखंडन में अभाज्य गुणनखंडों के घातांकों का योग है:",
      "options_en": ["3", "4", "5", "6"],
      "options_hi": ["3", "4", "5", "6"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false
    },
    {
      "num": 5,
      "question_en": "If the LCM of two numbers is 120 and their HCF is 10, and one number is 30, the other number is:",
      "question_hi": "यदि दो संख्याओं का LCM 120 है और HCF 10 है, तथा एक संख्या 30 है, तो दूसरी संख्या है:",
      "options_en": ["20", "30", "40", "50"],
      "options_hi": ["20", "30", "40", "50"],
      "answer_en": "40",
      "answer_hi": "40",
      "attempted": false
    },
    {
      "num": 6,
      "question_en": "The zeroes of the polynomial x² - 4 are:",
      "question_hi": "बहुपद x² - 4 के शून्यक हैं:",
      "options_en": ["2, -2", "4, -4", "1, -1", "0, 4"],
      "options_hi": ["2, -2", "4, -4", "1, -1", "0, 4"],
      "answer_en": "2, -2",
      "answer_hi": "2, -2",
      "attempted": false
    },
    {
      "num": 7,
      "question_en": "If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:",
      "question_hi": "यदि द्विघात बहुपद x² + 3x + k का एक शून्यक 2 है, तो k का मान है:",
      "options_en": ["-10", "10", "5", "-5"],
      "options_hi": ["-10", "10", "5", "-5"],
      "answer_en": "-10",
      "answer_hi": "-10",
      "attempted": false
    },
    {
      "num": 8,
      "question_en": "The pair of linear equations x + 2y = 5 and 3x + 6y = 15 has:",
      "question_hi": "रैखिक समीकरणों के युग्म x + 2y = 5 और 3x + 6y = 15 के हैं:",
      "options_en": ["Unique solution", "No solution", "Infinitely many solutions", "None"],
      "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "कोई नहीं"],
      "answer_en": "Infinitely many solutions",
      "answer_hi": "अनंत हल",
      "attempted": false
    },
    {
      "num": 9,
      "question_en": "The quadratic equation 2x² - 5x + 3 = 0 has:",
      "question_hi": "द्विघात समीकरण 2x² - 5x + 3 = 0 के हैं:",
      "options_en": ["Two distinct real roots", "Two equal roots", "No real roots", "None"],
      "options_hi": ["दो भिन्न वास्तविक मूल", "दो समान मूल", "कोई वास्तविक मूल नहीं", "कोई नहीं"],
      "answer_en": "Two distinct real roots",
      "answer_hi": "दो भिन्न वास्तविक मूल",
      "attempted": false
    },
    {
      "num": 10,
      "question_en": "The 15th term of the AP: 3, 7, 11, 15, ... is:",
      "question_hi": "समांतर श्रेणी 3, 7, 11, 15, ... का 15वाँ पद है:",
      "options_en": ["59", "63", "67", "71"],
      "options_hi": ["59", "63", "67", "71"],
      "answer_en": "59",
      "answer_hi": "59",
      "attempted": false
    },
    {
      "num": 11,
      "question_en": "The sum of the first 10 natural numbers is:",
      "question_hi": "प्रथम 10 प्राकृत संख्याओं का योग है:",
      "options_en": ["45", "50", "55", "60"],
      "options_hi": ["45", "50", "55", "60"],
      "answer_en": "55",
      "answer_hi": "55",
      "attempted": false
    },
    {
      "num": 12,
      "question_en": "The distance between the points (0, 5) and (-5, 0) is:",
      "question_hi": "बिंदुओं (0, 5) और (-5, 0) के बीच की दूरी है:",
      "options_en": ["5", "5√2", "10", "2√5"],
      "options_hi": ["5", "5√2", "10", "2√5"],
      "answer_en": "5√2",
      "answer_hi": "5√2",
      "attempted": false
    },
    {
      "num": 13,
      "question_en": "The point which divides the line segment joining (1, 2) and (3, 4) in the ratio 1:1 is:",
      "question_hi": "वह बिंदु जो (1, 2) और (3, 4) को मिलाने वाले रेखाखंड को 1:1 के अनुपात में विभाजित करता है:",
      "options_en": ["(2, 3)", "(1, 3)", "(3, 2)", "(4, 5)"],
      "options_hi": ["(2, 3)", "(1, 3)", "(3, 2)", "(4, 5)"],
      "answer_en": "(2, 3)",
      "answer_hi": "(2, 3)",
      "attempted": false
    },
    {
      "num": 14,
      "question_en": "In ΔABC, if DE || BC and AD = 4 cm, DB = 6 cm, then AE/EC is:",
      "question_hi": "ΔABC में, यदि DE || BC और AD = 4 सेमी, DB = 6 सेमी, तो AE/EC है:",
      "options_en": ["2/3", "3/2", "4/3", "3/4"],
      "options_hi": ["2/3", "3/2", "4/3", "3/4"],
      "answer_en": "2/3",
      "answer_hi": "2/3",
      "attempted": false
    },
    {
      "num": 15,
      "question_en": "The length of the tangent from a point P to a circle of radius 5 cm is 12 cm. The distance of P from the center is:",
      "question_hi": "5 सेमी त्रिज्या वाले वृत्त पर एक बिंदु P से खींची गई स्पर्श रेखा की लंबाई 12 सेमी है। केंद्र से P की दूरी है:",
      "options_en": ["7 cm", "13 cm", "17 cm", "19 cm"],
      "options_hi": ["7 सेमी", "13 सेमी", "17 सेमी", "19 सेमी"],
      "answer_en": "13 cm",
      "answer_hi": "13 सेमी",
      "attempted": false
    },
    {
      "num": 16,
      "question_en": "If sin A = 4/5, then tan A is:",
      "question_hi": "यदि sin A = 4/5, तो tan A है:",
      "options_en": ["4/3", "3/4", "5/3", "3/5"],
      "options_hi": ["4/3", "3/4", "5/3", "3/5"],
      "answer_en": "4/3",
      "answer_hi": "4/3",
      "attempted": false
    },
    {
      "num": 17,
      "question_en": "The value of (sin 30° + cos 60°) is:",
      "question_hi": "(sin 30° + cos 60°) का मान है:",
      "options_en": ["0", "1", "2", "√3"],
      "options_hi": ["0", "1", "2", "√3"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false
    },
    {
      "num": 18,
      "question_en": "The area of a sector of angle 45° in a circle of radius 8 cm is:",
      "question_hi": "8 सेमी त्रिज्या वाले वृत्त में 45° कोण वाले त्रिज्यखंड का क्षेत्रफल है:",
      "options_en": ["8π cm²", "16π cm²", "32π cm²", "64π cm²"],
      "options_hi": ["8π सेमी²", "16π सेमी²", "32π सेमी²", "64π सेमी²"],
      "answer_en": "8π cm²",
      "answer_hi": "8π सेमी²",
      "attempted": false
    },
    {
      "num": 19,
      "question_en": "The volume of a cone with radius 3 cm and height 4 cm is:",
      "question_hi": "3 सेमी त्रिज्या और 4 सेमी ऊँचाई वाले शंकु का आयतन है:",
      "options_en": ["12π cm³", "24π cm³", "36π cm³", "48π cm³"],
      "options_hi": ["12π सेमी³", "24π सेमी³", "36π सेमी³", "48π सेमी³"],
      "answer_en": "12π cm³",
      "answer_hi": "12π सेमी³",
      "attempted": false
    },
    {
      "num": 20,
      "question_en": "The median of the data 3, 5, 7, 9, 11 is:",
      "question_hi": "आँकड़ों 3, 5, 7, 9, 11 का माध्यिका है:",
      "options_en": ["5", "7", "9", "11"],
      "options_hi": ["5", "7", "9", "11"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false
    },
    {
      "num": 21,
      "question_en": "The probability of getting a head when a fair coin is tossed is:",
      "question_hi": "एक निष्पक्ष सिक्के को उछालने पर चित आने की प्रायिकता है:",
      "options_en": ["0", "1/2", "1", "2"],
      "options_hi": ["0", "1/2", "1", "2"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 22,
      "question_en": "The HCF of 96 and 404 is:",
      "question_hi": "96 और 404 का HCF है:",
      "options_en": ["4", "8", "12", "16"],
      "options_hi": ["4", "8", "12", "16"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false
    },
    {
      "num": 23,
      "question_en": "The LCM of 12 and 15 is:",
      "question_hi": "12 और 15 का LCM है:",
      "options_en": ["30", "40", "50", "60"],
      "options_hi": ["30", "40", "50", "60"],
      "answer_en": "60",
      "answer_hi": "60",
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
      "question_en": "The pair of equations y = 0 and y = -7 has:",
      "question_hi": "समीकरणों का युग्म y = 0 और y = -7 के हैं:",
      "options_en": ["One solution", "Two solutions", "No solution", "Infinitely many solutions"],
      "options_hi": ["एक हल", "दो हल", "कोई हल नहीं", "अनंत हल"],
      "answer_en": "No solution",
      "answer_hi": "कोई हल नहीं",
      "attempted": false
    },
    {
      "num": 26,
      "question_en": "The quadratic equation x² - 4x + 4 = 0 has:",
      "question_hi": "द्विघात समीकरण x² - 4x + 4 = 0 के हैं:",
      "options_en": ["Two distinct real roots", "Two equal roots", "No real roots", "None"],
      "options_hi": ["दो भिन्न वास्तविक मूल", "दो समान मूल", "कोई वास्तविक मूल नहीं", "कोई नहीं"],
      "answer_en": "Two equal roots",
      "answer_hi": "दो समान मूल",
      "attempted": false
    },
    {
      "num": 27,
      "question_en": "The 20th term of the AP: 10, 7, 4, 1, ... is:",
      "question_hi": "समांतर श्रेणी 10, 7, 4, 1, ... का 20वाँ पद है:",
      "options_en": ["-47", "-50", "-53", "-56"],
      "options_hi": ["-47", "-50", "-53", "-56"],
      "answer_en": "-47",
      "answer_hi": "-47",
      "attempted": false
    },
    {
      "num": 28,
      "question_en": "The sum of the first 15 odd numbers is:",
      "question_hi": "प्रथम 15 विषम संख्याओं का योग है:",
      "options_en": ["225", "230", "235", "240"],
      "options_hi": ["225", "230", "235", "240"],
      "answer_en": "225",
      "answer_hi": "225",
      "attempted": false
    },
    {
      "num": 29,
      "question_en": "The distance between the points (1, 2) and (4, 6) is:",
      "question_hi": "बिंदुओं (1, 2) और (4, 6) के बीच की दूरी है:",
      "options_en": ["3", "4", "5", "6"],
      "options_hi": ["3", "4", "5", "6"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false
    },
    {
      "num": 30,
      "question_en": "The point which divides the line segment joining (2, 3) and (5, 7) in the ratio 2:1 is:",
      "question_hi": "वह बिंदु जो (2, 3) और (5, 7) को मिलाने वाले रेखाखंड को 2:1 के अनुपात में विभाजित करता है:",
      "options_en": ["(3, 5)", "(4, 5)", "(5, 4)", "(6, 5)"],
      "options_hi": ["(3, 5)", "(4, 5)", "(5, 4)", "(6, 5)"],
      "answer_en": "(4, 5)",
      "answer_hi": "(4, 5)",
      "attempted": false
    },
    {
      "num": 31,
      "question_en": "In ΔABC, if DE || BC, AD = 3 cm, DB = 5 cm, and AE = 6 cm, then EC is:",
      "question_hi": "ΔABC में, यदि DE || BC, AD = 3 सेमी, DB = 5 सेमी, और AE = 6 सेमी, तो EC है:",
      "options_en": ["6 cm", "8 cm", "10 cm", "12 cm"],
      "options_hi": ["6 सेमी", "8 सेमी", "10 सेमी", "12 सेमी"],
      "answer_en": "10 cm",
      "answer_hi": "10 सेमी",
      "attempted": false
    },
    {
      "num": 32,
      "question_en": "The length of the tangent from a point P to a circle of radius 8 cm is 15 cm. The distance of P from the center is:",
      "question_hi": "8 सेमी त्रिज्या वाले वृत्त पर एक बिंदु P से खींची गई स्पर्श रेखा की लंबाई 15 सेमी है। केंद्र से P की दूरी है:",
      "options_en": ["17 cm", "19 cm", "21 cm", "23 cm"],
      "options_hi": ["17 सेमी", "19 सेमी", "21 सेमी", "23 सेमी"],
      "answer_en": "17 cm",
      "answer_hi": "17 सेमी",
      "attempted": false
    },
    {
      "num": 33,
      "question_en": "If cos A = 12/13, then sin A is:",
      "question_hi": "यदि cos A = 12/13, तो sin A है:",
      "options_en": ["5/13", "12/13", "13/12", "13/5"],
      "options_hi": ["5/13", "12/13", "13/12", "13/5"],
      "answer_en": "5/13",
      "answer_hi": "5/13",
      "attempted": false
    },
    {
      "num": 34,
      "question_en": "The value of (tan 45° + cot 45°) is:",
      "question_hi": "(tan 45° + cot 45°) का मान है:",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "2",
      "answer_hi": "2",
      "attempted": false
    },
    {
      "num": 35,
      "question_en": "The area of a sector of angle 30° in a circle of radius 12 cm is:",
      "question_hi": "12 सेमी त्रिज्या वाले वृत्त में 30° कोण वाले त्रिज्यखंड का क्षेत्रफल है:",
      "options_en": ["6π cm²", "12π cm²", "24π cm²", "36π cm²"],
      "options_hi": ["6π सेमी²", "12π सेमी²", "24π सेमी²", "36π सेमी²"],
      "answer_en": "12π cm²",
      "answer_hi": "12π सेमी²",
      "attempted": false
    },
    {
      "num": 36,
      "question_en": "The volume of a sphere of radius 6 cm is:",
      "question_hi": "6 सेमी त्रिज्या वाले गोले का आयतन है:",
      "options_en": ["288π cm³", "144π cm³", "72π cm³", "36π cm³"],
      "options_hi": ["288π सेमी³", "144π सेमी³", "72π सेमी³", "36π सेमी³"],
      "answer_en": "288π cm³",
      "answer_hi": "288π सेमी³",
      "attempted": false
    },
    {
      "num": 37,
      "question_en": "The mean of the first 10 even numbers is:",
      "question_hi": "प्रथम 10 सम संख्याओं का माध्य है:",
      "options_en": ["10", "11", "12", "13"],
      "options_hi": ["10", "11", "12", "13"],
      "answer_en": "11",
      "answer_hi": "11",
      "attempted": false
    },
    {
      "num": 38,
      "question_en": "The probability of getting a prime number when a die is rolled is:",
      "question_hi": "एक पासा फेंकने पर अभाज्य संख्या आने की प्रायिकता है:",
      "options_en": ["1/6", "1/3", "1/2", "2/3"],
      "options_hi": ["1/6", "1/3", "1/2", "2/3"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 39,
      "question_en": "The HCF of 144 and 198 is:",
      "question_hi": "144 और 198 का HCF है:",
      "options_en": ["6", "9", "12", "18"],
      "options_hi": ["6", "9", "12", "18"],
      "answer_en": "18",
      "answer_hi": "18",
      "attempted": false
    },
    {
      "num": 40,
      "question_en": "The LCM of 18 and 24 is:",
      "question_hi": "18 और 24 का LCM है:",
      "options_en": ["72", "48", "36", "24"],
      "options_hi": ["72", "48", "36", "24"],
      "answer_en": "72",
      "answer_hi": "72",
      "attempted": false
    },
    {
      "num": 41,
      "question_en": "The zeroes of the polynomial x² - 5x + 6 are:",
      "question_hi": "बहुपद x² - 5x + 6 के शून्यक हैं:",
      "options_en": ["2, 3", "-2, -3", "1, 6", "5, 6"],
      "options_hi": ["2, 3", "-2, -3", "1, 6", "5, 6"],
      "answer_en": "2, 3",
      "answer_hi": "2, 3",
      "attempted": false
    },
    {
      "num": 42,
      "question_en": "The pair of equations 3x + 2y = 5 and 6x + 4y = 10 has:",
      "question_hi": "समीकरणों का युग्म 3x + 2y = 5 और 6x + 4y = 10 के हैं:",
      "options_en": ["Unique solution", "No solution", "Infinitely many solutions", "None"],
      "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "कोई नहीं"],
      "answer_en": "Infinitely many solutions",
      "answer_hi": "अनंत हल",
      "attempted": false
    },
    {
      "num": 43,
      "question_en": "The quadratic equation x² + 4x + 5 = 0 has:",
      "question_hi": "द्विघात समीकरण x² + 4x + 5 = 0 के हैं:",
      "options_en": ["Two distinct real roots", "Two equal roots", "No real roots", "None"],
      "options_hi": ["दो भिन्न वास्तविक मूल", "दो समान मूल", "कोई वास्तविक मूल नहीं", "कोई नहीं"],
      "answer_en": "No real roots",
      "answer_hi": "कोई वास्तविक मूल नहीं",
      "attempted": false
    },
    {
      "num": 44,
      "question_en": "The 12th term of the AP: 7, 13, 19, 25, ... is:",
      "question_hi": "समांतर श्रेणी 7, 13, 19, 25, ... का 12वाँ पद है:",
      "options_en": ["73", "79", "85", "91"],
      "options_hi": ["73", "79", "85", "91"],
      "answer_en": "73",
      "answer_hi": "73",
      "attempted": false
    },
    {
      "num": 45,
      "question_en": "The sum of the first 20 even numbers is:",
      "question_hi": "प्रथम 20 सम संख्याओं का योग है:",
      "options_en": ["420", "440", "460", "480"],
      "options_hi": ["420", "440", "460", "480"],
      "answer_en": "420",
      "answer_hi": "420",
      "attempted": false
    },
    {
      "num": 46,
      "question_en": "The distance between the points (-3, 4) and (2, -1) is:",
      "question_hi": "बिंदुओं (-3, 4) और (2, -1) के बीच की दूरी है:",
      "options_en": ["5", "5√2", "10", "2√5"],
      "options_hi": ["5", "5√2", "10", "2√5"],
      "answer_en": "5√2",
      "answer_hi": "5√2",
      "attempted": false
    },
    {
      "num": 47,
      "question_en": "The point which divides the line segment joining (-1, 2) and (3, -4) in the ratio 3:1 is:",
      "question_hi": "वह बिंदु जो (-1, 2) और (3, -4) को मिलाने वाले रेखाखंड को 3:1 के अनुपात में विभाजित करता है:",
      "options_en": ["(2, -2.5)", "(1, -1)", "(0, 0)", "(3, -4)"],
      "options_hi": ["(2, -2.5)", "(1, -1)", "(0, 0)", "(3, -4)"],
      "answer_en": "(2, -2.5)",
      "answer_hi": "(2, -2.5)",
      "attempted": false
    },
    {
      "num": 48,
      "question_en": "In ΔABC, if DE || BC, AD = 6 cm, DB = 9 cm, and AE = 8 cm, then EC is:",
      "question_hi": "ΔABC में, यदि DE || BC, AD = 6 सेमी, DB = 9 सेमी, और AE = 8 सेमी, तो EC है:",
      "options_en": ["8 cm", "10 cm", "12 cm", "14 cm"],
      "options_hi": ["8 सेमी", "10 सेमी", "12 सेमी", "14 सेमी"],
      "answer_en": "12 cm",
      "answer_hi": "12 सेमी",
      "attempted": false
    },
    {
      "num": 49,
      "question_en": "The length of the tangent from a point P to a circle of radius 10 cm is 24 cm. The distance of P from the center is:",
      "question_hi": "10 सेमी त्रिज्या वाले वृत्त पर एक बिंदु P से खींची गई स्पर्श रेखा की लंबाई 24 सेमी है। केंद्र से P की दूरी है:",
      "options_en": ["26 cm", "28 cm", "30 cm", "32 cm"],
      "options_hi": ["26 सेमी", "28 सेमी", "30 सेमी", "32 सेमी"],
      "answer_en": "26 cm",
      "answer_hi": "26 सेमी",
      "attempted": false
    },
    {
      "num": 50,
      "question_en": "If tan A = 3/4, then sin A is:",
      "question_hi": "यदि tan A = 3/4, तो sin A है:",
      "options_en": ["3/5", "4/5", "5/3", "5/4"],
      "options_hi": ["3/5", "4/5", "5/3", "5/4"],
      "answer_en": "3/5",
      "answer_hi": "3/5",
      "attempted": false
    }
  



];


//
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
