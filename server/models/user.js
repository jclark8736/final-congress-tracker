const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');



const UserSchema = new Schema
  ({
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    zip: {
      type: Number,
      required: true,
      min: 5

    },
    password: {
      type: String,
      required: true
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Favorite"
      }
    ]
  })


UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema)