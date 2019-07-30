module.exports = (sequelize, DataTypes) => {
	const Feedback = sequelize.define('Feedback', {
		gender: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		rateState: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		designScore: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		uxScore: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		contentScore: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		speedScore: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		techList: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		bookList: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		userText: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci',
		timestamps: true,
		paranoid: true,
	})

	Feedback.associate = (db) => {
		db.Feedback.belongsTo(db.User);
	};

	return Feedback;
};