import getCvData from 'personal/utils/get-cv-data';
import { module, test } from 'qunit';

module('Unit | Utility | get-cv-data', function () {
	// TODO: Replace this with your real tests.
	test('it works', function (assert) {
		let result = getCvData();
		assert.ok(result);
	});
});
