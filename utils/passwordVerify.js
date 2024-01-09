import bcrypt from 'bcryptjs';
import crypto from 'crypto';

/**
 * Verifies a password against a hashed password using the specified hash type.
 * @param {string} passwordText - The password to verify.
 * @param {string} passwordHash - The hashed password to compare against.
 * @param {string} [hashType='bcrypt'] - The hash type. Defaults to 'bcrypt'.
 * @returns {boolean} - `true` if the password is verified, `false` otherwise.
 */
export default function (passwordText, passwordHash, hashType = 'bcrypt') {
	if (hashType === 'bcrypt') {
		return bcrypt.compareSync(passwordText, passwordHash);
	} else {
		let hash = crypto
			.createHash(hashType)
			.update(passwordText, 'utf8')
			.digest('hex');
		return passwordHash === hash;
	}
}
