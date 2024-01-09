/**
 * Checks if a string consists only of digits
 * @param {any} val - The value to check
 * @returns {boolean} - True if the value consists only of digits, false otherwise
 */
export default function (val) {
	return /^\d+$/.test(val);
}
