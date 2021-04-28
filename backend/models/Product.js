const { time } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
   name: {
      type: String
   },
   description: {
      type: String
   },
   price: {
      type: String
   }
}, {
   collection: 'products'
})

module.exports = mongoose.model('Product', Product) 