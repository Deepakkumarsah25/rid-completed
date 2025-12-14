
const questions = [

        
  
    {
      "num": 1,
      "question_en": "What is the sum of the first 10 terms of an arithmetic progression with first term 3 and common difference 2?",
      "question_hi": "तीव्रता 3 और सामान्य अंतर 2 वाली अंकगणितीय श्रेणी के पहले 10 पदों का योग क्या है?",
      "options_en": ["100", "110", "120", "130"],
      "options_hi": ["100", "110", "120", "130"],
      "answer_en": "110",
      "answer_hi": "110",
      "attempted": false
    },
    {
      "num": 2,
      "question_en": "What is the value of x if the equation 2x - 5 = 15?",
      "question_hi": "अगर समीकरण 2x - 5 = 15 है, तो x का मान क्या होगा?",
      "options_en": ["10", "8", "7", "5"],
      "options_hi": ["10", "8", "7", "5"],
      "answer_en": "10",
      "answer_hi": "10",
      "attempted": false
    },
    {
      "num": 3,
      "question_en": "The quadratic equation x² - 5x + 6 = 0 has roots",
      "question_hi": "समीकरण x² - 5x + 6 = 0 के मूल क्या हैं?",
      "options_en": ["1 and 6", "2 and 3", "1 and 5", "2 and 6"],
      "options_hi": ["1 और 6", "2 और 3", "1 और 5", "2 और 6"],
      "answer_en": "2 and 3",
      "answer_hi": "2 और 3",
      "attempted": false
    },
    {
      "num": 4,
      "question_en": "The distance between the points (2, 3) and (5, 7) is",
      "question_hi": "(2, 3) और (5, 7) बिंदुओं के बीच की दूरी क्या है?",
      "options_en": ["5", "4", "3", "6"],
      "options_hi": ["5", "4", "3", "6"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false
    },
    {
      "num": 5,
      "question_en": "Which of the following is the formula for the area of a triangle?",
      "question_hi": "निम्नलिखित में से त्रिकोण का क्षेत्रफल का सूत्र क्या है?",
      "options_en": ["(1/2) * base * height", "(1/2) * a * b", "base * height", "a * b"],
      "options_hi": ["(1/2) * आधार * ऊँचाई", "(1/2) * a * b", "आधार * ऊँचाई", "a * b"],
      "answer_en": "(1/2) * base * height",
      "answer_hi": "(1/2) * आधार * ऊँचाई",
      "attempted": false
    },
    {
      "num": 6,
      "question_en": "The solution to the equation 3x + 4 = 19 is",
      "question_hi": "समीकरण 3x + 4 = 19 का हल क्या है?",
      "options_en": ["5", "3", "7", "4"],
      "options_hi": ["5", "3", "7", "4"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false
    },
    {
      "num": 7,
      "question_en": "The sum of the first 15 terms of the arithmetic progression 5, 10, 15, ... is",
      "question_hi": "अंकगणितीय श्रेणी 5, 10, 15, ... के पहले 15 पदों का योग क्या है?",
      "options_en": ["1125", "1225", "1150", "1200"],
      "options_hi": ["1125", "1225", "1150", "1200"],
      "answer_en": "1125",
      "answer_hi": "1125",
      "attempted": false
    },
    {
      "num": 8,
      "question_en": "Which of the following is not a property of a rhombus?",
      "question_hi": "निम्नलिखित में से कौन सा विशेषता एक समतलाकार की नहीं है?",
      "options_en": ["Opposite angles are equal", "Diagonals bisect each other at right angles", "All sides are equal", "All angles are 90°"],
      "options_hi": ["विपरीत कोण समान होते हैं", "आलम्ब एक दूसरे को समकोण पर आधा करते हैं", "सभी भुजाएँ समान होती हैं", "सभी कोण 90° होते हैं"],
      "answer_en": "All angles are 90°",
      "answer_hi": "सभी कोण 90° होते हैं",
      "attempted": false
    },
    {
      "num": 9,
      "question_en": "What is the volume of a cylinder with radius 7 cm and height 14 cm?",
      "question_hi": "व्यास 7 सेमी और ऊँचाई 14 सेमी वाले बेलन का आयतन क्या होगा?",
      "options_en": ["154 cm³", "144 cm³", "122 cm³", "176 cm³"],
      "options_hi": ["154 सेमी³", "144 सेमी³", "122 सेमी³", "176 सेमी³"],
      "answer_en": "154 cm³",
      "answer_hi": "154 सेमी³",
      "attempted": false
    },
    {
      "num": 10,
      "question_en": "Which of the following is a solution to the quadratic equation x² - 4x + 4 = 0?",
      "question_hi": "समीकरण x² - 4x + 4 = 0 का हल क्या है?",
      "options_en": ["2", "4", "0", "1"],
      "options_hi": ["2", "4", "0", "1"],
      "answer_en": "2",
      "answer_hi": "2",
      "attempted": false
    },
    {
      "num": 11,
      "question_en": "The area of a circle with radius 7 cm is",
      "question_hi": "व्यास 7 सेमी वाले वृत्त का क्षेत्रफल क्या है?",
      "options_en": ["154 cm²", "144 cm²", "122 cm²", "176 cm²"],
      "options_hi": ["154 सेमी²", "144 सेमी²", "122 सेमी²", "176 सेमी²"],
      "answer_en": "154 cm²",
      "answer_hi": "154 सेमी²",
      "attempted": false
    },
    {
      "num": 12,
      "question_en": "What is the value of the discriminant in the quadratic equation x² - 6x + 8 = 0?",
      "question_hi": "समीकरण x² - 6x + 8 = 0 में विवेचनात्मक मान क्या है?",
      "options_en": ["4", "6", "2", "8"],
      "options_hi": ["4", "6", "2", "8"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false
    },
    {
      "num": 13,
      "question_en": "The coordinates of the midpoint of the line segment joining (3, 4) and (5, 6) are",
      "question_hi": "(3, 4) और (5, 6) बिंदुओं के बीच का मध्य बिंदु क्या है?",
      "options_en": ["(4, 5)", "(3.5, 5)", "(4, 4)", "(3, 5)"],
      "options_hi": ["(4, 5)", "(3.5, 5)", "(4, 4)", "(3, 5)"],
      "answer_en": "(4, 5)",
      "answer_hi": "(4, 5)",
      "attempted": false
    },
    {
      "num": 14,
      "question_en": "The value of x in the equation x² + 6x + 9 = 0 is",
      "question_hi": "समीकरण x² + 6x + 9 = 0 में x का मान क्या है?",
      "options_en": ["-3", "3", "6", "9"],
      "options_hi": ["-3", "3", "6", "9"],
      "answer_en": "-3",
      "answer_hi": "-3",
      "attempted": false
    },
    {
      "num": 15,
      "question_en": "What is the area of a sector of a circle with a radius of 7 cm and a central angle of 60°?",
      "question_hi": "व्यास 7 सेमी और केंद्रीय कोण 60° वाले वृत्त के क्षेत्रफल का क्षेत्रफल क्या होगा?",
      "options_en": ["22 cm²", "24 cm²", "26 cm²", "28 cm²"],
      "options_hi": ["22 सेमी²", "24 सेमी²", "26 सेमी²", "28 सेमी²"],
      "answer_en": "22 cm²",
      "answer_hi": "22 सेमी²",
      "attempted": false
    },
    {
      "num": 16,
      "question_en": "Which of the following is the formula for the volume of a cone?",
      "question_hi": "कोण का आयतन का सूत्र क्या है?",
      "options_en": ["(1/3) * π * r² * h", "(1/2) * π * r² * h", "(1/4) * π * r² * h", "π * r² * h"],
      "options_hi": ["(1/3) * π * r² * h", "(1/2) * π * r² * h", "(1/4) * π * r² * h", "π * r² * h"],
      "answer_en": "(1/3) * π * r² * h",
      "answer_hi": "(1/3) * π * r² * h",
      "attempted": false
    },
    {
      "num": 17,
      "question_en": "What is the value of sin 30°?",
      "question_hi": "sin 30° का मान क्या है?",
      "options_en": ["1/2", "√2/2", "√3/2", "1"],
      "options_hi": ["1/2", "√2/2", "√3/2", "1"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 18,
      "question_en": "The probability of an event is 0.25. What is the odds in favor of the event?",
      "question_hi": "किसी घटना की संभावना 0.25 है। उस घटना के पक्ष में अनुपात क्या है?",
      "options_en": ["1:3", "1:4", "3:1", "4:1"],
      "options_hi": ["1:3", "1:4", "3:1", "4:1"],
      "answer_en": "1:3",
      "answer_hi": "1:3",
      "attempted": false
    },
    {
      "num": 19,
      "question_en": "What is the area of a triangle with base 12 cm and height 6 cm?",
      "question_hi": "आधार 12 सेमी और ऊँचाई 6 सेमी वाले त्रिकोण का क्षेत्रफल क्या होगा?",
      "options_en": ["36 cm²", "40 cm²", "44 cm²", "48 cm²"],
      "options_hi": ["36 सेमी²", "40 सेमी²", "44 सेमी²", "48 सेमी²"],
      "answer_en": "36 cm²",
      "answer_hi": "36 सेमी²",
      "attempted": false
    },
    {
      "num": 20,
      "question_en": "Which of the following is the correct formula for the volume of a sphere?",
      "question_hi": "गोलाकार का आयतन का सही सूत्र क्या है?",
      "options_en": ["(4/3) * π * r³", "(2/3) * π * r³", "(4/3) * π * r²", "(3/4) * π * r³"],
      "options_hi": ["(4/3) * π * r³", "(2/3) * π * r³", "(4/3) * π * r²", "(3/4) * π * r³"],
      "answer_en": "(4/3) * π * r³",
      "answer_hi": "(4/3) * π * r³",
      "attempted": false
    }
  ,
  
    {
      "num": 21,
      "question_en": "The sum of the roots of the quadratic equation x² - 6x + 9 = 0 is",
      "question_hi": "समीकरण x² - 6x + 9 = 0 के मूलों का योग क्या है?",
      "options_en": ["-6", "6", "9", "0"],
      "options_hi": ["-6", "6", "9", "0"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false
    },
    {
      "num": 22,
      "question_en": "The length of the diagonal of a rectangle with sides 3 cm and 4 cm is",
      "question_hi": "3 सेमी और 4 सेमी भुजाओं वाले आयत का विकर्ण क्या होगा?",
      "options_en": ["5 cm", "6 cm", "7 cm", "8 cm"],
      "options_hi": ["5 सेमी", "6 सेमी", "7 सेमी", "8 सेमी"],
      "answer_en": "5 cm",
      "answer_hi": "5 सेमी",
      "attempted": false
    },
    {
      "num": 23,
      "question_en": "The equation of a straight line parallel to the x-axis is",
      "question_hi": "x-अक्ष के समानांतर रेखा का समीकरण क्या होगा?",
      "options_en": ["y = 0", "x = 0", "y = k", "x = k"],
      "options_hi": ["y = 0", "x = 0", "y = k", "x = k"],
      "answer_en": "y = k",
      "answer_hi": "y = k",
      "attempted": false
    },
    {
      "num": 24,
      "question_en": "If the roots of the quadratic equation ax² + bx + c = 0 are real and equal, the discriminant is",
      "question_hi": "अगर समीकरण ax² + bx + c = 0 के मूल वास्तविक और समान हैं, तो विवेचनात्मक मान क्या होगा?",
      "options_en": ["b² - 4ac", "b² + 4ac", "4ac - b²", "0"],
      "options_hi": ["b² - 4ac", "b² + 4ac", "4ac - b²", "0"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false
    },
    {
      "num": 25,
      "question_en": "The sum of the first n terms of an arithmetic progression is given by the formula",
      "question_hi": "अंकगणितीय श्रेणी के पहले n पदों का योग किस सूत्र द्वारा दिया जाता है?",
      "options_en": ["Sₙ = n/2 (2a + (n - 1)d)", "Sₙ = n/2 (a + d)", "Sₙ = a + d", "Sₙ = n/2 (a + l)"],
      "options_hi": ["Sₙ = n/2 (2a + (n - 1)d)", "Sₙ = n/2 (a + d)", "Sₙ = a + d", "Sₙ = n/2 (a + l)"],
      "answer_en": "Sₙ = n/2 (2a + (n - 1)d)",
      "answer_hi": "Sₙ = n/2 (2a + (n - 1)d)",
      "attempted": false
    },
    {
      "num": 26,
      "question_en": "The probability of an event is defined as",
      "question_hi": "किसी घटना की संभावना को किस रूप में परिभाषित किया जाता है?",
      "options_en": ["Number of favorable outcomes / Total number of outcomes", "Total number of outcomes / Number of favorable outcomes", "Total number of outcomes", "None of the above"],
      "options_hi": ["अनुकूल परिणामों की संख्या / कुल परिणामों की संख्या", "कुल परिणामों की संख्या / अनुकूल परिणामों की संख्या", "कुल परिणामों की संख्या", "उपरोक्त में से कोई नहीं"],
      "answer_en": "Number of favorable outcomes / Total number of outcomes",
      "answer_hi": "अनुकूल परिणामों की संख्या / कुल परिणामों की संख्या",
      "attempted": false
    },
    {
      "num": 27,
      "question_en": "The ratio of the areas of two squares is 1:4. What is the ratio of their sides?",
      "question_hi": "दो वर्गों के क्षेत्रफल का अनुपात 1:4 है। उनके भुजाओं का अनुपात क्या होगा?",
      "options_en": ["1:2", "2:1", "1:4", "4:1"],
      "options_hi": ["1:2", "2:1", "1:4", "4:1"],
      "answer_en": "1:2",
      "answer_hi": "1:2",
      "attempted": false
    },
    {
      "num": 28,
      "question_en": "The mean of the data is",
      "question_hi": "डेटा का माध्य क्या होता है?",
      "options_en": ["Sum of all values / Number of values", "Maximum value - Minimum value", "Total frequency / Number of values", "None of the above"],
      "options_hi": ["सभी मानों का योग / मानों की संख्या", "अधिकतम मान - न्यूनतम मान", "कुल आवृत्ति / मानों की संख्या", "उपरोक्त में से कोई नहीं"],
      "answer_en": "Sum of all values / Number of values",
      "answer_hi": "सभी मानों का योग / मानों की संख्या",
      "attempted": false
    },
    {
      "num": 29,
      "question_en": "The sum of the interior angles of a triangle is",
      "question_hi": "त्रिकोण के आंतरिक कोणों का योग क्या होता है?",
      "options_en": ["180°", "90°", "360°", "270°"],
      "options_hi": ["180°", "90°", "360°", "270°"],
      "answer_en": "180°",
      "answer_hi": "180°",
      "attempted": false
    },
    {
      "num": 30,
      "question_en": "The formula to find the area of a trapezium is",
      "question_hi": "त्रैकोणमिति का क्षेत्रफल निकालने का सूत्र क्या है?",
      "options_en": ["1/2 * (sum of parallel sides) * height", "base * height", "length * breadth", "None of the above"],
      "options_hi": ["1/2 * (समानांतर भुजाओं का योग) * ऊँचाई", "आधार * ऊँचाई", "लंबाई * चौड़ाई", "उपरोक्त में से कोई नहीं"],
      "answer_en": "1/2 * (sum of parallel sides) * height",
      "answer_hi": "1/2 * (समानांतर भुजाओं का योग) * ऊँचाई",
      "attempted": false
    },
    {
      "num": 31,
      "question_en": "What is the volume of a sphere with radius 3 cm?",
      "question_hi": "व्यास 3 सेमी वाले गोलाकार का आयतन क्या होगा?",
      "options_en": ["36π cm³", "27π cm³", "18π cm³", "12π cm³"],
      "options_hi": ["36π सेमी³", "27π सेमी³", "18π सेमी³", "12π सेमी³"],
      "answer_en": "36π cm³",
      "answer_hi": "36π सेमी³",
      "attempted": false
    },
    {
      "num": 32,
      "question_en": "In a right-angled triangle, if the base is 4 cm and the height is 3 cm, the hypotenuse is",
      "question_hi": "एक समकोण त्रिकोण में अगर आधार 4 सेमी और ऊँचाई 3 सेमी है, तो कर्ण का मान क्या होगा?",
      "options_en": ["5 cm", "4.5 cm", "6 cm", "3.5 cm"],
      "options_hi": ["5 सेमी", "4.5 सेमी", "6 सेमी", "3.5 सेमी"],
      "answer_en": "5 cm",
      "answer_hi": "5 सेमी",
      "attempted": false
    },
    {
      "num": 33,
      "question_en": "The value of cos 60° is",
      "question_hi": "cos 60° का मान क्या है?",
      "options_en": ["1/2", "1/3", "√2/2", "√3/2"],
      "options_hi": ["1/2", "1/3", "√2/2", "√3/2"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 34,
      "question_en": "The area of a square with side 5 cm is",
      "question_hi": "5 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या होगा?",
      "options_en": ["25 cm²", "30 cm²", "20 cm²", "15 cm²"],
      "options_hi": ["25 सेमी²", "30 सेमी²", "20 सेमी²", "15 सेमी²"],
      "answer_en": "25 cm²",
      "answer_hi": "25 सेमी²",
      "attempted": false
    },
    {
      "num": 35,
      "question_en": "The product of the roots of the quadratic equation x² - 5x + 6 = 0 is",
      "question_hi": "समीकरण x² - 5x + 6 = 0 के मूलों का गुणनफल क्या है?",
      "options_en": ["6", "5", "4", "2"],
      "options_hi": ["6", "5", "4", "2"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false
    },
    {
      "num": 36,
      "question_en": "What is the value of tan 45°?",
      "question_hi": "tan 45° का मान क्या है?",
      "options_en": ["1", "0", "√2", "√3"],
      "options_hi": ["1", "0", "√2", "√3"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false
    },
    {
      "num": 37,
      "question_en": "In a triangle ABC, if AB = 5 cm, BC = 12 cm, and AC = 13 cm, the triangle is",
      "question_hi": "त्रिकोण ABC में अगर AB = 5 सेमी, BC = 12 सेमी, और AC = 13 सेमी है, तो त्रिकोण किस प्रकार का है?",
      "options_en": ["Right-angled triangle", "Equilateral triangle", "Isosceles triangle", "Scalene triangle"],
      "options_hi": ["समकोण त्रिकोण", "समान भुजा त्रिकोण", "समद्विबाहु त्रिकोण", "असमान त्रिकोण"],
      "answer_en": "Right-angled triangle",
      "answer_hi": "समकोण त्रिकोण",
      "attempted": false
    },
    {
      "num": 38,
      "question_en": "The formula for the surface area of a sphere is",
      "question_hi": "गोलाकार का सतही क्षेत्रफल निकालने का सूत्र क्या है?",
      "options_en": ["4πr²", "2πr²", "πr²", "πr³"],
      "options_hi": ["4πr²", "2πr²", "πr²", "πr³"],
      "answer_en": "4πr²",
      "answer_hi": "4πr²",
      "attempted": false
    },
    {
      "num": 39,
      "question_en": "The circumference of a circle with radius 7 cm is",
      "question_hi": "व्यास 7 सेमी वाले वृत्त का परिधि क्या होगा?",
      "options_en": ["44 cm", "42 cm", "40 cm", "38 cm"],
      "options_hi": ["44 सेमी", "42 सेमी", "40 सेमी", "38 सेमी"],
      "answer_en": "44 cm",
      "answer_hi": "44 सेमी",
      "attempted": false
    },
    {
      "num": 40,
      "question_en": "What is the mode of the data 2, 4, 4, 6, 8, 8, 8?",
      "question_hi": "डेटा 2, 4, 4, 6, 8, 8, 8 का मोड क्या होगा?",
      "options_en": ["4", "6", "8", "2"],
      "options_hi": ["4", "6", "8", "2"],
      "answer_en": "8",
      "answer_hi": "8",
      "attempted": false
    }
  ,
  
    {
      "num": 41,
      "question_en": "The formula to find the volume of a cone is",
      "question_hi": "शंकु का आयतन निकालने का सूत्र क्या है?",
      "options_en": ["(1/3)πr²h", "(1/2)πr²h", "(1/4)πr²h", "πr²h"],
      "options_hi": ["(1/3)πr²h", "(1/2)πr²h", "(1/4)πr²h", "πr²h"],
      "answer_en": "(1/3)πr²h",
      "answer_hi": "(1/3)πr²h",
      "attempted": false
    },
    {
      "num": 42,
      "question_en": "The midpoint of a line segment joining the points (3, 4) and (5, 8) is",
      "question_hi": "बिंदुओं (3, 4) और (5, 8) को जोड़ने वाली रेखा खंड का मध्य बिंदु क्या होगा?",
      "options_en": ["(4, 6)", "(3, 6)", "(4, 7)", "(5, 6)"],
      "options_hi": ["(4, 6)", "(3, 6)", "(4, 7)", "(5, 6)"],
      "answer_en": "(4, 6)",
      "answer_hi": "(4, 6)",
      "attempted": false
    },
    {
      "num": 43,
      "question_en": "In a circle, if the radius is 7 cm, the area of the circle is",
      "question_hi": "वृत्त का व्यास 7 सेमी है, तो वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["49π cm²", "14π cm²", "21π cm²", "28π cm²"],
      "options_hi": ["49π सेमी²", "14π सेमी²", "21π सेमी²", "28π सेमी²"],
      "answer_en": "49π cm²",
      "answer_hi": "49π सेमी²",
      "attempted": false
    },
    {
      "num": 44,
      "question_en": "The sum of the first 10 natural numbers is",
      "question_hi": "पहले 10 प्राकृतिक संख्याओं का योग क्या होगा?",
      "options_en": ["55", "45", "65", "60"],
      "options_hi": ["55", "45", "65", "60"],
      "answer_en": "55",
      "answer_hi": "55",
      "attempted": false
    },
    {
      "num": 45,
      "question_en": "The value of sin 30° is",
      "question_hi": "sin 30° का मान क्या है?",
      "options_en": ["1/2", "√3/2", "1", "0"],
      "options_hi": ["1/2", "√3/2", "1", "0"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 46,
      "question_en": "The sum of the interior angles of a quadrilateral is",
      "question_hi": "चतुर्भुज के आंतरिक कोणों का योग क्या होगा?",
      "options_en": ["360°", "180°", "90°", "270°"],
      "options_hi": ["360°", "180°", "90°", "270°"],
      "answer_en": "360°",
      "answer_hi": "360°",
      "attempted": false
    },
    {
      "num": 47,
      "question_en": "What is the area of a rhombus with diagonals 6 cm and 8 cm?",
      "question_hi": "6 सेमी और 8 सेमी विकर्णों वाले समलम्ब चतुर्भुज का क्षेत्रफल क्या होगा?",
      "options_en": ["24 cm²", "48 cm²", "36 cm²", "18 cm²"],
      "options_hi": ["24 सेमी²", "48 सेमी²", "36 सेमी²", "18 सेमी²"],
      "answer_en": "24 cm²",
      "answer_hi": "24 सेमी²",
      "attempted": false
    },
    {
      "num": 48,
      "question_en": "The standard form of the equation x + y = 7 is",
      "question_hi": "समीकरण x + y = 7 का मानक रूप क्या है?",
      "options_en": ["x + y = 7", "y = -x + 7", "x = -y + 7", "y = x + 7"],
      "options_hi": ["x + y = 7", "y = -x + 7", "x = -y + 7", "y = x + 7"],
      "answer_en": "y = -x + 7",
      "answer_hi": "y = -x + 7",
      "attempted": false
    },
    {
      "num": 49,
      "question_en": "The value of the discriminant in the equation x² - 4x + 4 = 0 is",
      "question_hi": "समीकरण x² - 4x + 4 = 0 में विवेचनात्मक मान क्या होगा?",
      "options_en": ["0", "4", "16", "8"],
      "options_hi": ["0", "4", "16", "8"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false
    },
    {
      "num": 50,
      "question_en": "In a linear equation, if the coefficient of x is 3 and the constant term is -5, the equation is",
      "question_hi": "एक रैखिक समीकरण में अगर x का गुणांक 3 है और स्थिरांक -5 है, तो समीकरण क्या होगा?",
      "options_en": ["3x - 5 = 0", "3x + 5 = 0", "x - 5 = 0", "x + 5 = 0"],
      "options_hi": ["3x - 5 = 0", "3x + 5 = 0", "x - 5 = 0", "x + 5 = 0"],
      "answer_en": "3x - 5 = 0",
      "answer_hi": "3x - 5 = 0",
      "attempted": false
    },
    {
      "num": 51,
      "question_en": "The value of cos 90° is",
      "question_hi": "cos 90° का मान क्या है?",
      "options_en": ["1", "0", "∞", "-1"],
      "options_hi": ["1", "0", "∞", "-1"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false
    },
    {
      "num": 52,
      "question_en": "The total surface area of a cylinder is given by the formula",
      "question_hi": "सिलेंडर का कुल सतही क्षेत्रफल निकालने का सूत्र क्या है?",
      "options_en": ["2πr(r + h)", "2πr²h", "πr²h", "2πr² + 2πrh"],
      "options_hi": ["2πr(r + h)", "2πr²h", "πr²h", "2πr² + 2πrh"],
      "answer_en": "2πr(r + h)",
      "answer_hi": "2πr(r + h)",
      "attempted": false
    },
    {
      "num": 53,
      "question_en": "The mean of the numbers 3, 7, 8, 5, 10 is",
      "question_hi": "संख्याओं 3, 7, 8, 5, 10 का माध्य क्या होगा?",
      "options_en": ["6", "7", "5", "8"],
      "options_hi": ["6", "7", "5", "8"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false
    },
    {
      "num": 54,
      "question_en": "The surface area of a cube with side 4 cm is",
      "question_hi": "4 सेमी भुजा वाले घन का सतही क्षेत्रफल क्या होगा?",
      "options_en": ["96 cm²", "64 cm²", "48 cm²", "128 cm²"],
      "options_hi": ["96 सेमी²", "64 सेमी²", "48 सेमी²", "128 सेमी²"],
      "answer_en": "96 cm²",
      "answer_hi": "96 सेमी²",
      "attempted": false
    },
    {
      "num": 55,
      "question_en": "The volume of a cube with side 3 cm is",
      "question_hi": "3 सेमी भुजा वाले घन का आयतन क्या होगा?",
      "options_en": ["27 cm³", "9 cm³", "18 cm³", "12 cm³"],
      "options_hi": ["27 सेमी³", "9 सेमी³", "18 सेमी³", "12 सेमी³"],
      "answer_en": "27 cm³",
      "answer_hi": "27 सेमी³",
      "attempted": false
    },
    {
      "num": 56,
      "question_en": "The length of the diagonal of a square with side 6 cm is",
      "question_hi": "6 सेमी भुजा वाले वर्ग का विकर्ण क्या होगा?",
      "options_en": ["6√2 cm", "5√2 cm", "4√2 cm", "3√2 cm"],
      "options_hi": ["6√2 सेमी", "5√2 सेमी", "4√2 सेमी", "3√2 सेमी"],
      "answer_en": "6√2 cm",
      "answer_hi": "6√2 सेमी",
      "attempted": false
    },
    {
      "num": 57,
      "question_en": "The sum of angles of a hexagon is",
      "question_hi": "षट्भुज के कोणों का योग क्या होगा?",
      "options_en": ["720°", "360°", "540°", "1080°"],
      "options_hi": ["720°", "360°", "540°", "1080°"],
      "answer_en": "720°",
      "answer_hi": "720°",
      "attempted": false
    },
    {
      "num": 58,
      "question_en": "The probability of getting an even number on a die is",
      "question_hi": "एक पासे पर सम संख्या प्राप्त होने की संभावना क्या होगी?",
      "options_en": ["1/2", "1/3", "1/6", "1/4"],
      "options_hi": ["1/2", "1/3", "1/6", "1/4"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 59,
      "question_en": "The area of a circle with diameter 10 cm is",
      "question_hi": "व्यास 10 सेमी वाले वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["25π cm²", "50π cm²", "100π cm²", "75π cm²"],
      "options_hi": ["25π सेमी²", "50π सेमी²", "100π सेमी²", "75π सेमी²"],
      "answer_en": "25π cm²",
      "answer_hi": "25π सेमी²",
      "attempted": false
    },
    {
      "num": 60,
      "question_en": "The surface area of a sphere with radius 5 cm is",
      "question_hi": "5 सेमी व्यास वाले गोलाकार का सतही क्षेत्रफल क्या होगा?",
      "options_en": ["100π cm²", "25π cm²", "50π cm²", "75π cm²"],
      "options_hi": ["100π सेमी²", "25π सेमी²", "50π सेमी²", "75π सेमी²"],
      "answer_en": "100π cm²",
      "answer_hi": "100π सेमी²",
      "attempted": false
    },
    
      {
        "num": 61,
        "question_en": "The probability of getting a prime number on a die is",
        "question_hi": "एक पासे पर अभाज्य संख्या प्राप्त होने की संभावना क्या होगी?",
        "options_en": ["1/3", "1/6", "1/2", "1/4"],
        "options_hi": ["1/3", "1/6", "1/2", "1/4"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false
      },
      {
        "num": 62,
        "question_en": "The sum of the exterior angles of any polygon is always",
        "question_hi": "किसी भी बहुभुज के बाहरी कोणों का योग हमेशा क्या होता है?",
        "options_en": ["360°", "180°", "90°", "270°"],
        "options_hi": ["360°", "180°", "90°", "270°"],
        "answer_en": "360°",
        "answer_hi": "360°",
        "attempted": false
      },
      {
        "num": 63,
        "question_en": "The area of a triangle with base 10 cm and height 6 cm is",
        "question_hi": "10 सेमी आधार और 6 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या होगा?",
        "options_en": ["30 cm²", "60 cm²", "20 cm²", "50 cm²"],
        "options_hi": ["30 सेमी²", "60 सेमी²", "20 सेमी²", "50 सेमी²"],
        "answer_en": "30 cm²",
        "answer_hi": "30 सेमी²",
        "attempted": false
      },
      {
        "num": 64,
        "question_en": "The volume of a cylinder with radius 7 cm and height 10 cm is",
        "question_hi": "7 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले सिलेंडर का आयतन क्या होगा?",
        "options_en": ["1540 cm³", "154 cm³", "15400 cm³", "1400 cm³"],
        "options_hi": ["1540 सेमी³", "154 सेमी³", "15400 सेमी³", "1400 सेमी³"],
        "answer_en": "1540 cm³",
        "answer_hi": "1540 सेमी³",
        "attempted": false
      },
      {
        "num": 65,
        "question_en": "The sum of the angles of a triangle is always",
        "question_hi": "त्रिकोण के कोणों का योग हमेशा क्या होता है?",
        "options_en": ["180°", "360°", "90°", "270°"],
        "options_hi": ["180°", "360°", "90°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false
      },
      {
        "num": 66,
        "question_en": "If the circumference of a circle is 44 cm, then the radius is",
        "question_hi": "अगर वृत्त की परिधि 44 सेमी है, तो उसका त्रिज्या क्या होगा?",
        "options_en": ["7 cm", "10 cm", "14 cm", "22 cm"],
        "options_hi": ["7 सेमी", "10 सेमी", "14 सेमी", "22 सेमी"],
        "answer_en": "7 cm",
        "answer_hi": "7 सेमी",
        "attempted": false
      },
      {
        "num": 67,
        "question_en": "The probability of drawing a red card from a deck of 52 cards is",
        "question_hi": "52 ताश के पत्तों के डेक से एक लाल पत्ता निकालने की संभावना क्या होगी?",
        "options_en": ["26/52", "1/2", "13/52", "1/4"],
        "options_hi": ["26/52", "1/2", "13/52", "1/4"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false
      },
      {
        "num": 68,
        "question_en": "The perimeter of a rectangle with length 12 cm and width 5 cm is",
        "question_hi": "12 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत का परिधि क्या होगा?",
        "options_en": ["34 cm", "36 cm", "40 cm", "42 cm"],
        "options_hi": ["34 सेमी", "36 सेमी", "40 सेमी", "42 सेमी"],
        "answer_en": "34 cm",
        "answer_hi": "34 सेमी",
        "attempted": false
      },
      {
        "num": 69,
        "question_en": "The area of a square with side 4 cm is",
        "question_hi": "4 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या होगा?",
        "options_en": ["16 cm²", "12 cm²", "18 cm²", "20 cm²"],
        "options_hi": ["16 सेमी²", "12 सेमी²", "18 सेमी²", "20 सेमी²"],
        "answer_en": "16 cm²",
        "answer_hi": "16 सेमी²",
        "attempted": false
      },
      {
        "num": 70,
        "question_en": "The diagonal of a rectangle with length 9 cm and width 12 cm is",
        "question_hi": "9 सेमी लंबाई और 12 सेमी चौड़ाई वाले आयत का विकर्ण क्या होगा?",
        "options_en": ["15 cm", "16 cm", "18 cm", "14 cm"],
        "options_hi": ["15 सेमी", "16 सेमी", "18 सेमी", "14 सेमी"],
        "answer_en": "15 cm",
        "answer_hi": "15 सेमी",
        "attempted": false
      },
      {
        "num": 71,
        "question_en": "The value of tan 45° is",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["1", "0", "√3", "-1"],
        "options_hi": ["1", "0", "√3", "-1"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false
      },
      {
        "num": 72,
        "question_en": "The equation of a line parallel to the x-axis is",
        "question_hi": "x-अक्ष के समानांतर रेखा का समीकरण क्या होता है?",
        "options_en": ["y = c", "x = c", "y = 0", "x = 0"],
        "options_hi": ["y = c", "x = c", "y = 0", "x = 0"],
        "answer_en": "y = c",
        "answer_hi": "y = c",
        "attempted": false
      },
      {
        "num": 73,
        "question_en": "The formula for the area of a trapezium is",
        "question_hi": "समलम्ब चतुर्भुज का क्षेत्रफल निकालने का सूत्र क्या है?",
        "options_en": ["(1/2) × (sum of parallel sides) × height", "(1/2) × base × height", "(1/3) × base × height", "(1/4) × base × height"],
        "options_hi": ["(1/2) × (समांतर भुजाओं का योग) × ऊँचाई", "(1/2) × आधार × ऊँचाई", "(1/3) × आधार × ऊँचाई", "(1/4) × आधार × ऊँचाई"],
        "answer_en": "(1/2) × (sum of parallel sides) × height",
        "answer_hi": "(1/2) × (समांतर भुजाओं का योग) × ऊँचाई",
        "attempted": false
      },
      {
        "num": 74,
        "question_en": "The perimeter of an equilateral triangle with side 6 cm is",
        "question_hi": "6 सेमी भुजा वाले समबाहु त्रिकोण का परिधि क्या होगा?",
        "options_en": ["18 cm", "24 cm", "12 cm", "20 cm"],
        "options_hi": ["18 सेमी", "24 सेमी", "12 सेमी", "20 सेमी"],
        "answer_en": "18 cm",
        "answer_hi": "18 सेमी",
        "attempted": false
      },
      {
        "num": 75,
        "question_en": "The value of cos 0° is",
        "question_hi": "cos 0° का मान क्या है?",
        "options_en": ["1", "0", "-1", "∞"],
        "options_hi": ["1", "0", "-1", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false
      },
      {
        "num": 76,
        "question_en": "The area of a rectangle with length 8 cm and width 5 cm is",
        "question_hi": "8 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या होगा?",
        "options_en": ["40 cm²", "35 cm²", "45 cm²", "50 cm²"],
        "options_hi": ["40 सेमी²", "35 सेमी²", "45 सेमी²", "50 सेमी²"],
        "answer_en": "40 cm²",
        "answer_hi": "40 सेमी²",
        "attempted": false
      },
      {
        "num": 77,
        "question_en": "The volume of a sphere with radius 4 cm is",
        "question_hi": "4 सेमी त्रिज्या वाली गोलाकार का आयतन क्या होगा?",
        "options_en": ["268π cm³", "64π cm³", "256π cm³", "50π cm³"],
        "options_hi": ["268π सेमी³", "64π सेमी³", "256π सेमी³", "50π सेमी³"],
        "answer_en": "268π cm³",
        "answer_hi": "268π सेमी³",
        "attempted": false
      },
      {
        "num": 78,
        "question_en": "The equation of a line passing through the point (2, 3) and having slope 4 is",
        "question_hi": "बिंदु (2, 3) से गुजरने वाली और 4 ढाल वाली रेखा का समीकरण क्या होगा?",
        "options_en": ["y - 3 = 4(x - 2)", "y = 4x + 3", "x = 4y + 3", "y - 2 = 4(x - 3)"],
        "options_hi": ["y - 3 = 4(x - 2)", "y = 4x + 3", "x = 4y + 3", "y - 2 = 4(x - 3)"],
        "answer_en": "y - 3 = 4(x - 2)",
        "answer_hi": "y - 3 = 4(x - 2)",
        "attempted": false
      },
      {
        "num": 79,
        "question_en": "The number of diagonals in a polygon with n sides is",
        "question_hi": "n भुजाओं वाले बहुभुज में विकर्णों की संख्या क्या होगी?",
        "options_en": ["n(n - 3)/2", "n(n - 2)/2", "n(n + 3)/2", "n(n + 2)/2"],
        "options_hi": ["n(n - 3)/2", "n(n - 2)/2", "n(n + 3)/2", "n(n + 2)/2"],
        "answer_en": "n(n - 3)/2",
        "answer_hi": "n(n - 3)/2",
        "attempted": false
      },
      {
        "num": 80,
        "question_en": "The area of a sector with radius 7 cm and angle 60° is",
        "question_hi": "7 सेमी त्रिज्या और 60° कोण वाले क्षेत्रफल का क्षेत्रफल क्या होगा?",
        "options_en": ["49π/6 cm²", "49π/3 cm²", "49π/4 cm²", "49π/2 cm²"],
        "options_hi": ["49π/6 सेमी²", "49π/3 सेमी²", "49π/4 सेमी²", "49π/2 सेमी²"],
        "answer_en": "49π/6 cm²",
        "answer_hi": "49π/6 सेमी²",
        "attempted": false
      }
    ,
    
      {
        "num": 81,
        "question_en": "The sum of the first 10 natural numbers is",
        "question_hi": "पहले 10 प्राकृतिक संख्याओं का योग क्या होगा?",
        "options_en": ["55", "45", "50", "60"],
        "options_hi": ["55", "45", "50", "60"],
        "answer_en": "55",
        "answer_hi": "55",
        "attempted": false
      },
      {
        "num": 82,
        "question_en": "The probability of drawing an ace from a deck of cards is",
        "question_hi": "ताश के पत्तों के डेक से एक ऐस निकालने की संभावना क्या होगी?",
        "options_en": ["1/13", "1/52", "1/4", "1/26"],
        "options_hi": ["1/13", "1/52", "1/4", "1/26"],
        "answer_en": "1/13",
        "answer_hi": "1/13",
        "attempted": false
      },
      {
        "num": 83,
        "question_en": "The solution to the equation 3x - 5 = 10 is",
        "question_hi": "समीकरण 3x - 5 = 10 का हल क्या होगा?",
        "options_en": ["x = 5", "x = 15", "x = 10", "x = 20"],
        "options_hi": ["x = 5", "x = 15", "x = 10", "x = 20"],
        "answer_en": "x = 5",
        "answer_hi": "x = 5",
        "attempted": false
      },
      {
        "num": 84,
        "question_en": "The perimeter of an equilateral triangle with side 5 cm is",
        "question_hi": "5 सेमी भुजा वाले समबाहु त्रिकोण का परिधि क्या होगा?",
        "options_en": ["15 cm", "10 cm", "20 cm", "30 cm"],
        "options_hi": ["15 सेमी", "10 सेमी", "20 सेमी", "30 सेमी"],
        "answer_en": "15 cm",
        "answer_hi": "15 सेमी",
        "attempted": false
      },
      {
        "num": 85,
        "question_en": "The area of a circle with radius 7 cm is",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
        "options_en": ["49π cm²", "14π cm²", "22π cm²", "50π cm²"],
        "options_hi": ["49π सेमी²", "14π सेमी²", "22π सेमी²", "50π सेमी²"],
        "answer_en": "49π cm²",
        "answer_hi": "49π सेमी²",
        "attempted": false
      },
      {
        "num": 86,
        "question_en": "The distance between the points (1, 2) and (4, 6) is",
        "question_hi": "(1, 2) और (4, 6) बिंदुओं के बीच की दूरी क्या होगी?",
        "options_en": ["5", "4", "3", "6"],
        "options_hi": ["5", "4", "3", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false
      },
      {
        "num": 87,
        "question_en": "The surface area of a cube with side 3 cm is",
        "question_hi": "3 सेमी भुजा वाले घन का पृष्ठ क्षेत्रफल क्या होगा?",
        "options_en": ["54 cm²", "27 cm²", "81 cm²", "36 cm²"],
        "options_hi": ["54 सेमी²", "27 सेमी²", "81 सेमी²", "36 सेमी²"],
        "answer_en": "54 cm²",
        "answer_hi": "54 सेमी²",
        "attempted": false
      },
      {
        "num": 88,
        "question_en": "The value of sin 30° is",
        "question_hi": "sin 30° का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1", "0"],
        "options_hi": ["1/2", "√3/2", "1", "0"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false
      },
      {
        "num": 89,
        "question_en": "The area of a triangle with base 12 cm and height 8 cm is",
        "question_hi": "12 सेमी आधार और 8 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या होगा?",
        "options_en": ["48 cm²", "60 cm²", "45 cm²", "72 cm²"],
        "options_hi": ["48 सेमी²", "60 सेमी²", "45 सेमी²", "72 सेमी²"],
        "answer_en": "48 cm²",
        "answer_hi": "48 सेमी²",
        "attempted": false
      },
      {
        "num": 90,
        "question_en": "The value of cot 45° is",
        "question_hi": "cot 45° का मान क्या है?",
        "options_en": ["1", "0", "√3", "∞"],
        "options_hi": ["1", "0", "√3", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false
      },
      {
        "num": 91,
        "question_en": "The volume of a cone with radius 3 cm and height 4 cm is",
        "question_hi": "3 सेमी त्रिज्या और 4 सेमी ऊँचाई वाले शंकु का आयतन क्या होगा?",
        "options_en": ["12π cm³", "36π cm³", "24π cm³", "48π cm³"],
        "options_hi": ["12π सेमी³", "36π सेमी³", "24π सेमी³", "48π सेमी³"],
        "answer_en": "12π cm³",
        "answer_hi": "12π सेमी³",
        "attempted": false
      },
      {
        "num": 92,
        "question_en": "The sum of angles of a quadrilateral is",
        "question_hi": "चतुर्भुज के कोणों का योग क्या होगा?",
        "options_en": ["360°", "180°", "270°", "90°"],
        "options_hi": ["360°", "180°", "270°", "90°"],
        "answer_en": "360°",
        "answer_hi": "360°",
        "attempted": false
      },
      {
        "num": 93,
        "question_en": "The ratio of the areas of two similar triangles is the square of the ratio of their corresponding sides. This is known as",
        "question_hi": "दो समान त्रिकोणों के क्षेत्रफल का अनुपात उनके संबंधित भुजाओं के अनुपात का वर्ग होता है। इसे कहा जाता है",
        "options_en": ["Theorem of proportionality", "Basic Proportionality Theorem", "Area Theorem", "Heron's Formula"],
        "options_hi": ["प्रोपोर्शनलिटी का प्रमेय", "मूलभूत अनुपात प्रमेय", "क्षेत्रफल प्रमेय", "हेरॉन का सूत्र"],
        "answer_en": "Theorem of proportionality",
        "answer_hi": "प्रोपोर्शनलिटी का प्रमेय",
        "attempted": false
      },
      {
        "num": 94,
        "question_en": "The area of a rhombus with diagonals 8 cm and 6 cm is",
        "question_hi": "8 सेमी और 6 सेमी विकर्ण वाले समलंब चतुर्भुज का क्षेत्रफल क्या होगा?",
        "options_en": ["24 cm²", "48 cm²", "36 cm²", "18 cm²"],
        "options_hi": ["24 सेमी²", "48 सेमी²", "36 सेमी²", "18 सेमी²"],
        "answer_en": "24 cm²",
        "answer_hi": "24 सेमी²",
        "attempted": false
      },
      {
        "num": 95,
        "question_en": "The value of tan 60° is",
        "question_hi": "tan 60° का मान क्या है?",
        "options_en": ["√3", "1", "1/2", "0"],
        "options_hi": ["√3", "1", "1/2", "0"],
        "answer_en": "√3",
        "answer_hi": "√3",
        "attempted": false
      },
      {
        "num": 96,
        "question_en": "The volume of a cube with side 4 cm is",
        "question_hi": "4 सेमी भुजा वाले घन का आयतन क्या होगा?",
        "options_en": ["64 cm³", "16 cm³", "32 cm³", "24 cm³"],
        "options_hi": ["64 सेमी³", "16 सेमी³", "32 सेमी³", "24 सेमी³"],
        "answer_en": "64 cm³",
        "answer_hi": "64 सेमी³",
        "attempted": false
      },
      {
        "num": 97,
        "question_en": "The total surface area of a sphere with radius 5 cm is",
        "question_hi": "5 सेमी त्रिज्या वाले गोलाकार का कुल पृष्ठ क्षेत्रफल क्या होगा?",
        "options_en": ["100π cm²", "200π cm²", "25π cm²", "50π cm²"],
        "options_hi": ["100π सेमी²", "200π सेमी²", "25π सेमी²", "50π सेमी²"],
        "answer_en": "100π cm²",
        "answer_hi": "100π सेमी²",
        "attempted": false
      },
      {
        "num": 98,
        "question_en": "The area of a sector with radius 10 cm and angle 90° is",
        "question_hi": "10 सेमी त्रिज्या और 90° कोण वाले क्षेत्रफल का क्षेत्रफल क्या होगा?",
        "options_en": ["25π cm²", "50π cm²", "75π cm²", "100π cm²"],
        "options_hi": ["25π सेमी²", "50π सेमी²", "75π सेमी²", "100π सेमी²"],
        "answer_en": "25π cm²",
        "answer_hi": "25π सेमी²",
        "attempted": false
      },
      {
        "num": 99,
        "question_en": "The formula for the area of a trapezium is",
        "question_hi": "समलम्ब चतुर्भुज का क्षेत्रफल निकालने का सूत्र क्या है?",
        "options_en": ["(1/2) × (sum of parallel sides) × height", "(1/2) × base × height", "(1/3) × base × height", "(1/4) × base × height"],
        "options_hi": ["(1/2) × (समांतर भुजाओं का योग) × ऊँचाई", "(1/2) × आधार × ऊँचाई", "(1/3) × आधार × ऊँचाई", "(1/4) × आधार × ऊँचाई"],
        "answer_en": "(1/2) × (sum of parallel sides) × height",
        "answer_hi": "(1/2) × (समांतर भुजाओं का योग) × ऊँचाई",
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
