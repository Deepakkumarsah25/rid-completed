const questions = [
   {
    "num": 1,
    "question_en": "Which is the largest country in Africa by area?",
    "question_hi": "क्षेत्रफल के हिसाब से अफ्रीका का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Algeria", "Democratic Republic of Congo", "Sudan", "Libya"],
    "options_hi": ["अल्जीरिया", "कांगो लोकतांत्रिक गणराज्य", "सूडान", "लीबिया"],
    "answer_en": "Algeria",
    "answer_hi": "अल्जीरिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which is the smallest continent by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Australia", "Europe", "Antarctica", "South America"],
    "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which is the largest ocean in the world?",
    "question_hi": "दुनिया का सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which is the smallest ocean in the world?",
    "question_hi": "दुनिया का सबसे छोटा महासागर कौन सा है?",
    "options_en": ["Arctic Ocean", "Indian Ocean", "Southern Ocean", "Atlantic Ocean"],
    "options_hi": ["आर्कटिक महासागर", "हिंद महासागर", "दक्षिणी महासागर", "अटलांटिक महासागर"],
    "answer_en": "Arctic Ocean",
    "answer_hi": "आर्कटिक महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which is the highest mountain peak in the world?",
    "question_hi": "दुनिया की सबसे ऊंची पर्वत चोटी कौन सी है?",
    "options_en": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    "options_hi": ["माउंट एवरेस्ट", "K2", "कंचनजंगा", "ल्होत्से"],
    "answer_en": "Mount Everest",
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which is the longest river in the world?",
    "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Nile", "Amazon", "Yangtze", "Mississippi"],
    "options_hi": ["नील", "अमेज़न", "यांग्त्ज़ी", "मिसिसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which is the largest desert in the world?",
    "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Antarctic Desert", "Sahara Desert", "Arabian Desert", "Gobi Desert"],
    "options_hi": ["अंटार्कटिक रेगिस्तान", "सहारा रेगिस्तान", "अरब रेगिस्तान", "गोबी रेगिस्तान"],
    "answer_en": "Antarctic Desert",
    "answer_hi": "अंटार्कटिक रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is the largest country by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा देश कौन सा है?",
    "options_en": ["Russia", "Canada", "China", "United States"],
    "options_hi": ["रूस", "कनाडा", "चीन", "संयुक्त राज्य अमेरिका"],
    "answer_en": "Russia",
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is the smallest country by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा देश कौन सा है?",
    "options_en": ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    "options_hi": ["वेटिकन सिटी", "मोनाको", "नाउरु", "तुवालू"],
    "answer_en": "Vatican City",
    "answer_hi": "वेटिकन सिटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which is the most populous country in the world?",
    "question_hi": "दुनिया का सबसे अधिक जनसंख्या वाला देश कौन सा है?",
    "options_en": ["China", "India", "United States", "Indonesia"],
    "options_hi": ["चीन", "भारत", "संयुक्त राज्य अमेरिका", "इंडोनेशिया"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is the largest lake in the world?",
    "question_hi": "दुनिया की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Caspian Sea", "Superior", "Victoria", "Huron"],
    "options_hi": ["कैस्पियन सागर", "सुपीरियर", "विक्टोरिया", "ह्यूरॉन"],
    "answer_en": "Caspian Sea",
    "answer_hi": "कैस्पियन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is the deepest ocean in the world?",
    "question_hi": "दुनिया का सबसे गहरा महासागर कौन सा है?",
    "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
    "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "दक्षिणी महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which is the largest island in the world?",
    "question_hi": "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Greenland", "New Guinea", "Borneo", "Madagascar"],
    "options_hi": ["ग्रीनलैंड", "न्यू गिनी", "बोर्नियो", "मेडागास्कर"],
    "answer_en": "Greenland",
    "answer_hi": "ग्रीनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which is the longest mountain range in the world?",
    "question_hi": "दुनिया की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
    "options_en": ["Andes", "Rocky Mountains", "Himalayas", "Great Dividing Range"],
    "options_hi": ["एंडीज", "रॉकी पर्वत", "हिमालय", "ग्रेट डिवाइडिंग रेंज"],
    "answer_en": "Andes",
    "answer_hi": "एंडीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which is the largest river by discharge volume?",
    "question_hi": "निर्वहन मात्रा के हिसाब से सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Amazon", "Congo", "Yangtze", "Orinoco"],
    "options_hi": ["अमेज़न", "कांगो", "यांग्त्ज़ी", "ओरिनोको"],
    "answer_en": "Amazon",
    "answer_hi": "अमेज़न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is the largest waterfall in the world?",
    "question_hi": "दुनिया का सबसे बड़ा झरना कौन सा है?",
    "options_en": ["Angel Falls", "Victoria Falls", "Niagara Falls", "Iguazu Falls"],
    "options_hi": ["एंजल फॉल्स", "विक्टोरिया फॉल्स", "नियाग्रा फॉल्स", "इग्वाज़ू फॉल्स"],
    "answer_en": "Angel Falls",
    "answer_hi": "एंजल फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is the largest coral reef system?",
    "question_hi": "सबसे बड़ी प्रवाल भित्ति प्रणाली कौन सी है?",
    "options_en": ["Great Barrier Reef", "Belize Barrier Reef", "New Caledonia Barrier Reef", "Red Sea Coral Reef"],
    "options_hi": ["ग्रेट बैरियर रीफ", "बेलीज बैरियर रीफ", "न्यू कैलेडोनिया बैरियर रीफ", "लाल सागर प्रवाल भित्ति"],
    "answer_en": "Great Barrier Reef",
    "answer_hi": "ग्रेट बैरियर रीफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is the largest bay in the world?",
    "question_hi": "दुनिया की सबसे बड़ी खाड़ी कौन सी है?",
    "options_en": ["Bay of Bengal", "Hudson Bay", "Bay of Biscay", "Gulf of Mexico"],
    "options_hi": ["बंगाल की खाड़ी", "हडसन की खाड़ी", "बिस्के की खाड़ी", "मेक्सिको की खाड़ी"],
    "answer_en": "Bay of Bengal",
    "answer_hi": "बंगाल की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which is the largest gulf in the world?",
    "question_hi": "दुनिया की सबसे बड़ी खाड़ी कौन सी है?",
    "options_en": ["Gulf of Mexico", "Persian Gulf", "Gulf of Guinea", "Gulf of Alaska"],
    "options_hi": ["मेक्सिको की खाड़ी", "फारस की खाड़ी", "गिनी की खाड़ी", "अलास्का की खाड़ी"],
    "answer_en": "Gulf of Mexico",
    "answer_hi": "मेक्सिको की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is the largest peninsula in the world?",
    "question_hi": "दुनिया का सबसे बड़ा प्रायद्वीप कौन सा है?",
    "options_en": ["Arabian Peninsula", "Indian Peninsula", "Alaska Peninsula", "Labrador Peninsula"],
    "options_hi": ["अरब प्रायद्वीप", "भारतीय प्रायद्वीप", "अलास्का प्रायद्वीप", "लैब्राडोर प्रायद्वीप"],
    "answer_en": "Arabian Peninsula",
    "answer_hi": "अरब प्रायद्वीप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which is the largest archipelago in the world?",
    "question_hi": "दुनिया का सबसे बड़ा द्वीपसमूह कौन सा है?",
    "options_en": ["Malay Archipelago", "Canadian Arctic Archipelago", "Japanese Archipelago", "Philippine Archipelago"],
    "options_hi": ["मलय द्वीपसमूह", "कनाडाई आर्कटिक द्वीपसमूह", "जापानी द्वीपसमूह", "फिलीपीन द्वीपसमूह"],
    "answer_en": "Malay Archipelago",
    "answer_hi": "मलय द्वीपसमूह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
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
    "num": 23,
    "question_en": "Which is the largest glacier in the world?",
    "question_hi": "दुनिया का सबसे बड़ा ग्लेशियर कौन सा है?",
    "options_en": ["Lambert Glacier", "Fedchenko Glacier", "Siachen Glacier", "Batura Glacier"],
    "options_hi": ["लैम्बर्ट ग्लेशियर", "फेडचेंको ग्लेशियर", "सियाचिन ग्लेशियर", "बतुरा ग्लेशियर"],
    "answer_en": "Lambert Glacier",
    "answer_hi": "लैम्बर्ट ग्लेशियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which is the largest delta in the world?",
    "question_hi": "दुनिया का सबसे बड़ा डेल्टा कौन सा है?",
    "options_en": ["Ganges-Brahmaputra Delta", "Mississippi Delta", "Nile Delta", "Mekong Delta"],
    "options_hi": ["गंगा-ब्रह्मपुत्र डेल्टा", "मिसिसिपी डेल्टा", "नील डेल्टा", "मेकांग डेल्टा"],
    "answer_en": "Ganges-Brahmaputra Delta",
    "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is the largest estuary in the world?",
    "question_hi": "दुनिया का सबसे बड़ा मुहाना कौन सा है?",
    "options_en": ["Gulf of Ob", "La Plata River", "St. Lawrence River", "Amazon River"],
    "options_hi": ["ओब की खाड़ी", "ला प्लाटा नदी", "सेंट लॉरेंस नदी", "अमेज़न नदी"],
    "answer_en": "Gulf of Ob",
    "answer_hi": "ओब की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is the largest saltwater lake in the world?",
    "question_hi": "दुनिया की सबसे बड़ी खारे पानी की झील कौन सी है?",
    "options_en": ["Caspian Sea", "Aral Sea", "Lake Balkhash", "Great Salt Lake"],
    "options_hi": ["कैस्पियन सागर", "अरल सागर", "बाल्काश झील", "ग्रेट सॉल्ट लेक"],
    "answer_en": "Caspian Sea",
    "answer_hi": "कैस्पियन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which is the largest freshwater lake in the world?",
    "question_hi": "दुनिया की सबसे बड़ी मीठे पानी की झील कौन सी है?",
    "options_en": ["Lake Superior", "Lake Victoria", "Lake Huron", "Lake Michigan"],
    "options_hi": ["सुपीरियर झील", "विक्टोरिया झील", "ह्यूरॉन झील", "मिशिगन झील"],
    "answer_en": "Lake Superior",
    "answer_hi": "सुपीरियर झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is the largest hot desert in the world?",
    "question_hi": "दुनिया का सबसे बड़ा गर्म रेगिस्तान कौन सा है?",
    "options_en": ["Sahara", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
    "options_hi": ["सहारा", "अरब रेगिस्तान", "गोबी रेगिस्तान", "कालाहारी रेगिस्तान"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which is the largest cold desert in the world?",
    "question_hi": "दुनिया का सबसे बड़ा ठंडा रेगिस्तान कौन सा है?",
    "options_en": ["Antarctic Desert", "Arctic Desert", "Gobi Desert", "Patagonian Desert"],
    "options_hi": ["अंटार्कटिक रेगिस्तान", "आर्कटिक रेगिस्तान", "गोबी रेगिस्तान", "पैटागोनियन रेगिस्तान"],
    "answer_en": "Antarctic Desert",
    "answer_hi": "अंटार्कटिक रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which is the largest rainforest in the world?",
    "question_hi": "दुनिया का सबसे बड़ा वर्षावन कौन सा है?",
    "options_en": ["Amazon Rainforest", "Congo Rainforest", "Daintree Rainforest", "Southeast Asian Rainforest"],
    "options_hi": ["अमेज़न वर्षावन", "कांगो वर्षावन", "डेंट्री वर्षावन", "दक्षिणपूर्व एशियाई वर्षावन"],
    "answer_en": "Amazon Rainforest",
    "answer_hi": "अमेज़न वर्षावन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which is the largest continent by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
    "options_en": ["Asia", "Africa", "North America", "South America"],
    "options_hi": ["एशिया", "अफ्रीका", "उत्तर अमेरिका", "दक्षिण अमेरिका"],
    "answer_en": "Asia",
    "answer_hi": "एशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the largest country in Europe by area?",
    "question_hi": "क्षेत्रफल के हिसाब से यूरोप का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Russia", "Ukraine", "France", "Spain"],
    "options_hi": ["रूस", "यूक्रेन", "फ्रांस", "स्पेन"],
    "answer_en": "Russia",
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which is the largest country in South America by area?",
    "question_hi": "क्षेत्रफल के हिसाब से दक्षिण अमेरिका का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Brazil", "Argentina", "Peru", "Colombia"],
    "options_hi": ["ब्राजील", "अर्जेंटीना", "पेरू", "कोलंबिया"],
    "answer_en": "Brazil",
    "answer_hi": "ब्राजील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is the largest country in North America by area?",
    "question_hi": "क्षेत्रफल के हिसाब से उत्तर अमेरिका का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Canada", "United States", "Mexico", "Greenland"],
    "options_hi": ["कनाडा", "संयुक्त राज्य अमेरिका", "मेक्सिको", "ग्रीनलैंड"],
    "answer_en": "Canada",
    "answer_hi": "कनाडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which is the largest country in Asia by area?",
    "question_hi": "क्षेत्रफल के हिसाब से एशिया का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Russia", "China", "India", "Kazakhstan"],
    "options_hi": ["रूस", "चीन", "भारत", "कजाकिस्तान"],
    "answer_en": "Russia",
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which is the largest country in Oceania by area?",
    "question_hi": "क्षेत्रफल के हिसाब से ओशिनिया का सबसे बड़ा देश कौन सा है?",
    "options_en": ["Australia", "Papua New Guinea", "New Zealand", "Fiji"],
    "options_hi": ["ऑस्ट्रेलिया", "पापुआ न्यू गिनी", "न्यूजीलैंड", "फिजी"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which is the most populous city in the world?",
    "question_hi": "दुनिया का सबसे अधिक जनसंख्या वाला शहर कौन सा है?",
    "options_en": ["Tokyo", "Delhi", "Shanghai", "São Paulo"],
    "options_hi": ["टोक्यो", "दिल्ली", "शंघाई", "साओ पाउलो"],
    "answer_en": "Tokyo",
    "answer_hi": "टोक्यो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is the highest capital city in the world?",
    "question_hi": "दुनिया की सबसे ऊंची राजधानी कौन सी है?",
    "options_en": ["La Paz", "Quito", "Thimphu", "Bogotá"],
    "options_hi": ["ला पाज़", "क्विटो", "थिम्फू", "बोगोटा"],
    "answer_en": "La Paz",
    "answer_hi": "ला पाज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which is the lowest point on Earth's surface?",
    "question_hi": "पृथ्वी की सतह पर सबसे निचला बिंदु कौन सा है?",
    "options_en": ["Dead Sea", "Mariana Trench", "Death Valley", "Lake Assal"],
    "options_hi": ["मृत सागर", "मारियाना ट्रेंच", "डेथ वैली", "अस्सल झील"],
    "answer_en": "Mariana Trench",
    "answer_hi": "मारियाना ट्रेंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is the highest plateau in the world?",
    "question_hi": "दुनिया का सबसे ऊंचा पठार कौन सा है?",
    "options_en": ["Tibetan Plateau", "Colorado Plateau", "Deccan Plateau", "Anatolian Plateau"],
    "options_hi": ["तिब्बती पठार", "कोलोराडो पठार", "दक्कन पठार", "अनातोलियन पठार"],
    "answer_en": "Tibetan Plateau",
    "answer_hi": "तिब्बती पठार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which is the largest sea in the world?",
    "question_hi": "दुनिया का सबसे बड़ा सागर कौन सा है?",
    "options_en": ["Philippine Sea", "Coral Sea", "Arabian Sea", "South China Sea"],
    "options_hi": ["फिलीपीन सागर", "कोरल सागर", "अरब सागर", "दक्षिण चीन सागर"],
    "answer_en": "Philippine Sea",
    "answer_hi": "फिलीपीन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which is the largest river island in the world?",
    "question_hi": "दुनिया का सबसे बड़ा नदी द्वीप कौन सा है?",
    "options_en": ["Majuli", "Bananal Island", "Marajó Island", "Ilha do Bananal"],
    "options_hi": ["माजुली", "बनानल द्वीप", "मरजो द्वीप", "इल्हा दो बनानल"],
    "answer_en": "Majuli",
    "answer_hi": "माजुली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which is the largest waterfall by width?",
    "question_hi": "चौड़ाई के हिसाब से सबसे बड़ा झरना कौन सा है?",
    "options_en": ["Khone Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
    "options_hi": ["खोन फॉल्स", "नियाग्रा फॉल्स", "विक्टोरिया फॉल्स", "इग्वाज़ू फॉल्स"],
    "answer_en": "Khone Falls",
    "answer_hi": "खोन फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is the largest active volcano in the world?",
    "question_hi": "दुनिया का सबसे बड़ा सक्रिय ज्वालामुखी कौन सा है?",
    "options_en": ["Mauna Loa", "Mount Etna", "Mount Fuji", "Popocatépetl"],
    "options_hi": ["मौना लोआ", "माउंट एटना", "माउंट फ़ूजी", "पोपोकाटेपेट्ल"],
    "answer_en": "Mauna Loa",
    "answer_hi": "मौना लोआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is the largest cave chamber in the world?",
    "question_hi": "दुनिया का सबसे बड़ा गुफा कक्ष कौन सा है?",
    "options_en": ["Sarawak Chamber", "Sơn Đoòng Cave", "Mammoth Cave", "Krubera Cave"],
    "options_hi": ["सरवाक चैम्बर", "सोन डूंग गुफा", "मैमथ गुफा", "क्रुबेरा गुफा"],
    "answer_en": "Sarawak Chamber",
    "answer_hi": "सरवाक चैम्बर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is the longest cave system in the world?",
    "question_hi": "दुनिया की सबसे लंबी गुफा प्रणाली कौन सी है?",
    "options_en": ["Mammoth Cave", "Jewel Cave", "Optymistychna Cave", "Wind Cave"],
    "options_hi": ["मैमथ गुफा", "ज्वेल केव", "ऑप्टिमिस्टिचना गुफा", "विंड केव"],
    "answer_en": "Mammoth Cave",
    "answer_hi": "मैमथ गुफा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which is the largest canyon in the world?",
    "question_hi": "दुनिया का सबसे बड़ा कैन्यन कौन सा है?",
    "options_en": ["Grand Canyon", "Yarlung Tsangpo Canyon", "Cotahuasi Canyon", "Colca Canyon"],
    "options_hi": ["ग्रैंड कैन्यन", "यारलुंग त्संगपो कैन्यन", "कोटाहुआसी कैन्यन", "कोलका कैन्यन"],
    "answer_en": "Grand Canyon",
    "answer_hi": "ग्रैंड कैन्यन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which is the largest atoll in the world?",
    "question_hi": "दुनिया का सबसे बड़ा एटोल कौन सा है?",
    "options_en": ["Great Chagos Bank", "Kiritimati", "Aldabra", "Kwajalein"],
    "options_hi": ["ग्रेट चागोस बैंक", "किरिटीमती", "अल्दाबरा", "क्वाजालीन"],
    "answer_en": "Great Chagos Bank",
    "answer_hi": "ग्रेट चागोस बैंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is the largest fjord in the world?",
    "question_hi": "दुनिया का सबसे बड़ा फियोर्ड कौन सा है?",
    "options_en": ["Scoresby Sund", "Sognefjord", "Geirangerfjord", "Milford Sound"],
    "options_hi": ["स्कोरबीसंड", "सोग्नेफियोर्ड", "गीरेंगरफियोर्ड", "मिलफोर्ड साउंड"],
    "answer_en": "Scoresby Sund",
    "answer_hi": "स्कोरबीसंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is the largest sand desert in the world?",
    "question_hi": "दुनिया का सबसे बड़ा रेतीला रेगिस्तान कौन सा है?",
    "options_en": ["Rub' al Khali", "Sahara", "Arabian Desert", "Great Sandy Desert"],
    "options_hi": ["रुब अल खाली", "सहारा", "अरब रेगिस्तान", "ग्रेट सैंडी डेजर्ट"],
    "answer_en": "Rub' al Khali",
    "answer_hi": "रुब अल खाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which is the largest river in Europe?",
    "question_hi": "यूरोप की सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Volga", "Danube", "Ural", "Dnieper"],
    "options_hi": ["वोल्गा", "डेन्यूब", "यूराल", "डिनीपर"],
    "answer_en": "Volga",
    "answer_hi": "वोल्गा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which is the largest river in Africa?",
    "question_hi": "अफ्रीका की सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Nile", "Congo", "Niger", "Zambezi"],
    "options_hi": ["नील", "कांगो", "नाइजर", "जाम्बेजी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which is the largest river in Asia?",
    "question_hi": "एशिया की सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Yangtze", "Yenisei", "Lena", "Mekong"],
    "options_hi": ["यांग्त्ज़ी", "येनिसी", "लेना", "मेकांग"],
    "answer_en": "Yangtze",
    "answer_hi": "यांग्त्ज़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which is the largest river in North America?",
    "question_hi": "उत्तर अमेरिका की सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Mississippi-Missouri", "Yukon", "Rio Grande", "St. Lawrence"],
    "options_hi": ["मिसिसिपी-मिसौरी", "युकोन", "रियो ग्रांडे", "सेंट लॉरेंस"],
    "answer_en": "Mississippi-Missouri",
    "answer_hi": "मिसिसिपी-मिसौरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which is the largest river in South America?",
    "question_hi": "दक्षिण अमेरिका की सबसे बड़ी नदी कौन सी है?",
    "options_en": ["Amazon", "Paraná", "Orinoco", "Madeira"],
    "options_hi": ["अमेज़न", "पराना", "ओरिनोको", "मदेइरा"],
    "answer_en": "Amazon",
    "answer_hi": "अमेज़न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which is the largest lake in Africa?",
    "question_hi": "अफ्रीका की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
    "options_hi": ["विक्टोरिया झील", "तांगान्यिका झील", "मलावी झील", "चाड झील"],
    "answer_en": "Lake Victoria",
    "answer_hi": "विक्टोरिया झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which is the largest lake in Europe?",
    "question_hi": "यूरोप की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Ladoga", "Onega", "Vänern", "Saimaa"],
    "options_hi": ["लाडोगा", "ओनेगा", "वेनर्न", "सैमा"],
    "answer_en": "Ladoga",
    "answer_hi": "लाडोगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which is the largest lake in Asia?",
    "question_hi": "एशिया की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Caspian Sea", "Baikal", "Balkhash", "Taymyr"],
    "options_hi": ["कैस्पियन सागर", "बैकाल", "बाल्काश", "तैमीर"],
    "answer_en": "Caspian Sea",
    "answer_hi": "कैस्पियन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which is the largest lake in North America?",
    "question_hi": "उत्तर अमेरिका की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Lake Superior", "Lake Huron", "Lake Michigan", "Great Bear Lake"],
    "options_hi": ["सुपीरियर झील", "ह्यूरॉन झील", "मिशिगन झील", "ग्रेट बेयर लेक"],
    "answer_en": "Lake Superior",
    "answer_hi": "सुपीरियर झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which is the largest lake in South America?",
    "question_hi": "दक्षिण अमेरिका की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Lake Titicaca", "Lake Maracaibo", "Lake Poopó", "Lake Buenos Aires"],
    "options_hi": ["टिटिकाका झील", "मराकाइबो झील", "पूपो झील", "ब्यूनस आयर्स झील"],
    "answer_en": "Lake Titicaca",
    "answer_hi": "टिटिकाका झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which is the largest mountain in Africa?",
    "question_hi": "अफ्रीका का सबसे बड़ा पर्वत कौन सा है?",
    "options_en": ["Mount Kilimanjaro", "Mount Kenya", "Mount Stanley", "Mount Meru"],
    "options_hi": ["माउंट किलिमंजारो", "माउंट केन्या", "माउंट स्टैनली", "माउंट मेरु"],
    "answer_en": "Mount Kilimanjaro",
    "answer_hi": "माउंट किलिमंजारो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which is the largest mountain in Europe?",
    "question_hi": "यूरोप का सबसे बड़ा पर्वत कौन सा है?",
    "options_en": ["Mount Elbrus", "Mont Blanc", "Monte Rosa", "Matterhorn"],
    "options_hi": ["माउंट एल्ब्रुस", "मोंट ब्लां", "मोंटे रोसा", "मैटरहॉर्न"],
    "answer_en": "Mount Elbrus",
    "answer_hi": "माउंट एल्ब्रुस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which is the largest mountain in North America?",
    "question_hi": "उत्तर अमेरिका का सबसे बड़ा पर्वत कौन सा है?",
    "options_en": ["Denali", "Mount Logan", "Pico de Orizaba", "Mount Saint Elias"],
    "options_hi": ["डेनाली", "माउंट लोगन", "पिको डे ओरिज़ाबा", "माउंट सेंट एलियास"],
    "answer_en": "Denali",
    "answer_hi": "डेनाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which is the largest mountain in South America?",
    "question_hi": "दक्षिण अमेरिका का सबसे बड़ा पर्वत कौन सा है?",
    "options_en": ["Aconcagua", "Ojos del Salado", "Monte Pissis", "Huascarán"],
    "options_hi": ["अकोंकागुआ", "ओजोस डेल सलाडो", "मोंटे पिसिस", "हुआस्कारान"],
    "answer_en": "Aconcagua",
    "answer_hi": "अकोंकागुआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which is the largest desert in Asia?",
    "question_hi": "एशिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Gobi Desert", "Arabian Desert", "Karakum Desert", "Kyzylkum Desert"],
    "options_hi": ["गोबी रेगिस्तान", "अरब रेगिस्तान", "कराकुम रेगिस्तान", "किज़िलकुम रेगिस्तान"],
    "answer_en": "Arabian Desert",
    "answer_hi": "अरब रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which is the largest desert in Africa?",
    "question_hi": "अफ्रीका का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Sahara", "Kalahari", "Namib", "Libyan Desert"],
    "options_hi": ["सहारा", "कालाहारी", "नामिब", "लीबियाई रेगिस्तान"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which is the largest desert in Australia?",
    "question_hi": "ऑस्ट्रेलिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Great Victoria Desert", "Great Sandy Desert", "Tanami Desert", "Simpson Desert"],
    "options_hi": ["ग्रेट विक्टोरिया डेजर्ट", "ग्रेट सैंडी डेजर्ट", "तनामी रेगिस्तान", "सिम्पसन रेगिस्तान"],
    "answer_en": "Great Victoria Desert",
    "answer_hi": "ग्रेट विक्टोरिया डेजर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which is the largest island in the Mediterranean Sea?",
    "question_hi": "भूमध्य सागर का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Sicily", "Sardinia", "Cyprus", "Crete"],
    "options_hi": ["सिसिली", "सार्डिनिया", "साइप्रस", "क्रेते"],
    "answer_en": "Sicily",
    "answer_hi": "सिसिली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which is the largest island in the Caribbean Sea?",
    "question_hi": "कैरेबियन सागर का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Cuba", "Hispaniola", "Jamaica", "Puerto Rico"],
    "options_hi": ["क्यूबा", "हिस्पानियोला", "जमैका", "प्यूर्टो रिको"],
    "answer_en": "Cuba",
    "answer_hi": "क्यूबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which is the largest island in the Indian Ocean?",
    "question_hi": "हिंद महासागर का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Madagascar", "Sri Lanka", "Sumatra", "Java"],
    "options_hi": ["मेडागास्कर", "श्रीलंका", "सुमात्रा", "जावा"],
    "answer_en": "Madagascar",
    "answer_hi": "मेडागास्कर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which is the largest island in the Pacific Ocean?",
    "question_hi": "प्रशांत महासागर का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["New Guinea", "Borneo", "Sumatra", "Honshu"],
    "options_hi": ["न्यू गिनी", "बोर्नियो", "सुमात्रा", "होंशू"],
    "answer_en": "New Guinea",
    "answer_hi": "न्यू गिनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
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
    "num": 73,
    "question_en": "Which is the largest country without a coastline?",
    "question_hi": "बिना तटरेखा वाला सबसे बड़ा देश कौन सा है?",
    "options_en": ["Kazakhstan", "Mongolia", "Chad", "Niger"],
    "options_hi": ["कजाकिस्तान", "मंगोलिया", "चाड", "नाइजर"],
    "answer_en": "Kazakhstan",
    "answer_hi": "कजाकिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which is the largest country completely in the Southern Hemisphere?",
    "question_hi": "दक्षिणी गोलार्ध में पूरी तरह से स्थित सबसे बड़ा देश कौन सा है?",
    "options_en": ["Australia", "Brazil", "Argentina", "South Africa"],
    "options_hi": ["ऑस्ट्रेलिया", "ब्राजील", "अर्जेंटीना", "दक्षिण अफ्रीका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which is the largest country completely in the Northern Hemisphere?",
    "question_hi": "उत्तरी गोलार्ध में पूरी तरह से स्थित सबसे बड़ा देश कौन सा है?",
    "options_en": ["Russia", "Canada", "China", "United States"],
    "options_hi": ["रूस", "कनाडा", "चीन", "संयुक्त राज्य अमेरिका"],
    "answer_en": "Russia",
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which is the largest country that lies in both Europe and Asia?",
    "question_hi": "यूरोप और एशिया दोनों में स्थित सबसे बड़ा देश कौन सा है?",
    "options_en": ["Russia", "Turkey", "Kazakhstan", "Georgia"],
    "options_hi": ["रूस", "तुर्की", "कजाकिस्तान", "जॉर्जिया"],
    "answer_en": "Russia",
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which is the largest landlocked country in South America?",
    "question_hi": "दक्षिण अमेरिका का सबसे बड़ा भू-आवेष्ठित देश कौन सा है?",
    "options_en": ["Bolivia", "Paraguay", "Peru", "Colombia"],
    "options_hi": ["बोलीविया", "पराग्वे", "पेरू", "कोलंबिया"],
    "answer_en": "Bolivia",
    "answer_hi": "बोलीविया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which is the largest landlocked country in Africa?",
    "question_hi": "अफ्रीका का सबसे बड़ा भू-आवेष्ठित देश कौन सा है?",
    "options_en": ["Chad", "Niger", "Mali", "Ethiopia"],
    "options_hi": ["चाड", "नाइजर", "माली", "इथियोपिया"],
    "answer_en": "Chad",
    "answer_hi": "चाड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which is the largest landlocked country in Europe?",
    "question_hi": "यूरोप का सबसे बड़ा भू-आवेष्ठित देश कौन सा है?",
    "options_en": ["Kazakhstan", "Mongolia", "Austria", "Hungary"],
    "options_hi": ["कजाकिस्तान", "मंगोलिया", "ऑस्ट्रिया", "हंगरी"],
    "answer_en": "Kazakhstan",
    "answer_hi": "कजाकिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which is the largest country with only one time zone?",
    "question_hi": "केवल एक समय क्षेत्र वाला सबसे बड़ा देश कौन सा है?",
    "options_en": ["China", "India", "Russia", "United States"],
    "options_hi": ["चीन", "भारत", "रूस", "संयुक्त राज्य अमेरिका"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which is the largest country by number of time zones?",
    "question_hi": "समय क्षेत्रों की संख्या के हिसाब से सबसे बड़ा देश कौन सा है?",
    "options_en": ["Russia", "United States", "Canada", "Australia"],
    "options_hi": ["रूस", "संयुक्त राज्य अमेरिका", "कनाडा", "ऑस्ट्रेलिया"],
    "answer_en": "Russia",
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
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
    "num": 83,
    "question_en": "Which is the largest drainage basin in the world?",
    "question_hi": "दुनिया का सबसे बड़ा जल निकासी बेसिन कौन सा है?",
    "options_en": ["Atlantic Ocean Basin", "Pacific Ocean Basin", "Indian Ocean Basin", "Arctic Ocean Basin"],
    "options_hi": ["अटलांटिक महासागर बेसिन", "प्रशांत महासागर बेसिन", "हिंद महासागर बेसिन", "आर्कटिक महासागर बेसिन"],
    "answer_en": "Atlantic Ocean Basin",
    "answer_hi": "अटलांटिक महासागर बेसिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which is the largest tectonic plate?",
    "question_hi": "सबसे बड़ी टेक्टोनिक प्लेट कौन सी है?",
    "options_en": ["Pacific Plate", "North American Plate", "Eurasian Plate", "African Plate"],
    "options_hi": ["प्रशांत प्लेट", "उत्तर अमेरिकी प्लेट", "यूरेशियन प्लेट", "अफ्रीकी प्लेट"],
    "answer_en": "Pacific Plate",
    "answer_hi": "प्रशांत प्लेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which is the largest continent by population?",
    "question_hi": "जनसंख्या के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
    "options_en": ["Asia", "Africa", "Europe", "North America"],
    "options_hi": ["एशिया", "अफ्रीका", "यूरोप", "उत्तर अमेरिका"],
    "answer_en": "Asia",
    "answer_hi": "एशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which is the smallest continent by population?",
    "question_hi": "जनसंख्या के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Antarctica", "Australia", "South America", "Europe"],
    "options_hi": ["अंटार्कटिका", "ऑस्ट्रेलिया", "दक्षिण अमेरिका", "यूरोप"],
    "answer_en": "Antarctica",
    "answer_hi": "अंटार्कटिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which is the largest country by population density?",
    "question_hi": "जनसंख्या घनत्व के हिसाब से सबसे बड़ा देश कौन सा है?",
    "options_en": ["Monaco", "Singapore", "Bahrain", "Bangladesh"],
    "options_hi": ["मोनाको", "सिंगापुर", "बहरीन", "बांग्लादेश"],
    "answer_en": "Monaco",
    "answer_hi": "मोनाको",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which is the largest country by land area only?",
    "question_hi": "केवल भूमि क्षेत्र के हिसाब से सबसे बड़ा देश कौन सा है?",
    "options_en": ["Russia", "Canada", "China", "United States"],
    "options_hi": ["रूस", "कनाडा", "चीन", "संयुक्त राज्य अमेरिका"],
    "answer_en": "Russia",
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which is the largest country including water area?",
    "question_hi": "जल क्षेत्र सहित सबसे बड़ा देश कौन सा है?",
    "options_en": ["Russia", "Canada", "United States", "China"],
    "options_hi": ["रूस", "कनाडा", "संयुक्त राज्य अमेरिका", "चीन"],
    "answer_en": "Russia",
    "answer_hi": "रूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which is the largest gulf by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ी खाड़ी कौन सी है?",
    "options_en": ["Gulf of Mexico", "Gulf of Guinea", "Persian Gulf", "Gulf of Alaska"],
    "options_hi": ["मेक्सिको की खाड़ी", "गिनी की खाड़ी", "फारस की खाड़ी", "अलास्का की खाड़ी"],
    "answer_en": "Gulf of Mexico",
    "answer_hi": "मेक्सिको की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which is the largest sea by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा सागर कौन सा है?",
    "options_en": ["Philippine Sea", "Coral Sea", "Arabian Sea", "South China Sea"],
    "options_hi": ["फिलीपीन सागर", "कोरल सागर", "अरब सागर", "दक्षिण चीन सागर"],
    "answer_en": "Philippine Sea",
    "answer_hi": "फिलीपीन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which is the largest bay by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ी खाड़ी कौन सी है?",
    "options_en": ["Bay of Bengal", "Hudson Bay", "Bay of Biscay", "Chesapeake Bay"],
    "options_hi": ["बंगाल की खाड़ी", "हडसन की खाड़ी", "बिस्के की खाड़ी", "चेसापीक खाड़ी"],
    "answer_en": "Bay of Bengal",
    "answer_hi": "बंगाल की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which is the largest strait by width?",
    "question_hi": "चौड़ाई के हिसाब से सबसे बड़ी जलसंधि कौन सी है?",
    "options_en": ["Davis Strait", "Denmark Strait", "Mozambique Channel", "Taiwan Strait"],
    "options_hi": ["डेविस जलसंधि", "डेनमार्क जलसंधि", "मोज़ाम्बिक चैनल", "ताइवान जलसंधि"],
    "answer_en": "Davis Strait",
    "answer_hi": "डेविस जलसंधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which is the largest channel in the world?",
    "question_hi": "दुनिया का सबसे बड़ा चैनल कौन सा है?",
    "options_en": ["Mozambique Channel", "English Channel", "Florida Strait", "Korea Strait"],
    "options_hi": ["मोज़ाम्बिक चैनल", "अंग्रेजी चैनल", "फ्लोरिडा जलसंधि", "कोरिया जलसंधि"],
    "answer_en": "Mozambique Channel",
    "answer_hi": "मोज़ाम्बिक चैनल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which is the largest waterfall by volume of water?",
    "question_hi": "पानी की मात्रा के हिसाब से सबसे बड़ा झरना कौन सा है?",
    "options_en": ["Inga Falls", "Boyoma Falls", "Niagara Falls", "Victoria Falls"],
    "options_hi": ["इंगा फॉल्स", "बोयोमा फॉल्स", "नियाग्रा फॉल्स", "विक्टोरिया फॉल्स"],
    "answer_en": "Inga Falls",
    "answer_hi": "इंगा फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which is the largest glacier outside the polar regions?",
    "question_hi": "ध्रुवीय क्षेत्रों के बाहर सबसे बड़ा ग्लेशियर कौन सा है?",
    "options_en": ["Fedchenko Glacier", "Siachen Glacier", "Batura Glacier", "Hispar Glacier"],
    "options_hi": ["फेडचेंको ग्लेशियर", "सियाचिन ग्लेशियर", "बतुरा ग्लेशियर", "हिस्पर ग्लेशियर"],
    "answer_en": "Fedchenko Glacier",
    "answer_hi": "फेडचेंको ग्लेशियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which is the largest river delta by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा नदी डेल्टा कौन सा है?",
    "options_en": ["Ganges-Brahmaputra Delta", "Mississippi Delta", "Nile Delta", "Mekong Delta"],
    "options_hi": ["गंगा-ब्रह्मपुत्र डेल्टा", "मिसिसिपी डेल्टा", "नील डेल्टा", "मेकांग डेल्टा"],
    "answer_en": "Ganges-Brahmaputra Delta",
    "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which is the largest archipelago by number of islands?",
    "question_hi": "द्वीपों की संख्या के हिसाब से सबसे बड़ा द्वीपसमूह कौन सा है?",
    "options_en": ["Indonesian Archipelago", "Philippine Archipelago", "Canadian Arctic Archipelago", "Japanese Archipelago"],
    "options_hi": ["इंडोनेशियाई द्वीपसमूह", "फिलीपीन द्वीपसमूह", "कनाडाई आर्कटिक द्वीपसमूह", "जापानी द्वीपसमूह"],
    "answer_en": "Indonesian Archipelago",
    "answer_hi": "इंडोनेशियाई द्वीपसमूह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which is the largest volcanic crater in the world?",
    "question_hi": "दुनिया का सबसे बड़ा ज्वालामुखीय क्रेटर कौन सा है?",
    "options_en": ["Ngorongoro Crater", "Yellowstone Caldera", "Mount Aso", "Lake Toba"],
    "options_hi": ["एन्गोरोंगोरो क्रेटर", "येलोस्टोन कैल्डेरा", "माउंट आसो", "टोबा झील"],
    "answer_en": "Ngorongoro Crater",
    "answer_hi": "एन्गोरोंगोरो क्रेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which is the largest impact crater on Earth?",
    "question_hi": "पृथ्वी पर सबसे बड़ा प्रभाव क्रेटर कौन सा है?",
    "options_en": ["Vredefort Crater", "Chicxulub Crater", "Sudbury Basin", "Popigai Crater"],
    "options_hi": ["व्रेडफोर्ट क्रेटर", "चिक्सुलुब क्रेटर", "सडबरी बेसिन", "पोपिगाई क्रेटर"],
    "answer_en": "Vredefort Crater",
    "answer_hi": "व्रेडफोर्ट क्रेटर",
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