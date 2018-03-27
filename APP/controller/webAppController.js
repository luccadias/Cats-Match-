
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

function checkRegisterMember(userRegister){
    return new Promise((resolve,reject)=> {
        dataBaseModel.registerMember(userRegister).then(response=>{
            resolve(response)
        })
    })
}

module.exports = {
    checkLoginCredentials:checkLoginCredentials,
    checkRegisterMember:checkRegisterMember
}