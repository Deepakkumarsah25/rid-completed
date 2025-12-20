const questions = [
    {
        num: 1,
        question_en: "The 'Kasturirangan Committee' is associated with the conservation of:",
        question_hi: "'कस्तूरीरंगन समिति' किसके संरक्षण से संबद्ध है?",
        options_en: ["Tigers", "Western Ghats", "Himalayan Rivers", "Coastal Ecosystems"],
        options_hi: ["बाघ", "पश्चिमी घाट", "हिमालयी नदियाँ", "तटीय पारिस्थितिकी तंत्र"],
        answer_en: "Western Ghats",
        answer_hi: "पश्चिमी घाट",
        attempted: false,
        selected: ""
    },
    {
        num: 2,
        question_en: "The 'Exercise Malabar' is a naval exercise involving which countries?",
        question_hi: "'अभ्यास मालाबार' एक नौसैनिक अभ्यास है जिसमें कौन से देश शामिल हैं?",
        options_en: ["India and USA", "India, USA and Japan", "India, USA, Japan and Australia", "India and Australia"],
        options_hi: ["भारत और यूएसए", "भारत, यूएसए और जापान", "भारत, यूएसए, जापान और ऑस्ट्रेलिया", "भारत और ऑस्ट्रेलिया"],
        answer_en: "India, USA, Japan and Australia",
        answer_hi: "भारत, यूएसए, जापान और ऑस्ट्रेलिया",
        attempted: false,
        selected: ""
    },
    {
        num: 3,
        question_en: "In computing, what does 'SSD' stand for?",
        question_hi: "कंप्यूटिंग में, 'SSD' का क्या अर्थ है?",
        options_en: ["Solid State Drive", "Super Speed Disk", "System Storage Device", "Sequential Storage Drive"],
        options_hi: ["सॉलिड स्टेट ड्राइव", "सुपर स्पीड डिस्क", "सिस्टम स्टोरेज डिवाइस", "अनुक्रमिक भंडारण ड्राइव"],
        answer_en: "Solid State Drive",
        answer_hi: "सॉलिड स्टेट ड्राइव",
        attempted: false,
        selected: ""
    },
    {
        num: 4,
        question_en: "A shopkeeper marks his goods 40% above the cost price but allows a discount of 15%. What is his net profit percentage?",
        question_hi: "एक दुकानदार अपने माल पर लागत मूल्य से 40% अधिक अंकित करता है लेकिन 15% की छूट देता है। उसका शुद्ध लाभ प्रतिशत क्या है?",
        options_en: ["19%", "21%", "25%", "17%"],
        options_hi: ["19%", "21%", "25%", "17%"],
        answer_en: "19%",
        answer_hi: "19%",
        attempted: false,
        selected: ""
    },
    {
        num: 5,
        question_en: "If a/b = 2/3, b/c = 4/5, and c/d = 6/7, then find the ratio a:b:c:d.",
        question_hi: "यदि a/b = 2/3, b/c = 4/5, और c/d = 6/7, तो अनुपात a:b:c:d ज्ञात कीजिए।",
        options_en: ["16:24:30:35", "8:12:15:17.5", "16:20:30:35", "8:12:15:14"],
        options_hi: ["16:24:30:35", "8:12:15:17.5", "16:20:30:35", "8:12:15:14"],
        answer_en: "16:24:30:35",
        answer_hi: "16:24:30:35",
        attempted: false,
        selected: ""
    },
    {
        num: 6,
        question_en: "The average age of a family of 5 members is 24 years. If the youngest member is 8 years old, what was the average age of the family just before the birth of the youngest member?",
        question_hi: "5 सदस्यों के एक परिवार की औसत आयु 24 वर्ष है। यदि सबसे छोटा सदस्य 8 वर्ष का है, तो सबसे छोटे सदस्य के जन्म से ठीक पहले परिवार की औसत आयु क्या थी?",
        options_en: ["20 years", "18 years", "22 years", "16 years"],
        options_hi: ["20 वर्ष", "18 वर्ष", "22 वर्ष", "16 वर्ष"],
        answer_en: "20 years",
        answer_hi: "20 वर्ष",
        attempted: false,
        selected: ""
    },
    {
        num: 7,
        question_en: "Find the next term: 2, 6, 12, 20, 30, 42, ?",
        question_hi: "अगला पद ज्ञात करें: 2, 6, 12, 20, 30, 42, ?",
        options_en: ["54", "56", "58", "60"],
        options_hi: ["54", "56", "58", "60"],
        answer_en: "56",
        answer_hi: "56",
        attempted: false,
        selected: ""
    },
    {
        num: 8,
        question_en: "If 'PENCIL' is coded as 'RGPENK', then how is 'ERASER' coded?",
        question_hi: "यदि 'PENCIL' को 'RGPENK' के रूप में कोडित किया जाता है, तो 'ERASER' को कैसे कोडित किया जाएगा?",
        options_en: ["GTCUUG", "GTCUTG", "GTDUUG", "GTDUTG"],
        options_hi: ["GTCUUG", "GTCUTG", "GTDUUG", "GTDUTG"],
        answer_en: "GTCUUG",
        answer_hi: "GTCUUG",
        attempted: false,
        selected: ""
    },
    {
        num: 9,
        question_en: "Analogy: Isotopes : Atomic Number :: Isobars : ?",
        question_hi: "सादृश्यता: समस्थानिक : परमाणु संख्या :: समभारिक : ?",
        options_en: ["Atomic Mass", "Atomic Number", "Number of Neutrons", "Chemical Properties"],
        options_hi: ["परमाणु द्रव्यमान", "परमाणु संख्या", "न्यूट्रॉन की संख्या", "रासायनिक गुण"],
        answer_en: "Atomic Mass",
        answer_hi: "परमाणु द्रव्यमान",
        attempted: false,
        selected: ""
    },
    {
        num: 10,
        question_en: "The de Broglie wavelength of a particle is inversely proportional to its:",
        question_hi: "एक कण की डी ब्रोगली तरंगदैर्ध्य इसके व्युत्क्रमानुपाती होती है:",
        options_en: ["Mass", "Velocity", "Momentum", "Kinetic Energy"],
        options_hi: ["द्रव्यमान", "वेग", "संवेग", "गतिज ऊर्जा"],
        answer_en: "Momentum",
        answer_hi: "संवेग",
        attempted: false,
        selected: ""
    },
    {
        num: 11,
        question_en: "In Young's double-slit experiment, if the distance between the slits is doubled, what happens to the fringe width?",
        question_hi: "यंग के द्वि-छिद्र प्रयोग में, यदि छिद्रों के बीच की दूरी दोगुनी कर दी जाए, तो फ्रिंज चौड़ाई पर क्या प्रभाव पड़ता है?",
        options_en: ["Becomes half", "Becomes double", "Becomes one-fourth", "Remains same"],
        options_hi: ["आधी हो जाती है", "दोगुनी हो जाती है", "चौथाई हो जाती है", "समान रहती है"],
        answer_en: "Becomes half",
        answer_hi: "आधी हो जाती है",
        attempted: false,
        selected: ""
    },
    {
        num: 12,
        question_en: "Which of the following has the highest electron affinity?",
        question_hi: "निम्नलिखित में से किसकी इलेक्ट्रॉन बंधुता सबसे अधिक है?",
        options_en: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
        options_hi: ["फ्लोरीन", "क्लोरीन", "ब्रोमीन", "आयोडीन"],
        answer_en: "Chlorine",
        answer_hi: "क्लोरीन",
        attempted: false,
        selected: ""
    },
    {
        num: 13,
        question_en: "The 'Haber's Process' is used for the industrial production of:",
        question_hi: "'हैबर प्रक्रम' का उपयोग औद्योगिक उत्पादन के लिए किया जाता है:",
        options_en: ["Sulfuric acid", "Ammonia", "Nitric acid", "Urea"],
        options_hi: ["सल्फ्यूरिक अम्ल", "अमोनिया", "नाइट्रिक अम्ल", "यूरिया"],
        answer_en: "Ammonia",
        answer_hi: "अमोनिया",
        attempted: false,
        selected: ""
    },
    {
        num: 14,
        question_en: "The 'Punnett Square' is used to predict:",
        question_hi: "'पनेट वर्ग' का उपयोग भविष्यवाणी करने के लिए किया जाता है:",
        options_en: ["Blood groups", "Genotypic ratios of offspring", "Evolutionary patterns", "DNA sequence"],
        options_hi: ["रक्त समूह", "संतानों के जीनोटाइपिक अनुपात", "विकासवादी पैटर्न", "डीएनए अनुक्रम"],
        answer_en: "Genotypic ratios of offspring",
        answer_hi: "संतानों के जीनोटाइपिक अनुपात",
        attempted: false,
        selected: ""
    },
    {
        num: 15,
        question_en: "Which of the following is a vestigial organ in humans?",
        question_hi: "निम्नलिखित में से कौन सा मनुष्यों में एक अवशेषी अंग है?",
        options_en: ["Appendix", "Pancreas", "Gall bladder", "Kidney"],
        options_hi: ["अपेंडिक्स", "अग्न्याशय", "पित्ताशय", "गुर्दा"],
        answer_en: "Appendix",
        answer_hi: "अपेंडिक्स",
        attempted: false,
        selected: ""
    },
    {
        num: 16,
        question_en: "The 'Battle of Plassey' was fought in which year?",
        question_hi: "'प्लासी का युद्ध' किस वर्ष लड़ा गया था?",
        options_en: ["1757", "1761", "1764", "1771"],
        options_hi: ["1757", "1761", "1764", "1771"],
        answer_en: "1757",
        answer_hi: "1757",
        attempted: false,
        selected: ""
    },
    {
        num: 17,
        question_en: "The 'NITI Aayog' was formed by replacing which earlier institution?",
        question_hi: "'नीति आयोग' का गठन किस पूर्व संस्था को प्रतिस्थापित करके किया गया था?",
        options_en: ["Planning Commission", "Finance Commission", "National Development Council", "Election Commission"],
        options_hi: ["योजना आयोग", "वित्त आयोग", "राष्ट्रीय विकास परिषद", "चुनाव आयोग"],
        answer_en: "Planning Commission",
        answer_hi: "योजना आयोग",
        attempted: false,
        selected: ""
    },
    {
        num: 18,
        question_en: "The 'Roaring Forties' are strong westerly winds found in which hemisphere?",
        question_hi: "'रोअरिंग फोर्टीज़' मजबूत पश्चिमी हवाएँ हैं जो किस गोलार्ध में पाई जाती हैं?",
        options_en: ["Northern Hemisphere", "Southern Hemisphere", "Both", "Equatorial region"],
        options_hi: ["उत्तरी गोलार्ध", "दक्षिणी गोलार्ध", "दोनों", "विषुवतीय क्षेत्र"],
        answer_en: "Southern Hemisphere",
        answer_hi: "दक्षिणी गोलार्ध",
        attempted: false,
        selected: ""
    },
    {
        num: 19,
        question_en: "Which of these is NOT a web browser?",
        question_hi: "इनमें से कौन सा एक वेब ब्राउज़र नहीं है?",
        options_en: ["Chrome", "Firefox", "Edge", "Apache"],
        options_hi: ["क्रोम", "फ़ायरफ़ॉक्स", "एज", "अपाचे"],
        answer_en: "Apache",
        answer_hi: "अपाचे",
        attempted: false,
        selected: ""
    },
    {
        num: 20,
        question_en: "Two numbers are in the ratio 7:11. If 7 is added to each number, the ratio becomes 2:3. Find the numbers.",
        question_hi: "दो संख्याएँ 7:11 के अनुपात में हैं। यदि प्रत्येक संख्या में 7 जोड़ा जाता है, तो अनुपात 2:3 हो जाता है। संख्याएँ ज्ञात कीजिए।",
        options_en: ["21, 33", "28, 44", "35, 55", "14, 22"],
        options_hi: ["21, 33", "28, 44", "35, 55", "14, 22"],
        answer_en: "21, 33",
        answer_hi: "21, 33",
        attempted: false,
        selected: ""
    },
    {
        num: 21,
        question_en: "A can do a work in 15 days and B in 20 days. They work together for 4 days and then A leaves. In how many more days will B complete the remaining work?",
        question_hi: "A एक कार्य को 15 दिनों में और B 20 दिनों में कर सकता है। वे 4 दिनों तक एक साथ कार्य करते हैं और फिर A कार्य छोड़ देता है। B शेष कार्य को कितने और दिनों में पूरा करेगा?",
        options_en: ["8 days", "9 days", "10 days", "11 days"],
        options_hi: ["8 दिन", "9 दिन", "10 दिन", "11 दिन"],
        answer_en: "10 days",
        answer_hi: "10 दिन",
        attempted: false,
        selected: ""
    },
    {
        num: 22,
        question_en: "Find the wrong number: 5, 10, 17, 26, 37, 50, 64",
        question_hi: "गलत संख्या ज्ञात कीजिए: 5, 10, 17, 26, 37, 50, 64",
        options_en: ["10", "26", "50", "64"],
        options_hi: ["10", "26", "50", "64"],
        answer_en: "64",
        answer_hi: "64",
        attempted: false,
        selected: ""
    },
     {
        num: 23,
        question_en: "If 'NEUTRAL' is coded as 'MFVOSBM', then how is 'PLASTIC' coded in the same language?",
        question_hi: "यदि 'NEUTRAL' को 'MFVOSBM' के रूप में कोडित किया जाता है, तो उसी भाषा में 'PLASTIC' को कैसे कोडित किया जाएगा?",
        options_en: ["QMBTUID", "QMBTUJD", "OMBTUID", "QMBSUJD"],
        options_hi: ["QMBTUID", "QMBTUJD", "OMBTUID", "QMBSUJD"],
        answer_en: "QMBTUID",
        answer_hi: "QMBTUID",
        attempted: false,
        selected: ""
    },
    {
        num: 24,
        question_en: "Analogy: Meiosis : Diploid :: Mitosis : ?",
        question_hi: "सादृश्यता: अर्धसूत्री विभाजन : द्विगुणित :: समसूत्री विभाजन : ?",
        options_en: ["Haploid", "Diploid", "Triploid", "Polyploid"],
        options_hi: ["अगुणित", "द्विगुणित", "त्रिगुणित", "बहुगुणित"],
        answer_en: "Diploid",
        answer_hi: "द्विगुणित",
        attempted: false,
        selected: ""
    },
    {
        num: 25,
        question_en: "A body is thrown vertically upward with a velocity of 49 m/s. What is the maximum height it will reach? (g = 9.8 m/s²)",
        question_hi: "एक पिंड को 49 मी/से के वेग से ऊर्ध्वाधर ऊपर की ओर फेंका जाता है। यह अधिकतम कितनी ऊँचाई तक पहुँचेगा? (g = 9.8 मी/से²)",
        options_en: ["122.5 m", "245 m", "49 m", "98 m"],
        options_hi: ["122.5 मी", "245 मी", "49 मी", "98 मी"],
        answer_en: "122.5 m",
        answer_hi: "122.5 मी",
        attempted: false,
        selected: ""
    },
    {
        num: 26,
        question_en: "The phenomenon of 'total internal reflection' is used in:",
        question_hi: "'पूर्ण आंतरिक परावर्तन' की घटना का उपयोग किसमें किया जाता है?",
        options_en: ["Microscope", "Telescope", "Optical fibers", "Periscope"],
        options_hi: ["सूक्ष्मदर्शी", "दूरबीन", "प्रकाशीय तंतु", "पेरिस्कोप"],
        answer_en: "Optical fibers",
        answer_hi: "प्रकाशीय तंतु",
        attempted: false,
        selected: ""
    },
    {
        num: 27,
        question_en: "Which of the following is NOT a thermodynamic property?",
        question_hi: "निम्नलिखित में से कौन सा एक ऊष्मागतिक गुण नहीं है?",
        options_en: ["Pressure", "Temperature", "Heat", "Internal Energy"],
        options_hi: ["दाब", "तापमान", "ऊष्मा", "आंतरिक ऊर्जा"],
        answer_en: "Heat",
        answer_hi: "ऊष्मा",
        attempted: false,
        selected: ""
    },
    {
        num: 28,
        question_en: "The correct order of basic strength of the following amines in aqueous solution is:",
        question_hi: "जलीय विलयन में निम्नलिखित एमीनों की क्षारीय सामर्थ्य का सही क्रम है:",
        options_en: ["NH₃ < CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N", "CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃", "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃", "(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃"],
        options_hi: ["NH₃ < CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N", "CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃", "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃", "(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃"],
        answer_en: "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃",
        answer_hi: "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃",
        attempted: false,
        selected: ""
    },
    {
        num: 29,
        question_en: "In the electrolysis of aqueous NaCl, what is produced at the anode?",
        question_hi: "जलीय NaCl के विद्युत् अपघटन में, एनोड पर क्या उत्पन्न होता है?",
        options_en: ["Sodium metal", "Hydrogen gas", "Chlorine gas", "Oxygen gas"],
        options_hi: ["सोडियम धातु", "हाइड्रोजन गैस", "क्लोरीन गैस", "ऑक्सीजन गैस"],
        answer_en: "Chlorine gas",
        answer_hi: "क्लोरीन गैस",
        attempted: false,
        selected: ""
    },
    {
        num: 30,
        question_en: "The 'Bowman's capsule' and 'Glomerulus' together form the:",
        question_hi: "'बोमन संपुट' और 'ग्लोमेरुलस' मिलकर बनाते हैं:",
        options_en: ["Nephron", "Malpighian body", "Loop of Henle", "Collecting duct"],
        options_hi: ["नेफ्रॉन", "मैलपीघी पिंड", "हेनले लूप", "संग्राहक वाहिनी"],
        answer_en: "Malpighian body",
        answer_hi: "मैलपीघी पिंड",
        attempted: false,
        selected: ""
    },
    {
        num: 31,
        question_en: "Which of the following is a genetic disorder caused by a recessive gene on the X chromosome?",
        question_hi: "निम्नलिखित में से कौन सा एक आनुवंशिक विकार है जो X गुणसूत्र पर एक अप्रभावी जीन के कारण होता है?",
        options_en: ["Haemophilia", "Down's Syndrome", "Huntington's Disease", "Sickle Cell Anemia"],
        options_hi: ["हीमोफिलिया", "डाउन सिंड्रोम", "हंटिंग्टन रोग", "सिकल सेल एनीमिया"],
        answer_en: "Haemophilia",
        answer_hi: "हीमोफिलिया",
        attempted: false,
        selected: ""
    },
    {
        num: 32,
        question_en: "The 'Vijayanagara Empire' was founded by:",
        question_hi: "'विजयनगर साम्राज्य' की स्थापना किसने की थी?",
        options_en: ["Harihara I and Bukka Raya I", "Krishnadevaraya", "Devaraya I", "Achyuta Deva Raya"],
        options_hi: ["हरिहर I और बुक्का राय I", "कृष्णदेवराय", "देवराय I", "अच्युत देव राय"],
        answer_en: "Harihara I and Bukka Raya I",
        answer_hi: "हरिहर I और बुक्का राय I",
        attempted: false,
        selected: ""
    },
    {
        num: 33,
        question_en: "The 'Bharat Stage' norms (BS VI) are associated with regulating:",
        question_hi: "'भारत स्टेज' मानदंड (BS VI) किसके विनियमन से संबद्ध हैं?",
        options_en: ["Food safety", "Vehicle emissions", "Industrial waste", "Water pollution"],
        options_hi: ["खाद्य सुरक्षा", "वाहन उत्सर्जन", "औद्योगिक कचरा", "जल प्रदूषण"],
        answer_en: "Vehicle emissions",
        answer_hi: "वाहन उत्सर्जन",
        attempted: false,
        selected: ""
    },
    {
        num: 34,
        question_en: "The 'Har Ghar Jal' mission aims to provide:",
        question_hi: "'हर घर जल' मिशन का उद्देश्य प्रदान करना है:",
        options_en: ["Electricity to every household", "Tap water connection to every rural household", "LPG connection to every household", "Internet to every household"],
        options_hi: ["प्रत्येक घर में बिजली", "प्रत्येक ग्रामीण घर में नल का जल कनेक्शन", "प्रत्येक घर में एलपीजी कनेक्शन", "प्रत्येक घर में इंटरनेट"],
        answer_en: "Tap water connection to every rural household",
        answer_hi: "प्रत्येक ग्रामीण घर में नल का जल कनेक्शन",
        attempted: false,
        selected: ""
    },
    {
        num: 35,
        question_en: "The 'Macmillan Line' is a boundary line between which two countries?",
        question_hi: "'मैकमिलन रेखा' किन दो देशों के बीच की सीमा रेखा है?",
        options_en: ["India and China", "India and Pakistan", "China and Bhutan", "China and Nepal"],
        options_hi: ["भारत और चीन", "भारत और पाकिस्तान", "चीन और भूटान", "चीन और नेपाल"],
        answer_en: "China and Bhutan",
        answer_hi: "चीन और भूटान",
        attempted: false,
        selected: ""
    },
    {
        num: 36,
        question_en: "Which of the following is NOT a type of computer malware?",
        question_hi: "निम्नलिखित में से कौन सा कंप्यूटर मैलवेयर का प्रकार नहीं है?",
        options_en: ["Virus", "Worm", "Trojan", "Firewall"],
        options_hi: ["वायरस", "वर्म", "ट्रोजन", "फ़ायरवॉल"],
        answer_en: "Firewall",
        answer_hi: "फ़ायरवॉल",
        attempted: false,
        selected: ""
    },
    {
        num: 37,
        question_en: "If the price of sugar increases by 20%, by what percentage should a family reduce its consumption so that the expenditure remains the same?",
        question_hi: "यदि चीनी की कीमत 20% बढ़ जाती है, तो एक परिवार को अपनी खपत कितने प्रतिशत कम करनी चाहिए ताकि व्यय समान रहे?",
        options_en: ["16.67%", "20%", "25%", "10%"],
        options_hi: ["16.67%", "20%", "25%", "10%"],
        answer_en: "16.67%",
        answer_hi: "16.67%",
        attempted: false,
        selected: ""
    },
    {
        num: 38,
        question_en: "A train crosses a pole in 15 seconds and a platform 100 m long in 25 seconds. What is the length of the train?",
        question_hi: "एक ट्रेन 15 सेकंड में एक खंभे को और 100 मीटर लंबे प्लेटफॉर्म को 25 सेकंड में पार करती है। ट्रेन की लंबाई क्या है?",
        options_en: ["100 m", "150 m", "180 m", "200 m"],
        options_hi: ["100 मी", "150 मी", "180 मी", "200 मी"],
        answer_en: "150 m",
        answer_hi: "150 मी",
        attempted: false,
        selected: ""
    },
    {
        num: 39,
        question_en: "Find the next term: 0, 6, 24, 60, 120, 210, ?",
        question_hi: "अगला पद ज्ञात करें: 0, 6, 24, 60, 120, 210, ?",
        options_en: ["300", "336", "360", "420"],
        options_hi: ["300", "336", "360", "420"],
        answer_en: "336",
        answer_hi: "336",
        attempted: false,
        selected: ""
    },
    {
        num: 40,
        question_en: "If 'MOON' is coded as '2' and 'STAR' is coded as '3', then how is 'PLANET' coded in that language?",
        question_hi: "यदि 'MOON' को '2' और 'STAR' को '3' के रूप में कोडित किया जाता है, तो उस भाषा में 'PLANET' को कैसे कोडित किया जाएगा?",
        options_en: ["4", "5", "6", "3"],
        options_hi: ["4", "5", "6", "3"],
        answer_en: "5",
        answer_hi: "5",
        attempted: false,
        selected: ""
    },
    {
        num: 41,
        question_en: "Analogy: Cyclotron : Charged particles :: Synchrotron : ?",
        question_hi: "सादृश्यता: साइक्लोट्रॉन : आवेशित कण :: सिंक्रोट्रॉन : ?",
        options_en: ["Neutral particles", "Electrons only", "Charged particles at relativistic speeds", "Protons only"],
        options_hi: ["उदासीन कण", "केवल इलेक्ट्रॉन", "आपेक्षिकीय गति पर आवेशित कण", "केवल प्रोटॉन"],
        answer_en: "Charged particles at relativistic speeds",
        answer_hi: "आपेक्षिकीय गति पर आवेशित कण",
        attempted: false,
        selected: ""
    },
    {
        num: 42,
        question_en: "The energy band gap is maximum in:",
        question_hi: "ऊर्जा बैंड अंतराल अधिकतम होता है:",
        options_en: ["Metals", "Semiconductors", "Insulators", "Superconductors"],
        options_hi: ["धातुओं", "अर्धचालकों", "रोधकों", "अतिचालकों"],
        answer_en: "Insulators",
        answer_hi: "रोधकों",
        attempted: false,
        selected: ""
    },
    {
        num: 43,
        question_en: "Which of the following statements about the Pauli Exclusion Principle is correct?",
        question_hi: "पाउली अपवर्जन सिद्धांत के बारे में निम्नलिखित में से कौन सा कथन सही है?",
        options_en: ["No two electrons in an atom can have the same four quantum numbers.", "Electrons occupy orbitals of lowest energy first.", "An orbital can hold a maximum of two electrons with opposite spins.", "Both A and C."],
        options_hi: ["एक परमाणु में कोई भी दो इलेक्ट्रॉन चारों क्वांटम संख्याएँ समान नहीं रख सकते।", "इलेक्ट्रॉन पहले न्यूनतम ऊर्जा के कक्षकों पर कब्जा करते हैं।", "एक कक्षक विपरीत चक्रण वाले अधिकतम दो इलेक्ट्रॉन रख सकता है।", "A और C दोनों।"],
        answer_en: "Both A and C.",
        answer_hi: "A और C दोनों।",
        attempted: false,
        selected: ""
    },
    {
        num: 44,
        question_en: "In the human digestive system, bile is produced by the:",
        question_hi: "मानव पाचन तंत्र में, पित्त का उत्पादन किसके द्वारा किया जाता है:",
        options_en: ["Gall bladder", "Liver", "Pancreas", "Stomach"],
        options_hi: ["पित्ताशय", "यकृत", "अग्न्याशय", "आमाशय"],
        answer_en: "Liver",
        answer_hi: "यकृत",
        attempted: false,
        selected: ""
    },
    {
        num: 45,
        question_en: "The 'Copenhagen Interpretation' is primarily associated with:",
        question_hi: "'कोपेनहेगन व्याख्या' मुख्य रूप से किससे संबद्ध है:",
        options_en: ["Theory of Relativity", "Quantum Mechanics", "Big Bang Theory", "String Theory"],
        options_hi: ["सापेक्षता का सिद्धांत", "क्वांटम यांत्रिकी", "बिग बैंग सिद्धांत", "स्ट्रिंग सिद्धांत"],
        answer_en: "Quantum Mechanics",
        answer_hi: "क्वांटम यांत्रिकी",
        attempted: false,
        selected: ""
    },
    {
        num: 46,
        question_en: "The 'Ring of Fire' is associated with:",
        question_hi: "'रिंग ऑफ फायर' किससे संबद्ध है:",
        options_en: ["Volcanoes and Earthquakes", "Cyclones", "Tropical Rainforests", "Coral Reefs"],
        options_hi: ["ज्वालामुखी और भूकंप", "चक्रवात", "उष्णकटिबंधीय वर्षावन", "प्रवाल भित्तियाँ"],
        answer_en: "Volcanoes and Earthquakes",
        answer_hi: "ज्वालामुखी और भूकंप",
        attempted: false,
        selected: ""
    },
    {
        num: 47,
        question_en: "The 'Moscow Declaration' of 1943 was related to:",
        question_hi: "1943 की 'मॉस्को घोषणा' किससे संबंधित थी:",
        options_en: ["End of World War I", "Establishment of United Nations", "War crimes trials after WWII", "Cold War alliances"],
        options_hi: ["प्रथम विश्व युद्ध का अंत", "संयुक्त राष्ट्र की स्थापना", "द्वितीय विश्व युद्ध के बाद युद्ध अपराधों के मुकदमे", "शीत युद्ध गठबंधन"],
        answer_en: "War crimes trials after WWII",
        answer_hi: "द्वितीय विश्व युद्ध के बाद युद्ध अपराधों के मुकदमे",
        attempted: false,
        selected: ""
    },
    {
        num: 48,
        question_en: "Which protocol is used to send emails?",
        question_hi: "ईमेल भेजने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        options_en: ["SMTP", "POP3", "IMAP", "FTP"],
        options_hi: ["SMTP", "POP3", "IMAP", "FTP"],
        answer_en: "SMTP",
        answer_hi: "SMTP",
        attempted: false,
        selected: ""
    },
    {
        num: 49,
        question_en: "A sum of money becomes 8 times itself in 15 years at simple interest. What is the rate of interest?",
        question_hi: "साधारण ब्याज पर एक धनराशि 15 वर्षों में स्वयं की 8 गुना हो जाती है। ब्याज की दर क्या है?",
        options_en: ["46.67%", "50%", "47.5%", "45%"],
        options_hi: ["46.67%", "50%", "47.5%", "45%"],
        answer_en: "46.67%",
        answer_hi: "46.67%",
        attempted: false,
        selected: ""
    },
    {
        num: 50,
        question_en: "The ratio of the present ages of a father and son is 5:2. Four years hence, the ratio will become 3:1. What is the present age of the father?",
        question_hi: "एक पिता और पुत्र की वर्तमान आयु का अनुपात 5:2 है। चार वर्ष बाद, अनुपात 3:1 हो जाएगा। पिता की वर्तमान आयु क्या है?",
        options_en: ["30 years", "40 years", "45 years", "50 years"],
        options_hi: ["30 वर्ष", "40 वर्ष", "45 वर्ष", "50 वर्ष"],
        answer_en: "40 years",
        answer_hi: "40 वर्ष",
        attempted: false,
        selected: ""
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