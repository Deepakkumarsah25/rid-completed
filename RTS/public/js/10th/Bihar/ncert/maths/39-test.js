const questions = [
    {
      "num": 1,
      "question_en": "A box contains 12 red balls, 8 blue balls and 10 green balls. One ball is drawn at random. What is the probability that it is neither red nor blue?",
      "question_hi": "एक डिब्बे में 12 लाल गेंदें, 8 नीली गेंदें और 10 हरी गेंदें हैं। एक गेंद यादृच्छया निकाली जाती है। प्रायिकता क्या है कि यह न तो लाल है और न ही नीली?",
      "options_en": ["1/3", "1/2", "1/4", "2/5"],
      "options_hi": ["1/3", "1/2", "1/4", "2/5"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Three fair coins are tossed simultaneously. What is the probability of getting exactly two tails?",
      "question_hi": "तीन निष्पक्ष सिक्कों को एक साथ उछाला जाता है। ठीक दो पट आने की प्रायिकता क्या है?",
      "options_en": ["3/8", "1/2", "5/8", "1/4"],
      "options_hi": ["3/8", "1/2", "5/8", "1/4"],
      "answer_en": "3/8",
      "answer_hi": "3/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "A die is rolled twice. What is the probability that the sum of numbers is 7?",
      "question_hi": "एक पासे को दो बार लुढ़काया जाता है। संख्याओं का योग 7 होने की प्रायिकता क्या है?",
      "options_en": ["1/6", "1/12", "5/36", "1/9"],
      "options_hi": ["1/6", "1/12", "5/36", "1/9"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "From a deck of 52 cards, two cards are drawn at random without replacement. What is the probability that both are kings?",
      "question_hi": "52 पत्तों की एक गड्डी से, दो पत्ते बिना प्रतिस्थापन के यादृच्छया निकाले जाते हैं। प्रायिकता क्या है कि दोनों बादशाह हैं?",
      "options_en": ["1/221", "4/663", "1/169", "2/221"],
      "options_hi": ["1/221", "4/663", "1/169", "2/221"],
      "answer_en": "1/221",
      "answer_hi": "1/221",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "A number is chosen at random from 1 to 100. What is the probability that it is divisible by 3 or 5?",
      "question_hi": "1 से 100 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता क्या है कि यह 3 या 5 से विभाज्य है?",
      "options_en": ["8/25",  "47/100",  "3/5",  "11/20"],
      "options_hi": ["8/25",  "47/100",  "3/5",  "11/20"],
      "answer_en": "47/100",
      "answer_hi": "47/100",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "In a class, 40% students like cricket, 50% like football and 10% like both. If a student is chosen at random, what is the probability that he likes neither cricket nor football?",
      "question_hi": "एक कक्षा में, 40% छात्र क्रिकेट पसंद करते हैं, 50% फुटबॉल पसंद करते हैं और 10% दोनों पसंद करते हैं। यदि एक छात्र यादृच्छया चुना जाता है, तो प्रायिकता क्या है कि उसे न तो क्रिकेट पसंद है और न ही फुटबॉल?",
      "options_en": ["0.1", "0.2", "0.3", "0.4"],
      "options_hi": ["0.1", "0.2", "0.3", "0.4"],
      "answer_en": "0.2",
      "answer_hi": "0.2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "A bag contains 5 white and 7 black balls. Two balls are drawn at random. What is the probability that they are of different colours?",
      "question_hi": "एक थैले में 5 सफेद और 7 काली गेंदें हैं। दो गेंदें यादृच्छया निकाली जाती हैं। प्रायिकता क्या है कि वे अलग-अलग रंग की हैं?",
      "options_en": ["35/66", "5/12", "7/12", "31/66"],
      "options_hi": ["35/66", "5/12", "7/12", "31/66"],
      "answer_en": "35/66",
      "answer_hi": "35/66",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "A card is drawn from a well-shuffled deck of 52 cards. What is the probability that it is a face card (Jack, Queen, King)?",
      "question_hi": "52 पत्तों की अच्छी तरह फेंटी गई गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह एक तस्वीर वाला पत्ता (गुलाम, रानी, बादशाह) है?",
      "options_en": ["3/13", "4/13", "1/13", "2/13"],
      "options_hi": ["3/13", "4/13", "1/13", "2/13"],
      "answer_en": "3/13",
      "answer_hi": "3/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Two dice are thrown simultaneously. What is the probability of getting a doublet (same number on both dice)?",
      "question_hi": "दो पासे एक साथ फेंके जाते हैं। दोहरा (दोनों पासों पर एक ही संख्या) आने की प्रायिकता क्या है?",
      "options_en": ["1/6", "1/12", "1/36", "5/36"],
      "options_hi": ["1/6", "1/12", "1/36", "5/36"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "The probability of A solving a problem is 2/3 and that of B solving it is 3/4. What is the probability that the problem is solved if both try independently?",
      "question_hi": "A द्वारा एक समस्या हल करने की प्रायिकता 2/3 है और B द्वारा हल करने की 3/4 है। यदि दोनों स्वतंत्र रूप से प्रयास करते हैं तो समस्या के हल होने की प्रायिकता क्या है?",
      "options_en": ["11/12", "5/6", "1/12", "1/6"],
      "options_hi": ["11/12", "5/6", "1/12", "1/6"],
      "answer_en": "11/12",
      "answer_hi": "11/12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "A letter is chosen at random from the word 'PROBABILITY'. What is the probability that it is a vowel?",
      "question_hi": "'PROBABILITY' शब्द से एक अक्षर यादृच्छया चुना जाता है। प्रायिकता क्या है कि यह एक स्वर है?",
      "options_en": ["4/11", "3/11", "5/11", "2/11"],
      "options_hi": ["4/11", "3/11", "5/11", "2/11"],
      "answer_en": "4/11",
      "answer_hi": "4/11",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "A box contains 10 good bulbs and 4 defective bulbs. Two bulbs are drawn at random without replacement. What is the probability that both are good?",
      "question_hi": "एक डिब्बे में 10 अच्छे बल्ब और 4 खराब बल्ब हैं। दो बल्ब बिना प्रतिस्थापन के यादृच्छया निकाले जाते हैं। प्रायिकता क्या है कि दोनों अच्छे हैं?",
      "options_en": ["15/91", "45/91", "30/91", "60/91"],
      "options_hi": ["15/91", "45/91", "30/91", "60/91"],
      "answer_en": "45/91",
      "answer_hi": "45/91",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "A number is selected at random from the set {1, 2, 3, ..., 50}. What is the probability that it is a perfect square?",
      "question_hi": "समुच्चय {1, 2, 3, ..., 50} में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता क्या है कि यह एक पूर्ण वर्ग है?",
      "options_en": ["1/10", "3/25", "7/50", "2/25"],
      "options_hi": ["1/10", "3/25", "7/50", "2/25"],
      "answer_en": "7/50",
      "answer_hi": "7/50",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Two cards are drawn from a deck of 52 cards with replacement. What is the probability that both are aces?",
      "question_hi": "52 पत्तों की एक गड्डी से, दो पत्ते प्रतिस्थापन सहित निकाले जाते हैं। प्रायिकता क्या है कि दोनों इक्के हैं?",
      "options_en": ["1/169", "1/221", "4/663", "1/13"],
      "options_hi": ["1/169", "1/221", "4/663", "1/13"],
      "answer_en": "1/169",
      "answer_hi": "1/169",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "A die is thrown. What is the probability of getting a number greater than 4?",
      "question_hi": "एक पासा फेंका जाता है। 4 से अधिक संख्या आने की प्रायिकता क्या है?",
      "options_en": ["1/3", "1/2", "2/3", "5/6"],
      "options_hi": ["1/3", "1/2", "2/3", "5/6"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Three balls are drawn at random from a bag containing 6 red and 4 blue balls. What is the probability that all are red?",
      "question_hi": "6 लाल और 4 नीली गेंदों वाले एक थैले से तीन गेंदें यादृच्छया निकाली जाती हैं। प्रायिकता क्या है कि सभी लाल हैं?",
      "options_en": ["1/6", "1/3", "1/2", "1/4"],
      "options_hi": ["1/6", "1/3", "1/2", "1/4"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "A coin is tossed 3 times. What is the probability of getting at least one head?",
      "question_hi": "एक सिक्के को 3 बार उछाला जाता है। कम से कम एक चित आने की प्रायिकता क्या है?",
      "options_en": ["7/8", "3/4", "1/8", "1/2"],
      "options_hi": ["7/8", "3/4", "1/8", "1/2"],
      "answer_en": "7/8",
      "answer_hi": "7/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "From a pack of 52 cards, one card is drawn at random. What is the probability that it is either a heart or a queen?",
      "question_hi": "52 पत्तों की एक गड्डी से, एक पत्ता यादृच्छया निकाला जाता है। प्रायिकता क्या है कि यह या तो हुकुम का पत्ता है या एक रानी है?",
      "options_en": ["4/13", "1/13", "17/52", "5/13"],
      "options_hi": ["4/13", "1/13", "17/52", "5/13"],
      "answer_en": "4/13",
      "answer_hi": "4/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Two dice are thrown. What is the probability that the sum of numbers is at least 10?",
      "question_hi": "दो पासे फेंके जाते हैं। संख्याओं का योग कम से कम 10 होने की प्रायिकता क्या है?",
      "options_en": ["1/6", "1/12", "5/18", "1/9"],
      "options_hi": ["1/6", "1/12", "5/18", "1/9"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "A bag contains 12 tickets numbered 1 to 12. One ticket is drawn at random. What is the probability that it is a multiple of 3?",
      "question_hi": "एक थैले में 1 से 12 तक अंकित 12 टिकट हैं। एक टिकट यादृच्छया निकाला जाता है। प्रायिकता क्या है कि यह 3 का गुणज है?",
      "options_en": ["1/3", "1/4", "1/2", "2/3"],
      "options_hi": ["1/3", "1/4", "1/2", "2/3"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "The probability that it will rain today is 0.6. What is the probability that it will not rain today?",
      "question_hi": "आज वर्षा होने की प्रायिकता 0.6 है। आज वर्षा नहीं होने की प्रायिकता क्या है?",
      "options_en": ["0.4", "0.5", "0.6", "1"],
      "options_hi": ["0.4", "0.5", "0.6", "1"],
      "answer_en": "0.4",
      "answer_hi": "0.4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "A number is chosen at random from 1 to 20. What is the probability that it is a prime number?",
      "question_hi": "1 से 20 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता क्या है कि यह एक अभाज्य संख्या है?",
      "options_en": ["2/5", "3/5", "1/2", "7/20"],
      "options_hi": ["2/5", "3/5", "1/2", "7/20"],
      "answer_en": "2/5",
      "answer_hi": "2/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "A card is drawn from a deck of 52 cards. What is the probability that it is a black king?",
      "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह एक काला बादशाह है?",
      "options_en": ["1/26", "1/13", "2/13", "1/52"],
      "options_hi": ["1/26", "1/13", "2/13", "1/52"],
      "answer_en": "1/26",
      "answer_hi": "1/26",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "Two dice are thrown. What is the probability that the product of numbers is 12?",
      "question_hi": "दो पासे फेंके जाते हैं। संख्याओं का गुणनफल 12 होने की प्रायिकता क्या है?",
      "options_en": ["1/9", "2/9", "1/18", "5/36"],
      "options_hi": ["1/9", "2/9", "1/18", "5/36"],
      "answer_en": "1/9",
      "answer_hi": "1/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "A bag contains 8 red and 6 blue balls. Two balls are drawn at random. What is the probability that they are of the same colour?",
      "question_hi": "एक थैले में 8 लाल और 6 नीली गेंदें हैं। दो गेंदें यादृच्छया निकाली जाती हैं। प्रायिकता क्या है कि वे एक ही रंग की हैं?",
      "options_en": ["43/91", "48/91", "28/91", "31/91"],
      "options_hi": ["43/91", "48/91", "28/91", "31/91"],
      "answer_en": "43/91",
      "answer_hi": "43/91",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "A die is rolled. What is the probability of getting an even number?",
      "question_hi": "एक पासा लुढ़काया जाता है। एक सम संख्या आने की प्रायिकता क्या है?",
      "options_en": ["1/2", "1/3", "2/3", "5/6"],
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "Three cards are drawn from a deck of 52 cards without replacement. What is the probability that all are spades?",
      "question_hi": "52 पत्तों की एक गड्डी से, तीन पत्ते बिना प्रतिस्थापन के निकाले जाते हैं। प्रायिकता क्या है कि सभी हुकुम के पत्ते हैं?",
      "options_en": ["11/850", "1/5525", "3/52", "1/221"],
      "options_hi": ["11/850", "1/5525", "3/52", "1/221"],
      "answer_en": "11/850",
      "answer_hi": "11/850",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "A coin is tossed twice. What is the probability of getting at most one tail?",
      "question_hi": "एक सिक्के को दो बार उछाला जाता है। अधिक से अधिक एक पट आने की प्रायिकता क्या है?",
      "options_en": ["3/4", "1/4", "1/2", "1"],
      "options_hi": ["3/4", "1/4", "1/2", "1"],
      "answer_en": "3/4",
      "answer_hi": "3/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "A number is selected at random from 1 to 30. What is the probability that it is divisible by 2 or 3?",
      "question_hi": "1 से 30 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता क्या है कि यह 2 या 3 से विभाज्य है?",
      "options_en": ["2/3", "1/2", "5/6", "7/10"],
      "options_hi": ["2/3", "1/2", "5/6", "7/10"],
      "answer_en": "2/3",
      "answer_hi": "2/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "Two dice are thrown. What is the probability that the sum is odd?",
      "question_hi": "दो पासे फेंके जाते हैं। योग विषम होने की प्रायिकता क्या है?",
      "options_en": ["1/2", "1/3", "2/3", "5/6"],
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_en": "A bag contains 5 red, 4 blue and 3 green balls. One ball is drawn at random. What is the probability that it is not green?",
      "question_hi": "एक थैले में 5 लाल, 4 नीली और 3 हरी गेंदें हैं। एक गेंद यादृच्छया निकाली जाती है। प्रायिकता क्या है कि यह हरी नहीं है?",
      "options_en": ["3/4", "2/3", "1/3", "1/4"],
      "options_hi": ["3/4", "2/3", "1/3", "1/4"],
      "answer_en": "3/4",
      "answer_hi": "3/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_en": "A card is drawn from a deck of 52 cards. What is the probability that it is a heart?",
      "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह हुकुम का पत्ता है?",
      "options_en": ["1/4", "1/13", "1/2", "1/52"],
      "options_hi": ["1/4", "1/13", "1/2", "1/52"],
      "answer_en": "1/4",
      "answer_hi": "1/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_en": "A die is thrown twice. What is the probability that the same number appears on both dice?",
      "question_hi": "एक पासे को दो बार फेंका जाता है। प्रायिकता क्या है कि दोनों पासों पर एक ही संख्या आती है?",
      "options_en": ["1/6", "1/36", "5/36", "1/12"],
      "options_hi": ["1/6", "1/36", "5/36", "1/12"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_en": "Two cards are drawn from a deck of 52 cards. What is the probability that both are face cards?",
      "question_hi": "52 पत्तों की एक गड्डी से दो पत्ते निकाले जाते हैं। प्रायिकता क्या है कि दोनों तस्वीर वाले पत्ते हैं?",
      "options_en": ["11/221", "1/221", "9/221", "3/13"],
      "options_hi": ["11/221", "1/221", "9/221", "3/13"],
      "answer_en": "11/221",
      "answer_hi": "11/221",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_en": "A number is chosen at random from 1 to 40. What is the probability that it is divisible by 5?",
      "question_hi": "1 से 40 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता क्या है कि यह 5 से विभाज्य है?",
      "options_en": ["1/5", "1/4", "1/8", "1/10"],
      "options_hi": ["1/5", "1/4", "1/8", "1/10"],
      "answer_en": "1/5",
      "answer_hi": "1/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_en": "A bag contains 10 red and 15 blue balls. One ball is drawn at random. What is the probability that it is red?",
      "question_hi": "एक थैले में 10 लाल और 15 नीली गेंदें हैं। एक गेंद यादृच्छया निकाली जाती है। प्रायिकता क्या है कि यह लाल है?",
      "options_en": ["2/5", "3/5", "1/5", "4/5"],
      "options_hi": ["2/5", "3/5", "1/5", "4/5"],
      "answer_en": "2/5",
      "answer_hi": "2/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_en": "Two dice are thrown. What is the probability that the product is 6?",
      "question_hi": "दो पासे फेंके जाते हैं। गुणनफल 6 होने की प्रायिकता क्या है?",
      "options_en": ["1/9", "2/9", "1/18", "5/36"],
      "options_hi": ["1/9", "2/9", "1/18", "5/36"],
      "answer_en": "1/9",
      "answer_hi": "1/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_en": "A card is drawn from a deck of 52 cards. What is the probability that it is an ace?",
      "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह एक इक्का है?",
      "options_en": ["1/13", "1/4", "1/52", "4/13"],
      "options_hi": ["1/13", "1/4", "1/52", "4/13"],
      "answer_en": "1/13",
      "answer_hi": "1/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_en": "A die is thrown. What is the probability of getting a number less than 3?",
      "question_hi": "एक पासा फेंका जाता है। 3 से कम संख्या आने की प्रायिकता क्या है?",
      "options_en": ["1/3", "1/2", "2/3", "5/6"],
      "options_hi": ["1/3", "1/2", "2/3", "5/6"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_en": "A bag contains 6 red and 4 blue balls. Two balls are drawn at random without replacement. What is the probability that both are red?",
      "question_hi": "एक थैले में 6 लाल और 4 नीली गेंदें हैं। दो गेंदें बिना प्रतिस्थापन के यादृच्छया निकाली जाती हैं। प्रायिकता क्या है कि दोनों लाल हैं?",
      "options_en": ["1/3", "2/3", "1/2", "1/4"],
      "options_hi": ["1/3", "2/3", "1/2", "1/4"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_en": "Three coins are tossed. What is the probability of getting exactly one head?",
      "question_hi": "तीन सिक्के उछाले जाते हैं। ठीक एक चित आने की प्रायिकता क्या है?",
      "options_en": ["3/8", "1/2", "5/8", "1/4"],
      "options_hi": ["3/8", "1/2", "5/8", "1/4"],
      "answer_en": "3/8",
      "answer_hi": "3/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_en": "Two dice are thrown. What is the probability that the sum is even?",
      "question_hi": "दो पासे फेंके जाते हैं। योग सम होने की प्रायिकता क्या है?",
      "options_en": ["1/2", "1/3", "2/3", "5/6"],
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_en": "A card is drawn from a deck of 52 cards. What is the probability that it is a red card?",
      "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह एक लाल पत्ता है?",
      "options_en": ["1/2", "1/4", "1/13", "1/26"],
      "options_hi": ["1/2", "1/4", "1/13", "1/26"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_en": "A die is rolled. What is the probability of getting a prime number?",
      "question_hi": "एक पासा लुढ़काया जाता है। एक अभाज्य संख्या आने की प्रायिकता क्या है?",
      "options_en": ["1/2", "1/3", "2/3", "5/6"],
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_en": "Two cards are drawn from a deck of 52 cards with replacement. What is the probability that both are aces?",
      "question_hi": "52 पत्तों की एक गड्डी से, दो पत्ते प्रतिस्थापन सहित निकाले जाते हैं। प्रायिकता क्या है कि दोनों इक्के हैं?",
      "options_en": ["1/169", "1/221", "4/663", "1/13"],
      "options_hi": ["1/169", "1/221", "4/663", "1/13"],
      "answer_en": "1/169",
      "answer_hi": "1/169",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 46,
      "question_en": "A bag contains 5 red and 7 black balls. One ball is drawn at random. What is the probability that it is black?",
      "question_hi": "एक थैले में 5 लाल और 7 काली गेंदें हैं। एक गेंद यादृच्छया निकाली जाती है। प्रायिकता क्या है कि यह काली है?",
      "options_en": ["7/12", "5/12", "1/2", "1/3"],
      "options_hi": ["7/12", "5/12", "1/2", "1/3"],
      "answer_en": "7/12",
      "answer_hi": "7/12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 47,
      "question_en": "Two dice are thrown. What is the probability that the sum is 8?",
      "question_hi": "दो पासे फेंके जाते हैं। योग 8 होने की प्रायिकता क्या है?",
      "options_en": ["5/36", "1/6", "1/9", "1/12"],
      "options_hi": ["5/36", "1/6", "1/9", "1/12"],
      "answer_en": "5/36",
      "answer_hi": "5/36",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 48,
      "question_en": "A number is chosen at random from 1 to 25. What is the probability that it is a multiple of 3?",
      "question_hi": "1 से 25 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता क्या है कि यह 3 का गुणज है?",
      "options_en": ["8/25", "9/25", "1/3", "2/5"],
      "options_hi": ["8/25", "9/25", "1/3", "2/5"],
      "answer_en": "8/25",
      "answer_hi": "8/25",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 49,
      "question_en": "Three coins are tossed. What is the probability of getting at least two heads?",
      "question_hi": "तीन सिक्के उछाले जाते हैं। कम से कम दो चित आने की प्रायिकता क्या है?",
      "options_en": ["1/2", "3/8", "5/8", "7/8"],
      "options_hi": ["1/2", "3/8", "5/8", "7/8"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 50,
      "question_en": "A card is drawn from a deck of 52 cards. What is the probability that it is a spade or a king?",
      "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह हुकुम का पत्ता है या एक बादशाह है?",
      "options_en": ["4/13", "1/13", "17/52", "5/13"],
      "options_hi": ["4/13", "1/13", "17/52", "5/13"],
      "answer_en": "4/13",
      "answer_hi": "4/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 51,
      "question_en": "Two dice are thrown. What is the probability that the sum is greater than 9?",
      "question_hi": "दो पासे फेंके जाते हैं। योग 9 से अधिक होने की प्रायिकता क्या है?",
      "options_en": ["1/6", "1/12", "5/18", "1/9"],
      "options_hi": ["1/6", "1/12", "5/18", "1/9"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 52,
      "question_en": "A bag contains 8 red and 4 blue balls. Two balls are drawn at random. What is the probability that they are of different colours?",
      "question_hi": "एक थैले में 8 लाल और 4 नीली गेंदें हैं। दो गेंदें यादृच्छया निकाली जाती हैं। प्रायिकता क्या है कि वे अलग-अलग रंग की हैं?",
      "options_en": ["16/33", "8/33", "4/11", "7/33"],
      "options_hi": ["16/33", "8/33", "4/11", "7/33"],
      "answer_en": "16/33",
      "answer_hi": "16/33",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 53,
      "question_en": "A die is thrown. What is the probability of getting an odd number?",
      "question_hi": "एक पासा फेंका जाता है। एक विषम संख्या आने की प्रायिकता क्या है?",
      "options_en": ["1/2", "1/3", "2/3", "5/6"],
      "options_hi": ["1/2", "1/3", "2/3", "5/6"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 54,
      "question_en": "Two cards are drawn from a deck of 52 cards without replacement. What is the probability that both are of the same suit?",
      "question_hi": "52 पत्तों की एक गड्डी से, दो पत्ते बिना प्रतिस्थापन के निकाले जाते हैं। प्रायिकता क्या है कि दोनों एक ही प्रकार के हैं?",
      "options_en": ["4/17", "5/17", "6/17", "7/17"],
      "options_hi": ["4/17", "5/17", "6/17", "7/17"],
      "answer_en": "4/17",
      "answer_hi": "4/17",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 55,
      "question_en": "A number is chosen at random from 1 to 50. What is the probability that it is a perfect square?",
      "question_hi": "1 से 50 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता क्या है कि यह एक पूर्ण वर्ग है?",
      "options_en": ["1/10", "3/25", "7/50", "2/25"],
      "options_hi": ["1/10", "3/25", "7/50", "2/25"],
      "answer_en": "7/50",
      "answer_hi": "7/50",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 56,
      "question_en": "A coin is tossed 4 times. What is the probability of getting exactly 2 heads?",
      "question_hi": "एक सिक्के को 4 बार उछाला जाता है। ठीक 2 चित आने की प्रायिकता क्या है?",
      "options_en": ["3/8", "1/2", "5/16", "11/16"],
      "options_hi": ["3/8", "1/2", "5/16", "11/16"],
      "answer_en": "3/8",
      "answer_hi": "3/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 57,
      "question_en": "A bag contains 6 white and 4 black balls. Two balls are drawn at random. What is the probability that both are white?",
      "question_hi": "एक थैले में 6 सफेद और 4 काली गेंदें हैं। दो गेंदें यादृच्छया निकाली जाती हैं। प्रायिकता क्या है कि दोनों सफेद हैं?",
      "options_en": ["1/3", "2/3", "1/2", "1/4"],
      "options_hi": ["1/3", "2/3", "1/2", "1/4"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 58,
      "question_en": "Two dice are thrown. What is the probability that the numbers are consecutive?",
      "question_hi": "दो पासे फेंके जाते हैं। संख्याएँ क्रमागत होने की प्रायिकता क्या है?",
      "options_en": ["5/18", "2/9", "1/6", "7/36"],
      "options_hi": ["5/18", "2/9", "1/6", "7/36"],
      "answer_en": "5/18",
      "answer_hi": "5/18",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 59,
      "question_en": "A card is drawn from a deck of 52 cards. What is the probability that it is a face card or a heart?",
      "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह एक तस्वीर वाला पत्ता है या हुकुम का पत्ता है?",
      "options_en": ["11/26", "13/26", "15/26", "17/26"],
      "options_hi": ["11/26", "13/26", "15/26", "17/26"],
      "answer_en": "11/26",
      "answer_hi": "11/26",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 60,
      "question_en": "A number is chosen at random from 1 to 20. What is the probability that it is divisible by 4?",
      "question_hi": "1 से 20 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता क्या है कि यह 4 से विभाज्य है?",
      "options_en": ["1/4", "1/5", "1/2", "3/4"],
      "options_hi": ["1/4", "1/5", "1/2", "3/4"],
      "answer_en": "1/4",
      "answer_hi": "1/4",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 61,
      "question_en": "A bag contains 10 red and 10 blue balls. Two balls are drawn at random. What is the probability that they are of the same colour?",
      "question_hi": "एक थैले में 10 लाल और 10 नीली गेंदें हैं। दो गेंदें यादृच्छया निकाली जाती हैं। प्रायिकता क्या है कि वे एक ही रंग की हैं?",
      "options_en": ["9/19", "10/19", "1/2", "1/4"],
      "options_hi": ["9/19", "10/19", "1/2", "1/4"],
      "answer_en": "9/19",
      "answer_hi": "9/19",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 62,
      "question_en": "Three coins are tossed. What is the probability of getting no head?",
      "question_hi": "तीन सिक्के उछाले जाते हैं। कोई चित न आने की प्रायिकता क्या है?",
      "options_en": ["1/8", "3/8", "5/8", "7/8"],
      "options_hi": ["1/8", "3/8", "5/8", "7/8"],
      "answer_en": "1/8",
      "answer_hi": "1/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 63,
      "question_en": "Two dice are thrown. What is the probability that the sum is divisible by 3?",
      "question_hi": "दो पासे फेंके जाते हैं। योग 3 से विभाज्य होने की प्रायिकता क्या है?",
      "options_en": ["1/3", "1/2", "2/3", "5/6"],
      "options_hi": ["1/3", "1/2", "2/3", "5/6"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 64,
      "question_en": "A card is drawn from a deck of 52 cards. What is the probability that it is an ace or a king?",
      "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह एक इक्का है या एक बादशाह है?",
      "options_en": ["2/13", "1/13", "4/13", "5/13"],
      "options_hi": ["2/13", "1/13", "4/13", "5/13"],
      "answer_en": "2/13",
      "answer_hi": "2/13",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 65,
      "question_en": "A die is thrown. What is the probability of getting a factor of 6?",
      "question_hi": "एक पासा फेंका जाता है। 6 का गुणनखंड आने की प्रायिकता क्या है?",
      "options_en": ["2/3", "1/2", "1/3", "5/6"],
      "options_hi": ["2/3", "1/2", "1/3", "5/6"],
      "answer_en": "2/3",
      "answer_hi": "2/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 66,
      "question_en": "Two cards are drawn from a deck of 52 cards. What is the probability that both are red?",
      "question_hi": "52 पत्तों की एक गड्डी से दो पत्ते निकाले जाते हैं। प्रायिकता क्या है कि दोनों लाल हैं?",
      "options_en": ["25/102", "26/102", "27/102", "28/102"],
      "options_hi": ["25/102", "26/102", "27/102", "28/102"],
      "answer_en": "25/102",
      "answer_hi": "25/102",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 67,
      "question_en": "A bag contains 12 red and 8 blue balls. One ball is drawn at random. What is the probability that it is blue?",
      "question_hi": "एक थैले में 12 लाल और 8 नीली गेंदें हैं। एक गेंद यादृच्छया निकाली जाती है। प्रायिकता क्या है कि यह नीली है?",
      "options_en": ["2/5", "3/5", "1/5", "4/5"],
      "options_hi": ["2/5", "3/5", "1/5", "4/5"],
      "answer_en": "2/5",
      "answer_hi": "2/5",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 68,
      "question_en": "Two dice are thrown. What is the probability that the product is 8?",
      "question_hi": "दो पासे फेंके जाते हैं। गुणनफल 8 होने की प्रायिकता क्या है?",
      "options_en": ["1/18", "1/12", "1/9", "5/36"],
      "options_hi": ["1/18", "1/12", "1/9", "5/36"],
      "answer_en": "1/18",
      "answer_hi": "1/18",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 69,
      "question_en": "A number is chosen at random from 1 to 60. What is the probability that it is divisible by 8?",
      "question_hi": "1 से 60 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। प्रायिकता क्या है कि यह 8 से विभाज्य है?",
      "options_en": ["1/10", "3/20", "7/60", "2/15"],
      "options_hi": ["1/10", "3/20", "7/60", "2/15"],
      "answer_en": "7/60",
      "answer_hi": "7/60",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 70,
      "question_en": "Three coins are tossed. What is the probability of getting at least one head?",
      "question_hi": "तीन सिक्के उछाले जाते हैं। कम से कम एक चित आने की प्रायिकता क्या है?",
      "options_en": ["7/8", "3/4", "1/8", "1/2"],
      "options_hi": ["7/8", "3/4", "1/8", "1/2"],
      "answer_en": "7/8",
      "answer_hi": "7/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 71,
      "question_en": "A card is drawn from a deck of 52 cards. What is the probability that it is a queen given it is a face card?",
      "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह एक रानी है यदि यह एक तस्वीर वाला पत्ता है?",
      "options_en": ["1/3", "1/4", "1/2", "2/3"],
      "options_hi": ["1/3", "1/4", "1/2", "2/3"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 72,
      "question_en": "Two dice are thrown. What is the probability that the sum is a multiple of 3?",
      "question_hi": "दो पासे फेंके जाते हैं। योग 3 का गुणज होने की प्रायिकता क्या है?",
      "options_en": ["1/3", "1/2", "2/3", "5/6"],
      "options_hi": ["1/3", "1/2", "2/3", "5/6"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 73,
      "question_en": "A bag has 8 red and 4 blue balls. Two balls are drawn at random. What is the probability that they are same colour?",
      "question_hi": "एक थैले में 8 लाल और 4 नीली गेंदें हैं। दो गेंदें यादृच्छया निकाली जाती हैं। प्रायिकता क्या है कि वे एक ही रंग की हैं?",
      "options_en": ["37/66", "29/66", "19/66", "15/66"],
      "options_hi": ["37/66", "29/66", "19/66", "15/66"],
      "answer_en": "37/66",
      "answer_hi": "37/66",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 74,
      "question_en": "Probability of A hitting target is 1/2, B hitting is 1/3. Both fire. What is probability target is hit?",
      "question_hi": "A द्वारा निशाना साधने की प्रायिकता 1/2 है, B द्वारा 1/3 है। दोनों फायर करते हैं। निशाना लगने की प्रायिकता क्या है?",
      "options_en": ["2/3", "1/3", "5/6", "1/6"],
      "options_hi": ["2/3", "1/3", "5/6", "1/6"],
      "answer_en": "2/3",
      "answer_hi": "2/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 75,
      "question_en": "A number from 1 to 90 chosen. What is probability it is divisible by 5 and 9?",
      "question_hi": "1 से 90 में से एक संख्या चुनी जाती है। प्रायिकता क्या है कि यह 5 और 9 से विभाज्य है?",
      "options_en": ["1/45", "2/45", "1/30", "1/15"],
      "options_hi": ["1/45", "2/45", "1/30", "1/15"],
      "answer_en": "1/45",
      "answer_hi": "1/45",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 76,
      "question_en": "Two cards drawn from deck without replacement. What is probability first is ace, second is king?",
      "question_hi": "गड्डी से दो पत्ते बिना प्रतिस्थापन के निकाले जाते हैं। प्रायिकता क्या है कि पहला इक्का है, दूसरा बादशाह है?",
      "options_en": ["4/663", "8/663", "12/663", "16/663"],
      "options_hi": ["4/663", "8/663", "12/663", "16/663"],
      "answer_en": "4/663",
      "answer_hi": "4/663",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 77,
      "question_en": "A die thrown twice. What is probability of getting a total of 8?",
      "question_hi": "एक पासे को दो बार फेंका जाता है। कुल 8 आने की प्रायिकता क्या है?",
      "options_en": ["5/36", "1/6", "7/36", "1/9"],
      "options_hi": ["5/36", "1/6", "7/36", "1/9"],
      "answer_en": "5/36",
      "answer_hi": "5/36",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 78,
      "question_en": "Bag contains 5 red, 7 blue balls. Two balls drawn with replacement. What is probability both are red?",
      "question_hi": "थैले में 5 लाल, 7 नीली गेंदें हैं। दो गेंदें प्रतिस्थापन सहित निकाली जाती हैं। प्रायिकता क्या है कि दोनों लाल हैं?",
      "options_en": ["25/144", "35/144", "45/144", "55/144"],
      "options_hi": ["25/144", "35/144", "45/144", "55/144"],
      "answer_en": "25/144",
      "answer_hi": "25/144",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 79,
      "question_en": "Two dice thrown. What is probability that numbers differ by 3?",
      "question_hi": "दो पासे फेंके जाते हैं। संख्याओं का अंतर 3 होने की प्रायिकता क्या है?",
      "options_en": ["1/6", "1/9", "1/12", "1/18"],
      "options_hi": ["1/6", "1/9", "1/12", "1/18"],
      "answer_en": "1/6",
      "answer_hi": "1/6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 80,
      "question_en": "A card drawn from deck. What is probability it is a spade given it is not a heart?",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह हुकुम का पत्ता है यदि यह हीरा नहीं है?",
      "options_en": ["1/3", "1/2", "2/3", "3/4"],
      "options_hi": ["1/3", "1/2", "2/3", "3/4"],
      "answer_en": "1/3",
      "answer_hi": "1/3",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 81,
      "question_en": "A box contains 4 red, 3 blue and 5 green marbles. One marble is drawn. What is probability it is red or blue?",
      "question_hi": "एक डिब्बे में 4 लाल, 3 नीली और 5 हरी मार्बल हैं। एक मार्बल निकाला जाता है। प्रायिकता क्या है कि यह लाल या नीली है?",
      "options_en": ["7/12", "5/12", "1/2", "3/4"],
      "options_hi": ["7/12", "5/12", "1/2", "3/4"],
      "answer_en": "7/12",
      "answer_hi": "7/12",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 82,
      "question_en": "Three dice are thrown. What is probability that sum is 4?",
      "question_hi": "तीन पासे फेंके जाते हैं। योग 4 होने की प्रायिकता क्या है?",
      "options_en": ["1/72", "1/36", "1/24", "1/18"],
      "options_hi": ["1/72", "1/36", "1/24", "1/18"],
      "answer_en": "1/72",
      "answer_hi": "1/72",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 83,
      "question_en": "A bag has 6 white, 4 red, 8 black balls. Two balls drawn. What is probability both are white?",
      "question_hi": "एक थैले में 6 सफेद, 4 लाल, 8 काली गेंदें हैं। दो गेंदें निकाली जाती हैं। प्रायिकता क्या है कि दोनों सफेद हैं?",
      "options_en": ["5/51", "10/51", "15/51", "20/51"],
      "options_hi": ["5/51", "10/51", "15/51", "20/51"],
      "answer_en": "5/51",
      "answer_hi": "5/51",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 84,
      "question_en": "Probability that A speaks truth is 3/4, B speaks truth is 4/5. What is probability they contradict each other?",
      "question_hi": "A के सच बोलने की प्रायिकता 3/4 है, B के सच बोलने की 4/5 है। प्रायिकता क्या है कि वे एक-दूसरे का विरोध करते हैं?",
      "options_en": ["7/20", "13/20", "3/10", "1/5"],
      "options_hi": ["7/20", "13/20", "3/10", "1/5"],
      "answer_en": "7/20",
      "answer_hi": "7/20",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 85,
      "question_en": "Two numbers are chosen from 1 to 10. What is probability their sum is odd?",
      "question_hi": "1 से 10 तक की संख्याओं में से दो संख्याएँ चुनी जाती हैं। प्रायिकता क्या है कि उनका योग विषम है?",
      "options_en": ["5/9", "4/9", "1/2", "2/3"],
      "options_hi": ["5/9", "4/9", "1/2", "2/3"],
      "answer_en": "5/9",
      "answer_hi": "5/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 86,
      "question_en": "A coin is tossed 5 times. What is probability of getting exactly 3 heads?",
      "question_hi": "एक सिक्के को 5 बार उछाला जाता है। ठीक 3 चित आने की प्रायिकता क्या है?",
      "options_en": ["5/16", "10/32", "1/4", "3/8"],
      "options_hi": ["5/16", "10/32", "1/4", "3/8"],
      "answer_en": "5/16",
      "answer_hi": "5/16",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 87,
      "question_en": "A committee of 3 is to be formed from 5 men and 4 women. What is probability it includes at least one woman?",
      "question_hi": "5 पुरुषों और 4 महिलाओं में से 3 सदस्यों की एक समिति बनाई जानी है। प्रायिकता क्या है कि इसमें कम से कम एक महिला शामिल है?",
      "options_en": ["37/42", "5/42", "10/21", "11/21"],
      "options_hi": ["37/42", "5/42", "10/21", "11/21"],
      "answer_en": "37/42",
      "answer_hi": "37/42",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 88,
      "question_en": "Two cards are drawn from deck. What is probability one is king and other is queen?",
      "question_hi": "गड्डी से दो पत्ते निकाले जाते हैं। प्रायिकता क्या है कि एक बादशाह है और दूसरा रानी है?",
      "options_en": ["8/663", "16/663", "4/663", "12/663"],
      "options_hi": ["8/663", "16/663", "4/663", "12/663"],
      "answer_en": "8/663",
      "answer_hi": "8/663",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 89,
      "question_en": "A die is thrown until a 6 appears. What is probability it appears on 3rd throw?",
      "question_hi": "एक पासा तब तक फेंका जाता है जब तक कि 6 नहीं आ जाता। प्रायिकता क्या है कि यह तीसरी बार फेंकने पर आता है?",
      "options_en": ["25/216", "125/216", "5/36", "1/6"],
      "options_hi": ["25/216", "125/216", "5/36", "1/6"],
      "answer_en": "25/216",
      "answer_hi": "25/216",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 90,
      "question_en": "A bag contains 3 red, 4 blue, 5 green balls. Three balls drawn. What is probability all are different colours?",
      "question_hi": "एक थैले में 3 लाल, 4 नीली, 5 हरी गेंदें हैं। तीन गेंदें निकाली जाती हैं। प्रायिकता क्या है कि सभी अलग-अलग रंग की हैं?",
      "options_en": ["3/11", "4/11", "5/11", "6/11"],
      "options_hi": ["3/11", "4/11", "5/11", "6/11"],
      "answer_en": "3/11",
      "answer_hi": "3/11",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 91,
      "question_en": "A speaks truth in 60% cases, B in 70% cases. What is probability they likely to contradict?",
      "question_hi": "A 60% मामलों में सच बोलता है, B 70% मामलों में। प्रायिकता क्या है कि वे विरोध करते हैं?",
      "options_en": ["0.46", "0.54", "0.42", "0.58"],
      "options_hi": ["0.46", "0.54", "0.42", "0.58"],
      "answer_en": "0.46",
      "answer_hi": "0.46",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 92,
      "question_en": "From 1 to 100, a number chosen. What is probability it is divisible by 4 or 6?",
      "question_hi": "1 से 100 में से एक संख्या चुनी जाती है। प्रायिकता क्या है कि यह 4 या 6 से विभाज्य है?",
      "options_en": ["33/100", "8/25", "17/50", "2/5"],
      "options_hi": ["33/100", "8/25", "17/50", "2/5"],
      "answer_en": "33/100",
      "answer_hi": "33/100",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 93,
      "question_en": "Two dice thrown. What is probability sum is 7 or 11?",
      "question_hi": "दो पासे फेंके जाते हैं। प्रायिकता क्या है कि योग 7 या 11 है?",
      "options_en": ["2/9", "1/6", "5/18", "7/36"],
      "options_hi": ["2/9", "1/6", "5/18", "7/36"],
      "answer_en": "2/9",
      "answer_hi": "2/9",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 94,
      "question_en": "A card is drawn from deck. What is probability it is a heart given it is a red card?",
      "question_hi": "गड्डी से एक पत्ता निकाला जाता है। प्रायिकता क्या है कि यह हुकुम का पत्ता है यदि यह एक लाल पत्ता है?",
      "options_en": ["1/2", "1/4", "3/4", "2/3"],
      "options_hi": ["1/2", "1/4", "3/4", "2/3"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 95,
      "question_en": "A die is thrown 3 times. What is probability of getting at least one 6?",
      "question_hi": "एक पासे को 3 बार फेंका जाता है। कम से कम एक 6 आने की प्रायिकता क्या है?",
      "options_en": ["91/216", "125/216", "1/216", "5/72"],
      "options_hi": ["91/216", "125/216", "1/216", "5/72"],
      "answer_en": "91/216",
      "answer_hi": "91/216",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 96,
      "question_en": "Three cards drawn from deck. What is probability all are from same suit?",
      "question_hi": "गड्डी से तीन पत्ते निकाले जाते हैं। प्रायिकता क्या है कि सभी एक ही प्रकार के हैं?",
      "options_en": ["22/425",  "11/850",  "44/425",  "88/425"],
      "options_hi": ["22/425",  "11/850",  "44/425",  "88/425"],
      "answer_en": "22/425",
      "answer_hi": "22/425",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 97,
      "question_en": "Two events A and B are such that P(A)=0.3, P(B)=0.4, P(A∩B)=0.1. What is P(A∪B)?",
      "question_hi": "दो घटनाएँ A और B इस प्रकार हैं कि P(A)=0.3, P(B)=0.4, P(A∩B)=0.1। P(A∪B) क्या है?",
      "options_en": ["0.6", "0.7", "0.8", "0.9"],
      "options_hi": ["0.6", "0.7", "0.8", "0.9"],
      "answer_en": "0.6",
      "answer_hi": "0.6",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 98,
      "question_en": "A bag contains 5 red, 4 blue balls. Two balls drawn. What is probability second is red given first is blue?",
      "question_hi": "एक थैले में 5 लाल, 4 नीली गेंदें हैं। दो गेंदें निकाली जाती हैं। प्रायिकता क्या है कि दूसरी लाल है यदि पहली नीली है?",
      "options_en": ["5/8", "3/8", "5/9", "4/9"],
      "options_hi": ["5/8", "3/8", "5/9", "4/9"],
      "answer_en": "5/8",
      "answer_hi": "5/8",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 99,
      "question_en": "A number from 1 to 1000 chosen. What is probability it is divisible by 2, 3 and 5?",
      "question_hi": "1 से 1000 में से एक संख्या चुनी जाती है। प्रायिकता क्या है कि यह 2, 3 और 5 से विभाज्य है?",
      "options_en": ["1/30", "1/15", "1/10", "1/5"],
      "options_hi": ["1/30", "1/15", "1/10", "1/5"],
      "answer_en": "1/30",
      "answer_hi": "1/30",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 100,
      "question_en": "Three coins tossed. What is probability of getting more heads than tails?",
      "question_hi": "तीन सिक्के उछाले जाते हैं। पट से अधिक चित आने की प्रायिकता क्या है?",
      "options_en": ["1/2", "3/8", "5/8", "7/8"],
      "options_hi": ["1/2", "3/8", "5/8", "7/8"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
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