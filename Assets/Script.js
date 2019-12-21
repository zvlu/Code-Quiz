const startButton = document.getElementById('start-btn')
const headerRemove = document.getElementById('header2-container')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('game-container')
const questionsEl = document.getElementById('questions')
const answerButtonsEl = document.getElementById('answer-btns')

var timerEl = document.getElementById('timer-value')
var secondsLeft = 75;

let  shuffleQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame)


function startGame () {
    
    startButton.classList.add('hide')
    nextButton.classList.remove('hide')
    

    shuffleQuestions = questions.sort(() => Math.random() - .5)
    
    currentQuestionIndex = 0

    questionContainerEl.classList.remove('hide')
  
    setNextQuestion()
    
    
    
    
}

function setNextQuestion(questionnum) {
    
    showQuestion (shuffleQuestions[currentQuestionIndex])
    
    
}
function showQuestion(question) {

    questionsEl.innerText =  question.question

    const buttons = document.createElement('button')

    buttons.innerHTML= answers
    



    

    

} 
function resetState () {
    
}
function selectAnswer() {


}

