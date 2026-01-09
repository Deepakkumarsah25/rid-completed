const questions = [
  {
    "num": 1,
    "question_en": "Which is the primary language spoken in Mexico?",
    "question_hi": "मेक्सिको में मुख्य रूप से कौन सी भाषा बोली जाती है?",
    "options_en": ["English", "Portuguese", "Spanish", "French"],
    "options_hi": ["अंग्रेजी", "पुर्तगाली", "स्पेनिश", "फ्रेंच"],
    "answer_en": "Spanish",
    "answer_hi": "स्पेनिश"
  },
  {
    "num": 2,
    "question_en": "What is the chemical symbol for iron?",
    "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ir", "Fe", "In", "Io"],
    "options_hi": ["Ir", "Fe", "In", "Io"],
    "answer_en": "Fe",
    "answer_hi": "Fe"
  },
  {
    "num": 3,
    "question_en": "Who wrote 'War and Peace'?",
    "question_hi": "'युद्ध और शांति' किसने लिखी?",
    "options_en": ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
    "options_hi": ["फ्योडोर दोस्तोव्स्की", "लियो टॉल्स्टॉय", "एंटन चेखव", "निकोलाई गोगोल"],
    "answer_en": "Leo Tolstoy",
    "answer_hi": "लियो टॉल्स्टॉय"
  },
  {
    "num": 4,
    "question_en": "Which planet is closest to the Sun?",
    "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
    "options_en": ["Venus", "Mars", "Mercury", "Earth"],
    "options_hi": ["शुक्र", "मंगल", "बुध", "पृथ्वी"],
    "answer_en": "Mercury",
    "answer_hi": "बुध"
  },
  {
    "num": 5,
    "question_en": "What is the capital of Egypt?",
    "question_hi": "मिस्र की राजधानी क्या है?",
    "options_en": ["Alexandria", "Cairo", "Luxor", "Giza"],
    "options_hi": ["अलेक्जेंड्रिया", "काहिरा", "लक्सर", "गीज़ा"],
    "answer_en": "Cairo",
    "answer_hi": "काहिरा"
  },
  {
    "num": 6,
    "question_en": "Which vitamin is essential for blood clotting?",
    "question_hi": "रक्त के थक्के जमने के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin E"],
    "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन के", "विटामिन ई"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन के"
  },
  {
    "num": 7,
    "question_en": "What is the largest island in the world?",
    "question_hi": "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Borneo", "Greenland", "Madagascar", "New Guinea"],
    "options_hi": ["बोर्नियो", "ग्रीनलैंड", "मेडागास्कर", "न्यू गिनी"],
    "answer_en": "Greenland",
    "answer_hi": "ग्रीनलैंड"
  },
  {
    "num": 8,
    "question_en": "Who composed the famous symphony 'Symphony No. 5'?",
    "question_hi": "प्रसिद्ध सिम्फनी 'सिम्फनी नंबर 5' किसने रची?",
    "options_en": ["Mozart", "Beethoven", "Bach", "Chopin"],
    "options_hi": ["मोजार्ट", "बीथोवन", "बाख", "शोपां"],
    "answer_en": "Beethoven",
    "answer_hi": "बीथोवन"
  },
  {
    "num": 9,
    "question_en": "What is the chemical formula for table salt?",
    "question_hi": "टेबल सॉल्ट (नमक) का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "CaCl2", "MgCl2"],
    "options_hi": ["NaCl", "KCl", "CaCl2", "MgCl2"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl"
  },
  {
    "num": 10,
    "question_en": "Which country is famous for the Great Wall?",
    "question_hi": "कौन सा देश महान दीवार के लिए प्रसिद्ध है?",
    "options_en": ["Japan", "China", "India", "Mongolia"],
    "options_hi": ["जापान", "चीन", "भारत", "मंगोलिया"],
    "answer_en": "China",
    "answer_hi": "चीन"
  },
  {
    "num": 11,
    "question_en": "What is the main ingredient in traditional hummus?",
    "question_hi": "पारंपरिक हम्मस में मुख्य घटक क्या है?",
    "options_en": ["Lentils", "Chickpeas", "Black beans", "Peas"],
    "options_hi": ["दाल", "चने", "काले बीन्स", "मटर"],
    "answer_en": "Chickpeas",
    "answer_hi": "चने"
  },
  {
    "num": 12,
    "question_en": "Which gas makes up about 78% of Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल का लगभग 78% कौन सी गैस बनाती है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन"
  },
  {
    "num": 13,
    "question_en": "Who painted the ceiling of the Sistine Chapel?",
    "question_hi": "सिस्टिन चैपल की छत किसने चित्रित की?",
    "options_en": ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
    "options_hi": ["लियोनार्डो दा विंची", "राफेल", "माइकलएंजेलो", "डोनाटेलो"],
    "answer_en": "Michelangelo",
    "answer_hi": "माइकलएंजेलो"
  },
  {
    "num": 14,
    "question_en": "What is the smallest country in the world?",
    "question_hi": "दुनिया का सबसे छोटा देश कौन सा है?",
    "options_en": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    "options_hi": ["मोनाको", "सैन मैरिनो", "वेटिकन सिटी", "लिकटेंस्टीन"],
    "answer_en": "Vatican City",
    "answer_hi": "वेटिकन सिटी"
  },
  {
    "num": 15,
    "question_en": "Which organ is responsible for filtering blood in the human body?",
    "question_hi": "मानव शरीर में रक्त को छानने के लिए कौन सा अंग जिम्मेदार है?",
    "options_en": ["Liver", "Heart", "Kidneys", "Lungs"],
    "options_hi": ["यकृत", "हृदय", "गुर्दे", "फेफड़े"],
    "answer_en": "Kidneys",
    "answer_hi": "गुर्दे"
  },
  {
    "num": 16,
    "question_en": "What is the currency of the United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम की मुद्रा क्या है?",
    "options_en": ["Euro", "Pound Sterling", "Dollar", "Franc"],
    "options_hi": ["यूरो", "पाउंड स्टर्लिंग", "डॉलर", "फ्रैंक"],
    "answer_en": "Pound Sterling",
    "answer_hi": "पाउंड स्टर्लिंग"
  },
  {
    "num": 17,
    "question_en": "Which is the longest bone in the human body?",
    "question_hi": "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
    "options_en": ["Tibia", "Fibula", "Femur", "Humerus"],
    "options_hi": ["टिबिया", "फाइबुला", "फीमर", "ह्यूमरस"],
    "answer_en": "Femur",
    "answer_hi": "फीमर"
  },
  {
    "num": 18,
    "question_en": "Who discovered electricity?",
    "question_hi": "बिजली की खोज किसने की?",
    "options_en": ["Thomas Edison", "Benjamin Franklin", "Nikola Tesla", "Michael Faraday"],
    "options_hi": ["थॉमस एडिसन", "बेंजामिन फ्रैंकलिन", "निकोला टेस्ला", "माइकल फैराडे"],
    "answer_en": "Benjamin Franklin",
    "answer_hi": "बेंजामिन फ्रैंकलिन"
  },
  {
    "num": 19,
    "question_en": "What is the capital of Canada?",
    "question_hi": "कनाडा की राजधानी क्या है?",
    "options_en": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    "options_hi": ["टोरंटो", "वैंकूवर", "ओटावा", "मॉन्ट्रियल"],
    "answer_en": "Ottawa",
    "answer_hi": "ओटावा"
  },
  {
    "num": 20,
    "question_en": "Which is the fastest land animal?",
    "question_hi": "सबसे तेज भूमि जानवर कौन सा है?",
    "options_en": ["Lion", "Cheetah", "Leopard", "Gazelle"],
    "options_hi": ["शेर", "चीता", "तेंदुआ", "गज़ल"],
    "answer_en": "Cheetah",
    "answer_hi": "चीता"
  },
  {
    "num": 21,
    "question_en": "What is the chemical symbol for silver?",
    "question_hi": "चाँदी का रासायनिक प्रतीक क्या है?",
    "options_en": ["Si", "Ag", "Au", "S"],
    "options_hi": ["Si", "Ag", "Au", "S"],
    "answer_en": "Ag",
    "answer_hi": "Ag"
  },
  {
    "num": 22,
    "question_en": "Who wrote 'Pride and Prejudice'?",
    "question_hi": "'प्राइड एंड प्रेजुडिस' किसने लिखी?",
    "options_en": ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Virginia Woolf"],
    "options_hi": ["शार्लोट ब्रोंटे", "जेन ऑस्टेन", "एमिली ब्रोंटे", "वर्जीनिया वूल्फ"],
    "answer_en": "Jane Austen",
    "answer_hi": "जेन ऑस्टेन"
  },
  {
    "num": 23,
    "question_en": "Which ocean is the smallest?",
    "question_hi": "सबसे छोटा महासागर कौन सा है?",
    "options_en": ["Pacific", "Atlantic", "Indian", "Arctic"],
    "options_hi": ["प्रशांत", "अटलांटिक", "हिंद", "आर्कटिक"],
    "answer_en": "Arctic",
    "answer_hi": "आर्कटिक"
  },
  {
    "num": 24,
    "question_en": "What is the main gas found in the air we breathe out?",
    "question_hi": "हमारे द्वारा साँस छोड़ने वाली हवा में मुख्य गैस कौन सी होती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड"
  },
  {
    "num": 25,
    "question_en": "Which country is known as the Land of the Midnight Sun?",
    "question_hi": "किस देश को मध्यरात्रि सूर्य की भूमि के रूप में जाना जाता है?",
    "options_en": ["Sweden", "Norway", "Finland", "Iceland"],
    "options_hi": ["स्वीडन", "नॉर्वे", "फिनलैंड", "आइसलैंड"],
    "answer_en": "Norway",
    "answer_hi": "नॉर्वे"
  },
  {
    "num": 26,
    "question_en": "What is the square root of 64?",
    "question_hi": "64 का वर्गमूल क्या है?",
    "options_en": ["6", "7", "8", "9"],
    "options_hi": ["6", "7", "8", "9"],
    "answer_en": "8",
    "answer_hi": "8"
  },
  {
    "num": 27,
    "question_en": "Which vitamin is also known as ascorbic acid?",
    "question_hi": "किस विटामिन को एस्कॉर्बिक एसिड के रूप में भी जाना जाता है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन सी"
  },
  {
    "num": 28,
    "question_en": "Who was the first man to walk on the moon?",
    "question_hi": "चंद्रमा पर चलने वाला पहला व्यक्ति कौन था?",
    "options_en": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    "options_hi": ["बज़ एल्ड्रिन", "नील आर्मस्ट्रांग", "यूरी गागरिन", "माइकल कॉलिन्स"],
    "answer_en": "Neil Armstrong",
    "answer_hi": "नील आर्मस्ट्रांग"
  },
  {
    "num": 29,
    "question_en": "What is the capital of Italy?",
    "question_hi": "इटली की राजधानी क्या है?",
    "options_en": ["Venice", "Milan", "Rome", "Florence"],
    "options_hi": ["वेनिस", "मिलान", "रोम", "फ्लोरेंस"],
    "answer_en": "Rome",
    "answer_hi": "रोम"
  },
  {
    "num": 30,
    "question_en": "Which gas is used in balloons to make them float?",
    "question_hi": "गुब्बारों को उड़ाने के लिए किस गैस का उपयोग किया जाता है?",
    "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम"
  },
  {
    "num": 31,
    "question_en": "Who wrote 'The Odyssey'?",
    "question_hi": "'द ओडिसी' किसने लिखी?",
    "options_en": ["Virgil", "Homer", "Plato", "Sophocles"],
    "options_hi": ["वर्जिल", "होमर", "प्लेटो", "सोफोक्लीज़"],
    "answer_en": "Homer",
    "answer_hi": "होमर"
  },
  {
    "num": 32,
    "question_en": "What is the largest continent by population?",
    "question_hi": "जनसंख्या के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
    "options_en": ["Africa", "Europe", "Asia", "North America"],
    "options_hi": ["अफ्रीका", "यूरोप", "एशिया", "उत्तरी अमेरिका"],
    "answer_en": "Asia",
    "answer_hi": "एशिया"
  },
  {
    "num": 33,
    "question_en": "Which part of the plant conducts photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
    "options_hi": ["जड़ें", "तना", "पत्तियाँ", "फूल"],
    "answer_en": "Leaves",
    "answer_hi": "पत्तियाँ"
  },
  {
    "num": 34,
    "question_en": "What is the chemical symbol for potassium?",
    "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["Pt", "Po", "K", "P"],
    "options_hi": ["Pt", "Po", "K", "P"],
    "answer_en": "K",
    "answer_hi": "K"
  },
  {
    "num": 35,
    "question_en": "Who painted 'The Starry Night'?",
    "question_hi": "'द स्टैरी नाइट' किसने चित्रित की?",
    "options_en": ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Edvard Munch"],
    "options_hi": ["पाब्लो पिकासो", "क्लाउड मोने", "विंसेंट वैन गॉग", "एडवर्ड मंच"],
    "answer_en": "Vincent van Gogh",
    "answer_hi": "विंसेंट वैन गॉग"
  },
  {
    "num": 36,
    "question_en": "Which is the national animal of Australia?",
    "question_hi": "ऑस्ट्रेलिया का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Koala", "Kangaroo", "Emu", "Platypus"],
    "options_hi": ["कोआला", "कंगारू", "एमु", "प्लैटिपस"],
    "answer_en": "Kangaroo",
    "answer_hi": "कंगारू"
  },
  {
    "num": 37,
    "question_en": "What is 15% of 200?",
    "question_hi": "200 का 15% क्या है?",
    "options_en": ["15", "20", "25", "30"],
    "options_hi": ["15", "20", "25", "30"],
    "answer_en": "30",
    "answer_hi": "30"
  },
  {
    "num": 38,
    "question_en": "Which organ produces bile?",
    "question_hi": "पित्त कौन सा अंग उत्पन्न करता है?",
    "options_en": ["Pancreas", "Stomach", "Liver", "Gallbladder"],
    "options_hi": ["अग्न्याशय", "पेट", "यकृत", "पित्ताशय"],
    "answer_en": "Liver",
    "answer_hi": "यकृत"
  },
  {
    "num": 39,
    "question_en": "What is the capital of Spain?",
    "question_hi": "स्पेन की राजधानी क्या है?",
    "options_en": ["Barcelona", "Valencia", "Madrid", "Seville"],
    "options_hi": ["बार्सिलोना", "वालेंसिया", "मैड्रिड", "सेविल"],
    "answer_en": "Madrid",
    "answer_hi": "मैड्रिड"
  },
  {
    "num": 40,
    "question_en": "Which is the hardest natural substance on Earth after diamond?",
    "question_hi": "हीरे के बाद पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    "options_en": ["Quartz", "Topaz", "Corundum", "Emerald"],
    "options_hi": ["क्वार्ट्ज", "टोपाज", "करुंडम", "पन्ना"],
    "answer_en": "Corundum",
    "answer_hi": "करुंडम"
  },
  {
    "num": 41,
    "question_en": "Who invented the light bulb?",
    "question_hi": "बल्ब का आविष्कार किसने किया?",
    "options_en": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
    "options_hi": ["थॉमस एडिसन", "निकोला टेस्ला", "अलेक्जेंडर ग्राहम बेल", "बेंजामिन फ्रैंकलिन"],
    "answer_en": "Thomas Edison",
    "answer_hi": "थॉमस एडिसन"
  },
  {
    "num": 42,
    "question_en": "What is the chemical formula for methane?",
    "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
    "options_en": ["CH4", "CO2", "H2O", "NH3"],
    "options_hi": ["CH4", "CO2", "H2O", "NH3"],
    "answer_en": "CH4",
    "answer_hi": "CH4"
  },
  {
    "num": 43,
    "question_en": "Which is the largest lake in the world?",
    "question_hi": "दुनिया की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"],
    "options_hi": ["लेक सुपीरियर", "कैस्पियन सागर", "विक्टोरिया झील", "बैकाल झील"],
    "answer_en": "Caspian Sea",
    "answer_hi": "कैस्पियन सागर"
  },
  {
    "num": 44,
    "question_en": "Who was the first female Prime Minister of the United Kingdom?",
    "question_hi": "यूनाइटेड किंगडम की पहली महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
    "options_hi": ["थेरेसा मे", "मार्गरेट थैचर", "एंजेला मर्केल", "इंदिरा गांधी"],
    "answer_en": "Margaret Thatcher",
    "answer_hi": "मार्गरेट थैचर"
  },
  {
    "num": 45,
    "question_en": "What is the freezing point of mercury?",
    "question_hi": "पारा का हिमांक क्या है?",
    "options_en": ["-39°C", "0°C", "-100°C", "-273°C"],
    "options_hi": ["-39°C", "0°C", "-100°C", "-273°C"],
    "answer_en": "-39°C",
    "answer_hi": "-39°C"
  },
  {
    "num": 46,
    "question_en": "Which country is the largest producer of coffee?",
    "question_hi": "कॉफी का सबसे बड़ा उत्पादक देश कौन सा है?",
    "options_en": ["Colombia", "Brazil", "Vietnam", "Ethiopia"],
    "options_hi": ["कोलंबिया", "ब्राज़ील", "वियतनाम", "इथियोपिया"],
    "answer_en": "Brazil",
    "answer_hi": "ब्राज़ील"
  },
  {
    "num": 47,
    "question_en": "What is the capital of Germany?",
    "question_hi": "जर्मनी की राजधानी क्या है?",
    "options_en": ["Munich", "Berlin", "Frankfurt", "Hamburg"],
    "options_hi": ["म्यूनिख", "बर्लिन", "फ्रैंकफर्ट", "हैम्बर्ग"],
    "answer_en": "Berlin",
    "answer_hi": "बर्लिन"
  },
  {
    "num": 48,
    "question_en": "Which gas is responsible for the greenhouse effect?",
    "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड"
  },
  {
    "num": 49,
    "question_en": "Who wrote 'The Adventures of Tom Sawyer'?",
    "question_hi": "'द एडवेंचर्स ऑफ टॉम सॉयर' किसने लिखी?",
    "options_en": ["Charles Dickens", "Mark Twain", "Jack London", "Ernest Hemingway"],
    "options_hi": ["चार्ल्स डिकेंस", "मार्क ट्वेन", "जैक लंदन", "अर्नेस्ट हेमिंग्वे"],
    "answer_en": "Mark Twain",
    "answer_hi": "मार्क ट्वेन"
  },
  {
    "num": 50,
    "question_en": "What is the chemical symbol for copper?",
    "question_hi": "तांबे का रासायनिक प्रतीक क्या है?",
    "options_en": ["Co", "Cu", "Cp", "Cr"],
    "options_hi": ["Co", "Cu", "Cp", "Cr"],
    "answer_en": "Cu",
    "answer_hi": "Cu"
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