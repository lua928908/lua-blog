const express = require('express');
const router = express.Router();
const db = require('../models/index');
const { isLoggedIn, isNotLoggedIn } = require('../middleware/index');

// 글쓰기
router.post('/', isLoggedIn, async (req, res, next) => {
	try{
		const newPost = await db.Post.create({
			auth: req.body.auth,
			nickname: req.body.nickname,
			href: req.body.href || null,
			title: req.body.title,
			avatar: req.body.avatar || null,
			description: req.body.description,
			content: req.body.content,
			imagePath: req.body.imagePath || null,
			category: req.body.category,
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
router.post('/find', async (req, res, next) => {
	try{
		const posts = await db.Post.findAll({
			where: { category: req.body.category },
			attributes: ['id','auth','nickname','href','title','avatar','description','content','imagePath','category', 'star','createdAt','updatedAt'],
			order: [['createdAt', 'DESC']],
			include: [{
				model: db.User,
				as: 'Likers',
			}],
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
		const post = await db.Post.findOne({
			where: { id: req.params.id, },
			include: [{
				model: db.User,
				through: 'Like',
				as: 'Likers',
				attributes: ['id'],
			}]
		});
		console.log('포스트', post);
		return res.status(200).json(post);
	}catch(e){
		console.error(e);
		next(e);
	}
});

// 좋아요
router.post('/:id/like', isLoggedIn, async (req, res, next) => {
	try{
		const post = await db.Post.findOne({ where: { id: req.params.id } });
		if( !post ){
			return res.status(404).send('포스트가 존재하지 않습니다.');
		}
		await post.addLiker(req.user.id);
		res.json({ userId: req.user.id });
	}catch(e){
		console.error(e);
		next(e);
	}
});

// 좋아요 취소
router.delete('/:id/like', isLoggedIn, async (req, res, next) => {
	try{
		const post = await db.Post.findOne({ where: { id: req.params.id } });
		if( !post ){
			return res.status(404).send('포스트가 존재하지 않습니다.');
		}
		await post.removeLiker(req.user.id);
		res.json({ userId: req.user.id });
	}catch(e){
		console.error(e);
		next(e);
	}
});

module.exports = router;