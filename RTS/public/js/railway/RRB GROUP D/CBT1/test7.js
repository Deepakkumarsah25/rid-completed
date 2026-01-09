
const questions =[
  {
    "num": 1,
    "question_en": "If a boat goes upstream at 8 km/h and downstream at 12 km/h, what is the speed of the stream?",
    "question_hi": "यदि एक नाव धारा के प्रतिकूल 8 किमी/घंटा और धारा के अनुकूल 12 किमी/घंटा की गति से चलती है, तो धारा की गति क्या है?",
    "options_en": ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
    "options_hi": ["1 किमी/घंटा", "2 किमी/घंटा", "3 किमी/घंटा", "4 किमी/घंटा"],
    "answer_en": "2 km/h",
    "answer_hi": "2 किमी/घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In a certain code, 'COMPUTER' is written as 'RETUPMOC'. How is 'KEYBOARD' written in that code?",
    "question_hi": "एक निश्चित कूट में, 'COMPUTER' को 'RETUPMOC' लिखा जाता है। उसी कूट में 'KEYBOARD' को कैसे लिखा जाएगा?",
    "options_en": ["DRAOBYEK", "DRAOEYBK", "DRABOYEK", "DRAOBYKE"],
    "options_hi": ["DRAOBYEK", "DRAOEYBK", "DRABOYEK", "DRAOBYKE"],
    "answer_en": "DRAOBYEK",
    "answer_hi": "DRAOBYEK",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "A sum of money becomes 5 times in 8 years at simple interest. In how many years will it become 9 times?",
    "question_hi": "एक धनराशि साधारण ब्याज पर 8 वर्षों में 5 गुना हो जाती है। कितने वर्षों में यह 9 गुना हो जाएगी?",
    "options_en": ["16 years", "18 years", "20 years", "24 years"],
    "options_hi": ["16 वर्ष", "18 वर्ष", "20 वर्ष", "24 वर्ष"],
    "answer_en": "16 years",
    "answer_hi": "16 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "If the radius of a sphere is increased by 20%, what is the percentage increase in its volume?",
    "question_hi": "यदि एक गोले की त्रिज्या 20% बढ़ा दी जाती है, तो उसके आयतन में कितने प्रतिशत की वृद्धि होगी?",
    "options_en": ["44%", "60%", "72.8%", "82.8%"],
    "options_hi": ["44%", "60%", "72.8%", "82.8%"],
    "answer_en": "72.8%",
    "answer_hi": "72.8%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "A, B, and C can complete a work in 12, 15, and 20 days respectively. They started together but A left after 4 days. In how many days will B and C complete the remaining work?",
    "question_hi": "A, B और C एक कार्य को क्रमशः 12, 15 और 20 दिनों में पूरा कर सकते हैं। उन्होंने एक साथ कार्य शुरू किया लेकिन A ने 4 दिन बाद कार्य छोड़ दिया। B और C शेष कार्य को कितने दिनों में पूरा करेंगे?",
    "options_en": ["4 days", "5 days", "6 days", "7 days"],
    "options_hi": ["4 दिन", "5 दिन", "6 दिन", "7 दिन"],
    "answer_en": "5 days",
    "answer_hi": "5 दिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Find the missing number in the series: 5, 11, 23, 47, 95, ?",
    "question_hi": "श्रृंखला में लुप्त संख्या ज्ञात करें: 5, 11, 23, 47, 95, ?",
    "options_en": ["191", "189", "187", "185"],
    "options_hi": ["191", "189", "187", "185"],
    "answer_en": "191",
    "answer_hi": "191",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The average of 11 numbers is 30. If the average of first six numbers is 28 and the average of last six numbers is 32, what is the sixth number?",
    "question_hi": "11 संख्याओं का औसत 30 है। यदि पहली छह संख्याओं का औसत 28 है और अंतिम छह संख्याओं का औसत 32 है, तो छठी संख्या क्या है?",
    "options_en": ["30", "32", "34", "36"],
    "options_hi": ["30", "32", "34", "36"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If x + 1/x = 3, what is the value of x³ + 1/x³?",
    "question_hi": "यदि x + 1/x = 3, तो x³ + 1/x³ का मान क्या है?",
    "options_en": ["18", "20", "22", "24"],
    "options_hi": ["18", "20", "22", "24"],
    "answer_en": "18",
    "answer_hi": "18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "A mixture contains milk and water in the ratio 5:3. If 16 liters of water is added, the ratio becomes 5:5. What is the initial quantity of milk?",
    "question_hi": "एक मिश्रण में दूध और पानी का अनुपात 5:3 है। यदि 16 लीटर पानी मिलाया जाता है, तो अनुपात 5:5 हो जाता है। दूध की प्रारंभिक मात्रा क्या है?",
    "options_en": ["20 liters", "25 liters", "30 liters", "40 liters"],
    "options_hi": ["20 लीटर", "25 लीटर", "30 लीटर", "40 लीटर"],
    "answer_en": "40 liters",
    "answer_hi": "40 लीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "In an examination, 65% of students passed in Mathematics, 70% passed in Science, and 10% failed in both subjects. If 300 students passed in both subjects, how many students appeared in the exam?",
    "question_hi": "एक परीक्षा में, 65% छात्र गणित में उत्तीर्ण हुए, 70% छात्र विज्ञान में उत्तीर्ण हुए, और 10% दोनों विषयों में अनुत्तीर्ण हुए। यदि 300 छात्र दोनों विषयों में उत्तीर्ण हुए, तो परीक्षा में कितने छात्र शामिल हुए?",
    "options_en": ["500", "600", "700", "800"],
    "options_hi": ["500", "600", "700", "800"],
    "answer_en": "600",
    "answer_hi": "600",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If 2^x = 3^y = 6^z, what is the value of 1/x + 1/y?",
    "question_hi": "यदि 2^x = 3^y = 6^z, तो 1/x + 1/y का मान क्या है?",
    "options_en": ["1/z", "2/z", "3/z", "4/z"],
    "options_hi": ["1/z", "2/z", "3/z", "4/z"],
    "answer_en": "1/z",
    "answer_hi": "1/z",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "A man walks 10 km North, then turns right and walks 5 km, then turns left and walks 10 km. How far is he from his starting point?",
    "question_hi": "एक व्यक्ति 10 किमी उत्तर की ओर चलता है, फिर दाएं मुड़ता है और 5 किमी चलता है, फिर बाएं मुड़ता है और 10 किमी चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूर है?",
    "options_en": ["5√5 km", "10 km", "15 km", "20 km"],
    "options_hi": ["5√5 किमी", "10 किमी", "15 किमी", "20 किमी"],
    "answer_en": "5√5 km",
    "answer_hi": "5√5 किमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The ratio of ages of A and B is 3:5. After 10 years, the ratio becomes 5:7. What is the present age of A?",
    "question_hi": "A और B की आयु का अनुपात 3:5 है। 10 वर्ष बाद, अनुपात 5:7 हो जाता है। A की वर्तमान आयु क्या है?",
    "options_en": ["15 years", "20 years", "25 years", "30 years"],
    "options_hi": ["15 वर्ष", "20 वर्ष", "25 वर्ष", "30 वर्ष"],
    "answer_en": "15 years",
    "answer_hi": "15 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If the diagonal of a cube is 6√3 cm, what is its volume?",
    "question_hi": "यदि एक घन का विकर्ण 6√3 सेमी है, तो उसका आयतन क्या है?",
    "options_en": ["64 cm³", "125 cm³", "216 cm³", "343 cm³"],
    "options_hi": ["64 सेमी³", "125 सेमी³", "216 सेमी³", "343 सेमी³"],
    "answer_en": "216 cm³",
    "answer_hi": "216 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Find the odd one out: 331, 482, 551, 263, 383, 242",
    "question_hi": "विषम पद ज्ञात करें: 331, 482, 551, 263, 383, 242",
    "options_en": ["331", "482", "383", "242"],
    "options_hi": ["331", "482", "383", "242"],
    "answer_en": "383",
    "answer_hi": "383",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "A shopkeeper marks his goods 40% above cost price but allows 15% discount. What is his profit percentage?",
    "question_hi": "एक दुकानदार अपने सामान पर क्रय मूल्य से 40% अधिक अंकित करता है लेकिन 15% की छूट देता है। उसका लाभ प्रतिशत क्या है?",
    "options_en": ["19%", "20%", "21%", "22%"],
    "options_hi": ["19%", "20%", "21%", "22%"],
    "answer_en": "19%",
    "answer_hi": "19%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If sinθ + cosθ = √2, what is the value of tanθ + cotθ?",
    "question_hi": "यदि sinθ + cosθ = √2, तो tanθ + cotθ का मान क्या है?",
    "options_en": ["1", "2", "√2", "2√2"],
    "options_hi": ["1", "2", "√2", "2√2"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Three pipes A, B, and C can fill a tank in 12, 15, and 20 hours respectively. If all three are opened together, but after 3 hours, C is closed, in how many hours will the tank be filled?",
    "question_hi": "तीन पाइप A, B और C एक टंकी को क्रमशः 12, 15 और 20 घंटे में भर सकते हैं। यदि तीनों को एक साथ खोला जाता है, लेकिन 3 घंटे बाद C को बंद कर दिया जाता है, तो टंकी कितने घंटे में भर जाएगी?",
    "options_en": ["6 hours", "7 hours", "8 hours", "9 hours"],
    "options_hi": ["6 घंटे", "7 घंटे", "8 घंटे", "9 घंटे"],
    "answer_en": "7 hours",
    "answer_hi": "7 घंटे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the unit digit of 7^95 - 3^58?",
    "question_hi": "7^95 - 3^58 का इकाई अंक क्या है?",
    "options_en": ["0", "2", "4", "6"],
    "options_hi": ["0", "2", "4", "6"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The area of a rhombus is 120 cm² and one diagonal is 16 cm. What is the length of the other diagonal?",
    "question_hi": "एक समचतुर्भुज का क्षेत्रफल 120 सेमी² है और एक विकर्ण 16 सेमी है। दूसरे विकर्ण की लंबाई क्या है?",
    "options_en": ["12 cm", "14 cm", "15 cm", "18 cm"],
    "options_hi": ["12 सेमी", "14 सेमी", "15 सेमी", "18 सेमी"],
    "answer_en": "15 cm",
    "answer_hi": "15 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If log₂(x) + log₄(x) + log₁₆(x) = 7, what is the value of x?",
    "question_hi": "यदि log₂(x) + log₄(x) + log₁₆(x) = 7, तो x का मान क्या है?",
    "options_en": ["8", "16", "32", "64"],
    "options_hi": ["8", "16", "32", "64"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "A train 150 m long passes a pole in 5 seconds and passes another train of same length moving in opposite direction in 8 seconds. What is the speed of the second train?",
    "question_hi": "150 मीटर लंबी एक ट्रेन एक खंभे को 5 सेकंड में पार करती है और विपरीत दिशा में चल रही समान लंबाई की दूसरी ट्रेन को 8 सेकंड में पार करती है। दूसरी ट्रेन की गति क्या है?",
    "options_en": ["54 km/h", "72 km/h", "90 km/h", "108 km/h"],
    "options_hi": ["54 किमी/घंटा", "72 किमी/घंटा", "90 किमी/घंटा", "108 किमी/घंटा"],
    "answer_en": "54 km/h",
    "answer_hi": "54 किमी/घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The sum of three numbers is 98. If the ratio between first and second is 2:3 and between second and third is 5:8, what is the second number?",
    "question_hi": "तीन संख्याओं का योग 98 है। यदि पहली और दूसरी संख्या के बीच अनुपात 2:3 है और दूसरी और तीसरी संख्या के बीच अनुपात 5:8 है, तो दूसरी संख्या क्या है?",
    "options_en": ["20", "30", "40", "50"],
    "options_hi": ["20", "30", "40", "50"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "If a + b + c = 0, what is the value of a²/bc + b²/ca + c²/ab?",
    "question_hi": "यदि a + b + c = 0, तो a²/bc + b²/ca + c²/ab का मान क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "From a deck of 52 cards, two cards are drawn at random. What is the probability that both are kings?",
    "question_hi": "52 पत्तों की एक गड्डी से, दो पत्ते यादृच्छिक रूप से निकाले जाते हैं। दोनों के राजा होने की प्रायिकता क्या है?",
    "options_en": ["1/221", "1/169", "1/26", "1/13"],
    "options_hi": ["1/221", "1/169", "1/26", "1/13"],
    "answer_en": "1/221",
    "answer_hi": "1/221",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The difference between compound interest and simple interest on a sum of money for 2 years at 10% per annum is Rs. 100. What is the sum?",
    "question_hi": "एक धनराशि पर 2 वर्षों के लिए 10% प्रति वर्ष की दर से चक्रवृद्धि ब्याज और साधारण ब्याज का अंतर 100 रुपये है। धनराशि क्या है?",
    "options_en": ["Rs. 5000", "Rs. 8000", "Rs. 10000", "Rs. 12000"],
    "options_hi": ["5000 रुपये", "8000 रुपये", "10000 रुपये", "12000 रुपये"],
    "answer_en": "Rs. 10000",
    "answer_hi": "10000 रुपये",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "If the selling price of 20 articles is equal to the cost price of 15 articles, what is the loss percentage?",
    "question_hi": "यदि 20 वस्तुओं का विक्रय मूल्य 15 वस्तुओं के क्रय मूल्य के बराबर है, तो हानि प्रतिशत क्या है?",
    "options_en": ["20%", "25%", "30%", "33.33%"],
    "options_hi": ["20%", "25%", "30%", "33.33%"],
    "answer_en": "25%",
    "answer_hi": "25%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The HCF of two numbers is 11 and their LCM is 616. If one number is 88, what is the other number?",
    "question_hi": "दो संख्याओं का महत्तम समापवर्तक 11 है और उनका लघुत्तम समापवर्त्य 616 है। यदि एक संख्या 88 है, तो दूसरी संख्या क्या है?",
    "options_en": ["66", "77", "99", "121"],
    "options_hi": ["66", "77", "99", "121"],
    "answer_en": "77",
    "answer_hi": "77",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "A can do a piece of work in 20 days, B in 30 days. They work together for 5 days and then B leaves. In how many days will A complete the remaining work?",
    "question_hi": "A एक कार्य को 20 दिनों में, B 30 दिनों में कर सकता है। वे 5 दिनों तक एक साथ कार्य करते हैं और फिर B कार्य छोड़ देता है। A शेष कार्य को कितने दिनों में पूरा करेगा?",
    "options_en": ["10 days", "11 days", "12 days", "13 days"],
    "options_hi": ["10 दिन", "11 दिन", "12 दिन", "13 दिन"],
    "answer_en": "11 days",
    "answer_hi": "11 दिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If the angles of a triangle are in the ratio 2:3:5, what type of triangle is it?",
    "question_hi": "यदि एक त्रिभुज के कोण 2:3:5 के अनुपात में हैं, तो यह किस प्रकार का त्रिभुज है?",
    "options_en": ["Acute angled", "Obtuse angled", "Right angled", "Equilateral"],
    "options_hi": ["न्यूनकोण", "अधिककोण", "समकोण", "समबाहु"],
    "answer_en": "Right angled",
    "answer_hi": "समकोण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the value of √(6 + √(6 + √(6 + ...)))?",
    "question_hi": "√(6 + √(6 + √(6 + ...))) का मान क्या है?",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "A man sells two horses for Rs. 4000 each, gaining 20% on one and losing 20% on the other. What is his overall gain or loss percentage?",
    "question_hi": "एक व्यक्ति दो घोड़ों को 4000-4000 रुपये में बेचता है, एक पर 20% लाभ और दूसरे पर 20% हानि होती है। उसका कुल लाभ या हानि प्रतिशत क्या है?",
    "options_en": ["4% gain", "4% loss", "No gain no loss", "2% loss"],
    "options_hi": ["4% लाभ", "4% हानि", "न लाभ न हानि", "2% हानि"],
    "answer_en": "4% loss",
    "answer_hi": "4% हानि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The sum of first 20 terms of an arithmetic progression is 400 and the sum of first 40 terms is 1600. What is the first term?",
    "question_hi": "एक समांतर श्रेणी के पहले 20 पदों का योग 400 है और पहले 40 पदों का योग 1600 है। पहला पद क्या है?",
    "options_en": ["0", "2", "4", "6"],
    "options_hi": ["0", "2", "4", "6"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "If 3 men or 4 women can do a piece of work in 60 days, how many days will 6 men and 8 women take to complete the same work?",
    "question_hi": "यदि 3 पुरुष या 4 महिलाएं एक कार्य को 60 दिनों में कर सकते हैं, तो 6 पुरुष और 8 महिलाएं उसी कार्य को कितने दिनों में पूरा करेंगे?",
    "options_en": ["12 days", "15 days", "18 days", "20 days"],
    "options_hi": ["12 दिन", "15 दिन", "18 दिन", "20 दिन"],
    "answer_en": "15 days",
    "answer_hi": "15 दिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the area of the largest circle that can be inscribed in a square of side 14 cm?",
    "question_hi": "14 सेमी भुजा वाले वर्ग में अंकित किए जा सकने वाले सबसे बड़े वृत्त का क्षेत्रफल क्या है?",
    "options_en": ["49π cm²", "98π cm²", "196π cm²", "154 cm²"],
    "options_hi": ["49π सेमी²", "98π सेमी²", "196π सेमी²", "154 सेमी²"],
    "answer_en": "49π cm²",
    "answer_hi": "49π सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "If (a - b) = 5 and ab = 14, what is the value of a³ - b³?",
    "question_hi": "यदि (a - b) = 5 और ab = 14, तो a³ - b³ का मान क्या है?",
    "options_en": ["125", "215", "235", "245"],
    "options_hi": ["125", "215", "235", "245"],
    "answer_en": "215",
    "answer_hi": "215",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "A clock gains 5 minutes in 24 hours. If it is set right at 10 AM on Monday, what will be the correct time when it shows 10:15 PM on Wednesday?",
    "question_hi": "एक घड़ी 24 घंटे में 5 मिनट आगे हो जाती है। यदि इसे सोमवार को सुबह 10 बजे सही सेट किया जाता है, तो बुधवार को रात 10:15 बजे घड़ी दिखाने पर सही समय क्या होगा?",
    "options_en": ["10:00 PM", "9:55 PM", "10:05 PM", "9:50 PM"],
    "options_hi": ["रात 10:00", "रात 9:55", "रात 10:05", "रात 9:50"],
    "answer_en": "9:55 PM",
    "answer_hi": "रात 9:55",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The speed of a boat in still water is 15 km/h. It goes 30 km upstream and returns downstream to the starting point in 4 hours 30 minutes. What is the speed of the stream?",
    "question_hi": "शांत जल में एक नाव की गति 15 किमी/घंटा है। यह 30 किमी धारा के प्रतिकूल जाती है और धारा के अनुकूल वापस शुरुआती बिंदु पर 4 घंटे 30 मिनट में लौटती है। धारा की गति क्या है?",
    "options_en": ["3 km/h", "5 km/h", "6 km/h", "8 km/h"],
    "options_hi": ["3 किमी/घंटा", "5 किमी/घंटा", "6 किमी/घंटा", "8 किमी/घंटा"],
    "answer_en": "5 km/h",
    "answer_hi": "5 किमी/घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Find the number of zeroes at the end of 125!",
    "question_hi": "125! के अंत में शून्यों की संख्या ज्ञात करें",
    "options_en": ["28", "30", "31", "32"],
    "options_hi": ["28", "30", "31", "32"],
    "answer_en": "31",
    "answer_hi": "31",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "If the perimeter of a rectangle is 34 cm and its diagonal is 13 cm, what is its area?",
    "question_hi": "यदि एक आयत का परिमाप 34 सेमी है और इसका विकर्ण 13 सेमी है, तो इसका क्षेत्रफल क्या है?",
    "options_en": ["60 cm²", "65 cm²", "70 cm²", "75 cm²"],
    "options_hi": ["60 सेमी²", "65 सेमी²", "70 सेमी²", "75 सेमी²"],
    "answer_en": "60 cm²",
    "answer_hi": "60 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the remainder when 7^100 is divided by 5?",
    "question_hi": "जब 7^100 को 5 से विभाजित किया जाता है तो शेषफल क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "A sphere of radius 3 cm is melted and recast into small spheres of radius 1 cm each. How many such small spheres can be made?",
    "question_hi": "3 सेमी त्रिज्या के एक गोले को पिघलाकर 1 सेमी त्रिज्या के छोटे गोले बनाए जाते हैं। ऐसे कितने छोटे गोले बनाए जा सकते हैं?",
    "options_en": ["9", "18", "27", "36"],
    "options_hi": ["9", "18", "27", "36"],
    "answer_en": "27",
    "answer_hi": "27",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "If A:B = 2:3, B:C = 4:5, C:D = 6:7, what is A:D?",
    "question_hi": "यदि A:B = 2:3, B:C = 4:5, C:D = 6:7, तो A:D क्या है?",
    "options_en": ["8:35", "16:35", "8:21", "16:21"],
    "options_hi": ["8:35", "16:35", "8:21", "16:21"],
    "answer_en": "16:35",
    "answer_hi": "16:35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "A train crosses a platform of length 250 m in 20 seconds and a pole in 10 seconds. What is the length of the train?",
    "question_hi": "एक ट्रेन 250 मीटर लंबे प्लेटफॉर्म को 20 सेकंड में और एक खंभे को 10 सेकंड में पार करती है। ट्रेन की लंबाई क्या है?",
    "options_en": ["150 m", "200 m", "250 m", "300 m"],
    "options_hi": ["150 मी", "200 मी", "250 मी", "300 मी"],
    "answer_en": "250 m",
    "answer_hi": "250 मी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The value of (1 - 1/2)(1 - 1/3)(1 - 1/4)...(1 - 1/100) is:",
    "question_hi": "(1 - 1/2)(1 - 1/3)(1 - 1/4)...(1 - 1/100) का मान है:",
    "options_en": ["1/100", "1/50", "1/99", "1/101"],
    "options_hi": ["1/100", "1/50", "1/99", "1/101"],
    "answer_en": "1/100",
    "answer_hi": "1/100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "A man invests Rs. 5000 at 10% compound interest for 2 years. At the end of 2 years, he adds Rs. 1000 to the amount and invests at 20% simple interest for 1 more year. What is the total amount at the end of 3 years?",
    "question_hi": "एक व्यक्ति 5000 रुपये 10% चक्रवृद्धि ब्याज पर 2 वर्षों के लिए निवेश करता है। 2 वर्षों के अंत में, वह राशि में 1000 रुपये जोड़ता है और 20% साधारण ब्याज पर 1 वर्ष के लिए निवेश करता है। 3 वर्षों के अंत में कुल राशि क्या है?",
    "options_en": ["Rs. 9240", "Rs. 9680", "Rs. 10120", "Rs. 10560"],
    "options_hi": ["9240 रुपये", "9680 रुपये", "10120 रुपये", "10560 रुपये"],
    "answer_en": "Rs. 9240",
    "answer_hi": "9240 रुपये",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If x = √5 + 2, what is the value of x + 1/x?",
    "question_hi": "यदि x = √5 + 2, तो x + 1/x का मान क्या है?",
    "options_en": ["√5", "2√5", "4", "2√5 - 4"],
    "options_hi": ["√5", "2√5", "4", "2√5 - 4"],
    "answer_en": "2√5",
    "answer_hi": "2√5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "In how many ways can the letters of the word 'MATHEMATICS' be arranged so that vowels always come together?",
    "question_hi": "'MATHEMATICS' शब्द के अक्षरों को कितने तरीकों से व्यवस्थित किया जा सकता है ताकि स्वर हमेशा एक साथ आएं?",
    "options_en": ["100800", "120960", "151200", "181440"],
    "options_hi": ["100800", "120960", "151200", "181440"],
    "answer_en": "120960",
    "answer_hi": "120960",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "The ratio of incomes of A and B is 5:4 and the ratio of their expenditures is 3:2. If each saves Rs. 2000, what is A's income?",
    "question_hi": "A और B की आय का अनुपात 5:4 है और उनके व्यय का अनुपात 3:2 है। यदि प्रत्येक 2000 रुपये बचाता है, तो A की आय क्या है?",
    "options_en": ["Rs. 8000", "Rs. 9000", "Rs. 10000", "Rs. 12000"],
    "options_hi": ["8000 रुपये", "9000 रुपये", "10000 रुपये", "12000 रुपये"],
    "answer_en": "Rs. 10000",
    "answer_hi": "10000 रुपये",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "If the roots of the equation x² - 5x + k = 0 are in the ratio 2:3, what is the value of k?",
    "question_hi": "यदि समीकरण x² - 5x + k = 0 के मूल 2:3 के अनुपात में हैं, तो k का मान क्या है?",
    "options_en": ["2", "4", "6", "8"],
    "options_hi": ["2", "4", "6", "8"],
    "answer_en": "6",
    "answer_hi": "6",
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