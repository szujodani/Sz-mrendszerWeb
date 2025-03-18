const questions = [
    {
        question: "Végezd el az alábbi hatványozást: 12 a négyzeten",
        answers: ["144", "10", "85", "122"],
        correct: 0 // A válasz
    },
    {
        question: "Végezd el az alábbi hatványozást: 2 a másodikon",
        answers: ["5", "4", "2", "3"],
        correct: 1 // B válasz
    },
    {
        question: "Végezd el az alábbi hatványozást: 3 a harmadikon",
        answers: ["27", "64", "8", "53"],
        correct: 0 // A válasz
    },
    {
        question: "Végezd el az alábbi hatványozást: 8 a négyzeten",
        answers: ["72", "10", "841", "631"],
        correct: 0 // A válasz
    },
    {
        question: "Végezd el az alábbi hatványozást: 5 a harmadikon",
        answers: ["242", "311", "125", "80"],
        correct: 2 // C válasz
    },
    {
        question: "Végezd el az alábbi hatványozást: 9 a harmadikon",
        answers: ["942", "729", "321", "314"],
        correct: 1 // B válasz
    },
    {
        question: "Végezd el az alábbi hatványozást: 10 a másodikon",
        answers: ["104", "100", "98", "62"],
        correct: 1 // B válasz
    },
    {
        question: "Végezd el az alábbi hatványozást: 4 az ötödiken",
        answers: ["122", "620", "451", "256"],
        correct: 3 // D válasz
    },
    {
        question: "Végezd el az alábbi hatványozást: 7 a négyzeten",
        answers: ["49", "43", "65", "48"],
        correct: 0 // A válasz
    },
    {
        question: "Végezd el az alábbi hatványozást: 15 a négyzeten",
        answers: ["225", "240", "131", "93"],
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

generateQuiz();
