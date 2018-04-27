const express = require('express')
const router = express.Router()
const Role = require('../models/role')
router.use((req, res, next) => {
  console.log(req.ip + '访问role')
  next()
})
router.get('/role', (req, res) => {
  Role.find().then((role) => {
    const rst = role.map((ele) => ({name: ele.name, id: ele._id}))
    res.json(rst)
  })
})
router.delete('/role/:id', (req, res) => {
  const {id} = req.params
  if (!id) res.json({message: '非法的参数', status: false})
  else {
    Role.deleteOne({_id: id}).then((role) => {
      res.json(role)
    })
  }
})
router.get('/role/:id', (req, res) => {
  const {id} = req.params
  if (!id) res.json({message: '非法的参数', status: false})
  else {
    Role.findById(id).then((role) => {
      res.json(role)
    })
  }
})
router.put('/role/:id', (req, res) => {
  const {id} = req.params
  const {name, permission, routerSource} = req.body
  if (!id) res.json({message: '非法的参数', status: false})
  else {
    Role.findByIdAndUpdate(id, {name, permission, routerSource}, {runSettersOnQuery: true, new: true}).then((role) => {
      res.json(role)
    })
  }
})
router.post('/role', (req, res) => {
  const {name, permission, routerSource} = req.body
  Role.create({name, permission, routerSource}).then((rst) => { res.json(rst) })
})
module.exports = router
