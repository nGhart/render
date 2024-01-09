// Importing custom error constants and utility functions
import utils from '../utils/utils.js';
import {
	AccessForbbiden,
	BadRequest,
	RecordNotFound,
	ServerError,
	UnauthorizedAccess,
} from './constants.js';

// Middleware function for common tasks before handling requests
export default function (app) {
	// Middleware to handle request body sanitization
	app.use((req, res, next) => {
		if (req.body) {
			// Store original request body and sanitize input
			req.formData = req.body;
			utils.sanitizeInput(req.body);
		}
		next();
	});

	// Custom response methods for common HTTP status codes
	app.response.ok = function (message) {
		return this.send(message);
	};

	app.response.notFound = function (message) {
		message = message || RecordNotFound;
		return this.status(404).send(message);
	};

	app.response.badRequest = function (message) {
		message = message || BadRequest;
		return this.status(400).send(message);
	};

	app.response.forbidden = function (message) {
		message = message || AccessForbbiden;
		return this.status(403).send(message);
	};

	app.response.unauthorized = function (message) {
		message = message || UnauthorizedAccess;
		return this.status(401).send(message);
	};

	app.response.serverError = function (message) {
		// Log server error with stack trace
		console.log(
			'\n\n-------------------------- Exception Stack Trace --------------------------\n\n'
		);
		console.error('Server Request Error', message);
		console.log(
			'\n\n-------------------------- End of Exception Stack Trace --------------------------\n\n'
		);
		return this.status(500).send(ServerError);
	};

	// Custom method for generating PDFs using puppeteer (commented out for now)
	// ...

	// Custom method for generating PDFs for email using puppeteer (commented out for now)
	// ...

	// Custom method for writing to audit log (commented out for now)
	// ...
}
