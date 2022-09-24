let startButton = document.getElementById("startButton");
let codeQuiz = document.getElementById("codeQuiz");
let instructions = document.getElementById("instructions");
let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let question4 = document.getElementById("question4");
let question5 = document.getElementById("question5");
let questions = [question1, question2, question3, question4, question5];
let currentQuestion = 0;
let options =document.querySelectorAll("h4");
console.log(options)

//on start quiz hide Code Quiz Challenge and instuctions and start quiz button
//on start quiz display question
//on start quiz countdown clock starts

startButton.addEventListener("click", function() {
    codeQuiz.classList.add("hide")
    instructions.classList.add("hide")
    startButton.classList.add("hide")
    loadQuestion()
});
function loadQuestion() {
    questions[currentQuestion].classList.remove("hide")
   if (currentQuestion > 0) {
    questions[currentQuestion-1].classList.add("hide")
   }
    currentQuestion++
    
}

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", loadQuestion)
}




//countdown clock decrements -1 every second

//on click of answer, show correct or incorrect for 1 second, then display next question and hide current qustion
//if incorrect, deduct 15 seconds from countdown


//after last question is answered show high score form
