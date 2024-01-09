/**
 * Approximates a numeric value to a specified number of decimal places.
 * @param {number} value - The numeric value to approximate.
 * @param {number} places - The number of decimal places to round to. Default is 2.
 * @returns {string} - The string representation of the approximated value.
 */
export default function (value, places) {
	places = places || 2;
	return value.toFixed(places);
}
