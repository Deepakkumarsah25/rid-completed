const questions = [
  {
    "num": 1,
    "question_en": "If sin θ + cos θ = √2, then what is the value of tan θ + cot θ?",
    "question_hi": "यदि sin θ + cos θ = √2 है, तो tan θ + cot θ का मान क्या है?",
    "options_en": ["2", "1", "√2", "1/√2"],
    "options_hi": ["2", "1", "√2", "1/√2"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "If 7 sin²θ + 3 cos²θ = 4, then what is the value of tan θ?",
    "question_hi": "यदि 7 sin²θ + 3 cos²θ = 4 है, तो tan θ का मान क्या है?",
    "options_en": ["1/√3", "√3", "1", "1/√2"],
    "options_hi": ["1/√3", "√3", "1", "1/√2"],
    "answer_en": "1/√3",
    "answer_hi": "1/√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If sin θ = 12/13 and θ is acute, what is the value of (2 sin θ - 3 cos θ)/(4 sin θ - 9 cos θ)?",
    "question_hi": "यदि sin θ = 12/13 है और θ न्यून कोण है, तो (2 sin θ - 3 cos θ)/(4 sin θ - 9 cos θ) का मान क्या है?",
    "options_en": ["3", "1/3", "2", "1/2"],
    "options_hi": ["3", "1/3", "2", "1/2"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If tan θ + cot θ = 2, then what is the value of tan¹⁰θ + cot¹⁰θ?",
    "question_hi": "यदि tan θ + cot θ = 2 है, तो tan¹⁰θ + cot¹⁰θ का मान क्या है?",
    "options_en": ["2", "1", "0", "1024"],
    "options_hi": ["2", "1", "0", "1024"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "If sin θ + cos θ = √3 cos(90° - θ), then what is the value of tan θ?",
    "question_hi": "यदि sin θ + cos θ = √3 cos(90° - θ) है, तो tan θ का मान क्या है?",
    "options_en": ["√3 - 1", "√3 + 1", "1", "√3"],
    "options_hi": ["√3 - 1", "√3 + 1", "1", "√3"],
    "answer_en": "√3 - 1",
    "answer_hi": "√3 - 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If 5 tan θ = 4, then what is the value of (5 sin θ - 3 cos θ)/(5 sin θ + 2 cos θ)?",
    "question_hi": "यदि 5 tan θ = 4 है, तो (5 sin θ - 3 cos θ)/(5 sin θ + 2 cos θ) का मान क्या है?",
    "options_en": ["1/6", "5/6", "2/3", "1/3"],
    "options_hi": ["1/6", "5/6", "2/3", "1/3"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "If sec θ + tan θ = 2, then what is the value of sin θ?",
    "question_hi": "यदि sec θ + tan θ = 2 है, तो sin θ का मान क्या है?",
    "options_en": ["3/5", "4/5", "5/13", "12/13"],
    "options_hi": ["3/5", "4/5", "5/13", "12/13"],
    "answer_en": "3/5",
    "answer_hi": "3/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If x = a sec θ + b tan θ and y = a tan θ + b sec θ, then what is x² - y² equal to?",
    "question_hi": "यदि x = a sec θ + b tan θ और y = a tan θ + b sec θ है, तो x² - y² किसके बराबर है?",
    "options_en": ["a² - b²", "b² - a²", "a² + b²", "2ab"],
    "options_hi": ["a² - b²", "b² - a²", "a² + b²", "2ab"],
    "answer_en": "a² - b²",
    "answer_hi": "a² - b²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "If cot θ = 7/24, then what is the value of (2 + 2 sin θ)(1 - sin θ)/((1 + cos θ)(2 - 2 cos θ))?",
    "question_hi": "यदि cot θ = 7/24 है, तो (2 + 2 sin θ)(1 - sin θ)/((1 + cos θ)(2 - 2 cos θ)) का मान क्या है?",
    "options_en": ["49/576", "576/49", "24/25", "25/24"],
    "options_hi": ["49/576", "576/49", "24/25", "25/24"],
    "answer_en": "576/49",
    "answer_hi": "576/49",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "If sin θ + sin²θ = 1, then what is the value of cos²θ + cos⁴θ?",
    "question_hi": "यदि sin θ + sin²θ = 1 है, तो cos²θ + cos⁴θ का मान क्या है?",
    "options_en": ["1", "2", "3", "1/2"],
    "options_hi": ["1", "2", "3", "1/2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If 3 sin θ + 5 cos θ = 5, then what is the value of (5 sin θ - 3 cos θ)?",
    "question_hi": "यदि 3 sin θ + 5 cos θ = 5 है, तो (5 sin θ - 3 cos θ) का मान क्या है?",
    "options_en": ["±3", "±4", "±5", "±6"],
    "options_hi": ["±3", "±4", "±5", "±6"],
    "answer_en": "±3",
    "answer_hi": "±3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "If tan²θ = 1 - a², then what is the value of sec θ + tan³θ cosec θ?",
    "question_hi": "यदि tan²θ = 1 - a² है, तो sec θ + tan³θ cosec θ का मान क्या है?",
    "options_en": ["(2 - a²)^(3/2)", "(2 + a²)^(3/2)", "(2 - a²)^(1/2)", "(2 + a²)^(1/2)"],
    "options_hi": ["(2 - a²)^(3/2)", "(2 + a²)^(3/2)", "(2 - a²)^(1/2)", "(2 + a²)^(1/2)"],
    "answer_en": "(2 - a²)^(3/2)",
    "answer_hi": "(2 - a²)^(3/2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "If cos⁴θ - sin⁴θ = 2/3, then what is the value of 1 - 2 sin²θ?",
    "question_hi": "यदि cos⁴θ - sin⁴θ = 2/3 है, तो 1 - 2 sin²θ का मान क्या है?",
    "options_en": ["2/3", "1/3", "3/2", "3"],
    "options_hi": ["2/3", "1/3", "3/2", "3"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If tan θ = 3/4 and θ is acute, then what is the value of (sin θ + cos θ)/(sin θ - cos θ)?",
    "question_hi": "यदि tan θ = 3/4 है और θ न्यून कोण है, तो (sin θ + cos θ)/(sin θ - cos θ) का मान क्या है?",
    "options_en": ["7", "1/7", "-7", "-1/7"],
    "options_hi": ["7", "1/7", "-7", "-1/7"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "If cosec θ - cot θ = 2, then what is the value of cos θ?",
    "question_hi": "यदि cosec θ - cot θ = 2 है, तो cos θ का मान क्या है?",
    "options_en": ["3/5", "-3/5", "4/5", "-4/5"],
    "options_hi": ["3/5", "-3/5", "4/5", "-4/5"],
    "answer_en": "-3/5",
    "answer_hi": "-3/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "If sin θ + cos θ = √2 sin(90° - θ), then what is the value of cot θ?",
    "question_hi": "यदि sin θ + cos θ = √2 sin(90° - θ) है, तो cot θ का मान क्या है?",
    "options_en": ["√2 + 1", "√2 - 1", "1", "√2"],
    "options_hi": ["√2 + 1", "√2 - 1", "1", "√2"],
    "answer_en": "√2 + 1",
    "answer_hi": "√2 + 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If x = r sin θ cos φ, y = r sin θ sin φ, z = r cos θ, then what is x² + y² + z² equal to?",
    "question_hi": "यदि x = r sin θ cos φ, y = r sin θ sin φ, z = r cos θ है, तो x² + y² + z² किसके बराबर है?",
    "options_en": ["r", "r²", "r³", "1"],
    "options_hi": ["r", "r²", "r³", "1"],
    "answer_en": "r²",
    "answer_hi": "r²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "If tan A + cot A = 4, then what is the value of tan⁴A + cot⁴A?",
    "question_hi": "यदि tan A + cot A = 4 है, तो tan⁴A + cot⁴A का मान क्या है?",
    "options_en": ["194", "196", "198", "200"],
    "options_hi": ["194", "196", "198", "200"],
    "answer_en": "194",
    "answer_hi": "194",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If sin θ = 3/5 and θ is in quadrant II, what is the value of (5 sin θ - 2 sec θ)/(3 tan θ + 4 cosec θ)?",
    "question_hi": "यदि sin θ = 3/5 है और θ द्वितीय चतुर्थांश में है, तो (5 sin θ - 2 sec θ)/(3 tan θ + 4 cosec θ) का मान क्या है?",
    "options_en": ["-41/30", "41/30", "-30/41", "30/41"],
    "options_hi": ["-41/30", "41/30", "-30/41", "30/41"],
    "answer_en": "-41/30",
    "answer_hi": "-41/30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "If (1 + sin A)(1 + sin B)(1 + sin C) = (1 - sin A)(1 - sin B)(1 - sin C), then what is each equal to?",
    "question_hi": "यदि (1 + sin A)(1 + sin B)(1 + sin C) = (1 - sin A)(1 - sin B)(1 - sin C) है, तो प्रत्येक किसके बराबर है?",
    "options_en": ["± cos A cos B cos C", "± sin A sin B sin C", "± tan A tan B tan C", "± 1"],
    "options_hi": ["± cos A cos B cos C", "± sin A sin B sin C", "± tan A tan B tan C", "± 1"],
    "answer_en": "± cos A cos B cos C",
    "answer_hi": "± cos A cos B cos C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If cos θ + sec θ = 2.5, then what is the value of cos²θ + sec²θ?",
    "question_hi": "यदि cos θ + sec θ = 2.5 है, तो cos²θ + sec²θ का मान क्या है?",
    "options_en": ["4.25", "5.25", "6.25", "7.25"],
    "options_hi": ["4.25", "5.25", "6.25", "7.25"],
    "answer_en": "4.25",
    "answer_hi": "4.25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "If tan 2θ = cot (θ + 18°) where 2θ and (θ + 18°) are acute angles, then what is the value of θ?",
    "question_hi": "यदि tan 2θ = cot (θ + 18°) है, जहाँ 2θ और (θ + 18°) न्यून कोण हैं, तो θ का मान क्या है?",
    "options_en": ["18°", "24°", "36°", "54°"],
    "options_hi": ["18°", "24°", "36°", "54°"],
    "answer_en": "24°",
    "answer_hi": "24°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "If sin θ = x/y, then what is the value of tan θ?",
    "question_hi": "यदि sin θ = x/y है, तो tan θ का मान क्या है?",
    "options_en": ["x/√(y² - x²)", "√(y² - x²)/x", "y/√(y² - x²)", "√(y² - x²)/y"],
    "options_hi": ["x/√(y² - x²)", "√(y² - x²)/x", "y/√(y² - x²)", "√(y² - x²)/y"],
    "answer_en": "x/√(y² - x²)",
    "answer_hi": "x/√(y² - x²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "If 2 sin θ - cos θ = 1, then what is the value of 2 cos θ + sin θ?",
    "question_hi": "यदि 2 sin θ - cos θ = 1 है, तो 2 cos θ + sin θ का मान क्या है?",
    "options_en": ["±2", "±1", "±√5", "±√2"],
    "options_hi": ["±2", "±1", "±√5", "±√2"],
    "answer_en": "±2",
    "answer_hi": "±2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If tan θ = b/a, then what is the value of (a sin θ - b cos θ)/(a sin θ + b cos θ)?",
    "question_hi": "यदि tan θ = b/a है, तो (a sin θ - b cos θ)/(a sin θ + b cos θ) का मान क्या है?",
    "options_en": ["(a² - b²)/(a² + b²)", "(b² - a²)/(a² + b²)", "0", "1"],
    "options_hi": ["(a² - b²)/(a² + b²)", "(b² - a²)/(a² + b²)", "0", "1"],
    "answer_en": "(a² - b²)/(a² + b²)",
    "answer_hi": "(a² - b²)/(a² + b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "If sin θ + cos θ = p and sec θ + cosec θ = q, then what is q(p² - 1) equal to?",
    "question_hi": "यदि sin θ + cos θ = p और sec θ + cosec θ = q है, तो q(p² - 1) किसके बराबर है?",
    "options_en": ["2p", "p", "2", "1"],
    "options_hi": ["2p", "p", "2", "1"],
    "answer_en": "2p",
    "answer_hi": "2p",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "If 4 tan θ = 3, then what is the value of (4 sin θ - cos θ)/(4 sin θ + cos θ)?",
    "question_hi": "यदि 4 tan θ = 3 है, तो (4 sin θ - cos θ)/(4 sin θ + cos θ) का मान क्या है?",
    "options_en": ["1/2", "1/3", "2/3", "3/4"],
    "options_hi": ["1/2", "1/3", "2/3", "3/4"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "If cos A + cos²A = 1, then what is the value of sin²A + sin⁴A?",
    "question_hi": "यदि cos A + cos²A = 1 है, तो sin²A + sin⁴A का मान क्या है?",
    "options_en": ["1", "2", "3", "1/2"],
    "options_hi": ["1", "2", "3", "1/2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "If 5 cos θ + 12 sin θ = 13, then what is the value of tan θ?",
    "question_hi": "यदि 5 cos θ + 12 sin θ = 13 है, तो tan θ का मान क्या है?",
    "options_en": ["12/5", "5/12", "13/5", "5/13"],
    "options_hi": ["12/5", "5/12", "13/5", "5/13"],
    "answer_en": "12/5",
    "answer_hi": "12/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If x = a cos θ - b sin θ and y = a sin θ + b cos θ, then what is x² + y² equal to?",
    "question_hi": "यदि x = a cos θ - b sin θ और y = a sin θ + b cos θ है, तो x² + y² किसके बराबर है?",
    "options_en": ["a² + b²", "a² - b²", "ab", "a/b"],
    "options_hi": ["a² + b²", "a² - b²", "ab", "a/b"],
    "answer_en": "a² + b²",
    "answer_hi": "a² + b²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "If sin θ = m/n, then what is the value of tan θ + cot θ?",
    "question_hi": "यदि sin θ = m/n है, तो tan θ + cot θ का मान क्या है?",
    "options_en": ["n²/(m√(n² - m²))", "n/(m√(n² - m²))", "n²/(m(n² - m²))", "1/(m√(n² - m²))"],
    "options_hi": ["n²/(m√(n² - m²))", "n/(m√(n² - m²))", "n²/(m(n² - m²))", "1/(m√(n² - m²))"],
    "answer_en": "n²/(m√(n² - m²))",
    "answer_hi": "n²/(m√(n² - m²))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "If 3 sin θ + 4 cos θ = 5, then what is the value of 4 sin θ - 3 cos θ?",
    "question_hi": "यदि 3 sin θ + 4 cos θ = 5 है, तो 4 sin θ - 3 cos θ का मान क्या है?",
    "options_en": ["0", "±1", "±2", "±3"],
    "options_hi": ["0", "±1", "±2", "±3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If tan θ + sin θ = m and tan θ - sin θ = n, then what is m² - n² equal to?",
    "question_hi": "यदि tan θ + sin θ = m और tan θ - sin θ = n है, तो m² - n² किसके बराबर है?",
    "options_en": ["4√(mn)", "2√(mn)", "√(mn)", "4mn"],
    "options_hi": ["4√(mn)", "2√(mn)", "√(mn)", "4mn"],
    "answer_en": "4√(mn)",
    "answer_hi": "4√(mn)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "If cot θ = 15/8, then what is the value of (2 + 2 sin θ)(1 - sin θ)/((1 + cos θ)(2 - 2 cos θ))?",
    "question_hi": "यदि cot θ = 15/8 है, तो (2 + 2 sin θ)(1 - sin θ)/((1 + cos θ)(2 - 2 cos θ)) का मान क्या है?",
    "options_en": ["64/225", "225/64", "8/17", "17/8"],
    "options_hi": ["64/225", "225/64", "8/17", "17/8"],
    "answer_en": "225/64",
    "answer_hi": "225/64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "If sin θ + cos θ = √3, then what is the value of tan θ + cot θ?",
    "question_hi": "यदि sin θ + cos θ = √3 है, तो tan θ + cot θ का मान क्या है?",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "If sec θ + tan θ = x, then what is the value of sec θ - tan θ?",
    "question_hi": "यदि sec θ + tan θ = x है, तो sec θ - tan θ का मान क्या है?",
    "options_en": ["1/x", "x", "x²", "1/x²"],
    "options_hi": ["1/x", "x", "x²", "1/x²"],
    "answer_en": "1/x",
    "answer_hi": "1/x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If 7 cosec θ - 3 cot θ = 7, then what is the value of 7 cosec θ + 3 cot θ?",
    "question_hi": "यदि 7 cosec θ - 3 cot θ = 7 है, तो 7 cosec θ + 3 cot θ का मान क्या है?",
    "options_en": ["3", "7", "10", "13"],
    "options_hi": ["3", "7", "10", "13"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "If tan²θ = 1 - e², then what is the value of sec θ + tan³θ cosec θ?",
    "question_hi": "यदि tan²θ = 1 - e² है, तो sec θ + tan³θ cosec θ का मान क्या है?",
    "options_en": ["(2 - e²)^(3/2)", "(2 + e²)^(3/2)", "(2 - e²)^(1/2)", "(2 + e²)^(1/2)"],
    "options_hi": ["(2 - e²)^(3/2)", "(2 + e²)^(3/2)", "(2 - e²)^(1/2)", "(2 + e²)^(1/2)"],
    "answer_en": "(2 - e²)^(3/2)",
    "answer_hi": "(2 - e²)^(3/2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If cos θ = 12/13, then what is the value of cot θ?",
    "question_hi": "यदि cos θ = 12/13 है, तो cot θ का मान क्या है?",
    "options_en": ["12/5", "5/12", "13/5", "5/13"],
    "options_hi": ["12/5", "5/12", "13/5", "5/13"],
    "answer_en": "12/5",
    "answer_hi": "12/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "If sin θ - cos θ = 0, then what is the value of sin⁴θ + cos⁴θ?",
    "question_hi": "यदि sin θ - cos θ = 0 है, तो sin⁴θ + cos⁴θ का मान क्या है?",
    "options_en": ["1", "1/2", "1/4", "3/4"],
    "options_hi": ["1", "1/2", "1/4", "3/4"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If x = a cos³θ and y = a sin³θ, then what is (x²)^(2/3) + (y²)^(2/3) equal to?",
    "question_hi": "यदि x = a cos³θ और y = a sin³θ है, तो (x²)^(2/3) + (y²)^(2/3) किसके बराबर है?",
    "options_en": ["a", "a²", "a^(2/3)", "a^(4/3)"],
    "options_hi": ["a", "a²", "a^(2/3)", "a^(4/3)"],
    "answer_en": "a^(4/3)",
    "answer_hi": "a^(4/3)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "If tan A = 1/2 and tan B = 1/3, then what is the value of tan(A + B)?",
    "question_hi": "यदि tan A = 1/2 और tan B = 1/3 है, तो tan(A + B) का मान क्या है?",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "If sin θ = 1/√5 and θ is acute, then what is the value of (tan θ + cot θ)?",
    "question_hi": "यदि sin θ = 1/√5 है और θ न्यून कोण है, तो (tan θ + cot θ) का मान क्या है?",
    "options_en": ["5/2", "2/5", "√5/2", "2/√5"],
    "options_hi": ["5/2", "2/5", "√5/2", "2/√5"],
    "answer_en": "5/2",
    "answer_hi": "5/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "If sin θ + cos θ = √2 cos θ, then what is the value of cot θ?",
    "question_hi": "यदि sin θ + cos θ = √2 cos θ है, तो cot θ का मान क्या है?",
    "options_en": ["√2 + 1", "√2 - 1", "√2", "1"],
    "options_hi": ["√2 + 1", "√2 - 1", "√2", "1"],
    "answer_en": "√2 - 1",
    "answer_hi": "√2 - 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If 2 sin θ - 3 cos θ = 2, then what is the value of 3 sin θ + 2 cos θ?",
    "question_hi": "यदि 2 sin θ - 3 cos θ = 2 है, तो 3 sin θ + 2 cos θ का मान क्या है?",
    "options_en": ["±3", "±4", "±5", "±6"],
    "options_hi": ["±3", "±4", "±5", "±6"],
    "answer_en": "±3",
    "answer_hi": "±3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "If sec θ + tan θ = p, then what is the value of sin θ?",
    "question_hi": "यदि sec θ + tan θ = p है, तो sin θ का मान क्या है?",
    "options_en": ["(p² - 1)/(p² + 1)", "(p² + 1)/(p² - 1)", "2p/(p² + 1)", "(p² - 1)/2p"],
    "options_hi": ["(p² - 1)/(p² + 1)", "(p² + 1)/(p² - 1)", "2p/(p² + 1)", "(p² - 1)/2p"],
    "answer_en": "(p² - 1)/(p² + 1)",
    "answer_hi": "(p² - 1)/(p² + 1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If cos θ + sin θ = √2 cos θ, then what is cos θ - sin θ equal to?",
    "question_hi": "यदि cos θ + sin θ = √2 cos θ है, तो cos θ - sin θ किसके बराबर है?",
    "options_en": ["√2 sin θ", "-√2 sin θ", "√2 cos θ", "-√2 cos θ"],
    "options_hi": ["√2 sin θ", "-√2 sin θ", "√2 cos θ", "-√2 cos θ"],
    "answer_en": "√2 sin θ",
    "answer_hi": "√2 sin θ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "If tan θ + cot θ = 5, then what is the value of tan²θ + cot²θ?",
    "question_hi": "यदि tan θ + cot θ = 5 है, तो tan²θ + cot²θ का मान क्या है?",
    "options_en": ["23", "25", "27", "29"],
    "options_hi": ["23", "25", "27", "29"],
    "answer_en": "23",
    "answer_hi": "23",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "If x = sec θ + tan θ and y = sec θ - tan θ, then what is xy equal to?",
    "question_hi": "यदि x = sec θ + tan θ और y = sec θ - tan θ है, तो xy किसके बराबर है?",
    "options_en": ["0", "1", "2", "sin θ"],
    "options_hi": ["0", "1", "2", "sin θ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "If sin θ + sin²θ = 1, then what is cos²θ + cos⁴θ equal to?",
    "question_hi": "यदि sin θ + sin²θ = 1 है, तो cos²θ + cos⁴θ किसके बराबर है?",
    "options_en": ["1", "sin θ", "cos θ", "tan θ"],
    "options_hi": ["1", "sin θ", "cos θ", "tan θ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "If 3 tan θ = 4, then what is the value of (3 sin θ + 2 cos θ)/(3 sin θ - 2 cos θ)?",
    "question_hi": "यदि 3 tan θ = 4 है, तो (3 sin θ + 2 cos θ)/(3 sin θ - 2 cos θ) का मान क्या है?",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "If sin θ = a/√(a² + b²), then what is the value of tan θ?",
    "question_hi": "यदि sin θ = a/√(a² + b²) है, तो tan θ का मान क्या है?",
    "options_en": ["a/b", "b/a", "a/√(a² - b²)", "b/√(a² - b²)"],
    "options_hi": ["a/b", "b/a", "a/√(a² - b²)", "b/√(a² - b²)"],
    "answer_en": "a/b",
    "answer_hi": "a/b",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "If cos θ + sin θ = √2, then what is the value of sec θ + cosec θ?",
    "question_hi": "यदि cos θ + sin θ = √2 है, तो sec θ + cosec θ का मान क्या है?",
    "options_en": ["2", "2√2", "√2", "1/√2"],
    "options_hi": ["2", "2√2", "√2", "1/√2"],
    "answer_en": "2√2",
    "answer_hi": "2√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "If tan θ = 1/√7, then what is the value of (cosec²θ - sec²θ)/(cosec²θ + sec²θ)?",
    "question_hi": "यदि tan θ = 1/√7 है, तो (cosec²θ - sec²θ)/(cosec²θ + sec²θ) का मान क्या है?",
    "options_en": ["3/4", "4/3", "-3/4", "-4/3"],
    "options_hi": ["3/4", "4/3", "-3/4", "-4/3"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "If sin θ + cos θ = p and sec θ + cosec θ = q, then what is q(p² - 1) equal to?",
    "question_hi": "यदि sin θ + cos θ = p और sec θ + cosec θ = q है, तो q(p² - 1) किसके बराबर है?",
    "options_en": ["p", "2p", "p²", "2"],
    "options_hi": ["p", "2p", "p²", "2"],
    "answer_en": "2p",
    "answer_hi": "2p",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "If 4 tan θ = 3, then what is the value of (4 sin θ - cos θ + 1)/(4 sin θ + cos θ - 1)?",
    "question_hi": "यदि 4 tan θ = 3 है, तो (4 sin θ - cos θ + 1)/(4 sin θ + cos θ - 1) का मान क्या है?",
    "options_en": ["1/3", "2/3", "3/2", "3"],
    "options_hi": ["1/3", "2/3", "3/2", "3"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "If sin θ + cos θ = m and sec θ + cosec θ = n, then what is n(m² - 1) equal to?",
    "question_hi": "यदि sin θ + cos θ = m और sec θ + cosec θ = n है, तो n(m² - 1) किसके बराबर है?",
    "options_en": ["m", "2m", "m²", "2"],
    "options_hi": ["m", "2m", "m²", "2"],
    "answer_en": "2m",
    "answer_hi": "2m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "If tan θ = 1, then what is the value of (sin θ + cos θ)/(sec θ + cosec θ)?",
    "question_hi": "यदि tan θ = 1 है, तो (sin θ + cos θ)/(sec θ + cosec θ) का मान क्या है?",
    "options_en": ["1/√2", "√2", "1/2", "2"],
    "options_hi": ["1/√2", "√2", "1/2", "2"],
    "answer_en": "1/√2",
    "answer_hi": "1/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "If x = a sec θ cos φ, y = b sec θ sin φ, z = c tan θ, then what is x²/a² + y²/b² - z²/c² equal to?",
    "question_hi": "यदि x = a sec θ cos φ, y = b sec θ sin φ, z = c tan θ है, तो x²/a² + y²/b² - z²/c² किसके बराबर है?",
    "options_en": ["0", "1", "2", "tan²θ"],
    "options_hi": ["0", "1", "2", "tan²θ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "If sin θ = 3/5 and θ is in quadrant II, what is the value of tan θ?",
    "question_hi": "यदि sin θ = 3/5 है और θ द्वितीय चतुर्थांश में है, तो tan θ का मान क्या है?",
    "options_en": ["-3/4", "3/4", "-4/3", "4/3"],
    "options_hi": ["-3/4", "3/4", "-4/3", "4/3"],
    "answer_en": "-3/4",
    "answer_hi": "-3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "If cos θ = 1/2 and θ is in quadrant IV, what is the value of sin θ?",
    "question_hi": "यदि cos θ = 1/2 है और θ चतुर्थ चतुर्थांश में है, तो sin θ का मान क्या है?",
    "options_en": ["√3/2", "-√3/2", "1/2", "-1/2"],
    "options_hi": ["√3/2", "-√3/2", "1/2", "-1/2"],
    "answer_en": "-√3/2",
    "answer_hi": "-√3/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "If tan θ = -1 and θ is in quadrant II, what is the value of sin θ?",
    "question_hi": "यदि tan θ = -1 है और θ द्वितीय चतुर्थांश में है, तो sin θ का मान क्या है?",
    "options_en": ["1/√2", "-1/√2", "√2", "-√2"],
    "options_hi": ["1/√2", "-1/√2", "√2", "-√2"],
    "answer_en": "1/√2",
    "answer_hi": "1/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "If 2 sin θ = √3 and θ is acute, what is the value of θ?",
    "question_hi": "यदि 2 sin θ = √3 है और θ न्यून कोण है, तो θ का मान क्या है?",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "60°",
    "answer_hi": "60°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "If √3 tan θ = 1 and θ is acute, what is the value of sin θ - cos θ?",
    "question_hi": "यदि √3 tan θ = 1 है और θ न्यून कोण है, तो sin θ - cos θ का मान क्या है?",
    "options_en": ["(√3 - 1)/2", "(1 - √3)/2", "0", "1"],
    "options_hi": ["(√3 - 1)/2", "(1 - √3)/2", "0", "1"],
    "answer_en": "(1 - √3)/2",
    "answer_hi": "(1 - √3)/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "If sin θ + cos θ = √2 sin(90° - θ), what is tan θ?",
    "question_hi": "यदि sin θ + cos θ = √2 sin(90° - θ) है, तो tan θ क्या है?",
    "options_en": ["√2 - 1", "√2 + 1", "1", "√2"],
    "options_hi": ["√2 - 1", "√2 + 1", "1", "√2"],
    "answer_en": "√2 - 1",
    "answer_hi": "√2 - 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "If 5 cos θ + 12 sin θ = 13, what is sin θ?",
    "question_hi": "यदि 5 cos θ + 12 sin θ = 13 है, तो sin θ क्या है?",
    "options_en": ["12/13", "5/13", "13/12", "13/5"],
    "options_hi": ["12/13", "5/13", "13/12", "13/5"],
    "answer_en": "12/13",
    "answer_hi": "12/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "If tan θ + cot θ = 2, what is tan²θ + cot²θ?",
    "question_hi": "यदि tan θ + cot θ = 2 है, तो tan²θ + cot²θ क्या है?",
    "options_en": ["2", "4", "6", "8"],
    "options_hi": ["2", "4", "6", "8"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "If sec θ + tan θ = p, what is sec θ - tan θ?",
    "question_hi": "यदि sec θ + tan θ = p है, तो sec θ - tan θ क्या है?",
    "options_en": ["1/p", "p", "p²", "1/p²"],
    "options_hi": ["1/p", "p", "p²", "1/p²"],
    "answer_en": "1/p",
    "answer_hi": "1/p",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "If sin θ = 1/3, what is the value of (3 sin θ - 4 sin³θ)?",
    "question_hi": "यदि sin θ = 1/3 है, तो (3 sin θ - 4 sin³θ) का मान क्या है?",
    "options_en": ["23/27", "25/27", "1/3", "1"],
    "options_hi": ["23/27", "25/27", "1/3", "1"],
    "answer_en": "23/27",
    "answer_hi": "23/27",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "If cos θ = 2/3, what is the value of (4 cos³θ - 3 cos θ)?",
    "question_hi": "यदि cos θ = 2/3 है, तो (4 cos³θ - 3 cos θ) का मान क्या है?",
    "options_en": ["-46/27", "-38/27", "38/27", "46/27"],
    "options_hi": ["-46/27", "-38/27", "38/27", "46/27"],
    "answer_en": "-46/27",
    "answer_hi": "-46/27",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "If sin θ + sin²θ = 1, what is cos²θ + cos⁴θ?",
    "question_hi": "यदि sin θ + sin²θ = 1 है, तो cos²θ + cos⁴θ क्या है?",
    "options_en": ["1", "sin θ", "cos θ", "tan θ"],
    "options_hi": ["1", "sin θ", "cos θ", "tan θ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "If tan θ = √5, what is sec θ?",
    "question_hi": "यदि tan θ = √5 है, तो sec θ क्या है?",
    "options_en": ["√6", "√5", "√5/√6", "√6/√5"],
    "options_hi": ["√6", "√5", "√5/√6", "√6/√5"],
    "answer_en": "√6",
    "answer_hi": "√6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "If sin θ = 0.6 and θ is acute, what is tan θ?",
    "question_hi": "यदि sin θ = 0.6 है और θ न्यून कोण है, तो tan θ क्या है?",
    "options_en": ["0.75", "1.33", "0.8", "1.25"],
    "options_hi": ["0.75", "1.33", "0.8", "1.25"],
    "answer_en": "0.75",
    "answer_hi": "0.75",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "If 2 cos θ = √3, what is θ?",
    "question_hi": "यदि 2 cos θ = √3 है, तो θ क्या है?",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "30°",
    "answer_hi": "30°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "If tan θ = 2 + √3, what is cot θ?",
    "question_hi": "यदि tan θ = 2 + √3 है, तो cot θ क्या है?",
    "options_en": ["2 - √3", "2 + √3", "√3 - 2", "1/(2 + √3)"],
    "options_hi": ["2 - √3", "2 + √3", "√3 - 2", "1/(2 + √3)"],
    "answer_en": "2 - √3",
    "answer_hi": "2 - √3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "If sin θ = cos θ, what is 2 tan²θ + sin²θ - 1?",
    "question_hi": "यदि sin θ = cos θ है, तो 2 tan²θ + sin²θ - 1 क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "If sec θ + tan θ = 3, what is sin θ?",
    "question_hi": "यदि sec θ + tan θ = 3 है, तो sin θ क्या है?",
    "options_en": ["4/5", "3/5", "2/5", "1/5"],
    "options_hi": ["4/5", "3/5", "2/5", "1/5"],
    "answer_en": "4/5",
    "answer_hi": "4/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "If 3 sin θ + 4 cos θ = 5, what is 4 sin θ - 3 cos θ?",
    "question_hi": "यदि 3 sin θ + 4 cos θ = 5 है, तो 4 sin θ - 3 cos θ क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "If tan θ + cot θ = 4, what is tan³θ + cot³θ?",
    "question_hi": "यदि tan θ + cot θ = 4 है, तो tan³θ + cot³θ क्या है?",
    "options_en": ["52", "64", "76", "88"],
    "options_hi": ["52", "64", "76", "88"],
    "answer_en": "52",
    "answer_hi": "52",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "If sin θ = 1/√10 and cos θ = 3/√10, what is tan θ?",
    "question_hi": "यदि sin θ = 1/√10 और cos θ = 3/√10 है, तो tan θ क्या है?",
    "options_en": ["1/3", "3", "1/√10", "3/√10"],
    "options_hi": ["1/3", "3", "1/√10", "3/√10"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "If cosec θ - cot θ = 1/3, what is cosec θ + cot θ?",
    "question_hi": "यदि cosec θ - cot θ = 1/3 है, तो cosec θ + cot θ क्या है?",
    "options_en": ["3", "1/3", "9", "1/9"],
    "options_hi": ["3", "1/3", "9", "1/9"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "If 7 sin²θ + 3 cos²θ = 4, what is tan θ?",
    "question_hi": "यदि 7 sin²θ + 3 cos²θ = 4 है, तो tan θ क्या है?",
    "options_en": ["1/√3", "√3", "1", "√3/2"],
    "options_hi": ["1/√3", "√3", "1", "√3/2"],
    "answer_en": "1/√3",
    "answer_hi": "1/√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "If tan θ = 2, what is (sin θ + cos θ)/(sin θ - cos θ)?",
    "question_hi": "यदि tan θ = 2 है, तो (sin θ + cos θ)/(sin θ - cos θ) क्या है?",
    "options_en": ["3", "-3", "1/3", "-1/3"],
    "options_hi": ["3", "-3", "1/3", "-1/3"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "If sin θ + cos θ = 1, what is sin θ cos θ?",
    "question_hi": "यदि sin θ + cos θ = 1 है, तो sin θ cos θ क्या है?",
    "options_en": ["0", "1", "1/2", "1/4"],
    "options_hi": ["0", "1", "1/2", "1/4"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "If sec θ + tan θ = 2, what is sec θ?",
    "question_hi": "यदि sec θ + tan θ = 2 है, तो sec θ क्या है?",
    "options_en": ["5/4", "4/5", "3/5", "5/3"],
    "options_hi": ["5/4", "4/5", "3/5", "5/3"],
    "answer_en": "5/4",
    "answer_hi": "5/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "If cos θ = 0.28, what is sin θ?",
    "question_hi": "यदि cos θ = 0.28 है, तो sin θ क्या है?",
    "options_en": ["0.96", "0.86", "0.76", "0.66"],
    "options_hi": ["0.96", "0.86", "0.76", "0.66"],
    "answer_en": "0.96",
    "answer_hi": "0.96",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "If sin θ = 3 sin(θ + 2α), what is tan(θ + α)?",
    "question_hi": "यदि sin θ = 3 sin(θ + 2α) है, तो tan(θ + α) क्या है?",
    "options_en": ["2 tan α", "-2 tan α", "tan α", "-tan α"],
    "options_hi": ["2 tan α", "-2 tan α", "tan α", "-tan α"],
    "answer_en": "-2 tan α",
    "answer_hi": "-2 tan α",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "If tan θ = 1/√5, what is (cos²θ - sin²θ)/(cos²θ + sin²θ)?",
    "question_hi": "यदि tan θ = 1/√5 है, तो (cos²θ - sin²θ)/(cos²θ + sin²θ) क्या है?",
    "options_en": ["2/3", "3/2", "1/3", "3"],
    "options_hi": ["2/3", "3/2", "1/3", "3"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "If sin θ + cos θ = √2, what is tan θ + cot θ?",
    "question_hi": "यदि sin θ + cos θ = √2 है, तो tan θ + cot θ क्या है?",
    "options_en": ["1", "2", "√2", "1/√2"],
    "options_hi": ["1", "2", "√2", "1/√2"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "If a cos θ + b sin θ = m and a sin θ - b cos θ = n, what is a² + b²?",
    "question_hi": "यदि a cos θ + b sin θ = m और a sin θ - b cos θ = n है, तो a² + b² क्या है?",
    "options_en": ["m² + n²", "m² - n²", "n² - m²", "mn"],
    "options_hi": ["m² + n²", "m² - n²", "n² - m²", "mn"],
    "answer_en": "m² + n²",
    "answer_hi": "m² + n²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "If sin θ = 2t/(1 + t²), what is cos θ?",
    "question_hi": "यदि sin θ = 2t/(1 + t²) है, तो cos θ क्या है?",
    "options_en": ["(1 - t²)/(1 + t²)", "(1 + t²)/(1 - t²)", "2t/(1 - t²)", "(1 - t²)/2t"],
    "options_hi": ["(1 - t²)/(1 + t²)", "(1 + t²)/(1 - t²)", "2t/(1 - t²)", "(1 - t²)/2t"],
    "answer_en": "(1 - t²)/(1 + t²)",
    "answer_hi": "(1 - t²)/(1 + t²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "If tan A = 1/7 and sin B = 1/√10, what is A + B?",
    "question_hi": "यदि tan A = 1/7 और sin B = 1/√10 है, तो A + B क्या है?",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "45°",
    "answer_hi": "45°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "If cos θ + sin θ = √2 cos θ, what is cos θ - sin θ?",
    "question_hi": "यदि cos θ + sin θ = √2 cos θ है, तो cos θ - sin θ क्या है?",
    "options_en": ["√2 sin θ", "-√2 sin θ", "√2 cos θ", "-√2 cos θ"],
    "options_hi": ["√2 sin θ", "-√2 sin θ", "√2 cos θ", "-√2 cos θ"],
    "answer_en": "√2 sin θ",
    "answer_hi": "√2 sin θ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "If x = sin θ + cos θ and y = sec θ + cosec θ, what is y?",
    "question_hi": "यदि x = sin θ + cos θ और y = sec θ + cosec θ है, तो y क्या है?",
    "options_en": ["x/(x² - 1)", "2x/(x² - 1)", "x/(1 - x²)", "2x/(1 - x²)"],
    "options_hi": ["x/(x² - 1)", "2x/(x² - 1)", "x/(1 - x²)", "2x/(1 - x²)"],
    "answer_en": "2x/(x² - 1)",
    "answer_hi": "2x/(x² - 1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "If tan θ = b/a, what is a cos 2θ + b sin 2θ?",
    "question_hi": "यदि tan θ = b/a है, तो a cos 2θ + b sin 2θ क्या है?",
    "options_en": ["a", "b", "a - b", "a + b"],
    "options_hi": ["a", "b", "a - b", "a + b"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "If sin θ + cosec θ = 2, what is sin²θ + cosec²θ?",
    "question_hi": "यदि sin θ + cosec θ = 2 है, तो sin²θ + cosec²θ क्या है?",
    "options_en": ["2", "4", "6", "8"],
    "options_hi": ["2", "4", "6", "8"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "If cos θ = 0.6, what is tan θ?",
    "question_hi": "यदि cos θ = 0.6 है, तो tan θ क्या है?",
    "options_en": ["4/3", "3/4", "5/4", "4/5"],
    "options_hi": ["4/3", "3/4", "5/4", "4/5"],
    "answer_en": "4/3",
    "answer_hi": "4/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "If sin θ + cos θ = 1.2, what is sin θ cos θ?",
    "question_hi": "यदि sin θ + cos θ = 1.2 है, तो sin θ cos θ क्या है?",
    "options_en": ["0.11", "0.22", "0.33", "0.44"],
    "options_hi": ["0.11", "0.22", "0.33", "0.44"],
    "answer_en": "0.22",
    "answer_hi": "0.22",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "If tan θ + cot θ = 6, what is tan²θ + cot²θ?",
    "question_hi": "यदि tan θ + cot θ = 6 है, तो tan²θ + cot²θ क्या है?",
    "options_en": ["34", "36", "38", "40"],
    "options_hi": ["34", "36", "38", "40"],
    "answer_en": "34",
    "answer_hi": "34",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "If 4 tan θ = 3, what is (4 sin θ - cos θ)/(4 sin θ + cos θ)?",
    "question_hi": "यदि 4 tan θ = 3 है, तो (4 sin θ - cos θ)/(4 sin θ + cos θ) क्या है?",
    "options_en": ["1/2", "1/3", "2/3", "3/4"],
    "options_hi": ["1/2", "1/3", "2/3", "3/4"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
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