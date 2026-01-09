const questions = [
  {
    "num": 1,
    "question_en": "A boat goes 30 km upstream and 44 km downstream in 10 hours. The same boat goes 40 km upstream and 55 km downstream in 13 hours. What is the speed of the stream?",
    "question_hi": "एक नाव 10 घंटे में 30 किमी धारा के प्रतिकूल और 44 किमी धारा के अनुकूल जाती है। वही नाव 13 घंटे में 40 किमी धारा के प्रतिकूल और 55 किमी धारा के अनुकूल जाती है। धारा की गति क्या है?",
    "options_en": ["3 km/h", "4 km/h", "5 km/h", "6 km/h"],
    "options_hi": ["3 किमी/घंटा", "4 किमी/घंटा", "5 किमी/घंटा", "6 किमी/घंटा"],
    "answer_en": "3 km/h",
    "answer_hi": "3 किमी/घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The 'Doctrine of Prospective Overruling' was first applied in India in which case?",
    "question_hi": "'संभाव्य उल्लंघन का सिद्धांत' भारत में पहली बार किस मामले में लागू किया गया था?",
    "options_en": ["Golaknath vs State of Punjab (1967)", "Kesavananda Bharati vs State of Kerala (1973)", "Maneka Gandhi vs Union of India (1978)", "I.C. Golaknath vs State of Punjab (1967)"],
    "options_hi": ["गोलकनाथ बनाम पंजाब राज्य (1967)", "केसवानंद भारती बनाम केरल राज्य (1973)", "मनेका गांधी बनाम भारत संघ (1978)", "आई.सी. गोलकनाथ बनाम पंजाब राज्य (1967)"],
    "answer_en": "Golaknath vs State of Punjab (1967)",
    "answer_hi": "गोलकनाथ बनाम पंजाब राज्य (1967)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If a, b, c are in GP and log a, log b, log c are in AP, then what is the common ratio of GP?",
    "question_hi": "यदि a, b, c गुणोत्तर श्रेणी में हैं और log a, log b, log c समांतर श्रेणी में हैं, तो गुणोत्तर श्रेणी का सार्व अनुपात क्या है?",
    "options_en": ["1", "2", "√2", "2√2"],
    "options_hi": ["1", "2", "√2", "2√2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "In a MOSFET operating in saturation region, the drain current is proportional to:",
    "question_hi": "संतृप्ति क्षेत्र में कार्यरत MOSFET में, ड्रेन करंट के समानुपाती होता है:",
    "options_en": ["(V_GS - V_TH)", "(V_GS - V_TH)²", "√(V_GS - V_TH)", "1/(V_GS - V_TH)"],
    "options_hi": ["(V_GS - V_TH)", "(V_GS - V_TH)²", "√(V_GS - V_TH)", "1/(V_GS - V_TH)"],
    "answer_en": "(V_GS - V_TH)²",
    "answer_hi": "(V_GS - V_TH)²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "A sum becomes 27 times in 3 years at compound interest. What is the rate of interest?",
    "question_hi": "एक राशि चक्रवृद्धि ब्याज पर 3 वर्षों में 27 गुना हो जाती है। ब्याज की दर क्या है?",
    "options_en": ["100%", "150%", "200%", "300%"],
    "options_hi": ["100%", "150%", "200%", "300%"],
    "answer_en": "200%",
    "answer_hi": "200%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If in a certain code, 'QUANTUM MECHANICS' is written as 'MUATNUQ SCINAHCM', how is 'THERMODYNAMICS' written in that code?",
    "question_hi": "यदि एक निश्चित कोड में, 'QUANTUM MECHANICS' को 'MUATNUQ SCINAHCM' लिखा जाता है, तो उस कोड में 'THERMODYNAMICS' कैसे लिखा जाएगा?",
    "options_en": ["SCIMANYDOMREHT", "SCIMANYDMOERHT", "SCIMANYDOOMREHT", "SCIMANYDMOEHTR"],
    "options_hi": ["SCIMANYDOMREHT", "SCIMANYDMOERHT", "SCIMANYDOOMREHT", "SCIMANYDMOEHTR"],
    "answer_en": "SCIMANYDOMREHT",
    "answer_hi": "SCIMANYDOMREHT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The 'Okun's Law' describes the relationship between:",
    "question_hi": "'ओकुन का नियम' के बीच संबंध का वर्णन करता है:",
    "options_en": ["Inflation and unemployment", "GDP growth and unemployment", "Interest rates and investment", "Money supply and inflation"],
    "options_hi": ["मुद्रास्फीति और बेरोजगारी", "जीडीपी विकास और बेरोजगारी", "ब्याज दरें और निवेश", "मुद्रा आपूर्ति और मुद्रास्फीति"],
    "answer_en": "GDP growth and unemployment",
    "answer_hi": "जीडीपी विकास और बेरोजगारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "A Carnot engine operates between 227°C and 127°C. If it absorbs 10⁴ J at higher temperature, how much work is done per cycle?",
    "question_hi": "एक कार्नोट इंजन 227°C और 127°C के बीच संचालित होता है। यदि यह उच्च तापमान पर 10⁴ J अवशोषित करता है, तो प्रति चक्र कितना कार्य किया जाता है?",
    "options_en": ["2000 J", "2500 J", "3000 J", "3500 J"],
    "options_hi": ["2000 J", "2500 J", "3000 J", "3500 J"],
    "answer_en": "2000 J",
    "answer_hi": "2000 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "In triangle ABC, if ∠A = 60°, and sides b and c are such that b + c = 3k and bc = 2k², then side a = ?",
    "question_hi": "त्रिभुज ABC में, यदि ∠A = 60°, और भुजाएं b और c ऐसी हैं कि b + c = 3k और bc = 2k², तो भुजा a = ?",
    "options_en": ["k√3", "k√5", "k√7", "k√13"],
    "options_hi": ["k√3", "k√5", "k√7", "k√13"],
    "answer_en": "k√7",
    "answer_hi": "k√7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of these elements has the highest density at STP?",
    "question_hi": "निम्नलिखित में से किस तत्व का STP पर सबसे अधिक घनत्व है?",
    "options_en": ["Osmium", "Iridium", "Platinum", "Gold"],
    "options_hi": ["ऑस्मियम", "इरिडियम", "प्लैटिनम", "सोना"],
    "answer_en": "Osmium",
    "answer_hi": "ऑस्मियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If the pth term of an AP is q and qth term is p, then what is (p+q)th term?",
    "question_hi": "यदि एक समांतर श्रेणी का pवां पद q है और qवां पद p है, तो (p+q)वां पद क्या है?",
    "options_en": ["0", "1", "p+q", "p-q"],
    "options_hi": ["0", "1", "p+q", "p-q"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The 'Doctrine of Colorable Legislation' refers to:",
    "question_hi": "'वर्णनीय विधान का सिद्धांत' संदर्भित करता है:",
    "options_en": ["Legislation that indirectly achieves what it cannot do directly", "Legislation with multiple colors", "Legislation for minorities", "Emergency legislation"],
    "options_hi": ["विधान जो अप्रत्यक्ष रूप से वह प्राप्त करता है जो वह सीधे नहीं कर सकता", "कई रंगों वाला विधान", "अल्पसंख्यकों के लिए विधान", "आपातकालीन विधान"],
    "answer_en": "Legislation that indirectly achieves what it cannot do directly",
    "answer_hi": "विधान जो अप्रत्यक्ष रूप से वह प्राप्त करता है जो वह सीधे नहीं कर सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The escape velocity from Earth's surface is 11.2 km/s. If Earth's radius is doubled and mass remains same, new escape velocity will be:",
    "question_hi": "पृथ्वी की सतह से पलायन वेग 11.2 किमी/से है। यदि पृथ्वी की त्रिज्या दोगुनी कर दी जाए और द्रव्यमान समान रहे, तो नया पलायन वेग होगा:",
    "options_en": ["5.6 km/s", "7.92 km/s", "11.2 km/s", "15.84 km/s"],
    "options_hi": ["5.6 किमी/से", "7.92 किमी/से", "11.2 किमी/से", "15.84 किमी/से"],
    "answer_en": "7.92 km/s",
    "answer_hi": "7.92 किमी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The 'Human Development Index (HDI)' does NOT include which of these indicators?",
    "question_hi": "'मानव विकास सूचकांक (एचडीआई)' निम्नलिखित में से किस सूचक को शामिल नहीं करता है?",
    "options_en": ["Life expectancy at birth", "Mean years of schooling", "GNI per capita", "Unemployment rate"],
    "options_hi": ["जन्म के समय जीवन प्रत्याशा", "स्कूली शिक्षा के औसत वर्ष", "प्रति व्यक्ति सकल राष्ट्रीय आय", "बेरोजगारी दर"],
    "answer_en": "Unemployment rate",
    "answer_hi": "बेरोजगारी दर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "In a complete binary tree with 1000 nodes, what is the height of the tree?",
    "question_hi": "1000 नोड्स वाले एक पूर्ण बाइनरी ट्री में, ट्री की ऊंचाई क्या है?",
    "options_en": ["9", "10", "11", "12"],
    "options_hi": ["9", "10", "11", "12"],
    "answer_en": "9",
    "answer_hi": "9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The 'Schrodinger's Wave Equation' describes:",
    "question_hi": "'श्रोडिंगर का तरंग समीकरण' वर्णन करता है:",
    "options_en": ["Behavior of atomic particles", "Electromagnetic waves", "Gravitational waves", "Sound waves"],
    "options_hi": ["परमाणु कणों का व्यवहार", "विद्युत चुम्बकीय तरंगें", "गुरुत्वाकर्षण तरंगें", "ध्वनि तरंगें"],
    "answer_en": "Behavior of atomic particles",
    "answer_hi": "परमाणु कणों का व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If log₁₀2 = a and log₁₀3 = b, then log₁₀(0.075) = ?",
    "question_hi": "यदि log₁₀2 = a और log₁₀3 = b, तो log₁₀(0.075) = ?",
    "options_en": ["3a + b - 3", "3a + b - 2", "a + 3b - 3", "a + 3b - 2"],
    "options_hi": ["3a + b - 3", "3a + b - 2", "a + 3b - 3", "a + 3b - 2"],
    "answer_en": "3a + b - 3",
    "answer_hi": "3a + b - 3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The 'Kuznets Curve' illustrates the relationship between:",
    "question_hi": "'कुजनेट्स वक्र' के बीच संबंध दर्शाता है:",
    "options_en": ["Economic growth and income inequality", "Inflation and unemployment", "Savings and investment", "Population and resources"],
    "options_hi": ["आर्थिक विकास और आय असमानता", "मुद्रास्फीति और बेरोजगारी", "बचत और निवेश", "जनसंख्या और संसाधन"],
    "answer_en": "Economic growth and income inequality",
    "answer_hi": "आर्थिक विकास और आय असमानता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "A projectile is fired from ground with velocity u at angle θ. If R is range and H is max height, then tanθ = ?",
    "question_hi": "एक प्रक्षेप्य को जमीन से वेग u पर कोण θ पर दागा जाता है। यदि R सीमा है और H अधिकतम ऊंचाई है, तो tanθ = ?",
    "options_en": ["4H/R", "2H/R", "H/R", "R/(4H)"],
    "options_hi": ["4H/R", "2H/R", "H/R", "R/(4H)"],
    "answer_en": "4H/R",
    "answer_hi": "4H/R",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of these materials has the highest electrical resistivity at room temperature?",
    "question_hi": "निम्नलिखित में से किस सामग्री की कमरे के तापमान पर सबसे अधिक विद्युत प्रतिरोधकता है?",
    "options_en": ["Silver", "Copper", "Glass", "Silicon"],
    "options_hi": ["चांदी", "तांबा", "कांच", "सिलिकॉन"],
    "answer_en": "Glass",
    "answer_hi": "कांच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If the sum of first n terms of an AP is 5n² + 3n, what is the common difference?",
    "question_hi": "यदि एक समांतर श्रेणी के पहले n पदों का योग 5n² + 3n है, तो सार्व अंतर क्या है?",
    "options_en": ["5", "10", "15", "20"],
    "options_hi": ["5", "10", "15", "20"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The 'Marshall-Lerner Condition' in economics relates to:",
    "question_hi": "अर्थशास्त्र में 'मार्शल-लर्नर शर्त' संबंधित है:",
    "options_en": ["Balance of payments", "Inflation targeting", "Monetary policy", "Fiscal deficit"],
    "options_hi": ["भुगतान संतुलन", "मुद्रास्फीति लक्ष्यीकरण", "मौद्रिक नीति", "राजकोषीय घाटा"],
    "answer_en": "Balance of payments",
    "answer_hi": "भुगतान संतुलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The radius of gyration of a thin ring of mass M and radius R about its diameter is:",
    "question_hi": "द्रव्यमान M और त्रिज्या R की एक पतली वलय का अपने व्यास के सापेक्ष परिभ्रमण त्रिज्या है:",
    "options_en": ["R/√2", "R", "R√2", "R/2"],
    "options_hi": ["R/√2", "R", "R√2", "R/2"],
    "answer_en": "R/√2",
    "answer_hi": "R/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of these is NOT a feature of monopoly?",
    "question_hi": "निम्नलिखित में से कौन सा एकाधिकार की विशेषता नहीं है?",
    "options_en": ["Single seller", "Price maker", "Product differentiation", "Barriers to entry"],
    "options_hi": ["एकल विक्रेता", "मूल्य निर्माता", "उत्पाद विभेदीकरण", "प्रवेश में बाधाएं"],
    "answer_en": "Product differentiation",
    "answer_hi": "उत्पाद विभेदीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If α and β are roots of x² - px + q = 0, then what is value of α²β + αβ²?",
    "question_hi": "यदि α और β समीकरण x² - px + q = 0 के मूल हैं, तो α²β + αβ² का मान क्या है?",
    "options_en": ["pq", "p+q", "p-q", "p/q"],
    "options_hi": ["pq", "p+q", "p-q", "p/q"],
    "answer_en": "pq",
    "answer_hi": "pq",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which of these is NOT a type of modulation used in communication systems?",
    "question_hi": "निम्नलिखित में से कौन सा संचार प्रणालियों में उपयोग किया जाने वाला मॉड्यूलेशन का प्रकार नहीं है?",
    "options_en": ["AM", "FM", "PM", "DM"],
    "options_hi": ["एएम", "एफएम", "पीएम", "डीएम"],
    "answer_en": "DM",
    "answer_hi": "डीएम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "A sum of money doubles in 5 years at compound interest. In how many years will it become 8 times?",
    "question_hi": "एक राशि चक्रवृद्धि ब्याज पर 5 वर्षों में दोगुनी हो जाती है। कितने वर्षों में यह 8 गुना हो जाएगी?",
    "options_en": ["10 years", "12 years", "15 years", "20 years"],
    "options_hi": ["10 वर्ष", "12 वर्ष", "15 वर्ष", "20 वर्ष"],
    "answer_en": "15 years",
    "answer_hi": "15 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The 'Doctrine of Waiver' in Indian Constitution means:",
    "question_hi": "भारतीय संविधान में 'त्याग का सिद्धांत' का अर्थ है:",
    "options_en": ["Fundamental rights can be waived", "No one can waive fundamental rights", "Only some rights can be waived", "Government can waive rights"],
    "options_hi": ["मौलिक अधिकारों का त्याग किया जा सकता है", "कोई भी मौलिक अधिकारों का त्याग नहीं कर सकता", "केवल कुछ अधिकारों का त्याग किया जा सकता है", "सरकार अधिकारों का त्याग कर सकती है"],
    "answer_en": "No one can waive fundamental rights",
    "answer_hi": "कोई भी मौलिक अधिकारों का त्याग नहीं कर सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The de Broglie wavelength of an electron accelerated through potential V is:",
    "question_hi": "विभव V के माध्यम से त्वरित एक इलेक्ट्रॉन की डी ब्रोग्ली तरंगदैर्ध्य है:",
    "options_en": ["h/√(2meV)", "h/√(meV)", "h/(2meV)", "h/(meV)"],
    "options_hi": ["h/√(2meV)", "h/√(meV)", "h/(2meV)", "h/(meV)"],
    "answer_en": "h/√(2meV)",
    "answer_hi": "h/√(2meV)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If in a code, 'COMPUTER SCIENCE ENGINEERING' is written as 'OCPMTURE ECNEICS GNINREENIE', how is 'MECHANICAL ENGINEERING' written?",
    "question_hi": "यदि एक कोड में, 'COMPUTER SCIENCE ENGINEERING' को 'OCPMTURE ECNEICS GNINREENIE' लिखा जाता है, तो 'MECHANICAL ENGINEERING' कैसे लिखा जाएगा?",
    "options_en": ["LACINAHCM GNINREENIE", "LACINAHCM GNINREENIE", "LACINAHCM GNIRNEENIE", "LACINAHCM GNIRNEENIE"],
    "options_hi": ["LACINAHCM GNINREENIE", "LACINAHCM GNINREENIE", "LACINAHCM GNIRNEENIE", "LACINAHCM GNIRNEENIE"],
    "answer_en": "LACINAHCM GNINREENIE",
    "answer_hi": "LACINAHCM GNINREENIE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The 'Gresham's Law' states that:",
    "question_hi": "'ग्रेशम का नियम' कहता है कि:",
    "options_en": ["Bad money drives out good money", "Supply creates its own demand", "Population grows geometrically", "Wages tend to subsistence level"],
    "options_hi": ["खराब पैसा अच्छे पैसे को बाहर निकाल देता है", "आपूर्ति अपनी मांग स्वयं बनाती है", "जनसंख्या ज्यामितीय रूप से बढ़ती है", "मजदूरी निर्वाह स्तर की ओर जाती है"],
    "answer_en": "Bad money drives out good money",
    "answer_hi": "खराब पैसा अच्छे पैसे को बाहर निकाल देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "If sinθ + sin²θ = 1, then cos²θ + cos⁴θ = ?",
    "question_hi": "यदि sinθ + sin²θ = 1, तो cos²θ + cos⁴θ = ?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The 'Big Push Theory' in development economics was proposed by:",
    "question_hi": "विकास अर्थशास्त्र में 'बिग पुश थ्योरी' प्रस्तावित की गई थी:",
    "options_en": ["Rosenstein-Rodan", "Rostow", "Lewis", "Schumpeter"],
    "options_hi": ["रोजेंस्टीन-रोडन", "रोस्टो", "लुईस", "शुम्पीटर"],
    "answer_en": "Rosenstein-Rodan",
    "answer_hi": "रोजेंस्टीन-रोडन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Two pipes can fill a tank in 12 and 15 hours respectively. A third pipe can empty it in 20 hours. If all three are opened, how long to fill tank?",
    "question_hi": "दो पाइप एक टैंक को क्रमशः 12 और 15 घंटे में भर सकते हैं। एक तीसरा पाइप इसे 20 घंटे में खाली कर सकता है। यदि तीनों खोले जाते हैं, तो टैंक भरने में कितना समय लगेगा?",
    "options_en": ["8 hours", "9 hours", "10 hours", "12 hours"],
    "options_hi": ["8 घंटे", "9 घंटे", "10 घंटे", "12 घंटे"],
    "answer_en": "10 hours",
    "answer_hi": "10 घंटे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of these is NOT a property of paramagnetic materials?",
    "question_hi": "निम्नलिखित में से कौन सा अनुचुंबकीय पदार्थों का गुण नहीं है?",
    "options_en": ["Weakly attracted by magnets", "Relative permeability slightly greater than 1", "No permanent magnetic moment", "Magnetization proportional to applied field"],
    "options_hi": ["चुंबकों द्वारा कमजोर रूप से आकर्षित", "सापेक्ष पारगम्यता 1 से थोड़ी अधिक", "कोई स्थायी चुंबकीय आघूर्ण नहीं", "लागू क्षेत्र के समानुपाती चुंबकीकरण"],
    "answer_en": "No permanent magnetic moment",
    "answer_hi": "कोई स्थायी चुंबकीय आघूर्ण नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The area of a rhombus is 96 cm² and one diagonal is 12 cm. What is the length of other diagonal?",
    "question_hi": "एक समचतुर्भुज का क्षेत्रफल 96 सेमी² है और एक विकर्ण 12 सेमी है। दूसरे विकर्ण की लंबाई क्या है?",
    "options_en": ["8 cm", "12 cm", "16 cm", "20 cm"],
    "options_hi": ["8 सेमी", "12 सेमी", "16 सेमी", "20 सेमी"],
    "answer_en": "16 cm",
    "answer_hi": "16 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The 'Yellow Revolution' in India is associated with:",
    "question_hi": "भारत में 'पीली क्रांति' संबद्ध है:",
    "options_en": ["Oil seeds production", "Egg production", "Sunflower", "Maize"],
    "options_hi": ["तिलहन उत्पादन", "अंडा उत्पादन", "सूरजमुखी", "मक्का"],
    "answer_en": "Oil seeds production",
    "answer_hi": "तिलहन उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "In a transformer, if primary has 500 turns and secondary 1000 turns, and input voltage is 200V, output voltage is:",
    "question_hi": "एक ट्रांसफार्मर में, यदि प्राथमिक में 500 घुमाव हैं और द्वितीयक में 1000 घुमाव हैं, और इनपुट वोल्टेज 200V है, तो आउटपुट वोल्टेज है:",
    "options_en": ["100 V", "200 V", "400 V", "800 V"],
    "options_hi": ["100 V", "200 V", "400 V", "800 V"],
    "answer_en": "400 V",
    "answer_hi": "400 V",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "In a class of 50 students, 30 passed in Mathematics, 25 in Physics, and 20 in both. How many passed in exactly one subject?",
    "question_hi": "50 छात्रों की एक कक्षा में, 30 गणित में उत्तीर्ण हुए, 25 भौतिकी में, और 20 दोनों में। कितने ठीक एक विषय में उत्तीर्ण हुए?",
    "options_en": ["15", "20", "25", "30"],
    "options_hi": ["15", "20", "25", "30"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which of these is NOT a type of file in operating systems?",
    "question_hi": "निम्नलिखित में से कौन सा ऑपरेटिंग सिस्टम में फ़ाइल का प्रकार नहीं है?",
    "options_en": ["Regular file", "Directory file", "Device file", "System file"],
    "options_hi": ["नियमित फ़ाइल", "निर्देशिका फ़ाइल", "डिवाइस फ़ाइल", "सिस्टम फ़ाइल"],
    "answer_en": "System file",
    "answer_hi": "सिस्टम फ़ाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If the quadratic equation x² - 2kx + k² - 1 = 0 has roots lying between -2 and 4, then k lies in:",
    "question_hi": "यदि द्विघात समीकरण x² - 2kx + k² - 1 = 0 के मूल -2 और 4 के बीच स्थित हैं, तो k स्थित है:",
    "options_en": ["(-1, 3)", "(-2, 4)", "(0, 3)", "(1, 4)"],
    "options_hi": ["(-1, 3)", "(-2, 4)", "(0, 3)", "(1, 4)"],
    "answer_en": "(-1, 3)",
    "answer_hi": "(-1, 3)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The 'Montreal Protocol' was specifically designed to protect:",
    "question_hi": "'मॉन्ट्रियल प्रोटोकॉल' विशेष रूप से रक्षा के लिए बनाया गया था:",
    "options_en": ["Biodiversity", "Ozone layer", "Climate", "Forests"],
    "options_hi": ["जैव विविधता", "ओजोन परत", "जलवायु", "वन"],
    "answer_en": "Ozone layer",
    "answer_hi": "ओजोन परत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "A heat pump has coefficient of performance 4. If it delivers 2000 J of heat to room, how much work is done?",
    "question_hi": "एक हीट पंप का प्रदर्शन गुणांक 4 है। यदि यह कमरे को 2000 J ऊष्मा पहुंचाता है, तो कितना कार्य किया जाता है?",
    "options_en": ["400 J", "500 J", "600 J", "800 J"],
    "options_hi": ["400 J", "500 J", "600 J", "800 J"],
    "answer_en": "500 J",
    "answer_hi": "500 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which of these is NOT a function of the Finance Commission of India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत के वित्त आयोग का कार्य नहीं है?",
    "options_en": ["Distribution of taxes between Centre and States", "Grants-in-aid to States", "Fiscal deficit management", "Recommendations on financial matters"],
    "options_hi": ["केंद्र और राज्यों के बीच करों का वितरण", "राज्यों को अनुदान-सहायता", "राजकोषीय घाटा प्रबंधन", "वित्तीय मामलों पर सिफारिशें"],
    "answer_en": "Fiscal deficit management",
    "answer_hi": "राजकोषीय घाटा प्रबंधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If tanθ = 3/4 and θ is acute, then (5sinθ - 3cosθ)/(5sinθ + 3cosθ) = ?",
    "question_hi": "यदि tanθ = 3/4 और θ न्यून कोण है, तो (5sinθ - 3cosθ)/(5sinθ + 3cosθ) = ?",
    "options_en": ["1/9", "1/7", "1/5", "1/3"],
    "options_hi": ["1/9", "1/7", "1/5", "1/3"],
    "answer_en": "1/9",
    "answer_hi": "1/9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The 'Doctrine of Pleasure' in Indian Constitution applies to:",
    "question_hi": "भारतीय संविधान में 'सुख का सिद्धांत' लागू होता है:",
    "options_en": ["Civil servants", "Judges", "President", "Prime Minister"],
    "options_hi": ["सिविल सेवक", "न्यायाधीश", "राष्ट्रपति", "प्रधानमंत्री"],
    "answer_en": "Civil servants",
    "answer_hi": "सिविल सेवक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The Young's modulus Y, bulk modulus K and Poisson's ratio σ are related by:",
    "question_hi": "यंग मापांक Y, आयतन प्रत्यास्थता गुणांक K और प्वासों अनुपात σ से संबंधित हैं:",
    "options_en": ["Y = 3K(1 - 2σ)", "Y = 2K(1 + σ)", "Y = K(1 + σ)", "Y = 3K(1 + σ)"],
    "options_hi": ["Y = 3K(1 - 2σ)", "Y = 2K(1 + σ)", "Y = K(1 + σ)", "Y = 3K(1 + σ)"],
    "answer_en": "Y = 3K(1 - 2σ)",
    "answer_hi": "Y = 3K(1 - 2σ)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "If in a code, 'THERMODYNAMICS HEAT TRANSFER' is written as 'SCIMANYDOMREHT REFSNART TAEH', how is 'FLUID MECHANICS' written?",
    "question_hi": "यदि एक कोड में, 'THERMODYNAMICS HEAT TRANSFER' को 'SCIMANYDOMREHT REFSNART TAEH' लिखा जाता है, तो 'FLUID MECHANICS' कैसे लिखा जाएगा?",
    "options_en": ["DIULF SCINAHCM", "DIULF SCINAHCM", "DIULF SCINAHCM", "DIULF SCINAHCM"],
    "options_hi": ["DIULF SCINAHCM", "DIULF SCINAHCM", "DIULF SCINAHCM", "DIULF SCINAHCM"],
    "answer_en": "DIULF SCINAHCM",
    "answer_hi": "DIULF SCINAHCM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of these is NOT an indirect tax?",
    "question_hi": "निम्नलिखित में से कौन सा अप्रत्यक्ष कर नहीं है?",
    "options_en": ["GST", "Excise duty", "Customs duty", "Corporate tax"],
    "options_hi": ["जीएसटी", "उत्पाद शुल्क", "सीमा शुल्क", "कॉर्पोरेट कर"],
    "answer_en": "Corporate tax",
    "answer_hi": "कॉर्पोरेट कर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "A shopkeeper marks his goods 50% above cost price but gives discount of 20% on marked price. If he also uses 900 gm weight instead of 1 kg, his profit percentage is:",
    "question_hi": "एक दुकानदार अपने माल को लागत मूल्य से 50% अधिक अंकित करता है लेकिन अंकित मूल्य पर 20% की छूट देता है। यदि वह 1 किलो के बजाय 900 ग्राम के बाट का भी उपयोग करता है, तो उसका लाभ प्रतिशत है:",
    "options_en": ["20%", "25%", "33.33%", "40%"],
    "options_hi": ["20%", "25%", "33.33%", "40%"],
    "answer_en": "33.33%",
    "answer_hi": "33.33%",
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