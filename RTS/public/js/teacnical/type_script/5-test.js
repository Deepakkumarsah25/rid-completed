const questions = [
    {
        "num": 1,
        "question_en": "A body is thrown horizontally from a height of 20m with speed 10m/s. Its time of flight is:",
        "question_hi": "एक पिंड को 20m की ऊँचाई से 10m/s की गति से क्षैतिज रूप से फेंका जाता है। इसका उड़ान काल है:",
        "options_en": ["1s", "2s", "3s", "4s"],
        "options_hi": ["1s", "2s", "3s", "4s"],
        "answer_en": "2s",
        "answer_hi": "2s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The SI unit of power is:",
        "question_hi": "शक्ति की SI इकाई है:",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A concave mirror forms an image twice the size of object at 30cm. Focal length is:",
        "question_hi": "एक अवतल दर्पण वस्तु के आकार से दोगुना प्रतिबिंब 30cm पर बनाता है। फोकस दूरी है:",
        "options_en": ["10cm", "15cm", "20cm", "25cm"],
        "options_hi": ["10cm", "15cm", "20cm", "25cm"],
        "answer_en": "10cm",
        "answer_hi": "10cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The dimensional formula of energy is:",
        "question_hi": "ऊर्जा का विमीय सूत्र है:",
        "options_en": ["[ML²T⁻²]", "[MLT⁻²]", "[ML⁻¹T⁻²]", "[MLT⁻¹]"],
        "options_hi": ["[ML²T⁻²]", "[MLT⁻²]", "[ML⁻¹T⁻²]", "[MLT⁻¹]"],
        "answer_en": "[ML²T⁻²]",
        "answer_hi": "[ML²T⁻²]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A body of mass 5kg has velocity 4m/s. Its kinetic energy is:",
        "question_hi": "5kg द्रव्यमान के एक पिंड का वेग 4m/s है। इसकी गतिज ऊर्जा है:",
        "options_en": ["20J", "30J", "40J", "50J"],
        "options_hi": ["20J", "30J", "40J", "50J"],
        "answer_en": "40J",
        "answer_hi": "40J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The SI unit of resistance is:",
        "question_hi": "प्रतिरोध की SI इकाई है:",
        "options_en": ["Ohm", "Volt", "Ampere", "Coulomb"],
        "options_hi": ["ओम", "वोल्ट", "एम्पियर", "कूलॉम"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "A train accelerates from 10m/s to 30m/s in 10s. Its acceleration is:",
        "question_hi": "एक रेलगाड़ी 10m/s से 30m/s तक 10s में त्वरित होती है। इसका त्वरण है:",
        "options_en": ["1m/s²", "2m/s²", "3m/s²", "4m/s²"],
        "options_hi": ["1m/s²", "2m/s²", "3m/s²", "4m/s²"],
        "answer_en": "2m/s²",
        "answer_hi": "2m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The critical angle for glass-air interface is 42°. Its refractive index is:",
        "question_hi": "कांच-वायु अंतरापृष्ठ के लिए क्रांतिक कोण 42° है। इसका अपवर्तनांक है:",
        "options_en": ["1.5", "1.6", "1.7", "1.8"],
        "options_hi": ["1.5", "1.6", "1.7", "1.8"],
        "answer_en": "1.5",
        "answer_hi": "1.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Two capacitors 2μF and 3μF are connected in series. Equivalent capacitance is:",
        "question_hi": "दो संधारित्र 2μF और 3μF श्रेणीक्रम में जुड़े हैं। तुल्य धारिता है:",
        "options_en": ["1.2μF", "2.5μF", "5μF", "6μF"],
        "options_hi": ["1.2μF", "2.5μF", "5μF", "6μF"],
        "answer_en": "1.2μF",
        "answer_hi": "1.2μF",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which law states that heat cannot flow from colder to hotter body?",
        "question_hi": "कौन सा नियम कहता है कि ऊष्मा ठंडे से गर्म पिंड में नहीं बह सकती?",
        "options_en": ["First law", "Second law", "Zeroth law", "Third law"],
        "options_hi": ["प्रथम नियम", "द्वितीय नियम", "शून्यवाँ नियम", "तृतीय नियम"],
        "answer_en": "Second law",
        "answer_hi": "द्वितीय नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Unit of inductance is:",
        "question_hi": "प्रेरकत्व की इकाई है:",
        "options_en": ["Henry", "Farad", "Tesla", "Weber"],
        "options_hi": ["हेनरी", "फैरड", "टेस्ला", "वेबर"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "A spring of constant 100N/m is stretched by 0.1m. Energy stored is:",
        "question_hi": "100N/m स्थिरांक वाली एक स्प्रिंग 0.1m तक खिंचती है। संचित ऊर्जा है:",
        "options_en": ["0.5J", "1J", "2J", "5J"],
        "options_hi": ["0.5J", "1J", "2J", "5J"],
        "answer_en": "0.5J",
        "answer_hi": "0.5J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Magnetic field inside a long solenoid is:",
        "question_hi": "एक लंबी परिनालिका के अंदर चुंबकीय क्षेत्र है:",
        "options_en": ["Zero", "Uniform", "Non-uniform", "Radial"],
        "options_hi": ["शून्य", "एकसमान", "असमान", "रेडियल"],
        "answer_en": "Uniform",
        "answer_hi": "एकसमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "When light passes through prism, it suffers:",
        "question_hi": "जब प्रकाश प्रिज्म से गुजरता है, तो यह ग्रस्त होता है:",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Both refraction and dispersion"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "अपवर्तन और विक्षेपण दोनों"],
        "answer_en": "Both refraction and dispersion",
        "answer_hi": "अपवर्तन और विक्षेपण दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Orbital velocity of satellite near Earth's surface is:",
        "question_hi": "पृथ्वी की सतह के निकट उपग्रह का कक्षीय वेग है:",
        "options_en": ["7.9km/s", "8.9km/s", "9.8km/s", "11.2km/s"],
        "options_hi": ["7.9km/s", "8.9km/s", "9.8km/s", "11.2km/s"],
        "answer_en": "7.9km/s",
        "answer_hi": "7.9km/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Three resistors 4Ω, 6Ω, 12Ω are connected in parallel. Equivalent resistance is:",
        "question_hi": "तीन प्रतिरोध 4Ω, 6Ω, 12Ω समानांतर में जुड़े हैं। तुल्य प्रतिरोध है:",
        "options_en": ["1Ω", "2Ω", "3Ω", "4Ω"],
        "options_hi": ["1Ω", "2Ω", "3Ω", "4Ω"],
        "answer_en": "2Ω",
        "answer_hi": "2Ω",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which is paramagnetic?",
        "question_hi": "कौन पैरामैग्नेटिक है?",
        "options_en": ["O₂", "N₂", "CO₂", "H₂O"],
        "options_hi": ["O₂", "N₂", "CO₂", "H₂O"],
        "answer_en": "O₂",
        "answer_hi": "O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "A 100W bulb operates for 10 hours. Energy consumed is:",
        "question_hi": "एक 100W का बल्ब 10 घंटे तक चलता है। उपभुक्त ऊर्जा है:",
        "options_en": ["0.1kWh", "0.5kWh", "1kWh", "2kWh"],
        "options_hi": ["0.1kWh", "0.5kWh", "1kWh", "2kWh"],
        "answer_en": "1kWh",
        "answer_hi": "1kWh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "In interference pattern, constructive interference occurs when path difference is:",
        "question_hi": "व्यतिकरण पैटर्न में, रचनात्मक व्यतिकरण होता है जब पथांतर होता है:",
        "options_en": ["nλ", "(n+½)λ", "λ/2", "λ/4"],
        "options_hi": ["nλ", "(n+½)λ", "λ/2", "λ/4"],
        "answer_en": "nλ",
        "answer_hi": "nλ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Time period of simple pendulum is 2s. Its length is about:",
        "question_hi": "सरल लोलक का आवर्तकाल 2s है। इसकी लंबाई लगभग है:",
        "options_en": ["0.5m", "1m", "1.5m", "2m"],
        "options_hi": ["0.5m", "1m", "1.5m", "2m"],
        "answer_en": "1m",
        "answer_hi": "1m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Maximum number of electrons in f-subshell is:",
        "question_hi": "f-उपकोश में इलेक्ट्रॉनों की अधिकतम संख्या है:",
        "options_en": ["2", "6", "10", "14"],
        "options_hi": ["2", "6", "10", "14"],
        "answer_en": "14",
        "answer_hi": "14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Magnetic field due to circular coil is maximum at:",
        "question_hi": "वृत्ताकार कुंडली के कारण चुंबकीय क्षेत्र अधिकतम होता है:",
        "options_en": ["Center", "Edge", "Outside", "Everywhere same"],
        "options_hi": ["केंद्र", "किनारे", "बाहर", "हर जगह समान"],
        "answer_en": "Center",
        "answer_hi": "केंद्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which has linear shape?",
        "question_hi": "किसकी रैखिक आकृति है?",
        "options_en": ["H₂O", "NH₃", "CO₂", "CH₄"],
        "options_hi": ["H₂O", "NH₃", "CO₂", "CH₄"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Order of differential equation d²y/dx² + 3dy/dx + 2y = 0 is:",
        "question_hi": "अवकल समीकरण d²y/dx² + 3dy/dx + 2y = 0 की कोटि है:",
        "options_en": ["1", "2", "3", "0"],
        "options_hi": ["1", "2", "3", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "For convex mirror, image is always:",
        "question_hi": "उत्तल दर्पण के लिए, प्रतिबिंब हमेशा होता है:",
        "options_en": ["Real", "Virtual", "Inverted", "Magnified"],
        "options_hi": ["वास्तविक", "आभासी", "उल्टा", "आवर्धित"],
        "answer_en": "Virtual",
        "answer_hi": "आभासी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Oxidation state of sulfur in H₂SO₄ is:",
        "question_hi": "H₂SO₄ में सल्फर की ऑक्सीकरण अवस्था है:",
        "options_en": ["+2", "+4", "+6", "+8"],
        "options_hi": ["+2", "+4", "+6", "+8"],
        "answer_en": "+6",
        "answer_hi": "+6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which shows hydrogen bonding?",
        "question_hi": "कौन हाइड्रोजन आबंध दर्शाता है?",
        "options_en": ["CH₄", "HCl", "NH₃", "NaCl"],
        "options_hi": ["CH₄", "HCl", "NH₃", "NaCl"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "IUPAC name of CH₃-CH₂-COOH is:",
        "question_hi": "CH₃-CH₂-COOH का IUPAC नाम है:",
        "options_en": ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
        "options_hi": ["मेथेनोइक अम्ल", "एथेनोइक अम्ल", "प्रोपेनोइक अम्ल", "ब्यूटेनोइक अम्ल"],
        "answer_en": "Propanoic acid",
        "answer_hi": "प्रोपेनोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Number of σ bonds in CH₄ is:",
        "question_hi": "CH₄ में σ बंधों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which is radioactive?",
        "question_hi": "कौन रेडियोधर्मी है?",
        "options_en": ["Uranium", "Iron", "Copper", "Silver"],
        "options_hi": ["यूरेनियम", "लोहा", "तांबा", "चांदी"],
        "answer_en": "Uranium",
        "answer_hi": "यूरेनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "pH of 0.001M HCl is:",
        "question_hi": "0.001M HCl का pH है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Element with electronic configuration 2,8,3 is:",
        "question_hi": "इलेक्ट्रॉनिक विन्यास 2,8,3 वाला तत्व है:",
        "options_en": ["Aluminum", "Silicon", "Phosphorus", "Sulfur"],
        "options_hi": ["एल्युमिनियम", "सिलिकॉन", "फास्फोरस", "सल्फर"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Hybridization in BeCl₂ is:",
        "question_hi": "BeCl₂ में संकरण है:",
        "options_en": ["sp", "sp²", "sp³", "sp³d"],
        "options_hi": ["sp", "sp²", "sp³", "sp³d"],
        "answer_en": "sp",
        "answer_hi": "sp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which acts as both oxidizing and reducing agent?",
        "question_hi": "कौन ऑक्सीकारक और अपचायक दोनों के रूप में कार्य करता है?",
        "options_en": ["KMnO₄", "H₂O₂", "K₂Cr₂O₇", "O₃"],
        "options_hi": ["KMnO₄", "H₂O₂", "K₂Cr₂O₇", "O₃"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Molecular formula of sucrose is:",
        "question_hi": "सुक्रोज का आणविक सूत्र है:",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₁₂H₂₂O₁₁",
        "answer_hi": "C₁₂H₂₂O₁₁",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Optical isomers rotate:",
        "question_hi": "प्रकाशिक समावयवी घुमाते हैं:",
        "options_en": ["Electric field", "Magnetic field", "Plane polarized light", "Unpolarized light"],
        "options_hi": ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "समतल ध्रुवित प्रकाश", "अध्रुवित प्रकाश"],
        "answer_en": "Plane polarized light",
        "answer_hi": "समतल ध्रुवित प्रकाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Bond angle in CO₂ is:",
        "question_hi": "CO₂ में बंध कोण है:",
        "options_en": ["90°", "104.5°", "109.5°", "180°"],
        "options_hi": ["90°", "104.5°", "109.5°", "180°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Fehling's test is used for:",
        "question_hi": "फेहलिंग परीक्षण उपयोग किया जाता है:",
        "options_en": ["Aldehydes", "Ketones", "Alcohols", "Carboxylic acids"],
        "options_hi": ["एल्डिहाइड", "कीटोन", "अल्कोहल", "कार्बोक्सिलिक अम्ल"],
        "answer_en": "Aldehydes",
        "answer_hi": "एल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Coordination number in NaCl crystal is:",
        "question_hi": "NaCl क्रिस्टल में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Most stable carbanion is:",
        "question_hi": "सबसे स्थिर कार्बैनायन है:",
        "options_en": ["Methyl", "Primary", "Secondary", "Tertiary"],
        "options_hi": ["मेथिल", "प्राथमिक", "द्वितीयक", "तृतीयक"],
        "answer_en": "Primary",
        "answer_hi": "प्राथमिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Schottky defect is observed in:",
        "question_hi": "शॉट्की दोष देखा जाता है:",
        "options_en": ["NaCl", "AgBr", "ZnS", "CaF₂"],
        "options_hi": ["NaCl", "AgBr", "ZnS", "CaF₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Number of structural isomers for C₅H₁₂ is:",
        "question_hi": "C₅H₁₂ के लिए संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 43,
        "question_en": "Complex showing geometrical isomerism is:",
        "question_hi": "ज्यामितीय समावयवता दर्शाने वाला संकुल है:",
        "options_en": ["[Co(NH₃)₆]³⁺", "[Ni(CO)₄]", "[Pt(NH₃)₂Cl₂]", "[Fe(CN)₆]⁴⁻"],
        "options_hi": ["[Co(NH₃)₆]³⁺", "[Ni(CO)₄]", "[Pt(NH₃)₂Cl₂]", "[Fe(CN)₆]⁴⁻"],
        "answer_en": "[Pt(NH₃)₂Cl₂]",
        "answer_hi": "[Pt(NH₃)₂Cl₂]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Strongest base among NH₃, CH₃NH₂, (CH₃)₂NH is:",
        "question_hi": "NH₃, CH₃NH₂, (CH₃)₂NH में सबसे प्रबल क्षार है:",
        "options_en": ["NH₃", "CH₃NH₂", "(CH₃)₂NH", "All equal"],
        "options_hi": ["NH₃", "CH₃NH₂", "(CH₃)₂NH", "सभी समान"],
        "answer_en": "(CH₃)₂NH",
        "answer_hi": "(CH₃)₂NH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Number of π bonds in benzene ring is:",
        "question_hi": "बेंजीन वलय में π बंधों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "IUPAC name of CH₃-O-CH₃ is:",
        "question_hi": "CH₃-O-CH₃ का IUPAC नाम है:",
        "options_en": ["Methanol", "Ethanol", "Dimethyl ether", "Methoxy methane"],
        "options_hi": ["मेथनॉल", "एथनॉल", "डाइमेथिल ईथर", "मेथॉक्सी मीथेन"],
        "answer_en": "Methoxy methane",
        "answer_hi": "मेथॉक्सी मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Normality of 0.1M H₂SO₄ is:",
        "question_hi": "0.1M H₂SO₄ की नॉर्मलता है:",
        "options_en": ["0.05N", "0.1N", "0.2N", "0.5N"],
        "options_hi": ["0.05N", "0.1N", "0.2N", "0.5N"],
        "answer_en": "0.2N",
        "answer_hi": "0.2N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Element with highest electron affinity is:",
        "question_hi": "सबसे अधिक इलेक्ट्रॉन बंधुता वाला तत्व है:",
        "options_en": ["Fluorine", "Chlorine", "Bromine", "Iodine"],
        "options_hi": ["फ्लोरीन", "क्लोरीन", "ब्रोमीन", "आयोडीन"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Ostwald process is used for manufacture of:",
        "question_hi": "ओस्टवाल्ड प्रक्रिया का उपयोग किया जाता है:",
        "options_en": ["Ammonia", "Sulfuric acid", "Nitric acid", "Hydrochloric acid"],
        "options_hi": ["अमोनिया", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Nitric acid",
        "answer_hi": "नाइट्रिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Highest boiling point among CH₄, SiH₄, GeH₄, SnH₄ is of:",
        "question_hi": "CH₄, SiH₄, GeH₄, SnH₄ में सबसे अधिक क्वथनांक किसका है?",
        "options_en": ["CH₄", "SiH₄", "GeH₄", "SnH₄"],
        "options_hi": ["CH₄", "SiH₄", "GeH₄", "SnH₄"],
        "answer_en": "SnH₄",
        "answer_hi": "SnH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "In Bohr model, radius of first orbit is proportional to:",
        "question_hi": "बोहर मॉडल में, पहली कक्षा की त्रिज्या समानुपाती है:",
        "options_en": ["n", "n²", "1/n", "1/n²"],
        "options_hi": ["n", "n²", "1/n", "1/n²"],
        "answer_en": "n²",
        "answer_hi": "n²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Bond angle in BF₃ is:",
        "question_hi": "BF₃ में बंध कोण है:",
        "options_en": ["90°", "107°", "109.5°", "120°"],
        "options_hi": ["90°", "107°", "109.5°", "120°"],
        "answer_en": "120°",
        "answer_hi": "120°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Enantiomers are:",
        "question_hi": "एनैन्शियोमर्स हैं:",
        "options_en": ["Identical", "Mirror images", "Geometrical isomers", "Conformers"],
        "options_hi": ["समान", "दर्पण प्रतिबिंब", "ज्यामितीय समावयवी", "कंफॉर्मर्स"],
        "answer_en": "Mirror images",
        "answer_hi": "दर्पण प्रतिबिंब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Number of chain isomers for C₄H₁₀ is:",
        "question_hi": "C₄H₁₀ के लिए श्रृंखला समावयवियों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which affects osmotic pressure?",
        "question_hi": "कौन परासरण दाब को प्रभावित करता है?",
        "options_en": ["Nature of solute", "Nature of solvent", "Temperature", "All of these"],
        "options_hi": ["विलेय की प्रकृति", "विलायक की प्रकृति", "तापमान", "ये सभी"],
        "answer_en": "Temperature",
        "answer_hi": "तापमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Number of unpaired electrons in N₂ is:",
        "question_hi": "N₂ में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Geometry of H₂O is:",
        "question_hi": "H₂O की ज्यामिति है:",
        "options_en": ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
        "options_hi": ["रैखिक", "त्रिकोणीय समतलीय", "चतुष्फलकीय", "मुड़ा हुआ"],
        "answer_en": "Bent",
        "answer_hi": "मुड़ा हुआ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Example of natural polymer is:",
        "question_hi": "प्राकृतिक बहुलक का उदाहरण है:",
        "options_en": ["Polythene", "PVC", "Cellulose", "Nylon"],
        "options_hi": ["पॉलिथीन", "PVC", "सेलूलोज़", "नायलॉन"],
        "answer_en": "Cellulose",
        "answer_hi": "सेलूलोज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Equivalent weight of KMnO₄ in acidic medium is:",
        "question_hi": "अम्लीय माध्यम में KMnO₄ का तुल्यांकी भार है:",
        "options_en": ["M/5", "M/3", "M/2", "M"],
        "options_hi": ["M/5", "M/3", "M/2", "M"],
        "answer_en": "M/5",
        "answer_hi": "M/5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Chloroform is:",
        "question_hi": "क्लोरोफॉर्म है:",
        "options_en": ["CHCl₃", "CH₂Cl₂", "CCl₄", "CH₃Cl"],
        "options_hi": ["CHCl₃", "CH₂Cl₂", "CCl₄", "CH₃Cl"],
        "answer_en": "CHCl₃",
        "answer_hi": "CHCl₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Number of real roots of x² + 1 = 0 is:",
        "question_hi": "x² + 1 = 0 के वास्तविक मूलों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Common difference of AP: 2,5,8,11,... is:",
        "question_hi": "समांतर श्रेणी: 2,5,8,11,... का सार्व अंतर है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Number of ways to select 2 out of 5 is:",
        "question_hi": "5 में से 2 चुनने के तरीकों की संख्या है:",
        "options_en": ["5", "10", "15", "20"],
        "options_hi": ["5", "10", "15", "20"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Value of ∫(sin x) dx is:",
        "question_hi": "∫(sin x) dx का मान है:",
        "options_en": ["cos x + C", "-cos x + C", "sin x + C", "-sin x + C"],
        "options_hi": ["cos x + C", "-cos x + C", "sin x + C", "-sin x + C"],
        "answer_en": "-cos x + C",
        "answer_hi": "-cos x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "If P(A) = 0.4, P(B) = 0.3 and A,B independent, then P(A∩B) is:",
        "question_hi": "यदि P(A) = 0.4, P(B) = 0.3 और A,B स्वतंत्र हैं, तो P(A∩B) है:",
        "options_en": ["0.12", "0.2", "0.3", "0.4"],
        "options_hi": ["0.12", "0.2", "0.3", "0.4"],
        "answer_en": "0.12",
        "answer_hi": "0.12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Derivative of x³ at x=2 is:",
        "question_hi": "x=2 पर x³ का अवकलज है:",
        "options_en": ["6", "8", "12", "16"],
        "options_hi": ["6", "8", "12", "16"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Equation of circle with center (0,0) and radius 5 is:",
        "question_hi": "केंद्र (0,0) और त्रिज्या 5 वाले वृत्त का समीकरण है:",
        "options_en": ["x² + y² = 5", "x² + y² = 25", "x² + y² = 50", "x² + y² = 100"],
        "options_hi": ["x² + y² = 5", "x² + y² = 25", "x² + y² = 50", "x² + y² = 100"],
        "answer_en": "x² + y² = 25",
        "answer_hi": "x² + y² = 25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Value of lim(x→1) (x²-1)/(x-1) is:",
        "question_hi": "lim(x→1) (x²-1)/(x-1) का मान है:",
        "options_en": ["0", "1", "2", "∞"],
        "options_hi": ["0", "1", "2", "∞"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "If a = i + j, then |a| is:",
        "question_hi": "यदि a = i + j, तो |a| है:",
        "options_en": ["1", "√2", "2", "√3"],
        "options_hi": ["1", "√2", "2", "√3"],
        "answer_en": "√2",
        "answer_hi": "√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Area of triangle with vertices (0,0), (3,0), (0,4) is:",
        "question_hi": "शीर्ष (0,0), (3,0), (0,4) वाले त्रिभुज का क्षेत्रफल है:",
        "options_en": ["6", "8", "10", "12"],
        "options_hi": ["6", "8", "10", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Limit of (1-cos x)/x as x→0 is:",
        "question_hi": "जब x → 0 होता है, तब (1-cos x)/x का मान है:",
        "options_en": ["0", "1", "2", "∞"],
        "options_hi": ["0", "1", "2", "∞"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Sum of first 20 natural numbers is:",
        "question_hi": "पहली 20 प्राकृत संख्याओं का योग है:",
        "options_en": ["190", "200", "210", "220"],
        "options_hi": ["190", "200", "210", "220"],
        "answer_en": "210",
        "answer_hi": "210",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Value of sec²θ - tan²θ is:",
        "question_hi": "sec²θ - tan²θ का मान है:",
        "options_en": ["0", "1", "2", "sin²θ"],
        "options_hi": ["0", "1", "2", "sin²θ"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "If A = [[0,1],[-1,0]], then A² is:",
        "question_hi": "यदि A = [[0,1],[-1,0]] है, तो A² है:",
        "options_en": ["[[1,0],[0,1]]", "[[-1,0],[0,-1]]", "[[0,-1],[1,0]]", "[[0,1],[1,0]]"],
        "options_hi": ["[[1,0],[0,1]]", "[[-1,0],[0,-1]]", "[[0,-1],[1,0]]", "[[0,1],[1,0]]"],
        "answer_en": "[[-1,0],[0,-1]]",
        "answer_hi": "[[-1,0],[0,-1]]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Integral ∫(1/(1+x²)) dx is:",
        "question_hi": "∫(1/(1+x²)) dx का हल है:",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "ln|1+x²| + C", "sin⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "ln|1+x²| + C", "sin⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "If log₁₀5 = 0.6990, then log₁₀20 is:",
        "question_hi": "यदि log₁₀5 = 0.6990, तो log₁₀20 है:",
        "options_en": ["1.3010", "1.6990", "2.3010", "2.6990"],
        "options_hi": ["1.3010", "1.6990", "2.3010", "2.6990"],
        "answer_en": "1.3010",
        "answer_hi": "1.3010",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Derivative of sin(2x) is:",
        "question_hi": "sin(2x) का अवकलज है:",
        "options_en": ["cos(2x)", "2cos(2x)", "2sin x cos x", "-2cos(2x)"],
        "options_hi": ["cos(2x)", "2cos(2x)", "2sin x cos x", "-2cos(2x)"],
        "answer_en": "2cos(2x)",
        "answer_hi": "2cos(2x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Function f(x) = |x| is continuous at:",
        "question_hi": "फलन f(x) = |x| सतत है:",
        "options_en": ["x=0 only", "All points", "No point", "x>0 only"],
        "options_hi": ["केवल x=0", "सभी बिंदुओं पर", "किसी बिंदु पर नहीं", "केवल x>0"],
        "answer_en": "All points",
        "answer_hi": "सभी बिंदुओं पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Coefficient of x² in (1+x)⁵ is:",
        "question_hi": "(1+x)⁵ में x² का गुणांक है:",
        "options_en": ["5", "10", "15", "20"],
        "options_hi": ["5", "10", "15", "20"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Solution of dy/dx = eˣ is:",
        "question_hi": "dy/dx = eˣ का हल है:",
        "options_en": ["y = eˣ + C", "y = eˣ", "y = ln x + C", "y = x + C"],
        "options_hi": ["y = eˣ + C", "y = eˣ", "y = ln x + C", "y = x + C"],
        "answer_en": "y = eˣ + C",
        "answer_hi": "y = eˣ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Value of sin(30°) is:",
        "question_hi": "sin(30°) का मान है:",
        "options_en": ["0", "1/2", "1/√2", "√3/2"],
        "options_hi": ["0", "1/2", "1/√2", "√3/2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Distance between lines x=2 and x=5 is:",
        "question_hi": "रेखाओं x=2 और x=5 के बीच की दूरी है:",
        "options_en": ["2", "3", "5", "7"],
        "options_hi": ["2", "3", "5", "7"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Number of vertices in cube is:",
        "question_hi": "घन में शीर्षों की संख्या है:",
        "options_en": ["6", "8", "12", "24"],
        "options_hi": ["6", "8", "12", "24"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Sum of series 1+2+3+...+n is:",
        "question_hi": "श्रेणी 1+2+3+...+n का योग है:",
        "options_en": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "options_hi": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "answer_en": "n(n+1)/2",
        "answer_hi": "n(n+1)/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Value of ∫(0 to π) sin x dx is:",
        "question_hi": "0 से π तक ∫sin x dx का मान है:",
        "options_en": ["0", "1", "2", "π"],
        "options_hi": ["0", "1", "2", "π"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Equation of x-axis is:",
        "question_hi": "x-अक्ष का समीकरण है:",
        "options_en": ["x=0", "y=0", "x=y", "x+y=0"],
        "options_hi": ["x=0", "y=0", "x=y", "x+y=0"],
        "answer_en": "y=0",
        "answer_hi": "y=0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "If tan θ = 1, then θ is:",
        "question_hi": "यदि tan θ = 1, तो θ है:",
        "options_en": ["30°", "45°", "60°", "90°"],
        "options_hi": ["30°", "45°", "60°", "90°"],
        "answer_en": "45°",
        "answer_hi": "45°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "General term in binomial expansion is:",
        "question_hi": "द्विपद प्रसार में व्यापक पद है:",
        "options_en": ["ⁿCᵣ", "ⁿCᵣ aʳ", "ⁿCᵣ aⁿ⁻ʳ bʳ", "ⁿCᵣ aʳ bⁿ⁻ʳ"],
        "options_hi": ["ⁿCᵣ", "ⁿCᵣ aʳ", "ⁿCᵣ aⁿ⁻ʳ bʳ", "ⁿCᵣ aʳ bⁿ⁻ʳ"],
        "answer_en": "ⁿCᵣ aⁿ⁻ʳ bʳ",
        "answer_hi": "ⁿCᵣ aⁿ⁻ʳ bʳ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Value of cos(0°) is:",
        "question_hi": "cos(0°) का मान है:",
        "options_en": ["0", "1", "1/2", "√3/2"],
        "options_hi": ["0", "1", "1/2", "√3/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Solution of x + 2 = 5 is:",
        "question_hi": "समीकरण x + 2 = 5 का हल है:",
        "options_en": ["x=1", "x=2", "x=3", "x=4"],
        "options_hi": ["x=1", "x=2", "x=3", "x=4"],
        "answer_en": "x=3",
        "answer_hi": "x=3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "A body in uniform circular motion has:",
        "question_hi": "एकसमान वृत्तीय गति में एक पिंड में होता है:",
        "options_en": ["Constant velocity", "Constant acceleration", "Variable acceleration", "Zero acceleration"],
        "options_hi": ["नियत वेग", "नियत त्वरण", "परिवर्ती त्वरण", "शून्य त्वरण"],
        "answer_en": "Variable acceleration",
        "answer_hi": "परिवर्ती त्वरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Unit of capacitance is:",
        "question_hi": "धारिता की इकाई है:",
        "options_en": ["Farad", "Henry", "Ohm", "Tesla"],
        "options_hi": ["फैरड", "हेनरी", "ओम", "टेस्ला"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Unit of wavelength is:",
        "question_hi": "तरंगदैर्ध्य की इकाई है:",
        "options_en": ["Meter", "Hertz", "Second", "Newton"],
        "options_hi": ["मीटर", "हर्ट्ज", "सेकंड", "न्यूटन"],
        "answer_en": "Meter",
        "answer_hi": "मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Planck's constant has unit:",
        "question_hi": "प्लांक नियतांक की इकाई है:",
        "options_en": ["Js", "J/s", "Jm", "J/m"],
        "options_hi": ["Js", "J/s", "Jm", "J/m"],
        "answer_en": "Js",
        "answer_hi": "Js",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "In nuclear fusion, energy is released when:",
        "question_hi": "नाभिकीय संलयन में, ऊर्जा मुक्त होती है जब:",
        "options_en": ["Heavy nuclei split", "Light nuclei combine", "Electrons are emitted", "Protons decay"],
        "options_hi": ["भारी नाभिक विखंडित होते हैं", "हल्के नाभिक संयोजित होते हैं", "इलेक्ट्रॉन उत्सर्जित होते हैं", "प्रोटॉन क्षय होते हैं"],
        "answer_en": "Light nuclei combine",
        "answer_hi": "हल्के नाभिक संयोजित होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "A transformer works on principle of:",
        "question_hi": "एक ट्रांसफॉर्मर कार्य करता है सिद्धांत पर:",
        "options_en": ["Ohm's law", "Faraday's law", "Coulomb's law", "Ampere's law"],
        "options_hi": ["ओम का नियम", "फैराडे का नियम", "कूलॉम का नियम", "एम्पियर का नियम"],
        "answer_en": "Faraday's law",
        "answer_hi": "फैराडे का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "For a projectile, horizontal range is maximum when angle is:",
        "question_hi": "एक प्रक्षेप्य के लिए, क्षैतिज परास अधिकतम होता है जब कोण होता है:",
        "options_en": ["30°", "45°", "60°", "75°"],
        "options_hi": ["30°", "45°", "60°", "75°"],
        "answer_en": "45°",
        "answer_hi": "45°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "In isothermal process:",
        "question_hi": "समतापी प्रक्रम में:",
        "options_en": ["Temperature constant", "Pressure constant", "Volume constant", "All constant"],
        "options_hi": ["तापमान नियत", "दाब नियत", "आयतन नियत", "सभी नियत"],
        "answer_en": "Temperature constant",
        "answer_hi": "तापमान नियत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Snell's law relates:",
        "question_hi": "स्नेल का नियम संबंधित करता है:",
        "options_en": ["Current and voltage", "Angle and refractive index", "Force and acceleration", "Mass and energy"],
        "options_hi": ["धारा और वोल्टेज", "कोण और अपवर्तनांक", "बल और त्वरण", "द्रव्यमान और ऊर्जा"],
        "answer_en": "Angle and refractive index",
        "answer_hi": "कोण और अपवर्तनांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "In photoelectric effect, stopping potential depends on:",
        "question_hi": "प्रकाश विद्युत प्रभाव में, निरोधी विभव निर्भर करता है:",
        "options_en": ["Intensity of light", "Frequency of light", "Both", "None"],
        "options_hi": ["प्रकाश की तीव्रता", "प्रकाश की आवृत्ति", "दोनों", "कोई नहीं"],
        "answer_en": "Frequency of light",
        "answer_hi": "प्रकाश की आवृत्ति",
        "attempted": false,
        "selected": ""
    }
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