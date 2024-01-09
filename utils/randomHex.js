import crypto from 'crypto';
/**
 * Generates a random hexadecimal string of a specified length.
 * @param {number} limit - The length of the generated string (default: 16).
 * @returns {string} - The randomly generated hexadecimal string.
 */
export default function (limit = 16) {
	const randomString = crypto.randomBytes(limit).toString('hex');
	return randomString;
}
