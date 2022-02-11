// Variables
const resultDisplay = document.querySelector('#result');
const choiceDisplay = document.querySelector('#options');

const options = {
	rock: '🪨',
	paper: '📰',
	scissors: '✂️',
	lizard: '🦎',
	spock: '🖖',
};

let score = 0;

const battle = e => {
	const userChoice = e.target.innerHTML;
	const compChoice = options[Math.floor(Math.random() * options.length)];
	compaceChoices(userChoice, compChoice);
};

console.log(compChoice);

// Function for showing and posting result
// const scoreOutput;

options.forEach(choice => {
	const weaponOfChoice = document.createElement('div');
	weaponOfChoice.innerHTML = choice;
	weaponOfChoice.addEventListener('click');
	choiceDisplay.appendChild(weaponOfChoice);
});

// Function for declaring result. Win, lose or draw
const compaceChoices = (userChoice, compChoice) => {
	switch (userChoice + compChoice) {
		case 'scissorspapper':
		case 'rockscissors':
		case 'paperrock':
		case 'lizardpaper':
		case 'spockscissors':
		case 'rocklizard':
		case 'paperspock':
		case 'spockrock':
		case 'scissorslizard':
		case 'lizardspock':
			scoreOutput('You won!');
			break;

		case 'papperscissors':
		case 'scissorsrock':
		case 'rockpaper':
		case 'paperlizard':
		case 'scissorsspock':
		case 'lizardrock':
		case 'spockpaper':
		case 'rockspock':
		case 'lizardscissors':
		case 'spocklizard':
			scoreOutput('You lose!');
			break;

		case 'scissorsscissors':
		case 'rockrock':
		case 'paperpaper':
		case 'lizardlizard':
		case 'spockspock':
			scoreOutput("It's a draw!");
			break;
	}
};
