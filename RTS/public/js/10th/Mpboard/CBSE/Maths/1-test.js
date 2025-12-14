const questions = [


    {
        "num": 1,
        "question_en": "What is the derivative of the function f(x) = 3x² + 5x - 2?",
        "question_hi": "समीकरण f(x) = 3x² + 5x - 2 का अवकलज क्या है?",
        "options_en": ["6x + 5", "6x - 5", "3x + 5", "3x - 5"],
        "options_hi": ["6x + 5", "6x - 5", "3x + 5", "3x - 5"],
        "answer": "6x + 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the value of sin(30°)?",
        "question_hi": "sin(30°) का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1", "√2/2"],
        "options_hi": ["1/2", "√3/2", "1", "√2/2"],
        "answer": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Find the roots of the equation x² - 5x + 6 = 0.",
        "question_hi": "समीकरण x² - 5x + 6 = 0 की मूलमूल (roots) क्या हैं?",
        "options_en": ["1, 6", "2, 3", "1, 5", "2, 4"],
        "options_hi": ["1, 6", "2, 3", "1, 5", "2, 4"],
        "answer": "2, 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the area of a circle with radius 7 cm?",
        "question_hi": "व्यास 7 सेमी वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["49π cm²", "14π cm²", "7π cm²", "21π cm²"],
        "options_hi": ["49π cm²", "14π cm²", "7π cm²", "21π cm²"],
        "answer": "49π cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the perimeter of a rectangle with length 5 cm and width 3 cm?",
        "question_hi": "5 सेमी लंबाई और 3 सेमी चौड़ाई वाले आयत का परिधि क्या है?",
        "options_en": ["16 cm", "20 cm", "15 cm", "18 cm"],
        "options_hi": ["16 cm", "20 cm", "15 cm", "18 cm"],
        "answer": "16 cm",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 6,
        "question_en": "What is the value of cos(60°)?",
        "question_hi": "cos(60°) का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1", "√2/2"],
        "options_hi": ["1/2", "√3/2", "1", "√2/2"],
        "answer": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Find the value of tan(45°).",
        "question_hi": "tan(45°) का मान क्या है?",
        "options_en": ["1", "0", "√2", "∞"],
        "options_hi": ["1", "0", "√2", "∞"],
        "answer": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the value of 2³?",
        "question_hi": "2³ का मान क्या है?",
        "options_en": ["6", "8", "4", "2"],
        "options_hi": ["6", "8", "4", "2"],
        "answer": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the solution of the equation 2x + 5 = 15?",
        "question_hi": "समीकरण 2x + 5 = 15 का हल क्या है?",
        "options_en": ["x = 5", "x = 10", "x = 2", "x = 7"],
        "options_hi": ["x = 5", "x = 10", "x = 2", "x = 7"],
        "answer": "x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the surface area of a cube with side length 4 cm?",
        "question_hi": "4 सेमी किनारे वाले घन का क्षेत्रफल क्या है?",
        "options_en": ["96 cm²", "64 cm²", "48 cm²", "80 cm²"],
        "options_hi": ["96 cm²", "64 cm²", "48 cm²", "80 cm²"],
        "answer": "96 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Find the value of log₁₀ 100.",
        "question_hi": "log₁₀ 100 का मान क्या है?",
        "options_en": ["2", "3", "1", "10"],
        "options_hi": ["2", "3", "1", "10"],
        "answer": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Find the volume of a cylinder with radius 3 cm and height 5 cm.",
        "question_hi": "3 सेमी त्रिज्या और 5 सेमी ऊँचाई वाले बेलन का आयतन क्या है?",
        "options_en": ["45π cm³", "30π cm³", "60π cm³", "20π cm³"],
        "options_hi": ["45π cm³", "30π cm³", "60π cm³", "20π cm³"],
        "answer": "45π cm³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the perimeter of an equilateral triangle with side length 6 cm?",
        "question_hi": "6 सेमी किनारे वाले समबाहु त्रिकोण का परिधि क्या है?",
        "options_en": ["18 cm", "12 cm", "15 cm", "10 cm"],
        "options_hi": ["18 cm", "12 cm", "15 cm", "10 cm"],
        "answer": "18 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Find the area of a triangle with base 5 cm and height 8 cm.",
        "question_hi": "5 सेमी आधार और 8 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या है?",
        "options_en": ["20 cm²", "40 cm²", "10 cm²", "16 cm²"],
        "options_hi": ["20 cm²", "40 cm²", "10 cm²", "16 cm²"],
        "answer": "20 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the distance between the points (3, 4) and (6, 8)?",
        "question_hi": "(3, 4) और (6, 8) बिंदुओं के बीच की दूरी क्या है?",
        "options_en": ["5", "4", "3", "2"],
        "options_hi": ["5", "4", "3", "2"],
        "answer": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the value of √49?",
        "question_hi": "√49 का मान क्या है?",
        "options_en": ["7", "8", "6", "5"],
        "options_hi": ["7", "8", "6", "5"],
        "answer": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the volume of a sphere with radius 3 cm?",
        "question_hi": "3 सेमी त्रिज्या वाले गोले का आयतन क्या है?",
        "options_en": ["36π cm³", "81π cm³", "27π cm³", "12π cm³"],
        "options_hi": ["36π cm³", "81π cm³", "27π cm³", "12π cm³"],
        "answer": "36π cm³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Find the slope of the line passing through points (2, 3) and (4, 7).",
        "question_hi": "(2, 3) और (4, 7) बिंदुओं से गुजरने वाली रेखा की ढाल क्या है?",
        "options_en": ["2", "1", "4", "3"],
        "options_hi": ["2", "1", "4", "3"],
        "answer": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the value of 3⁰?",
        "question_hi": "3⁰ का मान क्या है?",
        "options_en": ["1", "0", "3", "9"],
        "options_hi": ["1", "0", "3", "9"],
        "answer": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the area of a circle with radius 7 cm?",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["49π cm²", "14π cm²", "7π cm²", "21π cm²"],
        "options_hi": ["49π cm²", "14π cm²", "7π cm²", "21π cm²"],
        "answer": "49π cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the value of 2x + 4 = 12?",
        "question_hi": "समीकरण 2x + 4 = 12 का हल क्या है?",
        "options_en": ["x = 4", "x = 3", "x = 5", "x = 6"],
        "options_hi": ["x = 4", "x = 3", "x = 5", "x = 6"],
        "answer": "x = 4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Find the mean of the numbers 4, 5, 6, 7, 8.",
        "question_hi": "संख्याओं 4, 5, 6, 7, 8 का औसत क्या है?",
        "options_en": ["6", "7", "5", "4"],
        "options_hi": ["6", "7", "5", "4"],
        "answer": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Find the area of a square with side length 6 cm.",
        "question_hi": "6 सेमी किनारे वाले वर्ग का क्षेत्रफल क्या है?",
        "options_en": ["36 cm²", "24 cm²", "18 cm²", "12 cm²"],
        "options_hi": ["36 cm²", "24 cm²", "18 cm²", "12 cm²"],
        "answer": "36 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the value of √81?",
        "question_hi": "√81 का मान क्या है?",
        "options_en": ["9", "8", "7", "10"],
        "options_hi": ["9", "8", "7", "10"],
        "answer": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Find the perimeter of a rectangle with length 6 cm and width 4 cm.",
        "question_hi": "6 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत का परिधि क्या है?",
        "options_en": ["20 cm", "22 cm", "24 cm", "30 cm"],
        "options_hi": ["20 cm", "22 cm", "24 cm", "30 cm"],
        "answer": "20 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Find the roots of the equation x² - 3x - 10 = 0.",
        "question_hi": "समीकरण x² - 3x - 10 = 0 की मूलमूल (roots) क्या हैं?",
        "options_en": ["-2, 5", "2, -5", "-5, 2", "5, 2"],
        "options_hi": ["-2, 5", "2, -5", "-5, 2", "5, 2"],
        "answer": "-2, 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the value of 3² + 4²?",
        "question_hi": "3² + 4² का मान क्या है?",
        "options_en": ["25", "16", "20", "17"],
        "options_hi": ["25", "16", "20", "17"],
        "answer": "25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Find the volume of a cone with radius 3 cm and height 4 cm.",
        "question_hi": "3 सेमी त्रिज्या और 4 सेमी ऊँचाई वाले शंकु का आयतन क्या है?",
        "options_en": ["12π cm³", "9π cm³", "18π cm³", "36π cm³"],
        "options_hi": ["12π cm³", "9π cm³", "18π cm³", "36π cm³"],
        "answer": "12π cm³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Find the area of a rhombus with diagonals 8 cm and 6 cm.",
        "question_hi": "8 सेमी और 6 सेमी विकर्णों वाले समचतुर्भुज का क्षेत्रफल क्या है?",
        "options_en": ["24 cm²", "20 cm²", "30 cm²", "18 cm²"],
        "options_hi": ["24 cm²", "20 cm²", "30 cm²", "18 cm²"],
        "answer": "24 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Find the solution of the equation 5x - 3 = 2x + 7.",
        "question_hi": "समीकरण 5x - 3 = 2x + 7 का हल क्या है?",
        "options_en": ["x = 3", "x = 2", "x = 4", "x = 5"],
        "options_hi": ["x = 3", "x = 2", "x = 4", "x = 5"],
        "answer": "x = 3",
        "attempted": false,
        "selected": ""
    },



    {
        "num": 31,
        "question_en": "What is the value of (a + b)²?",
        "question_hi": "(a + b)² का मान क्या है?",
        "options_en": ["a² + 2ab + b²", "a² - 2ab + b²", "a² + b²", "a² + 2b²"],
        "options_hi": ["a² + 2ab + b²", "a² - 2ab + b²", "a² + b²", "a² + 2b²"],
        "answer": "a² + 2ab + b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Find the distance between the points (1, 2) and (4, 6).",
        "question_hi": "(1, 2) और (4, 6) बिंदुओं के बीच की दूरी क्या है?",
        "options_en": ["5", "4", "3", "6"],
        "options_hi": ["5", "4", "3", "6"],
        "answer": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the value of (x - 1)(x + 3)?",
        "question_hi": "(x - 1)(x + 3) का मान क्या है?",
        "options_en": ["x² + 2x - 3", "x² - 2x - 3", "x² + 2x + 3", "x² - 2x + 3"],
        "options_hi": ["x² + 2x - 3", "x² - 2x - 3", "x² + 2x + 3", "x² - 2x + 3"],
        "answer": "x² + 2x - 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the value of tan(30°)?",
        "question_hi": "tan(30°) का मान क्या है?",
        "options_en": ["1/√3", "√3", "1", "√2"],
        "options_hi": ["1/√3", "√3", "1", "√2"],
        "answer": "1/√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Find the value of 7² + 24².",
        "question_hi": "7² + 24² का मान क्या है?",
        "options_en": ["625", "490", "576", "400"],
        "options_hi": ["625", "490", "576", "400"],
        "answer": "625",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the area of a trapezium with parallel sides 8 cm and 12 cm, and height 5 cm?",
        "question_hi": "8 सेमी और 12 सेमी समानांतर भुजाओं तथा 5 सेमी ऊँचाई वाले समलम्ब कोन का क्षेत्रफल क्या है?",
        "options_en": ["50 cm²", "40 cm²", "60 cm²", "45 cm²"],
        "options_hi": ["50 cm²", "40 cm²", "60 cm²", "45 cm²"],
        "answer": "50 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Find the value of 5³.",
        "question_hi": "5³ का मान क्या है?",
        "options_en": ["125", "100", "25", "50"],
        "options_hi": ["125", "100", "25", "50"],
        "answer": "125",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the value of sin(90°)?",
        "question_hi": "sin(90°) का मान क्या है?",
        "options_en": ["1", "0", "√2/2", "√3/2"],
        "options_hi": ["1", "0", "√2/2", "√3/2"],
        "answer": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Find the area of a circle with diameter 10 cm.",
        "question_hi": "10 सेमी व्यास वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["25π cm²", "50π cm²", "100π cm²", "75π cm²"],
        "options_hi": ["25π cm²", "50π cm²", "100π cm²", "75π cm²"],
        "answer": "25π cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the perimeter of a square with side length 7 cm?",
        "question_hi": "7 सेमी किनारे वाले वर्ग का परिधि क्या है?",
        "options_en": ["28 cm", "30 cm", "32 cm", "35 cm"],
        "options_hi": ["28 cm", "30 cm", "32 cm", "35 cm"],
        "answer": "28 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the value of log₁₀ 1000?",
        "question_hi": "log₁₀ 1000 का मान क्या है?",
        "options_en": ["3", "2", "1", "10"],
        "options_hi": ["3", "2", "1", "10"],
        "answer": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Find the volume of a cube with side length 5 cm.",
        "question_hi": "5 सेमी किनारे वाले घन का आयतन क्या है?",
        "options_en": ["125 cm³", "100 cm³", "150 cm³", "200 cm³"],
        "options_hi": ["125 cm³", "100 cm³", "150 cm³", "200 cm³"],
        "answer": "125 cm³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the surface area of a sphere with radius 6 cm?",
        "question_hi": "6 सेमी त्रिज्या वाले गोले का क्षेत्रफल क्या है?",
        "options_en": ["144π cm²", "36π cm²", "72π cm²", "108π cm²"],
        "options_hi": ["144π cm²", "36π cm²", "72π cm²", "108π cm²"],
        "answer": "144π cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the value of 10⁴?",
        "question_hi": "10⁴ का मान क्या है?",
        "options_en": ["10000", "1000", "100", "100000"],
        "options_hi": ["10000", "1000", "100", "100000"],
        "answer": "10000",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Find the roots of the equation x² + 6x + 9 = 0.",
        "question_hi": "समीकरण x² + 6x + 9 = 0 की मूलमूल (roots) क्या हैं?",
        "options_en": ["-3", "3", "1, -3", "1, 3"],
        "options_hi": ["-3", "3", "1, -3", "1, 3"],
        "answer": "-3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the solution to the equation 3x + 2 = 14?",
        "question_hi": "समीकरण 3x + 2 = 14 का हल क्या है?",
        "options_en": ["x = 4", "x = 2", "x = 3", "x = 5"],
        "options_hi": ["x = 4", "x = 2", "x = 3", "x = 5"],
        "answer": "x = 4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the area of a parallelogram with base 7 cm and height 4 cm?",
        "question_hi": "7 सेमी आधार और 4 सेमी ऊँचाई वाले समांतर चतुर्भुज का क्षेत्रफल क्या है?",
        "options_en": ["28 cm²", "30 cm²", "24 cm²", "35 cm²"],
        "options_hi": ["28 cm²", "30 cm²", "24 cm²", "35 cm²"],
        "answer": "28 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the perimeter of an equilateral triangle with side length 8 cm?",
        "question_hi": "8 सेमी किनारे वाले समबाहु त्रिकोण का परिधि क्या है?",
        "options_en": ["24 cm", "16 cm", "32 cm", "28 cm"],
        "options_hi": ["24 cm", "16 cm", "32 cm", "28 cm"],
        "answer": "24 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Find the value of x if x² = 25.",
        "question_hi": "यदि x² = 25 हो तो x का मान क्या होगा?",
        "options_en": ["5", "-5", "±5", "10"],
        "options_hi": ["5", "-5", "±5", "10"],
        "answer": "±5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the value of (x + 2)² - (x - 2)²?",
        "question_hi": "(x + 2)² - (x - 2)² का मान क्या है?",
        "options_en": ["4x", "4x + 4", "4x - 4", "8x"],
        "options_hi": ["4x", "4x + 4", "4x - 4", "8x"],
        "answer": "4x",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 51,
        "question_en": "What is the value of 2x + 3 = 11?",
        "question_hi": "2x + 3 = 11 का मान क्या है?",
        "options_en": ["x = 4", "x = 3", "x = 5", "x = 2"],
        "options_hi": ["x = 4", "x = 3", "x = 5", "x = 2"],
        "answer": "x = 4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Find the area of a rhombus with diagonals 10 cm and 8 cm.",
        "question_hi": "10 सेमी और 8 सेमी विकर्णों वाले समलम्ब का क्षेत्रफल क्या है?",
        "options_en": ["40 cm²", "50 cm²", "45 cm²", "30 cm²"],
        "options_hi": ["40 cm²", "50 cm²", "45 cm²", "30 cm²"],
        "answer": "40 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the perimeter of a rectangle with length 6 cm and breadth 4 cm?",
        "question_hi": "6 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत का परिधि क्या है?",
        "options_en": ["20 cm", "18 cm", "24 cm", "22 cm"],
        "options_hi": ["20 cm", "18 cm", "24 cm", "22 cm"],
        "answer": "20 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the value of cos(45°)?",
        "question_hi": "cos(45°) का मान क्या है?",
        "options_en": ["1/√2", "1", "√3/2", "√2/2"],
        "options_hi": ["1/√2", "1", "√3/2", "√2/2"],
        "answer": "1/√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the value of (x + 1)(x - 1)?",
        "question_hi": "(x + 1)(x - 1) का मान क्या है?",
        "options_en": ["x² - 1", "x² + 1", "x² - 2x + 1", "x² + 2x - 1"],
        "options_hi": ["x² - 1", "x² + 1", "x² - 2x + 1", "x² + 2x - 1"],
        "answer": "x² - 1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Find the area of a sector of a circle with radius 7 cm and central angle 60°.",
        "question_hi": "7 सेमी त्रिज्या और 60° केंद्रीय कोण वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["7π cm²", "14π cm²", "7 cm²", "14 cm²"],
        "options_hi": ["7π cm²", "14π cm²", "7 cm²", "14 cm²"],
        "answer": "7π cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the volume of a cone with radius 5 cm and height 12 cm?",
        "question_hi": "5 सेमी त्रिज्या और 12 सेमी ऊँचाई वाले शंकु का आयतन क्या है?",
        "options_en": ["π(25)(12)/3", "π(25)(12)", "π(15)(12)/3", "π(5)(12)/3"],
        "options_hi": ["π(25)(12)/3", "π(25)(12)", "π(15)(12)/3", "π(5)(12)/3"],
        "answer": "π(25)(12)/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the equation of the line passing through the points (2, 3) and (4, 5)?",
        "question_hi": "(2, 3) और (4, 5) बिंदुओं से गुजरने वाली रेखा का समीकरण क्या है?",
        "options_en": ["y = x + 1", "y = 2x - 1", "y = x + 2", "y = 2x + 1"],
        "options_hi": ["y = x + 1", "y = 2x - 1", "y = x + 2", "y = 2x + 1"],
        "answer": "y = x + 1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the value of √121?",
        "question_hi": "√121 का मान क्या है?",
        "options_en": ["11", "12", "10", "13"],
        "options_hi": ["11", "12", "10", "13"],
        "answer": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Find the value of x if 2x - 4 = 8.",
        "question_hi": "यदि 2x - 4 = 8 हो तो x का मान क्या होगा?",
        "options_en": ["x = 6", "x = 4", "x = 5", "x = 7"],
        "options_hi": ["x = 6", "x = 4", "x = 5", "x = 7"],
        "answer": "x = 6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Find the area of a triangle with base 8 cm and height 5 cm.",
        "question_hi": "8 सेमी आधार और 5 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या है?",
        "options_en": ["20 cm²", "24 cm²", "30 cm²", "40 cm²"],
        "options_hi": ["20 cm²", "24 cm²", "30 cm²", "40 cm²"],
        "answer": "20 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the sum of the angles of a triangle?",
        "question_hi": "त्रिकोण के कोणों का योग क्या है?",
        "options_en": ["180°", "360°", "90°", "270°"],
        "options_hi": ["180°", "360°", "90°", "270°"],
        "answer": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the value of (x - 3)(x + 2)?",
        "question_hi": "(x - 3)(x + 2) का मान क्या है?",
        "options_en": ["x² - x - 6", "x² + x - 6", "x² - 6x + 6", "x² - 5x + 6"],
        "options_hi": ["x² - x - 6", "x² + x - 6", "x² - 6x + 6", "x² - 5x + 6"],
        "answer": "x² - x - 6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the value of tan(45°)?",
        "question_hi": "tan(45°) का मान क्या है?",
        "options_en": ["1", "0", "√3", "√2"],
        "options_hi": ["1", "0", "√3", "√2"],
        "answer": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Find the surface area of a cylinder with radius 4 cm and height 10 cm.",
        "question_hi": "4 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले बेलन का क्षेत्रफल क्या है?",
        "options_en": ["88π cm²", "100π cm²", "120π cm²", "150π cm²"],
        "options_hi": ["88π cm²", "100π cm²", "120π cm²", "150π cm²"],
        "answer": "88π cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Find the median of the data set: 3, 7, 5, 9, 11.",
        "question_hi": "आंकड़ों के सेट 3, 7, 5, 9, 11 का माध्यिका (median) क्या है?",
        "options_en": ["7", "6", "5", "8"],
        "options_hi": ["7", "6", "5", "8"],
        "answer": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the volume of a sphere with radius 6 cm?",
        "question_hi": "6 सेमी त्रिज्या वाले गोले का आयतन क्या है?",
        "options_en": ["4/3π(216)", "4/3π(100)", "4/3π(125)", "4/3π(36)"],
        "options_hi": ["4/3π(216)", "4/3π(100)", "4/3π(125)", "4/3π(36)"],
        "answer": "4/3π(216)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the slope of the line 2x - 3y = 6?",
        "question_hi": "समीकरण 2x - 3y = 6 की ढलान (slope) क्या है?",
        "options_en": ["2/3", "-2/3", "3/2", "-3/2"],
        "options_hi": ["2/3", "-2/3", "3/2", "-3/2"],
        "answer": "2/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the probability of rolling an even number on a fair die?",
        "question_hi": "एक निष्पक्ष पासे पर एक सम संख्या आने की संभावना क्या है?",
        "options_en": ["1/2", "1/6", "1/3", "1/4"],
        "options_hi": ["1/2", "1/6", "1/3", "1/4"],
        "answer": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Find the value of (x² + 5x + 6) / (x + 2).",
        "question_hi": "(x² + 5x + 6) / (x + 2) का मान क्या है?",
        "options_en": ["x + 3", "x + 2", "x + 1", "x - 1"],
        "options_hi": ["x + 3", "x + 2", "x + 1", "x - 1"],
        "answer": "x + 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the sum of the angles in a quadrilateral?",
        "question_hi": "चतुर्भुज के कोणों का योग क्या है?",
        "options_en": ["360°", "180°", "270°", "90°"],
        "options_hi": ["360°", "180°", "270°", "90°"],
        "answer": "360°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the area of a square with side 10 cm?",
        "question_hi": "10 सेमी किनारे वाले वर्ग का क्षेत्रफल क्या है?",
        "options_en": ["100 cm²", "150 cm²", "120 cm²", "130 cm²"],
        "options_hi": ["100 cm²", "150 cm²", "120 cm²", "130 cm²"],
        "answer": "100 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the value of 3³?",
        "question_hi": "3³ का मान क्या है?",
        "options_en": ["27", "9", "12", "6"],
        "options_hi": ["27", "9", "12", "6"],
        "answer": "27",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the formula for the area of a circle?",
        "question_hi": "वृत्त का क्षेत्रफल निकालने का सूत्र क्या है?",
        "options_en": ["πr²", "2πr", "2r", "πd²"],
        "options_hi": ["πr²", "2πr", "2r", "πd²"],
        "answer": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Find the area of a trapezium with parallel sides 7 cm and 13 cm, and height 5 cm.",
        "question_hi": "7 सेमी और 13 सेमी समानांतर भुजाओं तथा 5 सेमी ऊँचाई वाले समलम्ब का क्षेत्रफल क्या है?",
        "options_en": ["50 cm²", "60 cm²", "70 cm²", "80 cm²"],
        "options_hi": ["50 cm²", "60 cm²", "70 cm²", "80 cm²"],
        "answer": "50 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Find the value of x if 3x + 4 = 19.",
        "question_hi": "यदि 3x + 4 = 19 हो तो x का मान क्या होगा?",
        "options_en": ["x = 5", "x = 6", "x = 4", "x = 3"],
        "options_hi": ["x = 5", "x = 6", "x = 4", "x = 3"],
        "answer": "x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the perimeter of an equilateral triangle with side length 9 cm?",
        "question_hi": "9 सेमी किनारे वाले समबाहु त्रिकोण का परिधि क्या है?",
        "options_en": ["27 cm", "18 cm", "12 cm", "20 cm"],
        "options_hi": ["27 cm", "18 cm", "12 cm", "20 cm"],
        "answer": "27 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Find the volume of a cylinder with radius 3 cm and height 7 cm.",
        "question_hi": "3 सेमी त्रिज्या और 7 सेमी ऊँचाई वाले बेलन का आयतन क्या है?",
        "options_en": ["63π cm³", "27π cm³", "21π cm³", "36π cm³"],
        "options_hi": ["63π cm³", "27π cm³", "21π cm³", "36π cm³"],
        "answer": "63π cm³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the value of (x² - 4x + 4)?",
        "question_hi": "(x² - 4x + 4) का मान क्या है?",
        "options_en": ["(x - 2)²", "(x + 2)²", "(x - 4)²", "(x + 4)²"],
        "options_hi": ["(x - 2)²", "(x + 2)²", "(x - 4)²", "(x + 4)²"],
        "answer": "(x - 2)²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the value of 5⁴?",
        "question_hi": "5⁴ का मान क्या है?",
        "options_en": ["625", "125", "25", "100"],
        "options_hi": ["625", "125", "25", "100"],
        "answer": "625",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Find the value of sin(30°).",
        "question_hi": "sin(30°) का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1", "√2/2"],
        "options_hi": ["1/2", "√3/2", "1", "√2/2"],
        "answer": "1/2",
        "attempted": false,
        "selected": ""
    },


    {
        "num": 82,
        "question_en": "Find the area of a circle with radius 7 cm.",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["49π cm²", "44π cm²", "40π cm²", "35π cm²"],
        "options_hi": ["49π cm²", "44π cm²", "40π cm²", "35π cm²"],
        "answer": "49π cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the value of 2x - 3 = 9?",
        "question_hi": "2x - 3 = 9 का मान क्या है?",
        "options_en": ["x = 6", "x = 4", "x = 5", "x = 3"],
        "options_hi": ["x = 6", "x = 4", "x = 5", "x = 3"],
        "answer": "x = 6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Find the mode of the data set: 2, 4, 6, 4, 8.",
        "question_hi": "आंकड़ों के सेट 2, 4, 6, 4, 8 का मोड (mode) क्या है?",
        "options_en": ["4", "6", "2", "8"],
        "options_hi": ["4", "6", "2", "8"],
        "answer": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the volume of a cube with side length 4 cm?",
        "question_hi": "4 सेमी किनारे वाले घन का आयतन क्या है?",
        "options_en": ["64 cm³", "16 cm³", "32 cm³", "8 cm³"],
        "options_hi": ["64 cm³", "16 cm³", "32 cm³", "8 cm³"],
        "answer": "64 cm³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Find the median of the data set: 3, 5, 7, 8, 10.",
        "question_hi": "आंकड़ों के सेट 3, 5, 7, 8, 10 का माध्यिका (median) क्या है?",
        "options_en": ["7", "5", "8", "6"],
        "options_hi": ["7", "5", "8", "6"],
        "answer": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the value of 3x + 7 = 16?",
        "question_hi": "3x + 7 = 16 का मान क्या है?",
        "options_en": ["x = 3", "x = 2", "x = 4", "x = 5"],
        "options_hi": ["x = 3", "x = 2", "x = 4", "x = 5"],
        "answer": "x = 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Find the area of a right triangle with base 6 cm and height 8 cm.",
        "question_hi": "6 सेमी आधार और 8 सेमी ऊँचाई वाले समकोण त्रिकोण का क्षेत्रफल क्या है?",
        "options_en": ["24 cm²", "48 cm²", "30 cm²", "36 cm²"],
        "options_hi": ["24 cm²", "48 cm²", "30 cm²", "36 cm²"],
        "answer": "24 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the value of cos(60°)?",
        "question_hi": "cos(60°) का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1", "0"],
        "options_hi": ["1/2", "√3/2", "1", "0"],
        "answer": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the perimeter of a square with side 12 cm?",
        "question_hi": "12 सेमी किनारे वाले वर्ग का परिधि क्या है?",
        "options_en": ["48 cm", "36 cm", "24 cm", "60 cm"],
        "options_hi": ["48 cm", "36 cm", "24 cm", "60 cm"],
        "answer": "48 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the value of 10²?",
        "question_hi": "10² का मान क्या है?",
        "options_en": ["100", "10", "20", "50"],
        "options_hi": ["100", "10", "20", "50"],
        "answer": "100",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Find the area of a parallelogram with base 8 cm and height 5 cm.",
        "question_hi": "8 सेमी आधार और 5 सेमी ऊँचाई वाले समलम्ब का क्षेत्रफल क्या है?",
        "options_en": ["40 cm²", "30 cm²", "50 cm²", "20 cm²"],
        "options_hi": ["40 cm²", "30 cm²", "50 cm²", "20 cm²"],
        "answer": "40 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the value of tan(30°)?",
        "question_hi": "tan(30°) का मान क्या है?",
        "options_en": ["1/√3", "√3", "1", "√2"],
        "options_hi": ["1/√3", "√3", "1", "√2"],
        "answer": "1/√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the value of √64?",
        "question_hi": "√64 का मान क्या है?",
        "options_en": ["8", "6", "7", "9"],
        "options_hi": ["8", "6", "7", "9"],
        "answer": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Find the value of 2x + 5 = 15.",
        "question_hi": "2x + 5 = 15 का मान क्या है?",
        "options_en": ["x = 5", "x = 6", "x = 4", "x = 3"],
        "options_hi": ["x = 5", "x = 6", "x = 4", "x = 3"],
        "answer": "x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the volume of a sphere with radius 5 cm?",
        "question_hi": "5 सेमी त्रिज्या वाले गोले का आयतन क्या है?",
        "options_en": ["4/3π(125)", "4/3π(150)", "4/3π(100)", "4/3π(25)"],
        "options_hi": ["4/3π(125)", "4/3π(150)", "4/3π(100)", "4/3π(25)"],
        "answer": "4/3π(125)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the perimeter of a circle with radius 7 cm?",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त की परिधि क्या है?",
        "options_en": ["14π cm", "21π cm", "7π cm", "28π cm"],
        "options_hi": ["14π cm", "21π cm", "7π cm", "28π cm"],
        "answer": "14π cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the formula for the area of a triangle?",
        "question_hi": "त्रिकोण का क्षेत्रफल निकालने का सूत्र क्या है?",
        "options_en": ["1/2 × base × height", "base × height", "2 × base × height", "base + height"],
        "options_hi": ["1/2 × आधार × ऊँचाई", "आधार × ऊँचाई", "2 × आधार × ऊँचाई", "आधार + ऊँचाई"],
        "answer": "1/2 × base × height",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the value of sin(45°)?",
        "question_hi": "sin(45°) का मान क्या है?",
        "options_en": ["1/√2", "1", "√3/2", "√2/2"],
        "options_hi": ["1/√2", "1", "√3/2", "√2/2"],
        "answer": "1/√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Find the area of a sector with radius 6 cm and central angle 90°.",
        "question_hi": "6 सेमी त्रिज्या और 90° केंद्रीय कोण वाले क्षेत्र का क्षेत्रफल क्या है?",
        "options_en": ["9π cm²", "6π cm²", "12π cm²", "3π cm²"],
        "options_hi": ["9π cm²", "6π cm²", "12π cm²", "3π cm²"],
        "answer": "9π cm²",
        "attempted": false,
        "selected": ""
    }
];
// --------------------------- GLOBAL VARS -----------------------------
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