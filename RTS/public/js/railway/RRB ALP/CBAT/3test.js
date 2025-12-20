const questions = [
  {
    "num": 1,
    "question_en": "What is the full form of RRB?",
    "question_hi": "RRB का पूरा नाम क्या है?",
    "options_en": ["Railway Recruitment Board", "Regional Rail Bureau", "Railway Resource Base", "Rural Rail Board"],
    "options_hi": ["रेलवे भर्ती बोर्ड", "क्षेत्रीय रेल ब्यूरो", "रेलवे संसाधन आधार", "ग्रामीण रेल बोर्ड"],
    "answer_en": "Railway Recruitment Board",
    "answer_hi": "रेलवे भर्ती बोर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which gas is used in electric bulbs?",
    "question_hi": "बिजली के बल्बों में कौन सी गैस प्रयुक्त होती है?",
    "options_en": ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हाइड्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the unit of power?",
    "question_hi": "शक्ति की इकाई क्या है?",
    "options_en": ["Watt", "Volt", "Ampere", "Ohm"],
    "options_hi": ["वाट", "वोल्ट", "ऐंपियर", "ओम"],
    "answer_en": "Watt",
    "answer_hi": "वाट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Brain is protected by?",
    "question_hi": "मस्तिष्क किससे सुरक्षित होता है?",
    "options_en": ["Ribs", "Skull", "Skin", "Spine"],
    "options_hi": ["पसलियां", "खोपड़ी", "त्वचा", "रीढ़ की हड्डी"],
    "answer_en": "Skull",
    "answer_hi": "खोपड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Who invented the light bulb?",
    "question_hi": "बिजली का बल्ब किसने आविष्कृत किया?",
    "options_en": ["Newton", "Edison", "Einstein", "Galileo"],
    "options_hi": ["न्यूटन", "एडिसन", "आइंस्टीन", "गैलीलियो"],
    "answer_en": "Edison",
    "answer_hi": "एडिसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "National railway museum is in?",
    "question_hi": "राष्ट्रीय रेल संग्रहालय कहां है?",
    "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "Delhi",
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which is the longest rail route in India?",
    "question_hi": "भारत में सबसे लंबा रेल मार्ग कौन सा है?",
    "options_en": ["Vivek Express", "Rajdhani Express", "Shatabdi Express", "Duronto Express"],
    "options_hi": ["विवेक एक्सप्रेस", "राजधानी एक्सप्रेस", "शताब्दी एक्सप्रेस", "दुरंतो एक्सप्रेस"],
    "answer_en": "Vivek Express",
    "answer_hi": "विवेक एक्सप्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Largest organ in human body?",
    "question_hi": "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    "options_en": ["Heart", "Liver", "Skin", "Lungs"],
    "options_hi": ["हृदय", "यकृत", "त्वचा", "फेफड़े"],
    "answer_en": "Skin",
    "answer_hi": "त्वचा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Acid found in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Acetic", "Citric", "Hydrochloric", "Sulphuric"],
    "options_hi": ["एसिटिक", "सिट्रिक", "हाइड्रोक्लोरिक", "सल्फ्यूरिक"],
    "answer_en": "Citric",
    "answer_hi": "सिट्रिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "H2O is the chemical formula of?",
    "question_hi": "H2O किसका रासायनिक सूत्र है?",
    "options_en": ["Oxygen", "Hydrogen", "Water", "Salt"],
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "पानी", "नमक"],
    "answer_en": "Water",
    "answer_hi": "पानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Blood is filtered in?",
    "question_hi": "रक्त कहाँ पर छना जाता है?",
    "options_en": ["Liver", "Heart", "Lungs", "Kidney"],
    "options_hi": ["यकृत", "हृदय", "फेफड़े", "गुर्दा"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Capital of West Bengal?",
    "question_hi": "पश्चिम बंगाल की राजधानी?",
    "options_en": ["Patna", "Kolkata", "Bhubaneswar", "Ranchi"],
    "options_hi": ["पटना", "कोलकाता", "भुवनेश्वर", "रांची"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "First Indian satellite?",
    "question_hi": "भारत का पहला उपग्रह कौन सा है?",
    "options_en": ["Bhaskara", "INSAT", "Aryabhata", "Rohini"],
    "options_hi": ["भास्कर", "इनसैट", "आर्यभट्ट", "रोहिणी"],
    "answer_en": "Aryabhata",
    "answer_hi": "आर्यभट्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Who is the father of computer?",
    "question_hi": "कंप्यूटर का जनक कौन है?",
    "options_en": ["Bill Gates", "Charles Babbage", "Steve Jobs", "Alan Turing"],
    "options_hi": ["बिल गेट्स", "चार्ल्स बैबेज", "स्टीव जॉब्स", "एलन ट्यूरिंग"],
    "answer_en": "Charles Babbage",
    "answer_hi": "चार्ल्स बैबेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which organ purifies blood?",
    "question_hi": "कौन सा अंग रक्त को शुद्ध करता है?",
    "options_en": ["Lungs", "Heart", "Kidney", "Stomach"],
    "options_hi": ["फेफड़े", "हृदय", "गुर्दा", "पेट"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Rajendra Prasad", "Nehru", "Patel", "APJ Abdul Kalam"],
    "options_hi": ["राजेन्द्र प्रसाद", "नेहरू", "पटेल", "एपीजे अब्दुल कलाम"],
    "answer_en": "Rajendra Prasad",
    "answer_hi": "राजेन्द्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
    {
    "num": 17,
    "question_en": "Which is the smallest bone in the human body?",
    "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
    "options_en": ["Stapes", "Femur", "Tibia", "Humerus"],
    "options_hi": ["स्टेप्स", "फीमर", "टिबिया", "ह्यूमरस"],
    "answer_en": "Stapes",
    "answer_hi": "स्टेप्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the S.I unit of force?",
    "question_hi": "बल की एस.आई. इकाई क्या है?",
    "options_en": ["Joule", "Watt", "Newton", "Pascal"],
    "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The first railway in India ran between which two stations?",
    "question_hi": "भारत में पहली रेल किन दो स्टेशनों के बीच चली थी?",
    "options_en": ["Mumbai & Pune", "Mumbai & Thane", "Kolkata & Delhi", "Chennai & Bengaluru"],
    "options_hi": ["मुंबई और पुणे", "मुंबई और ठाणे", "कोलकाता और दिल्ली", "चेन्नई और बेंगलुरु"],
    "answer_en": "Mumbai & Thane",
    "answer_hi": "मुंबई और ठाणे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the pH value of pure water?",
    "question_hi": "शुद्ध पानी का pH मान क्या होता है?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which part of plant makes food?",
    "question_hi": "पौधे का कौन सा भाग भोजन बनाता है?",
    "options_en": ["Root", "Stem", "Leaf", "Flower"],
    "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Who wrote the Indian National Anthem?",
    "question_hi": "भारतीय राष्ट्रगान किसने लिखा?",
    "options_en": ["Tagore", "Gandhi", "Tilak", "Bose"],
    "options_hi": ["टैगोर", "गांधी", "तिलक", "बोस"],
    "answer_en": "Tagore",
    "answer_hi": "टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
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
    "num": 24,
    "question_en": "In which year was the Railway Budget merged with the Union Budget?",
    "question_hi": "रेल बजट किस वर्ष केंद्रीय बजट में मिला दिया गया था?",
    "options_en": ["2015", "2016", "2017", "2018"],
    "options_hi": ["2015", "2016", "2017", "2018"],
    "answer_en": "2017",
    "answer_hi": "2017",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the total number of railway zones in India?",
    "question_hi": "भारत में रेलवे जोनों की कुल संख्या क्या है?",
    "options_en": ["16", "17", "18", "20"],
    "options_hi": ["16", "17", "18", "20"],
    "answer_en": "18",
    "answer_hi": "18",
    "attempted": false,
    "selected": ""
  },
{
    "num": 26,
    "question_en": "Which part of the eye controls the amount of light entering?",
    "question_hi": "आँख का कौन सा हिस्सा प्रकाश की मात्रा को नियंत्रित करता है?",
    "options_en": ["Retina", "Iris", "Lens", "Cornea"],
    "options_hi": ["रेटिना", "आइरिस", "लेंस", "कॉर्निया"],
    "answer_en": "Iris",
    "answer_hi": "आइरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which vitamin is known as Ascorbic Acid?",
    "question_hi": "कौन सा विटामिन एस्कॉर्बिक एसिड के नाम से जाना जाता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is the largest bone in the human body?",
    "question_hi": "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
    "options_en": ["Femur", "Tibia", "Humerus", "Radius"],
    "options_hi": ["फीमर", "टिबिया", "ह्यूमरस", "रेडियस"],
    "answer_en": "Femur",
    "answer_hi": "फीमर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which device is used to measure blood pressure?",
    "question_hi": "रक्तचाप मापने के लिए कौन सा यंत्र उपयोग किया जाता है?",
    "options_en": ["Thermometer", "Barometer", "Sphygmomanometer", "Altimeter"],
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "स्फिग्मोमैनोमीटर", "ऑल्टीमीटर"],
    "answer_en": "Sphygmomanometer",
    "answer_hi": "स्फिग्मोमैनोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which element is required for the formation of hemoglobin?",
    "question_hi": "हीमोग्लोबिन के निर्माण के लिए कौन सा तत्व आवश्यक है?",
    "options_en": ["Calcium", "Iron", "Magnesium", "Zinc"],
    "options_hi": ["कैल्शियम", "लोहा", "मैग्नीशियम", "जिंक"],
    "answer_en": "Iron",
    "answer_hi": "लोहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which part of the brain is responsible for intelligence?",
    "question_hi": "मस्तिष्क का कौन सा भाग बुद्धि के लिए जिम्मेदार है?",
    "options_en": ["Cerebellum", "Cerebrum", "Medulla", "Thalamus"],
    "options_hi": ["सेरिबेलम", "सेरेब्रलम", "मेडुला", "थैलेमस"],
    "answer_en": "Cerebrum",
    "answer_hi": "सेरेब्रलम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The hardest substance in the human body is?",
    "question_hi": "मानव शरीर में सबसे कठोर पदार्थ कौन सा है?",
    "options_en": ["Bone", "Tooth enamel", "Nail", "Cartilage"],
    "options_hi": ["हड्डी", "दाँत की एनामेल", "नाखून", "उपास्थि"],
    "answer_en": "Tooth enamel",
    "answer_hi": "दाँत की एनामेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which organ of the body produces insulin?",
    "question_hi": "शरीर का कौन सा अंग इंसुलिन बनाता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which planet is called the Red Planet?",
    "question_hi": "कौन सा ग्रह 'लाल ग्रह' कहलाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the chemical symbol for water?",
    "question_hi": "पानी का रासायनिक प्रतीक क्या है?",
    "options_en": ["O2", "H2", "H2O", "OH"],
    "options_hi": ["O2", "H2", "H2O", "OH"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "किस भारतीय राज्य की समुद्री तटरेखा सबसे लंबी है?",
    "options_en": ["Gujarat", "Tamil Nadu", "Maharashtra", "Andhra Pradesh"],
    "options_hi": ["गुजरात", "तमिलनाडु", "महाराष्ट्र", "आंध्र प्रदेश"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which is the largest gland in the human body?",
    "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
    "options_en": ["Liver", "Pancreas", "Thyroid", "Adrenal"],
    "options_hi": ["यकृत", "अग्न्याशय", "थाइरॉयड", "एड्रिनल"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
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
    "num": 39,
    "question_en": "Who is known as the Missile Man of India?",
    "question_hi": "भारत के मिसाइल मैन के रूप में किसे जाना जाता है?",
    "options_en": ["A.P.J. Abdul Kalam", "Homi Bhabha", "Vikram Sarabhai", "Rakesh Sharma"],
    "options_hi": ["ए.पी.जे. अब्दुल कलाम", "होमी भाभा", "विक्रम साराभाई", "राकेश शर्मा"],
    "answer_en": "A.P.J. Abdul Kalam",
    "answer_hi": "ए.पी.जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "अग्निशामकों में कौन सी गैस प्रयुक्त होती है?",
    "options_en": ["Carbon monoxide", "Carbon dioxide", "Nitrogen", "Helium"],
    "options_hi": ["कार्बन मोनोऑक्साइड", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },{
    "num": 41,
    "question_en": "What is the main function of white blood cells (WBC)?",
    "question_hi": "श्वेत रक्त कणिकाओं (WBC) का मुख्य कार्य क्या है?",
    "options_en": ["Transport oxygen", "Help in clotting", "Fight infection", "Carry nutrients"],
    "options_hi": ["ऑक्सीजन का परिवहन", "थक्का बनाने में मदद", "संक्रमण से लड़ना", "पोषक तत्व ले जाना"],
    "answer_en": "Fight infection",
    "answer_hi": "संक्रमण से लड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Who was the first man to go into space?",
    "question_hi": "अंतरिक्ष में जाने वाले पहले व्यक्ति कौन थे?",
    "options_en": ["Yuri Gagarin", "Neil Armstrong", "Rakesh Sharma", "Buzz Aldrin"],
    "options_hi": ["यूरी गागरिन", "नील आर्मस्ट्रांग", "राकेश शर्मा", "बज़ एल्ड्रिन"],
    "answer_en": "Yuri Gagarin",
    "answer_hi": "यूरी गागरिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which is the heaviest internal organ in the human body?",
    "question_hi": "मानव शरीर का सबसे भारी आंतरिक अंग कौन सा है?",
    "options_en": ["Heart", "Liver", "Brain", "Kidney"],
    "options_hi": ["हृदय", "यकृत", "मस्तिष्क", "गुर्दा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Indian scientist is known for the Green Revolution?",
    "question_hi": "ग्रीन रिवोल्यूशन के लिए कौन से भारतीय वैज्ञानिक प्रसिद्ध हैं?",
    "options_en": ["C.V. Raman", "Dr. M.S. Swaminathan", "Homi Bhabha", "Dr. A.P.J. Abdul Kalam"],
    "options_hi": ["सी.वी. रमन", "डॉ. एम.एस. स्वामीनाथन", "होमी भाभा", "डॉ. ए.पी.जे. अब्दुल कलाम"],
    "answer_en": "Dr. M.S. Swaminathan",
    "answer_hi": "डॉ. एम.एस. स्वामीनाथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which part of the plant conducts photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    "options_en": ["Leaf", "Root", "Stem", "Flower"],
    "options_hi": ["पत्ती", "जड़", "तना", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the chemical formula of common salt?",
    "question_hi": "सामान्य नमक का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "CaCl2", "NaOH"],
    "options_hi": ["NaCl", "KCl", "CaCl₂", "NaOH"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which gas do plants absorb during photosynthesis?",
    "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस अवशोषित करते हैं?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How many chromosomes are there in a human cell?",
    "question_hi": "मानव कोशिका में कितने गुणसूत्र होते हैं?",
    "options_en": ["23", "46", "44", "22"],
    "options_hi": ["23", "46", "44", "22"],
    "answer_en": "46",
    "answer_hi": "46",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Who was the first Indian woman in space?",
    "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थीं?",
    "options_en": ["Kalpana Chawla", "Sunita Williams", "Ritu Karidhal", "Tessy Thomas"],
    "options_hi": ["कल्पना चावला", "सुनीता विलियम्स", "ऋतु करिधल", "टैसी थॉमस"],
    "answer_en": "Kalpana Chawla",
    "answer_hi": "कल्पना चावला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Indian city is known as the 'Silicon Valley of India'?",
    "question_hi": "भारत का 'सिलिकॉन वैली' किस शहर को कहा जाता है?",
    "options_en": ["Hyderabad", "Pune", "Bangalore", "Chennai"],
    "options_hi": ["हैदराबाद", "पुणे", "बेंगलुरु", "चेन्नई"],
    "answer_en": "Bangalore",
    "answer_hi": "बेंगलुरु",
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