var databaseServiceCredentials = require('../credentials/mongoDb.json');
const MongoClient = require('mongodb').MongoClient;

function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_pessoas');
            collection.find({ 'username': username, 'password': password}).toArray(function (err, docs) {
                if (err) reject(err)
                if(docs.length != 0 ){
                    let resultWeb = ({'status':200,'username': docs[0].username, 'email': docs[0].email})
                    resolve(resultWeb);
                } else { resolve(({'status':401}))}
            });
        })
    })
}

function registerMember(credentialsPayload) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseServiceCredentials.mongodb, function (err, db) {
            if (err) reject(err)
            const dbo = db.db(databaseServiceCredentials.dbName);
            const collection = dbo.collection('dados_pessoas');
            collection.insertMany([credentialsPayload], function (err, result) {
                resolve(result);
            });
        })
    })
}

module.exports = {
    authenticate: authenticate,
    registerMember: registerMember
}

// MongoClient.connect(url, function (err, db) {
// 	if (err) console.log(err);
// 	console.log("Database connect!");
// 	const dbo = db.db(dbName);
// 	getDados(dbo)
// });

// function getDados(dbo){
// 	const collection = dbo.collection('Caixa');
// 	collection.find({}).toArray(function (err, docs) {
// 		assert.equal(err, null);
// 		console.log(docs)
// 	});
// }