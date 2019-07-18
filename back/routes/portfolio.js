const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/', async (req, res, next) => {
	try{
		const posts = await db.PortfolioPost.findAll({
			where: 1,
			attributes: ['id','auth','nickname','href','title','avatar','description','content','imagePath','createdAt','updatedAt'],
			order: [['createdAt', 'DESC']],
		})
		return res.json(posts);
	}catch(e){
		console.error(e);
		next(e);
	}
});

router.post('/', async (req, res, next) => {
	try{
		const newPost = await db.PortfolioPost.create({
			auth: req.body.auth,
			nickname: req.body.nickname,
			href: req.body.href || null,
			title: req.body.title,
			avatar: req.body.avatar || null,
			description: req.body.description,
			content: req.body.content,
			imagePath: req.body.imagePath || null,
			UserId: req.user.id,
		});
		console.log('뉴포스트 = ', newPost);
		return res.status(200).json(newPost);
	}catch(e){
		console.error(e);
		next(e);
	}
});

module.exports = router;