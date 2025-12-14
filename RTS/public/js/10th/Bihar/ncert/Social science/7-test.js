const questions =[
    {
        "num": 1,
        "question_en": "The French Revolution began in which year?",
        "question_hi": "फ्रांसीसी क्रांति किस वर्ष शुरू हुई?",
        "options_en": ["1776", "1789", "1798", "1804"],
        "options_hi": ["1776", "1789", "1798", "1804"],
        "answer_en": "1789",
        "answer_hi": "1789",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which is the largest producer of rice in India?",
        "question_hi": "भारत में चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["West Bengal", "Uttar Pradesh", "Punjab", "Andhra Pradesh"],
        "options_hi": ["पश्चिम बंगाल", "उत्तर प्रदेश", "पंजाब", "आंध्र प्रदेश"],
        "answer_en": "West Bengal",
        "answer_hi": "पश्चिम बंगाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who was the founder of the Maurya Empire?",
        "question_hi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
        "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The 'Kashmir Valley' is located between which mountain ranges?",
        "question_hi": "'कश्मीर घाटी' किन पर्वत श्रृंखलाओं के बीच स्थित है?",
        "options_en": ["Pir Panjal and Zanskar", "Himalayas and Karakoram", "Aravalli and Vindhya", "Western and Eastern Ghats"],
        "options_hi": ["पीर पंजाल और ज़ांस्कर", "हिमालय और कराकोरम", "अरावली और विंध्य", "पश्चिमी और पूर्वी घाट"],
        "answer_en": "Pir Panjal and Zanskar",
        "answer_hi": "पीर पंजाल और ज़ांस्कर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The 'Civil Disobedience Movement' was launched in which year?",
        "question_hi": "'सविनय अवज्ञा आंदोलन' किस वर्ष शुरू किया गया था?",
        "options_en": ["1928", "1929", "1930", "1931"],
        "options_hi": ["1928", "1929", "1930", "1931"],
        "answer_en": "1930",
        "answer_hi": "1930",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which planet is closest to the Sun?",
        "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Who wrote 'Poverty and Un-British Rule in India'?",
        "question_hi": "'पॉवर्टी एंड अन-ब्रिटिश रूल इन इंडिया' किसने लिखी?",
        "options_en": ["Dadabhai Naoroji", "R.C. Dutt", "Mahatma Gandhi", "Jawaharlal Nehru"],
        "options_hi": ["दादाभाई नौरोजी", "आर.सी. दत्त", "महात्मा गांधी", "जवाहरलाल नेहरू"],
        "answer_en": "Dadabhai Naoroji",
        "answer_hi": "दादाभाई नौरोजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The 'Black Soil' is best suited for which crop?",
        "question_hi": "'काली मिट्टी' किस फसल के लिए सबसे उपयुक्त है?",
        "options_en": ["Cotton", "Wheat", "Rice", "Sugarcane"],
        "options_hi": ["कपास", "गेहूँ", "चावल", "गन्ना"],
        "answer_en": "Cotton",
        "answer_hi": "कपास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The 'Battle of Plassey' was fought between:",
        "question_hi": "'प्लासी का युद्ध' किसके बीच लड़ा गया था?",
        "options_en": ["Siraj-ud-Daulah and British", "Mir Qasim and British", "Tipu Sultan and British", "Shivaji and Mughals"],
        "options_hi": ["सिराज-उद-दौला और अंग्रेज", "मीर कासिम और अंग्रेज", "टीपू सुल्तान और अंग्रेज", "शिवाजी और मुगल"],
        "answer_en": "Siraj-ud-Daulah and British",
        "answer_hi": "सिराज-उद-दौला और अंग्रेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which is the longest national highway in Bihar?",
        "question_hi": "बिहार का सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
        "options_en": ["NH 2", "NH 28", "NH 31", "NH 77"],
        "options_hi": ["एनएच 2", "एनएच 28", "एनएच 31", "एनएच 77"],
        "answer_en": "NH 31",
        "answer_hi": "एनएच 31",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The 'Indian Constitution' was framed by:",
        "question_hi": "भारतीय संविधान का निर्माण किसने किया?",
        "options_en": ["Constituent Assembly", "Parliament", "President", "Supreme Court"],
        "options_hi": ["संविधान सभा", "संसद", "राष्ट्रपति", "सर्वोच्च न्यायालय"],
        "answer_en": "Constituent Assembly",
        "answer_hi": "संविधान सभा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which is the largest freshwater lake in India?",
        "question_hi": "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
        "options_en": ["Wular Lake", "Dal Lake", "Nainital Lake", "Loktak Lake"],
        "options_hi": ["वुलर झील", "डल झील", "नैनीताल झील", "लोकटक झील"],
        "answer_en": "Wular Lake",
        "answer_hi": "वुलर झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Who was the first woman to win Bharat Ratna?",
        "question_hi": "भारत रत्न पाने वाली पहली महिला कौन थीं?",
        "options_en": ["Indira Gandhi", "Mother Teresa", "M.S. Subbulakshmi", "Aruna Asaf Ali"],
        "options_hi": ["इंदिरा गांधी", "मदर टेरेसा", "एम.एस. सुब्बुलक्ष्मी", "अरुणा आसफ अली"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The 'Tropic of Cancer' passes through which city of Bihar?",
        "question_hi": "'कर्क रेखा' बिहार के किस शहर से गुजरती है?",
        "options_en": ["Patna", "Gaya", "Bhagalpur", "It does not pass through Bihar"],
        "options_hi": ["पटना", "गया", "भागलपुर", "यह बिहार से नहीं गुजरती"],
        "answer_en": "It does not pass through Bihar",
        "answer_hi": "यह बिहार से नहीं गुजरती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The 'Industrial Revolution' first began in:",
        "question_hi": "'औद्योगिक क्रांति' पहले कहाँ शुरू हुई?",
        "options_en": ["England", "France", "Germany", "USA"],
        "options_hi": ["इंग्लैंड", "फ्रांस", "जर्मनी", "यूएसए"],
        "answer_en": "England",
        "answer_hi": "इंग्लैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which is the largest coal producing state in India?",
        "question_hi": "भारत का सबसे बड़ा कोयला उत्पादक राज्य कौन सा है?",
        "options_en": ["Jharkhand", "Odisha", "Chhattisgarh", "Madhya Pradesh"],
        "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "मध्य प्रदेश"],
        "answer_en": "Jharkhand",
        "answer_hi": "झारखंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Who built the 'Konark Sun Temple'?",
        "question_hi": "'कोणार्क सूर्य मंदिर' किसने बनवाया?",
        "options_en": ["Narasimhadeva I", "Ashoka", "Harsha", "Kanishka"],
        "options_hi": ["नरसिंहदेव प्रथम", "अशोक", "हर्ष", "कनिष्क"],
        "answer_en": "Narasimhadeva I",
        "answer_hi": "नरसिंहदेव प्रथम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The 'Nalanda University' was located in which present-day state?",
        "question_hi": "'नालंदा विश्वविद्यालय' वर्तमान किस राज्य में स्थित था?",
        "options_en": ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "West Bengal"],
        "options_hi": ["बिहार", "उत्तर प्रदेश", "मध्य प्रदेश", "पश्चिम बंगाल"],
        "answer_en": "Bihar",
        "answer_hi": "बिहार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which is the smallest Union Territory of India?",
        "question_hi": "भारत का सबसे छोटा केंद्र शासित प्रदेश कौन सा है?",
        "options_en": ["Lakshadweep", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu"],
        "options_hi": ["लक्षद्वीप", "चंडीगढ़", "दादरा और नगर हवेली", "दमन और दीव"],
        "answer_en": "Lakshadweep",
        "answer_hi": "लक्षद्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The 'Non-Cooperation Movement' was called off after which incident?",
        "question_hi": "किस घटना के बाद 'असहयोग आंदोलन' वापस ले लिया गया?",
        "options_en": ["Chauri Chaura", "Jallianwala Bagh", "Dandi March", "Simon Commission"],
        "options_hi": ["चौरी चौरा", "जलियाँवाला बाग", "दांडी मार्च", "साइमन कमीशन"],
        "answer_en": "Chauri Chaura",
        "answer_hi": "चौरी चौरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which river is known as the 'Sorrow of Bihar'?",
        "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
        "options_en": ["Kosi", "Ganga", "Gandak", "Son"],
        "options_hi": ["कोसी", "गंगा", "गंडक", "सोन"],
        "answer_en": "Kosi",
        "answer_hi": "कोसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Who was the first Indian to receive Nobel Prize in Physics?",
        "question_hi": "भौतिकी में नोबेल पुरस्कार प्राप्त करने वाले पहले भारतीय कौन थे?",
        "options_en": ["C.V. Raman", "Hargobind Khorana", "S. Chandrasekhar", "Abdus Salam"],
        "options_hi": ["सी.वी. रमन", "हरगोबिंद खुराना", "एस. चंद्रशेखर", "अब्दुस सलाम"],
        "answer_en": "C.V. Raman",
        "answer_hi": "सी.वी. रमन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The 'Green Revolution' was mainly focused on increasing production of:",
        "question_hi": "'हरित क्रांति' मुख्य रूप से किसके उत्पादन को बढ़ाने पर केंद्रित थी?",
        "options_en": ["Wheat and Rice", "Pulses", "Oilseeds", "Fruits"],
        "options_hi": ["गेहूँ और चावल", "दलहन", "तिलहन", "फल"],
        "answer_en": "Wheat and Rice",
        "answer_hi": "गेहूँ और चावल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which is the largest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "वरुण", "अरुण"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The 'Battle of Buxar' was fought in which year?",
        "question_hi": "'बक्सर का युद्ध' किस वर्ष लड़ा गया था?",
        "options_en": ["1760", "1761", "1763", "1764"],
        "options_hi": ["1760", "1761", "1763", "1764"],
        "answer_en": "1764",
        "answer_hi": "1764",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which is the largest river island in India?",
        "question_hi": "भारत का सबसे बड़ा नदी द्वीप कौन सा है?",
        "options_en": ["Majuli", "Srirangam", "Umananda", "Bhavani Island"],
        "options_hi": ["माजुली", "श्रीरंगम", "उमानंद", "भवानी द्वीप"],
        "answer_en": "Majuli",
        "answer_hi": "माजुली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Who founded the 'Indian National Congress'?",
        "question_hi": "'भारतीय राष्ट्रीय कांग्रेस' की स्थापना किसने की?",
        "options_en": ["A.O. Hume", "W.C. Bonnerjee", "Dadabhai Naoroji", "Surendranath Banerjee"],
        "options_hi": ["ए.ओ. ह्यूम", "डब्ल्यू.सी. बोनर्जी", "दादाभाई नौरोजी", "सुरेंद्रनाथ बनर्जी"],
        "answer_en": "A.O. Hume",
        "answer_hi": "ए.ओ. ह्यूम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The 'Silk Route' connected India with:",
        "question_hi": "'रेशम मार्ग' भारत को किससे जोड़ता था?",
        "options_en": ["Central Asia", "Europe", "China", "All of these"],
        "options_hi": ["मध्य एशिया", "यूरोप", "चीन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which is the highest dam in India?",
        "question_hi": "भारत का सबसे ऊँचा बाँध कौन सा है?",
        "options_en": ["Tehri Dam", "Bhakra Dam", "Hirakud Dam", "Nagarjuna Sagar Dam"],
        "options_hi": ["टिहरी बाँध", "भाखड़ा बाँध", "हीराकुंड बाँध", "नागार्जुन सागर बाँध"],
        "answer_en": "Tehri Dam",
        "answer_hi": "टिहरी बाँध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The 'Mughal Empire' was founded by:",
        "question_hi": "'मुगल साम्राज्य' की स्थापना किसने की?",
        "options_en": ["Babur", "Akbar", "Humayun", "Sher Shah Suri"],
        "options_hi": ["बाबर", "अकबर", "हुमायूँ", "शेरशाह सूरी"],
        "answer_en": "Babur",
        "answer_hi": "बाबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which is the largest producer of tea in India?",
        "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
        "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
        "answer_en": "Assam",
        "answer_hi": "असम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "Sucheta Kriplani"],
        "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी", "सुचेता कृपलानी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The 'Vijayanagara Empire' was located in which present-day state?",
        "question_hi": "'विजयनगर साम्राज्य' वर्तमान किस राज्य में स्थित था?",
        "options_en": ["Karnataka", "Andhra Pradesh", "Tamil Nadu", "Kerala"],
        "options_hi": ["कर्नाटक", "आंध्र प्रदेश", "तमिलनाडु", "केरल"],
        "answer_en": "Karnataka",
        "answer_hi": "कर्नाटक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which is the largest desert in Asia?",
        "question_hi": "एशिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Gobi Desert", "Thar Desert", "Arabian Desert", "Karakum Desert"],
        "options_hi": ["गोबी रेगिस्तान", "थार रेगिस्तान", "अरब रेगिस्तान", "कराकुम रेगिस्तान"],
        "answer_en": "Gobi Desert",
        "answer_hi": "गोबी रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The 'Rowlatt Act' was passed in which year?",
        "question_hi": "'रॉलेट एक्ट' किस वर्ष पारित किया गया था?",
        "options_en": ["1917", "1918", "1919", "1920"],
        "options_hi": ["1917", "1918", "1919", "1920"],
        "answer_en": "1919",
        "answer_hi": "1919",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which is the longest river in South India?",
        "question_hi": "दक्षिण भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Godavari", "Krishna", "Kaveri", "Narmada"],
        "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
        "answer_en": "Godavari",
        "answer_hi": "गोदावरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Who built the 'Qutub Minar'?",
        "question_hi": "'कुतुब मीनार' किसने बनवाया?",
        "options_en": ["Qutb-ud-din Aibak", "Iltutmish", "Alauddin Khalji", "Firoz Shah Tughlaq"],
        "options_hi": ["कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "अलाउद्दीन खिलजी", "फिरोज शाह तुगलक"],
        "answer_en": "Qutb-ud-din Aibak",
        "answer_hi": "कुतुब-उद-दीन ऐबक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The 'Equator' passes through how many countries?",
        "question_hi": "'भूमध्य रेखा' कितने देशों से गुजरती है?",
        "options_en": ["10", "11", "13", "15"],
        "options_hi": ["10", "11", "13", "15"],
        "answer_en": "13",
        "answer_hi": "13",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The 'Battle of Panipat' in 1526 was fought between:",
        "question_hi": "1526 में 'पानीपत का युद्ध' किसके बीच लड़ा गया था?",
        "options_en": ["Babur and Ibrahim Lodi", "Akbar and Hemu", "Aurangzeb and Shivaji", "Sher Shah and Humayun"],
        "options_hi": ["बाबर और इब्राहिम लोदी", "अकबर और हेमू", "औरंगजेब और शिवाजी", "शेरशाह और हुमायूँ"],
        "answer_en": "Babur and Ibrahim Lodi",
        "answer_hi": "बाबर और इब्राहिम लोदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which is the largest producer of jute in India?",
        "question_hi": "भारत में जूट का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["West Bengal", "Bihar", "Assam", "Odisha"],
        "options_hi": ["पश्चिम बंगाल", "बिहार", "असम", "ओडिशा"],
        "answer_en": "West Bengal",
        "answer_hi": "पश्चिम बंगाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
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
        "num": 42,
        "question_en": "The 'Himalayas' were formed due to:",
        "question_hi": "'हिमालय' का निर्माण किसके कारण हुआ?",
        "options_en": ["Folding of earth's crust", "Volcanic eruption", "Earthquake", "Erosion"],
        "options_hi": ["पृथ्वी की पपड़ी के मुड़ने से", "ज्वालामुखी विस्फोट", "भूकंप", "कटाव"],
        "answer_en": "Folding of earth's crust",
        "answer_hi": "पृथ्वी की पपड़ी के मुड़ने से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The 'Quit India Movement' was also known as:",
        "question_hi": "'भारत छोड़ो आंदोलन' को किस नाम से भी जाना जाता था?",
        "options_en": ["August Movement", "Civil Disobedience", "Non-Cooperation", "Swadeshi Movement"],
        "options_hi": ["अगस्त आंदोलन", "सविनय अवज्ञा", "असहयोग", "स्वदेशी आंदोलन"],
        "answer_en": "August Movement",
        "answer_hi": "अगस्त आंदोलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which is the largest producer of iron ore in India?",
        "question_hi": "भारत में लौह अयस्क का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Odisha", "Jharkhand", "Chhattisgarh", "Karnataka"],
        "options_hi": ["ओडिशा", "झारखंड", "छत्तीसगढ़", "कर्नाटक"],
        "answer_en": "Odisha",
        "answer_hi": "ओडिशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who built the 'Sanchi Stupa'?",
        "question_hi": "'सांची स्तूप' किसने बनवाया?",
        "options_en": ["Ashoka", "Kanishka", "Harsha", "Samudragupta"],
        "options_hi": ["अशोक", "कनिष्क", "हर्ष", "समुद्रगुप्त"],
        "answer_en": "Ashoka",
        "answer_hi": "अशोक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The 'Suez Canal' connects:",
        "question_hi": "'सुएज़ नहर' किसे जोड़ती है?",
        "options_en": ["Mediterranean Sea and Red Sea", "Atlantic and Pacific", "Indian Ocean and Pacific", "Black Sea and Mediterranean"],
        "options_hi": ["भूमध्य सागर और लाल सागर", "अटलांटिक और प्रशांत", "हिंद महासागर और प्रशांत", "काला सागर और भूमध्य सागर"],
        "answer_en": "Mediterranean Sea and Red Sea",
        "answer_hi": "भूमध्य सागर और लाल सागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The 'Battle of Waterloo' was fought in which year?",
        "question_hi": "'वाटरलू का युद्ध' किस वर्ष लड़ा गया था?",
        "options_en": ["1814", "1815", "1816", "1817"],
        "options_hi": ["1814", "1815", "1816", "1817"],
        "answer_en": "1815",
        "answer_hi": "1815",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which is the largest producer of cotton in India?",
        "question_hi": "भारत में कपास का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Gujarat", "Maharashtra", "Telangana", "Punjab"],
        "options_hi": ["गुजरात", "महाराष्ट्र", "तेलंगाना", "पंजाब"],
        "answer_en": "Gujarat",
        "answer_hi": "गुजरात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Who was the first woman to climb Mount Everest from India?",
        "question_hi": "भारत से माउंट एवरेस्ट पर चढ़ने वाली पहली महिला कौन थीं?",
        "options_en": ["Bachendri Pal", "Santosh Yadav", "Arunima Sinha", "Premlata Agarwal"],
        "options_hi": ["बछेंद्री पाल", "संतोष यादव", "अरुणिमा सिन्हा", "प्रेमलता अग्रवाल"],
        "answer_en": "Bachendri Pal",
        "answer_hi": "बछेंद्री पाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The 'Government of India Act 1919' is also known as:",
        "question_hi": "'भारत सरकार अधिनियम 1919' को किस नाम से भी जाना जाता है?",
        "options_en": ["Montagu-Chelmsford Reforms", "Morley-Minto Reforms", "Simon Commission", "Cabinet Mission"],
        "options_hi": ["मोंटेग्यू-चेम्सफोर्ड सुधार", "मॉर्ले-मिंटो सुधार", "साइमन कमीशन", "कैबिनेट मिशन"],
        "answer_en": "Montagu-Chelmsford Reforms",
        "answer_hi": "मोंटेग्यू-चेम्सफोर्ड सुधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which is the largest lake in India by volume?",
        "question_hi": "आयतन के हिसाब से भारत की सबसे बड़ी झील कौन सी है?",
        "options_en": ["Wular Lake", "Chilika Lake", "Dal Lake", "Loktak Lake"],
        "options_hi": ["वुलर झील", "चिल्का झील", "डल झील", "लोकटक झील"],
        "answer_en": "Wular Lake",
        "answer_hi": "वुलर झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Who founded the 'Vijayanagara Empire'?",
        "question_hi": "'विजयनगर साम्राज्य' की स्थापना किसने की?",
        "options_en": ["Harihara and Bukka", "Krishnadevaraya", "Devaraya I", "Achyutaraya"],
        "options_hi": ["हरिहर और बुक्का", "कृष्णदेव राय", "देवराय प्रथम", "अच्युतराय"],
        "answer_en": "Harihara and Bukka",
        "answer_hi": "हरिहर और बुक्का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The 'Panchayati Raj System' was first implemented in which state?",
        "question_hi": "'पंचायती राज व्यवस्था' पहले किस राज्य में लागू की गई?",
        "options_en": ["Rajasthan", "Andhra Pradesh", "Maharashtra", "Gujarat"],
        "options_hi": ["राजस्थान", "आंध्र प्रदेश", "महाराष्ट्र", "गुजरात"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which is the largest producer of wheat in India?",
        "question_hi": "भारत में गेहूँ का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Punjab", "Madhya Pradesh", "Haryana"],
        "options_hi": ["उत्तर प्रदेश", "पंजाब", "मध्य प्रदेश", "हरियाणा"],
        "answer_en": "Uttar Pradesh",
        "answer_hi": "उत्तर प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The 'Battle of Tarain' was fought between:",
        "question_hi": "'तराइन का युद्ध' किसके बीच लड़ा गया था?",
        "options_en": ["Prithviraj Chauhan and Muhammad Ghori", "Akbar and Hemu", "Babur and Ibrahim Lodi", "Shivaji and Aurangzeb"],
        "options_hi": ["पृथ्वीराज चौहान और मुहम्मद गोरी", "अकबर और हेमू", "बाबर और इब्राहिम लोदी", "शिवाजी और औरंगजेब"],
        "answer_en": "Prithviraj Chauhan and Muhammad Ghori",
        "answer_hi": "पृथ्वीराज चौहान और मुहम्मद गोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which is the largest producer of natural gas in India?",
        "question_hi": "भारत में प्राकृतिक गैस का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Assam", "Gujarat", "Andhra Pradesh", "Tripura"],
        "options_hi": ["असम", "गुजरात", "आंध्र प्रदेश", "त्रिपुरा"],
        "answer_en": "Assam",
        "answer_hi": "असम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Who built the 'Fatehpur Sikri'?",
        "question_hi": "'फतेहपुर सीकरी' किसने बनवाया?",
        "options_en": ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
        "options_hi": ["अकबर", "शाहजहाँ", "जहाँगीर", "औरंगजेब"],
        "answer_en": "Akbar",
        "answer_hi": "अकबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The 'International Date Line' passes through:",
        "question_hi": "'अंतर्राष्ट्रीय तिथि रेखा' किस महासागर से गुजरती है?",
        "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The 'Khilafat Movement' was started in which year?",
        "question_hi": "'खिलाफत आंदोलन' किस वर्ष शुरू किया गया था?",
        "options_en": ["1917", "1918", "1919", "1920"],
        "options_hi": ["1917", "1918", "1919", "1920"],
        "answer_en": "1919",
        "answer_hi": "1919",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which is the largest producer of coffee in India?",
        "question_hi": "भारत में कॉफी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh"],
        "options_hi": ["कर्नाटक", "केरल", "तमिलनाडु", "आंध्र प्रदेश"],
        "answer_en": "Karnataka",
        "answer_hi": "कर्नाटक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Who was the first woman Governor of an Indian state?",
        "question_hi": "किसी भारतीय राज्य की पहली महिला राज्यपाल कौन थीं?",
        "options_en": ["Sarojini Naidu", "Vijayalakshmi Pandit", "Sucheta Kriplani", "Indira Gandhi"],
        "options_hi": ["सरोजिनी नायडू", "विजयलक्ष्मी पंडित", "सुचेता कृपलानी", "इंदिरा गांधी"],
        "answer_en": "Sarojini Naidu",
        "answer_hi": "सरोजिनी नायडू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The 'Narmada River' originates from:",
        "question_hi": "'नर्मदा नदी' का उद्गम स्थल है:",
        "options_en": ["Amarkantak", "Mahadeo Hills", "Satpura Range", "Vindhya Range"],
        "options_hi": ["अमरकंटक", "महादेव पहाड़ियाँ", "सतपुड़ा पर्वतमाला", "विंध्य पर्वतमाला"],
        "answer_en": "Amarkantak",
        "answer_hi": "अमरकंटक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The 'Battle of Plassey' was fought in which year?",
        "question_hi": "'प्लासी का युद्ध' किस वर्ष लड़ा गया था?",
        "options_en": ["1756", "1757", "1758", "1759"],
        "options_hi": ["1756", "1757", "1758", "1759"],
        "answer_en": "1757",
        "answer_hi": "1757",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which is the largest producer of sugarcane in India?",
        "question_hi": "भारत में गन्ना का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "कर्नाटक", "तमिलनाडु"],
        "answer_en": "Uttar Pradesh",
        "answer_hi": "उत्तर प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Who built the 'Konark Sun Temple'?",
        "question_hi": "'कोणार्क सूर्य मंदिर' किसने बनवाया?",
        "options_en": ["Narasimhadeva I", "Anantavarman", "Rajendra Chola", "Krishnadevaraya"],
        "options_hi": ["नरसिंहदेव प्रथम", "अनंतवर्मन", "राजेंद्र चोल", "कृष्णदेव राय"],
        "answer_en": "Narasimhadeva I",
        "answer_hi": "नरसिंहदेव प्रथम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The 'Arctic Circle' is located in:",
        "question_hi": "'आर्कटिक वृत्त' कहाँ स्थित है?",
        "options_en": ["Northern Hemisphere", "Southern Hemisphere", "Equator", "Tropic of Cancer"],
        "options_hi": ["उत्तरी गोलार्ध", "दक्षिणी गोलार्ध", "भूमध्य रेखा", "कर्क रेखा"],
        "answer_en": "Northern Hemisphere",
        "answer_hi": "उत्तरी गोलार्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The 'Simon Commission' came to India in which year?",
        "question_hi": "'साइमन कमीशन' भारत किस वर्ष आया?",
        "options_en": ["1927", "1928", "1929", "1930"],
        "options_hi": ["1927", "1928", "1929", "1930"],
        "answer_en": "1928",
        "answer_hi": "1928",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which is the largest producer of manganese in India?",
        "question_hi": "भारत में मैंगनीज का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Madhya Pradesh", "Maharashtra", "Odisha", "Karnataka"],
        "options_hi": ["मध्य प्रदेश", "महाराष्ट्र", "ओडिशा", "कर्नाटक"],
        "answer_en": "Madhya Pradesh",
        "answer_hi": "मध्य प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Who was the first woman Speaker of Lok Sabha?",
        "question_hi": "लोकसभा की पहली महिला अध्यक्ष कौन थीं?",
        "options_en": ["Meira Kumar", "Sumitra Mahajan", "Sushma Swaraj", "Indira Gandhi"],
        "options_hi": ["मीरा कुमार", "सुमित्रा महाजन", "सुषमा स्वराज", "इंदिरा गांधी"],
        "answer_en": "Meira Kumar",
        "answer_hi": "मीरा कुमार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The 'Gulf of Mannar' is located between:",
        "question_hi": "'मन्नार की खाड़ी' कहाँ स्थित है?",
        "options_en": ["India and Sri Lanka", "India and Maldives", "India and Pakistan", "India and Bangladesh"],
        "options_hi": ["भारत और श्रीलंका", "भारत और मालदीव", "भारत और पाकिस्तान", "भारत और बांग्लादेश"],
        "answer_en": "India and Sri Lanka",
        "answer_hi": "भारत और श्रीलंका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The 'Battle of Haldighati' was fought in which year?",
        "question_hi": "'हल्दीघाटी का युद्ध' किस वर्ष लड़ा गया था?",
        "options_en": ["1575", "1576", "1577", "1578"],
        "options_hi": ["1575", "1576", "1577", "1578"],
        "answer_en": "1576",
        "answer_hi": "1576",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which is the largest producer of bauxite in India?",
        "question_hi": "भारत में बॉक्साइट का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Odisha", "Gujarat", "Jharkhand", "Madhya Pradesh"],
        "options_hi": ["ओडिशा", "गुजरात", "झारखंड", "मध्य प्रदेश"],
        "answer_en": "Odisha",
        "answer_hi": "ओडिशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Who built the 'Brihadeshwara Temple'?",
        "question_hi": "'बृहदेश्वर मंदिर' किसने बनवाया?",
        "options_en": ["Rajaraja Chola I", "Krishnadevaraya", "Ashoka", "Harsha"],
        "options_hi": ["राजराज चोल प्रथम", "कृष्णदेव राय", "अशोक", "हर्ष"],
        "answer_en": "Rajaraja Chola I",
        "answer_hi": "राजराज चोल प्रथम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The 'Prime Meridian' passes through:",
        "question_hi": "'प्रधान मध्याह्न रेखा' कहाँ से गुजरती है?",
        "options_en": ["Greenwich", "Paris", "New York", "Tokyo"],
        "options_hi": ["ग्रीनविच", "पेरिस", "न्यूयॉर्क", "टोक्यो"],
        "answer_en": "Greenwich",
        "answer_hi": "ग्रीनविच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The 'Mysore Wars' were fought between:",
        "question_hi": "'मैसूर युद्ध' किसके बीच लड़े गए?",
        "options_en": ["British and Tipu Sultan", "British and Marathas", "British and Sikhs", "British and French"],
        "options_hi": ["अंग्रेज और टीपू सुल्तान", "अंग्रेज और मराठे", "अंग्रेज और सिख", "अंग्रेज और फ्रांसीसी"],
        "answer_en": "British and Tipu Sultan",
        "answer_hi": "अंग्रेज और टीपू सुल्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which is the largest producer of rubber in India?",
        "question_hi": "भारत में रबर का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
        "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
        "answer_en": "Kerala",
        "answer_hi": "केरल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Who was the first woman Chief Justice of India?",
        "question_hi": "भारत की पहली महिला मुख्य न्यायाधीश कौन थीं?",
        "options_en": ["Justice Leila Seth", "Justice Ruma Pal", "Justice Gita Mittal", "Justice Indu Malhotra"],
        "options_hi": ["न्यायमूर्ति लीला सेठ", "न्यायमूर्ति रूमा पाल", "न्यायमूर्ति गीता मित्तल", "न्यायमूर्ति इंदु मल्होत्रा"],
        "answer_en": "Justice Leila Seth",
        "answer_hi": "न्यायमूर्ति लीला सेठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The 'Kaveri River' originates from:",
        "question_hi": "'कावेरी नदी' का उद्गम स्थल है:",
        "options_en": ["Brahmagiri Hills", "Western Ghats", "Eastern Ghats", "Nilgiri Hills"],
        "options_hi": ["ब्रह्मगिरि पहाड़ियाँ", "पश्चिमी घाट", "पूर्वी घाट", "नीलगिरि पहाड़ियाँ"],
        "answer_en": "Brahmagiri Hills",
        "answer_hi": "ब्रह्मगिरि पहाड़ियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The 'Battle of Wandiwash' was fought in which year?",
        "question_hi": "'वांडीवाश का युद्ध' किस वर्ष लड़ा गया था?",
        "options_en": ["1757", "1760", "1763", "1765"],
        "options_hi": ["1757", "1760", "1763", "1765"],
        "answer_en": "1760",
        "answer_hi": "1760",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which is the largest producer of tea in the world?",
        "question_hi": "दुनिया में चाय का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["China", "India", "Sri Lanka", "Kenya"],
        "options_hi": ["चीन", "भारत", "श्रीलंका", "केन्या"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Who built the 'Iron Pillar' in Delhi?",
        "question_hi": "दिल्ली में 'लौह स्तंभ' किसने बनवाया?",
        "options_en": ["Chandragupta II", "Ashoka", "Samudragupta", "Kumaragupta"],
        "options_hi": ["चंद्रगुप्त द्वितीय", "अशोक", "समुद्रगुप्त", "कुमारगुप्त"],
        "answer_en": "Chandragupta II",
        "answer_hi": "चंद्रगुप्त द्वितीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The 'Tropic of Capricorn' passes through:",
        "question_hi": "'मकर रेखा' किस महाद्वीप से गुजरती है?",
        "options_en": ["Australia", "Africa", "South America", "All of these"],
        "options_hi": ["ऑस्ट्रेलिया", "अफ्रीका", "दक्षिण अमेरिका", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The 'Battle of Seringapatam' was fought in which year?",
        "question_hi": "'श्रीरंगपट्टनम का युद्ध' किस वर्ष लड़ा गया था?",
        "options_en": ["1792", "1799", "1803", "1805"],
        "options_hi": ["1792", "1799", "1803", "1805"],
        "answer_en": "1799",
        "answer_hi": "1799",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which is the largest producer of spices in India?",
        "question_hi": "भारत में मसालों का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
        "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
        "answer_en": "Kerala",
        "answer_hi": "केरल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Who was the first woman to win an Olympic medal for India?",
        "question_hi": "भारत के लिए ओलंपिक पदक जीतने वाली पहली महिला कौन थीं?",
        "options_en": ["Karnam Malleswari", "P.T. Usha", "Mary Kom", "Saina Nehwal"],
        "options_hi": ["कर्णम मल्लेश्वरी", "पी.टी. उषा", "मैरी कॉम", "साइना नेहवाल"],
        "answer_en": "Karnam Malleswari",
        "answer_hi": "कर्णम मल्लेश्वरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The 'Godavari River' originates from:",
        "question_hi": "'गोदावरी नदी' का उद्गम स्थल है:",
        "options_en": ["Nasik", "Maharashtra", "Western Ghats", "All of these"],
        "options_hi": ["नासिक", "महाराष्ट्र", "पश्चिमी घाट", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The 'Battle of Plassey' was fought between:",
        "question_hi": "'प्लासी का युद्ध' किसके बीच लड़ा गया था?",
        "options_en": ["Siraj-ud-Daulah and Robert Clive", "Mir Jafar and British", "Shuja-ud-Daulah and British", "Alivardi Khan and British"],
        "options_hi": ["सिराज-उद-दौला और रॉबर्ट क्लाइव", "मीर जाफर और अंग्रेज", "शुजा-उद-दौला और अंग्रेज", "अलीवर्दी खान और अंग्रेज"],
        "answer_en": "Siraj-ud-Daulah and Robert Clive",
        "answer_hi": "सिराज-उद-दौला और रॉबर्ट क्लाइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which is the largest producer of maize in India?",
        "question_hi": "भारत में मक्का का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Karnataka", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
        "options_hi": ["कर्नाटक", "मध्य प्रदेश", "राजस्थान", "महाराष्ट्र"],
        "answer_en": "Karnataka",
        "answer_hi": "कर्नाटक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Who built the 'Ajanta Caves'?",
        "question_hi": "'अजंता गुफाएँ' किसने बनवाईं?",
        "options_en": ["Buddhist monks", "Hindu kings", "Jain monks", "Gupta rulers"],
        "options_hi": ["बौद्ध भिक्षु", "हिंदू राजा", "जैन भिक्षु", "गुप्त शासक"],
        "answer_en": "Buddhist monks",
        "answer_hi": "बौद्ध भिक्षु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The 'Antarctic Circle' is located in:",
        "question_hi": "'अंटार्कटिक वृत्त' कहाँ स्थित है?",
        "options_en": ["Southern Hemisphere", "Northern Hemisphere", "Equator", "Tropic of Capricorn"],
        "options_hi": ["दक्षिणी गोलार्ध", "उत्तरी गोलार्ध", "भूमध्य रेखा", "मकर रेखा"],
        "answer_en": "Southern Hemisphere",
        "answer_hi": "दक्षिणी गोलार्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The 'Battle of Buxar' resulted in:",
        "question_hi": "'बक्सर का युद्ध' के परिणामस्वरूप:",
        "options_en": ["British control over Bengal", "Mughal victory", "French control over Bihar", "Maratha expansion"],
        "options_hi": ["बंगाल पर ब्रिटिश नियंत्रण", "मुगल विजय", "बिहार पर फ्रांसीसी नियंत्रण", "मराठा विस्तार"],
        "answer_en": "British control over Bengal",
        "answer_hi": "बंगाल पर ब्रिटिश नियंत्रण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which is the largest producer of soyabean in India?",
        "question_hi": "भारत में सोयाबीन का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Karnataka"],
        "options_hi": ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "कर्नाटक"],
        "answer_en": "Madhya Pradesh",
        "answer_hi": "मध्य प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Who was the first woman to win the Booker Prize?",
        "question_hi": "बुकर पुरस्कार जीतने वाली पहली महिला कौन थीं?",
        "options_en": ["Arundhati Roy", "Kiran Desai", "Salman Rushdie", "V.S. Naipaul"],
        "options_hi": ["अरुंधति रॉय", "किरण देसाई", "सलमान रश्दी", "वी.एस. नायपॉल"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The 'Yamuna River' is a tributary of:",
        "question_hi": "'यमुना नदी' किसकी सहायक नदी है?",
        "options_en": ["Ganga", "Brahmaputra", "Godavari", "Narmada"],
        "options_hi": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "नर्मदा"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The 'Battle of Plassey' marked the beginning of:",
        "question_hi": "'प्लासी का युद्ध' ने किसकी शुरुआत को चिह्नित किया?",
        "options_en": ["British rule in India", "Mughal decline", "French influence", "Portuguese arrival"],
        "options_hi": ["भारत में ब्रिटिश शासन", "मुगल गिरावट", "फ्रांसीसी प्रभाव", "पुर्तगाली आगमन"],
        "answer_en": "British rule in India",
        "answer_hi": "भारत में ब्रिटिश शासन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which is the largest producer of groundnut in India?",
        "question_hi": "भारत में मूंगफली का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
        "options_hi": ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "कर्नाटक"],
        "answer_en": "Gujarat",
        "answer_hi": "गुजरात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Who built the 'Ellora Caves'?",
        "question_hi": "'एलोरा गुफाएँ' किसने बनवाईं?",
        "options_en": ["Rashtrakuta dynasty", "Gupta dynasty", "Chola dynasty", "Pallava dynasty"],
        "options_hi": ["राष्ट्रकूट वंश", "गुप्त वंश", "चोल वंश", "पल्लव वंश"],
        "answer_en": "Rashtrakuta dynasty",
        "answer_hi": "राष्ट्रकूट वंश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The 'Equator' divides the Earth into:",
        "question_hi": "'भूमध्य रेखा' पृथ्वी को किसमें विभाजित करती है?",
        "options_en": ["Northern and Southern Hemispheres", "Eastern and Western Hemispheres", "Land and Water", "Day and Night"],
        "options_hi": ["उत्तरी और दक्षिणी गोलार्ध", "पूर्वी और पश्चिमी गोलार्ध", "भूमि और जल", "दिन और रात"],
        "answer_en": "Northern and Southern Hemispheres",
        "answer_hi": "उत्तरी और दक्षिणी गोलार्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The 'Battle of Seringapatam' ended the rule of:",
        "question_hi": "'श्रीरंगपट्टनम का युद्ध' ने किसके शासन को समाप्त किया?",
        "options_en": ["Tipu Sultan", "Hyder Ali", "Krishnadevaraya", "Shivaji"],
        "options_hi": ["टीपू सुल्तान", "हैदर अली", "कृष्णदेव राय", "शिवाजी"],
        "answer_en": "Tipu Sultan",
        "answer_hi": "टीपू सुल्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which is the largest producer of coconut in India?",
        "question_hi": "भारत में नारियल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
        "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
        "answer_en": "Kerala",
        "answer_hi": "केरल",
        "attempted": false,
        "selected": ""
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