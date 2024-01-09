import fs from 'fs';
import basePath from './basepath.js';

/**
 * Writes content to a log file with an optional prefix
 * @param {string} content - The content to be written to the log
 * @param {string} [prefix=''] - An optional prefix for the log file name
 */
export default function (content, prefix = '') {
	try {
		// Generating today's date for log file naming
		const todaysDate = new Date().toISOString().slice(0, 10);

		// Creating a write stream for the log file
		const logFile = fs.createWriteStream(
			`${basePath}/logs/${prefix}${todaysDate}.log`,
			{ flags: 'a' }
		);

		// Generating the current timestamp for the log entry
		const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

		// Writing the log entry with timestamp and content
		logFile.write(`${now} -> ${content}\n`);
	} catch (e) {
		// Handling any potential errors, but not taking any specific action
	}
}
