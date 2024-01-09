/**
 * Returns the current timestamp (UNIX timestamp in seconds).
 * @returns {number} - The current timestamp.
 */
export default function () {
	return Math.floor(new Date() / 1000);
}
