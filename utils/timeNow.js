import moment from 'moment';
/**
 * Returns the current time in the format 'HH:mm:ss'.
 * @returns {string} - The current time in the format 'HH:mm:ss'.
 */
export default function () {
	return moment().format('HH:mm:ss');
}
