import bcrypt from 'bcryptjs';
import crypto from 'crypto';

/**
 * Hashes a password using the specified hash type.
 * @param {string} passwordText - The password to hash.
 * @param {string} [hashType='bcrypt'] - The hash type. Defaults to 'bcrypt'.
 * @returns {string} - The hashed password.
 */
export default function (passwordText, hashType = 'bcrypt') {
	if (hashType === 'bcrypt') {
		return bcrypt.hashSync(passwordText, 10);
	} else {
		return crypto
			.createHash(hashType)
			.update(passwordText, 'utf8')
			.digest('hex');
	}
}
