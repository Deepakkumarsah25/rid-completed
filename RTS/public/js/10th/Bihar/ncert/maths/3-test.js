const questions =[
  {
    "num": 1,
    "question_en": "What is the value of 7²?",
    "question_hi": "7² का मान क्या है?",
    "options_en": ["14", "49", "42", "28"],
    "options_hi": ["14", "49", "42", "28"],
    "answer_en": "49",
    "answer_hi": "49",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
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
    "num": 3,
    "question_en": "What is the value of 5³?",
    "question_hi": "5³ का मान क्या है?",
    "options_en": ["15", "25", "125", "625"],
    "options_hi": ["15", "25", "125", "625"],
    "answer_en": "125",
    "answer_hi": "125",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the cube root of 27?",
    "question_hi": "27 का घनमूल क्या है?",
    "options_en": ["2", "3", "4", "9"],
    "options_hi": ["2", "3", "4", "9"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 15% of 200?",
    "question_hi": "200 का 15% क्या है?",
    "options_en": ["15", "20", "30", "45"],
    "options_hi": ["15", "20", "30", "45"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the value of (8 × 7) + 12?",
    "question_hi": "(8 × 7) + 12 का मान क्या है?",
    "options_en": ["56", "68", "76", "84"],
    "options_hi": ["56", "68", "76", "84"],
    "answer_en": "68",
    "answer_hi": "68",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 25% of 80?",
    "question_hi": "80 का 25% क्या है?",
    "options_en": ["15", "20", "25", "30"],
    "options_hi": ["15", "20", "25", "30"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the HCF of 24 and 36?",
    "question_hi": "24 और 36 का म.स.प. (HCF) क्या है?",
    "options_en": ["4", "6", "8", "12"],
    "options_hi": ["4", "6", "8", "12"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the LCM of 6 and 8?",
    "question_hi": "6 और 8 का ल.स.प. (LCM) क्या है?",
    "options_en": ["12", "16", "24", "48"],
    "options_hi": ["12", "16", "24", "48"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the value of 3⁴?",
    "question_hi": "3⁴ का मान क्या है?",
    "options_en": ["12", "27", "81", "243"],
    "options_hi": ["12", "27", "81", "243"],
    "answer_en": "81",
    "answer_hi": "81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 0.5 × 0.2?",
    "question_hi": "0.5 × 0.2 क्या है?",
    "options_en": ["0.01", "0.1", "1.0", "0.001"],
    "options_hi": ["0.01", "0.1", "1.0", "0.001"],
    "answer_en": "0.1",
    "answer_hi": "0.1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is ¾ of 48?",
    "question_hi": "48 का ¾ क्या है?",
    "options_en": ["12", "24", "36", "40"],
    "options_hi": ["12", "24", "36", "40"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 2/5 as a percentage?",
    "question_hi": "2/5 प्रतिशत में क्या है?",
    "options_en": ["20%", "25%", "40%", "50%"],
    "options_hi": ["20%", "25%", "40%", "50%"],
    "answer_en": "40%",
    "answer_hi": "40%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the decimal form of 3/8?",
    "question_hi": "3/8 का दशमलव रूप क्या है?",
    "options_en": ["0.125", "0.25", "0.375", "0.5"],
    "options_hi": ["0.125", "0.25", "0.375", "0.5"],
    "answer_en": "0.375",
    "answer_hi": "0.375",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the square of 13?",
    "question_hi": "13 का वर्ग क्या है?",
    "options_en": ["156", "169", "196", "225"],
    "options_hi": ["156", "169", "196", "225"],
    "answer_en": "169",
    "answer_hi": "169",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is √169?",
    "question_hi": "√169 क्या है?",
    "options_en": ["11", "12", "13", "14"],
    "options_hi": ["11", "12", "13", "14"],
    "answer_en": "13",
    "answer_hi": "13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 7.5 × 4?",
    "question_hi": "7.5 × 4 क्या है?",
    "options_en": ["28", "30", "32", "34"],
    "options_hi": ["28", "30", "32", "34"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 45 ÷ 0.5?",
    "question_hi": "45 ÷ 0.5 क्या है?",
    "options_en": ["22.5", "45", "90", "180"],
    "options_hi": ["22.5", "45", "90", "180"],
    "answer_en": "90",
    "answer_hi": "90",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the average of 12, 15, 18, 21?",
    "question_hi": "12, 15, 18, 21 का औसत क्या है?",
    "options_en": ["15", "16", "16.5", "17"],
    "options_hi": ["15", "16", "16.5", "17"],
    "answer_en": "16.5",
    "answer_hi": "16.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 3² + 4²?",
    "question_hi": "3² + 4² क्या है?",
    "options_en": ["7", "12", "25", "49"],
    "options_hi": ["7", "12", "25", "49"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 5! (5 factorial)?",
    "question_hi": "5! (5 फैक्टोरियल) क्या है?",
    "options_en": ["60", "80", "100", "120"],
    "options_hi": ["60", "80", "100", "120"],
    "answer_en": "120",
    "answer_hi": "120",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 10% of 350?",
    "question_hi": "350 का 10% क्या है?",
    "options_en": ["3.5", "35", "350", "35.5"],
    "options_hi": ["3.5", "35", "350", "35.5"],
    "answer_en": "35",
    "answer_hi": "35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 1/4 + 1/2?",
    "question_hi": "1/4 + 1/2 क्या है?",
    "options_en": ["1/6", "2/6", "3/4", "2/3"],
    "options_hi": ["1/6", "2/6", "3/4", "2/3"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 0.25 × 100?",
    "question_hi": "0.25 × 100 क्या है?",
    "options_en": ["25", "2.5", "250", "0.025"],
    "options_hi": ["25", "2.5", "250", "0.025"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the square of 1.5?",
    "question_hi": "1.5 का वर्ग क्या है?",
    "options_en": ["1.75", "2.25", "3.0", "2.5"],
    "options_hi": ["1.75", "2.25", "3.0", "2.5"],
    "answer_en": "2.25",
    "answer_hi": "2.25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 12.5% of 80?",
    "question_hi": "80 का 12.5% क्या है?",
    "options_en": ["8", "10", "12", "15"],
    "options_hi": ["8", "10", "12", "15"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 1/3 of 90?",
    "question_hi": "90 का 1/3 क्या है?",
    "options_en": ["20", "30", "40", "45"],
    "options_hi": ["20", "30", "40", "45"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the cube of 4?",
    "question_hi": "4 का घन क्या है?",
    "options_en": ["16", "32", "64", "128"],
    "options_hi": ["16", "32", "64", "128"],
    "answer_en": "64",
    "answer_hi": "64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is ³√64?",
    "question_hi": "³√64 क्या है?",
    "options_en": ["2", "3", "4", "8"],
    "options_hi": ["2", "3", "4", "8"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 75% of 120?",
    "question_hi": "120 का 75% क्या है?",
    "options_en": ["80", "85", "90", "95"],
    "options_hi": ["80", "85", "90", "95"],
    "answer_en": "90",
    "answer_hi": "90",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 0.6 as a fraction?",
    "question_hi": "0.6 भिन्न के रूप में क्या है?",
    "options_en": ["3/4", "3/5", "2/3", "5/8"],
    "options_hi": ["3/4", "3/5", "2/3", "5/8"],
    "answer_en": "3/5",
    "answer_hi": "3/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 9² - 7²?",
    "question_hi": "9² - 7² क्या है?",
    "options_en": ["16", "25", "32", "49"],
    "options_hi": ["16", "25", "32", "49"],
    "answer_en": "32",
    "answer_hi": "32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the HCF of 18 and 27?",
    "question_hi": "18 और 27 का म.स.प. क्या है?",
    "options_en": ["3", "6", "9", "18"],
    "options_hi": ["3", "6", "9", "18"],
    "answer_en": "9",
    "answer_hi": "9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the LCM of 9 and 12?",
    "question_hi": "9 और 12 का ल.स.प. क्या है?",
    "options_en": ["18", "24", "36", "48"],
    "options_hi": ["18", "24", "36", "48"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 1.2 × 2.5?",
    "question_hi": "1.2 × 2.5 क्या है?",
    "options_en": ["2.8", "3.0", "3.2", "3.5"],
    "options_hi": ["2.8", "3.0", "3.2", "3.5"],
    "answer_en": "3.0",
    "answer_hi": "3.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 144 ÷ 1.2?",
    "question_hi": "144 ÷ 1.2 क्या है?",
    "options_en": ["100", "120", "144", "172.8"],
    "options_hi": ["100", "120", "144", "172.8"],
    "answer_en": "120",
    "answer_hi": "120",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 2/3 of 150?",
    "question_hi": "150 का 2/3 क्या है?",
    "options_en": ["50", "75", "100", "125"],
    "options_hi": ["50", "75", "100", "125"],
    "answer_en": "100",
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 37.5% of 80?",
    "question_hi": "80 का 37.5% क्या है?",
    "options_en": ["25", "30", "35", "40"],
    "options_hi": ["25", "30", "35", "40"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 0.875 as a fraction?",
    "question_hi": "0.875 भिन्न के रूप में क्या है?",
    "options_en": ["5/8", "6/7", "7/8", "8/9"],
    "options_hi": ["5/8", "6/7", "7/8", "8/9"],
    "answer_en": "7/8",
    "answer_hi": "7/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 4⁴?",
    "question_hi": "4⁴ क्या है?",
    "options_en": ["64", "128", "256", "512"],
    "options_hi": ["64", "128", "256", "512"],
    "answer_en": "256",
    "answer_hi": "256",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 16²?",
    "question_hi": "16² क्या है?",
    "options_en": ["196", "256", "324", "400"],
    "options_hi": ["196", "256", "324", "400"],
    "answer_en": "256",
    "answer_hi": "256",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is √225?",
    "question_hi": "√225 क्या है?",
    "options_en": ["13", "14", "15", "16"],
    "options_hi": ["13", "14", "15", "16"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 1.5³?",
    "question_hi": "1.5³ क्या है?",
    "options_en": ["2.25", "3.0", "3.375", "4.5"],
    "options_hi": ["2.25", "3.0", "3.375", "4.5"],
    "answer_en": "3.375",
    "answer_hi": "3.375",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 20% of 250?",
    "question_hi": "250 का 20% क्या है?",
    "options_en": ["40", "45", "50", "55"],
    "options_hi": ["40", "45", "50", "55"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the average of 25, 35, 45?",
    "question_hi": "25, 35, 45 का औसत क्या है?",
    "options_en": ["30", "35", "40", "45"],
    "options_hi": ["30", "35", "40", "45"],
    "answer_en": "35",
    "answer_hi": "35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 0.4 × 0.25?",
    "question_hi": "0.4 × 0.25 क्या है?",
    "options_en": ["0.01", "0.1", "1.0", "0.001"],
    "options_hi": ["0.01", "0.1", "1.0", "0.001"],
    "answer_en": "0.1",
    "answer_hi": "0.1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 5/8 as a decimal?",
    "question_hi": "5/8 दशमलव में क्या है?",
    "options_en": ["0.5", "0.625", "0.75", "0.875"],
    "options_hi": ["0.5", "0.625", "0.75", "0.875"],
    "answer_en": "0.625",
    "answer_hi": "0.625",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 33⅓% of 90?",
    "question_hi": "90 का 33⅓% क्या है?",
    "options_en": ["25", "30", "35", "40"],
    "options_hi": ["25", "30", "35", "40"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 6! ÷ 5!?",
    "question_hi": "6! ÷ 5! क्या है?",
    "options_en": ["1", "5", "6", "30"],
    "options_hi": ["1", "5", "6", "30"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is (3 + 4)²?",
    "question_hi": "(3 + 4)² क्या है?",
    "options_en": ["25", "49", "64", "81"],
    "options_hi": ["25", "49", "64", "81"],
    "answer_en": "49",
    "answer_hi": "49",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 60% of 75?",
    "question_hi": "75 का 60% क्या है?",
    "options_en": ["40", "45", "50", "55"],
    "options_hi": ["40", "45", "50", "55"],
    "answer_en": "45",
    "answer_hi": "45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 1/5 + 2/5?",
    "question_hi": "1/5 + 2/5 क्या है?",
    "options_en": ["1/5", "2/5", "3/5", "4/5"],
    "options_hi": ["1/5", "2/5", "3/5", "4/5"],
    "answer_en": "3/5",
    "answer_hi": "3/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 0.125 × 8?",
    "question_hi": "0.125 × 8 क्या है?",
    "options_en": ["0.1", "0.5", "1.0", "1.5"],
    "options_hi": ["0.1", "0.5", "1.0", "1.5"],
    "answer_en": "1.0",
    "answer_hi": "1.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the square of 2.5?",
    "question_hi": "2.5 का वर्ग क्या है?",
    "options_en": ["5.0", "5.25", "6.0", "6.25"],
    "options_hi": ["5.0", "5.25", "6.0", "6.25"],
    "answer_en": "6.25",
    "answer_hi": "6.25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 87.5% of 80?",
    "question_hi": "80 का 87.5% क्या है?",
    "options_en": ["65", "68", "70", "72"],
    "options_hi": ["65", "68", "70", "72"],
    "answer_en": "70",
    "answer_hi": "70",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 3/7 of 84?",
    "question_hi": "84 का 3/7 क्या है?",
    "options_en": ["24", "30", "36", "42"],
    "options_hi": ["24", "30", "36", "42"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the cube of 5?",
    "question_hi": "5 का घन क्या है?",
    "options_en": ["100", "125", "150", "175"],
    "options_hi": ["100", "125", "150", "175"],
    "answer_en": "125",
    "answer_hi": "125",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is ³√125?",
    "question_hi": "³√125 क्या है?",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 66⅔% of 60?",
    "question_hi": "60 का 66⅔% क्या है?",
    "options_en": ["35", "40", "45", "50"],
    "options_hi": ["35", "40", "45", "50"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 0.75 as a fraction?",
    "question_hi": "0.75 भिन्न के रूप में क्या है?",
    "options_en": ["1/4", "2/3", "3/4", "4/5"],
    "options_hi": ["1/4", "2/3", "3/4", "4/5"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 11² - 9²?",
    "question_hi": "11² - 9² क्या है?",
    "options_en": ["20", "30", "40", "50"],
    "options_hi": ["20", "30", "40", "50"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is the HCF of 36 and 48?",
    "question_hi": "36 और 48 का म.स.प. क्या है?",
    "options_en": ["6", "9", "12", "18"],
    "options_hi": ["6", "9", "12", "18"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the LCM of 8 and 14?",
    "question_hi": "8 और 14 का ल.स.प. क्या है?",
    "options_en": ["28", "42", "56", "112"],
    "options_hi": ["28", "42", "56", "112"],
    "answer_en": "56",
    "answer_hi": "56",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 2.4 × 3.5?",
    "question_hi": "2.4 × 3.5 क्या है?",
    "options_en": ["7.2", "8.4", "9.6", "10.8"],
    "options_hi": ["7.2", "8.4", "9.6", "10.8"],
    "answer_en": "8.4",
    "answer_hi": "8.4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 225 ÷ 1.5?",
    "question_hi": "225 ÷ 1.5 क्या है?",
    "options_en": ["125", "150", "175", "200"],
    "options_hi": ["125", "150", "175", "200"],
    "answer_en": "150",
    "answer_hi": "150",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 4/9 of 180?",
    "question_hi": "180 का 4/9 क्या है?",
    "options_en": ["60", "70", "80", "90"],
    "options_hi": ["60", "70", "80", "90"],
    "answer_en": "80",
    "answer_hi": "80",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 62.5% of 80?",
    "question_hi": "80 का 62.5% क्या है?",
    "options_en": ["45", "50", "55", "60"],
    "options_hi": ["45", "50", "55", "60"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
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
    "num": 69,
    "question_en": "What is 5⁴?",
    "question_hi": "5⁴ क्या है?",
    "options_en": ["125", "250", "500", "625"],
    "options_hi": ["125", "250", "500", "625"],
    "answer_en": "625",
    "answer_hi": "625",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 17²?",
    "question_hi": "17² क्या है?",
    "options_en": ["269", "279", "289", "299"],
    "options_hi": ["269", "279", "289", "299"],
    "answer_en": "289",
    "answer_hi": "289",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is √256?",
    "question_hi": "√256 क्या है?",
    "options_en": ["14", "15", "16", "17"],
    "options_hi": ["14", "15", "16", "17"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 2.5³?",
    "question_hi": "2.5³ क्या है?",
    "options_en": ["12.5", "15.625", "18.75", "22.5"],
    "options_hi": ["12.5", "15.625", "18.75", "22.5"],
    "answer_en": "15.625",
    "answer_hi": "15.625",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 30% of 450?",
    "question_hi": "450 का 30% क्या है?",
    "options_en": ["125", "135", "145", "155"],
    "options_hi": ["125", "135", "145", "155"],
    "answer_en": "135",
    "answer_hi": "135",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is the average of 18, 24, 30, 36?",
    "question_hi": "18, 24, 30, 36 का औसत क्या है?",
    "options_en": ["24", "26", "27", "28"],
    "options_hi": ["24", "26", "27", "28"],
    "answer_en": "27",
    "answer_hi": "27",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 0.8 × 0.125?",
    "question_hi": "0.8 × 0.125 क्या है?",
    "options_en": ["0.01", "0.1", "1.0", "0.001"],
    "options_hi": ["0.01", "0.1", "1.0", "0.001"],
    "answer_en": "0.1",
    "answer_hi": "0.1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 7/8 as a decimal?",
    "question_hi": "7/8 दशमलव में क्या है?",
    "options_en": ["0.7", "0.75", "0.8", "0.875"],
    "options_hi": ["0.7", "0.75", "0.8", "0.875"],
    "answer_en": "0.875",
    "answer_hi": "0.875",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 83⅓% of 60?",
    "question_hi": "60 का 83⅓% क्या है?",
    "options_en": ["45", "48", "50", "52"],
    "options_hi": ["45", "48", "50", "52"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 7! ÷ 6!?",
    "question_hi": "7! ÷ 6! क्या है?",
    "options_en": ["1", "6", "7", "42"],
    "options_hi": ["1", "6", "7", "42"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is (5 + 3)²?",
    "question_hi": "(5 + 3)² क्या है?",
    "options_en": ["64", "81", "100", "121"],
    "options_hi": ["64", "81", "100", "121"],
    "answer_en": "64",
    "answer_hi": "64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 40% of 125?",
    "question_hi": "125 का 40% क्या है?",
    "options_en": ["40", "45", "50", "55"],
    "options_hi": ["40", "45", "50", "55"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 2/3 + 1/6?",
    "question_hi": "2/3 + 1/6 क्या है?",
    "options_en": ["1/2", "2/3", "5/6", "7/6"],
    "options_hi": ["1/2", "2/3", "5/6", "7/6"],
    "answer_en": "5/6",
    "answer_hi": "5/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 0.25 × 0.4?",
    "question_hi": "0.25 × 0.4 क्या है?",
    "options_en": ["0.01", "0.1", "1.0", "0.001"],
    "options_hi": ["0.01", "0.1", "1.0", "0.001"],
    "answer_en": "0.1",
    "answer_hi": "0.1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the square of 3.5?",
    "question_hi": "3.5 का वर्ग क्या है?",
    "options_en": ["10.5", "12.25", "14.0", "15.5"],
    "options_hi": ["10.5", "12.25", "14.0", "15.5"],
    "answer_en": "12.25",
    "answer_hi": "12.25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 37.5% of 120?",
    "question_hi": "120 का 37.5% क्या है?",
    "options_en": ["40", "45", "50", "55"],
    "options_hi": ["40", "45", "50", "55"],
    "answer_en": "45",
    "answer_hi": "45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 5/6 of 144?",
    "question_hi": "144 का 5/6 क्या है?",
    "options_en": ["100", "110", "120", "130"],
    "options_hi": ["100", "110", "120", "130"],
    "answer_en": "120",
    "answer_hi": "120",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is the cube of 6?",
    "question_hi": "6 का घन क्या है?",
    "options_en": ["216", "256", "296", "336"],
    "options_hi": ["216", "256", "296", "336"],
    "answer_en": "216",
    "answer_hi": "216",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is ³√216?",
    "question_hi": "³√216 क्या है?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 16⅔% of 120?",
    "question_hi": "120 का 16⅔% क्या है?",
    "options_en": ["18", "20", "22", "24"],
    "options_hi": ["18", "20", "22", "24"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 0.4 as a fraction?",
    "question_hi": "0.4 भिन्न के रूप में क्या है?",
    "options_en": ["1/4", "2/5", "3/7", "4/9"],
    "options_hi": ["1/4", "2/5", "3/7", "4/9"],
    "answer_en": "2/5",
    "answer_hi": "2/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 15² - 12²?",
    "question_hi": "15² - 12² क्या है?",
    "options_en": ["27", "36", "45", "54"],
    "options_hi": ["27", "36", "45", "54"],
    "answer_en": "81",
    "answer_hi": "81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the HCF of 42 and 56?",
    "question_hi": "42 और 56 का म.स.प. क्या है?",
    "options_en": ["7", "14", "21", "28"],
    "options_hi": ["7", "14", "21", "28"],
    "answer_en": "14",
    "answer_hi": "14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the LCM of 10 and 15?",
    "question_hi": "10 और 15 का ल.स.प. क्या है?",
    "options_en": ["20", "30", "40", "60"],
    "options_hi": ["20", "30", "40", "60"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 3.6 × 2.5?",
    "question_hi": "3.6 × 2.5 क्या है?",
    "options_en": ["7.5", "8.0", "9.0", "10.0"],
    "options_hi": ["7.5", "8.0", "9.0", "10.0"],
    "answer_en": "9.0",
    "answer_hi": "9.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 324 ÷ 1.8?",
    "question_hi": "324 ÷ 1.8 क्या है?",
    "options_en": ["160", "170", "180", "190"],
    "options_hi": ["160", "170", "180", "190"],
    "answer_en": "180",
    "answer_hi": "180",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 7/9 of 135?",
    "question_hi": "135 का 7/9 क्या है?",
    "options_en": ["95", "100", "105", "110"],
    "options_hi": ["95", "100", "105", "110"],
    "answer_en": "105",
    "answer_hi": "105",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 12.5% of 400?",
    "question_hi": "400 का 12.5% क्या है?",
    "options_en": ["40", "45", "50", "55"],
    "options_hi": ["40", "45", "50", "55"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 0.625 as a fraction?",
    "question_hi": "0.625 भिन्न के रूप में क्या है?",
    "options_en": ["5/8", "6/9", "7/10", "8/11"],
    "options_hi": ["5/8", "6/9", "7/10", "8/11"],
    "answer_en": "5/8",
    "answer_hi": "5/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 6⁴?",
    "question_hi": "6⁴ क्या है?",
    "options_en": ["216", "625", "1296", "2401"],
    "options_hi": ["216", "625", "1296", "2401"],
    "answer_en": "1296",
    "answer_hi": "1296",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 19²?",
    "question_hi": "19² क्या है?",
    "options_en": ["341", "361", "381", "401"],
    "options_hi": ["341", "361", "381", "401"],
    "answer_en": "361",
    "answer_hi": "361",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is √324?",
    "question_hi": "√324 क्या है?",
    "options_en": ["16", "17", "18", "19"],
    "options_hi": ["16", "17", "18", "19"],
    "answer_en": "18",
    "answer_hi": "18",
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