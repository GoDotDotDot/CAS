const Permission = require('../models/permission')
const utils = require('../utils')
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId
/**
 * 通过ID获取权限数据
 * @param {*} id
 * @return {Document} 返回文档或错误对象
 */
exports.getPermissionById = async function (id) {
  const doc = await Permission.findById(id).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}

/**
 * 通过id数据查询权限数据
 * @param {Array} ids 要查询的id数组
 */
exports.getPermissionsByIds = async function (ids) {
  const doc = await Permission.find({_id: {$in: ids}}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}
/**
 * 通过归属系统获取权限
 * @param {*} system
 * @return {Document} 返回文档或错误对象
 */
exports.getPermissionsBySystem = async function (system) {
  const doc = await Permission.find({system}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}
/**
 * 通过Id和归属系统获取权限
 * @param {*} role
 * @param {*} system
 * @return {Document} 返回文档或错误对象
 */
exports.getPermissionByRoleSystem = async function (role, system) {
  if (Object.prototype.toString.call(role) !== '[object Array]') {
    role = [role]
  }
  const doc = await Permission.find({ roles: {$in: role}, system }).populate({
    path: 'source',
    select: {name: 1, description: 1, type: 1}
  }).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}

/**
 * 根据条件查询一条数据
 * @param {Object} condition 查询条件
 * @return {Document} 返回文档或错误对象
 */
exports.getOnePermissionByCondition = async function (condition) {
  const doc = await Permission.findOne({...condition}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}

/**
 * 根据条件查询
 * @param {Object} condition 查询条件
 * @return {Document} 返回文档或错误对象
 */
exports.getPermissionByCondition = async function (condition) {
  const doc = await Permission.find({...condition}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}

/**
 * 新增一条权限
 * @param {string} name 权限名称
 * @param {ObjectID} source 资源ID
 * @param {string} action 允许的行为
 * @param {string} roles 角色，备注：暂时定位string，后期可以更改或新增字段类型为ObjectID
 * @param {string} system 归属系统
 * @param {string} description 描述信息
 */
exports.addOnePermission = async function (name = null, source, action, roles, system, description) {
  const permission = new Permission({name, source, action, roles, system, description})
  const rst = await permission.save().then(() => utils.serializeSuccessData('新增成功')).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return rst
}
