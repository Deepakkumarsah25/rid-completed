const questions = [
  {
    num: 1,
    question_en: "The term 'Laissez-faire' is associated with which type of economy?",
    question_hi: "'लेसे फेयर' शब्द किस प्रकार की अर्थव्यवस्था से जुड़ा है?",
    options_en: ["Socialist", "Capitalist", "Mixed", "Command"],
    options_hi: ["समाजवादी", "पूंजीवादी", "मिश्रित", "आदेश आधारित"],
    answer_en: "Capitalist",
    answer_hi: "पूंजीवादी",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which is the largest component of the money supply in India?",
    question_hi: "भारत में मुद्रा आपूर्ति का सबसे बड़ा घटक कौन सा है?",
    options_en: ["Currency with public", "Demand deposits with banks", "Time deposits", "RBI reserves"],
    options_hi: ["जनता के पास नकद", "बैंकों में मांग जमा", "समय जमा", "RBI का भंडार"],
    answer_en: "Time deposits",
    answer_hi: "समय जमा",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which of the following is not an objective of economic planning?",
    question_hi: "निम्नलिखित में से कौन आर्थिक योजना का उद्देश्य नहीं है?",
    options_en: ["Increase in national income", "Full employment", "Price stability", "Military expansion"],
    options_hi: ["राष्ट्रीय आय में वृद्धि", "पूर्ण रोजगार", "मूल्य स्थिरता", "सैन्य विस्तार"],
    answer_en: "Military expansion",
    answer_hi: "सैन्य विस्तार",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which term describes a period of negative economic growth?",
    question_hi: "नकारात्मक आर्थिक विकास की अवधि को क्या कहा जाता है?",
    options_en: ["Boom", "Recession", "Inflation", "Recovery"],
    options_hi: ["बूम", "मंदी", "मुद्रास्फीति", "पुनर्प्राप्ति"],
    answer_en: "Recession",
    answer_hi: "मंदी",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "When was the Goods and Services Tax (GST) implemented in India?",
    question_hi: "भारत में वस्तु एवं सेवा कर (GST) कब लागू किया गया?",
    options_en: ["1st July 2016", "1st July 2017", "1st April 2016", "1st January 2018"],
    options_hi: ["1 जुलाई 2016", "1 जुलाई 2017", "1 अप्रैल 2016", "1 जनवरी 2018"],
    answer_en: "1st July 2017",
    answer_hi: "1 जुलाई 2017",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the boiling point of water at sea level?",
    question_hi: "समुद्र तल पर पानी का उबालने का तापमान क्या है?",
    options_en: ["90°C", "100°C", "110°C", "120°C"],
    options_hi: ["90°C", "100°C", "110°C", "120°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह लाल ग्रह के रूप में जाना जाता है?",
    options_en: ["Earth", "Mars", "Jupiter", "Venus"],
    options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Sound travels fastest in which medium?",
    question_hi: "ध्वनि किस माध्यम में सबसे तेज यात्रा करती है?",
    options_en: ["Air", "Water", "Steel", "Vacuum"],
    options_hi: ["हवा", "पानी", "इस्पात", "शून्य"],
    answer_en: "Steel",
    answer_hi: "इस्पात",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the chemical formula of water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "O2", "NaCl"],
    options_hi: ["H2O", "CO2", "O2", "NaCl"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which organ pumps blood throughout the human body?",
    question_hi: "मानव शरीर में खून को पूरे शरीर में पंप करने वाला अंग कौन सा है?",
    options_en: ["Lungs", "Liver", "Heart", "Kidneys"],
    options_hi: ["फेफड़े", "जिगर", "दिल", "गुर्दे"],
    answer_en: "Heart",
    answer_hi: "दिल",
    attempted: false,
    selected: ""
  },
  

  {
    num: 11,
    question_en: "Who painted the Mona Lisa?",
    question_hi: "मोनालिसा की पेंटिंग किसने बनाई?",
    options_en: ["Leonardo da Vinci", "Vincent Van Gogh", "Pablo Picasso", "Michelangelo"],
    options_hi: ["लियोनार्डो दा विंची", "विन्सेंट वैन गॉग", "पाब्लो पिकासो", "माइकलएंजेलो"],
    answer_en: "Leonardo da Vinci",
    answer_hi: "लियोनार्डो दा विंची",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the capital city of Japan?",
    question_hi: "जापान की राजधानी कौन सी है?",
    options_en: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    options_hi: ["टोक्यो", "क्योटो", "ओसाका", "नागोया"],
    answer_en: "Tokyo",
    answer_hi: "टोक्यो",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह लाल ग्रह के रूप में जाना जाता है?",
    options_en: ["Mars", "Venus", "Jupiter", "Saturn"],
    options_hi: ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What is the hardest natural substance on Earth?",
    question_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    options_en: ["Diamond", "Gold", "Iron", "Silver"],
    options_hi: ["हीरा", "सोना", "लोहा", "चाँदी"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which element has the chemical symbol 'O'?",
    question_hi: "'O' रासायनिक प्रतीक किस तत्व का है?",
    options_en: ["Oxygen", "Gold", "Osmium", "Zinc"],
    options_hi: ["ऑक्सीजन", "सोना", "ओस्मियम", "जस्ता"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Who wrote 'Romeo and Juliet'?",
    question_hi: "'रोमियो एंड जूलियट' किसने लिखा?",
    options_en: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
    options_hi: ["विलियम शेक्सपीयर", "चार्ल्स डिकेंस", "लियो टॉलस्टॉय", "मार्क ट्वेन"],
    answer_en: "William Shakespeare",
    answer_hi: "विलियम शेक्सपीयर",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which ocean is the largest?",
    question_hi: "सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    options_hi: ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the process by which plants make their food?",
    question_hi: "पेड़ पौधे भोजन कैसे बनाते हैं?",
    options_en: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
    options_hi: ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "किण्वन"],
    answer_en: "Photosynthesis",
    answer_hi: "प्रकाश संश्लेषण",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "In which year did the Titanic sink?",
    question_hi: "टाइटैनिक जहाज कब डूबा था?",
    options_en: ["1912", "1905", "1920", "1898"],
    options_hi: ["1912", "1905", "1920", "1898"],
    answer_en: "1912",
    answer_hi: "1912",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the main language spoken in Brazil?",
    question_hi: "ब्राज़ील में मुख्य भाषा कौन सी है?",
    options_en: ["Portuguese", "Spanish", "English", "French"],
    options_hi: ["पुर्तगाली", "स्पेनिश", "अंग्रेज़ी", "फ्रेंच"],
    answer_en: "Portuguese",
    answer_hi: "पुर्तगाली",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the tallest mountain in the world?",
    question_hi: "दुनिया का सबसे ऊँचा पहाड़ कौन सा है?",
    options_en: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    options_hi: ["माउंट एवरेस्ट", "के2", "कंचनजंगा", "ल्होत्से"],
    answer_en: "Mount Everest",
    answer_hi: "माउंट एवरेस्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Who discovered penicillin?",
    question_hi: "पेनिसिलिन की खोज किसने की?",
    options_en: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
    options_hi: ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "लुई पाश्चर", "आइजैक न्यूटन"],
    answer_en: "Alexander Fleming",
    answer_hi: "अलेक्जेंडर फ्लेमिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the largest mammal?",
    question_hi: "सबसे बड़ा स्तनपायी जानवर कौन सा है?",
    options_en: ["Blue whale", "Elephant", "Giraffe", "Hippopotamus"],
    options_hi: ["ब्लू व्हेल", "हाथी", "जिराफ", "दरियाई घोड़ा"],
    answer_en: "Blue whale",
    answer_hi: "ब्लू व्हेल",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which country is known as the Land of the Rising Sun?",
    question_hi: "उगते हुए सूरज की धरती के रूप में कौन सा देश जाना जाता है?",
    options_en: ["Japan", "China", "South Korea", "Thailand"],
    options_hi: ["जापान", "चीन", "दक्षिण कोरिया", "थाईलैंड"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What gas do plants absorb from the atmosphere?",
    question_hi: "पेड़ पौधे वायुमंडल से कौन सा गैस अवशोषित करते हैं?",
    options_en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Who is the author of the Harry Potter series?",
    question_hi: "हैरी पॉटर श्रृंखला के लेखक कौन हैं?",
    options_en: ["J.K. Rowling", "J.R.R. Tolkien", "Stephen King", "George R.R. Martin"],
    options_hi: ["जे.के. राउलिंग", "जे.आर.आर. टोल्किन", "स्टीफन किंग", "जॉर्ज आर.आर. मार्टिन"],
    answer_en: "J.K. Rowling",
    answer_hi: "जे.के. राउलिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which instrument has keys, pedals, and strings?",
    question_hi: "कौन सा वाद्ययंत्र जिसमें चाबियाँ, पेडल और तार होते हैं?",
    options_en: ["Piano", "Guitar", "Violin", "Flute"],
    options_hi: ["पियानो", "गिटार", "वायलिन", "बांसुरी"],
    answer_en: "Piano",
    answer_hi: "पियानो",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "How many continents are there on Earth?",
    question_hi: "पृथ्वी पर कितने महाद्वीप हैं?",
    options_en: ["7", "5", "6", "8"],
    options_hi: ["7", "5", "6", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which is the smallest country in the world?",
    question_hi: "दुनिया का सबसे छोटा देश कौन सा है?",
    options_en: ["Vatican City", "Monaco", "Nauru", "San Marino"],
    options_hi: ["वेटिकन सिटी", "मोनाको", "नौरु", "सैन मैरिनो"],
    answer_en: "Vatican City",
    answer_hi: "वेटिकन सिटी",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What is the chemical formula of water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "O2", "NaCl"],
    options_hi: ["H2O", "CO2", "O2", "NaCl"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Who was the first person to walk on the moon?",
    question_hi: "चाँद पर चलने वाला पहला व्यक्ति कौन था?",
    options_en: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
    options_hi: ["नील आर्मस्ट्रांग", "बज़ एल्ड्रिन", "यूरी गगारिन", "माइकल कॉलिन्स"],
    answer_en: "Neil Armstrong",
    answer_hi: "नील आर्मस्ट्रांग",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which country hosted the 2016 Summer Olympics?",
    question_hi: "2016 ग्रीष्मकालीन ओलंपिक की मेजबानी किस देश ने की?",
    options_en: ["Brazil", "China", "United Kingdom", "Russia"],
    options_hi: ["ब्राज़ील", "चीन", "यूके", "रूस"],
    answer_en: "Brazil",
    answer_hi: "ब्राज़ील",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the main ingredient in guacamole?",
    question_hi: "गुआकामोले में मुख्य सामग्री क्या है?",
    options_en: ["Avocado", "Tomato", "Onion", "Pepper"],
    options_hi: ["एवोकाडो", "टमाटर", "प्याज़", "मिर्च"],
    answer_en: "Avocado",
    answer_hi: "एवोकाडो",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which planet has the most moons?",
    question_hi: "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
    options_en: ["Saturn", "Jupiter", "Mars", "Neptune"],
    options_hi: ["शनि", "बृहस्पति", "मंगल", "वरुण"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the capital of Canada?",
    question_hi: "कनाडा की राजधानी क्या है?",
    options_en: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    options_hi: ["ओटावा", "टोरंटो", "वैंकूवर", "मॉन्ट्रियल"],
    answer_en: "Ottawa",
    answer_hi: "ओटावा",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Who painted the ceiling of the Sistine Chapel?",
    question_hi: "सिस्टिन चैपल की छत की पेंटिंग किसने बनाई?",
    options_en: ["Michelangelo", "Raphael", "Donatello", "Leonardo da Vinci"],
    options_hi: ["माइकलएंजेलो", "राफेल", "डोनाटेलो", "लियोनार्डो दा विंची"],
    answer_en: "Michelangelo",
    answer_hi: "माइकलएंजेलो",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the largest organ in the human body?",
    question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Skin", "Liver", "Heart", "Lung"],
    options_hi: ["त्वचा", "जिगर", "दिल", "फेफड़े"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which country is famous for the kangaroo?",
    question_hi: "कंगारू के लिए कौन सा देश प्रसिद्ध है?",
    options_en: ["Australia", "South Africa", "India", "Mexico"],
    options_hi: ["ऑस्ट्रेलिया", "दक्षिण अफ्रीका", "भारत", "मेक्सिको"],
    answer_en: "Australia",
    answer_hi: "ऑस्ट्रेलिया",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the boiling point of water at sea level?",
    question_hi: "समुद्र तल पर पानी का उबलने का तापमान क्या है?",
    options_en: ["100°C", "90°C", "80°C", "110°C"],
    options_hi: ["100°C", "90°C", "80°C", "110°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Who is known as the Father of Computers?",
    question_hi: "कंप्यूटर के जनक के रूप में किसे जाना जाता है?",
    options_en: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    options_hi: ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "स्टीव जॉब्स"],
    answer_en: "Charles Babbage",
    answer_hi: "चार्ल्स बैबेज",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which animal is known as the King of the Jungle?",
    question_hi: "कौन सा जानवर जंगल का राजा कहलाता है?",
    options_en: ["Lion", "Tiger", "Elephant", "Gorilla"],
    options_hi: ["शेर", "बाघ", "हाथी", "गोरिल्ला"],
    answer_en: "Lion",
    answer_hi: "शेर",
    attempted: false,
    selected: ""
  },
  {
  num: 42,
  question_en: "What does DNA stand for?",
  question_hi: "DNA का पूरा नाम क्या है?",
  options_en: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Deoxyribose Nucleic Acid", "None of the above"],
  options_hi: ["डिऑक्सीराइबोन्यूक्लिक एसिड", "राइबोन्यूक्लिक एसिड", "डिऑक्सीराइबोज न्यूक्लिक एसिड", "उपरोक्त में से कोई नहीं"],
  answer_en: "Deoxyribonucleic Acid",
  answer_hi: "डिऑक्सीराइबोन्यूक्लिक एसिड",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which vitamin is produced when a person is exposed to sunlight?",
  question_hi: "कौन सा विटामिन तब बनता है जब कोई व्यक्ति सूरज की रोशनी में आता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B12"],
  options_hi: ["विटामिन डी", "विटामिन ए", "विटामिन सी", "विटामिन बी12"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन डी",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which is the longest river in the world?",
  question_hi: "दुनिया की सबसे लंबी नदी कौन सी है?",
  options_en: ["Nile", "Amazon", "Yangtze", "Mississippi"],
  options_hi: ["नील", "अमेज़न", "यांग्त्ज़े", "मिसिसिपी"],
  answer_en: "Nile",
  answer_hi: "नील",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the symbol for gold in the periodic table?",
  question_hi: "आवर्त सारणी में सोने का प्रतीक क्या है?",
  options_en: ["Au", "Ag", "Gd", "Ga"],
  options_hi: ["Au", "Ag", "Gd", "Ga"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which country gifted the Statue of Liberty to the USA?",
  question_hi: "किस देश ने अमेरिका को स्टैच्यू ऑफ़ लिबर्टी उपहार में दिया था?",
  options_en: ["France", "England", "Germany", "Italy"],
  options_hi: ["फ्रांस", "इंग्लैंड", "जर्मनी", "इटली"],
  answer_en: "France",
  answer_hi: "फ्रांस",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which language has the most native speakers worldwide?",
  question_hi: "दुनिया में सबसे ज्यादा मातृभाषी बोलने वाले कौन सी भाषा है?",
  options_en: ["Mandarin Chinese", "English", "Hindi", "Spanish"],
  options_hi: ["मेंडारिन चीनी", "अंग्रेज़ी", "हिन्दी", "स्पेनिश"],
  answer_en: "Mandarin Chinese",
  answer_hi: "मेंडारिन चीनी",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which scientist proposed the theory of relativity?",
  question_hi: "सापेक्षता के सिद्धांत का प्रस्ताव किस वैज्ञानिक ने दिया था?",
  options_en: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
  options_hi: ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "निकोला टेस्ला", "गैलीलियो गैलीली"],
  answer_en: "Albert Einstein",
  answer_hi: "अल्बर्ट आइंस्टीन",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which city is known as the City of Love?",
  question_hi: "कौन सी शहर को प्यार का शहर कहा जाता है?",
  options_en: ["Paris", "Venice", "Rome", "New York"],
  options_hi: ["पेरिस", "वेनीस", "रोम", "न्यूयॉर्क"],
  answer_en: "Paris",
  answer_hi: "पेरिस",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the freezing point of water?",
  question_hi: "पानी का जमने का तापमान क्या है?",
  options_en: ["0°C", "32°C", "100°C", "-10°C"],
  options_hi: ["0°C", "32°C", "100°C", "-10°C"],
  answer_en: "0°C",
  answer_hi: "0°C",
  attempted: false,
  selected: ""
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