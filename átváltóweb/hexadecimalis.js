const questions = [
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  1A3",
        answers: ["419", "527", "814", "224"],
        correct: 0 // A válasz
    },
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  7F",
        answers: ["127", "914", "752", "845"],
        correct: 0 // A válasz
    },
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  B2",
        answers: ["75", "178", "8", "64"],
        correct: 1 // B válasz
    },
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  3E8",
        answers: ["1004", "1000", "5214", "631"],
        correct: 1 // B válasz
    },
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  FF",
        answers: ["163", "135", "255", "180"],
        correct: 2 // C válasz
    },
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  2D4",
        answers: ["924", "925", "724", "521"],
        correct: 2 // C válasz
    },
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  A5C",
        answers: ["8321", "2654", "9421", "2652"],
        correct: 3 // D válasz
    },
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  19B",
        answers: ["4", "25", "412", "411"],
        correct: 3 // D válasz
    },
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  C8",
        answers: ["372", "200", "469", "129"],
        correct: 1 // B válasz
    },
    {
        question: "Váltsd át az alábbi számot hexadecimális számrendszerből decimálisba.  5F2",
        answers: ["1522", "6123", "3524", "8953"],
        correct: 0 // A válasz
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

generateQuiz()