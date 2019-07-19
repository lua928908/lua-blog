const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';
dotenv.config();

const app = next({ dev });
const handle = app.getRequestHandler(); // next에서 가져온 get 요청 처리기

app.prepare().then(() => {
	const server = express();

	server.use(morgan('dev'));
	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));
	server.use(cookieParser( process.env.COOKIE_SECRET ));
	server.use(expressSession({
		resave: false,
  		saveUninitialized: false,
		secret: process.env.COOKIE_SECRET,
		cookie: {
			//maxAge: 3600000, 1hour
			httpOnly: true,
			secure: false, // https를 쓸 때 true
			domain: prod && '.where-code.com',
		},
  		name: 'exapmle_string_luacddiefkm',
	}));


	// 와일드카드 처리는 별도로 지정해야함
	server.get('/test/:id', (req, res) => {
		return app.render(req, res, '/test', { id: req.params.id });
	});
	server.get('/singlepost/:id', (req, res) => {
		return app.render(req, res, '/singlepost', { id: req.params.id });
	});
	// 일반 요청은 next와 동일하게 처리
	server.get('*', (req, res) => {
		return handle(req, res);
	});


	server.listen(3000, () => {
		console.log('next + express connect');
	});
});