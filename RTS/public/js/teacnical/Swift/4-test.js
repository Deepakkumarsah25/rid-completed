const questions = [
    {
        "num": 1,
        "question_en": "A ball is thrown vertically upward with velocity 20 m/s. The maximum height reached is:",
        "question_hi": "एक गेंद को 20 m/s के वेग से ऊर्ध्वाधर ऊपर की ओर फेंका जाता है। अधिकतम ऊँचाई है:",
        "options_en": ["10 m", "15 m", "20 m", "25 m"],
        "options_hi": ["10 मी", "15 मी", "20 मी", "25 मी"],
        "answer_en": "20 m",
        "answer_hi": "20 मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The SI unit of pressure is:",
        "question_hi": "दाब की SI इकाई है:",
        "options_en": ["Pascal", "Newton", "Joule", "Watt"],
        "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A convex lens forms a real image at 20 cm when object is at 30 cm. Focal length is:",
        "question_hi": "एक उत्तल लेंस 30 cm पर वस्तु होने पर 20 cm पर वास्तविक प्रतिबिंब बनाता है। फोकस दूरी है:",
        "options_en": ["8 cm", "10 cm", "12 cm", "15 cm"],
        "options_hi": ["8 सेमी", "10 सेमी", "12 सेमी", "15 सेमी"],
        "answer_en": "12 cm",
        "answer_hi": "12 सेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The dimensional formula of force is:",
        "question_hi": "बल का विमीय सूत्र है:",
        "options_en": ["[MLT⁻²]", "[ML²T⁻²]", "[ML⁻¹T⁻²]", "[MLT⁻¹]"],
        "options_hi": ["[MLT⁻²]", "[ML²T⁻²]", "[ML⁻¹T⁻²]", "[MLT⁻¹]"],
        "answer_en": "[MLT⁻²]",
        "answer_hi": "[MLT⁻²]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A body of mass 10 kg has momentum 50 kg m/s. Its velocity is:",
        "question_hi": "10 kg द्रव्यमान के एक पिंड का संवेग 50 kg m/s है। इसका वेग है:",
        "options_en": ["2 m/s", "3 m/s", "4 m/s", "5 m/s"],
        "options_hi": ["2 m/s", "3 m/s", "4 m/s", "5 m/s"],
        "answer_en": "5 m/s",
        "answer_hi": "5 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The SI unit of electric charge is:",
        "question_hi": "विद्युत आवेश की SI इकाई है:",
        "options_en": ["Ampere", "Volt", "Coulomb", "Ohm"],
        "options_hi": ["एम्पियर", "वोल्ट", "कूलॉम", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "A car moving with 20 m/s stops in 4 seconds. Its retardation is:",
        "question_hi": "20 m/s से चलती हुई एक कार 4 सेकंड में रुक जाती है। इसका मंदन है:",
        "options_en": ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
        "options_hi": ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
        "answer_en": "5 m/s²",
        "answer_hi": "5 m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The refractive index of diamond is 2.42. Speed of light in diamond is:",
        "question_hi": "हीरे का अपवर्तनांक 2.42 है। हीरे में प्रकाश की गति है:",
        "options_en": ["1.24 × 10⁸ m/s", "1.42 × 10⁸ m/s", "1.56 × 10⁸ m/s", "1.68 × 10⁸ m/s"],
        "options_hi": ["1.24 × 10⁸ m/s", "1.42 × 10⁸ m/s", "1.56 × 10⁸ m/s", "1.68 × 10⁸ m/s"],
        "answer_en": "1.24 × 10⁸ m/s",
        "answer_hi": "1.24 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Energy stored in capacitor of 10 μF charged to 50 V is:",
        "question_hi": "50 V पर आवेशित 10 μF संधारित्र में संचित ऊर्जा है:",
        "options_en": ["0.0125 J", "0.025 J", "0.05 J", "0.1 J"],
        "options_hi": ["0.0125 J", "0.025 J", "0.05 J", "0.1 J"],
        "answer_en": "0.0125 J",
        "answer_hi": "0.0125 J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which law gives direction of induced current?",
        "question_hi": "कौन सा नियम प्रेरित धारा की दिशा देता है?",
        "options_en": ["Faraday's law", "Lenz's law", "Ohm's law", "Ampere's law"],
        "options_hi": ["फैराडे का नियम", "लेंज का नियम", "ओम का नियम", "एम्पियर का नियम"],
        "answer_en": "Lenz's law",
        "answer_hi": "लेंज का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Unit of magnetic field is:",
        "question_hi": "चुंबकीय क्षेत्र की इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Farad"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "A body of mass 2 kg has kinetic energy 16 J. Its velocity is:",
        "question_hi": "2 kg द्रव्यमान के एक पिंड की गतिज ऊर्जा 16 J है। इसका वेग है:",
        "options_en": ["2 m/s", "3 m/s", "4 m/s", "5 m/s"],
        "options_hi": ["2 m/s", "3 m/s", "4 m/s", "5 m/s"],
        "answer_en": "4 m/s",
        "answer_hi": "4 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Force between two charges is given by:",
        "question_hi": "दो आवेशों के बीच बल दिया जाता है:",
        "options_en": ["Ohm's law", "Coulomb's law", "Ampere's law", "Faraday's law"],
        "options_hi": ["ओम का नियम", "कूलॉम का नियम", "एम्पियर का नियम", "फैराडे का नियम"],
        "answer_en": "Coulomb's law",
        "answer_hi": "कूलॉम का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "When light enters from water to air, it:",
        "question_hi": "जब प्रकाश पानी से वायु में प्रवेश करता है, तो यह:",
        "options_en": ["Bends towards normal", "Bends away from normal", "Does not bend", "Reflects back"],
        "options_hi": ["अभिलंब की ओर मुड़ता है", "अभिलंब से दूर मुड़ता है", "नहीं मुड़ता", "वापस परावर्तित होता है"],
        "answer_en": "Bends away from normal",
        "answer_hi": "अभिलंब से दूर मुड़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Escape velocity from Earth's surface is about:",
        "question_hi": "पृथ्वी की सतह से पलायन वेग लगभग है:",
        "options_en": ["7.9 km/s", "11.2 km/s", "15.8 km/s", "22.4 km/s"],
        "options_hi": ["7.9 km/s", "11.2 km/s", "15.8 km/s", "22.4 km/s"],
        "answer_en": "11.2 km/s",
        "answer_hi": "11.2 km/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Three resistors 2Ω, 3Ω, 6Ω are connected in parallel. Equivalent resistance is:",
        "question_hi": "तीन प्रतिरोध 2Ω, 3Ω, 6Ω समानांतर में जुड़े हैं। तुल्य प्रतिरोध है:",
        "options_en": ["0.5 Ω", "1 Ω", "1.5 Ω", "2 Ω"],
        "options_hi": ["0.5 Ω", "1 Ω", "1.5 Ω", "2 Ω"],
        "answer_en": "1 Ω",
        "answer_hi": "1 Ω",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which is ferromagnetic?",
        "question_hi": "कौन फेरोमैग्नेटिक है?",
        "options_en": ["Iron", "Aluminum", "Copper", "Silver"],
        "options_hi": ["लोहा", "एल्युमिनियम", "तांबा", "चांदी"],
        "answer_en": "Iron",
        "answer_hi": "लोहा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "A capacitor of 2 μF charged to 100 V stores energy:",
        "question_hi": "100 V पर आवेशित 2 μF संधारित्र में संचित ऊर्जा है:",
        "options_en": ["0.005 J", "0.01 J", "0.02 J", "0.04 J"],
        "options_hi": ["0.005 J", "0.01 J", "0.02 J", "0.04 J"],
        "answer_en": "0.01 J",
        "answer_hi": "0.01 J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "In Young's experiment, if slit separation is doubled, fringe width becomes:",
        "question_hi": "यंग के प्रयोग में, यदि झिरी पृथक्करण दोगुना कर दिया जाए, तो फ्रिंज चौड़ाई हो जाती है:",
        "options_en": ["Half", "Double", "Same", "Four times"],
        "options_hi": ["आधी", "दोगुनी", "समान", "चार गुनी"],
        "answer_en": "Half",
        "answer_hi": "आधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "A projectile has maximum range when thrown at angle:",
        "question_hi": "एक प्रक्षेप्य का अधिकतम परास होता है जब फेंका जाता है कोण पर:",
        "options_en": ["30°", "45°", "60°", "75°"],
        "options_hi": ["30°", "45°", "60°", "75°"],
        "answer_en": "45°",
        "answer_hi": "45°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which quantum number determines shape of orbital?",
        "question_hi": "कौन सा क्वांटम संख्या कक्षक के आकार को निर्धारित करता है?",
        "options_en": ["Principal", "Azimuthal", "Magnetic", "Spin"],
        "options_hi": ["मुख्य", "अज़ीमुथल", "चुंबकीय", "स्पिन"],
        "answer_en": "Azimuthal",
        "answer_hi": "अज़ीमुथल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Magnetic field due to straight current carrying conductor is:",
        "question_hi": "सीधे धारावाही चालक के कारण चुंबकीय क्षेत्र है:",
        "options_en": ["Radial", "Circular", "Parallel", "Random"],
        "options_hi": ["रेडियल", "वृत्ताकार", "समानांतर", "यादृच्छिक"],
        "answer_en": "Circular",
        "answer_hi": "वृत्ताकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which molecule has tetrahedral shape?",
        "question_hi": "किस अणु की चतुष्फलकीय आकृति है?",
        "options_en": ["H₂O", "NH₃", "CH₄", "CO₂"],
        "options_hi": ["H₂O", "NH₃", "CH₄", "CO₂"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "General solution of dy/dx = -y is:",
        "question_hi": "dy/dx = -y का सामान्य हल है:",
        "options_en": ["y = e⁻ˣ", "y = Ae⁻ˣ", "y = eˣ", "y = Aeˣ"],
        "options_hi": ["y = e⁻ˣ", "y = Ae⁻ˣ", "y = eˣ", "y = Aeˣ"],
        "answer_en": "y = Ae⁻ˣ",
        "answer_hi": "y = Ae⁻ˣ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "For concave mirror, focal length is:",
        "question_hi": "अवतल दर्पण के लिए, फोकस दूरी है:",
        "options_en": ["Positive", "Negative", "Zero", "Infinite"],
        "options_hi": ["धनात्मक", "ऋणात्मक", "शून्य", "अनंत"],
        "answer_en": "Negative",
        "answer_hi": "ऋणात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Oxidation state of oxygen in H₂O₂ is:",
        "question_hi": "H₂O₂ में ऑक्सीजन की ऑक्सीकरण अवस्था है:",
        "options_en": ["-2", "-1", "0", "+1"],
        "options_hi": ["-2", "-1", "0", "+1"],
        "answer_en": "-1",
        "answer_hi": "-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which is polar molecule?",
        "question_hi": "कौन सा ध्रुवीय अणु है?",
        "options_en": ["CO₂", "CCl₄", "BF₃", "H₂O"],
        "options_hi": ["CO₂", "CCl₄", "BF₃", "H₂O"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "IUPAC name of HCOOH is:",
        "question_hi": "HCOOH का IUPAC नाम है:",
        "options_en": ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
        "options_hi": ["मेथेनोइक अम्ल", "एथेनोइक अम्ल", "प्रोपेनोइक अम्ल", "ब्यूटेनोइक अम्ल"],
        "answer_en": "Methanoic acid",
        "answer_hi": "मेथेनोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Number of π bonds in ethene is:",
        "question_hi": "ईथीन में π बंधों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which is not a noble gas?",
        "question_hi": "कौन सी अक्रिय गैस नहीं है?",
        "options_en": ["Helium", "Neon", "Argon", "Chlorine"],
        "options_hi": ["हीलियम", "नियॉन", "ऑर्गन", "क्लोरीन"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "pH of basic solution is:",
        "question_hi": "क्षारीय विलयन का pH है:",
        "options_en": ["5", "7", "9", "11"],
        "options_hi": ["5", "7", "9", "11"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Element with atomic number 11 is:",
        "question_hi": "परमाणु क्रमांक 11 वाला तत्व है:",
        "options_en": ["Sodium", "Magnesium", "Aluminum", "Silicon"],
        "options_hi": ["सोडियम", "मैग्नीशियम", "एल्युमिनियम", "सिलिकॉन"],
        "answer_en": "Sodium",
        "answer_hi": "सोडियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Hybridization in BF₃ is:",
        "question_hi": "BF₃ में संकरण है:",
        "options_en": ["sp", "sp²", "sp³", "sp³d"],
        "options_hi": ["sp", "sp²", "sp³", "sp³d"],
        "answer_en": "sp²",
        "answer_hi": "sp²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which is reducing agent?",
        "question_hi": "कौन अपचायक है?",
        "options_en": ["KMnO₄", "K₂Cr₂O₇", "H₂O₂", "SO₂"],
        "options_hi": ["KMnO₄", "K₂Cr₂O₇", "H₂O₂", "SO₂"],
        "answer_en": "SO₂",
        "answer_hi": "SO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Molecular formula of glucose is:",
        "question_hi": "ग्लूकोज का आणविक सूत्र है:",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Geometrical isomers differ in:",
        "question_hi": "ज्यामितीय समावयवी भिन्न होते हैं:",
        "options_en": ["Connectivity", "Spatial arrangement", "Functional group", "Molecular formula"],
        "options_hi": ["संयोजकता", "स्थानिक व्यवस्था", "कार्यात्मक समूह", "आणविक सूत्र"],
        "answer_en": "Spatial arrangement",
        "answer_hi": "स्थानिक व्यवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Bond angle in water is approximately:",
        "question_hi": "जल में बंध कोण लगभग है:",
        "options_en": ["90°", "104.5°", "109.5°", "120°"],
        "options_hi": ["90°", "104.5°", "109.5°", "120°"],
        "answer_en": "104.5°",
        "answer_hi": "104.5°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Tollen's test is used for:",
        "question_hi": "टॉलेन परीक्षण उपयोग किया जाता है:",
        "options_en": ["Aldehydes", "Ketones", "Alcohols", "Carboxylic acids"],
        "options_hi": ["एल्डिहाइड", "कीटोन", "अल्कोहल", "कार्बोक्सिलिक अम्ल"],
        "answer_en": "Aldehydes",
        "answer_hi": "एल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Water of crystallization in gypsum is:",
        "question_hi": "जिप्सम में जलयोजन जल है:",
        "options_en": ["1", "2", "5", "7"],
        "options_hi": ["1", "2", "5", "7"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Most stable free radical is:",
        "question_hi": "सबसे स्थिर मुक्त मूलक है:",
        "options_en": ["Methyl", "Primary", "Secondary", "Tertiary"],
        "options_hi": ["मेथिल", "प्राथमिक", "द्वितीयक", "तृतीयक"],
        "answer_en": "Tertiary",
        "answer_hi": "तृतीयक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Frenkel defect is observed in:",
        "question_hi": "फ्रेंकेल दोष देखा जाता है:",
        "options_en": ["NaCl", "AgBr", "KCl", "CsCl"],
        "options_hi": ["NaCl", "AgBr", "KCl", "CsCl"],
        "answer_en": "AgBr",
        "answer_hi": "AgBr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Number of structural isomers for C₄H₁₀ is:",
        "question_hi": "C₄H₁₀ के लिए संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
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
        "question_en": "Strongest acid among HCl, HBr, HI is:",
        "question_hi": "HCl, HBr, HI में सबसे प्रबल अम्ल है:",
        "options_en": ["HCl", "HBr", "HI", "All equal"],
        "options_hi": ["HCl", "HBr", "HI", "सभी समान"],
        "answer_en": "HI",
        "answer_hi": "HI",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Number of σ bonds in acetylene is:",
        "question_hi": "एसिटिलीन में σ बंधों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "IUPAC name of CH₃-CH(OH)-CH₃ is:",
        "question_hi": "CH₃-CH(OH)-CH₃ का IUPAC नाम है:",
        "options_en": ["Propan-1-ol", "Propan-2-ol", "Butan-2-ol", "Ethanol"],
        "options_hi": ["प्रोपेन-1-ऑल", "प्रोपेन-2-ऑल", "ब्यूटेन-2-ऑल", "एथनॉल"],
        "answer_en": "Propan-2-ol",
        "answer_hi": "प्रोपेन-2-ऑल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Molarity of 0.1 mole of NaOH in 500 ml solution is:",
        "question_hi": "500 ml विलयन में 0.1 मोल NaOH की मोलरता है:",
        "options_en": ["0.1 M", "0.2 M", "0.5 M", "1 M"],
        "options_hi": ["0.1 M", "0.2 M", "0.5 M", "1 M"],
        "answer_en": "0.2 M",
        "answer_hi": "0.2 M",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Element with smallest atomic radius is:",
        "question_hi": "सबसे छोटी परमाणु त्रिज्या वाला तत्व है:",
        "options_en": ["Li", "Na", "K", "Rb"],
        "options_hi": ["Li", "Na", "K", "Rb"],
        "answer_en": "Li",
        "answer_hi": "Li",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Contact process is used for manufacture of:",
        "question_hi": "संपर्क प्रक्रिया का उपयोग किया जाता है:",
        "options_en": ["Ammonia", "Sulfuric acid", "Nitric acid", "Hydrochloric acid"],
        "options_hi": ["अमोनिया", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Highest melting point among NaCl, MgCl₂, AlCl₃ is of:",
        "question_hi": "NaCl, MgCl₂, AlCl₃ में सबसे अधिक गलनांक किसका है?",
        "options_en": ["NaCl", "MgCl₂", "AlCl₃", "All equal"],
        "options_hi": ["NaCl", "MgCl₂", "AlCl₃", "सभी समान"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Longest wavelength in Balmer series corresponds to:",
        "question_hi": "बामर श्रृंखला में सबसे लंबी तरंगदैर्ध्य किसके लिए होती है?",
        "options_en": ["n=3 to n=2", "n=4 to n=2", "n=5 to n=2", "n=6 to n=2"],
        "options_hi": ["n=3 से n=2", "n=4 से n=2", "n=5 से n=2", "n=6 से n=2"],
        "answer_en": "n=3 to n=2",
        "answer_hi": "n=3 से n=2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Bond angle in ammonia is approximately:",
        "question_hi": "अमोनिया में बंध कोण लगभग है:",
        "options_en": ["90°", "107°", "109.5°", "120°"],
        "options_hi": ["90°", "107°", "109.5°", "120°"],
        "answer_en": "107°",
        "answer_hi": "107°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Optical isomers are also called:",
        "question_hi": "प्रकाशिक समावयवी भी कहलाते हैं:",
        "options_en": ["Geometrical isomers", "Enantiomers", "Diastereomers", "Conformers"],
        "options_hi": ["ज्यामितीय समावयवी", "एनैन्शियोमर्स", "डायस्टीरियोमर्स", "कंफॉर्मर्स"],
        "answer_en": "Enantiomers",
        "answer_hi": "एनैन्शियोमर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Number of isomers for C₃H₆ is:",
        "question_hi": "C₃H₆ के लिए समावयवियों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which is colligative property?",
        "question_hi": "कौन सा अणुसंख्य गुणधर्म है?",
        "options_en": ["Boiling point elevation", "Viscosity", "Surface tension", "Density"],
        "options_hi": ["क्वथनांक उन्नयन", "श्यानता", "पृष्ठ तनाव", "घनत्व"],
        "answer_en": "Boiling point elevation",
        "answer_hi": "क्वथनांक उन्नयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Number of unpaired electrons in O₂ is:",
        "question_hi": "O₂ में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Geometry of NH₃ is:",
        "question_hi": "NH₃ की ज्यामिति है:",
        "options_en": ["Linear", "Trigonal planar", "Tetrahedral", "Pyramidal"],
        "options_hi": ["रैखिक", "त्रिकोणीय समतलीय", "चतुष्फलकीय", "पिरामिडी"],
        "answer_en": "Pyramidal",
        "answer_hi": "पिरामिडी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Example of addition polymer is:",
        "question_hi": "योगज बहुलक का उदाहरण है:",
        "options_en": ["Nylon", "Polyester", "Polythene", "Nylon-6,6"],
        "options_hi": ["नायलॉन", "पॉलिएस्टर", "पॉलिथीन", "नायलॉन-6,6"],
        "answer_en": "Polythene",
        "answer_hi": "पॉलिथीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Number of moles of K₂Cr₂O₇ required to oxidize one mole of Fe²⁺ is:",
        "question_hi": "Fe²⁺ के एक मोल को ऑक्सीकृत करने के लिए आवश्यक K₂Cr₂O₇ के मोलों की संख्या है:",
        "options_en": ["1/6", "1/3", "1/2", "1"],
        "options_hi": ["1/6", "1/3", "1/2", "1"],
        "answer_en": "1/6",
        "answer_hi": "1/6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Aspirin is:",
        "question_hi": "एस्पिरिन है:",
        "options_en": ["Analgesic", "Antibiotic", "Antimalarial", "Antacid"],
        "options_hi": ["पीड़ाहारी", "एंटीबायोटिक", "एंटीमलेरियल", "एंटासिड"],
        "answer_en": "Analgesic",
        "answer_hi": "पीड़ाहारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Number of real roots of x² - 4x + 4 = 0 is:",
        "question_hi": "x² - 4x + 4 = 0 के वास्तविक मूलों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "If sum of n terms of AP is n², then first term is:",
        "question_hi": "यदि समांतर श्रेणी के n पदों का योग n² है, तो पहला पद है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Number of ways to arrange letters of 'BOOK' is:",
        "question_hi": "'BOOK' के अक्षरों को व्यवस्थित करने के तरीकों की संख्या है:",
        "options_en": ["6", "12", "24", "48"],
        "options_hi": ["6", "12", "24", "48"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Value of ∫(1/x) dx is:",
        "question_hi": "∫(1/x) dx का मान है:",
        "options_en": ["ln|x| + C", "x + C", "x²/2 + C", "1/x² + C"],
        "options_hi": ["ln|x| + C", "x + C", "x²/2 + C", "1/x² + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "If P(A) = 0.6, P(B) = 0.4 and P(A∪B) = 0.8, then P(A∩B) is:",
        "question_hi": "यदि P(A) = 0.6, P(B) = 0.4 और P(A∪B) = 0.8, तो P(A∩B) है:",
        "options_en": ["0.1", "0.2", "0.3", "0.4"],
        "options_hi": ["0.1", "0.2", "0.3", "0.4"],
        "answer_en": "0.2",
        "answer_hi": "0.2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Slope of tangent to y = x³ at (1,1) is:",
        "question_hi": "y = x³ के (1,1) पर स्पर्श रेखा की प्रवणता है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Number of common tangents to two concentric circles is:",
        "question_hi": "दो संकेंद्रित वृत्तों की उभयनिष्ठ स्पर्श रेखाओं की संख्या है:",
        "options_en": ["0", "1", "2", "Infinite"],
        "options_hi": ["0", "1", "2", "अनंत"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Value of lim(x→∞) (1 + 1/x)ˣ is:",
        "question_hi": "lim(x→∞) (1 + 1/x)ˣ का मान है:",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "e",
        "answer_hi": "e",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "If a = 2i + 3j and b = i - j, then a.b is:",
        "question_hi": "यदि a = 2i + 3j और b = i - j, तो a.b है:",
        "options_en": ["-1", "0", "1", "2"],
        "options_hi": ["-1", "0", "1", "2"],
        "answer_en": "-1",
        "answer_hi": "-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Area of circle x² + y² = 16 is:",
        "question_hi": "वृत्त x² + y² = 16 का क्षेत्रफल है:",
        "options_en": ["4π", "8π", "16π", "32π"],
        "options_hi": ["4π", "8π", "16π", "32π"],
        "answer_en": "16π",
        "answer_hi": "16π",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Limit of sin(2x)/x as x→0 is:",
        "question_hi": "जब x → 0 होता है, तब sin(2x)/x का मान है:",
        "options_en": ["0", "1", "2", "∞"],
        "options_hi": ["0", "1", "2", "∞"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "If sum of n terms is 3n² + n, then common difference is:",
        "question_hi": "यदि n पदों का योग 3n² + n है, तो सार्व अंतर है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Value of sin²θ + cos²θ is:",
        "question_hi": "sin²θ + cos²θ का मान है:",
        "options_en": ["0", "1", "2", "sin2θ"],
        "options_hi": ["0", "1", "2", "sin2θ"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "If A = [[1,0],[0,1]], then A is:",
        "question_hi": "यदि A = [[1,0],[0,1]] है, तो A है:",
        "options_en": ["Zero matrix", "Identity matrix", "Symmetric matrix", "Skew-symmetric matrix"],
        "options_hi": ["शून्य आव्यूह", "तत्समक आव्यूह", "सममित आव्यूह", "विषम-सममित आव्यूह"],
        "answer_en": "Identity matrix",
        "answer_hi": "तत्समक आव्यूह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Integral ∫eˣ dx is:",
        "question_hi": "∫eˣ dx का हल है:",
        "options_en": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln|x| + C"],
        "options_hi": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln|x| + C"],
        "answer_en": "eˣ + C",
        "answer_hi": "eˣ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "If log₁₀2 = 0.3010, then log₁₀8 is:",
        "question_hi": "यदि log₁₀2 = 0.3010, तो log₁₀8 है:",
        "options_en": ["0.3010", "0.6020", "0.9030", "1.2040"],
        "options_hi": ["0.3010", "0.6020", "0.9030", "1.2040"],
        "answer_en": "0.9030",
        "answer_hi": "0.9030",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Derivative of ln(x) is:",
        "question_hi": "ln(x) का अवकलज है:",
        "options_en": ["1/x", "x", "eˣ", "1"],
        "options_hi": ["1/x", "x", "eˣ", "1"],
        "answer_en": "1/x",
        "answer_hi": "1/x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Function f(x) = x² is differentiable at:",
        "question_hi": "फलन f(x) = x² अवकलनीय है:",
        "options_en": ["x=0 only", "All points", "No point", "x=1 only"],
        "options_hi": ["केवल x=0", "सभी बिंदुओं पर", "किसी बिंदु पर नहीं", "केवल x=1"],
        "answer_en": "All points",
        "answer_hi": "सभी बिंदुओं पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Number of terms in (a+b)⁵ is:",
        "question_hi": "(a+b)⁵ के प्रसार में पदों की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Solution of dy/dx = cos x is:",
        "question_hi": "dy/dx = cos x का हल है:",
        "options_en": ["y = sin x + C", "y = cos x + C", "y = -sin x + C", "y = -cos x + C"],
        "options_hi": ["y = sin x + C", "y = cos x + C", "y = -sin x + C", "y = -cos x + C"],
        "answer_en": "y = sin x + C",
        "answer_hi": "y = sin x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Value of tan(45°) is:",
        "question_hi": "tan(45°) का मान है:",
        "options_en": ["0", "1", "√3", "∞"],
        "options_hi": ["0", "1", "√3", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Distance between points (1,2) and (4,6) is:",
        "question_hi": "बिंदुओं (1,2) और (4,6) के बीच की दूरी है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Number of diagonals in pentagon is:",
        "question_hi": "पंचभुज में विकर्णों की संख्या है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Sum of first 10 natural numbers is:",
        "question_hi": "पहली 10 प्राकृत संख्याओं का योग है:",
        "options_en": ["45", "50", "55", "60"],
        "options_hi": ["45", "50", "55", "60"],
        "answer_en": "55",
        "answer_hi": "55",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Value of ∫(0 to 1) x dx is:",
        "question_hi": "0 से 1 तक ∫x dx का मान है:",
        "options_en": ["0", "0.5", "1", "2"],
        "options_hi": ["0", "0.5", "1", "2"],
        "answer_en": "0.5",
        "answer_hi": "0.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Equation of line with slope 2 passing through (1,3) is:",
        "question_hi": "ढाल 2 वाली और (1,3) से गुजरने वाली रेखा का समीकरण है:",
        "options_en": ["y = 2x + 1", "y = 2x + 2", "y = 2x + 3", "y = 2x + 4"],
        "options_hi": ["y = 2x + 1", "y = 2x + 2", "y = 2x + 3", "y = 2x + 4"],
        "answer_en": "y = 2x + 1",
        "answer_hi": "y = 2x + 1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "If cos θ = 0.6, then sin θ is:",
        "question_hi": "यदि cos θ = 0.6, तो sin θ है:",
        "options_en": ["0.4", "0.6", "0.8", "1.0"],
        "options_hi": ["0.4", "0.6", "0.8", "1.0"],
        "answer_en": "0.8",
        "answer_hi": "0.8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Middle term in (a+b)⁴ is:",
        "question_hi": "(a+b)⁴ में मध्य पद है:",
        "options_en": ["a⁴", "b⁴", "4a³b", "6a²b²"],
        "options_hi": ["a⁴", "b⁴", "4a³b", "6a²b²"],
        "answer_en": "6a²b²",
        "answer_hi": "6a²b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Value of cot(90°) is:",
        "question_hi": "cot(90°) का मान है:",
        "options_en": ["0", "1", "√3", "∞"],
        "options_hi": ["0", "1", "√3", "∞"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Solution of 2x - 3 = 7 is:",
        "question_hi": "समीकरण 2x - 3 = 7 का हल है:",
        "options_en": ["x = 2", "x = 3", "x = 4", "x = 5"],
        "options_hi": ["x = 2", "x = 3", "x = 4", "x = 5"],
        "answer_en": "x = 5",
        "answer_hi": "x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "A body moving with constant speed has:",
        "question_hi": "नियत चाल से गतिमान पिंड में होता है:",
        "options_en": ["Zero acceleration", "Constant acceleration", "Variable acceleration", "Infinite acceleration"],
        "options_hi": ["शून्य त्वरण", "नियत त्वरण", "परिवर्ती त्वरण", "अनंत त्वरण"],
        "answer_en": "Zero acceleration",
        "answer_hi": "शून्य त्वरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Power of lens is measured in:",
        "question_hi": "लेंस की क्षमता मापी जाती है:",
        "options_en": ["Meter", "Diopter", "Joule", "Watt"],
        "options_hi": ["मीटर", "डायोप्टर", "जूल", "वाट"],
        "answer_en": "Diopter",
        "answer_hi": "डायोप्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Unit of frequency is:",
        "question_hi": "आवृत्ति की इकाई है:",
        "options_en": ["Hertz", "Newton", "Pascal", "Joule"],
        "options_hi": ["हर्ट्ज", "न्यूटन", "पास्कल", "जूल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Speed of light in vacuum is:",
        "question_hi": "निर्वात में प्रकाश की गति है:",
        "options_en": ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"],
        "options_hi": ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "In nuclear fission, energy is released due to:",
        "question_hi": "नाभिकीय विखंडन में, ऊर्जा मुक्त होती है:",
        "options_en": ["Mass defect", "Charge conservation", "Spin conservation", "Momentum conservation"],
        "options_hi": ["द्रव्यमान क्षति", "आवेश संरक्षण", "स्पिन संरक्षण", "संवेग संरक्षण"],
        "answer_en": "Mass defect",
        "answer_hi": "द्रव्यमान क्षति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "A step-up transformer:",
        "question_hi": "एक स्टेप-अप ट्रांसफॉर्मर:",
        "options_en": ["Increases voltage", "Decreases voltage", "Increases current", "Decreases power"],
        "options_hi": ["वोल्टेज बढ़ाता है", "वोल्टेज घटाता है", "धारा बढ़ाता है", "शक्ति घटाता है"],
        "answer_en": "Increases voltage",
        "answer_hi": "वोल्टेज बढ़ाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Centripetal force required for circular motion is provided by:",
        "question_hi": "वृत्तीय गति के लिए आवश्यक अभिकेंद्रीय बल प्रदान किया जाता है:",
        "options_en": ["Gravity", "Friction", "Tension", "Any of these"],
        "options_hi": ["गुरुत्व", "घर्षण", "तनाव", "इनमें से कोई भी"],
        "answer_en": "Any of these",
        "answer_hi": "इनमें से कोई भी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "In adiabatic process:",
        "question_hi": "रुद्धोष्म प्रक्रम में:",
        "options_en": ["Q = 0", "W = 0", "ΔU = 0", "ΔT = 0"],
        "options_hi": ["Q = 0", "W = 0", "ΔU = 0", "ΔT = 0"],
        "answer_en": "Q = 0",
        "answer_hi": "Q = 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Critical angle is defined for:",
        "question_hi": "क्रांतिक कोण परिभाषित किया जाता है:",
        "options_en": ["Reflection", "Refraction", "Total internal reflection", "Dispersion"],
        "options_hi": ["परावर्तन", "अपवर्तन", "पूर्ण आंतरिक परावर्तन", "विक्षेपण"],
        "answer_en": "Total internal reflection",
        "answer_hi": "पूर्ण आंतरिक परावर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "In photoelectric effect, photoelectric current depends on:",
        "question_hi": "प्रकाश विद्युत प्रभाव में, प्रकाश विद्युत धारा निर्भर करती है:",
        "options_en": ["Frequency of light", "Intensity of light", "Work function", "Stopping potential"],
        "options_hi": ["प्रकाश की आवृत्ति", "प्रकाश की तीव्रता", "कार्य फलन", "निरोधी विभव"],
        "answer_en": "Intensity of light",
        "answer_hi": "प्रकाश की तीव्रता",
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