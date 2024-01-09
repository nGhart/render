/**
 * Generates a list of random colors.
 * @param {number} len - The length of the list.
 * @returns {Array} - The array containing randomly generated colors.
 */
export default function (len) {
	var colors = [];
	for (var i = 0; i < len; i++) {
		colors.push(this.randomColor());
		// Alternative: colors.push(`hsla(${Math.random() * 360}, 100%, 50%, 1)`);
	}
	return colors;
}
