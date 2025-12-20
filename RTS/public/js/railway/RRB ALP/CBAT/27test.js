const questions = [
  {
    "num": 1,
    "question_en": "What is the chemical symbol of Gold?",
    "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ag", "Au", "Gd", "Go"],
    "options_hi": ["Ag", "Au", "Gd", "Go"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
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
    "num": 3,
    "question_en": "Which gas is most abundant in Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक कौन सी गैस है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
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
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Iron", "Mercury", "Copper", "Aluminum"],
    "options_hi": ["लोहा", "पारा", "तांबा", "एल्युमिनियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Who is known as the Father of the Indian Constitution?",
    "question_hi": "भारतीय संविधान के जनक किसे कहा जाता है?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
    "answer_en": "B.R. Ambedkar",
    "answer_hi": "बी.आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the capital of Australia?",
    "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
    "options_en": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "options_hi": ["सिडनी", "मेलबोर्न", "कैनबरा", "पर्थ"],
    "answer_en": "Canberra",
    "answer_hi": "कैनबरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is the longest river in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Yamuna", "Ganga", "Godavari", "Brahmaputra"],
    "options_hi": ["यमुना", "गंगा", "गोदावरी", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "How many bones are there in the adult human body?",
    "question_hi": "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
    "options_en": ["206", "208", "210", "212"],
    "options_hi": ["206", "208", "210", "212"],
    "answer_en": "206",
    "answer_hi": "206",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Who wrote 'Romeo and Juliet'?",
    "question_hi": "'रोमियो और जूलियट' किसने लिखा?",
    "options_en": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
    "options_hi": ["चार्ल्स डिकेंस", "विलियम शेक्सपियर", "जेन ऑस्टेन", "लियो टॉल्स्टॉय"],
    "answer_en": "William Shakespeare",
    "answer_hi": "विलियम शेक्सपियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is the smallest continent by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Africa", "Europe", "Australia", "Antarctica"],
    "options_hi": ["अफ्रीका", "यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the currency of Japan?",
    "question_hi": "जापान की मुद्रा क्या है?",
    "options_en": ["Yen", "Won", "Yuan", "Dollar"],
    "options_hi": ["येन", "वॉन", "युआन", "डॉलर"],
    "answer_en": "Yen",
    "answer_hi": "येन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Who discovered penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
    "options_hi": ["मैरी क्यूरी", "अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which organ in the human body produces insulin?",
    "question_hi": "मानव शरीर में इंसुलिन कौन सा अंग उत्पन्न करता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the boiling point of water at sea level?",
    "question_hi": "समुद्र तल पर पानी का क्वथनांक कितना होता है?",
    "options_en": ["90°C", "100°C", "110°C", "120°C"],
    "options_hi": ["90°C", "100°C", "110°C", "120°C"],
    "answer_en": "100°C",
    "answer_hi": "100°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which country hosted the 2020 Summer Olympics?",
    "question_hi": "2020 ग्रीष्मकालीन ओलंपिक की मेजबानी किस देश ने की?",
    "options_en": ["China", "Brazil", "Japan", "UK"],
    "options_hi": ["चीन", "ब्राजील", "जापान", "यूके"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "CO2", "NaCl", "O2"],
    "options_hi": ["H2O", "CO2", "NaCl", "O2"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
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
    "num": 20,
    "question_en": "Which gas do plants absorb during photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस अवशोषित करते हैं?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which is the largest ocean on Earth?",
    "question_hi": "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Who painted the Mona Lisa?",
    "question_hi": "मोना लिसा की पेंटिंग किसने बनाई?",
    "options_en": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    "options_hi": ["विंसेंट वैन गॉग", "पाब्लो पिकासो", "लियोनार्डो दा विंची", "माइकलएंजेलो"],
    "answer_en": "Leonardo da Vinci",
    "answer_hi": "लियोनार्डो दा विंची",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the main component of the Sun?",
    "question_hi": "सूर्य का मुख्य घटक क्या है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "किस ग्रह को लाल ग्रह के नाम से जाना जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थी?",
    "options_en": ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "Sarojini Naidu"],
    "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी", "सरोजिनी नायडू"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the speed of light in vacuum?",
    "question_hi": "निर्वात में प्रकाश की गति कितनी है?",
    "options_en": ["300,000 km/s", "299,792 km/s", "150,000 km/s", "200,000 km/s"],
    "options_hi": ["300,000 किमी/से", "299,792 किमी/से", "150,000 किमी/से", "200,000 किमी/से"],
    "answer_en": "299,792 km/s",
    "answer_hi": "299,792 किमी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which is the national animal of India?",
    "question_hi": "भारत का राष्ट्रीय पशु क्या है?",
    "options_en": ["Lion", "Elephant", "Tiger", "Peacock"],
    "options_hi": ["शेर", "हाथी", "बाघ", "मोर"],
    "answer_en": "Tiger",
    "answer_hi": "बाघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the hardest natural substance on Earth?",
    "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ क्या है?",
    "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
    "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Who discovered gravity?",
    "question_hi": "गुरुत्वाकर्षण की खोज किसने की?",
    "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    "options_hi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
    "answer_en": "Isaac Newton",
    "answer_hi": "आइजैक न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the chemical symbol of Sodium?",
    "question_hi": "सोडियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["So", "Sd", "Na", "Nm"],
    "options_hi": ["So", "Sd", "Na", "Nm"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which is the longest river in the world?",
    "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "options_hi": ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "How many players are there in a cricket team?",
    "question_hi": "क्रिकेट टीम में कितने खिलाड़ी होते हैं?",
    "options_en": ["10", "11", "12", "9"],
    "options_hi": ["10", "11", "12", "9"],
    "answer_en": "11",
    "answer_hi": "11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Who wrote the national anthem of India?",
    "question_hi": "भारत का राष्ट्रगान किसने लिखा?",
    "options_en": ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Mahatma Gandhi", "Jawaharlal Nehru"],
    "options_hi": ["रबीन्द्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "महात्मा गांधी", "जवाहरलाल नेहरू"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रबीन्द्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the capital of Brazil?",
    "question_hi": "ब्राज़ील की राजधानी क्या है?",
    "options_en": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    "options_hi": ["रियो डी जनेरियो", "साओ पाउलो", "ब्रासीलिया", "साल्वाडोर"],
    "answer_en": "Brasília",
    "answer_hi": "ब्रासीलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which vitamin is produced by the human body when exposed to sunlight?",
    "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर कौन सा विटामिन उत्पन्न करता है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन डी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which is the largest desert in the world?",
    "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Sahara", "Arabian", "Gobi", "Kalahari"],
    "options_hi": ["सहारा", "अरबी", "गोबी", "कालाहारी"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Who is known as the Nightingale of India?",
    "question_hi": "भारत की कोकिला किसे कहा जाता है?",
    "options_en": ["Lata Mangeshkar", "Sarojini Naidu", "Indira Gandhi", "M.S. Subbulakshmi"],
    "options_hi": ["लता मंगेशकर", "सरोजिनी नायडू", "इंदिरा गांधी", "एम.एस. सुब्बुलक्ष्मी"],
    "answer_en": "Sarojini Naidu",
    "answer_hi": "सरोजिनी नायडू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which element has the atomic number 1?",
    "question_hi": "किस तत्व का परमाणु क्रमांक 1 है?",
    "options_en": ["Helium", "Hydrogen", "Lithium", "Oxygen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "लिथियम", "ऑक्सीजन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which country is known as the Land of the Rising Sun?",
    "question_hi": "किस देश को उगते सूरज की भूमि के नाम से जाना जाता है?",
    "options_en": ["China", "South Korea", "Japan", "Thailand"],
    "options_hi": ["चीन", "दक्षिण कोरिया", "जापान", "थाईलैंड"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the main ingredient in bread?",
    "question_hi": "ब्रेड में मुख्य सामग्री क्या है?",
    "options_en": ["Rice", "Corn", "Wheat", "Barley"],
    "options_hi": ["चावल", "मक्का", "गेहूं", "जौ"],
    "answer_en": "Wheat",
    "answer_hi": "गेहूं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Who is the author of 'The Discovery of India'?",
    "question_hi": "'द डिस्कवरी ऑफ इंडिया' के लेखक कौन हैं?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Subhas Chandra Bose"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सुभाष चंद्र बोस"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the chemical formula of table salt?",
    "question_hi": "टेबल साल्ट (नमक) का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "CaCO3", "H2O"],
    "options_hi": ["NaCl", "KCl", "CaCO3", "H2O"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
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
    "num": 45,
    "question_en": "What is the largest mammal in the world?",
    "question_hi": "दुनिया का सबसे बड़ा स्तनपायी कौन सा है?",
    "options_en": ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    "options_hi": ["हाथी", "ब्लू व्हेल", "जिराफ", "ध्रुवीय भालू"],
    "answer_en": "Blue Whale",
    "answer_hi": "ब्लू व्हेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Who invented the light bulb?",
    "question_hi": "बल्ब का आविष्कार किसने किया?",
    "options_en": ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "James Watt"],
    "options_hi": ["थॉमस एडिसन", "निकोला टेस्ला", "बेंजामिन फ्रैंकलिन", "जेम्स वाट"],
    "answer_en": "Thomas Edison",
    "answer_hi": "थॉमस एडिसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which is the fastest land animal?",
    "question_hi": "सबसे तेज भूमि जानवर कौन सा है?",
    "options_en": ["Cheetah", "Lion", "Horse", "Kangaroo"],
    "options_hi": ["चीता", "शेर", "घोड़ा", "कंगारू"],
    "answer_en": "Cheetah",
    "answer_hi": "चीता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the national sport of Japan?",
    "question_hi": "जापान का राष्ट्रीय खेल क्या है?",
    "options_en": ["Sumo Wrestling", "Karate", "Judo", "Baseball"],
    "options_hi": ["सूमो कुश्ती", "कराटे", "जूडो", "बेसबॉल"],
    "answer_en": "Sumo Wrestling",
    "answer_hi": "सूमो कुश्ती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which metal is the best conductor of electricity?",
    "question_hi": "कौन सी धातु बिजली की सबसे अच्छी सुचालक है?",
    "options_en": ["Copper", "Silver", "Gold", "Aluminum"],
    "options_hi": ["तांबा", "चांदी", "सोना", "एल्युमिनियम"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is the smallest country in the world by area?",
    "question_hi": "क्षेत्रफल के हिसाब से दुनिया का सबसे छोटा देश कौन सा है?",
    "options_en": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    "options_hi": ["मोनाको", "वेटिकन सिटी", "सैन मैरिनो", "लिचेंस्टीन"],
    "answer_en": "Vatican City",
    "answer_hi": "वेटिकन सिटी",
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