import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
	namespace = 'api';

	urlForFindAll() {
		const url = super.urlForFindAll(...arguments);

		return `${url}/all.json`;
	}

	urlForFindRecord() {
		const url = super.urlForFindRecord(...arguments);

		return `${url}.json`;
	}
}
