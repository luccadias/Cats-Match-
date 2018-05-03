var router = require('express').Router();
var webAppController = require("../controller/webAppController.js");

router.post('/loginAuth', function (req, res) {
    var userCredentials = req.body;
    webAppController.checkLoginCredentials(userCredentials)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

router.post('/registerCat',function(req,res){
    console.log(req.body)
    var registerCat = req.body;
    var base64 = Buffer.from(req.files.fotogato.data).toString('base64')
      console.log(base64)
    var objCat = {
            "image": base64,
            "id": uuidv4,
            "nome": req.body.nome_gato,
            "idade": req.body.idade,
            "raca": req.body.raca,
            "desc": req.body.desc_pet,
            "email":req.body.email        
        }
        console.log(objCat);
    webAppController.checkRegisterCat(objCat)
    .then((response) => {
        res.status(200).send("Gato Cadastrado com sucesso!!");
        console.log("Certo")
    })
    .catch((error) => {
        console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
        res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
    });
});

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
router.post('/registerMember', function (req, res) {
    var userRegister = req.body;
    webAppController.checkRegisterMember(userRegister)
        .then((response) => {
            res.status(200).send("Usuário Cadastrado com sucesso!!");
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});
router.post('/updateImage', function (req, res) {
    var base64 = Buffer.from(req.files.sampleData.data).toString('base64')
    var objData = {
        "image": base64,
        "email": req.body.emailuser
    }
    webAppController.checkImage(objData)
        .then((response) => {
            res.status(200).send("Perfil Update");
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

module.exports = router;