module.export = (sequelize, DataTypes) => {
	const PortfolioPost = sequelize.define('PortfolioPost', {
		href: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
		title: {
			type: DataTypes.STRING(40),
			allowNull: true,
		},
		avatar: {
			type: DataTypes.STRING(40),
			allowNull: true,
		},
		description: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		content: {
			type: DataTypes.TEXT(),
			allowNull: true,
		},
		imagePath: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
	}, {
		charset: 'utf-8',
		collate: 'utf8_general_ci',
		timestamps: true,
		paranoid: true,
	})
	return PortfolioPost;
};