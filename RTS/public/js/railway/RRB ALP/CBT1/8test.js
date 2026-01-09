const questions = [
  {
    "num": 1,
    "question_en": "If 15∆7 = 176, 22∆9 = 481, and 18∆5 = 329, then what is 27∆11?",
    "question_hi": "यदि 15∆7 = 176, 22∆9 = 481, और 18∆5 = 329, तो 27∆11 क्या है?",
    "options_en": ["729", "784", "841", "900"],
    "options_hi": ["729", "784", "841", "900"],
    "answer_en": "784",
    "answer_hi": "784",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Find the next term: 1, 3, 6, 10, 15, 21, 28, ?",
    "question_hi": "अगला पद ज्ञात करें: 1, 3, 6, 10, 15, 21, 28, ?",
    "options_en": ["34", "36", "38", "40"],
    "options_hi": ["34", "36", "38", "40"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If 'CRYPTOGRAPHY' is coded as 'ETARVQITCJA', how is 'DECRYPTION' coded?",
    "question_hi": "यदि 'CRYPTOGRAPHY' को 'ETARVQITCJA' से कूटबद्ध किया जाता है, तो 'DECRYPTION' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["FGETARVKQP", "FGETASVKQP", "FGETARVKQQ", "FGETARVJQP"],
    "options_hi": ["FGETARVKQP", "FGETASVKQP", "FGETARVKQQ", "FGETARVJQP"],
    "answer_en": "FGETARVKQP",
    "answer_hi": "FGETARVKQP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Find the missing number: 2, 5, 11, 23, 47, 95, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 2, 5, 11, 23, 47, 95, ?",
    "options_en": ["191", "189", "187", "185"],
    "options_hi": ["191", "189", "187", "185"],
    "answer_en": "191",
    "answer_hi": "191",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "If 'ELEPHANT' = 315 and 'TIGER' = 210, what is 'RHINOCEROS' equal to?",
    "question_hi": "यदि 'ELEPHANT' = 315 और 'TIGER' = 210, तो 'RHINOCEROS' किसके बराबर है?",
    "options_en": ["540", "560", "580", "600"],
    "options_hi": ["540", "560", "580", "600"],
    "answer_en": "560",
    "answer_hi": "560",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What comes next: ZA5, YB10, XC15, WD20, ?",
    "question_hi": "आगे क्या आता है: ZA5, YB10, XC15, WD20, ?",
    "options_en": ["VE25", "UE25", "VF25", "UE30"],
    "options_hi": ["VE25", "UE25", "VF25", "UE30"],
    "answer_en": "VE25",
    "answer_hi": "VE25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Find the odd one out: 31, 41, 51, 61, 71, 81",
    "question_hi": "विषम चुनें: 31, 41, 51, 61, 71, 81",
    "options_en": ["51", "61", "71", "81"],
    "options_hi": ["51", "61", "71", "81"],
    "answer_en": "81",
    "answer_hi": "81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If 7*8 = 1512, 6*5 = 1130, 9*4 = 1336, then 11*7 = ?",
    "question_hi": "यदि 7*8 = 1512, 6*5 = 1130, 9*4 = 1336, तो 11*7 = ?",
    "options_en": ["1814", "1918", "2024", "2128"],
    "options_hi": ["1814", "1918", "2024", "2128"],
    "answer_en": "1814",
    "answer_hi": "1814",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the next letter in the series: J, L, O, S, X, ?",
    "question_hi": "श्रृंखला में अगला अक्षर क्या है: J, L, O, S, X, ?",
    "options_en": ["D", "C", "B", "A"],
    "options_hi": ["D", "C", "B", "A"],
    "answer_en": "D",
    "answer_hi": "D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Find missing number: 5, 13, 29, 61, 125, 253, ?",
    "question_hi": "लुप्त संख्या ज्ञात करें: 5, 13, 29, 61, 125, 253, ?",
    "options_en": ["509", "511", "513", "515"],
    "options_hi": ["509", "511", "513", "515"],
    "answer_en": "509",
    "answer_hi": "509",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If 'MACHINE' is coded as 'NDBIJOF' and 'NETWORK' is 'OFUPSXL', how is 'DATABASE' coded?",
    "question_hi": "यदि 'MACHINE' को 'NDBIJOF' और 'NETWORK' को 'OFUPSXL' से कूटबद्ध किया जाता है, तो 'DATABASE' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["EBUBCTBF", "EBUBCUBF", "EBUBCTCF", "EBUBCTBG"],
    "options_hi": ["EBUBCTBF", "EBUBCUBF", "EBUBCTCF", "EBUBCTBG"],
    "answer_en": "EBUBCTBF",
    "answer_hi": "EBUBCTBF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What comes next: 1, 5, 14, 30, 55, 91, ?",
    "question_hi": "आगे क्या आता है: 1, 5, 14, 30, 55, 91, ?",
    "options_en": ["130", "140", "150", "160"],
    "options_hi": ["130", "140", "150", "160"],
    "answer_en": "140",
    "answer_hi": "140",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "If 3#4 = 25, 5#6 = 61, 7#8 = 113, then 9#10 = ?",
    "question_hi": "यदि 3#4 = 25, 5#6 = 61, 7#8 = 113, तो 9#10 = ?",
    "options_en": ["145", "169", "181", "193"],
    "options_hi": ["145", "169", "181", "193"],
    "answer_en": "181",
    "answer_hi": "181",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Find the odd one: 343, 512, 729, 1000, 1331, 1728",
    "question_hi": "विषम ज्ञात करें: 343, 512, 729, 1000, 1331, 1728",
    "options_en": ["512", "1000", "1331", "1728"],
    "options_hi": ["512", "1000", "1331", "1728"],
    "answer_en": "1728",
    "answer_hi": "1728",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is next in series: B, D, G, K, P, V, ?",
    "question_hi": "श्रृंखला में अगला क्या है: B, D, G, K, P, V, ?",
    "options_en": ["C", "D", "E", "F"],
    "options_hi": ["C", "D", "E", "F"],
    "answer_en": "C",
    "answer_hi": "C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Find missing: 8, 24, 48, 80, 120, 168, ?",
    "question_hi": "लुप्त ज्ञात करें: 8, 24, 48, 80, 120, 168, ?",
    "options_en": ["224", "240", "264", "288"],
    "options_hi": ["224", "240", "264", "288"],
    "answer_en": "224",
    "answer_hi": "224",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If 'QUANTUM' = 112, 'PHYSICS' = 98, 'CHEMISTRY' = 132, then 'BIOLOGY' = ?",
    "question_hi": "यदि 'QUANTUM' = 112, 'PHYSICS' = 98, 'CHEMISTRY' = 132, तो 'BIOLOGY' = ?",
    "options_en": ["84", "88", "92", "96"],
    "options_hi": ["84", "88", "92", "96"],
    "answer_en": "88",
    "answer_hi": "88",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What comes next: 0.5, 1.5, 4.5, 13.5, 40.5, ?",
    "question_hi": "आगे क्या आता है: 0.5, 1.5, 4.5, 13.5, 40.5, ?",
    "options_en": ["81.5", "121.5", "162.5", "243.5"],
    "options_hi": ["81.5", "121.5", "162.5", "243.5"],
    "answer_en": "121.5",
    "answer_hi": "121.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If 'SYMMETRY' is coded as 'TXNNVUSZ' and 'ASYMMETRIC' as 'BTZNNVUJSDC', how is 'GEOMETRY' coded?",
    "question_hi": "यदि 'SYMMETRY' को 'TXNNVUSZ' और 'ASYMMETRIC' को 'BTZNNVUJSDC' से कूटबद्ध किया जाता है, तो 'GEOMETRY' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["HFPNFVSA", "HFPNFWTA", "HFPNFWTB", "HFPNFWSA"],
    "options_hi": ["HFPNFVSA", "HFPNFWTA", "HFPNFWTB", "HFPNFWSA"],
    "answer_en": "HFPNFWSA",
    "answer_hi": "HFPNFWSA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Find the missing term: 2, 7, 17, 32, 52, 77, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 2, 7, 17, 32, 52, 77, ?",
    "options_en": ["107", "112", "117", "122"],
    "options_hi": ["107", "112", "117", "122"],
    "answer_en": "107",
    "answer_hi": "107",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If 12 $ 8 = 80, 15 $ 10 = 125, 18 $ 12 = 180, then 24 $ 15 = ?",
    "question_hi": "यदि 12 $ 8 = 80, 15 $ 10 = 125, 18 $ 12 = 180, तो 24 $ 15 = ?",
    "options_en": ["300", "320", "340", "360"],
    "options_hi": ["300", "320", "340", "360"],
    "answer_en": "360",
    "answer_hi": "360",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the odd one: 127, 131, 137, 139, 143, 149",
    "question_hi": "विषम कौन सा है: 127, 131, 137, 139, 143, 149",
    "options_en": ["143", "139", "137", "149"],
    "options_hi": ["143", "139", "137", "149"],
    "answer_en": "143",
    "answer_hi": "143",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find next letter: M, P, S, V, Y, ?",
    "question_hi": "अगला अक्षर ज्ञात करें: M, P, S, V, Y, ?",
    "options_en": ["A", "B", "C", "D"],
    "options_hi": ["A", "B", "C", "D"],
    "answer_en": "B",
    "answer_hi": "B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Missing number: 1, 3, 6, 10, 15, 21, 28, 36, ?",
    "question_hi": "लुप्त संख्या: 1, 3, 6, 10, 15, 21, 28, 36, ?",
    "options_en": ["42", "45", "48", "52"],
    "options_hi": ["42", "45", "48", "52"],
    "answer_en": "45",
    "answer_hi": "45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If 'COMPUTER' = 96, 'KEYBOARD' = 84, 'MONITOR' = 95, then 'SOFTWARE' = ?",
    "question_hi": "यदि 'COMPUTER' = 96, 'KEYBOARD' = 84, 'MONITOR' = 95, तो 'SOFTWARE' = ?",
    "options_en": ["102", "106", "108", "112"],
    "options_hi": ["102", "106", "108", "112"],
    "answer_en": "106",
    "answer_hi": "106",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What comes next: 256, 128, 64, 32, 16, ?",
    "question_hi": "आगे क्या आता है: 256, 128, 64, 32, 16, ?",
    "options_en": ["12", "10", "8", "6"],
    "options_hi": ["12", "10", "8", "6"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "If 4 ! 5 = 41, 6 ! 7 = 85, 8 ! 9 = 145, then 10 ! 11 = ?",
    "question_hi": "यदि 4 ! 5 = 41, 6 ! 7 = 85, 8 ! 9 = 145, तो 10 ! 11 = ?",
    "options_en": ["181", "201", "221", "241"],
    "options_hi": ["181", "201", "221", "241"],
    "answer_en": "221",
    "answer_hi": "221",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Find odd: 11, 23, 35, 47, 59, 71",
    "question_hi": "विषम ज्ञात करें: 11, 23, 35, 47, 59, 71",
    "options_en": ["35", "47", "59", "71"],
    "options_hi": ["35", "47", "59", "71"],
    "answer_en": "35",
    "answer_hi": "35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Next in series: A, Z, B, Y, C, X, ?",
    "question_hi": "श्रृंखला में अगला: A, Z, B, Y, C, X, ?",
    "options_en": ["D", "W", "E", "V"],
    "options_hi": ["D", "W", "E", "V"],
    "answer_en": "D",
    "answer_hi": "D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Missing number: 2, 9, 28, 65, 126, 217, ?",
    "question_hi": "लुप्त संख्या: 2, 9, 28, 65, 126, 217, ?",
    "options_en": ["296", "326", "342", "344"],
    "options_hi": ["296", "326", "342", "344"],
    "answer_en": "344",
    "answer_hi": "344",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "If 'ALPHABET' = 78, 'LANGUAGE' = 72, 'GRAMMAR' = 71, then 'VOCABULARY' = ?",
    "question_hi": "यदि 'ALPHABET' = 78, 'LANGUAGE' = 72, 'GRAMMAR' = 71, तो 'VOCABULARY' = ?",
    "options_en": ["112", "118", "124", "130"],
    "options_hi": ["112", "118", "124", "130"],
    "answer_en": "124",
    "answer_hi": "124",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What comes next: 1, 8, 27, 64, 125, 216, ?",
    "question_hi": "आगे क्या आता है: 1, 8, 27, 64, 125, 216, ?",
    "options_en": ["289", "324", "343", "512"],
    "options_hi": ["289", "324", "343", "512"],
    "answer_en": "343",
    "answer_hi": "343",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If 5 % 3 = 34, 7 % 4 = 65, 6 % 5 = 61, then 8 % 6 = ?",
    "question_hi": "यदि 5 % 3 = 34, 7 % 4 = 65, 6 % 5 = 61, तो 8 % 6 = ?",
    "options_en": ["100", "110", "120", "130"],
    "options_hi": ["100", "110", "120", "130"],
    "answer_en": "100",
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Find odd: 1024, 512, 256, 128, 64, 32",
    "question_hi": "विषम ज्ञात करें: 1024, 512, 256, 128, 64, 32",
    "options_en": ["1024", "512", "64", "32"],
    "options_hi": ["1024", "512", "64", "32"],
    "answer_en": "1024",
    "answer_hi": "1024",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Next letter: D, H, L, P, T, ?",
    "question_hi": "अगला अक्षर: D, H, L, P, T, ?",
    "options_en": ["X", "Y", "Z", "A"],
    "options_hi": ["X", "Y", "Z", "A"],
    "answer_en": "X",
    "answer_hi": "X",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Missing: 3, 7, 13, 21, 31, 43, ?",
    "question_hi": "लुप्त: 3, 7, 13, 21, 31, 43, ?",
    "options_en": ["55", "57", "59", "61"],
    "options_hi": ["55", "57", "59", "61"],
    "answer_en": "57",
    "answer_hi": "57",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If 'SCIENCE' = 85, 'MATH' = 44, 'PHYSICS' = 98, then 'BIOLOGY' = ?",
    "question_hi": "यदि 'SCIENCE' = 85, 'MATH' = 44, 'PHYSICS' = 98, तो 'BIOLOGY' = ?",
    "options_en": ["76", "78", "80", "82"],
    "options_hi": ["76", "78", "80", "82"],
    "answer_en": "78",
    "answer_hi": "78",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What comes next: 0, 7, 26, 63, 124, 215, ?",
    "question_hi": "आगे क्या आता है: 0, 7, 26, 63, 124, 215, ?",
    "options_en": ["296", "342", "344", "400"],
    "options_hi": ["296", "342", "344", "400"],
    "answer_en": "342",
    "answer_hi": "342",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If 'ENCRYPT' is coded as 'GPETARV' and 'DECRYPT' as 'FGESBRU', how is 'CIPHER' coded?",
    "question_hi": "यदि 'ENCRYPT' को 'GPETARV' और 'DECRYPT' को 'FGESBRU' से कूटबद्ध किया जाता है, तो 'CIPHER' को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["EKRJGT", "EKQJGT", "EKRJGU", "EKQJGU"],
    "options_hi": ["EKRJGT", "EKQJGT", "EKRJGU", "EKQJGU"],
    "answer_en": "EKRJGT",
    "answer_hi": "EKRJGT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Find missing term: 1, 4, 9, 16, 25, 36, 49, ?",
    "question_hi": "लुप्त पद ज्ञात करें: 1, 4, 9, 16, 25, 36, 49, ?",
    "options_en": ["60", "64", "72", "81"],
    "options_hi": ["60", "64", "72", "81"],
    "answer_en": "64",
    "answer_hi": "64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If 9 & 6 = 117, 8 & 5 = 91, 7 & 4 = 67, then 10 & 7 = ?",
    "question_hi": "यदि 9 & 6 = 117, 8 & 5 = 91, 7 & 4 = 67, तो 10 & 7 = ?",
    "options_en": ["147", "157", "167", "177"],
    "options_hi": ["147", "157", "167", "177"],
    "answer_en": "157",
    "answer_hi": "157",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Odd one: 6, 15, 24, 35, 48, 63",
    "question_hi": "विषम: 6, 15, 24, 35, 48, 63",
    "options_en": ["35", "48", "63", "24"],
    "options_hi": ["35", "48", "63", "24"],
    "answer_en": "35",
    "answer_hi": "35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Next letter: Q, N, K, H, E, ?",
    "question_hi": "अगला अक्षर: Q, N, K, H, E, ?",
    "options_en": ["B", "C", "D", "A"],
    "options_hi": ["B", "C", "D", "A"],
    "answer_en": "B",
    "answer_hi": "B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Missing: 1, 2, 4, 7, 11, 16, 22, ?",
    "question_hi": "लुप्त: 1, 2, 4, 7, 11, 16, 22, ?",
    "options_en": ["28", "29", "30", "31"],
    "options_hi": ["28", "29", "30", "31"],
    "answer_en": "29",
    "answer_hi": "29",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If 'SYSTEM' = 115, 'PROCESS' = 108, 'THREAD' = 92, then 'MEMORY' = ?",
    "question_hi": "यदि 'SYSTEM' = 115, 'PROCESS' = 108, 'THREAD' = 92, तो 'MEMORY' = ?",
    "options_en": ["98", "102", "106", "110"],
    "options_hi": ["98", "102", "106", "110"],
    "answer_en": "106",
    "answer_hi": "106",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What comes next: 1, 1/2, 1/4, 1/8, 1/16, ?",
    "question_hi": "आगे क्या आता है: 1, 1/2, 1/4, 1/8, 1/16, ?",
    "options_en": ["1/20", "1/24", "1/32", "1/64"],
    "options_hi": ["1/20", "1/24", "1/32", "1/64"],
    "answer_en": "1/32",
    "answer_hi": "1/32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If 11 * 12 = 276, 13 * 14 = 372, 15 * 16 = 480, then 17 * 18 = ?",
    "question_hi": "यदि 11 * 12 = 276, 13 * 14 = 372, 15 * 16 = 480, तो 17 * 18 = ?",
    "options_en": ["612", "624", "636", "648"],
    "options_hi": ["612", "624", "636", "648"],
    "answer_en": "612",
    "answer_hi": "612",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Find odd: 17, 19, 23, 29, 31, 37, 41",
    "question_hi": "विषम ज्ञात करें: 17, 19, 23, 29, 31, 37, 41",
    "options_en": ["41", "37", "31", "29"],
    "options_hi": ["41", "37", "31", "29"],
    "answer_en": "41",
    "answer_hi": "41",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Next letter: F, J, O, U, B, ?",
    "question_hi": "अगला अक्षर: F, J, O, U, B, ?",
    "options_en": ["H", "I", "J", "K"],
    "options_hi": ["H", "I", "J", "K"],
    "answer_en": "H",
    "answer_hi": "H",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Missing term: 2, 12, 36, 80, 150, 252, ?",
    "question_hi": "लुप्त पद: 2, 12, 36, 80, 150, 252, ?",
    "options_en": ["392", "420", "448", "480"],
    "options_hi": ["392", "420", "448", "480"],
    "answer_en": "392",
    "answer_hi": "392",
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