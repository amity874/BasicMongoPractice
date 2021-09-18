var Mongoose=require('mongoose');
const connect=()=>{
   return  Mongoose.connect('mongodb://localhost:27017/MongoDB');
}
connect()
.then(connection=>{
console.log("Mongo Db Connection Server");
})
.catch(err=>console.log(err));