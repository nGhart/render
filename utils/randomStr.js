/**
 * Generates a random string of a specific length from a given character context.
 * @param {number} limit - The length of the generated string.
 * @param {string} context - The character context for generating the string.
 * @returns {string} - The randomly generated string.
 */
export default function (limit, context) {
	var len = limit || 12;
	var text = '';
	for (var i = 0; i < len; i++)
		text += context.charAt(Math.floor(Math.random() * context.length));
	return text;
}
