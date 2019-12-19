const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('game-container')
const questionsEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-btns')

let  shuffleQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', nextButton)

function startGame () {
   
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    nextButton.classList.remove('hide')
    setNextQuestion()
    
}

function setNextQuestion() {
    showQuestion (shuffleQuestions[currentQuestionIndex])
    
    
}
function showQuestion(questions) {

    questionsEl.innerText = questions.question

}

function selectAnswer() {


}

