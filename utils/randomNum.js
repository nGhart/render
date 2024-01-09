/**
 * Generates a random string of a specific length containing only numeric characters.
 * @param {number} length - The length of the generated numeric string (default: 6).
 * @returns {string} - The randomly generated numeric string.
 */
export default function (length = 6) {
	var randomNum = (
		Math.pow(10, length)
			.toString()
			.slice(length - 1) +
		Math.floor(Math.random() * Math.pow(10, length) + 1).toString()
	).slice(-length);
	return randomNum;
}
