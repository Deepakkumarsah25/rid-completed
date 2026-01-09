const questions =[
    {
      "num": 1,
      "question_en": "What was the third word in the list you memorized? (List: Rose, Lily, Marigold, Lotus, Sunflower)",
      "question_hi": "आपके द्वारा याद की गई सूची में तीसरा शब्द क्या था? (सूची: गुलाब, लिली, गेंदा, कमल, सूरजमुखी)",
      "options_en": ["Marigold", "Lily", "Lotus", "Sunflower"],
      "options_hi": ["गेंदा", "लिली", "कमल", "सूरजमुखी"],
      "answer_en": "Marigold",
      "answer_hi": "गेंदा"
    },
    {
      "num": 2,
      "question_en": "What was the second color in the list you memorized? (List: Red, Orange, Yellow, Green, Blue)",
      "question_hi": "आपके द्वारा याद की गई सूची में दूसरा रंग क्या था? (सूची: लाल, नारंगी, पीला, हरा, नीला)",
      "options_en": ["Red", "Orange", "Yellow", "Green"],
      "options_hi": ["लाल", "नारंगी", "पीला", "हरा"],
      "answer_en": "Orange",
      "answer_hi": "नारंगी"
    },
    {
      "num": 3,
      "question_en": "What was the fourth day in the week list you memorized? (List: Sunday, Monday, Tuesday, Wednesday, Thursday)",
      "question_hi": "आपके द्वारा याद किए गए सप्ताह की सूची में चौथा दिन क्या था? (सूची: रविवार, सोमवार, मंगलवार, बुधवार, गुरुवार)",
      "options_en": ["Tuesday", "Wednesday", "Thursday", "Monday"],
      "options_hi": ["मंगलवार", "बुधवार", "गुरुवार", "सोमवार"],
      "answer_en": "Wednesday",
      "answer_hi": "बुधवार"
    },
    {
      "num": 4,
      "question_en": "What was the third month in the list you memorized? (List: January, February, March, April, May)",
      "question_hi": "आपके द्वारा याद की गई सूची में तीसरा महीना क्या था? (सूची: जनवरी, फरवरी, मार्च, अप्रैल, मई)",
      "options_en": ["February", "March", "April", "May"],
      "options_hi": ["फरवरी", "मार्च", "अप्रैल", "मई"],
      "answer_en": "March",
      "answer_hi": "मार्च"
    },
    {
      "num": 5,
      "question_en": "What was the fifth planet in the solar system list? (List: Mercury, Venus, Earth, Mars, Jupiter, Saturn)",
      "question_hi": "सौर मंडल की सूची में पाँचवाँ ग्रह कौन सा था? (सूची: बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि)",
      "options_en": ["Mars", "Jupiter", "Saturn", "Earth"],
      "options_hi": ["मंगल", "बृहस्पति", "शनि", "पृथ्वी"],
      "answer_en": "Jupiter",
      "answer_hi": "बृहस्पति"
    },
    {
      "num": 6,
      "question_en": "What was the second vowel in the alphabet list? (List: A, E, I, O, U)",
      "question_hi": "वर्णमाला सूची में दूसरा स्वर क्या था? (सूची: ए, ई, आई, ओ, यू)",
      "options_en": ["A", "E", "I", "O"],
      "options_hi": ["ए", "ई", "आई", "ओ"],
      "answer_en": "E",
      "answer_hi": "ई"
    },
    {
      "num": 7,
      "question_en": "What was the fourth continent in size order list? (List: Asia, Africa, North America, South America, Antarctica)",
      "question_hi": "आकार क्रम सूची में चौथा महाद्वीप कौन सा था? (सूची: एशिया, अफ्रीका, उत्तरी अमेरिका, दक्षिणी अमेरिका, अंटार्कटिका)",
      "options_en": ["Africa", "North America", "South America", "Antarctica"],
      "options_hi": ["अफ्रीका", "उत्तरी अमेरिका", "दक्षिणी अमेरिका", "अंटार्कटिका"],
      "answer_en": "South America",
      "answer_hi": "दक्षिणी अमेरिका"
    },
    {
      "num": 8,
      "question_en": "What was the third sense in the human senses list? (List: Sight, Hearing, Smell, Taste, Touch)",
      "question_hi": "मानव इंद्रियों की सूची में तीसरी इंद्री क्या थी? (सूची: दृष्टि, श्रवण, घ्राण, स्वाद, स्पर्श)",
      "options_en": ["Hearing", "Smell", "Taste", "Touch"],
      "options_hi": ["श्रवण", "घ्राण", "स्वाद", "स्पर्श"],
      "answer_en": "Smell",
      "answer_hi": "घ्राण"
    },
    {
      "num": 9,
      "question_en": "What was the fifth ocean in the world list? (List: Pacific, Atlantic, Indian, Southern, Arctic)",
      "question_hi": "विश्व की सूची में पाँचवाँ महासागर कौन सा था? (सूची: प्रशांत, अटलांटिक, हिंद, दक्षिणी, आर्कटिक)",
      "options_en": ["Indian", "Southern", "Arctic", "Atlantic"],
      "options_hi": ["हिंद", "दक्षिणी", "आर्कटिक", "अटलांटिक"],
      "answer_en": "Arctic",
      "answer_hi": "आर्कटिक"
    },
    {
      "num": 10,
      "question_en": "What was the second primary color in the list? (List: Red, Blue, Yellow, Green, Purple)",
      "question_hi": "सूची में दूसरा प्राथमिक रंग क्या था? (सूची: लाल, नीला, पीला, हरा, बैंगनी)",
      "options_en": ["Red", "Blue", "Yellow", "Green"],
      "options_hi": ["लाल", "नीला", "पीला", "हरा"],
      "answer_en": "Blue",
      "answer_hi": "नीला"
    },
    {
      "num": 11,
      "question_en": "What was the fourth direction in the compass list? (List: North, East, South, West)",
      "question_hi": "कम्पास सूची में चौथी दिशा क्या थी? (सूची: उत्तर, पूर्व, दक्षिण, पश्चिम)",
      "options_en": ["East", "South", "West", "North"],
      "options_hi": ["पूर्व", "दक्षिण", "पश्चिम", "उत्तर"],
      "answer_en": "West",
      "answer_hi": "पश्चिम"
    },
    {
      "num": 12,
      "question_en": "What was the third season in the year list? (List: Spring, Summer, Autumn, Winter)",
      "question_hi": "वर्ष सूची में तीसरा मौसम क्या था? (सूची: वसंत, गर्मी, पतझड़, सर्दी)",
      "options_en": ["Summer", "Autumn", "Winter", "Spring"],
      "options_hi": ["गर्मी", "पतझड़", "सर्दी", "वसंत"],
      "answer_en": "Autumn",
      "answer_hi": "पतझड़"
    },
    {
      "num": 13,
      "question_en": "What was the fifth element in ancient Greek list? (List: Earth, Water, Air, Fire, Aether)",
      "question_hi": "प्राचीन यूनानी सूची में पाँचवाँ तत्व क्या था? (सूची: पृथ्वी, जल, वायु, अग्नि, ईथर)",
      "options_en": ["Air", "Fire", "Aether", "Water"],
      "options_hi": ["वायु", "अग्नि", "ईथर", "जल"],
      "answer_en": "Aether",
      "answer_hi": "ईथर"
    },
    {
      "num": 14,
      "question_en": "What was the second largest planet in our solar system list? (List: Jupiter, Saturn, Uranus, Neptune, Earth)",
      "question_hi": "हमारे सौर मंडल की सूची में दूसरा सबसे बड़ा ग्रह कौन सा था? (सूची: बृहस्पति, शनि, अरुण, वरुण, पृथ्वी)",
      "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
      "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
      "answer_en": "Saturn",
      "answer_hi": "शनि"
    },
    {
      "num": 15,
      "question_en": "What was the fourth stage in butterfly life cycle list? (List: Egg, Caterpillar, Pupa, Adult)",
      "question_hi": "तितली जीवन चक्र सूची में चौथा चरण क्या था? (सूची: अंडा, इल्ली, प्यूपा, वयस्क)",
      "options_en": ["Caterpillar", "Pupa", "Adult", "Egg"],
      "options_hi": ["इल्ली", "प्यूपा", "वयस्क", "अंडा"],
      "answer_en": "Adult",
      "answer_hi": "वयस्क"
    },
    {
      "num": 16,
      "question_en": "What was the third basic taste in the list? (List: Sweet, Sour, Salty, Bitter, Umami)",
      "question_hi": "सूची में तीसरा बुनियादी स्वाद क्या था? (सूची: मीठा, खट्टा, नमकीन, कड़वा, उमामी)",
      "options_en": ["Sour", "Salty", "Bitter", "Umami"],
      "options_hi": ["खट्टा", "नमकीन", "कड़वा", "उमामी"],
      "answer_en": "Salty",
      "answer_hi": "नमकीन"
    },
    {
      "num": 17,
      "question_en": "What was the fifth sense in the human body list? (List: Sight, Hearing, Smell, Taste, Touch)",
      "question_hi": "मानव शरीर सूची में पाँचवीं इंद्री क्या था? (सूची: दृष्टि, श्रवण, घ्राण, स्वाद, स्पर्श)",
      "options_en": ["Smell", "Taste", "Touch", "Hearing"],
      "options_hi": ["घ्राण", "स्वाद", "स्पर्श", "श्रवण"],
      "answer_en": "Touch",
      "answer_hi": "स्पर्श"
    },
    {
      "num": 18,
      "question_en": "What was the second layer of Earth's atmosphere list? (List: Troposphere, Stratosphere, Mesosphere, Thermosphere)",
      "question_hi": "पृथ्वी के वायुमंडल सूची में दूसरी परत क्या थी? (सूची: क्षोभमंडल, समताप मंडल, मध्यमंडल, तापमंडल)",
      "options_en": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      "options_hi": ["क्षोभमंडल", "समताप मंडल", "मध्यमंडल", "तापमंडल"],
      "answer_en": "Stratosphere",
      "answer_hi": "समताप मंडल"
    },
    {
      "num": 19,
      "question_en": "What was the fourth prime number in the list? (List: 2, 3, 5, 7, 11)",
      "question_hi": "सूची में चौथी अभाज्य संख्या क्या थी? (सूची: 2, 3, 5, 7, 11)",
      "options_en": ["3", "5", "7", "11"],
      "options_hi": ["3", "5", "7", "11"],
      "answer_en": "7",
      "answer_hi": "7"
    },
    {
      "num": 20,
      "question_en": "What was the third stage of water cycle list? (List: Evaporation, Condensation, Precipitation, Collection)",
      "question_hi": "जल चक्र सूची में तीसरा चरण क्या था? (सूची: वाष्पीकरण, संघनन, वर्षा, संग्रहण)",
      "options_en": ["Condensation", "Precipitation", "Collection", "Evaporation"],
      "options_hi": ["संघनन", "वर्षा", "संग्रहण", "वाष्पीकरण"],
      "answer_en": "Precipitation",
      "answer_hi": "वर्षा"
    },
    {
      "num": 21,
      "question_en": "What was the fifth day of creation in Genesis list? (List: Light, Sky, Land, Sun, Birds, Animals, Rest)",
      "question_hi": "उत्पत्ति सूची में सृजन का पाँचवाँ दिन क्या था? (सूची: प्रकाश, आकाश, भूमि, सूर्य, पक्षी, पशु, विश्राम)",
      "options_en": ["Sun", "Birds", "Animals", "Rest"],
      "options_hi": ["सूर्य", "पक्षी", "पशु", "विश्राम"],
      "answer_en": "Birds",
      "answer_hi": "पक्षी"
    },
    {
      "num": 22,
      "question_en": "What was the second step in scientific method list? (List: Question, Research, Hypothesis, Experiment, Conclusion)",
      "question_hi": "वैज्ञानिक विधि सूची में दूसरा चरण क्या था? (सूची: प्रश्न, शोध, परिकल्पना, प्रयोग, निष्कर्ष)",
      "options_en": ["Question", "Research", "Hypothesis", "Experiment"],
      "options_hi": ["प्रश्न", "शोध", "परिकल्पना", "प्रयोग"],
      "answer_en": "Research",
      "answer_hi": "शोध"
    },
    {
      "num": 23,
      "question_en": "What was the fourth stage of mitosis list? (List: Prophase, Metaphase, Anaphase, Telophase)",
      "question_hi": "सूत्रीविभाजन सूची में चौथा चरण क्या था? (सूची: पूर्वावस्था, मध्यावस्था, पश्चावस्था, अंतिमावस्था)",
      "options_en": ["Metaphase", "Anaphase", "Telophase", "Prophase"],
      "options_hi": ["मध्यावस्था", "पश्चावस्था", "अंतिमावस्था", "पूर्वावस्था"],
      "answer_en": "Telophase",
      "answer_hi": "अंतिमावस्था"
    },
    {
      "num": 24,
      "question_en": "What was the third type of rock in geology list? (List: Igneous, Sedimentary, Metamorphic)",
      "question_hi": "भूविज्ञान सूची में तीसरे प्रकार की चट्टान क्या थी? (सूची: आग्नेय, अवसादी, कायांतरित)",
      "options_en": ["Igneous", "Sedimentary", "Metamorphic", "None"],
      "options_hi": ["आग्नेय", "अवसादी", "कायांतरित", "कोई नहीं"],
      "answer_en": "Metamorphic",
      "answer_hi": "कायांतरित"
    },
    {
      "num": 25,
      "question_en": "What was the fifth stage of grief list? (List: Denial, Anger, Bargaining, Depression, Acceptance)",
      "question_hi": "शोक सूची का पाँचवाँ चरण क्या था? (सूची: इनकार, क्रोध, सौदेबाजी, अवसाद, स्वीकृति)",
      "options_en": ["Bargaining", "Depression", "Acceptance", "Anger"],
      "options_hi": ["सौदेबाजी", "अवसाद", "स्वीकृति", "क्रोध"],
      "answer_en": "Acceptance",
      "answer_hi": "स्वीकृति"
    },
    {
      "num": 26,
      "question_en": "What was the second C in 4C's of diamonds list? (List: Carat, Cut, Color, Clarity)",
      "question_hi": "हीरे के 4C सूची में दूसरा C क्या था? (सूची: कैरेट, कट, कलर, क्लैरिटी)",
      "options_en": ["Carat", "Cut", "Color", "Clarity"],
      "options_hi": ["कैरेट", "कट", "कलर", "क्लैरिटी"],
      "answer_en": "Cut",
      "answer_hi": "कट"
    },
    {
      "num": 27,
      "question_en": "What was the fourth stage in product lifecycle list? (List: Introduction, Growth, Maturity, Decline)",
      "question_hi": "उत्पाद जीवनचक्र सूची में चौथा चरण क्या था? (सूची: परिचय, विकास, परिपक्वता, गिरावट)",
      "options_en": ["Growth", "Maturity", "Decline", "Introduction"],
      "options_hi": ["विकास", "परिपक्वता", "गिरावट", "परिचय"],
      "answer_en": "Decline",
      "answer_hi": "गिरावट"
    },
    {
      "num": 28,
      "question_en": "What was the third primary color in light list? (List: Red, Green, Blue)",
      "question_hi": "प्रकाश सूची में तीसरा प्राथमिक रंग क्या था? (सूची: लाल, हरा, नीला)",
      "options_en": ["Red", "Green", "Blue", "Yellow"],
      "options_hi": ["लाल", "हरा", "नीला", "पीला"],
      "answer_en": "Blue",
      "answer_hi": "नीला"
    },
    {
      "num": 29,
      "question_en": "What was the fifth level in Maslow's hierarchy list? (List: Physiological, Safety, Love, Esteem, Self-actualization)",
      "question_hi": "मास्लो के पदानुक्रम सूची में पाँचवाँ स्तर क्या था? (सूची: शारीरिक, सुरक्षा, प्रेम, सम्मान, आत्म-साक्षात्कार)",
      "options_en": ["Safety", "Love", "Esteem", "Self-actualization"],
      "options_hi": ["सुरक्षा", "प्रेम", "सम्मान", "आत्म-साक्षात्कार"],
      "answer_en": "Self-actualization",
      "answer_hi": "आत्म-साक्षात्कार"
    },
    {
      "num": 30,
      "question_en": "What was the second stage in Erikson's development list? (List: Trust, Autonomy, Initiative, Industry, Identity)",
      "question_hi": "एरिकसन के विकास सूची में दूसरा चरण क्या था? (सूची: विश्वास, स्वायत्तता, पहल, उद्योग, पहचान)",
      "options_en": ["Trust", "Autonomy", "Initiative", "Industry"],
      "options_hi": ["विश्वास", "स्वायत्तता", "पहल", "उद्योग"],
      "answer_en": "Autonomy",
      "answer_hi": "स्वायत्तता"
    },
    {
      "num": 31,
      "question_en": "What was the fourth stage of sleep list? (List: NREM1, NREM2, NREM3, REM)",
      "question_hi": "नींद सूची का चौथा चरण क्या था? (सूची: एनआरईएम1, एनआरईएम2, एनआरईएम3, आरईएम)",
      "options_en": ["NREM2", "NREM3", "REM", "NREM1"],
      "options_hi": ["एनआरईएम2", "एनआरईएम3", "आरईएम", "एनआरईएम1"],
      "answer_en": "REM",
      "answer_hi": "आरईएम"
    },
    {
      "num": 32,
      "question_en": "What was the third stage of team development list? (List: Forming, Storming, Norming, Performing)",
      "question_hi": "टीम विकास सूची का तीसरा चरण क्या था? (सूची: गठन, तूफान, मानदंड, प्रदर्शन)",
      "options_en": ["Storming", "Norming", "Performing", "Forming"],
      "options_hi": ["तूफान", "मानदंड", "प्रदर्शन", "गठन"],
      "answer_en": "Norming",
      "answer_hi": "मानदंड"
    },
    {
      "num": 33,
      "question_en": "What was the fifth element in periodic table list? (List: Hydrogen, Helium, Lithium, Beryllium, Boron)",
      "question_hi": "आवर्त सारणी सूची में पाँचवाँ तत्व क्या था? (सूची: हाइड्रोजन, हीलियम, लिथियम, बेरिलियम, बोरॉन)",
      "options_en": ["Lithium", "Beryllium", "Boron", "Helium"],
      "options_hi": ["लिथियम", "बेरिलियम", "बोरॉन", "हीलियम"],
      "answer_en": "Boron",
      "answer_hi": "बोरॉन"
    },
    {
      "num": 34,
      "question_en": "What was the second step in CPR list? (List: Check response, Call help, Check breathing, Chest compressions)",
      "question_hi": "सीपीआर सूची में दूसरा चरण क्या था? (सूची: प्रतिक्रिया जाँचें, मदद बुलाएँ, श्वास जाँचें, छाती संपीड़न)",
      "options_en": ["Check response", "Call help", "Check breathing", "Chest compressions"],
      "options_hi": ["प्रतिक्रिया जाँचें", "मदद बुलाएँ", "श्वास जाँचें", "छाती संपीड़न"],
      "answer_en": "Call help",
      "answer_hi": "मदद बुलाएँ"
    },
    {
      "num": 35,
      "question_en": "What was the fourth stage in demographic transition list? (List: High stationary, Early expanding, Late expanding, Low stationary)",
      "question_hi": "जनसांख्यिकीय संक्रमण सूची में चौथा चरण क्या था? (सूची: उच्च स्थिर, प्रारंभिक विस्तार, देर से विस्तार, निम्न स्थिर)",
      "options_en": ["Early expanding", "Late expanding", "Low stationary", "High stationary"],
      "options_hi": ["प्रारंभिक विस्तार", "देर से विस्तार", "निम्न स्थिर", "उच्च स्थिर"],
      "answer_en": "Low stationary",
      "answer_hi": "निम्न स्थिर"
    },
    {
      "num": 36,
      "question_en": "What was the third step in water treatment list? (List: Coagulation, Sedimentation, Filtration, Disinfection)",
      "question_hi": "जल उपचार सूची में तीसरा चरण क्या था? (सूची: संगुणन, अवसादन, निस्यंदन, कीटाणुशोधन)",
      "options_en": ["Sedimentation", "Filtration", "Disinfection", "Coagulation"],
      "options_hi": ["अवसादन", "निस्यंदन", "कीटाणुशोधन", "संगुणन"],
      "answer_en": "Filtration",
      "answer_hi": "निस्यंदन"
    },
    {
      "num": 37,
      "question_en": "What was the fifth stage in project management list? (List: Initiation, Planning, Execution, Monitoring, Closure)",
      "question_hi": "परियोजना प्रबंधन सूची में पाँचवाँ चरण क्या था? (सूची: आरंभ, योजना, निष्पादन, निगरानी, समापन)",
      "options_en": ["Execution", "Monitoring", "Closure", "Initiation"],
      "options_hi": ["निष्पादन", "निगरानी", "समापन", "आरंभ"],
      "answer_en": "Closure",
      "answer_hi": "समापन"
    },
    {
      "num": 38,
      "question_en": "What was the second stage in change management list? (List: Unfreeze, Change, Refreeze)",
      "question_hi": "परिवर्तन प्रबंधन सूची में दूसरा चरण क्या था? (सूची: खोलना, परिवर्तन, जमना)",
      "options_en": ["Unfreeze", "Change", "Refreeze", "None"],
      "options_hi": ["खोलना", "परिवर्तन", "जमना", "कोई नहीं"],
      "answer_en": "Change",
      "answer_hi": "परिवर्तन"
    },
    {
      "num": 39,
      "question_en": "What was the fourth stage in software development list? (List: Requirements, Design, Implementation, Testing, Deployment)",
      "question_hi": "सॉफ्टवेयर विकास सूची में चौथा चरण क्या था? (सूची: आवश्यकताएँ, डिज़ाइन, कार्यान्वयन, परीक्षण, तैनाती)",
      "options_en": ["Design", "Implementation", "Testing", "Deployment"],
      "options_hi": ["डिज़ाइन", "कार्यान्वयन", "परीक्षण", "तैनाती"],
      "answer_en": "Testing",
      "answer_hi": "परीक्षण"
    },
    {
      "num": 40,
      "question_en": "What was the third stage in writing process list? (List: Prewriting, Drafting, Revising, Editing, Publishing)",
      "question_hi": "लेखन प्रक्रिया सूची में तीसरा चरण क्या था? (सूची: पूर्वलेखन, मसौदा, संशोधन, संपादन, प्रकाशन)",
      "options_en": ["Drafting", "Revising", "Editing", "Publishing"],
      "options_hi": ["मसौदा", "संशोधन", "संपादन", "प्रकाशन"],
      "answer_en": "Revising",
      "answer_hi": "संशोधन"
    },
    {
      "num": 41,
      "question_en": "What was the fifth stage in ADDIE model list? (List: Analysis, Design, Development, Implementation, Evaluation)",
      "question_hi": "एडी मॉडल सूची में पाँचवाँ चरण क्या था? (सूची: विश्लेषण, डिज़ाइन, विकास, कार्यान्वयन, मूल्यांकन)",
      "options_en": ["Development", "Implementation", "Evaluation", "Analysis"],
      "options_hi": ["विकास", "कार्यान्वयन", "मूल्यांकन", "विश्लेषण"],
      "answer_en": "Evaluation",
      "answer_hi": "मूल्यांकन"
    },
    {
      "num": 42,
      "question_en": "What was the second step in nursing process list? (List: Assessment, Diagnosis, Planning, Implementation, Evaluation)",
      "question_hi": "नर्सिंग प्रक्रिया सूची में दूसरा चरण क्या था? (सूची: मूल्यांकन, निदान, योजना, कार्यान्वयन, मूल्यांकन)",
      "options_en": ["Assessment", "Diagnosis", "Planning", "Implementation"],
      "options_hi": ["मूल्यांकन", "निदान", "योजना", "कार्यान्वयन"],
      "answer_en": "Diagnosis",
      "answer_hi": "निदान"
    },
    {
      "num": 43,
      "question_en": "What was the fourth stage in rock cycle list? (List: Igneous, Weathering, Sedimentary, Metamorphic, Melting)",
      "question_hi": "चट्टान चक्र सूची में चौथा चरण क्या था? (सूची: आग्नेय, अपक्षय, अवसादी, कायांतरित, पिघलना)",
      "options_en": ["Weathering", "Sedimentary", "Metamorphic", "Melting"],
      "options_hi": ["अपक्षय", "अवसादी", "कायांतरित", "पिघलना"],
      "answer_en": "Metamorphic",
      "answer_hi": "कायांतरित"
    },
    {
      "num": 44,
      "question_en": "What was the third chakra in yoga list? (List: Root, Sacral, Solar Plexus, Heart, Throat)",
      "question_hi": "योग सूची में तीसरा चक्र क्या था? (सूची: मूल, स्वाधिष्ठान, मणिपुर, अनाहत, विशुद्ध)",
      "options_en": ["Sacral", "Solar Plexus", "Heart", "Throat"],
      "options_hi": ["स्वाधिष्ठान", "मणिपुर", "अनाहत", "विशुद्ध"],
      "answer_en": "Solar Plexus",
      "answer_hi": "मणिपुर"
    },
    {
      "num": 45,
      "question_en": "What was the fifth step in decision making list? (List: Identify problem, Gather information, Identify alternatives, Weigh evidence, Choose alternative)",
      "question_hi": "निर्णय लेने की सूची में पाँचवाँ चरण क्या था? (सूची: समस्या पहचानें, जानकारी एकत्र करें, विकल्प पहचानें, साक्ष्य तौलें, विकल्प चुनें)",
      "options_en": ["Identify alternatives", "Weigh evidence", "Choose alternative", "Gather information"],
      "options_hi": ["विकल्प पहचानें", "साक्ष्य तौलें", "विकल्प चुनें", "जानकारी एकत्र करें"],
      "answer_en": "Choose alternative",
      "answer_hi": "विकल्प चुनें"
    },
    {
      "num": 46,
      "question_en": "What was the second step in data analysis list? (List: Define question, Collect data, Clean data, Analyze data, Interpret results)",
      "question_hi": "डेटा विश्लेषण सूची में दूसरा चरण क्या था? (सूची: प्रश्न परिभाषित करें, डेटा एकत्र करें, डेटा साफ करें, डेटा का विश्लेषण करें, परिणामों की व्याख्या करें)",
      "options_en": ["Define question", "Collect data", "Clean data", "Analyze data"],
      "options_hi": ["प्रश्न परिभाषित करें", "डेटा एकत्र करें", "डेटा साफ करें", "डेटा का विश्लेषण करें"],
      "answer_en": "Collect data",
      "answer_hi": "डेटा एकत्र करें"
    },
    {
      "num": 47,
      "question_en": "What was the fourth stage in hero's journey list? (List: Call to adventure, Refusal, Meeting mentor, Crossing threshold)",
      "question_hi": "नायक की यात्रा सूची में चौथा चरण क्या था? (सूची: साहसिक कार्य के लिए बुलावा, इनकार, गुरु से मुलाकात, सीमा पार करना)",
      "options_en": ["Refusal", "Meeting mentor", "Crossing threshold", "Call to adventure"],
      "options_hi": ["इनकार", "गुरु से मुलाकात", "सीमा पार करना", "साहसिक कार्य के लिए बुलावा"],
      "answer_en": "Crossing threshold",
      "answer_hi": "सीमा पार करना"
    },
    {
      "num": 48,
      "question_en": "What was the third step in photosynthesis list? (List: Light absorption, Water splitting, ATP production, Carbon fixation)",
      "question_hi": "प्रकाश संश्लेषण सूची में तीसरा चरण क्या था? (सूची: प्रकाश अवशोषण, जल विभाजन, एटीपी उत्पादन, कार्बन स्थिरीकरण)",
      "options_en": ["Water splitting", "ATP production", "Carbon fixation", "Light absorption"],
      "options_hi": ["जल विभाजन", "एटीपी उत्पादन", "कार्बन स्थिरीकरण", "प्रकाश अवशोषण"],
      "answer_en": "ATP production",
      "answer_hi": "एटीपी उत्पादन"
    },
    {
      "num": 49,
      "question_en": "What was the fifth stage in Kübler-Ross model list? (List: Denial, Anger, Bargaining, Depression, Acceptance)",
      "question_hi": "क्यूबलर-रॉस मॉडल सूची में पाँचवाँ चरण क्या था? (सूची: इनकार, क्रोध, सौदेबाजी, अवसाद, स्वीकृति)",
      "options_en": ["Bargaining", "Depression", "Acceptance", "Anger"],
      "options_hi": ["सौदेबाजी", "अवसाद", "स्वीकृति", "क्रोध"],
      "answer_en": "Acceptance",
      "answer_hi": "स्वीकृति"
    },
    {
      "num": 50,
      "question_en": "What was the fourth basic operation in math list? (List: Addition, Subtraction, Multiplication, Division)",
      "question_hi": "गणित सूची में चौथी बुनियादी संक्रिया क्या थी? (सूची: जोड़, घटाव, गुणा, भाग)",
      "options_en": ["Subtraction", "Multiplication", "Division", "Addition"],
      "options_hi": ["घटाव", "गुणा", "भाग", "जोड़"],
      "answer_en": "Division",
      "answer_hi": "भाग"
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