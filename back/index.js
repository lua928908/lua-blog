const express = require('express');
const app = express();
const dotenv = require('dotenv');

const portfolioRouter = require('./routes/portfolio');

dotenv.config();

app.get('/', (req, res) => {
	res.send('메인입니다.');
});
app.use('/portfolio', portfolioRouter)

app.listen(3001, () => {
	console.log(`connect 3001 port`);
});