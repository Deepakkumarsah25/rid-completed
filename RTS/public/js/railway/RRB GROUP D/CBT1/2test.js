const questions = [
  {
    num: 1,
    question_en: "What is the value of Pi (approximately)?",
    question_hi: "पाई का मान (लगभग) क्या है?",
    options_en: ["2.14", "3.14", "4.13", "1.34"],
    options_hi: ["2.14", "3.14", "4.13", "1.34"],
    answer_en: "3.14",
    answer_hi: "3.14",
    attempted: false,
    selected:""
  },
 {
    num: 2,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "आग बुझाने वाले यंत्रों में कौन सा गैस उपयोग किया जाता है?",
    options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
 },
    {
      num: 3,
      question_en: "What does fiscal deficit mean?",
      question_hi: "राजकोषीय घाटे का क्या अर्थ है?",
      options_en: ["Total expenditure exceeds total revenue", "Total income exceeds total expenditure", "Revenue is equal to expenditure", "Only revenue deficit exists"],
      options_hi: ["कुल व्यय कुल राजस्व से अधिक होता है", "कुल आय कुल व्यय से अधिक होती है", "राजस्व और व्यय समान होते हैं", "केवल राजस्व घाटा होता है"],
      answer: "Total expenditure exceeds total revenue",
      attempted: false,
      selected: ""
    },
  
{
    num: 4,
    question_en: "What is the unit of electric current?",
    question_hi: "विधुत धारा की इकाई क्या है?",
    options_en: ["Volt", "Ohm", "Watt", "Ampere"],
    options_hi: ["वोल्ट", "ओम", "वाट", "एम्पियर"],
    answer_en: "Ampere",
    answer_hi: "एम्पियर",
    attempted: false,
    selected: ""
},
{
    num: 5,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?",
    options_en: ["Barometer", "Thermometer", "Ammeter", "Hygrometer"],
    options_hi: ["बारोमीटर", "थर्मामीटर", "ऐममीटर", "हाइग्रोमीटर"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
},
{
    num: 6,
    question_en: "What is the boiling point of water at sea level?",
    question_hi: "समुद्र तल पर पानी का उबालने का तापमान क्या है?",
    options_en: ["90°C", "100°C", "110°C", "120°C"],
    options_hi: ["90°C", "100°C", "110°C", "120°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
},
{
    num: 7,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह लाल ग्रह के रूप में जाना जाता है?",
    options_en: ["Earth", "Mars", "Jupiter", "Venus"],
    options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_en: "Sound travels fastest in which medium?",
    question_hi: "ध्वनि किस माध्यम में सबसे तेज यात्रा करती है?",
    options_en: ["Air", "Water", "Steel", "Vacuum"],
    options_hi: ["हवा", "पानी", "इस्पात", "शून्य"],
    answer_en: "Steel",
    answer_hi: "इस्पात",
    attempted: false,
    selected: ""
},
{
    num: 9,
    question_en: "What is the chemical formula of water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "O2", "NaCl"],
    options_hi: ["H2O", "CO2", "O2", "NaCl"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
},
{
    num: 10,
    question_en: "Which organ pumps blood throughout the human body?",
    question_hi: "मानव शरीर में खून को पूरे शरीर में पंप करने वाला अंग कौन सा है?",
    options_en: ["Lungs", "Liver", "Heart", "Kidneys"],
    options_hi: ["फेफड़े", "जिगर", "दिल", "गुर्दे"],
    answer_en: "Heart",
    answer_hi: "दिल",
    attempted: false,
    selected: ""
},
{
    num: 11,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सा धातु कमरे के तापमान पर तरल होता है?",
    options_en: ["Iron", "Mercury", "Aluminium", "Copper"],
    options_hi: ["लोहा", "पारा", "एल्युमिनियम", "तांबा"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
},
{
    num: 12,
    question_en: "What is the SI unit of force?",
    question_hi: "बल की एसआई इकाई क्या है?",
    options_en: ["Watt", "Newton", "Joule", "Pascal"],
    options_hi: ["वाट", "न्यूटन", "जूल", "पास्कल"],
    answer_en: "Newton",
    answer_hi: "न्यूटन",
    attempted: false,
    selected: ""
},
{
    num: 13,
    question_en: "What type of mirror is used in rear-view mirrors of vehicles?",
    question_hi: "वाहनों के रियर व्यू मिरर में किस प्रकार का आईना उपयोग होता है?",
    options_en: ["Concave", "Convex", "Plane", "None"],
    options_hi: ["कंकाव", "उत्तल", "समतल", "कोई नहीं"],
    answer_en: "Convex",
    answer_hi: "उत्तल",
    attempted: false,
    selected: ""
},
{
    num: 14,
    question_en: "What is the main function of the CPU in a computer?",
    question_hi: "कंप्यूटर में सीपीयू का मुख्य कार्य क्या है?",
    options_en: ["Store data", "Process data", "Print data", "Display data"],
    options_hi: ["डेटा संग्रहित करें", "डेटा संसाधित करें", "डेटा प्रिंट करें", "डेटा प्रदर्शित करें"],
    answer_en: "Process data",
    answer_hi: "डेटा संसाधित करें",
    attempted: false,
    selected: ""
},
{
    num: 15,
    question_en: "Which part of the plant conducts photosynthesis?",
    question_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    options_en: ["Root", "Stem", "Leaf", "Flower"],
    options_hi: ["मूल", "तना", "पत्ता", "फूल"],
    answer_en: "Leaf",
    answer_hi: "पत्ता",
    attempted: false,
    selected: ""
},
{
    num: 16,
    question_en: "How many bones are there in an adult human body?",
    question_hi: "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
    options_en: ["206", "208", "201", "212"],
    options_hi: ["206", "208", "201", "212"],
    answer_en: "206",
    answer_hi: "206",
    attempted: false,
    selected: ""
},
{
    num: 17,
    question_en: "Which vitamin is produced in the human body when exposed to sunlight?",
    question_hi: "कौन सा विटामिन मानव शरीर में सूर्य की रोशनी से उत्पन्न होता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
},
{
    num: 18,
    question_en: "Which planet is closest to the Sun?",
    question_hi: "कौन सा ग्रह सूर्य के सबसे पास है?",
    options_en: ["Venus", "Earth", "Mercury", "Mars"],
    options_hi: ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
},
{
    num: 19,
    question_en: "Who invented the light bulb?",
    question_hi: "विद्युत बल्ब का आविष्कार किसने किया था?",
    options_en: ["Alexander Graham Bell", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
    options_hi: ["अलेक्जेंडर ग्राहम बेल", "आइज़क न्यूटन", "थॉमस एडीसन", "निकोला टेस्ला"],
    answer_en: "Thomas Edison",
    answer_hi: "थॉमस एडीसन",
    attempted: false,
    selected: ""
},
{
    num: 20,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "आग बुझाने वाले यंत्रों में कौन सा गैस उपयोग किया जाता है?",
    options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
},
{
    num: 21,
    question_en: "Which one is a renewable source of energy?",
    question_hi: "इनमें से कौन सा ऊर्जा का नवीकरणीय स्रोत है?",
    options_en: ["Coal", "Petroleum", "Solar energy", "Natural gas"],
    options_hi: ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
    answer_en: "Solar energy",
    answer_hi: "सौर ऊर्जा",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "The sun rises in which direction?",
    question_hi: "सूर्य किस दिशा में उगता है?",
    options_en: ["North", "South", "East", "West"],
    options_hi: ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"],
    answer_en: "East",
    answer_hi: "पूर्व",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_en: "What does CPU stand for?",
    question_hi: "CPU का क्या मतलब है?",
    options_en: ["Central Power Unit", "Central Processing Unit", "Control Processing Unit", "Computer Power Unit"],
    options_hi: ["सेंट्रल पावर यूनिट", "सेंट्रल प्रोसेसिंग यूनिट", "कंट्रोल प्रोसेसिंग यूनिट", "कंप्यूटर पावर यूनिट"],
    answer_en: "Central Processing Unit",
    answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
    attempted: false,
    selected: ""
},
{
    num: 24,
    question_en: "Which of the following is not a programming language?",
    question_hi: "निम्नलिखित में से कौन सी प्रोग्रामिंग भाषा नहीं है?",
    options_en: ["Python", "HTML", "Java", "C++"],
    options_hi: ["पाइथन", "HTML", "जावा", "C++"],
    answer_en: "HTML",
    answer_hi: "HTML",
    attempted: false,
    selected: ""
},
{
    num: 25,
    question_en: "What is the value of Pi (approximately)?",
    question_hi: "पाई का मान (लगभग) क्या है?",
    options_en: ["2.14", "3.14", "4.13", "1.34"],
    options_hi: ["2.14", "3.14", "4.13", "1.34"],
    answer_en: "3.14",
    answer_hi: "3.14",
    attempted: false,
    selected:""
},
   
  {
    num: 26,
    question_en: "Which is the largest organ in the human body?",
    question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Heart", "Skin", "Liver", "Lungs"],
    options_hi: ["हृदय", "त्वचा", "यकृत", "फेफड़े"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the chemical symbol for gold?",
    question_hi: "सोने का रासायनिक प्रतीक क्या है?",
    options_en: ["Au", "Ag", "Gd", "Ga"],
    options_hi: ["Au", "Ag", "Gd", "Ga"],
    answer_en: "Au",
    answer_hi: "Au",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Who wrote the epic 'Mahabharata'?",
    question_hi: "'महाभारत' महाकाव्य किसने लिखा था?",
    options_en: ["Valmiki", "Vyasa", "Kalidasa", "Tulsidas"],
    options_hi: ["वाल्मीकि", "व्यास", "कालिदास", "तुलसीदास"],
    answer_en: "Vyasa",
    answer_hi: "व्यास",
    attempted: false,
    selected: ""
  },
  {
  num: 29,
  question_en: "What is the primary function of red blood cells?",
  question_hi: "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?",
  options_en: ["Fight infection", "Carry oxygen", "Clot blood", "Produce hormones"],
  options_hi: ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त जमाना", "हॉर्मोन बनाना"],
  answer_en: "Carry oxygen",
  answer_hi: "ऑक्सीजन ले जाना",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which gas is most abundant in the Earth's atmosphere?",
  question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सा गैस होता है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Nitrogen",
  answer_hi: "नाइट्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Who is known as the 'Father of the Indian Constitution'?",
  question_hi: "भारतीय संविधान के 'पिता' के रूप में किसे जाना जाता है?",
  options_en: ["Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel", "Rajendra Prasad"],
  options_hi: ["जवाहरलाल नेहरू", "बी. आर. अम्बेडकर", "सरदार पटेल", "राजेंद्र प्रसाद"],
  answer_en: "B.R. Ambedkar",
  answer_hi: "बी. आर. अम्बेडकर",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is the boiling point of water at sea level?",
  question_hi: "समुद्र तल पर पानी का उबलने का तापमान क्या है?",
  options_en: ["90°C", "100°C", "110°C", "120°C"],
  options_hi: ["90°C", "100°C", "110°C", "120°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which planet is known as the 'Red Planet'?",
  question_hi: "'लाल ग्रह' के रूप में कौन सा ग्रह जाना जाता है?",
  options_en: ["Mars", "Venus", "Jupiter", "Saturn"],
  options_hi: ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Who was the first Prime Minister of independent India?",
  question_hi: "स्वतंत्र भारत के पहले प्रधानमंत्री कौन थे?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Lal Bahadur Shastri"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "लाल बहादुर शास्त्री"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which of the following is a non-renewable source of energy?",
  question_hi: "निम्नलिखित में से कौन सा ऊर्जा स्रोत नवीनीकरणीय नहीं है?",
  options_en: ["Solar energy", "Wind energy", "Coal", "Hydroelectric energy"],
  options_hi: ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जल विद्युत ऊर्जा"],
  answer_en: "Coal",
  answer_hi: "कोयला",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which river is known as the longest river in India?",
  question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Yamuna", "Ganga", "Narmada", "Godavari"],
  options_hi: ["यमुना", "गंगा", "नर्मदा", "गोदावरी"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the currency of Japan?",
  question_hi: "जापान की मुद्रा क्या है?",
  options_en: ["Yen", "Won", "Dollar", "Euro"],
  options_hi: ["येन", "वोन", "डॉलर", "यूरो"],
  answer_en: "Yen",
  answer_hi: "येन",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "In which year did India become a republic?",
  question_hi: "भारत किस वर्ष गणराज्य बना?",
  options_en: ["1947", "1950", "1952", "1949"],
  options_hi: ["1947", "1950", "1952", "1949"],
  answer_en: "1950",
  answer_hi: "1950",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which element has the atomic number 1?",
  question_hi: "किस तत्व का परमाणु संख्या 1 होती है?",
  options_en: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
  options_hi: ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "कार्बन"],
  answer_en: "Hydrogen",
  answer_hi: "हाइड्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुइलेल्मो मार्कोनी"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which vitamin is produced when the skin is exposed to sunlight?",
  question_hi: "जब त्वचा सूरज की रोशनी में आती है तो कौन सा विटामिन बनता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which is the national bird of India?",
  question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
  options_en: ["Peacock", "Sparrow", "Eagle", "Parrot"],
  options_hi: ["मोर", "गौरैया", "गरुड़", "तोता"],
  answer_en: "Peacock",
  answer_hi: "मोर",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which country is known as the 'Land of the Rising Sun'?",
  question_hi: "कौन सा देश 'उगते सूरज की भूमि' के रूप में जाना जाता है?",
  options_en: ["China", "Japan", "South Korea", "Thailand"],
  options_hi: ["चीन", "जापान", "दक्षिण कोरिया", "थाईलैंड"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which gas do plants absorb from the atmosphere for photosynthesis?",
  question_hi: "पौधे प्रकाश संश्लेषण के लिए वायुमंडल से कौन सी गैस अवशोषित करते हैं?",
  options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the capital city of Australia?",
  question_hi: "ऑस्ट्रेलिया की राजधानी कौन सी है?",
  options_en: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  options_hi: ["सिडनी", "मेलबर्न", "कैनबरा", "ब्रिस्बेन"],
  answer_en: "Canberra",
  answer_hi: "कैनबरा",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which is the largest continent on Earth?",
  question_hi: "पृथ्वी का सबसे बड़ा महाद्वीप कौन सा है?",
  options_en: ["Africa", "Asia", "Europe", "North America"],
  options_hi: ["अफ्रीका", "एशिया", "यूरोप", "उत्तरी अमेरिका"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Who discovered penicillin?",
  question_hi: "पेनिसिलिन की खोज किसने की?",
  options_en: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
  options_hi: ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "लुई पाश्चर", "ग्रेगर मेंडेल"],
  answer_en: "Alexander Fleming",
  answer_hi: "अलेक्जेंडर फ्लेमिंग",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which instrument is used to measure atmospheric pressure?",
  question_hi: "वायुमंडलीय दबाव मापने के लिए किस यंत्र का उपयोग किया जाता है?",
  options_en: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
  options_hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनिमोमीटर"],
  answer_en: "Barometer",
  answer_hi: "बैरोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which language is the most spoken worldwide?",
  question_hi: "दुनिया में सबसे अधिक बोली जाने वाली भाषा कौन सी है?",
  options_en: ["English", "Mandarin", "Spanish", "Hindi"],
  options_hi: ["अंग्रेज़ी", "मंदारिन", "स्पेनिश", "हिन्दी"],
  answer_en: "Mandarin",
  answer_hi: "मंदारिन",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which scientist proposed the theory of relativity?",
  question_hi: "सापेक्षता के सिद्धांत का प्रस्ताव किस वैज्ञानिक ने किया?",
  options_en: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
  options_hi: ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
  answer_en: "Albert Einstein",
  answer_hi: "अल्बर्ट आइंस्टीन",
  attempted: false,
  selected: ""
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