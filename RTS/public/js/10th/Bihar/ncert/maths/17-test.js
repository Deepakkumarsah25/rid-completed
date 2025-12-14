const questions= [
  {
    "num": 1,
    "question_en": "If sinθ = 12/13 and θ is acute, find cosθ.",
    "question_hi": "यदि sinθ = 12/13 है और θ न्यून कोण है, तो cosθ ज्ञात कीजिए।",
    "options_en": ["5/13", "13/5", "12/5", "5/12"],
    "options_hi": ["5/13", "13/5", "12/5", "5/12"],
    "answer_en": "5/13",
    "answer_hi": "5/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "If tanθ = 5/12, find sinθ and cosθ.",
    "question_hi": "यदि tanθ = 5/12 है, तो sinθ और cosθ ज्ञात कीजिए।",
    "options_en": ["sinθ=5/13, cosθ=12/13", "sinθ=12/13, cosθ=5/13", "sinθ=5/12, cosθ=12/5", "sinθ=1, cosθ=12/13"],
    "options_hi": ["sinθ=5/13, cosθ=12/13", "sinθ=12/13, cosθ=5/13", "sinθ=5/12, cosθ=12/5", "sinθ=1, cosθ=12/13"],
    "answer_en": "sinθ=5/13, cosθ=12/13",
    "answer_hi": "sinθ=5/13, cosθ=12/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Simplify: (1 + tan²θ)cos²θ",
    "question_hi": "सरल कीजिए: (1 + tan²θ)cos²θ",
    "options_en": ["1", "sin²θ", "cos²θ", "tan²θ"],
    "options_hi": ["1", "sin²θ", "cos²θ", "tan²θ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If sinθ = 3/5, find the value of (tanθ + cotθ).",
    "question_hi": "यदि sinθ = 3/5 है, तो (tanθ + cotθ) का मान ज्ञात कीजिए।",
    "options_en": ["25/12", "12/25", "5/4", "4/5"],
    "options_hi": ["25/12", "12/25", "5/4", "4/5"],
    "answer_en": "25/12",
    "answer_hi": "25/12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Prove: (sinθ + cosecθ)² + (cosθ + secθ)² = 7 + tan²θ + cot²θ",
    "question_hi": "सिद्ध कीजिए: (sinθ + cosecθ)² + (cosθ + secθ)² = 7 + tan²θ + cot²θ",
    "options_en": ["True", "False", "Depends on θ", "Cannot be determined"],
    "options_hi": ["सत्य", "असत्य", "θ पर निर्भर", "निर्धारित नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If 7sin²θ + 3cos²θ = 4, find tanθ.",
    "question_hi": "यदि 7sin²θ + 3cos²θ = 4 है, तो tanθ ज्ञात कीजिए।",
    "options_en": ["1/√3", "√3", "1", "1/2"],
    "options_hi": ["1/√3", "√3", "1", "1/2"],
    "answer_en": "1/√3",
    "answer_hi": "1/√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Evaluate: sin25°cos65° + cos25°sin65°",
    "question_hi": "मान ज्ञात कीजिए: sin25°cos65° + cos25°sin65°",
    "options_en": ["1", "0", "1/2", "√3/2"],
    "options_hi": ["1", "0", "1/2", "√3/2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If tanθ + cotθ = 2, find sinθ.",
    "question_hi": "यदि tanθ + cotθ = 2 है, तो sinθ ज्ञात कीजिए।",
    "options_en": ["1", "1/√2", "√3/2", "1/2"],
    "options_hi": ["1", "1/√2", "√3/2", "1/2"],
    "answer_en": "1/√2",
    "answer_hi": "1/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Simplify: (secA + tanA)(1 - sinA)",
    "question_hi": "सरल कीजिए: (secA + tanA)(1 - sinA)",
    "options_en": ["cosA", "sinA", "tanA", "cotA"],
    "options_hi": ["cosA", "sinA", "tanA", "cotA"],
    "answer_en": "cosA",
    "answer_hi": "cosA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "If sinθ - cosθ = 0, find the value of sin⁴θ + cos⁴θ.",
    "question_hi": "यदि sinθ - cosθ = 0 है, तो sin⁴θ + cos⁴θ का मान ज्ञात कीजिए।",
    "options_en": ["1/2", "1", "1/4", "3/4"],
    "options_hi": ["1/2", "1", "1/4", "3/4"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Prove: √(1+sinθ)/(1-sinθ) = secθ + tanθ",
    "question_hi": "सिद्ध कीजिए: √(1+sinθ)/(1-sinθ) = secθ + tanθ",
    "options_en": ["True", "False", "Sometimes true", "Cannot prove"],
    "options_hi": ["सत्य", "असत्य", "कभी-कभी सत्य", "सिद्ध नहीं कर सकते"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "If 3tanθ = 4, find (3sinθ + 2cosθ)/(3sinθ - 2cosθ)",
    "question_hi": "यदि 3tanθ = 4 है, तो (3sinθ + 2cosθ)/(3sinθ - 2cosθ) ज्ञात कीजिए।",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Evaluate: tan1° tan2° tan3° ... tan89°",
    "question_hi": "मान ज्ञात कीजिए: tan1° tan2° tan3° ... tan89°",
    "options_en": ["0", "1", "√3", "Not defined"],
    "options_hi": ["0", "1", "√3", "परिभाषित नहीं"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If cosθ = 0.6, find 5sinθ - 3tanθ",
    "question_hi": "यदि cosθ = 0.6 है, तो 5sinθ - 3tanθ ज्ञात कीजिए।",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Simplify: (cosecθ - sinθ)(secθ - cosθ)(tanθ + cotθ)",
    "question_hi": "सरल कीजिए: (cosecθ - sinθ)(secθ - cosθ)(tanθ + cotθ)",
    "options_en": ["0", "1", "sinθ", "cosθ"],
    "options_hi": ["0", "1", "sinθ", "cosθ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "If tanθ = √3, find the value of (sinθ + cosθ)/(sinθ - cosθ)",
    "question_hi": "यदि tanθ = √3 है, तो (sinθ + cosθ)/(sinθ - cosθ) का मान ज्ञात कीजिए।",
    "options_en": ["2+√3", "2-√3", "√3+1", "√3-1"],
    "options_hi": ["2+√3", "2-√3", "√3+1", "√3-1"],
    "answer_en": "2+√3",
    "answer_hi": "2+√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Prove: (1+cotθ-cosecθ)(1+tanθ+secθ) = 2",
    "question_hi": "सिद्ध कीजिए: (1+cotθ-cosecθ)(1+tanθ+secθ) = 2",
    "options_en": ["True", "False", "Depends on θ", "None"],
    "options_hi": ["सत्य", "असत्य", "θ पर निर्भर", "कोई नहीं"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "If sinθ + cosθ = √2, find tanθ + cotθ",
    "question_hi": "यदि sinθ + cosθ = √2 है, तो tanθ + cotθ ज्ञात कीजिए।",
    "options_en": ["1", "2", "√2", "0"],
    "options_hi": ["1", "2", "√2", "0"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Evaluate: cos38°cos52° - sin38°sin52°",
    "question_hi": "मान ज्ञात कीजिए: cos38°cos52° - sin38°sin52°",
    "options_en": ["0", "1", "1/2", "√3/2"],
    "options_hi": ["0", "1", "1/2", "√3/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "If x = r sinθ cosφ, y = r sinθ sinφ, z = r cosθ, find x² + y² + z²",
    "question_hi": "यदि x = r sinθ cosφ, y = r sinθ sinφ, z = r cosθ है, तो x² + y² + z² ज्ञात कीजिए।",
    "options_en": ["r", "r²", "r³", "1"],
    "options_hi": ["r", "r²", "r³", "1"],
    "answer_en": "r²",
    "answer_hi": "r²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Simplify: (1 - sinθ + cosθ)² + (1 + sinθ - cosθ)²",
    "question_hi": "सरल कीजिए: (1 - sinθ + cosθ)² + (1 + sinθ - cosθ)²",
    "options_en": ["4(1 - sinθcosθ)", "4", "2(1 + sinθcosθ)", "2"],
    "options_hi": ["4(1 - sinθcosθ)", "4", "2(1 + sinθcosθ)", "2"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "If tanθ = 1/√7, find (cosec²θ - sec²θ)/(cosec²θ + sec²θ)",
    "question_hi": "यदि tanθ = 1/√7 है, तो (cosec²θ - sec²θ)/(cosec²θ + sec²θ) ज्ञात कीजिए।",
    "options_en": ["3/4", "4/3", "1/2", "2/3"],
    "options_hi": ["3/4", "4/3", "1/2", "2/3"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Prove: tanA/(1 - cotA) + cotA/(1 - tanA) = 1 + secA cosecA",
    "question_hi": "सिद्ध कीजिए: tanA/(1 - cotA) + cotA/(1 - tanA) = 1 + secA cosecA",
    "options_en": ["True", "False", "Sometimes", "Never true"],
    "options_hi": ["सत्य", "असत्य", "कभी-कभी", "कभी सत्य नहीं"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "If cosθ + sinθ = √2 cosθ, prove that cosθ - sinθ = √2 sinθ",
    "question_hi": "यदि cosθ + sinθ = √2 cosθ है, तो सिद्ध कीजिए कि cosθ - sinθ = √2 sinθ",
    "options_en": ["True", "False", "Can't prove", "Depends on θ"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "θ पर निर्भर"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Evaluate: sin²5° + sin²10° + sin²15° + ... + sin²85°",
    "question_hi": "मान ज्ञात कीजिए: sin²5° + sin²10° + sin²15° + ... + sin²85°",
    "options_en": ["8.5", "9", "9.5", "10"],
    "options_hi": ["8.5", "9", "9.5", "10"],
    "answer_en": "9",
    "answer_hi": "9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "If 5tanθ = 4, find (5sinθ - 3cosθ)/(5sinθ + 2cosθ)",
    "question_hi": "यदि 5tanθ = 4 है, तो (5sinθ - 3cosθ)/(5sinθ + 2cosθ) ज्ञात कीजिए।",
    "options_en": ["1/6", "2/7", "3/8", "4/9"],
    "options_hi": ["1/6", "2/7", "3/8", "4/9"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Simplify: (sinθ + cosθ)² + (sinθ - cosθ)²",
    "question_hi": "सरल कीजिए: (sinθ + cosθ)² + (sinθ - cosθ)²",
    "options_en": ["2", "2(sin²θ + cos²θ)", "2", "Both B and C"],
    "options_hi": ["2", "2(sin²θ + cos²θ)", "2", "B और C दोनों"],
    "answer_en": "Both B and C",
    "answer_hi": "B और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "If cotθ = 7/8, evaluate: (1+sinθ)(1-sinθ)/(1+cosθ)(1-cosθ)",
    "question_hi": "यदि cotθ = 7/8 है, तो मूल्यांकन करें: (1+sinθ)(1-sinθ)/(1+cosθ)(1-cosθ)",
    "options_en": ["49/64", "64/49", "7/8", "8/7"],
    "options_hi": ["49/64", "64/49", "7/8", "8/7"],
    "answer_en": "49/64",
    "answer_hi": "49/64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Prove: (cosecA - sinA)(secA - cosA) = 1/(tanA + cotA)",
    "question_hi": "सिद्ध कीजिए: (cosecA - sinA)(secA - cosA) = 1/(tanA + cotA)",
    "options_en": ["True", "False", "Can't prove", "Only for acute angles"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल न्यून कोणों के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If sinθ + cosθ = p and secθ + cosecθ = q, show that q(p² - 1) = 2p",
    "question_hi": "यदि sinθ + cosθ = p और secθ + cosecθ = q है, तो दर्शाइए कि q(p² - 1) = 2p",
    "options_en": ["True", "False", "Can't show", "Only for p>0"],
    "options_hi": ["सत्य", "असत्य", "दर्शा नहीं सकते", "केवल p>0 के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Evaluate: tan48° tan23° tan42° tan67°",
    "question_hi": "मान ज्ञात कीजिए: tan48° tan23° tan42° tan67°",
    "options_en": ["0", "1", "√3", "2"],
    "options_hi": ["0", "1", "√3", "2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "If sinθ = a/√(a²+b²), find tanθ",
    "question_hi": "यदि sinθ = a/√(a²+b²) है, तो tanθ ज्ञात कीजिए।",
    "options_en": ["a/b", "b/a", "√(a²+b²)/a", "√(a²+b²)/b"],
    "options_hi": ["a/b", "b/a", "√(a²+b²)/a", "√(a²+b²)/b"],
    "answer_en": "a/b",
    "answer_hi": "a/b",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Simplify: (tanθ + secθ - 1)/(tanθ - secθ + 1)",
    "question_hi": "सरल कीजिए: (tanθ + secθ - 1)/(tanθ - secθ + 1)",
    "options_en": ["(1+sinθ)/cosθ", "(1+cosθ)/sinθ", "tanθ+secθ", "cotθ+cosecθ"],
    "options_hi": ["(1+sinθ)/cosθ", "(1+cosθ)/sinθ", "tanθ+secθ", "cotθ+cosecθ"],
    "answer_en": "(1+sinθ)/cosθ",
    "answer_hi": "(1+sinθ)/cosθ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "If x = asecθ + btanθ and y = atanθ + bsecθ, prove that x² - y² = a² - b²",
    "question_hi": "यदि x = asecθ + btanθ और y = atanθ + bsecθ है, तो सिद्ध कीजिए कि x² - y² = a² - b²",
    "options_en": ["True", "False", "Can't prove", "Only for a>b"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल a>b के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Evaluate: cos20° cos40° cos60° cos80°",
    "question_hi": "मान ज्ञात कीजिए: cos20° cos40° cos60° cos80°",
    "options_en": ["1/8", "1/16", "1/32", "1/64"],
    "options_hi": ["1/8", "1/16", "1/32", "1/64"],
    "answer_en": "1/16",
    "answer_hi": "1/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "If tanθ + sinθ = m and tanθ - sinθ = n, prove that m² - n² = 4√(mn)",
    "question_hi": "यदि tanθ + sinθ = m और tanθ - sinθ = n है, तो सिद्ध कीजिए कि m² - n² = 4√(mn)",
    "options_en": ["True", "False", "Can't prove", "Only for positive m,n"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल धनात्मक m,n के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If 2sinθ = √3, find the value of θ (0° ≤ θ ≤ 90°)",
    "question_hi": "यदि 2sinθ = √3 है, तो θ का मान ज्ञात कीजिए (0° ≤ θ ≤ 90°)",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "60°",
    "answer_hi": "60°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Simplify: sin⁶θ + cos⁶θ + 3sin²θcos²θ",
    "question_hi": "सरल कीजिए: sin⁶θ + cos⁶θ + 3sin²θcos²θ",
    "options_en": ["0", "1", "sin²θ+cos²θ", "sinθ+cosθ"],
    "options_hi": ["0", "1", "sin²θ+cos²θ", "sinθ+cosθ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If secθ + tanθ = p, find sinθ in terms of p",
    "question_hi": "यदि secθ + tanθ = p है, तो sinθ को p के पदों में व्यक्त कीजिए।",
    "options_en": ["(p²-1)/(p²+1)", "(p²+1)/(p²-1)", "(2p)/(p²+1)", "(p²-1)/(2p)"],
    "options_hi": ["(p²-1)/(p²+1)", "(p²+1)/(p²-1)", "(2p)/(p²+1)", "(p²-1)/(2p)"],
    "answer_en": "(p²-1)/(p²+1)",
    "answer_hi": "(p²-1)/(p²+1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Prove: (1+secA)/secA = sin²A/(1-cosA)",
    "question_hi": "सिद्ध कीजिए: (1+secA)/secA = sin²A/(1-cosA)",
    "options_en": ["True", "False", "Can't prove", "Only for A≠0"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल A≠0 के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If √3 tanθ = 3sinθ, find sin²θ - cos²θ",
    "question_hi": "यदि √3 tanθ = 3sinθ है, तो sin²θ - cos²θ ज्ञात कीजिए।",
    "options_en": ["1/3", "2/3", "1/2", "1/4"],
    "options_hi": ["1/3", "2/3", "1/2", "1/4"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Evaluate: (sin70°/cos20°) + (cosec20°/sec70°) - 2cos70°cosec20°",
    "question_hi": "मान ज्ञात कीजिए: (sin70°/cos20°) + (cosec20°/sec70°) - 2cos70°cosec20°",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "If sinθ + sin²θ = 1, find cos²θ + cos⁴θ",
    "question_hi": "यदि sinθ + sin²θ = 1 है, तो cos²θ + cos⁴θ ज्ञात कीजिए।",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Prove: (tanA + tanB)/(cotA + cotB) = tanA tanB",
    "question_hi": "सिद्ध कीजिए: (tanA + tanB)/(cotA + cotB) = tanA tanB",
    "options_en": ["True", "False", "Only for acute angles", "Can't prove"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून कोणों के लिए", "सिद्ध नहीं कर सकते"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If 3cosθ = 2, find (2sec²θ - 2tan²θ - cos²θ)",
    "question_hi": "यदि 3cosθ = 2 है, तो (2sec²θ - 2tan²θ - cos²θ) ज्ञात कीजिए।",
    "options_en": ["1", "4/9", "5/9", "7/9"],
    "options_hi": ["1", "4/9", "5/9", "7/9"],
    "answer_en": "5/9",
    "answer_hi": "5/9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Evaluate: sin(90°-θ) cos(90°-θ) [tan(90°-θ)/cotθ]",
    "question_hi": "मान ज्ञात कीजिए: sin(90°-θ) cos(90°-θ) [tan(90°-θ)/cotθ]",
    "options_en": ["0", "1", "sinθ", "cosθ"],
    "options_hi": ["0", "1", "sinθ", "cosθ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If tan²θ = 1 - a², prove that secθ + tan³θ cosecθ = (2 - a²)^(3/2)",
    "question_hi": "यदि tan²θ = 1 - a² है, तो सिद्ध कीजिए कि secθ + tan³θ cosecθ = (2 - a²)^(3/2)",
    "options_en": ["True", "False", "Can't prove", "Only for 0≤a≤1"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल 0≤a≤1 के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Simplify: [1/(sec²θ - cos²θ) + 1/(cosec²θ - sin²θ)] sin²θ cos²θ",
    "question_hi": "सरल कीजिए: [1/(sec²θ - cos²θ) + 1/(cosec²θ - sin²θ)] sin²θ cos²θ",
    "options_en": ["0", "1", "1/2", "2"],
    "options_hi": ["0", "1", "1/2", "2"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "If x = a cosθ + b sinθ and y = a sinθ - b cosθ, prove that x² + y² = a² + b²",
    "question_hi": "यदि x = a cosθ + b sinθ और y = a sinθ - b cosθ है, तो सिद्ध कीजिए कि x² + y² = a² + b²",
    "options_en": ["True", "False", "Can't prove", "Only for real a,b"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल वास्तविक a,b के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Evaluate: cos²20° + cos²70° + sin48°sec42° + cos40°cosec50°",
    "question_hi": "मान ज्ञात कीजिए: cos²20° + cos²70° + sin48°sec42° + cos40°cosec50°",
    "options_en": ["0", "2", "3", "4"],
    "options_hi": ["0", "2", "3", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "If tanA = n tanB and sinA = m sinB, prove that cos²A = (m²-1)/(n²-1)",
    "question_hi": "यदि tanA = n tanB और sinA = m sinB है, तो सिद्ध कीजिए कि cos²A = (m²-1)/(n²-1)",
    "options_en": ["True", "False", "Can't prove", "Only for m>1,n>1"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल m>1,n>1 के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "If 5sinθ - 12cosθ = 0, find (sinθ + cosθ)/(2cosθ - sinθ)",
    "question_hi": "यदि 5sinθ - 12cosθ = 0 है, तो (sinθ + cosθ)/(2cosθ - sinθ) ज्ञात कीजिए।",
    "options_en": ["17/7", "7/17", "5/12", "12/5"],
    "options_hi": ["17/7", "7/17", "5/12", "12/5"],
    "answer_en": "17/7",
    "answer_hi": "17/7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Simplify: (sinA + cosA)² + (sinA - cosA)² + 2sin²A - 2cos²A",
    "question_hi": "सरल कीजिए: (sinA + cosA)² + (sinA - cosA)² + 2sin²A - 2cos²A",
    "options_en": ["0", "2", "2sin²A", "2cos²A"],
    "options_hi": ["0", "2", "2sin²A", "2cos²A"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "If cotθ = 15/8, find (3cosθ - 4sinθ)/(2cosθ + sinθ)",
    "question_hi": "यदि cotθ = 15/8 है, तो (3cosθ - 4sinθ)/(2cosθ + sinθ) ज्ञात कीजिए।",
    "options_en": ["7/46", "46/7", "15/8", "8/15"],
    "options_hi": ["7/46", "46/7", "15/8", "8/15"],
    "answer_en": "7/46",
    "answer_hi": "7/46",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Prove: (1 + sinA)/cosA + cosA/(1 + sinA) = 2secA",
    "question_hi": "सिद्ध कीजिए: (1 + sinA)/cosA + cosA/(1 + sinA) = 2secA",
    "options_en": ["True", "False", "Only for acute A", "Can't prove"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून A के लिए", "सिद्ध नहीं कर सकते"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Evaluate: tan²60° + 4cos²45° + 3sec²30° + 5cos²90°",
    "question_hi": "मान ज्ञात कीजिए: tan²60° + 4cos²45° + 3sec²30° + 5cos²90°",
    "options_en": ["6", "7", "8", "9"],
    "options_hi": ["6", "7", "8", "9"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "If sinθ + cosθ = √3, find tanθ + cotθ",
    "question_hi": "यदि sinθ + cosθ = √3 है, तो tanθ + cotθ ज्ञात कीजिए।",
    "options_en": ["1", "2", "√3", "2/√3"],
    "options_hi": ["1", "2", "√3", "2/√3"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Simplify: (secA - tanA)²(1 + sinA)",
    "question_hi": "सरल कीजिए: (secA - tanA)²(1 + sinA)",
    "options_en": ["1", "1 - sinA", "(1 - sinA)²", "(1 + sinA)²"],
    "options_hi": ["1", "1 - sinA", "(1 - sinA)²", "(1 + sinA)²"],
    "answer_en": "1 - sinA",
    "answer_hi": "1 - sinA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "If 3sinθ + 5cosθ = 5, prove that 5sinθ - 3cosθ = ±3",
    "question_hi": "यदि 3sinθ + 5cosθ = 5 है, तो सिद्ध कीजिए कि 5sinθ - 3cosθ = ±3",
    "options_en": ["True", "False", "Can't prove", "Only for specific θ"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल विशिष्ट θ के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Evaluate: (tanθ/(1 - cotθ)) + (cotθ/(1 - tanθ))",
    "question_hi": "मान ज्ञात कीजिए: (tanθ/(1 - cotθ)) + (cotθ/(1 - tanθ))",
    "options_en": ["1 + secθcosecθ", "1 + sinθcosθ", "secθ + cosecθ", "tanθ + cotθ"],
    "options_hi": ["1 + secθcosecθ", "1 + sinθcosθ", "secθ + cosecθ", "tanθ + cotθ"],
    "answer_en": "1 + secθcosecθ",
    "answer_hi": "1 + secθcosecθ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "If sinθ = x/y, find tanθ + secθ in terms of x and y",
    "question_hi": "यदि sinθ = x/y है, तो tanθ + secθ को x और y के पदों में व्यक्त कीजिए।",
    "options_en": ["√(y+x)/√(y-x)", "y/√(y²-x²)", "(y+√(y²-x²))/√(y²-x²)", "Both A and C"],
    "options_hi": ["√(y+x)/√(y-x)", "y/√(y²-x²)", "(y+√(y²-x²))/√(y²-x²)", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Prove: (sinθ - 2sin³θ)/(2cos³θ - cosθ) = tanθ",
    "question_hi": "सिद्ध कीजिए: (sinθ - 2sin³θ)/(2cos³θ - cosθ) = tanθ",
    "options_en": ["True", "False", "Only for θ≠90°", "Can't prove"],
    "options_hi": ["सत्य", "असत्य", "केवल θ≠90° के लिए", "सिद्ध नहीं कर सकते"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "If tanA + sinA = m and tanA - sinA = n, show that m² - n² = 4√(mn)",
    "question_hi": "यदि tanA + sinA = m और tanA - sinA = n है, तो दर्शाइए कि m² - n² = 4√(mn)",
    "options_en": ["True", "False", "Can't show", "Only for m>n"],
    "options_hi": ["सत्य", "असत्य", "दर्शा नहीं सकते", "केवल m>n के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Evaluate: sin²63° + sin²27° + cos²17° + cos²73°",
    "question_hi": "मान ज्ञात कीजिए: sin²63° + sin²27° + cos²17° + cos²73°",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "If 7cosecθ - 3cotθ = 7, prove that 7cotθ - 3cosecθ = 3",
    "question_hi": "यदि 7cosecθ - 3cotθ = 7 है, तो सिद्ध कीजिए कि 7cotθ - 3cosecθ = 3",
    "options_en": ["True", "False", "Can't prove", "Only for acute θ"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल न्यून θ के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Simplify: (1 + cotθ + tanθ)(sinθ - cosθ)/sec³θ - cosec³θ",
    "question_hi": "सरल कीजिए: (1 + cotθ + tanθ)(sinθ - cosθ)/sec³θ - cosec³θ",
    "options_en": ["sinθcosθ", "sin²θcos²θ", "1", "0"],
    "options_hi": ["sinθcosθ", "sin²θcos²θ", "1", "0"],
    "answer_en": "sin²θcos²θ",
    "answer_hi": "sin²θcos²θ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "If cosθ + sinθ = √2cosθ, show that cosθ - sinθ = √2sinθ",
    "question_hi": "यदि cosθ + sinθ = √2cosθ है, तो दर्शाइए कि cosθ - sinθ = √2sinθ",
    "options_en": ["True", "False", "Can't show", "Only for θ=45°"],
    "options_hi": ["सत्य", "असत्य", "दर्शा नहीं सकते", "केवल θ=45° के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Evaluate: (cos²20° + cos²70°)/(sec²50° - cot²40°) + 2cosec²58° - 2cot58°tan32°",
    "question_hi": "मान ज्ञात कीजिए: (cos²20° + cos²70°)/(sec²50° - cot²40°) + 2cosec²58° - 2cot58°tan32°",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "If tanθ = b/a, find (acosθ - bsinθ)/(acosθ + bsinθ)",
    "question_hi": "यदि tanθ = b/a है, तो (acosθ - bsinθ)/(acosθ + bsinθ) ज्ञात कीजिए।",
    "options_en": ["(a²-b²)/(a²+b²)", "(a²+b²)/(a²-b²)", "(a-b)/(a+b)", "(a+b)/(a-b)"],
    "options_hi": ["(a²-b²)/(a²+b²)", "(a²+b²)/(a²-b²)", "(a-b)/(a+b)", "(a+b)/(a-b)"],
    "answer_en": "(a²-b²)/(a²+b²)",
    "answer_hi": "(a²-b²)/(a²+b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Prove: (1 + secA)/secA = sin²A/(1 - cosA)",
    "question_hi": "सिद्ध कीजिए: (1 + secA)/secA = sin²A/(1 - cosA)",
    "options_en": ["True", "False", "Only for A≠0", "Can't prove"],
    "options_hi": ["सत्य", "असत्य", "केवल A≠0 के लिए", "सिद्ध नहीं कर सकते"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "If x = rcosθcosφ, y = rcosθsinφ, z = rsinθ, find x² + y² + z²",
    "question_hi": "यदि x = rcosθcosφ, y = rcosθsinφ, z = rsinθ है, तो x² + y² + z² ज्ञात कीजिए।",
    "options_en": ["r", "r²", "r³", "r⁴"],
    "options_hi": ["r", "r²", "r³", "r⁴"],
    "answer_en": "r²",
    "answer_hi": "r²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Evaluate: sin35°cos55° + cos35°sin55° - 2cos60°",
    "question_hi": "मान ज्ञात कीजिए: sin35°cos55° + cos35°sin55° - 2cos60°",
    "options_en": ["0", "1", "-1", "2"],
    "options_hi": ["0", "1", "-1", "2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "If sinθ + cosθ = √2, find sinθ cosθ",
    "question_hi": "यदि sinθ + cosθ = √2 है, तो sinθ cosθ ज्ञात कीजिए।",
    "options_en": ["0", "1/2", "1/√2", "1"],
    "options_hi": ["0", "1/2", "1/√2", "1"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Simplify: (sin³θ + cos³θ)/(sinθ + cosθ) + sinθ cosθ",
    "question_hi": "सरल कीजिए: (sin³θ + cos³θ)/(sinθ + cosθ) + sinθ cosθ",
    "options_en": ["0", "1", "sinθ+cosθ", "sinθcosθ"],
    "options_hi": ["0", "1", "sinθ+cosθ", "sinθcosθ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "If tanA = √2 - 1, show that sinA cosA = √2/4",
    "question_hi": "यदि tanA = √2 - 1 है, तो दर्शाइए कि sinA cosA = √2/4",
    "options_en": ["True", "False", "Can't show", "Only for acute A"],
    "options_hi": ["सत्य", "असत्य", "दर्शा नहीं सकते", "केवल न्यून A के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Evaluate: (1 - tan²45°)/(1 + tan²45°) + 2sin²60°",
    "question_hi": "मान ज्ञात कीजिए: (1 - tan²45°)/(1 + tan²45°) + 2sin²60°",
    "options_en": ["0", "1", "1.5", "2"],
    "options_hi": ["0", "1", "1.5", "2"],
    "answer_en": "1.5",
    "answer_hi": "1.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "If sinθ + cosθ = p and secθ + cosecθ = q, prove that q(p² - 1) = 2p",
    "question_hi": "यदि sinθ + cosθ = p और secθ + cosecθ = q है, तो सिद्ध कीजिए कि q(p² - 1) = 2p",
    "options_en": ["True", "False", "Can't prove", "Only for p>0"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल p>0 के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Simplify: (1 + sinA - cosA)/(1 + sinA + cosA) + (1 + sinA + cosA)/(1 + sinA - cosA)",
    "question_hi": "सरल कीजिए: (1 + sinA - cosA)/(1 + sinA + cosA) + (1 + sinA + cosA)/(1 + sinA - cosA)",
    "options_en": ["2cosecA", "2secA", "2", "2/sinA"],
    "options_hi": ["2cosecA", "2secA", "2", "2/sinA"],
    "answer_en": "2cosecA",
    "answer_hi": "2cosecA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "If 2sinθ = 1, find 3cosθ - 4cos³θ",
    "question_hi": "यदि 2sinθ = 1 है, तो 3cosθ - 4cos³θ ज्ञात कीजिए।",
    "options_en": ["0", "1", "√3/2", "1/2"],
    "options_hi": ["0", "1", "√3/2", "1/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Prove: (cosA/(1 - tanA)) + (sinA/(1 - cotA)) = sinA + cosA",
    "question_hi": "सिद्ध कीजिए: (cosA/(1 - tanA)) + (sinA/(1 - cotA)) = sinA + cosA",
    "options_en": ["True", "False", "Only for A≠45°", "Can't prove"],
    "options_hi": ["सत्य", "असत्य", "केवल A≠45° के लिए", "सिद्ध नहीं कर सकते"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Evaluate: tan7° tan23° tan60° tan67° tan83°",
    "question_hi": "मान ज्ञात कीजिए: tan7° tan23° tan60° tan67° tan83°",
    "options_en": ["0", "1", "√3", "3"],
    "options_hi": ["0", "1", "√3", "3"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "If sinθ = 3/5 and θ is acute, find (5cosecθ - 3cotθ)/(4secθ - 3tanθ)",
    "question_hi": "यदि sinθ = 3/5 है और θ न्यून कोण है, तो (5cosecθ - 3cotθ)/(4secθ - 3tanθ) ज्ञात कीजिए।",
    "options_en": ["1", "5/4", "4/5", "3/5"],
    "options_hi": ["1", "5/4", "4/5", "3/5"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Simplify: √(1 + sinA)/(1 - sinA) + √(1 - sinA)/(1 + sinA)",
    "question_hi": "सरल कीजिए: √(1 + sinA)/(1 - sinA) + √(1 - sinA)/(1 + sinA)",
    "options_en": ["2secA", "2cosecA", "2", "2tanA"],
    "options_hi": ["2secA", "2cosecA", "2", "2tanA"],
    "answer_en": "2secA",
    "answer_hi": "2secA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "If cosθ = 12/13, find (sinθ - cosθ)/(2sinθ + cosθ)",
    "question_hi": "यदि cosθ = 12/13 है, तो (sinθ - cosθ)/(2sinθ + cosθ) ज्ञात कीजिए।",
    "options_en": ["-7/17", "7/17", "-17/7", "17/7"],
    "options_hi": ["-7/17", "7/17", "-17/7", "17/7"],
    "answer_en": "-7/17",
    "answer_hi": "-7/17",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Prove: (1 + cotA + tanA)(sinA - cosA) = (secA/cosec²A) - (cosecA/sec²A)",
    "question_hi": "सिद्ध कीजिए: (1 + cotA + tanA)(sinA - cosA) = (secA/cosec²A) - (cosecA/sec²A)",
    "options_en": ["True", "False", "Can't prove", "Only for acute A"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल न्यून A के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Evaluate: 4(sin⁴30° + cos⁴60°) - 3(cos²45° - sin²90°)",
    "question_hi": "मान ज्ञात कीजिए: 4(sin⁴30° + cos⁴60°) - 3(cos²45° - sin²90°)",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "If tanθ + sinθ = m, tanθ - sinθ = n, prove that (m² - n²)² = 16mn",
    "question_hi": "यदि tanθ + sinθ = m, tanθ - sinθ = n है, तो सिद्ध कीजिए कि (m² - n²)² = 16mn",
    "options_en": ["True", "False", "Can't prove", "Only for m>n"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल m>n के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Simplify: (sinθ - cosθ)² + (sinθ + cosθ)²",
    "question_hi": "सरल कीजिए: (sinθ - cosθ)² + (sinθ + cosθ)²",
    "options_en": ["0", "1", "2", "2(sin²θ+cos²θ)"],
    "options_hi": ["0", "1", "2", "2(sin²θ+cos²θ)"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "If sinθ + cosθ = √2cosθ, find cotθ",
    "question_hi": "यदि sinθ + cosθ = √2cosθ है, तो cotθ ज्ञात कीजिए।",
    "options_en": ["√2-1", "√2+1", "1", "0"],
    "options_hi": ["√2-1", "√2+1", "1", "0"],
    "answer_en": "√2+1",
    "answer_hi": "√2+1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Prove: (cosecA - sinA)(secA - cosA) = 1/(tanA + cotA)",
    "question_hi": "सिद्ध कीजिए: (cosecA - sinA)(secA - cosA) = 1/(tanA + cotA)",
    "options_en": ["True", "False", "Only for acute A", "Can't prove"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून A के लिए", "सिद्ध नहीं कर सकते"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Evaluate: cos48° - sin42°",
    "question_hi": "मान ज्ञात कीजिए: cos48° - sin42°",
    "options_en": ["0", "1", "-1", "2"],
    "options_hi": ["0", "1", "-1", "2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "If tan²θ = 1 - e², prove that secθ + tan³θ cosecθ = (2 - e²)^(3/2)",
    "question_hi": "यदि tan²θ = 1 - e² है, तो सिद्ध कीजिए कि secθ + tan³θ cosecθ = (2 - e²)^(3/2)",
    "options_en": ["True", "False", "Can't prove", "Only for 0≤e≤1"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल 0≤e≤1 के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Simplify: (1 - sinθ + cosθ)²/(1 + sinθ)(1 + cosθ)",
    "question_hi": "सरल कीजिए: (1 - sinθ + cosθ)²/(1 + sinθ)(1 + cosθ)",
    "options_en": ["(1 - sinθ)/(1 + cosθ)", "(1 - cosθ)/(1 + sinθ)", "1", "tan²(θ/2)"],
    "options_hi": ["(1 - sinθ)/(1 + cosθ)", "(1 - cosθ)/(1 + sinθ)", "1", "tan²(θ/2)"],
    "answer_en": "tan²(θ/2)",
    "answer_hi": "tan²(θ/2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "If 4tanθ = 3, find (4sinθ - cosθ)/(4sinθ + cosθ)",
    "question_hi": "यदि 4tanθ = 3 है, तो (4sinθ - cosθ)/(4sinθ + cosθ) ज्ञात कीजिए।",
    "options_en": ["1/2", "2/3", "3/4", "4/5"],
    "options_hi": ["1/2", "2/3", "3/4", "4/5"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Prove: (1 + sinA)/cosA + cosA/(1 + sinA) = 2secA",
    "question_hi": "सिद्ध कीजिए: (1 + sinA)/cosA + cosA/(1 + sinA) = 2secA",
    "options_en": ["True", "False", "Only for acute A", "Can't prove"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून A के लिए", "सिद्ध नहीं कर सकते"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Evaluate: sin(45°+θ) - cos(45°-θ)",
    "question_hi": "मान ज्ञात कीजिए: sin(45°+θ) - cos(45°-θ)",
    "options_en": ["0", "1", "2sinθ", "2cosθ"],
    "options_hi": ["0", "1", "2sinθ", "2cosθ"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "If x = asinθ + bcosθ and y = acosθ - bsinθ, prove that x² + y² = a² + b²",
    "question_hi": "यदि x = asinθ + bcosθ और y = acosθ - bsinθ है, तो सिद्ध कीजिए कि x² + y² = a² + b²",
    "options_en": ["True", "False", "Can't prove", "Only for real a,b"],
    "options_hi": ["सत्य", "असत्य", "सिद्ध नहीं कर सकते", "केवल वास्तविक a,b के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Simplify: (tanA + secA - 1)/(tanA - secA + 1) × (1 + sinA)/cosA",
    "question_hi": "सरल कीजिए: (tanA + secA - 1)/(tanA - secA + 1) × (1 + sinA)/cosA",
    "options_en": ["1", "tanA", "secA", "secA + tanA"],
    "options_hi": ["1", "tanA", "secA", "secA + tanA"],
    "answer_en": "secA + tanA",
    "answer_hi": "secA + tanA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "If sinθ + cosθ = √2, find tanθ + cotθ",
    "question_hi": "यदि sinθ + cosθ = √2 है, तो tanθ + cotθ ज्ञात कीजिए।",
    "options_en": ["1", "2", "√2", "2/√3"],
    "options_hi": ["1", "2", "√2", "2/√3"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Prove: (sinA + cosA)(tanA + cotA) = secA + cosecA",
    "question_hi": "सिद्ध कीजिए: (sinA + cosA)(tanA + cotA) = secA + cosecA",
    "options_en": ["True", "False", "Only for acute A", "Can't prove"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून A के लिए", "सिद्ध नहीं कर सकते"],
    "answer_en": "True",
    "answer_hi": "सत्य",
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