import Component from '@glimmer/component';
import { action } from '@ember/object';
import cleanObject from '../utils/clean-object';
import config from '../utils/config';

export default class FooterComponent extends Component {
	get socialLinks() {
		return cleanObject(config('social'));
	}

	@action onToggleTheme() {
		if (typeof this.args.onToggleTheme === 'function') {
			this.args.onToggleTheme(...arguments);
		}
	}
}
