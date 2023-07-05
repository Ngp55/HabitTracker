// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     name :{
//         type : 'String',
//         required: true
//     },
//     email : {
//         type : 'String',
//         required : true,
//         unique : true
//     },
//     password : {
//         type : 'String',
//         required : true
//     },
// }, 
// {
//     timestamps : true
// }
// );

// const User = mongoose.model('User' , UserSchema);
// module.exports = User;
const mongoose = require("mongoose");

// Schema for habit here

const userSchema = new mongoose.Schema(
   {
    name :{
                type : 'String',
                required: true
        },
    email : {
                type : 'String',
                required : true,
                unique : true
            },
    password : {
                type : 'String',
                required : true
            },
      
    habits: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Habit",
         },
      ],
   },
   {
      timestamp: true,
   }
);

// model creating here

const User = mongoose.model('User', userSchema);
module.exports = User;
