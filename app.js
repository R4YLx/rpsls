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

// Start playing the game
const playGame = () => {
	getWeapons();
	let userChoice;
	let compChoice;

	const weaponsEl = document.querySelectorAll('.weapons');
	weaponsEl.forEach(weaponBtn => {
		weaponBtn.addEventListener('click', e => {
			// User choice
			userChoice = e.target.innerHTML;
			console.log(`You chose ${userChoice}`);

			// Computer choice
			compChoice = options[Math.floor(Math.random() * options.length)];
			console.log(`The computer chose ${compChoice}`);

			compareChoices(userChoice, compChoice);
		});
	});

	// compareChoices(userChoice, compChoice);
};

playGame();

// New round, go again
