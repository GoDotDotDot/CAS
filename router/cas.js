const express = require('express')
const router = express.Router()
// const SessionAuth = require('../cas/SessionAuth')
// const SourceAuth = require('../cas/SourceAuth')
// const PermissionAuth = require('../cas/PermissionAuth')
// const authProxy = require('../proxy/auth')
const userProxy = require('../proxy/user')
const sourceProxy = require('../proxy/source')
const permissionProxy = require('../proxy/permission')

let start = Date.now()
router.use(function timeLog (req, res, next) {
  start = Date.now()
  console.log('Time: ', start)
  next()
})

router.get('/auth',
// 暂时不采用中间件验证，如需可以直接调用下面的两个中间件进行相关验证
// authProxy.sessionAuth, // 登录检查
// authProxy.sourceAuth, // 资源检查
// 资源与权限验证
async(req, res, next) => {
  const {d, token, type, name, system, action} = req.query
  const {session} = req
  // ① 用户登录验证
  const userSession = await userProxy.getUserSession(d, token, session)
  if (!userSession.status) {
    const {statusCode} = userSession
    return res.status(statusCode).json(userSession)
  }
  // ② 资源认证
  const sourceInfo = await sourceProxy.getOneSourceByCondition({type, name, system})
  if (sourceInfo.error) {
    return res.status(500).json(sourceInfo)
  }
  if (!sourceInfo) {
    return res.status(404).json({statusCode: 404, message: '资源不存在', status: false})
  }
  // ③ 权限认证
  const permissionInfo = await permissionProxy.getOnePermissionByCondition({source: sourceInfo._id, action, role: userSession.userInfo.role, system})
  if (permissionInfo.error) {
    return res.status(500).json(permissionInfo)
  }
  if (!permissionInfo) {
    return res.status(404).json({statusCode: 404, message: '权限不存在', status: false})
  }
  res.status(200).json({statusCode: 200, message: '验证通过', status: true})
})

module.exports = router
