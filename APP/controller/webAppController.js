
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

function checkImage(dataImage){
    return new Promise((resolve, reject)=>{
        dataBaseModel.updateImage(dataImage).then(response=>{
            resolve(response)
        })
    })
}

module.exports = {
    checkLoginCredentials:checkLoginCredentials,
    checkRegisterMember:checkRegisterMember,
    checkImage:checkImage,
    checkRegisterCat:checkRegisterCat
}