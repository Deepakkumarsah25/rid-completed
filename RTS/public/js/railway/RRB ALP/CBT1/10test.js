const questions = [
  {
    "num": 1,
    "question_en": "If 15∆7 = 176, 22∆9 = 481, 18∆5 = 329, and 27∆11 = 784, what is the pattern? If the pattern continues, what is 33∆13?",
    "question_hi": "यदि 15∆7 = 176, 22∆9 = 481, 18∆5 = 329, और 27∆11 = 784, तो पैटर्न क्या है? यदि पैटर्न जारी रहता है, तो 33∆13 क्या है?",
    "options_en": ["1089", "1156", "1225", "1296"],
    "options_hi": ["1089", "1156", "1225", "1296"],
    "answer_en": "1156",
    "answer_hi": "1156",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Find the next term: 1, 3, 6, 10, 15, 21, 28, 36, 45, ?",
    "question_hi": "अगला पद ज्ञात करें: 1, 3, 6, 10, 15, 21, 28, 36, 45, ?",
    "options_en": ["55", "60", "65", "70"],
    "options_hi": ["55", "60", "65", "70"],
    "answer_en": "55",
    "answer_hi": "55",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If 'CRYPTOGRAPHY' is coded as 'ETARVQITCJA' and 'DECRYPTION' as 'FGETARVKQP', how is 'ALGORITHM' coded?",
    "question_hi": "यदि 'CRYPTOGRAPHY' को 'ETARVQITCJA' और 'DECRYPTION' को 'FGETARVKQP' से कूटबद्ध किया जाता है, तो 'ALGORITHM' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["CNITQUKJO", "CNITQULKO", "CNITQVKJO", "CNITQVKJP"],
    "options_hi": ["CNITQUKJO", "CNITQULKO", "CNITQVKJO", "CNITQVKJP"],
    "answer_en": "CNITQVKJO",
    "answer_hi": "CNITQVKJO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Find the missing number: 2, 5, 11, 23, 47, 95, 191, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 2, 5, 11, 23, 47, 95, 191, ?",
    "options_en": ["383", "382", "381", "379"],
    "options_hi": ["383", "382", "381", "379"],
    "answer_en": "383",
    "answer_hi": "383",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "If 'ELEPHANT' = 315, 'TIGER' = 210, 'RHINOCEROS' = 560, what is 'HIPPOPOTAMUS' equal to?",
    "question_hi": "यदि 'ELEPHANT' = 315, 'TIGER' = 210, 'RHINOCEROS' = 560, तो 'HIPPOPOTAMUS' किसके बराबर है?",
    "options_en": ["720", "780", "840", "900"],
    "options_hi": ["720", "780", "840", "900"],
    "answer_en": "840",
    "answer_hi": "840",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What comes next: ZA5, YB10, XC15, WD20, VE25, ?",
    "question_hi": "आगे क्या आता है: ZA5, YB10, XC15, WD20, VE25, ?",
    "options_en": ["UF30", "UE30", "TD30", "TC30"],
    "options_hi": ["UF30", "UE30", "TD30", "TC30"],
    "answer_en": "UF30",
    "answer_hi": "UF30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Find the odd one out: 31, 41, 51, 61, 71, 81, 91",
    "question_hi": "विषम चुनें: 31, 41, 51, 61, 71, 81, 91",
    "options_en": ["51", "81", "91", "71"],
    "options_hi": ["51", "81", "91", "71"],
    "answer_en": "91",
    "answer_hi": "91",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If 7*8 = 1512, 6*5 = 1130, 9*4 = 1336, 11*7 = 1814, then 13*9 = ?",
    "question_hi": "यदि 7*8 = 1512, 6*5 = 1130, 9*4 = 1336, 11*7 = 1814, तो 13*9 = ?",
    "options_en": ["2226", "2332", "2444", "2556"],
    "options_hi": ["2226", "2332", "2444", "2556"],
    "answer_en": "2332",
    "answer_hi": "2332",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the next letter in the series: J, L, O, S, X, D, ?",
    "question_hi": "श्रृंखला में अगला अक्षर क्या है: J, L, O, S, X, D, ?",
    "options_en": ["K", "L", "M", "N"],
    "options_hi": ["K", "L", "M", "N"],
    "answer_en": "K",
    "answer_hi": "K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Find missing number: 5, 13, 29, 61, 125, 253, 509, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 5, 13, 29, 61, 125, 253, 509, ?",
    "options_en": ["1017", "1021", "1023", "1025"],
    "options_hi": ["1017", "1021", "1023", "1025"],
    "answer_en": "1021",
    "answer_hi": "1021",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If 'MACHINE' = 'NDBIJOF', 'NETWORK' = 'OFUPSXL', 'DATABASE' = 'EBUBCTBF', how is 'PROGRAM' coded?",
    "question_hi": "यदि 'MACHINE' = 'NDBIJOF', 'NETWORK' = 'OFUPSXL', 'DATABASE' = 'EBUBCTBF', तो 'PROGRAM' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["QSPHSBN", "QSPHSBO", "QSPHSBM", "QSPHSBP"],
    "options_hi": ["QSPHSBN", "QSPHSBO", "QSPHSBM", "QSPHSBP"],
    "answer_en": "QSPHSBN",
    "answer_hi": "QSPHSBN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What comes next: 1, 5, 14, 30, 55, 91, 140, ?",
    "question_hi": "आगे क्या आता है: 1, 5, 14, 30, 55, 91, 140, ?",
    "options_en": ["190", "204", "220", "238"],
    "options_hi": ["190", "204", "220", "238"],
    "answer_en": "204",
    "answer_hi": "204",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "If 3#4 = 25, 5#6 = 61, 7#8 = 113, 9#10 = 181, then 11#12 = ?",
    "question_hi": "यदि 3#4 = 25, 5#6 = 61, 7#8 = 113, 9#10 = 181, तो 11#12 = ?",
    "options_en": ["265", "289", "313", "337"],
    "options_hi": ["265", "289", "313", "337"],
    "answer_en": "265",
    "answer_hi": "265",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Find the odd one: 343, 512, 729, 1000, 1331, 1728, 2197",
    "question_hi": "विषम ज्ञात करें: 343, 512, 729, 1000, 1331, 1728, 2197",
    "options_en": ["512", "1000", "1728", "2197"],
    "options_hi": ["512", "1000", "1728", "2197"],
    "answer_en": "2197",
    "answer_hi": "2197",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is next in series: B, D, G, K, P, V, C, ?",
    "question_hi": "श्रृंखला में अगला क्या है: B, D, G, K, P, V, C, ?",
    "options_en": ["J", "K", "L", "M"],
    "options_hi": ["J", "K", "L", "M"],
    "answer_en": "J",
    "answer_hi": "J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Find missing: 8, 24, 48, 80, 120, 168, 224, ?",
    "question_hi": "लुप्त ज्ञात करें: 8, 24, 48, 80, 120, 168, 224, ?",
    "options_en": ["288", "312", "336", "360"],
    "options_hi": ["288", "312", "336", "360"],
    "answer_en": "288",
    "answer_hi": "288",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If 'QUANTUM' = 112, 'PHYSICS' = 98, 'CHEMISTRY' = 132, 'BIOLOGY' = 88, then 'ASTRONOMY' = ?",
    "question_hi": "यदि 'QUANTUM' = 112, 'PHYSICS' = 98, 'CHEMISTRY' = 132, 'BIOLOGY' = 88, तो 'ASTRONOMY' = ?",
    "options_en": ["126", "134", "142", "150"],
    "options_hi": ["126", "134", "142", "150"],
    "answer_en": "134",
    "answer_hi": "134",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What comes next: 0.5, 1.5, 4.5, 13.5, 40.5, 121.5, ?",
    "question_hi": "आगे क्या आता है: 0.5, 1.5, 4.5, 13.5, 40.5, 121.5, ?",
    "options_en": ["243.5", "364.5", "486.5", "729.5"],
    "options_hi": ["243.5", "364.5", "486.5", "729.5"],
    "answer_en": "364.5",
    "answer_hi": "364.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If 'SYMMETRY' = 'TXNNVUSZ', 'ASYMMETRIC' = 'BTZNNVUJSDC', 'GEOMETRY' = 'HFPNFWSA', how is 'TRIGONOMETRY' coded?",
    "question_hi": "यदि 'SYMMETRY' = 'TXNNVUSZ', 'ASYMMETRIC' = 'BTZNNVUJSDC', 'GEOMETRY' = 'HFPNFWSA', तो 'TRIGONOMETRY' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["USJHPOPNFVSA", "USJHPOPNFWSA", "USJHPOPNFVTA", "USJHPOPNFWTA"],
    "options_hi": ["USJHPOPNFVSA", "USJHPOPNFWSA", "USJHPOPNFVTA", "USJHPOPNFWTA"],
    "answer_en": "USJHPOPNFWSA",
    "answer_hi": "USJHPOPNFWSA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Find the missing term: 2, 7, 17, 32, 52, 77, 107, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 2, 7, 17, 32, 52, 77, 107, ?",
    "options_en": ["142", "147", "152", "157"],
    "options_hi": ["142", "147", "152", "157"],
    "answer_en": "142",
    "answer_hi": "142",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If 12 $ 8 = 80, 15 $ 10 = 125, 18 $ 12 = 180, 24 $ 15 = 360, then 30 $ 18 = ?",
    "question_hi": "यदि 12 $ 8 = 80, 15 $ 10 = 125, 18 $ 12 = 180, 24 $ 15 = 360, तो 30 $ 18 = ?",
    "options_en": ["540", "600", "648", "720"],
    "options_hi": ["540", "600", "648", "720"],
    "answer_en": "540",
    "answer_hi": "540",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the odd one: 127, 131, 137, 139, 143, 149, 151",
    "question_hi": "विषम कौन सा है: 127, 131, 137, 139, 143, 149, 151",
    "options_en": ["143", "149", "151", "139"],
    "options_hi": ["143", "149", "151", "139"],
    "answer_en": "143",
    "answer_hi": "143",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find next letter: M, P, S, V, Y, B, ?",
    "question_hi": "अगला अक्षर ज्ञात करें: M, P, S, V, Y, B, ?",
    "options_en": ["E", "F", "G", "H"],
    "options_hi": ["E", "F", "G", "H"],
    "answer_en": "E",
    "answer_hi": "E",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Missing number: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ?",
    "question_hi": "लुप्त संख्या: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ?",
    "options_en": ["66", "70", "78", "84"],
    "options_hi": ["66", "70", "78", "84"],
    "answer_en": "66",
    "answer_hi": "66",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If 'COMPUTER' = 96, 'KEYBOARD' = 84, 'MONITOR' = 95, 'SOFTWARE' = 106, then 'HARDWARE' = ?",
    "question_hi": "यदि 'COMPUTER' = 96, 'KEYBOARD' = 84, 'MONITOR' = 95, 'SOFTWARE' = 106, तो 'HARDWARE' = ?",
    "options_en": ["92", "96", "100", "104"],
    "options_hi": ["92", "96", "100", "104"],
    "answer_en": "96",
    "answer_hi": "96",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What comes next: 256, 128, 64, 32, 16, 8, ?",
    "question_hi": "आगे क्या आता है: 256, 128, 64, 32, 16, 8, ?",
    "options_en": ["6", "5", "4", "3"],
    "options_hi": ["6", "5", "4", "3"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "If 4 ! 5 = 41, 6 ! 7 = 85, 8 ! 9 = 145, 10 ! 11 = 221, then 12 ! 13 = ?",
    "question_hi": "यदि 4 ! 5 = 41, 6 ! 7 = 85, 8 ! 9 = 145, 10 ! 11 = 221, तो 12 ! 13 = ?",
    "options_en": ["313", "337", "365", "401"],
    "options_hi": ["313", "337", "365", "401"],
    "answer_en": "313",
    "answer_hi": "313",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Find odd: 11, 23, 35, 47, 59, 71, 83",
    "question_hi": "विषम ज्ञात करें: 11, 23, 35, 47, 59, 71, 83",
    "options_en": ["35", "47", "71", "83"],
    "options_hi": ["35", "47", "71", "83"],
    "answer_en": "35",
    "answer_hi": "35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Next in series: A, Z, B, Y, C, X, D, ?",
    "question_hi": "श्रृंखला में अगला: A, Z, B, Y, C, X, D, ?",
    "options_en": ["E", "W", "F", "V"],
    "options_hi": ["E", "W", "F", "V"],
    "answer_en": "W",
    "answer_hi": "W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Missing number: 2, 9, 28, 65, 126, 217, 344, ?",
    "question_hi": "लुप्त संख्या: 2, 9, 28, 65, 126, 217, 344, ?",
    "options_en": ["441", "512", "513", "600"],
    "options_hi": ["441", "512", "513", "600"],
    "answer_en": "513",
    "answer_hi": "513",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "If 'ALPHABET' = 78, 'LANGUAGE' = 72, 'GRAMMAR' = 71, 'VOCABULARY' = 124, then 'DICTIONARY' = ?",
    "question_hi": "यदि 'ALPHABET' = 78, 'LANGUAGE' = 72, 'GRAMMAR' = 71, 'VOCABULARY' = 124, तो 'DICTIONARY' = ?",
    "options_en": ["108", "112", "116", "120"],
    "options_hi": ["108", "112", "116", "120"],
    "answer_en": "112",
    "answer_hi": "112",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What comes next: 1, 8, 27, 64, 125, 216, 343, ?",
    "question_hi": "आगे क्या आता है: 1, 8, 27, 64, 125, 216, 343, ?",
    "options_en": ["512", "625", "729", "1000"],
    "options_hi": ["512", "625", "729", "1000"],
    "answer_en": "512",
    "answer_hi": "512",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If 5 % 3 = 34, 7 % 4 = 65, 6 % 5 = 61, 8 % 6 = 100, then 9 % 7 = ?",
    "question_hi": "यदि 5 % 3 = 34, 7 % 4 = 65, 6 % 5 = 61, 8 % 6 = 100, तो 9 % 7 = ?",
    "options_en": ["130", "145", "169", "185"],
    "options_hi": ["130", "145", "169", "185"],
    "answer_en": "145",
    "answer_hi": "145",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Find odd: 1024, 512, 256, 128, 64, 32, 16",
    "question_hi": "विषम ज्ञात करें: 1024, 512, 256, 128, 64, 32, 16",
    "options_en": ["1024", "512", "32", "16"],
    "options_hi": ["1024", "512", "32", "16"],
    "answer_en": "1024",
    "answer_hi": "1024",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Next letter: D, H, L, P, T, X, ?",
    "question_hi": "अगला अक्षर: D, H, L, P, T, X, ?",
    "options_en": ["A", "B", "C", "D"],
    "options_hi": ["A", "B", "C", "D"],
    "answer_en": "B",
    "answer_hi": "B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Missing: 3, 7, 13, 21, 31, 43, 57, ?",
    "question_hi": "लुप्त: 3, 7, 13, 21, 31, 43, 57, ?",
    "options_en": ["73", "75", "77", "79"],
    "options_hi": ["73", "75", "77", "79"],
    "answer_en": "73",
    "answer_hi": "73",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If 'SCIENCE' = 85, 'MATH' = 44, 'PHYSICS' = 98, 'BIOLOGY' = 78, then 'GEOLOGY' = ?",
    "question_hi": "यदि 'SCIENCE' = 85, 'MATH' = 44, 'PHYSICS' = 98, 'BIOLOGY' = 78, तो 'GEOLOGY' = ?",
    "options_en": ["72", "76", "80", "84"],
    "options_hi": ["72", "76", "80", "84"],
    "answer_en": "76",
    "answer_hi": "76",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What comes next: 0, 7, 26, 63, 124, 215, 342, ?",
    "question_hi": "आगे क्या आता है: 0, 7, 26, 63, 124, 215, 342, ?",
    "options_en": ["511", "600", "728", "999"],
    "options_hi": ["511", "600", "728", "999"],
    "answer_en": "511",
    "answer_hi": "511",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If 'ENCRYPT' = 'GPETARV', 'DECRYPT' = 'FGESBRU', 'CIPHER' = 'EKRJGT', how is 'DECIPHER' coded?",
    "question_hi": "यदि 'ENCRYPT' = 'GPETARV', 'DECRYPT' = 'FGESBRU', 'CIPHER' = 'EKRJGT', तो 'DECIPHER' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["FGEKJGT", "FGKJGTU", "FGKJGUU", "FGKJGTU"],
    "options_hi": ["FGEKJGT", "FGKJGTU", "FGKJGUU", "FGKJGTU"],
    "answer_en": "FGKJGTU",
    "answer_hi": "FGKJGTU",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Find missing term: 1, 4, 9, 16, 25, 36, 49, 64, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 1, 4, 9, 16, 25, 36, 49, 64, ?",
    "options_en": ["81", "100", "121", "144"],
    "options_hi": ["81", "100", "121", "144"],
    "answer_en": "81",
    "answer_hi": "81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If 9 & 6 = 117, 8 & 5 = 91, 7 & 4 = 67, 10 & 7 = 157, then 11 & 8 = ?",
    "question_hi": "यदि 9 & 6 = 117, 8 & 5 = 91, 7 & 4 = 67, 10 & 7 = 157, तो 11 & 8 = ?",
    "options_en": ["191", "201", "211", "221"],
    "options_hi": ["191", "201", "211", "221"],
    "answer_en": "201",
    "answer_hi": "201",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Odd one: 6, 15, 24, 35, 48, 63, 80",
    "question_hi": "विषम: 6, 15, 24, 35, 48, 63, 80",
    "options_en": ["35", "48", "63", "80"],
    "options_hi": ["35", "48", "63", "80"],
    "answer_en": "80",
    "answer_hi": "80",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Next letter: Q, N, K, H, E, B, ?",
    "question_hi": "अगला अक्षर: Q, N, K, H, E, B, ?",
    "options_en": ["Y", "X", "W", "V"],
    "options_hi": ["Y", "X", "W", "V"],
    "answer_en": "Y",
    "answer_hi": "Y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Missing: 1, 2, 4, 7, 11, 16, 22, 29, ?",
    "question_hi": "लुप्त: 1, 2, 4, 7, 11, 16, 22, 29, ?",
    "options_en": ["36", "37", "38", "39"],
    "options_hi": ["36", "37", "38", "39"],
    "answer_en": "37",
    "answer_hi": "37",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If 'SYSTEM' = 115, 'PROCESS' = 108, 'THREAD' = 92, 'MEMORY' = 106, then 'STORAGE' = ?",
    "question_hi": "यदि 'SYSTEM' = 115, 'PROCESS' = 108, 'THREAD' = 92, 'MEMORY' = 106, तो 'STORAGE' = ?",
    "options_en": ["110", "112", "114", "116"],
    "options_hi": ["110", "112", "114", "116"],
    "answer_en": "112",
    "answer_hi": "112",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What comes next: 1, 1/2, 1/4, 1/8, 1/16, 1/32, ?",
    "question_hi": "आगे क्या आता है: 1, 1/2, 1/4, 1/8, 1/16, 1/32, ?",
    "options_en": ["1/48", "1/56", "1/64", "1/72"],
    "options_hi": ["1/48", "1/56", "1/64", "1/72"],
    "answer_en": "1/64",
    "answer_hi": "1/64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If 11 * 12 = 276, 13 * 14 = 372, 15 * 16 = 480, 17 * 18 = 612, then 19 * 20 = ?",
    "question_hi": "यदि 11 * 12 = 276, 13 * 14 = 372, 15 * 16 = 480, 17 * 18 = 612, तो 19 * 20 = ?",
    "options_en": ["760", "800", "840", "880"],
    "options_hi": ["760", "800", "840", "880"],
    "answer_en": "760",
    "answer_hi": "760",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Find odd: 17, 19, 23, 29, 31, 37, 41, 43",
    "question_hi": "विषम ज्ञात करें: 17, 19, 23, 29, 31, 37, 41, 43",
    "options_en": ["43", "41", "37", "31"],
    "options_hi": ["43", "41", "37", "31"],
    "answer_en": "43",
    "answer_hi": "43",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Next letter: F, J, O, U, B, H, ?",
    "question_hi": "अगला अक्षर: F, J, O, U, B, H, ?",
    "options_en": ["O", "P", "Q", "R"],
    "options_hi": ["O", "P", "Q", "R"],
    "answer_en": "O",
    "answer_hi": "O",
    "attempted": false,
    "selected": ""
  }, {
    "num": 50,
    "question_en": "If 11 * 12 = 276, 13 * 14 = 372, 15 * 16 = 480, 17 * 18 = 612, then 19 * 20 = ?",
    "question_hi": "यदि 11 * 12 = 276, 13 * 14 = 372, 15 * 16 = 480, 17 * 18 = 612, तो 19 * 20 = ?",
    "options_en": ["760", "800", "840", "880"],
    "options_hi": ["760", "800", "840", "880"],
    "answer_en": "760",
    "answer_hi": "760",
    "attempted": false,
    "selected": ""
  }];
  
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