const Mongoose=require('mongoose');
const blogSchema=Mongoose.Schema({
    title:{
        type:String,
        required:true,
        unicque:true
    },
    description:{
        type:String,
        require:true,
        minLength:100
    },
    auther:{//auther is user and we alrady make it so we need user as a referrence
        type: Mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },

},{timestamps:true});
module.exports=Mongoose.model('blog',blogSchema);