/**
 * Converts the first character of a string to uppercase and the rest to lowercase.
 * @param {string} value - The input string.
 * @returns {string} - The titlecased version of the input string.
 */
export default function (value) {
	value = value || '';
	return value.charAt(0).toUpperCase() + value.slice(1);
}
