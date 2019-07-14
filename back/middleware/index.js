exports.isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.status(403).send('로그인 필요');
	}
};
exports.isNotLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
		next();
	} else {
		res.redirect('/');
	}
};
/*
	passport에서 로그인에 성공하면
	req.user, req.login, req.logout 와 같은 기능을 사용할 수 있게된다
	req.isAuthenticated 는 로그인 여부를 알 수 있다.
*/