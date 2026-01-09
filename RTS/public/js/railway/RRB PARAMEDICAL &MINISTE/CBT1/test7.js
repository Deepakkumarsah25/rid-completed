const questions = [
  {
    "num": 1,
    "question_en": "What was the third word in the list you memorized? (List: Beam, Column, Slab, Footing, Foundation)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: बीम, कॉलम, स्लैब, फुटिंग, फाउंडेशन)",
    "options_en": ["Column", "Slab", "Beam", "Footing"],
    "options_hi": ["कॉलम", "स्लैब", "बीम", "फुटिंग"],
    "answer_en": "Slab",
    "answer_hi": "स्लैब"
  },
  {
    "num": 2,
    "question_en": "What was the fifth word in the list you memorized? (List: Gear, Bearing, Shaft, Pulley, Coupling)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: गियर, बेयरिंग, शाफ्ट, पुली, कपलिंग)",
    "options_en": ["Pulley", "Coupling", "Shaft", "Bearing"],
    "options_hi": ["पुली", "कपलिंग", "शाफ्ट", "बेयरिंग"],
    "answer_en": "Coupling",
    "answer_hi": "कपलिंग"
  },
  {
    "num": 3,
    "question_en": "What was the second word in the list you memorized? (List: Resistor, Capacitor, Inductor, Diode, Transistor)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: रेसिस्टर, कैपेसिटर, इंडक्टर, डायोड, ट्रांजिस्टर)",
    "options_en": ["Capacitor", "Resistor", "Inductor", "Diode"],
    "options_hi": ["कैपेसिटर", "रेसिस्टर", "इंडक्टर", "डायोड"],
    "answer_en": "Capacitor",
    "answer_hi": "कैपेसिटर"
  },
  {
    "num": 4,
    "question_en": "What was the fourth word in the list you memorized? (List: Volt, Ampere, Ohm, Watt, Hertz)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: वोल्ट, एम्पियर, ओम, वाट, हर्ट्ज)",
    "options_en": ["Ohm", "Watt", "Ampere", "Hertz"],
    "options_hi": ["ओम", "वाट", "एम्पियर", "हर्ट्ज"],
    "answer_en": "Watt",
    "answer_hi": "वाट"
  },
  {
    "num": 5,
    "question_en": "What was the first word in the list you memorized? (List: Compression, Tension, Shear, Torsion, Bending)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: कंप्रेशन, टेंशन, शीयर, टॉर्शन, बेंडिंग)",
    "options_en": ["Compression", "Tension", "Shear", "Torsion"],
    "options_hi": ["कंप्रेशन", "टेंशन", "शीयर", "टॉर्शन"],
    "answer_en": "Compression",
    "answer_hi": "कंप्रेशन"
  },
  {
    "num": 6,
    "question_en": "What was the third word in the list you memorized? (List: Cement, Sand, Aggregate, Water, Admixture)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: सीमेंट, रेत, एग्रीगेट, पानी, एडमिक्सचर)",
    "options_en": ["Sand", "Aggregate", "Cement", "Water"],
    "options_hi": ["रेत", "एग्रीगेट", "सीमेंट", "पानी"],
    "answer_en": "Aggregate",
    "answer_hi": "एग्रीगेट"
  },
  {
    "num": 7,
    "question_en": "What was the fifth word in the list you memorized? (List: Lathe, Milling, Drilling, Grinding, Welding)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: लेथ, मिलिंग, ड्रिलिंग, ग्राइंडिंग, वेल्डिंग)",
    "options_en": ["Grinding", "Welding", "Drilling", "Milling"],
    "options_hi": ["ग्राइंडिंग", "वेल्डिंग", "ड्रिलिंग", "मिलिंग"],
    "answer_en": "Welding",
    "answer_hi": "वेल्डिंग"
  },
  {
    "num": 8,
    "question_en": "What was the second word in the list you memorized? (List: Diesel, Petrol, CNG, LPG, Hydrogen)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: डीजल, पेट्रोल, सीएनजी, एलपीजी, हाइड्रोजन)",
    "options_en": ["Petrol", "Diesel", "CNG", "LPG"],
    "options_hi": ["पेट्रोल", "डीजल", "सीएनजी", "एलपीजी"],
    "answer_en": "Petrol",
    "answer_hi": "पेट्रोल"
  },
  {
    "num": 9,
    "question_en": "What was the fourth word in the list you memorized? (List: Copper, Aluminum, Steel, Brass, Bronze)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: कॉपर, एल्यूमीनियम, स्टील, पीतल, कांस्य)",
    "options_en": ["Steel", "Brass", "Aluminum", "Bronze"],
    "options_hi": ["स्टील", "पीतल", "एल्यूमीनियम", "कांस्य"],
    "answer_en": "Brass",
    "answer_hi": "पीतल"
  },
  {
    "num": 10,
    "question_en": "What was the first word in the list you memorized? (List: Newton, Pascal, Joule, Watt, Kelvin)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: न्यूटन, पास्कल, जूल, वाट, केल्विन)",
    "options_en": ["Newton", "Pascal", "Joule", "Watt"],
    "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन"
  },
  {
    "num": 11,
    "question_en": "What was the third word in the list you memorized? (List: Boiler, Turbine, Condenser, Pump, Cooling Tower)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: बॉयलर, टरबाइन, कंडेंसर, पंप, कूलिंग टावर)",
    "options_en": ["Turbine", "Condenser", "Boiler", "Pump"],
    "options_hi": ["टरबाइन", "कंडेंसर", "बॉयलर", "पंप"],
    "answer_en": "Condenser",
    "answer_hi": "कंडेंसर"
  },
  {
    "num": 12,
    "question_en": "What was the fifth word in the list you memorized? (List: AC, DC, Transformer, Rectifier, Inverter)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: एसी, डीसी, ट्रांसफार्मर, रेक्टिफायर, इन्वर्टर)",
    "options_en": ["Rectifier", "Inverter", "DC", "Transformer"],
    "options_hi": ["रेक्टिफायर", "इन्वर्टर", "डीसी", "ट्रांसफार्मर"],
    "answer_en": "Inverter",
    "answer_hi": "इन्वर्टर"
  },
  {
    "num": 13,
    "question_en": "What was the second word in the list you memorized? (List: Iron, Carbon, Nickel, Chromium, Manganese)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: आयरन, कार्बन, निकल, क्रोमियम, मैंगनीज)",
    "options_en": ["Carbon", "Iron", "Nickel", "Chromium"],
    "options_hi": ["कार्बन", "आयरन", "निकल", "क्रोमियम"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन"
  },
  {
    "num": 14,
    "question_en": "What was the fourth word in the list you memorized? (List: Voltage, Current, Resistance, Power, Energy)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: वोल्टेज, करंट, रेसिस्टेंस, पावर, एनर्जी)",
    "options_en": ["Resistance", "Power", "Current", "Energy"],
    "options_hi": ["रेसिस्टेंस", "पावर", "करंट", "एनर्जी"],
    "answer_en": "Power",
    "answer_hi": "पावर"
  },
  {
    "num": 15,
    "question_en": "What was the first word in the list you memorized? (List: Force, Stress, Strain, Elasticity, Plasticity)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: फोर्स, स्ट्रेस, स्ट्रेन, इलास्टिसिटी, प्लास्टिसिटी)",
    "options_en": ["Force", "Stress", "Strain", "Elasticity"],
    "options_hi": ["फोर्स", "स्ट्रेस", "स्ट्रेन", "इलास्टिसिटी"],
    "answer_en": "Force",
    "answer_hi": "फोर्स"
  },
  {
    "num": 16,
    "question_en": "What was the third word in the list you memorized? (List: RCC, PSC, Steel, Wood, Brick)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: आरसीसी, पीएससी, स्टील, लकड़ी, ईंट)",
    "options_en": ["PSC", "Steel", "RCC", "Wood"],
    "options_hi": ["पीएससी", "स्टील", "आरसीसी", "लकड़ी"],
    "answer_en": "Steel",
    "answer_hi": "स्टील"
  },
  {
    "num": 17,
    "question_en": "What was the fifth word in the list you memorized? (List: Screwdriver, Wrench, Hammer, Pliers, Spanner)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: स्क्रूड्राइवर, रेंच, हथौड़ा, प्लायर, स्पैनर)",
    "options_en": ["Pliers", "Spanner", "Hammer", "Wrench"],
    "options_hi": ["प्लायर", "स्पैनर", "हथौड़ा", "रेंच"],
    "answer_en": "Spanner",
    "answer_hi": "स्पैनर"
  },
  {
    "num": 18,
    "question_en": "What was the second word in the list you memorized? (List: Hydraulics, Pneumatics, Mechanics, Thermodynamics, Kinematics)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: हाइड्रोलिक्स, न्यूमेटिक्स, मैकेनिक्स, थर्मोडायनामिक्स, काइनेमेटिक्स)",
    "options_en": ["Pneumatics", "Hydraulics", "Mechanics", "Thermodynamics"],
    "options_hi": ["न्यूमेटिक्स", "हाइड्रोलिक्स", "मैकेनिक्स", "थर्मोडायनामिक्स"],
    "answer_en": "Pneumatics",
    "answer_hi": "न्यूमेटिक्स"
  },
  {
    "num": 19,
    "question_en": "What was the fourth word in the list you memorized? (List: Calorific, Viscosity, Density, Conductivity, Specific Heat)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: कैलोरिफिक, विस्कोसिटी, डेंसिटी, कंडक्टिविटी, स्पेसिफिक हीट)",
    "options_en": ["Density", "Conductivity", "Viscosity", "Specific Heat"],
    "options_hi": ["डेंसिटी", "कंडक्टिविटी", "विस्कोसिटी", "स्पेसिफिक हीट"],
    "answer_en": "Conductivity",
    "answer_hi": "कंडक्टिविटी"
  },
  {
    "num": 20,
    "question_en": "What was the first word in the list you memorized? (List: Friction, Lubrication, Wear, Fatigue, Corrosion)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: फ्रिक्शन, लुब्रिकेशन, वियर, फैटीग्यू, कॉरोजन)",
    "options_en": ["Friction", "Lubrication", "Wear", "Fatigue"],
    "options_hi": ["फ्रिक्शन", "लुब्रिकेशन", "वियर", "फैटीग्यू"],
    "answer_en": "Friction",
    "answer_hi": "फ्रिक्शन"
  },
  {
    "num": 21,
    "question_en": "What was the third word in the list you memorized? (List: Generator, Motor, Alternator, Dynamo, Converter)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: जनरेटर, मोटर, अल्टरनेटर, डायनेमो, कन्वर्टर)",
    "options_en": ["Motor", "Alternator", "Generator", "Dynamo"],
    "options_hi": ["मोटर", "अल्टरनेटर", "जनरेटर", "डायनेमो"],
    "answer_en": "Alternator",
    "answer_hi": "अल्टरनेटर"
  },
  {
    "num": 22,
    "question_en": "What was the fifth word in the list you memorized? (List: Hardness, Toughness, Brittleness, Malleability, Ductility)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: हार्डनेस, टफनेस, ब्रिटलनेस, मैलिएबिलिटी, डक्टिलिटी)",
    "options_en": ["Malleability", "Ductility", "Brittleness", "Toughness"],
    "options_hi": ["मैलिएबिलिटी", "डक्टिलिटी", "ब्रिटलनेस", "टफनेस"],
    "answer_en": "Ductility",
    "answer_hi": "डक्टिलिटी"
  },
  {
    "num": 23,
    "question_en": "What was the second word in the list you memorized? (List: Bearing, Bush, Seal, Gasket, O-ring)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: बेयरिंग, बुश, सील, गैस्केट, ओ-रिंग)",
    "options_en": ["Bush", "Bearing", "Seal", "Gasket"],
    "options_hi": ["बुश", "बेयरिंग", "सील", "गैस्केट"],
    "answer_en": "Bush",
    "answer_hi": "बुश"
  },
  {
    "num": 24,
    "question_en": "What was the fourth word in the list you memorized? (List: Micrometer, Vernier, Feeler, Dial, Caliper)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: माइक्रोमीटर, वर्नियर, फीलर, डायल, कैलिपर)",
    "options_en": ["Feeler", "Dial", "Vernier", "Caliper"],
    "options_hi": ["फीलर", "डायल", "वर्नियर", "कैलिपर"],
    "answer_en": "Dial",
    "answer_hi": "डायल"
  },
  {
    "num": 25,
    "question_en": "What was the first word in the list you memorized? (List: Compression, Ignition, Spark, Combustion, Exhaust)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: कंप्रेशन, इग्निशन, स्पार्क, कम्बस्चन, एक्जॉस्ट)",
    "options_en": ["Compression", "Ignition", "Spark", "Combustion"],
    "options_hi": ["कंप्रेशन", "इग्निशन", "स्पार्क", "कम्बस्चन"],
    "answer_en": "Compression",
    "answer_hi": "कंप्रेशन"
  },
  {
    "num": 26,
    "question_en": "What was the third word in the list you memorized? (List: Nail, Screw, Bolt, Nut, Washer)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: नेल, स्क्रू, बोल्ट, नट, वाशर)",
    "options_en": ["Screw", "Bolt", "Nail", "Nut"],
    "options_hi": ["स्क्रू", "बोल्ट", "नेल", "नट"],
    "answer_en": "Bolt",
    "answer_hi": "बोल्ट"
  },
  {
    "num": 27,
    "question_en": "What was the fifth word in the list you memorized? (List: Conduction, Convection, Radiation, Insulation, Reflection)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: कंडक्शन, कन्वेक्शन, रेडिएशन, इंसुलेशन, रिफ्लेक्शन)",
    "options_en": ["Radiation", "Insulation", "Convection", "Reflection"],
    "options_hi": ["रेडिएशन", "इंसुलेशन", "कन्वेक्शन", "रिफ्लेक्शन"],
    "answer_en": "Insulation",
    "answer_hi": "इंसुलेशन"
  },
  {
    "num": 28,
    "question_en": "What was the second word in the list you memorized? (List: Annealing, Tempering, Hardening, Normalizing, Quenching)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: एनीलिंग, टेम्परिंग, हार्डनिंग, नॉर्मलाइजिंग, क्वेंचिंग)",
    "options_en": ["Tempering", "Annealing", "Hardening", "Normalizing"],
    "options_hi": ["टेम्परिंग", "एनीलिंग", "हार्डनिंग", "नॉर्मलाइजिंग"],
    "answer_en": "Tempering",
    "answer_hi": "टेम्परिंग"
  },
  {
    "num": 29,
    "question_en": "What was the fourth word in the list you memorized? (List: Force, Torque, Power, Energy, Momentum)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: फोर्स, टॉर्क, पावर, एनर्जी, मोमेंटम)",
    "options_en": ["Power", "Energy", "Torque", "Momentum"],
    "options_hi": ["पावर", "एनर्जी", "टॉर्क", "मोमेंटम"],
    "answer_en": "Energy",
    "answer_hi": "एनर्जी"
  },
  {
    "num": 30,
    "question_en": "What was the first word in the list you memorized? (List: Velocity, Acceleration, Speed, Displacement, Distance)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: वेलोसिटी, एक्सीलरेशन, स्पीड, डिस्प्लेसमेंट, डिस्टेंस)",
    "options_en": ["Velocity", "Acceleration", "Speed", "Displacement"],
    "options_hi": ["वेलोसिटी", "एक्सीलरेशन", "स्पीड", "डिस्प्लेसमेंट"],
    "answer_en": "Velocity",
    "answer_hi": "वेलोसिटी"
  },
  {
    "num": 31,
    "question_en": "What was the third word in the list you memorized? (List: Shear, Moment, Torsion, Bending, Axial)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: शीयर, मोमेंट, टॉर्शन, बेंडिंग, एक्सियल)",
    "options_en": ["Moment", "Torsion", "Shear", "Bending"],
    "options_hi": ["मोमेंट", "टॉर्शन", "शीयर", "बेंडिंग"],
    "answer_en": "Torsion",
    "answer_hi": "टॉर्शन"
  },
  {
    "num": 32,
    "question_en": "What was the fifth word in the list you memorized? (List: Casting, Forging, Machining, Welding, Molding)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: कास्टिंग, फोर्जिंग, मशीनिंग, वेल्डिंग, मोल्डिंग)",
    "options_en": ["Welding", "Molding", "Machining", "Forging"],
    "options_hi": ["वेल्डिंग", "मोल्डिंग", "मशीनिंग", "फोर्जिंग"],
    "answer_en": "Molding",
    "answer_hi": "मोल्डिंग"
  },
  {
    "num": 33,
    "question_en": "What was the second word in the list you memorized? (List: Efficiency, COP, Input, Output, Loss)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: एफिशिएंसी, सीओपी, इनपुट, आउटपुट, लॉस)",
    "options_en": ["COP", "Efficiency", "Input", "Output"],
    "options_hi": ["सीओपी", "एफिशिएंसी", "इनपुट", "आउटपुट"],
    "answer_en": "COP",
    "answer_hi": "सीओपी"
  },
  {
    "num": 34,
    "question_en": "What was the fourth word in the list you memorized? (List: Aluminum, Copper, Brass, Bronze, Zinc)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: एल्यूमीनियम, कॉपर, पीतल, कांस्य, जिंक)",
    "options_en": ["Brass", "Bronze", "Copper", "Zinc"],
    "options_hi": ["पीतल", "कांस्य", "कॉपर", "जिंक"],
    "answer_en": "Bronze",
    "answer_hi": "कांस्य"
  },
  {
    "num": 35,
    "question_en": "What was the first word in the list you memorized? (List: Pressure, Temperature, Volume, Density, Humidity)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: प्रेशर, टेम्परेचर, वॉल्यूम, डेंसिटी, ह्यूमिडिटी)",
    "options_en": ["Pressure", "Temperature", "Volume", "Density"],
    "options_hi": ["प्रेशर", "टेम्परेचर", "वॉल्यूम", "डेंसिटी"],
    "answer_en": "Pressure",
    "answer_hi": "प्रेशर"
  },
  {
    "num": 36,
    "question_en": "What was the third word in the list you memorized? (List: Transformer, Reactor, Capacitor, Inductor, Resistor)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: ट्रांसफार्मर, रिएक्टर, कैपेसिटर, इंडक्टर, रेसिस्टर)",
    "options_en": ["Reactor", "Capacitor", "Transformer", "Inductor"],
    "options_hi": ["रिएक्टर", "कैपेसिटर", "ट्रांसफार्मर", "इंडक्टर"],
    "answer_en": "Capacitor",
    "answer_hi": "कैपेसिटर"
  },
  {
    "num": 37,
    "question_en": "What was the fifth word in the list you memorized? (List: Spanner, Wrench, Pliers, Screwdriver, Hammer)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: स्पैनर, रेंच, प्लायर, स्क्रूड्राइवर, हथौड़ा)",
    "options_en": ["Screwdriver", "Hammer", "Pliers", "Wrench"],
    "options_hi": ["स्क्रूड्राइवर", "हथौड़ा", "प्लायर", "रेंच"],
    "answer_en": "Hammer",
    "answer_hi": "हथौड़ा"
  },
  {
    "num": 38,
    "question_en": "What was the second word in the list you memorized? (List: Yield, Ultimate, Breaking, Elastic, Plastic)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: यील्ड, अल्टीमेट, ब्रेकिंग, इलास्टिक, प्लास्टिक)",
    "options_en": ["Ultimate", "Yield", "Breaking", "Elastic"],
    "options_hi": ["अल्टीमेट", "यील्ड", "ब्रेकिंग", "इलास्टिक"],
    "answer_en": "Ultimate",
    "answer_hi": "अल्टीमेट"
  },
  {
    "num": 39,
    "question_en": "What was the fourth word in the list you memorized? (List: Bolt, Nut, Washer, Rivet, Screw)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: बोल्ट, नट, वाशर, रिवेट, स्क्रू)",
    "options_en": ["Washer", "Rivet", "Nut", "Screw"],
    "options_hi": ["वाशर", "रिवेट", "नट", "स्क्रू"],
    "answer_en": "Rivet",
    "answer_hi": "रिवेट"
  },
  {
    "num": 40,
    "question_en": "What was the first word in the list you memorized? (List: Heat, Work, Energy, Power, Entropy)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: हीट, वर्क, एनर्जी, पावर, एंट्रॉपी)",
    "options_en": ["Heat", "Work", "Energy", "Power"],
    "options_hi": ["हीट", "वर्क", "एनर्जी", "पावर"],
    "answer_en": "Heat",
    "answer_hi": "हीट"
  },
  {
    "num": 41,
    "question_en": "What was the third word in the list you memorized? (List: Bearing, Bush, Seal, Gasket, O-ring)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: बेयरिंग, बुश, सील, गैस्केट, ओ-रिंग)",
    "options_en": ["Bush", "Seal", "Bearing", "Gasket"],
    "options_hi": ["बुश", "सील", "बेयरिंग", "गैस्केट"],
    "answer_en": "Seal",
    "answer_hi": "सील"
  },
  {
    "num": 42,
    "question_en": "What was the fifth word in the list you memorized? (List: Calorific, Viscosity, Density, Conductivity, Specific Heat)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: कैलोरिफिक, विस्कोसिटी, डेंसिटी, कंडक्टिविटी, स्पेसिफिक हीट)",
    "options_en": ["Conductivity", "Specific Heat", "Density", "Viscosity"],
    "options_hi": ["कंडक्टिविटी", "स्पेसिफिक हीट", "डेंसिटी", "विस्कोसिटी"],
    "answer_en": "Specific Heat",
    "answer_hi": "स्पेसिफिक हीट"
  },
  {
    "num": 43,
    "question_en": "What was the second word in the list you memorized? (List: Velocity, Acceleration, Speed, Displacement, Distance)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: वेलोसिटी, एक्सीलरेशन, स्पीड, डिस्प्लेसमेंट, डिस्टेंस)",
    "options_en": ["Acceleration", "Velocity", "Speed", "Displacement"],
    "options_hi": ["एक्सीलरेशन", "वेलोसिटी", "स्पीड", "डिस्प्लेसमेंट"],
    "answer_en": "Acceleration",
    "answer_hi": "एक्सीलरेशन"
  },
  {
    "num": 44,
    "question_en": "What was the fourth word in the list you memorized? (List: AC, DC, Transformer, Rectifier, Inverter)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: एसी, डीसी, ट्रांसफार्मर, रेक्टिफायर, इन्वर्टर)",
    "options_en": ["Transformer", "Rectifier", "DC", "Inverter"],
    "options_hi": ["ट्रांसफार्मर", "रेक्टिफायर", "डीसी", "इन्वर्टर"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर"
  },
  {
    "num": 45,
    "question_en": "What was the first word in the list you memorized? (List: Diesel, Petrol, CNG, LPG, Hydrogen)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: डीजल, पेट्रोल, सीएनजी, एलपीजी, हाइड्रोजन)",
    "options_en": ["Diesel", "Petrol", "CNG", "LPG"],
    "options_hi": ["डीजल", "पेट्रोल", "सीएनजी", "एलपीजी"],
    "answer_en": "Diesel",
    "answer_hi": "डीजल"
  },
  {
    "num": 46,
    "question_en": "What was the third word in the list you memorized? (List: Iron, Carbon, Nickel, Chromium, Manganese)",
    "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: आयरन, कार्बन, निकल, क्रोमियम, मैंगनीज)",
    "options_en": ["Carbon", "Nickel", "Iron", "Chromium"],
    "options_hi": ["कार्बन", "निकल", "आयरन", "क्रोमियम"],
    "answer_en": "Nickel",
    "answer_hi": "निकल"
  },
  {
    "num": 47,
    "question_en": "What was the fifth word in the list you memorized? (List: Voltage, Current, Resistance, Power, Energy)",
    "question_hi": "आपके द्वारा याद की गई सूची में पाँचवाँ शब्द क्या था? (सूची: वोल्टेज, करंट, रेसिस्टेंस, पावर, एनर्जी)",
    "options_en": ["Power", "Energy", "Resistance", "Current"],
    "options_hi": ["पावर", "एनर्जी", "रेसिस्टेंस", "करंट"],
    "answer_en": "Energy",
    "answer_hi": "एनर्जी"
  },
  {
    "num": 48,
    "question_en": "What was the second word in the list you memorized? (List: Compression, Tension, Shear, Torsion, Bending)",
    "question_hi": "आपके द्वारा याद की गई सूची में दूसरा शब्द क्या था? (सूची: कंप्रेशन, टेंशन, शीयर, टॉर्शन, बेंडिंग)",
    "options_en": ["Tension", "Compression", "Shear", "Torsion"],
    "options_hi": ["टेंशन", "कंप्रेशन", "शीयर", "टॉर्शन"],
    "answer_en": "Tension",
    "answer_hi": "टेंशन"
  },
  {
    "num": 49,
    "question_en": "What was the fourth word in the list you memorized? (List: Cement, Sand, Aggregate, Water, Admixture)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: सीमेंट, रेत, एग्रीगेट, पानी, एडमिक्सचर)",
    "options_en": ["Aggregate", "Water", "Sand", "Admixture"],
    "options_hi": ["एग्रीगेट", "पानी", "रेत", "एडमिक्सचर"],
    "answer_en": "Water",
    "answer_hi": "पानी"
  },
  {
    "num": 50,
    "question_en": "What was the first word in the list you memorized? (List: Beam, Column, Slab, Footing, Foundation)",
    "question_hi": "आपके द्वारा याद की गई सूची में पहला शब्द क्या था? (सूची: बीम, कॉलम, स्लैब, फुटिंग, फाउंडेशन)",
    "options_en": ["Beam", "Column", "Slab", "Footing"],
    "options_hi": ["बीम", "कॉलम", "स्लैब", "फुटिंग"],
    "answer_en": "Beam",
    "answer_hi": "बीम"
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