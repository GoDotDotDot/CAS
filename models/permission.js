const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PermissionSchema = new Schema({
  name: {
    type: String, // 权限名称
    require: true
  },
  description: {
    type: String // 权限描述
  },
  source: {
    type: Schema.Types.ObjectId, // 对应的资源
    ref: 'Source'
  },
  roles: {
    type: Array // 对应的角色
  },
  action: {
    type: String // 允许的行为
  },
  system: {
    type: String // 归属的系统
  }
}, {collection: 'Permission'})

PermissionSchema.index({role: 1})
PermissionSchema.index({source: 1})
PermissionSchema.index({action: 1})
// 可能需要做联合主键

module.exports = mongoose.model('Permission', PermissionSchema)
