const questions = [
  {
    "num": 1,
    "question_en": "What is the sum of first 10 natural numbers?",
    "question_hi": "प्रथम 10 प्राकृतिक संख्याओं का योग क्या है?",
    "options_en": ["55", "45", "50", "60"],
    "options_hi": ["55", "45", "50", "60"],
    "answer_en": "55",
    "answer_hi": "55",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the area of a square with side 7 cm?",
    "question_hi": "7 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?",
    "options_en": ["49 cm²", "28 cm²", "14 cm²", "35 cm²"],
    "options_hi": ["49 वर्ग सेमी", "28 वर्ग सेमी", "14 वर्ग सेमी", "35 वर्ग सेमी"],
    "answer_en": "49 cm²",
    "answer_hi": "49 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the perimeter of a rectangle with length 12 cm and breadth 8 cm?",
    "question_hi": "12 सेमी लंबाई और 8 सेमी चौड़ाई वाले आयत का परिमाप क्या है?",
    "options_en": ["40 cm", "48 cm", "20 cm", "32 cm"],
    "options_hi": ["40 सेमी", "48 सेमी", "20 सेमी", "32 सेमी"],
    "answer_en": "40 cm",
    "answer_hi": "40 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the HCF of 24 and 36?",
    "question_hi": "24 और 36 का महत्तम समापवर्तक (HCF) क्या है?",
    "options_en": ["12", "6", "8", "4"],
    "options_hi": ["12", "6", "8", "4"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the LCM of 15 and 20?",
    "question_hi": "15 और 20 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    "options_en": ["60", "30", "45", "75"],
    "options_hi": ["60", "30", "45", "75"],
    "answer_en": "60",
    "answer_hi": "60",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the value of π (pi) up to two decimal places?",
    "question_hi": "π (पाई) का मान दो दशमलव स्थानों तक क्या है?",
    "options_en": ["3.14", "3.16", "3.12", "3.18"],
    "options_hi": ["3.14", "3.16", "3.12", "3.18"],
    "answer_en": "3.14",
    "answer_hi": "3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the area of a triangle with base 10 cm and height 6 cm?",
    "question_hi": "10 सेमी आधार और 6 सेमी ऊंचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["30 cm²", "16 cm²", "20 cm²", "25 cm²"],
    "options_hi": ["30 वर्ग सेमी", "16 वर्ग सेमी", "20 वर्ग सेमी", "25 वर्ग सेमी"],
    "answer_en": "30 cm²",
    "answer_hi": "30 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the circumference of a circle with radius 14 cm? (π = 22/7)",
    "question_hi": "14 सेमी त्रिज्या वाले वृत्त की परिधि क्या है? (π = 22/7)",
    "options_en": ["88 cm", "44 cm", "66 cm", "22 cm"],
    "options_hi": ["88 सेमी", "44 सेमी", "66 सेमी", "22 सेमी"],
    "answer_en": "88 cm",
    "answer_hi": "88 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the formula for simple interest?",
    "question_hi": "साधारण ब्याज का सूत्र क्या है?",
    "options_en": ["(P×R×T)/100", "P(1+R/100)^T", "P+P×R×T", "(P×T)/R×100"],
    "options_hi": ["(P×R×T)/100", "P(1+R/100)^T", "P+P×R×T", "(P×T)/R×100"],
    "answer_en": "(P×R×T)/100",
    "answer_hi": "(P×R×T)/100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the value of √169?",
    "question_hi": "√169 का मान क्या है?",
    "options_en": ["13", "12", "14", "11"],
    "options_hi": ["13", "12", "14", "11"],
    "answer_en": "13",
    "answer_hi": "13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 0.025 expressed as a fraction?",
    "question_hi": "0.025 को भिन्न के रूप में कैसे व्यक्त करेंगे?",
    "options_en": ["1/40", "1/25", "25/1000", "1/20"],
    "options_hi": ["1/40", "1/25", "25/1000", "1/20"],
    "answer_en": "1/40",
    "answer_hi": "1/40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the volume of a cube with edge 5 cm?",
    "question_hi": "5 सेमी किनारे वाले घन का आयतन क्या है?",
    "options_en": ["125 cm³", "25 cm³", "100 cm³", "50 cm³"],
    "options_hi": ["125 घन सेमी", "25 घन सेमी", "100 घन सेमी", "50 घन सेमी"],
    "answer_en": "125 cm³",
    "answer_hi": "125 घन सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the sum of interior angles of a triangle?",
    "question_hi": "त्रिभुज के आंतरिक कोणों का योग क्या है?",
    "options_en": ["180°", "90°", "360°", "120°"],
    "options_hi": ["180°", "90°", "360°", "120°"],
    "answer_en": "180°",
    "answer_hi": "180°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the Pythagorean theorem formula?",
    "question_hi": "पाइथागोरस प्रमेय का सूत्र क्या है?",
    "options_en": ["a² + b² = c²", "a + b = c", "a × b = c²", "a² - b² = c²"],
    "options_hi": ["a² + b² = c²", "a + b = c", "a × b = c²", "a² - b² = c²"],
    "answer_en": "a² + b² = c²",
    "answer_hi": "a² + b² = c²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the median of numbers 4, 7, 8, 12, 15?",
    "question_hi": "संख्याओं 4, 7, 8, 12, 15 की माध्यिका क्या है?",
    "options_en": ["8", "7", "9", "12"],
    "options_hi": ["8", "7", "9", "12"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the mean of numbers 5, 10, 15, 20, 25?",
    "question_hi": "संख्याओं 5, 10, 15, 20, 25 का माध्य क्या है?",
    "options_en": ["15", "12", "18", "20"],
    "options_hi": ["15", "12", "18", "20"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the mode of numbers 2, 3, 4, 3, 5, 3, 6?",
    "question_hi": "संख्याओं 2, 3, 4, 3, 5, 3, 6 का बहुलक क्या है?",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 37.5% expressed as a fraction?",
    "question_hi": "37.5% को भिन्न के रूप में कैसे व्यक्त करेंगे?",
    "options_en": ["3/8", "3/5", "1/3", "5/8"],
    "options_hi": ["3/8", "3/5", "1/3", "5/8"],
    "answer_en": "3/8",
    "answer_hi": "3/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the decimal expansion of 3/8?",
    "question_hi": "3/8 का दशमलव प्रसार क्या है?",
    "options_en": ["0.375", "0.38", "0.4", "0.333"],
    "options_hi": ["0.375", "0.38", "0.4", "0.333"],
    "answer_en": "0.375",
    "answer_hi": "0.375",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the formula for compound interest?",
    "question_hi": "चक्रवृद्धि ब्याज का सूत्र क्या है?",
    "options_en": ["A = P(1 + R/100)^T", "A = P + PRT", "A = P(1 + RT)", "A = P + (PRT)/100"],
    "options_hi": ["A = P(1 + R/100)^T", "A = P + PRT", "A = P(1 + RT)", "A = P + (PRT)/100"],
    "answer_en": "A = P(1 + R/100)^T",
    "answer_hi": "A = P(1 + R/100)^T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the area of a circle with radius 7 cm? (π = 22/7)",
    "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है? (π = 22/7)",
    "options_en": ["154 cm²", "44 cm²", "88 cm²", "22 cm²"],
    "options_hi": ["154 वर्ग सेमी", "44 वर्ग सेमी", "88 वर्ग सेमी", "22 वर्ग सेमी"],
    "answer_en": "154 cm²",
    "answer_hi": "154 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the formula for area of a trapezium?",
    "question_hi": "समलंब चतुर्भुज का क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["½(a+b)h", "a × b", "½ × b × h", "a² + b²"],
    "options_hi": ["½(a+b)h", "a × b", "½ × b × h", "a² + b²"],
    "answer_en": "½(a+b)h",
    "answer_hi": "½(a+b)h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the value of 2³ × 3²?",
    "question_hi": "2³ × 3² का मान क्या है?",
    "options_en": ["72", "36", "48", "24"],
    "options_hi": ["72", "36", "48", "24"],
    "answer_en": "72",
    "answer_hi": "72",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the HCF of 18 and 45?",
    "question_hi": "18 और 45 का महत्तम समापवर्तक (HCF) क्या है?",
    "options_en": ["9", "6", "3", "18"],
    "options_hi": ["9", "6", "3", "18"],
    "answer_en": "9",
    "answer_hi": "9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the LCM of 12 and 18?",
    "question_hi": "12 और 18 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    "options_en": ["36", "24", "54", "72"],
    "options_hi": ["36", "24", "54", "72"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the value of (-5) × (-3) × 2?",
    "question_hi": "(-5) × (-3) × 2 का मान क्या है?",
    "options_en": ["30", "-30", "15", "-15"],
    "options_hi": ["30", "-30", "15", "-15"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the formula for volume of a cylinder?",
    "question_hi": "बेलन का आयतन का सूत्र क्या है?",
    "options_en": ["πr²h", "2πrh", "πr²", "2πr(r+h)"],
    "options_hi": ["πr²h", "2πrh", "πr²", "2πr(r+h)"],
    "answer_en": "πr²h",
    "answer_hi": "πr²h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 0.4̅ (0.4 repeating) as a fraction?",
    "question_hi": "0.4̅ (0.4 पुनरावृत्ति) को भिन्न के रूप में क्या कहेंगे?",
    "options_en": ["4/9", "2/5", "4/10", "1/4"],
    "options_hi": ["4/9", "2/5", "4/10", "1/4"],
    "answer_en": "4/9",
    "answer_hi": "4/9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the area of a rhombus with diagonals 8 cm and 6 cm?",
    "question_hi": "8 सेमी और 6 सेमी विकर्ण वाले समचतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["24 cm²", "14 cm²", "48 cm²", "12 cm²"],
    "options_hi": ["24 वर्ग सेमी", "14 वर्ग सेमी", "48 वर्ग सेमी", "12 वर्ग सेमी"],
    "answer_en": "24 cm²",
    "answer_hi": "24 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the probability of getting a head when tossing a coin?",
    "question_hi": "सिक्का उछालने पर चित आने की प्रायिकता क्या है?",
    "options_en": ["1/2", "1/4", "1", "1/3"],
    "options_hi": ["1/2", "1/4", "1", "1/3"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the sum of interior angles of a quadrilateral?",
    "question_hi": "चतुर्भुज के आंतरिक कोणों का योग क्या है?",
    "options_en": ["360°", "180°", "270°", "90°"],
    "options_hi": ["360°", "180°", "270°", "90°"],
    "answer_en": "360°",
    "answer_hi": "360°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the value of (3/4) ÷ (2/3)?",
    "question_hi": "(3/4) ÷ (2/3) का मान क्या है?",
    "options_en": ["9/8", "6/12", "1/2", "5/7"],
    "options_hi": ["9/8", "6/12", "1/2", "5/7"],
    "answer_en": "9/8",
    "answer_hi": "9/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the formula for surface area of a sphere?",
    "question_hi": "गोले का पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["4πr²", "πr²", "2πr²", "(4/3)πr³"],
    "options_hi": ["4πr²", "πr²", "2πr²", "(4/3)πr³"],
    "answer_en": "4πr²",
    "answer_hi": "4πr²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 1.25 expressed as a fraction?",
    "question_hi": "1.25 को भिन्न के रूप में कैसे व्यक्त करेंगे?",
    "options_en": ["5/4", "4/5", "125/100", "3/4"],
    "options_hi": ["5/4", "4/5", "125/100", "3/4"],
    "answer_en": "5/4",
    "answer_hi": "5/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the volume of a cuboid with dimensions 5cm×4cm×3cm?",
    "question_hi": "5सेमी×4सेमी×3सेमी आयाम वाले घनाभ का आयतन क्या है?",
    "options_en": ["60 cm³", "12 cm³", "20 cm³", "45 cm³"],
    "options_hi": ["60 घन सेमी", "12 घन सेमी", "20 घन सेमी", "45 घन सेमी"],
    "answer_en": "60 cm³",
    "answer_hi": "60 घन सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the formula for area of a parallelogram?",
    "question_hi": "समांतर चतुर्भुज का क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["b × h", "½ × b × h", "a × b", "2(a+b)"],
    "options_hi": ["b × h", "½ × b × h", "a × b", "2(a+b)"],
    "answer_en": "b × h",
    "answer_hi": "b × h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the value of 10² - 8²?",
    "question_hi": "10² - 8² का मान क्या है?",
    "options_en": ["36", "28", "64", "18"],
    "options_hi": ["36", "28", "64", "18"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the formula for nth term of an arithmetic progression?",
    "question_hi": "समांतर श्रेणी का nवाँ पद का सूत्र क्या है?",
    "options_en": ["a + (n-1)d", "a + nd", "a × d^(n-1)", "n/2[2a+(n-1)d]"],
    "options_hi": ["a + (n-1)d", "a + nd", "a × d^(n-1)", "n/2[2a+(n-1)d]"],
    "answer_en": "a + (n-1)d",
    "answer_hi": "a + (n-1)d",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the range of numbers 3, 7, 2, 9, 5?",
    "question_hi": "संख्याओं 3, 7, 2, 9, 5 का परिसर क्या है?",
    "options_en": ["7", "5", "9", "2"],
    "options_hi": ["7", "5", "9", "2"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the decimal expansion of 5/6?",
    "question_hi": "5/6 का दशमलव प्रसार क्या है?",
    "options_en": ["0.8333...", "0.8", "0.75", "0.6"],
    "options_hi": ["0.8333...", "0.8", "0.75", "0.6"],
    "answer_en": "0.8333...",
    "answer_hi": "0.8333...",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the formula for sum of first n natural numbers?",
    "question_hi": "प्रथम n प्राकृतिक संख्याओं के योग का सूत्र क्या है?",
    "options_en": ["n(n+1)/2", "n²", "n(n-1)/2", "(n+1)/2"],
    "options_hi": ["n(n+1)/2", "n²", "n(n-1)/2", "(n+1)/2"],
    "answer_en": "n(n+1)/2",
    "answer_hi": "n(n+1)/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the area of a semicircle with radius 14 cm? (π = 22/7)",
    "question_hi": "14 सेमी त्रिज्या वाले अर्धवृत्त का क्षेत्रफल क्या है? (π = 22/7)",
    "options_en": ["308 cm²", "154 cm²", "616 cm²", "77 cm²"],
    "options_hi": ["308 वर्ग सेमी", "154 वर्ग सेमी", "616 वर्ग सेमी", "77 वर्ग सेमी"],
    "answer_en": "308 cm²",
    "answer_hi": "308 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the value of (√2 + √3)(√2 - √3)?",
    "question_hi": "(√2 + √3)(√2 - √3) का मान क्या है?",
    "options_en": ["-1", "1", "5", "2√6"],
    "options_hi": ["-1", "1", "5", "2√6"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the formula for distance between two points (x₁,y₁) and (x₂,y₂)?",
    "question_hi": "दो बिंदुओं (x₁,y₁) और (x₂,y₂) के बीच की दूरी का सूत्र क्या है?",
    "options_en": ["√[(x₂-x₁)² + (y₂-y₁)²]", "(x₂-x₁) + (y₂-y₁)", "(x₂-x₁)² + (y₂-y₁)²", "√(x₂-x₁ + y₂-y₁)"],
    "options_hi": ["√[(x₂-x₁)² + (y₂-y₁)²]", "(x₂-x₁) + (y₂-y₁)", "(x₂-x₁)² + (y₂-y₁)²", "√(x₂-x₁ + y₂-y₁)"],
    "answer_en": "√[(x₂-x₁)² + (y₂-y₁)²]",
    "answer_hi": "√[(x₂-x₁)² + (y₂-y₁)²]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the value of sin²θ + cos²θ?",
    "question_hi": "sin²θ + cos²θ का मान क्या है?",
    "options_en": ["1", "0", "sin2θ", "cos2θ"],
    "options_hi": ["1", "0", "sin2θ", "cos2θ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the formula for area of an equilateral triangle with side a?",
    "question_hi": "भुजा a वाले समबाहु त्रिभुज का क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["(√3/4)a²", "a²", "(1/2)a²", "(√3/2)a²"],
    "options_hi": ["(√3/4)a²", "a²", "(1/2)a²", "(√3/2)a²"],
    "answer_en": "(√3/4)a²",
    "answer_hi": "(√3/4)a²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the value of tan 45°?",
    "question_hi": "tan 45° का मान क्या है?",
    "options_en": ["1", "0", "√3", "1/√3"],
    "options_hi": ["1", "0", "√3", "1/√3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the formula for volume of a cone?",
    "question_hi": "शंकु का आयतन का सूत्र क्या है?",
    "options_en": ["(1/3)πr²h", "πr²h", "πrl", "πr(r+l)"],
    "options_hi": ["(1/3)πr²h", "πr²h", "πrl", "πr(r+l)"],
    "answer_en": "(1/3)πr²h",
    "answer_hi": "(1/3)πr²h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the value of log₁₀100?",
    "question_hi": "log₁₀100 का मान क्या है?",
    "options_en": ["2", "1", "10", "100"],
    "options_hi": ["2", "1", "10", "100"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the formula for curved surface area of a cylinder?",
    "question_hi": "बेलन का वक्र पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["2πrh", "πr²h", "2πr²", "πr(r+h)"],
    "options_hi": ["2πrh", "πr²h", "2πr²", "πr(r+h)"],
    "answer_en": "2πrh",
    "answer_hi": "2πrh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is the value of 0! (zero factorial)?",
    "question_hi": "0! (शून्य का भाज्य) का मान क्या है?",
    "options_en": ["1", "0", "Not defined", "10"],
    "options_hi": ["1", "0", "परिभाषित नहीं", "10"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is the formula for sum of first n terms of an arithmetic progression?",
    "question_hi": "समांतर श्रेणी के प्रथम n पदों के योग का सूत्र क्या है?",
    "options_en": ["n/2[2a+(n-1)d]", "a + (n-1)d", "n(a+d)", "(n-1)(a+d)"],
    "options_hi": ["n/2[2a+(n-1)d]", "a + (n-1)d", "n(a+d)", "(n-1)(a+d)"],
    "answer_en": "n/2[2a+(n-1)d]",
    "answer_hi": "n/2[2a+(n-1)d]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the value of sin 30°?",
    "question_hi": "sin 30° का मान क्या है?",
    "options_en": ["1/2", "√3/2", "1/√2", "√3/3"],
    "options_hi": ["1/2", "√3/2", "1/√2", "√3/3"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the formula for total surface area of a cuboid?",
    "question_hi": "घनाभ का संपूर्ण पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["2(lb+bh+hl)", "l×b×h", "2(l+b)×h", "l+b+h"],
    "options_hi": ["2(lb+bh+hl)", "l×b×h", "2(l+b)×h", "l+b+h"],
    "answer_en": "2(lb+bh+hl)",
    "answer_hi": "2(lb+bh+hl)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the value of cos 60°?",
    "question_hi": "cos 60° का मान क्या है?",
    "options_en": ["1/2", "√3/2", "1", "1/√2"],
    "options_hi": ["1/2", "√3/2", "1", "1/√2"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the formula for midpoint of two points (x₁,y₁) and (x₂,y₂)?",
    "question_hi": "दो बिंदुओं (x₁,y₁) और (x₂,y₂) के मध्य बिंदु का सूत्र क्या है?",
    "options_en": ["((x₁+x₂)/2, (y₁+y₂)/2)", "(x₂-x₁, y₂-y₁)", "((x₁+x₂), (y₁+y₂))", "((x₂-x₁)/2, (y₂-y₁)/2)"],
    "options_hi": ["((x₁+x₂)/2, (y₁+y₂)/2)", "(x₂-x₁, y₂-y₁)", "((x₁+x₂), (y₁+y₂))", "((x₂-x₁)/2, (y₂-y₁)/2)"],
    "answer_en": "((x₁+x₂)/2, (y₁+y₂)/2)",
    "answer_hi": "((x₁+x₂)/2, (y₁+y₂)/2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the value of tan 0°?",
    "question_hi": "tan 0° का मान क्या है?",
    "options_en": ["0", "1", "∞", "Not defined"],
    "options_hi": ["0", "1", "∞", "परिभाषित नहीं"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the formula for area of a sector of a circle?",
    "question_hi": "वृत्त के त्रिज्यखंड का क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["(θ/360)×πr²", "πr²", "(θ/180)×πr", "2πr×(θ/360)"],
    "options_hi": ["(θ/360)×πr²", "πr²", "(θ/180)×πr", "2πr×(θ/360)"],
    "answer_en": "(θ/360)×πr²",
    "answer_hi": "(θ/360)×πr²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the value of sin 90°?",
    "question_hi": "sin 90° का मान क्या है?",
    "options_en": ["1", "0", "1/2", "√3/2"],
    "options_hi": ["1", "0", "1/2", "√3/2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is the formula for slope of a line passing through (x₁,y₁) and (x₂,y₂)?",
    "question_hi": "(x₁,y₁) और (x₂,y₂) से गुजरने वाली रेखा की ढाल का सूत्र क्या है?",
    "options_en": ["(y₂-y₁)/(x₂-x₁)", "(x₂-x₁)/(y₂-y₁)", "y₂-y₁", "x₂-x₁"],
    "options_hi": ["(y₂-y₁)/(x₂-x₁)", "(x₂-x₁)/(y₂-y₁)", "y₂-y₁", "x₂-x₁"],
    "answer_en": "(y₂-y₁)/(x₂-x₁)",
    "answer_hi": "(y₂-y₁)/(x₂-x₁)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the value of cos 90°?",
    "question_hi": "cos 90° का मान क्या है?",
    "options_en": ["0", "1", "1/2", "√3/2"],
    "options_hi": ["0", "1", "1/2", "√3/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is the formula for length of an arc of a circle?",
    "question_hi": "वृत्त के चाप की लंबाई का सूत्र क्या है?",
    "options_en": ["(θ/360)×2πr", "πr²", "(θ/180)×πr", "2πr"],
    "options_hi": ["(θ/360)×2πr", "πr²", "(θ/180)×πr", "2πr"],
    "answer_en": "(θ/360)×2πr",
    "answer_hi": "(θ/360)×2πr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the value of sec 0°?",
    "question_hi": "sec 0° का मान क्या है?",
    "options_en": ["1", "0", "∞", "Not defined"],
    "options_hi": ["1", "0", "∞", "परिभाषित नहीं"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is the formula for volume of a sphere?",
    "question_hi": "गोले का आयतन का सूत्र क्या है?",
    "options_en": ["(4/3)πr³", "4πr²", "πr³", "(2/3)πr³"],
    "options_hi": ["(4/3)πr³", "4πr²", "πr³", "(2/3)πr³"],
    "answer_en": "(4/3)πr³",
    "answer_hi": "(4/3)πr³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the value of cosec 90°?",
    "question_hi": "cosec 90° का मान क्या है?",
    "options_en": ["1", "0", "∞", "2"],
    "options_hi": ["1", "0", "∞", "2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is the formula for curved surface area of a cone?",
    "question_hi": "शंकु का वक्र पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["πrl", "πr²", "πr(r+l)", "(1/3)πr²h"],
    "options_hi": ["πrl", "πr²", "πr(r+l)", "(1/3)πr²h"],
    "answer_en": "πrl",
    "answer_hi": "πrl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the value of sin 45°?",
    "question_hi": "sin 45° का मान क्या है?",
    "options_en": ["1/√2", "1/2", "√3/2", "1"],
    "options_hi": ["1/√2", "1/2", "√3/2", "1"],
    "answer_en": "1/√2",
    "answer_hi": "1/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is the formula for total surface area of a cone?",
    "question_hi": "शंकु का संपूर्ण पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["πr(r+l)", "πrl", "πr²", "(1/3)πr²h"],
    "options_hi": ["πr(r+l)", "πrl", "πr²", "(1/3)πr²h"],
    "answer_en": "πr(r+l)",
    "answer_hi": "πr(r+l)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the value of cos 45°?",
    "question_hi": "cos 45° का मान क्या है?",
    "options_en": ["1/√2", "1/2", "√3/2", "1"],
    "options_hi": ["1/√2", "1/2", "√3/2", "1"],
    "answer_en": "1/√2",
    "answer_hi": "1/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the formula for area of a triangle using coordinates?",
    "question_hi": "निर्देशांक का उपयोग करके त्रिभुज का क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|", "x₁+x₂+x₃", "y₁+y₂+y₃", "(x₁+x₂+x₃)/3"],
    "options_hi": ["½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|", "x₁+x₂+x₃", "y₁+y₂+y₃", "(x₁+x₂+x₃)/3"],
    "answer_en": "½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|",
    "answer_hi": "½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the value of tan 60°?",
    "question_hi": "tan 60° का मान क्या है?",
    "options_en": ["√3", "1", "1/√3", "0"],
    "options_hi": ["√3", "1", "1/√3", "0"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is the formula for sum of first n odd numbers?",
    "question_hi": "प्रथम n विषम संख्याओं के योग का सूत्र क्या है?",
    "options_en": ["n²", "n(n+1)", "n(n-1)", "2n"],
    "options_hi": ["n²", "n(n+1)", "n(n-1)", "2n"],
    "answer_en": "n²",
    "answer_hi": "n²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the value of sec 45°?",
    "question_hi": "sec 45° का मान क्या है?",
    "options_en": ["√2", "1", "2", "1/√2"],
    "options_hi": ["√2", "1", "2", "1/√2"],
    "answer_en": "√2",
    "answer_hi": "√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is the formula for sum of first n even numbers?",
    "question_hi": "प्रथम n सम संख्याओं के योग का सूत्र क्या है?",
    "options_en": ["n(n+1)", "n²", "2n", "n(n-1)"],
    "options_hi": ["n(n+1)", "n²", "2n", "n(n-1)"],
    "answer_en": "n(n+1)",
    "answer_hi": "n(n+1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the value of cosec 30°?",
    "question_hi": "cosec 30° का मान क्या है?",
    "options_en": ["2", "1", "√2", "√3"],
    "options_hi": ["2", "1", "√2", "√3"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is the formula for section formula (internal division)?",
    "question_hi": "विभाजन सूत्र (आंतरिक विभाजन) क्या है?",
    "options_en": ["((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))", "((x₁+x₂)/2, (y₁+y₂)/2)", "(x₂-x₁, y₂-y₁)", "((x₁+x₂), (y₁+y₂))"],
    "options_hi": ["((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))", "((x₁+x₂)/2, (y₁+y₂)/2)", "(x₂-x₁, y₂-y₁)", "((x₁+x₂), (y₁+y₂))"],
    "answer_en": "((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
    "answer_hi": "((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the value of cot 45°?",
    "question_hi": "cot 45° का मान क्या है?",
    "options_en": ["1", "0", "√3", "1/√3"],
    "options_hi": ["1", "0", "√3", "1/√3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is the formula for area of a ring?",
    "question_hi": "वलय (रिंग) का क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["π(R² - r²)", "π(R + r)", "2π(R² - r²)", "π(R - r)²"],
    "options_hi": ["π(R² - r²)", "π(R + r)", "2π(R² - r²)", "π(R - r)²"],
    "answer_en": "π(R² - r²)",
    "answer_hi": "π(R² - r²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the value of sin 60°?",
    "question_hi": "sin 60° का मान क्या है?",
    "options_en": ["√3/2", "1/2", "1/√2", "1"],
    "options_hi": ["√3/2", "1/2", "1/√2", "1"],
    "answer_en": "√3/2",
    "answer_hi": "√3/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the formula for total surface area of a hemisphere?",
    "question_hi": "अर्धगोले का संपूर्ण पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["3πr²", "2πr²", "πr²", "(2/3)πr³"],
    "options_hi": ["3πr²", "2πr²", "πr²", "(2/3)πr³"],
    "answer_en": "3πr²",
    "answer_hi": "3πr²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the value of cos 30°?",
    "question_hi": "cos 30° का मान क्या है?",
    "options_en": ["√3/2", "1/2", "1/√2", "1"],
    "options_hi": ["√3/2", "1/2", "1/√2", "1"],
    "answer_en": "√3/2",
    "answer_hi": "√3/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is the formula for volume of a hemisphere?",
    "question_hi": "अर्धगोले का आयतन का सूत्र क्या है?",
    "options_en": ["(2/3)πr³", "(4/3)πr³", "πr³", "(1/3)πr³"],
    "options_hi": ["(2/3)πr³", "(4/3)πr³", "πr³", "(1/3)πr³"],
    "answer_en": "(2/3)πr³",
    "answer_hi": "(2/3)πr³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the value of sec 60°?",
    "question_hi": "sec 60° का मान क्या है?",
    "options_en": ["2", "1", "√2", "1/2"],
    "options_hi": ["2", "1", "√2", "1/2"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the formula for curved surface area of a hemisphere?",
    "question_hi": "अर्धगोले का वक्र पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["2πr²", "3πr²", "πr²", "(4/3)πr³"],
    "options_hi": ["2πr²", "3πr²", "πr²", "(4/3)πr³"],
    "answer_en": "2πr²",
    "answer_hi": "2πr²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the value of cosec 45°?",
    "question_hi": "cosec 45° का मान क्या है?",
    "options_en": ["√2", "1", "2", "1/√2"],
    "options_hi": ["√2", "1", "2", "1/√2"],
    "answer_en": "√2",
    "answer_hi": "√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is the formula for perimeter of a semicircle?",
    "question_hi": "अर्धवृत्त का परिमाप का सूत्र क्या है?",
    "options_en": ["πr + 2r", "πr", "2πr", "πr/2"],
    "options_hi": ["πr + 2r", "πr", "2πr", "πr/2"],
    "answer_en": "πr + 2r",
    "answer_hi": "πr + 2r",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the value of cot 30°?",
    "question_hi": "cot 30° का मान क्या है?",
    "options_en": ["√3", "1", "1/√3", "0"],
    "options_hi": ["√3", "1", "1/√3", "0"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is the formula for diagonal of a cube with side a?",
    "question_hi": "भुजा a वाले घन के विकर्ण का सूत्र क्या है?",
    "options_en": ["a√3", "a√2", "2a", "3a"],
    "options_hi": ["a√3", "a√2", "2a", "3a"],
    "answer_en": "a√3",
    "answer_hi": "a√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the value of tan 30°?",
    "question_hi": "tan 30° का मान क्या है?",
    "options_en": ["1/√3", "√3", "1", "1/2"],
    "options_hi": ["1/√3", "√3", "1", "1/2"],
    "answer_en": "1/√3",
    "answer_hi": "1/√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is the formula for diagonal of a cuboid?",
    "question_hi": "घनाभ के विकर्ण का सूत्र क्या है?",
    "options_en": ["√(l²+b²+h²)", "l+b+h", "√(l²+b²)", "l×b×h"],
    "options_hi": ["√(l²+b²+h²)", "l+b+h", "√(l²+b²)", "l×b×h"],
    "answer_en": "√(l²+b²+h²)",
    "answer_hi": "√(l²+b²+h²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the value of cot 60°?",
    "question_hi": "cot 60° का मान क्या है?",
    "options_en": ["1/√3", "√3", "1", "0"],
    "options_hi": ["1/√3", "√3", "1", "0"],
    "answer_en": "1/√3",
    "answer_hi": "1/√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the formula for area of a triangle using Heron's formula?",
    "question_hi": "हीरोन के सूत्र का उपयोग करके त्रिभुज का क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["√[s(s-a)(s-b)(s-c)]", "½×b×h", "a+b+c", "abc/4R"],
    "options_hi": ["√[s(s-a)(s-b)(s-c)]", "½×b×h", "a+b+c", "abc/4R"],
    "answer_en": "√[s(s-a)(s-b)(s-c)]",
    "answer_hi": "√[s(s-a)(s-b)(s-c)]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the value of sec 30°?",
    "question_hi": "sec 30° का मान क्या है?",
    "options_en": ["2/√3", "√3/2", "2", "√2"],
    "options_hi": ["2/√3", "√3/2", "2", "√2"],
    "answer_en": "2/√3",
    "answer_hi": "2/√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is the formula for sum of interior angles of a polygon with n sides?",
    "question_hi": "n भुजाओं वाले बहुभुज के आंतरिक कोणों का योग का सूत्र क्या है?",
    "options_en": ["(n-2)×180°", "n×180°", "360°", "(n-2)×90°"],
    "options_hi": ["(n-2)×180°", "n×180°", "360°", "(n-2)×90°"],
    "answer_en": "(n-2)×180°",
    "answer_hi": "(n-2)×180°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the value of cosec 60°?",
    "question_hi": "cosec 60° का मान क्या है?",
    "options_en": ["2/√3", "√3/2", "2", "1"],
    "options_hi": ["2/√3", "√3/2", "2", "1"],
    "answer_en": "2/√3",
    "answer_hi": "2/√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the formula for area of a quadrilateral?",
    "question_hi": "चतुर्भुज का क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["½×d(h₁+h₂)", "d₁×d₂", "a+b+c+d", "½(a+b)h"],
    "options_hi": ["½×d(h₁+h₂)", "d₁×d₂", "a+b+c+d", "½(a+b)h"],
    "answer_en": "½×d(h₁+h₂)",
    "answer_hi": "½×d(h₁+h₂)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the value of 1 + tan²θ?",
    "question_hi": "1 + tan²θ का मान क्या है?",
    "options_en": ["sec²θ", "cosec²θ", "1", "tanθ"],
    "options_hi": ["sec²θ", "cosec²θ", "1", "tanθ"],
    "answer_en": "sec²θ",
    "answer_hi": "sec²θ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is the formula for 1 + cot²θ?",
    "question_hi": "1 + cot²θ का सूत्र क्या है?",
    "options_en": ["cosec²θ", "sec²θ", "tan²θ", "1"],
    "options_hi": ["cosec²θ", "sec²θ", "tan²θ", "1"],
    "answer_en": "cosec²θ",
    "answer_hi": "cosec²θ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the value of sin²θ - cos²θ?",
    "question_hi": "sin²θ - cos²θ का मान क्या है?",
    "options_en": ["-cos2θ", "1", "0", "sin2θ"],
    "options_hi": ["-cos2θ", "1", "0", "sin2θ"],
    "answer_en": "-cos2θ",
    "answer_hi": "-cos2θ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the formula for sin2θ?",
    "question_hi": "sin2θ का सूत्र क्या है?",
    "options_en": ["2sinθcosθ", "sin²θ - cos²θ", "2cos²θ - 1", "1 - 2sin²θ"],
    "options_hi": ["2sinθcosθ", "sin²θ - cos²θ", "2cos²θ - 1", "1 - 2sin²θ"],
    "answer_en": "2sinθcosθ",
    "answer_hi": "2sinθcosθ",
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