const questions = [
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  1010",
        answers: ["3", "10", "8", "2"],
        correct: 1 // B válasz
    },
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  101110",
        answers: ["46", "39", "34", "45"],
        correct: 1 // B válasz
    },
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  1011001",
        answers: ["75", "84", "89", "64"],
        correct: 2 // C válasz
    },
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  111111",
        answers: ["14", "100", "83", "63"],
        correct: 3 // D válasz
    },
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  000001",
        answers: ["2", "3", "1", "8"],
        correct: 2 // C válasz
    },
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  100000",
        answers: ["33", "30", "32", "31"],
        correct: 2 // D válasz
    },
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  1101101",
        answers: ["109", "102", "98", "62"],
        correct: 0 // A válasz
    },
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  101200",
        answers: ["12", "Nincs ilyen bináris szám", "45", "62"],
        correct: 1 // B válasz
    },
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  101010",
        answers: ["39", "42", "65", "49"],
        correct: 1 // B válasz
    },
    {
        question: "Váltsd át az alábbi számot bináris számrendszerből decimálisba.  1110",
        answers: ["53", "14", "351", "63"],
        correct: 1 // B válasz
    }
];
function generateQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionText = document.createElement("p");
        questionText.innerText = q.question;

        const form = document.createElement("form");
        form.id = `question${index}`;

        q.answers.forEach((answer, i) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`;
            input.value = i;

            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));

            form.appendChild(label);
            form.appendChild(document.createElement("br"));
        });

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(form);
        quizDiv.appendChild(questionDiv);
    });
}

function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
            score++;
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Elért pontszám: ${score} / ${questions.length}`;
    resultDiv.style.color = "green";
}

function resetQuiz() {
    const quizDiv = document.getElementById("quiz");
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '';

    const allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
        radio.checked = false;
    });

    generateQuiz(); 
}

generateQuiz();
