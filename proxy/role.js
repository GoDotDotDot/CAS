const Role = require('../models/role')
const utils = require('../utils')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
/**
 * 通过ID获取角色数据
 * @param {*} id
 * @return {Document} 返回文档或错误对象
 */
exports.getRoleById = async function (id) {
  const doc = await Role.findById(id).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}

/**
 * 通过归属系统获取角色
 * @param {*} system
 * @return {Document} 返回文档或错误对象
 */
exports.getRolesBySystem = async function (system) {
  const doc = await Role.find({system}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}
/**
 * 通过类型和归属系统获取角色
 * @param {String} name
 * @param {*} system
 * @return {Document} 返回文档或错误对象
 */
exports.getRoleByNameSystem = async function (name, system) {
  const doc = await Role.find({name, system: ObjectId(ObjectId)}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}
