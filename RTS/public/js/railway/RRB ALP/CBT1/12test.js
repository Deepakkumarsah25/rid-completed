const questions = [
  {
    "num": 1,
    "question_en": "If 15∆7 = 176, 22∆9 = 481, 18∆5 = 329, what is the pattern? Find 25∆12?",
    "question_hi": "यदि 15∆7 = 176, 22∆9 = 481, 18∆5 = 329, तो पैटर्न क्या है? 25∆12 ज्ञात करें?",
    "options_en": ["625", "676", "729", "784"],
    "options_hi": ["625", "676", "729", "784"],
    "answer_en": "676",
    "answer_hi": "676",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Find the missing: 1, 1, 2, 3, 5, 8, 13, 21, ?",
    "question_hi": "लुप्त ज्ञात करें: 1, 1, 2, 3, 5, 8, 13, 21, ?",
    "options_en": ["29", "32", "34", "36"],
    "options_hi": ["29", "32", "34", "36"],
    "answer_en": "34",
    "answer_hi": "34",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If in a certain code, 'DICTIONARY' is written as 'EJDUJPOBSZ', how is 'ENCYCLOPEDIA' written?",
    "question_hi": "यदि एक निश्चित कूट में, 'DICTIONARY' को 'EJDUJPOBSZ' लिखा जाता है, तो 'ENCYCLOPEDIA' कैसे लिखा जाएगा?",
    "options_en": ["FODZDMQFEJB", "FODZDMQFEJC", "FODZDMQFEJZ", "FODZDMQFEJX"],
    "options_hi": ["FODZDMQFEJB", "FODZDMQFEJC", "FODZDMQFEJZ", "FODZDMQFEJX"],
    "answer_en": "FODZDMQFEJB",
    "answer_hi": "FODZDMQFEJB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Find the next term: 2, 6, 12, 20, 30, 42, ?",
    "question_hi": "अगला पद ज्ञात करें: 2, 6, 12, 20, 30, 42, ?",
    "options_en": ["54", "56", "58", "60"],
    "options_hi": ["54", "56", "58", "60"],
    "answer_en": "56",
    "answer_hi": "56",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "If 'MOUNTAIN' is coded as 'NPVOJBOJ', how is 'VALLEY' coded?",
    "question_hi": "यदि 'MOUNTAIN' को 'NPVOJBOJ' से कूटबद्ध किया जाता है, तो 'VALLEY' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["WBMMFZ", "WBMKFZ", "WBMMEZ", "WBMLEZ"],
    "options_hi": ["WBMMFZ", "WBMKFZ", "WBMMEZ", "WBMLEZ"],
    "answer_en": "WBMMFZ",
    "answer_hi": "WBMMFZ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Find the missing number: 3, 10, 29, 66, 127, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 3, 10, 29, 66, 127, ?",
    "options_en": ["218", "225", "244", "256"],
    "options_hi": ["218", "225", "244", "256"],
    "answer_en": "218",
    "answer_hi": "218",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which is the odd one out: 385, 572, 671, 264, 473",
    "question_hi": "विषम चुनें: 385, 572, 671, 264, 473",
    "options_en": ["385", "572", "671", "264"],
    "options_hi": ["385", "572", "671", "264"],
    "answer_en": "671",
    "answer_hi": "671",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If 7@3 = 100, 5@4 = 81, 9@2 = 121, then 8@5 = ?",
    "question_hi": "यदि 7@3 = 100, 5@4 = 81, 9@2 = 121, तो 8@5 = ?",
    "options_en": ["144", "169", "196", "225"],
    "options_hi": ["144", "169", "196", "225"],
    "answer_en": "169",
    "answer_hi": "169",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What comes next in the series: A, C, F, J, O, ?",
    "question_hi": "श्रृंखला में आगे क्या आता है: A, C, F, J, O, ?",
    "options_en": ["T", "U", "V", "W"],
    "options_hi": ["T", "U", "V", "W"],
    "answer_en": "U",
    "answer_hi": "U",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Find the missing: 5, 11, 19, 29, 41, ?",
    "question_hi": "लुप्त ज्ञात करें: 5, 11, 19, 29, 41, ?",
    "options_en": ["53", "55", "57", "59"],
    "options_hi": ["53", "55", "57", "59"],
    "answer_en": "55",
    "answer_hi": "55",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If 'TELEVISION' = 380, 'RADIO' = 180, then 'COMPUTER' = ?",
    "question_hi": "यदि 'TELEVISION' = 380, 'RADIO' = 180, तो 'COMPUTER' = ?",
    "options_en": ["312", "324", "336", "348"],
    "options_hi": ["312", "324", "336", "348"],
    "answer_en": "336",
    "answer_hi": "336",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Find the next: 0, 6, 24, 60, 120, 210, ?",
    "question_hi": "अगला ज्ञात करें: 0, 6, 24, 60, 120, 210, ?",
    "options_en": ["300", "336", "360", "384"],
    "options_hi": ["300", "336", "360", "384"],
    "answer_en": "336",
    "answer_hi": "336",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "If 'FRIEND' is coded as 'GSJFOE', how is 'ENEMY' coded?",
    "question_hi": "यदि 'FRIEND' को 'GSJFOE' से कूटबद्ध किया जाता है, तो 'ENEMY' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["FOFNZ", "FOFNY", "FMFNZ", "FMFNY"],
    "options_hi": ["FOFNZ", "FOFNY", "FMFNZ", "FMFNY"],
    "answer_en": "FOFNZ",
    "answer_hi": "FOFNZ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which is the odd one: 28, 45, 66, 91, 120, 153",
    "question_hi": "विषम कौन सा है: 28, 45, 66, 91, 120, 153",
    "options_en": ["45", "66", "91", "120"],
    "options_hi": ["45", "66", "91", "120"],
    "answer_en": "45",
    "answer_hi": "45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Find the missing term: 3, 12, 27, 48, 75, 108, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 3, 12, 27, 48, 75, 108, ?",
    "options_en": ["135", "144", "147", "156"],
    "options_hi": ["135", "144", "147", "156"],
    "answer_en": "147",
    "answer_hi": "147",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "If 12 # 8 = 20, 15 # 9 = 24, 18 # 12 = 30, then 21 # 14 = ?",
    "question_hi": "यदि 12 # 8 = 20, 15 # 9 = 24, 18 # 12 = 30, तो 21 # 14 = ?",
    "options_en": ["32", "34", "35", "36"],
    "options_hi": ["32", "34", "35", "36"],
    "answer_en": "35",
    "answer_hi": "35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What comes next: Z, X, V, T, R, P, ?",
    "question_hi": "आगे क्या आता है: Z, X, V, T, R, P, ?",
    "options_en": ["N", "O", "M", "L"],
    "options_hi": ["N", "O", "M", "L"],
    "answer_en": "N",
    "answer_hi": "N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Find the missing: 1, 8, 27, 64, 125, 216, ?",
    "question_hi": "लुप्त ज्ञात करें: 1, 8, 27, 64, 125, 216, ?",
    "options_en": ["289", "343", "512", "729"],
    "options_hi": ["289", "343", "512", "729"],
    "answer_en": "343",
    "answer_hi": "343",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If 'CLOCK' is coded as 'DNQDL', how is 'WATCH' coded?",
    "question_hi": "यदि 'CLOCK' को 'DNQDL' से कूटबद्ध किया जाता है, तो 'WATCH' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["XBVCI", "XBUDI", "XBUCI", "XBVFI"],
    "options_hi": ["XBVCI", "XBUDI", "XBUCI", "XBVFI"],
    "answer_en": "XBUCI",
    "answer_hi": "XBUCI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Find the odd one: 6, 13, 22, 33, 46, 61",
    "question_hi": "विषम ज्ञात करें: 6, 13, 22, 33, 46, 61",
    "options_en": ["13", "22", "33", "46"],
    "options_hi": ["13", "22", "33", "46"],
    "answer_en": "13",
    "answer_hi": "13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the next term: 2, 5, 10, 17, 26, 37, ?",
    "question_hi": "अगला पद क्या है: 2, 5, 10, 17, 26, 37, ?",
    "options_en": ["48", "50", "52", "54"],
    "options_hi": ["48", "50", "52", "54"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "If 4 * 6 = 210, 8 * 4 = 412, 6 * 8 = 214, then 9 * 7 = ?",
    "question_hi": "यदि 4 * 6 = 210, 8 * 4 = 412, 6 * 8 = 214, तो 9 * 7 = ?",
    "options_en": ["316", "416", "516", "616"],
    "options_hi": ["316", "416", "516", "616"],
    "answer_en": "316",
    "answer_hi": "316",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find the missing: 1, 4, 9, 16, 25, 36, 49, ?",
    "question_hi": "लुप्त ज्ञात करें: 1, 4, 9, 16, 25, 36, 49, ?",
    "options_en": ["60", "64", "72", "81"],
    "options_hi": ["60", "64", "72", "81"],
    "answer_en": "64",
    "answer_hi": "64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "If 'HOUSE' is coded as 'IPVTF', how is 'GARDEN' coded?",
    "question_hi": "यदि 'HOUSE' को 'IPVTF' से कूटबद्ध किया जाता है, तो 'GARDEN' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["HBSEFO", "HBSEFP", "HBSFEO", "HBSFEP"],
    "options_hi": ["HBSEFO", "HBSEFP", "HBSFEO", "HBSFEP"],
    "answer_en": "HBSEFO",
    "answer_hi": "HBSEFO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is odd: 145, 197, 257, 325, 401",
    "question_hi": "विषम कौन सा है: 145, 197, 257, 325, 401",
    "options_en": ["197", "257", "325", "401"],
    "options_hi": ["197", "257", "325", "401"],
    "answer_en": "325",
    "answer_hi": "325",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Find next: 121, 144, 169, 196, 225, ?",
    "question_hi": "अगला ज्ञात करें: 121, 144, 169, 196, 225, ?",
    "options_en": ["256", "289", "324", "361"],
    "options_hi": ["256", "289", "324", "361"],
    "answer_en": "256",
    "answer_hi": "256",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "If 5 @ 2 = 29, 7 @ 3 = 58, 9 @ 4 = 97, then 8 @ 5 = ?",
    "question_hi": "यदि 5 @ 2 = 29, 7 @ 3 = 58, 9 @ 4 = 97, तो 8 @ 5 = ?",
    "options_en": ["89", "91", "93", "95"],
    "options_hi": ["89", "91", "93", "95"],
    "answer_en": "89",
    "answer_hi": "89",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What comes next: A, E, I, M, Q, ?",
    "question_hi": "आगे क्या आता है: A, E, I, M, Q, ?",
    "options_en": ["U", "V", "W", "X"],
    "options_hi": ["U", "V", "W", "X"],
    "answer_en": "U",
    "answer_hi": "U",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Find missing: 2, 12, 30, 56, 90, 132, ?",
    "question_hi": "लुप्त ज्ञात करें: 2, 12, 30, 56, 90, 132, ?",
    "options_en": ["170", "182", "196", "210"],
    "options_hi": ["170", "182", "196", "210"],
    "answer_en": "182",
    "answer_hi": "182",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If 'PICTURE' = 79, 'FRAME' = 37, then 'CANVAS' = ?",
    "question_hi": "यदि 'PICTURE' = 79, 'FRAME' = 37, तो 'CANVAS' = ?",
    "options_en": ["42", "45", "48", "51"],
    "options_hi": ["42", "45", "48", "51"],
    "answer_en": "48",
    "answer_hi": "48",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Find next: 3, 7, 15, 31, 63, ?",
    "question_hi": "अगला ज्ञात करें: 3, 7, 15, 31, 63, ?",
    "options_en": ["95", "127", "159", "191"],
    "options_hi": ["95", "127", "159", "191"],
    "answer_en": "127",
    "answer_hi": "127",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is odd: 8, 27, 64, 125, 216, 343",
    "question_hi": "विषम कौन सा है: 8, 27, 64, 125, 216, 343",
    "options_en": ["64", "125", "216", "343"],
    "options_hi": ["64", "125", "216", "343"],
    "answer_en": "343",
    "answer_hi": "343",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If 6 % 3 = 9, 8 % 4 = 12, 10 % 5 = 15, then 12 % 6 = ?",
    "question_hi": "यदि 6 % 3 = 9, 8 % 4 = 12, 10 % 5 = 15, तो 12 % 6 = ?",
    "options_en": ["16", "18", "20", "22"],
    "options_hi": ["16", "18", "20", "22"],
    "answer_en": "18",
    "answer_hi": "18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Find missing: 1, 2, 6, 24, 120, 720, ?",
    "question_hi": "लुप्त ज्ञात करें: 1, 2, 6, 24, 120, 720, ?",
    "options_en": ["1440", "2880", "5040", "10080"],
    "options_hi": ["1440", "2880", "5040", "10080"],
    "answer_en": "5040",
    "answer_hi": "5040",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What comes next: B, D, G, K, P, ?",
    "question_hi": "आगे क्या आता है: B, D, G, K, P, ?",
    "options_en": ["U", "V", "W", "X"],
    "options_hi": ["U", "V", "W", "X"],
    "answer_en": "V",
    "answer_hi": "V",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "If 3 ^ 4 = 81, 4 ^ 3 = 64, 5 ^ 2 = 25, then 2 ^ 5 = ?",
    "question_hi": "यदि 3 ^ 4 = 81, 4 ^ 3 = 64, 5 ^ 2 = 25, तो 2 ^ 5 = ?",
    "options_en": ["16", "25", "32", "64"],
    "options_hi": ["16", "25", "32", "64"],
    "answer_en": "32",
    "answer_hi": "32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Find odd: 101, 103, 107, 109, 113, 119",
    "question_hi": "विषम ज्ञात करें: 101, 103, 107, 109, 113, 119",
    "options_en": ["103", "107", "109", "119"],
    "options_hi": ["103", "107", "109", "119"],
    "answer_en": "119",
    "answer_hi": "119",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Find next: 0.5, 1, 2, 4, 8, ?",
    "question_hi": "अगला ज्ञात करें: 0.5, 1, 2, 4, 8, ?",
    "options_en": ["12", "14", "16", "18"],
    "options_hi": ["12", "14", "16", "18"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If 'MOTHER' is coded as 'NPUIFS', how is 'FATHER' coded?",
    "question_hi": "यदि 'MOTHER' को 'NPUIFS' से कूटबद्ध किया जाता है, तो 'FATHER' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["GBUIFS", "GBUIFR", "GBUIES", "GBUIER"],
    "options_hi": ["GBUIFS", "GBUIFR", "GBUIES", "GBUIER"],
    "answer_en": "GBUIFS",
    "answer_hi": "GBUIFS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Find missing: 4, 9, 25, 49, 121, 169, ?",
    "question_hi": "लुप्त ज्ञात करें: 4, 9, 25, 49, 121, 169, ?",
    "options_en": ["225", "256", "289", "361"],
    "options_hi": ["225", "256", "289", "361"],
    "answer_en": "289",
    "answer_hi": "289",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If 12 & 8 = 4, 18 & 12 = 6, 24 & 16 = 8, then 30 & 20 = ?",
    "question_hi": "यदि 12 & 8 = 4, 18 & 12 = 6, 24 & 16 = 8, तो 30 & 20 = ?",
    "options_en": ["8", "10", "12", "14"],
    "options_hi": ["8", "10", "12", "14"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What comes next: Z, W, T, Q, N, ?",
    "question_hi": "आगे क्या आता है: Z, W, T, Q, N, ?",
    "options_en": ["K", "L", "M", "O"],
    "options_hi": ["K", "L", "M", "O"],
    "answer_en": "K",
    "answer_hi": "K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Find missing: 2, 3, 5, 9, 17, 33, ?",
    "question_hi": "लुप्त ज्ञात करें: 2, 3, 5, 9, 17, 33, ?",
    "options_en": ["55", "65", "75", "85"],
    "options_hi": ["55", "65", "75", "85"],
    "answer_en": "65",
    "answer_hi": "65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "If 'BIRD' = 48, 'FISH' = 64, then 'LION' = ?",
    "question_hi": "यदि 'BIRD' = 48, 'FISH' = 64, तो 'LION' = ?",
    "options_en": ["72", "76", "80", "84"],
    "options_hi": ["72", "76", "80", "84"],
    "answer_en": "80",
    "answer_hi": "80",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is odd: 12, 25, 39, 51, 67",
    "question_hi": "विषम कौन सा है: 12, 25, 39, 51, 67",
    "options_en": ["25", "39", "51", "67"],
    "options_hi": ["25", "39", "51", "67"],
    "answer_en": "39",
    "answer_hi": "39",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Find next: 1, 4, 9, 16, 25, 36, 49, 64, 81, ?",
    "question_hi": "अगला ज्ञात करें: 1, 4, 9, 16, 25, 36, 49, 64, 81, ?",
    "options_en": ["100", "121", "144", "169"],
    "options_hi": ["100", "121", "144", "169"],
    "answer_en": "100",
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If 5 # 3 = 16, 7 # 4 = 33, 9 # 5 = 56, then 11 # 6 = ?",
    "question_hi": "यदि 5 # 3 = 16, 7 # 4 = 33, 9 # 5 = 56, तो 11 # 6 = ?",
    "options_en": ["85", "96", "108", "121"],
    "options_hi": ["85", "96", "108", "121"],
    "answer_en": "85",
    "answer_hi": "85",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What comes next: M, N, O, L, M, N, ?",
    "question_hi": "आगे क्या आता है: M, N, O, L, M, N, ?",
    "options_en": ["K", "L", "M", "N"],
    "options_hi": ["K", "L", "M", "N"],
    "answer_en": "K",
    "answer_hi": "K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Find missing: 3, 5, 8, 13, 21, 34, ?",
    "question_hi": "लुप्त ज्ञात करें: 3, 5, 8, 13, 21, 34, ?",
    "options_en": ["47", "55", "68", "89"],
    "options_hi": ["47", "55", "68", "89"],
    "answer_en": "55",
    "answer_hi": "55",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "If 'SUN' = 54, 'MOON' = 57, then 'STAR' = ?",
    "question_hi": "यदि 'SUN' = 54, 'MOON' = 57, तो 'STAR' = ?",
    "options_en": ["58", "59", "60", "61"],
    "options_hi": ["58", "59", "60", "61"],
    "answer_en": "58",
    "answer_hi": "58",
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