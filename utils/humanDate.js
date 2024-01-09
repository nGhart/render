import moment from 'moment';
/**
 * Returns a string date in a human-readable format (e.g., 2, Dec 2018).
 * @param {string} strdate - The input date string.
 * @returns {string} - The human-readable date.
 */
export default function (strdate) {
	return moment(strdate).format('ll');
}
