const questions=[
    {
      "num": 1,
      "question_en": "Find the distance between the points (2,3) and (6,6).",
      "question_hi": "बिंदुओं (2,3) और (6,6) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["4", "5", "6", "7"],
      "options_hi": ["4", "5", "6", "7"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "If the point P(x, y) is equidistant from A(5,1) and B(1,5), then find the relation between x and y.",
      "question_hi": "यदि बिंदु P(x, y), A(5,1) और B(1,5) से समदूरस्थ है, तो x और y के बीच संबंध ज्ञात कीजिए।",
      "options_en": ["x = y", "x + y = 0", "x - y = 0", "x + y = 6"],
      "options_hi": ["x = y", "x + y = 0", "x - y = 0", "x + y = 6"],
      "answer_en": "x = y",
      "answer_hi": "x = y",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Find the coordinates of the point which divides the line segment joining the points (4,5) and (7,8) in the ratio 2:1 internally.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (4,5) और (7,8) को जोड़ने वाले रेखाखंड को 2:1 के अनुपात में आंतरिक रूप से विभाजित करता है।",
      "options_en": ["(6,7)", "(5,6)", "(7,6)", "(6,5)"],
      "options_hi": ["(6,7)", "(5,6)", "(7,6)", "(6,5)"],
      "answer_en": "(6,7)",
      "answer_hi": "(6,7)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "If A(1,2), B(4,3) and C(6,6) are the vertices of a triangle, then find the length of the median from A to BC.",
      "question_hi": "यदि A(1,2), B(4,3) और C(6,6) एक त्रिभुज के शीर्ष हैं, तो A से BC पर माध्यिका की लंबाई ज्ञात कीजिए।",
      "options_en": ["√13", "√10", "√5", "√2"],
      "options_hi": ["√13", "√10", "√5", "√2"],
      "answer_en": "√13",
      "answer_hi": "√13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Find the area of the triangle whose vertices are (0,0), (4,0) and (0,3).",
      "question_hi": "उस त्रिभुज का क्षेत्रफल ज्ञात कीजिए जिसके शीर्ष (0,0), (4,0) और (0,3) हैं।",
      "options_en": ["6", "12", "3", "8"],
      "options_hi": ["6", "12", "3", "8"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Find the coordinates of the centroid of a triangle with vertices (2,3), (4,5) and (6,7).",
      "question_hi": "शीर्षों (2,3), (4,5) और (6,7) वाले त्रिभुज के केन्द्रक के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(4,5)", "(5,4)", "(3,4)", "(4,3)"],
      "options_hi": ["(4,5)", "(5,4)", "(3,4)", "(4,3)"],
      "answer_en": "(4,5)",
      "answer_hi": "(4,5)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "The distance between the points (a, b) and (-a, -b) is:",
      "question_hi": "बिंदुओं (a, b) और (-a, -b) के बीच की दूरी है:",
      "options_en": ["2√(a²+b²)", "√(a²+b²)", "a+b", "a-b"],
      "options_hi": ["2√(a²+b²)", "√(a²+b²)", "a+b", "a-b"],
      "answer_en": "2√(a²+b²)",
      "answer_hi": "2√(a²+b²)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Find the point on the x-axis which is equidistant from (2,3) and (4,5).",
      "question_hi": "x-अक्ष पर वह बिंदु ज्ञात कीजिए जो (2,3) और (4,5) से समदूरस्थ है।",
      "options_en": ["(1,0)", "(3,0)", "(5,0)", "(7,0)"],
      "options_hi": ["(1,0)", "(3,0)", "(5,0)", "(7,0)"],
      "answer_en": "(3,0)",
      "answer_hi": "(3,0)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "If the points A(2,3), B(4,k) and C(6,7) are collinear, then find k.",
      "question_hi": "यदि बिंदु A(2,3), B(4,k) और C(6,7) संरेख हैं, तो k ज्ञात कीजिए।",
      "options_en": ["5", "6", "7", "8"],
      "options_hi": ["5", "6", "7", "8"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Find the ratio in which the line segment joining the points (1,2) and (4,5) is divided by the x-axis.",
      "question_hi": "वह अनुपात ज्ञात कीजिए जिसमें x-अक्ष बिंदुओं (1,2) और (4,5) को जोड़ने वाले रेखाखंड को विभाजित करता है।",
      "options_en": ["2:1", "1:2", "2:3", "3:2"],
      "options_hi": ["2:1", "1:2", "2:3", "3:2"],
      "answer_en": "2:1",
      "answer_hi": "2:1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Find the area of the quadrilateral with vertices (1,2), (3,4), (5,6) and (7,8).",
      "question_hi": "शीर्षों (1,2), (3,4), (5,6) और (7,8) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "4", "8", "12"],
      "options_hi": ["0", "4", "8", "12"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "If the midpoint of the line segment joining A(3,4) and B(k,6) is (4,5), find k.",
      "question_hi": "यदि A(3,4) और B(k,6) को जोड़ने वाले रेखाखंड का मध्यबिंदु (4,5) है, तो k ज्ञात कीजिए।",
      "options_en": ["5", "6", "7", "8"],
      "options_hi": ["5", "6", "7", "8"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Find the distance of the point (3,4) from the origin.",
      "question_hi": "बिंदु (3,4) की मूलबिंदु से दूरी ज्ञात कीजिए।",
      "options_en": ["5", "6", "7", "8"],
      "options_hi": ["5", "6", "7", "8"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Find the coordinates of the point which divides the line segment joining (-1,2) and (3,4) externally in the ratio 2:3.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (-1,2) और (3,4) को जोड़ने वाले रेखाखंड को 2:3 के अनुपात में बाह्य रूप से विभाजित करता है।",
      "options_en": ["(-9, -2)", "(-5, 0)", "(-7, -1)", "(-3, 1)"],
      "options_hi": ["(-9, -2)", "(-5, 0)", "(-7, -1)", "(-3, 1)"],
      "answer_en": "(-9, -2)",
      "answer_hi": "(-9, -2)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "The vertices of a triangle are (0,0), (3,0) and (0,4). Find its circumradius.",
      "question_hi": "एक त्रिभुज के शीर्ष (0,0), (3,0) और (0,4) हैं। इसकी परित्रिज्या ज्ञात कीजिए।",
      "options_en": ["2.5", "3", "4", "5"],
      "options_hi": ["2.5", "3", "4", "5"],
      "answer_en": "2.5",
      "answer_hi": "2.5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Find the area of the triangle formed by the points (2,3), (-1,0) and (2,-4).",
      "question_hi": "बिंदुओं (2,3), (-1,0) और (2,-4) द्वारा बने त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["10.5", "12.5", "15", "20"],
      "options_hi": ["10.5", "12.5", "15", "20"],
      "answer_en": "10.5",
      "answer_hi": "10.5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "If the distance between the points (4, p) and (1, 0) is 5, then find p.",
      "question_hi": "यदि बिंदुओं (4, p) और (1, 0) के बीच की दूरी 5 है, तो p ज्ञात कीजिए।",
      "options_en": ["±4", "±3", "±2", "±1"],
      "options_hi": ["±4", "±3", "±2", "±1"],
      "answer_en": "±4",
      "answer_hi": "±4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Find the ratio in which the y-axis divides the line segment joining the points (3,5) and (-2,7).",
      "question_hi": "वह अनुपात ज्ञात कीजिए जिसमें y-अक्ष बिंदुओं (3,5) और (-2,7) को जोड़ने वाले रेखाखंड को विभाजित करता है।",
      "options_en": ["3:2", "2:3", "3:5", "5:3"],
      "options_hi": ["3:2", "2:3", "3:5", "5:3"],
      "answer_en": "3:2",
      "answer_hi": "3:2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "The coordinates of the centroid of a triangle are (2,3) and two vertices are (4,5) and (6,7). Find the third vertex.",
      "question_hi": "एक त्रिभुज के केन्द्रक के निर्देशांक (2,3) हैं और दो शीर्ष (4,5) और (6,7) हैं। तीसरा शीर्ष ज्ञात कीजिए।",
      "options_en": ["(-4, -3)", "(-2, -1)", "(0, 1)", "(1, 0)"],
      "options_hi": ["(-4, -3)", "(-2, -1)", "(0, 1)", "(1, 0)"],
      "answer_en": "(-4, -3)",
      "answer_hi": "(-4, -3)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "Find the point on the y-axis which is equidistant from the points (3,4) and (5,6).",
      "question_hi": "y-अक्ष पर वह बिंदु ज्ञात कीजिए जो बिंदुओं (3,4) और (5,6) से समदूरस्थ है।",
      "options_en": ["(0,7)", "(0,8)", "(0,9)", "(0,10)"],
      "options_hi": ["(0,7)", "(0,8)", "(0,9)", "(0,10)"],
      "answer_en": "(0,9)",
      "answer_hi": "(0,9)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "If the points (a, 0), (0, b) and (1, 1) are collinear, then find 1/a + 1/b.",
      "question_hi": "यदि बिंदु (a, 0), (0, b) और (1, 1) संरेख हैं, तो 1/a + 1/b ज्ञात कीजिए।",
      "options_en": ["0", "1", "-1", "2"],
      "options_hi": ["0", "1", "-1", "2"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "Find the area of the triangle formed by the points (1,2), (3,4) and (5,6).",
      "question_hi": "बिंदुओं (1,2), (3,4) और (5,6) द्वारा बने त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "Find the distance between the points (a cosθ, 0) and (0, a sinθ).",
      "question_hi": "बिंदुओं (a cosθ, 0) और (0, a sinθ) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["a", "2a", "a/2", "√a"],
      "options_hi": ["a", "2a", "a/2", "√a"],
      "answer_en": "a",
      "answer_hi": "a",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "Find the ratio in which the point (2,3) divides the line segment joining (1,2) and (4,5).",
      "question_hi": "वह अनुपात ज्ञात कीजिए जिसमें बिंदु (2,3), बिंदुओं (1,2) और (4,5) को जोड़ने वाले रेखाखंड को विभाजित करता है।",
      "options_en": ["1:2", "2:1", "1:3", "3:1"],
      "options_hi": ["1:2", "2:1", "1:3", "3:1"],
      "answer_en": "1:2",
      "answer_hi": "1:2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "If the points A(2,3), B(4,5) and C(6,7) are collinear, then find the ratio in which B divides AC.",
      "question_hi": "यदि बिंदु A(2,3), B(4,5) और C(6,7) संरेख हैं, तो वह अनुपात ज्ञात कीजिए जिसमें B, AC को विभाजित करता है।",
      "options_en": ["1:1", "2:1", "1:2", "3:2"],
      "options_hi": ["1:1", "2:1", "1:2", "3:2"],
      "answer_en": "1:1",
      "answer_hi": "1:1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "Find the coordinates of the point which is the reflection of the point (3,4) in the x-axis.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदु (3,4) का x-अक्ष में प्रतिबिंब है।",
      "options_en": ["(3, -4)", "(-3, 4)", "(-3, -4)", "(4, 3)"],
      "options_hi": ["(3, -4)", "(-3, 4)", "(-3, -4)", "(4, 3)"],
      "answer_en": "(3, -4)",
      "answer_hi": "(3, -4)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "Find the distance between the points (a + b, b + a) and (a - b, b - a).",
      "question_hi": "बिंदुओं (a + b, b + a) और (a - b, b - a) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["2√(a²+b²)", "√(a²+b²)", "2a", "2b"],
      "options_hi": ["2√(a²+b²)", "√(a²+b²)", "2a", "2b"],
      "answer_en": "2√(a²+b²)",
      "answer_hi": "2√(a²+b²)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "If the points (2,3), (4,5) and (x, 7) are collinear, find x.",
      "question_hi": "यदि बिंदु (2,3), (4,5) और (x, 7) संरेख हैं, तो x ज्ञात कीजिए।",
      "options_en": ["6", "7", "8", "9"],
      "options_hi": ["6", "7", "8", "9"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "Find the coordinates of the point which divides the line segment joining (2,3) and (4,5) in the ratio 1:2 externally.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (2,3) और (4,5) को जोड़ने वाले रेखाखंड को 1:2 के अनुपात में बाह्य रूप से विभाजित करता है।",
      "options_en": ["(0,1)", "(1,2)", "(2,3)", "(3,4)"],
      "options_hi": ["(0,1)", "(1,2)", "(2,3)", "(3,4)"],
      "answer_en": "(0,1)",
      "answer_hi": "(0,1)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "Find the area of the triangle with vertices (a, b+c), (b, c+a) and (c, a+b).",
      "question_hi": "शीर्षों (a, b+c), (b, c+a) और (c, a+b) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "a+b+c", "(a+b+c)/2", "1"],
      "options_hi": ["0", "a+b+c", "(a+b+c)/2", "1"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_en": "Find the length of the median from A to BC in triangle ABC with vertices A(1,2), B(3,4) and C(5,6).",
      "question_hi": "त्रिभुज ABC में A से BC पर माध्यिका की लंबाई ज्ञात कीजिए, जिसके शीर्ष A(1,2), B(3,4) और C(5,6) हैं।",
      "options_en": ["√5", "√10", "√13", "√17"],
      "options_hi": ["√5", "√10", "√13", "√17"],
      "answer_en": "√10",
      "answer_hi": "√10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_en": "If the points (1,2), (3,4) and (x, 6) are vertices of a parallelogram, find x.",
      "question_hi": "यदि बिंदु (1,2), (3,4) और (x, 6) एक समांतर चतुर्भुज के शीर्ष हैं, तो x ज्ञात कीजिए।",
      "options_en": ["5", "6", "7", "8"],
      "options_hi": ["5", "6", "7", "8"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_en": "Find the distance between the points (sinθ, cosθ) and (cosθ, sinθ).",
      "question_hi": "बिंदुओं (sinθ, cosθ) और (cosθ, sinθ) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["√2|sinθ - cosθ|", "√2|sinθ + cosθ|", "|sinθ - cosθ|", "1"],
      "options_hi": ["√2|sinθ - cosθ|", "√2|sinθ + cosθ|", "|sinθ - cosθ|", "1"],
      "answer_en": "√2|sinθ - cosθ|",
      "answer_hi": "√2|sinθ - cosθ|",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_en": "Find the coordinates of the point which is the midpoint of the line segment joining (a, b) and (-a, -b).",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (a, b) और (-a, -b) को जोड़ने वाले रेखाखंड का मध्यबिंदु है।",
      "options_en": ["(0,0)", "(a, b)", "(-a, -b)", "(a/2, b/2)"],
      "options_hi": ["(0,0)", "(a, b)", "(-a, -b)", "(a/2, b/2)"],
      "answer_en": "(0,0)",
      "answer_hi": "(0,0)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_en": "Find the area of the quadrilateral with vertices (1,1), (3,4), (5,7) and (7,10).",
      "question_hi": "शीर्षों (1,1), (3,4), (5,7) और (7,10) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "6", "12", "18"],
      "options_hi": ["0", "6", "12", "18"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_en": "If the points (a, b), (c, d) and (a-c, b-d) are collinear, then find the relation between a, b, c, d.",
      "question_hi": "यदि बिंदु (a, b), (c, d) और (a-c, b-d) संरेख हैं, तो a, b, c, d के बीच संबंध ज्ञात कीजिए।",
      "options_en": ["ad = bc", "ab = cd", "a/b = c/d", "a+c = b+d"],
      "options_hi": ["ad = bc", "ab = cd", "a/b = c/d", "a+c = b+d"],
      "answer_en": "ad = bc",
      "answer_hi": "ad = bc",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_en": "Find the distance of the point (3,4) from the line 3x + 4y = 10.",
      "question_hi": "बिंदु (3,4) की रेखा 3x + 4y = 10 से दूरी ज्ञात कीजिए।",
      "options_en": ["3", "4", "5", "6"],
      "options_hi": ["3", "4", "5", "6"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_en": "Find the coordinates of the point which divides the line segment joining (-2,3) and (4,5) in the ratio 3:4 internally.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (-2,3) और (4,5) को जोड़ने वाले रेखाखंड को 3:4 के अनुपात में आंतरिक रूप से विभाजित करता है।",
      "options_en": ["(2/7, 27/7)", "(10/7, 29/7)", "(8/7, 31/7)", "(6/7, 33/7)"],
      "options_hi": ["(2/7, 27/7)", "(10/7, 29/7)", "(8/7, 31/7)", "(6/7, 33/7)"],
      "answer_en": "(2/7, 27/7)",
      "answer_hi": "(2/7, 27/7)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_en": "Find the area of the triangle with vertices (0,0), (a, 0) and (0, b).",
      "question_hi": "शीर्षों (0,0), (a, 0) और (0, b) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["ab/2", "ab", "a+b", "2ab"],
      "options_hi": ["ab/2", "ab", "a+b", "2ab"],
      "answer_en": "ab/2",
      "answer_hi": "ab/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_en": "If the distance between the points (x, 2) and (3, 4) is 2√2, then find x.",
      "question_hi": "यदि बिंदुओं (x, 2) और (3, 4) के बीच की दूरी 2√2 है, तो x ज्ञात कीजिए।",
      "options_en": ["1 or 5", "2 or 4", "3 or 5", "0 or 6"],
      "options_hi": ["1 या 5", "2 या 4", "3 या 5", "0 या 6"],
      "answer_en": "1 or 5",
      "answer_hi": "1 या 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_en": "Find the coordinates of the centroid of the triangle with vertices (0,6), (8,12) and (6,0).",
      "question_hi": "शीर्षों (0,6), (8,12) और (6,0) वाले त्रिभुज के केन्द्रक के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(14/3, 6)", "(16/3, 6)", "(6, 6)", "(8, 6)"],
      "options_hi": ["(14/3, 6)", "(16/3, 6)", "(6, 6)", "(8, 6)"],
      "answer_en": "(14/3, 6)",
      "answer_hi": "(14/3, 6)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_en": "Find the point on the x-axis which is equidistant from (1,2) and (3,4).",
      "question_hi": "x-अक्ष पर वह बिंदु ज्ञात कीजिए जो (1,2) और (3,4) से समदूरस्थ है।",
      "options_en": ["(2,0)", "(3,0)", "(4,0)", "(5,0)"],
      "options_hi": ["(2,0)", "(3,0)", "(4,0)", "(5,0)"],
      "answer_en": "(5,0)",
      "answer_hi": "(5,0)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_en": "If the points (a, 0), (0, b) and (2, 3) are collinear, find a and b relation.",
      "question_hi": "यदि बिंदु (a, 0), (0, b) और (2, 3) संरेख हैं, तो a और b का संबंध ज्ञात कीजिए।",
      "options_en": ["3a + 2b = ab", "2a + 3b = ab", "a + b = ab", "a - b = ab"],
      "options_hi": ["3a + 2b = ab", "2a + 3b = ab", "a + b = ab", "a - b = ab"],
      "answer_en": "3a + 2b = ab",
      "answer_hi": "3a + 2b = ab",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_en": "Find the area of the triangle with vertices (2,3), (4,5) and (6,7).",
      "question_hi": "शीर्षों (2,3), (4,5) और (6,7) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_en": "Find the length of the altitude from A to BC in triangle ABC with vertices A(1,2), B(3,4) and C(5,6).",
      "question_hi": "त्रिभुज ABC में A से BC पर शीर्षलंब की लंबाई ज्ञात कीजिए, जिसके शीर्ष A(1,2), B(3,4) और C(5,6) हैं।",
      "options_en": ["0", "√2", "√5", "√10"],
      "options_hi": ["0", "√2", "√5", "√10"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_en": "Find the distance between the points (a cosα, a sinα) and (a cosβ, a sinβ).",
      "question_hi": "बिंदुओं (a cosα, a sinα) और (a cosβ, a sinβ) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["2a sin((α-β)/2)", "2a cos((α-β)/2)", "a|α-β|", "a√2"],
      "options_hi": ["2a sin((α-β)/2)", "2a cos((α-β)/2)", "a|α-β|", "a√2"],
      "answer_en": "2a sin((α-β)/2)",
      "answer_hi": "2a sin((α-β)/2)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_en": "Find the ratio in which the point (3,4) divides the line segment joining (1,2) and (6,7).",
      "question_hi": "वह अनुपात ज्ञात कीजिए जिसमें बिंदु (3,4), बिंदुओं (1,2) और (6,7) को जोड़ने वाले रेखाखंड को विभाजित करता है।",
      "options_en": ["2:3", "3:2", "1:4", "4:1"],
      "options_hi": ["2:3", "3:2", "1:4", "4:1"],
      "answer_en": "2:3",
      "answer_hi": "2:3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_en": "If the points (1,2), (3,4) and (x, y) are collinear, then find the relation between x and y.",
      "question_hi": "यदि बिंदु (1,2), (3,4) और (x, y) संरेख हैं, तो x और y के बीच संबंध ज्ञात कीजिए।",
      "options_en": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "options_hi": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "answer_en": "y = x + 1",
      "answer_hi": "y = x + 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_en": "Find the coordinates of the point which is the reflection of the point (2,3) in the y-axis.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदु (2,3) का y-अक्ष में प्रतिबिंब है।",
      "options_en": ["(-2, 3)", "(2, -3)", "(-2, -3)", "(3, 2)"],
      "options_hi": ["(-2, 3)", "(2, -3)", "(-2, -3)", "(3, 2)"],
      "answer_en": "(-2, 3)",
      "answer_hi": "(-2, 3)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_en": "Find the area of the quadrilateral with vertices (1,1), (2,3), (3,5) and (4,7).",
      "question_hi": "शीर्षों (1,1), (2,3), (3,5) और (4,7) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "2", "4", "6"],
      "options_hi": ["0", "2", "4", "6"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 51,
      "question_en": "If the points (2,3), (4,5) and (6,7) are vertices of a triangle, find its area.",
      "question_hi": "यदि बिंदु (2,3), (4,5) और (6,7) एक त्रिभुज के शीर्ष हैं, तो इसका क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 52,
      "question_en": "Find the distance between the points (a + b, a - b) and (a - b, a + b).",
      "question_hi": "बिंदुओं (a + b, a - b) और (a - b, a + b) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["2√2 b", "2√2 a", "2√(a²+b²)", "2√(ab)"],
      "options_hi": ["2√2 b", "2√2 a", "2√(a²+b²)", "2√(ab)"],
      "answer_en": "2√2 b",
      "answer_hi": "2√2 b",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 53,
      "question_en": "Find the coordinates of the point which divides the line segment joining (1,2) and (3,4) in the ratio 3:2 externally.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (1,2) और (3,4) को जोड़ने वाले रेखाखंड को 3:2 के अनुपात में बाह्य रूप से विभाजित करता है।",
      "options_en": ["(7, 8)", "(5, 6)", "(3, 4)", "(1, 2)"],
      "options_hi": ["(7, 8)", "(5, 6)", "(3, 4)", "(1, 2)"],
      "answer_en": "(7, 8)",
      "answer_hi": "(7, 8)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 54,
      "question_en": "Find the area of the triangle with vertices (a, a²), (b, b²) and (c, c²).",
      "question_hi": "शीर्षों (a, a²), (b, b²) और (c, c²) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["(1/2)|(a-b)(b-c)(c-a)|", "|(a-b)(b-c)(c-a)|", "0", "a+b+c"],
      "options_hi": ["(1/2)|(a-b)(b-c)(c-a)|", "|(a-b)(b-c)(c-a)|", "0", "a+b+c"],
      "answer_en": "(1/2)|(a-b)(b-c)(c-a)|",
      "answer_hi": "(1/2)|(a-b)(b-c)(c-a)|",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 55,
      "question_en": "If the points (a, b), (c, d) and (a+c, b+d) are collinear, find the relation.",
      "question_hi": "यदि बिंदु (a, b), (c, d) और (a+c, b+d) संरेख हैं, तो संबंध ज्ञात कीजिए।",
      "options_en": ["ad = bc", "ab = cd", "a = c, b = d", "a+b = c+d"],
      "options_hi": ["ad = bc", "ab = cd", "a = c, b = d", "a+b = c+d"],
      "answer_en": "ad = bc",
      "answer_hi": "ad = bc",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 56,
      "question_en": "Find the distance of the point (2,3) from the line 4x + 3y = 10.",
      "question_hi": "बिंदु (2,3) की रेखा 4x + 3y = 10 से दूरी ज्ञात कीजिए।",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 57,
      "question_en": "Find the coordinates of the point which is the midpoint of the line segment joining (3,5) and (7,9).",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (3,5) और (7,9) को जोड़ने वाले रेखाखंड का मध्यबिंदु है।",
      "options_en": ["(5,7)", "(6,8)", "(4,6)", "(8,10)"],
      "options_hi": ["(5,7)", "(6,8)", "(4,6)", "(8,10)"],
      "answer_en": "(5,7)",
      "answer_hi": "(5,7)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 58,
      "question_en": "Find the area of the triangle with vertices (0,0), (3,4) and (5,2).",
      "question_hi": "शीर्षों (0,0), (3,4) और (5,2) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["7", "8", "9", "10"],
      "options_hi": ["7", "8", "9", "10"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 59,
      "question_en": "If the points (2,3), (4,5) and (6,7) are collinear, then find the value of the area.",
      "question_hi": "यदि बिंदु (2,3), (4,5) और (6,7) संरेख हैं, तो क्षेत्रफल का मान ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 60,
      "question_en": "Find the distance between the points (2,3) and (5,7).",
      "question_hi": "बिंदुओं (2,3) और (5,7) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["5", "6", "7", "8"],
      "options_hi": ["5", "6", "7", "8"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 61,
      "question_en": "Find the coordinates of the point which divides the line segment joining (1,2) and (3,4) in the ratio 2:3 internally.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (1,2) और (3,4) को जोड़ने वाले रेखाखंड को 2:3 के अनुपात में आंतरिक रूप से विभाजित करता है।",
      "options_en": ["(7/5, 12/5)", "(9/5, 14/5)", "(11/5, 16/5)", "(13/5, 18/5)"],
      "options_hi": ["(7/5, 12/5)", "(9/5, 14/5)", "(11/5, 16/5)", "(13/5, 18/5)"],
      "answer_en": "(7/5, 12/5)",
      "answer_hi": "(7/5, 12/5)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 62,
      "question_en": "Find the area of the quadrilateral with vertices (0,0), (4,0), (4,3) and (0,3).",
      "question_hi": "शीर्षों (0,0), (4,0), (4,3) और (0,3) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["12", "15", "18", "20"],
      "options_hi": ["12", "15", "18", "20"],
      "answer_en": "12",
      "answer_hi": "12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 63,
      "question_en": "If the distance between the points (2,3) and (x, 5) is √13, find x.",
      "question_hi": "यदि बिंदुओं (2,3) और (x, 5) के बीच की दूरी √13 है, तो x ज्ञात कीजिए।",
      "options_en": ["1 or 3", "2 or 4", "3 or 5", "4 or 6"],
      "options_hi": ["1 या 3", "2 या 4", "3 या 5", "4 या 6"],
      "answer_en": "1 or 3",
      "answer_hi": "1 या 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 64,
      "question_en": "Find the coordinates of the centroid of the triangle with vertices (1,2), (3,4) and (5,6).",
      "question_hi": "शीर्षों (1,2), (3,4) और (5,6) वाले त्रिभुज के केन्द्रक के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(3,4)", "(4,5)", "(5,6)", "(6,7)"],
      "options_hi": ["(3,4)", "(4,5)", "(5,6)", "(6,7)"],
      "answer_en": "(3,4)",
      "answer_hi": "(3,4)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 65,
      "question_en": "Find the point on the y-axis which is equidistant from (2,3) and (4,5).",
      "question_hi": "y-अक्ष पर वह बिंदु ज्ञात कीजिए जो (2,3) और (4,5) से समदूरस्थ है।",
      "options_en": ["(0,7)", "(0,8)", "(0,9)", "(0,10)"],
      "options_hi": ["(0,7)", "(0,8)", "(0,9)", "(0,10)"],
      "answer_en": "(0,7)",
      "answer_hi": "(0,7)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 66,
      "question_en": "If the points (a, 0), (0, b) and (1, 1) are collinear, then find 1/a + 1/b.",
      "question_hi": "यदि बिंदु (a, 0), (0, b) और (1, 1) संरेख हैं, तो 1/a + 1/b ज्ञात कीजिए।",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 67,
      "question_en": "Find the area of the triangle with vertices (2,3), (4,5) and (6,7).",
      "question_hi": "शीर्षों (2,3), (4,5) और (6,7) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 68,
      "question_en": "Find the distance between the points (a, b) and (b, a).",
      "question_hi": "बिंदुओं (a, b) और (b, a) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["√2|a-b|", "|a-b|", "√(a²+b²)", "a+b"],
      "options_hi": ["√2|a-b|", "|a-b|", "√(a²+b²)", "a+b"],
      "answer_en": "√2|a-b|",
      "answer_hi": "√2|a-b|",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 69,
      "question_en": "Find the coordinates of the point which divides the line segment joining (2,3) and (4,5) in the ratio 3:2 externally.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (2,3) और (4,5) को जोड़ने वाले रेखाखंड को 3:2 के अनुपात में बाह्य रूप से विभाजित करता है।",
      "options_en": ["(8, 9)", "(6, 7)", "(4, 5)", "(2, 3)"],
      "options_hi": ["(8, 9)", "(6, 7)", "(4, 5)", "(2, 3)"],
      "answer_en": "(8, 9)",
      "answer_hi": "(8, 9)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 70,
      "question_en": "Find the area of the triangle with vertices (a, b+c), (b, c+a) and (c, a+b).",
      "question_hi": "शीर्षों (a, b+c), (b, c+a) और (c, a+b) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "a+b+c", "(a+b+c)/2", "1"],
      "options_hi": ["0", "a+b+c", "(a+b+c)/2", "1"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 71,
      "question_en": "If the points (1,2), (3,4) and (x, y) are collinear, then find the relation between x and y.",
      "question_hi": "यदि बिंदु (1,2), (3,4) और (x, y) संरेख हैं, तो x और y के बीच संबंध ज्ञात कीजिए।",
      "options_en": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "options_hi": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "answer_en": "y = x + 1",
      "answer_hi": "y = x + 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 72,
      "question_en": "Find the distance of the point (3,4) from the line 4x + 3y = 25.",
      "question_hi": "बिंदु (3,4) की रेखा 4x + 3y = 25 से दूरी ज्ञात कीजिए।",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 73,
      "question_en": "Find the coordinates of the point which is the midpoint of the line segment joining (5,6) and (9,10).",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (5,6) और (9,10) को जोड़ने वाले रेखाखंड का मध्यबिंदु है।",
      "options_en": ["(7,8)", "(8,9)", "(6,7)", "(9,10)"],
      "options_hi": ["(7,8)", "(8,9)", "(6,7)", "(9,10)"],
      "answer_en": "(7,8)",
      "answer_hi": "(7,8)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 74,
      "question_en": "Find the area of the triangle with vertices (1,2), (3,4) and (5,6).",
      "question_hi": "शीर्षों (1,2), (3,4) और (5,6) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 75,
      "question_en": "If the points (2,3), (4,5) and (6,7) are collinear, then find the value of the area.",
      "question_hi": "यदि बिंदु (2,3), (4,5) और (6,7) संरेख हैं, तो क्षेत्रफल का मान ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 76,
      "question_en": "Find the distance between the points (3,4) and (7,8).",
      "question_hi": "बिंदुओं (3,4) और (7,8) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["4√2", "5", "6", "7"],
      "options_hi": ["4√2", "5", "6", "7"],
      "answer_en": "4√2",
      "answer_hi": "4√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 77,
      "question_en": "Find the coordinates of the point which divides the line segment joining (2,3) and (4,5) in the ratio 1:3 internally.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (2,3) और (4,5) को जोड़ने वाले रेखाखंड को 1:3 के अनुपात में आंतरिक रूप से विभाजित करता है।",
      "options_en": ["(5/2, 7/2)", "(7/2, 9/2)", "(9/2, 11/2)", "(11/2, 13/2)"],
      "options_hi": ["(5/2, 7/2)", "(7/2, 9/2)", "(9/2, 11/2)", "(11/2, 13/2)"],
      "answer_en": "(5/2, 7/2)",
      "answer_hi": "(5/2, 7/2)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 78,
      "question_en": "Find the area of the quadrilateral with vertices (0,0), (6,0), (6,4) and (0,4).",
      "question_hi": "शीर्षों (0,0), (6,0), (6,4) और (0,4) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["24", "30", "36", "42"],
      "options_hi": ["24", "30", "36", "42"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 79,
      "question_en": "If the distance between the points (3,4) and (x, 8) is 5, find x.",
      "question_hi": "यदि बिंदुओं (3,4) और (x, 8) के बीच की दूरी 5 है, तो x ज्ञात कीजिए।",
      "options_en": ["0 or 6", "1 or 5", "2 or 4", "3 or 7"],
      "options_hi": ["0 या 6", "1 या 5", "2 या 4", "3 या 7"],
      "answer_en": "0 or 6",
      "answer_hi": "0 या 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 80,
      "question_en": "Find the coordinates of the centroid of the triangle with vertices (2,4), (6,8) and (10,12).",
      "question_hi": "शीर्षों (2,4), (6,8) और (10,12) वाले त्रिभुज के केन्द्रक के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(6,8)", "(8,10)", "(10,12)", "(12,14)"],
      "options_hi": ["(6,8)", "(8,10)", "(10,12)", "(12,14)"],
      "answer_en": "(6,8)",
      "answer_hi": "(6,8)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 81,
      "question_en": "Find the point on the x-axis which is equidistant from (3,4) and (5,6).",
      "question_hi": "x-अक्ष पर वह बिंदु ज्ञात कीजिए जो (3,4) और (5,6) से समदूरस्थ है।",
      "options_en": ["(7,0)", "(8,0)", "(9,0)", "(10,0)"],
      "options_hi": ["(7,0)", "(8,0)", "(9,0)", "(10,0)"],
      "answer_en": "(7,0)",
      "answer_hi": "(7,0)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 82,
      "question_en": "If the points (a, 0), (0, b) and (2, 2) are collinear, then find 1/a + 1/b.",
      "question_hi": "यदि बिंदु (a, 0), (0, b) और (2, 2) संरेख हैं, तो 1/a + 1/b ज्ञात कीजिए।",
      "options_en": ["1", "2", "1/2", "2/3"],
      "options_hi": ["1", "2", "1/2", "2/3"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 82,
      "question_en": "If the points (a, 0), (0, b) and (2, 2) are collinear, then find 1/a + 1/b.",
      "question_hi": "यदि बिंदु (a, 0), (0, b) और (2, 2) संरेख हैं, तो 1/a + 1/b ज्ञात कीजिए।",
      "options_en": ["1", "2", "1/2", "2/3"],
      "options_hi": ["1", "2", "1/2", "2/3"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 83,
      "question_en": "Find the area of the triangle with vertices (2,3), (4,5) and (6,7).",
      "question_hi": "शीर्षों (2,3), (4,5) और (6,7) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 84,
      "question_en": "Find the distance between the points (a, b) and (c, d).",
      "question_hi": "बिंदुओं (a, b) और (c, d) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["√((a-c)²+(b-d)²)", "√(a²+b²)", "√(c²+d²)", "|a-c|+|b-d|"],
      "options_hi": ["√((a-c)²+(b-d)²)", "√(a²+b²)", "√(c²+d²)", "|a-c|+|b-d|"],
      "answer_en": "√((a-c)²+(b-d)²)",
      "answer_hi": "√((a-c)²+(b-d)²)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 85,
      "question_en": "Find the coordinates of the point which divides the line segment joining (3,5) and (7,9) in the ratio 2:1 externally.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (3,5) और (7,9) को जोड़ने वाले रेखाखंड को 2:1 के अनुपात में बाह्य रूप से विभाजित करता है।",
      "options_en": ["(11, 13)", "(9, 11)", "(7, 9)", "(5, 7)"],
      "options_hi": ["(11, 13)", "(9, 11)", "(7, 9)", "(5, 7)"],
      "answer_en": "(11, 13)",
      "answer_hi": "(11, 13)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 86,
      "question_en": "Find the area of the triangle with vertices (a, a), (b, b) and (c, c).",
      "question_hi": "शीर्षों (a, a), (b, b) और (c, c) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "|a-b|", "|b-c|", "|c-a|"],
      "options_hi": ["0", "|a-b|", "|b-c|", "|c-a|"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 87,
      "question_en": "If the points (1,2), (3,4) and (x, y) are collinear, then find the relation between x and y.",
      "question_hi": "यदि बिंदु (1,2), (3,4) और (x, y) संरेख हैं, तो x और y के बीच संबंध ज्ञात कीजिए।",
      "options_en": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "options_hi": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "answer_en": "y = x + 1",
      "answer_hi": "y = x + 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 88,
      "question_en": "Find the distance of the point (4,5) from the line 3x + 4y = 10.",
      "question_hi": "बिंदु (4,5) की रेखा 3x + 4y = 10 से दूरी ज्ञात कीजिए।",
      "options_en": ["2", "3", "4", "5"],
      "options_hi": ["2", "3", "4", "5"],
      "answer_en": "2",
      "answer_hi": "2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 89,
      "question_en": "Find the coordinates of the point which is the midpoint of the line segment joining (6,8) and (10,12).",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (6,8) और (10,12) को जोड़ने वाले रेखाखंड का मध्यबिंदु है।",
      "options_en": ["(8,10)", "(9,11)", "(10,12)", "(11,13)"],
      "options_hi": ["(8,10)", "(9,11)", "(10,12)", "(11,13)"],
      "answer_en": "(8,10)",
      "answer_hi": "(8,10)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 90,
      "question_en": "Find the area of the triangle with vertices (1,2), (3,4) and (5,6).",
      "question_hi": "शीर्षों (1,2), (3,4) और (5,6) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 91,
      "question_en": "If the points (2,3), (4,5) and (6,7) are collinear, then find the value of the area.",
      "question_hi": "यदि बिंदु (2,3), (4,5) और (6,7) संरेख हैं, तो क्षेत्रफल का मान ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 92,
      "question_en": "Find the distance between the points (4,5) and (8,9).",
      "question_hi": "बिंदुओं (4,5) और (8,9) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["4√2", "5", "6", "7"],
      "options_hi": ["4√2", "5", "6", "7"],
      "answer_en": "4√2",
      "answer_hi": "4√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 93,
      "question_en": "Find the coordinates of the point which divides the line segment joining (3,4) and (5,6) in the ratio 3:2 internally.",
      "question_hi": "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (3,4) और (5,6) को जोड़ने वाले रेखाखंड को 3:2 के अनुपात में आंतरिक रूप से विभाजित करता है।",
      "options_en": ["(21/5, 26/5)", "(19/5, 24/5)", "(17/5, 22/5)", "(15/5, 20/5)"],
      "options_hi": ["(21/5, 26/5)", "(19/5, 24/5)", "(17/5, 22/5)", "(15/5, 20/5)"],
      "answer_en": "(21/5, 26/5)",
      "answer_hi": "(21/5, 26/5)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 94,
      "question_en": "Find the area of the quadrilateral with vertices (1,2), (3,4), (5,6) and (7,8).",
      "question_hi": "शीर्षों (1,2), (3,4), (5,6) और (7,8) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "4", "8", "12"],
      "options_hi": ["0", "4", "8", "12"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 95,
      "question_en": "If the distance between the points (5,6) and (x, 10) is 5, find x.",
      "question_hi": "यदि बिंदुओं (5,6) और (x, 10) के बीच की दूरी 5 है, तो x ज्ञात कीजिए।",
      "options_en": ["1 or 9", "2 or 8", "3 or 7", "4 or 6"],
      "options_hi": ["1 या 9", "2 या 8", "3 या 7", "4 या 6"],
      "answer_en": "1 or 9",
      "answer_hi": "1 या 9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 96,
      "question_en": "Find the coordinates of the centroid of the triangle with vertices (3,6), (9,12) and (15,18).",
      "question_hi": "शीर्षों (3,6), (9,12) और (15,18) वाले त्रिभुज के केन्द्रक के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(9,12)", "(10,13)", "(11,14)", "(12,15)"],
      "options_hi": ["(9,12)", "(10,13)", "(11,14)", "(12,15)"],
      "answer_en": "(9,12)",
      "answer_hi": "(9,12)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 97,
      "question_en": "Find the point on the y-axis which is equidistant from (4,5) and (6,7).",
      "question_hi": "y-अक्ष पर वह बिंदु ज्ञात कीजिए जो (4,5) और (6,7) से समदूरस्थ है।",
      "options_en": ["(0,11)", "(0,12)", "(0,13)", "(0,14)"],
      "options_hi": ["(0,11)", "(0,12)", "(0,13)", "(0,14)"],
      "answer_en": "(0,11)",
      "answer_hi": "(0,11)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 98,
      "question_en": "If the points (a, 0), (0, b) and (3, 4) are collinear, then find 1/a + 1/b.",
      "question_hi": "यदि बिंदु (a, 0), (0, b) और (3, 4) संरेख हैं, तो 1/a + 1/b ज्ञात कीजिए।",
      "options_en": ["7/12", "5/12", "1/3", "2/3"],
      "options_hi": ["7/12", "5/12", "1/3", "2/3"],
      "answer_en": "7/12",
      "answer_hi": "7/12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 99,
      "question_en": "Find the area of the triangle with vertices (2,3), (4,5) and (6,7).",
      "question_hi": "शीर्षों (2,3), (4,5) और (6,7) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 100,
      "question_en": "Find the distance between the points (a, b) and (c, d).",
      "question_hi": "बिंदुओं (a, b) और (c, d) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["√((a-c)²+(b-d)²)", "√(a²+b²)", "√(c²+d²)", "|a-c|+|b-d|"],
      "options_hi": ["√((a-c)²+(b-d)²)", "√(a²+b²)", "√(c²+d²)", "|a-c|+|b-d|"],
      "answer_en": "√((a-c)²+(b-d)²)",
      "answer_hi": "√((a-c)²+(b-d)²)",
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