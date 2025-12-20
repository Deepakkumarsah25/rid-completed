const questions = [
  {
    "num": 1,
    "question_en": "If F is a field extension of ℚ with [F:ℚ] = 4, and α ∈ F satisfies α⁴ = 2, what is [ℚ(α):ℚ]?",
    "question_hi": "यदि F, ℚ का क्षेत्र विस्तार है जहाँ [F:ℚ] = 4, और α ∈ F, α⁴ = 2 को संतुष्ट करता है, तो [ℚ(α):ℚ] क्या है?",
    "options_en": ["2", "3", "4", "Cannot determine"],
    "options_hi": ["2", "3", "4", "निर्धारित नहीं कर सकते"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the Hausdorff dimension of the Sierpinski triangle?",
    "question_hi": "सिएरपिंस्की त्रिभुज का हॉसडॉर्फ आयाम क्या है?",
    "options_en": ["log2(3)", "log3(2)", "log3(4)", "log4(3)"],
    "options_hi": ["log2(3)", "log3(2)", "log3(4)", "log4(3)"],
    "answer_en": "log2(3)",
    "answer_hi": "log2(3)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Let X be a Banach space and T: X → X be a compact operator. Which property must T have?",
    "question_hi": "मान लीजिए X एक बनाक समष्टि है और T: X → X एक संहत संकारक है। T में कौन सा गुण अवश्य होना चाहिए?",
    "options_en": ["Closed range", "Finite rank", "Spectrum is countable", "Approximation property"],
    "options_hi": ["संवृत परिसर", "परिमित रैंक", "स्पेक्ट्रम गणनीय है", "अनुमान गुण"],
    "answer_en": "Spectrum is countable",
    "answer_hi": "स्पेक्ट्रम गणनीय है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Compute the étale cohomology group H¹_et(Spec(ℂ), ℤ/nℤ)",
    "question_hi": "étale सहसम्मिश्र समूह H¹_et(Spec(ℂ), ℤ/nℤ) की गणना करें",
    "options_en": ["0", "ℤ/nℤ", "μ_n", "Cannot compute"],
    "options_hi": ["0", "ℤ/nℤ", "μ_n", "गणना नहीं कर सकते"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the fundamental group of the complement of a trefoil knot in S³?",
    "question_hi": "S³ में ट्रेफॉइल गाँठ के पूरक का मौलिक समूह क्या है?",
    "options_en": ["ℤ", "ℤ₂", "Braid group B₃", "⟨x,y | x² = y³⟩"],
    "options_hi": ["ℤ", "ℤ₂", "ब्रेड समूह B₃", "⟨x,y | x² = y³⟩"],
    "answer_en": "⟨x,y | x² = y³⟩",
    "answer_hi": "⟨x,y | x² = y³⟩",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If M is a compact orientable 3-manifold with H₁(M; ℤ) = 0, what is H₂(M; ℤ)?",
    "question_hi": "यदि M एक संहत अभिमुखीय 3-मैनिफोल्ड है जहाँ H₁(M; ℤ) = 0, तो H₂(M; ℤ) क्या है?",
    "options_en": ["0", "ℤ", "ℤ²", "Cannot determine"],
    "options_hi": ["0", "ℤ", "ℤ²", "निर्धारित नहीं कर सकते"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the Mahler measure of the polynomial P(x) = x³ - x - 1?",
    "question_hi": "बहुपद P(x) = x³ - x - 1 का माहलर माप क्या है?",
    "options_en": ["exp(∫₀¹ log|P(e^{2πiθ})| dθ)", "Product of roots outside unit circle", "Both", "Neither"],
    "options_hi": ["exp(∫₀¹ log|P(e^{2πiθ})| dθ)", "इकाई वृत्त के बाहर मूलों का गुणनफल", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which von Neumann algebra factor type is L(𝔽₂)?",
    "question_hi": "L(𝔽₂) किस वॉन न्यूमैन बीजगणित कारक प्रकार का है?",
    "options_en": ["Type I", "Type II₁", "Type II_∞", "Type III"],
    "options_hi": ["प्रकार I", "प्रकार II₁", "प्रकार II_∞", "प्रकार III"],
    "answer_en": "Type II₁",
    "answer_hi": "प्रकार II₁",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the étale fundamental group of Spec(ℤ)?",
    "question_hi": "Spec(ℤ) का étale मौलिक समूह क्या है?",
    "options_en": ["ℤ̂", "Gal(ℚ̅/ℚ)", "1", "Cannot define"],
    "options_hi": ["ℤ̂", "Gal(ℚ̅/ℚ)", "1", "परिभाषित नहीं कर सकते"],
    "answer_en": "Gal(ℚ̅/ℚ)",
    "answer_hi": "Gal(ℚ̅/ℚ)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "If X is a K3 surface, what is h¹,¹(X)?",
    "question_hi": "यदि X एक K3 सतह है, तो h¹,¹(X) क्या है?",
    "options_en": ["1", "20", "19", "22"],
    "options_hi": ["1", "20", "19", "22"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the Mordell-Weil rank of the elliptic curve y² = x³ - x over ℚ?",
    "question_hi": "दीर्घवृत्तीय वक्र y² = x³ - x का ℚ पर मॉर्डेल-वेल रैंक क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Compute the derived functor R¹f_*𝒪_X where f: X → Y is a proper morphism of schemes",
    "question_hi": "व्युत्पन्न फलक R¹f_*𝒪_X की गणना करें जहाँ f: X → Y योजनाओं का उचित रूपरूपांतरण है",
    "options_en": ["Sheaf cohomology", "Direct image", "Higher direct image", "Leray spectral sequence"],
    "options_hi": ["महीन सम्मिश्र", "प्रत्यक्ष प्रतिबिम्ब", "उच्चतर प्रत्यक्ष प्रतिबिम्ब", "लेरे वर्णक्रमीय अनुक्रम"],
    "answer_en": "Higher direct image",
    "answer_hi": "उच्चतर प्रत्यक्ष प्रतिबिम्ब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the Seifert genus of the figure-eight knot?",
    "question_hi": "आठ के आकृति गाँठ का सीफर्ट जीनस क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If G is a finite simple group of order 60, what is G?",
    "question_hi": "यदि G क्रम 60 का परिमित सरल समूह है, तो G क्या है?",
    "options_en": ["A₅", "PSL(2,4)", "PSL(2,5)", "All of these"],
    "options_hi": ["A₅", "PSL(2,4)", "PSL(2,5)", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the Conway polynomial of the trefoil knot?",
    "question_hi": "ट्रेफॉइल गाँठ का कॉनवे बहुपद क्या है?",
    "options_en": ["z² + 1", "z", "1", "z³ + z"],
    "options_hi": ["z² + 1", "z", "1", "z³ + z"],
    "answer_en": "z² + 1",
    "answer_hi": "z² + 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which cohomology theory satisfies Poincaré duality for all manifolds?",
    "question_hi": "कौन सी सहसम्मिश्र सिद्धांत सभी मैनिफोल्ड के लिए पोयंकारे द्वैत को संतुष्ट करती है?",
    "options_en": ["Singular", "De Rham", "Čech", "Sheaf"],
    "options_hi": ["एकवचन", "डी राम", "चेच", "महीन"],
    "answer_en": "Sheaf",
    "answer_hi": "महीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the minimal number of generators for the ideal I = (x², xy, y²) in ℂ[x,y]?",
    "question_hi": "ℂ[x,y] में आदर्श I = (x², xy, y²) के लिए जनरेटर की न्यूनतम संख्या क्या है?",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "If M is a simply connected 4-manifold with intersection form E₈, what is π₂(M)?",
    "question_hi": "यदि M एक सरल संयोजित 4-मैनिफोल्ड है जिसका प्रतिच्छेदन रूप E₈ है, तो π₂(M) क्या है?",
    "options_en": ["ℤ⁸", "ℤ²⁸", "0", "Cannot determine"],
    "options_hi": ["ℤ⁸", "ℤ²⁸", "0", "निर्धारित नहीं कर सकते"],
    "answer_en": "ℤ⁸",
    "answer_hi": "ℤ⁸",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the Bloch-Kato conjecture about?",
    "question_hi": "ब्लॉच-काटो अनुमान किस बारे में है?",
    "options_en": ["Galois cohomology", "Motivic cohomology", "Both", "Neither"],
    "options_hi": ["गैलोइस सहसम्मिश्र", "प्रेरक सहसम्मिश्र", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which theorem states that every finite division ring is a field?",
    "question_hi": "कौन सा प्रमेय कहता है कि प्रत्येक परिमित विभाजन वलय एक क्षेत्र है?",
    "options_en": ["Wedderburn's", "Artin-Wedderburn", "Jacobson", "Skolem-Noether"],
    "options_hi": ["वेडरबर्न का", "आर्टिन-वेडरबर्न", "जैकबसन", "स्कोलेम-नोएथर"],
    "answer_en": "Wedderburn's",
    "answer_hi": "वेडरबर्न का",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the geometric genus of a smooth quartic curve in ℙ²?",
    "question_hi": "ℙ² में एक चिकनी चतुर्थांश वक्र का ज्यामितीय जीनस क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "If G is a profinite group, what is its topology?",
    "question_hi": "यदि G एक प्रोफिनाइट समूह है, तो इसकी टोपोलॉजी क्या है?",
    "options_en": ["Discrete", "Compact Hausdorff", "Metrizable", "All finite quotients"],
    "options_hi": ["असतत", "संहत हॉसडॉर्फ", "मीट्रीकरणीय", "सभी परिमित भागफल"],
    "answer_en": "Compact Hausdorff",
    "answer_hi": "संहत हॉसडॉर्फ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the value of ζ(-1) where ζ is Riemann zeta?",
    "question_hi": "ζ(-1) का मान क्या है जहाँ ζ रीमैन जीटा है?",
    "options_en": ["-1/12", "0", "∞", "Undefined"],
    "options_hi": ["-1/12", "0", "∞", "अपरिभाषित"],
    "answer_en": "-1/12",
    "answer_hi": "-1/12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which conjecture relates L-functions to automorphic forms?",
    "question_hi": "कौन सा अनुमान L-फलनों को स्वरूपसम रूपों से संबंधित करता है?",
    "options_en": ["Langlands", "Taniyama-Shimura", "Weil", "Sato-Tate"],
    "options_hi": ["लैंगलैंड्स", "तानियामा-शिमुरा", "वेइल", "सातो-टेट"],
    "answer_en": "Langlands",
    "answer_hi": "लैंगलैंड्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the étale cohomological dimension of Spec(𝔽_q)?",
    "question_hi": "Spec(𝔽_q) का étale सहसम्मिश्र आयाम क्या है?",
    "options_en": ["0", "1", "2", "∞"],
    "options_hi": ["0", "1", "2", "∞"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "If X is a Calabi-Yau 3-fold, what is χ(X, 𝒪_X)?",
    "question_hi": "यदि X एक कालाबी-याउ 3-गुना है, तो χ(X, 𝒪_X) क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the Jones polynomial of the unknot?",
    "question_hi": "अनक्नॉट का जोन्स बहुपद क्या है?",
    "options_en": ["1", "0", "t + t^{-1}", "Undefined"],
    "options_hi": ["1", "0", "t + t^{-1}", "अपरिभाषित"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which theorem classifies finite simple groups?",
    "question_hi": "कौन सा प्रमेय परिमित सरल समूहों का वर्गीकरण करता है?",
    "options_en": ["Classification Theorem", "Feit-Thompson", "Sylow", "Jordan-Hölder"],
    "options_hi": ["वर्गीकरण प्रमेय", "फेट-थॉम्पसन", "साइलो", "जॉर्डन-होल्डर"],
    "answer_en": "Classification Theorem",
    "answer_hi": "वर्गीकरण प्रमेय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the Milnor number of the singularity x³ + y³ = 0?",
    "question_hi": "विचित्रता x³ + y³ = 0 का मिल्नोर संख्या क्या है?",
    "options_en": ["2", "4", "6", "8"],
    "options_hi": ["2", "4", "6", "8"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If M is a closed simply connected 4-manifold, what is known about its intersection form?",
    "question_hi": "यदि M एक संवृत सरल संयोजित 4-मैनिफोल्ड है, तो इसके प्रतिच्छेदन रूप के बारे में क्या ज्ञात है?",
    "options_en": ["Unimodular", "Even", "Both", "Neither"],
    "options_hi": ["एकमॉड्यूलर", "सम", "दोनों", "कोई नहीं"],
    "answer_en": "Unimodular",
    "answer_hi": "एकमॉड्यूलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the Brauer group of ℝ?",
    "question_hi": "ℝ का ब्रौएर समूह क्या है?",
    "options_en": ["ℤ/2ℤ", "ℤ", "0", "ℚ/ℤ"],
    "options_hi": ["ℤ/2ℤ", "ℤ", "0", "ℚ/ℤ"],
    "answer_en": "ℤ/2ℤ",
    "answer_hi": "ℤ/2ℤ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which invariant distinguishes exotic ℝ⁴ structures?",
    "question_hi": "कौन सा अचर विदेशी ℝ⁴ संरचनाओं में भेद करता है?",
    "options_en": ["Casson invariant", "Donaldson invariant", "Seiberg-Witten", "All of these"],
    "options_hi": ["कैसन अचर", "डोनाल्डसन अचर", "सीबर्ग-विटेन", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the transcendence degree of ℂ over ℚ?",
    "question_hi": "ℂ की ℚ पर अनुवादीयता घात क्या है?",
    "options_en": ["0", "1", "ℵ₀", "2^{ℵ₀}"],
    "options_hi": ["0", "1", "ℵ₀", "2^{ℵ₀}"],
    "answer_en": "2^{ℵ₀}",
    "answer_hi": "2^{ℵ₀}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "If G is a reductive group over ℂ, what is its representation ring?",
    "question_hi": "यदि G, ℂ पर एक अपचयी समूह है, तो इसका निरूपण वलय क्या है?",
    "options_en": ["Polynomial ring", "Group ring", "Character ring", "All equivalent"],
    "options_hi": ["बहुपद वलय", "समूह वलय", "अभिलाक्षणिक वलय", "सभी समतुल्य"],
    "answer_en": "All equivalent",
    "answer_hi": "सभी समतुल्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the motivic cohomology H^{p,q}(Spec(k), ℤ)?",
    "question_hi": "प्रेरक सहसम्मिश्र H^{p,q}(Spec(k), ℤ) क्या है?",
    "options_en": ["K-theory", "Chow groups", "Both", "Neither"],
    "options_hi": ["K-सिद्धांत", "चाउ समूह", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which conjecture relates algebraic cycles to Hodge classes?",
    "question_hi": "कौन सा अनुमान बीजगणितीय चक्रों को हॉज वर्गों से संबंधित करता है?",
    "options_en": ["Hodge", "Tate", "Standard", "All equivalent"],
    "options_hi": ["हॉज", "टेट", "मानक", "सभी समतुल्य"],
    "answer_en": "Hodge",
    "answer_hi": "हॉज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the period of the Weierstrass ℘-function with lattice Λ?",
    "question_hi": "जालक Λ वाले वीयरस्ट्रास ℘-फलन का आवर्त क्या है?",
    "options_en": ["Λ", "ℂ/Λ", "Both", "Neither"],
    "options_hi": ["Λ", "ℂ/Λ", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "If X is a Fano variety, what is -K_X?",
    "question_hi": "यदि X एक फैनो बहुरूपता है, तो -K_X क्या है?",
    "options_en": ["Ample", "Nef", "Big", "All of these"],
    "options_hi": ["पर्याप्त", "नेफ", "बड़ा", "ये सभी"],
    "answer_en": "Ample",
    "answer_hi": "पर्याप्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the Gromov-Witten invariant counting?",
    "question_hi": "ग्रोमोव-विटेन अचर क्या गिन रहा है?",
    "options_en": ["Rational curves", "Pseudoholomorphic curves", "Both", "Neither"],
    "options_hi": ["परिमेय वक्र", "स्यूडोहोलोमोर्फिक वक्र", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which theorem states that every continuous function on [0,1] can be uniformly approximated by polynomials?",
    "question_hi": "कौन सा प्रमेय कहता है कि [0,1] पर प्रत्येक संतत फलन को बहुपदों द्वारा एकसमान रूप से अनुमानित किया जा सकता है?",
    "options_en": ["Weierstrass", "Stone-Weierstrass", "Both", "Neither"],
    "options_hi": ["वीयरस्ट्रास", "स्टोन-वीयरस्ट्रास", "दोनों", "कोई नहीं"],
    "answer_en": "Weierstrass",
    "answer_hi": "वीयरस्ट्रास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the geometric realization of the simplicial set Δ[n]?",
    "question_hi": "सिम्प्लिसियल समुच्चय Δ[n] का ज्यामितीय यथार्थीकरण क्या है?",
    "options_en": ["n-simplex", "n-ball", "n-sphere", "n-cube"],
    "options_hi": ["n-सिंप्लेक्स", "n-गेंद", "n-गोला", "n-घन"],
    "answer_en": "n-simplex",
    "answer_hi": "n-सिंप्लेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "If A is a C*-algebra, what is its spectrum?",
    "question_hi": "यदि A एक C*-बीजगणित है, तो इसका स्पेक्ट्रम क्या है?",
    "options_en": ["Set of irreducible representations", "Set of maximal ideals", "Both", "Neither"],
    "options_hi": ["अघुलनशील निरूपणों का समुच्चय", "अधिकतम आदर्शों का समुच्चय", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the Novikov conjecture about?",
    "question_hi": "नोविकोव अनुमान किस बारे में है?",
    "options_en": ["Higher signatures", "Elliptic cohomology", "Both", "Neither"],
    "options_hi": ["उच्चतर हस्ताक्षर", "दीर्घवृत्तीय सहसम्मिश्र", "दोनों", "कोई नहीं"],
    "answer_en": "Higher signatures",
    "answer_hi": "उच्चतर हस्ताक्षर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "If M is a hyperbolic 3-manifold, what is π₁(M)?",
    "question_hi": "यदि M एक अतिपरवलयिक 3-मैनिफोल्ड है, तो π₁(M) क्या है?",
    "options_en": ["Subgroup of PSL(2,ℂ)", "Kleinian group", "Both", "Neither"],
    "options_hi": ["PSL(2,ℂ) का उपसमूह", "क्लेनियन समूह", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the Grothendieck group K₀(R) of a ring R?",
    "question_hi": "वलय R का ग्रोथेंडीक समूह K₀(R) क्या है?",
    "options_en": ["Group completion of projective modules", "Universal additive invariant", "Both", "Neither"],
    "options_hi": ["प्रक्षेपी मॉड्यूल का समूह पूर्णता", "सार्वत्रिक योगात्मक अचर", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which theorem classifies surfaces?",
    "question_hi": "कौन सा प्रमेय सतहों का वर्गीकरण करता है?",
    "options_en": ["Classification of surfaces", "Uniformization", "Both", "Neither"],
    "options_hi": ["सतहों का वर्गीकरण", "एकसमानीकरण", "दोनों", "कोई नहीं"],
    "answer_en": "Classification of surfaces",
    "answer_hi": "सतहों का वर्गीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the Tits building of GL(n)?",
    "question_hi": "GL(n) का टिट्स भवन क्या है?",
    "options_en": ["Flag complex", "Simplicial complex", "Both", "Neither"],
    "options_hi": ["ध्वज सिंप्लेक्स", "सिम्प्लिसियल सिंप्लेक्स", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "If X is a scheme, what is its functor of points?",
    "question_hi": "यदि X एक योजना है, तो इसका बिंदुओं का फलक क्या है?",
    "options_en": ["Hom(Spec(-), X)", "Sheaf on schemes", "Both", "Neither"],
    "options_hi": ["Hom(Spec(-), X)", "योजनाओं पर महीन", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the Kontsevich invariant of knots?",
    "question_hi": "गाँठों का कोन्त्सेविच अचर क्या है?",
    "options_en": ["Universal Vassiliev invariant", "Chord diagram", "Both", "Neither"],
    "options_hi": ["सार्वत्रिक वासिलिव अचर", "जीवा आरेख", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which conjecture relates algebraic K-theory to étale cohomology?",
    "question_hi": "कौन सा अनुमान बीजगणितीय K-सिद्धांत को étale सहसम्मिश्र से संबंधित करता है?",
    "options_en": ["Quillen-Lichtenbaum", "Bloch-Kato", "Both", "Neither"],
    "options_hi": ["क्विलेन-लिचटेनबाम", "ब्लॉच-काटो", "दोनों", "कोई नहीं"],
    "answer_en": "Quillen-Lichtenbaum",
    "answer_hi": "क्विलेन-लिचटेनबाम",
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