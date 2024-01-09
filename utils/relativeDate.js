import moment from 'moment';
/**
 * Returns a string date in a relative format (e.g., 31 minutes ago, 5 days from now).
 * Supports both date strings and timestamps.
 * @param {string|number} strdate - The input date string or timestamp.
 * @returns {string} - The relative date.
 */
export default function (strdate) {
	return moment(strdate).fromNow();
}
