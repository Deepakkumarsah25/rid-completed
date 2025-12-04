const questions = [
    {
        "num": 1,
        "question_en": "A particle moves along a straight line with velocity v = 3t² - 6t m/s. The distance covered in first 3 seconds is:",
        "question_hi": "एक कण सीधी रेखा में वेग v = 3t² - 6t m/s से गति करता है। पहले 3 सेकंड में तय की गई दूरी है:",
        "options_en": ["9 m", "12 m", "15 m", "18 m"],
        "options_hi": ["9 मी", "12 मी", "15 मी", "18 मी"],
        "answer_en": "9 m",
        "answer_hi": "9 मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The work done in moving a charge of 5 C between two points having potential difference of 20 V is:",
        "question_hi": "20 V के विभवांतर वाले दो बिंदुओं के बीच 5 C आवेश को ले जाने में किया गया कार्य है:",
        "options_en": ["50 J", "100 J", "150 J", "200 J"],
        "options_hi": ["50 J", "100 J", "150 J", "200 J"],
        "answer_en": "100 J",
        "answer_hi": "100 J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A convex lens of focal length 15 cm forms an image at 30 cm. The object distance is:",
        "question_hi": "15 cm फोकस दूरी वाले उत्तल लेंस द्वारा 30 cm पर प्रतिबिंब बनता है। वस्तु दूरी है:",
        "options_en": ["10 cm", "20 cm", "30 cm", "40 cm"],
        "options_hi": ["10 सेमी", "20 सेमी", "30 सेमी", "40 सेमी"],
        "answer_en": "30 cm",
        "answer_hi": "30 सेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The dimensional formula of pressure is:",
        "question_hi": "दाब का विमीय सूत्र है:",
        "options_en": ["[MLT⁻²]", "[ML⁻¹T⁻²]", "[ML²T⁻²]", "[MLT⁻¹]"],
        "options_hi": ["[MLT⁻²]", "[ML⁻¹T⁻²]", "[ML²T⁻²]", "[MLT⁻¹]"],
        "answer_en": "[ML⁻¹T⁻²]",
        "answer_hi": "[ML⁻¹T⁻²]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A body of mass 5 kg is moving with velocity 4 m/s. Its momentum is:",
        "question_hi": "5 kg द्रव्यमान का एक पिंड 4 m/s के वेग से गतिमान है। इसका संवेग है:",
        "options_en": ["10 kg m/s", "15 kg m/s", "20 kg m/s", "25 kg m/s"],
        "options_hi": ["10 kg m/s", "15 kg m/s", "20 kg m/s", "25 kg m/s"],
        "answer_en": "20 kg m/s",
        "answer_hi": "20 kg m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The SI unit of electric current is:",
        "question_hi": "विद्युत धारा की SI इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Coulomb"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "कूलॉम"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "A car accelerates from 10 m/s to 30 m/s in 5 seconds. Its acceleration is:",
        "question_hi": "एक कार 10 m/s से 30 m/s तक 5 सेकंड में त्वरित होती है। इसका त्वरण है:",
        "options_en": ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
        "options_hi": ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
        "answer_en": "4 m/s²",
        "answer_hi": "4 m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The refractive index of glass is 1.5. The speed of light in glass is:",
        "question_hi": "कांच का अपवर्तनांक 1.5 है। कांच में प्रकाश की गति है:",
        "options_en": ["1.5 × 10⁸ m/s", "2.0 × 10⁸ m/s", "2.5 × 10⁸ m/s", "3.0 × 10⁸ m/s"],
        "options_hi": ["1.5 × 10⁸ m/s", "2.0 × 10⁸ m/s", "2.5 × 10⁸ m/s", "3.0 × 10⁸ m/s"],
        "answer_en": "2.0 × 10⁸ m/s",
        "answer_hi": "2.0 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The energy stored in a capacitor of capacitance 20 μF charged to 100 V is:",
        "question_hi": "100 V पर आवेशित 20 μF धारिता वाले संधारित्र में संचित ऊर्जा है:",
        "options_en": ["0.05 J", "0.1 J", "0.15 J", "0.2 J"],
        "options_hi": ["0.05 J", "0.1 J", "0.15 J", "0.2 J"],
        "answer_en": "0.1 J",
        "answer_hi": "0.1 J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which law of thermodynamics defines temperature?",
        "question_hi": "ऊष्मागतिकी का कौन सा नियम तापमान को परिभाषित करता है?",
        "options_en": ["First Law", "Second Law", "Zeroth Law", "Third Law"],
        "options_hi": ["प्रथम नियम", "द्वितीय नियम", "शून्यवाँ नियम", "तृतीय नियम"],
        "answer_en": "Zeroth Law",
        "answer_hi": "शून्यवाँ नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The unit of electric field intensity is:",
        "question_hi": "विद्युत क्षेत्र की तीव्रता की इकाई है:",
        "options_en": ["N/C", "J/C", "V/m", "Both N/C and V/m"],
        "options_hi": ["N/C", "J/C", "V/m", "N/C और V/m दोनों"],
        "answer_en": "Both N/C and V/m",
        "answer_hi": "N/C और V/m दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "A body of mass 3 kg has kinetic energy 24 J. Its velocity is:",
        "question_hi": "3 kg द्रव्यमान के एक पिंड की गतिज ऊर्जा 24 J है। इसका वेग है:",
        "options_en": ["2 m/s", "3 m/s", "4 m/s", "5 m/s"],
        "options_hi": ["2 m/s", "3 m/s", "4 m/s", "5 m/s"],
        "answer_en": "4 m/s",
        "answer_hi": "4 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The force on a charge q in electric field E is:",
        "question_hi": "विद्युत क्षेत्र E में आवेश q पर बल है:",
        "options_en": ["qE", "E/q", "q²E", "q/E"],
        "options_hi": ["qE", "E/q", "q²E", "q/E"],
        "answer_en": "qE",
        "answer_hi": "qE",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The wavelength of light decreases by 20% in a medium. The refractive index is:",
        "question_hi": "एक माध्यम में प्रकाश की तरंगदैर्ध्य 20% कम हो जाती है। अपवर्तनांक है:",
        "options_en": ["1.2", "1.25", "1.3", "1.35"],
        "options_hi": ["1.2", "1.25", "1.3", "1.35"],
        "answer_en": "1.25",
        "answer_hi": "1.25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The time period of a satellite depends on:",
        "question_hi": "उपग्रह का आवर्तकाल निर्भर करता है:",
        "options_en": ["Mass of satellite", "Radius of orbit", "Both", "None"],
        "options_hi": ["उपग्रह का द्रव्यमान", "कक्षा की त्रिज्या", "दोनों", "कोई नहीं"],
        "answer_en": "Radius of orbit",
        "answer_hi": "कक्षा की त्रिज्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "If a wire is stretched to three times its length, its resistance becomes:",
        "question_hi": "यदि एक तार को खींचकर उसकी लंबाई तीन गुनी कर दी जाए, तो उसका प्रतिरोध हो जाता है:",
        "options_en": ["Same", "Three times", "Six times", "Nine times"],
        "options_hi": ["समान", "तीन गुना", "छह गुना", "नौ गुना"],
        "answer_en": "Nine times",
        "answer_hi": "नौ गुना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is diamagnetic?",
        "question_hi": "निम्नलिखित में से कौन डायामैग्नेटिक है?",
        "options_en": ["O₂", "N₂", "Cu²⁺", "Fe³⁺"],
        "options_hi": ["O₂", "N₂", "Cu²⁺", "Fe³⁺"],
        "answer_en": "N₂",
        "answer_hi": "N₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "A capacitor of 5 μF is charged to 200 V. Energy stored is:",
        "question_hi": "5 μF का एक संधारित्र 200 V पर आवेशित किया गया है। संचित ऊर्जा है:",
        "options_en": ["0.05 J", "0.1 J", "0.15 J", "0.2 J"],
        "options_hi": ["0.05 J", "0.1 J", "0.15 J", "0.2 J"],
        "answer_en": "0.1 J",
        "answer_hi": "0.1 J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "In Young's double slit experiment, fringe width is 0.4 mm. If immersed in liquid (μ=1.5), new fringe width is:",
        "question_hi": "यंग के डबल स्लिट प्रयोग में फ्रिंज चौड़ाई 0.4 mm है। यदि तरल (μ=1.5) में डुबोया जाए, तो नई फ्रिंज चौड़ाई है:",
        "options_en": ["0.267 mm", "0.3 mm", "0.4 mm", "0.6 mm"],
        "options_hi": ["0.267 मिमी", "0.3 मिमी", "0.4 मिमी", "0.6 मिमी"],
        "answer_en": "0.267 mm",
        "answer_hi": "0.267 मिमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "A projectile is thrown at 30° with speed 40 m/s. Maximum height is:",
        "question_hi": "एक प्रक्षेप्य को 30° कोण पर 40 m/s की गति से फेंका जाता है। अधिकतम ऊँचाई है:",
        "options_en": ["10 m", "15 m", "20 m", "25 m"],
        "options_hi": ["10 मी", "15 मी", "20 मी", "25 मी"],
        "answer_en": "20 m",
        "answer_hi": "20 मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which orbital has lowest energy in multi-electron atom?",
        "question_hi": "बहु-इलेक्ट्रॉन परमाणु में किस कक्षा की ऊर्जा सबसे कम होती है?",
        "options_en": ["3s", "3p", "4s", "3d"],
        "options_hi": ["3s", "3p", "4s", "3d"],
        "answer_en": "3s",
        "answer_hi": "3s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Magnetic field at center of circular loop of radius R carrying current I is:",
        "question_hi": "त्रिज्या R की धारावाही वृत्ताकार लूप के केंद्र पर चुंबकीय क्षेत्र है:",
        "options_en": ["μ₀I/2R", "μ₀I/4πR", "μ₀IR²", "μ₀IR/2"],
        "options_hi": ["μ₀I/2R", "μ₀I/4πR", "μ₀IR²", "μ₀IR/2"],
        "answer_en": "μ₀I/2R",
        "answer_hi": "μ₀I/2R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which has zero dipole moment?",
        "question_hi": "किसका द्विध्रुव आघूर्ण शून्य होता है?",
        "options_en": ["CO₂", "NH₃", "H₂O", "SO₂"],
        "options_hi": ["CO₂", "NH₃", "H₂O", "SO₂"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "General solution of dy/dx = 2y is:",
        "question_hi": "dy/dx = 2y का सामान्य हल है:",
        "options_en": ["y = x²", "y = e²ˣ", "y = Ae²ˣ", "y = A/x"],
        "options_hi": ["y = x²", "y = e²ˣ", "y = Ae²ˣ", "y = A/x"],
        "answer_en": "y = Ae²ˣ",
        "answer_hi": "y = Ae²ˣ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Relation between f and R for spherical mirror is:",
        "question_hi": "गोलाकार दर्पण के लिए f और R के बीच संबंध है:",
        "options_en": ["f = R", "f = R/2", "f = 2R", "f = R²"],
        "options_hi": ["f = R", "f = R/2", "f = 2R", "f = R²"],
        "answer_en": "f = R/2",
        "answer_hi": "f = R/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Oxidation state of manganese in KMnO₄ is:",
        "question_hi": "KMnO₄ में मैंगनीज की ऑक्सीकरण अवस्था है:",
        "options_en": ["+2", "+4", "+6", "+7"],
        "options_hi": ["+2", "+4", "+6", "+7"],
        "answer_en": "+7",
        "answer_hi": "+7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which is non-polar molecule?",
        "question_hi": "कौन सा अध्रुवीय अणु है?",
        "options_en": ["H₂O", "NH₃", "CCl₄", "HCl"],
        "options_hi": ["H₂O", "NH₃", "CCl₄", "HCl"],
        "answer_en": "CCl₄",
        "answer_hi": "CCl₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "IUPAC name of CH₃-CO-CH₃ is:",
        "question_hi": "CH₃-CO-CH₃ का IUPAC नाम है:",
        "options_en": ["Propanal", "Propanone", "Ethanal", "Butanone"],
        "options_hi": ["प्रोपेनल", "प्रोपेनोन", "एथेनल", "ब्यूटेनोन"],
        "answer_en": "Propanone",
        "answer_hi": "प्रोपेनोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Number of sigma bonds in ethyne (C₂H₂) is:",
        "question_hi": "एथाइन (C₂H₂) में सिग्मा बंधों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which is noble gas?",
        "question_hi": "कौन सी अक्रिय गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Neon", "Chlorine"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "नियॉन", "क्लोरीन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "pH of acidic solution at 25°C is:",
        "question_hi": "25°C पर अम्लीय विलयन का pH है:",
        "options_en": ["5", "7", "10", "14"],
        "options_hi": ["5", "7", "10", "14"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Element with atomic number 17 is:",
        "question_hi": "परमाणु क्रमांक 17 वाला तत्व है:",
        "options_en": ["Sodium", "Magnesium", "Chlorine", "Argon"],
        "options_hi": ["सोडियम", "मैग्नीशियम", "क्लोरीन", "ऑर्गन"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Hybridization of carbon in methane (CH₄) is:",
        "question_hi": "मीथेन (CH₄) में कार्बन का संकरण है:",
        "options_en": ["sp", "sp²", "sp³", "sp³d"],
        "options_hi": ["sp", "sp²", "sp³", "sp³d"],
        "answer_en": "sp³",
        "answer_hi": "sp³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which is oxidizing agent?",
        "question_hi": "कौन ऑक्सीकारक है?",
        "options_en": ["H₂O₂", "NaBH₄", "SO₂", "H₂S"],
        "options_hi": ["H₂O₂", "NaBH₄", "SO₂", "H₂S"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Molecular formula of ethanol is:",
        "question_hi": "एथनॉल का आणविक सूत्र है:",
        "options_en": ["C₂H₆O", "C₂H₄O", "C₂H₆", "C₂H₅OH"],
        "options_hi": ["C₂H₆O", "C₂H₄O", "C₂H₆", "C₂H₅OH"],
        "answer_en": "C₂H₆O",
        "answer_hi": "C₂H₆O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Compound showing geometrical isomerism is:",
        "question_hi": "ज्यामितीय समावयवता दर्शाने वाला यौगिक है:",
        "options_en": ["1,2-dichloroethene", "1,1-dichloroethene", "Propene", "Butane"],
        "options_hi": ["1,2-डाइक्लोरोईथीन", "1,1-डाइक्लोरोईथीन", "प्रोपीन", "ब्यूटेन"],
        "answer_en": "1,2-dichloroethene",
        "answer_hi": "1,2-डाइक्लोरोईथीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Correct order of bond angles in NH₃, H₂O, CH₄ is:",
        "question_hi": "NH₃, H₂O, CH₄ में बंध कोणों का सही क्रम है:",
        "options_en": ["H₂O < NH₃ < CH₄", "NH₃ < H₂O < CH₄", "CH₄ < NH₃ < H₂O", "CH₄ < H₂O < NH₃"],
        "options_hi": ["H₂O < NH₃ < CH₄", "NH₃ < H₂O < CH₄", "CH₄ < NH₃ < H₂O", "CH₄ < H₂O < NH₃"],
        "answer_en": "H₂O < NH₃ < CH₄",
        "answer_hi": "H₂O < NH₃ < CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Compound giving positive iodoform test is:",
        "question_hi": "धनात्मक आयोडोफॉर्म परीक्षण देने वाला यौगिक है:",
        "options_en": ["Phenol", "Ethanol", "Benzaldehyde", "Acetone"],
        "options_hi": ["फीनॉल", "एथनॉल", "बेंजाल्डिहाइड", "एसीटोन"],
        "answer_en": "Ethanol",
        "answer_hi": "एथनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Number of water molecules in CuSO₄.5H₂O is:",
        "question_hi": "CuSO₄.5H₂O में जल के अणुओं की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Most stable carbocation is:",
        "question_hi": "सबसे स्थिर कार्बोकैटायन है:",
        "options_en": ["Methyl", "Primary", "Secondary", "Tertiary"],
        "options_hi": ["मेथिल", "प्राथमिक", "द्वितीयक", "तृतीयक"],
        "answer_en": "Tertiary",
        "answer_hi": "तृतीयक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Compound showing both Frenkel and Schottky defects is:",
        "question_hi": "फ्रेंकेल और शॉट्की दोनों दोष दर्शाने वाला यौगिक है:",
        "options_en": ["NaCl", "AgCl", "KCl", "CsCl"],
        "options_hi": ["NaCl", "AgCl", "KCl", "CsCl"],
        "answer_en": "AgCl",
        "answer_hi": "AgCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Number of structural isomers for C₃H₈O is:",
        "question_hi": "C₃H₈O के लिए संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Complex showing optical activity is:",
        "question_hi": "प्रकाशिक सक्रियता दर्शाने वाला संकुल है:",
        "options_en": ["[Co(NH₃)₆]³⁺", "[Ni(CN)₄]²⁻", "[Co(en)₃]³⁺", "[PtCl₄]²⁻"],
        "options_hi": ["[Co(NH₃)₆]³⁺", "[Ni(CN)₄]²⁻", "[Co(en)₃]³⁺", "[PtCl₄]²⁻"],
        "answer_en": "[Co(en)₃]³⁺",
        "answer_hi": "[Co(en)₃]³⁺",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Correct order of acidic strength of oxyacids of chlorine is:",
        "question_hi": "क्लोरीन के ऑक्सीअम्लों की अम्लीय सामर्थ्य का सही क्रम है:",
        "options_en": ["HClO < HClO₂ < HClO₃ < HClO₄", "HClO₄ < HClO₃ < HClO₂ < HClO", "HClO < HClO₄ < HClO₃ < HClO₂", "HClO₄ < HClO₂ < HClO₃ < HClO"],
        "options_hi": ["HClO < HClO₂ < HClO₃ < HClO₄", "HClO₄ < HClO₃ < HClO₂ < HClO", "HClO < HClO₄ < HClO₃ < HClO₂", "HClO₄ < HClO₂ < HClO₃ < HClO"],
        "answer_en": "HClO < HClO₂ < HClO₃ < HClO₄",
        "answer_hi": "HClO < HClO₂ < HClO₃ < HClO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Number of π bonds in benzene is:",
        "question_hi": "बेंजीन में π बंधों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "IUPAC name of CH₃-CH₂-CH₂-OH is:",
        "question_hi": "CH₃-CH₂-CH₂-OH का IUPAC नाम है:",
        "options_en": ["Methanol", "Ethanol", "Propanol", "Butanol"],
        "options_hi": ["मेथनॉल", "एथनॉल", "प्रोपेनॉल", "ब्यूटनॉल"],
        "answer_en": "Propanol",
        "answer_hi": "प्रोपेनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Molarity of 98 g of H₂SO₄ in 2 liter solution is:",
        "question_hi": "2 लीटर विलयन में 98 ग्राम H₂SO₄ की मोलरता है:",
        "options_en": ["0.25 M", "0.5 M", "1 M", "2 M"],
        "options_hi": ["0.25 M", "0.5 M", "1 M", "2 M"],
        "answer_en": "0.5 M",
        "answer_hi": "0.5 M",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Element with highest first ionization energy is:",
        "question_hi": "सबसे अधिक प्रथम आयनीकरण ऊर्जा वाला तत्व है:",
        "options_en": ["Na", "Mg", "Al", "Ne"],
        "options_hi": ["Na", "Mg", "Al", "Ne"],
        "answer_en": "Ne",
        "answer_hi": "Ne",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Gas used in Haber process is:",
        "question_hi": "हैबर प्रक्रिया में प्रयुक्त गैस है:",
        "options_en": ["O₂", "H₂", "N₂", "He"],
        "options_hi": ["O₂", "H₂", "N₂", "He"],
        "answer_en": "N₂",
        "answer_hi": "N₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Highest boiling point among H₂O, H₂S, H₂Se, H₂Te is of:",
        "question_hi": "H₂O, H₂S, H₂Se, H₂Te में सबसे अधिक क्वथनांक किसका है?",
        "options_en": ["H₂O", "H₂S", "H₂Se", "H₂Te"],
        "options_hi": ["H₂O", "H₂S", "H₂Se", "H₂Te"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Shortest wavelength in Balmer series corresponds to:",
        "question_hi": "बामर श्रृंखला में सबसे छोटी तरंगदैर्ध्य किसके लिए होती है?",
        "options_en": ["n = 3 to n = 2", "n = 4 to n = 2", "n = ∞ to n = 2", "n = 5 to n = 2"],
        "options_hi": ["n = 3 से n = 2", "n = 4 से n = 2", "n = ∞ से n = 2", "n = 5 से n = 2"],
        "answer_en": "n = ∞ to n = 2",
        "answer_hi": "n = ∞ से n = 2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Correct order of bond angles in CH₄, NH₃, H₂O is:",
        "question_hi": "CH₄, NH₃, H₂O में बंध कोणों का सही क्रम है:",
        "options_en": ["H₂O < NH₃ < CH₄", "NH₃ < H₂O < CH₄", "CH₄ < NH₃ < H₂O", "CH₄ < H₂O < NH₃"],
        "options_hi": ["H₂O < NH₃ < CH₄", "NH₃ < H₂O < CH₄", "CH₄ < NH₃ < H₂O", "CH₄ < H₂O < NH₃"],
        "answer_en": "H₂O < NH₃ < CH₄",
        "answer_hi": "H₂O < NH₃ < CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Compound not showing geometrical isomerism is:",
        "question_hi": "ज्यामितीय समावयवता नहीं दर्शाने वाला यौगिक है:",
        "options_en": ["1,2-dichloroethene", "2-butene", "1,2-dichlorocyclopropane", "1,1-dichloroethene"],
        "options_hi": ["1,2-डाइक्लोरोईथीन", "2-ब्यूटीन", "1,2-डाइक्लोरोसाइक्लोप्रोपेन", "1,1-डाइक्लोरोईथीन"],
        "answer_en": "1,1-dichloroethene",
        "answer_hi": "1,1-डाइक्लोरोईथीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Number of isomers for C₄H₁₀ is:",
        "question_hi": "C₄H₁₀ के लिए समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which is not colligative property?",
        "question_hi": "कौन सा अणुसंख्य गुणधर्म नहीं है?",
        "options_en": ["Osmotic pressure", "Lowering of vapor pressure", "Elevation in boiling point", "Density"],
        "options_hi": ["परासरण दाब", "वाष्प दाब में कमी", "क्वथनांक में उन्नयन", "घनत्व"],
        "answer_en": "Density",
        "answer_hi": "घनत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Number of d-electrons in Fe³⁺ (Z=26) is:",
        "question_hi": "Fe³⁺ (Z=26) में d-इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Geometry of SF₆ is:",
        "question_hi": "SF₆ की ज्यामिति है:",
        "options_en": ["Square planar", "Tetrahedral", "Octahedral", "Trigonal bipyramidal"],
        "options_hi": ["वर्ग समतलीय", "चतुष्फलकीय", "अष्टफलकीय", "त्रिकोणीय द्विपिरैमिडी"],
        "answer_en": "Octahedral",
        "answer_hi": "अष्टफलकीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Example of condensation polymer is:",
        "question_hi": "संघनन बहुलक का उदाहरण है:",
        "options_en": ["Polythene", "PVC", "Nylon-6,6", "Teflon"],
        "options_hi": ["पॉलिथीन", "PVC", "नायलॉन-6,6", "टेफ्लॉन"],
        "answer_en": "Nylon-6,6",
        "answer_hi": "नायलॉन-6,6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Number of moles of KMnO₄ required to oxidize one mole of FeSO₄ in acidic medium is:",
        "question_hi": "अम्लीय माध्यम में FeSO₄ के एक मोल को ऑक्सीकृत करने के लिए आवश्यक KMnO₄ के मोलों की संख्या है:",
        "options_en": ["0.2", "0.4", "0.6", "0.8"],
        "options_hi": ["0.2", "0.4", "0.6", "0.8"],
        "answer_en": "0.2",
        "answer_hi": "0.2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Compound used in anti-malarial drug is:",
        "question_hi": "एंटी-मलेरिया दवा में प्रयुक्त यौगिक है:",
        "options_en": ["Chloroquine", "Bithionol", "Paracetamol", "Aspirin"],
        "options_hi": ["क्लोरोक्वीन", "बिथायोनॉल", "पैरासिटामोल", "एस्पिरिन"],
        "answer_en": "Chloroquine",
        "answer_hi": "क्लोरोक्वीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Number of real solutions of |x|² - 2|x| - 3 = 0 is:",
        "question_hi": "समीकरण |x|² - 2|x| - 3 = 0 के वास्तविक हलों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "If sum of first n terms of AP is 2n² + 3n, then nth term is:",
        "question_hi": "यदि समांतर श्रेणी के पहले n पदों का योग 2n² + 3n है, तो nवाँ पद है:",
        "options_en": ["4n + 1", "4n - 1", "2n + 1", "2n - 1"],
        "options_hi": ["4n + 1", "4n - 1", "2n + 1", "2n - 1"],
        "answer_en": "4n + 1",
        "answer_hi": "4n + 1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Number of ways to seat 4 boys and 3 girls so that no two girls are together is:",
        "question_hi": "4 लड़कों और 3 लड़कियों को इस प्रकार बैठाने के तरीकों की संख्या कि कोई भी दो लड़कियाँ एक साथ न बैठें:",
        "options_en": ["144", "288", "576", "720"],
        "options_hi": ["144", "288", "576", "720"],
        "answer_en": "144",
        "answer_hi": "144",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Value of ∫(0 to π/2) log(cos x) dx is:",
        "question_hi": "∫(0 से π/2) log(cos x) dx का मान है:",
        "options_en": ["-π/2 log 2", "-π log 2", "π/2 log 2", "π log 2"],
        "options_hi": ["-π/2 log 2", "-π log 2", "π/2 log 2", "π log 2"],
        "answer_en": "-π/2 log 2",
        "answer_hi": "-π/2 log 2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "If P(A) = 0.4, P(B) = 0.5 and P(A∩B) = 0.2, then P(A|B') is:",
        "question_hi": "यदि P(A) = 0.4, P(B) = 0.5 और P(A∩B) = 0.2, तो P(A|B') है:",
        "options_en": ["0.2", "0.4", "0.6", "0.8"],
        "options_hi": ["0.2", "0.4", "0.6", "0.8"],
        "answer_en": "0.4",
        "answer_hi": "0.4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Equation of normal to curve y = x² at (1,1) is:",
        "question_hi": "वक्र y = x² के (1,1) पर अभिलंब का समीकरण है:",
        "options_en": ["x + 2y = 3", "2x + y = 3", "x - 2y = -1", "2x - y = 1"],
        "options_hi": ["x + 2y = 3", "2x + y = 3", "x - 2y = -1", "2x - y = 1"],
        "answer_en": "x + 2y = 3",
        "answer_hi": "x + 2y = 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Number of common tangents to circles x² + y² = 9 and x² + y² - 6x - 8y = 0 is:",
        "question_hi": "वृत्तों x² + y² = 9 और x² + y² - 6x - 8y = 0 की उभयनिष्ठ स्पर्श रेखाओं की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Value of lim(x→0) (eˣ - 1)/x is:",
        "question_hi": "lim(x→0) (eˣ - 1)/x का मान है:",
        "options_en": ["0", "1", "2", "∞"],
        "options_hi": ["0", "1", "2", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "If vectors a = i + j + k, b = 2i - j + 3k and c = λi + j + 2k are coplanar, then λ is:",
        "question_hi": "यदि सदिश a = i + j + k, b = 2i - j + 3k और c = λi + j + 2k समतलीय हैं, तो λ है:",
        "options_en": ["-1", "0", "1", "2"],
        "options_hi": ["-1", "0", "1", "2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Area bounded by y = x² and y = 2x is:",
        "question_hi": "y = x² और y = 2x से घिरा क्षेत्रफल है:",
        "options_en": ["1/3", "2/3", "4/3", "8/3"],
        "options_hi": ["1/3", "2/3", "4/3", "8/3"],
        "answer_en": "4/3",
        "answer_hi": "4/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Limit of (1 - cos x)/x² as x→0 is:",
        "question_hi": "जब x → 0 होता है, तब (1 - cos x)/x² का मान है:",
        "options_en": ["0", "1/2", "1", "2"],
        "options_hi": ["0", "1/2", "1", "2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "If sum of first n terms of series is Sₙ = n² + 2n, then nth term is:",
        "question_hi": "यदि श्रेणी के पहले n पदों का योग Sₙ = n² + 2n है, तो nवाँ पद है:",
        "options_en": ["2n + 1", "2n - 1", "n + 1", "n - 1"],
        "options_hi": ["2n + 1", "2n - 1", "n + 1", "n - 1"],
        "answer_en": "2n + 1",
        "answer_hi": "2n + 1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Value of (1 + cot²θ)/(1 + tan²θ) is:",
        "question_hi": "(1 + cot²θ)/(1 + tan²θ) का मान है:",
        "options_en": ["tan²θ", "cot²θ", "tan⁴θ", "1"],
        "options_hi": ["tan²θ", "cot²θ", "tan⁴θ", "1"],
        "answer_en": "cot²θ",
        "answer_hi": "cot²θ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "If A = [[2, 1], [3, 4]], then determinant of A is:",
        "question_hi": "यदि A = [[2, 1], [3, 4]] है, तो A का निर्धारक है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Integral ∫cos²x dx equals:",
        "question_hi": "∫cos²x dx का हल है:",
        "options_en": ["x + sinx cosx + C", "x/2 + sin2x/4 + C", "x + C", "sin²x + C"],
        "options_hi": ["x + sinx cosx + C", "x/2 + sin2x/4 + C", "x + C", "sin²x + C"],
        "answer_en": "x/2 + sin2x/4 + C",
        "answer_hi": "x/2 + sin2x/4 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "If logₐb = 2, then b equals:",
        "question_hi": "यदि logₐb = 2, तो b है:",
        "options_en": ["a²", "2a", "a/2", "log₂a"],
        "options_hi": ["a²", "2a", "a/2", "log₂a"],
        "answer_en": "a²",
        "answer_hi": "a²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Derivative of eˣ is:",
        "question_hi": "eˣ का अवकलज है:",
        "options_en": ["eˣ", "xeˣ", "eˣ/x", "0"],
        "options_hi": ["eˣ", "xeˣ", "eˣ/x", "0"],
        "answer_en": "eˣ",
        "answer_hi": "eˣ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Is f(x) = |x| differentiable at x = 0?",
        "question_hi": "क्या f(x) = |x|, x = 0 पर अवकलनीय है?",
        "options_en": ["Yes", "No", "Partially", "Only from right"],
        "options_hi": ["हाँ", "नहीं", "आंशिक रूप से", "केवल दाएँ से"],
        "answer_en": "No",
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Number of terms in expansion of (1 + x)¹⁰ is:",
        "question_hi": "(1 + x)¹⁰ के प्रसार में पदों की संख्या है:",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Solution of dy/dx = 3x² is:",
        "question_hi": "dy/dx = 3x² का हल है:",
        "options_en": ["y = x³", "y = x³ + C", "y = 3x", "y = 3x + C"],
        "options_hi": ["y = x³", "y = x³ + C", "y = 3x", "y = 3x + C"],
        "answer_en": "y = x³ + C",
        "answer_hi": "y = x³ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Value of cos(105°) is:",
        "question_hi": "cos(105°) का मान है:",
        "options_en": ["(√6 - √2)/4", "(√6 + √2)/4", "-(√6 + √2)/4", "-(√6 - √2)/4"],
        "options_hi": ["(√6 - √2)/4", "(√6 + √2)/4", "-(√6 + √2)/4", "-(√6 - √2)/4"],
        "answer_en": "-(√6 - √2)/4",
        "answer_hi": "-(√6 - √2)/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Distance between lines 2x + 3y = 6 and 4x + 6y = 12 is:",
        "question_hi": "रेखाओं 2x + 3y = 6 और 4x + 6y = 12 के बीच की दूरी है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Number of diagonals in octagon is:",
        "question_hi": "अष्टभुज में विकर्णों की संख्या है:",
        "options_en": ["16", "18", "20", "22"],
        "options_hi": ["16", "18", "20", "22"],
        "answer_en": "20",
        "answer_hi": "20",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Sum of series 2 + 4 + 6 + ... + 2n is:",
        "question_hi": "श्रेणी 2 + 4 + 6 + ... + 2n का योग है:",
        "options_en": ["n(n+1)", "n(n+1)/2", "2n(n+1)", "n²"],
        "options_hi": ["n(n+1)", "n(n+1)/2", "2n(n+1)", "n²"],
        "answer_en": "n(n+1)",
        "answer_hi": "n(n+1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Value of ∫(1/(1+x²)) dx from 0 to ∞ is:",
        "question_hi": "0 से ∞ तक ∫(1/(1+x²)) dx का मान है:",
        "options_en": ["π/2", "π/4", "π", "∞"],
        "options_hi": ["π/2", "π/4", "π", "∞"],
        "answer_en": "π/2",
        "answer_hi": "π/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Equation of circle with center (1,2) and radius 3 is:",
        "question_hi": "केंद्र (1,2) और त्रिज्या 3 वाले वृत्त का समीकरण है:",
        "options_en": ["(x-1)² + (y-2)² = 9", "(x+1)² + (y+2)² = 9", "(x-1)² + (y-2)² = 3", "(x+1)² + (y+2)² = 3"],
        "options_hi": ["(x-1)² + (y-2)² = 9", "(x+1)² + (y+2)² = 9", "(x-1)² + (y-2)² = 3", "(x+1)² + (y+2)² = 3"],
        "answer_en": "(x-1)² + (y-2)² = 9",
        "answer_hi": "(x-1)² + (y-2)² = 9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "If sin θ = 4/5, then cos θ is:",
        "question_hi": "यदि sin θ = 4/5, तो cos θ है:",
        "options_en": ["3/5", "4/5", "5/3", "5/4"],
        "options_hi": ["3/5", "4/5", "5/3", "5/4"],
        "answer_en": "3/5",
        "answer_hi": "3/5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Number of terms in expansion of (a+b+c)² is:",
        "question_hi": "(a+b+c)² के प्रसार में पदों की संख्या है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Value of sin(π/6) is:",
        "question_hi": "sin(π/6) का मान है:",
        "options_en": ["1/2", "√3/2", "1", "0"],
        "options_hi": ["1/2", "√3/2", "1", "0"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Solution of 3x + 5 = 14 is:",
        "question_hi": "समीकरण 3x + 5 = 14 का हल है:",
        "options_en": ["x = 2", "x = 3", "x = 4", "x = 5"],
        "options_hi": ["x = 2", "x = 3", "x = 4", "x = 5"],
        "answer_en": "x = 3",
        "answer_hi": "x = 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "A body falls freely from rest. Distance covered in first 2 seconds is:",
        "question_hi": "एक पिंड विरामावस्था से स्वतंत्र रूप से गिरता है। पहले 2 सेकंड में तय की गई दूरी है:",
        "options_en": ["9.8 m", "19.6 m", "29.4 m", "39.2 m"],
        "options_hi": ["9.8 मी", "19.6 मी", "29.4 मी", "39.2 मी"],
        "answer_en": "19.6 m",
        "answer_hi": "19.6 मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Power of a lens of focal length 20 cm is:",
        "question_hi": "20 cm फोकस दूरी वाले लेंस की क्षमता है:",
        "options_en": ["2 D", "3 D", "4 D", "5 D"],
        "options_hi": ["2 D", "3 D", "4 D", "5 D"],
        "answer_en": "5 D",
        "answer_hi": "5 D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Unit of gravitational constant is:",
        "question_hi": "गुरुत्वाकर्षण स्थिरांक की इकाई है:",
        "options_en": ["N m²/kg²", "N kg²/m²", "m²/s²", "kg m/s²"],
        "options_hi": ["N m²/kg²", "N kg²/m²", "m²/s²", "kg m/s²"],
        "answer_en": "N m²/kg²",
        "answer_hi": "N m²/kg²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "A sound wave has frequency 500 Hz and wavelength 0.68 m. Speed of sound is:",
        "question_hi": "एक ध्वनि तरंग की आवृत्ति 500 Hz और तरंगदैर्ध्य 0.68 m है। ध्वनि की गति है:",
        "options_en": ["340 m/s", "350 m/s", "360 m/s", "370 m/s"],
        "options_hi": ["340 m/s", "350 m/s", "360 m/s", "370 m/s"],
        "answer_en": "340 m/s",
        "answer_hi": "340 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "In nuclear reaction, mass defect is converted to:",
        "question_hi": "नाभिकीय अभिक्रिया में, द्रव्यमान क्षति परिवर्तित होती है:",
        "options_en": ["Energy", "Momentum", "Charge", "Velocity"],
        "options_hi": ["ऊर्जा", "संवेग", "आवेश", "वेग"],
        "answer_en": "Energy",
        "answer_hi": "ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "A transformer has 100 turns in primary and 500 turns in secondary. If input voltage is 220 V, output voltage is:",
        "question_hi": "एक ट्रांसफॉर्मर में प्राथमिक में 100 फेरे और द्वितीयक में 500 फेरे हैं। यदि इनपुट वोल्टेज 220 V है, तो आउटपुट वोल्टेज है:",
        "options_en": ["44 V", "220 V", "1100 V", "2200 V"],
        "options_hi": ["44 V", "220 V", "1100 V", "2200 V"],
        "answer_en": "1100 V",
        "answer_hi": "1100 V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "A particle moves in circle of radius 2 m with speed 4 m/s. Its centripetal acceleration is:",
        "question_hi": "एक कण 2 m त्रिज्या के वृत्त में 4 m/s की गति से गति करता है। इसका अभिकेंद्रीय त्वरण है:",
        "options_en": ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
        "options_hi": ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
        "answer_en": "8 m/s²",
        "answer_hi": "8 m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Work done in isothermal expansion of ideal gas depends on:",
        "question_hi": "आदर्श गैस के समतापी प्रसार में किया गया कार्य निर्भर करता है:",
        "options_en": ["Temperature only", "Volume only", "Both temperature and volume", "Pressure only"],
        "options_hi": ["केवल तापमान", "केवल आयतन", "तापमान और आयतन दोनों", "केवल दाब"],
        "answer_en": "Both temperature and volume",
        "answer_hi": "तापमान और आयतन दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "A ray of light enters from air to glass. Which quantity remains unchanged?",
        "question_hi": "प्रकाश की एक किरण वायु से कांच में प्रवेश करती है। कौन सी मात्रा अपरिवर्तित रहती है?",
        "options_en": ["Wavelength", "Frequency", "Speed", "Direction"],
        "options_hi": ["तरंगदैर्ध्य", "आवृत्ति", "गति", "दिशा"],
        "answer_en": "Frequency",
        "answer_hi": "आवृत्ति",
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