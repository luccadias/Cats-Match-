var router = require('express').Router();

router.get('/', function (req, res) {
	res.render('./index.ejs');
});

router.get('/register', function (req, res) {
	res.render('./register.ejs');
});

router.get('/home', function (req, res) {
	res.render('./home.ejs');
});

module.exports = router;