import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';
import { alias, equal } from '@ember/object/computed';
import getCvData from '../utils/get-cv-data';

export default class CvController extends Controller {
	@controller('application') applicationController;
	@alias('applicationController.theme') theme;
	@equal('theme', 'dark') isDarkMode;
	data = getCvData();

	@action print() {
		window.print();
	}

	@action toggleTheme() {
		return this.applicationController.toggleTheme(...arguments);
	}
}
