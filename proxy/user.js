const jwt = require('jsonwebtoken')
const config = require('../db_config/config')
const Sessions = require('../models/sessions')

/**
 * 获取用户登录信息
 * @param {string} d 如果是移动端请传'm'，否则传null
 * @param {string} token 移动端专属，token令牌
 * @param {object} session 用户session信息
 * @return Promise
 */
exports.getUserSession = function (d, token, session) {
  return new Promise((resolve, reject) => {
    if (d === 'm') {
        // 移动终端需要带上d=m请求
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          const statusCode = 401
          resolve({statusCode, message: err.message, status: false})
        } else {
            // 对token做解码
          const {sId} = decoded
          Sessions.findOne({_id: sId}).then(userSession => {
            if (!userSession) {
              const statusCode = 401
              resolve({statusCode, message: '未登录', status: false})
            } else {
              const {expires, userInfo} = userSession
              if (expires > new Date()) {
                const statusCode = 200
                resolve({statusCode, message: '已登录', status: true, userInfo})
              } else {
                const statusCode = 401
                resolve({statusCode, message: '登录过期，请重新登录', status: false})
              }
            }
          }).catch(err => {
            resolve({statusCode: 500, message: `系统发生错误，错误信息：${err.message}`, status: false})
          })
        }
      })
    } else {
        // 浏览器请求，只需要判断session
      const {userInfo} = session
      if (userInfo) {
        resolve({statusCode: 200, message: '已登录', status: true, userInfo})
      } else {
        const statusCode = 401
        resolve({statusCode, message: '未登录', status: false})
      }
    }
  })
}
