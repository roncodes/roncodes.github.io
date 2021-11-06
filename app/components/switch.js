import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

export default class SwitchComponent extends Component {
	@tracked isActive = false;

	@computed(
		'activeColor',
		'args.{activeColor,inactiveColor}',
		'inactiveColor',
		'isActive'
	)
	get activeColorClass() {
		return this.isActive
			? `bg-${this.activeColor ?? 'green'}-400`
			: `bg-${this.inactiveColor ?? 'gray'}-300`;
	}

	@action setupSwitch(isActive) {
		this.isActive = isActive ?? false;
	}

	@action onToggle() {
		const { disabled, onToggle } = this.args;

		if (disabled) {
			return;
		}

		this.isActive = !this.isActive;

		if (typeof onToggle === 'function') {
			onToggle(this.isActive);
		}
	}
}
