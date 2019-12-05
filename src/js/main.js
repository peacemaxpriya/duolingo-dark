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

// italian quiz array
let italianSwearWords = [
	{
		question: 'mangia merde e morte',
		answers: {
			a: 'eat shit and die', // correct
			b: 'break your bones',
			c: 'grow a new brain',
		},
		correct: 'a',
	},
	{	
		question: 'vaffanculo',
		answers: {
			a: 'piss off',
			b: 'go to hell',
			c: 'go fuck yourself', // correct
		},
		correct: 'c',
	},
	{	
		question: 'faccia di culo',
		answers: {
			a: 'your face looks like your butt', // correct
			b: 'shut your fucking face', 
			c: 'you face look like a cow\'s face',
		},
		correct: 'a',
	},
	{	
		question: 'ti corro in culo',
		answers: {
			a: 'you\'re a shitface',
			b: 'you look like shit',
			c: 'i run into your ass', // correct
		},
		correct: 'c',
	},
	{	
		question: 'porco cane',
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
		question: 'kutabare?',
		answers: {
			a: 'go fuck yourself',
			b: 'go to hell',
			c: 'please die', // correct
		},
		correct: 'c',
	},
	{	
		question: 'damare',
		answers: {
			a: 'dig yourself a grave',
			b: 'shut your fucking face', // correct
			c: 'go eat ramen',
		},
		correct: 'b',
	},
	{	
		question: 'kuso kurae',
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
		question: 'drscksnest',
		answers: {
			a: 'armpit of the universe', // correct
			b: 'pair of sweaty balls',
			c: 'dickhead', 
		},
		correct: 'a',
	},
	{	
		question: 'verpiss dich',
		answers: {
			a: 'die in a ditch',
			b: 'suck a dick',
			c: 'piss off', // correct
		},
		correct: 'c',
	},
	{	
		question: 'arschgeige',
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
		question: 'Èr bǎi wǔ',
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

// hindi quiz array 
let hindiSwearWords = [
	{
		question: 'saala kutta',
		answers: {
			a: 'goat fucker',
			b: 'go to hell',
			c: 'fucking dog', // correct
		},
		correct: 'c',
	},
	{	
		question: 'gaand mara',
		answers: {
			a: 'dog semen',
			b: 'get your ass fucked', // correct
			c: 'you\'re the result of a torn condom',
		},
		correct: 'b',
	},
	{	
		question: 'haraami',
		answers: {
			a: 'pig',
			b: 'bastard', // correct
			c: 'loser',
		},
		correct: 'b',
	},
	{	
		question: 'suvar',
		answers: {
			a: 'pig', // correct
			b: 'shit',
			c: 'cow',
		},
		correct: 'a',
	},
	{	
		question: 'bhadwe',
		answers: {
			a: 'pimp', // corect
			b: 'fucker',
			c: 'idiot',
		},
		correct: 'a',
	},
]

// korean quiz array 
let koreanSwearWords = [
	{
		question: 'mae-ju',
		answers: {
			a: 'dumbfuck',
			b: 'chicken that eats its own shit',
			c: 'fermented soybeans that smell like shit', // correct
		},
		correct: 'c',
	},
	{	
		question: 'shib-seh-ggii',
		answers: {
			a: 'fucker', // correct
			b: 'piss off',
			c: 'asshole',
		},
		correct: 'a',
	},
	{	
		question: 'shi-bal',
		answers: {
			a: 'pig',
			b: 'fuck', // correct
			c: 'bastard',
		},
		correct: 'b',
	},
	{	
		question: 'jot-gga',
		answers: {
			a: 'piss off', // correct
			b: 'go die',
			c: 'go to hell',
		},
		correct: 'a',
	},
	{	
		question: 'mee-cheen-nom',
		answers: {
			a: 'headache',
			b: 'fucking piece of shit',
			c: 'crazy bastard', // correct
		},
		correct: 'c',
	},
]

// spanish quiz array 
let spanishSwearWords = [
	{
		question: 'joder',
		answers: {
			a: 'go die',
			b: 'fuck', // correct
			c: 'damn',
		},
		correct: 'b',
	},
	{	
		question: 'hijo de puta',
		answers: {
			a: 'fuck off',
			b: 'piece of shit',
			c: 'son of a bitch', // correct
		},
		correct: 'c',
	},
	{	
		question: 'mierda',
		answers: {
			a: 'shit', // correct
			b: 'go to hell',
			c: 'asshole',
		},
		correct: 'a',
	},
	{	
		question: 'me cago en tus muertos',
		answers: {
			a: 'i shit over your dead ones', // correct
			b: 'i\'ll kill your dog and bury it',
			c: 'i want you dead',
		},
		correct: 'a',
	},
	{	
		question: 'Gilipollas',
		answers: {
			a: 'dog fucker',
			b: 'shithead', // correct
			c: 'choke and die',
		},
		correct: 'b',
	},
]

// french quiz array 
let frenchSwearWords = [
	{
		question: 'brûle en l’enfe',
		answers: {
			a: 'light a candle under your ass',
			b: 'burn in hell', // correct
			c: 'eat stale creme brulee',
		},
		correct: 'b',
	},
	{	
		question: 'va te faire enculer',
		answers: {
			a: 'idiot',
			b: 'mind your own business',
			c: 'go fuck yourself', // correct
		},
		correct: 'c',
	},
	{	
		question: 'branleur',
		answers: {
			a: 'banana peel',
			b: 'wanker', // correct
			c: 'womanizer',
		},
		correct: 'b',
	},
	{	
		question: 'putain',
		answers: {
			a: 'fuck', // correct
			b: 'dickhead',
			c: 'ugly',
		},
		correct: 'a',
	},
	{	
		question: 'dégage',
		answers: {
			a: 'piss off', // correct
			b: 'stink',
			c: 'shit',
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

let happyOwl = function() {
	document.querySelector('.inside-pages-owl').setAttribute('id', 'owl-happy')
}

let disappointedOwl = function() {
	document.querySelector('.inside-pages-owl').setAttribute('id', 'owl-disappointed')
	swearingOwl.style.display = 'block'
	swearingOwl.innerText = 'It\'s ' + document.querySelector('#right').innerText + ', you idiot.'
}

// functional quiz
let quiz = function(swearWords) {
	question.innerText = swearWords[currentQuestion].question
	document.querySelector('.inside-pages-owl').removeAttribute('id', 'owl-disappointed')
	document.querySelector('.inside-pages-owl').removeAttribute('id', 'owl-happy')
	
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
				setTimeout(happyOwl, 500)
			} else {
				event.target.style.backgroundColor = 'red'
				setTimeout(disappointedOwl, 500)
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
			document.querySelector('.certificate').style.display = 'flex'
			document.querySelector('.another-language').style.display = 'block'
			document.querySelector('.learn-to-swear').style.display = 'none'
		} else {
			quiz(swearWords)
		}
		nextButton.style.display = 'none'
	})
}

// certificate page 
// let certificateToShare = document.createElement('meta')
// certificateToShare.setAttribute('property', 'og:image')
// certificateToShare.setAttribute('content', ' ')
// document.querySelector('head').appendChild(certificateToShare)

// get the quiz to start and go to the next question
if (document.cookie.includes('language=italian')) {
	quiz(italianSwearWords)
	nextQuestion(italianSwearWords)
	document.querySelector('.cert').setAttribute('src', 'dist/img/certificates/italian-cert.png')
	// document.querySelector('.cert-to-share').setAttribute('content', 'https://peacemaxpriya.github.io/duolingo-dark/dist/img/certificates/italian-cert.png')
} else if (document.cookie.includes('language=japanese')) {
	quiz(japaneseSwearWords)
	nextQuestion(japaneseSwearWords)
	document.querySelector('.cert').setAttribute('src', 'dist/img/certificates/japanese-cert.png')
	// document.querySelector('.cert-to-share').setAttribute('content', 'https://peacemaxpriya.github.io/duolingo-dark/dist/img/certificates/japanese-cert.png')	
} else if (document.cookie.includes('language=german')) {
	quiz(germanSwearWords)
	nextQuestion(germanSwearWords)
	document.querySelector('.cert').setAttribute('src', 'dist/img/certificates/german-cert.png')
	// document.querySelector('.cert-to-share').setAttribute('content', 'https://peacemaxpriya.github.io/duolingo-dark/dist/img/certificates/german-cert.png')	
} else if (document.cookie.includes('language=chinese')) {
	quiz(chineseSwearWords)
	nextQuestion(chineseSwearWords)	
	document.querySelector('.cert').setAttribute('src', 'dist/img/certificates/chinese-cert.png')
	// document.querySelector('.cert-to-share').setAttribute('content', 'https://peacemaxpriya.github.io/duolingo-dark/dist/img/certificates/chinese-cert.png')
} else if (document.cookie.includes('language=hindi')) {
	quiz(hindiSwearWords)
	nextQuestion(hindiSwearWords)	
	document.querySelector('.cert').setAttribute('src', 'dist/img/certificates/hindi-cert.png')
	// document.querySelector('.cert-to-share').setAttribute('content', 'https://peacemaxpriya.github.io/duolingo-dark/dist/img/certificates/chinese-cert.png')
} else if (document.cookie.includes('language=korean')) {
	quiz(koreanSwearWords)
	nextQuestion(koreanSwearWords)	
	document.querySelector('.cert').setAttribute('src', 'dist/img/certificates/korean-cert.png')
	// document.querySelector('.cert-to-share').setAttribute('content', 'https://peacemaxpriya.github.io/duolingo-dark/dist/img/certificates/chinese-cert.png')
} else if (document.cookie.includes('language=spanish')) {
	quiz(spanishSwearWords)
	nextQuestion(spanishSwearWords)	
	document.querySelector('.cert').setAttribute('src', 'dist/img/certificates/spanish-cert.png')
	// document.querySelector('.cert-to-share').setAttribute('content', 'https://peacemaxpriya.github.io/duolingo-dark/dist/img/certificates/chinese-cert.png')
} else if (document.cookie.includes('language=french')) {
	quiz(frenchSwearWords)
	nextQuestion(frenchSwearWords)	
	document.querySelector('.cert').setAttribute('src', 'dist/img/certificates/french-cert.png')
	// document.querySelector('.cert-to-share').setAttribute('content', 'https://peacemaxpriya.github.io/duolingo-dark/dist/img/certificates/chinese-cert.png')
} 



