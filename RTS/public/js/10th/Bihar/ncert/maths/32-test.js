const questions = [
  {
    "num": 1,
    "question_en": "Find the distance between points A(2,3) and B(5,7).",
    "question_hi": "बिंदुओं A(2,3) और B(5,7) के बीच की दूरी ज्ञात कीजिए।",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Find the coordinates of midpoint of line joining P(3,4) and Q(7,8).",
    "question_hi": "बिंदुओं P(3,4) और Q(7,8) को मिलाने वाली रेखा के मध्यबिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(5,6)", "(6,5)", "(4,7)", "(7,4)"],
    "options_hi": ["(5,6)", "(6,5)", "(4,7)", "(7,4)"],
    "answer_en": "(5,6)",
    "answer_hi": "(5,6)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Find the slope of line joining points (1,2) and (4,8).",
    "question_hi": "बिंदुओं (1,2) और (4,8) को मिलाने वाली रेखा का ढाल ज्ञात कीजिए।",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If points A(2,3), B(5,7) and C(8,11) are collinear, find value of k if C is (k,11).",
    "question_hi": "यदि बिंदु A(2,3), B(5,7) और C(8,11) संरेख हैं, तो k का मान ज्ञात कीजिए यदि C (k,11) है।",
    "options_en": ["8", "9", "10", "11"],
    "options_hi": ["8", "9", "10", "11"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Find area of triangle with vertices (0,0), (4,0), (0,3).",
    "question_hi": "शीर्षों (0,0), (4,0), (0,3) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
    "options_en": ["6", "8", "10", "12"],
    "options_hi": ["6", "8", "10", "12"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Find the point which divides line joining (2,3) and (5,7) in ratio 2:1 internally.",
    "question_hi": "वह बिंदु ज्ञात कीजिए जो (2,3) और (5,7) को मिलाने वाली रेखा को 2:1 के अनुपात में आंतरिक रूप से विभाजित करता है।",
    "options_en": ["(4, 17/3)", "(5,6)", "(3,5)", "(4,5)"],
    "options_hi": ["(4, 17/3)", "(5,6)", "(3,5)", "(4,5)"],
    "answer_en": "(4, 17/3)",
    "answer_hi": "(4, 17/3)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Find distance of point (3,4) from origin.",
    "question_hi": "बिंदु (3,4) की मूलबिंदु से दूरी ज्ञात कीजिए।",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Find slope of line perpendicular to line joining (1,2) and (4,8).",
    "question_hi": "(1,2) और (4,8) को मिलाने वाली रेखा के लंबवत रेखा का ढाल ज्ञात कीजिए।",
    "options_en": ["-1/2", "-2", "1/2", "2"],
    "options_hi": ["-1/2", "-2", "1/2", "2"],
    "answer_en": "-1/2",
    "answer_hi": "-1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "If midpoint of (2,k) and (6,7) is (4,5), find k.",
    "question_hi": "यदि (2,k) और (6,7) का मध्यबिंदु (4,5) है, तो k ज्ञात कीजिए।",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Find coordinates of point dividing (1,2) and (4,5) externally in ratio 2:1.",
    "question_hi": "बिंदु (1,2) और (4,5) को 2:1 के अनुपात में बाह्य रूप से विभाजित करने वाले बिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(7,8)", "(6,7)", "(5,6)", "(4,5)"],
    "options_hi": ["(7,8)", "(6,7)", "(5,6)", "(4,5)"],
    "answer_en": "(7,8)",
    "answer_hi": "(7,8)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Area of triangle with vertices (1,2), (3,4), (5,6) is:",
    "question_hi": "शीर्षों (1,2), (3,4), (5,6) वाले त्रिभुज का क्षेत्रफल है:",
    "options_en": ["0", "2", "4", "6"],
    "options_hi": ["0", "2", "4", "6"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Find slope of line making angle 60° with positive x-axis.",
    "question_hi": "x-अक्ष की धनात्मक दिशा से 60° का कोण बनाने वाली रेखा का ढाल ज्ञात कीजिए।",
    "options_en": ["√3", "1/√3", "1", "2"],
    "options_hi": ["√3", "1/√3", "1", "2"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Distance between points (a,b) and (-a,-b) is:",
    "question_hi": "बिंदुओं (a,b) और (-a,-b) के बीच की दूरी है:",
    "options_en": ["2√(a²+b²)", "√(a²+b²)", "2a", "2b"],
    "options_hi": ["2√(a²+b²)", "√(a²+b²)", "2a", "2b"],
    "answer_en": "2√(a²+b²)",
    "answer_hi": "2√(a²+b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If A(2,3), B(4,5) and C(6,7) are collinear, find ratio in which B divides AC.",
    "question_hi": "यदि A(2,3), B(4,5) और C(6,7) संरेख हैं, तो वह अनुपात ज्ञात कीजिए जिसमें B, AC को विभाजित करता है।",
    "options_en": ["1:1", "2:1", "1:2", "3:1"],
    "options_hi": ["1:1", "2:1", "1:2", "3:1"],
    "answer_en": "1:1",
    "answer_hi": "1:1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Find centroid of triangle with vertices (0,0), (4,0), (0,6).",
    "question_hi": "शीर्षों (0,0), (4,0), (0,6) वाले त्रिभुज का केन्द्रक ज्ञात कीजिए।",
    "options_en": ["(4/3, 2)", "(2, 2)", "(3, 3)", "(4, 6)"],
    "options_hi": ["(4/3, 2)", "(2, 2)", "(3, 3)", "(4, 6)"],
    "answer_en": "(4/3, 2)",
    "answer_hi": "(4/3, 2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Find distance of point (4,3) from x-axis.",
    "question_hi": "बिंदु (4,3) की x-अक्ष से दूरी ज्ञात कीजिए।",
    "options_en": ["3", "4", "5", "7"],
    "options_hi": ["3", "4", "5", "7"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If slope of line joining (2,3) and (k,5) is 2, find k.",
    "question_hi": "यदि (2,3) और (k,5) को मिलाने वाली रेखा का ढाल 2 है, तो k ज्ञात कीजिए।",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Find coordinates of point on y-axis equidistant from (2,3) and (4,5).",
    "question_hi": "y-अक्ष पर उस बिंदु के निर्देशांक ज्ञात कीजिए जो (2,3) और (4,5) से समदूरस्थ है।",
    "options_en": ["(0,9)", "(0,8)", "(0,7)", "(0,6)"],
    "options_hi": ["(0,9)", "(0,8)", "(0,7)", "(0,6)"],
    "answer_en": "(0,9)",
    "answer_hi": "(0,9)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If area of triangle with vertices (2,3), (5,7), (k,4) is 6 sq units, find k.",
    "question_hi": "यदि शीर्षों (2,3), (5,7), (k,4) वाले त्रिभुज का क्षेत्रफल 6 वर्ग इकाई है, तो k ज्ञात कीजिए।",
    "options_en": ["8", "9", "10", "11"],
    "options_hi": ["8", "9", "10", "11"],
    "answer_en": "9",
    "answer_hi": "9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Find slope of line parallel to line joining (-1,2) and (3,4).",
    "question_hi": "(-1,2) और (3,4) को मिलाने वाली रेखा के समांतर रेखा का ढाल ज्ञात कीजिए।",
    "options_en": ["1/2", "2", "-1/2", "-2"],
    "options_hi": ["1/2", "2", "-1/2", "-2"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Find ratio in which y-axis divides line joining (2,3) and (5,7).",
    "question_hi": "वह अनुपात ज्ञात कीजिए जिसमें y-अक्ष, (2,3) और (5,7) को मिलाने वाली रेखा को विभाजित करता है।",
    "options_en": ["2:5 externally", "2:5 internally", "5:2 externally", "5:2 internally"],
    "options_hi": ["2:5 बाह्य", "2:5 आंतरिक", "5:2 बाह्य", "5:2 आंतरिक"],
    "answer_en": "2:5 externally",
    "answer_hi": "2:5 बाह्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Distance between points (cosθ, sinθ) and (-cosθ, -sinθ) is:",
    "question_hi": "बिंदुओं (cosθ, sinθ) और (-cosθ, -sinθ) के बीच की दूरी है:",
    "options_en": ["2", "√2", "1", "0"],
    "options_hi": ["2", "√2", "1", "0"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "If centroid of triangle with vertices (1,2), (3,4), (5,k) is (3,4), find k.",
    "question_hi": "यदि शीर्षों (1,2), (3,4), (5,k) वाले त्रिभुज का केन्द्रक (3,4) है, तो k ज्ञात कीजिए।",
    "options_en": ["6", "7", "8", "9"],
    "options_hi": ["6", "7", "8", "9"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Find area of quadrilateral with vertices (1,1), (4,1), (3,5), (0,4).",
    "question_hi": "शीर्षों (1,1), (4,1), (3,5), (0,4) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
    "options_en": ["11", "12", "13", "14"],
    "options_hi": ["11", "12", "13", "14"],
    "answer_en": "11",
    "answer_hi": "11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Find slope of line perpendicular to line 2x + 3y = 7.",
    "question_hi": "रेखा 2x + 3y = 7 के लंबवत रेखा का ढाल ज्ञात कीजिए।",
    "options_en": ["3/2", "-3/2", "2/3", "-2/3"],
    "options_hi": ["3/2", "-3/2", "2/3", "-2/3"],
    "answer_en": "3/2",
    "answer_hi": "3/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "If point P divides A(2,3) and B(5,7) in ratio k:1, and P is (4,5), find k.",
    "question_hi": "यदि बिंदु P, A(2,3) और B(5,7) को k:1 के अनुपात में विभाजित करता है, और P (4,5) है, तो k ज्ञात कीजिए।",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Find distance between parallel lines 3x + 4y = 10 and 3x + 4y = 20.",
    "question_hi": "समांतर रेखाओं 3x + 4y = 10 और 3x + 4y = 20 के बीच की दूरी ज्ञात कीजिए।",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "If points (1,2), (3,4), (5,6) and (7,k) are vertices of parallelogram, find k.",
    "question_hi": "यदि बिंदु (1,2), (3,4), (5,6) और (7,k) एक समांतर चतुर्भुज के शीर्ष हैं, तो k ज्ञात कीजिए।",
    "options_en": ["8", "9", "10", "11"],
    "options_hi": ["8", "9", "10", "11"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Find coordinates of point on x-axis equidistant from (2,3) and (4,5).",
    "question_hi": "x-अक्ष पर उस बिंदु के निर्देशांक ज्ञात कीजिए जो (2,3) और (4,5) से समदूरस्थ है।",
    "options_en": ["(7,0)", "(8,0)", "(9,0)", "(10,0)"],
    "options_hi": ["(7,0)", "(8,0)", "(9,0)", "(10,0)"],
    "answer_en": "(7,0)",
    "answer_hi": "(7,0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If area of triangle is 0 with vertices (2,3), (4,5), (6,7), then points are:",
    "question_hi": "यदि शीर्षों (2,3), (4,5), (6,7) वाले त्रिभुज का क्षेत्रफल 0 है, तो बिंदु हैं:",
    "options_en": ["Collinear", "Non-collinear", "Vertices of right triangle", "None"],
    "options_hi": ["संरेख", "असंरेख", "समकोण त्रिभुज के शीर्ष", "कोई नहीं"],
    "answer_en": "Collinear",
    "answer_hi": "संरेख",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Find slope of line making equal intercepts on axes.",
    "question_hi": "अक्षों पर समान अंत:खंड बनाने वाली रेखा का ढाल ज्ञात कीजिए।",
    "options_en": ["-1", "1", "0", "∞"],
    "options_hi": ["-1", "1", "0", "∞"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Distance between points (a cosθ, a sinθ) and (a cosφ, a sinφ) is:",
    "question_hi": "बिंदुओं (a cosθ, a sinθ) और (a cosφ, a sinφ) के बीच की दूरी है:",
    "options_en": ["2a|sin((θ-φ)/2)|", "2a|cos((θ-φ)/2)|", "a|θ-φ|", "a√2"],
    "options_hi": ["2a|sin((θ-φ)/2)|", "2a|cos((θ-φ)/2)|", "a|θ-φ|", "a√2"],
    "answer_en": "2a|sin((θ-φ)/2)|",
    "answer_hi": "2a|sin((θ-φ)/2)|",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If line joining (1,2) and (3,4) is parallel to line joining (5,6) and (7,k), find k.",
    "question_hi": "यदि (1,2) और (3,4) को मिलाने वाली रेखा, (5,6) और (7,k) को मिलाने वाली रेखा के समांतर है, तो k ज्ञात कीजिए।",
    "options_en": ["8", "9", "10", "11"],
    "options_hi": ["8", "9", "10", "11"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Find coordinates of point dividing (1,2) and (4,5) in ratio 1:2 internally.",
    "question_hi": "बिंदु (1,2) और (4,5) को 1:2 के अनुपात में आंतरिक रूप से विभाजित करने वाले बिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(2,3)", "(3,4)", "(4,5)", "(5,6)"],
    "options_hi": ["(2,3)", "(3,4)", "(4,5)", "(5,6)"],
    "answer_en": "(2,3)",
    "answer_hi": "(2,3)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "If distance between (2,3) and (k,5) is √13, find k.",
    "question_hi": "यदि (2,3) और (k,5) के बीच की दूरी √13 है, तो k ज्ञात कीजिए।",
    "options_en": ["5 or -1", "6 or -2", "7 or -3", "8 or -4"],
    "options_hi": ["5 या -1", "6 या -2", "7 या -3", "8 या -4"],
    "answer_en": "5 or -1",
    "answer_hi": "5 या -1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Find area of triangle with vertices (a,b+c), (b,c+a), (c,a+b).",
    "question_hi": "शीर्षों (a,b+c), (b,c+a), (c,a+b) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
    "options_en": ["0", "1", "a+b+c", "abc"],
    "options_hi": ["0", "1", "a+b+c", "abc"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If slope of line is 2 and it passes through (1,3), find its equation.",
    "question_hi": "यदि एक रेखा का ढाल 2 है और यह (1,3) से गुजरती है, तो इसका समीकरण ज्ञात कीजिए।",
    "options_en": ["y=2x+1", "y=2x+2", "y=2x-1", "y=2x+3"],
    "options_hi": ["y=2x+1", "y=2x+2", "y=2x-1", "y=2x+3"],
    "answer_en": "y=2x+1",
    "answer_hi": "y=2x+1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Find distance between points on x-axis which are at distance 5 from (3,4).",
    "question_hi": "x-अक्ष पर उन बिंदुओं के बीच की दूरी ज्ञात कीजिए जो (3,4) से 5 की दूरी पर हैं।",
    "options_en": ["6", "8", "10", "12"],
    "options_hi": ["6", "8", "10", "12"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If points (k,2), (3,4), (5,6) are collinear, find k.",
    "question_hi": "यदि बिंदु (k,2), (3,4), (5,6) संरेख हैं, तो k ज्ञात कीजिए।",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Find coordinates of orthocenter of triangle with vertices (0,0), (4,0), (0,6).",
    "question_hi": "शीर्षों (0,0), (4,0), (0,6) वाले त्रिभुज के लंबकेंद्र के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(0,0)", "(4,0)", "(0,6)", "(4/3, 2)"],
    "options_hi": ["(0,0)", "(4,0)", "(0,6)", "(4/3, 2)"],
    "answer_en": "(0,0)",
    "answer_hi": "(0,0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If line joining (1,2) and (3,4) is perpendicular to line joining (5,6) and (7,k), find k.",
    "question_hi": "यदि (1,2) और (3,4) को मिलाने वाली रेखा, (5,6) और (7,k) को मिलाने वाली रेखा के लंबवत है, तो k ज्ञात कीजिए।",
    "options_en": ["4", "5", "6", "7"],
    "options_hi": ["4", "5", "6", "7"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Find coordinates of point of trisection of line joining (2,3) and (5,9) nearer to (2,3).",
    "question_hi": "(2,3) और (5,9) को मिलाने वाली रेखा के त्रिभाजन बिंदु के निर्देशांक ज्ञात कीजिए जो (2,3) के निकट है।",
    "options_en": ["(3,5)", "(4,7)", "(5,9)", "(6,11)"],
    "options_hi": ["(3,5)", "(4,7)", "(5,9)", "(6,11)"],
    "answer_en": "(3,5)",
    "answer_hi": "(3,5)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "If area of triangle with vertices (0,0), (a,0), (0,b) is 10, find relation between a and b.",
    "question_hi": "यदि शीर्षों (0,0), (a,0), (0,b) वाले त्रिभुज का क्षेत्रफल 10 है, तो a और b के बीच संबंध ज्ञात कीजिए।",
    "options_en": ["ab=20", "a+b=20", "ab=40", "a/b=2"],
    "options_hi": ["ab=20", "a+b=20", "ab=40", "a/b=2"],
    "answer_en": "ab=20",
    "answer_hi": "ab=20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Find distance between points (sinθ, cosθ) and (cosθ, sinθ).",
    "question_hi": "बिंदुओं (sinθ, cosθ) और (cosθ, sinθ) के बीच की दूरी ज्ञात कीजिए।",
    "options_en": ["√2|sinθ - cosθ|", "|sinθ - cosθ|", "√2", "1"],
    "options_hi": ["√2|sinθ - cosθ|", "|sinθ - cosθ|", "√2", "1"],
    "answer_en": "√2|sinθ - cosθ|",
    "answer_hi": "√2|sinθ - cosθ|",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If centroid of triangle is (3,4) and two vertices are (1,2) and (5,6), find third vertex.",
    "question_hi": "यदि एक त्रिभुज का केन्द्रक (3,4) है और दो शीर्ष (1,2) और (5,6) हैं, तो तीसरा शीर्ष ज्ञात कीजिए।",
    "options_en": ["(3,4)", "(4,5)", "(5,6)", "(6,7)"],
    "options_hi": ["(3,4)", "(4,5)", "(5,6)", "(6,7)"],
    "answer_en": "(3,4)",
    "answer_hi": "(3,4)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Find ratio in which line 3x + 4y = 7 divides line joining (1,2) and (3,4).",
    "question_hi": "वह अनुपात ज्ञात कीजिए जिसमें रेखा 3x + 4y = 7, (1,2) और (3,4) को मिलाने वाली रेखा को विभाजित करती है।",
    "options_en": ["3:5 externally", "3:5 internally", "5:3 externally", "5:3 internally"],
    "options_hi": ["3:5 बाह्य", "3:5 आंतरिक", "5:3 बाह्य", "5:3 आंतरिक"],
    "answer_en": "3:5 internally",
    "answer_hi": "3:5 आंतरिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If slope of line is m and it makes intercepts a and b on axes, then:",
    "question_hi": "यदि एक रेखा का ढाल m है और यह अक्षों पर a और b अंत:खंड बनाती है, तो:",
    "options_en": ["m = -b/a", "m = -a/b", "m = a/b", "m = b/a"],
    "options_hi": ["m = -b/a", "m = -a/b", "m = a/b", "m = b/a"],
    "answer_en": "m = -b/a",
    "answer_hi": "m = -b/a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Find coordinates of point which divides line joining (1,2) and (3,4) in ratio 1:1.",
    "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो (1,2) और (3,4) को मिलाने वाली रेखा को 1:1 के अनुपात में विभाजित करता है।",
    "options_en": ["(2,3)", "(3,4)", "(4,5)", "(5,6)"],
    "options_hi": ["(2,3)", "(3,4)", "(4,5)", "(5,6)"],
    "answer_en": "(2,3)",
    "answer_hi": "(2,3)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Distance between points (at₁², 2at₁) and (at₂², 2at₂) is:",
    "question_hi": "बिंदुओं (at₁², 2at₁) और (at₂², 2at₂) के बीच की दूरी है:",
    "options_en": ["a|t₁ - t₂|√(t₁ + t₂)² + 4", "a|t₁ - t₂|√(t₁ + t₂)²", "a(t₁ - t₂)²", "2a|t₁ - t₂|"],
    "options_hi": ["a|t₁ - t₂|√(t₁ + t₂)² + 4", "a|t₁ - t₂|√(t₁ + t₂)²", "a(t₁ - t₂)²", "2a|t₁ - t₂|"],
    "answer_en": "a|t₁ - t₂|√(t₁ + t₂)² + 4",
    "answer_hi": "a|t₁ - t₂|√(t₁ + t₂)² + 4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "If vertices of triangle are (0,0), (3,0), (0,4), then its circumcenter is:",
    "question_hi": "यदि त्रिभुज के शीर्ष (0,0), (3,0), (0,4) हैं, तो इसका परिकेंद्र है:",
    "options_en": ["(1.5, 2)", "(2, 1.5)", "(3, 4)", "(0, 0)"],
    "options_hi": ["(1.5, 2)", "(2, 1.5)", "(3, 4)", "(0, 0)"],
    "answer_en": "(1.5, 2)",
    "answer_hi": "(1.5, 2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Find the equation of line passing through (2,3) with slope 4.",
    "question_hi": "(2,3) से गुजरने वाली और ढाल 4 वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["y = 4x - 5", "y = 4x + 5", "y = 4x - 11", "y = 4x + 11"],
    "options_hi": ["y = 4x - 5", "y = 4x + 5", "y = 4x - 11", "y = 4x + 11"],
    "answer_en": "y = 4x - 5",
    "answer_hi": "y = 4x - 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Find the intercepts made by line 3x + 4y = 12 on coordinate axes.",
    "question_hi": "रेखा 3x + 4y = 12 द्वारा निर्देशांक अक्षों पर बने अंत:खंड ज्ञात कीजिए।",
    "options_en": ["x-intercept = 4, y-intercept = 3", "x-intercept = 3, y-intercept = 4", "x-intercept = 12, y-intercept = 12", "x-intercept = 6, y-intercept = 6"],
    "options_hi": ["x-अंत:खंड = 4, y-अंत:खंड = 3", "x-अंत:खंड = 3, y-अंत:खंड = 4", "x-अंत:खंड = 12, y-अंत:खंड = 12", "x-अंत:खंड = 6, y-अंत:खंड = 6"],
    "answer_en": "x-intercept = 4, y-intercept = 3",
    "answer_hi": "x-अंत:खंड = 4, y-अंत:खंड = 3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Find the angle between lines with slopes 1 and √3.",
    "question_hi": "ढाल 1 और √3 वाली रेखाओं के बीच का कोण ज्ञात कीजिए।",
    "options_en": ["15°", "30°", "45°", "60°"],
    "options_hi": ["15°", "30°", "45°", "60°"],
    "answer_en": "15°",
    "answer_hi": "15°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Find the distance between parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 12 = 0.",
    "question_hi": "समांतर रेखाओं 3x - 4y + 7 = 0 और 3x - 4y + 12 = 0 के बीच की दूरी ज्ञात कीजिए।",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Find the coordinates of point where line 2x + 3y = 6 meets x-axis.",
    "question_hi": "रेखा 2x + 3y = 6 और x-अक्ष के प्रतिच्छेदन बिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(3,0)", "(0,2)", "(2,0)", "(0,3)"],
    "options_hi": ["(3,0)", "(0,2)", "(2,0)", "(0,3)"],
    "answer_en": "(3,0)",
    "answer_hi": "(3,0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Find the equation of line parallel to x-axis and passing through (4,5).",
    "question_hi": "x-अक्ष के समांतर और (4,5) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["y = 5", "x = 4", "y = 4", "x = 5"],
    "options_hi": ["y = 5", "x = 4", "y = 4", "x = 5"],
    "answer_en": "y = 5",
    "answer_hi": "y = 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Find the equation of line passing through (1,2) and (3,4).",
    "question_hi": "(1,2) और (3,4) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["y = x + 1", "y = x - 1", "y = 2x", "y = 2x + 1"],
    "options_hi": ["y = x + 1", "y = x - 1", "y = 2x", "y = 2x + 1"],
    "answer_en": "y = x + 1",
    "answer_hi": "y = x + 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Find the perpendicular distance of point (2,3) from line 3x + 4y + 5 = 0.",
    "question_hi": "बिंदु (2,3) से रेखा 3x + 4y + 5 = 0 की लंबवत दूरी ज्ञात कीजिए।",
    "options_en": ["4", "5", "6", "7"],
    "options_hi": ["4", "5", "6", "7"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Find the equation of line perpendicular to 2x + 3y = 7 and passing through (1,2).",
    "question_hi": "रेखा 2x + 3y = 7 के लंबवत और (1,2) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["3x - 2y = -1", "3x - 2y = 1", "2x - 3y = -4", "2x - 3y = 4"],
    "options_hi": ["3x - 2y = -1", "3x - 2y = 1", "2x - 3y = -4", "2x - 3y = 4"],
    "answer_en": "3x - 2y = -1",
    "answer_hi": "3x - 2y = -1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Find the coordinates of foot of perpendicular from (1,2) to line 3x + 4y + 5 = 0.",
    "question_hi": "(1,2) से रेखा 3x + 4y + 5 = 0 पर डाले गए लंब के पाद के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(-1, -1)", "(-2, -2)", "(-3, -3)", "(-4, -4)"],
    "options_hi": ["(-1, -1)", "(-2, -2)", "(-3, -3)", "(-4, -4)"],
    "answer_en": "(-1, -1)",
    "answer_hi": "(-1, -1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Find the equation of line with slope -2 and y-intercept 3.",
    "question_hi": "ढाल -2 और y-अंत:खंड 3 वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["y = -2x + 3", "y = 2x + 3", "y = -2x - 3", "y = 2x - 3"],
    "options_hi": ["y = -2x + 3", "y = 2x + 3", "y = -2x - 3", "y = 2x - 3"],
    "answer_en": "y = -2x + 3",
    "answer_hi": "y = -2x + 3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Find the angle between lines 3x - y + 7 = 0 and x - 3y + 1 = 0.",
    "question_hi": "रेखाओं 3x - y + 7 = 0 और x - 3y + 1 = 0 के बीच का कोण ज्ञात कीजिए।",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "90°",
    "answer_hi": "90°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Find the distance of line 3x + 4y + 7 = 0 from origin.",
    "question_hi": "रेखा 3x + 4y + 7 = 0 की मूलबिंदु से दूरी ज्ञात कीजिए।",
    "options_en": ["7/5", "5/7", "7/√5", "√5/7"],
    "options_hi": ["7/5", "5/7", "7/√5", "√5/7"],
    "answer_en": "7/5",
    "answer_hi": "7/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Find the equation of line making intercepts 2 and 3 on x and y axes respectively.",
    "question_hi": "x और y अक्षों पर क्रमशः 2 और 3 अंत:खंड बनाने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["3x + 2y = 6", "2x + 3y = 6", "3x - 2y = 6", "2x - 3y = 6"],
    "options_hi": ["3x + 2y = 6", "2x + 3y = 6", "3x - 2y = 6", "2x - 3y = 6"],
    "answer_en": "2x + 3y = 6",
    "answer_hi": "2x + 3y = 6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Find the slope of line 4x - 3y + 7 = 0.",
    "question_hi": "रेखा 4x - 3y + 7 = 0 का ढाल ज्ञात कीजिए।",
    "options_en": ["4/3", "3/4", "-4/3", "-3/4"],
    "options_hi": ["4/3", "3/4", "-4/3", "-3/4"],
    "answer_en": "4/3",
    "answer_hi": "4/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Find the equation of line parallel to 2x + 3y = 7 and passing through (1,1).",
    "question_hi": "रेखा 2x + 3y = 7 के समांतर और (1,1) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["2x + 3y = 5", "2x + 3y = 7", "2x - 3y = 5", "3x + 2y = 5"],
    "options_hi": ["2x + 3y = 5", "2x + 3y = 7", "2x - 3y = 5", "3x + 2y = 5"],
    "answer_en": "2x + 3y = 5",
    "answer_hi": "2x + 3y = 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Find the coordinates of point where lines 2x + 3y = 7 and 3x + 2y = 8 intersect.",
    "question_hi": "रेखाओं 2x + 3y = 7 और 3x + 2y = 8 के प्रतिच्छेदन बिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(2,1)", "(1,2)", "(3,2)", "(2,3)"],
    "options_hi": ["(2,1)", "(1,2)", "(3,2)", "(2,3)"],
    "answer_en": "(2,1)",
    "answer_hi": "(2,1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Find the area of triangle formed by lines x=0, y=0 and 3x + 4y = 12.",
    "question_hi": "रेखाओं x=0, y=0 और 3x + 4y = 12 से बने त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
    "options_en": ["6", "8", "10", "12"],
    "options_hi": ["6", "8", "10", "12"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Find the equation of line passing through intersection of lines 2x+3y=7 and 3x+2y=8 and parallel to x-axis.",
    "question_hi": "रेखाओं 2x+3y=7 और 3x+2y=8 के प्रतिच्छेदन बिंदु से गुजरने वाली और x-अक्ष के समांतर रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["y = 1", "x = 2", "y = 2", "x = 1"],
    "options_hi": ["y = 1", "x = 2", "y = 2", "x = 1"],
    "answer_en": "y = 1",
    "answer_hi": "y = 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Find the distance between points (1,2) and line 3x + 4y + 5 = 0.",
    "question_hi": "बिंदु (1,2) और रेखा 3x + 4y + 5 = 0 के बीच की दूरी ज्ञात कीजिए।",
    "options_en": ["4", "5", "6", "7"],
    "options_hi": ["4", "5", "6", "7"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Find the equation of line perpendicular to x-axis and passing through (3,4).",
    "question_hi": "x-अक्ष के लंबवत और (3,4) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["x = 3", "y = 4", "x = 4", "y = 3"],
    "options_hi": ["x = 3", "y = 4", "x = 4", "y = 3"],
    "answer_en": "x = 3",
    "answer_hi": "x = 3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Find the angle which line √3x + y + 2 = 0 makes with positive direction of x-axis.",
    "question_hi": "रेखा √3x + y + 2 = 0, x-अक्ष की धनात्मक दिशा से कितना कोण बनाती है?",
    "options_en": ["120°", "150°", "135°", "90°"],
    "options_hi": ["120°", "150°", "135°", "90°"],
    "answer_en": "150°",
    "answer_hi": "150°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Find the coordinates of point equidistant from (1,2), (3,4) and (5,6).",
    "question_hi": "बिंदु (1,2), (3,4) और (5,6) से समदूरस्थ बिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(3,4)", "(4,5)", "(5,6)", "Such point does not exist"],
    "options_hi": ["(3,4)", "(4,5)", "(5,6)", "ऐसा बिंदु मौजूद नहीं है"],
    "answer_en": "Such point does not exist",
    "answer_hi": "ऐसा बिंदु मौजूद नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Find the equation of line passing through (1,2) and making equal intercepts on axes.",
    "question_hi": "(1,2) से गुजरने वाली और अक्षों पर समान अंत:खंड बनाने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["x + y = 3", "x - y = -1", "x + y = -3", "x - y = 1"],
    "options_hi": ["x + y = 3", "x - y = -1", "x + y = -3", "x - y = 1"],
    "answer_en": "x + y = 3",
    "answer_hi": "x + y = 3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Find the distance of point (3,4) from line 4x - 3y + 5 = 0.",
    "question_hi": "बिंदु (3,4) से रेखा 4x - 3y + 5 = 0 की दूरी ज्ञात कीजिए।",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Find the equation of line through (2,3) and perpendicular to line joining (1,2) and (3,4).",
    "question_hi": "(2,3) से गुजरने वाली और (1,2) तथा (3,4) को मिलाने वाली रेखा के लंबवत रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["x + y = 5", "x - y = -1", "x + y = 1", "x - y = 1"],
    "options_hi": ["x + y = 5", "x - y = -1", "x + y = 1", "x - y = 1"],
    "answer_en": "x + y = 5",
    "answer_hi": "x + y = 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Find the coordinates of point of intersection of lines 2x - y = 3 and x + 2y = 4.",
    "question_hi": "रेखाओं 2x - y = 3 और x + 2y = 4 के प्रतिच्छेदन बिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(2,1)", "(1,2)", "(3,2)", "(2,3)"],
    "options_hi": ["(2,1)", "(1,2)", "(3,2)", "(2,3)"],
    "answer_en": "(2,1)",
    "answer_hi": "(2,1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Find the equation of line with x-intercept 3 and y-intercept -4.",
    "question_hi": "x-अंत:खंड 3 और y-अंत:खंड -4 वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["4x - 3y = 12", "4x + 3y = 12", "3x - 4y = 12", "3x + 4y = 12"],
    "options_hi": ["4x - 3y = 12", "4x + 3y = 12", "3x - 4y = 12", "3x + 4y = 12"],
    "answer_en": "4x - 3y = 12",
    "answer_hi": "4x - 3y = 12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Find the perpendicular distance between parallel lines 3x + 4y = 10 and 6x + 8y = 15.",
    "question_hi": "समांतर रेखाओं 3x + 4y = 10 और 6x + 8y = 15 के बीच की लंबवत दूरी ज्ञात कीजिए।",
    "options_en": ["1/2", "1", "3/2", "2"],
    "options_hi": ["1/2", "1", "3/2", "2"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Find the equation of line passing through origin and point (3,4).",
    "question_hi": "मूलबिंदु और बिंदु (3,4) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["y = (4/3)x", "y = (3/4)x", "4x - 3y = 0", "3x - 4y = 0"],
    "options_hi": ["y = (4/3)x", "y = (3/4)x", "4x - 3y = 0", "3x - 4y = 0"],
    "answer_en": "y = (4/3)x",
    "answer_hi": "y = (4/3)x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Find the angle between lines y = √3x + 2 and y = (1/√3)x - 1.",
    "question_hi": "रेखाओं y = √3x + 2 और y = (1/√3)x - 1 के बीच का कोण ज्ञात कीजिए।",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "30°",
    "answer_hi": "30°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Find the coordinates of point where line 5x - 3y = 15 meets y-axis.",
    "question_hi": "रेखा 5x - 3y = 15 और y-अक्ष के प्रतिच्छेदन बिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(0,-5)", "(0,5)", "(3,0)", "(-3,0)"],
    "options_hi": ["(0,-5)", "(0,5)", "(3,0)", "(-3,0)"],
    "answer_en": "(0,-5)",
    "answer_hi": "(0,-5)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Find the equation of line parallel to y-axis and passing through (-2,3).",
    "question_hi": "y-अक्ष के समांतर और (-2,3) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["x = -2", "y = 3", "x = 3", "y = -2"],
    "options_hi": ["x = -2", "y = 3", "x = 3", "y = -2"],
    "answer_en": "x = -2",
    "answer_hi": "x = -2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Find the distance between lines 3x + 4y = 12 and 6x + 8y = 24.",
    "question_hi": "रेखाओं 3x + 4y = 12 और 6x + 8y = 24 के बीच की दूरी ज्ञात कीजिए।",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Find the equation of line with slope -1 and passing through (2,3).",
    "question_hi": "ढाल -1 वाली और (2,3) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["x + y = 5", "x - y = -1", "x + y = 1", "x - y = 5"],
    "options_hi": ["x + y = 5", "x - y = -1", "x + y = 1", "x - y = 5"],
    "answer_en": "x + y = 5",
    "answer_hi": "x + y = 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Find the coordinates of point where line joining (1,2) and (3,4) cuts y-axis.",
    "question_hi": "(1,2) और (3,4) को मिलाने वाली रेखा y-अक्ष को किस बिंदु पर काटती है?",
    "options_en": ["(0,1)", "(0,2)", "(0,3)", "(0,4)"],
    "options_hi": ["(0,1)", "(0,2)", "(0,3)", "(0,4)"],
    "answer_en": "(0,1)",
    "answer_hi": "(0,1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Find the equation of line perpendicular to y-axis and passing through (4,5).",
    "question_hi": "y-अक्ष के लंबवत और (4,5) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["y = 5", "x = 4", "y = 4", "x = 5"],
    "options_hi": ["y = 5", "x = 4", "y = 4", "x = 5"],
    "answer_en": "x = 4",
    "answer_hi": "x = 4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Find the distance of point (-2,3) from line 3x - 4y + 7 = 0.",
    "question_hi": "बिंदु (-2,3) से रेखा 3x - 4y + 7 = 0 की दूरी ज्ञात कीजिए।",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Find the equation of line through intersection of x + y = 3 and 2x - y = 0, and parallel to 3x + 4y = 7.",
    "question_hi": "रेखाओं x + y = 3 और 2x - y = 0 के प्रतिच्छेदन बिंदु से गुजरने वाली और 3x + 4y = 7 के समांतर रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["3x + 4y = 9", "3x + 4y = 10", "3x + 4y = 11", "3x + 4y = 12"],
    "options_hi": ["3x + 4y = 9", "3x + 4y = 10", "3x + 4y = 11", "3x + 4y = 12"],
    "answer_en": "3x + 4y = 9",
    "answer_hi": "3x + 4y = 9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Find the coordinates of point where line 2x - 3y = 6 meets x-axis.",
    "question_hi": "रेखा 2x - 3y = 6 और x-अक्ष के प्रतिच्छेदन बिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(3,0)", "(-3,0)", "(0,2)", "(0,-2)"],
    "options_hi": ["(3,0)", "(-3,0)", "(0,2)", "(0,-2)"],
    "answer_en": "(3,0)",
    "answer_hi": "(3,0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Find the equation of line passing through (0,0) and perpendicular to 2x + 3y = 7.",
    "question_hi": "(0,0) से गुजरने वाली और 2x + 3y = 7 के लंबवत रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["3x - 2y = 0", "2x - 3y = 0", "3x + 2y = 0", "2x + 3y = 0"],
    "options_hi": ["3x - 2y = 0", "2x - 3y = 0", "3x + 2y = 0", "2x + 3y = 0"],
    "answer_en": "3x - 2y = 0",
    "answer_hi": "3x - 2y = 0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Find the distance between point (1,1) and line 4x - 3y + 5 = 0.",
    "question_hi": "बिंदु (1,1) और रेखा 4x - 3y + 5 = 0 के बीच की दूरी ज्ञात कीजिए।",
    "options_en": ["6/5", "5/6", "4/5", "5/4"],
    "options_hi": ["6/5", "5/6", "4/5", "5/4"],
    "answer_en": "6/5",
    "answer_hi": "6/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Find the equation of line with y-intercept -3 and slope 2.",
    "question_hi": "y-अंत:खंड -3 और ढाल 2 वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["y = 2x - 3", "y = 2x + 3", "y = -2x - 3", "y = -2x + 3"],
    "options_hi": ["y = 2x - 3", "y = 2x + 3", "y = -2x - 3", "y = -2x + 3"],
    "answer_en": "y = 2x - 3",
    "answer_hi": "y = 2x - 3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Find the coordinates of point where line joining (2,3) and (4,5) cuts x-axis.",
    "question_hi": "(2,3) और (4,5) को मिलाने वाली रेखा x-अक्ष को किस बिंदु पर काटती है?",
    "options_en": ["(1,0)", "(-1,0)", "(0,1)", "(0,-1)"],
    "options_hi": ["(1,0)", "(-1,0)", "(0,1)", "(0,-1)"],
    "answer_en": "(-1,0)",
    "answer_hi": "(-1,0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Find the equation of line passing through (1,2) and parallel to line joining (3,4) and (5,6).",
    "question_hi": "(1,2) से गुजरने वाली और (3,4) तथा (5,6) को मिलाने वाली रेखा के समांतर रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["y = x + 1", "y = x - 1", "y = 2x", "y = 2x - 1"],
    "options_hi": ["y = x + 1", "y = x - 1", "y = 2x", "y = 2x - 1"],
    "answer_en": "y = x + 1",
    "answer_hi": "y = x + 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Find the angle between lines x + √3y = 1 and √3x - y = 2.",
    "question_hi": "रेखाओं x + √3y = 1 और √3x - y = 2 के बीच का कोण ज्ञात कीजिए।",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "90°",
    "answer_hi": "90°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Find the distance of line 5x - 12y + 13 = 0 from origin.",
    "question_hi": "रेखा 5x - 12y + 13 = 0 की मूलबिंदु से दूरी ज्ञात कीजिए।",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Find the equation of line with intercepts equal in magnitude but opposite in sign on axes.",
    "question_hi": "अक्षों पर परिमाण में समान लेकिन चिह्न में विपरीत अंत:खंड बनाने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["x - y = a", "x + y = a", "x - y = 0", "x + y = 0"],
    "options_hi": ["x - y = a", "x + y = a", "x - y = 0", "x + y = 0"],
    "answer_en": "x - y = a",
    "answer_hi": "x - y = a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Find the coordinates of point where line 4x + 3y = 12 meets y-axis.",
    "question_hi": "रेखा 4x + 3y = 12 और y-अक्ष के प्रतिच्छेदन बिंदु के निर्देशांक ज्ञात कीजिए।",
    "options_en": ["(0,4)", "(0,3)", "(3,0)", "(4,0)"],
    "options_hi": ["(0,4)", "(0,3)", "(3,0)", "(4,0)"],
    "answer_en": "(0,4)",
    "answer_hi": "(0,4)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Find the equation of line parallel to 3x - 4y = 7 and passing through (2,-1).",
    "question_hi": "रेखा 3x - 4y = 7 के समांतर और (2,-1) से गुजरने वाली रेखा का समीकरण ज्ञात कीजिए।",
    "options_en": ["3x - 4y = 10", "3x - 4y = -10", "3x + 4y = 10", "3x + 4y = -10"],
    "options_hi": ["3x - 4y = 10", "3x - 4y = -10", "3x + 4y = 10", "3x + 4y = -10"],
    "answer_en": "3x - 4y = 10",
    "answer_hi": "3x - 4y = 10",
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