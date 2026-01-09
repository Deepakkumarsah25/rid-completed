const questions =[
  {
    "num": 1,
    "question_en": "In the sequence: 5, 10, 20, 40, 80, what is the 4th number?",
    "question_hi": "क्रम: 5, 10, 20, 40, 80 में, चौथी संख्या क्या है?",
    "options_en": ["40", "20", "80", "10"],
    "options_hi": ["40", "20", "80", "10"],
    "answer_en": "40",
    "answer_hi": "40"
  },
  {
    "num": 2,
    "question_en": "What is the 3rd letter from right in 'KNOWLEDGEABLE'?",
    "question_hi": "'KNOWLEDGEABLE' में दाएं से तीसरा अक्षर क्या है?",
    "options_en": ["B", "A", "L", "E"],
    "options_hi": ["B", "A", "L", "E"],
    "answer_en": "B",
    "answer_hi": "B"
  },
  {
    "num": 3,
    "question_en": "What is the product of positions of 'M' in 'MEMORANDUM'?",
    "question_hi": "'MEMORANDUM' में 'M' की स्थितियों का गुणनफल क्या है?",
    "options_en": ["20", "15", "24", "18"],
    "options_hi": ["20", "15", "24", "18"],
    "answer_en": "20",
    "answer_hi": "20"
  },
  {
    "num": 4,
    "question_en": "Which number is exactly halfway between 18 and 42 in: 6, 18, 30, 42, 54?",
    "question_hi": "6, 18, 30, 42, 54 में 18 और 42 के ठीक बीच में कौन सी संख्या है?",
    "options_en": ["30", "18", "42", "54"],
    "options_hi": ["30", "18", "42", "54"],
    "answer_en": "30",
    "answer_hi": "30"
  },
  {
    "num": 5,
    "question_en": "In 'IMMEDIATELY', which letter appears at position 5 from left?",
    "question_hi": "'IMMEDIATELY' में, बाएं से पांचवें स्थान पर कौन सा अक्षर है?",
    "options_en": ["D", "I", "E", "A"],
    "options_hi": ["D", "I", "E", "A"],
    "answer_en": "D",
    "answer_hi": "D"
  },
  {
    "num": 6,
    "question_en": "What is the sum of 2nd and 4th multiples of 15?",
    "question_hi": "15 के दूसरे और चौथे गुणजों का योग क्या है?",
    "options_en": ["90", "75", "105", "60"],
    "options_hi": ["90", "75", "105", "60"],
    "answer_en": "90",
    "answer_hi": "90"
  },
  {
    "num": 7,
    "question_en": "In the pattern: A1B, C2D, E3F, G4H, what comes next?",
    "question_hi": "पैटर्न: A1B, C2D, E3F, G4H में, आगे क्या आता है?",
    "options_en": ["I5J", "H5I", "J5K", "I6J"],
    "options_hi": ["I5J", "H5I", "J5K", "I6J"],
    "answer_en": "I5J",
    "answer_hi": "I5J"
  },
  {
    "num": 8,
    "question_en": "What is the difference between 8th and 3rd letters in 'COMPREHENSION'?",
    "question_hi": "'COMPREHENSION' में आठवें और तीसरे अक्षर में क्या अंतर है?",
    "options_en": ["H and M", "E and M", "R and M", "H and P"],
    "options_hi": ["H और M", "E और M", "R और M", "H और P"],
    "answer_en": "H and M",
    "answer_hi": "H और M"
  },
  {
    "num": 9,
    "question_en": "In the series: 0.3, 0.6, 0.9, 1.2, 1.5, what is the 3rd number multiplied by 10?",
    "question_hi": "श्रृंखला: 0.3, 0.6, 0.9, 1.2, 1.5 में, तीसरी संख्या को 10 से गुणा करने पर क्या मिलता है?",
    "options_en": ["9", "6", "12", "15"],
    "options_hi": ["9", "6", "12", "15"],
    "answer_en": "9",
    "answer_hi": "9"
  },
  {
    "num": 10,
    "question_en": "What is the average of positions of vowels in 'EDUCATIONAL'?",
    "question_hi": "'EDUCATIONAL' में स्वरों की स्थितियों का औसत क्या है?",
    "options_en": ["5.2", "5.5", "5.0", "4.8"],
    "options_hi": ["5.2", "5.5", "5.0", "4.8"],
    "answer_en": "5.2",
    "answer_hi": "5.2"
  },
  {
    "num": 11,
    "question_en": "In the pattern: 2, 5, 11, 23, 47, what is the 4th number?",
    "question_hi": "पैटर्न: 2, 5, 11, 23, 47 में, चौथी संख्या क्या है?",
    "options_en": ["23", "11", "47", "5"],
    "options_hi": ["23", "11", "47", "5"],
    "answer_en": "23",
    "answer_hi": "23"
  },
  {
    "num": 12,
    "question_en": "What is the sum of digits of the 4th prime number?",
    "question_hi": "चौथी अभाज्य संख्या के अंकों का योग क्या है?",
    "options_en": ["7", "5", "2", "3"],
    "options_hi": ["7", "5", "2", "3"],
    "answer_en": "7",
    "answer_hi": "7"
  },
  {
    "num": 13,
    "question_en": "In 'QUINTESSENTIAL', which consonant appears at position 7?",
    "question_hi": "'QUINTESSENTIAL' में, सातवें स्थान पर कौन सा व्यंजन है?",
    "options_en": ["S", "T", "N", "E"],
    "options_hi": ["S", "T", "N", "E"],
    "answer_en": "S",
    "answer_hi": "S"
  },
  {
    "num": 14,
    "question_en": "What is the product of 3rd and 5th numbers in: 13, 17, 19, 23, 29?",
    "question_hi": "13, 17, 19, 23, 29 में तीसरी और पांचवीं संख्या का गुणनफल क्या है?",
    "options_en": ["551", "437", "667", "493"],
    "options_hi": ["551", "437", "667", "493"],
    "answer_en": "551",
    "answer_hi": "551"
  },
  {
    "num": 15,
    "question_en": "In the sequence: Z1, Y2, X3, W4, what comes next?",
    "question_hi": "क्रम: Z1, Y2, X3, W4 में, आगे क्या आता है?",
    "options_en": ["V5", "U6", "V6", "W5"],
    "options_hi": ["V5", "U6", "V6", "W5"],
    "answer_en": "V5",
    "answer_hi": "V5"
  },
  {
    "num": 16,
    "question_en": "Which letter is exactly between P and V in alphabet?",
    "question_hi": "वर्णमाला में P और V के ठीक बीच में कौन सा अक्षर है?",
    "options_en": ["S", "R", "T", "U"],
    "options_hi": ["S", "R", "T", "U"],
    "answer_en": "S",
    "answer_hi": "S"
  },
  {
    "num": 17,
    "question_en": "What is the difference between 5th square and 2nd square?",
    "question_hi": "पांचवें वर्ग और दूसरे वर्ग में क्या अंतर है?",
    "options_en": ["21", "16", "24", "20"],
    "options_hi": ["21", "16", "24", "20"],
    "answer_en": "21",
    "answer_hi": "21"
  },
  {
    "num": 18,
    "question_en": "In 'MAGNIFICENT', how many letters between first and last vowel?",
    "question_hi": "'MAGNIFICENT' में, पहले और अंतिम स्वर के बीच कितने अक्षर हैं?",
    "options_en": ["7", "6", "8", "9"],
    "options_hi": ["7", "6", "8", "9"],
    "answer_en": "7",
    "answer_hi": "7"
  },
  {
    "num": 19,
    "question_en": "What is the sum of 3rd and 6th triangular numbers?",
    "question_hi": "तीसरी और छठी त्रिभुज संख्याओं का योग क्या है?",
    "options_en": ["27", "24", "30", "33"],
    "options_hi": ["27", "24", "30", "33"],
    "answer_en": "27",
    "answer_hi": "27"
  },
  {
    "num": 20,
    "question_en": "In the pattern: 6, 24, 96, 384, what is the next number?",
    "question_hi": "पैटर्न: 6, 24, 96, 384 में, अगली संख्या क्या है?",
    "options_en": ["1536", "768", "192", "576"],
    "options_hi": ["1536", "768", "192", "576"],
    "answer_en": "1536",
    "answer_hi": "1536"
  },
  {
    "num": 21,
    "question_en": "What is the middle consonant in 'RESPONSIBILITY'?",
    "question_hi": "'RESPONSIBILITY' में मध्य व्यंजन क्या है?",
    "options_en": ["S", "P", "N", "B"],
    "options_hi": ["S", "P", "N", "B"],
    "answer_en": "S",
    "answer_hi": "S"
  },
  {
    "num": 22,
    "question_en": "In the series: 100, 90, 80, 70, 60, what is the 3rd number from end?",
    "question_hi": "श्रृंखला: 100, 90, 80, 70, 60 में, अंत से तीसरी संख्या क्या है?",
    "options_en": ["80", "70", "90", "60"],
    "options_hi": ["80", "70", "90", "60"],
    "answer_en": "80",
    "answer_hi": "80"
  },
  {
    "num": 23,
    "question_en": "What is the position of second 'N' in 'ENVIRONMENTAL' from right?",
    "question_hi": "'ENVIRONMENTAL' में दाएं से दूसरे 'N' की स्थिति क्या है?",
    "options_en": ["5", "6", "4", "7"],
    "options_hi": ["5", "6", "4", "7"],
    "answer_en": "5",
    "answer_hi": "5"
  },
  {
    "num": 24,
    "question_en": "In the pattern: 9, 16, 25, 36, 49, what is the 4th number?",
    "question_hi": "पैटर्न: 9, 16, 25, 36, 49 में, चौथी संख्या क्या है?",
    "options_en": ["36", "25", "49", "16"],
    "options_hi": ["36", "25", "49", "16"],
    "answer_en": "36",
    "answer_hi": "36"
  },
  {
    "num": 25,
    "question_en": "What is the average of first four cube numbers?",
    "question_hi": "पहले चार घन संख्याओं का औसत क्या है?",
    "options_en": ["20", "25", "15", "30"],
    "options_hi": ["20", "25", "15", "30"],
    "answer_en": "20",
    "answer_hi": "20"
  },
  {
    "num": 26,
    "question_en": "In 'ACKNOWLEDGMENT', which vowel appears 3rd?",
    "question_hi": "'ACKNOWLEDGMENT' में, कौन सा स्वर तीसरा आता है?",
    "options_en": ["O", "A", "E", "I"],
    "options_hi": ["O", "A", "E", "I"],
    "answer_en": "O",
    "answer_hi": "O"
  },
  {
    "num": 27,
    "question_en": "What is the sum of positions of 'R' in 'REARRANGEMENT'?",
    "question_hi": "'REARRANGEMENT' में 'R' की स्थितियों का योग क्या है?",
    "options_en": ["16", "15", "17", "18"],
    "options_hi": ["16", "15", "17", "18"],
    "answer_en": "16",
    "answer_hi": "16"
  },
  {
    "num": 28,
    "question_en": "In the sequence: 1/10, 2/9, 3/8, 4/7, what comes next?",
    "question_hi": "क्रम: 1/10, 2/9, 3/8, 4/7 में, आगे क्या आता है?",
    "options_en": ["5/6", "6/5", "5/7", "4/6"],
    "options_hi": ["5/6", "6/5", "5/7", "4/6"],
    "answer_en": "5/6",
    "answer_hi": "5/6"
  },
  {
    "num": 29,
    "question_en": "What is the product of digits of 5th even number?",
    "question_hi": "पांचवीं सम संख्या के अंकों का गुणनफल क्या है?",
    "options_en": ["0", "8", "10", "9"],
    "options_hi": ["0", "8", "10", "9"],
    "answer_en": "0",
    "answer_hi": "0"
  },
  {
    "num": 30,
    "question_en": "In the series: 14, 28, 42, 56, 70, what is 4th number minus 2nd number?",
    "question_hi": "श्रृंखला: 14, 28, 42, 56, 70 में, चौथी संख्या घटा दूसरी संख्या क्या है?",
    "options_en": ["28", "14", "42", "56"],
    "options_hi": ["28", "14", "42", "56"],
    "answer_en": "28",
    "answer_hi": "28"
  },
  {
    "num": 31,
    "question_en": "Which letter is exactly between F and R in alphabet?",
    "question_hi": "वर्णमाला में F और R के ठीक बीच में कौन सा अक्षर है?",
    "options_en": ["K", "L", "M", "N"],
    "options_hi": ["K", "L", "M", "N"],
    "answer_en": "K",
    "answer_hi": "K"
  },
  {
    "num": 32,
    "question_en": "What is the difference between 4th cube and 1st cube?",
    "question_hi": "चौथे घन और पहले घन में क्या अंतर है?",
    "options_en": ["63", "56", "48", "60"],
    "options_hi": ["63", "56", "48", "60"],
    "answer_en": "63",
    "answer_hi": "63"
  },
  {
    "num": 33,
    "question_en": "In 'SUSPICIOUSLY', how many letters are consonants?",
    "question_hi": "'SUSPICIOUSLY' में कितने अक्षर व्यंजन हैं?",
    "options_en": ["8", "7", "9", "6"],
    "options_hi": ["8", "7", "9", "6"],
    "answer_en": "8",
    "answer_hi": "8"
  },
  {
    "num": 34,
    "question_en": "What is the sum of 2nd and 5th prime numbers after 50?",
    "question_hi": "50 के बाद दूसरी और पांचवीं अभाज्य संख्याओं का योग क्या है?",
    "options_en": ["120", "118", "122", "116"],
    "options_hi": ["120", "118", "122", "116"],
    "answer_en": "120",
    "answer_hi": "120"
  },
  {
    "num": 35,
    "question_en": "In the pattern: 1, 3, 7, 15, 31, what is the 3rd number?",
    "question_hi": "पैटर्न: 1, 3, 7, 15, 31 में, तीसरी संख्या क्या है?",
    "options_en": ["7", "3", "15", "31"],
    "options_hi": ["7", "3", "15", "31"],
    "answer_en": "7",
    "answer_hi": "7"
  },
  {
    "num": 36,
    "question_en": "What is the middle number in: 33, 44, 55, 66, 77?",
    "question_hi": "33, 44, 55, 66, 77 में मध्य संख्या क्या है?",
    "options_en": ["55", "44", "66", "77"],
    "options_hi": ["55", "44", "66", "77"],
    "answer_en": "55",
    "answer_hi": "55"
  },
  {
    "num": 37,
    "question_en": "In 'FUNDAMENTAL', which letter is at position 4 from right?",
    "question_hi": "'FUNDAMENTAL' में, दाएं से चौथे स्थान पर कौन सा अक्षर है?",
    "options_en": ["E", "N", "T", "A"],
    "options_hi": ["E", "N", "T", "A"],
    "answer_en": "E",
    "answer_hi": "E"
  },
  {
    "num": 38,
    "question_en": "What is the product of positions of vowels in 'IMPORTANT'?",
    "question_hi": "'IMPORTANT' में स्वरों की स्थितियों का गुणनफल क्या है?",
    "options_en": ["24", "20", "30", "18"],
    "options_hi": ["24", "20", "30", "18"],
    "answer_en": "24",
    "answer_hi": "24"
  },
  {
    "num": 39,
    "question_en": "In the series: 0.5, 1.5, 2.5, 3.5, 4.5, what is the 4th number?",
    "question_hi": "श्रृंखला: 0.5, 1.5, 2.5, 3.5, 4.5 में, चौथी संख्या क्या है?",
    "options_en": ["3.5", "2.5", "4.5", "1.5"],
    "options_hi": ["3.5", "2.5", "4.5", "1.5"],
    "answer_en": "3.5",
    "answer_hi": "3.5"
  },
  {
    "num": 40,
    "question_en": "What is the difference between 7th and 3rd letters in 'ALPHABETICAL'?",
    "question_hi": "'ALPHABETICAL' में सातवें और तीसरे अक्षर में क्या अंतर है?",
    "options_en": ["E and P", "B and P", "E and H", "T and P"],
    "options_hi": ["E और P", "B और P", "E और H", "T और P"],
    "answer_en": "E and P",
    "answer_hi": "E और P"
  },
  {
    "num": 41,
    "question_en": "In the pattern: 4, 9, 19, 39, 79, what is the next number?",
    "question_hi": "पैटर्न: 4, 9, 19, 39, 79 में, अगली संख्या क्या है?",
    "options_en": ["159", "119", "99", "139"],
    "options_hi": ["159", "119", "99", "139"],
    "answer_en": "159",
    "answer_hi": "159"
  },
  {
    "num": 42,
    "question_en": "What is the sum of digits of 3rd triangular number?",
    "question_hi": "तीसरी त्रिभुज संख्या के अंकों का योग क्या है?",
    "options_en": ["6", "5", "7", "8"],
    "options_hi": ["6", "5", "7", "8"],
    "answer_en": "6",
    "answer_hi": "6"
  },
  {
    "num": 43,
    "question_en": "In 'COMPLICATION', how many letters are between first and last 'O'?",
    "question_hi": "'COMPLICATION' में, पहले और अंतिम 'O' के बीच कितने अक्षर हैं?",
    "options_en": ["7", "6", "8", "9"],
    "options_hi": ["7", "6", "8", "9"],
    "answer_en": "7",
    "answer_hi": "7"
  },
  {
    "num": 44,
    "question_en": "What is the average of 5th and 8th prime numbers?",
    "question_hi": "पांचवीं और आठवीं अभाज्य संख्याओं का औसत क्या है?",
    "options_en": ["18.5", "19.5", "20.5", "17.5"],
    "options_hi": ["18.5", "19.5", "20.5", "17.5"],
    "answer_en": "18.5",
    "answer_hi": "18.5"
  },
  {
    "num": 45,
    "question_en": "In the sequence: B2D, F4H, J6L, N8P, what comes next?",
    "question_hi": "क्रम: B2D, F4H, J6L, N8P में, आगे क्या आता है?",
    "options_en": ["R10T", "T10V", "R12T", "Q10S"],
    "options_hi": ["R10T", "T10V", "R12T", "Q10S"],
    "answer_en": "R10T",
    "answer_hi": "R10T"
  },
  {
    "num": 46,
    "question_en": "What is the middle vowel in 'UNIVERSALITY'?",
    "question_hi": "'UNIVERSALITY' में मध्य स्वर क्या है?",
    "options_en": ["E", "I", "A", "U"],
    "options_hi": ["E", "I", "A", "U"],
    "answer_en": "E",
    "answer_hi": "E"
  },
  {
    "num": 47,
    "question_en": "What is the product of 2nd and 4th numbers in: 25, 50, 75, 100, 125?",
    "question_hi": "25, 50, 75, 100, 125 में दूसरी और चौथी संख्या का गुणनफल क्या है?",
    "options_en": ["5000", "3750", "7500", "2500"],
    "options_hi": ["5000", "3750", "7500", "2500"],
    "answer_en": "5000",
    "answer_hi": "5000"
  },
  {
    "num": 48,
    "question_en": "In the series: 1.1, 2.2, 3.3, 4.4, 5.5, what is the 3rd number times 3?",
    "question_hi": "श्रृंखला: 1.1, 2.2, 3.3, 4.4, 5.5 में, तीसरी संख्या गुणा 3 क्या है?",
    "options_en": ["9.9", "6.6", "13.2", "10.5"],
    "options_hi": ["9.9", "6.6", "13.2", "10.5"],
    "answer_en": "9.9",
    "answer_hi": "9.9"
  },
  {
    "num": 49,
    "question_en": "Which letter is exactly between H and T in alphabet?",
    "question_hi": "वर्णमाला में H और T के ठीक बीच में कौन सा अक्षर है?",
    "options_en": ["N", "M", "O", "P"],
    "options_hi": ["N", "M", "O", "P"],
    "answer_en": "N",
    "answer_hi": "N"
  },
  {
    "num": 50,
    "question_en": "What is the sum of positions of 'S' in 'SENSATIONAL'?",
    "question_hi": "'SENSATIONAL' में 'S' की स्थितियों का योग क्या है?",
    "options_en": ["3", "4", "5", "6"],
    "options_hi": ["3", "4", "5", "6"],
    "answer_en": "3",
    "answer_hi": "3"
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