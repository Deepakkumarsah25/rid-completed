const questions = [
  {
    "num": 1,
    "question_en": "Which is the largest continent by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
    "options_en": ["Asia", "Africa", "North America", "Europe"],
    "options_hi": ["एशिया", "अफ्रीका", "उत्तरी अमेरिका", "यूरोप"],
    "answer_en": "Asia",
    "answer_hi": "एशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
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
    "num": 3,
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
    "num": 4,
    "question_en": "What is the smallest country in the world?",
    "question_hi": "दुनिया का सबसे छोटा देश कौन सा है?",
    "options_en": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    "options_hi": ["मोनाको", "वेटिकन सिटी", "सैन मैरिनो", "लिकटेंस्टीन"],
    "answer_en": "Vatican City",
    "answer_hi": "वेटिकन सिटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which ocean is the largest?",
    "question_hi": "सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which is the highest mountain peak in the world?",
    "question_hi": "दुनिया की सबसे ऊँची पर्वत चोटी कौन सी है?",
    "options_en": ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    "options_hi": ["K2", "कंचनजंगा", "माउंट एवरेस्ट", "ल्होत्से"],
    "answer_en": "Mount Everest",
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the capital of Japan?",
    "question_hi": "जापान की राजधानी क्या है?",
    "options_en": ["Osaka", "Kyoto", "Tokyo", "Nagoya"],
    "options_hi": ["ओसाका", "क्योटो", "टोक्यो", "नागोया"],
    "answer_en": "Tokyo",
    "answer_hi": "टोक्यो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which desert is the largest in the world?",
    "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Arabian Desert", "Gobi Desert", "Sahara Desert", "Kalahari Desert"],
    "options_hi": ["अरब रेगिस्तान", "गोबी रेगिस्तान", "सहारा रेगिस्तान", "कालाहारी रेगिस्तान"],
    "answer_en": "Sahara Desert",
    "answer_hi": "सहारा रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which country has the largest population?",
    "question_hi": "सबसे अधिक जनसंख्या वाला देश कौन सा है?",
    "options_en": ["India", "United States", "China", "Indonesia"],
    "options_hi": ["भारत", "संयुक्त राज्य अमेरिका", "चीन", "इंडोनेशिया"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
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
    "num": 11,
    "question_en": "Which is the largest island in the world?",
    "question_hi": "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Borneo", "New Guinea", "Greenland", "Madagascar"],
    "options_hi": ["बोर्नियो", "न्यू गिनी", "ग्रीनलैंड", "मेडागास्कर"],
    "answer_en": "Greenland",
    "answer_hi": "ग्रीनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the capital of Russia?",
    "question_hi": "रूस की राजधानी क्या है?",
    "options_en": ["Saint Petersburg", "Moscow", "Novosibirsk", "Yekaterinburg"],
    "options_hi": ["सेंट पीटर्सबर्ग", "मॉस्को", "नोवोसिबिर्स्क", "येकातेरिनबर्ग"],
    "answer_en": "Moscow",
    "answer_hi": "मॉस्को",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which is the largest lake in the world?",
    "question_hi": "दुनिया की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Baikal"],
    "options_hi": ["लेक सुपीरियर", "लेक विक्टोरिया", "कैस्पियन सागर", "लेक बैकाल"],
    "answer_en": "Caspian Sea",
    "answer_hi": "कैस्पियन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which country is known as the Land of the Rising Sun?",
    "question_hi": "किस देश को उगते सूरज की भूमि के रूप में जाना जाता है?",
    "options_en": ["China", "Japan", "South Korea", "Thailand"],
    "options_hi": ["चीन", "जापान", "दक्षिण कोरिया", "थाईलैंड"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the capital of Egypt?",
    "question_hi": "मिस्र की राजधानी क्या है?",
    "options_en": ["Alexandria", "Cairo", "Giza", "Luxor"],
    "options_hi": ["अलेक्जेंड्रिया", "काहिरा", "गीजा", "लक्सर"],
    "answer_en": "Cairo",
    "answer_hi": "काहिरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is the deepest ocean trench?",
    "question_hi": "सबसे गहरी समुद्री खाई कौन सी है?",
    "options_en": ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"],
    "options_hi": ["मारियाना ट्रेंच", "प्यूर्टो रिको ट्रेंच", "जावा ट्रेंच", "टोंगा ट्रेंच"],
    "answer_en": "Mariana Trench",
    "answer_hi": "मारियाना ट्रेंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the capital of Canada?",
    "question_hi": "कनाडा की राजधानी क्या है?",
    "options_en": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    "options_hi": ["टोरंटो", "वैंकूवर", "ओटावा", "मॉन्ट्रियल"],
    "answer_en": "Ottawa",
    "answer_hi": "ओटावा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is the largest country by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा देश कौन सा है?",
    "options_en": ["China", "United States", "Russia", "Canada"],
    "options_hi": ["चीन", "संयुक्त राज्य अमेरिका", "रूस", "कनाडा"],
    "answer_en": "Russia",
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the capital of South Africa?",
    "question_hi": "दक्षिण अफ्रीका की राजधानी क्या है?",
    "options_en": ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
    "options_hi": ["केप टाउन", "प्रिटोरिया", "जोहान्सबर्ग", "डरबन"],
    "answer_en": "Pretoria",
    "answer_hi": "प्रिटोरिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is the smallest continent?",
    "question_hi": "सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Europe", "Australia", "Antarctica", "South America"],
    "options_hi": ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the capital of France?",
    "question_hi": "फ्रांस की राजधानी क्या है?",
    "options_en": ["Marseille", "Lyon", "Paris", "Nice"],
    "options_hi": ["मार्सेई", "लियोन", "पेरिस", "नाइस"],
    "answer_en": "Paris",
    "answer_hi": "पेरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which river flows through Paris?",
    "question_hi": "कौन सी नदी पेरिस से होकर बहती है?",
    "options_en": ["Rhine", "Seine", "Loire", "Thames"],
    "options_hi": ["राइन", "सीन", "लोयर", "टेम्स"],
    "answer_en": "Seine",
    "answer_hi": "सीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the capital of Italy?",
    "question_hi": "इटली की राजधानी क्या है?",
    "options_en": ["Milan", "Rome", "Venice", "Florence"],
    "options_hi": ["मिलान", "रोम", "वेनिस", "फ्लोरेंस"],
    "answer_en": "Rome",
    "answer_hi": "रोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which is the largest desert in Asia?",
    "question_hi": "एशिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Thar Desert", "Gobi Desert", "Arabian Desert", "Karakum Desert"],
    "options_hi": ["थार रेगिस्तान", "गोबी रेगिस्तान", "अरब रेगिस्तान", "कराकुम रेगिस्तान"],
    "answer_en": "Gobi Desert",
    "answer_hi": "गोबी रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the capital of Germany?",
    "question_hi": "जर्मनी की राजधानी क्या है?",
    "options_en": ["Munich", "Berlin", "Frankfurt", "Hamburg"],
    "options_hi": ["म्यूनिख", "बर्लिन", "फ्रैंकफर्ट", "हैम्बर्ग"],
    "answer_en": "Berlin",
    "answer_hi": "बर्लिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is the highest mountain in Africa?",
    "question_hi": "अफ्रीका का सबसे ऊँचा पर्वत कौन सा है?",
    "options_en": ["Mount Kenya", "Mount Kilimanjaro", "Mount Stanley", "Mount Meru"],
    "options_hi": ["माउंट केन्या", "माउंट किलिमंजारो", "माउंट स्टैनली", "माउंट मेरु"],
    "answer_en": "Mount Kilimanjaro",
    "answer_hi": "माउंट किलिमंजारो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the capital of Argentina?",
    "question_hi": "अर्जेंटीना की राजधानी क्या है?",
    "options_en": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
    "options_hi": ["ब्यूनस आयर्स", "कोर्डोबा", "रोसारियो", "मेन्डोज़ा"],
    "answer_en": "Buenos Aires",
    "answer_hi": "ब्यूनस आयर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is the longest river in Africa?",
    "question_hi": "अफ्रीका की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Congo River", "Nile River", "Niger River", "Zambezi River"],
    "options_hi": ["कांगो नदी", "नील नदी", "नाइजर नदी", "जाम्बेजी नदी"],
    "answer_en": "Nile River",
    "answer_hi": "नील नदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the capital of Mexico?",
    "question_hi": "मेक्सिको की राजधानी क्या है?",
    "options_en": ["Guadalajara", "Monterrey", "Mexico City", "Puebla"],
    "options_hi": ["ग्वाडलाजारा", "मोंटेरे", "मेक्सिको सिटी", "प्यूबला"],
    "answer_en": "Mexico City",
    "answer_hi": "मेक्सिको सिटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which is the largest island in the Mediterranean Sea?",
    "question_hi": "भूमध्य सागर का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Sicily", "Sardinia", "Cyprus", "Crete"],
    "options_hi": ["सिसिली", "सार्डिनिया", "साइप्रस", "क्रीट"],
    "answer_en": "Sicily",
    "answer_hi": "सिसिली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the capital of Spain?",
    "question_hi": "स्पेन की राजधानी क्या है?",
    "options_en": ["Barcelona", "Madrid", "Valencia", "Seville"],
    "options_hi": ["बार्सिलोना", "मैड्रिड", "वालेंसिया", "सेविले"],
    "answer_en": "Madrid",
    "answer_hi": "मैड्रिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the largest freshwater lake in the world?",
    "question_hi": "दुनिया की सबसे बड़ी मीठे पानी की झील कौन सी है?",
    "options_en": ["Lake Superior", "Lake Victoria", "Lake Huron", "Lake Michigan"],
    "options_hi": ["लेक सुपीरियर", "लेक विक्टोरिया", "लेक ह्यूरॉन", "लेक मिशिगन"],
    "answer_en": "Lake Superior",
    "answer_hi": "लेक सुपीरियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the capital of Turkey?",
    "question_hi": "तुर्की की राजधानी क्या है?",
    "options_en": ["Istanbul", "Ankara", "Izmir", "Bursa"],
    "options_hi": ["इस्तांबुल", "अंकारा", "इज़मिर", "बुर्सा"],
    "answer_en": "Ankara",
    "answer_hi": "अंकारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is the largest gulf in the world?",
    "question_hi": "दुनिया की सबसे बड़ी खाड़ी कौन सी है?",
    "options_en": ["Gulf of Mexico", "Persian Gulf", "Gulf of Aden", "Gulf of Guinea"],
    "options_hi": ["मेक्सिको की खाड़ी", "फारस की खाड़ी", "एडन की खाड़ी", "गिनी की खाड़ी"],
    "answer_en": "Gulf of Mexico",
    "answer_hi": "मेक्सिको की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the capital of Pakistan?",
    "question_hi": "पाकिस्तान की राजधानी क्या है?",
    "options_en": ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
    "options_hi": ["कराची", "लाहौर", "इस्लामाबाद", "रावलपिंडी"],
    "answer_en": "Islamabad",
    "answer_hi": "इस्लामाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which is the largest delta in the world?",
    "question_hi": "दुनिया का सबसे बड़ा डेल्टा कौन सा है?",
    "options_en": ["Amazon Delta", "Nile Delta", "Ganges-Brahmaputra Delta", "Mekong Delta"],
    "options_hi": ["अमेज़न डेल्टा", "नील डेल्टा", "गंगा-ब्रह्मपुत्र डेल्टा", "मेकोंग डेल्टा"],
    "answer_en": "Ganges-Brahmaputra Delta",
    "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the capital of Bangladesh?",
    "question_hi": "बांग्लादेश की राजधानी क्या है?",
    "options_en": ["Chittagong", "Dhaka", "Khulna", "Rajshahi"],
    "options_hi": ["चटगाँव", "ढाका", "खुलना", "राजशाही"],
    "answer_en": "Dhaka",
    "answer_hi": "ढाका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is the largest peninsula in the world?",
    "question_hi": "दुनिया का सबसे बड़ा प्रायद्वीप कौन सा है?",
    "options_en": ["Arabian Peninsula", "Indian Peninsula", "Scandinavian Peninsula", "Iberian Peninsula"],
    "options_hi": ["अरब प्रायद्वीप", "भारतीय प्रायद्वीप", "स्कैंडिनेवियाई प्रायद्वीप", "इबेरियन प्रायद्वीप"],
    "answer_en": "Arabian Peninsula",
    "answer_hi": "अरब प्रायद्वीप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the capital of Sri Lanka?",
    "question_hi": "श्रीलंका की राजधानी क्या है?",
    "options_en": ["Colombo", "Kandy", "Sri Jayawardenepura Kotte", "Galle"],
    "options_hi": ["कोलंबो", "कैंडी", "श्री जयवर्धनेपुरा कोट्टे", "गाल"],
    "answer_en": "Sri Jayawardenepura Kotte",
    "answer_hi": "श्री जयवर्धनेपुरा कोट्टे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is the largest coral reef system?",
    "question_hi": "सबसे बड़ी प्रवाल भित्ति प्रणाली कौन सी है?",
    "options_en": ["Great Barrier Reef", "Mesoamerican Barrier Reef", "New Caledonia Barrier Reef", "Florida Reef"],
    "options_hi": ["ग्रेट बैरियर रीफ", "मेसोअमेरिकन बैरियर रीफ", "न्यू कैलेडोनिया बैरियर रीफ", "फ्लोरिडा रीफ"],
    "answer_en": "Great Barrier Reef",
    "answer_hi": "ग्रेट बैरियर रीफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the capital of Nepal?",
    "question_hi": "नेपाल की राजधानी क्या है?",
    "options_en": ["Pokhara", "Kathmandu", "Biratnagar", "Lalitpur"],
    "options_hi": ["पोखरा", "काठमांडू", "बिराटनगर", "ललितपुर"],
    "answer_en": "Kathmandu",
    "answer_hi": "काठमांडू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which is the largest bay in the world?",
    "question_hi": "दुनिया की सबसे बड़ी खाड़ी कौन सी है?",
    "options_en": ["Bay of Bengal", "Hudson Bay", "Bay of Biscay", "Chesapeake Bay"],
    "options_hi": ["बंगाल की खाड़ी", "हडसन बे", "बिस्के की खाड़ी", "चेसापीक खाड़ी"],
    "answer_en": "Bay of Bengal",
    "answer_hi": "बंगाल की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the capital of Afghanistan?",
    "question_hi": "अफगानिस्तान की राजधानी क्या है?",
    "options_en": ["Kandahar", "Kabul", "Herat", "Mazar-i-Sharif"],
    "options_hi": ["कंधार", "काबुल", "हेरात", "मज़ार-ए-शरीफ़"],
    "answer_en": "Kabul",
    "answer_hi": "काबुल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is the largest river island in the world?",
    "question_hi": "दुनिया का सबसे बड़ा नदी द्वीप कौन सा है?",
    "options_en": ["Majuli", "Marajó", "Bananal Island", "River Island"],
    "options_hi": ["माजुली", "मराजो", "बनानल द्वीप", "रिवर आइलैंड"],
    "answer_en": "Majuli",
    "answer_hi": "माजुली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the capital of Iran?",
    "question_hi": "ईरान की राजधानी क्या है?",
    "options_en": ["Tehran", "Mashhad", "Isfahan", "Shiraz"],
    "options_hi": ["तेहरान", "मशहद", "इस्फ़हान", "शिराज़"],
    "answer_en": "Tehran",
    "answer_hi": "तेहरान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is the largest saltwater lake in India?",
    "question_hi": "भारत की सबसे बड़ी खारे पानी की झील कौन सी है?",
    "options_en": ["Chilika Lake", "Sambhar Lake", "Pulicat Lake", "Wular Lake"],
    "options_hi": ["चिल्का झील", "सांभर झील", "पुलीकट झील", "वुलर झील"],
    "answer_en": "Chilika Lake",
    "answer_hi": "चिल्का झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the capital of Iraq?",
    "question_hi": "इराक की राजधानी क्या है?",
    "options_en": ["Basra", "Baghdad", "Mosul", "Erbil"],
    "options_hi": ["बसरा", "बगदाद", "मोसुल", "अर्बिल"],
    "answer_en": "Baghdad",
    "answer_hi": "बगदाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which is the largest waterfall in the world?",
    "question_hi": "दुनिया का सबसे बड़ा झरना कौन सा है?",
    "options_en": ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
    "options_hi": ["नायाग्रा फॉल्स", "विक्टोरिया फॉल्स", "एंजेल फॉल्स", "इगाजू फॉल्स"],
    "answer_en": "Angel Falls",
    "answer_hi": "एंजेल फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the capital of Saudi Arabia?",
    "question_hi": "सऊदी अरब की राजधानी क्या है?",
    "options_en": ["Riyadh", "Jeddah", "Mecca", "Medina"],
    "options_hi": ["रियाद", "जेद्दा", "मक्का", "मदीना"],
    "answer_en": "Riyadh",
    "answer_hi": "रियाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is the largest hot desert in the world?",
    "question_hi": "दुनिया का सबसे बड़ा गर्म रेगिस्तान कौन सा है?",
    "options_en": ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
    "options_hi": ["सहारा रेगिस्तान", "अरब रेगिस्तान", "गोबी रेगिस्तान", "कालाहारी रेगिस्तान"],
    "answer_en": "Sahara Desert",
    "answer_hi": "सहारा रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is the capital of United Arab Emirates?",
    "question_hi": "संयुक्त अरब अमीरात की राजधानी क्या है?",
    "options_en": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    "options_hi": ["दुबई", "अबू धाबी", "शारजाह", "अजमान"],
    "answer_en": "Abu Dhabi",
    "answer_hi": "अबू धाबी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which is the longest mountain range in the world?",
    "question_hi": "दुनिया की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
    "options_en": ["Andes", "Himalayas", "Rocky Mountains", "Great Dividing Range"],
    "options_hi": ["एंडीज", "हिमालय", "रॉकी पर्वत", "ग्रेट डिवाइडिंग रेंज"],
    "answer_en": "Andes",
    "answer_hi": "एंडीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the capital of Vietnam?",
    "question_hi": "वियतनाम की राजधानी क्या है?",
    "options_en": ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hai Phong"],
    "options_hi": ["हो ची मिन्ह सिटी", "हनोई", "दा नांग", "हाई फोंग"],
    "answer_en": "Hanoi",
    "answer_hi": "हनोई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which is the largest archipelago in the world?",
    "question_hi": "दुनिया का सबसे बड़ा द्वीपसमूह कौन सा है?",
    "options_en": ["Philippines", "Indonesia", "Japan", "Malaysia"],
    "options_hi": ["फिलीपींस", "इंडोनेशिया", "जापान", "मलेशिया"],
    "answer_en": "Indonesia",
    "answer_hi": "इंडोनेशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the capital of Thailand?",
    "question_hi": "थाईलैंड की राजधानी क्या है?",
    "options_en": ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
    "options_hi": ["बैंकाक", "चियांग माई", "फुकेत", "पटाया"],
    "answer_en": "Bangkok",
    "answer_hi": "बैंकाक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which is the largest river by discharge volume?",
    "question_hi": "डिस्चार्ज वॉल्यूम के हिसाब से सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Amazon River", "Congo River", "Yangtze River", "Mississippi River"],
    "options_hi": ["अमेज़न नदी", "कांगो नदी", "यांग्त्ज़ी नदी", "मिसिसिपी नदी"],
    "answer_en": "Amazon River",
    "answer_hi": "अमेज़न नदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the capital of Malaysia?",
    "question_hi": "मलेशिया की राजधानी क्या है?",
    "options_en": ["Kuala Lumpur", "Putrajaya", "Penang", "Johor Bahru"],
    "options_hi": ["कुआलालंपुर", "पुत्रजया", "पेनांग", "जोहोर बाहरू"],
    "answer_en": "Kuala Lumpur",
    "answer_hi": "कुआलालंपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which is the deepest lake in the world?",
    "question_hi": "दुनिया की सबसे गहरी झील कौन सी है?",
    "options_en": ["Lake Baikal", "Lake Tanganyika", "Caspian Sea", "Lake Superior"],
    "options_hi": ["लेक बैकाल", "लेक टांगान्यिका", "कैस्पियन सागर", "लेक सुपीरियर"],
    "answer_en": "Lake Baikal",
    "answer_hi": "लेक बैकाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the capital of Philippines?",
    "question_hi": "फिलीपींस की राजधानी क्या है?",
    "options_en": ["Manila", "Quezon City", "Cebu City", "Davao City"],
    "options_hi": ["मनीला", "क्वेज़ोन सिटी", "सेबू सिटी", "दावाओ सिटी"],
    "answer_en": "Manila",
    "answer_hi": "मनीला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which is the largest country in South America?",
    "question_hi": "दक्षिण अमेरिका का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Argentina", "Brazil", "Peru", "Colombia"],
    "options_hi": ["अर्जेंटीना", "ब्राजील", "पेरू", "कोलंबिया"],
    "answer_en": "Brazil",
    "answer_hi": "ब्राजील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the capital of South Korea?",
    "question_hi": "दक्षिण कोरिया की राजधानी क्या है?",
    "options_en": ["Seoul", "Busan", "Incheon", "Daegu"],
    "options_hi": ["सियोल", "बुसान", "इंचियोन", "डेगू"],
    "answer_en": "Seoul",
    "answer_hi": "सियोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which is the largest island in the Caribbean?",
    "question_hi": "कैरेबियन का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Jamaica", "Cuba", "Hispaniola", "Puerto Rico"],
    "options_hi": ["जमैका", "क्यूबा", "हिस्पानियोला", "प्यूर्टो रिको"],
    "answer_en": "Cuba",
    "answer_hi": "क्यूबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the capital of Indonesia?",
    "question_hi": "इंडोनेशिया की राजधानी क्या है?",
    "options_en": ["Jakarta", "Surabaya", "Bandung", "Medan"],
    "options_hi": ["जकार्ता", "सुराबाया", "बांडुंग", "मेदान"],
    "answer_en": "Jakarta",
    "answer_hi": "जकार्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which is the largest sea in the world?",
    "question_hi": "दुनिया का सबसे बड़ा समुद्र कौन सा है?",
    "options_en": ["Mediterranean Sea", "Caribbean Sea", "South China Sea", "Philippine Sea"],
    "options_hi": ["भूमध्य सागर", "कैरेबियन सागर", "दक्षिण चीन सागर", "फिलीपीन सागर"],
    "answer_en": "Philippine Sea",
    "answer_hi": "फिलीपीन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the capital of Ukraine?",
    "question_hi": "यूक्रेन की राजधानी क्या है?",
    "options_en": ["Kyiv", "Kharkiv", "Odesa", "Dnipro"],
    "options_hi": ["कीव", "खारकिव", "ओडेसा", "ड्निप्रो"],
    "answer_en": "Kyiv",
    "answer_hi": "कीव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which is the largest river basin in the world?",
    "question_hi": "दुनिया का सबसे बड़ा नदी बेसिन कौन सा है?",
    "options_en": ["Amazon Basin", "Congo Basin", "Mississippi Basin", "Nile Basin"],
    "options_hi": ["अमेज़न बेसिन", "कांगो बेसिन", "मिसिसिपी बेसिन", "नील बेसिन"],
    "answer_en": "Amazon Basin",
    "answer_hi": "अमेज़न बेसिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the capital of Poland?",
    "question_hi": "पोलैंड की राजधानी क्या है?",
    "options_en": ["Warsaw", "Kraków", "Łódź", "Wrocław"],
    "options_hi": ["वारसॉ", "क्राको", "लॉड्ज़", "व्रोकला"],
    "answer_en": "Warsaw",
    "answer_hi": "वारसॉ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which is the largest country in Africa?",
    "question_hi": "अफ्रीका का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Sudan", "Algeria", "Democratic Republic of Congo", "Libya"],
    "options_hi": ["सूडान", "अल्जीरिया", "डेमोक्रेटिक रिपब्लिक ऑफ कांगो", "लीबिया"],
    "answer_en": "Algeria",
    "answer_hi": "अल्जीरिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the capital of Netherlands?",
    "question_hi": "नीदरलैंड की राजधानी क्या है?",
    "options_en": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
    "options_hi": ["एम्स्टर्डम", "रॉटरडैम", "द हेग", "यूट्रेच"],
    "answer_en": "Amsterdam",
    "answer_hi": "एम्स्टर्डम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which is the longest beach in the world?",
    "question_hi": "दुनिया का सबसे लंबा समुद्र तट कौन सा है?",
    "options_en": ["Cox's Bazar", "Praia do Cassino", "Ninety Mile Beach", "Virginia Beach"],
    "options_hi": ["कोक्स बाजार", "प्राया डो कैसिनो", "नाइंटी माइल बीच", "वर्जीनिया बीच"],
    "answer_en": "Praia do Cassino",
    "answer_hi": "प्राया डो कैसिनो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the capital of Switzerland?",
    "question_hi": "स्विट्जरलैंड की राजधानी क्या है?",
    "options_en": ["Zurich", "Geneva", "Bern", "Basel"],
    "options_hi": ["ज़्यूरिख", "जेनेवा", "बर्न", "बासेल"],
    "answer_en": "Bern",
    "answer_hi": "बर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which is the largest glacier in the world?",
    "question_hi": "दुनिया का सबसे बड़ा ग्लेशियर कौन सा है?",
    "options_en": ["Lambert Glacier", "Siachen Glacier", "Perito Moreno Glacier", "Vatnajökull"],
    "options_hi": ["लैम्बर्ट ग्लेशियर", "सियाचिन ग्लेशियर", "पेरिटो मोरेनो ग्लेशियर", "वत्नाजोकुल"],
    "answer_en": "Lambert Glacier",
    "answer_hi": "लैम्बर्ट ग्लेशियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the capital of Sweden?",
    "question_hi": "स्वीडन की राजधानी क्या है?",
    "options_en": ["Stockholm", "Gothenburg", "Malmö", "Uppsala"],
    "options_hi": ["स्टॉकहोम", "गोथेनबर्ग", "माल्मो", "उप्प्साला"],
    "answer_en": "Stockholm",
    "answer_hi": "स्टॉकहोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which is the largest plateau in the world?",
    "question_hi": "दुनिया का सबसे बड़ा पठार कौन सा है?",
    "options_en": ["Tibetan Plateau", "Colorado Plateau", "Deccan Plateau", "Anatolian Plateau"],
    "options_hi": ["तिब्बती पठार", "कोलोराडो पठार", "दक्कन पठार", "अनातोलियन पठार"],
    "answer_en": "Tibetan Plateau",
    "answer_hi": "तिब्बती पठार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the capital of Norway?",
    "question_hi": "नॉर्वे की राजधानी क्या है?",
    "options_en": ["Oslo", "Bergen", "Trondheim", "Stavanger"],
    "options_hi": ["ओस्लो", "बर्गेन", "ट्रॉनहैम", "स्टैवेंगर"],
    "answer_en": "Oslo",
    "answer_hi": "ओस्लो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which is the largest cave in the world?",
    "question_hi": "दुनिया की सबसे बड़ी गुफा कौन सी है?",
    "options_en": ["Son Doong Cave", "Mammoth Cave", "Krubera Cave", "Clearwater Cave"],
    "options_hi": ["सोन डूंग गुफा", "मैमथ गुफा", "क्रुबेरा गुफा", "क्लियरवाटर गुफा"],
    "answer_en": "Son Doong Cave",
    "answer_hi": "सोन डूंग गुफा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the capital of Denmark?",
    "question_hi": "डेनमार्क की राजधानी क्या है?",
    "options_en": ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
    "options_hi": ["कोपेनहेगन", "आरहुस", "ओडेंस", "आलबोर्ग"],
    "answer_en": "Copenhagen",
    "answer_hi": "कोपेनहेगन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which is the largest island in Europe?",
    "question_hi": "यूरोप का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Great Britain", "Iceland", "Ireland", "Sicily"],
    "options_hi": ["ग्रेट ब्रिटेन", "आइसलैंड", "आयरलैंड", "सिसिली"],
    "answer_en": "Great Britain",
    "answer_hi": "ग्रेट ब्रिटेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the capital of Finland?",
    "question_hi": "फिनलैंड की राजधानी क्या है?",
    "options_en": ["Helsinki", "Espoo", "Tampere", "Vantaa"],
    "options_hi": ["हेलसिंकी", "एस्पू", "ताम्पेरे", "वंताआ"],
    "answer_en": "Helsinki",
    "answer_hi": "हेलसिंकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which is the largest volcano in the world?",
    "question_hi": "दुनिया का सबसे बड़ा ज्वालामुखी कौन सा है?",
    "options_en": ["Mauna Loa", "Mount Etna", "Mount Fuji", "Krakatoa"],
    "options_hi": ["मौना लोआ", "माउंट एटना", "माउंट फ़ूजी", "क्राकाटोआ"],
    "answer_en": "Mauna Loa",
    "answer_hi": "मौना लोआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the capital of Portugal?",
    "question_hi": "पुर्तगाल की राजधानी क्या है?",
    "options_en": ["Lisbon", "Porto", "Braga", "Coimbra"],
    "options_hi": ["लिस्बन", "पोर्टो", "ब्रागा", "कोइम्ब्रा"],
    "answer_en": "Lisbon",
    "answer_hi": "लिस्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which is the largest country in Oceania?",
    "question_hi": "ओशिनिया का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Australia", "New Zealand", "Papua New Guinea", "Fiji"],
    "options_hi": ["ऑस्ट्रेलिया", "न्यूजीलैंड", "पापुआ न्यू गिनी", "फिजी"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the capital of Greece?",
    "question_hi": "ग्रीस की राजधानी क्या है?",
    "options_en": ["Athens", "Thessaloniki", "Patras", "Heraklion"],
    "options_hi": ["एथेंस", "थिसलोनिकी", "पेट्रास", "हेराक्लियन"],
    "answer_en": "Athens",
    "answer_hi": "एथेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which is the largest river in Europe?",
    "question_hi": "यूरोप की सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Danube", "Volga", "Rhine", "Thames"],
    "options_hi": ["डेन्यूब", "वोल्गा", "राइन", "टेम्स"],
    "answer_en": "Volga",
    "answer_hi": "वोल्गा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the capital of Austria?",
    "question_hi": "ऑस्ट्रिया की राजधानी क्या है?",
    "options_en": ["Vienna", "Graz", "Linz", "Salzburg"],
    "options_hi": ["वियना", "ग्राज़", "लिंज़", "साल्ज़बर्ग"],
    "answer_en": "Vienna",
    "answer_hi": "वियना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which is the largest island in Asia?",
    "question_hi": "एशिया का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Borneo", "Sumatra", "Java", "Honshu"],
    "options_hi": ["बोर्नियो", "सुमात्रा", "जावा", "होंशू"],
    "answer_en": "Borneo",
    "answer_hi": "बोर्नियो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the capital of Belgium?",
    "question_hi": "बेल्जियम की राजधानी क्या है?",
    "options_en": ["Brussels", "Antwerp", "Ghent", "Bruges"],
    "options_hi": ["ब्रुसेल्स", "एंटवर्प", "गेंट", "ब्रुग्स"],
    "answer_en": "Brussels",
    "answer_hi": "ब्रुसेल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which is the largest waterfall by width?",
    "question_hi": "चौड़ाई के हिसाब से सबसे बड़ा झरना कौन सा है?",
    "options_en": ["Victoria Falls", "Niagara Falls", "Iguazu Falls", "Angel Falls"],
    "options_hi": ["विक्टोरिया फॉल्स", "नायाग्रा फॉल्स", "इगाजू फॉल्स", "एंजेल फॉल्स"],
    "answer_en": "Iguazu Falls",
    "answer_hi": "इगाजू फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the capital of Czech Republic?",
    "question_hi": "चेक गणराज्य की राजधानी क्या है?",
    "options_en": ["Prague", "Brno", "Ostrava", "Plzeň"],
    "options_hi": ["प्राग", "ब्रनो", "ओस्त्रावा", "प्लज़ेन"],
    "answer_en": "Prague",
    "answer_hi": "प्राग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which is the largest island in Africa?",
    "question_hi": "अफ्रीका का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Madagascar", "Seychelles", "Mauritius", "Zanzibar"],
    "options_hi": ["मेडागास्कर", "सेशेल्स", "मॉरीशस", "ज़ांज़ीबार"],
    "answer_en": "Madagascar",
    "answer_hi": "मेडागास्कर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the capital of Hungary?",
    "question_hi": "हंगरी की राजधानी क्या है?",
    "options_en": ["Budapest", "Debrecen", "Szeged", "Miskolc"],
    "options_hi": ["बुडापेस्ट", "डेब्रेसेन", "सेगेड", "मिस्कोल्क"],
    "answer_en": "Budapest",
    "answer_hi": "बुडापेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which is the largest lake in Africa?",
    "question_hi": "अफ्रीका की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Turkana"],
    "options_hi": ["लेक विक्टोरिया", "लेक टांगान्यिका", "लेक मलावी", "लेक तुर्काना"],
    "answer_en": "Lake Victoria",
    "answer_hi": "लेक विक्टोरिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the capital of Romania?",
    "question_hi": "रोमानिया की राजधानी क्या है?",
    "options_en": ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași"],
    "options_hi": ["बुखारेस्ट", "क्लुज-नेपोका", "तिमिसोआरा", "इयासी"],
    "answer_en": "Bucharest",
    "answer_hi": "बुखारेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which is the largest river in North America?",
    "question_hi": "उत्तरी अमेरिका की सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Mississippi River", "Missouri River", "Yukon River", "Rio Grande"],
    "options_hi": ["मिसिसिपी नदी", "मिसौरी नदी", "युकॉन नदी", "रियो ग्रांडे"],
    "answer_en": "Mississippi River",
    "answer_hi": "मिसिसिपी नदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the capital of Bulgaria?",
    "question_hi": "बुल्गारिया की राजधानी क्या है?",
    "options_en": ["Sofia", "Plovdiv", "Varna", "Burgas"],
    "options_hi": ["सोफिया", "प्लोवदिव", "वर्ना", "बुर्गास"],
    "answer_en": "Sofia",
    "answer_hi": "सोफिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which is the largest country in Central America?",
    "question_hi": "मध्य अमेरिका का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Mexico", "Guatemala", "Nicaragua", "Panama"],
    "options_hi": ["मेक्सिको", "ग्वाटेमाला", "निकारागुआ", "पनामा"],
    "answer_en": "Mexico",
    "answer_hi": "मेक्सिको",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the capital of Croatia?",
    "question_hi": "क्रोएशिया की राजधानी क्या है?",
    "options_en": ["Zagreb", "Split", "Rijeka", "Osijek"],
    "options_hi": ["ज़ागरेब", "स्प्लिट", "रिजेका", "ओसिजेक"],
    "answer_en": "Zagreb",
    "answer_hi": "ज़ागरेब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which is the largest island in the Atlantic Ocean?",
    "question_hi": "अटलांटिक महासागर का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Greenland", "Great Britain", "Iceland", "Newfoundland"],
    "options_hi": ["ग्रीनलैंड", "ग्रेट ब्रिटेन", "आइसलैंड", "न्यूफाउंडलैंड"],
    "answer_en": "Greenland",
    "answer_hi": "ग्रीनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the capital of Serbia?",
    "question_hi": "सर्बिया की राजधानी क्या है?",
    "options_en": ["Belgrade", "Novi Sad", "Niš", "Kragujevac"],
    "options_hi": ["बेलग्रेड", "नोवी साद", "निश", "क्रागुजेवैक"],
    "answer_en": "Belgrade",
    "answer_hi": "बेलग्रेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which is the largest river in Australia?",
    "question_hi": "ऑस्ट्रेलिया की सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Murray River", "Darling River", "Murrumbidgee River", "Lachlan River"],
    "options_hi": ["मरे नदी", "डार्लिंग नदी", "मुरुम्बिजी नदी", "लैकलन नदी"],
    "answer_en": "Murray River",
    "answer_hi": "मरे नदी",
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