const System = require('../models/system')
const utils = require('../utils')
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId
/**
 * 通过ID获取角色数据
 * @param {*} id
 * @return {Document} 返回文档或错误对象
 */
exports.getSystemById = async function (id) {
  const doc = await System.findById(id).then(d => d).catch((err) => {
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
exports.getSystemByName = async function (name) {
  const doc = await System.find({name}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}
