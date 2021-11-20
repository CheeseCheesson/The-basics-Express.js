const db = require("../ext/db");

const schema = new db.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 2,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 2,
    trim: true
  },
  email: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 4,
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    maxlength: 35,
    minlength: 4,
    trim: true
  },
  create: {
    type: Date,
    default: new Date()
  }
});

schema.methods.getNameInUpperCase = function(){
  let name = this.firstName + ' ' + this.lastName
  return name.toUpperCase()
}

module.exports = db.model('User', schema)