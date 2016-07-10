import Card from './Card.js';

let cards = document.querySelectorAll('.card');


class Board {

	constructor() {
		this.cardCount = 0;
		this.activeCards;
		this.container = document.getElementsByTagName('main')[0];

		this.loadCards();
		this.handleClick();
		this.shuffleBoard();
	}

	loadCards() {
		cards.forEach(card => this.duplicateCard(card));

		this.updateCards();
		this.setCards();
	}

	updateCards() {
		cards = document.querySelectorAll('.card');
	}

	duplicateCard(card) {
		card.dataset.number = this.cardCount;
		++this.cardCount;

		let dopple = card.cloneNode(true);

		card.parentNode.appendChild(dopple);
	}

	setCards() {
		cards.forEach(card => new Card(card));
	}

	handleClick() {
		this.container.addEventListener('click', this.checkFlipped.bind(this), false);
	}

	shuffleBoard() {

		for (let i = this.container.children.length; i >= 0; i--) {
		    this.container.appendChild(this.container.children[Math.random() * i | 0]);
		}

	}

	checkFlipped() {
		let activeCards = document.querySelectorAll('.is-active');

		if ( activeCards.length === 2 ) {
			this.activeCards = activeCards;
			this.cardFlipped();
		}
	}

	cardFlipped() {

		let isMatch = false;
		let cardNumbers = [];

		this.activeCards.forEach(card => cardNumbers.push(card.dataset.number));

		if ( cardNumbers[0] === cardNumbers[1] ) {
			isMatch = true;
		}

		setTimeout(() => { this.clearBoard(this.activeCards, isMatch) }, 1000);

	}

	clearBoard(cards, matched) {

		cards.forEach(card => card.classList.remove('is-active'));

		if ( matched ) {
			cards.forEach(card => card.classList.add('is-match'));
		}

	}
}

export default Board;
