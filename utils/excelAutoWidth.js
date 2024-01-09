/**
 * Automatically adjusts the width of each column in an Excel worksheet based on the content.
 * @param {object} worksheet - The Excel worksheet.
 * @param {number} [minimalWidth=10] - The minimal width for each column.
 */
export default function (worksheet, minimalWidth = 10) {
	worksheet.columns.forEach((column) => {
		let maxColumnLength = 0;
		column.eachCell({ includeEmpty: true }, (cell) => {
			maxColumnLength = Math.max(
				maxColumnLength,
				minimalWidth,
				cell.value ? cell.value.toString().length : 0
			);
		});
		column.width = maxColumnLength + 5;
	});
}
