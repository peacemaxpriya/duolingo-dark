console.log('Hello World.')

// cookie connection
let languageButtons = document.querySelectorAll('.language')
languageButtons.forEach(function(languageButton) {
	languageButton.addEventListener('click', function() {
		console.log('lang picked', this.dataset.language)
		document.cookie = 'language=' + this.dataset.language
		document.location = 'swearing.html'
	})
}) 


// hide next button until called
let nextButton = document.querySelector('.next')
nextButton.style.display = 'none'


// italian quiz array
let italianSwearWords = [
	{
		question: 'I hope you mangia merde e morte!',
		answers: {
			a: 'eat shit and die', // correct
			b: 'break your bones',
			c: 'grow a new brain',
		},
		correct: 'a',
	},
	{	
		question: 'Why don\'t you vaffanculo?',
		answers: {
			a: 'piss off',
			b: 'go to hell',
			c: 'go fuck yourself', // correct
		},
		correct: 'c',
	},
	// {	
	// 	question: 'faccia di culo',
	// 	translation: 'your face looks like your bottom',
	// },
	// {	
	// 	question: 'ti corro in culo',
	// 	translation: 'forget it',
	// 	literal: 'I run into your ass',
	// },
	// {	
	// 	question: 'porco cane',
	// 	translation: 'for God\'s sake',
	// 	literal: 'pig dog',
	// },
]

// japanese quiz array 
let japaneseSwearWords = [
	{
		question: 'Could you shi\'ne kutabare?',
		answers: {
			a: 'go fuck yourself',
			b: 'go to hell',
			c: 'please die', // correct
		},
		correct: 'c',
	},
	{	
		question: 'Why don\'t you damare?',
		answers: {
			a: 'dig yourself a grave',
			b: 'shut your fucking face', // correct
			c: 'go eat ramen',
		},
		correct: 'b',
	},
]


// generic code for the quiz
let options = document.querySelector('.options')
let question = document.querySelector('.question')
let currentQuestion = 0

let quiz = function(swearWords) {
	question.innerText = swearWords[currentQuestion].question
	for (let option in swearWords[currentQuestion].answers) {
		let eachOption = document.createElement('button')
		eachOption.innerText = swearWords[currentQuestion].answers[option]
		options.appendChild(eachOption)
		eachOption.setAttribute('id', option)
		console.log(eachOption.id)

		eachOption.addEventListener('click', function() {
			if (eachOption.id === (swearWords[currentQuestion].correct)) {
				eachOption.setAttribute('id', 'right')
				document.querySelector('#right').style.backgroundColor = 'green'
			} else {
				eachOption.setAttribute('class', 'wrong')
				document.querySelector('.wrong').style.backgroundColor = 'red'
			}
			nextButton.style.display = 'block'
			nextButton.style.backgroundColor = '#fff'
		})
	}
}

// go to the next question
let nextQuestion = function(swearWords) {
	nextButton.addEventListener('click', function() {
		question.innerText = ' '
		options.innerHTML = ' '

		currentQuestion += 1

		if (currentQuestion === 2) {
			document.querySelector('.learn-to-swear').innerHTML = 'Great Job'
		} else {
			quiz(swearWords)
		}
		nextButton.style.display = 'none'
	})
}

// get the quiz to start and go to the next question
if (document.cookie.includes('language=italian')) {
	console.log('Welcome to italian.')
	quiz(italianSwearWords)
	nextQuestion(italianSwearWords)
} else if (document.cookie.includes('language=japanese')) {
	console.log('Welcome to japanese.')
	quiz(japaneseSwearWords)
	nextQuestion(japaneseSwearWords)	
}












