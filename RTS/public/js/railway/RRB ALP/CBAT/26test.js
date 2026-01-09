const questions = [
   {
  "num": 1,
  "question_en": "Which of the following is known as the 'Powerhouse of the Cell'?",
  "question_hi": "निम्नलिखित में से किसे 'कोशिका का पावरहाउस' कहा जाता है?",
  "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
  "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
  "answer_en": "Mitochondria",
  "answer_hi": "माइटोकॉन्ड्रिया",
  "attempted": false,
  "selected": ""
},
{
  "num": 2,
  "question_en": "Who was the first Indian to go to space?",
  "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
  "options_en": ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Ravish Malhotra"],
  "options_hi": ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "रविश मल्होत्रा"],
  "answer_en": "Rakesh Sharma",
  "answer_hi": "राकेश शर्मा",
  "attempted": false,
  "selected": ""
},
{
  "num": 3,
  "question_en": "What is the chemical formula of Common Salt?",
  "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
  "options_en": ["NaCl", "KCl", "CaCO3", "NaHCO3"],
  "options_hi": ["NaCl", "KCl", "CaCO3", "NaHCO3"],
  "answer_en": "NaCl",
  "answer_hi": "NaCl",
  "attempted": false,
  "selected": ""
},
{
  "num": 4,
  "question_en": "Which planet is known as the 'Blue Planet'?",
  "question_hi": "किस ग्रह को 'नीला ग्रह' कहा जाता है?",
  "options_en": ["Earth", "Mars", "Neptune", "Uranus"],
  "options_hi": ["पृथ्वी", "मंगल", "वरुण", "अरुण"],
  "answer_en": "Earth",
  "answer_hi": "पृथ्वी",
  "attempted": false,
  "selected": ""
},
{
  "num": 5,
  "question_en": "What is the SI unit of force?",
  "question_hi": "बल की SI इकाई क्या है?",
  "options_en": ["Pascal", "Newton", "Joule", "Watt"],
  "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
  "answer_en": "Newton",
  "answer_hi": "न्यूटन",
  "attempted": false,
  "selected": ""
},
{
  "num": 6,
  "question_en": "Who wrote the national song of India 'Vande Mataram'?",
  "question_hi": "भारत के राष्ट्रीय गीत 'वंदे मातरम' किसने लिखा?",
  "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhash Chandra Bose"],
  "options_hi": ["रबीन्द्रनाथ टैगोर", "बंकिम चन्द्र चट्टोपाध्याय", "महात्मा गांधी", "सुभाष चंद्र बोस"],
  "answer_en": "Bankim Chandra Chatterjee",
  "answer_hi": "बंकिम चन्द्र चट्टोपाध्याय",
  "attempted": false,
  "selected": ""
},
{
  "num": 7,
  "question_en": "Which is the longest river in India?",
  "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
  "options_en": ["Yamuna", "Brahmaputra", "Ganga", "Godavari"],
  "options_hi": ["यमुना", "ब्रह्मपुत्र", "गंगा", "गोदावरी"],
  "answer_en": "Ganga",
  "answer_hi": "गंगा",
  "attempted": false,
  "selected": ""
},
{
  "num": 8,
  "question_en": "Which gas is used in fire extinguishers?",
  "question_hi": "आग बुझाने के यंत्रों में कौन सी गैस प्रयुक्त होती है?",
  "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  "answer_en": "Carbon Dioxide",
  "answer_hi": "कार्बन डाइऑक्साइड",
  "attempted": false,
  "selected": ""
},
{
  "num": 9,
  "question_en": "Which is the largest gland in the human body?",
  "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
  "options_en": ["Liver", "Pancreas", "Thyroid", "Pituitary"],
  "options_hi": ["यकृत", "अग्न्याशय", "थायराइड", "पिट्यूटरी"],
  "answer_en": "Liver",
  "answer_hi": "यकृत",
  "attempted": false,
  "selected": ""
},
{
  "num": 10,
  "question_en": "Which instrument is used to measure electric current?",
  "question_hi": "विद्युत धारा मापने के लिए किस यंत्र का उपयोग किया जाता है?",
  "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
  "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "ओममीटर"],
  "answer_en": "Ammeter",
  "answer_hi": "एमीटर",
  "attempted": false,
  "selected": ""
},
{
  "num": 11,
  "question_en": "What is the chemical formula of Water?",
  "question_hi": "पानी का रासायनिक सूत्र क्या है?",
  "options_en": ["H2O", "HO2", "H2O2", "HO"],
  "options_hi": ["H2O", "HO2", "H2O2", "HO"],
  "answer_en": "H2O",
  "answer_hi": "H2O",
  "attempted": false,
  "selected": ""
},
{
  "num": 12,
  "question_en": "Who was the first woman Prime Minister of India?",
  "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
  "options_en": ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
  "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी"],
  "answer_en": "Indira Gandhi",
  "answer_hi": "इंदिरा गांधी",
  "attempted": false,
  "selected": ""
},
{
  "num": 13,
  "question_en": "Which is the largest ocean in the world?",
  "question_hi": "दुनिया का सबसे बड़ा महासागर कौन सा है?",
  "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
  "answer_en": "Pacific Ocean",
  "answer_hi": "प्रशांत महासागर",
  "attempted": false,
  "selected": ""
},
{
  "num": 14,
  "question_en": "What is the speed of sound in air at 20°C?",
  "question_hi": "20°C पर हवा में ध्वनि की गति क्या है?",
  "options_en": ["331 m/s", "340 m/s", "343 m/s", "350 m/s"],
  "options_hi": ["331 मी/से", "340 मी/से", "343 मी/से", "350 मी/से"],
  "answer_en": "343 m/s",
  "answer_hi": "343 मी/से",
  "attempted": false,
  "selected": ""
},
{
  "num": 15,
  "question_en": "Which vitamin deficiency causes Night Blindness?",
  "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
  "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
  "answer_en": "Vitamin A",
  "answer_hi": "विटामिन ए",
  "attempted": false,
  "selected": ""
},
{
  "num": 16,
  "question_en": "Who invented the telephone?",
  "question_hi": "टेलीफोन का आविष्कार किसने किया?",
  "options_en": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
  "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "गुग्लिल्मो मार्कोनी"],
  "answer_en": "Alexander Graham Bell",
  "answer_hi": "अलेक्जेंडर ग्राहम बेल",
  "attempted": false,
  "selected": ""
},
{
  "num": 17,
  "question_en": "What is the atomic number of Oxygen?",
  "question_hi": "ऑक्सीजन की परमाणु संख्या क्या है?",
  "options_en": ["6", "8", "10", "16"],
  "options_hi": ["6", "8", "10", "16"],
  "answer_en": "8",
  "answer_hi": "8",
  "attempted": false,
  "selected": ""
},
{
  "num": 18,
  "question_en": "Which is the smallest bone in the human body?",
  "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
  "options_en": ["Stapes", "Femur", "Tibia", "Radius"],
  "options_hi": ["स्टेप्स", "फीमर", "टिबिया", "रेडियस"],
  "answer_en": "Stapes",
  "answer_hi": "स्टेप्स",
  "attempted": false,
  "selected": ""
},
{
  "num": 19,
  "question_en": "Who painted the Mona Lisa?",
  "question_hi": "मोना लिसा की पेंटिंग किसने की?",
  "options_en": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
  "options_hi": ["विंसेंट वैन गॉग", "लियोनार्दो दा विंची", "पाब्लो पिकासो", "माइकलएंजेलो"],
  "answer_en": "Leonardo da Vinci",
  "answer_hi": "लियोनार्दो दा विंची",
  "attempted": false,
  "selected": ""
},
{
  "num": 20,
  "question_en": "What is the chemical name of Baking Soda?",
  "question_hi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
  "options_en": ["Sodium Bicarbonate", "Sodium Carbonate", "Calcium Carbonate", "Sodium Hydroxide"],
  "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
  "answer_en": "Sodium Bicarbonate",
  "answer_hi": "सोडियम बाइकार्बोनेट",
  "attempted": false,
  "selected": ""
},
{
  "num": 21,
  "question_en": "Which Indian state has the highest population?",
  "question_hi": "किस भारतीय राज्य की जनसंख्या सबसे अधिक है?",
  "options_en": ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"],
  "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "बिहार", "पश्चिम बंगाल"],
  "answer_en": "Uttar Pradesh",
  "answer_hi": "उत्तर प्रदेश",
  "attempted": false,
  "selected": ""
},
{
  "num": 22,
  "question_en": "What is the unit of frequency?",
  "question_hi": "आवृत्ति की इकाई क्या है?",
  "options_en": ["Hertz", "Watt", "Volt", "Ohm"],
  "options_hi": ["हर्ट्ज", "वाट", "वोल्ट", "ओम"],
  "answer_en": "Hertz",
  "answer_hi": "हर्ट्ज",
  "attempted": false,
  "selected": ""
},
{
  "num": 23,
  "question_en": "Which gas is filled in electric bulbs?",
  "question_hi": "बिजली के बल्बों में कौन सी गैस भरी जाती है?",
  "options_en": ["Oxygen", "Nitrogen", "Argon", "Helium"],
  "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हीलियम"],
  "answer_en": "Argon",
  "answer_hi": "आर्गन",
  "attempted": false,
  "selected": ""
},
{
  "num": 24,
  "question_en": "Who was the first President of India?",
  "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
  "options_en": ["Rajendra Prasad", "Jawaharlal Nehru", "S. Radhakrishnan", "Zakir Hussain"],
  "options_hi": ["राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "सर्वपल्ली राधाकृष्णन", "जाकिर हुसैन"],
  "answer_en": "Rajendra Prasad",
  "answer_hi": "राजेंद्र प्रसाद",
  "attempted": false,
  "selected": ""
},
{
  "num": 25,
  "question_en": "What is the boiling point of water?",
  "question_hi": "पानी का क्वथनांक क्या है?",
  "options_en": ["90°C", "100°C", "110°C", "120°C"],
  "options_hi": ["90°C", "100°C", "110°C", "120°C"],
  "answer_en": "100°C",
  "answer_hi": "100°C",
  "attempted": false,
  "selected": ""
},
{
  "num": 26,
  "question_en": "Which is the largest desert in the world?",
  "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
  "options_en": ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
  "options_hi": ["सहारा रेगिस्तान", "अरबी रेगिस्तान", "गोबी रेगिस्तान", "कालाहारी रेगिस्तान"],
  "answer_en": "Sahara Desert",
  "answer_hi": "सहारा रेगिस्तान",
  "attempted": false,
  "selected": ""
},
{
  "num": 27,
  "question_en": "What is the chemical symbol for Iron?",
  "question_hi": "आयरन का रासायनिक प्रतीक क्या है?",
  "options_en": ["Ir", "In", "Fe", "Fr"],
  "options_hi": ["Ir", "In", "Fe", "Fr"],
  "answer_en": "Fe",
  "answer_hi": "Fe",
  "attempted": false,
  "selected": ""
},
{
  "num": 28,
  "question_en": "Who is known as the Father of the Indian Constitution?",
  "question_hi": "भारतीय संविधान के पिता के रूप में कौन जाने जाते हैं?",
  "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
  "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
  "answer_en": "B.R. Ambedkar",
  "answer_hi": "बी.आर. अंबेडकर",
  "attempted": false,
  "selected": ""
},
{
  "num": 29,
  "question_en": "Which planet has the most moons?",
  "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
  "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
  "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
  "answer_en": "Saturn",
  "answer_hi": "शनि",
  "attempted": false,
  "selected": ""
},
{
  "num": 30,
  "question_en": "What is the pH value of pure water?",
  "question_hi": "शुद्ध पानी का pH मान क्या है?",
  "options_en": ["5", "6", "7", "8"],
  "options_hi": ["5", "6", "7", "8"],
  "answer_en": "7",
  "answer_hi": "7",
  "attempted": false,
  "selected": ""
},
{
  "num": 31,
  "question_en": "Which is the national bird of India?",
  "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
  "options_en": ["Peacock", "Parrot", "Sparrow", "Eagle"],
  "options_hi": ["मोर", "तोता", "गौरैया", "गरुड़"],
  "answer_en": "Peacock",
  "answer_hi": "मोर",
  "attempted": false,
  "selected": ""
},
{
  "num": 32,
  "question_en": "What is the chemical formula of Methane?",
  "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
  "options_en": ["CH4", "C2H6", "C3H8", "C4H10"],
  "options_hi": ["CH4", "C2H6", "C3H8", "C4H10"],
  "answer_en": "CH4",
  "answer_hi": "CH4",
  "attempted": false,
  "selected": ""
},
{
  "num": 33,
  "question_en": "Who discovered the law of gravity?",
  "question_hi": "गुरुत्वाकर्षण के नियम की खोज किसने की?",
  "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  "options_hi": ["अल्बर्ट आइंस्टीन", "आइज़ैक न्यूटन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
  "answer_en": "Isaac Newton",
  "answer_hi": "आइज़ैक न्यूटन",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_en": "What is the currency of Japan?",
  "question_hi": "जापान की मुद्रा क्या है?",
  "options_en": ["Yen", "Won", "Yuan", "Ringgit"],
  "options_hi": ["येन", "वॉन", "युआन", "रिंगित"],
  "answer_en": "Yen",
  "answer_hi": "येन",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_en": "Which blood group is known as the universal donor?",
  "question_hi": "कौन सा रक्त समूह सार्वभौमिक दाता के रूप में जाना जाता है?",
  "options_en": ["A", "B", "AB", "O"],
  "options_hi": ["A", "B", "AB", "O"],
  "answer_en": "O",
  "answer_hi": "O",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
  "question_en": "What is the chemical name of Common Salt?",
  "question_hi": "साधारण नमक का रासायनिक नाम क्या है?",
  "options_en": ["Sodium Chloride", "Potassium Chloride", "Calcium Carbonate", "Magnesium Sulphate"],
  "options_hi": ["सोडियम क्लोराइड", "पोटैशियम क्लोराइड", "कैल्शियम कार्बोनेट", "मैग्नीशियम सल्फेट"],
  "answer_en": "Sodium Chloride",
  "answer_hi": "सोडियम क्लोराइड",
  "attempted": false,
  "selected": ""
},
{
  "num": 37,
  "question_en": "Who wrote the book 'The Discovery of India'?",
  "question_hi": "'द डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी?",
  "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "Vikram Seth"],
  "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "रबीन्द्रनाथ टैगोर", "विक्रम सेठ"],
  "answer_en": "Jawaharlal Nehru",
  "answer_hi": "जवाहरलाल नेहरू",
  "attempted": false,
  "selected": ""
},
{
  "num": 38,
  "question_en": "Which is the hardest natural substance on Earth?",
  "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
  "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
  "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
  "answer_en": "Diamond",
  "answer_hi": "हीरा",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_en": "What is the capital of Brazil?",
  "question_hi": "ब्राजील की राजधानी क्या है?",
  "options_en": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
  "options_hi": ["रियो डी जनेरियो", "साओ पाउलो", "ब्रासीलिया", "साल्वाडोर"],
  "answer_en": "Brasília",
  "answer_hi": "ब्रासीलिया",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_en": "Which gas is responsible for the greenhouse effect?",
  "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
  "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
  "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
  "answer_en": "Carbon Dioxide",
  "answer_hi": "कार्बन डाइऑक्साइड",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_en": "Who was the first Indian to win a Nobel Prize?",
  "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
  "options_en": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Hargobind Khorana"],
  "options_hi": ["रबीन्द्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "हरगोबिंद खुराना"],
  "answer_en": "Rabindranath Tagore",
  "answer_hi": "रबीन्द्रनाथ टैगोर",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
  "question_en": "What is the chemical formula of Water?",
  "question_hi": "पानी का रासायनिक सूत्र क्या है?",
  "options_en": ["H2O", "HO2", "H2O2", "OH"],
  "options_hi": ["H2O", "HO2", "H2O2", "OH"],
  "answer_en": "H2O",
  "answer_hi": "H2O",
  "attempted": false,
  "selected": ""
},
{
  "num": 43,
  "question_en": "Which is the largest ocean in the world?",
  "question_hi": "दुनिया का सबसे बड़ा महासागर कौन सा है?",
  "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
  "answer_en": "Pacific Ocean",
  "answer_hi": "प्रशांत महासागर",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_en": "What is the unit of electric resistance?",
  "question_hi": "विद्युत प्रतिरोध की इकाई क्या है?",
  "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
  "options_hi": ["वोल्ट", "ऐम्पियर", "ओम", "वाट"],
  "answer_en": "Ohm",
  "answer_hi": "ओम",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_en": "Who was the first man to walk on the moon?",
  "question_hi": "चंद्रमा पर कदम रखने वाला पहला व्यक्ति कौन था?",
  "options_en": ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
  "options_hi": ["यूरी गागरिन", "नील आर्मस्ट्रांग", "बज़ एल्ड्रिन", "माइकल कॉलिंस"],
  "answer_en": "Neil Armstrong",
  "answer_hi": "नील आर्मस्ट्रांग",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_en": "What is the chemical symbol for Silver?",
  "question_hi": "सिल्वर का रासायनिक प्रतीक क्या है?",
  "options_en": ["Si", "Sv", "Ag", "Au"],
  "options_hi": ["Si", "Sv", "Ag", "Au"],
  "answer_en": "Ag",
  "answer_hi": "Ag",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_en": "Which is the national animal of India?",
  "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
  "options_en": ["Lion", "Tiger", "Elephant", "Leopard"],
  "options_hi": ["शेर", "बाघ", "हाथी", "तेंदुआ"],
  "answer_en": "Tiger",
  "answer_hi": "बाघ",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
  "question_en": "What is the chemical name of Vitamin C?",
  "question_hi": "विटामिन C का रासायनिक नाम क्या है?",
  "options_en": ["Ascorbic Acid", "Citric Acid", "Folic Acid", "Acetic Acid"],
  "options_hi": ["एस्कॉर्बिक अम्ल", "सिट्रिक अम्ल", "फोलिक अम्ल", "एसिटिक अम्ल"],
  "answer_en": "Ascorbic Acid",
  "answer_hi": "एस्कॉर्बिक अम्ल",
  "attempted": false,
  "selected": ""
},
{
  "num": 49,
  "question_en": "Who invented the computer?",
  "question_hi": "कंप्यूटर का आविष्कार किसने किया?",
  "options_en": ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
  "options_hi": ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "स्टीव जॉब्स"],
  "answer_en": "Charles Babbage",
  "answer_hi": "चार्ल्स बैबेज",
  "attempted": false,
  "selected": ""
},
{
  "num": 50,
  "question_en": "What is the freezing point of water?",
  "question_hi": "पानी का हिमांक क्या है?",
  "options_en": ["0°C", "10°C", "-10°C", "100°C"],
  "options_hi": ["0°C", "10°C", "-10°C", "100°C"],
  "answer_en": "0°C",
  "answer_hi": "0°C",
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