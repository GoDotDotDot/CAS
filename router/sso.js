const express = require('express')
const router = express.Router()
// const ReactDOMServer = require('react-dom/server')
// const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../db_config/config')
const bcrypt = require('bcrypt')
const SessionAuth = require('../cas/SessionAuth')
// const Login = require('../sso/Login')
var mysql = require('mysql')
var pool = mysql.createPool({
  connectionLimit: 10,
  host: '192.168.0.245',
  user: 'root',
  password: 'admin',
  database: 'breed'
})

// 该路由使用的中间件
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
  // 登录路由
router.get('/login', function (req, res) {
  const account = req.query.account
  const password = req.query.password
  const querySql = `select * from jc_user where account='${account}'`
  pool.query(querySql, (err, rst, fields) => {
    if (err) throw err
    if (rst.length === 1) {
      const serverPsw = rst[0].password
      bcrypt.compare(password, serverPsw).then((_res) => {
        if (_res) {
          const user = rst[0]
          const token = jwt.sign({ name: user.nickName, account: user.account, sId: req.sessionID }, config.secret, {
            expiresIn: '7d'
          })
          req.session.userInfo = {role: user.roleName, name: user.nickName, account: user.account}
          req.session.token = token
          res.status(200).json({success: true, message: '密码正确', data: {token, name: user.nickName, account: user.account, roleName: user.roleName}})
        } else {
          res.status(200).json({success: false, message: '密码错误'})
        }
      }).catch((err) => {
        throw err
      })
    }
  })
})
router.post('/login', function (req, res) {
  const account = req.body.account
  const password = req.body.password
  const querySql = `select * from jc_user where account='${account}'`
  pool.query(querySql, (err, rst, fields) => {
    if (err) throw err
    if (rst.length === 1) {
      const serverPsw = rst[0].password
      bcrypt.compare(password, serverPsw).then((_res) => {
        if (_res) {
          const user = rst[0]
          const token = jwt.sign({ name: user.nickName, account: user.account, sId: req.sessionID }, config.secret, {
            expiresIn: '7d'
          })
          req.session.userInfo = {role: user.roleName, name: user.nickName, account: user.account}
          req.session.token = token
          // const html = ReactDOMServer.renderToString(Login)
          // res.send(html)
          res.status(200).json({success: true, message: '密码正确', data: {token, name: user.nickName, account: user.account, roleName: user.roleName}})
        } else {
          res.status(200).json({success: false, message: '密码错误'})
        }
      }).catch((err) => {
        throw err
      })
    }
  })
})
  // 注销路由
router.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    // cannot access session here
    if (err) {
      res.end(err)
    } else {
      res.end('log out')
    }
  })
})
// 验证是否登录
router.get('/auth', SessionAuth, (req, res, next) => {
  const statusCode = 200
  res.status(statusCode).json({statusCode, message: '已登录', status: true})
})
// 注册
router.post('/register', (req, res) => {
  const acc = req.body.account
  const psw = req.body.password
  const querySql = `select account from jc_user where account = '${acc}';`
  pool.query(querySql, function (error, results, fields) {
    if (error) { pool.end(); throw error }
    if (results.length !== 0) res.json({success: false, message: '用户已存在!'})
    else {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          res.status(500).json({success: false, message: '服务器发生内部错误!'})
        }
        bcrypt.hash(psw, salt, function (err, hash) {
          if (err) {
            res.status(500).json({success: false, message: '加密出错！'})
          }
          const sql = `insert into jc_user (account,password) values ('${acc}','${hash}')`
          pool.query(sql, (err, rst, fields) => {
            if (err) throw (err)
            if (rst) {
              return res.status(200).json({success: true, message: '注册成功！', data: rst})
            }
          })
        })
      })
    }
  })
  // connection.end()
})
module.exports = router
