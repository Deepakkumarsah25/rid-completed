const questions = [
  {
    num: 1,
    question_en: "Which is the national animal of India?",
    question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
    options_en: ["Lion", "Elephant", "Tiger", "Leopard"],
    options_hi: ["शेर", "हाथी", "बाघ", "तेंदुआ"],
    answer_en: "Tiger",
    answer_hi: "बाघ",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "The Indian Standard Time (IST) is based on which longitude?",
    question_hi: "भारतीय मानक समय (IST) किस देशांतर पर आधारित है?",
    options_en: ["82.5° E", "75.5° E", "90.5° E", "68.5° E"],
    options_hi: ["82.5° पूर्व", "75.5° पूर्व", "90.5° पूर्व", "68.5° पूर्व"],
    answer_en: "82.5° E",
    answer_hi: "82.5° पूर्व",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which state has the longest coastline in India?",
    question_hi: "भारत में सबसे लंबी तटरेखा किस राज्य की है?",
    options_en: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Gujarat"],
    options_hi: ["केरल", "तमिलनाडु", "आंध्र प्रदेश", "गुजरात"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "The 'City of Pearls' in India is:",
    question_hi: "भारत का 'मोतियों का शहर' है:",
    options_en: ["Surat", "Jaipur", "Hyderabad", "Varanasi"],
    options_hi: ["सूरत", "जयपुर", "हैदराबाद", "वाराणसी"],
    answer_en: "Hyderabad",
    answer_hi: "हैदराबाद",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which vitamin is obtained from sunlight?",
    question_hi: "सूरज की रोशनी से कौन सा विटामिन प्राप्त होता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन डी",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "The largest delta in the world is:",
    question_hi: "दुनिया का सबसे बड़ा डेल्टा है:",
    options_en: ["Amazon Delta", "Nile Delta", "Ganges-Brahmaputra Delta", "Mississippi Delta"],
    options_hi: ["अमेज़न डेल्टा", "नील डेल्टा", "गंगा-ब्रह्मपुत्र डेल्टा", "मिसिसिपी डेल्टा"],
    answer_en: "Ganges-Brahmaputra Delta",
    answer_hi: "गंगा-ब्रह्मपुत्र डेल्टा",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which device converts mechanical energy into electrical energy?",
    question_hi: "कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
    options_en: ["Motor", "Generator", "Transformer", "Rectifier"],
    options_hi: ["मोटर", "जनरेटर", "ट्रांसफार्मर", "रेक्टिफायर"],
    answer_en: "Generator",
    answer_hi: "जनरेटर",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "The 'Dancing Girl' statue belongs to which ancient civilization?",
    question_hi: "'नृत्य करती लड़की' की मूर्ति किस प्राचीन सभ्यता से संबंधित है?",
    options_en: ["Egyptian", "Mesopotamian", "Indus Valley", "Chinese"],
    options_hi: ["मिस्र", "मेसोपोटामिया", "सिंधु घाटी", "चीनी"],
    answer_en: "Indus Valley",
    answer_hi: "सिंधु घाटी",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which state is known as the 'Spice Garden of India'?",
    question_hi: "किस राज्य को 'भारत का मसाला उद्यान' कहा जाता है?",
    options_en: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    options_hi: ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "The first Indian satellite Aryabhata was launched in:",
    question_hi: "पहला भारतीय उपग्रह आर्यभट्ट कब लॉन्च किया गया था?",
    options_en: ["1972", "1975", "1980", "1984"],
    options_hi: ["1972", "1975", "1980", "1984"],
    answer_en: "1975",
    answer_hi: "1975",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which of these is NOT a computer operating system?",
    question_hi: "यह में से कौन सा कंप्यूटर ऑपरेटिंग सिस्टम नहीं है?",
    options_en: ["Windows", "Linux", "Android", "Google"],
    options_hi: ["विंडोज", "लिनक्स", "एंड्रॉयड", "गूगल"],
    answer_en: "Google",
    answer_hi: "गूगल",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The largest freshwater lake in India is:",
    question_hi: "भारत की सबसे बड़ी मीठे पानी की झील है:",
    options_en: ["Dal Lake", "Wular Lake", "Chilika Lake", "Loktak Lake"],
    options_hi: ["डल झील", "वुलर झील", "चिल्का झील", "लोकटक झील"],
    answer_en: "Wular Lake",
    answer_hi: "वुलर झील",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "The first Indian woman to win an Olympic medal was:",
    question_hi: "ओलंपिक पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["P.T. Usha", "Karnam Malleswari", "Saina Nehwal", "Mary Kom"],
    options_hi: ["पी.टी. उषा", "कर्णम मल्लेश्वरी", "साइना नेहवाल", "मैरी कॉम"],
    answer_en: "Karnam Malleswari",
    answer_hi: "कर्णम मल्लेश्वरी",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "The largest planet in our solar system is:",
    question_hi: "हमारे सौरमंडल का सबसे बड़ा ग्रह है:",
    options_en: ["Earth", "Saturn", "Jupiter", "Neptune"],
    options_hi: ["पृथ्वी", "शनि", "बृहस्पति", "नेपच्यून"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "The study of coins is called:",
    question_hi: "सिक्कों के अध्ययन को कहा जाता है:",
    options_en: ["Archaeology", "Numismatics", "Philately", "Epigraphy"],
    options_hi: ["पुरातत्व", "मुद्राशास्त्र", "डाक टिकट संग्रह", "शिलालेख अध्ययन"],
    answer_en: "Numismatics",
    answer_hi: "मुद्राशास्त्र",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which state has the highest literacy rate in India?",
    question_hi: "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
    options_en: ["Tamil Nadu", "Kerala", "Maharashtra", "Karnataka"],
    options_hi: ["तमिलनाडु", "केरल", "महाराष्ट्र", "कर्नाटक"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "The longest railway bridge in India is:",
    question_hi: "भारत का सबसे लंबा रेलवे पुल है:",
    options_en: ["Vembanad Rail Bridge", "Bogibeel Bridge", "Digha-Sonpur Bridge", "Godavari Bridge"],
    options_hi: ["वेम्बनाड रेल ब्रिज", "बोगीबील ब्रिज", "दीघा-सोनपुर ब्रिज", "गोदावरी ब्रिज"],
    answer_en: "Vembanad Rail Bridge",
    answer_hi: "वेम्बनाड रेल ब्रिज",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "The first Indian woman to climb Mount Everest was:",
    question_hi: "माउंट एवरेस्ट पर चढ़ने वाली पहली भारतीय महिला थीं:",
    options_en: ["Santosh Yadav", "Bachendri Pal", "Arunima Sinha", "Premlata Agarwal"],
    options_hi: ["संतोष यादव", "बछेंद्री पाल", "अरुणिमा सिन्हा", "प्रेमलता अग्रवाल"],
    answer_en: "Bachendri Pal",
    answer_hi: "बछेंद्री पाल",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "The first Indian state to be formed on linguistic basis was:",
    question_hi: "भाषाई आधार पर गठित होने वाला पहला भारतीय राज्य था:",
    options_en: ["Tamil Nadu", "Andhra Pradesh", "Karnataka", "Kerala"],
    options_hi: ["तमिलनाडु", "आंध्र प्रदेश", "कर्नाटक", "केरल"],
    answer_en: "Andhra Pradesh",
    answer_hi: "आंध्र प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "The largest desert in Asia is:",
    question_hi: "एशिया का सबसे बड़ा रेगिस्तान है:",
    options_en: ["Thar Desert", "Gobi Desert", "Karakum Desert", "Taklamakan Desert"],
    options_hi: ["थार रेगिस्तान", "गोबी रेगिस्तान", "कराकुम रेगिस्तान", "तकलामकान रेगिस्तान"],
    answer_en: "Gobi Desert",
    answer_hi: "गोबी रेगिस्तान",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "The first Indian to win the Nobel Prize in Physics was:",
    question_hi: "भौतिकी में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    options_en: ["C.V. Raman", "Hargobind Khorana", "Subrahmanyan Chandrasekhar", "Venkatraman Ramakrishnan"],
    options_hi: ["सी.वी. रमन", "हरगोबिंद खुराना", "सुब्रह्मण्यन चंद्रशेखर", "वेंकटरमन रामकृष्णन"],
    answer_en: "C.V. Raman",
    answer_hi: "सी.वी. रमन",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "The longest national highway in India is:",
    question_hi: "भारत का सबसे लंबा राष्ट्रीय राजमार्ग है:",
    options_en: ["NH 44", "NH 27", "NH 48", "NH 19"],
    options_hi: ["एनएच 44", "एनएच 27", "एनएच 48", "एनएच 19"],
    answer_en: "NH 44",
    answer_hi: "एनएच 44",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "The first Indian woman to win the Booker Prize was:",
    question_hi: "बुकर पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["Arundhati Roy", "Kiran Desai", "Anita Desai", "Jhumpa Lahiri"],
    options_hi: ["अरुंधति रॉय", "किरण देसाई", "अनिता देसाई", "झुम्पा लाहिड़ी"],
    answer_en: "Arundhati Roy",
    answer_hi: "अरुंधति रॉय",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "The largest coffee producing state in India is:",
    question_hi: "भारत में सबसे अधिक कॉफी उत्पादन करने वाला राज्य है:",
    options_en: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
    options_hi: ["तमिलनाडु", "केरल", "कर्नाटक", "आंध्र प्रदेश"],
    answer_en: "Karnataka",
    answer_hi: "कर्नाटक",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "The first Indian to win an individual Olympic gold medal was:",
    question_hi: "व्यक्तिगत ओलंपिक स्वर्ण पदक जीतने वाले पहले भारतीय थे:",
    options_en: ["Dhyan Chand", "Abhinav Bindra", "Neeraj Chopra", "Leander Paes"],
    options_hi: ["ध्यानचंद", "अभिनव बिंद्रा", "नीरज चोपड़ा", "लिएंडर पेस"],
    answer_en: "Abhinav Bindra",
    answer_hi: "अभिनव बिंद्रा",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "The largest producer of sugarcane in India is:",
    question_hi: "भारत में सबसे अधिक गन्ना उत्पादन करने वाला राज्य है:",
    options_en: ["Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu"],
    options_hi: ["महाराष्ट्र", "उत्तर प्रदेश", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "The first Indian to reach the South Pole was:",
    question_hi: "दक्षिणी ध्रुव पर पहुँचने वाले पहले भारतीय थे:",
    options_en: ["Bachendri Pal", "Ajeet Bajaj", "Prem Singh", "H.P.S. Ahluwalia"],
    options_hi: ["बछेंद्री पाल", "अजीत बजाज", "प्रेम सिंह", "एच.पी.एस. अहलूवालिया"],
    answer_en: "Ajeet Bajaj",
    answer_hi: "अजीत बजाज",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "The largest island in India is:",
    question_hi: "भारत का सबसे बड़ा द्वीप है:",
    options_en: ["Majuli", "Diu", "Andaman Island", "Lakshadweep"],
    options_hi: ["माजुली", "दीव", "अंडमान द्वीप", "लक्षद्वीप"],
    answer_en: "Andaman Island",
    answer_hi: "अंडमान द्वीप",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "The first Indian woman to win a medal in World Athletics Championships was:",
    question_hi: "विश्व एथलेटिक्स चैंपियनशिप में पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["P.T. Usha", "Anju Bobby George", "Hima Das", "Dutee Chand"],
    options_hi: ["पी.टी. उषा", "अंजू बॉबी जॉर्ज", "हिमा दास", "दुती चंद"],
    answer_en: "Anju Bobby George",
    answer_hi: "अंजू बॉबी जॉर्ज",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "The largest producer of tea in India is:",
    question_hi: "भारत में सबसे अधिक चाय उत्पादन करने वाला राज्य है:",
    options_en: ["Kerala", "Tamil Nadu", "West Bengal", "Assam"],
    options_hi: ["केरल", "तमिलनाडु", "पश्चिम बंगाल", "असम"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "The first Indian woman to win a medal in Olympic badminton was:",
    question_hi: "ओलंपिक बैडमिंटन में पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["Saina Nehwal", "P.V. Sindhu", "Jwala Gutta", "Ashwini Ponnappa"],
    options_hi: ["साइना नेहवाल", "पी.वी. सिंधु", "ज्वाला गुट्टा", "अश्विनी पोन्नप्पा"],
    answer_en: "P.V. Sindhu",
    answer_hi: "पी.वी. सिंधु",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "The largest producer of rubber in India is:",
    question_hi: "भारत में सबसे अधिक रबर उत्पादन करने वाला राज्य है:",
    options_en: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"],
    options_hi: ["तमिलनाडु", "कर्नाटक", "केरल", "आंध्र प्रदेश"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "The first Indian woman to win the Miss World title was:",
    question_hi: "मिस वर्ल्ड का खिताब जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["Sushmita Sen", "Aishwarya Rai", "Priyanka Chopra", "Reita Faria"],
    options_hi: ["सुष्मिता सेन", "ऐश्वर्या राय", "प्रियंका चोपड़ा", "रीटा फारिया"],
    answer_en: "Reita Faria",
    answer_hi: "रीटा फारिया",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "The largest producer of cotton in India is:",
    question_hi: "भारत में सबसे अधिक कपास उत्पादन करने वाला राज्य है:",
    options_en: ["Maharashtra", "Gujarat", "Punjab", "Haryana"],
    options_hi: ["महाराष्ट्र", "गुजरात", "पंजाब", "हरियाणा"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "The first Indian woman to win the Miss Universe title was:",
    question_hi: "मिस यूनिवर्स का खिताब जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["Sushmita Sen", "Aishwarya Rai", "Lara Dutta", "Dia Mirza"],
    options_hi: ["सुष्मिता सेन", "ऐश्वर्या राय", "लारा दत्ता", "दिया मिर्जा"],
    answer_en: "Sushmita Sen",
    answer_hi: "सुष्मिता सेन",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "The largest producer of wheat in India is:",
    question_hi: "भारत में सबसे अधिक गेहूं उत्पादन करने वाला राज्य है:",
    options_en: ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "मध्य प्रदेश"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "The first Indian woman to win an Asian Games gold medal was:",
    question_hi: "एशियाई खेलों में स्वर्ण पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["P.T. Usha", "Kamaljit Sandhu", "Shiny Abraham", "M.D. Valsamma"],
    options_hi: ["पी.टी. उषा", "कमलजीत संधू", "शाइनी अब्राहम", "एम.डी. वलसम्मा"],
    answer_en: "Kamaljit Sandhu",
    answer_hi: "कमलजीत संधू",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "The largest producer of rice in India is:",
    question_hi: "भारत में सबसे अधिक चावल उत्पादन करने वाला राज्य है:",
    options_en: ["Punjab", "West Bengal", "Uttar Pradesh", "Andhra Pradesh"],
    options_hi: ["पंजाब", "पश्चिम बंगाल", "उत्तर प्रदेश", "आंध्र प्रदेश"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "The first Indian woman to win a medal in Olympic wrestling was:",
    question_hi: "ओलंपिक कुश्ती में पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["Sakshi Malik", "Vinesh Phogat", "Geeta Phogat", "Babita Kumari"],
    options_hi: ["साक्षी मलिक", "विनेश फोगाट", "गीता फोगाट", "बबीता कुमारी"],
    answer_en: "Sakshi Malik",
    answer_hi: "साक्षी मलिक",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "The largest producer of milk in India is:",
    question_hi: "भारत में सबसे अधिक दूध उत्पादन करने वाला राज्य है:",
    options_en: ["Gujarat", "Punjab", "Uttar Pradesh", "Rajasthan"],
    options_hi: ["गुजरात", "पंजाब", "उत्तर प्रदेश", "राजस्थान"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "The first Indian woman to win a medal in Olympic boxing was:",
    question_hi: "ओलंपिक बॉक्सिंग में पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["Mary Kom", "Sarita Devi", "Jenny RL", "Nikhat Zareen"],
    options_hi: ["मैरी कॉम", "सरिता देवी", "जेनी आरएल", "निखत जरीन"],
    answer_en: "Mary Kom",
    answer_hi: "मैरी कॉम",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "The largest producer of jute in India is:",
    question_hi: "भारत में सबसे अधिक जूट उत्पादन करने वाला राज्य है:",
    options_en: ["West Bengal", "Bihar", "Assam", "Odisha"],
    options_hi: ["पश्चिम बंगाल", "बिहार", "असम", "ओडिशा"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "The first Indian woman to win a medal in Olympic shooting was:",
    question_hi: "ओलंपिक शूटिंग में पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["Anjali Bhagwat", "Heena Sidhu", "Manu Bhaker", "Karnam Malleswari"],
    options_hi: ["अंजलि भागवत", "हीना सिद्धू", "मनु भाकर", "कर्णम मल्लेश्वरी"],
    answer_en: "Anjali Bhagwat",
    answer_hi: "अंजलि भागवत",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "The largest producer of spices in India is:",
    question_hi: "भारत में सबसे अधिक मसाले उत्पादन करने वाला राज्य है:",
    options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
    answer_en: "Andhra Pradesh",
    answer_hi: "आंध्र प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "The first Indian woman to win a medal in Olympic athletics was:",
    question_hi: "ओलंपिक एथलेटिक्स में पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["P.T. Usha", "Anju Bobby George", "Hima Das", "Dutee Chand"],
    options_hi: ["पी.टी. उषा", "अंजू बॉबी जॉर्ज", "हिमा दास", "दुती चंद"],
    answer_en: "P.T. Usha",
    answer_hi: "पी.टी. उषा",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "The largest producer of silk in India is:",
    question_hi: "भारत में सबसे अधिक रेशम उत्पादन करने वाला राज्य है:",
    options_en: ["Karnataka", "Tamil Nadu", "West Bengal", "Jammu & Kashmir"],
    options_hi: ["कर्नाटक", "तमिलनाडु", "पश्चिम बंगाल", "जम्मू और कश्मीर"],
    answer_en: "Karnataka",
    answer_hi: "कर्नाटक",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "The first Indian woman to win a medal in Olympic badminton was:",
    question_hi: "ओलंपिक बैडमिंटन में पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["Saina Nehwal", "P.V. Sindhu", "Jwala Gutta", "Ashwini Ponnappa"],
    options_hi: ["साइना नेहवाल", "पी.वी. सिंधु", "ज्वाला गुट्टा", "अश्विनी पोन्नप्पा"],
    answer_en: "P.V. Sindhu",
    answer_hi: "पी.वी. सिंधु",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "The largest producer of mangoes in India is:",
    question_hi: "भारत में सबसे अधिक आम उत्पादन करने वाला राज्य है:",
    options_en: ["Maharashtra", "Gujarat", "Uttar Pradesh", "Andhra Pradesh"],
    options_hi: ["महाराष्ट्र", "गुजरात", "उत्तर प्रदेश", "आंध्र प्रदेश"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "The first Indian woman to win a medal in Olympic weightlifting was:",
    question_hi: "ओलंपिक भारोत्तोलन में पदक जीतने वाली पहली भारतीय महिला थीं:",
    options_en: ["Karnam Malleswari", "Saikhom Mirabai Chanu", "Kunjarani Devi", "Lalita Babar"],
    options_hi: ["कर्णम मल्लेश्वरी", "साइखोम मीराबाई चानू", "कुंजरानी देवी", "ललिता बाबर"],
    answer_en: "Karnam Malleswari",
    answer_hi: "कर्णम मल्लेश्वरी",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "The largest producer of bananas in India is:",
    question_hi: "भारत में सबसे अधिक केले उत्पादन करने वाला राज्य है:",
    options_en: ["Kerala", "Tamil Nadu", "Maharashtra", "Gujarat"],
    options_hi: ["केरल", "तमिलनाडु", "महाराष्ट्र", "गुजरात"],
    answer_en: "Tamil Nadu",
    answer_hi: "तमिलनाडु",
    attempted: false,
    selected: ""
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