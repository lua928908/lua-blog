module.exports = (sequelize, DataTypes) => {
	const Inspiration = sequelize.define('inspiration', {
		auth: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		nickname: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		href: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
		title: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		avatar: {
			type: DataTypes.STRING(40),
			allowNull: true,
		},
		description: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		content: {
			type: DataTypes.JSON,
			allowNull: false,
		},
		imagePath: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
		star: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci',
		timestamps: true,
		paranoid: true,
	})

	Inspiration.associate = (db) => {
		db.Inspiration.belongsTo(db.User);
	};

	return Inspiration;
};