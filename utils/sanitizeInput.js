/**
 * Sanitizes input by trimming strings and converting empty strings to null
 * @param {Object} obj - The object containing input values to be sanitized
 * @returns {Object} - The sanitized object
 */
export default function (obj) {
	const self = this;

	// Iterating through the keys of the object
	Object.keys(obj).forEach((key) => {
		// Checking if the value at the key is an array
		if (Array.isArray(obj[key])) {
			// If it is an array, recursively sanitizing each element of the array
			obj[key].map((o) => {
				if (typeof o === 'object') {
					self.sanitizeInput(o);
				}
			});
		} else if (typeof obj[key] === 'string') {
			// If it is a string, trimming and converting empty strings to null
			obj[key] = obj[key].trim();
			if (obj[key] === '') {
				obj[key] = null;
			}
		} else if (typeof obj[key] === 'object') {
			// If it is an object, recursively sanitizing the object
			self.sanitizeInput(obj[key]);
		}
	});

	// Returning the sanitized object
	return obj;
}
