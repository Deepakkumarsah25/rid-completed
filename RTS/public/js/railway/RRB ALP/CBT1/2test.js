const questions = [
  {
    "num": 1,
    "question_en": "What is the minimum radius of curvature permitted for high-speed tracks (160 km/h) on Indian Railways?",
    "question_hi": "भारतीय रेलवे पर हाई-स्पीड ट्रैक्स (160 किमी/घंटा) के लिए अनुमत न्यूनतम वक्रता त्रिज्या क्या है?",
    "options_en": ["875 meters", "1450 meters", "2200 meters", "3000 meters"],
    "options_hi": ["875 मीटर", "1450 मीटर", "2200 मीटर", "3000 मीटर"],
    "answer_en": "1450 meters",
    "answer_hi": "1450 मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which type of rail steel has the highest tensile strength as per Indian standards?",
    "question_hi": "भारतीय मानकों के अनुसार किस प्रकार के रेल स्टील में उच्चतम तन्य शक्ति होती है?",
    "options_en": ["Grade 880", "Grade 1080", "Grade 1170", "Grade 1280"],
    "options_hi": ["ग्रेड 880", "ग्रेड 1080", "ग्रेड 1170", "ग्रेड 1280"],
    "answer_en": "Grade 1280",
    "answer_hi": "ग्रेड 1280",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the maximum permissible gradient for high-speed railway lines in India?",
    "question_hi": "भारत में हाई-स्पीड रेलवे लाइनों के लिए अधिकतम अनुमेय ग्रेडिएंट क्या है?",
    "options_en": ["1 in 100", "1 in 150", "1 in 200", "1 in 400"],
    "options_hi": ["1:100", "1:150", "1:200", "1:400"],
    "answer_en": "1 in 400",
    "answer_hi": "1:400",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which signaling system uses 'Frequency Shift Keying' technology on Indian Railways?",
    "question_hi": "भारतीय रेलवे पर 'फ़्रीक्वेंसी शिफ्ट कीइंग' तकनीक का उपयोग किस सिग्नलिंग सिस्टम में किया जाता है?",
    "options_en": ["Absolute Block", "Automatic Block", "Coded Track Circuit", "Axle Counter"],
    "options_hi": ["एब्सोल्यूट ब्लॉक", "ऑटोमैटिक ब्लॉक", "कोडेड ट्रैक सर्किट", "एक्सल काउंटर"],
    "answer_en": "Coded Track Circuit",
    "answer_hi": "कोडेड ट्रैक सर्किट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the maximum cant deficiency allowed for 160 km/h speed on Indian Railways?",
    "question_hi": "भारतीय रेलवे पर 160 किमी/घंटा गति के लिए अनुमत अधिकतम कैंट डेफिशिएंसी क्या है?",
    "options_en": ["75 mm", "100 mm", "125 mm", "150 mm"],
    "options_hi": ["75 मिमी", "100 मिमी", "125 मिमी", "150 मिमी"],
    "answer_en": "100 mm",
    "answer_hi": "100 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which type of rail fastening system is used in 'Pandrol' clips?",
    "question_hi": "'पैंड्रोल' क्लिप में किस प्रकार की रेल फास्टनिंग सिस्टम का उपयोग किया जाता है?",
    "options_en": ["Baseplate system", "Direct fixation", "Elastic rail clip", "Bolt and nut system"],
    "options_hi": ["बेसप्लेट सिस्टम", "डायरेक्ट फिक्सेशन", "इलास्टिक रेल क्लिप", "बोल्ट और नट सिस्टम"],
    "answer_en": "Elastic rail clip",
    "answer_hi": "इलास्टिक रेल क्लिप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the minimum track circuit current required for reliable operation in signaling?",
    "question_hi": "सिग्नलिंग में विश्वसनीय संचालन के लिए आवश्यक न्यूनतम ट्रैक सर्किट करंट क्या है?",
    "options_en": ["0.5 A", "1.0 A", "1.5 A", "2.0 A"],
    "options_hi": ["0.5 ए", "1.0 ए", "1.5 ए", "2.0 ए"],
    "answer_en": "1.0 A",
    "answer_hi": "1.0 ए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which mathematical model is used for railway track settlement prediction?",
    "question_hi": "रेलवे ट्रैक सेटलमेंट भविष्यवाणी के लिए किस गणितीय मॉडल का उपयोग किया जाता है?",
    "options_en": ["Terzaghi's model", "Meyerhof's model", "Hertz theory", "Boussinesq theory"],
    "options_hi": ["टेर्जाघी मॉडल", "मेयरहोफ मॉडल", "हर्ट्ज सिद्धांत", "बूसिनेस्क सिद्धांत"],
    "answer_en": "Boussinesq theory",
    "answer_hi": "बूसिनेस्क सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the standard wheel diameter for Indian Railways broad gauge locomotives?",
    "question_hi": "भारतीय रेलवे ब्रॉड गेज लोकोमोटिव के लिए मानक पहिया व्यास क्या है?",
    "options_en": ["914 mm", "1016 mm", "1092 mm", "1238 mm"],
    "options_hi": ["914 मिमी", "1016 मिमी", "1092 मिमी", "1238 मिमी"],
    "answer_en": "1092 mm",
    "answer_hi": "1092 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which type of bearing arrangement is used in modern LHB coaches?",
    "question_hi": "आधुनिक LHB कोच में किस प्रकार की बेयरिंग व्यवस्था का उपयोग किया जाता है?",
    "options_en": ["SKF TBU", "FAG H-Unit", "Timken AP", "NSK cartridge"],
    "options_hi": ["SKF TBU", "FAG H-Unit", "Timken AP", "NSK कार्ट्रिज"],
    "answer_en": "SKF TBU",
    "answer_hi": "SKF TBU",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the minimum approach visibility required for color light signals?",
    "question_hi": "कलर लाइट सिग्नल के लिए आवश्यक न्यूनतम एप्रोच विजिबिलिटी क्या है?",
    "options_en": ["180 meters", "400 meters", "800 meters", "1200 meters"],
    "options_hi": ["180 मीटर", "400 मीटर", "800 मीटर", "1200 मीटर"],
    "answer_en": "400 meters",
    "answer_hi": "400 मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which standard specifies the requirements for rail-welding by thermit process?",
    "question_hi": "थर्मिट प्रक्रिया द्वारा रेल-वेल्डिंग की आवश्यकताओं को कौन सा मानक निर्दिष्ट करता है?",
    "options_en": ["IS 3000", "IRS-T-12", "RDSO/TRC-54", "UIC 860"],
    "options_hi": ["IS 3000", "IRS-T-12", "RDSO/TRC-54", "UIC 860"],
    "answer_en": "IRS-T-12",
    "answer_hi": "IRS-T-12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the maximum permissible lateral force on rail for 25-tonne axle load?",
    "question_hi": "25-टन एक्सल लोड के लिए रेल पर अधिकतम अनुमेय पार्श्व बल क्या है?",
    "options_en": ["4.5 tonnes", "5.0 tonnes", "5.5 tonnes", "6.0 tonnes"],
    "options_hi": ["4.5 टन", "5.0 टन", "5.5 टन", "6.0 टन"],
    "answer_en": "5.5 tonnes",
    "answer_hi": "5.5 टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which technology is used in 'Kavach' Train Collision Avoidance System?",
    "question_hi": "'कवच' ट्रेन टक्कर रोधी प्रणाली में किस तकनीक का उपयोग किया जाता है?",
    "options_en": ["GSM-R", "RFID", "LTE-R", "UWB"],
    "options_hi": ["GSM-R", "RFID", "LTE-R", "UWB"],
    "answer_en": "UWB",
    "answer_hi": "UWB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the standard spacing between sleepers for 52 kg/m rail on Indian Railways?",
    "question_hi": "भारतीय रेलवे पर 52 किग्रा/मीटर रेल के लिए स्लीपरों के बीच मानक दूरी क्या है?",
    "options_en": ["600 mm", "650 mm", "700 mm", "750 mm"],
    "options_hi": ["600 मिमी", "650 मिमी", "700 मिमी", "750 मिमी"],
    "answer_en": "650 mm",
    "answer_hi": "650 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which type of bridge is most suitable for high-speed railway lines?",
    "question_hi": "हाई-स्पीड रेलवे लाइनों के लिए किस प्रकार का पुल सबसे उपयुक्त है?",
    "options_en": ["Steel truss", "RCC slab", "Pre-stressed concrete", "Composite steel-concrete"],
    "options_hi": ["स्टील ट्रस", "आरसीसी स्लैब", "प्री-स्ट्रेस्ड कंक्रीट", "कम्पोजिट स्टील-कंक्रीट"],
    "answer_en": "Pre-stressed concrete",
    "answer_hi": "प्री-स्ट्रेस्ड कंक्रीट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the minimum ballast cushion required under concrete sleepers?",
    "question_hi": "कंक्रीट स्लीपरों के नीचे आवश्यक न्यूनतम बैलास्ट कुशन क्या है?",
    "options_en": ["150 mm", "200 mm", "250 mm", "300 mm"],
    "options_hi": ["150 मिमी", "200 मिमी", "250 मिमी", "300 मिमी"],
    "answer_en": "250 mm",
    "answer_hi": "250 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which standard specifies the testing procedure for rail steel?",
    "question_hi": "रेल स्टील के परीक्षण प्रक्रिया को कौन सा मानक निर्दिष्ट करता है?",
    "options_en": ["IS 3443", "IS 5512", "IS 1590", "IS 228"],
    "options_hi": ["आईएस 3443", "आईएस 5512", "आईएस 1590", "आईएस 228"],
    "answer_en": "IS 5512",
    "answer_hi": "आईएस 5512",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the maximum allowable track twist over 3 meters for high-speed lines?",
    "question_hi": "हाई-स्पीड लाइनों के लिए 3 मीटर पर अधिकतम अनुमेय ट्रैक ट्विस्ट क्या है?",
    "options_en": ["2 mm", "3 mm", "4 mm", "5 mm"],
    "options_hi": ["2 मिमी", "3 मिमी", "4 मिमी", "5 मिमी"],
    "answer_en": "3 mm",
    "answer_hi": "3 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which type of rail grinding is done for correcting rail profile?",
    "question_hi": "रेल प्रोफाइल सुधार के लिए किस प्रकार की रेल ग्राइंडिंग की जाती है?",
    "options_en": ["Preventive grinding", "Corrective grinding", "Production grinding", "Spot grinding"],
    "options_hi": ["प्रिवेंटिव ग्राइंडिंग", "करेक्टिव ग्राइंडिंग", "प्रोडक्शन ग्राइंडिंग", "स्पॉट ग्राइंडिंग"],
    "answer_en": "Corrective grinding",
    "answer_hi": "करेक्टिव ग्राइंडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the standard flange way clearance for broad gauge tracks?",
    "question_hi": "ब्रॉड गेज ट्रैक के लिए मानक फ्लेंज वे क्लीयरेंस क्या है?",
    "options_en": ["38 mm", "44 mm", "51 mm", "57 mm"],
    "options_hi": ["38 मिमी", "44 मिमी", "51 मिमी", "57 मिमी"],
    "answer_en": "44 mm",
    "answer_hi": "44 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which organization developed the 'Train 18' (Vande Bharat Express)?",
    "question_hi": "'ट्रेन 18' (वंदे भारत एक्सप्रेस) किस संगठन द्वारा विकसित किया गया था?",
    "options_en": ["ICF Chennai", "RCF Kapurthala", "MCF Rae Bareli", "BHEL"],
    "options_hi": ["आईसीएफ चेन्नई", "आरसीएफ कपूरथला", "एमसीएफ रायबरेली", "भेल"],
    "answer_en": "ICF Chennai",
    "answer_hi": "आईसीएफ चेन्नई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the maximum permissible wheel flat length before requiring wheel turning?",
    "question_hi": "व्हील टर्निंग की आवश्यकता से पहले अधिकतम अनुमेय व्हील फ्लैट लंबाई क्या है?",
    "options_en": ["25 mm", "50 mm", "75 mm", "100 mm"],
    "options_hi": ["25 मिमी", "50 मिमी", "75 मिमी", "100 मिमी"],
    "answer_en": "50 mm",
    "answer_hi": "50 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which type of turnout design is used for speeds above 100 km/h?",
    "question_hi": "100 किमी/घंटा से अधिक गति के लिए किस प्रकार के टर्नआउट डिजाइन का उपयोग किया जाता है?",
    "options_en": ["1 in 8.5", "1 in 12", "1 in 16", "1 in 20"],
    "options_hi": ["1:8.5", "1:12", "1:16", "1:20"],
    "answer_en": "1 in 20",
    "answer_hi": "1:20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the minimum rail web thickness required for 60 kg/m rail?",
    "question_hi": "60 किग्रा/मीटर रेल के लिए आवश्यक न्यूनतम रेल वेब मोटाई क्या है?",
    "options_en": ["16.5 mm", "18.0 mm", "19.5 mm", "21.0 mm"],
    "options_hi": ["16.5 मिमी", "18.0 मिमी", "19.5 मिमी", "21.0 मिमी"],
    "answer_en": "19.5 mm",
    "answer_hi": "19.5 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which standard specifies the design of railway bridges?",
    "question_hi": "रेलवे पुलों के डिजाइन को कौन सा मानक निर्दिष्ट करता है?",
    "options_en": ["IRS Bridge Code", "IRC 6", "IS 800", "IS 456"],
    "options_hi": ["आईआरएस ब्रिज कोड", "आईआरसी 6", "आईएस 800", "आईएस 456"],
    "answer_en": "IRS Bridge Code",
    "answer_hi": "आईआरएस ब्रिज कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the maximum permissible variation in track gauge for high-speed lines?",
    "question_hi": "हाई-स्पीड लाइनों के लिए ट्रैक गेज में अधिकतम अनुमेय भिन्नता क्या है?",
    "options_en": ["+3 mm, -0 mm", "+5 mm, -0 mm", "+5 mm, -2 mm", "+7 mm, -2 mm"],
    "options_hi": ["+3 मिमी, -0 मिमी", "+5 मिमी, -0 मिमी", "+5 मिमी, -2 मिमी", "+7 मिमी, -2 मिमी"],
    "answer_en": "+3 mm, -0 mm",
    "answer_hi": "+3 मिमी, -0 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which material is used for manufacturing 'Koni' dampers in railway coaches?",
    "question_hi": "रेलवे कोच में 'कोनी' डैंपर्स के निर्माण के लिए किस सामग्री का उपयोग किया जाता है?",
    "options_en": ["Natural rubber", "Synthetic rubber", "Polyurethane", "Hydraulic fluid"],
    "options_hi": ["प्राकृतिक रबर", "सिंथेटिक रबर", "पॉलीयूरेथेन", "हाइड्रॉलिक फ्लूइड"],
    "answer_en": "Hydraulic fluid",
    "answer_hi": "हाइड्रॉलिक फ्लूइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the standard length of rail panels for high-speed tracks?",
    "question_hi": "हाई-स्पीड ट्रैक के लिए रेल पैनल की मानक लंबाई क्या है?",
    "options_en": ["13 m", "26 m", "39 m", "260 m"],
    "options_hi": ["13 मी", "26 मी", "39 मी", "260 मी"],
    "answer_en": "260 m",
    "answer_hi": "260 मी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which technology is used in 'Train Protection Warning System' (TPWS)?",
    "question_hi": "'ट्रेन प्रोटेक्शन वार्निंग सिस्टम' (TPWS) में किस तकनीक का उपयोग किया जाता है?",
    "options_en": ["GPS", "Balise", "RFID", "Lidar"],
    "options_hi": ["जीपीएस", "बालिस", "आरएफआईडी", "लिडार"],
    "answer_en": "Balise",
    "answer_hi": "बालिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the minimum rail head hardness required for heavy haul operations?",
    "question_hi": "भारी ढुलाई संचालन के लिए आवश्यक न्यूनतम रेल हेड हार्डनेस क्या है?",
    "options_en": ["250 BHN", "300 BHN", "350 BHN", "400 BHN"],
    "options_hi": ["250 BHN", "300 BHN", "350 BHN", "400 BHN"],
    "answer_en": "350 BHN",
    "answer_hi": "350 BHN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which standard specifies the design of railway tunnels?",
    "question_hi": "रेलवे सुरंगों के डिजाइन को कौन सा मानक निर्दिष्ट करता है?",
    "options_en": ["IRS Tunnel Code", "IRC 112", "IS 4995", "RDSO/2009"],
    "options_hi": ["आईआरएस टनल कोड", "आईआरसी 112", "आईएस 4995", "आरडीएसओ/2009"],
    "answer_en": "IRS Tunnel Code",
    "answer_hi": "आईआरएस टनल कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the maximum permissible rail end batter in welded rails?",
    "question_hi": "वेल्डेड रेल में अधिकतम अनुमेय रेल एंड बैटर क्या है?",
    "options_en": ["0.5 mm", "1.0 mm", "1.5 mm", "2.0 mm"],
    "options_hi": ["0.5 मिमी", "1.0 मिमी", "1.5 मिमी", "2.0 मिमी"],
    "answer_en": "1.0 mm",
    "answer_hi": "1.0 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which type of foundation is used for high-rise railway bridges?",
    "question_hi": "हाई-राइज रेलवे पुलों के लिए किस प्रकार की फाउंडेशन का उपयोग किया जाता है?",
    "options_en": ["Spread footing", "Pile foundation", "Raft foundation", "Well foundation"],
    "options_hi": ["स्प्रेड फुटिंग", "पाइल फाउंडेशन", "राफ्ट फाउंडेशन", "वेल फाउंडेशन"],
    "answer_en": "Pile foundation",
    "answer_hi": "पाइल फाउंडेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the standard coefficient of friction for brake blocks in Indian Railways?",
    "question_hi": "भारतीय रेलवे में ब्रेक ब्लॉक के लिए मानक घर्षण गुणांक क्या है?",
    "options_en": ["0.15", "0.25", "0.35", "0.45"],
    "options_hi": ["0.15", "0.25", "0.35", "0.45"],
    "answer_en": "0.25",
    "answer_hi": "0.25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which standard specifies the requirements for railway ballast?",
    "question_hi": "रेलवे बैलास्ट की आवश्यकताओं को कौन सा मानक निर्दिष्ट करता है?",
    "options_en": ["IRS-GE-1", "IS 383", "IS 2386", "RDSO/TRS-0013"],
    "options_hi": ["IRS-GE-1", "IS 383", "IS 2386", "RDSO/TRS-0013"],
    "answer_en": "IRS-GE-1",
    "answer_hi": "IRS-GE-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the minimum curve radius for station yards on high-speed lines?",
    "question_hi": "हाई-स्पीड लाइनों पर स्टेशन यार्ड के लिए न्यूनतम वक्र त्रिज्या क्या है?",
    "options_en": ["600 m", "800 m", "1000 m", "1200 m"],
    "options_hi": ["600 मी", "800 मी", "1000 मी", "1200 मी"],
    "answer_en": "1200 m",
    "answer_hi": "1200 मी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which technology is used for 'Hot Box Detection' in Indian Railways?",
    "question_hi": "भारतीय रेलवे में 'हॉट बॉक्स डिटेक्शन' के लिए किस तकनीक का उपयोग किया जाता है?",
    "options_en": ["Infrared sensors", "Ultrasonic testing", "Vibration analysis", "Acoustic emission"],
    "options_hi": ["इन्फ्रारेड सेंसर्स", "अल्ट्रासोनिक टेस्टिंग", "वाइब्रेशन एनालिसिस", "अकौस्टिक एमिशन"],
    "answer_en": "Infrared sensors",
    "answer_hi": "इन्फ्रारेड सेंसर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the maximum permissible vertical wear on rail head before replacement?",
    "question_hi": "प्रतिस्थापन से पहले रेल हेड पर अधिकतम अनुमेय ऊर्ध्वाधर वियर क्या है?",
    "options_en": ["5% of height", "8% of height", "10% of height", "12% of height"],
    "options_hi": ["ऊंचाई का 5%", "ऊंचाई का 8%", "ऊंचाई का 10%", "ऊंचाई का 12%"],
    "answer_en": "8% of height",
    "answer_hi": "ऊंचाई का 8%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which type of steel is used for manufacturing rail clips?",
    "question_hi": "रेल क्लिप के निर्माण के लिए किस प्रकार के स्टील का उपयोग किया जाता है?",
    "options_en": ["Mild steel", "Spring steel", "Stainless steel", "Alloy steel"],
    "options_hi": ["माइल्ड स्टील", "स्प्रिंग स्टील", "स्टेनलेस स्टील", "मिश्र धातु स्टील"],
    "answer_en": "Spring steel",
    "answer_hi": "स्प्रिंग स्टील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the standard wheel conicity used in Indian Railways?",
    "question_hi": "भारतीय रेलवे में प्रयुक्त मानक पहिया कोनिसिटी क्या है?",
    "options_en": ["1:10", "1:20", "1:40", "1:100"],
    "options_hi": ["1:10", "1:20", "1:40", "1:100"],
    "answer_en": "1:20",
    "answer_hi": "1:20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which standard specifies the design of railway station buildings?",
    "question_hi": "रेलवे स्टेशन भवनों के डिजाइन को कौन सा मानक निर्दिष्ट करता है?",
    "options_en": ["IRS Station Code", "NBC 2016", "IS 875", "RDSO/2004"],
    "options_hi": ["आईआरएस स्टेशन कोड", "एनबीसी 2016", "आईएस 875", "आरडीएसओ/2004"],
    "answer_en": "IRS Station Code",
    "answer_hi": "आईआरएस स्टेशन कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the minimum ballast shoulder width for high-speed tracks?",
    "question_hi": "हाई-स्पीड ट्रैक के लिए न्यूनतम बैलास्ट शोल्डर चौड़ाई क्या है?",
    "options_en": ["300 mm", "400 mm", "500 mm", "600 mm"],
    "options_hi": ["300 मिमी", "400 मिमी", "500 मिमी", "600 मिमी"],
    "answer_en": "500 mm",
    "answer_hi": "500 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which type of welding is used for rail head repair?",
    "question_hi": "रेल हेड मरम्मत के लिए किस प्रकार की वेल्डिंग का उपयोग किया जाता है?",
    "options_en": ["Thermit welding", "Flash butt welding", "Arc welding", "Deposition welding"],
    "options_hi": ["थर्मिट वेल्डिंग", "फ्लैश बट वेल्डिंग", "आर्क वेल्डिंग", "डिपोजिशन वेल्डिंग"],
    "answer_en": "Deposition welding",
    "answer_hi": "डिपोजिशन वेल्डिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the standard rail section used for metro railways in India?",
    "question_hi": "भारत में मेट्रो रेलवे के लिए प्रयुक्त मानक रेल सेक्शन क्या है?",
    "options_en": ["52 kg/m", "60 kg/m", "UIC 60", "90 R"],
    "options_hi": ["52 किग्रा/मी", "60 किग्रा/मी", "UIC 60", "90 आर"],
    "answer_en": "UIC 60",
    "answer_hi": "UIC 60",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which standard specifies the testing of railway sleepers?",
    "question_hi": "रेलवे स्लीपरों के परीक्षण को कौन सा मानक निर्दिष्ट करता है?",
    "options_en": ["IS 10329", "IS 1343", "RDSO/TRS-0022", "IRS-T-39"],
    "options_hi": ["आईएस 10329", "आईएस 1343", "आरडीएसओ/TRS-0022", "IRS-T-39"],
    "answer_en": "IS 10329",
    "answer_hi": "आईएस 10329",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the maximum permissible track alignment error for high-speed lines?",
    "question_hi": "हाई-स्पीड लाइनों के लिए अधिकतम अनुमेय ट्रैक संरेखण त्रुटि क्या है?",
    "options_en": ["±2 mm", "±3 mm", "±5 mm", "±10 mm"],
    "options_hi": ["±2 मिमी", "±3 मिमी", "±5 मिमी", "±10 मिमी"],
    "answer_en": "±2 mm",
    "answer_hi": "±2 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which technology is used for 'Automatic Train Operation' (ATO) in metros?",
    "question_hi": "मेट्रो में 'ऑटोमैटिक ट्रेन ऑपरेशन' (ATO) के लिए किस तकनीक का उपयोग किया जाता है?",
    "options_en": ["CBTC", "ATP", "CTC", "Interlocking"],
    "options_hi": ["CBTC", "ATP", "CTC", "इंटरलॉकिंग"],
    "answer_en": "CBTC",
    "answer_hi": "CBTC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the minimum rail head radius allowed before reprofiling?",
    "question_hi": "रीप्रोफाइलिंग से पहले अनुमत न्यूनतम रेल हेड त्रिज्या क्या है?",
    "options_en": ["8 mm", "10 mm", "12 mm", "14 mm"],
    "options_hi": ["8 मिमी", "10 मिमी", "12 मिमी", "14 मिमी"],
    "answer_en": "10 mm",
    "answer_hi": "10 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which standard specifies the design of railway electrification?",
    "question_hi": "रेलवे विद्युतीकरण के डिजाइन को कौन सा मानक निर्दिष्ट करता है?",
    "options_en": ["IRS-E-10", "IS 5613", "RDSO/TRD-42", "UIC 600"],
    "options_hi": ["IRS-E-10", "IS 5613", "RDSO/TRD-42", "UIC 600"],
    "answer_en": "IRS-E-10",
    "answer_hi": "IRS-E-10",
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