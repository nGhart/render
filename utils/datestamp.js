import moment from 'moment';
/**
 * Returns the current date in the specified format.
 * @param {string} format - The format for the date (default: 'YYMMDDHHmmss').
 * @returns {string} - The formatted date.
 */
export default function (format = 'YYMMDDHHmmss') {
	return moment().format(format);
}
