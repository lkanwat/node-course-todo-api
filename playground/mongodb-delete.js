// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDb Server');
  }
  console.log('Connected to MongoDb Server');
// deleteMany
// db.collection('Users').deleteMany({name: 'Mike'}).then((result)=>{
//   console.log(result);
// });
//deleteOne
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });
db.collection('Users').findOneAndDelete({id: new ObjectID("5965d6a55ba4f20e1a6b2199")}.then((results)=>{
  console.log(JSON.stringify(results,undefined,2));
}));

//findOneandDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// });




  // db.close();
});
