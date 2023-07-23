const question = [
    {
        question: "What is the full meaning of HTTP"
        answers: [
            { text: "cascading style sheets", correct: true },
            { text: "Hyper Text Transfer Protocol", correct: false },
            { text: "Home Text Transfer Protocol", correct: false },
            { text: "Hyper Total Transfer Protocol", correct: false },
        ]
    },
    {
        question: "Who is the senate president of Nigeria?",
        answers: [
            { text: "Senator Ahmed Lawal", correct: false },
            { text: "Senator Godswill Akpabio", correct: true },
            { text: "Senator Orji Uzor Kalu", correct: false },
            { text: "Senator Bashir Ahmed", correct: false },
        ]
    },

    {

     question: "How many states are in Nigeria?",
        answers: [
            { text: "36 states", correct: true },
            { text: "35 states", correct: false  },
            { text: "30 states", correct: false },
            { text: "37 states", correct: false },
        ]
    },
    { 
        
    question: "which is the smallest continent in the world"
        answers: [
            { text: "Asia", correct: false },
            { text: "Austarlia", correct: true},
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false},
        ]
    },
]  

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion. question;

    currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerButton.appendChild(button);
       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
       button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild)[]
    answerButtons.re
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("corrrect");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}
startQuiz();