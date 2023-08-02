const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  checkIn: String,
  checkOut: String,
  location: String,
  reservedRoom: [{
    id: Number,
    adults: Number,
    kids: Number,
  }],
  usePoints: {
    default: false,
    type: Boolean,
  },
  travelAgents: {
    default: false,
    type: Boolean,
  },
  AAARate: {
    default: false,
    type: Boolean,
  },
  AARPRate: {
    default: false,
    type: Boolean,
  },
  SeniorRate: {
    default: false,
    type: Boolean,
  },
  GovRate: {
    default: false,
    type: Boolean,
  },
  PromoCode: String,
  GroupCode: String,
  CorpAccount: String,
}, {timestamps: true})

const Reservation = mongoose.model('Reservation', ReservationSchema)

module.exports = Reservation