const questions = [
    {
        "num": 1,
        "question_en": "What is the process by which plants lose water vapor through leaves?",
        "question_hi": "पौधों द्वारा पत्तियों के माध्यम से जल वाष्प खोने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Photosynthesis", "Transpiration", "Respiration", "Evaporation"],
        "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन", "वाष्पीकरण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the value of ∫(3x² + 2x) dx?",
        "question_hi": "∫(3x² + 2x) dx का मान क्या है?",
        "options_en": ["x³ + x² + C", "x³ + 2x² + C", "3x³ + x² + C", "x³ + x²/2 + C"],
        "options_hi": ["x³ + x² + C", "x³ + 2x² + C", "3x³ + x² + C", "x³ + x²/2 + C"],
        "answer_en": "x³ + x² + C",
        "answer_hi": "x³ + x² + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which law states that current is directly proportional to voltage?",
        "question_hi": "कौन सा नियम कहता है कि धारा वोल्टेज के समानुपाती होती है?",
        "options_en": ["Ohm's Law", "Faraday's Law", "Kirchhoff's Law", "Ampere's Law"],
        "options_hi": ["ओम का नियम", "फैराडे का नियम", "किरचॉफ का नियम", "एम्पियर का नियम"],
        "answer_en": "Ohm's Law",
        "answer_hi": "ओम का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the chemical formula of Sodium hydroxide?",
        "question_hi": "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"],
        "options_hi": ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Who wrote 'Macbeth'?",
        "question_hi": "'मैकबेथ' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which is the largest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Earth", "Jupiter", "Saturn", "Neptune"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "वरुण"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the main function of white blood cells?",
        "question_hi": "श्वेत रक्त कोशिकाओं का मुख्य कार्य क्या है?",
        "options_en": ["Oxygen transport", "Disease fighting", "Blood clotting", "Nutrient transport"],
        "options_hi": ["ऑक्सीजन परिवहन", "रोग प्रतिरोध", "रक्त का थक्का जमना", "पोषक तत्व परिवहन"],
        "answer_en": "Disease fighting",
        "answer_hi": "रोग प्रतिरोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the value of d/dx(x³)?",
        "question_hi": "d/dx(x³) का मान क्या है?",
        "options_en": ["3x²", "3x", "x²", "2x²"],
        "options_hi": ["3x²", "3x", "x²", "2x²"],
        "answer_en": "3x²",
        "answer_hi": "3x²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलम्ब", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलम्ब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Who wrote 'Hamlet'?",
        "question_hi": "'हैमलेट' किसने लिखा?",
        "options_en": ["William Shakespeare", "George Bernard Shaw", "Oscar Wilde", "Samuel Beckett"],
        "options_hi": ["विलियम शेक्सपियर", "जॉर्ज बर्नार्ड शॉ", "ऑस्कर वाइल्ड", "सैमुअल बेकेट"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "What is the value of ∫(cos x) dx?",
        "question_hi": "∫(cos x) dx का मान क्या है?",
        "options_en": ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
        "options_hi": ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
        "answer_en": "sin x + C",
        "answer_hi": "sin x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the principle behind the working of a electric motor?",
        "question_hi": "विद्युत मोटर के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Electromagnetic induction", "Magnetic effect of current", "Heating effect", "Chemical effect"],
        "options_hi": ["विद्युत चुम्बकीय प्रेरण", "धारा का चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव"],
        "answer_en": "Magnetic effect of current",
        "answer_hi": "धारा का चुंबकीय प्रभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the chemical formula of Carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "CO₃"],
        "options_hi": ["CO", "CO₂", "C₂O", "CO₃"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Who wrote 'The Tempest'?",
        "question_hi": "'द टेम्पेस्ट' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which part of the human eye controls the amount of light entering?",
        "question_hi": "मानव आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Cornea", "Retina", "Iris", "Lens"],
        "options_hi": ["कॉर्निया", "रेटिना", "आइरिस", "लेंस"],
        "answer_en": "Iris",
        "answer_hi": "आइरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the value of d/dx(e^x)?",
        "question_hi": "d/dx(e^x) का मान क्या है?",
        "options_en": ["e^x", "xe^x", "e^x/x", "ln x"],
        "options_hi": ["e^x", "xe^x", "e^x/x", "ln x"],
        "answer_en": "e^x",
        "answer_hi": "e^x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the unit of resistance?",
        "question_hi": "प्रतिरोध की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which metal is used in making electric wires?",
        "question_hi": "विद्युत तार बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron", "Copper", "Aluminum", "Silver"],
        "options_hi": ["आयरन", "कॉपर", "एल्युमिनियम", "चांदी"],
        "answer_en": "Copper",
        "answer_hi": "कॉपर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Who wrote 'Othello'?",
        "question_hi": "'ओथेलो' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the function of the heart?",
        "question_hi": "हृदय का कार्य क्या है?",
        "options_en": ["Digestion", "Blood circulation", "Respiration", "Waste removal"],
        "options_hi": ["पाचन", "रक्त परिसंचरण", "श्वसन", "अपशिष्ट निष्कासन"],
        "answer_en": "Blood circulation",
        "answer_hi": "रक्त परिसंचरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the value of ∫(1/x) dx?",
        "question_hi": "∫(1/x) dx का मान क्या है?",
        "options_en": ["ln|x| + C", "x + C", "1/x² + C", "x²/2 + C"],
        "options_hi": ["ln|x| + C", "x + C", "1/x² + C", "x²/2 + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
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
        "num": 25,
        "question_en": "Which gas is used by plants during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान पौधों द्वारा किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Who wrote 'King Lear'?",
        "question_hi": "'किंग लियर' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which organ produces insulin?",
        "question_hi": "कौन सा अंग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the value of ∫(sin x) dx?",
        "question_hi": "∫(sin x) dx का मान क्या है?",
        "options_en": ["-cos x + C", "cos x + C", "sin x + C", "-sin x + C"],
        "options_hi": ["-cos x + C", "cos x + C", "sin x + C", "-sin x + C"],
        "answer_en": "-cos x + C",
        "answer_hi": "-cos x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the unit of work?",
        "question_hi": "कार्य की इकाई क्या है?",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which acid is found in lemons?",
        "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"],
        "options_hi": ["एसिटिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Citric acid",
        "answer_hi": "सिट्रिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Who wrote 'Julius Caesar'?",
        "question_hi": "'जूलियस सीजर' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the function of the kidneys?",
        "question_hi": "गुर्दों का कार्य क्या है?",
        "options_en": ["Blood filtration", "Hormone production", "Digestion", "Respiration"],
        "options_hi": ["रक्त निस्पंदन", "हार्मोन उत्पादन", "पाचन", "श्वसन"],
        "answer_en": "Blood filtration",
        "answer_hi": "रक्त निस्पंदन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the value of d/dx(cos x)?",
        "question_hi": "d/dx(cos x) का मान क्या है?",
        "options_en": ["sin x", "-sin x", "cos x", "-cos x"],
        "options_hi": ["sin x", "-sin x", "cos x", "-cos x"],
        "answer_en": "-sin x",
        "answer_hi": "-sin x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the unit of pressure?",
        "question_hi": "दबाव की इकाई क्या है?",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "अग्निशामक यंत्रों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Who wrote 'A Midsummer Night's Dream'?",
        "question_hi": "'अ मिडसमर नाइट्स ड्रीम' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the function of the liver?",
        "question_hi": "यकृत का कार्य क्या है?",
        "options_en": ["Blood filtration", "Bile production", "Insulin production", "All of the above"],
        "options_hi": ["रक्त निस्पंदन", "पित्त उत्पादन", "इंसुलिन उत्पादन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the value of ∫(sec²x) dx?",
        "question_hi": "∫(sec²x) dx का मान क्या है?",
        "options_en": ["tan x + C", "sec x + C", "cot x + C", "cosec x + C"],
        "options_hi": ["tan x + C", "sec x + C", "cot x + C", "cosec x + C"],
        "answer_en": "tan x + C",
        "answer_hi": "tan x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Watt", "Joule", "Newton"],
        "options_hi": ["हर्ट्ज", "वाट", "जूल", "न्यूटन"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which metal is used in thermometers?",
        "question_hi": "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron", "Copper", "Mercury", "Aluminum"],
        "options_hi": ["आयरन", "कॉपर", "मर्करी", "एल्युमिनियम"],
        "answer_en": "Mercury",
        "answer_hi": "मर्करी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Who wrote 'The Merchant of Venice'?",
        "question_hi": "'द मर्चेंट ऑफ वेनिस' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the function of the lungs?",
        "question_hi": "फेफड़ों का कार्य क्या है?",
        "options_en": ["Blood circulation", "Respiration", "Digestion", "Waste removal"],
        "options_hi": ["रक्त परिसंचरण", "श्वसन", "पाचन", "अपशिष्ट निष्कासन"],
        "answer_en": "Respiration",
        "answer_hi": "श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the value of d/dx(tan x)?",
        "question_hi": "d/dx(tan x) का मान क्या है?",
        "options_en": ["sec²x", "cosec²x", "-cosec²x", "sec x tan x"],
        "options_hi": ["sec²x", "cosec²x", "-cosec²x", "sec x tan x"],
        "answer_en": "sec²x",
        "answer_hi": "sec²x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the unit of electric current?",
        "question_hi": "विद्युत धारा की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which gas is used in photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Who wrote 'Twelfth Night'?",
        "question_hi": "'ट्वेल्फ्थ नाइट' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the function of the stomach?",
        "question_hi": "पेट का कार्य क्या है?",
        "options_en": ["Blood filtration", "Respiration", "Digestion", "Waste removal"],
        "options_hi": ["रक्त निस्पंदन", "श्वसन", "पाचन", "अपशिष्ट निष्कासन"],
        "answer_en": "Digestion",
        "answer_hi": "पाचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the value of ∫(cosec²x) dx?",
        "question_hi": "∫(cosec²x) dx का मान क्या है?",
        "options_en": ["-cot x + C", "cot x + C", "-cosec x + C", "cosec x + C"],
        "options_hi": ["-cot x + C", "cot x + C", "-cosec x + C", "cosec x + C"],
        "answer_en": "-cot x + C",
        "answer_hi": "-cot x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the unit of energy?",
        "question_hi": "ऊर्जा की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which gas is used in balloons?",
        "question_hi": "गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Who wrote 'As You Like It'?",
        "question_hi": "'एज यू लाइक इट' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the function of the brain?",
        "question_hi": "मस्तिष्क का कार्य क्या है?",
        "options_en": ["Blood circulation", "Respiration", "Control center of the body", "Digestion"],
        "options_hi": ["रक्त परिसंचरण", "श्वसन", "शरीर का नियंत्रण केंद्र", "पाचन"],
        "answer_en": "Control center of the body",
        "answer_hi": "शरीर का नियंत्रण केंद्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the value of d/dx(sec x)?",
        "question_hi": "d/dx(sec x) का मान क्या है?",
        "options_en": ["sec x tan x", "-cosec x cot x", "cosec²x", "-sec²x"],
        "options_hi": ["sec x tan x", "-cosec x cot x", "cosec²x", "-sec²x"],
        "answer_en": "sec x tan x",
        "answer_hi": "sec x tan x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of force?",
        "question_hi": "बल की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which gas is used in refrigerators?",
        "question_hi": "रेफ्रिजरेटर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ammonia", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["अमोनिया", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Ammonia",
        "answer_hi": "अमोनिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Who wrote 'Much Ado About Nothing'?",
        "question_hi": "'मच अडू अबाउट नथिंग' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the function of the skin?",
        "question_hi": "त्वचा का कार्य क्या है?",
        "options_en": ["Protection", "Sensation", "Temperature regulation", "All of the above"],
        "options_hi": ["सुरक्षा", "संवेदना", "तापमान नियमन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the value of ∫(cot x) dx?",
        "question_hi": "∫(cot x) dx का मान क्या है?",
        "options_en": ["ln|sin x| + C", "ln|cos x| + C", "ln|sec x| + C", "ln|cosec x| + C"],
        "options_hi": ["ln|sin x| + C", "ln|cos x| + C", "ln|sec x| + C", "ln|cosec x| + C"],
        "answer_en": "ln|sin x| + C",
        "answer_hi": "ln|sin x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the unit of magnetic field?",
        "question_hi": "चुंबकीय क्षेत्र की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which gas is used in light bulbs?",
        "question_hi": "लाइट बल्ब में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हाइड्रोजन"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Who wrote 'The Taming of the Shrew'?",
        "question_hi": "'द टेमिंग ऑफ द श्रू' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the function of the skeleton?",
        "question_hi": "कंकाल का कार्य क्या है?",
        "options_en": ["Support", "Protection", "Movement", "All of the above"],
        "options_hi": ["सहायता", "सुरक्षा", "गति", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the value of d/dx(cosec x)?",
        "question_hi": "d/dx(cosec x) का मान क्या है?",
        "options_en": ["-cosec x cot x", "cosec x cot x", "-sec x tan x", "sec x tan x"],
        "options_hi": ["-cosec x cot x", "cosec x cot x", "-sec x tan x", "sec x tan x"],
        "answer_en": "-cosec x cot x",
        "answer_hi": "-cosec x cot x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the unit of electric potential?",
        "question_hi": "विद्युत विभव की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which gas is used in welding?",
        "question_hi": "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "एसिटिलीन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Acetylene",
        "answer_hi": "एसिटिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Who wrote 'The Comedy of Errors'?",
        "question_hi": "'द कॉमेडी ऑफ एरर्स' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the function of the nervous system?",
        "question_hi": "तंत्रिका तंत्र का कार्य क्या है?",
        "options_en": ["Control and coordination", "Respiration", "Digestion", "Blood circulation"],
        "options_hi": ["नियंत्रण और समन्वय", "श्वसन", "पाचन", "रक्त परिसंचरण"],
        "answer_en": "Control and coordination",
        "answer_hi": "नियंत्रण और समन्वय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the value of ∫(sec x tan x) dx?",
        "question_hi": "∫(sec x tan x) dx का मान क्या है?",
        "options_en": ["sec x + C", "tan x + C", "cosec x + C", "cot x + C"],
        "options_hi": ["sec x + C", "tan x + C", "cosec x + C", "cot x + C"],
        "answer_en": "sec x + C",
        "answer_hi": "sec x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Weber", "Tesla"],
        "options_hi": ["फैरड", "हेनरी", "वेबर", "टेस्ला"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in anesthesia?",
        "question_hi": "एनेस्थेसिया में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrous oxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रस ऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Who wrote 'Richard III'?",
        "question_hi": "'रिचर्ड III' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the function of the endocrine system?",
        "question_hi": "अंतःस्रावी तंत्र का कार्य क्या है?",
        "options_en": ["Hormone production", "Blood circulation", "Respiration", "Digestion"],
        "options_hi": ["हार्मोन उत्पादन", "रक्त परिसंचरण", "श्वसन", "पाचन"],
        "answer_en": "Hormone production",
        "answer_hi": "हार्मोन उत्पादन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the value of d/dx(cot x)?",
        "question_hi": "d/dx(cot x) का मान क्या है?",
        "options_en": ["-cosec²x", "cosec²x", "-sec²x", "sec²x"],
        "options_hi": ["-cosec²x", "cosec²x", "-sec²x", "sec²x"],
        "answer_en": "-cosec²x",
        "answer_hi": "-cosec²x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the unit of inductance?",
        "question_hi": "प्रेरकत्व की इकाई क्या है?",
        "options_en": ["Henry", "Farad", "Weber", "Tesla"],
        "options_hi": ["हेनरी", "फैरड", "वेबर", "टेस्ला"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which gas is used in food packaging?",
        "question_hi": "खाद्य पैकेजिंग में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Who wrote 'Henry V'?",
        "question_hi": "'हेनरी V' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the function of the circulatory system?",
        "question_hi": "परिसंचरण तंत्र का कार्य क्या है?",
        "options_en": ["Blood circulation", "Respiration", "Digestion", "Waste removal"],
        "options_hi": ["रक्त परिसंचरण", "श्वसन", "पाचन", "अपशिष्ट निष्कासन"],
        "answer_en": "Blood circulation",
        "answer_hi": "रक्त परिसंचरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the value of ∫(cosec x cot x) dx?",
        "question_hi": "∫(cosec x cot x) dx का मान क्या है?",
        "options_en": ["-cosec x + C", "cosec x + C", "-cot x + C", "cot x + C"],
        "options_hi": ["-cosec x + C", "cosec x + C", "-cot x + C", "cot x + C"],
        "answer_en": "-cosec x + C",
        "answer_hi": "-cosec x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the unit of luminous intensity?",
        "question_hi": "ज्योति तीव्रता की इकाई क्या है?",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "लुमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which gas is used in neon signs?",
        "question_hi": "नियोन साइन में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Neon", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नियोन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Neon",
        "answer_hi": "नियोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Who wrote 'The Winter's Tale'?",
        "question_hi": "'द विंटर्स टेल' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the function of the respiratory system?",
        "question_hi": "श्वसन तंत्र का कार्य क्या है?",
        "options_en": ["Gas exchange", "Blood circulation", "Digestion", "Waste removal"],
        "options_hi": ["गैस विनिमय", "रक्त परिसंचरण", "पाचन", "अपशिष्ट निष्कासन"],
        "answer_en": "Gas exchange",
        "answer_hi": "गैस विनिमय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the value of ∫(1/(1+x²)) dx?",
        "question_hi": "∫(1/(1+x²)) dx का मान क्या है?",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of electric flux?",
        "question_hi": "विद्युत फ्लक्स की इकाई क्या है?",
        "options_en": ["Weber", "Tesla", "Henry", "Farad"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "फैरड"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which gas is used in carbonated drinks?",
        "question_hi": "कार्बोनेटेड पेय में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Who wrote 'Coriolanus'?",
        "question_hi": "'कोरिओलेनस' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the function of the digestive system?",
        "question_hi": "पाचन तंत्र का कार्य क्या है?",
        "options_en": ["Food digestion", "Blood circulation", "Respiration", "Waste removal"],
        "options_hi": ["भोजन पाचन", "रक्त परिसंचरण", "श्वसन", "अपशिष्ट निष्कासन"],
        "answer_en": "Food digestion",
        "answer_hi": "भोजन पाचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the value of ∫(1/√(1-x²)) dx?",
        "question_hi": "∫(1/√(1-x²)) dx का मान क्या है?",
        "options_en": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "sec⁻¹x + C"],
        "options_hi": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "sec⁻¹x + C"],
        "answer_en": "sin⁻¹x + C",
        "answer_hi": "sin⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Weber", "Tesla", "Henry", "Farad"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "फैरड"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which gas is used in scuba diving tanks?",
        "question_hi": "स्कूबा डाइविंग टैंक में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Compressed air", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "संपीडित वायु", "हाइड्रोजन"],
        "answer_en": "Compressed air",
        "answer_hi": "संपीडित वायु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Who wrote 'Antony and Cleopatra'?",
        "question_hi": "'एंटनी और क्लियोपेट्रा' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the function of the excretory system?",
        "question_hi": "उत्सर्जन तंत्र का कार्य क्या है?",
        "options_en": ["Waste removal", "Blood circulation", "Respiration", "Digestion"],
        "options_hi": ["अपशिष्ट निष्कासन", "रक्त परिसंचरण", "श्वसन", "पाचन"],
        "answer_en": "Waste removal",
        "answer_hi": "अपशिष्ट निष्कासन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the value of ∫(e^x) dx?",
        "question_hi": "∫(e^x) dx का मान क्या है?",
        "options_en": ["e^x + C", "xe^x + C", "e^x/x + C", "ln x + C"],
        "options_hi": ["e^x + C", "xe^x + C", "e^x/x + C", "ln x + C"],
        "answer_en": "e^x + C",
        "answer_hi": "e^x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the unit of radioactivity?",
        "question_hi": "रेडियोधर्मिता की इकाई क्या है?",
        "options_en": ["Becquerel", "Curie", "Rutherford", "All of the above"],
        "options_hi": ["बेकरेल", "क्यूरी", "रदरफोर्ड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which gas is used in weather balloons?",
        "question_hi": "मौसम के गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "हीलियम", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Who wrote 'Timon of Athens'?",
        "question_hi": "'टाइमन ऑफ एथेंस' किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the function of the reproductive system?",
        "question_hi": "प्रजनन तंत्र का कार्य क्या है?",
        "options_en": ["Reproduction", "Blood circulation", "Respiration", "Digestion"],
        "options_hi": ["प्रजनन", "रक्त परिसंचरण", "श्वसन", "पाचन"],
        "answer_en": "Reproduction",
        "answer_hi": "प्रजनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the value of ∫(a^x) dx?",
        "question_hi": "∫(a^x) dx का मान क्या है?",
        "options_en": ["(a^x)/ln a + C", "a^x ln a + C", "xa^x + C", "a^x/x + C"],
        "options_hi": ["(a^x)/ln a + C", "a^x ln a + C", "xa^x + C", "a^x/x + C"],
        "answer_en": "(a^x)/ln a + C",
        "answer_hi": "(a^x)/ln a + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the unit of temperature?",
        "question_hi": "तापमान की इकाई क्या है?",
        "options_en": ["Kelvin", "Celsius", "Fahrenheit", "All of the above"],
        "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which gas is used in fluorescent tubes?",
        "question_hi": "फ्लोरोसेंट ट्यूबों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Mercury vapor", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "पारा वाष्प", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Mercury vapor",
        "answer_hi": "पारा वाष्प",
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