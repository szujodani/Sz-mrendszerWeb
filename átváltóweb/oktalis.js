const questions = [
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  1",
        answers: ["3", "1", "8", "2"],
        correct: 1 // B válasz
    },
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  7",
        answers: ["6", "9", "7", "45"],
        correct: 2 // C válasz
    },
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  10",
        answers: ["75", "4", "8", "64"],
        correct: 2 // C válasz
    },
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  12",
        answers: ["10", "100", "5", "63"],
        correct: 0 // A válasz
    },
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  17",
        answers: ["13", "15", "10", "18"],
        correct: 2 // C válasz
    },
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  20",
        answers: ["19", "18", "17", "16"],
        correct: 3 // D válasz
    },
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  123",
        answers: ["83", "103", "92", "73"],
        correct: 0 // A válasz
    },
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  256",
        answers: ["174", "172", "234", "83"],
        correct: 2 // C válasz
    },
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  512",
        answers: ["338", "146", "429", "256"],
        correct: 0 // A válasz
    },
    {
        question: "Váltsd át az alábbi számot oktális számrendszerből decimálisba.  77",
        answers: ["523", "63", "35", "89"],
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