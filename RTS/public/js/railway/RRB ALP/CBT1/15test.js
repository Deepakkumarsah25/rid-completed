const questions = [
  {
    "num": 1,
    "question_en": "What is the minimal model program's classification of algebraic varieties of Kodaira dimension 0?",
    "question_hi": "कोदैरा आयाम 0 के बीजगणितीय बहुरूपताओं का न्यूनतम मॉडल कार्यक्रम का वर्गीकरण क्या है?",
    "options_en": ["Calabi-Yau varieties", "Abelian varieties", "K3 surfaces and Enriques surfaces", "All of the above"],
    "options_hi": ["कालाबी-याउ बहुरूपताएँ", "एबेलियन बहुरूपताएँ", "K3 सतहें और एनरिक्स सतहें", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In the Langlands program, what does the geometric Satake equivalence relate?",
    "question_hi": "लैंगलैंड्स कार्यक्रम में, ज्यामितीय सताके समतुल्यता क्या संबंधित करती है?",
    "options_en": ["Representations of G and perverse sheaves on affine Grassmannian", "Automorphic forms and Galois representations", "L-functions and modular forms", "None of these"],
    "options_hi": ["G के निरूपण और एफाइन ग्रासमैनियन पर व्यतिक्रमी महीन", "स्वरूपसम रूप और गैलोइस निरूपण", "L-फलन और मॉड्यूलर रूप", "इनमें से कोई नहीं"],
    "answer_en": "Representations of G and perverse sheaves on affine Grassmannian",
    "answer_hi": "G के निरूपण और एफाइन ग्रासमैनियन पर व्यतिक्रमी महीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the Atiyah-Singer index theorem compute for elliptic operators on compact manifolds?",
    "question_hi": "अटियाह-सिंगर सूचकांक प्रमेय संहत मैनिफोल्ड पर दीर्घवृत्तीय संकारकों के लिए क्या गणना करती है?",
    "options_en": ["Analytical index", "Topological index", "Both are equal", "None of these"],
    "options_hi": ["विश्लेषणात्मक सूचकांक", "टोपोलॉजिकल सूचकांक", "दोनों समान हैं", "इनमें से कोई नहीं"],
    "answer_en": "Both are equal",
    "answer_hi": "दोनों समान हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "In derived algebraic geometry, what is the homotopy theory used to study schemes?",
    "question_hi": "व्युत्पन्न बीजगणितीय ज्यामिति में, योजनाओं का अध्ययन करने के लिए किस समरूपता सिद्धांत का उपयोग किया जाता है?",
    "options_en": ["Simplicial sets", "∞-categories", "Model categories", "All of the above"],
    "options_hi": ["सिम्प्लिसियल समुच्चय", "∞-श्रेणियाँ", "मॉडल श्रेणियाँ", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the statement of the Hodge conjecture?",
    "question_hi": "हॉज अनुमान का कथन क्या है?",
    "options_en": ["Every Hodge class is algebraic", "Every algebraic cycle is Hodge", "Both are equivalent", "None of these"],
    "options_hi": ["प्रत्येक हॉज वर्ग बीजगणितीय है", "प्रत्येक बीजगणितीय चक्र हॉज है", "दोनों समतुल्य हैं", "इनमें से कोई नहीं"],
    "answer_en": "Every Hodge class is algebraic",
    "answer_hi": "प्रत्येक हॉज वर्ग बीजगणितीय है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "In symplectic geometry, what does Gromov's nonsqueezing theorem state?",
    "question_hi": "सिम्प्लेक्टिक ज्यामिति में, ग्रोमोव का नॉनस्क्वीजिंग प्रमेय क्या कहता है?",
    "options_en": ["A symplectic ball cannot be squeezed into a smaller cylinder", "Symplectic capacities exist", "Both statements", "None of these"],
    "options_hi": ["एक सिम्प्लेक्टिक गेंद को छोटे सिलिंडर में निचोड़ा नहीं जा सकता", "सिम्प्लेक्टिक क्षमताएँ मौजूद हैं", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the geometric Langlands correspondence for GL(n)?",
    "question_hi": "GL(n) के लिए ज्यामितीय लैंगलैंड्स संगतता क्या है?",
    "options_en": ["Equivalence between D-modules on Bun_G and sheaves on Loc_G^L", "Relation between automorphic forms and Galois representations", "Both are aspects", "None of these"],
    "options_hi": ["Bun_G पर D-मॉड्यूल और Loc_G^L पर महीनों के बीच समतुल्यता", "स्वरूपसम रूप और गैलोइस निरूपण के बीच संबंध", "दोनों पहलू हैं", "इनमें से कोई नहीं"],
    "answer_en": "Equivalence between D-modules on Bun_G and sheaves on Loc_G^L",
    "answer_hi": "Bun_G पर D-मॉड्यूल और Loc_G^L पर महीनों के बीच समतुल्यता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does the Novikov conjecture assert about higher signatures?",
    "question_hi": "उच्चतर हस्ताक्षरों के बारे में नोविकोव अनुमान क्या दावा करता है?",
    "options_en": ["They are homotopy invariants", "They are bordism invariants", "Both statements", "None of these"],
    "options_hi": ["वे समरूपता अचर हैं", "वे बोर्डिज्म अचर हैं", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "They are homotopy invariants",
    "answer_hi": "वे समरूपता अचर हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "In the theory of motives, what is the category of mixed motives supposed to be?",
    "question_hi": "प्रेरकों के सिद्धांत में, मिश्रित प्रेरकों की श्रेणी क्या होनी चाहिए?",
    "options_en": ["A Tannakian category", "An abelian category", "Both properties", "Neither property"],
    "options_hi": ["एक टैनाकियन श्रेणी", "एक एबेलियन श्रेणी", "दोनों गुण", "कोई गुण नहीं"],
    "answer_en": "Both properties",
    "answer_hi": "दोनों गुण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the Riemann-Hilbert correspondence establish?",
    "question_hi": "रीमैन-हिल्बर्ट संगतता क्या स्थापित करती है?",
    "options_en": ["Equivalence between regular holonomic D-modules and perverse sheaves", "Relation between differential equations and monodromy", "Both aspects", "None of these"],
    "options_hi": ["नियमित होलोनोमिक D-मॉड्यूल और व्यतिक्रमी महीनों के बीच समतुल्यता", "अवकल समीकरण और मोनोड्रोमी के बीच संबंध", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the significance of mirror symmetry in string theory?",
    "question_hi": "स्ट्रिंग सिद्धांत में दर्पण सममिति का क्या महत्व है?",
    "options_en": ["Relates symplectic and complex geometry", "Exchange of A-model and B-model", "Both statements", "None of these"],
    "options_hi": ["सिम्प्लेक्टिक और सम्मिश्र ज्यामिति को संबंधित करती है", "A-मॉडल और B-मॉडल का आदान-प्रदान", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does the Baum-Connes conjecture predict?",
    "question_hi": "बॉम-कोनेस अनुमान क्या भविष्यवाणी करता है?",
    "options_en": ["K-theory of reduced C*-algebra equals equivariant K-homology", "Index theorem for foliations", "Both aspects", "None of these"],
    "options_hi": ["अपचित C*-बीजगणित की K-सिद्धांत समतुल्य K-सम्मिश्र के बराबर है", "पर्णवितियों के लिए सूचकांक प्रमेय", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "K-theory of reduced C*-algebra equals equivariant K-homology",
    "answer_hi": "अपचित C*-बीजगणित की K-सिद्धांत समतुल्य K-सम्मिश्र के बराबर है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the significance of the Taniyama-Shimura-Weil conjecture?",
    "question_hi": "तानियामा-शिमुरा-वेइल अनुमान का क्या महत्व है?",
    "options_en": ["Every elliptic curve over ℚ is modular", "Key to proving Fermat's Last Theorem", "Both statements", "None of these"],
    "options_hi": ["ℚ पर प्रत्येक दीर्घवृत्तीय वक्र मॉड्यूलर है", "फर्मेट के अंतिम प्रमेय को सिद्ध करने की कुंजी", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the Poincaré conjecture state about 3-manifolds?",
    "question_hi": "3-मैनिफोल्ड के बारे में पोयंकारे अनुमान क्या कहता है?",
    "options_en": ["Simply connected closed 3-manifold is homeomorphic to S³", "Characterization of 3-sphere", "Both statements", "None of these"],
    "options_hi": ["सरल संयोजित संवृत 3-मैनिफोल्ड S³ के समाकृतिक है", "3-गोले का अभिलक्षणीकरण", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the geometric meaning of the Jacobian conjecture?",
    "question_hi": "जैकबियन अनुमान का ज्यामितीय अर्थ क्या है?",
    "options_en": ["Polynomial map with constant Jacobian is invertible", "Algebraic characterization of automorphisms of affine space", "Both aspects", "None of these"],
    "options_hi": ["स्थिर जैकबियन वाला बहुपदीय मानचित्र व्युत्क्रमणीय है", "एफाइन समष्टि के समाकृतिकता का बीजगणितीय अभिलक्षणीकरण", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does the Bogomolov-Miyaoka-Yau inequality bound?",
    "question_hi": "बोगोमोलोव-मियाओका-याउ असमता क्या बांधती है?",
    "options_en": ["Chern numbers of surfaces of general type", "Ratio c₁²/c₂ for minimal surfaces", "Both statements", "None of these"],
    "options_hi": ["सामान्य प्रकार की सतहों के चर्न संख्याएँ", "न्यूनतम सतहों के लिए अनुपात c₁²/c₂", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the statement of the Standard Conjectures on algebraic cycles?",
    "question_hi": "बीजगणितीय चक्रों पर मानक अनुमानों का कथन क्या है?",
    "options_en": ["Künneth components are algebraic", "Numerical equivalence equals homological equivalence", "Both conjectures", "None of these"],
    "options_hi": ["कुन्नेथ घटक बीजगणितीय हैं", "संख्यात्मक तुल्यता सम्मिश्र तुल्यता के बराबर है", "दोनों अनुमान", "इनमें से कोई नहीं"],
    "answer_en": "Both conjectures",
    "answer_hi": "दोनों अनुमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the Minimal Model Program aim to achieve?",
    "question_hi": "न्यूनतम मॉडल कार्यक्रम का उद्देश्य क्या है?",
    "options_en": ["Canonical model for algebraic varieties", "Classification in birational geometry", "Both goals", "None of these"],
    "options_hi": ["बीजगणितीय बहुरूपताओं के लिए विहित मॉडल", "तुल्यक सममिति ज्यामिति में वर्गीकरण", "दोनों लक्ष्य", "इनमें से कोई नहीं"],
    "answer_en": "Both goals",
    "answer_hi": "दोनों लक्ष्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the significance of the Kontsevich formality theorem?",
    "question_hi": "कोन्त्सेविच औपचारिकता प्रमेय का क्या महत्व है?",
    "options_en": ["Deformation quantization of Poisson manifolds", "Equivalence of L∞-structures", "Both aspects", "None of these"],
    "options_hi": ["पॉइसन मैनिफोल्ड का विरूपण क्वांटीकरण", "L∞-संरचनाओं की समतुल्यता", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does the Milnor conjecture (proved by Voevodsky) relate?",
    "question_hi": "मिल्नोर अनुमान (वोवोद्स्की द्वारा सिद्ध) क्या संबंधित करता है?",
    "options_en": ["Milnor K-theory and Galois cohomology", "Quadratic forms and étale cohomology", "Both statements", "None of these"],
    "options_hi": ["मिल्नोर K-सिद्धांत और गैलोइस सहसम्मिश्र", "द्विघात रूप और étale सहसम्मिश्र", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the Weil conjectures' statement about zeta functions of varieties over finite fields?",
    "question_hi": "परिमित क्षेत्रों पर बहुरूपताओं के जीटा फलनों के बारे में वेइल अनुमानों का कथन क्या है?",
    "options_en": ["Rationality", "Functional equation", "Riemann hypothesis", "All of the above"],
    "options_hi": ["परिमेयता", "प्रकार्यात्मक समीकरण", "रीमैन परिकल्पना", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the Dehn filling theorem in 3-manifold topology state?",
    "question_hi": "3-मैनिफोल्ड टोपोलॉजी में डेन भरण प्रमेय क्या कहता है?",
    "options_en": ["Most Dehn fillings yield hyperbolic manifolds", "Thurston's hyperbolic Dehn surgery theorem", "Both statements", "None of these"],
    "options_hi": ["अधिकांश डेन भरण अतिपरवलयिक मैनिफोल्ड देते हैं", "थर्स्टन का अतिपरवलयिक डेन शल्य प्रमेय", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the significance of the Nash embedding theorem?",
    "question_hi": "नैश एम्बेडिंग प्रमेय का क्या महत्व है?",
    "options_en": ["Every Riemannian manifold can be isometrically embedded", "Solution to problem in differential geometry", "Both aspects", "None of these"],
    "options_hi": ["प्रत्येक रीमैनियन मैनिफोल्ड सममितीय रूप से एम्बेड किया जा सकता है", "अवकल ज्यामिति में समस्या का समाधान", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does the Gelfand-Naimark theorem establish?",
    "question_hi": "गेल्फांड-नाइमार्क प्रमेय क्या स्थापित करती है?",
    "options_en": ["Every C*-algebra is isometrically *-isomorphic to algebra of operators", "Duality between spaces and algebras", "Both statements", "None of these"],
    "options_hi": ["प्रत्येक C*-बीजगणित संकारकों के बीजगणित के लिए सममितीय रूप से *-समाकृतिक है", "समष्टियों और बीजगणितों के बीच द्वैतता", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the statement of the Carathéodory conjecture?",
    "question_hi": "काराथेओडोरी अनुमान का कथन क्या है?",
    "options_en": ["Every smooth convex surface has at least 2 umbilic points", "Global property of surfaces in ℝ³", "Both statements", "None of these"],
    "options_hi": ["प्रत्येक चिकनी उत्तल सतह में कम से कम 2 अम्बिलिक बिंदु होते हैं", "ℝ³ में सतहों का वैश्विक गुण", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the Arnold conjecture in symplectic geometry predict?",
    "question_hi": "सिम्प्लेक्टिक ज्यामिति में आर्नोल्ड अनुमान क्या भविष्यवाणी करता है?",
    "options_en": ["Number of fixed points of Hamiltonian diffeomorphisms", "Relation to Morse theory", "Both aspects", "None of these"],
    "options_hi": ["हैमिल्टोनियन समरूपता के नियत बिंदुओं की संख्या", "मोर्स सिद्धांत से संबंध", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the significance of the Chern-Gauss-Bonnet theorem?",
    "question_hi": "चर्न-गॉस-बोनेट प्रमेय का क्या महत्व है?",
    "options_en": ["Euler characteristic equals integral of curvature", "Global differential geometry result", "Both aspects", "None of these"],
    "options_hi": ["यूलर अभिलाक्षणिक वक्रता के समाकल के बराबर है", "वैश्विक अवकल ज्यामिति परिणाम", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does the Uniformization theorem for Riemann surfaces state?",
    "question_hi": "रीमैन सतहों के लिए एकसमानीकरण प्रमेय क्या कहता है?",
    "options_en": ["Every simply connected Riemann surface is conformally equivalent to sphere, plane, or disk", "Classification of Riemann surfaces", "Both statements", "None of these"],
    "options_hi": ["प्रत्येक सरल संयोजित रीमैन सतह गोले, तल, या डिस्क के संरूपीय रूप से समतुल्य है", "रीमैन सतहों का वर्गीकरण", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the statement of the Four Color Theorem?",
    "question_hi": "चार रंग प्रमेय का कथन क्या है?",
    "options_en": ["Every planar graph is 4-colorable", "Map coloring problem solution", "Both statements", "None of these"],
    "options_hi": ["प्रत्येक समतलीय ग्राफ 4-रंगनीय है", "मानचित्र रंगाई समस्या का समाधान", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the H-principle in differential topology state?",
    "question_hi": "अवकल टोपोलॉजी में H-सिद्धांत क्या कहता है?",
    "options_en": ["Homotopic solutions can be deformed to genuine solutions", "Flexibility versus rigidity", "Both aspects", "None of these"],
    "options_hi": ["समरूपीय समाधानों को वास्तविक समाधानों में विरूपित किया जा सकता है", "लचीलापन बनाम दृढ़ता", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    attempted: false,
    selected: ""
  },
  {
    "num": 31,
    "question_en": "What is the significance of the Atiyah-Patodi-Singer index theorem?",
    "question_hi": "अटियाह-पटोडी-सिंगर सूचकांक प्रमेय का क्या महत्व है?",
    "options_en": ["Index theorem for manifolds with boundary", "Includes eta invariant", "Both aspects", "None of these"],
    "options_hi": ["सीमा वाले मैनिफोल्ड के लिए सूचकांक प्रमेय", "एटा अचर शामिल है", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does the Mordell-Weil theorem state about elliptic curves?",
    "question_hi": "दीर्घवृत्तीय वक्रों के बारे में मॉर्डेल-वेल प्रमेय क्या कहता है?",
    "options_en": ["Group of rational points is finitely generated", "Mordell-Weil group structure", "Both statements", "None of these"],
    "options_hi": ["परिमेय बिंदुओं का समूह परिमित रूप से उत्पन्न है", "मॉर्डेल-वेल समूह संरचना", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the statement of the Cartan-Hadamard theorem?",
    "question_hi": "कार्तान-हैडमार्ड प्रमेय का कथन क्या है?",
    "options_en": ["Simply connected complete manifold with nonpositive curvature is diffeomorphic to ℝⁿ", "Global structure of manifolds", "Both statements", "None of these"],
    "options_hi": ["अऋणात्मक वक्रता वाला सरल संयोजित पूर्ण मैनिफोल्ड ℝⁿ के समरूपीय है", "मैनिफोल्ड की वैश्विक संरचना", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the Resolution of Singularities theorem achieve?",
    "question_hi": "विचित्रताओं के संकल्प प्रमेय क्या प्राप्त करता है?",
    "options_en": ["Transforms singular variety into smooth variety", "Hironaka's theorem in characteristic 0", "Both statements", "None of these"],
    "options_hi": ["विचित्र बहुरूपता को चिकनी बहुरूपता में रूपांतरित करता है", "अभिलाक्षणिक 0 में हिरोनाका का प्रमेय", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the significance of the Stone-von Neumann theorem?",
    "question_hi": "स्टोन-वॉन न्यूमैन प्रमेय का क्या महत्व है?",
    "options_en": ["Uniqueness of Schrödinger representation of canonical commutation relations", "Foundational for quantum mechanics", "Both aspects", "None of these"],
    "options_hi": ["विहित क्रमविनिमय संबंधों के श्रोडिंगर निरूपण की विशिष्टता", "क्वांटम यांत्रिकी के लिए मौलिक", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does the Bieberbach conjecture (proved by de Branges) state about power series coefficients?",
    "question_hi": "शक्ति श्रृंखला गुणांकों के बारे में बीबरबाख अनुमान (डी ब्रांज द्वारा सिद्ध) क्या कहता है?",
    "options_en": ["|a_n| ≤ n for univalent functions", "Coefficient bounds for schlicht functions", "Both statements", "None of these"],
    "options_hi": ["एकैकी फलनों के लिए |a_n| ≤ n", "श्लिच्ट फलनों के लिए गुणांक सीमाएँ", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the statement of the Kepler conjecture on sphere packing?",
    "question_hi": "गोले के पैकिंग पर केप्लर अनुमान का कथन क्या है?",
    "options_en": ["Face-centered cubic packing is densest", "Solution to sphere packing problem", "Both statements", "None of these"],
    "options_hi": ["फेस-सेंटर्ड क्यूबिक पैकिंग सबसे सघन है", "गोले पैकिंग समस्या का समाधान", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the Artin reciprocity law generalize?",
    "question_hi": "आर्टिन पारस्परिकता नियम क्या व्यापक बनाता है?",
    "options_en": ["Quadratic reciprocity to all abelian extensions", "Class field theory central result", "Both statements", "None of these"],
    "options_hi": ["सभी एबेलियन विस्तारों के लिए द्विघात पारस्परिकता", "वर्ग क्षेत्र सिद्धांत केंद्रीय परिणाम", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the significance of the Thurston geometrization conjecture?",
    "question_hi": "थर्स्टन ज्यामितीकरण अनुमान का क्या महत्व है?",
    "options_en": ["Every 3-manifold decomposes into geometric pieces", "Classification of 3-manifolds", "Both aspects", "None of these"],
    "options_hi": ["प्रत्येक 3-मैनिफोल्ड ज्यामितीय टुकड़ों में विघटित होता है", "3-मैनिफोल्ड का वर्गीकरण", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does the Ax-Grothendieck theorem state about polynomial maps?",
    "question_hi": "बहुपदीय मानचित्रों के बारे में एक्स-ग्रोथेंडीक प्रमेय क्या कहता है?",
    "options_en": ["Injectivity implies bijectivity for polynomial maps over algebraically closed fields", "Model-theoretic proof", "Both aspects", "None of these"],
    "options_hi": ["एकैकिता बीजगणितीय रूप से संवृत क्षेत्रों पर बहुपदीय मानचित्रों के लिए द्वैकिता का तात्पर्य करती है", "मॉडल-सैद्धांतिक प्रमाण", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the statement of the Margulis superrigidity theorem?",
    "question_hi": "मार्गुलिस सुपररिजिडिटी प्रमेय का कथन क्या है?",
    "options_hi": ["उच्च रैंक जालक समूहों के लिए समरूपता रूपों पर प्रतिबंध", "अंकगणितीय समूहों की कठोरता", "दोनों पहलू", "इनमें से कोई नहीं"],
    "options_en": ["Restrictions on homomorphisms of higher-rank lattice groups", "Rigidity of arithmetic groups", "Both aspects", "None of these"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the Oka principle in complex analysis state?",
    "question_hi": "सम्मिश्र विश्लेषण में ओका सिद्धांत क्या कहता है?",
    "options_en": ["Holomorphic problems are often solvable if topological ones are", "Flexibility of Stein manifolds", "Both aspects", "None of these"],
    "options_hi": ["सम्मिश्र समस्याएँ अक्सर हल करने योग्य होती हैं यदि टोपोलॉजिकल समस्याएँ हैं", "स्टीन मैनिफोल्ड का लचीलापन", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the significance of the Grothendieck-Riemann-Roch theorem?",
    "question_hi": "ग्रोथेंडीक-रीमैन-रोच प्रमेय का क्या महत्व है?",
    "options_en": ["Relates Euler characteristic to Chern characters", "Generalization of Hirzebruch-Riemann-Roch", "Both aspects", "None of these"],
    "options_hi": ["यूलर अभिलाक्षणिक को चर्न अभिलाक्षणिकों से संबंधित करती है", "हिर्ज़ेब्रुच-रीमैन-रोच का व्यापकीकरण", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does the Hilbert-Smith conjecture (still open) in transformation groups state?",
    "question_hi": "रूपांतरण समूहों में हिल्बर्ट-स्मिथ अनुमान (अभी भी खुला) क्या कहता है?",
    "options_en": ["p-adic groups cannot act effectively on manifolds", "Restriction on transformation groups", "Both statements", "None of these"],
    "options_hi": ["p-एडिक समूह मैनिफोल्ड पर प्रभावी रूप से कार्य नहीं कर सकते", "रूपांतरण समूहों पर प्रतिबंध", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the statement of the Cannon-Thurston map existence theorem?",
    "question_hi": "कैनन-थर्स्टन मानचित्र अस्तित्व प्रमेय का कथन क्या है?",
    "options_en": ["Continuous extension of inclusion of hyperbolic groups to boundaries", "Group boundary theory", "Both aspects", "None of these"],
    "options_hi": ["अतिपरवलयिक समूहों के समावेशन का सतत विस्तार सीमाओं तक", "समूह सीमा सिद्धांत", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the Green-Tao theorem prove about arithmetic progressions?",
    "question_hi": "समांतर श्रेढ़ियों के बारे में ग्रीन-ताओ प्रमेय क्या सिद्ध करती है?",
    "options_en": ["Primes contain arbitrarily long arithmetic progressions", "Szemerédi's theorem for primes", "Both statements", "None of these"],
    "options_hi": ["अभाज्य संख्याएँ मनमाने ढंग से लंबी समांतर श्रेढ़ियाँ होती हैं", "अभाज्य संख्याओं के लिए सेमेरेडी का प्रमेय", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the significance of the Nirenberg-Treves condition in PDE theory?",
    "question_hi": "PDE सिद्धांत में निरेनबर्ग-ट्रेव्स शर्त का क्या महत्व है?",
    "options_en": ["Solvability condition for pseudodifferential operators", "Necessary for local solvability", "Both aspects", "None of these"],
    "options_hi": ["स्यूडोडिफरेंशियल संकारकों के लिए हल करने योग्यता शर्त", "स्थानीय हल करने योग्यता के लिए आवश्यक", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does the Deligne-Lusztig theory in representation theory accomplish?",
    "question_hi": "निरूपण सिद्धांत में डेलिग्ने-लुस्ज़िग सिद्धांत क्या प्राप्त करता है?",
    "options_en": ["Constructs representations of finite groups of Lie type", "Uses l-adic cohomology", "Both aspects", "None of these"],
    "options_hi": ["ली प्रकार के परिमित समूहों के निरूपणों का निर्माण करता है", "l-एडिक सहसम्मिश्र का उपयोग करता है", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the statement of the Donaldson-Thomas theory in algebraic geometry?",
    "question_hi": "बीजगणितीय ज्यामिति में डोनाल्डसन-थॉमस सिद्धांत का कथन क्या है?",
    "options_en": ["Counts stable sheaves on Calabi-Yau 3-folds", "Defines invariants via virtual counts", "Both aspects", "None of these"],
    "options_hi": ["कालाबी-याउ 3-गुना पर स्थिर महीनों की गणना करता है", "आभासी गणनाओं के माध्यम से अचरों को परिभाषित करता है", "दोनों पहलू", "इनमें से कोई नहीं"],
    "answer_en": "Both aspects",
    "answer_hi": "दोनों पहलू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the Jones polynomial factorization property indicate about knots?",
    "question_hi": "गाँठों के बारे में जोन्स बहुपद गुणनखंडन गुण क्या इंगित करता है?",
    "options_en": ["Factorization for connected sums", "Multiplicativity property", "Both statements", "None of these"],
    "options_hi": ["संयोजित योगों के लिए गुणनखंडन", "गुणात्मकता गुण", "दोनों कथन", "इनमें से कोई नहीं"],
    "answer_en": "Both statements",
    "answer_hi": "दोनों कथन",
    "attempted": false,
    "selected": ""
  }
];

// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

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

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};