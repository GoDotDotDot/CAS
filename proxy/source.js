const Source = require('../models/source')
const utils = require('../utils')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

/**
 * 通过ID获取资源数据
 * @param {*} id
 * @return {Document} 返回文档或错误对象
 */
exports.getSourceById = async function (id) {
  const doc = await Source.findById(id).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}

/**
 * 通过id数据查询资源数据
 * @param {Array} ids 要查询的id数组
 */
exports.getSourcesByIds = async function (ids) {
  const doc = await Source.find({_id: {$in: ids}}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}
/**
 * 通过归属系统获取资源
 * @param {*} system
 * @return {Document} 返回文档或错误对象
 */
exports.getSourcesBySystem = async function (system) {
  const doc = await Source.find({system}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}
/**
 * 通过类型和归属系统获取资源
 * @param {String} type
 * @param {*} system
 * @return {Document} 返回文档或错误对象
 */
exports.getSourceByTypeSystem = async function (type, system) {
  const doc = await Source.find({type, system: system}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}

/**
 * 根据条件查询一条数据
 * @param {Object} condition 查询条件
 * @return {Document} 返回文档或错误对象
 */
exports.getOneSourceByCondition = async function (condition) {
  const doc = await Source.findOne({...condition}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}
/**
 * 根据条件查询
 * @param {Object} condition 查询条件
 * @return {Document} 返回文档或错误对象
 */
exports.getSourceByCondition = async function (condition) {
  const doc = await Source.find({...condition}).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return doc
}

/**
 * 新增一条资源记录
 * @param {string} name 资源名称
 * @param {string} type 资源类型
 * @param {string} system 归属系统
 */
exports.addOneSource = async function (name, type, system, description) {
  const source = new Source({name, type, system, description})
  const rst = await source.save().then(() => utils.serializeSuccessData('新增成功')).catch((err) => {
    return utils.serializeErrorData(err)
  })
  return rst
}
