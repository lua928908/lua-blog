module.exports = (sequelize, DataTypes) => {
	const PortfolioPost = sequelize.define('portfolioPost', {
		auth: {
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
			type: DataTypes.TEXT(),
			allowNull: false,
		},
		imagePath: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci',
		timestamps: true,
		paranoid: true,
	})
	return PortfolioPost;
};