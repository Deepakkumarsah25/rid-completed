const questions = 
[
  {
    "num": 1,
    "question_en": "What is the chemical formula of Sulfuric Acid?",
    "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
    "options_en": ["H2SO4", "HCl", "HNO3", "CH3COOH"],
    "options_hi": ["H2SO4", "HCl", "HNO3", "CH3COOH"],
    "answer_en": "H2SO4",
    "answer_hi": "H2SO4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which device is used to measure atmospheric pressure?",
    "question_hi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
    "options_hi": ["हाइग्रोमीटर", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who is known as the 'Father of Geometry'?",
    "question_hi": "'ज्यामिति के जनक' के रूप में किसे जाना जाता है?",
    "options_en": ["Aristotle", "Pythagoras", "Euclid", "Archimedes"],
    "options_hi": ["अरस्तू", "पाइथागोरस", "यूक्लिड", "आर्किमिडीज"],
    "answer_en": "Euclid",
    "answer_hi": "यूक्लिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which organ in the human body is responsible for pumping blood?",
    "question_hi": "मानव शरीर में कौन सा अंग रक्त पंप करने के लिए जिम्मेदार है?",
    "options_en": ["Lungs", "Heart", "Liver", "Kidneys"],
    "options_hi": ["फेफड़े", "हृदय", "यकृत", "गुर्दे"],
    "answer_en": "Heart",
    "answer_hi": "हृदय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the currency of the United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम की मुद्रा क्या है?",
    "options_en": ["Euro", "Dollar", "Pound", "Yen"],
    "options_hi": ["यूरो", "डॉलर", "पाउंड", "येन"],
    "answer_en": "Pound",
    "answer_hi": "पाउंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
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
    "num": 7,
    "question_en": "Who wrote the epic 'Ramayana'?",
    "question_hi": "महाकाव्य 'रामायण' किसने लिखा?",
    "options_en": ["Ved Vyas", "Valmiki", "Tulsidas", "Kalidas"],
    "options_hi": ["वेद व्यास", "वाल्मीकि", "तुलसीदास", "कालिदास"],
    "answer_en": "Valmiki",
    "answer_hi": "वाल्मीकि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the SI unit of electric current?",
    "question_hi": "विद्युत धारा की SI इकाई क्या है?",
    "options_en": ["Volt", "Watt", "Ampere", "Ohm"],
    "options_hi": ["वोल्ट", "वाट", "एम्पीयर", "ओम"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is the largest planet in our solar system?",
    "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Earth", "Jupiter", "Saturn", "Neptune"],
    "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "वरुण"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Who was the first person to walk on the moon?",
    "question_hi": "चंद्रमा पर कदम रखने वाले पहले व्यक्ति कौन थे?",
    "options_en": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
    "options_hi": ["नील आर्मस्ट्रांग", "बज़ एल्ड्रिन", "यूरी गगारिन", "माइकल कोलिन्स"],
    "answer_en": "Neil Armstrong",
    "answer_hi": "नील आर्मस्ट्रांग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the capital of France?",
    "question_hi": "फ्रांस की राजधानी क्या है?",
    "options_en": ["Berlin", "London", "Paris", "Madrid"],
    "options_hi": ["बर्लिन", "लंदन", "पेरिस", "मैड्रिड"],
    "answer_en": "Paris",
    "answer_hi": "पेरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is the longest bone in the human body?",
    "question_hi": "मानव शरीर में सबसे लंबी हड्डी कौन सी है?",
    "options_en": ["Femur", "Tibia", "Fibula", "Humerus"],
    "options_hi": ["फीमर", "टिबिया", "फिबुला", "ह्यूमरस"],
    "answer_en": "Femur",
    "answer_hi": "फीमर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Who invented the computer?",
    "question_hi": "कंप्यूटर का आविष्कार किसने किया?",
    "options_en": ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
    "options_hi": ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "स्टीव जॉब्स", "बिल गेट्स"],
    "answer_en": "Charles Babbage",
    "answer_hi": "चार्ल्स बैबेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the chemical symbol of Iron?",
    "question_hi": "आयरन का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ir", "Fe", "In", "Io"],
    "options_hi": ["Ir", "Fe", "In", "Io"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which is the national bird of India?",
    "question_hi": "भारत का राष्ट्रीय पक्षी क्या है?",
    "options_en": ["Peacock", "Parrot", "Sparrow", "Crow"],
    "options_hi": ["मोर", "तोता", "गौरैया", "कौआ"],
    "answer_en": "Peacock",
    "answer_hi": "मोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the freezing point of water?",
    "question_hi": "पानी का हिमांक कितना होता है?",
    "options_en": ["0°C", "10°C", "-10°C", "100°C"],
    "options_hi": ["0°C", "10°C", "-10°C", "100°C"],
    "answer_en": "0°C",
    "answer_hi": "0°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Who was the first Prime Minister of India?",
    "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Lal Bahadur Shastri"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल", "लाल बहादुर शास्त्री"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is the smallest bone in the human body?",
    "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
    "options_en": ["Stapes", "Femur", "Tibia", "Radius"],
    "options_hi": ["स्टेपीज", "फीमर", "टिबिया", "रेडियस"],
    "answer_en": "Stapes",
    "answer_hi": "स्टेपीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the chemical formula of Methane?",
    "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
    "options_en": ["CH4", "CO2", "H2O", "NH3"],
    "options_hi": ["CH4", "CO2", "H2O", "NH3"],
    "answer_en": "CH4",
    "answer_hi": "CH4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which country is known as the 'Land of the Midnight Sun'?",
    "question_hi": "किस देश को 'मध्यरात्रि सूर्य की भूमि' के रूप में जाना जाता है?",
    "options_en": ["Norway", "Canada", "Russia", "Sweden"],
    "options_hi": ["नॉर्वे", "कनाडा", "रूस", "स्वीडन"],
    "answer_en": "Norway",
    "answer_hi": "नॉर्वे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which instrument is used to measure temperature?",
    "question_hi": "तापमान मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
    "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "अमीटर"],
    "answer_en": "Thermometer",
    "answer_hi": "थर्मामीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Who discovered the electron?",
    "question_hi": "इलेक्ट्रॉन की खोज किसने की?",
    "options_en": ["Ernest Rutherford", "J.J. Thomson", "Niels Bohr", "James Chadwick"],
    "options_hi": ["अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "नील्स बोहर", "जेम्स चैडविक"],
    "answer_en": "J.J. Thomson",
    "answer_hi": "जे.जे. थॉमसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
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
    "num": 24,
    "question_en": "Which gas is filled in electric bulbs?",
    "question_hi": "इलेक्ट्रिक बल्ब में कौन सी गैस भरी जाती है?",
    "options_en": ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हाइड्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Who wrote the book 'The Origin of Species'?",
    "question_hi": "'द ओरिजिन ऑफ स्पीशीज' पुस्तक किसने लिखी?",
    "options_en": ["Charles Darwin", "Gregor Mendel", "Isaac Newton", "Albert Einstein"],
    "options_hi": ["चार्ल्स डार्विन", "ग्रेगर मेंडल", "आइजैक न्यूटन", "अल्बर्ट आइंस्टीन"],
    "answer_en": "Charles Darwin",
    "answer_hi": "चार्ल्स डार्विन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the SI unit of energy?",
    "question_hi": "ऊर्जा की SI इकाई क्या है?",
    "options_en": ["Newton", "Joule", "Watt", "Pascal"],
    "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
    "answer_en": "Joule",
    "answer_hi": "जूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which is the largest gland in the human body?",
    "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
    "options_en": ["Pancreas", "Thyroid", "Liver", "Kidney"],
    "options_hi": ["अग्न्याशय", "थायराइड", "यकृत", "गुर्दा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the chemical symbol of Potassium?",
    "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["Pt", "K", "Po", "P"],
    "options_hi": ["Pt", "K", "Po", "P"],
    "answer_en": "K",
    "answer_hi": "K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Who was the first woman to win a Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाली पहली महिला कौन थी?",
    "options_en": ["Mother Teresa", "Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin"],
    "options_hi": ["मदर टेरेसा", "मैरी क्यूरी", "रोज़ालिंड फ्रैंकलिन", "डोरोथी हॉजकिन"],
    "answer_en": "Marie Curie",
    "answer_hi": "मैरी क्यूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which is the deepest ocean in the world?",
    "question_hi": "दुनिया का सबसे गहरा महासागर कौन सा है?",
    "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Who invented the printing press?",
    "question_hi": "प्रिंटिंग प्रेस का आविष्कार किसने किया?",
    "options_en": ["Johannes Gutenberg", "Thomas Edison", "Alexander Graham Bell", "James Watt"],
    "options_hi": ["जोहान्स गुटेनबर्ग", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "जेम्स वाट"],
    "answer_en": "Johannes Gutenberg",
    "answer_hi": "जोहान्स गुटेनबर्ग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the chemical formula of Glucose?",
    "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
    "options_en": ["C6H12O6", "C12H22O11", "CH4", "CO2"],
    "options_hi": ["C6H12O6", "C12H22O11", "CH4", "CO2"],
    "answer_en": "C6H12O6",
    "answer_hi": "C6H12O6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which country hosted the 2016 Summer Olympics?",
    "question_hi": "2016 ग्रीष्मकालीन ओलंपिक की मेजबानी किस देश ने की?",
    "options_en": ["China", "Brazil", "UK", "USA"],
    "options_hi": ["चीन", "ब्राजील", "यूके", "यूएसए"],
    "answer_en": "Brazil",
    "answer_hi": "ब्राजील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the main component of natural gas?",
    "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
    "options_en": ["Butane", "Propane", "Methane", "Ethane"],
    "options_hi": ["ब्यूटेन", "प्रोपेन", "मीथेन", "ईथेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Who is known as the 'Iron Man of India'?",
    "question_hi": "'भारत के लौह पुरुष' के रूप में किसे जाना जाता है?",
    "options_en": ["Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose", "Bhagat Singh"],
    "options_hi": ["जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस", "भगत सिंह"],
    "answer_en": "Sardar Patel",
    "answer_hi": "सरदार पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which is the lightest element?",
    "question_hi": "सबसे हल्का तत्व कौन सा है?",
    "options_en": ["Helium", "Hydrogen", "Lithium", "Oxygen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "लिथियम", "ऑक्सीजन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the chemical symbol of Silver?",
    "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
    "options_en": ["Si", "Sv", "Ag", "Au"],
    "options_hi": ["Si", "Sv", "Ag", "Au"],
    "answer_en": "Ag",
    "answer_hi": "Ag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is the longest mountain range in the world?",
    "question_hi": "दुनिया की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
    "options_en": ["Himalayas", "Andes", "Alps", "Rockies"],
    "options_hi": ["हिमालय", "एंडीज", "आल्प्स", "रॉकीज"],
    "answer_en": "Andes",
    "answer_hi": "एंडीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Who discovered X-rays?",
    "question_hi": "एक्स-रे की खोज किसने की?",
    "options_en": ["Wilhelm Roentgen", "Marie Curie", "Isaac Newton", "Albert Einstein"],
    "options_hi": ["विल्हेम रोएंटगन", "मैरी क्यूरी", "आइजैक न्यूटन", "अल्बर्ट आइंस्टीन"],
    "answer_en": "Wilhelm Roentgen",
    "answer_hi": "विल्हेम रोएंटगन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the chemical formula of Ammonia?",
    "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
    "options_en": ["NH3", "NO2", "N2O", "HNO3"],
    "options_hi": ["NH3", "NO2", "N2O", "HNO3"],
    "answer_en": "NH3",
    "answer_hi": "NH3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which is the fastest bird in the world?",
    "question_hi": "दुनिया का सबसे तेज पक्षी कौन सा है?",
    "options_en": ["Eagle", "Falcon", "Ostrich", "Hummingbird"],
    "options_hi": ["ईगल", "फाल्कन", "शुतुरमुर्ग", "हमिंगबर्ड"],
    "answer_en": "Falcon",
    "answer_hi": "फाल्कन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the SI unit of power?",
    "question_hi": "शक्ति की SI इकाई क्या है?",
    "options_en": ["Joule", "Watt", "Newton", "Volt"],
    "options_hi": ["जूल", "वाट", "न्यूटन", "वोल्ट"],
    "answer_en": "Watt",
    "answer_hi": "वाट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Who is the author of 'Harry Potter' series?",
    "question_hi": "'हैरी पॉटर' श्रृंखला के लेखक कौन हैं?",
    "options_en": ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
    "options_hi": ["जे.के. रोलिंग", "स्टीफन किंग", "जॉर्ज आर.आर. मार्टिन", "जे.आर.आर. टॉल्किन"],
    "answer_en": "J.K. Rowling",
    "answer_hi": "जे.के. रोलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is the largest lake in the world?",
    "question_hi": "दुनिया की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"],
    "options_hi": ["लेक सुपीरियर", "कैस्पियन सागर", "विक्टोरिया झील", "बैकाल झील"],
    "answer_en": "Caspian Sea",
    "answer_hi": "कैस्पियन सागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the chemical symbol of Copper?",
    "question_hi": "तांबे का रासायनिक प्रतीक क्या है?",
    "options_en": ["Co", "Cu", "Cp", "Cm"],
    "options_hi": ["Co", "Cu", "Cp", "Cm"],
    "answer_en": "Cu",
    "answer_hi": "Cu",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is the longest railway platform in the world?",
    "question_hi": "दुनिया का सबसे लंबा रेलवे प्लेटफॉर्म कौन सा है?",
    "options_en": ["Kharagpur, India", "Gorakhpur, India", "Hubballi, India", "Colombo, Sri Lanka"],
    "options_hi": ["खड़गपुर, भारत", "गोरखपुर, भारत", "हुबली, भारत", "कोलंबो, श्रीलंका"],
    "answer_en": "Gorakhpur, India",
    "answer_hi": "गोरखपुर, भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Who discovered the structure of DNA?",
    "question_hi": "डीएनए की संरचना की खोज किसने की?",
    "options_en": ["James Watson and Francis Crick", "Gregor Mendel", "Rosalind Franklin", "Louis Pasteur"],
    "options_hi": ["जेम्स वाटसन और फ्रांसिस क्रिक", "ग्रेगर मेंडल", "रोज़ालिंड फ्रैंकलिन", "लुई पाश्चर"],
    "answer_en": "James Watson and Francis Crick",
    "answer_hi": "जेम्स वाटसन और फ्रांसिस क्रिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the chemical formula of Carbon Dioxide?",
    "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
    "options_en": ["CO", "CO2", "C2O", "CHO2"],
    "options_hi": ["CO", "CO2", "C2O", "CHO2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is the largest island in the world?",
    "question_hi": "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Greenland", "Australia", "Borneo", "Madagascar"],
    "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "बोर्नियो", "मेडागास्कर"],
    "answer_en": "Greenland",
    "answer_hi": "ग्रीनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the chemical symbol of Lead?",
    "question_hi": "लेड (सीसा) का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ld", "Pb", "Le", "Pl"],
    "options_hi": ["Ld", "Pb", "Le", "Pl"],
    "answer_en": "Pb",
    "answer_hi": "Pb",
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