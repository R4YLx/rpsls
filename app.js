// Variables
const resultEl = document.querySelector('#result');
const optionsEl = document.querySelector('#options');
const scoreboardEl = document.querySelector('#score');
const playAgainEl = document.querySelector('#playAgain');

const options = ['🪨', '📰', '✂️', '🦎', '🖖'];

let score = 0;

// Game rules. Win, lose or draw
const compareChoices = (userChoice, compChoice) => {
	switch (userChoice + compChoice) {
		case '✂️📰':
		case '🪨✂️':
		case '📰🪨':
		case '🦎📰':
		case '🖖✂️':
		case '🪨🦎':
		case '📰🖖':
		case '🖖🪨':
		case '✂️🦎':
		case '🦎🖖':
			resultOutput('You won!');
			break;

		case '📰✂️':
		case '✂️🪨':
		case '🪨📰':
		case '📰🦎':
		case '✂️🖖':
		case '🦎🪨':
		case '🖖📰':
		case '🪨🖖':
		case '🦎✂️':
		case '🖖🦎':
			resultOutput('You lose!');
			break;

		case '🪨🪨':
		case '📰📰':
		case '✂️✂️':
		case '🦎🦎':
		case '🖖🖖':
			resultOutput("It's a draw!");
			break;
	}
};

// const weaponOfChoice = e => {
// 	const userChoice = e.target.innerHTML;
// 	const compChoice = options[Math.floor(Math.random() * options.length)];
// 	compareChoices(userChoice, compChoice);
// };

// Function for showing score
const scoreOutput = newScore => {
	score = newScore;
	scoreboardEl.innerHTML = newScore;
};

const resultOutput = result => {
	const scoreboard = document.createElement('h2');
	scoreboard.innerHTML = result;
	resultEl.appendChild(scoreboard);
};

// Creates buttons for weapons
const getWeapons = () => {
	options.forEach(choice => {
		let weapon = document.createElement('button');
		weapon.className = 'btn weapons';
		weapon.innerHTML = choice;
		optionsEl.appendChild(weapon);
	});
};

getWeapons();

const weaponEl = document.querySelector('.weapons');

let userChoice;
let compChoice;

// Click event
weaponEl.addEventListener('click', e => {
	// userChoice = e.target.innerHTML;
	// compChoice = options[Math.floor(Math.random() * options.length)];
	// compareChoices(userChoice, compChoice);
	// console.log(userChoice, compChoice);

	console.log(e.target.tagName);
	console.log(e.target.innerHTML);
});

// New round, go again
