const { MongoClient,ObjectId } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
console.log("hello",client)
// Database Name
const dbName = 'sivadb';

// for connecting to db
async function connect() {
  // Use connect method to connect to the server
  return new Promise(async(resolve, reject)=> {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    // the following code examples can be pasted here...
    resolve(db);
    console.log(db)
  })
  
}

// using the db to fetch all employees
async function findAllworkouts(){
    return new Promise(async(resolve, reject)=>{
        const db = await connect();
        const collection = db.collection('workouts');
        console.log("collection2",collection)
        const findworkouts = await collection.find({}).toArray();
        console.log('Found documents =>', findworkouts);
        resolve(findworkouts)
        console.log(findworkouts)

        console.log("i am working fine")
    })  
}


async function postAllworkouts(emp){
  return new Promise(async(resolve, reject)=>{
      const db = await connect();
      const collection = db.collection('workouts');
    
      const findworkouts = await collection.insertOne(emp);
      console.log('Found documents =>', findworkouts);
      resolve(findworkouts)


      console.log("collection2",collection)

  
  })  
}







async function findworkout(id){
  return new Promise(async(resolve, reject)=>{
      const db = await connect();
      const collection = db.collection('workouts');
      console.log(id)
      const findworkouts = await collection.find({"_id":ObjectId(id)}).toArray();
      console.log('Found documents =>', findworkouts);
      resolve(findworkouts)


      console.log("collection2",collection)

  
  })  
}

// findAllworkouts()

module.exports={findAllworkouts,findworkout,postAllworkouts}