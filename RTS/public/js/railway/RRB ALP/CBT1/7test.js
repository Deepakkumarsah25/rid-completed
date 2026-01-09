const questions = [
  {
    "num": 1,
    "question_en": "If 3^2 + 4^2 = 5^2, 5^2 + 12^2 = 13^2, then 7^2 + 24^2 = ?^2",
    "question_hi": "यदि 3^2 + 4^2 = 5^2, 5^2 + 12^2 = 13^2, तो 7^2 + 24^2 = ?^2",
    "options_en": ["25", "26", "27", "28"],
    "options_hi": ["25", "26", "27", "28"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "If in a certain code, 'CRYPTOGRAPHY' is written as 'XIRKGLITKCSN', how is 'CRYPTANALYSIS' written?",
    "question_hi": "यदि एक निश्चित कूट में, 'CRYPTOGRAPHY' को 'XIRKGLITKCSN' लिखा जाता है, तो 'CRYPTANALYSIS' कैसे लिखा जाएगा?",
    "options_en": ["XIRKGMZOHRHR", "XIRKGMZOHRHS", "XIRKGMZOHRHT", "XIRKGMZOHRHU"],
    "options_hi": ["XIRKGMZOHRHR", "XIRKGMZOHRHS", "XIRKGMZOHRHT", "XIRKGMZOHRHU"],
    "answer_en": "XIRKGMZOHRHR",
    "answer_hi": "XIRKGMZOHRHR",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Find the missing number: 2, 12, 36, 80, 150, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 2, 12, 36, 80, 150, ?",
    "options_en": ["216", "252", "294", "336"],
    "options_hi": ["216", "252", "294", "336"],
    "answer_en": "252",
    "answer_hi": "252",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If 'QUANTUM' is coded as 'TFZSQYR' and 'PHYSICS' is coded as 'UMDXNHX', how is 'MECHANICS' coded?",
    "question_hi": "यदि 'QUANTUM' को 'TFZSQYR' से कूटबद्ध किया जाता है और 'PHYSICS' को 'UMDXNHX' से, तो 'MECHANICS' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["RJHFMRNHX", "RJHFMRNIX", "RJHFMRNJX", "RJHFMRNKX"],
    "options_hi": ["RJHFMRNHX", "RJHFMRNIX", "RJHFMRNJX", "RJHFMRNKX"],
    "answer_en": "RJHFMRNHX",
    "answer_hi": "RJHFMRNHX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What comes next: ZA, YC, XF, WJ, VO, ?",
    "question_hi": "आगे क्या आता है: ZA, YC, XF, WJ, VO, ?",
    "options_en": ["UT", "US", "TR", "TS"],
    "options_hi": ["UT", "US", "TR", "TS"],
    "answer_en": "UT",
    "answer_hi": "UT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If 7 ★ 4 = 85, 9 ★ 6 = 117, then 8 ★ 5 = ?",
    "question_hi": "यदि 7 ★ 4 = 85, 9 ★ 6 = 117, तो 8 ★ 5 = ?",
    "options_en": ["96", "104", "112", "120"],
    "options_hi": ["96", "104", "112", "120"],
    "answer_en": "104",
    "answer_hi": "104",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Find the odd one out: 343, 512, 729, 1000, 1331, 1728",
    "question_hi": "विषम चुनें: 343, 512, 729, 1000, 1331, 1728",
    "options_en": ["1000", "1331", "1728", "343"],
    "options_hi": ["1000", "1331", "1728", "343"],
    "answer_en": "1000",
    "answer_hi": "1000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If A₁ = 2, B₂ = 12, C₃ = 36, D₄ = 80, then E₅ = ?",
    "question_hi": "यदि A₁ = 2, B₂ = 12, C₃ = 36, D₄ = 80, तो E₅ = ?",
    "options_en": ["150", "180", "210", "240"],
    "options_hi": ["150", "180", "210", "240"],
    "answer_en": "150",
    "answer_hi": "150",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the missing number: 1, 4, 27, 256, 3125, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 1, 4, 27, 256, 3125, ?",
    "options_en": ["46656", "59049", "65536", "78125"],
    "options_hi": ["46656", "59049", "65536", "78125"],
    "answer_en": "46656",
    "answer_hi": "46656",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "If 'ALGORITHM' is coded as 'ZOTLIRGSN', how is 'HEURISTIC' coded?",
    "question_hi": "यदि 'ALGORITHM' को 'ZOTLIRGSN' से कूटबद्ध किया जाता है, तो 'HEURISTIC' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["SVFIRHGRX", "SVFIRHGSX", "SVFIRHGTX", "SVFIRHGRY"],
    "options_hi": ["SVFIRHGRX", "SVFIRHGSX", "SVFIRHGTX", "SVFIRHGRY"],
    "answer_en": "SVFIRHGRX",
    "answer_hi": "SVFIRHGRX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Find the next: 1, 1, 4, 8, 9, 27, 16, 64, ?",
    "question_hi": "अगला ज्ञात करें: 1, 1, 4, 8, 9, 27, 16, 64, ?",
    "options_en": ["25", "32", "49", "81"],
    "options_hi": ["25", "32", "49", "81"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "If 'FIBONACCI' is to 'CURIOUS' as 'EULER' is to ?",
    "question_hi": "यदि 'FIBONACCI' का 'CURIOUS' से है जैसे 'EULER' का ? से है",
    "options_en": ["SWIFT", "SMART", "QUICK", "BRIGHT"],
    "options_hi": ["SWIFT", "SMART", "QUICK", "BRIGHT"],
    "answer_en": "SWIFT",
    "answer_hi": "SWIFT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What comes next: 128, 64, 96, 48, 72, 36, 54, ?",
    "question_hi": "आगे क्या आता है: 128, 64, 96, 48, 72, 36, 54, ?",
    "options_en": ["27", "18", "24", "32"],
    "options_hi": ["27", "18", "24", "32"],
    "answer_en": "27",
    "answer_hi": "27",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If 'NEURALNETWORK' is coded as 'MFVSBMOSSPQL', how is 'DEEPLEARNING' coded?",
    "question_hi": "यदि 'NEURALNETWORK' को 'MFVSBMOSSPQL' से कूटबद्ध किया जाता है, तो 'DEEPLEARNING' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["EFDOFMBSOHOH", "EFFOFMBSOHOH", "EFFPFMBTOHOH", "EFDPFMBSOHOH"],
    "options_hi": ["EFDOFMBSOHOH", "EFFOFMBSOHOH", "EFFPFMBTOHOH", "EFDPFMBSOHOH"],
    "answer_en": "EFFOFMBSOHOH",
    "answer_hi": "EFFOFMBSOHOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Find the missing term: 1, 5, 14, 30, 55, 91, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 1, 5, 14, 30, 55, 91, ?",
    "options_en": ["120", "140", "154", "168"],
    "options_hi": ["120", "140", "154", "168"],
    "answer_en": "140",
    "answer_hi": "140",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "If 15 ⊕ 7 = 176, 23 ⊕ 9 = 448, then 31 ⊕ 11 = ?",
    "question_hi": "यदि 15 ⊕ 7 = 176, 23 ⊕ 9 = 448, तो 31 ⊕ 11 = ?",
    "options_en": ["864", "900", "960", "1024"],
    "options_hi": ["864", "900", "960", "1024"],
    "answer_en": "960",
    "answer_hi": "960",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the next letter: J, Q, Z, I, R, ?",
    "question_hi": "अगला अक्षर क्या है: J, Q, Z, I, R, ?",
    "options_en": ["A", "B", "C", "D"],
    "options_hi": ["A", "B", "C", "D"],
    "answer_en": "A",
    "answer_hi": "A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Find the odd one: 385, 462, 572, 693, 825, 968",
    "question_hi": "विषम ज्ञात करें: 385, 462, 572, 693, 825, 968",
    "options_en": ["462", "572", "693", "968"],
    "options_hi": ["462", "572", "693", "968"],
    "answer_en": "462",
    "answer_hi": "462",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If 2, 10, 30, 68, 130, ? what is the next?",
    "question_hi": "यदि 2, 10, 30, 68, 130, ? अगला क्या है?",
    "options_en": ["222", "224", "226", "228"],
    "options_hi": ["222", "224", "226", "228"],
    "answer_en": "222",
    "answer_hi": "222",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "If 'CRYPTOCURRENCY' is coded as 'XIRKLGXIIFIVRB', how is 'BLOCKCHAIN' coded?",
    "question_hi": "यदि 'CRYPTOCURRENCY' को 'XIRKLGXIIFIVRB' से कूटबद्ध किया जाता है, तो 'BLOCKCHAIN' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["YOLPXSRZM", "YOLPXSZRM", "YOLPXSZRN", "YOLPXSRZN"],
    "options_hi": ["YOLPXSRZM", "YOLPXSZRM", "YOLPXSZRN", "YOLPXSRZN"],
    "answer_en": "YOLPXSRZM",
    "answer_hi": "YOLPXSRZM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the missing number: 0, 7, 26, 63, 124, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 0, 7, 26, 63, 124, ?",
    "options_en": ["215", "216", "217", "218"],
    "options_hi": ["215", "216", "217", "218"],
    "answer_en": "215",
    "answer_hi": "215",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "If 'MATHEMATICS' is to 'COMPUTATION' as 'PHYSICS' is to ?",
    "question_hi": "यदि 'MATHEMATICS' का 'COMPUTATION' से है जैसे 'PHYSICS' का ? से है",
    "options_en": ["EXPERIMENT", "OBSERVATION", "MEASUREMENT", "CALCULATION"],
    "options_hi": ["EXPERIMENT", "OBSERVATION", "MEASUREMENT", "CALCULATION"],
    "answer_en": "EXPERIMENT",
    "answer_hi": "EXPERIMENT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find the next term: 1, 3, 6, 10, 15, 21, 28, 36, ?",
    "question_hi": "अगला पद ज्ञात करें: 1, 3, 6, 10, 15, 21, 28, 36, ?",
    "options_en": ["45", "49", "55", "64"],
    "options_hi": ["45", "49", "55", "64"],
    "answer_en": "45",
    "answer_hi": "45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "If 12 ⊗ 8 = 208, 15 ⊗ 9 = 306, then 18 ⊗ 10 = ?",
    "question_hi": "यदि 12 ⊗ 8 = 208, 15 ⊗ 9 = 306, तो 18 ⊗ 10 = ?",
    "options_en": ["424", "442", "460", "478"],
    "options_hi": ["424", "442", "460", "478"],
    "answer_en": "460",
    "answer_hi": "460",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is the odd one: 6, 28, 496, 8128, 33550336",
    "question_hi": "कौन सा विषम है: 6, 28, 496, 8128, 33550336",
    "options_en": ["6", "28", "496", "8128"],
    "options_hi": ["6", "28", "496", "8128"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the next: A, H, O, V, C, ?",
    "question_hi": "अगला क्या है: A, H, O, V, C, ?",
    "options_en": ["J", "K", "L", "M"],
    "options_hi": ["J", "K", "L", "M"],
    "answer_en": "J",
    "answer_hi": "J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Find missing number: 5, 13, 25, 41, 61, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 5, 13, 25, 41, 61, ?",
    "options_en": ["85", "86", "87", "88"],
    "options_hi": ["85", "86", "87", "88"],
    "answer_en": "85",
    "answer_hi": "85",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "If 'TELESCOPE' = 126, 'MICROSCOPE' = 144, then 'PERISCOPE' = ?",
    "question_hi": "यदि 'TELESCOPE' = 126, 'MICROSCOPE' = 144, तो 'PERISCOPE' = ?",
    "options_en": ["135", "138", "141", "144"],
    "options_hi": ["135", "138", "141", "144"],
    "answer_en": "138",
    "answer_hi": "138",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What comes next: 1, 2, 4, 8, 16, 31, ?",
    "question_hi": "आगे क्या आता है: 1, 2, 4, 8, 16, 31, ?",
    "options_en": ["57", "60", "62", "64"],
    "options_hi": ["57", "60", "62", "64"],
    "answer_en": "57",
    "answer_hi": "57",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If 'SYMMETRY' is coded as 'HBNVGNIB', how is 'ASYMPTOTE' coded?",
    "question_hi": "यदि 'SYMMETRY' को 'HBNVGNIB' से कूटबद्ध किया जाता है, तो 'ASYMPTOTE' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["ZHBKNKLGV", "ZHBLNKLGV", "ZHBKNKMGW", "ZHBLNKMGW"],
    "options_hi": ["ZHBKNKLGV", "ZHBLNKLGV", "ZHBKNKMGW", "ZHBLNKMGW"],
    "answer_en": "ZHBKNKLGV",
    "answer_hi": "ZHBKNKLGV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Find the next term: 1, 8, 27, 64, 125, 216, ?",
    "question_hi": "अगला पद ज्ञात करें: 1, 8, 27, 64, 125, 216, ?",
    "options_en": ["343", "512", "729", "1000"],
    "options_hi": ["343", "512", "729", "1000"],
    "answer_en": "343",
    "answer_hi": "343",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "If 3 + 4 = 25, 5 + 12 = 169, then 7 + 24 = ?",
    "question_hi": "यदि 3 + 4 = 25, 5 + 12 = 169, तो 7 + 24 = ?",
    "options_en": ["625", "676", "729", "784"],
    "options_hi": ["625", "676", "729", "784"],
    "answer_en": "625",
    "answer_hi": "625",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the odd one: 127, 131, 137, 139, 143, 149",
    "question_hi": "विषम कौन सा है: 127, 131, 137, 139, 143, 149",
    "options_en": ["143", "139", "137", "131"],
    "options_hi": ["143", "139", "137", "131"],
    "answer_en": "143",
    "answer_hi": "143",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Find missing: 1, 3, 15, 105, 945, ?",
    "question_hi": "लुप्त ज्ञात करें: 1, 3, 15, 105, 945, ?",
    "options_en": ["10395", "10495", "10595", "10695"],
    "options_hi": ["10395", "10495", "10595", "10695"],
    "answer_en": "10395",
    "answer_hi": "10395",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "If 'QUADRATIC' is coded as 'TFIWGFXNH', how is 'POLYNOMIAL' coded?",
    "question_hi": "यदि 'QUADRATIC' को 'TFIWGFXNH' से कूटबद्ध किया जाता है, तो 'POLYNOMIAL' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["UTQCRTPDZO", "UTQCRTPDZP", "UTQCRTQDZO", "UTQCRTQDZP"],
    "options_hi": ["UTQCRTPDZO", "UTQCRTPDZP", "UTQCRTQDZO", "UTQCRTQDZP"],
    "answer_en": "UTQCRTPDZO",
    "answer_hi": "UTQCRTPDZO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is next: 0, 1, 3, 6, 10, 15, 21, 28, ?",
    "question_hi": "अगला क्या है: 0, 1, 3, 6, 10, 15, 21, 28, ?",
    "options_en": ["36", "38", "40", "42"],
    "options_hi": ["36", "38", "40", "42"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If 4 Δ 6 = 52, 7 Δ 9 = 130, then 10 Δ 12 = ?",
    "question_hi": "यदि 4 Δ 6 = 52, 7 Δ 9 = 130, तो 10 Δ 12 = ?",
    "options_en": ["244", "256", "268", "280"],
    "options_hi": ["244", "256", "268", "280"],
    "answer_en": "244",
    "answer_hi": "244",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Find odd: 1458, 4374, 13122, 39366, 118098",
    "question_hi": "विषम ज्ञात करें: 1458, 4374, 13122, 39366, 118098",
    "options_en": ["1458", "4374", "13122", "118098"],
    "options_hi": ["1458", "4374", "13122", "118098"],
    "answer_en": "1458",
    "answer_hi": "1458",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is next letter: K, M, P, T, Y, ?",
    "question_hi": "अगला अक्षर क्या है: K, M, P, T, Y, ?",
    "options_en": ["E", "F", "G", "H"],
    "options_hi": ["E", "F", "G", "H"],
    "answer_en": "E",
    "answer_hi": "E",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Find missing number: 2, 3, 5, 9, 17, 33, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 2, 3, 5, 9, 17, 33, ?",
    "options_en": ["65", "67", "69", "71"],
    "options_hi": ["65", "67", "69", "71"],
    "answer_en": "65",
    "answer_hi": "65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If 'PARALLELOGRAM' = 168, 'RHOMBUS' = 98, then 'TRAPEZOID' = ?",
    "question_hi": "यदि 'PARALLELOGRAM' = 168, 'RHOMBUS' = 98, तो 'TRAPEZOID' = ?",
    "options_en": ["126", "132", "138", "144"],
    "options_hi": ["126", "132", "138", "144"],
    "answer_en": "132",
    "answer_hi": "132",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is next: 1, 11, 21, 1211, 111221, ?",
    "question_hi": "अगला क्या है: 1, 11, 21, 1211, 111221, ?",
    "options_en": ["312211", "321122", "332211", "322113"],
    "options_hi": ["312211", "321122", "332211", "322113"],
    "answer_en": "312211",
    "answer_hi": "312211",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "If 9 @ 5 = 56, 12 @ 7 = 95, then 15 @ 9 = ?",
    "question_hi": "यदि 9 @ 5 = 56, 12 @ 7 = 95, तो 15 @ 9 = ?",
    "options_en": ["144", "168", "192", "216"],
    "options_hi": ["144", "168", "192", "216"],
    "answer_en": "168",
    "answer_hi": "168",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Find odd: 28, 45, 65, 91, 120, 153",
    "question_hi": "विषम ज्ञात करें: 28, 45, 65, 91, 120, 153",
    "options_en": ["45", "65", "91", "120"],
    "options_hi": ["45", "65", "91", "120"],
    "answer_en": "65",
    "answer_hi": "65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is next letter: D, G, K, P, V, ?",
    "question_hi": "अगला अक्षर क्या है: D, G, K, P, V, ?",
    "options_en": ["C", "D", "E", "F"],
    "options_hi": ["C", "D", "E", "F"],
    "answer_en": "C",
    "answer_hi": "C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Find missing: 1, 2, 6, 22, 86, ?",
    "question_hi": "लुप्त ज्ञात करें: 1, 2, 6, 22, 86, ?",
    "options_en": ["342", "344", "346", "348"],
    "options_hi": ["342", "344", "346", "348"],
    "answer_en": "342",
    "answer_hi": "342",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If 'TOPOLOGY' = 128, 'GEOMETRY' = 112, then 'CALCULUS' = ?",
    "question_hi": "यदि 'TOPOLOGY' = 128, 'GEOMETRY' = 112, तो 'CALCULUS' = ?",
    "options_en": ["96", "104", "112", "120"],
    "options_hi": ["96", "104", "112", "120"],
    "answer_en": "104",
    "answer_hi": "104",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is next: 1, 4, 9, 16, 25, 36, 49, 64, ?",
    "question_hi": "अगला क्या है: 1, 4, 9, 16, 25, 36, 49, 64, ?",
    "options_en": ["81", "100", "121", "144"],
    "options_hi": ["81", "100", "121", "144"],
    "answer_en": "81",
    "answer_hi": "81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Find the missing term: 1, 2, 4, 7, 12, 20, 33, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 1, 2, 4, 7, 12, 20, 33, ?",
    "options_en": ["54", "55", "56", "57"],
    "options_hi": ["54", "55", "56", "57"],
    "answer_en": "54",
    "answer_hi": "54",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "If 'TURING' is coded as 'GFIRMT', then 'NEUMANN' is coded as?",
    "question_hi": "यदि 'TURING' को 'GFIRMT' से कूटबद्ध किया जाता है, तो 'NEUMANN' को किससे कूटबद्ध किया जाएगा?",
    "options_en": ["MFVNZZM", "MFVNZZN", "MFVNZZO", "MFVNZZP"],
    "options_hi": ["MFVNZZM", "MFVNZZN", "MFVNZZO", "MFVNZZP"],
    "answer_en": "MFVNZZM",
    "answer_hi": "MFVNZZM",
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