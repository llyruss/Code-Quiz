let startButton = document.getElementById("startButton");
let submitButton= document.getElementById("submit")
let codeQuiz = document.getElementById("codeQuiz");
let instructions = document.getElementById("instructions");
let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let question4 = document.getElementById("question4");
let question5 = document.getElementById("question5");
let questions = [question1, question2, question3, question4, question5];
let messageDiv = document.getElementById("correct")
let timer = document.getElementById("timer")
let score = document.getElementById("score")
let finalScore
let form = document.getElementById("form")
let timeRemaining = 76
let currentQuestion = 0;
let options = document.querySelectorAll("h4");
let lastQuestion = false
console.log(options)


//on start quiz hide Code Quiz Challenge and instuctions and start quiz button

startButton.addEventListener("click", function () {
    startTimer()
    codeQuiz.classList.add("hide")
    instructions.classList.add("hide")
    startButton.classList.add("hide")
    loadQuestion()
});

//countdown clock decrements -1 every second, stop if last question is answered
function startTimer(){
let x = setInterval(function(){
    timeRemaining--
    timer.textContent=timeRemaining
    if( timeRemaining === 0 || lastQuestion === true ){
        clearInterval(x)
    finalScore= timer.textContent
    console.log(finalScore)
    score.textContent="Your final score is: " + finalScore

    }
},1000)
}

//on start quiz display question
function loadQuestion() {
    questions[currentQuestion].classList.remove("hide")
    if (currentQuestion > 0) {
        questions[currentQuestion - 1].classList.add("hide")
    }
    currentQuestion++
}   
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function(e){
        if (e.target.getAttribute("value") === "correct"){
        messageDiv.textContent= "Correct!"
        } else{
        messageDiv.textContent= "Incorrect"
        //if incorrect, deduct 15 seconds from countdown
        timeRemaining -=15
        }
        wait()
        console.log("wait function called")
    })
}

//on click of answer, show correct or incorrect for 1 second, then display next question and hide current qustion
function wait() {
    let waitTime = 1
    let y = setInterval( function(){
        waitTime--
        if (waitTime === 0){
            clearInterval(y)
            console.log("wait timer stopped")
            messageDiv.textContent=""
            if (currentQuestion<questions.length){
                loadQuestion() 
                console.log("next question loaded " + currentQuestion)
                }else{ lastQuestion = true
                console.log("quiz over!")
                form.classList.remove("hide")
                question5.classList.add("hide")
                console.log(finalScore)
            }  

        }
    },1000)

   console.log("wait is over")
}

//form submission stuff


