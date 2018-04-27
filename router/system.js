const express = require('express')
const router = express.Router()
const Systems = require('../models/system')

router.post('/system', (req, res) => {
  const {name} = req.body
  Systems.create({name})
  .then((system) => { res.json(system) })
})
module.exports = router
