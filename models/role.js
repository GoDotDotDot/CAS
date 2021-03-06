const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
  name: {
    type: String, // 角色名称，例如ecoAdmin
    require: true
  },
  permission: {
    type: Array // 权限数组
  },
  description: {
    type: String // 角色描述
  },
  system: {
    type: Schema.Types.ObjectId // 归属系统
  }
}, {collection: 'Role'})

module.exports = mongoose.model('Role', RoleSchema)
