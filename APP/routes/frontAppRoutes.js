var router = require('express').Router();
var webAppController = require("../controller/webAppController.js");
var gatos = undefined
var gatolength = 0
router.get('/', function (req, res) {
	res.render('./index.ejs');
});

router.get('/register', function (req, res) {
	res.render('./register.ejs');
});

router.get('/home', function (req, res) {
	// if (gatos != undefined && gatolength == gatos.length){
	// 	res.render('./home.ejs',{gatos: gatos});
	// } else {
	//res.render('./loading.ejs');
	webAppController.getGatos()
		.then((response) => {
			gatos = response
			gatolength = response.length
			var listaGatos = []
			// res.status(200).send(response);
			gatos.forEach(element => {
				if (element.status) {
					listaGatos.push(element)
				} else {
					
				}
			});
			res.render('./home.ejs', { gatos: listaGatos });
		})
		.catch((error) => {
			console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
			res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
		});
	//}
});

router.get('/registerCat', function (req, res) {
	res.render('./registerCat.ejs');
});

router.get('/matchs', function (req, res) {
	res.render('./matchs.ejs');
});

module.exports = router;