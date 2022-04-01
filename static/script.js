const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const btn = document.getElementById(".btn")

let shuffledQuestions, currentQuestionIndex

/* this section was added from this webpage: https://www.youtube.com/watch?v=XF1_MlZ5l6M&ab_channel=WebDevSimplified
to see if i can record what stundets answers*/
btn.addEventListener("click", e => {
  console.log(btn)
})


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions /* I changed the original code here, so i don't get random questions. Instead i get the order i want */ 
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
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
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
    startButton.innerText = 'Restart'
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
    question: 'Do you enjoy working with data?',
    answers: [
      { text: 'Strongly Disagree', correct: 'Strongly Disagree' },
      { text: 'Disagree', correct: 'Disagree' },
      { text: 'Partially agree', correct: 'Partially agree' },
      { text: 'Strongly agree', correct: 'Strongly agree' }
    ]
  },
  {
    question: 'Is marketing your favorite module?',
    answers: [
      { text: 'Strongly Disagree', correct: true },
      { text: 'Disagree', correct: true },
      { text: 'Partially agree', correct: true },
      { text: 'Strongly agree', correct: true }
    ]
  },
  {
    question: 'Is ecommerce your favorite module?',
    answers: [
      { text: 'Strongly Disagree', correct: true },
      { text: 'Disagree', correct: true },
      { text: 'Partially agree', correct: true },
      { text: 'Strongly agree', correct: true }
    ]
  },
  {
    question: 'Do you have an entrepreneurship project?',
    answers: [
      { text: 'Strongly Disagree', correct: true },
      { text: 'Disagree', correct: true },
      { text: 'Partially agree', correct: true },
      { text: 'Strongly agree', correct: true }
    ]
  },
  {
    question: 'Do you prefer influencer marketing?',
    answers: [
      { text: 'Strongly Disagree', correct: true },
      { text: 'Disagree', correct: true },
      { text: 'Partially agree', correct: true },
      { text: 'Strongly agree', correct: true }
    ]
  },
  {
    question: 'Do you prefer customer journey?',
    answers: [
      { text: 'Strongly Disagree', correct: true },
      { text: 'Disagree', correct: true },
      { text: 'Partially agree', correct: true },
      { text: 'Strongly agree', correct: true }
    ]
  },
  {
    question: 'Do you prefer the last stage of marketing funnel: postpurchase?',
    answers: [
      { text: 'Strongly Disagree', correct: true },
      { text: 'Disagree', correct: true },
      { text: 'Partially agree', correct: true },
      { text: 'Strongly agree', correct: true }
    ]
  },
  {
    question: 'Do you prefer podcasts?',
    answers: [
      { text: 'Strongly Disagree', correct: true },
      { text: 'Disagree', correct: true },
      { text: 'Partially agree', correct: true },
      { text: 'Strongly agree', correct: true }
    ]
  }
]