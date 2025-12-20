const questions = [
  {
    "num": 1,
    "question_en": "What is the study of fungi called?",
    "question_hi": "कवक के अध्ययन को क्या कहा जाता है?",
    "options_en": ["Bacteriology", "Mycology", "Virology", "Phycology"],
    "options_hi": ["बैक्टीरियोलॉजी", "माइकोलॉजी", "वायरोलॉजी", "फाइकोलॉजी"],
    "answer_en": "Mycology",
    "answer_hi": "माइकोलॉजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which vitamin is essential for blood clotting?",
    "question_hi": "रक्त के थक्के जमने के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
    "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन के"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन के",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who is known as the 'Missile Man of India'?",
    "question_hi": "'भारत के मिसाइल मैन' के रूप में किसे जाना जाता है?",
    "options_en": ["Homi Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "C.V. Raman"],
    "options_hi": ["होमी भाभा", "विक्रम साराभाई", "ए.पी.जे. अब्दुल कलाम", "सी.वी. रमन"],
    "answer_en": "A.P.J. Abdul Kalam",
    "answer_hi": "ए.पी.जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which instrument is used to measure humidity?",
    "question_hi": "आर्द्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Barometer", "Hygrometer", "Anemometer", "Thermometer"],
    "options_hi": ["बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर", "थर्मामीटर"],
    "answer_en": "Hygrometer",
    "answer_hi": "हाइग्रोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the chemical symbol of Tin?",
    "question_hi": "टिन (कलई) का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ti", "Tn", "Sn", "Si"],
    "options_hi": ["Ti", "Tn", "Sn", "Si"],
    "answer_en": "Sn",
    "answer_hi": "Sn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which river is known as the 'Sorrow of Bengal'?",
    "question_hi": "किस नदी को 'बंगाल का शोक' कहा जाता है?",
    "options_en": ["Ganga", "Damodar", "Brahmaputra", "Hooghly"],
    "options_hi": ["गंगा", "दामोदर", "ब्रह्मपुत्र", "हुगली"],
    "answer_en": "Damodar",
    "answer_hi": "दामोदर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the SI unit of frequency?",
    "question_hi": "आवृत्ति की SI इकाई क्या है?",
    "options_en": ["Hertz", "Decibel", "Watt", "Ohm"],
    "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "ओम"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Who wrote the novel 'War and Peace'?",
    "question_hi": "'युद्ध और शांति' उपन्यास किसने लिखा?",
    "options_en": ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Victor Hugo"],
    "options_hi": ["फ्योडोर दोस्तोवस्की", "लियो टॉल्स्टॉय", "एंटोन चेखव", "विक्टर ह्यूगो"],
    "answer_en": "Leo Tolstoy",
    "answer_hi": "लियो टॉल्स्टॉय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which planet has the Great Red Spot?",
    "question_hi": "किस ग्रह पर ग्रेट रेड स्पॉट है?",
    "options_en": ["Mars", "Jupiter", "Saturn", "Venus"],
    "options_hi": ["मंगल", "बृहस्पति", "शनि", "शुक्र"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the chemical formula of Baking Soda?",
    "question_hi": "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
    "options_en": ["NaHCO3", "Na2CO3", "NaOH", "CaCO3"],
    "options_hi": ["NaHCO3", "Na2CO3", "NaOH", "CaCO3"],
    "answer_en": "NaHCO3",
    "answer_hi": "NaHCO3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is the largest plateau in the world?",
    "question_hi": "दुनिया का सबसे बड़ा पठार कौन सा है?",
    "options_en": ["Colorado Plateau", "Tibetan Plateau", "Deccan Plateau", "Anatolian Plateau"],
    "options_hi": ["कोलोराडो पठार", "तिब्बती पठार", "दक्कन पठार", "अनातोलियन पठार"],
    "answer_en": "Tibetan Plateau",
    "answer_hi": "तिब्बती पठार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Who discovered the vaccination for smallpox?",
    "question_hi": "चेचक के टीके की खोज किसने की?",
    "options_en": ["Louis Pasteur", "Edward Jenner", "Robert Koch", "Alexander Fleming"],
    "options_hi": ["लुई पाश्चर", "एडवर्ड जेनर", "रॉबर्ट कोच", "अलेक्जेंडर फ्लेमिंग"],
    "answer_en": "Edward Jenner",
    "answer_hi": "एडवर्ड जेनर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the chemical symbol of Mercury?",
    "question_hi": "मरकरी (पारा) का रासायनिक प्रतीक क्या है?",
    "options_en": ["Me", "Mg", "Hg", "Mr"],
    "options_hi": ["Me", "Mg", "Hg", "Mr"],
    "answer_en": "Hg",
    "answer_hi": "Hg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which is the largest delta in the world?",
    "question_hi": "दुनिया का सबसे बड़ा डेल्टा कौन सा है?",
    "options_en": ["Amazon Delta", "Ganges-Brahmaputra Delta", "Mississippi Delta", "Nile Delta"],
    "options_hi": ["अमेज़न डेल्टा", "गंगा-ब्रह्मपुत्र डेल्टा", "मिसिसिपी डेल्टा", "नील डेल्टा"],
    "answer_en": "Ganges-Brahmaputra Delta",
    "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Who is known as the 'Father of the Indian Space Program'?",
    "question_hi": "'भारतीय अंतरिक्ष कार्यक्रम के जनक' के रूप में किसे जाना जाता है?",
    "options_en": ["Satish Dhawan", "Vikram Sarabhai", "Homi Bhabha", "K. Sivan"],
    "options_hi": ["सतीश धवन", "विक्रम साराभाई", "होमी भाभा", "के. सिवन"],
    "answer_en": "Vikram Sarabhai",
    "answer_hi": "विक्रम साराभाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the chemical formula of Washing Soda?",
    "question_hi": "धोने का सोडा का रासायनिक सूत्र क्या है?",
    "options_en": ["Na2CO3.10H2O", "NaHCO3", "NaOH", "CaCO3"],
    "options_hi": ["Na2CO3.10H2O", "NaHCO3", "NaOH", "CaCO3"],
    "answer_en": "Na2CO3.10H2O",
    "answer_hi": "Na2CO3.10H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is the smallest ocean in the world?",
    "question_hi": "दुनिया का सबसे छोटा महासागर कौन सा है?",
    "options_en": ["Indian Ocean", "Arctic Ocean", "Southern Ocean", "Atlantic Ocean"],
    "options_hi": ["हिंद महासागर", "आर्कटिक महासागर", "दक्षिणी महासागर", "अटलांटिक महासागर"],
    "answer_en": "Arctic Ocean",
    "answer_hi": "आर्कटिक महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Who invented the periodic table?",
    "question_hi": "आवर्त सारणी का आविष्कार किसने किया?",
    "options_en": ["John Dalton", "Dmitri Mendeleev", "Antoine Lavoisier", "Marie Curie"],
    "options_hi": ["जॉन डाल्टन", "दिमित्री मेंडेलीव", "एंटोनी लावॉइज़ियर", "मैरी क्यूरी"],
    "answer_en": "Dmitri Mendeleev",
    "answer_hi": "दिमित्री मेंडेलीव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the chemical symbol of Tungsten?",
    "question_hi": "टंगस्टन का रासायनिक प्रतीक क्या है?",
    "options_en": ["Tu", "Tn", "W", "Tg"],
    "options_hi": ["Tu", "Tn", "W", "Tg"],
    "answer_en": "W",
    "answer_hi": "W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is the largest freshwater lake in the world?",
    "question_hi": "दुनिया की सबसे बड़ी मीठे पानी की झील कौन सी है?",
    "options_en": ["Lake Superior", "Lake Victoria", "Lake Baikal", "Caspian Sea"],
    "options_hi": ["लेक सुपीरियर", "विक्टोरिया झील", "बैकाल झील", "कैस्पियन सागर"],
    "answer_en": "Lake Superior",
    "answer_hi": "लेक सुपीरियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Who wrote the play 'Macbeth'?",
    "question_hi": "'मैकबेथ' नाटक किसने लिखा?",
    "options_en": ["William Shakespeare", "George Bernard Shaw", "Christopher Marlowe", "Oscar Wilde"],
    "options_hi": ["विलियम शेक्सपियर", "जॉर्ज बर्नार्ड शॉ", "क्रिस्टोफर मार्लो", "ऑस्कर वाइल्ड"],
    "answer_en": "William Shakespeare",
    "answer_hi": "विलियम शेक्सपियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the chemical formula of Vinegar?",
    "question_hi": "सिरका का रासायनिक सूत्र क्या है?",
    "options_en": ["CH3COOH", "HCl", "H2SO4", "HNO3"],
    "options_hi": ["CH3COOH", "HCl", "H2SO4", "HNO3"],
    "answer_en": "CH3COOH",
    "answer_hi": "CH3COOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which is the longest cave in the world?",
    "question_hi": "दुनिया की सबसे लंबी गुफा कौन सी है?",
    "options_en": ["Krubera Cave", "Mammoth Cave", "Son Doong Cave", "Clearwater Cave"],
    "options_hi": ["क्रुबेरा गुफा", "मैमथ गुफा", "सोन दूंग गुफा", "क्लियरवाटर गुफा"],
    "answer_en": "Mammoth Cave",
    "answer_hi": "मैमथ गुफा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Who discovered the neutron?",
    "question_hi": "न्यूट्रॉन की खोज किसने की?",
    "options_en": ["Ernest Rutherford", "J.J. Thomson", "James Chadwick", "Niels Bohr"],
    "options_hi": ["अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "जेम्स चैडविक", "नील्स बोहर"],
    "answer_en": "James Chadwick",
    "answer_hi": "जेम्स चैडविक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the chemical symbol of Platinum?",
    "question_hi": "प्लैटिनम का रासायनिक प्रतीक क्या है?",
    "options_en": ["Pt", "Pl", "Pa", "Pn"],
    "options_hi": ["Pt", "Pl", "Pa", "Pn"],
    "answer_en": "Pt",
    "answer_hi": "Pt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is the largest coral reef system in the world?",
    "question_hi": "दुनिया की सबसे बड़ी मूंगा चट्टान प्रणाली कौन सी है?",
    "options_en": ["Great Barrier Reef", "Belize Barrier Reef", "Andros Barrier Reef", "Red Sea Coral Reef"],
    "options_hi": ["ग्रेट बैरियर रीफ", "बेलीज बैरियर रीफ", "एंड्रोस बैरियर रीफ", "रेड सी कोरल रीफ"],
    "answer_en": "Great Barrier Reef",
    "answer_hi": "ग्रेट बैरियर रीफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Who is known as the 'Father of Indian Cinema'?",
    "question_hi": "'भारतीय सिनेमा के जनक' के रूप में किसे जाना जाता है?",
    "options_en": ["Satyajit Ray", "Dadasaheb Phalke", "Raj Kapoor", "Guru Dutt"],
    "options_hi": ["सत्यजित राय", "दादासाहेब फाल्के", "राज कपूर", "गुरु दत्त"],
    "answer_en": "Dadasaheb Phalke",
    "answer_hi": "दादासाहेब फाल्के",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the chemical formula of Laughing Gas?",
    "question_hi": "हंसाने वाली गैस का रासायनिक सूत्र क्या है?",
    "options_en": ["N2O", "NO2", "CO2", "O2"],
    "options_hi": ["N2O", "NO2", "CO2", "O2"],
    "answer_en": "N2O",
    "answer_hi": "N2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which is the highest waterfall in the world?",
    "question_hi": "दुनिया का सबसे ऊंचा झरना कौन सा है?",
    "options_en": ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
    "options_hi": ["नियाग्रा फॉल्स", "विक्टोरिया फॉल्स", "एंजल फॉल्स", "इगाजू फॉल्स"],
    "answer_en": "Angel Falls",
    "answer_hi": "एंजल फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Who discovered the circulation of blood?",
    "question_hi": "रक्त के संचार की खोज किसने की?",
    "options_en": ["William Harvey", "Louis Pasteur", "Robert Hooke", "Alexander Fleming"],
    "options_hi": ["विलियम हार्वे", "लुई पाश्चर", "रॉबर्ट हुक", "अलेक्जेंडर फ्लेमिंग"],
    "answer_en": "William Harvey",
    "answer_hi": "विलियम हार्वे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the chemical symbol of Nickel?",
    "question_hi": "निकेल का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ni", "Nk", "Nl", "Ne"],
    "options_hi": ["Ni", "Nk", "Nl", "Ne"],
    "answer_en": "Ni",
    "answer_hi": "Ni",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the deepest lake in the world?",
    "question_hi": "दुनिया की सबसे गहरी झील कौन सी है?",
    "options_en": ["Lake Superior", "Lake Baikal", "Lake Tanganyika", "Caspian Sea"],
    "options_hi": ["लेक सुपीरियर", "बैकाल झील", "टांगान्यिका झील", "कैस्पियन सागर"],
    "answer_en": "Lake Baikal",
    "answer_hi": "बैकाल झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Who wrote the Indian National Song 'Vande Mataram'?",
    "question_hi": "भारतीय राष्ट्रगीत 'वंदे मातरम्' किसने लिखा?",
    "options_en": ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Mahatma Gandhi", "Subhas Chandra Bose"],
    "options_hi": ["रबीन्द्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "महात्मा गांधी", "सुभाष चंद्र बोस"],
    "answer_en": "Bankim Chandra Chattopadhyay",
    "answer_hi": "बंकिम चंद्र चट्टोपाध्याय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the chemical formula of Quicklime?",
    "question_hi": "बुझा हुआ चूना का रासायनिक सूत्र क्या है?",
    "options_en": ["CaO", "Ca(OH)2", "CaCO3", "CaSO4"],
    "options_hi": ["CaO", "Ca(OH)2", "CaCO3", "CaSO4"],
    "answer_en": "CaO",
    "answer_hi": "CaO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which is the longest wall in the world?",
    "question_hi": "दुनिया की सबसे लंबी दीवार कौन सी है?",
    "options_en": ["Great Wall of China", "Kumbhalgarh Wall", "Hadrian's Wall", "Berlin Wall"],
    "options_hi": ["चीन की महान दीवार", "कुंभलगढ़ की दीवार", "हेड्रियन की दीवार", "बर्लिन की दीवार"],
    "answer_en": "Great Wall of China",
    "answer_hi": "चीन की महान दीवार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Who discovered the proton?",
    "question_hi": "प्रोटॉन की खोज किसने की?",
    "options_en": ["Ernest Rutherford", "J.J. Thomson", "James Chadwick", "Niels Bohr"],
    "options_hi": ["अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "जेम्स चैडविक", "नील्स बोहर"],
    "answer_en": "Ernest Rutherford",
    "answer_hi": "अर्नेस्ट रदरफोर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the chemical symbol of Uranium?",
    "question_hi": "यूरेनियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ur", "Ua", "U", "Un"],
    "options_hi": ["Ur", "Ua", "U", "Un"],
    "answer_en": "U",
    "answer_hi": "U",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is the largest saltwater lake in India?",
    "question_hi": "भारत की सबसे बड़ी खारे पानी की झील कौन सी है?",
    "options_en": ["Chilika Lake", "Wular Lake", "Sambhar Lake", "Pulicat Lake"],
    "options_hi": ["चिल्का झील", "वुलर झील", "सांभर झील", "पुलिकट झील"],
    "answer_en": "Chilika Lake",
    "answer_hi": "चिल्का झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Who wrote the epic 'Mahabharata'?",
    "question_hi": "महाकाव्य 'महाभारत' किसने लिखा?",
    "options_en": ["Valmiki", "Ved Vyas", "Tulsidas", "Kalidas"],
    "options_hi": ["वाल्मीकि", "वेद व्यास", "तुलसीदास", "कालिदास"],
    "answer_en": "Ved Vyas",
    "answer_hi": "वेद व्यास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the chemical formula of Gypsum?",
    "question_hi": "जिप्सम का रासायनिक सूत्र क्या है?",
    "options_en": ["CaSO4.2H2O", "CaCO3", "CaO", "Ca(OH)2"],
    "options_hi": ["CaSO4.2H2O", "CaCO3", "CaO", "Ca(OH)2"],
    "answer_en": "CaSO4.2H2O",
    "answer_hi": "CaSO4.2H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which is the largest volcano in the world?",
    "question_hi": "दुनिया का सबसे बड़ा ज्वालामुखी कौन सा है?",
    "options_en": ["Mount Etna", "Mauna Loa", "Mount Vesuvius", "Mount Fuji"],
    "options_hi": ["माउंट एटना", "मौना लोआ", "माउंट विसुवियस", "माउंट फ़ूजी"],
    "answer_en": "Mauna Loa",
    "answer_hi": "मौना लोआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Who discovered radioactivity?",
    "question_hi": "रेडियोधर्मिता की खोज किसने की?",
    "options_en": ["Marie Curie", "Henri Becquerel", "Ernest Rutherford", "Pierre Curie"],
    "options_hi": ["मैरी क्यूरी", "हेनरी बेकरेल", "अर्नेस्ट रदरफोर्ड", "पियरे क्यूरी"],
    "answer_en": "Henri Becquerel",
    "answer_hi": "हेनरी बेकरेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the chemical symbol of Zinc?",
    "question_hi": "जिंक का रासायनिक प्रतीक क्या है?",
    "options_en": ["Zi", "Zn", "Zc", "Z"],
    "options_hi": ["Zi", "Zn", "Zc", "Z"],
    "answer_en": "Zn",
    "answer_hi": "Zn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is the largest gulf in the world?",
    "question_hi": "दुनिया की सबसे बड़ी खाड़ी कौन सी है?",
    "options_en": ["Gulf of Mexico", "Persian Gulf", "Gulf of Aden", "Gulf of Guinea"],
    "options_hi": ["मैक्सिको की खाड़ी", "फारस की खाड़ी", "एडन की खाड़ी", "गिनी की खाड़ी"],
    "answer_en": "Gulf of Mexico",
    "answer_hi": "मैक्सिको की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Who is known as the 'Frontier Gandhi'?",
    "question_hi": "'फ्रंटियर गांधी' के रूप में किसे जाना जाता है?",
    "options_en": ["Mahatma Gandhi", "Khan Abdul Ghaffar Khan", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
    "options_hi": ["महात्मा गांधी", "खान अब्दुल गफ्फार खान", "बाल गंगाधर तिलक", "लाला लाजपत राय"],
    "answer_en": "Khan Abdul Ghaffar Khan",
    "answer_hi": "खान अब्दुल गफ्फार खान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the chemical formula of Calcite?",
    "question_hi": "कैल्साइट का रासायनिक सूत्र क्या है?",
    "options_en": ["CaCO3", "CaO", "Ca(OH)2", "CaSO4"],
    "options_hi": ["CaCO3", "CaO", "Ca(OH)2", "CaSO4"],
    "answer_en": "CaCO3",
    "answer_hi": "CaCO3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which is the largest bay in the world?",
    "question_hi": "दुनिया की सबसे बड़ी खाड़ी (बे) कौन सी है?",
    "options_en": ["Bay of Bengal", "Hudson Bay", "Chesapeake Bay", "Bay of Biscay"],
    "options_hi": ["बंगाल की खाड़ी", "हडसन बे", "चेसापीक बे", "बिस्के की खाड़ी"],
    "answer_en": "Bay of Bengal",
    "answer_hi": "बंगाल की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Who discovered the Raman Effect?",
    "question_hi": "रमन प्रभाव की खोज किसने की?",
    "options_en": ["C.V. Raman", "Homi Bhabha", "Jagadish Chandra Bose", "Satyendra Nath Bose"],
    "options_hi": ["सी.वी. रमन", "होमी भाभा", "जगदीश चंद्र बोस", "सत्येंद्र नाथ बोस"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the chemical symbol of Silicon?",
    "question_hi": "सिलिकॉन का रासायनिक प्रतीक क्या है?",
    "options_en": ["Si", "Sl", "Sn", "Sc"],
    "options_hi": ["Si", "Sl", "Sn", "Sc"],
    "answer_en": "Si",
    "answer_hi": "Si",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is the largest flower in the world?",
    "question_hi": "दुनिया का सबसे बड़ा फूल कौन सा है?",
    "options_en": ["Rafflesia", "Sunflower", "Titan Arum", "Lotus"],
    "options_hi": ["रैफलेशिया", "सूरजमुखी", "टाइटन एरम", "कमल"],
    "answer_en": "Rafflesia",
    "answer_hi": "रैफलेशिया",
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