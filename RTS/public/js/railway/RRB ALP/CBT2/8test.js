const questions = [
    {
      "num": 1,
      "question_en": "What was the fourth planet in the solar system list you memorized? (List: Mercury, Venus, Earth, Mars, Jupiter)",
      "question_hi": "आपके द्वारा याद किए गए सौर मंडल की सूची में चौथा ग्रह कौन सा था? (सूची: बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति)",
      "options_en": ["Venus", "Earth", "Mars", "Jupiter"],
      "options_hi": ["शुक्र", "पृथ्वी", "मंगल", "बृहस्पति"],
      "answer_en": "Mars",
      "answer_hi": "मंगल"
    },
    {
      "num": 2,
      "question_en": "What was the second color in the rainbow sequence you memorized? (List: Violet, Indigo, Blue, Green, Yellow, Orange, Red)",
      "question_hi": "आपके द्वारा याद किए गए इंद्रधनुष के क्रम में दूसरा रंग कौन सा था? (सूची: बैंगनी, नीला, आसमानी, हरा, पीला, नारंगी, लाल)",
      "options_en": ["Indigo", "Blue", "Green", "Yellow"],
      "options_hi": ["नीला", "आसमानी", "हरा", "पीला"],
      "answer_en": "Indigo",
      "answer_hi": "नीला"
    },
    {
      "num": 3,
      "question_en": "What was the fifth day in the creation sequence from Genesis? (List: Light, Sky, Land/Plants, Sun/Moon/Stars, Birds/Fish, Animals/Humans, Rest)",
      "question_hi": "उत्पत्ति के सृजन क्रम में पाँचवाँ दिन क्या था? (सूची: प्रकाश, आकाश, भूमि/पौधे, सूर्य/चंद्रमा/तारे, पक्षी/मछली, पशु/मनुष्य, विश्राम)",
      "options_en": ["Sun/Moon/Stars", "Birds/Fish", "Animals/Humans", "Rest"],
      "options_hi": ["सूर्य/चंद्रमा/तारे", "पक्षी/मछली", "पशु/मनुष्य", "विश्राम"],
      "answer_en": "Birds/Fish",
      "answer_hi": "पक्षी/मछली"
    },
    {
      "num": 4,
      "question_en": "What was the third Mughal emperor in the sequence you memorized? (List: Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb)",
      "question_hi": "आपके द्वारा याद किए गए क्रम में तीसरा मुगल सम्राट कौन था? (सूची: बाबर, हुमायूँ, अकबर, जहाँगीर, शाहजहाँ, औरंगजेब)",
      "options_en": ["Humayun", "Akbar", "Jahangir", "Shah Jahan"],
      "options_hi": ["हुमायूँ", "अकबर", "जहाँगीर", "शाहजहाँ"],
      "answer_en": "Akbar",
      "answer_hi": "अकबर"
    },
    {
      "num": 5,
      "question_en": "What was the fourth prime number in the sequence you memorized? (List: 2, 3, 5, 7, 11, 13)",
      "question_hi": "आपके द्वारा याद किए गए अनुक्रम में चौथी अभाज्य संख्या कौन सी थी? (सूची: 2, 3, 5, 7, 11, 13)",
      "options_en": ["3", "5", "7", "11"],
      "options_hi": ["3", "5", "7", "11"],
      "answer_en": "7",
      "answer_hi": "7"
    },
    {
      "num": 6,
      "question_en": "What was the second layer of Earth's atmosphere from the surface? (List: Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere)",
      "question_hi": "पृथ्वी की सतह से वायुमंडल की दूसरी परत कौन सी थी? (सूची: क्षोभमंडल, समताप मंडल, मध्यमंडल, तापमंडल, बहिर्मंडल)",
      "options_en": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      "options_hi": ["क्षोभमंडल", "समताप मंडल", "मध्यमंडल", "तापमंडल"],
      "answer_en": "Stratosphere",
      "answer_hi": "समताप मंडल"
    },
    {
      "num": 7,
      "question_en": "What was the fifth sense in the human senses list? (List: Sight, Hearing, Smell, Taste, Touch)",
      "question_hi": "मानव इंद्रियों की सूची में पाँचवीं इंद्री कौन सी थी? (सूची: दृष्टि, श्रवण, घ्राण, स्वाद, स्पर्श)",
      "options_en": ["Smell", "Taste", "Touch", "Hearing"],
      "options_hi": ["घ्राण", "स्वाद", "स्पर्श", "श्रवण"],
      "answer_en": "Touch",
      "answer_hi": "स्पर्श"
    },
    {
      "num": 8,
      "question_en": "What was the third stage in the butterfly life cycle? (List: Egg, Caterpillar, Pupa, Adult)",
      "question_hi": "तितली के जीवन चक्र में तीसरा चरण क्या था? (सूची: अंडा, इल्ली, प्यूपा, वयस्क)",
      "options_en": ["Caterpillar", "Pupa", "Adult", "Egg"],
      "options_hi": ["इल्ली", "प्यूपा", "वयस्क", "अंडा"],
      "answer_en": "Pupa",
      "answer_hi": "प्यूपा"
    },
    {
      "num": 9,
      "question_en": "What was the fourth continent by size you memorized? (List: Asia, Africa, North America, South America, Antarctica, Europe, Australia)",
      "question_hi": "आपके द्वारा याद किए गए आकार के अनुसार चौथा महाद्वीप कौन सा था? (सूची: एशिया, अफ्रीका, उत्तरी अमेरिका, दक्षिणी अमेरिका, अंटार्कटिका, यूरोप, ऑस्ट्रेलिया)",
      "options_en": ["North America", "South America", "Antarctica", "Europe"],
      "options_hi": ["उत्तरी अमेरिका", "दक्षिणी अमेरिका", "अंटार्कटिका", "यूरोप"],
      "answer_en": "South America",
      "answer_hi": "दक्षिणी अमेरिका"
    },
    {
      "num": 10,
      "question_en": "What was the second step in the scientific method? (List: Question, Research, Hypothesis, Experiment, Analysis, Conclusion)",
      "question_hi": "वैज्ञानिक विधि में दूसरा चरण क्या था? (सूची: प्रश्न, शोध, परिकल्पना, प्रयोग, विश्लेषण, निष्कर्ष)",
      "options_en": ["Question", "Research", "Hypothesis", "Experiment"],
      "options_hi": ["प्रश्न", "शोध", "परिकल्पना", "प्रयोग"],
      "answer_en": "Research",
      "answer_hi": "शोध"
    },
    {
      "num": 11,
      "question_en": "What was the fifth month in the Roman calendar? (List: March, April, May, June, July, August)",
      "question_hi": "रोमन कैलेंडर में पाँचवाँ महीना कौन सा था? (सूची: मार्च, अप्रैल, मई, जून, जुलाई, अगस्त)",
      "options_en": ["April", "May", "June", "July"],
      "options_hi": ["अप्रैल", "मई", "जून", "जुलाई"],
      "answer_en": "July",
      "answer_hi": "जुलाई"
    },
    {
      "num": 12,
      "question_en": "What was the third basic mathematical operation? (List: Addition, Subtraction, Multiplication, Division)",
      "question_hi": "तीसरा बुनियादी गणितीय संक्रिया क्या थी? (सूची: जोड़, घटाव, गुणा, भाग)",
      "options_en": ["Subtraction", "Multiplication", "Division", "Addition"],
      "options_hi": ["घटाव", "गुणा", "भाग", "जोड़"],
      "answer_en": "Multiplication",
      "answer_hi": "गुणा"
    },
    {
      "num": 13,
      "question_en": "What was the fourth stage in Maslow's hierarchy of needs? (List: Physiological, Safety, Love/Belonging, Esteem, Self-actualization)",
      "question_hi": "मास्लो की आवश्यकताओं के पदानुक्रम में चौथा स्तर क्या था? (सूची: शारीरिक, सुरक्षा, प्रेम/संबंध, सम्मान, आत्म-साक्षात्कार)",
      "options_en": ["Safety", "Love/Belonging", "Esteem", "Self-actualization"],
      "options_hi": ["सुरक्षा", "प्रेम/संबंध", "सम्मान", "आत्म-साक्षात्कार"],
      "answer_en": "Esteem",
      "answer_hi": "सम्मान"
    },
    {
      "num": 14,
      "question_en": "What was the second day of creation in Genesis? (List: Light, Sky, Land/Sea, Sun/Moon, Birds/Fish, Animals/Humans, Rest)",
      "question_hi": "उत्पत्ति में सृजन का दूसरा दिन क्या था? (सूची: प्रकाश, आकाश, भूमि/समुद्र, सूर्य/चंद्रमा, पक्षी/मछली, पशु/मनुष्य, विश्राम)",
      "options_en": ["Light", "Sky", "Land/Sea", "Sun/Moon"],
      "options_hi": ["प्रकाश", "आकाश", "भूमि/समुद्र", "सूर्य/चंद्रमा"],
      "answer_en": "Sky",
      "answer_hi": "आकाश"
    },
    {
      "num": 15,
      "question_en": "What was the fifth book of the Old Testament? (List: Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua)",
      "question_hi": "पुराने नियम की पाँचवीं पुस्तक कौन सी थी? (सूची: उत्पत्ति, निर्गमन, लेवीय, गिनती, व्यवस्थाविवरण, यहोशू)",
      "options_en": ["Leviticus", "Numbers", "Deuteronomy", "Joshua"],
      "options_hi": ["लेवीय", "गिनती", "व्यवस्थाविवरण", "यहोशू"],
      "answer_en": "Deuteronomy",
      "answer_hi": "व्यवस्थाविवरण"
    },
    {
      "num": 16,
      "question_en": "What was the third element in the periodic table? (List: Hydrogen, Helium, Lithium, Beryllium, Boron)",
      "question_hi": "आवर्त सारणी में तीसरा तत्व कौन सा था? (सूची: हाइड्रोजन, हीलियम, लिथियम, बेरिलियम, बोरॉन)",
      "options_en": ["Helium", "Lithium", "Beryllium", "Boron"],
      "options_hi": ["हीलियम", "लिथियम", "बेरिलियम", "बोरॉन"],
      "answer_en": "Lithium",
      "answer_hi": "लिथियम"
    },
    {
      "num": 17,
      "question_en": "What was the fourth stage of grief according to Kübler-Ross? (List: Denial, Anger, Bargaining, Depression, Acceptance)",
      "question_hi": "क्यूबलर-रॉस के अनुसार शोक का चौथा चरण क्या था? (सूची: इनकार, क्रोध, सौदेबाजी, अवसाद, स्वीकृति)",
      "options_en": ["Anger", "Bargaining", "Depression", "Acceptance"],
      "options_hi": ["क्रोध", "सौदेबाजी", "अवसाद", "स्वीकृति"],
      "answer_en": "Depression",
      "answer_hi": "अवसाद"
    },
    {
      "num": 18,
      "question_en": "What was the second largest ocean? (List: Pacific, Atlantic, Indian, Southern, Arctic)",
      "question_hi": "दूसरा सबसे बड़ा महासागर कौन सा था? (सूची: प्रशांत, अटलांटिक, हिंद, दक्षिणी, आर्कटिक)",
      "options_en": ["Pacific", "Atlantic", "Indian", "Southern"],
      "options_hi": ["प्रशांत", "अटलांटिक", "हिंद", "दक्षिणी"],
      "answer_en": "Atlantic",
      "answer_hi": "अटलांटिक"
    },
    {
      "num": 19,
      "question_en": "What was the fifth stage in the water cycle? (List: Evaporation, Condensation, Precipitation, Collection, Transpiration)",
      "question_hi": "जल चक्र में पाँचवाँ चरण क्या था? (सूची: वाष्पीकरण, संघनन, वर्षा, संग्रहण, वाष्पोत्सर्जन)",
      "options_en": ["Condensation", "Precipitation", "Collection", "Transpiration"],
      "options_hi": ["संघनन", "वर्षा", "संग्रहण", "वाष्पोत्सर्जन"],
      "answer_en": "Transpiration",
      "answer_hi": "वाष्पोत्सर्जन"
    },
    {
      "num": 20,
      "question_en": "What was the third book in the Harry Potter series? (List: Philosopher's Stone, Chamber of Secrets, Prisoner of Azkaban, Goblet of Fire, Order of Phoenix)",
      "question_hi": "हैरी पॉटर श्रृंखला में तीसरी पुस्तक कौन सी थी? (सूची: पारस पत्थर, रहस्यों का कमरा, अज़्काबान का कैदी, आग का प्याला, फीनिक्स का आदेश)",
      "options_en": ["Chamber of Secrets", "Prisoner of Azkaban", "Goblet of Fire", "Order of Phoenix"],
      "options_hi": ["रहस्यों का कमरा", "अज़्काबान का कैदी", "आग का प्याला", "फीनिक्स का आदेश"],
      "answer_en": "Prisoner of Azkaban",
      "answer_hi": "अज़्काबान का कैदी"
    },
    {
      "num": 21,
      "question_en": "What was the fourth stage in the rock cycle? (List: Igneous, Weathering, Sedimentary, Metamorphic, Melting)",
      "question_hi": "चट्टान चक्र में चौथा चरण क्या था? (सूची: आग्नेय, अपक्षय, अवसादी, कायांतरित, पिघलना)",
      "options_en": ["Weathering", "Sedimentary", "Metamorphic", "Melting"],
      "options_hi": ["अपक्षय", "अवसादी", "कायांतरित", "पिघलना"],
      "answer_en": "Metamorphic",
      "answer_hi": "कायांतरित"
    },
    {
      "num": 22,
      "question_en": "What was the second planet from the sun? (List: Mercury, Venus, Earth, Mars, Jupiter, Saturn)",
      "question_hi": "सूर्य से दूसरा ग्रह कौन सा था? (सूची: बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि)",
      "options_en": ["Mercury", "Venus", "Earth", "Mars"],
      "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
      "answer_en": "Venus",
      "answer_hi": "शुक्र"
    },
    {
      "num": 23,
      "question_en": "What was the fifth stage of team development? (List: Forming, Storming, Norming, Performing, Adjourning)",
      "question_hi": "टीम विकास का पाँचवाँ चरण क्या था? (सूची: गठन, तूफान, मानदंड, प्रदर्शन, विसर्जन)",
      "options_en": ["Norming", "Performing", "Adjourning", "Forming"],
      "options_hi": ["मानदंड", "प्रदर्शन", "विसर्जन", "गठन"],
      "answer_en": "Adjourning",
      "answer_hi": "विसर्जन"
    },
    {
      "num": 24,
      "question_en": "What was the third stage in the software development lifecycle? (List: Requirements, Design, Implementation, Testing, Deployment, Maintenance)",
      "question_hi": "सॉफ्टवेयर विकास जीवनचक्र में तीसरा चरण क्या था? (सूची: आवश्यकताएँ, डिज़ाइन, कार्यान्वयन, परीक्षण, तैनाती, रखरखाव)",
      "options_en": ["Design", "Implementation", "Testing", "Deployment"],
      "options_hi": ["डिज़ाइन", "कार्यान्वयन", "परीक्षण", "तैनाती"],
      "answer_en": "Implementation",
      "answer_hi": "कार्यान्वयन"
    },
    {
      "num": 25,
      "question_en": "What was the fourth step in CPR procedure? (List: Check response, Call for help, Check breathing, Chest compressions, Rescue breaths)",
      "question_hi": "सीपीआर प्रक्रिया में चौथा चरण क्या था? (सूची: प्रतिक्रिया जाँचें, मदद के लिए बुलाएँ, श्वास जाँचें, छाती संपीड़न, बचाव श्वास)",
      "options_en": ["Check breathing", "Chest compressions", "Rescue breaths", "Call for help"],
      "options_hi": ["श्वास जाँचें", "छाती संपीड़न", "बचाव श्वास", "मदद के लिए बुलाएँ"],
      "answer_en": "Chest compressions",
      "answer_hi": "छाती संपीड़न"
    },
    {
      "num": 26,
      "question_en": "What was the second basic taste? (List: Sweet, Sour, Salty, Bitter, Umami)",
      "question_hi": "दूसरा बुनियादी स्वाद क्या था? (सूची: मीठा, खट्टा, नमकीन, कड़वा, उमामी)",
      "options_en": ["Sweet", "Sour", "Salty", "Bitter"],
      "options_hi": ["मीठा", "खट्टा", "नमकीन", "कड़वा"],
      "answer_en": "Sour",
      "answer_hi": "खट्टा"
    },
    {
      "num": 27,
      "question_en": "What was the fifth stage of sleep? (List: NREM1, NREM2, NREM3, NREM4, REM)",
      "question_hi": "नींद का पाँचवाँ चरण क्या था? (सूची: एनआरईएम1, एनआरईएम2, एनआरईएम3, एनआरईएम4, आरईएम)",
      "options_en": ["NREM3", "NREM4", "REM", "NREM1"],
      "options_hi": ["एनआरईएम3", "एनआरईएम4", "आरईएम", "एनआरईएम1"],
      "answer_en": "REM",
      "answer_hi": "आरईएम"
    },
    {
      "num": 28,
      "question_en": "What was the third layer of skin? (List: Epidermis, Dermis, Hypodermis)",
      "question_hi": "त्वचा की तीसरी परत क्या थी? (सूची: बाह्यत्वचा, वास्तविक त्वचा, अधस्त्वचा)",
      "options_en": ["Epidermis", "Dermis", "Hypodermis", "None of these"],
      "options_hi": ["बाह्यत्वचा", "वास्तविक त्वचा", "अधस्त्वचा", "इनमें से कोई नहीं"],
      "answer_en": "Hypodermis",
      "answer_hi": "अधस्त्वचा"
    },
    {
      "num": 29,
      "question_en": "What was the fourth primary color in printing? (List: Cyan, Magenta, Yellow, Black)",
      "question_hi": "मुद्रण में चौथा प्राथमिक रंग कौन सा था? (सूची: सियान, मैजेंटा, पीला, काला)",
      "options_en": ["Cyan", "Magenta", "Yellow", "Black"],
      "options_hi": ["सियान", "मैजेंटा", "पीला", "काला"],
      "answer_en": "Black",
      "answer_hi": "काला"
    },
    {
      "num": 30,
      "question_en": "What was the second step in the decision-making process? (List: Identify problem, Gather information, Identify alternatives, Weigh evidence, Choose alternative, Take action, Review decision)",
      "question_hi": "निर्णय लेने की प्रक्रिया में दूसरा चरण क्या था? (सूची: समस्या पहचानें, जानकारी एकत्र करें, विकल्प पहचानें, साक्ष्य तौलें, विकल्प चुनें, कार्रवाई करें, निर्णय की समीक्षा करें)",
      "options_en": ["Identify problem", "Gather information", "Identify alternatives", "Weigh evidence"],
      "options_hi": ["समस्या पहचानें", "जानकारी एकत्र करें", "विकल्प पहचानें", "साक्ष्य तौलें"],
      "answer_en": "Gather information",
      "answer_hi": "जानकारी एकत्र करें"
    },
    {
      "num": 31,
      "question_en": "What was the fifth chakra in the Hindu system? (List: Muladhara, Svadhisthana, Manipura, Anahata, Vishuddha, Ajna, Sahasrara)",
      "question_hi": "हिंदू प्रणाली में पाँचवाँ चक्र कौन सा था? (सूची: मूलाधार, स्वाधिष्ठान, मणिपुर, अनाहत, विशुद्ध, आज्ञा, सहस्रार)",
      "options_en": ["Manipura", "Anahata", "Vishuddha", "Ajna"],
      "options_hi": ["मणिपुर", "अनाहत", "विशुद्ध", "आज्ञा"],
      "answer_en": "Vishuddha",
      "answer_hi": "विशुद्ध"
    },
    {
      "num": 32,
      "question_en": "What was the third step in photosynthesis? (List: Light absorption, Water splitting, ATP production, Carbon fixation, Sugar formation)",
      "question_hi": "प्रकाश संश्लेषण में तीसरा चरण क्या था? (सूची: प्रकाश अवशोषण, जल विभाजन, एटीपी उत्पादन, कार्बन स्थिरीकरण, शर्करा निर्माण)",
      "options_en": ["Water splitting", "ATP production", "Carbon fixation", "Sugar formation"],
      "options_hi": ["जल विभाजन", "एटीपी उत्पादन", "कार्बन स्थिरीकरण", "शर्करा निर्माण"],
      "answer_en": "ATP production",
      "answer_hi": "एटीपी उत्पादन"
    },
    {
      "num": 33,
      "question_en": "What was the fourth stage of mitosis? (List: Prophase, Metaphase, Anaphase, Telophase, Cytokinesis)",
      "question_hi": "सूत्री विभाजन का चौथा चरण क्या था? (सूची: पूर्वावस्था, मध्यावस्था, पश्चावस्था, अंतिमावस्था, कोशिका द्रव्य विभाजन)",
      "options_en": ["Metaphase", "Anaphase", "Telophase", "Cytokinesis"],
      "options_hi": ["मध्यावस्था", "पश्चावस्था", "अंतिमावस्था", "कोशिका द्रव्य विभाजन"],
      "answer_en": "Telophase",
      "answer_hi": "अंतिमावस्था"
    },
    {
      "num": 34,
      "question_en": "What was the second step in the writing process? (List: Prewriting, Drafting, Revising, Editing, Publishing)",
      "question_hi": "लेखन प्रक्रिया में दूसरा चरण क्या था? (सूची: पूर्वलेखन, मसौदा, संशोधन, संपादन, प्रकाशन)",
      "options_en": ["Prewriting", "Drafting", "Revising", "Editing"],
      "options_hi": ["पूर्वलेखन", "मसौदा", "संशोधन", "संपादन"],
      "answer_en": "Drafting",
      "answer_hi": "मसौदा"
    },
    {
      "num": 35,
      "question_en": "What was the fifth stage of demographic transition? (List: High stationary, Early expanding, Late expanding, Low stationary, Declining)",
      "question_hi": "जनसांख्यिकीय संक्रमण का पाँचवाँ चरण क्या था? (सूची: उच्च स्थिर, प्रारंभिक विस्तार, देर से विस्तार, निम्न स्थिर, गिरावट)",
      "options_en": ["Late expanding", "Low stationary", "Declining", "High stationary"],
      "options_hi": ["देर से विस्तार", "निम्न स्थिर", "गिरावट", "उच्च स्थिर"],
      "answer_en": "Declining",
      "answer_hi": "गिरावट"
    },
    {
      "num": 36,
      "question_en": "What was the third type of rock? (List: Igneous, Sedimentary, Metamorphic)",
      "question_hi": "तीसरे प्रकार की चट्टान कौन सी थी? (सूची: आग्नेय, अवसादी, कायांतरित)",
      "options_en": ["Igneous", "Sedimentary", "Metamorphic", "None"],
      "options_hi": ["आग्नेय", "अवसादी", "कायांतरित", "कोई नहीं"],
      "answer_en": "Metamorphic",
      "answer_hi": "कायांतरित"
    },
    {
      "num": 37,
      "question_en": "What was the fourth stage in the product lifecycle? (List: Introduction, Growth, Maturity, Decline)",
      "question_hi": "उत्पाद जीवनचक्र में चौथा चरण क्या था? (सूची: परिचय, विकास, परिपक्वता, गिरावट)",
      "options_en": ["Growth", "Maturity", "Decline", "Introduction"],
      "options_hi": ["विकास", "परिपक्वता", "गिरावट", "परिचय"],
      "answer_en": "Decline",
      "answer_hi": "गिरावट"
    },
    {
      "num": 38,
      "question_en": "What was the second stage of cognitive development? (List: Sensorimotor, Preoperational, Concrete operational, Formal operational)",
      "question_hi": "संज्ञानात्मक विकास का दूसरा चरण क्या था? (सूची: संवेदी-चालक, पूर्व संक्रियात्मक, मूर्त संक्रियात्मक, औपचारिक संक्रियात्मक)",
      "options_en": ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"],
      "options_hi": ["संवेदी-चालक", "पूर्व संक्रियात्मक", "मूर्त संक्रियात्मक", "औपचारिक संक्रियात्मक"],
      "answer_en": "Preoperational",
      "answer_hi": "पूर्व संक्रियात्मक"
    },
    {
      "num": 39,
      "question_en": "What was the fifth C of credit? (List: Character, Capacity, Capital, Collateral, Conditions)",
      "question_hi": "क्रेडिट का पाँचवाँ सी क्या था? (सूची: चरित्र, क्षमता, पूंजी, संपार्श्विक, शर्तें)",
      "options_en": ["Capital", "Collateral", "Conditions", "Character"],
      "options_hi": ["पूंजी", "संपार्श्विक", "शर्तें", "चरित्र"],
      "answer_en": "Conditions",
      "answer_hi": "शर्तें"
    },
    {
      "num": 40,
      "question_en": "What was the third step in the engineering design process? (List: Define problem, Research, Develop solutions, Select solution, Prototype, Test, Improve)",
      "question_hi": "इंजीनियरिंग डिज़ाइन प्रक्रिया में तीसरा चरण क्या था? (सूची: समस्या परिभाषित करें, शोध करें, समाधान विकसित करें, समाधान चुनें, प्रोटोटाइप, परीक्षण, सुधार)",
      "options_en": ["Research", "Develop solutions", "Select solution", "Prototype"],
      "options_hi": ["शोध", "समाधान विकसित करें", "समाधान चुनें", "प्रोटोटाइप"],
      "answer_en": "Develop solutions",
      "answer_hi": "समाधान विकसित करें"
    },
    {
      "num": 41,
      "question_en": "What was the fourth stage of Erikson's psychosocial development? (List: Trust vs Mistrust, Autonomy vs Shame, Initiative vs Guilt, Industry vs Inferiority, Identity vs Role confusion)",
      "question_hi": "एरिकसन के मनोसामाजिक विकास का चौथा चरण क्या था? (सूची: विश्वास बनाम अविश्वास, स्वायत्तता बनाम शर्म, पहल बनाम अपराधबोध, उद्योग बनाम हीनता, पहचान बनाम भूमिका भ्रम)",
      "options_en": ["Initiative vs Guilt", "Industry vs Inferiority", "Identity vs Role confusion", "Autonomy vs Shame"],
      "options_hi": ["पहल बनाम अपराधबोध", "उद्योग बनाम हीनता", "पहचान बनाम भूमिका भ्रम", "स्वायत्तता बनाम शर्म"],
      "answer_en": "Industry vs Inferiority",
      "answer_hi": "उद्योग बनाम हीनता"
    },
    {
      "num": 42,
      "question_en": "What was the second step in first aid for burns? (List: Stop burning process, Cool the burn, Protect the burn, Treat pain, Check for shock)",
      "question_hi": "जलन के लिए प्राथमिक चिकित्सा में दूसरा चरण क्या था? (सूची: जलने की प्रक्रिया रोकें, जलन को ठंडा करें, जलन की रक्षा करें, दर्द का इलाज करें, सदमे की जाँच करें)",
      "options_en": ["Stop burning process", "Cool the burn", "Protect the burn", "Treat pain"],
      "options_hi": ["जलने की प्रक्रिया रोकें", "जलन को ठंडा करें", "जलन की रक्षा करें", "दर्द का इलाज करें"],
      "answer_en": "Cool the burn",
      "answer_hi": "जलन को ठंडा करें"
    },
    {
      "num": 43,
      "question_en": "What was the fifth stage of project management? (List: Initiation, Planning, Execution, Monitoring, Closure)",
      "question_hi": "परियोजना प्रबंधन का पाँचवाँ चरण क्या था? (सूची: आरंभ, योजना, निष्पादन, निगरानी, समापन)",
      "options_en": ["Execution", "Monitoring", "Closure", "Initiation"],
      "options_hi": ["निष्पादन", "निगरानी", "समापन", "आरंभ"],
      "answer_en": "Closure",
      "answer_hi": "समापन"
    },
    {
      "num": 44,
      "question_en": "What was the third step in the nursing process? (List: Assessment, Diagnosis, Planning, Implementation, Evaluation)",
      "question_hi": "नर्सिंग प्रक्रिया में तीसरा चरण क्या था? (सूची: मूल्यांकन, निदान, योजना, कार्यान्वयन, मूल्यांकन)",
      "options_en": ["Diagnosis", "Planning", "Implementation", "Evaluation"],
      "options_hi": ["निदान", "योजना", "कार्यान्वयन", "मूल्यांकन"],
      "answer_en": "Planning",
      "answer_hi": "योजना"
    },
    {
      "num": 45,
      "question_en": "What was the fourth stage of change management? (List: Unfreeze, Change, Refreeze, Sustain)",
      "question_hi": "परिवर्तन प्रबंधन का चौथा चरण क्या था? (सूची: खोलना, परिवर्तन, जमना, बनाए रखना)",
      "options_en": ["Unfreeze", "Change", "Refreeze", "Sustain"],
      "options_hi": ["खोलना", "परिवर्तन", "जमना", "बनाए रखना"],
      "answer_en": "Sustain",
      "answer_hi": "बनाए रखना"
    },
    {
      "num": 46,
      "question_en": "What was the second step in conflict resolution? (List: Identify problem, Listen actively, Find common ground, Brainstorm solutions, Agree on solution)",
      "question_hi": "संघर्ष समाधान में दूसरा चरण क्या था? (सूची: समस्या पहचानें, सक्रिय रूप से सुनें, समान आधार खोजें, समाधानों पर विचार करें, समाधान पर सहमत हों)",
      "options_en": ["Identify problem", "Listen actively", "Find common ground", "Brainstorm solutions"],
      "options_hi": ["समस्या पहचानें", "सक्रिय रूप से सुनें", "समान आधार खोजें", "समाधानों पर विचार करें"],
      "answer_en": "Listen actively",
      "answer_hi": "सक्रिय रूप से सुनें"
    },
    {
      "num": 47,
      "question_en": "What was the fifth stage of grief? (List: Denial, Anger, Bargaining, Depression, Acceptance)",
      "question_hi": "शोक का पाँचवाँ चरण क्या था? (सूची: इनकार, क्रोध, सौदेबाजी, अवसाद, स्वीकृति)",
      "options_en": ["Bargaining", "Depression", "Acceptance", "Anger"],
      "options_hi": ["सौदेबाजी", "अवसाद", "स्वीकृति", "क्रोध"],
      "answer_en": "Acceptance",
      "answer_hi": "स्वीकृति"
    },
    {
      "num": 48,
      "question_en": "What was the third step in the ADDIE model? (List: Analysis, Design, Development, Implementation, Evaluation)",
      "question_hi": "एडी मॉडल में तीसरा चरण क्या था? (सूची: विश्लेषण, डिज़ाइन, विकास, कार्यान्वयन, मूल्यांकन)",
      "options_en": ["Design", "Development", "Implementation", "Evaluation"],
      "options_hi": ["डिज़ाइन", "विकास", "कार्यान्वयन", "मूल्यांकन"],
      "answer_en": "Development",
      "answer_hi": "विकास"
    },
    {
      "num": 49,
      "question_en": "What was the fourth stage of the hero's journey? (List: Call to adventure, Refusal of call, Meeting mentor, Crossing threshold, Tests/allies/enemies)",
      "question_hi": "नायक की यात्रा का चौथा चरण क्या था? (सूची: साहसिक कार्य के लिए बुलावा, बुलावे से इनकार, गुरु से मुलाकात, सीमा पार करना, परीक्षण/सहयोगी/दुश्मन)",
      "options_en": ["Meeting mentor", "Crossing threshold", "Tests/allies/enemies", "Refusal of call"],
      "options_hi": ["गुरु से मुलाकात", "सीमा पार करना", "परीक्षण/सहयोगी/दुश्मन", "बुलावे से इनकार"],
      "answer_en": "Crossing threshold",
      "answer_hi": "सीमा पार करना"
    },
    {
      "num": 50,
      "question_en": "What was the second step in the data analysis process? (List: Define question, Collect data, Clean data, Analyze data, Interpret results, Communicate insights)",
      "question_hi": "डेटा विश्लेषण प्रक्रिया में दूसरा चरण क्या था? (सूची: प्रश्न परिभाषित करें, डेटा एकत्र करें, डेटा साफ करें, डेटा का विश्लेषण करें, परिणामों की व्याख्या करें, अंतर्दृष्टि संप्रेषित करें)",
      "options_en": ["Define question", "Collect data", "Clean data", "Analyze data"],
      "options_hi": ["प्रश्न परिभाषित करें", "डेटा एकत्र करें", "डेटा साफ करें", "डेटा का विश्लेषण करें"],
      "answer_en": "Collect data",
      "answer_hi": "डेटा एकत्र करें"
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