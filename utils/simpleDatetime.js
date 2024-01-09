import moment from 'moment';
/**
 * Returns a string date in a simple human-readable format (e.g., Jun 9 2014 9:32 PM).
 * @param {string} strdate - The input date string.
 * @returns {string} - The human-readable date.
 */
export default function (strdate) {
	return moment(strdate).format('MMM Do h:mm');
}
