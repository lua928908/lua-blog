module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		nickname: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		phone: {
			type: DataTypes.INTEGER(15),
			allowNull: true,
		},
		website: {
			type: DataTypes.STRING(30),
			allowNull: true,
		},
		admin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci',
		timestamps: true,
		paranoid: true,
	});

	User.associate = (db) => {
		db.User.hasMany(db.Post);
	};

	return User;
};