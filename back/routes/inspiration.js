const express = require('express');
const router = express.Router();
const db = require('../models/index');

// 글쓰기
router.post('/', async (req, res, next) => {
	try{
		const newPost = await db.Inspiration.create({
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

// 글목록 조회
router.get('/', async (req, res, next) => {
	try{
		const posts = await db.Inspiration.findAll({
			where: 1,
			attributes: ['id','auth','nickname','href','title','avatar','description','content','imagePath','star','createdAt','updatedAt'],
			order: [['createdAt', 'DESC']],
		})
		return res.json(posts);
	}catch(e){
		console.error(e);
		next(e);
	}
});

// 싱글포스트 조회
router.get('/:id', async (req, res, next) => {
	try{
		const post = await db.Inspiration.findOne({
			where: { id: req.params.id, },
		});
		console.log('포스트', post);
		return res.status(200).json(post);
	}catch(e){
		console.error(e);
		next(e);
	}
});

module.exports = router;