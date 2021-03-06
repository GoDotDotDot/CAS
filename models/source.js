const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SourceSchema = new Schema({
  name: {
    type: String, // 资源名称，命名方式：地址
    require: true
  },
  description: {
    type: String, // 资源描述
    require: true
  },
  type: {
    type: String, // 类型，有route和api
    require: true
  },
  system: {
    type: String, // 归属系统
    require: true
  }
}, {collection: 'Source'})

module.exports = mongoose.model('Source', SourceSchema)
