const passport = require('passport');
const local = require('./localStarategy');
const db = require('../models/index');

module.exports = () => {
	passport.serializeUser((user, done) => {
		return done(null, user.id);
	});

	passport.deserializeUser(async (id, done) =>{
		try{
			const user = await db.User.findOne({
				where: { id },
				include: [{
					model: db.PortfolioPost,
					attributes: ['id'],
				}]
			});
			return done(null, user);
		}catch(e){
			console.error(e);
			return done(e);
		}
	});

	local();
};