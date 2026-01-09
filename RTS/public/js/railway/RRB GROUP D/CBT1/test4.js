const questions = [
    {
        num: 1,
        question_en: "Which of the following is used to measure speed?",
        question_hi: "निम्नलिखित में से किसका उपयोग गति मापने के लिए किया जाता है?",
        options_en: ["Odometer", "Thermometer", "Speedometer", "Altimeter"],
        options_hi: ["ओडोमीटर", "थर्मामीटर", "स्पीडोमीटर", "एल्टीमीटर"],
        answer_en: "Speedometer",
        answer_hi: "स्पीडोमीटर",
        attempted: false,
        selected: ""
    },
    {
        num: 2,
        question_en: "Which gas is most abundant in the Earth's atmosphere?",
        question_hi: "पृथ्वी के वायुमंडल में कौन सा गैस सबसे प्रचुर मात्रा में है?",
        options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        answer_en: "Nitrogen",
        answer_hi: "नाइट्रोजन",
        attempted: false,
        selected: ""
    },
    {
        num: 3,
        question_en: "Which of the following is not a primary color?",
        question_hi: "निम्नलिखित में से कौन सा प्राथमिक रंग नहीं है?",
        options_en: ["Red", "Blue", "Green", "Yellow"],
        options_hi: ["लाल", "नीला", "हरा", "पीला"],
        answer_en: "Yellow",
        answer_hi: "पीला",
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
        selected: ""
    },

    {
        num: 26,
        question_en: "Which device is used to convert AC to DC?",
        question_hi: "AC को DC में बदलने के लिए कौन सा उपकरण उपयोग किया जाता है?",
        options_en: ["Transformer", "Rectifier", "Amplifier", "Regulator"],
        options_hi: ["ट्रांसफॉर्मर", "रेक्टिफायर", "एंपलीफायर", "रेगुलेटर"],
        answer_en: "Rectifier",
        answer_hi: "रेक्टिफायर",
        attempted: false,
        selected: ""
    },
    {
        num: 27,
        question_en: "What is the speed of sound in air at room temperature?",
        question_hi: "कमरे के तापमान पर हवा में ध्वनि की गति क्या है?",
        options_en: ["330 m/s", "1500 m/s", "3x10^8 m/s", "100 m/s"],
        options_hi: ["330 मी/से", "1500 मी/से", "3x10^8 मी/से", "100 मी/से"],
        answer_en: "330 m/s",
        answer_hi: "330 मी/से",
        attempted: false,
        selected: ""
    },
    {
        num: 28,
        question_en: "Which part of the brain controls heartbeat and breathing?",
        question_hi: "मस्तिष्क का कौन सा भाग दिल की धड़कन और श्वास को नियंत्रित करता है?",
        options_en: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
        options_hi: ["सेरेब्रम", "सेरेबेलम", "मेडुला", "थैलेमस"],
        answer_en: "Medulla",
        answer_hi: "मेडुला",
        attempted: false,
        selected: ""
    },
    {
        num: 29,
        question_en: "Which component is used to store charge?",
        question_hi: "कौन सा घटक चार्ज स्टोर करने के लिए उपयोग किया जाता है?",
        options_en: ["Resistor", "Capacitor", "Inductor", "Transistor"],
        options_hi: ["रेज़िस्टर", "कैपेसिटर", "इंडक्टर", "ट्रांजिस्टर"],
        answer_en: "Capacitor",
        answer_hi: "कैपेसिटर",
        attempted: false,
        selected: ""
    },
    {
        num: 30,
        question_en: "Which of the following is a conductor of electricity?",
        question_hi: "निम्नलिखित में से कौन विद्युत का चालक है?",
        options_en: ["Rubber", "Wood", "Copper", "Plastic"],
        options_hi: ["रबर", "लकड़ी", "तांबा", "प्लास्टिक"],
        answer_en: "Copper",
        answer_hi: "तांबा",
        attempted: false,
        selected: ""
    },
    {
        num: 31,
        question_en: "How many bits are there in a byte?",
        question_hi: "एक बाइट में कितने बिट्स होते हैं?",
        options_en: ["4", "8", "10", "16"],
        options_hi: ["4", "8", "10", "16"],
        answer_en: "8",
        answer_hi: "8",
        attempted: false,
        selected: ""
    },
    {
        num: 32,
        question_en: "Which fuel is used in nuclear reactors?",
        question_hi: "न्यूक्लियर रिएक्टरों में कौन सा ईंधन उपयोग किया जाता है?",
        options_en: ["Uranium", "Coal", "Diesel", "Petrol"],
        options_hi: ["यूरेनियम", "कोयला", "डीजल", "पेट्रोल"],
        answer_en: "Uranium",
        answer_hi: "यूरेनियम",
        attempted: false,
        selected: ""
    },
    {
        num: 33,
        question_en: "What does ATM stand for?",
        question_hi: "ATM का क्या मतलब है?",
        options_en: ["Automatic Time Machine", "Automatic Teller Machine", "Any Time Money", "Automatic Transfer Machine"],
        options_hi: ["ऑटोमेटिक टाइम मशीन", "ऑटोमेटिक टेलर मशीन", "एनी टाइम मनी", "ऑटोमेटिक ट्रांसफर मशीन"],
        answer_en: "Automatic Teller Machine",
        answer_hi: "ऑटोमेटिक टेलर मशीन",
        attempted: false,
        selected: ""
    },
    {
        num: 34,
        question_en: "Which one is a vector quantity?",
        question_hi: "इनमें से कौन सा एक वेक्टर राशि है?",
        options_en: ["Speed", "Distance", "Mass", "Velocity"],
        options_hi: ["गति", "दूरी", "द्रव्यमान", "वेग"],
        answer_en: "Velocity",
        answer_hi: "वेग",
        attempted: false,
        selected: ""
    },
    {
        num: 35,
        question_en: "Which gas is used in electric bulbs?",
        question_hi: "इलेक्ट्रिक बल्बों में कौन सा गैस उपयोग किया जाता है?",
        options_en: ["Nitrogen", "Oxygen", "Argon", "Hydrogen"],
        options_hi: ["नाइट्रोजन", "ऑक्सीजन", "आर्गन", "हाइड्रोजन"],
        answer_en: "Argon",
        answer_hi: "आर्गन",
        attempted: false,
        selected: ""
    },
    {
        num: 36,
        question_en: "What is used to measure atmospheric pressure?",
        question_hi: "वायुमंडलीय दबाव को मापने के लिए कौन सा यंत्र उपयोग किया जाता है?",
        options_en: ["Manometer", "Barometer", "Thermometer", "Anemometer"],
        options_hi: ["मैनोमीटर", "बारोमीटर", "थर्मामीटर", "एनीमोमीटर"],
        answer_en: "Barometer",
        answer_hi: "बारोमीटर",
        attempted: false,
        selected: ""
    },
    {
        num: 37,
        question_en: "Which acid is found in vinegar?",
        question_hi: "विनेगर में कौन सा अम्ल पाया जाता है?",
        options_en: ["Citric acid", "Acetic acid", "Sulphuric acid", "Hydrochloric acid"],
        options_hi: ["साइट्रिक अम्ल", "एसीटिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        answer_en: "Acetic acid",
        answer_hi: "एसीटिक अम्ल",
        attempted: false,
        selected: ""
    },
    {
        num: 38,
        question_en: "Which material is attracted by a magnet?",
        question_hi: "कौन सा पदार्थ चुंबक द्वारा आकर्षित होता है?",
        options_en: ["Wood", "Glass", "Iron", "Plastic"],
        options_hi: ["लकड़ी", "कांच", "लोहा", "प्लास्टिक"],
        answer_en: "Iron",
        answer_hi: "लोहा",
        attempted: false,
        selected: ""
    },
    {
        num: 39,
        question_en: "Which one of these is a non-metal?",
        question_hi: "इनमें से कौन सा गैर-धातु है?",
        options_en: ["Gold", "Iron", "Copper", "Sulfur"],
        options_hi: ["सोना", "लोहा", "तांबा", "गंधक"],
        answer_en: "Sulfur",
        answer_hi: "गंधक",
        attempted: false,
        selected: ""
    },
    {
        num: 40,
        question_en: "Who discovered gravity?",
        question_hi: "गुरुत्वाकर्षण की खोज किसने की?",
        options_en: ["Newton", "Einstein", "Galileo", "Edison"],
        options_hi: ["न्यूटन", "आइंस्टीन", "गैलीलियो", "एडिसन"],
        answer_en: "Newton",
        answer_hi: "न्यूटन",
        attempted: false,
        selected: ""
    },
    {
        num: 41,
        question_en: "Which of the following is used in pencils?",
        question_hi: "निम्नलिखित में से कौन सा पेंसिलों में उपयोग किया जाता है?",
        options_en: ["Graphite", "Lead", "Charcoal", "Carbon"],
        options_hi: ["ग्रेफाइट", "सीसा", "कोयला", "कार्बन"],
        answer_en: "Graphite",
        answer_hi: "ग्रेफाइट",
        attempted: false,
        selected: ""
    },
    {
        num: 42,
        question_en: "What is the currency of Japan?",
        question_hi: "जापान की मुद्रा क्या है?",
        options_en: ["Yuan", "Won", "Yen", "Dollar"],
        options_hi: ["युआन", "वॉन", "येन्", "डॉलर"],
        answer_en: "Yen",
        answer_hi: "येन्",
        attempted: false,
        selected: ""
    },
    {
        num: 43,
        question_en: "Which is the smallest prime number?",
        question_hi: "सबसे छोटा अभाज्य संख्या कौन सी है?",
        options_en: ["1", "2", "3", "5"],
        options_hi: ["1", "2", "3", "5"],
        answer_en: "2",
        answer_hi: "2",
        attempted: false,
        selected: ""
    },
    {
        num: 44,
        question_en: "What is the freezing point of water?",
        question_hi: "पानी का जमाव बिंदु क्या है?",
        options_en: ["0°C", "100°C", "50°C", "10°C"],
        options_hi: ["0°C", "100°C", "50°C", "10°C"],
        answer_en: "0°C",
        answer_hi: "0°C",
        attempted: false,
        selected: ""
    },
    {
        num: 45,
        question_en: "Which of the following is NOT a programming language?",
        question_hi: "निम्नलिखित में से कौन सी प्रोग्रामिंग भाषा नहीं है?",
        options_en: ["Java", "Python", "HTML", "C++"],
        options_hi: ["जावा", "पाइथन", "HTML", "C++"],
        answer_en: "HTML",
        answer_hi: "HTML",
        attempted: false,
        selected: ""
    },
    {
        num: 46,
        question_en: "What is the function of RAM in a computer?",
        question_hi: "कंप्यूटर में RAM का कार्य क्या है?",
        options_en: ["Storage", "Display", "Temporary memory", "Power supply"],
        options_hi: ["स्टोरेज", "डिस्प्ले", "अस्थायी मेमोरी", "पावर सप्लाई"],
        answer_en: "Temporary memory",
        answer_hi: "अस्थायी मेमोरी",
        attempted: false,
        selected: ""
    },
    {
        num: 47,
        question_en: "Which vitamin is known as ascorbic acid?",
        question_hi: "कौन सा विटामिन एस्कॉर्बिक अम्ल के नाम से जाना जाता है?",
        options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
        options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B12"],
        answer_en: "Vitamin C",
        answer_hi: "विटामिन C",
        attempted: false,
        selected: ""
    },
    {
        num: 48,
        question_en: "Which part of the eye controls the amount of light entering?",
        question_hi: "आंख का कौन सा भाग प्रकाश की मात्रा को नियंत्रित करता है?",
        options_en: ["Cornea", "Iris", "Retina", "Lens"],
        options_hi: ["कॉर्निया", "आईरिस", "रेटिना", "लेन्स"],
        answer_en: "Iris",
        answer_hi: "आईरिस",
        attempted: false,
        selected: ""
    },
    {
        num: 49,
        question_en: "Which is the largest gland in the human body?",
        question_hi: "मानव शरीर का सबसे बड़ा ग्रंथि कौन सा है?",
        options_en: ["Pancreas", "Liver", "Thyroid", "Adrenal"],
        options_hi: ["पैंक्रियास", "यकृत", "थायरॉयड", "एड्रिनल"],
        answer_en: "Liver",
        answer_hi: "यकृत",
        attempted: false,
        selected: ""
    },
    {
        num: 50,
        question_en: "Which energy conversion takes place in a battery?",
        question_hi: "बैटरी में कौन सा ऊर्जा रूपांतरण होता है?",
        options_en: ["Mechanical to electrical", "Electrical to chemical", "Chemical to electrical", "Heat to electrical"],
        options_hi: ["मैकेनिकल से इलेक्ट्रिकल", "इलेक्ट्रिकल से रासायनिक", "रासायनिक से इलेक्ट्रिकल", "ताप से इलेक्ट्रिकल"],
        answer_en: "Chemical to electrical",
        answer_hi: "रासायनिक से इलेक्ट्रिकल",
        attempted: false,
        selected: ""
},
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