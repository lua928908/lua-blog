const express = require('express');
const router = express.Router();
const db = require('../models/index');
const bcrypt = require('bcrypt');

// 회원가입
router.post('/', async (req, res, next) => {
	console.log(req.body);
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
		const newUser = await db.User.create({
			email: req.body.email,
			nickname: req.body.nickname,
			password: hashedPassword,
			phone: (req.body.prefix + req.body.phone) || null,
			website: req.body.website || null,
		});
		console.log(newUser);
		return res.status(200).json(newUser);
	} catch (e) {
		console.error(e);
		return next(e);
	}
});

module.exports = router;