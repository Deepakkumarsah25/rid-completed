const questions = [
  {
    "num": 1,
    "question_en": "Which is the smallest planet in our solar system?",
    "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
    "options_en": ["Mars", "Mercury", "Venus", "Pluto"],
    "options_hi": ["मंगल", "बुध", "शुक्र", "प्लूटो"],
    "answer_en": "Mercury",
    "answer_hi": "बुध"
  },
  {
    "num": 2,
    "question_en": "What is the chemical symbol for carbon?",
    "question_hi": "कार्बन का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ca", "C", "Cr", "Co"],
    "options_hi": ["Ca", "C", "Cr", "Co"],
    "answer_en": "C",
    "answer_hi": "C"
  },
  {
    "num": 3,
    "question_en": "Who wrote 'Hamlet'?",
    "question_hi": "'हैमलेट' किसने लिखा?",
    "options_en": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Milton"],
    "options_hi": ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन मिल्टन"],
    "answer_en": "William Shakespeare",
    "answer_hi": "विलियम शेक्सपियर"
  },
  {
    "num": 4,
    "question_en": "Which planet is known as the 'Evening Star'?",
    "question_hi": "किस ग्रह को 'शाम का तारा' के नाम से जाना जाता है?",
    "options_en": ["Mars", "Jupiter", "Venus", "Saturn"],
    "options_hi": ["मंगल", "बृहस्पति", "शुक्र", "शनि"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र"
  },
  {
    "num": 5,
    "question_en": "What is the capital of Greece?",
    "question_hi": "ग्रीस की राजधानी क्या है?",
    "options_en": ["Athens", "Thessaloniki", "Patras", "Heraklion"],
    "options_hi": ["एथेंस", "थेसालोनिकी", "पाट्रास", "हेराक्लियन"],
    "answer_en": "Athens",
    "answer_hi": "एथेंस"
  },
  {
    "num": 6,
    "question_en": "Which vitamin deficiency causes rickets?",
    "question_hi": "किस विटामिन की कमी से रिकेट्स रोग होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन डी"
  },
  {
    "num": 7,
    "question_en": "Which is the largest coral reef system?",
    "question_hi": "सबसे बड़ी प्रवाल भित्ति प्रणाली कौन सी है?",
    "options_en": ["Belize Barrier Reef", "New Caledonia Barrier Reef", "Great Barrier Reef", "Red Sea Coral Reef"],
    "options_hi": ["बेलीज बैरियर रीफ", "न्यू कैलेडोनिया बैरियर रीफ", "ग्रेट बैरियर रीफ", "रेड सी कोरल रीफ"],
    "answer_en": "Great Barrier Reef",
    "answer_hi": "ग्रेट बैरियर रीफ"
  },
  {
    "num": 8,
    "question_en": "Who composed the opera 'Carmen'?",
    "question_hi": "'कारमेन' ओपेरा किसने रचा?",
    "options_en": ["Giuseppe Verdi", "Georges Bizet", "Richard Wagner", "Giacomo Puccini"],
    "options_hi": ["ज्युसेपे वर्डी", "जॉर्जेस बिज़ेट", "रिचर्ड वैगनर", "जैकोमो पुच्चिनी"],
    "answer_en": "Georges Bizet",
    "answer_hi": "जॉर्जेस बिज़ेट"
  },
  {
    "num": 9,
    "question_en": "What is the chemical formula for hydrogen peroxide?",
    "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "HO2", "H2O2", "H3O"],
    "options_hi": ["H2O", "HO2", "H2O2", "H3O"],
    "answer_en": "H2O2",
    "answer_hi": "H2O2"
  },
  {
    "num": 10,
    "question_en": "Which country is shaped like a boot?",
    "question_hi": "कौन सा देश बूट के आकार का है?",
    "options_en": ["Greece", "Spain", "Italy", "Portugal"],
    "options_hi": ["ग्रीस", "स्पेन", "इटली", "पुर्तगाल"],
    "answer_en": "Italy",
    "answer_hi": "इटली"
  },
  {
    "num": 11,
    "question_en": "What is the main ingredient in guacamole?",
    "question_hi": "गुआकामोले में मुख्य घटक क्या है?",
    "options_en": ["Tomato", "Onion", "Avocado", "Pepper"],
    "options_hi": ["टमाटर", "प्याज", "एवोकाडो", "मिर्च"],
    "answer_en": "Avocado",
    "answer_hi": "एवोकाडो"
  },
  {
    "num": 12,
    "question_en": "Which gas is used in photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण में किस गैस का उपयोग होता है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड"
  },
  {
    "num": 13,
    "question_en": "Who painted 'The Birth of Venus'?",
    "question_hi": "'द बर्थ ऑफ वीनस' किसने चित्रित की?",
    "options_en": ["Leonardo da Vinci", "Sandro Botticelli", "Raphael", "Titian"],
    "options_hi": ["लियोनार्डो दा विंची", "सैंड्रो बोट्टीसेली", "राफेल", "टिशियन"],
    "answer_en": "Sandro Botticelli",
    "answer_hi": "सैंड्रो बोट्टीसेली"
  },
  {
    "num": 14,
    "question_en": "What is the currency of Switzerland?",
    "question_hi": "स्विट्जरलैंड की मुद्रा क्या है?",
    "options_en": ["Euro", "Swiss Franc", "Dollar", "Pound"],
    "options_hi": ["यूरो", "स्विस फ्रैंक", "डॉलर", "पाउंड"],
    "answer_en": "Swiss Franc",
    "answer_hi": "स्विस फ्रैंक"
  },
  {
    "num": 15,
    "question_en": "Which organ produces red blood cells?",
    "question_hi": "लाल रक्त कोशिकाएं कौन सा अंग उत्पन्न करता है?",
    "options_en": ["Liver", "Heart", "Bone Marrow", "Spleen"],
    "options_hi": ["यकृत", "हृदय", "अस्थि मज्जा", "तिल्ली"],
    "answer_en": "Bone Marrow",
    "answer_hi": "अस्थि मज्जा"
  },
  {
    "num": 16,
    "question_en": "What is the capital of Pakistan?",
    "question_hi": "पाकिस्तान की राजधानी क्या है?",
    "options_en": ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
    "options_hi": ["कराची", "लाहौर", "इस्लामाबाद", "रावलपिंडी"],
    "answer_en": "Islamabad",
    "answer_hi": "इस्लामाबाद"
  },
  {
    "num": 17,
    "question_en": "Which is the largest big cat?",
    "question_hi": "सबसे बड़ी बड़ी बिल्ली कौन सी है?",
    "options_en": ["Lion", "Tiger", "Leopard", "Jaguar"],
    "options_hi": ["शेर", "बाघ", "तेंदुआ", "जगुआर"],
    "answer_en": "Tiger",
    "answer_hi": "बाघ"
  },
  {
    "num": 18,
    "question_en": "Who discovered the electron?",
    "question_hi": "इलेक्ट्रॉन की खोज किसने की?",
    "options_en": ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "James Chadwick"],
    "options_hi": ["जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड", "नील्स बोहर", "जेम्स चैडविक"],
    "answer_en": "J.J. Thomson",
    "answer_hi": "जे.जे. थॉमसन"
  },
  {
    "num": 19,
    "question_en": "What is the capital of Nigeria?",
    "question_hi": "नाइजीरिया की राजधानी क्या है?",
    "options_en": ["Lagos", "Abuja", "Kano", "Ibadan"],
    "options_hi": ["लागोस", "अबुजा", "कानो", "इबादान"],
    "answer_en": "Abuja",
    "answer_hi": "अबुजा"
  },
  {
    "num": 20,
    "question_en": "Which is the largest species of bear?",
    "question_hi": "भालू की सबसे बड़ी प्रजाति कौन सी है?",
    "options_en": ["Grizzly Bear", "Polar Bear", "Brown Bear", "Black Bear"],
    "options_hi": ["ग्रिज़ली भालू", "ध्रुवीय भालू", "भूरा भालू", "काला भालू"],
    "answer_en": "Polar Bear",
    "answer_hi": "ध्रुवीय भालू"
  },
  {
    "num": 21,
    "question_en": "What is the chemical symbol for aluminum?",
    "question_hi": "एल्युमिनियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["Al", "Am", "Au", "Ag"],
    "options_hi": ["Al", "Am", "Au", "Ag"],
    "answer_en": "Al",
    "answer_hi": "Al"
  },
  {
    "num": 22,
    "question_en": "Who wrote 'Crime and Punishment'?",
    "question_hi": "'अपराध और सजा' किसने लिखी?",
    "options_en": ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
    "options_hi": ["लियो टॉल्स्टॉय", "फ्योडोर दोस्तोव्स्की", "एंटन चेखव", "इवान तुर्गनेव"],
    "answer_en": "Fyodor Dostoevsky",
    "answer_hi": "फ्योडोर दोस्तोव्स्की"
  },
  {
    "num": 23,
    "question_en": "Which is the saltiest sea?",
    "question_hi": "सबसे नमकीन समुद्र कौन सा है?",
    "options_en": ["Mediterranean Sea", "Red Sea", "Dead Sea", "Black Sea"],
    "options_hi": ["भूमध्य सागर", "लाल सागर", "मृत सागर", "काला सागर"],
    "answer_en": "Dead Sea",
    "answer_hi": "मृत सागर"
  },
  {
    "num": 24,
    "question_en": "What is the main component of biogas?",
    "question_hi": "बायोगैस का मुख्य घटक क्या है?",
    "options_en": ["Propane", "Butane", "Methane", "Ethane"],
    "options_hi": ["प्रोपेन", "ब्यूटेन", "मीथेन", "इथेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन"
  },
  {
    "num": 25,
    "question_en": "Which country is known as the 'Land of the Thunder Dragon'?",
    "question_hi": "किस देश को 'थंडर ड्रैगन की भूमि' के रूप में जाना जाता है?",
    "options_en": ["Nepal", "Bhutan", "Tibet", "Myanmar"],
    "options_hi": ["नेपाल", "भूटान", "तिब्बत", "म्यांमार"],
    "answer_en": "Bhutan",
    "answer_hi": "भूटान"
  },
  {
    "num": 26,
    "question_en": "What is 30% of 200?",
    "question_hi": "200 का 30% क्या है?",
    "options_en": ["40", "50", "60", "70"],
    "options_hi": ["40", "50", "60", "70"],
    "answer_en": "60",
    "answer_hi": "60"
  },
  {
    "num": 27,
    "question_en": "Which vitamin helps in calcium absorption?",
    "question_hi": "कौन सा विटामिन कैल्शियम अवशोषण में मदद करता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन के"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन डी"
  },
  {
    "num": 28,
    "question_en": "Who was the first Indian woman in space?",
    "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थीं?",
    "options_en": ["Sunita Williams", "Kalpana Chawla", "Rakesh Sharma", "Ravish Malhotra"],
    "options_hi": ["सुनीता विलियम्स", "कल्पना चावला", "राकेश शर्मा", "रवीश मल्होत्रा"],
    "answer_en": "Kalpana Chawla",
    "answer_hi": "कल्पना चावला"
  },
  {
    "num": 29,
    "question_en": "What is the capital of Vietnam?",
    "question_hi": "वियतनाम की राजधानी क्या है?",
    "options_en": ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hai Phong"],
    "options_hi": ["हो ची मिन्ह सिटी", "हनोई", "दा नांग", "हाई फोंग"],
    "answer_en": "Hanoi",
    "answer_hi": "हनोई"
  },
  {
    "num": 30,
    "question_en": "Which gas is used in neon signs?",
    "question_hi": "नीयन साइन में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Argon", "Neon", "Helium", "Xenon"],
    "options_hi": ["आर्गन", "नीयन", "हीलियम", "जीनॉन"],
    "answer_en": "Neon",
    "answer_hi": "नीयन"
  },
  {
    "num": 31,
    "question_en": "Who wrote 'Moby Dick'?",
    "question_hi": "'मोबी डिक' किसने लिखी?",
    "options_en": ["Herman Melville", "Nathaniel Hawthorne", "Edgar Allan Poe", "Mark Twain"],
    "options_hi": ["हरमन मेलविल", "नथानिएल हॉथोर्न", "एडगर एलन पो", "मार्क ट्वेन"],
    "answer_en": "Herman Melville",
    "answer_hi": "हरमन मेलविल"
  },
  {
    "num": 32,
    "question_en": "Which is the highest waterfall in the world?",
    "question_hi": "दुनिया का सबसे ऊंचा झरना कौन सा है?",
    "options_en": ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
    "options_hi": ["नियाग्रा फॉल्स", "विक्टोरिया फॉल्स", "एंजेल फॉल्स", "इगुआज़ू फॉल्स"],
    "answer_en": "Angel Falls",
    "answer_hi": "एंजेल फॉल्स"
  },
  {
    "num": 33,
    "question_en": "What is the control center of the cell?",
    "question_hi": "कोशिका का नियंत्रण केंद्र क्या है?",
    "options_en": ["Mitochondria", "Nucleus", "Cytoplasm", "Ribosome"],
    "options_hi": ["माइटोकॉन्ड्रिया", "केंद्रक", "कोशिकाद्रव्य", "राइबोसोम"],
    "answer_en": "Nucleus",
    "answer_hi": "केंद्रक"
  },
  {
    "num": 34,
    "question_en": "What is the chemical symbol for silicon?",
    "question_hi": "सिलिकॉन का रासायनिक प्रतीक क्या है?",
    "options_en": ["Si", "Sl", "Sn", "Sc"],
    "options_hi": ["Si", "Sl", "Sn", "Sc"],
    "answer_en": "Si",
    "answer_hi": "Si"
  },
  {
    "num": 35,
    "question_en": "Who painted 'Girl with a Pearl Earring'?",
    "question_hi": "'गर्ल विद ए पर्ल अर्निंग' किसने चित्रित की?",
    "options_en": ["Rembrandt", "Vermeer", "Rubens", "Van Dyck"],
    "options_hi": ["रेम्ब्रांड", "वर्मीर", "रूबेंस", "वैन डाइक"],
    "answer_en": "Vermeer",
    "answer_hi": "वर्मीर"
  },
  {
    "num": 36,
    "question_en": "Which is the national animal of China?",
    "question_hi": "चीन का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Dragon", "Panda", "Tiger", "Elephant"],
    "options_hi": ["ड्रैगन", "पांडा", "बाघ", "हाथी"],
    "answer_en": "Panda",
    "answer_hi": "पांडा"
  },
  {
    "num": 37,
    "question_en": "What is 12 squared?",
    "question_hi": "12 का वर्ग क्या है?",
    "options_en": ["121", "144", "169", "196"],
    "options_hi": ["121", "144", "169", "196"],
    "answer_en": "144",
    "answer_hi": "144"
  },
  {
    "num": 38,
    "question_en": "Which organ filters waste from blood?",
    "question_hi": "कौन सा अंग रक्त से अपशिष्ट को फिल्टर करता है?",
    "options_en": ["Liver", "Kidneys", "Lungs", "Heart"],
    "options_hi": ["यकृत", "गुर्दे", "फेफड़े", "हृदय"],
    "answer_en": "Kidneys",
    "answer_hi": "गुर्दे"
  },
  {
    "num": 39,
    "question_en": "What is the capital of Saudi Arabia?",
    "question_hi": "सऊदी अरब की राजधानी क्या है?",
    "options_en": ["Riyadh", "Jeddah", "Mecca", "Medina"],
    "options_hi": ["रियाद", "जेद्दा", "मक्का", "मदीना"],
    "answer_en": "Riyadh",
    "answer_hi": "रियाद"
  },
  {
    "num": 40,
    "question_en": "Which mineral is the hardest after diamond?",
    "question_hi": "हीरे के बाद सबसे कठोर खनिज कौन सा है?",
    "options_en": ["Topaz", "Ruby", "Sapphire", "Corundum"],
    "options_hi": ["टोपाज", "रूबी", "नीलम", "करुंडम"],
    "answer_en": "Corundum",
    "answer_hi": "करुंडम"
  },
  {
    "num": 41,
    "question_en": "Who invented the telephone's predecessor, the telegraph?",
    "question_hi": "टेलीफोन के पूर्ववर्ती टेलीग्राफ का आविष्कार किसने किया?",
    "options_en": ["Samuel Morse", "Alexander Graham Bell", "Thomas Edison", "Guglielmo Marconi"],
    "options_hi": ["सैमुअल मोर्स", "अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "गुग्लिल्मो मार्कोनी"],
    "answer_en": "Samuel Morse",
    "answer_hi": "सैमुअल मोर्स"
  },
  {
    "num": 42,
    "question_en": "What is the chemical formula for glucose?",
    "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
    "options_en": ["C6H12O6", "C12H22O11", "CH4", "CO2"],
    "options_hi": ["C6H12O6", "C12H22O11", "CH4", "CO2"],
    "answer_en": "C6H12O6",
    "answer_hi": "C6H12O6"
  },
  {
    "num": 43,
    "question_en": "Which is the deepest lake in the world?",
    "question_hi": "दुनिया की सबसे गहरी झील कौन सी है?",
    "options_en": ["Lake Superior", "Lake Baikal", "Lake Tanganyika", "Caspian Sea"],
    "options_hi": ["लेक सुपीरियर", "बैकाल झील", "टैंगानिका झील", "कैस्पियन सागर"],
    "answer_en": "Lake Baikal",
    "answer_hi": "बैकाल झील"
  },
  {
    "num": 44,
    "question_en": "Who was the first Prime Minister of India?",
    "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "राजेंद्र प्रसाद"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू"
  },
  {
    "num": 45,
    "question_en": "What is the freezing point of alcohol?",
    "question_hi": "अल्कोहल का हिमांक क्या है?",
    "options_en": ["0°C", "-78°C", "-114°C", "-196°C"],
    "options_hi": ["0°C", "-78°C", "-114°C", "-196°C"],
    "answer_en": "-114°C",
    "answer_hi": "-114°C"
  },
  {
    "num": 46,
    "question_en": "Which country is the largest producer of cocoa?",
    "question_hi": "कोको का सबसे बड़ा उत्पादक देश कौन सा है?",
    "options_en": ["Ghana", "Ivory Coast", "Indonesia", "Brazil"],
    "options_hi": ["घाना", "आइवरी कोस्ट", "इंडोनेशिया", "ब्राज़ील"],
    "answer_en": "Ivory Coast",
    "answer_hi": "आइवरी कोस्ट"
  },
  {
    "num": 47,
    "question_en": "What is the capital of France?",
    "question_hi": "फ्रांस की राजधानी क्या है?",
    "options_en": ["Lyon", "Marseille", "Paris", "Nice"],
    "options_hi": ["ल्यों", "मार्सेल", "पेरिस", "नाइस"],
    "answer_en": "Paris",
    "answer_hi": "पेरिस"
  },
  {
    "num": 48,
    "question_en": "Which gas is known as 'fixed air'?",
    "question_hi": "किस गैस को 'फिक्स्ड एयर' के नाम से जाना जाता है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड"
  },
  {
    "num": 49,
    "question_en": "Who wrote 'The Divine Comedy'?",
    "question_hi": "'द डिवाइन कॉमेडी' किसने लिखी?",
    "options_en": ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare"],
    "options_hi": ["डांटे अलीगिएरी", "जेफ्री चौसर", "जॉन मिल्टन", "विलियम शेक्सपियर"],
    "answer_en": "Dante Alighieri",
    "answer_hi": "डांटे अलीगिएरी"
  },
  {
    "num": 50,
    "question_en": "What is the chemical symbol for tungsten?",
    "question_hi": "टंगस्टन का रासायनिक प्रतीक क्या है?",
    "options_en": ["Tg", "Tu", "W", "Ts"],
    "options_hi": ["Tg", "Tu", "W", "Ts"],
    "answer_en": "W",
    "answer_hi": "W"
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