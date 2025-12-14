const questions = [
    {
        "num": 1,
        "question_en": "Who is considered the father of modern economics?",
        "question_hi": "आधुनिक अर्थशास्त्र के जनक किसे माना जाता है?",
        "options_en": ["Adam Smith", "John Maynard Keynes", "Karl Marx", "David Ricardo"],
        "options_hi": ["एडम स्मिथ", "जॉन मेनार्ड कीन्स", "कार्ल मार्क्स", "डेविड रिकार्डो"],
        "answer_en": "Adam Smith",
        "answer_hi": "एडम स्मिथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which social science studies human behavior in groups?",
        "question_hi": "कौन सा सामाजिक विज्ञान समूहों में मानव व्यवहार का अध्ययन करता है?",
        "options_en": ["Sociology", "Psychology", "Anthropology", "Political Science"],
        "options_hi": ["समाजशास्त्र", "मनोविज्ञान", "मानवविज्ञान", "राजनीति विज्ञान"],
        "answer_en": "Sociology",
        "answer_hi": "समाजशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does GDP stand for in economics?",
        "question_hi": "अर्थशास्त्र में जीडीपी का क्या अर्थ है?",
        "options_en": ["Gross Domestic Product", "Gross Development Process", "General Domestic Product", "Government Domestic Policy"],
        "options_hi": ["सकल घरेलू उत्पाद", "सकल विकास प्रक्रिया", "सामान्य घरेलू उत्पाद", "सरकारी घरेलू नीति"],
        "answer_en": "Gross Domestic Product",
        "answer_hi": "सकल घरेलू उत्पाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which theory explains social change through class struggle?",
        "question_hi": "कौन सा सिद्धांत वर्ग संघर्ष के माध्यम से सामाजिक परिवर्तन की व्याख्या करता है?",
        "options_en": ["Marxism", "Functionalism", "Symbolic Interactionism", "Feminism"],
        "options_hi": ["मार्क्सवाद", "कार्यवाद", "प्रतीकात्मक अंतक्रियावाद", "नारीवाद"],
        "answer_en": "Marxism",
        "answer_hi": "मार्क्सवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the basic economic problem?",
        "question_hi": "मौलिक आर्थिक समस्या क्या है?",
        "options_en": ["Scarcity", "Unemployment", "Inflation", "Poverty"],
        "options_hi": ["दुर्लभता", "बेरोजगारी", "मुद्रास्फीति", "गरीबी"],
        "answer_en": "Scarcity",
        "answer_hi": "दुर्लभता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Who wrote 'The Wealth of Nations'?",
        "question_hi": "'द वेल्थ ऑफ नेशंस' किसने लिखी?",
        "options_en": ["Adam Smith", "Karl Marx", "John Keynes", "Milton Friedman"],
        "options_hi": ["एडम स्मिथ", "कार्ल मार्क्स", "जॉन कीन्स", "मिल्टन फ्रीडमैन"],
        "answer_en": "Adam Smith",
        "answer_hi": "एडम स्मिथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the study of population called?",
        "question_hi": "जनसंख्या के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Demography", "Sociology", "Geography", "Statistics"],
        "options_hi": ["जनसांख्यिकी", "समाजशास्त्र", "भूगोल", "सांख्यिकी"],
        "answer_en": "Demography",
        "answer_hi": "जनसांख्यिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which economic system is based on private ownership?",
        "question_hi": "कौन सी आर्थिक प्रणाली निजी स्वामित्व पर आधारित है?",
        "options_en": ["Capitalism", "Socialism", "Communism", "Mixed Economy"],
        "options_hi": ["पूंजीवाद", "समाजवाद", "साम्यवाद", "मिश्रित अर्थव्यवस्था"],
        "answer_en": "Capitalism",
        "answer_hi": "पूंजीवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is socialization in sociology?",
        "question_hi": "समाजशास्त्र में समाजीकरण क्या है?",
        "options_en": ["Learning social norms", "Economic development", "Political awareness", "Cultural change"],
        "options_hi": ["सामाजिक मानदंड सीखना", "आर्थिक विकास", "राजनीतिक जागरूकता", "सांस्कृतिक परिवर्तन"],
        "answer_en": "Learning social norms",
        "answer_hi": "सामाजिक मानदंड सीखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What measures price changes in an economy?",
        "question_hi": "कौन सा अर्थव्यवस्था में मूल्य परिवर्तनों को मापता है?",
        "options_en": ["Inflation rate", "GDP growth", "Unemployment rate", "Interest rate"],
        "options_hi": ["मुद्रास्फीति दर", "जीडीपी वृद्धि", "बेरोजगारी दर", "ब्याज दर"],
        "answer_en": "Inflation rate",
        "answer_hi": "मुद्रास्फीति दर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Who developed the theory of bureaucracy?",
        "question_hi": "नौकरशाही का सिद्धांत किसने विकसित किया?",
        "options_en": ["Max Weber", "Karl Marx", "Emile Durkheim", "Auguste Comte"],
        "options_hi": ["मैक्स वेबर", "कार्ल मार्क्स", "एमिल डर्कहेम", "ऑगस्ट कॉम्टे"],
        "answer_en": "Max Weber",
        "answer_hi": "मैक्स वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is opportunity cost in economics?",
        "question_hi": "अर्थशास्त्र में अवसर लागत क्या है?",
        "options_en": ["Next best alternative", "Total production cost", "Fixed cost", "Variable cost"],
        "options_hi": ["अगला सर्वोत्तम विकल्प", "कुल उत्पादन लागत", "स्थिर लागत", "परिवर्तनीय लागत"],
        "answer_en": "Next best alternative",
        "answer_hi": "अगला सर्वोत्तम विकल्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the study of ancient human societies called?",
        "question_hi": "प्राचीन मानव समाजों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Archaeology", "History", "Anthropology", "Paleontology"],
        "options_hi": ["पुरातत्व", "इतिहास", "मानवविज्ञान", "जीवाश्म विज्ञान"],
        "answer_en": "Archaeology",
        "answer_hi": "पुरातत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which organization controls monetary policy in India?",
        "question_hi": "भारत में मौद्रिक नीति को कौन सा संगठन नियंत्रित करता है?",
        "options_en": ["RBI", "SEBI", "Finance Ministry", "Planning Commission"],
        "options_hi": ["आरबीआई", "सेबी", "वित्त मंत्रालय", "योजना आयोग"],
        "answer_en": "RBI",
        "answer_hi": "आरबीआई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is cultural relativism?",
        "question_hi": "सांस्कृतिक सापेक्षवाद क्या है?",
        "options_en": ["Understanding cultures on their terms", "Judging other cultures", "Cultural superiority", "Cultural assimilation"],
        "options_hi": ["संस्कृतियों को उनके अपने संदर्भ में समझना", "अन्य संस्कृतियों का न्याय करना", "सांस्कृतिक श्रेष्ठता", "सांस्कृतिक आत्मसात्करण"],
        "answer_en": "Understanding cultures on their terms",
        "answer_hi": "संस्कृतियों को उनके अपने संदर्भ में समझना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is fiscal policy?",
        "question_hi": "राजकोषीय नीति क्या है?",
        "options_en": ["Government spending and taxation", "Money supply control", "Trade regulations", "Industrial policy"],
        "options_hi": ["सरकारी खर्च और कराधान", "मुद्रा आपूर्ति नियंत्रण", "व्यापार विनियम", "औद्योगिक नीति"],
        "answer_en": "Government spending and taxation",
        "answer_hi": "सरकारी खर्च और कराधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Who is known as the father of sociology?",
        "question_hi": "समाजशास्त्र के जनक के रूप में कौन जाने जाते हैं?",
        "options_en": ["Auguste Comte", "Karl Marx", "Max Weber", "Emile Durkheim"],
        "options_hi": ["ऑगस्ट कॉम्टे", "कार्ल मार्क्स", "मैक्स वेबर", "एमिल डर्कहेम"],
        "answer_en": "Auguste Comte",
        "answer_hi": "ऑगस्ट कॉम्टे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is demand and supply in economics?",
        "question_hi": "अर्थशास्त्र में मांग और आपूर्ति क्या है?",
        "options_en": ["Market forces determining price", "Government regulations", "Production methods", "Consumption patterns"],
        "options_hi": ["बाजार बल जो मूल्य निर्धारित करते हैं", "सरकारी विनियम", "उत्पादन विधियाँ", "खपत पैटर्न"],
        "answer_en": "Market forces determining price",
        "answer_hi": "बाजार बल जो मूल्य निर्धारित करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is social stratification?",
        "question_hi": "सामाजिक स्तरीकरण क्या है?",
        "options_en": ["Division of society into layers", "Social mobility", "Cultural diversity", "Economic development"],
        "options_hi": ["समाज को परतों में विभाजित करना", "सामाजिक गतिशीलता", "सांस्कृतिक विविधता", "आर्थिक विकास"],
        "answer_en": "Division of society into layers",
        "answer_hi": "समाज को परतों में विभाजित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is globalization in economics?",
        "question_hi": "अर्थशास्त्र में वैश्वीकरण क्या है?",
        "options_en": ["Worldwide economic integration", "Local trade", "National policies", "Regional development"],
        "options_hi": ["विश्वव्यापी आर्थिक एकीकरण", "स्थानीय व्यापार", "राष्ट्रीय नीतियाँ", "क्षेत्रीय विकास"],
        "answer_en": "Worldwide economic integration",
        "answer_hi": "विश्वव्यापी आर्थिक एकीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is ethnocentrism?",
        "question_hi": "नृजातीय केंद्रवाद क्या है?",
        "options_en": ["Judging others by one's own culture", "Cultural understanding", "Multiculturalism", "Cultural relativism"],
        "options_hi": ["दूसरों को अपनी संस्कृति से आंकना", "सांस्कृतिक समझ", "बहुसंस्कृतिवाद", "सांस्कृतिक सापेक्षवाद"],
        "answer_en": "Judging others by one's own culture",
        "answer_hi": "दूसरों को अपनी संस्कृति से आंकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is microeconomics?",
        "question_hi": "सूक्ष्म अर्थशास्त्र क्या है?",
        "options_en": ["Study of individual units", "Study of whole economy", "International economics", "Development economics"],
        "options_hi": ["व्यक्तिगत इकाइयों का अध्ययन", "संपूर्ण अर्थव्यवस्था का अध्ययन", "अंतर्राष्ट्रीय अर्थशास्त्र", "विकास अर्थशास्त्र"],
        "answer_en": "Study of individual units",
        "answer_hi": "व्यक्तिगत इकाइयों का अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is social mobility?",
        "question_hi": "सामाजिक गतिशीलता क्या है?",
        "options_en": ["Movement between social classes", "Cultural change", "Economic growth", "Political development"],
        "options_hi": ["सामाजिक वर्गों के बीच आवाजाही", "सांस्कृतिक परिवर्तन", "आर्थिक वृद्धि", "राजनीतिक विकास"],
        "answer_en": "Movement between social classes",
        "answer_hi": "सामाजिक वर्गों के बीच आवाजाही",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is monetary policy?",
        "question_hi": "मौद्रिक नीति क्या है?",
        "options_en": ["Control of money supply", "Government spending", "Tax policies", "Trade regulations"],
        "options_hi": ["मुद्रा आपूर्ति का नियंत्रण", "सरकारी खर्च", "कर नीतियाँ", "व्यापार विनियम"],
        "answer_en": "Control of money supply",
        "answer_hi": "मुद्रा आपूर्ति का नियंत्रण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is cultural diffusion?",
        "question_hi": "सांस्कृतिक प्रसार क्या है?",
        "options_en": ["Spread of cultural traits", "Cultural isolation", "Cultural preservation", "Cultural destruction"],
        "options_hi": ["सांस्कृतिक लक्षणों का प्रसार", "सांस्कृतिक अलगाव", "सांस्कृतिक संरक्षण", "सांस्कृतिक विनाश"],
        "answer_en": "Spread of cultural traits",
        "answer_hi": "सांस्कृतिक लक्षणों का प्रसार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is macroeconomics?",
        "question_hi": "समष्टि अर्थशास्त्र क्या है?",
        "options_en": ["Study of whole economy", "Study of firms", "Individual behavior", "Market analysis"],
        "options_hi": ["संपूर्ण अर्थव्यवस्था का अध्ययन", "फर्मों का अध्ययन", "व्यक्तिगत व्यवहार", "बाजार विश्लेषण"],
        "answer_en": "Study of whole economy",
        "answer_hi": "संपूर्ण अर्थव्यवस्था का अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is social institution?",
        "question_hi": "सामाजिक संस्था क्या है?",
        "options_en": ["Established patterns of behavior", "Temporary groups", "Individual actions", "Random events"],
        "options_hi": ["व्यवहार की स्थापित पद्धतियाँ", "अस्थायी समूह", "व्यक्तिगत कार्य", "यादृच्छिक घटनाएँ"],
        "answer_en": "Established patterns of behavior",
        "answer_hi": "व्यवहार की स्थापित पद्धतियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is inflation?",
        "question_hi": "मुद्रास्फीति क्या है?",
        "options_en": ["Rise in general price level", "Increase in production", "Economic growth", "Trade surplus"],
        "options_hi": ["सामान्य मूल्य स्तर में वृद्धि", "उत्पादन में वृद्धि", "आर्थिक वृद्धि", "व्यापार अधिशेष"],
        "answer_en": "Rise in general price level",
        "answer_hi": "सामान्य मूल्य स्तर में वृद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is kinship in anthropology?",
        "question_hi": "मानवविज्ञान में रिश्तेदारी क्या है?",
        "options_en": ["Family relationships", "Economic ties", "Political alliances", "Cultural practices"],
        "options_hi": ["पारिवारिक संबंध", "आर्थिक संबंध", "राजनीतिक गठबंधन", "सांस्कृतिक प्रथाएँ"],
        "answer_en": "Family relationships",
        "answer_hi": "पारिवारिक संबंध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is unemployment rate?",
        "question_hi": "बेरोजगारी दर क्या है?",
        "options_en": ["Percentage of workforce without jobs", "Economic growth rate", "Inflation rate", "Interest rate"],
        "options_hi": ["नौकरी के बिना कार्यबल का प्रतिशत", "आर्थिक वृद्धि दर", "मुद्रास्फीति दर", "ब्याज दर"],
        "answer_en": "Percentage of workforce without jobs",
        "answer_hi": "नौकरी के बिना कार्यबल का प्रतिशत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is structural functionalism?",
        "question_hi": "संरचनात्मक कार्यवाद क्या है?",
        "options_en": ["Society as interconnected parts", "Class conflict theory", "Individual interpretation", "Power dynamics"],
        "options_hi": ["आपस में जुड़े हुए हिस्सों के रूप में समाज", "वर्ग संघर्ष सिद्धांत", "व्यक्तिगत व्याख्या", "शक्ति गतिशीलता"],
        "answer_en": "Society as interconnected parts",
        "answer_hi": "आपस में जुड़े हुए हिस्सों के रूप में समाज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is GNP?",
        "question_hi": "जीएनपी क्या है?",
        "options_en": ["Gross National Product", "Gross National Progress", "General National Product", "Government National Policy"],
        "options_hi": ["सकल राष्ट्रीय उत्पाद", "सकल राष्ट्रीय प्रगति", "सामान्य राष्ट्रीय उत्पाद", "सरकारी राष्ट्रीय नीति"],
        "answer_en": "Gross National Product",
        "answer_hi": "सकल राष्ट्रीय उत्पाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is social change?",
        "question_hi": "सामाजिक परिवर्तन क्या है?",
        "options_en": ["Transformation of social structures", "Individual development", "Economic growth", "Political elections"],
        "options_hi": ["सामाजिक संरचनाओं का परिवर्तन", "व्यक्तिगत विकास", "आर्थिक वृद्धि", "राजनीतिक चुनाव"],
        "answer_en": "Transformation of social structures",
        "answer_hi": "सामाजिक संरचनाओं का परिवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is balance of payments?",
        "question_hi": "भुगतान संतुलन क्या है?",
        "options_en": ["Record of international transactions", "Domestic trade balance", "Government budget", "National debt"],
        "options_hi": ["अंतर्राष्ट्रीय लेन-देन का रिकॉर्ड", "घरेलू व्यापार संतुलन", "सरकारी बजट", "राष्ट्रीय ऋण"],
        "answer_en": "Record of international transactions",
        "answer_hi": "अंतर्राष्ट्रीय लेन-देन का रिकॉर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is social norm?",
        "question_hi": "सामाजिक मानदंड क्या है?",
        "options_en": ["Expected behavior in society", "Legal requirement", "Personal preference", "Cultural tradition"],
        "options_hi": ["समाज में अपेक्षित व्यवहार", "कानूनी आवश्यकता", "व्यक्तिगत पसंद", "सांस्कृतिक परंपरा"],
        "answer_en": "Expected behavior in society",
        "answer_hi": "समाज में अपेक्षित व्यवहार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is economic development?",
        "question_hi": "आर्थिक विकास क्या है?",
        "options_en": ["Improvement in living standards", "Increase in GDP", "Trade surplus", "Low inflation"],
        "options_hi": ["जीवन स्तर में सुधार", "जीडीपी में वृद्धि", "व्यापार अधिशेष", "कम मुद्रास्फीति"],
        "answer_en": "Improvement in living standards",
        "answer_hi": "जीवन स्तर में सुधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is urbanization?",
        "question_hi": "शहरीकरण क्या है?",
        "options_en": ["Growth of cities", "Rural development", "Industrialization", "Agricultural expansion"],
        "options_hi": ["शहरों का विकास", "ग्रामीण विकास", "औद्योगिकीकरण", "कृषि विस्तार"],
        "answer_en": "Growth of cities",
        "answer_hi": "शहरों का विकास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is fiscal deficit?",
        "question_hi": "राजकोषीय घाटा क्या है?",
        "options_en": ["Excess of expenditure over revenue", "Trade deficit", "Budget surplus", "National debt"],
        "options_hi": ["राजस्व पर व्यय का अधिशेष", "व्यापार घाटा", "बजट अधिशेष", "राष्ट्रीय ऋण"],
        "answer_en": "Excess of expenditure over revenue",
        "answer_hi": "राजस्व पर व्यय का अधिशेष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is cultural anthropology?",
        "question_hi": "सांस्कृतिक मानवविज्ञान क्या है?",
        "options_en": ["Study of human cultures", "Study of ancient remains", "Biological evolution", "Social structures"],
        "options_hi": ["मानव संस्कृतियों का अध्ययन", "प्राचीन अवशेषों का अध्ययन", "जैविक विकास", "सामाजिक संरचनाएं"],
        "answer_en": "Study of human cultures",
        "answer_hi": "मानव संस्कृतियों का अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is recession?",
        "question_hi": "मंदी क्या है?",
        "options_en": ["Economic decline for two quarters", "High inflation", "Trade surplus", "Budget deficit"],
        "options_hi": ["दो तिमाहियों के लिए आर्थिक गिरावट", "उच्च मुद्रास्फीति", "व्यापार अधिशेष", "बजट घाटा"],
        "answer_en": "Economic decline for two quarters",
        "answer_hi": "दो तिमाहियों के लिए आर्थिक गिरावट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is social structure?",
        "question_hi": "सामाजिक संरचना क्या है?",
        "options_en": ["Patterned social relationships", "Individual behavior", "Cultural values", "Economic systems"],
        "options_hi": ["पैटर्न वाले सामाजिक संबंध", "व्यक्तिगत व्यवहार", "सांस्कृतिक मूल्य", "आर्थिक प्रणालियाँ"],
        "answer_en": "Patterned social relationships",
        "answer_hi": "पैटर्न वाले सामाजिक संबंध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is human capital?",
        "question_hi": "मानव पूंजी क्या है?",
        "options_en": ["Skills and knowledge of workers", "Physical machinery", "Financial assets", "Natural resources"],
        "options_hi": ["श्रमिकों के कौशल और ज्ञान", "भौतिक मशीनरी", "वित्तीय संपत्ति", "प्राकृतिक संसाधन"],
        "answer_en": "Skills and knowledge of workers",
        "answer_hi": "श्रमिकों के कौशल और ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is social conflict theory?",
        "question_hi": "सामाजिक संघर्ष सिद्धांत क्या है?",
        "options_en": ["Focus on power struggles", "Social harmony", "Functional integration", "Cultural unity"],
        "options_hi": ["शक्ति संघर्ष पर ध्यान", "सामाजिक सद्भाव", "कार्यात्मक एकीकरण", "सांस्कृतिक एकता"],
        "answer_en": "Focus on power struggles",
        "answer_hi": "शक्ति संघर्ष पर ध्यान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is supply and demand curve?",
        "question_hi": "आपूर्ति और मांग वक्र क्या है?",
        "options_en": ["Graphical representation of market", "Production schedule", "Consumption pattern", "Price index"],
        "options_hi": ["बाजार का आलेखीय निरूपण", "उत्पादन अनुसूची", "खपत पैटर्न", "मूल्य सूचकांक"],
        "answer_en": "Graphical representation of market",
        "answer_hi": "बाजार का आलेखीय निरूपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is social movement?",
        "question_hi": "सामाजिक आंदोलन क्या है?",
        "options_en": ["Collective action for social change", "Individual protest", "Government policy", "Economic reform"],
        "options_hi": ["सामाजिक परिवर्तन के लिए सामूहिक कार्रवाई", "व्यक्तिगत विरोध", "सरकारी नीति", "आर्थिक सुधार"],
        "answer_en": "Collective action for social change",
        "answer_hi": "सामाजिक परिवर्तन के लिए सामूहिक कार्रवाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is comparative advantage?",
        "question_hi": "तुलनात्मक लाभ क्या है?",
        "options_en": ["Producing at lower opportunity cost", "Absolute production advantage", "Technological superiority", "Resource abundance"],
        "options_hi": ["कम अवसर लागत पर उत्पादन", "पूर्ण उत्पादन लाभ", "तकनीकी श्रेष्ठता", "संसाधन प्रचुरता"],
        "answer_en": "Producing at lower opportunity cost",
        "answer_hi": "कम अवसर लागत पर उत्पादन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is socialization agents?",
        "question_hi": "समाजीकरण एजेंट क्या हैं?",
        "options_en": ["Family, school, media", "Government, corporations", "Individuals, groups", "Markets, trade"],
        "options_hi": ["परिवार, स्कूल, मीडिया", "सरकार, निगम", "व्यक्ति, समूह", "बाजार, व्यापार"],
        "answer_en": "Family, school, media",
        "answer_hi": "परिवार, स्कूल, मीडिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is economic growth?",
        "question_hi": "आर्थिक वृद्धि क्या है?",
        "options_en": ["Increase in real GDP", "Price stability", "Full employment", "Trade balance"],
        "options_hi": ["वास्तविक जीडीपी में वृद्धि", "मूल्य स्थिरता", "पूर्ण रोजगार", "व्यापार संतुलन"],
        "answer_en": "Increase in real GDP",
        "answer_hi": "वास्तविक जीडीपी में वृद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is cultural capital?",
        "question_hi": "सांस्कृतिक पूंजी क्या है?",
        "options_en": ["Knowledge, skills, education", "Financial assets", "Physical property", "Natural resources"],
        "options_hi": ["ज्ञान, कौशल, शिक्षा", "वित्तीय संपत्ति", "भौतिक संपत्ति", "प्राकृतिक संसाधन"],
        "answer_en": "Knowledge, skills, education",
        "answer_hi": "ज्ञान, कौशल, शिक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is market economy?",
        "question_hi": "बाजार अर्थव्यवस्था क्या है?",
        "options_en": ["Decisions by supply and demand", "Government planning", "Mixed control", "Traditional systems"],
        "options_hi": ["आपूर्ति और मांग द्वारा निर्णय", "सरकारी योजना", "मिश्रित नियंत्रण", "पारंपरिक प्रणालियाँ"],
        "answer_en": "Decisions by supply and demand",
        "answer_hi": "आपूर्ति और मांग द्वारा निर्णय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is social class?",
        "question_hi": "सामाजिक वर्ग क्या है?",
        "options_en": ["Group with similar economic status", "Cultural group", "Political party", "Professional category"],
        "options_hi": ["समान आर्थिक स्थिति वाला समूह", "सांस्कृतिक समूह", "राजनीतिक दल", "पेशेवर श्रेणी"],
        "answer_en": "Group with similar economic status",
        "answer_hi": "समान आर्थिक स्थिति वाला समूह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is mixed economy?",
        "question_hi": "मिश्रित अर्थव्यवस्था क्या है?",
        "options_en": ["Combination of market and planning", "Pure capitalism", "Complete socialism", "Traditional economy"],
        "options_hi": ["बाजार और योजना का संयोजन", "शुद्ध पूंजीवाद", "पूर्ण समाजवाद", "पारंपरिक अर्थव्यवस्था"],
        "answer_en": "Combination of market and planning",
        "answer_hi": "बाजार और योजना का संयोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is social control?",
        "question_hi": "सामाजिक नियंत्रण क्या है?",
        "options_en": ["Mechanisms regulating behavior", "Government laws", "Economic policies", "Cultural traditions"],
        "options_hi": ["व्यवहार को विनियमित करने वाले तंत्र", "सरकारी कानून", "आर्थिक नीतियाँ", "सांस्कृतिक परंपराएँ"],
        "answer_en": "Mechanisms regulating behavior",
        "answer_hi": "व्यवहार को विनियमित करने वाले तंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is poverty line?",
        "question_hi": "गरीबी रेखा क्या है?",
        "options_en": ["Minimum income for basic needs", "Average income level", "Wealth threshold", "Middle class income"],
        "options_hi": ["बुनियादी जरूरतों के लिए न्यूनतम आय", "औसत आय स्तर", "धन सीमा", "मध्यम वर्ग की आय"],
        "answer_en": "Minimum income for basic needs",
        "answer_hi": "बुनियादी जरूरतों के लिए न्यूनतम आय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is cultural lag?",
        "question_hi": "सांस्कृतिक विलंब क्या है?",
        "options_en": ["Culture adjusting to technology", "Technological delay", "Social regression", "Economic slowdown"],
        "options_hi": ["प्रौद्योगिकी के अनुकूल संस्कृति", "तकनीकी विलंब", "सामाजिक प्रतिगमन", "आर्थिक मंदी"],
        "answer_en": "Culture adjusting to technology",
        "answer_hi": "प्रौद्योगिकी के अनुकूल संस्कृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is perfect competition?",
        "question_hi": "पूर्ण प्रतिस्पर्धा क्या है?",
        "options_en": ["Many small firms, identical products", "Few large firms", "One dominant firm", "Government monopoly"],
        "options_hi": ["कई छोटी फर्में, समान उत्पाद", "कुछ बड़ी फर्में", "एक प्रमुख फर्म", "सरकारी एकाधिकार"],
        "answer_en": "Many small firms, identical products",
        "answer_hi": "कई छोटी फर्में, समान उत्पाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is social inequality?",
        "question_hi": "सामाजिक असमानता क्या है?",
        "options_en": ["Unequal distribution of resources", "Different cultures", "Varied traditions", "Diverse opinions"],
        "options_hi": ["संसाधनों का असमान वितरण", "विभिन्न संस्कृतियाँ", "विविध परंपराएँ", "विविध विचार"],
        "answer_en": "Unequal distribution of resources",
        "answer_hi": "संसाधनों का असमान वितरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is monopoly?",
        "question_hi": "एकाधिकार क्या है?",
        "options_en": ["Single seller in market", "Many competitors", "Government control", "International trade"],
        "options_hi": ["बाजार में एक विक्रेता", "कई प्रतिस्पर्धी", "सरकारी नियंत्रण", "अंतर्राष्ट्रीय व्यापार"],
        "answer_en": "Single seller in market",
        "answer_hi": "बाजार में एक विक्रेता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is gender socialization?",
        "question_hi": "लैंगिक समाजीकरण क्या है?",
        "options_en": ["Learning gender roles", "Biological differences", "Political rights", "Economic opportunities"],
        "options_hi": ["लिंग भूमिकाएँ सीखना", "जैविक अंतर", "राजनीतिक अधिकार", "आर्थिक अवसर"],
        "answer_en": "Learning gender roles",
        "answer_hi": "लिंग भूमिकाएँ सीखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is economic system?",
        "question_hi": "आर्थिक प्रणाली क्या है?",
        "options_en": ["Means of production distribution", "Government structure", "Cultural framework", "Social organization"],
        "options_hi": ["उत्पादन वितरण के साधन", "सरकारी ढांचा", "सांस्कृतिक ढांचा", "सामाजिक संगठन"],
        "answer_en": "Means of production distribution",
        "answer_hi": "उत्पादन वितरण के साधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is social identity?",
        "question_hi": "सामाजिक पहचान क्या है?",
        "options_en": ["Self-concept based on group membership", "Personal characteristics", "Individual achievements", "Biological traits"],
        "options_hi": ["समूह सदस्यता पर आधारित आत्म-अवधारणा", "व्यक्तिगत विशेषताएँ", "व्यक्तिगत उपलब्धियाँ", "जैविक लक्षण"],
        "answer_en": "Self-concept based on group membership",
        "answer_hi": "समूह सदस्यता पर आधारित आत्म-अवधारणा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is foreign exchange?",
        "question_hi": "विदेशी मुद्रा क्या है?",
        "options_en": ["Trading different currencies", "International trade", "Export-import", "Global investment"],
        "options_hi": ["विभिन्न मुद्राओं का व्यापार", "अंतर्राष्ट्रीय व्यापार", "निर्यात-आयात", "वैश्विक निवेश"],
        "answer_en": "Trading different currencies",
        "answer_hi": "विभिन्न मुद्राओं का व्यापार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is social network?",
        "question_hi": "सामाजिक नेटवर्क क्या है?",
        "options_en": ["Web of social relationships", "Online platforms", "Communication systems", "Information networks"],
        "options_hi": ["सामाजिक संबंधों का जाल", "ऑनलाइन प्लेटफॉर्म", "संचार प्रणाली", "सूचना नेटवर्क"],
        "answer_en": "Web of social relationships",
        "answer_hi": "सामाजिक संबंधों का जाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is economic policy?",
        "question_hi": "आर्थिक नीति क्या है?",
        "options_en": ["Government actions affecting economy", "Business strategies", "Market trends", "Consumer behavior"],
        "options_hi": ["अर्थव्यवस्था को प्रभावित करने वाली सरकारी कार्रवाई", "व्यापार रणनीतियाँ", "बाजार के रुझान", "उपभोक्ता व्यवहार"],
        "answer_en": "Government actions affecting economy",
        "answer_hi": "अर्थव्यवस्था को प्रभावित करने वाली सरकारी कार्रवाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is cultural diversity?",
        "question_hi": "सांस्कृतिक विविधता क्या है?",
        "options_en": ["Variety of cultural expressions", "Uniform culture", "Dominant culture", "Traditional culture"],
        "options_hi": ["सांस्कृतिक अभिव्यक्तियों की विविधता", "एकरूप संस्कृति", "प्रमुख संस्कृति", "पारंपरिक संस्कृति"],
        "answer_en": "Variety of cultural expressions",
        "answer_hi": "सांस्कृतिक अभिव्यक्तियों की विविधता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is stock market?",
        "question_hi": "शेयर बाजार क्या है?",
        "options_en": ["Trading company shares", "Commodity exchange", "Currency market", "Bond market"],
        "options_hi": ["कंपनी शेयरों का व्यापार", "कमोडिटी एक्सचेंज", "मुद्रा बाजार", "बॉन्ड बाजार"],
        "answer_en": "Trading company shares",
        "answer_hi": "कंपनी शेयरों का व्यापार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is social research?",
        "question_hi": "सामाजिक शोध क्या है?",
        "options_en": ["Systematic study of society", "Casual observation", "Personal experience", "Traditional knowledge"],
        "options_hi": ["समाज का व्यवस्थित अध्ययन", "आकस्मिक अवलोकन", "व्यक्तिगत अनुभव", "पारंपरिक ज्ञान"],
        "answer_en": "Systematic study of society",
        "answer_hi": "समाज का व्यवस्थित अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is inflation targeting?",
        "question_hi": "मुद्रास्फीति लक्ष्यीकरण क्या है?",
        "options_en": ["Central bank policy to control inflation", "Price fixing", "Wage control", "Interest rate fixing"],
        "options_hi": ["मुद्रास्फीति को नियंत्रित करने की केंद्रीय बैंक नीति", "मूल्य निर्धारण", "मजदूरी नियंत्रण", "ब्याज दर निर्धारण"],
        "answer_en": "Central bank policy to control inflation",
        "answer_hi": "मुद्रास्फीति को नियंत्रित करने की केंद्रीय बैंक नीति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is social psychology?",
        "question_hi": "सामाजिक मनोविज्ञान क्या है?",
        "options_en": ["Study of individual in social context", "Group behavior only", "Individual psychology", "Cultural studies"],
        "options_hi": ["सामाजिक संदर्भ में व्यक्ति का अध्ययन", "केवल समूह व्यवहार", "व्यक्तिगत मनोविज्ञान", "सांस्कृतिक अध्ययन"],
        "answer_en": "Study of individual in social context",
        "answer_hi": "सामाजिक संदर्भ में व्यक्ति का अध्ययन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is economic indicator?",
        "question_hi": "आर्थिक सूचक क्या है?",
        "options_en": ["Statistics measuring economic performance", "Government reports", "Business plans", "Market predictions"],
        "options_hi": ["आर्थिक प्रदर्शन को मापने वाले आँकड़े", "सरकारी रिपोर्ट", "व्यापार योजनाएँ", "बाजार की भविष्यवाणियाँ"],
        "answer_en": "Statistics measuring economic performance",
        "answer_hi": "आर्थिक प्रदर्शन को मापने वाले आँकड़े",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is social construction?",
        "question_hi": "सामाजिक निर्माण क्या है?",
        "options_en": ["Reality created through social interaction", "Biological reality", "Physical reality", "Individual perception"],
        "options_hi": ["सामाजिक अंतक्रिया के माध्यम से निर्मित वास्तविकता", "जैविक वास्तविकता", "भौतिक वास्तविकता", "व्यक्तिगत धारणा"],
        "answer_en": "Reality created through social interaction",
        "answer_hi": "सामाजिक अंतक्रिया के माध्यम से निर्मित वास्तविकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is trade deficit?",
        "question_hi": "व्यापार घाटा क्या है?",
        "options_en": ["Imports exceed exports", "Exports exceed imports", "Balanced trade", "No international trade"],
        "options_hi": ["आयात निर्यात से अधिक", "निर्यात आयात से अधिक", "संतुलित व्यापार", "कोई अंतर्राष्ट्रीय व्यापार नहीं"],
        "answer_en": "Imports exceed exports",
        "answer_hi": "आयात निर्यात से अधिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is social theory?",
        "question_hi": "सामाजिक सिद्धांत क्या है?",
        "options_en": ["Framework for understanding society", "Political ideology", "Economic model", "Cultural belief"],
        "options_hi": ["समाज को समझने के लिए ढांचा", "राजनीतिक विचारधारा", "आर्थिक मॉडल", "सांस्कृतिक विश्वास"],
        "answer_en": "Framework for understanding society",
        "answer_hi": "समाज को समझने के लिए ढांचा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is consumer price index?",
        "question_hi": "उपभोक्ता मूल्य सूचकांक क्या है?",
        "options_en": ["Measure of price changes for consumers", "Producer prices", "Wholesale prices", "Export prices"],
        "options_hi": ["उपभोक्ताओं के लिए मूल्य परिवर्तनों का माप", "उत्पादक मूल्य", "थोक मूल्य", "निर्यात मूल्य"],
        "answer_en": "Measure of price changes for consumers",
        "answer_hi": "उपभोक्ताओं के लिए मूल्य परिवर्तनों का माप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is social order?",
        "question_hi": "सामाजिक व्यवस्था क्या है?",
        "options_en": ["Stability and predictability in society", "Chaos and disorder", "Constant change", "Revolutionary state"],
        "options_hi": ["समाज में स्थिरता और पूर्वानुमेयता", "अराजकता और अव्यवस्था", "निरंतर परिवर्तन", "क्रांतिकारी स्थिति"],
        "answer_en": "Stability and predictability in society",
        "answer_hi": "समाज में स्थिरता और पूर्वानुमेयता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is economic model?",
        "question_hi": "आर्थिक मॉडल क्या है?",
        "options_en": ["Simplified representation of economy", "Real economy", "Business plan", "Government policy"],
        "options_hi": ["अर्थव्यवस्था का सरलीकृत प्रतिनिधित्व", "वास्तविक अर्थव्यवस्था", "व्यापार योजना", "सरकारी नीति"],
        "answer_en": "Simplified representation of economy",
        "answer_hi": "अर्थव्यवस्था का सरलीकृत प्रतिनिधित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is cultural hegemony?",
        "question_hi": "सांस्कृतिक प्रभुत्व क्या है?",
        "options_en": ["Dominant culture imposing values", "Cultural equality", "Cultural diversity", "Cultural isolation"],
        "options_hi": ["प्रमुख संस्कृति मूल्यों को थोपती है", "सांस्कृतिक समानता", "सांस्कृतिक विविधता", "सांस्कृतिक अलगाव"],
        "answer_en": "Dominant culture imposing values",
        "answer_hi": "प्रमुख संस्कृति मूल्यों को थोपती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is economic cycle?",
        "question_hi": "आर्थिक चक्र क्या है?",
        "options_en": ["Boom and bust pattern", "Linear growth", "Stable growth", "Random fluctuations"],
        "options_hi": ["उछाल और मंदी का पैटर्न", "रैखिक वृद्धि", "स्थिर वृद्धि", "यादृच्छिक उतार-चढ़ाव"],
        "answer_en": "Boom and bust pattern",
        "answer_hi": "उछाल और मंदी का पैटर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is social justice?",
        "question_hi": "सामाजिक न्याय क्या है?",
        "options_en": ["Fair distribution of resources", "Legal justice", "Economic growth", "Political freedom"],
        "options_hi": ["संसाधनों का न्यायपूर्ण वितरण", "कानूनी न्याय", "आर्थिक वृद्धि", "राजनीतिक स्वतंत्रता"],
        "answer_en": "Fair distribution of resources",
        "answer_hi": "संसाधनों का न्यायपूर्ण वितरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is market failure?",
        "question_hi": "बाजार विफलता क्या है?",
        "options_en": ["Inefficient resource allocation", "Successful market", "Perfect competition", "Government success"],
        "options_hi": ["अक्षम संसाधन आवंटन", "सफल बाजार", "पूर्ण प्रतिस्पर्धा", "सरकारी सफलता"],
        "answer_en": "Inefficient resource allocation",
        "answer_hi": "अक्षम संसाधन आवंटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is social reproduction?",
        "question_hi": "सामाजिक प्रजनन क्या है?",
        "options_en": ["Transmission of social inequality", "Biological reproduction", "Economic production", "Cultural creation"],
        "options_hi": ["सामाजिक असमानता का संचरण", "जैविक प्रजनन", "आर्थिक उत्पादन", "सांस्कृतिक सृजन"],
        "answer_en": "Transmission of social inequality",
        "answer_hi": "सामाजिक असमानता का संचरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is public goods?",
        "question_hi": "सार्वजनिक वस्तुएं क्या हैं?",
        "options_en": ["Non-excludable, non-rivalrous goods", "Private goods", "Common goods", "Club goods"],
        "options_hi": ["गैर-बहिष्करणीय, गैर-प्रतिद्वंद्वी वस्तुएं", "निजी वस्तुएं", "सामान्य वस्तुएं", "क्लब वस्तुएं"],
        "answer_en": "Non-excludable, non-rivalrous goods",
        "answer_hi": "गैर-बहिष्करणीय, गैर-प्रतिद्वंद्वी वस्तुएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is social fact?",
        "question_hi": "सामाजिक तथ्य क्या है?",
        "options_en": ["External constraints on individuals", "Personal opinions", "Biological facts", "Psychological facts"],
        "options_hi": ["व्यक्तियों पर बाहरी बाधाएं", "व्यक्तिगत राय", "जैविक तथ्य", "मनोवैज्ञानिक तथ्य"],
        "answer_en": "External constraints on individuals",
        "answer_hi": "व्यक्तियों पर बाहरी बाधाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is economic liberalization?",
        "question_hi": "आर्थिक उदारीकरण क्या है?",
        "options_en": ["Reducing government controls", "Increasing regulations", "State control", "Protectionism"],
        "options_hi": ["सरकारी नियंत्रण कम करना", "विनियम बढ़ाना", "राज्य नियंत्रण", "संरक्षणवाद"],
        "answer_en": "Reducing government controls",
        "answer_hi": "सरकारी नियंत्रण कम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is cultural universal?",
        "question_hi": "सांस्कृतिक सार्वभौमिक क्या है?",
        "options_en": ["Traits found in all cultures", "Unique cultural practices", "Regional customs", "Local traditions"],
        "options_hi": ["सभी संस्कृतियों में पाए जाने वाले लक्षण", "अद्वितीय सांस्कृतिक प्रथाएँ", "क्षेत्रीय रीति-रिवाज", "स्थानीय परंपराएँ"],
        "answer_en": "Traits found in all cultures",
        "answer_hi": "सभी संस्कृतियों में पाए जाने वाले लक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is fiscal stimulus?",
        "question_hi": "राजकोषीय प्रोत्साहन क्या है?",
        "options_en": ["Government spending to boost economy", "Tax increases", "Spending cuts", "Monetary tightening"],
        "options_hi": ["अर्थव्यवस्था को बढ़ावा देने के लिए सरकारी खर्च", "कर वृद्धि", "खर्च में कटौती", "मौद्रिक सख्ती"],
        "answer_en": "Government spending to boost economy",
        "answer_hi": "अर्थव्यवस्था को बढ़ावा देने के लिए सरकारी खर्च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is social capital?",
        "question_hi": "सामाजिक पूंजी क्या है?",
        "options_en": ["Networks and relationships", "Financial assets", "Physical capital", "Human capital"],
        "options_hi": ["नेटवर्क और रिश्ते", "वित्तीय संपत्ति", "भौतिक पूंजी", "मानव पूंजी"],
        "answer_en": "Networks and relationships",
        "answer_hi": "नेटवर्क और रिश्ते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is trade liberalization?",
        "question_hi": "व्यापार उदारीकरण क्या है?",
        "options_en": ["Reducing trade barriers", "Increasing tariffs", "Trade restrictions", "Protectionist policies"],
        "options_hi": ["व्यापार बाधाओं को कम करना", "टैरिफ बढ़ाना", "व्यापार प्रतिबंध", "संरक्षणवादी नीतियाँ"],
        "answer_en": "Reducing trade barriers",
        "answer_hi": "व्यापार बाधाओं को कम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is social construction of reality?",
        "question_hi": "वास्तविकता का सामाजिक निर्माण क्या है?",
        "options_en": ["Society creates shared meanings", "Objective reality", "Individual perception", "Biological reality"],
        "options_hi": ["समाज साझा अर्थ बनाता है", "वस्तुनिष्ठ वास्तविकता", "व्यक्तिगत धारणा", "जैविक वास्तविकता"],
        "answer_en": "Society creates shared meanings",
        "answer_hi": "समाज साझा अर्थ बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is economic inequality?",
        "question_hi": "आर्थिक असमानता क्या है?",
        "options_en": ["Unequal distribution of wealth", "Equal opportunities", "Fair competition", "Balanced growth"],
        "options_hi": ["धन का असमान वितरण", "समान अवसर", "निष्पक्ष प्रतिस्पर्धा", "संतुलित विकास"],
        "answer_en": "Unequal distribution of wealth",
        "answer_hi": "धन का असमान वितरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is cultural imperialism?",
        "question_hi": "सांस्कृतिक साम्राज्यवाद क्या है?",
        "options_en": ["Dominant culture overpowering others", "Cultural exchange", "Mutual influence", "Cultural diversity"],
        "options_hi": ["प्रमुख संस्कृति दूसरों पर हावी हो रही है", "सांस्कृतिक आदान-प्रदान", "आपसी प्रभाव", "सांस्कृतिक विविधता"],
        "answer_en": "Dominant culture overpowering others",
        "answer_hi": "प्रमुख संस्कृति दूसरों पर हावी हो रही है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is sustainable development?",
        "question_hi": "सतत विकास क्या है?",
        "options_en": ["Development meeting present needs without compromising future", "Rapid industrialization", "Maximum growth", "Resource exploitation"],
        "options_hi": ["भविष्य से समझौता किए बिना वर्तमान जरूरतों को पूरा करने वाला विकास", "तेजी से औद्योगिकीकरण", "अधिकतम वृद्धि", "संसाधन शोषण"],
        "answer_en": "Development meeting present needs without compromising future",
        "answer_hi": "भविष्य से समझौता किए बिना वर्तमान जरूरतों को पूरा करने वाला विकास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is social cohesion?",
        "question_hi": "सामाजिक समावेश क्या है?",
        "options_en": ["Bonds holding society together", "Social conflict", "Individual isolation", "Cultural division"],
        "options_hi": ["समाज को एक साथ बांधने वाले बंधन", "सामाजिक संघर्ष", "व्यक्तिगत अलगाव", "सांस्कृतिक विभाजन"],
        "answer_en": "Bonds holding society together",
        "answer_hi": "समाज को एक साथ बांधने वाले बंधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is human development index?",
        "question_hi": "मानव विकास सूचकांक क्या है?",
        "options_en": ["Measure of life expectancy, education, income", "Economic growth rate", "GDP per capita", "Poverty rate"],
        "options_hi": ["जीवन प्रत्याशा, शिक्षा, आय का माप", "आर्थिक वृद्धि दर", "प्रति व्यक्ति जीडीपी", "गरीबी दर"],
        "answer_en": "Measure of life expectancy, education, income",
        "answer_hi": "जीवन प्रत्याशा, शिक्षा, आय का माप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is social exclusion?",
        "question_hi": "सामाजिक बहिष्कार क्या है?",
        "options_en": ["Marginalization from society", "Social inclusion", "Economic participation", "Cultural integration"],
        "options_hi": ["समाज से हाशियाकरण", "सामाजिक समावेश", "आर्थिक भागीदारी", "सांस्कृतिक एकीकरण"],
        "answer_en": "Marginalization from society",
        "answer_hi": "समाज से हाशियाकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is green economy?",
        "question_hi": "हरित अर्थव्यवस्था क्या है?",
        "options_en": ["Economy reducing environmental risks", "Traditional economy", "Industrial economy", "Service economy"],
        "options_hi": ["पर्यावरणीय जोखिम कम करने वाली अर्थव्यवस्था", "पारंपरिक अर्थव्यवस्था", "औद्योगिक अर्थव्यवस्था", "सेवा अर्थव्यवस्था"],
        "answer_en": "Economy reducing environmental risks",
        "answer_hi": "पर्यावरणीय जोखिम कम करने वाली अर्थव्यवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is social paradigm?",
        "question_hi": "सामाजिक प्रतिमान क्या है?",
        "options_en": ["Framework for viewing society", "Individual perspective", "Cultural viewpoint", "Economic model"],
        "options_hi": ["समाज को देखने के लिए ढांचा", "व्यक्तिगत परिप्रेक्ष्य", "सांस्कृतिक दृष्टिकोण", "आर्थिक मॉडल"],
        "answer_en": "Framework for viewing society",
        "answer_hi": "समाज को देखने के लिए ढांचा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is inclusive growth?",
        "question_hi": "समावेशी विकास क्या है?",
        "options_en": ["Growth benefiting all sections", "Rapid growth", "Unequal growth", "Export-led growth"],
        "options_hi": ["सभी वर्गों को लाभ पहुंचाने वाली वृद्धि", "तेजी से वृद्धि", "असमान वृद्धि", "निर्यात-आधारित वृद्धि"],
        "answer_en": "Growth benefiting all sections",
        "answer_hi": "सभी वर्गों को लाभ पहुंचाने वाली वृद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is digital divide?",
        "question_hi": "डिजिटल विभाजन क्या है?",
        "options_en": ["Gap in access to technology", "Technological advancement", "Digital literacy", "Internet availability"],
        "options_hi": ["प्रौद्योगिकी तक पहुंच में अंतर", "तकनीकी उन्नति", "डिजिटल साक्षरता", "इंटरनेट की उपलब्धता"],
        "answer_en": "Gap in access to technology",
        "answer_hi": "प्रौद्योगिकी तक पहुंच में अंतर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is behavioral economics?",
        "question_hi": "व्यवहारिक अर्थशास्त्र क्या है?",
        "options_en": ["Psychology in economic decisions", "Traditional economics", "Mathematical economics", "Classical economics"],
        "options_hi": ["आर्थिक निर्णयों में मनोविज्ञान", "पारंपरिक अर्थशास्त्र", "गणितीय अर्थशास्त्र", "शास्त्रीय अर्थशास्त्र"],
        "answer_en": "Psychology in economic decisions",
        "answer_hi": "आर्थिक निर्णयों में मनोविज्ञान",
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