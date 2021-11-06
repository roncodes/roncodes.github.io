export default function cleanObject(obj, emptyStrings = true) {
	for (var propName in obj) {
		if (obj[propName] === null || obj[propName] === undefined) {
			delete obj[propName];
		}

		if (emptyStrings === true && obj[propName] === '') {
			delete obj[propName];
		}
	}
	return obj;
}
