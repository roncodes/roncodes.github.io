import { helper } from '@ember/component/helper';
import { format, isValid } from 'date-fns';

export default helper(function formatDate([date, fmt = 'MMM, yyyy']) {
	if (!date instanceof Date) {
		date = new Date();
	}

	if (!isValid(date)) {
		date = new Date();
	}

	return format(date, fmt);
});
