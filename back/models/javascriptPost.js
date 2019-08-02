module.exports = (sequelize, DataTypes) => {
	const JavascriptPost = sequelize.define('javascriptPost', {
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
			type: DataTypes.TEXT(),
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

	JavascriptPost.associate = (db) => {
		db.JavascriptPost.belongsTo(db.User);
	};

	return JavascriptPost;
};