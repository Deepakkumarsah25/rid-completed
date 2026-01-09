const questions = [
  {
    "num": 1,
    "question_en": "A man can row at 10 km/hr in still water. If the river flows at 5 km/hr and it takes him 1 hour to row to a place and come back, how far is the place?",
    "question_hi": "एक आदमी शांत जल में 10 किमी/घंटा की गति से नाव चला सकता है। यदि नदी 5 किमी/घंटा की गति से बहती है और उसे एक स्थान तक जाकर वापस आने में 1 घंटा लगता है, तो वह स्थान कितनी दूर है?",
    "options_en": ["3.75 km", "4.25 km", "3.50 km", "4.00 km"],
    "options_hi": ["3.75 किमी", "4.25 किमी", "3.50 किमी", "4.00 किमी"],
    "answer_en": "3.75 km",
    "answer_hi": "3.75 किमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The 'Doctrine of Basic Structure' of the Indian Constitution was established in which case?",
    "question_hi": "भारतीय संविधान का 'आधारभूत संरचना का सिद्धांत' किस मामले में स्थापित किया गया था?",
    "options_en": ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Maneka Gandhi Case"],
    "options_hi": ["गोलकनाथ मामला", "केसवानंद भारती मामला", "मिनर्वा मिल्स मामला", "मनेका गांधी मामला"],
    "answer_en": "Kesavananda Bharati Case",
    "answer_hi": "केसवानंद भारती मामला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If the roots of the equation x² - 2kx + k² - 4 = 0 are of opposite signs, then which of the following is true?",
    "question_hi": "यदि समीकरण x² - 2kx + k² - 4 = 0 के मूल विपरीत चिह्नों के हैं, तो निम्नलिखित में से कौन सा सत्य है?",
    "options_en": ["-2 < k < 2", "k < -2 or k > 2", "k = ±2", "k = 0"],
    "options_hi": ["-2 < k < 2", "k < -2 या k > 2", "k = ±2", "k = 0"],
    "answer_en": "-2 < k < 2",
    "answer_hi": "-2 < k < 2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "In a PN junction diode, the depletion region is formed due to:",
    "question_hi": "एक PN जंक्शन डायोड में, डिप्लेशन क्षेत्र बनता है:",
    "options_en": ["Diffusion of majority carriers", "Drift of minority carriers", "Recombination of electron-hole pairs", "Applied forward bias"],
    "options_hi": ["बहुसंख्यक वाहकों का विसरण", "अल्पसंख्यक वाहकों का अपवाह", "इलेक्ट्रॉन-होल युग्मों का पुनर्संयोजन", "लगाया गया अग्र अभिनति"],
    "answer_en": "Diffusion of majority carriers",
    "answer_hi": "बहुसंख्यक वाहकों का विसरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "A sum of money amounts to Rs. 1331 in 3 years and Rs. 1464.10 in 4 years at compound interest. What is the rate of interest?",
    "question_hi": "एक राशि चक्रवृद्धि ब्याज पर 3 वर्षों में 1331 रुपये और 4 वर्षों में 1464.10 रुपये हो जाती है। ब्याज की दर क्या है?",
    "options_en": ["5%", "8%", "10%", "12%"],
    "options_hi": ["5%", "8%", "10%", "12%"],
    "answer_en": "10%",
    "answer_hi": "10%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "In a certain code, if 'ENVIRONMENT' is written as 'VORNINEMMET', how is 'SUSTAINABLE' written in that code?",
    "question_hi": "एक निश्चित कोड में, यदि 'ENVIRONMENT' को 'VORNINEMMET' लिखा जाता है, तो उस कोड में 'SUSTAINABLE' कैसे लिखा जाएगा?",
    "options_en": ["ELBANIATSUS", "ELBANIATUSS", "ELBANIATSUU", "ELBANIATSUT"],
    "options_hi": ["ELBANIATSUS", "ELBANIATUSS", "ELBANIATSUU", "ELBANIATSUT"],
    "answer_en": "ELBANIATSUS",
    "answer_hi": "ELBANIATSUS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The 'Tobin Tax' is a proposed tax on:",
    "question_hi": "'टोबिन टैक्स' एक प्रस्तावित कर है:",
    "options_en": ["Carbon emissions", "Currency transactions", "Financial speculation", "International trade"],
    "options_hi": ["कार्बन उत्सर्जन", "मुद्रा लेनदेन", "वित्तीय सट्टा", "अंतर्राष्ट्रीय व्यापार"],
    "answer_en": "Currency transactions",
    "answer_hi": "मुद्रा लेनदेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "A reversible heat engine operates between temperatures T1 and T2 (T1 > T2). If its efficiency is 40%, what is the ratio T2/T1?",
    "question_hi": "एक उत्क्रमणीय ऊष्मा इंजन तापमान T1 और T2 (T1 > T2) के बीच संचालित होता है। यदि इसकी दक्षता 40% है, तो अनुपात T2/T1 क्या है?",
    "options_en": ["0.4", "0.5", "0.6", "0.7"],
    "options_hi": ["0.4", "0.5", "0.6", "0.7"],
    "answer_en": "0.6",
    "answer_hi": "0.6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "A, B, C are three points on a circle. If ∠ABC = 70°, what is the measure of the arc AC?",
    "question_hi": "A, B, C एक वृत्त पर तीन बिंदु हैं। यदि ∠ABC = 70°, तो चाप AC का माप क्या है?",
    "options_en": ["140°", "110°", "70°", "35°"],
    "options_hi": ["140°", "110°", "70°", "35°"],
    "answer_en": "140°",
    "answer_hi": "140°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of these elements has the highest melting point?",
    "question_hi": "निम्नलिखित में से किस तत्व का गलनांक सबसे अधिक है?",
    "options_en": ["Tungsten", "Carbon", "Osmium", "Rhenium"],
    "options_hi": ["टंगस्टन", "कार्बन", "ऑस्मियम", "रेनियम"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "If the 7th term of an AP is 34 and the 13th term is 64, what is the 20th term?",
    "question_hi": "यदि एक समांतर श्रेणी का 7वां पद 34 है और 13वां पद 64 है, तो 20वां पद क्या है?",
    "options_en": ["104", "108", "112", "116"],
    "options_hi": ["104", "108", "112", "116"],
    "answer_en": "104",
    "answer_hi": "104",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The 'Directive Principles of State Policy' in the Indian Constitution are inspired by the constitution of which country?",
    "question_hi": "भारतीय संविधान में 'राज्य के नीति निर्देशक सिद्धांत' किस देश के संविधान से प्रेरित हैं?",
    "options_en": ["USA", "UK", "Ireland", "Canada"],
    "options_hi": ["यूएसए", "यूके", "आयरलैंड", "कनाडा"],
    "answer_en": "Ireland",
    "answer_hi": "आयरलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "A capillary tube of radius r is immersed in a liquid. If the radius is doubled, the rise or fall of liquid in the capillary will:",
    "question_hi": "त्रिज्या r की एक केशिका नली को एक तरल में डुबोया जाता है। यदि त्रिज्या दोगुनी कर दी जाए, तो केशिका में तरल का उठना या गिरना होगा:",
    "options_en": ["Become half", "Become double", "Become one-fourth", "Remain same"],
    "options_hi": ["आधा हो जाएगा", "दोगुना हो जाएगा", "एक-चौथाई हो जाएगा", "समान रहेगा"],
    "answer_en": "Become half",
    "answer_hi": "आधा हो जाएगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of these is a characteristic of a 'public good'?",
    "question_hi": "निम्नलिखित में से कौन सा 'सार्वजनिक वस्तु' की विशेषता है?",
    "options_en": ["Excludability", "Rivalry", "Non-excludability", "Market pricing"],
    "options_hi": ["बहिष्करणीयता", "प्रतिद्वंद्विता", "गैर-बहिष्करणीयता", "बाजार मूल्य निर्धारण"],
    "answer_en": "Non-excludability",
    "answer_hi": "गैर-बहिष्करणीयता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "In a row of 40 students, A is 15th from the left and B is 20th from the right. How many students are between A and B?",
    "question_hi": "40 छात्रों की एक पंक्ति में, A बाएं से 15वां है और B दाएं से 20वां है। A और B के बीच कितने छात्र हैं?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The phenomenon of 'photoelectric effect' was explained by:",
    "question_hi": "'प्रकाशवैद्युत प्रभाव' की घटना की व्याख्या की थी:",
    "options_en": ["Max Planck", "Albert Einstein", "Niels Bohr", "Werner Heisenberg"],
    "options_hi": ["मैक्स प्लांक", "अल्बर्ट आइंस्टीन", "नील्स बोहर", "वर्नर हाइजेनबर्ग"],
    "answer_en": "Albert Einstein",
    "answer_hi": "अल्बर्ट आइंस्टीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If log₂(log₃(log₄x)) = 0, then x = ?",
    "question_hi": "यदि log₂(log₃(log₄x)) = 0, तो x = ?",
    "options_en": ["4³", "3⁴", "4⁴", "64"],
    "options_hi": ["4³", "3⁴", "4⁴", "64"],
    "answer_en": "64",
    "answer_hi": "64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The 'Laffer Curve' illustrates the relationship between:",
    "question_hi": "'लाफर वक्र' के बीच संबंध दर्शाता है:",
    "options_en": ["Inflation and unemployment", "Tax rates and tax revenue", "Interest rates and investment", "Money supply and prices"],
    "options_hi": ["मुद्रास्फीति और बेरोजगारी", "कर दरें और कर राजस्व", "ब्याज दरें और निवेश", "मुद्रा आपूर्ति और कीमतें"],
    "answer_en": "Tax rates and tax revenue",
    "answer_hi": "कर दरें और कर राजस्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "A projectile is fired at an angle θ with horizontal. If its time of flight is T and maximum height is H, then tanθ = ?",
    "question_hi": "एक प्रक्षेप्य को क्षैतिज से θ कोण पर दागा जाता है। यदि इसका उड़ान का समय T है और अधिकतम ऊंचाई H है, तो tanθ = ?",
    "options_en": ["4H/(gT²)", "8H/(gT²)", "4H/gT", "8H/gT"],
    "options_hi": ["4H/(gT²)", "8H/(gT²)", "4H/gT", "8H/gT"],
    "answer_en": "4H/(gT²)",
    "answer_hi": "4H/(gT²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of these materials has the highest dielectric strength?",
    "question_hi": "निम्नलिखित में से किस सामग्री की परावैद्युत सामर्थ्य सबसे अधिक है?",
    "options_en": ["Air", "Paper", "Mica", "Glass"],
    "options_hi": ["वायु", "कागज", "अभ्रक", "कांच"],
    "answer_en": "Mica",
    "answer_hi": "अभ्रक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If the sum of first n terms of an AP is 3n² + 2n, what is the common difference?",
    "question_hi": "यदि एक समांतर श्रेणी के पहले n पदों का योग 3n² + 2n है, तो सार्व अंतर क्या है?",
    "options_en": ["3", "6", "9", "12"],
    "options_hi": ["3", "6", "9", "12"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The 'Bretton Woods System' collapsed primarily due to:",
    "question_hi": "'ब्रेटन वुड्स प्रणाली' मुख्य रूप से कारण से विफल हुई:",
    "options_en": ["Oil crisis", "US dollar devaluation", "World War II", "Great Depression"],
    "options_hi": ["तेल संकट", "अमेरिकी डॉलर का अवमूल्यन", "द्वितीय विश्व युद्ध", "महामंदी"],
    "answer_en": "US dollar devaluation",
    "answer_hi": "अमेरिकी डॉलर का अवमूल्यन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The radius of gyration of a solid sphere of radius R about its diameter is:",
    "question_hi": "त्रिज्या R के एक ठोस गोले का अपने व्यास के सापेक्ष परिभ्रमण त्रिज्या है:",
    "options_en": ["R/√5", "R√(2/5)", "R/√2", "R√(3/5)"],
    "options_hi": ["R/√5", "R√(2/5)", "R/√2", "R√(3/5)"],
    "answer_en": "R√(2/5)",
    "answer_hi": "R√(2/5)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of these is NOT a characteristic of monopolistic competition?",
    "question_hi": "निम्नलिखित में से कौन सा एकाधिकार प्रतियोगिता की विशेषता नहीं है?",
    "options_en": ["Many sellers", "Product differentiation", "Perfect knowledge", "Free entry and exit"],
    "options_hi": ["कई विक्रेता", "उत्पाद विभेदीकरण", "पूर्ण ज्ञान", "मुक्त प्रवेश और निकास"],
    "answer_en": "Perfect knowledge",
    "answer_hi": "पूर्ण ज्ञान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If the equations x² - 4x + k = 0 and x² + kx - 4 = 0 have a common root, then k = ?",
    "question_hi": "यदि समीकरण x² - 4x + k = 0 और x² + kx - 4 = 0 का एक उभयनिष्ठ मूल है, तो k = ?",
    "options_en": ["2", "3", "-3", "0"],
    "options_hi": ["2", "3", "-3", "0"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which of these is NOT a type of optical fiber based on refractive index profile?",
    "question_hi": "निम्नलिखित में से कौन सा अपवर्तनांक प्रोफ़ाइल के आधार पर ऑप्टिकल फाइबर का प्रकार नहीं है?",
    "options_en": ["Step-index fiber", "Graded-index fiber", "Single-mode fiber", "Multimode fiber"],
    "options_hi": ["स्टेप-इंडेक्स फाइबर", "ग्रेडेड-इंडेक्स फाइबर", "सिंगल-मोड फाइबर", "मल्टीमोड फाइबर"],
    "answer_en": "Single-mode fiber",
    "answer_hi": "सिंगल-मोड फाइबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "A man invests Rs. 10,000 at 10% compound interest for 2 years. At the end of 2 years, he adds Rs. x to the amount. If the total amount becomes Rs. 15,000 at the end of 3 years, what is x?",
    "question_hi": "एक आदमी 10,000 रुपये 10% चक्रवृद्धि ब्याज पर 2 वर्षों के लिए निवेश करता है। 2 वर्षों के अंत में, वह राशि में x रुपये जोड़ता है। यदि कुल राशि 3 वर्षों के अंत में 15,000 रुपये हो जाती है, तो x क्या है?",
    "options_en": ["1000", "2000", "3000", "4000"],
    "options_hi": ["1000", "2000", "3000", "4000"],
    "answer_en": "2000",
    "answer_hi": "2000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which of these is NOT a feature of the Indian Constitution?",
    "question_hi": "निम्नलिखित में से कौन सी भारतीय संविधान की विशेषता नहीं है?",
    "options_en": ["Parliamentary form of government", "Federal structure", "Presidential system", "Independent judiciary"],
    "options_hi": ["सरकार का संसदीय रूप", "संघीय संरचना", "राष्ट्रपति प्रणाली", "स्वतंत्र न्यायपालिका"],
    "answer_en": "Presidential system",
    "answer_hi": "राष्ट्रपति प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The resolving power of a telescope is directly proportional to:",
    "question_hi": "एक दूरबीन की विभेदन क्षमता के सीधे आनुपातिक है:",
    "options_en": ["Diameter of objective", "Wavelength of light", "Focal length", "Magnification"],
    "options_hi": ["अभिदृश्यक का व्यास", "प्रकाश की तरंगदैर्ध्य", "फोकल लंबाई", "आवर्धन"],
    "answer_en": "Diameter of objective",
    "answer_hi": "अभिदृश्यक का व्यास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "In a certain code, 'MATHEMATICS' is written as 'TAMHTAMCISE'. How is 'ENGINEERING' written in that code?",
    "question_hi": "एक निश्चित कोड में, 'MATHEMATICS' को 'TAMHTAMCISE' लिखा जाता है। उस कोड में 'ENGINEERING' कैसे लिखा जाएगा?",
    "options_en": ["GNINEENIREG", "GNINEENIRGE", "GNINEENIRGE", "GNINEENIREG"],
    "options_hi": ["GNINEENIREG", "GNINEENIRGE", "GNINEENIRGE", "GNINEENIREG"],
    "answer_en": "GNINEENIREG",
    "answer_hi": "GNINEENIREG",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which of these is NOT a component of the Human Development Index (HDI)?",
    "question_hi": "निम्नलिखित में से कौन सा मानव विकास सूचकांक (एचडीआई) का घटक नहीं है?",
    "options_en": ["Life expectancy", "Education", "Per capita income", "Healthcare facilities"],
    "options_hi": ["जीवन प्रत्याशा", "शिक्षा", "प्रति व्यक्ति आय", "स्वास्थ्य सुविधाएं"],
    "answer_en": "Healthcare facilities",
    "answer_hi": "स्वास्थ्य सुविधाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "If sinθ + cosθ = √2, then what is the value of tanθ + cotθ?",
    "question_hi": "यदि sinθ + cosθ = √2, तो tanθ + cotθ का मान क्या है?",
    "options_en": ["1", "2", "√2", "2√2"],
    "options_hi": ["1", "2", "√2", "2√2"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The 'Washington Consensus' refers to:",
    "question_hi": "'वाशिंगटन सहमति' संदर्भित करती है:",
    "options_en": ["US foreign policy", "Set of economic policies", "Climate change agreement", "Nuclear disarmament"],
    "options_hi": ["अमेरिकी विदेश नीति", "आर्थिक नीतियों का समूह", "जलवायु परिवर्तन समझौता", "परमाणु निरस्त्रीकरण"],
    "answer_en": "Set of economic policies",
    "answer_hi": "आर्थिक नीतियों का समूह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Two pipes A and B can fill a tank in 12 and 16 minutes respectively. If both are opened together and after 4 minutes, pipe A is closed, how much longer will it take to fill the tank?",
    "question_hi": "दो पाइप A और B एक टैंक को क्रमशः 12 और 16 मिनट में भर सकते हैं। यदि दोनों एक साथ खोले जाते हैं और 4 मिनट के बाद, पाइप A बंद कर दिया जाता है, तो टैंक को भरने में और कितना समय लगेगा?",
    "options_en": ["6 minutes", "7 minutes", "8 minutes", "9 minutes"],
    "options_hi": ["6 मिनट", "7 मिनट", "8 मिनट", "9 मिनट"],
    "answer_en": "6 minutes",
    "answer_hi": "6 मिनट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of these is NOT a property of a ferromagnetic material?",
    "question_hi": "निम्नलिखित में से कौन सा लौहचुम्बकीय पदार्थ का गुण नहीं है?",
    "options_en": ["High permeability", "Hysteresis", "Curie temperature", "Diamagnetism"],
    "options_hi": ["उच्च पारगम्यता", "हिस्टैरिसीस", "क्यूरी तापमान", "प्रतिचुम्बकत्व"],
    "answer_en": "Diamagnetism",
    "answer_hi": "प्रतिचुम्बकत्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "If the area of a circle inscribed in an equilateral triangle is 4π cm², what is the area of the triangle?",
    "question_hi": "यदि एक समबाहु त्रिभुज में अंकित एक वृत्त का क्षेत्रफल 4π सेमी² है, तो त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["12√3 cm²", "16√3 cm²", "20√3 cm²", "24√3 cm²"],
    "options_hi": ["12√3 सेमी²", "16√3 सेमी²", "20√3 सेमी²", "24√3 सेमी²"],
    "answer_en": "12√3 cm²",
    "answer_hi": "12√3 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The 'White Revolution' in India was associated with:",
    "question_hi": "भारत में 'श्वेत क्रांति' संबद्ध थी:",
    "options_en": ["Milk production", "Egg production", "Cotton production", "Sugar production"],
    "options_hi": ["दूध उत्पादन", "अंडा उत्पादन", "कपास उत्पादन", "चीनी उत्पादन"],
    "answer_en": "Milk production",
    "answer_hi": "दूध उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "In a transformer, if the primary voltage is doubled and the number of turns in the primary is halved, what happens to the secondary voltage?",
    "question_hi": "एक ट्रांसफार्मर में, यदि प्राथमिक वोल्टेज दोगुना कर दिया जाए और प्राथमिक में घुमावों की संख्या आधी कर दी जाए, तो द्वितीयक वोल्टेज क्या होता है?",
    "options_en": ["Becomes half", "Becomes double", "Becomes four times", "Remains same"],
    "options_hi": ["आधा हो जाता है", "दोगुना हो जाता है", "चार गुना हो जाता है", "समान रहता है"],
    "answer_en": "Remains same",
    "answer_hi": "समान रहता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "In a group of 100 people, 70 own a car, 80 own a bike, and 60 own both. How many own neither car nor bike?",
    "question_hi": "100 लोगों के समूह में, 70 के पास कार है, 80 के पास बाइक है और 60 के पास दोनों हैं। कितने के पास न तो कार है और न ही बाइक?",
    "options_en": ["10", "15", "20", "25"],
    "options_hi": ["10", "15", "20", "25"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which of these is NOT a type of gear?",
    "question_hi": "निम्नलिखित में से कौन सा गियर का प्रकार नहीं है?",
    "options_en": ["Spur gear", "Helical gear", "Bevel gear", "Cam gear"],
    "options_hi": ["स्पर गियर", "हेलिकल गियर", "बेवल गियर", "कैम गियर"],
    "answer_en": "Cam gear",
    "answer_hi": "कैम गियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "If α and β are the roots of x² - 3x + 5 = 0, then what is the value of α² + β²?",
    "question_hi": "यदि α और β समीकरण x² - 3x + 5 = 0 के मूल हैं, तो α² + β² का मान क्या है?",
    "options_en": ["-1", "1", "3", "5"],
    "options_hi": ["-1", "1", "3", "5"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The 'Ramsar Convention' is related to:",
    "question_hi": "'रामसर कन्वेंशन' संबंधित है:",
    "options_en": ["Wetlands conservation", "Endangered species", "Marine pollution", "Desertification"],
    "options_hi": ["आर्द्रभूमि संरक्षण", "लुप्तप्राय प्रजातियां", "समुद्री प्रदूषण", "मरुस्थलीकरण"],
    "answer_en": "Wetlands conservation",
    "answer_hi": "आर्द्रभूमि संरक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "A heat engine has an efficiency of 25%. If it rejects 1500 J of heat to the sink, how much heat does it absorb from the source?",
    "question_hi": "एक ऊष्मा इंजन की दक्षता 25% है। यदि यह सिंक को 1500 J ऊष्मा अस्वीकार करता है, तो यह स्रोत से कितनी ऊष्मा अवशोषित करता है?",
    "options_en": ["2000 J", "2250 J", "2500 J", "3000 J"],
    "options_hi": ["2000 J", "2250 J", "2500 J", "3000 J"],
    "answer_en": "2000 J",
    "answer_hi": "2000 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which of these is NOT a function of the Reserve Bank of India?",
    "question_hi": "निम्नलिखित में से कौन सा भारतीय रिजर्व बैंक का कार्य नहीं है?",
    "options_en": ["Issuing currency", "Regulating foreign exchange", "Formulating fiscal policy", "Banker to the government"],
    "options_hi": ["मुद्रा जारी करना", "विदेशी मुद्रा विनियमित करना", "राजकोषीय नीति तैयार करना", "सरकार का बैंकर"],
    "answer_en": "Formulating fiscal policy",
    "answer_hi": "राजकोषीय नीति तैयार करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "If sinθ = 12/13 and θ is acute, what is the value of (sinθ + cosθ)/(sinθ - cosθ)?",
    "question_hi": "यदि sinθ = 12/13 और θ न्यून कोण है, तो (sinθ + cosθ)/(sinθ - cosθ) का मान क्या है?",
    "options_en": ["5", "7", "12", "25"],
    "options_hi": ["5", "7", "12", "25"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which of these is NOT a feature of the Indian political system?",
    "question_hi": "निम्नलिखित में से कौन सी भारतीय राजनीतिक प्रणाली की विशेषता नहीं है?",
    "options_en": ["Multi-party system", "Federal structure", "President as head of government", "Parliamentary democracy"],
    "options_hi": ["बहु-दलीय प्रणाली", "संघीय संरचना", "सरकार के प्रमुख के रूप में राष्ट्रपति", "संसदीय लोकतंत्र"],
    "answer_en": "President as head of government",
    "answer_hi": "सरकार के प्रमुख के रूप में राष्ट्रपति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The bulk modulus of a material is K. If it is subjected to a pressure P, the fractional change in volume is:",
    "question_hi": "एक पदार्थ का आयतन प्रत्यास्थता गुणांक K है। यदि इसे दबाव P के अधीन किया जाता है, तो आयतन में आंशिक परिवर्तन है:",
    "options_en": ["P/K", "K/P", "P/(3K)", "3P/K"],
    "options_hi": ["P/K", "K/P", "P/(3K)", "3P/K"],
    "answer_en": "P/K",
    "answer_hi": "P/K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "In a certain code, 'TECHNOLOGY' is written as 'YLGOTCOHET'. How is 'ENGINEERING' written in that code?",
    "question_hi": "एक निश्चित कोड में, 'TECHNOLOGY' को 'YLGOTCOHET' लिखा जाता है। उस कोड में 'ENGINEERING' कैसे लिखा जाएगा?",
    "options_en": ["GNIREEIGNIN", "GNIREEIGNNI", "GNIREEINGNI", "GNIREEIGNIN"],
    "options_hi": ["GNIREEIGNIN", "GNIREEIGNNI", "GNIREEINGNI", "GNIREEIGNIN"],
    "answer_en": "GNIREEIGNIN",
    "answer_hi": "GNIREEIGNIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of these is NOT a method of measuring national income?",
    "question_hi": "निम्नलिखित में से कौन सा राष्ट्रीय आय मापने की विधि नहीं है?",
    "options_en": ["Income method", "Expenditure method", "Output method", "Savings method"],
    "options_hi": ["आय विधि", "व्यय विधि", "उत्पादन विधि", "बचत विधि"],
    "answer_en": "Savings method",
    "answer_hi": "बचत विधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "A shopkeeper marks his goods 30% above cost price but allows 10% discount. If he uses a weight of 800 gm instead of 1 kg, what is his profit percentage?",
    "question_hi": "एक दुकानदार अपने माल को लागत मूल्य से 30% अधिक अंकित करता है लेकिन 10% छूट देता है। यदि वह 1 किलो के बजाय 800 ग्राम के बाट का उपयोग करता है, तो उसका लाभ प्रतिशत क्या है?",
    "options_en": ["46.25%", "48.75%", "50.25%", "52.50%"],
    "options_hi": ["46.25%", "48.75%", "50.25%", "52.50%"],
    "answer_en": "46.25%",
    "answer_hi": "46.25%",
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