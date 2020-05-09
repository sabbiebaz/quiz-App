const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log ('Game On')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
         this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
}

function resetState() {  
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target 
    const correct = selectedButton.dataset.correct
     setStatusClass(document.body, correct)
     Array.from(answerButtonsElement.children).forEach(button => {
         setStatusClass(button, button.dataset.correct)
     })
     if (shuffledQuestions.length > currentQuestionIndex + 1) {
     nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart Quiz' 
    startButton.classList.remove('hide')

}

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'What is a female dog called ?',
        answers: [
            { text: 'Girlie', correct: false},
            { text: 'Bitch', correct: true},
            { text: 'Doggie', correct: false},
            { text: 'she-dog', correct: false}
        ]
    },
    {
        question: 'Which of the following is not a name of a dog breed?',
        answers: [
            { text: 'Lhasa Apso', correct: false},
            { text: 'Barbet', correct: false},
            { text: 'Palour dog', correct: true},
            { text: 'Afador', correct: false}
        ]

    },
    {
        question: 'What breed of dog is most likely NOT trained for security Purpose ?',
        answers: [
            { text: 'German-Shepherd', correct: false},
            { text: 'Rottweiler', correct: false},
            { text: 'French Bulldog', correct: false},
            { text: 'American Eskimo', correct: true}
        ]
    },
    {
        question: 'All are sporting Dogs Except ?',
        answers: [
            { text: 'Golden Retreiver', correct: false},
            { text: 'Brittanys', correct: false},
            { text: 'Dalmation', correct: true},
            { text: 'English setters', correct: false}
        ]
    },
    {
        question: 'The following are breeds of K-9 except ?',
        answers: [
            { text: 'German-Shepherd', correct: false},
            { text: 'Dutch- shepherd', correct: false},
            { text: 'Labrador Retriever', correct: false},
            { text: 'Golden Retriever', correct: true}
        ]
    }
] 