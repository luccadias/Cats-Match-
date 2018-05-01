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
    var registerCat = req.body;
    webAppController.checkRegisterCat(registerCat)
        .then((response)=>{
            res.status(200).send("Gato cadastrado com sucesso!!");
        })
        .catch((error)=>{
            console.log("<<<<<<Resquest error>>>>>>>>>\n"+error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

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
    console.log(req.files.sampleData.data)
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