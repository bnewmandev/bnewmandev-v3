module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("users", {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			allowNull: false,
		},
		username: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
		},
		permissions: {
			type: Sequelize.ARRAY(Sequelize.STRING),
		},
	});
	return User;
};
