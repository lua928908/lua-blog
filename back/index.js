const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const db = require('./models');
const portfolioRouter = require('./routes/portfolio');
const userRouter = require('./routes/user');
const prod = process.env.NODE_ENV === 'production';

dotenv.config();
db.sequelize.sync();

if (prod) {
	app.use(hpp());
	app.use(helmet());
	app.use(morgan('combined'));
	app.use(cors({
		origin: 'http://where-code.com',
		credentials: true,
	}));
} else {
	app.use(morgan('dev'));
	app.use(cors({
		origin: true,
		credentials: true,
	}));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: prod, // https를 쓸 때 true
    domain: prod && '.where-code.com',
  },
  name: 'rnbck',
}));
app.use('/api/user', userRouter)
app.use('/api/portfolio', portfolioRouter)
app.get('/', (req, res) => {
	res.send('메인입니다.');
});

app.listen(3001, () => {
	console.log(`connect 3001 port`);
});