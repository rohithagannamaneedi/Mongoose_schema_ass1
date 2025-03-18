const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    
    username:{
        type: String,
        required: true,
        unique: true
        
    },

    email: {
        type: String,
        required: true,
        unique: true
        
      },

      password: {
        type: String,
        required: true
      },
      roles: {
        type: [String],
        default:['user']
        
      },

      profile:{
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        age:{
            type:Number
        }
      },
      lastLogin:{
        type:Date
      }
      


},{
    timeStamps:true
});
module.exports = mongoose.model('User',UserSchema);