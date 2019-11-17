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

// cookie check for italian
if (document.cookie.includes('language=italian')) {
	console.log('Welcome to italian.')
}

// hide next button until called
// let nextButton = document.querySelector('.next')
// nextButton.style.display = 'none'


// italian quiz
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

let options = document.querySelector('.options')
let question = document.querySelector('.question')
let currentQuestion = 0

let italianQuiz = function() {
	question.innerText = italianSwearWords[currentQuestion].question
	for (let option in italianSwearWords[currentQuestion].answers) {
		let eachOption = document.createElement('button')
		eachOption.innerText = italianSwearWords[currentQuestion].answers[option]
		options.appendChild(eachOption)
		eachOption.setAttribute('id', option)
		console.log(eachOption.id)
		console.log(document.querySelector('button > id'))
		
		eachOption.addEventListener('click', function() {
			if (eachOption.id === (italianSwearWords[currentQuestion].correct)) {
				console.log('yay')
			} else {
				document.querySelector('button').style.backgroundColor = 'red'
			}
			// nextButton.style.display = 'block'
			// nextButton.style.backgroundColor = '#fff'
		})	
	}
}

italianQuiz()










