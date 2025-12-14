const questions = [
  {
    "num": 1,
    "question_en": "What is the value of 15 × 12?",
    "question_hi": "15 × 12 का मान क्या है?",
    "options_en": ["150", "160", "170", "180"],
    "options_hi": ["150", "160", "170", "180"],
    "answer_en": "180",
    "answer_hi": "180",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 25% of 200?",
    "question_hi": "200 का 25% कितना है?",
    "options_en": ["40", "50", "60", "70"],
    "options_hi": ["40", "50", "60", "70"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Simplify: 3² + 4²",
    "question_hi": "सरल करें: 3² + 4²",
    "options_en": ["9", "16", "25", "49"],
    "options_hi": ["9", "16", "25", "49"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the square root of 144?",
    "question_hi": "144 का वर्गमूल क्या है?",
    "options_en": ["10", "11", "12", "13"],
    "options_hi": ["10", "11", "12", "13"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Solve: 2x + 5 = 15",
    "question_hi": "हल करें: 2x + 5 = 15",
    "options_en": ["x=3", "x=4", "x=5", "x=6"],
    "options_hi": ["x=3", "x=4", "x=5", "x=6"],
    "answer_en": "x=5",
    "answer_hi": "x=5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the LCM of 12 and 18?",
    "question_hi": "12 और 18 का LCM क्या है?",
    "options_en": ["24", "30", "36", "42"],
    "options_hi": ["24", "30", "36", "42"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the HCF of 24 and 36?",
    "question_hi": "24 और 36 का HCF क्या है?",
    "options_en": ["6", "8", "10", "12"],
    "options_hi": ["6", "8", "10", "12"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Convert 2/5 to percentage",
    "question_hi": "2/5 को प्रतिशत में बदलें",
    "options_en": ["20%", "30%", "40%", "50%"],
    "options_hi": ["20%", "30%", "40%", "50%"],
    "answer_en": "40%",
    "answer_hi": "40%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 0.25 as a fraction?",
    "question_hi": "0.25 भिन्न के रूप में क्या है?",
    "options_en": ["1/2", "1/3", "1/4", "1/5"],
    "options_hi": ["1/2", "1/3", "1/4", "1/5"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Calculate: 15 ÷ 0.5",
    "question_hi": "गणना करें: 15 ÷ 0.5",
    "options_en": ["25", "30", "35", "40"],
    "options_hi": ["25", "30", "35", "40"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Find the average of 10, 20, 30, 40, 50",
    "question_hi": "10, 20, 30, 40, 50 का औसत ज्ञात करें",
    "options_en": ["25", "30", "35", "40"],
    "options_hi": ["25", "30", "35", "40"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 3/4 of 80?",
    "question_hi": "80 का 3/4 भाग कितना है?",
    "options_en": ["50", "55", "60", "65"],
    "options_hi": ["50", "55", "60", "65"],
    "answer_en": "60",
    "answer_hi": "60",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Solve: 5² - 3²",
    "question_hi": "हल करें: 5² - 3²",
    "options_en": ["12", "14", "16", "18"],
    "options_hi": ["12", "14", "16", "18"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the cube of 4?",
    "question_hi": "4 का घन क्या है?",
    "options_en": ["48", "56", "64", "72"],
    "options_hi": ["48", "56", "64", "72"],
    "answer_en": "64",
    "answer_hi": "64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Find the value of 7! (7 factorial)",
    "question_hi": "7! (7 फैक्टोरियल) का मान ज्ञात करें",
    "options_en": ["420", "5040", "720", "40320"],
    "options_hi": ["420", "5040", "720", "40320"],
    "answer_en": "5040",
    "answer_hi": "5040",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the area of rectangle with length 8 cm and breadth 5 cm?",
    "question_hi": "8 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?",
    "options_en": ["30 cm²", "35 cm²", "40 cm²", "45 cm²"],
    "options_hi": ["30 सेमी²", "35 सेमी²", "40 सेमी²", "45 सेमी²"],
    "answer_en": "40 cm²",
    "answer_hi": "40 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Calculate: 3/8 + 1/4",
    "question_hi": "गणना करें: 3/8 + 1/4",
    "options_en": ["1/2", "5/8", "3/4", "7/8"],
    "options_hi": ["1/2", "5/8", "3/4", "7/8"],
    "answer_en": "5/8",
    "answer_hi": "5/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Simplify: (3x + 2y) - (x + y)",
    "question_hi": "सरल करें: (3x + 2y) - (x + y)",
    "options_en": ["2x + y", "2x + 2y", "x + y", "x + 2y"],
    "options_hi": ["2x + y", "2x + 2y", "x + y", "x + 2y"],
    "answer_en": "2x + y",
    "answer_hi": "2x + y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the perimeter of square with side 7 cm?",
    "question_hi": "7 सेमी भुजा वाले वर्ग का परिमाप क्या है?",
    "options_en": ["21 cm", "24 cm", "28 cm", "32 cm"],
    "options_hi": ["21 सेमी", "24 सेमी", "28 सेमी", "32 सेमी"],
    "answer_en": "28 cm",
    "answer_hi": "28 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Solve: 3x - 7 = 8",
    "question_hi": "हल करें: 3x - 7 = 8",
    "options_en": ["x=3", "x=4", "x=5", "x=6"],
    "options_hi": ["x=3", "x=4", "x=5", "x=6"],
    "answer_en": "x=5",
    "answer_hi": "x=5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 60% of 250?",
    "question_hi": "250 का 60% कितना है?",
    "options_en": ["120", "130", "140", "150"],
    "options_hi": ["120", "130", "140", "150"],
    "answer_en": "150",
    "answer_hi": "150",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Calculate: 4³ + 3³",
    "question_hi": "गणना करें: 4³ + 3³",
    "options_en": ["64", "91", "100", "125"],
    "options_hi": ["64", "91", "100", "125"],
    "answer_en": "91",
    "answer_hi": "91",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find the value of 0.3 × 0.4",
    "question_hi": "0.3 × 0.4 का मान ज्ञात करें",
    "options_en": ["0.07", "0.12", "0.21", "1.2"],
    "options_hi": ["0.07", "0.12", "0.21", "1.2"],
    "answer_en": "0.12",
    "answer_hi": "0.12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the volume of cube with side 3 cm?",
    "question_hi": "3 सेमी भुजा वाले घन का आयतन क्या है?",
    "options_en": ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
    "options_hi": ["9 सेमी³", "18 सेमी³", "27 सेमी³", "36 सेमी³"],
    "answer_en": "27 cm³",
    "answer_hi": "27 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Simplify: 15 ÷ 3 + 4 × 2",
    "question_hi": "सरल करें: 15 ÷ 3 + 4 × 2",
    "options_en": ["9", "11", "13", "15"],
    "options_hi": ["9", "11", "13", "15"],
    "answer_en": "13",
    "answer_hi": "13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Solve: x/4 = 5",
    "question_hi": "हल करें: x/4 = 5",
    "options_en": ["x=15", "x=18", "x=20", "x=24"],
    "options_hi": ["x=15", "x=18", "x=20", "x=24"],
    "answer_en": "x=20",
    "answer_hi": "x=20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Calculate: 2/3 × 3/4",
    "question_hi": "गणना करें: 2/3 × 3/4",
    "options_en": ["1/4", "1/2", "5/12", "6/12"],
    "options_hi": ["1/4", "1/2", "5/12", "6/12"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the circumference of circle with radius 14 cm? (π=22/7)",
    "question_hi": "14 सेमी त्रिज्या वाले वृत्त की परिधि क्या है? (π=22/7)",
    "options_en": ["44 cm", "66 cm", "88 cm", "110 cm"],
    "options_hi": ["44 सेमी", "66 सेमी", "88 सेमी", "110 सेमी"],
    "answer_en": "88 cm",
    "answer_hi": "88 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Find the value of 5⁰ + 3²",
    "question_hi": "5⁰ + 3² का मान ज्ञात करें",
    "options_en": ["8", "9", "10", "11"],
    "options_hi": ["8", "9", "10", "11"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 1.5 as a fraction?",
    "question_hi": "1.5 भिन्न के रूप में क्या है?",
    "options_en": ["1/2", "3/2", "5/4", "7/5"],
    "options_hi": ["1/2", "3/2", "5/4", "7/5"],
    "answer_en": "3/2",
    "answer_hi": "3/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Calculate: 25 × 16 ÷ 4",
    "question_hi": "गणना करें: 25 × 16 ÷ 4",
    "options_en": ["80", "90", "100", "120"],
    "options_hi": ["80", "90", "100", "120"],
    "answer_en": "100",
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the area of triangle with base 10 cm and height 6 cm?",
    "question_hi": "10 सेमी आधार और 6 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["25 cm²", "30 cm²", "35 cm²", "40 cm²"],
    "options_hi": ["25 सेमी²", "30 सेमी²", "35 सेमी²", "40 सेमी²"],
    "answer_en": "30 cm²",
    "answer_hi": "30 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Solve: 2(x + 3) = 14",
    "question_hi": "हल करें: 2(x + 3) = 14",
    "options_en": ["x=2", "x=3", "x=4", "x=5"],
    "options_hi": ["x=2", "x=3", "x=4", "x=5"],
    "answer_en": "x=4",
    "answer_hi": "x=4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the cube root of 125?",
    "question_hi": "125 का घनमूल क्या है?",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Calculate: 3/5 - 1/4",
    "question_hi": "गणना करें: 3/5 - 1/4",
    "options_en": ["7/20", "1/2", "9/20", "11/20"],
    "options_hi": ["7/20", "1/2", "9/20", "11/20"],
    "answer_en": "7/20",
    "answer_hi": "7/20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 75% as a fraction?",
    "question_hi": "75% भिन्न के रूप में क्या है?",
    "options_en": ["1/2", "2/3", "3/4", "4/5"],
    "options_hi": ["1/2", "2/3", "3/4", "4/5"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Find the sum: 1 + 2 + 3 + ... + 10",
    "question_hi": "योग ज्ञात करें: 1 + 2 + 3 + ... + 10",
    "options_en": ["45", "50", "55", "60"],
    "options_hi": ["45", "50", "55", "60"],
    "answer_en": "55",
    "answer_hi": "55",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the perimeter of rectangle with length 12 cm and breadth 8 cm?",
    "question_hi": "12 सेमी लंबाई और 8 सेमी चौड़ाई वाले आयत का परिमाप क्या है?",
    "options_en": ["30 cm", "36 cm", "40 cm", "48 cm"],
    "options_hi": ["30 सेमी", "36 सेमी", "40 सेमी", "48 सेमी"],
    "answer_en": "40 cm",
    "answer_hi": "40 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Simplify: (a + b)² - (a - b)²",
    "question_hi": "सरल करें: (a + b)² - (a - b)²",
    "options_en": ["2ab", "4ab", "2a²", "2b²"],
    "options_hi": ["2ab", "4ab", "2a²", "2b²"],
    "answer_en": "4ab",
    "answer_hi": "4ab",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Calculate: 0.6 × 25",
    "question_hi": "गणना करें: 0.6 × 25",
    "options_en": ["12", "13", "14", "15"],
    "options_hi": ["12", "13", "14", "15"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the area of circle with radius 7 cm? (π=22/7)",
    "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है? (π=22/7)",
    "options_en": ["132 cm²", "144 cm²", "154 cm²", "166 cm²"],
    "options_hi": ["132 सेमी²", "144 सेमी²", "154 सेमी²", "166 सेमी²"],
    "answer_en": "154 cm²",
    "answer_hi": "154 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Solve: 4x/5 = 12",
    "question_hi": "हल करें: 4x/5 = 12",
    "options_en": ["x=10", "x=12", "x=15", "x=18"],
    "options_hi": ["x=10", "x=12", "x=15", "x=18"],
    "answer_en": "x=15",
    "answer_hi": "x=15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 150% of 60?",
    "question_hi": "60 का 150% कितना है?",
    "options_en": ["75", "80", "85", "90"],
    "options_hi": ["75", "80", "85", "90"],
    "answer_en": "90",
    "answer_hi": "90",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Calculate: √144 + √25",
    "question_hi": "गणना करें: √144 + √25",
    "options_en": ["13", "15", "17", "19"],
    "options_hi": ["13", "15", "17", "19"],
    "answer_en": "17",
    "answer_hi": "17",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Find the value of 10³ ÷ 10²",
    "question_hi": "10³ ÷ 10² का मान ज्ञात करें",
    "options_en": ["1", "10", "100", "1000"],
    "options_hi": ["1", "10", "100", "1000"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the volume of cuboid with dimensions 5×4×3 cm?",
    "question_hi": "5×4×3 सेमी आयाम वाले घनाभ का आयतन क्या है?",
    "options_en": ["40 cm³", "50 cm³", "60 cm³", "70 cm³"],
    "options_hi": ["40 सेमी³", "50 सेमी³", "60 सेमी³", "70 सेमी³"],
    "answer_en": "60 cm³",
    "answer_hi": "60 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Simplify: 2/3 ÷ 4/5",
    "question_hi": "सरल करें: 2/3 ÷ 4/5",
    "options_en": ["5/6", "6/5", "8/15", "15/8"],
    "options_hi": ["5/6", "6/5", "8/15", "15/8"],
    "answer_en": "5/6",
    "answer_hi": "5/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the diagonal of square with side 5 cm?",
    "question_hi": "5 सेमी भुजा वाले वर्ग का विकर्ण क्या है?",
    "options_en": ["5 cm", "5√2 cm", "10 cm", "10√2 cm"],
    "options_hi": ["5 सेमी", "5√2 सेमी", "10 सेमी", "10√2 सेमी"],
    "answer_en": "5√2 cm",
    "answer_hi": "5√2 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Solve: 5 - 2x = 11",
    "question_hi": "हल करें: 5 - 2x = 11",
    "options_en": ["x=-3", "x=-2", "x=2", "x=3"],
    "options_hi": ["x=-3", "x=-2", "x=2", "x=3"],
    "answer_en": "x=-3",
    "answer_hi": "x=-3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Calculate: 3.5 × 2.4",
    "question_hi": "गणना करें: 3.5 × 2.4",
    "options_en": ["7.6", "8.0", "8.4", "8.8"],
    "options_hi": ["7.6", "8.0", "8.4", "8.8"],
    "answer_en": "8.4",
    "answer_hi": "8.4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 0.125 as a fraction?",
    "question_hi": "0.125 भिन्न के रूप में क्या है?",
    "options_en": ["1/4", "1/6", "1/8", "1/10"],
    "options_hi": ["1/4", "1/6", "1/8", "1/10"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Find the average of first 5 even numbers",
    "question_hi": "पहली 5 सम संख्याओं का औसत ज्ञात करें",
    "options_en": ["4", "5", "6", "7"],
    "options_hi": ["4", "5", "6", "7"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the area of square with side 9 cm?",
    "question_hi": "9 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?",
    "options_en": ["72 cm²", "81 cm²", "90 cm²", "99 cm²"],
    "options_hi": ["72 सेमी²", "81 सेमी²", "90 सेमी²", "99 सेमी²"],
    "answer_en": "81 cm²",
    "answer_hi": "81 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Simplify: (2x)³",
    "question_hi": "सरल करें: (2x)³",
    "options_en": ["2x³", "4x³", "6x³", "8x³"],
    "options_hi": ["2x³", "4x³", "6x³", "8x³"],
    "answer_en": "8x³",
    "answer_hi": "8x³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Calculate: 7/8 - 3/4",
    "question_hi": "गणना करें: 7/8 - 3/4",
    "options_en": ["1/8", "1/4", "3/8", "1/2"],
    "options_hi": ["1/8", "1/4", "3/8", "1/2"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 20% as a decimal?",
    "question_hi": "20% दशमलव के रूप में क्या है?",
    "options_en": ["0.02", "0.2", "2.0", "20.0"],
    "options_hi": ["0.02", "0.2", "2.0", "20.0"],
    "answer_en": "0.2",
    "answer_hi": "0.2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Find the product: 12 × 15",
    "question_hi": "गुणनफल ज्ञात करें: 12 × 15",
    "options_en": ["160", "170", "180", "190"],
    "options_hi": ["160", "170", "180", "190"],
    "answer_en": "180",
    "answer_hi": "180",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the perimeter of triangle with sides 5 cm, 6 cm, 7 cm?",
    "question_hi": "5 सेमी, 6 सेमी, 7 सेमी भुजाओं वाले त्रिभुज का परिमाप क्या है?",
    "options_en": ["16 cm", "17 cm", "18 cm", "19 cm"],
    "options_hi": ["16 सेमी", "17 सेमी", "18 सेमी", "19 सेमी"],
    "answer_en": "18 cm",
    "answer_hi": "18 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Solve: x² = 49",
    "question_hi": "हल करें: x² = 49",
    "options_en": ["x=6", "x=7", "x=8", "x=9"],
    "options_hi": ["x=6", "x=7", "x=8", "x=9"],
    "answer_en": "x=7",
    "answer_hi": "x=7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Calculate: 0.25 ÷ 0.05",
    "question_hi": "गणना करें: 0.25 ÷ 0.05",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the area of parallelogram with base 12 cm and height 5 cm?",
    "question_hi": "12 सेमी आधार और 5 सेमी ऊँचाई वाले समांतर चतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["50 cm²", "55 cm²", "60 cm²", "65 cm²"],
    "options_hi": ["50 सेमी²", "55 सेमी²", "60 सेमी²", "65 सेमी²"],
    "answer_en": "60 cm²",
    "answer_hi": "60 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Simplify: 4 × (3 + 5) - 6",
    "question_hi": "सरल करें: 4 × (3 + 5) - 6",
    "options_en": ["22", "24", "26", "28"],
    "options_hi": ["22", "24", "26", "28"],
    "answer_en": "26",
    "answer_hi": "26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 2³ × 2²?",
    "question_hi": "2³ × 2² क्या है?",
    "options_en": ["2⁵", "2⁶", "32", "64"],
    "options_hi": ["2⁵", "2⁶", "32", "64"],
    "answer_en": "32",
    "answer_hi": "32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Find the value of 100 ÷ (5+5)",
    "question_hi": "100 ÷ (5+5) का मान ज्ञात करें",
    "options_en": ["8", "9", "10", "11"],
    "options_hi": ["8", "9", "10", "11"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the surface area of cube with side 4 cm?",
    "question_hi": "4 सेमी भुजा वाले घन का पृष्ठीय क्षेत्रफल क्या है?",
    "options_en": ["64 cm²", "80 cm²", "96 cm²", "112 cm²"],
    "options_hi": ["64 सेमी²", "80 सेमी²", "96 सेमी²", "112 सेमी²"],
    "answer_en": "96 cm²",
    "answer_hi": "96 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Solve: 3x + 2 = 2x + 7",
    "question_hi": "हल करें: 3x + 2 = 2x + 7",
    "options_en": ["x=3", "x=4", "x=5", "x=6"],
    "options_hi": ["x=3", "x=4", "x=5", "x=6"],
    "answer_en": "x=5",
    "answer_hi": "x=5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Calculate: 2.5 + 3.75",
    "question_hi": "गणना करें: 2.5 + 3.75",
    "options_en": ["5.25", "6.00", "6.25", "6.50"],
    "options_hi": ["5.25", "6.00", "6.25", "6.50"],
    "answer_en": "6.25",
    "answer_hi": "6.25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 1/3 of 90?",
    "question_hi": "90 का 1/3 भाग कितना है?",
    "options_en": ["25", "28", "30", "33"],
    "options_hi": ["25", "28", "30", "33"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Find the difference: 100 - 47",
    "question_hi": "अंतर ज्ञात करें: 100 - 47",
    "options_en": ["51", "52", "53", "54"],
    "options_hi": ["51", "52", "53", "54"],
    "answer_en": "53",
    "answer_hi": "53",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the area of trapezium with parallel sides 6 cm, 4 cm and height 5 cm?",
    "question_hi": "6 सेमी, 4 सेमी समानांतर भुजाओं और 5 सेमी ऊँचाई वाले समलंब चतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["20 cm²", "22 cm²", "24 cm²", "25 cm²"],
    "options_hi": ["20 सेमी²", "22 सेमी²", "24 सेमी²", "25 सेमी²"],
    "answer_en": "25 cm²",
    "answer_hi": "25 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Simplify: (x+3)(x+2)",
    "question_hi": "सरल करें: (x+3)(x+2)",
    "options_en": ["x²+5x+6", "x²+6x+5", "x²+5x+5", "x²+6x+6"],
    "options_hi": ["x²+5x+6", "x²+6x+5", "x²+5x+5", "x²+6x+6"],
    "answer_en": "x²+5x+6",
    "answer_hi": "x²+5x+6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Calculate: 1/2 + 1/3 + 1/6",
    "question_hi": "गणना करें: 1/2 + 1/3 + 1/6",
    "options_en": ["1", "5/6", "7/6", "4/3"],
    "options_hi": ["1", "5/6", "7/6", "4/3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 0.75 as percentage?",
    "question_hi": "0.75 प्रतिशत के रूप में क्या है?",
    "options_en": ["7.5%", "75%", "750%", "0.75%"],
    "options_hi": ["7.5%", "75%", "750%", "0.75%"],
    "answer_en": "75%",
    "answer_hi": "75%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Find the value of √81 × √4",
    "question_hi": "√81 × √4 का मान ज्ञात करें",
    "options_en": ["15", "16", "17", "18"],
    "options_hi": ["15", "16", "17", "18"],
    "answer_en": "18",
    "answer_hi": "18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the volume of cylinder with radius 7 cm and height 10 cm? (π=22/7)",
    "question_hi": "7 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले बेलन का आयतन क्या है? (π=22/7)",
    "options_en": ["1400 cm³", "1500 cm³", "1540 cm³", "1600 cm³"],
    "options_hi": ["1400 सेमी³", "1500 सेमी³", "1540 सेमी³", "1600 सेमी³"],
    "answer_en": "1540 cm³",
    "answer_hi": "1540 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Solve: 4(x-2) = 20",
    "question_hi": "हल करें: 4(x-2) = 20",
    "options_en": ["x=5", "x=6", "x=7", "x=8"],
    "options_hi": ["x=5", "x=6", "x=7", "x=8"],
    "answer_en": "x=7",
    "answer_hi": "x=7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Calculate: 45 ÷ 0.9",
    "question_hi": "गणना करें: 45 ÷ 0.9",
    "options_en": ["40", "45", "50", "55"],
    "options_hi": ["40", "45", "50", "55"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 5/8 as a decimal?",
    "question_hi": "5/8 दशमलव के रूप में क्या है?",
    "options_en": ["0.525", "0.575", "0.625", "0.675"],
    "options_hi": ["0.525", "0.575", "0.625", "0.675"],
    "answer_en": "0.625",
    "answer_hi": "0.625",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Find the sum: 25 + 37 + 43",
    "question_hi": "योग ज्ञात करें: 25 + 37 + 43",
    "options_en": ["95", "100", "105", "110"],
    "options_hi": ["95", "100", "105", "110"],
    "answer_en": "105",
    "answer_hi": "105",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the area of rhombus with diagonals 10 cm and 8 cm?",
    "question_hi": "10 सेमी और 8 सेमी विकर्णों वाले समचतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["35 cm²", "38 cm²", "40 cm²", "42 cm²"],
    "options_hi": ["35 सेमी²", "38 सेमी²", "40 सेमी²", "42 सेमी²"],
    "answer_en": "40 cm²",
    "answer_hi": "40 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Simplify: 2³ + 3² + 4¹",
    "question_hi": "सरल करें: 2³ + 3² + 4¹",
    "options_en": ["19", "20", "21", "22"],
    "options_hi": ["19", "20", "21", "22"],
    "answer_en": "21",
    "answer_hi": "21",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Calculate: 7 × 8 ÷ 4",
    "question_hi": "गणना करें: 7 × 8 ÷ 4",
    "options_en": ["12", "13", "14", "15"],
    "options_hi": ["12", "13", "14", "15"],
    "answer_en": "14",
    "answer_hi": "14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the HCF of 15 and 25?",
    "question_hi": "15 और 25 का HCF क्या है?",
    "options_en": ["3", "5", "7", "9"],
    "options_hi": ["3", "5", "7", "9"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Find the value of 0.4²",
    "question_hi": "0.4² का मान ज्ञात करें",
    "options_en": ["0.08", "0.12", "0.16", "0.20"],
    "options_hi": ["0.08", "0.12", "0.16", "0.20"],
    "answer_en": "0.16",
    "answer_hi": "0.16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the curved surface area of cylinder with radius 7 cm and height 10 cm? (π=22/7)",
    "question_hi": "7 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले बेलन का वक्र पृष्ठीय क्षेत्रफल क्या है? (π=22/7)",
    "options_en": ["380 cm²", "420 cm²", "440 cm²", "460 cm²"],
    "options_hi": ["380 सेमी²", "420 सेमी²", "440 सेमी²", "460 सेमी²"],
    "answer_en": "440 cm²",
    "answer_hi": "440 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Solve: 2x - 5 = 3x + 1",
    "question_hi": "हल करें: 2x - 5 = 3x + 1",
    "options_en": ["x=-6", "x=-5", "x=-4", "x=-3"],
    "options_hi": ["x=-6", "x=-5", "x=-4", "x=-3"],
    "answer_en": "x=-6",
    "answer_hi": "x=-6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Calculate: 3.6 × 2.5",
    "question_hi": "गणना करें: 3.6 × 2.5",
    "options_en": ["8.0", "8.5", "9.0", "9.5"],
    "options_hi": ["8.0", "8.5", "9.0", "9.5"],
    "answer_en": "9.0",
    "answer_hi": "9.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 33 1/3% as a fraction?",
    "question_hi": "33 1/3% भिन्न के रूप में क्या है?",
    "options_en": ["1/2", "1/3", "1/4", "1/5"],
    "options_hi": ["1/2", "1/3", "1/4", "1/5"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Find the product: 0.7 × 0.8",
    "question_hi": "गुणनफल ज्ञात करें: 0.7 × 0.8",
    "options_en": ["0.46", "0.52", "0.56", "0.60"],
    "options_hi": ["0.46", "0.52", "0.56", "0.60"],
    "answer_en": "0.56",
    "answer_hi": "0.56",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is the perimeter of regular hexagon with side 5 cm?",
    "question_hi": "5 सेमी भुजा वाले नियमित षट्भुज का परिमाप क्या है?",
    "options_en": ["25 cm", "28 cm", "30 cm", "32 cm"],
    "options_hi": ["25 सेमी", "28 सेमी", "30 सेमी", "32 सेमी"],
    "answer_en": "30 cm",
    "answer_hi": "30 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Simplify: (x+4)²",
    "question_hi": "सरल करें: (x+4)²",
    "options_en": ["x²+8x+16", "x²+8x+8", "x²+4x+16", "x²+16x+16"],
    "options_hi": ["x²+8x+16", "x²+8x+8", "x²+4x+16", "x²+16x+16"],
    "answer_en": "x²+8x+16",
    "answer_hi": "x²+8x+16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Calculate: 5/6 × 12",
    "question_hi": "गणना करें: 5/6 × 12",
    "options_en": ["8", "9", "10", "11"],
    "options_hi": ["8", "9", "10", "11"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 12.5% as a fraction?",
    "question_hi": "12.5% भिन्न के रूप में क्या है?",
    "options_en": ["1/6", "1/7", "1/8", "1/9"],
    "options_hi": ["1/6", "1/7", "1/8", "1/9"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Find the value of 8² ÷ 4²",
    "question_hi": "8² ÷ 4² का मान ज्ञात करें",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the total surface area of cuboid with dimensions 6×5×4 cm?",
    "question_hi": "6×5×4 सेमी आयाम वाले घनाभ का कुल पृष्ठीय क्षेत्रफल क्या है?",
    "options_en": ["118 cm²", "128 cm²", "138 cm²", "148 cm²"],
    "options_hi": ["118 सेमी²", "128 सेमी²", "138 सेमी²", "148 सेमी²"],
    "answer_en": "148 cm²",
    "answer_hi": "148 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Solve: x/3 = 12",
    "question_hi": "हल करें: x/3 = 12",
    "options_en": ["x=30", "x=33", "x=36", "x=39"],
    "options_hi": ["x=30", "x=33", "x=36", "x=39"],
    "answer_en": "x=36",
    "answer_hi": "x=36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Calculate: 0.9 × 0.11",
    "question_hi": "गणना करें: 0.9 × 0.11",
    "options_en": ["0.089", "0.099", "0.109", "0.119"],
    "options_hi": ["0.089", "0.099", "0.109", "0.119"],
    "answer_en": "0.099",
    "answer_hi": "0.099",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 3/5 as percentage?",
    "question_hi": "3/5 प्रतिशत के रूप में क्या है?",
    "options_en": ["40%", "50%", "60%", "70%"],
    "options_hi": ["40%", "50%", "60%", "70%"],
    "answer_en": "60%",
    "answer_hi": "60%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Find the sum: 1/2 + 2/3 + 3/4",
    "question_hi": "योग ज्ञात करें: 1/2 + 2/3 + 3/4",
    "options_en": ["1 11/12", "2 1/12", "2 3/12", "2 5/12"],
    "options_hi": ["1 11/12", "2 1/12", "2 3/12", "2 5/12"],
    "answer_en": "1 11/12",
    "answer_hi": "1 11/12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the area of equilateral triangle with side 6 cm?",
    "question_hi": "6 सेमी भुजा वाले समबाहु त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["9√3 cm²", "12√3 cm²", "15√3 cm²", "18√3 cm²"],
    "options_hi": ["9√3 सेमी²", "12√3 सेमी²", "15√3 सेमी²", "18√3 सेमी²"],
    "answer_en": "9√3 cm²",
    "answer_hi": "9√3 सेमी²",
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