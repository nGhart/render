/**
 * Converts a value to an array
 * @param {any} val - The value to convert to an array
 * @returns {Array} - The resulting array
 */
export default function (val) {
	// Checking if the value is truthy
	if (val) {
		// Checking if the value is already an array
		if (Array.isArray(val)) {
			return val;
		} else {
			// Splitting the value by commas and returning the resulting array
			return val.split(',');
		}
	} else {
		// Returning an empty array if the value is falsy
		return [];
	}
}
