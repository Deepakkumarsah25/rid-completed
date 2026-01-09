const questions = [
        {
            "num": 1,
            "question_en": "Which instrument is used to measure temperature?",
            "question_hi": "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?",
            "options_en": ["Thermometer", "Barometer", "Altimeter", "Hygrometer"],
            "options_hi": ["थर्मामीटर", "बारोमीटर", "एल्टीमीटर", "हाइग्रोमीटर"],
            "answer_en": "Thermometer",
            "answer_hi": "थर्मामीटर",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "What is the chemical formula of water?",
            "question_hi": "पानी का रासायनिक सूत्र क्या है?",
            "options_en": ["H2O", "CO2", "O2", "NaCl"],
            "options_hi": ["H2O", "CO2", "O2", "NaCl"],
            "answer_en": "H2O",
            "answer_hi": "H2O",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "Which gas is most abundant in the Earth's atmosphere?",
            "question_hi": "पृथ्वी के वायुमंडल में कौन सा गैस सबसे प्रचुर मात्रा में है?",
            "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
            "answer_en": "Nitrogen",
            "answer_hi": "नाइट्रोजन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "What is the unit of electric current?",
            "question_hi": "विधुत धारा की इकाई क्या है?",
            "options_en": ["Volt", "Ohm", "Watt", "Ampere"],
            "options_hi": ["वोल्ट", "ओम", "वाट", "एम्पियर"],
            "answer_en": "Ampere",
            "answer_hi": "एम्पियर",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "Which planet is known as the Red Planet?",
            "question_hi": "कौन सा ग्रह लाल ग्रह के रूप में जाना जाता है?",
            "options_en": ["Earth", "Mars", "Jupiter", "Venus"],
            "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
            "answer_en": "Mars",
            "answer_hi": "मंगल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "What is the boiling point of water at sea level?",
            "question_hi": "समुद्र तल पर पानी का उबालने का तापमान क्या है?",
            "options_en": ["90°C", "100°C", "110°C", "120°C"],
            "options_hi": ["90°C", "100°C", "110°C", "120°C"],
            "answer_en": "100°C",
            "answer_hi": "100°C",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "Which vitamin is produced in the human body when exposed to sunlight?",
            "question_hi": "कौन सा विटामिन मानव शरीर में सूर्य की रोशनी से उत्पन्न होता है?",
            "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
            "answer_en": "Vitamin D",
            "answer_hi": "विटामिन D",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "Which metal is liquid at room temperature?",
            "question_hi": "कौन सा धातु कमरे के तापमान पर तरल होता है?",
            "options_en": ["Iron", "Mercury", "Aluminium", "Copper"],
            "options_hi": ["लोहा", "पारा", "एल्युमिनियम", "तांबा"],
            "answer_en": "Mercury",
            "answer_hi": "पारा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "What is the SI unit of force?",
            "question_hi": "बल की एसआई इकाई क्या है?",
            "options_en": ["Watt", "Newton", "Joule", "Pascal"],
            "options_hi": ["वाट", "न्यूटन", "जूल", "पास्कल"],
            "answer_en": "Newton",
            "answer_hi": "न्यूटन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "Which part of the plant conducts photosynthesis?",
            "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
            "options_en": ["Root", "Stem", "Leaf", "Flower"],
            "options_hi": ["मूल", "तना", "पत्ता", "फूल"],
            "answer_en": "Leaf",
            "answer_hi": "पत्ता",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "What is the main function of the CPU in a computer?",
            "question_hi": "कंप्यूटर में सीपीयू का मुख्य कार्य क्या है?",
            "options_en": ["Store data", "Process data", "Print data", "Display data"],
            "options_hi": ["डेटा संग्रहित करें", "डेटा संसाधित करें", "डेटा प्रिंट करें", "डेटा प्रदर्शित करें"],
            "answer_en": "Process data",
            "answer_hi": "डेटा संसाधित करें",
            "attempted": false,
            "selected": ""
        },
            {
                "num": 12,
                "question_en": "Which gas is used in fire extinguishers?",
                "question_hi": "आग बुझाने वाले यंत्रों में कौन सा गैस उपयोग किया जाता है?",
                "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
                "answer_en": "Carbon dioxide",
                "answer_hi": "कार्बन डाइऑक्साइड",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 13,
                "question_en": "Which mirror is used in vehicles’ rear-view mirrors?",
                "question_hi": "वाहनों के रियर व्यू मिरर में कौन सा आईना प्रयोग किया जाता है?",
                "options_en": ["Concave", "Convex", "Plane", "None"],
                "options_hi": ["अवतल", "उत्तल", "समतल", "कोई नहीं"],
                "answer_en": "Convex",
                "answer_hi": "उत्तल",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 14,
                "question_en": "Which organ pumps blood throughout the human body?",
                "question_hi": "मानव शरीर में खून को पंप करने वाला अंग कौन सा है?",
                "options_en": ["Lungs", "Heart", "Liver", "Kidneys"],
                "options_hi": ["फेफड़े", "दिल", "जिगर", "गुर्दे"],
                "answer_en": "Heart",
                "answer_hi": "दिल",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 15,
                "question_en": "What is the main source of energy for Earth?",
                "question_hi": "पृथ्वी के लिए ऊर्जा का मुख्य स्रोत क्या है?",
                "options_en": ["Moon", "Wind", "Sun", "Coal"],
                "options_hi": ["चंद्रमा", "पवन", "सूर्य", "कोयला"],
                "answer_en": "Sun",
                "answer_hi": "सूर्य",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 16,
                "question_en": "How many bones are there in an adult human body?",
                "question_hi": "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
                "options_en": ["206", "210", "201", "208"],
                "options_hi": ["206", "210", "201", "208"],
                "answer_en": "206",
                "answer_hi": "206",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 17,
                "question_en": "Which vitamin helps in clotting of blood?",
                "question_hi": "कौन सा विटामिन रक्त के थक्के बनाने में सहायक होता है?",
                "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
                "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
                "answer_en": "Vitamin K",
                "answer_hi": "विटामिन K",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 18,
                "question_en": "Which planet is closest to the Sun?",
                "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
                "options_en": ["Venus", "Earth", "Mercury", "Mars"],
                "options_hi": ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
                "answer_en": "Mercury",
                "answer_hi": "बुध",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 19,
                "question_en": "Who invented the light bulb?",
                "question_hi": "बल्ब का आविष्कार किसने किया?",
                "options_en": ["Isaac Newton", "Graham Bell", "Nikola Tesla", "Thomas Edison"],
                "options_hi": ["आइज़क न्यूटन", "ग्राहम बेल", "निकोला टेस्ला", "थॉमस एडीसन"],
                "answer_en": "Thomas Edison",
                "answer_hi": "थॉमस एडीसन",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 20,
                "question_en": "Which is a renewable source of energy?",
                "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का नवीकरणीय स्रोत है?",
                "options_en": ["Petroleum", "Natural Gas", "Solar Energy", "Coal"],
                "options_hi": ["पेट्रोलियम", "प्राकृतिक गैस", "सौर ऊर्जा", "कोयला"],
                "answer_en": "Solar Energy",
                "answer_hi": "सौर ऊर्जा",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 21,
                "question_en": "Which part of the computer stores data permanently?",
                "question_hi": "कंप्यूटर का कौन सा भाग स्थायी रूप से डेटा संग्रहित करता है?",
                "options_en": ["RAM", "ROM", "Hard Disk", "CPU"],
                "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "सीपीयू"],
                "answer_en": "Hard Disk",
                "answer_hi": "हार्ड डिस्क",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 22,
                "question_en": "What does CPU stand for?",
                "question_hi": "CPU का क्या अर्थ है?",
                "options_en": ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Panel Unit"],
                "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर पर्सनल यूनिट", "सेंट्रल प्रोग्राम यूटिलिटी", "कंट्रोल पैनल यूनिट"],
                "answer_en": "Central Processing Unit",
                "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 23,
                "question_en": "Which of the following is not a programming language?",
                "question_hi": "निम्नलिखित में से कौन एक प्रोग्रामिंग भाषा नहीं है?",
                "options_en": ["Java", "Python", "HTML", "C++"],
                "options_hi": ["जावा", "पाइथन", "HTML", "C++"],
                "answer_en": "HTML",
                "answer_hi": "HTML",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 24,
                "question_en": "What is the sun primarily made of?",
                "question_hi": "सूर्य मुख्यतः किससे बना होता है?",
                "options_en": ["Hydrogen and Helium", "Oxygen and Carbon", "Iron and Nickel", "Nitrogen and Oxygen"],
                "options_hi": ["हाइड्रोजन और हीलियम", "ऑक्सीजन और कार्बन", "लोहा और निकल", "नाइट्रोजन और ऑक्सीजन"],
                "answer_en": "Hydrogen and Helium",
                "answer_hi": "हाइड्रोजन और हीलियम",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 25,
                "question_en": "What is the value of Pi (approximately)?",
                "question_hi": "पाई का मान (लगभग) क्या है?",
                "options_en": ["2.14", "3.14", "4.13", "1.34"],
                "options_hi": ["2.14", "3.14", "4.13", "1.34"],
                "answer_en": "3.14",
                "answer_hi": "3.14",
                "attempted": false,
                "selected": ""
            },
                {
                    "num": 26,
                    "question_en": "Which part of the eye controls the amount of light entering?",
                    "question_hi": "आँख का कौन सा हिस्सा प्रकाश की मात्रा को नियंत्रित करता है?",
                    "options_en": ["Retina", "Iris", "Lens", "Cornea"],
                    "options_hi": ["रेटिना", "आइरिस", "लेंस", "कॉर्निया"],
                    "answer_en": "Iris",
                    "answer_hi": "आइरिस",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 27,
                    "question_en": "What is the smallest unit of life?",
                    "question_hi": "जीवन की सबसे छोटी इकाई क्या है?",
                    "options_en": ["Tissue", "Cell", "Organ", "Molecule"],
                    "options_hi": ["ऊतक", "कोशिका", "अंग", "अणु"],
                    "answer_en": "Cell",
                    "answer_hi": "कोशिका",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 28,
                    "question_en": "Which is the hardest substance in the human body?",
                    "question_hi": "मानव शरीर में सबसे कठोर पदार्थ कौन सा है?",
                    "options_en": ["Bone", "Enamel", "Cartilage", "Skin"],
                    "options_hi": ["हड्डी", "इनैमल", "उपास्थि", "त्वचा"],
                    "answer_en": "Enamel",
                    "answer_hi": "इनैमल",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 29,
                    "question_en": "Which blood cells help in clotting of blood?",
                    "question_hi": "रक्त के कौन से कण रक्त के थक्के बनाने में सहायता करते हैं?",
                    "options_en": ["RBC", "WBC", "Platelets", "Plasma"],
                    "options_hi": ["लाल रक्त कण", "श्वेत रक्त कण", "प्लेटलेट्स", "प्लाज्मा"],
                    "answer_en": "Platelets",
                    "answer_hi": "प्लेटलेट्स",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 30,
                    "question_en": "Which organ purifies blood in the human body?",
                    "question_hi": "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
                    "options_en": ["Liver", "Heart", "Kidneys", "Lungs"],
                    "options_hi": ["जिगर", "दिल", "गुर्दे", "फेफड़े"],
                    "answer_en": "Kidneys",
                    "answer_hi": "गुर्दे",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 31,
                    "question_en": "Which organ helps in digestion and produces bile?",
                    "question_hi": "कौन सा अंग पाचन में मदद करता है और पित्त का उत्पादन करता है?",
                    "options_en": ["Stomach", "Liver", "Pancreas", "Small intestine"],
                    "options_hi": ["पेट", "जिगर", "अग्न्याशय", "छोटी आंत"],
                    "answer_en": "Liver",
                    "answer_hi": "जिगर",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 32,
                    "question_en": "Which part of the brain controls balance and coordination?",
                    "question_hi": "मस्तिष्क का कौन सा भाग संतुलन और समन्वय को नियंत्रित करता है?",
                    "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Spinal cord"],
                    "options_hi": ["सेरेब्रल", "सेरिबेलम", "मेडुला", "स्पाइनल कॉर्ड"],
                    "answer_en": "Cerebellum",
                    "answer_hi": "सेरिबेलम",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 33,
                    "question_en": "Which device is used to measure atmospheric pressure?",
                    "question_hi": "वायुमंडलीय दबाव मापने के लिए कौन सा उपकरण प्रयोग किया जाता है?",
                    "options_en": ["Thermometer", "Barometer", "Hygrometer", "Altimeter"],
                    "options_hi": ["थर्मामीटर", "बारोमीटर", "हाइग्रोमीटर", "एल्टीमीटर"],
                    "answer_en": "Barometer",
                    "answer_hi": "बारोमीटर",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 34,
                    "question_en": "Which is the largest organ in the human body?",
                    "question_hi": "मानव शरीर में सबसे बड़ा अंग कौन सा है?",
                    "options_en": ["Liver", "Heart", "Skin", "Lungs"],
                    "options_hi": ["जिगर", "दिल", "त्वचा", "फेफड़े"],
                    "answer_en": "Skin",
                    "answer_hi": "त्वचा",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 35,
                    "question_en": "Which part of the plant absorbs water and minerals?",
                    "question_hi": "पौधे का कौन सा भाग पानी और खनिजों को अवशोषित करता है?",
                    "options_en": ["Leaf", "Stem", "Root", "Flower"],
                    "options_hi": ["पत्ता", "तना", "जड़", "फूल"],
                    "answer_en": "Root",
                    "answer_hi": "जड़",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 36,
                    "question_en": "What is HCl commonly known as?",
                    "question_hi": "HCl को आमतौर पर किस नाम से जाना जाता है?",
                    "options_en": ["Sulphuric Acid", "Hydrochloric Acid", "Nitric Acid", "Acetic Acid"],
                    "options_hi": ["सल्फ्यूरिक एसिड", "हाइड्रोक्लोरिक एसिड", "नाइट्रिक एसिड", "एसीटिक एसिड"],
                    "answer_en": "Hydrochloric Acid",
                    "answer_hi": "हाइड्रोक्लोरिक एसिड",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 37,
                    "question_en": "Which component of blood fights infection?",
                    "question_hi": "रक्त का कौन सा घटक संक्रमण से लड़ता है?",
                    "options_en": ["RBC", "WBC", "Platelets", "Plasma"],
                    "options_hi": ["लाल रक्त कण", "श्वेत रक्त कण", "प्लेटलेट्स", "प्लाज्मा"],
                    "answer_en": "WBC",
                    "answer_hi": "श्वेत रक्त कण",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 38,
                    "question_en": "Which of the following is a non-metal?",
                    "question_hi": "निम्नलिखित में से कौन एक अधातु है?",
                    "options_en": ["Copper", "Iron", "Sulphur", "Aluminium"],
                    "options_hi": ["तांबा", "लोहा", "गंधक", "एल्युमिनियम"],
                    "answer_en": "Sulphur",
                    "answer_hi": "गंधक",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 39,
                    "question_en": "What is the speed of light in vacuum?",
                    "question_hi": "निर्वात में प्रकाश की गति क्या है?",
                    "options_en": ["3 × 10⁸ m/s", "2 × 10⁸ m/s", "3 × 10⁷ m/s", "2 × 10⁷ m/s"],
                    "options_hi": ["3 × 10⁸ मी/से", "2 × 10⁸ मी/से", "3 × 10⁷ मी/से", "2 × 10⁷ मी/से"],
                    "answer_en": "3 × 10⁸ m/s",
                    "answer_hi": "3 × 10⁸ मी/से",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 40,
                    "question_en": "Which scientist proposed the law of gravitation?",
                    "question_hi": "गुरुत्वाकर्षण का नियम किस वैज्ञानिक ने प्रस्तुत किया?",
                    "options_en": ["Einstein", "Newton", "Galileo", "Kepler"],
                    "options_hi": ["आइंस्टीन", "न्यूटन", "गैलीलियो", "केपलर"],
                    "answer_en": "Newton",
                    "answer_hi": "न्यूटन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 41,
                    "question_en": "Which gland is called the master gland?",
                    "question_hi": "कौन सी ग्रंथि मास्टर ग्रंथि कहलाती है?",
                    "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
                    "options_hi": ["थायरॉयड", "पिट्यूटरी", "एड्रिनल", "अग्न्याशय"],
                    "answer_en": "Pituitary",
                    "answer_hi": "पिट्यूटरी",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 42,
                    "question_en": "What is the main component of biogas?",
                    "question_hi": "बायोगैस का मुख्य घटक क्या है?",
                    "options_en": ["Carbon dioxide", "Methane", "Oxygen", "Hydrogen"],
                    "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन", "हाइड्रोजन"],
                    "answer_en": "Methane",
                    "answer_hi": "मीथेन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 43,
                    "question_en": "What is the main function of red blood cells?",
                    "question_hi": "लाल रक्त कणों का मुख्य कार्य क्या है?",
                    "options_en": ["Fight infection", "Blood clotting", "Carry oxygen", "Store nutrients"],
                    "options_hi": ["संक्रमण से लड़ना", "रक्त का थक्का बनाना", "ऑक्सीजन ले जाना", "पोषक तत्व संग्रह करना"],
                    "answer_en": "Carry oxygen",
                    "answer_hi": "ऑक्सीजन ले जाना",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 44,
                    "question_en": "Which is the largest planet in the solar system?",
                    "question_hi": "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
                    "options_en": ["Earth", "Mars", "Jupiter", "Saturn"],
                    "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"],
                    "answer_en": "Jupiter",
                    "answer_hi": "बृहस्पति",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 45,
                    "question_en": "Which of the following is a conductor of electricity?",
                    "question_hi": "निम्नलिखित में से कौन विद्युत का सुचालक है?",
                    "options_en": ["Rubber", "Glass", "Copper", "Plastic"],
                    "options_hi": ["रबड़", "कांच", "तांबा", "प्लास्टिक"],
                    "answer_en": "Copper",
                    "answer_hi": "तांबा",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 46,
                    "question_en": "Which planet is known for its rings?",
                    "question_hi": "कौन सा ग्रह अपनी वलयों के लिए जाना जाता है?",
                    "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
                    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
                    "answer_en": "Saturn",
                    "answer_hi": "शनि",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 47,
                    "question_en": "Which gas do plants absorb for photosynthesis?",
                    "question_hi": "पौधे प्रकाश संश्लेषण के लिए कौन सी गैस अवशोषित करते हैं?",
                    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
                    "answer_en": "Carbon dioxide",
                    "answer_hi": "कार्बन डाइऑक्साइड",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 48,
                    "question_en": "What is the unit of temperature in SI?",
                    "question_hi": "तापमान की SI इकाई क्या है?",
                    "options_en": ["Celsius", "Kelvin", "Fahrenheit", "Rankine"],
                    "options_hi": ["सेल्सियस", "केल्विन", "फॉरेनहाइट", "रैंकिन"],
                    "answer_en": "Kelvin",
                    "answer_hi": "केल्विन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 49,
                    "question_en": "Which is the main gas in the Earth's atmosphere?",
                    "question_hi": "पृथ्वी के वायुमंडल में मुख्य गैस कौन सी है?",
                    "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
                    "answer_en": "Nitrogen",
                    "answer_hi": "नाइट्रोजन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 50,
                    "question_en": "What is the powerhouse of the cell?",
                    "question_hi": "कोशिका का पावरहाउस किसे कहा जाता है?",
                    "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
                    "options_hi": ["न्यूक्लियस", "माइटोकॉन्ड्रिया", "राइबोसोम", "साइटोप्लाज्म"],
                    "answer_en": "Mitochondria",
                    "answer_hi": "माइटोकॉन्ड्रिया",
                    "attempted": false,
                    "selected": ""
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