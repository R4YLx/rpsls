// Variables
const resultEl = document.querySelector('#result');
const optionsEl = document.querySelector('#options');
const scoreboardEl = document.querySelector('#score');
const playAgainEl = document.querySelector('#playAgain');
const rulesBtnEl = document.querySelector('.rulesBtn');
const lightboxEl = document.querySelector('.lightbox');

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
			resultOutput(
				`<span class="win">You win!</span> You chose ${userChoice} against ${compChoice}.`
			);
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

// Function for showing score
// const scoreOutput = newScore => {
// 	score = newScore;
// 	scoreboardEl.innerHTML = newScore;
// };

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
			playAgain();
		});
	});
};

playGame();

// New round, go again
const playAgain = () => {
	playAgainEl.addEventListener('click', e => {
		console.log(e.target.tagName);
		resultEl.innerHTML = '';
		playAgainEl.innerHTML = '';
	});
};

// Rules

// rulesBtnEl.addEventListener('click', () => {
// 	showLightbox();
// });

// const showLightbox = () => {
// 	if (lightboxEl.style.display === 'block') {
// 		lightboxEl.style.display = 'none';
// 		lightboxEl.classList.remove('showLightbox');
// 	} else {
// 		lightboxEl.style.display = 'block';
// 		lightboxEl.classList.add('showLightbox');
// 		let rules = document.createElement('div');
// 		rules.className = 'rules';
// 		lightboxEl.appendChild();
// 	}
// };
