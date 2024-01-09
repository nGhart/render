/**
 * Formats validation errors into an array of error messages
 * @param {Array} errors - The array of validation errors
 * @returns {Array} - The array of formatted error messages
 */
export default function (errors) {
	// Initializing an array to store formatted error messages
	let errorMsgs = [];

	// Iterating through the validation errors and formatting them
	errors.forEach((item) => errorMsgs.push(item.param + ': ' + item.msg));

	// Returning the array of formatted error messages
	return errorMsgs;
}
