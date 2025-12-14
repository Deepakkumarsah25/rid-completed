const questions= [
  {
    "num": 1,
    "question_en": "A coin is tossed once. What is the probability of getting heads?",
    "question_hi": "एक सिक्के को एक बार उछाला जाता है। चित आने की प्रायिकता क्या है?",
    "options_en": ["1/2", "1", "0", "1/4"],
    "options_hi": ["1/2", "1", "0", "1/4"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "A die is thrown. What is the probability of getting a prime number?",
    "question_hi": "एक पासा फेंका जाता है। एक अभाज्य संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "2/3", "1/3", "1/6"],
    "options_hi": ["1/2", "2/3", "1/3", "1/6"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "From a pack of 52 cards, one card is drawn at random. What is the probability that it is a king?",
    "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता यादृच्छया निकाला जाता है। इसके राजा होने की प्रायिकता क्या है?",
    "options_en": ["1/13", "4/13", "1/52", "1/4"],
    "options_hi": ["1/13", "4/13", "1/52", "1/4"],
    "answer_en": "1/13",
    "answer_hi": "1/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "A bag contains 5 red and 3 blue balls. One ball is drawn at random. What is the probability that it is red?",
    "question_hi": "एक थैले में 5 लाल और 3 नीली गेंदें हैं। एक गेंद यादृच्छया निकाली जाती है। इसके लाल होने की प्रायिकता क्या है?",
    "options_en": ["5/8", "3/8", "1/2", "5/3"],
    "options_hi": ["5/8", "3/8", "1/2", "5/3"],
    "answer_en": "5/8",
    "answer_hi": "5/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Two coins are tossed simultaneously. What is the probability of getting at least one head?",
    "question_hi": "दो सिक्कों को एक साथ उछाला जाता है। कम से कम एक चित प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["3/4", "1/2", "1/4", "1"],
    "options_hi": ["3/4", "1/2", "1/4", "1"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "A die is thrown. What is the probability of getting an even number?",
    "question_hi": "एक पासा फेंका जाता है। एक सम संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "2/3", "1/3", "1/6"],
    "options_hi": ["1/2", "2/3", "1/3", "1/6"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the probability of an impossible event?",
    "question_hi": "एक असंभव घटना की प्रायिकता क्या है?",
    "options_en": ["0", "1", "1/2", "undefined"],
    "options_hi": ["0", "1", "1/2", "अपरिभाषित"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the probability of a sure event?",
    "question_hi": "एक निश्चित घटना की प्रायिकता क्या है?",
    "options_en": ["1", "0", "1/2", "infinite"],
    "options_hi": ["1", "0", "1/2", "अनंत"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "A card is drawn from a deck of 52 cards. What is the probability that it is a heart?",
    "question_hi": "52 पत्तों की एक गड्डी से एक पत्ता निकाला जाता है। इसके हुकुम होने की प्रायिकता क्या है?",
    "options_en": ["1/4", "1/13", "1/52", "13/52"],
    "options_hi": ["1/4", "1/13", "1/52", "13/52"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "A bag contains 4 white and 6 black balls. One ball is drawn. Probability of getting a white ball is?",
    "question_hi": "एक थैले में 4 सफेद और 6 काली गेंदें हैं। एक गेंद निकाली जाती है। सफेद गेंद प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["2/5", "3/5", "1/5", "4/6"],
    "options_hi": ["2/5", "3/5", "1/5", "4/6"],
    "answer_en": "2/5",
    "answer_hi": "2/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Two dice are thrown. What is the probability that the sum is 7?",
    "question_hi": "दो पासे फेंके जाते हैं। योग 7 होने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/12", "1/36", "1/18"],
    "options_hi": ["1/6", "1/12", "1/36", "1/18"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "A month is chosen at random. What is the probability that it has 31 days?",
    "question_hi": "एक महीना यादृच्छया चुना जाता है। इसके 31 दिन होने की प्रायिकता क्या है?",
    "options_en": ["7/12", "1/2", "1/12", "5/12"],
    "options_hi": ["7/12", "1/2", "1/12", "5/12"],
    "answer_en": "7/12",
    "answer_hi": "7/12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the probability of getting a number less than 7 on throwing a die?",
    "question_hi": "एक पासा फेंकने पर 7 से कम संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1", "0", "1/6", "6/7"],
    "options_hi": ["1", "0", "1/6", "6/7"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "A coin is tossed twice. What is the probability of getting exactly one head?",
    "question_hi": "एक सिक्के को दो बार उछाला जाता है। ठीक एक चित प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "1/4", "3/4", "1/8"],
    "options_hi": ["1/2", "1/4", "3/4", "1/8"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "From numbers 1 to 20, a number is chosen at random. What is the probability that it is divisible by 3?",
    "question_hi": "1 से 20 तक की संख्याओं में से एक संख्या यादृच्छया चुनी जाती है। इसके 3 से विभाज्य होने की प्रायिकता क्या है?",
    "options_en": ["3/10", "1/5", "2/5", "1/4"],
    "options_hi": ["3/10", "1/5", "2/5", "1/4"],
    "answer_en": "3/10",
    "answer_hi": "3/10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "A card is drawn from a deck. Probability that it is a face card (Jack, Queen, King) is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके मुख कार्ड (गुलाम, बेगम, बादशाह) होने की प्रायिकता क्या है?",
    "options_en": ["3/13", "1/13", "4/13", "12/52"],
    "options_hi": ["3/13", "1/13", "4/13", "12/52"],
    "answer_en": "3/13",
    "answer_hi": "3/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Two dice are thrown. Probability of getting a doublet (same number on both dice) is?",
    "question_hi": "दो पासे फेंके जाते हैं। दोनों पासों पर समान संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/36", "1/12", "1/18"],
    "options_hi": ["1/6", "1/36", "1/12", "1/18"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "A bag has 3 red, 2 green and 4 blue balls. One ball is drawn. Probability of not getting a blue ball is?",
    "question_hi": "एक थैले में 3 लाल, 2 हरी और 4 नीली गेंदें हैं। एक गेंद निकाली जाती है। नीली गेंद न प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["5/9", "4/9", "2/9", "7/9"],
    "options_hi": ["5/9", "4/9", "2/9", "7/9"],
    "answer_en": "5/9",
    "answer_hi": "5/9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "In a lottery, there are 10 prizes and 25 blanks. What is the probability of winning a prize?",
    "question_hi": "एक लॉटरी में 10 पुरस्कार और 25 रिक्त टिकट हैं। पुरस्कार जीतने की प्रायिकता क्या है?",
    "options_en": ["2/7", "5/7", "1/7", "10/35"],
    "options_hi": ["2/7", "5/7", "1/7", "10/35"],
    "answer_en": "2/7",
    "answer_hi": "2/7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the probability that a leap year has 53 Sundays?",
    "question_hi": "एक लीप वर्ष में 53 रविवार होने की प्रायिकता क्या है?",
    "options_en": ["2/7", "1/7", "3/7", "4/7"],
    "options_hi": ["2/7", "1/7", "3/7", "4/7"],
    "answer_en": "2/7",
    "answer_hi": "2/7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "A die is thrown. Probability of getting a number greater than 4 is?",
    "question_hi": "एक पासा फेंका जाता है। 4 से बड़ी संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/3", "1/2", "2/3", "1/6"],
    "options_hi": ["1/3", "1/2", "2/3", "1/6"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Three coins are tossed. Probability of getting exactly two heads is?",
    "question_hi": "तीन सिक्के उछाले जाते हैं। ठीक दो चित प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["3/8", "1/8", "1/2", "1/4"],
    "options_hi": ["3/8", "1/8", "1/2", "1/4"],
    "answer_en": "3/8",
    "answer_hi": "3/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "From numbers 1 to 30, a number is chosen. Probability that it is a perfect square is?",
    "question_hi": "1 से 30 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके पूर्ण वर्ग होने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/10", "1/5", "1/3"],
    "options_hi": ["1/6", "1/10", "1/5", "1/3"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "A card is drawn from a deck. Probability that it is a black queen is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके काली बेगम होने की प्रायिकता क्या है?",
    "options_en": ["1/26", "1/13", "1/52", "2/13"],
    "options_hi": ["1/26", "1/13", "1/52", "2/13"],
    "answer_en": "1/26",
    "answer_hi": "1/26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Two dice are thrown. Probability that the sum is a prime number is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग एक अभाज्य संख्या होने की प्रायिकता क्या है?",
    "options_en": ["5/12", "1/4", "7/12", "1/3"],
    "options_hi": ["5/12", "1/4", "7/12", "1/3"],
    "answer_en": "5/12",
    "answer_hi": "5/12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "A bag contains 5 red, 8 white and 7 black balls. One ball is drawn. Probability that it is not black is?",
    "question_hi": "एक थैले में 5 लाल, 8 सफेद और 7 काली गेंदें हैं। एक गेंद निकाली जाती है। इसके काली न होने की प्रायिकता क्या है?",
    "options_en": ["13/20", "7/20", "1/2", "3/4"],
    "options_hi": ["13/20", "7/20", "1/2", "3/4"],
    "answer_en": "13/20",
    "answer_hi": "13/20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Probability of getting a total of 9 when two dice are thrown is?",
    "question_hi": "दो पासे फेंकने पर कुल 9 प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/9", "1/12", "1/18", "1/36"],
    "options_hi": ["1/9", "1/12", "1/18", "1/36"],
    "answer_en": "1/9",
    "answer_hi": "1/9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "A card is drawn from a deck. Probability that it is either a king or a queen is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके या तो राजा या बेगम होने की प्रायिकता क्या है?",
    "options_en": ["2/13", "1/13", "4/13", "8/13"],
    "options_hi": ["2/13", "1/13", "4/13", "8/13"],
    "answer_en": "2/13",
    "answer_hi": "2/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "A die is thrown twice. Probability that 5 will come up at least once is?",
    "question_hi": "एक पासे को दो बार फेंका जाता है। कम से कम एक बार 5 आने की प्रायिकता क्या है?",
    "options_en": ["11/36", "1/36", "1/6", "25/36"],
    "options_hi": ["11/36", "1/36", "1/6", "25/36"],
    "answer_en": "11/36",
    "answer_hi": "11/36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "From numbers 1 to 50, a number is chosen. Probability that it is divisible by 6 or 8 is?",
    "question_hi": "1 से 50 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके 6 या 8 से विभाज्य होने की प्रायिकता क्या है?",
    "options_en": ["8/25", "1/5", "3/10", "11/50"],
    "options_hi": ["8/25", "1/5", "3/10", "11/50"],
    "answer_en": "8/25",
    "answer_hi": "8/25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "A box contains 20 discs numbered 1 to 20. One disc is drawn. Probability that the number is divisible by 3 or 5 is?",
    "question_hi": "एक डिब्बे में 1 से 20 तक अंकित 20 डिस्क हैं। एक डिस्क निकाली जाती है। इसके 3 या 5 से विभाज्य होने की प्रायिकता क्या है?",
    "options_en": ["9/20", "1/4", "1/2", "11/20"],
    "options_hi": ["9/20", "1/4", "1/2", "11/20"],
    "answer_en": "9/20",
    "answer_hi": "9/20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Probability that a non-leap year has 53 Mondays is?",
    "question_hi": "एक गैर-लीप वर्ष में 53 सोमवार होने की प्रायिकता क्या है?",
    "options_en": ["1/7", "2/7", "3/7", "0"],
    "options_hi": ["1/7", "2/7", "3/7", "0"],
    "answer_en": "1/7",
    "answer_hi": "1/7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Two dice are thrown. Probability that the sum is at least 10 is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग कम से कम 10 होने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/12", "1/18", "5/18"],
    "options_hi": ["1/6", "1/12", "1/18", "5/18"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "A bag contains 10 red and 8 green balls. Two balls are drawn. Probability that both are red is?",
    "question_hi": "एक थैले में 10 लाल और 8 हरी गेंदें हैं। दो गेंदें निकाली जाती हैं। दोनों के लाल होने की प्रायिकता क्या है?",
    "options_en": ["45/153", "5/17", "10/18", "1/3"],
    "options_hi": ["45/153", "5/17", "10/18", "1/3"],
    "answer_en": "45/153",
    "answer_hi": "45/153",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Three coins are tossed. Probability of getting at most one head is?",
    "question_hi": "तीन सिक्के उछाले जाते हैं। अधिक से अधिक एक चित प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "1/4", "3/8", "1/8"],
    "options_hi": ["1/2", "1/4", "3/8", "1/8"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "A die is thrown. Probability of getting a number less than 3 or greater than 4 is?",
    "question_hi": "एक पासा फेंका जाता है। 3 से कम या 4 से अधिक संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["2/3", "1/2", "5/6", "1/3"],
    "options_hi": ["2/3", "1/2", "5/6", "1/3"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "From a deck of cards, one card is drawn. Probability that it is a red king is?",
    "question_hi": "ताश की एक गड्डी से एक पत्ता निकाला जाता है। इसके लाल राजा होने की प्रायिकता क्या है?",
    "options_en": ["1/26", "1/13", "1/52", "2/13"],
    "options_hi": ["1/26", "1/13", "1/52", "2/13"],
    "answer_en": "1/26",
    "answer_hi": "1/26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Two dice are thrown. Probability that the numbers are different is?",
    "question_hi": "दो पासे फेंके जाते हैं। संख्याएँ भिन्न होने की प्रायिकता क्या है?",
    "options_en": ["5/6", "1/6", "1/36", "1/2"],
    "options_hi": ["5/6", "1/6", "1/36", "1/2"],
    "answer_en": "5/6",
    "answer_hi": "5/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "A card is drawn from a deck. Probability that it is a spade or an ace is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके हुकुम या इक्का होने की प्रायिकता क्या है?",
    "options_en": ["4/13", "1/13", "1/4", "17/52"],
    "options_hi": ["4/13", "1/13", "1/4", "17/52"],
    "answer_en": "4/13",
    "answer_hi": "4/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "A die is thrown. Probability of getting a multiple of 2 or 3 is?",
    "question_hi": "एक पासा फेंका जाता है। 2 या 3 का गुणज प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["2/3", "1/2", "5/6", "1/3"],
    "options_hi": ["2/3", "1/2", "5/6", "1/3"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Two coins are tossed. Probability of getting no head is?",
    "question_hi": "दो सिक्के उछाले जाते हैं। कोई चित न प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/4", "3/4", "1/2", "0"],
    "options_hi": ["1/4", "3/4", "1/2", "0"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "A bag contains 6 white and 4 black balls. Two balls are drawn. Probability that both are white is?",
    "question_hi": "एक थैले में 6 सफेद और 4 काली गेंदें हैं। दो गेंदें निकाली जाती हैं। दोनों के सफेद होने की प्रायिकता क्या है?",
    "options_en": ["1/3", "1/2", "2/3", "5/9"],
    "options_hi": ["1/3", "1/2", "2/3", "5/9"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Two dice are thrown. Probability that the sum is less than 5 is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग 5 से कम होने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/12", "1/18", "5/36"],
    "options_hi": ["1/6", "1/12", "1/18", "5/36"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "A card is drawn from a deck. Probability that it is a club or a diamond is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके चिड़ी या ईंट होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "1/4", "1/13", "2/13"],
    "options_hi": ["1/2", "1/4", "1/13", "2/13"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "A die is thrown. Probability of getting an odd number or a number greater than 3 is?",
    "question_hi": "एक पासा फेंका जाता है। विषम संख्या या 3 से अधिक संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["5/6", "2/3", "1/2", "1/3"],
    "options_hi": ["5/6", "2/3", "1/2", "1/3"],
    "answer_en": "5/6",
    "answer_hi": "5/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Three coins are tossed. Probability of getting at least two tails is?",
    "question_hi": "तीन सिक्के उछाले जाते हैं। कम से कम दो पट प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "3/8", "1/4", "1/8"],
    "options_hi": ["1/2", "3/8", "1/4", "1/8"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "From numbers 1 to 25, a number is chosen. Probability that it is a multiple of 4 is?",
    "question_hi": "1 से 25 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके 4 का गुणज होने की प्रायिकता क्या है?",
    "options_en": ["6/25", "1/5", "4/25", "3/25"],
    "options_hi": ["6/25", "1/5", "4/25", "3/25"],
    "answer_en": "6/25",
    "answer_hi": "6/25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Two dice are thrown. Probability that the product is 12 is?",
    "question_hi": "दो पासे फेंके जाते हैं। गुणनफल 12 होने की प्रायिकता क्या है?",
    "options_en": ["1/9", "1/12", "1/18", "1/36"],
    "options_hi": ["1/9", "1/12", "1/18", "1/36"],
    "answer_en": "1/9",
    "answer_hi": "1/9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "A card is drawn from a deck. Probability that it is a heart or a jack is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके हुकुम या गुलाम होने की प्रायिकता क्या है?",
    "options_en": ["4/13", "1/13", "1/4", "17/52"],
    "options_hi": ["4/13", "1/13", "1/4", "17/52"],
    "answer_en": "4/13",
    "answer_hi": "4/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "A die is thrown. Probability of getting a number between 2 and 5 (inclusive) is?",
    "question_hi": "एक पासा फेंका जाता है। 2 और 5 (सम्मिलित) के बीच की संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["2/3", "1/2", "1/3", "5/6"],
    "options_hi": ["2/3", "1/2", "1/3", "5/6"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "A bag contains 5 red, 4 blue and 3 green balls. One ball is drawn. Probability that it is red or blue is?",
    "question_hi": "एक थैले में 5 लाल, 4 नीली और 3 हरी गेंदें हैं। एक गेंद निकाली जाती है। इसके लाल या नीली होने की प्रायिकता क्या है?",
    "options_en": ["3/4", "5/12", "1/4", "2/3"],
    "options_hi": ["3/4", "5/12", "1/4", "2/3"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Two coins are tossed. Probability of getting one head and one tail is?",
    "question_hi": "दो सिक्के उछाले जाते हैं। एक चित और एक पट प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "1/4", "3/4", "1"],
    "options_hi": ["1/2", "1/4", "3/4", "1"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "A die is thrown twice. Probability that the same number appears on both dice is?",
    "question_hi": "एक पासे को दो बार फेंका जाता है। दोनों पासों पर समान संख्या आने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/36", "1/12", "1/18"],
    "options_hi": ["1/6", "1/36", "1/12", "1/18"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "From numbers 1 to 100, a number is chosen. Probability that it is divisible by 7 is?",
    "question_hi": "1 से 100 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके 7 से विभाज्य होने की प्रायिकता क्या है?",
    "options_en": ["7/50", "1/10", "3/25", "7/100"],
    "options_hi": ["7/50", "1/10", "3/25", "7/100"],
    "answer_en": "7/50",
    "answer_hi": "7/50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "A card is drawn from a deck. Probability that it is a black card or a king is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके काला पत्ता या राजा होने की प्रायिकता क्या है?",
    "options_en": ["7/13", "6/13", "1/2", "15/26"],
    "options_hi": ["7/13", "6/13", "1/2", "15/26"],
    "answer_en": "7/13",
    "answer_hi": "7/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Two dice are thrown. Probability that the sum is a multiple of 4 is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग 4 का गुणज होने की प्रायिकता क्या है?",
    "options_en": ["1/4", "1/6", "1/9", "1/12"],
    "options_hi": ["1/4", "1/6", "1/9", "1/12"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "A bag contains 8 red, 6 white and 4 black balls. One ball is drawn. Probability that it is not white is?",
    "question_hi": "एक थैले में 8 लाल, 6 सफेद और 4 काली गेंदें हैं। एक गेंद निकाली जाती है। इसके सफेद न होने की प्रायिकता क्या है?",
    "options_en": ["2/3", "1/3", "1/2", "4/9"],
    "options_hi": ["2/3", "1/3", "1/2", "4/9"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Three coins are tossed. Probability of getting all heads or all tails is?",
    "question_hi": "तीन सिक्के उछाले जाते हैं। सभी चित या सभी पट प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/4", "1/8", "3/8", "1/2"],
    "options_hi": ["1/4", "1/8", "3/8", "1/2"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "A die is thrown. Probability of getting a number greater than 2 is?",
    "question_hi": "एक पासा फेंका जाता है। 2 से अधिक संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["2/3", "1/2", "1/3", "5/6"],
    "options_hi": ["2/3", "1/2", "1/3", "5/6"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "From numbers 1 to 15, a number is chosen. Probability that it is a factor of 15 is?",
    "question_hi": "1 से 15 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके 15 का गुणनखंड होने की प्रायिकता क्या है?",
    "options_en": ["1/5", "2/5", "1/3", "4/15"],
    "options_hi": ["1/5", "2/5", "1/3", "4/15"],
    "answer_en": "1/5",
    "answer_hi": "1/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Two dice are thrown. Probability that the sum is at most 4 is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग अधिक से अधिक 4 होने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/12", "1/18", "5/36"],
    "options_hi": ["1/6", "1/12", "1/18", "5/36"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "A card is drawn from a deck. Probability that it is a queen or a diamond is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके बेगम या ईंट होने की प्रायिकता क्या है?",
    "options_en": ["4/13", "1/13", "1/4", "17/52"],
    "options_hi": ["4/13", "1/13", "1/4", "17/52"],
    "answer_en": "4/13",
    "answer_hi": "4/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "A die is thrown. Probability of getting a number less than 5 is?",
    "question_hi": "एक पासा फेंका जाता है। 5 से कम संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["2/3", "1/2", "1/3", "5/6"],
    "options_hi": ["2/3", "1/2", "1/3", "5/6"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "A bag contains 7 red and 5 black balls. Two balls are drawn. Probability that they are of different colors is?",
    "question_hi": "एक थैले में 7 लाल और 5 काली गेंदें हैं। दो गेंदें निकाली जाती हैं। उनके अलग-अलग रंगों के होने की प्रायिकता क्या है?",
    "options_en": ["35/66", "31/66", "5/11", "7/12"],
    "options_hi": ["35/66", "31/66", "5/11", "7/12"],
    "answer_en": "35/66",
    "answer_hi": "35/66",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Three coins are tossed. Probability of getting more heads than tails is?",
    "question_hi": "तीन सिक्के उछाले जाते हैं। पट से अधिक चित प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "3/8", "1/4", "5/8"],
    "options_hi": ["1/2", "3/8", "1/4", "5/8"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Two dice are thrown. Probability that the sum is even is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग सम होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "1/4", "3/4", "2/3"],
    "options_hi": ["1/2", "1/4", "3/4", "2/3"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "From numbers 1 to 40, a number is chosen. Probability that it is a multiple of 5 is?",
    "question_hi": "1 से 40 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके 5 का गुणज होने की प्रायिकता क्या है?",
    "options_en": ["1/5", "1/8", "1/10", "1/4"],
    "options_hi": ["1/5", "1/8", "1/10", "1/4"],
    "answer_en": "1/5",
    "answer_hi": "1/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "A card is drawn from a deck. Probability that it is a spade or a face card is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके हुकुम या मुख कार्ड होने की प्रायिकता क्या है?",
    "options_en": ["11/26", "1/2", "3/13", "7/13"],
    "options_hi": ["11/26", "1/2", "3/13", "7/13"],
    "answer_en": "11/26",
    "answer_hi": "11/26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "A die is thrown. Probability of getting a number at least 3 is?",
    "question_hi": "एक पासा फेंका जाता है। कम से कम 3 संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["2/3", "1/2", "1/3", "5/6"],
    "options_hi": ["2/3", "1/2", "1/3", "5/6"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Two coins are tossed. Probability of getting at least one tail is?",
    "question_hi": "दो सिक्के उछाले जाते हैं। कम से कम एक पट प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["3/4", "1/4", "1/2", "1"],
    "options_hi": ["3/4", "1/4", "1/2", "1"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "A bag contains 12 balls numbered 1 to 12. One ball is drawn. Probability that the number is even and greater than 8 is?",
    "question_hi": "एक थैले में 1 से 12 तक अंकित 12 गेंदें हैं। एक गेंद निकाली जाती है। संख्या सम और 8 से अधिक होने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/4", "1/3", "1/12"],
    "options_hi": ["1/6", "1/4", "1/3", "1/12"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Two dice are thrown. Probability that the sum is odd is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग विषम होने की प्रायिकता क्या है?",
    "options_en": ["1/2", "1/4", "3/4", "2/3"],
    "options_hi": ["1/2", "1/4", "3/4", "2/3"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "A card is drawn from a deck. Probability that it is a red card or a queen is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके लाल पत्ता या बेगम होने की प्रायिकता क्या है?",
    "options_en": ["7/13", "1/2", "15/26", "6/13"],
    "options_hi": ["7/13", "1/2", "15/26", "6/13"],
    "answer_en": "7/13",
    "answer_hi": "7/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "A die is thrown. Probability of getting a prime number or an even number is?",
    "question_hi": "एक पासा फेंका जाता है। अभाज्य संख्या या सम संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["5/6", "2/3", "1/2", "1/3"],
    "options_hi": ["5/6", "2/3", "1/2", "1/3"],
    "answer_en": "5/6",
    "answer_hi": "5/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "From numbers 1 to 60, a number is chosen. Probability that it is divisible by 2 and 3 both is?",
    "question_hi": "1 से 60 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके 2 और 3 दोनों से विभाज्य होने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/10", "1/5", "1/3"],
    "options_hi": ["1/6", "1/10", "1/5", "1/3"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Two dice are thrown. Probability that the sum is a multiple of 3 is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग 3 का गुणज होने की प्रायिकता क्या है?",
    "options_en": ["1/3", "1/6", "1/9", "1/12"],
    "options_hi": ["1/3", "1/6", "1/9", "1/12"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "A bag contains 10 red, 15 blue and 20 green balls. One ball is drawn. Probability that it is blue or green is?",
    "question_hi": "एक थैले में 10 लाल, 15 नीली और 20 हरी गेंदें हैं। एक गेंद निकाली जाती है। इसके नीली या हरी होने की प्रायिकता क्या है?",
    "options_en": ["7/9", "2/3", "1/3", "5/9"],
    "options_hi": ["7/9", "2/3", "1/3", "5/9"],
    "answer_en": "7/9",
    "answer_hi": "7/9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Three coins are tossed. Probability of getting at most two heads is?",
    "question_hi": "तीन सिक्के उछाले जाते हैं। अधिक से अधिक दो चित प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["7/8", "3/8", "1/2", "1/8"],
    "options_hi": ["7/8", "3/8", "1/2", "1/8"],
    "answer_en": "7/8",
    "answer_hi": "7/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "A card is drawn from a deck. Probability that it is an ace or a black card is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके इक्का या काला पत्ता होने की प्रायिकता क्या है?",
    "options_en": ["7/13", "6/13", "1/2", "15/26"],
    "options_hi": ["7/13", "6/13", "1/2", "15/26"],
    "answer_en": "7/13",
    "answer_hi": "7/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Two dice are thrown. Probability that the sum is greater than 9 is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग 9 से अधिक होने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/12", "1/18", "5/36"],
    "options_hi": ["1/6", "1/12", "1/18", "5/36"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "A die is thrown. Probability of getting a number which is a multiple of 2 and 3 both is?",
    "question_hi": "एक पासा फेंका जाता है। ऐसी संख्या प्राप्त होने की प्रायिकता क्या है जो 2 और 3 दोनों का गुणज है?",
    "options_en": ["1/6", "1/3", "1/2", "2/3"],
    "options_hi": ["1/6", "1/3", "1/2", "2/3"],
    "answer_en": "1/6",
    "answer_hi": "1/6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "From numbers 1 to 80, a number is chosen. Probability that it is a perfect cube is?",
    "question_hi": "1 से 80 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके पूर्ण घन होने की प्रायिकता क्या है?",
    "options_en": ["1/20", "1/16", "1/10", "1/8"],
    "options_hi": ["1/20", "1/16", "1/10", "1/8"],
    "answer_en": "1/20",
    "answer_hi": "1/20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "A bag contains 6 red and 8 black balls. Two balls are drawn. Probability that both are black is?",
    "question_hi": "एक थैले में 6 लाल और 8 काली गेंदें हैं। दो गेंदें निकाली जाती हैं। दोनों के काली होने की प्रायिकता क्या है?",
    "options_en": ["4/13", "28/91", "3/13", "1/3"],
    "options_hi": ["4/13", "28/91", "3/13", "1/3"],
    "answer_en": "28/91",
    "answer_hi": "28/91",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Two coins are tossed. Probability of getting at most one tail is?",
    "question_hi": "दो सिक्के उछाले जाते हैं। अधिक से अधिक एक पट प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["3/4", "1/4", "1/2", "1"],
    "options_hi": ["3/4", "1/4", "1/2", "1"],
    "answer_en": "3/4",
    "answer_hi": "3/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "A card is drawn from a deck. Probability that it is a heart or a king is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके हुकुम या राजा होने की प्रायिकता क्या है?",
    "options_en": ["4/13", "1/13", "1/4", "17/52"],
    "options_hi": ["4/13", "1/13", "1/4", "17/52"],
    "answer_en": "4/13",
    "answer_hi": "4/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Two dice are thrown. Probability that the sum is a multiple of 5 is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग 5 का गुणज होने की प्रायिकता क्या है?",
    "options_en": ["7/36", "1/6", "1/9", "1/12"],
    "options_hi": ["7/36", "1/6", "1/9", "1/12"],
    "answer_en": "7/36",
    "answer_hi": "7/36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "A die is thrown. Probability of getting a number less than 7 is?",
    "question_hi": "एक पासा फेंका जाता है। 7 से कम संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1", "0", "1/6", "6/7"],
    "options_hi": ["1", "0", "1/6", "6/7"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "From numbers 1 to 90, a number is chosen. Probability that it is a multiple of 9 is?",
    "question_hi": "1 से 90 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके 9 का गुणज होने की प्रायिकता क्या है?",
    "options_en": ["1/10", "1/9", "1/5", "1/6"],
    "options_hi": ["1/10", "1/9", "1/5", "1/6"],
    "answer_en": "1/10",
    "answer_hi": "1/10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "A bag contains 5 red, 4 blue and 3 green balls. Two balls are drawn. Probability that they are of same color is?",
    "question_hi": "एक थैले में 5 लाल, 4 नीली और 3 हरी गेंदें हैं। दो गेंदें निकाली जाती हैं। उनके एक ही रंग के होने की प्रायिकता क्या है?",
    "options_en": ["19/66", "10/33", "1/3", "5/11"],
    "options_hi": ["19/66", "10/33", "1/3", "5/11"],
    "answer_en": "19/66",
    "answer_hi": "19/66",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Three coins are tossed. Probability of getting exactly one tail is?",
    "question_hi": "तीन सिक्के उछाले जाते हैं। ठीक एक पट प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["3/8", "1/8", "1/2", "1/4"],
    "options_hi": ["3/8", "1/8", "1/2", "1/4"],
    "answer_en": "3/8",
    "answer_hi": "3/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "A card is drawn from a deck. Probability that it is a face card or a diamond is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके मुख कार्ड या ईंट होने की प्रायिकता क्या है?",
    "options_en": ["11/26", "1/2", "3/13", "7/13"],
    "options_hi": ["11/26", "1/2", "3/13", "7/13"],
    "answer_en": "11/26",
    "answer_hi": "11/26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Two dice are thrown. Probability that the sum is less than 6 is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग 6 से कम होने की प्रायिकता क्या है?",
    "options_en": ["5/18", "1/6", "1/12", "1/9"],
    "options_hi": ["5/18", "1/6", "1/12", "1/9"],
    "answer_en": "5/18",
    "answer_hi": "5/18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "A die is thrown. Probability of getting a number which is a perfect square is?",
    "question_hi": "एक पासा फेंका जाता है। पूर्ण वर्ग संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/3", "1/6", "1/2", "2/3"],
    "options_hi": ["1/3", "1/6", "1/2", "2/3"],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "From numbers 1 to 70, a number is chosen. Probability that it is divisible by 2 or 5 is?",
    "question_hi": "1 से 70 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके 2 या 5 से विभाज्य होने की प्रायिकता क्या है?",
    "options_en": ["3/5", "2/5", "1/2", "4/7"],
    "options_hi": ["3/5", "2/5", "1/2", "4/7"],
    "answer_en": "3/5",
    "answer_hi": "3/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "A bag contains 10 red, 15 blue balls. One ball is drawn. Probability that it is not red is?",
    "question_hi": "एक थैले में 10 लाल, 15 नीली गेंदें हैं। एक गेंद निकाली जाती है। इसके लाल न होने की प्रायिकता क्या है?",
    "options_en": ["3/5", "2/5", "1/3", "2/3"],
    "options_hi": ["3/5", "2/5", "1/3", "2/3"],
    "answer_en": "3/5",
    "answer_hi": "3/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Two coins are tossed. Probability of getting two heads is?",
    "question_hi": "दो सिक्के उछाले जाते हैं। दो चित प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["1/4", "1/2", "3/4", "1"],
    "options_hi": ["1/4", "1/2", "3/4", "1"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "A card is drawn from a deck. Probability that it is a black face card is?",
    "question_hi": "एक गड्डी से एक पत्ता निकाला जाता है। इसके काले रंग का मुख कार्ड होने की प्रायिकता क्या है?",
    "options_en": ["3/26", "1/13", "6/52", "1/26"],
    "options_hi": ["3/26", "1/13", "6/52", "1/26"],
    "answer_en": "3/26",
    "answer_hi": "3/26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Two dice are thrown. Probability that the sum is divisible by 3 or 4 is?",
    "question_hi": "दो पासे फेंके जाते हैं। योग 3 या 4 से विभाज्य होने की प्रायिकता क्या है?",
    "options_en": ["5/9", "1/2", "2/3", "7/12"],
    "options_hi": ["5/9", "1/2", "2/3", "7/12"],
    "answer_en": "5/9",
    "answer_hi": "5/9",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "A die is thrown. Probability of getting a number greater than 6 is?",
    "question_hi": "एक पासा फेंका जाता है। 6 से अधिक संख्या प्राप्त होने की प्रायिकता क्या है?",
    "options_en": ["0", "1", "1/6", "undefined"],
    "options_hi": ["0", "1", "1/6", "अपरिभाषित"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "From numbers 1 to 100, a number is chosen. Probability that it is a prime number is?",
    "question_hi": "1 से 100 तक की संख्याओं में से एक संख्या चुनी जाती है। इसके अभाज्य संख्या होने की प्रायिकता क्या है?",
    "options_en": ["1/4", "6/25", "1/5", "11/50"],
    "options_hi": ["1/4", "6/25", "1/5", "11/50"],
    "answer_en": "1/4",
    "answer_hi": "1/4",
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