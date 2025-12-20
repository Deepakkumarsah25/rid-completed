const questions = [
  {
    "num": 1,
    "question_en": "If the sequence 2, 6, 12, 20, 30, … follows a pattern, what is the next term?",
    "question_hi": "यदि अनुक्रम 2, 6, 12, 20, 30, … एक पैटर्न का अनुसरण करता है, तो अगला पद क्या है?",
    "options_en": ["40", "42", "44", "46"],
    "options_hi": ["40", "42", "44", "46"],
    "answer_en": "42",
    "answer_hi": "42",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "If in a certain code, 'COMPUTER' is written as 'PMOCRETU', how is 'KEYBOARD' written?",
    "question_hi": "यदि एक निश्चित कूट में, 'COMPUTER' को 'PMOCRETU' लिखा जाता है, तो 'KEYBOARD' कैसे लिखा जाएगा?",
    "options_en": ["DRAOBYEK", "YEK DRAOB", "YEKDRAOB", "DRAOBYKE"],
    "options_hi": ["DRAOBYEK", "YEK DRAOB", "YEKDRAOB", "DRAOBYKE"],
    "answer_en": "YEKDRAOB",
    "answer_hi": "YEKDRAOB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Find the missing number: 3, 8, 15, 24, 35, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 3, 8, 15, 24, 35, ?",
    "options_en": ["46", "48", "50", "52"],
    "options_hi": ["46", "48", "50", "52"],
    "answer_en": "48",
    "answer_hi": "48",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If 'DAY' is coded as '84' and 'NIGHT' is coded as '96', how is 'TWILIGHT' coded?",
    "question_hi": "यदि 'DAY' को '84' से कूटबद्ध किया जाता है और 'NIGHT' को '96' से, तो 'TWILIGHT' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["132", "144", "156", "168"],
    "options_hi": ["132", "144", "156", "168"],
    "answer_en": "144",
    "answer_hi": "144",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What comes next: Z, X, V, T, R, ?",
    "question_hi": "आगे क्या आता है: Z, X, V, T, R, ?",
    "options_en": ["P", "O", "Q", "N"],
    "options_hi": ["P", "O", "Q", "N"],
    "answer_en": "P",
    "answer_hi": "P",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If 5 * 3 = 28, 7 * 2 = 45, then 6 * 4 = ?",
    "question_hi": "यदि 5 * 3 = 28, 7 * 2 = 45, तो 6 * 4 = ?",
    "options_en": ["32", "38", "40", "42"],
    "options_hi": ["32", "38", "40", "42"],
    "answer_en": "38",
    "answer_hi": "38",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Find the odd one out: 10, 25, 45, 54, 75, 85",
    "question_hi": "विषम चुनें: 10, 25, 45, 54, 75, 85",
    "options_en": ["54", "45", "75", "85"],
    "options_hi": ["54", "45", "75", "85"],
    "answer_en": "54",
    "answer_hi": "54",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If A = 1, B = 4, C = 9, D = 16, then what is E?",
    "question_hi": "यदि A = 1, B = 4, C = 9, D = 16, तो E क्या है?",
    "options_en": ["20", "25", "30", "36"],
    "options_hi": ["20", "25", "30", "36"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the missing number: 2, 5, 11, 23, 47, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 2, 5, 11, 23, 47, ?",
    "options_en": ["95", "96", "94", "93"],
    "options_hi": ["95", "96", "94", "93"],
    "answer_en": "95",
    "answer_hi": "95",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "If 'PENCIL' is coded as 'RGPENK', how is 'ERASER' coded?",
    "question_hi": "यदि 'PENCIL' को 'RGPENK' से कूटबद्ध किया जाता है, तो 'ERASER' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["GTCTGU", "GTDTHV", "GTCUGT", "GTDVHU"],
    "options_hi": ["GTCTGU", "GTDTHV", "GTCUGT", "GTDVHU"],
    "answer_en": "GTCTGU",
    "answer_hi": "GTCTGU",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Find the next: 1, 4, 9, 16, 25, ?",
    "question_hi": "अगला ज्ञात करें: 1, 4, 9, 16, 25, ?",
    "options_en": ["36", "49", "64", "81"],
    "options_hi": ["36", "49", "64", "81"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "If 'RED' is to 'FER' as 'BLUE' is to ?",
    "question_hi": "यदि 'RED' का 'FER' से है जैसे 'BLUE' का ? से है",
    "options_en": ["FMCV", "FMCW", "FMDV", "FMDW"],
    "options_hi": ["FMCV", "FMCW", "FMDV", "FMDW"],
    "answer_en": "FMCV",
    "answer_hi": "FMCV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What comes next: 81, 27, 9, 3, ?",
    "question_hi": "आगे क्या आता है: 81, 27, 9, 3, ?",
    "options_en": ["1", "0", "2", "1.5"],
    "options_hi": ["1", "0", "2", "1.5"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If 'MOUSE' is coded as 'PRXUH', how is 'KEYBOARD' coded?",
    "question_hi": "यदि 'MOUSE' को 'PRXUH' से कूटबद्ध किया जाता है, तो 'KEYBOARD' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["NHBEDUUG", "NHBFRXVH", "NHCESVVG", "NHBERUUF"],
    "options_hi": ["NHBEDUUG", "NHBFRXVH", "NHCESVVG", "NHBERUUF"],
    "answer_en": "NHBFRXVH",
    "answer_hi": "NHBFRXVH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Find the missing term: 1, 3, 7, 13, 21, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 1, 3, 7, 13, 21, ?",
    "options_en": ["31", "33", "35", "37"],
    "options_hi": ["31", "33", "35", "37"],
    "answer_en": "31",
    "answer_hi": "31",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "If 12 * 4 = 64, 15 * 3 = 72, then 18 * 5 = ?",
    "question_hi": "यदि 12 * 4 = 64, 15 * 3 = 72, तो 18 * 5 = ?",
    "options_en": ["90", "100", "108", "110"],
    "options_hi": ["90", "100", "108", "110"],
    "answer_en": "108",
    "answer_hi": "108",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the next letter: A, D, I, P, ?",
    "question_hi": "अगला अक्षर क्या है: A, D, I, P, ?",
    "options_en": ["W", "X", "Y", "Z"],
    "options_hi": ["W", "X", "Y", "Z"],
    "answer_en": "Y",
    "answer_hi": "Y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Find the odd one: 121, 144, 169, 196, 225, 250",
    "question_hi": "विषम ज्ञात करें: 121, 144, 169, 196, 225, 250",
    "options_en": ["250", "225", "196", "144"],
    "options_hi": ["250", "225", "196", "144"],
    "answer_en": "250",
    "answer_hi": "250",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If 3, 12, 27, 48, 75, ? what is the next?",
    "question_hi": "यदि 3, 12, 27, 48, 75, ? अगला क्या है?",
    "options_en": ["108", "112", "116", "120"],
    "options_hi": ["108", "112", "116", "120"],
    "answer_en": "108",
    "answer_hi": "108",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "If 'JANUARY' is coded as 'KBOBVSZ', how is 'FEBRUARY' coded?",
    "question_hi": "यदि 'JANUARY' को 'KBOBVSZ' से कूटबद्ध किया जाता है, तो 'FEBRUARY' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["GFCSVBSZ", "GFCTVBSZ", "GFCSVCTA", "GFCTWCTA"],
    "options_hi": ["GFCSVBSZ", "GFCTVBSZ", "GFCSVCTA", "GFCTWCTA"],
    "answer_en": "GFCSVBSZ",
    "answer_hi": "GFCSVBSZ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the missing number: 0, 6, 24, 60, 120, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 0, 6, 24, 60, 120, ?",
    "options_en": ["180", "210", "240", "270"],
    "options_hi": ["180", "210", "240", "270"],
    "answer_en": "210",
    "answer_hi": "210",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "If 'CAT' is to 'FDW' then 'DOG' is to ?",
    "question_hi": "यदि 'CAT' का 'FDW' से है तो 'DOG' का ? से है",
    "options_en": ["GRJ", "GRI", "GRK", "GRH"],
    "options_hi": ["GRJ", "GRI", "GRK", "GRH"],
    "answer_en": "GRJ",
    "answer_hi": "GRJ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find the next term: 1, 1, 2, 3, 5, 8, ?",
    "question_hi": "अगला पद ज्ञात करें: 1, 1, 2, 3, 5, 8, ?",
    "options_en": ["11", "12", "13", "14"],
    "options_hi": ["11", "12", "13", "14"],
    "answer_en": "13",
    "answer_hi": "13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "If 8 * 9 = 272, 6 * 7 = 150, then 5 * 8 = ?",
    "question_hi": "यदि 8 * 9 = 272, 6 * 7 = 150, तो 5 * 8 = ?",
    "options_en": ["120", "128", "136", "144"],
    "options_hi": ["120", "128", "136", "144"],
    "answer_en": "136",
    "answer_hi": "136",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is the odd one: 8, 27, 64, 100, 125, 216",
    "question_hi": "कौन सा विषम है: 8, 27, 64, 100, 125, 216",
    "options_en": ["100", "125", "64", "216"],
    "options_hi": ["100", "125", "64", "216"],
    "answer_en": "100",
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the next: A, C, F, J, ?",
    "question_hi": "अगला क्या है: A, C, F, J, ?",
    "options_en": ["N", "O", "P", "Q"],
    "options_hi": ["N", "O", "P", "Q"],
    "answer_en": "O",
    "answer_hi": "O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Find missing number: 5, 10, 17, 26, 37, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 5, 10, 17, 26, 37, ?",
    "options_en": ["48", "50", "52", "54"],
    "options_hi": ["48", "50", "52", "54"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "If 'LIGHT' = 42, 'DARK' = 28, then 'BRIGHT' = ?",
    "question_hi": "यदि 'LIGHT' = 42, 'DARK' = 28, तो 'BRIGHT' = ?",
    "options_en": ["56", "58", "60", "62"],
    "options_hi": ["56", "58", "60", "62"],
    "answer_en": "58",
    "answer_hi": "58",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What comes next: 2, 3, 5, 7, 11, ?",
    "question_hi": "आगे क्या आता है: 2, 3, 5, 7, 11, ?",
    "options_en": ["13", "15", "17", "19"],
    "options_hi": ["13", "15", "17", "19"],
    "answer_en": "13",
    "answer_hi": "13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If 'WORD' is coded as 'XLUF', how is 'SENTENCE' coded?",
    "question_hi": "यदि 'WORD' को 'XLUF' से कूटबद्ध किया जाता है, तो 'SENTENCE' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["UGPVGPVG", "UHQVHQVH", "VHQWHQWH", "UHQVHQVH"],
    "options_hi": ["UGPVGPVG", "UHQVHQVH", "VHQWHQWH", "UHQVHQVH"],
    "answer_en": "UGPVGPVG",
    "answer_hi": "UGPVGPVG",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Find the next term: 1, 8, 27, 64, ?",
    "question_hi": "अगला पद ज्ञात करें: 1, 8, 27, 64, ?",
    "options_en": ["81", "100", "125", "144"],
    "options_hi": ["81", "100", "125", "144"],
    "answer_en": "125",
    "answer_hi": "125",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "If 2 + 3 = 10, 6 + 5 = 66, then 7 + 9 = ?",
    "question_hi": "यदि 2 + 3 = 10, 6 + 5 = 66, तो 7 + 9 = ?",
    "options_en": ["112", "126", "144", "156"],
    "options_hi": ["112", "126", "144", "156"],
    "answer_en": "144",
    "answer_hi": "144",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the odd one: 145, 197, 257, 325, 401",
    "question_hi": "विषम कौन सा है: 145, 197, 257, 325, 401",
    "options_en": ["197", "257", "325", "401"],
    "options_hi": ["197", "257", "325", "401"],
    "answer_en": "325",
    "answer_hi": "325",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Find missing: 12, 36, 108, 324, ?",
    "question_hi": "लुप्त ज्ञात करें: 12, 36, 108, 324, ?",
    "options_en": ["648", "972", "1296", "1458"],
    "options_hi": ["648", "972", "1296", "1458"],
    "answer_en": "972",
    "answer_hi": "972",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "If 'APPLE' is coded as 'BQQMF', how is 'ORANGE' coded?",
    "question_hi": "यदि 'APPLE' को 'BQQMF' से कूटबद्ध किया जाता है, तो 'ORANGE' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["PSBOHF", "PSBPHF", "PSBOIF", "PSBOHG"],
    "options_hi": ["PSBOHF", "PSBPHF", "PSBOIF", "PSBOHG"],
    "answer_en": "PSBOHF",
    "answer_hi": "PSBOHF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is next: 0, 1, 1, 2, 3, 5, 8, 13, ?",
    "question_hi": "अगला क्या है: 0, 1, 1, 2, 3, 5, 8, 13, ?",
    "options_en": ["18", "20", "21", "22"],
    "options_hi": ["18", "20", "21", "22"],
    "answer_en": "21",
    "answer_hi": "21",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If 3 * 4 = 19, 5 * 6 = 41, then 7 * 8 = ?",
    "question_hi": "यदि 3 * 4 = 19, 5 * 6 = 41, तो 7 * 8 = ?",
    "options_en": ["71", "73", "75", "77"],
    "options_hi": ["71", "73", "75", "77"],
    "answer_en": "71",
    "answer_hi": "71",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Find odd: 28, 45, 66, 91, 120, 153",
    "question_hi": "विषम ज्ञात करें: 28, 45, 66, 91, 120, 153",
    "options_en": ["45", "66", "91", "153"],
    "options_hi": ["45", "66", "91", "153"],
    "answer_en": "45",
    "answer_hi": "45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is next letter: B, E, I, N, ?",
    "question_hi": "अगला अक्षर क्या है: B, E, I, N, ?",
    "options_en": ["S", "T", "U", "V"],
    "options_hi": ["S", "T", "U", "V"],
    "answer_en": "T",
    "answer_hi": "T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Find missing number: 4, 9, 25, 49, 121, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 4, 9, 25, 49, 121, ?",
    "options_en": ["144", "169", "196", "225"],
    "options_hi": ["144", "169", "196", "225"],
    "answer_en": "169",
    "answer_hi": "169",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If 'TIGER' = 59, 'LION' = 50, then 'BEAR' = ?",
    "question_hi": "यदि 'TIGER' = 59, 'LION' = 50, तो 'BEAR' = ?",
    "options_en": ["24", "26", "28", "30"],
    "options_hi": ["24", "26", "28", "30"],
    "answer_en": "26",
    "answer_hi": "26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is next: 1, 9, 25, 49, 81, ?",
    "question_hi": "अगला क्या है: 1, 9, 25, 49, 81, ?",
    "options_en": ["100", "121", "144", "169"],
    "options_hi": ["100", "121", "144", "169"],
    "answer_en": "121",
    "answer_hi": "121",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "If 5 @ 3 = 16, 7 @ 4 = 33, then 6 @ 5 = ?",
    "question_hi": "यदि 5 @ 3 = 16, 7 @ 4 = 33, तो 6 @ 5 = ?",
    "options_en": ["29", "31", "33", "35"],
    "options_hi": ["29", "31", "33", "35"],
    "answer_en": "31",
    "answer_hi": "31",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Find odd: 6, 12, 20, 30, 42, 56",
    "question_hi": "विषम ज्ञात करें: 6, 12, 20, 30, 42, 56",
    "options_en": ["12", "20", "30", "56"],
    "options_hi": ["12", "20", "30", "56"],
    "answer_en": "56",
    "answer_hi": "56",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is next letter: C, G, L, R, ?",
    "question_hi": "अगला अक्षर क्या है: C, G, L, R, ?",
    "options_en": ["X", "Y", "Z", "A"],
    "options_hi": ["X", "Y", "Z", "A"],
    "answer_en": "Y",
    "answer_hi": "Y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Find missing: 2, 6, 18, 54, ?",
    "question_hi": "लुप्त ज्ञात करें: 2, 6, 18, 54, ?",
    "options_en": ["108", "162", "216", "270"],
    "options_hi": ["108", "162", "216", "270"],
    "answer_en": "162",
    "answer_hi": "162",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If 'BOOK' = 43, 'PEN' = 35, then 'COPY' = ?",
    "question_hi": "यदि 'BOOK' = 43, 'PEN' = 35, तो 'COPY' = ?",
    "options_en": ["47", "49", "51", "53"],
    "options_hi": ["47", "49", "51", "53"],
    "answer_en": "51",
    "answer_hi": "51",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is next: 3, 6, 11, 18, 27, ?",
    "question_hi": "अगला क्या है: 3, 6, 11, 18, 27, ?",
    "options_en": ["36", "38", "40", "42"],
    "options_hi": ["36", "38", "40", "42"],
    "answer_en": "38",
    "answer_hi": "38",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Find the missing term: 1, 2, 6, 24, 120, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 1, 2, 6, 24, 120, ?",
    "options_en": ["240", "480", "600", "720"],
    "options_hi": ["240", "480", "600", "720"],
    "answer_en": "720",
    "answer_hi": "720",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "If 'MAN' is coded as 'NBO', then 'WOMAN' is coded as?",
    "question_hi": "यदि 'MAN' को 'NBO' से कूटबद्ध किया जाता है, तो 'WOMAN' को किससे कूटबद्ध किया जाएगा?",
    "options_en": ["XPNBO", "XPNBP", "XPOBP", "XPOCQ"],
    "options_hi": ["XPNBO", "XPNBP", "XPOBP", "XPOCQ"],
    "answer_en": "XPNBO",
    "answer_hi": "XPNBO",
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