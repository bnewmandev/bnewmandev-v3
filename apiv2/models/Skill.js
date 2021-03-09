module.exports = (sequelize, Sequelize) => {
	const Skill = sequelize.define("skills", {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			allowNull: false,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		image: {
			type: Sequelize.STRING,
		},
		desc: {
			type: Sequelize.STRING,
		},
	});
	return Skill;
};
