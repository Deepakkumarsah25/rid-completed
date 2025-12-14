const questions = [
    {
        "num": 1,
        "question_en": "What is the study of human societies, cultures, and their development called?",
        "question_hi": "मानव समाजों, संस्कृतियों और उनके विकास के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Sociology", "Anthropology", "History", "Psychology"],
        "options_hi": ["समाजशास्त्र", "मानवविज्ञान", "इतिहास", "मनोविज्ञान"],
        "answer_en": "Sociology",
        "answer_hi": "समाजशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which imaginary line divides the Earth into Eastern and Western Hemispheres?",
        "question_hi": "कौन सी काल्पनिक रेखा पृथ्वी को पूर्वी और पश्चिमी गोलार्ध में विभाजित करती है?",
        "options_en": ["Prime Meridian", "Equator", "International Date Line", "Tropic of Cancer"],
        "options_hi": ["प्राइम मेरिडियन", "भूमध्य रेखा", "अंतर्राष्ट्रीय तिथि रेखा", "कर्क रेखा"],
        "answer_en": "Prime Meridian",
        "answer_hi": "प्राइम मेरिडियन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the system of government where power is divided between central and state governments?",
        "question_hi": "सरकार की वह प्रणाली क्या है जहाँ शक्ति केंद्र और राज्य सरकारों के बीच विभाजित होती है?",
        "options_en": ["Federalism", "Unitary System", "Confederation", "Democracy"],
        "options_hi": ["संघवाद", "एकात्मक प्रणाली", "संघ", "लोकतंत्र"],
        "answer_en": "Federalism",
        "answer_hi": "संघवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which river valley civilization developed in Mesopotamia?",
        "question_hi": "मेसोपोटामिया में कौन सी नदी घाटी सभ्यता विकसित हुई?",
        "options_en": ["Sumerian", "Egyptian", "Indus Valley", "Chinese"],
        "options_hi": ["सुमेरियन", "मिस्र", "सिंधु घाटी", "चीनी"],
        "answer_en": "Sumerian",
        "answer_hi": "सुमेरियन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the study of production, distribution, and consumption of goods and services called?",
        "question_hi": "वस्तुओं और सेवाओं के उत्पादन, वितरण और खपत के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Economics", "Commerce", "Business Studies", "Finance"],
        "options_hi": ["अर्थशास्त्र", "वाणिज्य", "व्यवसाय अध्ययन", "वित्त"],
        "answer_en": "Economics",
        "answer_hi": "अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which mountain range separates the Indian subcontinent from the Tibetan Plateau?",
        "question_hi": "कौन सा पर्वत श्रृंखला भारतीय उपमहाद्वीप को तिब्बती पठार से अलग करती है?",
        "options_en": ["Himalayas", "Andes", "Rockies", "Alps"],
        "options_hi": ["हिमालय", "एंडीज", "रॉकी", "आल्प्स"],
        "answer_en": "Himalayas",
        "answer_hi": "हिमालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the term for the total value of goods and services produced in a country in a year?",
        "question_hi": "किसी देश में एक वर्ष में उत्पादित वस्तुओं और सेवाओं के कुल मूल्य को क्या कहा जाता है?",
        "options_en": ["Gross Domestic Product (GDP)", "Net National Product", "Per Capita Income", "National Income"],
        "options_hi": ["सकल घरेलू उत्पाद (जीडीपी)", "शुद्ध राष्ट्रीय उत्पाद", "प्रति व्यक्ति आय", "राष्ट्रीय आय"],
        "answer_en": "Gross Domestic Product (GDP)",
        "answer_hi": "सकल घरेलू उत्पाद (जीडीपी)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which ocean is located between Africa, Asia, Australia, and the Southern Ocean?",
        "question_hi": "कौन सा महासागर अफ्रीका, एशिया, ऑस्ट्रेलिया और दक्षिणी महासागर के बीच स्थित है?",
        "options_en": ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
        "options_hi": ["हिंद महासागर", "प्रशांत महासागर", "अटलांटिक महासागर", "आर्कटिक महासागर"],
        "answer_en": "Indian Ocean",
        "answer_hi": "हिंद महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the study of human behavior in social groups called?",
        "question_hi": "सामाजिक समूहों में मानव व्यवहार के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Social Psychology", "Sociology", "Anthropology", "Behavioral Science"],
        "options_hi": ["सामाजिक मनोविज्ञान", "समाजशास्त्र", "मानवविज्ञान", "व्यवहारिक विज्ञान"],
        "answer_en": "Social Psychology",
        "answer_hi": "सामाजिक मनोविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which desert is located in northern China and southern Mongolia?",
        "question_hi": "कौन सा रेगिस्तान उत्तरी चीन और दक्षिणी मंगोलिया में स्थित है?",
        "options_en": ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Kalahari Desert"],
        "options_hi": ["गोबी रेगिस्तान", "सहारा रेगिस्तान", "अरब रेगिस्तान", "कालाहारी रेगिस्तान"],
        "answer_en": "Gobi Desert",
        "answer_hi": "गोबी रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the system of government where citizens elect representatives to make laws?",
        "question_hi": "सरकार की वह प्रणाली क्या है जहाँ नागरिक कानून बनाने के लिए प्रतिनिधियों का चुनाव करते हैं?",
        "options_en": ["Representative Democracy", "Direct Democracy", "Monarchy", "Autocracy"],
        "options_hi": ["प्रतिनिधि लोकतंत्र", "प्रत्यक्ष लोकतंत्र", "राजतंत्र", "निरंकुशता"],
        "answer_en": "Representative Democracy",
        "answer_hi": "प्रतिनिधि लोकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which ancient civilization developed the writing system known as hieroglyphics?",
        "question_hi": "किस प्राचीन सभ्यता ने हाइरोग्लिफ़िक्स के रूप में ज्ञात लेखन प्रणाली विकसित की?",
        "options_en": ["Egyptian", "Mesopotamian", "Indus Valley", "Mayan"],
        "options_hi": ["मिस्र", "मेसोपोटामिया", "सिंधु घाटी", "मयन"],
        "answer_en": "Egyptian",
        "answer_hi": "मिस्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the study of the Earth's atmosphere and weather patterns called?",
        "question_hi": "पृथ्वी के वायुमंडल और मौसम पैटर्न के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Meteorology", "Climatology", "Atmospheric Science", "Geography"],
        "options_hi": ["मौसम विज्ञान", "जलवायु विज्ञान", "वायुमंडलीय विज्ञान", "भूगोल"],
        "answer_en": "Meteorology",
        "answer_hi": "मौसम विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which river is the longest in South America?",
        "question_hi": "दक्षिण अमेरिका की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Amazon River", "Paraná River", "Orinoco River", "Madeira River"],
        "options_hi": ["अमेज़न नदी", "पराना नदी", "ओरिनोको नदी", "मदीरा नदी"],
        "answer_en": "Amazon River",
        "answer_hi": "अमेज़न नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the economic system based on private ownership of means of production?",
        "question_hi": "उत्पादन के साधनों के निजी स्वामित्व पर आधारित आर्थिक प्रणाली क्या है?",
        "options_en": ["Capitalism", "Socialism", "Communism", "Mixed Economy"],
        "options_hi": ["पूंजीवाद", "समाजवाद", "साम्यवाद", "मिश्रित अर्थव्यवस्था"],
        "answer_en": "Capitalism",
        "answer_hi": "पूंजीवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which sea is surrounded by Europe, Anatolia, and the Caucasus?",
        "question_hi": "कौन सा सागर यूरोप, अनातोलिया और काकेशस से घिरा हुआ है?",
        "options_en": ["Black Sea", "Mediterranean Sea", "Caspian Sea", "Aegean Sea"],
        "options_hi": ["काला सागर", "भूमध्य सागर", "कैस्पियन सागर", "एजियन सागर"],
        "answer_en": "Black Sea",
        "answer_hi": "काला सागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the study of ancient artifacts and material remains called?",
        "question_hi": "प्राचीन कलाकृतियों और भौतिक अवशेषों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Archaeology", "History", "Paleontology", "Anthropology"],
        "options_hi": ["पुरातत्व", "इतिहास", "जीवाश्म विज्ञान", "मानवविज्ञान"],
        "answer_en": "Archaeology",
        "answer_hi": "पुरातत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which country is both in Europe and Asia?",
        "question_hi": "कौन सा देश यूरोप और एशिया दोनों में है?",
        "options_en": ["Russia", "Turkey", "Kazakhstan", "Azerbaijan"],
        "options_hi": ["रूस", "तुर्की", "कजाकिस्तान", "अज़रबैजान"],
        "answer_en": "Russia",
        "answer_hi": "रूस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the system of racial segregation that was practiced in South Africa?",
        "question_hi": "दक्षिण अफ्रीका में प्रचलित नस्लीय अलगाव की प्रणाली क्या थी?",
        "options_en": ["Apartheid", "Segregation", "Discrimination", "Colonialism"],
        "options_hi": ["एपार्थाइड", "अलगाव", "भेदभाव", "उपनिवेशवाद"],
        "answer_en": "Apartheid",
        "answer_hi": "एपार्थाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which canal connects the Mediterranean Sea to the Red Sea?",
        "question_hi": "कौन सी नहर भूमध्य सागर को लाल सागर से जोड़ती है?",
        "options_en": ["Suez Canal", "Panama Canal", "Kiel Canal", "Grand Canal"],
        "options_hi": ["सुएज़ नहर", "पनामा नहर", "कील नहर", "ग्रांड कैनाल"],
        "answer_en": "Suez Canal",
        "answer_hi": "सुएज़ नहर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the study of human populations and their characteristics called?",
        "question_hi": "मानव आबादी और उनकी विशेषताओं के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Demography", "Sociology", "Epidemiology", "Geography"],
        "options_hi": ["जनसांख्यिकी", "समाजशास्त्र", "महामारी विज्ञान", "भूगोल"],
        "answer_en": "Demography",
        "answer_hi": "जनसांख्यिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which mountain range runs along the western coast of South America?",
        "question_hi": "दक्षिण अमेरिका के पश्चिमी तट के साथ कौन सी पर्वत श्रृंखला चलती है?",
        "options_en": ["Andes", "Rocky Mountains", "Appalachian Mountains", "Sierra Madre"],
        "options_hi": ["एंडीज", "रॉकी पर्वत", "अप्पलाचियन पर्वत", "सिएरा माद्रे"],
        "answer_en": "Andes",
        "answer_hi": "एंडीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the term for goods and services bought from other countries?",
        "question_hi": "अन्य देशों से खरीदे गए माल और सेवाओं के लिए क्या शब्द है?",
        "options_en": ["Imports", "Exports", "Tariffs", "Quotas"],
        "options_hi": ["आयात", "निर्यात", "टैरिफ", "कोटा"],
        "answer_en": "Imports",
        "answer_hi": "आयात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which river flows through Baghdad, the capital of Iraq?",
        "question_hi": "इराक की राजधानी बगदाद से होकर कौन सी नदी बहती है?",
        "options_en": ["Tigris River", "Euphrates River", "Nile River", "Jordan River"],
        "options_hi": ["टाइग्रिस नदी", "यूफ्रेटीज नदी", "नील नदी", "जॉर्डन नदी"],
        "answer_en": "Tigris River",
        "answer_hi": "टाइग्रिस नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the study of human cultures and societies called?",
        "question_hi": "मानव संस्कृतियों और समाजों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Cultural Anthropology", "Sociology", "Ethnology", "Social Studies"],
        "options_hi": ["सांस्कृतिक मानवविज्ञान", "समाजशास्त्र", "नृवंशविज्ञान", "सामाजिक अध्ययन"],
        "answer_en": "Cultural Anthropology",
        "answer_hi": "सांस्कृतिक मानवविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which is the largest country in Africa by area?",
        "question_hi": "क्षेत्रफल के हिसाब से अफ्रीका का सबसे बड़ा देश कौन सा है?",
        "options_en": ["Algeria", "Democratic Republic of Congo", "Sudan", "Libya"],
        "options_hi": ["अल्जीरिया", "कांगो लोकतांत्रिक गणराज्य", "सूडान", "लीबिया"],
        "answer_en": "Algeria",
        "answer_hi": "अल्जीरिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the economic system where the government controls major industries?",
        "question_hi": "वह आर्थिक प्रणाली क्या है जहाँ सरकार प्रमुख उद्योगों को नियंत्रित करती है?",
        "options_en": ["Socialism", "Capitalism", "Communism", "Mixed Economy"],
        "options_hi": ["समाजवाद", "पूंजीवाद", "साम्यवाद", "मिश्रित अर्थव्यवस्था"],
        "answer_en": "Socialism",
        "answer_hi": "समाजवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which peninsula in Europe consists of Norway and Sweden?",
        "question_hi": "यूरोप में कौन सा प्रायद्वीप नॉर्वे और स्वीडन से बना है?",
        "options_en": ["Scandinavian Peninsula", "Iberian Peninsula", "Balkan Peninsula", "Italian Peninsula"],
        "options_hi": ["स्कैंडिनेवियाई प्रायद्वीप", "इबेरियन प्रायद्वीप", "बाल्कन प्रायद्वीप", "इतालवी प्रायद्वीप"],
        "answer_en": "Scandinavian Peninsula",
        "answer_hi": "स्कैंडिनेवियाई प्रायद्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the study of past events through written records called?",
        "question_hi": "लिखित अभिलेखों के माध्यम से अतीत की घटनाओं के अध्ययन को क्या कहा जाता है?",
        "options_en": ["History", "Archaeology", "Paleography", "Chronology"],
        "options_hi": ["इतिहास", "पुरातत्व", "प्राचीन लिपि विज्ञान", "कालक्रम"],
        "answer_en": "History",
        "answer_hi": "इतिहास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which desert is located in the southwestern United States?",
        "question_hi": "कौन सा रेगिस्तान संयुक्त राज्य अमेरिका के दक्षिण-पश्चिम में स्थित है?",
        "options_en": ["Sonoran Desert", "Mojave Desert", "Chihuahuan Desert", "Great Basin Desert"],
        "options_hi": ["सोनोरन रेगिस्तान", "मोजावे रेगिस्तान", "चिहुआहुआन रेगिस्तान", "ग्रेट बेसिन रेगिस्तान"],
        "answer_en": "Sonoran Desert",
        "answer_hi": "सोनोरन रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the system of government where a single person has absolute power?",
        "question_hi": "सरकार की वह प्रणाली क्या है जहाँ एक व्यक्ति के पास पूर्ण शक्ति होती है?",
        "options_en": ["Autocracy", "Democracy", "Oligarchy", "Theocracy"],
        "options_hi": ["निरंकुशता", "लोकतंत्र", "कुलीनतंत्र", "धर्मतंत्र"],
        "answer_en": "Autocracy",
        "answer_hi": "निरंकुशता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which river flows through London, England?",
        "question_hi": "इंग्लैंड के लंदन से होकर कौन सी नदी बहती है?",
        "options_en": ["Thames River", "Severn River", "Trent River", "Mersey River"],
        "options_hi": ["टेम्स नदी", "सेवर्न नदी", "ट्रेंट नदी", "मर्सी नदी"],
        "answer_en": "Thames River",
        "answer_hi": "टेम्स नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the study of human rights and civic responsibilities called?",
        "question_hi": "मानव अधिकारों और नागरिक जिम्मेदारियों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Civics", "Political Science", "Law", "Ethics"],
        "options_hi": ["नागरिक शास्त्र", "राजनीति विज्ञान", "कानून", "नैतिकता"],
        "answer_en": "Civics",
        "answer_hi": "नागरिक शास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which sea is located between Saudi Arabia and Africa?",
        "question_hi": "सऊदी अरब और अफ्रीका के बीच कौन सा सागर स्थित है?",
        "options_en": ["Red Sea", "Arabian Sea", "Persian Gulf", "Mediterranean Sea"],
        "options_hi": ["लाल सागर", "अरब सागर", "फारस की खाड़ी", "भूमध्य सागर"],
        "answer_en": "Red Sea",
        "answer_hi": "लाल सागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the term for the growth of cities and migration of people to urban areas?",
        "question_hi": "शहरों के विकास और लोगों के शहरी क्षेत्रों में प्रवास को क्या कहा जाता है?",
        "options_en": ["Urbanization", "Industrialization", "Migration", "Globalization"],
        "options_hi": ["शहरीकरण", "औद्योगिकीकरण", "प्रवासन", "वैश्वीकरण"],
        "answer_en": "Urbanization",
        "answer_hi": "शहरीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which ancient civilization built the Machu Picchu citadel?",
        "question_hi": "माचू पिच्चू गढ़ का निर्माण किस प्राचीन सभ्यता ने किया था?",
        "options_en": ["Inca", "Maya", "Aztec", "Olmec"],
        "options_hi": ["इंका", "माया", "एज़्टेक", "ओल्मेक"],
        "answer_en": "Inca",
        "answer_hi": "इंका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the study of the Earth's physical features, climate, and population called?",
        "question_hi": "पृथ्वी की भौतिक विशेषताओं, जलवायु और जनसंख्या के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Geography", "Geology", "Meteorology", "Demography"],
        "options_hi": ["भूगोल", "भूविज्ञान", "मौसम विज्ञान", "जनसांख्यिकी"],
        "answer_en": "Geography",
        "answer_hi": "भूगोल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which country is the world's largest producer of natural rubber?",
        "question_hi": "प्राकृतिक रबर का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["Thailand", "Indonesia", "Malaysia", "Vietnam"],
        "options_hi": ["थाईलैंड", "इंडोनेशिया", "मलेशिया", "वियतनाम"],
        "answer_en": "Thailand",
        "answer_hi": "थाईलैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the system of government where religious leaders hold political power?",
        "question_hi": "सरकार की वह प्रणाली क्या है जहाँ धार्मिक नेता राजनीतिक शक्ति रखते हैं?",
        "options_en": ["Theocracy", "Monarchy", "Democracy", "Oligarchy"],
        "options_hi": ["धर्मतंत्र", "राजतंत्र", "लोकतंत्र", "कुलीनतंत्र"],
        "answer_en": "Theocracy",
        "answer_hi": "धर्मतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which river forms the border between the United States and Mexico?",
        "question_hi": "कौन सी नदी संयुक्त राज्य अमेरिका और मेक्सिको के बीच सीमा बनाती है?",
        "options_en": ["Rio Grande", "Colorado River", "Mississippi River", "Columbia River"],
        "options_hi": ["रियो ग्रांडे", "कोलोराडो नदी", "मिसिसिपी नदी", "कोलंबिया नदी"],
        "answer_en": "Rio Grande",
        "answer_hi": "रियो ग्रांडे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the study of how people satisfy unlimited wants with limited resources?",
        "question_hi": "लोग सीमित संसाधनों से असीमित इच्छाओं को कैसे पूरा करते हैं, इसका अध्ययन क्या है?",
        "options_en": ["Economics", "Sociology", "Psychology", "Political Science"],
        "options_hi": ["अर्थशास्त्र", "समाजशास्त्र", "मनोविज्ञान", "राजनीति विज्ञान"],
        "answer_en": "Economics",
        "answer_hi": "अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which is the largest island in the Caribbean Sea?",
        "question_hi": "कैरेबियन सागर का सबसे बड़ा द्वीप कौन सा है?",
        "options_en": ["Cuba", "Hispaniola", "Jamaica", "Puerto Rico"],
        "options_hi": ["क्यूबा", "हिस्पानियोला", "जमैका", "प्यूर्टो रिको"],
        "answer_en": "Cuba",
        "answer_hi": "क्यूबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the term for the movement to give women the right to vote?",
        "question_hi": "महिलाओं को वोट देने का अधिकार देने के आंदोलन को क्या कहा जाता है?",
        "options_en": ["Women's Suffrage", "Feminism", "Civil Rights Movement", "Gender Equality"],
        "options_hi": ["महिला मताधिकार", "नारीवाद", "नागरिक अधिकार आंदोलन", "लिंग समानता"],
        "answer_en": "Women's Suffrage",
        "answer_hi": "महिला मताधिकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which mountain is the highest peak in North America?",
        "question_hi": "उत्तरी अमेरिका की सबसे ऊँची चोटी कौन सी है?",
        "options_en": ["Denali (Mount McKinley)", "Mount Logan", "Pico de Orizaba", "Mount Saint Elias"],
        "options_hi": ["डेनाली (माउंट मैकिन्ले)", "माउंट लोगन", "पीको डे ओरिज़ाबा", "माउंट सेंट एलियास"],
        "answer_en": "Denali (Mount McKinley)",
        "answer_hi": "डेनाली (माउंट मैकिन्ले)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the study of ancient human remains and fossils called?",
        "question_hi": "प्राचीन मानव अवशेषों और जीवाश्मों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Paleoanthropology", "Archaeology", "Paleontology", "Anthropology"],
        "options_hi": ["पुरा-मानवविज्ञान", "पुरातत्व", "जीवाश्म विज्ञान", "मानवविज्ञान"],
        "answer_en": "Paleoanthropology",
        "answer_hi": "पुरा-मानवविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which country is the world's largest producer of bauxite (aluminum ore)?",
        "question_hi": "बॉक्साइट (अल्युमीनियम अयस्क) का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["Australia", "China", "Brazil", "Guinea"],
        "options_hi": ["ऑस्ट्रेलिया", "चीन", "ब्राज़ील", "गिनी"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the term for a person forced to flee their country due to persecution?",
        "question_hi": "उत्पीड़न के कारण अपने देश से भागने के लिए मजबूर व्यक्ति के लिए क्या शब्द है?",
        "options_en": ["Refugee", "Immigrant", "Emigrant", "Asylum Seeker"],
        "options_hi": ["शरणार्थी", "आप्रवासी", "उत्प्रवासी", "शरण चाहने वाला"],
        "answer_en": "Refugee",
        "answer_hi": "शरणार्थी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which river flows through the city of Cairo, Egypt?",
        "question_hi": "मिस्र के काहिरा शहर से होकर कौन सी नदी बहती है?",
        "options_en": ["Nile River", "Tigris River", "Euphrates River", "Jordan River"],
        "options_hi": ["नील नदी", "टाइग्रिस नदी", "यूफ्रेटीज नदी", "जॉर्डन नदी"],
        "answer_en": "Nile River",
        "answer_hi": "नील नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the study of human values, beliefs, and customs called?",
        "question_hi": "मानव मूल्यों, विश्वासों और रीति-रिवाजों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Cultural Studies", "Anthropology", "Sociology", "Ethnography"],
        "options_hi": ["सांस्कृतिक अध्ययन", "मानवविज्ञान", "समाजशास्त्र", "नृवंशवर्णन"],
        "answer_en": "Cultural Studies",
        "answer_hi": "सांस्कृतिक अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the largest country in Central America?",
        "question_hi": "मध्य अमेरिका का सबसे बड़ा देश कौन सा है?",
        "options_en": ["Nicaragua", "Guatemala", "Honduras", "Panama"],
        "options_hi": ["निकारागुआ", "ग्वाटेमाला", "होंडुरास", "पनामा"],
        "answer_en": "Nicaragua",
        "answer_hi": "निकारागुआ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the system where people vote directly on laws and policies?",
        "question_hi": "वह प्रणाली क्या है जहाँ लोग सीधे कानूनों और नीतियों पर वोट करते हैं?",
        "options_en": ["Direct Democracy", "Representative Democracy", "Republic", "Monarchy"],
        "options_hi": ["प्रत्यक्ष लोकतंत्र", "प्रतिनिधि लोकतंत्र", "गणराज्य", "राजतंत्र"],
        "answer_en": "Direct Democracy",
        "answer_hi": "प्रत्यक्ष लोकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which sea separates Italy from the Balkan Peninsula?",
        "question_hi": "कौन सा सागर इटली को बाल्कन प्रायद्वीप से अलग करता है?",
        "options_en": ["Adriatic Sea", "Tyrrhenian Sea", "Ionian Sea", "Mediterranean Sea"],
        "options_hi": ["एड्रियाटिक सागर", "टाइरेनियन सागर", "आयोनियन सागर", "भूमध्य सागर"],
        "answer_en": "Adriatic Sea",
        "answer_hi": "एड्रियाटिक सागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the study of human evolution and prehistoric societies called?",
        "question_hi": "मानव विकास और प्रागैतिहासिक समाजों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Prehistoric Archaeology", "Anthropology", "Paleontology", "History"],
        "options_hi": ["प्रागैतिहासिक पुरातत्व", "मानवविज्ञान", "जीवाश्म विज्ञान", "इतिहास"],
        "answer_en": "Prehistoric Archaeology",
        "answer_hi": "प्रागैतिहासिक पुरातत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which country is the world's largest producer of soybeans?",
        "question_hi": "सोयाबीन का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["United States", "Brazil", "Argentina", "China"],
        "options_hi": ["संयुक्त राज्य अमेरिका", "ब्राज़ील", "अर्जेंटीना", "चीन"],
        "answer_en": "United States",
        "answer_hi": "संयुक्त राज्य अमेरिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the term for the belief that your own culture is superior to others?",
        "question_hi": "यह विश्वास कि आपकी अपनी संस्कृति दूसरों से श्रेष्ठ है, उसे क्या कहा जाता है?",
        "options_en": ["Ethnocentrism", "Cultural Relativism", "Nationalism", "Prejudice"],
        "options_hi": ["नृजातीय केंद्रवाद", "सांस्कृतिक सापेक्षवाद", "राष्ट्रवाद", "पूर्वाग्रह"],
        "answer_en": "Ethnocentrism",
        "answer_hi": "नृजातीय केंद्रवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which desert is located in southern Argentina?",
        "question_hi": "दक्षिणी अर्जेंटीना में कौन सा रेगिस्तान स्थित है?",
        "options_en": ["Patagonian Desert", "Atacama Desert", "Monte Desert", "Sechura Desert"],
        "options_hi": ["पैटागोनियन रेगिस्तान", "अटाकामा रेगिस्तान", "मोंटे रेगिस्तान", "सेचुरा रेगिस्तान"],
        "answer_en": "Patagonian Desert",
        "answer_hi": "पैटागोनियन रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the study of human settlements and their patterns called?",
        "question_hi": "मानव बस्तियों और उनके पैटर्न के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Human Geography", "Urban Planning", "Demography", "Sociology"],
        "options_hi": ["मानव भूगोल", "शहरी नियोजन", "जनसांख्यिकी", "समाजशास्त्र"],
        "answer_en": "Human Geography",
        "answer_hi": "मानव भूगोल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which river flows through Vienna, Budapest, and Belgrade?",
        "question_hi": "वियना, बुडापेस्ट और बेलग्रेड से होकर कौन सी नदी बहती है?",
        "options_en": ["Danube River", "Rhine River", "Elbe River", "Vistula River"],
        "options_hi": ["डेन्यूब नदी", "राइन नदी", "एल्बे नदी", "विस्तुला नदी"],
        "answer_en": "Danube River",
        "answer_hi": "डेन्यूब नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the term for the economic theory that emphasizes free trade?",
        "question_hi": "उस आर्थिक सिद्धांत को क्या कहा जाता है जो मुक्त व्यापार पर जोर देता है?",
        "options_en": ["Classical Liberalism", "Mercantilism", "Keynesian Economics", "Marxism"],
        "options_hi": ["शास्त्रीय उदारवाद", "व्यापारवाद", "केन्सवादी अर्थशास्त्र", "मार्क्सवाद"],
        "answer_en": "Classical Liberalism",
        "answer_hi": "शास्त्रीय उदारवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which is the largest archipelago in the world?",
        "question_hi": "दुनिया का सबसे बड़ा द्वीपसमूह कौन सा है?",
        "options_en": ["Indonesia", "Philippines", "Japan", "Malaysia"],
        "options_hi": ["इंडोनेशिया", "फिलीपींस", "जापान", "मलेशिया"],
        "answer_en": "Indonesia",
        "answer_hi": "इंडोनेशिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the study of human development from childhood to adulthood called?",
        "question_hi": "बचपन से वयस्कता तक मानव विकास के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Developmental Psychology", "Child Psychology", "Sociology", "Anthropology"],
        "options_hi": ["विकासात्मक मनोविज्ञान", "बाल मनोविज्ञान", "समाजशास्त्र", "मानवविज्ञान"],
        "answer_en": "Developmental Psychology",
        "answer_hi": "विकासात्मक मनोविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which country is the world's largest producer of palm oil?",
        "question_hi": "पाम ऑयल का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["Indonesia", "Malaysia", "Thailand", "Nigeria"],
        "options_hi": ["इंडोनेशिया", "मलेशिया", "थाईलैंड", "नाइजीरिया"],
        "answer_en": "Indonesia",
        "answer_hi": "इंडोनेशिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the term for a government ruled by a small group of wealthy people?",
        "question_hi": "धनी लोगों के एक छोटे समूह द्वारा शासित सरकार के लिए क्या शब्द है?",
        "options_en": ["Plutocracy", "Oligarchy", "Aristocracy", "Timocracy"],
        "options_hi": ["धनिकतंत्र", "कुलीनतंत्र", "कुलीनतंत्र", "संपत्ति तंत्र"],
        "answer_en": "Plutocracy",
        "answer_hi": "धनिकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which river flows through the Grand Canyon in the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका में ग्रैंड कैन्यन से होकर कौन सी नदी बहती है?",
        "options_en": ["Colorado River", "Mississippi River", "Missouri River", "Rio Grande"],
        "options_hi": ["कोलोराडो नदी", "मिसिसिपी नदी", "मिसौरी नदी", "रियो ग्रांडे"],
        "answer_en": "Colorado River",
        "answer_hi": "कोलोराडो नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the study of human communication through language called?",
        "question_hi": "भाषा के माध्यम से मानव संचार के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Linguistics", "Philology", "Semiotics", "Communication Studies"],
        "options_hi": ["भाषाविज्ञान", "भाषाशास्त्र", "संकेत विज्ञान", "संचार अध्ययन"],
        "answer_en": "Linguistics",
        "answer_hi": "भाषाविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which country is the world's largest producer of uranium?",
        "question_hi": "यूरेनियम का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["Kazakhstan", "Canada", "Australia", "Namibia"],
        "options_hi": ["कजाकिस्तान", "कनाडा", "ऑस्ट्रेलिया", "नामीबिया"],
        "answer_en": "Kazakhstan",
        "answer_hi": "कजाकिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the term for the spread of ideas, technology, and culture between societies?",
        "question_hi": "समाजों के बीच विचारों, प्रौद्योगिकी और संस्कृति के प्रसार के लिए क्या शब्द है?",
        "options_en": ["Cultural Diffusion", "Globalization", "Assimilation", "Acculturation"],
        "options_hi": ["सांस्कृतिक प्रसार", "वैश्वीकरण", "आत्मसात्करण", "संस्कृतिकरण"],
        "answer_en": "Cultural Diffusion",
        "answer_hi": "सांस्कृतिक प्रसार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which is the highest mountain peak in South America?",
        "question_hi": "दक्षिण अमेरिका की सबसे ऊँची पर्वत चोटी कौन सी है?",
        "options_en": ["Mount Aconcagua", "Mount Ojos del Salado", "Mount Huascarán", "Mount Chimborazo"],
        "options_hi": ["माउंट अकोंकागुआ", "माउंट ओजोस डेल सलाडो", "माउंट हुआस्कारान", "माउंट चिम्बोराज़ो"],
        "answer_en": "Mount Aconcagua",
        "answer_hi": "माउंट अकोंकागुआ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the study of human social relationships and institutions called?",
        "question_hi": "मानव सामाजिक संबंधों और संस्थाओं के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Sociology", "Psychology", "Anthropology", "Political Science"],
        "options_hi": ["समाजशास्त्र", "मनोविज्ञान", "मानवविज्ञान", "राजनीति विज्ञान"],
        "answer_en": "Sociology",
        "answer_hi": "समाजशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which sea separates Europe from Africa?",
        "question_hi": "कौन सा सागर यूरोप को अफ्रीका से अलग करता है?",
        "options_en": ["Mediterranean Sea", "Black Sea", "Red Sea", "Baltic Sea"],
        "options_hi": ["भूमध्य सागर", "काला सागर", "लाल सागर", "बाल्टिक सागर"],
        "answer_en": "Mediterranean Sea",
        "answer_hi": "भूमध्य सागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the study of ancient writing systems and inscriptions called?",
        "question_hi": "प्राचीन लेखन प्रणालियों और शिलालेखों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Epigraphy", "Paleography", "Philology", "Linguistics"],
        "options_hi": ["शिलालेख विज्ञान", "प्राचीन लिपि विज्ञान", "भाषाशास्त्र", "भाषाविज्ञान"],
        "answer_en": "Epigraphy",
        "answer_hi": "शिलालेख विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which country is the world's largest producer of coffee?",
        "question_hi": "कॉफी का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["Brazil", "Vietnam", "Colombia", "Indonesia"],
        "options_hi": ["ब्राज़ील", "वियतनाम", "कोलंबिया", "इंडोनेशिया"],
        "answer_en": "Brazil",
        "answer_hi": "ब्राज़ील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the term for a government where power is inherited through family lines?",
        "question_hi": "उस सरकार के लिए क्या शब्द है जहाँ शक्ति पारिवारिक वंश के माध्यम से विरासत में मिलती है?",
        "options_en": ["Hereditary Monarchy", "Republic", "Democracy", "Oligarchy"],
        "options_hi": ["वंशानुगत राजतंत्र", "गणराज्य", "लोकतंत्र", "कुलीनतंत्र"],
        "answer_en": "Hereditary Monarchy",
        "answer_hi": "वंशानुगत राजतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which river flows through the cities of Montreal and Quebec in Canada?",
        "question_hi": "कनाडा में मॉन्ट्रियल और क्यूबेक शहरों से होकर कौन सी नदी बहती है?",
        "options_en": ["Saint Lawrence River", "Mackenzie River", "Yukon River", "Fraser River"],
        "options_hi": ["सेंट लॉरेंस नदी", "मैकेंजी नदी", "युकोन नदी", "फ्रेजर नदी"],
        "answer_en": "Saint Lawrence River",
        "answer_hi": "सेंट लॉरेंस नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the study of human economic activities in relation to the environment?",
        "question_hi": "पर्यावरण के संबंध में मानव आर्थिक गतिविधियों का अध्ययन क्या है?",
        "options_en": ["Environmental Economics", "Ecological Economics", "Resource Economics", "Development Economics"],
        "options_hi": ["पर्यावरणीय अर्थशास्त्र", "पारिस्थितिक अर्थशास्त्र", "संसाधन अर्थशास्त्र", "विकास अर्थशास्त्र"],
        "answer_en": "Environmental Economics",
        "answer_hi": "पर्यावरणीय अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which country is the world's largest producer of natural gas?",
        "question_hi": "प्राकृतिक गैस का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["United States", "Russia", "Iran", "Qatar"],
        "options_hi": ["संयुक्त राज्य अमेरिका", "रूस", "ईरान", "कतर"],
        "answer_en": "United States",
        "answer_hi": "संयुक्त राज्य अमेरिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the study of human political systems and behavior called?",
        "question_hi": "मानव राजनीतिक प्रणालियों और व्यवहार के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Political Science", "Sociology", "Public Administration", "Law"],
        "options_hi": ["राजनीति विज्ञान", "समाजशास्त्र", "लोक प्रशासन", "कानून"],
        "answer_en": "Political Science",
        "answer_hi": "राजनीति विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which sea is located between Japan and the Korean Peninsula?",
        "question_hi": "जापान और कोरियाई प्रायद्वीप के बीच कौन सा सागर स्थित है?",
        "options_en": ["Sea of Japan", "Yellow Sea", "East China Sea", "Philippine Sea"],
        "options_hi": ["जापान सागर", "पीला सागर", "पूर्वी चीन सागर", "फिलीपीन सागर"],
        "answer_en": "Sea of Japan",
        "answer_hi": "जापान सागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the term for the study of human work and employment?",
        "question_hi": "मानव कार्य और रोजगार के अध्ययन के लिए क्या शब्द है?",
        "options_en": ["Labor Economics", "Industrial Relations", "Human Resources", "Workforce Studies"],
        "options_hi": ["श्रम अर्थशास्त्र", "औद्योगिक संबंध", "मानव संसाधन", "कार्यबल अध्ययन"],
        "answer_en": "Labor Economics",
        "answer_hi": "श्रम अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which is the largest river in Australia?",
        "question_hi": "ऑस्ट्रेलिया की सबसे बड़ी नदी कौन सी है?",
        "options_en": ["Murray River", "Darling River", "Murrumbidgee River", "Lachlan River"],
        "options_hi": ["मरे नदी", "डार्लिंग नदी", "मुर्रमबिजी नदी", "लैक्लान नदी"],
        "answer_en": "Murray River",
        "answer_hi": "मरे नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the study of human diseases and health conditions called?",
        "question_hi": "मानव रोगों और स्वास्थ्य स्थितियों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Epidemiology", "Public Health", "Medicine", "Pathology"],
        "options_hi": ["महामारी विज्ञान", "सार्वजनिक स्वास्थ्य", "चिकित्सा", "रोगविज्ञान"],
        "answer_en": "Epidemiology",
        "answer_hi": "महामारी विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which country is the world's largest producer of silver?",
        "question_hi": "चांदी का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["Mexico", "Peru", "China", "Russia"],
        "options_hi": ["मैक्सिको", "पेरू", "चीन", "रूस"],
        "answer_en": "Mexico",
        "answer_hi": "मैक्सिको",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the term for the study of human thought and consciousness?",
        "question_hi": "मानव विचार और चेतना के अध्ययन के लिए क्या शब्द है?",
        "options_en": ["Philosophy", "Psychology", "Cognitive Science", "Neuroscience"],
        "options_hi": ["दर्शन", "मनोविज्ञान", "संज्ञानात्मक विज्ञान", "न्यूरोसाइंस"],
        "answer_en": "Philosophy",
        "answer_hi": "दर्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which is the largest lake in South America?",
        "question_hi": "दक्षिण अमेरिका की सबसे बड़ी झील कौन सी है?",
        "options_en": ["Lake Titicaca", "Lake Maracaibo", "Lake Poopó", "Lake Buenos Aires"],
        "options_hi": ["टिटिकाका झील", "माराकाइबो झील", "पूपो झील", "ब्यूनस आयर्स झील"],
        "answer_en": "Lake Titicaca",
        "answer_hi": "टिटिकाका झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the study of human legal systems and laws called?",
        "question_hi": "मानव कानूनी प्रणालियों और कानूनों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Jurisprudence", "Law", "Legal Studies", "Criminology"],
        "options_hi": ["न्यायशास्त्र", "कानून", "कानूनी अध्ययन", "अपराध विज्ञान"],
        "answer_en": "Jurisprudence",
        "answer_hi": "न्यायशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which country is the world's largest producer of tin?",
        "question_hi": "टिन का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["China", "Indonesia", "Peru", "Bolivia"],
        "options_hi": ["चीन", "इंडोनेशिया", "पेरू", "बोलीविया"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the term for the study of human religious beliefs and practices?",
        "question_hi": "मानव धार्मिक विश्वासों और प्रथाओं के अध्ययन के लिए क्या शब्द है?",
        "options_en": ["Religious Studies", "Theology", "Comparative Religion", "Anthropology of Religion"],
        "options_hi": ["धार्मिक अध्ययन", "धर्मशास्त्र", "तुलनात्मक धर्म", "धर्म का मानवविज्ञान"],
        "answer_en": "Religious Studies",
        "answer_hi": "धार्मिक अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which sea separates Saudi Arabia from Iran?",
        "question_hi": "कौन सा सागर सऊदी अरब को ईरान से अलग करता है?",
        "options_en": ["Persian Gulf", "Red Sea", "Arabian Sea", "Gulf of Oman"],
        "options_hi": ["फारस की खाड़ी", "लाल सागर", "अरब सागर", "ओमान की खाड़ी"],
        "answer_en": "Persian Gulf",
        "answer_hi": "फारस की खाड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the study of human artistic expression and creativity called?",
        "question_hi": "मानव कलात्मक अभिव्यक्ति और रचनात्मकता के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Art History", "Aesthetics", "Cultural Studies", "Fine Arts"],
        "options_hi": ["कला इतिहास", "सौंदर्यशास्त्र", "सांस्कृतिक अध्ययन", "ललित कला"],
        "answer_en": "Art History",
        "answer_hi": "कला इतिहास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which is the longest river in Asia?",
        "question_hi": "एशिया की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Yangtze River", "Yellow River", "Mekong River", "Lena River"],
        "options_hi": ["यांग्त्ज़ी नदी", "पीली नदी", "मेकोंग नदी", "लेना नदी"],
        "answer_en": "Yangtze River",
        "answer_hi": "यांग्त्ज़ी नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the study of human educational systems and learning called?",
        "question_hi": "मानव शैक्षिक प्रणालियों और सीखने के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Education Studies", "Pedagogy", "Educational Psychology", "Curriculum Studies"],
        "options_hi": ["शिक्षा अध्ययन", "शिक्षाशास्त्र", "शैक्षिक मनोविज्ञान", "पाठ्यक्रम अध्ययन"],
        "answer_en": "Education Studies",
        "answer_hi": "शिक्षा अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which country is the world's largest producer of nickel?",
        "question_hi": "निकल का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["Indonesia", "Philippines", "Russia", "Canada"],
        "options_hi": ["इंडोनेशिया", "फिलीपींस", "रूस", "कनाडा"],
        "answer_en": "Indonesia",
        "answer_hi": "इंडोनेशिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the term for the study of human family structures and relationships?",
        "question_hi": "मानव पारिवारिक संरचनाओं और रिश्तों के अध्ययन के लिए क्या शब्द है?",
        "options_en": ["Family Studies", "Sociology of Family", "Anthropology of Kinship", "Domestic Relations"],
        "options_hi": ["परिवार अध्ययन", "परिवार का समाजशास्त्र", "रिश्तेदारी का मानवविज्ञान", "घरेलू संबंध"],
        "answer_en": "Family Studies",
        "answer_hi": "परिवार अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which is the largest desert in Asia?",
        "question_hi": "एशिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Gobi Desert", "Arabian Desert", "Karakum Desert", "Kyzylkum Desert"],
        "options_hi": ["गोबी रेगिस्तान", "अरब रेगिस्तान", "कराकुम रेगिस्तान", "कीज़िलकुम रेगिस्तान"],
        "answer_en": "Gobi Desert",
        "answer_hi": "गोबी रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the study of human nutrition and dietary habits called?",
        "question_hi": "मानव पोषण और आहार संबंधी आदतों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Nutrition Science", "Dietetics", "Food Science", "Public Health Nutrition"],
        "options_hi": ["पोषण विज्ञान", "आहार विज्ञान", "खाद्य विज्ञान", "सार्वजनिक स्वास्थ्य पोषण"],
        "answer_en": "Nutrition Science",
        "answer_hi": "पोषण विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which country is the world's largest producer of phosphate?",
        "question_hi": "फॉस्फेट का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["Morocco", "China", "United States", "Russia"],
        "options_hi": ["मोरक्को", "चीन", "संयुक्त राज्य अमेरिका", "रूस"],
        "answer_en": "Morocco",
        "answer_hi": "मोरक्को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the term for the study of human aging and the elderly?",
        "question_hi": "मानव उम्र बढ़ने और बुजुर्गों के अध्ययन के लिए क्या शब्द है?",
        "options_en": ["Gerontology", "Geriatrics", "Ageing Studies", "Senior Studies"],
        "options_hi": ["वृद्धावस्था विज्ञान", "वृद्धावस्था चिकित्सा", "उम्र बढ़ने अध्ययन", "वरिष्ठ अध्ययन"],
        "answer_en": "Gerontology",
        "answer_hi": "वृद्धावस्था विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which is the largest lake in Africa?",
        "question_hi": "अफ्रीका की सबसे बड़ी झील कौन सी है?",
        "options_en": ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
        "options_hi": ["विक्टोरिया झील", "टैंगानिका झील", "मलावी झील", "चाड झील"],
        "answer_en": "Lake Victoria",
        "answer_hi": "विक्टोरिया झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the study of human technological development and innovation called?",
        "question_hi": "मानव तकनीकी विकास और नवाचार के अध्ययन को क्या कहा जाता है?",
        "options_en": ["History of Technology", "Innovation Studies", "Science and Technology Studies", "Technological Development"],
        "options_hi": ["प्रौद्योगिकी का इतिहास", "नवाचार अध्ययन", "विज्ञान और प्रौद्योगिकी अध्ययन", "तकनीकी विकास"],
        "answer_en": "History of Technology",
        "answer_hi": "प्रौद्योगिकी का इतिहास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which country is the world's largest producer of rice?",
        "question_hi": "चावल का दुनिया का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["China", "India", "Indonesia", "Bangladesh"],
        "options_hi": ["चीन", "भारत", "इंडोनेशिया", "बांग्लादेश"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
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