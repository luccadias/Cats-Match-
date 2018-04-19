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

router.get('/registerCat', function (req, res) {
	res.render('./registerCat.ejs');
});

router.get('/matchs', function (req, res) {
	res.render('./matchs.ejs');
});

module.exports = router;