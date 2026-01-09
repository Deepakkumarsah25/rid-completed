const questions =[
    
        {
          "num": 1,
          "question_en": "Which metal is the best conductor of electricity?",
          "question_hi": "कौन सी धातु विद्युत की सबसे अच्छी चालक होती है?",
          "options_en": ["Copper", "Silver", "Aluminium", "Iron"],
          "options_hi": ["तांबा", "चांदी", "एल्युमिनियम", "लोहा"],
          "answer": "Silver",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which device is used to convert AC to DC?",
          "question_hi": "AC को DC में बदलने के लिए किस यंत्र का उपयोग किया जाता है?",
          "options_en": ["Transformer", "Rectifier", "Amplifier", "Oscillator"],
          "options_hi": ["ट्रांसफार्मर", "रेक्टिफायर", "एम्पलीफायर", "ऑस्सीलेटर"],
          "answer": "Rectifier",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the chemical formula of water?",
          "question_hi": "पानी का रासायनिक सूत्र क्या है?",
          "options_en": ["H2O", "CO2", "NaCl", "O2"],
          "options_hi": ["H2O", "CO2", "NaCl", "O2"],
          "answer": "H2O",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What is the boiling point of water in Celsius?",
          "question_hi": "सेल्सियस में पानी का क्वथनांक क्या होता है?",
          "options_en": ["90°C", "100°C", "80°C", "120°C"],
          "options_hi": ["90°C", "100°C", "80°C", "120°C"],
          "answer": "100°C",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which gas is necessary for respiration?",
          "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
          "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
          "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
          "answer": "Oxygen",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which planet is closest to the Sun?",
          "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
          "options_en": ["Venus", "Earth", "Mars", "Mercury"],
          "options_hi": ["शुक्र", "पृथ्वी", "मंगल", "बुध"],
          "answer": "Mercury",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which part of the human body controls voluntary actions?",
          "question_hi": "मानव शरीर का कौन सा भाग इच्छानुसार क्रियाओं को नियंत्रित करता है?",
          "options_en": ["Cerebellum", "Cerebrum", "Medulla", "Spinal cord"],
          "options_hi": ["सेरिबेलम", "सेरिब्रम", "मेडुला", "स्पाइनल कॉर्ड"],
          "answer": "Cerebrum",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the value of acceleration due to gravity on Earth?",
          "question_hi": "पृथ्वी पर गुरुत्वाकर्षण त्वरण का मान क्या होता है?",
          "options_en": ["8.9 m/s²", "9.8 m/s²", "10.5 m/s²", "9.2 m/s²"],
          "options_hi": ["8.9 मी/से²", "9.8 मी/से²", "10.5 मी/से²", "9.2 मी/से²"],
          "answer": "9.8 m/s²",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the SI unit of force?",
          "question_hi": "बल की SI इकाई क्या है?",
          "options_en": ["Joule", "Pascal", "Newton", "Watt"],
          "options_hi": ["जूल", "पास्कल", "न्यूटन", "वाट"],
          "answer": "Newton",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Who invented the light bulb?",
          "question_hi": "लाइट बल्ब का आविष्कार किसने किया?",
          "options_en": ["Alexander Graham Bell", "Thomas Edison", "James Watt", "Isaac Newton"],
          "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "जेम्स वाट", "आइजैक न्यूटन"],
          "answer": "Thomas Edison",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which organ purifies blood in the human body?",
          "question_hi": "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
          "options_en": ["Lungs", "Heart", "Liver", "Kidneys"],
          "options_hi": ["फेफड़े", "हृदय", "यकृत", "गुर्दे"],
          "answer": "Kidneys",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the chemical symbol of gold?",
          "question_hi": "सोने का रासायनिक चिन्ह क्या है?",
          "options_en": ["Au", "Ag", "Gd", "Go"],
          "options_hi": ["Au", "Ag", "Gd", "Go"],
          "answer": "Au",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which gas is responsible for global warming?",
          "question_hi": "ग्लोबल वार्मिंग के लिए कौन सी गैस जिम्मेदार है?",
          "options_en": ["Oxygen", "Methane", "Hydrogen", "Helium"],
          "options_hi": ["ऑक्सीजन", "मीथेन", "हाइड्रोजन", "हीलियम"],
          "answer": "Methane",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Who discovered penicillin?",
          "question_hi": "पेनिसिलिन की खोज किसने की?",
          "options_en": ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"],
          "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "मैरी क्यूरी", "आइजैक न्यूटन"],
          "answer": "Alexander Fleming",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the main component of the sun?",
          "question_hi": "सूर्य का मुख्य घटक क्या है?",
          "options_en": ["Oxygen", "Helium", "Carbon", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "हीलियम", "कार्बन", "हाइड्रोजन"],
          "answer": "Hydrogen",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is measured in volts?",
          "question_hi": "वोल्ट में क्या मापा जाता है?",
          "options_en": ["Current", "Resistance", "Voltage", "Power"],
          "options_hi": ["धारा", "प्रतिरोध", "वोल्टेज", "शक्ति"],
          "answer": "Voltage",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which vitamin is produced in the human body by sunlight?",
          "question_hi": "सूर्य की रोशनी से मानव शरीर में कौन सा विटामिन बनता है?",
          "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
          "answer": "Vitamin D",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the freezing point of water?",
          "question_hi": "पानी का हिमांक क्या है?",
          "options_en": ["0°C", "32°C", "100°C", "-10°C"],
          "options_hi": ["0°C", "32°C", "100°C", "-10°C"],
          "answer": "0°C",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which element is required for the formation of hemoglobin?",
          "question_hi": "हीमोग्लोबिन निर्माण के लिए किस तत्व की आवश्यकता होती है?",
          "options_en": ["Calcium", "Iron", "Sodium", "Potassium"],
          "options_hi": ["कैल्शियम", "लोहा", "सोडियम", "पोटेशियम"],
          "answer": "Iron",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What is the name of the process by which plants make their food?",
          "question_hi": "जिस प्रक्रिया द्वारा पौधे अपना भोजन बनाते हैं उसे क्या कहते हैं?",
          "options_en": ["Transpiration", "Respiration", "Photosynthesis", "Digestion"],
          "options_hi": ["वाष्पोत्सर्जन", "श्वसन", "प्रकाश संश्लेषण", "पाचन"],
          "answer": "Photosynthesis",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which is the hardest natural substance?",
          "question_hi": "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
          "options_en": ["Iron", "Diamond", "Gold", "Silver"],
          "options_hi": ["लोहा", "हीरा", "सोना", "चांदी"],
          "answer": "Diamond",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which one is used to measure temperature?",
          "question_hi": "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?",
          "options_en": ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
          "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एल्टीमीटर"],
          "answer": "Thermometer",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which organ in the human body filters blood?",
          "question_hi": "मानव शरीर में कौन सा अंग रक्त को छानता है?",
          "options_en": ["Lungs", "Heart", "Kidney", "Liver"],
          "options_hi": ["फेफड़े", "हृदय", "गुर्दा", "यकृत"],
          "answer": "Kidney",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which part of the plant conducts photosynthesis?",
          "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
          "options_en": ["Root", "Stem", "Flower", "Leaf"],
          "options_hi": ["जड़", "तना", "फूल", "पत्ता"],
          "answer": "Leaf",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "What is the main source of energy on Earth?",
          "question_hi": "पृथ्वी पर ऊर्जा का मुख्य स्रोत क्या है?",
          "options_en": ["Wind", "Water", "Sun", "Coal"],
          "options_hi": ["पवन", "जल", "सूर्य", "कोयला"],
          "answer": "Sun",
          "attempted": false,
          "selected": ""
        },
      
        {
          "num": 26,
          "question_en": "Which part of the plant conducts photosynthesis?",
          "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
          "options_en": ["Stem", "Roots", "Leaves", "Flowers"],
          "options_hi": ["तना", "जड़ें", "पत्तियाँ", "फूल"],
          "answer": "Leaves",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 27,
          "question_en": "Which metal is liquid at room temperature?",
          "question_hi": "कौन सी धातु सामान्य तापमान पर तरल होती है?",
          "options_en": ["Iron", "Mercury", "Copper", "Aluminium"],
          "options_hi": ["लोहा", "पारा", "तांबा", "एल्युमिनियम"],
          "answer": "Mercury",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 28,
          "question_en": "What is the unit of electric current?",
          "question_hi": "विद्युत धारा की इकाई क्या है?",
          "options_en": ["Ohm", "Volt", "Ampere", "Watt"],
          "options_hi": ["ओम", "वोल्ट", "एम्पियर", "वाट"],
          "answer": "Ampere",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 29,
          "question_en": "Which organ of the body produces insulin?",
          "question_hi": "शरीर का कौन सा अंग इंसुलिन बनाता है?",
          "options_en": ["Liver", "Pancreas", "Kidney", "Heart"],
          "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "हृदय"],
          "answer": "Pancreas",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 30,
          "question_en": "Which instrument is used to measure atmospheric pressure?",
          "question_hi": "वायुमंडलीय दबाव मापने के लिए किस यंत्र का उपयोग किया जाता है?",
          "options_en": ["Thermometer", "Barometer", "Hygrometer", "Manometer"],
          "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "मैनोमीटर"],
          "answer": "Barometer",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 31,
          "question_en": "Which part of the human brain is responsible for balance?",
          "question_hi": "मानव मस्तिष्क का कौन सा भाग संतुलन के लिए जिम्मेदार है?",
          "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
          "options_hi": ["सेरिब्रम", "सेरिबेलम", "मेडुला", "पॉन्स"],
          "answer": "Cerebellum",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 32,
          "question_en": "Which is the largest bone in the human body?",
          "question_hi": "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
          "options_en": ["Humerus", "Femur", "Tibia", "Fibula"],
          "options_hi": ["ह्यूमरस", "फीमर", "टिबिया", "फिबुला"],
          "answer": "Femur",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 33,
          "question_en": "What is the pH value of pure water?",
          "question_hi": "शुद्ध पानी का pH मान क्या होता है?",
          "options_en": ["5", "7", "9", "3"],
          "options_hi": ["5", "7", "9", "3"],
          "answer": "7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 34,
          "question_en": "Which gas is filled in electric bulbs?",
          "question_hi": "बिजली के बल्बों में कौन सी गैस भरी जाती है?",
          "options_en": ["Oxygen", "Nitrogen", "Hydrogen", "Argon"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन", "आर्गन"],
          "answer": "Argon",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 35,
          "question_en": "Which of the following is not a renewable source of energy?",
          "question_hi": "निम्न में से कौन अक्षय ऊर्जा स्रोत नहीं है?",
          "options_en": ["Wind", "Solar", "Coal", "Biomass"],
          "options_hi": ["पवन", "सौर", "कोयला", "बायोमास"],
          "answer": "Coal",
          "attempted": false,
          "selected": ""
        },
        {
            "num": 27,
            "question_en": "Which metal is liquid at room temperature?",
            "question_hi": "कौन सी धातु सामान्य तापमान पर तरल होती है?",
            "options_en": ["Iron", "Mercury", "Copper", "Aluminium"],
            "options_hi": ["लोहा", "पारा", "तांबा", "एल्युमिनियम"],
            "answer": "Mercury",
            "attempted": false,
            "selected": ""
          },
        {
          "num": 37,
          "question_en": "Which law explains the relationship between voltage, current, and resistance?",
          "question_hi": "वोल्टेज, धारा और प्रतिरोध के बीच संबंध को कौन सा नियम समझाता है?",
          "options_en": ["Ohm's Law", "Faraday's Law", "Ampere's Law", "Lenz's Law"],
          "options_hi": ["ओम का नियम", "फैरेडे का नियम", "एम्पियर का नियम", "लेंज़ का नियम"],
          "answer": "Ohm's Law",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 38,
          "question_en": "Which nutrient builds muscles in our body?",
          "question_hi": "हमारे शरीर में मांसपेशियाँ बनाने में कौन सा पोषक तत्व मदद करता है?",
          "options_en": ["Carbohydrates", "Fats", "Proteins", "Vitamins"],
          "options_hi": ["कार्बोहाइड्रेट", "वसा", "प्रोटीन", "विटामिन"],
          "answer": "Proteins",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 39,
          "question_en": "What is the speed of light in vacuum?",
          "question_hi": "रिक्त स्थान (वैक्यूम) में प्रकाश की गति क्या होती है?",
          "options_en": [
            "3 × 10⁶ m/s",
            "3 × 10⁷ m/s",
            "3 × 10⁸ m/s",
            "3 × 10⁹ m/s"
          ],
          "options_hi": [
            "3 × 10⁶ मी/से",
            "3 × 10⁷ मी/से",
            "3 × 10⁸ मी/से",
            "3 × 10⁹ मी/से"
          ],
          "answer": "3 × 10⁸ m/s",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 40,
          "question_en": "Which organ pumps blood in the body?",
          "question_hi": "शरीर में रक्त को पंप करने वाला अंग कौन सा है?",
          "options_en": ["Lungs", "Heart", "Kidneys", "Liver"],
          "options_hi": ["फेफड़े", "हृदय", "गुर्दे", "यकृत"],
          "answer": "Heart",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 41,
          "question_en": "Which is the smallest unit of matter?",
          "question_hi": "पदार्थ की सबसे छोटी इकाई कौन सी है?",
          "options_en": ["Molecule", "Atom", "Proton", "Electron"],
          "options_hi": ["अणु", "परमाणु", "प्रोटॉन", "इलेक्ट्रॉन"],
          "answer": "Atom",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 42,
          "question_en": "Which device stores electrical energy?",
          "question_hi": "कौन सा यंत्र विद्युत ऊर्जा को संग्रहीत करता है?",
          "options_en": ["Resistor", "Capacitor", "Inductor", "Transformer"],
          "options_hi": ["प्रतिरोधक", "कैपेसिटर", "इंडक्टर", "ट्रांसफार्मर"],
          "answer": "Capacitor",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 43,
          "question_en": "Which part of the cell contains genetic material?",
          "question_hi": "कोशिका का कौन सा भाग आनुवंशिक पदार्थ रखता है?",
          "options_en": ["Cytoplasm", "Nucleus", "Cell wall", "Membrane"],
          "options_hi": [" साइटोप्लाज्म", "न्यूक्लियस", "कोशिका भित्ति", "झिल्ली"],
          "answer": "Nucleus",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 44,
          "question_en": "Which color of light has the shortest wavelength?",
          "question_hi": "कौन से रंग की रोशनी की तरंगदैर्घ्य सबसे छोटी होती है?",
          "options_en": ["Red", "Blue", "Green", "Violet"],
          "options_hi": ["लाल", "नीला", "हरा", "बैंगनी"],
          "answer": "Violet",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 45,
          "question_en": "What is the main function of white blood cells?",
          "question_hi": "श्वेत रक्त कणिकाओं का मुख्य कार्य क्या है?",
          "options_en": [
            "Transport oxygen",
            "Fight infections",
            "Clot blood",
            "Carry nutrients"
          ],
          "options_hi": [
            "ऑक्सीजन का परिवहन",
            "संक्रमण से लड़ना",
            "रक्त का थक्का जमाना",
            "पोषक तत्व ले जाना"
          ],
          "answer": "Fight infections",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 46,
          "question_en": "Which layer of Earth do we live on?",
          "question_hi": "हम पृथ्वी की किस परत पर रहते हैं?",
          "options_en": ["Core", "Mantle", "Crust", "Inner Core"],
          "options_hi": ["कोर", "मेंटल", "क्रस्ट", "इनर कोर"],
          "answer": "Crust",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 47,
          "question_en": "Which blood group is known as universal donor?",
          "question_hi": "कौन सा रक्त समूह सार्वभौमिक दाता (universal donor) कहलाता है?",
          "options_en": ["A", "B", "AB", "O negative"],
          "options_hi": ["A", "B", "AB", "O ऋणात्मक"],
          "answer": "O negative",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 48,
          "question_en": "What is the chemical symbol for sodium?",
          "question_hi": "सोडियम का रासायनिक चिन्ह क्या है?",
          "options_en": ["S", "Na", "So", "Sn"],
          "options_hi": ["S", "Na", "So", "Sn"],
          "answer": "Na",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 49,
          "question_en": "Which is the heaviest naturally occurring element?",
          "question_hi": "सबसे भारी स्वाभाविक रूप से पाया जाने वाला तत्व कौन सा है?",
          "options_en": ["Uranium", "Gold", "Platinum", "Lead"],
          "options_hi": ["यूरेनियम", "सोना", "प्लैटिनम", "सीसा"],
          "answer": "Uranium",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 50,
          "question_en": "Which planet is known as the Red Planet?",
          "question_hi": "कौन सा ग्रह लाल ग्रह (Red Planet) कहलाता है?",
          "options_en": ["Venus", "Jupiter", "Mars", "Saturn"],
          "options_hi": ["शुक्र", "बृहस्पति", "मंगल", "शनि"],
          "answer": "Mars",
          "attempted": false,
          "selected": ""
        },
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