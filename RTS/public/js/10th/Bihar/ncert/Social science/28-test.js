const questions = [
    {
        "num": 1,
        "question_en": "What is the supreme law of India?",
        "question_hi": "भारत का सर्वोच्च कानून क्या है?",
        "options_en": ["Constitution of India", "Parliament Acts", "Supreme Court Judgments", "President's Orders"],
        "options_hi": ["भारत का संविधान", "संसद अधिनियम", "सुप्रीम कोर्ट के निर्णय", "राष्ट्रपति के आदेश"],
        "answer_en": "Constitution of India",
        "answer_hi": "भारत का संविधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who is known as the Father of the Indian Constitution?",
        "question_hi": "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
        "options_en": ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["डॉ. बी.आर. अंबेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer_en": "Dr. B.R. Ambedkar",
        "answer_hi": "डॉ. बी.आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What type of government does India have?",
        "question_hi": "भारत में किस प्रकार की सरकार है?",
        "options_en": ["Parliamentary Democracy", "Presidential System", "Monarchy", "Military Rule"],
        "options_hi": ["संसदीय लोकतंत्र", "राष्ट्रपति प्रणाली", "राजतंत्र", "सैन्य शासन"],
        "answer_en": "Parliamentary Democracy",
        "answer_hi": "संसदीय लोकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How many Fundamental Rights are in the Indian Constitution?",
        "question_hi": "भारतीय संविधान में कितने मौलिक अधिकार हैं?",
        "options_en": ["6", "7", "8", "5"],
        "options_hi": ["6", "7", "8", "5"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Who is the head of the Indian State?",
        "question_hi": "भारतीय राज्य का प्रमुख कौन है?",
        "options_en": ["President", "Prime Minister", "Chief Justice", "Speaker"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "अध्यक्ष"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the minimum voting age in India?",
        "question_hi": "भारत में मतदान की न्यूनतम आयु क्या है?",
        "options_en": ["18 years", "21 years", "25 years", "16 years"],
        "options_hi": ["18 वर्ष", "21 वर्ष", "25 वर्ष", "16 वर्ष"],
        "answer_en": "18 years",
        "answer_hi": "18 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which article deals with the Right to Equality?",
        "question_hi": "किस अनुच्छेद में समानता का अधिकार है?",
        "options_en": ["Article 14-18", "Article 19-22", "Article 23-24", "Article 25-28"],
        "options_hi": ["अनुच्छेद 14-18", "अनुच्छेद 19-22", "अनुच्छेद 23-24", "अनुच्छेद 25-28"],
        "answer_en": "Article 14-18",
        "answer_hi": "अनुच्छेद 14-18",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Who presides over the Lok Sabha?",
        "question_hi": "लोकसभा की अध्यक्षता कौन करता है?",
        "options_en": ["Speaker", "President", "Prime Minister", "Vice President"],
        "options_hi": ["अध्यक्ष", "राष्ट्रपति", "प्रधानमंत्री", "उपराष्ट्रपति"],
        "answer_en": "Speaker",
        "answer_hi": "अध्यक्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the tenure of a Rajya Sabha member?",
        "question_hi": "राज्यसभा सदस्य का कार्यकाल कितना होता है?",
        "options_en": ["6 years", "5 years", "4 years", "3 years"],
        "options_hi": ["6 वर्ष", "5 वर्ष", "4 वर्ष", "3 वर्ष"],
        "answer_en": "6 years",
        "answer_hi": "6 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which body conducts elections in India?",
        "question_hi": "भारत में चुनाव कौन सा निकाय आयोजित करता है?",
        "options_en": ["Election Commission", "Parliament", "Supreme Court", "President"],
        "options_hi": ["चुनाव आयोग", "संसद", "सर्वोच्च न्यायालय", "राष्ट्रपति"],
        "answer_en": "Election Commission",
        "answer_hi": "चुनाव आयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does 'Sovereign' mean in the Preamble?",
        "question_hi": "उद्देशिका में 'सार्वभौमिक' का क्या अर्थ है?",
        "options_en": ["Independent authority", "Democratic", "Secular", "Republic"],
        "options_hi": ["स्वतंत्र प्राधिकार", "लोकतांत्रिक", "धर्मनिरपेक्ष", "गणराज्य"],
        "answer_en": "Independent authority",
        "answer_hi": "स्वतंत्र प्राधिकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Who appoints the Chief Justice of India?",
        "question_hi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options_en": ["President", "Prime Minister", "Parliament", "Supreme Court"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "सर्वोच्च न्यायालय"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the maximum strength of Lok Sabha?",
        "question_hi": "लोकसभा की अधिकतम सदस्य संख्या कितनी है?",
        "options_en": ["552", "545", "550", "560"],
        "options_hi": ["552", "545", "550", "560"],
        "answer_en": "552",
        "answer_hi": "552",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which article deals with the Right to Freedom?",
        "question_hi": "किस अनुच्छेद में स्वतंत्रता का अधिकार है?",
        "options_en": ["Article 19", "Article 21", "Article 14", "Article 32"],
        "options_hi": ["अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 14", "अनुच्छेद 32"],
        "answer_en": "Article 19",
        "answer_hi": "अनुच्छेद 19",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the term of office of the President?",
        "question_hi": "राष्ट्रपति का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "4 years", "6 years", "7 years"],
        "options_hi": ["5 वर्ष", "4 वर्ष", "6 वर्ष", "7 वर्ष"],
        "answer_en": "5 years",
        "answer_hi": "5 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which house is called the 'House of Elders'?",
        "question_hi": "किस सदन को 'वरिष्ठ सदन' कहा जाता है?",
        "options_en": ["Rajya Sabha", "Lok Sabha", "Vidhan Sabha", "Vidhan Parishad"],
        "options_hi": ["राज्यसभा", "लोकसभा", "विधान सभा", "विधान परिषद"],
        "answer_en": "Rajya Sabha",
        "answer_hi": "राज्यसभा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the meaning of 'Secular' in the Preamble?",
        "question_hi": "उद्देशिका में 'धर्मनिरपेक्ष' का क्या अर्थ है?",
        "options_en": ["Equal respect for all religions", "No religion", "State religion", "Religious freedom"],
        "options_hi": ["सभी धर्मों के प्रति समान सम्मान", "कोई धर्म नहीं", "राज्य धर्म", "धार्मिक स्वतंत्रता"],
        "answer_en": "Equal respect for all religions",
        "answer_hi": "सभी धर्मों के प्रति समान सम्मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Who is the constitutional head of the state governments?",
        "question_hi": "राज्य सरकारों का संवैधानिक प्रमुख कौन है?",
        "options_en": ["Governor", "Chief Minister", "President", "Prime Minister"],
        "options_hi": ["राज्यपाल", "मुख्यमंत्री", "राष्ट्रपति", "प्रधानमंत्री"],
        "answer_en": "Governor",
        "answer_hi": "राज्यपाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the full form of MLA?",
        "question_hi": "एमएलए का पूर्ण रूप क्या है?",
        "options_en": ["Member of Legislative Assembly", "Member of Lok Sabha Assembly", "Member of Legal Assembly", "Member of Local Authority"],
        "options_hi": ["विधान सभा सदस्य", "लोकसभा सदस्य", "विधिक सभा सदस्य", "स्थानीय प्राधिकरण सदस्य"],
        "answer_en": "Member of Legislative Assembly",
        "answer_hi": "विधान सभा सदस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which article deals with the Right to Constitutional Remedies?",
        "question_hi": "किस अनुच्छेद में संवैधानिक उपचारों का अधिकार है?",
        "options_en": ["Article 32", "Article 226", "Article 14", "Article 21"],
        "options_hi": ["अनुच्छेद 32", "अनुच्छेद 226", "अनुच्छेद 14", "अनुच्छेद 21"],
        "answer_en": "Article 32",
        "answer_hi": "अनुच्छेद 32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the quorum required for Lok Sabha meetings?",
        "question_hi": "लोकसभा बैठकों के लिए कितनी गणपूर्ति आवश्यक है?",
        "options_en": ["One-tenth of total members", "One-fourth of total members", "One-half of total members", "One-third of total members"],
        "options_hi": ["कुल सदस्यों का दसवां हिस्सा", "कुल सदस्यों का चौथाई हिस्सा", "कुल सदस्यों का आधा हिस्सा", "कुल सदस्यों का एक तिहाई"],
        "answer_en": "One-tenth of total members",
        "answer_hi": "कुल सदस्यों का दसवां हिस्सा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Who is the ex-officio Chairman of Rajya Sabha?",
        "question_hi": "राज्यसभा का पदेन अध्यक्ष कौन है?",
        "options_en": ["Vice President", "President", "Prime Minister", "Speaker"],
        "options_hi": ["उपराष्ट्रपति", "राष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष"],
        "answer_en": "Vice President",
        "answer_hi": "उपराष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the age for becoming a Rajya Sabha member?",
        "question_hi": "राज्यसभा सदस्य बनने की आयु क्या है?",
        "options_en": ["30 years", "25 years", "35 years", "21 years"],
        "options_hi": ["30 वर्ष", "25 वर्ष", "35 वर्ष", "21 वर्ष"],
        "answer_en": "30 years",
        "answer_hi": "30 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which article deals with the Right to Education?",
        "question_hi": "किस अनुच्छेद में शिक्षा का अधिकार है?",
        "options_en": ["Article 21A", "Article 45", "Article 51A", "Article 29"],
        "options_hi": ["अनुच्छेद 21ए", "अनुच्छेद 45", "अनुच्छेद 51ए", "अनुच्छेद 29"],
        "answer_en": "Article 21A",
        "answer_hi": "अनुच्छेद 21ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the term of a Governor?",
        "question_hi": "राज्यपाल का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "4 years", "6 years", "At President's pleasure"],
        "options_hi": ["5 वर्ष", "4 वर्ष", "6 वर्ष", "राष्ट्रपति की प्रसादपर्यंत"],
        "answer_en": "At President's pleasure",
        "answer_hi": "राष्ट्रपति की प्रसादपर्यंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which article deals with the abolition of untouchability?",
        "question_hi": "किस अनुच्छेद में अस्पृश्यता उन्मूलन है?",
        "options_en": ["Article 17", "Article 15", "Article 16", "Article 14"],
        "options_hi": ["अनुच्छेद 17", "अनुच्छेद 15", "अनुच्छेद 16", "अनुच्छेद 14"],
        "answer_en": "Article 17",
        "answer_hi": "अनुच्छेद 17",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Who can declare a financial emergency?",
        "question_hi": "वित्तीय आपातकाल की घोषणा कौन कर सकता है?",
        "options_en": ["President", "Prime Minister", "Finance Minister", "Parliament"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्री", "संसद"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the strength of Rajya Sabha?",
        "question_hi": "राज्यसभा की सदस्य संख्या कितनी है?",
        "options_en": ["250", "245", "260", "240"],
        "options_hi": ["250", "245", "260", "240"],
        "answer_en": "250",
        "answer_hi": "250",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which article deals with the protection of life and personal liberty?",
        "question_hi": "किस अनुच्छेद में जीवन और व्यक्तिगत स्वतंत्रता का संरक्षण है?",
        "options_en": ["Article 21", "Article 19", "Article 20", "Article 22"],
        "options_hi": ["अनुच्छेद 21", "अनुच्छेद 19", "अनुच्छेद 20", "अनुच्छेद 22"],
        "answer_en": "Article 21",
        "answer_hi": "अनुच्छेद 21",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Who is the head of the Union Council of Ministers?",
        "question_hi": "केंद्रीय मंत्रिपरिषद का प्रमुख कौन है?",
        "options_en": ["Prime Minister", "President", "Home Minister", "Defence Minister"],
        "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "गृह मंत्री", "रक्षा मंत्री"],
        "answer_en": "Prime Minister",
        "answer_hi": "प्रधानमंत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the minimum age for becoming President?",
        "question_hi": "राष्ट्रपति बनने की न्यूनतम आयु क्या है?",
        "options_en": ["35 years", "30 years", "40 years", "25 years"],
        "options_hi": ["35 वर्ष", "30 वर्ष", "40 वर्ष", "25 वर्ष"],
        "answer_en": "35 years",
        "answer_hi": "35 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which article deals with the Directive Principles?",
        "question_hi": "किस अनुच्छेद में नीति निर्देशक सिद्धांत हैं?",
        "options_en": ["Article 36-51", "Article 52-78", "Article 79-122", "Article 123-147"],
        "options_hi": ["अनुच्छेद 36-51", "अनुच्छेद 52-78", "अनुच्छेद 79-122", "अनुच्छेद 123-147"],
        "answer_en": "Article 36-51",
        "answer_hi": "अनुच्छेद 36-51",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the term of Lok Sabha?",
        "question_hi": "लोकसभा का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "4 years", "6 years", "3 years"],
        "options_hi": ["5 वर्ष", "4 वर्ष", "6 वर्ष", "3 वर्ष"],
        "answer_en": "5 years",
        "answer_hi": "5 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Who is the Chief Executive of the Union Government?",
        "question_hi": "केंद्र सरकार का मुख्य कार्यकारी कौन है?",
        "options_en": ["Prime Minister", "President", "Vice President", "Cabinet Secretary"],
        "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "उपराष्ट्रपति", "कैबिनेट सचिव"],
        "answer_en": "Prime Minister",
        "answer_hi": "प्रधानमंत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which article deals with the President's impeachment?",
        "question_hi": "किस अनुच्छेद में राष्ट्रपति के महाभियोग का प्रावधान है?",
        "options_en": ["Article 61", "Article 74", "Article 75", "Article 78"],
        "options_hi": ["अनुच्छेद 61", "अनुच्छेद 74", "अनुच्छेद 75", "अनुच्छेद 78"],
        "answer_en": "Article 61",
        "answer_hi": "अनुच्छेद 61",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the meaning of 'Republic' in the Preamble?",
        "question_hi": "उद्देशिका में 'गणराज्य' का क्या अर्थ है?",
        "options_en": ["Elected head of state", "Monarchy", "Dictatorship", "Theocracy"],
        "options_hi": ["निर्वाचित राज्य प्रमुख", "राजतंत्र", "तानाशाही", "धर्मतंत्र"],
        "answer_en": "Elected head of state",
        "answer_hi": "निर्वाचित राज्य प्रमुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Who appoints the Prime Minister?",
        "question_hi": "प्रधानमंत्री की नियुक्ति कौन करता है?",
        "options_en": ["President", "Parliament", "People", "Supreme Court"],
        "options_hi": ["राष्ट्रपति", "संसद", "जनता", "सर्वोच्च न्यायालय"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which article deals with the Fundamental Duties?",
        "question_hi": "किस अनुच्छेद में मौलिक कर्तव्य हैं?",
        "options_en": ["Article 51A", "Article 37", "Article 48A", "Article 49"],
        "options_hi": ["अनुच्छेद 51ए", "अनुच्छेद 37", "अनुच्छेद 48ए", "अनुच्छेद 49"],
        "answer_en": "Article 51A",
        "answer_hi": "अनुच्छेद 51ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the minimum age for Lok Sabha membership?",
        "question_hi": "लोकसभा सदस्यता की न्यूनतम आयु क्या है?",
        "options_en": ["25 years", "30 years", "35 years", "21 years"],
        "options_hi": ["25 वर्ष", "30 वर्ष", "35 वर्ष", "21 वर्ष"],
        "answer_en": "25 years",
        "answer_hi": "25 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Who is the Supreme Commander of the Armed Forces?",
        "question_hi": "सशस्त्र बलों का सर्वोच्च कमांडर कौन है?",
        "options_en": ["President", "Prime Minister", "Defence Minister", "Chief of Defence Staff"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "रक्षा मंत्री", "रक्षा प्रमुख"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which article deals with the right to freedom of religion?",
        "question_hi": "किस अनुच्छेद में धर्म की स्वतंत्रता का अधिकार है?",
        "options_en": ["Article 25-28", "Article 29-30", "Article 31", "Article 32"],
        "options_hi": ["अनुच्छेद 25-28", "अनुच्छेद 29-30", "अनुच्छेद 31", "अनुच्छेद 32"],
        "answer_en": "Article 25-28",
        "answer_hi": "अनुच्छेद 25-28",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the term of Vice President?",
        "question_hi": "उपराष्ट्रपति का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "4 years", "6 years", "3 years"],
        "options_hi": ["5 वर्ष", "4 वर्ष", "6 वर्ष", "3 वर्ष"],
        "answer_en": "5 years",
        "answer_hi": "5 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which house is called the 'House of People'?",
        "question_hi": "किस सदन को 'लोगों का सदन' कहा जाता है?",
        "options_en": ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Gram Sabha"],
        "options_hi": ["लोकसभा", "राज्यसभा", "विधान सभा", "ग्राम सभा"],
        "answer_en": "Lok Sabha",
        "answer_hi": "लोकसभा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the meaning of 'Socialist' in the Preamble?",
        "question_hi": "उद्देशिका में 'समाजवादी' का क्या अर्थ है?",
        "options_en": ["Social and economic equality", "Capitalism", "Communism", "Mixed economy"],
        "options_hi": ["सामाजिक और आर्थिक समानता", "पूंजीवाद", "साम्यवाद", "मिश्रित अर्थव्यवस्था"],
        "answer_en": "Social and economic equality",
        "answer_hi": "सामाजिक और आर्थिक समानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who appoints the Attorney General of India?",
        "question_hi": "भारत के महान्यायवादी की नियुक्ति कौन करता है?",
        "options_en": ["President", "Prime Minister", "Parliament", "Supreme Court"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "सर्वोच्च न्यायालय"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which article deals with the prohibition of child labor?",
        "question_hi": "किस अनुच्छेद में बाल श्रम का निषेध है?",
        "options_en": ["Article 24", "Article 23", "Article 21", "Article 15"],
        "options_hi": ["अनुच्छेद 24", "अनुच्छेद 23", "अनुच्छेद 21", "अनुच्छेद 15"],
        "answer_en": "Article 24",
        "answer_hi": "अनुच्छेद 24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the maximum gap between two Parliament sessions?",
        "question_hi": "दो संसद सत्रों के बीच अधिकतम अंतराल कितना होता है?",
        "options_en": ["6 months", "3 months", "9 months", "12 months"],
        "options_hi": ["6 महीने", "3 महीने", "9 महीने", "12 महीने"],
        "answer_en": "6 months",
        "answer_hi": "6 महीने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Who is the presiding officer of Rajya Sabha?",
        "question_hi": "राज्यसभा का सभापति कौन है?",
        "options_en": ["Chairman", "Speaker", "President", "Prime Minister"],
        "options_hi": ["सभापति", "अध्यक्ष", "राष्ट्रपति", "प्रधानमंत्री"],
        "answer_en": "Chairman",
        "answer_hi": "सभापति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which article deals with the right against exploitation?",
        "question_hi": "किस अनुच्छेद में शोषण के विरुद्ध अधिकार है?",
        "options_en": ["Article 23-24", "Article 19-22", "Article 25-28", "Article 29-30"],
        "options_hi": ["अनुच्छेद 23-24", "अनुच्छेद 19-22", "अनुच्छेद 25-28", "अनुच्छेद 29-30"],
        "answer_en": "Article 23-24",
        "answer_hi": "अनुच्छेद 23-24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the minimum age for becoming Vice President?",
        "question_hi": "उपराष्ट्रपति बनने की न्यूनतम आयु क्या है?",
        "options_en": ["35 years", "30 years", "40 years", "25 years"],
        "options_hi": ["35 वर्ष", "30 वर्ष", "40 वर्ष", "25 वर्ष"],
        "answer_en": "35 years",
        "answer_hi": "35 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which article deals with the President's rule in states?",
        "question_hi": "किस अनुच्छेद में राज्यों में राष्ट्रपति शासन का प्रावधान है?",
        "options_en": ["Article 356", "Article 352", "Article 360", "Article 370"],
        "options_hi": ["अनुच्छेद 356", "अनुच्छेद 352", "अनुच्छेद 360", "अनुच्छेद 370"],
        "answer_en": "Article 356",
        "answer_hi": "अनुच्छेद 356",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Who administers the oath of office to the President?",
        "question_hi": "राष्ट्रपति को पद और गोपनीयता की शपथ कौन दिलाता है?",
        "options_en": ["Chief Justice of India", "Prime Minister", "Vice President", "Speaker"],
        "options_hi": ["भारत के मुख्य न्यायाधीश", "प्रधानमंत्री", "उपराष्ट्रपति", "अध्यक्ष"],
        "answer_en": "Chief Justice of India",
        "answer_hi": "भारत के मुख्य न्यायाधीश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the strength of the Council of Ministers?",
        "question_hi": "मंत्रिपरिषद की सदस्य संख्या कितनी हो सकती है?",
        "options_en": ["15% of Lok Sabha strength", "10% of Lok Sabha strength", "20% of Lok Sabha strength", "25% of Lok Sabha strength"],
        "options_hi": ["लोकसभा सदस्य संख्या का 15%", "लोकसभा सदस्य संख्या का 10%", "लोकसभा सदस्य संख्या का 20%", "लोकसभा सदस्य संख्या का 25%"],
        "answer_en": "15% of Lok Sabha strength",
        "answer_hi": "लोकसभा सदस्य संख्या का 15%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which article deals with the appointment of Prime Minister?",
        "question_hi": "किस अनुच्छेद में प्रधानमंत्री की नियुक्ति का प्रावधान है?",
        "options_en": ["Article 75", "Article 74", "Article 76", "Article 77"],
        "options_hi": ["अनुच्छेद 75", "अनुच्छेद 74", "अनुच्छेद 76", "अनुच्छेद 77"],
        "answer_en": "Article 75",
        "answer_hi": "अनुच्छेद 75",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the meaning of 'Democratic' in the Preamble?",
        "question_hi": "उद्देशिका में 'लोकतांत्रिक' का क्या अर्थ है?",
        "options_en": ["Government of the people", "Government by officials", "Government by elites", "Government by monarch"],
        "options_hi": ["लोगों की सरकार", "अधिकारियों द्वारा सरकार", "अभिजात वर्ग द्वारा सरकार", "राजा द्वारा सरकार"],
        "answer_en": "Government of the people",
        "answer_hi": "लोगों की सरकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Who is the guardian of the Constitution?",
        "question_hi": "संविधान का संरक्षक कौन है?",
        "options_en": ["Supreme Court", "President", "Parliament", "Prime Minister"],
        "options_hi": ["सर्वोच्च न्यायालय", "राष्ट्रपति", "संसद", "प्रधानमंत्री"],
        "answer_en": "Supreme Court",
        "answer_hi": "सर्वोच्च न्यायालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which article deals with the right to property?",
        "question_hi": "किस अनुच्छेद में संपत्ति का अधिकार है?",
        "options_en": ["Article 300A", "Article 31", "Article 19", "Article 21"],
        "options_hi": ["अनुच्छेद 300ए", "अनुच्छेद 31", "अनुच्छेद 19", "अनुच्छेद 21"],
        "answer_en": "Article 300A",
        "answer_hi": "अनुच्छेद 300ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the term of a member of Legislative Assembly?",
        "question_hi": "विधान सभा सदस्य का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "4 years", "6 years", "3 years"],
        "options_hi": ["5 वर्ष", "4 वर्ष", "6 वर्ष", "3 वर्ष"],
        "answer_en": "5 years",
        "answer_hi": "5 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Who can dissolve the Lok Sabha?",
        "question_hi": "लोकसभा को भंग करने की शक्ति किसे है?",
        "options_en": ["President", "Prime Minister", "Speaker", "Supreme Court"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष", "सर्वोच्च न्यायालय"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which article deals with the Emergency provisions?",
        "question_hi": "किस अनुच्छेद में आपातकालीन प्रावधान हैं?",
        "options_en": ["Article 352-360", "Article 361-367", "Article 368-392", "Article 393-395"],
        "options_hi": ["अनुच्छेद 352-360", "अनुच्छेद 361-367", "अनुच्छेद 368-392", "अनुच्छेद 393-395"],
        "answer_en": "Article 352-360",
        "answer_hi": "अनुच्छेद 352-360",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the original jurisdiction of Supreme Court?",
        "question_hi": "सर्वोच्च न्यायालय की प्रारंभिक अधिकारिता क्या है?",
        "options_en": ["Disputes between States", "Criminal cases", "Civil cases", "Constitutional cases"],
        "options_hi": ["राज्यों के बीच विवाद", "आपराधिक मामले", "दीवानी मामले", "संवैधानिक मामले"],
        "answer_en": "Disputes between States",
        "answer_hi": "राज्यों के बीच विवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Who appoints the Chief Election Commissioner?",
        "question_hi": "मुख्य चुनाव आयुक्त की नियुक्ति कौन करता है?",
        "options_en": ["President", "Prime Minister", "Parliament", "Supreme Court"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "सर्वोच्च न्यायालय"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the retirement age of Supreme Court judges?",
        "question_hi": "सर्वोच्च न्यायालय के न्यायाधीशों की सेवानिवृत्ति आयु क्या है?",
        "options_en": ["65 years", "62 years", "60 years", "58 years"],
        "options_hi": ["65 वर्ष", "62 वर्ष", "60 वर्ष", "58 वर्ष"],
        "answer_en": "65 years",
        "answer_hi": "65 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which article deals with the Union Public Service Commission?",
        "question_hi": "किस अनुच्छेद में संघ लोक सेवा आयोग का प्रावधान है?",
        "options_en": ["Article 315-323", "Article 324-329", "Article 330-342", "Article 343-351"],
        "options_hi": ["अनुच्छेद 315-323", "अनुच्छेद 324-329", "अनुच्छेद 330-342", "अनुच्छेद 343-351"],
        "answer_en": "Article 315-323",
        "answer_hi": "अनुच्छेद 315-323",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the minimum age for becoming a Chief Minister?",
        "question_hi": "मुख्यमंत्री बनने की न्यूनतम आयु क्या है?",
        "options_en": ["25 years", "30 years", "35 years", "21 years"],
        "options_hi": ["25 वर्ष", "30 वर्ष", "35 वर्ष", "21 वर्ष"],
        "answer_en": "25 years",
        "answer_hi": "25 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Who is the head of the municipal corporation?",
        "question_hi": "नगर निगम का प्रमुख कौन होता है?",
        "options_en": ["Mayor", "Commissioner", "Chairman", "President"],
        "options_hi": ["महापौर", "आयुक्त", "अध्यक्ष", "राष्ट्रपति"],
        "answer_en": "Mayor",
        "answer_hi": "महापौर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which article deals with the Scheduled Castes and Tribes?",
        "question_hi": "किस अनुच्छेद में अनुसूचित जातियों और जनजातियों का प्रावधान है?",
        "options_en": ["Article 341-342", "Article 330-332", "Article 335", "All of these"],
        "options_hi": ["अनुच्छेद 341-342", "अनुच्छेद 330-332", "अनुच्छेद 335", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the term of a Panchayat?",
        "question_hi": "पंचायत का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "3 years", "4 years", "2 years"],
        "options_hi": ["5 वर्ष", "3 वर्ष", "4 वर्ष", "2 वर्ष"],
        "answer_en": "5 years",
        "answer_hi": "5 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Who appoints the judges of High Courts?",
        "question_hi": "उच्च न्यायालयों के न्यायाधीशों की नियुक्ति कौन करता है?",
        "options_en": ["President", "Chief Justice of India", "Governor", "Prime Minister"],
        "options_hi": ["राष्ट्रपति", "भारत के मुख्य न्यायाधीश", "राज्यपाल", "प्रधानमंत्री"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which article deals with the amendment of Constitution?",
        "question_hi": "किस अनुच्छेद में संविधान संशोधन का प्रावधान है?",
        "options_en": ["Article 368", "Article 370", "Article 352", "Article 356"],
        "options_hi": ["अनुच्छेद 368", "अनुच्छेद 370", "अनुच्छेद 352", "अनुच्छेद 356"],
        "answer_en": "Article 368",
        "answer_hi": "अनुच्छेद 368",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the retirement age of High Court judges?",
        "question_hi": "उच्च न्यायालय के न्यायाधीशों की सेवानिवृत्ति आयु क्या है?",
        "options_en": ["62 years", "65 years", "60 years", "58 years"],
        "options_hi": ["62 वर्ष", "65 वर्ष", "60 वर्ष", "58 वर्ष"],
        "answer_en": "62 years",
        "answer_hi": "62 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Who is the head of the state executive?",
        "question_hi": "राज्य कार्यपालिका का प्रमुख कौन है?",
        "options_en": ["Governor", "Chief Minister", "Chief Justice", "Speaker"],
        "options_hi": ["राज्यपाल", "मुख्यमंत्री", "मुख्य न्यायाधीश", "अध्यक्ष"],
        "answer_en": "Governor",
        "answer_hi": "राज्यपाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which article deals with the Official Language?",
        "question_hi": "किस अनुच्छेद में राजभाषा का प्रावधान है?",
        "options_en": ["Article 343-351", "Article 352-360", "Article 361-367", "Article 368-392"],
        "options_hi": ["अनुच्छेद 343-351", "अनुच्छेद 352-360", "अनुच्छेद 361-367", "अनुच्छेद 368-392"],
        "answer_en": "Article 343-351",
        "answer_hi": "अनुच्छेद 343-351",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the meaning of 'Justice' in the Preamble?",
        "question_hi": "उद्देशिका में 'न्याय' का क्या अर्थ है?",
        "options_en": ["Social, economic and political justice", "Legal justice only", "Criminal justice", "Civil justice"],
        "options_hi": ["सामाजिक, आर्थिक और राजनीतिक न्याय", "केवल कानूनी न्याय", "आपराधिक न्याय", "दीवानी न्याय"],
        "answer_en": "Social, economic and political justice",
        "answer_hi": "सामाजिक, आर्थिक और राजनीतिक न्याय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Who appoints the Chief Minister?",
        "question_hi": "मुख्यमंत्री की नियुक्ति कौन करता है?",
        "options_en": ["Governor", "President", "People", "Legislative Assembly"],
        "options_hi": ["राज्यपाल", "राष्ट्रपति", "जनता", "विधान सभा"],
        "answer_en": "Governor",
        "answer_hi": "राज्यपाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which article deals with the Comptroller and Auditor General?",
        "question_hi": "किस अनुच्छेद में नियंत्रक और महालेखा परीक्षक का प्रावधान है?",
        "options_en": ["Article 148-151", "Article 152-156", "Article 157-161", "Article 162-166"],
        "options_hi": ["अनुच्छेद 148-151", "अनुच्छेद 152-156", "अनुच्छेद 157-161", "अनुच्छेद 162-166"],
        "answer_en": "Article 148-151",
        "answer_hi": "अनुच्छेद 148-151",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the minimum age for becoming a Governor?",
        "question_hi": "राज्यपाल बनने की न्यूनतम आयु क्या है?",
        "options_en": ["35 years", "30 years", "40 years", "25 years"],
        "options_hi": ["35 वर्ष", "30 वर्ष", "40 वर्ष", "25 वर्ष"],
        "answer_en": "35 years",
        "answer_hi": "35 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Who is the head of the district administration?",
        "question_hi": "जिला प्रशासन का प्रमुख कौन होता है?",
        "options_en": ["District Magistrate", "Superintendent of Police", "District Judge", "Mayor"],
        "options_hi": ["जिला मजिस्ट्रेट", "पुलिस अधीक्षक", "जिला न्यायाधीश", "महापौर"],
        "answer_en": "District Magistrate",
        "answer_hi": "जिला मजिस्ट्रेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which article deals with the special status of Jammu and Kashmir?",
        "question_hi": "किस अनुच्छेद में जम्मू और कश्मीर के विशेष दर्जे का प्रावधान था?",
        "options_en": ["Article 370", "Article 371", "Article 356", "Article 352"],
        "options_hi": ["अनुच्छेद 370", "अनुच्छेद 371", "अनुच्छेद 356", "अनुच्छेद 352"],
        "answer_en": "Article 370",
        "answer_hi": "अनुच्छेद 370",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the term of a member of Legislative Council?",
        "question_hi": "विधान परिषद सदस्य का कार्यकाल कितना होता है?",
        "options_en": ["6 years", "5 years", "4 years", "3 years"],
        "options_hi": ["6 वर्ष", "5 वर्ष", "4 वर्ष", "3 वर्ष"],
        "answer_en": "6 years",
        "answer_hi": "6 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Who can remove the Vice President?",
        "question_hi": "उपराष्ट्रपति को हटाने की शक्ति किसे है?",
        "options_en": ["Rajya Sabha", "Lok Sabha", "President", "Supreme Court"],
        "options_hi": ["राज्यसभा", "लोकसभा", "राष्ट्रपति", "सर्वोच्च न्यायालय"],
        "answer_en": "Rajya Sabha",
        "answer_hi": "राज्यसभा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which article deals with the right to freedom of speech?",
        "question_hi": "किस अनुच्छेद में भाषण की स्वतंत्रता का अधिकार है?",
        "options_en": ["Article 19(1)(a)", "Article 19(1)(b)", "Article 19(1)(c)", "Article 19(1)(d)"],
        "options_hi": ["अनुच्छेद 19(1)(क)", "अनुच्छेद 19(1)(ख)", "अनुच्छेद 19(1)(ग)", "अनुच्छेद 19(1)(घ)"],
        "answer_en": "Article 19(1)(a)",
        "answer_hi": "अनुच्छेद 19(1)(क)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the meaning of 'Liberty' in the Preamble?",
        "question_hi": "उद्देशिका में 'स्वतंत्रता' का क्या अर्थ है?",
        "options_en": ["Freedom of thought, expression, belief, faith", "Economic freedom", "Political freedom", "Social freedom"],
        "options_hi": ["विचार, अभिव्यक्ति, विश्वास, धर्म की स्वतंत्रता", "आर्थिक स्वतंत्रता", "राजनीतिक स्वतंत्रता", "सामाजिक स्वतंत्रता"],
        "answer_en": "Freedom of thought, expression, belief, faith",
        "answer_hi": "विचार, अभिव्यक्ति, विश्वास, धर्म की स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Who appoints the Advocate General of a state?",
        "question_hi": "राज्य के महाधिवक्ता की नियुक्ति कौन करता है?",
        "options_en": ["Governor", "Chief Minister", "President", "High Court"],
        "options_hi": ["राज्यपाल", "मुख्यमंत्री", "राष्ट्रपति", "उच्च न्यायालय"],
        "answer_en": "Governor",
        "answer_hi": "राज्यपाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which article deals with the protection of monuments?",
        "question_hi": "किस अनुच्छेद में स्मारकों के संरक्षण का प्रावधान है?",
        "options_en": ["Article 49", "Article 48", "Article 50", "Article 51"],
        "options_hi": ["अनुच्छेद 49", "अनुच्छेद 48", "अनुच्छेद 50", "अनुच्छेद 51"],
        "answer_en": "Article 49",
        "answer_hi": "अनुच्छेद 49",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the term of the Comptroller and Auditor General?",
        "question_hi": "नियंत्रक और महालेखा परीक्षक का कार्यकाल कितना होता है?",
        "options_en": ["6 years or 65 years age", "5 years or 60 years age", "4 years or 62 years age", "3 years or 58 years age"],
        "options_hi": ["6 वर्ष या 65 वर्ष की आयु", "5 वर्ष या 60 वर्ष की आयु", "4 वर्ष या 62 वर्ष की आयु", "3 वर्ष या 58 वर्ष की आयु"],
        "answer_en": "6 years or 65 years age",
        "answer_hi": "6 वर्ष या 65 वर्ष की आयु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the term of the Comptroller and Auditor General?",
        "question_hi": "नियंत्रक और महालेखा परीक्षक का कार्यकाल कितना होता है?",
        "options_en": ["6 years or 65 years age", "5 years or 60 years age", "4 years or 62 years age", "3 years or 58 years age"],
        "options_hi": ["6 वर्ष या 65 वर्ष की आयु", "5 वर्ष या 60 वर्ष की आयु", "4 वर्ष या 62 वर्ष की आयु", "3 वर्ष या 58 वर्ष की आयु"],
        "answer_en": "6 years or 65 years age",
        "answer_hi": "6 वर्ष या 65 वर्ष की आयु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Who is the head of the Gram Panchayat?",
        "question_hi": "ग्राम पंचायत का प्रमुख कौन होता है?",
        "options_en": ["Sarpanch", "Pradhan", "Mukhiya", "All of these"],
        "options_hi": ["सरपंच", "प्रधान", "मुखिया", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which article deals with the prohibition of discrimination?",
        "question_hi": "किस अनुच्छेद में भेदभाव का निषेध है?",
        "options_en": ["Article 15", "Article 14", "Article 16", "Article 17"],
        "options_hi": ["अनुच्छेद 15", "अनुच्छेद 14", "अनुच्छेद 16", "अनुच्छेद 17"],
        "answer_en": "Article 15",
        "answer_hi": "अनुच्छेद 15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the meaning of 'Equality' in the Preamble?",
        "question_hi": "उद्देशिका में 'समता' का क्या अर्थ है?",
        "options_en": ["Equal opportunity and status", "Same income", "Same religion", "Same language"],
        "options_hi": ["समान अवसर और स्थिति", "समान आय", "समान धर्म", "समान भाषा"],
        "answer_en": "Equal opportunity and status",
        "answer_hi": "समान अवसर और स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Who appoints the State Election Commissioner?",
        "question_hi": "राज्य चुनाव आयुक्त की नियुक्ति कौन करता है?",
        "options_en": ["Governor", "Chief Minister", "President", "Election Commission"],
        "options_hi": ["राज्यपाल", "मुख्यमंत्री", "राष्ट्रपति", "चुनाव आयोग"],
        "answer_en": "Governor",
        "answer_hi": "राज्यपाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which article deals with the Uniform Civil Code?",
        "question_hi": "किस अनुच्छेद में समान नागरिक संहिता का प्रावधान है?",
        "options_en": ["Article 44", "Article 45", "Article 46", "Article 47"],
        "options_hi": ["अनुच्छेद 44", "अनुच्छेद 45", "अनुच्छेद 46", "अनुच्छेद 47"],
        "answer_en": "Article 44",
        "answer_hi": "अनुच्छेद 44",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the term of a Municipal Council?",
        "question_hi": "नगर परिषद का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "3 years", "4 years", "2 years"],
        "options_hi": ["5 वर्ष", "3 वर्ष", "4 वर्ष", "2 वर्ष"],
        "answer_en": "5 years",
        "answer_hi": "5 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Who is the head of the Block Panchayat?",
        "question_hi": "ब्लॉक पंचायत का प्रमुख कौन होता है?",
        "options_en": ["Block Pramukh", "Block Development Officer", "Sarpanch", "Mayor"],
        "options_hi": ["ब्लॉक प्रमुख", "ब्लॉक विकास अधिकारी", "सरपंच", "महापौर"],
        "answer_en": "Block Pramukh",
        "answer_hi": "ब्लॉक प्रमुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which article deals with the right to form associations?",
        "question_hi": "किस अनुच्छेद में संगठन बनाने का अधिकार है?",
        "options_en": ["Article 19(1)(c)", "Article 19(1)(a)", "Article 19(1)(b)", "Article 19(1)(d)"],
        "options_hi": ["अनुच्छेद 19(1)(ग)", "अनुच्छेद 19(1)(क)", "अनुच्छेद 19(1)(ख)", "अनुच्छेद 19(1)(घ)"],
        "answer_en": "Article 19(1)(c)",
        "answer_hi": "अनुच्छेद 19(1)(ग)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the meaning of 'Fraternity' in the Preamble?",
        "question_hi": "उद्देशिका में 'बंधुत्व' का क्या अर्थ है?",
        "options_en": ["Spirit of brotherhood", "Economic unity", "Political unity", "Social unity"],
        "options_hi": ["भाईचारे की भावना", "आर्थिक एकता", "राजनीतिक एकता", "सामाजिक एकता"],
        "answer_en": "Spirit of brotherhood",
        "answer_hi": "भाईचारे की भावना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Who appoints the Chief Justice of High Court?",
        "question_hi": "उच्च न्यायालय के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
        "options_en": ["President", "Governor", "Chief Justice of India", "Prime Minister"],
        "options_hi": ["राष्ट्रपति", "राज्यपाल", "भारत के मुख्य न्यायाधीश", "प्रधानमंत्री"],
        "answer_en": "President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which article deals with the separation of judiciary from executive?",
        "question_hi": "किस अनुच्छेद में कार्यपालिका से न्यायपालिका के पृथक्करण का प्रावधान है?",
        "options_en": ["Article 50", "Article 51", "Article 52", "Article 53"],
        "options_hi": ["अनुच्छेद 50", "अनुच्छेद 51", "अनुच्छेद 52", "अनुच्छेद 53"],
        "answer_en": "Article 50",
        "answer_hi": "अनुच्छेद 50",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the term of a Zila Parishad?",
        "question_hi": "जिला परिषद का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "3 years", "4 years", "2 years"],
        "options_hi": ["5 वर्ष", "3 वर्ष", "4 वर्ष", "2 वर्ष"],
        "answer_en": "5 years",
        "answer_hi": "5 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Who is the head of the Zila Parishad?",
        "question_hi": "जिला परिषद का प्रमुख कौन होता है?",
        "options_en": ["Zila Pramukh", "District Magistrate", "Mayor", "Sarpanch"],
        "options_hi": ["जिला प्रमुख", "जिला मजिस्ट्रेट", "महापौर", "सरपंच"],
        "answer_en": "Zila Pramukh",
        "answer_hi": "जिला प्रमुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which article deals with the right to move freely throughout India?",
        "question_hi": "किस अनुच्छेद में पूरे भारत में स्वतंत्र रूप से घूमने का अधिकार है?",
        "options_en": ["Article 19(1)(d)", "Article 19(1)(a)", "Article 19(1)(b)", "Article 19(1)(c)"],
        "options_hi": ["अनुच्छेद 19(1)(घ)", "अनुच्छेद 19(1)(क)", "अनुच्छेद 19(1)(ख)", "अनुच्छेद 19(1)(ग)"],
        "answer_en": "Article 19(1)(d)",
        "answer_hi": "अनुच्छेद 19(1)(घ)",
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