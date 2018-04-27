const express = require('express')
const router = express.Router()
const permissionProxy = require('../proxy/permission')
const utils = require('../utils')
router.use((req, res, next) => {
  console.log(req.ip + '访问permission')
  next()
})

/**
 * 获取指定角色、系统下面的所有权限
 */
router.get('/', async(req, res) => {
  const {role, system} = req.query
  const source = await permissionProxy.getPermissionByRoleSystem(role, system)
  if (source.error) {
    return res.status(500).json(source)
  }
  res.status(200).json(utils.serializeSuccessData(source))
})

/**
 * 新增一条权限数据
 */
router.post('/', async(req, res) => {
  const {name, source, action, roles, system, description} = req.body
  const rst = await permissionProxy.addOnePermission(name, source, action, roles, system, description)
  res.json(rst)
})

/*
router.delete('/permission/:id', (req, res) => {
  const {id} = req.params
  if (!id) res.json({message: '参数不合法！', status: false})
  else {
    Permission.deleteOne({_id: id}).then((role) => {
      res.json(role)
    })
  }
})
router.get('/permission/:id', (req, res) => {
  const {id} = req.params
  if (!id) res.json({message: '参数不合法！', status: false})
  else {
    Permission.findById(id).then((permission) => {
      res.json(permission)
    })
  }
})
router.put('/permission', (req, res) => {
  const {id} = req.params
  const {name, description, source, roles, action, among} = req.body
  if (!id) res.json({message: '参数不合法！', status: false})
  else {
    Permission.findByIdAndUpdate(id, {name, description, source, roles, action, among}, {runSettersOnQuery: true, new: true}).then((permission) => {
      res.json(permission)
    })
  }
})
router.post('/permission', (req, res) => {
  const {name, description, source, roles, action} = req.body
  Permission.create({name, description, source, roles, action}).then((rst) => { res.json(rst) })
})
*/
module.exports = router
