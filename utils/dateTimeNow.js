import moment from 'moment';
/**
 * Returns the current date and time in the format 'YYYY-MM-DD HH:mm:ss'.
 * @returns {string} - The current date and time in the format 'YYYY-MM-DD HH:mm:ss'.
 */
export default function () {
	return moment().format('YYYY-MM-DD HH:mm:ss');
}
