const uuid = require("uuid");

const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_STRING);

class Skill extends Model {}
Skill.init(
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
		},
		desc: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: "Skill",
	}
);

module.exports = Skill;
