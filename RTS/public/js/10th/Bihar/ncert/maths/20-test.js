const questions=[
  {
    "num": 1,
    "question_en": "If sinθ + sin²θ = 1, prove that cos²θ + cos⁴θ = 1",
    "question_hi": "यदि sinθ + sin²θ = 1 है, तो सिद्ध कीजिए कि cos²θ + cos⁴θ = 1",
    "options_en": ["True", "False", "Cannot be determined", "Only for specific θ"],
    "options_hi": ["सत्य", "असत्य", "निर्धारित नहीं किया जा सकता", "केवल विशिष्ट θ के लिए"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "If tanθ + sinθ = m and tanθ - sinθ = n, prove that m² - n² = 4√mn",
    "question_hi": "यदि tanθ + sinθ = m और tanθ - sinθ = n है, तो सिद्ध कीजिए कि m² - n² = 4√mn",
    "options_en": ["True", "False", "Only for acute θ", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून θ के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Prove: (sinθ - 2sin³θ)/(2cos³θ - cosθ) = tanθ",
    "question_hi": "सिद्ध कीजिए: (sinθ - 2sin³θ)/(2cos³θ - cosθ) = tanθ",
    "options_en": ["True", "False", "Only for θ≠π/2", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल θ≠π/2 के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If x = r sinθ cosφ, y = r sinθ sinφ, z = r cosθ, prove that x² + y² + z² = r²",
    "question_hi": "यदि x = r sinθ cosφ, y = r sinθ sinφ, z = r cosθ है, तो सिद्ध कीजिए कि x² + y² + z² = r²",
    "options_en": ["True", "False", "Only for real r", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल वास्तविक r के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "If tanA = n tanB and sinA = m sinB, prove that cos²A = (m² - 1)/(n² - 1)",
    "question_hi": "यदि tanA = n tanB और sinA = m sinB है, तो सिद्ध कीजिए कि cos²A = (m² - 1)/(n² - 1)",
    "options_en": ["True", "False", "Only for m,n>1", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल m,n>1 के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Prove: sin⁶θ + cos⁶θ = 1 - 3sin²θ cos²θ",
    "question_hi": "सिद्ध कीजिए: sin⁶θ + cos⁶θ = 1 - 3sin²θ cos²θ",
    "options_en": ["True", "False", "Only for acute θ", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून θ के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "If cosθ + sinθ = √2 cosθ, prove that cosθ - sinθ = √2 sinθ",
    "question_hi": "यदि cosθ + sinθ = √2 cosθ है, तो सिद्ध कीजिए कि cosθ - sinθ = √2 sinθ",
    "options_en": ["True", "False", "Only for θ=45°", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल θ=45° के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Prove: (1 + sinA - cosA)/(1 + sinA + cosA) = tan(A/2)",
    "question_hi": "सिद्ध कीजिए: (1 + sinA - cosA)/(1 + sinA + cosA) = tan(A/2)",
    "options_en": ["True", "False", "Only for acute A", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून A के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "If secθ + tanθ = p, prove that sinθ = (p² - 1)/(p² + 1)",
    "question_hi": "यदि secθ + tanθ = p है, तो सिद्ध कीजिए कि sinθ = (p² - 1)/(p² + 1)",
    "options_en": ["True", "False", "Only for p>0", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल p>0 के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Prove: cos⁴A - sin⁴A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A",
    "question_hi": "सिद्ध कीजिए: cos⁴A - sin⁴A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A",
    "options_en": ["All equal", "Only first two equal", "All different", "Cannot be proven"],
    "options_hi": ["सभी बराबर", "केवल पहले दो बराबर", "सभी अलग", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "All equal",
    "answer_hi": "सभी बराबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If x = a secθ + b tanθ and y = a tanθ + b secθ, prove that x² - y² = a² - b²",
    "question_hi": "यदि x = a secθ + b tanθ और y = a tanθ + b secθ है, तो सिद्ध कीजिए कि x² - y² = a² - b²",
    "options_en": ["True", "False", "Only for a>b", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल a>b के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Prove: tanθ/(1 - cotθ) + cotθ/(1 - tanθ) = 1 + secθ cosecθ",
    "question_hi": "सिद्ध कीजिए: tanθ/(1 - cotθ) + cotθ/(1 - tanθ) = 1 + secθ cosecθ",
    "options_en": ["True", "False", "Only for θ≠45°", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल θ≠45° के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "If tan²θ = 1 - a², prove that secθ + tan³θ cosecθ = (2 - a²)^(3/2)",
    "question_hi": "यदि tan²θ = 1 - a² है, तो सिद्ध कीजिए कि secθ + tan³θ cosecθ = (2 - a²)^(3/2)",
    "options_en": ["True", "False", "Only for 0≤a≤1", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल 0≤a≤1 के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Prove: (cosA/(1 - tanA)) + (sinA/(1 - cotA)) = sinA + cosA",
    "question_hi": "सिद्ध कीजिए: (cosA/(1 - tanA)) + (sinA/(1 - cotA)) = sinA + cosA",
    "options_en": ["True", "False", "Only for A≠45°", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल A≠45° के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "If 3sinθ + 5cosθ = 5, prove that 5sinθ - 3cosθ = ±3",
    "question_hi": "यदि 3sinθ + 5cosθ = 5 है, तो सिद्ध कीजिए कि 5sinθ - 3cosθ = ±3",
    "options_en": ["True", "False", "Only for acute θ", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून θ के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Prove: √(1 + sinθ)/(1 - sinθ) = secθ + tanθ",
    "question_hi": "सिद्ध कीजिए: √(1 + sinθ)/(1 - sinθ) = secθ + tanθ",
    "options_en": ["True", "False", "Only for θ<90°", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल θ<90° के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If sinθ + sin²θ = 1, prove that cos¹²θ + 3cos¹⁰θ + 3cos⁸θ + cos⁶θ = 1",
    "question_hi": "यदि sinθ + sin²θ = 1 है, तो सिद्ध कीजिए कि cos¹²θ + 3cos¹⁰θ + 3cos⁸θ + cos⁶θ = 1",
    "options_en": ["True", "False", "Only for specific θ", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल विशिष्ट θ के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Prove: (1 + cotθ + tanθ)(sinθ - cosθ) = (secθ/cosec²θ) - (cosecθ/sec²θ)",
    "question_hi": "सिद्ध कीजिए: (1 + cotθ + tanθ)(sinθ - cosθ) = (secθ/cosec²θ) - (cosecθ/sec²θ)",
    "options_en": ["True", "False", "Too complex", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "बहुत जटिल", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If tanθ = √(1 - a²)/a, prove that secθ + tan³θ cosecθ = (2 - a²)^(3/2)/a³",
    "question_hi": "यदि tanθ = √(1 - a²)/a है, तो सिद्ध कीजिए कि secθ + tan³θ cosecθ = (2 - a²)^(3/2)/a³",
    "options_en": ["True", "False", "Only for 0<a≤1", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल 0<a≤1 के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Prove: (sinA + cosecA)² + (cosA + secA)² = 7 + tan²A + cot²A",
    "question_hi": "सिद्ध कीजिए: (sinA + cosecA)² + (cosA + secA)² = 7 + tan²A + cot²A",
    "options_en": ["True", "False", "Only for acute A", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून A के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If cosθ + sinθ = √2 sinθ, prove that cosθ - sinθ = √2 cosθ",
    "question_hi": "यदि cosθ + sinθ = √2 sinθ है, तो सिद्ध कीजिए कि cosθ - sinθ = √2 cosθ",
    "options_en": ["True", "False", "Only for θ=45°", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल θ=45° के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Prove: (tanA + tanB)/(cotA + cotB) = tanA tanB",
    "question_hi": "सिद्ध कीजिए: (tanA + tanB)/(cotA + cotB) = tanA tanB",
    "options_en": ["True", "False", "Only for acute A,B", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून A,B के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "If 7cosecθ - 3cotθ = 7, prove that 7cotθ - 3cosecθ = 3",
    "question_hi": "यदि 7cosecθ - 3cotθ = 7 है, तो सिद्ध कीजिए कि 7cotθ - 3cosecθ = 3",
    "options_en": ["True", "False", "Only for acute θ", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून θ के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Prove: cos³θ + sin³θ = (cosθ + sinθ)(1 - sinθ cosθ)",
    "question_hi": "सिद्ध कीजिए: cos³θ + sin³θ = (cosθ + sinθ)(1 - sinθ cosθ)",
    "options_en": ["True", "False", "Identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If tanθ + sinθ = m, tanθ - sinθ = n, prove that (m² - n²)² = 16mn",
    "question_hi": "यदि tanθ + sinθ = m, tanθ - sinθ = n है, तो सिद्ध कीजिए कि (m² - n²)² = 16mn",
    "options_en": ["True", "False", "Only for m>n", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल m>n के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Prove: (1 + sinθ - cosθ)/(1 + sinθ + cosθ) = √[(1 - cosθ)/(1 + cosθ)]",
    "question_hi": "सिद्ध कीजिए: (1 + sinθ - cosθ)/(1 + sinθ + cosθ) = √[(1 - cosθ)/(1 + cosθ)]",
    "options_en": ["True", "False", "Complex identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "If a cosθ - b sinθ = c, prove that a sinθ + b cosθ = ±√(a² + b² - c²)",
    "question_hi": "यदि a cosθ - b sinθ = c है, तो सिद्ध कीजिए कि a sinθ + b cosθ = ±√(a² + b² - c²)",
    "options_en": ["True", "False", "Only for a²+b²≥c²", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल a²+b²≥c² के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Prove: (cos⁴θ - sin⁴θ)/(cos²θ - sin²θ) = 1",
    "question_hi": "सिद्ध कीजिए: (cos⁴θ - sin⁴θ)/(cos²θ - sin²θ) = 1",
    "options_en": ["True", "False", "Only for θ≠45°", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल θ≠45° के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "If sinθ + cosθ = p and secθ + cosecθ = q, prove that q(p² - 1) = 2p",
    "question_hi": "यदि sinθ + cosθ = p और secθ + cosecθ = q है, तो सिद्ध कीजिए कि q(p² - 1) = 2p",
    "options_en": ["True", "False", "Only for p>0", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल p>0 के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Prove: √(sec²A + cosec²A) = tanA + cotA",
    "question_hi": "सिद्ध कीजिए: √(sec²A + cosec²A) = tanA + cotA",
    "options_en": ["True", "False", "Only for acute A", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून A के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "If tanA = √2 - 1, show that sinA cosA = √2/4",
    "question_hi": "यदि tanA = √2 - 1 है, तो दर्शाइए कि sinA cosA = √2/4",
    "options_en": ["True", "False", "Only for acute A", "Cannot be shown"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून A के लिए", "दर्शाया नहीं जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Prove: (1 + sinA)/cosA + cosA/(1 + sinA) = 2secA",
    "question_hi": "सिद्ध कीजिए: (1 + sinA)/cosA + cosA/(1 + sinA) = 2secA",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If x = a sinθ + b cosθ and y = a cosθ - b sinθ, prove that x² + y² = a² + b²",
    "question_hi": "यदि x = a sinθ + b cosθ और y = a cosθ - b sinθ है, तो सिद्ध कीजिए कि x² + y² = a² + b²",
    "options_en": ["True", "False", "Pythagorean identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "पाइथागोरस सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Prove: (secA - cosA)(cosecA - sinA) = 1/(tanA + cotA)",
    "question_hi": "सिद्ध कीजिए: (secA - cosA)(cosecA - sinA) = 1/(tanA + cotA)",
    "options_en": ["True", "False", "Complex proof", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल प्रमाण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "If cosA/cosB = m and cosA/sinB = n, prove that (m² + n²)cos²B = n²",
    "question_hi": "यदि cosA/cosB = m और cosA/sinB = n है, तो सिद्ध कीजिए कि (m² + n²)cos²B = n²",
    "options_en": ["True", "False", "Only for specific ratios", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल विशिष्ट अनुपातों के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Prove: (1 + cotA - cosecA)(1 + tanA + secA) = 2",
    "question_hi": "सिद्ध कीजिए: (1 + cotA - cosecA)(1 + tanA + secA) = 2",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If sinθ + cosθ = √2, prove that tanθ + cotθ = 2",
    "question_hi": "यदि sinθ + cosθ = √2 है, तो सिद्ध कीजिए कि tanθ + cotθ = 2",
    "options_en": ["True", "False", "Only for θ=45°", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल θ=45° के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Prove: (sinA + cosA)² + (sinA - cosA)² = 2",
    "question_hi": "सिद्ध कीजिए: (sinA + cosA)² + (sinA - cosA)² = 2",
    "options_en": ["True", "False", "Basic identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मूल सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If tanA + sinA = m and tanA - sinA = n, prove that √(mn) = sinA",
    "question_hi": "यदि tanA + sinA = m और tanA - sinA = n है, तो सिद्ध कीजिए कि √(mn) = sinA",
    "options_en": ["True", "False", "Only for m>n", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल m>n के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Prove: cosA/(1 - tanA) + sinA/(1 - cotA) = sinA + cosA",
    "question_hi": "सिद्ध कीजिए: cosA/(1 - tanA) + sinA/(1 - cotA) = sinA + cosA",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If secθ + tanθ = p, prove that cosθ = 2p/(p² + 1)",
    "question_hi": "यदि secθ + tanθ = p है, तो सिद्ध कीजिए कि cosθ = 2p/(p² + 1)",
    "options_en": ["True", "False", "Only for p>0", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल p>0 के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Prove: (1 - sinA)/(1 + sinA) = (secA - tanA)²",
    "question_hi": "सिद्ध कीजिए: (1 - sinA)/(1 + sinA) = (secA - tanA)²",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "If a cosθ + b sinθ = m and a sinθ - b cosθ = n, prove that a² + b² = m² + n²",
    "question_hi": "यदि a cosθ + b sinθ = m और a sinθ - b cosθ = n है, तो सिद्ध कीजिए कि a² + b² = m² + n²",
    "options_en": ["True", "False", "Vector identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "सदिश सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Prove: (sinA + cosA)(tanA + cotA) = secA + cosecA",
    "question_hi": "सिद्ध कीजिए: (sinA + cosA)(tanA + cotA) = secA + cosecA",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If sinθ + cosθ = √2 sin(90° - θ), find cotθ",
    "question_hi": "यदि sinθ + cosθ = √2 sin(90° - θ) है, तो cotθ ज्ञात कीजिए।",
    "options_en": ["√2+1", "√2-1", "1", "√2"],
    "options_hi": ["√2+1", "√2-1", "1", "√2"],
    "answer_en": "√2+1",
    "answer_hi": "√2+1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Prove: √[(1 + sinθ)/(1 - sinθ)] + √[(1 - sinθ)/(1 + sinθ)] = 2secθ",
    "question_hi": "सिद्ध कीजिए: √[(1 + sinθ)/(1 - sinθ)] + √[(1 - sinθ)/(1 + sinθ)] = 2secθ",
    "options_en": ["True", "False", "Complex identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If tanA = 1/2 and tanB = 1/3, prove that A + B = 45°",
    "question_hi": "यदि tanA = 1/2 और tanB = 1/3 है, तो सिद्ध कीजिए कि A + B = 45°",
    "options_en": ["True", "False", "Only for acute angles", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "केवल न्यून कोणों के लिए", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Prove: (cosecA - sinA)(secA - cosA) = 1/(tanA + cotA)",
    "question_hi": "सिद्ध कीजिए: (cosecA - sinA)(secA - cosA) = 1/(tanA + cotA)",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "If cosθ + sinθ = √2 cosθ, prove that cosθ - sinθ = √2 sinθ",
    "question_hi": "यदि cosθ + sinθ = √2 cosθ है, तो सिद्ध कीजिए कि cosθ - sinθ = √2 sinθ",
    "options_en": ["True", "False", "Symmetry property", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "सममिति गुण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Prove: sin²A tanA + cos²A cotA + 2sinA cosA = tanA + cotA",
    "question_hi": "सिद्ध कीजिए: sin²A tanA + cos²A cotA + 2sinA cosA = tanA + cotA",
    "options_en": ["True", "False", "Complex transformation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल रूपांतरण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "If x = secθ + tanθ and y = secθ - tanθ, prove that xy = 1",
    "question_hi": "यदि x = secθ + tanθ और y = secθ - tanθ है, तो सिद्ध कीजिए कि xy = 1",
    "options_en": ["True", "False", "Reciprocal identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "व्युत्क्रम सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Prove: (1 + cosA)/sinA + sinA/(1 + cosA) = 2cosecA",
    "question_hi": "सिद्ध कीजिए: (1 + cosA)/sinA + sinA/(1 + cosA) = 2cosecA",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "If sinθ + cosθ = √3, prove that tanθ + cotθ = 1",
    "question_hi": "यदि sinθ + cosθ = √3 है, तो सिद्ध कीजिए कि tanθ + cotθ = 1",
    "options_en": ["True", "False", "Check calculation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "गणना जांचें", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "False",
    "answer_hi": "असत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Prove: (tanA + secA - 1)/(tanA - secA + 1) = (1 + sinA)/cosA",
    "question_hi": "सिद्ध कीजिए: (tanA + secA - 1)/(tanA - secA + 1) = (1 + sinA)/cosA",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "If 3sinθ + 4cosθ = 5, prove that sinθ = 3/5",
    "question_hi": "यदि 3sinθ + 4cosθ = 5 है, तो सिद्ध कीजिए कि sinθ = 3/5",
    "options_en": ["True", "False", "Pythagorean triplet", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "पाइथागोरस त्रिक", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Prove: cos⁴A - sin⁴A = cos²A - sin²A",
    "question_hi": "सिद्ध कीजिए: cos⁴A - sin⁴A = cos²A - sin²A",
    "options_en": ["True", "False", "Factorization identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "गुणनखंड सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "If tanA + cotA = 2, prove that tan¹⁰A + cot¹⁰A = 2",
    "question_hi": "यदि tanA + cotA = 2 है, तो सिद्ध कीजिए कि tan¹⁰A + cot¹⁰A = 2",
    "options_en": ["True", "False", "Mathematical induction", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "गणितीय आगमन", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Prove: (1 + tan²A)/(1 + cot²A) = tan²A",
    "question_hi": "सिद्ध कीजिए: (1 + tan²A)/(1 + cot²A) = tan²A",
    "options_en": ["True", "False", "Basic identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मूल सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "If sinθ + cosθ = a and secθ + cosecθ = b, prove that b(a² - 1) = 2a",
    "question_hi": "यदि sinθ + cosθ = a और secθ + cosecθ = b है, तो सिद्ध कीजिए कि b(a² - 1) = 2a",
    "options_en": ["True", "False", "Algebraic manipulation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "बीजगणितीय संक्रिया", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Prove: √(1 + cosθ)/(1 - cosθ) = cosecθ + cotθ",
    "question_hi": "सिद्ध कीजिए: √(1 + cosθ)/(1 - cosθ) = cosecθ + cotθ",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "If tanθ = √(1 - e²), prove that secθ + tan³θ cosecθ = (2 - e²)^(3/2)",
    "question_hi": "यदि tanθ = √(1 - e²) है, तो सिद्ध कीजिए कि secθ + tan³θ cosecθ = (2 - e²)^(3/2)",
    "options_en": ["True", "False", "Complex algebra", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल बीजगणित", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Prove: (sinA + cosA)² = 1 + 2sinA cosA",
    "question_hi": "सिद्ध कीजिए: (sinA + cosA)² = 1 + 2sinA cosA",
    "options_en": ["True", "False", "Expansion formula", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "विस्तार सूत्र", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "If cosθ + sinθ = √2 sinθ, prove that cosθ - sinθ = √2 cosθ",
    "question_hi": "यदि cosθ + sinθ = √2 sinθ है, तो सिद्ध कीजिए कि cosθ - sinθ = √2 cosθ",
    "options_en": ["True", "False", "Symmetric relation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "सममित संबंध", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Prove: (secA + tanA)(1 - sinA) = cosA",
    "question_hi": "सिद्ध कीजिए: (secA + tanA)(1 - sinA) = cosA",
    "options_en": ["True", "False", "Product formula", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "गुणनफल सूत्र", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "If sinA + sin²A = 1, prove that cos²A + cos⁴A = 1",
    "question_hi": "यदि sinA + sin²A = 1 है, तो सिद्ध कीजिए कि cos²A + cos⁴A = 1",
    "options_en": ["True", "False", "Substitution method", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "प्रतिस्थापन विधि", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Prove: (1 + sinA)/cosA = cosA/(1 - sinA)",
    "question_hi": "सिद्ध कीजिए: (1 + sinA)/cosA = cosA/(1 - sinA)",
    "options_en": ["True", "False", "Cross multiplication", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "वज्र गुणन", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "If tanA + cotA = 4, prove that tan⁴A + cot⁴A = 194",
    "question_hi": "यदि tanA + cotA = 4 है, तो सिद्ध कीजिए कि tan⁴A + cot⁴A = 194",
    "options_en": ["True", "False", "Algebraic expansion", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "बीजगणितीय विस्तार", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Prove: (cosecA - cotA)² = (1 - cosA)/(1 + cosA)",
    "question_hi": "सिद्ध कीजिए: (cosecA - cotA)² = (1 - cosA)/(1 + cosA)",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "If sinθ + cosθ = p and sinθ cosθ = q, prove that p² = 1 + 2q",
    "question_hi": "यदि sinθ + cosθ = p और sinθ cosθ = q है, तो सिद्ध कीजिए कि p² = 1 + 2q",
    "options_en": ["True", "False", "Algebraic relation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "बीजगणितीय संबंध", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Prove: tanA/(1 - cotA) + cotA/(1 - tanA) = 1 + tanA + cotA",
    "question_hi": "सिद्ध कीजिए: tanA/(1 - cotA) + cotA/(1 - tanA) = 1 + tanA + cotA",
    "options_en": ["True", "False", "Complex simplification", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल सरलीकरण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "If x = a cos³θ and y = b sin³θ, prove that (x/a)^(2/3) + (y/b)^(2/3) = 1",
    "question_hi": "यदि x = a cos³θ और y = b sin³θ है, तो सिद्ध कीजिए कि (x/a)^(2/3) + (y/b)^(2/3) = 1",
    "options_en": ["True", "False", "Parametric form", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "पैरामीट्रिक रूप", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Prove: (1 + sinA)/(1 - sinA) = (secA + tanA)²",
    "question_hi": "सिद्ध कीजिए: (1 + sinA)/(1 - sinA) = (secA + tanA)²",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "If tanθ = 1/√5, prove that (cosec²θ - sec²θ)/(cosec²θ + sec²θ) = 2/3",
    "question_hi": "यदि tanθ = 1/√5 है, तो सिद्ध कीजिए कि (cosec²θ - sec²θ)/(cosec²θ + sec²θ) = 2/3",
    "options_en": ["True", "False", "Calculation needed", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "गणना आवश्यक", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Prove: sin³A + cos³A = (sinA + cosA)(1 - sinA cosA)",
    "question_hi": "सिद्ध कीजिए: sin³A + cos³A = (sinA + cosA)(1 - sinA cosA)",
    "options_en": ["True", "False", "Factorization", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "गुणनखंड", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "If sinA + cosA = m and secA + cosecA = n, prove that n(m² - 1) = 2m",
    "question_hi": "यदि sinA + cosA = m और secA + cosecA = n है, तो सिद्ध कीजिए कि n(m² - 1) = 2m",
    "options_en": ["True", "False", "Algebraic proof", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "बीजगणितीय प्रमाण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Prove: (sinA - cosA + 1)/(sinA + cosA - 1) = (1 + sinA)/cosA",
    "question_hi": "सिद्ध कीजिए: (sinA - cosA + 1)/(sinA + cosA - 1) = (1 + sinA)/cosA",
    "options_en": ["True", "False", "Rationalization", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "परिमेयकरण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "If tanA + sinA = a and tanA - sinA = b, prove that a² - b² = 4√(ab)",
    "question_hi": "यदि tanA + sinA = a और tanA - sinA = b है, तो सिद्ध कीजिए कि a² - b² = 4√(ab)",
    "options_en": ["True", "False", "Complex proof", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल प्रमाण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Prove: (1 + tan²A)cos²A + (1 + cot²A)sin²A = 2",
    "question_hi": "सिद्ध कीजिए: (1 + tan²A)cos²A + (1 + cot²A)sin²A = 2",
    "options_en": ["True", "False", "Simplification", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "सरलीकरण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "If cosA/cosB = m and cosA/sinB = n, prove that (m² + n²)cos²B = n²",
    "question_hi": "यदि cosA/cosB = m और cosA/sinB = n है, तो सिद्ध कीजिए कि (m² + n²)cos²B = n²",
    "options_en": ["True", "False", "Trigonometric proof", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "त्रिकोणमितीय प्रमाण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Prove: √(secA - 1)/(secA + 1) + √(secA + 1)/(secA - 1) = 2cosecA",
    "question_hi": "सिद्ध कीजिए: √(secA - 1)/(secA + 1) + √(secA + 1)/(secA - 1) = 2cosecA",
    "options_en": ["True", "False", "Complex identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "If sinθ + cosθ = √2, prove that θ = 45°",
    "question_hi": "यदि sinθ + cosθ = √2 है, तो सिद्ध कीजिए कि θ = 45°",
    "options_en": ["True", "False", "Specific case", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "विशिष्ट मामला", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Prove: (tanA + cotA)² = sec²A + cosec²A",
    "question_hi": "सिद्ध कीजिए: (tanA + cotA)² = sec²A + cosec²A",
    "options_en": ["True", "False", "Expansion identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "विस्तार सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "If 3cosθ + 4sinθ = 5, prove that sinθ = 4/5 and cosθ = 3/5",
    "question_hi": "यदि 3cosθ + 4sinθ = 5 है, तो सिद्ध कीजिए कि sinθ = 4/5 और cosθ = 3/5",
    "options_en": ["True", "False", "Pythagorean solution", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "पाइथागोरस हल", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Prove: (1 + sinA)/cosA + cosA/(1 + sinA) = 2secA",
    "question_hi": "सिद्ध कीजिए: (1 + sinA)/cosA + cosA/(1 + sinA) = 2secA",
    "options_en": ["True", "False", "Common denominator", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "सामान्य हर", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "If tanθ = √(1 - k²), prove that secθ + tan³θ cosecθ = (2 - k²)^(3/2)",
    "question_hi": "यदि tanθ = √(1 - k²) है, तो सिद्ध कीजिए कि secθ + tan³θ cosecθ = (2 - k²)^(3/2)",
    "options_en": ["True", "False", "Complex algebra", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल बीजगणित", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Prove: sinA/(1 + cosA) + (1 + cosA)/sinA = 2cosecA",
    "question_hi": "सिद्ध कीजिए: sinA/(1 + cosA) + (1 + cosA)/sinA = 2cosecA",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "If sinθ + cosθ = p and sinθ cosθ = q, prove that p⁴ - 4p² + 4 = 0 when q = 1/2",
    "question_hi": "यदि sinθ + cosθ = p और sinθ cosθ = q है, तो सिद्ध कीजिए कि p⁴ - 4p² + 4 = 0 जब q = 1/2",
    "options_en": ["True", "False", "Conditional proof", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "सशर्त प्रमाण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Prove: (cosecA - sinA)(secA - cosA) = 1/(tanA + cotA)",
    "question_hi": "सिद्ध कीजिए: (cosecA - sinA)(secA - cosA) = 1/(tanA + cotA)",
    "options_en": ["True", "False", "Product transformation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "गुणनफल रूपांतरण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "If tanA = 1/7 and tanB = 1/3, prove that A + B = 45°",
    "question_hi": "यदि tanA = 1/7 और tanB = 1/3 है, तो सिद्ध कीजिए कि A + B = 45°",
    "options_en": ["True", "False", "Tangent addition", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "स्पर्शज्या योग", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Prove: √[(1 - cosA)/(1 + cosA)] = cosecA - cotA",
    "question_hi": "सिद्ध कीजिए: √[(1 - cosA)/(1 + cosA)] = cosecA - cotA",
    "options_en": ["True", "False", "Standard identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मानक सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "If sinθ + sin²θ = 1, prove that cos²θ + cos⁴θ = 1",
    "question_hi": "यदि sinθ + sin²θ = 1 है, तो सिद्ध कीजिए कि cos²θ + cos⁴θ = 1",
    "options_en": ["True", "False", "Substitution proof", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "प्रतिस्थापन प्रमाण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Prove: (1 + sinA)/cosA = cosA/(1 - sinA)",
    "question_hi": "सिद्ध कीजिए: (1 + sinA)/cosA = cosA/(1 - sinA)",
    "options_en": ["True", "False", "Cross multiplication proof", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "वज्र गुणन प्रमाण", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "If tanA + cotA = 2, prove that tan²A + cot²A = 2",
    "question_hi": "यदि tanA + cotA = 2 है, तो सिद्ध कीजिए कि tan²A + cot²A = 2",
    "options_en": ["True", "False", "Square relation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "वर्ग संबंध", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Prove: sin⁴A - cos⁴A = sin²A - cos²A",
    "question_hi": "सिद्ध कीजिए: sin⁴A - cos⁴A = sin²A - cos²A",
    "options_en": ["True", "False", "Factorisation identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "गुणनखंड सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "If sinA + cosA = √2, prove that tanA + cotA = 2",
    "question_hi": "यदि sinA + cosA = √2 है, तो सिद्ध कीजिए कि tanA + cotA = 2",
    "options_en": ["True", "False", "Derivation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "व्युत्पत्ति", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Prove: (secA + tanA - 1)/(tanA - secA + 1) = (1 + sinA)/cosA",
    "question_hi": "सिद्ध कीजिए: (secA + tanA - 1)/(tanA - secA + 1) = (1 + sinA)/cosA",
    "options_en": ["True", "False", "Complex manipulation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "जटिल संक्रिया", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "If 2sinθ = x + 1/x, prove that 2cosθ = x - 1/x",
    "question_hi": "यदि 2sinθ = x + 1/x है, तो सिद्ध कीजिए कि 2cosθ = x - 1/x",
    "options_en": ["True", "False", "Complex number relation", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "सम्मिश्र संख्या संबंध", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Prove: (1 + tan²A)cos²A = 1",
    "question_hi": "सिद्ध कीजिए: (1 + tan²A)cos²A = 1",
    "options_en": ["True", "False", "Basic identity", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मूल सर्वसमिका", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "If sinθ + cosθ = √2, prove that θ = 45°",
    "question_hi": "यदि sinθ + cosθ = √2 है, तो सिद्ध कीजिए कि θ = 45°",
    "options_en": ["True", "False", "Specific solution", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "विशिष्ट हल", "सिद्ध नहीं किया जा सकता"],
    "answer_en": "True",
    "answer_hi": "सत्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Prove: (sinA + cosA)² + (sinA - cosA)² = 2",
    "question_hi": "सिद्ध कीजिए: (sinA + cosA)² + (sinA - cosA)² = 2",
    "options_en": ["True", "False", "Basic expansion", "Cannot be proven"],
    "options_hi": ["सत्य", "असत्य", "मूल विस्तार", "सिद्ध नहीं किया जा सकता"],
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