const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	let token = req.header("auth-token");
	if (!token) {
		token = req.session.user;
	}
	if (!token) return res.status(401).json({ error: "Access denied" });
	try {
		const verified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified;
		console.log(verified);
		next();
	} catch (error) {
		res.status(400).json({ error: "Token is not valid" });
		console.log(error);
	}
};
module.exports = verifyToken;
