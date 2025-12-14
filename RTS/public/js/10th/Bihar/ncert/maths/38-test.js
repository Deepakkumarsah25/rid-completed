const questions= [
    {
      "num": 1,
      "question_en": "A bag contains 5 red, 8 white and 7 black balls. A ball is drawn at random. Find the probability that it is not a black ball.",
      "question_hi": "एक बैग में 5 लाल, 8 सफेद और 7 काली गेंदें हैं। एक गेंद यादृच्छया निकाली जाती है। प्रायिकता ज्ञात कीजिए कि यह काली गेंद नहीं है।",
      "options_en": ["13/20", "7/20", "11/20", "9/20"],
      "options_hi": ["13/20", "7/20", "11/20", "9/20"],
      "answer_en": "13/20",
      "answer_hi": "13/20",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Two coins are tossed simultaneously. Find the probability of getting at least one head.",
      "question_hi": "दो सिक्कों को एक साथ उछाला जाता है। कम से कम एक चित आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/2", "3/4", "1/4", "1"],
      "options_hi": ["1/2", "3/4", "1/4", "1"],
      "answer_en": "3/4",
      "answer_hi": "3/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "A die is thrown once. Find the probability of getting a prime number.",
      "question_hi": "एक पासा एक बार फेंका जाता है। एक अभाज्य संख्या आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/2", "1/3", "2/3", "5/6"],
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "A card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting a face card.",
      "question_hi": "52 पत्तों की एक अच्छी तरह फेंटी गई गड्डी से एक पत्ता निकाला जाता है। एक तस्वीर वाला पत्ता आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["3/13", "1/13", "4/13", "5/13"],
      "options_hi": ["3/13", "1/13", "4/13", "5/13"],
      "answer_en": "3/13",
      "answer_hi": "3/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Two dice are thrown simultaneously. Find the probability of getting a doublet.",
      "question_hi": "दो पासे एक साथ फेंके जाते हैं। दोनों पासों पर एक ही संख्या आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/6", "1/12", "1/36", "5/36"],
      "options_hi": ["1/6", "1/12", "1/36", "5/36"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "A number is chosen at random from 1 to 50. Find the probability that it is divisible by 5 or 7.",
      "question_hi": "1 से 50 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह 5 या 7 से विभाज्य है।",
      "options_en": ["8/25", "12/25", "16/25", "18/25"],
      "options_hi": ["8/25", "12/25", "16/25", "18/25"],
      "answer_en": "16/25",
      "answer_hi": "16/25",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "A bag contains 3 red, 5 blue and 2 green balls. Two balls are drawn at random. Find the probability that both are of the same colour.",
      "question_hi": "एक बैग में 3 लाल, 5 नीली और 2 हरी गेंदें हैं। दो गेंदें यादृच्छया निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि दोनों एक ही रंग की हैं।",
      "options_en": ["14/45", "19/45", "23/45", "28/45"],
      "options_hi": ["14/45", "19/45", "23/45", "28/45"],
      "answer_en": "14/45",
      "answer_hi": "14/45",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "A card is drawn from a deck of 52 cards. Find the probability that it is either a heart or a queen.",
      "question_hi": "52 पत्तों की गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह या तो हुकुम का पत्ता है या रानी है।",
      "options_en": ["4/13", "5/13", "6/13", "7/13"],
      "options_hi": ["4/13", "5/13", "6/13", "7/13"],
      "answer_en": "4/13",
      "answer_hi": "4/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "The probability of winning a game is 0.4. What is the probability of losing it?",
      "question_hi": "एक खेल जीतने की प्रायिकता 0.4 है। इसे हारने की प्रायिकता क्या है?",
      "options_en": ["0.4", "0.5", "0.6", "0.7"],
      "options_hi": ["0.4", "0.5", "0.6", "0.7"],
      "answer_en": "0.6",
      "answer_hi": "0.6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Two dice are thrown. Find the probability that the sum of numbers appearing is 9.",
      "question_hi": "दो पासे फेंके जाते हैं। आने वाली संख्याओं का योग 9 होने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/9", "2/9", "1/12", "1/18"],
      "options_hi": ["1/9", "2/9", "1/12", "1/18"],
      "answer_en": "1/9",
      "answer_hi": "1/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "A bag contains 12 balls out of which x are black. If 6 more black balls are added, the probability of drawing a black ball doubles. Find x.",
      "question_hi": "एक बैग में 12 गेंदें हैं जिनमें से x काली हैं। यदि 6 और काली गेंदें डाल दी जाएं, तो एक काली गेंद निकालने की प्रायिकता दोगुनी हो जाती है। x ज्ञात कीजिए।",
      "options_en": ["3", "4", "5", "6"],
      "options_hi": ["3", "4", "5", "6"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "A box contains 20 cards numbered 1 to 20. A card is drawn at random. Find the probability that the number is divisible by 2 or 3.",
      "question_hi": "एक डिब्बे में 1 से 20 तक अंकित 20 कार्ड हैं। एक कार्ड यादृच्छया निकाला जाता है। प्रायिकता ज्ञात कीजिए कि संख्या 2 या 3 से विभाज्य है।",
      "options_en": ["13/20", "7/10", "3/4", "4/5"],
      "options_hi": ["13/20", "7/10", "3/4", "4/5"],
      "answer_en": "13/20",
      "answer_hi": "13/20",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "Three coins are tossed simultaneously. Find the probability of getting exactly two heads.",
      "question_hi": "तीन सिक्कों को एक साथ उछाला जाता है। ठीक दो चित आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["3/8", "1/4", "1/2", "5/8"],
      "options_hi": ["3/8", "1/4", "1/2", "5/8"],
      "answer_en": "3/8",
      "answer_hi": "3/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Two dice are thrown. Find the probability that the product of numbers on the top is 12.",
      "question_hi": "दो पासे फेंके जाते हैं। शीर्ष पर आई संख्याओं का गुणनफल 12 होने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/9", "2/9", "1/6", "5/36"],
      "options_hi": ["1/9", "2/9", "1/6", "5/36"],
      "answer_en": "1/9",
      "answer_hi": "1/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "A card is drawn from a deck of 52 cards. Find the probability that it is a black king.",
      "question_hi": "52 पत्तों की गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह एक काला बादशाह है।",
      "options_en": ["1/13", "1/26", "1/52", "2/13"],
      "options_hi": ["1/13", "1/26", "1/52", "2/13"],
      "answer_en": "1/26",
      "answer_hi": "1/26",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "A number is selected at random from first 100 natural numbers. Find the probability that it is a perfect square.",
      "question_hi": "प्रथम 100 प्राकृतिक संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह एक पूर्ण वर्ग है।",
      "options_en": ["1/10", "3/50", "7/50", "9/50"],
      "options_hi": ["1/10", "3/50", "7/50", "9/50"],
      "answer_en": "1/10",
      "answer_hi": "1/10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "A bag contains 5 red, 4 blue and 3 green balls. Three balls are drawn at random. Find the probability that all are of different colours.",
      "question_hi": "एक बैग में 5 लाल, 4 नीली और 3 हरी गेंदें हैं। तीन गेंदें यादृच्छया निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि सभी अलग-अलग रंग की हैं।",
      "options_en": ["3/11", "5/11", "6/11", "7/11"],
      "options_hi": ["3/11", "5/11", "6/11", "7/11"],
      "answer_en": "3/11",
      "answer_hi": "3/11",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "A coin is tossed twice. Find the probability of getting at most one tail.",
      "question_hi": "एक सिक्के को दो बार उछाला जाता है। अधिक से अधिक एक पट आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/4", "1/2", "3/4", "1"],
      "options_hi": ["1/4", "1/2", "3/4", "1"],
      "answer_en": "3/4",
      "answer_hi": "3/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Two dice are thrown. Find the probability that the sum is divisible by 4.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि योग 4 से विभाज्य है।",
      "options_en": ["1/4", "1/3", "5/18", "7/36"],
      "options_hi": ["1/4", "1/3", "5/18", "7/36"],
      "answer_en": "1/4",
      "answer_hi": "1/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "From a pack of 52 cards, two cards are drawn at random. Find the probability that both are aces.",
      "question_hi": "52 पत्तों की गड्डी से दो पत्ते यादृच्छया निकाले जाते हैं। प्रायिकता ज्ञात कीजिए कि दोनों इक्के हैं।",
      "options_en": ["1/221", "2/221", "3/221", "4/221"],
      "options_hi": ["1/221", "2/221", "3/221", "4/221"],
      "answer_en": "1/221",
      "answer_hi": "1/221",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "The probability that it will rain tomorrow is 0.75. What is the probability that it will not rain tomorrow?",
      "question_hi": "कल वर्षा होने की प्रायिकता 0.75 है। कल वर्षा नहीं होने की प्रायिकता क्या है?",
      "options_en": ["0.25", "0.5", "0.75", "1"],
      "options_hi": ["0.25", "0.5", "0.75", "1"],
      "answer_en": "0.25",
      "answer_hi": "0.25",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "A die is thrown twice. Find the probability that 5 will not come up either time.",
      "question_hi": "एक पासे को दो बार फेंका जाता है। प्रायिकता ज्ञात कीजिए कि 5 कभी भी नहीं आएगा।",
      "options_en": ["25/36", "11/36", "5/36", "1/36"],
      "options_hi": ["25/36", "11/36", "5/36", "1/36"],
      "answer_en": "25/36",
      "answer_hi": "25/36",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "A card is drawn from a deck of 52 cards. Find the probability that it is a spade or an ace.",
      "question_hi": "52 पत्तों की गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह हुकुम का पत्ता है या इक्का है।",
      "options_en": ["4/13", "5/13", "6/13", "7/13"],
      "options_hi": ["4/13", "5/13", "6/13", "7/13"],
      "answer_en": "4/13",
      "answer_hi": "4/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "A box contains 90 discs numbered 1 to 90. One disc is drawn at random. Find the probability that it bears a two-digit number.",
      "question_hi": "एक डिब्बे में 1 से 90 तक अंकित 90 डिस्क हैं। एक डिस्क यादृच्छया निकाली जाती है। प्रायिकता ज्ञात कीजिए कि इसमें दो अंकों की संख्या है।",
      "options_en": ["9/10", "8/9", "7/9", "5/9"],
      "options_hi": ["9/10", "8/9", "7/9", "5/9"],
      "answer_en": "9/10",
      "answer_hi": "9/10",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "Two dice are thrown. Find the probability that the difference of numbers on the dice is 2.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि पासों पर आई संख्याओं का अंतर 2 है।",
      "options_en": ["2/9", "1/6", "5/18", "7/36"],
      "options_hi": ["2/9", "1/6", "5/18", "7/36"],
      "answer_en": "2/9",
      "answer_hi": "2/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "A bag contains 4 red, 5 blue and 6 green balls. Two balls are drawn. Find probability that at least one is red.",
      "question_hi": "एक बैग में 4 लाल, 5 नीली और 6 हरी गेंदें हैं। दो गेंदें निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि कम से कम एक लाल है।",
      "options_en": ["34/105", "71/105", "94/105", "101/105"],
      "options_hi": ["34/105", "71/105", "94/105", "101/105"],
      "answer_en": "34/105",
      "answer_hi": "34/105",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "A die is rolled. Find the probability of getting a number greater than 4.",
      "question_hi": "एक पासा लुढ़काया जाता है। 4 से अधिक संख्या आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/3", "1/2", "2/3", "5/6"],
      "options_hi": ["1/3", "1/2", "2/3", "5/6"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "Three coins are tossed. Find probability of getting at least two tails.",
      "question_hi": "तीन सिक्के उछाले जाते हैं। कम से कम दो पट आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/2", "3/8", "5/8", "7/8"],
      "options_hi": ["1/2", "3/8", "5/8", "7/8"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "A card is drawn from a deck. Find probability it is a heart given that it is a face card.",
      "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह हुकुम का पत्ता है यदि यह एक तस्वीर वाला पत्ता है।",
      "options_en": ["1/4", "1/3", "1/2", "2/3"],
      "options_hi": ["1/4", "1/3", "1/2", "2/3"],
      "answer_en": "1/4",
      "answer_hi": "1/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "Two dice are thrown. Find probability that sum is at least 10.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि योग कम से कम 10 है।",
      "options_en": ["1/6", "1/12", "1/18", "5/36"],
      "options_hi": ["1/6", "1/12", "1/18", "5/36"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_en": "A bag contains 3 red, 2 blue, 1 green ball. Two balls drawn without replacement. Find probability both are red.",
      "question_hi": "एक बैग में 3 लाल, 2 नीली, 1 हरी गेंद है। दो गेंदें बिना प्रतिस्थापन के निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि दोनों लाल हैं।",
      "options_en": ["1/5", "1/10", "3/10", "2/5"],
      "options_hi": ["1/5", "1/10", "3/10", "2/5"],
      "answer_en": "1/5",
      "answer_hi": "1/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_en": "Probability of A solving a problem is 1/3, B solving is 1/4. Find probability problem is solved.",
      "question_hi": "A द्वारा एक समस्या हल करने की प्रायिकता 1/3 है, B द्वारा 1/4 है। प्रायिकता ज्ञात कीजिए कि समस्या हल हो जाती है।",
      "options_en": ["1/2", "7/12", "5/12", "11/12"],
      "options_hi": ["1/2", "7/12", "5/12", "11/12"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_en": "A number is chosen from 1 to 30. Find probability it is divisible by 2 or 3.",
      "question_hi": "1 से 30 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह 2 या 3 से विभाज्य है।",
      "options_en": ["2/3", "1/2", "5/6", "7/10"],
      "options_hi": ["2/3", "1/2", "5/6", "7/10"],
      "answer_en": "2/3",
      "answer_hi": "2/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_en": "Two cards drawn from deck. Find probability both are of same suit.",
      "question_hi": "गड्डी से दो पत्ते निकाले जाते हैं। प्रायिकता ज्ञात कीजिए कि दोनों एक ही प्रकार के हैं।",
      "options_en": ["4/17", "5/17", "6/17", "7/17"],
      "options_hi": ["4/17", "5/17", "6/17", "7/17"],
      "answer_en": "4/17",
      "answer_hi": "4/17",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_en": "A die is thrown twice. Find probability of getting a total of 9 or 11.",
      "question_hi": "एक पासे को दो बार फेंका जाता है। कुल 9 या 11 आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/6", "1/9", "1/12", "1/18"],
      "options_hi": ["1/6", "1/9", "1/12", "1/18"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_en": "Bag has 6 white, 4 red balls. Two balls drawn. Find probability they are of different colours.",
      "question_hi": "बैग में 6 सफेद, 4 लाल गेंदें हैं। दो गेंदें निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि वे अलग-अलग रंग की हैं।",
      "options_en": ["8/15", "7/15", "6/15", "5/15"],
      "options_hi": ["8/15", "7/15", "6/15", "5/15"],
      "answer_en": "8/15",
      "answer_hi": "8/15",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_en": "Probability of hitting target by A is 1/3, by B is 1/4. Both try independently. Find probability target is hit.",
      "question_hi": "A द्वारा निशाना साधने की प्रायिकता 1/3 है, B द्वारा 1/4 है। दोनों स्वतंत्र रूप से प्रयास करते हैं। प्रायिकता ज्ञात कीजिए कि निशाना लग जाता है।",
      "options_en": ["1/2", "7/12", "5/12", "11/12"],
      "options_hi": ["1/2", "7/12", "5/12", "11/12"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_en": "A card is drawn from deck. Find probability it is a king or a diamond.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह बादशाह है या हीरा है।",
      "options_en": ["4/13", "5/13", "6/13", "7/13"],
      "options_hi": ["4/13", "5/13", "6/13", "7/13"],
      "answer_en": "4/13",
      "answer_hi": "4/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_en": "Two dice thrown. Find probability that numbers are equal.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि संख्याएँ बराबर हैं।",
      "options_en": ["1/6", "1/12", "1/36", "5/36"],
      "options_hi": ["1/6", "1/12", "1/36", "5/36"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_en": "A number from 1 to 20 chosen. Find probability it is a prime number.",
      "question_hi": "1 से 20 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह एक अभाज्य संख्या है।",
      "options_en": ["2/5", "3/5", "7/20", "9/20"],
      "options_hi": ["2/5", "3/5", "7/20", "9/20"],
      "answer_en": "2/5",
      "answer_hi": "2/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_en": "Bag contains 5 red, 7 blue balls. Two balls drawn. Find probability both are blue.",
      "question_hi": "बैग में 5 लाल, 7 नीली गेंदें हैं। दो गेंदें निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि दोनों नीली हैं।",
      "options_en": ["7/22", "5/22", "3/11", "4/11"],
      "options_hi": ["7/22", "5/22", "3/11", "4/11"],
      "answer_en": "7/22",
      "answer_hi": "7/22",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_en": "Three coins tossed. Find probability of getting exactly one head.",
      "question_hi": "तीन सिक्के उछाले जाते हैं। ठीक एक चित आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/8", "3/8", "5/8", "7/8"],
      "options_hi": ["1/8", "3/8", "5/8", "7/8"],
      "answer_en": "3/8",
      "answer_hi": "3/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_en": "Two dice thrown. Find probability that sum is even.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि योग सम है।",
      "options_en": ["1/2", "1/3", "2/3", "5/6"],
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_en": "A card drawn from deck. Find probability it is a red card.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह लाल पत्ता है।",
      "options_en": ["1/2", "1/4", "3/4", "2/3"],
      "options_hi": ["1/2", "1/4", "3/4", "2/3"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_en": "A die thrown. Find probability of getting a number less than 3.",
      "question_hi": "एक पासा फेंका जाता है। 3 से कम संख्या आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/3", "1/2", "2/3", "5/6"],
      "options_hi": ["1/3", "1/2", "2/3", "5/6"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_en": "Two cards drawn from deck. Find probability both are aces.",
      "question_hi": "गड्डी से दो पत्ते निकाले जाते हैं। प्रायिकता ज्ञात कीजिए कि दोनों इक्के हैं।",
      "options_en": ["1/221", "2/221", "3/221", "4/221"],
      "options_hi": ["1/221", "2/221", "3/221", "4/221"],
      "answer_en": "1/221",
      "answer_hi": "1/221",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_en": "A bag contains 10 red, 15 blue balls. One ball drawn. Find probability it is not blue.",
      "question_hi": "एक बैग में 10 लाल, 15 नीली गेंदें हैं। एक गेंद निकाली जाती है। प्रायिकता ज्ञात कीजिए कि यह नीली नहीं है।",
      "options_en": ["2/5", "3/5", "1/5", "4/5"],
      "options_hi": ["2/5", "3/5", "1/5", "4/5"],
      "answer_en": "2/5",
      "answer_hi": "2/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_en": "Two dice thrown. Find probability that product is 6.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि गुणनफल 6 है।",
      "options_en": ["1/9", "2/9", "1/18", "5/36"],
      "options_hi": ["1/9", "2/9", "1/18", "5/36"],
      "answer_en": "1/9",
      "answer_hi": "1/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_en": "A number from 1 to 50 chosen. Find probability it is divisible by 6.",
      "question_hi": "1 से 50 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह 6 से विभाज्य है।",
      "options_en": ["4/25", "3/25", "2/25", "1/25"],
      "options_hi": ["4/25", "3/25", "2/25", "1/25"],
      "answer_en": "4/25",
      "answer_hi": "4/25",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_en": "Three coins tossed. Find probability of getting no head.",
      "question_hi": "तीन सिक्के उछाले जाते हैं। कोई चित न आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/8", "3/8", "5/8", "7/8"],
      "options_hi": ["1/8", "3/8", "5/8", "7/8"],
      "answer_en": "1/8",
      "answer_hi": "1/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 51,
      "question_en": "A card is drawn from deck. Find probability it is a face card or a heart.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह तस्वीर वाला पत्ता है या हुकुम का पत्ता है।",
      "options_en": ["11/26", "13/26", "15/26", "17/26"],
      "options_hi": ["11/26", "13/26", "15/26", "17/26"],
      "answer_en": "11/26",
      "answer_hi": "11/26",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 52,
      "question_en": "Two dice thrown. Find probability that sum is greater than 9.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि योग 9 से अधिक है।",
      "options_en": ["1/6", "1/12", "1/18", "5/36"],
      "options_hi": ["1/6", "1/12", "1/18", "5/36"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 53,
      "question_en": "A bag has 8 red, 6 blue balls. Two balls drawn. Find probability they are same colour.",
      "question_hi": "एक बैग में 8 लाल, 6 नीली गेंदें हैं। दो गेंदें निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि वे एक ही रंग की हैं।",
      "options_en": ["43/91", "48/91", "53/91", "58/91"],
      "options_hi": ["43/91", "48/91", "53/91", "58/91"],
      "answer_en": "43/91",
      "answer_hi": "43/91",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 54,
      "question_en": "Probability of A passing exam is 2/3, B passing is 3/4. Find probability both pass.",
      "question_hi": "A द्वारा परीक्षा पास करने की प्रायिकता 2/3 है, B द्वारा 3/4 है। प्रायिकता ज्ञात कीजिए कि दोनों पास होते हैं।",
      "options_en": ["1/2", "5/12", "7/12", "11/12"],
      "options_hi": ["1/2", "5/12", "7/12", "11/12"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 55,
      "question_en": "A number from 1 to 100 chosen. Find probability it is a perfect cube.",
      "question_hi": "1 से 100 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह एक पूर्ण घन है।",
      "options_en": ["1/25", "2/25", "3/25", "4/25"],
      "options_hi": ["1/25", "2/25", "3/25", "4/25"],
      "answer_en": "1/25",
      "answer_hi": "1/25",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 56,
      "question_en": "Two cards drawn from deck without replacement. Find probability first is king, second is queen.",
      "question_hi": "गड्डी से दो पत्ते बिना प्रतिस्थापन के निकाले जाते हैं। प्रायिकता ज्ञात कीजिए कि पहला बादशाह है, दूसरा रानी है।",
      "options_en": ["4/663", "8/663", "12/663", "16/663"],
      "options_hi": ["4/663", "8/663", "12/663", "16/663"],
      "answer_en": "4/663",
      "answer_hi": "4/663",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 57,
      "question_en": "A die thrown twice. Find probability of getting a total of 7.",
      "question_hi": "एक पासे को दो बार फेंका जाता है। कुल 7 आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/6", "1/12", "1/18", "5/36"],
      "options_hi": ["1/6", "1/12", "1/18", "5/36"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 58,
      "question_en": "Bag contains 5 red, 3 blue balls. Two balls drawn with replacement. Find probability both are red.",
      "question_hi": "बैग में 5 लाल, 3 नीली गेंदें हैं। दो गेंदें प्रतिस्थापन सहित निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि दोनों लाल हैं।",
      "options_en": ["25/64", "9/64", "15/64", "21/64"],
      "options_hi": ["25/64", "9/64", "15/64", "21/64"],
      "answer_en": "25/64",
      "answer_hi": "25/64",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 59,
      "question_en": "Two dice thrown. Find probability that numbers are consecutive.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि संख्याएँ क्रमागत हैं।",
      "options_en": ["5/18", "2/9", "1/6", "7/36"],
      "options_hi": ["5/18", "2/9", "1/6", "7/36"],
      "answer_en": "5/18",
      "answer_hi": "5/18",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 60,
      "question_en": "A card drawn from deck. Find probability it is a spade given it is black.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह हुकुम का पत्ता है यदि यह काला है।",
      "options_en": ["1/2", "1/4", "3/4", "2/3"],
      "options_hi": ["1/2", "1/4", "3/4", "2/3"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 61,
      "question_en": "A number from 1 to 25 chosen. Find probability it is even or divisible by 3.",
      "question_hi": "1 से 25 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह सम है या 3 से विभाज्य है।",
      "options_en": ["16/25", "17/25", "18/25", "19/25"],
      "options_hi": ["16/25", "17/25", "18/25", "19/25"],
      "answer_en": "16/25",
      "answer_hi": "16/25",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 62,
      "question_en": "Three coins tossed. Find probability of getting at most one tail.",
      "question_hi": "तीन सिक्के उछाले जाते हैं। अधिक से अधिक एक पट आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/2", "3/8", "5/8", "7/8"],
      "options_hi": ["1/2", "3/8", "5/8", "7/8"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 63,
      "question_en": "Two dice thrown. Find probability that sum is odd.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि योग विषम है।",
      "options_en": ["1/2", "1/3", "2/3", "5/6"],
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 64,
      "question_en": "A card drawn from deck. Find probability it is an ace or a king.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह इक्का है या बादशाह है।",
      "options_en": ["2/13", "3/13", "4/13", "5/13"],
      "options_hi": ["2/13", "3/13", "4/13", "5/13"],
      "answer_en": "2/13",
      "answer_hi": "2/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 65,
      "question_en": "A die thrown. Find probability of getting a factor of 6.",
      "question_hi": "एक पासा फेंका जाता है। 6 का गुणनखंड आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["2/3", "1/2", "1/3", "5/6"],
      "options_hi": ["2/3", "1/2", "1/3", "5/6"],
      "answer_en": "2/3",
      "answer_hi": "2/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 66,
      "question_en": "Two cards drawn from deck. Find probability both are face cards.",
      "question_hi": "गड्डी से दो पत्ते निकाले जाते हैं। प्रायिकता ज्ञात कीजिए कि दोनों तस्वीर वाले पत्ते हैं।",
      "options_en": ["11/221", "22/221", "33/221", "44/221"],
      "options_hi": ["11/221", "22/221", "33/221", "44/221"],
      "answer_en": "11/221",
      "answer_hi": "11/221",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 67,
      "question_en": "A bag contains 12 red, 8 blue balls. One ball drawn. Find probability it is red.",
      "question_hi": "एक बैग में 12 लाल, 8 नीली गेंदें हैं। एक गेंद निकाली जाती है। प्रायिकता ज्ञात कीजिए कि यह लाल है।",
      "options_en": ["3/5", "2/5", "1/5", "4/5"],
      "options_hi": ["3/5", "2/5", "1/5", "4/5"],
      "answer_en": "3/5",
      "answer_hi": "3/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 68,
      "question_en": "Two dice thrown. Find probability that product is 12.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि गुणनफल 12 है।",
      "options_en": ["1/9", "2/9", "1/18", "5/36"],
      "options_hi": ["1/9", "2/9", "1/18", "5/36"],
      "answer_en": "1/9",
      "answer_hi": "1/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 69,
      "question_en": "A number from 1 to 40 chosen. Find probability it is divisible by 5.",
      "question_hi": "1 से 40 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह 5 से विभाज्य है।",
      "options_en": ["1/5", "2/5", "3/5", "4/5"],
      "options_hi": ["1/5", "2/5", "3/5", "4/5"],
      "answer_en": "1/5",
      "answer_hi": "1/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 70,
      "question_en": "Three coins tossed. Find probability of getting at least one head.",
      "question_hi": "तीन सिक्के उछाले जाते हैं। कम से कम एक चित आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/8", "3/8", "5/8", "7/8"],
      "options_hi": ["1/8", "3/8", "5/8", "7/8"],
      "answer_en": "7/8",
      "answer_hi": "7/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 71,
      "question_en": "A card is drawn from deck. Find probability it is a club or a jack.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह चिड़ी का पत्ता है या गुलाम है।",
      "options_en": ["4/13", "5/13", "6/13", "7/13"],
      "options_hi": ["4/13", "5/13", "6/13", "7/13"],
      "answer_en": "4/13",
      "answer_hi": "4/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 72,
      "question_en": "Two dice thrown. Find probability that sum is less than 5.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि योग 5 से कम है।",
      "options_en": ["1/6", "1/12", "1/18", "5/36"],
      "options_hi": ["1/6", "1/12", "1/18", "5/36"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 73,
      "question_en": "A bag has 10 red, 10 blue balls. Two balls drawn. Find probability they are different colours.",
      "question_hi": "एक बैग में 10 लाल, 10 नीली गेंदें हैं। दो गेंदें निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि वे अलग-अलग रंग की हैं।",
      "options_en": ["10/19", "9/19", "8/19", "7/19"],
      "options_hi": ["10/19", "9/19", "8/19", "7/19"],
      "answer_en": "10/19",
      "answer_hi": "10/19",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 74,
      "question_en": "Probability of A winning race is 1/5, B winning is 1/4. Find probability either wins.",
      "question_hi": "A द्वारा दौड़ जीतने की प्रायिकता 1/5 है, B द्वारा 1/4 है। प्रायिकता ज्ञात कीजिए कि कोई एक जीतता है।",
      "options_en": ["9/20", "11/20", "13/20", "15/20"],
      "options_hi": ["9/20", "11/20", "13/20", "15/20"],
      "answer_en": "9/20",
      "answer_hi": "9/20",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 75,
      "question_en": "A number from 1 to 80 chosen. Find probability it is divisible by 4 or 6.",
      "question_hi": "1 से 80 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह 4 या 6 से विभाज्य है।",
      "options_en": ["2/5", "3/5", "4/5", "1/2"],
      "options_hi": ["2/5", "3/5", "4/5", "1/2"],
      "answer_en": "2/5",
      "answer_hi": "2/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 76,
      "question_en": "Two cards drawn from deck with replacement. Find probability both are aces.",
      "question_hi": "गड्डी से दो पत्ते प्रतिस्थापन सहित निकाले जाते हैं। प्रायिकता ज्ञात कीजिए कि दोनों इक्के हैं।",
      "options_en": ["1/169", "2/169", "3/169", "4/169"],
      "options_hi": ["1/169", "2/169", "3/169", "4/169"],
      "answer_en": "1/169",
      "answer_hi": "1/169",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 77,
      "question_en": "A die thrown twice. Find probability of getting a total of 10.",
      "question_hi": "एक पासे को दो बार फेंका जाता है। कुल 10 आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/12", "1/18", "5/36", "7/36"],
      "options_hi": ["1/12", "1/18", "5/36", "7/36"],
      "answer_en": "1/12",
      "answer_hi": "1/12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 78,
      "question_en": "Bag contains 6 red, 4 blue balls. Two balls drawn without replacement. Find probability both are blue.",
      "question_hi": "बैग में 6 लाल, 4 नीली गेंदें हैं। दो गेंदें बिना प्रतिस्थापन के निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि दोनों नीली हैं।",
      "options_en": ["2/15", "4/15", "6/15", "8/15"],
      "options_hi": ["2/15", "4/15", "6/15", "8/15"],
      "answer_en": "2/15",
      "answer_hi": "2/15",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 79,
      "question_en": "Two dice thrown. Find probability that numbers are same.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि संख्याएँ समान हैं।",
      "options_en": ["1/6", "1/12", "1/36", "5/36"],
      "options_hi": ["1/6", "1/12", "1/36", "5/36"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 80,
      "question_en": "A card drawn from deck. Find probability it is a diamond given it is red.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह हीरा है यदि यह लाल है।",
      "options_en": ["1/2", "1/4", "3/4", "2/3"],
      "options_hi": ["1/2", "1/4", "3/4", "2/3"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 81,
      "question_en": "A number from 1 to 30 chosen. Find probability it is a multiple of 3.",
      "question_hi": "1 से 30 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह 3 का गुणज है।",
      "options_en": ["1/3", "2/3", "1/2", "3/4"],
      "options_hi": ["1/3", "2/3", "1/2", "3/4"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 82,
      "question_en": "Three coins tossed. Find probability of getting exactly two tails.",
      "question_hi": "तीन सिक्के उछाले जाते हैं। ठीक दो पट आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/8", "3/8", "5/8", "7/8"],
      "options_hi": ["1/8", "3/8", "5/8", "7/8"],
      "answer_en": "3/8",
      "answer_hi": "3/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 83,
      "question_en": "Two dice thrown. Find probability that sum is even and greater than 8.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि योग सम है और 8 से अधिक है।",
      "options_en": ["5/36", "7/36", "1/6", "1/9"],
      "options_hi": ["5/36", "7/36", "1/6", "1/9"],
      "answer_en": "5/36",
      "answer_hi": "5/36",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 84,
      "question_en": "A card drawn from deck. Find probability it is a heart or a spade.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह हुकुम का पत्ता है या चिड़ी का पत्ता है।",
      "options_en": ["1/2", "1/4", "3/4", "2/3"],
      "options_hi": ["1/2", "1/4", "3/4", "2/3"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 85,
      "question_en": "A die thrown. Find probability of getting an odd number.",
      "question_hi": "एक पासा फेंका जाता है। एक विषम संख्या आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/2", "1/3", "2/3", "5/6"],
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 86,
      "question_en": "Two cards drawn from deck. Find probability both are red.",
      "question_hi": "गड्डी से दो पत्ते निकाले जाते हैं। प्रायिकता ज्ञात कीजिए कि दोनों लाल हैं।",
      "options_en": ["25/102", "26/102", "27/102", "28/102"],
      "options_hi": ["25/102", "26/102", "27/102", "28/102"],
      "answer_en": "25/102",
      "answer_hi": "25/102",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 87,
      "question_en": "A bag contains 15 red, 5 blue balls. One ball drawn. Find probability it is blue.",
      "question_hi": "एक बैग में 15 लाल, 5 नीली गेंदें हैं। एक गेंद निकाली जाती है। प्रायिकता ज्ञात कीजिए कि यह नीली है।",
      "options_en": ["1/4", "3/4", "1/2", "2/3"],
      "options_hi": ["1/4", "3/4", "1/2", "2/3"],
      "answer_en": "1/4",
      "answer_hi": "1/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 88,
      "question_en": "Two dice thrown. Find probability that product is 8.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि गुणनफल 8 है।",
      "options_en": ["1/18", "1/12", "1/9", "5/36"],
      "options_hi": ["1/18", "1/12", "1/9", "5/36"],
      "answer_en": "1/18",
      "answer_hi": "1/18",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 89,
      "question_en": "A number from 1 to 60 chosen. Find probability it is divisible by 8.",
      "question_hi": "1 से 60 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह 8 से विभाज्य है।",
      "options_en": ["1/10", "3/20", "7/60", "2/15"],
      "options_hi": ["1/10", "3/20", "7/60", "2/15"],
      "answer_en": "7/60",
      "answer_hi": "7/60",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 90,
      "question_en": "Three coins tossed. Find probability of getting all tails.",
      "question_hi": "तीन सिक्के उछाले जाते हैं। सभी पट आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["1/8", "3/8", "5/8", "7/8"],
      "options_hi": ["1/8", "3/8", "5/8", "7/8"],
      "answer_en": "1/8",
      "answer_hi": "1/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 91,
      "question_en": "A card is drawn from deck. Find probability it is a queen given it is a face card.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह रानी है यदि यह तस्वीर वाला पत्ता है।",
      "options_en": ["1/3", "1/4", "1/2", "2/3"],
      "options_hi": ["1/3", "1/4", "1/2", "2/3"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 92,
      "question_en": "Two dice thrown. Find probability that sum is a multiple of 3.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि योग 3 का गुणज है।",
      "options_en": ["1/3", "1/2", "2/3", "5/6"],
      "options_hi": ["1/3", "1/2", "2/3", "5/6"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 93,
      "question_en": "A bag has 8 red, 4 blue balls. Two balls drawn. Find probability they are same colour.",
      "question_hi": "एक बैग में 8 लाल, 4 नीली गेंदें हैं। दो गेंदें निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि वे एक ही रंग की हैं।",
      "options_en": ["37/66", "29/66", "19/66", "15/66"],
      "options_hi": ["37/66", "29/66", "19/66", "15/66"],
      "answer_en": "37/66",
      "answer_hi": "37/66",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 94,
      "question_en": "Probability of A hitting target is 1/2, B hitting is 1/3. Both fire. Find probability target is hit.",
      "question_hi": "A द्वारा निशाना साधने की प्रायिकता 1/2 है, B द्वारा 1/3 है। दोनों फायर करते हैं। प्रायिकता ज्ञात कीजिए कि निशाना लग जाता है।",
      "options_en": ["2/3", "1/3", "5/6", "1/6"],
      "options_hi": ["2/3", "1/3", "5/6", "1/6"],
      "answer_en": "2/3",
      "answer_hi": "2/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 95,
      "question_en": "A number from 1 to 90 chosen. Find probability it is divisible by 5 and 9.",
      "question_hi": "1 से 90 में से एक संख्या चुनी जाती है। प्रायिकता ज्ञात कीजिए कि यह 5 और 9 से विभाज्य है।",
      "options_en": ["1/45", "2/45", "1/30", "1/15"],
      "options_hi": ["1/45", "2/45", "1/30", "1/15"],
      "answer_en": "1/45",
      "answer_hi": "1/45",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 96,
      "question_en": "Two cards drawn from deck without replacement. Find probability first is ace, second is king.",
      "question_hi": "गड्डी से दो पत्ते बिना प्रतिस्थापन के निकाले जाते हैं। प्रायिकता ज्ञात कीजिए कि पहला इक्का है, दूसरा बादशाह है।",
      "options_en": ["4/663", "8/663", "12/663", "16/663"],
      "options_hi": ["4/663", "8/663", "12/663", "16/663"],
      "answer_en": "4/663",
      "answer_hi": "4/663",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 97,
      "question_en": "A die thrown twice. Find probability of getting a total of 8.",
      "question_hi": "एक पासे को दो बार फेंका जाता है। कुल 8 आने की प्रायिकता ज्ञात कीजिए।",
      "options_en": ["5/36", "1/6", "7/36", "1/9"],
      "options_hi": ["5/36", "1/6", "7/36", "1/9"],
      "answer_en": "5/36",
      "answer_hi": "5/36",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 98,
      "question_en": "Bag contains 5 red, 7 blue balls. Two balls drawn with replacement. Find probability both are red.",
      "question_hi": "बैग में 5 लाल, 7 नीली गेंदें हैं। दो गेंदें प्रतिस्थापन सहित निकाली जाती हैं। प्रायिकता ज्ञात कीजिए कि दोनों लाल हैं।",
      "options_en": ["25/144", "35/144", "45/144", "55/144"],
      "options_hi": ["25/144", "35/144", "45/144", "55/144"],
      "answer_en": "25/144",
      "answer_hi": "25/144",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 99,
      "question_en": "Two dice thrown. Find probability that numbers differ by 3.",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता ज्ञात कीजिए कि संख्याओं का अंतर 3 है।",
      "options_en": ["1/6", "1/9", "1/12", "1/18"],
      "options_hi": ["1/6", "1/9", "1/12", "1/18"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 100,
      "question_en": "A card drawn from deck. Find probability it is a spade given it is not a heart.",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि यह हुकुम का पत्ता है यदि यह हीरा नहीं है।",
      "options_en": ["1/3", "1/2", "2/3", "3/4"],
      "options_hi": ["1/3", "1/2", "2/3", "3/4"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
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