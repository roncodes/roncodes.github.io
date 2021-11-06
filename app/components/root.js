import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RootComponent extends Component {
	@action onInsert() {
		if (typeof this.args.onInsert === 'function') {
			this.args.onInsert(...arguments);
		}
	}
}
