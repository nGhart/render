/**
 * Truncates a string and adds ellipsis if it exceeds the specified length.
 * @param {string} str - The input string.
 * @param {number} length - The maximum length of the truncated string.
 * @param {string} [join='...'] - The string to append if the input string is truncated (default: '...').
 * @returns {string} - The truncated string.
 */
export default function (str, length, join) {
	join = join || '...';
	var dots = str.length > length ? join : '';
	return str.substring(0, length) + dots;
}
