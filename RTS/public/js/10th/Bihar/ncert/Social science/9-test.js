const questions = [
    {
        "num": 1,
        "question_en": "Which is the largest state in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?",
        "options_en": ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
        "options_hi": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which is the smallest state in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
        "options_en": ["Goa", "Sikkim", "Tripura", "Nagaland"],
        "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
        "answer_en": "Goa",
        "answer_hi": "गोवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
        "options_hi": ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which is the highest mountain peak in India?",
        "question_hi": "भारत की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["Kanchenjunga", "Nanda Devi", "Kamet", "Mount Everest"],
        "options_hi": ["कंचनजंगा", "नंदा देवी", "कामेत", "माउंट एवरेस्ट"],
        "answer_en": "Kanchenjunga",
        "answer_hi": "कंचनजंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which is the largest lake in India?",
        "question_hi": "भारत की सबसे बड़ी झील कौन सी है?",
        "options_en": ["Wular Lake", "Chilika Lake", "Loktak Lake", "Dal Lake"],
        "options_hi": ["वुलर झील", "चिल्का झील", "लोकतक झील", "डल झील"],
        "answer_en": "Wular Lake",
        "answer_hi": "वुलर झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which state has the longest coastline in India?",
        "question_hi": "भारत में सबसे लंबी तटरेखा वाला राज्य कौन सा है?",
        "options_en": ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Maharashtra"],
        "options_hi": ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "महाराष्ट्र"],
        "answer_en": "Gujarat",
        "answer_hi": "गुजरात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which is the largest desert in India?",
        "question_hi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Thar Desert", "Rann of Kutch", "Ladakh Desert", "Deccan Desert"],
        "options_hi": ["थार रेगिस्तान", "कच्छ का रण", "लद्दाख रेगिस्तान", "दक्कन रेगिस्तान"],
        "answer_en": "Thar Desert",
        "answer_hi": "थार रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which is the largest river island in India?",
        "question_hi": "भारत का सबसे बड़ा नदी द्वीप कौन सा है?",
        "options_en": ["Majuli", "Srirangam", "Umananda", "Divar Island"],
        "options_hi": ["माजुली", "श्रीरंगम", "उमानंद", "दीवार द्वीप"],
        "answer_en": "Majuli",
        "answer_hi": "माजुली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which is the largest delta in India?",
        "question_hi": "भारत का सबसे बड़ा डेल्टा कौन सा है?",
        "options_en": ["Sunderbans Delta", "Krishna Delta", "Godavari Delta", "Mahanadi Delta"],
        "options_hi": ["सुंदरबन डेल्टा", "कृष्णा डेल्टा", "गोदावरी डेल्टा", "महानदी डेल्टा"],
        "answer_en": "Sunderbans Delta",
        "answer_hi": "सुंदरबन डेल्टा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which is the largest waterfall in India?",
        "question_hi": "भारत का सबसे बड़ा झरना कौन सा है?",
        "options_en": ["Kunchikal Falls", "Jog Falls", "Dudhsagar Falls", "Athirappilly Falls"],
        "options_hi": ["कुंचिकल फॉल्स", "जोग फॉल्स", "दूधसागर फॉल्स", "अथिराप्पिल्ली फॉल्स"],
        "answer_en": "Kunchikal Falls",
        "answer_hi": "कुंचिकल फॉल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which is the largest national park in India?",
        "question_hi": "भारत का सबसे बड़ा राष्ट्रीय उद्यान कौन सा है?",
        "options_en": ["Hemis National Park", "Kaziranga National Park", "Jim Corbett National Park", "Gir National Park"],
        "options_hi": ["हेमिस राष्ट्रीय उद्यान", "काजीरंगा राष्ट्रीय उद्यान", "जिम कॉर्बेट राष्ट्रीय उद्यान", "गिर राष्ट्रीय उद्यान"],
        "answer_en": "Hemis National Park",
        "answer_hi": "हेमिस राष्ट्रीय उद्यान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which is the highest dam in India?",
        "question_hi": "भारत का सबसे ऊंचा बांध कौन सा है?",
        "options_en": ["Tehri Dam", "Bhakra Nangal Dam", "Sardar Sarovar Dam", "Hirakud Dam"],
        "options_hi": ["टिहरी बांध", "भाखड़ा नांगल बांध", "सरदार सरोवर बांध", "हीराकुंड बांध"],
        "answer_en": "Tehri Dam",
        "answer_hi": "टिहरी बांध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which is the largest cave in India?",
        "question_hi": "भारत की सबसे बड़ी गुफा कौन सी है?",
        "options_en": ["Amarnath Cave", "Borra Caves", "Krem Liat Prah", "Ajanta Caves"],
        "options_hi": ["अमरनाथ गुफा", "बोर्रा गुफाएं", "क्रेम लियात प्राह", "अजंता गुफाएं"],
        "answer_en": "Krem Liat Prah",
        "answer_hi": "क्रेम लियात प्राह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which is the longest beach in India?",
        "question_hi": "भारत का सबसे लंबा समुद्र तट कौन सा है?",
        "options_en": ["Marina Beach", "Juhu Beach", "Chandipur Beach", "Kovalam Beach"],
        "options_hi": ["मरीना बीच", "जुहू बीच", "चांदीपुर बीच", "कोवलम बीच"],
        "answer_en": "Marina Beach",
        "answer_hi": "मरीना बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which is the largest district in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा जिला कौन सा है?",
        "options_en": ["Kutch", "Leh", "Jaisalmer", "Barmer"],
        "options_hi": ["कच्छ", "लेह", "जैसलमेर", "बाड़मेर"],
        "answer_en": "Kutch",
        "answer_hi": "कच्छ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which is the smallest district in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा जिला कौन सा है?",
        "options_en": ["Mahé", "Yanam", "Lakshadweep", "Diu"],
        "options_hi": ["माहे", "यानम", "लक्षद्वीप", "दीव"],
        "answer_en": "Mahé",
        "answer_hi": "माहे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which is the largest union territory in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा केंद्र शासित प्रदेश कौन सा है?",
        "options_en": ["Ladakh", "Jammu and Kashmir", "Andaman and Nicobar Islands", "Delhi"],
        "options_hi": ["लद्दाख", "जम्मू और कश्मीर", "अंडमान और निकोबार द्वीप समूह", "दिल्ली"],
        "answer_en": "Ladakh",
        "answer_hi": "लद्दाख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which is the smallest union territory in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा केंद्र शासित प्रदेश कौन सा है?",
        "options_en": ["Lakshadweep", "Puducherry", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu"],
        "options_hi": ["लक्षद्वीप", "पुडुचेरी", "चंडीगढ़", "दादरा और नगर हवेली और दमन और दीव"],
        "answer_en": "Lakshadweep",
        "answer_hi": "लक्षद्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which is the highest railway station in India?",
        "question_hi": "भारत का सबसे ऊंचा रेलवे स्टेशन कौन सा है?",
        "options_en": ["Ghum", "Katra", "Jammu", "Shimla"],
        "options_hi": ["घुम", "कटरा", "जम्मू", "शिमला"],
        "answer_en": "Ghum",
        "answer_hi": "घुम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which is the longest railway platform in India?",
        "question_hi": "भारत का सबसे लंबा रेलवे प्लेटफॉर्म कौन सा है?",
        "options_en": ["Gorakhpur", "Kollam", "Kharagpur", "Howrah"],
        "options_hi": ["गोरखपुर", "कोल्लम", "खड़गपुर", "हावड़ा"],
        "answer_en": "Gorakhpur",
        "answer_hi": "गोरखपुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the longest road tunnel in India?",
        "question_hi": "भारत की सबसे लंबी सड़क सुरंग कौन सी है?",
        "options_en": ["Atal Tunnel", "Chenani-Nashri Tunnel", "Pir Panjal Tunnel", "Karbude Tunnel"],
        "options_hi": ["अटल सुरंग", "चेनानी-नाशरी सुरंग", "पीर पंजाल सुरंग", "कारबुडे सुरंग"],
        "answer_en": "Atal Tunnel",
        "answer_hi": "अटल सुरंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which is the longest river bridge in India?",
        "question_hi": "भारत का सबसे लंबा नदी पुल कौन सा है?",
        "options_en": ["Dhola-Sadiya Bridge", "Bogibeel Bridge", "Vikramshila Setu", "Mahatma Gandhi Setu"],
        "options_hi": ["ढोला-सादिया पुल", "बोगीबील पुल", "विक्रमशिला सेतु", "महात्मा गांधी सेतु"],
        "answer_en": "Dhola-Sadiya Bridge",
        "answer_hi": "ढोला-सादिया पुल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which is the largest saltwater lake in India?",
        "question_hi": "भारत की सबसे बड़ी खारे पानी की झील कौन सी है?",
        "options_en": ["Chilika Lake", "Sambhar Lake", "Pulicat Lake", "Vembanad Lake"],
        "options_hi": ["चिल्का झील", "सांभर झील", "पुलिकट झील", "वेम्बनाड झील"],
        "answer_en": "Chilika Lake",
        "answer_hi": "चिल्का झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which is the largest freshwater lake in India?",
        "question_hi": "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
        "options_en": ["Wular Lake", "Loktak Lake", "Dal Lake", "Nainital Lake"],
        "options_hi": ["वुलर झील", "लोकतक झील", "डल झील", "नैनीताल झील"],
        "answer_en": "Wular Lake",
        "answer_hi": "वुलर झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which is the largest man-made lake in India?",
        "question_hi": "भारत की सबसे बड़ी मानव निर्मित झील कौन सी है?",
        "options_en": ["Gobind Sagar", "Rana Pratap Sagar", "Nagarjuna Sagar", "Hirakud Reservoir"],
        "options_hi": ["गोबिंद सागर", "राणा प्रताप सागर", "नागार्जुन सागर", "हीराकुंड जलाशय"],
        "answer_en": "Gobind Sagar",
        "answer_hi": "गोबिंद सागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which is the highest waterfall in India?",
        "question_hi": "भारत का सबसे ऊंचा झरना कौन सा है?",
        "options_en": ["Kunchikal Falls", "Barehipani Falls", "Nohkalikai Falls", "Dudhsagar Falls"],
        "options_hi": ["कुंचिकल फॉल्स", "बरेहीपानी फॉल्स", "नोहकलिकाई फॉल्स", "दूधसागर फॉल्स"],
        "answer_en": "Kunchikal Falls",
        "answer_hi": "कुंचिकल फॉल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which is the largest glacier in India?",
        "question_hi": "भारत का सबसे बड़ा ग्लेशियर कौन सा है?",
        "options_en": ["Siachen Glacier", "Gangotri Glacier", "Zemu Glacier", "Bara Shigri Glacier"],
        "options_hi": ["सियाचिन ग्लेशियर", "गंगोत्री ग्लेशियर", "जेमू ग्लेशियर", "बड़ा शिग्री ग्लेशियर"],
        "answer_en": "Siachen Glacier",
        "answer_hi": "सियाचिन ग्लेशियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which is the longest coastline among Indian states?",
        "question_hi": "भारतीय राज्यों में सबसे लंबी तटरेखा किसकी है?",
        "options_en": ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Kerala"],
        "options_hi": ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "केरल"],
        "answer_en": "Gujarat",
        "answer_hi": "गुजरात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which is the largest river basin in India?",
        "question_hi": "भारत का सबसे बड़ा नदी बेसिन कौन सा है?",
        "options_en": ["Ganga Basin", "Godavari Basin", "Krishna Basin", "Brahmaputra Basin"],
        "options_hi": ["गंगा बेसिन", "गोदावरी बेसिन", "कृष्णा बेसिन", "ब्रह्मपुत्र बेसिन"],
        "answer_en": "Ganga Basin",
        "answer_hi": "गंगा बेसिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which is the largest mangrove forest in India?",
        "question_hi": "भारत का सबसे बड़ा मैंग्रोव वन कौन सा है?",
        "options_en": ["Sundarbans", "Bhitarkanika", "Pichavaram", "Godavari Mangroves"],
        "options_hi": ["सुंदरबन", "भितरकनिका", "पिचावरम", "गोदावरी मैंग्रोव"],
        "answer_en": "Sundarbans",
        "answer_hi": "सुंदरबन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which is the largest island in India?",
        "question_hi": "भारत का सबसे बड़ा द्वीप कौन सा है?",
        "options_en": ["Andaman Island", "Great Nicobar", "Middle Andaman", "South Andaman"],
        "options_hi": ["अंडमान द्वीप", "ग्रेट निकोबार", "मध्य अंडमान", "दक्षिण अंडमान"],
        "answer_en": "Andaman Island",
        "answer_hi": "अंडमान द्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is the smallest island in India?",
        "question_hi": "भारत का सबसे छोटा द्वीप कौन सा है?",
        "options_en": ["Bitra", "Kavaratti", "Minicoy", "Agatti"],
        "options_hi": ["बित्रा", "कवरत्ती", "मिनिकॉय", "अगत्ती"],
        "answer_en": "Bitra",
        "answer_hi": "बित्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which is the largest plateau in India?",
        "question_hi": "भारत का सबसे बड़ा पठार कौन सा है?",
        "options_en": ["Deccan Plateau", "Chota Nagpur Plateau", "Malwa Plateau", "Meghalaya Plateau"],
        "options_hi": ["दक्कन पठार", "छोटा नागपुर पठार", "मालवा पठार", "मेघालय पठार"],
        "answer_en": "Deccan Plateau",
        "answer_hi": "दक्कन पठार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which is the largest gulf in India?",
        "question_hi": "भारत की सबसे बड़ी खाड़ी कौन सी है?",
        "options_en": ["Gulf of Mannar", "Gulf of Kutch", "Gulf of Khambhat", "Bay of Bengal"],
        "options_hi": ["मन्नार की खाड़ी", "कच्छ की खाड़ी", "खंभात की खाड़ी", "बंगाल की खाड़ी"],
        "answer_en": "Gulf of Mannar",
        "answer_hi": "मन्नार की खाड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which is the largest bay in India?",
        "question_hi": "भारत की सबसे बड़ी खाड़ी कौन सी है?",
        "options_en": ["Bay of Bengal", "Arabian Sea", "Indian Ocean", "Palk Bay"],
        "options_hi": ["बंगाल की खाड़ी", "अरब सागर", "हिंद महासागर", "पाक खाड़ी"],
        "answer_en": "Bay of Bengal",
        "answer_hi": "बंगाल की खाड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which is the largest strait in India?",
        "question_hi": "भारत की सबसे बड़ी जलसंधि कौन सी है?",
        "options_en": ["Palk Strait", "Ten Degree Channel", "Eight Degree Channel", "Nine Degree Channel"],
        "options_hi": ["पाक जलसंधि", "टेन डिग्री चैनल", "एट डिग्री चैनल", "नाइन डिग्री चैनल"],
        "answer_en": "Palk Strait",
        "answer_hi": "पाक जलसंधि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which is the largest canal in India?",
        "question_hi": "भारत की सबसे बड़ी नहर कौन सी है?",
        "options_en": ["Indira Gandhi Canal", "Upper Ganga Canal", "Yamuna Canal", "Buckingham Canal"],
        "options_hi": ["इंदिरा गांधी नहर", "ऊपरी गंगा नहर", "यमुना नहर", "बकिंघम नहर"],
        "answer_en": "Indira Gandhi Canal",
        "answer_hi": "इंदिरा गांधी नहर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which is the longest national highway in India?",
        "question_hi": "भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
        "options_en": ["NH 44", "NH 27", "NH 48", "NH 52"],
        "options_hi": ["एनएच 44", "एनएच 27", "एनएच 48", "एनएच 52"],
        "answer_en": "NH 44",
        "answer_hi": "एनएच 44",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which is the highest airport in India?",
        "question_hi": "भारत का सबसे ऊंचा हवाई अड्डा कौन सा है?",
        "options_en": ["Kushok Bakula Rimpochee Airport", "Leh Airport", "Kangra Airport", "Shimla Airport"],
        "options_hi": ["कुशोक बकुला रिम्पोची हवाई अड्डा", "लेह हवाई अड्डा", "कांगड़ा हवाई अड्डा", "शिमला हवाई अड्डा"],
        "answer_en": "Kushok Bakula Rimpochee Airport",
        "answer_hi": "कुशोक बकुला रिम्पोची हवाई अड्डा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which is the largest airport in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा हवाई अड्डा कौन सा है?",
        "options_en": ["Indira Gandhi International Airport", "Rajiv Gandhi International Airport", "Kempegowda International Airport", "Chhatrapati Shivaji Maharaj International Airport"],
        "options_hi": ["इंदिरा गांधी अंतरराष्ट्रीय हवाई अड्डा", "राजीव गांधी अंतरराष्ट्रीय हवाई अड्डा", "केम्पेगौड़ा अंतरराष्ट्रीय हवाई अड्डा", "छत्रपति शिवाजी महाराज अंतरराष्ट्रीय हवाई अड्डा"],
        "answer_en": "Indira Gandhi International Airport",
        "answer_hi": "इंदिरा गांधी अंतरराष्ट्रीय हवाई अड्डा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which is the largest port in India?",
        "question_hi": "भारत का सबसे बड़ा बंदरगाह कौन सा है?",
        "options_en": ["Jawaharlal Nehru Port", "Mumbai Port", "Chennai Port", "Kolkata Port"],
        "options_hi": ["जवाहरलाल नेहरू बंदरगाह", "मुंबई बंदरगाह", "चेन्नई बंदरगाह", "कोलकाता बंदरगाह"],
        "answer_en": "Jawaharlal Nehru Port",
        "answer_hi": "जवाहरलाल नेहरू बंदरगाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which is the deepest port in India?",
        "question_hi": "भारत का सबसे गहरा बंदरगाह कौन सा है?",
        "options_en": ["Krishnapatnam Port", "Visakhapatnam Port", "Mormugao Port", "Paradip Port"],
        "options_hi": ["कृष्णापटनम बंदरगाह", "विशाखापत्तनम बंदरगाह", "मोर्मुगाओ बंदरगाह", "पारादीप बंदरगाह"],
        "answer_en": "Krishnapatnam Port",
        "answer_hi": "कृष्णापटनम बंदरगाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which is the largest natural harbour in India?",
        "question_hi": "भारत का सबसे बड़ा प्राकृतिक बंदरगाह कौन सा है?",
        "options_en": ["Mumbai Harbour", "Visakhapatnam Harbour", "Chennai Harbour", "Kochi Harbour"],
        "options_hi": ["मुंबई बंदरगाह", "विशाखापत्तनम बंदरगाह", "चेन्नई बंदरगाह", "कोच्चि बंदरगाह"],
        "answer_en": "Mumbai Harbour",
        "answer_hi": "मुंबई बंदरगाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which is the largest man-made harbour in India?",
        "question_hi": "भारत का सबसे बड़ा मानव निर्मित बंदरगाह कौन सा है?",
        "options_en": ["Jawaharlal Nehru Port", "Chennai Port", "Kandla Port", "Tuticorin Port"],
        "options_hi": ["जवाहरलाल नेहरू बंदरगाह", "चेन्नई बंदरगाह", "कांडला बंदरगाह", "तूतीकोरिन बंदरगाह"],
        "answer_en": "Jawaharlal Nehru Port",
        "answer_hi": "जवाहरलाल नेहरू बंदरगाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which is the longest river in South India?",
        "question_hi": "दक्षिण भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Godavari", "Krishna", "Kaveri", "Tungabhadra"],
        "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "तुंगभद्रा"],
        "answer_en": "Godavari",
        "answer_hi": "गोदावरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which is the largest river island in the world located in India?",
        "question_hi": "भारत में स्थित दुनिया का सबसे बड़ा नदी द्वीप कौन सा है?",
        "options_en": ["Majuli", "Srirangam", "Umananda", "Bhavani Island"],
        "options_hi": ["माजुली", "श्रीरंगम", "उमानंद", "भवानी द्वीप"],
        "answer_en": "Majuli",
        "answer_hi": "माजुली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which is the largest freshwater island in India?",
        "question_hi": "भारत का सबसे बड़ा मीठे पानी का द्वीप कौन सा है?",
        "options_en": ["Majuli", "Srirangam", "Umananda", "Divar Island"],
        "options_hi": ["माजुली", "श्रीरंगम", "उमानंद", "दीवार द्वीप"],
        "answer_en": "Majuli",
        "answer_hi": "माजुली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which is the largest saltwater island in India?",
        "question_hi": "भारत का सबसे बड़ा खारे पानी का द्वीप कौन सा है?",
        "options_en": ["Great Nicobar", "Middle Andaman", "South Andaman", "Little Andaman"],
        "options_hi": ["ग्रेट निकोबार", "मध्य अंडमान", "दक्षिण अंडमान", "लिटिल अंडमान"],
        "answer_en": "Great Nicobar",
        "answer_hi": "ग्रेट निकोबार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which is the largest coral island in India?",
        "question_hi": "भारत का सबसे बड़ा मूंगा द्वीप कौन सा है?",
        "options_en": ["Lakshadweep Islands", "Andaman Islands", "Nicobar Islands", "Minicoy Island"],
        "options_hi": ["लक्षद्वीप द्वीप समूह", "अंडमान द्वीप समूह", "निकोबार द्वीप समूह", "मिनिकॉय द्वीप"],
        "answer_en": "Lakshadweep Islands",
        "answer_hi": "लक्षद्वीप द्वीप समूह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the largest volcanic island in India?",
        "question_hi": "भारत का सबसे बड़ा ज्वालामुखीय द्वीप कौन सा है?",
        "options_en": ["Barren Island", "Narcondam Island", "Havelock Island", "Neil Island"],
        "options_hi": ["बैरन द्वीप", "नारकोंडम द्वीप", "हैवलॉक द्वीप", "नील द्वीप"],
        "answer_en": "Barren Island",
        "answer_hi": "बैरन द्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which is the largest river in North India?",
        "question_hi": "उत्तर भारत की सबसे बड़ी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Sutlej", "Chenab"],
        "options_hi": ["गंगा", "यमुना", "सतलुज", "चिनाब"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which is the largest river in East India?",
        "question_hi": "पूर्वी भारत की सबसे बड़ी नदी कौन सी है?",
        "options_en": ["Brahmaputra", "Ganga", "Mahanadi", "Subarnarekha"],
        "options_hi": ["ब्रह्मपुत्र", "गंगा", "महानदी", "सुबर्णरेखा"],
        "answer_en": "Brahmaputra",
        "answer_hi": "ब्रह्मपुत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which is the largest river in West India?",
        "question_hi": "पश्चिम भारत की सबसे बड़ी नदी कौन सी है?",
        "options_en": ["Narmada", "Tapi", "Sabarmati", "Mahi"],
        "options_hi": ["नर्मदा", "तापी", "साबरमती", "माही"],
        "answer_en": "Narmada",
        "answer_hi": "नर्मदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which is the largest river in Central India?",
        "question_hi": "मध्य भारत की सबसे बड़ी नदी कौन सी है?",
        "options_en": ["Narmada", "Tapi", "Son", "Betwa"],
        "options_hi": ["नर्मदा", "तापी", "सोन", "बेतवा"],
        "answer_en": "Narmada",
        "answer_hi": "नर्मदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which is the largest river in Northeast India?",
        "question_hi": "पूर्वोत्तर भारत की सबसे बड़ी नदी कौन सी है?",
        "options_en": ["Brahmaputra", "Barak", "Manas", "Subansiri"],
        "options_hi": ["ब्रह्मपुत्र", "बराक", "मानस", "सुबनसिरी"],
        "answer_en": "Brahmaputra",
        "answer_hi": "ब्रह्मपुत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which is the largest plateau in South India?",
        "question_hi": "दक्षिण भारत का सबसे बड़ा पठार कौन सा है?",
        "options_en": ["Deccan Plateau", "Malwa Plateau", "Chota Nagpur Plateau", "Meghalaya Plateau"],
        "options_hi": ["दक्कन पठार", "मालवा पठार", "छोटा नागपुर पठार", "मेघालय पठार"],
        "answer_en": "Deccan Plateau",
        "answer_hi": "दक्कन पठार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which is the largest mountain range in India?",
        "question_hi": "भारत का सबसे बड़ा पर्वत श्रृंखला कौन सा है?",
        "options_en": ["Himalayas", "Western Ghats", "Eastern Ghats", "Aravalli"],
        "options_hi": ["हिमालय", "पश्चिमी घाट", "पूर्वी घाट", "अरावली"],
        "answer_en": "Himalayas",
        "answer_hi": "हिमालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which is the oldest mountain range in India?",
        "question_hi": "भारत का सबसे पुराना पर्वत श्रृंखला कौन सा है?",
        "options_en": ["Aravalli", "Himalayas", "Western Ghats", "Eastern Ghats"],
        "options_hi": ["अरावली", "हिमालय", "पश्चिमी घाट", "पूर्वी घाट"],
        "answer_en": "Aravalli",
        "answer_hi": "अरावली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which is the highest mountain peak in South India?",
        "question_hi": "दक्षिण भारत की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["Anamudi", "Doddabetta", "Meesapulimala", "Velliangiri"],
        "options_hi": ["अनामुडी", "डोडाबेट्टा", "मीसापुलिमाला", "वेल्लियंगिरी"],
        "answer_en": "Anamudi",
        "answer_hi": "अनामुडी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which is the highest mountain peak in Western Ghats?",
        "question_hi": "पश्चिमी घाट की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["Anamudi", "Doddabetta", "Mullayanagiri", "Kalsubai"],
        "options_hi": ["अनामुडी", "डोडाबेट्टा", "मुल्लयानगिरी", "कलसुबाई"],
        "answer_en": "Anamudi",
        "answer_hi": "अनामुडी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which is the highest mountain peak in Eastern Ghats?",
        "question_hi": "पूर्वी घाट की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["Jindhagada", "Arma Konda", "Deomali", "Mahendragiri"],
        "options_hi": ["जिंदगड़ा", "अरमा कोंडा", "देवमाली", "महेंद्रगिरि"],
        "answer_en": "Jindhagada",
        "answer_hi": "जिंदगड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which is the largest desert in Rajasthan?",
        "question_hi": "राजस्थान का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Thar Desert", "Bikaner Desert", "Jaisalmer Desert", "Barmer Desert"],
        "options_hi": ["थार रेगिस्तान", "बीकानेर रेगिस्तान", "जैसलमेर रेगिस्तान", "बाड़मेर रेगिस्तान"],
        "answer_en": "Thar Desert",
        "answer_hi": "थार रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which is the largest cold desert in India?",
        "question_hi": "भारत का सबसे बड़ा ठंडा रेगिस्तान कौन सा है?",
        "options_en": ["Ladakh Desert", "Spiti Valley", "Zanskar Valley", "Nubra Valley"],
        "options_hi": ["लद्दाख रेगिस्तान", "स्पीति घाटी", "जांस्कर घाटी", "नुब्रा घाटी"],
        "answer_en": "Ladakh Desert",
        "answer_hi": "लद्दाख रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which is the largest salt desert in India?",
        "question_hi": "भारत का सबसे बड़ा नमक का रेगिस्तान कौन सा है?",
        "options_en": ["Rann of Kutch", "Little Rann of Kutch", "Sambhar Salt Desert", "Didwana Salt Desert"],
        "options_hi": ["कच्छ का रण", "लिटिल रण ऑफ कच्छ", "सांभर नमक रेगिस्तान", "दीदवाना नमक रेगिस्तान"],
        "answer_en": "Rann of Kutch",
        "answer_hi": "कच्छ का रण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which is the largest forest in India?",
        "question_hi": "भारत का सबसे बड़ा वन कौन सा है?",
        "options_en": ["Sundarbans", "Gir Forest", "Kanha National Park", "Kaziranga National Park"],
        "options_hi": ["सुंदरबन", "गिर वन", "कान्हा राष्ट्रीय उद्यान", "काजीरंगा राष्ट्रीय उद्यान"],
        "answer_en": "Sundarbans",
        "answer_hi": "सुंदरबन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which is the largest tropical rainforest in India?",
        "question_hi": "भारत का सबसे बड़ा उष्णकटिबंधीय वर्षावन कौन सा है?",
        "options_en": ["Western Ghats Rainforest", "Andaman and Nicobar Islands Rainforest", "Northeast India Rainforest", "Silent Valley"],
        "options_hi": ["पश्चिमी घाट वर्षावन", "अंडमान और निकोबार द्वीप समूह वर्षावन", "पूर्वोत्तर भारत वर्षावन", "साइलेंट वैली"],
        "answer_en": "Andaman and Nicobar Islands Rainforest",
        "answer_hi": "अंडमान और निकोबार द्वीप समूह वर्षावन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which is the largest deciduous forest in India?",
        "question_hi": "भारत का सबसे बड़ा पर्णपाती वन कौन सा है?",
        "options_en": ["Central Indian Deciduous Forest", "Eastern Highlands Deciduous Forest", "Western Himalayan Deciduous Forest", "Deccan Thorn Scrub Forests"],
        "options_hi": ["मध्य भारत पर्णपाती वन", "पूर्वी हाइलैंड्स पर्णपाती वन", "पश्चिमी हिमालय पर्णपाती वन", "दक्कन कांटेदार झाड़ी वन"],
        "answer_en": "Central Indian Deciduous Forest",
        "answer_hi": "मध्य भारत पर्णपाती वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which is the largest coniferous forest in India?",
        "question_hi": "भारत का सबसे बड़ा शंकुधारी वन कौन सा है?",
        "options_en": ["Western Himalayan Coniferous Forest", "Eastern Himalayan Coniferous Forest", "Nilgiri Coniferous Forest", "Shivalik Coniferous Forest"],
        "options_hi": ["पश्चिमी हिमालय शंकुधारी वन", "पूर्वी हिमालय शंकुधारी वन", "नीलगिरि शंकुधारी वन", "शिवालिक शंकुधारी वन"],
        "answer_en": "Western Himalayan Coniferous Forest",
        "answer_hi": "पश्चिमी हिमालय शंकुधारी वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which is the largest grassland in India?",
        "question_hi": "भारत का सबसे बड़ा घास का मैदान कौन सा है?",
        "options_en": ["Banni Grasslands", "Shola Grasslands", "Terai Grasslands", "Chilika Grasslands"],
        "options_hi": ["बन्नी घास के मैदान", "शोला घास के मैदान", "तराई घास के मैदान", "चिल्का घास के मैदान"],
        "answer_en": "Banni Grasslands",
        "answer_hi": "बन्नी घास के मैदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which is the largest wetland in India?",
        "question_hi": "भारत का सबसे बड़ा आर्द्रभूमि कौन सा है?",
        "options_en": ["Sundarbans Wetland", "Chilika Lake", "Vembanad-Kol Wetland", "Keoladeo National Park"],
        "options_hi": ["सुंदरबन आर्द्रभूमि", "चिल्का झील", "वेम्बनाड-कोल आर्द्रभूमि", "केवलादेव राष्ट्रीय उद्यान"],
        "answer_en": "Sundarbans Wetland",
        "answer_hi": "सुंदरबन आर्द्रभूमि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which is the largest estuary in India?",
        "question_hi": "भारत का सबसे बड़ा मुहाना कौन सा है?",
        "options_en": ["Ganges-Brahmaputra Estuary", "Godavari Estuary", "Krishna Estuary", "Narmada Estuary"],
        "options_hi": ["गंगा-ब्रह्मपुत्र मुहाना", "गोदावरी मुहाना", "कृष्णा मुहाना", "नर्मदा मुहाना"],
        "answer_en": "Ganges-Brahmaputra Estuary",
        "answer_hi": "गंगा-ब्रह्मपुत्र मुहाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which is the largest lagoon in India?",
        "question_hi": "भारत का सबसे बड़ा लैगून कौन सा है?",
        "options_en": ["Chilika Lake", "Pulicat Lake", "Vembanad Lake", "Ashtamudi Lake"],
        "options_hi": ["चिल्का झील", "पुलिकट झील", "वेम्बनाड झील", "अष्टमुडी झील"],
        "answer_en": "Chilika Lake",
        "answer_hi": "चिल्का झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which is the largest backwater in India?",
        "question_hi": "भारत का सबसे बड़ा बैकवाटर कौन सा है?",
        "options_en": ["Vembanad Backwaters", "Ashtamudi Backwaters", "Kuttanad Backwaters", "Kumarakom Backwaters"],
        "options_hi": ["वेम्बनाड बैकवाटर", "अष्टमुडी बैकवाटर", "कुट्टानाड बैकवाटर", "कुमारकोम बैकवाटर"],
        "answer_en": "Vembanad Backwaters",
        "answer_hi": "वेम्बनाड बैकवाटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which is the largest reservoir in India?",
        "question_hi": "भारत का सबसे बड़ा जलाशय कौन सा है?",
        "options_en": ["Indira Sagar Reservoir", "Gobind Sagar Reservoir", "Nagarjuna Sagar Reservoir", "Hirakud Reservoir"],
        "options_hi": ["इंदिरा सागर जलाशय", "गोबिंद सागर जलाशय", "नागार्जुन सागर जलाशय", "हीराकुंड जलाशय"],
        "answer_en": "Indira Sagar Reservoir",
        "answer_hi": "इंदिरा सागर जलाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which is the largest artificial lake in India?",
        "question_hi": "भारत की सबसे बड़ी कृत्रिम झील कौन सी है?",
        "options_en": ["Gobind Sagar", "Nagarjuna Sagar", "Rana Pratap Sagar", "Stanley Reservoir"],
        "options_hi": ["गोबिंद सागर", "नागार्जुन सागर", "राणा प्रताप सागर", "स्टेनली जलाशय"],
        "answer_en": "Gobind Sagar",
        "answer_hi": "गोबिंद सागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which is the largest natural lake in India?",
        "question_hi": "भारत की सबसे बड़ी प्राकृतिक झील कौन सी है?",
        "options_en": ["Wular Lake", "Chilika Lake", "Loktak Lake", "Dal Lake"],
        "options_hi": ["वुलर झील", "चिल्का झील", "लोकतक झील", "डल झील"],
        "answer_en": "Wular Lake",
        "answer_hi": "वुलर झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which is the largest oxbow lake in India?",
        "question_hi": "भारत की सबसे बड़ी गोखुर झील कौन सी है?",
        "options_en": ["Kabartal", "Saran", "Chandubi", "Ansupa"],
        "options_hi": ["कबरताल", "सरन", "चंदुबी", "अंसुपा"],
        "answer_en": "Kabartal",
        "answer_hi": "कबरताल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which is the largest crater lake in India?",
        "question_hi": "भारत की सबसे बड़ी क्रेटर झील कौन सी है?",
        "options_en": ["Lonar Lake", "Pangong Lake", "Tsomgo Lake", "Sela Lake"],
        "options_hi": ["लोनार झील", "पैंगोंग झील", "त्सोमगो झील", "सेला झील"],
        "answer_en": "Lonar Lake",
        "answer_hi": "लोनार झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which is the largest high-altitude lake in India?",
        "question_hi": "भारत की सबसे बड़ी उच्च ऊंचाई वाली झील कौन सी है?",
        "options_en": ["Pangong Lake", "Tsomgo Lake", "Sela Lake", "Gurudongmar Lake"],
        "options_hi": ["पैंगोंग झील", "त्सोमगो झील", "सेला झील", "गुरुडोंगमार झील"],
        "answer_en": "Pangong Lake",
        "answer_hi": "पैंगोंग झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which is the largest freshwater lake in the Himalayas?",
        "question_hi": "हिमालय की सबसे बड़ी मीठे पानी की झील कौन सी है?",
        "options_en": ["Wular Lake", "Dal Lake", "Nainital Lake", "Bhagirathi Lake"],
        "options_hi": ["वुलर झील", "डल झील", "नैनीताल झील", "भागीरथी झील"],
        "answer_en": "Wular Lake",
        "answer_hi": "वुलर झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which is the largest saltwater lake in the Himalayas?",
        "question_hi": "हिमालय की सबसे बड़ी खारे पानी की झील कौन सी है?",
        "options_en": ["Pangong Lake", "Tsomgo Lake", "Tso Moriri", "Tso Kar"],
        "options_hi": ["पैंगोंग झील", "त्सोमगो झील", "त्सो मोरीरी", "त्सो कार"],
        "answer_en": "Pangong Lake",
        "answer_hi": "पैंगोंग झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which is the largest riverine island in the Brahmaputra?",
        "question_hi": "ब्रह्मपुत्र में सबसे बड़ा नदी द्वीप कौन सा है?",
        "options_en": ["Majuli", "Umananda", "Peacock Island", "Brahmaputra Chars"],
        "options_hi": ["माजुली", "उमानंद", "मोर द्वीप", "ब्रह्मपुत्र चार"],
        "answer_en": "Majuli",
        "answer_hi": "माजुली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which is the largest riverine island in the Ganga?",
        "question_hi": "गंगा में सबसे बड़ा नदी द्वीप कौन सा है?",
        "options_en": ["Sagar Island", "Kachchar Island", "Ganga Chars", "None of these"],
        "options_hi": ["सागर द्वीप", "कच्छार द्वीप", "गंगा चार", "इनमें से कोई नहीं"],
        "answer_en": "Sagar Island",
        "answer_hi": "सागर द्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which is the largest delta island in India?",
        "question_hi": "भारत का सबसे बड़ा डेल्टा द्वीप कौन सा है?",
        "options_en": ["Sundarbans Islands", "Bhitarkanika Islands", "Godavari Delta Islands", "Krishna Delta Islands"],
        "options_hi": ["सुंदरबन द्वीप समूह", "भितरकनिका द्वीप समूह", "गोदावरी डेल्टा द्वीप", "कृष्णा डेल्टा द्वीप"],
        "answer_en": "Sundarbans Islands",
        "answer_hi": "सुंदरबन द्वीप समूह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which is the largest volcanic island in the Andaman and Nicobar?",
        "question_hi": "अंडमान और निकोबार में सबसे बड़ा ज्वालामुखीय द्वीप कौन सा है?",
        "options_en": ["Barren Island", "Narcondam Island", "Great Nicobar", "Middle Andaman"],
        "options_hi": ["बैरन द्वीप", "नारकोंडम द्वीप", "ग्रेट निकोबार", "मध्य अंडमान"],
        "answer_en": "Barren Island",
        "answer_hi": "बैरन द्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which is the largest coral island in Lakshadweep?",
        "question_hi": "लक्षद्वीप में सबसे बड़ा मूंगा द्वीप कौन सा है?",
        "options_en": ["Minicoy Island", "Kavaratti Island", "Agatti Island", "Bangaram Island"],
        "options_hi": ["मिनिकॉय द्वीप", "कवरत्ती द्वीप", "अगत्ती द्वीप", "बंगाराम द्वीप"],
        "answer_en": "Minicoy Island",
        "answer_hi": "मिनिकॉय द्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which is the largest inhabited island in India?",
        "question_hi": "भारत का सबसे बड़ा बसा हुआ द्वीप कौन सा है?",
        "options_en": ["Great Nicobar", "Middle Andaman", "South Andaman", "Majuli"],
        "options_hi": ["ग्रेट निकोबार", "मध्य अंडमान", "दक्षिण अंडमान", "माजुली"],
        "answer_en": "Great Nicobar",
        "answer_hi": "ग्रेट निकोबार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which is the largest uninhabited island in India?",
        "question_hi": "भारत का सबसे बड़ा निर्जन द्वीप कौन सा है?",
        "options_en": ["Barren Island", "Narcondam Island", "Betapur Island", "Eastern Island"],
        "options_hi": ["बैरन द्वीप", "नारकोंडम द्वीप", "बेतापुर द्वीप", "ईस्टर्न द्वीप"],
        "answer_en": "Barren Island",
        "answer_hi": "बैरन द्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which is the largest river port in India?",
        "question_hi": "भारत का सबसे बड़ा नदी बंदरगाह कौन सा है?",
        "options_en": ["Kolkata Port", "Haldia Port", "Paradip Port", "Visakhapatnam Port"],
        "options_hi": ["कोलकाता बंदरगाह", "हल्दिया बंदरगाह", "पारादीप बंदरगाह", "विशाखापत्तनम बंदरगाह"],
        "answer_en": "Kolkata Port",
        "answer_hi": "कोलकाता बंदरगाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which is the largest inland port in India?",
        "question_hi": "भारत का सबसे बड़ा अंतर्देशीय बंदरगाह कौन सा है?",
        "options_en": ["Kolkata Port", "Haldia Port", "Varanasi Port", "Allahabad Port"],
        "options_hi": ["कोलकाता बंदरगाह", "हल्दिया बंदरगाह", "वाराणसी बंदरगाह", "इलाहाबाद बंदरगाह"],
        "answer_en": "Kolkata Port",
        "answer_hi": "कोलकाता बंदरगाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which is the largest fishing harbor in India?",
        "question_hi": "भारत का सबसे बड़ा मछली पकड़ने का बंदरगाह कौन सा है?",
        "options_en": ["Cochin Fishing Harbor", "Visakhapatnam Fishing Harbor", "Mumbai Fishing Harbor", "Chennai Fishing Harbor"],
        "options_hi": ["कोच्चि मत्स्य बंदरगाह", "विशाखापत्तनम मत्स्य बंदरगाह", "मुंबई मत्स्य बंदरगाह", "चेन्नई मत्स्य बंदरगाह"],
        "answer_en": "Cochin Fishing Harbor",
        "answer_hi": "कोच्चि मत्स्य बंदरगाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which is the largest ship-breaking yard in India?",
        "question_hi": "भारत का सबसे बड़ा जहाज तोड़ने का यार्ड कौन सा है?",
        "options_en": ["Alang Ship Breaking Yard", "Mumbai Ship Breaking Yard", "Chennai Ship Breaking Yard", "Kolkata Ship Breaking Yard"],
        "options_hi": ["अलंग जहाज तोड़ने का यार्ड", "मुंबई जहाज तोड़ने का यार्ड", "चेन्नई जहाज तोड़ने का यार्ड", "कोलकाता जहाज तोड़ने का यार्ड"],
        "answer_en": "Alang Ship Breaking Yard",
        "answer_hi": "अलंग जहाज तोड़ने का यार्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which is the largest dry dock in India?",
        "question_hi": "भारत का सबसे बड़ा ड्राई डॉक कौन सा है?",
        "options_en": ["Cochin Shipyard Dry Dock", "Mazagon Dock Dry Dock", "Hindustan Shipyard Dry Dock", "Garden Reach Shipbuilders Dry Dock"],
        "options_hi": ["कोच्चि शिपयार्ड ड्राई डॉक", "माजगांव डॉक ड्राई डॉक", "हिंदुस्तान शिपयार्ड ड्राई डॉक", "गार्डन रीच शिपबिल्डर्स ड्राई डॉक"],
        "answer_en": "Cochin Shipyard Dry Dock",
        "answer_hi": "कोच्चि शिपयार्ड ड्राई डॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which is the largest naval base in India?",
        "question_hi": "भारत का सबसे बड़ा नौसैनिक अड्डा कौन सा है?",
        "options_en": ["INS Kadamba", "INS Shivaji", "INS Venduruthy", "INS Circars"],
        "options_hi": ["आईएनएस कदंब", "आईएनएस शिवाजी", "आईएनएस वेंदुरुथी", "आईएनएस सरकार"],
        "answer_en": "INS Kadamba",
        "answer_hi": "आईएनएस कदंब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which is the largest air force base in India?",
        "question_hi": "भारत का सबसे बड़ा वायु सेना अड्डा कौन सा है?",
        "options_en": ["AFS Hindon", "AFS Chandigarh", "AFS Jodhpur", "AFS Ambala"],
        "options_hi": ["एएफएस हिंडोन", "एएफएस चंडीगढ़", "एएफएस जोधपुर", "एएफएस अंबाला"],
        "answer_en": "AFS Hindon",
        "answer_hi": "एएफएस हिंडोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which is the largest army base in India?",
        "question_hi": "भारत का सबसे बड़ा सेना अड्डा कौन सा है?",
        "options_en": ["Cantonment, Delhi", "Cantonment, Pune", "Cantonment, Bengaluru", "Cantonment, Lucknow"],
        "options_hi": ["कैंटोनमेंट, दिल्ली", "कैंटोनमेंट, पुणे", "कैंटोनमेंट, बेंगलुरु", "कैंटोनमेंट, लखनऊ"],
        "answer_en": "Cantonment, Delhi",
        "answer_hi": "कैंटोनमेंट, दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which is the largest border with a neighboring country?",
        "question_hi": "किस पड़ोसी देश के साथ सबसे लंबी सीमा है?",
        "options_en": ["Bangladesh", "China", "Pakistan", "Nepal"],
        "options_hi": ["बांग्लादेश", "चीन", "पाकिस्तान", "नेपाल"],
        "answer_en": "Bangladesh",
        "answer_hi": "बांग्लादेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which is the smallest border with a neighboring country?",
        "question_hi": "किस पड़ोसी देश के साथ सबसे छोटी सीमा है?",
        "options_en": ["Afghanistan", "Bhutan", "Myanmar", "Sri Lanka"],
        "options_hi": ["अफगानिस्तान", "भूटान", "म्यांमार", "श्रीलंका"],
        "answer_en": "Afghanistan",
        "answer_hi": "अफगानिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which is the largest international border state?",
        "question_hi": "सबसे बड़ी अंतरराष्ट्रीय सीमा वाला राज्य कौन सा है?",
        "options_en": ["West Bengal", "Rajasthan", "Jammu and Kashmir", "Uttar Pradesh"],
        "options_hi": ["पश्चिम बंगाल", "राजस्थान", "जम्मू और कश्मीर", "उत्तर प्रदेश"],
        "answer_en": "West Bengal",
        "answer_hi": "पश्चिम बंगाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which is the smallest international border state?",
        "question_hi": "सबसे छोटी अंतरराष्ट्रीय सीमा वाला राज्य कौन सा है?",
        "options_en": ["Sikkim", "Meghalaya", "Mizoram", "Nagaland"],
        "options_hi": ["सिक्किम", "मेघालय", "मिजोरम", "नागालैंड"],
        "answer_en": "Sikkim",
        "answer_hi": "सिक्किम",
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