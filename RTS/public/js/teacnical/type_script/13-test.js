const questions = [
    {
        "num": 1,
        "question_en": "Which is the summer capital of Jammu and Kashmir?",
        "question_hi": "जम्मू और कश्मीर की ग्रीष्मकालीन राजधानी कौन सी है?",
        "options_en": ["Jammu", "Srinagar", "Leh", "Anantnag"],
        "options_hi": ["जम्मू", "श्रीनगर", "लेह", "अनंतनाग"],
        "answer_en": "Srinagar",
        "answer_hi": "श्रीनगर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Dachigam National Park is famous for which animal?",
        "question_hi": "दाचीगाम राष्ट्रीय उद्यान किस जानवर के लिए प्रसिद्ध है?",
        "options_en": ["Snow Leopard", "Hangul", "Black Bear", "Musk Deer"],
        "options_hi": ["हिम तेंदुआ", "हंगुल", "काला भालू", "कस्तूरी मृग"],
        "answer_en": "Hangul",
        "answer_hi": "हंगुल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which lake is known as 'Jewel in the crown of Kashmir'?",
        "question_hi": "किस झील को 'कश्मीर के मुकुट में रत्न' के रूप में जाना जाता है?",
        "options_en": ["Wular Lake", "Dal Lake", "Mansar Lake", "Pangong Lake"],
        "options_hi": ["वुलर झील", "डल झील", "मानसर झील", "पैंगोंग झील"],
        "answer_en": "Dal Lake",
        "answer_hi": "डल झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The famous Amarnath Cave is located in which district?",
        "question_hi": "प्रसिद्ध अमरनाथ गुफा किस जिले में स्थित है?",
        "options_en": ["Anantnag", "Ganderbal", "Pulwama", "Baramulla"],
        "options_hi": ["अनंतनाग", "गांदरबल", "पुलवामा", "बारामुला"],
        "answer_en": "Anantnag",
        "answer_hi": "अनंतनाग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which pass connects Ladakh with Tibet?",
        "question_hi": "कौन सा दर्रा लद्दाख को तिब्बत से जोड़ता है?",
        "options_en": ["Zoji La", "Khardung La", "Chang La", "Umling La"],
        "options_hi": ["जोजी ला", "खारदुंग ला", "चांग ला", "उमलिंग ला"],
        "answer_en": "Khardung La",
        "answer_hi": "खारदुंग ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the traditional boat of Kashmir called?",
        "question_hi": "कश्मीर की पारंपरिक नाव को क्या कहा जाता है?",
        "options_en": ["Shikara", "Donga", "Nauka", "Hij"],
        "options_hi": ["शिकारा", "डोंगा", "नौका", "हिज"],
        "answer_en": "Shikara",
        "answer_hi": "शिकारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which famous Mughal garden is in Srinagar?",
        "question_hi": "श्रीनगर में कौन सा प्रसिद्ध मुगल बाग है?",
        "options_en": ["Shalimar Bagh", "Humayun's Tomb", "Red Fort Garden", "Agra Garden"],
        "options_hi": ["शालीमार बाग", "हुमायूं का मकबरा", "लाल किला उद्यान", "आगरा उद्यान"],
        "answer_en": "Shalimar Bagh",
        "answer_hi": "शालीमार बाग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The famous Gulmarg is located in which district?",
        "question_hi": "प्रसिद्ध गुलमर्ग किस जिले में स्थित है?",
        "options_en": ["Baramulla", "Budgam", "Pulwama", "Kupwara"],
        "options_hi": ["बारामुला", "बडगाम", "पुलवामा", "कुपवाड़ा"],
        "answer_en": "Baramulla",
        "answer_hi": "बारामुला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which river flows through Srinagar?",
        "question_hi": "कौन सी नदी श्रीनगर से होकर बहती है?",
        "options_en": ["Jhelum", "Chenab", "Ravi", "Sutlej"],
        "options_hi": ["झेलम", "चिनाब", "रावी", "सतलज"],
        "answer_en": "Jhelum",
        "answer_hi": "झेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the traditional Kashmiri embroidery called?",
        "question_hi": "पारंपरिक कश्मीरी कढ़ाई को क्या कहा जाता है?",
        "options_en": ["Phulkari", "Kashida", "Chikan", "Zardozi"],
        "options_hi": ["फुलकारी", "कशीदा", "चिकन", "जरदोजी"],
        "answer_en": "Kashida",
        "answer_hi": "कशीदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which is the largest freshwater lake in Jammu and Kashmir?",
        "question_hi": "जम्मू और कश्मीर की सबसे बड़ी मीठे पानी की झील कौन सी है?",
        "options_en": ["Dal Lake", "Wular Lake", "Mansar Lake", "Pangong Lake"],
        "options_hi": ["डल झील", "वुलर झील", "मानसर झील", "पैंगोंग झील"],
        "answer_en": "Wular Lake",
        "answer_hi": "वुलर झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The famous Vaishno Devi Temple is located in which district?",
        "question_hi": "प्रसिद्ध वैष्णो देवी मंदिर किस जिले में स्थित है?",
        "options_en": ["Jammu", "Reasi", "Udhampur", "Kathua"],
        "options_hi": ["जम्मू", "रेयासी", "उधमपुर", "कठुआ"],
        "answer_en": "Reasi",
        "answer_hi": "रेयासी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which is the highest peak in Jammu and Kashmir?",
        "question_hi": "जम्मू और कश्मीर में सबसे ऊंची चोटी कौन सी है?",
        "options_en": ["Nun Kun", "K2", "Nanda Devi", "Mount Everest"],
        "options_hi": ["नुन कुन", "K2", "नंदा देवी", "माउंट एवरेस्ट"],
        "answer_en": "Nun Kun",
        "answer_hi": "नुन कुन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the traditional winter sport of Kashmir?",
        "question_hi": "कश्मीर का पारंपरिक शीतकालीन खेल क्या है?",
        "options_en": ["Skiing", "Ice Hockey", "Sledding", "Snowboarding"],
        "options_hi": ["स्कीइंग", "आइस हॉकी", "स्लेडिंग", "स्नोबोर्डिंग"],
        "answer_en": "Skiing",
        "answer_hi": "स्कीइंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which famous pass is on the Srinagar-Leh highway?",
        "question_hi": "श्रीनगर-लेह राजमार्ग पर कौन सा प्रसिद्ध दर्रा है?",
        "options_en": ["Zoji La", "Nathu La", "Rohtang Pass", "Bara-lacha La"],
        "options_hi": ["जोजी ला", "नाथू ला", "रोहतांग दर्रा", "बारा-लाचा ला"],
        "answer_en": "Zoji La",
        "answer_hi": "जोजी ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The famous Pashmina wool comes from which animal?",
        "question_hi": "प्रसिद्ध पश्मीना ऊन किस जानवर से आता है?",
        "options_en": ["Sheep", "Yak", "Changthangi Goat", "Rabbit"],
        "options_hi": ["भेड़", "याक", "चंगथांगी बकरी", "खरगोश"],
        "answer_en": "Changthangi Goat",
        "answer_hi": "चंगथांगी बकरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which is the winter capital of Jammu and Kashmir?",
        "question_hi": "जम्मू और कश्मीर की शीतकालीन राजधानी कौन सी है?",
        "options_en": ["Srinagar", "Jammu", "Leh", "Kargil"],
        "options_hi": ["श्रीनगर", "जम्मू", "लेह", "कारगिल"],
        "answer_en": "Jammu",
        "answer_hi": "जम्मू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The famous Thiksey Monastery is in which district?",
        "question_hi": "प्रसिद्ध थिकसे मठ किस जिले में है?",
        "options_en": ["Leh", "Kargil", "Jammu", "Srinagar"],
        "options_hi": ["लेह", "कारगिल", "जम्मू", "श्रीनगर"],
        "answer_en": "Leh",
        "answer_hi": "लेह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which festival is famously celebrated in Jammu as 'Baisakhi'?",
        "question_hi": "जम्मू में कौन सा त्योहार 'बैसाखी' के रूप में प्रसिद्ध है?",
        "options_en": ["Holi", "Diwali", "Lohri", "Maha Shivratri"],
        "options_hi": ["होली", "दिवाली", "लोहड़ी", "महा शिवरात्रि"],
        "answer_en": "Lohri",
        "answer_hi": "लोहड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The famous Betaab Valley is located in which district?",
        "question_hi": "प्रसिद्ध बेताब वैली किस जिले में स्थित है?",
        "options_en": ["Anantnag", "Baramulla", "Pulwama", "Budgam"],
        "options_hi": ["अनंतनाग", "बारामुला", "पुलवामा", "बडगाम"],
        "answer_en": "Anantnag",
        "answer_hi": "अनंतनाग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the traditional Kashmiri cloak called?",
        "question_hi": "पारंपरिक कश्मीरी चोगे को क्या कहा जाता है?",
        "options_en": ["Pheran", "Shawl", "Choga", "Cape"],
        "options_hi": ["फेरन", "शॉल", "चोगा", "केप"],
        "answer_en": "Pheran",
        "answer_hi": "फेरन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which is the largest district in Jammu and Kashmir by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से जम्मू और कश्मीर का सबसे बड़ा जिला कौन सा है?",
        "options_en": ["Leh", "Kargil", "Jammu", "Srinagar"],
        "options_hi": ["लेह", "कारगिल", "जम्मू", "श्रीनगर"],
        "answer_en": "Leh",
        "answer_hi": "लेह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The famous Mata Vaishno Devi shrine is dedicated to which goddess?",
        "question_hi": "प्रसिद्ध माता वैष्णो देवी मंदिर किस देवी को समर्पित है?",
        "options_en": ["Lakshmi", "Saraswati", "Durga", "Vaishno Devi"],
        "options_hi": ["लक्ष्मी", "सरस्वती", "दुर्गा", "वैष्णो देवी"],
        "answer_en": "Vaishno Devi",
        "answer_hi": "वैष्णो देवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which famous lake is partly in India and partly in China?",
        "question_hi": "कौन सी प्रसिद्ध झील आंशिक रूप से भारत में और आंशिक रूप से चीन में है?",
        "options_en": ["Dal Lake", "Wular Lake", "Pangong Lake", "Mansar Lake"],
        "options_hi": ["डल झील", "वुलर झील", "पैंगोंग झील", "मानसर झील"],
        "answer_en": "Pangong Lake",
        "answer_hi": "पैंगोंग झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the traditional Kashmiri tea called?",
        "question_hi": "पारंपरिक कश्मीरी चाय को क्या कहा जाता है?",
        "options_en": ["Kashmiri Kahwa", "Masala Chai", "Butter Tea", "Green Tea"],
        "options_hi": ["कश्मीरी कहवा", "मसाला चाय", "मक्खन चाय", "हरी चाय"],
        "answer_en": "Kashmiri Kahwa",
        "answer_hi": "कश्मीरी कहवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which famous Mughal emperor built Shalimar Bagh?",
        "question_hi": "किस प्रसिद्ध मुगल सम्राट ने शालीमार बाग का निर्माण करवाया?",
        "options_en": ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        "options_hi": ["अकबर", "जहांगीर", "शाहजहां", "औरंगजेब"],
        "answer_en": "Jahangir",
        "answer_hi": "जहांगीर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The famous Hemis Monastery is associated with which religion?",
        "question_hi": "प्रसिद्ध हेमिस मठ किस धर्म से संबंधित है?",
        "options_en": ["Hinduism", "Buddhism", "Islam", "Sikhism"],
        "options_hi": ["हिंदू धर्म", "बौद्ध धर्म", "इस्लाम", "सिख धर्म"],
        "answer_en": "Buddhism",
        "answer_hi": "बौद्ध धर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which river is known as the 'Lifeline of Ladakh'?",
        "question_hi": "किस नदी को 'लद्दाख की जीवन रेखा' के रूप में जाना जाता है?",
        "options_en": ["Indus", "Jhelum", "Chenab", "Zanskar"],
        "options_hi": ["सिंधु", "झेलम", "चिनाब", "जांस्कर"],
        "answer_en": "Indus",
        "answer_hi": "सिंधु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the traditional Kashmiri carpet called?",
        "question_hi": "पारंपरिक कश्मीरी कालीन को क्या कहा जाता है?",
        "options_en": ["Kashmiri Rug", "Namda", "Gabba", "Kalim"],
        "options_hi": ["कश्मीरी रग", "नमदा", "गब्बा", "कलीम"],
        "answer_en": "Kalim",
        "answer_hi": "कलीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which famous mountain range separates Kashmir from Ladakh?",
        "question_hi": "कौन सा प्रसिद्ध पर्वत श्रृंखला कश्मीर को लद्दाख से अलग करती है?",
        "options_en": ["Pir Panjal", "Zanskar", "Great Himalayas", "Ladakh Range"],
        "options_hi": ["पीर पंजाल", "जांस्कर", "ग्रेट हिमालय", "लद्दाख रेंज"],
        "answer_en": "Zanskar",
        "answer_hi": "जांस्कर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The famous Jama Masjid in Srinagar was built by which ruler?",
        "question_hi": "श्रीनगर में प्रसिद्ध जामा मस्जिद किस शासक ने बनवाई थी?",
        "options_en": ["Sultan Sikandar", "Akbar", "Shah Jahan", "Aurangzeb"],
        "options_hi": ["सुल्तान सिकंदर", "अकबर", "शाहजहां", "औरंगजेब"],
        "answer_en": "Sultan Sikandar",
        "answer_hi": "सुल्तान सिकंदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is the official language of Jammu and Kashmir?",
        "question_hi": "जम्मू और कश्मीर की आधिकारिक भाषा कौन सी है?",
        "options_en": ["Hindi", "Urdu", "Kashmiri", "Dogri"],
        "options_hi": ["हिंदी", "उर्दू", "कश्मीरी", "डोगरी"],
        "answer_en": "Urdu",
        "answer_hi": "उर्दू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The famous Patnitop hill station is in which district?",
        "question_hi": "प्रसिद्ध पत्नीटॉप हिल स्टेशन किस जिले में है?",
        "options_en": ["Udhampur", "Jammu", "Reasi", "Doda"],
        "options_hi": ["उधमपुर", "जम्मू", "रेयासी", "डोडा"],
        "answer_en": "Udhampur",
        "answer_hi": "उधमपुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which famous festival is celebrated at Hemis Monastery?",
        "question_hi": "हेमिस मठ में कौन सा प्रसिद्ध त्योहार मनाया जाता है?",
        "options_en": ["Hemis Festival", "Losar", "Saka Dawa", "Buddha Purnima"],
        "options_hi": ["हेमिस उत्सव", "लोसार", "साका दावा", "बुद्ध पूर्णिमा"],
        "answer_en": "Hemis Festival",
        "answer_hi": "हेमिस उत्सव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the traditional name of Jammu city?",
        "question_hi": "जम्मू शहर का पारंपरिक नाम क्या है?",
        "options_en": ["City of Temples", "Winter Capital", "Duggar", "Jambu"],
        "options_hi": ["मंदिरों का शहर", "शीतकालीन राजधानी", "डुग्गर", "जम्बू"],
        "answer_en": "City of Temples",
        "answer_hi": "मंदिरों का शहर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which famous pass is the highest motorable road in the world?",
        "question_hi": "कौन सा प्रसिद्ध दर्रा दुनिया की सबसे ऊंची मोटर योग्य सड़क है?",
        "options_en": ["Khardung La", "Umling La", "Chang La", "Tanglang La"],
        "options_hi": ["खारदुंग ला", "उमलिंग ला", "चांग ला", "तांगलांग ला"],
        "answer_en": "Umling La",
        "answer_hi": "उमलिंग ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The famous Raghunath Temple is dedicated to which deity?",
        "question_hi": "प्रसिद्ध रघुनाथ मंदिर किस देवता को समर्पित है?",
        "options_en": ["Lord Shiva", "Lord Vishnu", "Lord Rama", "Goddess Durga"],
        "options_hi": ["भगवान शिव", "भगवान विष्णु", "भगवान राम", "देवी दुर्गा"],
        "answer_en": "Lord Rama",
        "answer_hi": "भगवान राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which is the largest glacier in Jammu and Kashmir?",
        "question_hi": "जम्मू और कश्मीर में सबसे बड़ा ग्लेशियर कौन सा है?",
        "options_en": ["Siachen", "Biafo", "Hispar", "Nubra"],
        "options_hi": ["सियाचिन", "बियाफो", "हिस्पर", "नुब्रा"],
        "answer_en": "Siachen",
        "answer_hi": "सियाचिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The famous Bahu Fort is located in which city?",
        "question_hi": "प्रसिद्ध बाहू किला किस शहर में स्थित है?",
        "options_en": ["Jammu", "Srinagar", "Leh", "Kargil"],
        "options_hi": ["जम्मू", "श्रीनगर", "लेह", "कारगिल"],
        "answer_en": "Jammu",
        "answer_hi": "जम्मू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the traditional Kashmiri bread called?",
        "question_hi": "पारंपरिक कश्मीरी रोटी को क्या कहा जाता है?",
        "options_en": ["Naan", "Kulcha", "Sheermal", "Bakarkhani"],
        "options_hi": ["नान", "कुल्चा", "शीरमल", "बकरखानी"],
        "answer_en": "Sheermal",
        "answer_hi": "शीरमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which famous cricket ground is in Jammu?",
        "question_hi": "जम्मू में कौन सा प्रसिद्ध क्रिकेट मैदान है?",
        "options_en": ["MA Stadium", "Sher-i-Kashmir", "Bahu Fort Ground", "Jammu Stadium"],
        "options_hi": ["एमए स्टेडियम", "शेर-ए-कश्मीर", "बाहू किला ग्राउंड", "जम्मू स्टेडियम"],
        "answer_en": "MA Stadium",
        "answer_hi": "एमए स्टेडियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The famous Nubra Valley is known for which animal?",
        "question_hi": "प्रसिद्ध नुब्रा वैली किस जानवर के लिए जानी जाती है?",
        "options_en": ["Yak", "Bactrian Camel", "Snow Leopard", "Tibetan Wolf"],
        "options_hi": ["याक", "बैक्ट्रियन ऊंट", "हिम तेंदुआ", "तिब्बती भेड़िया"],
        "answer_en": "Bactrian Camel",
        "answer_hi": "बैक्ट्रियन ऊंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which is the main festival of Kashmiri Pandits?",
        "question_hi": "कश्मीरी पंडितों का मुख्य त्योहार कौन सा है?",
        "options_en": ["Diwali", "Holi", "Navreh", "Maha Shivratri"],
        "options_hi": ["दिवाली", "होली", "नवरेह", "महा शिवरात्रि"],
        "answer_en": "Navreh",
        "answer_hi": "नवरेह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The famous Drass is known as what?",
        "question_hi": "प्रसिद्ध द्रास को क्या कहा जाता है?",
        "options_en": ["Gateway to Ladakh", "Second Coldest Place", "Mini Kashmir", "The Drass Valley"],
        "options_hi": ["लद्दाख का प्रवेश द्वार", "दूसरा सबसे ठंडा स्थान", "मिनी कश्मीर", "द्रास घाटी"],
        "answer_en": "Second Coldest Place",
        "answer_hi": "दूसरा सबसे ठंडा स्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which famous Sufi shrine is in Srinagar?",
        "question_hi": "श्रीनगर में कौन सा प्रसिद्ध सूफी दरगाह है?",
        "options_en": ["Hazratbal", "Dastgir Sahib", "Makhdoom Sahib", "All of these"],
        "options_hi": ["हजरतबल", "दस्तगीर साहिब", "मखदूम साहिब", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the traditional dance of Kashmir called?",
        "question_hi": "कश्मीर के पारंपरिक नृत्य को क्या कहा जाता है?",
        "options_en": ["Rouf", "Bhangra", "Garba", "Lavani"],
        "options_hi": ["रूफ", "भांगड़ा", "गरबा", "लावणी"],
        "answer_en": "Rouf",
        "answer_hi": "रूफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which famous lake is known for its floating gardens?",
        "question_hi": "कौन सी प्रसिद्ध झील अपने तैरते उद्यानों के लिए जानी जाती है?",
        "options_en": ["Dal Lake", "Wular Lake", "Mansar Lake", "Pangong Lake"],
        "options_hi": ["डल झील", "वुलर झील", "मानसर झील", "पैंगोंग झील"],
        "answer_en": "Dal Lake",
        "answer_hi": "डल झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The famous Kargil War was fought in which year?",
        "question_hi": "प्रसिद्ध कारगिल युद्ध किस वर्ष लड़ा गया था?",
        "options_en": ["1998", "1999", "2000", "2001"],
        "options_hi": ["1998", "1999", "2000", "2001"],
        "answer_en": "1999",
        "answer_hi": "1999",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which is the main river of Ladakh region?",
        "question_hi": "लद्दाख क्षेत्र की मुख्य नदी कौन सी है?",
        "options_en": ["Indus", "Jhelum", "Chenab", "Ravi"],
        "options_hi": ["सिंधु", "झेलम", "चिनाब", "रावी"],
        "answer_en": "Indus",
        "answer_hi": "सिंधु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the traditional name of Ladakh?",
        "question_hi": "लद्दाख का पारंपरिक नाम क्या है?",
        "options_en": ["Little Tibet", "Moonland", "Cold Desert", "All of these"],
        "options_hi": ["लिटिल तिब्बत", "चंद्रभूमि", "ठंडा रेगिस्तान", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which famous mountain peak is called 'Killer Mountain'?",
        "question_hi": "किस प्रसिद्ध पर्वत चोटी को 'किलर माउंटेन' कहा जाता है?",
        "options_en": ["Nanga Parbat", "K2", "Mount Everest", "Nanda Devi"],
        "options_hi": ["नंगा परबत", "K2", "माउंट एवरेस्ट", "नंदा देवी"],
        "answer_en": "Nanga Parbat",
        "answer_hi": "नंगा परबत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The famous Chashme Shahi garden was built by whom?",
        "question_hi": "प्रसिद्ध चश्मा शाही उद्यान किसने बनवाया था?",
        "options_en": ["Shah Jahan", "Jahangir", "Akbar", "Aurangzeb"],
        "options_hi": ["शाहजहां", "जहांगीर", "अकबर", "औरंगजेब"],
        "answer_en": "Shah Jahan",
        "answer_hi": "शाहजहां",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which is the highest battlefield in the world?",
        "question_hi": "दुनिया का सबसे ऊंचा युद्धक्षेत्र कौन सा है?",
        "options_en": ["Kargil", "Siachen", "Leh", "Drass"],
        "options_hi": ["कारगिल", "सियाचिन", "लेह", "द्रास"],
        "answer_en": "Siachen",
        "answer_hi": "सियाचिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the traditional woolen fabric of Kashmir called?",
        "question_hi": "कश्मीर के पारंपरिक ऊनी कपड़े को क्या कहा जाता है?",
        "options_en": ["Pashmina", "Shahtoosh", "Raffal", "All of these"],
        "options_hi": ["पश्मीना", "शाहतूश", "रफल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which famous lake is a Ramsar site?",
        "question_hi": "कौन सी प्रसिद्ध झील एक रामसर स्थल है?",
        "options_en": ["Wular Lake", "Dal Lake", "Mansar Lake", "All of these"],
        "options_hi": ["वुलर झील", "डल झील", "मानसर झील", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The famous Shankaracharya Temple is dedicated to which deity?",
        "question_hi": "प्रसिद्ध शंकराचार्य मंदिर किस देवता को समर्पित है?",
        "options_en": ["Lord Shiva", "Lord Vishnu", "Lord Buddha", "Goddess Durga"],
        "options_hi": ["भगवान शिव", "भगवान विष्णु", "भगवान बुद्ध", "देवी दुर्गा"],
        "answer_en": "Lord Shiva",
        "answer_hi": "भगवान शिव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which is the main language spoken in Ladakh?",
        "question_hi": "लद्दाख में मुख्य रूप से कौन सी भाषा बोली जाती है?",
        "options_en": ["Ladakhi", "Hindi", "Urdu", "English"],
        "options_hi": ["लद्दाखी", "हिंदी", "उर्दू", "अंग्रेजी"],
        "answer_en": "Ladakhi",
        "answer_hi": "लद्दाखी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The famous Jhelum River originates from which spring?",
        "question_hi": "प्रसिद्ध झेलम नदी किस झरने से निकलती है?",
        "options_en": ["Verinag", "Kokernag", "Achabal", "Daksum"],
        "options_hi": ["वेरीनाग", "कोकरनाग", "अचबल", "दक्सुम"],
        "answer_en": "Verinag",
        "answer_hi": "वेरीनाग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the traditional houseboat of Kashmir called?",
        "question_hi": "कश्मीर की पारंपरिक हाउसबोट को क्या कहा जाता है?",
        "options_en": ["Shikara", "Doonga", "Barge", "Ferry"],
        "options_hi": ["शिकारा", "डूंगा", "बजरा", "फेरी"],
        "answer_en": "Doonga",
        "answer_hi": "डूंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which famous festival marks the beginning of spring in Kashmir?",
        "question_hi": "कश्मीर में वसंत की शुरुआत का प्रतीक कौन सा प्रसिद्ध त्योहार है?",
        "options_en": ["Baisakhi", "Navroz", "Sont", "Shivratri"],
        "options_hi": ["बैसाखी", "नवरोज", "सोंट", "शिवरात्रि"],
        "answer_en": "Sont",
        "answer_hi": "सोंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The famous Hari Parbat fort is associated with which goddess?",
        "question_hi": "प्रसिद्ध हरी परबत किला किस देवी से संबंधित है?",
        "options_en": ["Durga", "Kali", "Sharika", "Lakshmi"],
        "options_hi": ["दुर्गा", "काली", "शारिका", "लक्ष्मी"],
        "answer_en": "Sharika",
        "answer_hi": "शारिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which is the main fruit grown in Kashmir?",
        "question_hi": "कश्मीर में उगाया जाने वाला मुख्य फल कौन सा है?",
        "options_en": ["Apple", "Cherry", "Apricot", "Walnut"],
        "options_hi": ["सेब", "चेरी", "खुबानी", "अखरोट"],
        "answer_en": "Apple",
        "answer_hi": "सेब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The famous Kheer Bhawani temple is dedicated to which goddess?",
        "question_hi": "प्रसिद्ध खीर भवानी मंदिर किस देवी को समर्पित है?",
        "options_en": ["Durga", "Kali", "Lakshmi", "Ragnya"],
        "options_hi": ["दुर्गा", "काली", "लक्ष्मी", "राग्न्या"],
        "answer_en": "Ragnya",
        "answer_hi": "राग्न्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which famous mountain pass is on the Leh-Manali highway?",
        "question_hi": "लेह-मनाली राजमार्ग पर कौन सा प्रसिद्ध पर्वत दर्रा है?",
        "options_en": ["Rohtang Pass", "Baralacha La", "Taglang La", "All of these"],
        "options_hi": ["रोहतांग दर्रा", "बारालाचा ला", "तागलांग ला", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the traditional headgear of Kashmiri men called?",
        "question_hi": "कश्मीरी पुरुषों के पारंपरिक सिर के आवरण को क्या कहा जाता है?",
        "options_en": ["Turban", "Cap", "Taranga", "Pheta"],
        "options_hi": ["पगड़ी", "टोपी", "तरंगा", "फेटा"],
        "answer_en": "Taranga",
        "answer_hi": "तरंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The famous Martand Sun Temple was built by which king?",
        "question_hi": "प्रसिद्ध मार्तंड सूर्य मंदिर किस राजा ने बनवाया था?",
        "options_en": ["Lalitaditya", "Ashoka", "Kanishka", "Harsha"],
        "options_hi": ["ललितादित्य", "अशोक", "कनिष्क", "हर्ष"],
        "answer_en": "Lalitaditya",
        "answer_hi": "ललितादित्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which is the main dance form of Ladakh?",
        "question_hi": "लद्दाख का मुख्य नृत्य रूप कौन सा है?",
        "options_en": ["Jabro", "Rouf", "Bhangra", "Garba"],
        "options_hi": ["जबरो", "रूफ", "भांगड़ा", "गरबा"],
        "answer_en": "Jabro",
        "answer_hi": "जबरो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The famous Zojila Pass connects which two places?",
        "question_hi": "प्रसिद्ध जोजिला दर्रा किन दो स्थानों को जोड़ता है?",
        "options_en": ["Srinagar and Leh", "Leh and Manali", "Jammu and Srinagar", "Srinagar and Kargil"],
        "options_hi": ["श्रीनगर और लेह", "लेह और मनाली", "जम्मू और श्रीनगर", "श्रीनगर और कारगिल"],
        "answer_en": "Srinagar and Leh",
        "answer_hi": "श्रीनगर और लेह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the traditional name of Srinagar?",
        "question_hi": "श्रीनगर का पारंपरिक नाम क्या है?",
        "options_en": ["City of Lakes", "Venice of East", "Paradise on Earth", "All of these"],
        "options_hi": ["झीलों का शहर", "पूर्व का वेनिस", "पृथ्वी पर स्वर्ग", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which famous garden is known as 'Garden of Bliss'?",
        "question_hi": "कौन सा प्रसिद्ध बाग 'आनंद का बाग' के नाम से जाना जाता है?",
        "options_en": ["Shalimar Bagh", "Nishat Bagh", "Chashme Shahi", "Harwan Garden"],
        "options_hi": ["शालीमार बाग", "निशात बाग", "चश्मा शाही", "हरवन गार्डन"],
        "answer_en": "Nishat Bagh",
        "answer_hi": "निशात बाग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The famous Leh Palace was built by which king?",
        "question_hi": "प्रसिद्ध लेह पैलेस किस राजा ने बनवाया था?",
        "options_en": ["Singge Namgyal", "Tsewang Namgyal", "Jamyang Namgyal", "Deldan Namgyal"],
        "options_hi": ["सिंग्गे नामग्याल", "त्सेवांग नामग्याल", "जम्यांग नामग्याल", "देलदान नामग्याल"],
        "answer_en": "Singge Namgyal",
        "answer_hi": "सिंग्गे नामग्याल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which is the main festival of Ladakh?",
        "question_hi": "लद्दाख का मुख्य त्योहार कौन सा है?",
        "options_en": ["Losar", "Hemis", "Saka Dawa", "All of these"],
        "options_hi": ["लोसार", "हेमिस", "साका दावा", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the traditional alcoholic beverage of Ladakh?",
        "question_hi": "लद्दाख का पारंपरिक मादक पेय क्या है?",
        "options_en": ["Chang", "Arak", "Lugdi", "All of these"],
        "options_hi": ["चांग", "अरक", "लुगड़ी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The famous Stok Palace is located in which village?",
        "question_hi": "प्रसिद्ध स्टोक पैलेस किस गांव में स्थित है?",
        "options_en": ["Stok", "Shey", "Thiksey", "Hemis"],
        "options_hi": ["स्टोक", "शे", "थिकसे", "हेमिस"],
        "answer_en": "Stok",
        "answer_hi": "स्टोक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which famous lake is known for its changing colors?",
        "question_hi": "कौन सी प्रसिद्ध झील अपने बदलते रंगों के लिए जानी जाती है?",
        "options_en": ["Pangong Lake", "Tso Moriri", "Tso Kar", "All of these"],
        "options_hi": ["पैंगोंग झील", "त्सो मोरिरी", "त्सो कर", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The famous Magnetic Hill is located near which city?",
        "question_hi": "प्रसिद्ध मैग्नेटिक हिल किस शहर के पास स्थित है?",
        "options_en": ["Leh", "Srinagar", "Jammu", "Kargil"],
        "options_hi": ["लेह", "श्रीनगर", "जम्मू", "कारगिल"],
        "answer_en": "Leh",
        "answer_hi": "लेह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the traditional name of Pahalgam?",
        "question_hi": "पहलगाम का पारंपरिक नाम क्या है?",
        "options_en": ["Valley of Shepherds", "Meadow of Flowers", "Gateway to Amarnath", "All of these"],
        "options_hi": ["गड़रियों की घाटी", "फूलों का मैदान", "अमरनाथ का प्रवेश द्वार", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which famous river forms the world's highest river rafting point?",
        "question_hi": "कौन सी प्रसिद्ध नदी दुनिया का सबसे ऊंचा रिवर राफ्टिंग पॉइंट बनाती है?",
        "options_en": ["Indus", "Zanskar", "Jhelum", "Chenab"],
        "options_hi": ["सिंधु", "जांस्कर", "झेलम", "चिनाब"],
        "answer_en": "Zanskar",
        "answer_hi": "जांस्कर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The famous Alchi Monastery is known for what?",
        "question_hi": "प्रसिद्ध अलची मठ किस लिए जाना जाता है?",
        "options_en": ["Ancient paintings", "Wood carvings", "Both", "None"],
        "options_hi": ["प्राचीन चित्र", "लकड़ी की नक्काशी", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which is the main pass on the Srinagar-Kargil highway?",
        "question_hi": "श्रीनगर-कारगिल राजमार्ग पर मुख्य दर्रा कौन सा है?",
        "options_en": ["Zojila", "Fotu La", "Namika La", "All of these"],
        "options_hi": ["जोजिला", "फोटू ला", "नामिका ला", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the traditional winter wear of Ladakhi women called?",
        "question_hi": "लद्दाखी महिलाओं के पारंपरिक शीतकालीन पहनावे को क्या कहा जाता है?",
        "options_en": ["Kuntop", "Bok", "Skerag", "All of these"],
        "options_hi": ["कुंटोप", "बोक", "स्केराग", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The famous Drang Drung Glacier is near which pass?",
        "question_hi": "प्रसिद्ध ड्रांग ड्रुंग ग्लेशियर किस दर्रे के पास है?",
        "options_en": ["Pensi La", "Zojila", "Khardung La", "Chang La"],
        "options_hi": ["पेंसी ला", "जोजिला", "खारदुंग ला", "चांग ला"],
        "answer_en": "Pensi La",
        "answer_hi": "पेंसी ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which famous lake is known as 'Lake of Great Enchantment'?",
        "question_hi": "कौन सी प्रसिद्ध झील 'ग्रेट एन्चेंटमेंट की झील' के नाम से जानी जाती है?",
        "options_en": ["Tso Moriri", "Pangong Lake", "Tso Kar", "Wular Lake"],
        "options_hi": ["त्सो मोरिरी", "पैंगोंग झील", "त्सो कर", "वुलर झील"],
        "answer_en": "Tso Moriri",
        "answer_hi": "त्सो मोरिरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The famous Suru Valley is in which district?",
        "question_hi": "प्रसिद्ध सुरु घाटी किस जिले में है?",
        "options_en": ["Kargil", "Leh", "Jammu", "Srinagar"],
        "options_hi": ["कारगिल", "लेह", "जम्मू", "श्रीनगर"],
        "answer_en": "Kargil",
        "answer_hi": "कारगिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the traditional name of Sonamarg?",
        "question_hi": "सोनमर्ग का पारंपरिक नाम क्या है?",
        "options_en": ["Meadow of Gold", "Golden Valley", "Both", "None"],
        "options_hi": ["सोने का मैदान", "सुनहरी घाटी", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which famous wildlife sanctuary is in Jammu region?",
        "question_hi": "जम्मू क्षेत्र में कौन सा प्रसिद्ध वन्यजीव अभयारण्य है?",
        "options_en": ["Surinsar-Mansar", "Ramnagar", "Both", "None"],
        "options_hi": ["सुरिंसर-मानसर", "रामनगर", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The famous Maharaja Hari Singh's rule ended in which year?",
        "question_hi": "महाराजा हरी सिंह का शासन किस वर्ष समाप्त हुआ?",
        "options_en": ["1947", "1948", "1949", "1950"],
        "options_hi": ["1947", "1948", "1949", "1950"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the traditional name of Bhaderwah?",
        "question_hi": "भदरवाह का पारंपरिक नाम क्या है?",
        "options_en": ["Mini Kashmir", "Land of Gods", "Both", "None"],
        "options_hi": ["मिनी कश्मीर", "देवताओं की भूमि", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which famous spring is known for its trout fish?",
        "question_hi": "कौन सा प्रसिद्ध झरना अपनी ट्राउट मछली के लिए जाना जाता है?",
        "options_en": ["Kokernag", "Verinag", "Achabal", "Daksum"],
        "options_hi": ["कोकरनाग", "वेरीनाग", "अचबल", "दक्सुम"],
        "answer_en": "Kokernag",
        "answer_hi": "कोकरनाग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The famous Jami Masjid in Srinagar was originally built as what?",
        "question_hi": "श्रीनगर में प्रसिद्ध जामी मस्जिद मूल रूप से क्या बनाई गई थी?",
        "options_en": ["Buddhist Monastery", "Hindu Temple", "Sikh Gurudwara", "Church"],
        "options_hi": ["बौद्ध मठ", "हिंदू मंदिर", "सिख गुरुद्वारा", "चर्च"],
        "answer_en": "Buddhist Monastery",
        "answer_hi": "बौद्ध मठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the traditional name of Kishtwar?",
        "question_hi": "किश्तवाड़ का पारंपरिक नाम क्या है?",
        "options_en": ["Land of Saffron", "Land of Sapphire", "Both", "None"],
        "options_hi": ["केसर की भूमि", "नीलम की भूमि", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which famous mountain peak is visible from Gulmarg?",
        "question_hi": "गुलमर्ग से कौन सी प्रसिद्ध पर्वत चोटी दिखाई देती है?",
        "options_en": ["Nanga Parbat", "K2", "Mount Everest", "Nanda Devi"],
        "options_hi": ["नंगा परबत", "K2", "माउंट एवरेस्ट", "नंदा देवी"],
        "answer_en": "Nanga Parbat",
        "answer_hi": "नंगा परबत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The famous Baltal base camp is for which pilgrimage?",
        "question_hi": "प्रसिद्ध बालटल बेस कैंप किस तीर्थयात्रा के लिए है?",
        "options_en": ["Amarnath", "Vaishno Devi", "Kedarnath", "Badrinath"],
        "options_hi": ["अमरनाथ", "वैष्णो देवी", "केदारनाथ", "बद्रीनाथ"],
        "answer_en": "Amarnath",
        "answer_hi": "अमरनाथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the traditional name of Ladakh's double-humped camel?",
        "question_hi": "लद्दाख के दो कूबड़ वाले ऊंट का पारंपरिक नाम क्या है?",
        "options_en": ["Bactrian Camel", "Ladakhi Camel", "Nubra Camel", "All of these"],
        "options_hi": ["बैक्ट्रियन ऊंट", "लद्दाखी ऊंट", "नुब्रा ऊंट", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which famous lake is known for its floating post office?",
        "question_hi": "कौन सी प्रसिद्ध झील अपने फ्लोटिंग पोस्ट ऑफिस के लिए जानी जाती है?",
        "options_en": ["Dal Lake", "Wular Lake", "Mansar Lake", "Pangong Lake"],
        "options_hi": ["डल झील", "वुलर झील", "मानसर झील", "पैंगोंग झील"],
        "answer_en": "Dal Lake",
        "answer_hi": "डल झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The famous Khardung La pass is at what altitude?",
        "question_hi": "प्रसिद्ध खारदुंग ला दर्रा कितनी ऊंचाई पर है?",
        "options_en": ["5359 m", "5602 m", "5829 m", "5987 m"],
        "options_hi": ["5359 m", "5602 m", "5829 m", "5987 m"],
        "answer_en": "5359 m",
        "answer_hi": "5359 m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the traditional name of Kashmir's saffron?",
        "question_hi": "कश्मीर के केसर का पारंपरिक नाम क्या है?",
        "options_en": ["Kashmiri Kesar", "Mongra Saffron", "Both", "None"],
        "options_hi": ["कश्मीरी केसर", "मोंगरा केसर", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which famous garden has the largest tulip garden in Asia?",
        "question_hi": "किस प्रसिद्ध उद्यान में एशिया का सबसे बड़ा ट्यूलिप गार्डन है?",
        "options_en": ["Indira Gandhi Tulip Garden", "Shalimar Bagh", "Nishat Bagh", "Chashme Shahi"],
        "options_hi": ["इंदिरा गांधी ट्यूलिप गार्डन", "शालीमार बाग", "निशात बाग", "चश्मा शाही"],
        "answer_en": "Indira Gandhi Tulip Garden",
        "answer_hi": "इंदिरा गांधी ट्यूलिप गार्डन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The famous Shey Palace was the summer capital of which kingdom?",
        "question_hi": "प्रसिद्ध शे पैलेस किस राज्य की ग्रीष्मकालीन राजधानी थी?",
        "options_en": ["Ladakh", "Kashmir", "Jammu", "Kargil"],
        "options_hi": ["लद्दाख", "कश्मीर", "जम्मू", "कारगिल"],
        "answer_en": "Ladakh",
        "answer_hi": "लद्दाख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the traditional name of Jammu's famous temple?",
        "question_hi": "जम्मू के प्रसिद्ध मंदिर का पारंपरिक नाम क्या है?",
        "options_en": ["Raghunath Temple", "Ranbireshwar Temple", "Both", "None"],
        "options_hi": ["रघुनाथ मंदिर", "रनबीरेश्वर मंदिर", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    }
        
// Add more questions here...
];


let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}















////////////////////////////////////////////////////////////////////////////////////////////all file and folder me code add karna hai 


// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////