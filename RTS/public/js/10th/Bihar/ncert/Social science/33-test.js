const questions = [
    {
        "num": 1,
        "question_en": "What are two rights of everyone living in the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका में रहने वाले सभी के दो अधिकार क्या हैं?",
        "options_en": ["Freedom of speech and religion", "Vote and run for office", "Serve in military and jury", "Pay taxes and work"],
        "options_hi": ["भाषण और धर्म की स्वतंत्रता", "मतदान और पद के लिए चुनाव", "सेना और जूरी में सेवा", "कर भुगतान और काम"],
        "answer_en": "Freedom of speech and religion",
        "answer_hi": "भाषण और धर्म की स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the Constitution do?",
        "question_hi": "संविधान क्या करता है?",
        "options_en": ["Sets up the government", "Declares independence", "Lists state capitals", "Establishes military"],
        "options_hi": ["सरकार स्थापित करता है", "स्वतंत्रता की घोषणा करता है", "राज्य राजधानियों की सूची बनाता है", "सैन्य स्थापित करता है"],
        "answer_en": "Sets up the government",
        "answer_hi": "सरकार स्थापित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The idea of self-government is in the first three words of the Constitution. What are these words?",
        "question_hi": "स्व-शासन का विचार संविधान के पहले तीन शब्दों में है। ये शब्द क्या हैं?",
        "options_en": ["We the People", "United States of", "In order to", "Constitution for the"],
        "options_hi": ["हम लोग", "संयुक्त राज्य अमेरिका के", "क्रम में", "के लिए संविधान"],
        "answer_en": "We the People",
        "answer_hi": "हम लोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is an amendment?",
        "question_hi": "संशोधन क्या है?",
        "options_en": ["A change to the Constitution", "An addition to a law", "A court decision", "A presidential order"],
        "options_hi": ["संविधान में परिवर्तन", "कानून में जोड़", "अदालत का फैसला", "राष्ट्रपति का आदेश"],
        "answer_en": "A change to the Constitution",
        "answer_hi": "संविधान में परिवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What do we call the first ten amendments to the Constitution?",
        "question_hi": "हम संविधान के पहले दस संशोधनों को क्या कहते हैं?",
        "options_en": ["The Bill of Rights", "The Preamble", "The Articles", "The Declaration"],
        "options_hi": ["अधिकारों का विधेयक", "प्रस्तावना", "अनुच्छेद", "घोषणा"],
        "answer_en": "The Bill of Rights",
        "answer_hi": "अधिकारों का विधेयक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is one right or freedom from the First Amendment?",
        "question_hi": "पहले संशोधन से एक अधिकार या स्वतंत्रता क्या है?",
        "options_en": ["Speech", "To bear arms", "Privacy", "Property"],
        "options_hi": ["भाषण", "शस्त्र धारण करने का", "गोपनीयता", "संपत्ति"],
        "answer_en": "Speech",
        "answer_hi": "भाषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How many amendments does the Constitution have?",
        "question_hi": "संविधान में कितने संशोधन हैं?",
        "options_en": ["27", "10", "33", "50"],
        "options_hi": ["27", "10", "33", "50"],
        "answer_en": "27",
        "answer_hi": "27",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What did the Declaration of Independence do?",
        "question_hi": "स्वतंत्रता की घोषणा ने क्या किया?",
        "options_en": ["Declared independence from Britain", "Established the Constitution", "Created the Bill of Rights", "Formed the United Nations"],
        "options_hi": ["ब्रिटेन से स्वतंत्रता की घोषणा की", "संविधान स्थापित किया", "अधिकार विधेयक बनाया", "संयुक्त राष्ट्र बनाया"],
        "answer_en": "Declared independence from Britain",
        "answer_hi": "ब्रिटेन से स्वतंत्रता की घोषणा की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What are two rights in the Declaration of Independence?",
        "question_hi": "स्वतंत्रता की घोषणा में दो अधिकार क्या हैं?",
        "options_en": ["Life and Liberty", "Speech and Religion", "Vote and Property", "Work and Education"],
        "options_hi": ["जीवन और स्वतंत्रता", "भाषण और धर्म", "मतदान और संपत्ति", "काम और शिक्षा"],
        "answer_en": "Life and Liberty",
        "answer_hi": "जीवन और स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is freedom of religion?",
        "question_hi": "धर्म की स्वतंत्रता क्या है?",
        "options_en": ["You can practice any religion", "Government has official religion", "No religion allowed", "Only major religions permitted"],
        "options_hi": ["आप कोई भी धर्म मान सकते हैं", "सरकार का आधिकारिक धर्म है", "कोई धर्म अनुमति नहीं", "केवल प्रमुख धर्मों की अनुमति"],
        "answer_en": "You can practice any religion",
        "answer_hi": "आप कोई भी धर्म मान सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the economic system in the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका में आर्थिक प्रणाली क्या है?",
        "options_en": ["Capitalist economy", "Socialist economy", "Communist economy", "Mixed economy"],
        "options_hi": ["पूंजीवादी अर्थव्यवस्था", "समाजवादी अर्थव्यवस्था", "साम्यवादी अर्थव्यवस्था", "मिश्रित अर्थव्यवस्था"],
        "answer_en": "Capitalist economy",
        "answer_hi": "पूंजीवादी अर्थव्यवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the 'rule of law'?",
        "question_hi": "'कानून का शासन' क्या है?",
        "options_en": ["Everyone must follow the law", "Only police follow law", "Laws don't apply to leaders", "Military makes laws"],
        "options_hi": ["सभी को कानून का पालन करना चाहिए", "केवल पुलिस कानून का पालन करती है", "कानून नेताों पर लागू नहीं होते", "सेना कानून बनाती है"],
        "answer_en": "Everyone must follow the law",
        "answer_hi": "सभी को कानून का पालन करना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Name one branch or part of the government.",
        "question_hi": "सरकार की एक शाखा या भाग का नाम बताएं।",
        "options_en": ["Congress", "Military", "Schools", "Post Office"],
        "options_hi": ["कांग्रेस", "सेना", "स्कूल", "डाकघर"],
        "answer_en": "Congress",
        "answer_hi": "कांग्रेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What stops one branch of government from becoming too powerful?",
        "question_hi": "सरकार की एक शाखा को बहुत शक्तिशाली बनने से क्या रोकता है?",
        "options_en": ["Checks and balances", "The President", "The Supreme Court", "State governments"],
        "options_hi": ["नियंत्रण और संतुलन", "राष्ट्रपति", "सर्वोच्च न्यायालय", "राज्य सरकारें"],
        "answer_en": "Checks and balances",
        "answer_hi": "नियंत्रण और संतुलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who is in charge of the executive branch?",
        "question_hi": "कार्यकारी शाखा का प्रभारी कौन है?",
        "options_en": ["The President", "Congress", "Supreme Court", "Governors"],
        "options_hi": ["राष्ट्रपति", "कांग्रेस", "सर्वोच्च न्यायालय", "राज्यपाल"],
        "answer_en": "The President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Who makes federal laws?",
        "question_hi": "संघीय कानून कौन बनाता है?",
        "options_en": ["Congress", "President", "Supreme Court", "States"],
        "options_hi": ["कांग्रेस", "राष्ट्रपति", "सर्वोच्च न्यायालय", "राज्य"],
        "answer_en": "Congress",
        "answer_hi": "कांग्रेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What are the two parts of the U.S. Congress?",
        "question_hi": "अमेरिकी कांग्रेस के दो भाग क्या हैं?",
        "options_en": ["Senate and House", "Democrats and Republicans", "Federal and State", "Executive and Judicial"],
        "options_hi": ["सीनेट और हाउस", "डेमोक्रेट और रिपब्लिकन", "संघीय और राज्य", "कार्यकारी और न्यायिक"],
        "answer_en": "Senate and House",
        "answer_hi": "सीनेट और हाउस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How many U.S. Senators are there?",
        "question_hi": "कितने अमेरिकी सीनेटर हैं?",
        "options_en": ["100", "50", "435", "538"],
        "options_hi": ["100", "50", "435", "538"],
        "answer_en": "100",
        "answer_hi": "100",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "We elect a U.S. Senator for how many years?",
        "question_hi": "हम एक अमेरिकी सीनेटर को कितने वर्षों के लिए चुनते हैं?",
        "options_en": ["6 years", "2 years", "4 years", "8 years"],
        "options_hi": ["6 वर्ष", "2 वर्ष", "4 वर्ष", "8 वर्ष"],
        "answer_en": "6 years",
        "answer_hi": "6 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Who is one of your state's U.S. Senators now?",
        "question_hi": "आपके राज्य के वर्तमान अमेरिकी सीनेटरों में से एक कौन है?",
        "options_en": ["Answers vary by state", "The President", "The Governor", "Congressman"],
        "options_hi": ["उत्तर राज्य के अनुसार भिन्न होते हैं", "राष्ट्रपति", "राज्यपाल", "कांग्रेसमैन"],
        "answer_en": "Answers vary by state",
        "answer_hi": "उत्तर राज्य के अनुसार भिन्न होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The House of Representatives has how many voting members?",
        "question_hi": "प्रतिनिधि सभा में कितने मतदान सदस्य हैं?",
        "options_en": ["435", "100", "50", "538"],
        "options_hi": ["435", "100", "50", "538"],
        "answer_en": "435",
        "answer_hi": "435",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "We elect a U.S. Representative for how many years?",
        "question_hi": "हम एक अमेरिकी प्रतिनिधि को कितने वर्षों के लिए चुनते हैं?",
        "options_en": ["2 years", "4 years", "6 years", "8 years"],
        "options_hi": ["2 वर्ष", "4 वर्ष", "6 वर्ष", "8 वर्ष"],
        "answer_en": "2 years",
        "answer_hi": "2 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Name your U.S. Representative.",
        "question_hi": "अपने अमेरिकी प्रतिनिधि का नाम बताएं।",
        "options_en": ["Answers vary by district", "The President", "Senator", "Governor"],
        "options_hi": ["उत्तर जिले के अनुसार भिन्न होते हैं", "राष्ट्रपति", "सीनेटर", "राज्यपाल"],
        "answer_en": "Answers vary by district",
        "answer_hi": "उत्तर जिले के अनुसार भिन्न होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Who does a U.S. Senator represent?",
        "question_hi": "एक अमेरिकी सीनेटर किसका प्रतिनिधित्व करता है?",
        "options_en": ["All people of the state", "Only their party", "The President", "The wealthy"],
        "options_hi": ["राज्य के सभी लोग", "केवल उनकी पार्टी", "राष्ट्रपति", "धनी लोग"],
        "answer_en": "All people of the state",
        "answer_hi": "राज्य के सभी लोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Why do some states have more Representatives than other states?",
        "question_hi": "कुछ राज्यों में अन्य राज्यों की तुलना में अधिक प्रतिनिधि क्यों हैं?",
        "options_en": ["Because of the state's population", "Because they are older", "Because they are larger", "Because they are richer"],
        "options_hi": ["राज्य की जनसंख्या के कारण", "क्योंकि वे पुराने हैं", "क्योंकि वे बड़े हैं", "क्योंकि वे अमीर हैं"],
        "answer_en": "Because of the state's population",
        "answer_hi": "राज्य की जनसंख्या के कारण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "We elect a President for how many years?",
        "question_hi": "हम एक राष्ट्रपति को कितने वर्षों के लिए चुनते हैं?",
        "options_en": ["4 years", "2 years", "6 years", "8 years"],
        "options_hi": ["4 वर्ष", "2 वर्ष", "6 वर्ष", "8 वर्ष"],
        "answer_en": "4 years",
        "answer_hi": "4 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "In what month do we vote for President?",
        "question_hi": "हम किस महीने में राष्ट्रपति के लिए वोट करते हैं?",
        "options_en": ["November", "January", "July", "December"],
        "options_hi": ["नवंबर", "जनवरी", "जुलाई", "दिसंबर"],
        "answer_en": "November",
        "answer_hi": "नवंबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the name of the President of the United States now?",
        "question_hi": "संयुक्त राज्य अमेरिका के वर्तमान राष्ट्रपति का नाम क्या है?",
        "options_en": ["Joe Biden", "Donald Trump", "Barack Obama", "Kamala Harris"],
        "options_hi": ["जो बाइडेन", "डोनाल्ड ट्रम्प", "बराक ओबामा", "कमला हैरिस"],
        "answer_en": "Joe Biden",
        "answer_hi": "जो बाइडेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the name of the Vice President of the United States now?",
        "question_hi": "संयुक्त राज्य अमेरिका के वर्तमान उपराष्ट्रपति का नाम क्या है?",
        "options_en": ["Kamala Harris", "Joe Biden", "Mike Pence", "Nancy Pelosi"],
        "options_hi": ["कमला हैरिस", "जो बाइडेन", "माइक पेंस", "नैन्सी पेलोसी"],
        "answer_en": "Kamala Harris",
        "answer_hi": "कमला हैरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "If the President can no longer serve, who becomes President?",
        "question_hi": "यदि राष्ट्रपति अब सेवा नहीं कर सकते, तो कौन राष्ट्रपति बनता है?",
        "options_en": ["The Vice President", "The Speaker", "Secretary of State", "Chief Justice"],
        "options_hi": ["उपराष्ट्रपति", "स्पीकर", "राज्य सचिव", "मुख्य न्यायाधीश"],
        "answer_en": "The Vice President",
        "answer_hi": "उपराष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "If both the President and the Vice President can no longer serve, who becomes President?",
        "question_hi": "यदि राष्ट्रपति और उपराष्ट्रपति दोनों अब सेवा नहीं कर सकते, तो कौन राष्ट्रपति बनता है?",
        "options_en": ["The Speaker of the House", "Secretary of State", "Chief Justice", "Senate Majority Leader"],
        "options_hi": ["स्पीकर ऑफ द हाउस", "राज्य सचिव", "मुख्य न्यायाधीश", "सीनेट बहुमत नेता"],
        "answer_en": "The Speaker of the House",
        "answer_hi": "स्पीकर ऑफ द हाउस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who is the Commander in Chief of the military?",
        "question_hi": "सेना का कमांडर इन चीफ कौन है?",
        "options_en": ["The President", "The Secretary of Defense", "The Vice President", "The General"],
        "options_hi": ["राष्ट्रपति", "रक्षा सचिव", "उपराष्ट्रपति", "जनरल"],
        "answer_en": "The President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Who signs bills to become laws?",
        "question_hi": "बिलों पर हस्ताक्षर करके उन्हें कानून बनाने वाला कौन है?",
        "options_en": ["The President", "Congress", "Supreme Court", "Governors"],
        "options_hi": ["राष्ट्रपति", "कांग्रेस", "सर्वोच्च न्यायालय", "राज्यपाल"],
        "answer_en": "The President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Who vetoes bills?",
        "question_hi": "बिलों पर वीटो कौन करता है?",
        "options_en": ["The President", "Congress", "Supreme Court", "The People"],
        "options_hi": ["राष्ट्रपति", "कांग्रेस", "सर्वोच्च न्यायालय", "लोग"],
        "answer_en": "The President",
        "answer_hi": "राष्ट्रपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does the President's Cabinet do?",
        "question_hi": "राष्ट्रपति की कैबिनेट क्या करती है?",
        "options_en": ["Advises the President", "Makes laws", "Interprets laws", "Collects taxes"],
        "options_hi": ["राष्ट्रपति को सलाह देती है", "कानून बनाती है", "कानूनों की व्याख्या करती है", "कर एकत्र करती है"],
        "answer_en": "Advises the President",
        "answer_hi": "राष्ट्रपति को सलाह देती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What are two Cabinet-level positions?",
        "question_hi": "दो कैबिनेट-स्तरीय पद क्या हैं?",
        "options_en": ["Secretary of State and Defense", "Senator and Representative", "Governor and Mayor", "Judge and Lawyer"],
        "options_hi": ["राज्य सचिव और रक्षा सचिव", "सीनेटर और प्रतिनिधि", "राज्यपाल और महापौर", "न्यायाधीश और वकील"],
        "answer_en": "Secretary of State and Defense",
        "answer_hi": "राज्य सचिव और रक्षा सचिव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What does the judicial branch do?",
        "question_hi": "न्यायिक शाखा क्या करती है?",
        "options_en": ["Reviews laws", "Makes laws", "Enforces laws", "Proposes laws"],
        "options_hi": ["कानूनों की समीक्षा करती है", "कानून बनाती है", "कानून लागू करती है", "कानून प्रस्तावित करती है"],
        "answer_en": "Reviews laws",
        "answer_hi": "कानूनों की समीक्षा करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the highest court in the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका में सर्वोच्च न्यायालय कौन सा है?",
        "options_en": ["The Supreme Court", "Federal Court", "State Court", "Appeals Court"],
        "options_hi": ["सर्वोच्च न्यायालय", "संघीय न्यायालय", "राज्य न्यायालय", "अपील न्यायालय"],
        "answer_en": "The Supreme Court",
        "answer_hi": "सर्वोच्च न्यायालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How many justices are on the Supreme Court?",
        "question_hi": "सर्वोच्च न्यायालय पर कितने न्यायाधीश हैं?",
        "options_en": ["9", "5", "7", "11"],
        "options_hi": ["9", "5", "7", "11"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Who is the Chief Justice of the United States now?",
        "question_hi": "संयुक्त राज्य अमेरिका के वर्तमान मुख्य न्यायाधीश कौन हैं?",
        "options_en": ["John Roberts", "Ruth Bader Ginsburg", "Clarence Thomas", "Sonia Sotomayor"],
        "options_hi": ["जॉन रॉबर्ट्स", "रुथ बेडर गिन्सबर्ग", "क्लेरेंस थॉमस", "सोनिया सोतोमयोर"],
        "answer_en": "John Roberts",
        "answer_hi": "जॉन रॉबर्ट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
        "question_hi": "हमारे संविधान के तहत, कुछ शक्तियां संघीय सरकार के पास हैं। संघीय सरकार की एक शक्ति क्या है?",
        "options_en": ["To print money", "To issue driver's licenses", "To provide schooling", "To make marriage laws"],
        "options_hi": ["पैसा छापना", "ड्राइवर लाइसेंस जारी करना", "स्कूली शिक्षा प्रदान करना", "विवाह कानून बनाना"],
        "answer_en": "To print money",
        "answer_hi": "पैसा छापना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Under our Constitution, some powers belong to the states. What is one power of the states?",
        "question_hi": "हमारे संविधान के तहत, कुछ शक्तियां राज्यों के पास हैं। राज्यों की एक शक्ति क्या है?",
        "options_en": ["Provide schooling and education", "Declare war", "Print money", "Make treaties"],
        "options_hi": ["स्कूली शिक्षा प्रदान करना", "युद्ध की घोषणा करना", "पैसा छापना", "संधियाँ करना"],
        "answer_en": "Provide schooling and education",
        "answer_hi": "स्कूली शिक्षा प्रदान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Who is the Governor of your state now?",
        "question_hi": "आपके राज्य का वर्तमान राज्यपाल कौन है?",
        "options_en": ["Answers vary by state", "The President", "The Senator", "The Mayor"],
        "options_hi": ["उत्तर राज्य के अनुसार भिन्न होते हैं", "राष्ट्रपति", "सीनेटर", "महापौर"],
        "answer_en": "Answers vary by state",
        "answer_hi": "उत्तर राज्य के अनुसार भिन्न होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the capital of your state?",
        "question_hi": "आपके राज्य की राजधानी क्या है?",
        "options_en": ["Answers vary by state", "Washington D.C.", "New York City", "Los Angeles"],
        "options_hi": ["उत्तर राज्य के अनुसार भिन्न होते हैं", "वाशिंगटन डी.सी.", "न्यूयॉर्क शहर", "लॉस एंजेलिस"],
        "answer_en": "Answers vary by state",
        "answer_hi": "उत्तर राज्य के अनुसार भिन्न होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What are the two major political parties in the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका में दो प्रमुख राजनीतिक दल कौन से हैं?",
        "options_en": ["Democratic and Republican", "Conservative and Liberal", "Federal and State", "Executive and Legislative"],
        "options_hi": ["डेमोक्रेटिक और रिपब्लिकन", "रूढ़िवादी और उदारवादी", "संघीय और राज्य", "कार्यकारी और विधायी"],
        "answer_en": "Democratic and Republican",
        "answer_hi": "डेमोक्रेटिक और रिपब्लिकन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the political party of the President now?",
        "question_hi": "वर्तमान राष्ट्रपति की राजनीतिक पार्टी क्या है?",
        "options_en": ["Democratic Party", "Republican Party", "Independent", "Green Party"],
        "options_hi": ["डेमोक्रेटिक पार्टी", "रिपब्लिकन पार्टी", "स्वतंत्र", "ग्रीन पार्टी"],
        "answer_en": "Democratic Party",
        "answer_hi": "डेमोक्रेटिक पार्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the name of the Speaker of the House of Representatives now?",
        "question_hi": "प्रतिनिधि सभा के वर्तमान अध्यक्ष का नाम क्या है?",
        "options_en": ["Mike Johnson", "Nancy Pelosi", "Kevin McCarthy", "Chuck Schumer"],
        "options_hi": ["माइक जॉनसन", "नैन्सी पेलोसी", "केविन मैकार्थी", "चक शूमर"],
        "answer_en": "Mike Johnson",
        "answer_hi": "माइक जॉनसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "There are four amendments to the Constitution about who can vote. Describe one of them.",
        "question_hi": "संविधान में चार संशोधन हैं जो बताते हैं कि कौन मतदान कर सकता है। उनमें से एक का वर्णन करें।",
        "options_en": ["Citizens 18 and older can vote", "Only men can vote", "Only property owners can vote", "Only educated people can vote"],
        "options_hi": ["18 और उससे अधिक उम्र के नागरिक मतदान कर सकते हैं", "केवल पुरुष मतदान कर सकते हैं", "केवल संपत्ति के मालिक मतदान कर सकते हैं", "केवल शिक्षित लोग मतदान कर सकते हैं"],
        "answer_en": "Citizens 18 and older can vote",
        "answer_hi": "18 और उससे अधिक उम्र के नागरिक मतदान कर सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is one responsibility that is only for United States citizens?",
        "question_hi": "एक जिम्मेदारी क्या है जो केवल संयुक्त राज्य अमेरिका के नागरिकों के लिए है?",
        "options_en": ["Serve on a jury", "Pay taxes", "Obey laws", "Get education"],
        "options_hi": ["जूरी में सेवा करना", "करों का भुगतान", "कानूनों का पालन", "शिक्षा प्राप्त करना"],
        "answer_en": "Serve on a jury",
        "answer_hi": "जूरी में सेवा करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Name one right only for United States citizens.",
        "question_hi": "केवल संयुक्त राज्य अमेरिका के नागरिकों के लिए एक अधिकार का नाम बताएं।",
        "options_en": ["Vote in federal election", "Freedom of speech", "Right to bear arms", "Freedom of religion"],
        "options_hi": ["संघीय चुनाव में मतदान", "भाषण की स्वतंत्रता", "शस्त्र धारण करने का अधिकार", "धर्म की स्वतंत्रता"],
        "answer_en": "Vote in federal election",
        "answer_hi": "संघीय चुनाव में मतदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the supreme law of the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका का सर्वोच्च कानून क्या है?",
        "options_en": ["The Constitution", "Federal Laws", "Supreme Court Decisions", "State Constitutions"],
        "options_hi": ["संविधान", "संघीय कानून", "सुप्रीम कोर्ट के फैसले", "राज्य संविधान"],
        "answer_en": "The Constitution",
        "answer_hi": "संविधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What do we show loyalty to when we say the Pledge of Allegiance?",
        "question_hi": "जब हम प्लेज ऑफ एलिजिअंस कहते हैं तो हम किसके प्रति निष्ठा दिखाते हैं?",
        "options_en": ["The United States", "The President", "The Constitution", "The Military"],
        "options_hi": ["संयुक्त राज्य अमेरिका", "राष्ट्रपति", "संविधान", "सेना"],
        "answer_en": "The United States",
        "answer_hi": "संयुक्त राज्य अमेरिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is one promise you make when you become a United States citizen?",
        "question_hi": "एक वादा क्या है जो आप संयुक्त राज्य अमेरिका का नागरिक बनने पर करते हैं?",
        "options_en": ["Give up loyalty to other countries", "Learn English", "Get a job", "Buy property"],
        "options_hi": ["अन्य देशों के प्रति निष्ठा त्यागें", "अंग्रेजी सीखें", "नौकरी प्राप्त करें", "संपत्ति खरीदें"],
        "answer_en": "Give up loyalty to other countries",
        "answer_hi": "अन्य देशों के प्रति निष्ठा त्यागें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How old do citizens have to be to vote for President?",
        "question_hi": "राष्ट्रपति के लिए मतदान करने के लिए नागरिकों की आयु कितनी होनी चाहिए?",
        "options_en": ["18 and older", "21 and older", "25 and older", "16 and older"],
        "options_hi": ["18 और उससे अधिक", "21 और उससे अधिक", "25 और उससे अधिक", "16 और उससे अधिक"],
        "answer_en": "18 and older",
        "answer_hi": "18 और उससे अधिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What are two ways that Americans can participate in their democracy?",
        "question_hi": "दो तरीके क्या हैं जिनसे अमेरिकी अपने लोकतंत्र में भाग ले सकते हैं?",
        "options_en": ["Vote and join political party", "Work and pay taxes", "Serve in military and jury", "Travel and study"],
        "options_hi": ["मतदान और राजनीतिक दल में शामिल होना", "काम करना और कर भुगतान", "सेना और जूरी में सेवा", "यात्रा और अध्ययन"],
        "answer_en": "Vote and join political party",
        "answer_hi": "मतदान और राजनीतिक दल में शामिल होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "When is the last day you can send in federal income tax forms?",
        "question_hi": "संघीय आयकर फॉर्म भेजने की अंतिम तिथि कब है?",
        "options_en": ["April 15", "December 31", "June 30", "October 1"],
        "options_hi": ["15 अप्रैल", "31 दिसंबर", "30 जून", "1 अक्टूबर"],
        "answer_en": "April 15",
        "answer_hi": "15 अप्रैल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "When must all men register for the Selective Service?",
        "question_hi": "सभी पुरुषों को सेलेक्टिव सर्विस के लिए कब पंजीकरण करना चाहिए?",
        "options_en": ["At age 18", "At age 21", "At age 25", "When they graduate"],
        "options_hi": ["18 वर्ष की आयु में", "21 वर्ष की आयु में", "25 वर्ष की आयु में", "जब वे स्नातक होते हैं"],
        "answer_en": "At age 18",
        "answer_hi": "18 वर्ष की आयु में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is one reason colonists came to America?",
        "question_hi": "उपनिवेशवादी अमेरिका आने का एक कारण क्या था?",
        "options_en": ["Religious freedom", "Better weather", "More land", "To find gold"],
        "options_hi": ["धार्मिक स्वतंत्रता", "बेहतर मौसम", "अधिक भूमि", "सोना खोजने के लिए"],
        "answer_en": "Religious freedom",
        "answer_hi": "धार्मिक स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Who lived in America before the Europeans arrived?",
        "question_hi": "यूरोपीय लोगों के आने से पहले अमेरिका में कौन रहता था?",
        "options_en": ["Native Americans", "British", "Spanish", "French"],
        "options_hi": ["मूल अमेरिकी", "ब्रिटिश", "स्पैनिश", "फ्रेंच"],
        "answer_en": "Native Americans",
        "answer_hi": "मूल अमेरिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What group of people was taken to America and sold as slaves?",
        "question_hi": "लोगों का कौन सा समूह अमेरिका ले जाया गया और गुलाम के रूप में बेचा गया?",
        "options_en": ["Africans", "Europeans", "Asians", "Native Americans"],
        "options_hi": ["अफ्रीकी", "यूरोपीय", "एशियाई", "मूल अमेरिकी"],
        "answer_en": "Africans",
        "answer_hi": "अफ्रीकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Why did the colonists fight the British?",
        "question_hi": "उपनिवेशवादियों ने ब्रिटिश से क्यों लड़ाई की?",
        "options_en": ["Because of high taxes", "Because of religion", "Because of language", "Because of trade"],
        "options_hi": ["उच्च करों के कारण", "धर्म के कारण", "भाषा के कारण", "व्यापार के कारण"],
        "answer_en": "Because of high taxes",
        "answer_hi": "उच्च करों के कारण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Who wrote the Declaration of Independence?",
        "question_hi": "स्वतंत्रता की घोषणा किसने लिखी?",
        "options_en": ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
        "options_hi": ["थॉमस जेफरसन", "जॉर्ज वाशिंगटन", "बेंजामिन फ्रैंकलिन", "जॉन एडम्स"],
        "answer_en": "Thomas Jefferson",
        "answer_hi": "थॉमस जेफरसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "When was the Declaration of Independence adopted?",
        "question_hi": "स्वतंत्रता की घोषणा कब अपनाई गई थी?",
        "options_en": ["July 4, 1776", "July 4, 1787", "April 15, 1776", "December 25, 1776"],
        "options_hi": ["4 जुलाई, 1776", "4 जुलाई, 1787", "15 अप्रैल, 1776", "25 दिसंबर, 1776"],
        "answer_en": "July 4, 1776",
        "answer_hi": "4 जुलाई, 1776",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "There were 13 original states. Name three.",
        "question_hi": "13 मूल राज्य थे। तीन के नाम बताएं।",
        "options_en": ["New York, New Jersey, Pennsylvania", "California, Texas, Florida", "Alaska, Hawaii, Washington", "Michigan, Illinois, Ohio"],
        "options_hi": ["न्यूयॉर्क, न्यू जर्सी, पेंसिल्वेनिया", "कैलिफोर्निया, टेक्सास, फ्लोरिडा", "अलास्का, हवाई, वाशिंगटन", "मिशिगन, इलिनोइस, ओहायो"],
        "answer_en": "New York, New Jersey, Pennsylvania",
        "answer_hi": "न्यूयॉर्क, न्यू जर्सी, पेंसिल्वेनिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What happened at the Constitutional Convention?",
        "question_hi": "संवैधानिक सम्मेलन में क्या हुआ?",
        "options_en": ["The Constitution was written", "Declaration was signed", "Civil War ended", "President was elected"],
        "options_hi": ["संविधान लिखा गया था", "घोषणा पर हस्ताक्षर किए गए", "गृहयुद्ध समाप्त हुआ", "राष्ट्रपति चुने गए"],
        "answer_en": "The Constitution was written",
        "answer_hi": "संविधान लिखा गया था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "When was the Constitution written?",
        "question_hi": "संविधान कब लिखा गया था?",
        "options_en": ["1787", "1776", "1791", "1800"],
        "options_hi": ["1787", "1776", "1791", "1800"],
        "answer_en": "1787",
        "answer_hi": "1787",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
        "question_hi": "फेडरलिस्ट पेपर्स ने अमेरिकी संविधान के पारित होने का समर्थन किया। लेखकों में से एक का नाम बताएं।",
        "options_en": ["James Madison", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
        "options_hi": ["जेम्स मैडिसन", "थॉमस जेफरसन", "जॉर्ज वाशिंगटन", "बेंजामिन फ्रैंकलिन"],
        "answer_en": "James Madison",
        "answer_hi": "जेम्स मैडिसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is one thing Benjamin Franklin is famous for?",
        "question_hi": "एक चीज क्या है जिसके लिए बेंजामिन फ्रैंकलिन प्रसिद्ध हैं?",
        "options_en": ["U.S. diplomat", "First President", "Wrote Constitution", "Led Revolution"],
        "options_hi": ["अमेरिकी राजनयिक", "पहले राष्ट्रपति", "संविधान लिखा", "क्रांति का नेतृत्व किया"],
        "answer_en": "U.S. diplomat",
        "answer_hi": "अमेरिकी राजनयिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Who is the 'Father of Our Country'?",
        "question_hi": "'हमारे देश के पिता' कौन हैं?",
        "options_en": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"],
        "options_hi": ["जॉर्ज वाशिंगटन", "थॉमस जेफरसन", "अब्राहम लिंकन", "बेंजामिन फ्रैंकलिन"],
        "answer_en": "George Washington",
        "answer_hi": "जॉर्ज वाशिंगटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Who was the first President?",
        "question_hi": "पहले राष्ट्रपति कौन थे?",
        "options_en": ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
        "options_hi": ["जॉर्ज वाशिंगटन", "जॉन एडम्स", "थॉमस जेफरसन", "जेम्स मैडिसन"],
        "answer_en": "George Washington",
        "answer_hi": "जॉर्ज वाशिंगटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What territory did the United States buy from France in 1803?",
        "question_hi": "1803 में संयुक्त राज्य अमेरिका ने फ्रांस से क्या क्षेत्र खरीदा?",
        "options_en": ["Louisiana Territory", "Florida", "Alaska", "Texas"],
        "options_hi": ["लुइसियाना क्षेत्र", "फ्लोरिडा", "अलास्का", "टेक्सास"],
        "answer_en": "Louisiana Territory",
        "answer_hi": "लुइसियाना क्षेत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Name one war fought by the United States in the 1800s.",
        "question_hi": "1800 के दशक में संयुक्त राज्य अमेरिका द्वारा लड़े गए एक युद्ध का नाम बताएं।",
        "options_en": ["Civil War", "World War I", "World War II", "Vietnam War"],
        "options_hi": ["गृहयुद्ध", "प्रथम विश्व युद्ध", "द्वितीय विश्व युद्ध", "वियतनाम युद्ध"],
        "answer_en": "Civil War",
        "answer_hi": "गृहयुद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Name the U.S. war between the North and the South.",
        "question_hi": "उत्तर और दक्षिण के बीच अमेरिकी युद्ध का नाम बताएं।",
        "options_en": ["The Civil War", "Revolutionary War", "World War I", "Mexican-American War"],
        "options_hi": ["गृहयुद्ध", "क्रांतिकारी युद्ध", "प्रथम विश्व युद्ध", "मैक्सिकन-अमेरिकी युद्ध"],
        "answer_en": "The Civil War",
        "answer_hi": "गृहयुद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Name one problem that led to the Civil War.",
        "question_hi": "एक समस्या का नाम बताएं जिसके कारण गृहयुद्ध हुआ।",
        "options_en": ["Slavery", "Taxation", "Religion", "Trade"],
        "options_hi": ["दासता", "कराधान", "धर्म", "व्यापार"],
        "answer_en": "Slavery",
        "answer_hi": "दासता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What was one important thing that Abraham Lincoln did?",
        "question_hi": "एक महत्वपूर्ण बात क्या थी जो अब्राहम लिंकन ने की?",
        "options_en": ["Freed the slaves", "Wrote Constitution", "Bought Louisiana", "Founded colleges"],
        "options_hi": ["गुलामों को मुक्त किया", "संविधान लिखा", "लुइसियाना खरीदा", "कॉलेज स्थापित किए"],
        "answer_en": "Freed the slaves",
        "answer_hi": "गुलामों को मुक्त किया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What did the Emancipation Proclamation do?",
        "question_hi": "मुक्ति उद्घोषणा ने क्या किया?",
        "options_en": ["Freed slaves in Confederacy", "Ended Civil War", "Gave women right to vote", "Established income tax"],
        "options_hi": ["संघ में गुलामों को मुक्त किया", "गृहयुद्ध समाप्त किया", "महिलाओं को मतदान का अधिकार दिया", "आयकर स्थापित किया"],
        "answer_en": "Freed slaves in Confederacy",
        "answer_hi": "संघ में गुलामों को मुक्त किया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What did Susan B. Anthony do?",
        "question_hi": "सुसान बी. एंथोनी ने क्या किया?",
        "options_en": ["Fought for women's rights", "Fought for civil rights", "Led labor movement", "Was first woman Senator"],
        "options_hi": ["महिलाओं के अधिकारों के लिए लड़ी", "नागरिक अधिकारों के लिए लड़ी", "श्रम आंदोलन का नेतृत्व किया", "पहली महिला सीनेटर थीं"],
        "answer_en": "Fought for women's rights",
        "answer_hi": "महिलाओं के अधिकारों के लिए लड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Name one war fought by the United States in the 1900s.",
        "question_hi": "1900 के दशक में संयुक्त राज्य अमेरिका द्वारा लड़े गए एक युद्ध का नाम बताएं।",
        "options_en": ["World War II", "Civil War", "Revolutionary War", "War of 1812"],
        "options_hi": ["द्वितीय विश्व युद्ध", "गृहयुद्ध", "क्रांतिकारी युद्ध", "1812 का युद्ध"],
        "answer_en": "World War II",
        "answer_hi": "द्वितीय विश्व युद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Who was President during World War I?",
        "question_hi": "प्रथम विश्व युद्ध के दौरान राष्ट्रपति कौन थे?",
        "options_en": ["Woodrow Wilson", "Franklin Roosevelt", "Harry Truman", "Theodore Roosevelt"],
        "options_hi": ["वुडरो विल्सन", "फ्रैंकलिन रूजवेल्ट", "हैरी ट्रूमैन", "थियोडोर रूजवेल्ट"],
        "answer_en": "Woodrow Wilson",
        "answer_hi": "वुडरो विल्सन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Who was President during the Great Depression and World War II?",
        "question_hi": "महामंदी और द्वितीय विश्व युद्ध के दौरान राष्ट्रपति कौन थे?",
        "options_en": ["Franklin Roosevelt", "Woodrow Wilson", "Harry Truman", "Herbert Hoover"],
        "options_hi": ["फ्रैंकलिन रूजवेल्ट", "वुडरो विल्सन", "हैरी ट्रूमैन", "हर्बर्ट हूवर"],
        "answer_en": "Franklin Roosevelt",
        "answer_hi": "फ्रैंकलिन रूजवेल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Who did the United States fight in World War II?",
        "question_hi": "संयुक्त राज्य अमेरिका ने द्वितीय विश्व युद्ध में किससे लड़ाई की?",
        "options_en": ["Japan, Germany, and Italy", "Russia, China, and Korea", "France, Britain, and Spain", "Mexico, Canada, and Cuba"],
        "options_hi": ["जापान, जर्मनी और इटली", "रूस, चीन और कोरिया", "फ्रांस, ब्रिटेन और स्पेन", "मेक्सिको, कनाडा और क्यूबा"],
        "answer_en": "Japan, Germany, and Italy",
        "answer_hi": "जापान, जर्मनी और इटली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Before he was President, Eisenhower was a general. What war was he in?",
        "question_hi": "राष्ट्रपति बनने से पहले, आइजनहावर एक जनरल थे। वह किस युद्ध में थे?",
        "options_en": ["World War II", "World War I", "Vietnam War", "Korean War"],
        "options_hi": ["द्वितीय विश्व युद्ध", "प्रथम विश्व युद्ध", "वियतनाम युद्ध", "कोरियाई युद्ध"],
        "answer_en": "World War II",
        "answer_hi": "द्वितीय विश्व युद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "During the Cold War, what was the main concern of the United States?",
        "question_hi": "शीत युद्ध के दौरान, संयुक्त राज्य अमेरिका की मुख्य चिंता क्या थी?",
        "options_en": ["Communism", "Terrorism", "Economic depression", "Immigration"],
        "options_hi": ["साम्यवाद", "आतंकवाद", "आर्थिक मंदी", "आप्रवासन"],
        "answer_en": "Communism",
        "answer_hi": "साम्यवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What movement tried to end racial discrimination?",
        "question_hi": "किस आंदोलन ने नस्लीय भेदभाव को समाप्त करने की कोशिश की?",
        "options_en": ["Civil rights movement", "Women's suffrage", "Labor movement", "Environmental movement"],
        "options_hi": ["नागरिक अधिकार आंदोलन", "महिला मताधिकार", "श्रम आंदोलन", "पर्यावरण आंदोलन"],
        "answer_en": "Civil rights movement",
        "answer_hi": "नागरिक अधिकार आंदोलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What did Martin Luther King, Jr. do?",
        "question_hi": "मार्टिन लूथर किंग जूनियर ने क्या किया?",
        "options_en": ["Fought for civil rights", "Was first black President", "Wrote Constitution", "Led labor unions"],
        "options_hi": ["नागरिक अधिकारों के लिए लड़े", "पहले काले राष्ट्रपति थे", "संविधान लिखा", "श्रम संघों का नेतृत्व किया"],
        "answer_en": "Fought for civil rights",
        "answer_hi": "नागरिक अधिकारों के लिए लड़े",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What major event happened on September 11, 2001, in the United States?",
        "question_hi": "11 सितंबर, 2001 को संयुक्त राज्य अमेरिका में क्या प्रमुख घटना हुई?",
        "options_en": ["Terrorists attacked the U.S.", "Stock market crashed", "President was assassinated", "Major earthquake occurred"],
        "options_hi": ["आतंकवादियों ने अमेरिका पर हमला किया", "शेयर बाजार गिर गया", "राष्ट्रपति की हत्या कर दी गई", "बड़ा भूकंप आया"],
        "answer_en": "Terrorists attacked the U.S.",
        "answer_hi": "आतंकवादियों ने अमेरिका पर हमला किया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Name one American Indian tribe in the United States.",
        "question_hi": "संयुक्त राज्य अमेरिका में एक अमेरिकी भारतीय जनजाति का नाम बताएं।",
        "options_en": ["Cherokee", "Aztec", "Inca", "Maya"],
        "options_hi": ["चेरोकी", "एज़्टेक", "इंका", "माया"],
        "answer_en": "Cherokee",
        "answer_hi": "चेरोकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Name one of the two longest rivers in the United States.",
        "question_hi": "संयुक्त राज्य अमेरिका की दो सबसे लंबी नदियों में से एक का नाम बताएं।",
        "options_en": ["Mississippi River", "Amazon River", "Nile River", "Yangtze River"],
        "options_hi": ["मिसिसिपी नदी", "अमेज़न नदी", "नील नदी", "यांग्त्ज़ी नदी"],
        "answer_en": "Mississippi River",
        "answer_hi": "मिसिसिपी नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What ocean is on the West Coast of the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका के पश्चिमी तट पर कौन सा महासागर है?",
        "options_en": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What ocean is on the East Coast of the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका के पूर्वी तट पर कौन सा महासागर है?",
        "options_en": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        "options_hi": ["अटलांटिक महासागर", "प्रशांत महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
        "answer_en": "Atlantic Ocean",
        "answer_hi": "अटलांटिक महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Name one U.S. territory.",
        "question_hi": "एक अमेरिकी क्षेत्र का नाम बताएं।",
        "options_en": ["Puerto Rico", "Hawaii", "Alaska", "Texas"],
        "options_hi": ["प्यूर्टो रिको", "हवाई", "अलास्का", "टेक्सास"],
        "answer_en": "Puerto Rico",
        "answer_hi": "प्यूर्टो रिको",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Name one state that borders Canada.",
        "question_hi": "एक राज्य का नाम बताएं जो कनाडा की सीमा से लगता है।",
        "options_en": ["New York", "California", "Texas", "Florida"],
        "options_hi": ["न्यूयॉर्क", "कैलिफोर्निया", "टेक्सास", "फ्लोरिडा"],
        "answer_en": "New York",
        "answer_hi": "न्यूयॉर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Name one state that borders Mexico.",
        "question_hi": "एक राज्य का नाम बताएं जो मेक्सिको की सीमा से लगता है।",
        "options_en": ["Texas", "Florida", "New York", "Washington"],
        "options_hi": ["टेक्सास", "फ्लोरिडा", "न्यूयॉर्क", "वाशिंगटन"],
        "answer_en": "Texas",
        "answer_hi": "टेक्सास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the capital of the United States?",
        "question_hi": "संयुक्त राज्य अमेरिका की राजधानी क्या है?",
        "options_en": ["Washington, D.C.", "New York City", "Los Angeles", "Chicago"],
        "options_hi": ["वाशिंगटन, डी.सी.", "न्यूयॉर्क शहर", "लॉस एंजेलिस", "शिकागो"],
        "answer_en": "Washington, D.C.",
        "answer_hi": "वाशिंगटन, डी.सी.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Where is the Statue of Liberty?",
        "question_hi": "स्टैच्यू ऑफ लिबर्टी कहां है?",
        "options_en": ["New York Harbor", "Washington, D.C.", "Los Angeles", "Boston"],
        "options_hi": ["न्यूयॉर्क हार्बर", "वाशिंगटन, डी.सी.", "लॉस एंजेलिस", "बोस्टन"],
        "answer_en": "New York Harbor",
        "answer_hi": "न्यूयॉर्क हार्बर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Why does the flag have 13 stripes?",
        "question_hi": "झंडे में 13 धारियां क्यों हैं?",
        "options_en": ["Because there were 13 original colonies", "Because there are 13 states", "Because there are 13 amendments", "Because there are 13 Presidents"],
        "options_hi": ["क्योंकि 13 मूल उपनिवेश थे", "क्योंकि 13 राज्य हैं", "क्योंकि 13 संशोधन हैं", "क्योंकि 13 राष्ट्रपति हैं"],
        "answer_en": "Because there were 13 original colonies",
        "answer_hi": "क्योंकि 13 मूल उपनिवेश थे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Why does the flag have 50 stars?",
        "question_hi": "झंडे में 50 सितारे क्यों हैं?",
        "options_en": ["Because there are 50 states", "Because there are 50 colonies", "Because there are 50 amendments", "Because there are 50 Presidents"],
        "options_hi": ["क्योंकि 50 राज्य हैं", "क्योंकि 50 उपनिवेश हैं", "क्योंकि 50 संशोधन हैं", "क्योंकि 50 राष्ट्रपति हैं"],
        "answer_en": "Because there are 50 states",
        "answer_hi": "क्योंकि 50 राज्य हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the name of the national anthem?",
        "question_hi": "राष्ट्रीय गान का नाम क्या है?",
        "options_en": ["The Star-Spangled Banner", "America the Beautiful", "God Bless America", "My Country Tis of Thee"],
        "options_hi": ["द स्टार-स्पैंगल्ड बैनर", "अमेरिका द ब्यूटीफुल", "गॉड ब्लेस अमेरिका", "माई कंट्री टिस ऑफ थी"],
        "answer_en": "The Star-Spangled Banner",
        "answer_hi": "द स्टार-स्पैंगल्ड बैनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "When do we celebrate Independence Day?",
        "question_hi": "हम स्वतंत्रता दिवस कब मनाते हैं?",
        "options_en": ["July 4", "December 25", "January 1", "November 11"],
        "options_hi": ["4 जुलाई", "25 दिसंबर", "1 जनवरी", "11 नवंबर"],
        "answer_en": "July 4",
        "answer_hi": "4 जुलाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Name two national U.S. holidays.",
        "question_hi": "दो राष्ट्रीय अमेरिकी अवकाशों के नाम बताएं।",
        "options_en": ["Christmas and Thanksgiving", "Easter and Halloween", "Valentine's and Mother's Day", "Labor and Memorial Day"],
        "options_hi": ["क्रिसमस और थैंक्सगिविंग", "ईस्टर और हेलोवीन", "वैलेंटाइन और मदर्स डे", "लेबर और मेमोरियल डे"],
        "answer_en": "Christmas and Thanksgiving",
        "answer_hi": "क्रिसमस और थैंक्सगिविंग",
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