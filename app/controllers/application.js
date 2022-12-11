import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@tracked theme = 'light';
	@tracked showHeader = true;
	@tracked showFooter = true;

	@action hideLayout() {
		this.showHeader = false;
		this.showFooter = false;
	}

	@action hideFooter() {
		this.showFooter = false;
	}

	@action showLayout() {
		this.showHeader = true;
		this.showFooter = true;
	}

	@action print() {
		window.print();
	}

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
