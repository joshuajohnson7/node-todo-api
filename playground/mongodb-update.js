// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err){
    return console.log('Unable to connect to MongoDB Server');
}
console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5edf7ea8c3bce82ce05443f1')
    // }, {
    //     $set: {
    //     completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5edf91af6f8c60f5f0b6984b')
      }, {
        $set: {
          name: 'Joshhh420'
        },
        $inc: {
          age: 1
        }
      }, {
        returnOriginal: false
      }).then((result) => {
        console.log(result);
      });
    

//db.close();
});