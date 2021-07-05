const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  id: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  birthday: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  }
} , {
  collection: 'User'
})

module.exports = mongoose.model('User', userSchema);