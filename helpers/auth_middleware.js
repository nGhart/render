import passport from "passport";
import passportLogin from "./passport-auth.js";
async function passportJwtLogin(req, res, next) {
  passportLogin();
  passport.authenticate("jwt", async (err, user, info) => {
    req.login(user, { session: false }, async (error) => {});
    return next();
  })(req, res, next);
}
async function authMiddleware(req, res, next) {
  try {
    const publicPages = req.path.startsWith("/auth");
    if (req.user || publicPages) {
      return next();
    }

    return res.unauthorized();
  } catch (err) {
    return res.serverError(err);
  }
}
export { authMiddleware, passportJwtLogin };
