const questions = [
  {
    num: 1,
    question_en: "Which is the national aquatic animal of India?",
    question_hi: "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
    options_en: ["Ganges Shark", "River Dolphin", "Saltwater Crocodile", "Olive Ridley Turtle"],
    options_hi: ["गंगा शार्क", "गंगा डॉल्फिन", "खारे पानी का मगरमच्छ", "ऑलिव रिडले कछुआ"],
    answer_en: "River Dolphin",
    answer_hi: "गंगा डॉल्फिन",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "The 'Blue Revolution' is related to:",
    question_hi: "'नीली क्रांति' किससे संबंधित है?",
    options_en: ["Space Exploration", "Fisheries Development", "Water Conservation", "Renewable Energy"],
    options_hi: ["अंतरिक्ष अन्वेषण", "मत्स्य पालन विकास", "जल संरक्षण", "नवीकरणीय ऊर्जा"],
    answer_en: "Fisheries Development",
    answer_hi: "मत्स्य पालन विकास",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which state is known as the 'Land of Five Rivers'?",
    question_hi: "किस राज्य को 'पांच नदियों की भूमि' कहा जाता है?",
    options_en: ["Haryana", "Punjab", "Uttar Pradesh", "Bihar"],
    options_hi: ["हरियाणा", "पंजाब", "उत्तर प्रदेश", "बिहार"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "The 'Kudankulam Nuclear Power Plant' is located in which state?",
    question_hi: "'कुडनकुलम परमाणु ऊर्जा संयंत्र' किस राज्य में स्थित है?",
    options_en: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    options_hi: ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    answer_en: "Tamil Nadu",
    answer_hi: "तमिलनाडु",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which of these is NOT a computer port?",
    question_hi: "यह में से कौन सा कंप्यूटर पोर्ट नहीं है?",
    options_en: ["USB", "HDMI", "RAM", "VGA"],
    options_hi: ["यूएसबी", "एचडीएमआई", "रैम", "वीजीए"],
    answer_en: "RAM",
    answer_hi: "रैम",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "The 'Dandi March' was associated with:",
    question_hi: "'दांडी मार्च' किससे जुड़ा था?",
    options_en: ["Quit India Movement", "Non-Cooperation Movement", "Civil Disobedience Movement", "Khilafat Movement"],
    options_hi: ["भारत छोड़ो आंदोलन", "असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "खिलाफत आंदोलन"],
    answer_en: "Civil Disobedience Movement",
    answer_hi: "सविनय अवज्ञा आंदोलन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which is the largest gland in the human body?",
    question_hi: "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
    options_en: ["Pancreas", "Thyroid", "Liver", "Pituitary"],
    options_hi: ["अग्न्याशय", "थायरॉयड", "यकृत", "पिट्यूटरी"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "The 'Project Tiger' was launched in which year?",
    question_hi: "'प्रोजेक्ट टाइगर' किस वर्ष शुरू किया गया था?",
    options_en: ["1971", "1973", "1975", "1977"],
    options_hi: ["1971", "1973", "1975", "1977"],
    answer_en: "1973",
    answer_hi: "1973",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which is the largest union territory of India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा केंद्र शासित प्रदेश कौन सा है?",
    options_en: ["Delhi", "Puducherry", "Jammu & Kashmir", "Ladakh"],
    options_hi: ["दिल्ली", "पुदुचेरी", "जम्मू और कश्मीर", "लद्दाख"],
    answer_en: "Ladakh",
    answer_hi: "लद्दाख",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "The 'Kalinga War' was fought by which emperor?",
    question_hi: "'कलिंग युद्ध' किस सम्राट ने लड़ा था?",
    options_en: ["Chandragupta Maurya", "Ashoka", "Harsha", "Samudragupta"],
    options_hi: ["चंद्रगुप्त मौर्य", "अशोक", "हर्ष", "समुद्रगुप्त"],
    answer_en: "Ashoka",
    answer_hi: "अशोक",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which is the largest planet in our solar system?",
    question_hi: "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Earth", "Saturn", "Jupiter", "Neptune"],
    options_hi: ["पृथ्वी", "शनि", "बृहस्पति", "नेपच्यून"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The 'Gateway of India' is located in:",
    question_hi: "'गेटवे ऑफ इंडिया' कहाँ स्थित है?",
    options_en: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    options_hi: ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    answer_en: "Mumbai",
    answer_hi: "मुंबई",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which gas is filled in electric bulbs?",
    question_hi: "बिजली के बल्बों में कौन सी गैस भरी जाती है?",
    options_en: ["Oxygen", "Hydrogen", "Nitrogen", "Argon"],
    options_hi: ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "आर्गन"],
    answer_en: "Argon",
    answer_hi: "आर्गन",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "The 'Statue of Unity' is dedicated to:",
    question_hi: "'स्टैच्यू ऑफ यूनिटी' किसको समर्पित है?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "B.R. Ambedkar"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "बी.आर. अंबेडकर"],
    answer_en: "Sardar Patel",
    answer_hi: "सरदार पटेल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which is the largest coffee producing state in India?",
    question_hi: "भारत में सबसे अधिक कॉफी उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
    answer_en: "Karnataka",
    answer_hi: "कर्नाटक",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "The 'Red Fort' is located in which city?",
    question_hi: "'लाल किला' किस शहर में स्थित है?",
    options_en: ["Agra", "Delhi", "Jaipur", "Lucknow"],
    options_hi: ["आगरा", "दिल्ली", "जयपुर", "लखनऊ"],
    answer_en: "Delhi",
    answer_hi: "दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which is the largest desert in India?",
    question_hi: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Thar Desert", "Rann of Kutch", "Ladakh Desert", "Deccan Thorn Forest"],
    options_hi: ["थार रेगिस्तान", "कच्छ का रण", "लद्दाख रेगिस्तान", "दक्कन कांटेदार जंगल"],
    answer_en: "Thar Desert",
    answer_hi: "थार रेगिस्तान",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "The 'National Mathematics Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय गणित दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "22 December", "5 September", "28 February"],
    options_hi: ["14 नवंबर", "22 दिसंबर", "5 सितंबर", "28 फरवरी"],
    answer_en: "22 December",
    answer_hi: "22 दिसंबर",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which is the largest island in India?",
    question_hi: "भारत का सबसे बड़ा द्वीप कौन सा है?",
    options_en: ["Majuli", "Diu", "Andaman Island", "Lakshadweep"],
    options_hi: ["माजुली", "दीव", "अंडमान द्वीप", "लक्षद्वीप"],
    answer_en: "Andaman Island",
    answer_hi: "अंडमान द्वीप",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "The 'Indian Space Research Organisation (ISRO)' is headquartered at:",
    question_hi: "'भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO)' का मुख्यालय कहाँ है?",
    options_en: ["Mumbai", "Chennai", "Bangalore", "Hyderabad"],
    options_hi: ["मुंबई", "चेन्नई", "बैंगलोर", "हैदराबाद"],
    answer_en: "Bangalore",
    answer_hi: "बैंगलोर",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which is the largest freshwater lake in India?",
    question_hi: "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
    options_en: ["Dal Lake", "Wular Lake", "Chilika Lake", "Loktak Lake"],
    options_hi: ["डल झील", "वुलर झील", "चिल्का झील", "लोकटक झील"],
    answer_en: "Wular Lake",
    answer_hi: "वुलर झील",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "The 'National Science Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय विज्ञान दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "5 September", "22 December"],
    options_hi: ["14 नवंबर", "28 फरवरी", "5 सितंबर", "22 दिसंबर"],
    answer_en: "28 February",
    answer_hi: "28 फरवरी",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which is the largest producer of sugarcane in India?",
    question_hi: "भारत में सबसे अधिक गन्ना उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu"],
    options_hi: ["महाराष्ट्र", "उत्तर प्रदेश", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "The 'National Sports Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय खेल दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "29 August", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "29 अगस्त", "5 सितंबर"],
    answer_en: "29 August",
    answer_hi: "29 अगस्त",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which is the largest producer of tea in India?",
    question_hi: "भारत में सबसे अधिक चाय उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Kerala", "Tamil Nadu", "West Bengal", "Assam"],
    options_hi: ["केरल", "तमिलनाडु", "पश्चिम बंगाल", "असम"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "The 'National Voters Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय मतदाता दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "25 January", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "25 जनवरी", "5 सितंबर"],
    answer_en: "25 January",
    answer_hi: "25 जनवरी",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which is the largest producer of cotton in India?",
    question_hi: "भारत में सबसे अधिक कपास उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Maharashtra", "Gujarat", "Punjab", "Haryana"],
    options_hi: ["महाराष्ट्र", "गुजरात", "पंजाब", "हरियाणा"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "The 'National Youth Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय युवा दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "12 January", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "12 जनवरी", "5 सितंबर"],
    answer_en: "12 January",
    answer_hi: "12 जनवरी",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which is the largest producer of wheat in India?",
    question_hi: "भारत में सबसे अधिक गेहूं उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "मध्य प्रदेश"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "The 'National Education Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय शिक्षा दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "11 November", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "11 नवंबर", "5 सितंबर"],
    answer_en: "11 November",
    answer_hi: "11 नवंबर",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which is the largest producer of rice in India?",
    question_hi: "भारत में सबसे अधिक चावल उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Punjab", "West Bengal", "Uttar Pradesh", "Andhra Pradesh"],
    options_hi: ["पंजाब", "पश्चिम बंगाल", "उत्तर प्रदेश", "आंध्र प्रदेश"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "The 'National Girl Child Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय बालिका दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "24 January", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "24 जनवरी", "5 सितंबर"],
    answer_en: "24 January",
    answer_hi: "24 जनवरी",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which is the largest producer of jute in India?",
    question_hi: "भारत में सबसे अधिक जूट उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["West Bengal", "Bihar", "Assam", "Odisha"],
    options_hi: ["पश्चिम बंगाल", "बिहार", "असम", "ओडिशा"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "The 'National Doctor's Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय चिकित्सक दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "1 July", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "1 जुलाई", "5 सितंबर"],
    answer_en: "1 July",
    answer_hi: "1 जुलाई",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which is the largest producer of rubber in India?",
    question_hi: "भारत में सबसे अधिक रबर उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"],
    options_hi: ["तमिलनाडु", "कर्नाटक", "केरल", "आंध्र प्रदेश"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "The 'National Handloom Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय हथकरघा दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "7 August", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "7 अगस्त", "5 सितंबर"],
    answer_en: "7 August",
    answer_hi: "7 अगस्त",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which is the largest producer of silk in India?",
    question_hi: "भारत में सबसे अधिक रेशम उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Karnataka", "Tamil Nadu", "West Bengal", "Jammu & Kashmir"],
    options_hi: ["कर्नाटक", "तमिलनाडु", "पश्चिम बंगाल", "जम्मू और कश्मीर"],
    answer_en: "Karnataka",
    answer_hi: "कर्नाटक",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "The 'National Unity Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय एकता दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "31 October", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "31 अक्टूबर", "5 सितंबर"],
    answer_en: "31 October",
    answer_hi: "31 अक्टूबर",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which is the largest producer of mangoes in India?",
    question_hi: "भारत में सबसे अधिक आम उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Maharashtra", "Gujarat", "Uttar Pradesh", "Andhra Pradesh"],
    options_hi: ["महाराष्ट्र", "गुजरात", "उत्तर प्रदेश", "आंध्र प्रदेश"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "The 'National Milk Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय दुग्ध दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "26 November", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "26 नवंबर", "5 सितंबर"],
    answer_en: "26 November",
    answer_hi: "26 नवंबर",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which is the largest producer of bananas in India?",
    question_hi: "भारत में सबसे अधिक केले उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Kerala", "Tamil Nadu", "Maharashtra", "Gujarat"],
    options_hi: ["केरल", "तमिलनाडु", "महाराष्ट्र", "गुजरात"],
    answer_en: "Tamil Nadu",
    answer_hi: "तमिलनाडु",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "The 'National Technology Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय प्रौद्योगिकी दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "11 May", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "11 मई", "5 सितंबर"],
    answer_en: "11 May",
    answer_hi: "11 मई",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which is the largest producer of spices in India?",
    question_hi: "भारत में सबसे अधिक मसाले उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
    answer_en: "Andhra Pradesh",
    answer_hi: "आंध्र प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "The 'National Ayurveda Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय आयुर्वेद दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "Dhanteras", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "धनतेरस", "5 सितंबर"],
    answer_en: "Dhanteras",
    answer_hi: "धनतेरस",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which is the largest producer of milk in India?",
    question_hi: "भारत में सबसे अधिक दूध उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Gujarat", "Punjab", "Uttar Pradesh", "Rajasthan"],
    options_hi: ["गुजरात", "पंजाब", "उत्तर प्रदेश", "राजस्थान"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "The 'National Farmers Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय किसान दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "23 December", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "23 दिसंबर", "5 सितंबर"],
    answer_en: "23 December",
    answer_hi: "23 दिसंबर",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which is the largest producer of groundnut in India?",
    question_hi: "भारत में सबसे अधिक मूंगफली उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Gujarat", "Rajasthan", "Maharashtra", "Andhra Pradesh"],
    options_hi: ["गुजरात", "राजस्थान", "महाराष्ट्र", "आंध्र प्रदेश"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "The 'National Tourism Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय पर्यटन दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "25 January", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "25 जनवरी", "5 सितंबर"],
    answer_en: "25 January",
    answer_hi: "25 जनवरी",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which is the largest producer of coconut in India?",
    question_hi: "भारत में सबसे अधिक नारियल उत्पादन करने वाला राज्य कौन सा है?",
    options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "The 'National Consumer Day' is celebrated on which date?",
    question_hi: "'राष्ट्रीय उपभोक्ता दिवस' किस तारीख को मनाया जाता है?",
    options_en: ["14 November", "28 February", "24 December", "5 September"],
    options_hi: ["14 नवंबर", "28 फरवरी", "24 दिसंबर", "5 सितंबर"],
    answer_en: "24 December",
    answer_hi: "24 दिसंबर",
    attempted: false,
    selected: ""
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