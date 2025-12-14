const questions = [
  {
    "num": 1,
    "question_en": "If sin⁶θ + cos⁶θ = 1/4, then sin²θ cos²θ equals:",
    "question_hi": "यदि sin⁶θ + cos⁶θ = 1/4 है, तो sin²θ cos²θ बराबर है:",
    "options_en": ["1/8", "1/16", "1/12", "1/24"],
    "options_hi": ["1/8", "1/16", "1/12", "1/24"],
    "answer_en": "1/12",
    "answer_hi": "1/12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "If tan A = 1/2, tan B = 1/3, tan C = 1/7, then A+B+C equals:",
    "question_hi": "यदि tan A = 1/2, tan B = 1/3, tan C = 1/7 है, तो A+B+C बराबर है:",
    "options_en": ["π/2", "π/3", "π/4", "π"],
    "options_hi": ["π/2", "π/3", "π/4", "π"],
    "answer_en": "π/4",
    "answer_hi": "π/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "The value of √(1 + sin A) - √(1 - sin A), when π/2 < A < π, is:",
    "question_hi": "√(1 + sin A) - √(1 - sin A) का मान, जब π/2 < A < π है:",
    "options_en": ["2 sin(A/2)", "2 cos(A/2)", "-2 sin(A/2)", "-2 cos(A/2)"],
    "options_hi": ["2 sin(A/2)", "2 cos(A/2)", "-2 sin(A/2)", "-2 cos(A/2)"],
    "answer_en": "-2 sin(A/2)",
    "answer_hi": "-2 sin(A/2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If sin θ = (a² - b²)/(a² + b²), then tan θ equals:",
    "question_hi": "यदि sin θ = (a² - b²)/(a² + b²) है, तो tan θ बराबर है:",
    "options_en": ["(a² - b²)/2ab", "2ab/(a² - b²)", "(a² + b²)/2ab", "2ab/(a² + b²)"],
    "options_hi": ["(a² - b²)/2ab", "2ab/(a² - b²)", "(a² + b²)/2ab", "2ab/(a² + b²)"],
    "answer_en": "(a² - b²)/2ab",
    "answer_hi": "(a² - b²)/2ab",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "The minimum value of 4 cos²θ + 9 sec²θ is:",
    "question_hi": "4 cos²θ + 9 sec²θ का न्यूनतम मान है:",
    "options_en": ["12", "13", "14", "15"],
    "options_hi": ["12", "13", "14", "15"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If sin x + sin y = a and cos x + cos y = b, then cos(x-y) equals:",
    "question_hi": "यदि sin x + sin y = a और cos x + cos y = b है, तो cos(x-y) बराबर है:",
    "options_en": ["(a² + b² - 2)/2", "(a² + b²)/2 - 1", "2 - (a² + b²)/2", "(4 - a² - b²)/2"],
    "options_hi": ["(a² + b² - 2)/2", "(a² + b²)/2 - 1", "2 - (a² + b²)/2", "(4 - a² - b²)/2"],
    "answer_en": "(a² + b² - 2)/2",
    "answer_hi": "(a² + b² - 2)/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The value of tan 20° + 2 tan 40° + 4 tan 80° - 8 cot 160° is:",
    "question_hi": "tan 20° + 2 tan 40° + 4 tan 80° - 8 cot 160° का मान है:",
    "options_en": ["0", "√3", "1", "cot 20°"],
    "options_hi": ["0", "√3", "1", "cot 20°"],
    "answer_en": "cot 20°",
    "answer_hi": "cot 20°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If (1 + tan 1°)(1 + tan 2°)...(1 + tan 45°) = 2ⁿ, then n equals:",
    "question_hi": "यदि (1 + tan 1°)(1 + tan 2°)...(1 + tan 45°) = 2ⁿ है, तो n बराबर है:",
    "options_en": ["22", "23", "24", "25"],
    "options_hi": ["22", "23", "24", "25"],
    "answer_en": "23",
    "answer_hi": "23",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "If tan θ = b/a, then a cos 2θ + b sin 2θ equals:",
    "question_hi": "यदि tan θ = b/a है, तो a cos 2θ + b sin 2θ बराबर है:",
    "options_en": ["a", "b", "a-b", "a+b"],
    "options_hi": ["a", "b", "a-b", "a+b"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The value of cos 2π/7 + cos 4π/7 + cos 6π/7 is:",
    "question_hi": "cos 2π/7 + cos 4π/7 + cos 6π/7 का मान है:",
    "options_en": ["-1/2", "1/2", "0", "1"],
    "options_hi": ["-1/2", "1/2", "0", "1"],
    "answer_en": "-1/2",
    "answer_hi": "-1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If sin x + sin²x = 1, then cos⁸x + 2cos⁶x + cos⁴x equals:",
    "question_hi": "यदि sin x + sin²x = 1 है, तो cos⁸x + 2cos⁶x + cos⁴x बराबर है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The value of cos 24° + cos 5° + cos 175° + cos 204° + cos 300° is:",
    "question_hi": "cos 24° + cos 5° + cos 175° + cos 204° + cos 300° का मान है:",
    "options_en": ["0", "1", "1/2", "√3/2"],
    "options_hi": ["0", "1", "1/2", "√3/2"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "If tan A + cot A = 2 cosec 2A, then one value of A is:",
    "question_hi": "यदि tan A + cot A = 2 cosec 2A है, तो A का एक मान है:",
    "options_en": ["π/6", "π/4", "π/3", "π/2"],
    "options_hi": ["π/6", "π/4", "π/3", "π/2"],
    "answer_en": "π/6",
    "answer_hi": "π/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The value of sin 78° - sin 18° + sin 30° is:",
    "question_hi": "sin 78° - sin 18° + sin 30° का मान है:",
    "options_en": ["1/2", "1", "√3/2", "√2/2"],
    "options_hi": ["1/2", "1", "√3/2", "√2/2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "If x = tan θ + sin θ and y = tan θ - sin θ, then x⁴ - y⁴ equals:",
    "question_hi": "यदि x = tan θ + sin θ और y = tan θ - sin θ है, तो x⁴ - y⁴ बराबर है:",
    "options_en": ["4xy", "4xy√(xy)", "16xy", "16xy√(xy)"],
    "options_hi": ["4xy", "4xy√(xy)", "16xy", "16xy√(xy)"],
    "answer_en": "16xy√(xy)",
    "answer_hi": "16xy√(xy)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The value of cot 70° + 4 cos 70° is:",
    "question_hi": "cot 70° + 4 cos 70° का मान है:",
    "options_en": ["√3", "1", "1/√3", "2"],
    "options_hi": ["√3", "1", "1/√3", "2"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If cos(x-y), cos x, cos(x+y) are in H.P., then cos x sec(y/2) equals:",
    "question_hi": "यदि cos(x-y), cos x, cos(x+y) हरात्मक श्रेणी में हैं, तो cos x sec(y/2) बराबर है:",
    "options_en": ["±√2", "±√3", "±2", "±3"],
    "options_hi": ["±√2", "±√3", "±2", "±3"],
    "answer_en": "±√2",
    "answer_hi": "±√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The value of tan 9° - tan 27° - tan 63° + tan 81° is:",
    "question_hi": "tan 9° - tan 27° - tan 63° + tan 81° का मान है:",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If sin θ + sin φ = √3(cos φ - cos θ), then sin 3θ + sin 3φ equals:",
    "question_hi": "यदि sin θ + sin φ = √3(cos φ - cos θ) है, तो sin 3θ + sin 3φ बराबर है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The value of cos 20° cos 40° cos 60° cos 80° is:",
    "question_hi": "cos 20° cos 40° cos 60° cos 80° का मान है:",
    "options_en": ["1/16", "1/8", "1/4", "1/2"],
    "options_hi": ["1/16", "1/8", "1/4", "1/2"],
    "answer_en": "1/16",
    "answer_hi": "1/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If α + β + γ = π, then sin²α + sin²β + sin²γ - 2 cos α cos β cos γ equals:",
    "question_hi": "यदि α + β + γ = π है, तो sin²α + sin²β + sin²γ - 2 cos α cos β cos γ बराबर है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The value of cos 2π/15 cos 4π/15 cos 8π/15 cos 14π/15 is:",
    "question_hi": "cos 2π/15 cos 4π/15 cos 8π/15 cos 14π/15 का मान है:",
    "options_en": ["1/16", "1/8", "1/4", "1/2"],
    "options_hi": ["1/16", "1/8", "1/4", "1/2"],
    "answer_en": "1/16",
    "answer_hi": "1/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "If tan θ = (1 - cos 2α)/sin 2α, then tan(α + θ) equals:",
    "question_hi": "यदि tan θ = (1 - cos 2α)/sin 2α है, तो tan(α + θ) बराबर है:",
    "options_en": ["cot α", "tan α", "1", "0"],
    "options_hi": ["cot α", "tan α", "1", "0"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The value of sin 47° - sin 25° + sin 61° - sin 11° is:",
    "question_hi": "sin 47° - sin 25° + sin 61° - sin 11° का मान है:",
    "options_en": ["sin 7°", "cos 7°", "sin 36°", "cos 36°"],
    "options_hi": ["sin 7°", "cos 7°", "sin 36°", "cos 36°"],
    "answer_en": "cos 7°",
    "answer_hi": "cos 7°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If cos A + cos B = 1/2 and sin A + sin B = 1/4, then tan(A/2) tan(B/2) equals:",
    "question_hi": "यदि cos A + cos B = 1/2 और sin A + sin B = 1/4 है, तो tan(A/2) tan(B/2) बराबर है:",
    "options_en": ["1/3", "2/3", "3/2", "3"],
    "options_hi": ["1/3", "2/3", "3/2", "3"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The value of sin 20° sin 40° sin 60° sin 80° is:",
    "question_hi": "sin 20° sin 40° sin 60° sin 80° का मान है:",
    "options_en": ["3/16", "√3/16", "3/8", "1/8"],
    "options_hi": ["3/16", "√3/16", "3/8", "1/8"],
    "answer_en": "3/16",
    "answer_hi": "3/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "If sin θ + sin φ = a and cos θ + cos φ = b, then tan(θ/2) tan(φ/2) equals:",
    "question_hi": "यदि sin θ + sin φ = a और cos θ + cos φ = b है, तो tan(θ/2) tan(φ/2) बराबर है:",
    "options_en": ["(a² + b² - 4)/(a² + b²)", "(4 - a² - b²)/(a² + b²)", "(a² + b²)/(4 - a² - b²)", "(a² + b²)/(a² + b² - 4)"],
    "options_hi": ["(a² + b² - 4)/(a² + b²)", "(4 - a² - b²)/(a² + b²)", "(a² + b²)/(4 - a² - b²)", "(a² + b²)/(a² + b² - 4)"],
    "answer_en": "(4 - a² - b²)/(a² + b²)",
    "answer_hi": "(4 - a² - b²)/(a² + b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The value of cos 10° cos 30° cos 50° cos 70° is:",
    "question_hi": "cos 10° cos 30° cos 50° cos 70° का मान है:",
    "options_en": ["3/16", "√3/16", "3/8", "1/8"],
    "options_hi": ["3/16", "√3/16", "3/8", "1/8"],
    "answer_en": "3/16",
    "answer_hi": "3/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "If tan A = n tan B and sin A = m sin B, then cos²A equals:",
    "question_hi": "यदि tan A = n tan B और sin A = m sin B है, तो cos²A बराबर है:",
    "options_en": ["(m² - 1)/(n² - 1)", "(n² - 1)/(m² - 1)", "(m² - n²)/(n² - 1)", "(n² - m²)/(m² - 1)"],
    "options_hi": ["(m² - 1)/(n² - 1)", "(n² - 1)/(m² - 1)", "(m² - n²)/(n² - 1)", "(n² - m²)/(m² - 1)"],
    "answer_en": "(m² - 1)/(n² - 1)",
    "answer_hi": "(m² - 1)/(n² - 1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The value of sin 78° + sin 42° + sin 60° is:",
    "question_hi": "sin 78° + sin 42° + sin 60° का मान है:",
    "options_en": ["(√3 + √6)/2", "(√6 + √2)/2", "(√3 + 1)/2", "(√6 + 1)/2"],
    "options_hi": ["(√3 + √6)/2", "(√6 + √2)/2", "(√3 + 1)/2", "(√6 + 1)/2"],
    "answer_en": "(√6 + √2)/2",
    "answer_hi": "(√6 + √2)/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "If sin θ = 3/5 and cos φ = 12/13, where θ and φ are in first quadrant, then cos(θ + φ) equals:",
    "question_hi": "यदि sin θ = 3/5 और cos φ = 12/13 है, जहाँ θ और φ प्रथम चतुर्थांश में हैं, तो cos(θ + φ) बराबर है:",
    "options_en": ["33/65", "56/65", "16/65", "63/65"],
    "options_hi": ["33/65", "56/65", "16/65", "63/65"],
    "answer_en": "33/65",
    "answer_hi": "33/65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The value of tan 20° tan 40° tan 80° is:",
    "question_hi": "tan 20° tan 40° tan 80° का मान है:",
    "options_en": ["√3", "1", "1/√3", "tan 60°"],
    "options_hi": ["√3", "1", "1/√3", "tan 60°"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If cos θ = cos α cos β, then tan((θ+α)/2) tan((θ-α)/2) equals:",
    "question_hi": "यदि cos θ = cos α cos β है, तो tan((θ+α)/2) tan((θ-α)/2) बराबर है:",
    "options_en": ["tan²(β/2)", "cot²(β/2)", "sin²(β/2)", "cos²(β/2)"],
    "options_hi": ["tan²(β/2)", "cot²(β/2)", "sin²(β/2)", "cos²(β/2)"],
    "answer_en": "tan²(β/2)",
    "answer_hi": "tan²(β/2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The value of cos 36° cos 72° cos 108° cos 144° is:",
    "question_hi": "cos 36° cos 72° cos 108° cos 144° का मान है:",
    "options_en": ["1/16", "1/8", "1/4", "1/2"],
    "options_hi": ["1/16", "1/8", "1/4", "1/2"],
    "answer_en": "1/16",
    "answer_hi": "1/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "If sin x + sin y = a and cos x + cos y = b, then cos²((x-y)/2) equals:",
    "question_hi": "यदि sin x + sin y = a और cos x + cos y = b है, तो cos²((x-y)/2) बराबर है:",
    "options_en": ["(a² + b²)/4", "(4 - a² - b²)/4", "(a² + b² - 4)/4", "1 - (a² + b²)/4"],
    "options_hi": ["(a² + b²)/4", "(4 - a² - b²)/4", "(a² + b² - 4)/4", "1 - (a² + b²)/4"],
    "answer_en": "(a² + b²)/4",
    "answer_hi": "(a² + b²)/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The value of sin 10° sin 30° sin 50° sin 70° is:",
    "question_hi": "sin 10° sin 30° sin 50° sin 70° का मान है:",
    "options_en": ["1/8", "1/16", "1/4", "1/2"],
    "options_hi": ["1/8", "1/16", "1/4", "1/2"],
    "answer_en": "1/16",
    "answer_hi": "1/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If tan θ = √(1 - e²), then √(1 + e²) sec θ equals:",
    "question_hi": "यदि tan θ = √(1 - e²) है, तो √(1 + e²) sec θ बराबर है:",
    "options_en": ["√(2 - e²)", "√(2 + e²)", "√(1 - e²)", "√(1 + e²)"],
    "options_hi": ["√(2 - e²)", "√(2 + e²)", "√(1 - e²)", "√(1 + e²)"],
    "answer_en": "√(2 - e²)",
    "answer_hi": "√(2 - e²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The value of cos 20° cos 40° cos 80° is:",
    "question_hi": "cos 20° cos 40° cos 80° का मान है:",
    "options_en": ["1/8", "√3/8", "1/4", "√3/4"],
    "options_hi": ["1/8", "√3/8", "1/4", "√3/4"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If sin A + sin B = √3(cos B - cos A), then sin 3A + sin 3B equals:",
    "question_hi": "यदि sin A + sin B = √3(cos B - cos A) है, तो sin 3A + sin 3B बराबर है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The value of sin 6° sin 42° sin 66° sin 78° is:",
    "question_hi": "sin 6° sin 42° sin 66° sin 78° का मान है:",
    "options_en": ["1/8", "1/16", "1/4", "1/2"],
    "options_hi": ["1/8", "1/16", "1/4", "1/2"],
    "answer_en": "1/16",
    "answer_hi": "1/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If cos(α - β) = 1 and cos(α + β) = 1/e, where e is Euler's number, then cos α cos β equals:",
    "question_hi": "यदि cos(α - β) = 1 और cos(α + β) = 1/e है, जहाँ e यूलर संख्या है, तो cos α cos β बराबर है:",
    "options_en": ["(e+1)/(2e)", "(e-1)/(2e)", "(e+1)/e", "(e-1)/e"],
    "options_hi": ["(e+1)/(2e)", "(e-1)/(2e)", "(e+1)/e", "(e-1)/e"],
    "answer_en": "(e+1)/(2e)",
    "answer_hi": "(e+1)/(2e)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The value of tan 6° tan 42° tan 66° tan 78° is:",
    "question_hi": "tan 6° tan 42° tan 66° tan 78° का मान है:",
    "options_en": ["1", "1/2", "1/4", "1/8"],
    "options_hi": ["1", "1/2", "1/4", "1/8"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "If sin θ = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ), then cos 2θ equals:",
    "question_hi": "यदि sin θ = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ) है, तो cos 2θ बराबर है:",
    "options_en": ["tanh 2x", "coth 2x", "sech 2x", "cosech 2x"],
    "options_hi": ["tanh 2x", "coth 2x", "sech 2x", "cosech 2x"],
    "answer_en": "sech 2x",
    "answer_hi": "sech 2x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The value of sin 50° + sin 10° - sin 70° is:",
    "question_hi": "sin 50° + sin 10° - sin 70° का मान है:",
    "options_en": ["0", "1", "1/2", "√3/2"],
    "options_hi": ["0", "1", "1/2", "√3/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If tan θ = (1 - cos φ)/sin φ, then tan(θ + φ) equals:",
    "question_hi": "यदि tan θ = (1 - cos φ)/sin φ है, तो tan(θ + φ) बराबर है:",
    "options_en": ["tan(φ/2)", "cot(φ/2)", "1", "0"],
    "options_hi": ["tan(φ/2)", "cot(φ/2)", "1", "0"],
    "answer_en": "tan(φ/2)",
    "answer_hi": "tan(φ/2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The value of cos 20° cos 100° cos 140° is:",
    "question_hi": "cos 20° cos 100° cos 140° का मान है:",
    "options_en": ["1/8", "-1/8", "1/4", "-1/4"],
    "options_hi": ["1/8", "-1/8", "1/4", "-1/4"],
    "answer_en": "-1/8",
    "answer_hi": "-1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If sin θ + sin φ = a and cos θ + cos φ = b, then sin((θ+φ)/2) cos((θ-φ)/2) equals:",
    "question_hi": "यदि sin θ + sin φ = a और cos θ + cos φ = b है, तो sin((θ+φ)/2) cos((θ-φ)/2) बराबर है:",
    "options_en": ["a/2", "b/2", "ab/2", "(a+b)/2"],
    "options_hi": ["a/2", "b/2", "ab/2", "(a+b)/2"],
    "answer_en": "a/2",
    "answer_hi": "a/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The value of sin 18° cos 36° is:",
    "question_hi": "sin 18° cos 36° का मान है:",
    "options_en": ["1/4", "1/2", "√5/4", "√5/8"],
    "options_hi": ["1/4", "1/2", "√5/4", "√5/8"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "If tan A = 1/2, tan B = 1/3, then cos 2A equals:",
    "question_hi": "यदि tan A = 1/2, tan B = 1/3 है, तो cos 2A बराबर है:",
    "options_en": ["sin 2B", "cos 2B", "tan 2B", "cot 2B"],
    "options_hi": ["sin 2B", "cos 2B", "tan 2B", "cot 2B"],
    "answer_en": "sin 2B",
    "answer_hi": "sin 2B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The value of cos 40° + cos 80° + cos 160° + cos 240° is:",
    "question_hi": "cos 40° + cos 80° + cos 160° + cos 240° का मान है:",
    "options_en": ["0", "1", "-1", "1/2"],
    "options_hi": ["0", "1", "-1", "1/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "If sin x = 3/5 and cos y = 12/13, where x and y are in first quadrant, then sin(x+y) equals:",
    "question_hi": "यदि sin x = 3/5 और cos y = 12/13 है, जहाँ x और y प्रथम चतुर्थांश में हैं, तो sin(x+y) बराबर है:",
    "options_en": ["56/65", "33/65", "16/65", "63/65"],
    "options_hi": ["56/65", "33/65", "16/65", "63/65"],
    "answer_en": "56/65",
    "answer_hi": "56/65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "The value of sin 15° cos 15° cos 30° cos 60° is:",
    "question_hi": "sin 15° cos 15° cos 30° cos 60° का मान है:",
    "options_en": ["1/8", "1/16", "√3/16", "√3/8"],
    "options_hi": ["1/8", "1/16", "√3/16", "√3/8"],
    "answer_en": "1/16",
    "answer_hi": "1/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "If cos θ = (a cos φ + b)/(a + b cos φ), then tan(θ/2) tan(φ/2) equals:",
    "question_hi": "यदि cos θ = (a cos φ + b)/(a + b cos φ) है, तो tan(θ/2) tan(φ/2) बराबर है:",
    "options_en": ["√((a-b)/(a+b))", "√((a+b)/(a-b))", "√((b-a)/(a+b))", "√((a+b)/(b-a))"],
    "options_hi": ["√((a-b)/(a+b))", "√((a+b)/(a-b))", "√((b-a)/(a+b))", "√((a+b)/(b-a))"],
    "answer_en": "√((a-b)/(a+b))",
    "answer_hi": "√((a-b)/(a+b))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "The value of cos 20° + cos 40° + cos 60° + cos 80° + cos 100° + cos 120° + cos 140° + cos 160° + cos 180° is:",
    "question_hi": "cos 20° + cos 40° + cos 60° + cos 80° + cos 100° + cos 120° + cos 140° + cos 160° + cos 180° का मान है:",
    "options_en": ["-1", "0", "1", "1/2"],
    "options_hi": ["-1", "0", "1", "1/2"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "If sin α + sin β = a and cos α + cos β = b, then tan α tan β equals:",
    "question_hi": "यदि sin α + sin β = a और cos α + cos β = b है, तो tan α tan β बराबर है:",
    "options_en": ["(4 - a² - b²)/(a² + b²)", "(a² + b² - 4)/(a² + b²)", "(a² + b²)/(4 - a² - b²)", "(a² + b²)/(a² + b² - 4)"],
    "options_hi": ["(4 - a² - b²)/(a² + b²)", "(a² + b² - 4)/(a² + b²)", "(a² + b²)/(4 - a² - b²)", "(a² + b²)/(a² + b² - 4)"],
    "answer_en": "(4 - a² - b²)/(a² + b²)",
    "answer_hi": "(4 - a² - b²)/(a² + b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "The value of sin 10° sin 50° sin 70° is:",
    "question_hi": "sin 10° sin 50° sin 70° का मान है:",
    "options_en": ["1/8", "1/4", "1/2", "√3/8"],
    "options_hi": ["1/8", "1/4", "1/2", "√3/8"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "If tan θ = (1 - cos 2x)/(sin 2x), then tan(θ + x) equals:",
    "question_hi": "यदि tan θ = (1 - cos 2x)/(sin 2x) है, तो tan(θ + x) बराबर है:",
    "options_en": ["tan x", "cot x", "1", "0"],
    "options_hi": ["tan x", "cot x", "1", "0"],
    "answer_en": "tan x",
    "answer_hi": "tan x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "The value of cos 20° - cos 40° + cos 60° - cos 80° + cos 100° - cos 120° + cos 140° - cos 160° + cos 180° is:",
    "question_hi": "cos 20° - cos 40° + cos 60° - cos 80° + cos 100° - cos 120° + cos 140° - cos 160° + cos 180° का मान है:",
    "options_en": ["-1/2", "0", "1/2", "1"],
    "options_hi": ["-1/2", "0", "1/2", "1"],
    "answer_en": "-1/2",
    "answer_hi": "-1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "If sin θ = 2t/(1+t²), then cos θ equals:",
    "question_hi": "यदि sin θ = 2t/(1+t²) है, तो cos θ बराबर है:",
    "options_en": ["(1-t²)/(1+t²)", "(1+t²)/(1-t²)", "2t/(1-t²)", "(1-t²)/2t"],
    "options_hi": ["(1-t²)/(1+t²)", "(1+t²)/(1-t²)", "2t/(1-t²)", "(1-t²)/2t"],
    "answer_en": "(1-t²)/(1+t²)",
    "answer_hi": "(1-t²)/(1+t²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "The value of sin 75° cos 15° is:",
    "question_hi": "sin 75° cos 15° का मान है:",
    "options_en": ["(√3+1)/4", "(√3-1)/4", "(√3+2)/4", "(√3-2)/4"],
    "options_hi": ["(√3+1)/4", "(√3-1)/4", "(√3+2)/4", "(√3-2)/4"],
    "answer_en": "(√3+1)/4",
    "answer_hi": "(√3+1)/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "If cos θ + cos φ = a and sin θ + sin φ = b, then tan((θ+φ)/2) equals:",
    "question_hi": "यदि cos θ + cos φ = a और sin θ + sin φ = b है, तो tan((θ+φ)/2) बराबर है:",
    "options_en": ["a/b", "b/a", "ab", "a+b"],
    "options_hi": ["a/b", "b/a", "ab", "a+b"],
    "answer_en": "b/a",
    "answer_hi": "b/a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "The value of cos 36° sin 18° is:",
    "question_hi": "cos 36° sin 18° का मान है:",
    "options_en": ["1/4", "1/2", "√5/4", "√5/8"],
    "options_hi": ["1/4", "1/2", "√5/4", "√5/8"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "If sin x + sin y = √3(cos y - cos x), then the value of sin 3x + sin 3y is:",
    "question_hi": "यदि sin x + sin y = √3(cos y - cos x) है, तो sin 3x + sin 3y का मान है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "The value of sin 12° sin 48° sin 54° is:",
    "question_hi": "sin 12° sin 48° sin 54° का मान है:",
    "options_en": ["1/8", "1/4", "1/2", "√3/8"],
    "options_hi": ["1/8", "1/4", "1/2", "√3/8"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "If tan A = 1/7 and tan B = 1/3, then cos 2A equals:",
    "question_hi": "यदि tan A = 1/7 और tan B = 1/3 है, तो cos 2A बराबर है:",
    "options_en": ["sin 2B", "cos 2B", "tan 2B", "cot 2B"],
    "options_hi": ["sin 2B", "cos 2B", "tan 2B", "cot 2B"],
    "answer_en": "sin 2B",
    "answer_hi": "sin 2B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "The value of cos 40° cos 80° cos 160° is:",
    "question_hi": "cos 40° cos 80° cos 160° का मान है:",
    "options_en": ["1/8", "-1/8", "1/4", "-1/4"],
    "options_hi": ["1/8", "-1/8", "1/4", "-1/4"],
    "answer_en": "-1/8",
    "answer_hi": "-1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "If sin θ = (eⁱˣ - e⁻ⁱˣ)/(2i), then cos θ equals:",
    "question_hi": "यदि sin θ = (eⁱˣ - e⁻ⁱˣ)/(2i) है, तो cos θ बराबर है:",
    "options_en": ["(eⁱˣ + e⁻ⁱˣ)/2", "(eⁱˣ - e⁻ⁱˣ)/2", "(eˣ + e⁻ˣ)/2", "(eˣ - e⁻ˣ)/2"],
    "options_hi": ["(eⁱˣ + e⁻ⁱˣ)/2", "(eⁱˣ - e⁻ⁱˣ)/2", "(eˣ + e⁻ˣ)/2", "(eˣ - e⁻ˣ)/2"],
    "answer_en": "(eⁱˣ + e⁻ⁱˣ)/2",
    "answer_hi": "(eⁱˣ + e⁻ⁱˣ)/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "The value of sin 10° + sin 20° + sin 30° + ... + sin 350° + sin 360° is:",
    "question_hi": "sin 10° + sin 20° + sin 30° + ... + sin 350° + sin 360° का मान है:",
    "options_en": ["0", "1", "-1", "2"],
    "options_hi": ["0", "1", "-1", "2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "If tan θ = (1 - cos 2A)/(sin 2A), then tan(θ + A) equals:",
    "question_hi": "यदि tan θ = (1 - cos 2A)/(sin 2A) है, तो tan(θ + A) बराबर है:",
    "options_en": ["tan A", "cot A", "1", "0"],
    "options_hi": ["tan A", "cot A", "1", "0"],
    "answer_en": "tan A",
    "answer_hi": "tan A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "The value of cos 20° cos 40° cos 60° cos 80° cos 100° cos 120° cos 140° cos 160° cos 180° is:",
    "question_hi": "cos 20° cos 40° cos 60° cos 80° cos 100° cos 120° cos 140° cos 160° cos 180° का मान है:",
    "options_en": ["0", "1", "-1", "1/256"],
    "options_hi": ["0", "1", "-1", "1/256"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "If sin α + sin β = a and cos α + cos β = b, then cos(α-β) equals:",
    "question_hi": "यदि sin α + sin β = a और cos α + cos β = b है, तो cos(α-β) बराबर है:",
    "options_en": ["(a²+b²-2)/2", "(a²+b²)/2", "2-(a²+b²)/2", "(4-a²-b²)/2"],
    "options_hi": ["(a²+b²-2)/2", "(a²+b²)/2", "2-(a²+b²)/2", "(4-a²-b²)/2"],
    "answer_en": "(a²+b²-2)/2",
    "answer_hi": "(a²+b²-2)/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "The value of sin 6° sin 42° sin 66° sin 78° sin 102° sin 138° sin 162° sin 198° is:",
    "question_hi": "sin 6° sin 42° sin 66° sin 78° sin 102° sin 138° sin 162° sin 198° का मान है:",
    "options_en": ["1/256", "1/128", "1/64", "1/32"],
    "options_hi": ["1/256", "1/128", "1/64", "1/32"],
    "answer_en": "1/256",
    "answer_hi": "1/256",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "If tan θ = (1 - e²)/(2√e), then sec θ + tan θ equals:",
    "question_hi": "यदि tan θ = (1 - e²)/(2√e) है, तो sec θ + tan θ बराबर है:",
    "options_en": ["√((1+e)/(1-e))", "√((1-e)/(1+e))", "(1+e)/(1-e)", "(1-e)/(1+e)"],
    "options_hi": ["√((1+e)/(1-e))", "√((1-e)/(1+e))", "(1+e)/(1-e)", "(1-e)/(1+e)"],
    "answer_en": "√((1+e)/(1-e))",
    "answer_hi": "√((1+e)/(1-e))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "The value of cos 20° + cos 40° + cos 60° + cos 80° is:",
    "question_hi": "cos 20° + cos 40° + cos 60° + cos 80° का मान है:",
    "options_en": ["1/2", "1", "√3/2", "√2/2"],
    "options_hi": ["1/2", "1", "√3/2", "√2/2"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "If sin x + sin y = a and cos x + cos y = b, then tan x + tan y equals:",
    "question_hi": "यदि sin x + sin y = a और cos x + cos y = b है, तो tan x + tan y बराबर है:",
    "options_en": ["2ab/(b² - a²)", "2ab/(a² - b²)", "ab/(b² - a²)", "ab/(a² - b²)"],
    "options_hi": ["2ab/(b² - a²)", "2ab/(a² - b²)", "ab/(b² - a²)", "ab/(a² - b²)"],
    "answer_en": "2ab/(b² - a²)",
    "answer_hi": "2ab/(b² - a²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "The value of sin 15° + sin 45° + sin 75° + sin 105° + sin 135° + sin 165° + sin 195° + sin 225° is:",
    "question_hi": "sin 15° + sin 45° + sin 75° + sin 105° + sin 135° + sin 165° + sin 195° + sin 225° का मान है:",
    "options_en": ["0", "1", "√2", "√3"],
    "options_hi": ["0", "1", "√2", "√3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "If tan θ = (a-b)/(a+b), then (a sin θ - b cos θ)/(a sin θ + b cos θ) equals:",
    "question_hi": "यदि tan θ = (a-b)/(a+b) है, तो (a sin θ - b cos θ)/(a sin θ + b cos θ) बराबर है:",
    "options_en": ["(a²-b²)/(a²+b²)", "(b²-a²)/(a²+b²)", "(a-b)/(a+b)", "(a+b)/(a-b)"],
    "options_hi": ["(a²-b²)/(a²+b²)", "(b²-a²)/(a²+b²)", "(a-b)/(a+b)", "(a+b)/(a-b)"],
    "answer_en": "(a²-b²)/(a²+b²)",
    "answer_hi": "(a²-b²)/(a²+b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "The value of cos 36° + cos 108° + cos 252° + cos 324° is:",
    "question_hi": "cos 36° + cos 108° + cos 252° + cos 324° का मान है:",
    "options_en": ["0", "1", "1/2", "√5/2"],
    "options_hi": ["0", "1", "1/2", "√5/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "If sin θ + sin φ = a and cos θ + cos φ = b, then cos²((θ-φ)/2) equals:",
    "question_hi": "यदि sin θ + sin φ = a और cos θ + cos φ = b है, तो cos²((θ-φ)/2) बराबर है:",
    "options_en": ["(a²+b²)/4", "(4-a²-b²)/4", "(a²+b²-4)/4", "1-(a²+b²)/4"],
    "options_hi": ["(a²+b²)/4", "(4-a²-b²)/4", "(a²+b²-4)/4", "1-(a²+b²)/4"],
    "answer_en": "(a²+b²)/4",
    "answer_hi": "(a²+b²)/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "The value of sin 10° sin 50° sin 70° sin 110° sin 130° sin 170° is:",
    "question_hi": "sin 10° sin 50° sin 70° sin 110° sin 130° sin 170° का मान है:",
    "options_en": ["1/64", "1/32", "1/16", "1/8"],
    "options_hi": ["1/64", "1/32", "1/16", "1/8"],
    "answer_en": "1/64",
    "answer_hi": "1/64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "If tan A = 1/3 and tan B = 1/7, then A+B equals:",
    "question_hi": "यदि tan A = 1/3 और tan B = 1/7 है, तो A+B बराबर है:",
    "options_en": ["π/6", "π/4", "π/3", "π/2"],
    "options_hi": ["π/6", "π/4", "π/3", "π/2"],
    "answer_en": "π/4",
    "answer_hi": "π/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "The value of cos 20° cos 40° cos 80° cos 160° cos 320° is:",
    "question_hi": "cos 20° cos 40° cos 80° cos 160° cos 320° का मान है:",
    "options_en": ["1/32", "1/16", "1/8", "1/4"],
    "options_hi": ["1/32", "1/16", "1/8", "1/4"],
    "answer_en": "1/32",
    "answer_hi": "1/32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "If sin θ = (√5 - 1)/4, then cos 2θ equals:",
    "question_hi": "यदि sin θ = (√5 - 1)/4 है, तो cos 2θ बराबर है:",
    "options_en": ["(√5 - 1)/2", "(√5 + 1)/2", "(3 - √5)/2", "(3 + √5)/2"],
    "options_hi": ["(√5 - 1)/2", "(√5 + 1)/2", "(3 - √5)/2", "(3 + √5)/2"],
    "answer_en": "(√5 - 1)/2",
    "answer_hi": "(√5 - 1)/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "The value of sin 18° + sin 54° - sin 90° + sin 126° + sin 162° + sin 198° + sin 234° + sin 270° + sin 306° + sin 342° is:",
    "question_hi": "sin 18° + sin 54° - sin 90° + sin 126° + sin 162° + sin 198° + sin 234° + sin 270° + sin 306° + sin 342° का मान है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "If cos θ = (eⁱˣ + e⁻ⁱˣ)/2, then sin θ equals:",
    "question_hi": "यदि cos θ = (eⁱˣ + e⁻ⁱˣ)/2 है, तो sin θ बराबर है:",
    "options_en": ["(eⁱˣ - e⁻ⁱˣ)/(2i)", "(eⁱˣ + e⁻ⁱˣ)/(2i)", "(eˣ - e⁻ˣ)/(2i)", "(eˣ + e⁻ˣ)/(2i)"],
    "options_hi": ["(eⁱˣ - e⁻ⁱˣ)/(2i)", "(eⁱˣ + e⁻ⁱˣ)/(2i)", "(eˣ - e⁻ˣ)/(2i)", "(eˣ + e⁻ˣ)/(2i)"],
    "answer_en": "(eⁱˣ - e⁻ⁱˣ)/(2i)",
    "answer_hi": "(eⁱˣ - e⁻ⁱˣ)/(2i)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "The value of tan 20° + tan 40° + √3 tan 20° tan 40° is:",
    "question_hi": "tan 20° + tan 40° + √3 tan 20° tan 40° का मान है:",
    "options_en": ["√3", "1", "1/√3", "2"],
    "options_hi": ["√3", "1", "1/√3", "2"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "If sin x + sin y = a and cos x + cos y = b, then tan((x-y)/2) equals:",
    "question_hi": "यदि sin x + sin y = a और cos x + cos y = b है, तो tan((x-y)/2) बराबर है:",
    "options_en": ["±√((4-a²-b²)/(a²+b²))", "±√((a²+b²)/(4-a²-b²))", "±(a²+b²)/√(4-a²-b²)", "±√(4-a²-b²)/(a²+b²)"],
    "options_hi": ["±√((4-a²-b²)/(a²+b²))", "±√((a²+b²)/(4-a²-b²))", "±(a²+b²)/√(4-a²-b²)", "±√(4-a²-b²)/(a²+b²)"],
    "answer_en": "±√((4-a²-b²)/(a²+b²))",
    "answer_hi": "±√((4-a²-b²)/(a²+b²))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "The value of cos 10° cos 50° cos 70° cos 110° cos 130° cos 170° is:",
    "question_hi": "cos 10° cos 50° cos 70° cos 110° cos 130° cos 170° का मान है:",
    "options_en": ["1/64", "1/32", "1/16", "1/8"],
    "options_hi": ["1/64", "1/32", "1/16", "1/8"],
    "answer_en": "1/64",
    "answer_hi": "1/64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "If tan θ = (1 - cos 2α)/(sin 2α), then tan(θ+α) equals:",
    "question_hi": "यदि tan θ = (1 - cos 2α)/(sin 2α) है, तो tan(θ+α) बराबर है:",
    "options_en": ["tan α", "cot α", "1", "0"],
    "options_hi": ["tan α", "cot α", "1", "0"],
    "answer_en": "tan α",
    "answer_hi": "tan α",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "The value of sin 15° cos 15° + sin 45° cos 45° + sin 75° cos 75° + sin 105° cos 105° + sin 135° cos 135° is:",
    "question_hi": "sin 15° cos 15° + sin 45° cos 45° + sin 75° cos 75° + sin 105° cos 105° + sin 135° cos 135° का मान है:",
    "options_en": ["0", "1", "1/2", "√3/2"],
    "options_hi": ["0", "1", "1/2", "√3/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "If sin θ + sin φ = √3(cos φ - cos θ), then tan((θ+φ)/2) equals:",
    "question_hi": "यदि sin θ + sin φ = √3(cos φ - cos θ) है, तो tan((θ+φ)/2) बराबर है:",
    "options_en": ["√3", "1/√3", "1", "0"],
    "options_hi": ["√3", "1/√3", "1", "0"],
    "answer_en": "√3",
    "answer_hi": "√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "The value of cos 20° cos 40° cos 60° cos 80° cos 100° cos 120° cos 140° cos 160° is:",
    "question_hi": "cos 20° cos 40° cos 60° cos 80° cos 100° cos 120° cos 140° cos 160° का मान है:",
    "options_en": ["1/256", "-1/256", "1/128", "-1/128"],
    "options_hi": ["1/256", "-1/256", "1/128", "-1/128"],
    "answer_en": "1/256",
    "answer_hi": "1/256",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "If tan A = 1/2, tan B = 1/3, tan C = 1/4, then A+B+C equals:",
    "question_hi": "यदि tan A = 1/2, tan B = 1/3, tan C = 1/4 है, तो A+B+C बराबर है:",
    "options_en": ["π/2", "π/3", "π/4", "π"],
    "options_hi": ["π/2", "π/3", "π/4", "π"],
    "answer_en": "π/2",
    "answer_hi": "π/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "The value of sin 10° sin 50° sin 70° sin 130° sin 170° sin 190° sin 230° sin 250° is:",
    "question_hi": "sin 10° sin 50° sin 70° sin 130° sin 170° sin 190° sin 230° sin 250° का मान है:",
    "options_en": ["1/256", "1/128", "1/64", "1/32"],
    "options_hi": ["1/256", "1/128", "1/64", "1/32"],
    "answer_en": "1/256",
    "answer_hi": "1/256",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "If cos θ = (a² - b²)/(a² + b²), then cot(π/4 + θ/2) equals:",
    "question_hi": "यदि cos θ = (a² - b²)/(a² + b²) है, तो cot(π/4 + θ/2) बराबर है:",
    "options_en": ["a/b", "b/a", "ab", "(a+b)/(a-b)"],
    "options_hi": ["a/b", "b/a", "ab", "(a+b)/(a-b)"],
    "answer_en": "a/b",
    "answer_hi": "a/b",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "The value of cos 20° cos 40° cos 80° cos 160° cos 200° cos 280° cos 320° is:",
    "question_hi": "cos 20° cos 40° cos 80° cos 160° cos 200° cos 280° cos 320° का मान है:",
    "options_en": ["1/128", "-1/128", "1/64", "-1/64"],
    "options_hi": ["1/128", "-1/128", "1/64", "-1/64"],
    "answer_en": "1/128",
    "answer_hi": "1/128",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "If sin θ = 2√(ab)/(a+b), then (a sec θ + b cosec θ)/(a tan θ + b cot θ) equals:",
    "question_hi": "यदि sin θ = 2√(ab)/(a+b) है, तो (a sec θ + b cosec θ)/(a tan θ + b cot θ) बराबर है:",
    "options_en": ["1", "2", "√(ab)", "√(a/b)"],
    "options_hi": ["1", "2", "√(ab)", "√(a/b)"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "The value of tan 20° tan 40° tan 60° tan 80° tan 100° tan 120° tan 140° tan 160° tan 180° is:",
    "question_hi": "tan 20° tan 40° tan 60° tan 80° tan 100° tan 120° tan 140° tan 160° tan 180° का मान है:",
    "options_en": ["0", "1", "-1", "∞"],
    "options_hi": ["0", "1", "-1", "∞"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "If sin x + sin y = a and cos x + cos y = b, then sin x sin y + cos x cos y equals:",
    "question_hi": "यदि sin x + sin y = a और cos x + cos y = b है, तो sin x sin y + cos x cos y बराबर है:",
    "options_en": ["(a²+b²-2)/2", "(a²+b²)/2", "1-(a²+b²)/2", "(4-a²-b²)/2"],
    "options_hi": ["(a²+b²-2)/2", "(a²+b²)/2", "1-(a²+b²)/2", "(4-a²-b²)/2"],
    "answer_en": "(a²+b²-2)/2",
    "answer_hi": "(a²+b²-2)/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "The value of sin 10° sin 50° sin 70° sin 110° sin 130° sin 170° sin 190° sin 230° sin 250° sin 290° sin 310° sin 350° is:",
    "question_hi": "sin 10° sin 50° sin 70° sin 110° sin 130° sin 170° sin 190° sin 230° sin 250° sin 290° sin 310° sin 350° का मान है:",
    "options_en": ["1/4096", "1/2048", "1/1024", "1/512"],
    "options_hi": ["1/4096", "1/2048", "1/1024", "1/512"],
    "answer_en": "1/4096",
    "answer_hi": "1/4096",
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