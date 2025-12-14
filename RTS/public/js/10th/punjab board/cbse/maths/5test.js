const questions = [
  
    {
      "num": 1,
      "question_en": "What is the HCF of 36 and 48?",
      "question_hi": "36 और 48 का महत्तम समापवर्त्य (HCF) क्या होगा?",
      "options_en": ["6", "12", "18", "24"],
      "options_hi": ["6", "12", "18", "24"],
      "answer_en": "12",
      "answer_hi": "12",
      "attempted": false
    },
    {
      "num": 2,
      "question_en": "Which of these is an irrational number?",
      "question_hi": "निम्न में से कौन सी अपरिमेय संख्या है?",
      "options_en": ["√9", "√7", "0.25", "4/5"],
      "options_hi": ["√9", "√7", "0.25", "4/5"],
      "answer_en": "√7",
      "answer_hi": "√7",
      "attempted": false
    },
    {
      "num": 3,
      "question_en": "The decimal expansion of 17/8 terminates after how many places?",
      "question_hi": "17/8 का दशमलव प्रसार कितने स्थानों बाद समाप्त होगा?",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false
    },
    {
      "num": 4,
      "question_en": "The sum of exponents in prime factorization of 360 is:",
      "question_hi": "360 के अभाज्य गुणनखंडन में घातांकों का योग है:",
      "options_en": ["3", "4", "5", "6"],
      "options_hi": ["3", "4", "5", "6"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false
    },
    {
      "num": 5,
      "question_en": "If LCM of two numbers is 120 and HCF is 4, and one number is 20, the other is:",
      "question_hi": "यदि दो संख्याओं का LCM 120 और HCF 4 है, और एक संख्या 20 है, तो दूसरी संख्या है:",
      "options_en": ["24", "30", "36", "40"],
      "options_hi": ["24", "30", "36", "40"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false
    },
    {
      "num": 6,
      "question_en": "The zeroes of polynomial x² - 9 are:",
      "question_hi": "बहुपद x² - 9 के शून्यक हैं:",
      "options_en": ["3, -3", "9, -9", "0, 9", "1, -9"],
      "options_hi": ["3, -3", "9, -9", "0, 9", "1, -9"],
      "answer_en": "3, -3",
      "answer_hi": "3, -3",
      "attempted": false
    },
    {
      "num": 7,
      "question_en": "If one zero of x² + 5x + k is -3, then k is:",
      "question_hi": "यदि x² + 5x + k का एक शून्यक -3 है, तो k है:",
      "options_en": ["6", "-6", "12", "-12"],
      "options_hi": ["6", "-6", "12", "-12"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false
    },
    {
      "num": 8,
      "question_en": "The pair of equations 2x + 3y = 7 and 4x + 6y = 14 has:",
      "question_hi": "समीकरणों 2x + 3y = 7 और 4x + 6y = 14 के युग्म के हैं:",
      "options_en": ["Unique solution", "No solution", "Infinite solutions", "None"],
      "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "कोई नहीं"],
      "answer_en": "Infinite solutions",
      "answer_hi": "अनंत हल",
      "attempted": false
    },
    {
      "num": 9,
      "question_en": "The quadratic equation 3x² - 7x + 4 = 0 has:",
      "question_hi": "द्विघात समीकरण 3x² - 7x + 4 = 0 के हैं:",
      "options_en": ["Two distinct real roots", "Two equal roots", "No real roots", "None"],
      "options_hi": ["दो भिन्न वास्तविक मूल", "दो समान मूल", "कोई वास्तविक मूल नहीं", "कोई नहीं"],
      "answer_en": "Two distinct real roots",
      "answer_hi": "दो भिन्न वास्तविक मूल",
      "attempted": false
    },
    {
      "num": 10,
      "question_en": "The 8th term of AP: 10, 7, 4, ... is:",
      "question_hi": "समांतर श्रेणी 10, 7, 4, ... का 8वाँ पद है:",
      "options_en": ["-11", "-8", "-5", "-2"],
      "options_hi": ["-11", "-8", "-5", "-2"],
      "answer_en": "-11",
      "answer_hi": "-11",
      "attempted": false
    },
    {
      "num": 11,
      "question_en": "Sum of first 15 natural numbers is:",
      "question_hi": "प्रथम 15 प्राकृत संख्याओं का योग है:",
      "options_en": ["105", "110", "115", "120"],
      "options_hi": ["105", "110", "115", "120"],
      "answer_en": "120",
      "answer_hi": "120",
      "attempted": false
    },
    {
      "num": 12,
      "question_en": "Distance between (3, 4) and (7, 1) is:",
      "question_hi": "(3, 4) और (7, 1) के बीच की दूरी है:",
      "options_en": ["3", "4", "5", "6"],
      "options_hi": ["3", "4", "5", "6"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false
    },
    {
      "num": 13,
      "question_en": "Midpoint of (1, 2) and (5, 8) is:",
      "question_hi": "(1, 2) और (5, 8) का मध्यबिंदु है:",
      "options_en": ["(3, 5)", "(2, 3)", "(4, 6)", "(6, 10)"],
      "options_hi": ["(3, 5)", "(2, 3)", "(4, 6)", "(6, 10)"],
      "answer_en": "(3, 5)",
      "answer_hi": "(3, 5)",
      "attempted": false
    },
    {
      "num": 14,
      "question_en": "In ΔABC, if DE || BC and AD/DB = 3/5, then AE/EC is:",
      "question_hi": "ΔABC में, यदि DE || BC और AD/DB = 3/5, तो AE/EC है:",
      "options_en": ["3/5", "5/3", "8/5", "5/8"],
      "options_hi": ["3/5", "5/3", "8/5", "5/8"],
      "answer_en": "3/5",
      "answer_hi": "3/5",
      "attempted": false
    },
    {
      "num": 15,
      "question_en": "Length of tangent from point 8 cm away from center of circle of radius 6 cm is:",
      "question_hi": "6 सेमी त्रिज्या वाले वृत्त के केंद्र से 8 सेमी दूर बिंदु से स्पर्श रेखा की लंबाई है:",
      "options_en": ["2√7 cm", "10 cm", "5 cm", "7 cm"],
      "options_hi": ["2√7 सेमी", "10 सेमी", "5 सेमी", "7 सेमी"],
      "answer_en": "2√7 cm",
      "answer_hi": "2√7 सेमी",
      "attempted": false
    },
    {
      "num": 16,
      "question_en": "If cos θ = 5/13, then tan θ is:",
      "question_hi": "यदि cos θ = 5/13, तो tan θ है:",
      "options_en": ["12/5", "5/12", "13/5", "5/13"],
      "options_hi": ["12/5", "5/12", "13/5", "5/13"],
      "answer_en": "12/5",
      "answer_hi": "12/5",
      "attempted": false
    },
    {
      "num": 17,
      "question_en": "Value of sin² 45° + cos² 45° is:",
      "question_hi": "sin² 45° + cos² 45° का मान है:",
      "options_en": ["0", "1", "2", "√2"],
      "options_hi": ["0", "1", "2", "√2"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false
    },
    {
      "num": 18,
      "question_en": "Area of sector with angle 60° in circle of radius 9 cm is:",
      "question_hi": "9 सेमी त्रिज्या वाले वृत्त में 60° कोण वाले त्रिज्यखंड का क्षेत्रफल है:",
      "options_en": ["27π/2 cm²", "9π cm²", "27π cm²", "54π cm²"],
      "options_hi": ["27π/2 सेमी²", "9π सेमी²", "27π सेमी²", "54π सेमी²"],
      "answer_en": "27π/2 cm²",
      "answer_hi": "27π/2 सेमी²",
      "attempted": false
    },
    {
      "num": 19,
      "question_en": "Volume of cone with radius 6 cm and height 8 cm is:",
      "question_hi": "6 सेमी त्रिज्या और 8 सेमी ऊँचाई वाले शंकु का आयतन है:",
      "options_en": ["96π cm³", "128π cm³", "144π cm³", "192π cm³"],
      "options_hi": ["96π सेमी³", "128π सेमी³", "144π सेमी³", "192π सेमी³"],
      "answer_en": "96π cm³",
      "answer_hi": "96π सेमी³",
      "attempted": false
    },
    {
      "num": 20,
      "question_en": "Median of data 5, 7, 9, 11, 13 is:",
      "question_hi": "आँकड़ों 5, 7, 9, 11, 13 का माध्यिका है:",
      "options_en": ["7", "9", "11", "13"],
      "options_hi": ["7", "9", "11", "13"],
      "answer_en": "9",
      "answer_hi": "9",
      "attempted": false
    },
    {
      "num": 21,
      "question_en": "Probability of getting a prime number when die is rolled is:",
      "question_hi": "पासा फेंकने पर अभाज्य संख्या आने की प्रायिकता है:",
      "options_en": ["1/2", "1/3", "1/6", "2/3"],
      "options_hi": ["1/2", "1/3", "1/6", "2/3"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 22,
      "question_en": "HCF of 120 and 144 is:",
      "question_hi": "120 और 144 का HCF है:",
      "options_en": ["12", "24", "36", "48"],
      "options_hi": ["12", "24", "36", "48"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false
    },
    {
      "num": 23,
      "question_en": "LCM of 15 and 20 is:",
      "question_hi": "15 और 20 का LCM है:",
      "options_en": ["30", "40", "60", "80"],
      "options_hi": ["30", "40", "60", "80"],
      "answer_en": "60",
      "answer_hi": "60",
      "attempted": false
    },
    {
      "num": 24,
      "question_en": "Zeroes of x² + 7x + 10 are:",
      "question_hi": "x² + 7x + 10 के शून्यक हैं:",
      "options_en": ["2, 5", "-2, -5", "1, 10", "-1, -10"],
      "options_hi": ["2, 5", "-2, -5", "1, 10", "-1, -10"],
      "answer_en": "-2, -5",
      "answer_hi": "-2, -5",
      "attempted": false
    },
    {
      "num": 25,
      "question_en": "The pair y = 5 and y = -5 has:",
      "question_hi": "समीकरणों y = 5 और y = -5 के युग्म के हैं:",
      "options_en": ["One solution", "Two solutions", "No solution", "Infinite solutions"],
      "options_hi": ["एक हल", "दो हल", "कोई हल नहीं", "अनंत हल"],
      "answer_en": "No solution",
      "answer_hi": "कोई हल नहीं",
      "attempted": false
    },
    {
      "num": 26,
      "question_en": "The quadratic equation x² + 6x + 9 = 0 has:",
      "question_hi": "द्विघात समीकरण x² + 6x + 9 = 0 के हैं:",
      "options_en": ["Two distinct roots", "Two equal roots", "No real roots", "None"],
      "options_hi": ["दो भिन्न मूल", "दो समान मूल", "कोई वास्तविक मूल नहीं", "कोई नहीं"],
      "answer_en": "Two equal roots",
      "answer_hi": "दो समान मूल",
      "attempted": false
    },
    {
      "num": 27,
      "question_en": "15th term of AP: 100, 95, 90,... is:",
      "question_hi": "समांतर श्रेणी 100, 95, 90,... का 15वाँ पद है:",
      "options_en": ["30", "35", "40", "45"],
      "options_hi": ["30", "35", "40", "45"],
      "answer_en": "30",
      "answer_hi": "30",
      "attempted": false
    },
    {
      "num": 28,
      "question_en": "Sum of first 20 odd numbers is:",
      "question_hi": "प्रथम 20 विषम संख्याओं का योग है:",
      "options_en": ["200", "300", "400", "500"],
      "options_hi": ["200", "300", "400", "500"],
      "answer_en": "400",
      "answer_hi": "400",
      "attempted": false
    },
    {
      "num": 29,
      "question_en": "Distance between (-1, -1) and (4, 5) is:",
      "question_hi": "(-1, -1) और (4, 5) के बीच की दूरी है:",
      "options_en": ["√61", "7", "√51", "8"],
      "options_hi": ["√61", "7", "√51", "8"],
      "answer_en": "√61",
      "answer_hi": "√61",
      "attempted": false
    },
    {
      "num": 30,
      "question_en": "Point dividing (2, 3) and (5, 7) in ratio 1:2 is:",
      "question_hi": "(2, 3) और (5, 7) को 1:2 अनुपात में विभाजित करने वाला बिंदु है:",
      "options_en": ["(3, 13/3)", "(4, 17/3)", "(9/2, 5)", "(7/2, 4)"],
      "options_hi": ["(3, 13/3)", "(4, 17/3)", "(9/2, 5)", "(7/2, 4)"],
      "answer_en": "(3, 13/3)",
      "answer_hi": "(3, 13/3)",
      "attempted": false
    },
    {
      "num": 31,
      "question_en": "In ΔABC, DE || BC, AD=4cm, DB=6cm, AE=5cm, then EC is:",
      "question_hi": "ΔABC में, DE || BC, AD=4सेमी, DB=6सेमी, AE=5सेमी, तो EC है:",
      "options_en": ["7.5 cm", "6 cm", "8 cm", "9 cm"],
      "options_hi": ["7.5 सेमी", "6 सेमी", "8 सेमी", "9 सेमी"],
      "answer_en": "7.5 cm",
      "answer_hi": "7.5 सेमी",
      "attempted": false
    },
    {
      "num": 32,
      "question_en": "Length of tangent from point 15 cm away from center of radius 9 cm is:",
      "question_hi": "9 सेमी त्रिज्या वाले वृत्त के केंद्र से 15 सेमी दूर बिंदु से स्पर्श रेखा की लंबाई है:",
      "options_en": ["12 cm", "13 cm", "14 cm", "15 cm"],
      "options_hi": ["12 सेमी", "13 सेमी", "14 सेमी", "15 सेमी"],
      "answer_en": "12 cm",
      "answer_hi": "12 सेमी",
      "attempted": false
    },
    {
      "num": 33,
      "question_en": "If tan θ = 5/12, then sin θ is:",
      "question_hi": "यदि tan θ = 5/12, तो sin θ है:",
      "options_en": ["5/13", "12/13", "13/5", "13/12"],
      "options_hi": ["5/13", "12/13", "13/5", "13/12"],
      "answer_en": "5/13",
      "answer_hi": "5/13",
      "attempted": false
    },
    {
      "num": 34,
      "question_en": "Value of tan 60° × sin 30° is:",
      "question_hi": "tan 60° × sin 30° का मान है:",
      "options_en": ["1/2", "√3/2", "1", "2"],
      "options_hi": ["1/2", "√3/2", "1", "2"],
      "answer_en": "√3/2",
      "answer_hi": "√3/2",
      "attempted": false
    },
    {
      "num": 35,
      "question_en": "Area of sector with angle 120° in circle of radius 6 cm is:",
      "question_hi": "6 सेमी त्रिज्या वाले वृत्त में 120° कोण वाले त्रिज्यखंड का क्षेत्रफल है:",
      "options_en": ["12π cm²", "24π cm²", "36π cm²", "48π cm²"],
      "options_hi": ["12π सेमी²", "24π सेमी²", "36π सेमी²", "48π सेमी²"],
      "answer_en": "12π cm²",
      "answer_hi": "12π सेमी²",
      "attempted": false
    },
    {
      "num": 36,
      "question_en": "Volume of sphere with radius 9 cm is:",
      "question_hi": "9 सेमी त्रिज्या वाले गोले का आयतन है:",
      "options_en": ["972π cm³", "324π cm³", "108π cm³", "36π cm³"],
      "options_hi": ["972π सेमी³", "324π सेमी³", "108π सेमी³", "36π सेमी³"],
      "answer_en": "972π cm³",
      "answer_hi": "972π सेमी³",
      "attempted": false
    },
    {
      "num": 37,
      "question_en": "Mean of first 10 multiples of 3 is:",
      "question_hi": "3 के प्रथम 10 गुणजों का माध्य है:",
      "options_en": ["15.5", "16.5", "17.5", "18.5"],
      "options_hi": ["15.5", "16.5", "17.5", "18.5"],
      "answer_en": "16.5",
      "answer_hi": "16.5",
      "attempted": false
    },
    {
      "num": 38,
      "question_en": "Probability of getting number > 4 when die is rolled is:",
      "question_hi": "पासा फेंकने पर 4 से बड़ी संख्या आने की प्रायिकता है:",
      "options_en": ["1/3", "1/2", "2/3", "5/6"],
      "options_hi": ["1/3", "1/2", "2/3", "5/6"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false
    },
    {
      "num": 39,
      "question_en": "HCF of 96 and 120 is:",
      "question_hi": "96 और 120 का HCF है:",
      "options_en": ["12", "24", "36", "48"],
      "options_hi": ["12", "24", "36", "48"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false
    },
    {
      "num": 40,
      "question_en": "LCM of 12 and 18 is:",
      "question_hi": "12 और 18 का LCM है:",
      "options_en": ["24", "36", "48", "72"],
      "options_hi": ["24", "36", "48", "72"],
      "answer_en": "36",
      "answer_hi": "36",
      "attempted": false
    },
    {
      "num": 41,
      "question_en": "Zeroes of 2x² - 7x + 3 are:",
      "question_hi": "2x² - 7x + 3 के शून्यक हैं:",
      "options_en": ["1/2, 3", "-1/2, -3", "2, 3", "-2, -3"],
      "options_hi": ["1/2, 3", "-1/2, -3", "2, 3", "-2, -3"],
      "answer_en": "1/2, 3",
      "answer_hi": "1/2, 3",
      "attempted": false
    },
    {
      "num": 42,
      "question_en": "The pair 3x + 2y = 5 and 9x + 6y = 15 has:",
      "question_hi": "समीकरणों 3x + 2y = 5 और 9x + 6y = 15 के युग्म के हैं:",
      "options_en": ["Unique solution", "No solution", "Infinite solutions", "None"],
      "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "कोई नहीं"],
      "answer_en": "Infinite solutions",
      "answer_hi": "अनंत हल",
      "attempted": false
    },
    {
      "num": 43,
      "question_en": "The quadratic equation x² + 4 = 0 has:",
      "question_hi": "द्विघात समीकरण x² + 4 = 0 के हैं:",
      "options_en": ["Two real roots", "One real root", "No real roots", "None"],
      "options_hi": ["दो वास्तविक मूल", "एक वास्तविक मूल", "कोई वास्तविक मूल नहीं", "कोई नहीं"],
      "answer_en": "No real roots",
      "answer_hi": "कोई वास्तविक मूल नहीं",
      "attempted": false
    },
    {
      "num": 44,
      "question_en": "20th term of AP: 1, 6, 11, 16,... is:",
      "question_hi": "समांतर श्रेणी 1, 6, 11, 16,... का 20वाँ पद है:",
      "options_en": ["96", "101", "106", "111"],
      "options_hi": ["96", "101", "106", "111"],
      "answer_en": "96",
      "answer_hi": "96",
      "attempted": false
    },
    {
      "num": 45,
      "question_en": "Sum of first 25 natural numbers is:",
      "question_hi": "प्रथम 25 प्राकृत संख्याओं का योग है:",
      "options_en": ["300", "325", "350", "375"],
      "options_hi": ["300", "325", "350", "375"],
      "answer_en": "325",
      "answer_hi": "325",
      "attempted": false
    },
    {
      "num": 46,
      "question_en": "Distance between (a, b) and (-a, -b) is:",
      "question_hi": "(a, b) और (-a, -b) के बीच की दूरी है:",
      "options_en": ["√(a²+b²)", "2√(a²+b²)", "a+b", "2(a+b)"],
      "options_hi": ["√(a²+b²)", "2√(a²+b²)", "a+b", "2(a+b)"],
      "answer_en": "2√(a²+b²)",
      "answer_hi": "2√(a²+b²)",
      "attempted": false
    },
    {
      "num": 47,
      "question_en": "Point dividing (-3, 4) and (2, -6) in ratio 2:3 is:",
      "question_hi": "(-3, 4) और (2, -6) को 2:3 अनुपात में विभाजित करने वाला बिंदु है:",
      "options_en": ["(-1, 0)", "(0, -1)", "(1, -2)", "(-2, 1)"],
      "options_hi": ["(-1, 0)", "(0, -1)", "(1, -2)", "(-2, 1)"],
      "answer_en": "(-1, 0)",
      "answer_hi": "(-1, 0)",
      "attempted": false
    },
    {
      "num": 48,
      "question_en": "In ΔABC, DE || BC, AD=6cm, DB=9cm, AE=8cm, then EC is:",
      "question_hi": "ΔABC में, DE || BC, AD=6सेमी, DB=9सेमी, AE=8सेमी, तो EC है:",
      "options_en": ["10 cm", "12 cm", "14 cm", "16 cm"],
      "options_hi": ["10 सेमी", "12 सेमी", "14 सेमी", "16 सेमी"],
      "answer_en": "12 cm",
      "answer_hi": "12 सेमी",
      "attempted": false
    },
    {
      "num": 49,
      "question_en": "Length of tangent from point 17 cm away from center of radius 8 cm is:",
      "question_hi": "8 सेमी त्रिज्या वाले वृत्त के केंद्र से 17 सेमी दूर बिंदु से स्पर्श रेखा की लंबाई है:",
      "options_en": ["15 cm", "16 cm", "17 cm", "18 cm"],
      "options_hi": ["15 सेमी", "16 सेमी", "17 सेमी", "18 सेमी"],
      "answer_en": "15 cm",
      "answer_hi": "15 सेमी",
      "attempted": false
    },
    {
      "num": 50,
      "question_en": "If sin θ = 12/13, then tan θ is:",
      "question_hi": "यदि sin θ = 12/13, तो tan θ है:",
      "options_en": ["5/12", "12/5", "13/5", "5/13"],
      "options_hi": ["5/12", "12/5", "13/5", "5/13"],
      "answer_en": "12/5",
      "answer_hi": "12/5",
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
