const questions = [
    {
        "num": 1,
        "question_en": "The process of conversion of sound energy to electrical energy is called:",
        "question_hi": "ध्वनि ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Amplification", "Transduction", "Modulation", "Oscillation"],
        "options_hi": ["प्रवर्धन", "ट्रांसडक्शन", "मॉडुलन", "दोलन"],
        "answer_en": "Transduction",
        "answer_hi": "ट्रांसडक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The metal used in making nuclear reactors is:",
        "question_hi": "नाभिकीय रिएक्टर बनाने में प्रयुक्त धातु है:",
        "options_en": ["Zirconium", "Uranium", "Plutonium", "All of these"],
        "options_hi": ["जिरकोनियम", "यूरेनियम", "प्लूटोनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The study of the immune system is called:",
        "question_hi": "प्रतिरक्षा प्रणाली का अध्ययन कहलाता है:",
        "options_en": ["Immunology", "Hematology", "Endocrinology", "Neurology"],
        "options_hi": ["प्रतिरक्षा विज्ञान", "रक्त विज्ञान", "अंतःस्राव विज्ञान", "स्नायु विज्ञान"],
        "answer_en": "Immunology",
        "answer_hi": "प्रतिरक्षा विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The chemical formula of calcium hydroxide is:",
        "question_hi": "कैल्शियम हाइड्रॉक्साइड का रासायनिक सूत्र है:",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The SI unit of magnetic field strength is:",
        "question_hi": "चुंबकीय क्षेत्र शक्ति की SI इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The process of conversion of chemical energy to heat energy is:",
        "question_hi": "रासायनिक ऊर्जा का ऊष्मा ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Combustion", "Respiration", "Both A and B", "Photosynthesis"],
        "options_hi": ["दहन", "श्वसन", "A और B दोनों", "प्रकाश संश्लेषण"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The metal used in making computer chips is:",
        "question_hi": "कंप्यूटर चिप्स बनाने में प्रयुक्त धातु है:",
        "options_en": ["Silicon", "Germanium", "Both A and B", "Copper"],
        "options_hi": ["सिलिकॉन", "जर्मेनियम", "A और B दोनों", "तांबा"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The study of the heart is called:",
        "question_hi": "हृदय का अध्ययन कहलाता है:",
        "options_en": ["Cardiology", "Neurology", "Hematology", "Endocrinology"],
        "options_hi": ["हृदय विज्ञान", "स्नायु विज्ञान", "रक्त विज्ञान", "अंतःस्राव विज्ञान"],
        "answer_en": "Cardiology",
        "answer_hi": "हृदय विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The chemical formula of magnesium hydroxide is:",
        "question_hi": "मैग्नीशियम हाइड्रॉक्साइड का रासायनिक सूत्र है:",
        "options_en": ["Mg(OH)₂", "MgO", "MgCO₃", "MgSO₄"],
        "options_hi": ["Mg(OH)₂", "MgO", "MgCO₃", "MgSO₄"],
        "answer_en": "Mg(OH)₂",
        "answer_hi": "Mg(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The SI unit of inductance is:",
        "question_hi": "प्रेरकत्व की SI इकाई है:",
        "options_en": ["Henry", "Farad", "Weber", "Tesla"],
        "options_hi": ["हेनरी", "फैरड", "वेबर", "टेस्ला"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The process of conversion of heat energy to mechanical energy is:",
        "question_hi": "ऊष्मा ऊर्जा का यांत्रिक ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In heat engine", "In generator", "In motor", "In battery"],
        "options_hi": ["ऊष्मा इंजन में", "जनरेटर में", "मोटर में", "बैटरी में"],
        "answer_en": "In heat engine",
        "answer_hi": "ऊष्मा इंजन में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The metal used in making photographic films is:",
        "question_hi": "फोटोग्राफिक फिल्में बनाने में प्रयुक्त धातु है:",
        "options_en": ["Silver", "Aluminum", "Copper", "Iron"],
        "options_hi": ["चांदी", "एल्युमिनियम", "तांबा", "लोहा"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The study of the kidney is called:",
        "question_hi": "वृक्क का अध्ययन कहलाता है:",
        "options_en": ["Nephrology", "Urology", "Cardiology", "Neurology"],
        "options_hi": ["वृक्क विज्ञान", "मूत्र विज्ञान", "हृदय विज्ञान", "स्नायु विज्ञान"],
        "answer_en": "Nephrology",
        "answer_hi": "वृक्क विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The chemical formula of aluminum oxide is:",
        "question_hi": "एल्युमिनियम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["Al₂O₃", "AlO", "Al(OH)₃", "AlCl₃"],
        "options_hi": ["Al₂O₃", "AlO", "Al(OH)₃", "AlCl₃"],
        "answer_en": "Al₂O₃",
        "answer_hi": "Al₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The SI unit of electric conductance is:",
        "question_hi": "विद्युत चालकत्व की SI इकाई है:",
        "options_en": ["Siemens", "Mho", "Both A and B", "Ohm"],
        "options_hi": ["सीमेंस", "म्हो", "A और B दोनों", "ओम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The process of conversion of mechanical energy to sound energy is:",
        "question_hi": "यांत्रिक ऊर्जा का ध्वनि ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In speaker", "In microphone", "In generator", "In motor"],
        "options_hi": ["स्पीकर में", "माइक्रोफोन में", "जनरेटर में", "मोटर में"],
        "answer_en": "In speaker",
        "answer_hi": "स्पीकर में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The metal used in making fireworks for red color is:",
        "question_hi": "आतिशबाजी में लाल रंग के लिए प्रयुक्त धातु है:",
        "options_en": ["Strontium", "Lithium", "Calcium", "Sodium"],
        "options_hi": ["स्ट्रोंशियम", "लिथियम", "कैल्शियम", "सोडियम"],
        "answer_en": "Strontium",
        "answer_hi": "स्ट्रोंशियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The study of the liver is called:",
        "question_hi": "यकृत का अध्ययन कहलाता है:",
        "options_en": ["Hepatology", "Gastroenterology", "Nephrology", "Cardiology"],
        "options_hi": ["यकृत विज्ञान", "गैस्ट्रोएंटरोलॉजी", "वृक्क विज्ञान", "हृदय विज्ञान"],
        "answer_en": "Hepatology",
        "answer_hi": "यकृत विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The chemical formula of iron oxide (rust) is:",
        "question_hi": "आयरन ऑक्साइड (जंग) का रासायनिक सूत्र है:",
        "options_en": ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "options_hi": ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "answer_en": "Fe₂O₃",
        "answer_hi": "Fe₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The SI unit of radioactive activity is:",
        "question_hi": "रेडियोधर्मी सक्रियता की SI इकाई है:",
        "options_en": ["Becquerel", "Curie", "Roentgen", "Gray"],
        "options_hi": ["बेकरेल", "क्यूरी", "रेंटजन", "ग्रे"],
        "answer_en": "Becquerel",
        "answer_hi": "बेकरेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The process of conversion of electrical energy to light energy is:",
        "question_hi": "विद्युत ऊर्जा का प्रकाश ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In LED", "In solar cell", "In battery", "In generator"],
        "options_hi": ["LED में", "सौर सेल में", "बैटरी में", "जनरेटर में"],
        "answer_en": "In LED",
        "answer_hi": "LED में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The metal used in making batteries for electric vehicles is:",
        "question_hi": "इलेक्ट्रिक वाहनों की बैटरियाँ बनाने में प्रयुक्त धातु है:",
        "options_en": ["Lithium", "Nickel", "Cobalt", "All of these"],
        "options_hi": ["लिथियम", "निकल", "कोबाल्ट", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The study of the skin is called:",
        "question_hi": "त्वचा का अध्ययन कहलाता है:",
        "options_en": ["Dermatology", "Cosmetology", "Trichology", "Onychology"],
        "options_hi": ["त्वचा विज्ञान", "सौंदर्य विज्ञान", "बाल विज्ञान", "नख विज्ञान"],
        "answer_en": "Dermatology",
        "answer_hi": "त्वचा विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The chemical formula of copper sulfate is:",
        "question_hi": "कॉपर सल्फेट का रासायनिक सूत्र है:",
        "options_en": ["CuSO₄", "CuO", "Cu₂O", "CuCl₂"],
        "options_hi": ["CuSO₄", "CuO", "Cu₂O", "CuCl₂"],
        "answer_en": "CuSO₄",
        "answer_hi": "CuSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The SI unit of absorbed radiation dose is:",
        "question_hi": "अवशोषित विकिरण खुराक की SI इकाई है:",
        "options_en": ["Gray", "Sievert", "Becquerel", "Curie"],
        "options_hi": ["ग्रे", "सीवर्ट", "बेकरेल", "क्यूरी"],
        "answer_en": "Gray",
        "answer_hi": "ग्रे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The process of conversion of light energy to electrical energy in solar cells is:",
        "question_hi": "सौर सेल में प्रकाश ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Photovoltaic effect", "Photoelectric effect", "Both A and B", "Thermoelectric effect"],
        "options_hi": ["फोटोवोल्टाइक प्रभाव", "प्रकाश विद्युत प्रभाव", "A और B दोनों", "थर्मोइलेक्ट्रिक प्रभाव"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The metal used in making superconducting magnets is:",
        "question_hi": "अतिचालक चुंबक बनाने में प्रयुक्त धातु है:",
        "options_en": ["Niobium", "Titanium", "Vanadium", "All of these"],
        "options_hi": ["नायोबियम", "टाइटेनियम", "वेनेडियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The study of the eye is called:",
        "question_hi": "नेत्र का अध्ययन कहलाता है:",
        "options_en": ["Ophthalmology", "Optometry", "Otology", "Rhinology"],
        "options_hi": ["नेत्र विज्ञान", "ऑप्टोमेट्री", "कर्ण विज्ञान", "नासिका विज्ञान"],
        "answer_en": "Ophthalmology",
        "answer_hi": "नेत्र विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The chemical formula of zinc oxide is:",
        "question_hi": "जिंक ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["ZnO", "Zn(OH)₂", "ZnCO₃", "ZnSO₄"],
        "options_hi": ["ZnO", "Zn(OH)₂", "ZnCO₃", "ZnSO₄"],
        "answer_en": "ZnO",
        "answer_hi": "ZnO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The SI unit of equivalent radiation dose is:",
        "question_hi": "समतुल्य विकिरण खुराक की SI इकाई है:",
        "options_en": ["Sievert", "Gray", "Becquerel", "Curie"],
        "options_hi": ["सीवर्ट", "ग्रे", "बेकरेल", "क्यूरी"],
        "answer_en": "Sievert",
        "answer_hi": "सीवर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The process of conversion of chemical energy to light energy is:",
        "question_hi": "रासायनिक ऊर्जा का प्रकाश ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In glow sticks", "In LEDs", "In bulbs", "In lasers"],
        "options_hi": ["ग्लो स्टिक्स में", "LED में", "बल्ब में", "लेजर में"],
        "answer_en": "In glow sticks",
        "answer_hi": "ग्लो स्टिक्स में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The metal used in making catalytic converters is:",
        "question_hi": "उत्प्रेरक कन्वर्टर बनाने में प्रयुक्त धातु है:",
        "options_en": ["Platinum", "Palladium", "Rhodium", "All of these"],
        "options_hi": ["प्लैटिनम", "पैलेडियम", "रोडियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The study of the ear is called:",
        "question_hi": "कान का अध्ययन कहलाता है:",
        "options_en": ["Otology", "Audiology", "Ophthalmology", "Rhinology"],
        "options_hi": ["कर्ण विज्ञान", "श्रवण विज्ञान", "नेत्र विज्ञान", "नासिका विज्ञान"],
        "answer_en": "Otology",
        "answer_hi": "कर्ण विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The chemical formula of lead oxide is:",
        "question_hi": "लेड ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["PbO", "PbO₂", "Pb₃O₄", "All of these"],
        "options_hi": ["PbO", "PbO₂", "Pb₃O₄", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The SI unit of catalytic activity is:",
        "question_hi": "उत्प्रेरक सक्रियता की SI इकाई है:",
        "options_en": ["Katal", "Mole/second", "Both A and B", "Pascal"],
        "options_hi": ["काटल", "मोल/सेकंड", "A और B दोनों", "पास्कल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The process of conversion of nuclear energy to heat energy is:",
        "question_hi": "नाभिकीय ऊर्जा का ऊष्मा ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Nuclear fission", "Nuclear fusion", "Both A and B", "Radioactive decay"],
        "options_hi": ["नाभिकीय विखंडन", "नाभिकीय संलयन", "A और B दोनों", "रेडियोधर्मी क्षय"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The metal used in making radiation shielding is:",
        "question_hi": "विकिरण सुरक्षा बनाने में प्रयुक्त धातु है:",
        "options_en": ["Lead", "Uranium", "Plutonium", "All of these"],
        "options_hi": ["सीसा", "यूरेनियम", "प्लूटोनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The study of the nose is called:",
        "question_hi": "नाक का अध्ययन कहलाता है:",
        "options_en": ["Rhinology", "Otology", "Ophthalmology", "Laryngology"],
        "options_hi": ["नासिका विज्ञान", "कर्ण विज्ञान", "नेत्र विज्ञान", "कंठ विज्ञान"],
        "answer_en": "Rhinology",
        "answer_hi": "नासिका विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The chemical formula of mercury oxide is:",
        "question_hi": "मर्क्युरी ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["HgO", "Hg₂O", "Hg(OH)₂", "HgCl₂"],
        "options_hi": ["HgO", "Hg₂O", "Hg(OH)₂", "HgCl₂"],
        "answer_en": "HgO",
        "answer_hi": "HgO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The SI unit of plane angle is:",
        "question_hi": "समतल कोण की SI इकाई है:",
        "options_en": ["Radian", "Degree", "Steradian", "Gradian"],
        "options_hi": ["रेडियन", "डिग्री", "स्टेरेडियन", "ग्रेडियन"],
        "answer_en": "Radian",
        "answer_hi": "रेडियन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The process of conversion of heat energy to electrical energy is:",
        "question_hi": "ऊष्मा ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Thermoelectric effect", "Seebeck effect", "Both A and B", "Peltier effect"],
        "options_hi": ["थर्मोइलेक्ट्रिक प्रभाव", "सीबेक प्रभाव", "A और B दोनों", "पेल्टियर प्रभाव"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The metal used in making dental implants is:",
        "question_hi": "दंत प्रत्यारोपण बनाने में प्रयुक्त धातु है:",
        "options_en": ["Titanium", "Stainless steel", "Gold", "All of these"],
        "options_hi": ["टाइटेनियम", "स्टेनलेस स्टील", "सोना", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The study of the throat is called:",
        "question_hi": "गले का अध्ययन कहलाता है:",
        "options_en": ["Laryngology", "Pharyngology", "Both A and B", "Otology"],
        "options_hi": ["कंठ विज्ञान", "ग्रसनी विज्ञान", "A और B दोनों", "कर्ण विज्ञान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The chemical formula of chromium oxide is:",
        "question_hi": "क्रोमियम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["Cr₂O₃", "CrO₃", "CrO", "All of these"],
        "options_hi": ["Cr₂O₃", "CrO₃", "CrO", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The SI unit of solid angle is:",
        "question_hi": "ठोस कोण की SI इकाई है:",
        "options_en": ["Steradian", "Radian", "Degree", "Gradian"],
        "options_hi": ["स्टेरेडियन", "रेडियन", "डिग्री", "ग्रेडियन"],
        "answer_en": "Steradian",
        "answer_hi": "स्टेरेडियन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The process of conversion of electrical energy to chemical energy is:",
        "question_hi": "विद्युत ऊर्जा का रासायनिक ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Electrolysis", "Charging battery", "Both A and B", "Galvanization"],
        "options_hi": ["विद्युत अपघटन", "बैटरी चार्जिंग", "A और B दोनों", "गैल्वनीकरण"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The metal used in making spacecraft heat shields is:",
        "question_hi": "अंतरिक्ष यान के हीट शील्ड बनाने में प्रयुक्त धातु है:",
        "options_en": ["Titanium", "Carbon composite", "Both A and B", "Aluminum"],
        "options_hi": ["टाइटेनियम", "कार्बन कम्पोजिट", "A और B दोनों", "एल्युमिनियम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The study of bones is called:",
        "question_hi": "हड्डियों का अध्ययन कहलाता है:",
        "options_en": ["Osteology", "Arthrology", "Myology", "Neurology"],
        "options_hi": ["अस्थि विज्ञान", "संधि विज्ञान", "पेशी विज्ञान", "स्नायु विज्ञान"],
        "answer_en": "Osteology",
        "answer_hi": "अस्थि विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The chemical formula of manganese dioxide is:",
        "question_hi": "मैंगनीज डाइऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["MnO₂", "MnO", "Mn₂O₃", "Mn₃O₄"],
        "options_hi": ["MnO₂", "MnO", "Mn₂O₃", "Mn₃O₄"],
        "answer_en": "MnO₂",
        "answer_hi": "MnO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The SI unit of thermodynamic temperature is:",
        "question_hi": "ऊष्मागतिकी तापमान की SI इकाई है:",
        "options_en": ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
        "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The process of conversion of sound energy to mechanical energy is:",
        "question_hi": "ध्वनि ऊर्जा का यांत्रिक ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In microphone", "In speaker", "In generator", "In motor"],
        "options_hi": ["माइक्रोफोन में", "स्पीकर में", "जनरेटर में", "मोटर में"],
        "answer_en": "In microphone",
        "answer_hi": "माइक्रोफोन में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The metal used in making artificial joints is:",
        "question_hi": "कृत्रिम जोड़ बनाने में प्रयुक्त धातु है:",
        "options_en": ["Titanium", "Cobalt-chromium", "Stainless steel", "All of these"],
        "options_hi": ["टाइटेनियम", "कोबाल्ट-क्रोमियम", "स्टेनलेस स्टील", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The study of joints is called:",
        "question_hi": "जोड़ों का अध्ययन कहलाता है:",
        "options_en": ["Arthrology", "Osteology", "Myology", "Neurology"],
        "options_hi": ["संधि विज्ञान", "अस्थि विज्ञान", "पेशी विज्ञान", "स्नायु विज्ञान"],
        "answer_en": "Arthrology",
        "answer_hi": "संधि विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The chemical formula of nickel oxide is:",
        "question_hi": "निकल ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["NiO", "Ni₂O₃", "NiO₂", "All of these"],
        "options_hi": ["NiO", "Ni₂O₃", "NiO₂", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The SI unit of electric field strength is:",
        "question_hi": "विद्युत क्षेत्र शक्ति की SI इकाई है:",
        "options_en": ["Volt per meter", "Newton per coulomb", "Both A and B", "Tesla"],
        "options_hi": ["वोल्ट प्रति मीटर", "न्यूटन प्रति कूलॉम", "A और B दोनों", "टेस्ला"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The process of conversion of mechanical energy to heat energy is:",
        "question_hi": "यांत्रिक ऊर्जा का ऊष्मा ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Friction", "Compression", "Both A and B", "Expansion"],
        "options_hi": ["घर्षण", "संपीड़न", "A और B दोनों", "विस्तार"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The metal used in making pacemakers is:",
        "question_hi": "पेसमेकर बनाने में प्रयुक्त धातु है:",
        "options_en": ["Titanium", "Stainless steel", "Platinum", "All of these"],
        "options_hi": ["टाइटेनियम", "स्टेनलेस स्टील", "प्लैटिनम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The study of muscles is called:",
        "question_hi": "मांसपेशियों का अध्ययन कहलाता है:",
        "options_en": ["Myology", "Osteology", "Arthrology", "Neurology"],
        "options_hi": ["पेशी विज्ञान", "अस्थि विज्ञान", "संधि विज्ञान", "स्नायु विज्ञान"],
        "answer_en": "Myology",
        "answer_hi": "पेशी विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The chemical formula of cobalt oxide is:",
        "question_hi": "कोबाल्ट ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["CoO", "Co₂O₃", "Co₃O₄", "All of these"],
        "options_hi": ["CoO", "Co₂O₃", "Co₃O₄", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The SI unit of magnetic flux density is:",
        "question_hi": "चुंबकीय फ्लक्स घनत्व की SI इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The process of conversion of heat energy to chemical energy is:",
        "question_hi": "ऊष्मा ऊर्जा का रासायनिक ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Endothermic reactions", "Thermal decomposition", "Both A and B", "Exothermic reactions"],
        "options_hi": ["ऊष्माशोषी अभिक्रियाएं", "तापीय अपघटन", "A और B दोनों", "ऊष्माक्षेपी अभिक्रियाएं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The metal used in making MRI machines is:",
        "question_hi": "MRI मशीनें बनाने में प्रयुक्त धातु है:",
        "options_en": ["Niobium-titanium", "Copper", "Aluminum", "All of these"],
        "options_hi": ["नायोबियम-टाइटेनियम", "तांबा", "एल्युमिनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The study of blood vessels is called:",
        "question_hi": "रक्त वाहिकाओं का अध्ययन कहलाता है:",
        "options_en": ["Angiology", "Cardiology", "Hematology", "Neurology"],
        "options_hi": ["रक्त वाहिका विज्ञान", "हृदय विज्ञान", "रक्त विज्ञान", "स्नायु विज्ञान"],
        "answer_en": "Angiology",
        "answer_hi": "रक्त वाहिका विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The chemical formula of tin oxide is:",
        "question_hi": "टिन ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["SnO", "SnO₂", "Both A and B", "Sn₂O₃"],
        "options_hi": ["SnO", "SnO₂", "A और B दोनों", "Sn₂O₃"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The SI unit of electrical conductivity is:",
        "question_hi": "विद्युत चालकता की SI इकाई है:",
        "options_en": ["Siemens per meter", "Mho per meter", "Both A and B", "Ohm meter"],
        "options_hi": ["सीमेंस प्रति मीटर", "म्हो प्रति मीटर", "A और B दोनों", "ओम मीटर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The process of conversion of chemical energy to nuclear energy is:",
        "question_hi": "रासायनिक ऊर्जा का नाभिकीय ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Not possible", "Nuclear fusion", "Nuclear fission", "Radioactive decay"],
        "options_hi": ["संभव नहीं", "नाभिकीय संलयन", "नाभिकीय विखंडन", "रेडियोधर्मी क्षय"],
        "answer_en": "Not possible",
        "answer_hi": "संभव नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The metal used in making telescope mirrors is:",
        "question_hi": "दूरबीन दर्पण बनाने में प्रयुक्त धातु है:",
        "options_en": ["Aluminum", "Silver", "Both A and B", "Gold"],
        "options_hi": ["एल्युमिनियम", "चांदी", "A और B दोनों", "सोना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The study of glands is called:",
        "question_hi": "ग्रंथियों का अध्ययन कहलाता है:",
        "options_en": ["Adenology", "Endocrinology", "Both A and B", "Histology"],
        "options_hi": ["ग्रंथि विज्ञान", "अंतःस्राव विज्ञान", "A और B दोनों", "ऊतक विज्ञान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The chemical formula of barium oxide is:",
        "question_hi": "बेरियम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["BaO", "BaO₂", "Both A and B", "Ba(OH)₂"],
        "options_hi": ["BaO", "BaO₂", "A और B दोनों", "Ba(OH)₂"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The SI unit of electrical resistivity is:",
        "question_hi": "विद्युत प्रतिरोधकता की SI इकाई है:",
        "options_en": ["Ohm meter", "Siemens per meter", "Mho meter", "Volt meter"],
        "options_hi": ["ओम मीटर", "सीमेंस प्रति मीटर", "म्हो मीटर", "वोल्ट मीटर"],
        "answer_en": "Ohm meter",
        "answer_hi": "ओम मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The process of conversion of nuclear energy to light energy is:",
        "question_hi": "नाभिकीय ऊर्जा का प्रकाश ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In nuclear reactions", "In stars", "Both A and B", "In LEDs"],
        "options_hi": ["नाभिकीय अभिक्रियाओं में", "तारों में", "A और B दोनों", "LED में"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The metal used in making jet engine turbines is:",
        "question_hi": "जेट इंजन टरबाइन बनाने में प्रयुक्त धातु है:",
        "options_en": ["Nickel alloys", "Titanium alloys", "Both A and B", "Steel"],
        "options_hi": ["निकल मिश्र धातु", "टाइटेनियम मिश्र धातु", "A और B दोनों", "इस्पात"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The study of the stomach is called:",
        "question_hi": "आमाशय का अध्ययन कहलाता है:",
        "options_en": ["Gastrology", "Gastroenterology", "Both A and B", "Hepatology"],
        "options_hi": ["आमाशय विज्ञान", "गैस्ट्रोएंटरोलॉजी", "A और B दोनों", "यकृत विज्ञान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The chemical formula of silver oxide is:",
        "question_hi": "सिल्वर ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["Ag₂O", "AgO", "Ag₂O₂", "Ag₂O₃"],
        "options_hi": ["Ag₂O", "AgO", "Ag₂O₂", "Ag₂O₃"],
        "answer_en": "Ag₂O",
        "answer_hi": "Ag₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The SI unit of electrical reactance is:",
        "question_hi": "विद्युत प्रतिघात की SI इकाई है:",
        "options_en": ["Ohm", "Henry", "Farad", "Siemens"],
        "options_hi": ["ओम", "हेनरी", "फैरड", "सीमेंस"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The process of conversion of light energy to heat energy is:",
        "question_hi": "प्रकाश ऊर्जा का ऊष्मा ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Absorption", "Black body radiation", "Both A and B", "Reflection"],
        "options_hi": ["अवशोषण", "कृष्णिका विकिरण", "A और B दोनों", "परावर्तन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The metal used in making bullet casings is:",
        "question_hi": "बुलेट कैसिंग बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Brass", "Both A and B", "Steel"],
        "options_hi": ["तांबा", "पीतल", "A और B दोनों", "इस्पात"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The study of the intestines is called:",
        "question_hi": "आंतों का अध्ययन कहलाता है:",
        "options_en": ["Enterology", "Gastroenterology", "Both A and B", "Hepatology"],
        "options_hi": ["आंत्र विज्ञान", "गैस्ट्रोएंटरोलॉजी", "A और B दोनों", "यकृत विज्ञान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The chemical formula of gold oxide is:",
        "question_hi": "गोल्ड ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["Au₂O₃", "AuO", "Au₂O", "Au(OH)₃"],
        "options_hi": ["Au₂O₃", "AuO", "Au₂O", "Au(OH)₃"],
        "answer_en": "Au₂O₃",
        "answer_hi": "Au₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The SI unit of electrical impedance is:",
        "question_hi": "विद्युत प्रतिबाधा की SI इकाई है:",
        "options_en": ["Ohm", "Henry", "Farad", "Siemens"],
        "options_hi": ["ओम", "हेनरी", "फैरड", "सीमेंस"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The process of conversion of heat energy to sound energy is:",
        "question_hi": "ऊष्मा ऊर्जा का ध्वनि ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In thermoacoustic engines", "In speakers", "In microphones", "Not possible"],
        "options_hi": ["थर्मोएकॉस्टिक इंजन में", "स्पीकर में", "माइक्रोफोन में", "संभव नहीं"],
        "answer_en": "In thermoacoustic engines",
        "answer_hi": "थर्मोएकॉस्टिक इंजन में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The metal used in making musical instrument strings is:",
        "question_hi": "संगीत वाद्ययंत्र की तारें बनाने में प्रयुक्त धातु है:",
        "options_en": ["Steel", "Brass", "Bronze", "All of these"],
        "options_hi": ["इस्पात", "पीतल", "कांस्य", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The study of the brain is called:",
        "question_hi": "मस्तिष्क का अध्ययन कहलाता है:",
        "options_en": ["Neurology", "Psychiatry", "Both A and B", "Psychology"],
        "options_hi": ["स्नायु विज्ञान", "मनोचिकित्सा", "A और B दोनों", "मनोविज्ञान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The chemical formula of platinum oxide is:",
        "question_hi": "प्लैटिनम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["PtO", "PtO₂", "Pt₂O₃", "Pt₃O₄"],
        "options_hi": ["PtO", "PtO₂", "Pt₂O₃", "Pt₃O₄"],
        "answer_en": "PtO₂",
        "answer_hi": "PtO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The SI unit of electrical admittance is:",
        "question_hi": "विद्युत अभिग्राहिता की SI इकाई है:",
        "options_en": ["Siemens", "Mho", "Both A and B", "Ohm"],
        "options_hi": ["सीमेंस", "म्हो", "A और B दोनों", "ओम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The process of conversion of sound energy to heat energy is:",
        "question_hi": "ध्वनि ऊर्जा का ऊष्मा ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Acoustic absorption", "In speakers", "In microphones", "Not significant"],
        "options_hi": ["ध्वनिक अवशोषण", "स्पीकर में", "माइक्रोफोन में", "महत्वपूर्ण नहीं"],
        "answer_en": "Acoustic absorption",
        "answer_hi": "ध्वनिक अवशोषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The metal used in making dental braces is:",
        "question_hi": "दंत ब्रेसिज़ बनाने में प्रयुक्त धातु है:",
        "options_en": ["Stainless steel", "Titanium", "Nickel-titanium", "All of these"],
        "options_hi": ["स्टेनलेस स्टील", "टाइटेनियम", "निकल-टाइटेनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The study of the spinal cord is called:",
        "question_hi": "मेरुरज्जु का अध्ययन कहलाता है:",
        "options_en": ["Myelology", "Neurology", "Both A and B", "Osteology"],
        "options_hi": ["मेरुरज्जु विज्ञान", "स्नायु विज्ञान", "A और B दोनों", "अस्थि विज्ञान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The chemical formula of tungsten oxide is:",
        "question_hi": "टंगस्टन ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["WO₃", "WO₂", "W₂O₅", "All of these"],
        "options_hi": ["WO₃", "WO₂", "W₂O₅", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The SI unit of electrical susceptance is:",
        "question_hi": "विद्युत संवेदनशीलता की SI इकाई है:",
        "options_en": ["Siemens", "Mho", "Both A and B", "Ohm"],
        "options_hi": ["सीमेंस", "म्हो", "A और B दोनों", "ओम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The process of conversion of nuclear energy to sound energy is:",
        "question_hi": "नाभिकीय ऊर्जा का ध्वनि ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In nuclear explosions", "Not significant", "In speakers", "In microphones"],
        "options_hi": ["नाभिकीय विस्फोटों में", "महत्वपूर्ण नहीं", "स्पीकर में", "माइक्रोफोन में"],
        "answer_en": "In nuclear explosions",
        "answer_hi": "नाभिकीय विस्फोटों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The metal used in making surgical staples is:",
        "question_hi": "शल्य चिकित्सा स्टेपल बनाने में प्रयुक्त धातु है:",
        "options_en": ["Titanium", "Stainless steel", "Both A and B", "Copper"],
        "options_hi": ["टाइटेनियम", "स्टेनलेस स्टील", "A और B दोनों", "तांबा"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The study of the lungs is called:",
        "question_hi": "फेफड़ों का अध्ययन कहलाता है:",
        "options_en": ["Pulmonology", "Respiratory medicine", "Both A and B", "Cardiology"],
        "options_hi": ["फुफ्फुस विज्ञान", "श्वसन चिकित्सा", "A और B दोनों", "हृदय विज्ञान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The chemical formula of molybdenum oxide is:",
        "question_hi": "मोलिब्डेनम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["MoO₃", "MoO₂", "Mo₂O₅", "All of these"],
        "options_hi": ["MoO₃", "MoO₂", "Mo₂O₅", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The SI unit of electrical permittivity is:",
        "question_hi": "विद्युत परावैद्युतांक की SI इकाई है:",
        "options_en": ["Farad per meter", "Coulomb² per Newton meter²", "Both A and B", "Siemens per meter"],
        "options_hi": ["फैरड प्रति मीटर", "कूलॉम² प्रति न्यूटन मीटर²", "A और B दोनों", "सीमेंस प्रति मीटर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The process of conversion of chemical energy to sound energy is:",
        "question_hi": "रासायनिक ऊर्जा का ध्वनि ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In explosives", "In speakers", "In microphones", "Not significant"],
        "options_hi": ["विस्फोटकों में", "स्पीकर में", "माइक्रोफोन में", "महत्वपूर्ण नहीं"],
        "answer_en": "In explosives",
        "answer_hi": "विस्फोटकों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The metal used in making artificial heart valves is:",
        "question_hi": "कृत्रिम हृदय वाल्व बनाने में प्रयुक्त धातु है:",
        "options_en": ["Titanium", "Pyrolytic carbon", "Both A and B", "Stainless steel"],
        "options_hi": ["टाइटेनियम", "पाइरोलाइटिक कार्बन", "A और B दोनों", "स्टेनलेस स्टील"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The study of cancer is called:",
        "question_hi": "कैंसर का अध्ययन कहलाता है:",
        "options_en": ["Oncology", "Pathology", "Both A and B", "Hematology"],
        "options_hi": ["ऑन्कोलॉजी", "रोग विज्ञान", "A और B दोनों", "रक्त विज्ञान"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The chemical formula of vanadium oxide is:",
        "question_hi": "वेनेडियम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["V₂O₅", "VO₂", "V₂O₃", "All of these"],
        "options_hi": ["V₂O₅", "VO₂", "V₂O₃", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The SI unit of electrical permeability is:",
        "question_hi": "विद्युत पारगम्यता की SI इकाई है:",
        "options_en": ["Henry per meter", "Newton per ampere²", "Both A and B", "Tesla meter per ampere"],
        "options_hi": ["हेनरी प्रति मीटर", "न्यूटन प्रति एम्पियर²", "A और B दोनों", "टेस्ला मीटर प्रति एम्पियर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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