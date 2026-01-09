const questions =[
  {
    "num": 1,
    "question_en": "What was the second word in the list you memorized? (List: Ohm's Law, Kirchhoff's Law, Faraday's Law, Lenz's Law, Coulomb's Law)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: ओम का नियम, किर्चॉफ का नियम, फैराडे का नियम, लेन्ज का नियम, कूलम्ब का नियम)",
    "options_en": ["Kirchhoff's Law", "Ohm's Law", "Faraday's Law", "Lenz's Law"],
    "options_hi": ["किर्चॉफ का नियम", "ओम का नियम", "फैराडे का नियम", "लेन्ज का नियम"],
    "answer_en": "Kirchhoff's Law",
    "answer_hi": "किर्चॉफ का नियम"
  },
  {
    "num": 2,
    "question_en": "What was the fifth word in the list you memorized? (List: Tensile Test, Compression Test, Shear Test, Hardness Test, Impact Test)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: तन्य परीक्षण, संपीड़न परीक्षण, कर्तन परीक्षण, कठोरता परीक्षण, प्रभाव परीक्षण)",
    "options_en": ["Impact Test", "Hardness Test", "Shear Test", "Compression Test"],
    "options_hi": ["प्रभाव परीक्षण", "कठोरता परीक्षण", "कर्तन परीक्षण", "संपीड़न परीक्षण"],
    "answer_en": "Impact Test",
    "answer_hi": "प्रभाव परीक्षण"
  },
  {
    "num": 3,
    "question_en": "What was the third word in the list you memorized? (List: Bearing, Bush, Shaft, Coupling, Key)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: बेयरिंग, बुश, शाफ्ट, कपलिंग, की)",
    "options_en": ["Shaft", "Bush", "Coupling", "Key"],
    "options_hi": ["शाफ्ट", "बुश", "कपलिंग", "की"],
    "answer_en": "Shaft",
    "answer_hi": "शाफ्ट"
  },
  {
    "num": 4,
    "question_en": "What was the first word in the list you memorized? (List: AutoCAD, SolidWorks, CATIA, Revit, ANSYS)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: ऑटोकैड, सॉलिडवर्क्स, कैटिया, रिविट, एनसिस)",
    "options_en": ["AutoCAD", "SolidWorks", "CATIA", "Revit"],
    "options_hi": ["ऑटोकैड", "सॉलिडवर्क्स", "कैटिया", "रिविट"],
    "answer_en": "AutoCAD",
    "answer_hi": "ऑटोकैड"
  },
  {
    "num": 5,
    "question_en": "What was the fourth word in the list you memorized? (List: Cement, Sand, Aggregate, Water, Steel)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: सीमेंट, रेत, एग्रीगेट, पानी, स्टील)",
    "options_en": ["Water", "Steel", "Aggregate", "Sand"],
    "options_hi": ["पानी", "स्टील", "एग्रीगेट", "रेत"],
    "answer_en": "Water",
    "answer_hi": "पानी"
  },
  {
    "num": 6,
    "question_en": "What was the second word in the list you memorized? (List: PLC, SCADA, DCS, HMI, RTU)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: पीएलसी, स्काडा, डीसीएस, एचएमआई, आरटीयू)",
    "options_en": ["SCADA", "PLC", "DCS", "HMI"],
    "options_hi": ["स्काडा", "पीएलसी", "डीसीएस", "एचएमआई"],
    "answer_en": "SCADA",
    "answer_hi": "स्काडा"
  },
  {
    "num": 7,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Scheduling, Monitoring, Controlling, Closing)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: योजना, शेड्यूलिंग, निगरानी, नियंत्रण, समापन)",
    "options_en": ["Closing", "Controlling", "Monitoring", "Scheduling"],
    "options_hi": ["समापन", "नियंत्रण", "निगरानी", "शेड्यूलिंग"],
    "answer_en": "Closing",
    "answer_hi": "समापन"
  },
  {
    "num": 8,
    "question_en": "What was the third word in the list you memorized? (List: Lathe, Milling, Drilling, Grinding, Welding)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: लेथ, मिलिंग, ड्रिलिंग, ग्राइंडिंग, वेल्डिंग)",
    "options_en": ["Drilling", "Milling", "Grinding", "Welding"],
    "options_hi": ["ड्रिलिंग", "मिलिंग", "ग्राइंडिंग", "वेल्डिंग"],
    "answer_en": "Drilling",
    "answer_hi": "ड्रिलिंग"
  },
  {
    "num": 9,
    "question_en": "What was the first word in the list you memorized? (List: Stress, Strain, Modulus, Yield, Ultimate)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: तनाव, विकृति, मापांक, पराभव, परम)",
    "options_en": ["Stress", "Strain", "Modulus", "Yield"],
    "options_hi": ["तनाव", "विकृति", "मापांक", "पराभव"],
    "answer_en": "Stress",
    "answer_hi": "तनाव"
  },
  {
    "num": 10,
    "question_en": "What was the fourth word in the list you memorized? (List: Voltage, Current, Resistance, Power, Energy)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: वोल्टेज, धारा, प्रतिरोध, शक्ति, ऊर्जा)",
    "options_en": ["Power", "Energy", "Resistance", "Current"],
    "options_hi": ["शक्ति", "ऊर्जा", "प्रतिरोध", "धारा"],
    "answer_en": "Power",
    "answer_hi": "शक्ति"
  },
  {
    "num": 11,
    "question_en": "What was the second word in the list you memorized? (List: Foundation, Column, Beam, Slab, Staircase)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: नींव, स्तंभ, बीम, स्लैब, सीढ़ी)",
    "options_en": ["Column", "Foundation", "Beam", "Slab"],
    "options_hi": ["स्तंभ", "नींव", "बीम", "स्लैब"],
    "answer_en": "Column",
    "answer_hi": "स्तंभ"
  },
  {
    "num": 12,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Analysis, Design, Implementation, Testing)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: योजना, विश्लेषण, डिजाइन, कार्यान्वयन, परीक्षण)",
    "options_en": ["Testing", "Implementation", "Design", "Analysis"],
    "options_hi": ["परीक्षण", "कार्यान्वयन", "डिजाइन", "विश्लेषण"],
    "answer_en": "Testing",
    "answer_hi": "परीक्षण"
  },
  {
    "num": 13,
    "question_en": "What was the third word in the list you memorized? (List: Diesel, Petrol, CNG, LPG, Electric)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: डीजल, पेट्रोल, सीएनजी, एलपीजी, इलेक्ट्रिक)",
    "options_en": ["CNG", "Petrol", "LPG", "Electric"],
    "options_hi": ["सीएनजी", "पेट्रोल", "एलपीजी", "इलेक्ट्रिक"],
    "answer_en": "CNG",
    "answer_hi": "सीएनजी"
  },
  {
    "num": 14,
    "question_en": "What was the first word in the list you memorized? (List: AC Motor, DC Motor, Stepper Motor, Servo Motor, Induction Motor)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: एसी मोटर, डीसी मोटर, स्टेपर मोटर, सर्वो मोटर, इंडक्शन मोटर)",
    "options_en": ["AC Motor", "DC Motor", "Stepper Motor", "Servo Motor"],
    "options_hi": ["एसी मोटर", "डीसी मोटर", "स्टेपर मोटर", "सर्वो मोटर"],
    "answer_en": "AC Motor",
    "answer_hi": "एसी मोटर"
  },
  {
    "num": 15,
    "question_en": "What was the fourth word in the list you memorized? (List: Survey, Excavation, Foundation, Superstructure, Finishing)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: सर्वेक्षण, खुदाई, नींव, अधिसंरचना, फिनिशिंग)",
    "options_en": ["Superstructure", "Finishing", "Foundation", "Excavation"],
    "options_hi": ["अधिसंरचना", "फिनिशिंग", "नींव", "खुदाई"],
    "answer_en": "Superstructure",
    "answer_hi": "अधिसंरचना"
  },
  {
    "num": 16,
    "question_en": "What was the second word in the list you memorized? (List: Transformer, Rectifier, Inverter, Converter, Stabilizer)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: ट्रांसफॉर्मर, रेक्टिफायर, इन्वर्टर, कन्वर्टर, स्टेबिलाइजर)",
    "options_en": ["Rectifier", "Transformer", "Inverter", "Converter"],
    "options_hi": ["रेक्टिफायर", "ट्रांसफॉर्मर", "इन्वर्टर", "कन्वर्टर"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर"
  },
  {
    "num": 17,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Procurement, Execution, Monitoring, Handover)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: योजना, खरीद, निष्पादन, निगरानी, हस्तांतरण)",
    "options_en": ["Handover", "Monitoring", "Execution", "Procurement"],
    "options_hi": ["हस्तांतरण", "निगरानी", "निष्पादन", "खरीद"],
    "answer_en": "Handover",
    "answer_hi": "हस्तांतरण"
  },
  {
    "num": 18,
    "question_en": "What was the third word in the list you memorized? (List: Steel, Concrete, Timber, Masonry, Composite)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: स्टील, कंक्रीट, टिम्बर, चिनाई, संयुक्त)",
    "options_en": ["Timber", "Concrete", "Masonry", "Composite"],
    "options_hi": ["टिम्बर", "कंक्रीट", "चिनाई", "संयुक्त"],
    "answer_en": "Timber",
    "answer_hi": "टिम्बर"
  },
  {
    "num": 19,
    "question_en": "What was the first word in the list you memorized? (List: Hydraulic, Pneumatic, Mechanical, Electrical, Electronic)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: हाइड्रोलिक, न्यूमेटिक, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक)",
    "options_en": ["Hydraulic", "Pneumatic", "Mechanical", "Electrical"],
    "options_hi": ["हाइड्रोलिक", "न्यूमेटिक", "मैकेनिकल", "इलेक्ट्रिकल"],
    "answer_en": "Hydraulic",
    "answer_hi": "हाइड्रोलिक"
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
    "question_en": "What was the second word in the list you memorized? (List: Surveying, Leveling, Theodolite, Total Station, GPS)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: सर्वेक्षण, लेवलिंग, थियोडोलाइट, टोटल स्टेशन, जीपीएस)",
    "options_en": ["Leveling", "Surveying", "Theodolite", "Total Station"],
    "options_hi": ["लेवलिंग", "सर्वेक्षण", "थियोडोलाइट", "टोटल स्टेशन"],
    "answer_en": "Leveling",
    "answer_hi": "लेवलिंग"
  },
  {
    "num": 22,
    "question_en": "What was the fifth word in the list you memorized? (List: Design, Modeling, Simulation, Analysis, Optimization)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: डिजाइन, मॉडलिंग, सिमुलेशन, विश्लेषण, अनुकूलन)",
    "options_en": ["Optimization", "Analysis", "Simulation", "Modeling"],
    "options_hi": ["अनुकूलन", "विश्लेषण", "सिमुलेशन", "मॉडलिंग"],
    "answer_en": "Optimization",
    "answer_hi": "अनुकूलन"
  },
  {
    "num": 23,
    "question_en": "What was the third word in the list you memorized? (List: AC, DC, Transformer, Generator, Motor)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: एसी, डीसी, ट्रांसफॉर्मर, जनरेटर, मोटर)",
    "options_en": ["Transformer", "DC", "Generator", "Motor"],
    "options_hi": ["ट्रांसफॉर्मर", "डीसी", "जनरेटर", "मोटर"],
    "answer_en": "Transformer",
    "answer_hi": "ट्रांसफॉर्मर"
  },
  {
    "num": 24,
    "question_en": "What was the first word in the list you memorized? (List: Boiler, Turbine, Condenser, Pump, Economizer)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: बॉयलर, टर्बाइन, कंडेनसर, पंप, इकोनोमाइजर)",
    "options_en": ["Boiler", "Turbine", "Condenser", "Pump"],
    "options_hi": ["बॉयलर", "टर्बाइन", "कंडेनसर", "पंप"],
    "answer_en": "Boiler",
    "answer_hi": "बॉयलर"
  },
  {
    "num": 25,
    "question_en": "What was the fourth word in the list you memorized? (List: Planning, Designing, Estimating, Tendering, Execution)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: योजना, डिजाइनिंग, अनुमान, निविदा, निष्पादन)",
    "options_en": ["Tendering", "Execution", "Estimating", "Designing"],
    "options_hi": ["निविदा", "निष्पादन", "अनुमान", "डिजाइनिंग"],
    "answer_en": "Tendering",
    "answer_hi": "निविदा"
  },
  {
    "num": 26,
    "question_en": "What was the second word in the list you memorized? (List: Cement, Mortar, Concrete, Plaster, Paint)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: सीमेंट, मोर्टार, कंक्रीट, प्लास्टर, पेंट)",
    "options_en": ["Mortar", "Cement", "Concrete", "Plaster"],
    "options_hi": ["मोर्टार", "सीमेंट", "कंक्रीट", "प्लास्टर"],
    "answer_en": "Mortar",
    "answer_hi": "मोर्टार"
  },
  {
    "num": 27,
    "question_en": "What was the fifth word in the list you memorized? (List: Input, Process, Output, Storage, Control)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: इनपुट, प्रक्रिया, आउटपुट, संग्रहण, नियंत्रण)",
    "options_en": ["Control", "Storage", "Output", "Process"],
    "options_hi": ["नियंत्रण", "संग्रहण", "आउटपुट", "प्रक्रिया"],
    "answer_en": "Control",
    "answer_hi": "नियंत्रण"
  },
  {
    "num": 28,
    "question_en": "What was the third word in the list you memorized? (List: Steel, Aluminum, Copper, Brass, Bronze)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: स्टील, एल्युमिनियम, तांबा, पीतल, कांस्य)",
    "options_en": ["Copper", "Aluminum", "Brass", "Bronze"],
    "options_hi": ["तांबा", "एल्युमिनियम", "पीतल", "कांस्य"],
    "answer_en": "Copper",
    "answer_hi": "तांबा"
  },
  {
    "num": 29,
    "question_en": "What was the first word in the list you memorized? (List: CNC, VMC, HMC, EDM, Laser)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: सीएनसी, वीएमसी, एचएमसी, ईडीएम, लेज़र)",
    "options_en": ["CNC", "VMC", "HMC", "EDM"],
    "options_hi": ["सीएनसी", "वीएमसी", "एचएमसी", "ईडीएम"],
    "answer_en": "CNC",
    "answer_hi": "सीएनसी"
  },
  {
    "num": 30,
    "question_en": "What was the fourth word in the list you memorized? (List: Voltage, Current, Resistance, Inductance, Capacitance)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: वोल्टेज, धारा, प्रतिरोध, प्रेरकत्व, धारिता)",
    "options_en": ["Inductance", "Capacitance", "Resistance", "Current"],
    "options_hi": ["प्रेरकत्व", "धारिता", "प्रतिरोध", "धारा"],
    "answer_en": "Inductance",
    "answer_hi": "प्रेरकत्व"
  },
  {
    "num": 31,
    "question_en": "What was the second word in the list you memorized? (List: Brick, Block, Stone, Tile, Marble)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: ईंट, ब्लॉक, पत्थर, टाइल, संगमरमर)",
    "options_en": ["Block", "Brick", "Stone", "Tile"],
    "options_hi": ["ब्लॉक", "ईंट", "पत्थर", "टाइल"],
    "answer_en": "Block",
    "answer_hi": "ब्लॉक"
  },
  {
    "num": 32,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Scheduling, Resource, Cost, Quality)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: योजना, शेड्यूलिंग, संसाधन, लागत, गुणवत्ता)",
    "options_en": ["Quality", "Cost", "Resource", "Scheduling"],
    "options_hi": ["गुणवत्ता", "लागत", "संसाधन", "शेड्यूलिंग"],
    "answer_en": "Quality",
    "answer_hi": "गुणवत्ता"
  },
  {
    "num": 33,
    "question_en": "What was the third word in the list you memorized? (List: Lathe, Drill, Mill, Grinder, Shaper)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: लेथ, ड्रिल, मिल, ग्राइंडर, शेपर)",
    "options_en": ["Mill", "Drill", "Grinder", "Shaper"],
    "options_hi": ["मिल", "ड्रिल", "ग्राइंडर", "शेपर"],
    "answer_en": "Mill",
    "answer_hi": "मिल"
  },
  {
    "num": 34,
    "question_en": "What was the first word in the list you memorized? (List: AutoCAD, MATLAB, SolidWorks, CATIA, Pro/E)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: ऑटोकैड, मैटलैब, सॉलिडवर्क्स, कैटिया, प्रो/ई)",
    "options_en": ["AutoCAD", "MATLAB", "SolidWorks", "CATIA"],
    "options_hi": ["ऑटोकैड", "मैटलैब", "सॉलिडवर्क्स", "कैटिया"],
    "answer_en": "AutoCAD",
    "answer_hi": "ऑटोकैड"
  },
  {
    "num": 35,
    "question_en": "What was the fourth word in the list you memorized? (List: Survey, Design, Estimate, Execute, Maintain)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: सर्वेक्षण, डिजाइन, अनुमान, निष्पादन, रखरखाव)",
    "options_en": ["Execute", "Maintain", "Estimate", "Design"],
    "options_hi": ["निष्पादन", "रखरखाव", "अनुमान", "डिजाइन"],
    "answer_en": "Execute",
    "answer_hi": "निष्पादन"
  },
  {
    "num": 36,
    "question_en": "What was the second word in the list you memorized? (List: AC, DC, Three-phase, Single-phase, Variable)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: एसी, डीसी, तीन-फेज, एकल-फेज, परिवर्तनशील)",
    "options_en": ["DC", "AC", "Three-phase", "Single-phase"],
    "options_hi": ["डीसी", "एसी", "तीन-फेज", "एकल-फेज"],
    "answer_en": "DC",
    "answer_hi": "डीसी"
  },
  {
    "num": 37,
    "question_en": "What was the fifth word in the list you memorized? (List: Design, Analysis, Simulation, Testing, Validation)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: डिजाइन, विश्लेषण, सिमुलेशन, परीक्षण, मान्यकरण)",
    "options_en": ["Validation", "Testing", "Simulation", "Analysis"],
    "options_hi": ["मान्यकरण", "परीक्षण", "सिमुलेशन", "विश्लेषण"],
    "answer_en": "Validation",
    "answer_hi": "मान्यकरण"
  },
  {
    "num": 38,
    "question_en": "What was the third word in the list you memorized? (List: Bolt, Nut, Washer, Screw, Rivet)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: बोल्ट, नट, वॉशर, पेंच, रिवेट)",
    "options_en": ["Washer", "Nut", "Screw", "Rivet"],
    "options_hi": ["वॉशर", "नट", "पेंच", "रिवेट"],
    "answer_en": "Washer",
    "answer_hi": "वॉशर"
  },
  {
    "num": 39,
    "question_en": "What was the first word in the list you memorized? (List: Transformer, Motor, Generator, Inverter, Rectifier)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: ट्रांसफॉर्मर, मोटर, जनरेटर, इन्वर्टर, रेक्टिफायर)",
    "options_en": ["Transformer", "Motor", "Generator", "Inverter"],
    "options_hi": ["ट्रांसफॉर्मर", "मोटर", "जनरेटर", "इन्वर्टर"],
    "answer_en": "Transformer",
    "answer_hi": "ट्रांसफॉर्मर"
  },
  {
    "num": 40,
    "question_en": "What was the fourth word in the list you memorized? (List: Planning, Designing, Estimating, Tendering, Construction)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: योजना, डिजाइनिंग, अनुमान, निविदा, निर्माण)",
    "options_en": ["Tendering", "Construction", "Estimating", "Designing"],
    "options_hi": ["निविदा", "निर्माण", "अनुमान", "डिजाइनिंग"],
    "answer_en": "Tendering",
    "answer_hi": "निविदा"
  },
  {
    "num": 41,
    "question_en": "What was the second word in the list you memorized? (List: Steel, Cement, Sand, Aggregate, Water)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: स्टील, सीमेंट, रेत, एग्रीगेट, पानी)",
    "options_en": ["Cement", "Steel", "Sand", "Aggregate"],
    "options_hi": ["सीमेंट", "स्टील", "रेत", "एग्रीगेट"],
    "answer_en": "Cement",
    "answer_hi": "सीमेंट"
  },
  {
    "num": 42,
    "question_en": "What was the fifth word in the list you memorized? (List: Input, Processing, Output, Feedback, Control)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: इनपुट, प्रसंस्करण, आउटपुट, प्रतिक्रिया, नियंत्रण)",
    "options_en": ["Control", "Feedback", "Output", "Processing"],
    "options_hi": ["नियंत्रण", "प्रतिक्रिया", "आउटपुट", "प्रसंस्करण"],
    "answer_en": "Control",
    "answer_hi": "नियंत्रण"
  },
  {
    "num": 43,
    "question_en": "What was the third word in the list you memorized? (List: Diesel, Petrol, Kerosene, LPG, CNG)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: डीजल, पेट्रोल, मिट्टी का तेल, एलपीजी, सीएनजी)",
    "options_en": ["Kerosene", "Petrol", "LPG", "CNG"],
    "options_hi": ["मिट्टी का तेल", "पेट्रोल", "एलपीजी", "सीएनजी"],
    "answer_en": "Kerosene",
    "answer_hi": "मिट्टी का तेल"
  },
  {
    "num": 44,
    "question_en": "What was the first word in the list you memorized? (List: Lathe, Milling, Drilling, Grinding, Welding)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: लेथ, मिलिंग, ड्रिलिंग, ग्राइंडिंग, वेल्डिंग)",
    "options_en": ["Lathe", "Milling", "Drilling", "Grinding"],
    "options_hi": ["लेथ", "मिलिंग", "ड्रिलिंग", "ग्राइंडिंग"],
    "answer_en": "Lathe",
    "answer_hi": "लेथ"
  },
  {
    "num": 45,
    "question_en": "What was the fourth word in the list you memorized? (List: AC, DC, Transformer, Motor, Generator)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: एसी, डीसी, ट्रांसफॉर्मर, मोटर, जनरेटर)",
    "options_en": ["Motor", "Generator", "Transformer", "DC"],
    "options_hi": ["मोटर", "जनरेटर", "ट्रांसफॉर्मर", "डीसी"],
    "answer_en": "Motor",
    "answer_hi": "मोटर"
  },
  {
    "num": 46,
    "question_en": "What was the second word in the list you memorized? (List: Beam, Column, Slab, Foundation, Footing)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: बीम, स्तंभ, स्लैब, नींव, फुटिंग)",
    "options_en": ["Column", "Beam", "Slab", "Foundation"],
    "options_hi": ["स्तंभ", "बीम", "स्लैब", "नींव"],
    "answer_en": "Column",
    "answer_hi": "स्तंभ"
  },
  {
    "num": 47,
    "question_en": "What was the fifth word in the list you memorized? (List: Planning, Scheduling, Execution, Monitoring, Closing)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: योजना, शेड्यूलिंग, निष्पादन, निगरानी, समापन)",
    "options_en": ["Closing", "Monitoring", "Execution", "Scheduling"],
    "options_hi": ["समापन", "निगरानी", "निष्पादन", "शेड्यूलिंग"],
    "answer_en": "Closing",
    "answer_hi": "समापन"
  },
  {
    "num": 48,
    "question_en": "What was the third word in the list you memorized? (List: Voltage, Current, Resistance, Power, Energy)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: वोल्टेज, धारा, प्रतिरोध, शक्ति, ऊर्जा)",
    "options_en": ["Resistance", "Current", "Power", "Energy"],
    "options_hi": ["प्रतिरोध", "धारा", "शक्ति", "ऊर्जा"],
    "answer_en": "Resistance",
    "answer_hi": "प्रतिरोध"
  },
  {
    "num": 49,
    "question_en": "What was the first word in the list you memorized? (List: Steel, Aluminum, Copper, Brass, Bronze)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: स्टील, एल्युमिनियम, तांबा, पीतल, कांस्य)",
    "options_en": ["Steel", "Aluminum", "Copper", "Brass"],
    "options_hi": ["स्टील", "एल्युमिनियम", "तांबा", "पीतल"],
    "answer_en": "Steel",
    "answer_hi": "स्टील"
  },
  {
    "num": 50,
    "question_en": "What was the fourth word in the list you memorized? (List: Survey, Design, Estimate, Construct, Maintain)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: सर्वेक्षण, डिजाइन, अनुमान, निर्माण, रखरखाव)",
    "options_en": ["Construct", "Maintain", "Estimate", "Design"],
    "options_hi": ["निर्माण", "रखरखाव", "अनुमान", "डिजाइन"],
    "answer_en": "Construct",
    "answer_hi": "निर्माण"
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