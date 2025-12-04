const questions = [
    {
        "num": 1,
        "question_en": "What is the chemical formula of Citric Acid?",
        "question_hi": "सिट्रिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₈O₇", "C₆H₁₂O₆", "CH₃COOH", "H₂C₂O₄"],
        "options_hi": ["C₆H₈O₇", "C₆H₁₂O₆", "CH₃COOH", "H₂C₂O₄"],
        "answer_en": "C₆H₈O₇",
        "answer_hi": "C₆H₈O₇",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who wrote 'Julius Caesar'?",
        "question_hi": "'जूलियस सीजर' किसने लिखा?",
        "options_en": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
        "options_hi": ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the value of 18²?",
        "question_hi": "18² का मान क्या है?",
        "options_en": ["324", "316", "336", "344"],
        "options_hi": ["324", "316", "336", "344"],
        "answer_en": "324",
        "answer_hi": "324",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which part of the human brain controls breathing?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग श्वसन को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला ओब्लोंगाटा", "हाइपोथैलेमस"],
        "answer_en": "Medulla Oblongata",
        "answer_hi": "मेडुला ओब्लोंगाटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the SI unit of electric conductance?",
        "question_hi": "विद्युत चालकता की SI इकाई क्या है?",
        "options_en": ["Siemens", "Ohm", "Mho", "Both Siemens and Mho"],
        "options_hi": ["सीमेंस", "ओम", "म्हो", "सीमेंस और म्हो दोनों"],
        "answer_en": "Both Siemens and Mho",
        "answer_hi": "सीमेंस और म्हो दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Who wrote 'Urvashi'?",
        "question_hi": "'उर्वशी' किसने लिखी?",
        "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Suryakant Tripathi Nirala", "Jaishankar Prasad"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी निराला", "जयशंकर प्रसाद"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which country is known as the 'Land of the Thunder Dragon'?",
        "question_hi": "किस देश को 'थंडर ड्रैगन की भूमि' के रूप में जाना जाता है?",
        "options_en": ["Bhutan", "Nepal", "Tibet", "Myanmar"],
        "options_hi": ["भूटान", "नेपाल", "तिब्बत", "म्यांमार"],
        "answer_en": "Bhutan",
        "answer_hi": "भूटान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the solution of 5x + 8 = 33?",
        "question_hi": "5x + 8 = 33 का हल क्या है?",
        "options_en": ["x = 5", "x = 6", "x = 7", "x = 8"],
        "options_hi": ["x = 5", "x = 6", "x = 7", "x = 8"],
        "answer_en": "x = 5",
        "answer_hi": "x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which gas is used in incandescent lamps?",
        "question_hi": "तापदीप्त लैंप में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Argon", "Nitrogen", "Helium", "Neon"],
        "options_hi": ["आर्गन", "नाइट्रोजन", "हीलियम", "नियॉन"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical symbol for Germanium?",
        "question_hi": "जर्मेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ge", "Gm", "Gr", "Ga"],
        "options_hi": ["Ge", "Gm", "Gr", "Ga"],
        "answer_en": "Ge",
        "answer_hi": "Ge",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
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
        "num": 12,
        "question_en": "What is the value of 15³?",
        "question_hi": "15³ का मान क्या है?",
        "options_en": ["3375", "3275", "3475", "3575"],
        "options_hi": ["3375", "3275", "3475", "3575"],
        "answer_en": "3375",
        "answer_hi": "3375",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which planet has the most elliptical orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे अण्डाकार है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the formula for area of a regular hexagon?",
        "question_hi": "नियमित षट्भुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["(3√3/2) × side²", "6 × side²", "π × side²", "½ × perimeter × apothem"],
        "options_hi": ["(3√3/2) × भुजा²", "6 × भुजा²", "π × भुजा²", "½ × परिमाप × एपोथेम"],
        "answer_en": "(3√3/2) × side²",
        "answer_hi": "(3√3/2) × भुजा²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which vitamin is essential for blood vessel health?",
        "question_hi": "रक्त वाहिका स्वास्थ्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin D", "Vitamin E", "Vitamin K"],
        "options_hi": ["विटामिन C", "विटामिन D", "विटामिन E", "विटामिन K"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical name of Gypsum?",
        "question_hi": "जिप्सम का रासायनिक नाम क्या है?",
        "options_en": ["Calcium Sulfate Dihydrate", "Calcium Carbonate", "Calcium Oxide", "Calcium Hydroxide"],
        "options_hi": ["कैल्शियम सल्फेट डाइहाइड्रेट", "कैल्शियम कार्बोनेट", "कैल्शियम ऑक्साइड", "कैल्शियम हाइड्रॉक्साइड"],
        "answer_en": "Calcium Sulfate Dihydrate",
        "answer_hi": "कैल्शियम सल्फेट डाइहाइड्रेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Who was the first Indian woman to win an Olympic silver medal?",
        "question_hi": "ओलंपिक रजत पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["P.V. Sindhu", "Saina Nehwal", "Karnam Malleswari", "Mary Kom"],
        "options_hi": ["पी.वी. सिंधु", "साइना नेहवाल", "कर्णम मल्लेश्वरी", "मैरी कॉम"],
        "answer_en": "P.V. Sindhu",
        "answer_hi": "पी.वी. सिंधु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the value of sin 120°?",
        "question_hi": "sin 120° का मान क्या है?",
        "options_en": ["√3/2", "1/2", "1/√2", "1"],
        "options_hi": ["√3/2", "1/2", "1/√2", "1"],
        "answer_en": "√3/2",
        "answer_hi": "√3/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which part of the cell is responsible for protein synthesis?",
        "question_hi": "कोशिका का कौन सा भाग प्रोटीन संश्लेषण के लिए जिम्मेदार है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the speed of light in diamond?",
        "question_hi": "हीरे में प्रकाश की गति क्या है?",
        "options_en": ["1.24×10⁸ m/s", "2.0×10⁸ m/s", "1.5×10⁸ m/s", "2.5×10⁸ m/s"],
        "options_hi": ["1.24×10⁸ m/s", "2.0×10⁸ m/s", "1.5×10⁸ m/s", "2.5×10⁸ m/s"],
        "answer_en": "1.24×10⁸ m/s",
        "answer_hi": "1.24×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the largest gulf in the world?",
        "question_hi": "दुनिया की सबसे बड़ी खाड़ी कौन सी है?",
        "options_en": ["Gulf of Mexico", "Persian Gulf", "Gulf of Guinea", "Gulf of Alaska"],
        "options_hi": ["मेक्सिको की खाड़ी", "फारस की खाड़ी", "गिनी की खाड़ी", "अलास्का की खाड़ी"],
        "answer_en": "Gulf of Mexico",
        "answer_hi": "मेक्सिको की खाड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical formula of Formic Acid?",
        "question_hi": "फॉर्मिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["HCOOH", "CH₃COOH", "H₂CO₃", "H₂C₂O₄"],
        "options_hi": ["HCOOH", "CH₃COOH", "H₂CO₃", "H₂C₂O₄"],
        "answer_en": "HCOOH",
        "answer_hi": "HCOOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Who wrote 'The Merchant of Venice'?",
        "question_hi": "'द मर्चेंट ऑफ वेनिस' किसने लिखा?",
        "options_en": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
        "options_hi": ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the formula for gravitational potential energy?",
        "question_hi": "गुरुत्वाकर्षण स्थितिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["mgh", "½mv²", "Gm₁m₂/r", "kx²/2"],
        "options_hi": ["mgh", "½mv²", "Gm₁m₂/r", "kx²/2"],
        "answer_en": "mgh",
        "answer_hi": "mgh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which gas is used in photosynthesis as a reactant?",
        "question_hi": "प्रकाश संश्लेषण में कौन सी गैस अभिकारक के रूप में प्रयोग होती है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the value of (a - b)³?",
        "question_hi": "(a - b)³ का मान क्या है?",
        "options_en": ["a³ - b³", "a³ - 3a²b + 3ab² - b³", "a³ + 3a²b - 3ab² + b³", "a³ - b³ - 3ab"],
        "options_hi": ["a³ - b³", "a³ - 3a²b + 3ab² - b³", "a³ + 3a²b - 3ab² + b³", "a³ - b³ - 3ab"],
        "answer_en": "a³ - 3a²b + 3ab² - b³",
        "answer_hi": "a³ - 3a²b + 3ab² - b³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which is the largest waterfall in the world?",
        "question_hi": "दुनिया का सबसे बड़ा झरना कौन सा है?",
        "options_en": ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
        "options_hi": ["एंजल फॉल्स", "नायाग्रा फॉल्स", "विक्टोरिया फॉल्स", "इगाज़ू फॉल्स"],
        "answer_en": "Angel Falls",
        "answer_hi": "एंजल फॉल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for Zirconium?",
        "question_hi": "जिरकोनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zi", "Zr", "Zc", "Zm"],
        "options_hi": ["Zi", "Zr", "Zc", "Zm"],
        "answer_en": "Zr",
        "answer_hi": "Zr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Who is known as the Father of the Green Revolution in India?",
        "question_hi": "भारत में हरित क्रांति के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["M.S. Swaminathan", "Norman Borlaug", "C. Subramaniam", "Vikram Sarabhai"],
        "options_hi": ["एम.एस. स्वामीनाथन", "नॉर्मन बोरलॉग", "सी. सुब्रह्मण्यम", "विक्रम साराभाई"],
        "answer_en": "M.S. Swaminathan",
        "answer_hi": "एम.एस. स्वामीनाथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which part of the plant is modified into a carrot?",
        "question_hi": "पौधे का कौन सा भाग गाजर में रूपांतरित होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Root",
        "answer_hi": "जड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the unit of angular momentum?",
        "question_hi": "कोणीय संवेग की इकाई क्या है?",
        "options_en": ["kg·m²/s", "N·m", "J·s", "Both kg·m²/s and J·s"],
        "options_hi": ["kg·m²/s", "N·m", "J·s", "kg·m²/s और J·s दोनों"],
        "answer_en": "Both kg·m²/s and J·s",
        "answer_hi": "kg·m²/s और J·s दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is the most abundant gas in the Sun?",
        "question_hi": "सूर्य में सबसे प्रचुर गैस कौन सी है?",
        "options_en": ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        "options_hi": ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "कार्बन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the chemical formula of Sodium Sulfate?",
        "question_hi": "सोडियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂SO₄", "NaSO₄", "Na₂S", "Na₂SO₃"],
        "options_hi": ["Na₂SO₄", "NaSO₄", "Na₂S", "Na₂SO₃"],
        "answer_en": "Na₂SO₄",
        "answer_hi": "Na₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Who invented the Printing Press?",
        "question_hi": "प्रिंटिंग प्रेस का आविष्कार किसने किया?",
        "options_en": ["Johannes Gutenberg", "James Watt", "Thomas Edison", "Alexander Graham Bell"],
        "options_hi": ["जोहान्स गुटेनबर्ग", "जेम्स वाट", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल"],
        "answer_en": "Johannes Gutenberg",
        "answer_hi": "जोहान्स गुटेनबर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the value of 24 × 25?",
        "question_hi": "24 × 25 का मान क्या है?",
        "options_en": ["600", "500", "700", "800"],
        "options_hi": ["600", "500", "700", "800"],
        "answer_en": "600",
        "answer_hi": "600",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is used in airships?",
        "question_hi": "एयरशिप में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the chemical symbol for Ruthenium?",
        "question_hi": "रुथेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ru", "Rt", "Rn", "Rh"],
        "options_hi": ["Ru", "Rt", "Rn", "Rh"],
        "answer_en": "Ru",
        "answer_hi": "Ru",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Who wrote 'Swapnavasavadattam'?",
        "question_hi": "'स्वप्नवासवदत्तम' किसने लिखा?",
        "options_en": ["Bhasa", "Kalidasa", "Bhavabhuti", "Sudraka"],
        "options_hi": ["भास", "कालिदास", "भवभूति", "शूद्रक"],
        "answer_en": "Bhasa",
        "answer_hi": "भास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the formula for escape velocity?",
        "question_hi": "पलायन वेग का सूत्र क्या है?",
        "options_en": ["√(2GM/R)", "√(GM/R)", "GM/R²", "2GM/R"],
        "options_hi": ["√(2GM/R)", "√(GM/R)", "GM/R²", "2GM/R"],
        "answer_en": "√(2GM/R)",
        "answer_hi": "√(2GM/R)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which vitamin deficiency causes Osteomalacia?",
        "question_hi": "किस विटामिन की कमी से ऑस्टियोमलेशिया होता है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the capital of South Africa?",
        "question_hi": "दक्षिण अफ्रीका की राजधानी क्या है?",
        "options_en": ["Pretoria", "Cape Town", "Johannesburg", "All of these"],
        "options_hi": ["प्रिटोरिया", "केप टाउन", "जोहान्सबर्ग", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the chemical formula of Potassium Chlorate?",
        "question_hi": "पोटेशियम क्लोरेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KClO₃", "KClO", "KClO₂", "KClO₄"],
        "options_hi": ["KClO₃", "KClO", "KClO₂", "KClO₄"],
        "answer_en": "KClO₃",
        "answer_hi": "KClO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Who discovered the vaccination for smallpox?",
        "question_hi": "चेचक के टीके की खोज किसने की?",
        "options_en": ["Edward Jenner", "Louis Pasteur", "Alexander Fleming", "Robert Koch"],
        "options_hi": ["एडवर्ड जेनर", "लुई पाश्चर", "अलेक्जेंडर फ्लेमिंग", "रॉबर्ट कोच"],
        "answer_en": "Edward Jenner",
        "answer_hi": "एडवर्ड जेनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the value of cos 120°?",
        "question_hi": "cos 120° का मान क्या है?",
        "options_en": ["-1/2", "1/2", "-√3/2", "√3/2"],
        "options_hi": ["-1/2", "1/2", "-√3/2", "√3/2"],
        "answer_en": "-1/2",
        "answer_hi": "-1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which is the fastest rotating planet?",
        "question_hi": "सबसे तेज घूमने वाला ग्रह कौन सा है?",
        "options_en": ["Jupiter", "Saturn", "Venus", "Mercury"],
        "options_hi": ["बृहस्पति", "शनि", "शुक्र", "बुध"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical name of Borax?",
        "question_hi": "बोरेक्स का रासायनिक नाम क्या है?",
        "options_en": ["Sodium Tetraborate", "Sodium Carbonate", "Sodium Bicarbonate", "Sodium Hydroxide"],
        "options_hi": ["सोडियम टेट्राबोरेट", "सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
        "answer_en": "Sodium Tetraborate",
        "answer_hi": "सोडियम टेट्राबोरेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Who wrote 'The Scarlet Letter'?",
        "question_hi": "'द स्कार्लेट लेटर' किसने लिखा?",
        "options_en": ["Nathaniel Hawthorne", "Herman Melville", "Mark Twain", "Edgar Allan Poe"],
        "options_hi": ["नथानिएल हॉथोर्न", "हरमन मेलविल", "मार्क ट्वेन", "एडगर एलन पो"],
        "answer_en": "Nathaniel Hawthorne",
        "answer_hi": "नथानिएल हॉथोर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the formula for surface area of a cone?",
        "question_hi": "शंकु के पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["πr(l + r)", "πrl", "πr²", "2πr²"],
        "options_hi": ["πr(l + r)", "πrl", "πr²", "2πr²"],
        "answer_en": "πr(l + r)",
        "answer_hi": "πr(l + r)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which blood cells are involved in allergic reactions?",
        "question_hi": "कौन सी रक्त कोशिकाएं एलर्जी प्रतिक्रियाओं में शामिल होती हैं?",
        "options_en": ["Basophils", "Neutrophils", "Lymphocytes", "Monocytes"],
        "options_hi": ["बेसोफिल्स", "न्यूट्रोफिल्स", "लिम्फोसाइट्स", "मोनोसाइट्स"],
        "answer_en": "Basophils",
        "answer_hi": "बेसोफिल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the unit of electric flux?",
        "question_hi": "विद्युत फ्लक्स की इकाई क्या है?",
        "options_en": ["Volt-meter", "Weber", "Tesla", "Both Volt-meter and Weber"],
        "options_hi": ["वोल्ट-मीटर", "वेबर", "टेस्ला", "वोल्ट-मीटर और वेबर दोनों"],
        "answer_en": "Both Volt-meter and Weber",
        "answer_hi": "वोल्ट-मीटर और वेबर दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which organelle is known as the 'powerhouse of the cell'?",
        "question_hi": "कोशिका के 'पावरहाउस' के रूप में किस अंग को जाना जाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the value of ∫x dx?",
        "question_hi": "∫x dx का मान क्या है?",
        "options_en": ["x²/2 + C", "x² + C", "1 + C", "x + C"],
        "options_hi": ["x²/2 + C", "x² + C", "1 + C", "x + C"],
        "answer_en": "x²/2 + C",
        "answer_hi": "x²/2 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which law states that pressure is inversely proportional to volume at constant temperature?",
        "question_hi": "कौन सा नियम कहता है कि नियत तापमान पर दबाव आयतन के व्युत्क्रमानुपाती होता है?",
        "options_en": ["Charles' Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
        "options_hi": ["चार्ल्स का नियम", "बॉयल का नियम", "गे-लुसाक का नियम", "अवोगाद्रो का नियम"],
        "answer_en": "Boyle's Law",
        "answer_hi": "बॉयल का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Who wrote the novel 'Pride and Prejudice'?",
        "question_hi": "'प्राइड एंड प्रेजुडिस' उपन्यास किसने लिखा?",
        "options_en": ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Charles Dickens"],
        "options_hi": ["शार्लोट ब्रोंटे", "जेन ऑस्टेन", "एमिली ब्रोंटे", "चार्ल्स डिकेंस"],
        "answer_en": "Jane Austen",
        "answer_hi": "जेन ऑस्टेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the chemical symbol for Silver?",
        "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Ag", "Au", "S"],
        "options_hi": ["Si", "Ag", "Au", "S"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which is the longest river in Asia?",
        "question_hi": "एशिया की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Yangtze", "Ganges", "Mekong", "Yellow River"],
        "options_hi": ["यांग्त्ज़ी", "गंगा", "मेकांग", "येलो रिवर"],
        "answer_en": "Yangtze",
        "answer_hi": "यांग्त्ज़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the formula for Newton's Second Law of Motion?",
        "question_hi": "न्यूटन के गति के दूसरे नियम का सूत्र क्या है?",
        "options_en": ["F = ma", "F = mv", "F = mgh", "F = kx"],
        "options_hi": ["F = ma", "F = mv", "F = mgh", "F = kx"],
        "answer_en": "F = ma",
        "answer_hi": "F = ma",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which vitamin is also known as Ascorbic Acid?",
        "question_hi": "किस विटामिन को एस्कॉर्बिक एसिड के नाम से भी जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the chemical formula of Ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "NO₂", "N₂H₄"],
        "options_hi": ["NH₃", "NH₄", "NO₂", "N₂H₄"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Who discovered the electron?",
        "question_hi": "इलेक्ट्रॉन की खोज किसने की?",
        "options_en": ["Ernest Rutherford", "J.J. Thomson", "James Chadwick", "Niels Bohr"],
        "options_hi": ["अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "जेम्स चैडविक", "नील्स बोहर"],
        "answer_en": "J.J. Thomson",
        "answer_hi": "जे.जे. थॉमसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the value of tan 45°?",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["1", "0", "√3", "1/√3"],
        "options_hi": ["1", "0", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which part of the flower develops into fruit?",
        "question_hi": "फूल का कौन सा भाग फल में विकसित होता है?",
        "options_en": ["Petal", "Sepal", "Ovary", "Stamen"],
        "options_hi": ["पंखुड़ी", "बाह्यदल", "अंडाशय", "पुंकेसर"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Decibel", "Watt", "Newton"],
        "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "न्यूटन"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which gas is known as 'Laughing Gas'?",
        "question_hi": "किस गैस को 'हंसाने वाली गैस' के नाम से जाना जाता है?",
        "options_en": ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Hydrogen"],
        "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन"],
        "answer_en": "Nitrous Oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Who wrote the epic 'Ramcharitmanas'?",
        "question_hi": "महाकाव्य 'रामचरितमानस' किसने लिखा?",
        "options_en": ["Tulsidas", "Surdas", "Kabir", "Mirabai"],
        "options_hi": ["तुलसीदास", "सूरदास", "कबीर", "मीराबाई"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the chemical formula of Methane?",
        "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which is the smallest bone in the human body?",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
        "options_en": ["Stapes", "Femur", "Tibia", "Radius"],
        "options_hi": ["स्टेप्स", "फीमर", "टिबिया", "रेडियस"],
        "answer_en": "Stapes",
        "answer_hi": "स्टेप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the value of 7! (7 factorial)?",
        "question_hi": "7! (7 फैक्टोरियल) का मान क्या है?",
        "options_en": ["5040", "720", "40320", "120"],
        "options_hi": ["5040", "720", "40320", "120"],
        "answer_en": "5040",
        "answer_hi": "5040",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which planet is known as the 'Red Planet'?",
        "question_hi": "किस ग्रह को 'लाल ग्रह' के नाम से जाना जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical symbol for Gold?",
        "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
        "options_en": ["Go", "Gd", "Au", "Ag"],
        "options_hi": ["Go", "Gd", "Au", "Ag"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Who invented the telephone?",
        "question_hi": "टेलीफोन का आविष्कार किसने किया?",
        "options_en": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "गुग्लिल्मो मार्कोनी"],
        "answer_en": "Alexander Graham Bell",
        "answer_hi": "अलेक्जेंडर ग्राहम बेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the formula for the area of a circle?",
        "question_hi": "वृत्त के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["2πr", "πr²", "πd", "4πr²"],
        "options_hi": ["2πr", "πr²", "πd", "4πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which gland is known as the 'master gland'?",
        "question_hi": "किस ग्रंथि को 'मास्टर ग्रंथि' के नाम से जाना जाता है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थायरॉयड", "पिट्यूटरी", "अधिवृक्क", "अग्न्याशय"],
        "answer_en": "Pituitary",
        "answer_hi": "पिट्यूटरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the SI unit of force?",
        "question_hi": "बल की SI इकाई क्या है?",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which is the largest ocean on Earth?",
        "question_hi": "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical formula of Sulfuric Acid?",
        "question_hi": "सल्फ्यूरिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "options_hi": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Who wrote 'Godan'?",
        "question_hi": "'गोदान' किसने लिखा?",
        "options_en": ["Premchand", "Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi Nirala"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी निराला"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the value of log₁₀100?",
        "question_hi": "log₁₀100 का मान क्या है?",
        "options_en": ["1", "2", "10", "100"],
        "options_hi": ["1", "2", "10", "100"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which blood group is known as the universal donor?",
        "question_hi": "किस रक्त समूह को सार्वत्रिक दाता के रूप में जाना जाता है?",
        "options_en": ["A+", "B+", "O+", "O-"],
        "options_hi": ["A+", "B+", "O+", "O-"],
        "answer_en": "O-",
        "answer_hi": "O-",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the unit of electric current?",
        "question_hi": "विद्युत धारा की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पीयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Kalahari Desert"],
        "options_hi": ["सहारा रेगिस्तान", "गोबी रेगिस्तान", "अरबी रेगिस्तान", "कालाहारी रेगिस्तान"],
        "answer_en": "Sahara Desert",
        "answer_hi": "सहारा रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical formula of Glucose?",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Who discovered penicillin?",
        "question_hi": "पेनिसिलिन की खोज किसने की?",
        "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
        "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "जोसेफ लिस्टर"],
        "answer_en": "Alexander Fleming",
        "answer_hi": "अलेक्जेंडर फ्लेमिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the value of sin 90°?",
        "question_hi": "sin 90° का मान क्या है?",
        "options_en": ["0", "1", "√3/2", "1/2"],
        "options_hi": ["0", "1", "√3/2", "1/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which planet has the most moons?",
        "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
        "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical name of Baking Soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
        "options_en": ["Sodium Carbonate", "Sodium Bicarbonate", "Sodium Hydroxide", "Sodium Chloride"],
        "options_hi": ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium Bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Who wrote 'Hamlet'?",
        "question_hi": "'हैमलेट' किसने लिखा?",
        "options_en": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
        "options_hi": ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the formula for volume of a sphere?",
        "question_hi": "गोले के आयतन का सूत्र क्या है?",
        "options_en": ["4/3πr³", "πr²h", "1/3πr²h", "4πr²"],
        "options_hi": ["4/3πr³", "πr²h", "1/3πr²h", "4πr²"],
        "answer_en": "4/3πr³",
        "answer_hi": "4/3πr³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which vitamin deficiency causes Night Blindness?",
        "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the unit of power?",
        "question_hi": "शक्ति की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which is the highest mountain peak in the world?",
        "question_hi": "दुनिया की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        "options_hi": ["K2", "माउंट एवरेस्ट", "कंचनजंगा", "ल्होत्से"],
        "answer_en": "Mount Everest",
        "answer_hi": "माउंट एवरेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of Carbon Dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the value of 2⁵?",
        "question_hi": "2⁵ का मान क्या है?",
        "options_en": ["16", "32", "64", "128"],
        "options_hi": ["16", "32", "64", "128"],
        "answer_en": "32",
        "answer_hi": "32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which part of the human eye controls the amount of light entering?",
        "question_hi": "मानव आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Cornea", "Lens", "Iris", "Retina"],
        "options_hi": ["कॉर्निया", "लेंस", "आईरिस", "रेटिना"],
        "answer_en": "Iris",
        "answer_hi": "आईरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the SI unit of temperature?",
        "question_hi": "तापमान की SI इकाई क्या है?",
        "options_en": ["Fahrenheit", "Celsius", "Kelvin", "Rankine"],
        "options_hi": ["फारेनहाइट", "सेल्सियस", "केल्विन", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which gas is used in refrigerators?",
        "question_hi": "रेफ्रिजरेटर में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Ammonia", "Chlorofluorocarbon", "Carbon Dioxide", "Nitrogen"],
        "options_hi": ["अमोनिया", "क्लोरोफ्लोरोकार्बन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
        "answer_en": "Chlorofluorocarbon",
        "answer_hi": "क्लोरोफ्लोरोकार्बन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the chemical symbol for Iron?",
        "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ir", "Fe", "In", "I"],
        "options_hi": ["Ir", "Fe", "In", "I"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Who wrote 'The Divine Comedy'?",
        "question_hi": "'द डिवाइन कॉमेडी' किसने लिखी?",
        "options_en": ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare"],
        "options_hi": ["दांते अलीगिएरी", "जेफ्री चॉसर", "जॉन मिल्टन", "विलियम शेक्सपियर"],
        "answer_en": "Dante Alighieri",
        "answer_hi": "दांते अलीगिएरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the formula for kinetic energy?",
        "question_hi": "गतिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["mgh", "½mv²", "Fd", "ma"],
        "options_hi": ["mgh", "½mv²", "Fd", "ma"],
        "answer_en": "½mv²",
        "answer_hi": "½mv²",
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