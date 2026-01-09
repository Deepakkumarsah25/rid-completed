const questions = [
  {
    "num": 1,
    "question_en": "A boat goes 12 km upstream and 40 km downstream in 8 hours. It can go 16 km upstream and 32 km downstream in the same time. What is the speed of the boat in still water?",
    "question_hi": "एक नाव 8 घंटे में 12 किमी धारा के प्रतिकूल और 40 किमी धारा के अनुकूल जाती है। यह समान समय में 16 किमी धारा के प्रतिकूल और 32 किमी धारा के अनुकूल जा सकती है। शांत जल में नाव की गति क्या है?",
    "options_en": ["6 km/h", "7 km/h", "8 km/h", "9 km/h"],
    "options_hi": ["6 किमी/घंटा", "7 किमी/घंटा", "8 किमी/घंटा", "9 किमी/घंटा"],
    "answer_en": "6 km/h",
    "answer_hi": "6 किमी/घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The 'Doctrine of Harmonious Construction' was first applied in which landmark case?",
    "question_hi": "'सामंजस्यपूर्ण निर्माण का सिद्धांत' पहली बार किस ऐतिहासिक मामले में लागू किया गया था?",
    "options_en": ["CIT vs S. Teja Singh (1959)", "K.M. Nanavati vs State of Maharashtra (1962)", "Raj Krishna vs Binod (1954)", "Kesavananda Bharati vs State of Kerala (1973)"],
    "options_hi": ["सीआईटी बनाम एस. तेजा सिंह (1959)", "के.एम. नानावती बनाम महाराष्ट्र राज्य (1962)", "राज कृष्णा बनाम बिनोद (1954)", "केसवानंद भारती बनाम केरल राज्य (1973)"],
    "answer_en": "CIT vs S. Teja Singh (1959)",
    "answer_hi": "सीआईटी बनाम एस. तेजा सिंह (1959)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If a, b, c are in GP and a^x = b^y = c^z, then x, y, z are in:",
    "question_hi": "यदि a, b, c गुणोत्तर श्रेणी में हैं और a^x = b^y = c^z, तो x, y, z हैं:",
    "options_en": ["AP", "GP", "HP", "None of these"],
    "options_hi": ["समांतर श्रेणी", "गुणोत्तर श्रेणी", "हरात्मक श्रेणी", "इनमें से कोई नहीं"],
    "answer_en": "HP",
    "answer_hi": "हरात्मक श्रेणी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "In a common emitter amplifier, if the current gain β is 100 and input resistance is 1 kΩ, what is the voltage gain if load resistance is 5 kΩ?",
    "question_hi": "एक कॉमन एमिटर एम्पलीफायर में, यदि करंट गेन β 100 है और इनपुट प्रतिरोध 1 kΩ है, तो वोल्टेज गेन क्या है यदि लोड प्रतिरोध 5 kΩ है?",
    "options_en": ["100", "200", "300", "500"],
    "options_hi": ["100", "200", "300", "500"],
    "answer_en": "500",
    "answer_hi": "500",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "A sum becomes 133.1% of itself in 3 years at compound interest. What is the rate of interest?",
    "question_hi": "एक राशि चक्रवृद्धि ब्याज पर 3 वर्षों में स्वयं का 133.1% हो जाती है। ब्याज की दर क्या है?",
    "options_en": ["8%", "9%", "10%", "11%"],
    "options_hi": ["8%", "9%", "10%", "11%"],
    "answer_en": "10%",
    "answer_hi": "10%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If in a certain code, 'ELECTRICAL ELECTRONICS' is written as 'LACIRTCELE SCINORTCELE', how is 'COMPUTER SCIENCE' written in that code?",
    "question_hi": "यदि एक निश्चित कोड में, 'ELECTRICAL ELECTRONICS' को 'LACIRTCELE SCINORTCELE' लिखा जाता है, तो उस कोड में 'COMPUTER SCIENCE' कैसे लिखा जाएगा?",
    "options_en": ["RETUPMOC ECNEICS", "RETUPMOC ECNEICS", "RETUPCOM ECNEICS", "RETUPCOM ECNEICS"],
    "options_hi": ["RETUPMOC ECNEICS", "RETUPMOC ECNEICS", "RETUPCOM ECNEICS", "RETUPCOM ECNEICS"],
    "answer_en": "RETUPMOC ECNEICS",
    "answer_hi": "RETUPMOC ECNEICS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The 'J-Curve Effect' in economics describes:",
    "question_hi": "अर्थशास्त्र में 'जे-वक्र प्रभाव' वर्णन करता है:",
    "options_en": ["Short-term deterioration before improvement in trade balance", "Investment behavior", "Consumption patterns", "Inflation dynamics"],
    "options_hi": ["व्यापार संतुलन में सुधार से पहले अल्पकालिक गिरावट", "निवेश व्यवहार", "उपभोग पैटर्न", "मुद्रास्फीति गतिशीलता"],
    "answer_en": "Short-term deterioration before improvement in trade balance",
    "answer_hi": "व्यापार संतुलन में सुधार से पहले अल्पकालिक गिरावट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "A Carnot refrigerator operates between 250K and 300K. If it removes 2400 J from cold reservoir, how much work is required?",
    "question_hi": "एक कार्नोट रेफ्रिजरेटर 250K और 300K के बीच संचालित होता है। यदि यह ठंडे जलाशय से 2400 J निकालता है, तो कितने कार्य की आवश्यकता होती है?",
    "options_en": ["400 J", "480 J", "500 J", "600 J"],
    "options_hi": ["400 J", "480 J", "500 J", "600 J"],
    "answer_en": "480 J",
    "answer_hi": "480 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "In triangle ABC, if a = 13, b = 14, c = 15, then what is the value of cosA?",
    "question_hi": "त्रिभुज ABC में, यदि a = 13, b = 14, c = 15, तो cosA का मान क्या है?",
    "options_en": ["3/5", "4/5", "5/13", "12/13"],
    "options_hi": ["3/5", "4/5", "5/13", "12/13"],
    "answer_en": "5/13",
    "answer_hi": "5/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of these elements has the highest specific heat capacity?",
    "question_hi": "निम्नलिखित में से किस तत्व की विशिष्ट ऊष्मा क्षमता सबसे अधिक है?",
    "options_en": ["Hydrogen", "Helium", "Lithium", "Water"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "लिथियम", "पानी"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If the sum of first n terms of an AP is 3n² - n, then what is its 25th term?",
    "question_hi": "यदि एक समांतर श्रेणी के पहले n पदों का योग 3n² - n है, तो उसका 25वां पद क्या है?",
    "options_en": ["146", "148", "150", "152"],
    "options_hi": ["146", "148", "150", "152"],
    "answer_en": "148",
    "answer_hi": "148",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The 'Doctrine of Repugnancy' under Article 254 of Indian Constitution deals with:",
    "question_hi": "भारतीय संविधान के अनुच्छेद 254 के तहत 'विसंगति का सिद्धांत' संबंधित है:",
    "options_en": ["Conflict between Central and State laws", "Conflict between two State laws", "Conflict between two Central laws", "Conflict between fundamental rights"],
    "options_hi": ["केंद्रीय और राज्य कानूनों के बीच संघर्ष", "दो राज्य कानूनों के बीच संघर्ष", "दो केंद्रीय कानूनों के बीच संघर्ष", "मौलिक अधिकारों के बीच संघर्ष"],
    "answer_en": "Conflict between Central and State laws",
    "answer_hi": "केंद्रीय और राज्य कानूनों के बीच संघर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The time period of a satellite in circular orbit very close to Earth's surface (R = 6400 km) is:",
    "question_hi": "पृथ्वी की सतह के बहुत निकट वृत्ताकार कक्षा में एक उपग्रह का आवर्तकाल है:",
    "options_en": ["84.6 minutes", "90 minutes", "120 minutes", "24 hours"],
    "options_hi": ["84.6 मिनट", "90 मिनट", "120 मिनट", "24 घंटे"],
    "answer_en": "84.6 minutes",
    "answer_hi": "84.6 मिनट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The 'Lorenz Curve' is closest to diagonal line when:",
    "question_hi": "'लोरेंज वक्र' विकर्ण रेखा के सबसे निकट होता है जब:",
    "options_en": ["Income distribution is perfectly equal", "Income distribution is perfectly unequal", "There is moderate inequality", "GDP is high"],
    "options_hi": ["आय वितरण पूर्णतः समान है", "आय वितरण पूर्णतः असमान है", "मध्यम असमानता है", "जीडीपी अधिक है"],
    "answer_en": "Income distribution is perfectly equal",
    "answer_hi": "आय वितरण पूर्णतः समान है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "In a complete binary tree with height h, the maximum number of nodes is:",
    "question_hi": "ऊंचाई h वाले एक पूर्ण बाइनरी ट्री में, नोड्स की अधिकतम संख्या है:",
    "options_en": ["2^h", "2^h - 1", "2^(h+1)", "2^(h+1) - 1"],
    "options_hi": ["2^h", "2^h - 1", "2^(h+1)", "2^(h+1) - 1"],
    "answer_en": "2^(h+1) - 1",
    "answer_hi": "2^(h+1) - 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The 'Pauli Exclusion Principle' states that:",
    "question_hi": "'पाउली अपवर्जन सिद्धांत' कहता है कि:",
    "options_en": ["No two electrons can have same four quantum numbers", "Energy levels are quantized", "Electrons behave as waves", "Conservation of angular momentum"],
    "options_hi": ["कोई भी दो इलेक्ट्रॉन समान चार क्वांटम संख्या नहीं रख सकते", "ऊर्जा स्तर क्वांटीकृत हैं", "इलेक्ट्रॉन तरंगों की तरह व्यवहार करते हैं", "कोणीय संवेग का संरक्षण"],
    "answer_en": "No two electrons can have same four quantum numbers",
    "answer_hi": "कोई भी दो इलेक्ट्रॉन समान चार क्वांटम संख्या नहीं रख सकते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If log₂(log₃(log₄(x))) = 1, then x = ?",
    "question_hi": "यदि log₂(log₃(log₄(x))) = 1, तो x = ?",
    "options_en": ["4^9", "4^27", "64", "256"],
    "options_hi": ["4^9", "4^27", "64", "256"],
    "answer_en": "4^27",
    "answer_hi": "4^27",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The 'Baumol's Cost Disease' explains rising costs in:",
    "question_hi": "'बॉमोल की लागत बीमारी' में बढ़ती लागत की व्याख्या करती है:",
    "options_en": ["Service sectors with low productivity growth", "Manufacturing sectors", "Agricultural sectors", "Technology sectors"],
    "options_hi": ["कम उत्पादकता वृद्धि वाले सेवा क्षेत्र", "विनिर्माण क्षेत्र", "कृषि क्षेत्र", "प्रौद्योगिकी क्षेत्र"],
    "answer_en": "Service sectors with low productivity growth",
    "answer_hi": "कम उत्पादकता वृद्धि वाले सेवा क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "A projectile is fired with velocity u at angle θ. If maximum height is H and range is R, then u² = ?",
    "question_hi": "एक प्रक्षेप्य को वेग u पर कोण θ पर दागा जाता है। यदि अधिकतम ऊंचाई H है और सीमा R है, तो u² = ?",
    "options_en": ["g(R² + 16H²)/(8H)", "g(R² + 8H²)/(4H)", "g(R² + 4H²)/(2H)", "g(R² + 2H²)/H"],
    "options_hi": ["g(R² + 16H²)/(8H)", "g(R² + 8H²)/(4H)", "g(R² + 4H²)/(2H)", "g(R² + 2H²)/H"],
    "answer_en": "g(R² + 16H²)/(8H)",
    "answer_hi": "g(R² + 16H²)/(8H)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of these materials has the highest thermal expansion coefficient?",
    "question_hi": "निम्नलिखित में से किस सामग्री का तापीय विस्तार गुणांक सबसे अधिक है?",
    "options_en": ["Invar", "Glass", "Copper", "Lead"],
    "options_hi": ["इनवर", "कांच", "तांबा", "सीसा"],
    "answer_en": "Lead",
    "answer_hi": "सीसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If the AM and HM of two numbers are 25 and 9 respectively, what are the numbers?",
    "question_hi": "यदि दो संख्याओं का समांतर माध्य और हरात्मक माध्य क्रमशः 25 और 9 हैं, तो संख्याएं क्या हैं?",
    "options_en": ["5 and 45", "10 and 40", "15 and 35", "20 and 30"],
    "options_hi": ["5 और 45", "10 और 40", "15 और 35", "20 और 30"],
    "answer_en": "5 and 45",
    "answer_hi": "5 और 45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The 'Solow-Swan Model' in economics primarily explains:",
    "question_hi": "अर्थशास्त्र में 'सोलो-स्वान मॉडल' मुख्य रूप से व्याख्या करता है:",
    "options_en": ["Long-run economic growth", "Short-term business cycles", "Income distribution", "International trade"],
    "options_hi": ["दीर्घकालिक आर्थिक विकास", "अल्पकालिक व्यापार चक्र", "आय वितरण", "अंतर्राष्ट्रीय व्यापार"],
    "answer_en": "Long-run economic growth",
    "answer_hi": "दीर्घकालिक आर्थिक विकास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The moment of inertia of a solid sphere of mass M and radius R about a tangent is:",
    "question_hi": "द्रव्यमान M और त्रिज्या R के एक ठोस गोले का एक स्पर्शरेखा के सापेक्ष जड़त्व आघूर्ण है:",
    "options_en": ["2/5 MR²", "7/5 MR²", "2/3 MR²", "5/3 MR²"],
    "options_hi": ["2/5 MR²", "7/5 MR²", "2/3 MR²", "5/3 MR²"],
    "answer_en": "7/5 MR²",
    "answer_hi": "7/5 MR²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of these is NOT a feature of monopolistic competition?",
    "question_hi": "निम्नलिखित में से कौन सा एकाधिकार प्रतियोगिता की विशेषता नहीं है?",
    "options_en": ["Many firms", "Product differentiation", "Perfect knowledge", "Free entry and exit"],
    "options_hi": ["कई फर्में", "उत्पाद विभेदीकरण", "पूर्ण ज्ञान", "मुक्त प्रवेश और निकास"],
    "answer_en": "Perfect knowledge",
    "answer_hi": "पूर्ण ज्ञान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If α, β are roots of x² - 2x + 3 = 0, then what is value of α³ + β³?",
    "question_hi": "यदि α, β समीकरण x² - 2x + 3 = 0 के मूल हैं, तो α³ + β³ का मान क्या है?",
    "options_en": ["-10", "-8", "-6", "-4"],
    "options_hi": ["-10", "-8", "-6", "-4"],
    "answer_en": "-10",
    "answer_hi": "-10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which of these is NOT a type of antenna?",
    "question_hi": "निम्नलिखित में से कौन सा एंटीना का प्रकार नहीं है?",
    "options_en": ["Dipole", "Yagi", "Parabolic", "Transformer"],
    "options_hi": ["डाईपोल", "यागी", "परवलयिक", "ट्रांसफार्मर"],
    "answer_en": "Transformer",
    "answer_hi": "ट्रांसफार्मर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "A sum of money amounts to Rs. 4,840 in 2 years and to Rs. 5,324 in 3 years at compound interest. What is the sum?",
    "question_hi": "एक राशि चक्रवृद्धि ब्याज पर 2 वर्षों में 4,840 रुपये और 3 वर्षों में 5,324 रुपये हो जाती है। राशि क्या है?",
    "options_en": ["Rs. 3,000", "Rs. 3,500", "Rs. 4,000", "Rs. 4,500"],
    "options_hi": ["3,000 रुपये", "3,500 रुपये", "4,000 रुपये", "4,500 रुपये"],
    "answer_en": "Rs. 4,000",
    "answer_hi": "4,000 रुपये",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The 'Doctrine of Territorial Nexus' under Article 245 means:",
    "question_hi": "अनुच्छेद 245 के तहत 'क्षेत्रीय संबंध का सिद्धांत' का अर्थ है:",
    "options_en": ["State laws must have territorial connection", "Centre can make laws for whole territory", "States have exclusive powers", "Concurrent list powers"],
    "options_hi": ["राज्य कानूनों का क्षेत्रीय संबंध होना चाहिए", "केंद्र पूरे क्षेत्र के लिए कानून बना सकता है", "राज्यों के अनन्य अधिकार हैं", "समवर्ती सूची शक्तियां"],
    "answer_en": "State laws must have territorial connection",
    "answer_hi": "राज्य कानूनों का क्षेत्रीय संबंध होना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The de Broglie wavelength of a particle of mass m and kinetic energy K is:",
    "question_hi": "द्रव्यमान m और गतिज ऊर्जा K के एक कण की डी ब्रोग्ली तरंगदैर्ध्य है:",
    "options_en": ["h/√(2mK)", "h/(2mK)", "h√(2mK)", "h/(mK)"],
    "options_hi": ["h/√(2mK)", "h/(2mK)", "h√(2mK)", "h/(mK)"],
    "answer_en": "h/√(2mK)",
    "answer_hi": "h/√(2mK)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "If in a code, 'MATHEMATICS PHYSICS CHEMISTRY' is written as 'SCITAMEHTAM SCISYHP YRTSIMEHC', how is 'BIOLOGY GEOLOGY' written?",
    "question_hi": "यदि एक कोड में, 'MATHEMATICS PHYSICS CHEMISTRY' को 'SCITAMEHTAM SCISYHP YRTSIMEHC' लिखा जाता है, तो 'BIOLOGY GEOLOGY' कैसे लिखा जाएगा?",
    "options_en": ["YGOLOIB YGOLOEG", "YGOLOIB YGOLOEG", "YGOLOIB YGOLOEG", "YGOLOIB YGOLOEG"],
    "options_hi": ["YGOLOIB YGOLOEG", "YGOLOIB YGOLOEG", "YGOLOIB YGOLOEG", "YGOLOIB YGOLOEG"],
    "answer_en": "YGOLOIB YGOLOEG",
    "answer_hi": "YGOLOIB YGOLOEG",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The 'Pareto Efficiency' concept states that:",
    "question_hi": "'पैरेटो दक्षता' अवधारणा कहती है कि:",
    "options_en": ["No one can be made better off without making someone worse off", "Total utility is maximized", "Resources are equally distributed", "Market clears at equilibrium"],
    "options_hi": ["किसी को बदतर बनाए बिना किसी को बेहतर नहीं बनाया जा सकता", "कुल उपयोगिता अधिकतम है", "संसाधन समान रूप से वितरित हैं", "बाजार संतुलन पर साफ होता है"],
    "answer_en": "No one can be made better off without making someone worse off",
    "answer_hi": "किसी को बदतर बनाए बिना किसी को बेहतर नहीं बनाया जा सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "If sinθ + cosθ = √2 cos(90° - θ), then tanθ = ?",
    "question_hi": "यदि sinθ + cosθ = √2 cos(90° - θ), तो tanθ = ?",
    "options_en": ["1", "√2", "√3", "2"],
    "options_hi": ["1", "√2", "√3", "2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The 'Trickle-Down Theory' in economics suggests that:",
    "question_hi": "अर्थशास्त्र में 'ट्रिकल-डाउन थ्योरी' सुझाव देती है कि:",
    "options_en": ["Benefits to rich eventually reach poor", "Poor should be helped directly", "Wealth should be redistributed", "Markets are efficient"],
    "options_hi": ["अमीरों को लाभ अंततः गरीबों तक पहुंचता है", "गरीबों की सीधे मदद की जानी चाहिए", "धन का पुनर्वितरण होना चाहिए", "बाजार कुशल हैं"],
    "answer_en": "Benefits to rich eventually reach poor",
    "answer_hi": "अमीरों को लाभ अंततः गरीबों तक पहुंचता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Three pipes A, B, C can fill a tank in 6, 8, 12 hours respectively. If all are opened and after 2 hours, pipe C is closed, how much longer to fill tank?",
    "question_hi": "तीन पाइप A, B, C एक टैंक को क्रमशः 6, 8, 12 घंटे में भर सकते हैं। यदि सभी खोले जाते हैं और 2 घंटे के बाद, पाइप C बंद कर दिया जाता है, तो टैंक भरने में और कितना समय लगेगा?",
    "options_en": ["1 hour", "1.5 hours", "2 hours", "2.5 hours"],
    "options_hi": ["1 घंटा", "1.5 घंटे", "2 घंटे", "2.5 घंटे"],
    "answer_en": "1 hour",
    "answer_hi": "1 घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of these is NOT a property of ferromagnetic materials?",
    "question_hi": "निम्नलिखित में से कौन सा लौहचुम्बकीय पदार्थों का गुण नहीं है?",
    "options_en": ["High permeability", "Hysteresis", "Curie temperature", "Diamagnetic behavior"],
    "options_hi": ["उच्च पारगम्यता", "हिस्टैरिसीस", "क्यूरी तापमान", "प्रतिचुम्बकीय व्यवहार"],
    "answer_en": "Diamagnetic behavior",
    "answer_hi": "प्रतिचुम्बकीय व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The area of a regular hexagon with side 4 cm is:",
    "question_hi": "भुजा 4 सेमी वाले एक नियमित षट्भुज का क्षेत्रफल है:",
    "options_en": ["24√3 cm²", "36√3 cm²", "48√3 cm²", "64√3 cm²"],
    "options_hi": ["24√3 सेमी²", "36√3 सेमी²", "48√3 सेमी²", "64√3 सेमी²"],
    "answer_en": "24√3 cm²",
    "answer_hi": "24√3 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The 'Pink Revolution' in India is associated with:",
    "question_hi": "भारत में 'गुलाबी क्रांति' संबद्ध है:",
    "options_en": ["Onion production", "Meat processing", "Shrimp production", "Rose cultivation"],
    "options_hi": ["प्याज उत्पादन", "मांस प्रसंस्करण", "झींगा उत्पादन", "गुलाब की खेती"],
    "answer_en": "Onion production",
    "answer_hi": "प्याज उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "In a step-up transformer, if primary voltage is 100V and turns ratio is 1:10, output voltage is:",
    "question_hi": "एक स्टेप-अप ट्रांसफार्मर में, यदि प्राथमिक वोल्टेज 100V है और घुमाव अनुपात 1:10 है, तो आउटपुट वोल्टेज है:",
    "options_en": ["10V", "100V", "1000V", "10000V"],
    "options_hi": ["10V", "100V", "1000V", "10000V"],
    "answer_en": "1000V",
    "answer_hi": "1000V",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "In a survey of 200 people, 120 read newspaper A, 100 read B, and 60 read both. How many read exactly one newspaper?",
    "question_hi": "200 लोगों के सर्वेक्षण में, 120 अखबार A पढ़ते हैं, 100 B पढ़ते हैं, और 60 दोनों पढ़ते हैं। कितने ठीक एक अखबार पढ़ते हैं?",
    "options_en": ["80", "100", "120", "140"],
    "options_hi": ["80", "100", "120", "140"],
    "answer_en": "100",
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which of these is NOT a type of bearing failure?",
    "question_hi": "निम्नलिखित में से कौन सा बेयरिंग विफलता का प्रकार नहीं है?",
    "options_en": ["Fatigue", "Abrasion", "Corrosion", "Elongation"],
    "options_hi": ["थकान", "घर्षण", "जंग", "दीर्घीकरण"],
    "answer_en": "Elongation",
    "answer_hi": "दीर्घीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If the quadratic equation (k-2)x² - (k-4)x - 2 = 0 has equal roots, then k = ?",
    "question_hi": "यदि द्विघात समीकरण (k-2)x² - (k-4)x - 2 = 0 के समान मूल हैं, तो k = ?",
    "options_en": ["0 or 8", "2 or 6", "4 or 8", "6 or 10"],
    "options_hi": ["0 या 8", "2 या 6", "4 या 8", "6 या 10"],
    "answer_en": "0 or 8",
    "answer_hi": "0 या 8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The 'Kyoto Protocol' was adopted in which year?",
    "question_hi": "'क्योटो प्रोटोकॉल' किस वर्ष अपनाया गया था?",
    "options_en": ["1992", "1997", "2002", "2005"],
    "options_hi": ["1992", "1997", "2002", "2005"],
    "answer_en": "1997",
    "answer_hi": "1997",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "A heat engine has efficiency 30%. If it absorbs 2000 J from source, how much heat is rejected?",
    "question_hi": "एक ऊष्मा इंजन की दक्षता 30% है। यदि यह स्रोत से 2000 J अवशोषित करता है, तो कितनी ऊष्मा अस्वीकार की जाती है?",
    "options_en": ["600 J", "1000 J", "1400 J", "1600 J"],
    "options_hi": ["600 J", "1000 J", "1400 J", "1600 J"],
    "answer_en": "1400 J",
    "answer_hi": "1400 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which of these is NOT a function of the State Finance Commission?",
    "question_hi": "निम्नलिखित में से कौन सा राज्य वित्त आयोग का कार्य नहीं है?",
    "options_en": ["Distribution of taxes between State and local bodies", "Grants-in-aid to municipalities", "Consolidated Fund of India", "Recommendations on Panchayat finances"],
    "options_hi": ["राज्य और स्थानीय निकायों के बीच करों का वितरण", "नगरपालिकाओं को अनुदान-सहायता", "भारत का समेकित निधि", "पंचायत वित्त पर सिफारिशें"],
    "answer_en": "Consolidated Fund of India",
    "answer_hi": "भारत का समेकित निधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If sinA = 1/√10 and sinB = 1/√5, where A and B are acute, then A + B = ?",
    "question_hi": "यदि sinA = 1/√10 और sinB = 1/√5, जहां A और B न्यून कोण हैं, तो A + B = ?",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "45°",
    "answer_hi": "45°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The 'Doctrine of Incidental or Ancillary Powers' means:",
    "question_hi": "'आकस्मिक या सहायक शक्तियों का सिद्धांत' का अर्थ है:",
    "options_en": ["Power to do something includes power to do incidental things", "Emergency powers", "Judicial powers", "Executive powers"],
    "options_hi": ["कुछ करने की शक्ति में आकस्मिक चीजें करने की शक्ति शामिल है", "आपातकालीन शक्तियां", "न्यायिक शक्तियां", "कार्यपालक शक्तियां"],
    "answer_en": "Power to do something includes power to do incidental things",
    "answer_hi": "कुछ करने की शक्ति में आकस्मिक चीजें करने की शक्ति शामिल है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "For an ideal gas, the ratio of specific heats γ = Cp/Cv is related to degrees of freedom f by:",
    "question_hi": "एक आदर्श गैस के लिए, विशिष्ट ऊष्माओं का अनुपात γ = Cp/Cv स्वतंत्रता की कोटि f से संबंधित है:",
    "options_en": ["γ = 1 + 2/f", "γ = 1 + f/2", "γ = f/2", "γ = 2/f"],
    "options_hi": ["γ = 1 + 2/f", "γ = 1 + f/2", "γ = f/2", "γ = 2/f"],
    "answer_en": "γ = 1 + 2/f",
    "answer_hi": "γ = 1 + 2/f",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "If in a code, 'ARTIFICIAL INTELLIGENCE' is written as 'LAICIFITRA ECNEGILLETNI', how is 'MACHINE LEARNING' written?",
    "question_hi": "यदि एक कोड में, 'ARTIFICIAL INTELLIGENCE' को 'LAICIFITRA ECNEGILLETNI' लिखा जाता है, तो 'MACHINE LEARNING' कैसे लिखा जाएगा?",
    "options_en": ["ENIHCAE GNINRAEL", "ENIHCAE GNINRAEL", "ENIHCAE GNINRAEL", "ENIHCAE GNINRAEL"],
    "options_hi": ["ENIHCAE GNINRAEL", "ENIHCAE GNINRAEL", "ENIHCAE GNINRAEL", "ENIHCAE GNINRAEL"],
    "answer_en": "ENIHCAE GNINRAEL",
    "answer_hi": "ENIHCAE GNINRAEL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of these is NOT a non-tax revenue?",
    "question_hi": "निम्नलिखित में से कौन सा गैर-कर राजस्व नहीं है?",
    "options_en": ["Interest receipts", "Dividends", "Customs duty", "Fees for services"],
    "options_hi": ["ब्याज प्राप्तियां", "लाभांश", "सीमा शुल्क", "सेवाओं के लिए शुल्क"],
    "answer_en": "Customs duty",
    "answer_hi": "सीमा शुल्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "A dishonest shopkeeper sells at 10% profit but uses 800 gm weight for 1 kg. His actual profit percentage is:",
    "question_hi": "एक बेईमान दुकानदार 10% लाभ पर बेचता है लेकिन 1 किलो के लिए 800 ग्राम के बाट का उपयोग करता है। उसका वास्तविक लाभ प्रतिशत है:",
    "options_en": ["27.5%", "32.5%", "37.5%", "42.5%"],
    "options_hi": ["27.5%", "32.5%", "37.5%", "42.5%"],
    "answer_en": "37.5%",
    "answer_hi": "37.5%",
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