import fs from 'fs';
import basePath from './basepath.js';

/**
 * Deletes a file after import
 * @param {string} fpath - The file path
 */
export default function (fpath) {
	// Constructing the full path
	let fullPath = basePath + '/' + fpath;

	// Checking if the file exists before attempting to delete
	if (fs.existsSync(fullPath)) {
		// Deleting the file
		fs.unlinkSync(fullPath);
	}
}
