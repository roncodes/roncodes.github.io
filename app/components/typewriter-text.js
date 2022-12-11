import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default class TypewriterTextComponent extends Component {
	@tracked nodeRef;
	@tracked interval = 1200;
	@tracked typeInterval = 100;
	@tracked loop = true;
	@tracked multiplePhrases = true;
	@tracked phraseDelimiter = ',';

	@action async setupComponent(element) {
		const {
			loop,
			interval,
			typeInterval,
			multiplePhrases,
			phraseDelimiter,
		} = this.args;

		this.nodeRef = element;
		this.loop = isEmpty(loop) ? this.loop : loop;
		this.interval = isEmpty(interval) ? this.interval : parseInt(interval);
		this.typeInterval = isEmpty(typeInterval)
			? this.typeInterval
			: parseInt(typeInterval);
		this.multiplePhrases = isEmpty(multiplePhrases)
			? this.multiplePhrases
			: multiplePhrases;
		this.phraseDelimiter = isEmpty(phraseDelimiter)
			? this.phraseDelimiter
			: phraseDelimiter;

		this.startTypeWriting();
	}

	@action async startTypeWriting() {
		let { phrases } = this.args;

		if (!phrases) {
			phrases = this.getPhrasesFromText();
		}

		for (let i = 0; i < phrases.length; i++) {
			const phrase = phrases.objectAt(i);
			this.clearText();

			for (let j = 0; j < phrase.length; j++) {
				const char = phrase[j];
				await this.addCharacter(char);
			}

			await this.timeout(this.interval);

			if (this.loop === true) {
				phrases.pushObject(phrase);
			}
		}
	}

	@action getPhrasesFromText() {
		const text = this.getText();

		if (this.isMultiplePhrases && typeof text === 'string') {
			return text.split(this.phraseDelimiter);
		}

		return [text];
	}

	@action getText() {
		return this.nodeRef?.textContent;
	}

	@action clearText() {
		this.nodeRef.textContent = ' ';
	}

	@action setText(text) {
		this.nodeRef.textContent = text;
	}

	@action addCharacter(char) {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.nodeRef.textContent += char;
				resolve(true);
			}, this.typeInterval);
		});
	}

	@action timeout(ms) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, ms);
		});
	}
}
