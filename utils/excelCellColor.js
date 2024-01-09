/**
 * Applies a background color to specific cells in an Excel row.
 * @param {object} row - The Excel row.
 * @param {Array} [cells=[0]] - The indices of the cells to color.
 * @param {string} [color='ccfbdb'] - The color in hex format (e.g., 'ccfbdb').
 */
export default function (row, cells = [0], color = 'ccfbdb') {
	cells.forEach((key) => {
		row.getCell(key).fill = {
			type: 'pattern',
			pattern: 'solid',
			fgColor: { argb: color },
		};
	});
}
