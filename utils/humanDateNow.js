import moment from 'moment';
/**
 * Returns the current date in a human-readable format.
 * @returns {string} - The human-readable date.
 */
export default function () {
	return moment().format('ll');
}
