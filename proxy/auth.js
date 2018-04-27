const jwt = require('jsonwebtoken')
const config = require('../db_config/config')
const Sessions = require('../models/sessions')
const sourceProxy = require('../proxy/source')

exports.sourceAuthMiddleware = async (req, res, next) => {
  const {type, name, system} = req.query
  const doc = await sourceProxy.getSourceByCondition({type, name, system})
  if (doc.error) {
    res.status(500).json({statusCode: 500, message: `服务器发生了错误，错误消息：${doc.message}`, status: false})
  } else if (!doc) {
    res.status(404).json({statusCode: 404, message: '资源不存在', status: false})
  } else {
    next && next()
  }
}

exports.sessionAuthMiddleware = (req, res, next) => {
    // 检查设备，是否是非浏览器请求
  const {d} = req.query
  if (d === 'm') {
      // 移动终端需要带上d=m请求
    const {token} = req.query
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        const statusCode = 401
        res.status(statusCode).json({statusCode, message: err.message, status: false})
        return false
      } else {
          // 对token做解码
        const {sId} = decoded
        Sessions.findOne({_id: sId}).then(session => {
          if (!session) {
            const statusCode = 401
            res.status(statusCode).json({statusCode, message: '未登录', status: false})
          } else {
            const {expires} = session
            if (expires > new Date()) next()
            else {
              const statusCode = 401
              res.status(statusCode).json({statusCode, message: '登录过期，请重新登录', status: false})
            }
          }
        }).catch(err => {
          res.status(500).json({statusCode: 500, message: `系统发生错误，错误信息：${err.message}`, status: false})
        })
      }
    })
  } else {
      // 浏览器请求，只需要判断session
    if (req.session.userInfo)next()
    else {
      const statusCode = 401
      res.status(statusCode).json({statusCode, message: '未登录', status: false})
    }
  }
}
