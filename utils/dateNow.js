import moment from 'moment';

/**
 * Returns the current date in the format 'YYYY-MM-DD'.
 * @returns {string} - The current date in the format 'YYYY-MM-DD'.
 */
export default function () {
	return moment().format('YYYY-MM-DD');
}
