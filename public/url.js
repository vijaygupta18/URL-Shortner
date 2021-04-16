const mongoose = require('mongoose')
const shortId = require('shortid')

const UrlSchema = new mongoose.Schema({
 
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  full: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ShortUrl',UrlSchema)