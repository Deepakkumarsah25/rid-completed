const questions = [
  {
    "num": 1,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "किस ग्रह को लाल ग्रह के नाम से जाना जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल"
  },
  {
    "num": 2,
    "question_en": "What is the capital of France?",
    "question_hi": "फ्रांस की राजधानी क्या है?",
    "options_en": ["Berlin", "Madrid", "Paris", "Rome"],
    "options_hi": ["बर्लिन", "मैड्रिड", "पेरिस", "रोम"],
    "answer_en": "Paris",
    "answer_hi": "पेरिस"
  },
  {
    "num": 3,
    "question_en": "Which gas do plants absorb from the atmosphere?",
    "question_hi": "पौधे वायुमंडल से कौन सी गैस अवशोषित करते हैं?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड"
  },
  {
    "num": 4,
    "question_en": "Who wrote the play 'Romeo and Juliet'?",
    "question_hi": "'रोमियो और जूलियट' नाटक किसने लिखा था?",
    "options_en": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    "options_hi": ["चार्ल्स डिकेंस", "विलियम शेक्सपियर", "जेन ऑस्टेन", "मार्क ट्वेन"],
    "answer_en": "William Shakespeare",
    "answer_hi": "विलियम शेक्सपियर"
  },
  {
    "num": 5,
    "question_en": "What is the chemical symbol for gold?",
    "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
    "options_en": ["Go", "Gd", "Au", "Ag"],
    "options_hi": ["Go", "Gd", "Au", "Ag"],
    "answer_en": "Au",
    "answer_hi": "Au"
  },
  {
    "num": 6,
    "question_en": "Which is the largest ocean on Earth?",
    "question_hi": "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर"
  },
  {
    "num": 7,
    "question_en": "What is the square root of 144?",
    "question_hi": "144 का वर्गमूल क्या है?",
    "options_en": ["10", "11", "12", "13"],
    "options_hi": ["10", "11", "12", "13"],
    "answer_en": "12",
    "answer_hi": "12"
  },
  {
    "num": 8,
    "question_en": "Which organ in the human body pumps blood?",
    "question_hi": "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
    "options_en": ["Liver", "Lungs", "Heart", "Kidneys"],
    "options_hi": ["यकृत", "फेफड़े", "हृदय", "गुर्दे"],
    "answer_en": "Heart",
    "answer_hi": "हृदय"
  },
  {
    "num": 9,
    "question_en": "In which year did India gain independence?",
    "question_hi": "भारत ने किस वर्ष स्वतंत्रता प्राप्त की?",
    "options_en": ["1945", "1947", "1950", "1952"],
    "options_hi": ["1945", "1947", "1950", "1952"],
    "answer_en": "1947",
    "answer_hi": "1947"
  },
  {
    "num": 10,
    "question_en": "What is the hardest natural substance on Earth?",
    "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ क्या है?",
    "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
    "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा"
  },
  {
    "num": 11,
    "question_en": "Which is the largest planet in our solar system?",
    "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Earth", "Saturn", "Jupiter", "Neptune"],
    "options_hi": ["पृथ्वी", "शनि", "बृहस्पति", "वरुण"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति"
  },
  {
    "num": 12,
    "question_en": "Who discovered penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Marie Curie", "Alexander Fleming", "Isaac Newton", "Albert Einstein"],
    "options_hi": ["मैरी क्यूरी", "अलेक्जेंडर फ्लेमिंग", "आइज़क न्यूटन", "अल्बर्ट आइंस्टीन"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग"
  },
  {
    "num": 13,
    "question_en": "What is the boiling point of water in Celsius?",
    "question_hi": "पानी का क्वथनांक सेल्सियस में कितना होता है?",
    "options_en": ["50°C", "100°C", "150°C", "200°C"],
    "options_hi": ["50°C", "100°C", "150°C", "200°C"],
    "answer_en": "100°C",
    "answer_hi": "100°C"
  },
  {
    "num": 14,
    "question_en": "Which country is known as the Land of the Rising Sun?",
    "question_hi": "किस देश को उगते सूरज की भूमि के नाम से जाना जाता है?",
    "options_en": ["China", "South Korea", "Japan", "Thailand"],
    "options_hi": ["चीन", "दक्षिण कोरिया", "जापान", "थाईलैंड"],
    "answer_en": "Japan",
    "answer_hi": "जापान"
  },
  {
    "num": 15,
    "question_en": "What is the smallest prime number?",
    "question_hi": "सबसे छोटी अभाज्य संख्या कौन सी है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "2",
    "answer_hi": "2"
  },
  {
    "num": 16,
    "question_en": "Which vitamin is produced when the human body is exposed to sunlight?",
    "question_hi": "मानव शरीर सूर्य के प्रकाश के संपर्क में आने पर कौन सा विटामिन उत्पन्न करता है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन डी"
  },
  {
    "num": 17,
    "question_en": "Who painted the Mona Lisa?",
    "question_hi": "मोना लिसा की पेंटिंग किसने बनाई?",
    "options_en": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    "options_hi": ["विंसेंट वैन गॉग", "पाब्लो पिकासो", "लियोनार्डो दा विंची", "माइकलएंजेलो"],
    "answer_en": "Leonardo da Vinci",
    "answer_hi": "लियोनार्डो दा विंची"
  },
  {
    "num": 18,
    "question_en": "What is the currency of Japan?",
    "question_hi": "जापान की मुद्रा क्या है?",
    "options_en": ["Won", "Yen", "Yuan", "Ringgit"],
    "options_hi": ["वॉन", "येन", "युआन", "रिंगित"],
    "answer_en": "Yen",
    "answer_hi": "येन"
  },
  {
    "num": 19,
    "question_en": "Which gas is most abundant in Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन"
  },
  {
    "num": 20,
    "question_en": "How many bones are there in the adult human body?",
    "question_hi": "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
    "options_en": ["156", "206", "256", "306"],
    "options_hi": ["156", "206", "256", "306"],
    "answer_en": "206",
    "answer_hi": "206"
  },
  {
    "num": 21,
    "question_en": "Which is the longest river in the world?",
    "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    "options_hi": ["अमेज़न नदी", "नील नदी", "यांग्त्ज़ी नदी", "मिसिसिपी नदी"],
    "answer_en": "Nile River",
    "answer_hi": "नील नदी"
  },
  {
    "num": 22,
    "question_en": "What is the chemical formula for water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "CO2", "NaCl", "O2"],
    "options_hi": ["H2O", "CO2", "NaCl", "O2"],
    "answer_en": "H2O",
    "answer_hi": "H2O"
  },
  {
    "num": 23,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Mamata Banerjee"],
    "options_hi": ["सोनिया गांधी", "इंदिरा गांधी", "प्रतिभा पाटिल", "ममता बनर्जी"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी"
  },
  {
    "num": 24,
    "question_en": "Which planet is known for its rings?",
    "question_hi": "किस ग्रह को उसके छल्लों के लिए जाना जाता है?",
    "options_en": ["Mars", "Jupiter", "Saturn", "Uranus"],
    "options_hi": ["मंगल", "बृहस्पति", "शनि", "अरुण"],
    "answer_en": "Saturn",
    "answer_hi": "शनि"
  },
  {
    "num": 25,
    "question_en": "What is the capital of Australia?",
    "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
    "options_en": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "options_hi": ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"],
    "answer_en": "Canberra",
    "answer_hi": "कैनबरा"
  },
  {
    "num": 26,
    "question_en": "Which element has the atomic number 1?",
    "question_hi": "किस तत्व की परमाणु संख्या 1 है?",
    "options_en": ["Helium", "Oxygen", "Hydrogen", "Lithium"],
    "options_hi": ["हीलियम", "ऑक्सीजन", "हाइड्रोजन", "लिथियम"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन"
  },
  {
    "num": 27,
    "question_en": "What is the largest desert in the world?",
    "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
    "options_hi": ["सहारा रेगिस्तान", "अरब रेगिस्तान", "गोबी रेगिस्तान", "अंटार्कटिक रेगिस्तान"],
    "answer_en": "Antarctic Desert",
    "answer_hi": "अंटार्कटिक रेगिस्तान"
  },
  {
    "num": 28,
    "question_en": "Who wrote the Indian National Anthem?",
    "question_hi": "भारतीय राष्ट्रगान किसने लिखा?",
    "options_en": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"],
    "options_hi": ["बंकिम चंद्र चट्टोपाध्याय", "रबींद्रनाथ टैगोर", "सरोजिनी नायडू", "महात्मा गांधी"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रबींद्रनाथ टैगोर"
  },
  {
    "num": 29,
    "question_en": "What is the speed of light in vacuum?",
    "question_hi": "निर्वात में प्रकाश की गति क्या है?",
    "options_en": ["150,000 km/s", "200,000 km/s", "300,000 km/s", "400,000 km/s"],
    "options_hi": ["150,000 किमी/से", "200,000 किमी/से", "300,000 किमी/से", "400,000 किमी/से"],
    "answer_en": "300,000 km/s",
    "answer_hi": "300,000 किमी/से"
  },
  {
    "num": 30,
    "question_en": "Which is the smallest continent by land area?",
    "question_hi": "भूमि क्षेत्र के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Europe", "Australia", "South America", "Antarctica"],
    "options_hi": ["यूरोप", "ऑस्ट्रेलिया", "दक्षिण अमेरिका", "अंटार्कटिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया"
  },
  {
    "num": 31,
    "question_en": "What is the main component of the Sun?",
    "question_hi": "सूर्य का मुख्य घटक क्या है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन"
  },
  {
    "num": 32,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
    "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "गुग्लिल्मो मार्कोनी"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल"
  },
  {
    "num": 33,
    "question_en": "Which is the national bird of India?",
    "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Peacock", "Parrot", "Sparrow", "Eagle"],
    "options_hi": ["मोर", "तोता", "गौरैया", "गरुड़"],
    "answer_en": "Peacock",
    "answer_hi": "मोर"
  },
  {
    "num": 34,
    "question_en": "What is the value of π (pi) approximately?",
    "question_hi": "π (पाई) का मान लगभग कितना है?",
    "options_en": ["2.14", "3.14", "4.14", "3.41"],
    "options_hi": ["2.14", "3.14", "4.14", "3.41"],
    "answer_en": "3.14",
    "answer_hi": "3.14"
  },
  {
    "num": 35,
    "question_en": "Which blood group is known as the universal donor?",
    "question_hi": "किस रक्त समूह को सार्वभौमिक दाता के रूप में जाना जाता है?",
    "options_en": ["A+", "B+", "O-", "AB+"],
    "options_hi": ["ए+", "बी+", "ओ-", "एबी+"],
    "answer_en": "O-",
    "answer_hi": "ओ-"
  },
  {
    "num": 36,
    "question_en": "What is the largest mammal in the world?",
    "question_hi": "दुनिया का सबसे बड़ा स्तनपायी कौन सा है?",
    "options_en": ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    "options_hi": ["अफ्रीकी हाथी", "ब्लू व्हेल", "जिराफ", "ध्रुवीय भालू"],
    "answer_en": "Blue Whale",
    "answer_hi": "ब्लू व्हेल"
  },
  {
    "num": 37,
    "question_en": "Which is the highest mountain peak in the world?",
    "question_hi": "दुनिया का सबसे ऊँचा पर्वत शिखर कौन सा है?",
    "options_en": ["K2", "Kangchenjunga", "Mount Everest", "Makalu"],
    "options_hi": ["के2", "कंचनजंगा", "माउंट एवरेस्ट", "मकालू"],
    "answer_en": "Mount Everest",
    "answer_hi": "माउंट एवरेस्ट"
  },
  {
    "num": 38,
    "question_en": "Who developed the theory of relativity?",
    "question_hi": "सापेक्षता का सिद्धांत किसने विकसित किया?",
    "options_en": ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
    "options_hi": ["आइज़क न्यूटन", "नील्स बोहर", "अल्बर्ट आइंस्टीन", "स्टीफन हॉकिंग"],
    "answer_en": "Albert Einstein",
    "answer_hi": "अल्बर्ट आइंस्टीन"
  },
  {
    "num": 39,
    "question_en": "What is the chemical symbol for sodium?",
    "question_hi": "सोडियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["So", "Sd", "Na", "Sa"],
    "options_hi": ["So", "Sd", "Na", "Sa"],
    "answer_en": "Na",
    "answer_hi": "Na"
  },
  {
    "num": 40,
    "question_en": "Which organ is responsible for producing insulin?",
    "question_hi": "इंसुलिन का उत्पादन करने के लिए कौन सा अंग जिम्मेदार है?",
    "options_en": ["Liver", "Pancreas", "Kidneys", "Stomach"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दे", "पेट"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय"
  },
  {
    "num": 41,
    "question_en": "What is the largest bone in the human body?",
    "question_hi": "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
    "options_en": ["Femur", "Tibia", "Humerus", "Pelvis"],
    "options_hi": ["फीमर", "टिबिया", "ह्यूमरस", "श्रोणि"],
    "answer_en": "Femur",
    "answer_hi": "फीमर"
  },
  {
    "num": 42,
    "question_en": "Which country hosted the 2016 Summer Olympics?",
    "question_hi": "2016 ग्रीष्मकालीन ओलंपिक की मेजबानी किस देश ने की?",
    "options_en": ["China", "Brazil", "United Kingdom", "Russia"],
    "options_hi": ["चीन", "ब्राज़ील", "यूनाइटेड किंगडम", "रूस"],
    "answer_en": "Brazil",
    "answer_hi": "ब्राज़ील"
  },
  {
    "num": 43,
    "question_en": "What is the square of 15?",
    "question_hi": "15 का वर्ग क्या है?",
    "options_en": ["125", "225", "325", "425"],
    "options_hi": ["125", "225", "325", "425"],
    "answer_en": "225",
    "answer_hi": "225"
  },
  {
    "num": 44,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "किस गैस को हंसाने वाली गैस के नाम से जाना जाता है?",
    "options_en": ["Nitrogen", "Oxygen", "Nitrous Oxide", "Carbon Monoxide"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड"],
    "answer_en": "Nitrous Oxide",
    "answer_hi": "नाइट्रस ऑक्साइड"
  },
  {
    "num": 45,
    "question_en": "Who was the first President of the United States?",
    "question_hi": "संयुक्त राज्य अमेरिका के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
    "options_hi": ["थॉमस जेफरसन", "जॉर्ज वाशिंगटन", "अब्राहम लिंकन", "जॉन एडम्स"],
    "answer_en": "George Washington",
    "answer_hi": "जॉर्ज वाशिंगटन"
  },
  {
    "num": 46,
    "question_en": "What is the freezing point of water in Fahrenheit?",
    "question_hi": "फ़ारेनहाइट में पानी का हिमांक क्या है?",
    "options_en": ["0°F", "32°F", "100°F", "212°F"],
    "options_hi": ["0°F", "32°F", "100°F", "212°F"],
    "answer_en": "32°F",
    "answer_hi": "32°F"
  },
  {
    "num": 47,
    "question_en": "Which is the brightest planet in the night sky?",
    "question_hi": "रात के आकाश में सबसे चमकीला ग्रह कौन सा है?",
    "options_en": ["Mars", "Jupiter", "Venus", "Mercury"],
    "options_hi": ["मंगल", "बृहस्पति", "शुक्र", "बुध"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र"
  },
  {
    "num": 48,
    "question_en": "What is the main language of Brazil?",
    "question_hi": "ब्राज़ील की मुख्य भाषा क्या है?",
    "options_en": ["Spanish", "Portuguese", "English", "French"],
    "options_hi": ["स्पेनिश", "पुर्तगाली", "अंग्रेजी", "फ्रेंच"],
    "answer_en": "Portuguese",
    "answer_hi": "पुर्तगाली"
  },
  {
    "num": 49,
    "question_en": "How many sides does a hexagon have?",
    "question_hi": "षट्कोण में कितनी भुजाएँ होती हैं?",
    "options_en": ["4", "5", "6", "7"],
    "options_hi": ["4", "5", "6", "7"],
    "answer_en": "6",
    "answer_hi": "6"
  },
  {
    "num": 50,
    "question_en": "Which scientist proposed the law of gravity?",
    "question_hi": "गुरुत्वाकर्षण का नियम किस वैज्ञानिक ने प्रस्तावित किया?",
    "options_en": ["Galileo Galilei", "Isaac Newton", "Nikola Tesla", "Michael Faraday"],
    "options_hi": ["गैलीलियो गैलिली", "आइज़क न्यूटन", "निकोला टेस्ला", "माइकल फैराडे"],
    "answer_en": "Isaac Newton",
    "answer_hi": "आइज़क न्यूटन"
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