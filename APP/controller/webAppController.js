
var dataBaseModel = require('../model/dataBaseModel.js')

function checkLoginCredentials(userCredentials){
    var username = userCredentials.username;
    var password = userCredentials.password;
    return new Promise((resolve,reject)=> {
        dataBaseModel.authenticate(username, password).then(response=>{
            resolve(response)
        })
    })
}
function checkRegisterCat(registerCat){
    return new Promise((resolve,reject)=>{
        dataBaseModel.registerCats(registerCat).then(response=>{
            resolve(response)
        })
    })
}

function checkRegisterMember(userRegister){
    return new Promise((resolve,reject)=> {
        dataBaseModel.registerMember(userRegister).then(response=>{
            resolve(response)
        })
    })
}

function checkRegisterMsg(objmsg){
    return new Promise((resolve,reject)=> {
        dataBaseModel.registerChat(objmsg).then(response=>{
            resolve(response)
        })
    })
}

function checkImage(dataImage){
    return new Promise((resolve, reject)=>{
        dataBaseModel.updateImage(dataImage).then(response=>{
            resolve(response)
        })
    })
}

function checkUpdateCat(objCat){
    return new Promise((resolve, reject)=>{
        dataBaseModel.updateCat(objCat).then(response=>{
            resolve(response)
        })
    })
}

function getGatos(){
    return new Promise((resolve, reject)=>{
        dataBaseModel.findCats().then(response=>{
            resolve(response)
        })
    })
}

function getMatch(email){
    return new Promise((resolve, reject)=>{
        dataBaseModel.findMatchs(email).then(response=>{
            resolve(response)
        })
    })
}

function messageMatch(object){
    var email = object.email
    var idGato = object.idGato
    return new Promise((resolve, reject)=>{
        dataBaseModel.updateCat(idGato,email).then(response=>{
            resolve(response)
        })
    })
}

function getDono(email){
    return new Promise((resolve, reject)=>{
        dataBaseModel.findDono(email).then(response=>{
            resolve(response)
        })
    })
}

module.exports = {
    checkLoginCredentials:checkLoginCredentials,
    checkRegisterMember:checkRegisterMember,
    checkImage:checkImage,
    checkRegisterCat:checkRegisterCat,
    getGatos: getGatos,
    checkUpdateCat:checkUpdateCat,
    checkRegisterMsg:checkRegisterMsg,
    getMatch:getMatch,
    getDono:getDono,
    messageMatch:messageMatch
}