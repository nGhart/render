import moment from 'moment';
/**
 * Returns a string representing the time of the given date in a human-readable format (e.g., 02:30pm).
 * @param {string} strdate - The input date string.
 * @returns {string} - The human-readable time.
 */
export default function (strdate) {
	return moment(strdate).format('LT');
}
