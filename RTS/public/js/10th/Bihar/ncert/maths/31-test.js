const questions= [
    {
      "num": 1,
      "question_en": "For which value(s) of k will the pair of equations x + 2y + 7 = 0 and 2x + ky + 14 = 0 represent coincident lines?",
      "question_hi": "k के किस मान के लिए समीकरणों x + 2y + 7 = 0 और 2x + ky + 14 = 0 के युग्म संपाती रेखाओं को निरूपित करेंगे?",
      "options_en": ["k = 1", "k = 2", "k = 3", "k = 4"],
      "options_hi": ["k = 1", "k = 2", "k = 3", "k = 4"],
      "answer_en": "k = 4",
      "answer_hi": "k = 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Find the value(s) of p for which the system of equations 3x + py = 0 and 6x + 8y = 0 has a non-zero solution.",
      "question_hi": "p का मान ज्ञात कीजिए जिसके लिए समीकरण निकाय 3x + py = 0 और 6x + 8y = 0 का एक अशून्य हल हो।",
      "options_en": ["p = 4", "p = 5", "p = 6", "p = 8"],
      "options_hi": ["p = 4", "p = 5", "p = 6", "p = 8"],
      "answer_en": "p = 4",
      "answer_hi": "p = 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Solve for x and y: 5x + 8y = 67 and 8x + 5y = 85.",
      "question_hi": "x और y ज्ञात कीजिए: 5x + 8y = 67 और 8x + 5y = 85।",
      "options_en": ["x = 3, y = 9", "x = 9, y = 4", "x = 7, y = 4", "x = 9, y = 3"],
      "options_hi": ["x = 3, y = 9", "x = 9, y = 4", "x = 7, y = 4", "x = 9, y = 3"],
      "answer_en": "x = 9, y = 3",
      "answer_hi": "x = 9, y = 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "The sum of the numerator and denominator of a fraction is 8. If 3 is added to both the numerator and denominator, the fraction becomes 3/4. Find the fraction.",
      "question_hi": "एक भिन्न के अंश और हर का योग 8 है। यदि अंश और हर दोनों में 3 जोड़ दिया जाए, तो भिन्न 3/4 हो जाती है। भिन्न ज्ञात कीजिए।",
      "options_en": ["2/6", "3/5", "4/4", "5/3"],
      "options_hi": ["2/6", "3/5", "4/4", "5/3"],
      "answer_en": "3/5",
      "answer_hi": "3/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "If the lines given by 2x + ky = 10 and 5x – 3y = 12 are parallel, then find the value of k.",
      "question_hi": "यदि समीकरणों 2x + ky = 10 और 5x – 3y = 12 द्वारा दी गई रेखाएँ समांतर हैं, तो k का मान ज्ञात कीजिए।",
      "options_en": ["k = -6/5", "k = -5/6", "k = 6/5", "k = 5/6"],
      "options_hi": ["k = -6/5", "k = -5/6", "k = 6/5", "k = 5/6"],
      "answer_en": "k = -6/5",
      "answer_hi": "k = -6/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Find whether the pair of equations 3x + 2y = 5 and 6x + 4y = 10 are consistent or inconsistent.",
      "question_hi": "जाँच कीजिए कि समीकरणों 3x + 2y = 5 और 6x + 4y = 10 का युग्म संगत है या असंगत।",
      "options_en": ["Consistent", "Inconsistent", "Cannot be determined", "None"],
      "options_hi": ["संगत", "असंगत", "निर्धारित नहीं किया जा सकता", "कोई नहीं"],
      "answer_en": "Consistent",
      "answer_hi": "संगत",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Find the value of k for which the system of equations kx + 3y = k – 3 and 12x + ky = k has no solution.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए समीकरण निकाय kx + 3y = k – 3 और 12x + ky = k का कोई हल नहीं है।",
      "options_en": ["k = -6", "k = 6", "k = 4", "k = -4"],
      "options_hi": ["k = -6", "k = 6", "k = 4", "k = -4"],
      "answer_en": "k = -6",
      "answer_hi": "k = -6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Solve for x and y: ax + by = a – b and bx – ay = a + b.",
      "question_hi": "x और y ज्ञात कीजिए: ax + by = a – b और bx – ay = a + b।",
      "options_en": ["x = 1, y = -1", "x = -1, y = 1", "x = a, y = b", "x = b, y = a"],
      "options_hi": ["x = 1, y = -1", "x = -1, y = 1", "x = a, y = b", "x = b, y = a"],
      "answer_en": "x = 1, y = -1",
      "answer_hi": "x = 1, y = -1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "A man has only ₹1 and ₹2 coins. If the total number of coins is 50 and their total value is ₹75, find the number of ₹1 coins.",
      "question_hi": "एक व्यक्ति के पास केवल ₹1 और ₹2 के सिक्के हैं। यदि कुल सिक्कों की संख्या 50 है और उनका कुल मूल्य ₹75 है, तो ₹1 के सिक्कों की संख्या ज्ञात कीजिए।",
      "options_en": ["25", "30", "20", "35"],
      "options_hi": ["25", "30", "20", "35"],
      "answer_en": "25",
      "answer_hi": "25",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Find the values of a and b for which the system of equations 2x + 3y = 7 and (a + b)x + (2a – b)y = 21 has infinitely many solutions.",
      "question_hi": "a और b के मान ज्ञात कीजिए जिसके लिए समीकरण निकाय 2x + 3y = 7 और (a + b)x + (2a – b)y = 21 के अनंत हल हैं।",
      "options_en": ["a = 5, b = 1", "a = 3, b = 2", "a = 1, b = 5", "a = 2, b = 3"],
      "options_hi": ["a = 5, b = 1", "a = 3, b = 2", "a = 1, b = 5", "a = 2, b = 3"],
      "answer_en": "a = 5, b = 1",
      "answer_hi": "a = 5, b = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Solve for x and y: (a – b)x + (a + b)y = a² – 2ab – b² and (a + b)(x + y) = a² + b².",
      "question_hi": "x और y ज्ञात कीजिए: (a – b)x + (a + b)y = a² – 2ab – b² और (a + b)(x + y) = a² + b²।",
      "options_en": ["x = a + b, y = -2ab/(a+b)", "x = a - b, y = ab", "x = a, y = b", "x = b, y = a"],
      "options_hi": ["x = a + b, y = -2ab/(a+b)", "x = a - b, y = ab", "x = a, y = b", "x = b, y = a"],
      "answer_en": "x = a + b, y = -2ab/(a+b)",
      "answer_hi": "x = a + b, y = -2ab/(a+b)",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "Five years ago, Neeraj was three times as old as his son. Ten years later, Neeraj will be twice as old as his son. Find Neeraj's present age.",
      "question_hi": "पाँच वर्ष पहले, नीरज अपने पुत्र की आयु का तीन गुना था। दस वर्ष बाद, नीरज अपने पुत्र की आयु का दो गुना होगा। नीरज की वर्तमान आयु ज्ञात कीजिए।",
      "options_en": ["45 years", "50 years", "55 years", "60 years"],
      "options_hi": ["45 वर्ष", "50 वर्ष", "55 वर्ष", "60 वर्ष"],
      "answer_en": "50 years",
      "answer_hi": "50 वर्ष",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "The ratio of incomes of two persons is 9:7 and the ratio of their expenditures is 4:3. If each of them saves ₹200 per month, find their monthly incomes.",
      "question_hi": "दो व्यक्तियों की आय का अनुपात 9:7 है और उनके व्यय का अनुपात 4:3 है। यदि उनमें से प्रत्येक ₹200 प्रति माह बचाता है, तो उनकी मासिक आय ज्ञात कीजिए।",
      "options_en": ["₹1800, ₹1400", "₹2700, ₹2100", "₹3600, ₹2800", "₹4500, ₹3500"],
      "options_hi": ["₹1800, ₹1400", "₹2700, ₹2100", "₹3600, ₹2800", "₹4500, ₹3500"],
      "answer_en": "₹1800, ₹1400",
      "answer_hi": "₹1800, ₹1400",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "For which value of p will the pair of equations 3x + 4y = 12 and px + 12y = 30 have a unique solution?",
      "question_hi": "p के किस मान के लिए समीकरणों 3x + 4y = 12 और px + 12y = 30 के युग्म का एक अद्वितीय हल होगा?",
      "options_en": ["p ≠ 9", "p ≠ 6", "p ≠ 4", "p ≠ 3"],
      "options_hi": ["p ≠ 9", "p ≠ 6", "p ≠ 4", "p ≠ 3"],
      "answer_en": "p ≠ 9",
      "answer_hi": "p ≠ 9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "Solve the system: 2/(x+1) + 3/(y-1) = 2 and 3/(x+1) + 2/(y-1) = 13/6.",
      "question_hi": "निकाय को हल करें: 2/(x+1) + 3/(y-1) = 2 और 3/(x+1) + 2/(y-1) = 13/6।",
      "options_en": ["x = 2, y = 3", "x = 1, y = 4", "x = 3, y = 2", "x = 4, y = 1"],
      "options_hi": ["x = 2, y = 3", "x = 1, y = 4", "x = 3, y = 2", "x = 4, y = 1"],
      "answer_en": "x = 2, y = 3",
      "answer_hi": "x = 2, y = 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Find the values of x and y satisfying the equations: 3x – 2y = 4 and 2x + 5y = 9.",
      "question_hi": "x और y के मान ज्ञात कीजिए जो समीकरणों 3x – 2y = 4 और 2x + 5y = 9 को संतुष्ट करते हैं।",
      "options_en": ["x = 2, y = 1", "x = 1, y = 2", "x = 3, y = 1", "x = 1, y = 3"],
      "options_hi": ["x = 2, y = 1", "x = 1, y = 2", "x = 3, y = 1", "x = 1, y = 3"],
      "answer_en": "x = 2, y = 1",
      "answer_hi": "x = 2, y = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "If (2,3) is a solution of the equation 3x – ky = 5, then find the value of k.",
      "question_hi": "यदि (2,3) समीकरण 3x – ky = 5 का एक हल है, तो k का मान ज्ञात कीजिए।",
      "options_en": ["1/3", "1", "2/3", "3/2"],
      "options_hi": ["1/3", "1", "2/3", "3/2"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Find the condition that the system of equations ax + by = c and lx + my = n has no solution.",
      "question_hi": "वह शर्त ज्ञात कीजिए कि समीकरण निकाय ax + by = c और lx + my = n का कोई हल नहीं है।",
      "options_en": ["a/l = b/m ≠ c/n", "a/l ≠ b/m", "a/l = b/m = c/n", "a/l ≠ b/m = c/n"],
      "options_hi": ["a/l = b/m ≠ c/n", "a/l ≠ b/m", "a/l = b/m = c/n", "a/l ≠ b/m = c/n"],
      "answer_en": "a/l = b/m ≠ c/n",
      "answer_hi": "a/l = b/m ≠ c/n",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Solve for x and y: 6x + 5y = 7x + 3y + 1 = 2(x + 6y – 1).",
      "question_hi": "x और y ज्ञात कीजिए: 6x + 5y = 7x + 3y + 1 = 2(x + 6y – 1)।",
      "options_en": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"],
      "options_hi": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"],
      "answer_en": "x = 3, y = 2",
      "answer_hi": "x = 3, y = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "A fraction becomes 1/3 when 1 is subtracted from the numerator and it becomes 1/4 when 8 is added to the denominator. Find the fraction.",
      "question_hi": "एक भिन्न 1/3 हो जाती है जब अंश में से 1 घटाया जाता है और यह 1/4 हो जाती है जब हर में 8 जोड़ा जाता है। भिन्न ज्ञात कीजिए।",
      "options_en": ["5/12", "7/15", "3/10", "4/11"],
      "options_hi": ["5/12", "7/15", "3/10", "4/11"],
      "answer_en": "5/12",
      "answer_hi": "5/12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "Find the value of k for which the system: x + 2y = 3 and 5x + ky + 7 = 0 is inconsistent.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए निकाय: x + 2y = 3 और 5x + ky + 7 = 0 असंगत है।",
      "options_en": ["k = 10", "k = -10", "k = 5", "k = -5"],
      "options_hi": ["k = 10", "k = -10", "k = 5", "k = -5"],
      "answer_en": "k = 10",
      "answer_hi": "k = 10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "Solve for x and y: 2x + 3y = 17 and 2x+2 – 3y+1 = 5.",
      "question_hi": "x और y ज्ञात कीजिए: 2x + 3y = 17 और 2x+2 – 3y+1 = 5।",
      "options_en": ["x = 4, y = 3", "x = 3, y = 4", "x = 2, y = 5", "x = 5, y = 2"],
      "options_hi": ["x = 4, y = 3", "x = 3, y = 4", "x = 2, y = 5", "x = 5, y = 2"],
      "answer_en": "x = 3, y = 4",
      "answer_hi": "x = 3, y = 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "The sum of two numbers is 70 and their difference is 10. Find the numbers.",
      "question_hi": "दो संख्याओं का योग 70 है और उनका अंतर 10 है। संख्याएँ ज्ञात कीजिए।",
      "options_en": ["40, 30", "50, 20", "45, 25", "60, 10"],
      "options_hi": ["40, 30", "50, 20", "45, 25", "60, 10"],
      "answer_en": "40, 30",
      "answer_hi": "40, 30",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "If the system of equations 2x + 3y = 7 and 2ax + (a+b)y = 28 has infinitely many solutions, find a and b.",
      "question_hi": "यदि समीकरण निकाय 2x + 3y = 7 और 2ax + (a+b)y = 28 के अनंत हल हैं, तो a और b ज्ञात कीजिए।",
      "options_en": ["a = 4, b = 8", "a = 2, b = 4", "a = 3, b = 6", "a = 1, b = 2"],
      "options_hi": ["a = 4, b = 8", "a = 2, b = 4", "a = 3, b = 6", "a = 1, b = 2"],
      "answer_en": "a = 4, b = 8",
      "answer_hi": "a = 4, b = 8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "Find whether the lines represented by 4x + 5y = 10 and 8x + 10y = 15 are parallel, coincident or intersecting.",
      "question_hi": "जाँच कीजिए कि समीकरणों 4x + 5y = 10 और 8x + 10y = 15 द्वारा निरूपित रेखाएँ समांतर, संपाती या प्रतिच्छेदी हैं।",
      "options_en": ["Parallel", "Coincident", "Intersecting", "None"],
      "options_hi": ["समांतर", "संपाती", "प्रतिच्छेदी", "कोई नहीं"],
      "answer_en": "Parallel",
      "answer_hi": "समांतर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "Solve the system: 4/x + 3y = 8 and 3/x – 4y = -1.",
      "question_hi": "निकाय को हल करें: 4/x + 3y = 8 और 3/x – 4y = -1।",
      "options_en": ["x = 1, y = 1", "x = 2, y = 2", "x = 1/2, y = 1", "x = 1, y = 2"],
      "options_hi": ["x = 1, y = 1", "x = 2, y = 2", "x = 1/2, y = 1", "x = 1, y = 2"],
      "answer_en": "x = 1/2, y = 1",
      "answer_hi": "x = 1/2, y = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "Find the value of k for which the system: kx + 2y = 5 and 3x + y = 1 has a unique solution.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए निकाय: kx + 2y = 5 और 3x + y = 1 का एक अद्वितीय हल है।",
      "options_en": ["k ≠ 6", "k ≠ 3", "k ≠ 2", "k ≠ 1"],
      "options_hi": ["k ≠ 6", "k ≠ 3", "k ≠ 2", "k ≠ 1"],
      "answer_en": "k ≠ 6",
      "answer_hi": "k ≠ 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "Solve for x and y: 0.3x + 0.5y = 0.5 and 0.2x + 0.7y = 0.9.",
      "question_hi": "x और y ज्ञात कीजिए: 0.3x + 0.5y = 0.5 और 0.2x + 0.7y = 0.9।",
      "options_en": ["x = 1, y = 1", "x = 2, y = 1", "x = 1, y = 2", "x = 0.5, y = 1.5"],
      "options_hi": ["x = 1, y = 1", "x = 2, y = 1", "x = 1, y = 2", "x = 0.5, y = 1.5"],
      "answer_en": "x = 1, y = 1",
      "answer_hi": "x = 1, y = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Find the speed of the stream and that of the boat in still water.",
      "question_hi": "एक नाव धारा के प्रतिकूल 30 किमी और धारा के अनुकूल 44 किमी 10 घंटे में जाती है। 13 घंटे में, यह धारा के प्रतिकूल 40 किमी और धारा के अनुकूल 55 किमी जा सकती है। धारा की चाल और स्थिर जल में नाव की चाल ज्ञात कीजिए।",
      "options_en": ["Boat: 8 km/h, Stream: 3 km/h", "Boat: 10 km/h, Stream: 2 km/h", "Boat: 12 km/h, Stream: 4 km/h", "Boat: 6 km/h, Stream: 1 km/h"],
      "options_hi": ["नाव: 8 किमी/घं, धारा: 3 किमी/घं", "नाव: 10 किमी/घं, धारा: 2 किमी/घं", "नाव: 12 किमी/घं, धारा: 4 किमी/घं", "नाव: 6 किमी/घं, धारा: 1 किमी/घं"],
      "answer_en": "Boat: 8 km/h, Stream: 3 km/h",
      "answer_hi": "नाव: 8 किमी/घं, धारा: 3 किमी/घं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "Find the value(s) of k for which the system: x + 2y = 5 and 3x + ky = 15 has infinitely many solutions.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए निकाय: x + 2y = 5 और 3x + ky = 15 के अनंत हल हैं।",
      "options_en": ["k = 6", "k = 5", "k = 4", "k = 3"],
      "options_hi": ["k = 6", "k = 5", "k = 4", "k = 3"],
      "answer_en": "k = 6",
      "answer_hi": "k = 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_en": "Solve: 2(3u – v) = 5uv and 2(u + 3v) = 5uv.",
      "question_hi": "हल करें: 2(3u – v) = 5uv और 2(u + 3v) = 5uv।",
      "options_en": ["u = 2, v = 1", "u = 1, v = 2", "u = 3, v = 1", "u = 1, v = 3"],
      "options_hi": ["u = 2, v = 1", "u = 1, v = 2", "u = 3, v = 1", "u = 1, v = 3"],
      "answer_en": "u = 2, v = 1",
      "answer_hi": "u = 2, v = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_en": "The area of a rectangle gets reduced by 9 square units if its length is reduced by 5 units and breadth is increased by 3 units. If we increase length by 3 units and breadth by 2 units, the area increases by 67 square units. Find the dimensions of the rectangle.",
      "question_hi": "एक आयत का क्षेत्रफल 9 वर्ग इकाई कम हो जाता है यदि इसकी लंबाई 5 इकाई कम कर दी जाए और चौड़ाई 3 इकाई बढ़ा दी जाए। यदि हम लंबाई 3 इकाई और चौड़ाई 2 इकाई बढ़ा दें, तो क्षेत्रफल 67 वर्ग इकाई बढ़ जाता है। आयत की विमाएँ ज्ञात कीजिए।",
      "options_en": ["Length = 17, Breadth = 9", "Length = 19, Breadth = 10", "Length = 15, Breadth = 8", "Length = 21, Breadth = 12"],
      "options_hi": ["लंबाई = 17, चौड़ाई = 9", "लंबाई = 19, चौड़ाई = 10", "लंबाई = 15, चौड़ाई = 8", "लंबाई = 21, चौड़ाई = 12"],
      "answer_en": "Length = 17, Breadth = 9",
      "answer_hi": "लंबाई = 17, चौड़ाई = 9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_en": "If the pair of equations 2x + 3y = 11 and (m + n)x + (2m – n)y = 33 has infinitely many solutions, find m and n.",
      "question_hi": "यदि समीकरणों 2x + 3y = 11 और (m + n)x + (2m – n)y = 33 के युग्म के अनंत हल हैं, तो m और n ज्ञात कीजिए।",
      "options_en": ["m = 5, n = 1", "m = 3, n = 2", "m = 4, n = 1", "m = 2, n = 3"],
      "options_hi": ["m = 5, n = 1", "m = 3, n = 2", "m = 4, n = 1", "m = 2, n = 3"],
      "answer_en": "m = 5, n = 1",
      "answer_hi": "m = 5, n = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_en": "Solve for x and y: (a + b)x + (a – b)y = 2a² – 2b² and (a – b)(x + y) = a² – b².",
      "question_hi": "x और y ज्ञात कीजिए: (a + b)x + (a – b)y = 2a² – 2b² और (a – b)(x + y) = a² – b²।",
      "options_en": ["x = a + b, y = a – b", "x = a, y = b", "x = b, y = a", "x = a – b, y = a + b"],
      "options_hi": ["x = a + b, y = a – b", "x = a, y = b", "x = b, y = a", "x = a – b, y = a + b"],
      "answer_en": "x = a + b, y = a – b",
      "answer_hi": "x = a + b, y = a – b",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_en": "Find the value of k so that the point (3, k) lies on the line represented by 2x – 3y = 5.",
      "question_hi": "k का मान ज्ञात कीजिए ताकि बिंदु (3, k) रेखा 2x – 3y = 5 पर स्थित हो।",
      "options_en": ["1/3", "1", "2/3", "2"],
      "options_hi": ["1/3", "1", "2/3", "2"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_en": "Solve: 3x + 4y = 10 and 2x – 2y = 2.",
      "question_hi": "हल करें: 3x + 4y = 10 और 2x – 2y = 2।",
      "options_en": ["x = 2, y = 1", "x = 1, y = 2", "x = 3, y = 0", "x = 0, y = 3"],
      "options_hi": ["x = 2, y = 1", "x = 1, y = 2", "x = 3, y = 0", "x = 0, y = 3"],
      "answer_en": "x = 2, y = 1",
      "answer_hi": "x = 2, y = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_en": "A man has some hens and cows. If the total number of heads is 50 and total number of legs is 142, find the number of hens.",
      "question_hi": "एक व्यक्ति के पास कुछ मुर्गियाँ और गायें हैं। यदि सिरों की कुल संख्या 50 और पैरों की कुल संख्या 142 है, तो मुर्गियों की संख्या ज्ञात कीजिए।",
      "options_en": ["29", "31", "33", "35"],
      "options_hi": ["29", "31", "33", "35"],
      "answer_en": "29",
      "answer_hi": "29",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_en": "If the system: 5x + 2y = 3 and (k+1)x + 2(k+2)y = 2k is inconsistent, find k.",
      "question_hi": "यदि निकाय: 5x + 2y = 3 और (k+1)x + 2(k+2)y = 2k असंगत है, तो k ज्ञात कीजिए।",
      "options_en": ["k = 3", "k = 4", "k = 5", "k = 6"],
      "options_hi": ["k = 3", "k = 4", "k = 5", "k = 6"],
      "answer_en": "k = 5",
      "answer_hi": "k = 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_en": "Solve for x and y: 2/x + 5/y = 1 and 4/x – 5/y = 2.",
      "question_hi": "x और y ज्ञात कीजिए: 2/x + 5/y = 1 और 4/x – 5/y = 2।",
      "options_en": ["x = 2, y = 5", "x = 3, y = 5", "x = 4, y = 10", "x = 6, y = 15"],
      "options_hi": ["x = 2, y = 5", "x = 3, y = 5", "x = 4, y = 10", "x = 6, y = 15"],
      "answer_en": "x = 2, y = 5",
      "answer_hi": "x = 2, y = 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_en": "Find the value of a and b for which the equations 2x + 3y = 7 and (a+b+1)x + (a+2b+2)y = 4(a+b) + 1 have infinitely many solutions.",
      "question_hi": "a और b के मान ज्ञात कीजिए जिसके लिए समीकरण 2x + 3y = 7 और (a+b+1)x + (a+2b+2)y = 4(a+b) + 1 के अनंत हल हैं।",
      "options_en": ["a = 3, b = 1", "a = 2, b = 2", "a = 1, b = 3", "a = 4, b = 0"],
      "options_hi": ["a = 3, b = 1", "a = 2, b = 2", "a = 1, b = 3", "a = 4, b = 0"],
      "answer_en": "a = 3, b = 1",
      "answer_hi": "a = 3, b = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_en": "Solve: x + y = a + b and ax – by = a² – b².",
      "question_hi": "हल करें: x + y = a + b और ax – by = a² – b²।",
      "options_en": ["x = a, y = b", "x = b, y = a", "x = a+b, y = a-b", "x = a-b, y = a+b"],
      "options_hi": ["x = a, y = b", "x = b, y = a", "x = a+b, y = a-b", "x = a-b, y = a+b"],
      "answer_en": "x = a, y = b",
      "answer_hi": "x = a, y = b",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_en": "If 3 chairs and 2 tables cost ₹1850 and 5 chairs and 3 tables cost ₹2850, find the cost of 2 chairs and 2 tables.",
      "question_hi": "यदि 3 कुर्सियाँ और 2 मेजों की कीमत ₹1850 है और 5 कुर्सियाँ और 3 मेजों की कीमत ₹2850 है, तो 2 कुर्सियों और 2 मेजों की कीमत ज्ञात कीजिए।",
      "options_en": ["₹1300", "₹1400", "₹1500", "₹1600"],
      "options_hi": ["₹1300", "₹1400", "₹1500", "₹1600"],
      "answer_en": "₹1400",
      "answer_hi": "₹1400",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_en": "Find the value of k for which the system: x + y = 4 and (k-2)x + (k-1)y = k+5 has no solution.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए निकाय: x + y = 4 और (k-2)x + (k-1)y = k+5 का कोई हल नहीं है।",
      "options_en": ["k = 3", "k = 4", "k = 5", "k = 6"],
      "options_hi": ["k = 3", "k = 4", "k = 5", "k = 6"],
      "answer_en": "k = 3",
      "answer_hi": "k = 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_en": "Solve for x and y: (2x+1)/3 + (y+2)/2 = 4 and (x-3)/2 – (y-1)/3 = 1.",
      "question_hi": "x और y ज्ञात कीजिए: (2x+1)/3 + (y+2)/2 = 4 और (x-3)/2 – (y-1)/3 = 1।",
      "options_en": ["x = 5, y = 4", "x = 4, y = 5", "x = 6, y = 3", "x = 3, y = 6"],
      "options_hi": ["x = 5, y = 4", "x = 4, y = 5", "x = 6, y = 3", "x = 3, y = 6"],
      "answer_en": "x = 5, y = 4",
      "answer_hi": "x = 5, y = 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_en": "If the lines given by 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, find k.",
      "question_hi": "यदि समीकरणों 3x + 2ky = 2 और 2x + 5y + 1 = 0 द्वारा दी गई रेखाएँ समांतर हैं, तो k ज्ञात कीजिए।",
      "options_en": ["k = 15/4", "k = 4/15", "k = 5/3", "k = 3/5"],
      "options_hi": ["k = 15/4", "k = 4/15", "k = 5/3", "k = 3/5"],
      "answer_en": "k = 15/4",
      "answer_hi": "k = 15/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_en": "The sum of two numbers is 15 and the sum of their reciprocals is 3/10. Find the numbers.",
      "question_hi": "दो संख्याओं का योग 15 है और उनके व्युत्क्रमों का योग 3/10 है। संख्याएँ ज्ञात कीजिए।",
      "options_en": ["5, 10", "6, 9", "7, 8", "4, 11"],
      "options_hi": ["5, 10", "6, 9", "7, 8", "4, 11"],
      "answer_en": "5, 10",
      "answer_hi": "5, 10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_en": "Find the value(s) of p for which the system: px + 3y = 10 and 2x + py = 15 has a unique solution.",
      "question_hi": "p का मान ज्ञात कीजिए जिसके लिए निकाय: px + 3y = 10 और 2x + py = 15 का एक अद्वितीय हल है।",
      "options_en": ["p ≠ ±√6", "p ≠ 6", "p ≠ 3", "p ≠ 2"],
      "options_hi": ["p ≠ ±√6", "p ≠ 6", "p ≠ 3", "p ≠ 2"],
      "answer_en": "p ≠ ±√6",
      "answer_hi": "p ≠ ±√6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_en": "Solve for x and y: 2x + 3y = 13 and 5x – 4y = -2.",
      "question_hi": "x और y ज्ञात कीजिए: 2x + 3y = 13 और 5x – 4y = -2।",
      "options_en": ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 1, y = 4"],
      "options_hi": ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 1, y = 4"],
      "answer_en": "x = 2, y = 3",
      "answer_hi": "x = 2, y = 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_en": "A lending library has fixed charge for first three days and an additional charge for each day thereafter. Sarita paid ₹27 for a book kept for seven days, while Susy paid ₹21 for the book she kept for five days. Find the fixed charge and charge for each extra day.",
      "question_hi": "एक लाइब्रेरी में पहले तीन दिनों के लिए निश्चित शुल्क है और उसके बाद प्रत्येक दिन के लिए अतिरिक्त शुल्क है। सरिता ने सात दिन रखी गई एक किताब के लिए ₹27 का भुगतान किया, जबकि सूसी ने पांच दिन रखी गई किताब के लिए ₹21 का भुगतान किया। निश्चित शुल्क और प्रत्येक अतिरिक्त दिन का शुल्क ज्ञात कीजिए।",
      "options_en": ["Fixed: ₹15, Extra: ₹3", "Fixed: ₹12, Extra: ₹4", "Fixed: ₹10, Extra: ₹5", "Fixed: ₹18, Extra: ₹2"],
      "options_hi": ["निश्चित: ₹15, अतिरिक्त: ₹3", "निश्चित: ₹12, अतिरिक्त: ₹4", "निश्चित: ₹10, अतिरिक्त: ₹5", "निश्चित: ₹18, अतिरिक्त: ₹2"],
      "answer_en": "Fixed: ₹15, Extra: ₹3",
      "answer_hi": "निश्चित: ₹15, अतिरिक्त: ₹3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_en": "If the system: 3x + y = 1 and (2k-1)x + (k-1)y = 2k+1 has no solution, find k.",
      "question_hi": "यदि निकाय: 3x + y = 1 और (2k-1)x + (k-1)y = 2k+1 का कोई हल नहीं है, तो k ज्ञात कीजिए।",
      "options_en": ["k = 2", "k = 3", "k = 4", "k = 5"],
      "options_hi": ["k = 2", "k = 3", "k = 4", "k = 5"],
      "answer_en": "k = 2",
      "answer_hi": "k = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 51,
      "question_en": "Solve for x and y: x/2 + y/3 = 2 and x/3 + y/2 = 13/6.",
      "question_hi": "x और y ज्ञात कीजिए: x/2 + y/3 = 2 और x/3 + y/2 = 13/6।",
      "options_en": ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 6", "x = 6, y = 4"],
      "options_hi": ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 6", "x = 6, y = 4"],
      "answer_en": "x = 2, y = 3",
      "answer_hi": "x = 2, y = 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 52,
      "question_en": "Find the value of a for which the lines 2x + 3y – 7 = 0 and ax + 6y – 14 = 0 are parallel.",
      "question_hi": "a का मान ज्ञात कीजिए जिसके लिए रेखाएँ 2x + 3y – 7 = 0 और ax + 6y – 14 = 0 समांतर हैं।",
      "options_en": ["a = 4", "a = 3", "a = 2", "a = 1"],
      "options_hi": ["a = 4", "a = 3", "a = 2", "a = 1"],
      "answer_en": "a = 4",
      "answer_hi": "a = 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 53,
      "question_en": "Solve: 3x – 5y = 4 and 9x – 2y = 7.",
      "question_hi": "हल करें: 3x – 5y = 4 और 9x – 2y = 7।",
      "options_en": ["x = 1/3, y = -1", "x = 1, y = -1/3", "x = 1/3, y = 1", "x = 1, y = 1/3"],
      "options_hi": ["x = 1/3, y = -1", "x = 1, y = -1/3", "x = 1/3, y = 1", "x = 1, y = 1/3"],
      "answer_en": "x = 1/3, y = -1",
      "answer_hi": "x = 1/3, y = -1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 54,
      "question_en": "Find the value of k for which the system: 4x + 6y = 11 and 2x + ky = 7 is inconsistent.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए निकाय: 4x + 6y = 11 और 2x + ky = 7 असंगत है।",
      "options_en": ["k = 3", "k = 4", "k = 5", "k = 6"],
      "options_hi": ["k = 3", "k = 4", "k = 5", "k = 6"],
      "answer_en": "k = 3",
      "answer_hi": "k = 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 55,
      "question_en": "Solve for x and y: 2x + 3y = 0 and 3x – 4y = 34.",
      "question_hi": "x और y ज्ञात कीजिए: 2x + 3y = 0 और 3x – 4y = 34।",
      "options_en": ["x = 6, y = -4", "x = -6, y = 4", "x = 4, y = -6", "x = -4, y = 6"],
      "options_hi": ["x = 6, y = -4", "x = -6, y = 4", "x = 4, y = -6", "x = -4, y = 6"],
      "answer_en": "x = 6, y = -4",
      "answer_hi": "x = 6, y = -4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 56,
      "question_en": "If we add 1 to numerator and denominator of a fraction, it becomes 4/5. If we subtract 1 from numerator and denominator, it becomes 2/3. Find the fraction.",
      "question_hi": "यदि हम एक भिन्न के अंश और हर में 1 जोड़ दें, तो यह 4/5 हो जाती है। यदि हम अंश और हर में से 1 घटा दें, तो यह 2/3 हो जाती है। भिन्न ज्ञात कीजिए।",
      "options_en": ["7/9", "5/7", "3/5", "8/11"],
      "options_hi": ["7/9", "5/7", "3/5", "8/11"],
      "answer_en": "7/9",
      "answer_hi": "7/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 57,
      "question_en": "Find whether the pair of equations 5x – 3y = 11 and –10x + 6y = –22 are consistent or not.",
      "question_hi": "जाँच कीजिए कि समीकरणों 5x – 3y = 11 और –10x + 6y = –22 का युग्म संगत है या नहीं।",
      "options_en": ["Consistent", "Inconsistent", "Cannot say", "None"],
      "options_hi": ["संगत", "असंगत", "नहीं कह सकते", "कोई नहीं"],
      "answer_en": "Consistent",
      "answer_hi": "संगत",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 58,
      "question_en": "Solve: 7x – 2y = 5xy and 8x + 7y = 15xy.",
      "question_hi": "हल करें: 7x – 2y = 5xy और 8x + 7y = 15xy।",
      "options_en": ["x = 1, y = 2", "x = 2, y = 1", "x = 3, y = 1", "x = 1, y = 3"],
      "options_hi": ["x = 1, y = 2", "x = 2, y = 1", "x = 3, y = 1", "x = 1, y = 3"],
      "answer_en": "x = 1, y = 2",
      "answer_hi": "x = 1, y = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 59,
      "question_en": "If the system: x + 2y = 3 and 5x + ky = 7 has a unique solution, find k.",
      "question_hi": "यदि निकाय: x + 2y = 3 और 5x + ky = 7 का एक अद्वितीय हल है, तो k ज्ञात कीजिए।",
      "options_en": ["k ≠ 10", "k ≠ 5", "k ≠ 2", "k ≠ 1"],
      "options_hi": ["k ≠ 10", "k ≠ 5", "k ≠ 2", "k ≠ 1"],
      "answer_en": "k ≠ 10",
      "answer_hi": "k ≠ 10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 60,
      "question_en": "The difference between two numbers is 26 and one number is three times the other. Find the numbers.",
      "question_hi": "दो संख्याओं का अंतर 26 है और एक संख्या दूसरी संख्या की तीन गुनी है। संख्याएँ ज्ञात कीजिए।",
      "options_en": ["39, 13", "36, 12", "42, 14", "45, 15"],
      "options_hi": ["39, 13", "36, 12", "42, 14", "45, 15"],
      "answer_en": "39, 13",
      "answer_hi": "39, 13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 61,
      "question_en": "Find the values of a and b for which the system: ax + by = 1 and bx + ay = 2 has infinitely many solutions.",
      "question_hi": "a और b के मान ज्ञात कीजिए जिसके लिए निकाय: ax + by = 1 और bx + ay = 2 के अनंत हल हैं।",
      "options_en": ["a = b = 0", "a = b = 1", "a = b = 2", "No such values"],
      "options_hi": ["a = b = 0", "a = b = 1", "a = b = 2", "ऐसा कोई मान नहीं"],
      "answer_en": "No such values",
      "answer_hi": "ऐसा कोई मान नहीं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 62,
      "question_en": "Solve: (x+y)/2 – (x-y)/3 = 8 and (x+y)/3 + (x-y)/4 = 11.",
      "question_hi": "हल करें: (x+y)/2 – (x-y)/3 = 8 और (x+y)/3 + (x-y)/4 = 11।",
      "options_en": ["x = 20, y = 16", "x = 16, y = 20", "x = 18, y = 14", "x = 14, y = 18"],
      "options_hi": ["x = 20, y = 16", "x = 16, y = 20", "x = 18, y = 14", "x = 14, y = 18"],
      "answer_en": "x = 20, y = 16",
      "answer_hi": "x = 20, y = 16",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 63,
      "question_en": "If the lines 3x + y = 2 and kx + 2y = 3 are parallel, find k.",
      "question_hi": "यदि रेखाएँ 3x + y = 2 और kx + 2y = 3 समांतर हैं, तो k ज्ञात कीजिए।",
      "options_en": ["k = 6", "k = 3", "k = 2", "k = 1"],
      "options_hi": ["k = 6", "k = 3", "k = 2", "k = 1"],
      "answer_en": "k = 6",
      "answer_hi": "k = 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 64,
      "question_en": "A train covered a certain distance at a uniform speed. If the train would have been 6 km/h faster, it would have taken 4 hours less than the scheduled time. And if the train were slower by 6 km/h, it would have taken 6 hours more than the scheduled time. Find the length of the journey.",
      "question_hi": "एक ट्रेन ने एक निश्चित दूरी एकसमान चाल से तय की। यदि ट्रेन 6 किमी/घंटा तेज चलती, तो यह निर्धारित समय से 4 घंटे कम लेती। और यदि ट्रेन 6 किमी/घंटा धीमी चलती, तो यह निर्धारित समय से 6 घंटे अधिक लेती। यात्रा की लंबाई ज्ञात कीजिए।",
      "options_en": ["720 km", "600 km", "480 km", "360 km"],
      "options_hi": ["720 किमी", "600 किमी", "480 किमी", "360 किमी"],
      "answer_en": "720 km",
      "answer_hi": "720 किमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 65,
      "question_en": "Find the value of k for which the system: 2x + 3y = 5 and 4x + ky = 10 has infinitely many solutions.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए निकाय: 2x + 3y = 5 और 4x + ky = 10 के अनंत हल हैं।",
      "options_en": ["k = 6", "k = 5", "k = 4", "k = 3"],
      "options_hi": ["k = 6", "k = 5", "k = 4", "k = 3"],
      "answer_en": "k = 6",
      "answer_hi": "k = 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 66,
      "question_en": "Solve for x and y: 6x + 5y = 2xy and 3x + 2y = 7xy.",
      "question_hi": "x और y ज्ञात कीजिए: 6x + 5y = 2xy और 3x + 2y = 7xy।",
      "options_en": ["x = 1, y = 2", "x = 2, y = 1", "x = 1, y = 3", "x = 3, y = 1"],
      "options_hi": ["x = 1, y = 2", "x = 2, y = 1", "x = 1, y = 3", "x = 3, y = 1"],
      "answer_en": "x = 1, y = 2",
      "answer_hi": "x = 1, y = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 67,
      "question_en": "Find the value of a for which the point (a, 2a) lies on the line 3x + 5y = 26.",
      "question_hi": "a का मान ज्ञात कीजिए जिसके लिए बिंदु (a, 2a) रेखा 3x + 5y = 26 पर स्थित है।",
      "options_en": ["a = 1", "a = 2", "a = 3", "a = 4"],
      "options_hi": ["a = 1", "a = 2", "a = 3", "a = 4"],
      "answer_en": "a = 2",
      "answer_hi": "a = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 68,
      "question_en": "Solve: 3x + 2y = 5 and 2x – 3y = 7.",
      "question_hi": "हल करें: 3x + 2y = 5 और 2x – 3y = 7।",
      "options_en": ["x = 31/13, y = -11/13", "x = 29/13, y = -9/13", "x = 33/13, y = -13/13", "x = 27/13, y = -7/13"],
      "options_hi": ["x = 31/13, y = -11/13", "x = 29/13, y = -9/13", "x = 33/13, y = -13/13", "x = 27/13, y = -7/13"],
      "answer_en": "x = 31/13, y = -11/13",
      "answer_hi": "x = 31/13, y = -11/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 69,
      "question_en": "If 5 times the larger number added to 3 times the smaller gives 68, and 2 times the larger added to 5 times the smaller gives 47, find the numbers.",
      "question_hi": "यदि बड़ी संख्या का 5 गुना और छोटी संख्या का 3 गुना जोड़ने पर 68 मिलता है, और बड़ी संख्या का 2 गुना और छोटी संख्या का 5 गुना जोड़ने पर 47 मिलता है, तो संख्याएँ ज्ञात कीजिए।",
      "options_en": ["Larger = 11, Smaller = 7", "Larger = 13, Smaller = 5", "Larger = 10, Smaller = 6", "Larger = 12, Smaller = 4"],
      "options_hi": ["बड़ी = 11, छोटी = 7", "बड़ी = 13, छोटी = 5", "बड़ी = 10, छोटी = 6", "बड़ी = 12, छोटी = 4"],
      "answer_en": "Larger = 11, Smaller = 7",
      "answer_hi": "बड़ी = 11, छोटी = 7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 70,
      "question_en": "Find the condition for which the system: a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 has a unique solution.",
      "question_hi": "वह शर्त ज्ञात कीजिए जिसके लिए निकाय: a₁x + b₁y + c₁ = 0 और a₂x + b₂y + c₂ = 0 का एक अद्वितीय हल है।",
      "options_en": ["a₁/a₂ ≠ b₁/b₂", "a₁/a₂ = b₁/b₂", "a₁/a₂ = b₁/b₂ = c₁/c₂", "a₁/a₂ ≠ b₁/b₂ ≠ c₁/c₂"],
      "options_hi": ["a₁/a₂ ≠ b₁/b₂", "a₁/a₂ = b₁/b₂", "a₁/a₂ = b₁/b₂ = c₁/c₂", "a₁/a₂ ≠ b₁/b₂ ≠ c₁/c₂"],
      "answer_en": "a₁/a₂ ≠ b₁/b₂",
      "answer_hi": "a₁/a₂ ≠ b₁/b₂",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 71,
      "question_en": "Solve for x and y: 3x/2 – 5y/3 = -2 and x/3 + y/2 = 13/6.",
      "question_hi": "x और y ज्ञात कीजिए: 3x/2 – 5y/3 = -2 और x/3 + y/2 = 13/6।",
      "options_en": ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 5", "x = 5, y = 4"],
      "options_hi": ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 5", "x = 5, y = 4"],
      "answer_en": "x = 2, y = 3",
      "answer_hi": "x = 2, y = 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 72,
      "question_en": "If the system: 4x – 5y = 1 and 8x – 10y = k has infinitely many solutions, find k.",
      "question_hi": "यदि निकाय: 4x – 5y = 1 और 8x – 10y = k के अनंत हल हैं, तो k ज्ञात कीजिए।",
      "options_en": ["k = 2", "k = 3", "k = 4", "k = 5"],
      "options_hi": ["k = 2", "k = 3", "k = 4", "k = 5"],
      "answer_en": "k = 2",
      "answer_hi": "k = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 73,
      "question_en": "Solve: 2x + y = 35 and 3x + 4y = 65.",
      "question_hi": "हल करें: 2x + y = 35 और 3x + 4y = 65।",
      "options_en": ["x = 15, y = 5", "x = 10, y = 15", "x = 5, y = 25", "x = 20, y = 10"],
      "options_hi": ["x = 15, y = 5", "x = 10, y = 15", "x = 5, y = 25", "x = 20, y = 10"],
      "answer_en": "x = 15, y = 5",
      "answer_hi": "x = 15, y = 5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 74,
      "question_en": "Find the value of k for which the lines 5x + 2y = 9 and kx + 6y = 18 are parallel.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए रेखाएँ 5x + 2y = 9 और kx + 6y = 18 समांतर हैं।",
      "options_en": ["k = 15", "k = 10", "k = 12", "k = 8"],
      "options_hi": ["k = 15", "k = 10", "k = 12", "k = 8"],
      "answer_en": "k = 15",
      "answer_hi": "k = 15",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 75,
      "question_en": "Solve: 2x + 3y = 8 and 4x + 6y = 7.",
      "question_hi": "हल करें: 2x + 3y = 8 और 4x + 6y = 7।",
      "options_en": ["No solution", "Infinite solutions", "x = 1, y = 2", "x = 2, y = 1"],
      "options_hi": ["कोई हल नहीं", "अनंत हल", "x = 1, y = 2", "x = 2, y = 1"],
      "answer_en": "No solution",
      "answer_hi": "कोई हल नहीं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 76,
      "question_en": "The sum of the digits of a two-digit number is 12. If the number obtained by reversing the digits is greater than the original number by 18, find the number.",
      "question_hi": "एक दो-अंकीय संख्या के अंकों का योग 12 है। यदि अंकों को उलटने पर प्राप्त संख्या मूल संख्या से 18 अधिक है, तो संख्या ज्ञात कीजिए।",
      "options_en": ["57", "48", "39", "75"],
      "options_hi": ["57", "48", "39", "75"],
      "answer_en": "57",
      "answer_hi": "57",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 77,
      "question_en": "Find the value of k for which the system: x + ky = 1 and kx + y = 1 has no solution.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए निकाय: x + ky = 1 और kx + y = 1 का कोई हल नहीं है।",
      "options_en": ["k = -1", "k = 1", "k = 2", "No value"],
      "options_hi": ["k = -1", "k = 1", "k = 2", "कोई मान नहीं"],
      "answer_en": "No value",
      "answer_hi": "कोई मान नहीं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 78,
      "question_en": "Solve for x and y: 5/(x+y) + 1/(x-y) = 2 and 15/(x+y) – 5/(x-y) = -2.",
      "question_hi": "x और y ज्ञात कीजिए: 5/(x+y) + 1/(x-y) = 2 और 15/(x+y) – 5/(x-y) = -2।",
      "options_en": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"],
      "options_hi": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"],
      "answer_en": "x = 3, y = 2",
      "answer_hi": "x = 3, y = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 79,
      "question_en": "If the system: 2x + 3y = 7 and (k-1)x + (k+2)y = 3k has infinitely many solutions, find k.",
      "question_hi": "यदि निकाय: 2x + 3y = 7 और (k-1)x + (k+2)y = 3k के अनंत हल हैं, तो k ज्ञात कीजिए।",
      "options_en": ["k = 7", "k = 6", "k = 5", "k = 4"],
      "options_hi": ["k = 7", "k = 6", "k = 5", "k = 4"],
      "answer_en": "k = 7",
      "answer_hi": "k = 7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 80,
      "question_en": "The larger of two supplementary angles exceeds the smaller by 18°. Find the angles.",
      "question_hi": "दो संपूरक कोणों में से बड़ा कोण छोटे कोण से 18° अधिक है। कोण ज्ञात कीजिए।",
      "options_en": ["81°, 99°", "72°, 108°", "63°, 117°", "54°, 126°"],
      "options_hi": ["81°, 99°", "72°, 108°", "63°, 117°", "54°, 126°"],
      "answer_en": "81°, 99°",
      "answer_hi": "81°, 99°",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 81,
      "question_en": "Find the value of a for which the lines 4x + 3y = 7 and ax + 6y = 14 are coincident.",
      "question_hi": "a का मान ज्ञात कीजिए जिसके लिए रेखाएँ 4x + 3y = 7 और ax + 6y = 14 संपाती हैं।",
      "options_en": ["a = 8", "a = 6", "a = 4", "a = 2"],
      "options_hi": ["a = 8", "a = 6", "a = 4", "a = 2"],
      "answer_en": "a = 8",
      "answer_hi": "a = 8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 82,
      "question_en": "Solve: 3x + 4y = 25 and 5x – 6y = -9.",
      "question_hi": "हल करें: 3x + 4y = 25 और 5x – 6y = -9।",
      "options_en": ["x = 3, y = 4", "x = 4, y = 3", "x = 2, y = 5", "x = 5, y = 2"],
      "options_hi": ["x = 3, y = 4", "x = 4, y = 3", "x = 2, y = 5", "x = 5, y = 2"],
      "answer_en": "x = 3, y = 4",
      "answer_hi": "x = 3, y = 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 83,
      "question_en": "If the lines given by 3x + 2y = 2 and 6x + ky = 3 are parallel, find k.",
      "question_hi": "यदि समीकरणों 3x + 2y = 2 और 6x + ky = 3 द्वारा दी गई रेखाएँ समांतर हैं, तो k ज्ञात कीजिए।",
      "options_en": ["k = 4", "k = 3", "k = 2", "k = 1"],
      "options_hi": ["k = 4", "k = 3", "k = 2", "k = 1"],
      "answer_en": "k = 4",
      "answer_hi": "k = 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 84,
      "question_en": "Find the values of a and b for which the system: 3x + ay = 1 and (2a-1)x + 3y = b has no solution.",
      "question_hi": "a और b के मान ज्ञात कीजिए जिसके लिए निकाय: 3x + ay = 1 और (2a-1)x + 3y = b का कोई हल नहीं है।",
      "options_en": ["a = 3, b ≠ 2", "a = 2, b ≠ 1", "a = 1, b ≠ 0", "a = 0, b ≠ -1"],
      "options_hi": ["a = 3, b ≠ 2", "a = 2, b ≠ 1", "a = 1, b ≠ 0", "a = 0, b ≠ -1"],
      "answer_en": "a = 3, b ≠ 2",
      "answer_hi": "a = 3, b ≠ 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 85,
      "question_en": "Solve for x and y: 2x + 3y = 7 and (a+b)x + (2a-b)y = 21 has infinitely many solutions, find a and b.",
      "question_hi": "x और y ज्ञात कीजिए: 2x + 3y = 7 और (a+b)x + (2a-b)y = 21 के अनंत हल हैं, तो a और b ज्ञात कीजिए।",
      "options_en": ["a = 5, b = 1", "a = 3, b = 2", "a = 1, b = 5", "a = 2, b = 3"],
      "options_hi": ["a = 5, b = 1", "a = 3, b = 2", "a = 1, b = 5", "a = 2, b = 3"],
      "answer_en": "a = 5, b = 1",
      "answer_hi": "a = 5, b = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 86,
      "question_en": "The sum of the ages of a father and his son is 45 years. Five years ago, the product of their ages was 124. Find their present ages.",
      "question_hi": "एक पिता और उसके पुत्र की आयु का योग 45 वर्ष है। पाँच वर्ष पहले, उनकी आयु का गुणनफल 124 था। उनकी वर्तमान आयु ज्ञात कीजिए।",
      "options_en": ["Father: 36, Son: 9", "Father: 35, Son: 10", "Father: 40, Son: 5", "Father: 30, Son: 15"],
      "options_hi": ["पिता: 36, पुत्र: 9", "पिता: 35, पुत्र: 10", "पिता: 40, पुत्र: 5", "पिता: 30, पुत्र: 15"],
      "answer_en": "Father: 36, Son: 9",
      "answer_hi": "पिता: 36, पुत्र: 9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 87,
      "question_en": "Find k if the system: 2x + 3y = 5 and 4x + ky = 10 has infinitely many solutions.",
      "question_hi": "k ज्ञात कीजिए यदि निकाय: 2x + 3y = 5 और 4x + ky = 10 के अनंत हल हैं।",
      "options_en": ["k = 6", "k = 5", "k = 4", "k = 3"],
      "options_hi": ["k = 6", "k = 5", "k = 4", "k = 3"],
      "answer_en": "k = 6",
      "answer_hi": "k = 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 88,
      "question_en": "Solve: x/2 + y/3 = 2 and x/4 – y/2 = -1.",
      "question_hi": "हल करें: x/2 + y/3 = 2 और x/4 – y/2 = -1।",
      "options_en": ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 6", "x = 6, y = 4"],
      "options_hi": ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 6", "x = 6, y = 4"],
      "answer_en": "x = 2, y = 3",
      "answer_hi": "x = 2, y = 3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 89,
      "question_en": "If the lines 2x + 3y = 7 and kx + 9y = 12 are parallel, find k.",
      "question_hi": "यदि रेखाएँ 2x + 3y = 7 और kx + 9y = 12 समांतर हैं, तो k ज्ञात कीजिए।",
      "options_en": ["k = 6", "k = 4", "k = 3", "k = 2"],
      "options_hi": ["k = 6", "k = 4", "k = 3", "k = 2"],
      "answer_en": "k = 6",
      "answer_hi": "k = 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 90,
      "question_en": "The sum of two numbers is 20 and their difference is 4. Find the numbers.",
      "question_hi": "दो संख्याओं का योग 20 है और उनका अंतर 4 है। संख्याएँ ज्ञात कीजिए।",
      "options_en": ["12, 8", "11, 9", "13, 7", "14, 6"],
      "options_hi": ["12, 8", "11, 9", "13, 7", "14, 6"],
      "answer_en": "12, 8",
      "answer_hi": "12, 8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 91,
      "question_en": "Solve: 7x – 3y = 15 and 2x + 5y = 16.",
      "question_hi": "हल करें: 7x – 3y = 15 और 2x + 5y = 16।",
      "options_en": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"],
      "options_hi": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"],
      "answer_en": "x = 3, y = 2",
      "answer_hi": "x = 3, y = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 92,
      "question_en": "Find the value of k for which the system: 3x + 2y = 0 and kx + 5y = 0 has a non-zero solution.",
      "question_hi": "k का मान ज्ञात कीजिए जिसके लिए निकाय: 3x + 2y = 0 और kx + 5y = 0 का एक अशून्य हल है।",
      "options_en": ["k = 15/2", "k = 10/3", "k = 5", "k = 7.5"],
      "options_hi": ["k = 15/2", "k = 10/3", "k = 5", "k = 7.5"],
      "answer_en": "k = 15/2",
      "answer_hi": "k = 15/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 93,
      "question_en": "Solve for x and y: 2(x+3) – 3(y-2) = 1 and 3(x+2) + 2(y-3) = 4.",
      "question_hi": "x और y ज्ञात कीजिए: 2(x+3) – 3(y-2) = 1 और 3(x+2) + 2(y-3) = 4।",
      "options_en": ["x = -1, y = 4", "x = 2, y = 3", "x = 1, y = 2", "x = 0, y = 3"],
      "options_hi": ["x = -1, y = 4", "x = 2, y = 3", "x = 1, y = 2", "x = 0, y = 3"],
      "answer_en": "x = -1, y = 4",
      "answer_hi": "x = -1, y = 4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 94,
      "question_en": "If the lines 5x – 3y = 8 and 10x – 6y = k are coincident, find k.",
      "question_hi": "यदि रेखाएँ 5x – 3y = 8 और 10x – 6y = k संपाती हैं, तो k ज्ञात कीजिए।",
      "options_en": ["k = 16", "k = 12", "k = 8", "k = 4"],
      "options_hi": ["k = 16", "k = 12", "k = 8", "k = 4"],
      "answer_en": "k = 16",
      "answer_hi": "k = 16",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 95,
      "question_en": "Solve: 4x + 6y = 3xy and 8x + 9y = 5xy.",
      "question_hi": "हल करें: 4x + 6y = 3xy और 8x + 9y = 5xy।",
      "options_en": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 3", "x = 3, y = 4"],
      "options_hi": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 3", "x = 3, y = 4"],
      "answer_en": "x = 3, y = 2",
      "answer_hi": "x = 3, y = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 96,
      "question_en": "Find the value of a and b for which the system: ax + 3y = 7 and 2x + by = 14 has infinitely many solutions.",
      "question_hi": "a और b के मान ज्ञात कीजिए जिसके लिए निकाय: ax + 3y = 7 और 2x + by = 14 के अनंत हल हैं।",
      "options_en": ["a = 1, b = 6", "a = 2, b = 3", "a = 3, b = 2", "a = 6, b = 1"],
      "options_hi": ["a = 1, b = 6", "a = 2, b = 3", "a = 3, b = 2", "a = 6, b = 1"],
      "answer_en": "a = 1, b = 6",
      "answer_hi": "a = 1, b = 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 97,
      "question_en": "Solve: 6x + 5y = 7x + 3y + 1 = 2(x + 6y – 1).",
      "question_hi": "हल करें: 6x + 5y = 7x + 3y + 1 = 2(x + 6y – 1)।",
      "options_en": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"],
      "options_hi": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1", "x = 1, y = 4"],
      "answer_en": "x = 3, y = 2",
      "answer_hi": "x = 3, y = 2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 98,
      "question_en": "Find k if the system: x + 2y = 5 and 3x + ky = 15 has infinitely many solutions.",
      "question_hi": "k ज्ञात कीजिए यदि निकाय: x + 2y = 5 और 3x + ky = 15 के अनंत हल हैं।",
      "options_en": ["k = 6", "k = 5", "k = 4", "k = 3"],
      "options_hi": ["k = 6", "k = 5", "k = 4", "k = 3"],
      "answer_en": "k = 6",
      "answer_hi": "k = 6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 99,
      "question_en": "Solve for x and y: 0.5x + 0.3y = 1.3 and 0.2x + 0.7y = 2.3.",
      "question_hi": "x और y ज्ञात कीजिए: 0.5x + 0.3y = 1.3 और 0.2x + 0.7y = 2.3।",
      "options_en": ["x = 1, y = 3", "x = 2, y = 1", "x = 3, y = 2", "x = 4, y = 1"],
      "options_hi": ["x = 1, y = 3", "x = 2, y = 1", "x = 3, y = 2", "x = 4, y = 1"],
      "answer_en": "x = 2, y = 1",
      "answer_hi": "x = 2, y = 1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 100,
      "question_en": "If the pair of equations 3x + 4y = 12 and (k+3)x + 8y = 24 has infinitely many solutions, find k.",
      "question_hi": "यदि समीकरणों 3x + 4y = 12 और (k+3)x + 8y = 24 के युग्म के अनंत हल हैं, तो k ज्ञात कीजिए।",
      "options_en": ["k = 3", "k = 4", "k = 5", "k = 6"],
      "options_hi": ["k = 3", "k = 4", "k = 5", "k = 6"],
      "answer_en": "k = 3",
      "answer_hi": "k = 3",
      "attempted": false,
      "selected": ""
    }
  ]
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