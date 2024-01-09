/**
 * Checks if a given value is numeric
 * @param {any} n - The value to check
 * @returns {boolean} - True if the value is numeric, false otherwise
 */
export default function (n) {
	// Using isNaN, parseFloat, and isFinite to determine if the value is numeric
	return !isNaN(parseFloat(n)) && isFinite(n);
}
