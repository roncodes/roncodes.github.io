import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
	@service router;
	@tracked mobileMenuIsOpen = false;

	@action onToggleTheme() {
		if (typeof this.args.onToggleTheme === 'function') {
			this.args.onToggleTheme(...arguments);
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
