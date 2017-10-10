const express = require('express')
const app = express()
const bodyParser = require('body-parser')// 解析body字段模块
const User = require('./models/user')
const mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
const session = require('express-session')
const jwt = require('jsonwebtoken')
const MongoStore = require('connect-mongo')(session)
const config = require('./db_config/config')

mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise })
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // 调用bodyParser模块以便程序正确解析body传入值
app.use(session({
  name: config.cookieName,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: config.secret,
  cookie: {}
//   genid: function (req) {
//     return req.sessionID // use UUIDs for session IDs
//   }
}))
app.get('/', (req, res) => {
  if (req.session.token) {
    res.end(req.session.token)
  } else {
    res.end('sign out')
  }
})
app.get('/auth', (req, res) => {
  req.session.token = '123456'
  res.end('auth ok')
})
app.post('/login', (req, res) => {
  const account = req.body.account
  const password = req.body.password
  User.findOne({account}, (err, user) => {
    if (err) {
      throw err
    }
    if (!user) {
      res.json({success: false, message: '认证失败,用户不存在!'})
    } else {
      user.comparePassword(password, (err, isMatch) => {
        if (isMatch && !err) {
          const token = jwt.sign({ name: user.nickName, account: user.account }, config.secret, {
            expiresIn: '7d'
          })
          req.session.token = token
          res.json({
            success: true,
            message: '验证成功!',
            token: token,
            name: user.name
          })
        } else {
          res.send({success: false, message: '认证失败,密码错误!'})
        }
      })
    }
  })
})
app.get('/test', (req, res) => {
  req.session.token = null
  res.end('deleted')
})
app.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
        // cannot access session here
    if (err) {
      res.end(err)
    } else {
      res.end('log out')
    }
  })
})
app.get('/register', (req, res) => {
  const acc = req.query.account
  const psw = req.query.password
  const user = new User({
    account: acc,
    password: psw
  })
  user.save((err) => {
    if (err) {
      return res.json({success: false, message: '注册失败!'})
    }
    res.json({success: true, message: '成功创建新用户!'})
  })
})

app.use(express.static('static'))

var server = app.listen(3010, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
