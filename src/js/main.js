console.log('Hello World.')

// background and other design



// cookie connection
let languageButtons = document.querySelectorAll('.language')
languageButtons.forEach(function(languageButton) {
	languageButton.addEventListener('click', function() {
		console.log('lang picked', this.dataset.language)
		document.cookie = 'language=' + this.dataset.language
		document.location = 'swearing.html'
	})
}) 


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
	{	
		question: 'Faccia di culo',
		answers: {
			a: 'your face looks like your butt', // correct
			b: 'shut your fucking face', 
			c: 'you face look like a cow\'s face',
		},
		correct: 'a',
	},
	{	
		question: 'Ti corro in culo',
		answers: {
			a: 'you\'re a shitface',
			b: 'you look like shit',
			c: 'i run into your ass', // correct
		},
		correct: 'c',
	},
	{	
		question: 'Porco cane',
		answers: {
			a: 'pig\'s shit',
			b: 'pig dog', // correct
			c: 'dog dick',
		},
		correct: 'b',
	},
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
	{	
		question: 'Kuso kurae',
		answers: {
			a: 'fuck a donkey',
			b: 'eat shit', // correct
			c: 'piss off',
		},
		correct: 'b',
	},
	{	
		question: 'fuzakeru na',
		answers: {
			a: 'fuck off',  // correct
			b: 'suck a dick',
			c: 'fuck face',
		},
		correct: 'a',
	},
	{	
		question: 'shinjimae',
		answers: {
			a: 'shithead',
			b: 'dumbass',
			c: 'go to hell', // correct
		},
		correct: 'c',
	},
]

// german quiz array 
let germanSwearWords = [
	{
		question: 'You\'re such a drscksnest!',
		answers: {
			a: 'armpit of the universe', // correct
			b: 'pair of sweaty balls',
			c: 'dickhead', 
		},
		correct: 'a',
	},
	{	
		question: 'Stop bothering me. Verpiss dich!',
		answers: {
			a: 'die in a ditch',
			b: 'suck a dick',
			c: 'piss off', // correct
		},
		correct: 'c',
	},
	{	
		question: 'Arschgeige',
		answers: {
			a: 'piece of shit',
			b: 'pee hole dandruf',
			c: 'ass violin', // correct
		},
		correct: 'c',
	},
	{	
		question: 'dummkopf',
		answers: {
			a: 'burn in hell',
			b: 'shithead', // correct
			c: 'asshole',
		},
		correct: 'b',
	},
	{	
		question: 'mongo',
		answers: {
			a: 'dumbass', // correct
			b: 'wanker',
			c: 'fucker',
		},
		correct: 'a',
	},
]

// chinese quiz array 
let chineseSwearWords = [
	{
		question: 'You can\'t be any more Èr bǎi wǔ than you already are.',
		answers: {
			a: '420',
			b: '250', // correct
			c: 'fugly',
		},
		correct: 'b',
	},
	{	
		question: 'cào nǐ zǔzōng shíbā dài',
		answers: {
			a: 'kiss an elephant\'s ass',
			b: 'take your shit and shove it in your face',
			c: 'fuck your ancestors to an innumerable generation', // correct
		},
		correct: 'c',
	},
	{	
		question: 'gǔn dàn',
		answers: {
			a: 'go to hell',
			b: 'piss off', // correct
			c: 'fuck you',
		},
		correct: 'b',
	},
	{	
		question: 'gàn?',
		answers: {
			a: 'fuck', // correct
			b: 'shit',
			c: 'crap',
		},
		correct: 'a',
	},
	{	
		question: 'lājī',
		answers: {
			a: 'trash', // correct
			b: 'a rolling egg',
			c: 'bastard',
		},
		correct: 'a',
	},
]

// generic code for the quiz
let options = document.querySelector('.options')
let question = document.querySelector('.question')
let currentQuestion = 0

let nextButton = document.querySelector('button.next')
nextButton.style.display = 'none'

let swearingOwl = document.querySelector('.swearing-owl span')
swearingOwl.style.display = 'none'

// functional quiz
let quiz = function(swearWords) {
	question.innerText = swearWords[currentQuestion].question
	for (let option in swearWords[currentQuestion].answers) {
		let eachOption = document.createElement('button')
		eachOption.innerText = swearWords[currentQuestion].answers[option]
		options.appendChild(eachOption)
		eachOption.setAttribute('id', option)

		if (eachOption.id === (swearWords[currentQuestion].correct)) {
			eachOption.setAttribute('id', 'right')
		} else {
			eachOption.setAttribute('class', 'wrong')
		}
		
		eachOption.addEventListener('click', function(event) {
			if (event.target === document.querySelector('#right')) {
				event.target.style.backgroundColor = 'green'
			} else {
				event.target.style.backgroundColor = 'red'
				swearingOwl.style.display = 'block'
				swearingOwl.innerText = 'It\'s ' + document.querySelector('#right').innerText + ', you idiot.'
			}	
			document.querySelector('button:nth-child(1)').disabled = true
			document.querySelector('button:nth-child(2)').disabled = true
			document.querySelector('button:nth-child(3)').disabled = true
			nextButton.style.display = 'block'
			nextButton.disabled = false
		})
	}
}

// go to the next question
let nextQuestion = function(swearWords) {
	nextButton.addEventListener('click', function() {
		swearingOwl.style.display = 'none'
		options.innerHTML = ' '

		currentQuestion += 1

		if (currentQuestion === 5) {
			document.querySelector('.learn-to-swear').innerHTML = 'Quiz Over'
		} else {
			quiz(swearWords)
		}
		nextButton.style.display = 'none'
	})
}

// get the quiz to start and go to the next question
if (document.cookie.includes('language=italian')) {
	quiz(italianSwearWords)
	nextQuestion(italianSwearWords)
} else if (document.cookie.includes('language=japanese')) {
	quiz(japaneseSwearWords)
	nextQuestion(japaneseSwearWords)	
} else if (document.cookie.includes('language=german')) {
	quiz(germanSwearWords)
	nextQuestion(germanSwearWords)	
} else if (document.cookie.includes('language=chinese')) {
	quiz(chineseSwearWords)
	nextQuestion(chineseSwearWords)	
} 
