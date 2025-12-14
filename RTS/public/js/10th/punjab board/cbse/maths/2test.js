const questions = [

  {
    "num": 1,
    "question_en": "What is the value of the discriminant of the quadratic equation x² - 5x + 6 = 0?",
    "question_hi": "द्विघात समीकरण x² - 5x + 6 = 0 का व्यतिक्रमांक (discriminant) क्या है?",
    "options_en": ["1", "4", "9", "16"],
    "options_hi": ["1", "4", "9", "16"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  },
  {
    "num": 2,
    "question_en": "What is the general formula to find the nth term of an arithmetic progression (AP)?",
    "question_hi": "समानांतर श्रेणी (AP) का nth पद निकालने का सामान्य सूत्र क्या है?",
    "options_en": ["aₙ = a₁ + (n - 1)d", "aₙ = a₁ + nd", "aₙ = a₁ - nd", "aₙ = a₁ + n²d"],
    "options_hi": ["aₙ = a₁ + (n - 1)d", "aₙ = a₁ + nd", "aₙ = a₁ - nd", "aₙ = a₁ + n²d"],
    "answer_en": "aₙ = a₁ + (n - 1)d",
    "answer_hi": "aₙ = a₁ + (n - 1)d",
    "attempted": false
  },
  {
    "num": 3,
    "question_en": "Which of the following is the area of a circle with radius r?",
    "question_hi": "त्रिज्या r वाले वृत्त का क्षेत्रफल क्या है?",
    "options_en": ["πr²", "2πr", "πr", "r²π"],
    "options_hi": ["πr²", "2πr", "πr", "r²π"],
    "answer_en": "πr²",
    "answer_hi": "πr²",
    "attempted": false
  },
  {
    "num": 4,
    "question_en": "What is the sum of the first 20 terms of the arithmetic progression: 5, 9, 13, ...?",
    "question_hi": "समानांतर श्रेणी 5, 9, 13, ... के पहले 20 पदों का योग क्या होगा?",
    "options_en": ["900", "1000", "1100", "1200"],
    "options_hi": ["900", "1000", "1100", "1200"],
    "answer_en": "900",
    "answer_hi": "900",
    "attempted": false
  },
  {
    "num": 5,
    "question_en": "What is the solution to the equation 2x + 3 = 11?",
    "question_hi": "समीकरण 2x + 3 = 11 का हल क्या है?",
    "options_en": ["x = 4", "x = 5", "x = 3", "x = 6"],
    "options_hi": ["x = 4", "x = 5", "x = 3", "x = 6"],
    "answer_en": "x = 4",
    "answer_hi": "x = 4",
    "attempted": false
  },
  {
    "num": 6,
    "question_en": "What is the volume of a cone with radius r and height h?",
    "question_hi": "त्रिज्या r और ऊँचाई h वाले शंकु का आयतन क्या है?",
    "options_en": ["(1/3)πr²h", "(1/2)πr²h", "πr²h", "(1/4)πr²h"],
    "options_hi": ["(1/3)πr²h", "(1/2)πr²h", "πr²h", "(1/4)πr²h"],
    "answer_en": "(1/3)πr²h",
    "answer_hi": "(1/3)πr²h",
    "attempted": false
  },
  {
    "num": 7,
    "question_en": "The probability of an event is always between which two values?",
    "question_hi": "किसी घटना की संभावना हमेशा किन दो मानों के बीच होती है?",
    "options_en": ["0 and 1", "0 and 100", "1 and 100", "0 and 10"],
    "options_hi": ["0 और 1", "0 और 100", "1 और 100", "0 और 10"],
    "answer_en": "0 and 1",
    "answer_hi": "0 और 1",
    "attempted": false
  },
  {
    "num": 8,
    "question_en": "What is the formula to calculate the surface area of a sphere?",
    "question_hi": "गोलाकार का परिधीय क्षेत्रफल (surface area) निकालने का सूत्र क्या है?",
    "options_en": ["4πr²", "2πr", "πr²", "4πr"],
    "options_hi": ["4πr²", "2πr", "πr²", "4πr"],
    "answer_en": "4πr²",
    "answer_hi": "4πr²",
    "attempted": false
  },
  {
    "num": 9,
    "question_en": "What is the sum of the first 50 natural numbers?",
    "question_hi": "पहले 50 प्राकृतिक संख्याओं का योग क्या है?",
    "options_en": ["1275", "1200", "1225", "1300"],
    "options_hi": ["1275", "1200", "1225", "1300"],
    "answer_en": "1275",
    "answer_hi": "1275",
    "attempted": false
  },
  {
    "num": 10,
    "question_en": "What is the formula to find the area of a triangle?",
    "question_hi": "त्रिभुज का क्षेत्रफल निकालने का सूत्र क्या है?",
    "options_en": ["(1/2) × base × height", "base × height", "(1/3) × base × height", "base × height / 2"],
    "options_hi": ["(1/2) × आधार × ऊँचाई", "आधार × ऊँचाई", "(1/3) × आधार × ऊँचाई", "आधार × ऊँचाई / 2"],
    "answer_en": "(1/2) × base × height",
    "answer_hi": "(1/2) × आधार × ऊँचाई",
    "attempted": false
  },
  {
    "num": 11,
    "question_en": "What is the volume of a cylinder with radius r and height h?",
    "question_hi": "त्रिज्या r और ऊँचाई h वाले बेलन (cylinder) का आयतन क्या है?",
    "options_en": ["πr²h", "2πr²h", "(1/3)πr²h", "πr²h/2"],
    "options_hi": ["πr²h", "2πr²h", "(1/3)πr²h", "πr²h/2"],
    "answer_en": "πr²h",
    "answer_hi": "πr²h",
    "attempted": false
  },
  {
    "num": 12,
    "question_en": "What is the probability of drawing a red card from a deck of 52 cards?",
    "question_hi": "52 ताश के पत्तों में से एक लाल पत्ता (red card) निकालने की संभावना क्या है?",
    "options_en": ["26/52", "1/4", "1/2", "13/52"],
    "options_hi": ["26/52", "1/4", "1/2", "13/52"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 13,
    "question_en": "What is the value of the hypotenuse in a right triangle with legs 3 and 4?",
    "question_hi": "एक समकोण त्रिभुज की लंबाई 3 और 4 है, तो कर्ण (hypotenuse) का मान क्या होगा?",
    "options_en": ["5", "6", "4", "3"],
    "options_hi": ["5", "6", "4", "3"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false
  },
  {
    "num": 14,
    "question_en": "What is the value of tan(45°)?",
    "question_hi": "tan(45°) का मान क्या है?",
    "options_en": ["1", "0", "√3", "∞"],
    "options_hi": ["1", "0", "√3", "∞"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  },
  {
    "num": 15,
    "question_en": "What is the area of a sector with angle θ and radius r?",
    "question_hi": "कोण θ और त्रिज्या r वाले क्षेत्र का क्षेत्रफल क्या होगा?",
    "options_en": ["(θ/360) × πr²", "(1/2) × πr²", "(θ/180) × πr²", "(1/3) × πr²"],
    "options_hi": ["(θ/360) × πr²", "(1/2) × πr²", "(θ/180) × πr²", "(1/3) × πr²"],
    "answer_en": "(θ/360) × πr²",
    "answer_hi": "(θ/360) × πr²",
    "attempted": false
  },
  {
    "num": 16,
    "question_en": "What is the value of sin(30°)?",
    "question_hi": "sin(30°) का मान क्या है?",
    "options_en": ["1/2", "√3/2", "1", "0"],
    "options_hi": ["1/2", "√3/2", "1", "0"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 17,
    "question_en": "What is the value of cos(60°)?",
    "question_hi": "cos(60°) का मान क्या है?",
    "options_en": ["1/2", "√3/2", "1", "0"],
    "options_hi": ["1/2", "√3/2", "1", "0"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 18,
    "question_en": "What is the equation of a straight line passing through the origin with slope 2?",
    "question_hi": "जो रेखा मूल बिंदु से होकर गुजरती है और जिसकी ढलान (slope) 2 है, उसका समीकरण क्या है?",
    "options_en": ["y = 2x", "y = x", "y = 3x", "y = -2x"],
    "options_hi": ["y = 2x", "y = x", "y = 3x", "y = -2x"],
    "answer_en": "y = 2x",
    "answer_hi": "y = 2x",
    "attempted": false
  },
  {
    "num": 19,
    "question_en": "What is the sum of the angles in a triangle?",
    "question_hi": "त्रिभुज के कोणों का योग क्या होता है?",
    "options_en": ["180°", "360°", "90°", "270°"],
    "options_hi": ["180°", "360°", "90°", "270°"],
    "answer_en": "180°",
    "answer_hi": "180°",
    "attempted": false
  },
  {
    "num": 20,
    "question_en": "What is the perimeter of a square with side length s?",
    "question_hi": "यदि एक वर्ग का भुजा लंबाई s हो, तो उसका परिमाप (perimeter) क्या होगा?",
    "options_en": ["4s", "2s", "s²", "s"],
    "options_hi": ["4s", "2s", "s²", "s"],
    "answer_en": "4s",
    "answer_hi": "4s",
    "attempted": false
  },

  {
    "num": 21,
    "question_en": "What is the formula for the distance between two points (x₁, y₁) and (x₂, y₂) in a plane?",
    "question_hi": "एक समतल में दो बिंदुओं (x₁, y₁) और (x₂, y₂) के बीच की दूरी का सूत्र क्या है?",
    "options_en": ["√((x₂ - x₁)² + (y₂ - y₁)²)", "√((x₁ - x₂)² + (y₁ - y₂)²)", "(x₂ - x₁) + (y₂ - y₁)", "(x₂ - x₁)² + (y₂ - y₁)²"],
    "options_hi": ["√((x₂ - x₁)² + (y₂ - y₁)²)", "√((x₁ - x₂)² + (y₁ - y₂)²)", "(x₂ - x₁) + (y₂ - y₁)", "(x₂ - x₁)² + (y₂ - y₁)²"],
    "answer_en": "√((x₂ - x₁)² + (y₂ - y₁)²)",
    "answer_hi": "√((x₂ - x₁)² + (y₂ - y₁)²)",
    "attempted": false
  },
  {
    "num": 22,
    "question_en": "What is the equation of a circle with center (h, k) and radius r?",
    "question_hi": "केंद्र (h, k) और त्रिज्या r वाले वृत्त का समीकरण क्या है?",
    "options_en": ["(x - h)² + (y - k)² = r²", "(x + h)² + (y + k)² = r²", "(x - h)² + (y - k) = r", "(x + h)² + (y + k) = r"],
    "options_hi": ["(x - h)² + (y - k)² = r²", "(x + h)² + (y + k)² = r²", "(x - h)² + (y - k) = r", "(x + h)² + (y + k) = r"],
    "answer_en": "(x - h)² + (y - k)² = r²",
    "answer_hi": "(x - h)² + (y - k)² = r²",
    "attempted": false
  },
  {
    "num": 23,
    "question_en": "The sum of two angles is 90°. What are they called?",
    "question_hi": "दो कोणों का योग 90° है, उन्हें क्या कहा जाता है?",
    "options_en": ["Complementary angles", "Supplementary angles", "Adjacent angles", "Opposite angles"],
    "options_hi": ["पूरक कोण", "पूरक कोण", "सन्निकट कोण", "विपरीत कोण"],
    "answer_en": "Complementary angles",
    "answer_hi": "पूरक कोण",
    "attempted": false
  },
  {
    "num": 24,
    "question_en": "What is the sum of the angles of a quadrilateral?",
    "question_hi": "चतुर्भुज के कोणों का योग क्या होता है?",
    "options_en": ["360°", "180°", "90°", "270°"],
    "options_hi": ["360°", "180°", "90°", "270°"],
    "answer_en": "360°",
    "answer_hi": "360°",
    "attempted": false
  },
  {
    "num": 25,
    "question_en": "What is the value of sin(90°)?",
    "question_hi": "sin(90°) का मान क्या है?",
    "options_en": ["1", "0", "√3", "∞"],
    "options_hi": ["1", "0", "√3", "∞"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  },
  {
    "num": 26,
    "question_en": "What is the formula to calculate the surface area of a cylinder?",
    "question_hi": "एक बेलन (cylinder) का परिधीय क्षेत्रफल (surface area) निकालने का सूत्र क्या है?",
    "options_en": ["2πr(h + r)", "2πrh", "πr²h", "2πr²h"],
    "options_hi": ["2πr(h + r)", "2πrh", "πr²h", "2πr²h"],
    "answer_en": "2πr(h + r)",
    "answer_hi": "2πr(h + r)",
    "attempted": false
  },
  {
    "num": 27,
    "question_en": "What is the slope of the line y = 3x + 2?",
    "question_hi": "रेखा y = 3x + 2 का ढलान (slope) क्या है?",
    "options_en": ["3", "2", "1", "0"],
    "options_hi": ["3", "2", "1", "0"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false
  },
  {
    "num": 28,
    "question_en": "What is the value of cos(0°)?",
    "question_hi": "cos(0°) का मान क्या है?",
    "options_en": ["1", "0", "√3", "∞"],
    "options_hi": ["1", "0", "√3", "∞"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  },
  {
    "num": 29,
    "question_en": "Which of the following is the probability of an impossible event?",
    "question_hi": "निम्नलिखित में से एक असंभव घटना की संभावना (probability) क्या है?",
    "options_en": ["0", "1", "0.5", "1/2"],
    "options_hi": ["0", "1", "0.5", "1/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false
  },
  {
    "num": 30,
    "question_en": "What is the distance formula for two points in three-dimensional space?",
    "question_hi": "तीन-आयामी (3D) स्थान में दो बिंदुओं के बीच की दूरी का सूत्र क्या है?",
    "options_en": ["√((x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²)", "√((x₁ - x₂)² + (y₁ - y₂)² + (z₁ - z₂)²)", "(x₂ - x₁) + (y₂ - y₁) + (z₂ - z₁)", "(x₆ - x₁) + (y₆ - y₁) + (z₆ - z₁)"],
    "options_hi": ["√((x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²)", "√((x₁ - x₂)² + (y₁ - y₂)² + (z₁ - z₂)²)", "(x₂ - x₁) + (y₂ - y₁) + (z₂ - z₁)", "(x₆ - x₁) + (y₆ - y₁) + (z₆ - z₁)"],
    "answer_en": "√((x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²)",
    "answer_hi": "√((x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²)",
    "attempted": false
  },
  {
    "num": 31,
    "question_en": "What is the value of 2³?",
    "question_hi": "2³ का मान क्या है?",
    "options_en": ["8", "6", "4", "2"],
    "options_hi": ["8", "6", "4", "2"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false
  },
  {
    "num": 32,
    "question_en": "What is the volume of a sphere with radius r?",
    "question_hi": "त्रिज्या r वाले गोलाकार का आयतन क्या है?",
    "options_en": ["(4/3)πr³", "2πr³", "πr²h", "(1/3)πr³"],
    "options_hi": ["(4/3)πr³", "2πr³", "πr²h", "(1/3)πr³"],
    "answer_en": "(4/3)πr³",
    "answer_hi": "(4/3)πr³",
    "attempted": false
  },
  {
    "num": 33,
    "question_en": "What is the sum of the first 100 even numbers?",
    "question_hi": "पहली 100 सम संख्याओं का योग क्या है?",
    "options_en": ["10000", "5050", "10050", "10100"],
    "options_hi": ["10000", "5050", "10050", "10100"],
    "answer_en": "10000",
    "answer_hi": "10000",
    "attempted": false
  },
  {
    "num": 34,
    "question_en": "What is the perimeter of a circle?",
    "question_hi": "वृत्त का परिधि (perimeter) क्या है?",
    "options_en": ["2πr", "πr²", "πd", "2πr²"],
    "options_hi": ["2πr", "πr²", "πd", "2πr²"],
    "answer_en": "2πr",
    "answer_hi": "2πr",
    "attempted": false
  },
  {
    "num": 35,
    "question_en": "What is the solution to the equation 5x - 3 = 12?",
    "question_hi": "समीकरण 5x - 3 = 12 का हल क्या है?",
    "options_en": ["x = 3", "x = 2", "x = 4", "x = 5"],
    "options_hi": ["x = 3", "x = 2", "x = 4", "x = 5"],
    "answer_en": "x = 3",
    "answer_hi": "x = 3",
    "attempted": false
  },
  {
    "num": 36,
    "question_en": "What is the value of tan(60°)?",
    "question_hi": "tan(60°) का मान क्या है?",
    "options_en": ["√3", "1", "0", "√2"],
    "options_hi": ["√3", "1", "0", "√2"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false
  },
  {
    "num": 37,
    "question_en": "What is the sum of the angles of a polygon with 8 sides?",
    "question_hi": "एक 8-भुजीय बहुभुज के कोणों का योग क्या होगा?",
    "options_en": ["1080°", "720°", "360°", "180°"],
    "options_hi": ["1080°", "720°", "360°", "180°"],
    "answer_en": "1080°",
    "answer_hi": "1080°",
    "attempted": false
  }
  ,

  {
    "num": 38,
    "question_en": "What is the value of sin(30°)?",
    "question_hi": "sin(30°) का मान क्या है?",
    "options_en": ["1/2", "√3/2", "1", "0"],
    "options_hi": ["1/2", "√3/2", "1", "0"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false
  },
  {
    "num": 39,
    "question_en": "What is the solution to the equation x² - 4 = 0?",
    "question_hi": "समीकरण x² - 4 = 0 का हल क्या है?",
    "options_en": ["x = 2", "x = -2", "x = ±2", "x = 4"],
    "options_hi": ["x = 2", "x = -2", "x = ±2", "x = 4"],
    "answer_en": "x = ±2",
    "answer_hi": "x = ±2",
    "attempted": false
  },
  {
    "num": 40,
    "question_en": "What is the sum of the first 10 terms of an arithmetic progression with a common difference of 3?",
    "question_hi": "समानांतर श्रेणी (arithmetic progression) में 10 पहला पदों का योग क्या होगा, यदि सामान्य अंतर (common difference) 3 है?",
    "options_en": ["150", "120", "100", "90"],
    "options_hi": ["150", "120", "100", "90"],
    "answer_en": "150",
    "answer_hi": "150",
    "attempted": false
  },
  {
    "num": 41,
    "question_en": "What is the area of a triangle with base b and height h?",
    "question_hi": "यदि एक त्रिभुज की आधार b और ऊँचाई h हो, तो उसका क्षेत्रफल (area) क्या होगा?",
    "options_en": ["1/2 bh", "bh", "b²", "h²"],
    "options_hi": ["1/2 bh", "bh", "b²", "h²"],
    "answer_en": "1/2 bh",
    "answer_hi": "1/2 bh",
    "attempted": false
  },
  {
    "num": 42,
    "question_en": "What is the length of the diagonal of a square with side length a?",
    "question_hi": "यदि एक वर्ग का भुजा लंबाई a हो, तो उसका विकर्ण (diagonal) का लंबाई क्या होगी?",
    "options_en": ["a√2", "a", "2a", "a/2"],
    "options_hi": ["a√2", "a", "2a", "a/2"],
    "answer_en": "a√2",
    "answer_hi": "a√2",
    "attempted": false
  },
  {
    "num": 43,
    "question_en": "What is the perimeter of a rectangle with length l and breadth b?",
    "question_hi": "यदि एक आयत (rectangle) का लंबाई l और चौड़ाई b हो, तो उसका परिमाप (perimeter) क्या होगा?",
    "options_en": ["2(l + b)", "l + b", "2lb", "l² + b²"],
    "options_hi": ["2(l + b)", "l + b", "2lb", "l² + b²"],
    "answer_en": "2(l + b)",
    "answer_hi": "2(l + b)",
    "attempted": false
  },
  {
    "num": 44,
    "question_en": "What is the formula to calculate the surface area of a sphere?",
    "question_hi": "गोलाकार (sphere) का परिधीय क्षेत्रफल (surface area) निकालने का सूत्र क्या है?",
    "options_en": ["4πr²", "2πr²", "4πr³", "2πr³"],
    "options_hi": ["4πr²", "2πr²", "4πr³", "2πr³"],
    "answer_en": "4πr²",
    "answer_hi": "4πr²",
    "attempted": false
  },
  {
    "num": 45,
    "question_en": "What is the solution to the equation 3x + 5 = 11?",
    "question_hi": "समीकरण 3x + 5 = 11 का हल क्या है?",
    "options_en": ["x = 2", "x = 1", "x = 3", "x = -2"],
    "options_hi": ["x = 2", "x = 1", "x = 3", "x = -2"],
    "answer_en": "x = 2",
    "answer_hi": "x = 2",
    "attempted": false
  },
  {
    "num": 46,
    "question_en": "What is the formula for the area of a circle?",
    "question_hi": "वृत्त का क्षेत्रफल (area) निकालने का सूत्र क्या है?",
    "options_en": ["πr²", "2πr", "πd", "2πr²"],
    "options_hi": ["πr²", "2πr", "πd", "2πr²"],
    "answer_en": "πr²",
    "answer_hi": "πr²",
    "attempted": false
  },
  {
    "num": 47,
    "question_en": "What is the value of tan(45°)?",
    "question_hi": "tan(45°) का मान क्या है?",
    "options_en": ["1", "0", "√3", "∞"],
    "options_hi": ["1", "0", "√3", "∞"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false
  },
  {
    "num": 48,
    "question_en": "What is the value of cot(90°)?",
    "question_hi": "cot(90°) का मान क्या है?",
    "options_en": ["0", "1", "∞", "√3"],
    "options_hi": ["0", "1", "∞", "√3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false
  },
  {
    "num": 49,
    "question_en": "What is the volume of a cone with radius r and height h?",
    "question_hi": "त्रिज्या r और ऊँचाई h वाले शंकु (cone) का आयतन (volume) क्या है?",
    "options_en": ["(1/3)πr²h", "πr²h", "(1/2)πr²h", "(1/4)πr²h"],
    "options_hi": ["(1/3)πr²h", "πr²h", "(1/2)πr²h", "(1/4)πr²h"],
    "answer_en": "(1/3)πr²h",
    "answer_hi": "(1/3)πr²h",
    "attempted": false
  },
  {
    "num": 50,
    "question_en": "What is the discriminant of the quadratic equation ax² + bx + c = 0?",
    "question_hi": "क्वाड्रेटिक समीकरण ax² + bx + c = 0 का विवेचन (discriminant) क्या है?",
    "options_en": ["b² - 4ac", "b² + 4ac", "4ac - b²", "b² - 2ac"],
    "options_hi": ["b² - 4ac", "b² + 4ac", "4ac - b²", "b² - 2ac"],
    "answer_en": "b² - 4ac",
    "answer_hi": "b² - 4ac",
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
