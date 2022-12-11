import { helper } from '@ember/component/helper';
import { format } from 'date-fns';

export default helper(function formatDate([date, fmt = 'dd MMM, yyyy']) {
	if (!date instanceof Date) {
		date = new Date();
	}
	return format(date, fmt);
});
