const questions = [
    {
        "num": 1,
        "question_en": "Which social scientist developed the theory of 'Social Contract'?",
        "question_hi": "किस सामाजिक वैज्ञानिक ने 'सामाजिक अनुबंध' का सिद्धांत विकसित किया?",
        "options_en": ["Jean-Jacques Rousseau", "John Locke", "Thomas Hobbes", "All of these"],
        "options_hi": ["जीन-जैक्स रूसो", "जॉन लॉक", "थॉमस हॉब्स", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does GDP stand for in economics?",
        "question_hi": "अर्थशास्त्र में जीडीपी का क्या अर्थ है?",
        "options_en": ["Gross Domestic Product", "Gross Development Process", "General Domestic Product", "General Development Product"],
        "options_hi": ["सकल घरेलू उत्पाद", "सकल विकास प्रक्रिया", "सामान्य घरेलू उत्पाद", "सामान्य विकास उत्पाद"],
        "answer_en": "Gross Domestic Product",
        "answer_hi": "सकल घरेलू उत्पाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who is known as the 'Father of Sociology'?",
        "question_hi": "किसे 'समाजशास्त्र के पिता' के रूप में जाना जाता है?",
        "options_en": ["Auguste Comte", "Karl Marx", "Max Weber", "Emile Durkheim"],
        "options_hi": ["ऑगस्ट कॉम्टे", "कार्ल मार्क्स", "मैक्स वेबर", "एमिल डर्कहेम"],
        "answer_en": "Auguste Comte",
        "answer_hi": "ऑगस्ट कॉम्टे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which economic concept represents 'next best alternative foregone'?",
        "question_hi": "कौन सी आर्थिक अवधारणा 'अगला सर्वोत्तम विकल्प त्यागा गया' को दर्शाती है?",
        "options_en": ["Opportunity Cost", "Marginal Cost", "Fixed Cost", "Variable Cost"],
        "options_hi": ["अवसर लागत", "सीमांत लागत", "स्थिर लागत", "परिवर्तनीय लागत"],
        "answer_en": "Opportunity Cost",
        "answer_hi": "अवसर लागत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What type of family consists of parents and their children only?",
        "question_hi": "किस प्रकार के परिवार में केवल माता-पिता और उनके बच्चे होते हैं?",
        "options_en": ["Nuclear Family", "Joint Family", "Extended Family", "Matrilocal Family"],
        "options_hi": ["एकल परिवार", "संयुक्त परिवार", "विस्तृत परिवार", "मातृस्थानीय परिवार"],
        "answer_en": "Nuclear Family",
        "answer_hi": "एकल परिवार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Who wrote the famous book 'The Wealth of Nations'?",
        "question_hi": "प्रसिद्ध पुस्तक 'द वेल्थ ऑफ नेशंस' किसने लिखी?",
        "options_en": ["Adam Smith", "David Ricardo", "John Maynard Keynes", "Karl Marx"],
        "options_hi": ["एडम स्मिथ", "डेविड रिकार्डो", "जॉन मेनार्ड कीन्स", "कार्ल मार्क्स"],
        "answer_en": "Adam Smith",
        "answer_hi": "एडम स्मिथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which sociological perspective focuses on conflict in society?",
        "question_hi": "कौन सा समाजशास्त्रीय परिप्रेक्ष्य समाज में संघर्ष पर ध्यान केंद्रित करता है?",
        "options_en": ["Conflict Theory", "Functionalism", "Symbolic Interactionism", "Structuralism"],
        "options_hi": ["संघर्ष सिद्धांत", "कार्यवाद", "प्रतीकात्मक अंतक्रियावाद", "संरचनावाद"],
        "answer_en": "Conflict Theory",
        "answer_hi": "संघर्ष सिद्धांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the main function of the Reserve Bank of India?",
        "question_hi": "भारतीय रिजर्व बैंक का मुख्य कार्य क्या है?",
        "options_en": ["Monetary Policy", "Fiscal Policy", "Industrial Policy", "Trade Policy"],
        "options_hi": ["मौद्रिक नीति", "राजकोषीय नीति", "औद्योगिक नीति", "व्यापार नीति"],
        "answer_en": "Monetary Policy",
        "answer_hi": "मौद्रिक नीति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What term describes the process of learning social norms?",
        "question_hi": "कौन सा शब्द सामाजिक मानदंड सीखने की प्रक्रिया का वर्णन करता है?",
        "options_en": ["Socialization", "Acculturation", "Assimilation", "Internalization"],
        "options_hi": ["समाजीकरण", "संस्कृतीकरण", "आत्मसात्करण", "आंतरीकरण"],
        "answer_en": "Socialization",
        "answer_hi": "समाजीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which economic indicator measures price changes over time?",
        "question_hi": "कौन सा आर्थिक संकेतक समय के साथ मूल्य परिवर्तनों को मापता है?",
        "options_en": ["Inflation Rate", "Unemployment Rate", "Interest Rate", "Exchange Rate"],
        "options_hi": ["मुद्रास्फीति दर", "बेरोजगारी दर", "ब्याज दर", "विनिमय दर"],
        "answer_en": "Inflation Rate",
        "answer_hi": "मुद्रास्फीति दर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Who introduced the concept of 'Class Struggle'?",
        "question_hi": "'वर्ग संघर्ष' की अवधारणा किसने पेश की?",
        "options_en": ["Karl Marx", "Max Weber", "Emile Durkheim", "Talcott Parsons"],
        "options_hi": ["कार्ल मार्क्स", "मैक्स वेबर", "एमिल डर्कहेम", "टैलकॉट पार्सन्स"],
        "answer_en": "Karl Marx",
        "answer_hi": "कार्ल मार्क्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What type of unemployment occurs during economic recessions?",
        "question_hi": "आर्थिक मंदी के दौरान किस प्रकार की बेरोजगारी होती है?",
        "options_en": ["Cyclical Unemployment", "Structural Unemployment", "Frictional Unemployment", "Seasonal Unemployment"],
        "options_hi": ["चक्रीय बेरोजगारी", "संरचनात्मक बेरोजगारी", "घर्षण बेरोजगारी", "मौसमी बेरोजगारी"],
        "answer_en": "Cyclical Unemployment",
        "answer_hi": "चक्रीय बेरोजगारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the study of population called?",
        "question_hi": "जनसंख्या के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Demography", "Sociology", "Anthropology", "Epidemiology"],
        "options_hi": ["जनसांख्यिकी", "समाजशास्त्र", "मानवविज्ञान", "महामारी विज्ञान"],
        "answer_en": "Demography",
        "answer_hi": "जनसांख्यिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which economic system is based on public ownership?",
        "question_hi": "कौन सी आर्थिक व्यवस्था सार्वजनिक स्वामित्व पर आधारित है?",
        "options_en": ["Socialism", "Capitalism", "Mixed Economy", "Feudalism"],
        "options_hi": ["समाजवाद", "पूंजीवाद", "मिश्रित अर्थव्यवस्था", "सामंतवाद"],
        "answer_en": "Socialism",
        "answer_hi": "समाजवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the process of moving from rural to urban areas called?",
        "question_hi": "ग्रामीण से शहरी क्षेत्रों में जाने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Urban Migration", "Rural Migration", "Internal Migration", "External Migration"],
        "options_hi": ["शहरी प्रवास", "ग्रामीण प्रवास", "आंतरिक प्रवास", "बाह्य प्रवास"],
        "answer_en": "Urban Migration",
        "answer_hi": "शहरी प्रवास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Who proposed the 'Theory of Comparative Advantage'?",
        "question_hi": "'तुलनात्मक लाभ का सिद्धांत' किसने प्रस्तावित किया?",
        "options_en": ["David Ricardo", "Adam Smith", "John Stuart Mill", "Alfred Marshall"],
        "options_hi": ["डेविड रिकार्डो", "एडम स्मिथ", "जॉन स्टुअर्ट मिल", "अल्फ्रेड मार्शल"],
        "answer_en": "David Ricardo",
        "answer_hi": "डेविड रिकार्डो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What term describes discrimination based on gender?",
        "question_hi": "कौन सा शब्द लिंग के आधार पर भेदभाव का वर्णन करता है?",
        "options_en": ["Sexism", "Racism", "Ageism", "Classism"],
        "options_hi": ["लैंगिक भेदभाव", "नस्लवाद", "उम्रवाद", "वर्गवाद"],
        "answer_en": "Sexism",
        "answer_hi": "लैंगिक भेदभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which tax is levied on goods and services?",
        "question_hi": "कौन सा कर वस्तुओं और सेवाओं पर लगाया जाता है?",
        "options_en": ["GST", "Income Tax", "Property Tax", "Corporate Tax"],
        "options_hi": ["जीएसटी", "आयकर", "संपत्ति कर", "कॉर्पोरेट कर"],
        "answer_en": "GST",
        "answer_hi": "जीएसटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the biological classification of humans?",
        "question_hi": "मनुष्य का जैविक वर्गीकरण क्या है?",
        "options_en": ["Homo sapiens", "Homo erectus", "Homo habilis", "Homo neanderthalensis"],
        "options_hi": ["होमो सेपियन्स", "होमो इरेक्टस", "होमो हैबिलिस", "होमो निएंडरथलेंसिस"],
        "answer_en": "Homo sapiens",
        "answer_hi": "होमो सेपियन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the study of money, banking, and financial markets called?",
        "question_hi": "धन, बैंकिंग और वित्तीय बाजारों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Monetary Economics", "Development Economics", "International Economics", "Labor Economics"],
        "options_hi": ["मौद्रिक अर्थशास्त्र", "विकास अर्थशास्त्र", "अंतर्राष्ट्रीय अर्थशास्त्र", "श्रम अर्थशास्त्र"],
        "answer_en": "Monetary Economics",
        "answer_hi": "मौद्रिक अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Who wrote 'The Protestant Ethic and the Spirit of Capitalism'?",
        "question_hi": "'द प्रोटेस्टेंट एथिक एंड द स्पिरिट ऑफ कैपिटलिज्म' किसने लिखा?",
        "options_en": ["Max Weber", "Karl Marx", "Emile Durkheim", "Talcott Parsons"],
        "options_hi": ["मैक्स वेबर", "कार्ल मार्क्स", "एमिल डर्कहेम", "टैलकॉट पार्सन्स"],
        "answer_en": "Max Weber",
        "answer_hi": "मैक्स वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the main objective of the Five Year Plans in India?",
        "question_hi": "भारत में पंचवर्षीय योजनाओं का मुख्य उद्देश्य क्या है?",
        "options_en": ["Economic Development", "Political Stability", "Cultural Promotion", "Military Strength"],
        "options_hi": ["आर्थिक विकास", "राजनीतिक स्थिरता", "सांस्कृतिक प्रचार", "सैन्य शक्ति"],
        "answer_en": "Economic Development",
        "answer_hi": "आर्थिक विकास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the term for marriage within one's own group?",
        "question_hi": "अपने ही समूह के भीतर विवाह के लिए क्या शब्द है?",
        "options_en": ["Endogamy", "Exogamy", "Polygamy", "Monogamy"],
        "options_hi": ["अंतर्विवाह", "बहिर्विवाह", "बहुविवाह", "एकविवाह"],
        "answer_en": "Endogamy",
        "answer_hi": "अंतर्विवाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which organization regulates stock markets in India?",
        "question_hi": "भारत में स्टॉक मार्केट को कौन सा संगठन नियंत्रित करता है?",
        "options_en": ["SEBI", "RBI", "IRDA", "NABARD"],
        "options_hi": ["सेबी", "आरबीआई", "आईआरडीए", "नाबार्ड"],
        "answer_en": "SEBI",
        "answer_hi": "सेबी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the study of human evolution called?",
        "question_hi": "मानव विकास के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Paleoanthropology", "Archaeology", "Paleontology", "Primatology"],
        "options_hi": ["पुरा-मानवविज्ञान", "पुरातत्व", "जीवाश्म विज्ञान", "प्राइमेट विज्ञान"],
        "answer_en": "Paleoanthropology",
        "answer_hi": "पुरा-मानवविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the basic economic problem?",
        "question_hi": "मौलिक आर्थिक समस्या क्या है?",
        "options_en": ["Scarcity of Resources", "Unemployment", "Inflation", "Poverty"],
        "options_hi": ["संसाधनों की कमी", "बेरोजगारी", "मुद्रास्फीति", "गरीबी"],
        "answer_en": "Scarcity of Resources",
        "answer_hi": "संसाधनों की कमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the process of cultural change through contact called?",
        "question_hi": "संपर्क के माध्यम से सांस्कृतिक परिवर्तन की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Acculturation", "Assimilation", "Diffusion", "Enculturation"],
        "options_hi": ["संस्कृतीकरण", "आत्मसात्करण", "प्रसार", "संस्कृतिकरण"],
        "answer_en": "Acculturation",
        "answer_hi": "संस्कृतीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which economist developed the concept of 'Invisible Hand'?",
        "question_hi": "किस अर्थशास्त्री ने 'अदृश्य हाथ' की अवधारणा विकसित की?",
        "options_en": ["Adam Smith", "John Maynard Keynes", "Milton Friedman", "Karl Marx"],
        "options_hi": ["एडम स्मिथ", "जॉन मेनार्ड कीन्स", "मिल्टन फ्रीडमैन", "कार्ल मार्क्स"],
        "answer_en": "Adam Smith",
        "answer_hi": "एडम स्मिथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the term for rules that define appropriate behavior?",
        "question_hi": "उचित व्यवहार को परिभाषित करने वाले नियमों के लिए क्या शब्द है?",
        "options_en": ["Norms", "Values", "Beliefs", "Customs"],
        "options_hi": ["मानदंड", "मूल्य", "विश्वास", "रिवाज"],
        "answer_en": "Norms",
        "answer_hi": "मानदंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What type of goods are non-excludable and non-rivalrous?",
        "question_hi": "किस प्रकार की वस्तुएं गैर-बहिष्करणीय और गैर-प्रतिद्वंद्वी होती हैं?",
        "options_en": ["Public Goods", "Private Goods", "Common Goods", "Club Goods"],
        "options_hi": ["सार्वजनिक वस्तुएं", "निजी वस्तुएं", "सामान्य वस्तुएं", "क्लब वस्तुएं"],
        "answer_en": "Public Goods",
        "answer_hi": "सार्वजनिक वस्तुएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Who is known for the 'Looking Glass Self' theory?",
        "question_hi": "'लुकिंग ग्लास सेल्फ' सिद्धांत के लिए कौन जाना जाता है?",
        "options_en": ["Charles Horton Cooley", "George Herbert Mead", "Erving Goffman", "Herbert Blumer"],
        "options_hi": ["चार्ल्स हॉर्टन कूली", "जॉर्ज हर्बर्ट मीड", "अर्विंग गोफमैन", "हर्बर्ट ब्लूमर"],
        "answer_en": "Charles Horton Cooley",
        "answer_hi": "चार्ल्स हॉर्टन कूली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the total value of goods and services produced in a country?",
        "question_hi": "किसी देश में उत्पादित वस्तुओं और सेवाओं का कुल मूल्य क्या है?",
        "options_en": ["Gross Domestic Product", "Net National Product", "National Income", "Per Capita Income"],
        "options_hi": ["सकल घरेलू उत्पाद", "शुद्ध राष्ट्रीय उत्पाद", "राष्ट्रीय आय", "प्रति व्यक्ति आय"],
        "answer_en": "Gross Domestic Product",
        "answer_hi": "सकल घरेलू उत्पाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the process of becoming part of another culture called?",
        "question_hi": "दूसरी संस्कृति का हिस्सा बनने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Assimilation", "Acculturation", "Integration", "Accommodation"],
        "options_hi": ["आत्मसात्करण", "संस्कृतीकरण", "एकीकरण", "समायोजन"],
        "answer_en": "Assimilation",
        "answer_hi": "आत्मसात्करण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which economic policy involves government spending and taxation?",
        "question_hi": "कौन सी आर्थिक नीति सरकारी खर्च और कराधान को शामिल करती है?",
        "options_en": ["Fiscal Policy", "Monetary Policy", "Trade Policy", "Industrial Policy"],
        "options_hi": ["राजकोषीय नीति", "मौद्रिक नीति", "व्यापार नीति", "औद्योगिक नीति"],
        "answer_en": "Fiscal Policy",
        "answer_hi": "राजकोषीय नीति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the systematic study of human society called?",
        "question_hi": "मानव समाज के व्यवस्थित अध्ययन को क्या कहा जाता है?",
        "options_en": ["Sociology", "Anthropology", "Psychology", "Political Science"],
        "options_hi": ["समाजशास्त्र", "मानवविज्ञान", "मनोविज्ञान", "राजनीति विज्ञान"],
        "answer_en": "Sociology",
        "answer_hi": "समाजशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Who developed the 'Theory of Demographic Transition'?",
        "question_hi": "'जनसांख्यिकीय संक्रमण सिद्धांत' किसने विकसित किया?",
        "options_en": ["Warren Thompson", "Thomas Malthus", "Karl Marx", "Max Weber"],
        "options_hi": ["वॉरेन थॉम्पसन", "थॉमस माल्थस", "कार्ल मार्क्स", "मैक्स वेबर"],
        "answer_en": "Warren Thompson",
        "answer_hi": "वॉरेन थॉम्पसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the study of ancient human cultures called?",
        "question_hi": "प्राचीन मानव संस्कृतियों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Archaeology", "History", "Paleontology", "Anthropology"],
        "options_hi": ["पुरातत्व", "इतिहास", "जीवाश्म विज्ञान", "मानवविज्ञान"],
        "answer_en": "Archaeology",
        "answer_hi": "पुरातत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which economic concept describes total satisfaction from consumption?",
        "question_hi": "कौन सी आर्थिक अवधारणा खपत से कुल संतुष्टि का वर्णन करती है?",
        "options_en": ["Total Utility", "Marginal Utility", "Average Utility", "Cardinal Utility"],
        "options_hi": ["कुल उपयोगिता", "सीमांत उपयोगिता", "औसत उपयोगिता", "मात्रात्मक उपयोगिता"],
        "answer_en": "Total Utility",
        "answer_hi": "कुल उपयोगिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the term for marriage to multiple partners?",
        "question_hi": "एक से अधिक साथी से विवाह के लिए क्या शब्द है?",
        "options_en": ["Polygamy", "Monogamy", "Endogamy", "Exogamy"],
        "options_hi": ["बहुविवाह", "एकविवाह", "अंतर्विवाह", "बहिर्विवाह"],
        "answer_en": "Polygamy",
        "answer_hi": "बहुविवाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the rate at which prices rise called?",
        "question_hi": "जिस दर से कीमतें बढ़ती हैं उसे क्या कहा जाता है?",
        "options_en": ["Inflation", "Deflation", "Stagflation", "Hyperinflation"],
        "options_hi": ["मुद्रास्फीति", "अपस्फीति", "मंदी-मुद्रास्फीति", "अतिमुद्रास्फीति"],
        "answer_en": "Inflation",
        "answer_hi": "मुद्रास्फीति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Who wrote 'Suicide: A Study in Sociology'?",
        "question_hi": "'आत्महत्या: समाजशास्त्र में एक अध्ययन' किसने लिखा?",
        "options_en": ["Emile Durkheim", "Max Weber", "Karl Marx", "Auguste Comte"],
        "options_hi": ["एमिल डर्कहेम", "मैक्स वेबर", "कार्ल मार्क्स", "ऑगस्ट कॉम्टे"],
        "answer_en": "Emile Durkheim",
        "answer_hi": "एमिल डर्कहेम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the study of production and consumption called?",
        "question_hi": "उत्पादन और खपत के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Economics", "Sociology", "Anthropology", "Political Science"],
        "options_hi": ["अर्थशास्त्र", "समाजशास्त्र", "मानवविज्ञान", "राजनीति विज्ञान"],
        "answer_en": "Economics",
        "answer_hi": "अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is discrimination based on race called?",
        "question_hi": "नस्ल के आधार पर भेदभाव को क्या कहा जाता है?",
        "options_en": ["Racism", "Sexism", "Ageism", "Classism"],
        "options_hi": ["नस्लवाद", "लैंगिक भेदभाव", "उम्रवाद", "वर्गवाद"],
        "answer_en": "Racism",
        "answer_hi": "नस्लवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the total stock of money in an economy called?",
        "question_hi": "किसी अर्थव्यवस्था में धन के कुल स्टॉक को क्या कहा जाता है?",
        "options_en": ["Money Supply", "Money Demand", "Money Velocity", "Money Stock"],
        "options_hi": ["मुद्रा आपूर्ति", "मुद्रा मांग", "मुद्रा वेग", "मुद्रा स्टॉक"],
        "answer_en": "Money Supply",
        "answer_hi": "मुद्रा आपूर्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the study of social stratification called?",
        "question_hi": "सामाजिक स्तरीकरण के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Sociology of Stratification", "Social Stratification Studies", "Class Analysis", "Status Studies"],
        "options_hi": ["स्तरीकरण का समाजशास्त्र", "सामाजिक स्तरीकरण अध्ययन", "वर्ग विश्लेषण", "स्थिति अध्ययन"],
        "answer_en": "Sociology of Stratification",
        "answer_hi": "स्तरीकरण का समाजशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the government's income called?",
        "question_hi": "सरकार की आय को क्या कहा जाता है?",
        "options_en": ["Revenue", "Expenditure", "Budget", "Deficit"],
        "options_hi": ["राजस्व", "व्यय", "बजट", "घाटा"],
        "answer_en": "Revenue",
        "answer_hi": "राजस्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the term for shared ideas about what is good?",
        "question_hi": "क्या अच्छा है इसके बारे में साझा विचारों के लिए क्या शब्द है?",
        "options_en": ["Values", "Norms", "Beliefs", "Customs"],
        "options_hi": ["मूल्य", "मानदंड", "विश्वास", "रिवाज"],
        "answer_en": "Values",
        "answer_hi": "मूल्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the study of international trade called?",
        "question_hi": "अंतर्राष्ट्रीय व्यापार के अध्ययन को क्या कहा जाता है?",
        "options_en": ["International Economics", "Development Economics", "Monetary Economics", "Labor Economics"],
        "options_hi": ["अंतर्राष्ट्रीय अर्थशास्त्र", "विकास अर्थशास्त्र", "मौद्रिक अर्थशास्त्र", "श्रम अर्थशास्त्र"],
        "answer_en": "International Economics",
        "answer_hi": "अंतर्राष्ट्रीय अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the process of social change called?",
        "question_hi": "सामाजिक परिवर्तन की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Social Transformation", "Social Evolution", "Social Development", "Social Progress"],
        "options_hi": ["सामाजिक परिवर्तन", "सामाजिक विकास", "सामाजिक विकास", "सामाजिक प्रगति"],
        "answer_en": "Social Transformation",
        "answer_hi": "सामाजिक परिवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the study of economic development called?",
        "question_hi": "आर्थिक विकास के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Development Economics", "Growth Economics", "Progress Economics", "Advancement Economics"],
        "options_hi": ["विकास अर्थशास्त्र", "वृद्धि अर्थशास्त्र", "प्रगति अर्थशास्त्र", "उन्नति अर्थशास्त्र"],
        "answer_en": "Development Economics",
        "answer_hi": "विकास अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Who developed the concept of 'Ideal Type'?",
        "question_hi": "'आदर्श प्रकार' की अवधारणा किसने विकसित की?",
        "options_en": ["Max Weber", "Karl Marx", "Emile Durkheim", "Talcott Parsons"],
        "options_hi": ["मैक्स वेबर", "कार्ल मार्क्स", "एमिल डर्कहेम", "टैलकॉट पार्सन्स"],
        "answer_en": "Max Weber",
        "answer_hi": "मैक्स वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the study of consumer behavior called?",
        "question_hi": "उपभोक्ता व्यवहार के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Consumer Economics", "Behavioral Economics", "Microeconomics", "Marketing"],
        "options_hi": ["उपभोक्ता अर्थशास्त्र", "व्यवहारिक अर्थशास्त्र", "सूक्ष्म अर्थशास्त्र", "विपणन"],
        "answer_en": "Consumer Economics",
        "answer_hi": "उपभोक्ता अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the term for social position achieved through effort?",
        "question_hi": "प्रयास के माध्यम से प्राप्त सामाजिक स्थिति के लिए क्या शब्द है?",
        "options_en": ["Achieved Status", "Ascribed Status", "Master Status", "Social Status"],
        "options_hi": ["अर्जित स्थिति", "आरोपित स्थिति", "मुख्य स्थिति", "सामाजिक स्थिति"],
        "answer_en": "Achieved Status",
        "answer_hi": "अर्जित स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the study of poverty and inequality called?",
        "question_hi": "गरीबी और असमानता के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Poverty Studies", "Inequality Economics", "Development Economics", "Social Welfare Economics"],
        "options_hi": ["गरीबी अध्ययन", "असमानता अर्थशास्त्र", "विकास अर्थशास्त्र", "सामाजिक कल्याण अर्थशास्त्र"],
        "answer_en": "Poverty Studies",
        "answer_hi": "गरीबी अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the term for marriage outside one's group?",
        "question_hi": "अपने समूह से बाहर विवाह के लिए क्या शब्द है?",
        "options_en": ["Exogamy", "Endogamy", "Polygamy", "Monogamy"],
        "options_hi": ["बहिर्विवाह", "अंतर्विवाह", "बहुविवाह", "एकविवाह"],
        "answer_en": "Exogamy",
        "answer_hi": "बहिर्विवाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the study of government revenue and expenditure called?",
        "question_hi": "सरकारी राजस्व और व्यय के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Public Finance", "Government Economics", "Fiscal Studies", "Revenue Economics"],
        "options_hi": ["सार्वजनिक वित्त", "सरकारी अर्थशास्त्र", "राजकोषीय अध्ययन", "राजस्व अर्थशास्त्र"],
        "answer_en": "Public Finance",
        "answer_hi": "सार्वजनिक वित्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the term for social position assigned at birth?",
        "question_hi": "जन्म के समय निर्दिष्ट सामाजिक स्थिति के लिए क्या शब्द है?",
        "options_en": ["Ascribed Status", "Achieved Status", "Master Status", "Social Status"],
        "options_hi": ["आरोपित स्थिति", "अर्जित स्थिति", "मुख्य स्थिति", "सामाजिक स्थिति"],
        "answer_en": "Ascribed Status",
        "answer_hi": "आरोपित स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the study of economic systems called?",
        "question_hi": "आर्थिक प्रणालियों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Comparative Economic Systems", "Economic Systems Analysis", "System Economics", "Structure Economics"],
        "options_hi": ["तुलनात्मक आर्थिक प्रणालियाँ", "आर्थिक प्रणाली विश्लेषण", "प्रणाली अर्थशास्त्र", "संरचना अर्थशास्त्र"],
        "answer_en": "Comparative Economic Systems",
        "answer_hi": "तुलनात्मक आर्थिक प्रणालियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the term for breaking social norms?",
        "question_hi": "सामाजिक मानदंडों को तोड़ने के लिए क्या शब्द है?",
        "options_en": ["Deviance", "Conformity", "Obedience", "Compliance"],
        "options_hi": ["विचलन", "अनुरूपता", "आज्ञापालन", "अनुपालन"],
        "answer_en": "Deviance",
        "answer_hi": "विचलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the study of market structures called?",
        "question_hi": "बाजार संरचनाओं के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Industrial Organization", "Market Economics", "Business Economics", "Corporate Economics"],
        "options_hi": ["औद्योगिक संगठन", "बाजार अर्थशास्त्र", "व्यवसाय अर्थशास्त्र", "कॉर्पोरेट अर्थशास्त्र"],
        "answer_en": "Industrial Organization",
        "answer_hi": "औद्योगिक संगठन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the term for judging other cultures by one's own standards?",
        "question_hi": "अन्य संस्कृतियों को अपने मानकों से आंकने के लिए क्या शब्द है?",
        "options_en": ["Ethnocentrism", "Cultural Relativism", "Xenocentrism", "Multiculturalism"],
        "options_hi": ["नृजातीय केंद्रवाद", "सांस्कृतिक सापेक्षवाद", "विदेशी केंद्रवाद", "बहुसंस्कृतिवाद"],
        "answer_en": "Ethnocentrism",
        "answer_hi": "नृजातीय केंद्रवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the study of economic growth called?",
        "question_hi": "आर्थिक विकास के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Growth Economics", "Development Economics", "Progress Economics", "Expansion Economics"],
        "options_hi": ["वृद्धि अर्थशास्त्र", "विकास अर्थशास्त्र", "प्रगति अर्थशास्त्र", "विस्तार अर्थशास्त्र"],
        "answer_en": "Growth Economics",
        "answer_hi": "वृद्धि अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the term for marriage to one partner?",
        "question_hi": "एक साथी से विवाह के लिए क्या शब्द है?",
        "options_en": ["Monogamy", "Polygamy", "Endogamy", "Exogamy"],
        "options_hi": ["एकविवाह", "बहुविवाह", "अंतर्विवाह", "बहिर्विवाह"],
        "answer_en": "Monogamy",
        "answer_hi": "एकविवाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the study of labor markets called?",
        "question_hi": "श्रम बाजारों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Labor Economics", "Work Economics", "Employment Economics", "Job Economics"],
        "options_hi": ["श्रम अर्थशास्त्र", "कार्य अर्थशास्त्र", "रोजगार अर्थशास्त्र", "नौकरी अर्थशास्त्र"],
        "answer_en": "Labor Economics",
        "answer_hi": "श्रम अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the term for social mobility?",
        "question_hi": "सामाजिक गतिशीलता के लिए क्या शब्द है?",
        "options_en": ["Social Mobility", "Class Movement", "Status Change", "Position Shift"],
        "options_hi": ["सामाजिक गतिशीलता", "वर्ग आंदोलन", "स्थिति परिवर्तन", "पद परिवर्तन"],
        "answer_en": "Social Mobility",
        "answer_hi": "सामाजिक गतिशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the study of environmental economics called?",
        "question_hi": "पर्यावरणीय अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Environmental Economics", "Ecological Economics", "Green Economics", "Sustainable Economics"],
        "options_hi": ["पर्यावरणीय अर्थशास्त्र", "पारिस्थितिक अर्थशास्त्र", "हरित अर्थशास्त्र", "टिकाऊ अर्थशास्त्र"],
        "answer_en": "Environmental Economics",
        "answer_hi": "पर्यावरणीय अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the term for cultural diversity?",
        "question_hi": "सांस्कृतिक विविधता के लिए क्या शब्द है?",
        "options_en": ["Cultural Pluralism", "Cultural Diversity", "Multiculturalism", "Cultural Variety"],
        "options_hi": ["सांस्कृतिक बहुलवाद", "सांस्कृतिक विविधता", "बहुसंस्कृतिवाद", "सांस्कृतिक विविधता"],
        "answer_en": "Cultural Pluralism",
        "answer_hi": "सांस्कृतिक बहुलवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the study of health economics called?",
        "question_hi": "स्वास्थ्य अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Health Economics", "Medical Economics", "Healthcare Economics", "Wellness Economics"],
        "options_hi": ["स्वास्थ्य अर्थशास्त्र", "चिकित्सा अर्थशास्त्र", "स्वास्थ्य सेवा अर्थशास्त्र", "कल्याण अर्थशास्त्र"],
        "answer_en": "Health Economics",
        "answer_hi": "स्वास्थ्य अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the term for social institutions?",
        "question_hi": "सामाजिक संस्थाओं के लिए क्या शब्द है?",
        "options_en": ["Social Institutions", "Social Structures", "Social Organizations", "Social Systems"],
        "options_hi": ["सामाजिक संस्थाएं", "सामाजिक संरचनाएं", "सामाजिक संगठन", "सामाजिक प्रणालियां"],
        "answer_en": "Social Institutions",
        "answer_hi": "सामाजिक संस्थाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the study of education economics called?",
        "question_hi": "शिक्षा अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Economics of Education", "Educational Economics", "School Economics", "Learning Economics"],
        "options_hi": ["शिक्षा का अर्थशास्त्र", "शैक्षिक अर्थशास्त्र", "स्कूल अर्थशास्त्र", "सीखने का अर्थशास्त्र"],
        "answer_en": "Economics of Education",
        "answer_hi": "शिक्षा का अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the term for social change?",
        "question_hi": "सामाजिक परिवर्तन के लिए क्या शब्द है?",
        "options_en": ["Social Change", "Social Transformation", "Social Evolution", "Social Development"],
        "options_hi": ["सामाजिक परिवर्तन", "सामाजिक परिवर्तन", "सामाजिक विकास", "सामाजिक विकास"],
        "answer_en": "Social Change",
        "answer_hi": "सामाजिक परिवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the study of agricultural economics called?",
        "question_hi": "कृषि अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Agricultural Economics", "Farm Economics", "Rural Economics", "Agribusiness Economics"],
        "options_hi": ["कृषि अर्थशास्त्र", "किसान अर्थशास्त्र", "ग्रामीण अर्थशास्त्र", "कृषि व्यवसाय अर्थशास्त्र"],
        "answer_en": "Agricultural Economics",
        "answer_hi": "कृषि अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the term for social control?",
        "question_hi": "सामाजिक नियंत्रण के लिए क्या शब्द है?",
        "options_en": ["Social Control", "Social Regulation", "Social Discipline", "Social Order"],
        "options_hi": ["सामाजिक नियंत्रण", "सामाजिक विनियमन", "सामाजिक अनुशासन", "सामाजिक व्यवस्था"],
        "answer_en": "Social Control",
        "answer_hi": "सामाजिक नियंत्रण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the study of urban economics called?",
        "question_hi": "शहरी अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Urban Economics", "City Economics", "Metropolitan Economics", "Municipal Economics"],
        "options_hi": ["शहरी अर्थशास्त्र", "शहर अर्थशास्त्र", "महानगरीय अर्थशास्त्र", "नगरपालिका अर्थशास्त्र"],
        "answer_en": "Urban Economics",
        "answer_hi": "शहरी अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the term for social structure?",
        "question_hi": "सामाजिक संरचना के लिए क्या शब्द है?",
        "options_en": ["Social Structure", "Social Framework", "Social Organization", "Social System"],
        "options_hi": ["सामाजिक संरचना", "सामाजिक ढांचा", "सामाजिक संगठन", "सामाजिक प्रणाली"],
        "answer_en": "Social Structure",
        "answer_hi": "सामाजिक संरचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the study of regional economics called?",
        "question_hi": "क्षेत्रीय अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Regional Economics", "Area Economics", "Zone Economics", "Territorial Economics"],
        "options_hi": ["क्षेत्रीय अर्थशास्त्र", "क्षेत्र अर्थशास्त्र", "ज़ोन अर्थशास्त्र", "क्षेत्रीय अर्थशास्त्र"],
        "answer_en": "Regional Economics",
        "answer_hi": "क्षेत्रीय अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the term for social interaction?",
        "question_hi": "सामाजिक अंतक्रिया के लिए क्या शब्द है?",
        "options_en": ["Social Interaction", "Social Exchange", "Social Communication", "Social Engagement"],
        "options_hi": ["सामाजिक अंतक्रिया", "सामाजिक विनिमय", "सामाजिक संचार", "सामाजिक संलग्नता"],
        "answer_en": "Social Interaction",
        "answer_hi": "सामाजिक अंतक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the study of transportation economics called?",
        "question_hi": "परिवहन अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Transport Economics", "Transportation Economics", "Logistics Economics", "Mobility Economics"],
        "options_hi": ["परिवहन अर्थशास्त्र", "परिवहन अर्थशास्त्र", "रसद अर्थशास्त्र", "गतिशीलता अर्थशास्त्र"],
        "answer_en": "Transport Economics",
        "answer_hi": "परिवहन अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the term for social organization?",
        "question_hi": "सामाजिक संगठन के लिए क्या शब्द है?",
        "options_en": ["Social Organization", "Social Structure", "Social System", "Social Framework"],
        "options_hi": ["सामाजिक संगठन", "सामाजिक संरचना", "सामाजिक प्रणाली", "सामाजिक ढांचा"],
        "answer_en": "Social Organization",
        "answer_hi": "सामाजिक संगठन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the study of energy economics called?",
        "question_hi": "ऊर्जा अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Energy Economics", "Power Economics", "Fuel Economics", "Resource Economics"],
        "options_hi": ["ऊर्जा अर्थशास्त्र", "बिजली अर्थशास्त्र", "ईंधन अर्थशास्त्र", "संसाधन अर्थशास्त्र"],
        "answer_en": "Energy Economics",
        "answer_hi": "ऊर्जा अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the term for social system?",
        "question_hi": "सामाजिक प्रणाली के लिए क्या शब्द है?",
        "options_en": ["Social System", "Social Structure", "Social Organization", "Social Framework"],
        "options_hi": ["सामाजिक प्रणाली", "सामाजिक संरचना", "सामाजिक संगठन", "सामाजिक ढांचा"],
        "answer_en": "Social System",
        "answer_hi": "सामाजिक प्रणाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the study of tourism economics called?",
        "question_hi": "पर्यटन अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Tourism Economics", "Travel Economics", "Hospitality Economics", "Leisure Economics"],
        "options_hi": ["पर्यटन अर्थशास्त्र", "यात्रा अर्थशास्त्र", "आतिथ्य अर्थशास्त्र", "अवकाश अर्थशास्त्र"],
        "answer_en": "Tourism Economics",
        "answer_hi": "पर्यटन अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the term for social group?",
        "question_hi": "सामाजिक समूह के लिए क्या शब्द है?",
        "options_en": ["Social Group", "Social Category", "Social Collective", "Social Unit"],
        "options_hi": ["सामाजिक समूह", "सामाजिक श्रेणी", "सामाजिक सामूहिक", "सामाजिक इकाई"],
        "answer_en": "Social Group",
        "answer_hi": "सामाजिक समूह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the study of sports economics called?",
        "question_hi": "खेल अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Sports Economics", "Athletics Economics", "Games Economics", "Recreation Economics"],
        "options_hi": ["खेल अर्थशास्त्र", "एथलेटिक्स अर्थशास्त्र", "खेल अर्थशास्त्र", "मनोरंजन अर्थशास्त्र"],
        "answer_en": "Sports Economics",
        "answer_hi": "खेल अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the term for social category?",
        "question_hi": "सामाजिक श्रेणी के लिए क्या शब्द है?",
        "options_en": ["Social Category", "Social Group", "Social Class", "Social Status"],
        "options_hi": ["सामाजिक श्रेणी", "सामाजिक समूह", "सामाजिक वर्ग", "सामाजिक स्थिति"],
        "answer_en": "Social Category",
        "answer_hi": "सामाजिक श्रेणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the study of cultural economics called?",
        "question_hi": "सांस्कृतिक अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Cultural Economics", "Arts Economics", "Heritage Economics", "Creative Economics"],
        "options_hi": ["सांस्कृतिक अर्थशास्त्र", "कला अर्थशास्त्र", "विरासत अर्थशास्त्र", "रचनात्मक अर्थशास्त्र"],
        "answer_en": "Cultural Economics",
        "answer_hi": "सांस्कृतिक अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the term for social class?",
        "question_hi": "सामाजिक वर्ग के लिए क्या शब्द है?",
        "options_en": ["Social Class", "Social Stratum", "Social Category", "Social Group"],
        "options_hi": ["सामाजिक वर्ग", "सामाजिक स्तर", "सामाजिक श्रेणी", "सामाजिक समूह"],
        "answer_en": "Social Class",
        "answer_hi": "सामाजिक वर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the study of information economics called?",
        "question_hi": "सूचना अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Information Economics", "Knowledge Economics", "Data Economics", "Digital Economics"],
        "options_hi": ["सूचना अर्थशास्त्र", "ज्ञान अर्थशास्त्र", "डेटा अर्थशास्त्र", "डिजिटल अर्थशास्त्र"],
        "answer_en": "Information Economics",
        "answer_hi": "सूचना अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the term for social status?",
        "question_hi": "सामाजिक स्थिति के लिए क्या शब्द है?",
        "options_en": ["Social Status", "Social Position", "Social Standing", "Social Rank"],
        "options_hi": ["सामाजिक स्थिति", "सामाजिक पद", "सामाजिक प्रतिष्ठा", "सामाजिक रैंक"],
        "answer_en": "Social Status",
        "answer_hi": "सामाजिक स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the study of behavioral economics called?",
        "question_hi": "व्यवहारिक अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Behavioral Economics", "Psychological Economics", "Cognitive Economics", "Decision Economics"],
        "options_hi": ["व्यवहारिक अर्थशास्त्र", "मनोवैज्ञानिक अर्थशास्त्र", "संज्ञानात्मक अर्थशास्त्र", "निर्णय अर्थशास्त्र"],
        "answer_en": "Behavioral Economics",
        "answer_hi": "व्यवहारिक अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the term for social role?",
        "question_hi": "सामाजिक भूमिका के लिए क्या शब्द है?",
        "options_en": ["Social Role", "Social Function", "Social Position", "Social Duty"],
        "options_hi": ["सामाजिक भूमिका", "सामाजिक कार्य", "सामाजिक पद", "सामाजिक कर्तव्य"],
        "answer_en": "Social Role",
        "answer_hi": "सामाजिक भूमिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the study of institutional economics called?",
        "question_hi": "संस्थागत अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Institutional Economics", "Organizational Economics", "Structural Economics", "System Economics"],
        "options_hi": ["संस्थागत अर्थशास्त्र", "संगठनात्मक अर्थशास्त्र", "संरचनात्मक अर्थशास्त्र", "प्रणाली अर्थशास्त्र"],
        "answer_en": "Institutional Economics",
        "answer_hi": "संस्थागत अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the term for social function?",
        "question_hi": "सामाजिक कार्य के लिए क्या शब्द है?",
        "options_en": ["Social Function", "Social Role", "Social Purpose", "Social Task"],
        "options_hi": ["सामाजिक कार्य", "सामाजिक भूमिका", "सामाजिक उद्देश्य", "सामाजिक कार्य"],
        "answer_en": "Social Function",
        "answer_hi": "सामाजिक कार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the study of evolutionary economics called?",
        "question_hi": "विकासवादी अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Evolutionary Economics", "Developmental Economics", "Progressive Economics", "Adaptive Economics"],
        "options_hi": ["विकासवादी अर्थशास्त्र", "विकासात्मक अर्थशास्त्र", "प्रगतिशील अर्थशास्त्र", "अनुकूली अर्थशास्त्र"],
        "answer_en": "Evolutionary Economics",
        "answer_hi": "विकासवादी अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the term for social process?",
        "question_hi": "सामाजिक प्रक्रिया के लिए क्या शब्द है?",
        "options_en": ["Social Process", "Social Procedure", "Social Mechanism", "Social Operation"],
        "options_hi": ["सामाजिक प्रक्रिया", "सामाजिक प्रक्रिया", "सामाजिक तंत्र", "सामाजिक संचालन"],
        "answer_en": "Social Process",
        "answer_hi": "सामाजिक प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the study of feminist economics called?",
        "question_hi": "नारीवादी अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Feminist Economics", "Gender Economics", "Women's Economics", "Equality Economics"],
        "options_hi": ["नारीवादी अर्थशास्त्र", "लिंग अर्थशास्त्र", "महिला अर्थशास्त्र", "समानता अर्थशास्त्र"],
        "answer_en": "Feminist Economics",
        "answer_hi": "नारीवादी अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the term for social pattern?",
        "question_hi": "सामाजिक पैटर्न के लिए क्या शब्द है?",
        "options_en": ["Social Pattern", "Social Model", "Social Design", "Social Configuration"],
        "options_hi": ["सामाजिक पैटर्न", "सामाजिक मॉडल", "सामाजिक डिजाइन", "सामाजिक विन्यास"],
        "answer_en": "Social Pattern",
        "answer_hi": "सामाजिक पैटर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the study of Marxian economics called?",
        "question_hi": "मार्क्सवादी अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Marxian Economics", "Socialist Economics", "Communist Economics", "Radical Economics"],
        "options_hi": ["मार्क्सवादी अर्थशास्त्र", "समाजवादी अर्थशास्त्र", "साम्यवादी अर्थशास्त्र", "क्रांतिकारी अर्थशास्त्र"],
        "answer_en": "Marxian Economics",
        "answer_hi": "मार्क्सवादी अर्थशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the term for social network?",
        "question_hi": "सामाजिक नेटवर्क के लिए क्या शब्द है?",
        "options_en": ["Social Network", "Social Web", "Social Connection", "Social Link"],
        "options_hi": ["सामाजिक नेटवर्क", "सामाजिक जाल", "सामाजिक संबंध", "सामाजिक लिंक"],
        "answer_en": "Social Network",
        "answer_hi": "सामाजिक नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the study of Keynesian economics called?",
        "question_hi": "कीन्सवादी अर्थशास्त्र के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Keynesian Economics", "Demand-side Economics", "Fiscal Economics", "Macro Economics"],
        "options_hi": ["कीन्सवादी अर्थशास्त्र", "मांग-पक्ष अर्थशास्त्र", "राजकोषीय अर्थशास्त्र", "समष्टि अर्थशास्त्र"],
        "answer_en": "Keynesian Economics",
        "answer_hi": "कीन्सवादी अर्थशास्त्र",
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