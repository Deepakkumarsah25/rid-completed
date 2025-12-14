const questions=[
    {
      "num": 1,
      "question_en": "A metallic sphere of radius 12 cm is melted and recast into 27 identical small spheres. Find the radius of each small sphere.",
      "question_hi": "12 सेमी त्रिज्या वाले एक धातु के गोले को पिघलाकर 27 एक जैसे छोटे गोलों में ढाला जाता है। प्रत्येक छोटे गोले की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["4 cm", "6 cm", "8 cm", "9 cm"],
      "options_hi": ["4 सेमी", "6 सेमी", "8 सेमी", "9 सेमी"],
      "answer_en": "4 cm",
      "answer_hi": "4 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "A solid cylinder of height 10 cm and radius 7 cm is melted and recast into a cone of height 14 cm. Find the radius of the base of the cone.",
      "question_hi": "10 सेमी ऊँचाई और 7 सेमी त्रिज्या वाले एक ठोस बेलन को पिघलाकर 14 सेमी ऊँचाई का एक शंकु बनाया जाता है। शंकु के आधार की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["√35 cm", "√70 cm", "7 cm", "14 cm"],
      "options_hi": ["√35 सेमी", "√70 सेमी", "7 सेमी", "14 सेमी"],
      "answer_en": "√70 cm",
      "answer_hi": "√70 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "A hemispherical bowl of internal radius 9 cm is full of water. This water is emptied into cylindrical vessels of radius 3 cm and height 4 cm. How many vessels are required?",
      "question_hi": "9 सेमी आंतरिक त्रिज्या वाला एक अर्धगोलाकार कटोरा पानी से भरा हुआ है। इस पानी को 3 सेमी त्रिज्या और 4 सेमी ऊँचाई वाले बेलनाकार बर्तनों में खाली किया जाता है। कितने बर्तनों की आवश्यकता है?",
      "options_en": ["13.5", "27", "40.5", "54"],
      "options_hi": ["13.5", "27", "40.5", "54"],
      "answer_en": "13.5",
      "answer_hi": "13.5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "The surface area of a sphere is 5544 cm². Find its volume.",
      "question_hi": "एक गोले का पृष्ठीय क्षेत्रफल 5544 सेमी² है। इसका आयतन ज्ञात कीजिए।",
      "options_en": ["38808 cm³", "38808/√π cm³", "5544√π cm³", "1848π cm³"],
      "options_hi": ["38808 सेमी³", "38808/√π सेमी³", "5544√π सेमी³", "1848π सेमी³"],
      "answer_en": "38808 cm³",
      "answer_hi": "38808 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "A cone of height 24 cm and radius 6 cm is made of clay. A child reshapes it into a sphere. Find the surface area of the sphere.",
      "question_hi": "24 सेमी ऊँचाई और 6 सेमी त्रिज्या का एक शंकु मिट्टी का बना है। एक बच्चा इसे एक गोले के रूप में ढालता है। गोले का पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["144π cm²", "196π cm²", "256π cm²", "324π cm²"],
      "options_hi": ["144π सेमी²", "196π सेमी²", "256π सेमी²", "324π सेमी²"],
      "answer_en": "144π cm²",
      "answer_hi": "144π सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "A cylindrical pipe has inner diameter 7 cm and water flows through it at 15 km/h. Find the volume of water that flows in 30 minutes.",
      "question_hi": "एक बेलनाकार पाइप का आंतरिक व्यास 7 सेमी है और इसमें से पानी 15 किमी/घंटा की गति से बहता है। 30 मिनट में बहने वाले पानी का आयतन ज्ञात कीजिए।",
      "options_en": ["8.6625 m³", "86.625 m³", "866.25 m³", "8662.5 m³"],
      "options_hi": ["8.6625 मी³", "86.625 मी³", "866.25 मी³", "8662.5 मी³"],
      "answer_en": "86.625 m³",
      "answer_hi": "86.625 मी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "The curved surface area of a cylinder is 1320 cm² and its height is 21 cm. Find its volume.",
      "question_hi": "एक बेलन का वक्र पृष्ठीय क्षेत्रफल 1320 सेमी² है और इसकी ऊँचाई 21 सेमी है। इसका आयतन ज्ञात कीजिए।",
      "options_en": ["1980 cm³", "2640 cm³", "3300 cm³", "3960 cm³"],
      "options_hi": ["1980 सेमी³", "2640 सेमी³", "3300 सेमी³", "3960 सेमी³"],
      "answer_en": "1980 cm³",
      "answer_hi": "1980 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "A solid metallic cuboid of dimensions 24 cm × 18 cm × 4 cm is melted and recast into solid cubes of edge 6 cm. Find the number of cubes formed.",
      "question_hi": "24 सेमी × 18 सेमी × 4 सेमी विमाओं वाले एक ठोस धातु के घनाभ को पिघलाकर 6 सेमी किनारे वाले ठोस घनों में ढाला जाता है। बने घनों की संख्या ज्ञात कीजिए।",
      "options_en": ["8", "12", "16", "24"],
      "options_hi": ["8", "12", "16", "24"],
      "answer_en": "8",
      "answer_hi": "8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "A hemisphere of lead of radius 7 cm is cast into a right circular cone of height 14 cm. Find the radius of the base of the cone.",
      "question_hi": "7 सेमी त्रिज्या वाले सीसे के एक अर्धगोले को 14 सेमी ऊँचाई के एक लंब वृत्तीय शंकु में ढाला जाता है। शंकु के आधार की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["√14 cm", "√28 cm", "√7 cm", "√21 cm"],
      "options_hi": ["√14 सेमी", "√28 सेमी", "√7 सेमी", "√21 सेमी"],
      "answer_en": "√14 cm",
      "answer_hi": "√14 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "The volume of a right circular cone is 1232 cm³ and its height is 24 cm. Find its curved surface area.",
      "question_hi": "एक लंब वृत्तीय शंकु का आयतन 1232 सेमी³ है और इसकी ऊँचाई 24 सेमी है। इसका वक्र पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["550 cm²", "550√2 cm²", "550π cm²", "550√π cm²"],
      "options_hi": ["550 सेमी²", "550√2 सेमी²", "550π सेमी²", "550√π सेमी²"],
      "answer_en": "550 cm²",
      "answer_hi": "550 सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "A solid is in the shape of a cylinder with two cones stuck at its ends. The length of the solid is 20 cm, the diameter of the cylinder is 7 cm and the height of each cone is 3.5 cm. Find its total surface area.",
      "question_hi": "एक ठोस एक बेलन के आकार का है जिसके दोनों सिरों पर दो शंकु जुड़े हुए हैं। ठोस की लंबाई 20 सेमी है, बेलन का व्यास 7 सेमी है और प्रत्येक शंकु की ऊँचाई 3.5 सेमी है। इसका संपूर्ण पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["374 cm²", "374π cm²", "187π cm²", "748 cm²"],
      "options_hi": ["374 सेमी²", "374π सेमी²", "187π सेमी²", "748 सेमी²"],
      "answer_en": "374 cm²",
      "answer_hi": "374 सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "A cylindrical container of radius 6 cm contains water. A solid sphere of radius 3 cm is immersed completely. Find the height by which water rises.",
      "question_hi": "6 सेमी त्रिज्या वाले एक बेलनाकार पात्र में पानी है। 3 सेमी त्रिज्या का एक ठोस गोला पूरी तरह डुबोया जाता है। पानी कितनी ऊँचाई तक बढ़ेगा?",
      "options_en": ["1 cm", "2 cm", "3 cm", "4 cm"],
      "options_hi": ["1 सेमी", "2 सेमी", "3 सेमी", "4 सेमी"],
      "answer_en": "1 cm",
      "answer_hi": "1 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "The volume of a sphere is 38808 cm³. Find its surface area.",
      "question_hi": "एक गोले का आयतन 38808 सेमी³ है। इसका पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["5544 cm²", "5544π cm²", "1848π cm²", "2772 cm²"],
      "options_hi": ["5544 सेमी²", "5544π सेमी²", "1848π सेमी²", "2772 सेमी²"],
      "answer_en": "5544 cm²",
      "answer_hi": "5544 सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "A solid cylinder of height 15 cm and diameter 14 cm is melted and recast into 15 equal solid spheres. Find the radius of each sphere.",
      "question_hi": "15 सेमी ऊँचाई और 14 सेमी व्यास वाले एक ठोस बेलन को पिघलाकर 15 बराबर ठोस गोलों में ढाला जाता है। प्रत्येक गोले की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["3.5 cm", "7 cm", "√21 cm", "√14 cm"],
      "options_hi": ["3.5 सेमी", "7 सेमी", "√21 सेमी", "√14 सेमी"],
      "answer_en": "3.5 cm",
      "answer_hi": "3.5 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "A conical tent is 10 m high and the radius of its base is 24 m. Find the slant height and cost of canvas required at ₹70 per m².",
      "question_hi": "एक शंक्वाकार तंबू 10 मीटर ऊँचा है और इसके आधार की त्रिज्या 24 मीटर है। तिर्यक ऊँचाई और ₹70 प्रति मी² की दर से आवश्यक कैनवास की लागत ज्ञात कीजिए।",
      "options_en": ["26 m, ₹137280", "26 m, ₹68640", "13 m, ₹34320", "√676 m, ₹68640"],
      "options_hi": ["26 मी, ₹137280", "26 मी, ₹68640", "13 मी, ₹34320", "√676 मी, ₹68640"],
      "answer_en": "26 m, ₹137280",
      "answer_hi": "26 मी, ₹137280",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "A hollow spherical shell is made of metal of density 8 g/cm³. If its internal and external radii are 6 cm and 9 cm respectively, find the weight of the shell.",
      "question_hi": "8 ग्राम/सेमी³ घनत्व वाली धातु से एक खोखला गोलाकार खोल बनाया गया है। यदि इसकी आंतरिक और बाह्य त्रिज्याएँ क्रमशः 6 सेमी और 9 सेमी हैं, तो खोल का भार ज्ञात कीजिए।",
      "options_en": ["5.976 kg", "4.488 kg", "3.744 kg", "2.992 kg"],
      "options_hi": ["5.976 किग्रा", "4.488 किग्रा", "3.744 किग्रा", "2.992 किग्रा"],
      "answer_en": "5.976 kg",
      "answer_hi": "5.976 किग्रा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "The diameter of a metallic sphere is 6 cm. It is melted and drawn into a wire of diameter 0.2 cm. Find the length of the wire.",
      "question_hi": "एक धातु के गोले का व्यास 6 सेमी है। इसे पिघलाकर 0.2 सेमी व्यास के तार में खींचा जाता है। तार की लंबाई ज्ञात कीजिए।",
      "options_en": ["36 m", "72 m", "108 m", "144 m"],
      "options_hi": ["36 मी", "72 मी", "108 मी", "144 मी"],
      "answer_en": "36 m",
      "answer_hi": "36 मी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "A hemispherical bowl of internal radius 15 cm contains a liquid. The liquid is to be filled into cylindrical bottles of radius 5 cm and height 6 cm. How many bottles are required?",
      "question_hi": "15 सेमी आंतरिक त्रिज्या वाले एक अर्धगोलाकार कटोरे में एक तरल है। तरल को 5 सेमी त्रिज्या और 6 सेमी ऊँचाई वाली बेलनाकार बोतलों में भरना है। कितनी बोतलों की आवश्यकता है?",
      "options_en": ["15", "30", "45", "60"],
      "options_hi": ["15", "30", "45", "60"],
      "answer_en": "30",
      "answer_hi": "30",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "The radius of a sphere is increased by 10%. Find the percentage increase in its surface area.",
      "question_hi": "एक गोले की त्रिज्या 10% बढ़ा दी जाती है। इसके पृष्ठीय क्षेत्रफल में प्रतिशत वृद्धि ज्ञात कीजिए।",
      "options_en": ["10%", "20%", "21%", "33.1%"],
      "options_hi": ["10%", "20%", "21%", "33.1%"],
      "answer_en": "21%",
      "answer_hi": "21%",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "A solid right circular cone of height 120 cm and radius 60 cm is placed in a right circular cylinder full of water such that it touches the bottom. If the radius of the cylinder is 60 cm and height 180 cm, find the volume of water left in the cylinder.",
      "question_hi": "120 सेमी ऊँचाई और 60 सेमी त्रिज्या वाले एक ठोस लंब वृत्तीय शंकु को पानी से भरे एक लंब वृत्तीय बेलन में इस प्रकार रखा जाता है कि वह तल को स्पर्श करे। यदि बेलन की त्रिज्या 60 सेमी और ऊँचाई 180 सेमी है, तो बेलन में शेष पानी का आयतन ज्ञात कीजिए।",
      "options_en": ["1.13 m³", "1.44 m³", "1.58 m³", "1.72 m³"],
      "options_hi": ["1.13 मी³", "1.44 मी³", "1.58 मी³", "1.72 मी³"],
      "answer_en": "1.13 m³",
      "answer_hi": "1.13 मी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "A cylindrical vessel of diameter 14 cm and height 42 cm is fixed symmetrically inside a similar vessel of diameter 16 cm and height 42 cm. Find the total space between the two vessels.",
      "question_hi": "14 सेमी व्यास और 42 सेमी ऊँचाई वाला एक बेलनाकार बर्तन सममित रूप से 16 सेमी व्यास और 42 सेमी ऊँचाई वाले एक समान बर्तन के अंदर स्थिर किया गया है। दोनों बर्तनों के बीच का कुल स्थान ज्ञात कीजिए।",
      "options_en": ["1980 cm³", "3960 cm³", "5940 cm³", "7920 cm³"],
      "options_hi": ["1980 सेमी³", "3960 सेमी³", "5940 सेमी³", "7920 सेमी³"],
      "answer_en": "1980 cm³",
      "answer_hi": "1980 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "A solid cube of side 12 cm is cut into eight cubes of equal volume. Find the side of the new cube.",
      "question_hi": "12 सेमी भुजा वाले एक ठोस घन को आठ समान आयतन के घनों में काटा जाता है। नए घन की भुजा ज्ञात कीजिए।",
      "options_en": ["4 cm", "6 cm", "8 cm", "10 cm"],
      "options_hi": ["4 सेमी", "6 सेमी", "8 सेमी", "10 सेमी"],
      "answer_en": "6 cm",
      "answer_hi": "6 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "A river 3 m deep and 40 m wide is flowing at the rate of 2 km per hour. How much water will fall into the sea in a minute?",
      "question_hi": "3 मीटर गहरी और 40 मीटर चौड़ी एक नदी 2 किमी प्रति घंटे की दर से बह रही है। एक मिनट में कितना पानी समुद्र में गिरेगा?",
      "options_en": ["4000 m³", "400 m³", "40 m³", "4 m³"],
      "options_hi": ["4000 मी³", "400 मी³", "40 मी³", "4 मी³"],
      "answer_en": "4000 m³",
      "answer_hi": "4000 मी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "The diameter of a sphere is decreased by 20%. By what percent does its volume decrease?",
      "question_hi": "एक गोले का व्यास 20% कम कर दिया जाता है। इसका आयतन कितने प्रतिशत घट जाता है?",
      "options_en": ["48.8%", "51.2%", "36%", "64%"],
      "options_hi": ["48.8%", "51.2%", "36%", "64%"],
      "answer_en": "48.8%",
      "answer_hi": "48.8%",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "A solid iron rectangular block of dimensions 4.4 m × 2.6 m × 1 m is cast into a hollow cylindrical pipe of internal radius 30 cm and thickness 5 cm. Find the length of the pipe.",
      "question_hi": "4.4 मीटर × 2.6 मीटर × 1 मीटर विमाओं वाले एक ठोस लोहे के आयताकार ब्लॉक को 30 सेमी आंतरिक त्रिज्या और 5 सेमी मोटाई वाली एक खोखली बेलनाकार पाइप में ढाला जाता है। पाइप की लंबाई ज्ञात कीजिए।",
      "options_en": ["112 m", "224 m", "336 m", "448 m"],
      "options_hi": ["112 मी", "224 मी", "336 मी", "448 मी"],
      "answer_en": "112 m",
      "answer_hi": "112 मी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "A cone of maximum size is carved out from a cube of edge 14 cm. Find the surface area of the remaining solid.",
      "question_hi": "14 सेमी किनारे वाले एक घन से अधिकतम आकार का एक शंकु काटा जाता है। शेष ठोस का पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["1274 + 98√2π cm²", "1274 + 49√2π cm²", "1176 + 98√2π cm²", "1176 + 49√2π cm²"],
      "options_hi": ["1274 + 98√2π सेमी²", "1274 + 49√2π सेमी²", "1176 + 98√2π सेमी²", "1176 + 49√2π सेमी²"],
      "answer_en": "1274 + 98√2π cm²",
      "answer_hi": "1274 + 98√2π सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "A solid cylinder of diameter 12 cm and height 15 cm is melted and recast into 12 toys in the shape of a right circular cone mounted on a hemisphere. If the radius of the hemisphere is 3 cm, find the height of the conical part.",
      "question_hi": "12 सेमी व्यास और 15 सेमी ऊँचाई वाले एक ठोस बेलन को पिघलाकर 12 खिलौने बनाए जाते हैं जो एक अर्धगोले पर रखे एक लंब वृत्तीय शंकु के आकार के हैं। यदि अर्धगोले की त्रिज्या 3 सेमी है, तो शंक्वाकार भाग की ऊँचाई ज्ञात कीजिए।",
      "options_en": ["4 cm", "5 cm", "6 cm", "7 cm"],
      "options_hi": ["4 सेमी", "5 सेमी", "6 सेमी", "7 सेमी"],
      "answer_en": "6 cm",
      "answer_hi": "6 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "A metallic right circular cone 20 cm high and whose vertical angle is 60° is cut into two parts at the middle of its height by a plane parallel to its base. Find the ratio of the volumes of the two parts.",
      "question_hi": "20 सेमी ऊँचाई वाले एक धातु के लंब वृत्तीय शंकु, जिसका शीर्ष कोण 60° है, को इसकी ऊँचाई के मध्य से आधार के समांतर एक तल द्वारा दो भागों में काटा जाता है। दोनों भागों के आयतनों का अनुपात ज्ञात कीजिए।",
      "options_en": ["1:7", "7:1", "1:8", "8:1"],
      "options_hi": ["1:7", "7:1", "1:8", "8:1"],
      "answer_en": "1:7",
      "answer_hi": "1:7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "A hemispherical bowl of internal radius 12 cm contains liquid. This liquid is to be filled into conical shaped small vessels each of radius 4 cm and height 8 cm. How many vessels are required?",
      "question_hi": "12 सेमी आंतरिक त्रिज्या वाले एक अर्धगोलाकार कटोरे में तरल है। इस तरल को 4 सेमी त्रिज्या और 8 सेमी ऊँचाई वाले शंक्वाकार छोटे बर्तनों में भरना है। कितने बर्तनों की आवश्यकता है?",
      "options_en": ["18", "27", "36", "54"],
      "options_hi": ["18", "27", "36", "54"],
      "answer_en": "18",
      "answer_hi": "18",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "A solid is in the shape of a cone mounted on a hemisphere with both having radii equal to 3 cm and height of cone equal to 4 cm. Find the total surface area of the solid.",
      "question_hi": "एक ठोस एक अर्धगोले पर रखे शंकु के आकार का है जिसमें दोनों की त्रिज्याएँ 3 सेमी बराबर हैं और शंकु की ऊँचाई 4 सेमी है। ठोस का संपूर्ण पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["33π cm²", "36π cm²", "39π cm²", "42π cm²"],
      "options_hi": ["33π सेमी²", "36π सेमी²", "39π सेमी²", "42π सेमी²"],
      "answer_en": "33π cm²",
      "answer_hi": "33π सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_en": "A cylindrical bucket 32 cm high and with radius of base 18 cm is filled with sand. This bucket is emptied on the ground to form a conical heap of sand. If the height of the conical heap is 24 cm, find the radius of its base.",
      "question_hi": "32 सेमी ऊँचाई और 18 सेमी आधार त्रिज्या वाली एक बेलनाकार बाल्टी रेत से भरी हुई है। इस बाल्टी को जमीन पर खाली करके रेत का एक शंक्वाकार ढेर बनाया जाता है। यदि शंक्वाकार ढेर की ऊँचाई 24 सेमी है, तो इसके आधार की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["36 cm", "40 cm", "44 cm", "48 cm"],
      "options_hi": ["36 सेमी", "40 सेमी", "44 सेमी", "48 सेमी"],
      "answer_en": "36 cm",
      "answer_hi": "36 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_en": "A solid sphere of radius 3 cm is melted and recast into smaller spheres of radius 1 cm each. Find the increase in total surface area.",
      "question_hi": "3 सेमी त्रिज्या वाले एक ठोस गोले को पिघलाकर 1 सेमी त्रिज्या के छोटे गोलों में ढाला जाता है। कुल पृष्ठीय क्षेत्रफल में वृद्धि ज्ञात कीजिए।",
      "options_en": ["200%", "300%", "400%", "500%"],
      "options_hi": ["200%", "300%", "400%", "500%"],
      "answer_en": "200%",
      "answer_hi": "200%",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_en": "A cylinder and a cone have equal bases and equal heights. If the radius is doubled and height halved, find the ratio of new volume of cylinder to new volume of cone.",
      "question_hi": "एक बेलन और एक शंकु के आधार बराबर हैं और ऊँचाइयाँ बराबर हैं। यदि त्रिज्या दोगुनी कर दी जाए और ऊँचाई आधी कर दी जाए, तो बेलन के नए आयतन और शंकु के नए आयतन का अनुपात ज्ञात कीजिए।",
      "options_en": ["4:1", "8:1", "12:1", "16:1"],
      "options_hi": ["4:1", "8:1", "12:1", "16:1"],
      "answer_en": "12:1",
      "answer_hi": "12:1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_en": "A hollow cylindrical pipe is 210 cm long. Its outer and inner diameters are 10 cm and 6 cm respectively. Find the volume of metal used in the pipe.",
      "question_hi": "एक खोखली बेलनाकार पाइप 210 सेमी लंबी है। इसके बाह्य और आंतरिक व्यास क्रमशः 10 सेमी और 6 सेमी हैं। पाइप में प्रयुक्त धातु का आयतन ज्ञात कीजिए।",
      "options_en": ["10560 cm³", "10580 cm³", "10600 cm³", "10620 cm³"],
      "options_hi": ["10560 सेमी³", "10580 सेमी³", "10600 सेमी³", "10620 सेमी³"],
      "answer_en": "10560 cm³",
      "answer_hi": "10560 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_en": "A cone of height 24 cm has a curved surface area 550 cm². Find its volume.",
      "question_hi": "24 सेमी ऊँचाई वाले एक शंकु का वक्र पृष्ठीय क्षेत्रफल 550 सेमी² है। इसका आयतन ज्ञात कीजिए।",
      "options_en": ["1232 cm³", "1256 cm³", "1280 cm³", "1304 cm³"],
      "options_hi": ["1232 सेमी³", "1256 सेमी³", "1280 सेमी³", "1304 सेमी³"],
      "answer_en": "1232 cm³",
      "answer_hi": "1232 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_en": "The volume of a hemisphere is 2425.5 cm³. Find its curved surface area.",
      "question_hi": "एक अर्धगोले का आयतन 2425.5 सेमी³ है। इसका वक्र पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["693 cm²", "706.5 cm²", "719.5 cm²", "732.5 cm²"],
      "options_hi": ["693 सेमी²", "706.5 सेमी²", "719.5 सेमी²", "732.5 सेमी²"],
      "answer_en": "693 cm²",
      "answer_hi": "693 सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_en": "A metallic sphere of radius 4.2 cm is melted and recast into the shape of a cylinder of radius 6 cm. Find the height of the cylinder.",
      "question_hi": "4.2 सेमी त्रिज्या वाले एक धातु के गोले को पिघलाकर 6 सेमी त्रिज्या वाले एक बेलन के आकार में ढाला जाता है। बेलन की ऊँचाई ज्ञात कीजिए।",
      "options_en": ["2.744 cm", "2.8 cm", "3.2 cm", "3.5 cm"],
      "options_hi": ["2.744 सेमी", "2.8 सेमी", "3.2 सेमी", "3.5 सेमी"],
      "answer_en": "2.744 cm",
      "answer_hi": "2.744 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_en": "A cone, a hemisphere and a cylinder stand on equal bases and have the same height. Find the ratio of their volumes.",
      "question_hi": "एक शंकु, एक अर्धगोला और एक बेलन समान आधारों पर खड़े हैं और समान ऊँचाई रखते हैं। उनके आयतनों का अनुपात ज्ञात कीजिए।",
      "options_en": ["1:2:3", "2:3:1", "3:2:1", "1:3:2"],
      "options_hi": ["1:2:3", "2:3:1", "3:2:1", "1:3:2"],
      "answer_en": "1:2:3",
      "answer_hi": "1:2:3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_en": "A solid is in the form of a cylinder with hemispherical ends. The total length of the solid is 19 cm and the diameter of the cylinder is 7 cm. Find the volume of the solid.",
      "question_hi": "एक ठोस एक बेलन और अर्धगोलाकार सिरों के रूप में है। ठोस की कुल लंबाई 19 सेमी है और बेलन का व्यास 7 सेमी है। ठोस का आयतन ज्ञात कीजिए।",
      "options_en": ["641.67 cm³", "652.33 cm³", "663.67 cm³", "674.33 cm³"],
      "options_hi": ["641.67 सेमी³", "652.33 सेमी³", "663.67 सेमी³", "674.33 सेमी³"],
      "answer_en": "641.67 cm³",
      "answer_hi": "641.67 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_en": "A right circular cylinder just encloses a sphere of radius r. Find the ratio of the volume of the cylinder to the volume of the sphere.",
      "question_hi": "एक लंब वृत्तीय बेलन एक त्रिज्या r के गोले को ठीक ढकता है। बेलन के आयतन और गोले के आयतन का अनुपात ज्ञात कीजिए।",
      "options_en": ["3:2", "2:3", "1:1", "4:3"],
      "options_hi": ["3:2", "2:3", "1:1", "4:3"],
      "answer_en": "3:2",
      "answer_hi": "3:2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_en": "A cylindrical container of radius 6 cm contains water up to a height of 15 cm. A solid sphere of radius 3 cm is immersed in it. Find the volume of water displaced.",
      "question_hi": "6 सेमी त्रिज्या वाले एक बेलनाकार पात्र में 15 सेमी ऊँचाई तक पानी है। इसमें 3 सेमी त्रिज्या का एक ठोस गोला डुबोया जाता है। विस्थापित पानी का आयतन ज्ञात कीजिए।",
      "options_en": ["36π cm³", "108π cm³", "144π cm³", "216π cm³"],
      "options_hi": ["36π सेमी³", "108π सेमी³", "144π सेमी³", "216π सेमी³"],
      "answer_en": "36π cm³",
      "answer_hi": "36π सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_en": "A solid hemisphere of radius 8 cm is melted and recast into a right circular cone of base radius 4 cm. Find the height of the cone.",
      "question_hi": "8 सेमी त्रिज्या वाले एक ठोस अर्धगोले को पिघलाकर 4 सेमी आधार त्रिज्या वाले एक लंब वृत्तीय शंकु में ढाला जाता है। शंकु की ऊँचाई ज्ञात कीजिए।",
      "options_en": ["16 cm", "20 cm", "24 cm", "32 cm"],
      "options_hi": ["16 सेमी", "20 सेमी", "24 सेमी", "32 सेमी"],
      "answer_en": "32 cm",
      "answer_hi": "32 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_en": "A solid cylinder of radius 6 cm and height 10 cm is melted and recast into small cones of radius 3 cm and height 5 cm. Find the number of cones formed.",
      "question_hi": "6 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले एक ठोस बेलन को पिघलाकर 3 सेमी त्रिज्या और 5 सेमी ऊँचाई के छोटे शंकुओं में ढाला जाता है। बने शंकुओं की संख्या ज्ञात कीजिए।",
      "options_en": ["8", "12", "16", "24"],
      "options_hi": ["8", "12", "16", "24"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_en": "A solid sphere of radius 6 cm is melted and recast into a hollow cylinder of thickness 2 cm and external radius 10 cm. Find the height of the cylinder.",
      "question_hi": "6 सेमी त्रिज्या वाले एक ठोस गोले को पिघलाकर 2 सेमी मोटाई और 10 सेमी बाह्य त्रिज्या वाला एक खोखला बेलन बनाया जाता है। बेलन की ऊँचाई ज्ञात कीजिए।",
      "options_en": ["4.5 cm", "5 cm", "5.5 cm", "6 cm"],
      "options_hi": ["4.5 सेमी", "5 सेमी", "5.5 सेमी", "6 सेमी"],
      "answer_en": "4.5 cm",
      "answer_hi": "4.5 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_en": "A right circular cylinder just encloses a sphere of radius 7 cm. Find the volume of the space between the cylinder and the sphere.",
      "question_hi": "एक लंब वृत्तीय बेलन 7 सेमी त्रिज्या के एक गोले को ठीक ढकता है। बेलन और गोले के बीच के स्थान का आयतन ज्ञात कीजिए।",
      "options_en": ["686π/3 cm³", "1372π/3 cm³", "2058π/3 cm³", "2744π/3 cm³"],
      "options_hi": ["686π/3 सेमी³", "1372π/3 सेमी³", "2058π/3 सेमी³", "2744π/3 सेमी³"],
      "answer_en": "686π/3 cm³",
      "answer_hi": "686π/3 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_en": "A solid is in the form of a right circular cylinder with hemispherical ends. The total length of the solid is 28 cm and the diameter of the cylinder is 7 cm. Find the cost of polishing its total surface at the rate of ₹0.50 per cm².",
      "question_hi": "एक ठोस एक लंब वृत्तीय बेलन और अर्धगोलाकार सिरों के रूप में है। ठोस की कुल लंबाई 28 सेमी है और बेलन का व्यास 7 सेमी है। इसके संपूर्ण पृष्ठ को 0.50 रुपये प्रति सेमी² की दर से पॉलिश करने की लागत ज्ञात कीजिए।",
      "options_en": ["₹231", "₹242", "₹253", "₹264"],
      "options_hi": ["₹231", "₹242", "₹253", "₹264"],
      "answer_en": "₹231",
      "answer_hi": "₹231",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_en": "A cone of maximum size is carved out from a cube of edge 7 cm. Find the volume of the remaining solid after the cone is carved out.",
      "question_hi": "7 सेमी किनारे वाले एक घन से अधिकतम आकार का एक शंकु काटा जाता है। शंकु काटे जाने के बाद शेष ठोस का आयतन ज्ञात कीजिए।",
      "options_en": ["245.67 cm³", "250.33 cm³", "255.67 cm³", "260.33 cm³"],
      "options_hi": ["245.67 सेमी³", "250.33 सेमी³", "255.67 सेमी³", "260.33 सेमी³"],
      "answer_en": "245.67 cm³",
      "answer_hi": "245.67 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_en": "A cylindrical container of radius 6 cm and height 15 cm is filled with ice cream. The ice cream is to be filled into cones of height 12 cm and diameter 6 cm, having a hemispherical shape on the top. Find the number of such cones which can be filled with ice cream.",
      "question_hi": "6 सेमी त्रिज्या और 15 सेमी ऊँचाई वाले एक बेलनाकार कंटेनर में आइसक्रीम भरी हुई है। आइसक्रीम को 12 सेमी ऊँचाई और 6 सेमी व्यास वाले शंकुओं में भरना है, जिनके ऊपर एक अर्धगोलाकार आकार है। ऐसे कितने शंकु आइसक्रीम से भरे जा सकते हैं?",
      "options_en": ["10", "12", "15", "20"],
      "options_hi": ["10", "12", "15", "20"],
      "answer_en": "10",
      "answer_hi": "10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_en": "A solid is in the shape of a cone mounted on a hemisphere with both having radii equal to 3.5 cm and height of cone equal to 4 cm. Find the volume of the solid.",
      "question_hi": "एक ठोस एक अर्धगोले पर रखे शंकु के आकार का है जिसमें दोनों की त्रिज्याएँ 3.5 सेमी बराबर हैं और शंकु की ऊँचाई 4 सेमी है। ठोस का आयतन ज्ञात कीजिए।",
      "options_en": ["142.33 cm³", "150.67 cm³", "158.33 cm³", "166.67 cm³"],
      "options_hi": ["142.33 सेमी³", "150.67 सेमी³", "158.33 सेमी³", "166.67 सेमी³"],
      "answer_en": "150.67 cm³",
      "answer_hi": "150.67 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_en": "A hemispherical bowl of internal radius 15 cm contains a liquid. This liquid is to be filled into cylindrical shaped bottles each of radius 1.5 cm and height 4 cm. How many bottles are required?",
      "question_hi": "15 सेमी आंतरिक त्रिज्या वाले एक अर्धगोलाकार कटोरे में एक तरल है। इस तरल को 1.5 सेमी त्रिज्या और 4 सेमी ऊँचाई वाली बेलनाकार बोतलों में भरना है। कितनी बोतलों की आवश्यकता है?",
      "options_en": ["250", "300", "350", "400"],
      "options_hi": ["250", "300", "350", "400"],
      "answer_en": "250",
      "answer_hi": "250",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 51,
      "question_en": "A solid cylinder of radius 3 cm and height 5 cm is melted and recast into a solid sphere. Find the radius of the sphere.",
      "question_hi": "3 सेमी त्रिज्या और 5 सेमी ऊँचाई वाले एक ठोस बेलन को पिघलाकर एक ठोस गोले में ढाला जाता है। गोले की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["(45/4)^(1/3) cm", "(45/2)^(1/3) cm", "3 cm", "3.5 cm"],
      "options_hi": ["(45/4)^(1/3) सेमी", "(45/2)^(1/3) सेमी", "3 सेमी", "3.5 सेमी"],
      "answer_en": "(45/4)^(1/3) cm",
      "answer_hi": "(45/4)^(1/3) सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 52,
      "question_en": "A conical vessel of radius 6 cm and height 8 cm is completely filled with water. A metal sphere of radius 3 cm is immersed in it. Find the volume of water that overflows.",
      "question_hi": "6 सेमी त्रिज्या और 8 सेमी ऊँचाई वाले एक शंक्वाकार बर्तन में पानी पूरी तरह भरा हुआ है। इसमें 3 सेमी त्रिज्या का एक धातु का गोला डुबोया जाता है। बहने वाले पानी का आयतन ज्ञात कीजिए।",
      "options_en": ["36π cm³", "48π cm³", "64π cm³", "72π cm³"],
      "options_hi": ["36π सेमी³", "48π सेमी³", "64π सेमी³", "72π सेमी³"],
      "answer_en": "36π cm³",
      "answer_hi": "36π सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 53,
      "question_en": "A solid is in the form of a right circular cylinder with hemispherical ends. The total length of the solid is 19 cm and the diameter of the cylinder is 7 cm. Find the cost of painting its total surface at the rate of ₹0.50 per cm².",
      "question_hi": "एक ठोस एक लंब वृत्तीय बेलन और अर्धगोलाकार सिरों के रूप में है। ठोस की कुल लंबाई 19 सेमी है और बेलन का व्यास 7 सेमी है। इसके संपूर्ण पृष्ठ को 0.50 रुपये प्रति सेमी² की दर से पेंट करने की लागत ज्ञात कीजिए।",
      "options_en": ["₹209", "₹214.5", "₹220", "₹225.5"],
      "options_hi": ["₹209", "₹214.5", "₹220", "₹225.5"],
      "answer_en": "₹209",
      "answer_hi": "₹209",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 54,
      "question_en": "A solid sphere of radius 3 cm is melted and drawn into a wire of diameter 0.2 cm. Find the length of the wire.",
      "question_hi": "3 सेमी त्रिज्या वाले एक ठोस गोले को पिघलाकर 0.2 सेमी व्यास का तार बनाया जाता है। तार की लंबाई ज्ञात कीजिए।",
      "options_en": ["36 m", "48 m", "60 m", "72 m"],
      "options_hi": ["36 मी", "48 मी", "60 मी", "72 मी"],
      "answer_en": "36 m",
      "answer_hi": "36 मी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 55,
      "question_en": "A cylindrical bucket 32 cm high and with radius of base 18 cm is filled with sand. This bucket is emptied on the ground to form a conical heap of sand. If the height of the conical heap is 24 cm, find the area of the base of the heap.",
      "question_hi": "32 सेमी ऊँचाई और 18 सेमी आधार त्रिज्या वाली एक बेलनाकार बाल्टी रेत से भरी हुई है। इस बाल्टी को जमीन पर खाली करके रेत का एक शंक्वाकार ढेर बनाया जाता है। यदि शंक्वाकार ढेर की ऊँचाई 24 सेमी है, तो ढेर के आधार का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["324π cm²", "400π cm²", "484π cm²", "576π cm²"],
      "options_hi": ["324π सेमी²", "400π सेमी²", "484π सेमी²", "576π सेमी²"],
      "answer_en": "324π cm²",
      "answer_hi": "324π सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 56,
      "question_en": "A solid is in the shape of a cone mounted on a hemisphere with both having radii equal to 2 cm and height of cone equal to 4 cm. Find the total surface area of the solid.",
      "question_hi": "एक ठोस एक अर्धगोले पर रखे शंकु के आकार का है जिसमें दोनों की त्रिज्याएँ 2 सेमी बराबर हैं और शंकु की ऊँचाई 4 सेमी है। ठोस का संपूर्ण पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["4π(√5 + 3) cm²", "4π(√5 + 4) cm²", "4π(√5 + 5) cm²", "4π(√5 + 6) cm²"],
      "options_hi": ["4π(√5 + 3) सेमी²", "4π(√5 + 4) सेमी²", "4π(√5 + 5) सेमी²", "4π(√5 + 6) सेमी²"],
      "answer_en": "4π(√5 + 3) cm²",
      "answer_hi": "4π(√5 + 3) सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 57,
      "question_en": "A cylindrical container of radius 6 cm contains water up to a height of 12 cm. A solid metal cylinder of radius 3 cm and height 8 cm is immersed in it. Find the height by which the water level will rise.",
      "question_hi": "6 सेमी त्रिज्या वाले एक बेलनाकार पात्र में 12 सेमी ऊँचाई तक पानी है। इसमें 3 सेमी त्रिज्या और 8 सेमी ऊँचाई का एक ठोस धातु का बेलन डुबोया जाता है। जल स्तर कितनी ऊँचाई तक बढ़ेगा?",
      "options_en": ["1 cm", "2 cm", "3 cm", "4 cm"],
      "options_hi": ["1 सेमी", "2 सेमी", "3 सेमी", "4 सेमी"],
      "answer_en": "2 cm",
      "answer_hi": "2 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 58,
      "question_en": "A hemispherical bowl of internal radius 18 cm is full of liquid. This liquid is to be filled into cylindrical shaped small bottles each of diameter 6 cm and height 6 cm. How many bottles are required?",
      "question_hi": "18 सेमी आंतरिक त्रिज्या वाला एक अर्धगोलाकार कटोरा तरल से भरा हुआ है। इस तरल को 6 सेमी व्यास और 6 सेमी ऊँचाई वाली बेलनाकार छोटी बोतलों में भरना है। कितनी बोतलों की आवश्यकता है?",
      "options_en": ["72", "84", "96", "108"],
      "options_hi": ["72", "84", "96", "108"],
      "answer_en": "72",
      "answer_hi": "72",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 59,
      "question_en": "A solid is in the form of a right circular cylinder with hemispherical ends. The total length of the solid is 35 cm and the diameter of the cylinder is 14 cm. Find the volume of the solid.",
      "question_hi": "एक ठोस एक लंब वृत्तीय बेलन और अर्धगोलाकार सिरों के रूप में है। ठोस की कुल लंबाई 35 सेमी है और बेलन का व्यास 14 सेमी है। ठोस का आयतन ज्ञात कीजिए।",
      "options_en": ["7700 cm³", "8085 cm³", "8470 cm³", "8855 cm³"],
      "options_hi": ["7700 सेमी³", "8085 सेमी³", "8470 सेमी³", "8855 सेमी³"],
      "answer_en": "8085 cm³",
      "answer_hi": "8085 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 60,
      "question_en": "A cone of height 9 cm and diameter of base 12 cm is carved out from a wooden solid sphere of radius 9 cm. Find the percentage of wood wasted.",
      "question_hi": "9 सेमी त्रिज्या वाले एक लकड़ी के ठोस गोले से 9 सेमी ऊँचाई और 12 सेमी आधार व्यास वाला एक शंकु काटा जाता है। बर्बाद हुई लकड़ी का प्रतिशत ज्ञात कीजिए।",
      "options_en": ["25%", "50%", "75%", "80%"],
      "options_hi": ["25%", "50%", "75%", "80%"],
      "answer_en": "75%",
      "answer_hi": "75%",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 61,
      "question_en": "A solid cylinder of radius 5 cm and height 12 cm is melted and recast into small cones of radius 2.5 cm and height 6 cm. Find the number of cones formed.",
      "question_hi": "5 सेमी त्रिज्या और 12 सेमी ऊँचाई वाले एक ठोस बेलन को पिघलाकर 2.5 सेमी त्रिज्या और 6 सेमी ऊँचाई के छोटे शंकुओं में ढाला जाता है। बने शंकुओं की संख्या ज्ञात कीजिए।",
      "options_en": ["12", "18", "24", "36"],
      "options_hi": ["12", "18", "24", "36"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 62,
      "question_en": "A solid sphere of radius 9 cm is melted and drawn into a wire of diameter 0.3 cm. Find the length of the wire.",
      "question_hi": "9 सेमी त्रिज्या वाले एक ठोस गोले को पिघलाकर 0.3 सेमी व्यास का तार बनाया जाता है। तार की लंबाई ज्ञात कीजिए।",
      "options_en": ["432 m", "864 m", "1296 m", "1728 m"],
      "options_hi": ["432 मी", "864 मी", "1296 मी", "1728 मी"],
      "answer_en": "1728 m",
      "answer_hi": "1728 मी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 63,
      "question_en": "A right circular cylinder just encloses a sphere of radius 10 cm. Find the ratio of the volume of the cylinder to the volume of the sphere.",
      "question_hi": "एक लंब वृत्तीय बेलन 10 सेमी त्रिज्या के एक गोले को ठीक ढकता है। बेलन के आयतन और गोले के आयतन का अनुपात ज्ञात कीजिए।",
      "options_en": ["3:2", "2:3", "1:1", "4:3"],
      "options_hi": ["3:2", "2:3", "1:1", "4:3"],
      "answer_en": "3:2",
      "answer_hi": "3:2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 64,
      "question_en": "A solid is in the form of a right circular cylinder with hemispherical ends. The total length of the solid is 28 cm and the diameter of the cylinder is 7 cm. Find the volume of the solid.",
      "question_hi": "एक ठोस एक लंब वृत्तीय बेलन और अर्धगोलाकार सिरों के रूप में है। ठोस की कुल लंबाई 28 सेमी है और बेलन का व्यास 7 सेमी है। ठोस का आयतन ज्ञात कीजिए।",
      "options_en": ["1127 cm³", "1155 cm³", "1183 cm³", "1211 cm³"],
      "options_hi": ["1127 सेमी³", "1155 सेमी³", "1183 सेमी³", "1211 सेमी³"],
      "answer_en": "1155 cm³",
      "answer_hi": "1155 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 65,
      "question_en": "A cone of maximum size is carved out from a cube of edge 14 cm. Find the surface area of the cone.",
      "question_hi": "14 सेमी किनारे वाले एक घन से अधिकतम आकार का एक शंकु काटा जाता है। शंकु का पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["308√2π cm²", "308√3π cm²", "308√5π cm²", "308√6π cm²"],
      "options_hi": ["308√2π सेमी²", "308√3π सेमी²", "308√5π सेमी²", "308√6π सेमी²"],
      "answer_en": "308√2π cm²",
      "answer_hi": "308√2π सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 66,
      "question_en": "A solid hemisphere of radius 6 cm is melted and recast into a solid right circular cone of height 6 cm. Find the radius of the base of the cone.",
      "question_hi": "6 सेमी त्रिज्या वाले एक ठोस अर्धगोले को पिघलाकर 6 सेमी ऊँचाई का एक ठोस लंब वृत्तीय शंकु बनाया जाता है। शंकु के आधार की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["6√2 cm", "6√3 cm", "6 cm", "12 cm"],
      "options_hi": ["6√2 सेमी", "6√3 सेमी", "6 सेमी", "12 सेमी"],
      "answer_en": "6√2 cm",
      "answer_hi": "6√2 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 67,
      "question_en": "A cylindrical container of radius 8 cm contains water up to a height of 12 cm. A solid metal sphere of radius 6 cm is immersed in it. Find the height by which the water level will rise.",
      "question_hi": "8 सेमी त्रिज्या वाले एक बेलनाकार पात्र में 12 सेमी ऊँचाई तक पानी है। इसमें 6 सेमी त्रिज्या का एक ठोस धातु का गोला डुबोया जाता है। जल स्तर कितनी ऊँचाई तक बढ़ेगा?",
      "options_en": ["4.5 cm", "5 cm", "5.5 cm", "6 cm"],
      "options_hi": ["4.5 सेमी", "5 सेमी", "5.5 सेमी", "6 सेमी"],
      "answer_en": "4.5 cm",
      "answer_hi": "4.5 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 68,
      "question_en": "A solid is in the form of a cone mounted on a hemisphere with both having radii equal to 4 cm and height of cone equal to 7 cm. Find the volume of the solid.",
      "question_hi": "एक ठोस एक अर्धगोले पर रखे शंकु के आकार का है जिसमें दोनों की त्रिज्याएँ 4 सेमी बराबर हैं और शंकु की ऊँचाई 7 सेमी है। ठोस का आयतन ज्ञात कीजिए।",
      "options_en": ["320π/3 cm³", "352π/3 cm³", "384π/3 cm³", "416π/3 cm³"],
      "options_hi": ["320π/3 सेमी³", "352π/3 सेमी³", "384π/3 सेमी³", "416π/3 सेमी³"],
      "answer_en": "352π/3 cm³",
      "answer_hi": "352π/3 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 69,
      "question_en": "A solid cylinder of radius 4 cm and height 10 cm is melted and recast into a solid sphere. Find the radius of the sphere.",
      "question_hi": "4 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले एक ठोस बेलन को पिघलाकर एक ठोस गोले में ढाला जाता है। गोले की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["(160/3)^(1/3) cm", "4 cm", "5 cm", "6 cm"],
      "options_hi": ["(160/3)^(1/3) सेमी", "4 सेमी", "5 सेमी", "6 सेमी"],
      "answer_en": "(160/3)^(1/3) cm",
      "answer_hi": "(160/3)^(1/3) सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 70,
      "question_en": "A hemispherical depression is cut out from one face of a cubical wooden block such that the diameter of the hemisphere is equal to the edge of the cube. Find the surface area of the remaining solid.",
      "question_hi": "एक घनाकार लकड़ी के ब्लॉक के एक फलक से एक अर्धगोलाकार गड्ढा इस प्रकार काटा गया है कि अर्धगोले का व्यास घन के किनारे के बराबर है। शेष ठोस का पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["(5 + π/4)a²", "(4 + π/2)a²", "(5 + π/2)a²", "(6 + π/4)a²"],
      "options_hi": ["(5 + π/4)a²", "(4 + π/2)a²", "(5 + π/2)a²", "(6 + π/4)a²"],
      "answer_en": "(5 + π/4)a²",
      "answer_hi": "(5 + π/4)a²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 71,
      "question_en": "A conical vessel of radius 12 cm and height 16 cm is completely filled with water. A sphere is lowered into the water and its size is such that when it touches the sides, it is just immersed. Find the radius of the sphere.",
      "question_hi": "12 सेमी त्रिज्या और 16 सेमी ऊँचाई वाले एक शंक्वाकार बर्तन में पानी पूरी तरह भरा हुआ है। पानी में एक गोला उतारा जाता है और इसका आकार ऐसा है कि जब यह किनारों को स्पर्श करता है, तो यह पूरी तरह डूब जाता है। गोले की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["6 cm", "7 cm", "8 cm", "9 cm"],
      "options_hi": ["6 सेमी", "7 सेमी", "8 सेमी", "9 सेमी"],
      "answer_en": "6 cm",
      "answer_hi": "6 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 72,
      "question_en": "A solid cube of side 7 cm is melted to make a cone of height 5 cm, find the curved surface area of the cone.",
      "question_hi": "7 सेमी भुजा वाले एक ठोस घन को पिघलाकर 5 सेमी ऊँचाई का एक शंकु बनाया जाता है, शंकु का वक्र पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["154√2 cm²", "154√3 cm²", "154√5 cm²", "154√6 cm²"],
      "options_hi": ["154√2 सेमी²", "154√3 सेमी²", "154√5 सेमी²", "154√6 सेमी²"],
      "answer_en": "154√2 cm²",
      "answer_hi": "154√2 सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 73,
      "question_en": "The radii of two circular ends of a frustum of a cone are 20 cm and 12 cm. If its slant height is 10 cm, find its volume.",
      "question_hi": "एक शंकु के छिन्नक के दो वृत्तीय सिरों की त्रिज्याएँ 20 सेमी और 12 सेमी हैं। यदि इसकी तिर्यक ऊँचाई 10 सेमी है, तो इसका आयतन ज्ञात कीजिए।",
      "options_en": ["6240π cm³", "6340π cm³", "6440π cm³", "6540π cm³"],
      "options_hi": ["6240π सेमी³", "6340π सेमी³", "6440π सेमी³", "6540π सेमी³"],
      "answer_en": "6240π cm³",
      "answer_hi": "6240π सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 74,
      "question_en": "A solid sphere of radius 3 cm is melted and drawn into a long wire of uniform circular cross-section. If the length of the wire is 36 m, find the radius of the wire.",
      "question_hi": "3 सेमी त्रिज्या वाले एक ठोस गोले को पिघलाकर एकसमान वृत्तीय अनुप्रस्थ काट वाला एक लंबा तार बनाया जाता है। यदि तार की लंबाई 36 मीटर है, तो तार की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["0.1 cm", "0.2 cm", "0.3 cm", "0.4 cm"],
      "options_hi": ["0.1 सेमी", "0.2 सेमी", "0.3 सेमी", "0.4 सेमी"],
      "answer_en": "0.1 cm",
      "answer_hi": "0.1 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 75,
      "question_en": "A cylinder, a cone and a hemisphere have the same base and same height. Find the ratio of their volumes.",
      "question_hi": "एक बेलन, एक शंकु और एक अर्धगोला का आधार समान है और ऊँचाई समान है। उनके आयतनों का अनुपात ज्ञात कीजिए।",
      "options_en": ["3:1:2", "2:1:3", "3:2:1", "1:2:3"],
      "options_hi": ["3:1:2", "2:1:3", "3:2:1", "1:2:3"],
      "answer_en": "3:1:2",
      "answer_hi": "3:1:2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 76,
      "question_en": "A metallic sphere of radius 10.5 cm is melted and recast into smaller cones, each of radius 3.5 cm and height 3 cm. Find the number of cones formed.",
      "question_hi": "10.5 सेमी त्रिज्या वाले एक धातु के गोले को पिघलाकर 3.5 सेमी त्रिज्या और 3 सेमी ऊँचाई के छोटे शंकुओं में ढाला जाता है। बने शंकुओं की संख्या ज्ञात कीजिए।",
      "options_en": ["126", "132", "138", "144"],
      "options_hi": ["126", "132", "138", "144"],
      "answer_en": "126",
      "answer_hi": "126",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 77,
      "question_en": "A solid is in the shape of a cylinder with hemispherical ends. The total height of the solid is 19 cm and the diameter of the cylinder is 7 cm. Find the surface area of the solid.",
      "question_hi": "एक ठोस एक बेलन और अर्धगोलाकार सिरों से बना है। ठोस की कुल ऊँचाई 19 सेमी है और बेलन का व्यास 7 सेमी है। ठोस का पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["418 cm²", "429 cm²", "440 cm²", "451 cm²"],
      "options_hi": ["418 सेमी²", "429 सेमी²", "440 सेमी²", "451 सेमी²"],
      "answer_en": "418 cm²",
      "answer_hi": "418 सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 78,
      "question_en": "A right circular cylinder just encloses a sphere of radius r. Find the ratio of the surface area of the sphere to the curved surface area of the cylinder.",
      "question_hi": "एक लंब वृत्तीय बेलन एक त्रिज्या r के गोले को ठीक ढकता है। गोले के पृष्ठीय क्षेत्रफल और बेलन के वक्र पृष्ठीय क्षेत्रफल का अनुपात ज्ञात कीजिए।",
      "options_en": ["2:3", "3:2", "1:1", "4:3"],
      "options_hi": ["2:3", "3:2", "1:1", "4:3"],
      "answer_en": "1:1",
      "answer_hi": "1:1",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 79,
      "question_en": "A hemispherical bowl of internal radius 9 cm is full of liquid. This liquid is to be filled into conical shaped small vessels each of radius 3 cm and height 4 cm. How many vessels are required?",
      "question_hi": "9 सेमी आंतरिक त्रिज्या वाला एक अर्धगोलाकार कटोरा तरल से भरा हुआ है। इस तरल को 3 सेमी त्रिज्या और 4 सेमी ऊँचाई वाले शंक्वाकार छोटे बर्तनों में भरना है। कितने बर्तनों की आवश्यकता है?",
      "options_en": ["27", "54", "81", "108"],
      "options_hi": ["27", "54", "81", "108"],
      "answer_en": "54",
      "answer_hi": "54",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 80,
      "question_en": "A solid cylinder of diameter 12 cm and height 15 cm is melted and recast into toys each in the shape of a cone of radius 3 cm and height 9 cm. Find the number of toys formed.",
      "question_hi": "12 सेमी व्यास और 15 सेमी ऊँचाई वाले एक ठोस बेलन को पिघलाकर 3 सेमी त्रिज्या और 9 सेमी ऊँचाई वाले शंकु के आकार के खिलौने बनाए जाते हैं। बने खिलौनों की संख्या ज्ञात कीजिए।",
      "options_en": ["10", "15", "20", "25"],
      "options_hi": ["10", "15", "20", "25"],
      "answer_en": "20",
      "answer_hi": "20",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 81,
      "question_en": "A solid is in the shape of a cone mounted on a hemisphere with both having radii equal to 3 cm and height of cone equal to 4 cm. Find the total surface area of the solid.",
      "question_hi": "एक ठोस एक अर्धगोले पर रखे शंकु के आकार का है जिसमें दोनों की त्रिज्याएँ 3 सेमी बराबर हैं और शंकु की ऊँचाई 4 सेमी है। ठोस का संपूर्ण पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["33π cm²", "36π cm²", "39π cm²", "42π cm²"],
      "options_hi": ["33π सेमी²", "36π सेमी²", "39π सेमी²", "42π सेमी²"],
      "answer_en": "33π cm²",
      "answer_hi": "33π सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 82,
      "question_en": "A cylindrical vessel of radius 4 cm contains water. A solid sphere of radius 3 cm is immersed in it. Find the height by which the water level will rise.",
      "question_hi": "4 सेमी त्रिज्या वाले एक बेलनाकार पात्र में पानी है। 3 सेमी त्रिज्या की एक ठोस गेंद इसमें डुबोई जाती है। जल स्तर कितनी ऊँचाई तक बढ़ेगा?",
      "options_en": ["2.25 cm", "2.5 cm", "2.75 cm", "3.0 cm"],
      "options_hi": ["2.25 सेमी", "2.5 सेमी", "2.75 सेमी", "3.0 सेमी"],
      "answer_en": "2.25 cm",
      "answer_hi": "2.25 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 83,
      "question_en": "A solid hemisphere of radius 7 cm is melted and recast into a right circular cone of height 7 cm. Find the radius of the base of the cone.",
      "question_hi": "7 सेमी त्रिज्या वाले एक ठोस अर्धगोले को पिघलाकर 7 सेमी ऊँचाई के एक लंब वृत्तीय शंकु में ढाला जाता है। शंकु के आधार की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["7√2 cm", "7√3 cm", "7 cm", "14 cm"],
      "options_hi": ["7√2 सेमी", "7√3 सेमी", "7 सेमी", "14 सेमी"],
      "answer_en": "7√2 cm",
      "answer_hi": "7√2 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 84,
      "question_en": "A cone of height 24 cm and radius of base 6 cm is made of modelling clay. A child reshapes it in the form of a sphere. Find the surface area of the sphere.",
      "question_hi": "24 सेमी ऊँचाई और 6 सेमी आधार त्रिज्या वाला एक शंकु मॉडलिंग क्ले से बना है। एक बच्चा इसे एक गोले के रूप में ढालता है। गोले का पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["144π cm²", "196π cm²", "256π cm²", "324π cm²"],
      "options_hi": ["144π सेमी²", "196π सेमी²", "256π सेमी²", "324π सेमी²"],
      "answer_en": "144π cm²",
      "answer_hi": "144π सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 85,
      "question_en": "A solid consisting of a right circular cone standing on a hemisphere is placed upright in a right circular cylinder full of water such that it touches the bottom. Find the volume of water left in the cylinder, given the radius of the cylinder is 6 cm and height 12 cm, and the radius of the hemisphere is 3 cm and height of cone is 4 cm.",
      "question_hi": "एक अर्धगोले पर खड़े एक लंब वृत्तीय शंकु वाले एक ठोस को पानी से भरे एक लंब वृत्तीय बेलन में सीधा रखा गया है ताकि वह तल को स्पर्श करे। बेलन में शेष पानी का आयतन ज्ञात कीजिए, दिया गया है कि बेलन की त्रिज्या 6 सेमी और ऊँचाई 12 सेमी है, और अर्धगोले की त्रिज्या 3 सेमी और शंकु की ऊँचाई 4 सेमी है।",
      "options_en": ["1045.71 cm³", "1062.86 cm³", "1078.29 cm³", "1094.86 cm³"],
      "options_hi": ["1045.71 सेमी³", "1062.86 सेमी³", "1078.29 सेमी³", "1094.86 सेमी³"],
      "answer_en": "1062.86 cm³",
      "answer_hi": "1062.86 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 86,
      "question_en": "A hollow sphere of internal and external radii 3 cm and 5 cm respectively is melted and recast into a solid cylinder of height 8 cm. Find the radius of the cylinder.",
      "question_hi": "क्रमशः 3 सेमी और 5 सेमी आंतरिक और बाह्य त्रिज्या वाले एक खोखले गोले को पिघलाकर 8 सेमी ऊँचाई के एक ठोस बेलन में ढाला जाता है। बेलन की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["3.5 cm", "4 cm", "4.5 cm", "5 cm"],
      "options_hi": ["3.5 सेमी", "4 सेमी", "4.5 सेमी", "5 सेमी"],
      "answer_en": "4 cm",
      "answer_hi": "4 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 87,
      "question_en": "A solid is in the form of a right circular cylinder with hemispherical ends. The total length of the solid is 28 cm and the diameter of the cylinder is 7 cm. Find the cost of polishing its total surface at the rate of ₹0.50 per cm².",
      "question_hi": "एक ठोस एक लंब वृत्तीय बेलन और अर्धगोलाकार सिरों के रूप में है। ठोस की कुल लंबाई 28 सेमी है और बेलन का व्यास 7 सेमी है। इसके संपूर्ण पृष्ठ को 0.50 रुपये प्रति सेमी² की दर से पॉलिश करने की लागत ज्ञात कीजिए।",
      "options_en": ["₹231", "₹242", "₹253", "₹264"],
      "options_hi": ["₹231", "₹242", "₹253", "₹264"],
      "answer_en": "₹231",
      "answer_hi": "₹231",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 88,
      "question_en": "A cone of maximum size is carved out from a cube of edge 7 cm. Find the volume of the remaining solid after the cone is carved out.",
      "question_hi": "7 सेमी किनारे वाले एक घन से अधिकतम आकार का एक शंकु काटा जाता है। शंकु काटे जाने के बाद शेष ठोस का आयतन ज्ञात कीजिए।",
      "options_en": ["245.67 cm³", "250.33 cm³", "255.67 cm³", "260.33 cm³"],
      "options_hi": ["245.67 सेमी³", "250.33 सेमी³", "255.67 सेमी³", "260.33 सेमी³"],
      "answer_en": "245.67 cm³",
      "answer_hi": "245.67 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 89,
      "question_en": "A cylindrical container of radius 6 cm and height 15 cm is filled with ice cream. The ice cream is to be filled into cones of height 12 cm and diameter 6 cm, having a hemispherical shape on the top. Find the number of such cones which can be filled with ice cream.",
      "question_hi": "6 सेमी त्रिज्या और 15 सेमी ऊँचाई वाले एक बेलनाकार कंटेनर में आइसक्रीम भरी हुई है। आइसक्रीम को 12 सेमी ऊँचाई और 6 सेमी व्यास वाले शंकुओं में भरना है, जिनके ऊपर एक अर्धगोलाकार आकार है। ऐसे कितने शंकु आइसक्रीम से भरे जा सकते हैं?",
      "options_en": ["10", "12", "15", "20"],
      "options_hi": ["10", "12", "15", "20"],
      "answer_en": "10",
      "answer_hi": "10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 90,
      "question_en": "A solid is in the shape of a cone mounted on a hemisphere with both having radii equal to 3.5 cm and height of cone equal to 4 cm. Find the volume of the solid.",
      "question_hi": "एक ठोस एक अर्धगोले पर रखे शंकु के आकार का है जिसमें दोनों की त्रिज्याएँ 3.5 सेमी बराबर हैं और शंकु की ऊँचाई 4 सेमी है। ठोस का आयतन ज्ञात कीजिए।",
      "options_en": ["142.33 cm³", "150.67 cm³", "158.33 cm³", "166.67 cm³"],
      "options_hi": ["142.33 सेमी³", "150.67 सेमी³", "158.33 सेमी³", "166.67 सेमी³"],
      "answer_en": "150.67 cm³",
      "answer_hi": "150.67 सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 91,
      "question_en": "A hemispherical bowl of internal radius 15 cm contains a liquid. This liquid is to be filled into cylindrical shaped bottles each of radius 1.5 cm and height 4 cm. How many bottles are required?",
      "question_hi": "15 सेमी आंतरिक त्रिज्या वाले एक अर्धगोलाकार कटोरे में एक तरल है। इस तरल को 1.5 सेमी त्रिज्या और 4 सेमी ऊँचाई वाली बेलनाकार बोतलों में भरना है। कितनी बोतलों की आवश्यकता है?",
      "options_en": ["250", "300", "350", "400"],
      "options_hi": ["250", "300", "350", "400"],
      "answer_en": "250",
      "answer_hi": "250",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 92,
      "question_en": "A solid cylinder of radius 3 cm and height 5 cm is melted and recast into a solid sphere. Find the radius of the sphere.",
      "question_hi": "3 सेमी त्रिज्या और 5 सेमी ऊँचाई वाले एक ठोस बेलन को पिघलाकर एक ठोस गोले में ढाला जाता है। गोले की त्रिज्या ज्ञात कीजिए।",
      "options_en": ["(45/4)^(1/3) cm", "(45/2)^(1/3) cm", "3 cm", "3.5 cm"],
      "options_hi": ["(45/4)^(1/3) सेमी", "(45/2)^(1/3) सेमी", "3 सेमी", "3.5 सेमी"],
      "answer_en": "(45/4)^(1/3) cm",
      "answer_hi": "(45/4)^(1/3) सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 93,
      "question_en": "A conical vessel of radius 6 cm and height 8 cm is completely filled with water. A metal sphere of radius 3 cm is immersed in it. Find the volume of water that overflows.",
      "question_hi": "6 सेमी त्रिज्या और 8 सेमी ऊँचाई वाले एक शंक्वाकार बर्तन में पानी पूरी तरह भरा हुआ है। इसमें 3 सेमी त्रिज्या का एक धातु का गोला डुबोया जाता है। बहने वाले पानी का आयतन ज्ञात कीजिए।",
      "options_en": ["36π cm³", "48π cm³", "64π cm³", "72π cm³"],
      "options_hi": ["36π सेमी³", "48π सेमी³", "64π सेमी³", "72π सेमी³"],
      "answer_en": "36π cm³",
      "answer_hi": "36π सेमी³",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 94,
      "question_en": "A solid is in the form of a right circular cylinder with hemispherical ends. The total length of the solid is 19 cm and the diameter of the cylinder is 7 cm. Find the cost of painting its total surface at the rate of ₹0.50 per cm².",
      "question_hi": "एक ठोस एक लंब वृत्तीय बेलन और अर्धगोलाकार सिरों के रूप में है। ठोस की कुल लंबाई 19 सेमी है और बेलन का व्यास 7 सेमी है। इसके संपूर्ण पृष्ठ को 0.50 रुपये प्रति सेमी² की दर से पेंट करने की लागत ज्ञात कीजिए।",
      "options_en": ["₹209", "₹214.5", "₹220", "₹225.5"],
      "options_hi": ["₹209", "₹214.5", "₹220", "₹225.5"],
      "answer_en": "₹209",
      "answer_hi": "₹209",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 95,
      "question_en": "A solid sphere of radius 3 cm is melted and drawn into a wire of diameter 0.2 cm. Find the length of the wire.",
      "question_hi": "3 सेमी त्रिज्या वाले एक ठोस गोले को पिघलाकर 0.2 सेमी व्यास का तार बनाया जाता है। तार की लंबाई ज्ञात कीजिए।",
      "options_en": ["36 m", "48 m", "60 m", "72 m"],
      "options_hi": ["36 मी", "48 मी", "60 मी", "72 मी"],
      "answer_en": "36 m",
      "answer_hi": "36 मी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 96,
      "question_en": "A cylindrical bucket 32 cm high and with radius of base 18 cm is filled with sand. This bucket is emptied on the ground to form a conical heap of sand. If the height of the conical heap is 24 cm, find the area of the base of the heap.",
      "question_hi": "32 सेमी ऊँचाई और 18 सेमी आधार त्रिज्या वाली एक बेलनाकार बाल्टी रेत से भरी हुई है। इस बाल्टी को जमीन पर खाली करके रेत का एक शंक्वाकार ढेर बनाया जाता है। यदि शंक्वाकार ढेर की ऊँचाई 24 सेमी है, तो ढेर के आधार का क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["324π cm²", "400π cm²", "484π cm²", "576π cm²"],
      "options_hi": ["324π सेमी²", "400π सेमी²", "484π सेमी²", "576π सेमी²"],
      "answer_en": "324π cm²",
      "answer_hi": "324π सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 97,
      "question_en": "A solid is in the shape of a cone mounted on a hemisphere with both having radii equal to 2 cm and height of cone equal to 4 cm. Find the total surface area of the solid.",
      "question_hi": "एक ठोस एक अर्धगोले पर रखे शंकु के आकार का है जिसमें दोनों की त्रिज्याएँ 2 सेमी बराबर हैं और शंकु की ऊँचाई 4 सेमी है। ठोस का संपूर्ण पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
      "options_en": ["4π(√5 + 3) cm²", "4π(√5 + 4) cm²", "4π(√5 + 5) cm²", "4π(√5 + 6) cm²"],
      "options_hi": ["4π(√5 + 3) सेमी²", "4π(√5 + 4) सेमी²", "4π(√5 + 5) सेमी²", "4π(√5 + 6) सेमी²"],
      "answer_en": "4π(√5 + 3) cm²",
      "answer_hi": "4π(√5 + 3) सेमी²",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 98,
      "question_en": "A cylindrical container of radius 6 cm contains water up to a height of 12 cm. A solid metal cylinder of radius 3 cm and height 8 cm is immersed in it. Find the height by which the water level will rise.",
      "question_hi": "6 सेमी त्रिज्या वाले एक बेलनाकार पात्र में 12 सेमी ऊँचाई तक पानी है। इसमें 3 सेमी त्रिज्या और 8 सेमी ऊँचाई का एक ठोस धातु का बेलन डुबोया जाता है। जल स्तर कितनी ऊँचाई तक बढ़ेगा?",
      "options_en": ["1 cm", "2 cm", "3 cm", "4 cm"],
      "options_hi": ["1 सेमी", "2 सेमी", "3 सेमी", "4 सेमी"],
      "answer_en": "2 cm",
      "answer_hi": "2 सेमी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 99,
      "question_en": "A hemispherical bowl of internal radius 18 cm is full of liquid. This liquid is to be filled into cylindrical shaped small bottles each of diameter 6 cm and height 6 cm. How many bottles are required?",
      "question_hi": "18 सेमी आंतरिक त्रिज्या वाला एक अर्धगोलाकार कटोरा तरल से भरा हुआ है। इस तरल को 6 सेमी व्यास और 6 सेमी ऊँचाई वाली बेलनाकार छोटी बोतलों में भरना है। कितनी बोतलों की आवश्यकता है?",
      "options_en": ["72", "84", "96", "108"],
      "options_hi": ["72", "84", "96", "108"],
      "answer_en": "72",
      "answer_hi": "72",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 100,
      "question_en": "A solid is in the form of a right circular cylinder with hemispherical ends. The total length of the solid is 35 cm and the diameter of the cylinder is 14 cm. Find the volume of the solid.",
      "question_hi": "एक ठोस एक लंब वृत्तीय बेलन और अर्धगोलाकार सिरों के रूप में है। ठोस की कुल लंबाई 35 सेमी है और बेलन का व्यास 14 सेमी है। ठोस का आयतन ज्ञात कीजिए।",
      "options_en": ["7700 cm³", "8085 cm³", "8470 cm³", "8855 cm³"],
      "options_hi": ["7700 सेमी³", "8085 सेमी³", "8470 सेमी³", "8855 सेमी³"],
      "answer_en": "8085 cm³",
      "answer_hi": "8085 सेमी³",
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