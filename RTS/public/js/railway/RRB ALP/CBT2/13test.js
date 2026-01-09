const questions =[
  {
    "num": 1,
    "question_en": "What was the third word in the list you memorized? (List: Clutch, Gearbox, Differential, Propeller, Axle)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: क्लच, गियरबॉक्स, डिफरेंशियल, प्रोपेलर, एक्सल)",
    "options_en": ["Differential", "Gearbox", "Propeller", "Axle"],
    "options_hi": ["डिफरेंशियल", "गियरबॉक्स", "प्रोपेलर", "एक्सल"],
    "answer_en": "Differential",
    "answer_hi": "डिफरेंशियल"
  },
  {
    "num": 2,
    "question_en": "What was the second word in the list you memorized? (List: Boiler, Turbine, Condenser, Feed Pump, Economizer)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: बॉयलर, टर्बाइन, कंडेनसर, फीड पंप, इकोनोमाइजर)",
    "options_en": ["Turbine", "Boiler", "Condenser", "Feed Pump"],
    "options_hi": ["टर्बाइन", "बॉयलर", "कंडेनसर", "फीड पंप"],
    "answer_en": "Turbine",
    "answer_hi": "टर्बाइन"
  },
  {
    "num": 3,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Scheduling, Resource Allocation, Monitoring, Documentation)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: योजना, शेड्यूलिंग, संसाधन आवंटन, निगरानी, दस्तावेज़ीकरण)",
    "options_en": ["Documentation", "Monitoring", "Resource Allocation", "Scheduling"],
    "options_hi": ["दस्तावेज़ीकरण", "निगरानी", "संसाधन आवंटन", "शेड्यूलिंग"],
    "answer_en": "Documentation",
    "answer_hi": "दस्तावेज़ीकरण"
  },
  {
    "num": 4,
    "question_en": "What was the first word in the list you memorized? (List: AutoCAD, STAAD Pro, Revit, ETABS, SAP2000)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: ऑटोकैड, स्टैड प्रो, रिविट, ईटीएबीएस, एसएपी2000)",
    "options_en": ["AutoCAD", "STAAD Pro", "Revit", "ETABS"],
    "options_hi": ["ऑटोकैड", "स्टैड प्रो", "रिविट", "ईटीएबीएस"],
    "answer_en": "AutoCAD",
    "answer_hi": "ऑटोकैड"
  },
  {
    "num": 5,
    "question_en": "What was the fourth word in the list you memorized? (List: Cement, Sand, Aggregate, Water, Admixture)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: सीमेंट, रेत, एग्रीगेट, पानी, एडमिक्सचर)",
    "options_en": ["Water", "Admixture", "Aggregate", "Sand"],
    "options_hi": ["पानी", "एडमिक्सचर", "एग्रीगेट", "रेत"],
    "answer_en": "Water",
    "answer_hi": "पानी"
  },
  {
    "num": 6,
    "question_en": "What was the third word in the list you memorized? (List: Transformer, Rectifier, Inverter, Converter, Stabilizer)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: ट्रांसफॉर्मर, रेक्टिफायर, इन्वर्टर, कन्वर्टर, स्टेबिलाइजर)",
    "options_en": ["Inverter", "Rectifier", "Converter", "Stabilizer"],
    "options_hi": ["इन्वर्टर", "रेक्टिफायर", "कन्वर्टर", "स्टेबिलाइजर"],
    "answer_en": "Inverter",
    "answer_hi": "इन्वर्टर"
  },
  {
    "num": 7,
    "question_en": "What was the second word in the list you memorized? (List: Lathe, Shaper, Planer, Milling, Grinding)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: लेथ, शेपर, प्लेनर, मिलिंग, ग्राइंडिंग)",
    "options_en": ["Shaper", "Lathe", "Planer", "Milling"],
    "options_hi": ["शेपर", "लेथ", "प्लेनर", "मिलिंग"],
    "answer_en": "Shaper",
    "answer_hi": "शेपर"
  },
  {
    "num": 8,
    "question_en": "What was the fifth word in the list you memorized? (List: Steel, Concrete, Timber, Masonry, Composite)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: स्टील, कंक्रीट, टिम्बर, मेसोनरी, कम्पोजिट)",
    "options_en": ["Composite", "Masonry", "Timber", "Concrete"],
    "options_hi": ["कम्पोजिट", "मेसोनरी", "टिम्बर", "कंक्रीट"],
    "answer_en": "Composite",
    "answer_hi": "कम्पोजिट"
  },
  {
    "num": 9,
    "question_en": "What was the first word in the list you memorized? (List: Voltage, Current, Resistance, Power, Energy)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: वोल्टेज, करंट, रेजिस्टेंस, पावर, एनर्जी)",
    "options_en": ["Voltage", "Current", "Resistance", "Power"],
    "options_hi": ["वोल्टेज", "करंट", "रेजिस्टेंस", "पावर"],
    "answer_en": "Voltage",
    "answer_hi": "वोल्टेज"
  },
  {
    "num": 10,
    "question_en": "What was the fourth word in the list you memorized? (List: Foundation, Column, Beam, Slab, Wall)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: फाउंडेशन, कॉलम, बीम, स्लैब, वॉल)",
    "options_en": ["Slab", "Wall", "Beam", "Column"],
    "options_hi": ["स्लैब", "वॉल", "बीम", "कॉलम"],
    "answer_en": "Slab",
    "answer_hi": "स्लैब"
  },
  {
    "num": 11,
    "question_en": "What was the third word in the list you memorized? (List: Diesel, Petrol, CNG, LPG, Electric)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: डीजल, पेट्रोल, सीएनजी, एलपीजी, इलेक्ट्रिक)",
    "options_en": ["CNG", "Petrol", "LPG", "Electric"],
    "options_hi": ["सीएनजी", "पेट्रोल", "एलपीजी", "इलेक्ट्रिक"],
    "answer_en": "CNG",
    "answer_hi": "सीएनजी"
  },
  {
    "num": 12,
    "question_en": "What was the second word in the list you memorized? (List: PLC, SCADA, DCS, HMI, RTU)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: पीएलसी, स्काडा, डीसीएस, एचएमआई, आरटीयू)",
    "options_en": ["SCADA", "PLC", "DCS", "HMI"],
    "options_hi": ["स्काडा", "पीएलसी", "डीसीएस", "एचएमआई"],
    "answer_en": "SCADA",
    "answer_hi": "स्काडा"
  },
  {
    "num": 13,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Design, Construction, Operation, Maintenance)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: प्लानिंग, डिजाइन, कंस्ट्रक्शन, ऑपरेशन, मेंटेनेंस)",
    "options_en": ["Maintenance", "Operation", "Construction", "Design"],
    "options_hi": ["मेंटेनेंस", "ऑपरेशन", "कंस्ट्रक्शन", "डिजाइन"],
    "answer_en": "Maintenance",
    "answer_hi": "मेंटेनेंस"
  },
  {
    "num": 14,
    "question_en": "What was the first word in the list you memorized? (List: Cement, Sand, Aggregate, Water, Steel)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: सीमेंट, रेत, एग्रीगेट, पानी, स्टील)",
    "options_en": ["Cement", "Sand", "Aggregate", "Water"],
    "options_hi": ["सीमेंट", "रेत", "एग्रीगेट", "पानी"],
    "answer_en": "Cement",
    "answer_hi": "सीमेंट"
  },
  {
    "num": 15,
    "question_en": "What was the fourth word in the list you memorized? (List: Survey, Design, Estimate, Execute, Maintain)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: सर्वे, डिजाइन, एस्टीमेट, एक्जीक्यूट, मेंटेन)",
    "options_en": ["Execute", "Maintain", "Estimate", "Design"],
    "options_hi": ["एक्जीक्यूट", "मेंटेन", "एस्टीमेट", "डिजाइन"],
    "answer_en": "Execute",
    "answer_hi": "एक्जीक्यूट"
  },
  {
    "num": 16,
    "question_en": "What was the third word in the list you memorized? (List: AC Motor, DC Motor, Stepper Motor, Servo Motor, Induction Motor)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: एसी मोटर, डीसी मोटर, स्टेपर मोटर, सर्वो मोटर, इंडक्शन मोटर)",
    "options_en": ["Stepper Motor", "DC Motor", "Servo Motor", "Induction Motor"],
    "options_hi": ["स्टेपर मोटर", "डीसी मोटर", "सर्वो मोटर", "इंडक्शन मोटर"],
    "answer_en": "Stepper Motor",
    "answer_hi": "स्टेपर मोटर"
  },
  {
    "num": 17,
    "question_en": "What was the second word in the list you memorized? (List: Beam, Column, Slab, Foundation, Footing)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: बीम, कॉलम, स्लैब, फाउंडेशन, फुटिंग)",
    "options_en": ["Column", "Beam", "Slab", "Foundation"],
    "options_hi": ["कॉलम", "बीम", "स्लैब", "फाउंडेशन"],
    "answer_en": "Column",
    "answer_hi": "कॉलम"
  },
  {
    "num": 18,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Scheduling, Monitoring, Controlling, Closing)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: प्लानिंग, शेड्यूलिंग, मॉनिटरिंग, कंट्रोलिंग, क्लोजिंग)",
    "options_en": ["Closing", "Controlling", "Monitoring", "Scheduling"],
    "options_hi": ["क्लोजिंग", "कंट्रोलिंग", "मॉनिटरिंग", "शेड्यूलिंग"],
    "answer_en": "Closing",
    "answer_hi": "क्लोजिंग"
  },
  {
    "num": 19,
    "question_en": "What was the first word in the list you memorized? (List: Lathe, Milling, Drilling, Grinding, Welding)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: लेथ, मिलिंग, ड्रिलिंग, ग्राइंडिंग, वेल्डिंग)",
    "options_en": ["Lathe", "Milling", "Drilling", "Grinding"],
    "options_hi": ["लेथ", "मिलिंग", "ड्रिलिंग", "ग्राइंडिंग"],
    "answer_en": "Lathe",
    "answer_hi": "लेथ"
  },
  {
    "num": 20,
    "question_en": "What was the fourth word in the list you memorized? (List: Piston, Cylinder, Crankshaft, Camshaft, Valves)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: पिस्टन, सिलेंडर, क्रैंकशाफ्ट, कैमशाफ्ट, वाल्व)",
    "options_en": ["Camshaft", "Valves", "Crankshaft", "Cylinder"],
    "options_hi": ["कैमशाफ्ट", "वाल्व", "क्रैंकशाफ्ट", "सिलेंडर"],
    "answer_en": "Camshaft",
    "answer_hi": "कैमशाफ्ट"
  },
  {
    "num": 21,
    "question_en": "What was the third word in the list you memorized? (List: Cement, Sand, Aggregate, Water, Admixture)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: सीमेंट, रेत, एग्रीगेट, पानी, एडमिक्सचर)",
    "options_en": ["Aggregate", "Sand", "Water", "Admixture"],
    "options_hi": ["एग्रीगेट", "रेत", "पानी", "एडमिक्सचर"],
    "answer_en": "Aggregate",
    "answer_hi": "एग्रीगेट"
  },
  {
    "num": 22,
    "question_en": "What was the second word in the list you memorized? (List: AC, DC, Transformer, Generator, Motor)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: एसी, डीसी, ट्रांसफॉर्मर, जनरेटर, मोटर)",
    "options_en": ["DC", "AC", "Transformer", "Generator"],
    "options_hi": ["डीसी", "एसी", "ट्रांसफॉर्मर", "जनरेटर"],
    "answer_en": "DC",
    "answer_hi": "डीसी"
  },
  {
    "num": 23,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Design, Execution, Monitoring, Handover)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: प्लानिंग, डिजाइन, एक्जीक्यूशन, मॉनिटरिंग, हैंडओवर)",
    "options_en": ["Handover", "Monitoring", "Execution", "Design"],
    "options_hi": ["हैंडओवर", "मॉनिटरिंग", "एक्जीक्यूशन", "डिजाइन"],
    "answer_en": "Handover",
    "answer_hi": "हैंडओवर"
  },
  {
    "num": 24,
    "question_en": "What was the first word in the list you memorized? (List: Compression, Tension, Shear, Bending, Torsion)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: कंप्रेशन, टेंशन, शीयर, बेंडिंग, टॉर्शन)",
    "options_en": ["Compression", "Tension", "Shear", "Bending"],
    "options_hi": ["कंप्रेशन", "टेंशन", "शीयर", "बेंडिंग"],
    "answer_en": "Compression",
    "answer_hi": "कंप्रेशन"
  },
  {
    "num": 25,
    "question_en": "What was the fourth word in the list you memorized? (List: Bolt, Nut, Washer, Screw, Rivet)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: बोल्ट, नट, वॉशर, स्क्रू, रिवेट)",
    "options_en": ["Screw", "Rivet", "Washer", "Nut"],
    "options_hi": ["स्क्रू", "रिवेट", "वॉशर", "नट"],
    "answer_en": "Screw",
    "answer_hi": "स्क्रू"
  },
  {
    "num": 26,
    "question_en": "What was the third word in the list you memorized? (List: Steel, Concrete, Timber, Masonry, Composite)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: स्टील, कंक्रीट, टिम्बर, मेसोनरी, कम्पोजिट)",
    "options_en": ["Timber", "Concrete", "Masonry", "Composite"],
    "options_hi": ["टिम्बर", "कंक्रीट", "मेसोनरी", "कम्पोजिट"],
    "answer_en": "Timber",
    "answer_hi": "टिम्बर"
  },
  {
    "num": 27,
    "question_en": "What was the second word in the list you memorized? (List: Foundation, Column, Beam, Slab, Staircase)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: फाउंडेशन, कॉलम, बीम, स्लैब, सीढ़ी)",
    "options_en": ["Column", "Foundation", "Beam", "Slab"],
    "options_hi": ["कॉलम", "फाउंडेशन", "बीम", "स्लैब"],
    "answer_en": "Column",
    "answer_hi": "कॉलम"
  },
  {
    "num": 28,
    "question_en": "What was the fifth word in the list you memorized? (List: RAM, ROM, CPU, GPU, Motherboard)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: रैम, रोम, सीपीयू, जीपीयू, मदरबोर्ड)",
    "options_en": ["Motherboard", "GPU", "CPU", "ROM"],
    "options_hi": ["मदरबोर्ड", "जीपीयू", "सीपीयू", "रोम"],
    "answer_en": "Motherboard",
    "answer_hi": "मदरबोर्ड"
  },
  {
    "num": 29,
    "question_en": "What was the first word in the list you memorized? (List: Stress, Strain, Modulus, Yield, Ultimate)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: स्ट्रेस, स्ट्रेन, मॉड्यूलस, यील्ड, अल्टीमेट)",
    "options_en": ["Stress", "Strain", "Modulus", "Yield"],
    "options_hi": ["स्ट्रेस", "स्ट्रेन", "मॉड्यूलस", "यील्ड"],
    "answer_en": "Stress",
    "answer_hi": "स्ट्रेस"
  },
  {
    "num": 30,
    "question_en": "What was the fourth word in the list you memorized? (List: Gears, Bearings, Shafts, Couplings, Pulleys)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: गियर्स, बेयरिंग्स, शाफ्ट्स, कपलिंग्स, पुली)",
    "options_en": ["Couplings", "Pulleys", "Bearings", "Shafts"],
    "options_hi": ["कपलिंग्स", "पुली", "बेयरिंग्स", "शाफ्ट्स"],
    "answer_en": "Couplings",
    "answer_hi": "कपलिंग्स"
  },
  {
    "num": 31,
    "question_en": "What was the third word in the list you memorized? (List: Diesel, Petrol, CNG, LPG, Electric)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: डीजल, पेट्रोल, सीएनजी, एलपीजी, इलेक्ट्रिक)",
    "options_en": ["CNG", "Petrol", "LPG", "Electric"],
    "options_hi": ["सीएनजी", "पेट्रोल", "एलपीजी", "इलेक्ट्रिक"],
    "answer_en": "CNG",
    "answer_hi": "सीएनजी"
  },
  {
    "num": 32,
    "question_en": "What was the second word in the list you memorized? (List: Surveying, Leveling, Theodolite, Total Station, GPS)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: सर्वेयिंग, लेवलिंग, थियोडोलाइट, टोटल स्टेशन, जीपीएस)",
    "options_en": ["Leveling", "Surveying", "Theodolite", "Total Station"],
    "options_hi": ["लेवलिंग", "सर्वेयिंग", "थियोडोलाइट", "टोटल स्टेशन"],
    "answer_en": "Leveling",
    "answer_hi": "लेवलिंग"
  },
  {
    "num": 33,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Scheduling, Costing, Quality, Safety)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: प्लानिंग, शेड्यूलिंग, कॉस्टिंग, क्वालिटी, सेफ्टी)",
    "options_en": ["Safety", "Quality", "Costing", "Scheduling"],
    "options_hi": ["सेफ्टी", "क्वालिटी", "कॉस्टिंग", "शेड्यूलिंग"],
    "answer_en": "Safety",
    "answer_hi": "सेफ्टी"
  },
  {
    "num": 34,
    "question_en": "What was the first word in the list you memorized? (List: Lathe, Drill, Mill, Grinder, Shaper)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: लेथ, ड्रिल, मिल, ग्राइंडर, शेपर)",
    "options_en": ["Lathe", "Drill", "Mill", "Grinder"],
    "options_hi": ["लेथ", "ड्रिल", "मिल", "ग्राइंडर"],
    "answer_en": "Lathe",
    "answer_hi": "लेथ"
  },
  {
    "num": 35,
    "question_en": "What was the fourth word in the list you memorized? (List: Spring, Damper, Suspension, Chassis, Axle)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: स्प्रिंग, डैम्पर, सस्पेंशन, चेसिस, एक्सल)",
    "options_en": ["Chassis", "Axle", "Suspension", "Damper"],
    "options_hi": ["चेसिस", "एक्सल", "सस्पेंशन", "डैम्पर"],
    "answer_en": "Chassis",
    "answer_hi": "चेसिस"
  },
  {
    "num": 36,
    "question_en": "What was the third word in the list you memorized? (List: Speed, Velocity, Acceleration, Force, Momentum)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: स्पीड, वेलोसिटी, एक्सेलेरेशन, फोर्स, मोमेंटम)",
    "options_en": ["Acceleration", "Velocity", "Force", "Momentum"],
    "options_hi": ["एक्सेलेरेशन", "वेलोसिटी", "फोर्स", "मोमेंटम"],
    "answer_en": "Acceleration",
    "answer_hi": "एक्सेलेरेशन"
  },
  {
    "num": 37,
    "question_en": "What was the second word in the list you memorized? (List: Brick, Mortar, Plaster, Paint, Tile)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: ब्रिक, मोर्टार, प्लास्टर, पेंट, टाइल)",
    "options_en": ["Mortar", "Brick", "Plaster", "Paint"],
    "options_hi": ["मोर्टार", "ब्रिक", "प्लास्टर", "पेंट"],
    "answer_en": "Mortar",
    "answer_hi": "मोर्टार"
  },
  {
    "num": 38,
    "question_en": "What was the fifth word in the list you memorized? (List: Input, Process, Output, Feedback, Control)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: इनपुट, प्रोसेस, आउटपुट, फीडबैक, कंट्रोल)",
    "options_en": ["Control", "Feedback", "Output", "Process"],
    "options_hi": ["कंट्रोल", "फीडबैक", "आउटपुट", "प्रोसेस"],
    "answer_en": "Control",
    "answer_hi": "कंट्रोल"
  },
  {
    "num": 39,
    "question_en": "What was the first word in the list you memorized? (List: Tension, Compression, Shear, Bending, Torsion)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: टेंशन, कंप्रेशन, शीयर, बेंडिंग, टॉर्शन)",
    "options_en": ["Tension", "Compression", "Shear", "Bending"],
    "options_hi": ["टेंशन", "कंप्रेशन", "शीयर", "बेंडिंग"],
    "answer_en": "Tension",
    "answer_hi": "टेंशन"
  },
  {
    "num": 40,
    "question_en": "What was the fourth word in the list you memorized? (List: Switch, Fuse, Circuit Breaker, Relay, Transformer)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: स्विच, फ्यूज, सर्किट ब्रेकर, रिले, ट्रांसफॉर्मर)",
    "options_en": ["Relay", "Transformer", "Circuit Breaker", "Fuse"],
    "options_hi": ["रिले", "ट्रांसफॉर्मर", "सर्किट ब्रेकर", "फ्यूज"],
    "answer_en": "Relay",
    "answer_hi": "रिले"
  },
  {
    "num": 41,
    "question_en": "What was the third word in the list you memorized? (List: Solar, Wind, Hydro, Thermal, Nuclear)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: सोलर, विंड, हाइड्रो, थर्मल, न्यूक्लियर)",
    "options_en": ["Hydro", "Wind", "Thermal", "Nuclear"],
    "options_hi": ["हाइड्रो", "विंड", "थर्मल", "न्यूक्लियर"],
    "answer_en": "Hydro",
    "answer_hi": "हाइड्रो"
  },
  {
    "num": 42,
    "question_en": "What was the second word in the list you memorized? (List: Radar, Sonar, GPS, Compass, Gyroscope)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: रडार, सोनार, जीपीएस, कंपास, जायरोस्कोप)",
    "options_en": ["Sonar", "Radar", "GPS", "Compass"],
    "options_hi": ["सोनार", "रडार", "जीपीएस", "कंपास"],
    "answer_en": "Sonar",
    "answer_hi": "सोनार"
  },
  {
    "num": 43,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Scheduling, Monitoring, Controlling, Closing)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: प्लानिंग, शेड्यूलिंग, मॉनिटरिंग, कंट्रोलिंग, क्लोजिंग)",
    "options_en": ["Closing", "Controlling", "Monitoring", "Scheduling"],
    "options_hi": ["क्लोजिंग", "कंट्रोलिंग", "मॉनिटरिंग", "शेड्यूलिंग"],
    "answer_en": "Closing",
    "answer_hi": "क्लोजिंग"
  },
  {
    "num": 44,
    "question_en": "What was the first word in the list you memorized? (List: Lathe, Milling, Drilling, Grinding, Turning)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: लेथ, मिलिंग, ड्रिलिंग, ग्राइंडिंग, टर्निंग)",
    "options_en": ["Lathe", "Milling", "Drilling", "Grinding"],
    "options_hi": ["लेथ", "मिलिंग", "ड्रिलिंग", "ग्राइंडिंग"],
    "answer_en": "Lathe",
    "answer_hi": "लेथ"
  },
  {
    "num": 45,
    "question_en": "What was the fourth word in the list you memorized? (List: Tensile, Compressive, Shear, Bending, Torsional)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: टेंसाइल, कंप्रेसिव, शीयर, बेंडिंग, टॉर्शनल)",
    "options_en": ["Bending", "Torsional", "Shear", "Compressive"],
    "options_hi": ["बेंडिंग", "टॉर्शनल", "शीयर", "कंप्रेसिव"],
    "answer_en": "Bending",
    "answer_hi": "बेंडिंग"
  },
  {
    "num": 46,
    "question_en": "What was the third word in the list you memorized? (List: Analog, Digital, Hybrid, Microprocessor, Microcontroller)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: एनालॉग, डिजिटल, हाइब्रिड, माइक्रोप्रोसेसर, माइक्रोकंट्रोलर)",
    "options_en": ["Hybrid", "Digital", "Microprocessor", "Microcontroller"],
    "options_hi": ["हाइब्रिड", "डिजिटल", "माइक्रोप्रोसेसर", "माइक्रोकंट्रोलर"],
    "answer_en": "Hybrid",
    "answer_hi": "हाइब्रिड"
  },
  {
    "num": 47,
    "question_en": "What was the second word in the list you memorized? (List: Road, Railway, Bridge, Tunnel, Airport)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: रोड, रेलवे, ब्रिज, टनल, एयरपोर्ट)",
    "options_en": ["Railway", "Road", "Bridge", "Tunnel"],
    "options_hi": ["रेलवे", "रोड", "ब्रिज", "टनल"],
    "answer_en": "Railway",
    "answer_hi": "रेलवे"
  },
  {
    "num": 48,
    "question_en": "What was the fifth word in the list you memorized? (List: Boiler, Turbine, Generator, Condenser, Pump)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: बॉयलर, टर्बाइन, जनरेटर, कंडेनसर, पंप)",
    "options_en": ["Pump", "Condenser", "Generator", "Turbine"],
    "options_hi": ["पंप", "कंडेनसर", "जनरेटर", "टर्बाइन"],
    "answer_en": "Pump",
    "answer_hi": "पंप"
  },
  {
    "num": 49,
    "question_en": "What was the first word in the list you memorized? (List: Manufacturing, Production, Assembly, Testing, Packaging)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: मैन्युफैक्चरिंग, प्रोडक्शन, असेंबली, टेस्टिंग, पैकेजिंग)",
    "options_en": ["Manufacturing", "Production", "Assembly", "Testing"],
    "options_hi": ["मैन्युफैक्चरिंग", "प्रोडक्शन", "असेंबली", "टेस्टिंग"],
    "answer_en": "Manufacturing",
    "answer_hi": "मैन्युफैक्चरिंग"
  },
  {
    "num": 50,
    "question_en": "What was the fourth word in the list you memorized? (List: Foundation, Column, Beam, Slab, Wall)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: फाउंडेशन, कॉलम, बीम, स्लैब, वॉल)",
    "options_en": ["Slab", "Wall", "Beam", "Column"],
    "options_hi": ["स्लैब", "वॉल", "बीम", "कॉलम"],
    "answer_en": "Slab",
    "answer_hi": "स्लैब"
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