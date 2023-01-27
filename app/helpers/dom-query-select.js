import { helper } from '@ember/component/helper';

export default helper(function domQuerySelect([selector]) {
	const node = document.querySelector(selector);
	return node;
});
