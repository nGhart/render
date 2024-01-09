/**
 * Checks if a string starts with a specified prefix
 * @param {any} val - The value to check
 * @param {string} prefix - The prefix to check against
 * @returns {boolean} - True if the value starts with the specified prefix, false otherwise
 */
export default function (val, prefix) {
	return val.toString().slice(0, prefix.toString().length) == prefix;
}
