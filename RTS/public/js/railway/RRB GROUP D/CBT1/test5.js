const questions = [
  {
    "num": 1,
    "question_en": "If a train 150 meters long passes a pole in 5 seconds, what is its speed in km/h?",
    "question_hi": "यदि 150 मीटर लंबी एक ट्रेन एक खंभे को 5 सेकंड में पार करती है, तो उसकी गति किमी/घंटा में क्या है?",
    "options_en": ["90", "108", "120", "135"],
    "options_hi": ["90", "108", "120", "135"],
    "answer_en": "108",
    "answer_hi": "108",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Find the odd one out: 8, 27, 64, 125, 216, 344",
    "question_hi": "विषम पद ज्ञात करें: 8, 27, 64, 125, 216, 344",
    "options_en": ["27", "64", "125", "344"],
    "options_hi": ["27", "64", "125", "344"],
    "answer_en": "344",
    "answer_hi": "344",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "The SI unit of electrical resistance is:",
    "question_hi": "विद्युत प्रतिरोध की SI इकाई है:",
    "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
    "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वॉट"],
    "answer_en": "Ohm",
    "answer_hi": "ओम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "A man buys a toy for Rs. 200 and sells it for Rs. 250. Find his profit percentage.",
    "question_hi": "एक व्यक्ति 200 रुपये में एक खिलौना खरीदता है और उसे 250 रुपये में बेचता है। उसका लाभ प्रतिशत ज्ञात करें।",
    "options_en": ["20%", "25%", "30%", "15%"],
    "options_hi": ["20%", "25%", "30%", "15%"],
    "answer_en": "25%",
    "answer_hi": "25%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Select the related word: Cow : Calf :: Lion : ?",
    "question_hi": "संबंधित शब्द चुनें: गाय : बछड़ा :: शेर : ?",
    "options_en": ["Cub", "Kitten", "Puppy", "Foal"],
    "options_hi": ["शावक", "बिल्ली का बच्चा", "पिल्ला", "घोड़े का बच्चा"],
    "answer_en": "Cub",
    "answer_hi": "शावक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The chemical formula of Sulfuric Acid is:",
    "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र है:",
    "options_en": ["H2SO3", "H2SO4", "HCl", "HNO3"],
    "options_hi": ["H2SO3", "H2SO4", "HCl", "HNO3"],
    "answer_en": "H2SO4",
    "answer_hi": "H2SO4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "A person's shadow is shortest at:",
    "question_hi": "किसी व्यक्ति की छाया कब सबसे छोटी होती है?",
    "options_en": ["Morning", "Noon", "Evening", "Night"],
    "options_hi": ["सुबह", "दोपहर", "शाम", "रात"],
    "answer_en": "Noon",
    "answer_hi": "दोपहर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "If 5 workers can complete a task in 12 days, how many days will 6 workers take to complete the same task?",
    "question_hi": "यदि 5 कर्मचारी एक कार्य को 12 दिनों में पूरा कर सकते हैं, तो 6 कर्मचारी उसी कार्य को कितने दिनों में पूरा करेंगे?",
    "options_en": ["8", "10", "12", "15"],
    "options_hi": ["8", "10", "12", "15"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the full form of 'CRPF'?",
    "question_hi": "'CRPF' का पूर्ण रूप क्या है?",
    "options_en": ["Central Reserve Police Force", "Central Region Police Force", "Central Railway Police Force", "Central Republic Police Force"],
    "options_hi": ["केंद्रीय रिजर्व पुलिस बल", "केंद्रीय क्षेत्र पुलिस बल", "केंद्रीय रेलवे पुलिस बल", "केंद्रीय गणराज्य पुलिस बल"],
    "answer_en": "Central Reserve Police Force",
    "answer_hi": "केंद्रीय रिजर्व पुलिस बल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Find the average of first 10 natural numbers.",
    "question_hi": "पहली 10 प्राकृतिक संख्याओं का औसत ज्ञात कीजिए।",
    "options_en": ["5", "5.5", "6", "6.5"],
    "options_hi": ["5", "5.5", "6", "6.5"],
    "answer_en": "5.5",
    "answer_hi": "5.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Who is known as the 'Father of the Indian Constitution'?",
    "question_hi": "'भारतीय संविधान के जनक' के रूप में किसे जाना जाता है?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अम्बेडकर", "सरदार पटेल"],
    "answer_en": "B.R. Ambedkar",
    "answer_hi": "बी.आर. अम्बेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "If DAY is coded as 4-1-25, then how is NIGHT coded?",
    "question_hi": "यदि DAY को 4-1-25 से कूटबद्ध किया जाता है, तो NIGHT को कैसे कूटबद्ध किया जाएगा?",
    "options_en": ["14-9-7-8-20", "13-8-7-19-20", "14-8-7-8-20", "13-9-7-19-20"],
    "options_hi": ["14-9-7-8-20", "13-8-7-19-20", "14-8-7-8-20", "13-9-7-19-20"],
    "answer_en": "14-9-7-8-20",
    "answer_hi": "14-9-7-8-20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The HCF of 36 and 84 is:",
    "question_hi": "36 और 84 का महत्तम समापवर्तक (HCF) है:",
    "options_en": ["6", "12", "18", "24"],
    "options_hi": ["6", "12", "18", "24"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which river is known as the 'Sorrow of Bihar'?",
    "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
    "options_en": ["Ganga", "Kosi", "Gandak", "Yamuna"],
    "options_hi": ["गंगा", "कोसी", "गंडक", "यमुना"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "A clock shows 3:15. What is the angle between the hour and minute hands?",
    "question_hi": "एक घड़ी 3:15 दिखाती है। घंटे और मिनट की सूइयों के बीच का कोण क्या है?",
    "options_en": ["0°", "7.5°", "15°", "30°"],
    "options_hi": ["0°", "7.5°", "15°", "30°"],
    "answer_en": "7.5°",
    "answer_hi": "7.5°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which vitamin is produced in the human body when exposed to sunlight?",
    "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन डी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Simplify: 15 + 3 × 4 - 6 ÷ 2",
    "question_hi": "सरल कीजिए: 15 + 3 × 4 - 6 ÷ 2",
    "options_en": ["18", "24", "21", "30"],
    "options_hi": ["18", "24", "21", "30"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The Red Fort in Delhi is located on the banks of which river?",
    "question_hi": "दिल्ली में लाल किला किस नदी के तट पर स्थित है?",
    "options_en": ["Ganga", "Yamuna", "Sutlej", "Beas"],
    "options_hi": ["गंगा", "यमुना", "सतलज", "ब्यास"],
    "answer_en": "Yamuna",
    "answer_hi": "यमुना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "If A is brother of B, B is sister of C, and C is father of D, how is A related to D?",
    "question_hi": "यदि A, B का भाई है, B, C की बहन है, और C, D का पिता है, तो A, D से कैसे संबंधित है?",
    "options_en": ["Uncle", "Father", "Brother", "Cousin"],
    "options_hi": ["चाचा/मामा", "पिता", "भाई", "चचेरा भाई"],
    "answer_en": "Uncle",
    "answer_hi": "चाचा/मामा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the square root of 1764?",
    "question_hi": "1764 का वर्गमूल क्या है?",
    "options_en": ["38", "42", "48", "52"],
    "options_hi": ["38", "42", "48", "52"],
    "answer_en": "42",
    "answer_hi": "42",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which planet is known as the 'Red Planet'?",
    "question_hi": "किस ग्रह को 'लाल ग्रह' के नाम से जाना जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "A sum of money doubles itself in 10 years at simple interest. What is the rate of interest?",
    "question_hi": "एक धनराशि साधारण ब्याज पर 10 वर्षों में स्वयं की दोगुनी हो जाती है। ब्याज की दर क्या है?",
    "options_en": ["8%", "10%", "12%", "15%"],
    "options_hi": ["8%", "10%", "12%", "15%"],
    "answer_en": "10%",
    "answer_hi": "10%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Find the next letter in the series: A, D, G, J, ?",
    "question_hi": "श्रृंखला में अगला अक्षर ज्ञात करें: A, D, G, J, ?",
    "options_en": ["K", "L", "M", "N"],
    "options_hi": ["K", "L", "M", "N"],
    "answer_en": "M",
    "answer_hi": "M",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The 'Gateway of India' is located in:",
    "question_hi": "'गेटवे ऑफ इंडिया' कहाँ स्थित है?",
    "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The value of (0.5 × 0.5 + 0.05 × 0.05) is:",
    "question_hi": "(0.5 × 0.5 + 0.05 × 0.05) का मान है:",
    "options_en": ["0.2525", "0.5025", "0.255", "0.505"],
    "options_hi": ["0.2525", "0.5025", "0.255", "0.505"],
    "answer_en": "0.2525",
    "answer_hi": "0.2525",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Who wrote the Indian National Anthem 'Jana Gana Mana'?",
    "question_hi": "भारतीय राष्ट्रगान 'जन गण मन' किसने लिखा?",
    "options_en": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Muhammad Iqbal", "Sarojini Naidu"],
    "options_hi": ["बंकिम चंद्र चट्टोपाध्याय", "रबींद्रनाथ टैगोर", "मुहम्मद इकबाल", "सरोजिनी नायडू"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रबींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 25% of 25% of 400?",
    "question_hi": "400 के 25% के 25% क्या है?",
    "options_en": ["20", "25", "30", "40"],
    "options_hi": ["20", "25", "30", "40"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the capital of Madhya Pradesh?",
    "question_hi": "मध्य प्रदेश की राजधानी क्या है?",
    "options_en": ["Indore", "Bhopal", "Jabalpur", "Gwalior"],
    "options_hi": ["इंदौर", "भोपाल", "जबलपुर", "ग्वालियर"],
    "answer_en": "Bhopal",
    "answer_hi": "भोपाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "In a certain code, 'GOOD' is written as 'HPPE'. How is 'BEST' written in that code?",
    "question_hi": "एक निश्चित कूट में, 'GOOD' को 'HPPE' लिखा जाता है। उसी कूट में 'BEST' को कैसे लिखा जाएगा?",
    "options_en": ["CFTU", "CETU", "CFUT", "CEUT"],
    "options_hi": ["CFTU", "CETU", "CFUT", "CEUT"],
    "answer_en": "CFTU",
    "answer_hi": "CFTU",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The smallest prime number is:",
    "question_hi": "सबसे छोटी अभाज्य संख्या है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Who discovered Penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Marie Curie"],
    "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "मैरी क्यूरी"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "A shopkeeper sells an article at a 10% loss. If he had sold it for Rs. 90 more, he would have gained 5%. Find the cost price of the article.",
    "question_hi": "एक दुकानदार एक वस्तु को 10% हानि पर बेचता है। यदि वह इसे 90 रुपये अधिक में बेचता, तो उसे 5% का लाभ होता। वस्तु का क्रय मूल्य ज्ञात कीजिए।",
    "options_en": ["400", "500", "600", "700"],
    "options_hi": ["400", "500", "600", "700"],
    "answer_en": "600",
    "answer_hi": "600",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of the following is not a vector quantity?",
    "question_hi": "निम्नलिखित में से कौन सी एक सदिश राशि नहीं है?",
    "options_en": ["Velocity", "Force", "Speed", "Displacement"],
    "options_hi": ["वेग", "बल", "चाल", "विस्थापन"],
    "answer_en": "Speed",
    "answer_hi": "चाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Complete the analogy: 9 : 81 :: 12 : ?",
    "question_hi": "सादृश्य को पूरा करें: 9 : 81 :: 12 : ?",
    "options_en": ["144", "121", "169", "100"],
    "options_hi": ["144", "121", "169", "100"],
    "answer_en": "144",
    "answer_hi": "144",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which instrument is used to measure atmospheric pressure?",
    "question_hi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The LCM of 12, 15 and 20 is:",
    "question_hi": "12, 15 और 20 का लघुत्तम समापवर्त्य (LCM) है:",
    "options_en": ["40", "50", "60", "80"],
    "options_hi": ["40", "50", "60", "80"],
    "answer_en": "60",
    "answer_hi": "60",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के प्रथम राष्ट्रपति कौन थे?",
    "options_en": ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "V.V. Giri"],
    "options_hi": ["राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "वी.वी. गिरी"],
    "answer_en": "Rajendra Prasad",
    "answer_hi": "राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "If 'PEN' is written as '+$#' and 'INK' is written as '@*?', how is 'PINK' written?",
    "question_hi": "यदि 'PEN' को '+$#' लिखा जाता है और 'INK' को '@*?' लिखा जाता है, तो 'PINK' को कैसे लिखा जाएगा?",
    "options_en": ["+@*?", "+$*?", "+$#?", "+@#?"],
    "options_hi": ["+@*?", "+$*?", "+$#?", "+@#?"],
    "answer_en": "+@*?",
    "answer_hi": "+@*?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "The process of conversion of water vapour into liquid is called:",
    "question_hi": "जल वाष्प का द्रव में परिवर्तन की प्रक्रिया को कहते हैं:",
    "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
    "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "जमना"],
    "answer_en": "Condensation",
    "answer_hi": "संघनन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "A man walks 5 km towards South, then turns right and walks 3 km, then turns left and walks 2 km. In which direction is he from his starting point?",
    "question_hi": "एक व्यक्ति दक्षिण की ओर 5 किमी चलता है, फिर दाएं मुड़ता है और 3 किमी चलता है, फिर बाएं मुड़ता है और 2 किमी चलता है। वह अपने प्रारंभिक बिंदु से किस दिशा में है?",
    "options_en": ["South-East", "South-West", "North-East", "North-West"],
    "options_hi": ["दक्षिण-पूर्व", "दक्षिण-पश्चिम", "उत्तर-पूर्व", "उत्तर-पश्चिम"],
    "answer_en": "South-West",
    "answer_hi": "दक्षिण-पश्चिम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The largest gland in the human body is:",
    "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
    "options_en": ["Liver", "Pancreas", "Thyroid", "Adrenal"],
    "options_hi": ["यकृत (लिवर)", "अग्न्याशय", "थायरॉयड", "अधिवृक्क"],
    "answer_en": "Liver",
    "answer_hi": "यकृत (लिवर)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "0.02 when expressed as a percentage is:",
    "question_hi": "0.02 को प्रतिशत के रूप में व्यक्त करने पर है:",
    "options_en": ["0.2%", "2%", "20%", "200%"],
    "options_hi": ["0.2%", "2%", "20%", "200%"],
    "answer_en": "2%",
    "answer_hi": "2%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "In which year did India become a Republic?",
    "question_hi": "भारत किस वर्ष एक गणराज्य बना?",
    "options_en": ["1947", "1949", "1950", "1952"],
    "options_hi": ["1947", "1949", "1950", "1952"],
    "answer_en": "1950",
    "answer_hi": "1950",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The area of a rectangle with length 12 cm and breadth 5 cm is:",
    "question_hi": "12 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत का क्षेत्रफल है:",
    "options_en": ["50 sq cm", "60 sq cm", "70 sq cm", "80 sq cm"],
    "options_hi": ["50 वर्ग सेमी", "60 वर्ग सेमी", "70 वर्ग सेमी", "80 वर्ग सेमी"],
    "answer_en": "60 sq cm",
    "answer_hi": "60 वर्ग सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which gas is most abundant in the Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में पाई जाती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "If 'A' means '+', 'B' means '-', 'C' means '×', and 'D' means '÷', then what is the value of 18 C 14 A 6 B 16 D 4?",
    "question_hi": "यदि 'A' का अर्थ '+', 'B' का अर्थ '-', 'C' का अर्थ '×', और 'D' का अर्थ '÷' है, तो 18 C 14 A 6 B 16 D 4 का मान क्या है?",
    "options_en": ["254", "238", "188", "268"],
    "options_hi": ["254", "238", "188", "268"],
    "answer_en": "254",
    "answer_hi": "254",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The 'Kumbh Mela' is held at which of the following places?",
    "question_hi": "'कुंभ मेला' निम्नलिखित में से किस स्थान पर आयोजित किया जाता है?",
    "options_en": ["Prayagraj, Haridwar, Nashik, Ujjain", "Varanasi, Mathura, Ayodhya, Puri", "Allahabad, Rishikesh, Varanasi, Mathura", "Haridwar, Varanasi, Rishikesh, Prayagraj"],
    "options_hi": ["प्रयागराज, हरिद्वार, नासिक, उज्जैन", "वाराणसी, मथुरा, अयोध्या, पुरी", "इलाहाबाद, ऋषिकेश, वाराणसी, मथुरा", "हरिद्वार, वाराणसी, ऋषिकेश, प्रयागराज"],
    "answer_en": "Prayagraj, Haridwar, Nashik, Ujjain",
    "answer_hi": "प्रयागराज, हरिद्वार, नासिक, उज्जैन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The perimeter of a square is 40 cm. What is its area?",
    "question_hi": "एक वर्ग का परिमाप 40 सेमी है। इसका क्षेत्रफल क्या है?",
    "options_en": ["80 sq cm", "100 sq cm", "120 sq cm", "160 sq cm"],
    "options_hi": ["80 वर्ग सेमी", "100 वर्ग सेमी", "120 वर्ग सेमी", "160 वर्ग सेमी"],
    "answer_en": "100 sq cm",
    "answer_hi": "100 वर्ग सेमी",
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