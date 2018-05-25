var databaseServiceCredentials = require('../credentials/mongoDb.json');
const MongoClient = require('mongodb').MongoClient;

function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_pessoas');
            
            collection.find({ 'username': username, 'password': password }).toArray(function (err, docs) {
                if (err) reject(err)
                if (docs.length != 0) {
                    //let resultWeb = ({'status':200,'username': docs[0].username, 'email': docs[0].email})
                    resolve(docs[0]);
                } else { resolve(({ 'status': 401 })) }
            });
        }
        })
    })
}
function registerCats(credentialsPayload){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(databaseServiceCredentials.mongodb,function(err,db){
            if(err) reject(err)
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_gato');
            collection.insertMany([credentialsPayload],function(err,result){
                resolve(result);
            });
        });
    });
};
function updateCat(objCat){
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_gato');
            collection.updateOne({ id: objCat.id }, { $set: { status: false } }, function (err, result) {
                resolve(result);
            });
        }
        })
    })
}
function registerMember(credentialsPayload) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
                const dbo = db.db(databaseServiceCredentials.dbName);
                const collection = dbo.collection('dados_pessoas');
                collection.insertMany([credentialsPayload], function (err, result) {
                    resolve(result);
                });
            }
        })
        
    })
}

function registerChat(credentialsPayload) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
                const dbo = db.db(databaseServiceCredentials.dbName);
                const collection = dbo.collection('dados_chat');
                collection.insertMany([credentialsPayload], function (err, result) {
                    resolve(result);
                });
            }
        })
        
    })
}

function updateImage(data) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_pessoas');
            collection.updateOne({ email: data.email }, { $set: { image: data.image } }, function (err, result) {
                resolve(result);
            });
        }
        })
    })
}

function findUser(indicePessoa) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_pessoas');
            collection.update({ $oid: "5ab936d16bf97849d0f8a28e" }, { $set: "tey" }, function (err, result) {
                resolve(result);
            });
        }
        })
        
    })
}

function findCats() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_gato');
            collection.find({}).toArray(function (err, docs) {
                if (err) reject(err)
                console.log(docs)
                if (docs.length != 0) {
                    resolve(docs)
                } else { resolve(docs) }
            });
        }
        })
    })
}

function updateMessage(id,message){
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_chat');
            collection.updateOne({ idGato: idGato }, { $set: { message: message } }, function (err, result) {
                resolve(result);
            });
        }
        })
    })
}

function findMatchs(email) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_chat');
            collection.find({"match": email}).toArray(function (err, docs) {
                if (err) reject(err)
                console.log(docs)
                if (docs.length != 0) {
                    resolve(docs)
                } else { resolve(docs) }
            });
        }
        })
    })
}

function findDono(email) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            if (db) {
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_chat');
            collection.find({"dono": email}).toArray(function (err, docs) {
                if (err) reject(err)
                console.log(docs)
                if (docs.length != 0) {
                    resolve(docs)
                } else { resolve(docs) }
            });
        }
        })
    })
}



module.exports = {
    authenticate: authenticate,
    registerMember: registerMember,
    updateImage: updateImage,
    registerCats:registerCats, 
    findCats:findCats,
    updateCat:updateCat,
    registerChat:registerChat,
    findMatchs:findMatchs,
    findDono:findDono,
    updateMessage:updateMessage
}