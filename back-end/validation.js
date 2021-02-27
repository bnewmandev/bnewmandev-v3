const Joi = require("@hapi/joi");

const registerValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(4).max(16).required(),
		password: Joi.string().min(6).max(2048).required(),
	});
	return schema.validate(data);
};

const loginValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(4).max(16).required(),
		password: Joi.string().min(6).max(2048).required(),
	});
	return schema.validate(data);
};
module.exports = { registerValidation, loginValidation };
