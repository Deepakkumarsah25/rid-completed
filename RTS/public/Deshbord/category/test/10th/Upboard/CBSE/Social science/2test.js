const questions = [

    {
        "num": 1,
        "question_en": "What was the 'Poona Pact' related to?",
        "question_hi": "'पूना पैक्ट' किससे संबंधित था?",
        "options_en": ["Hindu-Muslim unity", "Depressed classes' representation", "Women's rights", "Land reforms"],
        "options_hi": ["हिंदू-मुस्लिम एकता", "दलित वर्गों का प्रतिनिधित्व", "महिलाओं के अधिकार", "भूमि सुधार"],
        "answer": "Depressed classes' representation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of the following states is known as the 'Sugar Bowl' of India?",
        "question_hi": "निम्नलिखित में से कौन सा राज्य भारत का 'चीनी का कटोरा' के रूप में जाना जाता है?",
        "options_en": ["Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu"],
        "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "कर्नाटक", "तमिलनाडु"],
        "answer": "Uttar Pradesh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which of the following is an example of 'coming together' federation?",
        "question_hi": "निम्नलिखित में से कौन सा 'एक साथ आने' वाले संघ का एक उदाहरण है?",
        "options_en": ["India", "Spain", "USA", "Belgium"],
        "options_hi": ["भारत", "स्पेन", "संयुक्त राज्य अमेरिका", "बेल्जियम"],
        "answer": "USA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which of the following is a 'human-made resource'?",
        "question_hi": "निम्नलिखित में से कौन सा 'मानव निर्मित संसाधन' है?",
        "options_en": ["Water", "Forests", "Machinery", "Minerals"],
        "options_hi": ["पानी", "वन", "मशीनरी", "खनिज"],
        "answer": "Machinery",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which institution issues currency notes on behalf of the Central Government?",
        "question_hi": "केंद्र सरकार की ओर से मुद्रा नोट कौन सा संस्थान जारी करता है?",
        "options_en": ["State Bank of India", "Reserve Bank of India", "Finance Ministry", "Commercial Banks"],
        "options_hi": ["भारतीय स्टेट बैंक", "भारतीय रिजर्व बैंक", "वित्त मंत्रालय", "वाणिज्यिक बैंक"],
        "answer": "Reserve Bank of India",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Who among the following played a crucial role in unifying Germany?",
        "question_hi": "निम्नलिखित में से किसने जर्मनी को एकजुट करने में महत्वपूर्ण भूमिका निभाई?",
        "options_en": ["Giuseppe Garibaldi", "Otto von Bismarck", "Giuseppe Mazzini", "Napoleon Bonaparte"],
        "options_hi": ["गिउसेप्पे गैरीबाल्डी", "ओटो वॉन बिस्मार्क", "गिउसेप्पे मैज़िनी", "नेपोलियन बोनापार्ट"],
        "answer": "Otto von Bismarck",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which of the following is a major producer of mica in India?",
        "question_hi": "निम्नलिखित में से कौन भारत में अभ्रक का एक प्रमुख उत्पादक है?",
        "options_en": ["Jharkhand", "Karnataka", "Maharashtra", "Punjab"],
        "options_hi": ["झारखंड", "कर्नाटक", "महाराष्ट्र", "पंजाब"],
        "answer": "Jharkhand",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How many schedules are there in the Indian Constitution?",
        "question_hi": "भारतीय संविधान में कितनी अनुसूचियाँ हैं?",
        "options_en": ["8", "10", "12", "14"],
        "options_hi": ["8", "10", "12", "14"],
        "answer": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which of the following is NOT a feature of democracy?",
        "question_hi": "निम्नलिखित में से कौन लोकतंत्र की विशेषता नहीं है?",
        "options_en": ["Free and fair elections", "Rule of law", "One-party rule", "Respect for rights"],
        "options_hi": ["स्वतंत्र और निष्पक्ष चुनाव", "कानून का शासन", "एक पार्टी का शासन", "अधिकारों का सम्मान"],
        "answer": "One-party rule",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which of the following is a positive impact of globalization?",
        "question_hi": "निम्नलिखित में से कौन सा वैश्वीकरण का सकारात्मक प्रभाव है?",
        "options_en": ["Loss of jobs in developed countries", "Increased competition among producers", "Spread of diseases", "Cultural homogenization"],
        "options_hi": ["विकसित देशों में नौकरियों का नुकसान", "उत्पादकों के बीच बढ़ी प्रतिस्पर्धा", "रोगों का प्रसार", "सांस्कृतिक एकरूपता"],
        "answer": "Increased competition among producers",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The 'Khilafat Movement' was started by:",
        "question_hi": "'खिलाफत आंदोलन' किसके द्वारा शुरू किया गया था?",
        "options_en": ["Mahatma Gandhi", "Ali Brothers", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "अली ब्रदर्स", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer": "Ali Brothers",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of the following states has the largest forest cover in India?",
        "question_hi": "निम्नलिखित में से किस राज्य में भारत में सबसे बड़ा वन क्षेत्र है?",
        "options_en": ["Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh", "Odisha"],
        "options_hi": ["मध्य प्रदेश", "अरुणाचल प्रदेश", "छत्तीसगढ़", "ओडिशा"],
        "answer": "Madhya Pradesh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which of the following is a feature of a 'unitary' government?",
        "question_hi": "निम्नलिखित में से कौन सी 'एकात्मक' सरकार की विशेषता है?",
        "options_en": ["Division of powers", "Independent judiciary", "Central government is supreme", "Written constitution"],
        "options_hi": ["शक्तियों का विभाजन", "स्वतंत्र न्यायपालिका", "केंद्र सरकार सर्वोच्च है", "लिखित संविधान"],
        "answer": "Central government is supreme",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is an example of a 'private sector' company?",
        "question_hi": "निम्नलिखित में से कौन सी 'निजी क्षेत्र' की कंपनी का एक उदाहरण है?",
        "options_en": ["Indian Railways", "Oil and Natural Gas Corporation (ONGC)", "Tata Motors", "Hindustan Aeronautics Limited (HAL)"],
        "options_hi": ["भारतीय रेलवे", "तेल और प्राकृतिक गैस निगम (ओएनजीसी)", "टाटा मोटर्स", "हिंदुस्तान एयरोनॉटिक्स लिमिटेड (एचएएल)"],
        "answer": "Tata Motors",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What does 'FDI' stand for?",
        "question_hi": "'एफडीआई' का क्या अर्थ है?",
        "options_en": ["Foreign Development Index", "Foreign Direct Investment", "Federal Deposit Insurance", "Financial Development Institution"],
        "options_hi": ["विदेशी विकास सूचकांक", "विदेशी प्रत्यक्ष निवेश", "संघीय जमा बीमा", "वित्तीय विकास संस्थान"],
        "answer": "Foreign Direct Investment",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The 'Civil Disobedience Movement' was launched in:",
        "question_hi": "'सविनय अवज्ञा आंदोलन' कब शुरू किया गया था?",
        "options_en": ["1920", "1927", "1930", "1942"],
        "options_hi": ["1920", "1927", "1930", "1942"],
        "answer": "1930",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is a 'biotic' resource?",
        "question_hi": "निम्नलिखित में से कौन सा 'जैविक' संसाधन है?",
        "options_en": ["Land", "Minerals", "Animals", "Rocks"],
        "options_hi": ["भूमि", "खनिज", "पशु", "चट्टानें"],
        "answer": "Animals",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which of the following is a 'constitutional' body?",
        "question_hi": "निम्नलिखित में से कौन सा 'संवैधानिक' निकाय है?",
        "options_en": ["National Human Rights Commission", "Election Commission of India", "National Development Council", "NITI Aayog"],
        "options_hi": ["राष्ट्रीय मानवाधिकार आयोग", "भारत निर्वाचन आयोग", "राष्ट्रीय विकास परिषद", "नीति आयोग"],
        "answer": "Election Commission of India",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which of the following is a measure of 'human development'?",
        "question_hi": "निम्नलिखित में से कौन सा 'मानव विकास' का एक उपाय है?",
        "options_en": ["Per capita income", "Life expectancy", "Gross Domestic Product (GDP)", "Industrial output"],
        "options_hi": ["प्रति व्यक्ति आय", "जीवन प्रत्याशा", "सकल घरेलू उत्पाद (जीडीपी)", "औद्योगिक उत्पादन"],
        "answer": "Life expectancy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the main purpose of 'consumer awareness'?",
        "question_hi": "'उपभोक्ता जागरूकता' का मुख्य उद्देश्य क्या है?",
        "options_en": ["To promote sales", "To protect consumer rights", "To encourage advertising", "To increase production"],
        "options_hi": ["बिक्री को बढ़ावा देना", "उपभोक्ता अधिकारों की रक्षा करना", "विज्ञापन को प्रोत्साहित करना", "उत्पादन बढ़ाना"],
        "answer": "To protect consumer rights",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Who said, 'When France sneezes, the rest of Europe catches cold'?",
        "question_hi": "'जब फ्रांस छींकता है, तो बाकी यूरोप को सर्दी लग जाती है' यह किसने कहा?",
        "options_en": ["Napoleon Bonaparte", "Otto von Bismarck", "Duke Metternich", "Giuseppe Mazzini"],
        "options_hi": ["नेपोलियन बोनापार्ट", "ओटो वॉन बिस्मार्क", "ड्यूक मेटरनिख", "गिउसेप्पे मैज़िनी"],
        "answer": "Duke Metternich",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which of the following states has the highest population density in India?",
        "question_hi": "निम्नलिखित में से किस राज्य में भारत में जनसंख्या घनत्व सबसे अधिक है?",
        "options_en": ["Uttar Pradesh", "Bihar", "West Bengal", "Kerala"],
        "options_hi": ["उत्तर प्रदेश", "बिहार", "पश्चिम बंगाल", "केरल"],
        "answer": "Bihar",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the term for a government that is run by a small group of people?",
        "question_hi": "उस सरकार के लिए क्या शब्द है जो लोगों के एक छोटे समूह द्वारा चलाई जाती है?",
        "options_en": ["Monarchy", "Oligarchy", "Democracy", "Autocracy"],
        "options_hi": ["राजशाही", "अल्पतंत्र", "लोकतंत्र", "निरंकुशता"],
        "answer": "Oligarchy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which of the following is a traditional method of water conservation in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में जल संरक्षण का एक पारंपरिक तरीका है?",
        "options_en": ["Building large dams", "Using sprinklers", "Rainwater harvesting", "Pumping groundwater"],
        "options_hi": ["बड़े बांधों का निर्माण", "स्प्रिंकलर का उपयोग करना", "वर्षा जल संचयन", "भूजल पंप करना"],
        "answer": "Rainwater harvesting",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which of the following is an example of 'sustainable agriculture'?",
        "question_hi": "निम्नलिखित में से कौन सा 'सतत कृषि' का एक उदाहरण है?",
        "options_en": ["Using excessive chemical fertilizers", "Mono-cropping", "Crop rotation", "Intensive irrigation"],
        "options_hi": ["अत्यधिक रासायनिक उर्वरकों का उपयोग करना", "एकल फसल की खेती", "फसल चक्र", "गहन सिंचाई"],
        "answer": "Crop rotation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The 'Champaran Satyagraha' was related to:",
        "question_hi": "'चंपारण सत्याग्रह' किससे संबंधित था?",
        "options_en": ["Indigo planters", "Salt production", "Land revenue", "Mill workers"],
        "options_hi": ["नील बागान मालिक", "नमक उत्पादन", "भू राजस्व", "मिल मजदूर"],
        "answer": "Indigo planters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which of the following is a 'cash crop'?",
        "question_hi": "निम्नलिखित में से कौन सी 'नकदी फसल' है?",
        "options_en": ["Rice", "Wheat", "Sugarcane", "Millets"],
        "options_hi": ["चावल", "गेहूं", "गन्ना", "बाजरा"],
        "answer": "Sugarcane",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The 'Cabinet Mission' came to India in:",
        "question_hi": "'कैबिनेट मिशन' भारत कब आया?",
        "options_en": ["1942", "1945", "1946", "1947"],
        "options_hi": ["1942", "1945", "1946", "1947"],
        "answer": "1946",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which of the following is an example of a 'tertiary' activity?",
        "question_hi": "निम्नलिखित में से कौन सा 'तृतीयक' गतिविधि का एक उदाहरण है?",
        "options_en": ["Farming", "Mining", "Banking", "Manufacturing"],
        "options_hi": ["खेती", "खनन", "बैंकिंग", "विनिर्माण"],
        "answer": "Banking",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 30,
        "question_en": "Which of the following is a major source of 'informal credit' for rural households?",
        "question_hi": "ग्रामीण परिवारों के लिए 'अनौपचारिक ऋण' का एक प्रमुख स्रोत निम्नलिखित में से कौन सा है?",
        "options_en": ["Commercial banks", "Cooperative societies", "Money lenders", "Regional Rural Banks"],
        "options_hi": ["वाणिज्यिक बैंक", "सहकारी समितियाँ", "साहूकार", "क्षेत्रीय ग्रामीण बैंक"],
        "answer": "Money lenders",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The 'Lucknow Pact' of 1916 was an agreement between:",
        "question_hi": "1916 का 'लखनऊ समझौता' किनके बीच एक समझौता था?",
        "options_en": ["The British and the Indian National Congress", "The Muslim League and the British", "The Indian National Congress and the Muslim League", "Extremists and Moderates within Congress"],
        "options_hi": ["ब्रिटिश और भारतीय राष्ट्रीय कांग्रेस", "मुस्लिम लीग और ब्रिटिश", "भारतीय राष्ट्रीय कांग्रेस और मुस्लिम लीग", "कांग्रेस के भीतर चरमपंथियों और उदारवादियों"],
        "answer": "The Indian National Congress and the Muslim League",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which of the following is a major millet producing state in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में बाजरा का एक प्रमुख उत्पादक राज्य है?",
        "options_en": ["West Bengal", "Punjab", "Rajasthan", "Tamil Nadu"],
        "options_hi": ["पश्चिम बंगाल", "पंजाब", "राजस्थान", "तमिलनाडु"],
        "answer": "Rajasthan",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "In a federal system, the powers of the central and state governments are:",
        "question_hi": "एक संघीय प्रणाली में, केंद्र और राज्य सरकारों की शक्तियाँ होती हैं:",
        "options_en": ["Determined by the central government", "Clearly divided", "Overlapping and undefined", "Subject to the President's approval"],
        "options_hi": ["केंद्र सरकार द्वारा निर्धारित", "स्पष्ट रूप से विभाजित", "अतिव्यापी और अपरिभाषित", "राष्ट्रपति की स्वीकृति के अधीन"],
        "answer": "Clearly divided",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which of the following is a developmental goal for a rich farmer?",
        "question_hi": "निम्नलिखित में से कौन सा एक अमीर किसान के लिए विकासात्मक लक्ष्य है?",
        "options_en": ["More days of work", "Higher support prices for crops", "Land ownership", "Better wages for agricultural laborers"],
        "options_hi": ["अधिक दिनों का काम", "फसलों के लिए उच्च समर्थन मूल्य", "भूमि का स्वामित्व", "कृषि मजदूरों के लिए बेहतर मजदूरी"],
        "answer": "Higher support prices for crops",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which of the following is a challenge posed by Multi-National Corporations (MNCs) to local producers?",
        "question_hi": "बहुराष्ट्रीय निगमों (एमएनसी) द्वारा स्थानीय उत्पादकों के सामने निम्नलिखित में से कौन सी चुनौती पेश की जाती है?",
        "options_en": ["Reduced competition", "Increased investment", "Access to new technology", "Intense competition and lower prices"],
        "options_hi": ["घटी हुई प्रतिस्पर्धा", "बढ़ा हुआ निवेश", "नई तकनीक तक पहुंच", "तीव्र प्रतिस्पर्धा और कम कीमतें"],
        "answer": "Intense competition and lower prices",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The 'Gandhi-Irwin Pact' was signed in:",
        "question_hi": "'गांधी-इरविन समझौता' कब हस्ताक्षरित हुआ था?",
        "options_en": ["1928", "1930", "1931", "1932"],
        "options_hi": ["1928", "1930", "1931", "1932"],
        "answer": "1931",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which of the following is a major coal producing state in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में एक प्रमुख कोयला उत्पादक राज्य है?",
        "options_en": ["Gujarat", "Kerala", "West Bengal", "Andhra Pradesh"],
        "options_hi": ["गुजरात", "केरल", "पश्चिम बंगाल", "आंध्र प्रदेश"],
        "answer": "West Bengal",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The idea of 'holding together' federation is best exemplified by:",
        "question_hi": "'एक साथ रखने' वाले संघ का विचार सबसे अच्छा उदाहरण है:",
        "options_en": ["USA", "Switzerland", "Australia", "India"],
        "options_hi": ["संयुक्त राज्य अमेरिका", "स्विट्जरलैंड", "ऑस्ट्रेलिया", "भारत"],
        "answer": "India",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which of the following is a function of an election commission?",
        "question_hi": "निम्नलिखित में से कौन सा चुनाव आयोग का कार्य है?",
        "options_en": ["To form the government", "To implement government policies", "To conduct free and fair elections", "To interpret the constitution"],
        "options_hi": ["सरकार बनाना", "सरकारी नीतियों को लागू करना", "स्वतंत्र और निष्पक्ष चुनाव कराना", "संविधान की व्याख्या करना"],
        "answer": "To conduct free and fair elections",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The removal of barriers or restrictions set by the government is known as:",
        "question_hi": "सरकार द्वारा निर्धारित बाधाओं या प्रतिबंधों को हटाना कहलाता है:",
        "options_en": ["Privatization", "Nationalization", "Liberalization", "Globalization"],
        "options_hi": ["निजीकरण", "राष्ट्रीयकरण", "उदारीकरण", "वैश्वीकरण"],
        "answer": "Liberalization",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The 'Simon Commission' was appointed by the British government to:",
        "question_hi": "'साइमन कमीशन' को ब्रिटिश सरकार द्वारा किस लिए नियुक्त किया गया था?",
        "options_en": ["To grant independence to India", "To suggest reforms in the constitutional system of India", "To suppress the nationalist movement", "To promote trade relations"],
        "options_hi": ["भारत को स्वतंत्रता प्रदान करना", "भारत की संवैधानिक प्रणाली में सुधारों का सुझाव देना", "राष्ट्रवादी आंदोलन को दबाना", "व्यापार संबंधों को बढ़ावा देना"],
        "answer": "To suggest reforms in the constitutional system of India",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which of the following is a major oilseed producing state in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में एक प्रमुख तिलहन उत्पादक राज्य है?",
        "options_en": ["Assam", "Kerala", "Madhya Pradesh", "Himachal Pradesh"],
        "options_hi": ["असम", "केरल", "मध्य प्रदेश", "हिमाचल प्रदेश"],
        "answer": "Madhya Pradesh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The 'Union List' in the Indian Constitution contains subjects on which:",
        "question_hi": "भारतीय संविधान में 'संघ सूची' में ऐसे विषय हैं जिन पर:",
        "options_en": ["Only the state governments can make laws", "Only the central government can make laws", "Both the central and state governments can make laws", "Local governments have exclusive power"],
        "options_hi": ["केवल राज्य सरकारें कानून बना सकती हैं", "केवल केंद्र सरकार कानून बना सकती है", "केंद्र और राज्य दोनों सरकारें कानून बना सकती हैं", "स्थानीय सरकारों के पास विशेष शक्ति है"],
        "answer": "Only the central government can make laws",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which of the following is a challenge to free and fair elections?",
        "question_hi": "निम्नलिखित में से कौन सा स्वतंत्र और निष्पक्ष चुनावों के लिए एक चुनौती है?",
        "options_en": ["Presence of an independent election commission", "Universal adult franchise", "Money power in elections", "High voter turnout"],
        "options_hi": ["एक स्वतंत्र चुनाव आयोग की उपस्थिति", "सार्वभौमिक वयस्क मताधिकार", "चुनावों में धन बल", "उच्च मतदाता मतदान"],
        "answer": "Money power in elections",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The 'Right to Choose' is an important right under:",
        "question_hi": "'चुनने का अधिकार' किसके तहत एक महत्वपूर्ण अधिकार है?",
        "options_en": ["Right to Information", "Right to Education", "Consumer Rights", "Fundamental Rights"],
        "options_hi": ["सूचना का अधिकार", "शिक्षा का अधिकार", "उपभोक्ता अधिकार", "मौलिक अधिकार"],
        "answer": "Consumer Rights",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The 'Bardoli Satyagraha' was led by:",
        "question_hi": "'बारडोली सत्याग्रह' का नेतृत्व किसने किया था?",
        "options_en": ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhas Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
        "answer": "Sardar Vallabhbhai Patel",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which of the following is a non-conventional source of energy?",
        "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का गैर-पारंपरिक स्रोत है?",
        "options_en": ["Coal", "Petroleum", "Natural Gas", "Wind Energy"],
        "options_hi": ["कोयला", "पेट्रोलियम", "प्राकृतिक गैस", "पवन ऊर्जा"],
        "answer": "Wind Energy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "In which form of government is power concentrated in one central authority?",
        "question_hi": "सरकार के किस रूप में शक्ति एक केंद्रीय प्राधिकरण में केंद्रित होती है?",
        "options_en": ["Federal", "Unitary", "Confederation", "Parliamentary"],
        "options_hi": ["संघीय", "एकात्मक", "परिसंघ", "संसदीय"],
        "answer": "Unitary",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which of the following is an example of a 'sectional interest group'?",
        "question_hi": "निम्नलिखित में से कौन सा 'अनुभागीय हित समूह' का एक उदाहरण है?",
        "options_en": ["A group promoting environmental protection", "A trade union", "A group advocating for animal rights", "A group working for literacy"],
        "options_hi": ["पर्यावरण संरक्षण को बढ़ावा देने वाला एक समूह", "एक ट्रेड यूनियन", "पशु अधिकारों की वकालत करने वाला एक समूह", "साक्षरता के लिए काम करने वाला एक समूह"],
        "answer": "A trade union",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The increase in the value of assets owned by producers is known as:",
        "question_hi": "उत्पादकों के स्वामित्व वाली संपत्तियों के मूल्य में वृद्धि को कहा जाता है:",
        "options_en": ["Investment", "Production", "Consumption", "Distribution"],
        "options_hi": ["निवेश", "उत्पादन", "उपभोग", "वितरण"],
        "answer": "Investment",
        "attempted": false,
        "selected": ""
    }
        
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
  const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
  const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

  document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
  document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

  const optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  optionsArray.forEach(option => {
    optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
  });

  updateCircles();
}

function markAttempted(index, selectedAnswer) {
  questions[index].attempted = true;
  questions[index].selected = selectedAnswer;
  updateCircles();
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

function updateCircles() {
  const circleContainer = document.getElementById("circleContainer");
  circleContainer.innerHTML = "";
  const start = currentCirclePage * circlesPerPage;
  const end = Math.min(start + circlesPerPage, questions.length);

  for (let i = start; i < end; i++) {
    const q = questions[i];
    let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
    circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
  }
}

function jumpToQuestion(index) {
  currentQuestion = index;
  loadQuestion(index);
}

function prevCirclePage() {
  if (currentCirclePage > 0) {
    currentCirclePage--;
    updateCircles();
  }
}

function nextCirclePage() {
  if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
    currentCirclePage++;
    updateCircles();
  }
}

function changeLanguage() {
  language = document.getElementById("languageSelect").value;
  loadQuestion(currentQuestion);
}

function submitQuiz() {
  let confirmation = confirm("Are you sure you want to submit the test?");
  if (!confirmation) return;

  let attempted = 0, notAttempted = 0, score = 0;
  const results = [];

  questions.forEach(q => {
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
  if (viewResult) {
      window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Submitting the quiz automatically.");
      submitQuiz();
    } else {
      timerElement.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
  loadQuestion(currentQuestion);
};