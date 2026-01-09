const questions = [
  {
    "num": 1,
    "question_en": "If f: ℝ → ℝ is differentiable and f'(x) = f(x) for all x, with f(0) = 1, what is f(ln(2))?",
    "question_hi": "यदि f: ℝ → ℝ अवकलनीय है और सभी x के लिए f'(x) = f(x), जहाँ f(0) = 1, तो f(ln(2)) क्या है?",
    "options_en": ["1", "2", "e", "e²"],
    "options_hi": ["1", "2", "e", "e²"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In quantum computing notation, if |0⟩ = [1,0]ᵀ and |1⟩ = [0,1]ᵀ, what is (|0⟩⟨0| + |1⟩⟨1|)?",
    "question_hi": "क्वांटम कंप्यूटिंग संकेतन में, यदि |0⟩ = [1,0]ᵀ और |1⟩ = [0,1]ᵀ, तो (|0⟩⟨0| + |1⟩⟨1|) क्या है?",
    "options_en": ["Identity matrix", "Zero matrix", "Pauli-X matrix", "Hadamard matrix"],
    "options_hi": ["तत्समक मैट्रिक्स", "शून्य मैट्रिक्स", "पॉली-X मैट्रिक्स", "हैडामार्ड मैट्रिक्स"],
    "answer_en": "Identity matrix",
    "answer_hi": "तत्समक मैट्रिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Find the convergent value: 1 + 1/(2 + 1/(2 + 1/(2 + ...)))",
    "question_hi": "अभिसरण मान ज्ञात करें: 1 + 1/(2 + 1/(2 + 1/(2 + ...)))",
    "options_en": ["√2", "√3", "φ (golden ratio)", "√5"],
    "options_hi": ["√2", "√3", "φ (स्वर्णिम अनुपात)", "√5"],
    "answer_en": "√2",
    "answer_hi": "√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If A is a 3×3 matrix with eigenvalues 1, 2, 3, what are the eigenvalues of A² - 2A + I?",
    "question_hi": "यदि A एक 3×3 मैट्रिक्स है जिसके eigenvalues 1, 2, 3 हैं, तो A² - 2A + I के eigenvalues क्या हैं?",
    "options_en": ["0, 1, 2", "0, 2, 6", "1, 4, 9", "1, 2, 3"],
    "options_hi": ["0, 1, 2", "0, 2, 6", "1, 4, 9", "1, 2, 3"],
    "answer_en": "0, 2, 6",
    "answer_hi": "0, 2, 6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the number of non-isomorphic groups of order 8?",
    "question_hi": "क्रम 8 के गैर-समाकृतिक समूहों की संख्या क्या है?",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Solve the PDE: ∂²u/∂x² + ∂²u/∂y² = 0 with u(x,0) = sin(nπx)",
    "question_hi": "PDE हल करें: ∂²u/∂x² + ∂²u/∂y² = 0, जहाँ u(x,0) = sin(nπx)",
    "options_en": ["u = sin(nπx)e^{-nπy}", "u = sin(nπx)e^{nπy}", "u = sin(nπx)cosh(nπy)", "u = sin(nπx)sinh(nπy)"],
    "options_hi": ["u = sin(nπx)e^{-nπy}", "u = sin(nπx)e^{nπy}", "u = sin(nπx)cosh(nπy)", "u = sin(nπx)sinh(nπy)"],
    "answer_en": "u = sin(nπx)e^{-nπy}",
    "answer_hi": "u = sin(nπx)e^{-nπy}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Find ∫(0 to ∞) e^{-x²} dx",
    "question_hi": "∫(0 से ∞) e^{-x²} dx ज्ञात करें",
    "options_en": ["√π/2", "π/2", "1", "√π"],
    "options_hi": ["√π/2", "π/2", "1", "√π"],
    "answer_en": "√π/2",
    "answer_hi": "√π/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the Galois group of x⁴ - 2 over ℚ?",
    "question_hi": "x⁴ - 2 का ℚ पर गैलोइस समूह क्या है?",
    "options_en": ["C₄", "D₄", "S₄", "V₄"],
    "options_hi": ["C₄", "D₄", "S₄", "V₄"],
    "answer_en": "D₄",
    "answer_hi": "D₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "If ζ is a primitive 7th root of unity, what is the degree of ℚ(ζ + ζ⁻¹) over ℚ?",
    "question_hi": "यदि ζ एक आदिम 7वाँ एकत्व का मूल है, तो ℚ(ζ + ζ⁻¹) की ℚ पर डिग्री क्या है?",
    "options_en": ["2", "3", "4", "6"],
    "options_hi": ["2", "3", "4", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Compute the residue of f(z) = e^z/(z²+1) at z = i",
    "question_hi": "f(z) = e^z/(z²+1) का z = i पर अवशेष ज्ञात करें",
    "options_en": ["e^i/2i", "e^{-1}/2i", "e^i/2", "e^{-1}/2"],
    "options_hi": ["e^i/2i", "e^{-1}/2i", "e^i/2", "e^{-1}/2"],
    "answer_en": "e^i/2i",
    "answer_hi": "e^i/2i",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the fundamental group of the torus T² = S¹ × S¹?",
    "question_hi": "टोरस T² = S¹ × S¹ का मौलिक समूह क्या है?",
    "options_en": ["ℤ", "ℤ²", "ℤ × ℤ", "ℤ ⊕ ℤ"],
    "options_hi": ["ℤ", "ℤ²", "ℤ × ℤ", "ℤ ⊕ ℤ"],
    "answer_en": "ℤ × ℤ",
    "answer_hi": "ℤ × ℤ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Solve the recurrence: aₙ = 2aₙ₋₁ + 3aₙ₋₂ with a₀ = 1, a₁ = 2",
    "question_hi": "पुनरावृत्ति हल करें: aₙ = 2aₙ₋₁ + 3aₙ₋₂, जहाँ a₀ = 1, a₁ = 2",
    "options_en": ["aₙ = (3ⁿ + (-1)ⁿ)/2", "aₙ = (3ⁿ - (-1)ⁿ)/2", "aₙ = (3ⁿ⁺¹ + (-1)ⁿ)/4", "aₙ = (3ⁿ⁺¹ - (-1)ⁿ)/4"],
    "options_hi": ["aₙ = (3ⁿ + (-1)ⁿ)/2", "aₙ = (3ⁿ - (-1)ⁿ)/2", "aₙ = (3ⁿ⁺¹ + (-1)ⁿ)/4", "aₙ = (3ⁿ⁺¹ - (-1)ⁿ)/4"],
    "answer_en": "aₙ = (3ⁿ⁺¹ + (-1)ⁿ)/4",
    "answer_hi": "aₙ = (3ⁿ⁺¹ + (-1)ⁿ)/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the Hausdorff dimension of the Cantor set?",
    "question_hi": "कैंटर समुच्चय का हॉसडॉर्फ आयाम क्या है?",
    "options_en": ["ln2/ln3", "ln3/ln2", "1/2", "1/3"],
    "options_hi": ["ln2/ln3", "ln3/ln2", "1/2", "1/3"],
    "answer_en": "ln2/ln3",
    "answer_hi": "ln2/ln3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If X ~ N(0,1), what is E[X⁴]?",
    "question_hi": "यदि X ~ N(0,1), तो E[X⁴] क्या है?",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Find the number of irreducible polynomials of degree 3 over 𝔽₂",
    "question_hi": "𝔽₂ पर घात 3 के अघुलनशील बहुपदों की संख्या ज्ञात करें",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the dual of the statement: 'Every bounded sequence has a convergent subsequence'?",
    "question_hi": "कथन का द्वैत क्या है: 'प्रत्येक परिबद्ध अनुक्रम का एक अभिसारी उपानुक्रम होता है'?",
    "options_en": ["Bolzano-Weierstrass theorem", "Heine-Borel theorem", "Banach fixed point theorem", "Arzela-Ascoli theorem"],
    "options_hi": ["बोल्ज़ानो-वीयरस्ट्रास प्रमेय", "हाइने-बोरेल प्रमेय", "बनाक स्थिर बिंदु प्रमेय", "अर्ज़ेला-अस्कोली प्रमेय"],
    "answer_en": "Heine-Borel theorem",
    "answer_hi": "हाइने-बोरेल प्रमेय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If f is holomorphic on ℂ and |f(z)| ≤ 1 for all z, what can you say about f?",
    "question_hi": "यदि f, ℂ पर होलोमोर्फिक है और सभी z के लिए |f(z)| ≤ 1, तो f के बारे में आप क्या कह सकते हैं?",
    "options_en": ["f is constant", "f is polynomial", "f is rational", "f is entire"],
    "options_hi": ["f अचर है", "f बहुपद है", "f परिमेय है", "f संपूर्ण है"],
    "answer_en": "f is constant",
    "answer_hi": "f अचर है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the Euler characteristic of a genus g surface?",
    "question_hi": "जीनस g सतह का यूलर अभिलाक्षणिक क्या है?",
    "options_en": ["2-2g", "2-g", "1-2g", "2+g"],
    "options_hi": ["2-2g", "2-g", "1-2g", "2+g"],
    "answer_en": "2-2g",
    "answer_hi": "2-2g",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Solve the integral equation: f(x) = 1 + ∫₀ˣ f(t)dt",
    "question_hi": "समाकल समीकरण हल करें: f(x) = 1 + ∫₀ˣ f(t)dt",
    "options_en": ["eˣ", "e^{-x}", "cosh(x)", "sinh(x)"],
    "options_hi": ["eˣ", "e^{-x}", "cosh(x)", "sinh(x)"],
    "answer_en": "eˣ",
    "answer_hi": "eˣ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the order of the group GL(2, 𝔽₃)?",
    "question_hi": "समूह GL(2, 𝔽₃) का क्रम क्या है?",
    "options_en": ["24", "48", "96", "168"],
    "options_hi": ["24", "48", "96", "168"],
    "answer_en": "48",
    "answer_hi": "48",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If L is a context-free language and R is regular, what is L ∩ R?",
    "question_hi": "यदि L एक संदर्भ-मुक्त भाषा है और R नियमित है, तो L ∩ R क्या है?",
    "options_en": ["Always regular", "Always context-free", "May not be context-free", "Always decidable"],
    "options_hi": ["सदैव नियमित", "सदैव संदर्भ-मुक्त", "संदर्भ-मुक्त नहीं हो सकती", "सदैव निर्णेय"],
    "answer_en": "Always context-free",
    "answer_hi": "सदैव संदर्भ-मुक्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the value of ζ(2) where ζ is Riemann zeta function?",
    "question_hi": "ζ(2) का मान क्या है जहाँ ζ रीमैन जीटा फलन है?",
    "options_en": ["π²/4", "π²/6", "π²/8", "π²/12"],
    "options_hi": ["π²/4", "π²/6", "π²/8", "π²/12"],
    "answer_en": "π²/6",
    "answer_hi": "π²/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find the number of Sylow 2-subgroups in S₄",
    "question_hi": "S₄ में साइलो 2-उपसमूहों की संख्या ज्ञात करें",
    "options_en": ["1", "3", "5", "7"],
    "options_hi": ["1", "3", "5", "7"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the maximum value of ∫₀¹ f(x)dx subject to ∫₀¹ f²(x)dx = 1?",
    "question_hi": "∫₀¹ f²(x)dx = 1 के अधीन ∫₀¹ f(x)dx का अधिकतम मान क्या है?",
    "options_en": ["1", "√2", "√π", "1/√2"],
    "options_hi": ["1", "√2", "√π", "1/√2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If X is a compact metric space, which property is NOT necessarily true?",
    "question_hi": "यदि X एक संहत मीट्रिक समष्टि है, तो कौन सा गुण आवश्यक रूप से सत्य नहीं है?",
    "options_en": ["Complete", "Totally bounded", "Separable", "Connected"],
    "options_hi": ["पूर्ण", "पूर्णतः परिबद्ध", "पृथक्करणीय", "संयोजित"],
    "answer_en": "Connected",
    "answer_hi": "संयोजित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the fundamental period of f(x) = sin(2x) + cos(3x)?",
    "question_hi": "f(x) = sin(2x) + cos(3x) का मौलिक आवर्त क्या है?",
    "options_en": ["π", "2π", "3π", "6π"],
    "options_hi": ["π", "2π", "3π", "6π"],
    "answer_en": "2π",
    "answer_hi": "2π",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Find the number of monic irreducible polynomials of degree 2 over 𝔽₃",
    "question_hi": "𝔽₃ पर घात 2 के एकलकी अघुलनशील बहुपदों की संख्या ज्ञात करें",
    "options_en": ["2", "3", "4", "6"],
    "options_hi": ["2", "3", "4", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the homology group H₁(ℝℙ²) where ℝℙ² is real projective plane?",
    "question_hi": "समरूपी समूह H₁(ℝℙ²) क्या है जहाँ ℝℙ² वास्तविक प्रक्षेपी तल है?",
    "options_en": ["ℤ", "ℤ₂", "0", "ℤ ⊕ ℤ₂"],
    "options_hi": ["ℤ", "ℤ₂", "0", "ℤ ⊕ ℤ₂"],
    "answer_en": "ℤ₂",
    "answer_hi": "ℤ₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "If A is positive definite, what is true about its eigenvalues?",
    "question_hi": "यदि A धनात्मक निश्चित है, तो इसके eigenvalues के बारे में क्या सत्य है?",
    "options_en": ["All real and positive", "All real and non-negative", "May be complex", "At least one zero"],
    "options_hi": ["सभी वास्तविक और धनात्मक", "सभी वास्तविक और अऋणात्मक", "सम्मिश्र हो सकते हैं", "कम से कम एक शून्य"],
    "answer_en": "All real and positive",
    "answer_hi": "सभी वास्तविक और धनात्मक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the value of lim_(n→∞) (1 + 1/n)ⁿ?",
    "question_hi": "lim_(n→∞) (1 + 1/n)ⁿ का मान क्या है?",
    "options_en": ["1", "e", "∞", "0"],
    "options_hi": ["1", "e", "∞", "0"],
    "answer_en": "e",
    "answer_hi": "e",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which topology on ℝ is generated by half-open intervals [a,b)?",
    "question_hi": "ℝ पर कौन सी टोपोलॉजी अर्ध-खुले अंतरालों [a,b) द्वारा उत्पन्न होती है?",
    "options_en": ["Standard topology", "Lower limit topology", "Discrete topology", "Cofinite topology"],
    "options_hi": ["मानक टोपोलॉजी", "निम्न सीमा टोपोलॉजी", "असतत टोपोलॉजी", "सहपरिमित टोपोलॉजी"],
    "answer_en": "Lower limit topology",
    "answer_hi": "निम्न सीमा टोपोलॉजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the dimension of the vector space of 3×3 symmetric matrices?",
    "question_hi": "3×3 सममित मैट्रिक्स के सदिश समष्टि का आयाम क्या है?",
    "options_en": ["3", "6", "9", "12"],
    "options_hi": ["3", "6", "9", "12"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If f is continuous on [a,b] and differentiable on (a,b), which theorem guarantees f'(c) = 0 for some c?",
    "question_hi": "यदि f, [a,b] पर संतत है और (a,b) पर अवकलनीय है, तो कौन सा प्रमेय किसी c के लिए f'(c) = 0 की गारंटी देता है?",
    "options_en": ["Mean Value Theorem", "Rolle's Theorem", "Intermediate Value Theorem", "Extreme Value Theorem"],
    "options_hi": ["माध्य मान प्रमेय", "रोले का प्रमेय", "मध्यवर्ती मान प्रमेय", "चरम मान प्रमेय"],
    "answer_en": "Rolle's Theorem",
    "answer_hi": "रोले का प्रमेय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the chromatic number of the Petersen graph?",
    "question_hi": "पीटरसन ग्राफ का वर्ण संख्या क्या है?",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which set is NOT countable?",
    "question_hi": "कौन सा समुच्चय गणनीय नहीं है?",
    "options_en": ["ℚ", "ℤ × ℤ", "Algebraic numbers", "ℝ"],
    "options_hi": ["ℚ", "ℤ × ℤ", "बीजगणितीय संख्याएँ", "ℝ"],
    "answer_en": "ℝ",
    "answer_hi": "ℝ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the order of the alternating group A₄?",
    "question_hi": "वैकल्पिक समूह A₄ का क्रम क्या है?",
    "options_en": ["12", "24", "6", "8"],
    "options_hi": ["12", "24", "6", "8"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If f is integrable on [0,1], what is lim_(n→∞) ∫₀¹ f(x)sin(nx)dx?",
    "question_hi": "यदि f, [0,1] पर समाकलनीय है, तो lim_(n→∞) ∫₀¹ f(x)sin(nx)dx क्या है?",
    "options_en": ["0", "∫₀¹ f(x)dx", "1", "Depends on f"],
    "options_hi": ["0", "∫₀¹ f(x)dx", "1", "f पर निर्भर करता है"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the minimal polynomial of √2 + √3 over ℚ?",
    "question_hi": "√2 + √3 का ℚ पर न्यूनतम बहुपद क्या है?",
    "options_en": ["x⁴ - 10x² + 1", "x² - 5", "x⁴ - 4x² + 1", "x² - 2√6"],
    "options_hi": ["x⁴ - 10x² + 1", "x² - 5", "x⁴ - 4x² + 1", "x² - 2√6"],
    "answer_en": "x⁴ - 10x² + 1",
    "answer_hi": "x⁴ - 10x² + 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is NOT uniformly continuous on (0,1)?",
    "question_hi": "कौन सा फलन (0,1) पर एकसमान संतत नहीं है?",
    "options_en": ["sin(1/x)", "x²", "√x", "1/x"],
    "options_hi": ["sin(1/x)", "x²", "√x", "1/x"],
    "answer_en": "1/x",
    "answer_hi": "1/x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the value of ∑_(n=1)^∞ 1/n²?",
    "question_hi": "∑_(n=1)^∞ 1/n² का मान क्या है?",
    "options_en": ["π²/4", "π²/6", "π²/8", "π²/12"],
    "options_hi": ["π²/4", "π²/6", "π²/8", "π²/12"],
    "answer_en": "π²/6",
    "answer_hi": "π²/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If V is finite dimensional, what is dim(V) + dim(V*)?",
    "question_hi": "यदि V परिमित-आयामी है, तो dim(V) + dim(V*) क्या है?",
    "options_en": ["dim(V)", "2dim(V)", "dim(V)²", "0"],
    "options_hi": ["dim(V)", "2dim(V)", "dim(V)²", "0"],
    "answer_en": "2dim(V)",
    "answer_hi": "2dim(V)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which metric induces the product topology on ℝ × ℝ?",
    "question_hi": "कौन सी मीट्रिक ℝ × ℝ पर गुणनफल टोपोलॉजी प्रेरित करती है?",
    "options_en": ["d((x,y),(a,b)) = |x-a| + |y-b|", "d((x,y),(a,b)) = √((x-a)² + (y-b)²)", "d((x,y),(a,b)) = max(|x-a|, |y-b|)", "All of these"],
    "options_hi": ["d((x,y),(a,b)) = |x-a| + |y-b|", "d((x,y),(a,b)) = √((x-a)² + (y-b)²)", "d((x,y),(a,b)) = max(|x-a|, |y-b|)", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the order of the group of units in ℤ/15ℤ?",
    "question_hi": "ℤ/15ℤ में इकाइयों के समूह का क्रम क्या है?",
    "options_en": ["4", "6", "8", "10"],
    "options_hi": ["4", "6", "8", "10"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "If f is analytic and |f(z)| ≤ M for all z, what is f'(0)?",
    "question_hi": "यदि f विश्लेषणात्मक है और सभी z के लिए |f(z)| ≤ M, तो f'(0) क्या है?",
    "options_en": ["0", "≤ M", "≤ M/r for some r", "Unbounded"],
    "options_hi": ["0", "≤ M", "≤ M/r किसी r के लिए", "अपरिबद्ध"],
    "answer_en": "≤ M",
    "answer_hi": "≤ M",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the Lebesgue measure of ℚ in [0,1]?",
    "question_hi": "[0,1] में ℚ का लेबेस्ग माप क्या है?",
    "options_en": ["0", "1", "1/2", "Undefined"],
    "options_hi": ["0", "1", "1/2", "अपरिभाषित"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which space is NOT homeomorphic to the others?",
    "question_hi": "कौन सा समष्टि अन्य के समाकृतिक नहीं है?",
    "options_en": ["S¹", "ℝ", "(0,1)", "[0,1]"],
    "options_hi": ["S¹", "ℝ", "(0,1)", "[0,1]"],
    "answer_en": "[0,1]",
    "answer_hi": "[0,1]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the value of Γ(1/2)?",
    "question_hi": "Γ(1/2) का मान क्या है?",
    "options_en": ["√π", "π", "1", "π/2"],
    "options_hi": ["√π", "π", "1", "π/2"],
    "answer_en": "√π",
    "answer_hi": "√π",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "If A and B are independent events with P(A) = 0.3, P(B) = 0.4, what is P(A ∪ B)?",
    "question_hi": "यदि A और B स्वतंत्र घटनाएँ हैं जहाँ P(A) = 0.3, P(B) = 0.4, तो P(A ∪ B) क्या है?",
    "options_en": ["0.58", "0.7", "0.12", "0.82"],
    "options_hi": ["0.58", "0.7", "0.12", "0.82"],
    "answer_en": "0.58",
    "answer_hi": "0.58",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the fundamental group of the figure eight?",
    "question_hi": "आठ के आकृति का मौलिक समूह क्या है?",
    "options_en": ["ℤ", "ℤ²", "Free group on 2 generators", "ℤ ∗ ℤ"],
    "options_hi": ["ℤ", "ℤ²", "2 जनरेटर पर मुक्त समूह", "ℤ ∗ ℤ"],
    "answer_en": "Free group on 2 generators",
    "answer_hi": "2 जनरेटर पर मुक्त समूह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which theorem states that every bounded sequence in ℝⁿ has a convergent subsequence?",
    "question_hi": "कौन सा प्रमेय कहता है कि ℝⁿ में प्रत्येक परिबद्ध अनुक्रम का एक अभिसारी उपानुक्रम होता है?",
    "options_en": ["Bolzano-Weierstrass", "Heine-Borel", "Intermediate Value", "Mean Value"],
    "options_hi": ["बोल्ज़ानो-वीयरस्ट्रास", "हाइने-बोरेल", "मध्यवर्ती मान", "माध्य मान"],
    "answer_en": "Bolzano-Weierstrass",
    "answer_hi": "बोल्ज़ानो-वीयरस्ट्रास",
    "attempted": false,
    "selected": ""
  }
];


// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

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

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};