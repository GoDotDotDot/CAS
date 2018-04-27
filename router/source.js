const express = require('express')
const router = express.Router()
const sourceProxy = require('../proxy/source')
// const permissionProxy = require('../proxy/permission')
const Permission = require('../models/permission')
const utils = require('../utils')
router.use((req, res, next) => {
  console.log(req.ip + '访问source')
  next()
})

/**
 * 获取指定类型、系统下的所有资源
 */
router.get('/', async (req, res) => {
  const {type, system} = req.query
  const source = await sourceProxy.getSourceByTypeSystem(type, system)
  if (source.error) {
    return res.status(500).json(source)
  }
  res.status(200).json(utils.serializeSuccessData(source))
})
/**
 * 获取指定角色、系统的路由列表
 */
router.get('/route', async (req, res) => {
  let {system, role} = req.query
  if (Object.prototype.toString.call(role) !== '[object Array]') {
    role = [role]
  }
  const docs = await Permission.find({roles: {$in: role}, system, action: 'GET'}).populate({
    path: 'source',
    select: {name: 1, description: 1, type: 1},
    match: {type: 'route'}
  }).then(d => d).catch((err) => {
    return utils.serializeErrorData(err)
  })
  res.status(200).json(utils.serializeSuccessData(docs))
})

/**
 * 新增一条资源
 */
router.post('/', async(req, res) => {
  const {name, description, type, system} = req.body
  const rst = await sourceProxy.addOneSource(name, type, system, description)
  res.json(rst)
})

/*
router.delete('/source/:id', (req, res) => {
  const {id} = req.params
  if (!id) res.json({message: '非法的参数', status: false})
  else {
    Source.deleteOne({_id: id}).then((source) => {
      res.json(source)
    })
  }
})
router.get('/source/:id', (req, res) => {
  const {id} = req.params
  if (!id) res.json({message: '非法的参数', status: false})
  else {
    Source.findById(id).then((source) => {
      res.json(source)
    })
  }
})
router.put('/source/:id', (req, res) => {
  const {id} = req.params
  const {name, description, type, actions, among} = req.body
  if (!id) res.json({message: '非法的参数', status: false})
  else {
    Source.findByIdAndUpdate(id, {name, description, type, actions, among}, {runSettersOnQuery: true, new: true}).then((source) => {
      res.json(source)
    })
  }
})
router.post('/source', (req, res) => {
  const {name, description, type, actions, among} = req.body
  Source.create({name, description, type, actions, among}).then((rst) => { res.json(rst) })
})
router.get('/source', (req, res) => {

})
*/
module.exports = router
