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
            "id": uuidv4(),
            "nome": req.body.nome_gato,
            "idade": req.body.idade,
            "raca": req.body.raca,
            "desc": req.body.desc_pet,
            "email":req.body.email,
            "status": true      
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

router.post('/registerChat', function (req, res) {
    var objChat = req.body;
    webAppController.checkRegisterMsg(objChat)
        .then((response) => {
            res.status(200).send("Mensagem cadastrada");
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

router.post('/updateCat', function (req, res) {
    var objCat = req.body;
    webAppController.checkUpdateCat(objCat)
        .then((response) => {
            res.status(200).send("Gato atualizado");
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

router.post('/updateMsg', function (req, res) {
    var objMsg = req.body;
    console.log(objMsg)
    // webAppController.checkUpdateCat(objMsg)
    //     .then((response) => {
    //         res.status(200).send("Gato atualizado");
    //     })
    //     .catch((error) => {
    //         console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
    //         res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
    //     });
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

router.post('/updateMessage', function (req, res) {
    console.log(req.body)
    // webAppController.messageMatch(req.body)
    //     .then((response) => {
    //         res.status(200).send("Message Atualizada");
    //     })
    //     .catch((error) => {
    //         console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
    //         res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
    //     });
});

router.get('/getMatchs/:email', function (req, res) {
    webAppController.getMatch(req.params.email)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

router.get('/getDono/:email', function (req, res) {
    webAppController.getDono(req.params.email)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

router.get('/getGatos', function (req, res) {
    webAppController.getGatos()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

module.exports = router;