const questions = [

  {
    "num": 1,
    "question_en": "What is the sum of the interior angles of a triangle?",
    "question_hi": "एक त्रिकोण (triangle) के आंतरिक कोणों का योग क्या है?",
    "options_en": ["90°", "180°", "360°", "270°"],
    "options_hi": ["90°", "180°", "360°", "270°"],
    "answer_en": "180°",
    "answer_hi": "180°",
    "attempted": false
  },
  {
    "num": 2,
    "question_en": "What is the area of a rectangle with length l and breadth b?",
    "question_hi": "यदि एक आयत (rectangle) की लंबाई l और चौड़ाई b हो, तो उसका क्षेत्रफल (area) क्या होगा?",
    "options_en": ["l × b", "l + b", "2(l + b)", "l - b"],
    "options_hi": ["l × b", "l + b", "2(l + b)", "l - b"],
    "answer_en": "l × b",
    "answer_hi": "l × b",
    "attempted": false
  },
  {
    "num": 3,
    "question_en": "What is the perimeter of a square with side a?",
    "question_hi": "यदि एक वर्ग (square) की भुजा a हो, तो उसकी परिधि (perimeter) क्या होगी?",
    "options_en": ["4a", "2a", "a²", "4a²"],
    "options_hi": ["4a", "2a", "a²", "4a²"],
    "answer_en": "4a",
    "answer_hi": "4a",
    "attempted": false
  },
  {
    "num": 4,
    "question_en": "What is the volume of a cube with side a?",
    "question_hi": "यदि एक घन (cube) की भुजा a हो, तो उसका आयतन (volume) क्या होगा?",
    "options_en": ["a³", "2a³", "3a²", "4a²"],
    "options_hi": ["a³", "2a³", "3a²", "4a²"],
    "answer_en": "a³",
    "answer_hi": "a³",
    "attempted": false
  },
  {
    "num": 5,
    "question_en": "What is the area of a circle with radius r?",
    "question_hi": "यदि एक वृत्त (circle) की त्रिज्या (radius) r हो, तो उसका क्षेत्रफल (area) क्या होगा?",
    "options_en": ["πr²", "2πr", "πr", "πr³"],
    "options_hi": ["πr²", "2πr", "πr", "πr³"],
    "answer_en": "πr²",
    "answer_hi": "πr²",
    "attempted": false
  },
  {
    "num": 6,
    "question_en": "What is the equation of a straight line with slope m and y-intercept b?",
    "question_hi": "यदि एक रेखा (line) की ढलान (slope) m और y-अंतरपटी (y-intercept) b हो, तो उसकी समीकरण (equation) क्या होगी?",
    "options_en": ["y = mx + b", "y = m + x", "y = x + b", "y = b + mx"],
    "options_hi": ["y = mx + b", "y = m + x", "y = x + b", "y = b + mx"],
    "answer_en": "y = mx + b",
    "answer_hi": "y = mx + b",
    "attempted": false
  },
  {
    "num": 7,
    "question_en": "What is the value of tan(45°)?",
    "question_hi": "tan(45°) का मान क्या है?",
    "options_en": ["1", "0", "√2", "∞"],
    "options_hi": ["1", "0", "√2", "∞"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  },
  {
    "num": 8,
    "question_en": "What is the distance between the points (1, 2) and (3, 4)?",
    "question_hi": "बिंदुओं (1, 2) और (3, 4) के बीच की दूरी (distance) क्या होगी?",
    "options_en": ["2", "√2", "√5", "4"],
    "options_hi": ["2", "√2", "√5", "4"],
    "answer_en": "√5",
    "answer_hi": "√5",
    "attempted": false
  },
  {
    "num": 9,
    "question_en": "What is the probability of getting a head when a fair coin is tossed?",
    "question_hi": "जब एक निष्पक्ष सिक्का (fair coin) उछाला जाता है, तो सिर (head) आने की संभावना (probability) क्या होगी?",
    "options_en": ["1/2", "1/3", "1/4", "1"],
    "options_hi": ["1/2", "1/3", "1/4", "1"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 10,
    "question_en": "What is the surface area of a sphere with radius r?",
    "question_hi": "यदि किसी गोला (sphere) की त्रिज्या (radius) r हो, तो उसका पृष्ठ क्षेत्रफल (surface area) क्या होगा?",
    "options_en": ["4πr²", "2πr²", "πr²", "πr³"],
    "options_hi": ["4πr²", "2πr²", "πr²", "πr³"],
    "answer_en": "4πr²",
    "answer_hi": "4πr²",
    "attempted": false
  },
  {
    "num": 11,
    "question_en": "What is the midpoint of the segment joining the points (4, 2) and (6, 6)?",
    "question_hi": "बिंदुओं (4, 2) और (6, 6) को जोड़ने वाली रेखा खंड का मध्य बिंदु (midpoint) क्या होगा?",
    "options_en": ["(5, 4)", "(4, 4)", "(5, 5)", "(6, 7)"],
    "options_hi": ["(5, 4)", "(4, 4)", "(5, 5)", "(6, 7)"],
    "answer_en": "(5, 4)",
    "answer_hi": "(5, 4)",
    "attempted": false
  },
  {
    "num": 12,
    "question_en": "What is the slope of the line joining the points (2, 3) and (4, 7)?",
    "question_hi": "बिंदुओं (2, 3) और (4, 7) को जोड़ने वाली रेखा (line) की ढलान (slope) क्या होगी?",
    "options_en": ["2", "1", "3", "4"],
    "options_hi": ["2", "1", "3", "4"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false
  },
  {
    "num": 13,
    "question_en": "What is the area of a triangle with base b and height h?",
    "question_hi": "यदि एक त्रिकोण (triangle) की आधार (base) b और ऊँचाई (height) h हो, तो उसका क्षेत्रफल (area) क्या होगा?",
    "options_en": ["(1/2)bh", "(1/3)bh", "(1/4)bh", "bh"],
    "options_hi": ["(1/2)bh", "(1/3)bh", "(1/4)bh", "bh"],
    "answer_en": "(1/2)bh",
    "answer_hi": "(1/2)bh",
    "attempted": false
  },
  {
    "num": 14,
    "question_en": "What is the value of sin(30°)?",
    "question_hi": "sin(30°) का मान क्या है?",
    "options_en": ["1/2", "√2/2", "√3/2", "1"],
    "options_hi": ["1/2", "√2/2", "√3/2", "1"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 15,
    "question_en": "What is the volume of a cone with radius r and height h?",
    "question_hi": "यदि एक शंकु (cone) की त्रिज्या (radius) r और ऊँचाई (height) h हो, तो उसका आयतन (volume) क्या होगा?",
    "options_en": ["(1/3)πr²h", "(1/2)πr²h", "πr²h", "(1/4)πr²h"],
    "options_hi": ["(1/3)πr²h", "(1/2)πr²h", "πr²h", "(1/4)πr²h"],
    "answer_en": "(1/3)πr²h",
    "answer_hi": "(1/3)πr²h",
    "attempted": false
  },
  {
    "num": 16,
    "question_en": "What is the equation of a parabola with vertex at (0, 0) and focus at (0, p)?",
    "question_hi": "यदि एक परबोला (parabola) का शीर्ष (vertex) (0, 0) पर हो और फोकस (focus) (0, p) पर हो, तो उसकी समीकरण (equation) क्या होगी?",
    "options_en": ["y² = 4px", "x² = 4py", "y = px²", "x = py²"],
    "options_hi": ["y² = 4px", "x² = 4py", "y = px²", "x = py²"],
    "answer_en": "x² = 4py",
    "answer_hi": "x² = 4py",
    "attempted": false
  },

  {
    "num": 17,
    "question_en": "What is the derivative of x² with respect to x?",
    "question_hi": "x² का x के सापेक्ष व्युत्पत्ति (derivative) क्या होगा?",
    "options_en": ["2x", "x", "x²", "2x²"],
    "options_hi": ["2x", "x", "x²", "2x²"],
    "answer_en": "2x",
    "answer_hi": "2x",
    "attempted": false
  },
  {
    "num": 18,
    "question_en": "What is the value of cos(60°)?",
    "question_hi": "cos(60°) का मान क्या है?",
    "options_en": ["1/2", "√2/2", "√3/2", "1"],
    "options_hi": ["1/2", "√2/2", "√3/2", "1"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 19,
    "question_en": "What is the sum of the first n natural numbers?",
    "question_hi": "पहले n प्राकृतिक संख्याओं (natural numbers) का योग क्या होगा?",
    "options_en": ["n(n+1)/2", "n²", "2n", "n(n-1)/2"],
    "options_hi": ["n(n+1)/2", "n²", "2n", "n(n-1)/2"],
    "answer_en": "n(n+1)/2",
    "answer_hi": "n(n+1)/2",
    "attempted": false
  },
  {
    "num": 20,
    "question_en": "What is the area of a rhombus with diagonals d₁ and d₂?",
    "question_hi": "यदि एक समांतर चतुर्भुज (rhombus) की विकर्ण (diagonal) d₁ और d₂ हो, तो उसका क्षेत्रफल (area) क्या होगा?",
    "options_en": ["(1/2)d₁d₂", "d₁ + d₂", "d₁d₂", "(1/4)d₁d₂"],
    "options_hi": ["(1/2)d₁d₂", "d₁ + d₂", "d₁d₂", "(1/4)d₁d₂"],
    "answer_en": "(1/2)d₁d₂",
    "answer_hi": "(1/2)d₁d₂",
    "attempted": false
  },
  {
    "num": 21,
    "question_en": "What is the equation of a circle with center (h, k) and radius r?",
    "question_hi": "यदि एक वृत्त (circle) का केंद्र (h, k) और त्रिज्या (radius) r हो, तो उसकी समीकरण (equation) क्या होगी?",
    "options_en": ["(x-h)² + (y-k)² = r²", "(x+h)² + (y+k)² = r²", "x² + y² = r²", "(x-h)² + (y+k)² = r²"],
    "options_hi": ["(x-h)² + (y-k)² = r²", "(x+h)² + (y+k)² = r²", "x² + y² = r²", "(x-h)² + (y+k)² = r²"],
    "answer_en": "(x-h)² + (y-k)² = r²",
    "answer_hi": "(x-h)² + (y-k)² = r²",
    "attempted": false
  },
  {
    "num": 22,
    "question_en": "What is the value of tan(45°)?",
    "question_hi": "tan(45°) का मान क्या है?",
    "options_en": ["1", "0", "∞", "√2"],
    "options_hi": ["1", "0", "∞", "√2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  },
  {
    "num": 23,
    "question_en": "What is the sum of the roots of the quadratic equation x² + 5x + 6 = 0?",
    "question_hi": "क्वाड्रेटिक समीकरण (quadratic equation) x² + 5x + 6 = 0 के मूलों (roots) का योग क्या होगा?",
    "options_en": ["-5", "5", "-6", "6"],
    "options_hi": ["-5", "5", "-6", "6"],
    "answer_en": "-5",
    "answer_hi": "-5",
    "attempted": false
  },
  {
    "num": 24,
    "question_en": "What is the discriminant of the quadratic equation ax² + bx + c = 0?",
    "question_hi": "क्वाड्रेटिक समीकरण ax² + bx + c = 0 का विवेचन (discriminant) क्या होगा?",
    "options_en": ["b² - 4ac", "b² + 4ac", "4ac - b²", "a² + b²"],
    "options_hi": ["b² - 4ac", "b² + 4ac", "4ac - b²", "a² + b²"],
    "answer_en": "b² - 4ac",
    "answer_hi": "b² - 4ac",
    "attempted": false
  },
  {
    "num": 25,
    "question_en": "What is the product of the roots of the quadratic equation x² + 6x + 9 = 0?",
    "question_hi": "क्वाड्रेटिक समीकरण x² + 6x + 9 = 0 के मूलों का गुणनफल (product) क्या होगा?",
    "options_en": ["9", "6", "0", "3"],
    "options_hi": ["9", "6", "0", "3"],
    "answer_en": "9",
    "answer_hi": "9",
    "attempted": false
  },
  {
    "num": 26,
    "question_en": "What is the area of a sector with radius r and angle θ?",
    "question_hi": "यदि एक वृत्त (circle) के क्षेत्रफल का खंड (sector) त्रिज्या (radius) r और कोण (angle) θ हो, तो उसका क्षेत्रफल (area) क्या होगा?",
    "options_en": ["(1/2)r²θ", "(1/3)r²θ", "r²θ", "(1/4)r²θ"],
    "options_hi": ["(1/2)r²θ", "(1/3)r²θ", "r²θ", "(1/4)r²θ"],
    "answer_en": "(1/2)r²θ",
    "answer_hi": "(1/2)r²θ",
    "attempted": false
  },
  {
    "num": 27,
    "question_en": "What is the range of the function f(x) = x²?",
    "question_hi": "कार्य (function) f(x) = x² का मानक (range) क्या होगा?",
    "options_en": ["x ≥ 0", "x ≤ 0", "x > 0", "All real numbers"],
    "options_hi": ["x ≥ 0", "x ≤ 0", "x > 0", "सभी वास्तविक संख्या"],
    "answer_en": "x ≥ 0",
    "answer_hi": "x ≥ 0",
    "attempted": false
  },
  {
    "num": 28,
    "question_en": "What is the value of sin(90°)?",
    "question_hi": "sin(90°) का मान क्या है?",
    "options_en": ["1", "0", "√2", "∞"],
    "options_hi": ["1", "0", "√2", "∞"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  },
  {
    "num": 29,
    "question_en": "What is the LCM of 6 and 8?",
    "question_hi": "6 और 8 का लघुत्तम समापवर्त्य (LCM) क्या होगा?",
    "options_en": ["24", "48", "12", "16"],
    "options_hi": ["24", "48", "12", "16"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false
  },
  {
    "num": 30,
    "question_en": "What is the HCF of 12 and 18?",
    "question_hi": "12 और 18 का महत्तम समापवर्त्य (HCF) क्या होगा?",
    "options_en": ["6", "12", "3", "18"],
    "options_hi": ["6", "12", "3", "18"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false
  },

  {
    "num": 31,
    "question_en": "What is the LCM of 8 and 12?",
    "question_hi": "8 और 12 का लघुत्तम समापवर्त्य (LCM) क्या होगा?",
    "options_en": ["24", "12", "8", "16"],
    "options_hi": ["24", "12", "8", "16"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false
  },
  {
    "num": 32,
    "question_en": "Which of the following is an irrational number?",
    "question_hi": "निम्नलिखित में से कौन-सी एक अपरिमेय संख्या है?",
    "options_en": ["√9", "√2", "4/5", "0.25"],
    "options_hi": ["√9", "√2", "4/5", "0.25"],
    "answer_en": "√2",
    "answer_hi": "√2",
    "attempted": false
  },
  {
    "num": 33,
    "question_en": "The zeroes of the polynomial x² - 5x + 6 are:",
    "question_hi": "बहुपद x² - 5x + 6 के शून्यक हैं:",
    "options_en": ["2, 3", "-2, -3", "1, 6", "5, 6"],
    "options_hi": ["2, 3", "-2, -3", "1, 6", "5, 6"],
    "answer_en": "2, 3",
    "answer_hi": "2, 3",
    "attempted": false
  },
  {
    "num": 34,
    "question_en": "If the sum of zeroes of the quadratic polynomial 2x² - kx + 6 is 3, then k is:",
    "question_hi": "यदि द्विघात बहुपद 2x² - kx + 6 के शून्यकों का योग 3 है, तो k का मान है:",
    "options_en": ["6", "3", "12", "-6"],
    "options_hi": ["6", "3", "12", "-6"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false
  },
  {
    "num": 35,
    "question_en": "The pair of linear equations 2x + 3y = 5 and 4x + 6y = 10 represents:",
    "question_hi": "रैखिक समीकरणों का युग्म 2x + 3y = 5 और 4x + 6y = 10 निरूपित करता है:",
    "options_en": ["Intersecting lines", "Parallel lines", "Coincident lines", "None"],
    "options_hi": ["प्रतिच्छेदी रेखाएँ", "समानांतर रेखाएँ", "संपाती रेखाएँ", "कोई नहीं"],
    "answer_en": "Coincident lines",
    "answer_hi": "संपाती रेखाएँ",
    "attempted": false
  },
  {
    "num": 36,
    "question_en": "The quadratic equation whose roots are 2 and -3 is:",
    "question_hi": "द्विघात समीकरण जिसके मूल 2 और -3 हैं, वह है:",
    "options_en": ["x² + x - 6 = 0", "x² - x - 6 = 0", "x² + 5x + 6 = 0", "x² - 5x + 6 = 0"],
    "options_hi": ["x² + x - 6 = 0", "x² - x - 6 = 0", "x² + 5x + 6 = 0", "x² - 5x + 6 = 0"],
    "answer_en": "x² + x - 6 = 0",
    "answer_hi": "x² + x - 6 = 0",
    "attempted": false
  },
  {
    "num": 37,
    "question_en": "The 10th term of the AP: 5, 9, 13, 17, ... is:",
    "question_hi": "समांतर श्रेणी 5, 9, 13, 17, ... का 10वाँ पद है:",
    "options_en": ["41", "37", "45", "49"],
    "options_hi": ["41", "37", "45", "49"],
    "answer_en": "41",
    "answer_hi": "41",
    "attempted": false
  },
  {
    "num": 38,
    "question_en": "The distance between points (2, 3) and (5, 7) is:",
    "question_hi": "बिंदुओं (2, 3) और (5, 7) के बीच की दूरी है:",
    "options_en": ["5 units", "6 units", "7 units", "8 units"],
    "options_hi": ["5 इकाई", "6 इकाई", "7 इकाई", "8 इकाई"],
    "answer_en": "5 units",
    "answer_hi": "5 इकाई",
    "attempted": false
  },
  {
    "num": 39,
    "question_en": "The midpoint of the line segment joining (4, -2) and (-2, 6) is:",
    "question_hi": "बिंदुओं (4, -2) और (-2, 6) को मिलाने वाले रेखाखंड का मध्यबिंदु है:",
    "options_en": ["(1, 2)", "(2, 4)", "(3, -1)", "(0, 0)"],
    "options_hi": ["(1, 2)", "(2, 4)", "(3, -1)", "(0, 0)"],
    "answer_en": "(1, 2)",
    "answer_hi": "(1, 2)",
    "attempted": false
  },
  {
    "num": 40,
    "question_en": "In ΔABC, if DE || BC and AD/DB = 2/3, then AE/EC is:",
    "question_hi": "ΔABC में, यदि DE || BC और AD/DB = 2/3, तो AE/EC है:",
    "options_en": ["2/3", "3/2", "5/3", "3/5"],
    "options_hi": ["2/3", "3/2", "5/3", "3/5"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false
  },
  {
    "num": 41,
    "question_en": "The length of the tangent from a point P to a circle of radius 6 cm is 8 cm. The distance of P from the center is:",
    "question_hi": "6 सेमी त्रिज्या वाले वृत्त पर एक बिंदु P से खींची गई स्पर्श रेखा की लंबाई 8 सेमी है। केंद्र से P की दूरी है:",
    "options_en": ["10 cm", "12 cm", "14 cm", "16 cm"],
    "options_hi": ["10 सेमी", "12 सेमी", "14 सेमी", "16 सेमी"],
    "answer_en": "10 cm",
    "answer_hi": "10 सेमी",
    "attempted": false
  },
  {
    "num": 42,
    "question_en": "If sin θ = 3/5, then tan θ is:",
    "question_hi": "यदि sin θ = 3/5, तो tan θ है:",
    "options_en": ["3/4", "4/5", "4/3", "5/4"],
    "options_hi": ["3/4", "4/5", "4/3", "5/4"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false
  },
  {
    "num": 43,
    "question_en": "The value of sin² 30° + cos² 30° is:",
    "question_hi": "sin² 30° + cos² 30° का मान है:",
    "options_en": ["0", "1", "2", "√3/2"],
    "options_hi": ["0", "1", "2", "√3/2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  },
  {
    "num": 44,
    "question_en": "The area of a sector of angle 60° in a circle of radius 6 cm is:",
    "question_hi": "6 सेमी त्रिज्या वाले वृत्त में 60° कोण वाले त्रिज्यखंड का क्षेत्रफल है:",
    "options_en": ["6π cm²", "12π cm²", "18π cm²", "36π cm²"],
    "options_hi": ["6π सेमी²", "12π सेमी²", "18π सेमी²", "36π सेमी²"],
    "answer_en": "6π cm²",
    "answer_hi": "6π सेमी²",
    "attempted": false
  },
  {
    "num": 45,
    "question_en": "The volume of a sphere of radius 3 cm is:",
    "question_hi": "3 सेमी त्रिज्या वाले गोले का आयतन है:",
    "options_en": ["36π cm³", "27π cm³", "18π cm³", "9π cm³"],
    "options_hi": ["36π सेमी³", "27π सेमी³", "18π सेमी³", "9π सेमी³"],
    "answer_en": "36π cm³",
    "answer_hi": "36π सेमी³",
    "attempted": false
  },
  {
    "num": 46,
    "question_en": "The mean of first 5 natural numbers is:",
    "question_hi": "प्रथम 5 प्राकृत संख्याओं का माध्य है:",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false
  },
  {
    "num": 47,
    "question_en": "The probability of getting an even number when a die is rolled is:",
    "question_hi": "एक पासा फेंकने पर सम संख्या आने की प्रायिकता है:",
    "options_en": ["1/6", "1/3", "1/2", "2/3"],
    "options_hi": ["1/6", "1/3", "1/2", "2/3"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 48,
    "question_en": "If the HCF of 306 and 657 is 9, then their LCM is:",
    "question_hi": "यदि 306 और 657 का HCF 9 है, तो उनका LCM है:",
    "options_en": ["22338", "22340", "22342", "22344"],
    "options_hi": ["22338", "22340", "22342", "22344"],
    "answer_en": "22338",
    "answer_hi": "22338",
    "attempted": false
  },
  {
    "num": 49,
    "question_en": "The sum of the first 20 terms of the AP: 1, 4, 7, 10, ... is:",
    "question_hi": "समांतर श्रेणी 1, 4, 7, 10, ... के प्रथम 20 पदों का योग है:",
    "options_en": ["590", "610", "630", "650"],
    "options_hi": ["590", "610", "630", "650"],
    "answer_en": "610",
    "answer_hi": "610",
    "attempted": false
  },
  {
    "num": 50,
    "question_en": "The value of tan 45° + cot 45° is:",
    "question_hi": "tan 45° + cot 45° का मान है:",
    "options_en": ["1", "2", "√2", "0"],
    "options_hi": ["1", "2", "√2", "0"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false
  },









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
