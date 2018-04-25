const express = require('express')
const app = express()
const bodyParser = require('body-parser')// 解析body字段模块
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const config = require('./db_config/config')
const sso = require('./router/sso')
const cas = require('./router/cas')

mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise })
mongoose.Promise = global.Promise
app.set('trust proxy', 'loopback')
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // 调用bodyParser模块以便程序正确解析body传入值
app.use(session({
  name: config.cookieName,
  resave: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection, ttl: 20 * 60 }),
  secret: config.secret,
  cookie: {
    domain: 'zzz.com',
    httpOnly: false
  }
  // genid: function (req) {
  //   return '123' // use UUIDs for session IDs
  // }
}))

app.use(express.static('static'))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})
app.use('/sso', sso)
app.use('/cas', cas)
app.use('/', (req, res) => {
  res.send('welcome using cas!')
})
var server = app.listen(3010, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
