// Variables
const topSectionEl = document.querySelector('.topSection');
const resultEl = document.querySelector('#result');
const optionsEl = document.querySelector('#options');
const scoreboardEl = document.querySelector('#score');
const playAgainEl = document.querySelector('#playAgain');
const resetBtnEl = document.querySelector('#reset');
const rulesBtnEl = document.querySelector('.rulesBtn');
const rulesEl = document.querySelector('.rules');
const userScoreEl = document.querySelector('.userScore');
const compScoreEl = document.querySelector('.compScore');

const options = ['🪨', '📰', '✂️', '🦎', '🖖'];

let userScore = 0;
let compScore = 0;

const updateScore = () => {
	userScoreEl.innerText = `You: ${userScore}`;
	compScoreEl.innerText = `Computer: ${compScore}`;
};

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
			resultOutput(
				`<span class="win">You win!</span> You chose ${userChoice} against ${compChoice}.`
			);
			userScore++;
			updateScore();
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
			resultOutput(
				`<span class="lose">You lost!</span> You thought you could win with ${userChoice} against ${compChoice}? Try again.`
			);
			compScore++;
			updateScore();
			break;

		case '🪨🪨':
		case '📰📰':
		case '✂️✂️':
		case '🦎🦎':
		case '🖖🖖':
			resultOutput(
				`${userChoice} vs. ${compChoice} <br><br><span class="draw">Draw!</span>`
			);
			break;
	}
};

// Rules button
rulesBtnEl.addEventListener('click', () => {
	rulesEl.innerHTML = `<h3>Rules</h3>
	<p>Scissors cuts Paper,<br>
	Paper covers Rock,<br>
	Rock crushes Lizard,<br>
	Lizard poisons Spock,<br>
	Spock smashes Scissors,<br>
	Scissors decapitates Lizard,<br>
	Lizard eats Paper,<br>
	Paper disproves Spock,<br>
	Spock vaporizes Rock,<br>
	(and as it always has) Rock crushes Scissors</p>`;
	showRules();
});

// Rules toggler
const showRules = () => {
	rulesEl.classList.toggle('hide');
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
	optionsEl.innerHTML = '';
	getWeapons();
	let userChoice;
	let compChoice;

	const weaponsEl = document.querySelectorAll('.weapons');
	weaponsEl.forEach(weaponBtn => {
		weaponBtn.addEventListener('click', e => {
			// User choice
			userChoice = e.target.innerHTML;

			// Computer choice
			compChoice = options[Math.floor(Math.random() * options.length)];

			compareChoices(userChoice, compChoice);

			playAgainEl.innerHTML = `<p>Play again</p>`;
			resetBtnEl.innerHTML = `<p>Reset</p>`;
			// const resetBtnEl = document.createElement('p');
			// resetBtnEl.className = 'replay';
			// resetBtnEl.innerHTML = `<p>Reset game</p>`;
			// topSectionEl.appendChild();

			playAgain();
			resetGame();
		});
	});
};

playGame();

// New round, go again
const playAgain = () => {
	playAgainEl.addEventListener('click', () => {
		resultEl.innerHTML = '';
		playAgainEl.innerHTML = '';
		resetBtnEl.innerHTML = '';
	});
};

// reset button
const resetGame = () => {
	resetBtnEl.addEventListener('click', () => {
		resultEl.innerHTML = '';
		playAgainEl.innerHTML = '';
		resetBtnEl.innerHTML = '';
		userScore = 0;
		compScore = 0;
		updateScore();
	});
};
