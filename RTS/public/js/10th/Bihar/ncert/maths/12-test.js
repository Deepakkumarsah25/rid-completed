const questions = [
  {
    "num": 1,
    "question_en": "If sin θ + sin²θ + sin³θ = 1, then cos⁶θ - 4cos⁴θ + 8cos²θ equals:",
    "question_hi": "यदि sin θ + sin²θ + sin³θ = 1 है, तो cos⁶θ - 4cos⁴θ + 8cos²θ बराबर है:",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "If tan A + cot A = 4, then tan⁴A + cot⁴A equals:",
    "question_hi": "यदि tan A + cot A = 4 है, तो tan⁴A + cot⁴A बराबर है:",
    "options_en": ["194", "196", "198", "200"],
    "options_hi": ["194", "196", "198", "200"],
    "answer_en": "194",
    "answer_hi": "194",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If sec θ + tan θ = p, then sin θ equals:",
    "question_hi": "यदि sec θ + tan θ = p है, तो sin θ बराबर है:",
    "options_en": ["(p² - 1)/(p² + 1)", "(p² + 1)/(p² - 1)", "2p/(p² + 1)", "p/(p² + 1)"],
    "options_hi": ["(p² - 1)/(p² + 1)", "(p² + 1)/(p² - 1)", "2p/(p² + 1)", "p/(p² + 1)"],
    "answer_en": "(p² - 1)/(p² + 1)",
    "answer_hi": "(p² - 1)/(p² + 1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If x = sin 2θ, y = cos 2θ, then the maximum value of x² + xy + y² is:",
    "question_hi": "यदि x = sin 2θ, y = cos 2θ है, तो x² + xy + y² का अधिकतम मान है:",
    "options_en": ["1", "1.5", "2", "2.5"],
    "options_hi": ["1", "1.5", "2", "2.5"],
    "answer_en": "1.5",
    "answer_hi": "1.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "If cos A + cos B = 1/2 and sin A + sin B = 1/4, then tan((A+B)/2) equals:",
    "question_hi": "यदि cos A + cos B = 1/2 और sin A + sin B = 1/4 है, तो tan((A+B)/2) बराबर है:",
    "options_en": ["1/2", "1/4", "1/8", "1"],
    "options_hi": ["1/2", "1/4", "1/8", "1"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If sin θ₁ + sin θ₂ + sin θ₃ = 3, then cos θ₁ + cos θ₂ + cos θ₃ equals:",
    "question_hi": "यदि sin θ₁ + sin θ₂ + sin θ₃ = 3 है, तो cos θ₁ + cos θ₂ + cos θ₃ बराबर है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The value of cos 20° cos 40° cos 80° is:",
    "question_hi": "cos 20° cos 40° cos 80° का मान है:",
    "options_en": ["1/8", "1/16", "√3/8", "1/2"],
    "options_hi": ["1/8", "1/16", "√3/8", "1/2"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If tan θ = 3/4 and π < θ < 3π/2, then sin(θ/2) equals:",
    "question_hi": "यदि tan θ = 3/4 और π < θ < 3π/2 है, तो sin(θ/2) बराबर है:",
    "options_en": ["1/√10", "-1/√10", "3/√10", "-3/√10"],
    "options_hi": ["1/√10", "-1/√10", "3/√10", "-3/√10"],
    "answer_en": "-1/√10",
    "answer_hi": "-1/√10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "The value of sin 10° sin 50° sin 70° is:",
    "question_hi": "sin 10° sin 50° sin 70° का मान है:",
    "options_en": ["1/8", "1/16", "1/4", "1/2"],
    "options_hi": ["1/8", "1/16", "1/4", "1/2"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "If x = cos θ + i sin θ, then the value of (1 + x)/(1 - x) is:",
    "question_hi": "यदि x = cos θ + i sin θ है, तो (1 + x)/(1 - x) का मान है:",
    "options_en": ["i cot(θ/2)", "i tan(θ/2)", "cot(θ/2)", "tan(θ/2)"],
    "options_hi": ["i cot(θ/2)", "i tan(θ/2)", "cot(θ/2)", "tan(θ/2)"],
    "answer_en": "i cot(θ/2)",
    "answer_hi": "i cot(θ/2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The value of cos 36° cos 72° is:",
    "question_hi": "cos 36° cos 72° का मान है:",
    "options_en": ["1/4", "1/2", "1/8", "1/16"],
    "options_hi": ["1/4", "1/2", "1/8", "1/16"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "If tan α = m/(m+1) and tan β = 1/(2m+1), then α + β equals:",
    "question_hi": "यदि tan α = m/(m+1) और tan β = 1/(2m+1) है, तो α + β बराबर है:",
    "options_en": ["π/6", "π/4", "π/3", "π/2"],
    "options_hi": ["π/6", "π/4", "π/3", "π/2"],
    "answer_en": "π/4",
    "answer_hi": "π/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The minimum value of 3 sin x + 4 cos x + 7 is:",
    "question_hi": "3 sin x + 4 cos x + 7 का न्यूनतम मान है:",
    "options_en": ["2", "0", "5", "7"],
    "options_hi": ["2", "0", "5", "7"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If sin x + sin y = a and cos x + cos y = b, then tan((x+y)/2) equals:",
    "question_hi": "यदि sin x + sin y = a और cos x + cos y = b है, तो tan((x+y)/2) बराबर है:",
    "options_en": ["a/b", "b/a", "a/(b+1)", "2a/b"],
    "options_hi": ["a/b", "b/a", "a/(b+1)", "2a/b"],
    "answer_en": "a/b",
    "answer_hi": "a/b",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
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
    "num": 16,
    "question_en": "If tan θ = -4/3 and sin θ is positive, then sin 2θ equals:",
    "question_hi": "यदि tan θ = -4/3 और sin θ धनात्मक है, तो sin 2θ बराबर है:",
    "options_en": ["-24/25", "24/25", "-12/25", "12/25"],
    "options_hi": ["-24/25", "24/25", "-12/25", "12/25"],
    "answer_en": "-24/25",
    "answer_hi": "-24/25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The value of cos π/7 cos 2π/7 cos 4π/7 is:",
    "question_hi": "cos π/7 cos 2π/7 cos 4π/7 का मान है:",
    "options_en": ["1/8", "-1/8", "1/16", "-1/16"],
    "options_hi": ["1/8", "-1/8", "1/16", "-1/16"],
    "answer_en": "-1/8",
    "answer_hi": "-1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "If sin θ + cosec θ = 2, then sin¹⁰θ + cosec¹⁰θ equals:",
    "question_hi": "यदि sin θ + cosec θ = 2 है, तो sin¹⁰θ + cosec¹⁰θ बराबर है:",
    "options_en": ["2", "10", "1024", "2¹⁰"],
    "options_hi": ["2", "10", "1024", "2¹⁰"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The maximum value of sin²θ + cos⁴θ is:",
    "question_hi": "sin²θ + cos⁴θ का अधिकतम मान है:",
    "options_en": ["1", "1.25", "1.5", "2"],
    "options_hi": ["1", "1.25", "1.5", "2"],
    "answer_en": "1.25",
    "answer_hi": "1.25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "If tan A = 1/2 and tan B = 1/3, then A + B equals:",
    "question_hi": "यदि tan A = 1/2 और tan B = 1/3 है, तो A + B बराबर है:",
    "options_en": ["π/6", "π/4", "π/3", "π/2"],
    "options_hi": ["π/6", "π/4", "π/3", "π/2"],
    "answer_en": "π/4",
    "answer_hi": "π/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
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
    "num": 22,
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
    "num": 23,
    "question_en": "The value of cos 20° + cos 100° + cos 140° is:",
    "question_hi": "cos 20° + cos 100° + cos 140° का मान है:",
    "options_en": ["0", "1", "1/2", "√3/2"],
    "options_hi": ["0", "1", "1/2", "√3/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "If sin α + sin β = a and cos α + cos β = b, then cos(α - β) equals:",
    "question_hi": "यदि sin α + sin β = a और cos α + cos β = b है, तो cos(α - β) बराबर है:",
    "options_en": ["(a² + b² - 2)/2", "(a² + b²)/2", "(a² + b² - 4)/4", "(a² + b²)/4"],
    "options_hi": ["(a² + b² - 2)/2", "(a² + b²)/2", "(a² + b² - 4)/4", "(a² + b²)/4"],
    "answer_en": "(a² + b² - 2)/2",
    "answer_hi": "(a² + b² - 2)/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The minimum value of sec²θ + cosec²θ is:",
    "question_hi": "sec²θ + cosec²θ का न्यूनतम मान है:",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "If tan θ = 1/√7, then (cosec²θ - sec²θ)/(cosec²θ + sec²θ) equals:",
    "question_hi": "यदि tan θ = 1/√7 है, तो (cosec²θ - sec²θ)/(cosec²θ + sec²θ) बराबर है:",
    "options_en": ["3/4", "4/3", "1/2", "2/3"],
    "options_hi": ["3/4", "4/3", "1/2", "2/3"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The value of sin 47° + sin 61° - sin 11° - sin 25° is:",
    "question_hi": "sin 47° + sin 61° - sin 11° - sin 25° का मान है:",
    "options_en": ["sin 7°", "cos 7°", "sin 36°", "cos 36°"],
    "options_hi": ["sin 7°", "cos 7°", "sin 36°", "cos 36°"],
    "answer_en": "cos 7°",
    "answer_hi": "cos 7°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
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
    "num": 29,
    "question_en": "The value of cos 24° + cos 55° + cos 125° + cos 204° + cos 300° is:",
    "question_hi": "cos 24° + cos 55° + cos 125° + cos 204° + cos 300° का मान है:",
    "options_en": ["-1/2", "0", "1/2", "1"],
    "options_hi": ["-1/2", "0", "1/2", "1"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If sin x + cos x = √2 cos x, then tan 2x equals:",
    "question_hi": "यदि sin x + cos x = √2 cos x है, तो tan 2x बराबर है:",
    "options_en": ["√2", "1", "-1", "-√2"],
    "options_hi": ["√2", "1", "-1", "-√2"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
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
    "num": 32,
    "question_en": "If sin θ = 3 sin(θ + 2α), then tan(θ + α) equals:",
    "question_hi": "यदि sin θ = 3 sin(θ + 2α) है, तो tan(θ + α) बराबर है:",
    "options_en": ["2 tan α", "-2 tan α", "tan α", "cot α"],
    "options_hi": ["2 tan α", "-2 tan α", "tan α", "cot α"],
    "answer_en": "-2 tan α",
    "answer_hi": "-2 tan α",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The value of cos 2π/15 cos 4π/15 cos 8π/15 cos 16π/15 is:",
    "question_hi": "cos 2π/15 cos 4π/15 cos 8π/15 cos 16π/15 का मान है:",
    "options_en": ["1/16", "1/8", "1/4", "1/2"],
    "options_hi": ["1/16", "1/8", "1/4", "1/2"],
    "answer_en": "1/16",
    "answer_hi": "1/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "If tan θ = (sin α - cos α)/(sin α + cos α), then sin α + cos α equals:",
    "question_hi": "यदि tan θ = (sin α - cos α)/(sin α + cos α) है, तो sin α + cos α बराबर है:",
    "options_en": ["√2 cos θ", "√2 sin θ", "√2", "1"],
    "options_hi": ["√2 cos θ", "√2 sin θ", "√2", "1"],
    "answer_en": "√2 cos θ",
    "answer_hi": "√2 cos θ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The maximum value of 5 sin x + 12 cos x + 4 is:",
    "question_hi": "5 sin x + 12 cos x + 4 का अधिकतम मान है:",
    "options_en": ["13", "15", "17", "21"],
    "options_hi": ["13", "15", "17", "21"],
    "answer_en": "17",
    "answer_hi": "17",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "If tan A = 1/5 and tan B = 1/239, then 4A - B equals:",
    "question_hi": "यदि tan A = 1/5 और tan B = 1/239 है, तो 4A - B बराबर है:",
    "options_en": ["π/2", "π/3", "π/4", "π/6"],
    "options_hi": ["π/2", "π/3", "π/4", "π/6"],
    "answer_en": "π/4",
    "answer_hi": "π/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The value of sin 10° + sin 20° + sin 30° + ... + sin 360° is:",
    "question_hi": "sin 10° + sin 20° + sin 30° + ... + sin 360° का मान है:",
    "options_en": ["0", "1", "-1", "2"],
    "options_hi": ["0", "1", "-1", "2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "If x = tan θ + sin θ and y = tan θ - sin θ, then x² - y² equals:",
    "question_hi": "यदि x = tan θ + sin θ और y = tan θ - sin θ है, तो x² - y² बराबर है:",
    "options_en": ["4√(xy)", "2√(xy)", "4xy", "2xy"],
    "options_hi": ["4√(xy)", "2√(xy)", "4xy", "2xy"],
    "answer_en": "4√(xy)",
    "answer_hi": "4√(xy)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
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
    "num": 40,
    "question_en": "If sin θ = n sin(θ + 2α), then tan(θ + α) equals:",
    "question_hi": "यदि sin θ = n sin(θ + 2α) है, तो tan(θ + α) बराबर है:",
    "options_en": ["(n+1)/(n-1) tan α", "(n-1)/(n+1) tan α", "(n+1)/(n-1) cot α", "(n-1)/(n+1) cot α"],
    "options_hi": ["(n+1)/(n-1) tan α", "(n-1)/(n+1) tan α", "(n+1)/(n-1) cot α", "(n-1)/(n+1) cot α"],
    "answer_en": "(n+1)/(n-1) tan α",
    "answer_hi": "(n+1)/(n-1) tan α",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The value of cos² 10° - cos 10° cos 50° + cos² 50° is:",
    "question_hi": "cos² 10° - cos 10° cos 50° + cos² 50° का मान है:",
    "options_en": ["3/4", "3/2", "1/2", "1/4"],
    "options_hi": ["3/4", "3/2", "1/2", "1/4"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "If tan A = 1/7 and sin B = 1/√10, where A and B are acute, then A + 2B equals:",
    "question_hi": "यदि tan A = 1/7 और sin B = 1/√10 है, जहाँ A और B न्यून कोण हैं, तो A + 2B बराबर है:",
    "options_en": ["π/2", "π/3", "π/4", "π/6"],
    "options_hi": ["π/2", "π/3", "π/4", "π/6"],
    "answer_en": "π/4",
    "answer_hi": "π/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "The value of sin 12° sin 48° sin 54° is:",
    "question_hi": "sin 12° sin 48° sin 54° का मान है:",
    "options_en": ["1/8", "1/16", "1/4", "1/2"],
    "options_hi": ["1/8", "1/16", "1/4", "1/2"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "If cos(α - β) = 1 and cos(α + β) = 1/e, then cos α cos β equals:",
    "question_hi": "यदि cos(α - β) = 1 और cos(α + β) = 1/e है, तो cos α cos β बराबर है:",
    "options_en": ["(e+1)/2e", "(e-1)/2e", "(e+1)/e", "(e-1)/e"],
    "options_hi": ["(e+1)/2e", "(e-1)/2e", "(e+1)/e", "(e-1)/e"],
    "answer_en": "(e+1)/2e",
    "answer_hi": "(e+1)/2e",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The minimum value of 9 sin²x + 16 cosec²x is:",
    "question_hi": "9 sin²x + 16 cosec²x का न्यूनतम मान है:",
    "options_en": ["16", "20", "24", "25"],
    "options_hi": ["16", "20", "24", "25"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "If tan θ = (1 - cos φ)/sin φ, then tan(θ + φ/2) equals:",
    "question_hi": "यदि tan θ = (1 - cos φ)/sin φ है, तो tan(θ + φ/2) बराबर है:",
    "options_en": ["cot φ", "tan φ", "1", "0"],
    "options_hi": ["cot φ", "tan φ", "1", "0"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
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
    "num": 48,
    "question_en": "If sin x + sin y = √3(cos y - cos x), then sin 3x + sin 3y equals:",
    "question_hi": "यदि sin x + sin y = √3(cos y - cos x) है, तो sin 3x + sin 3y बराबर है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
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
    "num": 50,
    "question_en": "If tan θ = a/b, then (a sin θ - b cos θ)/(a sin θ + b cos θ) equals:",
    "question_hi": "यदि tan θ = a/b है, तो (a sin θ - b cos θ)/(a sin θ + b cos θ) बराबर है:",
    "options_en": ["(a² - b²)/(a² + b²)", "(b² - a²)/(a² + b²)", "(a-b)/(a+b)", "(a+b)/(a-b)"],
    "options_hi": ["(a² - b²)/(a² + b²)", "(b² - a²)/(a² + b²)", "(a-b)/(a+b)", "(a+b)/(a-b)"],
    "answer_en": "(a² - b²)/(a² + b²)",
    "answer_hi": "(a² - b²)/(a² + b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "The value of sin 50° - sin 70° + sin 10° is:",
    "question_hi": "sin 50° - sin 70° + sin 10° का मान है:",
    "options_en": ["0", "1", "1/2", "√3/2"],
    "options_hi": ["0", "1", "1/2", "√3/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "If sin θ + cos θ = 1, then sin 2θ equals:",
    "question_hi": "यदि sin θ + cos θ = 1 है, तो sin 2θ बराबर है:",
    "options_en": ["0", "1", "-1", "1/2"],
    "options_hi": ["0", "1", "-1", "1/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "The maximum value of sin²θ cos²θ is:",
    "question_hi": "sin²θ cos²θ का अधिकतम मान है:",
    "options_en": ["1/4", "1/8", "1/16", "1/32"],
    "options_hi": ["1/4", "1/8", "1/16", "1/32"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "If cos A + cos B = 1/3 and sin A + sin B = 1/4, then sin(A+B)/2 equals:",
    "question_hi": "यदि cos A + cos B = 1/3 और sin A + sin B = 1/4 है, तो sin(A+B)/2 बराबर है:",
    "options_en": ["5/12", "5/24", "12/25", "24/25"],
    "options_hi": ["5/12", "5/24", "12/25", "24/25"],
    "answer_en": "5/24",
    "answer_hi": "5/24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "The value of sin 105° + cos 105° is:",
    "question_hi": "sin 105° + cos 105° का मान है:",
    "options_en": ["1/√2", "√3/2", "1/2", "√2"],
    "options_hi": ["1/√2", "√3/2", "1/2", "√2"],
    "answer_en": "1/√2",
    "answer_hi": "1/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "If sin θ = 1/3, then the value of 3 sin θ - 4 sin³θ is:",
    "question_hi": "यदि sin θ = 1/3 है, तो 3 sin θ - 4 sin³θ का मान है:",
    "options_en": ["23/27", "25/27", "1/3", "1"],
    "options_hi": ["23/27", "25/27", "1/3", "1"],
    "answer_en": "23/27",
    "answer_hi": "23/27",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "The value of tan 75° - cot 75° is:",
    "question_hi": "tan 75° - cot 75° का मान है:",
    "options_en": ["2√3", "4", "2", "√3"],
    "options_hi": ["2√3", "4", "2", "√3"],
    "answer_en": "2√3",
    "answer_hi": "2√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "If tan θ = 3/4 and π < θ < 3π/2, then √((1-cos θ)/(1+cos θ)) equals:",
    "question_hi": "यदि tan θ = 3/4 और π < θ < 3π/2 है, तो √((1-cos θ)/(1+cos θ)) बराबर है:",
    "options_en": ["1/3", "3", "-1/3", "-3"],
    "options_hi": ["1/3", "3", "-1/3", "-3"],
    "answer_en": "-1/3",
    "answer_hi": "-1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "The value of cos 1° cos 2° cos 3° ... cos 180° is:",
    "question_hi": "cos 1° cos 2° cos 3° ... cos 180° का मान है:",
    "options_en": ["0", "1", "-1", "1/2"],
    "options_hi": ["0", "1", "-1", "1/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "If sin(θ+α) = a and sin(θ+β) = b, then cos 2(α-β) - 4ab cos(α-β) equals:",
    "question_hi": "यदि sin(θ+α) = a और sin(θ+β) = b है, तो cos 2(α-β) - 4ab cos(α-β) बराबर है:",
    "options_en": ["1 - 2a² - 2b²", "1 - a² - b²", "2 - a² - b²", "1 + a² + b²"],
    "options_hi": ["1 - 2a² - 2b²", "1 - a² - b²", "2 - a² - b²", "1 + a² + b²"],
    "answer_en": "1 - 2a² - 2b²",
    "answer_hi": "1 - 2a² - 2b²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "The value of sin 20° sin 40° sin 80° is:",
    "question_hi": "sin 20° sin 40° sin 80° का मान है:",
    "options_en": ["√3/8", "1/8", "1/4", "√3/4"],
    "options_hi": ["√3/8", "1/8", "1/4", "√3/4"],
    "answer_en": "√3/8",
    "answer_hi": "√3/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
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
    "num": 63,
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
    "num": 64,
    "question_en": "If sin θ + sin²θ = 1, then cos¹²θ + 3cos¹⁰θ + 3cos⁸θ + cos⁶θ equals:",
    "question_hi": "यदि sin θ + sin²θ = 1 है, तो cos¹²θ + 3cos¹⁰θ + 3cos⁸θ + cos⁶θ बराबर है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "The value of sin 10° sin 50° sin 60° sin 70° is:",
    "question_hi": "sin 10° sin 50° sin 60° sin 70° का मान है:",
    "options_en": ["√3/16", "3/16", "1/8", "1/16"],
    "options_hi": ["√3/16", "3/16", "1/8", "1/16"],
    "answer_en": "√3/16",
    "answer_hi": "√3/16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "If (1+sin A)(1+sin B)(1+sin C) = (1-sin A)(1-sin B)(1-sin C), then each equals:",
    "question_hi": "यदि (1+sin A)(1+sin B)(1+sin C) = (1-sin A)(1-sin B)(1-sin C) है, तो प्रत्येक बराबर है:",
    "options_en": ["±cos A cos B cos C", "±sin A sin B sin C", "±1", "±tan A tan B tan C"],
    "options_hi": ["±cos A cos B cos C", "±sin A sin B sin C", "±1", "±tan A tan B tan C"],
    "answer_en": "±cos A cos B cos C",
    "answer_hi": "±cos A cos B cos C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "The value of cos 20° + 2 sin² 55° - √2 sin 65° is:",
    "question_hi": "cos 20° + 2 sin² 55° - √2 sin 65° का मान है:",
    "options_en": ["0", "1", "√2", "2"],
    "options_hi": ["0", "1", "√2", "2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "If tan θ = √(1 - e²), then sec θ + tan³θ cosec θ equals:",
    "question_hi": "यदि tan θ = √(1 - e²) है, तो sec θ + tan³θ cosec θ बराबर है:",
    "options_en": ["(2 - e²)^(3/2)", "(2 + e²)^(3/2)", "(2 - e²)^(1/2)", "(2 + e²)^(1/2)"],
    "options_hi": ["(2 - e²)^(3/2)", "(2 + e²)^(3/2)", "(2 - e²)^(1/2)", "(2 + e²)^(1/2)"],
    "answer_en": "(2 - e²)^(3/2)",
    "answer_hi": "(2 - e²)^(3/2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "The value of sin 15° + sin 45° + sin 75° is:",
    "question_hi": "sin 15° + sin 45° + sin 75° का मान है:",
    "options_en": ["(√3 + 1)/√2", "(√3 + 1)/2", "(√6 + √2)/2", "(√6 + √2)/4"],
    "options_hi": ["(√3 + 1)/√2", "(√3 + 1)/2", "(√6 + √2)/2", "(√6 + √2)/4"],
    "answer_en": "(√3 + 1)/√2",
    "answer_hi": "(√3 + 1)/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "If cos θ = 12/13 and 3π/2 < θ < 2π, then cot(θ/2) equals:",
    "question_hi": "यदि cos θ = 12/13 और 3π/2 < θ < 2π है, तो cot(θ/2) बराबर है:",
    "options_en": ["-5", "5", "-1/5", "1/5"],
    "options_hi": ["-5", "5", "-1/5", "1/5"],
    "answer_en": "-5",
    "answer_hi": "-5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "The value of tan 20° tan 40° tan 60° tan 80° is:",
    "question_hi": "tan 20° tan 40° tan 60° tan 80° का मान है:",
    "options_en": ["1", "√3", "3", "1/√3"],
    "options_hi": ["1", "√3", "3", "1/√3"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "If sin x + sin y = a and cos x + cos y = b, then tan x tan y equals:",
    "question_hi": "यदि sin x + sin y = a और cos x + cos y = b है, तो tan x tan y बराबर है:",
    "options_en": ["(a² - b²)/(a² + b²)", "(a² + b² - 4)/(a² + b²)", "(4 - a² - b²)/(a² + b²)", "(a² + b²)/(4 - a² - b²)"],
    "options_hi": ["(a² - b²)/(a² + b²)", "(a² + b² - 4)/(a² + b²)", "(4 - a² - b²)/(a² + b²)", "(a² + b²)/(4 - a² - b²)"],
    "answer_en": "(4 - a² - b²)/(a² + b²)",
    "answer_hi": "(4 - a² - b²)/(a² + b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "The value of sin 50° + sin 10° is:",
    "question_hi": "sin 50° + sin 10° का मान है:",
    "options_en": ["sin 20°", "cos 20°", "√3 sin 20°", "√3 cos 20°"],
    "options_hi": ["sin 20°", "cos 20°", "√3 sin 20°", "√3 cos 20°"],
    "answer_en": "√3 cos 20°",
    "answer_hi": "√3 cos 20°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "If tan A + tan B + tan C = tan A tan B tan C, then A+B+C equals:",
    "question_hi": "यदि tan A + tan B + tan C = tan A tan B tan C है, तो A+B+C बराबर है:",
    "options_en": ["π/2", "π", "3π/2", "2π"],
    "options_hi": ["π/2", "π", "3π/2", "2π"],
    "answer_en": "π",
    "answer_hi": "π",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "The value of cos 40° + cos 80° + cos 160° is:",
    "question_hi": "cos 40° + cos 80° + cos 160° का मान है:",
    "options_en": ["0", "1", "1/2", "√3/2"],
    "options_hi": ["0", "1", "1/2", "√3/2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "If sin θ = 2√ab/(a+b), then tan θ equals:",
    "question_hi": "यदि sin θ = 2√ab/(a+b) है, तो tan θ बराबर है:",
    "options_en": ["(a-b)/(2√ab)", "2√ab/(a-b)", "(a-b)/(a+b)", "2√ab/(a+b)"],
    "options_hi": ["(a-b)/(2√ab)", "2√ab/(a-b)", "(a-b)/(a+b)", "2√ab/(a+b)"],
    "answer_en": "2√ab/(a-b)",
    "answer_hi": "2√ab/(a-b)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "The value of sin 75° - sin 15° is:",
    "question_hi": "sin 75° - sin 15° का मान है:",
    "options_en": ["1/√2", "√3/2", "1/2", "√2/2"],
    "options_hi": ["1/√2", "√3/2", "1/2", "√2/2"],
    "answer_en": "1/√2",
    "answer_hi": "1/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "If tan A = 1/√3 and sin B = 1/√2, then cos(A+B) equals:",
    "question_hi": "यदि tan A = 1/√3 और sin B = 1/√2 है, तो cos(A+B) बराबर है:",
    "options_en": ["(√3 - 1)/2√2", "(√3 + 1)/2√2", "(1 - √3)/2√2", "1/2"],
    "options_hi": ["(√3 - 1)/2√2", "(√3 + 1)/2√2", "(1 - √3)/2√2", "1/2"],
    "answer_en": "(√3 - 1)/2√2",
    "answer_hi": "(√3 - 1)/2√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "The value of cos² 73° + cos² 47° - cos 73° cos 47° is:",
    "question_hi": "cos² 73° + cos² 47° - cos 73° cos 47° का मान है:",
    "options_en": ["1/4", "3/4", "1/2", "1"],
    "options_hi": ["1/4", "3/4", "1/2", "1"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "If sin θ + cos θ = √2, then tan θ + cot θ equals:",
    "question_hi": "यदि sin θ + cos θ = √2 है, तो tan θ + cot θ बराबर है:",
    "options_en": ["1", "2", "√2", "1/√2"],
    "options_hi": ["1", "2", "√2", "1/√2"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "The value of sin 18° is:",
    "question_hi": "sin 18° का मान है:",
    "options_en": ["(√5 - 1)/4", "(√5 + 1)/4", "(√3 - 1)/2√2", "(√3 + 1)/2√2"],
    "options_hi": ["(√5 - 1)/4", "(√5 + 1)/4", "(√3 - 1)/2√2", "(√3 + 1)/2√2"],
    "answer_en": "(√5 - 1)/4",
    "answer_hi": "(√5 - 1)/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "If tan A = 1/2, tan B = 1/3, then A+B equals:",
    "question_hi": "यदि tan A = 1/2, tan B = 1/3 है, तो A+B बराबर है:",
    "options_en": ["π/6", "π/4", "π/3", "π/2"],
    "options_hi": ["π/6", "π/4", "π/3", "π/2"],
    "answer_en": "π/4",
    "answer_hi": "π/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "The value of cos 36° - cos 72° is:",
    "question_hi": "cos 36° - cos 72° का मान है:",
    "options_en": ["1/2", "1/4", "1/8", "1/16"],
    "options_hi": ["1/2", "1/4", "1/8", "1/16"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "If sin x + sin y = a and cos x + cos y = b, then tan((x-y)/2) equals:",
    "question_hi": "यदि sin x + sin y = a और cos x + cos y = b है, तो tan((x-y)/2) बराबर है:",
    "options_en": ["±√(4 - a² - b²)/(a² + b²)", "±(a² + b²)/√(4 - a² - b²)", "±√(a² + b² - 4)/(a² + b²)", "±(a² + b²)/√(a² + b² - 4)"],
    "options_hi": ["±√(4 - a² - b²)/(a² + b²)", "±(a² + b²)/√(4 - a² - b²)", "±√(a² + b² - 4)/(a² + b²)", "±(a² + b²)/√(a² + b² - 4)"],
    "answer_en": "±√(4 - a² - b²)/(a² + b²)",
    "answer_hi": "±√(4 - a² - b²)/(a² + b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "The value of tan 15° + cot 15° is:",
    "question_hi": "tan 15° + cot 15° का मान है:",
    "options_en": ["2", "4", "2√3", "4√3"],
    "options_hi": ["2", "4", "2√3", "4√3"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "If sin θ + sin φ = a and cos θ + cos φ = b, then sin(θ+φ) equals:",
    "question_hi": "यदि sin θ + sin φ = a और cos θ + cos φ = b है, तो sin(θ+φ) बराबर है:",
    "options_en": ["2ab/(a² + b²)", "ab/(a² + b²)", "2ab/(a² - b²)", "ab/(a² - b²)"],
    "options_hi": ["2ab/(a² + b²)", "ab/(a² + b²)", "2ab/(a² - b²)", "ab/(a² - b²)"],
    "answer_en": "2ab/(a² + b²)",
    "answer_hi": "2ab/(a² + b²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "The value of sin 75° + sin 15° is:",
    "question_hi": "sin 75° + sin 15° का मान है:",
    "options_en": ["√3/2", "√6/2", "√2", "√3"],
    "options_hi": ["√3/2", "√6/2", "√2", "√3"],
    "answer_en": "√6/2",
    "answer_hi": "√6/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "If tan θ = (√(1+a) - √(1-a))/(√(1+a) + √(1-a)), then sin 2θ equals:",
    "question_hi": "यदि tan θ = (√(1+a) - √(1-a))/(√(1+a) + √(1-a)) है, तो sin 2θ बराबर है:",
    "options_en": ["a", "-a", "√a", "-√a"],
    "options_hi": ["a", "-a", "√a", "-√a"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "The value of cos 15° - sin 15° is:",
    "question_hi": "cos 15° - sin 15° का मान है:",
    "options_en": ["1/√2", "√3/2", "1/2", "√2/2"],
    "options_hi": ["1/√2", "√3/2", "1/2", "√2/2"],
    "answer_en": "1/√2",
    "answer_hi": "1/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "If sin A = 3/5 and cos B = 5/13, where A and B are acute, then sin(A-B) equals:",
    "question_hi": "यदि sin A = 3/5 और cos B = 5/13 है, जहाँ A और B न्यून कोण हैं, तो sin(A-B) बराबर है:",
    "options_en": ["33/65", "56/65", "16/65", "63/65"],
    "options_hi": ["33/65", "56/65", "16/65", "63/65"],
    "answer_en": "33/65",
    "answer_hi": "33/65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "The value of cos 20° cos 100° + cos 100° cos 140° + cos 140° cos 200° is:",
    "question_hi": "cos 20° cos 100° + cos 100° cos 140° + cos 140° cos 200° का मान है:",
    "options_en": ["-3/4", "3/4", "-1/4", "1/4"],
    "options_hi": ["-3/4", "3/4", "-1/4", "1/4"],
    "answer_en": "-3/4",
    "answer_hi": "-3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "If tan θ = 1/√5, then cos 2θ equals:",
    "question_hi": "यदि tan θ = 1/√5 है, तो cos 2θ बराबर है:",
    "options_en": ["3/5", "2/3", "1/3", "4/5"],
    "options_hi": ["3/5", "2/3", "1/3", "4/5"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "The value of sin² 10° + sin² 50° + sin² 70° is:",
    "question_hi": "sin² 10° + sin² 50° + sin² 70° का मान है:",
    "options_en": ["3/2", "2/3", "1/2", "3/4"],
    "options_hi": ["3/2", "2/3", "1/2", "3/4"],
    "answer_en": "3/2",
    "answer_hi": "3/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "If sin θ = 3/5, cos φ = 12/13, and θ, φ are acute, then sin(θ+φ) equals:",
    "question_hi": "यदि sin θ = 3/5, cos φ = 12/13 है, और θ, φ न्यून कोण हैं, तो sin(θ+φ) बराबर है:",
    "options_en": ["56/65", "33/65", "16/65", "63/65"],
    "options_hi": ["56/65", "33/65", "16/65", "63/65"],
    "answer_en": "56/65",
    "answer_hi": "56/65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "The value of cos 40° cos 80° + cos 80° cos 160° + cos 160° cos 320° is:",
    "question_hi": "cos 40° cos 80° + cos 80° cos 160° + cos 160° cos 320° का मान है:",
    "options_en": ["-3/4", "3/4", "-1/4", "1/4"],
    "options_hi": ["-3/4", "3/4", "-1/4", "1/4"],
    "answer_en": "-3/4",
    "answer_hi": "-3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "If tan θ = (sin α - cos α)/(sin α + cos α), then sin 2α equals:",
    "question_hi": "यदि tan θ = (sin α - cos α)/(sin α + cos α) है, तो sin 2α बराबर है:",
    "options_en": ["sin 2θ", "cos 2θ", "tan 2θ", "cot 2θ"],
    "options_hi": ["sin 2θ", "cos 2θ", "tan 2θ", "cot 2θ"],
    "answer_en": "cos 2θ",
    "answer_hi": "cos 2θ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "The value of sin 10° + sin 20° + sin 30° + ... + sin 360° is:",
    "question_hi": "sin 10° + sin 20° + sin 30° + ... + sin 360° का मान है:",
    "options_en": ["0", "1", "-1", "2"],
    "options_hi": ["0", "1", "-1", "2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "If sin θ + cos θ = √2 cos θ, then cos θ - sin θ equals:",
    "question_hi": "यदि sin θ + cos θ = √2 cos θ है, तो cos θ - sin θ बराबर है:",
    "options_en": ["√2 sin θ", "-√2 sin θ", "√2 cos θ", "-√2 cos θ"],
    "options_hi": ["√2 sin θ", "-√2 sin θ", "√2 cos θ", "-√2 cos θ"],
    "answer_en": "√2 sin θ",
    "answer_hi": "√2 sin θ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "The value of cos 10° cos 50° cos 70° is:",
    "question_hi": "cos 10° cos 50° cos 70° का मान है:",
    "options_en": ["√3/8", "1/8", "√3/16", "1/16"],
    "options_hi": ["√3/8", "1/8", "√3/16", "1/16"],
    "answer_en": "√3/8",
    "answer_hi": "√3/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "If tan 20° = λ, then (tan 160° - tan 110°)/(1 + tan 160° tan 110°) equals:",
    "question_hi": "यदि tan 20° = λ है, तो (tan 160° - tan 110°)/(1 + tan 160° tan 110°) बराबर है:",
    "options_en": ["(1 - λ²)/(2λ)", "(2λ)/(1 - λ²)", "(λ² - 1)/(2λ)", "(2λ)/(λ² - 1)"],
    "options_hi": ["(1 - λ²)/(2λ)", "(2λ)/(1 - λ²)", "(λ² - 1)/(2λ)", "(2λ)/(λ² - 1)"],
    "answer_en": "(2λ)/(1 - λ²)",
    "answer_hi": "(2λ)/(1 - λ²)",
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