import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import cleanObject from '../utils/clean-object';
import config from '../utils/config';

export default class FooterComponent extends Component {
	get socialLinks() {
		return cleanObject(config('social'));
	}

	@equal('args.theme', 'dark') isDarkMode;

	@computed('args.visible') get visible() {
		let { visible } = this.args;

		if (visible === undefined) {
			visible = true;
		}

		return visible;
	}

	@action onToggleTheme() {
		if (typeof this.args.onToggleTheme === 'function') {
			this.args.onToggleTheme(...arguments);
		}
	}
}
