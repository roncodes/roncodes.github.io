import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
	activate() {
		this.controllerFor('application').showLayout();
	}
}
