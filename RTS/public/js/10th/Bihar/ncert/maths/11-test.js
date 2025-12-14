const questions =[
  {
    "num": 1,
    "question_en": "What is the sum of 235 and 467?",
    "question_hi": "235 और 467 का योग क्या है?",
    "options_en": ["692", "702", "712", "722"],
    "options_hi": ["692", "702", "712", "722"],
    "answer_en": "702",
    "answer_hi": "702",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 45% of 300?",
    "question_hi": "300 का 45% कितना है?",
    "options_en": ["125", "130", "135", "140"],
    "options_hi": ["125", "130", "135", "140"],
    "answer_en": "135",
    "answer_hi": "135",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Simplify: 7² + 5²",
    "question_hi": "सरल करें: 7² + 5²",
    "options_en": ["64", "74", "84", "94"],
    "options_hi": ["64", "74", "84", "94"],
    "answer_en": "74",
    "answer_hi": "74",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the square root of 225?",
    "question_hi": "225 का वर्गमूल क्या है?",
    "options_en": ["13", "14", "15", "16"],
    "options_hi": ["13", "14", "15", "16"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Solve: 4x + 8 = 36",
    "question_hi": "हल करें: 4x + 8 = 36",
    "options_en": ["x=6", "x=7", "x=8", "x=9"],
    "options_hi": ["x=6", "x=7", "x=8", "x=9"],
    "answer_en": "x=7",
    "answer_hi": "x=7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the LCM of 18 and 24?",
    "question_hi": "18 और 24 का लघुत्तम समापवर्तक (LCM) क्या है?",
    "options_en": ["60", "66", "70", "72"],
    "options_hi": ["60", "66", "70", "72"],
    "answer_en": "72",
    "answer_hi": "72",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the HCF of 54 and 72?",
    "question_hi": "54 और 72 का महत्तम समापवर्तक (HCF) क्या है?",
    "options_en": ["9", "12", "15", "18"],
    "options_hi": ["9", "12", "15", "18"],
    "answer_en": "18",
    "answer_hi": "18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Convert 5/8 to percentage",
    "question_hi": "5/8 को प्रतिशत में बदलें",
    "options_en": ["60%", "62.5%", "65%", "67.5%"],
    "options_hi": ["60%", "62.5%", "65%", "67.5%"],
    "answer_en": "62.5%",
    "answer_hi": "62.5%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 0.8 as a fraction?",
    "question_hi": "0.8 भिन्न के रूप में क्या है?",
    "options_en": ["3/4", "4/5", "5/6", "7/8"],
    "options_hi": ["3/4", "4/5", "5/6", "7/8"],
    "answer_en": "4/5",
    "answer_hi": "4/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Calculate: 36 ÷ 0.9",
    "question_hi": "गणना करें: 36 ÷ 0.9",
    "options_en": ["38", "40", "42", "44"],
    "options_hi": ["38", "40", "42", "44"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Find the average of 20, 30, 40, 50, 60",
    "question_hi": "20, 30, 40, 50, 60 का औसत ज्ञात करें",
    "options_en": ["38", "40", "42", "44"],
    "options_hi": ["38", "40", "42", "44"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 3/5 of 150?",
    "question_hi": "150 का 3/5 भाग कितना है?",
    "options_en": ["85", "88", "90", "92"],
    "options_hi": ["85", "88", "90", "92"],
    "answer_en": "90",
    "answer_hi": "90",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Simplify: 9² - 4²",
    "question_hi": "सरल करें: 9² - 4²",
    "options_en": ["55", "60", "65", "70"],
    "options_hi": ["55", "60", "65", "70"],
    "answer_en": "65",
    "answer_hi": "65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the cube of 6?",
    "question_hi": "6 का घन क्या है?",
    "options_en": ["196", "206", "216", "226"],
    "options_hi": ["196", "206", "216", "226"],
    "answer_en": "216",
    "answer_hi": "216",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Find the value of 5! (5 factorial)",
    "question_hi": "5! (5 फैक्टोरियल) का मान ज्ञात करें",
    "options_en": ["100", "110", "120", "130"],
    "options_hi": ["100", "110", "120", "130"],
    "answer_en": "120",
    "answer_hi": "120",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the area of rectangle with length 15 cm and breadth 6 cm?",
    "question_hi": "15 सेमी लंबाई और 6 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?",
    "options_en": ["80 cm²", "85 cm²", "90 cm²", "95 cm²"],
    "options_hi": ["80 सेमी²", "85 सेमी²", "90 सेमी²", "95 सेमी²"],
    "answer_en": "90 cm²",
    "answer_hi": "90 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Calculate: 2/3 + 3/4",
    "question_hi": "गणना करें: 2/3 + 3/4",
    "options_en": ["17/12", "18/12", "19/12", "20/12"],
    "options_hi": ["17/12", "18/12", "19/12", "20/12"],
    "answer_en": "17/12",
    "answer_hi": "17/12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Simplify: (5x + 4y) - (2x + y)",
    "question_hi": "सरल करें: (5x + 4y) - (2x + y)",
    "options_en": ["3x + 3y", "3x + 4y", "4x + 3y", "4x + 4y"],
    "options_hi": ["3x + 3y", "3x + 4y", "4x + 3y", "4x + 4y"],
    "answer_en": "3x + 3y",
    "answer_hi": "3x + 3y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the perimeter of square with side 12 cm?",
    "question_hi": "12 सेमी भुजा वाले वर्ग का परिमाप क्या है?",
    "options_en": ["44 cm", "46 cm", "48 cm", "50 cm"],
    "options_hi": ["44 सेमी", "46 सेमी", "48 सेमी", "50 सेमी"],
    "answer_en": "48 cm",
    "answer_hi": "48 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Solve: 5x - 12 = 28",
    "question_hi": "हल करें: 5x - 12 = 28",
    "options_en": ["x=6", "x=7", "x=8", "x=9"],
    "options_hi": ["x=6", "x=7", "x=8", "x=9"],
    "answer_en": "x=8",
    "answer_hi": "x=8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 75% of 240?",
    "question_hi": "240 का 75% कितना है?",
    "options_en": ["170", "175", "180", "185"],
    "options_hi": ["170", "175", "180", "185"],
    "answer_en": "180",
    "answer_hi": "180",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Calculate: 6³ + 3³",
    "question_hi": "गणना करें: 6³ + 3³",
    "options_en": ["225", "230", "235", "243"],
    "options_hi": ["225", "230", "235", "243"],
    "answer_en": "243",
    "answer_hi": "243",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find the value of 0.5 × 0.8",
    "question_hi": "0.5 × 0.8 का मान ज्ञात करें",
    "options_en": ["0.3", "0.4", "0.5", "0.6"],
    "options_hi": ["0.3", "0.4", "0.5", "0.6"],
    "answer_en": "0.4",
    "answer_hi": "0.4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the volume of cube with side 6 cm?",
    "question_hi": "6 सेमी भुजा वाले घन का आयतन क्या है?",
    "options_en": ["196 cm³", "206 cm³", "216 cm³", "226 cm³"],
    "options_hi": ["196 सेमी³", "206 सेमी³", "216 सेमी³", "226 सेमी³"],
    "answer_en": "216 cm³",
    "answer_hi": "216 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Simplify: 24 ÷ 4 + 3 × 5",
    "question_hi": "सरल करें: 24 ÷ 4 + 3 × 5",
    "options_en": ["19", "20", "21", "22"],
    "options_hi": ["19", "20", "21", "22"],
    "answer_en": "21",
    "answer_hi": "21",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Solve: x/6 = 9",
    "question_hi": "हल करें: x/6 = 9",
    "options_en": ["x=52", "x=54", "x=56", "x=58"],
    "options_hi": ["x=52", "x=54", "x=56", "x=58"],
    "answer_en": "x=54",
    "answer_hi": "x=54",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Calculate: 2/5 × 3/7",
    "question_hi": "गणना करें: 2/5 × 3/7",
    "options_en": ["5/35", "6/35", "7/35", "8/35"],
    "options_hi": ["5/35", "6/35", "7/35", "8/35"],
    "answer_en": "6/35",
    "answer_hi": "6/35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the circumference of circle with radius 28 cm? (π=22/7)",
    "question_hi": "28 सेमी त्रिज्या वाले वृत्त की परिधि क्या है? (π=22/7)",
    "options_en": ["164 cm", "168 cm", "172 cm", "176 cm"],
    "options_hi": ["164 सेमी", "168 सेमी", "172 सेमी", "176 सेमी"],
    "answer_en": "176 cm",
    "answer_hi": "176 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Find the value of 9⁰ + 5²",
    "question_hi": "9⁰ + 5² का मान ज्ञात करें",
    "options_en": ["24", "25", "26", "27"],
    "options_hi": ["24", "25", "26", "27"],
    "answer_en": "26",
    "answer_hi": "26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 1.2 as a fraction?",
    "question_hi": "1.2 भिन्न के रूप में क्या है?",
    "options_en": ["5/4", "6/5", "7/6", "8/7"],
    "options_hi": ["5/4", "6/5", "7/6", "8/7"],
    "answer_en": "6/5",
    "answer_hi": "6/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Calculate: 42 × 18 ÷ 6",
    "question_hi": "गणना करें: 42 × 18 ÷ 6",
    "options_en": ["122", "124", "126", "128"],
    "options_hi": ["122", "124", "126", "128"],
    "answer_en": "126",
    "answer_hi": "126",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the area of triangle with base 16 cm and height 9 cm?",
    "question_hi": "16 सेमी आधार और 9 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["68 cm²", "70 cm²", "72 cm²", "74 cm²"],
    "options_hi": ["68 सेमी²", "70 सेमी²", "72 सेमी²", "74 सेमी²"],
    "answer_en": "72 cm²",
    "answer_hi": "72 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Solve: 4(x + 5) = 44",
    "question_hi": "हल करें: 4(x + 5) = 44",
    "options_en": ["x=5", "x=6", "x=7", "x=8"],
    "options_hi": ["x=5", "x=6", "x=7", "x=8"],
    "answer_en": "x=6",
    "answer_hi": "x=6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the cube root of 343?",
    "question_hi": "343 का घनमूल क्या है?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Calculate: 5/8 - 1/4",
    "question_hi": "गणना करें: 5/8 - 1/4",
    "options_en": ["1/8", "2/8", "3/8", "4/8"],
    "options_hi": ["1/8", "2/8", "3/8", "4/8"],
    "answer_en": "3/8",
    "answer_hi": "3/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 85% as a fraction?",
    "question_hi": "85% भिन्न के रूप में क्या है?",
    "options_en": ["17/20", "18/20", "19/20", "20/20"],
    "options_hi": ["17/20", "18/20", "19/20", "20/20"],
    "answer_en": "17/20",
    "answer_hi": "17/20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Find the sum: 3 + 6 + 9 + ... + 30",
    "question_hi": "योग ज्ञात करें: 3 + 6 + 9 + ... + 30",
    "options_en": ["150", "155", "160", "165"],
    "options_hi": ["150", "155", "160", "165"],
    "answer_en": "165",
    "answer_hi": "165",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the perimeter of rectangle with length 18 cm and breadth 12 cm?",
    "question_hi": "18 सेमी लंबाई और 12 सेमी चौड़ाई वाले आयत का परिमाप क्या है?",
    "options_en": ["56 cm", "58 cm", "60 cm", "62 cm"],
    "options_hi": ["56 सेमी", "58 सेमी", "60 सेमी", "62 सेमी"],
    "answer_en": "60 cm",
    "answer_hi": "60 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Simplify: (3a + 2b)² - (3a - 2b)²",
    "question_hi": "सरल करें: (3a + 2b)² - (3a - 2b)²",
    "options_en": ["12ab", "18ab", "24ab", "30ab"],
    "options_hi": ["12ab", "18ab", "24ab", "30ab"],
    "answer_en": "24ab",
    "answer_hi": "24ab",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Calculate: 0.7 × 45",
    "question_hi": "गणना करें: 0.7 × 45",
    "options_en": ["30.5", "31.0", "31.5", "32.0"],
    "options_hi": ["30.5", "31.0", "31.5", "32.0"],
    "answer_en": "31.5",
    "answer_hi": "31.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the area of circle with radius 21 cm? (π=22/7)",
    "question_hi": "21 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है? (π=22/7)",
    "options_en": ["1364 cm²", "1384 cm²", "1386 cm²", "1396 cm²"],
    "options_hi": ["1364 सेमी²", "1384 सेमी²", "1386 सेमी²", "1396 सेमी²"],
    "answer_en": "1386 cm²",
    "answer_hi": "1386 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Solve: 7x/8 = 21",
    "question_hi": "हल करें: 7x/8 = 21",
    "options_en": ["x=22", "x=23", "x=24", "x=25"],
    "options_hi": ["x=22", "x=23", "x=24", "x=25"],
    "answer_en": "x=24",
    "answer_hi": "x=24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 110% of 90?",
    "question_hi": "90 का 110% कितना है?",
    "options_en": ["97", "98", "99", "100"],
    "options_hi": ["97", "98", "99", "100"],
    "answer_en": "99",
    "answer_hi": "99",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Calculate: √256 + √144",
    "question_hi": "गणना करें: √256 + √144",
    "options_en": ["26", "27", "28", "29"],
    "options_hi": ["26", "27", "28", "29"],
    "answer_en": "28",
    "answer_hi": "28",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Find the value of 15³ ÷ 15²",
    "question_hi": "15³ ÷ 15² का मान ज्ञात करें",
    "options_en": ["13", "14", "15", "16"],
    "options_hi": ["13", "14", "15", "16"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the volume of cuboid with dimensions 10×7×5 cm?",
    "question_hi": "10×7×5 सेमी आयाम वाले घनाभ का आयतन क्या है?",
    "options_en": ["340 cm³", "350 cm³", "360 cm³", "370 cm³"],
    "options_hi": ["340 सेमी³", "350 सेमी³", "360 सेमी³", "370 सेमी³"],
    "answer_en": "350 cm³",
    "answer_hi": "350 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Simplify: 7/9 ÷ 2/3",
    "question_hi": "सरल करें: 7/9 ÷ 2/3",
    "options_en": ["7/6", "6/7", "14/27", "21/18"],
    "options_hi": ["7/6", "6/7", "14/27", "21/18"],
    "answer_en": "7/6",
    "answer_hi": "7/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the diagonal of square with side 10 cm?",
    "question_hi": "10 सेमी भुजा वाले वर्ग का विकर्ण क्या है?",
    "options_en": ["10√2 cm", "11√2 cm", "12√2 cm", "13√2 cm"],
    "options_hi": ["10√2 सेमी", "11√2 सेमी", "12√2 सेमी", "13√2 सेमी"],
    "answer_en": "10√2 cm",
    "answer_hi": "10√2 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Solve: 9 - 2x = 21",
    "question_hi": "हल करें: 9 - 2x = 21",
    "options_en": ["x=-5", "x=-6", "x=-7", "x=-8"],
    "options_hi": ["x=-5", "x=-6", "x=-7", "x=-8"],
    "answer_en": "x=-6",
    "answer_hi": "x=-6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Calculate: 5.4 × 2.5",
    "question_hi": "गणना करें: 5.4 × 2.5",
    "options_en": ["13.2", "13.5", "13.8", "14.1"],
    "options_hi": ["13.2", "13.5", "13.8", "14.1"],
    "answer_en": "13.5",
    "answer_hi": "13.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 0.875 as a fraction?",
    "question_hi": "0.875 भिन्न के रूप में क्या है?",
    "options_en": ["6/7", "7/8", "8/9", "9/10"],
    "options_hi": ["6/7", "7/8", "8/9", "9/10"],
    "answer_en": "7/8",
    "answer_hi": "7/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Find the average of first 8 natural numbers",
    "question_hi": "पहली 8 प्राकृतिक संख्याओं का औसत ज्ञात करें",
    "options_en": ["4.5", "5.0", "5.5", "6.0"],
    "options_hi": ["4.5", "5.0", "5.5", "6.0"],
    "answer_en": "4.5",
    "answer_hi": "4.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the area of square with side 14 cm?",
    "question_hi": "14 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?",
    "options_en": ["186 cm²", "192 cm²", "196 cm²", "200 cm²"],
    "options_hi": ["186 सेमी²", "192 सेमी²", "196 सेमी²", "200 सेमी²"],
    "answer_en": "196 cm²",
    "answer_hi": "196 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Simplify: (4x)³",
    "question_hi": "सरल करें: (4x)³",
    "options_en": ["12x³", "16x³", "32x³", "64x³"],
    "options_hi": ["12x³", "16x³", "32x³", "64x³"],
    "answer_en": "64x³",
    "answer_hi": "64x³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Calculate: 11/12 - 2/3",
    "question_hi": "गणना करें: 11/12 - 2/3",
    "options_en": ["1/4", "1/3", "1/2", "3/4"],
    "options_hi": ["1/4", "1/3", "1/2", "3/4"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 30% as a decimal?",
    "question_hi": "30% दशमलव के रूप में क्या है?",
    "options_en": ["0.03", "0.3", "3.0", "30.0"],
    "options_hi": ["0.03", "0.3", "3.0", "30.0"],
    "answer_en": "0.3",
    "answer_hi": "0.3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Find the product: 17 × 14",
    "question_hi": "गुणनफल ज्ञात करें: 17 × 14",
    "options_en": ["228", "234", "238", "244"],
    "options_hi": ["228", "234", "238", "244"],
    "answer_en": "238",
    "answer_hi": "238",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the perimeter of triangle with sides 9 cm, 12 cm, 15 cm?",
    "question_hi": "9 सेमी, 12 सेमी, 15 सेमी भुजाओं वाले त्रिभुज का परिमाप क्या है?",
    "options_en": ["34 cm", "35 cm", "36 cm", "37 cm"],
    "options_hi": ["34 सेमी", "35 सेमी", "36 सेमी", "37 सेमी"],
    "answer_en": "36 cm",
    "answer_hi": "36 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Solve: x² = 100",
    "question_hi": "हल करें: x² = 100",
    "options_en": ["x=9", "x=10", "x=11", "x=12"],
    "options_hi": ["x=9", "x=10", "x=11", "x=12"],
    "answer_en": "x=10",
    "answer_hi": "x=10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Calculate: 0.84 ÷ 0.12",
    "question_hi": "गणना करें: 0.84 ÷ 0.12",
    "options_en": ["6", "7", "8", "9"],
    "options_hi": ["6", "7", "8", "9"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the area of parallelogram with base 18 cm and height 7 cm?",
    "question_hi": "18 सेमी आधार और 7 सेमी ऊँचाई वाले समांतर चतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["116 cm²", "120 cm²", "124 cm²", "126 cm²"],
    "options_hi": ["116 सेमी²", "120 सेमी²", "124 सेमी²", "126 सेमी²"],
    "answer_en": "126 cm²",
    "answer_hi": "126 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Simplify: 8 × (5 + 2) - 6",
    "question_hi": "सरल करें: 8 × (5 + 2) - 6",
    "options_en": ["48", "50", "52", "54"],
    "options_hi": ["48", "50", "52", "54"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 2⁵ × 2³?",
    "question_hi": "2⁵ × 2³ क्या है?",
    "options_en": ["2⁸", "2¹⁵", "256", "512"],
    "options_hi": ["2⁸", "2¹⁵", "256", "512"],
    "answer_en": "256",
    "answer_hi": "256",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Find the value of 180 ÷ (12+3)",
    "question_hi": "180 ÷ (12+3) का मान ज्ञात करें",
    "options_en": ["10", "11", "12", "13"],
    "options_hi": ["10", "11", "12", "13"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the surface area of cube with side 7 cm?",
    "question_hi": "7 सेमी भुजा वाले घन का पृष्ठीय क्षेत्रफल क्या है?",
    "options_en": ["284 cm²", "288 cm²", "292 cm²", "294 cm²"],
    "options_hi": ["284 सेमी²", "288 सेमी²", "292 सेमी²", "294 सेमी²"],
    "answer_en": "294 cm²",
    "answer_hi": "294 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Solve: 6x + 4 = 5x + 12",
    "question_hi": "हल करें: 6x + 4 = 5x + 12",
    "options_en": ["x=7", "x=8", "x=9", "x=10"],
    "options_hi": ["x=7", "x=8", "x=9", "x=10"],
    "answer_en": "x=8",
    "answer_hi": "x=8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Calculate: 4.5 + 5.25",
    "question_hi": "गणना करें: 4.5 + 5.25",
    "options_en": ["9.50", "9.75", "10.00", "10.25"],
    "options_hi": ["9.50", "9.75", "10.00", "10.25"],
    "answer_en": "9.75",
    "answer_hi": "9.75",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 2/7 of 84?",
    "question_hi": "84 का 2/7 भाग कितना है?",
    "options_en": ["22", "23", "24", "25"],
    "options_hi": ["22", "23", "24", "25"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Find the difference: 300 - 189",
    "question_hi": "अंतर ज्ञात करें: 300 - 189",
    "options_en": ["109", "110", "111", "112"],
    "options_hi": ["109", "110", "111", "112"],
    "answer_en": "111",
    "answer_hi": "111",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the area of trapezium with parallel sides 10 cm, 7 cm and height 8 cm?",
    "question_hi": "10 सेमी, 7 सेमी समानांतर भुजाओं और 8 सेमी ऊँचाई वाले समलंब चतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["64 cm²", "66 cm²", "68 cm²", "70 cm²"],
    "options_hi": ["64 सेमी²", "66 सेमी²", "68 सेमी²", "70 सेमी²"],
    "answer_en": "68 cm²",
    "answer_hi": "68 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Simplify: (x+7)(x+3)",
    "question_hi": "सरल करें: (x+7)(x+3)",
    "options_en": ["x²+10x+21", "x²+9x+21", "x²+10x+20", "x²+9x+20"],
    "options_hi": ["x²+10x+21", "x²+9x+21", "x²+10x+20", "x²+9x+20"],
    "answer_en": "x²+10x+21",
    "answer_hi": "x²+10x+21",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Calculate: 1/4 + 1/5 + 1/20",
    "question_hi": "गणना करें: 1/4 + 1/5 + 1/20",
    "options_en": ["1/2", "2/3", "3/4", "4/5"],
    "options_hi": ["1/2", "2/3", "3/4", "4/5"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 0.333... as a fraction?",
    "question_hi": "0.333... भिन्न के रूप में क्या है?",
    "options_en": ["1/2", "1/3", "1/4", "1/5"],
    "options_hi": ["1/2", "1/3", "1/4", "1/5"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Find the value of √400 × √25",
    "question_hi": "√400 × √25 का मान ज्ञात करें",
    "options_en": ["90", "95", "100", "105"],
    "options_hi": ["90", "95", "100", "105"],
    "answer_en": "100",
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the volume of cylinder with radius 7 cm and height 20 cm? (π=22/7)",
    "question_hi": "7 सेमी त्रिज्या और 20 सेमी ऊँचाई वाले बेलन का आयतन क्या है? (π=22/7)",
    "options_en": ["2960 cm³", "3000 cm³", "3080 cm³", "3160 cm³"],
    "options_hi": ["2960 सेमी³", "3000 सेमी³", "3080 सेमी³", "3160 सेमी³"],
    "answer_en": "3080 cm³",
    "answer_hi": "3080 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Solve: 6(x-2) = 42",
    "question_hi": "हल करें: 6(x-2) = 42",
    "options_en": ["x=8", "x=9", "x=10", "x=11"],
    "options_hi": ["x=8", "x=9", "x=10", "x=11"],
    "answer_en": "x=9",
    "answer_hi": "x=9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Calculate: 81 ÷ 0.9",
    "question_hi": "गणना करें: 81 ÷ 0.9",
    "options_en": ["88", "89", "90", "91"],
    "options_hi": ["88", "89", "90", "91"],
    "answer_en": "90",
    "answer_hi": "90",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 9/10 as a decimal?",
    "question_hi": "9/10 दशमलव के रूप में क्या है?",
    "options_en": ["0.8", "0.85", "0.9", "0.95"],
    "options_hi": ["0.8", "0.85", "0.9", "0.95"],
    "answer_en": "0.9",
    "answer_hi": "0.9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Find the sum: 65 + 78 + 92",
    "question_hi": "योग ज्ञात करें: 65 + 78 + 92",
    "options_en": ["230", "235", "240", "245"],
    "options_hi": ["230", "235", "240", "245"],
    "answer_en": "235",
    "answer_hi": "235",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the area of rhombus with diagonals 15 cm and 8 cm?",
    "question_hi": "15 सेमी और 8 सेमी विकर्णों वाले समचतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["58 cm²", "60 cm²", "62 cm²", "64 cm²"],
    "options_hi": ["58 सेमी²", "60 सेमी²", "62 सेमी²", "64 सेमी²"],
    "answer_en": "60 cm²",
    "answer_hi": "60 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Simplify: 5³ + 3² + 4¹",
    "question_hi": "सरल करें: 5³ + 3² + 4¹",
    "options_en": ["135", "138", "140", "142"],
    "options_hi": ["135", "138", "140", "142"],
    "answer_en": "138",
    "answer_hi": "138",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Calculate: 12 × 6 ÷ 4",
    "question_hi": "गणना करें: 12 × 6 ÷ 4",
    "options_en": ["16", "17", "18", "19"],
    "options_hi": ["16", "17", "18", "19"],
    "answer_en": "18",
    "answer_hi": "18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the HCF of 45 and 60?",
    "question_hi": "45 और 60 का HCF क्या है?",
    "options_en": ["10", "12", "15", "18"],
    "options_hi": ["10", "12", "15", "18"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Find the value of 0.9²",
    "question_hi": "0.9² का मान ज्ञात करें",
    "options_en": ["0.79", "0.80", "0.81", "0.82"],
    "options_hi": ["0.79", "0.80", "0.81", "0.82"],
    "answer_en": "0.81",
    "answer_hi": "0.81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the curved surface area of cylinder with radius 21 cm and height 10 cm? (π=22/7)",
    "question_hi": "21 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले बेलन का वक्र पृष्ठीय क्षेत्रफल क्या है? (π=22/7)",
    "options_en": ["1300 cm²", "1310 cm²", "1320 cm²", "1340 cm²"],
    "options_hi": ["1300 सेमी²", "1310 सेमी²", "1320 सेमी²", "1340 सेमी²"],
    "answer_en": "1320 cm²",
    "answer_hi": "1320 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Solve: 7x - 5 = 6x + 8",
    "question_hi": "हल करें: 7x - 5 = 6x + 8",
    "options_en": ["x=11", "x=12", "x=13", "x=14"],
    "options_hi": ["x=11", "x=12", "x=13", "x=14"],
    "answer_en": "x=13",
    "answer_hi": "x=13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Calculate: 6.3 × 4.2",
    "question_hi": "गणना करें: 6.3 × 4.2",
    "options_en": ["26.26", "26.36", "26.46", "26.56"],
    "options_hi": ["26.26", "26.36", "26.46", "26.56"],
    "answer_en": "26.46",
    "answer_hi": "26.46",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 37.5% as a fraction?",
    "question_hi": "37.5% भिन्न के रूप में क्या है?",
    "options_en": ["3/7", "3/8", "4/9", "5/12"],
    "options_hi": ["3/7", "3/8", "4/9", "5/12"],
    "answer_en": "3/8",
    "answer_hi": "3/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Find the product: 0.8 × 0.25",
    "question_hi": "गुणनफल ज्ञात करें: 0.8 × 0.25",
    "options_en": ["0.18", "0.19", "0.20", "0.21"],
    "options_hi": ["0.18", "0.19", "0.20", "0.21"],
    "answer_en": "0.20",
    "answer_hi": "0.20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is the perimeter of regular hexagon with side 8 cm?",
    "question_hi": "8 सेमी भुजा वाले नियमित षट्भुज का परिमाप क्या है?",
    "options_en": ["46 cm", "47 cm", "48 cm", "49 cm"],
    "options_hi": ["46 सेमी", "47 सेमी", "48 सेमी", "49 सेमी"],
    "answer_en": "48 cm",
    "answer_hi": "48 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Simplify: (x+8)²",
    "question_hi": "सरल करें: (x+8)²",
    "options_en": ["x²+16x+64", "x²+14x+64", "x²+16x+56", "x²+8x+64"],
    "options_hi": ["x²+16x+64", "x²+14x+64", "x²+16x+56", "x²+8x+64"],
    "answer_en": "x²+16x+64",
    "answer_hi": "x²+16x+64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Calculate: 5/6 × 24",
    "question_hi": "गणना करें: 5/6 × 24",
    "options_en": ["18", "19", "20", "21"],
    "options_hi": ["18", "19", "20", "21"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 87.5% as a fraction?",
    "question_hi": "87.5% भिन्न के रूप में क्या है?",
    "options_en": ["5/6", "6/7", "7/8", "8/9"],
    "options_hi": ["5/6", "6/7", "7/8", "8/9"],
    "answer_en": "7/8",
    "answer_hi": "7/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Find the value of 12² ÷ 4²",
    "question_hi": "12² ÷ 4² का मान ज्ञात करें",
    "options_en": ["7", "8", "9", "10"],
    "options_hi": ["7", "8", "9", "10"],
    "answer_en": "9",
    "answer_hi": "9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the total surface area of cuboid with dimensions 12×8×6 cm?",
    "question_hi": "12×8×6 सेमी आयाम वाले घनाभ का कुल पृष्ठीय क्षेत्रफल क्या है?",
    "options_en": ["410 cm²", "420 cm²", "430 cm²", "440 cm²"],
    "options_hi": ["410 सेमी²", "420 सेमी²", "430 सेमी²", "440 सेमी²"],
    "answer_en": "432 cm²",
    "answer_hi": "432 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Solve: x/8 = 7",
    "question_hi": "हल करें: x/8 = 7",
    "options_en": ["x=54", "x=55", "x=56", "x=57"],
    "options_hi": ["x=54", "x=55", "x=56", "x=57"],
    "answer_en": "x=56",
    "answer_hi": "x=56",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Calculate: 0.6 × 0.35",
    "question_hi": "गणना करें: 0.6 × 0.35",
    "options_en": ["0.19", "0.20", "0.21", "0.22"],
    "options_hi": ["0.19", "0.20", "0.21", "0.22"],
    "answer_en": "0.21",
    "answer_hi": "0.21",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 5/9 as percentage?",
    "question_hi": "5/9 प्रतिशत के रूप में क्या है?",
    "options_en": ["55.5%", "56.5%", "57.5%", "58.5%"],
    "options_hi": ["55.5%", "56.5%", "57.5%", "58.5%"],
    "answer_en": "55.5%",
    "answer_hi": "55.5%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Find the sum: 1/5 + 3/10 + 2/5",
    "question_hi": "योग ज्ञात करें: 1/5 + 3/10 + 2/5",
    "options_en": ["7/10", "8/10", "9/10", "10/10"],
    "options_hi": ["7/10", "8/10", "9/10", "10/10"],
    "answer_en": "9/10",
    "answer_hi": "9/10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the area of equilateral triangle with side 10 cm?",
    "question_hi": "10 सेमी भुजा वाले समबाहु त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["25√3 cm²", "30√3 cm²", "35√3 cm²", "40√3 cm²"],
    "options_hi": ["25√3 सेमी²", "30√3 सेमी²", "35√3 सेमी²", "40√3 सेमी²"],
    "answer_en": "25√3 cm²",
    "answer_hi": "25√3 सेमी²",
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