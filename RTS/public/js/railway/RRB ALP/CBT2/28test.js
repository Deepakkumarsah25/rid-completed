const questions =[
    {
      "num": 1,
      "question_en": "The purpose of a 'governor' in an engine is to:",
      "question_hi": "इंजन में 'गवर्नर' का उद्देश्य है:",
      "options_en": ["Control fuel supply", "Regulate engine speed", "Lubricate moving parts", "Cool the engine"],
      "options_hi": ["ईंधन आपूर्ति नियंत्रित करना", "इंजन की गति नियंत्रित करना", "चलने वाले भागों को चिकनाई देना", "इंजन को ठंडा करना"],
      "answer_en": "Regulate engine speed",
      "answer_hi": "इंजन की गति नियंत्रित करना"
    },
    {
      "num": 2,
      "question_en": "What is the primary function of a 'spark plug' in a petrol engine?",
      "question_hi": "पेट्रोल इंजन में 'स्पार्क प्लग' का प्राथमिक कार्य क्या है?",
      "options_en": ["Filter air", "Inject fuel", "Ignite air-fuel mixture", "Regulate exhaust"],
      "options_hi": ["हवा फ़िल्टर करना", "ईंधन इंजेक्ट करना", "वायु-ईंधन मिश्रण प्रज्वलित करना", "निकास विनियमित करना"],
      "answer_en": "Ignite air-fuel mixture",
      "answer_hi": "वायु-ईंधन मिश्रण प्रज्वलित करना"
    },
    {
      "num": 3,
      "question_en": "The unit of inductance is:",
      "question_hi": "प्रेरकत्व की इकाई है:",
      "options_en": ["Farad", "Henry", "Ohm", "Siemens"],
      "options_hi": ["फैरड", "हेनरी", "ओम", "सीमेंस"],
      "answer_en": "Henry",
      "answer_hi": "हेनरी"
    },
    {
      "num": 4,
      "question_en": "Which of these is NOT a type of fire?",
      "question_hi": "निम्नलिखित में से कौन सा आग का प्रकार नहीं है?",
      "options_en": ["Class A", "Class B", "Class C", "Class Z"],
      "options_hi": ["क्लास A", "क्लास B", "क्लास C", "क्लास Z"],
      "answer_en": "Class Z",
      "answer_hi": "क्लास Z"
    },
    {
      "num": 5,
      "question_en": "In a railway context, what does 'TMS' stand for?",
      "question_hi": "रेलवे संदर्भ में, 'TMS' का क्या अर्थ है?",
      "options_en": ["Train Management System", "Track Monitoring System", "Traffic Management System", "Train Monitoring Service"],
      "options_hi": ["ट्रेन प्रबंधन प्रणाली", "ट्रैक निगरानी प्रणाली", "यातायात प्रबंधन प्रणाली", "ट्रेन निगरानी सेवा"],
      "answer_en": "Train Management System",
      "answer_hi": "ट्रेन प्रबंधन प्रणाली"
    },
    {
      "num": 6,
      "question_en": "The process of joining two metal pieces by melting a filler metal between them is called:",
      "question_hi": "दो धातु के टुकड़ों के बीच एक फिलर धातु को पिघलाकर जोड़ने की प्रक्रिया कहलाती है:",
      "options_en": ["Soldering", "Brazing", "Welding", "Riveting"],
      "options_hi": ["सोल्डरिंग", "ब्रेज़िंग", "वेल्डिंग", "रिवेटिंग"],
      "answer_en": "Brazing",
      "answer_hi": "ब्रेज़िंग"
    },
    {
      "num": 7,
      "question_en": "What is the normal range of human hearing in Hertz?",
      "question_hi": "मानव श्रवण की सामान्य सीमा हर्ट्ज़ में कितनी है?",
      "options_en": ["20 Hz to 20 kHz", "2 Hz to 2 kHz", "200 Hz to 200 kHz", "20 Hz to 2 kHz"],
      "options_hi": ["20 Hz से 20 kHz", "2 Hz से 2 kHz", "200 Hz से 200 kHz", "20 Hz से 2 kHz"],
      "answer_en": "20 Hz to 20 kHz",
      "answer_hi": "20 Hz से 20 kHz"
    },
    {
      "num": 8,
      "question_en": "Which of these materials has the highest thermal conductivity?",
      "question_hi": "निम्नलिखित में से किस सामग्री की तापीय चालकता सबसे अधिक है?",
      "options_en": ["Rubber", "Wood", "Copper", "Glass"],
      "options_hi": ["रबर", "लकड़ी", "तांबा", "कांच"],
      "answer_en": "Copper",
      "answer_hi": "तांबा"
    },
    {
      "num": 9,
      "question_en": "The 'Dead Man's Handle' or 'Vigilance Device' in a train is used to:",
      "question_hi": "ट्रेन में 'डेड मैन हैंडल' या 'सतर्कता उपकरण' का उपयोग किया जाता है:",
      "options_en": ["Stop the train in emergency", "Check driver's alertness", "Control speed", "Sound the horn"],
      "options_hi": ["आपातकाल में ट्रेन रोकने के लिए", "चालक की सतर्कता जांचने के लिए", "गति नियंत्रित करने के लिए", "हॉर्न बजाने के लिए"],
      "answer_en": "Check driver's alertness",
      "answer_hi": "चालक की सतर्कता जांचने के लिए"
    },
    {
      "num": 10,
      "question_en": "What is the approximate speed of sound in air at room temperature?",
      "question_hi": "कमरे के तापमान पर हवा में ध्वनि की अनुमानित गति क्या है?",
      "options_en": ["330 m/s", "300 m/s", "250 m/s", "400 m/s"],
      "options_hi": ["330 मी/से", "300 मी/से", "250 मी/से", "400 मी/से"],
      "answer_en": "330 m/s",
      "answer_hi": "330 मी/से"
    },
    {
      "num": 11,
      "question_en": "In a lathe machine, the part that holds the cutting tool is called:",
      "question_hi": "खराद मशीन में, वह भाग जो कटिंग टूल को पकड़ता है, कहलाता है:",
      "options_en": ["Chuck", "Tailstock", "Carriage", "Tool post"],
      "options_hi": ["चक", "टेलस्टॉक", "कैरियज", "टूल पोस्ट"],
      "answer_en": "Tool post",
      "answer_hi": "टूल पोस्ट"
    },
    {
      "num": 12,
      "question_en": "Which of these is a 'surface finishing' process?",
      "question_hi": "निम्नलिखित में से कौन सी 'सतह परिष्करण' प्रक्रिया है?",
      "options_en": ["Drilling", "Milling", "Grinding", "Casting"],
      "options_hi": ["ड्रिलिंग", "मिलिंग", "ग्राइंडिंग", "कास्टिंग"],
      "answer_en": "Grinding",
      "answer_hi": "ग्राइंडिंग"
    },
    {
      "num": 13,
      "question_en": "The ratio of tensile stress to tensile strain within elastic limit is called:",
      "question_hi": "प्रत्यास्थ सीमा के भीतर तन्य प्रतिबल और तन्य विकृति का अनुपात कहलाता है:",
      "options_en": ["Bulk modulus", "Shear modulus", "Young's modulus", "Rigidity modulus"],
      "options_hi": ["आयतन प्रत्यास्थता गुणांक", "कर्तन प्रत्यास्थता गुणांक", "यंग का मापांक", "दृढ़ता मापांक"],
      "answer_en": "Young's modulus",
      "answer_hi": "यंग का मापांक"
    },
    {
      "num": 14,
      "question_en": "Which of these is used to measure very high temperatures (above 1000°C)?",
      "question_hi": "बहुत अधिक तापमान (1000°C से ऊपर) मापने के लिए इनमें से किसका उपयोग किया जाता है?",
      "options_en": ["Thermocouple", "Mercury thermometer", "Alcohol thermometer", "Bimetallic strip"],
      "options_hi": ["थर्मोकपल", "मरकरी थर्मामीटर", "अल्कोहल थर्मामीटर", "द्विधातु पट्टी"],
      "answer_en": "Thermocouple",
      "answer_hi": "थर्मोकपल"
    },
    {
      "num": 15,
      "question_en": "The 'Indian Railways Institute of Mechanical and Electrical Engineering' is located at:",
      "question_hi": "'भारतीय रेलवे यांत्रिक एवं विद्युत इंजीनियरिंग संस्थान' कहाँ स्थित है?",
      "options_en": ["Jamalpur", "Pune", "Chennai", "Secunderabad"],
      "options_hi": ["जमालपुर", "पुणे", "चेन्नई", "सिकंदराबाद"],
      "answer_en": "Jamalpur",
      "answer_hi": "जमालपुर"
    },
    {
      "num": 16,
      "question_en": "In a hydraulic system, if the pressure is doubled on a piston, the force will:",
      "question_hi": "एक हाइड्रोलिक प्रणाली में, यदि एक पिस्टन पर दबाव दोगुना कर दिया जाए, तो बल होगा:",
      "options_en": ["Halve", "Remain same", "Double", "Quadruple"],
      "options_hi": ["आधा हो जाएगा", "समान रहेगा", "दोगुना हो जाएगा", "चौगुना हो जाएगा"],
      "answer_en": "Double",
      "answer_hi": "दोगुना हो जाएगा"
    },
    {
      "num": 17,
      "question_en": "What does 'MIG' stand for in welding?",
      "question_hi": "वेल्डिंग में 'MIG' का क्या अर्थ है?",
      "options_en": ["Metal Inert Gas", "Metal Insert Gas", "Manual Inert Gas", "Manual Insert Gas"],
      "options_hi": ["मेटल इनर्ट गैस", "मेटल इंसर्ट गैस", "मैनुअल इनर्ट गैस", "मैनुअल इंसर्ट गैस"],
      "answer_en": "Metal Inert Gas",
      "answer_hi": "मेटल इनर्ट गैस"
    },
    {
      "num": 18,
      "question_en": "Which of these is an example of a 'second class lever'?",
      "question_hi": "निम्नलिखित में से कौन 'द्वितीय श्रेणी के उत्तोलक' का उदाहरण है?",
      "options_en": ["See-saw", "Wheelbarrow", "Tongs", "Scissors"],
      "options_hi": ["झूला", "व्हीलबेरो", "चिमटा", "कैंची"],
      "answer_en": "Wheelbarrow",
      "answer_hi": "व्हीलबेरो"
    },
    {
      "num": 19,
      "question_en": "The purpose of 'annealing' is to:",
      "question_hi": "'ऐनिलिंग' का उद्देश्य है:",
      "options_en": ["Harden the metal", "Increase ductility and reduce hardness", "Improve surface finish", "Add carbon to surface"],
      "options_hi": ["धातु को कठोर बनाना", "लचीलापन बढ़ाना और कठोरता कम करना", "सतह परिष्करण में सुधार करना", "सतह पर कार्बन जोड़ना"],
      "answer_en": "Increase ductility and reduce hardness",
      "answer_hi": "लचीलापन बढ़ाना और कठोरता कम करना"
    },
    {
      "num": 20,
      "question_en": "In a 4-stroke engine, the four strokes in order are:",
      "question_hi": "4-स्ट्रोक इंजन में, चार स्ट्रोक क्रम में हैं:",
      "options_en": ["Intake, Compression, Power, Exhaust", "Intake, Power, Compression, Exhaust", "Compression, Intake, Power, Exhaust", "Exhaust, Intake, Compression, Power"],
      "options_hi": ["अंतर्ग्रहण, संपीड़न, शक्ति, निकास", "अंतर्ग्रहण, शक्ति, संपीड़न, निकास", "संपीड़न, अंतर्ग्रहण, शक्ति, निकास", "निकास, अंतर्ग्रहण, संपीड़न, शक्ति"],
      "answer_en": "Intake, Compression, Power, Exhaust",
      "answer_hi": "अंतर्ग्रहण, संपीड़न, शक्ति, निकास"
    },
    {
      "num": 21,
      "question_en": "Which of these is a characteristic of a 'series wound DC motor'?",
      "question_hi": "निम्नलिखित में से कौन सा 'श्रेणी कुंडलित DC मोटर' की विशेषता है?",
      "options_en": ["Constant speed", "High starting torque", "Low starting torque", "Speed increases with load"],
      "options_hi": ["स्थिर गति", "उच्च प्रारंभिक बलाघूर्ण", "कम प्रारंभिक बलाघूर्ण", "भार के साथ गति बढ़ती है"],
      "answer_en": "High starting torque",
      "answer_hi": "उच्च प्रारंभिक बलाघूर्ण"
    },
    {
      "num": 22,
      "question_en": "What is the 'gauge' of Indian Railways broad gauge track?",
      "question_hi": "भारतीय रेलवे ब्रॉड गेज ट्रैक का 'गेज' क्या है?",
      "options_en": ["1000 mm", "1435 mm", "1676 mm", "1765 mm"],
      "options_hi": ["1000 मिमी", "1435 मिमी", "1676 मिमी", "1765 मिमी"],
      "answer_en": "1676 mm",
      "answer_hi": "1676 मिमी"
    },
    {
      "num": 23,
      "question_en": "The property of a material to return to its original shape after deformation is called:",
      "question_hi": "विकृति के बाद अपने मूल आकार में लौटने की सामग्री की संपत्ति को कहा जाता है:",
      "options_en": ["Plasticity", "Elasticity", "Malleability", "Ductility"],
      "options_hi": ["प्लास्टिसिटी", "प्रत्यास्थता", "आघातवर्ध्यता", "तन्यता"],
      "answer_en": "Elasticity",
      "answer_hi": "प्रत्यास्थता"
    },
    {
      "num": 24,
      "question_en": "What is the purpose of a 'radiator' in an engine cooling system?",
      "question_hi": "इंजन कूलिंग सिस्टम में 'रेडिएटर' का उद्देश्य क्या है?",
      "options_en": ["To heat the engine", "To cool the coolant", "To filter air", "To pressurize the system"],
      "options_hi": ["इंजन को गर्म करने के लिए", "कूलेंट को ठंडा करने के लिए", "हवा को फ़िल्टर करने के लिए", "सिस्टम को दबाव डालने के लिए"],
      "answer_en": "To cool the coolant",
      "answer_hi": "कूलेंट को ठंडा करने के लिए"
    },
    {
      "num": 25,
      "question_en": "Which of these is used to measure the viscosity of lubricating oil?",
      "question_hi": "स्नेहक तेल की श्यानता मापने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
      "options_en": ["Viscometer", "Hydrometer", "Manometer", "Tachometer"],
      "options_hi": ["विस्कोमीटर", "हाइड्रोमीटर", "मैनोमीटर", "टैकोमीटर"],
      "answer_en": "Viscometer",
      "answer_hi": "विस्कोमीटर"
    },
    {
      "num": 26,
      "question_en": "The 'Bhabha Atomic Research Centre' (BARC) is located in:",
      "question_hi": "'भाभा परमाणु अनुसंधान केंद्र' (BARC) कहाँ स्थित है?",
      "options_en": ["Mumbai", "Chennai", "Hyderabad", "Kolkata"],
      "options_hi": ["मुंबई", "चेन्नई", "हैदराबाद", "कोलकाता"],
      "answer_en": "Mumbai",
      "answer_hi": "मुंबई"
    },
    {
      "num": 27,
      "question_en": "Which of these circuits is used to 'smooth' the output of a rectifier?",
      "question_hi": "रेक्टिफायर के आउटपुट को 'स्मूथ' करने के लिए इनमें से किस सर्किट का उपयोग किया जाता है?",
      "options_en": ["Oscillator circuit", "Filter circuit", "Amplifier circuit", "Clipper circuit"],
      "options_hi": ["दोलक सर्किट", "फ़िल्टर सर्किट", "प्रवर्धक सर्किट", "क्लिपर सर्किट"],
      "answer_en": "Filter circuit",
      "answer_hi": "फ़िल्टर सर्किट"
    },
    {
      "num": 28,
      "question_en": "The 'coefficient of friction' is the ratio of:",
      "question_hi": "'घर्षण गुणांक' का अनुपात है:",
      "options_en": ["Friction force to normal force", "Normal force to friction force", "Weight to friction force", "Friction force to area"],
      "options_hi": ["घर्षण बल का सामान्य बल से", "सामान्य बल का घर्षण बल से", "वजन का घर्षण बल से", "घर्षण बल का क्षेत्र से"],
      "answer_en": "Friction force to normal force",
      "answer_hi": "घर्षण बल का सामान्य बल से"
    },
    {
      "num": 29,
      "question_en": "Which gas is filled in electric bulbs to prevent oxidation of the filament?",
      "question_hi": "फिलामेंट के ऑक्सीकरण को रोकने के लिए इलेक्ट्रिक बल्बों में कौन सी गैस भरी जाती है?",
      "options_en": ["Oxygen", "Hydrogen", "Argon", "Chlorine"],
      "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "आर्गन", "क्लोरीन"],
      "answer_en": "Argon",
      "answer_hi": "आर्गन"
    },
    {
      "num": 30,
      "question_en": "What does 'CNG' stand for?",
      "question_hi": "'CNG' का क्या अर्थ है?",
      "options_en": ["Compressed Natural Gas", "Condensed Natural Gas", "Carbon Natural Gas", "Compressed Nitrogen Gas"],
      "options_hi": ["संपीड़ित प्राकृतिक गैस", "संघनित प्राकृतिक गैस", "कार्बन प्राकृतिक गैस", "संपीड़ित नाइट्रोजन गैस"],
      "answer_en": "Compressed Natural Gas",
      "answer_hi": "संपीड़ित प्राकृतिक गैस"
    },
    {
      "num": 31,
      "question_en": "Which of these is used to make precision measurements (like in micrometers)?",
      "question_hi": "सटीक माप (जैसे माइक्रोमीटर में) करने के लिए इनमें से किसका उपयोग किया जाता है?",
      "options_en": ["Vernier scale", "Ruler", "Measuring tape", "Protractor"],
      "options_hi": ["वर्नियर पैमाना", "रूलर", "मापने वाला टेप", "चाँदा"],
      "answer_en": "Vernier scale",
      "answer_hi": "वर्नियर पैमाना"
    },
    {
      "num": 32,
      "question_en": "A 'thermostat' is used to control:",
      "question_hi": "एक 'थर्मोस्टेट' का उपयोग नियंत्रित करने के लिए किया जाता है:",
      "options_en": ["Pressure", "Humidity", "Temperature", "Flow rate"],
      "options_hi": ["दबाव", "आर्द्रता", "तापमान", "प्रवाह दर"],
      "answer_en": "Temperature",
      "answer_hi": "तापमान"
    },
    {
      "num": 33,
      "question_en": "Which of these is NOT a part of a 'centrifugal pump'?",
      "question_hi": "निम्नलिखित में से कौन 'अपकेंद्री पंप' का हिस्सा नहीं है?",
      "options_en": ["Impeller", "Casing", "Piston", "Shaft"],
      "options_hi": ["इम्पेलर", "केसिंग", "पिस्टन", "शाफ्ट"],
      "answer_en": "Piston",
      "answer_hi": "पिस्टन"
    },
    {
      "num": 34,
      "question_en": "The 'first aid' for electric shock is to:",
      "question_hi": "बिजली के झटके के लिए 'प्राथमिक उपचार' है:",
      "options_en": ["Pour water", "Touch the person immediately", "Switch off power and start CPR if needed", "Give salt water to drink"],
      "options_hi": ["पानी डालना", "तुरंत व्यक्ति को छूना", "बिजली बंद करें और यदि आवश्यक हो तो CPR शुरू करें", "पीने के लिए नमक पानी देना"],
      "answer_en": "Switch off power and start CPR if needed",
      "answer_hi": "बिजली बंद करें और यदि आवश्यक हो तो CPR शुरू करें"
    },
    {
      "num": 35,
      "question_en": "The 'I-section' beams are commonly used in construction because they:",
      "question_hi": "'I-सेक्शन' बीम आमतौर पर निर्माण में उपयोग किए जाते हैं क्योंकि वे:",
      "options_en": ["Are cheap", "Have high strength-to-weight ratio", "Are easy to manufacture", "Look aesthetic"],
      "options_hi": ["सस्ते हैं", "उच्च शक्ति-से-भार अनुपात रखते हैं", "निर्माण में आसान हैं", "सौंदर्यात्मक दिखते हैं"],
      "answer_en": "Have high strength-to-weight ratio",
      "answer_hi": "उच्च शक्ति-से-भार अनुपात रखते हैं"
    },
    {
      "num": 36,
      "question_en": "What is the main advantage of a 'diesel engine' over a 'petrol engine'?",
      "question_hi": "'पेट्रोल इंजन' की तुलना में 'डीजल इंजन' का मुख्य लाभ क्या है?",
      "options_en": ["Higher speed", "Lower initial cost", "Better fuel efficiency", "Quieter operation"],
      "options_hi": ["उच्च गति", "कम प्रारंभिक लागत", "बेहतर ईंधन दक्षता", "शांत संचालन"],
      "answer_en": "Better fuel efficiency",
      "answer_hi": "बेहतर ईंधन दक्षता"
    },
    {
      "num": 37,
      "question_en": "Which of these is an example of a 'positive displacement pump'?",
      "question_hi": "निम्नलिखित में से कौन 'सकारात्मक विस्थापन पंप' का एक उदाहरण है?",
      "options_en": ["Centrifugal pump", "Gear pump", "Axial flow pump", "Mixed flow pump"],
      "options_hi": ["अपकेंद्री पंप", "गियर पंप", "अक्षीय प्रवाह पंप", "मिश्रित प्रवाह पंप"],
      "answer_en": "Gear pump",
      "answer_hi": "गियर पंप"
    },
    {
      "num": 38,
      "question_en": "The color of the 'neutral wire' in electrical wiring as per Indian standards is:",
      "question_hi": "भारतीय मानकों के अनुसार विद्युत वायरिंग में 'न्यूट्रल वायर' का रंग है:",
      "options_en": ["Red", "Green", "Black", "Blue"],
      "options_hi": ["लाल", "हरा", "काला", "नीला"],
      "answer_en": "Blue",
      "answer_hi": "नीला"
    },
    {
      "num": 39,
      "question_en": "What is the main function of a 'differential' in an automobile?",
      "question_hi": "ऑटोमोबाइल में 'डिफरेंशियल' का मुख्य कार्य क्या है?",
      "options_en": ["To allow wheels to rotate at different speeds while turning", "To increase speed", "To reduce noise", "To connect engine to wheels"],
      "options_hi": ["मोड़ते समय पहियों को अलग-अलग गति से घूमने देने के लिए", "गति बढ़ाने के लिए", "शोर कम करने के लिए", "इंजन को पहियों से जोड़ने के लिए"],
      "answer_en": "To allow wheels to rotate at different speeds while turning",
      "answer_hi": "मोड़ते समय पहियों को अलग-अलग गति से घूमने देने के लिए"
    },
    {
      "num": 40,
      "question_en": "Which of these is a 'ferrous' metal?",
      "question_hi": "निम्नलिखित में से कौन सी एक 'लौह' धातु है?",
      "options_en": ["Aluminum", "Copper", "Cast Iron", "Brass"],
      "options_hi": ["एल्यूमीनियम", "तांबा", "कास्ट आयरन", "पीतल"],
      "answer_en": "Cast Iron",
      "answer_hi": "कास्ट आयरन"
    },
    {
      "num": 41,
      "question_en": "The 'clearance volume' in an engine cylinder is:",
      "question_hi": "इंजन सिलेंडर में 'क्लीयरेंस वॉल्यूम' है:",
      "options_en": ["Volume when piston is at TDC", "Volume when piston is at BDC", "Swept volume", "Total volume"],
      "options_hi": ["जब पिस्टन TDC पर हो तो आयतन", "जब पिस्टन BDC पर हो तो आयतन", "स्वेप्ट वॉल्यूम", "कुल आयतन"],
      "answer_en": "Volume when piston is at TDC",
      "answer_hi": "जब पिस्टन TDC पर हो तो आयतन"
    },
    {
      "num": 42,
      "question_en": "The 'study of fluids in motion' is called:",
      "question_hi": "'गति में तरल पदार्थों का अध्ययन' कहलाता है:",
      "options_en": ["Hydraulics", "Hydrostatics", "Fluid Mechanics", "Pneumatics"],
      "options_hi": ["हाइड्रोलिक्स", "हाइड्रोस्टैटिक्स", "तरल यांत्रिकी", "वायवीय"],
      "answer_en": "Fluid Mechanics",
      "answer_hi": "तरल यांत्रिकी"
    },
    {
      "num": 43,
      "question_en": "Which of these instruments measures the 'roundness' of a cylindrical object?",
      "question_hi": "निम्नलिखित में से कौन सा उपकरण एक बेलनाकार वस्तु की 'गोलाई' को मापता है?",
      "options_en": ["Vernier caliper", "Micrometer", "Dial indicator", "Feeler gauge"],
      "options_hi": ["वर्नियर कैलिपर", "माइक्रोमीटर", "डायल इंडिकेटर", "फीलर गेज"],
      "answer_en": "Dial indicator",
      "answer_hi": "डायल इंडिकेटर"
    },
    {
      "num": 44,
      "question_en": "The 'headquarters' of the 'Research Designs and Standards Organisation' (RDSO) is at:",
      "question_hi": "'अनुसंधान अभिकल्प एवं मानक संगठन' (RDSO) का 'मुख्यालय' कहाँ है?",
      "options_en": ["New Delhi", "Lucknow", "Mumbai", "Chennai"],
      "options_hi": ["नई दिल्ली", "लखनऊ", "मुंबई", "चेन्नई"],
      "answer_en": "Lucknow",
      "answer_hi": "लखनऊ"
    },
    {
      "num": 45,
      "question_en": "Which of these is used to connect two shafts at an angle?",
      "question_hi": "दो शाफ्टों को एक कोण पर जोड़ने के लिए इनमें से किसका उपयोग किया जाता है?",
      "options_en": ["Clutch", "Coupling", "Universal joint", "Bearing"],
      "options_hi": ["क्लच", "कपलिंग", "यूनिवर्सल जॉइंट", "बेयरिंग"],
      "answer_en": "Universal joint",
      "answer_hi": "यूनिवर्सल जॉइंट"
    },
    {
      "num": 46,
      "question_en": "The process of making a hole in metal using a rotating tool is called:",
      "question_hi": "धातु में एक घूर्णन उपकरण का उपयोग करके छेद बनाने की प्रक्रिया कहलाती है:",
      "options_en": ["Milling", "Turning", "Drilling", "Boring"],
      "options_hi": ["मिलिंग", "टर्निंग", "ड्रिलिंग", "बोरिंग"],
      "answer_en": "Drilling",
      "answer_hi": "ड्रिलिंग"
    },
    {
      "num": 47,
      "question_en": "What does 'BHP' stand for?",
      "question_hi": "'BHP' का क्या अर्थ है?",
      "options_en": ["Brake Horse Power", "British Horse Power", "Brake Heat Power", "British Heat Power"],
      "options_hi": ["ब्रेक हॉर्स पावर", "ब्रिटिश हॉर्स पावर", "ब्रेक हीट पावर", "ब्रिटिश हीट पावर"],
      "answer_en": "Brake Horse Power",
      "answer_hi": "ब्रेक हॉर्स पावर"
    },
    {
      "num": 48,
      "question_en": "Which of these is a 'cold working' process?",
      "question_hi": "निम्नलिखित में से कौन एक 'कोल्ड वर्किंग' प्रक्रिया है?",
      "options_en": ["Forging", "Casting", "Rolling", "Annealing"],
      "options_hi": ["फोर्जिंग", "कास्टिंग", "रोलिंग", "ऐनिलिंग"],
      "answer_en": "Rolling",
      "answer_hi": "रोलिंग"
    },
    {
      "num": 49,
      "question_en": "The 'Indian Railways' was nationalized in the year:",
      "question_hi": "'भारतीय रेलवे' का राष्ट्रीयकरण वर्ष में हुआ था:",
      "options_en": ["1947", "1950", "1951", "1956"],
      "options_hi": ["1947", "1950", "1951", "1956"],
      "answer_en": "1951",
      "answer_hi": "1951"
    },
    {
      "num": 50,
      "question_en": "What is the purpose of 'camber' in a road or railway track?",
      "question_hi": "सड़क या रेलवे ट्रैक में 'कैम्बर' का उद्देश्य क्या है?",
      "options_en": ["For drainage", "For aesthetics", "To reduce friction", "To increase speed"],
      "options_hi": ["जल निकासी के लिए", "सौंदर्यशास्त्र के लिए", "घर्षण कम करने के लिए", "गति बढ़ाने के लिए"],
      "answer_en": "For drainage",
      "answer_hi": "जल निकासी के लिए"
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