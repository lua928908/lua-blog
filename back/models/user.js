module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		nickname: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		userId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
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
		db.User.hasMany(db.PortfolioPost);
	};

	return User;
};