const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.post('/', async (req, res) => {
	console.log(req.body);
	const newPost = db.PortfolioPost.create({
		auth: req.body.auth,
		href: req.body.href || null,
		title: req.body.title,
		avatar: req.body.avatar || null,
		description: req.body.description,
		content: req.body.content,
		imagePath: req.body.imagePath || null,
	});
	return res.status(200).json(newPost);
});

module.exports = router;