const Mongoose=require('mongoose');
const User=require('./user');
const UserQuery=require('./UserModelImpl.js');
const connect=()=>{
   return  Mongoose.connect('mongodb://localhost:27017/MongoDB');
}
connect()
.then(async connection=>{
console.log("Mongo Db Connection Server!!!!!!!!");
//just for demo
await User.deleteMany({});//delete all entry
//
const user=await User.create({
   firstName:"Amit",
   lstName:"Pandey",
   email:"amity552000@gmail.com",
});
console.log(user);
await User.create([
   {
      firstName:"Sarthak",
      lastName:"jain",
      email:"sj@gmail.com"
   },
   {
      firstName:"Upkar",
      email:"u@gmail.com",
      underAge:true
   }
])
console.log("*****");
const u1=await UserQuery.getAllUsers();
const u2=await UserQuery.getUserByid(user.id);
const u3=await UserQuery.updateUserByid(user.id,{underAge:true})//by default this return old object 
console.log(u1);
console.log(u2);
console.log(u3);
console.log("****************")
})
.catch(err=>console.log(err));
