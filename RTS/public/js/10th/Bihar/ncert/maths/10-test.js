const questions = [
  {
    "num": 1,
    "question_en": "What is the sum of 345 and 678?",
    "question_hi": "345 और 678 का योग क्या है?",
    "options_en": ["1013", "1023", "1033", "1043"],
    "options_hi": ["1013", "1023", "1033", "1043"],
    "answer_en": "1023",
    "answer_hi": "1023",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the product of 45 and 12?",
    "question_hi": "45 और 12 का गुणनफल क्या है?",
    "options_en": ["510", "530", "540", "560"],
    "options_hi": ["510", "530", "540", "560"],
    "answer_en": "540",
    "answer_hi": "540",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 35% of 200?",
    "question_hi": "200 का 35% कितना है?",
    "options_en": ["60", "65", "70", "75"],
    "options_hi": ["60", "65", "70", "75"],
    "answer_en": "70",
    "answer_hi": "70",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Simplify: 8² - 6²",
    "question_hi": "सरल करें: 8² - 6²",
    "options_en": ["20", "24", "28", "32"],
    "options_hi": ["20", "24", "28", "32"],
    "answer_en": "28",
    "answer_hi": "28",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the square root of 169?",
    "question_hi": "169 का वर्गमूल क्या है?",
    "options_en": ["11", "12", "13", "14"],
    "options_hi": ["11", "12", "13", "14"],
    "answer_en": "13",
    "answer_hi": "13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Solve: 3x + 7 = 22",
    "question_hi": "हल करें: 3x + 7 = 22",
    "options_en": ["x=4", "x=5", "x=6", "x=7"],
    "options_hi": ["x=4", "x=5", "x=6", "x=7"],
    "answer_en": "x=5",
    "answer_hi": "x=5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the LCM of 15 and 25?",
    "question_hi": "15 और 25 का लघुत्तम समापवर्तक (LCM) क्या है?",
    "options_en": ["50", "75", "100", "125"],
    "options_hi": ["50", "75", "100", "125"],
    "answer_en": "75",
    "answer_hi": "75",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the HCF of 36 and 48?",
    "question_hi": "36 और 48 का महत्तम समापवर्तक (HCF) क्या है?",
    "options_en": ["6", "9", "12", "15"],
    "options_hi": ["6", "9", "12", "15"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Convert 3/8 to percentage",
    "question_hi": "3/8 को प्रतिशत में बदलें",
    "options_en": ["35%", "37.5%", "40%", "42.5%"],
    "options_hi": ["35%", "37.5%", "40%", "42.5%"],
    "answer_en": "37.5%",
    "answer_hi": "37.5%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 0.75 as a fraction?",
    "question_hi": "0.75 भिन्न के रूप में क्या है?",
    "options_en": ["1/2", "2/3", "3/4", "4/5"],
    "options_hi": ["1/2", "2/3", "3/4", "4/5"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Calculate: 24 ÷ 0.6",
    "question_hi": "गणना करें: 24 ÷ 0.6",
    "options_en": ["30", "35", "40", "45"],
    "options_hi": ["30", "35", "40", "45"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Find the average of 15, 25, 35, 45",
    "question_hi": "15, 25, 35, 45 का औसत ज्ञात करें",
    "options_en": ["25", "28", "30", "32"],
    "options_hi": ["25", "28", "30", "32"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 5/6 of 72?",
    "question_hi": "72 का 5/6 भाग कितना है?",
    "options_en": ["55", "58", "60", "65"],
    "options_hi": ["55", "58", "60", "65"],
    "answer_en": "60",
    "answer_hi": "60",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Solve: 7² + 5²",
    "question_hi": "हल करें: 7² + 5²",
    "options_en": ["64", "74", "84", "94"],
    "options_hi": ["64", "74", "84", "94"],
    "answer_en": "74",
    "answer_hi": "74",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the cube of 5?",
    "question_hi": "5 का घन क्या है?",
    "options_en": ["100", "115", "125", "150"],
    "options_hi": ["100", "115", "125", "150"],
    "answer_en": "125",
    "answer_hi": "125",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Find the value of 6! (6 factorial)",
    "question_hi": "6! (6 फैक्टोरियल) का मान ज्ञात करें",
    "options_en": ["620", "720", "820", "920"],
    "options_hi": ["620", "720", "820", "920"],
    "answer_en": "720",
    "answer_hi": "720",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the area of rectangle with length 12 cm and breadth 8 cm?",
    "question_hi": "12 सेमी लंबाई और 8 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?",
    "options_en": ["84 cm²", "90 cm²", "96 cm²", "102 cm²"],
    "options_hi": ["84 सेमी²", "90 सेमी²", "96 सेमी²", "102 सेमी²"],
    "answer_en": "96 cm²",
    "answer_hi": "96 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Calculate: 5/12 + 1/3",
    "question_hi": "गणना करें: 5/12 + 1/3",
    "options_en": ["3/4", "7/12", "2/3", "9/12"],
    "options_hi": ["3/4", "7/12", "2/3", "9/12"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Simplify: (4x + 3y) - (2x + y)",
    "question_hi": "सरल करें: (4x + 3y) - (2x + y)",
    "options_en": ["2x + 2y", "2x + 3y", "2x + 4y", "3x + 2y"],
    "options_hi": ["2x + 2y", "2x + 3y", "2x + 4y", "3x + 2y"],
    "answer_en": "2x + 2y",
    "answer_hi": "2x + 2y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the perimeter of square with side 9 cm?",
    "question_hi": "9 सेमी भुजा वाले वर्ग का परिमाप क्या है?",
    "options_en": ["30 cm", "32 cm", "34 cm", "36 cm"],
    "options_hi": ["30 सेमी", "32 सेमी", "34 सेमी", "36 सेमी"],
    "answer_en": "36 cm",
    "answer_hi": "36 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Solve: 4x - 9 = 15",
    "question_hi": "हल करें: 4x - 9 = 15",
    "options_en": ["x=5", "x=6", "x=7", "x=8"],
    "options_hi": ["x=5", "x=6", "x=7", "x=8"],
    "answer_en": "x=6",
    "answer_hi": "x=6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 80% of 150?",
    "question_hi": "150 का 80% कितना है?",
    "options_en": ["110", "115", "120", "125"],
    "options_hi": ["110", "115", "120", "125"],
    "answer_en": "120",
    "answer_hi": "120",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Calculate: 5³ + 4³",
    "question_hi": "गणना करें: 5³ + 4³",
    "options_en": ["141", "151", "161", "171"],
    "options_hi": ["141", "151", "161", "171"],
    "answer_en": "141",
    "answer_hi": "141",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Find the value of 0.4 × 0.6",
    "question_hi": "0.4 × 0.6 का मान ज्ञात करें",
    "options_en": ["0.20", "0.24", "0.28", "0.32"],
    "options_hi": ["0.20", "0.24", "0.28", "0.32"],
    "answer_en": "0.24",
    "answer_hi": "0.24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the volume of cube with side 4 cm?",
    "question_hi": "4 सेमी भुजा वाले घन का आयतन क्या है?",
    "options_en": ["48 cm³", "56 cm³", "64 cm³", "72 cm³"],
    "options_hi": ["48 सेमी³", "56 सेमी³", "64 सेमी³", "72 सेमी³"],
    "answer_en": "64 cm³",
    "answer_hi": "64 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Simplify: 18 ÷ 3 + 5 × 2",
    "question_hi": "सरल करें: 18 ÷ 3 + 5 × 2",
    "options_en": ["14", "15", "16", "17"],
    "options_hi": ["14", "15", "16", "17"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Solve: x/5 = 8",
    "question_hi": "हल करें: x/5 = 8",
    "options_en": ["x=35", "x=38", "x=40", "x=42"],
    "options_hi": ["x=35", "x=38", "x=40", "x=42"],
    "answer_en": "x=40",
    "answer_hi": "x=40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Calculate: 3/5 × 4/7",
    "question_hi": "गणना करें: 3/5 × 4/7",
    "options_en": ["12/25", "12/35", "15/28", "16/35"],
    "options_hi": ["12/25", "12/35", "15/28", "16/35"],
    "answer_en": "12/35",
    "answer_hi": "12/35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the circumference of circle with radius 21 cm? (π=22/7)",
    "question_hi": "21 सेमी त्रिज्या वाले वृत्त की परिधि क्या है? (π=22/7)",
    "options_en": ["122 cm", "132 cm", "142 cm", "152 cm"],
    "options_hi": ["122 सेमी", "132 सेमी", "142 सेमी", "152 सेमी"],
    "answer_en": "132 cm",
    "answer_hi": "132 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Find the value of 7⁰ + 4²",
    "question_hi": "7⁰ + 4² का मान ज्ञात करें",
    "options_en": ["15", "16", "17", "18"],
    "options_hi": ["15", "16", "17", "18"],
    "answer_en": "17",
    "answer_hi": "17",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 2.25 as a fraction?",
    "question_hi": "2.25 भिन्न के रूप में क्या है?",
    "options_en": ["9/4", "8/3", "7/3", "5/2"],
    "options_hi": ["9/4", "8/3", "7/3", "5/2"],
    "answer_en": "9/4",
    "answer_hi": "9/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Calculate: 36 × 15 ÷ 6",
    "question_hi": "गणना करें: 36 × 15 ÷ 6",
    "options_en": ["85", "90", "95", "100"],
    "options_hi": ["85", "90", "95", "100"],
    "answer_en": "90",
    "answer_hi": "90",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the area of triangle with base 14 cm and height 8 cm?",
    "question_hi": "14 सेमी आधार और 8 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["50 cm²", "54 cm²", "56 cm²", "60 cm²"],
    "options_hi": ["50 सेमी²", "54 सेमी²", "56 सेमी²", "60 सेमी²"],
    "answer_en": "56 cm²",
    "answer_hi": "56 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Solve: 3(x + 4) = 27",
    "question_hi": "हल करें: 3(x + 4) = 27",
    "options_en": ["x=3", "x=4", "x=5", "x=6"],
    "options_hi": ["x=3", "x=4", "x=5", "x=6"],
    "answer_en": "x=5",
    "answer_hi": "x=5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the cube root of 216?",
    "question_hi": "216 का घनमूल क्या है?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Calculate: 4/7 - 2/5",
    "question_hi": "गणना करें: 4/7 - 2/5",
    "options_en": ["6/35", "8/35", "10/35", "12/35"],
    "options_hi": ["6/35", "8/35", "10/35", "12/35"],
    "answer_en": "6/35",
    "answer_hi": "6/35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 40% as a fraction?",
    "question_hi": "40% भिन्न के रूप में क्या है?",
    "options_en": ["1/4", "2/5", "3/8", "4/9"],
    "options_hi": ["1/4", "2/5", "3/8", "4/9"],
    "answer_en": "2/5",
    "answer_hi": "2/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Find the sum: 2 + 4 + 6 + ... + 20",
    "question_hi": "योग ज्ञात करें: 2 + 4 + 6 + ... + 20",
    "options_en": ["100", "105", "110", "115"],
    "options_hi": ["100", "105", "110", "115"],
    "answer_en": "110",
    "answer_hi": "110",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the perimeter of rectangle with length 15 cm and breadth 10 cm?",
    "question_hi": "15 सेमी लंबाई और 10 सेमी चौड़ाई वाले आयत का परिमाप क्या है?",
    "options_en": ["40 cm", "45 cm", "50 cm", "55 cm"],
    "options_hi": ["40 सेमी", "45 सेमी", "50 सेमी", "55 सेमी"],
    "answer_en": "50 cm",
    "answer_hi": "50 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Simplify: (2a + b)² - (2a - b)²",
    "question_hi": "सरल करें: (2a + b)² - (2a - b)²",
    "options_en": ["4ab", "6ab", "8ab", "10ab"],
    "options_hi": ["4ab", "6ab", "8ab", "10ab"],
    "answer_en": "8ab",
    "answer_hi": "8ab",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Calculate: 0.8 × 35",
    "question_hi": "गणना करें: 0.8 × 35",
    "options_en": ["26", "27", "28", "29"],
    "options_hi": ["26", "27", "28", "29"],
    "answer_en": "28",
    "answer_hi": "28",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the area of circle with radius 14 cm? (π=22/7)",
    "question_hi": "14 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है? (π=22/7)",
    "options_en": ["584 cm²", "604 cm²", "616 cm²", "636 cm²"],
    "options_hi": ["584 सेमी²", "604 सेमी²", "616 सेमी²", "636 सेमी²"],
    "answer_en": "616 cm²",
    "answer_hi": "616 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Solve: 5x/6 = 15",
    "question_hi": "हल करें: 5x/6 = 15",
    "options_en": ["x=16", "x=17", "x=18", "x=19"],
    "options_hi": ["x=16", "x=17", "x=18", "x=19"],
    "answer_en": "x=18",
    "answer_hi": "x=18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 120% of 80?",
    "question_hi": "80 का 120% कितना है?",
    "options_en": ["92", "94", "96", "98"],
    "options_hi": ["92", "94", "96", "98"],
    "answer_en": "96",
    "answer_hi": "96",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Calculate: √196 + √64",
    "question_hi": "गणना करें: √196 + √64",
    "options_en": ["20", "22", "24", "26"],
    "options_hi": ["20", "22", "24", "26"],
    "answer_en": "22",
    "answer_hi": "22",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Find the value of 12³ ÷ 12²",
    "question_hi": "12³ ÷ 12² का मान ज्ञात करें",
    "options_en": ["10", "11", "12", "13"],
    "options_hi": ["10", "11", "12", "13"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the volume of cuboid with dimensions 8×6×4 cm?",
    "question_hi": "8×6×4 सेमी आयाम वाले घनाभ का आयतन क्या है?",
    "options_en": ["180 cm³", "190 cm³", "192 cm³", "200 cm³"],
    "options_hi": ["180 सेमी³", "190 सेमी³", "192 सेमी³", "200 सेमी³"],
    "answer_en": "192 cm³",
    "answer_hi": "192 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Simplify: 5/8 ÷ 3/4",
    "question_hi": "सरल करें: 5/8 ÷ 3/4",
    "options_en": ["5/6", "6/5", "15/32", "20/24"],
    "options_hi": ["5/6", "6/5", "15/32", "20/24"],
    "answer_en": "5/6",
    "answer_hi": "5/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the diagonal of square with side 8 cm?",
    "question_hi": "8 सेमी भुजा वाले वर्ग का विकर्ण क्या है?",
    "options_en": ["8√2 cm", "9√2 cm", "10√2 cm", "11√2 cm"],
    "options_hi": ["8√2 सेमी", "9√2 सेमी", "10√2 सेमी", "11√2 सेमी"],
    "answer_en": "8√2 cm",
    "answer_hi": "8√2 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Solve: 7 - 3x = 16",
    "question_hi": "हल करें: 7 - 3x = 16",
    "options_en": ["x=-2", "x=-3", "x=-4", "x=-5"],
    "options_hi": ["x=-2", "x=-3", "x=-4", "x=-5"],
    "answer_en": "x=-3",
    "answer_hi": "x=-3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Calculate: 4.2 × 3.5",
    "question_hi": "गणना करें: 4.2 × 3.5",
    "options_en": ["13.7", "14.2", "14.7", "15.2"],
    "options_hi": ["13.7", "14.2", "14.7", "15.2"],
    "answer_en": "14.7",
    "answer_hi": "14.7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 0.375 as a fraction?",
    "question_hi": "0.375 भिन्न के रूप में क्या है?",
    "options_en": ["3/7", "3/8", "5/12", "7/16"],
    "options_hi": ["3/7", "3/8", "5/12", "7/16"],
    "answer_en": "3/8",
    "answer_hi": "3/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Find the average of first 6 odd numbers",
    "question_hi": "पहली 6 विषम संख्याओं का औसत ज्ञात करें",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the area of square with side 11 cm?",
    "question_hi": "11 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?",
    "options_en": ["110 cm²", "120 cm²", "121 cm²", "132 cm²"],
    "options_hi": ["110 सेमी²", "120 सेमी²", "121 सेमी²", "132 सेमी²"],
    "answer_en": "121 cm²",
    "answer_hi": "121 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Simplify: (3x)²",
    "question_hi": "सरल करें: (3x)²",
    "options_en": ["3x²", "6x²", "9x²", "12x²"],
    "options_hi": ["3x²", "6x²", "9x²", "12x²"],
    "answer_en": "9x²",
    "answer_hi": "9x²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Calculate: 9/10 - 2/5",
    "question_hi": "गणना करें: 9/10 - 2/5",
    "options_en": ["1/4", "1/2", "3/5", "7/10"],
    "options_hi": ["1/4", "1/2", "3/5", "7/10"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 15% as a decimal?",
    "question_hi": "15% दशमलव के रूप में क्या है?",
    "options_en": ["0.015", "0.15", "1.5", "15.0"],
    "options_hi": ["0.015", "0.15", "1.5", "15.0"],
    "answer_en": "0.15",
    "answer_hi": "0.15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Find the product: 18 × 13",
    "question_hi": "गुणनफल ज्ञात करें: 18 × 13",
    "options_en": ["224", "234", "244", "254"],
    "options_hi": ["224", "234", "244", "254"],
    "answer_en": "234",
    "answer_hi": "234",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the perimeter of triangle with sides 8 cm, 10 cm, 12 cm?",
    "question_hi": "8 सेमी, 10 सेमी, 12 सेमी भुजाओं वाले त्रिभुज का परिमाप क्या है?",
    "options_en": ["28 cm", "29 cm", "30 cm", "31 cm"],
    "options_hi": ["28 सेमी", "29 सेमी", "30 सेमी", "31 सेमी"],
    "answer_en": "30 cm",
    "answer_hi": "30 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Solve: x² = 81",
    "question_hi": "हल करें: x² = 81",
    "options_en": ["x=8", "x=9", "x=10", "x=11"],
    "options_hi": ["x=8", "x=9", "x=10", "x=11"],
    "answer_en": "x=9",
    "answer_hi": "x=9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Calculate: 0.45 ÷ 0.15",
    "question_hi": "गणना करें: 0.45 ÷ 0.15",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is the area of parallelogram with base 15 cm and height 6 cm?",
    "question_hi": "15 सेमी आधार और 6 सेमी ऊँचाई वाले समांतर चतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["80 cm²", "85 cm²", "90 cm²", "95 cm²"],
    "options_hi": ["80 सेमी²", "85 सेमी²", "90 सेमी²", "95 सेमी²"],
    "answer_en": "90 cm²",
    "answer_hi": "90 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Simplify: 6 × (4 + 3) - 8",
    "question_hi": "सरल करें: 6 × (4 + 3) - 8",
    "options_en": ["30", "32", "34", "36"],
    "options_hi": ["30", "32", "34", "36"],
    "answer_en": "34",
    "answer_hi": "34",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 3⁴ × 3²?",
    "question_hi": "3⁴ × 3² क्या है?",
    "options_en": ["3⁶", "3⁸", "729", "2187"],
    "options_hi": ["3⁶", "3⁸", "729", "2187"],
    "answer_en": "729",
    "answer_hi": "729",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Find the value of 144 ÷ (9+3)",
    "question_hi": "144 ÷ (9+3) का मान ज्ञात करें",
    "options_en": ["10", "11", "12", "13"],
    "options_hi": ["10", "11", "12", "13"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is the surface area of cube with side 5 cm?",
    "question_hi": "5 सेमी भुजा वाले घन का पृष्ठीय क्षेत्रफल क्या है?",
    "options_en": ["125 cm²", "135 cm²", "145 cm²", "150 cm²"],
    "options_hi": ["125 सेमी²", "135 सेमी²", "145 सेमी²", "150 सेमी²"],
    "answer_en": "150 cm²",
    "answer_hi": "150 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Solve: 4x + 3 = 3x + 10",
    "question_hi": "हल करें: 4x + 3 = 3x + 10",
    "options_en": ["x=6", "x=7", "x=8", "x=9"],
    "options_hi": ["x=6", "x=7", "x=8", "x=9"],
    "answer_en": "x=7",
    "answer_hi": "x=7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Calculate: 3.25 + 4.75",
    "question_hi": "गणना करें: 3.25 + 4.75",
    "options_en": ["7.00", "7.50", "8.00", "8.50"],
    "options_hi": ["7.00", "7.50", "8.00", "8.50"],
    "answer_en": "8.00",
    "answer_hi": "8.00",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 1/4 of 96?",
    "question_hi": "96 का 1/4 भाग कितना है?",
    "options_en": ["22", "23", "24", "25"],
    "options_hi": ["22", "23", "24", "25"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Find the difference: 250 - 187",
    "question_hi": "अंतर ज्ञात करें: 250 - 187",
    "options_en": ["61", "62", "63", "64"],
    "options_hi": ["61", "62", "63", "64"],
    "answer_en": "63",
    "answer_hi": "63",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the area of trapezium with parallel sides 8 cm, 5 cm and height 6 cm?",
    "question_hi": "8 सेमी, 5 सेमी समानांतर भुजाओं और 6 सेमी ऊँचाई वाले समलंब चतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["36 cm²", "38 cm²", "39 cm²", "40 cm²"],
    "options_hi": ["36 सेमी²", "38 सेमी²", "39 सेमी²", "40 सेमी²"],
    "answer_en": "39 cm²",
    "answer_hi": "39 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Simplify: (x+5)(x+4)",
    "question_hi": "सरल करें: (x+5)(x+4)",
    "options_en": ["x²+8x+20", "x²+9x+20", "x²+9x+25", "x²+10x+20"],
    "options_hi": ["x²+8x+20", "x²+9x+20", "x²+9x+25", "x²+10x+20"],
    "answer_en": "x²+9x+20",
    "answer_hi": "x²+9x+20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Calculate: 1/3 + 1/4 + 1/12",
    "question_hi": "गणना करें: 1/3 + 1/4 + 1/12",
    "options_en": ["2/3", "3/4", "5/6", "7/12"],
    "options_hi": ["2/3", "3/4", "5/6", "7/12"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 0.625 as percentage?",
    "question_hi": "0.625 प्रतिशत के रूप में क्या है?",
    "options_en": ["6.25%", "62.5%", "625%", "0.625%"],
    "options_hi": ["6.25%", "62.5%", "625%", "0.625%"],
    "answer_en": "62.5%",
    "answer_hi": "62.5%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Find the value of √100 × √9",
    "question_hi": "√100 × √9 का मान ज्ञात करें",
    "options_en": ["27", "29", "30", "33"],
    "options_hi": ["27", "29", "30", "33"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is the volume of cylinder with radius 14 cm and height 10 cm? (π=22/7)",
    "question_hi": "14 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले बेलन का आयतन क्या है? (π=22/7)",
    "options_en": ["5860 cm³", "5960 cm³", "6060 cm³", "6160 cm³"],
    "options_hi": ["5860 सेमी³", "5960 सेमी³", "6060 सेमी³", "6160 सेमी³"],
    "answer_en": "6160 cm³",
    "answer_hi": "6160 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Solve: 5(x-3) = 25",
    "question_hi": "हल करें: 5(x-3) = 25",
    "options_en": ["x=6", "x=7", "x=8", "x=9"],
    "options_hi": ["x=6", "x=7", "x=8", "x=9"],
    "answer_en": "x=8",
    "answer_hi": "x=8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Calculate: 63 ÷ 0.9",
    "question_hi": "गणना करें: 63 ÷ 0.9",
    "options_en": ["68", "69", "70", "71"],
    "options_hi": ["68", "69", "70", "71"],
    "answer_en": "70",
    "answer_hi": "70",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 7/8 as a decimal?",
    "question_hi": "7/8 दशमलव के रूप में क्या है?",
    "options_en": ["0.775", "0.825", "0.875", "0.925"],
    "options_hi": ["0.775", "0.825", "0.875", "0.925"],
    "answer_en": "0.875",
    "answer_hi": "0.875",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Find the sum: 48 + 56 + 72",
    "question_hi": "योग ज्ञात करें: 48 + 56 + 72",
    "options_en": ["170", "174", "176", "180"],
    "options_hi": ["170", "174", "176", "180"],
    "answer_en": "176",
    "answer_hi": "176",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the area of rhombus with diagonals 12 cm and 9 cm?",
    "question_hi": "12 सेमी और 9 सेमी विकर्णों वाले समचतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["52 cm²", "54 cm²", "56 cm²", "58 cm²"],
    "options_hi": ["52 सेमी²", "54 सेमी²", "56 सेमी²", "58 सेमी²"],
    "answer_en": "54 cm²",
    "answer_hi": "54 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Simplify: 4³ + 2² + 5¹",
    "question_hi": "सरल करें: 4³ + 2² + 5¹",
    "options_en": ["70", "71", "72", "73"],
    "options_hi": ["70", "71", "72", "73"],
    "answer_en": "73",
    "answer_hi": "73",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Calculate: 9 × 7 ÷ 3",
    "question_hi": "गणना करें: 9 × 7 ÷ 3",
    "options_en": ["19", "20", "21", "22"],
    "options_hi": ["19", "20", "21", "22"],
    "answer_en": "21",
    "answer_hi": "21",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the HCF of 28 and 42?",
    "question_hi": "28 और 42 का HCF क्या है?",
    "options_en": ["12", "14", "16", "18"],
    "options_hi": ["12", "14", "16", "18"],
    "answer_en": "14",
    "answer_hi": "14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Find the value of 0.6²",
    "question_hi": "0.6² का मान ज्ञात करें",
    "options_en": ["0.32", "0.34", "0.36", "0.38"],
    "options_hi": ["0.32", "0.34", "0.36", "0.38"],
    "answer_en": "0.36",
    "answer_hi": "0.36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is the curved surface area of cylinder with radius 14 cm and height 15 cm? (π=22/7)",
    "question_hi": "14 सेमी त्रिज्या और 15 सेमी ऊँचाई वाले बेलन का वक्र पृष्ठीय क्षेत्रफल क्या है? (π=22/7)",
    "options_en": ["1280 cm²", "1300 cm²", "1320 cm²", "1340 cm²"],
    "options_hi": ["1280 सेमी²", "1300 सेमी²", "1320 सेमी²", "1340 सेमी²"],
    "answer_en": "1320 cm²",
    "answer_hi": "1320 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Solve: 3x - 4 = 2x + 9",
    "question_hi": "हल करें: 3x - 4 = 2x + 9",
    "options_en": ["x=11", "x=12", "x=13", "x=14"],
    "options_hi": ["x=11", "x=12", "x=13", "x=14"],
    "answer_en": "x=13",
    "answer_hi": "x=13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Calculate: 4.8 × 3.2",
    "question_hi": "गणना करें: 4.8 × 3.2",
    "options_en": ["14.36", "15.06", "15.36", "16.36"],
    "options_hi": ["14.36", "15.06", "15.36", "16.36"],
    "answer_en": "15.36",
    "answer_hi": "15.36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 66 2/3% as a fraction?",
    "question_hi": "66 2/3% भिन्न के रूप में क्या है?",
    "options_en": ["1/3", "2/3", "3/4", "4/5"],
    "options_hi": ["1/3", "2/3", "3/4", "4/5"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Find the product: 0.9 × 0.12",
    "question_hi": "गुणनफल ज्ञात करें: 0.9 × 0.12",
    "options_en": ["0.098", "0.106", "0.108", "0.118"],
    "options_hi": ["0.098", "0.106", "0.108", "0.118"],
    "answer_en": "0.108",
    "answer_hi": "0.108",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the perimeter of regular pentagon with side 7 cm?",
    "question_hi": "7 सेमी भुजा वाले नियमित पंचभुज का परिमाप क्या है?",
    "options_en": ["30 cm", "32 cm", "34 cm", "35 cm"],
    "options_hi": ["30 सेमी", "32 सेमी", "34 सेमी", "35 सेमी"],
    "answer_en": "35 cm",
    "answer_hi": "35 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Simplify: (x+6)²",
    "question_hi": "सरल करें: (x+6)²",
    "options_en": ["x²+12x+36", "x²+10x+36", "x²+12x+30", "x²+6x+36"],
    "options_hi": ["x²+12x+36", "x²+10x+36", "x²+12x+30", "x²+6x+36"],
    "answer_en": "x²+12x+36",
    "answer_hi": "x²+12x+36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Calculate: 7/9 × 18",
    "question_hi": "गणना करें: 7/9 × 18",
    "options_en": ["13", "14", "15", "16"],
    "options_hi": ["13", "14", "15", "16"],
    "answer_en": "14",
    "answer_hi": "14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 16 2/3% as a fraction?",
    "question_hi": "16 2/3% भिन्न के रूप में क्या है?",
    "options_en": ["1/5", "1/6", "1/7", "1/8"],
    "options_hi": ["1/5", "1/6", "1/7", "1/8"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Find the value of 10² ÷ 5²",
    "question_hi": "10² ÷ 5² का मान ज्ञात करें",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the total surface area of cuboid with dimensions 9×7×5 cm?",
    "question_hi": "9×7×5 सेमी आयाम वाले घनाभ का कुल पृष्ठीय क्षेत्रफल क्या है?",
    "options_en": ["268 cm²", "278 cm²", "286 cm²", "296 cm²"],
    "options_hi": ["268 सेमी²", "278 सेमी²", "286 सेमी²", "296 सेमी²"],
    "answer_en": "286 cm²",
    "answer_hi": "286 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Solve: x/4 = 15",
    "question_hi": "हल करें: x/4 = 15",
    "options_en": ["x=55", "x=58", "x=60", "x=62"],
    "options_hi": ["x=55", "x=58", "x=60", "x=62"],
    "answer_en": "x=60",
    "answer_hi": "x=60",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Calculate: 0.8 × 0.15",
    "question_hi": "गणना करें: 0.8 × 0.15",
    "options_en": ["0.10", "0.11", "0.12", "0.13"],
    "options_hi": ["0.10", "0.11", "0.12", "0.13"],
    "answer_en": "0.12",
    "answer_hi": "0.12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 4/7 as percentage?",
    "question_hi": "4/7 प्रतिशत के रूप में क्या है?",
    "options_en": ["56%", "57%", "58%", "59%"],
    "options_hi": ["56%", "57%", "58%", "59%"],
    "answer_en": "57%",
    "answer_hi": "57%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the area of equilateral triangle with side 8 cm?",
    "question_hi": "8 सेमी भुजा वाले समबाहु त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["16√3 cm²", "18√3 cm²", "20√3 cm²", "22√3 cm²"],
    "options_hi": ["16√3 सेमी²", "18√3 सेमी²", "20√3 सेमी²", "22√3 सेमी²"],
    "answer_en": "16√3 cm²",
    "answer_hi": "16√3 सेमी²",
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