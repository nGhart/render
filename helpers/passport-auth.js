import passport from 'passport';
import PassportJwt from 'passport-jwt';
import config from '../config.js';
import DB from '../models/db.js';
export default function () {
	const JwtStrategy = PassportJwt.Strategy;
	const ExtractJwt = PassportJwt.ExtractJwt;
	const opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = config.auth.userTokenSecret;
	passport.use(
		new JwtStrategy(opts, async (jwt_payload, done) => {
			try {
				let userId = jwt_payload.sub; //get user id from jwt
				if (userId) {
					let user = await DB.Users.findOne({
						where: {
							user_id: userId,
						},
						attributes: {
							exclude: ['password'],
						},
					});
					done(null, user);
				} else {
					done(null, null);
				}
			} catch (err) {
				done(err, null);
			}
		})
	);
}
