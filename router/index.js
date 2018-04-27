const express = require('express')
const router = express.Router()
const sso = require('./sso')
const cas = require('./cas')
const source = require('./source')
const permission = require('./permission')
const SessionAuth = require('../cas/SessionAuth')

router.use('/sso', sso)
router.use('/cas', SessionAuth, cas)
router.use('/cas/source', SessionAuth, source)
router.use('/cas/permission', SessionAuth, permission)

module.exports = router
