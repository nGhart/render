/**
 * Checks if a given value is a valid numeric amount
 * @param {any} a - The value to check as an amount
 * @returns {boolean} - True if the value is a valid numeric amount, false otherwise
 */
export default function (a) {
	let amount = a.toString();

	// Checking if the value is numeric
	if (!this.isNumeric(amount)) {
		return false;
	}

	// Checking if the value is a valid numeric amount (integer or decimal)
	if (!amount.match(/^[0-9]*\.?[0-9]*$/)) {
		return false;
	}

	return true;
}
