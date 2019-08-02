const express = require('express');
const router = express.Router();
const db = require('../models/index');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../middleware/index');

// 로그인
router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if(err){
			console.error(err);
			next(err);
		}
		if(info){
			return res.status(401).send(info.reason);
		}
		return req.login(user, async (loginErr) => {
			if(loginErr){
				return next(loginErr);
			}
			const fullUser = await db.User.findOne({
				where: { id: user.id },
				include: [{
					model: db.PortfolioPost,
					attributes: ['id'],
				}],
				attributes: ['id', 'email', 'nickname', 'phone', 'website', 'admin'], // 속성 필터링
			});
			return res.json(fullUser);
		});
	})(req, res, next);
})
// 로그아웃
router.post('/logout', (req, res, next) => {
	req.logout();
	req.session.destroy();
	res.send('로그아웃');
});

// 회원가입
router.post('/', async (req, res, next) => {
	try {
		const exUser = await db.User.findOne({
			where: {
				email: req.body.email,
			},
		});
		if(exUser){
			return res.status(403).send('이미 사용중인 아이디입니다.');
		}
		const hashedPassword = await bcrypt.hash(req.body.password, 12);
		const phoneNumber = req.body.phone ? (req.body.prefix + req.body.phone) : null;
		const newUser = await db.User.create({
			email: req.body.email,
			nickname: req.body.nickname,
			password: hashedPassword,
			phone: phoneNumber,
			website: req.body.website || null,
		});
		return res.status(200).json(newUser);
	} catch (e) {
		console.error(e);
		return next(e);
	}
});

// 로그인한 유저 정보 받아오기
router.get('/', isLoggedIn, async (req, res, next) => {
	try{
		const user = Object.assign({}, req.user.toJSON());
		delete user.password;
		return res.json(user);
	}catch(e){
		console.error(e);
		next(e);
	}
});

// 사용자 피드백 등록
router.post('/feedback', async (req, res, next) => {
	try{
		const newFeedback = await db.Feedback.create({
			gender: req.body.gender,
			email: req.body.email,
			rateState: req.body.rateState,
			designScore: req.body.designScore,
			uxScore: req.body.uxScore,
			contentScore: req.body.contentScore,
			speedScore: req.body.speedScore,
			techList: req.body.techList,
			bookList: req.body.bookList,
			userText: req.body.userText,
		});
		return res.json(newFeedback);
	}catch(e){
		console.error(e);
		next(e);
	}
});

module.exports = router;