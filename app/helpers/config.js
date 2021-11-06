import { helper } from '@ember/component/helper';
import configUtil from '../utils/config';

export default helper(function config([path]) {
	return configUtil(path);
});
