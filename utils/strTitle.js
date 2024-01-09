/**
 * Returns a titlecased version of the string where words start with an uppercase character,
 * and the remaining characters are lowercase.
 * @param {string} value - The input string.
 * @returns {string} - The titlecased version of the input string.
 */
export default function (value) {
	value = value || '';
	return value.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}
