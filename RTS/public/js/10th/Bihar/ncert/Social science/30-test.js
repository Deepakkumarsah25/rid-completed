const questions = [
    {
        "num": 1,
        "question_en": "What is the supreme law of the land in most democratic countries?",
        "question_hi": "अधिकांश लोकतांत्रिक देशों में देश का सर्वोच्च कानून क्या है?",
        "options_en": ["Constitution", "Parliamentary Acts", "Executive Orders", "Judicial Decisions"],
        "options_hi": ["संविधान", "संसदीय अधिनियम", "कार्यकारी आदेश", "न्यायिक निर्णय"],
        "answer_en": "Constitution",
        "answer_hi": "संविधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which branch of government is responsible for making laws?",
        "question_hi": "सरकार की कौन सी शाखा कानून बनाने के लिए जिम्मेदार है?",
        "options_en": ["Legislative", "Executive", "Judicial", "Administrative"],
        "options_hi": ["विधायी", "कार्यपालिका", "न्यायपालिका", "प्रशासनिक"],
        "answer_en": "Legislative",
        "answer_hi": "विधायी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What system of government has a king or queen as head of state?",
        "question_hi": "सरकार की कौन सी प्रणाली में राजा या रानी राज्य के प्रमुख होते हैं?",
        "options_en": ["Monarchy", "Republic", "Democracy", "Dictatorship"],
        "options_hi": ["राजतंत्र", "गणराज्य", "लोकतंत्र", "तानाशाही"],
        "answer_en": "Monarchy",
        "answer_hi": "राजतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What document guarantees fundamental rights to citizens?",
        "question_hi": "कौन सा दस्तावेज नागरिकों को मौलिक अधिकारों की गारंटी देता है?",
        "options_en": ["Bill of Rights", "Constitution", "Charter", "All of these"],
        "options_hi": ["अधिकार विधेयक", "संविधान", "चार्टर", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which political system has government control of all resources?",
        "question_hi": "कौन सी राजनीतिक प्रणाली में सभी संसाधनों पर सरकारी नियंत्रण होता है?",
        "options_en": ["Communism", "Socialism", "Capitalism", "Federalism"],
        "options_hi": ["साम्यवाद", "समाजवाद", "पूंजीवाद", "संघवाद"],
        "answer_en": "Communism",
        "answer_hi": "साम्यवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the principle of separating government powers called?",
        "question_hi": "सरकारी शक्तियों को अलग करने के सिद्धांत को क्या कहा जाता है?",
        "options_en": ["Separation of Powers", "Checks and Balances", "Federalism", "Division of Authority"],
        "options_hi": ["शक्ति पृथक्करण", "नियंत्रण और संतुलन", "संघवाद", "प्राधिकार विभाजन"],
        "answer_en": "Separation of Powers",
        "answer_hi": "शक्ति पृथक्करण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What type of democracy do citizens vote directly on laws?",
        "question_hi": "किस प्रकार के लोकतंत्र में नागरिक सीधे कानूनों पर वोट करते हैं?",
        "options_en": ["Direct Democracy", "Representative Democracy", "Parliamentary Democracy", "Presidential Democracy"],
        "options_hi": ["प्रत्यक्ष लोकतंत्र", "प्रतिनिधि लोकतंत्र", "संसदीय लोकतंत्र", "राष्ट्रपति लोकतंत्र"],
        "answer_en": "Direct Democracy",
        "answer_hi": "प्रत्यक्ष लोकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What government system divides power between central and regional governments?",
        "question_hi": "कौन सी सरकारी प्रणाली केंद्र और क्षेत्रीय सरकारों के बीच शक्ति विभाजित करती है?",
        "options_en": ["Federalism", "Unitary System", "Confederation", "Centralized System"],
        "options_hi": ["संघवाद", "एकात्मक प्रणाली", "संघ", "केंद्रीकृत प्रणाली"],
        "answer_en": "Federalism",
        "answer_hi": "संघवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the highest court in most judicial systems?",
        "question_hi": "अधिकांश न्यायिक प्रणालियों में सर्वोच्च न्यायालय कौन सा है?",
        "options_en": ["Supreme Court", "High Court", "District Court", "Appellate Court"],
        "options_hi": ["सर्वोच्च न्यायालय", "उच्च न्यायालय", "जिला न्यायालय", "अपीलीय न्यायालय"],
        "answer_en": "Supreme Court",
        "answer_hi": "सर्वोच्च न्यायालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What document outlines government structure and citizen rights?",
        "question_hi": "कौन सा दस्तावेज सरकारी संरचना और नागरिक अधिकारों को रेखांकित करता है?",
        "options_en": ["Constitution", "Declaration of Independence", "Government Manual", "Legal Code"],
        "options_hi": ["संविधान", "स्वतंत्रता घोषणापत्र", "सरकारी मैनुअल", "कानूनी संहिता"],
        "answer_en": "Constitution",
        "answer_hi": "संविधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which political ideology emphasizes individual freedom and free markets?",
        "question_hi": "कौन सी राजनीतिक विचारधारा व्यक्तिगत स्वतंत्रता और मुक्त बाजार पर जोर देती है?",
        "options_en": ["Liberalism", "Conservatism", "Socialism", "Communism"],
        "options_hi": ["उदारवाद", "रूढ़िवाद", "समाजवाद", "साम्यवाद"],
        "answer_en": "Liberalism",
        "answer_hi": "उदारवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the process of amending a constitution called?",
        "question_hi": "संविधान में संशोधन की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Constitutional Amendment", "Legal Revision", "Government Change", "Policy Update"],
        "options_hi": ["संवैधानिक संशोधन", "कानूनी संशोधन", "सरकारी परिवर्तन", "नीति अद्यतन"],
        "answer_en": "Constitutional Amendment",
        "answer_hi": "संवैधानिक संशोधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which government branch enforces laws?",
        "question_hi": "सरकार की कौन सी शाखा कानूनों को लागू करती है?",
        "options_en": ["Executive", "Legislative", "Judicial", "Administrative"],
        "options_hi": ["कार्यपालिका", "विधायी", "न्यायपालिका", "प्रशासनिक"],
        "answer_en": "Executive",
        "answer_hi": "कार्यपालिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is a government ruled by religious leaders called?",
        "question_hi": "धार्मिक नेताओं द्वारा शासित सरकार को क्या कहा जाता है?",
        "options_en": ["Theocracy", "Monarchy", "Democracy", "Oligarchy"],
        "options_hi": ["धर्मतंत्र", "राजतंत्र", "लोकतंत्र", "कुलीनतंत्र"],
        "answer_en": "Theocracy",
        "answer_hi": "धर्मतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What principle prevents government abuse of power?",
        "question_hi": "कौन सा सिद्धांत सरकार की शक्ति के दुरुपयोग को रोकता है?",
        "options_en": ["Checks and Balances", "Separation of Powers", "Rule of Law", "All of these"],
        "options_hi": ["नियंत्रण और संतुलन", "शक्ति पृथक्करण", "कानून का शासन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is a government with absolute power called?",
        "question_hi": "पूर्ण शक्ति वाली सरकार को क्या कहा जाता है?",
        "options_en": ["Dictatorship", "Democracy", "Republic", "Monarchy"],
        "options_hi": ["तानाशाही", "लोकतंत्र", "गणराज्य", "राजतंत्र"],
        "answer_en": "Dictatorship",
        "answer_hi": "तानाशाही",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which document declared American independence?",
        "question_hi": "किस दस्तावेज ने अमेरिकी स्वतंत्रता की घोषणा की?",
        "options_en": ["Declaration of Independence", "Constitution", "Bill of Rights", "Magna Carta"],
        "options_hi": ["स्वतंत्रता घोषणापत्र", "संविधान", "अधिकार विधेयक", "मैग्ना कार्टा"],
        "answer_en": "Declaration of Independence",
        "answer_hi": "स्वतंत्रता घोषणापत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the head of government in a parliamentary system?",
        "question_hi": "संसदीय प्रणाली में सरकार का प्रमुख कौन होता है?",
        "options_en": ["Prime Minister", "President", "Monarch", "Chancellor"],
        "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "राजा", "चांसलर"],
        "answer_en": "Prime Minister",
        "answer_hi": "प्रधानमंत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What system allows citizens to choose their leaders?",
        "question_hi": "कौन सी प्रणाली नागरिकों को अपने नेता चुनने की अनुमति देती है?",
        "options_en": ["Democratic System", "Autocratic System", "Monarchic System", "Theocratic System"],
        "options_hi": ["लोकतांत्रिक प्रणाली", "निरंकुश प्रणाली", "राजतांत्रिक प्रणाली", "धार्मिक प्रणाली"],
        "answer_en": "Democratic System",
        "answer_hi": "लोकतांत्रिक प्रणाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is government by the people called?",
        "question_hi": "लोगों द्वारा सरकार को क्या कहा जाता है?",
        "options_en": ["Democracy", "Autocracy", "Oligarchy", "Plutocracy"],
        "options_hi": ["लोकतंत्र", "निरंकुशता", "कुलीनतंत्र", "धनिकतंत्र"],
        "answer_en": "Democracy",
        "answer_hi": "लोकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which political ideology supports traditional values?",
        "question_hi": "कौन सी राजनीतिक विचारधारा पारंपरिक मूल्यों का समर्थन करती है?",
        "options_en": ["Conservatism", "Liberalism", "Socialism", "Communism"],
        "options_hi": ["रूढ़िवाद", "उदारवाद", "समाजवाद", "साम्यवाद"],
        "answer_en": "Conservatism",
        "answer_hi": "रूढ़िवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is a written plan of government called?",
        "question_hi": "सरकार की लिखित योजना को क्या कहा जाता है?",
        "options_en": ["Constitution", "Charter", "Protocol", "Agreement"],
        "options_hi": ["संविधान", "चार्टर", "प्रोटोकॉल", "समझौता"],
        "answer_en": "Constitution",
        "answer_hi": "संविधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which government system has power concentrated in central government?",
        "question_hi": "किस सरकारी प्रणाली में शक्ति केंद्र सरकार में केंद्रित होती है?",
        "options_en": ["Unitary System", "Federal System", "Confederate System", "Decentralized System"],
        "options_hi": ["एकात्मक प्रणाली", "संघीय प्रणाली", "संघ प्रणाली", "विकेंद्रीकृत प्रणाली"],
        "answer_en": "Unitary System",
        "answer_hi": "एकात्मक प्रणाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the principle that everyone must follow the law?",
        "question_hi": "वह सिद्धांत क्या है जिसमें सभी को कानून का पालन करना चाहिए?",
        "options_en": ["Rule of Law", "Majority Rule", "Executive Privilege", "Judicial Review"],
        "options_hi": ["कानून का शासन", "बहुमत का शासन", "कार्यकारी विशेषाधिकार", "न्यायिक समीक्षा"],
        "answer_en": "Rule of Law",
        "answer_hi": "कानून का शासन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What document guarantees American citizens' rights?",
        "question_hi": "कौन सा दस्तावेज अमेरिकी नागरिकों के अधिकारों की गारंटी देता है?",
        "options_en": ["Bill of Rights", "Declaration of Independence", "Constitution", "Magna Carta"],
        "options_hi": ["अधिकार विधेयक", "स्वतंत्रता घोषणापत्र", "संविधान", "मैग्ना कार्टा"],
        "answer_en": "Bill of Rights",
        "answer_hi": "अधिकार विधेयक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which government branch interprets laws?",
        "question_hi": "सरकार की कौन सी शाखा कानूनों की व्याख्या करती है?",
        "options_en": ["Judicial", "Executive", "Legislative", "Administrative"],
        "options_hi": ["न्यायपालिका", "कार्यपालिका", "विधायी", "प्रशासनिक"],
        "answer_en": "Judicial",
        "answer_hi": "न्यायपालिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is government by a small group called?",
        "question_hi": "एक छोटे समूह द्वारा सरकार को क्या कहा जाता है?",
        "options_en": ["Oligarchy", "Democracy", "Monarchy", "Autocracy"],
        "options_hi": ["कुलीनतंत्र", "लोकतंत्र", "राजतंत्र", "निरंकुशता"],
        "answer_en": "Oligarchy",
        "answer_hi": "कुलीनतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What system has government ownership of major industries?",
        "question_hi": "किस प्रणाली में प्रमुख उद्योगों पर सरकारी स्वामित्व होता है?",
        "options_en": ["Socialism", "Capitalism", "Communism", "Mercantilism"],
        "options_hi": ["समाजवाद", "पूंजीवाद", "साम्यवाद", "व्यापारवाद"],
        "answer_en": "Socialism",
        "answer_hi": "समाजवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the power to declare laws unconstitutional called?",
        "question_hi": "कानूनों को असंवैधानिक घोषित करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Judicial Review", "Executive Order", "Legislative Veto", "Constitutional Challenge"],
        "options_hi": ["न्यायिक समीक्षा", "कार्यकारी आदेश", "विधायी वीटो", "संवैधानिक चुनौती"],
        "answer_en": "Judicial Review",
        "answer_hi": "न्यायिक समीक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What document established the US government?",
        "question_hi": "किस दस्तावेज ने अमेरिकी सरकार की स्थापना की?",
        "options_en": ["Constitution", "Declaration of Independence", "Articles of Confederation", "Mayflower Compact"],
        "options_hi": ["संविधान", "स्वतंत्रता घोषणापत्र", "संघीय संधि", "मेफ्लावर समझौता"],
        "answer_en": "Constitution",
        "answer_hi": "संविधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What political system has no private property?",
        "question_hi": "किस राजनीतिक प्रणाली में निजी संपत्ति नहीं होती?",
        "options_en": ["Communism", "Socialism", "Capitalism", "Feudalism"],
        "options_hi": ["साम्यवाद", "समाजवाद", "पूंजीवाद", "सामंतवाद"],
        "answer_en": "Communism",
        "answer_hi": "साम्यवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the principle of majority rule with minority rights?",
        "question_hi": "अल्पसंख्यक अधिकारों के साथ बहुमत के शासन का सिद्धांत क्या है?",
        "options_en": ["Democratic Principle", "Autocratic Principle", "Oligarchic Principle", "Monarchic Principle"],
        "options_hi": ["लोकतांत्रिक सिद्धांत", "निरंकुश सिद्धांत", "कुलीनतांत्रिक सिद्धांत", "राजतांत्रिक सिद्धांत"],
        "answer_en": "Democratic Principle",
        "answer_hi": "लोकतांत्रिक सिद्धांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What type of government has elected representatives?",
        "question_hi": "किस प्रकार की सरकार में निर्वाचित प्रतिनिधि होते हैं?",
        "options_en": ["Republic", "Dictatorship", "Monarchy", "Theocracy"],
        "options_hi": ["गणराज्य", "तानाशाही", "राजतंत्र", "धर्मतंत्र"],
        "answer_en": "Republic",
        "answer_hi": "गणराज्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What system gives voters power to propose laws?",
        "question_hi": "कौन सी प्रणाली मतदाताओं को कानून प्रस्तावित करने की शक्ति देती है?",
        "options_en": ["Initiative", "Referendum", "Recall", "Plebiscite"],
        "options_hi": ["पहल", "जनमत संग्रह", "पदच्युति", "जनमत"],
        "answer_en": "Initiative",
        "answer_hi": "पहल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is government by wealthy people called?",
        "question_hi": "धनी लोगों द्वारा सरकार को क्या कहा जाता है?",
        "options_en": ["Plutocracy", "Democracy", "Oligarchy", "Aristocracy"],
        "options_hi": ["धनिकतंत्र", "लोकतंत्र", "कुलीनतंत्र", "अभिजात तंत्र"],
        "answer_en": "Plutocracy",
        "answer_hi": "धनिकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What principle divides government into branches?",
        "question_hi": "कौन सा सिद्धांत सरकार को शाखाओं में विभाजित करता है?",
        "options_en": ["Separation of Powers", "Federalism", "Checks and Balances", "Division of Labor"],
        "options_hi": ["शक्ति पृथक्करण", "संघवाद", "नियंत्रण और संतुलन", "श्रम विभाजन"],
        "answer_en": "Separation of Powers",
        "answer_hi": "शक्ति पृथक्करण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What type of democracy do citizens elect representatives?",
        "question_hi": "किस प्रकार के लोकतंत्र में नागरिक प्रतिनिधियों का चुनाव करते हैं?",
        "options_en": ["Representative Democracy", "Direct Democracy", "Participatory Democracy", "Deliberative Democracy"],
        "options_hi": ["प्रतिनिधि लोकतंत्र", "प्रत्यक्ष लोकतंत्र", "सहभागी लोकतंत्र", "विचार-विमर्श लोकतंत्र"],
        "answer_en": "Representative Democracy",
        "answer_hi": "प्रतिनिधि लोकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the government's plan for collecting and spending money?",
        "question_hi": "धन एकत्र करने और खर्च करने की सरकार की योजना क्या है?",
        "options_en": ["Budget", "Economic Plan", "Fiscal Policy", "Revenue Scheme"],
        "options_hi": ["बजट", "आर्थिक योजना", "राजकोषीय नीति", "राजस्व योजना"],
        "answer_en": "Budget",
        "answer_hi": "बजट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What system allows voters to remove officials?",
        "question_hi": "कौन सी प्रणाली मतदाताओं को अधिकारियों को हटाने की अनुमति देती है?",
        "options_en": ["Recall", "Impeachment", "Referendum", "Initiative"],
        "options_hi": ["पदच्युति", "महाभियोग", "जनमत संग्रह", "पहल"],
        "answer_en": "Recall",
        "answer_hi": "पदच्युति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the study of government and politics called?",
        "question_hi": "सरकार और राजनीति के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Political Science", "Civics", "Government Studies", "Public Administration"],
        "options_hi": ["राजनीति विज्ञान", "नागरिक शास्त्र", "सरकार अध्ययन", "लोक प्रशासन"],
        "answer_en": "Political Science",
        "answer_hi": "राजनीति विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What document limited the English king's power?",
        "question_hi": "किस दस्तावेज ने अंग्रेजी राजा की शक्ति को सीमित किया?",
        "options_en": ["Magna Carta", "English Bill of Rights", "Petition of Right", "Habeas Corpus Act"],
        "options_hi": ["मैग्ना कार्टा", "अंग्रेजी अधिकार विधेयक", "अधिकार याचिका", "बंदी प्रत्यक्षीकरण अधिनियम"],
        "answer_en": "Magna Carta",
        "answer_hi": "मैग्ना कार्टा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What system has independent states with a weak central government?",
        "question_hi": "किस प्रणाली में स्वतंत्र राज्य होते हैं जिनकी केंद्र सरकार कमजोर होती है?",
        "options_en": ["Confederation", "Federalism", "Unitary System", "Centralized System"],
        "options_hi": ["संघ", "संघवाद", "एकात्मक प्रणाली", "केंद्रीकृत प्रणाली"],
        "answer_en": "Confederation",
        "answer_hi": "संघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is government by nobility called?",
        "question_hi": "कुलीन वर्ग द्वारा सरकार को क्या कहा जाता है?",
        "options_en": ["Aristocracy", "Democracy", "Oligarchy", "Plutocracy"],
        "options_hi": ["अभिजात तंत्र", "लोकतंत्र", "कुलीनतंत्र", "धनिकतंत्र"],
        "answer_en": "Aristocracy",
        "answer_hi": "अभिजात तंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What principle gives courts power to review laws?",
        "question_hi": "कौन सा सिद्धांत न्यायालयों को कानूनों की समीक्षा करने की शक्ति देता है?",
        "options_en": ["Judicial Review", "Checks and Balances", "Separation of Powers", "Judicial Oversight"],
        "options_hi": ["न्यायिक समीक्षा", "नियंत्रण और संतुलन", "शक्ति पृथक्करण", "न्यायिक पर्यवेक्षण"],
        "answer_en": "Judicial Review",
        "answer_hi": "न्यायिक समीक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What type of government has absolute ruler?",
        "question_hi": "किस प्रकार की सरकार में पूर्ण शासक होता है?",
        "options_en": ["Autocracy", "Democracy", "Republic", "Oligarchy"],
        "options_hi": ["निरंकुशता", "लोकतंत्र", "गणराज्य", "कुलीनतंत्र"],
        "answer_en": "Autocracy",
        "answer_hi": "निरंकुशता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the right to vote called?",
        "question_hi": "मतदान के अधिकार को क्या कहा जाता है?",
        "options_en": ["Suffrage", "Franchise", "Electoral Right", "All of these"],
        "options_hi": ["मताधिकार", "मताधिकार", "चुनावी अधिकार", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What system allows voters to approve or reject laws?",
        "question_hi": "कौन सी प्रणाली मतदाताओं को कानूनों को स्वीकृति या अस्वीकृति देने की अनुमति देती है?",
        "options_en": ["Referendum", "Initiative", "Recall", "Plebiscite"],
        "options_hi": ["जनमत संग्रह", "पहल", "पदच्युति", "जनमत"],
        "answer_en": "Referendum",
        "answer_hi": "जनमत संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is government by military leaders called?",
        "question_hi": "सैन्य नेताओं द्वारा सरकार को क्या कहा जाता है?",
        "options_en": ["Junta", "Dictatorship", "Oligarchy", "Plutocracy"],
        "options_hi": ["जुंटा", "तानाशाही", "कुलीनतंत्र", "धनिकतंत्र"],
        "answer_en": "Junta",
        "answer_hi": "जुंटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What principle prevents any branch from becoming too powerful?",
        "question_hi": "कौन सा सिद्धांत किसी भी शाखा को बहुत शक्तिशाली बनने से रोकता है?",
        "options_en": ["Checks and Balances", "Separation of Powers", "Federalism", "Rule of Law"],
        "options_hi": ["नियंत्रण और संतुलन", "शक्ति पृथक्करण", "संघवाद", "कानून का शासन"],
        "answer_en": "Checks and Balances",
        "answer_hi": "नियंत्रण और संतुलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the economic system with private property?",
        "question_hi": "निजी संपत्ति वाली आर्थिक प्रणाली क्या है?",
        "options_en": ["Capitalism", "Socialism", "Communism", "Feudalism"],
        "options_hi": ["पूंजीवाद", "समाजवाद", "साम्यवाद", "सामंतवाद"],
        "answer_en": "Capitalism",
        "answer_hi": "पूंजीवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the process of becoming a citizen called?",
        "question_hi": "नागरिक बनने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Naturalization", "Immigration", "Citizenship Process", "Assimilation"],
        "options_hi": ["प्राकृतिकीकरण", "आप्रवासन", "नागरिकता प्रक्रिया", "आत्मसात्करण"],
        "answer_en": "Naturalization",
        "answer_hi": "प्राकृतिकीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What system has voters directly elect the head of government?",
        "question_hi": "किस प्रणाली में मतदाता सीधे सरकार प्रमुख का चुनाव करते हैं?",
        "options_en": ["Presidential System", "Parliamentary System", "Monarchical System", "Theocratic System"],
        "options_hi": ["राष्ट्रपति प्रणाली", "संसदीय प्रणाली", "राजतांत्रिक प्रणाली", "धार्मिक प्रणाली"],
        "answer_en": "Presidential System",
        "answer_hi": "राष्ट्रपति प्रणाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the power to reject a bill called?",
        "question_hi": "किसी विधेयक को अस्वीकार करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Veto", "Override", "Amendment", "Ratification"],
        "options_hi": ["वीटो", "अधिलंघन", "संशोधन", "अनुसमर्थन"],
        "answer_en": "Veto",
        "answer_hi": "वीटो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What document protects English citizens' rights?",
        "question_hi": "कौन सा दस्तावेज अंग्रेजी नागरिकों के अधिकारों की रक्षा करता है?",
        "options_en": ["English Bill of Rights", "Magna Carta", "Petition of Right", "Habeas Corpus Act"],
        "options_hi": ["अंग्रेजी अधिकार विधेयक", "मैग्ना कार्टा", "अधिकार याचिका", "बंदी प्रत्यक्षीकरण अधिनियम"],
        "answer_en": "English Bill of Rights",
        "answer_hi": "अंग्रेजी अधिकार विधेयक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is government by a single person called?",
        "question_hi": "एक व्यक्ति द्वारा सरकार को क्या कहा जाता है?",
        "options_en": ["Autocracy", "Oligarchy", "Democracy", "Plutocracy"],
        "options_hi": ["निरंकुशता", "कुलीनतंत्र", "लोकतंत्र", "धनिकतंत्र"],
        "answer_en": "Autocracy",
        "answer_hi": "निरंकुशता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What principle allows Congress to override a veto?",
        "question_hi": "कौन सा सिद्धांत कांग्रेस को वीटो को ओवरराइड करने की अनुमति देता है?",
        "options_en": ["Checks and Balances", "Separation of Powers", "Federalism", "Judicial Review"],
        "options_hi": ["नियंत्रण और संतुलन", "शक्ति पृथक्करण", "संघवाद", "न्यायिक समीक्षा"],
        "answer_en": "Checks and Balances",
        "answer_hi": "नियंत्रण और संतुलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the economic system with government control?",
        "question_hi": "सरकारी नियंत्रण वाली आर्थिक प्रणाली क्या है?",
        "options_en": ["Command Economy", "Market Economy", "Mixed Economy", "Traditional Economy"],
        "options_hi": ["आदेश अर्थव्यवस्था", "बाजार अर्थव्यवस्था", "मिश्रित अर्थव्यवस्था", "पारंपरिक अर्थव्यवस्था"],
        "answer_en": "Command Economy",
        "answer_hi": "आदेश अर्थव्यवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the process of accusing a government official?",
        "question_hi": "सरकारी अधिकारी पर आरोप लगाने की प्रक्रिया क्या है?",
        "options_en": ["Impeachment", "Indictment", "Censure", "Recall"],
        "options_hi": ["महाभियोग", "अभियोग", "निंदा", "पदच्युति"],
        "answer_en": "Impeachment",
        "answer_hi": "महाभियोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What system has Parliament choose the head of government?",
        "question_hi": "किस प्रणाली में संसद सरकार प्रमुख को चुनती है?",
        "options_en": ["Parliamentary System", "Presidential System", "Monarchical System", "Theocratic System"],
        "options_hi": ["संसदीय प्रणाली", "राष्ट्रपति प्रणाली", "राजतांत्रिक प्रणाली", "धार्मिक प्रणाली"],
        "answer_en": "Parliamentary System",
        "answer_hi": "संसदीय प्रणाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the right to express opinions freely?",
        "question_hi": "मत व्यक्त करने का अधिकार क्या है?",
        "options_en": ["Freedom of Speech", "Freedom of Press", "Freedom of Assembly", "Freedom of Religion"],
        "options_hi": ["भाषण की स्वतंत्रता", "प्रेस की स्वतंत्रता", "सम्मेलन की स्वतंत्रता", "धर्म की स्वतंत्रता"],
        "answer_en": "Freedom of Speech",
        "answer_hi": "भाषण की स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What document established the first US government?",
        "question_hi": "किस दस्तावेज ने पहली अमेरिकी सरकार की स्थापना की?",
        "options_en": ["Articles of Confederation", "Constitution", "Declaration of Independence", "Mayflower Compact"],
        "options_hi": ["संघीय संधि", "संविधान", "स्वतंत्रता घोषणापत्र", "मेफ्लावर समझौता"],
        "answer_en": "Articles of Confederation",
        "answer_hi": "संघीय संधि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the economic system with supply and demand?",
        "question_hi": "आपूर्ति और मांग वाली आर्थिक प्रणाली क्या है?",
        "options_en": ["Market Economy", "Command Economy", "Mixed Economy", "Traditional Economy"],
        "options_hi": ["बाजार अर्थव्यवस्था", "आदेश अर्थव्यवस्था", "मिश्रित अर्थव्यवस्था", "पारंपरिक अर्थव्यवस्था"],
        "answer_en": "Market Economy",
        "answer_hi": "बाजार अर्थव्यवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What principle divides power between governments?",
        "question_hi": "कौन सा सिद्धांत सरकारों के बीच शक्ति विभाजित करता है?",
        "options_en": ["Federalism", "Separation of Powers", "Checks and Balances", "Division of Authority"],
        "options_hi": ["संघवाद", "शक्ति पृथक्करण", "नियंत्रण और संतुलन", "प्राधिकार विभाजन"],
        "answer_en": "Federalism",
        "answer_hi": "संघवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the power to pardon criminals called?",
        "question_hi": "अपराधियों को क्षमा करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Executive Clemency", "Judicial Mercy", "Legislative Pardon", "Administrative Forgiveness"],
        "options_hi": ["कार्यकारी दया", "न्यायिक दया", "विधायी क्षमा", "प्रशासनिक क्षमा"],
        "answer_en": "Executive Clemency",
        "answer_hi": "कार्यकारी दया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What system has monarch as ceremonial head?",
        "question_hi": "किस प्रणाली में राजा औपचारिक प्रमुख होता है?",
        "options_en": ["Constitutional Monarchy", "Absolute Monarchy", "Republic", "Dictatorship"],
        "options_hi": ["संवैधानिक राजतंत्र", "पूर्ण राजतंत्र", "गणराज्य", "तानाशाही"],
        "answer_en": "Constitutional Monarchy",
        "answer_hi": "संवैधानिक राजतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the right to practice religion freely?",
        "question_hi": "धर्म स्वतंत्र रूप से अभ्यास करने का अधिकार क्या है?",
        "options_en": ["Freedom of Religion", "Freedom of Speech", "Freedom of Assembly", "Freedom of Press"],
        "options_hi": ["धर्म की स्वतंत्रता", "भाषण की स्वतंत्रता", "सम्मेलन की स्वतंत्रता", "प्रेस की स्वतंत्रता"],
        "answer_en": "Freedom of Religion",
        "answer_hi": "धर्म की स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What document required due process of law?",
        "question_hi": "किस दस्तावेज में कानून की उचित प्रक्रिया की आवश्यकता थी?",
        "options_en": ["Magna Carta", "English Bill of Rights", "Petition of Right", "Habeas Corpus Act"],
        "options_hi": ["मैग्ना कार्टा", "अंग्रेजी अधिकार विधेयक", "अधिकार याचिका", "बंदी प्रत्यक्षीकरण अधिनियम"],
        "answer_en": "Magna Carta",
        "answer_hi": "मैग्ना कार्टा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the power to make treaties called?",
        "question_hi": "संधियाँ करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Treaty-making Power", "Executive Agreement", "Diplomatic Authority", "Foreign Policy Power"],
        "options_hi": ["संधि-निर्माण शक्ति", "कार्यकारी समझौता", "कूटनीतिक प्राधिकार", "विदेश नीति शक्ति"],
        "answer_en": "Treaty-making Power",
        "answer_hi": "संधि-निर्माण शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What system combines market and command economies?",
        "question_hi": "कौन सी प्रणाली बाजार और आदेश अर्थव्यवस्थाओं को जोड़ती है?",
        "options_en": ["Mixed Economy", "Capitalism", "Socialism", "Communism"],
        "options_hi": ["मिश्रित अर्थव्यवस्था", "पूंजीवाद", "समाजवाद", "साम्यवाद"],
        "answer_en": "Mixed Economy",
        "answer_hi": "मिश्रित अर्थव्यवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the right to gather peacefully called?",
        "question_hi": "शांतिपूर्वक एकत्र होने के अधिकार को क्या कहा जाता है?",
        "options_en": ["Freedom of Assembly", "Freedom of Speech", "Freedom of Press", "Freedom of Religion"],
        "options_hi": ["सम्मेलन की स्वतंत्रता", "भाषण की स्वतंत्रता", "प्रेस की स्वतंत्रता", "धर्म की स्वतंत्रता"],
        "answer_en": "Freedom of Assembly",
        "answer_hi": "सम्मेलन की स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What document protected against unlawful imprisonment?",
        "question_hi": "किस दस्तावेज ने अवैध कारावास से सुरक्षा प्रदान की?",
        "options_en": ["Habeas Corpus Act", "Magna Carta", "English Bill of Rights", "Petition of Right"],
        "options_hi": ["बंदी प्रत्यक्षीकरण अधिनियम", "मैग्ना कार्टा", "अंग्रेजी अधिकार विधेयक", "अधिकार याचिका"],
        "answer_en": "Habeas Corpus Act",
        "answer_hi": "बंदी प्रत्यक्षीकरण अधिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the power to appoint judges called?",
        "question_hi": "न्यायाधीशों की नियुक्ति करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Appointment Power", "Judicial Selection", "Executive Nomination", "Court Appointment"],
        "options_hi": ["नियुक्ति शक्ति", "न्यायिक चयन", "कार्यकारी नामांकन", "न्यायालय नियुक्ति"],
        "answer_en": "Appointment Power",
        "answer_hi": "नियुक्ति शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What system has hereditary ruler with absolute power?",
        "question_hi": "किस प्रणाली में वंशानुगत शासक पूर्ण शक्ति के साथ होता है?",
        "options_en": ["Absolute Monarchy", "Constitutional Monarchy", "Republic", "Dictatorship"],
        "options_hi": ["पूर्ण राजतंत्र", "संवैधानिक राजतंत्र", "गणराज्य", "तानाशाही"],
        "answer_en": "Absolute Monarchy",
        "answer_hi": "पूर्ण राजतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the right to publish freely called?",
        "question_hi": "स्वतंत्र रूप से प्रकाशित करने के अधिकार को क्या कहा जाता है?",
        "options_en": ["Freedom of Press", "Freedom of Speech", "Freedom of Assembly", "Freedom of Religion"],
        "options_hi": ["प्रेस की स्वतंत्रता", "भाषण की स्वतंत्रता", "सम्मेलन की स्वतंत्रता", "धर्म की स्वतंत्रता"],
        "answer_en": "Freedom of Press",
        "answer_hi": "प्रेस की स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What document challenged the English king's authority?",
        "question_hi": "किस दस्तावेज ने अंग्रेजी राजा के अधिकार को चुनौती दी?",
        "options_en": ["Petition of Right", "Magna Carta", "English Bill of Rights", "Habeas Corpus Act"],
        "options_hi": ["अधिकार याचिका", "मैग्ना कार्टा", "अंग्रेजी अधिकार विधेयक", "बंदी प्रत्यक्षीकरण अधिनियम"],
        "answer_en": "Petition of Right",
        "answer_hi": "अधिकार याचिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the power to command armed forces called?",
        "question_hi": "सशस्त्र बलों की कमान करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Commander-in-Chief", "Military Authority", "Defense Power", "War Powers"],
        "options_hi": ["सर्वोच्च कमांडर", "सैन्य प्राधिकार", "रक्षा शक्ति", "युद्ध शक्तियाँ"],
        "answer_en": "Commander-in-Chief",
        "answer_hi": "सर्वोच्च कमांडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What system has economic equality as goal?",
        "question_hi": "किस प्रणाली का लक्ष्य आर्थिक समानता है?",
        "options_en": ["Socialism", "Capitalism", "Feudalism", "Mercantilism"],
        "options_hi": ["समाजवाद", "पूंजीवाद", "सामंतवाद", "व्यापारवाद"],
        "answer_en": "Socialism",
        "answer_hi": "समाजवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the right to bear arms called?",
        "question_hi": "शस्त्र धारण करने के अधिकार को क्या कहा जाता है?",
        "options_en": ["Right to Bear Arms", "Self-defense Right", "Weapon Right", "Arms Possession"],
        "options_hi": ["शस्त्र धारण करने का अधिकार", "आत्मरक्षा का अधिकार", "शस्त्र का अधिकार", "शस्त्र कब्जा"],
        "answer_en": "Right to Bear Arms",
        "answer_hi": "शस्त्र धारण करने का अधिकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What document established Pilgrim government?",
        "question_hi": "किस दस्तावेज ने पिलग्रिम सरकार की स्थापना की?",
        "options_en": ["Mayflower Compact", "Fundamental Orders", "Articles of Confederation", "Declaration of Independence"],
        "options_hi": ["मेफ्लावर समझौता", "मूलभूत आदेश", "संघीय संधि", "स्वतंत्रता घोषणापत्र"],
        "answer_en": "Mayflower Compact",
        "answer_hi": "मेफ्लावर समझौता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the power to conduct foreign policy called?",
        "question_hi": "विदेश नीति संचालित करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Foreign Affairs Power", "Diplomatic Authority", "International Relations Power", "Treaty Power"],
        "options_hi": ["विदेश मामले शक्ति", "कूटनीतिक प्राधिकार", "अंतर्राष्ट्रीय संबंध शक्ति", "संधि शक्ति"],
        "answer_en": "Foreign Affairs Power",
        "answer_hi": "विदेश मामले शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What system has economic freedom as goal?",
        "question_hi": "किस प्रणाली का लक्ष्य आर्थिक स्वतंत्रता है?",
        "options_en": ["Capitalism", "Socialism", "Communism", "Feudalism"],
        "options_hi": ["पूंजीवाद", "समाजवाद", "साम्यवाद", "सामंतवाद"],
        "answer_en": "Capitalism",
        "answer_hi": "पूंजीवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the right to fair trial called?",
        "question_hi": "निष्पक्ष मुकदमे के अधिकार को क्या कहा जाता है?",
        "options_en": ["Due Process", "Fair Hearing", "Justice Right", "Legal Protection"],
        "options_hi": ["उचित प्रक्रिया", "निष्पक्ष सुनवाई", "न्याय का अधिकार", "कानूनी संरक्षण"],
        "answer_en": "Due Process",
        "answer_hi": "उचित प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What document established Connecticut government?",
        "question_hi": "किस दस्तावेज ने कनेक्टिकट सरकार की स्थापना की?",
        "options_en": ["Fundamental Orders", "Mayflower Compact", "Articles of Confederation", "Declaration of Independence"],
        "options_hi": ["मूलभूत आदेश", "मेफ्लावर समझौता", "संघीय संधि", "स्वतंत्रता घोषणापत्र"],
        "answer_en": "Fundamental Orders",
        "answer_hi": "मूलभूत आदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the power to create laws called?",
        "question_hi": "कानून बनाने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Legislative Power", "Law-making Authority", "Statutory Power", "Rule-making Power"],
        "options_hi": ["विधायी शक्ति", "कानून-निर्माण प्राधिकार", "वैधानिक शक्ति", "नियम-निर्माण शक्ति"],
        "answer_en": "Legislative Power",
        "answer_hi": "विधायी शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What system has classless society as goal?",
        "question_hi": "किस प्रणाली का लक्ष्य वर्गहीन समाज है?",
        "options_en": ["Communism", "Socialism", "Capitalism", "Feudalism"],
        "options_hi": ["साम्यवाद", "समाजवाद", "पूंजीवाद", "सामंतवाद"],
        "answer_en": "Communism",
        "answer_hi": "साम्यवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the right to privacy called?",
        "question_hi": "गोपनीयता के अधिकार को क्या कहा जाता है?",
        "options_en": ["Right to Privacy", "Personal Space", "Private Life", "Confidentiality"],
        "options_hi": ["गोपनीयता का अधिकार", "व्यक्तिगत स्थान", "निजी जीवन", "गोपनीयता"],
        "answer_en": "Right to Privacy",
        "answer_hi": "गोपनीयता का अधिकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What system has government by the best qualified?",
        "question_hi": "किस प्रणाली में सबसे योग्य द्वारा सरकार होती है?",
        "options_en": ["Meritocracy", "Democracy", "Oligarchy", "Plutocracy"],
        "options_hi": ["योग्यतंत्र", "लोकतंत्र", "कुलीनतंत्र", "धनिकतंत्र"],
        "answer_en": "Meritocracy",
        "answer_hi": "योग्यतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the power to enforce laws called?",
        "question_hi": "कानूनों को लागू करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Executive Power", "Enforcement Authority", "Administrative Power", "Implementation Power"],
        "options_hi": ["कार्यकारी शक्ति", "प्रवर्तन प्राधिकार", "प्रशासनिक शक्ति", "कार्यान्वयन शक्ति"],
        "answer_en": "Executive Power",
        "answer_hi": "कार्यकारी शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What system has rule by elders?",
        "question_hi": "किस प्रणाली में बुजुर्गों का शासन होता है?",
        "options_en": ["Gerontocracy", "Democracy", "Oligarchy", "Plutocracy"],
        "options_hi": ["वृद्धतंत्र", "लोकतंत्र", "कुलीनतंत्र", "धनिकतंत्र"],
        "answer_en": "Gerontocracy",
        "answer_hi": "वृद्धतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the power to interpret laws called?",
        "question_hi": "कानूनों की व्याख्या करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Judicial Power", "Interpretation Authority", "Legal Analysis", "Court Power"],
        "options_hi": ["न्यायिक शक्ति", "व्याख्या प्राधिकार", "कानूनी विश्लेषण", "न्यायालय शक्ति"],
        "answer_en": "Judicial Power",
        "answer_hi": "न्यायिक शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What system has rule by technical experts?",
        "question_hi": "किस प्रणाली में तकनीकी विशेषज्ञों का शासन होता है?",
        "options_en": ["Technocracy", "Democracy", "Oligarchy", "Meritocracy"],
        "options_hi": ["तकनीकतंत्र", "लोकतंत्र", "कुलीनतंत्र", "योग्यतंत्र"],
        "answer_en": "Technocracy",
        "answer_hi": "तकनीकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the power to tax called?",
        "question_hi": "कर लगाने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Taxing Power", "Revenue Authority", "Fiscal Power", "Financial Power"],
        "options_hi": ["कराधान शक्ति", "राजस्व प्राधिकार", "राजकोषीय शक्ति", "वित्तीय शक्ति"],
        "answer_en": "Taxing Power",
        "answer_hi": "कराधान शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What system has rule by women?",
        "question_hi": "किस प्रणाली में महिलाओं का शासन होता है?",
        "options_en": ["Gynarchy", "Democracy", "Oligarchy", "Patriarchy"],
        "options_hi": ["स्त्रीतंत्र", "लोकतंत्र", "कुलीनतंत्र", "पितृसत्ता"],
        "answer_en": "Gynarchy",
        "answer_hi": "स्त्रीतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the power to borrow money called?",
        "question_hi": "धन उधार लेने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Borrowing Power", "Credit Authority", "Loan Power", "Debt Power"],
        "options_hi": ["उधार शक्ति", "क्रेडिट प्राधिकार", "ऋण शक्ति", "ऋण शक्ति"],
        "answer_en": "Borrowing Power",
        "answer_hi": "उधार शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What system has rule by the people directly?",
        "question_hi": "किस प्रणाली में लोगों का सीधा शासन होता है?",
        "options_en": ["Direct Democracy", "Representative Democracy", "Republic", "Oligarchy"],
        "options_hi": ["प्रत्यक्ष लोकतंत्र", "प्रतिनिधि लोकतंत्र", "गणराज्य", "कुलीनतंत्र"],
        "answer_en": "Direct Democracy",
        "answer_hi": "प्रत्यक्ष लोकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the power to declare war called?",
        "question_hi": "युद्ध की घोषणा करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["War Powers", "Military Authority", "Defense Power", "Conflict Power"],
        "options_hi": ["युद्ध शक्तियाँ", "सैन्य प्राधिकार", "रक्षा शक्ति", "संघर्ष शक्ति"],
        "answer_en": "War Powers",
        "answer_hi": "युद्ध शक्तियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What system has rule by the people through representatives?",
        "question_hi": "किस प्रणाली में प्रतिनिधियों के माध्यम से लोगों का शासन होता है?",
        "options_en": ["Representative Democracy", "Direct Democracy", "Republic", "Oligarchy"],
        "options_hi": ["प्रतिनिधि लोकतंत्र", "प्रत्यक्ष लोकतंत्र", "गणराज्य", "कुलीनतंत्र"],
        "answer_en": "Representative Democracy",
        "answer_hi": "प्रतिनिधि लोकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the power to regulate commerce called?",
        "question_hi": "वाणिज्य को विनियमित करने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Commerce Power", "Trade Regulation", "Business Authority", "Market Control"],
        "options_hi": ["वाणिज्य शक्ति", "व्यापार विनियमन", "व्यवसाय प्राधिकार", "बाजार नियंत्रण"],
        "answer_en": "Commerce Power",
        "answer_hi": "वाणिज्य शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What system has rule by the wealthy class?",
        "question_hi": "किस प्रणाली में धनी वर्ग का शासन होता है?",
        "options_en": ["Plutocracy", "Democracy", "Oligarchy", "Aristocracy"],
        "options_hi": ["धनिकतंत्र", "लोकतंत्र", "कुलीनतंत्र", "अभिजात तंत्र"],
        "answer_en": "Plutocracy",
        "answer_hi": "धनिकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the power to coin money called?",
        "question_hi": "मुद्रा ढालने की शक्ति को क्या कहा जाता है?",
        "options_en": ["Coinage Power", "Monetary Authority", "Currency Power", "Money Power"],
        "options_hi": ["मुद्रा शक्ति", "मौद्रिक प्राधिकार", "मुद्रा शक्ति", "धन शक्ति"],
        "answer_en": "Coinage Power",
        "answer_hi": "मुद्रा शक्ति",
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