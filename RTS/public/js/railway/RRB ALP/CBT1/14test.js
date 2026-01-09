const questions = [
  {
    "num": 1,
    "question_en": "If 23∇15 = 128, 42∇28 = 196, 35∇21 = 112, what is 54∇36?",
    "question_hi": "यदि 23∇15 = 128, 42∇28 = 196, 35∇21 = 112, तो 54∇36 क्या है?",
    "options_en": ["216", "252", "288", "324"],
    "options_hi": ["216", "252", "288", "324"],
    "answer_en": "288",
    "answer_hi": "288",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What comes next: 1, 3, 7, 15, 31, 63, 127, ?",
    "question_hi": "आगे क्या आता है: 1, 3, 7, 15, 31, 63, 127, ?",
    "options_en": ["255", "256", "257", "259"],
    "options_hi": ["255", "256", "257", "259"],
    "answer_en": "255",
    "answer_hi": "255",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If 'CRYPTOANALYSIS' is coded as 'ETARVQCPCUKU', how is 'QUANTUMCOMPUTING' coded?",
    "question_hi": "यदि 'CRYPTOANALYSIS' को 'ETARVQCPCUKU' से कूटबद्ध किया जाता है, तो 'QUANTUMCOMPUTING' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["SWCPVWOQORWVLKPI", "SWCPVWOQORWVMKPI", "SWCPVWPQORWVLKPI", "SWCPVWPQORWVMKPI"],
    "options_hi": ["SWCPVWOQORWVLKPI", "SWCPVWOQORWVMKPI", "SWCPVWPQORWVLKPI", "SWCPVWPQORWVMKPI"],
    "answer_en": "SWCPVWOQORWVLKPI",
    "answer_hi": "SWCPVWOQORWVLKPI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Find the missing number: 3, 8, 18, 38, 78, 158, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 3, 8, 18, 38, 78, 158, ?",
    "options_en": ["298", "318", "338", "358"],
    "options_hi": ["298", "318", "338", "358"],
    "answer_en": "318",
    "answer_hi": "318",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "If 'NEUROSCIENCE' = 450, 'PSYCHOLOGY' = 396, then 'BIOCHEMISTRY' = ?",
    "question_hi": "यदि 'NEUROSCIENCE' = 450, 'PSYCHOLOGY' = 396, तो 'BIOCHEMISTRY' = ?",
    "options_en": ["432", "456", "468", "492"],
    "options_hi": ["432", "456", "468", "492"],
    "answer_en": "468",
    "answer_hi": "468",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What comes next: ZA7, YB14, XC21, WD28, VE35, ?",
    "question_hi": "आगे क्या आता है: ZA7, YB14, XC21, WD28, VE35, ?",
    "options_en": ["UF42", "TD42", "TC42", "SB42"],
    "options_hi": ["UF42", "TD42", "TC42", "SB42"],
    "answer_en": "UF42",
    "answer_hi": "UF42",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Find the odd one out: 17, 37, 59, 83, 109, 137",
    "question_hi": "विषम चुनें: 17, 37, 59, 83, 109, 137",
    "options_en": ["37", "59", "83", "137"],
    "options_hi": ["37", "59", "83", "137"],
    "answer_en": "137",
    "answer_hi": "137",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If 13*17 = 2210, 19*23 = 4370, 29*31 = 8990, then 37*41 = ?",
    "question_hi": "यदि 13*17 = 2210, 19*23 = 4370, 29*31 = 8990, तो 37*41 = ?",
    "options_en": ["15170", "15270", "15370", "15470"],
    "options_hi": ["15170", "15270", "15370", "15470"],
    "answer_en": "15170",
    "answer_hi": "15170",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the next letter in the series: J, Q, Z, I, R, ?",
    "question_hi": "श्रृंखला में अगला अक्षर क्या है: J, Q, Z, I, R, ?",
    "options_en": ["A", "B", "C", "D"],
    "options_hi": ["A", "B", "C", "D"],
    "answer_en": "A",
    "answer_hi": "A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Find missing number: 2, 6, 30, 210, 2310, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 2, 6, 30, 210, 2310, ?",
    "options_en": ["25410", "30030", "34650", "39270"],
    "options_hi": ["25410", "30030", "34650", "39270"],
    "answer_en": "30030",
    "answer_hi": "30030",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If 'METAPHYSICS' = 'NFUBQIZTJDT', 'EPISTEMOLOGY' = 'FQJTUFNPMPHZ', how is 'ONTOLOGICAL' coded?",
    "question_hi": "यदि 'METAPHYSICS' = 'NFUBQIZTJDT', 'EPISTEMOLOGY' = 'FQJTUFNPMPHZ', तो 'ONTOLOGICAL' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["POUPMHJDIBM", "POUPMHJDIBN", "POUPMHJCIBM", "POUPMHJCJBM"],
    "options_hi": ["POUPMHJDIBM", "POUPMHJDIBN", "POUPMHJCIBM", "POUPMHJCJBM"],
    "answer_en": "POUPMHJDIBM",
    "answer_hi": "POUPMHJDIBM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What comes next: 1, 2, 6, 22, 86, 342, ?",
    "question_hi": "आगे क्या आता है: 1, 2, 6, 22, 86, 342, ?",
    "options_en": ["1366", "1368", "1370", "1372"],
    "options_hi": ["1366", "1368", "1370", "1372"],
    "answer_en": "1366",
    "answer_hi": "1366",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "If 4#5 = 41, 6#7 = 85, 8#9 = 145, 10#11 = 221, then 12#13 = ?",
    "question_hi": "यदि 4#5 = 41, 6#7 = 85, 8#9 = 145, 10#11 = 221, तो 12#13 = ?",
    "options_en": ["313", "317", "325", "337"],
    "options_hi": ["313", "317", "325", "337"],
    "answer_en": "313",
    "answer_hi": "313",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Find the odd one: 1001, 11011, 10101, 11111, 100001",
    "question_hi": "विषम ज्ञात करें: 1001, 11011, 10101, 11111, 100001",
    "options_en": ["11011", "10101", "11111", "100001"],
    "options_hi": ["11011", "10101", "11111", "100001"],
    "answer_en": "10101",
    "answer_hi": "10101",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is next in series: B, F, K, Q, X, ?",
    "question_hi": "श्रृंखला में अगला क्या है: B, F, K, Q, X, ?",
    "options_en": ["E", "F", "G", "H"],
    "options_hi": ["E", "F", "G", "H"],
    "answer_en": "E",
    "answer_hi": "E",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Find missing: 1, 5, 13, 25, 41, 61, ?",
    "question_hi": "लुप्त ज्ञात करें: 1, 5, 13, 25, 41, 61, ?",
    "options_en": ["85", "87", "89", "91"],
    "options_hi": ["85", "87", "89", "91"],
    "answer_en": "85",
    "answer_hi": "85",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If 'ASTROPHYSICS' = 560, 'COSMOLOGY' = 396, 'QUANTUMFIELD' = 648, then 'STRINGTHEORY' = ?",
    "question_hi": "यदि 'ASTROPHYSICS' = 560, 'COSMOLOGY' = 396, 'QUANTUMFIELD' = 648, तो 'STRINGTHEORY' = ?",
    "options_en": ["720", "756", "792", "828"],
    "options_hi": ["720", "756", "792", "828"],
    "answer_en": "792",
    "answer_hi": "792",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What comes next: 0.25, 1, 4, 16, 64, 256, ?",
    "question_hi": "आगे क्या आता है: 0.25, 1, 4, 16, 64, 256, ?",
    "options_en": ["512", "768", "1024", "2048"],
    "options_hi": ["512", "768", "1024", "2048"],
    "answer_en": "1024",
    "answer_hi": "1024",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If 'CRYPTOCURRENCY' = 'ETARVQEQWTGPEA', 'BLOCKCHAIN' = 'DNQEMDCHKP', how is 'DEFI' coded?",
    "question_hi": "यदि 'CRYPTOCURRENCY' = 'ETARVQEQWTGPEA', 'BLOCKCHAIN' = 'DNQEMDCHKP', तो 'DEFI' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["FGHK", "FGHJ", "FGHI", "FGHG"],
    "options_hi": ["FGHK", "FGHJ", "FGHI", "FGHG"],
    "answer_en": "FGHK",
    "answer_hi": "FGHK",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Find the missing term: 2, 5, 11, 23, 47, 95, 191, 383, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 2, 5, 11, 23, 47, 95, 191, 383, ?",
    "options_en": ["767", "769", "771", "773"],
    "options_hi": ["767", "769", "771", "773"],
    "answer_en": "767",
    "answer_hi": "767",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If 18$12 = 108, 24$16 = 192, 30$20 = 300, then 36$24 = ?",
    "question_hi": "यदि 18$12 = 108, 24$16 = 192, 30$20 = 300, तो 36$24 = ?",
    "options_en": ["432", "456", "480", "504"],
    "options_hi": ["432", "456", "480", "504"],
    "answer_en": "432",
    "answer_hi": "432",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the odd one: 127, 131, 137, 139, 143, 149, 151",
    "question_hi": "विषम कौन सा है: 127, 131, 137, 139, 143, 149, 151",
    "options_en": ["143", "139", "137", "131"],
    "options_hi": ["143", "139", "137", "131"],
    "answer_en": "143",
    "answer_hi": "143",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find next letter: M, N, P, S, W, ?",
    "question_hi": "अगला अक्षर ज्ञात करें: M, N, P, S, W, ?",
    "options_en": ["B", "C", "D", "E"],
    "options_hi": ["B", "C", "D", "E"],
    "answer_en": "B",
    "answer_hi": "B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Missing number: 1, 4, 10, 22, 46, 94, ?",
    "question_hi": "लुप्त संख्या: 1, 4, 10, 22, 46, 94, ?",
    "options_en": ["180", "182", "184", "190"],
    "options_hi": ["180", "182", "184", "190"],
    "answer_en": "190",
    "answer_hi": "190",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If 'ARTIFICIALINTELLIGENCE' = 1616, 'MACHINELEARNING' = 1040, then 'DEEPLEARNING' = ?",
    "question_hi": "यदि 'ARTIFICIALINTELLIGENCE' = 1616, 'MACHINELEARNING' = 1040, तो 'DEEPLEARNING' = ?",
    "options_en": ["768", "792", "816", "840"],
    "options_hi": ["768", "792", "816", "840"],
    "answer_en": "792",
    "answer_hi": "792",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What comes next: 256, 64, 16, 4, 1, ?",
    "question_hi": "आगे क्या आता है: 256, 64, 16, 4, 1, ?",
    "options_en": ["0.5", "0.25", "0.125", "0.0625"],
    "options_hi": ["0.5", "0.25", "0.125", "0.0625"],
    "answer_en": "0.25",
    "answer_hi": "0.25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "If 5@3 = 34, 7@5 = 74, 9@7 = 130, then 11@9 = ?",
    "question_hi": "यदि 5@3 = 34, 7@5 = 74, 9@7 = 130, तो 11@9 = ?",
    "options_en": ["202", "212", "222", "232"],
    "options_hi": ["202", "212", "222", "232"],
    "answer_en": "202",
    "answer_hi": "202",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Find odd: 1001, 1331, 1728, 2197, 2744, 3375",
    "question_hi": "विषम ज्ञात करें: 1001, 1331, 1728, 2197, 2744, 3375",
    "options_en": ["1001", "1331", "1728", "2197"],
    "options_hi": ["1001", "1331", "1728", "2197"],
    "answer_en": "1001",
    "answer_hi": "1001",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Next in series: A, H, O, V, C, ?",
    "question_hi": "श्रृंखला में अगला: A, H, O, V, C, ?",
    "options_en": ["J", "K", "L", "M"],
    "options_hi": ["J", "K", "L", "M"],
    "answer_en": "J",
    "answer_hi": "J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Missing number: 3, 9, 21, 45, 93, 189, ?",
    "question_hi": "लुप्त संख्या: 3, 9, 21, 45, 93, 189, ?",
    "options_en": ["375", "381", "387", "393"],
    "options_hi": ["375", "381", "387", "393"],
    "answer_en": "381",
    "answer_hi": "381",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "If 'PALINDROME' = 648, 'AMBIGUOUS' = 504, then 'SYMMETRICAL' = ?",
    "question_hi": "यदि 'PALINDROME' = 648, 'AMBIGUOUS' = 504, तो 'SYMMETRICAL' = ?",
    "options_en": ["792", "828", "864", "900"],
    "options_hi": ["792", "828", "864", "900"],
    "answer_en": "864",
    "answer_hi": "864",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What comes next: 2, 12, 30, 56, 90, 132, 182, 240, ?",
    "question_hi": "आगे क्या आता है: 2, 12, 30, 56, 90, 132, 182, 240, ?",
    "options_en": ["306", "312", "318", "324"],
    "options_hi": ["306", "312", "318", "324"],
    "answer_en": "306",
    "answer_hi": "306",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If 7%5 = 24, 9%7 = 32, 11%9 = 40, then 13%11 = ?",
    "question_hi": "यदि 7%5 = 24, 9%7 = 32, 11%9 = 40, तो 13%11 = ?",
    "options_en": ["48", "50", "52", "54"],
    "options_hi": ["48", "50", "52", "54"],
    "answer_en": "48",
    "answer_hi": "48",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Find odd: 1024, 2025, 3026, 4036, 5048",
    "question_hi": "विषम ज्ञात करें: 1024, 2025, 3026, 4036, 5048",
    "options_en": ["2025", "3026", "4036", "5048"],
    "options_hi": ["2025", "3026", "4036", "5048"],
    "answer_en": "4036",
    "answer_hi": "4036",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Next letter: D, I, N, S, X, ?",
    "question_hi": "अगला अक्षर: D, I, N, S, X, ?",
    "options_en": ["C", "D", "E", "F"],
    "options_hi": ["C", "D", "E", "F"],
    "answer_en": "C",
    "answer_hi": "C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Missing: 1, 2, 5, 10, 17, 26, 37, 50, ?",
    "question_hi": "लुप्त: 1, 2, 5, 10, 17, 26, 37, 50, ?",
    "options_en": ["63", "65", "67", "69"],
    "options_hi": ["63", "65", "67", "69"],
    "answer_en": "65",
    "answer_hi": "65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If 'THERMODYNAMICS' = 1104, 'ELECTROMAGNETIC' = 1080, then 'SUPERCONDUCTOR' = ?",
    "question_hi": "यदि 'THERMODYNAMICS' = 1104, 'ELECTROMAGNETIC' = 1080, तो 'SUPERCONDUCTOR' = ?",
    "options_en": ["1152", "1200", "1248", "1296"],
    "options_hi": ["1152", "1200", "1248", "1296"],
    "answer_en": "1200",
    "answer_hi": "1200",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What comes next: 0, 1, 8, 27, 64, 125, 216, 343, ?",
    "question_hi": "आगे क्या आता है: 0, 1, 8, 27, 64, 125, 216, 343, ?",
    "options_en": ["512", "625", "729", "1000"],
    "options_hi": ["512", "625", "729", "1000"],
    "answer_en": "512",
    "answer_hi": "512",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If 'CRYPTOGRAPHY' = 'ETARVQITCJA', 'STEGANOGRAPHY' = 'UVGICPQITCJA', how is 'CRYPTANALYSIS' coded?",
    "question_hi": "यदि 'CRYPTOGRAPHY' = 'ETARVQITCJA', 'STEGANOGRAPHY' = 'UVGICPQITCJA', तो 'CRYPTANALYSIS' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["ETARVCPCUKU", "ETARVCPCUKV", "ETARVCPDULU", "ETARVCPDULV"],
    "options_hi": ["ETARVCPCUKU", "ETARVCPCUKV", "ETARVCPDULU", "ETARVCPDULV"],
    "answer_en": "ETARVCPCUKU",
    "answer_hi": "ETARVCPCUKU",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Find missing term: 1, 3, 8, 18, 35, 61, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 1, 3, 8, 18, 35, 61, ?",
    "options_en": ["94", "96", "98", "100"],
    "options_hi": ["94", "96", "98", "100"],
    "answer_en": "98",
    "answer_hi": "98",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If 15&9 = 72, 21&13 = 112, 27&17 = 160, then 33&21 = ?",
    "question_hi": "यदि 15&9 = 72, 21&13 = 112, 27&17 = 160, तो 33&21 = ?",
    "options_en": ["216", "224", "232", "240"],
    "options_hi": ["216", "224", "232", "240"],
    "answer_en": "216",
    "answer_hi": "216",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Odd one: 6, 28, 496, 8128, 33550336",
    "question_hi": "विषम: 6, 28, 496, 8128, 33550336",
    "options_en": ["6", "28", "496", "8128"],
    "options_hi": ["6", "28", "496", "8128"],
    "answer_en": "33550336",
    "answer_hi": "33550336",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Next letter: Q, S, V, Z, ?",
    "question_hi": "अगला अक्षर: Q, S, V, Z, ?",
    "options_en": ["E", "F", "G", "H"],
    "options_hi": ["E", "F", "G", "H"],
    "answer_en": "E",
    "answer_hi": "E",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Missing: 2, 5, 12, 27, 58, 121, ?",
    "question_hi": "लुप्त: 2, 5, 12, 27, 58, 121, ?",
    "options_en": ["248", "250", "252", "254"],
    "options_hi": ["248", "250", "252", "254"],
    "answer_en": "248",
    "answer_hi": "248",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If 'NANOTECHNOLOGY' = 1260, 'BIOTECHNOLOGY' = 1080, then 'MICROTECHNOLOGY' = ?",
    "question_hi": "यदि 'NANOTECHNOLOGY' = 1260, 'BIOTECHNOLOGY' = 1080, तो 'MICROTECHNOLOGY' = ?",
    "options_en": ["1440", "1500", "1560", "1620"],
    "options_hi": ["1440", "1500", "1560", "1620"],
    "answer_en": "1440",
    "answer_hi": "1440",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What comes next: 1, 1/3, 1/9, 1/27, 1/81, ?",
    "question_hi": "आगे क्या आता है: 1, 1/3, 1/9, 1/27, 1/81, ?",
    "options_en": ["1/162", "1/243", "1/324", "1/729"],
    "options_hi": ["1/162", "1/243", "1/324", "1/729"],
    "answer_en": "1/243",
    "answer_hi": "1/243",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If 23*17 = 391, 31*23 = 713, 41*29 = 1189, then 47*37 = ?",
    "question_hi": "यदि 23*17 = 391, 31*23 = 713, 41*29 = 1189, तो 47*37 = ?",
    "options_en": ["1739", "1749", "1759", "1769"],
    "options_hi": ["1739", "1749", "1759", "1769"],
    "answer_en": "1739",
    "answer_hi": "1739",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Find odd: 17, 29, 41, 53, 67, 79",
    "question_hi": "विषम ज्ञात करें: 17, 29, 41, 53, 67, 79",
    "options_en": ["29", "41", "67", "79"],
    "options_hi": ["29", "41", "67", "79"],
    "answer_en": "67",
    "answer_hi": "67",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Next letter: F, L, R, X, ?",
    "question_hi": "अगला अक्षर: F, L, R, X, ?",
    "options_en": ["D", "E", "F", "G"],
    "options_hi": ["D", "E", "F", "G"],
    "answer_en": "D",
    "answer_hi": "D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Missing term: 1, 4, 27, 256, 3125, ?",
    "question_hi": "लुप्त पद: 1, 4, 27, 256, 3125, ?",
    "options_en": ["46656", "59049", "65536", "78125"],
    "options_hi": ["46656", "59049", "65536", "78125"],
    "answer_en": "46656",
    "answer_hi": "46656",
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