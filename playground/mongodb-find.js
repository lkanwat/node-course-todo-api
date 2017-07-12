// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDb Server');
  }
  console.log('Connected to MongoDb Server');
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('5965d3bae527af0ddb2578d3')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

    db.collection('Todos').find({name:'Mike'}).toArray().then((docs)=>{
      console.log(JSON.stringify(docs,undefined,2));
      // console.log(JSON.stringify(count,undefined,2));
    },(err)=>{
      console.log('Unable to fetch todos',err);
    });

  // db.close();
});
