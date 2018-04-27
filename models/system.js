const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SystemSchema = new Schema({
  name: {
    type: String, // 系统名称
    require: true
  },
  description: {
    type: String // 系统描述
  }
}, {collection: 'System'})

module.exports = mongoose.model('System', SystemSchema)
