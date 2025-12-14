const questions= [
    {
      "num": 1,
      "question_en": "Find the point on the x-axis which is equidistant from (2, -5) and (-2, 9).",
      "question_hi": "x-अक्ष पर वह बिंदु ज्ञात कीजिए जो (2, -5) और (-2, 9) से समदूरस्थ है।",
      "options_en": ["(-7, 0)", "(7, 0)", "(-5, 0)", "(5, 0)"],
      "options_hi": ["(-7, 0)", "(7, 0)", "(-5, 0)", "(5, 0)"],
      "answer_en": "(-7, 0)",
      "answer_hi": "(-7, 0)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "If the point P(x, y) lies on the line joining A(2, 3) and B(7, 8) such that AP = 2PB, then find the coordinates of P.",
      "question_hi": "यदि बिंदु P(x, y), A(2, 3) और B(7, 8) को मिलाने वाली रेखा पर इस प्रकार स्थित है कि AP = 2PB, तो P के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(4, 5)", "(5, 6)", "(16/3, 19/3)", "(11/3, 14/3)"],
      "options_hi": ["(4, 5)", "(5, 6)", "(16/3, 19/3)", "(11/3, 14/3)"],
      "answer_en": "(16/3, 19/3)",
      "answer_hi": "(16/3, 19/3)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Find the ratio in which the line segment joining points (-3, 10) and (6, -8) is divided by (-1, 6).",
      "question_hi": "बिंदुओं (-3, 10) और (6, -8) को मिलाने वाले रेखाखंड को (-1, 6) किस अनुपात में विभाजित करता है?",
      "options_en": ["2:7", "7:2", "2:5", "5:2"],
      "options_hi": ["2:7", "7:2", "2:5", "5:2"],
      "answer_en": "2:7",
      "answer_hi": "2:7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "The vertices of a triangle are (0, 0), (0, 2) and (2, 0). Find the coordinates of its orthocentre.",
      "question_hi": "एक त्रिभुज के शीर्ष (0, 0), (0, 2) और (2, 0) हैं। इसके लंबकेंद्र के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(0, 0)", "(0, 2)", "(2, 0)", "(1, 1)"],
      "options_hi": ["(0, 0)", "(0, 2)", "(2, 0)", "(1, 1)"],
      "answer_en": "(0, 0)",
      "answer_hi": "(0, 0)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "If A(4, 3), B(-1, y) and C(3, 4) are vertices of a right-angled triangle with ∠A = 90°, then find y.",
      "question_hi": "यदि A(4, 3), B(-1, y) और C(3, 4) एक समकोण त्रिभुज के शीर्ष हैं जिसमें ∠A = 90°, तो y ज्ञात कीजिए।",
      "options_en": ["-2", "2", "3", "4"],
      "options_hi": ["-2", "2", "3", "4"],
      "answer_en": "2",
      "answer_hi": "2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Find the area of the triangle formed by the lines x = 0, y = 0 and 3x + 4y = 12.",
      "question_hi": "रेखाओं x = 0, y = 0 और 3x + 4y = 12 द्वारा बने त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["6", "8", "10", "12"],
      "options_hi": ["6", "8", "10", "12"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "If the points A(2, 3), B(4, k) and C(6, -3) are collinear, find k.",
      "question_hi": "यदि बिंदु A(2, 3), B(4, k) और C(6, -3) संरेख हैं, तो k ज्ञात कीजिए।",
      "options_en": ["-1", "0", "1", "2"],
      "options_hi": ["-1", "0", "1", "2"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Find the coordinates of the point where the diagonals of the parallelogram with vertices A(1, 2), B(4, 3), C(6, 6) and D(3, 5) intersect.",
      "question_hi": "शीर्षों A(1, 2), B(4, 3), C(6, 6) और D(3, 5) वाले समांतर चतुर्भुज के विकर्णों के प्रतिच्छेद बिंदु के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(3.5, 4)", "(4, 4.5)", "(3, 4)", "(4, 3)"],
      "options_hi": ["(3.5, 4)", "(4, 4.5)", "(3, 4)", "(4, 3)"],
      "answer_en": "(3.5, 4)",
      "answer_hi": "(3.5, 4)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Find the distance between the parallel lines 3x + 4y = 12 and 3x + 4y = 7.",
      "question_hi": "समांतर रेखाओं 3x + 4y = 12 और 3x + 4y = 7 के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "If the point C(-1, 2) divides the line segment joining A(2, 5) and B in the ratio 3:4 internally, find coordinates of B.",
      "question_hi": "यदि बिंदु C(-1, 2), A(2, 5) और B को मिलाने वाले रेखाखंड को 3:4 के अनुपात में आंतरिक रूप से विभाजित करता है, तो B के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(-5, -2)", "(-6, -3)", "(-4, -1)", "(-3, 0)"],
      "options_hi": ["(-5, -2)", "(-6, -3)", "(-4, -1)", "(-3, 0)"],
      "answer_en": "(-5, -2)",
      "answer_hi": "(-5, -2)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Find the coordinates of the point which divides the line segment joining (-2, 3) and (4, 7) externally in the ratio 3:2.",
      "question_hi": "वह बिंदु ज्ञात कीजिए जो (-2, 3) और (4, 7) को मिलाने वाले रेखाखंड को 3:2 के अनुपात में बाह्य रूप से विभाजित करता है।",
      "options_en": ["(16, 15)", "(14, 13)", "(12, 11)", "(10, 9)"],
      "options_hi": ["(16, 15)", "(14, 13)", "(12, 11)", "(10, 9)"],
      "answer_en": "(16, 15)",
      "answer_hi": "(16, 15)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "The area of a triangle with vertices (a, b), (c, d) and (e, f) is 5. If the vertices are (a + k, b + k), (c + k, d + k), (e + k, f + k), find the new area.",
      "question_hi": "शीर्षों (a, b), (c, d) और (e, f) वाले त्रिभुज का क्षेत्रफल 5 है। यदि शीर्ष (a + k, b + k), (c + k, d + k), (e + k, f + k) हैं, तो नया क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["5", "5 + k", "5k", "5 + 3k"],
      "options_hi": ["5", "5 + k", "5k", "5 + 3k"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Find the coordinates of the incentre of the triangle with vertices (0, 0), (12, 0) and (0, 5).",
      "question_hi": "शीर्षों (0, 0), (12, 0) और (0, 5) वाले त्रिभुज के अंतःकेंद्र के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(2, 2)", "(3, 1)", "(4, 1)", "(5, 2)"],
      "options_hi": ["(2, 2)", "(3, 1)", "(4, 1)", "(5, 2)"],
      "answer_en": "(2, 2)",
      "answer_hi": "(2, 2)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "If the midpoints of sides of a triangle are (2, 3), (4, 5) and (6, 7), find the coordinates of its vertices.",
      "question_hi": "यदि एक त्रिभुज की भुजाओं के मध्यबिंदु (2, 3), (4, 5) और (6, 7) हैं, तो इसके शीर्षों के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(4, 5), (8, 9), (0, 1)", "(3, 4), (7, 8), (1, 2)", "(5, 6), (9, 10), (1, 2)", "(0, 1), (4, 5), (8, 9)"],
      "options_hi": ["(4, 5), (8, 9), (0, 1)", "(3, 4), (7, 8), (1, 2)", "(5, 6), (9, 10), (1, 2)", "(0, 1), (4, 5), (8, 9)"],
      "answer_en": "(0, 1), (4, 5), (8, 9)",
      "answer_hi": "(0, 1), (4, 5), (8, 9)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Find the area of the quadrilateral with vertices (1, 1), (7, -3), (12, 2) and (7, 21) taken in order.",
      "question_hi": "शीर्षों (1, 1), (7, -3), (12, 2) और (7, 21) से बने चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["96", "100", "108", "112"],
      "options_hi": ["96", "100", "108", "112"],
      "answer_en": "96",
      "answer_hi": "96",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "If G is the centroid of triangle ABC with vertices A(1, 2), B(3, 4) and C(5, 6), find the area of triangle GAB.",
      "question_hi": "यदि G, त्रिभुज ABC का केन्द्रक है जिसके शीर्ष A(1, 2), B(3, 4) और C(5, 6) हैं, तो त्रिभुज GAB का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "Find the coordinates of the point on y-axis which is at a distance of 5 units from the point (3, 4).",
      "question_hi": "y-अक्ष पर उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदु (3, 4) से 5 इकाई की दूरी पर है।",
      "options_en": ["(0, 0) and (0, 8)", "(0, 1) and (0, 7)", "(0, 2) and (0, 6)", "(0, 3) and (0, 5)"],
      "options_hi": ["(0, 0) और (0, 8)", "(0, 1) और (0, 7)", "(0, 2) और (0, 6)", "(0, 3) और (0, 5)"],
      "answer_en": "(0, 0) and (0, 8)",
      "answer_hi": "(0, 0) और (0, 8)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Find the distance between the points (a cosθ, a sinθ) and (a cosφ, a sinφ).",
      "question_hi": "बिंदुओं (a cosθ, a sinθ) और (a cosφ, a sinφ) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["2a sin((θ-φ)/2)", "2a cos((θ-φ)/2)", "a|θ-φ|", "a√2"],
      "options_hi": ["2a sin((θ-φ)/2)", "2a cos((θ-φ)/2)", "a|θ-φ|", "a√2"],
      "answer_en": "2a sin((θ-φ)/2)",
      "answer_hi": "2a sin((θ-φ)/2)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Find the ratio in which the line 3x + 4y = 7 divides the line segment joining (1, 2) and (5, 6).",
      "question_hi": "रेखा 3x + 4y = 7, बिंदुओं (1, 2) और (5, 6) को मिलाने वाले रेखाखंड को किस अनुपात में विभाजित करती है?",
      "options_en": ["3:5 internally", "5:3 internally", "3:5 externally", "5:3 externally"],
      "options_hi": ["3:5 आंतरिक", "5:3 आंतरिक", "3:5 बाह्य", "5:3 बाह्य"],
      "answer_en": "3:5 internally",
      "answer_hi": "3:5 आंतरिक",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "If the points (a, 0), (0, b) and (x, y) are collinear, prove that x/a + y/b = 1.",
      "question_hi": "यदि बिंदु (a, 0), (0, b) और (x, y) संरेख हैं, तो सिद्ध कीजिए कि x/a + y/b = 1।",
      "options_en": ["True", "False", "Cannot be determined", "None"],
      "options_hi": ["सत्य", "असत्य", "निर्धारित नहीं किया जा सकता", "कोई नहीं"],
      "answer_en": "True",
      "answer_hi": "सत्य",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "Find the length of the altitude from A(1, 2) to side BC where B(3, 4) and C(5, 6).",
      "question_hi": "A(1, 2) से भुजा BC पर शीर्षलंब की लंबाई ज्ञात कीजिए जहाँ B(3, 4) और C(5, 6) हैं।",
      "options_en": ["0", "√2", "2", "2√2"],
      "options_hi": ["0", "√2", "2", "2√2"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "Find the coordinates of the fourth vertex of a parallelogram if three vertices are (1, 2), (3, 4) and (5, 6).",
      "question_hi": "यदि समांतर चतुर्भुज के तीन शीर्ष (1, 2), (3, 4) और (5, 6) हैं, तो चौथे शीर्ष के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(3, 4)", "(5, 6)", "(7, 8)", "(9, 10)"],
      "options_hi": ["(3, 4)", "(5, 6)", "(7, 8)", "(9, 10)"],
      "answer_en": "(7, 8)",
      "answer_hi": "(7, 8)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "Find the area of the triangle formed by the points (at₁², 2at₁), (at₂², 2at₂) and (at₃², 2at₃).",
      "question_hi": "बिंदुओं (at₁², 2at₁), (at₂², 2at₂) और (at₃², 2at₃) से बने त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["a²|(t₁ - t₂)(t₂ - t₃)(t₃ - t₁)|", "a|(t₁ - t₂)(t₂ - t₃)(t₃ - t₁)|", "a²(t₁ + t₂ + t₃)", "0"],
      "options_hi": ["a²|(t₁ - t₂)(t₂ - t₃)(t₃ - t₁)|", "a|(t₁ - t₂)(t₂ - t₃)(t₃ - t₁)|", "a²(t₁ + t₂ + t₃)", "0"],
      "answer_en": "a²|(t₁ - t₂)(t₂ - t₃)(t₃ - t₁)|",
      "answer_hi": "a²|(t₁ - t₂)(t₂ - t₃)(t₃ - t₁)|",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "Find the coordinates of the point which is symmetric to (3, 4) with respect to the line y = x.",
      "question_hi": "रेखा y = x के सापेक्ष (3, 4) के सममित बिंदु के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(4, 3)", "(-3, -4)", "(-4, -3)", "(3, -4)"],
      "options_hi": ["(4, 3)", "(-3, -4)", "(-4, -3)", "(3, -4)"],
      "answer_en": "(4, 3)",
      "answer_hi": "(4, 3)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "Find the area of the rhombus whose vertices are (0, 0), (3, 4), (0, 8) and (-3, 4).",
      "question_hi": "उस समचतुर्भुज का क्षेत्रफल ज्ञात कीजिए जिसके शीर्ष (0, 0), (3, 4), (0, 8) और (-3, 4) हैं।",
      "options_en": ["24", "20", "16", "12"],
      "options_hi": ["24", "20", "16", "12"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "If the points (1, 5), (2, 3) and (-2, -11) are collinear, find the value of the constant if any.",
      "question_hi": "यदि बिंदु (1, 5), (2, 3) और (-2, -11) संरेख हैं, तो नियतांक का मान ज्ञात कीजिए (यदि कोई हो)।",
      "options_en": ["No constant", "k = 2", "k = 3", "k = 4"],
      "options_hi": ["कोई नियतांक नहीं", "k = 2", "k = 3", "k = 4"],
      "answer_en": "No constant",
      "answer_hi": "कोई नियतांक नहीं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "Find the distance of the point (2, 3) from the line 4x + 3y + 5 = 0.",
      "question_hi": "बिंदु (2, 3) की रेखा 4x + 3y + 5 = 0 से दूरी ज्ञात कीजिए।",
      "options_en": ["4", "5", "6", "7"],
      "options_hi": ["4", "5", "6", "7"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "Find the ratio in which the point (2, y) divides the line segment joining (4, 3) and (6, 3). Also find y.",
      "question_hi": "वह अनुपात ज्ञात कीजिए जिसमें बिंदु (2, y), (4, 3) और (6, 3) को मिलाने वाले रेखाखंड को विभाजित करता है। साथ ही y ज्ञात कीजिए।",
      "options_en": ["1:1 externally, y = 3", "1:1 internally, y = 3", "2:1 externally, y = 3", "2:1 internally, y = 3"],
      "options_hi": ["1:1 बाह्य, y = 3", "1:1 आंतरिक, y = 3", "2:1 बाह्य, y = 3", "2:1 आंतरिक, y = 3"],
      "answer_en": "1:1 externally, y = 3",
      "answer_hi": "1:1 बाह्य, y = 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "Find the area of the triangle whose sides are along the lines x = 0, y = 0 and x/3 + y/4 = 1.",
      "question_hi": "उस त्रिभुज का क्षेत्रफल ज्ञात कीजिए जिसकी भुजाएँ रेखाओं x = 0, y = 0 और x/3 + y/4 = 1 के अनुदिश हैं।",
      "options_en": ["6", "8", "10", "12"],
      "options_hi": ["6", "8", "10", "12"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "Find the coordinates of the point on the line y = 2x + 3 that is closest to the origin.",
      "question_hi": "रेखा y = 2x + 3 पर उस बिंदु के निर्देशांक ज्ञात कीजिए जो मूलबिंदु के निकटतम है।",
      "options_en": ["(-6/5, 3/5)", "(-3/5, 9/5)", "(-1, 1)", "(-2, -1)"],
      "options_hi": ["(-6/5, 3/5)", "(-3/5, 9/5)", "(-1, 1)", "(-2, -1)"],
      "answer_en": "(-6/5, 3/5)",
      "answer_hi": "(-6/5, 3/5)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_en": "If the distance between points (3, 4) and (x, 7) is 5, find x.",
      "question_hi": "यदि बिंदुओं (3, 4) और (x, 7) के बीच की दूरी 5 है, तो x ज्ञात कीजिए।",
      "options_en": ["-1 or 7", "0 or 6", "1 or 5", "2 or 4"],
      "options_hi": ["-1 या 7", "0 या 6", "1 या 5", "2 या 4"],
      "answer_en": "-1 or 7",
      "answer_hi": "-1 या 7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_en": "Find the circumcentre of the triangle with vertices (0, 0), (0, 6) and (8, 0).",
      "question_hi": "शीर्षों (0, 0), (0, 6) और (8, 0) वाले त्रिभुज का परिकेंद्र ज्ञात कीजिए।",
      "options_en": ["(3, 4)", "(4, 3)", "(5, 2)", "(2, 5)"],
      "options_hi": ["(3, 4)", "(4, 3)", "(5, 2)", "(2, 5)"],
      "answer_en": "(4, 3)",
      "answer_hi": "(4, 3)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_en": "Find the area of the triangle formed by the lines y = x, y = 2x and y = 3x + 4.",
      "question_hi": "रेखाओं y = x, y = 2x और y = 3x + 4 से बने त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["4", "8", "12", "16"],
      "options_hi": ["4", "8", "12", "16"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_en": "Find the length of the median from A to BC of triangle ABC with vertices A(1, 3), B(-1, 2) and C(3, 5).",
      "question_hi": "त्रिभुज ABC में A से BC पर माध्यिका की लंबाई ज्ञात कीजिए, जहाँ A(1, 3), B(-1, 2) और C(3, 5) हैं।",
      "options_en": ["√10", "√13", "√5", "√2"],
      "options_hi": ["√10", "√13", "√5", "√2"],
      "answer_en": "√10",
      "answer_hi": "√10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_en": "If the points (a, b), (c, d) and (e, f) are collinear, then which of the following is true?",
      "question_hi": "यदि बिंदु (a, b), (c, d) और (e, f) संरेख हैं, तो निम्नलिखित में से कौन सा सत्य है?",
      "options_en": ["(d - b)(e - c) = (f - d)(c - a)", "(d - b)(e - a) = (f - b)(c - a)", "(d - b)(e - a) = (f - d)(c - a)", "None"],
      "options_hi": ["(d - b)(e - c) = (f - d)(c - a)", "(d - b)(e - a) = (f - b)(c - a)", "(d - b)(e - a) = (f - d)(c - a)", "कोई नहीं"],
      "answer_en": "(d - b)(e - a) = (f - b)(c - a)",
      "answer_hi": "(d - b)(e - a) = (f - b)(c - a)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_en": "Find the distance between the lines 4x + 3y = 12 and 4x + 3y = 20.",
      "question_hi": "रेखाओं 4x + 3y = 12 और 4x + 3y = 20 के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["8/5", "12/5", "16/5", "20/5"],
      "options_hi": ["8/5", "12/5", "16/5", "20/5"],
      "answer_en": "8/5",
      "answer_hi": "8/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_en": "Find the area of the triangle with vertices (2, 3), (4, 5) and (6, 7).",
      "question_hi": "शीर्षों (2, 3), (4, 5) और (6, 7) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_en": "If the point (3, 4) is the centroid of triangle with vertices (2, 3), (x, 5) and (6, y), find x and y.",
      "question_hi": "यदि बिंदु (3, 4) शीर्षों (2, 3), (x, 5) और (6, y) वाले त्रिभुज का केन्द्रक है, तो x और y ज्ञात कीजिए।",
      "options_en": ["x = 1, y = 4", "x = 4, y = 1", "x = 3, y = 4", "x = 4, y = 3"],
      "options_hi": ["x = 1, y = 4", "x = 4, y = 1", "x = 3, y = 4", "x = 4, y = 3"],
      "answer_en": "x = 1, y = 4",
      "answer_hi": "x = 1, y = 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_en": "Find the coordinates of the point on the line 3x + 4y = 12 which is closest to the point (1, 2).",
      "question_hi": "रेखा 3x + 4y = 12 पर उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदु (1, 2) के निकटतम है।",
      "options_en": ["(2, 1.5)", "(3, 0.75)", "(1.6, 1.8)", "(2.4, 1.2)"],
      "options_hi": ["(2, 1.5)", "(3, 0.75)", "(1.6, 1.8)", "(2.4, 1.2)"],
      "answer_en": "(1.6, 1.8)",
      "answer_hi": "(1.6, 1.8)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_en": "Find the area of the parallelogram whose vertices are (1, 2), (4, 3), (6, 6) and (3, 5).",
      "question_hi": "उस समांतर चतुर्भुज का क्षेत्रफल ज्ञात कीजिए जिसके शीर्ष (1, 2), (4, 3), (6, 6) और (3, 5) हैं।",
      "options_en": ["6", "8", "10", "12"],
      "options_hi": ["6", "8", "10", "12"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_en": "Find the ratio in which the line 2x + 3y = 10 divides the line segment joining (1, 2) and (4, 5).",
      "question_hi": "रेखा 2x + 3y = 10, बिंदुओं (1, 2) और (4, 5) को मिलाने वाले रेखाखंड को किस अनुपात में विभाजित करती है?",
      "options_en": ["1:2 internally", "2:1 internally", "1:2 externally", "2:1 externally"],
      "options_hi": ["1:2 आंतरिक", "2:1 आंतरिक", "1:2 बाह्य", "2:1 बाह्य"],
      "answer_en": "1:2 internally",
      "answer_hi": "1:2 आंतरिक",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_en": "Find the distance between the points (sinθ, cosθ) and (cosθ, -sinθ).",
      "question_hi": "बिंदुओं (sinθ, cosθ) और (cosθ, -sinθ) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["√2", "2", "1", "√3"],
      "options_hi": ["√2", "2", "1", "√3"],
      "answer_en": "√2",
      "answer_hi": "√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_en": "If the points (1, 2), (3, 4) and (x, y) are vertices of an equilateral triangle, find relation between x and y.",
      "question_hi": "यदि बिंदु (1, 2), (3, 4) और (x, y) एक समबाहु त्रिभुज के शीर्ष हैं, तो x और y के बीच संबंध ज्ञात कीजिए।",
      "options_en": ["(x - 2)² + (y - 3)² = 8", "(x - 2)² + (y - 3)² = 4", "(x - 2)² + (y - 3)² = 2", "No relation"],
      "options_hi": ["(x - 2)² + (y - 3)² = 8", "(x - 2)² + (y - 3)² = 4", "(x - 2)² + (y - 3)² = 2", "कोई संबंध नहीं"],
      "answer_en": "(x - 2)² + (y - 3)² = 8",
      "answer_hi": "(x - 2)² + (y - 3)² = 8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_en": "Find the coordinates of the point which divides the line segment joining (1, 2) and (3, 4) in the ratio 1:√2 internally.",
      "question_hi": "वह बिंदु ज्ञात कीजिए जो बिंदुओं (1, 2) और (3, 4) को मिलाने वाले रेखाखंड को 1:√2 के अनुपात में आंतरिक रूप से विभाजित करता है।",
      "options_en": ["((3+√2)/(1+√2), (4+2√2)/(1+√2))", "((1+3√2)/(1+√2), (2+4√2)/(1+√2))", "((3+√2)/(1+√2), (4+√2)/(1+√2))", "((1+√2)/(1+√2), (2+√2)/(1+√2))"],
      "options_hi": ["((3+√2)/(1+√2), (4+2√2)/(1+√2))", "((1+3√2)/(1+√2), (2+4√2)/(1+√2))", "((3+√2)/(1+√2), (4+√2)/(1+√2))", "((1+√2)/(1+√2), (2+√2)/(1+√2))"],
      "answer_en": "((1+3√2)/(1+√2), (2+4√2)/(1+√2))",
      "answer_hi": "((1+3√2)/(1+√2), (2+4√2)/(1+√2))",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_en": "Find the area of the triangle with vertices (0, 0), (a cosθ, a sinθ) and (a cosφ, a sinφ).",
      "question_hi": "शीर्षों (0, 0), (a cosθ, a sinθ) और (a cosφ, a sinφ) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["(1/2)a²|sin(θ-φ)|", "a²|sin(θ-φ)|", "(1/2)a²|cos(θ-φ)|", "a²|cos(θ-φ)|"],
      "options_hi": ["(1/2)a²|sin(θ-φ)|", "a²|sin(θ-φ)|", "(1/2)a²|cos(θ-φ)|", "a²|cos(θ-φ)|"],
      "answer_en": "(1/2)a²|sin(θ-φ)|",
      "answer_hi": "(1/2)a²|sin(θ-φ)|",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_en": "Find the ratio in which the line x + y = 4 divides the line segment joining (1, 2) and (5, 6).",
      "question_hi": "रेखा x + y = 4, बिंदुओं (1, 2) और (5, 6) को मिलाने वाले रेखाखंड को किस अनुपात में विभाजित करती है?",
      "options_en": ["1:3 internally", "3:1 internally", "1:3 externally", "3:1 externally"],
      "options_hi": ["1:3 आंतरिक", "3:1 आंतरिक", "1:3 बाह्य", "3:1 बाह्य"],
      "answer_en": "1:3 internally",
      "answer_hi": "1:3 आंतरिक",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_en": "Find the distance of the point (3, 4) from the line 5x - 12y + 2 = 0.",
      "question_hi": "बिंदु (3, 4) की रेखा 5x - 12y + 2 = 0 से दूरी ज्ञात कीजिए।",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_en": "Find the area of the quadrilateral with vertices (0, 0), (4, 0), (6, 3) and (0, 3).",
      "question_hi": "शीर्षों (0, 0), (4, 0), (6, 3) और (0, 3) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["15", "18", "21", "24"],
      "options_hi": ["15", "18", "21", "24"],
      "answer_en": "15",
      "answer_hi": "15",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_en": "If the points (2, 3), (4, 5) and (6, 7) are collinear, find the area of triangle formed by them.",
      "question_hi": "यदि बिंदु (2, 3), (4, 5) और (6, 7) संरेख हैं, तो उनसे बने त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_en": "Find the distance between the points (a + b, a - b) and (a - b, a + b).",
      "question_hi": "बिंदुओं (a + b, a - b) और (a - b, a + b) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["2√2|b|", "2√2|a|", "2|a|", "2|b|"],
      "options_hi": ["2√2|b|", "2√2|a|", "2|a|", "2|b|"],
      "answer_en": "2√2|b|",
      "answer_hi": "2√2|b|",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 51,
      "question_en": "Find the coordinates of the point which is the reflection of (2, 3) in the line y = x.",
      "question_hi": "रेखा y = x में (2, 3) के प्रतिबिंब बिंदु के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(3, 2)", "(-2, -3)", "(-3, -2)", "(2, -3)"],
      "options_hi": ["(3, 2)", "(-2, -3)", "(-3, -2)", "(2, -3)"],
      "answer_en": "(3, 2)",
      "answer_hi": "(3, 2)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 52,
      "question_en": "Find the area of the triangle with vertices (1, 2), (3, 4) and (5, 6).",
      "question_hi": "शीर्षों (1, 2), (3, 4) और (5, 6) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 53,
      "question_en": "Find the ratio in which the point (3, 4) divides the line segment joining (1, 2) and (5, 6).",
      "question_hi": "बिंदु (3, 4), बिंदुओं (1, 2) और (5, 6) को मिलाने वाले रेखाखंड को किस अनुपात में विभाजित करता है?",
      "options_en": ["1:1", "2:1", "1:2", "3:1"],
      "options_hi": ["1:1", "2:1", "1:2", "3:1"],
      "answer_en": "1:1",
      "answer_hi": "1:1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 54,
      "question_en": "Find the distance between the points (2, 3) and (5, 7).",
      "question_hi": "बिंदुओं (2, 3) और (5, 7) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["5", "6", "7", "8"],
      "options_hi": ["5", "6", "7", "8"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 55,
      "question_en": "Find the area of the triangle with vertices (0, 0), (3, 4) and (5, 2).",
      "question_hi": "शीर्षों (0, 0), (3, 4) और (5, 2) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["7", "8", "9", "10"],
      "options_hi": ["7", "8", "9", "10"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 56,
      "question_en": "Find the coordinates of the centroid of triangle with vertices (1, 2), (3, 4) and (5, 6).",
      "question_hi": "शीर्षों (1, 2), (3, 4) और (5, 6) वाले त्रिभुज के केन्द्रक के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(3, 4)", "(4, 5)", "(5, 6)", "(6, 7)"],
      "options_hi": ["(3, 4)", "(4, 5)", "(5, 6)", "(6, 7)"],
      "answer_en": "(3, 4)",
      "answer_hi": "(3, 4)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 57,
      "question_en": "Find the point on x-axis which is equidistant from (2, 3) and (4, 5).",
      "question_hi": "x-अक्ष पर वह बिंदु ज्ञात कीजिए जो (2, 3) और (4, 5) से समदूरस्थ है।",
      "options_en": ["(3, 0)", "(4, 0)", "(5, 0)", "(6, 0)"],
      "options_hi": ["(3, 0)", "(4, 0)", "(5, 0)", "(6, 0)"],
      "answer_en": "(3, 0)",
      "answer_hi": "(3, 0)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 58,
      "question_en": "If the points (a, 0), (0, b) and (1, 1) are collinear, find 1/a + 1/b.",
      "question_hi": "यदि बिंदु (a, 0), (0, b) और (1, 1) संरेख हैं, तो 1/a + 1/b ज्ञात कीजिए।",
      "options_en": ["1", "2", "3", "4"],
      "options_hi": ["1", "2", "3", "4"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 59,
      "question_en": "Find the area of the triangle with vertices (2, 3), (4, 5) and (6, 7).",
      "question_hi": "शीर्षों (2, 3), (4, 5) और (6, 7) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 60,
      "question_en": "Find the distance between the points (3, 4) and (7, 8).",
      "question_hi": "बिंदुओं (3, 4) और (7, 8) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["4√2", "5", "6", "7"],
      "options_hi": ["4√2", "5", "6", "7"],
      "answer_en": "4√2",
      "answer_hi": "4√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 61,
      "question_en": "Find the coordinates of the point which divides the line segment joining (2, 3) and (4, 5) in the ratio 2:3 internally.",
      "question_hi": "वह बिंदु ज्ञात कीजिए जो (2, 3) और (4, 5) को मिलाने वाले रेखाखंड को 2:3 के अनुपात में आंतरिक रूप से विभाजित करता है।",
      "options_en": ["(14/5, 19/5)", "(16/5, 21/5)", "(18/5, 23/5)", "(20/5, 25/5)"],
      "options_hi": ["(14/5, 19/5)", "(16/5, 21/5)", "(18/5, 23/5)", "(20/5, 25/5)"],
      "answer_en": "(14/5, 19/5)",
      "answer_hi": "(14/5, 19/5)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 62,
      "question_en": "Find the area of the quadrilateral with vertices (0, 0), (6, 0), (6, 4) and (0, 4).",
      "question_hi": "शीर्षों (0, 0), (6, 0), (6, 4) और (0, 4) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["24", "30", "36", "42"],
      "options_hi": ["24", "30", "36", "42"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 63,
      "question_en": "If the distance between the points (3, 4) and (x, 8) is 5, find x.",
      "question_hi": "यदि बिंदुओं (3, 4) और (x, 8) के बीच की दूरी 5 है, तो x ज्ञात कीजिए।",
      "options_en": ["0 or 6", "1 or 5", "2 or 4", "3 or 7"],
      "options_hi": ["0 या 6", "1 या 5", "2 या 4", "3 या 7"],
      "answer_en": "0 or 6",
      "answer_hi": "0 या 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 64,
      "question_en": "Find the coordinates of the centroid of triangle with vertices (2, 4), (6, 8) and (10, 12).",
      "question_hi": "शीर्षों (2, 4), (6, 8) और (10, 12) वाले त्रिभुज के केन्द्रक के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(6, 8)", "(8, 10)", "(10, 12)", "(12, 14)"],
      "options_hi": ["(6, 8)", "(8, 10)", "(10, 12)", "(12, 14)"],
      "answer_en": "(6, 8)",
      "answer_hi": "(6, 8)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 65,
      "question_en": "Find the point on y-axis which is equidistant from (4, 5) and (6, 7).",
      "question_hi": "y-अक्ष पर वह बिंदु ज्ञात कीजिए जो (4, 5) और (6, 7) से समदूरस्थ है।",
      "options_en": ["(0, 11)", "(0, 12)", "(0, 13)", "(0, 14)"],
      "options_hi": ["(0, 11)", "(0, 12)", "(0, 13)", "(0, 14)"],
      "answer_en": "(0, 11)",
      "answer_hi": "(0, 11)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 66,
      "question_en": "If the points (a, 0), (0, b) and (3, 4) are collinear, find 1/a + 1/b.",
      "question_hi": "यदि बिंदु (a, 0), (0, b) और (3, 4) संरेख हैं, तो 1/a + 1/b ज्ञात कीजिए।",
      "options_en": ["7/12", "5/12", "1/3", "2/3"],
      "options_hi": ["7/12", "5/12", "1/3", "2/3"],
      "answer_en": "7/12",
      "answer_hi": "7/12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 67,
      "question_en": "Find the area of the triangle with vertices (2, 3), (4, 5) and (6, 7).",
      "question_hi": "शीर्षों (2, 3), (4, 5) और (6, 7) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 68,
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
      "num": 69,
      "question_en": "Find the coordinates of the point which divides the line segment joining (3, 5) and (7, 9) in the ratio 3:2 externally.",
      "question_hi": "वह बिंदु ज्ञात कीजिए जो (3, 5) और (7, 9) को मिलाने वाले रेखाखंड को 3:2 के अनुपात में बाह्य रूप से विभाजित करता है।",
      "options_en": ["(15, 17)", "(13, 15)", "(11, 13)", "(9, 11)"],
      "options_hi": ["(15, 17)", "(13, 15)", "(11, 13)", "(9, 11)"],
      "answer_en": "(15, 17)",
      "answer_hi": "(15, 17)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 70,
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
      "num": 71,
      "question_en": "If the points (1, 2), (3, 4) and (x, y) are collinear, find relation between x and y.",
      "question_hi": "यदि बिंदु (1, 2), (3, 4) और (x, y) संरेख हैं, तो x और y के बीच संबंध ज्ञात कीजिए।",
      "options_en": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "options_hi": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "answer_en": "y = x + 1",
      "answer_hi": "y = x + 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 72,
      "question_en": "Find the distance of point (4, 5) from line 3x + 4y = 10.",
      "question_hi": "बिंदु (4, 5) की रेखा 3x + 4y = 10 से दूरी ज्ञात कीजिए।",
      "options_en": ["2", "3", "4", "5"],
      "options_hi": ["2", "3", "4", "5"],
      "answer_en": "2",
      "answer_hi": "2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 73,
      "question_en": "Find coordinates of midpoint of segment joining (6, 8) and (10, 12).",
      "question_hi": "(6, 8) और (10, 12) को मिलाने वाले रेखाखंड के मध्यबिंदु के निर्देशांक ज्ञात कीजिए।",
      "options_en": ["(8, 10)", "(9, 11)", "(10, 12)", "(11, 13)"],
      "options_hi": ["(8, 10)", "(9, 11)", "(10, 12)", "(11, 13)"],
      "answer_en": "(8, 10)",
      "answer_hi": "(8, 10)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 74,
      "question_en": "Find area of triangle with vertices (1, 2), (3, 4) and (5, 6).",
      "question_hi": "शीर्षों (1, 2), (3, 4) और (5, 6) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 75,
      "question_en": "If points (2, 3), (4, 5) and (6, 7) are collinear, find area.",
      "question_hi": "यदि बिंदु (2, 3), (4, 5) और (6, 7) संरेख हैं, तो क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 76,
      "question_en": "Find distance between points (4, 5) and (8, 9).",
      "question_hi": "बिंदुओं (4, 5) और (8, 9) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["4√2", "5", "6", "7"],
      "options_hi": ["4√2", "5", "6", "7"],
      "answer_en": "4√2",
      "answer_hi": "4√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 77,
      "question_en": "Find coordinates of point dividing (3, 4) and (5, 6) in ratio 3:2 internally.",
      "question_hi": "वह बिंदु ज्ञात कीजिए जो (3, 4) और (5, 6) को मिलाने वाले रेखाखंड को 3:2 के अनुपात में आंतरिक रूप से विभाजित करता है।",
      "options_en": ["(21/5, 26/5)", "(19/5, 24/5)", "(17/5, 22/5)", "(15/5, 20/5)"],
      "options_hi": ["(21/5, 26/5)", "(19/5, 24/5)", "(17/5, 22/5)", "(15/5, 20/5)"],
      "answer_en": "(21/5, 26/5)",
      "answer_hi": "(21/5, 26/5)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 78,
      "question_en": "Find area of quadrilateral with vertices (1, 2), (3, 4), (5, 6) and (7, 8).",
      "question_hi": "शीर्षों (1, 2), (3, 4), (5, 6) और (7, 8) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "4", "8", "12"],
      "options_hi": ["0", "4", "8", "12"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 79,
      "question_en": "If distance between (5, 6) and (x, 10) is 5, find x.",
      "question_hi": "यदि बिंदुओं (5, 6) और (x, 10) के बीच की दूरी 5 है, तो x ज्ञात कीजिए।",
      "options_en": ["1 or 9", "2 or 8", "3 or 7", "4 or 6"],
      "options_hi": ["1 या 9", "2 या 8", "3 या 7", "4 या 6"],
      "answer_en": "1 or 9",
      "answer_hi": "1 या 9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 80,
      "question_en": "Find centroid of triangle with vertices (3, 6), (9, 12) and (15, 18).",
      "question_hi": "शीर्षों (3, 6), (9, 12) और (15, 18) वाले त्रिभुज का केन्द्रक ज्ञात कीजिए।",
      "options_en": ["(9, 12)", "(10, 13)", "(11, 14)", "(12, 15)"],
      "options_hi": ["(9, 12)", "(10, 13)", "(11, 14)", "(12, 15)"],
      "answer_en": "(9, 12)",
      "answer_hi": "(9, 12)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 81,
      "question_en": "Find point on x-axis equidistant from (3, 4) and (5, 6).",
      "question_hi": "x-अक्ष पर वह बिंदु ज्ञात कीजिए जो (3, 4) और (5, 6) से समदूरस्थ है।",
      "options_en": ["(4, 0)", "(5, 0)", "(6, 0)", "(7, 0)"],
      "options_hi": ["(4, 0)", "(5, 0)", "(6, 0)", "(7, 0)"],
      "answer_en": "(4, 0)",
      "answer_hi": "(4, 0)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 82,
      "question_en": "If (a, 0), (0, b) and (2, 2) are collinear, find 1/a + 1/b.",
      "question_hi": "यदि (a, 0), (0, b) और (2, 2) संरेख हैं, तो 1/a + 1/b ज्ञात कीजिए।",
      "options_en": ["1", "2", "1/2", "2/3"],
      "options_hi": ["1", "2", "1/2", "2/3"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 83,
      "question_en": "Find area of triangle with vertices (2, 3), (4, 5) and (6, 7).",
      "question_hi": "शीर्षों (2, 3), (4, 5) और (6, 7) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 84,
      "question_en": "Find distance between points (a, b) and (c, d).",
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
      "question_en": "Find point dividing (3, 5) and (7, 9) externally in ratio 2:1.",
      "question_hi": "वह बिंदु ज्ञात कीजिए जो (3, 5) और (7, 9) को मिलाने वाले रेखाखंड को 2:1 के अनुपात में बाह्य रूप से विभाजित करता है।",
      "options_en": ["(11, 13)", "(9, 11)", "(7, 9)", "(5, 7)"],
      "options_hi": ["(11, 13)", "(9, 11)", "(7, 9)", "(5, 7)"],
      "answer_en": "(11, 13)",
      "answer_hi": "(11, 13)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 86,
      "question_en": "Find area of triangle with vertices (a, a), (b, b) and (c, c).",
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
      "question_en": "If (1, 2), (3, 4) and (x, y) are collinear, find relation.",
      "question_hi": "यदि (1, 2), (3, 4) और (x, y) संरेख हैं, तो संबंध ज्ञात कीजिए।",
      "options_en": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "options_hi": ["y = x + 1", "y = x - 1", "y = 2x", "y = x/2"],
      "answer_en": "y = x + 1",
      "answer_hi": "y = x + 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 88,
      "question_en": "Find distance of (4, 5) from line 3x + 4y = 10.",
      "question_hi": "बिंदु (4, 5) की रेखा 3x + 4y = 10 से दूरी ज्ञात कीजिए।",
      "options_en": ["2", "3", "4", "5"],
      "options_hi": ["2", "3", "4", "5"],
      "answer_en": "2",
      "answer_hi": "2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 89,
      "question_en": "Find midpoint of segment joining (6, 8) and (10, 12).",
      "question_hi": "(6, 8) और (10, 12) को मिलाने वाले रेखाखंड का मध्यबिंदु ज्ञात कीजिए।",
      "options_en": ["(8, 10)", "(9, 11)", "(10, 12)", "(11, 13)"],
      "options_hi": ["(8, 10)", "(9, 11)", "(10, 12)", "(11, 13)"],
      "answer_en": "(8, 10)",
      "answer_hi": "(8, 10)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 90,
      "question_en": "Find area of triangle with vertices (1, 2), (3, 4) and (5, 6).",
      "question_hi": "शीर्षों (1, 2), (3, 4) और (5, 6) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 91,
      "question_en": "If points (2, 3), (4, 5) and (6, 7) are collinear, find area.",
      "question_hi": "यदि बिंदु (2, 3), (4, 5) और (6, 7) संरेख हैं, तो क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 92,
      "question_en": "Find distance between (4, 5) and (8, 9).",
      "question_hi": "बिंदुओं (4, 5) और (8, 9) के बीच की दूरी ज्ञात कीजिए।",
      "options_en": ["4√2", "5", "6", "7"],
      "options_hi": ["4√2", "5", "6", "7"],
      "answer_en": "4√2",
      "answer_hi": "4√2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 93,
      "question_en": "Find point dividing (3, 4) and (5, 6) in ratio 3:2 internally.",
      "question_hi": "वह बिंदु ज्ञात कीजिए जो (3, 4) और (5, 6) को मिलाने वाले रेखाखंड को 3:2 के अनुपात में आंतरिक रूप से विभाजित करता है।",
      "options_en": ["(21/5, 26/5)", "(19/5, 24/5)", "(17/5, 22/5)", "(15/5, 20/5)"],
      "options_hi": ["(21/5, 26/5)", "(19/5, 24/5)", "(17/5, 22/5)", "(15/5, 20/5)"],
      "answer_en": "(21/5, 26/5)",
      "answer_hi": "(21/5, 26/5)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 94,
      "question_en": "Find area of quadrilateral with vertices (1, 2), (3, 4), (5, 6) and (7, 8).",
      "question_hi": "शीर्षों (1, 2), (3, 4), (5, 6) और (7, 8) वाले चतुर्भुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "4", "8", "12"],
      "options_hi": ["0", "4", "8", "12"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 95,
      "question_en": "If distance between (5, 6) and (x, 10) is 5, find x.",
      "question_hi": "यदि बिंदुओं (5, 6) और (x, 10) के बीच की दूरी 5 है, तो x ज्ञात कीजिए।",
      "options_en": ["1 or 9", "2 or 8", "3 or 7", "4 or 6"],
      "options_hi": ["1 या 9", "2 या 8", "3 या 7", "4 या 6"],
      "answer_en": "1 or 9",
      "answer_hi": "1 या 9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 96,
      "question_en": "Find centroid of triangle with vertices (3, 6), (9, 12) and (15, 18).",
      "question_hi": "शीर्षों (3, 6), (9, 12) और (15, 18) वाले त्रिभुज का केन्द्रक ज्ञात कीजिए।",
      "options_en": ["(9, 12)", "(10, 13)", "(11, 14)", "(12, 15)"],
      "options_hi": ["(9, 12)", "(10, 13)", "(11, 14)", "(12, 15)"],
      "answer_en": "(9, 12)",
      "answer_hi": "(9, 12)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 97,
      "question_en": "Find point on y-axis equidistant from (4, 5) and (6, 7).",
      "question_hi": "y-अक्ष पर वह बिंदु ज्ञात कीजिए जो (4, 5) और (6, 7) से समदूरस्थ है।",
      "options_en": ["(0, 11)", "(0, 12)", "(0, 13)", "(0, 14)"],
      "options_hi": ["(0, 11)", "(0, 12)", "(0, 13)", "(0, 14)"],
      "answer_en": "(0, 11)",
      "answer_hi": "(0, 11)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 98,
      "question_en": "If (a, 0), (0, b) and (3, 4) are collinear, find 1/a + 1/b.",
      "question_hi": "यदि (a, 0), (0, b) और (3, 4) संरेख हैं, तो 1/a + 1/b ज्ञात कीजिए।",
      "options_en": ["7/12", "5/12", "1/3", "2/3"],
      "options_hi": ["7/12", "5/12", "1/3", "2/3"],
      "answer_en": "7/12",
      "answer_hi": "7/12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 99,
      "question_en": "Find area of triangle with vertices (2, 3), (4, 5) and (6, 7).",
      "question_hi": "शीर्षों (2, 3), (4, 5) और (6, 7) वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["0", "1", "2", "3"],
      "options_hi": ["0", "1", "2", "3"],
      "answer_en": "0",
      "answer_hi": "0",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 100,
      "question_en": "Find distance between points (a, b) and (c, d).",
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