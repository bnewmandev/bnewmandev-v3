const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../model/model");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

require("dotenv").config();

passport.use(
	"signup",
	new localStrategy(
		{
			usernameField: "username",
			passwordField: "password",
		},
		async (username, password, done) => {
			try {
				const user = await UserModel.create({ username, password });
				return done(null, user);
			} catch (err) {
				done(err);
			}
		}
	)
);

passport.use(
	"login",
	{
		usernameField: "username",
		passwordField: "password",
	},
	async (username, password, done) => {
		try {
			const user = await UserModel.findOne({ username });
			if (!user) {
				return done(null, false, { message: "Incorrect Username or Password" });
			}
			const validate = await user.isValidPassword(password); // ERROR IS HERE!

			if (!validate) {
				return done(null, false, { message: "Incorrect Username or Password" });
			}

			return done(null, user, { message: "Logged in Successfully" });
		} catch (err) {
			return done(err);
		}
	}
);

passport.use(
	new JWTstrategy(
		{
			secretOrKey: process.env.SECRET_KEY,
			jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
		},
		async (token, done) => {
			try {
				return done(null, token.user);
			} catch (error) {
				done(error);
			}
		}
	)
);
