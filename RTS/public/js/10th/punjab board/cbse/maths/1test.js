
const questions = [

        
  
  {
    "num": 1,
    "question_en": "What is the value of √2?",
    "question_hi": "√2 का मान क्या होगा?",
    "options_en": ["1.41", "1.51", "2.41", "2.51"],
    "options_hi": ["1.41", "1.51", "2.41", "2.51"],
    "answer_en": "1.41",
    "answer_hi": "1.41",
    "attempted": false
  },
  {
    "num": 2,
    "question_en": "What is the sum of 3x + 2x?",
    "question_hi": "3x + 2x का योग क्या होगा?",
    "options_en": ["5x", "6x", "7x", "4x"],
    "options_hi": ["5x", "6x", "7x", "4x"],
    "answer_en": "5x",
    "answer_hi": "5x",
    "attempted": false
  },
  {
    "num": 3,
    "question_en": "The product of zero and any number is",
    "question_hi": "किसी भी संख्या का शून्य से गुणा क्या होगा?",
    "options_en": ["0", "1", "the number itself", "undefined"],
    "options_hi": ["0", "1", "स्वयं संख्या", "अपरिभाषित"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false
  },
  {
    "num": 4,
    "question_en": "Which of the following is the formula for the area of a triangle?",
    "question_hi": "त्रिकोण का क्षेत्रफल निकालने का सूत्र क्या है?",
    "options_en": ["1/2 × base × height", "base × height", "side × side", "side × height"],
    "options_hi": ["1/2 × आधार × ऊँचाई", "आधार × ऊँचाई", "भुजा × भुजा", "भुजा × ऊँचाई"],
    "answer_en": "1/2 × base × height",
    "answer_hi": "1/2 × आधार × ऊँचाई",
    "attempted": false
  },
  {
    "num": 5,
    "question_en": "What is the sum of angles of a triangle?",
    "question_hi": "त्रिकोण के कोणों का योग क्या होता है?",
    "options_en": ["180°", "360°", "90°", "120°"],
    "options_hi": ["180°", "360°", "90°", "120°"],
    "answer_en": "180°",
    "answer_hi": "180°",
    "attempted": false
  },
  {
    "num": 6,
    "question_en": "The distance formula between points (x₁, y₁) and (x₂, y₂) is",
    "question_hi": "(x₁, y₁) और (x₂, y₂) बिंदुओं के बीच की दूरी का सूत्र क्या है?",
    "options_en": ["√((x₂ - x₁)² + (y₂ - y₁)²)", "√(x₁ + x₂)² + (y₁ + y₂)", "(x₂ - x₁)² + (y₂ - y₁)", "(x₁ - x₂) + (y₁ - y₂)"],
    "options_hi": ["√((x₂ - x₁)² + (y₂ - y₁)²)", "√(x₁ + x₂)² + (y₁ + y₂)", "(x₂ - x₁)² + (y₂ - y₁)", "(x₁ - x₂) + (y₁ - y₂)"],
    "answer_en": "√((x₂ - x₁)² + (y₂ - y₁)²)",
    "answer_hi": "√((x₂ - x₁)² + (y₂ - y₁)²)",
    "attempted": false
  },
  {
    "num": 7,
    "question_en": "Which of the following is the formula for the area of a circle?",
    "question_hi": "वृत्त का क्षेत्रफल निकालने का सूत्र क्या है?",
    "options_en": ["πr²", "2πr", "πd", "πr"],
    "options_hi": ["πr²", "2πr", "πd", "πr"],
    "answer_en": "πr²",
    "answer_hi": "πr²",
    "attempted": false
  },
  {
    "num": 8,
    "question_en": "If the quadratic equation is x² + 6x + 9 = 0, the roots are",
    "question_hi": "यदि द्विघात समीकरण x² + 6x + 9 = 0 है, तो मूल क्या होंगे?",
    "options_en": ["-3, -3", "3, 3", "0, 9", "1, 2"],
    "options_hi": ["-3, -3", "3, 3", "0, 9", "1, 2"],
    "answer_en": "-3, -3",
    "answer_hi": "-3, -3",
    "attempted": false
  },
  {
    "num": 9,
    "question_en": "What is the sum of the first n natural numbers?",
    "question_hi": "पहली n प्राकृतिक संख्याओं का योग क्या होगा?",
    "options_en": ["n(n + 1)/2", "n²", "n + 1", "n² + 1"],
    "options_hi": ["n(n + 1)/2", "n²", "n + 1", "n² + 1"],
    "answer_en": "n(n + 1)/2",
    "answer_hi": "n(n + 1)/2",
    "attempted": false
  },
  {
    "num": 10,
    "question_en": "What is the area of a square with side 4 cm?",
    "question_hi": "4 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या होगा?",
    "options_en": ["16 cm²", "12 cm²", "14 cm²", "20 cm²"],
    "options_hi": ["16 सेमी²", "12 सेमी²", "14 सेमी²", "20 सेमी²"],
    "answer_en": "16 cm²",
    "answer_hi": "16 सेमी²",
    "attempted": false
  },
  {
    "num": 11,
    "question_en": "What is the solution to the linear equation 5x - 10 = 20?",
    "question_hi": "समीकरण 5x - 10 = 20 का हल क्या होगा?",
    "options_en": ["x = 6", "x = 5", "x = 7", "x = 8"],
    "options_hi": ["x = 6", "x = 5", "x = 7", "x = 8"],
    "answer_en": "x = 6",
    "answer_hi": "x = 6",
    "attempted": false
  },
  {
    "num": 12,
    "question_en": "The angle between the hour hand and minute hand at 12:00 is",
    "question_hi": "12:00 बजे घंटे की सुई और मिनट की सुई के बीच कोण क्या होगा?",
    "options_en": ["0°", "90°", "180°", "60°"],
    "options_hi": ["0°", "90°", "180°", "60°"],
    "answer_en": "0°",
    "answer_hi": "0°",
    "attempted": false
  },
  {
    "num": 13,
    "question_en": "Which of the following is the formula for the volume of a cylinder?",
    "question_hi": "सिलेंडर के आयतन का सूत्र क्या है?",
    "options_en": ["πr²h", "2πr", "πdh", "2πrh"],
    "options_hi": ["πr²h", "2πr", "πdh", "2πrh"],
    "answer_en": "πr²h",
    "answer_hi": "πr²h",
    "attempted": false
  },
  {
    "num": 14,
    "question_en": "The sum of the first 5 terms of the arithmetic progression 2, 5, 8, 11,... is",
    "question_hi": "सांख्यिक प्रगति 2, 5, 8, 11,... के पहले 5 पदों का योग क्या होगा?",
    "options_en": ["35", "45", "50", "55"],
    "options_hi": ["35", "45", "50", "55"],
    "answer_en": "35",
    "answer_hi": "35",
    "attempted": false
  },
  {
    "num": 15,
    "question_en": "What is the value of sin 45°?",
    "question_hi": "sin 45° का मान क्या है?",
    "options_en": ["1/√2", "1/2", "√2", "√3"],
    "options_hi": ["1/√2", "1/2", "√2", "√3"],
    "answer_en": "1/√2",
    "answer_hi": "1/√2",
    "attempted": false
  },
  {
    "num": 16,
    "question_en": "What is the perimeter of a square with side 6 cm?",
    "question_hi": "6 सेमी भुजा वाले वर्ग का परिधि क्या होगा?",
    "options_en": ["24 cm", "36 cm", "12 cm", "48 cm"],
    "options_hi": ["24 सेमी", "36 सेमी", "12 सेमी", "48 सेमी"],
    "answer_en": "24 cm",
    "answer_hi": "24 सेमी",
    "attempted": false
  },
  {
    "num": 17,
    "question_en": "Which of the following is the formula for the area of a trapezium?",
    "question_hi": "समलंब चतुर्भुज का क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["(1/2)(a + b)h", "(1/2)ab", "(1/3)ah", "(1/4)(a + b)h"],
    "options_hi": ["(1/2)(a + b)h", "(1/2)ab", "(1/3)ah", "(1/4)(a + b)h"],
    "answer_en": "(1/2)(a + b)h",
    "answer_hi": "(1/2)(a + b)h",
    "attempted": false
  },
  {
    "num": 18,
    "question_en": "The area of a rhombus with diagonals 6 cm and 8 cm is",
    "question_hi": "6 सेमी और 8 सेमी विकर्णों वाले समचतुर्भुज का क्षेत्रफल क्या होगा?",
    "options_en": ["24 cm²", "48 cm²", "36 cm²", "12 cm²"],
    "options_hi": ["24 सेमी²", "48 सेमी²", "36 सेमी²", "12 सेमी²"],
    "answer_en": "24 cm²",
    "answer_hi": "24 सेमी²",
    "attempted": false
  },
  {
    "num": 19,
    "question_en": "The value of tan 60° is",
    "question_hi": "tan 60° का मान क्या है?",
    "options_en": ["√3", "1", "1/√3", "2"],
    "options_hi": ["√3", "1", "1/√3", "2"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false
  },
  {
    "num": 20,
    "question_en": "What is the volume of a cone with radius 3 cm and height 4 cm?",
    "question_hi": "3 सेमी त्रिज्या और 4 सेमी ऊँचाई वाले शंकु का आयतन क्या होगा?",
    "options_en": ["12π cm³", "6π cm³", "9π cm³", "18π cm³"],
    "options_hi": ["12π सेमी³", "6π सेमी³", "9π सेमी³", "18π सेमी³"],
    "answer_en": "12π cm³",
    "answer_hi": "12π सेमी³",
    "attempted": false
  },
  
    {
      "num": 21,
      "question_en": "What is the perimeter of a rectangle with length 8 cm and breadth 6 cm?",
      "question_hi": "8 सेमी लंबाई और 6 सेमी चौड़ाई वाले आयत का परिधि क्या होगा?",
      "options_en": ["28 cm", "40 cm", "48 cm", "30 cm"],
      "options_hi": ["28 सेमी", "40 सेमी", "48 सेमी", "30 सेमी"],
      "answer_en": "28 cm",
      "answer_hi": "28 सेमी",
      "attempted": false
    },
    {
      "num": 22,
      "question_en": "What is the solution of the equation 2x + 5 = 15?",
      "question_hi": "समीकरण 2x + 5 = 15 का हल क्या होगा?",
      "options_en": ["x = 5", "x = 6", "x = 7", "x = 4"],
      "options_hi": ["x = 5", "x = 6", "x = 7", "x = 4"],
      "answer_en": "x = 5",
      "answer_hi": "x = 5",
      "attempted": false
    },
    {
      "num": 23,
      "question_en": "The area of a circle with radius 7 cm is",
      "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["49π cm²", "14π cm²", "42π cm²", "28π cm²"],
      "options_hi": ["49π सेमी²", "14π सेमी²", "42π सेमी²", "28π सेमी²"],
      "answer_en": "49π cm²",
      "answer_hi": "49π सेमी²",
      "attempted": false
    },
    {
      "num": 24,
      "question_en": "The sum of the interior angles of a quadrilateral is",
      "question_hi": "चतुर्भुज के आंतरिक कोणों का योग क्या होता है?",
      "options_en": ["360°", "180°", "90°", "270°"],
      "options_hi": ["360°", "180°", "90°", "270°"],
      "answer_en": "360°",
      "answer_hi": "360°",
      "attempted": false
    },
    {
      "num": 25,
      "question_en": "The height of a triangle is 8 cm and the base is 10 cm. The area of the triangle is",
      "question_hi": "एक त्रिकोण की ऊँचाई 8 सेमी और आधार 10 सेमी है। त्रिकोण का क्षेत्रफल क्या होगा?",
      "options_en": ["40 cm²", "50 cm²", "80 cm²", "60 cm²"],
      "options_hi": ["40 सेमी²", "50 सेमी²", "80 सेमी²", "60 सेमी²"],
      "answer_en": "40 cm²",
      "answer_hi": "40 सेमी²",
      "attempted": false
    },
    {
      "num": 26,
      "question_en": "If tan A = 1, what is the value of A?",
      "question_hi": "यदि tan A = 1, तो A का मान क्या होगा?",
      "options_en": ["45°", "60°", "30°", "90°"],
      "options_hi": ["45°", "60°", "30°", "90°"],
      "answer_en": "45°",
      "answer_hi": "45°",
      "attempted": false
    },
    {
      "num": 27,
      "question_en": "The volume of a sphere with radius 4 cm is",
      "question_hi": "4 सेमी त्रिज्या वाले गोले का आयतन क्या होगा?",
      "options_en": ["(4/3)πr³", "(1/3)πr²", "(1/2)πr²", "(4/3)πr²"],
      "options_hi": ["(4/3)πr³", "(1/3)πr²", "(1/2)πr²", "(4/3)πr²"],
      "answer_en": "(4/3)πr³",
      "answer_hi": "(4/3)πr³",
      "attempted": false
    },
    {
      "num": 28,
      "question_en": "The probability of getting a head when a fair coin is tossed is",
      "question_hi": "जब एक निष्पक्ष सिक्का उछाला जाता है तो सिर आने की संभावना क्या होगी?",
      "options_en": ["1/2", "1/3", "1/4", "1"],
      "options_hi": ["1/2", "1/3", "1/4", "1"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 29,
      "question_en": "If the sides of a triangle are 5 cm, 12 cm, and 13 cm, the triangle is",
      "question_hi": "यदि एक त्रिकोण की भुजाएँ 5 सेमी, 12 सेमी और 13 सेमी हैं, तो वह त्रिकोण कैसा होगा?",
      "options_en": ["Right-angled", "Equilateral", "Scalene", "Isosceles"],
      "options_hi": ["दायाँ कोण त्रिकोण", "समान भुजा त्रिकोण", "असमान भुजा त्रिकोण", "समानांतर भुजा त्रिकोण"],
      "answer_en": "Right-angled",
      "answer_hi": "दायाँ कोण त्रिकोण",
      "attempted": false
    },
    {
      "num": 30,
      "question_en": "The formula for the area of a parallelogram is",
      "question_hi": "समलंब चतुर्भुज का क्षेत्रफल का सूत्र क्या है?",
      "options_en": ["base × height", "side × side", "length × breadth", "side × height"],
      "options_hi": ["आधार × ऊँचाई", "भुजा × भुजा", "लंबाई × चौड़ाई", "भुजा × ऊँचाई"],
      "answer_en": "base × height",
      "answer_hi": "आधार × ऊँचाई",
      "attempted": false
    },
    {
      "num": 31,
      "question_en": "What is the value of cos 30°?",
      "question_hi": "cos 30° का मान क्या है?",
      "options_en": ["√3/2", "1/2", "1", "√2/2"],
      "options_hi": ["√3/2", "1/2", "1", "√2/2"],
      "answer_en": "√3/2",
      "answer_hi": "√3/2",
      "attempted": false
    },
    {
      "num": 32,
      "question_en": "The area of a rectangle with length 10 cm and breadth 4 cm is",
      "question_hi": "10 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या होगा?",
      "options_en": ["40 cm²", "44 cm²", "50 cm²", "60 cm²"],
      "options_hi": ["40 सेमी²", "44 सेमी²", "50 सेमी²", "60 सेमी²"],
      "answer_en": "40 cm²",
      "answer_hi": "40 सेमी²",
      "attempted": false
    },
    {
      "num": 33,
      "question_en": "What is the value of sin 30°?",
      "question_hi": "sin 30° का मान क्या है?",
      "options_en": ["1/2", "√2/2", "1", "√3/2"],
      "options_hi": ["1/2", "√2/2", "1", "√3/2"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 34,
      "question_en": "What is the area of a sector with angle 90° and radius 7 cm?",
      "question_hi": "90° कोण और 7 सेमी त्रिज्या वाले क्षेत्रफल का क्षेत्रफल क्या होगा?",
      "options_en": ["49π/4 cm²", "49π/2 cm²", "49π cm²", "7π cm²"],
      "options_hi": ["49π/4 सेमी²", "49π/2 सेमी²", "49π सेमी²", "7π सेमी²"],
      "answer_en": "49π/4 cm²",
      "answer_hi": "49π/4 सेमी²",
      "attempted": false
    },
    {
      "num": 35,
      "question_en": "What is the surface area of a cube with side 5 cm?",
      "question_hi": "5 सेमी भुजा वाले घन का पृष्ठीय क्षेत्रफल क्या होगा?",
      "options_en": ["150 cm²", "125 cm²", "100 cm²", "75 cm²"],
      "options_hi": ["150 सेमी²", "125 सेमी²", "100 सेमी²", "75 सेमी²"],
      "answer_en": "150 cm²",
      "answer_hi": "150 सेमी²",
      "attempted": false
    },
    {
      "num": 36,
      "question_en": "The sum of 10 terms of an arithmetic progression with first term 2 and common difference 3 is",
      "question_hi": "सांख्यिक प्रगति के पहले 10 पदों का योग क्या होगा यदि पहली संख्या 2 और सामान्य अंतर 3 हो?",
      "options_en": ["150", "155", "160", "165"],
      "options_hi": ["150", "155", "160", "165"],
      "answer_en": "150",
      "answer_hi": "150",
      "attempted": false
    },
    {
      "num": 37,
      "question_en": "The volume of a cone with radius 5 cm and height 10 cm is",
      "question_hi": "5 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले शंकु का आयतन क्या होगा?",
      "options_en": ["(1/3)π(5)²(10)", "(1/2)π(5)²(10)", "(1/3)π(10)²(5)", "(1/4)π(5)²(10)"],
      "options_hi": ["(1/3)π(5)²(10)", "(1/2)π(5)²(10)", "(1/3)π(10)²(5)", "(1/4)π(5)²(10)"],
      "answer_en": "(1/3)π(5)²(10)",
      "answer_hi": "(1/3)π(5)²(10)",
      "attempted": false
    },
    {
      "num": 38,
      "question_en": "The radius of a circle is 7 cm. What is the length of an arc subtended by a central angle of 60°?",
      "question_hi": "7 सेमी त्रिज्या वाले वृत्त का 60° केंद्रीय कोण द्वारा उत्पन्न चाप की लंबाई क्या होगी?",
      "options_en": ["7π/3 cm", "7π/6 cm", "7π/2 cm", "7π cm"],
      "options_hi": ["7π/3 सेमी", "7π/6 सेमी", "7π/2 सेमी", "7π सेमी"],
      "answer_en": "7π/3 cm",
      "answer_hi": "7π/3 सेमी",
      "attempted": false
    },
    {
      "num": 39,
      "question_en": "What is the value of sin 45°?",
      "question_hi": "sin 45° का मान क्या है?",
      "options_en": ["1/√2", "√2/2", "1", "√3/2"],
      "options_hi": ["1/√2", "√2/2", "1", "√3/2"],
      "answer_en": "1/√2",
      "answer_hi": "1/√2",
      "attempted": false
    },
    {
      "num": 40,
      "question_en": "The perimeter of a circle with radius 7 cm is",
      "question_hi": "7 सेमी त्रिज्या वाले वृत्त की परिधि क्या होगी?",
      "options_en": ["14π cm", "7π cm", "21π cm", "2π cm"],
      "options_hi": ["14π सेमी", "7π सेमी", "21π सेमी", "2π सेमी"],
      "answer_en": "14π cm",
      "answer_hi": "14π सेमी",
      "attempted": false
    }
    ,
      {
        "num": 41,
        "question_en": "What is the value of sin 60°?",
        "question_hi": "sin 60° का मान क्या है?",
        "options_en": ["√3/2", "1/2", "1", "√2/2"],
        "options_hi": ["√3/2", "1/2", "1", "√2/2"],
        "answer_en": "√3/2",
        "answer_hi": "√3/2",
        "attempted": false
      },
      {
        "num": 42,
        "question_en": "The volume of a cylinder with radius 4 cm and height 5 cm is",
        "question_hi": "4 सेमी त्रिज्या और 5 सेमी ऊँचाई वाले बेलन का आयतन क्या होगा?",
        "options_en": ["80π cm³", "60π cm³", "100π cm³", "120π cm³"],
        "options_hi": ["80π सेमी³", "60π सेमी³", "100π सेमी³", "120π सेमी³"],
        "answer_en": "80π cm³",
        "answer_hi": "80π सेमी³",
        "attempted": false
      },
      {
        "num": 43,
        "question_en": "In a right-angled triangle, if the perpendicular is 6 cm and the base is 8 cm, the hypotenuse is",
        "question_hi": "एक समकोण त्रिकोण में यदि ऊर्ध्वाधर 6 सेमी और आधार 8 सेमी है, तो कर्ण क्या होगा?",
        "options_en": ["10 cm", "12 cm", "14 cm", "16 cm"],
        "options_hi": ["10 सेमी", "12 सेमी", "14 सेमी", "16 सेमी"],
        "answer_en": "10 cm",
        "answer_hi": "10 सेमी",
        "attempted": false
      },
      {
        "num": 44,
        "question_en": "The area of a triangle with base 12 cm and height 5 cm is",
        "question_hi": "12 सेमी आधार और 5 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या होगा?",
        "options_en": ["30 cm²", "35 cm²", "40 cm²", "45 cm²"],
        "options_hi": ["30 सेमी²", "35 सेमी²", "40 सेमी²", "45 सेमी²"],
        "answer_en": "30 cm²",
        "answer_hi": "30 सेमी²",
        "attempted": false
      },
      {
        "num": 45,
        "question_en": "The length of the diagonal of a square with side 5 cm is",
        "question_hi": "5 सेमी भुजा वाले वर्ग का विकर्ण क्या होगा?",
        "options_en": ["5√2 cm", "5√3 cm", "5 cm", "10 cm"],
        "options_hi": ["5√2 सेमी", "5√3 सेमी", "5 सेमी", "10 सेमी"],
        "answer_en": "5√2 cm",
        "answer_hi": "5√2 सेमी",
        "attempted": false
      },
      {
        "num": 46,
        "question_en": "The mean of the numbers 10, 20, 30, 40, 50 is",
        "question_hi": "संख्याएँ 10, 20, 30, 40, 50 का माध्य क्या होगा?",
        "options_en": ["30", "35", "40", "25"],
        "options_hi": ["30", "35", "40", "25"],
        "answer_en": "30",
        "answer_hi": "30",
        "attempted": false
      },
      {
        "num": 47,
        "question_en": "The formula for the area of a triangle is",
        "question_hi": "त्रिकोण का क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["(1/2) × base × height", "(1/3) × base × height", "(1/4) × base × height", "(1/5) × base × height"],
        "options_hi": ["(1/2) × आधार × ऊँचाई", "(1/3) × आधार × ऊँचाई", "(1/4) × आधार × ऊँचाई", "(1/5) × आधार × ऊँचाई"],
        "answer_en": "(1/2) × base × height",
        "answer_hi": "(1/2) × आधार × ऊँचाई",
        "attempted": false
      },
      {
        "num": 48,
        "question_en": "What is the value of cos 90°?",
        "question_hi": "cos 90° का मान क्या है?",
        "options_en": ["0", "1", "√2/2", "1/2"],
        "options_hi": ["0", "1", "√2/2", "1/2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false
      },
      {
        "num": 49,
        "question_en": "The length of a rectangle is 15 cm and its breadth is 8 cm. What is the area of the rectangle?",
        "question_hi": "एक आयत की लंबाई 15 सेमी और चौड़ाई 8 सेमी है। आयत का क्षेत्रफल क्या होगा?",
        "options_en": ["120 cm²", "130 cm²", "140 cm²", "150 cm²"],
        "options_hi": ["120 सेमी²", "130 सेमी²", "140 सेमी²", "150 सेमी²"],
        "answer_en": "120 cm²",
        "answer_hi": "120 सेमी²",
        "attempted": false
      },
      {
        "num": 50,
        "question_en": "The area of a sector with central angle 45° and radius 6 cm is",
        "question_hi": "45° केंद्रीय कोण और 6 सेमी त्रिज्या वाले क्षेत्रफल का क्षेत्रफल क्या होगा?",
        "options_en": ["9π cm²", "3π cm²", "6π cm²", "12π cm²"],
        "options_hi": ["9π सेमी²", "3π सेमी²", "6π सेमी²", "12π सेमी²"],
        "answer_en": "3π cm²",
        "answer_hi": "3π सेमी²",
        "attempted": false
      },
      {
        "num": 51,
        "question_en": "The perimeter of a regular hexagon with side 5 cm is",
        "question_hi": "5 सेमी भुजा वाले नियमित षट्कोण का परिधि क्या होगा?",
        "options_en": ["30 cm", "25 cm", "35 cm", "40 cm"],
        "options_hi": ["30 सेमी", "25 सेमी", "35 सेमी", "40 सेमी"],
        "answer_en": "30 cm",
        "answer_hi": "30 सेमी",
        "attempted": false
      },
      {
        "num": 52,
        "question_en": "The solution of the quadratic equation x² - 6x + 9 = 0 is",
        "question_hi": "द्विघात समीकरण x² - 6x + 9 = 0 का हल क्या होगा?",
        "options_en": ["x = 3", "x = -3", "x = 2", "x = -2"],
        "options_hi": ["x = 3", "x = -3", "x = 2", "x = -2"],
        "answer_en": "x = 3",
        "answer_hi": "x = 3",
        "attempted": false
      },
      {
        "num": 53,
        "question_en": "The surface area of a cylinder with radius 4 cm and height 10 cm is",
        "question_hi": "4 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले बेलन का पृष्ठीय क्षेत्रफल क्या होगा?",
        "options_en": ["80π cm²", "90π cm²", "100π cm²", "110π cm²"],
        "options_hi": ["80π सेमी²", "90π सेमी²", "100π सेमी²", "110π सेमी²"],
        "answer_en": "80π cm²",
        "answer_hi": "80π सेमी²",
        "attempted": false
      },
      {
        "num": 54,
        "question_en": "The mean of the numbers 2, 3, 5, 7, 11 is",
        "question_hi": "संख्याएँ 2, 3, 5, 7, 11 का माध्य क्या होगा?",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false
      },
      {
        "num": 55,
        "question_en": "The distance between two points (1, 2) and (4, 6) is",
        "question_hi": "दो बिंदुओं (1, 2) और (4, 6) के बीच की दूरी क्या होगी?",
        "options_en": ["5", "4", "3", "2"],
        "options_hi": ["5", "4", "3", "2"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false
      },
      {
        "num": 56,
        "question_en": "The value of log₁₀ 100 is",
        "question_hi": "log₁₀ 100 का मान क्या होगा?",
        "options_en": ["2", "3", "1", "10"],
        "options_hi": ["2", "3", "1", "10"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false
      },
      {
        "num": 57,
        "question_en": "The value of 2sin² 30° + cos² 30° is",
        "question_hi": "2sin² 30° + cos² 30° का मान क्या होगा?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false
      },
      {
        "num": 58,
        "question_en": "The equation of a line parallel to the x-axis is",
        "question_hi": "x-अक्ष के समानांतर एक रेखा का समीकरण क्या होगा?",
        "options_en": ["y = c", "x = c", "y = mx + c", "x = mx + c"],
        "options_hi": ["y = c", "x = c", "y = mx + c", "x = mx + c"],
        "answer_en": "y = c",
        "answer_hi": "y = c",
        "attempted": false
      },
      {
        "num": 59,
        "question_en": "The ratio of the area of a circle to the area of a square inscribed in it is",
        "question_hi": "एक वृत्त का क्षेत्रफल और उसमें अंकित वर्ग का क्षेत्रफल का अनुपात क्या होगा?",
        "options_en": ["π/4", "2/π", "1/2", "π/2"],
        "options_hi": ["π/4", "2/π", "1/2", "π/2"],
        "answer_en": "π/4",
        "answer_hi": "π/4",
        "attempted": false
      },
      {
        "num": 60,
        "question_en": "The median of the numbers 3, 7, 9, 15, 21 is",
        "question_hi": "संख्याओं 3, 7, 9, 15, 21 का माध्यिका क्या होगी?",
        "options_en": ["9", "10", "12", "13"],
        "options_hi": ["9", "10", "12", "13"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false
      }
    ,
    
      {
        "num": 61,
        "question_en": "The sum of the first 20 terms of an arithmetic progression is 200. If the first term is 5, the common difference is",
        "question_hi": "एक अंकगणितीय श्रेणी के पहले 20 पदों का योग 200 है। यदि पहला पद 5 है, तो समानांतर अंतर क्या होगा?",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false
      },
      {
        "num": 62,
        "question_en": "The discriminant of the quadratic equation x² + 2x + 1 = 0 is",
        "question_hi": "द्विघात समीकरण x² + 2x + 1 = 0 का विवेचनात्मक क्या होगा?",
        "options_en": ["0", "1", "2", "4"],
        "options_hi": ["0", "1", "2", "4"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false
      },
      {
        "num": 63,
        "question_en": "What is the value of tan 45°?",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["1", "0", "√3", "√2"],
        "options_hi": ["1", "0", "√3", "√2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false
      },
      {
        "num": 64,
        "question_en": "The area of a circle with radius 14 cm is",
        "question_hi": "14 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
        "options_en": ["196π cm²", "98π cm²", "49π cm²", "28π cm²"],
        "options_hi": ["196π सेमी²", "98π सेमी²", "49π सेमी²", "28π सेमी²"],
        "answer_en": "196π cm²",
        "answer_hi": "196π सेमी²",
        "attempted": false
      },
      {
        "num": 65,
        "question_en": "The area of a square is 81 cm². The perimeter of the square is",
        "question_hi": "एक वर्ग का क्षेत्रफल 81 सेमी² है। वर्ग की परिधि क्या होगी?",
        "options_en": ["36 cm", "72 cm", "45 cm", "54 cm"],
        "options_hi": ["36 सेमी", "72 सेमी", "45 सेमी", "54 सेमी"],
        "answer_en": "36 cm",
        "answer_hi": "36 सेमी",
        "attempted": false
      },
      {
        "num": 66,
        "question_en": "The volume of a cone with radius 7 cm and height 9 cm is",
        "question_hi": "7 सेमी त्रिज्या और 9 सेमी ऊँचाई वाले शंकु का आयतन क्या होगा?",
        "options_en": ["154π cm³", "168π cm³", "126π cm³", "180π cm³"],
        "options_hi": ["154π सेमी³", "168π सेमी³", "126π सेमी³", "180π सेमी³"],
        "answer_en": "154π cm³",
        "answer_hi": "154π सेमी³",
        "attempted": false
      },
      {
        "num": 67,
        "question_en": "The length of a tangent drawn from a point outside a circle to the circle is 5 cm. If the radius of the circle is 12 cm, then the distance from the point to the center of the circle is",
        "question_hi": "एक बिंदु से वृत्त तक खींची गई स्पर्श रेखा की लंबाई 5 सेमी है। यदि वृत्त का त्रिज्या 12 सेमी है, तो उस बिंदु से वृत्त के केंद्र की दूरी क्या होगी?",
        "options_en": ["13 cm", "17 cm", "15 cm", "10 cm"],
        "options_hi": ["13 सेमी", "17 सेमी", "15 सेमी", "10 सेमी"],
        "answer_en": "13 cm",
        "answer_hi": "13 सेमी",
        "attempted": false
      },
      {
        "num": 68,
        "question_en": "What is the value of sin 30°?",
        "question_hi": "sin 30° का मान क्या है?",
        "options_en": ["1/2", "1/√2", "√2/2", "√3/2"],
        "options_hi": ["1/2", "1/√2", "√2/2", "√3/2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false
      },
      {
        "num": 69,
        "question_en": "The area of a triangle with base 8 cm and height 6 cm is",
        "question_hi": "8 सेमी आधार और 6 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या होगा?",
        "options_en": ["24 cm²", "48 cm²", "32 cm²", "36 cm²"],
        "options_hi": ["24 सेमी²", "48 सेमी²", "32 सेमी²", "36 सेमी²"],
        "answer_en": "24 cm²",
        "answer_hi": "24 सेमी²",
        "attempted": false
      },
      {
        "num": 70,
        "question_en": "The radius of a sphere is 3 cm. The surface area of the sphere is",
        "question_hi": "3 सेमी त्रिज्या वाली गोलाकार का पृष्ठीय क्षेत्रफल क्या होगा?",
        "options_en": ["36π cm²", "48π cm²", "72π cm²", "54π cm²"],
        "options_hi": ["36π सेमी²", "48π सेमी²", "72π सेमी²", "54π सेमी²"],
        "answer_en": "36π cm²",
        "answer_hi": "36π सेमी²",
        "attempted": false
      },
      {
        "num": 71,
        "question_en": "In a class, 60% students passed the exam. If there are 200 students in the class, the number of students who failed the exam is",
        "question_hi": "एक कक्षा में, 60% छात्रों ने परीक्षा उत्तीर्ण की। यदि कक्षा में 200 छात्र हैं, तो परीक्षा में असफल छात्रों की संख्या क्या होगी?",
        "options_en": ["80", "100", "120", "140"],
        "options_hi": ["80", "100", "120", "140"],
        "answer_en": "80",
        "answer_hi": "80",
        "attempted": false
      },
      {
        "num": 72,
        "question_en": "The perimeter of a rhombus is 36 cm. If one side of the rhombus is 9 cm, the length of its diagonal is",
        "question_hi": "एक समलंबी आयत की परिधि 36 सेमी है। यदि समलंबी आयत की एक भुजा 9 सेमी है, तो उसका विकर्ण लंबाई क्या होगी?",
        "options_en": ["12 cm", "15 cm", "18 cm", "20 cm"],
        "options_hi": ["12 सेमी", "15 सेमी", "18 सेमी", "20 सेमी"],
        "answer_en": "12 cm",
        "answer_hi": "12 सेमी",
        "attempted": false
      },
      {
        "num": 73,
        "question_en": "What is the value of cos 0°?",
        "question_hi": "cos 0° का मान क्या है?",
        "options_en": ["0", "1", "√2/2", "√3/2"],
        "options_hi": ["0", "1", "√2/2", "√3/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false
      },
      {
        "num": 74,
        "question_en": "The area of a trapezium with parallel sides 8 cm and 12 cm, and height 6 cm is",
        "question_hi": "8 सेमी और 12 सेमी समांतर किनारे और 6 सेमी ऊँचाई वाले समलंब चतुर्भुज का क्षेत्रफल क्या होगा?",
        "options_en": ["60 cm²", "50 cm²", "40 cm²", "30 cm²"],
        "options_hi": ["60 सेमी²", "50 सेमी²", "40 सेमी²", "30 सेमी²"],
        "answer_en": "60 cm²",
        "answer_hi": "60 सेमी²",
        "attempted": false
      },
      {
        "num": 75,
        "question_en": "The sum of the angles of a hexagon is",
        "question_hi": "एक षट्कोण के कोणों का योग क्या होगा?",
        "options_en": ["720°", "360°", "540°", "1080°"],
        "options_hi": ["720°", "360°", "540°", "1080°"],
        "answer_en": "720°",
        "answer_hi": "720°",
        "attempted": false
      },
      {
        "num": 76,
        "question_en": "If the cost of 3 pencils is Rs. 12, the cost of 7 pencils is",
        "question_hi": "यदि 3 पेंसिलों की कीमत 12 रुपये है, तो 7 पेंसिलों की कीमत क्या होगी?",
        "options_en": ["Rs. 28", "Rs. 30", "Rs. 32", "Rs. 34"],
        "options_hi": ["रु. 28", "रु. 30", "रु. 32", "रु. 34"],
        "answer_en": "Rs. 28",
        "answer_hi": "रु. 28",
        "attempted": false
      },
      {
        "num": 77,
        "question_en": "What is the value of tan 60°?",
        "question_hi": "tan 60° का मान क्या है?",
        "options_en": ["√3", "1", "√2", "√3/2"],
        "options_hi": ["√3", "1", "√2", "√3/2"],
        "answer_en": "√3",
        "answer_hi": "√3",
        "attempted": false
      },
      {
        "num": 78,
        "question_en": "The diagonal of a square is 10√2 cm. The area of the square is",
        "question_hi": "एक वर्ग का विकर्ण 10√2 सेमी है। वर्ग का क्षेत्रफल क्या होगा?",
        "options_en": ["100 cm²", "50 cm²", "200 cm²", "150 cm²"],
        "options_hi": ["100 सेमी²", "50 सेमी²", "200 सेमी²", "150 सेमी²"],
        "answer_en": "100 cm²",
        "answer_hi": "100 सेमी²",
        "attempted": false
      },
      {
        "num": 79,
        "question_en": "What is the perimeter of a semicircle with radius 7 cm?",
        "question_hi": "7 सेमी त्रिज्या वाले अर्धवृत्त का परिधि क्या होगा?",
        "options_en": ["22 cm", "30 cm", "36 cm", "44 cm"],
        "options_hi": ["22 सेमी", "30 सेमी", "36 सेमी", "44 सेमी"],
        "answer_en": "22 cm",
        "answer_hi": "22 सेमी",
        "attempted": false
      },
      {
        "num": 80,
        "question_en": "The probability of getting an even number on a die is",
        "question_hi": "एक पासे पर सम संख्या आने की संभावना क्या है?",
        "options_en": ["1/2", "1/3", "1/6", "2/3"],
        "options_hi": ["1/2", "1/3", "1/6", "2/3"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false
      }
    ,
    
      {
        "num": 81,
        "question_en": "What is the sum of the interior angles of a triangle?",
        "question_hi": "एक त्रिकोण के आंतरिक कोणों का योग क्या होगा?",
        "options_en": ["90°", "180°", "360°", "270°"],
        "options_hi": ["90°", "180°", "360°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false
      },
      {
        "num": 82,
        "question_en": "What is the value of cos 90°?",
        "question_hi": "cos 90° का मान क्या है?",
        "options_en": ["0", "1", "√3/2", "1/2"],
        "options_hi": ["0", "1", "√3/2", "1/2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false
      },
      {
        "num": 83,
        "question_en": "The value of (x + 3)² is",
        "question_hi": "(x + 3)² का मान क्या होगा?",
        "options_en": ["x² + 9", "x² + 6x + 9", "x² + 6", "x² + 3x"],
        "options_hi": ["x² + 9", "x² + 6x + 9", "x² + 6", "x² + 3x"],
        "answer_en": "x² + 6x + 9",
        "answer_hi": "x² + 6x + 9",
        "attempted": false
      },
      {
        "num": 84,
        "question_en": "The roots of the quadratic equation x² - 5x + 6 = 0 are",
        "question_hi": "द्विघात समीकरण x² - 5x + 6 = 0 के मूल क्या होंगे?",
        "options_en": ["1 and 6", "2 and 3", "4 and 6", "1 and 5"],
        "options_hi": ["1 और 6", "2 और 3", "4 और 6", "1 और 5"],
        "answer_en": "2 and 3",
        "answer_hi": "2 और 3",
        "attempted": false
      },
      {
        "num": 85,
        "question_en": "The value of tan 45° is",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["0", "1", "√3", "√2"],
        "options_hi": ["0", "1", "√3", "√2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false
      },
      {
        "num": 86,
        "question_en": "In the equation x² + 2x + 1 = 0, the value of the discriminant is",
        "question_hi": "समीकरण x² + 2x + 1 = 0 में विवेचनात्मक का मान क्या होगा?",
        "options_en": ["1", "2", "0", "4"],
        "options_hi": ["1", "2", "0", "4"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false
      },
      {
        "num": 87,
        "question_en": "What is the value of sin 0°?",
        "question_hi": "sin 0° का मान क्या है?",
        "options_en": ["1", "0", "√2", "√3"],
        "options_hi": ["1", "0", "√2", "√3"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false
      },
      {
        "num": 88,
        "question_en": "What is the probability of drawing a red card from a deck of 52 cards?",
        "question_hi": "52 पत्तों के एक पैक से लाल पत्ता निकालने की संभावना क्या है?",
        "options_en": ["1/4", "1/2", "1/13", "1/26"],
        "options_hi": ["1/4", "1/2", "1/13", "1/26"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false
      },
      {
        "num": 89,
        "question_en": "The area of a circle with radius 10 cm is",
        "question_hi": "10 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
        "options_en": ["100π cm²", "50π cm²", "200π cm²", "150π cm²"],
        "options_hi": ["100π सेमी²", "50π सेमी²", "200π सेमी²", "150π सेमी²"],
        "answer_en": "100π cm²",
        "answer_hi": "100π सेमी²",
        "attempted": false
      },
      {
        "num": 90,
        "question_en": "The sum of the first 10 natural numbers is",
        "question_hi": "पहले 10 प्राकृतिक संख्याओं का योग क्या होगा?",
        "options_en": ["55", "45", "50", "60"],
        "options_hi": ["55", "45", "50", "60"],
        "answer_en": "55",
        "answer_hi": "55",
        "attempted": false
      },
      {
        "num": 91,
        "question_en": "The area of a square with side 5 cm is",
        "question_hi": "5 सेमी बगल वाले वर्ग का क्षेत्रफल क्या होगा?",
        "options_en": ["25 cm²", "20 cm²", "15 cm²", "30 cm²"],
        "options_hi": ["25 सेमी²", "20 सेमी²", "15 सेमी²", "30 सेमी²"],
        "answer_en": "25 cm²",
        "answer_hi": "25 सेमी²",
        "attempted": false
      },
      {
        "num": 92,
        "question_en": "The perimeter of a rectangle with length 6 cm and width 4 cm is",
        "question_hi": "6 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत की परिधि क्या होगी?",
        "options_en": ["20 cm", "18 cm", "24 cm", "28 cm"],
        "options_hi": ["20 सेमी", "18 सेमी", "24 सेमी", "28 सेमी"],
        "answer_en": "20 cm",
        "answer_hi": "20 सेमी",
        "attempted": false
      },
      {
        "num": 93,
        "question_en": "The volume of a cube with side 4 cm is",
        "question_hi": "4 सेमी बगल वाले घन का आयतन क्या होगा?",
        "options_en": ["64 cm³", "16 cm³", "48 cm³", "36 cm³"],
        "options_hi": ["64 सेमी³", "16 सेमी³", "48 सेमी³", "36 सेमी³"],
        "answer_en": "64 cm³",
        "answer_hi": "64 सेमी³",
        "attempted": false
      },
      {
        "num": 94,
        "question_en": "The probability of getting a number greater than 3 on a die is",
        "question_hi": "एक पासे पर 3 से बड़ा संख्या आने की संभावना क्या है?",
        "options_en": ["1/2", "1/3", "1/6", "2/3"],
        "options_hi": ["1/2", "1/3", "1/6", "2/3"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false
      },
      {
        "num": 95,
        "question_en": "The equation of the line passing through (1, 2) and (3, 4) is",
        "question_hi": "(1, 2) और (3, 4) से गुजरने वाली रेखा का समीकरण क्या होगा?",
        "options_en": ["x + y = 3", "x - y = 1", "x + 2y = 5", "2x + y = 7"],
        "options_hi": ["x + y = 3", "x - y = 1", "x + 2y = 5", "2x + y = 7"],
        "answer_en": "x + y = 3",
        "answer_hi": "x + y = 3",
        "attempted": false
      },
      {
        "num": 96,
        "question_en": "The radius of a circle is 7 cm. The circumference of the circle is",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का परिधि क्या होगा?",
        "options_en": ["14π cm", "28π cm", "44π cm", "22π cm"],
        "options_hi": ["14π सेमी", "28π सेमी", "44π सेमी", "22π सेमी"],
        "answer_en": "14π cm",
        "answer_hi": "14π सेमी",
        "attempted": false
      },
      {
        "num": 97,
        "question_en": "The area of a sector of angle 90° of a circle of radius 10 cm is",
        "question_hi": "10 सेमी त्रिज्या वाले वृत्त के 90° कोण वाले क्षेत्रफल का क्षेत्रफल क्या होगा?",
        "options_en": ["50π cm²", "25π cm²", "100π cm²", "75π cm²"],
        "options_hi": ["50π सेमी²", "25π सेमी²", "100π सेमी²", "75π सेमी²"],
        "answer_en": "25π cm²",
        "answer_hi": "25π सेमी²",
        "attempted": false
      },
      {
        "num": 98,
        "question_en": "The cost of 5 pencils is Rs. 20. The cost of 12 pencils is",
        "question_hi": "5 पेंसिलों की कीमत 20 रुपये है। 12 पेंसिलों की कीमत क्या होगी?",
        "options_en": ["Rs. 40", "Rs. 48", "Rs. 60", "Rs. 72"],
        "options_hi": ["रु. 40", "रु. 48", "रु. 60", "रु. 72"],
        "answer_en": "Rs. 48",
        "answer_hi": "रु. 48",
        "attempted": false
      },
      {
        "num": 99,
        "question_en": "What is the probability of drawing a black card from a deck of 52 cards?",
        "question_hi": "52 पत्तों के एक पैक से काले पत्ते निकालने की संभावना क्या है?",
        "options_en": ["1/4", "1/2", "1/13", "1/26"],
        "options_hi": ["1/4", "1/2", "1/13", "1/26"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false
      },
      {
        "num": 100,
        "question_en": "The angle between the hour hand and the minute hand at 3:00 is",
        "question_hi": "3:00 बजे घंटे की सुई और मिनट की सुई के बीच कोण क्या होगा?",
        "options_en": ["90°", "60°", "120°", "180°"],
        "options_hi": ["90°", "60°", "120°", "180°"],
        "answer_en": "90°",
        "answer_hi": "90°",
        "attempted": false
      }
    ,
    
    
    
  
  

                               
                    
            
            


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
