const { Schema, model } = require('mongoose');

const FavoriteSchema = new Schema
({

      bill_id: {
        type: String,
        required: [true]
        
      },
      sponsor_name: {
        type: String,
        required: true
        
      },
      short_title: {
        type: String,
        required: true
        
      },
      introduced_date: {
        type: Date,
       
      },
      house_passage: {
        type: Date,
       
      },
      senate_passage: {
        type: Date,
       
      }
    })

module.exports = model("Favorite", FavoriteSchema )