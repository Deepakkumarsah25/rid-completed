const questions=[
  {
    "num": 1,
    "question_en": "Which is the national anthem of India?",
    "question_hi": "भारत का राष्ट्रगान कौन सा है?",
    "options_en": ["Jana Gana Mana", "Vande Mataram", "Saare Jahan Se Achha", "Maa Tujhe Salaam"],
    "options_hi": ["जन गण मन", "वंदे मातरम्", "सारे जहाँ से अच्छा", "माँ तुझे सलाम"],
    "answer_en": "Jana Gana Mana",
    "answer_hi": "जन गण मन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the national song of India?",
    "question_hi": "भारत का राष्ट्रीय गीत क्या है?",
    "options_en": ["Vande Mataram", "Jana Gana Mana", "Saare Jahan Se Achha", "Maa Tujhe Salaam"],
    "options_hi": ["वंदे मातरम्", "जन गण मन", "सारे जहाँ से अच्छा", "माँ तुझे सलाम"],
    "answer_en": "Vande Mataram",
    "answer_hi": "वंदे मातरम्",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which is the national emblem of India?",
    "question_hi": "भारत का राष्ट्रीय प्रतीक चिन्ह कौन सा है?",
    "options_en": ["Ashoka Lion Capital", "Lotus", "Tricolor", "Elephant"],
    "options_hi": ["अशोक स्तंभ", "कमल", "तिरंगा", "हाथी"],
    "answer_en": "Ashoka Lion Capital",
    "answer_hi": "अशोक स्तंभ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the national flag of India called?",
    "question_hi": "भारत के राष्ट्रीय ध्वज को क्या कहते हैं?",
    "options_en": ["Tiranga", "Tricolor", "Both A and B", "None of these"],
    "options_hi": ["तिरंगा", "त्रिरंग", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which is the national calendar of India?",
    "question_hi": "भारत का राष्ट्रीय कैलेंडर कौन सा है?",
    "options_en": ["Saka Calendar", "Vikrami Samvat", "Gregorian Calendar", "Hijri Calendar"],
    "options_hi": ["शक संवत", "विक्रमी संवत", "ग्रेगोरियन कैलेंडर", "हिजरी कैलेंडर"],
    "answer_en": "Saka Calendar",
    "answer_hi": "शक संवत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the national currency of India?",
    "question_hi": "भारत की राष्ट्रीय मुद्रा क्या है?",
    "options_en": ["Indian Rupee", "Dollar", "Euro", "Yen"],
    "options_hi": ["भारतीय रुपया", "डॉलर", "यूरो", "येन"],
    "answer_en": "Indian Rupee",
    "answer_hi": "भारतीय रुपया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which is the national heritage animal of India?",
    "question_hi": "भारत का राष्ट्रीय धरोहर पशु कौन सा है?",
    "options_en": ["Elephant", "Tiger", "Lion", "Rhinoceros"],
    "options_hi": ["हाथी", "बाघ", "शेर", "गैंडा"],
    "answer_en": "Elephant",
    "answer_hi": "हाथी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the national aquatic animal of India?",
    "question_hi": "भारत का राष्ट्रीय जलीय जीव क्या है?",
    "options_en": ["Ganges River Dolphin", "Whale", "Shark", "Crocodile"],
    "options_hi": ["गंगा डॉल्फिन", "व्हेल", "शार्क", "मगरमच्छ"],
    "answer_en": "Ganges River Dolphin",
    "answer_hi": "गंगा डॉल्फिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is the national river of India?",
    "question_hi": "भारत की राष्ट्रीय नदी कौन सी है?",
    "options_en": ["Ganges", "Yamuna", "Brahmaputra", "Godavari"],
    "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
    "answer_en": "Ganges",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the national fruit of India?",
    "question_hi": "भारत का राष्ट्रीय फल क्या है?",
    "options_en": ["Mango", "Apple", "Banana", "Guava"],
    "options_hi": ["आम", "सेब", "केला", "अमरूद"],
    "answer_en": "Mango",
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is the national tree of India?",
    "question_hi": "भारत का राष्ट्रीय वृक्ष कौन सा है?",
    "options_en": ["Banyan Tree", "Neem Tree", "Mango Tree", "Peepal Tree"],
    "options_hi": ["बरगद", "नीम", "आम", "पीपल"],
    "answer_en": "Banyan Tree",
    "answer_hi": "बरगद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the national flower of India?",
    "question_hi": "भारत का राष्ट्रीय फूल क्या है?",
    "options_en": ["Lotus", "Rose", "Marigold", "Sunflower"],
    "options_hi": ["कमल", "गुलाब", "गेंदा", "सूरजमुखी"],
    "answer_en": "Lotus",
    "answer_hi": "कमल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which is the national animal of India?",
    "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Royal Bengal Tiger", "Elephant", "Lion", "Cow"],
    "options_hi": ["रॉयल बंगाल टाइगर", "हाथी", "शेर", "गाय"],
    "answer_en": "Royal Bengal Tiger",
    "answer_hi": "रॉयल बंगाल टाइगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the national bird of India?",
    "question_hi": "भारत का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Indian Peacock", "Eagle", "Sparrow", "Pigeon"],
    "options_hi": ["भारतीय मोर", "गरुड़", "गौरैया", "कबूतर"],
    "answer_en": "Indian Peacock",
    "answer_hi": "भारतीय मोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which is the national reptile of India?",
    "question_hi": "भारत का राष्ट्रीय सरीसृप कौन सा है?",
    "options_en": ["King Cobra", "Crocodile", "Monitor Lizard", "Turtle"],
    "options_hi": ["किंग कोबरा", "मगरमच्छ", "गोह", "कछुआ"],
    "answer_en": "King Cobra",
    "answer_hi": "किंग कोबरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the national game of India?",
    "question_hi": "भारत का राष्ट्रीय खेल क्या है?",
    "options_en": ["Hockey", "Cricket", "Football", "Kabaddi"],
    "options_hi": ["हॉकी", "क्रिकेट", "फुटबॉल", "कबड्डी"],
    "answer_en": "Hockey",
    "answer_hi": "हॉकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is the national heritage tree of India?",
    "question_hi": "भारत का राष्ट्रीय धरोहर वृक्ष कौन सा है?",
    "options_en": ["Bodhi Tree", "Banyan Tree", "Neem Tree", "Sandalwood Tree"],
    "options_hi": ["बोधि वृक्ष", "बरगद", "नीम", "चंदन"],
    "answer_en": "Bodhi Tree",
    "answer_hi": "बोधि वृक्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the national vegetable of India?",
    "question_hi": "भारत की राष्ट्रीय सब्जी क्या है?",
    "options_en": ["No official national vegetable", "Potato", "Tomato", "Brinjal"],
    "options_hi": ["कोई आधिकारिक राष्ट्रीय सब्जी नहीं", "आलू", "टमाटर", "बैंगन"],
    "answer_en": "No official national vegetable",
    "answer_hi": "कोई आधिकारिक राष्ट्रीय सब्जी नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which is the national aquatic bird of India?",
    "question_hi": "भारत का राष्ट्रीय जलीय पक्षी कौन सा है?",
    "options_en": ["No official aquatic bird", "Kingfisher", "Swan", "Duck"],
    "options_hi": ["कोई आधिकारिक जलीय पक्षी नहीं", "किंगफिशर", "हंस", "बत्तख"],
    "answer_en": "No official aquatic bird",
    "answer_hi": "कोई आधिकारिक जलीय पक्षी नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the national microbe of India?",
    "question_hi": "भारत का राष्ट्रीय सूक्ष्मजीव क्या है?",
    "options_en": ["No official national microbe", "Lactobacillus", "Rhizobium", "E. Coli"],
    "options_hi": ["कोई आधिकारिक राष्ट्रीय सूक्ष्मजीव नहीं", "लैक्टोबैसिलस", "राइजोबियम", "ई. कोली"],
    "answer_en": "No official national microbe",
    "answer_hi": "कोई आधिकारिक राष्ट्रीय सूक्ष्मजीव नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which is the national butterfly of India?",
    "question_hi": "भारत की राष्ट्रीय तितली कौन सी है?",
    "options_en": ["No official butterfly", "Common Jezebel", "Monarch", "Swallowtail"],
    "options_hi": ["कोई आधिकारिक तितली नहीं", "कॉमन जेज़ेबेल", "मोनार्क", "स्वॉलोटेल"],
    "answer_en": "No official butterfly",
    "answer_hi": "कोई आधिकारिक तितली नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the national instrument of India?",
    "question_hi": "भारत का राष्ट्रीय वाद्ययंत्र क्या है?",
    "options_en": ["Veena", "Sitar", "Tabla", "Flute"],
    "options_hi": ["वीणा", "सितार", "तबला", "बांसुरी"],
    "answer_en": "Veena",
    "answer_hi": "वीणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which is the national classical language of India?",
    "question_hi": "भारत की राष्ट्रीय शास्त्रीय भाषा कौन सी है?",
    "options_en": ["Sanskrit and Tamil", "Hindi", "English", "Bengali"],
    "options_hi": ["संस्कृत और तमिल", "हिंदी", "अंग्रेजी", "बंगाली"],
    "answer_en": "Sanskrit and Tamil",
    "answer_hi": "संस्कृत और तमिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the national epic of India?",
    "question_hi": "भारत का राष्ट्रीय महाकाव्य क्या है?",
    "options_en": ["Ramayana and Mahabharata", "Geeta", "Vedas", "Upanishads"],
    "options_hi": ["रामायण और महाभारत", "गीता", "वेद", "उपनिषद"],
    "answer_en": "Ramayana and Mahabharata",
    "answer_hi": "रामायण और महाभारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is the national dance of India?",
    "question_hi": "भारत का राष्ट्रीय नृत्य कौन सा है?",
    "options_en": ["No single national dance", "Bharatanatyam", "Kathak", "Odissi"],
    "options_hi": ["एक राष्ट्रीय नृत्य नहीं", "भरतनाट्यम", "कथक", "ओडिसी"],
    "answer_en": "No single national dance",
    "answer_hi": "एक राष्ट्रीय नृत्य नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the national language of India?",
    "question_hi": "भारत की राष्ट्रीय भाषा क्या है?",
    "options_en": ["No official national language", "Hindi", "English", "Sanskrit"],
    "options_hi": ["कोई आधिकारिक राष्ट्रीय भाषा नहीं", "हिंदी", "अंग्रेजी", "संस्कृत"],
    "answer_en": "No official national language",
    "answer_hi": "कोई आधिकारिक राष्ट्रीय भाषा नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which is the national official language of India?",
    "question_hi": "भारत की राष्ट्रीय राजभाषा क्या है?",
    "options_en": ["Hindi and English", "Hindi only", "English only", "Sanskrit"],
    "options_hi": ["हिंदी और अंग्रेजी", "केवल हिंदी", "केवल अंग्रेजी", "संस्कृत"],
    "answer_en": "Hindi and English",
    "answer_hi": "हिंदी और अंग्रेजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the national aquatic plant of India?",
    "question_hi": "भारत का राष्ट्रीय जलीय पौधा क्या है?",
    "options_en": ["No official aquatic plant", "Lotus", "Water Lily", "Seaweed"],
    "options_hi": ["कोई आधिकारिक जलीय पौधा नहीं", "कमल", "वाटर लिली", "समुद्री शैवाल"],
    "answer_en": "No official aquatic plant",
    "answer_hi": "कोई आधिकारिक जलीय पौधा नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which is the national marine mammal of India?",
    "question_hi": "भारत का राष्ट्रीय समुद्री स्तनपायी कौन सा है?",
    "options_en": ["No official marine mammal", "Dolphin", "Whale", "Seal"],
    "options_hi": ["कोई आधिकारिक समुद्री स्तनपायी नहीं", "डॉल्फिन", "व्हेल", "सील"],
    "answer_en": "No official marine mammal",
    "answer_hi": "कोई आधिकारिक समुद्री स्तनपायी नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the national monument of India?",
    "question_hi": "भारत का राष्ट्रीय स्मारक क्या है?",
    "options_en": ["No official national monument", "Taj Mahal", "Red Fort", "India Gate"],
    "options_hi": ["कोई आधिकारिक राष्ट्रीय स्मारक नहीं", "ताजमहल", "लाल किला", "इंडिया गेट"],
    "answer_en": "No official national monument",
    "answer_hi": "कोई आधिकारिक राष्ट्रीय स्मारक नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which is the national flower of United States?",
    "question_hi": "संयुक्त राज्य अमेरिका का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Rose", "Lily", "Tulip", "Daisy"],
    "options_hi": ["गुलाब", "लिली", "ट्यूलिप", "डेज़ी"],
    "answer_en": "Rose",
    "answer_hi": "गुलाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the national animal of United States?",
    "question_hi": "संयुक्त राज्य अमेरिका का राष्ट्रीय पशु क्या है?",
    "options_en": ["Bald Eagle", "American Bison", "Grizzly Bear", "White-tailed Deer"],
    "options_hi": ["बाल्ड ईगल", "अमेरिकन बाइसन", "ग्रिज़ली बीयर", "व्हाइट-टेल्ड डियर"],
    "answer_en": "Bald Eagle",
    "answer_hi": "बाल्ड ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which is the national bird of United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["European Robin", "Red Grouse", "Barn Owl", "Mute Swan"],
    "options_hi": ["यूरोपीय रॉबिन", "रेड ग्राउज़", "बार्न आउल", "म्यूट स्वान"],
    "answer_en": "European Robin",
    "answer_hi": "यूरोपीय रॉबिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the national flower of United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम का राष्ट्रीय फूल क्या है?",
    "options_en": ["Rose", "Thistle", "Shamrock", "Daffodil"],
    "options_hi": ["गुलाब", "थिसल", "शैमरॉक", "डैफोडिल"],
    "answer_en": "Rose",
    "answer_hi": "गुलाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which is the national animal of Canada?",
    "question_hi": "कनाडा का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Beaver", "Canadian Horse", "Moose", "Polar Bear"],
    "options_hi": ["बीवर", "कैनेडियन हॉर्स", "मूस", "ध्रुवीय भालू"],
    "answer_en": "Beaver",
    "answer_hi": "बीवर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the national tree of Canada?",
    "question_hi": "कनाडा का राष्ट्रीय वृक्ष क्या है?",
    "options_en": ["Maple Tree", "Pine Tree", "Oak Tree", "Birch Tree"],
    "options_hi": ["मेपल ट्री", "पाइन ट्री", "ओक ट्री", "बर्च ट्री"],
    "answer_en": "Maple Tree",
    "answer_hi": "मेपल ट्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which is the national animal of Australia?",
    "question_hi": "ऑस्ट्रेलिया का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Red Kangaroo", "Koala", "Emu", "Platypus"],
    "options_hi": ["रेड कंगारू", "कोआला", "एमू", "प्लैटिपस"],
    "answer_en": "Red Kangaroo",
    "answer_hi": "रेड कंगारू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the national bird of Australia?",
    "question_hi": "ऑस्ट्रेलिया का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Emu", "Kookaburra", "Sulphur-crested Cockatoo", "Lyrebird"],
    "options_hi": ["एमू", "कुकाबुरा", "सल्फर-क्रेस्टेड कॉकटू", "लायरबर्ड"],
    "answer_en": "Emu",
    "answer_hi": "एमू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which is the national flower of Australia?",
    "question_hi": "ऑस्ट्रेलिया का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Golden Wattle", "Waratah", "Kangaroo Paw", "Sturt's Desert Pea"],
    "options_hi": ["गोल्डन वॉटल", "वराटाह", "कंगारू पॉ", "स्टर्ट्स डेजर्ट पी"],
    "answer_en": "Golden Wattle",
    "answer_hi": "गोल्डन वॉटल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the national animal of New Zealand?",
    "question_hi": "न्यूज़ीलैंड का राष्ट्रीय पशु क्या है?",
    "options_en": ["Kiwi", "Kea", "Tuatara", "Morepork"],
    "options_hi": ["कीवी", "कीआ", "टुआटारा", "मोरपोर्क"],
    "answer_en": "Kiwi",
    "answer_hi": "कीवी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which is the national bird of New Zealand?",
    "question_hi": "न्यूज़ीलैंड का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Kiwi", "Kea", "Takahe", "Kakapo"],
    "options_hi": ["कीवी", "कीआ", "ताकाहे", "काकापो"],
    "answer_en": "Kiwi",
    "answer_hi": "कीवी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the national flower of New Zealand?",
    "question_hi": "न्यूज़ीलैंड का राष्ट्रीय फूल क्या है?",
    "options_en": ["Silver Fern", "Kowhai", "Pohutukawa", "Mount Cook Lily"],
    "options_hi": ["सिल्वर फर्न", "कोव्हाई", "पोहुटुकावा", "माउंट कुक लिली"],
    "answer_en": "Silver Fern",
    "answer_hi": "सिल्वर फर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which is the national animal of South Africa?",
    "question_hi": "दक्षिण अफ्रीका का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Springbok", "Blue Crane", "Galjoen", "King Protea"],
    "options_hi": ["स्प्रिंगबोक", "ब्लू क्रेन", "गैलजोन", "किंग प्रोटिया"],
    "answer_en": "Springbok",
    "answer_hi": "स्प्रिंगबोक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the national bird of South Africa?",
    "question_hi": "दक्षिण अफ्रीका का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Blue Crane", "African Fish Eagle", "Secretary Bird", "Ostrich"],
    "options_hi": ["ब्लू क्रेन", "अफ्रीकन फिश ईगल", "सेक्रेटरी बर्ड", "शुतुरमुर्ग"],
    "answer_en": "Blue Crane",
    "answer_hi": "ब्लू क्रेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is the national flower of South Africa?",
    "question_hi": "दक्षिण अफ्रीका का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["King Protea", "Bird of Paradise", "Carnation", "Rose"],
    "options_hi": ["किंग प्रोटिया", "बर्ड ऑफ पैराडाइज़", "कार्नेशन", "गुलाब"],
    "answer_en": "King Protea",
    "answer_hi": "किंग प्रोटिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the national animal of Russia?",
    "question_hi": "रूस का राष्ट्रीय पशु क्या है?",
    "options_en": ["Eurasian Brown Bear", "Double-headed Eagle", "Siberian Tiger", "Russian Wolf"],
    "options_hi": ["यूरेशियन ब्राउन बीयर", "डबल-हेडेड ईगल", "साइबेरियन टाइगर", "रशियन वुल्फ"],
    "answer_en": "Eurasian Brown Bear",
    "answer_hi": "यूरेशियन ब्राउन बीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which is the national bird of Russia?",
    "question_hi": "रूस का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Double-headed Eagle", "White Stork", "Golden Eagle", "Firebird"],
    "options_hi": ["डबल-हेडेड ईगल", "व्हाइट स्टॉर्क", "गोल्डन ईगल", "फायरबर्ड"],
    "answer_en": "Double-headed Eagle",
    "answer_hi": "डबल-हेडेड ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the national flower of Russia?",
    "question_hi": "रूस का राष्ट्रीय फूल क्या है?",
    "options_en": ["Chamomile", "Sunflower", "Birch", "Lily of the Valley"],
    "options_hi": ["कैमोमाइल", "सूरजमुखी", "बर्च", "लीली ऑफ द वैली"],
    "answer_en": "Chamomile",
    "answer_hi": "कैमोमाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is the national animal of China?",
    "question_hi": "चीन का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Giant Panda", "Chinese Dragon", "Red-crowned Crane", "Asian Elephant"],
    "options_hi": ["जायंट पांडा", "चाइनीज़ ड्रैगन", "रेड-क्राउन्ड क्रेन", "एशियाई हाथी"],
    "answer_en": "Giant Panda",
    "answer_hi": "जायंट पांडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the national bird of China?",
    "question_hi": "चीन का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Red-crowned Crane", "Golden Pheasant", "Mandarin Duck", "Chinese Bulbul"],
    "options_hi": ["रेड-क्राउन्ड क्रेन", "गोल्डन फेज़ेंट", "मैंडरिन डक", "चाइनीज़ बुलबुल"],
    "answer_en": "Red-crowned Crane",
    "answer_hi": "रेड-क्राउन्ड क्रेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which is the national flower of China?",
    "question_hi": "चीन का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Plum Blossom", "Peony", "Chrysanthemum", "Orchid"],
    "options_hi": ["प्लम ब्लॉसम", "पिओनी", "क्राइसेंथेमम", "ऑर्किड"],
    "answer_en": "Plum Blossom",
    "answer_hi": "प्लम ब्लॉसम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is the national animal of Japan?",
    "question_hi": "जापान का राष्ट्रीय पशु क्या है?",
    "options_en": ["Green Pheasant", "Japanese Macaque", "Japanese Serow", "Sika Deer"],
    "options_hi": ["ग्रीन फेज़ेंट", "जापानी मकाक", "जापानी सेरो", "सिका डियर"],
    "answer_en": "Green Pheasant",
    "answer_hi": "ग्रीन फेज़ेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which is the national bird of Japan?",
    "question_hi": "जापान का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Green Pheasant", "Red-crowned Crane", "Japanese Bush Warbler", "Uguisu"],
    "options_hi": ["ग्रीन फेज़ेंट", "रेड-क्राउन्ड क्रेन", "जापानी बुश वार्बलर", "उगुइसु"],
    "answer_en": "Green Pheasant",
    "answer_hi": "ग्रीन फेज़ेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the national flower of Japan?",
    "question_hi": "जापान का राष्ट्रीय फूल क्या है?",
    "options_en": ["Cherry Blossom", "Chrysanthemum", "Japanese Iris", "Camellia"],
    "options_hi": ["चेरी ब्लॉसम", "क्राइसेंथेमम", "जापानी आईरिस", "कैमेलिया"],
    "answer_en": "Cherry Blossom",
    "answer_hi": "चेरी ब्लॉसम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which is the national animal of Germany?",
    "question_hi": "जर्मनी का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Federal Eagle", "Black Eagle", "European Bison", "Red Fox"],
    "options_hi": ["फेडरल ईगल", "ब्लैक ईगल", "यूरोपीय बाइसन", "रेड फॉक्स"],
    "answer_en": "Federal Eagle",
    "answer_hi": "फेडरल ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the national bird of Germany?",
    "question_hi": "जर्मनी का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Federal Eagle", "White Stork", "Common Nightingale", "European Robin"],
    "options_hi": ["फेडरल ईगल", "व्हाइट स्टॉर्क", "कॉमन नाइटिंगेल", "यूरोपीय रॉबिन"],
    "answer_en": "Federal Eagle",
    "answer_hi": "फेडरल ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which is the national flower of Germany?",
    "question_hi": "जर्मनी का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Cornflower", "Edelweiss", "Chamomile", "Oak"],
    "options_hi": ["कॉर्नफ्लावर", "एडेलवाइस", "कैमोमाइल", "ओक"],
    "answer_en": "Cornflower",
    "answer_hi": "कॉर्नफ्लावर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the national animal of France?",
    "question_hi": "फ्रांस का राष्ट्रीय पशु क्या है?",
    "options_en": ["Gallic Rooster", "Lynx", "European Hare", "Red Fox"],
    "options_hi": ["गैलिक रोस्टर", "लिंक्स", "यूरोपीय खरगोश", "रेड फॉक्स"],
    "answer_en": "Gallic Rooster",
    "answer_hi": "गैलिक रोस्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which is the national bird of France?",
    "question_hi": "फ्रांस का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Gallic Rooster", "European Goldfinch", "Barn Owl", "Common Blackbird"],
    "options_hi": ["गैलिक रोस्टर", "यूरोपीय गोल्डफिंच", "बार्न आउल", "कॉमन ब्लैकबर्ड"],
    "answer_en": "Gallic Rooster",
    "answer_hi": "गैलिक रोस्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is the national flower of France?",
    "question_hi": "फ्रांस का राष्ट्रीय फूल क्या है?",
    "options_en": ["Iris", "Lily", "Rose", "Lavender"],
    "options_hi": ["आईरिस", "लिली", "गुलाब", "लैवेंडर"],
    "answer_en": "Iris",
    "answer_hi": "आईरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which is the national animal of Italy?",
    "question_hi": "इटली का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Italian Wolf", "Brown Bear", "Golden Eagle", "Italian Sparrow"],
    "options_hi": ["इटैलियन वुल्फ", "ब्राउन बीयर", "गोल्डन ईगल", "इटैलियन स्पैरो"],
    "answer_en": "Italian Wolf",
    "answer_hi": "इटैलियन वुल्फ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is the national bird of Italy?",
    "question_hi": "इटली का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Italian Sparrow", "European Robin", "Barn Swallow", "Golden Eagle"],
    "options_hi": ["इटैलियन स्पैरो", "यूरोपीय रॉबिन", "बार्न स्वैलो", "गोल्डन ईगल"],
    "answer_en": "Italian Sparrow",
    "answer_hi": "इटैलियन स्पैरो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which is the national flower of Italy?",
    "question_hi": "इटली का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["White Lily", "Rose", "Daisy", "Sunflower"],
    "options_hi": ["व्हाइट लिली", "गुलाब", "डेज़ी", "सूरजमुखी"],
    "answer_en": "White Lily",
    "answer_hi": "व्हाइट लिली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is the national animal of Spain?",
    "question_hi": "स्पेन का राष्ट्रीय पशु क्या है?",
    "options_en": ["Bull", "Iberian Lynx", "Spanish Imperial Eagle", "Brown Bear"],
    "options_hi": ["बैल", "आइबेरियन लिंक्स", "स्पेनिश इंपीरियल ईगल", "ब्राउन बीयर"],
    "answer_en": "Bull",
    "answer_hi": "बैल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which is the national bird of Spain?",
    "question_hi": "स्पेन का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Spanish Imperial Eagle", "European Bee-eater", "Greater Flamingo", "Griffon Vulture"],
    "options_hi": ["स्पेनिश इंपीरियल ईगल", "यूरोपीय बी-ईटर", "ग्रेटर फ्लेमिंगो", "ग्रिफ़न वल्चर"],
    "answer_en": "Spanish Imperial Eagle",
    "answer_hi": "स्पेनिश इंपीरियल ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is the national flower of Spain?",
    "question_hi": "स्पेन का राष्ट्रीय फूल क्या है?",
    "options_en": ["Red Carnation", "Rose", "Sunflower", "Lily"],
    "options_hi": ["रेड कार्नेशन", "गुलाब", "सूरजमुखी", "लिली"],
    "answer_en": "Red Carnation",
    "answer_hi": "रेड कार्नेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which is the national animal of Brazil?",
    "question_hi": "ब्राज़ील का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Jaguar", "Macaw", "Maned Wolf", "Golden Lion Tamarin"],
    "options_hi": ["जगुआर", "मैकॉ", "मेन्ड वुल्फ", "गोल्डन लायन टैमरिन"],
    "answer_en": "Jaguar",
    "answer_hi": "जगुआर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is the national bird of Brazil?",
    "question_hi": "ब्राज़ील का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Rufous-bellied Thrush", "Macaw", "Toco Toucan", "Harpy Eagle"],
    "options_hi": ["रुफ़स-बेलीड थ्रश", "मैकॉ", "टोको टूकेन", "हार्पी ईगल"],
    "answer_en": "Rufous-bellied Thrush",
    "answer_hi": "रुफ़स-बेलीड थ्रश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which is the national flower of Brazil?",
    "question_hi": "ब्राज़ील का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Golden Trumpet Tree", "Orchid", "Rose", "Begonia"],
    "options_hi": ["गोल्डन ट्रम्पेट ट्री", "ऑर्किड", "गुलाब", "बेगोनिया"],
    "answer_en": "Golden Trumpet Tree",
    "answer_hi": "गोल्डन ट्रम्पेट ट्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the national animal of Argentina?",
    "question_hi": "अर्जेंटीना का राष्ट्रीय पशु क्या है?",
    "options_en": ["Rufous Hornero", "Jaguar", "Puma", "Andean Condor"],
    "options_hi": ["रुफ़स हॉर्नेरो", "जगुआर", "प्यूमा", "एंडियन कोंडोर"],
    "answer_en": "Rufous Hornero",
    "answer_hi": "रुफ़स हॉर्नेरो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which is the national bird of Argentina?",
    "question_hi": "अर्जेंटीना का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Rufous Hornero", "Andean Condor", "Southern Lapwing", "Flamingo"],
    "options_hi": ["रुफ़स हॉर्नेरो", "एंडियन कोंडोर", "दक्षिणी लैपविंग", "फ्लेमिंगो"],
    "answer_en": "Rufous Hornero",
    "answer_hi": "रुफ़स हॉर्नेरो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is the national flower of Argentina?",
    "question_hi": "अर्जेंटीना का राष्ट्रीय फूल क्या है?",
    "options_en": ["Ceibo Flower", "Rose", "Sunflower", "Orchid"],
    "options_hi": ["सेइबो फ्लावर", "गुलाब", "सूरजमुखी", "ऑर्किड"],
    "answer_en": "Ceibo Flower",
    "answer_hi": "सेइबो फ्लावर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which is the national animal of Mexico?",
    "question_hi": "मेक्सिको का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Golden Eagle", "Jaguar", "Xoloitzcuintli", "Mexican Wolf"],
    "options_hi": ["गोल्डन ईगल", "जगुआर", "ज़ोलोइट्ज़कुइंटली", "मेक्सिकन वुल्फ"],
    "answer_en": "Golden Eagle",
    "answer_hi": "गोल्डन ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is the national bird of Mexico?",
    "question_hi": "मेक्सिको का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Golden Eagle", "Crested Caracara", "Quetzal", "Hummingbird"],
    "options_hi": ["गोल्डन ईगल", "क्रेस्टेड कैराकारा", "क्वेट्ज़ल", "हमिंगबर्ड"],
    "answer_en": "Golden Eagle",
    "answer_hi": "गोल्डन ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which is the national flower of Mexico?",
    "question_hi": "मेक्सिको का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Dahlia", "Poinsettia", "Marigold", "Mexican Sunflower"],
    "options_hi": ["डाहलिया", "पॉइंसेटिया", "गेंदा", "मेक्सिकन सनफ्लावर"],
    "answer_en": "Dahlia",
    "answer_hi": "डाहलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is the national animal of Egypt?",
    "question_hi": "मिस्र का राष्ट्रीय पशु क्या है?",
    "options_en": ["Steppe Eagle", "Saluki", "Nile Crocodile", "Egyptian Mongoose"],
    "options_hi": ["स्टेप ईगल", "सलुकी", "नील मगरमच्छ", "मिस्र नेवला"],
    "answer_en": "Steppe Eagle",
    "answer_hi": "स्टेप ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which is the national bird of Egypt?",
    "question_hi": "मिस्र का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Steppe Eagle", "Hoopoe", "Sacred Ibis", "Egyptian Vulture"],
    "options_hi": ["स्टेप ईगल", "हुपू", "सैक्रेड आइबिस", "मिस्र गिद्ध"],
    "answer_en": "Steppe Eagle",
    "answer_hi": "स्टेप ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is the national flower of Egypt?",
    "question_hi": "मिस्र का राष्ट्रीय फूल क्या है?",
    "options_en": ["Egyptian Lotus", "Rose", "Jasmine", "Lily"],
    "options_hi": ["मिस्र कमल", "गुलाब", "चमेली", "लिली"],
    "answer_en": "Egyptian Lotus",
    "answer_hi": "मिस्र कमल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which is the national animal of Pakistan?",
    "question_hi": "पाकिस्तान का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Markhor", "Snow Leopard", "Indus River Dolphin", "Chinkara"],
    "options_hi": ["मार्खोर", "स्नो लेपर्ड", "सिंधु नदी डॉल्फिन", "चिंकारा"],
    "answer_en": "Markhor",
    "answer_hi": "मार्खोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the national bird of Pakistan?",
    "question_hi": "पाकिस्तान का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Chukar Partridge", "Shaheen Falcon", "Himalayan Monal", "Common Peacock"],
    "options_hi": ["चुकोर पार्ट्रिज", "शाहीन फाल्कन", "हिमालयन मोनाल", "सामान्य मोर"],
    "answer_en": "Chukar Partridge",
    "answer_hi": "चुकोर पार्ट्रिज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which is the national flower of Pakistan?",
    "question_hi": "पाकिस्तान का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Jasmine", "Rose", "Lotus", "Marigold"],
    "options_hi": ["चमेली", "गुलाब", "कमल", "गेंदा"],
    "answer_en": "Jasmine",
    "answer_hi": "चमेली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is the national animal of Bangladesh?",
    "question_hi": "बांग्लादेश का राष्ट्रीय पशु क्या है?",
    "options_en": ["Royal Bengal Tiger", "Spotted Deer", "Hoolock Gibbon", "Indian Elephant"],
    "options_hi": ["रॉयल बंगाल टाइगर", "चीतल", "हूलॉक गिब्बन", "भारतीय हाथी"],
    "answer_en": "Royal Bengal Tiger",
    "answer_hi": "रॉयल बंगाल टाइगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which is the national bird of Bangladesh?",
    "question_hi": "बांग्लादेश का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Oriental Magpie-Robin", "Sparrow", "Kingfisher", "White-throated Kingfisher"],
    "options_hi": ["ओरिएंटल मैगपाई-रॉबिन", "गौरैया", "किंगफिशर", "व्हाइट-थ्रोटेड किंगफिशर"],
    "answer_en": "Oriental Magpie-Robin",
    "answer_hi": "ओरिएंटल मैगपाई-रॉबिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the national flower of Bangladesh?",
    "question_hi": "बांग्लादेश का राष्ट्रीय फूल क्या है?",
    "options_en": ["Water Lily", "Rose", "Lotus", "Marigold"],
    "options_hi": ["वाटर लिली", "गुलाब", "कमल", "गेंदा"],
    "answer_en": "Water Lily",
    "answer_hi": "वाटर लिली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which is the national animal of Sri Lanka?",
    "question_hi": "श्रीलंका का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Sri Lankan Elephant", "Sri Lankan Leopard", "Purple-faced Langur", "Sri Lankan Sambar"],
    "options_hi": ["श्रीलंकाई हाथी", "श्रीलंकाई तेंदुआ", "पर्पल-फेस्ड लंगूर", "श्रीलंकाई सांभर"],
    "answer_en": "Sri Lankan Elephant",
    "answer_hi": "श्रीलंकाई हाथी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is the national bird of Sri Lanka?",
    "question_hi": "श्रीलंका का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Sri Lankan Junglefowl", "Ceylon Blue Magpie", "Sri Lanka Grey Hornbill", "Yellow-fronted Barbet"],
    "options_hi": ["श्रीलंकाई जंगलफाउल", "सीलोन ब्लू मैगपाई", "श्रीलंका ग्रे हॉर्नबिल", "येलो-फ्रंटेड बार्बेट"],
    "answer_en": "Sri Lankan Junglefowl",
    "answer_hi": "श्रीलंकाई जंगलफाउल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which is the national flower of Sri Lanka?",
    "question_hi": "श्रीलंका का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Blue Water Lily", "Lotus", "Orchid", "Jasmine"],
    "options_hi": ["ब्लू वाटर लिली", "कमल", "ऑर्किड", "चमेली"],
    "answer_en": "Blue Water Lily",
    "answer_hi": "ब्लू वाटर लिली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is the national animal of Nepal?",
    "question_hi": "नेपाल का राष्ट्रीय पशु क्या है?",
    "options_en": ["Cow", "Snow Leopard", "Red Panda", "Himalayan Monal"],
    "options_hi": ["गाय", "स्नो लेपर्ड", "रेड पांडा", "हिमालयन मोनाल"],
    "answer_en": "Cow",
    "answer_hi": "गाय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which is the national bird of Nepal?",
    "question_hi": "नेपाल का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Himalayan Monal", "Spiny Babbler", "Danphe", "Satyr Tragopan"],
    "options_hi": ["हिमालयन मोनाल", "स्पाइनी बैबलर", "डैंफे", "सैटायर ट्रैगोपैन"],
    "answer_en": "Himalayan Monal",
    "answer_hi": "हिमालयन मोनाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is the national flower of Nepal?",
    "question_hi": "नेपाल का राष्ट्रीय फूल क्या है?",
    "options_en": ["Rhododendron", "Lotus", "Marigold", "Jasmine"],
    "options_hi": ["रोडोडेंड्रन", "कमल", "गेंदा", "चमेली"],
    "answer_en": "Rhododendron",
    "answer_hi": "रोडोडेंड्रन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which is the national animal of Bhutan?",
    "question_hi": "भूटान का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Takin", "Snow Leopard", "Bhutan Grey Langur", "Red Panda"],
    "options_hi": ["ताकिन", "स्नो लेपर्ड", "भूटान ग्रे लंगूर", "रेड पांडा"],
    "answer_en": "Takin",
    "answer_hi": "ताकिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the national bird of Bhutan?",
    "question_hi": "भूटान का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Raven", "Himalayan Monal", "Blood Pheasant", "Ward's Trogon"],
    "options_hi": ["रेवेन", "हिमालयन मोनाल", "ब्लड फेज़ेंट", "वार्ड्स ट्रोगॉन"],
    "answer_en": "Raven",
    "answer_hi": "रेवेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which is the national flower of Bhutan?",
    "question_hi": "भूटान का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Blue Poppy", "Rhododendron", "Lotus", "Orchid"],
    "options_hi": ["ब्लू पॉपी", "रोडोडेंड्रन", "कमल", "ऑर्किड"],
    "answer_en": "Blue Poppy",
    "answer_hi": "ब्लू पॉपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is the national animal of Afghanistan?",
    "question_hi": "अफगानिस्तान का राष्ट्रीय पशु क्या है?",
    "options_en": ["Snow Leopard", "Marco Polo Sheep", "Afghan Hound", "Ibex"],
    "options_hi": ["स्नो लेपर्ड", "मार्को पोलो शीप", "अफगान हाउंड", "आइबेक्स"],
    "answer_en": "Snow Leopard",
    "answer_hi": "स्नो लेपर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which is the national bird of Afghanistan?",
    "question_hi": "अफगानिस्तान का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Golden Eagle", "Hoopoe", "Afghan Snowfinch", "See-see Partridge"],
    "options_hi": ["गोल्डन ईगल", "हुपू", "अफगान स्नोफिंच", "सी-सी पार्ट्रिज"],
    "answer_en": "Golden Eagle",
    "answer_hi": "गोल्डन ईगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the national flower of Afghanistan?",
    "question_hi": "अफगानिस्तान का राष्ट्रीय फूल क्या है?",
    "options_en": ["Tulip", "Rose", "Lily", "Jasmine"],
    "options_hi": ["ट्यूलिप", "गुलाब", "लिली", "चमेली"],
    "answer_en": "Tulip",
    "answer_hi": "ट्यूलिप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which is the national animal of Myanmar?",
    "question_hi": "म्यांमार का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Green Peafowl", "Asian Elephant", "Tiger", "Eld's Deer"],
    "options_hi": ["ग्रीन पीफाउल", "एशियाई हाथी", "बाघ", "एल्ड्स डियर"],
    "answer_en": "Green Peafowl",
    "answer_hi": "ग्रीन पीफाउल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is the national bird of Myanmar?",
    "question_hi": "म्यांमार का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Green Peafowl", "Burmese Peacock", "Grey Peacock-pheasant", "Great Hornbill"],
    "options_hi": ["ग्रीन पीफाउल", "बर्मीज़ पीकॉक", "ग्रे पीकॉक-फेज़ेंट", "ग्रेट हॉर्नबिल"],
    "answer_en": "Green Peafowl",
    "answer_hi": "ग्रीन पीफाउल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which is the national flower of Myanmar?",
    "question_hi": "म्यांमार का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Padauk", "Orchid", "Jasmine", "Lotus"],
    "options_hi": ["पदौक", "ऑर्किड", "चमेली", "कमल"],
    "answer_en": "Padauk",
    "answer_hi": "पदौक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the national animal of Thailand?",
    "question_hi": "थाईलैंड का राष्ट्रीय पशु क्या है?",
    "options_en": ["Asian Elephant", "Siamese Fighting Fish", "Water Buffalo", "Gibbon"],
    "options_hi": ["एशियाई हाथी", "सियामी फाइटिंग फिश", "भैंस", "गिब्बन"],
    "answer_en": "Asian Elephant",
    "answer_hi": "एशियाई हाथी",
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