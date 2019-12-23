const startButton = document.getElementById('start-btn')
const headerRemove = document.getElementById('header2-container')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('game-container')
const questionsEl = document.getElementById('questions')
const answerButtonsEl = document.getElementById('answer-btns')

var timerEl = document.getElementById('timer-value')
var secondsLeft = 75;
var secondsElasped = 0;
const timerValueEl = document.getElementById('timer-value')
var questionNum = questions.length
var questionIndex = 0;

let  shuffleQuestions, currentQuestionIndex



startButton.addEventListener('click', function(){
    if (questionIndex === 0) {
        startButton.textContent = "NEXT";
        questionContainerEl.classList.remove('hide')
       
    }

    renderQuestion()
    function startTimer () {
    setInterval(() => {
        secondsLeft--;
        renderTime();
    },1000);
    }     
})



function renderQuestion () {

    var question = questions[questionIndex]
    questionsEl.textContent = question.question;

    var answers = question.answers

    for (var i =0; i < answers.length; i++){
       const button = document.createElement('button')
       button.innerText = answers [i];
       button.className = 'answer-btn'
       answerButtonsEl.appendChild(button)
       
      
   }
        

}
//Answers (if right answer chosen go to next question)
answerButtonsEl.addEventListener('click', function(e){
    var clickbtn = e.target
    
    var btntext = clickbtn.innerText; 
    
    if (btntext === questions[questionIndex].correct){
        
        
        questionIndex ++;
        this.childNode.removeParent('answer-btns');
        renderQuestion();
        
        
        
    }
   
    
})

