const questions = [
  {
    "num": 1,
    "question_en": "What is the result of 15 + 27?",
    "question_hi": "15 + 27 का परिणाम क्या है?",
    "options_en": ["42", "32", "52", "37"],
    "options_hi": ["42", "32", "52", "37"],
    "answer_en": "42",
    "answer_hi": "42",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 8 multiplied by 9?",
    "question_hi": "8 को 9 से गुणा करने पर क्या प्राप्त होता है?",
    "options_en": ["72", "63", "81", "64"],
    "options_hi": ["72", "63", "81", "64"],
    "answer_en": "72",
    "answer_hi": "72",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the value of 100 divided by 4?",
    "question_hi": "100 को 4 से विभाजित करने पर क्या मान प्राप्त होता है?",
    "options_en": ["25", "20", "30", "40"],
    "options_hi": ["25", "20", "30", "40"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the square of 12?",
    "question_hi": "12 का वर्ग क्या है?",
    "options_en": ["144", "121", "169", "100"],
    "options_hi": ["144", "121", "169", "100"],
    "answer_en": "144",
    "answer_hi": "144",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the cube root of 27?",
    "question_hi": "27 का घनमूल क्या है?",
    "options_en": ["3", "4", "9", "6"],
    "options_hi": ["3", "4", "9", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 25% of 200?",
    "question_hi": "200 का 25% क्या है?",
    "options_en": ["50", "25", "75", "100"],
    "options_hi": ["50", "25", "75", "100"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the sum of the angles in a triangle?",
    "question_hi": "त्रिभुज के कोणों का योग क्या होता है?",
    "options_en": ["180 degrees", "90 degrees", "360 degrees", "270 degrees"],
    "options_hi": ["180 डिग्री", "90 डिग्री", "360 डिग्री", "270 डिग्री"],
    "answer_en": "180 degrees",
    "answer_hi": "180 डिग्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the area of a square with side 5 cm?",
    "question_hi": "5 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?",
    "options_en": ["25 sq cm", "20 sq cm", "30 sq cm", "15 sq cm"],
    "options_hi": ["25 वर्ग सेमी", "20 वर्ग सेमी", "30 वर्ग सेमी", "15 वर्ग सेमी"],
    "answer_en": "25 sq cm",
    "answer_hi": "25 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the perimeter of a rectangle with length 8 cm and width 5 cm?",
    "question_hi": "8 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत का परिमाप क्या है?",
    "options_en": ["26 cm", "30 cm", "40 cm", "13 cm"],
    "options_hi": ["26 सेमी", "30 सेमी", "40 सेमी", "13 सेमी"],
    "answer_en": "26 cm",
    "answer_hi": "26 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 3 to the power of 4?",
    "question_hi": "3 की घात 4 क्या है?",
    "options_en": ["81", "12", "64", "27"],
    "options_hi": ["81", "12", "64", "27"],
    "answer_en": "81",
    "answer_hi": "81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the value of π (pi) to two decimal places?",
    "question_hi": "दो दशमलव स्थानों तक π (पाई) का मान क्या है?",
    "options_en": ["3.14", "3.41", "2.71", "1.61"],
    "options_hi": ["3.14", "3.41", "2.71", "1.61"],
    "answer_en": "3.14",
    "answer_hi": "3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 150 minus 89?",
    "question_hi": "150 में से 89 घटाने पर क्या प्राप्त होता है?",
    "options_en": ["61", "71", "51", "239"],
    "options_hi": ["61", "71", "51", "239"],
    "answer_en": "61",
    "answer_hi": "61",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the square root of 169?",
    "question_hi": "169 का वर्गमूल क्या है?",
    "options_en": ["13", "14", "12", "15"],
    "options_hi": ["13", "14", "12", "15"],
    "answer_en": "13",
    "answer_hi": "13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the average of 10, 20, and 30?",
    "question_hi": "10, 20 और 30 का औसत क्या है?",
    "options_en": ["20", "25", "15", "30"],
    "options_hi": ["20", "25", "15", "30"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 7 factorial (7!)?",
    "question_hi": "7 फैक्टोरियल (7!) क्या है?",
    "options_en": ["5040", "720", "40320", "120"],
    "options_hi": ["5040", "720", "40320", "120"],
    "answer_en": "5040",
    "answer_hi": "5040",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the circumference of a circle with radius 7 cm?",
    "question_hi": "7 सेमी त्रिज्या वाले वृत्त की परिधि क्या है?",
    "options_en": ["44 cm", "22 cm", "88 cm", "14 cm"],
    "options_hi": ["44 सेमी", "22 सेमी", "88 सेमी", "14 सेमी"],
    "answer_en": "44 cm",
    "answer_hi": "44 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 0.75 as a fraction in simplest form?",
    "question_hi": "0.75 को सरलतम भिन्न के रूप में क्या लिखा जाता है?",
    "options_en": ["3/4", "75/100", "1/4", "7/5"],
    "options_hi": ["3/4", "75/100", "1/4", "7/5"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the next prime number after 17?",
    "question_hi": "17 के बाद अगली अभाज्य संख्या क्या है?",
    "options_en": ["19", "18", "20", "21"],
    "options_hi": ["19", "18", "20", "21"],
    "answer_en": "19",
    "answer_hi": "19",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the Least Common Multiple (LCM) of 6 and 8?",
    "question_hi": "6 और 8 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    "options_en": ["24", "12", "48", "36"],
    "options_hi": ["24", "12", "48", "36"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the Greatest Common Divisor (GCD) of 24 and 36?",
    "question_hi": "24 और 36 का महत्तम समापवर्तक (GCD) क्या है?",
    "options_en": ["12", "6", "24", "8"],
    "options_hi": ["12", "6", "24", "8"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 2/3 + 1/6?",
    "question_hi": "2/3 + 1/6 क्या है?",
    "options_en": ["5/6", "3/9", "1/2", "2/9"],
    "options_hi": ["5/6", "3/9", "1/2", "2/9"],
    "answer_en": "5/6",
    "answer_hi": "5/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 3/4 of 100?",
    "question_hi": "100 का 3/4 भाग क्या है?",
    "options_en": ["75", "25", "50", "33.33"],
    "options_hi": ["75", "25", "50", "33.33"],
    "answer_en": "75",
    "answer_hi": "75",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the decimal equivalent of 5/8?",
    "question_hi": "5/8 का दशमलव समतुल्य क्या है?",
    "options_en": ["0.625", "0.58", "0.5", "0.8"],
    "options_hi": ["0.625", "0.58", "0.5", "0.8"],
    "answer_en": "0.625",
    "answer_hi": "0.625",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the value of x in 2x + 5 = 15?",
    "question_hi": "2x + 5 = 15 में x का मान क्या है?",
    "options_en": ["5", "10", "7.5", "2.5"],
    "options_hi": ["5", "10", "7.5", "2.5"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the area of a triangle with base 10 cm and height 6 cm?",
    "question_hi": "10 सेमी आधार और 6 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["30 sq cm", "60 sq cm", "16 sq cm", "25 sq cm"],
    "options_hi": ["30 वर्ग सेमी", "60 वर्ग सेमी", "16 वर्ग सेमी", "25 वर्ग सेमी"],
    "answer_en": "30 sq cm",
    "answer_hi": "30 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the volume of a cube with side 3 cm?",
    "question_hi": "3 सेमी भुजा वाले घन का आयतन क्या है?",
    "options_en": ["27 cubic cm", "9 cubic cm", "18 cubic cm", "12 cubic cm"],
    "options_hi": ["27 घन सेमी", "9 घन सेमी", "18 घन सेमी", "12 घन सेमी"],
    "answer_en": "27 cubic cm",
    "answer_hi": "27 घन सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the simple interest on ₹1000 at 5% per annum for 2 years?",
    "question_hi": "₹1000 पर 5% प्रति वर्ष की दर से 2 वर्ष का साधारण ब्याज क्या है?",
    "options_en": ["₹100", "₹50", "₹200", "₹150"],
    "options_hi": ["₹100", "₹50", "₹200", "₹150"],
    "answer_en": "₹100",
    "answer_hi": "₹100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the median of numbers 3, 5, 7, 9, 11?",
    "question_hi": "संख्याओं 3, 5, 7, 9, 11 की माध्यिका क्या है?",
    "options_en": ["7", "6", "5", "9"],
    "options_hi": ["7", "6", "5", "9"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the mode of numbers 2, 3, 4, 3, 5, 3, 6?",
    "question_hi": "संख्याओं 2, 3, 4, 3, 5, 3, 6 का बहुलक क्या है?",
    "options_en": ["3", "4", "5", "2"],
    "options_hi": ["3", "4", "5", "2"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the range of numbers 10, 15, 20, 25, 30?",
    "question_hi": "संख्याओं 10, 15, 20, 25, 30 का परिसर क्या है?",
    "options_en": ["20", "15", "25", "10"],
    "options_hi": ["20", "15", "25", "10"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 1/2 as a percentage?",
    "question_hi": "1/2 को प्रतिशत में क्या कहते हैं?",
    "options_en": ["50%", "25%", "100%", "20%"],
    "options_hi": ["50%", "25%", "100%", "20%"],
    "answer_en": "50%",
    "answer_hi": "50%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the value of 5² + 3³?",
    "question_hi": "5² + 3³ का मान क्या है?",
    "options_en": ["52", "34", "44", "27"],
    "options_hi": ["52", "34", "44", "27"],
    "answer_en": "52",
    "answer_hi": "52",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the sum of first 10 natural numbers?",
    "question_hi": "पहली 10 प्राकृतिक संख्याओं का योग क्या है?",
    "options_en": ["55", "45", "50", "100"],
    "options_hi": ["55", "45", "50", "100"],
    "answer_en": "55",
    "answer_hi": "55",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the formula for area of a circle?",
    "question_hi": "वृत्त के क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["πr²", "2πr", "πd", "πr"],
    "options_hi": ["πr²", "2πr", "πd", "πr"],
    "answer_en": "πr²",
    "answer_hi": "πr²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 3/5 as a decimal?",
    "question_hi": "3/5 को दशमलव में क्या लिखा जाता है?",
    "options_en": ["0.6", "0.3", "0.5", "0.35"],
    "options_hi": ["0.6", "0.3", "0.5", "0.35"],
    "answer_en": "0.6",
    "answer_hi": "0.6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the next number in sequence: 2, 4, 8, 16, ___?",
    "question_hi": "अनुक्रम 2, 4, 8, 16, ___ में अगली संख्या क्या है?",
    "options_en": ["32", "24", "20", "64"],
    "options_hi": ["32", "24", "20", "64"],
    "answer_en": "32",
    "answer_hi": "32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 0.25 as a fraction?",
    "question_hi": "0.25 को भिन्न में क्या लिखा जाता है?",
    "options_en": ["1/4", "1/2", "2/5", "25/100"],
    "options_hi": ["1/4", "1/2", "2/5", "25/100"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the sum of interior angles of a quadrilateral?",
    "question_hi": "चतुर्भुज के अंतःकोणों का योग क्या होता है?",
    "options_en": ["360 degrees", "180 degrees", "270 degrees", "90 degrees"],
    "options_hi": ["360 डिग्री", "180 डिग्री", "270 डिग्री", "90 डिग्री"],
    "answer_en": "360 degrees",
    "answer_hi": "360 डिग्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 10% of 500?",
    "question_hi": "500 का 10% क्या है?",
    "options_en": ["50", "5", "100", "10"],
    "options_hi": ["50", "5", "100", "10"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 3/8 + 1/4?",
    "question_hi": "3/8 + 1/4 क्या है?",
    "options_en": ["5/8", "4/12", "1/2", "2/8"],
    "options_hi": ["5/8", "4/12", "1/2", "2/8"],
    "answer_en": "5/8",
    "answer_hi": "5/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the perimeter of a square with side 12 cm?",
    "question_hi": "12 सेमी भुजा वाले वर्ग का परिमाप क्या है?",
    "options_en": ["48 cm", "24 cm", "36 cm", "12 cm"],
    "options_hi": ["48 सेमी", "24 सेमी", "36 सेमी", "12 सेमी"],
    "answer_en": "48 cm",
    "answer_hi": "48 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the value of y in 3y - 7 = 14?",
    "question_hi": "3y - 7 = 14 में y का मान क्या है?",
    "options_en": ["7", "5", "9", "21"],
    "options_hi": ["7", "5", "9", "21"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 0.1 multiplied by 100?",
    "question_hi": "0.1 को 100 से गुणा करने पर क्या प्राप्त होता है?",
    "options_en": ["10", "1", "100", "0.01"],
    "options_hi": ["10", "1", "100", "0.01"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the area of a rectangle with length 15 cm and width 8 cm?",
    "question_hi": "15 सेमी लंबाई और 8 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?",
    "options_en": ["120 sq cm", "23 sq cm", "60 sq cm", "100 sq cm"],
    "options_hi": ["120 वर्ग सेमी", "23 वर्ग सेमी", "60 वर्ग सेमी", "100 वर्ग सेमी"],
    "answer_en": "120 sq cm",
    "answer_hi": "120 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the cube of 4?",
    "question_hi": "4 का घन क्या है?",
    "options_en": ["64", "16", "256", "12"],
    "options_hi": ["64", "16", "256", "12"],
    "answer_en": "64",
    "answer_hi": "64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 75% as a fraction?",
    "question_hi": "75% को भिन्न में क्या लिखा जाता है?",
    "options_en": ["3/4", "1/4", "7/5", "75/100"],
    "options_hi": ["3/4", "1/4", "7/5", "75/100"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the diameter of a circle with radius 14 cm?",
    "question_hi": "14 सेमी त्रिज्या वाले वृत्त का व्यास क्या है?",
    "options_en": ["28 cm", "14 cm", "7 cm", "44 cm"],
    "options_hi": ["28 सेमी", "14 सेमी", "7 सेमी", "44 सेमी"],
    "answer_en": "28 cm",
    "answer_hi": "28 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 2^5?",
    "question_hi": "2^5 क्या है?",
    "options_en": ["32", "10", "16", "25"],
    "options_hi": ["32", "10", "16", "25"],
    "answer_en": "32",
    "answer_hi": "32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the square root of 225?",
    "question_hi": "225 का वर्गमूल क्या है?",
    "options_en": ["15", "25", "5", "112.5"],
    "options_hi": ["15", "25", "5", "112.5"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 1/3 + 1/6?",
    "question_hi": "1/3 + 1/6 क्या है?",
    "options_en": ["1/2", "2/9", "1/9", "2/3"],
    "options_hi": ["1/2", "2/9", "1/9", "2/3"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is the value of 4! (4 factorial)?",
    "question_hi": "4! (4 फैक्टोरियल) का मान क्या है?",
    "options_en": ["24", "16", "8", "12"],
    "options_hi": ["24", "16", "8", "12"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 60% of 250?",
    "question_hi": "250 का 60% क्या है?",
    "options_en": ["150", "125", "100", "60"],
    "options_hi": ["150", "125", "100", "60"],
    "answer_en": "150",
    "answer_hi": "150",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the volume of a cuboid with dimensions 5cm × 4cm × 3cm?",
    "question_hi": "5 सेमी × 4 सेमी × 3 सेमी आयाम वाले घनाभ का आयतन क्या है?",
    "options_en": ["60 cubic cm", "12 cubic cm", "20 cubic cm", "15 cubic cm"],
    "options_hi": ["60 घन सेमी", "12 घन सेमी", "20 घन सेमी", "15 घन सेमी"],
    "answer_en": "60 cubic cm",
    "answer_hi": "60 घन सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the mean of numbers 4, 6, 8, 10, 12?",
    "question_hi": "संख्याओं 4, 6, 8, 10, 12 का माध्य क्या है?",
    "options_en": ["8", "7", "9", "10"],
    "options_hi": ["8", "7", "9", "10"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 0.125 as a fraction?",
    "question_hi": "0.125 को भिन्न में क्या लिखा जाता है?",
    "options_en": ["1/8", "1/4", "1/2", "125/1000"],
    "options_hi": ["1/8", "1/4", "1/2", "125/1000"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the sum of angles in a straight line?",
    "question_hi": "एक सीधी रेखा पर कोणों का योग क्या होता है?",
    "options_en": ["180 degrees", "90 degrees", "360 degrees", "270 degrees"],
    "options_hi": ["180 डिग्री", "90 डिग्री", "360 डिग्री", "270 डिग्री"],
    "answer_en": "180 degrees",
    "answer_hi": "180 डिग्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 8 divided by 1/2?",
    "question_hi": "8 को 1/2 से विभाजित करने पर क्या प्राप्त होता है?",
    "options_en": ["16", "4", "8.5", "2"],
    "options_hi": ["16", "4", "8.5", "2"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the next number in sequence: 1, 1, 2, 3, 5, 8, ___?",
    "question_hi": "अनुक्रम 1, 1, 2, 3, 5, 8, ___ में अगली संख्या क्या है?",
    "options_en": ["13", "11", "10", "12"],
    "options_hi": ["13", "11", "10", "12"],
    "answer_en": "13",
    "answer_hi": "13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 0.01 as a percentage?",
    "question_hi": "0.01 को प्रतिशत में क्या कहते हैं?",
    "options_en": ["1%", "0.1%", "10%", "0.01%"],
    "options_hi": ["1%", "0.1%", "10%", "0.01%"],
    "answer_en": "1%",
    "answer_hi": "1%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 2/3 of 99?",
    "question_hi": "99 का 2/3 भाग क्या है?",
    "options_en": ["66", "33", "44", "22"],
    "options_hi": ["66", "33", "44", "22"],
    "answer_en": "66",
    "answer_hi": "66",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the perimeter of an equilateral triangle with side 9 cm?",
    "question_hi": "9 सेमी भुजा वाले समबाहु त्रिभुज का परिमाप क्या है?",
    "options_en": ["27 cm", "18 cm", "9 cm", "36 cm"],
    "options_hi": ["27 सेमी", "18 सेमी", "9 सेमी", "36 सेमी"],
    "answer_en": "27 cm",
    "answer_hi": "27 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 1000 divided by 25?",
    "question_hi": "1000 को 25 से विभाजित करने पर क्या प्राप्त होता है?",
    "options_en": ["40", "25", "400", "100"],
    "options_hi": ["40", "25", "400", "100"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the area of a circle with radius 10 cm?",
    "question_hi": "10 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है?",
    "options_en": ["314 sq cm", "31.4 sq cm", "100 sq cm", "62.8 sq cm"],
    "options_hi": ["314 वर्ग सेमी", "31.4 वर्ग सेमी", "100 वर्ग सेमी", "62.8 वर्ग सेमी"],
    "answer_en": "314 sq cm",
    "answer_hi": "314 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is the value of x in x/4 = 3?",
    "question_hi": "x/4 = 3 में x का मान क्या है?",
    "options_en": ["12", "7", "1.33", "0.75"],
    "options_hi": ["12", "7", "1.33", "0.75"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 7/10 as a percentage?",
    "question_hi": "7/10 को प्रतिशत में क्या कहते हैं?",
    "options_en": ["70%", "7%", "0.7%", "700%"],
    "options_hi": ["70%", "7%", "0.7%", "700%"],
    "answer_en": "70%",
    "answer_hi": "70%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is the surface area of a cube with side 2 cm?",
    "question_hi": "2 सेमी भुजा वाले घन का पृष्ठीय क्षेत्रफल क्या है?",
    "options_en": ["24 sq cm", "8 sq cm", "12 sq cm", "4 sq cm"],
    "options_hi": ["24 वर्ग सेमी", "8 वर्ग सेमी", "12 वर्ग सेमी", "4 वर्ग सेमी"],
    "answer_en": "24 sq cm",
    "answer_hi": "24 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 5/6 - 1/3?",
    "question_hi": "5/6 - 1/3 क्या है?",
    "options_en": ["1/2", "2/3", "4/3", "1/6"],
    "options_hi": ["1/2", "2/3", "4/3", "1/6"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is the square of 25?",
    "question_hi": "25 का वर्ग क्या है?",
    "options_en": ["625", "125", "50", "225"],
    "options_hi": ["625", "125", "50", "225"],
    "answer_en": "625",
    "answer_hi": "625",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 33 1/3% as a fraction?",
    "question_hi": "33 1/3% को भिन्न में क्या लिखा जाता है?",
    "options_en": ["1/3", "1/2", "2/3", "33/100"],
    "options_hi": ["1/3", "1/2", "2/3", "33/100"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the sum of first 5 even numbers?",
    "question_hi": "पहली 5 सम संख्याओं का योग क्या है?",
    "options_en": ["30", "10", "20", "15"],
    "options_hi": ["30", "10", "20", "15"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 0.333... as a fraction?",
    "question_hi": "0.333... को भिन्न में क्या लिखा जाता है?",
    "options_en": ["1/3", "1/2", "3/10", "33/100"],
    "options_hi": ["1/3", "1/2", "3/10", "33/100"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is the value of 10² - 8²?",
    "question_hi": "10² - 8² का मान क्या है?",
    "options_en": ["36", "2", "164", "18"],
    "options_hi": ["36", "2", "164", "18"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 4/5 of 50?",
    "question_hi": "50 का 4/5 भाग क्या है?",
    "options_en": ["40", "10", "20", "30"],
    "options_hi": ["40", "10", "20", "30"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is the cube root of 125?",
    "question_hi": "125 का घनमूल क्या है?",
    "options_en": ["5", "25", "15", "12.5"],
    "options_hi": ["5", "25", "15", "12.5"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 150% of 40?",
    "question_hi": "40 का 150% क्या है?",
    "options_en": ["60", "50", "90", "30"],
    "options_hi": ["60", "50", "90", "30"],
    "answer_en": "60",
    "answer_hi": "60",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is the value of 3 × (4 + 5) ÷ 3?",
    "question_hi": "3 × (4 + 5) ÷ 3 का मान क्या है?",
    "options_en": ["9", "4", "12", "27"],
    "options_hi": ["9", "4", "12", "27"],
    "answer_en": "9",
    "answer_hi": "9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 1/4 + 1/2?",
    "question_hi": "1/4 + 1/2 क्या है?",
    "options_en": ["3/4", "1/3", "2/6", "1/6"],
    "options_hi": ["3/4", "1/3", "2/6", "1/6"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is the area of a parallelogram with base 12 cm and height 7 cm?",
    "question_hi": "12 सेमी आधार और 7 सेमी ऊँचाई वाले समांतर चतुर्भुज का क्षेत्रफल क्या है?",
    "options_en": ["84 sq cm", "19 sq cm", "24 sq cm", "36 sq cm"],
    "options_hi": ["84 वर्ग सेमी", "19 वर्ग सेमी", "24 वर्ग सेमी", "36 वर्ग सेमी"],
    "answer_en": "84 sq cm",
    "answer_hi": "84 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 9 squared?",
    "question_hi": "9 का वर्ग क्या है?",
    "options_en": ["81", "18", "27", "99"],
    "options_hi": ["81", "18", "27", "99"],
    "answer_en": "81",
    "answer_hi": "81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 25% as a fraction?",
    "question_hi": "25% को भिन्न में क्या लिखा जाता है?",
    "options_en": ["1/4", "1/2", "1/5", "25/100"],
    "options_hi": ["1/4", "1/2", "1/5", "25/100"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the perimeter of a circle with diameter 28 cm?",
    "question_hi": "28 सेमी व्यास वाले वृत्त की परिधि क्या है?",
    "options_en": ["88 cm", "44 cm", "28 cm", "56 cm"],
    "options_hi": ["88 सेमी", "44 सेमी", "28 सेमी", "56 सेमी"],
    "answer_en": "88 cm",
    "answer_hi": "88 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 2/5 of 100?",
    "question_hi": "100 का 2/5 भाग क्या है?",
    "options_en": ["40", "20", "60", "25"],
    "options_hi": ["40", "20", "60", "25"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the value of 0.5 × 0.2?",
    "question_hi": "0.5 × 0.2 का मान क्या है?",
    "options_en": ["0.1", "0.7", "1.0", "0.3"],
    "options_hi": ["0.1", "0.7", "1.0", "0.3"],
    "answer_en": "0.1",
    "answer_hi": "0.1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the area of a triangle with sides 5 cm, 12 cm, 13 cm?",
    "question_hi": "5 सेमी, 12 सेमी, 13 सेमी भुजाओं वाले त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["30 sq cm", "60 sq cm", "15 sq cm", "25 sq cm"],
    "options_hi": ["30 वर्ग सेमी", "60 वर्ग सेमी", "15 वर्ग सेमी", "25 वर्ग सेमी"],
    "answer_en": "30 sq cm",
    "answer_hi": "30 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 11 × 11?",
    "question_hi": "11 × 11 क्या है?",
    "options_en": ["121", "111", "101", "110"],
    "options_hi": ["121", "111", "101", "110"],
    "answer_en": "121",
    "answer_hi": "121",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 3/7 as a decimal (rounded to 2 places)?",
    "question_hi": "3/7 को दशमलव में (2 स्थानों तक) क्या लिखा जाता है?",
    "options_en": ["0.43", "0.42", "0.33", "0.57"],
    "options_hi": ["0.43", "0.42", "0.33", "0.57"],
    "answer_en": "0.43",
    "answer_hi": "0.43",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the value of 1/2 + 1/3 + 1/6?",
    "question_hi": "1/2 + 1/3 + 1/6 का मान क्या है?",
    "options_en": ["1", "6/11", "2/3", "1/2"],
    "options_hi": ["1", "6/11", "2/3", "1/2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 16 × 25?",
    "question_hi": "16 × 25 क्या है?",
    "options_en": ["400", "300", "200", "160"],
    "options_hi": ["400", "300", "200", "160"],
    "answer_en": "400",
    "answer_hi": "400",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the sum of interior angles of a pentagon?",
    "question_hi": "पंचभुज के अंतःकोणों का योग क्या होता है?",
    "options_en": ["540 degrees", "360 degrees", "180 degrees", "720 degrees"],
    "options_hi": ["540 डिग्री", "360 डिग्री", "180 डिग्री", "720 डिग्री"],
    "answer_en": "540 degrees",
    "answer_hi": "540 डिग्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 5/8 as a percentage?",
    "question_hi": "5/8 को प्रतिशत में क्या कहते हैं?",
    "options_en": ["62.5%", "58%", "50%", "80%"],
    "options_hi": ["62.5%", "58%", "50%", "80%"],
    "answer_en": "62.5%",
    "answer_hi": "62.5%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the value of 7 × 8 - 6 ÷ 2?",
    "question_hi": "7 × 8 - 6 ÷ 2 का मान क्या है?",
    "options_en": ["53", "50", "25", "29"],
    "options_hi": ["53", "50", "25", "29"],
    "answer_en": "53",
    "answer_hi": "53",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 1/5 of 200?",
    "question_hi": "200 का 1/5 भाग क्या है?",
    "options_en": ["40", "20", "100", "50"],
    "options_hi": ["40", "20", "100", "50"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the square root of 400?",
    "question_hi": "400 का वर्गमूल क्या है?",
    "options_en": ["20", "40", "200", "100"],
    "options_hi": ["20", "40", "200", "100"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 75 divided by 3?",
    "question_hi": "75 को 3 से विभाजित करने पर क्या प्राप्त होता है?",
    "options_en": ["25", "15", "20", "30"],
    "options_hi": ["25", "15", "20", "30"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the area of a trapezium with parallel sides 8 cm and 12 cm, and height 5 cm?",
    "question_hi": "8 सेमी और 12 सेमी समांतर भुजाओं तथा 5 सेमी ऊँचाई वाले समलंब का क्षेत्रफल क्या है?",
    "options_en": ["50 sq cm", "20 sq cm", "100 sq cm", "30 sq cm"],
    "options_hi": ["50 वर्ग सेमी", "20 वर्ग सेमी", "100 वर्ग सेमी", "30 वर्ग सेमी"],
    "answer_en": "50 sq cm",
    "answer_hi": "50 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 12.5% as a fraction?",
    "question_hi": "12.5% को भिन्न में क्या लिखा जाता है?",
    "options_en": ["1/8", "1/4", "1/2", "12.5/100"],
    "options_hi": ["1/8", "1/4", "1/2", "12.5/100"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the value of 3⁴?",
    "question_hi": "3⁴ का मान क्या है?",
    "options_en": ["81", "12", "27", "64"],
    "options_hi": ["81", "12", "27", "64"],
    "answer_en": "81",
    "answer_hi": "81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 0.6 × 0.4?",
    "question_hi": "0.6 × 0.4 का मान क्या है?",
    "options_en": ["0.24", "1.0", "0.10", "2.4"],
    "options_hi": ["0.24", "1.0", "0.10", "2.4"],
    "answer_en": "0.24",
    "answer_hi": "0.24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the sum of first 20 natural numbers?",
    "question_hi": "पहली 20 प्राकृतिक संख्याओं का योग क्या है?",
    "options_en": ["210", "200", "190", "220"],
    "options_hi": ["210", "200", "190", "220"],
    "answer_en": "210",
    "answer_hi": "210",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the formula for volume of a cylinder?",
    "question_hi": "बेलन के आयतन का सूत्र क्या है?",
    "options_en": ["πr²h", "2πr(h+r)", "πr²", "2πrh"],
    "options_hi": ["πr²h", "2πr(h+r)", "πr²", "2πrh"],
    "answer_en": "πr²h",
    "answer_hi": "πr²h",
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