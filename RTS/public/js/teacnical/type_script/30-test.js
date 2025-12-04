const questions = [
    // Class 12 Biology (1-20)
    {
        "num": 1,
        "question_en": "Which process is responsible for the formation of gametes in sexually reproducing organisms?",
        "question_hi": "यौन प्रजनन करने वाले जीवों में युग्मकों के निर्माण के लिए कौन सी प्रक्रिया जिम्मेदार है?",
        "options_en": ["Mitosis", "Meiosis", "Binary Fission", "Budding"],
        "options_hi": ["समसूत्री विभाजन", "अर्धसूत्री विभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Meiosis",
        "answer_hi": "अर्धसूत्री विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the function of DNA polymerase in DNA replication?",
        "question_hi": "DNA प्रतिकृति में DNA पोलीमरेज़ का क्या कार्य है?",
        "options_en": ["Unwinds DNA", "Adds nucleotides", "Proofreads", "Joins Okazaki fragments"],
        "options_hi": ["DNA को खोलना", "न्यूक्लियोटाइड जोड़ना", "प्रूफरीडिंग", "ओकाजाकी खंडों को जोड़ना"],
        "answer_en": "Adds nucleotides",
        "answer_hi": "न्यूक्लियोटाइड जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which hormone regulates the sleep-wake cycle in humans?",
        "question_hi": "मनुष्यों में नींद-जागने के चक्र को कौन सा हार्मोन नियंत्रित करता है?",
        "options_en": ["Melatonin", "Insulin", "Thyroxine", "Adrenaline"],
        "options_hi": ["मेलाटोनिन", "इंसुलिन", "थायरॉक्सिन", "एड्रेनालाईन"],
        "answer_en": "Melatonin",
        "answer_hi": "मेलाटोनिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the site of protein synthesis in a cell?",
        "question_hi": "कोशिका में प्रोटीन संश्लेषण का स्थान क्या है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which of the following is a greenhouse gas produced by cattle?",
        "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस मवेशियों द्वारा उत्पन्न होती है?",
        "options_en": ["Carbon dioxide", "Methane", "Nitrous oxide", "Chlorofluorocarbon"],
        "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "नाइट्रस ऑक्साइड", "क्लोरोफ्लोरोकार्बन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the genetic disorder caused by the presence of an extra chromosome 21?",
        "question_hi": "एक अतिरिक्त क्रोमोसोम 21 की उपस्थिति के कारण होने वाला आनुवंशिक विकार क्या है?",
        "options_en": ["Turner syndrome", "Down syndrome", "Klinefelter syndrome", "Hemophilia"],
        "options_hi": ["टर्नर सिंड्रोम", "डाउन सिंड्रोम", "क्लाइनफेल्टर सिंड्रोम", "हीमोफिलिया"],
        "answer_en": "Down syndrome",
        "answer_hi": "डाउन सिंड्रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which plant hormone promotes cell elongation?",
        "question_hi": "कौन सा पादप हार्मोन कोशिका दीर्घीकरण को बढ़ावा देता है?",
        "options_en": ["Abscisic acid", "Auxin", "Cytokinin", "Ethylene"],
        "options_hi": ["एब्सिसिक अम्ल", "ऑक्सिन", "साइटोकाइनिन", "एथिलीन"],
        "answer_en": "Auxin",
        "answer_hi": "ऑक्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the process by which water moves from an area of high concentration to low concentration through a semi-permeable membrane?",
        "question_hi": "वह प्रक्रिया क्या है जिसके द्वारा पानी एक अर्ध-पारगम्य झिल्ली के माध्यम से उच्च सांद्रता वाले क्षेत्र से निम्न सांद्रता वाले क्षेत्र में जाता है?",
        "options_en": ["Diffusion", "Osmosis", "Active transport", "Facilitated diffusion"],
        "options_hi": ["प्रसार", "परासरण", "सक्रिय परिवहन", "सुगम्य प्रसार"],
        "answer_en": "Osmosis",
        "answer_hi": "परासरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which part of the human brain is responsible for maintaining balance and posture?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग संतुलन और मुद्रा बनाए रखने के लिए जिम्मेदार है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला ओब्लोंगाटा", "हाइपोथैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the name of the process by which plants lose water vapor through their leaves?",
        "question_hi": "उस प्रक्रिया का क्या नाम है जिसके द्वारा पौधे अपनी पत्तियों के माध्यम से जल वाष्प खो देते हैं?",
        "options_en": ["Transpiration", "Evaporation", "Condensation", "Precipitation"],
        "options_hi": ["वाष्पोत्सर्जन", "वाष्पीकरण", "संघनन", "वर्षा"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },

    // Class 12 Mathematics (11-30)
    {
        "num": 11,
        "question_en": "What is the derivative of sin(x) with respect to x?",
        "question_hi": "x के सापेक्ष sin(x) का अवकलज क्या है?",
        "options_en": ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        "options_hi": ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        "answer_en": "cos(x)",
        "answer_hi": "cos(x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the value of ∫(2x dx) from 0 to 3?",
        "question_hi": "0 से 3 तक ∫(2x dx) का मान क्या है?",
        "options_en": ["6", "9", "12", "18"],
        "options_hi": ["6", "9", "12", "18"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the probability of getting a prime number when a fair die is rolled?",
        "question_hi": "एक निष्पक्ष पासा फेंकने पर एक अभाज्य संख्या आने की प्रायिकता क्या है?",
        "options_en": ["1/2", "1/3", "1/4", "2/3"],
        "options_hi": ["1/2", "1/3", "1/4", "2/3"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the value of lim(x→0) (sin x)/x?",
        "question_hi": "lim(x→0) (sin x)/x का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the general solution of the differential equation dy/dx = y?",
        "question_hi": "अवकल समीकरण dy/dx = y का व्यापक हल क्या है?",
        "options_en": ["y = e^x + C", "y = Ce^x", "y = ln|x| + C", "y = x + C"],
        "options_hi": ["y = e^x + C", "y = Ce^x", "y = ln|x| + C", "y = x + C"],
        "answer_en": "y = Ce^x",
        "answer_hi": "y = Ce^x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the value of i², where i is the imaginary unit?",
        "question_hi": "i² का मान क्या है, जहाँ i काल्पनिक इकाई है?",
        "options_en": ["1", "-1", "i", "-i"],
        "options_hi": ["1", "-1", "i", "-i"],
        "answer_en": "-1",
        "answer_hi": "-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the equation of a circle with center at (0,0) and radius 5?",
        "question_hi": "केंद्र (0,0) और त्रिज्या 5 वाले वृत्त का समीकरण क्या है?",
        "options_en": ["x² + y² = 5", "x² + y² = 25", "x² + y² = 10", "x² + y² = 50"],
        "options_hi": ["x² + y² = 5", "x² + y² = 25", "x² + y² = 10", "x² + y² = 50"],
        "answer_en": "x² + y² = 25",
        "answer_hi": "x² + y² = 25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the value of tan(π/4)?",
        "question_hi": "tan(π/4) का मान क्या है?",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the determinant of a 2x2 matrix [[a,b],[c,d]]?",
        "question_hi": "2x2 मैट्रिक्स [[a,b],[c,d]] का सारणिक क्या है?",
        "options_en": ["ab - cd", "ad - bc", "ac - bd", "a² - d²"],
        "options_hi": ["ab - cd", "ad - bc", "ac - bd", "a² - d²"],
        "answer_en": "ad - bc",
        "answer_hi": "ad - bc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the formula for the volume of a sphere with radius r?",
        "question_hi": "त्रिज्या r वाले गोले के आयतन का सूत्र क्या है?",
        "options_en": ["(4/3)πr²", "(4/3)πr³", "4πr²", "4πr³"],
        "options_hi": ["(4/3)πr²", "(4/3)πr³", "4πr²", "4πr³"],
        "answer_en": "(4/3)πr³",
        "answer_hi": "(4/3)πr³",
        "attempted": false,
        "selected": ""
    },

    // Class 12 Physics (21-40)
    {
        "num": 21,
        "question_en": "What is the SI unit of electric flux?",
        "question_hi": "विद्युत फ्लक्स की SI इकाई क्या है?",
        "options_en": ["Weber", "Tesla", "Volt", "Coulomb"],
        "options_hi": ["वेबर", "टेस्ला", "वोल्ट", "कूलम्ब"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "According to Bohr's model, what is the radius of the first orbit of hydrogen atom?",
        "question_hi": "बोहर के मॉडल के अनुसार, हाइड्रोजन परमाणु की पहली कक्षा की त्रिज्या क्या है?",
        "options_en": ["0.529 Å", "1.058 Å", "2.116 Å", "4.232 Å"],
        "options_hi": ["0.529 Å", "1.058 Å", "2.116 Å", "4.232 Å"],
        "answer_en": "0.529 Å",
        "answer_hi": "0.529 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the principle behind the working of a transformer?",
        "question_hi": "ट्रांसफार्मर के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Ohm's law", "Faraday's law of electromagnetic induction", "Ampere's law", "Coulomb's law"],
        "options_hi": ["ओम का नियम", "फैराडे का विद्युत चुम्बकीय प्रेरण का नियम", "एम्पियर का नियम", "कूलम्ब का नियम"],
        "answer_en": "Faraday's law of electromagnetic induction",
        "answer_hi": "फैराडे का विद्युत चुम्बकीय प्रेरण का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the de Broglie wavelength associated with an electron accelerated through a potential difference V?",
        "question_hi": "विभवान्तर V से त्वरित इलेक्ट्रॉन से जुड़ी डी ब्रोगली तरंगदैर्ध्य क्या है?",
        "options_en": ["λ = h/√(2meV)", "λ = h/(2meV)", "λ = √(h/2meV)", "λ = h²/(2meV)"],
        "options_hi": ["λ = h/√(2meV)", "λ = h/(2meV)", "λ = √(h/2meV)", "λ = h²/(2meV)"],
        "answer_en": "λ = h/√(2meV)",
        "answer_hi": "λ = h/√(2meV)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the critical angle for total internal reflection when light travels from glass to air?",
        "question_hi": "जब प्रकाश कांच से हवा में जाता है तो पूर्ण आंतरिक परावर्तन के लिए क्रांतिक कोण क्या है?",
        "options_en": ["sin⁻¹(1/μ)", "sin⁻¹(μ)", "cos⁻¹(1/μ)", "tan⁻¹(μ)"],
        "options_hi": ["sin⁻¹(1/μ)", "sin⁻¹(μ)", "cos⁻¹(1/μ)", "tan⁻¹(μ)"],
        "answer_en": "sin⁻¹(1/μ)",
        "answer_hi": "sin⁻¹(1/μ)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the force between two parallel current-carrying conductors?",
        "question_hi": "दो समानांतर धारावाही चालकों के बीच बल क्या है?",
        "options_en": ["Inversely proportional to distance", "Directly proportional to distance", "Inversely proportional to square of distance", "Directly proportional to product of currents"],
        "options_hi": ["दूरी के व्युत्क्रमानुपाती", "दूरी के समानुपाती", "दूरी के वर्ग के व्युत्क्रमानुपाती", "धाराओं के गुणनफल के समानुपाती"],
        "answer_en": "Directly proportional to product of currents",
        "answer_hi": "धाराओं के गुणनफल के समानुपाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the unit of magnetic field strength in SI system?",
        "question_hi": "SI प्रणाली में चुंबकीय क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["Weber", "Tesla", "Gauss", "Ampere/meter"],
        "options_hi": ["वेबर", "टेस्ला", "गॉस", "एम्पियर/मीटर"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the principle of conservation in nuclear reactions?",
        "question_hi": "नाभिकीय अभिक्रियाओं में संरक्षण का सिद्धांत क्या है?",
        "options_en": ["Mass number and atomic number", "Mass and energy", "Charge and momentum", "All of the above"],
        "options_hi": ["द्रव्यमान संख्या और परमाणु संख्या", "द्रव्यमान और ऊर्जा", "आवेश और संवेग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the formula for the energy stored in a capacitor?",
        "question_hi": "संधारित्र में संचित ऊर्जा का सूत्र क्या है?",
        "options_en": ["½CV²", "CV²", "½QV", "Q²/2C"],
        "options_hi": ["½CV²", "CV²", "½QV", "Q²/2C"],
        "answer_en": "½CV²",
        "answer_hi": "½CV²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the phenomenon of splitting of white light into its constituent colors?",
        "question_hi": "सफेद प्रकाश का उसके घटक रंगों में विभाजन होने की घटना क्या है?",
        "options_en": ["Dispersion", "Diffraction", "Interference", "Polarization"],
        "options_hi": ["विक्षेपण", "विवर्तन", "व्यतिकरण", "ध्रुवण"],
        "answer_en": "Dispersion",
        "answer_hi": "विक्षेपण",
        "attempted": false,
        "selected": ""
    },

    // Class 12 Chemistry (31-50)
    {
        "num": 31,
        "question_en": "What is the IUPAC name of CH₃-CH₂-CH₂-OH?",
        "question_hi": "CH₃-CH₂-CH₂-OH का IUPAC नाम क्या है?",
        "options_en": ["Methanol", "Ethanol", "Propanol", "Butanol"],
        "options_hi": ["मेथनॉल", "एथनॉल", "प्रोपेनॉल", "ब्यूटनॉल"],
        "answer_en": "Propanol",
        "answer_hi": "प्रोपेनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which law states that the rate of a chemical reaction is proportional to the product of the concentrations of the reactants?",
        "question_hi": "कौन सा नियम कहता है कि एक रासायनिक अभिक्रिया की दर अभिकारकों की सांद्रता के गुणनफल के समानुपाती होती है?",
        "options_en": ["Henry's law", "Raoult's law", "Law of mass action", "Hess's law"],
        "options_hi": ["हेनरी का नियम", "राउल्ट का नियम", "द्रव्यमान क्रिया का नियम", "हेस का नियम"],
        "answer_en": "Law of mass action",
        "answer_hi": "द्रव्यमान क्रिया का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the coordination number in a face-centered cubic structure?",
        "question_hi": "फलक-केंद्रित घनीय संरचना में उपसहसंयोजन संख्या क्या है?",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which of the following is a strong electrolyte?",
        "question_hi": "निम्नलिखित में से कौन सा एक प्रबल विद्युत-अपघट्य है?",
        "options_en": ["Acetic acid", "Ammonia", "Sodium chloride", "Water"],
        "options_hi": ["एसिटिक अम्ल", "अमोनिया", "सोडियम क्लोराइड", "पानी"],
        "answer_en": "Sodium chloride",
        "answer_hi": "सोडियम क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the order of reaction if the rate is independent of the concentration of reactants?",
        "question_hi": "अभिक्रिया का क्रम क्या है यदि दर अभिकारकों की सांद्रता से स्वतंत्र है?",
        "options_en": ["Zero order", "First order", "Second order", "Third order"],
        "options_hi": ["शून्य कोटि", "प्रथम कोटि", "द्वितीय कोटि", "तृतीय कोटि"],
        "answer_en": "Zero order",
        "answer_hi": "शून्य कोटि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which process is used for the purification of copper?",
        "question_hi": "तांबे के शुद्धिकरण के लिए किस प्रक्रिया का उपयोग किया जाता है?",
        "options_en": ["Mond's process", "Electrolytic refining", "Zone refining", "Van Arkel method"],
        "options_hi": ["मोंड प्रक्रिया", "विद्युत्-अपघटनी परिष्करण", "क्षेत्र परिष्करण", "वैन आर्केल विधि"],
        "answer_en": "Electrolytic refining",
        "answer_hi": "विद्युत्-अपघटनी परिष्करण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the hybridization of carbon in methane (CH₄)?",
        "question_hi": "मीथेन (CH₄) में कार्बन का संकरण क्या है?",
        "options_en": ["sp", "sp²", "sp³", "sp³d"],
        "options_hi": ["sp", "sp²", "sp³", "sp³d"],
        "answer_en": "sp³",
        "answer_hi": "sp³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which reagent is used to distinguish between aldehyde and ketone?",
        "question_hi": "एल्डिहाइड और कीटोन के बीच अंतर करने के लिए किस अभिकर्मक का उपयोग किया जाता है?",
        "options_en": ["Tollen's reagent", "Fehling's solution", "Both A and B", "Benedict's solution"],
        "options_hi": ["टोलेन अभिकर्मक", "फेहलिंग विलयन", "A और B दोनों", "बेनेडिक्ट विलयन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the pH of a solution with [H⁺] = 10⁻⁵ M?",
        "question_hi": "[H⁺] = 10⁻⁵ M वाले विलयन का pH क्या है?",
        "options_en": ["3", "5", "7", "9"],
        "options_hi": ["3", "5", "7", "9"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which type of isomerism is shown by [Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br?",
        "question_hi": "[Co(NH₃)₅Br]SO₄ और [Co(NH₃)₅SO₄]Br द्वारा किस प्रकार की समावयवता दिखाई जाती है?",
        "options_en": ["Ionization isomerism", "Linkage isomerism", "Coordination isomerism", "Geometrical isomerism"],
        "options_hi": ["आयनन समावयवता", "संयोजकता समावयवता", "उपसहसंयोजन समावयवता", "ज्यामितीय समावयवता"],
        "answer_en": "Ionization isomerism",
        "answer_hi": "आयनन समावयवता",
        "attempted": false,
        "selected": ""
    },

    // Class 12 English (51-60)
    {
        "num": 41,
        "question_en": "Who is the author of 'The Last Lesson'?",
        "question_hi": "'द लास्ट लेसन' के लेखक कौन हैं?",
        "options_en": ["Alphonse Daudet", "William Shakespeare", "Charles Dickens", "Jane Austen"],
        "options_hi": ["अल्फोंस डौडेट", "विलियम शेक्सपियर", "चार्ल्स डिकेंस", "जेन ऑस्टेन"],
        "answer_en": "Alphonse Daudet",
        "answer_hi": "अल्फोंस डौडेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What literary device is used in 'The fog comes on little cat feet'?",
        "question_hi": "'द फॉग कम्स ऑन लिटिल कैट फीट' में किस साहित्यिक उपकरण का उपयोग किया गया है?",
        "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
        "answer_en": "Metaphor",
        "answer_hi": "रूपक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which character in 'The Rattrap' is known for his philosophical views?",
        "question_hi": "'द रैटट्रैप' में कौन सा पात्र अपने दार्शनिक विचारों के लिए जाना जाता है?",
        "options_en": ["The peddler", "The ironmaster", "Edla Willmansson", "The crofter"],
        "options_hi": ["फेरीवाला", "आयरनमास्टर", "एडला विलमैनसन", "क्रॉफ्टर"],
        "answer_en": "The peddler",
        "answer_hi": "फेरीवाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the central theme of 'Deep Water' by William Douglas?",
        "question_hi": "विलियम डगलस द्वारा 'डीप वाटर' का केंद्रीय विषय क्या है?",
        "options_en": ["Love for swimming", "Conquest of fear", "Importance of education", "Childhood memories"],
        "options_hi": ["तैराकी का प्यार", "डर पर विजय", "शिक्षा का महत्व", "बचपन की यादें"],
        "answer_en": "Conquest of fear",
        "answer_hi": "डर पर विजय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which poetic device is used in 'My Mother at Sixty-six'?",
        "question_hi": "'माई मदर एट सिक्स्टी-सिक्स' में किस काव्यात्मक उपकरण का उपयोग किया गया है?",
        "options_en": ["Irony", "Imagery", "Hyperbole", "Onomatopoeia"],
        "options_hi": ["विडंबना", "चित्रात्मकता", "अतिशयोक्ति", "ध्वन्यात्मकता"],
        "answer_en": "Imagery",
        "answer_hi": "चित्रात्मकता",
        "attempted": false,
        "selected": ""
    },

    // Class 12 Hindi (61-70)
    {
        "num": 46,
        "question_en": "Who is the author of 'Silas Marner' in Hindi syllabus?",
        "question_hi": "हिंदी पाठ्यक्रम में 'साइलस मार्नर' के लेखक कौन हैं?",
        "options_en": ["George Eliot", "Premchand", "Mahadevi Verma", "Harivansh Rai Bachchan"],
        "options_hi": ["जॉर्ज एलियट", "प्रेमचंद", "महादेवी वर्मा", "हरिवंश राय बच्चन"],
        "answer_en": "George Eliot",
        "answer_hi": "जॉर्ज एलियट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which chapter is written by Hazari Prasad Dwivedi?",
        "question_hi": "हजारी प्रसाद द्विवेदी द्वारा कौन सा अध्याय लिखा गया है?",
        "options_en": ["Bharat Mata", "Joojh", "Aatma ka Taap", "Shram Vibhajan"],
        "options_hi": ["भारत माता", "जूझ", "आत्मा का ताप", "श्रम विभाजन"],
        "answer_en": "Bharat Mata",
        "answer_hi": "भारत माता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the main theme of 'Joojh' by Anamika?",
        "question_hi": "अनामिका द्वारा 'जूझ' का मुख्य विषय क्या है?",
        "options_en": ["Struggle of women", "Childhood memories", "Nature's beauty", "Social inequality"],
        "options_hi": ["महिलाओं का संघर्ष", "बचपन की यादें", "प्रकृति की सुंदरता", "सामाजिक असमानता"],
        "answer_en": "Struggle of women",
        "answer_hi": "महिलाओं का संघर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which literary work is written by Jainendra Kumar?",
        "question_hi": "जैनेन्द्र कुमार द्वारा कौन सी साहित्यिक रचना लिखी गई है?",
        "options_en": ["Tyagpatra", "Godan", "Gaban", "Nirmala"],
        "options_hi": ["त्यागपत्र", "गोदान", "गबन", "निर्मला"],
        "answer_en": "Tyagpatra",
        "answer_hi": "त्यागपत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the pen name of Siyaramsharan Gupt?",
        "question_hi": "सियारामशरण गुप्त का उपनाम क्या है?",
        "options_en": ["Rasa Kavi", "Yug Charan", "Dinkar", "Maithilisharan"],
        "options_hi": ["रस कवि", "युग चारण", "दिनकर", "मैथिलीशरण"],
        "answer_en": "Rasa Kavi",
        "answer_hi": "रस कवि",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (71-90)
    {
        "num": 51,
        "question_en": "Who is known as the Father of the Indian Constitution?",
        "question_hi": "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
        "answer_en": "B.R. Ambedkar",
        "answer_hi": "बी.आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which is the highest civilian award in India?",
        "question_hi": "भारत में सर्वोच्च नागरिक पुरस्कार कौन सा है?",
        "options_en": ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Padma Vibhushan"],
        "options_hi": ["पद्म श्री", "पद्म भूषण", "भारत रत्न", "पद्म विभूषण"],
        "answer_en": "Bharat Ratna",
        "answer_hi": "भारत रत्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which river is known as the 'Sorrow of Bengal'?",
        "question_hi": "किस नदी को 'बंगाल का शोक' कहा जाता है?",
        "options_en": ["Ganga", "Brahmaputra", "Damodar", "Hooghly"],
        "options_hi": ["गंगा", "ब्रह्मपुत्र", "दामोदर", "हुगली"],
        "answer_en": "Damodar",
        "answer_hi": "दामोदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the currency of Switzerland?",
        "question_hi": "स्विट्जरलैंड की मुद्रा क्या है?",
        "options_en": ["Euro", "Swiss Franc", "Pound", "Dollar"],
        "options_hi": ["यूरो", "स्विस फ्रैंक", "पाउंड", "डॉलर"],
        "answer_en": "Swiss Franc",
        "answer_hi": "स्विस फ्रैंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which country hosted the 2020 Summer Olympics?",
        "question_hi": "2020 ग्रीष्मकालीन ओलंपिक की मेजबानी किस देश ने की?",
        "options_en": ["China", "Japan", "Brazil", "United Kingdom"],
        "options_hi": ["चीन", "जापान", "ब्राजील", "यूनाइटेड किंगडम"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Who invented the World Wide Web?",
        "question_hi": "वर्ल्ड वाइड वेब का आविष्कार किसने किया?",
        "options_en": ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
        "options_hi": ["बिल गेट्स", "टिम बर्नर्स-ली", "स्टीव जॉब्स", "मार्क जकरबर्ग"],
        "answer_en": "Tim Berners-Lee",
        "answer_hi": "टिम बर्नर्स-ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which is the largest desert in Asia?",
        "question_hi": "एशिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Thar Desert", "Gobi Desert", "Karakum Desert", "Kyzylkum Desert"],
        "options_hi": ["थार रेगिस्तान", "गोबी रेगिस्तान", "कराकुम रेगिस्तान", "किज़िलकुम रेगिस्तान"],
        "answer_en": "Gobi Desert",
        "answer_hi": "गोबी रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Who wrote 'The Discovery of India'?",
        "question_hi": "'द डिस्कवरी ऑफ इंडिया' किसने लिखी?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "Subhash Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "रबींद्रनाथ टैगोर", "सुभाष चंद्र बोस"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which Indian state has the longest coastline?",
        "question_hi": "किस भारतीय राज्य में सबसे लंबी तटरेखा है?",
        "options_en": ["Tamil Nadu", "Gujarat", "Andhra Pradesh", "Maharashtra"],
        "options_hi": ["तमिलनाडु", "गुजरात", "आंध्र प्रदेश", "महाराष्ट्र"],
        "answer_en": "Gujarat",
        "answer_hi": "गुजरात",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (91-100)
    {
        "num": 61,
        "question_en": "What is the principle behind MRI (Magnetic Resonance Imaging)?",
        "question_hi": "एमआरआई (मैग्नेटिक रेजोनेंस इमेजिंग) का सिद्धांत क्या है?",
        "options_en": ["X-ray diffraction", "Nuclear magnetic resonance", "Ultrasound waves", "Radioactive decay"],
        "options_hi": ["एक्स-रे विवर्तन", "नाभिकीय चुंबकीय अनुनाद", "अल्ट्रासाउंड तरंगें", "रेडियोधर्मी क्षय"],
        "answer_en": "Nuclear magnetic resonance",
        "answer_hi": "नाभिकीय चुंबकीय अनुनाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which theorem states that every composite number can be expressed as a product of primes?",
        "question_hi": "कौन सा प्रमेय कहता है कि प्रत्येक भाज्य संख्या को अभाज्य संख्याओं के गुणनफल के रूप में व्यक्त किया जा सकता है?",
        "options_en": ["Fundamental Theorem of Arithmetic", "Pythagorean Theorem", "Binomial Theorem", "Fermat's Last Theorem"],
        "options_hi": ["अंकगणित का मौलिक प्रमेय", "पाइथागोरस प्रमेय", "द्विपद प्रमेय", "फर्मेट का अंतिम प्रमेय"],
        "answer_en": "Fundamental Theorem of Arithmetic",
        "answer_hi": "अंकगणित का मौलिक प्रमेय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the chemical basis of the polymerase chain reaction (PCR)?",
        "question_hi": "पोलीमरेज़ चेन रिएक्शन (पीसीआर) का रासायनिक आधार क्या है?",
        "options_en": ["DNA replication", "Protein synthesis", "RNA transcription", "Enzyme catalysis"],
        "options_hi": ["DNA प्रतिकृति", "प्रोटीन संश्लेषण", "RNA प्रतिलेखन", "एंजाइम उत्प्रेरण"],
        "answer_en": "DNA replication",
        "answer_hi": "DNA प्रतिकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which law in economics states that 'supply creates its own demand'?",
        "question_hi": "अर्थशास्त्र में कौन सा नियम कहता है कि 'आपूर्ति अपनी मांग स्वयं पैदा करती है'?",
        "options_en": ["Say's Law", "Keynes' Law", "Gresham's Law", "Law of Diminishing Returns"],
        "options_hi": ["से का नियम", "कीन्स का नियम", "ग्रेशम का नियम", "ह्रासमान प्रतिफल का नियम"],
        "answer_en": "Say's Law",
        "answer_hi": "से का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the Heisenberg Uncertainty Principle?",
        "question_hi": "हाइजेनबर्ग अनिश्चितता सिद्धांत क्या है?",
        "options_en": ["Position and momentum cannot be simultaneously measured", "Energy and time are complementary", "Both A and B", "Wave-particle duality"],
        "options_hi": ["स्थिति और संवेग को एक साथ नहीं मापा जा सकता", "ऊर्जा और समय पूरक हैं", "A और B दोनों", "तरंग-कण द्वैत"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which programming paradigm is based on the concept of 'objects'?",
        "question_hi": "कौन सा प्रोग्रामिंग प्रतिमान 'ऑब्जेक्ट्स' की अवधारणा पर आधारित है?",
        "options_en": ["Procedural programming", "Object-oriented programming", "Functional programming", "Logical programming"],
        "options_hi": ["प्रक्रियात्मक प्रोग्रामिंग", "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग", "फंक्शनल प्रोग्रामिंग", "लॉजिकल प्रोग्रामिंग"],
        "answer_en": "Object-oriented programming",
        "answer_hi": "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the significance of the Higgs boson particle?",
        "question_hi": "हिग्स बोसॉन कण का क्या महत्व है?",
        "options_en": ["Gives mass to other particles", "Carries electromagnetic force", "Mediates strong nuclear force", "Causes radioactive decay"],
        "options_hi": ["अन्य कणों को द्रव्यमान देता है", "विद्युत चुम्बकीय बल ले जाता है", "प्रबल नाभिकीय बल का मध्यस्थ है", "रेडियोधर्मी क्षय का कारण बनता है"],
        "answer_en": "Gives mass to other particles",
        "answer_hi": "अन्य कणों को द्रव्यमान देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which algorithm is used for page ranking in search engines?",
        "question_hi": "सर्च इंजन में पेज रैंकिंग के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["PageRank", "Bubble Sort", "Quick Sort", "Dijkstra's Algorithm"],
        "options_hi": ["पेजरैंक", "बबल सॉर्ट", "क्विक सॉर्ट", "डिज्क्स्ट्रा एल्गोरिदम"],
        "answer_en": "PageRank",
        "answer_hi": "पेजरैंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the concept of 'Black Hole' in astrophysics?",
        "question_hi": "खगोल भौतिकी में 'ब्लैक होल' की अवधारणा क्या है?",
        "options_en": ["Region with intense gravity", "Collapsed star", "Nothing can escape", "All of the above"],
        "options_hi": ["तीव्र गुरुत्वाकर्षण वाला क्षेत्र", "संपीड़ित तारा", "कुछ भी बच नहीं सकता", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which theory explains the origin of the universe?",
        "question_hi": "कौन सा सिद्धांत ब्रह्मांड की उत्पत्ति की व्याख्या करता है?",
        "options_en": ["Big Bang Theory", "String Theory", "Theory of Relativity", "Quantum Theory"],
        "options_hi": ["बिग बैंग सिद्धांत", "स्ट्रिंग सिद्धांत", "सापेक्षता का सिद्धांत", "क्वांटम सिद्धांत"],
        "answer_en": "Big Bang Theory",
        "answer_hi": "बिग बैंग सिद्धांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is CRISPR-Cas9 technology used for?",
        "question_hi": "CRISPR-Cas9 तकनीक का उपयोग किस लिए किया जाता है?",
        "options_en": ["Gene editing", "DNA sequencing", "Protein synthesis", "Cell division"],
        "options_hi": ["जीन संपादन", "DNA अनुक्रमण", "प्रोटीन संश्लेषण", "कोशिका विभाजन"],
        "answer_en": "Gene editing",
        "answer_hi": "जीन संपादन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which mathematical concept is fundamental to cryptography?",
        "question_hi": "क्रिप्टोग्राफी के लिए कौन सी गणितीय अवधारणा मौलिक है?",
        "options_en": ["Prime numbers", "Complex numbers", "Matrices", "Calculus"],
        "options_hi": ["अभाज्य संख्याएं", "सम्मिश्र संख्याएं", "मैट्रिक्स", "कैलकुलस"],
        "answer_en": "Prime numbers",
        "answer_hi": "अभाज्य संख्याएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the principle behind blockchain technology?",
        "question_hi": "ब्लॉकचेन तकनीक का सिद्धांत क्या है?",
        "options_en": ["Distributed ledger", "Centralized database", "Peer-to-peer network", "Both A and C"],
        "options_hi": ["वितरित लेजर", "केंद्रीकृत डेटाबेस", "पीयर-टू-पीयर नेटवर्क", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which phenomenon is responsible for the blue color of the sky?",
        "question_hi": "आकाश के नीले रंग के लिए कौन सी घटना जिम्मेदार है?",
        "options_en": ["Reflection", "Refraction", "Rayleigh scattering", "Tyndall effect"],
        "options_hi": ["परावर्तन", "अपवर्तन", "रेले प्रकीर्णन", "टिंडल प्रभाव"],
        "answer_en": "Rayleigh scattering",
        "answer_hi": "रेले प्रकीर्णन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the Anthropocene epoch?",
        "question_hi": "एंथ्रोपोसीन युग क्या है?",
        "options_en": ["Age of humans", "Age of dinosaurs", "Ice age", "Stone age"],
        "options_hi": ["मनुष्यों का युग", "डायनासोर का युग", "हिमयुग", "पाषाण युग"],
        "answer_en": "Age of humans",
        "answer_hi": "मनुष्यों का युग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which algorithm is used for recommendation systems?",
        "question_hi": "सिफारिश प्रणालियों के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Collaborative filtering", "Linear regression", "K-means clustering", "Decision trees"],
        "options_hi": ["सहयोगी फ़िल्टरिंग", "रैखिक प्रतिगमन", "K-मीन्स क्लस्टरिंग", "निर्णय वृक्ष"],
        "answer_en": "Collaborative filtering",
        "answer_hi": "सहयोगी फ़िल्टरिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the significance of the Turing Test?",
        "question_hi": "ट्यूरिंग टेस्ट का क्या महत्व है?",
        "options_en": ["Test for artificial intelligence", "Computer security test", "Programming efficiency test", "Hardware performance test"],
        "options_hi": ["कृत्रिम बुद्धिमत्ता के लिए परीक्षण", "कंप्यूटर सुरक्षा परीक्षण", "प्रोग्रामिंग दक्षता परीक्षण", "हार्डवेयर प्रदर्शन परीक्षण"],
        "answer_en": "Test for artificial intelligence",
        "answer_hi": "कृत्रिम बुद्धिमत्ता के लिए परीक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which theory explains the behavior of matter at atomic and subatomic levels?",
        "question_hi": "कौन सा सिद्धांत परमाणु और उपपरमाण्विक स्तर पर पदार्थ के व्यवहार की व्याख्या करता है?",
        "options_en": ["Quantum mechanics", "Classical mechanics", "Thermodynamics", "Electromagnetism"],
        "options_hi": ["क्वांटम यांत्रिकी", "शास्त्रीय यांत्रिकी", "ऊष्मागतिकी", "विद्युत चुम्बकत्व"],
        "answer_en": "Quantum mechanics",
        "answer_hi": "क्वांटम यांत्रिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the concept of 'Dark Matter' in cosmology?",
        "question_hi": "ब्रह्माण्ड विज्ञान में 'डार्क मैटर' की अवधारणा क्या है?",
        "options_en": ["Invisible matter", "Gravitational effects", "Both A and B", "Anti-matter"],
        "options_hi": ["अदृश्य पदार्थ", "गुरुत्वाकर्षण प्रभाव", "A और B दोनों", "प्रतिपदार्थ"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which programming language is primarily used for data science?",
        "question_hi": "डेटा साइंस के लिए मुख्य रूप से किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "C++", "HTML"],
        "options_hi": ["पायथन", "जावा", "C++", "HTML"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the principle of superposition in quantum mechanics?",
        "question_hi": "क्वांटम यांत्रिकी में सुपरपोजिशन का सिद्धांत क्या है?",
        "options_en": ["Particles can be in multiple states", "Waves can interfere", "Both A and B", "Energy is quantized"],
        "options_hi": ["कण कई अवस्थाओं में हो सकते हैं", "तरंगें व्यतिकरण कर सकती हैं", "A और B दोनों", "ऊर्जा क्वांटित है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which algorithm is used for shortest path finding in graphs?",
        "question_hi": "ग्राफ़ में सबसे छोटा रास्ता खोजने के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Dijkstra's algorithm", "Bubble sort", "Quick sort", "Binary search"],
        "options_hi": ["डिज्क्स्ट्रा एल्गोरिदम", "बबल सॉर्ट", "क्विक सॉर्ट", "बाइनरी सर्च"],
        "answer_en": "Dijkstra's algorithm",
        "answer_hi": "डिज्क्स्ट्रा एल्गोरिदम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the significance of the Human Genome Project?",
        "question_hi": "ह्यूमन जीनोम प्रोजेक्ट का क्या महत्व है?",
        "options_en": ["Mapped human DNA", "Medical advancements", "Both A and B", "Space exploration"],
        "options_hi": ["मानव DNA का मानचित्रण", "चिकित्सा प्रगति", "A और B दोनों", "अंतरिक्ष अन्वेषण"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which theory explains the formation of the solar system?",
        "question_hi": "कौन सा सिद्धांत सौर मंडल के निर्माण की व्याख्या करता है?",
        "options_en": ["Nebular hypothesis", "Big Bang theory", "String theory", "Plate tectonics"],
        "options_hi": ["निहारिका परिकल्पना", "बिग बैंग सिद्धांत", "स्ट्रिंग सिद्धांत", "प्लेट टेक्टोनिक्स"],
        "answer_en": "Nebular hypothesis",
        "answer_hi": "निहारिका परिकल्पना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is machine learning?",
        "question_hi": "मशीन लर्निंग क्या है?",
        "options_en": ["AI that learns from data", "Computer programming", "Data storage", "Hardware design"],
        "options_hi": ["डेटा से सीखने वाली AI", "कंप्यूटर प्रोग्रामिंग", "डेटा संग्रहण", "हार्डवेयर डिजाइन"],
        "answer_en": "AI that learns from data",
        "answer_hi": "डेटा से सीखने वाली AI",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which law describes the relationship between voltage, current and resistance?",
        "question_hi": "कौन सा नियम वोल्टेज, करंट और प्रतिरोध के बीच संबंध बताता है?",
        "options_en": ["Ohm's law", "Faraday's law", "Newton's law", "Boyle's law"],
        "options_hi": ["ओम का नियम", "फैराडे का नियम", "न्यूटन का नियम", "बॉयल का नियम"],
        "answer_en": "Ohm's law",
        "answer_hi": "ओम का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण क्या है?",
        "options_en": ["Process of making food in plants", "Breathing process", "Cell division", "Water absorption"],
        "options_hi": ["पौधों में भोजन बनाने की प्रक्रिया", "श्वसन प्रक्रिया", "कोशिका विभाजन", "जल अवशोषण"],
        "answer_en": "Process of making food in plants",
        "answer_hi": "पौधों में भोजन बनाने की प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which gas is essential for photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the chemical formula of water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "HO₂", "H₂O₂", "OH"],
        "options_hi": ["H₂O", "HO₂", "H₂O₂", "OH"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "किस ग्रह को लाल ग्रह के रूप में जाना जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the capital of France?",
        "question_hi": "फ्रांस की राजधानी क्या है?",
        "options_en": ["London", "Berlin", "Paris", "Rome"],
        "options_hi": ["लंदन", "बर्लिन", "पेरिस", "रोम"],
        "answer_en": "Paris",
        "answer_hi": "पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Who wrote 'Romeo and Juliet'?",
        "question_hi": "'रोमियो और जूलियट' किसने लिखा?",
        "options_en": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        "options_hi": ["चार्ल्स डिकेंस", "विलियम शेक्सपियर", "जेन ऑस्टेन", "मार्क ट्वेन"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the largest ocean on Earth?",
        "question_hi": "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which element has the chemical symbol 'Au'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'Au' है?",
        "options_en": ["Silver", "Gold", "Aluminum", "Iron"],
        "options_hi": ["चांदी", "सोना", "एल्युमिनियम", "लोहा"],
        "answer_en": "Gold",
        "answer_hi": "सोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the square root of 144?",
        "question_hi": "144 का वर्गमूल क्या है?",
        "options_en": ["12", "14", "16", "18"],
        "options_hi": ["12", "14", "16", "18"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which country has the largest population in the world?",
        "question_hi": "दुनिया में सबसे अधिक आबादी वाला देश कौन सा है?",
        "options_en": ["India", "United States", "China", "Russia"],
        "options_hi": ["भारत", "संयुक्त राज्य अमेरिका", "चीन", "रूस"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the main component of the Sun?",
        "question_hi": "सूर्य का मुख्य घटक क्या है?",
        "options_en": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Who discovered gravity?",
        "question_hi": "गुरुत्वाकर्षण की खोज किसने की?",
        "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        "options_hi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
        "answer_en": "Isaac Newton",
        "answer_hi": "आइजैक न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the hardest natural substance on Earth?",
        "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ क्या है?",
        "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
        "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which organ pumps blood in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
        "options_en": ["Lungs", "Heart", "Liver", "Kidneys"],
        "options_hi": ["फेफड़े", "हृदय", "यकृत", "गुर्दे"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    }
        
// Add more questions here...
];


let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}















////////////////////////////////////////////////////////////////////////////////////////////all file and folder me code add karna hai 


// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////