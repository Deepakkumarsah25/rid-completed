const questions = [
    {
        "num": 1,
        "question_en": "A body is thrown vertically upwards with initial velocity 49 m/s. The total time of flight is:",
        "question_hi": "एक पिंड को 49 m/s के प्रारंभिक वेग से ऊर्ध्वाधर ऊपर की ओर फेंका जाता है। उड़ान का कुल समय है:",
        "options_en": ["5 s", "10 s", "15 s", "20 s"],
        "options_hi": ["5 s", "10 s", "15 s", "20 s"],
        "answer_en": "10 s",
        "answer_hi": "10 s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The SI unit of torque is:",
        "question_hi": "बल आघूर्ण की SI इकाई है:",
        "options_en": ["Newton", "Joule", "Newton-meter", "Watt"],
        "options_hi": ["न्यूटन", "जूल", "न्यूटन-मीटर", "वाट"],
        "answer_en": "Newton-meter",
        "answer_hi": "न्यूटन-मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A convex mirror always forms an image which is:",
        "question_hi": "एक उत्तल दर्पण हमेशा एक प्रतिबिंब बनाता है जो है:",
        "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
        "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
        "answer_en": "Virtual and erect",
        "answer_hi": "आभासी और सीधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The dimensional formula of angular momentum is:",
        "question_hi": "कोणीय संवेग का विमीय सूत्र है:",
        "options_en": ["[ML²T⁻¹]", "[MLT⁻¹]", "[ML²T⁻²]", "[MLT⁻²]"],
        "options_hi": ["[ML²T⁻¹]", "[MLT⁻¹]", "[ML²T⁻²]", "[MLT⁻²]"],
        "answer_en": "[ML²T⁻¹]",
        "answer_hi": "[ML²T⁻¹]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A force of 50 N acts on a body of mass 10 kg at rest. The velocity after 5 seconds is:",
        "question_hi": "50 N का बल विरामावस्था में 10 kg द्रव्यमान के पिंड पर कार्य करता है। 5 सेकंड के बाद वेग है:",
        "options_en": ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
        "options_hi": ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
        "answer_en": "25 m/s",
        "answer_hi": "25 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The SI unit of electric conductivity is:",
        "question_hi": "विद्युत चालकता की SI इकाई है:",
        "options_en": ["Siemens/m", "Ohm/m", "Mho", "Siemens"],
        "options_hi": ["सीमेंस/m", "ओम/m", "म्हो", "सीमेंस"],
        "answer_en": "Siemens/m",
        "answer_hi": "सीमेंस/m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "A body moving with uniform acceleration has velocity 10 m/s at t=0 and 30 m/s at t=5s. The distance covered in 5s is:",
        "question_hi": "एकसमान त्वरण से गतिमान पिंड का वेग t=0 पर 10 m/s और t=5s पर 30 m/s है। 5s में तय दूरी है:",
        "options_en": ["50 m", "75 m", "100 m", "125 m"],
        "options_hi": ["50 m", "75 m", "100 m", "125 m"],
        "answer_en": "100 m",
        "answer_hi": "100 m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The phenomenon of splitting of white light into its constituent colors is called:",
        "question_hi": "सफेद प्रकाश के अपने घटक रंगों में विभाजित होने की घटना कहलाती है:",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Dispersion",
        "answer_hi": "विक्षेपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Three capacitors of 2μF, 3μF and 6μF are connected in series. The equivalent capacitance is:",
        "question_hi": "2μF, 3μF और 6μF के तीन संधारित्र श्रेणीक्रम में जुड़े हैं। तुल्य धारिता है:",
        "options_en": ["1 μF", "2 μF", "3 μF", "6 μF"],
        "options_hi": ["1 μF", "2 μF", "3 μF", "6 μF"],
        "answer_en": "1 μF",
        "answer_hi": "1 μF",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The coefficient of performance of a refrigerator is defined as:",
        "question_hi": "रेफ्रिजरेटर का निष्पादन गुणांक परिभाषित किया जाता है:",
        "options_en": ["Q₁/W", "Q₂/W", "W/Q₁", "W/Q₂"],
        "options_hi": ["Q₁/W", "Q₂/W", "W/Q₁", "W/Q₂"],
        "answer_en": "Q₂/W",
        "answer_hi": "Q₂/W",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Unit of magnetic susceptibility is:",
        "question_hi": "चुंबकीय संवेदनशीलता की इकाई है:",
        "options_en": ["No unit", "Tesla", "Weber", "Henry"],
        "options_hi": ["कोई इकाई नहीं", "टेस्ला", "वेबर", "हेनरी"],
        "answer_en": "No unit",
        "answer_hi": "कोई इकाई नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "A spring of force constant 200 N/m is compressed by 0.1 m. The potential energy stored is:",
        "question_hi": "200 N/m बल स्थिरांक वाली एक स्प्रिंग 0.1 m से संपीडित होती है। संचित स्थितिज ऊर्जा है:",
        "options_en": ["0.5 J", "1 J", "1.5 J", "2 J"],
        "options_hi": ["0.5 J", "1 J", "1.5 J", "2 J"],
        "answer_en": "1 J",
        "answer_hi": "1 J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The direction of induced current is given by:",
        "question_hi": "प्रेरित धारा की दिशा दी जाती है:",
        "options_en": ["Faraday's law", "Lenz's law", "Ampere's law", "Ohm's law"],
        "options_hi": ["फैराडे के नियम द्वारा", "लेंज के नियम द्वारा", "एम्पियर के नियम द्वारा", "ओम के नियम द्वारा"],
        "answer_en": "Lenz's law",
        "answer_hi": "लेंज के नियम द्वारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The critical angle for a medium is 30°. Its refractive index is:",
        "question_hi": "एक माध्यम के लिए क्रांतिक कोण 30° है। इसका अपवर्तनांक है:",
        "options_en": ["1.5", "2", "2.5", "3"],
        "options_hi": ["1.5", "2", "2.5", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The height of a geostationary satellite above Earth's surface is approximately:",
        "question_hi": "पृथ्वी की सतह से भू-स्थिर उपग्रह की ऊँचाई लगभग है:",
        "options_en": ["360 km", "3600 km", "36000 km", "360000 km"],
        "options_hi": ["360 km", "3600 km", "36000 km", "360000 km"],
        "answer_en": "36000 km",
        "answer_hi": "36000 km",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "A wire of resistance R is stretched to double its length. Its new resistance is:",
        "question_hi": "R प्रतिरोध के एक तार को खींचकर उसकी लंबाई दोगुनी कर दी जाती है। इसका नया प्रतिरोध है:",
        "options_en": ["R", "2R", "4R", "8R"],
        "options_hi": ["R", "2R", "4R", "8R"],
        "answer_en": "4R",
        "answer_hi": "4R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is ferrimagnetic?",
        "question_hi": "निम्नलिखित में से कौन फेरिमैग्नेटिक है?",
        "options_en": ["Fe₃O₄", "Fe", "Ni", "Co"],
        "options_hi": ["Fe₃O₄", "Fe", "Ni", "Co"],
        "answer_en": "Fe₃O₄",
        "answer_hi": "Fe₃O₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "A 1000 W heater operates for 2 hours. The energy consumed is:",
        "question_hi": "एक 1000 W का हीटर 2 घंटे तक चलता है। उपभुक्त ऊर्जा है:",
        "options_en": ["1 kWh", "2 kWh", "3 kWh", "4 kWh"],
        "options_hi": ["1 kWh", "2 kWh", "3 kWh", "4 kWh"],
        "answer_en": "2 kWh",
        "answer_hi": "2 kWh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "In a single slit diffraction pattern, the width of central maximum is:",
        "question_hi": "एकल झिरी विवर्तन पैटर्न में, केंद्रीय उच्चिष्ठ की चौड़ाई है:",
        "options_en": ["λ/a", "2λ/a", "λD/a", "2λD/a"],
        "options_hi": ["λ/a", "2λ/a", "λD/a", "2λD/a"],
        "answer_en": "2λD/a",
        "answer_hi": "2λD/a",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The time period of a simple pendulum of length 1 m is approximately:",
        "question_hi": "1 m लंबाई के सरल लोलक का आवर्तकाल लगभग है:",
        "options_en": ["1 s", "2 s", "3 s", "4 s"],
        "options_hi": ["1 s", "2 s", "3 s", "4 s"],
        "answer_en": "2 s",
        "answer_hi": "2 s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The maximum number of electrons in d-subshell is:",
        "question_hi": "d-उपकोश में इलेक्ट्रॉनों की अधिकतम संख्या है:",
        "options_en": ["6", "10", "14", "18"],
        "options_hi": ["6", "10", "14", "18"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The magnetic field at a point on the axis of a circular coil is:",
        "question_hi": "एक वृत्ताकार कुंडली के अक्ष पर एक बिंदु पर चुंबकीय क्षेत्र है:",
        "options_en": ["Parallel to axis", "Perpendicular to axis", "Radial", "Zero"],
        "options_hi": ["अक्ष के समानांतर", "अक्ष के लंबवत", "रेडियल", "शून्य"],
        "answer_en": "Parallel to axis",
        "answer_hi": "अक्ष के समानांतर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which molecule has trigonal planar shape?",
        "question_hi": "किस अणु की त्रिकोणीय समतलीय आकृति है?",
        "options_en": ["NH₃", "BF₃", "H₂O", "CH₄"],
        "options_hi": ["NH₃", "BF₃", "H₂O", "CH₄"],
        "answer_en": "BF₃",
        "answer_hi": "BF₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The order of differential equation d³y/dx³ + 2(d²y/dx²) + dy/dx = 0 is:",
        "question_hi": "अवकल समीकरण d³y/dx³ + 2(d²y/dx²) + dy/dx = 0 की कोटि है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "For a virtual image formed by convex mirror, the magnification is:",
        "question_hi": "उत्तल दर्पण द्वारा बने आभासी प्रतिबिंब के लिए, आवर्धन है:",
        "options_en": ["Positive and less than 1", "Negative and less than 1", "Positive and greater than 1", "Negative and greater than 1"],
        "options_hi": ["धनात्मक और 1 से कम", "ऋणात्मक और 1 से कम", "धनात्मक और 1 से अधिक", "ऋणात्मक और 1 से अधिक"],
        "answer_en": "Positive and less than 1",
        "answer_hi": "धनात्मक और 1 से कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Oxidation state of iron in Fe₂O₃ is:",
        "question_hi": "Fe₂O₃ में आयरन की ऑक्सीकरण अवस्था है:",
        "options_en": ["+2", "+3", "+4", "+6"],
        "options_hi": ["+2", "+3", "+4", "+6"],
        "answer_en": "+3",
        "answer_hi": "+3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which shows dipole-dipole interaction?",
        "question_hi": "कौन द्विध्रुव-द्विध्रुव अन्योन्यक्रिया दर्शाता है?",
        "options_en": ["CH₄", "HCl", "H₂", "CO₂"],
        "options_hi": ["CH₄", "HCl", "H₂", "CO₂"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "IUPAC name of CH₃-CH₂-CH₂-CH₃ is:",
        "question_hi": "CH₃-CH₂-CH₂-CH₃ का IUPAC नाम है:",
        "options_en": ["Butane", "Propane", "Pentane", "Hexane"],
        "options_hi": ["ब्यूटेन", "प्रोपेन", "पेंटेन", "हेक्सेन"],
        "answer_en": "Butane",
        "answer_hi": "ब्यूटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Number of σ bonds in C₂H₄ is:",
        "question_hi": "C₂H₄ में σ बंधों की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which is used in carbon dating?",
        "question_hi": "कार्बन डेटिंग में कौन प्रयुक्त होता है?",
        "options_en": ["C-12", "C-13", "C-14", "C-15"],
        "options_hi": ["C-12", "C-13", "C-14", "C-15"],
        "answer_en": "C-14",
        "answer_hi": "C-14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "pH of pure water at 25°C is:",
        "question_hi": "25°C पर शुद्ध जल का pH है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Element with electronic configuration 2,8,8,1 is:",
        "question_hi": "इलेक्ट्रॉनिक विन्यास 2,8,8,1 वाला तत्व है:",
        "options_en": ["Sodium", "Potassium", "Calcium", "Magnesium"],
        "options_hi": ["सोडियम", "पोटैशियम", "कैल्शियम", "मैग्नीशियम"],
        "answer_en": "Potassium",
        "answer_hi": "पोटैशियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Hybridization in SF₄ is:",
        "question_hi": "SF₄ में संकरण है:",
        "options_en": ["sp³", "sp³d", "sp³d²", "dsp²"],
        "options_hi": ["sp³", "sp³d", "sp³d²", "dsp²"],
        "answer_en": "sp³d",
        "answer_hi": "sp³d",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which is strongest reducing agent?",
        "question_hi": "कौन सबसे प्रबल अपचायक है?",
        "options_en": ["Na", "Mg", "Al", "K"],
        "options_hi": ["Na", "Mg", "Al", "K"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Molecular formula of formaldehyde is:",
        "question_hi": "फॉर्मेल्डिहाइड का आणविक सूत्र है:",
        "options_en": ["HCHO", "CH₃CHO", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["HCHO", "CH₃CHO", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "HCHO",
        "answer_hi": "HCHO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Meso compounds are:",
        "question_hi": "मेसो यौगिक हैं:",
        "options_en": ["Optically active", "Optically inactive", "Racemic mixture", "Enantiomers"],
        "options_hi": ["प्रकाशिक सक्रिय", "प्रकाशिक निष्क्रिय", "रेसीमिक मिश्रण", "एनैन्शियोमर्स"],
        "answer_en": "Optically inactive",
        "answer_hi": "प्रकाशिक निष्क्रिय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Bond angle in BeCl₂ is:",
        "question_hi": "BeCl₂ में बंध कोण है:",
        "options_en": ["90°", "109.5°", "120°", "180°"],
        "options_hi": ["90°", "109.5°", "120°", "180°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Baeyer's test is used for:",
        "question_hi": "बेयर परीक्षण उपयोग किया जाता है:",
        "options_en": ["Alkenes", "Alkynes", "Alkanes", "Alcohols"],
        "options_hi": ["ऐल्कीन", "ऐल्काइन", "ऐल्केन", "अल्कोहल"],
        "answer_en": "Alkenes",
        "answer_hi": "ऐल्कीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Coordination number in ZnS crystal is:",
        "question_hi": "ZnS क्रिस्टल में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Most stable conformation of ethane is:",
        "question_hi": "ईथेन का सबसे स्थिर संरूपण है:",
        "options_en": ["Eclipsed", "Staggered", "Gauche", "Anti"],
        "options_hi": ["अध्यारोपित", "स्टैगर्ड", "गौश", "एंटी"],
        "answer_en": "Staggered",
        "answer_hi": "स्टैगर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Schottky defect leads to:",
        "question_hi": "शॉट्की दोष के कारण होता है:",
        "options_en": ["Decrease in density", "Increase in density", "No change in density", "Color change"],
        "options_hi": ["घनत्व में कमी", "घनत्व में वृद्धि", "घनत्व में कोई परिवर्तन नहीं", "रंग परिवर्तन"],
        "answer_en": "Decrease in density",
        "answer_hi": "घनत्व में कमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Number of metamers for C₄H₁₀O is:",
        "question_hi": "C₄H₁₀O के लिए मेटामर्स की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Complex showing ionization isomerism is:",
        "question_hi": "आयनन समावयवता दर्शाने वाला संकुल है:",
        "options_en": ["[Co(NH₃)₅Br]SO₄", "[Co(NH₃)₆]Cl₃", "[Co(en)₃]Cl₃", "[Ni(CO)₄]"],
        "options_hi": ["[Co(NH₃)₅Br]SO₄", "[Co(NH₃)₆]Cl₃", "[Co(en)₃]Cl₃", "[Ni(CO)₄]"],
        "answer_en": "[Co(NH₃)₅Br]SO₄",
        "answer_hi": "[Co(NH₃)₅Br]SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Strongest base among aniline, methylamine, ammonia is:",
        "question_hi": "एनिलीन, मेथिलऐमीन, अमोनिया में सबसे प्रबल क्षार है:",
        "options_en": ["Aniline", "Methylamine", "Ammonia", "All equal"],
        "options_hi": ["एनिलीन", "मेथिलऐमीन", "अमोनिया", "सभी समान"],
        "answer_en": "Methylamine",
        "answer_hi": "मेथिलऐमीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Number of π bonds in N₂ is:",
        "question_hi": "N₂ में π बंधों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 46,
        "question_en": "IUPAC name of CH₃-CH₂-CH₂-CHO is:",
        "question_hi": "CH₃-CH₂-CH₂-CHO का IUPAC नाम है:",
        "options_en": ["Butanal", "Propanal", "Pentanal", "Ethanal"],
        "options_hi": ["ब्यूटेनल", "प्रोपेनल", "पेंटेनल", "ईथेनल"],
        "answer_en": "Butanal",
        "answer_hi": "ब्यूटेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The unit of rate constant for a first order reaction is:",
        "question_hi": "प्रथम कोटि अभिक्रिया के लिए दर स्थिरांक की इकाई है:",
        "options_en": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "options_hi": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "answer_en": "s⁻¹",
        "answer_hi": "s⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन एक उत्कृष्ट गैस है?",
        "options_en": ["Chlorine", "Oxygen", "Argon", "Nitrogen"],
        "options_hi": ["क्लोरीन", "ऑक्सीजन", "आर्गन", "नाइट्रोजन"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The shape of XeF₄ molecule is:",
        "question_hi": "XeF₄ अणु की आकृति है:",
        "options_en": ["Tetrahedral", "Square planar", "Octahedral", "Trigonal bipyramidal"],
        "options_hi": ["टेट्राहेड्रल", "वर्ग समतलीय", "अष्टफलकीय", "त्रिकोणीय द्विपिरैमिडल"],
        "answer_en": "Square planar",
        "answer_hi": "वर्ग समतलीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which hormone regulates blood calcium level?",
        "question_hi": "कौन सा हार्मोन रक्त कैल्शियम स्तर को नियंत्रित करता है?",
        "options_en": ["Insulin", "Thyroxine", "Parathyroid hormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरॉक्सिन", "पैराथाइरॉइड हार्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathyroid hormone",
        "answer_hi": "पैराथाइरॉइड हार्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The process of conversion of nitrates to nitrogen gas is called:",
        "question_hi": "नाइट्रेट्स का नाइट्रोजन गैस में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrification", "Ammonification", "Denitrification", "Nitrogen fixation"],
        "options_hi": ["नाइट्रीकरण", "अमोनीकरण", "विनाइट्रीकरण", "नाइट्रोजन स्थिरीकरण"],
        "answer_en": "Denitrification",
        "answer_hi": "विनाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "DNA replication is:",
        "question_hi": "DNA प्रतिकृति है:",
        "options_en": ["Conservative", "Semi-conservative", "Dispersive", "Random"],
        "options_hi": ["संरक्षी", "अर्ध-संरक्षी", "विखंडनशील", "यादृच्छिक"],
        "answer_en": "Semi-conservative",
        "answer_hi": "अर्ध-संरक्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Enzyme that hydrolyzes starch is:",
        "question_hi": "स्टार्च को जल-अपघटित करने वाला एंजाइम है:",
        "options_en": ["Pepsin", "Amylase", "Lipase", "Trypsin"],
        "options_hi": ["पेप्सिन", "एमाइलेज", "लाइपेज", "ट्रिप्सिन"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Blood group AB has:",
        "question_hi": "रक्त समूह AB में होता है:",
        "options_en": ["A antigens and B antibodies", "B antigens and A antibodies", "Both A and B antigens, no antibodies", "No antigens, both antibodies"],
        "options_hi": ["A प्रतिजन और B प्रतिरक्षी", "B प्रतिजन और A प्रतिरक्षी", "दोनों A और B प्रतिजन, कोई प्रतिरक्षी नहीं", "कोई प्रतिजन नहीं, दोनों प्रतिरक्षी"],
        "answer_en": "Both A and B antigens, no antibodies",
        "answer_hi": "दोनों A और B प्रतिजन, कोई प्रतिरक्षी नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Mitochondria are called powerhouses of the cell because they:",
        "question_hi": "माइटोकॉन्ड्रिया को कोशिका का पावरहाउस कहा जाता है क्योंकि वे:",
        "options_en": ["Store food", "Produce ATP", "Synthesize proteins", "Control cell division"],
        "options_hi": ["भोजन संग्रहित करते हैं", "ATP उत्पन्न करते हैं", "प्रोटीन संश्लेषित करते हैं", "कोशिका विभाजन नियंत्रित करते हैं"],
        "answer_en": "Produce ATP",
        "answer_hi": "ATP उत्पन्न करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Photosynthesis occurs in:",
        "question_hi": "प्रकाश संश्लेषण होता है:",
        "options_en": ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम", "केंद्रक"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The universal recipient blood group is:",
        "question_hi": "सार्वत्रिक ग्राही रक्त समूह है:",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "AB",
        "answer_hi": "AB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Number of chromosomes in human gametes is:",
        "question_hi": "मानव युग्मकों में गुणसूत्रों की संख्या है:",
        "options_en": ["23", "46", "48", "22"],
        "options_hi": ["23", "46", "48", "22"],
        "answer_en": "23",
        "answer_hi": "23",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The process of cell division in somatic cells is called:",
        "question_hi": "दैहिक कोशिकाओं में कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Meiosis", "Mitosis", "Binary fission", "Budding"],
        "options_hi": ["अर्धसूत्रीविभाजन", "समसूत्रीविभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Mitosis",
        "answer_hi": "समसूत्रीविभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "HIV virus causes:",
        "question_hi": "HIV वायरस कारण बनता है:",
        "options_en": ["Cancer", "AIDS", "Tuberculosis", "Malaria"],
        "options_hi": ["कैंसर", "एड्स", "तपेदिक", "मलेरिया"],
        "answer_en": "AIDS",
        "answer_hi": "एड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The basic unit of nervous system is:",
        "question_hi": "तंत्रिका तंत्र की मूल इकाई है:",
        "options_en": ["Nephron", "Neuron", "Axon", "Dendrite"],
        "options_hi": ["नेफ्रॉन", "न्यूरॉन", "एक्सॉन", "डेंड्राइट"],
        "answer_en": "Neuron",
        "answer_hi": "न्यूरॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Plant hormone responsible for cell elongation is:",
        "question_hi": "कोशिका दीर्घीकरण के लिए उत्तरदायी पादप हार्मोन है:",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
        "answer_en": "Auxin",
        "answer_hi": "ऑक्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The largest gland in human body is:",
        "question_hi": "मानव शरीर में सबसे बड़ी ग्रंथि है:",
        "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "options_hi": ["अग्न्याशय", "यकृत", "थायरॉइड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Oxygenated blood is carried by:",
        "question_hi": "ऑक्सीजनयुक्त रक्त वहन किया जाता है:",
        "options_en": ["Pulmonary artery", "Pulmonary vein", "Coronary artery", "Vena cava"],
        "options_hi": ["फुफ्फुसीय धमनी", "फुफ्फुसीय शिरा", "कोरोनरी धमनी", "वेना कावा"],
        "answer_en": "Pulmonary vein",
        "answer_hi": "फुफ्फुसीय शिरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The process of breakdown of glucose in the absence of oxygen is called:",
        "question_hi": "ऑक्सीजन की अनुपस्थिति में ग्लूकोज के विघटन की प्रक्रिया कहलाती है:",
        "options_en": ["Glycolysis", "Krebs cycle", "Fermentation", "Electron transport"],
        "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "किण्वन", "इलेक्ट्रॉन परिवहन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which is not a greenhouse gas?",
        "question_hi": "कौन सी ग्रीनहाउस गैस नहीं है?",
        "options_en": ["CO₂", "CH₄", "N₂", "CFC"],
        "options_hi": ["CO₂", "CH₄", "N₂", "CFC"],
        "answer_en": "N₂",
        "answer_hi": "N₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Acid rain is caused by oxides of:",
        "question_hi": "अम्ल वर्षा किसके ऑक्साइडों के कारण होती है?",
        "options_en": ["Carbon and Nitrogen", "Sulfur and Nitrogen", "Carbon and Sulfur", "Phosphorus and Nitrogen"],
        "options_hi": ["कार्बन और नाइट्रोजन", "सल्फर और नाइट्रोजन", "कार्बन और सल्फर", "फॉस्फोरस और नाइट्रोजन"],
        "answer_en": "Sulfur and Nitrogen",
        "answer_hi": "सल्फर और नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Ozone layer is present in:",
        "question_hi": "ओजोन परत उपस्थित है:",
        "options_en": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        "options_hi": ["क्षोभमंडल", "समतापमंडल", "मध्यमंडल", "तापमंडल"],
        "answer_en": "Stratosphere",
        "answer_hi": "समतापमंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The most abundant gas in atmosphere is:",
        "question_hi": "वायुमंडल में सबसे प्रचुर गैस है:",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "BOD is related to:",
        "question_hi": "BOD संबंधित है:",
        "options_en": ["Air pollution", "Water pollution", "Soil pollution", "Noise pollution"],
        "options_hi": ["वायु प्रदूषण", "जल प्रदूषण", "मृदा प्रदूषण", "ध्वनि प्रदूषण"],
        "answer_en": "Water pollution",
        "answer_hi": "जल प्रदूषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which is a non-renewable resource?",
        "question_hi": "कौन सा एक अनवीकरणीय संसाधन है?",
        "options_en": ["Solar energy", "Wind energy", "Coal", "Biomass"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "बायोमास"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The process of converting waste into reusable material is called:",
        "question_hi": "अपशिष्ट को पुन: प्रयोग योग्य सामग्री में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Recycling", "Incineration", "Composting", "Landfilling"],
        "options_hi": ["पुनर्चक्रण", "भस्मीकरण", "कम्पोस्टिंग", "लैंडफिलिंग"],
        "answer_en": "Recycling",
        "answer_hi": "पुनर्चक्रण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Chipko movement was related to:",
        "question_hi": "चिपको आंदोलन संबंधित था:",
        "options_en": ["Water conservation", "Forest conservation", "Wildlife protection", "Air pollution"],
        "options_hi": ["जल संरक्षण", "वन संरक्षण", "वन्यजीव संरक्षण", "वायु प्रदूषण"],
        "answer_en": "Forest conservation",
        "answer_hi": "वन संरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The unit of electric current is:",
        "question_hi": "विद्युत धारा की इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which device converts mechanical energy to electrical energy?",
        "question_hi": "कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
        "options_en": ["Motor", "Generator", "Transformer", "Rectifier"],
        "options_hi": ["मोटर", "जनरेटर", "ट्रांसफॉर्मर", "रेक्टिफायर"],
        "answer_en": "Generator",
        "answer_hi": "जनरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The SI unit of pressure is:",
        "question_hi": "दाब की SI इकाई है:",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "A convex lens forms a real image when the object is placed:",
        "question_hi": "एक उत्तल लेंस वास्तविक प्रतिबिंब बनाता है जब वस्तु रखी जाती है:",
        "options_en": ["At focus", "Between focus and lens", "Beyond focus", "At infinity"],
        "options_hi": ["फोकस पर", "फोकस और लेंस के बीच", "फोकस से परे", "अनंत पर"],
        "answer_en": "Beyond focus",
        "answer_hi": "फोकस से परे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The color of light is determined by its:",
        "question_hi": "प्रकाश का रंग निर्धारित होता है इसके द्वारा:",
        "options_en": ["Amplitude", "Wavelength", "Velocity", "Intensity"],
        "options_hi": ["आयाम", "तरंगदैर्ध्य", "वेग", "तीव्रता"],
        "answer_en": "Wavelength",
        "answer_hi": "तरंगदैर्ध्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Ohm's law states that:",
        "question_hi": "ओम का नियम कहता है कि:",
        "options_en": ["V = I/R", "V = IR", "I = V/R", "R = VI"],
        "options_hi": ["V = I/R", "V = IR", "I = V/R", "R = VI"],
        "answer_en": "V = IR",
        "answer_hi": "V = IR",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The unit of frequency is:",
        "question_hi": "आवृत्ति की इकाई है:",
        "options_en": ["Hertz", "Decibel", "Newton", "Joule"],
        "options_hi": ["हर्ट्ज", "डेसिबल", "न्यूटन", "जूल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which is a vector quantity?",
        "question_hi": "कौन सी सदिश राशि है?",
        "options_en": ["Mass", "Time", "Force", "Temperature"],
        "options_hi": ["द्रव्यमान", "समय", "बल", "तापमान"],
        "answer_en": "Force",
        "answer_hi": "बल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The first law of thermodynamics is based on:",
        "question_hi": "ऊष्मागतिकी का प्रथम नियम आधारित है:",
        "options_en": ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Conservation of charge"],
        "options_hi": ["द्रव्यमान के संरक्षण पर", "ऊर्जा के संरक्षण पर", "संवेग के संरक्षण पर", "आवेश के संरक्षण पर"],
        "answer_en": "Conservation of energy",
        "answer_hi": "ऊर्जा के संरक्षण पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The process of conversion of solid directly to gas is called:",
        "question_hi": "ठोस का सीधे गैस में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Sublimation", "Evaporation", "Condensation", "Fusion"],
        "options_hi": ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "संलयन"],
        "answer_en": "Sublimation",
        "answer_hi": "उर्ध्वपातन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "pH scale ranges from:",
        "question_hi": "pH स्केल का परिसर है:",
        "options_en": ["0 to 7", "1 to 14", "0 to 14", "1 to 10"],
        "options_hi": ["0 से 7", "1 से 14", "0 से 14", "1 से 10"],
        "answer_en": "0 to 14",
        "answer_hi": "0 से 14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The most electronegative element is:",
        "question_hi": "सबसे अधिक विद्युतऋणात्मक तत्व है:",
        "options_en": ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
        "options_hi": ["फ्लोरीन", "क्लोरीन", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Fluorine",
        "answer_hi": "फ्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
        "options_en": ["Mercury", "Sodium", "Iron", "Copper"],
        "options_hi": ["पारा", "सोडियम", "लोहा", "तांबा"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The chemical formula of baking soda is:",
        "question_hi": "बेकिंग सोडा का रासायनिक सूत्र है:",
        "options_en": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "options_hi": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Vinegar contains:",
        "question_hi": "सिरका में होता है:",
        "options_en": ["Acetic acid", "Citric acid", "Hydrochloric acid", "Sulfuric acid"],
        "options_hi": ["एसिटिक अम्ल", "सिट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The hardest natural substance is:",
        "question_hi": "सबसे कठोर प्राकृतिक पदार्थ है:",
        "options_en": ["Iron", "Diamond", "Gold", "Platinum"],
        "options_hi": ["लोहा", "हीरा", "सोना", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The gas used in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में प्रयुक्त गैस है:",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The process of loss of water from plants is called:",
        "question_hi": "पौधों से जल के ह्रास की प्रक्रिया कहलाती है:",
        "options_en": ["Transpiration", "Evaporation", "Condensation", "Precipitation"],
        "options_hi": ["वाष्पोत्सर्जन", "वाष्पीकरण", "संघनन", "वर्षण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The smallest bone in human body is:",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी है:",
        "options_en": ["Femur", "Stapes", "Radius", "Ulna"],
        "options_hi": ["फीमर", "स्टेप्स", "रेडियस", "अल्ना"],
        "answer_en": "Stapes",
        "answer_hi": "स्टेप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Vitamin C is also known as:",
        "question_hi": "विटामिन C के रूप में भी जाना जाता है:",
        "options_en": ["Ascorbic acid", "Folic acid", "Nicotinic acid", "Riboflavin"],
        "options_hi": ["एस्कॉर्बिक अम्ल", "फोलिक अम्ल", "निकोटिनिक अम्ल", "राइबोफ्लेविन"],
        "answer_en": "Ascorbic acid",
        "answer_hi": "एस्कॉर्बिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The study of fossils is called:",
        "question_hi": "जीवाश्मों का अध्ययन कहलाता है:",
        "options_en": ["Paleontology", "Archaeology", "Geology", "Anthropology"],
        "options_hi": ["पुराजीवविज्ञान", "पुरातत्व", "भूविज्ञान", "मानवविज्ञान"],
        "answer_en": "Paleontology",
        "answer_hi": "पुराजीवविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The SI unit of luminous intensity is:",
        "question_hi": "ज्योति तीव्रता की SI इकाई है:",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["लुमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The process of nuclear division in cells is called:",
        "question_hi": "कोशिकाओं में केंद्रक विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Cytokinesis", "Karyokinesis", "Plasmolysis", "Osmosis"],
        "options_hi": ["कोशिका द्रव्य विभाजन", "कैरियोकाइनेसिस", "प्लाज्मोलाइसिस", "परासरण"],
        "answer_en": "Karyokinesis",
        "answer_hi": "कैरियोकाइनेसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The metal used in making mirrors is:",
        "question_hi": "दर्पण बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Silver", "Aluminum", "Gold"],
        "options_hi": ["तांबा", "चांदी", "एल्युमिनियम", "सोना"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The process of converting sugar to alcohol is called:",
        "question_hi": "चीनी को अल्कोहल में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Fermentation", "Distillation", "Evaporation", "Sublimation"],
        "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "उर्ध्वपातन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The instrument used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दाब मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The study of earthquakes is called:",
        "question_hi": "भूकंपों का अध्ययन कहलाता है:",
        "options_en": ["Seismology", "Volcanology", "Meteorology", "Geology"],
        "options_hi": ["भूकंप विज्ञान", "ज्वालामुखी विज्ञान", "मौसम विज्ञान", "भूविज्ञान"],
        "answer_en": "Seismology",
        "answer_hi": "भूकंप विज्ञान",
        "attempted": false,
        "selected": ""
    }
        
// Add more questions here...
];


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