// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

const id = new ObjectID()

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable connect to database')
    }

    console.log('Connected correctly!')

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 27
    }).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("614854f684d91c3950ceadf8")
    // }, {
    //     $set: {
    //         name: 'vanlinh',
    //         age: 27
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({name: 'zlatan'}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 28}).toArray((error, users) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(users)
    // })

    // db.collection('users').find({ age: 28}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'zlatan',
    //     age: 28
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result) 
    // })

    // db.collection('users').insertMany([
    //     {
    //         'name': 'zlatan',
    //         'age': 28
    //     },
    //     {
    //         'name': 'hehe',
    //         'age': 19,
    //         'description': 'second record',
    //         'complete': true
    //     },
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    // })
    
    // db.collection('tasks').insertMany([
    //     {
    //         'description': 'first record',
    //         'complete': true
    //     },
    //     {
    //         'description': 'second record',
    //         'complete': true
    //     },
    //     {
    //         'description': 'third record',
    //         'complete': false
    //     },
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    // })
})