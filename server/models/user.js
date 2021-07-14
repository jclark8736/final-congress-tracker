const { Schema, model } = require('mongoose');



const UserSchema = new Schema
({


      firstName: {
        type: String,
        required: true,
        trim:true
      },
      lastName: {
        type: String,
        required: true,
        trim:true
      },
      
      email: {
        type: String,
        required:true,
        unique: true,
      },
      zip: {
        type: Number,
        required:true,
        min: 5
        
      },
      password: {
        type: String,
        required:true
        },
      favorites: [
        {
          type:Schema.Types.ObjectId, 
          ref: "Favorite"
        }
      ]
})

module.exports = model("User", UserSchema )