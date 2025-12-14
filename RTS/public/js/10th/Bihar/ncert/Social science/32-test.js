const questions=[
  {
    "num": 1,
    "question_en": "What is the primary purpose of a constitution in a democratic country?",
    "question_hi": "एक लोकतांत्रिक देश में संविधान का प्राथमिक उद्देश्य क्या है?",
    "options_en": ["To establish framework of government", "To provide entertainment", "To collect taxes", "To conduct foreign policy"],
    "options_hi": ["सरकार का ढांचा स्थापित करना", "मनोरंजन प्रदान करना", "कर वसूलना", "विदेश नीति संचालित करना"],
    "answer_en": "To establish framework of government",
    "answer_hi": "सरकार का ढांचा स्थापित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which principle ensures that government officials are accountable to elected representatives?",
    "question_hi": "कौन सा सिद्धांत सुनिश्चित करता है कि सरकारी अधिकारी निर्वाचित प्रतिनिधियों के प्रति जवाबदेह हैं?",
    "options_en": ["Ministerial Responsibility", "Judicial Independence", "Executive Privilege", "Bureaucratic Autonomy"],
    "options_hi": ["मंत्रीय जिम्मेदारी", "न्यायिक स्वतंत्रता", "कार्यकारी विशेषाधिकार", "नौकरशाही स्वायत्तता"],
    "answer_en": "Ministerial Responsibility",
    "answer_hi": "मंत्रीय जिम्मेदारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What type of political system allows citizens to directly participate in decision-making?",
    "question_hi": "किस प्रकार की राजनीतिक प्रणाली नागरिकों को सीधे निर्णय लेने में भाग लेने की अनुमति देती है?",
    "options_en": ["Direct Democracy", "Representative Democracy", "Monarchy", "Oligarchy"],
    "options_hi": ["प्रत्यक्ष लोकतंत्र", "प्रतिनिधि लोकतंत्र", "राजतंत्र", "अल्पतंत्र"],
    "answer_en": "Direct Democracy",
    "answer_hi": "प्रत्यक्ष लोकतंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which institution is primarily responsible for interpreting laws in a democracy?",
    "question_hi": "लोकतंत्र में कानूनों की व्याख्या करने के लिए मुख्य रूप से कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Judiciary", "Legislature", "Executive", "Media"],
    "options_hi": ["न्यायपालिका", "विधायिका", "कार्यपालिका", "मीडिया"],
    "answer_en": "Judiciary",
    "answer_hi": "न्यायपालिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What fundamental principle prevents government from arbitrarily depriving citizens of life or liberty?",
    "question_hi": "कौन सा मौलिक सिद्धांत सरकार को मनमाने ढंग से नागरिकों को जीवन या स्वतंत्रता से वंचित करने से रोकता है?",
    "options_en": ["Due Process of Law", "Popular Sovereignty", "Federalism", "Separation of Powers"],
    "options_hi": ["विधि की उचित प्रक्रिया", "लोकप्रिय संप्रभुता", "संघवाद", "शक्तियों का पृथक्करण"],
    "answer_en": "Due Process of Law",
    "answer_hi": "विधि की उचित प्रक्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which political concept refers to the protection of minority rights in a majority-rule system?",
    "question_hi": "कौन सी राजनीतिक अवधारणा बहुमत-शासन प्रणाली में अल्पसंख्यक अधिकारों के संरक्षण को संदर्भित करती है?",
    "options_en": ["Minority Rights Protection", "Majoritarianism", "Pluralism", "Elitism"],
    "options_hi": ["अल्पसंख्यक अधिकार संरक्षण", "बहुमतवाद", "बहुलवाद", "कुलीनतंत्र"],
    "answer_en": "Minority Rights Protection",
    "answer_hi": "अल्पसंख्यक अधिकार संरक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the primary function of a legislative body in a democracy?",
    "question_hi": "लोकतंत्र में विधायी निकाय का प्राथमिक कार्य क्या है?",
    "options_en": ["Law-making", "Law enforcement", "Judicial review", "Policy implementation"],
    "options_hi": ["कानून निर्माण", "कानून प्रवर्तन", "न्यायिक समीक्षा", "नीति कार्यान्वयन"],
    "answer_en": "Law-making",
    "answer_hi": "कानून निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which principle ensures that political power is distributed among different government branches?",
    "question_hi": "कौन सा सिद्धांत सुनिश्चित करता है कि राजनीतिक शक्ति विभिन्न सरकारी शाखाओं के बीच वितरित की जाती है?",
    "options_en": ["Separation of Powers", "Checks and Balances", "Federalism", "Decentralization"],
    "options_hi": ["शक्तियों का पृथक्करण", "नियंत्रण और संतुलन", "संघवाद", "विकेंद्रीकरण"],
    "answer_en": "Separation of Powers",
    "answer_hi": "शक्तियों का पृथक्करण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What mechanism allows citizens to propose new laws or amendments?",
    "question_hi": "कौन सा तंत्र नागरिकों को नए कानून या संशोधन प्रस्तावित करने की अनुमति देता है?",
    "options_en": ["Initiative", "Referendum", "Recall", "Plebiscite"],
    "options_hi": ["पहल", "जनमत संग्रह", "वापस बुलाना", "जनमत"],
    "answer_en": "Initiative",
    "answer_hi": "पहल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which institution protects citizens from abuse of power by the government?",
    "question_hi": "कौन सी संस्था नागरिकों को सरकार द्वारा शक्ति के दुरुपयोग से बचाती है?",
    "options_en": ["Independent Judiciary", "Legislature", "Executive", "Civil Society"],
    "options_hi": ["स्वतंत्र न्यायपालिका", "विधायिका", "कार्यपालिका", "नागरिक समाज"],
    "answer_en": "Independent Judiciary",
    "answer_hi": "स्वतंत्र न्यायपालिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What system ensures regular, competitive elections with universal suffrage?",
    "question_hi": "कौन सी प्रणाली सार्वभौमिक मताधिकार के साथ नियमित, प्रतिस्पर्धी चुनाव सुनिश्चित करती है?",
    "options_en": ["Electoral Democracy", "Authoritarian System", "One-party State", "Military Rule"],
    "options_hi": ["चुनावी लोकतंत्र", "अधिनायकवादी प्रणाली", "एक-दलीय राज्य", "सैन्य शासन"],
    "answer_en": "Electoral Democracy",
    "answer_hi": "चुनावी लोकतंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which principle prevents government from establishing an official state religion?",
    "question_hi": "कौन सा सिद्धांत सरकार को आधिकारिक राज्य धर्म स्थापित करने से रोकता है?",
    "options_en": ["Secularism", "Religious Freedom", "Pluralism", "Tolerance"],
    "options_hi": ["धर्मनिरपेक्षता", "धार्मिक स्वतंत्रता", "बहुलवाद", "सहिष्णुता"],
    "answer_en": "Secularism",
    "answer_hi": "धर्मनिरपेक्षता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What constitutional feature allows for the division of powers between central and regional governments?",
    "question_hi": "कौन सी संवैधानिक विशेषता केंद्र और क्षेत्रीय सरकारों के बीच शक्तियों के विभाजन की अनुमति देती है?",
    "options_en": ["Federal Structure", "Unitary System", "Confederation", "Decentralization"],
    "options_hi": ["संघीय संरचना", "एकात्मक प्रणाली", "संघ", "विकेंद्रीकरण"],
    "answer_en": "Federal Structure",
    "answer_hi": "संघीय संरचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which mechanism allows voters to remove elected officials before their term ends?",
    "question_hi": "कौन सा तंत्र मतदाताओं को निर्वाचित अधिकारियों को उनके कार्यकाल समाप्त होने से पहले हटाने की अनुमति देता है?",
    "options_en": ["Recall", "Impeachment", "No-confidence motion", "Referendum"],
    "options_hi": ["वापस बुलाना", "महाभियोग", "अविश्वास प्रस्ताव", "जनमत संग्रह"],
    "answer_en": "Recall",
    "answer_hi": "वापस बुलाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What principle ensures that all government actions are based on law?",
    "question_hi": "कौन सा सिद्धांत सुनिश्चित करता है कि सभी सरकारी कार्य कानून पर आधारित हैं?",
    "options_en": ["Rule of Law", "Rule by Law", "Executive Privilege", "Sovereignty"],
    "options_hi": ["कानून का शासन", "कानून द्वारा शासन", "कार्यकारी विशेषाधिकार", "संप्रभुता"],
    "answer_en": "Rule of Law",
    "answer_hi": "कानून का शासन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which political system features hereditary rule by a single family?",
    "question_hi": "किस राजनीतिक प्रणाली में एक ही परिवार द्वारा वंशानुगत शासन होता है?",
    "options_en": ["Monarchy", "Republic", "Democracy", "Oligarchy"],
    "options_hi": ["राजतंत्र", "गणराज्य", "लोकतंत्र", "अल्पतंत्र"],
    "answer_en": "Monarchy",
    "answer_hi": "राजतंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What document outlines the fundamental rights and duties of citizens?",
    "question_hi": "कौन सा दस्तावेज़ नागरिकों के मौलिक अधिकारों और कर्तव्यों की रूपरेखा तैयार करता है?",
    "options_en": ["Constitution", "Citizenship Act", "Civil Code", "Charter of Rights"],
    "options_hi": ["संविधान", "नागरिकता अधिनियम", "नागरिक संहिता", "अधिकार चार्टर"],
    "answer_en": "Constitution",
    "answer_hi": "संविधान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which system allows multiple political parties to compete for power?",
    "question_hi": "कौन सी प्रणाली कई राजनीतिक दलों को सत्ता के लिए प्रतिस्पर्धा करने की अनुमति देती है?",
    "options_en": ["Multi-party System", "One-party System", "Two-party System", "No-party System"],
    "options_hi": ["बहुदलीय प्रणाली", "एक-दलीय प्रणाली", "द्विदलीय प्रणाली", "बिना दल प्रणाली"],
    "answer_en": "Multi-party System",
    "answer_hi": "बहुदलीय प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What principle ensures freedom from government censorship of media?",
    "question_hi": "कौन सा सिद्धांत मीडिया पर सरकारी सेंसरशिप से स्वतंत्रता सुनिश्चित करता है?",
    "options_en": ["Freedom of Press", "Right to Information", "Media Regulation", "Government Control"],
    "options_hi": ["प्रेस की स्वतंत्रता", "सूचना का अधिकार", "मीडिया विनियमन", "सरकारी नियंत्रण"],
    "answer_en": "Freedom of Press",
    "answer_hi": "प्रेस की स्वतंत्रता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which institution represents the will of the people in a representative democracy?",
    "question_hi": "प्रतिनिधि लोकतंत्र में कौन सी संस्था जनता की इच्छा का प्रतिनिधित्व करती है?",
    "options_en": ["Parliament/Congress", "Judiciary", "Executive", "Bureaucracy"],
    "options_hi": ["संसद/कांग्रेस", "न्यायपालिका", "कार्यपालिका", "नौकरशाही"],
    "answer_en": "Parliament/Congress",
    "answer_hi": "संसद/कांग्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What system features government control over all aspects of society?",
    "question_hi": "किस प्रणाली में समाज के सभी पहलुओं पर सरकारी नियंत्रण होता है?",
    "options_en": ["Totalitarianism", "Authoritarianism", "Democracy", "Liberalism"],
    "options_hi": ["सर्वसत्तावाद", "अधिनायकवाद", "लोकतंत्र", "उदारवाद"],
    "answer_en": "Totalitarianism",
    "answer_hi": "सर्वसत्तावाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which principle ensures equal treatment under the law regardless of personal characteristics?",
    "question_hi": "कौन सा सिद्धांत व्यक्तिगत विशेषताओं की परवाह किए बिना कानून के तहत समान व्यवहार सुनिश्चित करता है?",
    "options_en": ["Equal Protection", "Special Privileges", "Discrimination", "Affirmative Action"],
    "options_hi": ["समान संरक्षण", "विशेष विशेषाधिकार", "भेदभाव", "सकारात्मक कार्रवाई"],
    "answer_en": "Equal Protection",
    "answer_hi": "समान संरक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What mechanism allows citizens to vote directly on specific policy issues?",
    "question_hi": "कौन सा तंत्र नागरिकों को विशिष्ट नीतिगत मुद्दों पर सीधे मतदान करने की अनुमति देता है?",
    "options_en": ["Referendum", "Election", "Recall", "Plebiscite"],
    "options_hi": ["जनमत संग्रह", "चुनाव", "वापस बुलाना", "जनमत"],
    "answer_en": "Referendum",
    "answer_hi": "जनमत संग्रह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which system features power concentrated in a single central authority?",
    "question_hi": "किस प्रणाली में शक्ति एक ही केंद्रीय प्राधिकरण में केंद्रित होती है?",
    "options_en": ["Unitary System", "Federal System", "Confederation", "Decentralized System"],
    "options_hi": ["एकात्मक प्रणाली", "संघीय प्रणाली", "संघ", "विकेंद्रीकृत प्रणाली"],
    "answer_en": "Unitary System",
    "answer_hi": "एकात्मक प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What principle protects citizens from self-incrimination in legal proceedings?",
    "question_hi": "कौन सा सिद्धांत नागरिकों को कानूनी कार्यवाही में स्व-अभियोग से बचाता है?",
    "options_en": ["Right Against Self-Incrimination", "Right to Silence", "Due Process", "Fair Trial"],
    "options_hi": ["स्व-अभियोग के विरुद्ध अधिकार", "मौन रहने का अधिकार", "उचित प्रक्रिया", "निष्पक्ष सुनवाई"],
    "answer_en": "Right Against Self-Incrimination",
    "answer_hi": "स्व-अभियोग के विरुद्ध अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which political system features rule by a small group of wealthy individuals?",
    "question_hi": "किस राजनीतिक प्रणाली में धनी व्यक्तियों के एक छोटे समूह द्वारा शासन होता है?",
    "options_en": ["Plutocracy", "Aristocracy", "Democracy", "Technocracy"],
    "options_hi": ["धनिकतंत्र", "कुलीनतंत्र", "लोकतंत्र", "तकनीकतंत्र"],
    "answer_en": "Plutocracy",
    "answer_hi": "धनिकतंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What institution is responsible for implementing laws and policies?",
    "question_hi": "कानूनों और नीतियों को लागू करने के लिए कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Executive Branch", "Legislative Branch", "Judicial Branch", "Bureaucracy"],
    "options_hi": ["कार्यपालिका शाखा", "विधायी शाखा", "न्यायिक शाखा", "नौकरशाही"],
    "answer_en": "Executive Branch",
    "answer_hi": "कार्यपालिका शाखा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which principle ensures government transparency and public access to information?",
    "question_hi": "कौन सा सिद्धांत सरकारी पारदर्शिता और सूचना तक सार्वजनिक पहुंच सुनिश्चित करता है?",
    "options_en": ["Right to Information", "Government Secrecy", "Official Secrets", "Executive Privilege"],
    "options_hi": ["सूचना का अधिकार", "सरकारी गोपनीयता", "सरकारी रहस्य", "कार्यकारी विशेषाधिकार"],
    "answer_en": "Right to Information",
    "answer_hi": "सूचना का अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What system features periodic elections with secret ballots?",
    "question_hi": "किस प्रणाली में गुप्त मतपत्रों के साथ आवधिक चुनाव होते हैं?",
    "options_en": ["Democratic Elections", "Controlled Elections", "Indirect Elections", "Public Voting"],
    "options_hi": ["लोकतांत्रिक चुनाव", "नियंत्रित चुनाव", "अप्रत्यक्ष चुनाव", "सार्वजनिक मतदान"],
    "answer_en": "Democratic Elections",
    "answer_hi": "लोकतांत्रिक चुनाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which principle protects minority cultural and linguistic rights?",
    "question_hi": "कौन सा सिद्धांत अल्पसंख्यक सांस्कृतिक और भाषाई अधिकारों की रक्षा करता है?",
    "options_en": ["Cultural Pluralism", "Assimilation", "Integration", "Segregation"],
    "options_hi": ["सांस्कृतिक बहुलवाद", "समाकलन", "एकीकरण", "पृथक्करण"],
    "answer_en": "Cultural Pluralism",
    "answer_hi": "सांस्कृतिक बहुलवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What mechanism allows legislative bodies to remove high officials for misconduct?",
    "question_hi": "कौन सा तंत्र विधायी निकायों को दुर्व्यवहार के लिए उच्च अधिकारियों को हटाने की अनुमति देता है?",
    "options_en": ["Impeachment", "Recall", "No-confidence", "Censure"],
    "options_hi": ["महाभियोग", "वापस बुलाना", "अविश्वास", "निंदा"],
    "answer_en": "Impeachment",
    "answer_hi": "महाभियोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which system features government ownership of major industries?",
    "question_hi": "किस प्रणाली में प्रमुख उद्योगों का सरकारी स्वामित्व होता है?",
    "options_en": ["Socialism", "Capitalism", "Communism", "Mixed Economy"],
    "options_hi": ["समाजवाद", "पूंजीवाद", "साम्यवाद", "मिश्रित अर्थव्यवस्था"],
    "answer_en": "Socialism",
    "answer_hi": "समाजवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What principle ensures fair procedures in legal and administrative matters?",
    "question_hi": "कौन सा सिद्धांत कानूनी और प्रशासनिक मामलों में निष्पक्ष प्रक्रियाओं को सुनिश्चित करता है?",
    "options_en": ["Procedural Fairness", "Substantive Justice", "Arbitrary Decision", "Administrative Discretion"],
    "options_hi": ["प्रक्रियात्मक निष्पक्षता", "वास्तविक न्याय", "मनमाना निर्णय", "प्रशासनिक विवेक"],
    "answer_en": "Procedural Fairness",
    "answer_hi": "प्रक्रियात्मक निष्पक्षता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which institution mediates disputes between different levels of government?",
    "question_hi": "सरकार के विभिन्न स्तरों के बीच विवादों का मध्यस्थता कौन सी संस्था करती है?",
    "options_en": ["Supreme Court", "Inter-State Council", "Parliament", "President/Governor"],
    "options_hi": ["सर्वोच्च न्यायालय", "अंतर-राज्य परिषद", "संसद", "राष्ट्रपति/राज्यपाल"],
    "answer_en": "Supreme Court",
    "answer_hi": "सर्वोच्च न्यायालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What system features complete government control over economy and society?",
    "question_hi": "किस प्रणाली में अर्थव्यवस्था और समाज पर पूर्ण सरकारी नियंत्रण होता है?",
    "options_en": ["Communism", "Socialism", "Capitalism", "Fascism"],
    "options_hi": ["साम्यवाद", "समाजवाद", "पूंजीवाद", "फासीवाद"],
    "answer_en": "Communism",
    "answer_hi": "साम्यवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which principle ensures government cannot take private property without compensation?",
    "question_hi": "कौन सा सिद्धांत सुनिश्चित करता है कि सरकार मुआवजे के बिना निजी संपत्ति नहीं ले सकती?",
    "options_en": ["Eminent Domain with Compensation", "Confiscation", "Nationalization", "Expropriation"],
    "options_hi": ["मुआवजे के साथ प्रतिष्ठित डोमेन", "जब्ती", "राष्ट्रीयकरण", "अधिग्रहण"],
    "answer_en": "Eminent Domain with Compensation",
    "answer_hi": "मुआवजे के साथ प्रतिष्ठित डोमेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What mechanism allows citizens to challenge government actions in court?",
    "question_hi": "कौन सा तंत्र नागरिकों को अदालत में सरकारी कार्रवाइयों को चुनौती देने की अनुमति देता है?",
    "options_en": ["Judicial Review", "Public Interest Litigation", "Writ Petitions", "All of the above"],
    "options_hi": ["न्यायिक समीक्षा", "सार्वजनिक हित याचिका", "रिट याचिकाएं", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which system features rule by religious authorities?",
    "question_hi": "किस प्रणाली में धार्मिक अधिकारियों द्वारा शासन होता है?",
    "options_en": ["Theocracy", "Secular Democracy", "Religious State", "Clerical Rule"],
    "options_hi": ["धर्मतंत्र", "धर्मनिरपेक्ष लोकतंत्र", "धार्मिक राज्य", "पादरी शासन"],
    "answer_en": "Theocracy",
    "answer_hi": "धर्मतंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What principle ensures protection against double jeopardy in legal proceedings?",
    "question_hi": "कौन सा सिद्धांत कानूनी कार्यवाही में दोहरे खतरे से सुरक्षा सुनिश्चित करता है?",
    "options_en": ["Protection Against Double Jeopardy", "Single Trial Rule", "Finality Principle", "Res Judicata"],
    "options_hi": ["दोहरे खतरे के विरुद्ध सुरक्षा", "एकल परीक्षण नियम", "अंतिमता सिद्धांत", "निर्णीत मामला"],
    "answer_en": "Protection Against Double Jeopardy",
    "answer_hi": "दोहरे खतरे के विरुद्ध सुरक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which institution formulates and implements foreign policy?",
    "question_hi": "विदेश नीति तैयार करने और लागू करने के लिए कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Executive Branch", "Legislature", "Judiciary", "Diplomatic Corps"],
    "options_hi": ["कार्यपालिका शाखा", "विधायिका", "न्यायपालिका", "राजनयिक दल"],
    "answer_en": "Executive Branch",
    "answer_hi": "कार्यपालिका शाखा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What system features protection of private property and free markets?",
    "question_hi": "किस प्रणाली में निजी संपत्ति और मुक्त बाजारों का संरक्षण होता है?",
    "options_en": ["Capitalism", "Socialism", "Communism", "Mixed Economy"],
    "options_hi": ["पूंजीवाद", "समाजवाद", "साम्यवाद", "मिश्रित अर्थव्यवस्था"],
    "answer_en": "Capitalism",
    "answer_hi": "पूंजीवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which principle ensures government cannot impose excessive bail or fines?",
    "question_hi": "कौन सा सिद्धांत सुनिश्चित करता है कि सरकार अत्यधिक जमानत या जुर्माना नहीं लगा सकती?",
    "options_en": ["Protection Against Excessive Bail", "Reasonable Restrictions", "Proportional Punishment", "Judicial Discretion"],
    "options_hi": ["अत्यधिक जमानत के विरुद्ध सुरक्षा", "उचित प्रतिबंध", "आनुपातिक दंड", "न्यायिक विवेक"],
    "answer_en": "Protection Against Excessive Bail",
    "answer_hi": "अत्यधिक जमानत के विरुद्ध सुरक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What mechanism allows for peaceful transfer of power after elections?",
    "question_hi": "चुनाव के बाद सत्ता के शांतिपूर्ण हस्तांतरण के लिए कौन सा तंत्र अनुमति देता है?",
    "options_en": ["Peaceful Transition", "Constitutional Transfer", "Democratic Process", "All of the above"],
    "options_hi": ["शांतिपूर्ण संक्रमण", "संवैधानिक हस्तांतरण", "लोकतांत्रिक प्रक्रिया", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which system features government by elected representatives of the people?",
    "question_hi": "किस प्रणाली में जनता के निर्वाचित प्रतिनिधियों द्वारा सरकार होती है?",
    "options_en": ["Republic", "Monarchy", "Dictatorship", "Oligarchy"],
    "options_hi": ["गणराज्य", "राजतंत्र", "तानाशाही", "अल्पतंत्र"],
    "answer_en": "Republic",
    "answer_hi": "गणराज्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What principle ensures protection against cruel and unusual punishment?",
    "question_hi": "कौन सा सिद्धांत क्रूर और असामान्य सजा से सुरक्षा सुनिश्चित करता है?",
    "options_en": ["Protection Against Cruel Punishment", "Humane Treatment", "Rehabilitation Focus", "Proportional Justice"],
    "options_hi": ["क्रूर सजा के विरुद्ध सुरक्षा", "मानवीय व्यवहार", "पुनर्वास फोकस", "आनुपातिक न्याय"],
    "answer_en": "Protection Against Cruel Punishment",
    "answer_hi": "क्रूर सजा के विरुद्ध सुरक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which institution is responsible for maintaining public order and safety?",
    "question_hi": "सार्वजनिक व्यवस्था और सुरक्षा बनाए रखने के लिए कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Police and Law Enforcement", "Judiciary", "Legislature", "Executive"],
    "options_hi": ["पुलिस और कानून प्रवर्तन", "न्यायपालिका", "विधायिका", "कार्यपालिका"],
    "answer_en": "Police and Law Enforcement",
    "answer_hi": "पुलिस और कानून प्रवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What system features complete absence of government authority?",
    "question_hi": "किस प्रणाली में सरकारी प्राधिकरण की पूर्ण अनुपस्थिति होती है?",
    "options_en": ["Anarchy", "Stateless Society", "Libertarianism", "All of the above"],
    "options_hi": ["अराजकता", "राज्यहीन समाज", "उदारतावाद", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which principle ensures right to legal representation in court proceedings?",
    "question_hi": "कौन सा सिद्धांत अदालती कार्यवाही में कानूनी प्रतिनिधित्व के अधिकार की गारंटी देता है?",
    "options_en": ["Right to Legal Aid", "Access to Justice", "Fair Representation", "All of the above"],
    "options_hi": ["कानूनी सहायता का अधिकार", "न्याय तक पहुंच", "निष्पक्ष प्रतिनिधित्व", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What mechanism allows citizens to propose constitutional amendments?",
    "question_hi": "नागरिकों को संवैधानिक संशोधन प्रस्तावित करने की अनुमति देने वाला तंत्र क्या है?",
    "options_en": ["Popular Initiative", "Legislative Process", "Constitutional Convention", "All of the above"],
    "options_hi": ["लोकप्रिय पहल", "विधायी प्रक्रिया", "संवैधानिक सम्मेलन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which system features government by military authorities?",
    "question_hi": "किस प्रणाली में सैन्य अधिकारियों द्वारा सरकार होती है?",
    "options_en": ["Military Dictatorship", "Junta Rule", "Martial Law", "All of the above"],
    "options_hi": ["सैन्य तानाशाही", "जून्टा शासन", "मार्शल लॉ", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What principle ensures protection of privacy in personal communications?",
    "question_hi": "कौन सा सिद्धांत व्यक्तिगत संचार में गोपनीयता के संरक्षण की गारंटी देता है?",
    "options_en": ["Right to Privacy", "Confidentiality", "Data Protection", "All of the above"],
    "options_hi": ["गोपनीयता का अधिकार", "गोपनीयता", "डेटा संरक्षण", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which institution is responsible for currency and monetary policy?",
    "question_hi": "मुद्रा और मौद्रिक नीति के लिए कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Central Bank", "Finance Ministry", "Treasury", "All of the above"],
    "options_hi": ["केंद्रीय बैंक", "वित्त मंत्रालय", "कोषागार", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What system features extensive welfare programs and social safety nets?",
    "question_hi": "किस प्रणाली में व्यापक कल्याणकारी कार्यक्रम और सामाजिक सुरक्षा जाल होते हैं?",
    "options_en": ["Welfare State", "Social Democracy", "Socialist System", "All of the above"],
    "options_hi": ["कल्याणकारी राज्य", "सामाजिक लोकतंत्र", "समाजवादी प्रणाली", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which principle ensures protection against unreasonable searches and seizures?",
    "question_hi": "कौन सा सिद्धांत अनुचित खोज और जब्ती के विरुद्ध सुरक्षा सुनिश्चित करता है?",
    "options_en": ["Protection Against Unreasonable Search", "Search Warrant Requirement", "Privacy Rights", "All of the above"],
    "options_hi": ["अनुचित खोज के विरुद्ध सुरक्षा", "खोज वारंट आवश्यकता", "गोपनीयता अधिकार", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What mechanism allows for constitutional interpretation and adaptation?",
    "question_hi": "संवैधानिक व्याख्या और अनुकूलन के लिए कौन सा तंत्र अनुमति देता है?",
    "options_en": ["Judicial Interpretation", "Constitutional Amendments", "Living Constitution Doctrine", "All of the above"],
    "options_hi": ["न्यायिक व्याख्या", "संवैधानिक संशोधन", "जीवंत संविधान सिद्धांत", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which system features strong nationalist ideology and authoritarian rule?",
    "question_hi": "किस प्रणाली में मजबूत राष्ट्रवादी विचारधारा और अधिनायकवादी शासन होता है?",
    "options_en": ["Fascism", "Nationalism", "Authoritarian Rule", "All of the above"],
    "options_hi": ["फासीवाद", "राष्ट्रवाद", "अधिनायकवादी शासन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What principle ensures equal voting rights for all adult citizens?",
    "question_hi": "कौन सा सिद्धांत सभी वयस्क नागरिकों के लिए समान मतदान अधिकार सुनिश्चित करता है?",
    "options_en": ["Universal Adult Suffrage", "Equal Voting Rights", "One Person One Vote", "All of the above"],
    "options_hi": ["सार्वभौमिक वयस्क मताधिकार", "समान मतदान अधिकार", "एक व्यक्ति एक मत", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which institution is responsible for conducting census and demographic data?",
    "question_hi": "जनगणना और जनसांख्यिकीय डेटा आयोजित करने के लिए कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Census Bureau", "Statistics Department", "Registrar General", "All of the above"],
    "options_hi": ["जनगणना ब्यूरो", "सांख्यिकी विभाग", "महापंजीयक", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What system features minimal government intervention in economic affairs?",
    "question_hi": "किस प्रणाली में आर्थिक मामलों में न्यूनतम सरकारी हस्तक्षेप होता है?",
    "options_en": ["Laissez-faire Capitalism", "Free Market Economy", "Economic Liberalism", "All of the above"],
    "options_hi": ["लेसेज़-फेयर पूंजीवाद", "मुक्त बाजार अर्थव्यवस्था", "आर्थिक उदारवाद", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which principle ensures protection of intellectual property rights?",
    "question_hi": "कौन सा सिद्धांत बौद्धिक संपदा अधिकारों के संरक्षण की गारंटी देता है?",
    "options_en": ["Copyright Protection", "Patent Rights", "Trademark Protection", "All of the above"],
    "options_hi": ["कॉपीराइट संरक्षण", "पेटेंट अधिकार", "ट्रेडमार्क संरक्षण", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What mechanism allows for international cooperation and treaties?",
    "question_hi": "अंतरराष्ट्रीय सहयोग और संधियों के लिए कौन सा तंत्र अनुमति देता है?",
    "options_en": ["Diplomacy", "International Agreements", "Treaty Making Power", "All of the above"],
    "options_hi": ["कूटनीति", "अंतर्राष्ट्रीय समझौते", "संधि निर्माण शक्ति", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which system features rule by technical experts and scientists?",
    "question_hi": "किस प्रणाली में तकनीकी विशेषज्ञों और वैज्ञानिकों द्वारा शासन होता है?",
    "options_en": ["Technocracy", "Meritocracy", "Expert Rule", "All of the above"],
    "options_hi": ["तकनीकतंत्र", "योग्यतावाद", "विशेषज्ञ शासन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What principle ensures protection of consumer rights?",
    "question_hi": "कौन सा सिद्धांत उपभोक्ता अधिकारों के संरक्षण की गारंटी देता है?",
    "options_en": ["Consumer Protection", "Product Safety", "Fair Trade Practices", "All of the above"],
    "options_hi": ["उपभोक्ता संरक्षण", "उत्पाद सुरक्षा", "निष्पक्ष व्यापार प्रथाएं", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which institution is responsible for environmental protection?",
    "question_hi": "पर्यावरण संरक्षण के लिए कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Environmental Ministry", "Pollution Control Boards", "Forest Department", "All of the above"],
    "options_hi": ["पर्यावरण मंत्रालय", "प्रदूषण नियंत्रण बोर्ड", "वन विभाग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What system features collective ownership of means of production?",
    "question_hi": "किस प्रणाली में उत्पादन के साधनों का सामूहिक स्वामित्व होता है?",
    "options_en": ["Communism", "Collectivism", "Socialist Ownership", "All of the above"],
    "options_hi": ["साम्यवाद", "सामूहिकता", "समाजवादी स्वामित्व", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which principle ensures protection of indigenous peoples' rights?",
    "question_hi": "कौन सा सिद्धांत स्वदेशी लोगों के अधिकारों के संरक्षण की गारंटी देता है?",
    "options_en": ["Indigenous Rights", "Tribal Autonomy", "Cultural Preservation", "All of the above"],
    "options_hi": ["स्वदेशी अधिकार", "जनजातीय स्वायत्तता", "सांस्कृतिक संरक्षण", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What mechanism allows for public participation in policy making?",
    "question_hi": "नीति निर्माण में सार्वजनिक भागीदारी के लिए कौन सा तंत्र अनुमति देता है?",
    "options_en": ["Public Hearings", "Consultation Processes", "Citizen Feedback", "All of the above"],
    "options_hi": ["सार्वजनिक सुनवाई", "परामर्श प्रक्रियाएं", "नागरिक प्रतिक्रिया", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which system features rule by a single absolute ruler?",
    "question_hi": "किस प्रणाली में एक ही निरंकुश शासक द्वारा शासन होता है?",
    "options_en": ["Absolute Monarchy", "Despotism", "Autocracy", "All of the above"],
    "options_hi": ["निरंकुश राजतंत्र", "तानाशाही", "एकतंत्र", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What principle ensures protection of refugee rights?",
    "question_hi": "कौन सा सिद्धांत शरणार्थी अधिकारों के संरक्षण की गारंटी देता है?",
    "options_en": ["Refugee Protection", "Asylum Rights", "Non-refoulement", "All of the above"],
    "options_hi": ["शरणार्थी संरक्षण", "शरण अधिकार", "नॉन-रिफॉलमेंट", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which institution is responsible for space exploration and research?",
    "question_hi": "अंतरिक्ष अन्वेषण और शोध के लिए कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Space Agency", "Scientific Research Organization", "Aeronautics Department", "All of the above"],
    "options_hi": ["अंतरिक्ष एजेंसी", "वैज्ञानिक शोध संगठन", "वैमानिकी विभाग", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What system features religious law as the basis of governance?",
    "question_hi": "किस प्रणाली में शासन के आधार के रूप में धार्मिक कानून होता है?",
    "options_en": ["Theocratic System", "Religious Law State", "Sharia Governance", "All of the above"],
    "options_hi": ["धर्मतांत्रिक प्रणाली", "धार्मिक कानून राज्य", "शरिया शासन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which principle ensures protection of digital rights and privacy?",
    "question_hi": "कौन सा सिद्धांत डिजिटल अधिकारों और गोपनीयता के संरक्षण की गारंटी देता है?",
    "options_en": ["Digital Rights", "Internet Privacy", "Data Protection", "All of the above"],
    "options_hi": ["डिजिटल अधिकार", "इंटरनेट गोपनीयता", "डेटा संरक्षण", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What mechanism allows for regional integration and cooperation?",
    "question_hi": "क्षेत्रीय एकीकरण और सहयोग के लिए कौन सा तंत्र अनुमति देता है?",
    "options_en": ["Regional Organizations", "Economic Unions", "Political Alliances", "All of the above"],
    "options_hi": ["क्षेत्रीय संगठन", "आर्थिक संघ", "राजनीतिक गठबंधन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which system features rule by the most qualified individuals?",
    "question_hi": "किस प्रणाली में सबसे योग्य व्यक्तियों द्वारा शासन होता है?",
    "options_en": ["Meritocracy", "Technocracy", "Expert Rule", "All of the above"],
    "options_hi": ["योग्यतावाद", "तकनीकतंत्र", "विशेषज्ञ शासन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What principle ensures protection of animal rights?",
    "question_hi": "कौन सा सिद्धांत पशु अधिकारों के संरक्षण की गारंटी देता है?",
    "options_en": ["Animal Welfare", "Anti-Cruelty Laws", "Species Protection", "All of the above"],
    "options_hi": ["पशु कल्याण", "क्रूरता विरोधी कानून", "प्रजाति संरक्षण", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which institution is responsible for cultural heritage preservation?",
    "question_hi": "सांस्कृतिक विरासत संरक्षण के लिए कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Archaeological Survey", "Museum Authorities", "Cultural Ministry", "All of the above"],
    "options_hi": ["पुरातत्व सर्वेक्षण", "संग्रहालय प्राधिकरण", "संस्कृति मंत्रालय", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What system features voluntary association of sovereign states?",
    "question_hi": "किस प्रणाली में संप्रभु राज्यों का स्वैच्छिक संघ होता है?",
    "options_en": ["Confederation", "Alliance System", "Federation", "All of the above"],
    "options_hi": ["संघ", "गठबंधन प्रणाली", "संघ", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which principle ensures protection of linguistic diversity?",
    "question_hi": "कौन सा सिद्धांत भाषाई विविधता के संरक्षण की गारंटी देता है?",
    "options_en": ["Linguistic Rights", "Minority Language Protection", "Multilingualism", "All of the above"],
    "options_hi": ["भाषाई अधिकार", "अल्पसंख्यक भाषा संरक्षण", "बहुभाषावाद", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What mechanism allows for citizen oversight of government?",
    "question_hi": "सरकार पर नागरिक निगरानी के लिए कौन सा तंत्र अनुमति देता है?",
    "options_en": ["Ombudsman System", "Citizen Audit", "Social Audit", "All of the above"],
    "options_hi": ["लोकपाल प्रणाली", "नागरिक लेखा परीक्षा", "सामाजिक लेखा परीक्षा", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which system features power sharing among different ethnic groups?",
    "question_hi": "किस प्रणाली में विभिन्न जातीय समूहों के बीच सत्ता साझाकरण होता है?",
    "options_en": ["Consociational Democracy", "Power Sharing", "Ethnic Federalism", "All of the above"],
    "options_hi": ["संयुक्त लोकतंत्र", "सत्ता साझाकरण", "जातीय संघवाद", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What principle ensures protection of traditional knowledge?",
    "question_hi": "कौन सा सिद्धांत पारंपरिक ज्ञान के संरक्षण की गारंटी देता है?",
    "options_en": ["Traditional Knowledge Protection", "Indigenous Wisdom Rights", "Cultural Heritage Rights", "All of the above"],
    "options_hi": ["पारंपरिक ज्ञान संरक्षण", "स्वदेशी ज्ञान अधिकार", "सांस्कृतिक विरासत अधिकार", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which institution is responsible for disaster management?",
    "question_hi": "आपदा प्रबंधन के लिए कौन सी संस्था जिम्मेदार है?",
    "options_en": ["Disaster Management Authority", "Emergency Services", "Relief Organizations", "All of the above"],
    "options_hi": ["आपदा प्रबंधन प्राधिकरण", "आपातकालीन सेवाएं", "राहत संगठन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What system features rule by corporate interests?",
    "question_hi": "किस प्रणाली में कॉर्पोरेट हितों द्वारा शासन होता है?",
    "options_en": ["Corporatocracy", "Corporate Rule", "Business Dominance", "All of the above"],
    "options_hi": ["कॉर्पोरेट तंत्र", "कॉर्पोरेट शासन", "व्यवसाय प्रभुत्व", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which principle ensures protection of genetic privacy?",
    "question_hi": "कौन सा सिद्धांत आनुवंशिक गोपनीयता के संरक्षण की गारंटी देता है?",
    "options_en": ["Genetic Privacy Rights", "DNA Protection", "Biometric Data Security", "All of the above"],
    "options_hi": ["आनुवंशिक गोपनीयता अधिकार", "डीएनए संरक्षण", "बायोमेट्रिक डेटा सुरक्षा", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What mechanism allows for international human rights protection?",
    "question_hi": "अंतर्राष्ट्रीय मानवाधिकार संरक्षण के लिए कौन सा तंत्र अनुमति देता है?",
    "options_en": ["International Courts", "Human Rights Treaties", "UN Mechanisms", "All of the above"],
    "options_hi": ["अंतर्राष्ट्रीय न्यायालय", "मानवाधिकार संधियाँ", "संयुक्त राष्ट्र तंत्र", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which system features rule by artificial intelligence?",
    "question_hi": "किस प्रणाली में कृत्रिम बुद्धिमत्ता द्वारा शासन होता है?",
    "options_en": ["Algorithmic Governance", "AI Rule", "Digital Autocracy", "All of the above"],
    "options_hi": ["एल्गोरिदम शासन", "एआई शासन", "डिजिटल एकतंत्र", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What principle ensures protection of ocean resources?",
    "question_hi": "कौन सा सिद्धांत महासागर संसाधनों के संरक्षण की गारंटी देता है?",
    "options_en": ["Marine Conservation", "Ocean Governance", "Sea Resource Management", "All of the above"],
    "options_hi": ["समुद्री संरक्षण", "महासागर शासन", "समुद्री संसाधन प्रबंधन", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 88,
  "question_en": "Which institution is responsible for regulating financial markets?",
  "question_hi": "वित्तीय बाजारों को विनियमित करने के लिए कौन सी संस्था जिम्मेदार है?",
  "options_en": ["Securities and Exchange Commission", "Financial Regulatory Authority", "Central Bank", "All of the above"],
  "options_hi": ["प्रतिभूति और विनिमय आयोग", "वित्तीय नियामक प्राधिकरण", "केंद्रीय बैंक", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 89,
  "question_en": "What system features government by the working class?",
  "question_hi": "किस प्रणाली में कार्यशील वर्ग द्वारा सरकार होती है?",
  "options_en": ["Proletarian Dictatorship", "Workers' State", "Socialist Democracy", "All of the above"],
  "options_hi": ["सर्वहारा तानाशाही", "श्रमिक राज्य", "समाजवादी लोकतंत्र", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 90,
  "question_en": "Which principle ensures protection of the right to clean environment?",
  "question_hi": "कौन सा सिद्धांत स्वच्छ पर्यावरण के अधिकार के संरक्षण की गारंटी देता है?",
  "options_en": ["Environmental Rights", "Right to Healthy Environment", "Sustainable Development", "All of the above"],
  "options_hi": ["पर्यावरणीय अधिकार", "स्वस्थ पर्यावरण का अधिकार", "सतत विकास", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 91,
  "question_en": "What mechanism allows for direct citizen legislation?",
  "question_hi": "प्रत्यक्ष नागरिक कानून निर्माण के लिए कौन सा तंत्र अनुमति देता है?",
  "options_en": ["Citizen's Initiative", "Popular Legislation", "Direct Democracy Tools", "All of the above"],
  "options_hi": ["नागरिक पहल", "लोकप्रिय विधान", "प्रत्यक्ष लोकतंत्र उपकरण", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 92,
  "question_en": "Which system features rule by elders or senior council?",
  "question_hi": "किस प्रणाली में बुजुर्गों या वरिष्ठ परिषद द्वारा शासन होता है?",
  "options_en": ["Gerontocracy", "Council of Elders", "Senior Rule", "All of the above"],
  "options_hi": ["वृद्धतंत्र", "बुजुर्गों की परिषद", "वरिष्ठ शासन", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 93,
  "question_en": "What principle ensures protection of academic freedom?",
  "question_hi": "कौन सा सिद्धांत शैक्षणिक स्वतंत्रता के संरक्षण की गारंटी देता है?",
  "options_en": ["Academic Freedom", "University Autonomy", "Intellectual Liberty", "All of the above"],
  "options_hi": ["शैक्षणिक स्वतंत्रता", "विश्वविद्यालय स्वायत्तता", "बौद्धिक स्वतंत्रता", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 94,
  "question_en": "Which institution is responsible for public health management?",
  "question_hi": "सार्वजनिक स्वास्थ्य प्रबंधन के लिए कौन सी संस्था जिम्मेदार है?",
  "options_en": ["Health Ministry", "Public Health Departments", "Disease Control Centers", "All of the above"],
  "options_hi": ["स्वास्थ्य मंत्रालय", "सार्वजनिक स्वास्थ्य विभाग", "रोग नियंत्रण केंद्र", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 95,
  "question_en": "What system features voluntary community-based governance?",
  "question_hi": "किस प्रणाली में स्वैच्छिक समुदाय-आधारित शासन होता है?",
  "options_en": ["Communalism", "Community Governance", "Local Self-rule", "All of the above"],
  "options_hi": ["सामुदायिकता", "समुदाय शासन", "स्थानीय स्वशासन", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 96,
  "question_en": "Which principle ensures protection of right to peaceful assembly?",
  "question_hi": "कौन सा सिद्धांत शांतिपूर्ण सभा के अधिकार के संरक्षण की गारंटी देता है?",
  "options_en": ["Freedom of Assembly", "Right to Protest", "Public Gathering Rights", "All of the above"],
  "options_hi": ["सभा की स्वतंत्रता", "विरोध का अधिकार", "सार्वजनिक सभा अधिकार", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 97,
  "question_en": "What mechanism allows for international conflict resolution?",
  "question_hi": "अंतरराष्ट्रीय विवाद समाधान के लिए कौन सा तंत्र अनुमति देता है?",
  "options_en": ["International Arbitration", "Diplomatic Negotiation", "Peacekeeping Missions", "All of the above"],
  "options_hi": ["अंतर्राष्ट्रीय मध्यस्थता", "कूटनीतिक वार्ता", "शांतिरक्षा मिशन", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 98,
  "question_en": "Which system features rule by a network of families?",
  "question_hi": "किस प्रणाली में परिवारों के नेटवर्क द्वारा शासन होता है?",
  "options_en": ["Nepotistic System", "Family Clans Rule", "Dynastic Governance", "All of the above"],
  "options_hi": ["भाई-भतीजावादी प्रणाली", "परिवार कबीलों का शासन", "वंशवादी शासन", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 99,
  "question_en": "What principle ensures protection of right to scientific research?",
  "question_hi": "कौन सा सिद्धांत वैज्ञानिक शोध के अधिकार के संरक्षण की गारंटी देता है?",
  "options_en": ["Scientific Freedom", "Research Liberty", "Academic Inquiry Rights", "All of the above"],
  "options_hi": ["वैज्ञानिक स्वतंत्रता", "शोध स्वतंत्रता", "शैक्षणिक जांच अधिकार", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
  "attempted": false,
  "selected": ""
},
{
  "num": 100,
  "question_en": "Which institution is responsible for ensuring food security?",
  "question_hi": "खाद्य सुरक्षा सुनिश्चित करने के लिए कौन सी संस्था जिम्मेदार है?",
  "options_en": ["Food and Agriculture Organization", "Agriculture Ministry", "Food Security Commission", "All of the above"],
  "options_hi": ["खाद्य और कृषि संगठन", "कृषि मंत्रालय", "खाद्य सुरक्षा आयोग", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
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