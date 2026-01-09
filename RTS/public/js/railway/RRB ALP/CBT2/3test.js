const questions = [
  {
    num: 1,
    question_en: "Which city is known as the 'Pink City' of India?",
    question_hi: "भारत का 'गुलाबी शहर' किसे कहा जाता है?",
    options_en: ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "The 'Kumbh Mela' is held every how many years?",
    question_hi: "'कुंभ मेला' कितने वर्षों में एक बार आयोजित किया जाता है?",
    options_en: ["3 years", "6 years", "12 years", "15 years"],
    options_hi: ["3 वर्ष", "6 वर्ष", "12 वर्ष", "15 वर्ष"],
    answer_en: "12 years",
    answer_hi: "12 वर्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
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
    num: 4,
    question_en: "The 'Chenab Bridge' being built in Jammu & Kashmir will be the world's highest:",
    question_hi: "जम्मू-कश्मीर में बन रहा 'चेनाब ब्रिज' दुनिया का सबसे ऊँचा क्या होगा?",
    options_en: ["Railway Bridge", "Road Bridge", "Suspension Bridge", "Cantilever Bridge"],
    options_hi: ["रेलवे पुल", "सड़क पुल", "लटकता पुल", "कैंटिलीवर पुल"],
    answer_en: "Railway Bridge",
    answer_hi: "रेलवे पुल",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which Indian state has the longest coastline?",
    question_hi: "किस भारतीय राज्य में सबसे लंबी तटरेखा है?",
    options_en: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
    options_hi: ["महाराष्ट्र", "तमिलनाडु", "गुजरात", "आंध्र प्रदेश"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "The 'Vande Bharat Express' trains are manufactured at which factory?",
    question_hi: "'वंदे भारत एक्सप्रेस' ट्रेनें किस फैक्ट्री में निर्मित की जाती हैं?",
    options_en: ["Chittaranjan Locomotive Works", "Integral Coach Factory", "Diesel Locomotive Works", "Rail Coach Factory"],
    options_hi: ["चितरंजन लोकोमोटिव वर्क्स", "इंटीग्रल कोच फैक्ट्री", "डीजल लोकोमोटिव वर्क्स", "रेल कोच फैक्ट्री"],
    answer_en: "Integral Coach Factory",
    answer_hi: "इंटीग्रल कोच फैक्ट्री",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which gas is most abundant in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "The 'Golden Temple' is located in which city?",
    question_hi: "'स्वर्ण मंदिर' किस शहर में स्थित है?",
    options_en: ["Delhi", "Amritsar", "Chandigarh", "Ludhiana"],
    options_hi: ["दिल्ली", "अमृतसर", "चंडीगढ़", "लुधियाना"],
    answer_en: "Amritsar",
    answer_hi: "अमृतसर",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which of these is NOT a primary color of light?",
    question_hi: "यह में से कौन सा प्रकाश का प्राथमिक रंग नहीं है?",
    options_en: ["Red", "Green", "Blue", "Yellow"],
    options_hi: ["लाल", "हरा", "नीला", "पीला"],
    answer_en: "Yellow",
    answer_hi: "पीला",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "The 'Indian Railways' operates under which ministry?",
    question_hi: "'भारतीय रेलवे' किस मंत्रालय के अधीन कार्य करता है?",
    options_en: ["Ministry of Transport", "Ministry of Railways", "Ministry of Commerce", "Ministry of Infrastructure"],
    options_hi: ["परिवहन मंत्रालय", "रेल मंत्रालय", "वाणिज्य मंत्रालय", "अवसंरचना मंत्रालय"],
    answer_en: "Ministry of Railways",
    answer_hi: "रेल मंत्रालय",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the square root of 169?",
    question_hi: "169 का वर्गमूल क्या है?",
    options_en: ["11", "12", "13", "14"],
    options_hi: ["11", "12", "13", "14"],
    answer_en: "13",
    answer_hi: "13",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which of these is NOT a natural fiber?",
    question_hi: "यह में से कौन सा प्राकृतिक रेशा नहीं है?",
    options_en: ["Cotton", "Silk", "Wool", "Nylon"],
    options_hi: ["कपास", "रेशम", "ऊन", "नायलॉन"],
    answer_en: "Nylon",
    answer_hi: "नायलॉन",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "The first woman Prime Minister of India was:",
    question_hi: "भारत की पहली महिला प्रधानमंत्री थीं:",
    options_en: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
    options_hi: ["इंदिरा गांधी", "सोनिया गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which is the largest mammal in the world?",
    question_hi: "दुनिया का सबसे बड़ा स्तनपायी कौन सा है?",
    options_en: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    options_hi: ["हाथी", "नीली व्हेल", "जिराफ", "ध्रुवीय भालू"],
    answer_en: "Blue Whale",
    answer_hi: "नीली व्हेल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "The study of earthquakes is called:",
    question_hi: "भूकंप का अध्ययन कहलाता है:",
    options_en: ["Geology", "Seismology", "Meteorology", "Volcanology"],
    options_hi: ["भूविज्ञान", "भूकंप विज्ञान", "मौसम विज्ञान", "ज्वालामुखी विज्ञान"],
    answer_en: "Seismology",
    answer_hi: "भूकंप विज्ञान",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which is NOT a programming language?",
    question_hi: "कौन सी प्रोग्रामिंग भाषा नहीं है?",
    options_en: ["Python", "Java", "HTML", "Photoshop"],
    options_hi: ["पायथन", "जावा", "HTML", "फोटोशॉप"],
    answer_en: "Photoshop",
    answer_hi: "फोटोशॉप",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which is the largest desert in the world?",
    question_hi: "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Sahara", "Gobi", "Arabian", "Antarctica"],
    options_hi: ["सहारा", "गोबी", "अरब", "अंटार्कटिका"],
    answer_en: "Antarctica",
    answer_hi: "अंटार्कटिका",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the value of π (pi) approximately?",
    question_hi: "π (पाई) का मान लगभग कितना होता है?",
    options_en: ["3.14", "2.71", "1.62", "4.13"],
    options_hi: ["3.14", "2.71", "1.62", "4.13"],
    answer_en: "3.14",
    answer_hi: "3.14",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
    options_hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "अल्बर्ट आइंस्टीन"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्जेंडर ग्राहम बेल",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which gas is responsible for the greenhouse effect?",
    question_hi: "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the chemical formula of water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "NaCl", "O2"],
    options_hi: ["H2O", "CO2", "NaCl", "O2"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which of these is a prime number?",
    question_hi: "यह में से कौन सी अभाज्य संख्या है?",
    options_en: ["9", "15", "17", "21"],
    options_hi: ["9", "15", "17", "21"],
    answer_en: "17",
    answer_hi: "17",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the currency of Japan?",
    question_hi: "जापान की मुद्रा क्या है?",
    options_en: ["Yen", "Dollar", "Euro", "Pound"],
    options_hi: ["येन", "डॉलर", "यूरो", "पाउंड"],
    answer_en: "Yen",
    answer_hi: "येन",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which organ purifies blood in the human body?",
    question_hi: "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
    options_en: ["Heart", "Liver", "Kidney", "Lungs"],
    options_hi: ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
    answer_en: "Kidney",
    answer_hi: "गुर्दा",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which is the largest bone in the human body?",
    question_hi: "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
    options_en: ["Femur", "Tibia", "Humerus", "Skull"],
    options_hi: ["फीमर", "टिबिया", "ह्यूमरस", "खोपड़ी"],
    answer_en: "Femur",
    answer_hi: "फीमर",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which of these is a non-renewable energy source?",
    question_hi: "यह में से कौन सा गैर-नवीकरणीय ऊर्जा स्रोत है?",
    options_en: ["Solar", "Wind", "Coal", "Hydro"],
    options_hi: ["सौर", "पवन", "कोयला", "जल"],
    answer_en: "Coal",
    answer_hi: "कोयला",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which is the smallest planet in our solar system?",
    question_hi: "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
    options_en: ["Earth", "Mars", "Mercury", "Venus"],
    options_hi: ["पृथ्वी", "मंगल", "बुध", "शुक्र"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which country is known as the 'Land of the Rising Sun'?",
    question_hi: "किस देश को 'उगते सूरज की भूमि' कहा जाता है?",
    options_en: ["China", "Japan", "India", "Thailand"],
    options_hi: ["चीन", "जापान", "भारत", "थाईलैंड"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Who was the first Indian to win a Nobel Prize?",
    question_hi: "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    options_en: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Amartya Sen"],
    options_hi: ["रबींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "अमर्त्य सेन"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रबींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What is the SI unit of electric current?",
    question_hi: "विद्युत धारा की SI इकाई क्या है?",
    options_en: ["Volt", "Ampere", "Ohm", "Watt"],
    options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वॉट"],
    answer_en: "Ampere",
    answer_hi: "एम्पीयर",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which of these is NOT a natural satellite?",
    question_hi: "यह में से कौन सा प्राकृतिक उपग्रह नहीं है?",
    options_en: ["Moon", "Phobos", "ISS", "Europa"],
    options_hi: ["चंद्रमा", "फोबोस", "ISS", "यूरोपा"],
    answer_en: "ISS",
    answer_hi: "ISS",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which is the largest state in India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Maharashtra", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
    options_hi: ["महाराष्ट्र", "उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "When was the first passenger train run in India?",
    question_hi: "भारत में पहली यात्री ट्रेन कब चली थी?",
    options_en: ["1851", "1853", "1855", "1857"],
    options_hi: ["1851", "1853", "1855", "1857"],
    answer_en: "1853",
    answer_hi: "1853",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which is the fastest train in India as of 2023?",
    question_hi: "2023 तक भारत की सबसे तेज़ ट्रेन कौन सी है?",
    options_en: ["Rajdhani Express", "Shatabdi Express", "Gatimaan Express", "Vande Bharat Express"],
    options_hi: ["राजधानी एक्सप्रेस", "शताब्दी एक्सप्रेस", "गतिमान एक्सप्रेस", "वंदे भारत एक्सप्रेस"],
    answer_en: "Vande Bharat Express",
    answer_hi: "वंदे भारत एक्सप्रेस",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the color of the Indian Railways logo?",
    question_hi: "भारतीय रेलवे के लोगो का रंग क्या है?",
    options_en: ["Blue and White", "Red and White", "Blue and Yellow", "Red and Yellow"],
    options_hi: ["नीला और सफेद", "लाल और सफेद", "नीला और पीला", "लाल और पीला"],
    answer_en: "Blue and White",
    answer_hi: "नीला और सफेद",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which zone is the largest in Indian Railways?",
    question_hi: "भारतीय रेलवे में सबसे बड़ा जोन कौन सा है?",
    options_en: ["Northern Railway", "Western Railway", "Southern Railway", "Central Railway"],
    options_hi: ["उत्तरी रेलवे", "पश्चिमी रेलवे", "दक्षिणी रेलवे", "मध्य रेलवे"],
    answer_en: "Northern Railway",
    answer_hi: "उत्तरी रेलवे",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Complete the series: 2, 6, 12, 20, __",
    question_hi: "श्रृंखला पूरी करें: 2, 6, 12, 20, __",
    options_en: ["28", "30", "32", "36"],
    options_hi: ["28", "30", "32", "36"],
    answer_en: "30",
    answer_hi: "30",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "If all cats are dogs and some dogs are tigers, then:",
    question_hi: "यदि सभी बिल्लियाँ कुत्ते हैं और कुछ कुत्ते बाघ हैं, तो:",
    options_en: ["All cats are tigers", "Some cats are tigers", "No conclusion", "All tigers are cats"],
    options_hi: ["सभी बिल्लियाँ बाघ हैं", "कुछ बिल्लियाँ बाघ हैं", "कोई निष्कर्ष नहीं", "सभी बाघ बिल्लियाँ हैं"],
    answer_en: "Some cats are tigers",
    answer_hi: "कुछ बिल्लियाँ बाघ हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which number is opposite to 3 on a standard dice?",
    question_hi: "एक सामान्य पासे पर 3 के विपरीत कौन सी संख्या होती है?",
    options_en: ["1", "2", "4", "6"],
    options_hi: ["1", "2", "4", "6"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Where is the headquarters of Indian Railways located?",
    question_hi: "भारतीय रेलवे का मुख्यालय कहाँ स्थित है?",
    options_en: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    options_hi: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
    answer_en: "New Delhi",
    answer_hi: "नई दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which of these is NOT a type of passenger train in India?",
    question_hi: "यह में से कौन सी भारत में यात्री ट्रेन का प्रकार नहीं है?",
    options_en: ["Duronto", "Garib Rath", "Vanikaran", "Rajdhani"],
    options_hi: ["दुरंतो", "गरीब रथ", "वणिकरण", "राजधानी"],
    answer_en: "Vanikaran",
    answer_hi: "वणिकरण",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Where is the longest railway platform in India located?",
    question_hi: "भारत में सबसे लंबा रेलवे प्लेटफॉर्म कहाँ स्थित है?",
    options_en: ["Howrah", "Ghaziabad", "Gorakhpur", "Kharagpur"],
    options_hi: ["हावड़ा", "गाज़ियाबाद", "गोरखपुर", "खड़गपुर"],
    answer_en: "Gorakhpur",
    answer_hi: "गोरखपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which city is known as the 'Manchester of India'?",
    question_hi: "किस शहर को 'भारत का मैनचेस्टर' कहा जाता है?",
    options_en: ["Mumbai", "Ahmedabad", "Surat", "Kanpur"],
    options_hi: ["मुंबई", "अहमदाबाद", "सूरत", "कानपुर"],
    answer_en: "Ahmedabad",
    answer_hi: "अहमदाबाद",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Where was the first metro rail in India started?",
    question_hi: "भारत में पहली मेट्रो रेल कहाँ शुरू हुई थी?",
    options_en: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
    options_hi: ["दिल्ली", "कोलकाता", "मुंबई", "चेन्नई"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which state has the highest railway route length?",
    question_hi: "किस राज्य में रेलवे मार्ग की लंबाई सबसे अधिक है?",
    options_en: ["Maharashtra", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
    options_hi: ["महाराष्ट्र", "उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which train connects North East India to the rest of the country?",
    question_hi: "कौन सी ट्रेन उत्तर पूर्व भारत को देश के बाकी हिस्सों से जोड़ती है?",
    options_en: ["Rajdhani Express", "Sampark Kranti", "Dibrugarh Rajdhani", "Shatabdi Express"],
    options_hi: ["राजधानी एक्सप्रेस", "संपर्क क्रांति", "डिब्रूगढ़ राजधानी", "शताब्दी एक्सप्रेस"],
    answer_en: "Dibrugarh Rajdhani",
    answer_hi: "डिब्रूगढ़ राजधानी",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which of these is a mountain railway in India?",
    question_hi: "यह में से कौन सी भारत में एक पर्वतीय रेलवे है?",
    options_en: ["Konkan Railway", "Nilgiri Mountain Railway", "Kalka-Shimla Railway", "Both B and C"],
    options_hi: ["कोंकण रेलवे", "नीलगिरि पर्वतीय रेलवे", "कालका-शिमला रेलवे", "B और C दोनों"],
    answer_en: "Both B and C",
    answer_hi: "B और C दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Where did the first electric train in India run between?",
    question_hi: "भारत में पहली इलेक्ट्रिक ट्रेन कहाँ से कहाँ तक चली थी?",
    options_en: ["Delhi to Kolkata", "Mumbai to Pune", "Bombay VT to Kurla", "Chennai to Bangalore"],
    options_hi: ["दिल्ली से कोलकाता", "मुंबई से पुणे", "बॉम्बे VT से कुर्ला", "चेन्नई से बैंगलोर"],
    answer_en: "Bombay VT to Kurla",
    answer_hi: "बॉम्बे VT से कुर्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "When was the railway budget merged with the general budget?",
    question_hi: "रेल बजट को सामान्य बजट में कब मिला दिया गया था?",
    options_en: ["2014", "2016", "2017", "2018"],
    options_hi: ["2014", "2016", "2017", "2018"],
    answer_en: "2017",
    answer_hi: "2017",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which of these is a luxury tourist train in India?",
    question_hi: "यह में से कौन सी भारत में एक लग्जरी टूरिस्ट ट्रेन है?",
    options_en: ["Deccan Odyssey", "Garib Rath", "Jan Shatabdi", "Duronto Express"],
    options_hi: ["डेक्कन ओडिसी", "गरीब रथ", "जन शताब्दी", "दुरंतो एक्सप्रेस"],
    answer_en: "Deccan Odyssey",
    answer_hi: "डेक्कन ओडिसी",
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