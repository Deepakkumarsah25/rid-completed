const questions =[
  {
    "num": 1,
    "question_en": "Who was the first emperor of the Maurya Empire?",
    "question_hi": "मौर्य साम्राज्य का प्रथम सम्राट कौन था?",
    "options_en": ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"],
    "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "समुद्रगुप्त"],
    "answer_en": "Chandragupta Maurya",
    "answer_hi": "चंद्रगुप्त मौर्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In which year did India gain independence?",
    "question_hi": "भारत को किस वर्ष स्वतंत्रता मिली?",
    "options_en": ["1945", "1947", "1950", "1942"],
    "options_hi": ["1945", "1947", "1950", "1942"],
    "answer_en": "1947",
    "answer_hi": "1947",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who built the Taj Mahal?",
    "question_hi": "ताजमहल किसने बनवाया?",
    "options_en": ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
    "options_hi": ["अकबर", "शाहजहाँ", "औरंगजेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which was the first battle of Panipat?",
    "question_hi": "पानीपत का पहला युद्ध कौन सा था?",
    "options_en": ["1526", "1556", "1761", "1857"],
    "options_hi": ["1526", "1556", "1761", "1857"],
    "answer_en": "1526",
    "answer_hi": "1526",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Who founded the Mughal Empire in India?",
    "question_hi": "भारत में मुगल साम्राज्य की स्थापना किसने की?",
    "options_en": ["Akbar", "Babur", "Humayun", "Aurangzeb"],
    "options_hi": ["अकबर", "बाबर", "हुमायूं", "औरंगजेब"],
    "answer_en": "Babur",
    "answer_hi": "बाबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Who was known as the 'Iron Man of India'?",
    "question_hi": "'भारत के लौह पुरुष' के रूप में किसे जाना जाता था?",
    "options_en": ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "B.R. Ambedkar", "Subhash Chandra Bose"],
    "options_hi": ["जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "बी.आर. अंबेडकर", "सुभाष चंद्र बोस"],
    "answer_en": "Sardar Vallabhbhai Patel",
    "answer_hi": "सरदार वल्लभभाई पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "When did the First World War begin?",
    "question_hi": "प्रथम विश्व युद्ध कब शुरू हुआ?",
    "options_en": ["1912", "1914", "1916", "1918"],
    "options_hi": ["1912", "1914", "1916", "1918"],
    "answer_en": "1914",
    "answer_hi": "1914",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की प्रथम महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Sarojini Naidu", "Indira Gandhi", "Mother Teresa", "Pratibha Patil"],
    "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "मदर टेरेसा", "प्रतिभा पाटिल"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which dynasty built the Khajuraho temples?",
    "question_hi": "खजुराहो के मंदिर किस राजवंश ने बनवाए?",
    "options_en": ["Gupta", "Chandela", "Maurya", "Mughal"],
    "options_hi": ["गुप्त", "चंदेल", "मौर्य", "मुगल"],
    "answer_en": "Chandela",
    "answer_hi": "चंदेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Who wrote 'Arthashastra'?",
    "question_hi": "'अर्थशास्त्र' किसने लिखा?",
    "options_en": ["Chanakya", "Kalidas", "Ved Vyas", "Panini"],
    "options_hi": ["चाणक्य", "कालिदास", "वेद व्यास", "पाणिनि"],
    "answer_en": "Chanakya",
    "answer_hi": "चाणक्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "When was the Battle of Plassey fought?",
    "question_hi": "प्लासी का युद्ध कब लड़ा गया?",
    "options_en": ["1757", "1761", "1764", "1775"],
    "options_hi": ["1757", "1761", "1764", "1775"],
    "answer_en": "1757",
    "answer_hi": "1757",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Who was the last Mughal Emperor?",
    "question_hi": "अंतिम मुगल सम्राट कौन थे?",
    "options_en": ["Akbar", "Aurangzeb", "Bahadur Shah Zafar", "Shah Jahan"],
    "options_hi": ["अकबर", "औरंगजेब", "बहादुर शाह ज़फर", "शाहजहाँ"],
    "answer_en": "Bahadur Shah Zafar",
    "answer_hi": "बहादुर शाह ज़फर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which empire was founded by Shivaji?",
    "question_hi": "शिवाजी ने किस साम्राज्य की स्थापना की?",
    "options_en": ["Mughal Empire", "Maratha Empire", "Vijayanagara Empire", "Gupta Empire"],
    "options_hi": ["मुगल साम्राज्य", "मराठा साम्राज्य", "विजयनगर साम्राज्य", "गुप्त साम्राज्य"],
    "answer_en": "Maratha Empire",
    "answer_hi": "मराठा साम्राज्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "When did the Indian Rebellion of 1857 begin?",
    "question_hi": "1857 का भारतीय विद्रोह कब शुरू हुआ?",
    "options_en": ["May 10, 1857", "June 15, 1857", "March 29, 1857", "August 15, 1857"],
    "options_hi": ["10 मई, 1857", "15 जून, 1857", "29 मार्च, 1857", "15 अगस्त, 1857"],
    "answer_en": "May 10, 1857",
    "answer_hi": "10 मई, 1857",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Who discovered the sea route to India?",
    "question_hi": "भारत के समुद्री मार्ग की खोज किसने की?",
    "options_en": ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "James Cook"],
    "options_hi": ["क्रिस्टोफर कोलंबस", "वास्को डी गामा", "मार्को पोलो", "जेम्स कुक"],
    "answer_en": "Vasco da Gama",
    "answer_hi": "वास्को डी गामा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which Chinese traveler visited India during Harsha's reign?",
    "question_hi": "हर्ष के शासनकाल के दौरान कौन सा चीनी यात्री भारत आया?",
    "options_en": ["Fa Xian", "Xuanzang", "I-Tsing", "Marco Polo"],
    "options_hi": ["फा शियान", "ह्वेनसांग", "ई-त्सिंग", "मार्को पोलो"],
    "answer_en": "Xuanzang",
    "answer_hi": "ह्वेनसांग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Who built the Red Fort in Delhi?",
    "question_hi": "दिल्ली में लाल किला किसने बनवाया?",
    "options_en": ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
    "options_hi": ["अकबर", "शाहजहाँ", "औरंगजेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "When did the Jallianwala Bagh massacre occur?",
    "question_hi": "जलियांवाला बाग हत्याकांड कब हुआ?",
    "options_en": ["1917", "1919", "1921", "1930"],
    "options_hi": ["1917", "1919", "1921", "1930"],
    "answer_en": "1919",
    "answer_hi": "1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Who was the founder of the Gupta Empire?",
    "question_hi": "गुप्त साम्राज्य के संस्थापक कौन थे?",
    "options_en": ["Chandragupta I", "Samudragupta", "Chandragupta II", "Skandagupta"],
    "options_hi": ["चंद्रगुप्त प्रथम", "समुद्रगुप्त", "चंद्रगुप्त द्वितीय", "स्कंदगुप्त"],
    "answer_en": "Chandragupta I",
    "answer_hi": "चंद्रगुप्त प्रथम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which British Governor General introduced the Doctrine of Lapse?",
    "question_hi": "किस ब्रिटिश गवर्नर जनरल ने व्यपगत सिद्धांत लागू किया?",
    "options_en": ["Lord Dalhousie", "Lord Cornwallis", "Lord Wellesley", "Lord William Bentinck"],
    "options_hi": ["लॉर्ड डलहौजी", "लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेजली", "लॉर्ड विलियम बेंटिक"],
    "answer_en": "Lord Dalhousie",
    "answer_hi": "लॉर्ड डलहौजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Who was the first President of the Indian National Congress?",
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
    "options_en": ["Dadabhai Naoroji", "W.C. Bonnerjee", "A.O. Hume", "Badruddin Tyabji"],
    "options_hi": ["दादाभाई नौरोजी", "डब्ल्यू.सी. बनर्जी", "ए.ओ. ह्यूम", "बदरुद्दीन तैयबजी"],
    "answer_en": "W.C. Bonnerjee",
    "answer_hi": "डब्ल्यू.सी. बनर्जी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which battle established British supremacy in India?",
    "question_hi": "किस युद्ध ने भारत में ब्रिटिश सर्वोच्चता स्थापित की?",
    "options_en": ["Battle of Plassey", "Battle of Buxar", "Battle of Panipat", "Battle of Talikota"],
    "options_hi": ["प्लासी का युद्ध", "बक्सर का युद्ध", "पानीपत का युद्ध", "तालीकोटा का युद्ध"],
    "answer_en": "Battle of Buxar",
    "answer_hi": "बक्सर का युद्ध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Who built the Qutub Minar?",
    "question_hi": "कुतुब मीनार किसने बनवाया?",
    "options_en": ["Qutub-ud-din Aibak", "Iltutmish", "Alauddin Khilji", "Firoz Shah Tughlaq"],
    "options_hi": ["कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "अलाउद्दीन खिलजी", "फिरोज शाह तुगलक"],
    "answer_en": "Qutub-ud-din Aibak",
    "answer_hi": "कुतुब-उद-दीन ऐबक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "When was the Salt March led by Mahatma Gandhi?",
    "question_hi": "महात्मा गांधी द्वारा नमक मार्च कब आयोजित किया गया?",
    "options_en": ["1928", "1930", "1932", "1934"],
    "options_hi": ["1928", "1930", "1932", "1934"],
    "answer_en": "1930",
    "answer_hi": "1930",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which dynasty built the Sun Temple at Konark?",
    "question_hi": "कोणार्क के सूर्य मंदिर का निर्माण किस राजवंश ने करवाया?",
    "options_en": ["Chola", "Ganga", "Chandela", "Pallava"],
    "options_hi": ["चोल", "गंग", "चंदेल", "पल्लव"],
    "answer_en": "Ganga",
    "answer_hi": "गंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Who was the first Governor General of Bengal?",
    "question_hi": "बंगाल के प्रथम गवर्नर जनरल कौन थे?",
    "options_en": ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord William Bentinck"],
    "options_hi": ["वारेन हेस्टिंग्स", "लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेजली", "लॉर्ड विलियम बेंटिक"],
    "answer_en": "Warren Hastings",
    "answer_hi": "वारेन हेस्टिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which empire built the Ajanta Caves?",
    "question_hi": "अजंता गुफाओं का निर्माण किस साम्राज्य ने करवाया?",
    "options_en": ["Gupta", "Vakataka", "Maurya", "Satavahana"],
    "options_hi": ["गुप्त", "वाकाटक", "मौर्य", "सातवाहन"],
    "answer_en": "Vakataka",
    "answer_hi": "वाकाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Who started the Home Rule Movement?",
    "question_hi": "होम रूल आंदोलन किसने शुरू किया?",
    "options_en": ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Annie Besant", "B.R. Ambedkar"],
    "options_hi": ["महात्मा गांधी", "बाल गंगाधर तिलक", "एनी बेसेंट", "बी.आर. अंबेडकर"],
    "answer_en": "Annie Besant",
    "answer_hi": "एनी बेसेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "When did Alexander the Great invade India?",
    "question_hi": "सिकंदर महान ने भारत पर कब आक्रमण किया?",
    "options_en": ["327 BCE", "326 BCE", "325 BCE", "324 BCE"],
    "options_hi": ["327 ईसा पूर्व", "326 ईसा पूर्व", "325 ईसा पूर्व", "324 ईसा पूर्व"],
    "answer_en": "326 BCE",
    "answer_hi": "326 ईसा पूर्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Who was the founder of the Sikh religion?",
    "question_hi": "सिख धर्म के संस्थापक कौन थे?",
    "options_en": ["Guru Nanak", "Guru Gobind Singh", "Guru Arjan Dev", "Guru Tegh Bahadur"],
    "options_hi": ["गुरु नानक", "गुरु गोबिंद सिंह", "गुरु अर्जुन देव", "गुरु तेग बहादुर"],
    "answer_en": "Guru Nanak",
    "answer_hi": "गुरु नानक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which battle marked the beginning of Muslim rule in India?",
    "question_hi": "किस युद्ध ने भारत में मुस्लिम शासन की शुरुआत की?",
    "options_en": ["First Battle of Tarain", "Battle of Plassey", "Battle of Haldighati", "Battle of Khanwa"],
    "options_hi": ["तराइन का प्रथम युद्ध", "प्लासी का युद्ध", "हल्दीघाटी का युद्ध", "खानवा का युद्ध"],
    "answer_en": "First Battle of Tarain",
    "answer_hi": "तराइन का प्रथम युद्ध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Who built the Sanchi Stupa?",
    "question_hi": "सांची स्तूप किसने बनवाया?",
    "options_en": ["Ashoka", "Kanishka", "Harsha", "Samudragupta"],
    "options_hi": ["अशोक", "कनिष्क", "हर्ष", "समुद्रगुप्त"],
    "answer_en": "Ashoka",
    "answer_hi": "अशोक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "When was the Partition of Bengal revoked?",
    "question_hi": "बंगाल विभाजन कब रद्द किया गया?",
    "options_en": ["1906", "1911", "1919", "1947"],
    "options_hi": ["1906", "1911", "1919", "1947"],
    "answer_en": "1911",
    "answer_hi": "1911",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Who was the founder of the Vijayanagara Empire?",
    "question_hi": "विजयनगर साम्राज्य के संस्थापक कौन थे?",
    "options_en": ["Harihara I", "Krishnadevaraya", "Bukka I", "Devaraya II"],
    "options_hi": ["हरिहर प्रथम", "कृष्णदेवराय", "बुक्का प्रथम", "देवराय द्वितीय"],
    "answer_en": "Harihara I",
    "answer_hi": "हरिहर प्रथम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Act transferred power from East India Company to British Crown?",
    "question_hi": "किस अधिनियम ने ईस्ट इंडिया कंपनी से ब्रिटिश क्राउन को सत्ता हस्तांतरित की?",
    "options_en": ["Regulating Act 1773", "Pitt's India Act 1784", "Government of India Act 1858", "Indian Councils Act 1861"],
    "options_hi": ["रेगुलेटिंग एक्ट 1773", "पिट्स इंडिया एक्ट 1784", "भारत सरकार अधिनियम 1858", "भारतीय परिषद अधिनियम 1861"],
    "answer_en": "Government of India Act 1858",
    "answer_hi": "भारत सरकार अधिनियम 1858",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Who was known as 'Lion of Punjab'?",
    "question_hi": "'पंजाब के शेर' के रूप में किसे जाना जाता था?",
    "options_en": ["Lala Lajpat Rai", "Bhagat Singh", "Udham Singh", "Kartar Singh Sarabha"],
    "options_hi": ["लाला लाजपत राय", "भगत सिंह", "उधम सिंह", "कारतार सिंह सराभा"],
    "answer_en": "Lala Lajpat Rai",
    "answer_hi": "लाला लाजपत राय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which dynasty built the Ellora Caves?",
    "question_hi": "एलोरा गुफाओं का निर्माण किस राजवंश ने करवाया?",
    "options_en": ["Rashtrakuta", "Chalukya", "Pallava", "Chola"],
    "options_hi": ["राष्ट्रकूट", "चालुक्य", "पल्लव", "चोल"],
    "answer_en": "Rashtrakuta",
    "answer_hi": "राष्ट्रकूट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "When was the Indian National Army formed?",
    "question_hi": "भारतीय राष्ट्रीय सेना कब बनाई गई?",
    "options_en": ["1940", "1942", "1943", "1945"],
    "options_hi": ["1940", "1942", "1943", "1945"],
    "answer_en": "1942",
    "answer_hi": "1942",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Who built the Brihadeshwara Temple?",
    "question_hi": "बृहदेश्वर मंदिर किसने बनवाया?",
    "options_en": ["Rajaraja Chola I", "Krishnadevaraya", "Rajendra Chola I", "Hoysala"],
    "options_hi": ["राजराज चोल प्रथम", "कृष्णदेवराय", "राजेंद्र चोल प्रथम", "होयसल"],
    "answer_en": "Rajaraja Chola I",
    "answer_hi": "राजराज चोल प्रथम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which treaty ended the First Anglo-Maratha War?",
    "question_hi": "किस संधि ने प्रथम आंग्ल-मराठा युद्ध समाप्त किया?",
    "options_en": ["Treaty of Salbai", "Treaty of Bassein", "Treaty of Purandar", "Treaty of Mangalore"],
    "options_hi": ["सालबाई की संधि", "बेसिन की संधि", "पुरंदर की संधि", "मंगलौर की संधि"],
    "answer_en": "Treaty of Salbai",
    "answer_hi": "सालबाई की संधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Who was the first Indian to go to space?",
    "question_hi": "अंतरिक्ष में जाने वाले प्रथम भारतीय कौन थे?",
    "options_en": ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Vikram Sarabhai"],
    "options_hi": ["कल्पना चावला", "राकेश शर्मा", "सुनीता विलियम्स", "विक्रम साराभाई"],
    "answer_en": "Rakesh Sharma",
    "answer_hi": "राकेश शर्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "When did the Civil Disobedience Movement start?",
    "question_hi": "सविनय अवज्ञा आंदोलन कब शुरू हुआ?",
    "options_en": ["1920", "1930", "1940", "1942"],
    "options_hi": ["1920", "1930", "1940", "1942"],
    "answer_en": "1930",
    "answer_hi": "1930",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Who founded the city of Jaipur?",
    "question_hi": "जयपुर शहर की स्थापना किसने की?",
    "options_en": ["Maharaja Sawai Jai Singh II", "Maharaja Man Singh I", "Maharaja Pratap Singh", "Maharaja Ram Singh"],
    "options_hi": ["महाराजा सवाई जय सिंह द्वितीय", "महाराजा मान सिंह प्रथम", "महाराजा प्रताप सिंह", "महाराजा राम सिंह"],
    "answer_en": "Maharaja Sawai Jai Singh II",
    "answer_hi": "महाराजा सवाई जय सिंह द्वितीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which battle ended Portuguese supremacy in India?",
    "question_hi": "किस युद्ध ने भारत में पुर्तगाली सर्वोच्चता को समाप्त किया?",
    "options_en": ["Battle of Diu", "Battle of Goa", "Battle of Cochin", "Battle of Calicut"],
    "options_hi": ["दीव का युद्ध", "गोवा का युद्ध", "कोचीन का युद्ध", "कालीकट का युद्ध"],
    "answer_en": "Battle of Diu",
    "answer_hi": "दीव का युद्ध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Who was the first Muslim ruler of Delhi?",
    "question_hi": "दिल्ली का प्रथम मुस्लिम शासक कौन था?",
    "options_en": ["Qutub-ud-din Aibak", "Iltutmish", "Balban", "Alauddin Khilji"],
    "options_hi": ["कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "बलबन", "अलाउद्दीन खिलजी"],
    "answer_en": "Qutub-ud-din Aibak",
    "answer_hi": "कुतुब-उद-दीन ऐबक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "When was the Simon Commission appointed?",
    "question_hi": "साइमन कमीशन कब नियुक्त किया गया?",
    "options_en": ["1925", "1927", "1929", "1931"],
    "options_hi": ["1925", "1927", "1929", "1931"],
    "answer_en": "1927",
    "answer_hi": "1927",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Who built the Gol Gumbaz?",
    "question_hi": "गोल गुम्बज किसने बनवाया?",
    "options_en": ["Mohammed Adil Shah", "Ibrahim Adil Shah", "Yusuf Adil Shah", "Ali Adil Shah"],
    "options_hi": ["मोहम्मद आदिल शाह", "इब्राहिम आदिल शाह", "यूसुफ आदिल शाह", "अली आदिल शाह"],
    "answer_en": "Mohammed Adil Shah",
    "answer_hi": "मोहम्मद आदिल शाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which empire was known as 'Golden Age of India'?",
    "question_hi": "किस साम्राज्य को 'भारत का स्वर्ण युग' कहा जाता था?",
    "options_en": ["Maurya Empire", "Gupta Empire", "Mughal Empire", "Maratha Empire"],
    "options_hi": ["मौर्य साम्राज्य", "गुप्त साम्राज्य", "मुगल साम्राज्य", "मराठा साम्राज्य"],
    "answer_en": "Gupta Empire",
    "answer_hi": "गुप्त साम्राज्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Who started the newspaper 'Kesari'?",
    "question_hi": "'केसरी' अखबार किसने शुरू किया?",
    "options_en": ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Gopal Krishna Gokhale", "Lala Lajpat Rai"],
    "options_hi": ["बाल गंगाधर तिलक", "महात्मा गांधी", "गोपाल कृष्ण गोखले", "लाला लाजपत राय"],
    "answer_en": "Bal Gangadhar Tilak",
    "answer_hi": "बाल गंगाधर तिलक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "When was the Battle of Haldighati fought?",
    "question_hi": "हल्दीघाटी का युद्ध कब लड़ा गया?",
    "options_en": ["1568", "1576", "1582", "1590"],
    "options_hi": ["1568", "1576", "1582", "1590"],
    "answer_en": "1576",
    "answer_hi": "1576",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Who founded the Bahmani Kingdom?",
    "question_hi": "बहमनी साम्राज्य की स्थापना किसने की?",
    "options_en": ["Alauddin Bahman Shah", "Mohammed Shah I", "Firoz Shah", "Ahmed Shah"],
    "options_hi": ["अलाउद्दीन बहमन शाह", "मोहम्मद शाह प्रथम", "फिरोज शाह", "अहमद शाह"],
    "answer_en": "Alauddin Bahman Shah",
    "answer_hi": "अलाउद्दीन बहमन शाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which Act introduced dyarchy in provinces?",
    "question_hi": "किस अधिनियम ने प्रांतों में द्वैध शासन प्रणाली शुरू की?",
    "options_en": ["Government of India Act 1909", "Government of India Act 1919", "Government of India Act 1935", "Indian Independence Act 1947"],
    "options_hi": ["भारत सरकार अधिनियम 1909", "भारत सरकार अधिनियम 1919", "भारत सरकार अधिनियम 1935", "भारतीय स्वतंत्रता अधिनियम 1947"],
    "answer_en": "Government of India Act 1919",
    "answer_hi": "भारत सरकार अधिनियम 1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Who built the Charminar?",
    "question_hi": "चारमीनार किसने बनवाया?",
    "options_en": ["Quli Qutb Shah", "Ibrahim Qutb Shah", "Mohammed Quli Qutb Shah", "Abdullah Qutb Shah"],
    "options_hi": ["कुली कुतुब शाह", "इब्राहिम कुतुब शाह", "मोहम्मद कुली कुतुब शाह", "अब्दुल्ला कुतुब शाह"],
    "answer_en": "Mohammed Quli Qutb Shah",
    "answer_hi": "मोहम्मद कुली कुतुब शाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "When did the Quit India Movement begin?",
    "question_hi": "भारत छोड़ो आंदोलन कब शुरू हुआ?",
    "options_en": ["1940", "1942", "1944", "1946"],
    "options_hi": ["1940", "1942", "1944", "1946"],
    "answer_en": "1942",
    "answer_hi": "1942",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Who was the first Sultan of Delhi to issue regular currency?",
    "question_hi": "नियमित मुद्रा जारी करने वाला दिल्ली का पहला सुल्तान कौन था?",
    "options_en": ["Iltutmish", "Qutub-ud-din Aibak", "Balban", "Alauddin Khilji"],
    "options_hi": ["इल्तुतमिश", "कुतुब-उद-दीन ऐबक", "बलबन", "अलाउद्दीन खिलजी"],
    "answer_en": "Iltutmish",
    "answer_hi": "इल्तुतमिश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which Portuguese explorer discovered Brazil?",
    "question_hi": "किस पुर्तगाली अन्वेषक ने ब्राजील की खोज की?",
    "options_en": ["Vasco da Gama", "Pedro Álvares Cabral", "Ferdinand Magellan", "Christopher Columbus"],
    "options_hi": ["वास्को डी गामा", "पेड्रो अल्वारेस कैब्रल", "फर्डिनेंड मैगलन", "क्रिस्टोफर कोलंबस"],
    "answer_en": "Pedro Álvares Cabral",
    "answer_hi": "पेड्रो अल्वारेस कैब्रल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Who founded the city of Hyderabad?",
    "question_hi": "हैदराबाद शहर की स्थापना किसने की?",
    "options_en": ["Mohammed Quli Qutb Shah", "Asaf Jah I", "Ibrahim Qutb Shah", "Abdullah Qutb Shah"],
    "options_hi": ["मोहम्मद कुली कुतुब शाह", "आसफ जाह प्रथम", "इब्राहिम कुतुब शाह", "अब्दुल्ला कुतुब शाह"],
    "answer_en": "Mohammed Quli Qutb Shah",
    "answer_hi": "मोहम्मद कुली कुतुब शाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "When was the Rowlatt Act passed?",
    "question_hi": "रौलट एक्ट कब पारित किया गया?",
    "options_en": ["1917", "1919", "1921", "1923"],
    "options_hi": ["1917", "1919", "1921", "1923"],
    "answer_en": "1919",
    "answer_hi": "1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Who built the Buland Darwaza?",
    "question_hi": "बुलंद दरवाजा किसने बनवाया?",
    "options_en": ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    "options_hi": ["अकबर", "जहाँगीर", "शाहजहाँ", "औरंगजेब"],
    "answer_en": "Akbar",
    "answer_hi": "अकबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which battle marked the end of French ambitions in India?",
    "question_hi": "किस युद्ध ने भारत में फ्रांसीसी महत्वाकांक्षाओं का अंत किया?",
    "options_en": ["Battle of Wandiwash", "Battle of Plassey", "Battle of Buxar", "Battle of Panipat"],
    "options_hi": ["वांडीवाश का युद्ध", "प्लासी का युद्ध", "बक्सर का युद्ध", "पानीपत का युद्ध"],
    "answer_en": "Battle of Wandiwash",
    "answer_hi": "वांडीवाश का युद्ध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Who was the founder of the Pala Dynasty?",
    "question_hi": "पाल वंश के संस्थापक कौन थे?",
    "options_en": ["Gopala", "Dharmapala", "Devapala", "Mahipala"],
    "options_hi": ["गोपाल", "धर्मपाल", "देवपाल", "महिपाल"],
    "answer_en": "Gopala",
    "answer_hi": "गोपाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "When was the Treaty of Allahabad signed?",
    "question_hi": "इलाहाबाद की संधि कब हुई?",
    "options_en": ["1757", "1765", "1772", "1784"],
    "options_hi": ["1757", "1765", "1772", "1784"],
    "answer_en": "1765",
    "answer_hi": "1765",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Who built the Jama Masjid in Delhi?",
    "question_hi": "दिल्ली की जामा मस्जिद किसने बनवाई?",
    "options_en": ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
    "options_hi": ["अकबर", "शाहजहाँ", "औरंगजेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which dynasty built the Dilwara Temples?",
    "question_hi": "दिलवाड़ा मंदिरों का निर्माण किस राजवंश ने करवाया?",
    "options_en": ["Solanki", "Paramara", "Chandela", "Pratihara"],
    "options_hi": ["सोलंकी", "परमार", "चंदेल", "प्रतिहार"],
    "answer_en": "Solanki",
    "answer_hi": "सोलंकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Who started the 'Young India' newspaper?",
    "question_hi": "'यंग इंडिया' अखबार किसने शुरू किया?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Bal Gangadhar Tilak"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "बाल गंगाधर तिलक"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "When did the Third Battle of Panipat take place?",
    "question_hi": "पानीपत का तीसरा युद्ध कब हुआ?",
    "options_en": ["1526", "1556", "1761", "1857"],
    "options_hi": ["1526", "1556", "1761", "1857"],
    "answer_en": "1761",
    "answer_hi": "1761",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Who was the founder of the Chola Dynasty?",
    "question_hi": "चोल वंश के संस्थापक कौन थे?",
    "options_en": ["Vijayalaya", "Rajaraja I", "Rajendra I", "Karikala"],
    "options_hi": ["विजयालय", "राजराजा प्रथम", "राजेंद्र प्रथम", "करिकाल"],
    "answer_en": "Vijayalaya",
    "answer_hi": "विजयालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which Act established the Supreme Court in Calcutta?",
    "question_hi": "किस अधिनियम ने कलकत्ता में सुप्रीम कोर्ट की स्थापना की?",
    "options_en": ["Regulating Act 1773", "Pitt's India Act 1784", "Charter Act 1813", "Charter Act 1833"],
    "options_hi": ["रेगुलेटिंग एक्ट 1773", "पिट्स इंडिया एक्ट 1784", "चार्टर एक्ट 1813", "चार्टर एक्ट 1833"],
    "answer_en": "Regulating Act 1773",
    "answer_hi": "रेगुलेटिंग एक्ट 1773",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Who built the Fatehpur Sikri?",
    "question_hi": "फतेहपुर सीकरी किसने बनवाया?",
    "options_en": ["Akbar", "Jahangir", "Shah Jahan", "Humayun"],
    "options_hi": ["अकबर", "जहाँगीर", "शाहजहाँ", "हुमायूं"],
    "answer_en": "Akbar",
    "answer_hi": "अकबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "When was the Battle of Buxar fought?",
    "question_hi": "बक्सर का युद्ध कब लड़ा गया?",
    "options_en": ["1757", "1764", "1769", "1774"],
    "options_hi": ["1757", "1764", "1769", "1774"],
    "answer_en": "1764",
    "answer_hi": "1764",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Who was the founder of the Slave Dynasty?",
    "question_hi": "गुलाम वंश के संस्थापक कौन थे?",
    "options_en": ["Qutub-ud-din Aibak", "Iltutmish", "Balban", "Razia Sultana"],
    "options_hi": ["कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "बलबन", "रजिया सुल्तान"],
    "answer_en": "Qutub-ud-din Aibak",
    "answer_hi": "कुतुब-उद-दीन ऐबक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which treaty ended the Third Anglo-Mysore War?",
    "question_hi": "किस संधि ने तीसरा आंग्ल-मैसूर युद्ध समाप्त किया?",
    "options_en": ["Treaty of Mangalore", "Treaty of Seringapatam", "Treaty of Madras", "Treaty of Hyderabad"],
    "options_hi": ["मंगलौर की संधि", "श्रीरंगपट्टनम की संधि", "मद्रास की संधि", "हैदराबाद की संधि"],
    "answer_en": "Treaty of Seringapatam",
    "answer_hi": "श्रीरंगपट्टनम की संधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Who built the Lotus Temple?",
    "question_hi": "लोटस टेम्पल किसने बनवाया?",
    "options_en": ["Fariborz Sahba", "B.V. Doshi", "Charles Correa", "Laurie Baker"],
    "options_hi": ["फरीबोर्ज सहबा", "बी.वी. दोशी", "चार्ल्स कोरिया", "लॉरी बेकर"],
    "answer_en": "Fariborz Sahba",
    "answer_hi": "फरीबोर्ज सहबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "When was the Battle of Talikota fought?",
    "question_hi": "तालीकोटा का युद्ध कब लड़ा गया?",
    "options_en": ["1526", "1556", "1565", "1576"],
    "options_hi": ["1526", "1556", "1565", "1576"],
    "answer_en": "1565",
    "answer_hi": "1565",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Who was the first Indian to win Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    "options_en": ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Har Gobind Khorana"],
    "options_hi": ["सी.वी. रमन", "रबीन्द्रनाथ टैगोर", "मदर टेरेसा", "हर गोबिंद खुराना"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रबीन्द्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which empire built the Kailasa Temple at Ellora?",
    "question_hi": "एलोरा में कैलाश मंदिर का निर्माण किस साम्राज्य ने करवाया?",
    "options_en": ["Rashtrakuta", "Chalukya", "Pallava", "Chola"],
    "options_hi": ["राष्ट्रकूट", "चालुक्य", "पल्लव", "चोल"],
    "answer_en": "Rashtrakuta",
    "answer_hi": "राष्ट्रकूट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Who started the 'Ghadar Movement'?",
    "question_hi": "'गदर आंदोलन' किसने शुरू किया?",
    "options_en": ["Lala Hardayal", "Bhagat Singh", "Sohan Singh Bhakna", "Rash Behari Bose"],
    "options_hi": ["लाला हरदयाल", "भगत सिंह", "सोहन सिंह भकना", "रास बिहारी बोस"],
    "answer_en": "Lala Hardayal",
    "answer_hi": "लाला हरदयाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "When was the Battle of Khanwa fought?",
    "question_hi": "खानवा का युद्ध कब लड़ा गया?",
    "options_en": ["1526", "1527", "1529", "1530"],
    "options_hi": ["1526", "1527", "1529", "1530"],
    "answer_en": "1527",
    "answer_hi": "1527",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Who built the Victoria Memorial?",
    "question_hi": "विक्टोरिया मेमोरियल किसने बनवाया?",
    "options_en": ["William Emerson", "Edwin Lutyens", "Herbert Baker", "John Marshall"],
    "options_hi": ["विलियम एमर्सन", "एडविन लुटियंस", "हर्बर्ट बेकर", "जॉन मार्शल"],
    "answer_en": "William Emerson",
    "answer_hi": "विलियम एमर्सन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which dynasty built the Konark Sun Temple?",
    "question_hi": "कोणार्क सूर्य मंदिर का निर्माण किस राजवंश ने करवाया?",
    "options_en": ["Ganga", "Surya", "Naga", "Bhoi"],
    "options_hi": ["गंग", "सूर्य", "नाग", "भोई"],
    "answer_en": "Ganga",
    "answer_hi": "गंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Who started the 'Swadeshi Movement'?",
    "question_hi": "'स्वदेशी आंदोलन' किसने शुरू किया?",
    "options_en": ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Surendranath Banerjee", "Aurobindo Ghosh"],
    "options_hi": ["महात्मा गांधी", "बाल गंगाधर तिलक", "सुरेंद्रनाथ बनर्जी", "अरविंद घोष"],
    "answer_en": "Surendranath Banerjee",
    "answer_hi": "सुरेंद्रनाथ बनर्जी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "When was the Battle of Chausa fought?",
    "question_hi": "चौसा का युद्ध कब लड़ा गया?",
    "options_en": ["1539", "1540", "1556", "1576"],
    "options_hi": ["1539", "1540", "1556", "1576"],
    "answer_en": "1539",
    "answer_hi": "1539",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Who built the Humayun's Tomb?",
    "question_hi": "हुमायूं का मकबरा किसने बनवाया?",
    "options_en": ["Akbar", "Haji Begum", "Shah Jahan", "Aurangzeb"],
    "options_hi": ["अकबर", "हाजी बेगम", "शाहजहाँ", "औरंगजेब"],
    "answer_en": "Haji Begum",
    "answer_hi": "हाजी बेगम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which battle established Maratha supremacy in North India?",
    "question_hi": "किस युद्ध ने उत्तर भारत में मराठा सर्वोच्चता स्थापित की?",
    "options_en": ["Battle of Delhi", "Battle of Panipat", "Battle of Plassey", "Battle of Buxar"],
    "options_hi": ["दिल्ली का युद्ध", "पानीपत का युद्ध", "प्लासी का युद्ध", "बक्सर का युद्ध"],
    "answer_en": "Battle of Delhi",
    "answer_hi": "दिल्ली का युद्ध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Who was the founder of the Satavahana Dynasty?",
    "question_hi": "सातवाहन वंश के संस्थापक कौन थे?",
    "options_en": ["Simuka", "Gautamiputra Satakarni", "Hala", "Vasishthiputra Pulumavi"],
    "options_hi": ["सिमुक", "गौतमीपुत्र शातकर्णी", "हाल", "वसिष्ठीपुत्र पुलुमावी"],
    "answer_en": "Simuka",
    "answer_hi": "सिमुक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "When was the Treaty of Purandar signed?",
    "question_hi": "पुरंदर की संधि कब हुई?",
    "options_en": ["1665", "1670", "1675", "1680"],
    "options_hi": ["1665", "1670", "1675", "1680"],
    "answer_en": "1665",
    "answer_hi": "1665",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Who built the Rashtrapati Bhavan?",
    "question_hi": "राष्ट्रपति भवन किसने बनवाया?",
    "options_en": ["Edwin Lutyens", "Herbert Baker", "Robert Tor Russell", "John Begg"],
    "options_hi": ["एडविन लुटियंस", "हर्बर्ट बेकर", "रॉबर्ट टॉर रसेल", "जॉन बेग"],
    "answer_en": "Edwin Lutyens",
    "answer_hi": "एडविन लुटियंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which dynasty built the Hampi monuments?",
    "question_hi": "हंपी स्मारकों का निर्माण किस राजवंश ने करवाया?",
    "options_en": ["Vijayanagara", "Chola", "Pallava", "Chalukya"],
    "options_hi": ["विजयनगर", "चोल", "पल्लव", "चालुक्य"],
    "answer_en": "Vijayanagara",
    "answer_hi": "विजयनगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Who started the 'Tebhaga Movement'?",
    "question_hi": "'तेभागा आंदोलन' किसने शुरू किया?",
    "options_en": ["Bengal Provincial Kisan Sabha", "Mahatma Gandhi", "Subhash Chandra Bose", "Jawaharlal Nehru"],
    "options_hi": ["बंगाल प्रांतीय किसान सभा", "महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
    "answer_en": "Bengal Provincial Kisan Sabha",
    "answer_hi": "बंगाल प्रांतीय किसान सभा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "When was the Battle of Ghaghra fought?",
    "question_hi": "घाघरा का युद्ध कब लड़ा गया?",
    "options_en": ["1526", "1529", "1531", "1539"],
    "options_hi": ["1526", "1529", "1531", "1539"],
    "answer_en": "1529",
    "answer_hi": "1529",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Who built the Itmad-ud-Daula's Tomb?",
    "question_hi": "इत्माद-उद-दौला का मकबरा किसने बनवाया?",
    "options_en": ["Nur Jahan", "Jahangir", "Shah Jahan", "Aurangzeb"],
    "options_hi": ["नूरजहाँ", "जहाँगीर", "शाहजहाँ", "औरंगजेब"],
    "answer_en": "Nur Jahan",
    "answer_hi": "नूरजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which battle marked the beginning of British rule in India?",
    "question_hi": "किस युद्ध ने भारत में ब्रिटिश शासन की शुरुआत की?",
    "options_en": ["Battle of Plassey", "Battle of Buxar", "Battle of Panipat", "Battle of Wandiwash"],
    "options_hi": ["प्लासी का युद्ध", "बक्सर का युद्ध", "पानीपत का युद्ध", "वांडीवाश का युद्ध"],
    "answer_en": "Battle of Plassey",
    "answer_hi": "प्लासी का युद्ध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Who was the founder of the Pallava Dynasty?",
    "question_hi": "पल्लव वंश के संस्थापक कौन थे?",
    "options_en": ["Simhavishnu", "Mahendravarman I", "Narasimhavarman I", "Dantivarman"],
    "options_hi": ["सिंहविष्णु", "महेंद्रवर्मन प्रथम", "नरसिंहवर्मन प्रथम", "दंतिवर्मन"],
    "answer_en": "Simhavishnu",
    "answer_hi": "सिंहविष्णु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "When was the Treaty of Bassein signed?",
    "question_hi": "बेसिन की संधि कब हुई?",
    "options_en": ["1802", "1818", "1826", "1849"],
    "options_hi": ["1802", "1818", "1826", "1849"],
    "answer_en": "1802",
    "answer_hi": "1802",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Who built the Gateway of India?",
    "question_hi": "गेटवे ऑफ इंडिया किसने बनवाया?",
    "options_en": ["George Wittet", "Edwin Lutyens", "Herbert Baker", "John Begg"],
    "options_hi": ["जॉर्ज विटेट", "एडविन लुटियंस", "हर्बर्ट बेकर", "जॉन बेग"],
    "answer_en": "George Wittet",
    "answer_hi": "जॉर्ज विटेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which dynasty built the Meenakshi Temple?",
    "question_hi": "मीनाक्षी मंदिर का निर्माण किस राजवंश ने करवाया?",
    "options_en": ["Nayaka", "Pandya", "Chola", "Vijayanagara"],
    "options_hi": ["नायक", "पांड्य", "चोल", "विजयनगर"],
    "answer_en": "Nayaka",
    "answer_hi": "नायक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Who started the 'Eka Movement'?",
    "question_hi": "'एका आंदोलन' किसने शुरू किया?",
    "options_en": ["Madari Pasi", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
    "options_hi": ["मदारी पासी", "महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल"],
    "answer_en": "Madari Pasi",
    "answer_hi": "मदारी पासी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "When was the Battle of Chanderi fought?",
    "question_hi": "चंदेरी का युद्ध कब लड़ा गया?",
    "options_en": ["1527", "1528", "1529", "1530"],
    "options_hi": ["1527", "1528", "1529", "1530"],
    "answer_en": "1528",
    "answer_hi": "1528",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Who built the Cellular Jail?",
    "question_hi": "सेल्युलर जेल किसने बनवाया?",
    "options_en": ["British Government", "Portuguese", "French", "Dutch"],
    "options_hi": ["ब्रिटिश सरकार", "पुर्तगाली", "फ्रांसीसी", "डच"],
    "answer_en": "British Government",
    "answer_hi": "ब्रिटिश सरकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which battle established British control over Punjab?",
    "question_hi": "किस युद्ध ने पंजाब पर ब्रिटिश नियंत्रण स्थापित किया?",
    "options_en": ["Battle of Mudki", "Battle of Ferozeshah", "Battle of Sobraon", "Battle of Chillianwala"],
    "options_hi": ["मुदकी का युद्ध", "फिरोजशाह का युद्ध", "सोबराओं का युद्ध", "चिलियानवाला का युद्ध"],
    "answer_en": "Battle of Sobraon",
    "answer_hi": "सोबराओं का युद्ध",
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