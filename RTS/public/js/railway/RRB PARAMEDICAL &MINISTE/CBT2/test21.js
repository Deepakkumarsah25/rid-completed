const questions = [
  {
    "num": 1,
    "question_en": "Which is the largest country by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा देश कौन सा है?",
    "options_en": ["Canada", "United States", "China", "Russia"],
    "options_hi": ["कनाडा", "संयुक्त राज्य अमेरिका", "चीन", "रूस"],
    "answer_en": "Russia",
    "answer_hi": "रूस"
  },
  {
    "num": 2,
    "question_en": "What is the chemical symbol for lead?",
    "question_hi": "सीसा का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ld", "Pb", "Le", "Pl"],
    "options_hi": ["Ld", "Pb", "Le", "Pl"],
    "answer_en": "Pb",
    "answer_hi": "Pb"
  },
  {
    "num": 3,
    "question_en": "Who wrote '1984'?",
    "question_hi": "'1984' किसने लिखी?",
    "options_en": ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
    "options_hi": ["एल्डस हक्सले", "जॉर्ज ऑरवेल", "रे ब्रैडबरी", "एच.जी. वेल्स"],
    "answer_en": "George Orwell",
    "answer_hi": "जॉर्ज ऑरवेल"
  },
  {
    "num": 4,
    "question_en": "Which planet has the most moons?",
    "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
    "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
    "answer_en": "Saturn",
    "answer_hi": "शनि"
  },
  {
    "num": 5,
    "question_en": "What is the capital of Argentina?",
    "question_hi": "अर्जेंटीना की राजधानी क्या है?",
    "options_en": ["Buenos Aires", "Santiago", "Lima", "Brasília"],
    "options_hi": ["ब्यूनस आयर्स", "सैंटियागो", "लिमा", "ब्रासीलिया"],
    "answer_en": "Buenos Aires",
    "answer_hi": "ब्यूनस आयर्स"
  },
  {
    "num": 6,
    "question_en": "Which vitamin deficiency causes scurvy?",
    "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन सी"
  },
  {
    "num": 7,
    "question_en": "What is the smallest ocean?",
    "question_hi": "सबसे छोटा महासागर कौन सा है?",
    "options_en": ["Indian Ocean", "Arctic Ocean", "Southern Ocean", "Atlantic Ocean"],
    "options_hi": ["हिंद महासागर", "आर्कटिक महासागर", "दक्षिणी महासागर", "अटलांटिक महासागर"],
    "answer_en": "Arctic Ocean",
    "answer_hi": "आर्कटिक महासागर"
  },
  {
    "num": 8,
    "question_en": "Who composed 'The Four Seasons'?",
    "question_hi": "'द फोर सीज़न्स' किसने रची?",
    "options_en": ["Vivaldi", "Mozart", "Bach", "Handel"],
    "options_hi": ["विवाल्डी", "मोजार्ट", "बाख", "हैंडल"],
    "answer_en": "Vivaldi",
    "answer_hi": "विवाल्डी"
  },
  {
    "num": 9,
    "question_en": "What is the chemical formula for sulfuric acid?",
    "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
    "options_en": ["HCl", "H2SO4", "HNO3", "H3PO4"],
    "options_hi": ["HCl", "H2SO4", "HNO3", "H3PO4"],
    "answer_en": "H2SO4",
    "answer_hi": "H2SO4"
  },
  {
    "num": 10,
    "question_en": "Which country is home to the kangaroo?",
    "question_hi": "कंगारू किस देश का मूल निवासी है?",
    "options_en": ["South Africa", "Australia", "New Zealand", "Madagascar"],
    "options_hi": ["दक्षिण अफ्रीका", "ऑस्ट्रेलिया", "न्यूजीलैंड", "मेडागास्कर"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया"
  },
  {
    "num": 11,
    "question_en": "What is the main ingredient in sushi?",
    "question_hi": "सुशी में मुख्य घटक क्या है?",
    "options_en": ["Rice", "Noodles", "Bread", "Potatoes"],
    "options_hi": ["चावल", "नूडल्स", "ब्रेड", "आलू"],
    "answer_en": "Rice",
    "answer_hi": "चावल"
  },
  {
    "num": 12,
    "question_en": "Which gas do plants release during photosynthesis?",
    "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस छोड़ते हैं?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन"
  },
  {
    "num": 13,
    "question_en": "Who painted 'Guernica'?",
    "question_hi": "'गेर्निका' किसने चित्रित की?",
    "options_en": ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Claude Monet"],
    "options_hi": ["पाब्लो पिकासो", "साल्वाडोर डाली", "विंसेंट वैन गॉग", "क्लाउड मोने"],
    "answer_en": "Pablo Picasso",
    "answer_hi": "पाब्लो पिकासो"
  },
  {
    "num": 14,
    "question_en": "What is the currency of South Africa?",
    "question_hi": "दक्षिण अफ्रीका की मुद्रा क्या है?",
    "options_en": ["Rand", "Peso", "Dollar", "Euro"],
    "options_hi": ["रैंड", "पेसो", "डॉलर", "यूरो"],
    "answer_en": "Rand",
    "answer_hi": "रैंड"
  },
  {
    "num": 15,
    "question_en": "Which organ stores bile?",
    "question_hi": "पित्त किस अंग में संग्रहित होता है?",
    "options_en": ["Liver", "Pancreas", "Gallbladder", "Stomach"],
    "options_hi": ["यकृत", "अग्न्याशय", "पित्ताशय", "पेट"],
    "answer_en": "Gallbladder",
    "answer_hi": "पित्ताशय"
  },
  {
    "num": 16,
    "question_en": "What is the capital of Turkey?",
    "question_hi": "तुर्की की राजधानी क्या है?",
    "options_en": ["Istanbul", "Ankara", "Izmir", "Antalya"],
    "options_hi": ["इस्तांबुल", "अंकारा", "इज़मिर", "अंताल्या"],
    "answer_en": "Ankara",
    "answer_hi": "अंकारा"
  },
  {
    "num": 17,
    "question_en": "Which is the fastest bird?",
    "question_hi": "सबसे तेज उड़ने वाला पक्षी कौन सा है?",
    "options_en": ["Eagle", "Falcon", "Hummingbird", "Swift"],
    "options_hi": ["गरुड़", "बाज", "गुंजन पक्षी", "स्विफ्ट"],
    "answer_en": "Falcon",
    "answer_hi": "बाज"
  },
  {
    "num": 18,
    "question_en": "Who discovered the theory of evolution?",
    "question_hi": "विकासवाद का सिद्धांत किसने खोजा?",
    "options_en": ["Charles Darwin", "Gregor Mendel", "Alfred Wallace", "Jean-Baptiste Lamarck"],
    "options_hi": ["चार्ल्स डार्विन", "ग्रेगर मेंडल", "अल्फ्रेड वालेस", "जीन-बैप्टिस्ट लैमार्क"],
    "answer_en": "Charles Darwin",
    "answer_hi": "चार्ल्स डार्विन"
  },
  {
    "num": 19,
    "question_en": "What is the capital of South Korea?",
    "question_hi": "दक्षिण कोरिया की राजधानी क्या है?",
    "options_en": ["Busan", "Seoul", "Incheon", "Daegu"],
    "options_hi": ["बुसान", "सियोल", "इंचियोन", "डेगू"],
    "answer_en": "Seoul",
    "answer_hi": "सियोल"
  },
  {
    "num": 20,
    "question_en": "Which is the largest species of shark?",
    "question_hi": "शार्क की सबसे बड़ी प्रजाति कौन सी है?",
    "options_en": ["Great White", "Whale Shark", "Tiger Shark", "Hammerhead"],
    "options_hi": ["ग्रेट व्हाइट", "व्हेल शार्क", "टाइगर शार्क", "हैमरहेड"],
    "answer_en": "Whale Shark",
    "answer_hi": "व्हेल शार्क"
  },
  {
    "num": 21,
    "question_en": "What is the chemical symbol for tin?",
    "question_hi": "टिन का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ti", "Tn", "Sn", "Si"],
    "options_hi": ["Ti", "Tn", "Sn", "Si"],
    "answer_en": "Sn",
    "answer_hi": "Sn"
  },
  {
    "num": 22,
    "question_en": "Who wrote 'The Great Gatsby'?",
    "question_hi": "'द ग्रेट गैट्सबी' किसने लिखी?",
    "options_en": ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
    "options_hi": ["एफ. स्कॉट फिजराल्ड", "अर्नेस्ट हेमिंग्वे", "जॉन स्टीनबेक", "विलियम फॉकनर"],
    "answer_en": "F. Scott Fitzgerald",
    "answer_hi": "एफ. स्कॉट फिजराल्ड"
  },
  {
    "num": 23,
    "question_en": "Which is the deepest ocean?",
    "question_hi": "सबसे गहरा महासागर कौन सा है?",
    "options_en": ["Atlantic", "Indian", "Arctic", "Pacific"],
    "options_hi": ["अटलांटिक", "हिंद", "आर्कटिक", "प्रशांत"],
    "answer_en": "Pacific",
    "answer_hi": "प्रशांत"
  },
  {
    "num": 24,
    "question_en": "What is the main component of natural gas?",
    "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
    "options_en": ["Butane", "Propane", "Methane", "Ethane"],
    "options_hi": ["ब्यूटेन", "प्रोपेन", "मीथेन", "इथेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन"
  },
  {
    "num": 25,
    "question_en": "Which country is known as the Land of the Long White Cloud?",
    "question_hi": "किस देश को लॉन्ग व्हाइट क्लाउड की भूमि के रूप में जाना जाता है?",
    "options_en": ["Australia", "New Zealand", "Iceland", "Japan"],
    "options_hi": ["ऑस्ट्रेलिया", "न्यूजीलैंड", "आइसलैंड", "जापान"],
    "answer_en": "New Zealand",
    "answer_hi": "न्यूजीलैंड"
  },
  {
    "num": 26,
    "question_en": "What is 20% of 150?",
    "question_hi": "150 का 20% क्या है?",
    "options_en": ["20", "25", "30", "35"],
    "options_hi": ["20", "25", "30", "35"],
    "answer_en": "30",
    "answer_hi": "30"
  },
  {
    "num": 27,
    "question_en": "Which vitamin is important for vision?",
    "question_hi": "दृष्टि के लिए कौन सा विटामिन महत्वपूर्ण है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन ए"
  },
  {
    "num": 28,
    "question_en": "Who was the first woman to win a Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाली पहली महिला कौन थीं?",
    "options_en": ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Dorothy Hodgkin"],
    "options_hi": ["मैरी क्यूरी", "मदर टेरेसा", "रोसालिंड फ्रैंकलिन", "डोरोथी हॉजकिन"],
    "answer_en": "Marie Curie",
    "answer_hi": "मैरी क्यूरी"
  },
  {
    "num": 29,
    "question_en": "What is the capital of Thailand?",
    "question_hi": "थाईलैंड की राजधानी क्या है?",
    "options_en": ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"],
    "options_hi": ["फुकेत", "चियांग माई", "बैंकॉक", "पटाया"],
    "answer_en": "Bangkok",
    "answer_hi": "बैंकॉक"
  },
  {
    "num": 30,
    "question_en": "Which gas is known as 'marsh gas'?",
    "question_hi": "किस गैस को 'मार्श गैस' के नाम से जाना जाता है?",
    "options_en": ["Ethane", "Propane", "Methane", "Butane"],
    "options_hi": ["इथेन", "प्रोपेन", "मीथेन", "ब्यूटेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन"
  },
  {
    "num": 31,
    "question_en": "Who wrote 'The Iliad'?",
    "question_hi": "'द इलियड' किसने लिखी?",
    "options_en": ["Virgil", "Homer", "Sophocles", "Aristotle"],
    "options_hi": ["वर्जिल", "होमर", "सोफोक्लीज़", "अरस्तू"],
    "answer_en": "Homer",
    "answer_hi": "होमर"
  },
  {
    "num": 32,
    "question_en": "Which is the largest desert in Asia?",
    "question_hi": "एशिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Thar Desert", "Gobi Desert", "Arabian Desert", "Karakum Desert"],
    "options_hi": ["थार रेगिस्तान", "गोबी रेगिस्तान", "अरब रेगिस्तान", "कराकुम रेगिस्तान"],
    "answer_en": "Gobi Desert",
    "answer_hi": "गोबी रेगिस्तान"
  },
  {
    "num": 33,
    "question_en": "What part of the cell is called the 'powerhouse'?",
    "question_hi": "कोशिका के किस भाग को 'पावरहाउस' कहा जाता है?",
    "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
    "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
    "answer_en": "Mitochondria",
    "answer_hi": "माइटोकॉन्ड्रिया"
  },
  {
    "num": 34,
    "question_en": "What is the chemical symbol for zinc?",
    "question_hi": "जिंक का रासायनिक प्रतीक क्या है?",
    "options_en": ["Zi", "Zn", "Zc", "Z"],
    "options_hi": ["Zi", "Zn", "Zc", "Z"],
    "answer_en": "Zn",
    "answer_hi": "Zn"
  },
  {
    "num": 35,
    "question_en": "Who painted 'The Persistence of Memory'?",
    "question_hi": "'द पर्सिस्टेंस ऑफ मेमोरी' किसने चित्रित की?",
    "options_en": ["Salvador Dalí", "Pablo Picasso", "René Magritte", "Joan Miró"],
    "options_hi": ["साल्वाडोर डाली", "पाब्लो पिकासो", "रेन मैग्रिट", "जोन मिरो"],
    "answer_en": "Salvador Dalí",
    "answer_hi": "साल्वाडोर डाली"
  },
  {
    "num": 36,
    "question_en": "Which is the national bird of the United States?",
    "question_hi": "संयुक्त राज्य अमेरिका का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Eagle", "Bald Eagle", "Turkey", "Robin"],
    "options_hi": ["गरुड़", "बाल्ड ईगल", "टर्की", "रॉबिन"],
    "answer_en": "Bald Eagle",
    "answer_hi": "बाल्ड ईगल"
  },
  {
    "num": 37,
    "question_en": "What is 25 × 4?",
    "question_hi": "25 × 4 क्या है?",
    "options_en": ["80", "90", "100", "110"],
    "options_hi": ["80", "90", "100", "110"],
    "answer_en": "100",
    "answer_hi": "100"
  },
  {
    "num": 38,
    "question_en": "Which organ produces insulin?",
    "question_hi": "इंसुलिन कौन सा अंग उत्पन्न करता है?",
    "options_en": ["Pancreas", "Liver", "Kidneys", "Stomach"],
    "options_hi": ["अग्न्याशय", "यकृत", "गुर्दे", "पेट"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय"
  },
  {
    "num": 39,
    "question_en": "What is the capital of Brazil?",
    "question_hi": "ब्राजील की राजधानी क्या है?",
    "options_en": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    "options_hi": ["रियो डी जनेरियो", "साओ पाउलो", "ब्रासीलिया", "साल्वाडोर"],
    "answer_en": "Brasília",
    "answer_hi": "ब्रासीलिया"
  },
  {
    "num": 40,
    "question_en": "Which is the softest mineral?",
    "question_hi": "सबसे नरम खनिज कौन सा है?",
    "options_en": ["Gypsum", "Calcite", "Talc", "Fluorite"],
    "options_hi": ["जिप्सम", "कैल्साइट", "टैल्क", "फ्लोराइट"],
    "answer_en": "Talc",
    "answer_hi": "टैल्क"
  },
  {
    "num": 41,
    "question_en": "Who invented the printing press?",
    "question_hi": "प्रिंटिंग प्रेस का आविष्कार किसने किया?",
    "options_en": ["Johannes Gutenberg", "Benjamin Franklin", "Thomas Edison", "Alexander Graham Bell"],
    "options_hi": ["जोहान्स गुटेनबर्ग", "बेंजामिन फ्रैंकलिन", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल"],
    "answer_en": "Johannes Gutenberg",
    "answer_hi": "जोहान्स गुटेनबर्ग"
  },
  {
    "num": 42,
    "question_en": "What is the chemical formula for ammonia?",
    "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
    "options_en": ["NH3", "CH4", "H2O", "CO2"],
    "options_hi": ["NH3", "CH4", "H2O", "CO2"],
    "answer_en": "NH3",
    "answer_hi": "NH3"
  },
  {
    "num": 43,
    "question_en": "Which is the largest freshwater lake by volume?",
    "question_hi": "आयतन के हिसाब से सबसे बड़ी मीठे पानी की झील कौन सी है?",
    "options_en": ["Lake Superior", "Lake Baikal", "Lake Victoria", "Lake Tanganyika"],
    "options_hi": ["लेक सुपीरियर", "बैकाल झील", "विक्टोरिया झील", "टैंगानिका झील"],
    "answer_en": "Lake Baikal",
    "answer_hi": "बैकाल झील"
  },
  {
    "num": 44,
    "question_en": "Who was the first Indian to go to space?",
    "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
    "options_en": ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Ravish Malhotra"],
    "options_hi": ["कल्पना चावला", "राकेश शर्मा", "सुनीता विलियम्स", "रवीश मल्होत्रा"],
    "answer_en": "Rakesh Sharma",
    "answer_hi": "राकेश शर्मा"
  },
  {
    "num": 45,
    "question_en": "What is the boiling point of alcohol?",
    "question_hi": "अल्कोहल का क्वथनांक क्या है?",
    "options_en": ["60°C", "78°C", "100°C", "120°C"],
    "options_hi": ["60°C", "78°C", "100°C", "120°C"],
    "answer_en": "78°C",
    "answer_hi": "78°C"
  },
  {
    "num": 46,
    "question_en": "Which country is the largest producer of tea?",
    "question_hi": "चाय का सबसे बड़ा उत्पादक देश कौन सा है?",
    "options_en": ["India", "China", "Sri Lanka", "Kenya"],
    "options_hi": ["भारत", "चीन", "श्रीलंका", "केन्या"],
    "answer_en": "China",
    "answer_hi": "चीन"
  },
  {
    "num": 47,
    "question_en": "What is the capital of Russia?",
    "question_hi": "रूस की राजधानी क्या है?",
    "options_en": ["St. Petersburg", "Moscow", "Kazan", "Novosibirsk"],
    "options_hi": ["सेंट पीटर्सबर्ग", "मास्को", "कजान", "नोवोसिबिर्स्क"],
    "answer_en": "Moscow",
    "answer_hi": "मास्को"
  },
  {
    "num": 48,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "आग बुझाने के यंत्रों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड"
  },
  {
    "num": 49,
    "question_en": "Who wrote 'The Old Man and the Sea'?",
    "question_hi": "'द ओल्ड मैन एंड द सी' किसने लिखी?",
    "options_en": ["Ernest Hemingway", "Mark Twain", "John Steinbeck", "F. Scott Fitzgerald"],
    "options_hi": ["अर्नेस्ट हेमिंग्वे", "मार्क ट्वेन", "जॉन स्टीनबेक", "एफ. स्कॉट फिजराल्ड"],
    "answer_en": "Ernest Hemingway",
    "answer_hi": "अर्नेस्ट हेमिंग्वे"
  },
  {
    "num": 50,
    "question_en": "What is the chemical symbol for mercury?",
    "question_hi": "पारे का रासायनिक प्रतीक क्या है?",
    "options_en": ["Me", "Hg", "Mc", "Mr"],
    "options_hi": ["Me", "Hg", "Mc", "Mr"],
    "answer_en": "Hg",
    "answer_hi": "Hg"
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