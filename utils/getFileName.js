/**
 * Extracts and returns the filename from a given URL
 * @param {string} url - The URL containing the filename
 * @returns {string} - The decoded filename
 */
export default function (url) {
	// Extracting the filename from the URL and decoding it
	var filename = url.split('/').pop();
	return decodeURIComponent(filename);
}
