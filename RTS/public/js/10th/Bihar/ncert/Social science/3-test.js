const questions = [
    {
        "num": 1,
        "question_en": "Who is known as the Father of Indian Constitution?",
        "question_hi": "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
        "options_en": ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["डॉ. बी.आर. अम्बेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer_en": "Dr. B.R. Ambedkar",
        "answer_hi": "डॉ. बी.आर. अम्बेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
        "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के प्रथम राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Dr. Zakir Hussain", "V.V. Giri"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "डॉ. जाकिर हुसैन", "वी.वी. गिरि"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which is the national animal of India?",
        "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Tiger", "Lion", "Elephant", "Peacock"],
        "options_hi": ["बाघ", "शेर", "हाथी", "मोर"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "When did India gain independence?",
        "question_hi": "भारत को कब स्वतंत्रता मिली?",
        "options_en": ["15 August 1947", "26 January 1950", "2 October 1869", "14 November 1889"],
        "options_hi": ["15 अगस्त 1947", "26 जनवरी 1950", "2 अक्टूबर 1869", "14 नवंबर 1889"],
        "answer_en": "15 August 1947",
        "answer_hi": "15 अगस्त 1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which is the national bird of India?",
        "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "options_en": ["Peacock", "Sparrow", "Parrot", "Eagle"],
        "options_hi": ["मोर", "गौरैया", "तोता", "गरुड़"],
        "answer_en": "Peacock",
        "answer_hi": "मोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Who is known as the Father of the Nation in India?",
        "question_hi": "भारत में राष्ट्रपिता के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Bhagat Singh"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which is the national flower of India?",
        "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
        "options_en": ["Lotus", "Rose", "Marigold", "Sunflower"],
        "options_hi": ["कमल", "गुलाब", "गेंदा", "सूरजमुखी"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Who was the first Prime Minister of India?",
        "question_hi": "भारत के प्रथम प्रधानमंत्री कौन थे?",
        "options_en": ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai"],
        "options_hi": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "मोरारजी देसाई"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which is the national tree of India?",
        "question_hi": "भारत का राष्ट्रीय वृक्ष कौन सा है?",
        "options_en": ["Banyan Tree", "Neem Tree", "Mango Tree", "Peepal Tree"],
        "options_hi": ["बरगद", "नीम", "आम", "पीपल"],
        "answer_en": "Banyan Tree",
        "answer_hi": "बरगद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        "options_hi": ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which is the national fruit of India?",
        "question_hi": "भारत का राष्ट्रीय फल कौन सा है?",
        "options_en": ["Mango", "Apple", "Banana", "Orange"],
        "options_hi": ["आम", "सेब", "केला", "संतरा"],
        "answer_en": "Mango",
        "answer_hi": "आम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारत का राष्ट्रगान किसने लिखा?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Muhammad Iqbal", "Sarojini Naidu"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "मुहम्मद इकबाल", "सरोजिनी नायडू"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which is the national aquatic animal of India?",
        "question_hi": "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
        "options_en": ["Ganges River Dolphin", "Crocodile", "Turtle", "Fish"],
        "options_hi": ["गंगा डॉल्फिन", "मगरमच्छ", "कछुआ", "मछली"],
        "answer_en": "Ganges River Dolphin",
        "answer_hi": "गंगा डॉल्फिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की प्रथम महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which is the national song of India?",
        "question_hi": "भारत का राष्ट्रीय गीत कौन सा है?",
        "options_en": ["Vande Mataram", "Jana Gana Mana", "Sare Jahan Se Achha", "Maa Tujhe Salaam"],
        "options_hi": ["वंदे मातरम्", "जन गण मन", "सारे जहाँ से अच्छा", "माँ तुझे सलाम"],
        "answer_en": "Vande Mataram",
        "answer_hi": "वंदे मातरम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Who wrote the Indian National Song 'Vande Mataram'?",
        "question_hi": "भारत का राष्ट्रीय गीत 'वंदे मातरम्' किसने लिखा?",
        "options_en": ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Mahatma Gandhi", "Subhash Chandra Bose"],
        "options_hi": ["बंकिम चंद्र चट्टोपाध्याय", "रबींद्रनाथ टैगोर", "महात्मा गांधी", "सुभाष चंद्र बोस"],
        "answer_en": "Bankim Chandra Chattopadhyay",
        "answer_hi": "बंकिम चंद्र चट्टोपाध्याय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which is the national calendar of India?",
        "question_hi": "भारत का राष्ट्रीय कैलेंडर कौन सा है?",
        "options_en": ["Saka Calendar", "Vikram Samvat", "Gregorian Calendar", "Hijri Calendar"],
        "options_hi": ["शक संवत", "विक्रम संवत", "ग्रेगोरियन कैलेंडर", "हिजरी कैलेंडर"],
        "answer_en": "Saka Calendar",
        "answer_hi": "शक संवत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Who was the first woman President of India?",
        "question_hi": "भारत की प्रथम महिला राष्ट्रपति कौन थीं?",
        "options_en": ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sonia Gandhi"],
        "options_hi": ["प्रतिभा पाटिल", "इंदिरा गांधी", "सरोजिनी नायडू", "सोनिया गांधी"],
        "answer_en": "Pratibha Patil",
        "answer_hi": "प्रतिभा पाटिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which is the national river of India?",
        "question_hi": "भारत की राष्ट्रीय नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
        "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the currency of India?",
        "question_hi": "भारत की मुद्रा क्या है?",
        "options_en": ["Indian Rupee", "Dollar", "Euro", "Yen"],
        "options_hi": ["भारतीय रुपया", "डॉलर", "यूरो", "येन"],
        "answer_en": "Indian Rupee",
        "answer_hi": "भारतीय रुपया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Who designed the Indian National Flag?",
        "question_hi": "भारत का राष्ट्रीय ध्वज किसने डिजाइन किया?",
        "options_en": ["Pingali Venkayya", "Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar"],
        "options_hi": ["पिंगली वेंकय्या", "महात्मा गांधी", "जवाहरलाल नेहरू", "डॉ. बी.आर. अम्बेडकर"],
        "answer_en": "Pingali Venkayya",
        "answer_hi": "पिंगली वेंकय्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which is the national heritage animal of India?",
        "question_hi": "भारत का राष्ट्रीय धरोहर पशु कौन सा है?",
        "options_en": ["Elephant", "Tiger", "Lion", "Rhinoceros"],
        "options_hi": ["हाथी", "बाघ", "शेर", "गैंडा"],
        "answer_en": "Elephant",
        "answer_hi": "हाथी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Who was the first Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के प्रथम गवर्नर-जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Jawaharlal Nehru"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू"],
        "answer_en": "Lord Mountbatten",
        "answer_hi": "लॉर्ड माउंटबेटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which is the national vegetable of India?",
        "question_hi": "भारत की राष्ट्रीय सब्जी कौन सी है?",
        "options_en": ["Pumpkin", "Potato", "Tomato", "Onion"],
        "options_hi": ["कद्दू", "आलू", "टमाटर", "प्याज"],
        "answer_en": "Pumpkin",
        "answer_hi": "कद्दू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the literacy rate of India according to 2011 census?",
        "question_hi": "2011 की जनगणना के अनुसार भारत की साक्षरता दर क्या है?",
        "options_en": ["74.04%", "65.38%", "81.32%", "52.21%"],
        "options_hi": ["74.04%", "65.38%", "81.32%", "52.21%"],
        "answer_en": "74.04%",
        "answer_hi": "74.04%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Who was the first Indian to win Nobel Prize?",
        "question_hi": "नोबेल पुरस्कार जीतने वाले प्रथम भारतीय कौन थे?",
        "options_en": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Hargobind Khorana"],
        "options_hi": ["रबींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "हरगोबिंद खुराना"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which is the national microbe of India?",
        "question_hi": "भारत का राष्ट्रीय सूक्ष्मजीव कौन सा है?",
        "options_en": ["Lactobacillus", "Rhizobium", "Yeast", "E. coli"],
        "options_hi": ["लैक्टोबैसिलस", "राइजोबियम", "यीस्ट", "ई. कोलाई"],
        "answer_en": "Lactobacillus",
        "answer_hi": "लैक्टोबैसिलस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Who was the first Indian woman to win Miss World?",
        "question_hi": "मिस वर्ल्ड जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Reita Faria", "Aishwarya Rai", "Sushmita Sen", "Priyanka Chopra"],
        "options_hi": ["रीता फारिया", "ऐश्वर्या राय", "सुष्मिता सेन", "प्रियंका चोपड़ा"],
        "answer_en": "Reita Faria",
        "answer_hi": "रीता फारिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which is the national aquatic bird of India?",
        "question_hi": "भारत का राष्ट्रीय जलीय पक्षी कौन सा है?",
        "options_en": ["Kingfisher", "Swan", "Duck", "Crane"],
        "options_hi": ["किंगफिशर", "हंस", "बत्तख", "सारस"],
        "answer_en": "Kingfisher",
        "answer_hi": "किंगफिशर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Who was the first Indian in space?",
        "question_hi": "अंतरिक्ष में जाने वाले प्रथम भारतीय कौन थे?",
        "options_en": ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Ravish Malhotra"],
        "options_hi": ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "रविश मल्होत्रा"],
        "answer_en": "Rakesh Sharma",
        "answer_hi": "राकेश शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is the national reptile of India?",
        "question_hi": "भारत का राष्ट्रीय सरीसृप कौन सा है?",
        "options_en": ["King Cobra", "Crocodile", "Turtle", "Monitor Lizard"],
        "options_hi": ["किंग कोबरा", "मगरमच्छ", "कछुआ", "गोह"],
        "answer_en": "King Cobra",
        "answer_hi": "किंग कोबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Who was the first Indian to win an Olympic gold medal?",
        "question_hi": "ओलंपिक स्वर्ण पदक जीतने वाले प्रथम भारतीय कौन थे?",
        "options_en": ["Abhinav Bindra", "K.D. Jadhav", "Milkha Singh", "P.T. Usha"],
        "options_hi": ["अभिनव बिंद्रा", "के.डी. जाधव", "मिल्खा सिंह", "पी.टी. उषा"],
        "answer_en": "Abhinav Bindra",
        "answer_hi": "अभिनव बिंद्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which is the national game of India?",
        "question_hi": "भारत का राष्ट्रीय खेल कौन सा है?",
        "options_en": ["Hockey", "Cricket", "Football", "Kabaddi"],
        "options_hi": ["हॉकी", "क्रिकेट", "फुटबॉल", "कबड्डी"],
        "answer_en": "Hockey",
        "answer_hi": "हॉकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Who was the first Indian woman to win an Olympic medal?",
        "question_hi": "ओलंपिक पदक जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Karnam Malleswari", "P.T. Usha", "Mary Kom", "Saina Nehwal"],
        "options_hi": ["कर्णम मल्लेश्वरी", "पी.टी. उषा", "मैरी कॉम", "साइना नेहवाल"],
        "answer_en": "Karnam Malleswari",
        "answer_hi": "कर्णम मल्लेश्वरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which is the national currency symbol of India?",
        "question_hi": "भारत का राष्ट्रीय मुद्रा प्रतीक कौन सा है?",
        "options_en": ["₹", "$", "€", "¥"],
        "options_hi": ["₹", "$", "€", "¥"],
        "answer_en": "₹",
        "answer_hi": "₹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Who was the first Indian woman to climb Mount Everest?",
        "question_hi": "माउंट एवरेस्ट पर चढ़ने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Bachendri Pal", "Santosh Yadav", "Arunima Sinha", "Premlata Agarwal"],
        "options_hi": ["बछेंद्री पाल", "संतोष यादव", "अरुनिमा सिन्हा", "प्रेमलता अग्रवाल"],
        "answer_en": "Bachendri Pal",
        "answer_hi": "बछेंद्री पाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which is the national epic of India?",
        "question_hi": "भारत का राष्ट्रीय महाकाव्य कौन सा है?",
        "options_en": ["Ramayana and Mahabharata", "Gita Govinda", "Silappadikaram", "Manimekalai"],
        "options_hi": ["रामायण और महाभारत", "गीत गोविंद", "शिलप्पदिकारम", "मणिमेकलई"],
        "answer_en": "Ramayana and Mahabharata",
        "answer_hi": "रामायण और महाभारत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Who was the first Indian woman to win a Grammy Award?",
        "question_hi": "ग्रैमी पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Tanvi Shah", "A.R. Rahman", "Zakir Hussain", "Vikku Vinayakram"],
        "options_hi": ["तन्वी शाह", "ए.आर. रहमान", "जाकिर हुसैन", "विक्कू विनायकरम"],
        "answer_en": "Tanvi Shah",
        "answer_hi": "तन्वी शाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which is the national language of India?",
        "question_hi": "भारत की राष्ट्रीय भाषा कौन सी है?",
        "options_en": ["Hindi", "English", "Sanskrit", "No National Language"],
        "options_hi": ["हिंदी", "अंग्रेजी", "संस्कृत", "कोई राष्ट्रीय भाषा नहीं"],
        "answer_en": "No National Language",
        "answer_hi": "कोई राष्ट्रीय भाषा नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Who was the first Indian to win a Booker Prize?",
        "question_hi": "बुकर पुरस्कार जीतने वाले प्रथम भारतीय कौन थे?",
        "options_en": ["Arundhati Roy", "Salman Rushdie", "V.S. Naipaul", "Kiran Desai"],
        "options_hi": ["अरुंधति रॉय", "सलमान रुश्दी", "वी.एस. नायपॉल", "किरण देसाई"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which is the national mosque of India?",
        "question_hi": "भारत की राष्ट्रीय मस्जिद कौन सी है?",
        "options_en": ["Jama Masjid, Delhi", "Taj-ul-Masajid", "Mecca Masjid", "No National Mosque"],
        "options_hi": ["जामा मस्जिद, दिल्ली", "ताज-उल-मसाजिद", "मक्का मस्जिद", "कोई राष्ट्रीय मस्जिद नहीं"],
        "answer_en": "No National Mosque",
        "answer_hi": "कोई राष्ट्रीय मस्जिद नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Who was the first Indian woman to win an Asian Games gold medal?",
        "question_hi": "एशियाई खेल स्वर्ण पदक जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Kamaljeet Sandhu", "P.T. Usha", "Shiny Wilson", "M.D. Valsamma"],
        "options_hi": ["कमलजीत संधू", "पी.टी. उषा", "शिनी विल्सन", "एम.डी. वालसम्मा"],
        "answer_en": "Kamaljeet Sandhu",
        "answer_hi": "कमलजीत संधू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which is the national riverfront of India?",
        "question_hi": "भारत का राष्ट्रीय रिवरफ्रंट कौन सा है?",
        "options_en": ["Sabarmati Riverfront", "Ganga Riverfront", "Yamuna Riverfront", "No National Riverfront"],
        "options_hi": ["साबरमती रिवरफ्रंट", "गंगा रिवरफ्रंट", "यमुना रिवरफ्रंट", "कोई राष्ट्रीय रिवरफ्रंट नहीं"],
        "answer_en": "Sabarmati Riverfront",
        "answer_hi": "साबरमती रिवरफ्रंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who was the first Indian to win a Nobel Prize in Science?",
        "question_hi": "विज्ञान में नोबेल पुरस्कार जीतने वाले प्रथम भारतीय कौन थे?",
        "options_en": ["C.V. Raman", "Hargobind Khorana", "Subrahmanyan Chandrasekhar", "Venkatraman Ramakrishnan"],
        "options_hi": ["सी.वी. रमन", "हरगोबिंद खुराना", "सुब्रह्मण्यन चंद्रशेखर", "वेंकटरमन रामकृष्णन"],
        "answer_en": "C.V. Raman",
        "answer_hi": "सी.वी. रमन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which is the national library of India?",
        "question_hi": "भारत की राष्ट्रीय पुस्तकालय कौन सी है?",
        "options_en": ["National Library of India, Kolkata", "Delhi Public Library", "British Council Library", "Raza Library"],
        "options_hi": ["नेशनल लाइब्रेरी ऑफ इंडिया, कोलकाता", "दिल्ली पब्लिक लाइब्रेरी", "ब्रिटिश काउंसिल लाइब्रेरी", "रज़ा लाइब्रेरी"],
        "answer_en": "National Library of India, Kolkata",
        "answer_hi": "नेशनल लाइब्रेरी ऑफ इंडिया, कोलकाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Who was the first Indian woman to win a Padma Shri?",
        "question_hi": "पद्म श्री जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["M.S. Subbulakshmi", "Lata Mangeshkar", "Sarojini Naidu", "Indira Gandhi"],
        "options_hi": ["एम.एस. सुब्बुलक्ष्मी", "लता मंगेशकर", "सरोजिनी नायडू", "इंदिरा गांधी"],
        "answer_en": "M.S. Subbulakshmi",
        "answer_hi": "एम.एस. सुब्बुलक्ष्मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which is the national museum of India?",
        "question_hi": "भारत का राष्ट्रीय संग्रहालय कौन सा है?",
        "options_en": ["National Museum, New Delhi", "Indian Museum, Kolkata", "Salar Jung Museum", "Victoria Memorial"],
        "options_hi": ["नेशनल म्यूज़ियम, नई दिल्ली", "इंडियन म्यूज़ियम, कोलकाता", "सालार जंग संग्रहालय", "विक्टोरिया मेमोरियल"],
        "answer_en": "National Museum, New Delhi",
        "answer_hi": "नेशनल म्यूज़ियम, नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Who was the first Indian woman to win a Ramon Magsaysay Award?",
        "question_hi": "रामोन मैग्सेसे पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Mother Teresa", "Kiran Bedi", "Aruna Roy", "Ela Bhatt"],
        "options_hi": ["मदर टेरेसा", "किरण बेदी", "अरुणा रॉय", "एला भट्ट"],
        "answer_en": "Mother Teresa",
        "answer_hi": "मदर टेरेसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the national archive of India?",
        "question_hi": "भारत का राष्ट्रीय अभिलेखागार कौन सा है?",
        "options_en": ["National Archives of India", "State Archives", "Nehru Memorial Museum", "No National Archive"],
        "options_hi": ["नेशनल आर्काइव्स ऑफ इंडिया", "राज्य अभिलेखागार", "नेहरू मेमोरियल संग्रहालय", "कोई राष्ट्रीय अभिलेखागार नहीं"],
        "answer_en": "National Archives of India",
        "answer_hi": "नेशनल आर्काइव्स ऑफ इंडिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Who was the first Indian woman to win a National Film Award?",
        "question_hi": "राष्ट्रीय फिल्म पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Nargis Dutt", "Meena Kumari", "Madhubala", "Suchitra Sen"],
        "options_hi": ["नर्गिस दत्त", "मीना कुमारी", "मधुबाला", "सुचित्रा सेन"],
        "answer_en": "Nargis Dutt",
        "answer_hi": "नर्गिस दत्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which is the national monument of India?",
        "question_hi": "भारत का राष्ट्रीय स्मारक कौन सा है?",
        "options_en": ["India Gate", "Taj Mahal", "Red Fort", "Gateway of India"],
        "options_hi": ["इंडिया गेट", "ताज महल", "लाल किला", "गेटवे ऑफ इंडिया"],
        "answer_en": "India Gate",
        "answer_hi": "इंडिया गेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who was the first Indian woman to win a Jnanpith Award?",
        "question_hi": "ज्ञानपीठ पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Ashapurna Devi", "Mahadevi Verma", "Amrita Pritam", "Mahasweta Devi"],
        "options_hi": ["आशापूर्णा देवी", "महादेवी वर्मा", "अमृता प्रीतम", "महाश्वेता देवी"],
        "answer_en": "Ashapurna Devi",
        "answer_hi": "आशापूर्णा देवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which is the national emblem of India?",
        "question_hi": "भारत का राष्ट्रीय प्रतीक कौन सा है?",
        "options_en": ["Lion Capital of Ashoka", "Tiger", "Elephant", "Peacock"],
        "options_hi": ["अशोक स्तंभ", "बाघ", "हाथी", "मोर"],
        "answer_en": "Lion Capital of Ashoka",
        "answer_hi": "अशोक स्तंभ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Who was the first Indian woman to win a Sahitya Akademi Award?",
        "question_hi": "साहित्य अकादमी पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Amrita Pritam", "Mahadevi Verma", "Sarojini Naidu", "Kamala Das"],
        "options_hi": ["अमृता प्रीतम", "महादेवी वर्मा", "सरोजिनी नायडू", "कमला दास"],
        "answer_en": "Amrita Pritam",
        "answer_hi": "अमृता प्रीतम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which is the national days of India?",
        "question_hi": "भारत के राष्ट्रीय दिवस कौन से हैं?",
        "options_en": ["Republic Day, Independence Day, Gandhi Jayanti", "Diwali, Holi, Eid", "Christmas, Easter, Good Friday", "None of these"],
        "options_hi": ["गणतंत्र दिवस, स्वतंत्रता दिवस, गांधी जयंती", "दीवाली, होली, ईद", "क्रिसमस, ईस्टर, गुड फ्राइडे", "इनमें से कोई नहीं"],
        "answer_en": "Republic Day, Independence Day, Gandhi Jayanti",
        "answer_hi": "गणतंत्र दिवस, स्वतंत्रता दिवस, गांधी जयंती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Who was the first Indian woman to win a Dadasaheb Phalke Award?",
        "question_hi": "दादासाहेब फाल्के पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Devika Rani", "Sulochana", "Durga Khote", "Kanandevi"],
        "options_hi": ["देविका रानी", "सुलोचना", "दुर्गा खोटे", "कानन देवी"],
        "answer_en": "Devika Rani",
        "answer_hi": "देविका रानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which is the national anthem playing time?",
        "question_hi": "राष्ट्रगान का बजने का समय कितना है?",
        "options_en": ["52 seconds", "60 seconds", "45 seconds", "30 seconds"],
        "options_hi": ["52 सेकंड", "60 सेकंड", "45 सेकंड", "30 सेकंड"],
        "answer_en": "52 seconds",
        "answer_hi": "52 सेकंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Who was the first Indian woman to win a Arjuna Award?",
        "question_hi": "अर्जुन पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Stephie D'Souza", "Shiny Abraham", "P.T. Usha", "Karnam Malleswari"],
        "options_hi": ["स्टेफी डिसूजा", "शाइनी अब्राहम", "पी.टी. उषा", "कर्णम मल्लेश्वरी"],
        "answer_en": "Stephie D'Souza",
        "answer_hi": "स्टेफी डिसूजा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which is the national pledge of India?",
        "question_hi": "भारत का राष्ट्रीय संकल्प कौन सा है?",
        "options_en": ["National Pledge", "Preamble", "Fundamental Duties", "Fundamental Rights"],
        "options_hi": ["राष्ट्रीय प्रतिज्ञा", "प्रस्तावना", "मूल कर्तव्य", "मूल अधिकार"],
        "answer_en": "National Pledge",
        "answer_hi": "राष्ट्रीय प्रतिज्ञा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Who was the first Indian woman to win a Padma Vibhushan?",
        "question_hi": "पद्म विभूषण जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["M.S. Subbulakshmi", "Lata Mangeshkar", "Indira Gandhi", "Mother Teresa"],
        "options_hi": ["एम.एस. सुब्बुलक्ष्मी", "लता मंगेशकर", "इंदिरा गांधी", "मदर टेरेसा"],
        "answer_en": "M.S. Subbulakshmi",
        "answer_hi": "एम.एस. सुब्बुलक्ष्मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which is the national identity document of India?",
        "question_hi": "भारत का राष्ट्रीय पहचान दस्तावेज कौन सा है?",
        "options_en": ["Aadhaar Card", "PAN Card", "Voter ID", "Passport"],
        "options_hi": ["आधार कार्ड", "पैन कार्ड", "मतदाता पहचान पत्र", "पासपोर्ट"],
        "answer_en": "Aadhaar Card",
        "answer_hi": "आधार कार्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Who was the first Indian woman to win a Bharat Ratna?",
        "question_hi": "भारत रत्न जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Indira Gandhi", "Mother Teresa", "M.S. Subbulakshmi", "Lata Mangeshkar"],
        "options_hi": ["इंदिरा गांधी", "मदर टेरेसा", "एम.एस. सुब्बुलक्ष्मी", "लता मंगेशकर"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which is the national information portal of India?",
        "question_hi": "भारत का राष्ट्रीय सूचना पोर्टल कौन सा है?",
        "options_en": ["india.gov.in", "nic.in", "gov.in", "incometaxindia.gov.in"],
        "options_hi": ["india.gov.in", "nic.in", "gov.in", "incometaxindia.gov.in"],
        "answer_en": "india.gov.in",
        "answer_hi": "india.gov.in",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Who was the first Indian woman to win a Pulitzer Prize?",
        "question_hi": "पुलित्जर पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Gobind Behari Lal", "Jhumpa Lahiri", "No Indian woman has won", "Arundhati Roy"],
        "options_hi": ["गोबिंद बिहारी लाल", "झुम्पा लाहिड़ी", "कोई भारतीय महिला नहीं जीती", "अरुंधति रॉय"],
        "answer_en": "No Indian woman has won",
        "answer_hi": "कोई भारतीय महिला नहीं जीती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which is the national digital payment system of India?",
        "question_hi": "भारत की राष्ट्रीय डिजिटल भुगतान प्रणाली कौन सी है?",
        "options_en": ["UPI", "NEFT", "RTGS", "IMPS"],
        "options_hi": ["UPI", "NEFT", "RTGS", "IMPS"],
        "answer_en": "UPI",
        "answer_hi": "UPI",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Who was the first Indian woman to win a Miss Universe?",
        "question_hi": "मिस यूनिवर्स जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Sushmita Sen", "Aishwarya Rai", "Lara Dutta", "Dia Mirza"],
        "options_hi": ["सुष्मिता सेन", "ऐश्वर्या राय", "लारा दत्ता", "दिया मिर्जा"],
        "answer_en": "Sushmita Sen",
        "answer_hi": "सुष्मिता सेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which is the national health insurance scheme of India?",
        "question_hi": "भारत की राष्ट्रीय स्वास्थ्य बीमा योजना कौन सी है?",
        "options_en": ["Ayushman Bharat", "RSBY", "ESIC", "CGHS"],
        "options_hi": ["आयुष्मान भारत", "RSBY", "ESIC", "CGHS"],
        "answer_en": "Ayushman Bharat",
        "answer_hi": "आयुष्मान भारत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Who was the first Indian woman to win an Oscar?",
        "question_hi": "ऑस्कर जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Bhanu Athaiya", "A.R. Rahman", "Resul Pookutty", "Gulzar"],
        "options_hi": ["भानु अथैया", "ए.आर. रहमान", "रेशुल पुकुट्टी", "गुलज़ार"],
        "answer_en": "Bhanu Athaiya",
        "answer_hi": "भानु अथैया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which is the national pension scheme of India?",
        "question_hi": "भारत की राष्ट्रीय पेंशन योजना कौन सी है?",
        "options_en": ["National Pension System", "EPFO", "PPF", "Senior Citizen Scheme"],
        "options_hi": ["राष्ट्रीय पेंशन प्रणाली", "EPFO", "PPF", "वरिष्ठ नागरिक योजना"],
        "answer_en": "National Pension System",
        "answer_hi": "राष्ट्रीय पेंशन प्रणाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Who was the first Indian woman to win a Padma Bhushan?",
        "question_hi": "पद्म भूषण जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["M.S. Subbulakshmi", "Lata Mangeshkar", "Sarojini Naidu", "Indira Gandhi"],
        "options_hi": ["एम.एस. सुब्बुलक्ष्मी", "लता मंगेशकर", "सरोजिनी नायडू", "इंदिरा गांधी"],
        "answer_en": "M.S. Subbulakshmi",
        "answer_hi": "एम.एस. सुब्बुलक्ष्मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which is the national educational policy of India?",
        "question_hi": "भारत की राष्ट्रीय शिक्षा नीति कौन सी है?",
        "options_en": ["National Education Policy 2020", "Right to Education Act", "Sarva Shiksha Abhiyan", "Mid-day Meal Scheme"],
        "options_hi": ["राष्ट्रीय शिक्षा नीति 2020", "शिक्षा का अधिकार अधिनियम", "सर्व शिक्षा अभियान", "मध्याह्न भोजन योजना"],
        "answer_en": "National Education Policy 2020",
        "answer_hi": "राष्ट्रीय शिक्षा नीति 2020",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Who was the first Indian woman to win a National Bravery Award?",
        "question_hi": "राष्ट्रीय बहादुरी पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Kashmira Sawant", "Neerja Bhanot", "Harita Kaur Deol", "Sunita Singh"],
        "options_hi": ["कश्मीरा सावंत", "नीरजा भनोट", "हरिता कौर देओल", "सुनीता सिंह"],
        "answer_en": "Kashmira Sawant",
        "answer_hi": "कश्मीरा सावंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which is the national rural employment guarantee scheme of India?",
        "question_hi": "भारत की राष्ट्रीय ग्रामीण रोजगार गारंटी योजना कौन सी है?",
        "options_en": ["MGNREGA", "PM-KISAN", "NSAP", "PMAY"],
        "options_hi": ["MGNREGA", "PM-KISAN", "NSAP", "PMAY"],
        "answer_en": "MGNREGA",
        "answer_hi": "MGNREGA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Who was the first Indian woman to win a Khel Ratna Award?",
        "question_hi": "खेल रत्न पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Karnam Malleswari", "P.T. Usha", "Mary Kom", "Saina Nehwal"],
        "options_hi": ["कर्णम मल्लेश्वरी", "पी.टी. उषा", "मैरी कॉम", "साइना नेहवाल"],
        "answer_en": "Karnam Malleswari",
        "answer_hi": "कर्णम मल्लेश्वरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which is the national urban renewal mission of India?",
        "question_hi": "भारत का राष्ट्रीय शहरी नवीकरण मिशन कौन सा है?",
        "options_en": ["JNNURM", "AMRUT", "Smart Cities", "HRIDAY"],
        "options_hi": ["JNNURM", "AMRUT", "स्मार्ट सिटी", "HRIDAY"],
        "answer_en": "JNNURM",
        "answer_hi": "JNNURM",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Who was the first Indian woman to win a Dronacharya Award?",
        "question_hi": "द्रोणाचार्य पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Renu Kohli", "No woman has won", "G.E. Sridharan", "P. Gopichand"],
        "options_hi": ["रेनू कोहली", "कोई महिला नहीं जीती", "जी.ई. श्रीधरन", "पी. गोपीचंद"],
        "answer_en": "No woman has won",
        "answer_hi": "कोई महिला नहीं जीती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which is the national food security act of India?",
        "question_hi": "भारत का राष्ट्रीय खाद्य सुरक्षा अधिनियम कौन सा है?",
        "options_en": ["National Food Security Act 2013", "PDS", "Mid-day Meal Scheme", "Annapurna Scheme"],
        "options_hi": ["राष्ट्रीय खाद्य सुरक्षा अधिनियम 2013", "PDS", "मध्याह्न भोजन योजना", "अन्नपूर्णा योजना"],
        "answer_en": "National Food Security Act 2013",
        "answer_hi": "राष्ट्रीय खाद्य सुरक्षा अधिनियम 2013",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Who was the first Indian woman to win a Rajiv Gandhi Khel Ratna?",
        "question_hi": "राजीव गांधी खेल रत्न पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Karnam Malleswari", "P.T. Usha", "Mary Kom", "Same as Khel Ratna"],
        "options_hi": ["कर्णम मल्लेश्वरी", "पी.टी. उषा", "मैरी कॉम", "खेल रत्न के समान"],
        "answer_en": "Same as Khel Ratna",
        "answer_hi": "खेल रत्न के समान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which is the national disaster management authority of India?",
        "question_hi": "भारत की राष्ट्रीय आपदा प्रबंधन प्राधिकरण कौन सी है?",
        "options_en": ["NDMA", "NIDM", "SDMA", "DDMA"],
        "options_hi": ["NDMA", "NIDM", "SDMA", "DDMA"],
        "answer_en": "NDMA",
        "answer_hi": "NDMA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Who was the first Indian woman to win a Nobel Peace Prize?",
        "question_hi": "नोबेल शांति पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Mother Teresa", "Indira Gandhi", "Kailash Satyarthi", "Malala Yousafzai"],
        "options_hi": ["मदर टेरेसा", "इंदिरा गांधी", "कैलाश सत्यार्थी", "मलाला यूसुफज़ई"],
        "answer_en": "Mother Teresa",
        "answer_hi": "मदर टेरेसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which is the national green tribunal of India?",
        "question_hi": "भारत का राष्ट्रीय हरित अधिकरण कौन सा है?",
        "options_en": ["National Green Tribunal", "Central Pollution Control Board", "Ministry of Environment", "State Pollution Boards"],
        "options_hi": ["राष्ट्रीय हरित अधिकरण", "केंद्रीय प्रदूषण नियंत्रण बोर्ड", "पर्यावरण मंत्रालय", "राज्य प्रदूषण बोर्ड"],
        "answer_en": "National Green Tribunal",
        "answer_hi": "राष्ट्रीय हरित अधिकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Who was the first Indian woman to win a Miss Asia Pacific?",
        "question_hi": "मिस एशिया पैसिफिक जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Dia Mirza", "Priyanka Chopra", "Sushmita Sen", "Aishwarya Rai"],
        "options_hi": ["दिया मिर्जा", "प्रियंका चोपड़ा", "सुष्मिता सेन", "ऐश्वर्या राय"],
        "answer_en": "Dia Mirza",
        "answer_hi": "दिया मिर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which is the national human rights commission of India?",
        "question_hi": "भारत का राष्ट्रीय मानवाधिकार आयोग कौन सा है?",
        "options_en": ["National Human Rights Commission", "State Human Rights Commission", "National Commission for Women", "National Commission for Minorities"],
        "options_hi": ["राष्ट्रीय मानवाधिकार आयोग", "राज्य मानवाधिकार आयोग", "राष्ट्रीय महिला आयोग", "राष्ट्रीय अल्पसंख्यक आयोग"],
        "answer_en": "National Human Rights Commission",
        "answer_hi": "राष्ट्रीय मानवाधिकार आयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Who was the first Indian woman to win a Filmfare Award?",
        "question_hi": "फिल्मफेयर पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Nargis Dutt", "Meena Kumari", "Madhubala", "Nutan"],
        "options_hi": ["नर्गिस दत्त", "मीना कुमारी", "मधुबाला", "नूतन"],
        "answer_en": "Nargis Dutt",
        "answer_hi": "नर्गिस दत्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which is the national commission for women of India?",
        "question_hi": "भारत का राष्ट्रीय महिला आयोग कौन सा है?",
        "options_en": ["National Commission for Women", "State Commission for Women", "Women and Child Development Ministry", "None of these"],
        "options_hi": ["राष्ट्रीय महिला आयोग", "राज्य महिला आयोग", "महिला एवं बाल विकास मंत्रालय", "इनमें से कोई नहीं"],
        "answer_en": "National Commission for Women",
        "answer_hi": "राष्ट्रीय महिला आयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Who was the first Indian woman to win a BAFTA Award?",
        "question_hi": "BAFTA पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Devika Rani", "Aishwarya Rai", "Deepika Padukone", "Priyanka Chopra"],
        "options_hi": ["देविका रानी", "ऐश्वर्या राय", "दीपिका पादुकोण", "प्रियंका चोपड़ा"],
        "answer_en": "Devika Rani",
        "answer_hi": "देविका रानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which is the national commission for minorities of India?",
        "question_hi": "भारत का राष्ट्रीय अल्पसंख्यक आयोग कौन सा है?",
        "options_en": ["National Commission for Minorities", "State Commission for Minorities", "Minority Affairs Ministry", "None of these"],
        "options_hi": ["राष्ट्रीय अल्पसंख्यक आयोग", "राज्य अल्पसंख्यक आयोग", "अल्पसंख्यक मामलों का मंत्रालय", "इनमें से कोई नहीं"],
        "answer_en": "National Commission for Minorities",
        "answer_hi": "राष्ट्रीय अल्पसंख्यक आयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Who was the first Indian woman to win a Cannes Film Festival award?",
        "question_hi": "कान्स फिल्म फेस्टिवल पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Arundhati Roy", "Deepika Padukone", "Aishwarya Rai", "Nandita Das"],
        "options_hi": ["अरुंधति रॉय", "दीपिका पादुकोण", "ऐश्वर्या राय", "नंदिता दास"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which is the national commission for scheduled castes of India?",
        "question_hi": "भारत का राष्ट्रीय अनुसूचित जाति आयोग कौन सा है?",
        "options_en": ["National Commission for Scheduled Castes", "State Commission for SC", "Social Justice Ministry", "None of these"],
        "options_hi": ["राष्ट्रीय अनुसूचित जाति आयोग", "राज्य अनुसूचित जाति आयोग", "सामाजिक न्याय मंत्रालय", "इनमें से कोई नहीं"],
        "answer_en": "National Commission for Scheduled Castes",
        "answer_hi": "राष्ट्रीय अनुसूचित जाति आयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Who was the first Indian woman to win a Miss India title?",
        "question_hi": "मिस इंडिया खिताब जीतने वाली प्रथम भारतीय महिला कौन थीं?",
        "options_en": ["Pramila (Esther Abraham)", "Leela Naidu", "Persis Khambatta", "Zeenat Aman"],
        "options_hi": ["प्रमिला (एस्थर अब्राहम)", "लीला नायडू", "पर्सिस खंबट्टा", "जीनत अमान"],
        "answer_en": "Pramila (Esther Abraham)",
        "answer_hi": "प्रमिला (एस्थर अब्राहम)",
        "attempted": false,
        "selected": ""
    },
    {
    "num": 92,
    "question_en": "Which is the national commission for scheduled tribes of India?",
    "question_hi": "भारत का राष्ट्रीय अनुसूचित जनजाति आयोग कौन सा है?",
    "options_en": ["National Commission for Scheduled Tribes", "State Commission for ST", "Tribal Affairs Ministry", "None of these"],
    "options_hi": ["राष्ट्रीय अनुसूचित जनजाति आयोग", "राज्य अनुसूचित जनजाति आयोग", "जनजातीय मामलों का मंत्रालय", "इनमें से कोई नहीं"],
    "answer_en": "National Commission for Scheduled Tribes",
    "answer_hi": "राष्ट्रीय अनुसूचित जनजाति आयोग",
    "attempted": false,
    "selected": ""
},
{
    "num": 93,
    "question_en": "Who was the first Indian woman to win a National Award for Best Actress?",
    "question_hi": "राष्ट्रीय पुरस्कार (सर्वश्रेष्ठ अभिनेत्री) जीतने वाली प्रथम भारतीय महिला कौन थीं?",
    "options_en": ["Nargis Dutt", "Meena Kumari", "Shabana Azmi", "Suchitra Sen"],
    "options_hi": ["नर्गिस दत्त", "मीना कुमारी", "शबाना आज़मी", "सुचित्रा सेन"],
    "answer_en": "Nargis Dutt",
    "answer_hi": "नर्गिस दत्त",
    "attempted": false,
    "selected": ""
},
{
    "num": 94,
    "question_en": "Which is the national youth award of India?",
    "question_hi": "भारत का राष्ट्रीय युवा पुरस्कार कौन सा है?",
    "options_en": ["National Youth Awards", "Rajiv Gandhi National Youth Award", "Youth Icon Award", "Yuva Puraskar"],
    "options_hi": ["राष्ट्रीय युवा पुरस्कार", "राजीव गांधी राष्ट्रीय युवा पुरस्कार", "यूथ आइकन पुरस्कार", "युवा पुरस्कार"],
    "answer_en": "National Youth Awards",
    "answer_hi": "राष्ट्रीय युवा पुरस्कार",
    "attempted": false,
    "selected": ""
},
{
    "num": 95,
    "question_en": "Who was the first Indian woman to win a Saraswati Samman?",
    "question_hi": "सरस्वती सम्मान जीतने वाली प्रथम भारतीय महिला कौन थीं?",
    "options_en": ["Harivansh Rai Bachchan", "Mahadevi Varma", "Amrita Pritam", "No woman has won"],
    "options_hi": ["हरिवंश राय बच्चन", "महादेवी वर्मा", "अमृता प्रीतम", "कोई महिला नहीं जीती"],
    "answer_en": "No woman has won",
    "answer_hi": "कोई महिला नहीं जीती",
    "attempted": false,
    "selected": ""
},
{
    "num": 96,
    "question_en": "Which is the national child award of India?",
    "question_hi": "भारत का राष्ट्रीय बाल पुरस्कार कौन सा है?",
    "options_en": ["National Child Awards", "Bal Shakti Puraskar", "ICDS Award", "POCSO Award"],
    "options_hi": ["राष्ट्रीय बाल पुरस्कार", "बाल शक्ति पुरस्कार", "ICDS पुरस्कार", "POCSO पुरस्कार"],
    "answer_en": "National Child Awards",
    "answer_hi": "राष्ट्रीय बाल पुरस्कार",
    "attempted": false,
    "selected": ""
},
{
    "num": 97,
    "question_en": "Who was the first Indian woman to win a Gyanpeeth Award?",
    "question_hi": "ज्ञानपीठ पुरस्कार जीतने वाली प्रथम भारतीय महिला कौन थीं?",
    "options_en": ["Ashapurna Devi", "Mahadevi Varma", "Amrita Pritam", "Mahasweta Devi"],
    "options_hi": ["आशापूर्णा देवी", "महादेवी वर्मा", "अमृता प्रीतम", "महाश्वेता देवी"],
    "answer_en": "Ashapurna Devi",
    "answer_hi": "आशापूर्णा देवी",
    "attempted": false,
    "selected": ""
},
{
    "num": 98,
    "question_en": "Which is the national teacher award of India?",
    "question_hi": "भारत का राष्ट्रीय शिक्षक पुरस्कार कौन सा है?",
    "options_en": ["National Teacher Awards", "Best Teacher Award", "Shikshak Samman", "President's Award"],
    "options_hi": ["राष्ट्रीय शिक्षक पुरस्कार", "सर्वश्रेष्ठ शिक्षक पुरस्कार", "शिक्षक सम्मान", "राष्ट्रपति पुरस्कार"],
    "answer_en": "National Teacher Awards",
    "answer_hi": "राष्ट्रीय शिक्षक पुरस्कार",
    "attempted": false,
    "selected": ""
},
{
    "num": 99,
    "question_en": "Who was the first Indian woman to win a Miss World title?",
    "question_hi": "मिस वर्ल्ड खिताब जीतने वाली प्रथम भारतीय महिला कौन थीं?",
    "options_en": ["Reita Faria", "Aishwarya Rai", "Diana Hayden", "Priyanka Chopra"],
    "options_hi": ["रीता फारिया", "ऐश्वर्या राय", "डायना हेडन", "प्रियंका चोपड़ा"],
    "answer_en": "Reita Faria",
    "answer_hi": "रीता फारिया",
    "attempted": false,
    "selected": ""
},
{
    "num": 100,
    "question_en": "Which is the national women's day of India?",
    "question_hi": "भारत का राष्ट्रीय महिला दिवस कौन सा है?",
    "options_en": ["No official national women's day", "8 March (International Women's Day)", "24 October", "15 October"],
    "options_hi": ["कोई आधिकारिक राष्ट्रीय महिला दिवस नहीं", "8 मार्च (अंतर्राष्ट्रीय महिला दिवस)", "24 अक्टूबर", "15 अक्टूबर"],
    "answer_en": "No official national women's day",
    "answer_hi": "कोई आधिकारिक राष्ट्रीय महिला दिवस नहीं",
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