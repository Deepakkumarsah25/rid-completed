const questions = [
  {
    "num": 1,
    "question_en": "What is the national animal of Sri Lanka?",
    "question_hi": "श्रीलंका का राष्ट्रीय पशु क्या है?",
    "options_en": ["Asian Elephant", "Sri Lankan Leopard", "Water Buffalo", "Sloth Bear"],
    "options_hi": ["एशियाई हाथी", "श्रीलंकाई तेंदुआ", "जल भैंस", "स्लोथ भालू"],
    "answer_en": "Sri Lankan Leopard",
    "answer_hi": "श्रीलंकाई तेंदुआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the national bird of Nepal?",
    "question_hi": "नेपाल का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Himalayan Monal", "Peacock", "Spiny Babbler", "Sarus Crane"],
    "options_hi": ["हिमालयन मोनाल", "मोर", "काँटेदार बब्बलर", "सारस क्रेन"],
    "answer_en": "Himalayan Monal",
    "answer_hi": "हिमालयन मोनाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the national flower of Japan?",
    "question_hi": "जापान का राष्ट्रीय फूल क्या है?",
    "options_en": ["Cherry Blossom", "Chrysanthemum", "Lotus", "Rose"],
    "options_hi": ["चेरी ब्लॉसम", "क्रिसेंथेमम", "कमल", "गुलाब"],
    "answer_en": "Cherry Blossom",
    "answer_hi": "चेरी ब्लॉसम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the national tree of Canada?",
    "question_hi": "कनाडा का राष्ट्रीय वृक्ष क्या है?",
    "options_en": ["Maple Tree", "Oak Tree", "Pine Tree", "Redwood"],
    "options_hi": ["मेपल वृक्ष", "ओक वृक्ष", "पाइन वृक्ष", "रेडवुड"],
    "answer_en": "Maple Tree",
    "answer_hi": "मेपल वृक्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the national fruit of Bangladesh?",
    "question_hi": "बांग्लादेश का राष्ट्रीय फल क्या है?",
    "options_en": ["Mango", "Jackfruit", "Litchi", "Guava"],
    "options_hi": ["आम", "कटहल", "लीची", "अमरूद"],
    "answer_en": "Jackfruit",
    "answer_hi": "कटहल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the national aquatic animal of Pakistan?",
    "question_hi": "पाकिस्तान का राष्ट्रीय जलीय जीव क्या है?",
    "options_en": ["Indus River Dolphin", "Green Turtle", "Mugger Crocodile", "Mahseer Fish"],
    "options_hi": ["सिंधु नदी डॉल्फिन", "हरा कछुआ", "मगरमच्छ", "महासीर मछली"],
    "answer_en": "Indus River Dolphin",
    "answer_hi": "सिंधु नदी डॉल्फिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the national river of Egypt?",
    "question_hi": "मिस्र की राष्ट्रीय नदी क्या है?",
    "options_en": ["Nile", "Tigris", "Euphrates", "Jordan"],
    "options_hi": ["नील", "टाइग्रिस", "यूफ्रेट्स", "जॉर्डन"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the national calendar of Afghanistan?",
    "question_hi": "अफगानिस्तान का राष्ट्रीय कैलेंडर क्या है?",
    "options_en": ["Solar Hijri", "Lunar Hijri", "Gregorian", "Persian"],
    "options_hi": ["सौर हिजरी", "चंद्र हिजरी", "ग्रेगोरियन", "फारसी"],
    "answer_en": "Solar Hijri",
    "answer_hi": "सौर हिजरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the national emblem of Russia?",
    "question_hi": "रूस का राष्ट्रीय प्रतीक क्या है?",
    "options_en": ["Double-headed Eagle", "Bear", "Hammer and Sickle", "St. George Cross"],
    "options_hi": ["दो-सिर वाला गरुड़", "भालू", "हथौड़ा और सिकल", "सेंट जॉर्ज क्रॉस"],
    "answer_en": "Double-headed Eagle",
    "answer_hi": "दो-सिर वाला गरुड़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the national flag of China called?",
    "question_hi": "चीन के राष्ट्रीय ध्वज को क्या कहा जाता है?",
    "options_en": ["Five-star Red Flag", "Red Banner", "Dragon Flag", "People's Flag"],
    "options_hi": ["पाँच-तारा लाल झंडा", "लाल बैनर", "ड्रैगन झंडा", "लोगों का झंडा"],
    "answer_en": "Five-star Red Flag",
    "answer_hi": "पाँच-तारा लाल झंडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the national anthem of the United States?",
    "question_hi": "संयुक्त राज्य अमेरिका का राष्ट्रीय गान क्या है?",
    "options_en": ["The Star-Spangled Banner", "America the Beautiful", "God Bless America", "My Country 'Tis of Thee"],
    "options_hi": ["द स्टार-स्पैंगल्ड बैनर", "अमेरिका द ब्यूटीफुल", "गॉड ब्लेस अमेरिका", "माई कंट्री 'टिस ऑफ थी"],
    "answer_en": "The Star-Spangled Banner",
    "answer_hi": "द स्टार-स्पैंगल्ड बैनर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the national song of Australia?",
    "question_hi": "ऑस्ट्रेलिया का राष्ट्रीय गीत क्या है?",
    "options_en": ["Advance Australia Fair", "Waltzing Matilda", "God Save the Queen", "I Am Australian"],
    "options_hi": ["एडवांस ऑस्ट्रेलिया फेयर", "वाल्ट्जिंग मैटिल्डा", "गॉड सेव द क्वीन", "आई एम ऑस्ट्रेलियन"],
    "answer_en": "Advance Australia Fair",
    "answer_hi": "एडवांस ऑस्ट्रेलिया फेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the national currency of Japan?",
    "question_hi": "जापान की राष्ट्रीय मुद्रा क्या है?",
    "options_en": ["Yen", "Won", "Yuan", "Dollar"],
    "options_hi": ["येन", "वॉन", "युआन", "डॉलर"],
    "answer_en": "Yen",
    "answer_hi": "येन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the national reptile of Mexico?",
    "question_hi": "मैक्सिको का राष्ट्रीय सरीसृप क्या है?",
    "options_en": ["Rattlesnake", "Iguana", "Crocodile", "Turtle"],
    "options_hi": ["रैटलस्नेक", "इगुआना", "मगरमच्छ", "कछुआ"],
    "answer_en": "Rattlesnake",
    "answer_hi": "रैटलस्नेक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the national heritage animal of Thailand?",
    "question_hi": "थाईलैंड का राष्ट्रीय विरासत पशु क्या है?",
    "options_en": ["Asian Elephant", "Tiger", "Gibbon", "Hornbill"],
    "options_hi": ["एशियाई हाथी", "बाघ", "गिब्बन", "हॉर्नबिल"],
    "answer_en": "Asian Elephant",
    "answer_hi": "एशियाई हाथी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the national microbe of South Korea?",
    "question_hi": "दक्षिण कोरिया का राष्ट्रीय सूक्ष्मजीव क्या है?",
    "options_en": ["Kimchi Lactobacillus", "Bacillus subtilis", "E. coli", "Yeast"],
    "options_hi": ["किमची लैक्टोबैसिलस", "बैसिलस सबटिलिस", "ई. कोलाई", "यीस्ट"],
    "answer_en": "Kimchi Lactobacillus",
    "answer_hi": "किमची लैक्टोबैसिलस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the national vegetable of England?",
    "question_hi": "इंग्लैंड की राष्ट्रीय सब्जी क्या है?",
    "options_en": ["Potato", "Tomato", "Leek", "Cabbage"],
    "options_hi": ["आलू", "टमाटर", "लीक", "गोभी"],
    "answer_en": "Leek",
    "answer_hi": "लीक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the national monument of France?",
    "question_hi": "फ्रांस का राष्ट्रीय स्मारक क्या है?",
    "options_en": ["Eiffel Tower", "Arc de Triomphe", "Notre-Dame", "Louvre"],
    "options_hi": ["एफिल टावर", "आर्क डी ट्रायंफ", "नोट्रे-डेम", "लौवर"],
    "answer_en": "Eiffel Tower",
    "answer_hi": "एफिल टावर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the national library of Germany?",
    "question_hi": "जर्मनी का राष्ट्रीय पुस्तकालय क्या है?",
    "options_en": ["German National Library", "Berlin State Library", "Munich Library", "Frankfurt Library"],
    "options_hi": ["जर्मन राष्ट्रीय पुस्तकालय", "बर्लिन राज्य पुस्तकालय", "म्यूनिख पुस्तकालय", "फ्रैंकफर्ट पुस्तकालय"],
    "answer_en": "German National Library",
    "answer_hi": "जर्मन राष्ट्रीय पुस्तकालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the national museum of Italy?",
    "question_hi": "इटली का राष्ट्रीय संग्रहालय क्या है?",
    "options_en": ["National Roman Museum", "Uffizi Gallery", "Vatican Museums", "Borghese Gallery"],
    "options_hi": ["राष्ट्रीय रोमन संग्रहालय", "उफीजी गैलरी", "वेटिकन संग्रहालय", "बोर्गेस गैलरी"],
    "answer_en": "National Roman Museum",
    "answer_hi": "राष्ट्रीय रोमन संग्रहालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the national pledge of Singapore?",
    "question_hi": "सिंगापुर का राष्ट्रीय प्रतिज्ञा क्या है?",
    "options_en": ["Singapore National Pledge", "Oath of Allegiance", "Citizen's Vow", "Loyalty Promise"],
    "options_hi": ["सिंगापुर राष्ट्रीय प्रतिज्ञा", "निष्ठा की शपथ", "नागरिक की प्रतिज्ञा", "वफादारी का वादा"],
    "answer_en": "Singapore National Pledge",
    "answer_hi": "सिंगापुर राष्ट्रीय प्रतिज्ञा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the national motto of Brazil?",
    "question_hi": "ब्राजील का राष्ट्रीय आदर्श वाक्य क्या है?",
    "options_en": ["Order and Progress", "Liberty, Equality, Fraternity", "In God We Trust", "Unity in Diversity"],
    "options_hi": ["व्यवस्था और प्रगति", "स्वतंत्रता, समानता, बंधुत्व", "ईश्वर में विश्वास", "विविधता में एकता"],
    "answer_en": "Order and Progress",
    "answer_hi": "व्यवस्था और प्रगति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What appears on the national emblem of Indonesia?",
    "question_hi": "इंडोनेशिया के राष्ट्रीय प्रतीक पर क्या दिखाई देता है?",
    "options_en": ["Garuda", "Komodo Dragon", "Orchid", "Rice and Cotton"],
    "options_hi": ["गरुड़", "कोमोडो ड्रैगन", "ऑर्किड", "चावल और कपास"],
    "answer_en": "Garuda",
    "answer_hi": "गरुड़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "How many stars appear on the flag of the European Union?",
    "question_hi": "यूरोपीय संघ के झंडे पर कितने तारे दिखाई देते हैं?",
    "options_en": ["12", "24", "27", "28"],
    "options_hi": ["12", "24", "27", "28"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What animal is depicted on the national emblem of Albania?",
    "question_hi": "अल्बानिया के राष्ट्रीय प्रतीक पर किस जानवर का चित्रण किया गया है?",
    "options_en": ["Double-headed Eagle", "Lion", "Bear", "Wolf"],
    "options_hi": ["दो-सिर वाला गरुड़", "सिंह", "भालू", "भेड़िया"],
    "answer_en": "Double-headed Eagle",
    "answer_hi": "दो-सिर वाला गरुड़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the national sport of Canada?",
    "question_hi": "कनाडा का राष्ट्रीय खेल क्या है?",
    "options_en": ["Ice Hockey", "Lacrosse", "Basketball", "Baseball"],
    "options_hi": ["आइस हॉकी", "लैक्रोस", "बास्केटबॉल", "बेसबॉल"],
    "answer_en": "Ice Hockey",
    "answer_hi": "आइस हॉकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the national game of England?",
    "question_hi": "इंग्लैंड का राष्ट्रीय खेल क्या है?",
    "options_en": ["Cricket", "Football", "Rugby", "Tennis"],
    "options_hi": ["क्रिकेट", "फुटबॉल", "रग्बी", "टेनिस"],
    "answer_en": "Cricket",
    "answer_hi": "क्रिकेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the national aquatic sport of New Zealand?",
    "question_hi": "न्यूजीलैंड का राष्ट्रीय जलीय खेल क्या है?",
    "options_en": ["Surfing", "Sailing", "Rowing", "Swimming"],
    "options_hi": ["सर्फिंग", "सेलिंग", "नौकायन", "तैराकी"],
    "answer_en": "Surfing",
    "answer_hi": "सर्फिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the national dance of Argentina?",
    "question_hi": "अर्जेंटीना का राष्ट्रीय नृत्य क्या है?",
    "options_en": ["Tango", "Samba", "Flamenco", "Waltz"],
    "options_hi": ["टैंगो", "साम्बा", "फ्लेमेंको", "वाल्ट्ज"],
    "answer_en": "Tango",
    "answer_hi": "टैंगो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the national instrument of Scotland?",
    "question_hi": "स्कॉटलैंड का राष्ट्रीय वाद्ययंत्र क्या है?",
    "options_en": ["Bagpipes", "Harp", "Fiddle", "Accordion"],
    "options_hi": ["बैगपाइप", "वीणा", "फिडल", "अकॉर्डियन"],
    "answer_en": "Bagpipes",
    "answer_hi": "बैगपाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the national language of Israel?",
    "question_hi": "इजराइल की राष्ट्रीय भाषा क्या है?",
    "options_en": ["Hebrew", "Arabic", "English", "Yiddish"],
    "options_hi": ["हिब्रू", "अरबी", "अंग्रेजी", "यिडिश"],
    "answer_en": "Hebrew",
    "answer_hi": "हिब्रू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the national script of Greece?",
    "question_hi": "ग्रीस की राष्ट्रीय लिपि क्या है?",
    "options_en": ["Greek Alphabet", "Latin", "Cyrillic", "Arabic"],
    "options_hi": ["ग्रीक वर्णमाला", "लैटिन", "सिरिलिक", "अरबी"],
    "answer_en": "Greek Alphabet",
    "answer_hi": "ग्रीक वर्णमाला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the national mountain of Tanzania?",
    "question_hi": "तंजानिया का राष्ट्रीय पर्वत क्या है?",
    "options_en": ["Mount Kilimanjaro", "Mount Meru", "Mount Kenya", "Mount Elgon"],
    "options_hi": ["माउंट किलिमंजारो", "माउंट मेरु", "माउंट केन्या", "माउंट एल्गोन"],
    "answer_en": "Mount Kilimanjaro",
    "answer_hi": "माउंट किलिमंजारो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the national fort of Spain?",
    "question_hi": "स्पेन का राष्ट्रीय किला क्या है?",
    "options_en": ["Alhambra", "El Escorial", "Segovia Alcazar", "Toledo Fortress"],
    "options_hi": ["अलहंब्रा", "एल एस्कोरियल", "सेगोविया अलकज़ार", "टोलेडो किला"],
    "answer_en": "Alhambra",
    "answer_hi": "अलहंब्रा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the national dish of Mexico?",
    "question_hi": "मैक्सिको का राष्ट्रीय व्यंजन क्या है?",
    "options_en": ["Mole", "Tacos", "Guacamole", "Enchiladas"],
    "options_hi": ["मोले", "टैकोस", "गुआकामोले", "एन्चिलाडास"],
    "answer_en": "Mole",
    "answer_hi": "मोले",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the national festival of Thailand?",
    "question_hi": "थाईलैंड का राष्ट्रीय त्योहार क्या है?",
    "options_en": ["Songkran", "Loy Krathong", "Royal Ploughing Ceremony", "Makha Bucha"],
    "options_hi": ["सोंगक्रान", "लोई क्राथोंग", "रॉयल प्लाउइंग समारोह", "माखा बुचा"],
    "answer_en": "Songkran",
    "answer_hi": "सोंगक्रान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the national holiday of South Africa?",
    "question_hi": "दक्षिण अफ्रीका का राष्ट्रीय अवकाश क्या है?",
    "options_en": ["Freedom Day", "Heritage Day", "Youth Day", "Reconciliation Day"],
    "options_hi": ["स्वतंत्रता दिवस", "विरासत दिवस", "युवा दिवस", "सुलह दिवस"],
    "answer_en": "Freedom Day",
    "answer_hi": "स्वतंत्रता दिवस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the national march of Turkey?",
    "question_hi": "तुर्की का राष्ट्रीय मार्च क्या है?",
    "options_en": ["İstiklâl Marşı", "Mehter Marşı", "Cumhuriyet Marşı", "Zafer Marşı"],
    "options_hi": ["इस्तिकलाल मार्शी", "मेहतेर मार्शी", "जुम्हुरियत मार्शी", "जफ़र मार्शी"],
    "answer_en": "İstiklâl Marşı",
    "answer_hi": "इस्तिकलाल मार्शी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the national memorial of Vietnam?",
    "question_hi": "वियतनाम का राष्ट्रीय स्मारक क्या है?",
    "options_en": ["Ho Chi Minh Mausoleum", "War Remnants Museum", "Cu Chi Tunnels", "Imperial Citadel"],
    "options_hi": ["हो ची मिन्ह मकबरा", "युद्ध अवशेष संग्रहालय", "कु ची सुरंग", "शाही किला"],
    "answer_en": "Ho Chi Minh Mausoleum",
    "answer_hi": "हो ची मिन्ह मकबरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the national building of Malaysia?",
    "question_hi": "मलेशिया की राष्ट्रीय इमारत क्या है?",
    "options_en": ["Petronas Twin Towers", "Istana Negara", "Sultan Abdul Samad Building", "Menara KL"],
    "options_hi": ["पेट्रोनास ट्विन टावर्स", "इस्ताना नेगारा", "सुल्तान अब्दुल समद भवन", "मेनारा केएल"],
    "answer_en": "Petronas Twin Towers",
    "answer_hi": "पेट्रोनास ट्विन टावर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the national stadium of England?",
    "question_hi": "इंग्लैंड का राष्ट्रीय स्टेडियम क्या है?",
    "options_en": ["Wembley Stadium", "Old Trafford", "Emirates Stadium", "Twickenham"],
    "options_hi": ["वेम्बली स्टेडियम", "ओल्ड ट्रैफर्ड", "एमिरेट्स स्टेडियम", "ट्विकेनहम"],
    "answer_en": "Wembley Stadium",
    "answer_hi": "वेम्बली स्टेडियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the national airline of Australia?",
    "question_hi": "ऑस्ट्रेलिया की राष्ट्रीय एयरलाइन क्या है?",
    "options_en": ["Qantas", "Virgin Australia", "Jetstar", "Regional Express"],
    "options_hi": ["क्वांटास", "वर्जिन ऑस्ट्रेलिया", "जेटस्टार", "क्षेत्रीय एक्सप्रेस"],
    "answer_en": "Qantas",
    "answer_hi": "क्वांटास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the national railway of Japan?",
    "question_hi": "जापान की राष्ट्रीय रेलवे क्या है?",
    "options_en": ["JR (Japan Railways)", "Shinkansen", "Tokyo Metro", "Keio Railway"],
    "options_hi": ["जेआर (जापान रेलवे)", "शिंकानसेन", "टोक्यो मेट्रो", "केइओ रेलवे"],
    "answer_en": "JR (Japan Railways)",
    "answer_hi": "जेआर (जापान रेलवे)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the national ship of the United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम का राष्ट्रीय जहाज क्या है?",
    "options_en": ["HMS Victory", "Cutty Sark", "SS Great Britain", "Mary Rose"],
    "options_hi": ["एचएमएस विक्ट्री", "कटी सार्क", "एसएस ग्रेट ब्रिटेन", "मैरी रोज"],
    "answer_en": "HMS Victory",
    "answer_hi": "एचएमएस विक्ट्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the national train of France?",
    "question_hi": "फ्रांस की राष्ट्रीय ट्रेन क्या है?",
    "options_en": ["TGV", "Eurostar", "TER", "Intercités"],
    "options_hi": ["टीजीवी", "यूरोस्टार", "टीईआर", "इंटरसिटीज"],
    "answer_en": "TGV",
    "answer_hi": "टीजीवी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the national highway of Germany?",
    "question_hi": "जर्मनी का राष्ट्रीय राजमार्ग क्या है?",
    "options_en": ["Autobahn", "Bundesstraße", "Landstraße", "Fernstraße"],
    "options_hi": ["ऑटोबान", "बुंडेसस्ट्रैस", "लैंडस्ट्रैस", "फर्नस्ट्रैस"],
    "answer_en": "Autobahn",
    "answer_hi": "ऑटोबान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the national pass of Switzerland?",
    "question_hi": "स्विट्जरलैंड का राष्ट्रीय दर्रा क्या है?",
    "options_en": ["Gotthard Pass", "Simplon Pass", "Great St. Bernard Pass", "Furka Pass"],
    "options_hi": ["गोथार्ड दर्रा", "सिंपलॉन दर्रा", "ग्रेट सेंट बर्नार्ड दर्रा", "फुरका दर्रा"],
    "answer_en": "Gotthard Pass",
    "answer_hi": "गोथार्ड दर्रा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the national desert of Saudi Arabia?",
    "question_hi": "सऊदी अरब का राष्ट्रीय मरुस्थल क्या है?",
    "options_en": ["Rub' al Khali", "An Nafud", "Ad-Dahna", "Nefud Desert"],
    "options_hi": ["रुब अल खाली", "अन नफूद", "अद-दहना", "नेफूद मरुस्थल"],
    "answer_en": "Rub' al Khali",
    "answer_hi": "रुब अल खाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the national forest of Brazil?",
    "question_hi": "ब्राजील का राष्ट्रीय वन क्या है?",
    "options_en": ["Amazon Rainforest", "Atlantic Forest", "Pantanal", "Cerrado"],
    "options_hi": ["अमेज़न वर्षावन", "अटलांटिक वन", "पेंटानल", "सेराडो"],
    "answer_en": "Amazon Rainforest",
    "answer_hi": "अमेज़न वर्षावन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the national park of the United States?",
    "question_hi": "संयुक्त राज्य अमेरिका का राष्ट्रीय उद्यान क्या है?",
    "options_en": ["Yellowstone", "Yosemite", "Grand Canyon", "Great Smoky Mountains"],
    "options_hi": ["येलोस्टोन", "योसेमाइट", "ग्रांड कैन्यन", "ग्रेट स्मोकी पर्वत"],
    "answer_en": "Yellowstone",
    "answer_hi": "येलोस्टोन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is the national sanctuary of Kenya?",
    "question_hi": "केन्या का राष्ट्रीय अभयारण्य क्या है?",
    "options_en": ["Maasai Mara", "Amboseli", "Tsavo", "Samburu"],
    "options_hi": ["मासाई मारा", "अंबोसेली", "त्सावो", "सम्बुरु"],
    "answer_en": "Maasai Mara",
    "answer_hi": "मासाई मारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is the national reserve of Botswana?",
    "question_hi": "बोत्सवाना का राष्ट्रीय रिजर्व क्या है?",
    "options_en": ["Okavango Delta", "Chobe National Park", "Central Kalahari", "Makgadikgadi Pans"],
    "options_hi": ["ओकावांगो डेल्टा", "चोबे राष्ट्रीय उद्यान", "मध्य कालाहारी", "मक्गादिकगादी पैन"],
    "answer_en": "Okavango Delta",
    "answer_hi": "ओकावांगो डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the national biosphere reserve of Costa Rica?",
    "question_hi": "कोस्टा रिका का राष्ट्रीय जैवमंडल रिजर्व क्या है?",
    "options_en": ["Monteverde Cloud Forest", "La Amistad", "Corcovado", "Tortuguero"],
    "options_hi": ["मोंटेवर्डे क्लाउड फॉरेस्ट", "ला अमिस्ताद", "कोरकोवाडो", "टोर्तुगुएरो"],
    "answer_en": "Monteverde Cloud Forest",
    "answer_hi": "मोंटेवर्डे क्लाउड फॉरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the national wetland of Venezuela?",
    "question_hi": "वेनेजुएला का राष्ट्रीय आर्द्रभूमि क्या है?",
    "options_en": ["Orinoco Delta", "Los Llanos", "Maracaibo Lake", "Canaima"],
    "options_hi": ["ओरिनोको डेल्टा", "लॉस ल्लानोस", "माराकाइबो झील", "कनाइमा"],
    "answer_en": "Orinoco Delta",
    "answer_hi": "ओरिनोको डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the national lake of Malawi?",
    "question_hi": "मलावी की राष्ट्रीय झील क्या है?",
    "options_en": ["Lake Malawi", "Lake Chilwa", "Lake Malombe", "Lake Chiuta"],
    "options_hi": ["मलावी झील", "चिलवा झील", "मालोम्बे झील", "चियूता झील"],
    "answer_en": "Lake Malawi",
    "answer_hi": "मलावी झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the national waterfall of Zambia/Zimbabwe?",
    "question_hi": "जाम्बिया/जिम्बाब्वे का राष्ट्रीय झरना क्या है?",
    "options_en": ["Victoria Falls", "Kalambo Falls", "Ngonye Falls", "Chavuma Falls"],
    "options_hi": ["विक्टोरिया फॉल्स", "कलाम्बो फॉल्स", "न्गोन्ये फॉल्स", "चवुमा फॉल्स"],
    "answer_en": "Victoria Falls",
    "answer_hi": "विक्टोरिया फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the national beach of the Maldives?",
    "question_hi": "मालदीव का राष्ट्रीय समुद्र तट क्या है?",
    "options_en": ["Bikini Beach", "Artificial Beach", "Cocoa Island Beach", "Baros Beach"],
    "options_hi": ["बिकिनी बीच", "कृत्रिम समुद्र तट", "कोकोआ आइलैंड बीच", "बारोस बीच"],
    "answer_en": "Artificial Beach",
    "answer_hi": "कृत्रिम समुद्र तट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the national island of the Philippines?",
    "question_hi": "फिलीपींस का राष्ट्रीय द्वीप क्या है?",
    "options_en": ["Luzon", "Mindanao", "Palawan", "Visayas"],
    "options_hi": ["लूज़ोन", "मिंडानाओ", "पलावन", "विसायस"],
    "answer_en": "Luzon",
    "answer_hi": "लूज़ोन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the national peninsula of Norway?",
    "question_hi": "नॉर्वे का राष्ट्रीय प्रायद्वीप क्या है?",
    "options_en": ["Scandinavian Peninsula", "Finnmark Peninsula", "Nordkapp Peninsula", "Svalbard"],
    "options_hi": ["स्कैंडिनेवियाई प्रायद्वीप", "फिनमार्क प्रायद्वीप", "नॉर्डकैप प्रायद्वीप", "स्वालबार्ड"],
    "answer_en": "Scandinavian Peninsula",
    "answer_hi": "स्कैंडिनेवियाई प्रायद्वीप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is the national bay of Thailand?",
    "question_hi": "थाईलैंड की राष्ट्रीय खाड़ी क्या है?",
    "options_en": ["Phang Nga Bay", "Ao Nang Bay", "Maya Bay", "Patong Bay"],
    "options_hi": ["फांग न्गा खाड़ी", "आओ नांग खाड़ी", "माया खाड़ी", "पाटोंग खाड़ी"],
    "answer_en": "Phang Nga Bay",
    "answer_hi": "फांग न्गा खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the national sea of Greece?",
    "question_hi": "ग्रीस का राष्ट्रीय सागर क्या है?",
    "options_en": ["Aegean Sea", "Ionian Sea", "Mediterranean Sea", "Sea of Crete"],
    "options_hi": ["एजियन सागर", "आयोनियन सागर", "भूमध्य सागर", "क्रेते सागर"],
    "answer_en": "Aegean Sea",
    "answer_hi": "एजियन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is the national ocean of the Philippines?",
    "question_hi": "फिलीपींस का राष्ट्रीय महासागर क्या है?",
    "options_en": ["Pacific Ocean", "South China Sea", "Celebes Sea", "Philippine Sea"],
    "options_hi": ["प्रशांत महासागर", "दक्षिण चीन सागर", "सेलेब्स सागर", "फिलीपीन सागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the national strait of Turkey?",
    "question_hi": "तुर्की की राष्ट्रीय जलसंधि क्या है?",
    "options_en": ["Bosphorus", "Dardanelles", "Turkish Strait", "Marmara Strait"],
    "options_hi": ["बोस्फोरस", "डार्डानेल्स", "तुर्की जलसंधि", "मरमारा जलसंधि"],
    "answer_en": "Bosphorus",
    "answer_hi": "बोस्फोरस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is the national channel of the United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम का राष्ट्रीय चैनल क्या है?",
    "options_en": ["BBC", "ITV", "Channel 4", "Sky"],
    "options_hi": ["बीबीसी", "आईटीवी", "चैनल 4", "स्काई"],
    "answer_en": "BBC",
    "answer_hi": "बीबीसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the national newspaper of Russia?",
    "question_hi": "रूस का राष्ट्रीय समाचार पत्र क्या है?",
    "options_en": ["Rossiyskaya Gazeta", "Izvestia", "Kommersant", "Moskovskij Komsomolets"],
    "options_hi": ["रोस्सिय्स्काया गजेटा", "इज़वेस्तिया", "कोमर्सेंट", "मॉस्कोव्स्कीज कोम्सोमोलेट्स"],
    "answer_en": "Rossiyskaya Gazeta",
    "answer_hi": "रोस्सिय्स्काया गजेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is the national magazine of the United States?",
    "question_hi": "संयुक्त राज्य अमेरिका का राष्ट्रीय पत्रिका क्या है?",
    "options_en": ["Time", "National Geographic", "Newsweek", "The New Yorker"],
    "options_hi": ["टाइम", "नेशनल ज्योग्राफिक", "न्यूजवीक", "द न्यू यॉर्कर"],
    "answer_en": "Time",
    "answer_hi": "टाइम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the national book of Iran?",
    "question_hi": "ईरान की राष्ट्रीय पुस्तक क्या है?",
    "options_en": ["Shahnameh", "Quran", "Divan of Hafez", "Masnavi"],
    "options_hi": ["शाहनामा", "कुरान", "हाफ़िज़ का दीवान", "मसनवी"],
    "answer_en": "Shahnameh",
    "answer_hi": "शाहनामा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is the national document of the United States?",
    "question_hi": "संयुक्त राज्य अमेरिका का राष्ट्रीय दस्तावेज क्या है?",
    "options_en": ["Declaration of Independence", "Constitution", "Bill of Rights", "Emancipation Proclamation"],
    "options_hi": ["स्वतंत्रता की घोषणा", "संविधान", "अधिकार विधेयक", "मुक्ति उद्घोषणा"],
    "answer_en": "Declaration of Independence",
    "answer_hi": "स्वतंत्रता की घोषणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the national archive of France?",
    "question_hi": "फ्रांस का राष्ट्रीय अभिलेखागार क्या है?",
    "options_en": ["Archives Nationales", "Bibliothèque Nationale", "Louvre Archives", "Versailles Archives"],
    "options_hi": ["आर्काइव्स नैशनल", "बिब्लियोथेक नैशनल", "लौवर अभिलेखागार", "वर्साय अभिलेखागार"],
    "answer_en": "Archives Nationales",
    "answer_hi": "आर्काइव्स नैशनल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the national record of Jamaica?",
    "question_hi": "जमैका का राष्ट्रीय रिकॉर्ड क्या है?",
    "options_en": ["Fastest Sprinters", "Reggae Music", "Blue Mountain Coffee", "Bob Marley"],
    "options_hi": ["सबसे तेज धावक", "रेगी संगीत", "ब्लू माउंटेन कॉफी", "बॉब मार्ले"],
    "answer_en": "Fastest Sprinters",
    "answer_hi": "सबसे तेज धावक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the national achievement of the United Arab Emirates?",
    "question_hi": "संयुक्त अरब अमीरात की राष्ट्रीय उपलब्धि क्या है?",
    "options_en": ["Burj Khalifa", "Palm Islands", "Space Program", "Oil Discovery"],
    "options_hi": ["बुर्ज खलीफा", "पाम द्वीप", "अंतरिक्ष कार्यक्रम", "तेल खोज"],
    "answer_en": "Burj Khalifa",
    "answer_hi": "बुर्ज खलीफा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is the national invention of South Korea?",
    "question_hi": "दक्षिण कोरिया का राष्ट्रीय आविष्कार क्या है?",
    "options_en": ["Hangul", "Kimchi", "Taekwondo", "K-Pop"],
    "options_hi": ["हंगुल", "किमची", "ताइक्वांडो", "के-पॉप"],
    "answer_en": "Hangul",
    "answer_hi": "हंगुल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the national discovery of New Zealand?",
    "question_hi": "न्यूजीलैंड की राष्ट्रीय खोज क्या है?",
    "options_en": ["Flightless Birds", "Maori Culture", "Geothermal Energy", "Southern Alps"],
    "options_hi": ["उड़ान रहित पक्षी", "माओरी संस्कृति", "भूतापीय ऊर्जा", "दक्षिणी आल्प्स"],
    "answer_en": "Flightless Birds",
    "answer_hi": "उड़ान रहित पक्षी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is the national contribution of Switzerland?",
    "question_hi": "स्विट्जरलैंड का राष्ट्रीय योगदान क्या है?",
    "options_en": ["Swiss Watches", "Banking System", "Chocolate", "Red Cross"],
    "options_hi": ["स्विस घड़ियाँ", "बैंकिंग प्रणाली", "चॉकलेट", "रेड क्रॉस"],
    "answer_en": "Red Cross",
    "answer_hi": "रेड क्रॉस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the national legacy of Egypt?",
    "question_hi": "मिस्र की राष्ट्रीय विरासत क्या है?",
    "options_en": ["Pyramids", "Hieroglyphics", "Mummies", "Nile Civilization"],
    "options_hi": ["पिरामिड", "हाइरोग्लिफिक्स", "ममी", "नील सभ्यता"],
    "answer_en": "Pyramids",
    "answer_hi": "पिरामिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is the national identity of Switzerland?",
    "question_hi": "स्विट्जरलैंड की राष्ट्रीय पहचान क्या है?",
    "options_en": ["Neutrality", "Multilingualism", "Alpine Culture", "Direct Democracy"],
    "options_hi": ["तटस्थता", "बहुभाषावाद", "आल्प्स संस्कृति", "प्रत्यक्ष लोकतंत्र"],
    "answer_en": "Neutrality",
    "answer_hi": "तटस्थता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the national character of Ireland?",
    "question_hi": "आयरलैंड का राष्ट्रीय चरित्र क्या है?",
    "options_en": ["Hospitality", "Storytelling", "Musicality", "Resilience"],
    "options_hi": ["आतिथ्य", "कहानी सुनाना", "संगीतात्मकता", "लचीलापन"],
    "answer_en": "Hospitality",
    "answer_hi": "आतिथ्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is the national virtue of Bhutan?",
    "question_hi": "भूटान का राष्ट्रीय गुण क्या है?",
    "options_en": ["Gross National Happiness", "Buddhist Compassion", "Environmental Conservation", "Cultural Preservation"],
    "options_hi": ["सकल राष्ट्रीय खुशहाली", "बौद्ध दया", "पर्यावरण संरक्षण", "सांस्कृतिक संरक्षण"],
    "answer_en": "Gross National Happiness",
    "answer_hi": "सकल राष्ट्रीय खुशहाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the national value of Sweden?",
    "question_hi": "स्वीडन का राष्ट्रीय मूल्य क्या है?",
    "options_en": ["Social Equality", "Environmental Consciousness", "Innovation", "Gender Equality"],
    "options_hi": ["सामाजिक समानता", "पर्यावरण जागरूकता", "नवाचार", "लैंगिक समानता"],
    "answer_en": "Social Equality",
    "answer_hi": "सामाजिक समानता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the national principle of Germany?",
    "question_hi": "जर्मनी का राष्ट्रीय सिद्धांत क्या है?",
    "options_en": ["Rule of Law", "Federalism", "Social Market Economy", "Sustainability"],
    "options_hi": ["कानून का शासन", "संघवाद", "सामाजिक बाजार अर्थव्यवस्था", "सतत विकास"],
    "answer_en": "Rule of Law",
    "answer_hi": "कानून का शासन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the national ideal of Finland?",
    "question_hi": "फिनलैंड का राष्ट्रीय आदर्श क्या है?",
    "options_en": ["Education Excellence", "Welfare State", "Nature Conservation", "Technological Advancement"],
    "options_hi": ["शिक्षा उत्कृष्टता", "कल्याणकारी राज्य", "प्रकृति संरक्षण", "तकनीकी प्रगति"],
    "answer_en": "Education Excellence",
    "answer_hi": "शिक्षा उत्कृष्टता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is the national goal of Norway?",
    "question_hi": "नॉर्वे का राष्ट्रीय लक्ष्य क्या है?",
    "options_en": ["Sustainable Development", "Oil Wealth Management", "Arctic Leadership", "Universal Welfare"],
    "options_hi": ["सतत विकास", "तेल संपदा प्रबंधन", "आर्कटिक नेतृत्व", "सार्वभौमिक कल्याण"],
    "answer_en": "Sustainable Development",
    "answer_hi": "सतत विकास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the national dream of Singapore?",
    "question_hi": "सिंगापुर का राष्ट्रीय सपना क्या है?",
    "options_en": ["Smart Nation", "Garden City", "Financial Hub", "Multicultural Harmony"],
    "options_hi": ["स्मार्ट राष्ट्र", "गार्डन सिटी", "वित्तीय केंद्र", "बहुसांस्कृतिक सद्भाव"],
    "answer_en": "Smart Nation",
    "answer_hi": "स्मार्ट राष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the national vision of South Korea?",
    "question_hi": "दक्षिण कोरिया का राष्ट्रीय विजन क्या है?",
    "options_en": ["Digital Nation", "Global Cultural Influence", "Technological Innovation", "Economic Powerhouse"],
    "options_hi": ["डिजिटल राष्ट्र", "वैश्विक सांस्कृतिक प्रभाव", "तकनीकी नवाचार", "आर्थिक शक्ति"],
    "answer_en": "Digital Nation",
    "answer_hi": "डिजिटल राष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the national mission of Israel?",
    "question_hi": "इजराइल का राष्ट्रीय मिशन क्या है?",
    "options_en": ["Water Conservation", "Agricultural Innovation", "Startup Nation", "Security"],
    "options_hi": ["जल संरक्षण", "कृषि नवाचार", "स्टार्टअप राष्ट्र", "सुरक्षा"],
    "answer_en": "Startup Nation",
    "answer_hi": "स्टार्टअप राष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is the national program of Cuba?",
    "question_hi": "क्यूबा का राष्ट्रीय कार्यक्रम क्या है?",
    "options_en": ["Healthcare System", "Literacy Campaign", "Sports Development", "Sugar Production"],
    "options_hi": ["स्वास्थ्य प्रणाली", "साक्षरता अभियान", "खेल विकास", "चीनी उत्पादन"],
    "answer_en": "Healthcare System",
    "answer_hi": "स्वास्थ्य प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the national scheme of Denmark?",
    "question_hi": "डेनमार्क की राष्ट्रीय योजना क्या है?",
    "options_en": ["Welfare Model", "Cycling Infrastructure", "Renewable Energy", "Education System"],
    "options_hi": ["कल्याण मॉडल", "साइकिलिंग बुनियादी ढांचा", "नवीकरणीय ऊर्जा", "शिक्षा प्रणाली"],
    "answer_en": "Welfare Model",
    "answer_hi": "कल्याण मॉडल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is the national policy of the Netherlands?",
    "question_hi": "नीदरलैंड्स की राष्ट्रीय नीति क्या है?",
    "options_en": ["Water Management", "Drug Policy", "Cycling Policy", "Environmental Policy"],
    "options_hi": ["जल प्रबंधन", "मादक पदार्थ नीति", "साइकिल नीति", "पर्यावरण नीति"],
    "answer_en": "Water Management",
    "answer_hi": "जल प्रबंधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the national law of Iceland?",
    "question_hi": "आइसलैंड का राष्ट्रीय कानून क्या है?",
    "options_en": ["Gender Equality Law", "Whaling Regulations", "Renewable Energy Law", "Fisheries Management"],
    "options_hi": ["लैंगिक समानता कानून", "व्हेलिंग विनियम", "नवीकरणीय ऊर्जा कानून", "मत्स्य प्रबंधन"],
    "answer_en": "Gender Equality Law",
    "answer_hi": "लैंगिक समानता कानून",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is the national act of Australia?",
    "question_hi": "ऑस्ट्रेलिया का राष्ट्रीय अधिनियम क्या है?",
    "options_en": ["Native Title Act", "Environment Protection Act", "Migration Act", "Corporations Act"],
    "options_hi": ["नेटिव टाइटल एक्ट", "पर्यावरण संरक्षण अधिनियम", "प्रवासन अधिनियम", "निगम अधिनियम"],
    "answer_en": "Native Title Act",
    "answer_hi": "नेटिव टाइटल एक्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the national right of Canada?",
    "question_hi": "कनाडा का राष्ट्रीय अधिकार क्या है?",
    "options_en": ["Healthcare", "Multiculturalism", "Bilingualism", "Indigenous Rights"],
    "options_hi": ["स्वास्थ्य देखभाल", "बहुसांस्कृतिकता", "द्विभाषावाद", "देशीय अधिकार"],
    "answer_en": "Healthcare",
    "answer_hi": "स्वास्थ्य देखभाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the national duty of Switzerland?",
    "question_hi": "स्विट्जरलैंड का राष्ट्रीय कर्तव्य क्या है?",
    "options_en": ["Military Service", "Tax Payment", "Environmental Protection", "Neutrality Maintenance"],
    "options_hi": ["सैन्य सेवा", "कर भुगतान", "पर्यावरण संरक्षण", "तटस्थता रखरखाव"],
    "answer_en": "Military Service",
    "answer_hi": "सैन्य सेवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the national responsibility of Norway?",
    "question_hi": "नॉर्वे की राष्ट्रीय जिम्मेदारी क्या है?",
    "options_en": ["Arctic Stewardship", "Oil Fund Management", "Environmental Leadership", "Peace Diplomacy"],
    "options_hi": ["आर्कटिक प्रबंधन", "तेल निधि प्रबंधन", "पर्यावरण नेतृत्व", "शांति कूटनीति"],
    "answer_en": "Arctic Stewardship",
    "answer_hi": "आर्कटिक प्रबंधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is the national security of Israel?",
    "question_hi": "इजराइल की राष्ट्रीय सुरक्षा क्या है?",
    "options_en": ["Mossad", "IDF", "Iron Dome", "Cyber Security"],
    "options_hi": ["मोसाद", "आईडीएफ", "आयरन डोम", "साइबर सुरक्षा"],
    "answer_en": "IDF",
    "answer_hi": "आईडीएफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the national defense of Sweden?",
    "question_hi": "स्वीडन का राष्ट्रीय रक्षा क्या है?",
    "options_en": ["Swedish Armed Forces", "Total Defense", "Neutrality Policy", "NATO Partnership"],
    "options_hi": ["स्वीडिश सशस्त्र बल", "कुल रक्षा", "तटस्थता नीति", "नाटो साझेदारी"],
    "answer_en": "Total Defense",
    "answer_hi": "कुल रक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the national intelligence of the United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम की राष्ट्रीय खुफिया एजेंसी क्या है?",
    "options_en": ["MI6", "MI5", "GCHQ", "SIS"],
    "options_hi": ["एमआई6", "एमआई5", "जीसीएचक्यू", "एसआईएस"],
    "answer_en": "MI6",
    "answer_hi": "एमआई6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the national police of Japan?",
    "question_hi": "जापान की राष्ट्रीय पुलिस क्या है?",
    "options_en": ["National Police Agency", "Tokyo Metropolitan Police", "Keisatsu", "Kōban"],
    "options_hi": ["राष्ट्रीय पुलिस एजेंसी", "टोक्यो महानगर पुलिस", "केइसात्सु", "कोबान"],
    "answer_en": "National Police Agency",
    "answer_hi": "राष्ट्रीय पुलिस एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is the national force of France?",
    "question_hi": "फ्रांस का राष्ट्रीय बल क्या है?",
    "options_en": ["French Foreign Legion", "Gendarmerie", "Armée de Terre", "Marine Nationale"],
    "options_hi": ["फ्रेंच फॉरेन लीजन", "जेंडरमेरी", "आर्मी डी टेरे", "मरीन नेशनेल"],
    "answer_en": "Gendarmerie",
    "answer_hi": "जेंडरमेरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the national service of South Korea?",
    "question_hi": "दक्षिण कोरिया की राष्ट्रीय सेवा क्या है?",
    "options_en": ["Military Conscription", "Civil Service", "Tech Education", "Cultural Service"],
    "options_hi": ["सैन्य भर्ती", "सिविल सेवा", "तकनीकी शिक्षा", "सांस्कृतिक सेवा"],
    "answer_en": "Military Conscription",
    "answer_hi": "सैन्य भर्ती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the national honor of the United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम का राष्ट्रीय सम्मान क्या है?",
    "options_en": ["Order of the British Empire", "Victoria Cross", "George Cross", "Order of the Garter"],
    "options_hi": ["ऑर्डर ऑफ द ब्रिटिश एम्पायर", "विक्टोरिया क्रॉस", "जॉर्ज क्रॉस", "ऑर्डर ऑफ द गार्टर"],
    "answer_en": "Order of the British Empire",
    "answer_hi": "ऑर्डर ऑफ द ब्रिटिश एम्पायर",
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