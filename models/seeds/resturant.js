const mongoose = require('mongoose')
const Schema = mongoose.Schema
const resturantSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  name_en: String,
  category: {
    type: String,
    // required: true
  },
  image: {
    type: String,
    // required: true
  },
  location: String,
  phone: String,
  google_map: String,
  rating: {
    type: String,
    // required: true
  },
  description: String,
  done: {
    type: Boolean
  }
})

module.exports = mongoose.model('Restaurant', resturantSchema)