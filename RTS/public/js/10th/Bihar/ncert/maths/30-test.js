const questions = [
  {
    "num": 1,
    "question_en": "Solve: 2x + 3y = 11, x - 2y = -3",
    "question_hi": "हल कीजिए: 2x + 3y = 11, x - 2y = -3",
    "options_en": ["x=1, y=3", "x=3, y=1", "x=2, y=2", "x=4, y=1"],
    "options_hi": ["x=1, y=3", "x=3, y=1", "x=2, y=2", "x=4, y=1"],
    "answer_en": "x=1, y=3",
    "answer_hi": "x=1, y=3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Find k if equations 3x + 2y = 5 and 6x + ky = 10 have infinite solutions.",
    "question_hi": "k ज्ञात करें यदि समीकरण 3x + 2y = 5 और 6x + ky = 10 के अनंत हल हैं।",
    "options_en": ["k=4", "k=5", "k=6", "k=3"],
    "options_hi": ["k=4", "k=5", "k=6", "k=3"],
    "answer_en": "k=4",
    "answer_hi": "k=4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Sum of two numbers is 35, difference is 13. Find numbers.",
    "question_hi": "दो संख्याओं का योग 35 है, अंतर 13 है। संख्याएँ ज्ञात करें।",
    "options_en": ["24,11", "23,12", "25,10", "26,9"],
    "options_hi": ["24,11", "23,12", "25,10", "26,9"],
    "answer_en": "24,11",
    "answer_hi": "24,11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Cost of 5 pens and 3 pencils is ₹50. Cost of 2 pens and 6 pencils is ₹40. Find pen cost.",
    "question_hi": "5 पेन और 3 पेंसिल का मूल्य ₹50 है। 2 पेन और 6 पेंसिल का मूल्य ₹40 है। पेन का मूल्य ज्ञात करें।",
    "options_en": ["₹8", "₹7", "₹6", "₹5"],
    "options_hi": ["₹8", "₹7", "₹6", "₹5"],
    "answer_en": "₹7",
    "answer_hi": "₹7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "A fraction becomes 3/5 if 2 is added to both numerator and denominator. If 3 is subtracted from both, it becomes 1/3. Find fraction.",
    "question_hi": "एक भिन्न 3/5 हो जाती है यदि अंश और हर में 2 जोड़ दें। यदि दोनों में से 3 घटा दें, तो 1/3 हो जाती है। भिन्न ज्ञात करें।",
    "options_en": ["5/9", "7/11", "4/7", "3/5"],
    "options_hi": ["5/9", "7/11", "4/7", "3/5"],
    "answer_en": "7/11",
    "answer_hi": "7/11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Father's age is 3 times son's age. After 12 years, father will be twice as old. Find son's present age.",
    "question_hi": "पिता की आयु पुत्र की आयु की 3 गुना है। 12 वर्ष बाद पिता की आयु पुत्र से दोगुनी होगी। पुत्र की वर्तमान आयु ज्ञात करें।",
    "options_en": ["12 years", "15 years", "18 years", "20 years"],
    "options_hi": ["12 वर्ष", "15 वर्ष", "18 वर्ष", "20 वर्ष"],
    "answer_en": "12 years",
    "answer_hi": "12 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "For what value of p will the equations 4x + 6y = 7 and 2x + py = 5 be parallel?",
    "question_hi": "p के किस मान के लिए समीकरण 4x + 6y = 7 और 2x + py = 5 समांतर होंगे?",
    "options_en": ["p=3", "p=4", "p=5", "p=6"],
    "options_hi": ["p=3", "p=4", "p=5", "p=6"],
    "answer_en": "p=3",
    "answer_hi": "p=3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Solve: 3x - 5y = 1, 9x - 2y = 7",
    "question_hi": "हल करें: 3x - 5y = 1, 9x - 2y = 7",
    "options_en": ["x=1, y=0.4", "x=2, y=1", "x=3, y=2", "x=0.5, y=0.2"],
    "options_hi": ["x=1, y=0.4", "x=2, y=1", "x=3, y=2", "x=0.5, y=0.2"],
    "answer_en": "x=0.5, y=0.2",
    "answer_hi": "x=0.5, y=0.2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Two numbers are in ratio 5:7. Their sum is 144. Find larger number.",
    "question_hi": "दो संख्याओं का अनुपात 5:7 है। उनका योग 144 है। बड़ी संख्या ज्ञात करें।",
    "options_en": ["84", "90", "72", "60"],
    "options_hi": ["84", "90", "72", "60"],
    "answer_en": "84",
    "answer_hi": "84",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Find k if equations kx + 3y = 8 and 6x + 9y = 24 have no solution.",
    "question_hi": "k ज्ञात करें यदि समीकरण kx + 3y = 8 और 6x + 9y = 24 का कोई हल नहीं है।",
    "options_en": ["k=2", "k=4", "k=6", "k=8"],
    "options_hi": ["k=2", "k=4", "k=6", "k=8"],
    "answer_en": "k=2",
    "answer_hi": "k=2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "A two-digit number is 4 more than 6 times sum of digits. If 18 is subtracted, digits reverse. Find number.",
    "question_hi": "एक दो अंकीय संख्या अंकों के योग के 6 गुने से 4 अधिक है। यदि 18 घटाया जाए, अंक उलट जाते हैं। संख्या ज्ञात करें।",
    "options_en": ["64", "42", "53", "74"],
    "options_hi": ["64", "42", "53", "74"],
    "answer_en": "64",
    "answer_hi": "64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "If 2x + 5y = 12 and 3x + 7y = 17, find x + y.",
    "question_hi": "यदि 2x + 5y = 12 और 3x + 7y = 17, तो x + y ज्ञात करें।",
    "options_en": ["4", "5", "6", "7"],
    "options_hi": ["4", "5", "6", "7"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Sum of ages of A and B is 45. Five years ago, A was twice B's age. Find A's present age.",
    "question_hi": "A और B की आयु का योग 45 है। पाँच वर्ष पहले, A की आयु B की दोगुनी थी। A की वर्तमान आयु ज्ञात करें।",
    "options_en": ["30 years", "35 years", "25 years", "40 years"],
    "options_hi": ["30 वर्ष", "35 वर्ष", "25 वर्ष", "40 वर्ष"],
    "answer_en": "30 years",
    "answer_hi": "30 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "If lines 5x + 2y = 8 and 10x + 4y = k are coincident, find k.",
    "question_hi": "यदि रेखाएँ 5x + 2y = 8 और 10x + 4y = k संपाती हैं, k ज्ञात करें।",
    "options_en": ["16", "18", "20", "24"],
    "options_hi": ["16", "18", "20", "24"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "A boat goes 15 km upstream and 22 km downstream in 5 hours. It also goes 20 km upstream and 33 km downstream in 7 hours. Find speed of stream.",
    "question_hi": "एक नाव धारा के विपरीत 15 किमी और धारा की दिशा में 22 किमी 5 घंटे में जाती है। यह धारा के विपरीत 20 किमी और धारा की दिशा में 33 किमी 7 घंटे में जाती है। धारा की गति ज्ञात करें।",
    "options_en": ["3 km/h", "4 km/h", "5 km/h", "2 km/h"],
    "options_hi": ["3 किमी/घं", "4 किमी/घं", "5 किमी/घं", "2 किमी/घं"],
    "answer_en": "3 km/h",
    "answer_hi": "3 किमी/घं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Solve: 7x - 2y = 11, 5x + y = 13",
    "question_hi": "हल करें: 7x - 2y = 11, 5x + y = 13",
    "options_en": ["x=3, y=2", "x=2, y=3", "x=1, y=8", "x=4, y=1"],
    "options_hi": ["x=3, y=2", "x=2, y=3", "x=1, y=8", "x=4, y=1"],
    "answer_en": "x=3, y=2",
    "answer_hi": "x=3, y=2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "For what k will equations 9x + 6y = 12 and 3x + 2y = k have infinite solutions?",
    "question_hi": "k के किस मान के लिए समीकरण 9x + 6y = 12 और 3x + 2y = k के अनंत हल होंगे?",
    "options_en": ["k=4", "k=3", "k=6", "k=2"],
    "options_hi": ["k=4", "k=3", "k=6", "k=2"],
    "answer_en": "k=4",
    "answer_hi": "k=4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Sum of two numbers is 50, product is 525. Find numbers.",
    "question_hi": "दो संख्याओं का योग 50 है, गुणनफल 525 है। संख्याएँ ज्ञात करें।",
    "options_en": ["35,15", "30,20", "25,25", "40,10"],
    "options_hi": ["35,15", "30,20", "25,25", "40,10"],
    "answer_en": "35,15",
    "answer_hi": "35,15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If 3x + 4y = 7 and 6x + 8y = 14, then system has:",
    "question_hi": "यदि 3x + 4y = 7 और 6x + 8y = 14, तो निकाय के होंगे:",
    "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
    "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
    "answer_en": "Infinite solutions",
    "answer_hi": "अनंत हल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "A person has ₹250 in ₹10 and ₹5 notes. If total notes are 35, find ₹10 notes count.",
    "question_hi": "एक व्यक्ति के पास ₹10 और ₹5 के नोटों में ₹250 है। यदि कुल नोट 35 हैं, तो ₹10 के नोटों की संख्या ज्ञात करें।",
    "options_en": ["15", "20", "25", "10"],
    "options_hi": ["15", "20", "25", "10"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Solve: x/2 + y/3 = 4, x - y/2 = 1",
    "question_hi": "हल करें: x/2 + y/3 = 4, x - y/2 = 1",
    "options_en": ["x=4, y=6", "x=6, y=8", "x=2, y=6", "x=3, y=12"],
    "options_hi": ["x=4, y=6", "x=6, y=8", "x=2, y=6", "x=3, y=12"],
    "answer_en": "x=4, y=6",
    "answer_hi": "x=4, y=6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "A train covers 400 km at uniform speed. If speed increased by 10 km/h, time reduces by 1 hour. Find original speed.",
    "question_hi": "एक ट्रेन एक समान गति से 400 किमी की दूरी तय करती है। यदि गति 10 किमी/घंटा बढ़ा दी जाए, समय 1 घंटा कम हो जाता है। मूल गति ज्ञात करें।",
    "options_en": ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    "options_hi": ["50 किमी/घं", "60 किमी/घं", "70 किमी/घं", "80 किमी/घं"],
    "answer_en": "50 km/h",
    "answer_hi": "50 किमी/घं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "If equations 2x + 3y = 5 and 4x + ky = 10 are inconsistent, find k.",
    "question_hi": "यदि समीकरण 2x + 3y = 5 और 4x + ky = 10 असंगत हैं, k ज्ञात करें।",
    "options_en": ["6", "5", "4", "3"],
    "options_hi": ["6", "5", "4", "3"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Two numbers differ by 20. Their sum is 80. Find smaller number.",
    "question_hi": "दो संख्याओं का अंतर 20 है। उनका योग 80 है। छोटी संख्या ज्ञात करें।",
    "options_en": ["30", "40", "50", "20"],
    "options_hi": ["30", "40", "50", "20"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Find k if lines 3x - 2y = 7 and kx + 4y = 5 are perpendicular.",
    "question_hi": "k ज्ञात करें यदि रेखाएँ 3x - 2y = 7 और kx + 4y = 5 परस्पर लंब हैं।",
    "options_en": ["k=8/3", "k=3", "k=2", "k=4"],
    "options_hi": ["k=8/3", "k=3", "k=2", "k=4"],
    "answer_en": "k=8/3",
    "answer_hi": "k=8/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Solve: 0.2x + 0.3y = 1.3, 0.4x + 0.5y = 2.3",
    "question_hi": "हल करें: 0.2x + 0.3y = 1.3, 0.4x + 0.5y = 2.3",
    "options_en": ["x=2, y=3", "x=3, y=2", "x=4, y=1", "x=1, y=4"],
    "options_hi": ["x=2, y=3", "x=3, y=2", "x=4, y=1", "x=1, y=4"],
    "answer_en": "x=2, y=3",
    "answer_hi": "x=2, y=3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Sum of digits of a two-digit number is 10. If 18 is added, digits interchange. Find number.",
    "question_hi": "दो अंकीय संख्या के अंकों का योग 10 है। यदि 18 जोड़ दिया जाए, अंक उलट जाते हैं। संख्या ज्ञात करें।",
    "options_en": ["46", "64", "37", "73"],
    "options_hi": ["46", "64", "37", "73"],
    "answer_en": "46",
    "answer_hi": "46",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "If 5x - 3y = 2 and 10x - 6y = k have no solution, find k.",
    "question_hi": "यदि 5x - 3y = 2 और 10x - 6y = k का कोई हल नहीं है, k ज्ञात करें।",
    "options_en": ["4", "5", "6", "7"],
    "options_hi": ["4", "5", "6", "7"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "A man is 30 years older than his son. In 10 years, he will be twice as old. Find son's age.",
    "question_hi": "एक व्यक्ति अपने पुत्र से 30 वर्ष बड़ा है। 10 वर्ष बाद वह पुत्र से दोगुना बड़ा होगा। पुत्र की आयु ज्ञात करें।",
    "options_en": ["20 years", "25 years", "30 years", "35 years"],
    "options_hi": ["20 वर्ष", "25 वर्ष", "30 वर्ष", "35 वर्ष"],
    "answer_en": "20 years",
    "answer_hi": "20 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Solve: 2(x+3) - 3(y-2) = 8, 5(x+1) + 4(y-1) = 27",
    "question_hi": "हल करें: 2(x+3) - 3(y-2) = 8, 5(x+1) + 4(y-1) = 27",
    "options_en": ["x=2, y=3", "x=3, y=2", "x=4, y=1", "x=1, y=4"],
    "options_hi": ["x=2, y=3", "x=3, y=2", "x=4, y=1", "x=1, y=4"],
    "answer_en": "x=2, y=3",
    "answer_hi": "x=2, y=3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Find k if lines 4x + ky = 7 and 8x + 12y = 14 are coincident.",
    "question_hi": "k ज्ञात करें यदि रेखाएँ 4x + ky = 7 और 8x + 12y = 14 संपाती हैं।",
    "options_en": ["k=6", "k=8", "k=10", "k=12"],
    "options_hi": ["k=6", "k=8", "k=10", "k=12"],
    "answer_en": "k=6",
    "answer_hi": "k=6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The perimeter of rectangle is 50 cm. Length is 5 cm more than breadth. Find area.",
    "question_hi": "आयत का परिमाप 50 सेमी है। लंबाई चौड़ाई से 5 सेमी अधिक है। क्षेत्रफल ज्ञात करें।",
    "options_en": ["150 cm²", "160 cm²", "140 cm²", "180 cm²"],
    "options_hi": ["150 सेमी²", "160 सेमी²", "140 सेमी²", "180 सेमी²"],
    "answer_en": "150 cm²",
    "answer_hi": "150 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "If 8x + 5y = 9 and 16x + 10y = k have infinite solutions, find k.",
    "question_hi": "यदि 8x + 5y = 9 और 16x + 10y = k के अनंत हल हैं, k ज्ञात करें।",
    "options_en": ["18", "20", "22", "24"],
    "options_hi": ["18", "20", "22", "24"],
    "answer_en": "18",
    "answer_hi": "18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Sum of two numbers is 17, sum of their squares is 145. Find numbers.",
    "question_hi": "दो संख्याओं का योग 17 है, उनके वर्गों का योग 145 है। संख्याएँ ज्ञात करें।",
    "options_en": ["8 and 9", "7 and 10", "6 and 11", "5 and 12"],
    "options_hi": ["8 और 9", "7 और 10", "6 और 11", "5 और 12"],
    "answer_en": "8 and 9",
    "answer_hi": "8 और 9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "A chemist mixes 20% acid and 50% acid to get 40% acid solution of 100 L. Find quantity of 20% acid.",
    "question_hi": "एक रसायनज्ञ 20% अम्ल और 50% अम्ल मिलाकर 100 लीटर 40% अम्ल विलयन बनाता है। 20% अम्ल की मात्रा ज्ञात करें।",
    "options_en": ["33.33 L", "40 L", "50 L", "60 L"],
    "options_hi": ["33.33 ली", "40 ली", "50 ली", "60 ली"],
    "answer_en": "33.33 L",
    "answer_hi": "33.33 ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Solve: 3x + 4y = 10, 2x - y = 3",
    "question_hi": "हल करें: 3x + 4y = 10, 2x - y = 3",
    "options_en": ["x=2, y=1", "x=1, y=2", "x=3, y=0", "x=0, y=2.5"],
    "options_hi": ["x=2, y=1", "x=1, y=2", "x=3, y=0", "x=0, y=2.5"],
    "answer_en": "x=2, y=1",
    "answer_hi": "x=2, y=1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "If the system 7x + ky = 21 and 14x + 2y = 42 has infinite solutions, find k.",
    "question_hi": "यदि निकाय 7x + ky = 21 और 14x + 2y = 42 के अनंत हल हैं, k ज्ञात करें।",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "A two-digit number is 5 times sum of its digits. If 9 is added, digits reverse. Find number.",
    "question_hi": "एक दो अंकीय संख्या अपने अंकों के योग का 5 गुना है। यदि 9 जोड़ दिया जाए, अंक उलट जाते हैं। संख्या ज्ञात करें।",
    "options_en": ["45", "54", "36", "63"],
    "options_hi": ["45", "54", "36", "63"],
    "answer_en": "45",
    "answer_hi": "45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If lines ax + 2y = 5 and 3x + by = 10 are coincident, find a:b.",
    "question_hi": "यदि रेखाएँ ax + 2y = 5 और 3x + by = 10 संपाती हैं, a:b ज्ञात करें।",
    "options_en": ["3:2", "2:3", "1:2", "2:1"],
    "options_hi": ["3:2", "2:3", "1:2", "2:1"],
    "answer_en": "3:2",
    "answer_hi": "3:2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Solve: 2/x + 3/y = 13, 5/x - 4/y = -2",
    "question_hi": "हल करें: 2/x + 3/y = 13, 5/x - 4/y = -2",
    "options_en": ["x=1/2, y=1/3", "x=1, y=1", "x=2, y=3", "x=3, y=2"],
    "options_hi": ["x=1/2, y=1/3", "x=1, y=1", "x=2, y=3", "x=3, y=2"],
    "answer_en": "x=1/2, y=1/3",
    "answer_hi": "x=1/2, y=1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "A train travels 300 km at speed x km/h. If speed increased by 5 km/h, time reduces by 1 hour. Find x.",
    "question_hi": "एक ट्रेन x किमी/घंटा की गति से 300 किमी जाती है। यदि गति 5 किमी/घंटा बढ़ा दी जाए, समय 1 घंटा कम हो जाता है। x ज्ञात करें।",
    "options_en": ["25", "30", "20", "35"],
    "options_hi": ["25", "30", "20", "35"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "If 6x - 5y = 1 and 12x - 10y = k have no solution, find k.",
    "question_hi": "यदि 6x - 5y = 1 और 12x - 10y = k का कोई हल नहीं है, k ज्ञात करें।",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Sum of reciprocals of two numbers is 7/10. Their sum is 10. Find numbers.",
    "question_hi": "दो संख्याओं के व्युत्क्रमों का योग 7/10 है। उनका योग 10 है। संख्याएँ ज्ञात करें।",
    "options_en": ["4,6", "3,7", "2,8", "5,5"],
    "options_hi": ["4,6", "3,7", "2,8", "5,5"],
    "answer_en": "4,6",
    "answer_hi": "4,6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Solve: 3x + 2y = 8, 6x + 4y = 16",
    "question_hi": "हल करें: 3x + 2y = 8, 6x + 4y = 16",
    "options_en": ["Infinite solutions", "No solution", "Unique solution x=2,y=1", "x=1,y=2.5"],
    "options_hi": ["अनंत हल", "कोई हल नहीं", "अद्वितीय हल x=2,y=1", "x=1,y=2.5"],
    "answer_en": "Infinite solutions",
    "answer_hi": "अनंत हल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "A man gave ₹550 to his two sons. One got ₹50 more than other. Find smaller share.",
    "question_hi": "एक व्यक्ति ने अपने दो बेटों को ₹550 दिए। एक को दूसरे से ₹50 अधिक मिले। छोटा हिस्सा ज्ञात करें।",
    "options_en": ["₹250", "₹300", "₹200", "₹350"],
    "options_hi": ["₹250", "₹300", "₹200", "₹350"],
    "answer_en": "₹250",
    "answer_hi": "₹250",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "If 9x + 4y = 15 and 18x + 8y = k are inconsistent, find k.",
    "question_hi": "यदि 9x + 4y = 15 और 18x + 8y = k असंगत हैं, k ज्ञात करें।",
    "options_en": ["30", "25", "20", "35"],
    "options_hi": ["30", "25", "20", "35"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Two angles are supplementary. One is 20° more than other. Find smaller angle.",
    "question_hi": "दो कोण संपूरक हैं। एक दूसरे से 20° अधिक है। छोटा कोण ज्ञात करें।",
    "options_en": ["80°", "70°", "60°", "50°"],
    "options_hi": ["80°", "70°", "60°", "50°"],
    "answer_en": "80°",
    "answer_hi": "80°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Solve: 5x - 4y = 17, 3x + 2y = 5",
    "question_hi": "हल करें: 5x - 4y = 17, 3x + 2y = 5",
    "options_en": ["x=3, y=-2", "x=2, y=1", "x=1, y=1", "x=4, y=1"],
    "options_hi": ["x=3, y=-2", "x=2, y=1", "x=1, y=1", "x=4, y=1"],
    "answer_en": "x=3, y=-2",
    "answer_hi": "x=3, y=-2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "If lines 2x + 5y = 7 and 4x + ky = 14 are parallel, find k.",
    "question_hi": "यदि रेखाएँ 2x + 5y = 7 और 4x + ky = 14 समांतर हैं, k ज्ञात करें।",
    "options_en": ["10", "12", "14", "15"],
    "options_hi": ["10", "12", "14", "15"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "A two-digit number is 3 times sum of digits. If 27 is subtracted, digits reverse. Find number.",
    "question_hi": "एक दो अंकीय संख्या अंकों के योग की 3 गुना है। यदि 27 घटाया जाए, अंक उलट जाते हैं। संख्या ज्ञात करें।",
    "options_en": ["63", "36", "54", "45"],
    "options_hi": ["63", "36", "54", "45"],
    "answer_en": "63",
    "answer_hi": "63",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "If the lines 7x + 3y = 10 and 14x + ky = 20 are coincident, find k.",
    "question_hi": "यदि रेखाएँ 7x + 3y = 10 और 14x + ky = 20 संपाती हैं, तो k ज्ञात कीजिए।",
    "options_en": ["6", "7", "8", "9"],
    "options_hi": ["6", "7", "8", "9"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "A number consists of two digits. Sum of digits is 12. If 36 is added, digits interchange. Find the number.",
    "question_hi": "एक संख्या दो अंकों से मिलकर बनी है। अंकों का योग 12 है। यदि 36 जोड़ दिया जाए, तो अंक उलट जाते हैं। संख्या ज्ञात कीजिए।",
    "options_en": ["48", "57", "75", "84"],
    "options_hi": ["48", "57", "75", "84"],
    "answer_en": "48",
    "answer_hi": "48",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Solve: 3x + 2y = 7, 6x + 4y = 14",
    "question_hi": "हल कीजिए: 3x + 2y = 7, 6x + 4y = 14",
    "options_en": ["Infinite solutions", "No solution", "x=1, y=2", "x=2, y=0.5"],
    "options_hi": ["अनंत हल", "कोई हल नहीं", "x=1, y=2", "x=2, y=0.5"],
    "answer_en": "Infinite solutions",
    "answer_hi": "अनंत हल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Two complementary angles differ by 10°. Find the larger angle.",
    "question_hi": "दो पूरक कोणों में 10° का अंतर है। बड़ा कोण ज्ञात कीजिए।",
    "options_en": ["50°", "55°", "60°", "65°"],
    "options_hi": ["50°", "55°", "60°", "65°"],
    "answer_en": "50°",
    "answer_hi": "50°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "For what value of m, the equations 4x + 5y = 8 and 8x + my = 16 have infinite solutions?",
    "question_hi": "m के किस मान के लिए समीकरण 4x + 5y = 8 और 8x + my = 16 के अनंत हल होंगे?",
    "options_en": ["10", "8", "12", "14"],
    "options_hi": ["10", "8", "12", "14"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "A rectangle's length is 5 m more than its breadth. Perimeter is 50 m. Find area.",
    "question_hi": "एक आयत की लंबाई उसकी चौड़ाई से 5 मीटर अधिक है। परिमाप 50 मीटर है। क्षेत्रफल ज्ञात कीजिए।",
    "options_en": ["150 m²", "175 m²", "200 m²", "225 m²"],
    "options_hi": ["150 मी²", "175 मी²", "200 मी²", "225 मी²"],
    "answer_en": "150 m²",
    "answer_hi": "150 मी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Solve: 5x - 2y = 8, 3x + 4y = 10",
    "question_hi": "हल कीजिए: 5x - 2y = 8, 3x + 4y = 10",
    "options_en": ["x=2, y=1", "x=3, y=2", "x=1, y=1.5", "x=4, y=2"],
    "options_hi": ["x=2, y=1", "x=3, y=2", "x=1, y=1.5", "x=4, y=2"],
    "answer_en": "x=2, y=1",
    "answer_hi": "x=2, y=1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "If the system 2x + 3y = 7 and 4x + 6y = k has no solution, then k equals:",
    "question_hi": "यदि निकाय 2x + 3y = 7 और 4x + 6y = k का कोई हल नहीं है, तो k बराबर है:",
    "options_en": ["14", "12", "10", "8"],
    "options_hi": ["14", "12", "10", "8"],
    "answer_en": "14",
    "answer_hi": "14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Sum of two numbers is 25. One number is 5 more than the other. Find the smaller number.",
    "question_hi": "दो संख्याओं का योग 25 है। एक संख्या दूसरी से 5 अधिक है। छोटी संख्या ज्ञात कीजिए।",
    "options_en": ["10", "12", "15", "8"],
    "options_hi": ["10", "12", "15", "8"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Find k if the lines 9x + ky = 18 and 3x + 2y = 6 are coincident.",
    "question_hi": "k ज्ञात कीजिए यदि रेखाएँ 9x + ky = 18 और 3x + 2y = 6 संपाती हैं।",
    "options_en": ["6", "8", "10", "12"],
    "options_hi": ["6", "8", "10", "12"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "A fraction becomes 1/2 when 2 is subtracted from numerator and 3 added to denominator. If 1 is added to numerator and 1 subtracted from denominator, it becomes 2/3. Find fraction.",
    "question_hi": "एक भिन्न 1/2 हो जाती है जब अंश में से 2 घटाया जाता है और हर में 3 जोड़ा जाता है। यदि अंश में 1 जोड़ा जाए और हर में से 1 घटाया जाए, तो यह 2/3 हो जाती है। भिन्न ज्ञात कीजिए।",
    "options_en": ["5/7", "3/5", "4/9", "6/11"],
    "options_hi": ["5/7", "3/5", "4/9", "6/11"],
    "answer_en": "5/7",
    "answer_hi": "5/7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Solve: 0.5x + 0.2y = 2.4, 0.3x + 0.4y = 2.6",
    "question_hi": "हल कीजिए: 0.5x + 0.2y = 2.4, 0.3x + 0.4y = 2.6",
    "options_en": ["x=4, y=2", "x=3, y=5", "x=2, y=7", "x=5, y=1"],
    "options_hi": ["x=4, y=2", "x=3, y=5", "x=2, y=7", "x=5, y=1"],
    "answer_en": "x=4, y=2",
    "answer_hi": "x=4, y=2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "If 8x - 3y = 5 and 16x - 6y = k are inconsistent, then k is:",
    "question_hi": "यदि 8x - 3y = 5 और 16x - 6y = k असंगत हैं, तो k है:",
    "options_en": ["10", "8", "12", "14"],
    "options_hi": ["10", "8", "12", "14"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "A two-digit number is 7 times the sum of its digits. If 27 is subtracted, digits reverse. Find number.",
    "question_hi": "एक दो-अंकीय संख्या अपने अंकों के योग का 7 गुना है। यदि 27 घटाया जाता है, तो अंक उलट जाते हैं। संख्या ज्ञात कीजिए।",
    "options_en": ["63", "42", "84", "21"],
    "options_hi": ["63", "42", "84", "21"],
    "answer_en": "63",
    "answer_hi": "63",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "For what value of p will equations 6x + 4y = 12 and 3x + 2y = p have infinite solutions?",
    "question_hi": "p के किस मान के लिए समीकरण 6x + 4y = 12 और 3x + 2y = p के अनंत हल होंगे?",
    "options_en": ["6", "8", "10", "12"],
    "options_hi": ["6", "8", "10", "12"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Solve: 4(x+2) - 3(y-1) = 17, 2(x-1) + 5(y+2) = 21",
    "question_hi": "हल कीजिए: 4(x+2) - 3(y-1) = 17, 2(x-1) + 5(y+2) = 21",
    "options_en": ["x=3, y=2", "x=2, y=1", "x=4, y=3", "x=1, y=4"],
    "options_hi": ["x=3, y=2", "x=2, y=1", "x=4, y=3", "x=1, y=4"],
    "answer_en": "x=2, y=1",
    "answer_hi": "x=2, y=1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "A boat goes 12 km upstream and 18 km downstream in 3 hours. It also goes 16 km upstream and 24 km downstream in 4 hours. Find speed of boat in still water.",
    "question_hi": "एक नाव धारा के विपरीत 12 किमी और धारा की दिशा में 18 किमी 3 घंटे में जाती है। यह धारा के विपरीत 16 किमी और धारा की दिशा में 24 किमी 4 घंटे में जाती है। शांत जल में नाव की गति ज्ञात कीजिए।",
    "options_en": ["10 km/h", "12 km/h", "14 km/h", "8 km/h"],
    "options_hi": ["10 किमी/घं", "12 किमी/घं", "14 किमी/घं", "8 किमी/घं"],
    "answer_en": "10 km/h",
    "answer_hi": "10 किमी/घं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "If lines 5x + 2y = 8 and 10x + 4y = k are parallel, find k.",
    "question_hi": "यदि रेखाएँ 5x + 2y = 8 और 10x + 4y = k समांतर हैं, तो k ज्ञात कीजिए।",
    "options_en": ["16", "14", "12", "10"],
    "options_hi": ["16", "14", "12", "10"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "A man is 40 years older than his son. In 5 years, he will be 3 times as old. Find son's present age.",
    "question_hi": "एक व्यक्ति अपने पुत्र से 40 वर्ष बड़ा है। 5 वर्ष बाद, वह पुत्र से 3 गुना बड़ा होगा। पुत्र की वर्तमान आयु ज्ञात कीजिए।",
    "options_en": ["15 years", "20 years", "25 years", "10 years"],
    "options_hi": ["15 वर्ष", "20 वर्ष", "25 वर्ष", "10 वर्ष"],
    "answer_en": "15 years",
    "answer_hi": "15 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Solve: 2x + 7y = 19, 5x + 3y = 14",
    "question_hi": "हल कीजिए: 2x + 7y = 19, 5x + 3y = 14",
    "options_en": ["x=1, y=3", "x=2, y=2", "x=3, y=1", "x=4, y=0"],
    "options_hi": ["x=1, y=3", "x=2, y=2", "x=3, y=1", "x=4, y=0"],
    "answer_en": "x=1, y=3",
    "answer_hi": "x=1, y=3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "For what value of a, the equations 2x + 3y = 7 and ax + 6y = 14 have infinite solutions?",
    "question_hi": "a के किस मान के लिए समीकरण 2x + 3y = 7 और ax + 6y = 14 के अनंत हल होंगे?",
    "options_en": ["4", "5", "6", "7"],
    "options_hi": ["4", "5", "6", "7"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Sum of two numbers is 30. Their product is 216. Find numbers.",
    "question_hi": "दो संख्याओं का योग 30 है। उनका गुणनफल 216 है। संख्याएँ ज्ञात कीजिए।",
    "options_en": ["12,18", "10,20", "15,15", "14,16"],
    "options_hi": ["12,18", "10,20", "15,15", "14,16"],
    "answer_en": "12,18",
    "answer_hi": "12,18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "If the system 3x + 4y = 12 and 6x + 8y = k has no solution, then k is:",
    "question_hi": "यदि निकाय 3x + 4y = 12 और 6x + 8y = k का कोई हल नहीं है, तो k है:",
    "options_en": ["24", "20", "18", "16"],
    "options_hi": ["24", "20", "18", "16"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "A two-digit number is equal to 4 times sum of its digits plus 3. If 18 is added, digits reverse. Find number.",
    "question_hi": "एक दो-अंकीय संख्या अपने अंकों के योग के 4 गुने से 3 अधिक है। यदि 18 जोड़ा जाता है, तो अंक उलट जाते हैं। संख्या ज्ञात कीजिए।",
    "options_en": ["35", "47", "53", "62"],
    "options_hi": ["35", "47", "53", "62"],
    "answer_en": "35",
    "answer_hi": "35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Solve: 6x - 5y = 13, 4x + 3y = 7",
    "question_hi": "हल कीजिए: 6x - 5y = 13, 4x + 3y = 7",
    "options_en": ["x=2, y=-1", "x=3, y=2", "x=1, y=1", "x=4, y=3"],
    "options_hi": ["x=2, y=-1", "x=3, y=2", "x=1, y=1", "x=4, y=3"],
    "answer_en": "x=2, y=-1",
    "answer_hi": "x=2, y=-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Find k if lines kx + 2y = 5 and 3x + 4y = 10 are coincident.",
    "question_hi": "k ज्ञात कीजिए यदि रेखाएँ kx + 2y = 5 और 3x + 4y = 10 संपाती हैं।",
    "options_en": ["1.5", "2", "2.5", "3"],
    "options_hi": ["1.5", "2", "2.5", "3"],
    "answer_en": "1.5",
    "answer_hi": "1.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "A fraction becomes 2/5 when 3 is subtracted from numerator and 2 added to denominator. If 1 is added to numerator and 1 subtracted from denominator, it becomes 1/2. Find fraction.",
    "question_hi": "एक भिन्न 2/5 हो जाती है जब अंश में से 3 घटाया जाता है और हर में 2 जोड़ा जाता है। यदि अंश में 1 जोड़ा जाए और हर में से 1 घटाया जाए, तो यह 1/2 हो जाती है। भिन्न ज्ञात कीजिए।",
    "options_en": ["7/13", "5/11", "9/17", "11/19"],
    "options_hi": ["7/13", "5/11", "9/17", "11/19"],
    "answer_en": "7/13",
    "answer_hi": "7/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "If 4x + 3y = 18 and 8x + 6y = 36, then the system has:",
    "question_hi": "यदि 4x + 3y = 18 और 8x + 6y = 36, तो निकाय के होंगे:",
    "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
    "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
    "answer_en": "Infinite solutions",
    "answer_hi": "अनंत हल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "The sum of ages of father and son is 55. After 5 years, father will be twice as old. Find father's present age.",
    "question_hi": "पिता और पुत्र की आयु का योग 55 है। 5 वर्ष बाद, पिता की आयु पुत्र से दोगुनी होगी। पिता की वर्तमान आयु ज्ञात कीजिए।",
    "options_en": ["40 years", "45 years", "50 years", "35 years"],
    "options_hi": ["40 वर्ष", "45 वर्ष", "50 वर्ष", "35 वर्ष"],
    "answer_en": "40 years",
    "answer_hi": "40 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Solve: 7x + 5y = 33, 3x - 2y = 4",
    "question_hi": "हल कीजिए: 7x + 5y = 33, 3x - 2y = 4",
    "options_en": ["x=3, y=2", "x=4, y=1", "x=2, y=3", "x=5, y=0"],
    "options_hi": ["x=3, y=2", "x=4, y=1", "x=2, y=3", "x=5, y=0"],
    "answer_en": "x=3, y=2",
    "answer_hi": "x=3, y=2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "For what value of m will equations 5x + 2y = 11 and 10x + my = 22 have no solution?",
    "question_hi": "m के किस मान के लिए समीकरण 5x + 2y = 11 और 10x + my = 22 का कोई हल नहीं होगा?",
    "options_en": ["4", "5", "6", "8"],
    "options_hi": ["4", "5", "6", "8"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "A rectangle's perimeter is 70 cm. If length is reduced by 5 cm and breadth increased by 5 cm, area decreases by 25 cm². Find original length.",
    "question_hi": "एक आयत का परिमाप 70 सेमी है। यदि लंबाई 5 सेमी कम कर दी जाए और चौड़ाई 5 सेमी बढ़ा दी जाए, तो क्षेत्रफल 25 सेमी² कम हो जाता है। वास्तविक लंबाई ज्ञात कीजिए।",
    "options_en": ["25 cm", "20 cm", "30 cm", "35 cm"],
    "options_hi": ["25 सेमी", "20 सेमी", "30 सेमी", "35 सेमी"],
    "answer_en": "25 cm",
    "answer_hi": "25 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "If 9x + 6y = 15 and 18x + 12y = 30, then lines are:",
    "question_hi": "यदि 9x + 6y = 15 और 18x + 12y = 30, तो रेखाएँ हैं:",
    "options_en": ["Parallel", "Coincident", "Intersecting", "None"],
    "options_hi": ["समांतर", "संपाती", "प्रतिच्छेदी", "कोई नहीं"],
    "answer_en": "Coincident",
    "answer_hi": "संपाती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "A two-digit number is such that product of digits is 20. If 27 is added, digits interchange. Find number.",
    "question_hi": "एक दो-अंकीय संख्या ऐसी है कि अंकों का गुणनफल 20 है। यदि 27 जोड़ा जाता है, तो अंक उलट जाते हैं। संख्या ज्ञात कीजिए।",
    "options_en": ["45", "54", "36", "63"],
    "options_hi": ["45", "54", "36", "63"],
    "answer_en": "45",
    "answer_hi": "45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Solve: 8x - 3y = 14, 5x + 2y = 9",
    "question_hi": "हल कीजिए: 8x - 3y = 14, 5x + 2y = 9",
    "options_en": ["x=2, y=1", "x=3, y=2", "x=1, y=2", "x=4, y=3"],
    "options_hi": ["x=2, y=1", "x=3, y=2", "x=1, y=2", "x=4, y=3"],
    "answer_en": "x=2, y=1",
    "answer_hi": "x=2, y=1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Find k if the system 2x + 5y = 7 and 4x + ky = 14 is inconsistent.",
    "question_hi": "k ज्ञात कीजिए यदि निकाय 2x + 5y = 7 और 4x + ky = 14 असंगत है।",
    "options_en": ["10", "12", "14", "16"],
    "options_hi": ["10", "12", "14", "16"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Sum of two numbers is 40. One number is 8 less than twice the other. Find larger number.",
    "question_hi": "दो संख्याओं का योग 40 है। एक संख्या दूसरी संख्या के दोगुने से 8 कम है। बड़ी संख्या ज्ञात कीजिए।",
    "options_en": ["24", "28", "32", "36"],
    "options_hi": ["24", "28", "32", "36"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "If lines 3x - 4y = 7 and 6x - 8y = k are coincident, then k equals:",
    "question_hi": "यदि रेखाएँ 3x - 4y = 7 और 6x - 8y = k संपाती हैं, तो k बराबर है:",
    "options_en": ["14", "16", "18", "20"],
    "options_hi": ["14", "16", "18", "20"],
    "answer_en": "14",
    "answer_hi": "14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "A train covers 360 km at uniform speed. If speed increased by 12 km/h, time reduces by 1 hour. Find original speed.",
    "question_hi": "एक ट्रेन एक समान गति से 360 किमी की दूरी तय करती है। यदि गति 12 किमी/घंटा बढ़ा दी जाए, समय 1 घंटा कम हो जाता है। वास्तविक गति ज्ञात कीजिए।",
    "options_en": ["48 km/h", "60 km/h", "72 km/h", "84 km/h"],
    "options_hi": ["48 किमी/घं", "60 किमी/घं", "72 किमी/घं", "84 किमी/घं"],
    "answer_en": "60 km/h",
    "answer_hi": "60 किमी/घं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Solve: 4x + 9y = 30, 3x - 2y = 5",
    "question_hi": "हल कीजिए: 4x + 9y = 30, 3x - 2y = 5",
    "options_en": ["x=3, y=2", "x=4, y=1", "x=2, y=3", "x=5, y=0"],
    "options_hi": ["x=3, y=2", "x=4, y=1", "x=2, y=3", "x=5, y=0"],
    "answer_en": "x=3, y=2",
    "answer_hi": "x=3, y=2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "For what value of p will equations 7x + 3y = 10 and 14x + py = 20 have infinite solutions?",
    "question_hi": "p के किस मान के लिए समीकरण 7x + 3y = 10 और 14x + py = 20 के अनंत हल होंगे?",
    "options_en": ["6", "7", "8", "9"],
    "options_hi": ["6", "7", "8", "9"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "A two-digit number is 5 times sum of its digits plus 1. If 9 is subtracted, digits reverse. Find number.",
    "question_hi": "एक दो-अंकीय संख्या अपने अंकों के योग के 5 गुने से 1 अधिक है। यदि 9 घटाया जाता है, तो अंक उलट जाते हैं। संख्या ज्ञात कीजिए।",
    "options_en": ["41", "32", "23", "14"],
    "options_hi": ["41", "32", "23", "14"],
    "answer_en": "41",
    "answer_hi": "41",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "If the system 5x + 2y = 8 and 10x + 4y = 16 has:",
    "question_hi": "यदि निकाय 5x + 2y = 8 और 10x + 4y = 16 के होंगे:",
    "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
    "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
    "answer_en": "Infinite solutions",
    "answer_hi": "अनंत हल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Solve: 2x + 3y = 13, 5x - 4y = 2",
    "question_hi": "हल कीजिए: 2x + 3y = 13, 5x - 4y = 2",
    "options_en": ["x=2, y=3", "x=3, y=2", "x=4, y=1", "x=1, y=4"],
    "options_hi": ["x=2, y=3", "x=3, y=2", "x=4, y=1", "x=1, y=4"],
    "answer_en": "x=2, y=3",
    "answer_hi": "x=2, y=3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Find k if lines 4x + 3y = 12 and kx + 6y = 24 are coincident.",
    "question_hi": "k ज्ञात कीजिए यदि रेखाएँ 4x + 3y = 12 और kx + 6y = 24 संपाती हैं।",
    "options_en": ["8", "9", "10", "12"],
    "options_hi": ["8", "9", "10", "12"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Sum of ages of mother and daughter is 50. Five years ago, mother was 7 times as old. Find mother's present age.",
    "question_hi": "माँ और बेटी की आयु का योग 50 है। पाँच वर्ष पहले, माँ की आयु बेटी से 7 गुना थी। माँ की वर्तमान आयु ज्ञात कीजिए।",
    "options_en": ["40 years", "35 years", "45 years", "30 years"],
    "options_hi": ["40 वर्ष", "35 वर्ष", "45 वर्ष", "30 वर्ष"],
    "answer_en": "40 years",
    "answer_hi": "40 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "If 6x + 9y = 21 and 12x + 18y = k have no solution, then k is:",
    "question_hi": "यदि 6x + 9y = 21 और 12x + 18y = k का कोई हल नहीं है, तो k है:",
    "options_en": ["42", "40", "38", "36"],
    "options_hi": ["42", "40", "38", "36"],
    "answer_en": "42",
    "answer_hi": "42",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "A two-digit number is such that sum of digits is 11. If 45 is added, digits interchange. Find number.",
    "question_hi": "एक दो-अंकीय संख्या ऐसी है कि अंकों का योग 11 है। यदि 45 जोड़ा जाता है, तो अंक उलट जाते हैं। संख्या ज्ञात कीजिए।",
    "options_en": ["38", "47", "56", "65"],
    "options_hi": ["38", "47", "56", "65"],
    "answer_en": "38",
    "answer_hi": "38",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Solve: 3x + 4y = 25, 2x - 3y = 6",
    "question_hi": "हल कीजिए: 3x + 4y = 25, 2x - 3y = 6",
    "options_en": ["x=5, y=3", "x=6, y=2", "x=4, y=4", "x=3, y=5"],
    "options_hi": ["x=5, y=3", "x=6, y=2", "x=4, y=4", "x=3, y=5"],
    "answer_en": "x=5, y=3",
    "answer_hi": "x=5, y=3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "For what value of m, the equations 8x + 5y = 9 and 16x + my = 18 have infinite solutions?",
    "question_hi": "m के किस मान के लिए समीकरण 8x + 5y = 9 और 16x + my = 18 के अनंत हल होंगे?",
    "options_en": ["10", "12", "14", "16"],
    "options_hi": ["10", "12", "14", "16"],
    "answer_en": "10",
    "answer_hi": "10",
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