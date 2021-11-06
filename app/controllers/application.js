import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@tracked theme = 'light';

	@action toggleTheme() {
		this.theme = this.theme === 'light' ? 'dark' : 'light';
		this.setBodyTheme(this.theme);
	}

	@action initialize() {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			this.theme = 'dark';
		}

		this.setBodyTheme(this.theme);
	}

	@action setBodyTheme(theme) {
		window.document.body.classList.remove('light', 'dark');
		window.document.body.classList.add(...arguments);
	}
}
