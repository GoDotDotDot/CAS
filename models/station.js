const mongoose = require('mongoose')
const Schema = mongoose.Schema
/**
 * 站点collection
 */
const StationSchema = new Schema({
  stationName: {
    type: String,
    require: true
  },
  systems: {
    type: Array
  },
  stationId: {
    type: Number
  }
}, {collection: 'Station'})

module.exports = mongoose.model('Station', StationSchema)
