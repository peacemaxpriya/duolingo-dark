console.log('Hello World.')

let italianSwearWords = [
	{
		question: 'I hope you mangia merde e morte!',
		answers: [
			'eat shit and die', // correct
			'break your bones',
			'grow a new brain some day',
		],
	},
	{	
		question: 'Why don\'t you vaffanculo?',
		answers: [
			'piss off',
			'go to hell',
			'go fuck yourself', // correct
		]
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

question.innerText = italianSwearWords[0].question

for (let option in italianSwearWords[0].answers) {
	let eachOption = document.createElement('button')
	eachOption.innerText = italianSwearWords[0].answers[option]
	options.appendChild(eachOption)
}

document.querySelector('button').onclick = function() {
	document.querySelector('button').style.backgroundColor = 'green'
	document.querySelector('button').disabled = true
	document.querySelector('button:nth-child(2)').disabled = true
	document.querySelector('button:nth-child(3)').disabled = true

	let nextButton = document.createElement('div')
	nextButton.innerText = 'Next'
	document.querySelector('.learn-to-swear').appendChild(nextButton)
	nextButton.setAttribute('class', 'next')
}

document.querySelector('button:nth-child(2)').onclick = function() {
	document.querySelector('button:nth-child(2)').style.backgroundColor = 'red'
	document.querySelector('button').disabled = true
	document.querySelector('button:nth-child(2)').disabled = true
	document.querySelector('button:nth-child(3)').disabled = true

	let owlSwears = document.createElement('div')
	owlSwears.innerText = 'You couldn\'t get it right? ' +  italianSwearWords[0].answers[0] 
	document.querySelector('.learn-to-swear').appendChild(owlSwears)
	owlSwears.setAttribute('class', 'owl-swears')
}

document.querySelector('button:nth-child(3)').onclick = function() {
	document.querySelector('button:nth-child(3)').style.backgroundColor = 'red'
	document.querySelector('button').disabled = true
	document.querySelector('button:nth-child(2)').disabled = true
	document.querySelector('button:nth-child(3)').disabled = true

	let owlSwears = document.createElement('div')
	owlSwears.innerText = 'You couldn\'t get it right? ' +  italianSwearWords[0].answers[0] 
	document.querySelector('.learn-to-swear').appendChild(owlSwears)
	owlSwears.setAttribute('class', 'owl-swears')
}







