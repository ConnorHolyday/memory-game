class Card {

	constructor(domNode) {
		this.self = domNode;
		this.number = this.self.dataset.number;

		this.initialize();
	}

	initialize() {
		this.self.addEventListener('click', this.clickHandler.bind(this));
	}

	clickHandler() {
		this.self.classList.add('is-active');
	}

}

export default Card;
