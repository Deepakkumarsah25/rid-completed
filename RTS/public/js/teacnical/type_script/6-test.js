const questions = [
    {
        "num": 1,
        "question_en": "A body is projected with velocity 20 m/s at 60° to horizontal. Its horizontal range is:",
        "question_hi": "एक पिंड को क्षैतिज से 60° पर 20 m/s के वेग से प्रक्षेपित किया जाता है। इसका क्षैतिज परास है:",
        "options_en": ["20√3 m", "30 m", "35.3 m", "40 m"],
        "options_hi": ["20√3 m", "30 m", "35.3 m", "40 m"],
        "answer_en": "35.3 m",
        "answer_hi": "35.3 m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The SI unit of impulse is:",
        "question_hi": "आवेग की SI इकाई है:",
        "options_en": ["Ns", "Js", "N/m", "J/s"],
        "options_hi": ["Ns", "Js", "N/m", "J/s"],
        "answer_en": "Ns",
        "answer_hi": "Ns",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A concave lens of focal length 20 cm forms an image at 10 cm. The object distance is:",
        "question_hi": "20 cm फोकस दूरी वाला एक अवतल लेंस 10 cm पर प्रतिबिंब बनाता है। वस्तु दूरी है:",
        "options_en": ["10 cm", "15 cm", "20 cm", "30 cm"],
        "options_hi": ["10 cm", "15 cm", "20 cm", "30 cm"],
        "answer_en": "20 cm",
        "answer_hi": "20 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The dimensional formula of power is:",
        "question_hi": "शक्ति का विमीय सूत्र है:",
        "options_en": ["[ML²T⁻³]", "[MLT⁻²]", "[ML⁻¹T⁻²]", "[MLT⁻¹]"],
        "options_hi": ["[ML²T⁻³]", "[MLT⁻²]", "[ML⁻¹T⁻²]", "[MLT⁻¹]"],
        "answer_en": "[ML²T⁻³]",
        "answer_hi": "[ML²T⁻³]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A body of mass 10 kg is lifted to height 5 m. Work done against gravity is:",
        "question_hi": "10 kg द्रव्यमान के एक पिंड को 5 m की ऊँचाई तक उठाया जाता है। गुरुत्व के विरुद्ध किया गया कार्य है:",
        "options_en": ["50 J", "100 J", "250 J", "500 J"],
        "options_hi": ["50 J", "100 J", "250 J", "500 J"],
        "answer_en": "500 J",
        "answer_hi": "500 J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The SI unit of magnetic flux density is:",
        "question_hi": "चुंबकीय फ्लक्स घनत्व की SI इकाई है:",
        "options_en": ["Weber", "Tesla", "Henry", "Gauss"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "A car moving with 15 m/s decelerates at 3 m/s². Time to stop is:",
        "question_hi": "15 m/s से चलती हुई एक कार 3 m/s² से मंदित होती है। रुकने का समय है:",
        "options_en": ["3 s", "4 s", "5 s", "6 s"],
        "options_hi": ["3 s", "4 s", "5 s", "6 s"],
        "answer_en": "5 s",
        "answer_hi": "5 s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The angle of minimum deviation for a prism depends on:",
        "question_hi": "प्रिज्म के लिए न्यूनतम विचलन का कोण निर्भर करता है:",
        "options_en": ["Angle of prism only", "Refractive index only", "Both angle and refractive index", "Wavelength only"],
        "options_hi": ["केवल प्रिज्म कोण", "केवल अपवर्तनांक", "कोण और अपवर्तनांक दोनों", "केवल तरंगदैर्ध्य"],
        "answer_en": "Both angle and refractive index",
        "answer_hi": "कोण और अपवर्तनांक दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Two capacitors 4μF and 6μF are connected in parallel. Equivalent capacitance is:",
        "question_hi": "दो संधारित्र 4μF और 6μF समानांतर में जुड़े हैं। तुल्य धारिता है:",
        "options_en": ["2.4 μF", "5 μF", "10 μF", "24 μF"],
        "options_hi": ["2.4 μF", "5 μF", "10 μF", "24 μF"],
        "answer_en": "10 μF",
        "answer_hi": "10 μF",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The efficiency of Carnot engine depends on:",
        "question_hi": "कार्नोट इंजन की दक्षता निर्भर करती है:",
        "options_en": ["Working substance only", "Source temperature only", "Both source and sink temperatures", "Engine size"],
        "options_hi": ["केवल कार्यशील पदार्थ", "केवल स्रोत तापमान", "स्रोत और सिंक तापमान दोनों", "इंजन का आकार"],
        "answer_en": "Both source and sink temperatures",
        "answer_hi": "स्रोत और सिंक तापमान दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Unit of luminous intensity is:",
        "question_hi": "ज्योति तीव्रता की इकाई है:",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "ल्यूमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "A force of 10 N acts on a body of mass 2 kg. Acceleration produced is:",
        "question_hi": "10 N का बल 2 kg द्रव्यमान के पिंड पर कार्य करता है। उत्पन्न त्वरण है:",
        "options_en": ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        "options_hi": ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        "answer_en": "5 m/s²",
        "answer_hi": "5 m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The force between two parallel current carrying conductors is:",
        "question_hi": "दो समानांतर धारावाही चालकों के बीच बल है:",
        "options_en": ["Always attractive", "Always repulsive", "Attractive for same direction currents", "Repulsive for same direction currents"],
        "options_hi": ["हमेशा आकर्षक", "हमेशा प्रतिकर्षी", "समान दिशा धाराओं के लिए आकर्षक", "समान दिशा धाराओं के लिए प्रतिकर्षी"],
        "answer_en": "Attractive for same direction currents",
        "answer_hi": "समान दिशा धाराओं के लिए आकर्षक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "In total internal reflection, the angle of incidence is:",
        "question_hi": "पूर्ण आंतरिक परावर्तन में, आपतन कोण है:",
        "options_en": ["Less than critical angle", "Equal to critical angle", "Greater than critical angle", "90°"],
        "options_hi": ["क्रांतिक कोण से कम", "क्रांतिक कोण के बराबर", "क्रांतिक कोण से अधिक", "90°"],
        "answer_en": "Greater than critical angle",
        "answer_hi": "क्रांतिक कोण से अधिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The time period of a geostationary satellite is:",
        "question_hi": "भू-स्थिर उपग्रह का आवर्तकाल है:",
        "options_en": ["6 hours", "12 hours", "24 hours", "48 hours"],
        "options_hi": ["6 घंटे", "12 घंटे", "24 घंटे", "48 घंटे"],
        "answer_en": "24 hours",
        "answer_hi": "24 घंटे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "A wire of resistance R is cut into two equal parts. Resistance of each part is:",
        "question_hi": "R प्रतिरोध के एक तार को दो बराबर भागों में काटा जाता है। प्रत्येक भाग का प्रतिरोध है:",
        "options_en": ["R/2", "R/4", "2R", "4R"],
        "options_hi": ["R/2", "R/4", "2R", "4R"],
        "answer_en": "R/2",
        "answer_hi": "R/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which is diamagnetic?",
        "question_hi": "कौन डायामैग्नेटिक है?",
        "options_en": ["Aluminum", "Copper", "Iron", "Nickel"],
        "options_hi": ["एल्युमिनियम", "तांबा", "लोहा", "निकल"],
        "answer_en": "Copper",
        "answer_hi": "तांबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "A 60W bulb operates at 220V. Current drawn is:",
        "question_hi": "एक 60W का बल्ब 220V पर चलता है। खींची गई धारा है:",
        "options_en": ["0.27 A", "0.36 A", "2.7 A", "3.6 A"],
        "options_hi": ["0.27 A", "0.36 A", "2.7 A", "3.6 A"],
        "answer_en": "0.27 A",
        "answer_hi": "0.27 A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "In diffraction pattern, the central maximum is:",
        "question_hi": "विवर्तन पैटर्न में, केंद्रीय उच्चिष्ठ है:",
        "options_en": ["Brightest", "Dark", "Colored", "Split"],
        "options_hi": ["सबसे चमकीला", "अंधेरा", "रंगीन", "विभाजित"],
        "answer_en": "Brightest",
        "answer_hi": "सबसे चमकीला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The frequency of a simple pendulum depends on:",
        "question_hi": "सरल लोलक की आवृत्ति निर्भर करती है:",
        "options_en": ["Mass only", "Length only", "Both mass and length", "Amplitude only"],
        "options_hi": ["केवल द्रव्यमान", "केवल लंबाई", "द्रव्यमान और लंबाई दोनों", "केवल आयाम"],
        "answer_en": "Length only",
        "answer_hi": "केवल लंबाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The maximum number of electrons in a shell with principal quantum number n is:",
        "question_hi": "मुख्य क्वांटम संख्या n वाले कोश में इलेक्ट्रॉनों की अधिकतम संख्या है:",
        "options_en": ["2n", "2n²", "n²", "8n"],
        "options_hi": ["2n", "2n²", "n²", "8n"],
        "answer_en": "2n²",
        "answer_hi": "2n²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The magnetic moment of a current loop is:",
        "question_hi": "धारा लूप का चुंबकीय आघूर्ण है:",
        "options_en": ["NI²A", "NIA", "NI/A", "N²IA"],
        "options_hi": ["NI²A", "NIA", "NI/A", "N²IA"],
        "answer_en": "NIA",
        "answer_hi": "NIA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which has pyramidal shape?",
        "question_hi": "किसकी पिरामिडीय आकृति है?",
        "options_en": ["BF₃", "NH₃", "CH₄", "CO₂"],
        "options_hi": ["BF₃", "NH₃", "CH₄", "CO₂"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The degree of differential equation (d²y/dx²)³ + dy/dx = 0 is:",
        "question_hi": "अवकल समीकरण (d²y/dx²)³ + dy/dx = 0 की घात है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "For a real image formed by concave mirror, the magnification is:",
        "question_hi": "अवतल दर्पण द्वारा बने वास्तविक प्रतिबिंब के लिए, आवर्धन है:",
        "options_en": ["Positive", "Negative", "Zero", "Infinite"],
        "options_hi": ["धनात्मक", "ऋणात्मक", "शून्य", "अनंत"],
        "answer_en": "Negative",
        "answer_hi": "ऋणात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Oxidation state of nitrogen in HNO₃ is:",
        "question_hi": "HNO₃ में नाइट्रोजन की ऑक्सीकरण अवस्था है:",
        "options_en": ["+1", "+3", "+5", "+7"],
        "options_hi": ["+1", "+3", "+5", "+7"],
        "answer_en": "+5",
        "answer_hi": "+5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which shows maximum hydrogen bonding?",
        "question_hi": "कौन अधिकतम हाइड्रोजन आबंध दर्शाता है?",
        "options_en": ["H₂O", "NH₃", "HF", "H₂S"],
        "options_hi": ["H₂O", "NH₃", "HF", "H₂S"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "IUPAC name of CH₃-CH=CH₂ is:",
        "question_hi": "CH₃-CH=CH₂ का IUPAC नाम है:",
        "options_en": ["Propene", "Propane", "Butene", "Ethene"],
        "options_hi": ["प्रोपीन", "प्रोपेन", "ब्यूटीन", "ईथीन"],
        "answer_en": "Propene",
        "answer_hi": "प्रोपीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Number of π bonds in CO₂ is:",
        "question_hi": "CO₂ में π बंधों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which is used in nuclear reactors?",
        "question_hi": "कौन नाभिकीय रिएक्टरों में प्रयुक्त होता है?",
        "options_en": ["U-235", "U-238", "Pb-206", "C-14"],
        "options_hi": ["U-235", "U-238", "Pb-206", "C-14"],
        "answer_en": "U-235",
        "answer_hi": "U-235",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "pH of 0.01M NaOH is:",
        "question_hi": "0.01M NaOH का pH है:",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Element with electronic configuration 2,8,7 is:",
        "question_hi": "इलेक्ट्रॉनिक विन्यास 2,8,7 वाला तत्व है:",
        "options_en": ["Fluorine", "Chlorine", "Bromine", "Iodine"],
        "options_hi": ["फ्लोरीन", "क्लोरीन", "ब्रोमीन", "आयोडीन"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Hybridization in PCl₅ is:",
        "question_hi": "PCl₅ में संकरण है:",
        "options_en": ["sp³", "sp³d", "sp³d²", "dsp²"],
        "options_hi": ["sp³", "sp³d", "sp³d²", "dsp²"],
        "answer_en": "sp³d",
        "answer_hi": "sp³d",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which is strongest oxidizing agent?",
        "question_hi": "कौन सबसे प्रबल ऑक्सीकारक है?",
        "options_en": ["F₂", "Cl₂", "Br₂", "I₂"],
        "options_hi": ["F₂", "Cl₂", "Br₂", "I₂"],
        "answer_en": "F₂",
        "answer_hi": "F₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Molecular formula of acetic acid is:",
        "question_hi": "एसिटिक अम्ल का आणविक सूत्र है:",
        "options_en": ["CH₃COOH", "HCOOH", "C₂H₅OH", "C₆H₁₂O₆"],
        "options_hi": ["CH₃COOH", "HCOOH", "C₂H₅OH", "C₆H₁₂O₆"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Racemic mixture is:",
        "question_hi": "रेसीमिक मिश्रण है:",
        "options_en": ["Optically active", "Optically inactive", "Only dextrorotatory", "Only levorotatory"],
        "options_hi": ["प्रकाशिक सक्रिय", "प्रकाशिक निष्क्रिय", "केवल दक्षिणावर्त", "केवल वामावर्त"],
        "answer_en": "Optically inactive",
        "answer_hi": "प्रकाशिक निष्क्रिय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Bond angle in CH₄ is:",
        "question_hi": "CH₄ में बंध कोण है:",
        "options_en": ["90°", "104.5°", "109.5°", "120°"],
        "options_hi": ["90°", "104.5°", "109.5°", "120°"],
        "answer_en": "109.5°",
        "answer_hi": "109.5°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Benedict's test is used for:",
        "question_hi": "बेनेडिक्ट परीक्षण उपयोग किया जाता है:",
        "options_en": ["Reducing sugars", "Proteins", "Fats", "Starch"],
        "options_hi": ["अपचायक शर्करा", "प्रोटीन", "वसा", "स्टार्च"],
        "answer_en": "Reducing sugars",
        "answer_hi": "अपचायक शर्करा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Coordination number in CsCl crystal is:",
        "question_hi": "CsCl क्रिस्टल में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Most stable alkene is:",
        "question_hi": "सबसे स्थिर ऐल्कीन है:",
        "options_en": ["Ethene", "Propene", "2-Butene", "1-Butene"],
        "options_hi": ["ईथीन", "प्रोपीन", "2-ब्यूटीन", "1-ब्यूटीन"],
        "answer_en": "2-Butene",
        "answer_hi": "2-ब्यूटीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Frenkel defect is common in:",
        "question_hi": "फ्रेंकेल दोष सामान्य है:",
        "options_en": ["Alkali halides", "Silver halides", "Alkaline earth halides", "All"],
        "options_hi": ["क्षार हैलाइड", "सिल्वर हैलाइड", "क्षारीय मृदा हैलाइड", "सभी"],
        "answer_en": "Silver halides",
        "answer_hi": "सिल्वर हैलाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Number of position isomers for C₄H₉OH is:",
        "question_hi": "C₄H₉OH के लिए स्थिति समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
         "num": 43,
         "question_en": "The hybridization of carbon in ethyne (C₂H₂) is:",
         "question_hi": "एथाइन (C₂H₂) में कार्बन का संकरण है:",
         "options_en": ["sp", "sp²", "sp³", "sp³d"],
         "options_hi": ["sp", "sp²", "sp³", "sp³d"],
         "answer_en": "sp",
         "answer_hi": "sp",
         "attempted": false,
         "selected": ""
 },
    {
        "num": 44,
        "question_en": "Strongest acid among HCl, HBr, HI, HF is:",
        "question_hi": "HCl, HBr, HI, HF में सबसे प्रबल अम्ल है:",
        "options_en": ["HCl", "HBr", "HI", "HF"],
        "options_hi": ["HCl", "HBr", "HI", "HF"],
        "answer_en": "HI",
        "answer_hi": "HI",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Number of σ bonds in C₂H₂ is:",
        "question_hi": "C₂H₂ में σ बंधों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "IUPAC name of CH₃-CH₂-NH₂ is:",
        "question_hi": "CH₃-CH₂-NH₂ का IUPAC नाम है:",
        "options_en": ["Methylamine", "Ethylamine", "Propylamine", "Butylamine"],
        "options_hi": ["मेथिलऐमीन", "एथिलऐमीन", "प्रोपिलऐमीन", "ब्यूटिलऐमीन"],
        "answer_en": "Ethylamine",
        "answer_hi": "एथिलऐमीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Molality of 0.1 mole of solute in 500g solvent is:",
        "question_hi": "500g विलायक में 0.1 मोल विलेय की मोललता है:",
        "options_en": ["0.1 m", "0.2 m", "0.5 m", "1 m"],
        "options_hi": ["0.1 m", "0.2 m", "0.5 m", "1 m"],
        "answer_en": "0.2 m",
        "answer_hi": "0.2 m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Element with smallest atomic size in period 2 is:",
        "question_hi": "आवर्त 2 में सबसे छोटे परमाणु आकार वाला तत्व है:",
        "options_en": ["Li", "Be", "F", "Ne"],
        "options_hi": ["Li", "Be", "F", "Ne"],
        "answer_en": "Ne",
        "answer_hi": "Ne",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Solvay process is used for manufacture of:",
        "question_hi": "सोल्वे प्रक्रिया का उपयोग किया जाता है:",
        "options_en": ["Ammonia", "Sodium carbonate", "Sodium hydroxide", "Chlorine"],
        "options_hi": ["अमोनिया", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "क्लोरीन"],
        "answer_en": "Sodium carbonate",
        "answer_hi": "सोडियम कार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Highest melting point among Li, Na, K, Rb is of:",
        "question_hi": "Li, Na, K, Rb में सबसे अधिक गलनांक किसका है?",
        "options_en": ["Li", "Na", "K", "Rb"],
        "options_hi": ["Li", "Na", "K", "Rb"],
        "answer_en": "Li",
        "answer_hi": "Li",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "In Bohr model, velocity of electron in first orbit is proportional to:",
        "question_hi": "बोहर मॉडल में, पहली कक्षा में इलेक्ट्रॉन का वेग समानुपाती है:",
        "options_en": ["n", "1/n", "n²", "1/n²"],
        "options_hi": ["n", "1/n", "n²", "1/n²"],
        "answer_en": "1/n",
        "answer_hi": "1/n",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Bond angle in H₂O is:",
        "question_hi": "H₂O में बंध कोण है:",
        "options_en": ["90°", "104.5°", "109.5°", "120°"],
        "options_hi": ["90°", "104.5°", "109.5°", "120°"],
        "answer_en": "104.5°",
        "answer_hi": "104.5°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Diastereomers are:",
        "question_hi": "डायस्टीरियोमर्स हैं:",
        "options_en": ["Mirror images", "Non-mirror images", "Identical", "Conformers"],
        "options_hi": ["दर्पण प्रतिबिंब", "गैर-दर्पण प्रतिबिंब", "समान", "कंफॉर्मर्स"],
        "answer_en": "Non-mirror images",
        "answer_hi": "गैर-दर्पण प्रतिबिंब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Number of functional isomers for C₃H₆O is:",
        "question_hi": "C₃H₆O के लिए क्रियात्मक समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which is not a colligative property?",
        "question_hi": "कौन अणुसंख्य गुणधर्म नहीं है?",
        "options_en": ["Osmotic pressure", "Relative lowering of vapor pressure", "Elevation in boiling point", "Optical activity"],
        "options_hi": ["परासरण दाब", "वाष्प दाब में सापेक्ष अवनमन", "क्वथनांक में उन्नयन", "प्रकाशिक सक्रियता"],
        "answer_en": "Optical activity",
        "answer_hi": "प्रकाशिक सक्रियता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Number of unpaired electrons in Cr³⁺ is:",
        "question_hi": "Cr³⁺ में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Geometry of XeF₄ is:",
        "question_hi": "XeF₄ की ज्यामिति है:",
        "options_en": ["Tetrahedral", "Square planar", "Octahedral", "Trigonal bipyramidal"],
        "options_hi": ["चतुष्फलकीय", "वर्ग समतलीय", "अष्टफलकीय", "त्रिकोणीय द्विपिरैमिडी"],
        "answer_en": "Square planar",
        "answer_hi": "वर्ग समतलीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Example of synthetic rubber is:",
        "question_hi": "संश्लेषित रबर का उदाहरण है:",
        "options_en": ["Natural rubber", "Neoprene", "Cellulose", "Starch"],
        "options_hi": ["प्राकृतिक रबर", "नियोप्रीन", "सेलूलोज़", "स्टार्च"],
        "answer_en": "Neoprene",
        "answer_hi": "नियोप्रीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Equivalent weight of K₂Cr₂O₇ in acidic medium is:",
        "question_hi": "अम्लीय माध्यम में K₂Cr₂O₇ का तुल्यांकी भार है:",
        "options_en": ["M/3", "M/6", "M/2", "M"],
        "options_hi": ["M/3", "M/6", "M/2", "M"],
        "answer_en": "M/6",
        "answer_hi": "M/6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Chloramphenicol is:",
        "question_hi": "क्लोरैम्फेनिकॉल है:",
        "options_en": ["Antibiotic", "Analgesic", "Antacid", "Antimalarial"],
        "options_hi": ["एंटीबायोटिक", "पीड़ाहारी", "एंटासिड", "एंटीमलेरियल"],
        "answer_en": "Antibiotic",
        "answer_hi": "एंटीबायोटिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Number of real roots of x² - 5x + 6 = 0 is:",
        "question_hi": "x² - 5x + 6 = 0 के वास्तविक मूलों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Sum of first 10 terms of AP: 1,3,5,... is:",
        "question_hi": "समांतर श्रेणी: 1,3,5,... के पहले 10 पदों का योग है:",
        "options_en": ["50", "100", "150", "200"],
        "options_hi": ["50", "100", "150", "200"],
        "answer_en": "100",
        "answer_hi": "100",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Number of ways to arrange 3 different books is:",
        "question_hi": "3 विभिन्न पुस्तकों को व्यवस्थित करने के तरीकों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Value of ∫(cos x) dx is:",
        "question_hi": "∫(cos x) dx का मान है:",
        "options_en": ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
        "options_hi": ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
        "answer_en": "sin x + C",
        "answer_hi": "sin x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "If P(A) = 0.6, P(B) = 0.5 and P(A∪B) = 0.8, then P(A|B) is:",
        "question_hi": "यदि P(A) = 0.6, P(B) = 0.5 और P(A∪B) = 0.8, तो P(A|B) है:",
        "options_en": ["0.3", "0.4", "0.5", "0.6"],
        "options_hi": ["0.3", "0.4", "0.5", "0.6"],
        "answer_en": "0.6",
        "answer_hi": "0.6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Derivative of √x is:",
        "question_hi": "√x का अवकलज है:",
        "options_en": ["1/2√x", "1/√x", "2√x", "√x/2"],
        "options_hi": ["1/2√x", "1/√x", "2√x", "√x/2"],
        "answer_en": "1/2√x",
        "answer_hi": "1/2√x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Equation of parabola with focus (2,0) and directrix x=-2 is:",
        "question_hi": "फोकस (2,0) और नियता x=-2 वाले परवलय का समीकरण है:",
        "options_en": ["y² = 8x", "y² = 4x", "x² = 8y", "x² = 4y"],
        "options_hi": ["y² = 8x", "y² = 4x", "x² = 8y", "x² = 4y"],
        "answer_en": "y² = 8x",
        "answer_hi": "y² = 8x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Value of lim(x→∞) (1/x) is:",
        "question_hi": "lim(x→∞) (1/x) का मान है:",
        "options_en": ["0", "1", "∞", "Does not exist"],
        "options_hi": ["0", "1", "∞", "अस्तित्व नहीं है"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "If a = 2i + 3j and b = 4i - j, then a + b is:",
        "question_hi": "यदि a = 2i + 3j और b = 4i - j, तो a + b है:",
        "options_en": ["6i + 2j", "6i - 2j", "2i + 4j", "8i + 3j"],
        "options_hi": ["6i + 2j", "6i - 2j", "2i + 4j", "8i + 3j"],
        "answer_en": "6i + 2j",
        "answer_hi": "6i + 2j",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Area of ellipse x²/16 + y²/9 = 1 is:",
        "question_hi": "दीर्घवृत्त x²/16 + y²/9 = 1 का क्षेत्रफल है:",
        "options_en": ["12π", "16π", "20π", "24π"],
        "options_hi": ["12π", "16π", "20π", "24π"],
        "answer_en": "12π",
        "answer_hi": "12π",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Limit of tan x/x as x→0 is:",
        "question_hi": "जब x → 0 होता है, तब tan x/x का मान है:",
        "options_en": ["0", "1", "2", "∞"],
        "options_hi": ["0", "1", "2", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Sum of infinite GP: 1 + 1/2 + 1/4 + ... is:",
        "question_hi": "अनंत गुणोत्तर श्रेणी: 1 + 1/2 + 1/4 + ... का योग है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Value of cosec²θ - cot²θ is:",
        "question_hi": "cosec²θ - cot²θ का मान है:",
        "options_en": ["0", "1", "2", "sin²θ"],
        "options_hi": ["0", "1", "2", "sin²θ"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "If A = [[1,2],[3,4]] and B = [[5,6],[7,8]], then A+B is:",
        "question_hi": "यदि A = [[1,2],[3,4]] और B = [[5,6],[7,8]] है, तो A+B है:",
        "options_en": ["[[6,8],[10,12]]", "[[5,12],[21,32]]", "[[4,4],[4,4]]", "[[6,7],[8,9]]"],
        "options_hi": ["[[6,8],[10,12]]", "[[5,12],[21,32]]", "[[4,4],[4,4]]", "[[6,7],[8,9]]"],
        "answer_en": "[[6,8],[10,12]]",
        "answer_hi": "[[6,8],[10,12]]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Integral ∫(sec²x) dx is:",
        "question_hi": "∫(sec²x) dx का हल है:",
        "options_en": ["tan x + C", "cot x + C", "sec x + C", "cosec x + C"],
        "options_hi": ["tan x + C", "cot x + C", "sec x + C", "cosec x + C"],
        "answer_en": "tan x + C",
        "answer_hi": "tan x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "If log₂8 = x, then x is:",
        "question_hi": "यदि log₂8 = x, तो x है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Derivative of cos(3x) is:",
        "question_hi": "cos(3x) का अवकलज है:",
        "options_en": ["3sin(3x)", "-3sin(3x)", "3cos(3x)", "-3cos(3x)"],
        "options_hi": ["3sin(3x)", "-3sin(3x)", "3cos(3x)", "-3cos(3x)"],
        "answer_en": "-3sin(3x)",
        "answer_hi": "-3sin(3x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Function f(x) = x³ is differentiable at:",
        "question_hi": "फलन f(x) = x³ अवकलनीय है:",
        "options_en": ["x=0 only", "All points", "No point", "x>0 only"],
        "options_hi": ["केवल x=0", "सभी बिंदुओं पर", "किसी बिंदु पर नहीं", "केवल x>0"],
        "answer_en": "All points",
        "answer_hi": "सभी बिंदुओं पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Coefficient of x³ in (2+x)⁵ is:",
        "question_hi": "(2+x)⁵ में x³ का गुणांक है:",
        "options_en": ["10", "20", "40", "80"],
        "options_hi": ["10", "20", "40", "80"],
        "answer_en": "40",
        "answer_hi": "40",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Solution of dy/dx = 2x + 3 is:",
        "question_hi": "dy/dx = 2x + 3 का हल है:",
        "options_en": ["y = x² + 3x + C", "y = 2x² + 3x + C", "y = x² + 3", "y = 2x + 3"],
        "options_hi": ["y = x² + 3x + C", "y = 2x² + 3x + C", "y = x² + 3", "y = 2x + 3"],
        "answer_en": "y = x² + 3x + C",
        "answer_hi": "y = x² + 3x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Value of cos(60°) is:",
        "question_hi": "cos(60°) का मान है:",
        "options_en": ["0", "1/2", "1/√2", "√3/2"],
        "options_hi": ["0", "1/2", "1/√2", "√3/2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Distance between points (0,0) and (3,4) is:",
        "question_hi": "बिंदुओं (0,0) और (3,4) के बीच की दूरी है:",
        "options_en": ["3", "4", "5", "7"],
        "options_hi": ["3", "4", "5", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Number of faces in cube is:",
        "question_hi": "घन में फलकों की संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Sum of squares of first n natural numbers is:",
        "question_hi": "पहली n प्राकृत संख्याओं के वर्गों का योग है:",
        "options_en": ["n(n+1)/2", "n(n+1)(2n+1)/6", "n²(n+1)²/4", "2n(n+1)"],
        "options_hi": ["n(n+1)/2", "n(n+1)(2n+1)/6", "n²(n+1)²/4", "2n(n+1)"],
        "answer_en": "n(n+1)(2n+1)/6",
        "answer_hi": "n(n+1)(2n+1)/6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Value of ∫(0 to 1) (x²) dx is:",
        "question_hi": "0 से 1 तक ∫(x²) dx का मान है:",
        "options_en": ["1/2", "1/3", "1/4", "1/6"],
        "options_hi": ["1/2", "1/3", "1/4", "1/6"],
        "answer_en": "1/3",
        "answer_hi": "1/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Equation of y-axis is:",
        "question_hi": "y-अक्ष का समीकरण है:",
        "options_en": ["x=0", "y=0", "x=y", "x+y=0"],
        "options_hi": ["x=0", "y=0", "x=y", "x+y=0"],
        "answer_en": "x=0",
        "answer_hi": "x=0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "If sin θ = 1/2, then θ is:",
        "question_hi": "यदि sin θ = 1/2, तो θ है:",
        "options_en": ["30°", "45°", "60°", "90°"],
        "options_hi": ["30°", "45°", "60°", "90°"],
        "answer_en": "30°",
        "answer_hi": "30°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Number of terms in (a+b)ⁿ is:",
        "question_hi": "(a+b)ⁿ के प्रसार में पदों की संख्या है:",
        "options_en": ["n", "n+1", "n-1", "2n"],
        "options_hi": ["n", "n+1", "n-1", "2n"],
        "answer_en": "n+1",
        "answer_hi": "n+1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Value of tan(0°) is:",
        "question_hi": "tan(0°) का मान है:",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Solution of 2x - 5 = 3 is:",
        "question_hi": "समीकरण 2x - 5 = 3 का हल है:",
        "options_en": ["x=2", "x=3", "x=4", "x=5"],
        "options_hi": ["x=2", "x=3", "x=4", "x=5"],
        "answer_en": "x=4",
        "answer_hi": "x=4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "A body falling freely has:",
        "question_hi": "स्वतंत्र रूप से गिरता हुआ पिंड होता है:",
        "options_en": ["Constant velocity", "Constant acceleration", "Variable acceleration", "Zero acceleration"],
        "options_hi": ["नियत वेग", "नियत त्वरण", "परिवर्ती त्वरण", "शून्य त्वरण"],
        "answer_en": "Constant acceleration",
        "answer_hi": "नियत त्वरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Unit of electric flux is:",
        "question_hi": "विद्युत फ्लक्स की इकाई है:",
        "options_en": ["Volt-meter", "Weber", "Tesla", "Coulomb"],
        "options_hi": ["वोल्ट-मीटर", "वेबर", "टेस्ला", "कूलॉम"],
        "answer_en": "Volt-meter",
        "answer_hi": "वोल्ट-मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Unit of frequency of AC is:",
        "question_hi": "AC की आवृत्ति की इकाई है:",
        "options_en": ["Hertz", "Watt", "Volt", "Ampere"],
        "options_hi": ["हर्ट्ज", "वाट", "वोल्ट", "एम्पियर"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Rydberg constant has unit:",
        "question_hi": "रिडबर्ग नियतांक की इकाई है:",
        "options_en": ["m⁻¹", "m", "s⁻¹", "Hz"],
        "options_hi": ["m⁻¹", "m", "s⁻¹", "Hz"],
        "answer_en": "m⁻¹",
        "answer_hi": "m⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "In nuclear reactor, moderator is used to:",
        "question_hi": "नाभिकीय रिएक्टर में, मंदक का उपयोग किया जाता है:",
        "options_en": ["Absorb neutrons", "Slow down neutrons", "Speed up neutrons", "Produce neutrons"],
        "options_hi": ["न्यूट्रॉन अवशोषित करना", "न्यूट्रॉन धीमा करना", "न्यूट्रॉन तेज करना", "न्यूट्रॉन उत्पन्न करना"],
        "answer_en": "Slow down neutrons",
        "answer_hi": "न्यूट्रॉन धीमा करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "A step-down transformer:",
        "question_hi": "एक स्टेप-डाउन ट्रांसफॉर्मर:",
        "options_en": ["Increases voltage", "Decreases voltage", "Increases current", "Decreases power"],
        "options_hi": ["वोल्टेज बढ़ाता है", "वोल्टेज घटाता है", "धारा बढ़ाता है", "शक्ति घटाता है"],
        "answer_en": "Decreases voltage",
        "answer_hi": "वोल्टेज घटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "For a projectile, time of flight depends on:",
        "question_hi": "एक प्रक्षेप्य के लिए, उड़ान काल निर्भर करता है:",
        "options_en": ["Horizontal velocity only", "Vertical velocity only", "Both velocities", "Mass only"],
        "options_hi": ["केवल क्षैतिज वेग", "केवल ऊर्ध्वाधर वेग", "दोनों वेग", "केवल द्रव्यमान"],
        "answer_en": "Vertical velocity only",
        "answer_hi": "केवल ऊर्ध्वाधर वेग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "In adiabatic process, PVᵞ is:",
        "question_hi": "रुद्धोष्म प्रक्रम में, PVᵞ है:",
        "options_en": ["Constant", "Variable", "Zero", "Infinite"],
        "options_hi": ["नियत", "चर", "शून्य", "अनंत"],
        "answer_en": "Constant",
        "answer_hi": "नियत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Brewster's law relates:",
        "question_hi": "ब्रूस्टर का नियम संबंधित करता है:",
        "options_en": ["Current and resistance", "Angle and refractive index", "Force and mass", "Charge and field"],
        "options_hi": ["धारा और प्रतिरोध", "कोण और अपवर्तनांक", "बल और द्रव्यमान", "आवेश और क्षेत्र"],
        "answer_en": "Angle and refractive index",
        "answer_hi": "कोण और अपवर्तनांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "In photoelectric effect, work function is:",
        "question_hi": "प्रकाश विद्युत प्रभाव में, कार्य फलन है:",
        "options_en": ["Minimum energy to eject electron", "Maximum energy of photon", "Kinetic energy of electron", "Potential energy"],
        "options_hi": ["इलेक्ट्रॉन निकालने के लिए न्यूनतम ऊर्जा", "फोटॉन की अधिकतम ऊर्जा", "इलेक्ट्रॉन की गतिज ऊर्जा", "स्थितिज ऊर्जा"],
        "answer_en": "Minimum energy to eject electron",
        "answer_hi": "इलेक्ट्रॉन निकालने के लिए न्यूनतम ऊर्जा",
        "attempted": false,
        "selected": ""
    }
];    
// Add more questions here...


let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}















////////////////////////////////////////////////////////////////////////////////////////////all file and folder me code add karna hai 


// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////