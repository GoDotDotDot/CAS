const express = require('express')
const router = express.Router()
const Station = require('../models/station')

router.post('/station', (req, res) => {
  const {name, systems} = req.body
  Station.create({name, systems})
  .then((station) => { res.json(station) })
})
module.exports = router
