const uuid = require("uuid");

const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_STRING);

class User extends Model {}
User.init(
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: "Skill",
	}
);

module.exports = Skill;
