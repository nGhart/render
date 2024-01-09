/**
 * Formats a numeric amount as currency.
 * @param {number} amount - The numeric amount to be formatted.
 * @param {string} [currency='USD'] - The currency code to use for formatting (default: 'USD').
 * @returns {string} - The formatted currency string.
 */
export default function (amount, currency) {
	currency = currency || 'USD';
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
	}).format(amount);
}
