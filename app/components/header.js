import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
	@service router;
	@tracked mobileMenuIsOpen = false;
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

	@action onPrint() {
		const { onPrint } = this.args;

		if (typeof onPrint === 'function') {
			onPrint(...arguments);
		}
	}

	@action toggleMobileMenu(explicit = null) {
		if (explicit !== null && typeof explicit !== 'boolean') {
			return this.toggleMobileMenu();
		}

		this.mobileMenuIsOpen =
			explicit === null ? !this.mobileMenuIsOpen : explicit;
	}

	@action closeMobileMenu() {
		this.toggleMobileMenu(false);
	}

	@action openMobileMenu() {
		this.toggleMobileMenu(true);
	}

	@action transitionTo(routeName) {
		this.router.transitionTo(routeName).then(() => {
			this.closeMobileMenu();
		});
	}
}
