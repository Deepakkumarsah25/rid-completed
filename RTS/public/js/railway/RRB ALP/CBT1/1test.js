const questions = [
  {
    "num": 1,
    "question_en": "Under which Act was the Railway Board established in India?",
    "question_hi": "भारत में रेलवे बोर्ड की स्थापना किस अधिनियम के तहत हुई थी?",
    "options_en": ["Railway Act, 1890", "Indian Railway Board Act, 1905", "Railways Act, 1989", "Indian Railways Act, 1908"],
    "options_hi": ["रेलवे अधिनियम, 1890", "भारतीय रेलवे बोर्ड अधिनियम, 1905", "रेलवे अधिनियम, 1989", "भारतीय रेलवे अधिनियम, 1908"],
    "answer_en": "Indian Railway Board Act, 1905",
    "answer_hi": "भारतीय रेलवे बोर्ड अधिनियम, 1905",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the permissible maximum axle load for Broad Gauge (BG) tracks in India?",
    "question_hi": "भारत में ब्रॉड गेज (BG) ट्रैक के लिए अनुमेय अधिकतम एक्सल लोड क्या है?",
    "options_en": ["20.32 tonnes", "22.82 tonnes", "25.00 tonnes", "28.00 tonnes"],
    "options_hi": ["20.32 टन", "22.82 टन", "25.00 टन", "28.00 टन"],
    "answer_en": "22.82 tonnes",
    "answer_hi": "22.82 टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which railway zone has the highest route kilometers in India?",
    "question_hi": "भारत में किस रेलवे जोन के पास सबसे अधिक रूट किलोमीटर है?",
    "options_en": ["Northern Railway", "Western Railway", "Southern Railway", "Central Railway"],
    "options_hi": ["उत्तरी रेलवे", "पश्चिम रेलवे", "दक्षिण रेलवे", "मध्य रेलवे"],
    "answer_en": "Northern Railway",
    "answer_hi": "उत्तरी रेलवे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of a 'Fish Plate' in railway track?",
    "question_hi": "रेलवे ट्रैक में 'फिश प्लेट' का उद्देश्य क्या है?",
    "options_en": ["To join two rails", "To provide insulation", "To measure rail temperature", "To connect track to sleepers"],
    "options_hi": ["दो रेलों को जोड़ना", "इन्सुलेशन प्रदान करना", "रेल तापमान मापना", "ट्रैक को स्लीपर से जोड़ना"],
    "answer_en": "To join two rails",
    "answer_hi": "दो रेलों को जोड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the standard length of a Broad Gauge (BG) rail in India?",
    "question_hi": "भारत में ब्रॉड गेज (BG) रेल की मानक लंबाई क्या है?",
    "options_en": ["12 meters", "13 meters", "18 meters", "24 meters"],
    "options_hi": ["12 मीटर", "13 मीटर", "18 मीटर", "24 मीटर"],
    "answer_en": "13 meters",
    "answer_hi": "13 मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which signaling system uses 'Absolute Block System' in Indian Railways?",
    "question_hi": "भारतीय रेलवे में 'एब्सोल्यूट ब्लॉक सिस्टम' किस सिग्नलिंग प्रणाली में प्रयोग होता है?",
    "options_en": ["Automatic Block System", "Token Block System", "Track Circuiting", "Centralized Traffic Control"],
    "options_hi": ["ऑटोमैटिक ब्लॉक सिस्टम", "टोकन ब्लॉक सिस्टम", "ट्रैक सर्किटिंग", "केंद्रीकृत यातायात नियंत्रण"],
    "answer_en": "Token Block System",
    "answer_hi": "टोकन ब्लॉक सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the function of a 'Bogie' in a railway coach?",
    "question_hi": "रेलवे कोच में 'बोगी' का कार्य क्या है?",
    "options_en": ["To provide seating", "To connect coaches", "To support wheels and suspension", "To control braking"],
    "options_hi": ["बैठने की व्यवस्था प्रदान करना", "कोच को जोड़ना", "पहियों और सस्पेंशन को सहारा देना", "ब्रेकिंग नियंत्रित करना"],
    "answer_en": "To support wheels and suspension",
    "answer_hi": "पहियों और सस्पेंशन को सहारा देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which material is commonly used for railway sleepers in modern tracks?",
    "question_hi": "आधुनिक ट्रैक में रेलवे स्लीपर के लिए आमतौर पर किस सामग्री का उपयोग किया जाता है?",
    "options_en": ["Wooden", "Cast Iron", "Steel", "Concrete"],
    "options_hi": ["लकड़ी", "कास्ट आयरन", "स्टील", "कंक्रीट"],
    "answer_en": "Concrete",
    "answer_hi": "कंक्रीट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does 'PWI' stand for in Indian Railways?",
    "question_hi": "भारतीय रेलवे में 'PWI' का क्या अर्थ है?",
    "options_en": ["Permanent Way Inspector", "Power and Water Inspector", "Public Works Inspector", "Passenger Welfare Inspector"],
    "options_hi": ["परमानेंट वे इंस्पेक्टर", "पावर और वाटर इंस्पेक्टर", "पब्लिक वर्क्स इंस्पेक्टर", "यात्री कल्याण इंस्पेक्टर"],
    "answer_en": "Permanent Way Inspector",
    "answer_hi": "परमानेंट वे इंस्पेक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the gauge of 'Konkan Railway'?",
    "question_hi": "'कोंकण रेलवे' का गेज क्या है?",
    "options_en": ["Broad Gauge (1676 mm)", "Metre Gauge (1000 mm)", "Narrow Gauge (762 mm)", "Standard Gauge (1435 mm)"],
    "options_hi": ["ब्रॉड गेज (1676 मिमी)", "मीटर गेज (1000 मिमी)", "नैरो गेज (762 मिमी)", "स्टैंडर्ड गेज (1435 मिमी)"],
    "answer_en": "Broad Gauge (1676 mm)",
    "answer_hi": "ब्रॉड गेज (1676 मिमी)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which committee recommended the formation of Railway Board?",
    "question_hi": "किस समिति ने रेलवे बोर्ड के गठन की सिफारिश की थी?",
    "options_en": ["Acworth Committee", "Kerr Committee", "Rao Committee", "Mallya Committee"],
    "options_hi": ["एकवर्थ समिति", "कर समिति", "राव समिति", "मल्ल्या समिति"],
    "answer_en": "Acworth Committee",
    "answer_hi": "एकवर्थ समिति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the minimum radius of curvature for Broad Gauge main line?",
    "question_hi": "ब्रॉड गेज मुख्य लाइन के लिए न्यूनतम वक्रता त्रिज्या क्या है?",
    "options_en": ["175 meters", "218 meters", "300 meters", "400 meters"],
    "options_hi": ["175 मीटर", "218 मीटर", "300 मीटर", "400 मीटर"],
    "answer_en": "218 meters",
    "answer_hi": "218 मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which type of bearing is commonly used in modern railway coaches?",
    "question_hi": "आधुनिक रेलवे कोच में आमतौर पर किस प्रकार का बेयरिंग प्रयोग होता है?",
    "options_en": ["Plain Bearing", "Roller Bearing", "Ball Bearing", "Tapered Bearing"],
    "options_hi": ["प्लेन बेयरिंग", "रोलर बेयरिंग", "बॉल बेयरिंग", "टेपर्ड बेयरिंग"],
    "answer_en": "Roller Bearing",
    "answer_hi": "रोलर बेयरिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the purpose of 'Check Rails' in railway track?",
    "question_hi": "रेलवे ट्रैक में 'चेक रेल्स' का उद्देश्य क्या है?",
    "options_en": ["To prevent derailment", "To increase speed", "To reduce noise", "To measure wear"],
    "options_hi": ["पटरी से उतरने को रोकना", "गति बढ़ाना", "शोर कम करना", "घिसाव मापना"],
    "answer_en": "To prevent derailment",
    "answer_hi": "पटरी से उतरने को रोकना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which signaling system is used in Delhi Metro?",
    "question_hi": "दिल्ली मेट्रो में किस सिग्नलिंग सिस्टम का उपयोग किया जाता है?",
    "options_en": ["Absolute Block", "Automatic Train Control (ATC)", "Token System", "Manual Block"],
    "options_hi": ["एब्सोल्यूट ब्लॉक", "ऑटोमैटिक ट्रेन कंट्रोल (एटीसी)", "टोकन सिस्टम", "मैन्युअल ब्लॉक"],
    "answer_en": "Automatic Train Control (ATC)",
    "answer_hi": "ऑटोमैटिक ट्रेन कंट्रोल (एटीसी)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'Rail Fracture' commonly caused by?",
    "question_hi": "'रेल फ्रैक्चर' आमतौर पर किसके कारण होता है?",
    "options_en": ["Overloading", "Thermal Stresses", "Corrosion", "All of the above"],
    "options_hi": ["अधिभार", "थर्मल तनाव", "जंग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which test is conducted to determine rail steel quality?",
    "question_hi": "रेल स्टील की गुणवत्ता निर्धारित करने के लिए कौन सा परीक्षण किया जाता है?",
    "options_en": ["Brinell Hardness Test", "Tensile Test", "Charpy Impact Test", "All of these"],
    "options_hi": ["ब्रिनेल हार्डनेस टेस्ट", "टेंसाइल टेस्ट", "चार्पी इम्पैक्ट टेस्ट", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the maximum permissible speed on Broad Gauge in India?",
    "question_hi": "भारत में ब्रॉड गेज पर अधिकतम अनुमेय गति क्या है?",
    "options_en": ["130 km/h", "150 km/h", "160 km/h", "180 km/h"],
    "options_hi": ["130 किमी/घंटा", "150 किमी/घंटा", "160 किमी/घंटा", "180 किमी/घंटा"],
    "answer_en": "160 km/h",
    "answer_hi": "160 किमी/घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which system provides continuous track-to-train communication?",
    "question_hi": "कौन सी प्रणाली निरंतर ट्रैक-से-ट्रेन संचार प्रदान करती है?",
    "options_en": ["GPS", "RFID", "GSM-R", "Wi-Fi"],
    "options_hi": ["जीपीएस", "आरएफआईडी", "जीएसएम-आर", "वाई-फाई"],
    "answer_en": "GSM-R",
    "answer_hi": "जीएसएम-आर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'LHB' stand for in railway coaches?",
    "question_hi": "रेलवे कोच में 'LHB' का क्या अर्थ है?",
    "options_en": ["Light High-speed Bogie", "Linke Hofmann Busch", "Low Height Body", "Lightweight Hybrid Body"],
    "options_hi": ["लाइट हाई-स्पीड बोगी", "लिंके हॉफमैन बुश", "लो हाइट बॉडी", "लाइटवेट हाइब्रिड बॉडी"],
    "answer_en": "Linke Hofmann Busch",
    "answer_hi": "लिंके हॉफमैन बुश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which braking system is used in modern trains?",
    "question_hi": "आधुनिक ट्रेनों में किस ब्रेकिंग सिस्टम का उपयोग किया जाता है?",
    "options_en": ["Vacuum Brake", "Air Brake", "Electro-pneumatic Brake", "Regenerative Brake"],
    "options_hi": ["वैक्यूम ब्रेक", "एयर ब्रेक", "इलेक्ट्रो-न्यूमैटिक ब्रेक", "रीजेनरेटिव ब्रेक"],
    "answer_en": "Electro-pneumatic Brake",
    "answer_hi": "इलेक्ट्रो-न्यूमैटिक ब्रेक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the purpose of 'Ballast' in railway track?",
    "question_hi": "रेलवे ट्रैक में 'बैलास्ट' का उद्देश्य क्या है?",
    "options_en": ["Load distribution", "Drainage", "Track stability", "All of these"],
    "options_hi": ["लोड वितरण", "जल निकासी", "ट्रैक स्थिरता", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which organization sets technical standards for Indian Railways?",
    "question_hi": "भारतीय रेलवे के लिए तकनीकी मानक कौन सा संगठन निर्धारित करता है?",
    "options_en": ["RDSO", "Railway Board", "CRIS", "IRCTC"],
    "options_hi": ["आरडीएसओ", "रेलवे बोर्ड", "क्रिस", "आईआरसीटीसी"],
    "answer_en": "RDSO",
    "answer_hi": "आरडीएसओ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'Rail Corrugation'?",
    "question_hi": "'रेल कॉर्रुगेशन' क्या है?",
    "options_en": ["Rail wear pattern", "Rail manufacturing defect", "Rail alignment error", "Rail welding issue"],
    "options_hi": ["रेल वियर पैटर्न", "रेल निर्माण दोष", "रेल संरेखण त्रुटि", "रेल वेल्डिंग समस्या"],
    "answer_en": "Rail wear pattern",
    "answer_hi": "रेल वियर पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which welding method is used for rail joints?",
    "question_hi": "रेल जोड़ों के लिए किस वेल्डिंग विधि का उपयोग किया जाता है?",
    "options_en": ["Arc Welding", "Thermit Welding", "Gas Welding", "Resistance Welding"],
    "options_hi": ["आर्क वेल्डिंग", "थर्मिट वेल्डिंग", "गैस वेल्डिंग", "प्रतिरोध वेल्डिंग"],
    "answer_en": "Thermit Welding",
    "answer_hi": "थर्मिट वेल्डिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'Track Circuiting'?",
    "question_hi": "'ट्रैक सर्किटिंग' क्या है?",
    "options_en": ["Method to detect train presence", "Track electrification", "Track maintenance schedule", "Signal wiring system"],
    "options_hi": ["ट्रेन उपस्थिति का पता लगाने की विधि", "ट्रैक विद्युतीकरण", "ट्रैक रखरखाव अनुसूची", "सिग्नल वायरिंग सिस्टम"],
    "answer_en": "Method to detect train presence",
    "answer_hi": "ट्रेन उपस्थिति का पता लगाने की विधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which type of rail section is used in heavy haul tracks?",
    "question_hi": "भारी ढुलाई ट्रैक में किस प्रकार के रेल सेक्शन का उपयोग किया जाता है?",
    "options_en": ["Flat-footed", "Bull-headed", "Double-headed", "Grooved"],
    "options_hi": ["फ्लैट-फुटेड", "बुल-हेडेड", "डबल-हेडेड", "ग्रूव्ड"],
    "answer_en": "Flat-footed",
    "answer_hi": "फ्लैट-फुटेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of 'Switch and Crossing'?",
    "question_hi": "'स्विच और क्रॉसिंग' का उद्देश्य क्या है?",
    "options_en": ["To change tracks", "To increase speed", "To reduce noise", "To measure wear"],
    "options_hi": ["ट्रैक बदलना", "गति बढ़ाना", "शोर कम करना", "घिसाव मापना"],
    "answer_en": "To change tracks",
    "answer_hi": "ट्रैक बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which maintenance activity is known as 'Tamping'?",
    "question_hi": "किस रखरखाव गतिविधि को 'टैम्पिंग' कहा जाता है?",
    "options_en": ["Rail grinding", "Track alignment", "Ballast compaction", "Sleeper replacement"],
    "options_hi": ["रेल ग्राइंडिंग", "ट्रैक संरेखण", "बैलास्ट संघनन", "स्लीपर प्रतिस्थापन"],
    "answer_en": "Ballast compaction",
    "answer_hi": "बैलास्ट संघनन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does 'UIC' stand for in railway terminology?",
    "question_hi": "रेलवे शब्दावली में 'UIC' का क्या अर्थ है?",
    "options_en": ["Universal International Committee", "Union Internationale des Chemins de fer", "United International Commission", "Universal Interface Control"],
    "options_hi": ["यूनिवर्सल इंटरनेशनल कमेटी", "यूनियन इंटरनेशनेल डेस शेमिन डे फेर", "यूनाइटेड इंटरनेशनल कमीशन", "यूनिवर्सल इंटरफेस कंट्रोल"],
    "answer_en": "Union Internationale des Chemins de fer",
    "answer_hi": "यूनियन इंटरनेशनेल डेस शेमिन डे फेर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which railway project is India's first high-speed rail corridor?",
    "question_hi": "भारत की पहली हाई-स्पीड रेल कॉरिडोर कौन सी रेलवे परियोजना है?",
    "options_en": ["Delhi-Mumbai", "Mumbai-Ahmedabad", "Chennai-Bangalore", "Delhi-Kolkata"],
    "options_hi": ["दिल्ली-मुंबई", "मुंबई-अहमदाबाद", "चेन्नई-बैंगलोर", "दिल्ली-कोलकाता"],
    "answer_en": "Mumbai-Ahmedabad",
    "answer_hi": "मुंबई-अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'Creep' in railway track?",
    "question_hi": "रेलवे ट्रैक में 'क्रीप' क्या है?",
    "options_en": ["Longitudinal movement of rail", "Vertical settlement", "Lateral displacement", "Thermal expansion"],
    "options_hi": ["रेल की अनुदैर्ध्य गति", "ऊर्ध्वाधर निपटान", "पार्श्व विस्थापन", "थर्मल विस्तार"],
    "answer_en": "Longitudinal movement of rail",
    "answer_hi": "रेल की अनुदैर्ध्य गति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which test determines rail steel fatigue strength?",
    "question_hi": "कौन सा परीक्षण रेल स्टील की फटीग स्ट्रेंथ निर्धारित करता है?",
    "options_en": ["Fatigue Test", "Hardness Test", "Impact Test", "Tensile Test"],
    "options_hi": ["फटीग टेस्ट", "हार्डनेस टेस्ट", "इम्पैक्ट टेस्ट", "टेंसाइल टेस्ट"],
    "answer_en": "Fatigue Test",
    "answer_hi": "फटीग टेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the function of 'Rail Fastening'?",
    "question_hi": "'रेल फास्टनिंग' का कार्य क्या है?",
    "options_en": ["To fix rail to sleeper", "To join two rails", "To align track", "To measure gauge"],
    "options_hi": ["रेल को स्लीपर से जोड़ना", "दो रेलों को जोड़ना", "ट्रैक संरेखित करना", "गेज मापना"],
    "answer_en": "To fix rail to sleeper",
    "answer_hi": "रेल को स्लीपर से जोड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which organization publishes 'Indian Railway Schedule'?",
    "question_hi": "'इंडियन रेलवे शेड्यूल' कौन सा संगठन प्रकाशित करता है?",
    "options_en": ["CRIS", "IRCTC", "Railway Board", "RDSO"],
    "options_hi": ["क्रिस", "आईआरसीटीसी", "रेलवे बोर्ड", "आरडीएसओ"],
    "answer_en": "CRIS",
    "answer_hi": "क्रिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'Rail Flaw Detection'?",
    "question_hi": "'रेल फ्लॉ डिटेक्शन' क्या है?",
    "options_en": ["Finding defects in rails", "Measuring rail wear", "Checking alignment", "Testing rail steel"],
    "options_hi": ["रेल में दोष ढूंढना", "रेल वियर मापना", "संरेखण जांचना", "रेल स्टील परीक्षण"],
    "answer_en": "Finding defects in rails",
    "answer_hi": "रेल में दोष ढूंढना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which type of turnout is used for high-speed routes?",
    "question_hi": "उच्च गति मार्गों के लिए किस प्रकार का टर्नआउट प्रयोग किया जाता है?",
    "options_en": ["Curved turnout", "Symmetrical turnout", "Tongue and crossing", "High-speed turnout"],
    "options_hi": ["वक्र टर्नआउट", "सममित टर्नआउट", "टंग एंड क्रॉसिंग", "हाई-स्पीड टर्नआउट"],
    "answer_en": "High-speed turnout",
    "answer_hi": "हाई-स्पीड टर्नआउट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'Track modulus'?",
    "question_hi": "'ट्रैक मापांक' क्या है?",
    "options_en": ["Track stiffness measure", "Track length", "Track curvature", "Track gauge"],
    "options_hi": ["ट्रैक कठोरता माप", "ट्रैक लंबाई", "ट्रैक वक्रता", "ट्रैक गेज"],
    "answer_en": "Track stiffness measure",
    "answer_hi": "ट्रैक कठोरता माप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which welding defect is critical in rail welding?",
    "question_hi": "रेल वेल्डिंग में कौन सा वेल्डिंग दोष महत्वपूर्ण है?",
    "options_en": ["Porosity", "Cracks", "Undercut", "All of these"],
    "options_hi": ["छिद्रता", "दरारें", "अंडरकट", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'Rail Cant'?",
    "question_hi": "'रेल कैंट' क्या है?",
    "options_en": ["Rail inclination", "Rail height", "Rail length", "Rail weight"],
    "options_hi": ["रेल झुकाव", "रेल ऊंचाई", "रेल लंबाई", "रेल वजन"],
    "answer_en": "Rail inclination",
    "answer_hi": "रेल झुकाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which organization manages railway computer reservations?",
    "question_hi": "रेलवे कंप्यूटर आरक्षण का प्रबंधन कौन सा संगठन करता है?",
    "options_en": ["IRCTC", "CRIS", "RDSO", "CORE"],
    "options_hi": ["आईआरसीटीसी", "क्रिस", "आरडीएसओ", "कोर"],
    "answer_en": "CRIS",
    "answer_hi": "क्रिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'Track Geometry'?",
    "question_hi": "'ट्रैक ज्योमेट्री' क्या है?",
    "options_en": ["Track dimensions and alignment", "Track material", "Track construction", "Track maintenance"],
    "options_hi": ["ट्रैक आयाम और संरेखण", "ट्रैक सामग्री", "ट्रैक निर्माण", "ट्रैक रखरखाव"],
    "answer_en": "Track dimensions and alignment",
    "answer_hi": "ट्रैक आयाम और संरेखण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which rail section is designated as 52 kg/m?",
    "question_hi": "कौन सा रेल सेक्शन 52 किग्रा/मीटर के रूप में निर्दिष्ट है?",
    "options_en": ["90 R", "110 R", "113 R", "136 R"],
    "options_hi": ["90 आर", "110 आर", "113 आर", "136 आर"],
    "answer_en": "90 R",
    "answer_hi": "90 आर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'Rail Profile'?",
    "question_hi": "'रेल प्रोफाइल' क्या है?",
    "options_en": ["Cross-sectional shape", "Longitudinal shape", "Surface texture", "Material composition"],
    "options_hi": ["क्रॉस-सेक्शनल आकार", "अनुदैर्ध्य आकार", "सतह बनावट", "सामग्री संरचना"],
    "answer_en": "Cross-sectional shape",
    "answer_hi": "क्रॉस-सेक्शनल आकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which maintenance machine is used for track alignment?",
    "question_hi": "ट्रैक संरेखण के लिए किस रखरखाव मशीन का उपयोग किया जाता है?",
    "options_en": ["Tamping machine", "Ballast regulator", "Track lining machine", "Rail grinder"],
    "options_hi": ["टैम्पिंग मशीन", "बैलास्ट रेगुलेटर", "ट्रैक लाइनिंग मशीन", "रेल ग्राइंडर"],
    "answer_en": "Track lining machine",
    "answer_hi": "ट्रैक लाइनिंग मशीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'Track Circuit Interference'?",
    "question_hi": "'ट्रैक सर्किट इंटरफेरेंस' क्या है?",
    "options_en": ["Signal failure due to external factors", "Track alignment issue", "Rail joint problem", "Sleeper defect"],
    "options_hi": ["बाहरी कारकों के कारण सिग्नल विफलता", "ट्रैक संरेखण समस्या", "रेल जोड़ समस्या", "स्लीपर दोष"],
    "answer_en": "Signal failure due to external factors",
    "answer_hi": "बाहरी कारकों के कारण सिग्नल विफलता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which standard specifies rail steel composition?",
    "question_hi": "कौन सा मानक रेल स्टील संरचना निर्दिष्ट करता है?",
    "options_en": ["IS 3443", "IS 5512", "IS 3444", "IS 3512"],
    "options_hi": ["आईएस 3443", "आईएस 5512", "आईएस 3444", "आईएस 3512"],
    "answer_en": "IS 3443",
    "answer_hi": "आईएस 3443",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'Rail Lubrication' for?",
    "question_hi": "'रेल लुब्रिकेशन' किस लिए है?",
    "options_en": ["Reduce rail-wheel wear", "Increase friction", "Prevent corrosion", "Improve conductivity"],
    "options_hi": ["रेल-व्हील वियर कम करना", "घर्षण बढ़ाना", "जंग रोकना", "चालकता सुधारना"],
    "answer_en": "Reduce rail-wheel wear",
    "answer_hi": "रेल-व्हील वियर कम करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which organization certifies railway equipment?",
    "question_hi": "रेलवे उपकरणों का प्रमाणन कौन सा संगठन करता है?",
    "options_en": ["RDSO", "BIS", "AERB", "DGCA"],
    "options_hi": ["आरडीएसओ", "बीआईएस", "एईआरबी", "डीजीसीए"],
    "answer_en": "RDSO",
    "answer_hi": "आरडीएसओ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'Track Buckling'?",
    "question_hi": "'ट्रैक बकलिंग' क्या है?",
    "options_en": ["Lateral displacement due to heat", "Vertical settlement", "Longitudinal movement", "Gauge variation"],
    "options_hi": ["गर्मी के कारण पार्श्व विस्थापन", "ऊर्ध्वाधर निपटान", "अनुदैर्ध्य गति", "गेज भिन्नता"],
    "answer_en": "Lateral displacement due to heat",
    "answer_hi": "गर्मी के कारण पार्श्व विस्थापन",
    "attempted": false,
    "selected": ""
  }];


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